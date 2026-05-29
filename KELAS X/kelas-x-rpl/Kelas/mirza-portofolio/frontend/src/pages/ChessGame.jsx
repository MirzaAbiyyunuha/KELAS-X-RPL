import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaRedo, FaChessKing } from 'react-icons/fa';

// ─── Piece Unicode ───
const PIECE_SYMBOLS = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟',
};

// ─── Initial Board ───
const initialBoard = () => {
  const board = Array(8).fill(null).map(() => Array(8).fill(null));
  const backRank = ['R','N','B','Q','K','B','N','R'];
  for (let c = 0; c < 8; c++) {
    board[0][c] = backRank[c].toLowerCase(); // black
    board[1][c] = 'p';                       // black pawns
    board[6][c] = 'P';                       // white pawns
    board[7][c] = backRank[c];               // white
  }
  return board;
};

const isWhite = (piece) => piece && piece === piece.toUpperCase();
const isBlack = (piece) => piece && piece === piece.toLowerCase();
const sameColor = (a, b) => (isWhite(a) && isWhite(b)) || (isBlack(a) && isBlack(b));

// ─── Move Validation ───
const isValidMove = (board, fromR, fromC, toR, toC, piece) => {
  const target = board[toR][toC];
  if (target && sameColor(piece, target)) return false;

  const dr = toR - fromR;
  const dc = toC - fromC;
  const type = piece.toLowerCase();

  const pathClear = (rDir, cDir, steps) => {
    for (let i = 1; i < steps; i++) {
      if (board[fromR + rDir * i][fromC + cDir * i]) return false;
    }
    return true;
  };

  switch (type) {
    case 'p': {
      const direction = isWhite(piece) ? -1 : 1;
      const startRow = isWhite(piece) ? 6 : 1;
      // Move forward
      if (dc === 0 && dr === direction && !target) return true;
      // Double move from start
      if (dc === 0 && fromR === startRow && dr === 2 * direction && !target && !board[fromR + direction][fromC]) return true;
      // Capture diagonally
      if (Math.abs(dc) === 1 && dr === direction && target && !sameColor(piece, target)) return true;
      return false;
    }
    case 'r': {
      if (dr !== 0 && dc !== 0) return false;
      const rDir = dr === 0 ? 0 : dr / Math.abs(dr);
      const cDir = dc === 0 ? 0 : dc / Math.abs(dc);
      return pathClear(rDir, cDir, Math.max(Math.abs(dr), Math.abs(dc)));
    }
    case 'n':
      return (Math.abs(dr) === 2 && Math.abs(dc) === 1) || (Math.abs(dr) === 1 && Math.abs(dc) === 2);
    case 'b': {
      if (Math.abs(dr) !== Math.abs(dc)) return false;
      return pathClear(dr / Math.abs(dr), dc / Math.abs(dc), Math.abs(dr));
    }
    case 'q': {
      if (dr === 0 || dc === 0) {
        const rDir = dr === 0 ? 0 : dr / Math.abs(dr);
        const cDir = dc === 0 ? 0 : dc / Math.abs(dc);
        return pathClear(rDir, cDir, Math.max(Math.abs(dr), Math.abs(dc)));
      }
      if (Math.abs(dr) === Math.abs(dc)) {
        return pathClear(dr / Math.abs(dr), dc / Math.abs(dc), Math.abs(dr));
      }
      return false;
    }
    case 'k':
      return Math.abs(dr) <= 1 && Math.abs(dc) <= 1;
    default:
      return false;
  }
};

const getLegalMoves = (board, row, col) => {
  const piece = board[row][col];
  if (!piece) return [];
  const moves = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (isValidMove(board, row, col, r, c, piece)) {
        moves.push({ r, c });
      }
    }
  }
  return moves;
};

const ChessGame = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [turn, setTurn] = useState('white');
  const [captured, setCaptured] = useState({ white: [], black: [] });
  const [lastMove, setLastMove] = useState(null);
  const [gameLog, setGameLog] = useState([]);

  const colLabels = ['a','b','c','d','e','f','g','h'];

  const resetGame = useCallback(() => {
    setBoard(initialBoard());
    setSelected(null);
    setLegalMoves([]);
    setTurn('white');
    setCaptured({ white: [], black: [] });
    setLastMove(null);
    setGameLog([]);
  }, []);

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    // If a piece is already selected
    if (selected) {
      const selPiece = board[selected.r][selected.c];

      // Clicking the same piece — deselect
      if (selected.r === row && selected.c === col) {
        setSelected(null);
        setLegalMoves([]);
        return;
      }

      // Clicking another piece of your color — reselect
      if (piece && ((turn === 'white' && isWhite(piece)) || (turn === 'black' && isBlack(piece)))) {
        setSelected({ r: row, c: col });
        setLegalMoves(getLegalMoves(board, row, col));
        return;
      }

      // Attempt move
      if (isValidMove(board, selected.r, selected.c, row, col, selPiece)) {
        const newBoard = board.map(r => [...r]);
        const capturedPiece = newBoard[row][col];
        
        // Handle pawn promotion
        let movedPiece = selPiece;
        if (selPiece.toLowerCase() === 'p' && (row === 0 || row === 7)) {
          movedPiece = isWhite(selPiece) ? 'Q' : 'q';
        }
        
        newBoard[row][col] = movedPiece;
        newBoard[selected.r][selected.c] = null;

        if (capturedPiece) {
          setCaptured(prev => ({
            ...prev,
            [turn]: [...prev[turn], capturedPiece],
          }));
        }

        const notation = `${PIECE_SYMBOLS[selPiece]} ${colLabels[selected.c]}${8 - selected.r} → ${colLabels[col]}${8 - row}${capturedPiece ? ' ✕' + PIECE_SYMBOLS[capturedPiece] : ''}`;
        setGameLog(prev => [...prev, notation]);
        setLastMove({ from: { r: selected.r, c: selected.c }, to: { r: row, c: col } });
        setBoard(newBoard);
        setTurn(turn === 'white' ? 'black' : 'white');
      }

      setSelected(null);
      setLegalMoves([]);
      return;
    }

    // Select a piece if it belongs to the current player
    if (piece && ((turn === 'white' && isWhite(piece)) || (turn === 'black' && isBlack(piece)))) {
      setSelected({ r: row, c: col });
      setLegalMoves(getLegalMoves(board, row, col));
    }
  };

  const isLegalTarget = (r, c) => legalMoves.some(m => m.r === r && m.c === c);
  const isLastMoveSquare = (r, c) => lastMove && ((lastMove.from.r === r && lastMove.from.c === c) || (lastMove.to.r === r && lastMove.to.c === c));

  return (
    <div className="min-h-screen bg-darkBg text-slate-200 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-darkBg/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <FaChessKing className="text-purple-400" />
            <h1 className="text-lg font-bold text-gradient">Aether Chess</h1>
          </div>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full glass text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <FaRedo size={12} />
            Reset
          </button>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Left Panel — Captured Pieces & Log */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex flex-col gap-4 w-56"
        >
          {/* Turn Indicator */}
          <div className="glass-card p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Current Turn</p>
            <div className={`flex items-center gap-3 ${turn === 'white' ? 'text-white' : 'text-purple-300'}`}>
              <div className={`w-4 h-4 rounded-full border-2 ${turn === 'white' ? 'bg-white border-white shadow-[0_0_12px_rgba(255,255,255,0.5)]' : 'bg-purple-900 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.5)]'}`} />
              <span className="font-semibold capitalize">{turn}</span>
            </div>
          </div>

          {/* Captured Pieces */}
          <div className="glass-card p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Captured</p>
            <div className="space-y-2">
              <div>
                <p className="text-[10px] text-slate-600 mb-1">By White</p>
                <div className="flex flex-wrap gap-1 min-h-[28px]">
                  {captured.white.map((p, i) => (
                    <span key={i} className="text-lg">{PIECE_SYMBOLS[p]}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 mb-1">By Black</p>
                <div className="flex flex-wrap gap-1 min-h-[28px]">
                  {captured.black.map((p, i) => (
                    <span key={i} className="text-lg">{PIECE_SYMBOLS[p]}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Game Log */}
          <div className="glass-card p-4 max-h-60 overflow-y-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Move Log</p>
            <div className="space-y-1">
              {gameLog.length === 0 && <p className="text-xs text-slate-600 italic">No moves yet</p>}
              {gameLog.map((log, i) => (
                <div key={i} className={`text-xs px-2 py-1 rounded ${i % 2 === 0 ? 'text-blue-300 bg-blue-500/5' : 'text-purple-300 bg-purple-500/5'}`}>
                  <span className="text-slate-600 mr-1">{i + 1}.</span> {log}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Chess Board */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center"
        >
          {/* Mobile Turn */}
          <div className="lg:hidden mb-4 glass-card px-6 py-3 flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${turn === 'white' ? 'bg-white shadow-[0_0_10px_white]' : 'bg-purple-400 shadow-[0_0_10px_rgb(168,85,247)]'}`} />
            <span className="text-sm font-medium capitalize">{turn}'s Turn</span>
          </div>

          {/* Board */}
          <div className="relative">
            {/* Column Labels top */}
            <div className="flex ml-8 mb-1">
              {colLabels.map(l => (
                <div key={l} className="w-[clamp(40px,8vw,64px)] text-center text-[10px] text-slate-600 uppercase">{l}</div>
              ))}
            </div>

            <div className="flex">
              {/* Row Labels left */}
              <div className="flex flex-col mr-1 justify-around">
                {[8,7,6,5,4,3,2,1].map(n => (
                  <div key={n} className="h-[clamp(40px,8vw,64px)] flex items-center justify-center text-[10px] text-slate-600 w-6">{n}</div>
                ))}
              </div>

              {/* Board Grid */}
              <div
                className="grid grid-cols-8 rounded-xl overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                style={{ boxShadow: '0 0 60px rgba(139,92,246,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)' }}
              >
                {board.map((row, rIdx) =>
                  row.map((piece, cIdx) => {
                    const isDark = (rIdx + cIdx) % 2 === 1;
                    const isSelected = selected && selected.r === rIdx && selected.c === cIdx;
                    const isLegal = isLegalTarget(rIdx, cIdx);
                    const isLastMove = isLastMoveSquare(rIdx, cIdx);
                    const isCapture = isLegal && piece;

                    return (
                      <motion.button
                        key={`${rIdx}-${cIdx}`}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSquareClick(rIdx, cIdx)}
                        className={`
                          w-[clamp(40px,8vw,64px)] h-[clamp(40px,8vw,64px)]
                          flex items-center justify-center relative
                          text-2xl sm:text-3xl md:text-4xl
                          transition-all duration-200 cursor-pointer
                          ${isDark
                            ? 'bg-[#2a1f4e] hover:bg-[#362868]'
                            : 'bg-[#1a1535] hover:bg-[#251f4a]'
                          }
                          ${isSelected ? '!bg-blue-500/40 ring-2 ring-blue-400/60 ring-inset' : ''}
                          ${isLastMove ? '!bg-yellow-500/10' : ''}
                        `}
                      >
                        {/* Legal move dot */}
                        {isLegal && !isCapture && (
                          <div className="absolute w-3 h-3 rounded-full bg-blue-400/40 animate-pulse" />
                        )}
                        {/* Capture ring */}
                        {isCapture && (
                          <div className="absolute inset-1 rounded-full border-2 border-red-400/50 animate-pulse" />
                        )}
                        {/* Piece */}
                        {piece && (
                          <motion.span
                            key={`piece-${rIdx}-${cIdx}-${piece}`}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`relative z-10 drop-shadow-lg select-none ${
                              isWhite(piece)
                                ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.3)]'
                                : 'text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.4)]'
                            }`}
                          >
                            {PIECE_SYMBOLS[piece]}
                          </motion.span>
                        )}
                      </motion.button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Mobile Captured */}
          <div className="lg:hidden mt-4 flex gap-4">
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <span className="text-[10px] text-slate-500">W:</span>
              {captured.white.map((p, i) => <span key={i} className="text-sm">{PIECE_SYMBOLS[p]}</span>)}
            </div>
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <span className="text-[10px] text-slate-500">B:</span>
              {captured.black.map((p, i) => <span key={i} className="text-sm">{PIECE_SYMBOLS[p]}</span>)}
            </div>
          </div>
        </motion.div>

        {/* Right Panel — Game Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex flex-col gap-4 w-56"
        >
          <div className="glass-card p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">How to Play</p>
            <div className="space-y-2 text-xs text-slate-400">
              <p>• Click a piece to select it</p>
              <p>• Blue dots show valid moves</p>
              <p>• Red rings show captures</p>
              <p>• Pawns auto-promote to Queen</p>
              <p>• Two player — share the screen!</p>
            </div>
          </div>

          <div className="glass-card p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Pieces</p>
            <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
              {[['♔','King'],['♕','Queen'],['♖','Rook'],['♗','Bishop'],['♘','Knight'],['♙','Pawn']].map(([sym, name]) => (
                <div key={name} className="flex items-center gap-1.5">
                  <span className="text-lg text-white">{sym}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChessGame;

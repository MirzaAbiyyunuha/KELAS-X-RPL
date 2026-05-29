import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaTrash, FaHistory } from 'react-icons/fa';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [lastResult, setLastResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [animKey, setAnimKey] = useState(0);

  const handleNumber = useCallback((num) => {
    setDisplay(prev => {
      if (prev === '0' || lastResult !== null) {
        setLastResult(null);
        return num;
      }
      return prev.length < 16 ? prev + num : prev;
    });
    if (lastResult !== null) {
      setExpression('');
      setLastResult(null);
    }
  }, [lastResult]);

  const handleOperator = useCallback((op) => {
    setExpression(prev => {
      const current = lastResult !== null ? lastResult.toString() : display;
      setLastResult(null);
      setDisplay('0');
      if (prev && prev.match(/[+\-×÷]$/)) {
        return prev.slice(0, -2) + ` ${op}`;
      }
      return `${prev}${current} ${op}`;
    });
  }, [display, lastResult]);

  const handleDecimal = useCallback(() => {
    if (lastResult !== null) {
      setDisplay('0.');
      setExpression('');
      setLastResult(null);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(prev => prev + '.');
    }
  }, [display, lastResult]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setExpression('');
    setLastResult(null);
    setAnimKey(k => k + 1);
  }, []);

  const handleBackspace = useCallback(() => {
    if (lastResult !== null) return;
    setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  }, [lastResult]);

  const handlePercent = useCallback(() => {
    const val = parseFloat(display);
    if (!isNaN(val)) {
      const result = val / 100;
      setDisplay(result.toString());
    }
  }, [display]);

  const handleToggleSign = useCallback(() => {
    setDisplay(prev => {
      if (prev === '0') return prev;
      return prev.startsWith('-') ? prev.slice(1) : '-' + prev;
    });
  }, []);

  const calculate = useCallback(() => {
    try {
      const current = lastResult !== null ? lastResult.toString() : display;
      const fullExpr = `${expression}${current}`;
      if (!fullExpr.trim()) return;

      // Replace display operators with JS operators
      const jsExpr = fullExpr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .trim();

      // Safe eval using Function
      const result = new Function(`return (${jsExpr})`)();

      if (result === Infinity || result === -Infinity || isNaN(result)) {
        setDisplay('Error');
        setExpression('');
        setLastResult(null);
        return;
      }

      const formatted = parseFloat(result.toFixed(10)).toString();
      setHistory(prev => [{
        expr: fullExpr,
        result: formatted,
        id: Date.now()
      }, ...prev].slice(0, 10));
      setDisplay(formatted);
      setExpression('');
      setLastResult(result);
      setAnimKey(k => k + 1);
    } catch {
      setDisplay('Error');
      setExpression('');
      setLastResult(null);
    }
  }, [display, expression, lastResult]);

  const buttons = [
    { label: 'C',  type: 'function', action: handleClear,      color: 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/20' },
    { label: '±',  type: 'function', action: handleToggleSign,  color: 'bg-slate-500/20 text-slate-300 hover:bg-slate-500/30 border-slate-500/20' },
    { label: '%',  type: 'function', action: handlePercent,     color: 'bg-slate-500/20 text-slate-300 hover:bg-slate-500/30 border-slate-500/20' },
    { label: '÷',  type: 'operator', action: () => handleOperator('÷'), color: 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/20' },

    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '×',  type: 'operator', action: () => handleOperator('×'), color: 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/20' },

    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '−',  type: 'operator', action: () => handleOperator('−'), color: 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/20' },

    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+',  type: 'operator', action: () => handleOperator('+'), color: 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/20' },

    { label: '0', type: 'number', span: true },
    { label: '.', type: 'function', action: handleDecimal, color: 'bg-darkSurface/80 text-white hover:bg-white/10 border-white/5' },
    { label: '=', type: 'equals',   action: calculate,     color: 'bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 border-transparent shadow-[0_0_20px_rgba(99,102,241,0.3)]' },
  ];

  return (
    <div className="min-h-screen bg-darkBg text-slate-200 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />

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
          <h1 className="text-lg font-bold text-gradient">Quantum Calculator</h1>
          <div className="w-24" /> {/* spacer */}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Calculator */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-sm mx-auto"
        >
          <div className="glass-card overflow-hidden" style={{ boxShadow: '0 0 60px rgba(139,92,246,0.08), 0 25px 50px rgba(0,0,0,0.4)' }}>
            {/* Display */}
            <div className="p-6 pb-4 border-b border-white/5">
              {/* Expression */}
              <div className="text-right text-sm text-slate-500 h-6 overflow-hidden">
                {expression}
              </div>
              {/* Main Result */}
              <motion.div
                key={animKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-right"
              >
                <span className={`font-light tracking-tight ${
                  display.length > 12 ? 'text-2xl' : display.length > 8 ? 'text-3xl' : 'text-5xl'
                } ${lastResult !== null ? 'text-gradient' : 'text-white'}`}>
                  {display}
                </span>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="p-4 grid grid-cols-4 gap-2.5">
              {buttons.map((btn, i) => (
                <motion.button
                  key={btn.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => {
                    if (btn.type === 'number') handleNumber(btn.label);
                    else if (btn.action) btn.action();
                  }}
                  className={`
                    ${btn.span ? 'col-span-2' : ''}
                    h-16 rounded-2xl text-xl font-medium
                    border transition-all duration-200 cursor-pointer
                    ${btn.color || 'bg-darkSurface/80 text-white hover:bg-white/10 border-white/5'}
                    ${btn.type === 'equals' ? 'font-bold text-2xl' : ''}
                  `}
                >
                  {btn.label}
                </motion.button>
              ))}
            </div>

            {/* Backspace */}
            <div className="px-4 pb-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBackspace}
                className="w-full h-10 rounded-xl text-sm glass text-slate-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FaTrash size={10} />
                Backspace
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* History Panel */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:block w-64"
        >
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <FaHistory className="text-purple-400" size={12} />
              <p className="text-xs text-slate-500 uppercase tracking-wider">History</p>
            </div>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {history.length === 0 && (
                <p className="text-xs text-slate-600 italic">No calculations yet</p>
              )}
              {history.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => {
                    setDisplay(item.result);
                    setLastResult(parseFloat(item.result));
                  }}
                >
                  <div className="text-[11px] text-slate-500 truncate">{item.expr}</div>
                  <div className="text-sm font-medium text-blue-300 mt-0.5">= {item.result}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Calculator;

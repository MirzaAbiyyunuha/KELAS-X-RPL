import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/register', {
        name,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/admin'); // or to dashboard if non-admin
      }
    } catch (err) {
      console.error("Registrasi Error Detil:", err);
      if (err.response && err.response.data && err.response.data.message) {
         setError(err.response.data.message);
      } else {
         setError('Terjadi kesalahan koneksi (' + err.message + '). Pastikan backend aktif.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Subtle bg glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gradient mb-1">Daftar Akun</h1>
          <p className="text-sm text-slate-500">Buat akun untuk masuk ke dashboard</p>
        </div>

        {/* Card */}
        <div className="glass-card p-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2.5 rounded-lg mb-4 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Nama Lengkap</label>
              <input
                type="text"
                className="w-full bg-darkBg/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors text-white placeholder-slate-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Email</label>
              <input
                type="email"
                className="w-full bg-darkBg/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors text-white placeholder-slate-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anda@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Password</label>
              <input
                type="password"
                className="w-full bg-darkBg/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors text-white placeholder-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 8 karakter"
                required
                minLength={8}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2.5 rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Memproses...' : 'Daftar Sekarang'}
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              Sudah punya akun?{' '}
              <Link to="/login" className="text-primary hover:underline transition-colors">
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-primary transition-colors">
            <FaArrowLeft size={10} />
            Kembali ke Portfolio
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-darkBg">
            {/* Sidebar */}
            <aside className="w-64 glass border-r border-white/5 p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-gradient mb-10">Admin Panel</h2>
                
                <nav className="flex-1 space-y-2">
                    <Link to="/" className="block px-4 py-2 mb-6 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all text-sm flex items-center justify-center gap-2">
                        ← Kembali ke Beranda
                    </Link>
                    <a href="#profile" className="block px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Profile</a>
                    <a href="#skills" className="block px-4 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">Skills</a>
                    <a href="#projects" className="block px-4 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">Projects</a>
                    <a href="#education" className="block px-4 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">Education</a>
                </nav>

                <button 
                    onClick={handleLogout}
                    className="mt-auto flex items-center justify-center w-full px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                >
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto">
                <header className="mb-10">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-slate-400">Manage your portfolio content here.</p>
                </header>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="glass-card p-6">
                        <h3 className="text-slate-400 text-sm">Total Projects</h3>
                        <p className="text-3xl font-bold mt-2">12</p>
                    </div>
                    <div className="glass-card p-6">
                        <h3 className="text-slate-400 text-sm">Total Skills</h3>
                        <p className="text-3xl font-bold mt-2">8</p>
                    </div>
                    <div className="glass-card p-6">
                        <h3 className="text-slate-400 text-sm">Messages</h3>
                        <p className="text-3xl font-bold mt-2">24</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

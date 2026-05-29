import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-darkBg/50">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-1">Mirza</h3>
            <p className="text-sm text-slate-500">Crafting digital experiences</p>
          </div>

          {/* Social l
          <div className="flex gap-4">
            {[
              { icon: <FaGithub size={18} />, href: 'https://github.com' },
              { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <FaInstagram size={18} />, href: 'https://instagram.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500 flex items-center gap-1">
            © {currentYear} Made with <FaHeart className="text-red-400 text-xs" /> by Mirza Abiyyunuha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

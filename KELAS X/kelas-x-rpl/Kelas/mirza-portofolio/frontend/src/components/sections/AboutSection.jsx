import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Done', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Happy Clients', value: '5+' },
  ];

  const highlights = [
    { icon: <FaCode />, title: 'Frontend', desc: 'React, Tailwind CSS, Framer Motion' },
    { icon: <FaServer />, title: 'Backend', desc: 'Laravel, Node.js, REST APIs' },
    { icon: <FaDatabase />, title: 'Database', desc: 'MySQL, PostgreSQL, MongoDB' },
    { icon: <FaMobileAlt />, title: 'Responsive', desc: 'Mobile-first, Cross-browser' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Data diri saya</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            <span className="text-gradient"></span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              halo perkenalkan nama saya <span className="text-white font-medium">Mirza Abiyyunuha</span> saya pelajar di smkn 2 buduran jurusan rpl
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              saya mempelajari cara membuat web frontend dan backend menggunakan AI
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 glass rounded-xl"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-primary text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

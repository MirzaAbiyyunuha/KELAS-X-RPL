import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChess, FaCalculator, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Aether Chess',
    description: 'Game catur interaktif 2 pemain dengan tampilan cyberpunk, validasi langkah, dan animasi premium.',
    tech: ['React', 'Framer Motion', 'Game Logic'],
    icon: <FaChess size={40} />,
    gradient: 'from-purple-500/20 to-blue-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]',
    link: '/chess',
    accent: 'text-purple-400',
  },
  {
    id: 2,
    title: 'Quantum Calculator',
    description: 'Kalkulator simpel dengan desain futuristik, history perhitungan, dan antarmuka responsif.',
    tech: ['React', 'CSS', 'Math'],
    icon: <FaCalculator size={36} />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]',
    link: '/calculator',
    accent: 'text-blue-400',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={project.link} className="block group">
                <div className={`glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 ${project.glow}`}>
                  {/* Icon Area */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                    {/* Animated background circles */}
                    <div className="absolute w-32 h-32 rounded-full bg-white/5 -top-8 -right-8 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute w-24 h-24 rounded-full bg-white/5 -bottom-6 -left-6 group-hover:scale-150 transition-transform duration-700" />

                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`relative z-10 ${project.accent} drop-shadow-lg`}
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <FaArrowRight className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-primary/10 text-primary/80 px-3 py-1 rounded-full border border-primary/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

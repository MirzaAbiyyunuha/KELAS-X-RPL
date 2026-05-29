import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const education = [
  {
    id: 1,
    school: 'SMPN 1 BUDURAN ',
    period: '2022 — 2025',
    description: 'pelajar',
    highlights: ['pernah rangking 1'],
    active: true,
  },
  {
    id: 2,
    school: 'SMKN 2 BUDURAN ',
    period: '2025 — 2028',
    description: 'saya pelajar di jurusan rpl',
    highlights: ['Masih belajar membuat web'],
    active: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">riwayat</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            <span className="text-gradient">Pendidikan</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-purple-500/30 to-transparent" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-2 ${edu.active
                  ? 'bg-primary border-primary shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                  : 'bg-darkCard border-slate-600'
                  }`} />
              </div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                <div className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 ${edu.active ? 'animate-border-glow' : ''
                  }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <FaGraduationCap className="text-primary text-xl" />
                    {edu.active && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Current</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{edu.school}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <FaCalendarAlt className="text-xs" />
                    {edu.period}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span key={h} className="text-xs bg-white/5 text-slate-400 px-2.5 py-1 rounded-full border border-white/5">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

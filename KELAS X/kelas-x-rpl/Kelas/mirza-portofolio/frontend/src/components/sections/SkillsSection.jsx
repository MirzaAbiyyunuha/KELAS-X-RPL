import { motion } from 'framer-motion';
import {
  FaReact, FaLaravel, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaPhp
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiMysql, SiVite
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'PHP', icon: <FaPhp />, color: '#777BB4', level: 80 },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 90 },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 75 },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: 85 },

];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase"></span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            My  <span className="text-gradient">Skill</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-card p-5 flex flex-col items-center gap-3 group cursor-default hover:border-white/20 transition-all duration-300"
            >
              <div
                className="text-3xl transition-all duration-300 group-hover:scale-125"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>

              {/* Skill bar */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

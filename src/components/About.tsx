import { GraduationCap, MapPin, Briefcase, Zap, Award, Users, Rocket, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { value: '8.41/10', label: 'CGPA', icon: Award, color: 'from-blue-500 to-cyan-500' },
  { value: '20+', label: 'Projects Built', icon: Rocket, color: 'from-purple-500 to-pink-500' },
  { value: '4', label: 'Companies Worked With', icon: Users, color: 'from-emerald-500 to-teal-500' },
  { value: '15+', label: 'Technologies', icon: Code2, color: 'from-orange-500 to-red-500' },
];

const info = [
  {
    icon: GraduationCap,
    text: 'B.Tech in AI & Data Science, IIITDM Kurnool (2021-2025)',
    color: 'blue',
  },
  {
    icon: MapPin,
    text: 'Based in Jaipur, Rajasthan, India',
    color: 'purple',
  },
  {
    icon: Briefcase,
    text: 'Available for Freelance Projects',
    color: 'emerald',
  },
  {
    icon: Zap,
    text: 'Response Time: Within 24 hours',
    color: 'amber',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#1E293B]"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <span className="text-sm text-cyan-400">Get to Know Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Bio with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />
            <div className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  I'm <span className="text-white font-semibold">Mayank Tanwar</span>, a recent graduate in Artificial Intelligence and Data Science from
                  IIIT Design and Manufacturing Kurnool. I specialize in building <span className="text-cyan-400">intelligent, scalable
                  systems</span> that solve real-world problems.
                </p>
                <p>
                  My expertise spans <span className="text-blue-400">full-stack web development, AI/ML engineering, and data analytics</span>.
                  I've worked with companies like RGA & Co., StyledGenie UG, Compucom Software Limited,
                  and the Robert Bosch Centre at IIT Madras, building solutions that have improved
                  efficiency by up to <span className="text-emerald-400 font-semibold">40%</span> and served over <span className="text-purple-400 font-semibold">200 users</span>.
                </p>
                <p>
                  Whether it's developing web applications with the <span className="text-cyan-400">MERN stack</span>, creating AI-powered
                  chatbots, building predictive models, or automating workflows, I focus on delivering
                  measurable results with clean, maintainable code.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative p-6 text-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-300 flex-1">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

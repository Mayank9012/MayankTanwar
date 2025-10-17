import { Code2, Layers, Database, Brain } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const techCategories = [
  {
    icon: Code2,
    title: 'Languages',
    items: ['Python', 'C++', 'C', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(37, 99, 235, 0.3)',
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Next.js', 'Flask', 'TailwindCSS'],
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    items: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Git', 'Power BI'],
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.3)',
  },
  {
    icon: Brain,
    title: 'AI/ML Stack',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.3)',
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-400">My Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leveraging modern technologies to build powerful and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: `radial-gradient(circle at center, ${category.glowColor}, transparent 70%)` }}
              />
              
              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group-hover:bg-white/10 transition-all duration-500">
                {/* Animated gradient background */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <category.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl text-white">{category.title}</h3>
                  </div>

                  {/* Tech Items */}
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          className="relative group/badge bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 transition-all cursor-pointer px-4 py-2 overflow-hidden"
                        >
                          <span className="relative z-10">{item}</span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/badge:opacity-20 transition-opacity`} />
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award, Medal, Trophy, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const certifications = [
  {
    title: 'Research Paper Accepted - IKS Conference 2025',
    subtitle:
      'Identifying and Classifying Misinformation for Religious Texts Using Deep Learning Architectures',
    year: '2025',
    badge: 'Published Research',
    featured: true,
    gradient: 'from-yellow-500 to-orange-500',
    icon: Trophy,
  },
  {
    title: 'Data Visualization with Power BI',
    date: 'December 2024',
    featured: false,
    gradient: 'from-blue-500 to-cyan-500',
    icon: Medal,
  },
  {
    title: 'Responsible and Safe AI Systems',
    date: 'October 2024',
    featured: false,
    gradient: 'from-purple-500 to-pink-500',
    icon: Award,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-6">
            <span className="text-sm text-yellow-400">Recognition</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and recognition in cutting-edge technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Achievement - Full Width */}
          {certifications
            .filter((cert) => cert.featured)
            .map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative mb-12"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur-2xl bg-gradient-to-r ${cert.gradient}`} />
                
                {/* Card */}
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />
                  <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${cert.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon */}
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${cert.gradient} shadow-2xl shadow-yellow-500/50 group-hover:scale-110 transition-transform duration-500`}>
                      <cert.icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
                        <Star className="w-3 h-3 mr-1 fill-emerald-300" />
                        {cert.badge}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-orange-300 transition-all">
                        {cert.title}
                      </h3>
                      {cert.subtitle && (
                        <p className="text-gray-400 mb-3 leading-relaxed">
                          {cert.subtitle}
                        </p>
                      )}
                      <span className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${cert.gradient} text-white text-sm`}>
                        {cert.year || cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-yellow-500/30 rounded-bl-3xl" />
                </div>
              </motion.div>
            ))}

          {/* Other Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications
              .filter((cert) => !cert.featured)
              .map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br ${cert.gradient}`} style={{ opacity: 0.3 }} />
                  
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-all duration-500 overflow-hidden">
                    {/* Gradient orb */}
                    <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${cert.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <cert.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {cert.title}
                      </h3>
                      
                      <Badge className={`bg-gradient-to-r ${cert.gradient} bg-opacity-20 text-white border-0`}>
                        {cert.year || cert.date}
                      </Badge>
                    </div>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`} />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

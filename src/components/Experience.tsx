import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'RGA & Co.',
    role: 'Python Intern',
    duration: 'Sep 2025 - Present',
    location: 'Jaipur, Rajasthan',
    current: true,
    achievements: [
      'Automation using Selenium',
      'Full-stack website with React, Express, Supabase',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'StyledGenie UG',
    role: 'Software Engineer Intern',
    duration: 'Mar 2025 - Aug 2025',
    location: 'Jaipur, Rajasthan',
    current: false,
    achievements: [
      '40% reduction in page load time',
      '25% increase in user engagement',
      'AI chatbot with 50% faster response time',
      'E-commerce platform on Shopify',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Compucom Software Limited',
    role: 'Python Intern',
    duration: 'Dec 2024 - Feb 2025',
    location: 'Jaipur, Rajasthan',
    current: false,
    achievements: [
      'Flask/MySQL system for 200+ users',
      '40% faster task assignment',
      'ETF trading platform with 8% improved returns',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    company: 'Robert Bosch Centre, IIT Madras',
    role: 'Intern',
    duration: 'May 2024 - Aug 2024',
    location: 'Chennai, Tamil Nadu',
    current: false,
    achievements: [
      'Web tool for bacterial sequence analysis',
      '40% reduction in analysis time',
      'Built with Streamlit and Snakemake',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-400">Career Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building impactful solutions across innovative companies and research centers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg shadow-blue-500/50 border-4 border-[#0F172A]`}>
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${exp.gradient} animate-ping opacity-75`} />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="w-full md:w-[calc(50%-3rem)] group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br ${exp.gradient}`} style={{ opacity: 0.2 }} />
                  
                  {/* Card Content */}
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-all duration-500 overflow-hidden">
                    {/* Decorative gradient */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${exp.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {exp.company}
                          </h3>
                          <p className="text-gray-400">{exp.role}</p>
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30">
                            Current
                          </Badge>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient} mt-2 flex-shrink-0`} />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient} opacity-50`} />
                  </div>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

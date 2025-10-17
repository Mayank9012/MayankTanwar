import { Code, Smartphone, Brain, BarChart3, ShoppingBag, Zap, ArrowUpRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description:
      'Full-stack web applications using React, Node.js, Express, and MongoDB. Also expert in Next.js, WordPress, and Shopify for diverse web solutions.',
    tags: ['React', 'Next.js', 'WordPress', 'Shopify'],
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(37, 99, 235, 0.5)',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications with React Native and Flutter for iOS and Android.',
    tags: ['React Native', 'Flutter'],
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(139, 92, 246, 0.5)',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Custom AI models, chatbots, NLP solutions, and computer vision applications using Python.',
    tags: ['Python', 'TensorFlow', 'PyTorch'],
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.5)',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Data pipelines, interactive dashboards, and business intelligence solutions with Power BI and Python.',
    tags: ['Power BI', 'Python', 'SQL'],
    gradient: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.5)',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description:
      'Complete online store development using Shopify and custom-built platforms with payment integration.',
    tags: ['Shopify', 'E-commerce'],
    gradient: 'from-indigo-500 to-blue-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description:
      'Automate repetitive tasks, web scraping, and workflow optimization using Python, Selenium, and modern automation platforms.',
    tags: ['Python', 'n8n', 'Make', 'Zapier'],
    gradient: 'from-yellow-500 to-amber-500',
    glowColor: 'rgba(234, 179, 8, 0.5)',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-400">What I Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Helping businesses build modern digital solutions with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)` }}
              />
              
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                {/* Gradient Orb */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 -translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

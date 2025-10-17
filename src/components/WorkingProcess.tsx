import { Search, FileText, Code2, TestTube, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Understanding your project requirements and goals',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Creating detailed proposal with timeline and deliverables',
    icon: FileText,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: 3,
    title: 'Development',
    description: 'Building your solution with regular updates',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    number: 4,
    title: 'Testing',
    description: 'Ensuring quality, performance, and reliability',
    icon: TestTube,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    number: 5,
    title: 'Delivery',
    description: 'Deploying with documentation and support',
    icon: Rocket,
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function WorkingProcess() {
  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <span className="text-sm text-cyan-400">How I Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Working <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A streamlined approach to deliver exceptional results
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 via-orange-500 to-pink-500 opacity-30" />

          <div className="flex justify-between items-start relative z-10 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center relative group"
                style={{ width: '180px' }}
              >
                {/* Glow Effect */}
                <div className={`absolute top-0 w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-40 h-40 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <step.icon className="w-16 h-16 text-white mb-2" strokeWidth={1.5} />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white/50">0{step.number}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Number badge */}
                <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg border-4 border-[#0F172A]`}>
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br ${step.gradient}`} style={{ opacity: 0.2 }} />
              
              {/* Card */}
              <div className="relative flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-all duration-500">
                {/* Icon */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white`}>
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

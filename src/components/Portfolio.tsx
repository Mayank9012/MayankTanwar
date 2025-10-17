import { useState } from 'react';
import { Badge } from './ui/badge';
import { ArrowRight, Award, ExternalLink, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    year: '2025',
    category: 'Research',
    title: 'Deep Learning Framework for Religious Text Misinformation Detection',
    description:
      'Developed hybrid AI architecture combining XLNet, RelBERT, and Narrative Consistency Transformer for detecting misinformation in religious texts',
    metrics: [
      { label: 'Accuracy', value: '94.33%' },
      { label: 'Dataset', value: '3,000 Statements' },
      { label: 'F1-Score', value: '0.942' },
    ],
    badge: 'Published at IKS Conference 2025',
    tags: ['Python', 'XLNet', 'RelBERT', 'Deep Learning'],
    filters: ['all', 'research', 'ai-ml'],
  },
  {
    year: '2024',
    category: 'Web Development',
    title: 'Personalized Learning Paths',
    description:
      'Intelligent system personalizing education based on student profiles using machine learning, analyzing 5,000+ student preferences',
    metrics: [
      { label: 'Engagement Increase', value: '10%' },
      { label: 'Performance Improvement', value: '5%' },
    ],
    tags: ['Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    filters: ['all', 'web', 'ai-ml'],
  },
  {
    year: '2024',
    category: 'AI/ML',
    title: 'Emotion Recognition System',
    description:
      'CNN-based emotion recognition analyzing multi-modal data (text, audio, visual) with 31,000+ samples',
    metrics: [{ label: 'Classification Accuracy', value: '91.87%' }],
    tags: ['CNN', 'Deep Learning', 'Python'],
    filters: ['all', 'ai-ml'],
  },
  {
    year: '2024',
    category: 'Data Science',
    title: 'Traffic Flow Prediction',
    description:
      'LSTM model forecasting traffic flow and occupancy using 3-5 years of spatio-temporal sensor data',
    metrics: [{ label: 'RMSE', value: '0.3538' }],
    tags: ['LSTM', 'Time Series', 'Python'],
    filters: ['all', 'data-science'],
  },
];

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Web Development', value: 'web' },
  { label: 'AI/ML', value: 'ai-ml' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'Research', value: 'research' },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) =>
    project.filters.includes(activeFilter)
  );

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-400">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recent work and research that showcases innovation and impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-700" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Published Badge */}
                  {project.badge && (
                    <div className="mb-4">
                      <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30">
                        <Award className="w-3 h-3 mr-1" />
                        {project.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-2xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                          <div className="text-sm text-white">{metric.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

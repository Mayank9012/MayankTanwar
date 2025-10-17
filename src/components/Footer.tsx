import { Linkedin, Github, Mail, ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mayank-tanwar-866414262', gradient: 'from-blue-500 to-blue-600' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/Mayank9012', gradient: 'from-gray-700 to-gray-900' },
    { icon: Mail, label: 'Email', url: 'mailto:mayankt9043@gmail.com', gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <footer className="relative bg-[#0A0F1E] overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-5" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                MAYANK TANWAR
              </h3>
              <p className="text-gray-400">
                Full Stack Developer & AI/ML Engineer
              </p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transforming ideas into intelligent digital solutions. 
              Specialized in web development, AI/ML, and data analytics.
            </p>
          </motion.div>

          {/* Center Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-white transition-colors text-left group flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300" />
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 rounded-xl bg-gradient-to-br ${social.gradient} hover:scale-110 transition-all hover:shadow-lg overflow-hidden`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white relative z-10" strokeWidth={2} />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            
            {/* Newsletter or CTA */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <p className="text-sm text-gray-400 mb-2">Available for new projects</p>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              © 2025 Mayank Tanwar. All rights reserved. 
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and code
              </span>
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-12 h-12 p-0 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}

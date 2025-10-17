import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-4 left-4 right-4 md:left-8 md:right-8' 
            : 'top-0 left-0 right-0'
        }`}
      >
        <div className={`transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 rounded-2xl' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? 'h-16' : 'h-20'
            }`}>
              {/* Logo */}
              <img src="/T.png" alt="Logo" className="h-12 w-auto rounded-full" />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-5 py-2 text-gray-300 hover:text-white transition-all relative group rounded-lg"
                  >
                    {link.label}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/10 to-[#06B6D4]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* Hire Me Button */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center justify-center relative bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-xl px-6 h-11 overflow-hidden group border-0 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] to-[#0891B2] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed ${isScrolled ? 'top-20' : 'top-20'} right-0 bottom-0 w-64 bg-[#1E293B]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white transition-colors text-left py-3 px-4 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-lg w-full mt-4 h-11"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}

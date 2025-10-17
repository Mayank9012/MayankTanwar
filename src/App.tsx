import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WorkingProcess } from './components/WorkingProcess';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <WorkingProcess />
      <Portfolio />
      <About />
      <TechStack />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
          },
        }}
      />
    </div>
  );
}

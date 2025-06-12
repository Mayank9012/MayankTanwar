"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, Calendar, Award, Briefcase } from 'lucide-react';
import { Playfair_Display, Poppins, Caveat } from 'next/font/google';
import '../app/cursor.css'; 


const playfair = Playfair_Display({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});
const kapakana = Caveat({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-kapakana',
});

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    home: false,
    about: false,
    skills: false,
    projects: false,
    experience: false
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } 
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    setIsVisible(prev => ({
      ...prev,
      projects: true
    }));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const [loopIndex, setLoopIndex] = useState(0);
const [typingSpeed, setTypingSpeed] = useState(150);

const textArray = ["Full Stack Developer", "AI & Data Science Enthusiast"];

useEffect(() => {
  const handleTyping = () => {
    const currentText = textArray[loopIndex % textArray.length];
    
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100); 
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setLoopIndex(loopIndex + 1);
          setTypingSpeed(150); 
        }
      }
    };


    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex, typingSpeed]);

    const [greetingVisible, setGreetingVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setGreetingVisible(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }, []);

  const techIcons: Record<string, string> = {
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    NextJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Oracle: "https://imgs.search.brave.com/cxPnqqLTUvSoCvHEWix1JMugLkFB4TVR8kt1r2vnEcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L29yYWNsZS01MTIu/cG5n",
    SQL: "https://imgs.search.brave.com/y6uO3CMdRO4keG6ChONTpidnMtOlknHM-ZSKQaoknUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9zcWwtZmls/ZS0yOTQyNzE2LTI0/Mjc4ODQucG5nP2Y9/d2VicCZ3PTEyOA",
    R: "https://imgs.search.brave.com/nrn0MWgsaLm5mUI5pqVZCnW9i0thzxEhoS3fHJGXpbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9yLXByb2dy/YW1taW5nLWxhbmd1/YWdlLWljb24ucG5n",
    "C#": "https://imgs.search.brave.com/dMAEYYH5r6jVWRPy_FIPx3ALCEHvbx-RwtGJX-m3qwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9jLXNoYXJw/LXByb2dyYW1taW5n/LWxhbmd1YWdlLWlj/b24ucG5n",
    PHP: "https://imgs.search.brave.com/1CNXf4ML3rj3Q7c0NEZJVn9jjCd3xT0I2Dmly9e9yms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9waHAtcHJv/Z3JhbW1pbmctbGFu/Z3VhZ2UtaWNvbi5w/bmc",
    PowerBI: "https://imgs.search.brave.com/NIq9_RKBQyRmfxK4w893Z_Nfe06_2D2MevAas7nC-1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/bG9vay5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDkv/UG93ZXJCSS1Mb2dv/LnBuZw",
    WordPress: "https://imgs.search.brave.com/Quqpnw1MCrJ1JeMZIEezDUqY-YzLw-HPUZ7e1zqwHPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Xb3JkUHJl/c3MuY29tL1dvcmRQ/cmVzcy5jb20tTG9n/by53aW5lLnN2Zw",
    FlutterFlow: "https://imgs.search.brave.com/22trsf3ded34qD47l86JR8nHJvatocJBv2FaFjAfuxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NGQyNDkyOTE3ZGUx/ZDI2ZGRlMjI3ODQv/NjdjMmVmNzY5MTBk/MGM5NTczZjA2MWE2/X2ZsdXR0ZXJmbG93/JTIwbG9nby5zdmc",
    C: "https://imgs.search.brave.com/csv7E9QAT6WSwqLjTFGBa-7VRlvHw8aSBjt9iP3OA4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9jLWxhbmd1/YWdlLTc1MjA3MTkt/NzE5NzI5My5wbmc_/Zj13ZWJwJnc9MjU2",
    "Tailwind CSS": "https://imgs.search.brave.com/VXppz4fZeZ14qHLF3d-Jv2hIoqW5sAxSpjrA_A6EN3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS90YWlsd2lu/ZC1jc3MtaWNvbi5w/bmc",
    

  };

  const projects = [
    {
      title: "Deep Learning Framework for Religious Text Misinformation Detection",
      period: "2025",
      description: "Developed a novel hybrid architecture combining XLNet, RelBERT, and Narrative Consistency Transformer (NCT) to detect misinformation in religious narratives.",
      highlights: [
        "Created specialized dataset of 3,000 statements",
        "Achieved 94.33% accuracy and 0.942 F1-score",
        "Integrated BiGRU for sequential processing",
        "Accepted at IKS Conference 2025"
      ],
      tech: ["Python", "XLNet", "RelBERT", "Deep Learning"],
      type: "Research"
    },
    {
      title: "Personalized Learning Paths",
      period: "2024",
      description: "Created an intelligent system to personalize learning based on student profiles, improving engagement and performance using machine learning.",
      highlights: [
        "Analyzed 5000+ student preferences",
        "Improved engagement by 10%",
        "Enhanced performance by 5% for 50 students",
        "Responsive UI supporting 5+ device resolutions"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      type: "Web Development"
    },
    {
      title: "Emotion Recognition System",
      period: "2024",
      description: "Built a robust emotion recognition system using Convolutional Neural Networks to analyze multi-modal data including text, audio, and visual inputs.",
      highlights: [
        "Analyzed 31,000+ samples of multi-modal data",
        "Achieved 91.87% classification accuracy",
        "Used CNN variants for analysis",
        "Processed text, audio, and visual inputs"
      ],
      tech: ["Python", "CNN", "TensorFlow"],
      type: "Machine Learning"
    },
    {
      title: "Traffic Flow Prediction",
      period: "2024",
      description: "Developed an LSTM model to forecast traffic flow, speed, and occupancy using spatio-temporal data from vehicle detection sensors.",
      highlights: [
        "Analyzed 3-5 years of spatio-temporal data",
        "Achieved RMSE of 0.3538",
        "Processed data from 5 sensor nodes",
        "High accuracy in traffic prediction"
      ],
      tech: ["Python", "LSTM", "TensorFlow"],
      type: "Machine Learning"
    },
    {
      title: "Bus Ticket Reservation System",
      period: "2023",
      description: "Designed a comprehensive bus ticket reservation system using Object-Oriented Programming principles to streamline booking processes.",
      highlights: [
        "Supported 100+ users",
        "Reduced booking errors by 93.34%",
        "Optimized seat selection and management",
        "Advanced validation and error-checking"
      ],
      tech: ["C++", "OOP"],
      type: "System Design"
    }
  ];

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "StyledGenie UG",
      period: "Mar 2025 - Present",
      description: "Engineering website features using MERN stack and developing AI-powered solutions.",
      achievements: [
        "Reduced page load time by 40%",
        "Developing AI chatbot to reduce response time by 50%"
      ]
    },
    {
      title: "Python Intern",
      company: "Compucom Software Limited",
      period: "Dec 2024 - Feb 2025",
      description: "Built Flask/MySQL systems and developed Python trading platforms.",
      achievements: [
        "Built user management system for 200+ users",
        "Improved portfolio returns via automated trading"
      ]
    },
    {
      title: "Research Intern",
      company: "Robert Bosch Centre for Data Science and AI",
      period: "May 2024 - Aug 2024",
      description: "Developed advanced web-based tools for bacterial sequence analysis research.",
      achievements: [
        "Enhanced research capabilities significantly",
        "Built scalable pipelines with Streamlit and Snakemake"
      ]
    }
  ];

  const skills = {
    languages: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "R", "PHP", "C#", "C", "HTML", "CSS", "Tailwind CSS"],
    frameworks: ["React", "NodeJS", "NextJS", "Flask"],
    databases: ["MongoDB", "MySQL", "Oracle"],
    tools: ["GitHub", "PowerBI", "WordPress", "FlutterFlow"]
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden custom-cursor ${poppins.className}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${kapakana.className}`}>
              Mayank Tanwar
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills',  'experience', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className={`text-lg md:text-xl font-semibold mb-4 text-cyan-400 ${poppins.className}`}>
              <span 
                className={`inline-block transition-all duration-1000 ${
                  greetingVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-8'
                }`}
              >
                Hello there, I&apos;m
              </span>
            </h4>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${playfair.className}`}>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mayank Tanwar
              </span>
            </h1>
            <h3 className="text-2xl md:text-3xl mb-8 text-gray-300 min-h-[40px] flex items-center justify-center">
              {displayText}<span className="animate-blink ml-1">|</span>
            </h3>
            <p className="text-md md:text-lg mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Versatile AI and Data Science graduate with a strong foundation in full-stack development, artificial intelligence, and data science. Equipped with hands-on experience building scalable web applications, intelligent systems, and impactful real-world solutions. Passionate about exploring emerging technologies and applying them creatively across domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/file/d/1bmF_0f8ODyLw0FXyYWadzvb7GRXiXPTE/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 rounded-full p-1"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${playfair.className}`}>
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I&apos;m an AI and Data Science graduate from IIITDM Kurnool with a strong interest in building intelligent and scalable systems. I&apos;m passionate about solving complex problems and turning innovative ideas into real-world tech solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My strengths lie in full-stack development, artificial intelligence, and data science. I enjoy exploring new technologies—whether it&apos;s experimenting with transformer models for NLP tasks, designing intuitive user experiences, or optimizing backend systems for performance and scalability.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  What drives me is continuous learning and the impact technology can create. I believe in clean code, meaningful collaboration, and building for the future. I&apos;m always looking to push boundaries and grow both as an engineer and a thinker.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50">
                    <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">Jaipur, India</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50">
                    <Award className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">GPA</h3>
                    <p className="text-gray-400">8.41/10.0</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold text-cyan-400 mb-4 ${playfair.className}`}>Education</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold mb-2">B.Tech Computer Science</h4>
                    <p className="text-cyan-400 mb-2">IIITDM Kurnool</p>
                    <p className="text-gray-400">2021-2025 • GPA: 8.41</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold mb-2">Class XII CBSE</h4>
                    <p className="text-purple-400 mb-2">Central Academy, Ajmer</p>
                    <p className="text-gray-400">2021 • 86.6%</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold mb-2">Class X CBSE</h4>
                    <p className="text-pink-400 mb-2">All Saints Sr. Sec. School, Ajmer</p>
                    <p className="text-gray-400">2019 • 93.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${playfair.className}`}>
              Tech Arsenal
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className={`text-xl font-bold mb-4 text-cyan-400 ${playfair.className}`}>Languages</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.languages.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg overflow-hidden">
                      {techIcons[skill] && (
                        <img src={techIcons[skill]} alt={skill} className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <h3 className={`text-xl font-bold mb-4 text-purple-400 ${playfair.className}`}>Frameworks</h3>
                <div className="space-y-3">
                  {skills.frameworks.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg overflow-hidden">
                      {techIcons[skill] && (
                        <img src={techIcons[skill]} alt={skill} className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300">
                <h3 className={`text-xl font-bold mb-4 text-pink-400 ${playfair.className}`}>Databases</h3>
                <div className="space-y-3">
                  {skills.databases.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg overflow-hidden">
                      {techIcons[skill] && (
                        <img src={techIcons[skill]} alt={skill} className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-green-400/50 transition-all duration-300">
                <h3 className={`text-xl font-bold mb-4 text-green-400 ${playfair.className}`}>Tools</h3>
                <div className="space-y-3">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg overflow-hidden">
                      {techIcons[skill] && (
                        <img src={techIcons[skill]} alt={skill} className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Moved before Projects */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${playfair.className}`}>
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{exp.title}</h3>
                      <p className="text-cyan-400 text-lg font-semibold mb-2">{exp.company}</p>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <Briefcase className="w-8 h-8 text-purple-400 mt-2 lg:mt-0" />
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Now after Experience */}
      <section id="projects" className="py-20 px-4 min-h-screen"> {/* Add min-height to ensure section has enough height to be visible */}
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${playfair.className}`}>
              Featured Projects
            </h2>
            
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-cyan-400 font-semibold">{project.period}</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${playfair.className}`}>
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, innovative projects, 
            and collaborations. Let&apos;s build something amazing together!
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:mayankt9043@gmail.com"
              className="p-4 bg-slate-800/50 rounded-full border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-tanwar-866414262"
              className="p-4 bg-slate-800/50 rounded-full border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Mayank9012"
              className="p-4 bg-slate-800/50 rounded-full border border-slate-700/50 hover:border-gray-400/50 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Designed and Developed by Mayank Tanwar
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with React and Tailwind CSS
          </p>
        </div>
        
        {/* Back to Top Button */}
        <button 
            onClick={() => scrollToSection('home')} 
            className={`fixed bottom-6 right-6 p-3 bg-cyan-500/80 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm z-10 ${
                activeSection !== 'home' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            aria-label="Back to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;

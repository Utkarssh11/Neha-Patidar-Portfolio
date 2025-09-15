import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/neha-profile.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Neha Patidar - Full Stack Developer"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-primary-foreground/20"
            />
          </div>

          {/* Hero Content */}
          <h1 className="hero-title">
            Neha Patidar
          </h1>
          <h2 className="hero-subtitle">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to my portfolio! I'm a passionate Full Stack Developer specializing in 
            front-end and back-end development. Here, you'll find details about my projects, 
            skills, and experience in creating modern web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="btn-accent inline-flex items-center justify-center gap-2"
            >
              Explore My Work
              <ArrowDown size={20} />
            </button>
            <a 
              href="#contact" 
              className="btn-outline inline-flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/nehapatiar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/nehapatiar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:nehapatiar584@gmail.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
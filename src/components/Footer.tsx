import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/nehapatiar',
      icon: Github,
    },
    {
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/nehapatiar',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:nehapatiar584@gmail.com',
      icon: Mail,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Neha Patidar</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and cloud technologies. Always ready for new challenges and collaborations.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Heart size={16} className="text-accent" />
              <span className="text-sm">Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/70">
              © {currentYear} Neha Patidar. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <span>Last updated: {lastUpdated}</span>
              <div className="hidden sm:block w-1 h-1 bg-primary-foreground/30 rounded-full"></div>
              <span className="hidden sm:inline">Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent hover:bg-accent-glow text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6 mx-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
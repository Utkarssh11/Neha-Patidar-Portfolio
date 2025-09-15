import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive and modern portfolio website showcasing my skills, projects, and experience with smooth animations and clean design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/nehapatiar/portfolio",
      liveLink: "#",
      featured: true,
    },
    {
      title: "React E-Commerce Web App",
      description: "A full-stack e-commerce application with product listings, shopping cart functionality, and secure payment integration built with modern technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      githubLink: "https://github.com/nehapatiar/ecommerce-app",
      liveLink: "#",
      featured: true,
    },
    {
      title: "Online Ticket Booking System",
      description: "A simple yet effective movie ticket booking website with responsive design and intuitive user interface for seamless booking experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      githubLink: "https://github.com/nehapatiar/ticket-booking",
      liveLink: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`portfolio-card group ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
              
              <div className="relative">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/nehapatiar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
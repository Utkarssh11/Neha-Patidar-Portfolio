import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:nehapatiar584@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nehapatiar584@gmail.com",
      href: "mailto:nehapatiar584@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7999887801",
      href: "tel:+917999887801",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, Madhya Pradesh, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@nehapatiar",
      href: "https://github.com/nehapatiar",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Neha Patidar",
      href: "https://linkedin.com/in/nehapatiar",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and explore opportunities for collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                or simply connecting with fellow developers and professionals. Whether you have 
                a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{contact.label}</div>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{contact.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Find me online:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 portfolio-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <IconComponent size={24} />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm opacity-80">{social.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="portfolio-card bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to internship opportunities, freelance projects, and full-time positions in web development and cloud computing.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card">
            <h3 className="text-xl font-bold text-foreground mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Project Opportunity / Collaboration / General Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Alternatively, you can reach out directly at{' '}
                <a href="mailto:nehapatiar584@gmail.com" className="text-primary hover:underline">
                  nehapatiar584@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
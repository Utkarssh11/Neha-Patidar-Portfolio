import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: "Cloud Computing Intern",
      company: "Amazon Web Services (AWS)",
      location: "Remote",
      period: "June 2024 – July 2024",
      type: "Internship",
      description: "Gained hands-on experience with AWS cloud services and contributed to automation initiatives that improved operational efficiency.",
      achievements: [
        "Worked extensively with AWS services including EC2, S3, and IAM for cloud deployment and management",
        "Contributed to automation tasks that reduced manual processes by 30%",
        "Participated in process optimization projects improving system reliability",
        "Collaborated with senior engineers on cloud architecture best practices",
        "Gained practical experience in DevOps and Infrastructure as Code principles"
      ],
      technologies: ["AWS", "EC2", "S3", "IAM", "Cloud Architecture", "Automation", "DevOps"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Real-world experience applying technical skills in professional environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative">
              {/* Experience Card */}
              <div className="portfolio-card">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span className="text-sm">{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h5 className="font-semibold text-foreground mb-4">Key Achievements & Responsibilities:</h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Technologies & Skills Applied:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Looking for Opportunities */}
          <div className="mt-12 portfolio-card text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Open to New Opportunities
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm actively seeking internship and full-time opportunities where I can apply my skills 
                in full-stack development and cloud technologies while continuing to learn and grow 
                in a collaborative environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Briefcase size={20} />
                  Get In Touch
                </a>
                <a 
                  href="https://linkedin.com/in/nehapatiar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
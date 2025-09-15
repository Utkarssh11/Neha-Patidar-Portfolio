import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "C++", "Java", "SQL", "HTML5", "CSS3"],
      color: "text-primary",
    },
    {
      title: "Technologies & Frameworks",
      icon: Database,
      skills: ["React", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
      color: "text-accent",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "EC2", "S3", "IAM", "Git", "GitHub"],
      color: "text-primary-glow",
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["VS Code", "IntelliJ IDEA", "Postman", "MongoDB Compass"],
      color: "text-accent-glow",
    },
  ];

  const softSkills = [
    "Problem-solving",
    "Communication",
    "Team Collaboration",
    "Quick Learning",
    "Leadership",
    "Event Management",
    "Creative Thinking",
    "Time Management",
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="portfolio-card text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 ${category.color}`}>
                  <IconComponent size={32} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="portfolio-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Soft Skills</h3>
            <p className="text-muted-foreground">
              Essential interpersonal and professional skills that complement my technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars (Optional Visual Enhancement) */}
        <div className="mt-16 portfolio-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Proficiency Levels</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Frontend Technologies</h4>
              <div className="space-y-4">
                {[
                  { name: "HTML/CSS", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "React", level: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Backend & Cloud</h4>
              <div className="space-y-4">
                {[
                  { name: "Node.js", level: 75 },
                  { name: "MongoDB", level: 70 },
                  { name: "AWS", level: 75 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
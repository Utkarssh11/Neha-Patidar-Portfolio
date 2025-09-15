import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Medi-Caps University, Indore",
      period: "September 2021 – May 2025",
      grade: "CGPA: 7.18/10",
      description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and modern web technologies.",
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management Systems",
        "Cloud Computing",
        "Software Engineering",
        "Computer Networks"
      ],
      current: true,
    },
    {
      degree: "12th Grade (Science - Mathematics)",
      institution: "Kendriya Vidyalaya Khandwa",
      period: "2019 – 2020",
      grade: "Percentage: 79%",
      description: "Strong foundation in mathematics and science, which provided the analytical skills essential for programming and problem-solving.",
      coursework: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science",
        "English"
      ],
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                  edu.current ? 'bg-primary' : 'bg-secondary'
                } border-4 border-background shadow-lg`}>
                  {edu.current ? (
                    <GraduationCap size={24} className="text-primary-foreground" />
                  ) : (
                    <BookOpen size={24} className="text-secondary-foreground" />
                  )}
                </div>

                {/* Education content */}
                <div className="ml-8 flex-1">
                  <div className="portfolio-card">
                    {edu.current && (
                      <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
                        Current
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground">
                      <span className="font-medium">{edu.period}</span>
                      <span className="hidden sm:block">•</span>
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="skill-badge text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Learning Section */}
        <div className="mt-16 portfolio-card max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Beyond formal education, I'm committed to staying updated with the latest technologies and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Online Courses Completed</div>
            </div>
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technical Certifications</div>
            </div>
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Learning Never Stops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
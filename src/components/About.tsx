const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="fade-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at 
                Medi-Caps University, Indore, with a CGPA of 7.18/10. My journey as a developer began 
                with a fascination for how technology can solve real-world problems and create 
                meaningful user experiences.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in both <strong>front-end and back-end development</strong>, with expertise 
                in modern technologies like React, Node.js, and AWS. My experience spans from creating 
                responsive user interfaces to building robust backend systems and cloud deployments.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                During my internship at <strong>Amazon Web Services (AWS)</strong>, I gained hands-on 
                experience with cloud services like EC2, S3, and IAM, contributing to automation 
                tasks and process optimization. This experience deepened my understanding of 
                scalable cloud architecture and modern DevOps practices.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold text-foreground mb-2">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate about tackling complex challenges with innovative solutions
                  </p>
                </div>
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold text-foreground mb-2">Team Player</h4>
                  <p className="text-sm text-muted-foreground">
                    Strong communication and collaboration skills developed through various projects
                  </p>
                </div>
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold text-foreground mb-2">Quick Learner</h4>
                  <p className="text-sm text-muted-foreground">
                    Always eager to explore new technologies and adapt to emerging trends
                  </p>
                </div>
                <div className="portfolio-card p-4">
                  <h4 className="font-semibold text-foreground mb-2">Cloud Enthusiast</h4>
                  <p className="text-sm text-muted-foreground">
                    Experienced with AWS services and modern cloud architecture patterns
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Achievements */}
          <div className="fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="portfolio-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Technologies Learned</div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">AWS Internship</div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <div className="text-muted-foreground">Expected Graduation</div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="mt-8 portfolio-card">
              <h4 className="font-semibold text-foreground mb-4">Beyond Coding</h4>
              <p className="text-muted-foreground mb-4">
                When I'm not coding, you'll find me expressing creativity through 
                <strong> pencil art and painting</strong> with watercolors and acrylics. 
                I also enjoy <strong>hosting and organizing events</strong>, which has 
                helped me develop strong leadership and communication skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Pencil Art</span>
                <span className="skill-badge">Watercolor Painting</span>
                <span className="skill-badge">Event Hosting</span>
                <span className="skill-badge">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
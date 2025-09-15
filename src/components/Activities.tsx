import { Palette, Users, Award, Heart } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: "Pencil Art & Painting",
      icon: Palette,
      description: "Passionate about creating detailed pencil sketches and vibrant paintings using watercolors and acrylics. This creative outlet helps me develop attention to detail and patience.",
      skills: ["Pencil Sketching", "Watercolor Painting", "Acrylic Painting", "Color Theory", "Composition"],
      impact: "Enhanced creativity and attention to detail that translates into better UI/UX design sensibilities",
    },
    {
      title: "Event Hosting & Organization",
      icon: Users,
      description: "Successfully hosted and organized several events during college, developing strong leadership, communication, and organizational skills that are valuable in team environments.",
      skills: ["Event Planning", "Public Speaking", "Team Leadership", "Project Management", "Communication"],
      impact: "Developed leadership and project management skills crucial for software development teams",
    },
  ];

  const achievements = [
    {
      title: "Creative Excellence",
      description: "Created over 50+ artwork pieces showcasing various techniques and styles",
      icon: Palette,
    },
    {
      title: "Leadership Impact",
      description: "Successfully organized events with 200+ participants",
      icon: Users,
    },
    {
      title: "Skill Integration",
      description: "Applied creative problem-solving skills in technical projects",
      icon: Award,
    },
  ];

  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Extra-Curricular Activities</h2>
          <p className="section-subtitle">
            Creative pursuits and leadership experiences that complement my technical skills
          </p>
        </div>

        {/* Main Activities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="portfolio-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <IconComponent size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {activity.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activity.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <h5 className="font-semibold text-foreground mb-2">Professional Impact:</h5>
                  <p className="text-muted-foreground text-sm">
                    {activity.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="portfolio-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={28} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Personal Philosophy */}
        <div className="portfolio-card max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Balancing Creativity & Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe that the intersection of creativity and technology creates the most innovative solutions. 
                My artistic background helps me approach programming challenges with a unique perspective, 
                while my technical skills allow me to bring creative ideas to life through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether I'm debugging complex code or planning the composition of a painting, 
                I apply the same principles: patience, attention to detail, and the willingness 
                to iterate until I achieve the desired result.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Transfer */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="portfolio-card">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              From Art to Code
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground text-sm">
                  <strong>Visual Design:</strong> Enhanced UI/UX design sensibilities from understanding color, composition, and visual hierarchy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground text-sm">
                  <strong>Attention to Detail:</strong> Precision in artwork translates to writing clean, bug-free code
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground text-sm">
                  <strong>Creative Problem-Solving:</strong> Artistic challenges develop innovative approaches to technical problems
                </span>
              </li>
            </ul>
          </div>

          <div className="portfolio-card">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              From Events to Teams
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground text-sm">
                  <strong>Project Management:</strong> Event planning skills directly apply to managing software development projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground text-sm">
                  <strong>Team Leadership:</strong> Experience coordinating teams translates to effective collaboration in development teams
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground text-sm">
                  <strong>Communication:</strong> Public speaking skills enhance ability to present technical concepts clearly
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
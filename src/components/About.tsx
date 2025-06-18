import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "HTML", "CSS","Bootstrap", "JavaScript", "React.js", "Node.js", 
    "Express.js", "MongoDB", "AWS EC2"
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating clean, efficient, and user-friendly web applications. My journey in tech began during my B.Tech in ICT at DA-IICT, where I discovered my love for problem-solving through code.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Over the past 2 years, I've gained valuable experience working with modern technologies and frameworks, from building responsive frontends with React to developing robust backends with Node.js and managing data with MongoDB and Firebase.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Outside of coding, I love being creative on Instagram and also enjoy mentoring aspiring developers on their journey into tech.
            </p>
          </div>

          <div className="space-y-8 animate-slide-in">
            <Card className="p-6 bg-background border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-primary">B.Tech in ICT</p>
                <p className="text-muted-foreground">DA-IICT • Graduated 2024</p>
              </div>
            </Card>

            <Card className="p-6 bg-background border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-primary">Technical Expert</p>
                  <p className="text-sm text-muted-foreground">Grras IT Solutions • Mentoring in Full Stack Dev</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Software Intern</p>
                  <p className="text-sm text-muted-foreground">Infixzon Pvt. Ltd. • Node.js + Express.js</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Freelancer</p>
                  <p className="text-sm text-muted-foreground">Ongoing web development projects</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills card moved outside the grid to take full width */}
       <div className="mt-12 animate-slide-in">
  <Card className="p-6 bg-background border-muted w-full">
    <h3 className="text-xl font-poppins font-semibold text-foreground mb-6">
      Skills
    </h3>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-secondary text-secondary-foreground text-center rounded-full text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-primary-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  </Card>
</div>
      </div>
    </section>
  );
};

export default About;

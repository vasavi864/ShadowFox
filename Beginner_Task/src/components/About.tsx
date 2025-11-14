import { Card } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative">
                  <img 
                    src={profileImg} 
                    alt="Madasu Vasavi"
                    className="w-80 h-80 object-cover rounded-full border-4 border-primary"
                  />
                </div>
              </div>
            </div>
            
            {/* About Text */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 border-glow-hover">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a passionate web developer focused on building creative and efficient web solutions. 
                  With expertise in both front-end and back-end technologies, I bring ideas to life through clean code and intuitive design.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 border-glow-hover">
                <p className="text-lg leading-relaxed text-foreground/90">
                  Currently, I'm completing web developer internships at <span className="text-primary font-semibold">Ediglobe</span> and 
                  <span className="text-secondary font-semibold"> Shadowfox</span>, where I'm contributing to real-world projects 
                  and expanding my technical skills.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 border-glow-hover">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm driven by curiosity for technology and a commitment to building user-friendly interfaces 
                  that solve real problems. I love learning new technologies and collaborating with fellow developers 
                  on innovative solutions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

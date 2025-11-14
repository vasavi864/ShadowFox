import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Ediglobe",
      role: "Web Developer Intern",
      period: "Present",
      description: "Contributing to live web projects, improving front-end UI with modern frameworks, and optimizing backend APIs for better performance and scalability.",
      color: "primary"
    },
    {
      company: "Shadowfox",
      role: "Web Developer Intern",
      period: "Present",
      description: "Building responsive web modules, collaborating with cross-functional teams, and implementing innovative tech solutions to enhance user experience.",
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.company}
                className={`relative animate-fade-in ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-${exp.color} transform md:-translate-x-1/2 border-4 border-background animate-glow-pulse`} />
                
                <div className={`ml-20 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className={`p-6 bg-card/50 backdrop-blur-sm border-${exp.color}/30 border-glow-hover hover:scale-105 transition-transform duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-${exp.color}/10 rounded-lg border border-${exp.color}/30`}>
                        <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between mb-2">
                          <h3 className={`text-2xl font-bold text-${exp.color} ${exp.color === 'primary' ? 'text-glow' : 'text-glow-secondary'}`}>
                            {exp.company}
                          </h3>
                          <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-lg font-semibold text-foreground/90 mb-3">
                          {exp.role}
                        </p>
                        
                        <p className="text-foreground/70 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

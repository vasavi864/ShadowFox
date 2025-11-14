import { Card } from "@/components/ui/card";
import { Code2, MessageCircle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Python",
      icon: Code2,
      skills: ["Python Programming", "Data Structures", "Problem Solving", "Scripting", "Automation"]
    },
    {
      title: "Good Communication",
      icon: MessageCircle,
      skills: ["Team Collaboration", "Clear Documentation", "Active Listening", "Presentation Skills", "Client Relations"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Tech Stack
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.title}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 border-glow-hover hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-primary/10 rounded-full border border-primary animate-glow-pulse">
                  <category.icon className="w-12 h-12 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary text-glow">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-muted/50 border border-primary/20 rounded-full text-sm hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

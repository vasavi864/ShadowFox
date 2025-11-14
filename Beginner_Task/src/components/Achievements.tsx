import { Card } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/30 border-glow-hover hover:scale-105 transition-transform duration-300 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="p-6 bg-secondary/10 rounded-full border-2 border-secondary animate-glow-pulse">
                  <Trophy className="w-16 h-16 text-secondary" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                  <Award className="w-6 h-6 text-secondary" />
                  <h3 className="text-2xl font-bold text-secondary text-glow-secondary">
                    Hacka Arena Hackathon
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Participated in the prestigious Hacka Arena Hackathon, collaborating with talented developers 
                  to build innovative solutions under time constraints. Gained valuable experience in rapid 
                  prototyping, teamwork, and creative problem-solving.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

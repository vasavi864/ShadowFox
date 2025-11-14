import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const Projects = () => {
  return <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/30 border-glow-hover hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
            <div className="grid md:grid-cols-2">
              {/* Project Image/Placeholder */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Code2 className="w-24 h-24 mx-auto mb-4 text-primary animate-float" />
                  <h3 className="text-2xl font-bold text-primary text-glow">Personal Finance Manager</h3>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold gradient-text">Personal finance manager      </h3>
                  
                  <p className="text-foreground/80 leading-relaxed">
                       The Personal Finance Manager is a smart and easy-to-use platform that helps people manage their money in one place. It allows users to track their income, expenses, savings, and daily spending habits through a clear and organized dashboard. The system provides helpful insights, budget reminders, spending breakdowns, and goal tracking so users can understand where their money goes and plan better for the future. Overall, it makes personal financial management simpler, clearer, and more efficient for everyday use.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map(tech => <span key={tech} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                        {tech}
                      </span>)}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground border-glow-hover group">
                    <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub Repo
                  </Button>
                  <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary/10 border-glow-hover group" asChild>
                    <a href="https://musical-liger-fbd283.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
const Code2 = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>;
export default Projects;
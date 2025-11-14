import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 border-glow-hover animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/90">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/30 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/90">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/30 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/90">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-input border-primary/30 focus:border-primary resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-glow-hover group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex justify-center gap-6">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/10 rounded-full border border-primary/30 hover:border-primary hover:scale-110 transition-all border-glow-hover"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="https://github.com/vasavi864" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/10 rounded-full border border-primary/30 hover:border-primary hover:scale-110 transition-all border-glow-hover"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="mailto:vasavi@example.com"
                  className="p-4 bg-primary/10 rounded-full border border-primary/30 hover:border-primary hover:scale-110 transition-all border-glow-hover"
                >
                  <Mail className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

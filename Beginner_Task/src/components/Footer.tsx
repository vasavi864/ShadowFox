import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Madasu Vasavi. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/vasavi864" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:vasavi@example.com"
              className="text-primary hover:text-primary/80 transition-colors hover:scale-110 transform"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

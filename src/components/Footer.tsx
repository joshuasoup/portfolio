import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-portfolio-accent/20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://github.com/joshuasoup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-portfolio-muted hover:text-portfolio-highlight transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-souphanthong/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-portfolio-muted hover:text-portfolio-highlight transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:joshuasouphanthong@carleton.ca"
            aria-label="Email"
            className="text-portfolio-muted hover:text-portfolio-highlight transition-colors"
          >
            <Mail size={20} />
          </a>
          <Link
            to="/resume"
            aria-label="Resume"
            className="text-portfolio-muted hover:text-portfolio-highlight transition-colors"
          >
            <FileText size={20} />
          </Link>
        </div>
        <div className="text-sm text-portfolio-muted">
          © 2025 Joshua Souphanthong
        </div>
      </div>
    </footer>
  );
};

export default Footer;

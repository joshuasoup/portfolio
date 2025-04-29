
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 w-full flex justify-between items-center">
      <Link to="/" className="text-lg md:text-xl font-medium hover:text-portfolio-accent transition-colors">
        joshua souphanthong
      </Link>
      
      {/* Mobile menu button */}
      <button 
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="sr-only">Menu</span>
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/about" className="hover:text-portfolio-accent transition-colors">about</Link>
        <Link to="/projects" className="hover:text-portfolio-accent transition-colors">projects</Link>
        <Link to="/contact" className="hover:text-portfolio-accent transition-colors">contact</Link>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-portfolio-dark shadow-lg border-y border-gray-800 z-10">
          <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
            <nav className="flex flex-col items-center py-6 space-y-5">
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 hover:text-portfolio-accent transition-colors">
                about
              </Link>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 hover:text-portfolio-accent transition-colors">
                projects
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 hover:text-portfolio-accent transition-colors">
                contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

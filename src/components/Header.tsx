import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 w-full flex justify-between items-center">
      {/* Mobile menu button */}
      <button
        className="md:hidden text-portfolio-text hover:text-portfolio-highlight transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        <span className="sr-only">Menu</span>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center justify-center w-full">
        <div className="flex">
          <div className="px-4">
            <Link
              to="/"
              className="nav-link hover:text-portfolio-highlight transition-colors"
            >
              home
            </Link>
          </div>
          <div className="px-4">
            <Link
              to="/about"
              className="nav-link hover:text-portfolio-highlight transition-colors"
            >
              about
            </Link>
          </div>
          <div className="px-4">
            <Link
              to="/projects"
              className="nav-link hover:text-portfolio-highlight transition-colors"
            >
              projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-portfolio-dark shadow-lg border-y border-portfolio-accent/20 z-10">
          <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
            <nav className="flex flex-col items-center py-6 space-y-5">
              <div className="w-full text-center py-2">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link hover:text-portfolio-highlight transition-colors inline-block"
                >
                  home
                </Link>
              </div>
              <div className="w-full text-center py-2">
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link hover:text-portfolio-highlight transition-colors inline-block"
                >
                  about
                </Link>
              </div>
              <div className="w-full text-center py-2">
                <Link
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link hover:text-portfolio-highlight transition-colors inline-block"
                >
                  projects
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

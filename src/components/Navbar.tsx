import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Work', 'Beyond', 'Contact'];
  const navLinks = {
    'Home': 'home',
    'Work': 'work',
    'Beyond': 'beyond',
    'Contact': 'contact'
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-background/95 md:bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold text-accent-dark">
            Alzbeta (Betty) Sumnikova
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${navLinks[item as keyof typeof navLinks]}`}
                className="text-text/80 hover:text-accent-dark transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-accent/10 bg-background/95">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${navLinks[item as keyof typeof navLinks]}`}
                className="block py-2 text-text/80 hover:text-accent-dark transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Pill, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Le Problème', href: '#problem' },
    { name: 'Comment ça marche', href: '#how-it-works' },
    { name: 'Pour Qui ?', href: '#benefits' },
    { name: 'Lisa AI', href: '#lisa-ai' },
    { name: 'Professionnels', href: '#crm' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <img src="/images/pillqa.png" alt="PillQare" className="brand-logo-img" />
        </a>

        {/* Desktop Nav */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions desktop-only">
          <Button variant="primary" size="sm">Précommander</Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-menu-toggle mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-menu-actions">
            <Button variant="primary" fullWidth>Précommander</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

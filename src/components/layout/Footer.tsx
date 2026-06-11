import React from 'react';
import { Heart, Mail, Phone, Globe } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navbar-brand mb-4">
              <img src="/images/pillqa.png" alt="PillQare" className="brand-logo-img" />
            </div>
            <p className="footer-description">
              Le pilulier connecté qui sécurise la prise de médicaments et maintient l'autonomie.
            </p>
            <p className="footer-slogan">
              "Et si la vraie liberté, c'était de ne plus y penser ?"
            </p>
            <div className="social-links mt-4">
              <a href="#" aria-label="Email"><Mail size={20} /></a>
              <a href="#" aria-label="Phone"><Phone size={20} /></a>
              <a href="#" aria-label="Web"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Produit</h4>
            <a href="#how-it-works">Comment ça marche</a>
            <a href="#safety">Sécurité</a>
            <a href="#lisa-ai">Assistant Lisa</a>
            <a href="#app">Application Mobile</a>
            <a href="#specs">Caractéristiques</a>
          </div>

          <div className="footer-links">
            <h4>Solutions</h4>
            <a href="#patients">Pour les patients</a>
            <a href="#aidants">Pour les proches</a>
            <a href="#crm">Professionnels de santé</a>
            <a href="#financement">Aides & MDPH</a>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <a href="#">Nous contacter</a>
            <a href="#">Support</a>
            <a href="#">FAQ</a>
            <a href="#">Mentions Légales</a>
            <a href="#">Politique de Confidentialité</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PillQare. Tous droits réservés.</p>
          <p className="made-with-love">
            Conçu avec <Heart size={16} color="var(--status-red)" className="heart-icon" /> pour votre santé.
          </p>
        </div>
      </div>
    </footer>
  );
};

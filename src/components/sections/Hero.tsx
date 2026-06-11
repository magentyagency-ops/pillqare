import React from 'react';
import { ShieldCheck, Clock, HeartPulse } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <span className="badge">Nouveau : PillQare 2026</span>
            <h1>
              Le pilulier connecté <br />
              <span className="text-primary">qui alerte vos proches en cas d'oublis</span>
            </h1>
            <p className="hero-slogan">
              "Et si la vraie liberté, c’était de ne plus y penser ?"
            </p>
            
            <div className="hero-actions">
              <a href="#discover" className="btn btn-primary btn-lg">Découvrir PillQare</a>
              <a href="https://commande.pillqare.com" className="btn btn-outline btn-lg">Commander</a>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <ShieldCheck size={20} className="text-primary" />
                <span>100% Sécurisé</span>
              </div>
              <div className="feature-item">
                <Clock size={20} className="text-primary" />
                <span>Rappels Automatiques</span>
              </div>
              <div className="feature-item">
                <HeartPulse size={20} className="text-primary" />
                <span>Suivi Médical</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Visual representation of the device */}
            <div className="product-image-container">
              <div className="device-glow"></div>
              <img src="/images/phdd.png" alt="Pilulier connecté PillQare" className="product-image" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
};

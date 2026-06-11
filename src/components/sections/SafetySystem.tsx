import React from 'react';
import './SafetySystem.css';

export const SafetySystem: React.FC = () => {
  return (
    <section id="safety" className="luminous-section section">
      <div className="container">
        <div className="luminous-header text-center mb-5">
          <span className="badge">Système Lumineux</span>
          <h2 className="luminous-title">
            Comment fonctionne le système d'alerte ?
          </h2>
          <p className="subtitle">
            PillQare réagit en temps réel avec un code couleur intuitif pour garantir la prise du traitement et alerter l'entourage en cas d'oubli.
          </p>
        </div>

        <div className="luminous-timeline">
          {/* Pilulier Vert */}
          <div className="luminous-item item-green">
            <div className="luminous-illustration-wrapper">
              <div className="luminous-placeholder">
                <img 
                  src="/images/pi/1.png" 
                  alt="Pilulier Vert" 
                />
              </div>
            </div>
            <div className="luminous-content">
              <div className="luminous-item-title">Pilulier Vert : Distribution automatique</div>
              <div className="luminous-desc">
                À l'heure exacte de la prise, le pilulier s'éclaire en vert et distribue automatiquement les médicaments de façon sécurisée.
              </div>
            </div>
          </div>

          {/* Pilulier Orange */}
          <div className="luminous-item item-orange">
            <div className="luminous-illustration-wrapper">
              <div className="luminous-placeholder">
                <img 
                  src="/images/pi/2.png" 
                  alt="Pilulier Orange" 
                />
              </div>
            </div>
            <div className="luminous-content">
              <div className="luminous-item-title">Pilulier Orange : Alerte Proche</div>
              <div className="luminous-desc">
                Si au bout de 30 minutes les médicaments ne sont toujours pas pris, le pilulier passe à l'orange et une alerte SMS est envoyée à un proche.
              </div>
            </div>
          </div>

          {/* Pilulier Rouge */}
          <div className="luminous-item item-red">
            <div className="luminous-illustration-wrapper">
              <div className="luminous-placeholder">
                <img 
                  src="/images/pi/3.png" 
                  alt="Pilulier Rouge" 
                />
              </div>
            </div>
            <div className="luminous-content">
              <div className="luminous-item-title">Pilulier Rouge : Intervention Support</div>
              <div className="luminous-desc">
                En cas d'oubli prolongé, le pilulier devient rouge. Notre support de télésurveillance vous appelle immédiatement pour s'occuper de la situation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

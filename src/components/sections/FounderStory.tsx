import React from 'react';
import './FounderStory.css';

export const FounderStory: React.FC = () => {
  return (
    <section className="founder-story-section">
      <div className="founder-container">
        <div className="founder-content">
          <div className="founder-badge">L'histoire de PillQare</div>
          <h2 className="founder-title">Né d'une expérience personnelle.</h2>
          <p className="founder-desc">
            "Après avoir vu mes proches lutter avec la gestion de leurs multiples traitements au quotidien, j'ai réalisé qu'il manquait une solution véritablement pensée pour les patients et leurs aidants. C'est ainsi qu'est né PillQare : pour redonner de la liberté et de la tranquillité d'esprit à ceux qui en ont le plus besoin."
          </p>
          
          <div className="founder-profile">
            <div className="founder-avatar">
              {/* Remplacez src par le vrai chemin du portrait */}
              <img 
                src="/videos/IMG_1376.jpg" 
                alt="Portrait du fondateur" 
                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Safir+Hanafi&background=0D8ABD&color=fff&size=200"; }} 
              />
            </div>
            <div className="founder-info">
              <span className="founder-name">Safir Hanafi</span>
              <span className="founder-role">Fondateur & CEO</span>
            </div>
          </div>
        </div>

        <div className="founder-video-wrapper">
          <div className="founder-video-container">
             <video 
                src="/videos/histoire-fondateur-safir.mov"
                controls 
                playsInline 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

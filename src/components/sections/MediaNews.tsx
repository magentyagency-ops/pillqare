import React from 'react';
import { Play, ExternalLink, Quote } from 'lucide-react';
import './MediaNews.css';

export const MediaNews: React.FC = () => {
  return (
    <section id="media-news" className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge">Presse & Avis d'Experts</span>
          <h2>PillQare dans les médias</h2>
          <p className="subtitle">Découvrez ce que les professionnels de la santé disent de nous.</p>
        </div>

        <div className="media-grid-3">
          {/* YouTube Redirect: Olivier Veran */}
          <a href="https://youtu.be/n8xVZ6gdY3Q?si=p9MJVWKSBxHnemaD" target="_blank" rel="noopener noreferrer" className="media-item yt-card">
            <div className="yt-thumbnail">
              {/* Miniature spécifique de la vidéo */}
              <img src="/videos/minia.png" alt="Interview Vidéo" style={{ objectFit: 'cover' }} />
              <div className="play-overlay">
                <Play size={48} className="text-white" fill="white" />
              </div>
            </div>
            <div className="media-content">
              <span className="media-category yt-cat">Interview</span>
              <h3 className="media-title">Olivier Véran : L'innovation et la santé de demain</h3>
              <p className="media-excerpt">Retour sur l'importance des solutions connectées pour le maintien à domicile et l'observance.</p>
              <span className="read-more">Voir la vidéo <ExternalLink size={16} /></span>
            </div>
          </a>

          {/* LinkedIn: Anne Beinier */}
          <a href="https://www.linkedin.com/posts/safir-hanafi_quand-expertise-publique-et-innovation-ugcPost-7430280950527242241-Ttmb/?utm_source=share&utm_medium=member_ios&rcm=ACoAAD40m-4BhRZuFOvPMlaM6rdpnS_lnstsNfE" target="_blank" rel="noopener noreferrer" className="media-item linkedin-card">
            <div className="linkedin-header">
              <div className="linkedin-logo">in</div>
            </div>
            <div className="media-content flex-grow-1 d-flex flex-column">
              <Quote size={32} className="quote-icon" />
              <p className="linkedin-quote">"Quand expertise publique et innovation se rencontrent. PillQare répond à un vrai besoin pour l'observance et l'accompagnement des patients au quotidien."</p>
              
              <div className="author-info mt-auto">
                <div className="author-avatar">
                  <img src="https://ui-avatars.com/api/?name=Anne+Beinier&background=fff&color=0077b5" alt="Anne Beinier" />
                </div>
                <div>
                  <h4 className="author-name">Anne Beinier</h4>
                  <p className="author-role">Ancienne conseillère du Ministère de la Santé</p>
                </div>
              </div>
            </div>
          </a>

          {/* Pharmacist Video */}
          <div className="media-item video-card-local">
            <video 
              src="/videos/actualite-media-pharmacien.mov"
              controls 
              playsInline 
              className="media-video-local"
            />
            <div className="overlay-content">
              <span className="media-category">Témoignage Pharmacien</span>
              <h3 className="media-title text-white">"PillQare est un vrai game changer"</h3>
              <p className="media-excerpt text-white-50">L'avis d'un professionnel sur la sécurisation de la prise de médicaments.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

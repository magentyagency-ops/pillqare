import React, { useState, useRef } from 'react';
import { Mic, Smartphone, Users, ActivitySquare, Play, Pause } from 'lucide-react';
import { Button } from '../ui/Button';
import './LisaApp.css';

export const LisaApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="lisa-ai" className="section">
      <div className="container">
        <div className="lisa-app-grid">
          {/* Lisa AI Section */}
          <div className="lisa-content">
            <span className="badge mb-2">Intelligence Artificielle</span>
            <h2>Rencontrez Lisa</h2>
            <p className="subtitle text-left ml-0 mb-4">
              L'assistante vocale intégrée qui accompagne le patient au quotidien.
            </p>
            
            <ul className="lisa-features">
              <li>
                <div className="lisa-icon-wrap"><Mic size={20} /></div>
                <div>
                  <strong>Accompagnement personnalisé</strong>
                  <p>Interagit avec le patient et répond à ses questions.</p>
                </div>
              </li>
              <li>
                <div className="lisa-icon-wrap"><Bell size={20} /></div>
                <div>
                  <strong>Rappels vocaux intelligents</strong>
                  <p>Adapte le ton et le moment pour encourager la prise.</p>
                </div>
              </li>
              <li>
                <div className="lisa-icon-wrap"><Heart size={20} /></div>
                <div>
                  <strong>Renfort de l'autonomie</strong>
                  <p>Maintient le lien social et diminue le sentiment d'isolement.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className={`lisa-visual ${isPlaying ? 'is-playing' : ''}`}>
            <div className="ai-orb" onClick={togglePlay} style={{ cursor: 'pointer' }} role="button" aria-label="Play Lisa demo">
              <div className="orb-core" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isPlaying ? <Pause size={24} color="#fff" /> : <Play size={24} color="#fff" style={{ marginLeft: '4px' }} />}
              </div>
              <div className="orb-ring ring-1"></div>
              <div className="orb-ring ring-2"></div>
              <div className="orb-ring ring-3"></div>
            </div>
            <div className="voice-wave">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="demo-label" onClick={togglePlay}>
              {isPlaying ? 'Écoute en cours...' : 'Écouter la démo'}
            </div>
            <audio 
              ref={audioRef} 
              src="/videos/Neoma Business School 50 - copie.m4a" 
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </div>

        <div className="app-section mt-5 pt-5 border-top">
          <div className="text-center mb-5">
            <span className="badge">Écosystème Connecté</span>
            <h2>L'Application Mobile PillQare</h2>
            <p className="subtitle">Une interface adaptée à chaque profil pour un suivi optimal.</p>
          </div>

          <div className="app-personas">
            <div className="persona-card">
              <Smartphone size={32} className="text-primary mb-3" />
              <h3>Pour les Patients</h3>
              <ul>
                <li>Programmer les traitements</li>
                <li>Suivre les prises quotidiennes</li>
                <li>Consulter l'historique</li>
              </ul>
            </div>
            
            <div className="persona-card">
              <Users size={32} className="text-primary mb-3" />
              <h3>Pour les Aidants</h3>
              <ul>
                <li>Alertes en temps réel</li>
                <li>Vérification des prises à distance</li>
                <li>Moins de charge mentale</li>
              </ul>
            </div>

            <div className="persona-card">
              <ActivitySquare size={32} className="text-primary mb-3" />
              <h3>Pour les Professionnels</h3>
              <ul>
                <li>Données d'observance HDS</li>
                <li>Suivi multi-patients</li>
                <li>Détection des situations à risque</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <a href="https://pro.pillqare.com/fr/mobile/auth" className="btn btn-primary btn-md">Télécharger l'application</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple icons for the list above since they weren't imported
const Bell = ({size}: {size:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const Heart = ({size}: {size:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>;

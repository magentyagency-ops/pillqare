import React from 'react';
import { Database, ShieldCheck, FileText, Activity } from 'lucide-react';
import { Card } from '../ui/Card';
import './CRMAndSpecs.css';

export const CRMAndSpecs: React.FC = () => {
  return (
    <>
      <section id="crm" className="section bg-gradient-dark">
        <div className="container">
          <div className="text-center mb-5 text-white">
            <span className="badge badge-light">B2B & Établissements</span>
            <h2 className="text-white">PillQare CRM</h2>
            <p className="subtitle text-light-alpha">
              La plateforme centralisée pour les professionnels de santé, pharmacies et HAD.
            </p>
          </div>

          <div className="crm-features">
            <Card variant="glass" className="crm-card">
              <Activity size={24} className="text-primary mb-3" />
              <h4 className="text-white">Surveillance en temps réel</h4>
              <p className="text-light-alpha text-sm">Vue d'ensemble de l'observance de tous vos patients.</p>
            </Card>
            
            <Card variant="glass" className="crm-card">
              <ShieldCheck size={24} className="text-primary mb-3" />
              <h4 className="text-white">Hébergement HDS</h4>
              <p className="text-light-alpha text-sm">Données de santé sécurisées et conformes aux normes.</p>
            </Card>
            
            <Card variant="glass" className="crm-card">
              <FileText size={24} className="text-primary mb-3" />
              <h4 className="text-white">Rapports analytiques</h4>
              <p className="text-light-alpha text-sm">Export des historiques pour des décisions médicales éclairées.</p>
            </Card>
            
            <Card variant="glass" className="crm-card">
              <Database size={24} className="text-primary mb-3" />
              <h4 className="text-white">Gestion centralisée</h4>
              <p className="text-light-alpha text-sm">Collaboration multi-utilisateurs simplifiée.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="specs" className="section">
        <div className="container">
          <div className="specs-container">
            <div className="specs-content">
              <h2>Caractéristiques Techniques</h2>
              
              <div className="specs-list">
                <div className="spec-item">
                  <span className="spec-label">Compartiments</span>
                  <span className="spec-value">21 (Jusqu'à 21 jours)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Distribution</span>
                  <span className="spec-value">100% Automatique</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Alertes</span>
                  <span className="spec-value">Sonores, Lumineuses, SMS, Appels</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Autonomie</span>
                  <span className="spec-value">Batterie rechargeable, mode nomade</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Intelligence</span>
                  <span className="spec-value">IA Lisa intégrée</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Services</span>
                  <span className="spec-value">Télésurveillance 24/7 (selon formule)</span>
                </div>
              </div>
            </div>
            
            <div className="financing-card">
              <h3>Financement & Prise en charge</h3>
              <p>
                PillQare n'est pas qu'une innovation technologique, c'est une aide essentielle au maintien à domicile.
              </p>
              <div className="mdph-badge">
                <strong>Éligible MDPH</strong>
              </div>
              <p className="text-sm mt-3 text-light">
                Selon l’éligibilité de l’utilisateur, PillQare peut être pris en charge intégralement par la Maison Départementale des Personnes Handicapées.
              </p>
              <button className="btn btn-outline btn-full mt-4">Vérifier mon éligibilité</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React from 'react';
import { PackageOpen, Settings, CheckCircle2, BellRing } from 'lucide-react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <PackageOpen size={32} className="text-primary" />,
      title: "Remplissage",
      desc: "Le pilulier dispose de 21 compartiments permettant de stocker jusqu’à 21 jours de traitement.",
      image: "/images/Remplissage.png"
    },
    {
      num: "02",
      icon: <Settings size={32} className="text-primary" />,
      title: "Programmation",
      desc: "Le traitement est configuré depuis l’application mobile ou la plateforme. Les horaires sont définis à l’avance.",
      image: "/images/programation.png?v=2"
    },
    {
      num: "03",
      icon: <CheckCircle2 size={32} className="text-primary" />,
      title: "Distribution",
      desc: "À l'heure programmée : lumière verte, notification sonore. Le patient appuie et la dose est délivrée.",
      image: "/images/distribution.png"
    },
    {
      num: "04",
      icon: <BellRing size={32} className="text-primary" />,
      title: "Gestion des oublis",
      desc: "Si non pris : lumière orange, SMS aux proches. Si rouge : appel et télésurveillance si nécessaire.",
      image: "/images/gestion.png"
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge">Fonctionnement</span>
          <h2>Comment ça marche ?</h2>
          <p className="subtitle">
            Un processus simple et automatisé en 4 étapes pour garantir la sécurité du patient.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="timeline-image">
                <img src={step.image} alt={step.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

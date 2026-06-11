import React from 'react';
import { AlertCircle, TrendingUp, HeartCrack, Activity } from 'lucide-react';
import { Card } from '../ui/Card';
import './ProblemSolution.css';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle size={32} className="text-red" />,
      title: "Erreurs de dosage",
      desc: "Des millions de patients oublient ou prennent mal leurs traitements."
    },
    {
      icon: <Activity size={32} className="text-orange" />,
      title: "Aggravation",
      desc: "Une mauvaise observance entraîne des complications et des hospitalisations évitables."
    },
    {
      icon: <HeartCrack size={32} className="text-primary" />,
      title: "Charge Mentale",
      desc: "Un stress quotidien important pour les patients et une lourde charge pour les aidants."
    }
  ];

  return (
    <section id="problem" className="section section-bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge">Le Constat</span>
          <h2>Pourquoi PillQare existe-t-il ?</h2>
          <p className="subtitle">
            L'observance thérapeutique est un enjeu de santé publique majeur.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((prob, index) => (
            <Card key={index} variant="elevated" className="problem-card">
              <div className="icon-wrapper mb-3">
                {prob.icon}
              </div>
              <h3>{prob.title}</h3>
              <p className="text-light">{prob.desc}</p>
            </Card>
          ))}
        </div>

        <div className="solution-banner mt-5">
          <div className="solution-content">
            <h3>La Solution PillQare</h3>
            <p>
              Nous avons développé PillQare pour réduire ces risques grâce à une combinaison unique de <strong>matériel connecté</strong>, de <strong>logiciels de suivi</strong> et d’<strong>intelligence artificielle</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

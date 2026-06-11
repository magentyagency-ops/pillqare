# Export: Section "Comment fonctionne PillQare ?" (Système Lumineux)

Ce fichier contient tout le code nécessaire (React/Next.js + CSS) pour intégrer la section qui explique le fonctionnement du pilulier (le système lumineux : Vert, Orange, Rouge) dans un autre site.

Vous pouvez donner ce fichier à une autre IA pour qu'elle reproduise la section à l'identique.

## 1. Images requises
Assurez-vous de copier les 3 images suivantes du projet source vers le nouveau projet (par exemple, dans le dossier `public/optimized/`) :
- `timeline-vert1.jpg`
- `timeline-orange1.jpg`
- `timeline-rouge1.jpg`

---

## 2. Code du Composant (React / Next.js)

Voici le code JSX/TSX de la section. Remplacez `styles` par votre fichier CSS Modules ou intégrez directement les classes.

```tsx
import Image from "next/image";
import styles from "./LuminousSystem.module.css";

export default function LuminousSystem() {
  return (
    <section id="how-it-works" className={`${styles.contentSection} w-full`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Comment fonctionne
            <br />
            PillQare ?
          </h2>
        </div>

        <div className={styles.timeline}>
          {/* Pilulier Vert */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIllustrationWrapper}>
              <div className={styles.colorIllustrationPlaceholder}>
                <Image 
                  src="/optimized/timeline-vert1.jpg" 
                  alt="Pilulier Vert" 
                  width={600} 
                  height={600} 
                  style={{ width: "100%", height: "auto", objectFit: "contain" }} 
                />
              </div>
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTitle}>Pilulier Vert : Distribution automatique</div>
              <div className={styles.timelineDesc}>
                À l'heure exacte de la prise, le pilulier s'éclaire en vert et distribue automatiquement les médicaments de façon sécurisée.
              </div>
            </div>
          </div>

          {/* Pilulier Orange */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIllustrationWrapper}>
              <div className={styles.colorIllustrationPlaceholder}>
                <Image 
                  src="/optimized/timeline-orange1.jpg" 
                  alt="Pilulier Orange" 
                  width={600} 
                  height={600} 
                  style={{ width: "100%", height: "auto", objectFit: "contain" }} 
                />
              </div>
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTitle}>Pilulier Orange : Alerte Proche</div>
              <div className={styles.timelineDesc}>
                Si au bout de 30 minutes les médicaments ne sont toujours pas pris, le pilulier passe à l'orange et une alerte SMS est envoyée à un proche.
              </div>
            </div>
          </div>

          {/* Pilulier Rouge */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIllustrationWrapper}>
              <div className={styles.colorIllustrationPlaceholder}>
                <Image 
                  src="/optimized/timeline-rouge1.jpg" 
                  alt="Pilulier Rouge" 
                  width={600} 
                  height={600} 
                  style={{ width: "100%", height: "auto", objectFit: "contain" }} 
                />
              </div>
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTitle}>Pilulier Rouge : Intervention Support</div>
              <div className={styles.timelineDesc}>
                En cas d'oubli prolongé, le pilulier devient rouge. Notre support de télésurveillance vous appelle immédiatement pour s'occuper de la situation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Styles CSS (CSS Modules)

Voici le code CSS exact (extrait de `page.module.css`) à mettre dans `LuminousSystem.module.css`.

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.contentSection {
  padding: 80px 0;
  background-color: #ffffff;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 48px;
}

.sectionTitle {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  .sectionTitle {
    font-size: 1.7rem;
  }
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 950px;
  margin: 0 auto;
}

.timelineItem {
  position: relative;
  display: flex;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 60px 40px;
  border-radius: 32px;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.timelineItem:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.08);
}

.timelineIllustrationWrapper {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 260px;
  height: 260px;
  z-index: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Fondu à gauche de l'image pour l'intégrer avec le fond */
.timelineIllustrationWrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.4) 60%, transparent 95%);
  z-index: 2;
}

.timelineContent {
  position: relative;
  z-index: 3;
  margin-left: 0;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 60%;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.9), 0 0 25px rgba(255, 255, 255, 0.6);
}

.timelineTitle {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.timelineDesc {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
}

.colorIllustrationPlaceholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Reponsive Design */
@media (max-width: 769px) {
  .timelineTitle {
    position: absolute;
    top: -65px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .timelineItem {
    flex-direction: column;
    padding: 40px 24px;
    text-align: center;
    gap: 20px;
  }
  .timelineIllustrationWrapper {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    width: 280px;
    height: 280px;
    margin-bottom: 20px;
    margin: 0 auto;
  }
  .timelineIllustrationWrapper::after {
    background: linear-gradient(0deg, #ffffff 10%, transparent 100%);
  }
  .timelineContent {
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .timelineTitle {
    font-size: 1.3rem;
    white-space: nowrap;
    text-shadow: none;
    position: static;
    transform: none;
  }
}

@media (max-width: 449px) {
  .timelineDesc {
    margin: 30px;
  }
  .timelineTitle {
    font-size: clamp(0.7rem, 4vw, 1.3rem);
    letter-spacing: -0.04em;
  }
}
```

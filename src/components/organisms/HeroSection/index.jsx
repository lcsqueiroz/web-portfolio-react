import Button from '../../atoms/Button';
import { personal } from '../../../constants/personal';
import styles from './index.module.css';

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.grid}>
        {/* Coluna esquerda — Texto + CTA */}
        <div className={styles.textCol}>
          <div className={styles.heading}>
            <span className={styles.greeting}>Olá, me chamo</span>
            <h1 className={styles.name}>
              <span className={styles.nameHighlight}>{personal.name}</span>
            </h1>
            <p className={styles.role}>{personal.role}</p>
          </div>

          <p className={styles.bio}>{personal.bio}</p>

          <div className={styles.cta}>
            <Button label="Ver Projetos" onClick={handleCTAClick} />
            <Button
              label="Entre em contato"
              onClick={handleContactClick}
              variant="ghost"
            />
          </div>
        </div>

        {/* Coluna direita — Foto */}
        <div className={styles.photoCol}>
          <div className={styles.photoWrapper}>
            <img
              src={personal.photoUrl}
              alt={`Foto de ${personal.name}`}
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

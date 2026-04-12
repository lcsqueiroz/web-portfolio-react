import { useState } from 'react';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { personal } from '../../../constants/personal';
import { navLinks } from '../../../constants/navigation';
import styles from './index.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Zona esquerda — Logo */}
        <span className={styles.logo}>{personal.name}</span>

        {/* Zona central — Links de navegação (desktop) */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona direita — Redes sociais + hamburguer */}
        <div className={styles.rightZone}>
          {/* Ícones sociais (desktop) */}
          <div className={styles.socialDesktop}>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`${styles.socialLink} ${styles.socialLinkGithub}`}
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`${styles.socialLink} ${styles.socialLinkLinkedin}`}
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={personal.emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-mail"
              className={`${styles.socialLink} ${styles.socialLinkGoogle}`}
            >
              <FaGoogle size={22} />
            </a>
          </div>

          {/* Botão hamburguer (mobile) */}
          <button
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className={styles.hamburger}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className={styles.menuMobile}>
          <nav className={styles.navMobile}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMenuClose}
                className={styles.navLinkMobile}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ícones sociais (mobile) */}
          <div className={styles.socialMobile}>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`${styles.socialLink} ${styles.socialLinkGithub}`}
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`${styles.socialLink} ${styles.socialLinkLinkedin}`}
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={personal.emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-mail"
              className={`${styles.socialLink} ${styles.socialLinkGoogle}`}
            >
              <FaGoogle size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

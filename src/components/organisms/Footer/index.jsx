import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { personal } from '../../../constants/personal';
import { navLinks } from '../../../constants/navigation';
import styles from './index.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.title}>Entre em contato</h3>
        </div>

        <div className={styles.grid}>
          {/* Descrição */}
          <div className={styles.description}>
            <p className={styles.descriptionText}>{personal.bio}</p>
          </div>
          <div className={styles.columsContainer}>
            {/* Navegação */}
            <div className={styles.column}>
              <h5 className={styles.columnTitle}>Navegação</h5>
              <nav className={styles.linkList}>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contato */}
            <div className={styles.column}>
              <h5 className={styles.columnTitle}>Contato</h5>
              <div className={styles.linkList}>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={personal.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="E-mail"
                  className={styles.contactLink}
                >
                  <FaGoogle size={16} />
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {personal.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Tag from '../../atoms/Tag';
import styles from './index.module.css';

const ProjectCard = ({ project, index }) => {
  const { title, description, tags, repoUrl, deployUrl, imageUrl } = project;
  const isLive = !!deployUrl;

  return (
    <article className={styles.card}>
      <div className={styles.thumbnail}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Preview do projeto ${title}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderText}>Sem preview</span>
          </div>
        )}
      </div>

      <header className={styles.header}>
        <span className={styles.index}>{String(index).padStart(2, '0')}</span>
        {isLive && (
          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            Live
          </span>
        )}
      </header>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <footer className={styles.footer}>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.action} ${styles.actionGhost}`}
          >
            GitHub
          </a>
        )}
        {deployUrl && (
          <a
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.action} ${styles.actionPrimary}`}
          >
            Ver Demo
          </a>
        )}
      </footer>
    </article>
  );
};

export default ProjectCard;

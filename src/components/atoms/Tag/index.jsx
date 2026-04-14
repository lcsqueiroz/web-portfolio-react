import styles from './index.module.css';

const Tag = ({ label }) => {
  return <span className={styles.tag}>{label}</span>;
};

export default Tag;

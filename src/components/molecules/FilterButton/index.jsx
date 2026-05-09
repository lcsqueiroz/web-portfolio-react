import styles from './index.module.css';

const FilterButton = ({ label, isActive = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`${styles.button} ${isActive ? styles.active : styles.inactive}`}
    >
      {label}
    </button>
  );
};

export default FilterButton;

import styles from './index.module.css';

const VARIANT_CLASSES = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

const Button = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${VARIANT_CLASSES[variant]} ${disabled ? styles.disabled : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;

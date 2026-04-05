const BUTTON_VARIANTS = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  ghost: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
};

const Button = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  const variantClass = BUTTON_VARIANTS[variant];
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ml-1 ${variantClass} ${disabledClass}`}
    >
      {label}
    </button>
  );
};

export default Button;

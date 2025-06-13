import React from 'react';
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string; // ✅ Add className prop
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  className = '', // ✅ Default to empty string
}) => {
  return (
    <button
      className={`my-btn my-btn--${variant} my-btn--${size} ${
        loading ? 'my-btn--loading' : ''
      } ${className}`} // ✅ Merge custom class
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;

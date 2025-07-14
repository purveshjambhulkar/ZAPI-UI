import React from 'react';
import './Input.css';

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string; 
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  icon,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className={`input-container ${icon ? 'with-icon' : ''} ${buttonText ? 'with-button' : ''}`}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field"
        />
        {buttonText && (
          <button type="button" className="input-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;

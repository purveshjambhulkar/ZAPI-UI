import React from 'react';
import './Checkbox.css';

type CheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled,
  className = '',
}) => {
  return (
    <label className={`checkbox-wrapper ${disabled ? 'disabled' : ''} ${className}`}>
      <div className="checkbox-box">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="checkbox-input"
        />
        <span className="checkbox-custom" />
      </div>
      {(label || description) && (
        <div className="checkbox-text">
          {label && <span className="checkbox-label">{label}</span>}
          {description && <span className="checkbox-description">{description}</span>}
        </div>
      )}
    </label>
  );
};

export default Checkbox;

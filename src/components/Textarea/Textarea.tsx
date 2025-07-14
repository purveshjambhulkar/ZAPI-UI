import React from "react";
import "./Textarea.css";

type TextareaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string; 

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = "",
  label,
  disabled = false,
  className = "",
  id, 
}) => {
  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && (
        <label htmlFor={id} className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={id} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Textarea;

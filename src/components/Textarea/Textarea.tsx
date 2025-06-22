import React from "react";
import "./Textarea.css";

type TextareaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string; // ✅ Added to support native 'id' prop
};

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = "",
  label,
  disabled = false,
  className = "",
  id, // ✅ Destructure the id prop
}) => {
  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && (
        <label htmlFor={id} className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={id} // ✅ Pass the id to the native element
        className="textarea-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Textarea;

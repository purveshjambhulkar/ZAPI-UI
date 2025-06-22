import React, { useState } from "react";
import "./Avatar.css";

type AvatarProps = {
  src?: string;
  alt?: string;
  fallback: string; // e.g., initials
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  fallback,
  size = "md",
  className = "",
}) => {
  const [imgError, setImgError] = useState(false);
  const sizeClass = `avatar-${size}`;

  return (
    <div className={`avatar-wrapper ${sizeClass} ${className}`}>
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          className="avatar-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="avatar-fallback">{fallback}</span>
      )}
    </div>
  );
};

export default Avatar;

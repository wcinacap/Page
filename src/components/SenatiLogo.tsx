import React from 'react';
import senatiLogoImg from '../assets/images/01.png';

interface SenatiLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'blue' | 'white';
  className?: string;
  height?: number;
}

export const SenatiLogo: React.FC<SenatiLogoProps> = ({
  variant = 'horizontal',
  theme = 'blue',
  className = '',
  height = 34,
}) => {
  const isWhite = theme === 'white';

  if (variant === 'icon-only') {
    // Show only the hexagonal icon from 01.png
    return (
      <div
        className={`inline-block overflow-hidden relative shrink-0 select-none ${className}`}
        style={{
          width: `${height * 1.1}px`,
          height: `${height}px`,
        }}
      >
        <img
          src={senatiLogoImg}
          alt="SENATI Icon"
          className="absolute top-1/2 left-0 -translate-y-1/2 max-w-none h-full object-contain pointer-events-none"
          style={{
            filter: isWhite ? 'brightness(0) invert(1)' : 'none',
            mixBlendMode: isWhite ? 'normal' : 'multiply',
          }}
        />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center justify-center gap-1 select-none ${className}`}>
        <img
          src={senatiLogoImg}
          alt="Logo Oficial SENATI"
          style={{
            height: `${height * 1.2}px`,
            filter: isWhite ? 'brightness(0) invert(1)' : 'none',
            mixBlendMode: isWhite ? 'normal' : 'multiply',
          }}
          className="w-auto object-contain pointer-events-none"
        />
      </div>
    );
  }

  // Horizontal variant (default: exact 01.png)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={senatiLogoImg}
        alt="Logo Oficial SENATI"
        style={{
          height: `${height}px`,
          filter: isWhite ? 'brightness(0) invert(1)' : 'none',
          mixBlendMode: isWhite ? 'normal' : 'multiply',
        }}
        className="w-auto object-contain pointer-events-none transition-opacity"
      />
    </div>
  );
};

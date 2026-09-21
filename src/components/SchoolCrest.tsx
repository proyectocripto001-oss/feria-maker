import React, { useState } from 'react';

interface SchoolCrestProps {
  variant?: 'traditional' | 'seal' | 'compact';
  className?: string;
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ 
  className = 'w-16 h-20' 
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className={`relative flex items-center justify-center select-none flex-shrink-0 ${className}`} 
      title="Escudo Oficial - Institución Educativa Técnica Acuícola de San Cristóbal - 1975"
    >
      {!imgError ? (
        <img
          src="/imagen1.jpg?v=2"
          alt="Escudo Oficial Institución Educativa Técnica Acuícola de San Cristóbal - 1975"
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('/imagen1.jpg')) {
              target.src = '/Imagen1.jpg?v=2';
            } else {
              setImgError(true);
            }
          }}
          loading="eager"
        />
      ) : (
        /* Fallback SVG representation of Imagen1.jpg */
        <svg viewBox="0 0 200 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Ribbon */}
          <path d="M15 18 L185 18 L175 32 L185 46 L15 46 L25 32 Z" fill="#F8FAFC" stroke="#0B3B60" strokeWidth="2.5" />
          <path d="M25 18 L35 8 L165 8 L175 18" fill="none" stroke="#0B3B60" strokeWidth="1.5" />
          <text x="100" y="32" textAnchor="middle" fill="#0B3B60" fontSize="8" fontWeight="bold" letterSpacing="0.4">
            INSTITUCIÓN EDUCATIVA TÉCNICA ACUÍCOLA
          </text>
          <text x="100" y="42" textAnchor="middle" fill="#0B3B60" fontSize="7" fontWeight="bold">
            DE SAN CRISTÓBAL - 1975
          </text>

          {/* Heart / Shield Contour */}
          <path
            d="M30 60 C30 50, 100 50, 100 65 C100 50, 170 50, 170 60 C170 120, 100 175, 100 185 C100 175, 30 120, 30 60 Z"
            fill="#FFFFFF"
            stroke="#0B3B60"
            strokeWidth="3.5"
          />

          {/* Shield Internal Body */}
          <g clipPath="url(#shieldClipFallback)">
            {/* Top Left: Yellow with Pine Trees */}
            <path d="M30 60 L100 60 L100 110 L30 110 Z" fill="#FACC15" />
            <path d="M55 95 L55 98 L51 98 L51 95 Z" fill="#713F12" />
            <polygon points="53,74 42,94 64,94" fill="#15803D" />
            <polygon points="53,78 40,94 66,94" fill="#16A34A" />
            <path d="M78 95 L78 98 L74 98 L74 95 Z" fill="#713F12" />
            <polygon points="76,74 65,94 87,94" fill="#15803D" />
            <polygon points="76,78 63,94 89,94" fill="#16A34A" />

            {/* Top Right: Red with Book & Quill */}
            <path d="M100 60 L170 60 L170 110 L100 110 Z" fill="#DC2626" />
            <path d="M115 88 C125 83, 134 86, 135 94 C136 86, 145 83, 155 88 L155 78 C145 74, 136 76, 135 82 C134 76, 125 74, 115 78 Z" fill="#FEF3C7" stroke="#78350F" strokeWidth="1" />
            <path d="M148 72 C140 76, 133 83, 128 92" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="127" cy="94" rx="4" ry="3" fill="#1E293B" />

            {/* Divider */}
            <line x1="100" y1="60" x2="100" y2="110" stroke="#0B3B60" strokeWidth="2" />
            <line x1="30" y1="110" x2="170" y2="110" stroke="#0B3B60" strokeWidth="2" />

            {/* Bottom Field: Sky, Hills, River & Farmer */}
            <rect x="30" y="110" width="140" height="80" fill="#BAE6FD" />
            <path d="M30 130 Q70 120 110 128 Q150 122 170 132 L170 190 L30 190 Z" fill="#22C55E" />
            <path d="M30 148 C60 142, 120 142, 170 138 L170 156 C120 160, 60 160, 30 165 Z" fill="#0284C7" />
            <ellipse cx="140" cy="144" rx="14" ry="2.5" fill="#1E293B" />
            <circle cx="134" cy="140" r="2" fill="#1E293B" />
            <circle cx="145" cy="140" r="2" fill="#1E293B" />
            <line x1="133" y1="141" x2="138" y2="147" stroke="#1E293B" strokeWidth="1" />

            {/* Soil */}
            <path d="M30 162 L170 150 L170 190 L30 190 Z" fill="#D97706" />
            <path d="M30 168 Q100 178 170 160" stroke="#B45309" strokeWidth="1.5" fill="none" />
            <path d="M30 176 Q100 186 170 172" stroke="#92400E" strokeWidth="1.5" fill="none" />

            {/* Farmer figure */}
            <g transform="translate(85, 142) scale(0.65)">
              <ellipse cx="20" cy="10" rx="9" ry="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="0.8" />
              <circle cx="20" cy="8" r="4" fill="#FEF08A" />
              <path d="M16 14 L24 14 L26 25 L14 25 Z" fill="#86EFAC" />
              <path d="M14 25 L19 38 L17 46 M26 25 L21 38 L23 46" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
              <line x1="15" y1="20" x2="33" y2="44" stroke="#78350F" strokeWidth="1.5" />
              <line x1="31" y1="45" x2="36" y2="43" stroke="#475569" strokeWidth="2.5" />
            </g>

            {/* Cow */}
            <g transform="translate(62, 134) scale(0.4)">
              <ellipse cx="20" cy="15" rx="14" ry="9" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1" />
              <circle cx="28" cy="10" r="5" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1" />
              <rect x="12" y="21" width="3" height="8" fill="#1E293B" />
              <rect x="23" y="21" width="3" height="8" fill="#1E293B" />
              <ellipse cx="18" cy="14" rx="4" ry="4" fill="#92400E" />
            </g>
          </g>

          <clipPath id="shieldClipFallback">
            <path d="M30 60 C30 50, 100 50, 100 65 C100 50, 170 50, 170 60 C170 120, 100 175, 100 185 C100 175, 30 120, 30 60 Z" />
          </clipPath>

          {/* Bottom Banner */}
          <path d="M35 188 Q100 215 165 188 L160 206 Q100 230 40 206 Z" fill="#FFFFFF" stroke="#0B3B60" strokeWidth="2" />
          <text x="100" y="206" textAnchor="middle" fill="#0B3B60" fontSize="7.5" fontWeight="bold">
            Un esfuerzo hecho realidad
          </text>
        </svg>
      )}
    </div>
  );
};

import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'monochrome';
  showText?: boolean;
}

export default function BrandLogo({
  className = '',
  size = 'md',
  variant = 'dark',
  showText = true,
}: BrandLogoProps) {
  // Dimension tokens
  const iconDimensions = {
    sm: { box: 'w-9 h-9', icon: 'w-5 h-5', radius: 'rounded-lg' },
    md: { box: 'w-11 h-11', icon: 'w-6 h-6', radius: 'rounded-xl' },
    lg: { box: 'w-14 h-14', icon: 'w-8 h-8', radius: 'rounded-2xl' },
    xl: { box: 'w-20 h-20', icon: 'w-12 h-12', radius: 'rounded-3xl' },
  }[size];

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg md:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  }[size];

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size];

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 group select-none ${className}`}>
      {/* High-Fidelity Custom Engineered Vector Emblem */}
      <div
        className={`${iconDimensions.box} ${iconDimensions.radius} relative shrink-0 flex items-center justify-center p-1.5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-amber-500/20 ${
          isLight
            ? 'bg-gradient-to-br from-[#E49B45] via-[#D18933] to-[#B36F22] text-[#081522] border border-amber-300/40 ring-1 ring-amber-400/20'
            : 'bg-gradient-to-br from-[#091726] via-[#0D2033] to-[#163652] text-[#E49B45] border border-[#E49B45]/40 shadow-[#081522]/40 ring-1 ring-[#E49B45]/20'
        }`}
      >
        {/* Fine Architectural Grid & Interlocking Emblem SVG */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="rawasi-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9C57D" />
              <stop offset="50%" stopColor="#E49B45" />
              <stop offset="100%" stopColor="#C97E24" />
            </linearGradient>
            <linearGradient id="rawasi-deep" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3E5C" />
              <stop offset="100%" stopColor="#0A1826" />
            </linearGradient>
            <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Outer Interlocking Paving Motif (Saudi Heritage Hexagonal / Diamond Harmony) */}
          {/* Top Paver Block */}
          <path
            d="M50 10 L78 26 L50 42 L22 26 Z"
            fill={isLight ? '#0D2033' : 'url(#rawasi-gold)'}
            stroke={isLight ? '#E49B45' : '#FFE5B4'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Left Interlocking Paver Block */}
          <path
            d="M20 30 L48 46 L48 78 L20 62 Z"
            fill={isLight ? '#163652' : '#C97E24'}
            stroke={isLight ? '#E49B45' : '#F9C57D'}
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Right Interlocking Paver Block */}
          <path
            d="M52 46 L80 30 L80 62 L52 78 Z"
            fill={isLight ? '#081522' : 'url(#rawasi-gold)'}
            stroke={isLight ? '#E49B45' : '#FFE5B4'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Core Keystone / Interlock Geometric Crown (Letter "ر" / Pinnacle of Solid Foundation) */}
          <path
            d="M50 33 L62 40 L50 47 L38 40 Z"
            fill={isLight ? '#E49B45' : '#0D2033'}
            stroke={isLight ? '#081522' : '#E49B45'}
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="40"
            r="3"
            fill={isLight ? '#081522' : '#E49B45'}
          />

          {/* Base Curbstone Reinforcement Anchor Line */}
          <path
            d="M24 74 L50 89 L76 74 L80 77 L50 94 L20 77 Z"
            fill={isLight ? '#081522' : '#E49B45'}
            opacity="0.85"
          />
        </svg>

        {/* Delicate Golden Corner Highlight Indicator */}
        <div
          className={`absolute -top-1 -right-1 w-2 h-2 rounded-full border ${
            isLight
              ? 'bg-[#0D2033] border-amber-300'
              : 'bg-[#E49B45] border-[#081522]'
          } shadow-xs`}
        />
      </div>

      {/* Brand Typographic Identity */}
      {showText && (
        <div className="min-w-0 text-right">
          <div className="flex items-center gap-1.5">
            <span
              className={`${titleSizes} font-black tracking-tight leading-none transition-colors ${
                isLight
                  ? 'text-white group-hover:text-amber-300'
                  : 'text-[#0D2033] group-hover:text-[#E49B45]'
              }`}
            >
              رواسي
            </span>
            <span
              className={`text-[11px] sm:text-xs font-bold px-1.5 py-0.5 rounded-md ${
                isLight
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-amber-50 text-[#C97E24] border border-amber-200/60'
              }`}
            >
              للمقاولات
            </span>
          </div>
          <span
            className={`block ${subSizes} font-semibold tracking-tight truncate mt-0.5 ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            لأعمال الإنترلوك والبلدورات والرصف
          </span>
        </div>
      )}
    </div>
  );
}

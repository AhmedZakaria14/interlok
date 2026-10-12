import React from 'react';

interface PatternVisualProps {
  type: 'herringbone' | 'unistone' | 'curb' | 'basketweave' | 'walkway' | 'maintenance' | 'hero';
  className?: string;
  title?: string;
}

export default function PatternVisual({
  type,
  className = '',
  title,
}: PatternVisualProps) {
  // Herringbone Interlock (أحواش الفلل والمداخل)
  if (type === 'herringbone' || type === 'hero') {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-[#E5DFD5] flex items-center justify-center ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Natural Sand Ground Base */}
          <rect width="500" height="320" fill="#E2DDD5" />

          {/* Curbs border on top and sides */}
          <rect x="0" y="0" width="500" height="28" fill="#78716C" stroke="#57534E" strokeWidth="2" />
          <rect x="0" y="292" width="500" height="28" fill="#78716C" stroke="#57534E" strokeWidth="2" />

          {/* Authentic Herringbone Pattern Pavers */}
          <g opacity="0.95">
            {/* Repeating realistic brick layout in 45° herringbone */}
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 9 }).map((_, col) => {
                const isTerracotta = (row + col) % 3 === 0;
                const isSandBeige = (row + col) % 3 === 1;
                const fillColor = isTerracotta ? '#C25E38' : isSandBeige ? '#D4A373' : '#8A817C';
                const strokeColor = '#4A4441';

                return (
                  <g key={`${row}-${col}`}>
                    <rect
                      x={20 + col * 55}
                      y={35 + row * 32}
                      width="50"
                      height="24"
                      rx="2"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth="1.2"
                    />
                    <line
                      x1={22 + col * 55}
                      y1={37 + row * 32}
                      x2={68 + col * 55}
                      y2={37 + row * 32}
                      stroke="#FFFFFF"
                      strokeOpacity="0.25"
                      strokeWidth="1"
                    />
                  </g>
                );
              })
            )}
          </g>

          {/* Villa garden palm tree silhouette / shadow overlay for realistic contractor look */}
          <path
            d="M 450,28 L 470,120 L 410,60 Z"
            fill="#1C1917"
            fillOpacity="0.15"
          />
        </svg>

        {title && (
          <span className="absolute bottom-3 right-3 text-xs font-bold px-3 py-1 bg-white/95 text-[#061019] rounded-lg shadow-md border border-slate-200">
            {title}
          </span>
        )}
      </div>
    );
  }

  // Curbstone (البلدورات والبردورات)
  if (type === 'curb') {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-[#D6D3D1] flex items-center justify-center ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Road Asphalt on left */}
          <rect x="0" y="0" width="180" height="320" fill="#383838" />
          <line x1="90" y1="0" x2="90" y2="320" stroke="#FFFFFF" strokeDasharray="16 16" strokeWidth="4" />

          {/* Paved Walkway on right */}
          <rect x="250" y="0" width="250" height="320" fill="#E7E5E4" />
          {/* Paving grid on walkway */}
          {Array.from({ length: 10 }).map((_, r) => (
            <line key={`wl-${r}`} x1="250" y1={r * 32} x2="500" y2={r * 32} stroke="#A8A29E" strokeWidth="1" />
          ))}
          {Array.from({ length: 8 }).map((_, c) => (
            <line key={`wc-${c}`} x1={250 + c * 32} y1="0" x2={250 + c * 32} y2="320" stroke="#A8A29E" strokeWidth="1" />
          ))}

          {/* Central Heavy Concrete Curbstones */}
          <g>
            {/* Base foundation */}
            <rect x="175" y="0" width="80" height="320" fill="#78716C" stroke="#44403C" strokeWidth="2" />
            {/* Curbstone blocks */}
            {Array.from({ length: 6 }).map((_, i) => (
              <g key={`curb-${i}`}>
                <rect
                  x="185"
                  y={i * 54 + 2}
                  width="60"
                  height="50"
                  fill="#A8A29E"
                  stroke="#44403C"
                  strokeWidth="2"
                  rx="2"
                />
                {/* Chamfer edge */}
                <polygon
                  points={`185,${i * 54 + 2} 195,${i * 54 + 2} 185,${i * 54 + 12}`}
                  fill="#E7E5E4"
                />
              </g>
            ))}
          </g>

          {/* Laser level alignment string */}
          <line x1="215" y1="0" x2="215" y2="320" stroke="#E49B45" strokeWidth="2" strokeDasharray="6 4" />
        </svg>

        {title && (
          <span className="absolute bottom-3 right-3 text-xs font-bold px-3 py-1 bg-white/95 text-[#061019] rounded-lg shadow-md border border-slate-200">
            {title}
          </span>
        )}
      </div>
    );
  }

  // Parking Unistone 8cm (مواقف السيارات)
  if (type === 'unistone') {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-[#E5E5E5] flex items-center justify-center ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="320" fill="#E5E5E5" />

          {/* Heavy Unistone Interlocking Grid */}
          <g>
            {Array.from({ length: 9 }).map((_, r) =>
              Array.from({ length: 11 }).map((_, c) => {
                const isYellow = (r + c) % 4 === 0;
                const isCharcoal = (r + c) % 4 === 2;
                const fill = isYellow ? '#E49B45' : isCharcoal ? '#44403C' : '#A8A29E';
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={20 + c * 44}
                    y={15 + r * 34}
                    width="40"
                    height="30"
                    rx="3"
                    fill={fill}
                    stroke="#292524"
                    strokeWidth="1.2"
                  />
                );
              })
            )}
          </g>

          {/* White parking bay line */}
          <rect x="235" y="10" width="12" height="300" fill="#FFFFFF" rx="2" stroke="#D6D3D1" strokeWidth="1" />

          {/* Specification badge */}
          <g transform="translate(160, 130)">
            <rect width="180" height="42" rx="8" fill="#12314A" stroke="#E49B45" strokeWidth="2" />
            <text x="90" y="26" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
              سماكة 8 سم لتحمل المركبات
            </text>
          </g>
        </svg>

        {title && (
          <span className="absolute bottom-3 right-3 text-xs font-bold px-3 py-1 bg-white/95 text-[#061019] rounded-lg shadow-md border border-slate-200">
            {title}
          </span>
        )}
      </div>
    );
  }

  // Garden Walkway (ممرات الحدائق)
  if (type === 'walkway') {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-[#E2E8F0] flex items-center justify-center ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green garden landscape field */}
          <rect width="500" height="320" fill="#3F6212" />

          {/* Stepping pathway through garden */}
          <path
            d="M 50,320 Q 200,160 150,0 L 290,0 Q 360,160 210,320 Z"
            fill="#D6D3D1"
            stroke="#78716C"
            strokeWidth="3"
          />

          {/* Paved paver steps along curve */}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={`step-${i}`}
              x={100 + (i % 2) * 20}
              y={20 + i * 36}
              width="150"
              height="28"
              rx="4"
              fill={i % 2 === 0 ? '#E49B45' : '#A8A29E'}
              stroke="#57534E"
              strokeWidth="1.5"
            />
          ))}

          {/* Garden plants overlay */}
          <circle cx="60" cy="80" r="35" fill="#4D7C0F" />
          <circle cx="430" cy="220" r="45" fill="#4D7C0F" />
          <circle cx="420" cy="100" r="30" fill="#65A30D" />
        </svg>

        {title && (
          <span className="absolute bottom-3 right-3 text-xs font-bold px-3 py-1 bg-white/95 text-[#061019] rounded-lg shadow-md border border-slate-200">
            {title}
          </span>
        )}
      </div>
    );
  }

  // Basketweave Sidewalk (أرصفة المشاة)
  if (type === 'basketweave') {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-[#E7E5E4] flex items-center justify-center ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="320" fill="#E7E5E4" />

          {/* Basketweave modules */}
          <g>
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 7 }).map((_, c) => {
                const isHorizontal = (r + c) % 2 === 0;
                return isHorizontal ? (
                  <g key={`${r}-${c}`}>
                    <rect x={30 + c * 65} y={20 + r * 48} width="60" height="21" rx="2" fill="#D4A373" stroke="#57534E" strokeWidth="1.2" />
                    <rect x={30 + c * 65} y={43 + r * 48} width="60" height="21" rx="2" fill="#A8A29E" stroke="#57534E" strokeWidth="1.2" />
                  </g>
                ) : (
                  <g key={`${r}-${c}`}>
                    <rect x={30 + c * 65} y={20 + r * 48} width="29" height="44" rx="2" fill="#C25E38" stroke="#57534E" strokeWidth="1.2" />
                    <rect x={61 + c * 65} y={20 + r * 48} width="29" height="44" rx="2" fill="#A8A29E" stroke="#57534E" strokeWidth="1.2" />
                  </g>
                );
              })
            )}
          </g>

          {/* Tree pit circle on sidewalk */}
          <circle cx="250" cy="160" r="42" fill="#78716C" stroke="#292524" strokeWidth="3" />
          <circle cx="250" cy="160" r="30" fill="#57534E" />
          <text x="250" y="165" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
            حوض رصيف
          </text>
        </svg>

        {title && (
          <span className="absolute bottom-3 right-3 text-xs font-bold px-3 py-1 bg-white/95 text-[#061019] rounded-lg shadow-md border border-slate-200">
            {title}
          </span>
        )}
      </div>
    );
  }

  // Site Execution / Maintenance (مراحل التجهيز والدك)
  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#E5DFD5] flex items-center justify-center ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="320" fill="#F5F5F4" />

        {/* Realistic Ground Cross Section */}
        {/* Layer 1: Pavers */}
        <rect x="40" y="30" width="420" height="45" fill="#C25E38" stroke="#78350F" strokeWidth="2" rx="4" />
        <text x="250" y="58" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">
          بلاط الإنترلوك الخرساني (6 سم أو 8 سم)
        </text>

        {/* Layer 2: Bedding Sand */}
        <rect x="40" y="80" width="420" height="35" fill="#FDE68A" stroke="#D97706" strokeWidth="2" rx="4" />
        <text x="250" y="103" fill="#92400E" fontSize="13" fontWeight="bold" textAnchor="middle">
          فرشة رمل مغسول ومسوى على الأوتار الليزرية (4 سم)
        </text>

        {/* Layer 3: Subbase Aggregate */}
        <rect x="40" y="120" width="420" height="85" fill="#78716C" stroke="#44403C" strokeWidth="2" rx="4" />
        <text x="250" y="165" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">
          طبقة أساس صبيز مدموكة بالرصاصة 95% (15 - 20 سم)
        </text>

        {/* Layer 4: Compacted Subgrade Soil */}
        <rect x="40" y="210" width="420" height="75" fill="#57534E" stroke="#292524" strokeWidth="2" rx="4" />
        <text x="250" y="255" fill="#E7E5E4" fontSize="13" fontWeight="bold" textAnchor="middle">
          التربة الطبيعية بعد التسوية والمعالجة الميكانيكية
        </text>
      </svg>

      {title && (
        <span className="absolute bottom-3 right-3 text-xs font-bold px-3 py-1 bg-white/95 text-[#12314A] rounded-lg shadow-md border border-slate-200">
          {title}
        </span>
      )}
    </div>
  );
}

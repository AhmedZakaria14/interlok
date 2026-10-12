'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside
      aria-label="زر التواصل السريع عبر واتساب"
      className="hidden md:flex fixed bottom-8 left-6 z-40 items-center gap-3"
    >
      {/* Interactive Tooltip bubble */}
      {!tooltipDismissed && (
        <div className="flex items-center gap-2.5 bg-white text-[#12314A] px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-bold animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span>تواصل مع مسؤول المعاينة والتسعير</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer mr-1"
            aria-label="إغلاق التنبيه"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع خبير الإنترلوك عبر واتساب"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}

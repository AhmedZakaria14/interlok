'use client';

import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function MobileStickyBar() {
  const handleQuoteClick = () => {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#quote';
    }
  };

  return (
    <aside
      aria-label="أزرار التواصل السريع"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call Action */}
        <a
          href={CONTACT_INFO.callUrl}
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#061019] hover:bg-[#132B40] active:bg-[#132B40] text-white rounded-xl transition-all text-center active:scale-95 shadow-xs"
          aria-label="اتصال هاتفي مباشر"
        >
          <Phone className="w-4 h-4 text-[#E59F48] mb-0.5" />
          <span className="text-[11px] font-black leading-tight">اتصال الآن</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#20ba5a] text-white rounded-xl transition-all text-center active:scale-95 shadow-xs"
          aria-label="مراسلة واتساب فورية"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-black leading-tight">واتساب</span>
        </a>

        {/* Quote Form Action */}
        <button
          type="button"
          onClick={handleQuoteClick}
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] text-[#061019] rounded-xl transition-all text-center font-black active:scale-95 shadow-xs cursor-pointer"
          aria-label="طلب مقايسة وعرض سعر"
        >
          <FileText className="w-4 h-4 mb-0.5 text-[#061019]" />
          <span className="text-[11px] leading-tight">طلب مقايسة</span>
        </button>
      </div>
    </aside>
  );
}

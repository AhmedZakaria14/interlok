import React from 'react';
import { Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function TopBar() {
  return (
    <div className="bg-[#061019] text-slate-300 text-xs py-2 border-b border-[#132B40]/70 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Left / Primary info */}
        <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-1.5 font-bold text-[#E59F48] whitespace-nowrap">
            <span aria-hidden="true">🇸🇦</span>
            <span>المملكة العربية السعودية</span>
            <span className="hidden lg:inline text-slate-400 font-normal">| توريد وتنفيذ كافة المخططات والمواقع</span>
          </div>

          <span className="hidden sm:inline text-slate-700" aria-hidden="true">/</span>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
            <span>{CONTACT_INFO.workingHours}</span>
          </div>

          <span className="hidden xl:inline text-slate-700" aria-hidden="true">/</span>

          <div className="hidden xl:flex items-center gap-1.5 text-slate-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>تنفيذ معتمد وفق كود البناء السعودي</span>
          </div>
        </div>

        {/* Right action / Contact links */}
        <div className="flex items-center gap-3 sm:gap-5 font-semibold text-xs shrink-0">
          <div className="hidden xs:flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>طواقم المعاينة جاهزة</span>
          </div>

          <a
            href={CONTACT_INFO.callUrl}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#E59F48] transition-colors py-0.5"
            aria-label={`اتصال مباشر: ${CONTACT_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
            <span dir="ltr" className="font-mono tracking-wider font-bold text-[11px] sm:text-xs">
              {CONTACT_INFO.phone}
            </span>
          </a>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors py-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span className="text-xs">واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}

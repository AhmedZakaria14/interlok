'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Sparkles, Copy, Check, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>معلومات وقنوات الاتصال المباشر</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            تواصل معنا لمناقشة مشروعك وطلب المعاينة
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            جاهزون للرد على كافة الاستفسارات الفنية وتقديم المشورة وحساب الكميات لموقعك في أي وقت بالمملكة العربية السعودية.
          </p>
        </div>

        {/* Contact Channels Grid (3 Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto">
          
          {/* Channel 1: Phone */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all text-center space-y-5 flex flex-col justify-between hover:-translate-y-1.5">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#061019] text-[#E59F48] flex items-center justify-center mx-auto shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#061019]">الاتصال الهاتفي المباشر</h3>
              <p className="text-xs text-slate-500 font-normal">تحدث مباشرة مع مهندس المعاينة لمراجعة التفاصيل والمواعيد</p>
              
              <div className="pt-2 flex items-center justify-center gap-2">
                <span className="text-2xl font-black text-[#061019] font-mono tracking-wider" dir="ltr">
                  {CONTACT_INFO.phone}
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 text-slate-400 hover:text-[#D9822B] transition-colors rounded-lg bg-slate-100 hover:bg-slate-200 cursor-pointer"
                  title="نسخ رقم الجوال"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href={CONTACT_INFO.callUrl}
              className="w-full py-3.5 px-4 text-xs font-black text-white bg-[#061019] hover:bg-[#132B40] rounded-xl transition-colors block cursor-pointer active:scale-95 text-center shadow-xs"
            >
              اتصال هاتفي فوري
            </a>
          </div>

          {/* Channel 2: WhatsApp */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-emerald-200/90 shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all text-center space-y-5 flex flex-col justify-between hover:-translate-y-1.5">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-600/20">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#061019]">مراسلة واتساب فورية</h3>
              <p className="text-xs text-slate-500 font-normal">إرسال صور ومخططات الموقع وطلب التسعير الفوري</p>
              
              <div className="pt-2">
                <span className="text-2xl font-black text-emerald-700 font-mono tracking-wider" dir="ltr">
                  {CONTACT_INFO.whatsappNumber}
                </span>
              </div>
            </div>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 text-xs font-black text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors block cursor-pointer active:scale-95 text-center shadow-xs"
            >
              مراسلة عبر واتساب
            </a>
          </div>

          {/* Channel 3: Hours & Coverage */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all text-center space-y-5 flex flex-col justify-between hover:-translate-y-1.5">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#D9822B] border border-amber-200/80 flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#061019]">أوقات وتغطية العمل</h3>
              <div className="text-xs text-slate-600 space-y-2 pt-1 font-normal">
                <div className="font-bold text-slate-800">{CONTACT_INFO.workingHours}</div>
                <div className="flex items-center justify-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#D9822B]" />
                  <span>كافة مناطق المملكة العربية السعودية</span>
                </div>
              </div>
            </div>

            <a
              href="#quote"
              className="w-full py-3.5 px-4 text-xs font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all block cursor-pointer active:scale-95 text-center shadow-md hover:shadow-amber-500/20"
            >
              تعبئة طلب عرض السعر
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

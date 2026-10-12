'use client';

import React, { useState } from 'react';
import { FAQS, CONTACT_INFO } from '@/lib/constants';
import { Plus, Minus, Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>الأسئلة الشائعة والإرشادات الهندسية</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            إجابات واضحة حول أعمال الإنترلوك والبلدورات
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal mt-4">
            جمعنا لك أهم الاستفسارات الفنية والتنفيذية التي تساعدك على اتخاذ القرار الصحيح لمشروعك بالمملكة.
          </p>
        </div>

        {/* Accordion List (Elementor Accordion Style) */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-white shadow-xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-6 text-right flex items-center justify-between gap-3 font-black text-[#081522] hover:text-[#D97706] transition-colors cursor-pointer active:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-[#E49B45] text-[#081522]' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAFAFA]">
                    <p className="leading-loose font-normal">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Rapid Help Strip */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-3xl bg-[#081522] text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 shadow-xl border border-slate-700">
          <div className="space-y-1 text-center sm:text-right">
            <h4 className="font-black text-sm sm:text-base text-white">لديك سؤال فني لم تجد إجابته هنا؟</h4>
            <p className="text-[11px] sm:text-xs text-slate-300 font-normal">تواصل مع المشرف مباشرة للحصول على توضيح هندسي فوري لموقعك.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              href={CONTACT_INFO.callUrl}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-black text-[#081522] bg-[#E49B45] rounded-xl hover:bg-[#D18933] transition-colors cursor-pointer text-center active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-black text-white bg-[#25D366] rounded-xl hover:bg-[#20ba5a] transition-colors cursor-pointer text-center active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

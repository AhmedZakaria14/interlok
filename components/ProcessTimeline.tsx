'use client';

import React, { useState } from 'react';
import { EXECUTION_STEPS } from '@/lib/constants';
import { CheckCircle2, Sparkles, ChevronLeft, ArrowLeft, ShieldCheck, Compass, Hammer, Ruler } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = EXECUTION_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>منهجية العمل والرقابة الهندسية</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            مراحل تنفيذ أعمال الإنترلوك والبلدورات خطوة بخطوة
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            نتبع تسلسلاً فنياً صارماً يبدأ من فحص التربة والمناسيب وصولاً إلى التسليم النهائي المعتمد؛ لضمان عدم حدوث أي هبوط أرضي أو تجمع لمياه الأمطار.
          </p>
        </div>

        {/* Interactive Step Navigator Strip */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10 text-right">
          {EXECUTION_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-right transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#061019] text-white border-[#E59F48] shadow-lg scale-102 ring-1 ring-[#E59F48]'
                    : 'bg-[#F8FAFC] border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black font-mono ${isActive ? 'text-[#E59F48]' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E59F48] animate-ping' : 'bg-slate-300'}`} />
                </div>
                <div className="text-xs font-black leading-snug line-clamp-2">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Panel (Desktop) */}
        <div className="hidden lg:block bg-gradient-to-r from-[#061019] via-[#0A1926] to-[#132B40] text-white rounded-3xl p-8 mb-14 border border-slate-800 shadow-2xl relative overflow-hidden text-right">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#E59F48] to-transparent" />
          
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-[#132B40] px-3 py-1 rounded-xl border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#E59F48]" />
                <span>المرحلة {activeStepIndex + 1} من 6: الرقابة الفنية والمواصفة</span>
              </div>

              <h3 className="text-2xl font-black text-white">
                {activeStep.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStep.shortDesc}
              </p>

              <div className="pt-2">
                <span className="block text-xs font-bold text-[#E59F48] mb-2">
                  إجراءات الجودة الميدانية لهذه المرحلة:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {activeStep.details.map((dt, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                      <span>{dt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-4 bg-[#0A1926] p-6 rounded-2xl border border-slate-700 space-y-4 text-center">
              <div className="text-4xl font-black text-[#E59F48] font-mono">
                {activeStep.stepNumber}
              </div>
              <div className="text-xs text-slate-400">
                الخطوة المعتمدة بالموقع
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 0))}
                  disabled={activeStepIndex === 0}
                  className="flex-1 py-2 rounded-xl text-xs font-bold bg-[#132B40] text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
                >
                  السابق
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev < 5 ? prev + 1 : 5))}
                  disabled={activeStepIndex === 5}
                  className="flex-1 py-2 rounded-xl text-xs font-bold bg-[#E59F48] text-[#061019] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-400 transition-colors"
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Steps Grid (Responsive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative text-right">
          {EXECUTION_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#E59F48]/60 hover:bg-white shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all duration-300 relative space-y-4 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#061019] font-mono group-hover:text-[#D9822B] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-bold text-[#061019] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs font-mono">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#061019] leading-snug group-hover:text-[#D9822B] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.shortDesc}
                </p>
              </div>

              {/* Sub-steps checklist */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9822B] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

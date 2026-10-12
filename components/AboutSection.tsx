'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Phone, Compass, Ruler, Hammer, Award, Sparkles, ChevronLeft, Layers, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface AnatomyLayer {
  id: number;
  title: string;
  depth: string;
  color: string;
  accentColor: string;
  description: string;
  checkpoints: string[];
}

const ANATOMY_LAYERS: AnatomyLayer[] = [
  {
    id: 1,
    title: 'بلاط الإنترلوك الخرساني المتشابك',
    depth: 'سماكة 6 - 8 سم',
    color: 'bg-amber-600',
    accentColor: 'border-amber-500 text-amber-500',
    description: 'بلاط خرساني فائق المقاومة (>450 كجم/سم²) بتشابك هندسي يوزع الأحمال بالتساوي ويمنع الخلخلة.',
    checkpoints: ['مقاومة احتكاك عالية', 'ثبات لوني في الشمس الحارقة', 'قص ماكينات دقيق حول المناهل']
  },
  {
    id: 2,
    title: 'فرشة رمل ناعم مغسول ومسوى',
    depth: 'سماكة 3 - 5 سم',
    color: 'bg-amber-300',
    accentColor: 'border-amber-400 text-amber-600',
    description: 'طبقة تسوية نقية خالية من الشوائب والأملاح يتم تسويتها بأوتار وموازين ليزرية لضبط انسياب المطر.',
    checkpoints: ['رمل سيليكا مغسول خالي من الطين', 'تسوية موازين دقيقة للميول', 'توزيع متساوي بدون مطبات']
  },
  {
    id: 3,
    title: 'طبقة الأساس المدموك (الصبيز A)',
    depth: 'سماكة 15 - 20 سم',
    color: 'bg-slate-500',
    accentColor: 'border-slate-400 text-slate-700',
    description: 'خليط حجري متدرج يتم رشه بالماء ودكه بمداحل ميكانيكية ثقيلة بنسبة كثافة 95%+ لمنع أي هبوط مستقبلي.',
    checkpoints: ['دك ميكانيكي هيدروليكي 95%+', 'رش مائي مدروس للوصول للكثافة القصوى', 'عزل وتثبيت قاعدة التربة']
  },
  {
    id: 4,
    title: 'البلدورات الخرسانية والصبة المساندة',
    depth: 'تثبيت طرفي خرساني',
    color: 'bg-slate-700',
    accentColor: 'border-slate-600 text-slate-800',
    description: 'قواعد خرسانية تحيط بكامل المساحة مدعومة بصبة خلفية تمنع انفراج البلاط جانباً تحت ضغط عجلات السيارات.',
    checkpoints: ['فرشة خرسانة عادية للقاعدة', 'صبة مساندة خلفية (Backing)', 'فواصل تمدد منتظمة']
  }
];

export default function AboutSection() {
  const [activeLayer, setActiveLayer] = useState<AnatomyLayer>(ANATOMY_LAYERS[0]);

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>الهندسة المعمارية والمعايير الفنية المعتمدة</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            لماذا تختلف جودة الرصف في «رواسي للمقاولات»؟
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            الرصف الاحترافي ليس مجرد ترتيب للبلاط؛ بل هو منظومة هندسية متكاملة تبدأ من دراسة التربة، مرورا بالدك الميكانيكي وضبط ميول التصريف، وصولاً إلى تثبيت الحواف وتأمين الفواصل ليدوم عقوداً دون هبوط.
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Engineering Ethos & Checklist (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-[#061019] leading-snug">
                التزام فني بأدق التفاصيل وفق كود البناء السعودي
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                في <strong className="text-[#061019] font-black">رواسي للمقاولات</strong> نحرص على تنفيذ مشاريع الأحواش والمواقف والأرصفة بأيدي كوادر فنية متمرسة، مستخدمين أحدث معدات الليزر والمداحل الهيدروليكية، لضمان استواء السطح التام وعدم تجمع قطرة ماء واحدة.
              </p>
            </div>

            {/* 4 Technical Quality Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9822B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#061019]">تسوية ليزرية للمناسيب</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">توجيه انسياب المياه لمصارف الصرف بدقة 1.5%.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9822B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#061019]">تثبيت صبة مساندة للبلدورات</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">خرسانة مساندة تمنع تفكك وانفراج البلاط جانباً.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9822B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#061019]">قص ماكينات مائي</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">تشطيب نظيف ومحكم عند غرف التفتيش ومداخل الكراج.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9822B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#061019]">حشو سيلكا ودك نهائي</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">قفل الفواصل برمل ناعم ودك هزاز بقاعدة مطاطية.</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/about"
                className="justify-center px-6 py-3.5 text-xs sm:text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2 text-center cursor-pointer"
              >
                <span>المزيد عن معاييرنا الفنية</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>

              <a
                href={CONTACT_INFO.callUrl}
                className="inline-flex items-center justify-center gap-2.5 p-2 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold text-[#0A1926] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0A1926] text-[#E59F48] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold block">استفسار المشرف الفني:</span>
                  <span className="font-mono text-xs sm:text-sm font-black text-[#061019]" dir="ltr">{CONTACT_INFO.phone}</span>
                </div>
              </a>
            </div>

          </div>

          {/* Left Column: Interactive Engineering Anatomy Cross-Section (6 cols) */}
          <div className="lg:col-span-6 bg-[#061019] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 relative overflow-hidden text-right">
            
            {/* Header of Anatomy Visualizer */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[11px] text-[#E59F48] font-mono font-bold tracking-wider block">
                  TECHNICAL SPECIFICATION
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                  التشريح الهندسي لطبقات الرصف (Cross-Section)
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#132B40] flex items-center justify-center text-[#E59F48] shrink-0 border border-slate-700">
                <Layers className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              اضغط على أي طبقة أدناه لاستعراض معيارها الهندسي الدقيق وسماكتها المعتمدة:
            </p>

            {/* Interactive Layers Stack */}
            <div className="space-y-2.5 mb-6">
              {ANATOMY_LAYERS.map((layer) => {
                const isActive = activeLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(layer)}
                    className={`w-full p-3 sm:p-3.5 rounded-xl text-right transition-all flex items-center justify-between gap-3 border cursor-pointer ${
                      isActive
                        ? 'bg-[#132B40] border-[#E59F48] text-white shadow-[0_0_20px_-5px_rgba(229,159,72,0.3)] ring-1 ring-[#E59F48]'
                        : 'bg-[#0A1926] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3.5 h-3.5 rounded-full ${layer.color} shrink-0 ring-2 ring-white/20`} />
                      <span className="text-xs sm:text-sm font-bold">{layer.title}</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-white/5 shrink-0">
                      {layer.depth}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Layer Deep-Dive Card */}
            <div className="bg-[#0A1926] rounded-2xl p-4 sm:p-5 border border-slate-700 text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-2">
                <span className="text-sm text-white font-black">{activeLayer.title}</span>
                <span className="font-mono text-[11px] text-[#E59F48] bg-[#132B40] px-2 py-0.5 rounded">
                  {activeLayer.depth}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed text-xs">
                {activeLayer.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                <div className="text-[10px] text-slate-400 font-bold">نقاط الفحص الهندسي الميداني:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {activeLayer.checkpoints.map((cp, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E59F48] shrink-0" />
                      <span>{cp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Saudi Code Guarantee Badge */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#E59F48]" />
                <span>ضمان عدم هبوط واستواء تام لمياه الأمطار</span>
              </div>
              <span className="text-slate-500 font-mono">SASO / SBC</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  ArrowDownLeft,
  CheckCircle2,
  Send,
  HardHat,
  Award,
  Ruler,
  ShieldCheck,
  Sparkles,
  Layers,
  Compass,
  ChevronLeft
} from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';

interface ScopePreset {
  id: string;
  name: string;
  thickness: string;
  pattern: string;
  loadType: string;
  baseSpec: string;
}

const SCOPE_PRESETS: ScopePreset[] = [
  {
    id: 'villa',
    name: 'أحواش الفلل والعمائر',
    thickness: '6 سم عالي الكثافة',
    pattern: 'متداخل يونيستون أو متعرج',
    loadType: 'مشاة وسيارات خفيفة',
    baseSpec: 'دك صبيز 15 سم + فرشة رمل مغسول 4 سم'
  },
  {
    id: 'parking',
    name: 'مواقف السيارات والمداخل',
    thickness: '8 سم ثقيل معتمد',
    pattern: 'عظم سمكة (Herringbone 45°)',
    loadType: 'سيارات عائلية وشاحنات تفريغ',
    baseSpec: 'دك صبيز 20 سم طبقتين + بلدورات مصمتة مساندة'
  },
  {
    id: 'sidewalk',
    name: 'أرصفة المشاة الخارجية',
    thickness: '6 سم مانع للانزلاق',
    pattern: 'سلة كلاسيكي أو مستطيل',
    loadType: 'حركة مشاة متواصلة وممرات بلدية',
    baseSpec: 'بلدورات رصيف 15×30 مع خرسانة تثبيت'
  },
  {
    id: 'garden',
    name: 'ممرات الحدائق والاستراحات',
    thickness: '6 سم ديكوري ملون',
    pattern: 'تشكيلة هندسية سداسية ومربعة',
    loadType: 'مشاة وجلسات خارجية',
    baseSpec: 'تسوية ميول لتصريف الري والأمطار'
  }
];

export default function Hero() {
  const [selectedPreset, setSelectedPreset] = useState<ScopePreset>(SCOPE_PRESETS[0]);
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickArea, setQuickArea] = useState('150');
  const [quickCity, setQuickCity] = useState('الرياض');
  const [formError, setFormError] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim()) {
      setFormError('يرجى كتابة الاسم الكريم للمعاينة.');
      return;
    }
    if (!quickPhone.trim()) {
      setFormError('يرجى إدخال رقم الجوال لتأكيد موعد المعاينة.');
      return;
    }
    setFormError('');

    const message = [
      'السلام عليكم ورحمة الله وبركاته،',
      `طلب معاينة وتوريد/تركيب إنترلوك وبلدورات - مؤسسة ${CONTACT_INFO.temporaryBrandName}:`,
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `• الاسم: ${quickName.trim()}`,
      `• الجوال: ${quickPhone.trim()}`,
      `• المدينة: ${quickCity}`,
      `• نوع المساحة: ${selectedPreset.name}`,
      `• المواصفة المقترحة: سماكة ${selectedPreset.thickness} - نمط ${selectedPreset.pattern}`,
      `• المساحة التقريبية: ${quickArea.trim()} م²`,
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'يرجى التواصل لتأكيد موعد المعاينة الميدانية ورفع المقاسات بالموقع.',
    ].filter(Boolean).join('\n');

    const targetUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.location.href = targetUrl;
  };

  return (
    <div className="relative bg-[#061019] text-white overflow-hidden">
      {/* Blueprint Architectural Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      {/* Modern Radial Gradient Lights */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#E59F48]/20 via-[#D9822B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#132B40]/60 via-[#0A1926]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Gold Laser Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E59F48]/70 to-transparent" />

      {/* Main Hero Content */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Right Column: Hero Headline & Architectural Authority (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-right">
              
              {/* Architectural Authority Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1926]/90 border border-[#E59F48]/35 text-xs font-bold text-amber-300 shadow-[0_2px_15px_-3px_rgba(229,159,72,0.15)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E59F48] animate-pulse" />
                <HardHat className="w-4 h-4 text-[#E59F48] shrink-0" />
                <span>رواسي للمقاولات · مواصفات كود البناء السعودي ودك ليزري</span>
              </div>

              {/* H1 Heading with Architectural Hierarchy */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.25] text-white tracking-tight text-balance">
                الهندسة المتقنة في رصف{' '}
                <span className="bg-gradient-to-r from-[#F9C57D] via-[#E59F48] to-[#F3B259] bg-clip-text text-transparent">
                  الإنترلوك والبلدورات
                </span>{' '}
                بالمملكة
              </h1>

              {/* Precise Engineering Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-pretty">
                ننفذ مشاريع رصف الأحواش، مواقف السيارات، والأرصفة الخارجية بأسلوب هندسي دقيق؛ دك ميكانيكي لطبقات الصبيز، تسوية ليزرية تضمن انسياب مياه الأمطار، وبلاط خرساني فائق المقاومة لا يهبط مع الزمن.
              </p>

              {/* Interactive Scope Preset Selector Bar */}
              <div className="space-y-2 pt-2">
                <span className="block text-xs font-bold text-slate-400">
                  اختر نوع المساحة للاطلاع على المواصفة الموصى بها فوراً:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SCOPE_PRESETS.map((preset) => {
                    const isSelected = selectedPreset.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPreset(preset)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold text-right transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#132B40] border-[#E59F48] text-white shadow-[0_0_15px_-3px_rgba(229,159,72,0.3)] ring-1 ring-[#E59F48]'
                            : 'bg-[#0A1926]/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="truncate">{preset.name}</div>
                        <div className={`text-[10px] mt-0.5 font-mono ${isSelected ? 'text-[#E59F48]' : 'text-slate-500'}`}>
                          {preset.thickness.split(' ')[0]} {preset.thickness.split(' ')[1]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Live Recommendation Strip based on Preset */}
              <div className="bg-[#0A1926]/80 rounded-2xl p-4 border border-[#132B40] text-xs text-slate-300 space-y-1.5 backdrop-blur-md">
                <div className="flex items-center justify-between text-amber-300 font-bold">
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#E59F48]" />
                    <span>المواصفة المعتمدة لـ ({selectedPreset.name}):</span>
                  </div>
                  <span className="text-white font-mono bg-[#132B40] px-2 py-0.5 rounded text-[11px] border border-slate-700">
                    {selectedPreset.thickness}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  <span>• النمط: <strong className="text-slate-200">{selectedPreset.pattern}</strong></span>
                  <span>• التحمل: <strong className="text-slate-200">{selectedPreset.loadType}</strong></span>
                  <span>• التأسيس: <strong className="text-slate-200">{selectedPreset.baseSpec}</strong></span>
                </div>
              </div>

              {/* Action Buttons Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم ورحمة الله، أود طلب معاينة وعرض سعر لمشروع (${selectedPreset.name}) بمواصفة ${selectedPreset.thickness}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-2xl transition-all shadow-[0_4px_25px_-5px_rgba(217,130,43,0.5)] active:scale-95 cursor-pointer text-center"
                >
                  <MessageSquare className="w-5 h-5 text-[#061019] shrink-0" />
                  <span>اطلب معاينة وتسعير عبر واتساب</span>
                </a>

                <a
                  href={CONTACT_INFO.callUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-black text-white bg-[#0A1926] hover:bg-[#132B40] border border-[#132B40] hover:border-[#E59F48]/40 rounded-2xl transition-all shadow-lg active:scale-95 cursor-pointer text-center"
                >
                  <Phone className="w-5 h-5 text-[#E59F48] shrink-0" />
                  <span>اتصال مباشر: {CONTACT_INFO.phone}</span>
                </a>

                <Link
                  href="/#catalog"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-bold text-slate-300 hover:text-[#E59F48] transition-colors text-center"
                >
                  <span>استكشف كتالوج النماذج</span>
                  <ChevronLeft className="w-4 h-4 text-[#E59F48] shrink-0" />
                </Link>
              </div>

              {/* Engineering Metrics Strip */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right">
                <div className="bg-[#0A1926]/50 rounded-xl p-3 border border-slate-800">
                  <div className="text-lg font-black text-[#E59F48] font-mono">450+</div>
                  <div className="text-[11px] text-slate-400 font-bold mt-0.5">كجم/سم² إجهاد كسر</div>
                </div>
                <div className="bg-[#0A1926]/50 rounded-xl p-3 border border-slate-800">
                  <div className="text-lg font-black text-white font-mono">95%+</div>
                  <div className="text-[11px] text-slate-400 font-bold mt-0.5">كثافة دك الصبيز</div>
                </div>
                <div className="bg-[#0A1926]/50 rounded-xl p-3 border border-slate-800">
                  <div className="text-lg font-black text-[#E59F48] font-mono">6 - 8 cm</div>
                  <div className="text-[11px] text-slate-400 font-bold mt-0.5">سماكات معتمدة</div>
                </div>
                <div className="bg-[#0A1926]/50 rounded-xl p-3 border border-slate-800">
                  <div className="text-lg font-black text-white font-mono">100%</div>
                  <div className="text-[11px] text-slate-400 font-bold mt-0.5">ضبط ميول الأمطار</div>
                </div>
              </div>

            </div>

            {/* Left Column: Modern Glass Consultation & Rapid Quote Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#0A1926]/90 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#132B40] text-right relative overflow-hidden group">
                {/* Golden Architectural Accent Glow Line */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#E59F48] to-transparent" />

                <div className="border-b border-slate-800 pb-4 mb-4 flex items-center justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E59F48] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>معاينة ورفع مقاسات مجانية بالموقع</span>
                    </div>
                    <h2 className="font-black text-base sm:text-lg text-white">
                      طلب مقايسة وحساب مواصفة
                    </h2>
                  </div>
                  <div className="text-left shrink-0">
                    <span className="inline-block text-xs font-mono font-black text-[#E59F48] bg-[#132B40] px-2.5 py-1 rounded-xl border border-[#E59F48]/30">
                      0591066067
                    </span>
                  </div>
                </div>

                {formError && (
                  <div className="mb-3 p-3 bg-red-950/50 border border-red-500/50 rounded-xl text-xs text-red-200 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم الكريم *</label>
                      <input
                        type="text"
                        value={quickName}
                        onChange={(e) => setQuickName(e.target.value)}
                        placeholder="أبو فهد"
                        required
                        className="w-full px-3.5 py-2.5 text-sm bg-[#061019] border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الجوال *</label>
                      <input
                        type="tel"
                        dir="ltr"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        placeholder="05xxxxxxxx"
                        required
                        className="w-full px-3.5 py-2.5 text-sm bg-[#061019] border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] text-right font-mono transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">المدينة</label>
                      <select
                        value={quickCity}
                        onChange={(e) => setQuickCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#061019] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] transition-all cursor-pointer"
                      >
                        <option value="الرياض">الرياض</option>
                        <option value="جدة">جدة</option>
                        <option value="مكة المكرمة">مكة المكرمة</option>
                        <option value="المدينة المنورة">المدينة المنورة</option>
                        <option value="الدمام والخبر">الدمام والخبر</option>
                        <option value="القصيم">القصيم</option>
                        <option value="الخرج">الخرج</option>
                        <option value="مدينة أخرى">مدينة أخرى بالمملكة</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">المساحة م² تقريباً</label>
                      <input
                        type="number"
                        value={quickArea}
                        onChange={(e) => setQuickArea(e.target.value)}
                        placeholder="مثال: 150"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#061019] border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] font-mono transition-all"
                      />
                    </div>
                  </div>

                  {/* Active Selected Scope Display inside form */}
                  <div className="p-3 bg-[#061019] rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                    <div>
                      <div className="text-slate-400 text-[10px]">المساحة المختارة:</div>
                      <div className="font-bold text-white mt-0.5">{selectedPreset.name}</div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#E59F48] bg-[#132B40] px-2 py-1 rounded-lg">
                      {selectedPreset.thickness}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all shadow-[0_4px_20px_-3px_rgba(217,130,43,0.4)] hover:shadow-amber-500/30 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#061019] shrink-0" />
                    <span>إرسال طلب المقايسة فوراً عبر واتساب</span>
                  </button>
                </form>

                <div className="pt-3 border-t border-slate-800/80 mt-3 text-center">
                  <p className="text-[11px] text-slate-400">
                    يتم رفع المقاسات الفعلية وفحص الميول والتربة ميدانياً مع المهندس المشرف مجاناً
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Architectural Value Pillar Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 md:-mt-12 relative z-20 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white text-[#0F172A] rounded-2xl p-5 shadow-[0_10px_30px_-5px_rgba(6,16,25,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(6,16,25,0.14)] border border-slate-200/90 hover:border-[#E59F48]/60 transition-all duration-300 hover:-translate-y-1.5 group text-right">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D9822B] border border-amber-200/80 flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#D9822B] group-hover:text-white transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#061019] group-hover:text-[#D9822B] transition-colors">
              خامات معتمدة 450+ كجم
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              توريد بلاط إنترلوك خرساني ألماني الصنع والمواصفة، عالي الكثافة ومقاوم لأقسى درجات الحرارة.
            </p>
          </div>

          <div className="bg-white text-[#0F172A] rounded-2xl p-5 shadow-[0_10px_30px_-5px_rgba(6,16,25,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(6,16,25,0.14)] border border-slate-200/90 hover:border-[#E59F48]/60 transition-all duration-300 hover:-translate-y-1.5 group text-right">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0A1926] border border-slate-200 flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#0A1926] group-hover:text-[#E59F48] transition-colors">
              <Ruler className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#061019] group-hover:text-[#D9822B] transition-colors">
              دك ليزري وتسوية صبيز
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              دك هيدروليكي ميكانيكي لطبقات التأسيس يمنع هبوط الأرضيات وتجمع مياه الأمطار نهائياً.
            </p>
          </div>

          <div className="bg-white text-[#0F172A] rounded-2xl p-5 shadow-[0_10px_30px_-5px_rgba(6,16,25,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(6,16,25,0.14)] border border-slate-200/90 hover:border-[#E59F48]/60 transition-all duration-300 hover:-translate-y-1.5 group text-right">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D9822B] border border-amber-200/80 flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#D9822B] group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#061019] group-hover:text-[#D9822B] transition-colors">
              تثبيت خرساني للبلدورات
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              قواعد خرسانية مصمتة مع صبة مساندة تمنع انفراج الحواف وتفكك البلاط عند مرور السيارات.
            </p>
          </div>

          <div className="bg-white text-[#0F172A] rounded-2xl p-5 shadow-[0_10px_30px_-5px_rgba(6,16,25,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(6,16,25,0.14)] border border-slate-200/90 hover:border-[#E59F48]/60 transition-all duration-300 hover:-translate-y-1.5 group text-right">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0A1926] border border-slate-200 flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#0A1926] group-hover:text-[#E59F48] transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#061019] group-hover:text-[#D9822B] transition-colors">
              معاينة وسرعة استجابة
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              فريق إشراف ميداني جاهز لمعاينة موقعك ورفع المقاسات وتقديم التقدير الهندسي الدقيق.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

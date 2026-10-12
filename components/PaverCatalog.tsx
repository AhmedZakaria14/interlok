'use client';

import React, { useState } from 'react';
import { PAVER_MODELS, CONTACT_INFO } from '@/lib/constants';
import PatternVisual from './PatternVisual';
import { Layers, MessageSquare, Check, Sparkles, Filter, ShieldCheck, Ruler, ChevronLeft, Info } from 'lucide-react';

export default function PaverCatalog() {
  const [selectedThickness, setSelectedThickness] = useState<'all' | '6cm' | '8cm'>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة النماذج' },
    { id: 'courtyard', label: 'أحواش وفلل' },
    { id: 'parking', label: 'مواقف وحمولات' },
    { id: 'sidewalk', label: 'أرصفة وممرات' },
    { id: 'curb', label: 'بلدورات وبردورات' },
  ];

  const colorSwatches = [
    { id: 'all', label: 'كافة الألوان', colorClass: 'bg-slate-300' },
    { id: 'terracotta', label: 'تيراكوتا أحمر', colorClass: 'bg-[#C25E38]' },
    { id: 'sand', label: 'بيج صحراوي', colorClass: 'bg-[#D4A373]' },
    { id: 'grey', label: 'رمادي كلاسيكي', colorClass: 'bg-[#8A817C]' },
    { id: 'basalt', label: 'أسود بازلتي', colorClass: 'bg-[#292524]' },
  ];

  const filteredModels = PAVER_MODELS.filter((model) => {
    if (selectedThickness === '6cm' && !model.recommendedThickness.includes('6')) return false;
    if (selectedThickness === '8cm' && !model.recommendedThickness.includes('8')) return false;
    
    if (activeCategory === 'courtyard' && !(model.popularUsage.includes('فلل') || model.popularUsage.includes('أحواش'))) return false;
    if (activeCategory === 'parking' && !(model.popularUsage.includes('مواقف') || model.popularUsage.includes('سيارات'))) return false;
    if (activeCategory === 'sidewalk' && !(model.popularUsage.includes('أرصفة') || model.popularUsage.includes('مشاة') || model.popularUsage.includes('حدائق'))) return false;
    if (activeCategory === 'curb' && !(model.patternKey === 'curb' || model.popularUsage.includes('بلدور'))) return false;

    return true;
  });

  return (
    <section id="catalog" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>كتالوج الخامات والأشكال الهندسية المعتمدة</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            أشكال وسماكات الإنترلوك والبلدورات الأكثر طلباً بالسعودية
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            نوفر ونركب تشكيلة متكاملة من بلاط الإنترلوك الخرساني المعالج، بسماكات 6 سم للأحواش والمشاة و8 سم لمواقف السيارات والشاحنات، مع مقاومة إجهاد تفوق 450 كجم/سم² ومقاومة كاملة للتآكل والأملاح.
          </p>
        </div>

        {/* Interactive Filtering & Thickness Control Console */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 mb-10 shadow-[0_4px_25px_-5px_rgba(6,16,25,0.06)] border border-slate-200/90 text-right space-y-5">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 border-b border-slate-100 pb-5">
            {/* Category Filter Pills */}
            <div className="space-y-2">
              <span className="block text-xs font-bold text-slate-400">تصنيف الاستخدام:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#061019] text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Thickness Toggle (6cm vs 8cm) */}
            <div className="space-y-2 lg:border-r lg:border-slate-100 lg:pr-6">
              <span className="block text-xs font-bold text-slate-400">تصفية السماكة:</span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setSelectedThickness('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedThickness === 'all'
                      ? 'bg-white text-[#061019] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  كافة السماكات
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedThickness('6cm')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedThickness === '6cm'
                      ? 'bg-[#D9822B] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  6 سم (أحواش ومشاة)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedThickness('8cm')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedThickness === '8cm'
                      ? 'bg-[#061019] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  8 سم (مواقف وشاحنات)
                </button>
              </div>
            </div>
          </div>

          {/* Educational Engineering Thickness Note */}
          <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-3.5 text-xs text-slate-700 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#D9822B] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-[#061019] font-black">إرشاد هندسي: </strong>
              تُستخدم سماكة <span className="font-bold text-[#D9822B]">6 سم</span> لأحواش الفلل، ممرات الحدائق، وأرصفة المشاة، بينما يُشترط استخدام سماكة <span className="font-bold text-[#061019]">8 سم</span> لكراجات ومواقف السيارات والمداخل المعرضة لمرور الشاحنات وسيارات الدفع الرباعي الثقيلة.
            </div>
          </div>

        </div>

        {/* 6 Paver Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredModels.map((model) => {
            const whatsappText = `السلام عليكم ورحمة الله، أود الاستفسار وطلب عرض سعر لتركيب: ${model.arabicName} (سماكة: ${model.recommendedThickness}).`;
            const quoteUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={model.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#E59F48]/60 shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(6,16,25,0.12)] transition-all duration-300 flex flex-col justify-between text-right group hover:-translate-y-1.5"
              >
                <div>
                  {/* Visual Pattern CAD Frame */}
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden border-b border-slate-100">
                    <PatternVisual type={model.patternKey} title={model.arabicName} />
                    
                    {/* Dimension Badge */}
                    <div className="absolute top-3 right-3 bg-[#061019]/90 backdrop-blur-xs text-amber-300 text-[11px] font-bold px-3 py-1 rounded-xl shadow-xs border border-white/10">
                      {model.dimensions}
                    </div>

                    {/* Usage Tag */}
                    <div className="absolute top-3 left-3 bg-white/95 text-[#061019] text-[10px] font-black px-2.5 py-1 rounded-lg shadow-xs border border-slate-200">
                      {model.popularUsage.split('،')[0]}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold text-[#D9822B] mb-1">
                        الاستخدام: {model.popularUsage}
                      </div>
                      <h3 className="text-lg font-black text-[#061019] group-hover:text-[#D9822B] transition-colors leading-snug">
                        {model.arabicName}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {model.description}
                    </p>

                    {/* Technical Specifications Badge List */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-200/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-semibold">السماكة الموصى بها:</span>
                        <span className="font-bold text-[#061019] font-mono">{model.recommendedThickness}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-semibold">مقاومة الضغط:</span>
                        <span className="font-bold text-emerald-700 font-mono">{model.strengthRating}</span>
                      </div>
                    </div>

                    {/* Features Bullet List */}
                    <ul className="space-y-1.5 pt-1 text-xs text-slate-600">
                      {model.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D9822B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer with Direct Accessible WhatsApp Link */}
                <div className="p-6 pt-0 border-t border-slate-100/80 mt-2">
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-3 py-3.5 px-4 text-xs font-black text-[#061019] bg-amber-50 hover:bg-[#D9822B] hover:text-white border border-amber-200/80 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95 group/btn"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D9822B] group-hover/btn:text-white" />
                    <span>طلب تسعير هذا النوع عبر واتساب</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner in Catalog */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#061019] via-[#0A1926] to-[#132B40] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
              <Sparkles className="w-4 h-4 text-[#E59F48]" />
              <span>استشارة فنية مجانية مع المشرف الميداني</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
              غير متأكد من النمط أو السماكة الأنسب لأرضيتك؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              تواصل مع فني المعاينة مباشرة لنساعدك في اختيار التشكيلة الهندسية والميول المناسبة لموقعك مع فحص نوع التربة مجاناً.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، أحتاج مساعدة واستشارة في اختيار نوع وسماكة الإنترلوك المناسب لموقعي.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs sm:text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all shadow-md text-center active:scale-95"
            >
              استشارة فورية عبر واتساب
            </a>
            <a
              href={CONTACT_INFO.callUrl}
              className="px-6 py-3.5 text-xs sm:text-sm font-black text-white bg-[#0A1926] hover:bg-[#132B40] border border-slate-700 rounded-xl transition-all shadow-md text-center active:scale-95"
            >
              اتصال مباشر: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

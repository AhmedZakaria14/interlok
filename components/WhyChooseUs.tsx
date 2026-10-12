'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Palette,
  Grid,
  Wrench,
  Coins,
  PhoneCall,
  Sparkles,
  Check,
  X,
  Award,
  Layers,
  Ruler
} from 'lucide-react';
import { WHY_CHOOSE_US, CONTACT_INFO } from '@/lib/constants';

const icons = [
  ShieldCheck,
  Palette,
  Grid,
  Wrench,
  Coins,
  PhoneCall,
];

const COMPARISON_POINTS = [
  {
    feature: 'دك وتأسيس طبقة الصبيز',
    rawasi: 'دك هيدروليكي ميكانيكي بنسبة كثافة 95%+ لضمان عدم الهبوط',
    competitor: 'دك يدوي خفيف أو رص مباشر فوق الدفان مما يسبب هبوطاً بعد أول مطر',
  },
  {
    feature: 'ضبط المناسيب وميول الأمطار',
    rawasi: 'موازين ليزرية دقيقة لضبط ميول انسيابي (1.5%) لمصارف التصريف',
    competitor: 'وزن بالعين المجردة يسبب تجمع برك مياه الأمطار أمام المداخل',
  },
  {
    feature: 'تثبيت البلدورات وحواف الأرصفة',
    rawasi: 'فرشة خرسانية وصبة مساندة خلفية (Backing) متينة تمنع الانفراج',
    competitor: 'تثبيت ضعيف بدون خرسانة مساندة يتفكك عند مرور أو وقوف السيارات',
  },
  {
    feature: 'فواصل الإنترلوك والتشطيب',
    rawasi: 'حشو فواصل برمل سيلكا مغسول ومفلتر مع دمك هزاز بقاعدة كاوتشوك',
    competitor: 'فواصل غير محشوة أو استخدام رمل عادي ينمو فيه العشب وتتراكم فيه الأوساخ',
  },
  {
    feature: 'المعاينة والإشراف الميداني',
    rawasi: 'معاينة ورفع مقاسات مجانية مع مهندس مشرف ملتزم بالموعد',
    competitor: 'تقديرات عشوائية غير دقيقة وبلا إشراف هندسي ميداني',
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<'cards' | 'comparison'>('cards');

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>معايير الجودة والالتزام الهندسي</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            لماذا يثق عملاؤنا بخدمات «رواسي للمقاولات»؟
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            نعتمد في كل مشروع على أسس فنية واضحة تبدأ من فحص التربة والدك الميكانيكي وحتى تسليم الموقع مستوياً ومنظماً، لنضمن استثماراً يدوم لعقود.
          </p>

          {/* View Switcher: 6 Pillars vs Engineering Comparison */}
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl mt-6 border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-[#061019] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ركائز الجودة الست
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-[#061019] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              المقارنة الهندسية (معاييرنا vs التنفيذ العشوائي)
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Quality Pillar Cards */}
        {activeTab === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {WHY_CHOOSE_US.map((item, idx) => {
              const Icon = icons[idx] || Check;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#E59F48]/60 hover:bg-white shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all duration-300 space-y-4 flex flex-col justify-between group text-right hover:-translate-y-1.5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#061019] group-hover:bg-[#D9822B] text-[#E59F48] group-hover:text-white flex items-center justify-center shadow-md transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-slate-400 font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#061019] group-hover:text-[#D9822B] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-bold">
                    <span>{item.highlight}</span>
                    <Check className="w-4 h-4 text-[#D9822B]" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Tab 2: Interactive Engineering Comparison Table */
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl max-w-5xl mx-auto text-right">
            <div className="grid grid-cols-12 bg-[#061019] text-white p-4 sm:p-5 text-xs sm:text-sm font-black border-b border-slate-800">
              <div className="col-span-4 sm:col-span-3">عنصر التنفيذ</div>
              <div className="col-span-4 sm:col-span-5 text-[#E59F48] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>معايير «رواسي للمقاولات»</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">التنفيذ العشوائي الشائع</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {COMPARISON_POINTS.map((pt, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-4 sm:p-5 items-center gap-2 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                  }`}
                >
                  <div className="col-span-4 sm:col-span-3 font-black text-[#061019]">
                    {pt.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-emerald-900 font-bold flex items-start gap-2 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt.rawasi}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-2 p-2.5">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt.competitor}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-slate-50 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-600 mb-3 font-normal">
                لا تخاطر بأرضيات منزلك أو منشأتك؛ اطلب فحصاً ميدانياً مجانياً واستشر المهندس المشرف.
              </p>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-[#D9822B] to-[#E59F48] text-[#061019] text-xs font-black rounded-xl shadow-md active:scale-95"
              >
                تواصل مع المهندس المشرف عبر واتساب
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

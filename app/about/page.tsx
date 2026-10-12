import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageSquare, CheckCircle, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'من نحن | رواسي للمقاولات - أعمال الإنترلوك والبلدورات',
  description:
    'تعرف على رواسي للمقاولات ومعاييرنا الفنية في تنفيذ أعمال الإنترلوك والبلدورات والأرصفة والممرات الخارجية في المملكة العربية السعودية.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'من نحن' }]} />

      {/* Header Banner */}
      <section className="bg-[#061019] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#132B40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B40]/80 border border-[#E59F48]/30 text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E59F48]" />
              <span>رواسي للمقاولات | المملكة العربية السعودية</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              الدقة الهندسية في رصف المساحات الخارجية
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              في <strong className="text-[#E59F48] font-bold">رواسي للمقاولات</strong> نلتزم بأعلى معايير توريد وتركيب بلاط الإنترلوك والبلدورات الخرسانية، وتنفيذ الأرصفة والممرات ومواقف السيارات، مع تركيز تام على التأسيس الأرضي المتين والتشطيبات المتقنة وفق كود البناء السعودي.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#061019]">
                  لماذا نركز على أعمال الإنترلوك والبلدورات؟
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                  تعد الأرضيات الخارجية واجهة أي عقار؛ سواء كان فيلا سكنية، مجمعاً تجارياً، أو ممشى عاماً. بلاط الإنترلوك الخرساني يمنح مرونة عالية ومظهراً فخماً، شريطة أن يتم تنفيذه بأسس هندسية تراعي خواص التربة والتصريف وعوامل المناخ في المملكة.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                  نحن نعتبر كل مشروع حالة قائمة بذاتها: نفحص نوع التربة، نحدد الحمولات المتوقعة (مرور مشاة فقط، سيارات عائلية، أو شاحنات ثقيلة)، ونختار السماكة الملائمة (6 سم أو 8 سم) مع تحديد نوع ومقاس البلدورات الحامية للأطراف.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#E59F48]/50 transition-all space-y-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#061019] text-[#E59F48] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-sm text-[#061019]">التأسيس المتين</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">دك طبقات الصبيز بالرصاصة لمنع أي هبوط مستقبلي في أرضيات الأحواش.</p>
                </div>

                <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#E59F48]/50 transition-all space-y-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#061019] text-[#E59F48] flex items-center justify-center">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-sm text-[#061019]">الميول الليزرية</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">ضبط تصريف مياه الأمطار والسيول بانسيابية نحو نقاط التصريف الطبيعية.</p>
                </div>

                <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#E59F48]/50 transition-all space-y-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#061019] text-[#E59F48] flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-sm text-[#061019]">إحكام الفواصل</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">حشو فواصل البلاط برمل السيلكا النظيف والدك اللوحي لقفله ميكانيكياً.</p>
                </div>
              </div>

              {/* Scope of Work */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-black text-[#081522]">نطاق أعمالنا المعتمد بالمملكة</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                    <span>توريد وتركيب مختلف أشكال الإنترلوك (هولندي مستطيل، يونيستون، سداسي، باركيه مموج).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                    <span>تركيب بلدورات الأرصفة والحدائق وتثبيتها بالقواعد الخرسانية والمساند الخلفية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                    <span>تجهيز أرصفة المشاة ومنحدرات الكراسي المتحركة ومداخل السيارات الخارجية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                    <span>أعمال صيانة وتجديد الأحواش القديمة وإصلاح الهبوطات بعد أعمال الحفريات والتمديدات.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-6">
              <h3 className="font-black text-lg text-[#081522] border-b border-slate-200 pb-3">
                تواصل مباشر للاستشارة
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                يسعدنا مناقشة احتياجات مشروعك وتوضيح الخيارات الفنية والأسعار المناسبة بحسب المساحة.
              </p>

              <div className="space-y-3">
                <a
                  href={CONTACT_INFO.callUrl}
                  className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200 hover:border-[#E49B45] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#081522] text-[#E49B45] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">اتصال هاتفي مباشر</div>
                    <div className="font-black text-[#081522] text-sm font-mono" dir="ltr">
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">مراسلة واتساب</div>
                    <div className="font-black text-[#081522] text-sm font-mono" dir="ltr">
                      {CONTACT_INFO.whatsappNumber}
                    </div>
                  </div>
                </a>
              </div>

              <Link
                href="/#quote"
                className="block text-center w-full py-3.5 text-xs font-black text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl transition-colors shadow-md"
              >
                طلب عرض سعر لمشروعك
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

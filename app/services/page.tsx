import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import PatternVisual from '@/components/PatternVisual';
import { ChevronLeft, MessageSquare, Phone, Layers, Check, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'خدماتنا | تركيب الإنترلوك والبلدورات والأرصفة والممرات',
  description:
    'استكشف خدمات تركيب الإنترلوك للأحواش والمواقف، تركيب البلدورات، إنشاء أرصفة المشاة، وتصميم ممرات الحدائق في المملكة العربية السعودية.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'خدماتنا' }]} />

      {/* Header Banner */}
      <section className="bg-[#061019] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#132B40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B40]/80 border border-[#E59F48]/30 text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E59F48]" />
              <span>نطاق خدماتنا المتكاملة بالمملكة العربية السعودية</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              أعمال تركيب الإنترلوك والبلدورات والأرصفة
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              حلول رصف خارجية متكاملة للمشاريع السكنية، التجارية، والمرافق العامة مع ضمان الالتزام بالسماكات الهندسية الصحيحة والدك والتسوية الليزرية.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 text-right"
            >
              {/* Visual Preview */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[260px] bg-slate-100 relative overflow-hidden">
                <PatternVisual type={service.patternType} title={service.title} />
              </div>

              {/* Service Detailed Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#D97706] bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl">
                      خدمة 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-bold">
                      سماكة: {service.technicalSpecs.recommendedThickness.split('،')[0]}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-[#081522]">
                    <Link href={`/services/${service.slug}`} className="hover:text-[#D97706] transition-colors">
                      {service.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#081522] hover:text-[#D97706] transition-colors"
                  >
                    <span>قراءة المواصفات الكاملة للخدمة</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، أود طلب تسعير لـ: ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black text-[#081522] bg-amber-50 hover:bg-[#E49B45] border border-amber-200 rounded-xl transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>طلب تسعير</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Contact Strip */}
      <section className="bg-[#081522] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            هل تحتاج إلى استشارة فنية لتحديد كمية المواد وسماكة الإنترلوك؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-normal">
            تواصل معنا مباشرة عبر الهاتف أو واتساب، وسيقوم المختص بمساعدتك في تقدير التكلفة بحسب مساحة الموقع.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.callUrl}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-black text-[#081522] bg-[#E49B45] rounded-xl hover:bg-[#D18933] transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل بنا: {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-black text-white bg-[#25D366] rounded-xl hover:bg-[#20ba5a] transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

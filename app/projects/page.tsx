import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectsGallery from '@/components/ProjectsGallery';
import { CONTACT_INFO } from '@/lib/constants';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'معرض الأعمال والمشاريع | نماذج تركيب الإنترلوك والبلدورات',
  description:
    'معرض صور وفيديوهات لأعمال تركيب الإنترلوك والبلدورات ومراحل تجهيز ودك الموقع في المملكة العربية السعودية. اتصل: 0591066067',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'معرض الأعمال' }]} />

      {/* Header Banner */}
      <section className="bg-[#061019] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#132B40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B40]/80 border border-[#E59F48]/30 text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E59F48]" />
              <span>توثيق ميداني للمشاريع بالمملكة العربية السعودية</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              معرض أعمال الإنترلوك والبلدورات
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              استعرض نماذج المشروعات المنفذة ومراحل الدك والتسوية الهندسية لمختلف أنواع الأحواش والمواقف والأرصفة والممرات.
            </p>
          </div>
        </div>
      </section>

      {/* Full Gallery with Filters */}
      <ProjectsGallery showFilters={true} />

      {/* Bottom Consultation CTA */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl font-black text-[#081522]">
            ترغب في تنفيذ تصميم أو نمط مشابه لمشروعك؟
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            أرسل لنا مساحة موقعك ونمط البلاط المفضل عبر واتساب للحصول على استشارة تسعيرية فورية.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن تنفيذ تصميم إنترلوك مشابه للأعمال المعروضة.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>مراسلة واتساب: {CONTACT_INFO.whatsappNumber}</span>
            </a>
            <a
              href={CONTACT_INFO.callUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي: {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

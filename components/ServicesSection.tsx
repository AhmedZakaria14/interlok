import React from 'react';
import Link from 'next/link';
import { ChevronLeft, MessageSquare, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import PatternVisual from './PatternVisual';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>خدماتنا وأعمالنا التخصصية المعتمدة</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            حلول رصف خارجية متكاملة للفلل والمشاريع بالمملكة
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            نقدم خدمات توريد وتركيب الإنترلوك والبلدورات وإنشاء الأرصفة والممرات ومواقف السيارات بأعلى معايير الدك والتسوية الهندسية لمنع أي هبوط أو تجمع للمياه.
          </p>
        </div>

        {/* 6 Clean Contractor Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#E59F48]/60 shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all duration-300 flex flex-col justify-between group text-right hover:-translate-y-1"
            >
              {/* Photo Thumbnail with Badge */}
              <div className="h-52 w-full relative overflow-hidden bg-slate-100 border-b border-slate-100">
                <PatternVisual type={service.patternType} title={service.title} />

                {/* Service Number Tag */}
                <span className="absolute top-3 left-3 text-xs font-black font-mono px-2.5 py-1 bg-[#061019]/90 text-amber-300 rounded-lg backdrop-blur-xs shadow-xs border border-white/10">
                  0{idx + 1}
                </span>

                {/* Thickness Pill on Image */}
                <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 bg-white/95 text-[#061019] rounded-lg shadow-2xs border border-slate-200">
                  {service.technicalSpecs.recommendedThickness.split('،')[0]}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-black text-[#061019] group-hover:text-[#D9822B] transition-colors leading-snug">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features Snippet */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D9822B] shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions Strip */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A1926] hover:text-[#D9822B] transition-colors"
                  >
                    <span>تفاصيل الخدمة</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار وطلب تسعير لخدمة: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-[#061019] bg-amber-50 hover:bg-[#D9822B] hover:text-white border border-amber-200/80 rounded-xl transition-all cursor-pointer shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#D9822B] group-hover:text-white" />
                    <span>طلب تسعير</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-[#061019] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs hover:shadow-md hover:border-[#D9822B]/40 active:scale-95"
          >
            <span>استعراض كافة مواصفات الخدمات والأنماط</span>
            <ChevronLeft className="w-4 h-4 text-[#D9822B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

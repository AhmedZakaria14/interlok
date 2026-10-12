import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/types';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import PatternVisual from '@/components/PatternVisual';
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  Layers,
  Ruler,
  ShieldCheck,
  ChevronLeft,
  Sparkles,
} from 'lucide-react';

interface ServiceDetailViewProps {
  service: ServiceItem;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'خدماتنا', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#061019] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#132B40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B40]/80 border border-[#E59F48]/40 text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E59F48]" />
              <span>خدمة متخصصة معتمدة · المملكة العربية السعودية</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {service.shortDesc}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، استفسار وطلب تسعير لخدمة: ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all shadow-md hover:shadow-amber-500/20 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#061019]" />
                <span>طلب عرض سعر عبر واتساب</span>
              </a>

              <a
                href={CONTACT_INFO.callUrl}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-black text-white bg-[#132B40] hover:bg-[#1C3E5C] border border-slate-700 rounded-xl transition-all cursor-pointer active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#E59F48]" />
                <span dir="ltr">اتصل: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs */}
      <section className="py-16 md:py-24 bg-white text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Primary Details (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Visual Showcase Card */}
              <div className="h-72 sm:h-84 w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                <PatternVisual type={service.patternType} title={service.title} />
              </div>

              {/* Detailed Overview */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-[#081522]">
                  تفاصيل تنفيذ الخدمة والاعتبارات الفنية
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {service.fullDesc}
                </p>
              </div>

              {/* Applications List */}
              <div className="space-y-4 bg-[#F8FAFC] p-7 rounded-3xl border border-slate-200">
                <h3 className="text-lg font-black text-[#081522]">
                  أبرز استخدامات ومجالات هذه الخدمة بالمملكة:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-[#081522]">
                  المواصفات الفنية الموصى بها
                </h3>
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                  <table className="w-full text-right text-xs sm:text-sm">
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-slate-50">
                        <td className="p-4 font-black text-[#081522] w-1/3">السماكة الموصى بها</td>
                        <td className="p-4 text-slate-700 font-bold">{service.technicalSpecs.recommendedThickness}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-black text-[#081522]">أنواع البلاط والأنماط</td>
                        <td className="p-4 text-slate-700 font-medium">
                          {service.technicalSpecs.paverTypes.join(' · ')}
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-4 font-black text-[#081522]">متطلبات طبقة التأسيس</td>
                        <td className="p-4 text-slate-700 font-medium">{service.technicalSpecs.baseRequirements}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-black text-[#081522]">تثبيت الحواف والأطراف</td>
                        <td className="p-4 text-slate-700 font-medium">{service.technicalSpecs.edgeRestraints}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-[#081522]">
                  مزايا التنفيذ مع فريقنا
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-[#F8FAFC] space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-black text-[#081522]">
                        <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                        <span>معيار هندسي معتمد</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services Links */}
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <h3 className="text-lg font-black text-[#081522]">
                  خدمات أخرى ذات صلة
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="p-5 rounded-2xl border border-slate-200 hover:border-[#E49B45] hover:bg-[#F8FAFC] transition-all block group shadow-sm hover:shadow-md"
                    >
                      <h4 className="font-bold text-xs sm:text-sm text-[#081522] group-hover:text-[#D97706] transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 mt-2 inline-flex items-center gap-1 font-semibold">
                        <span>تفاصيل الخدمة</span>
                        <ChevronLeft className="w-3.5 h-3.5 text-[#E49B45]" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Contact & Fast Quote (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#081522] text-white rounded-3xl p-7 shadow-xl space-y-5 border border-slate-700">
                <h3 className="text-base font-black text-[#E49B45] border-b border-white/10 pb-3">
                  اطلب تسعير {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  تواصل معنا مباشرة عبر الهاتف أو واتساب لإرسال مساحة موقعك وصور للمعاينة وتحديد السعر المناسب.
                </p>

                <div className="space-y-3">
                  <a
                    href={CONTACT_INFO.callUrl}
                    className="flex items-center gap-3 p-3.5 bg-white/10 hover:bg-white/15 rounded-xl transition-colors text-white border border-white/10"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E49B45] text-[#081522] flex items-center justify-center shrink-0 font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-semibold">اتصال مباشر</div>
                      <div className="font-black text-sm tracking-wider font-mono" dir="ltr">
                        {CONTACT_INFO.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص خدمة: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-white/10 hover:bg-white/15 rounded-xl transition-colors text-white border border-white/10"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-semibold">واتساب فوري</div>
                      <div className="font-black text-sm tracking-wider font-mono" dir="ltr">
                        {CONTACT_INFO.whatsappNumber}
                      </div>
                    </div>
                  </a>
                </div>

                <Link
                  href="/#quote"
                  className="block text-center w-full py-3.5 text-xs font-black text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl transition-colors shadow-sm"
                >
                  نموذج طلب التسعير المكتمل
                </Link>
              </div>

              {/* Execution reminder card */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-[#081522]">تذكير هندسي للموقع:</div>
                <p className="leading-relaxed font-normal">
                  التسوية الصحيحة لطبقات الأساس (الصبيز والرمل) هي الضمان الأهم لاستقرار رصف الإنترلوك وتفادي الهبوط المستقبلي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

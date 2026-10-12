import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Clock, MapPin, ChevronLeft, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SERVICES, SAUDI_REGIONS } from '@/lib/constants';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#061019] text-slate-300 border-t border-[#132B40]/70">
      {/* Top Pre-Footer Callout Bar */}
      <div className="bg-[#040B12] py-8 border-b border-[#132B40]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              جاهزون لبدء مشروع رصف الإنترلوك والبلدورات لموقعك
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              تواصل مباشرة مع المشرف الميداني لمعاينة الموقع وتحديد التكلفة الدقيقة بالمملكة.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              href={CONTACT_INFO.callUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all shadow-md hover:shadow-amber-500/20 text-center active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#061019]" />
              <span>اتصل بنا: {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-black text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-all shadow-md text-center active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-28 md:pb-16 text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About & Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="رواسي للمقاولات">
              <BrandLogo size="md" variant="light" />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
              أعمال متخصصة في توريد وتركيب بلاط الإنترلوك والبلدورات الخرسانية، وتنفيذ أرصفة المشاة وممرات الحدائق ومواقف السيارات بمواصفات دك وتسوية هندسية متقدمة في المملكة العربية السعودية.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E59F48] shrink-0" />
                <span>المملكة العربية السعودية | كافة المناطق</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E59F48] shrink-0" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div>
            <h4 className="text-sm font-black text-white mb-4 border-b border-slate-700 pb-2">
              خدمات الرصف والبلدورات
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                    <span className="truncate">{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-black text-white mb-4 border-b border-slate-700 pb-2">
              روابط الموقع السريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link href="/#catalog" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>كتالوج أشكال الإنترلوك</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>من نحن والمعايير الفنية</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>معرض الأعمال والمشاريع</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>دليل وإرشادات الرصف</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>اتصل بنا</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E59F48] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E59F48] shrink-0" />
                  <span>سياسة الخصوصية</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapid Contact & Coverage */}
          <div>
            <h4 className="text-sm font-black text-white mb-4 border-b border-slate-700 pb-2">
              التواصل والتسعير المباشر
            </h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
              استقبال استفسارات المساحات والمواصفات وطلب المعاينة الميدانية في كافة مناطق المملكة.
            </p>
            <div className="space-y-3">
              <a
                href={CONTACT_INFO.callUrl}
                className="flex items-center gap-3 p-3 bg-[#050E17] hover:bg-[#132B40] border border-slate-700/80 rounded-xl transition-colors text-white"
              >
                <div className="w-9 h-9 rounded-lg bg-[#E59F48] flex items-center justify-center text-[#061019] shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">اتصال مباشر</div>
                  <div className="font-black text-sm tracking-wider text-white font-mono" dir="ltr">
                    {CONTACT_INFO.phone}
                  </div>
                </div>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#050E17] hover:bg-[#132B40] border border-slate-700/80 rounded-xl transition-colors text-white"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">واتساب فوري</div>
                  <div className="font-black text-sm tracking-wider text-white font-mono" dir="ltr">
                    {CONTACT_INFO.whatsappNumber}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {CONTACT_INFO.temporaryBrandName} - المملكة العربية السعودية
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-300 font-bold">هاتف / واتساب: {CONTACT_INFO.phone}</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

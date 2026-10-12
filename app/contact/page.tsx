import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { CONTACT_INFO } from '@/lib/constants';
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'اتصل بنا | متخصصون في تركيب الإنترلوك والبلدورات',
  description:
    'تواصل معنا لطلب عروض الأسعار والمعاينة الميدانية لأعمال تركيب الإنترلوك والبلدورات والأرصفة في السعودية. هاتف وواتساب: 0591066067',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'اتصل بنا' }]} />

      {/* Header Banner */}
      <section className="bg-[#061019] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#132B40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B40]/80 border border-[#E59F48]/30 text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E59F48]" />
              <span>قنوات التواصل المباشر بالمملكة العربية السعودية</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              تواصل مع فريق التنفيذ والتسعير
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              يسعدنا تلقي اتصالاتكم ورسائلكم للاستفسار عن أسعار المتر، مواصفات البلاط، وتحديد مواعيد المعاينة في كافة مناطق المملكة العربية السعودية.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Direct Actions Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            {/* Phone Box */}
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#E59F48]/50 transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#061019] text-[#E59F48] flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-[#061019]">الاتصال الهاتفي المباشر</h3>
              <p className="text-xs text-slate-500">للمحادثات العاجلة والاستفسارات الفنية</p>
              <div className="text-xl font-mono font-black text-[#061019]" dir="ltr">
                {CONTACT_INFO.phone}
              </div>
              <a
                href={CONTACT_INFO.callUrl}
                className="inline-block w-full text-center py-2.5 px-3 text-xs font-black text-white bg-[#061019] hover:bg-[#132B40] rounded-xl transition-colors shadow-2xs"
              >
                اتصال الآن
              </a>
            </div>

            {/* WhatsApp Box */}
            <div className="p-7 rounded-3xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-[#081522]">محادثة واتساب الفورية</h3>
              <p className="text-xs text-slate-500">إرسال صور ومخططات الموقع وطلب التسعير</p>
              <div className="text-xl font-mono font-black text-emerald-800" dir="ltr">
                {CONTACT_INFO.whatsappNumber}
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2.5 px-3 text-xs font-black text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors"
              >
                فتح واتساب
              </a>
            </div>

            {/* Service & Hours Box */}
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D97706] border border-amber-200 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-black text-base text-[#081522]">أوقات استقبال الطلبات</h3>
              <p className="text-xs text-slate-500">نعمل على مدار الأسبوع</p>
              <div className="text-xs font-bold text-[#081522] space-y-1">
                <div>{CONTACT_INFO.workingHours}</div>
                <div className="text-slate-500 font-normal">تغطية المشاريع في المملكة العربية السعودية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Quote Form */}
      <QuoteForm />
    </div>
  );
}

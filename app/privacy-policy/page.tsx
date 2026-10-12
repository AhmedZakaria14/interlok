import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | متخصصون في الإنترلوك والبلدورات',
  description:
    'سياسة الخصوصية وحماية بيانات العملاء لخدمات تركيب الإنترلوك والبلدورات وتنفيذ الأرصفة في المملكة العربية السعودية.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'سياسة الخصوصية' }]} />

      <section className="bg-[#12314A] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            سياسة الخصوصية
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            آخر تحديث: أكتوبر 2026
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#12314A]">1. مقدمة</h2>
            <p>
              نحن في ({CONTACT_INFO.temporaryBrandName}) نلتزم باحترام خصوصية زوار موقعنا وحماية بياناتهم الشخصية عند طلب خدمات تركيب الإنترلوك، البلدورات، أو الأرصفة. توضح هذه السياسة كيفية التعامل مع المعلومات التي يتم تزويدنا بها.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#12314A]">2. البيانات التي نقوم بجمعها</h2>
            <p>
              عند تعبئة نموذج طلب عرض السعر أو التواصل المباشر عبر واتساب أو الهاتف، قد نطلب البيانات التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 pr-2">
              <li>الاسم الكريم للتواصل وتحديد هوية صاحب الطلب.</li>
              <li>رقم الجوال لتنسيق التواصل والرد على استفسار التسعير.</li>
              <li>المدينة والحي التقديري لتحديد موقع المعاينة الميدانية وإمكانية الخدمة.</li>
              <li>المساحة التقريبية ونوع الخدمة وصور الموقع إن وجدت لتقدير الكميات والتكلفة.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#12314A]">3. كيفية استخدام البيانات</h2>
            <p>
              تُستخدم البيانات المدخلة حصراً للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 pr-2">
              <li>إعداد عروض الأسعار التقديرية والتواصل معك عبر واتساب أو الاتصال.</li>
              <li>تنسيق مواعيد المعاينة الميدانية للموقع وفحص المناسيب.</li>
              <li>متابعة تنفيذ المشروع وتأكيد رغبات العميل.</li>
            </ul>
            <p>
              نحن لا نبيع أو نشارك أو نؤجر بياناتك الشخصية لأي جهات خارجية أو أطراف تسويقية.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#12314A]">4. أمان البيانات والتواصل عبر واتساب</h2>
            <p>
              يتم إرسال نماذج طلب التسعير عبر تطبيق واتساب المشفر طرفاً لطرف (End-to-End Encryption)، ويتم التعامل مع معلوماتك بسرية تامة ومسؤولية مهنية.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#12314A]">5. التواصل معنا</h2>
            <p>
              إذا كانت لديك أي استفسارات أو ملاحظات بخصوص سياسة الخصوصية، يمكنك التواصل معنا مباشرة على رقم الجوال المعتمد: {CONTACT_INFO.phone}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

const features = [
  {
    icon: '🏞️',
    title: 'الحدائق والمتنزهات العامة',
    desc: 'تصميم وتنفيذ الحدائق العامة والمرافق الترفيهية بمساحات مختلفة وتوزيع مدروس للجلسات والممرات.'
  },
  {
    icon: '🚶',
    title: 'ممرات الحدائق ومضامير المشي',
    desc: 'رصف مسارات المشاة ومضامير الجري بتشكيلات إنترلوك متداخلة، مستقيمة ومنحنية، توفر حركة انسيابية.'
  },
  {
    icon: '🌱',
    title: 'أحواض الزراعة وتحديد الجزر',
    desc: 'تركيب البلدورات لتأطير الأشجار، حماية المسطحات الخضراء، وتحديد الجزر الوسطية بدقة هندسية عالية.'
  },
  {
    icon: '💧',
    title: 'المسطحات الخضراء وشبكات الري',
    desc: 'تمديد شبكات الري الحديثة والرشاشات الأوتوماتيكية، وزراعة النجيل الطبيعي والصناعي والأشجار.'
  },
  {
    icon: '🧱',
    title: 'إنترلوك الساحات ومواقف السيارات',
    desc: 'رصف الساحات الكبرى والمواقف والمداخل بأعلى مواصفات التحمل للأوزان والاستخدام المستمر.'
  },
  {
    icon: '⛺',
    title: 'الجلسات والمظلات واللاندسكيب',
    desc: 'تجهيز المظلات الواقية، الجلسات العائلية، مناطق ألعاب الأطفال، والديكورات الخارجية المتكاملة.'
  }
];

export default function ParksProjectsFocus() {
  return (
    <section className="section parks-section" id="parks-focus">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">التركيز على المشاريع الكبرى</span>
            <h2>تنفيذ وتنسيق الحدائق والمتنزهات</h2>
          </div>
          <p>
            حلول متكاملة للمشاريع الحكومية والتجارية والخاصة — من الممرات والمسطحات الخضراء إلى الساحات والإنترلوك.
          </p>
        </div>

        <div className="parks-grid">
          {features.map((f) => (
            <div key={f.title} className="park-feature-card">
              <span className="park-card-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Contractor Collaboration Banner */}
        <div className="contractor-banner">
          <div className="contractor-copy">
            <span className="contractor-tag">شراكة المشاريع والمقاولات</span>
            <h3>جاهزون للتعاون مع الشركات والمقاولين وأصحاب المشاريع</h3>
            <p>
              نوفر إمكانيات تنفيذ عالية للمشاريع الكبيرة والمتوسطة، مع الالتزام التام بالمواصفات الفنية المعتمدة وتسليم الأعمال في مواعيدها المحددة.
            </p>
            <div className="contractor-perks">
              <span>✓ شغل نظيف وجودة في التنفيذ</span>
              <span>✓ أسعار مناسبة ومدروسة للمشاريع</span>
              <span>✓ التزام صارم بالمواعيد</span>
              <span>✓ تغطية حفر الباطن والمشاريع الكبرى بالمملكة</span>
            </div>
          </div>
          <div className="contractor-actions">
            <a 
              className="button" 
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('السلام عليكم، نرغب في التعاون لتنفيذ مشروع حديقة / إنترلوك / مرافق عامة.')}`}
            >
              ناقش مشروعك مع الإدارة ↗
            </a>
            <a className="button secondary" href={CONTACT_INFO.callUrl} dir="ltr">
              اتصال مباشر: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

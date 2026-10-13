import Image from 'next/image';
import Link from 'next/link';
import {COMPANY_NAME, CONTACT_INFO, imagePath} from '@/lib/constants';

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">شركة الأنس · تنفيذ وتنسيق الحدائق والمتنزهات والمشاريع الكبرى</span>
          <h1>تصميم وتنسيق الحدائق والمتنزهات.<br/><em>إنترلوك، بلدورات، ولاندسكيب متكامل.</em></h1>
          <p>
            متخصصون في تنفيذ الحدائق العامة والخاصة، ممرات المشي، أحواض الزراعة وتحديد الجزر، شبكات الري والمسطحات الخضراء، وإنترلوك الساحات والمواقف. جاهزون للتعاون مع الشركات والمقاولين وأصحاب المشاريع.
          </p>
          
          <div className="hero-highlights">
            <div className="highlight-pill"><span>✓</span> شغل نظيف وجودة في التنفيذ</div>
            <div className="highlight-pill"><span>✓</span> أسعار مناسبة للمشاريع</div>
            <div className="highlight-pill"><span>✓</span> الالتزام التام بالمواعيد</div>
            <div className="highlight-pill"><span>✓</span> متوفر للتعاون مع المقاولين والشركات</div>
          </div>

          <div className="actions">
            <a className="button" href={CONTACT_INFO.whatsappUrl}>اطلب عرض سعر لمشروعك <span>↗</span></a>
            <Link className="button secondary" href="/projects">شاهد أعمال الحدائق والرصف ←</Link>
          </div>

          <div className="hero-note">
            <span>جاهزية للمشاريع الكبرى والمتوسطة</span>
            <small>حفر الباطن والمناطق القريبة · وتغطية المشاريع في كافة مناطق المملكة</small>
          </div>
        </div>

        <div className="hero-visual">
          <Image 
            src={imagePath(7)} 
            alt="تنفيذ مسارات وممرات الحدائق وأحواض الزراعة - شركة الأنس" 
            fill 
            priority 
            sizes="(max-width: 800px) 100vw, 55vw"
          />
          <div className="image-caption">
            <span>تنسيق الحدائق والمرافق العامة</span>
            <strong>ممرات مشي، أحواض زراعة، وتشكيلات رصف متناسقة</strong>
          </div>
          <span className="image-index">مشاريع الحدائق والمتنزهات</span>
        </div>
      </div>

      <div className="container service-strip">
        <span>حدائق ومتنزهات عامة</span>
        <span>ممرات ومضامير مشي</span>
        <span>أحواض زراعة وتحديد جزر</span>
        <span>شبكات ري ومسطحات خضراء</span>
        <span>إنترلوك ساحات ومواقف</span>
      </div>
    </section>
  );
}

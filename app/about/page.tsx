import Image from 'next/image';
import PageIntro from '@/components/PageIntro';
import {CONTACT_INFO,imagePath} from '@/lib/constants';
export const metadata={title:'عن النشاط'};
export default function Page(){return <><PageIntro title="أعمال الرصف والمساحات الخارجية" text="إنترلوك وبلدورات للأحواش والمداخل والأرصفة والممرات."/><section className="section container about-grid"><div><span className="eyebrow">المساحة تبدأ من تفاصيلها</span><h2>اختيار مناسب للمكان والاستخدام</h2><p>يعرض الموقع خدمات تركيب الإنترلوك والبلدورات وتجهيز الممرات والأرصفة وصيانة الرصف. يمكنك الاطلاع على الصور ومناقشة شكل الأرضية ومتطلبات المشروع مباشرة.</p><p>تُحدد الخامات والمقاسات والمواصفات والتكلفة بعد مراجعة حالة الموقع. وللتأكد من إمكانية الخدمة، أرسل المدينة والحي مع صور المساحة الحالية.</p><a className="button" href={CONTACT_INFO.whatsappUrl}>ناقش تفاصيل موقعك ↗</a></div><Image src={imagePath(6)} alt="تشكيلات رصف في ساحة خارجية" width={900} height={900}/></section></>}

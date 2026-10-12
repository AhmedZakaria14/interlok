import Image from 'next/image';
import {SERVICES,CONTACT_INFO,imagePath} from '@/lib/constants';
import PageIntro from './PageIntro';
import ProjectsGallery from './ProjectsGallery';
export default function ServiceDetailView({slug}:{slug:string}){const service=SERVICES.find(s=>s.slug===slug)!;return <><PageIntro title={service.title} text={service.description}/><section className="section container about-grid"><div><span className="eyebrow">نتعرّف على موقعك أولاً</span><h2>{service.title}</h2><p>{service.description}</p><p>أرسل المدينة والحي والمساحة التقريبية وصور الموقع الحالي. يُحدد نطاق العمل والخامات والمواصفات وموعد التنفيذ عند الاتفاق، حسب طبيعة الموقع واستخدامه.</p><a className="button" href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('أرغب في الاستفسار عن '+service.title)}`}>اطلب عرض سعر لهذه الخدمة ↗</a></div><Image src={imagePath(service.image)} alt={service.title} width={900} height={900}/></section><ProjectsGallery limit={3}/></>}

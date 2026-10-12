import Link from 'next/link';
import BrandLogo from './BrandLogo';
import {CONTACT_INFO} from '@/lib/constants';
export default function Footer(){return <footer className="footer"><div className="container footer-grid"><div><BrandLogo/><p>للأحواش والمداخل والأرصفة والمساحات الخارجية.</p></div><div><h3>اكتشف الموقع</h3><Link href="/services">الخدمات</Link><Link href="/projects">معرض الصور</Link><Link href="/privacy-policy">الخصوصية</Link></div><div><h3>للاستفسار عن مشروعك</h3><a href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone}</a><a href={CONTACT_INFO.whatsappUrl}>تواصل عبر واتساب ↗</a><p>أرسل موقع المشروع لتأكيد نطاق الخدمة.</p></div></div><div className="container footer-bottom">© {new Date().getFullYear()} أعمال الإنترلوك والبلدورات</div></footer>}

import Link from 'next/link';
import BrandLogo from './BrandLogo';
import {COMPANY_NAME, CONTACT_INFO} from '@/lib/constants';
export default function Footer(){return <footer className="footer"><div className="container footer-grid"><div><BrandLogo/><p>أعمال الإنترلوك والبلدورات للمشاريع الكبرى، وتنفيذ وتنسيق الحدائق والمتنزهات، ممرات المشي وشبكات الري.</p></div><div><h3>اكتشف الموقع</h3><Link href="/services">خدماتنا</Link><Link href="/projects">معرض المشاريع</Link><Link href="/blog">المدونة والأدلة</Link><Link href="/about">عن الشركة</Link><Link href="/privacy-policy">الخصوصية</Link></div><div><h3>للاستفسار عن مشروعك</h3><a href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone}</a><a href={CONTACT_INFO.whatsappUrl}>تواصل عبر واتساب ↗</a><p>حفر الباطن والمناطق القريبة · وكافة أنحاء المملكة للمشاريع الكبرى.</p></div></div><div className="container footer-bottom">© {new Date().getFullYear()} {COMPANY_NAME}</div></footer>}


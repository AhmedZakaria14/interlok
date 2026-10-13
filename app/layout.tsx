import type {Metadata,Viewport} from 'next';
import {Tajawal} from 'next/font/google';
import FloatingContact from '@/components/FloatingContact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {COMPANY_NAME, CONTACT_INFO} from '@/lib/constants';
import './globals.css';
const font=Tajawal({subsets:['arabic','latin'],weight:['400','500','700','800'],display:'swap',variable:'--font-arabic'});
const siteUrl=process.env.APP_URL;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  'name': COMPANY_NAME,
  'description': 'شركة الأنس لتنفيذ وتنسيق الحدائق والمتنزهات والمرافق العامة، ممرات المشي، أحواض الزراعة، شبكات الري الحديثة، وأعمال الإنترلوك والبلدورات للمشاريع والشركات.',
  'telephone': '+966546269247',
  'areaServed': 'SA',
  'url': siteUrl || undefined
};

export const metadata:Metadata={
  ...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),
  title:{default:'شركة الأنس | تنفيذ وتنسيق الحدائق والمتنزهات وأعمال الإنترلوك والبلدورة',template:'%s | شركة الأنس'},
  description:'شركة الأنس لتنفيذ وتنسيق الحدائق والمتنزهات الكبرى، ممرات المشي، شبكات الري والمسطحات الخضراء، وإنترلوك وبلدورات الساحات والمواقف. جاهزون للتعاون مع المقاولين والشركات: 0546269247.',
  icons:{icon:'/logo.svg',apple:'/logo.svg'},
  openGraph:{
    type:'website',
    locale:'ar_SA',
    siteName: COMPANY_NAME,
    title: 'شركة الأنس لتنسيق الحدائق والمتنزهات والإنترلوك',
    description:'تنفيذ وتنسيق الحدائق والمتنزهات الكبرى، ممرات المشي، شبكات الري، وأعمال الإنترلوك والبلدورة | 0546269247',
    ...(siteUrl?{images:[{url:'/images/paving-01.webp',alt:COMPANY_NAME}]}:{})
  }
};
export const viewport:Viewport={themeColor:'#173b36',width:'device-width',initialScale:1};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" className={font.variable}><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head><body><a className="skip-link" href="#main">انتقل إلى المحتوى</a><div className="topline"><div className="container"><span>{COMPANY_NAME}</span><a href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone}</a></div></div><Header/><main id="main">{children}</main><Footer/><FloatingContact/></body></html>}

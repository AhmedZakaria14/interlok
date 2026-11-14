import type {Metadata,Viewport} from 'next';
import {Tajawal} from 'next/font/google';
import FloatingContact from '@/components/FloatingContact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {COMPANY_NAME, CONTACT_INFO} from '@/lib/constants';
import {SITE_URL} from '@/lib/site';
import './globals.css';
const font=Tajawal({subsets:['arabic','latin'],weight:['400','500','700','800'],display:'swap',variable:'--font-arabic'});
const siteUrl=SITE_URL;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  'name': COMPANY_NAME,
  'description': 'شركة الأنس لأعمال الإنترلوك والبلدورات للمشاريع والشركات، وتنفيذ وتنسيق الحدائق والمتنزهات والمرافق العامة، ممرات المشي، أحواض الزراعة وشبكات الري الحديثة.',
  'telephone': '+966546269247',
  'areaServed': 'SA',
  'url': siteUrl || undefined
};

export const metadata:Metadata={
  ...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),
  title:{default:'شركة الأنس | الإنترلوك والبلدورة وتنسيق الحدائق والمتنزهات',template:'%s | شركة الأنس'},
  description:'شركة الأنس لتركيب الإنترلوك والبلدورات للساحات والمواقف، وتنفيذ وتنسيق الحدائق والمتنزهات الكبرى، ممرات المشي وشبكات الري والمسطحات الخضراء. جاهزون للتعاون مع المقاولين والشركات: 0546269247.',
  robots:{index:true,follow:true},
  icons:{icon:'/logo.svg',apple:'/logo.svg'},
  openGraph:{
    type:'website',
    locale:'ar_SA',
    siteName: COMPANY_NAME,
    title: 'شركة الأنس للإنترلوك والبلدورة وتنسيق الحدائق والمتنزهات',
    description:'أعمال الإنترلوك والبلدورة، وتنفيذ وتنسيق الحدائق والمتنزهات الكبرى، ممرات المشي وشبكات الري | 0546269247',
    ...(siteUrl?{images:[{url:'/images/paving-01.webp',alt:COMPANY_NAME}]}:{})
  }
};
export const viewport:Viewport={themeColor:'#173b36',width:'device-width',initialScale:1};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" className={font.variable}><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head><body><a className="skip-link" href="#main">انتقل إلى المحتوى</a><div className="topline"><div className="container"><span>{COMPANY_NAME}</span><a href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone}</a></div></div><Header/><main id="main">{children}</main><Footer/><FloatingContact/></body></html>}


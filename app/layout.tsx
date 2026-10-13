import type {Metadata,Viewport} from 'next';
import {Tajawal} from 'next/font/google';
import FloatingContact from '@/components/FloatingContact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {CONTACT_INFO} from '@/lib/constants';
import './globals.css';
const font=Tajawal({subsets:['arabic','latin'],weight:['400','500','700','800'],display:'swap',variable:'--font-arabic'});
const siteUrl=process.env.APP_URL;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  'name': 'إنترلوك وبلدورات',
  'description': 'تركيب الإنترلوك والبلدورات ورصف الأحواش والمداخل والأرصفة.',
  'telephone': '+966546269247',
  'areaServed': 'SA',
  'url': siteUrl || undefined
};

export const metadata:Metadata={...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),title:{default:'إنترلوك وبلدورات | أعمال الرصف والمساحات الخارجية',template:'%s | إنترلوك وبلدورات'},description:'تركيب الإنترلوك والبلدورات ورصف الأحواش والمداخل والأرصفة. استعرض الصور وتواصل لمناقشة مشروعك وعرض السعر: 0546269247.',icons:{icon:'/logo.svg',apple:'/logo.svg'},openGraph:{type:'website',locale:'ar_SA',title:'إنترلوك وبلدورات',description:'أعمال الرصف والمساحات الخارجية | 0546269247',...(siteUrl?{images:[{url:'/images/paving-01.webp',alt:'أعمال رصف إنترلوك'}]}:{})}};
export const viewport:Viewport={themeColor:'#173b36',width:'device-width',initialScale:1};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" className={font.variable}><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head><body><a className="skip-link" href="#main">انتقل إلى المحتوى</a><div className="topline"><div className="container"><span>أعمال الإنترلوك والبلدورات</span><a href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone}</a></div></div><Header/><main id="main">{children}</main><Footer/><FloatingContact/></body></html>}

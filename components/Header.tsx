"use client";
import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import BrandLogo from './BrandLogo';
import {CONTACT_INFO} from '@/lib/constants';
const links=[['/','الرئيسية'],['/services','خدماتنا'],['/projects','معرض الصور'],['/about','عن النشاط'],['/contact','تواصل معنا']];
export default function Header(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="header"><div className="container header-inner"><Link href="/" aria-label="الصفحة الرئيسية" onClick={()=>setOpen(false)}><BrandLogo/></Link><button className="menu-toggle" aria-label={open?'إغلاق القائمة':'فتح القائمة'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button><nav id="main-nav" className={open?'nav open':'nav'} aria-label="التنقل الرئيسي">{links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><a className="button header-cta" href={CONTACT_INFO.whatsappUrl}>ناقش مشروعك ↗</a></div></header>}

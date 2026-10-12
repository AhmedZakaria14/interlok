'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from './BrandLogo';
import { CONTACT_INFO } from '@/lib/constants';

const links = [['/', 'الرئيسية'], ['/services', 'خدماتنا'], ['/projects', 'معرض الصور'], ['/about', 'عن النشاط'], ['/contact', 'تواصل معنا']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const desktop = window.matchMedia('(min-width: 801px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return <header className="header" ref={header}><div className="container header-inner">
    <Link href="/" aria-label="الصفحة الرئيسية" onClick={() => setOpen(false)}><BrandLogo /></Link>
    <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="التنقل الرئيسي">{links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
    <a className="button header-cta" href={CONTACT_INFO.whatsappUrl}>ناقش مشروعك ↗</a>
  </div></header>;
}

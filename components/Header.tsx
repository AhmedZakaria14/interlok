'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare, ChevronLeft } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import BrandLogo from '@/components/BrandLogo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'أنواع الإنترلوك', href: '/#catalog' },
    { label: 'معرض الأعمال', href: '/projects' },
    { label: 'من نحن', href: '/about' },
    { label: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(10,25,38,0.04)] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 sm:h-20">
          
          {/* Saudi Contractor Brand Emblem */}
          <Link
            href="/"
            className="flex items-center group shrink min-w-0"
            aria-label="الصفحة الرئيسية - رواسي للمقاولات"
          >
            <BrandLogo size="md" variant="dark" />
          </Link>

          {/* Inline Navigation Links for Desktop & Laptops */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs lg:text-sm font-bold text-[#0A1926]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap relative py-2 ${
                    isActive
                      ? 'text-[#D9822B] font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#D9822B] after:to-[#E59F48] after:rounded-full'
                      : 'text-slate-700 hover:text-[#D9822B]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Cluster for Desktop / Laptop / Tablet */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Phone Quick Dial Widget */}
            <div className="flex items-center gap-2.5 text-right pl-3 lg:pl-3.5 border-l border-slate-200">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-amber-50 border border-amber-200/80 text-[#D9822B] flex items-center justify-center shrink-0 shadow-2xs">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold">للمعاينة والمقايسة</div>
                <a
                  href={CONTACT_INFO.callUrl}
                  className="font-black text-xs lg:text-sm text-[#0A1926] hover:text-[#D9822B] font-mono tracking-wide transition-colors"
                  dir="ltr"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Primary Quote Button */}
            <Link
              href="/#quote"
              className="px-4 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-xl transition-all shadow-xs hover:shadow-md hover:shadow-amber-500/20 active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>طلب مقايسة وسعر</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Only Actions: Direct Call + Hamburger Menu Trigger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={CONTACT_INFO.callUrl}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white bg-[#0A1926] rounded-xl hover:bg-[#D9822B] hover:text-[#061019] transition-colors active:scale-95 shadow-2xs md:hidden"
              aria-label="اتصل بنا الآن"
            >
              <Phone className="w-4 h-4 text-[#E59F48]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#0A1926] hover:bg-slate-100 rounded-xl transition-colors active:scale-95 cursor-pointer"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer (Visible ONLY on screens smaller than lg) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 z-50 bg-black/60 backdrop-blur-xs lg:hidden animate-in fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-t border-slate-200 px-5 py-6 space-y-5 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col divide-y divide-slate-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 text-base font-bold transition-colors flex items-center justify-between ${
                    pathname === link.href ? 'text-[#D9822B]' : 'text-[#0A1926] hover:text-[#D9822B]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-200 space-y-3">
              <Link
                href="/#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3.5 text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] rounded-xl shadow-md active:scale-95"
              >
                طلب عرض سعر ومقايسة مجانية
              </Link>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={CONTACT_INFO.callUrl}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold bg-slate-100 text-[#0A1926] rounded-xl border border-slate-200 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#D9822B]" />
                  <span dir="ltr">{CONTACT_INFO.phone}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold bg-[#25D366] text-white rounded-xl shadow-xs active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساب فوري</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

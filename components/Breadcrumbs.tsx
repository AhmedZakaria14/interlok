import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'الرئيسية',
      item: process.env.APP_URL || 'https://ai-hard-real-estate.vercel.app',
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      item: item.href
        ? `${process.env.APP_URL || 'https://ai-hard-real-estate.vercel.app'}${item.href}`
        : undefined,
    })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="مسار التنقل" className="py-3 px-4 bg-white/70 border-b border-slate-200/80 text-xs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-slate-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-[#E59F48] transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5 text-slate-400" />
          <span>الرئيسية</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronLeft className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-bold text-[#061019]">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#E59F48] transition-colors">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

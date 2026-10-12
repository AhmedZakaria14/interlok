import React from 'react';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetailView from '@/components/ServiceDetailView';

export const metadata: Metadata = {
  title: 'إنشاء وتجهيز أرصفة المشاة | تنفيذ أرصفة بالإنترلوك والبلدورات',
  description:
    'تأسيس ورصف أرصفة المشاة للمباني والفلل والمجمعات التجارية في السعودية مع مراعاة الميول ومنحدرات المداخل ومقاومة الانزلاق. اتصل: 0591066067',
  alternates: {
    canonical: '/services/sidewalk-construction',
  },
};

export default function SidewalkConstructionPage() {
  const service = SERVICES.find((s) => s.slug === 'sidewalk-construction')!;
  return <ServiceDetailView service={service} />;
}

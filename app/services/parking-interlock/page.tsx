import React from 'react';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetailView from '@/components/ServiceDetailView';

export const metadata: Metadata = {
  title: 'تنفيذ أرضيات ومواقف السيارات بالإنترلوك | إنترلوك 8 سم عالي التحمل',
  description:
    'رصف مواقف السيارات وكراجات الفلل بإنترلوك سماكة 8 سم بنظام التداخل المتعامد Herringbone لتحمل أوزان المركبات وعزم الإطارات. اتصل: 0591066067',
  alternates: {
    canonical: '/services/parking-interlock',
  },
};

export default function ParkingInterlockPage() {
  const service = SERVICES.find((s) => s.slug === 'parking-interlock')!;
  return <ServiceDetailView service={service} />;
}

import React from 'react';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetailView from '@/components/ServiceDetailView';

export const metadata: Metadata = {
  title: 'تصميم وتنفيذ ممرات الحدائق | ممرات مشاة بالإنترلوك الديكوري',
  description:
    'رصف ممرات ومسارات الحدائق المنزلية والاستراحات ببلاط الإنترلوك وألوان ترابية دافئة وعزل لمنع نمو الحشائش. اتصل الآن: 0591066067',
  alternates: {
    canonical: '/services/garden-walkways',
  },
};

export default function GardenWalkwaysPage() {
  const service = SERVICES.find((s) => s.slug === 'garden-walkways')!;
  return <ServiceDetailView service={service} />;
}

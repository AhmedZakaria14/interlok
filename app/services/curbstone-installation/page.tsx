import React from 'react';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetailView from '@/components/ServiceDetailView';

export const metadata: Metadata = {
  title: 'تركيب البلدورات وحواف الأرصفة | مقاول بلدورات وبردورات خرسانية',
  description:
    'تركيب وتثبيت البلدورات الخرسانية لحماية حواف الإنترلوك وتحديد الأرصفة والممرات في السعودية. استقامة تامة وتثبيت خرساني صلب. اتصل: 0591066067',
  alternates: {
    canonical: '/services/curbstone-installation',
  },
};

export default function CurbstoneInstallationPage() {
  const service = SERVICES.find((s) => s.slug === 'curbstone-installation')!;
  return <ServiceDetailView service={service} />;
}

import React from 'react';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetailView from '@/components/ServiceDetailView';

export const metadata: Metadata = {
  title: 'تركيب الإنترلوك للأحواش والمداخل والساحات | متخصصون في الرصف',
  description:
    'خدمات تركيب بلاط الإنترلوك المتشابك للأحواش المنزلية ومداخل الفلل والساحات في السعودية. دك صبيز، تسوية ليزرية، وفواصل رمل سيلكا. اتصل: 0591066067',
  alternates: {
    canonical: '/services/interlock-installation',
  },
};

export default function InterlockInstallationPage() {
  const service = SERVICES.find((s) => s.slug === 'interlock-installation')!;
  return <ServiceDetailView service={service} />;
}

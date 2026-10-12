import React from 'react';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetailView from '@/components/ServiceDetailView';

export const metadata: Metadata = {
  title: 'صيانة وتجديد الإنترلوك والأرصفة القديمة | إصلاح الهبوط والتفكك',
  description:
    'خدمة متخصصة لفك بلاط الإنترلوك القديم، معالجة ودك الهبوطات الأرضية بعد الحفريات، وإعادة التركيب وملء الفواصل برمل السيلكا. اتصل: 0591066067',
  alternates: {
    canonical: '/services/interlock-maintenance',
  },
};

export default function InterlockMaintenancePage() {
  const service = SERVICES.find((s) => s.slug === 'interlock-maintenance')!;
  return <ServiceDetailView service={service} />;
}

import Image from 'next/image';
import { COMPANY_NAME } from '@/lib/constants';

export default function BrandLogo() {
  return (
    <span className="brand">
      <Image src="/logo.svg" width={48} height={48} alt={COMPANY_NAME} />
      <span>
        <strong>شركة الأنس</strong>
        <small>إنترلوك وبلدورة · تنسيق الحدائق والمنتزهات</small>
      </span>
    </span>
  );
}

import Image from 'next/image';
export default function BrandLogo() { return <span className="brand"><Image src="/logo.svg" width={48} height={48} alt=""/><span><strong>إنترلوك وبلدورات</strong><small>أعمال الرصف والمساحات الخارجية</small></span></span>; }

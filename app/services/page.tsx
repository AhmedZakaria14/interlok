import PageIntro from '@/components/PageIntro';
import Section from '@/components/ServicesSection';
import { COMPANY_NAME } from '@/lib/constants';
export const metadata={title:`خدمات ${COMPANY_NAME}`};
export default function Page(){return <><PageIntro title="خدمات الحدائق والمنتزهات والإنترلوك" text="تنفيذ وتنسيق الحدائق العامة والخاصة، ممرات المشي، شبكات الري، وأعمال الإنترلوك والبلدورات للمشاريع الكبرى."/><Section/></>}
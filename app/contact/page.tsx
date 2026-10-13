import PageIntro from '@/components/PageIntro';
import Section from '@/components/QuoteForm';
import { COMPANY_NAME } from '@/lib/constants';
export const metadata={title:`تواصل مع ${COMPANY_NAME}`};
export default function Page(){return <><PageIntro title="تواصل بخصوص مشروعك" text="شارك تفاصيل مشروع الحديقة، المتنزه، أو أعمال الإنترلوك لطلب عرض سعر ومناقشة التنفيذ للشركات والأفراد."/><Section/></>}
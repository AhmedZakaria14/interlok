import PageIntro from '@/components/PageIntro';
import Section from '@/components/ProjectsGallery';
import { COMPANY_NAME } from '@/lib/constants';
export const metadata={title:`معرض أعمال ${COMPANY_NAME}`};
export default function Page(){return <><PageIntro title="معرض أعمال الحدائق والمشاريع" text="صور من أعمال تنفيذ وتنسيق الحدائق، ممرات المشي، أحواض الزراعة، ورصف الساحات والمواقف لشركة الأنس."/><Section/></>}
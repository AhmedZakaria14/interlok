import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ProcessTimeline from '@/components/ProcessTimeline';
import QuoteForm from '@/components/QuoteForm';
import FAQSection from '@/components/FAQSection';
export default function Page(){return <><Hero/><ServicesSection/><ProjectsGallery limit={6}/><ProcessTimeline/><QuoteForm/><FAQSection/></>}

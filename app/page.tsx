import Hero from '@/components/Hero';
import ParksProjectsFocus from '@/components/ParksProjectsFocus';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ProcessTimeline from '@/components/ProcessTimeline';
import QuoteForm from '@/components/QuoteForm';
import FAQSection from '@/components/FAQSection';

export const metadata = { alternates: { canonical: '/' } };

export default function Page(){
  return (
    <>
      <Hero/>
      <ParksProjectsFocus/>
      <ServicesSection/>
      <ProjectsGallery limit={6}/>
      <ProcessTimeline/>
      <QuoteForm/>
      <FAQSection/>
    </>
  );
}


import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PaverCatalog from '@/components/PaverCatalog';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectsGallery from '@/components/ProjectsGallery';
import ProcessTimeline from '@/components/ProcessTimeline';
import QuoteForm from '@/components/QuoteForm';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section: WordPress Contractor Banner with Quick Consultation */}
      <Hero />

      {/* 2. من نحن: المعايير الهندسية والخبرة الميدانية */}
      <AboutSection />

      {/* 3. خدماتنا: الخدمات التخصصية الست المعتمدة */}
      <ServicesSection />

      {/* 4. كتالوج النماذج: أشكال وسماكات الإنترلوك والبلدورات الأكثر طلباً بالسعودية */}
      <PaverCatalog />

      {/* 5. لماذا تختار خدماتنا؟ ركائز الجودة والضمان */}
      <WhyChooseUs />

      {/* 7. معرض أعمالنا المنفذة وتوثيق المواقع */}
      <ProjectsGallery limit={6} />

      {/* 8. مراحل تنفيذ المشروع خطوة بخطوة */}
      <ProcessTimeline />

      {/* 9. اطلب عرض سعر ومقايسة ميدانية */}
      <QuoteForm />

      {/* 10. الأسئلة الشائعة FAQ مع بيانات Schema المنظمة */}
      <FAQSection />

      {/* 11. قنوات التواصل المباشر وأوقات العمل */}
      <ContactSection />
    </div>
  );
}

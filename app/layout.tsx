import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
});

export const viewport: Viewport = {
  themeColor: '#061019',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://ai-hard-real-estate.vercel.app'),
  title: {
    default: 'رواسي للمقاولات | تركيب إنترلوك وبلدورات وتنفيذ أرصفة وممرات بالسعودية',
    template: '%s | رواسي للمقاولات',
  },
  description:
    'رواسي للمقاولات - متخصصون في تركيب الإنترلوك والبلدورات، وإنشاء أرصفة المشاة وممرات الحدائق ومواقف السيارات في المملكة العربية السعودية. تنفيذ متقن وأسعار منافسة. اتصل الآن: 0591066067',
  keywords: [
    'رواسي للمقاولات',
    'مقاول انترلوك بالسعودية',
    'تركيب انترلوك',
    'تركيب انترلوك وبلدورات',
    'تركيب بلدورات',
    'مقاول انترلوك',
    'تركيب انترلوك للمنازل',
    'تركيب انترلوك للأحواش',
    'تنفيذ أرصفة المشاة',
    'تركيب بردورات',
    'تصميم ممرات حدائق',
    'تركيب انترلوك مواقف سيارات',
    'صيانة الانترلوك',
    'مقاول أرصفة وبلدورات السعودية',
  ],
  authors: [{ name: 'رواسي للمقاولات' }],
  creator: 'رواسي للمقاولات',
  publisher: 'رواسي للمقاولات',
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    title: 'رواسي للمقاولات | تركيب إنترلوك وبلدورات وتنفيذ أرصفة وممرات بالسعودية',
    description:
      'رواسي للمقاولات - متخصصون في تركيب الإنترلوك والبلدورات وإنشاء الأرصفة والممرات ومواقف السيارات. اتصل الآن: 0591066067',
    siteName: 'رواسي للمقاولات',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تركيب إنترلوك وبلدورات وتنفيذ أرصفة وممرات باحترافية',
    description:
      'متخصصون في تركيب الإنترلوك والبلدورات والأرصفة والممرات في السعودية. تواصل عبر 0591066067',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'رواسي للمقاولات - أعمال الإنترلوك والبلدورات',
    description:
      'أعمال تركيب الإنترلوك والبلدورات وتجهيز أرصفة المشاة وممرات الحدائق ومواقف السيارات في المملكة العربية السعودية.',
    telephone: '+966591066067',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'SA',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
        ],
        opens: '07:00',
        closes: '20:00',
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased bg-[#F8FAFC] text-[#1E293B]"
        style={{ fontFamily: 'var(--font-cairo), Cairo, system-ui, sans-serif' }}
      >
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  );
}

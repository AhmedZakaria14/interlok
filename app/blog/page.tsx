import type { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { articlePath, articleTitle, blogPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/site';

const title = 'مدونة الإنترلوك والبلدورات وتنسيق الحدائق';
const description = 'أدلة شركة الأنس لاختيار وتركيب الإنترلوك والبلدورات: الأنواع والأسعار وتجهيز الأرضيات ورصف الحدائق والساحات ومواقف السيارات.';
export const metadata: Metadata = {
  title, description, alternates: { canonical: '/blog' },
  keywords: ['تركيب انترلوك', 'مقاول انترلوك', 'تركيب بلدورات', 'بلاط انترلوك', 'تنسيق الحدائق'],
  openGraph: { type: 'website', locale: 'ar_SA', title, description, url: '/blog', images: [{ url: '/images/paving-01.webp', alt: 'إنترلوك الحدائق والممرات' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/paving-01.webp'] },
};

export default function BlogPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: title,
    url: absoluteUrl('/blog'), inLanguage: 'ar-SA',
    mainEntity: { '@type': 'ItemList', numberOfItems: blogPosts.length, itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem', position: index + 1, url: absoluteUrl(articlePath(post)), name: articleTitle(post),
    })) },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="blog-intro"><div className="container">
      <nav className="blog-breadcrumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><span aria-hidden="true">/</span><span aria-current="page">المدونة</span></nav>
      <div className="blog-intro-row"><div><span className="eyebrow">من اختيار البلاط إلى آخر تفصيلة</span><h1>دليل الإنترلوك<br /><span>والبلدورات</span></h1></div>
      <div className="blog-intro-note"><p>معرفة تساعدك على التخطيط بثقة. اكتشف الخامات المناسبة، وخطوات التنفيذ، وما يؤثر في تكلفة مشروعك.</p><div className="blog-topics"><a href="#interlock-guides">الإنترلوك والرصف ↓</a><a href="#curbstone-guides">البلدورات والأرصفة ↓</a></div></div></div>
    </div></header>
    <div className="container blog-content">
      <BlogCard post={blogPosts[0]} featured />
      <section id="interlock-guides" className="blog-category-section" aria-labelledby="interlock-title">
        <div className="blog-section-heading"><div><span className="eyebrow">الخامات، التكلفة، التنفيذ</span><h2 id="interlock-title">أدلة الإنترلوك والرصف</h2></div><span className="blog-guide-count">11 دليلًا</span></div>
        <div className="blog-grid">{blogPosts.slice(1, 11).map(post => <BlogCard key={post.slug} post={post} />)}</div>
      </section>
      <section id="curbstone-guides" className="blog-category-section" aria-labelledby="curbstone-title">
        <div className="blog-section-heading"><div><span className="eyebrow">حدود متقنة لمساحات منظمة</span><h2 id="curbstone-title">البلدورات والأرصفة</h2></div><span className="blog-guide-count">4 أدلة</span></div>
        <div className="blog-grid">{blogPosts.slice(11).map(post => <BlogCard key={post.slug} post={post} />)}</div>
      </section>
      <aside className="blog-help"><div><span className="eyebrow">حوّل الفكرة إلى خطة تنفيذ</span><h2>تخطط لمشروع رصف أو تنسيق حديقة؟</h2><p>شارك المدينة والمساحة وصور الموقع لمناقشة الخامات والمواصفات وعرض السعر.</p></div><Link className="button" href="/contact">ناقش مشروعك ↗</Link></aside>
    </div>
  </>;
}

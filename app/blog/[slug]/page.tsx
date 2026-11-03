import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleBody from '@/components/ArticleBody';
import BlogCard from '@/components/BlogCard';
import { articlePath, blogPosts, formatArticleDate, getBlogPost, getFaqItems, getRelatedPosts, sectionId, subheadingId } from '@/lib/blog';
import { COMPANY_NAME, CONTACT_INFO } from '@/lib/constants';
import { absoluteUrl } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return {
    title: { absolute: post.title }, description: post.description, keywords: post.keywords,
    authors: [{ name: post.author }], category: post.category,
    alternates: { canonical: articlePath(post) }, robots: { index: true, follow: true },
    openGraph: {
      type: 'article', locale: 'ar_SA', url: articlePath(post), title: post.title,
      description: post.description, publishedTime: post.publishedAt, modifiedTime: post.modifiedAt,
      authors: [post.author], images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.image] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const url = absoluteUrl(articlePath(post));
  const faqs = getFaqItems(post);
  const schemas = [{
    '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${url}#article`,
    headline: post.title, description: post.description, image: [absoluteUrl(post.image)],
    datePublished: post.publishedAt, dateModified: post.modifiedAt, inLanguage: 'ar-SA',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: COMPANY_NAME, url: absoluteUrl('/'), logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.svg') } },
    keywords: post.keywords.join(', '), articleSection: post.category,
  }, {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: absoluteUrl('/blog') },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }, ...(faqs.length ? [{
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  }] : [])];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />)}
    <article>
      <header className="article-header"><div className="container">
        <nav className="blog-breadcrumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><span aria-hidden="true">/</span><Link href="/blog">المدونة</Link><span aria-hidden="true">/</span><span aria-current="page">{post.keywords[0]}</span></nav>
        <div className="article-heading-grid"><div><span className="blog-category">{post.category}</span><h1>{post.title}</h1><p className="article-description">{post.description}</p><div className="article-meta"><span>بقلم {post.author}</span><time dateTime={post.publishedAt}>{formatArticleDate(post.publishedAt)}</time><span>{post.readingTime} دقائق قراءة</span></div></div>
        <figure className="article-cover"><Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></figure></div>
      </div></header>
      <div className="container article-layout">
        <aside className="article-sidebar">
          <nav className="article-toc" aria-label="جدول محتويات المقال">
            <span className="eyebrow">انتقل مباشرة إلى ما يهمك</span><h2>جدول المحتويات</h2>
            <ol>{post.sections.map((section, sectionIndex) => <li key={sectionIndex}>
              <a href={`#${sectionId(sectionIndex)}`}>{section.heading}</a>
              {section.blocks.some(block => block.type === 'subheading') ? <ul>{section.blocks.map((block, blockIndex) => block.type === 'subheading' ? <li key={blockIndex}><a href={`#${subheadingId(sectionIndex, blockIndex)}`}>{block.text}</a></li> : null)}</ul> : null}
            </li>)}</ol>
          </nav>
        </aside>
        <div className="article-main"><ArticleBody post={post} />
          <aside className="article-cta"><span className="eyebrow">ابدأ من تفاصيل موقعك</span><h2>اطلب عرض سعر لمشروعك</h2><p>أرسل المدينة، والمساحة التقديرية، وصور الموقع لتحديد نطاق الأعمال والخامات وموعد التنفيذ.</p><div className="actions"><a className="button" href={CONTACT_INFO.whatsappUrl}>تواصل عبر واتساب ↗</a><a className="button secondary" href={CONTACT_INFO.callUrl}><span dir="ltr">{CONTACT_INFO.phone}</span></a></div></aside>
        </div>
      </div>
    </article>
    <section className="container article-related" aria-labelledby="related-title"><div className="blog-section-heading"><div><span className="eyebrow">أكمل الصورة</span><h2 id="related-title">أدلة مرتبطة بمشروعك</h2></div><Link href="/blog" className="blog-read-more">كل المقالات ↗</Link></div><div className="blog-grid">{getRelatedPosts(post).map(related => <BlogCard key={related.slug} post={related} />)}</div></section>
  </>;
}

import Image from 'next/image';
import Link from 'next/link';
import { articlePath, BlogPost, formatArticleDate } from '@/lib/blog';

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`blog-card${featured ? ' blog-featured' : ''}`}>
      <Link href={articlePath(post)} className="blog-card-image" tabIndex={-1} aria-hidden="true">
        <Image src={post.image} alt={post.imageAlt} fill priority={featured}
          sizes={featured ? '(max-width: 800px) 100vw, 58vw' : '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw'} />
      </Link>
      <div className="blog-card-copy">
        <span className="blog-category">{post.category}</span>
        <div className="blog-card-meta"><time dateTime={post.publishedAt}>{formatArticleDate(post.publishedAt)}</time><span>{post.readingTime} دقائق قراءة</span></div>
        <h2><Link href={articlePath(post)}>{post.title}</Link></h2>
        <p>{post.description}</p>
        <Link href={articlePath(post)} className="blog-read-more" aria-label={`قراءة مقال ${post.title}`}>اقرأ المقال <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

import type { MetadataRoute } from 'next';
import staticPages from '@/data/sitemap-pages.json';
import { articlePath, blogPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const latestUpdate = blogPosts.reduce((latest, post) => post.modifiedAt > latest ? post.modifiedAt : latest, '2026-11-03');
  return [
    // Preserve the dates and priorities supplied in the uploaded sitemap.
    ...staticPages.map(page => ({
      url: absoluteUrl(page.path),
      lastModified: new Date(page.lastModified),
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
    { url: absoluteUrl('/blog'), lastModified: new Date(latestUpdate), changeFrequency: 'weekly', priority: 0.8 },
    ...blogPosts.map(post => ({ url: absoluteUrl(articlePath(post)), lastModified: new Date(post.modifiedAt), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}

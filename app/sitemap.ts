import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/constants';
import { articlePath, blogPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/services', '/projects', '/about', '/contact', '/privacy-policy', ...SERVICES.map(service => `/services/${service.slug}`)];
  const latestUpdate = blogPosts.reduce((latest, post) => post.modifiedAt > latest ? post.modifiedAt : latest, '2026-11-03');
  return [
    ...staticPaths.map(path => ({ url: absoluteUrl(path || '/'), changeFrequency: 'monthly' as const, priority: path ? 0.7 : 1 })),
    { url: absoluteUrl('/blog'), lastModified: new Date(latestUpdate), changeFrequency: 'weekly', priority: 0.8 },
    ...blogPosts.map(post => ({ url: absoluteUrl(articlePath(post)), lastModified: new Date(post.modifiedAt), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}

import 'server-only';
import posts from '@/data/blog-posts.json';
import { CONTACT_INFO } from '@/lib/constants';

export type TextPart = { text: string; href?: string; bold?: boolean };
export type ArticleText = { text: string; parts: TextPart[] };
export type ArticleBlock = ArticleText & { type: 'paragraph' | 'listItem' } | { type: 'subheading'; text: string };
export type ArticleSection = { heading: string; blocks: ArticleBlock[] };
export type BlogPost = {
  slug: string; title: string; description: string; keywords: string[]; author: string;
  category: string; image: string; imageAlt: string; publishedAt: string; modifiedAt: string;
  readingTime: number; excerpt: string; intro: ArticleText[]; sections: ArticleSection[]; relatedSlugs: string[];
};

export const blogPosts = posts as BlogPost[];
const postBySlug = new Map(blogPosts.map(post => [post.slug, post]));

export function getBlogPost(slug: string) {
  try { return postBySlug.get(decodeURIComponent(slug)); } catch { return undefined; }
}

export const articleTitle = (post: BlogPost) => `${post.title} | ${CONTACT_INFO.phone}`;
export const articlePath = (post: BlogPost) => `/blog/${post.slug}`;
export const sectionId = (index: number) => `section-${index + 1}`;
export const subheadingId = (section: number, block: number) => `section-${section + 1}-heading-${block + 1}`;

export function getFaqItems(post: BlogPost) {
  const section = post.sections.find(s => s.heading === 'الأسئلة الشائعة');
  if (!section) return [];
  return section.blocks.flatMap((block, index) => {
    if (block.type !== 'subheading') return [];
    const answers: string[] = [];
    for (const next of section.blocks.slice(index + 1)) {
      if (next.type === 'subheading') break;
      answers.push(next.text);
    }
    return answers.length ? [{ question: block.text, answer: answers.join(' ') }] : [];
  });
}

export function getRelatedPosts(post: BlogPost) {
  return post.relatedSlugs.map(slug => postBySlug.get(slug)).filter((p): p is BlogPost => Boolean(p));
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat('ar-SA-u-ca-gregory', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Riyadh',
  }).format(new Date(`${date}T12:00:00Z`));
}

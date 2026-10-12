import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS, CONTACT_INFO, SERVICES } from '@/lib/constants';
import { Calendar, Clock, ChevronLeft, ArrowRight, MessageSquare, Phone, Sparkles } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | دليل متخصص`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'المدونة والإرشادات', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <section className="bg-[#081522] text-white py-14 md:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-right">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="font-black text-[#D97706] bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl">
              {post.category}
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-right">
            <div className="lg:col-span-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-loose">
                  {paragraph}
                </p>
              ))}

              {/* Internal Link to Services */}
              <div className="pt-8 border-t border-slate-200 mt-8 space-y-4">
                <h3 className="text-lg font-black text-[#081522]">
                  خدمات ذات صلة بموضوع المقال:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.slice(0, 4).map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.slug}`}
                      className="p-3.5 rounded-2xl border border-slate-200 hover:border-[#E49B45] hover:bg-[#F8FAFC] transition-colors flex items-center justify-between text-xs font-bold text-[#081522]"
                    >
                      <span className="truncate">{srv.title}</span>
                      <ChevronLeft className="w-4 h-4 text-[#D97706] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-black text-base text-[#081522]">
                  هل تخطط لرصف مشروعك حالياً؟
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  تواصل معنا للاستفسار عن أسعار البلاط ومواصفات الدك والتسوية الأنسب لموقعك.
                </p>

                <div className="space-y-2 pt-2">
                  <a
                    href={CONTACT_INFO.callUrl}
                    className="w-full py-3 px-3 text-xs font-black text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اتصل: {CONTACT_INFO.phone}</span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 text-xs font-black text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>واتساب: {CONTACT_INFO.whatsappNumber}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

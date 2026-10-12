import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS, CONTACT_INFO } from '@/lib/constants';
import { Calendar, Clock, ChevronLeft, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'إرشادات ونماذج التنفيذ | مقالات فنية عن الإنترلوك والبلدورات',
  description:
    'أدلة وإرشادات فنية لاختيار سماكة الإنترلوك (6 سم مقابل 8 سم)، متطلبات دك التربة، وأهمية البلدورات الخرسانية في حماية الرصف.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'المدونة والإرشادات' }]} />

      {/* Header Banner */}
      <section className="bg-[#061019] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#132B40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B40]/80 border border-[#E59F48]/30 text-xs font-black text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E59F48]" />
              <span>إرشادات ومعايير هندسية معتمدة بالمملكة</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              دليل الرصف الخارجي وأعمال الإنترلوك
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              مقالات وإرشادات فنية متخصصة تساعدك على فهم مراحل الرصف، اختيار السماكات المناسبة، وتفادي مشاكل الهبوط والتفكك.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-7 space-y-4">
                  {/* Category and Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-black text-[#D97706] bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-black text-[#081522] hover:text-[#D97706] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-[#081522] hover:text-[#D97706] transition-colors"
                  >
                    <span>قراءة الدليل</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { Fragment, ReactNode } from 'react';
import { ArticleBlock, ArticleText, BlogPost, sectionId, subheadingId } from '@/lib/blog';

function Text({ value }: { value: ArticleText }) {
  return value.parts.map((part, index) => {
    const text = part.bold ? <strong>{part.text}</strong> : part.text;
    if (!part.href) return <Fragment key={index}>{text}</Fragment>;
    if (part.href.startsWith('/')) return <Link key={index} href={part.href}>{text}</Link>;
    return <a key={index} href={part.href}>{text}</a>;
  });
}

function Blocks({ blocks, sectionIndex }: { blocks: ArticleBlock[]; sectionIndex: number }) {
  const output: ReactNode[] = [];
  let index = 0;
  while (index < blocks.length) {
    const block = blocks[index];
    if (block.type === 'listItem') {
      const items: ArticleText[] = [];
      while (index < blocks.length && blocks[index].type === 'listItem') {
        items.push(blocks[index] as ArticleText);
        index += 1;
      }
      output.push(<ul className="article-list" key={`list-${index}`}>{items.map((item, n) => <li key={n}><Text value={item} /></li>)}</ul>);
      continue;
    }
    output.push(block.type === 'subheading'
      ? <h3 id={subheadingId(sectionIndex, index)} key={index}>{block.text}</h3>
      : <p key={index}><Text value={block} /></p>);
    index += 1;
  }
  return output;
}

export default function ArticleBody({ post }: { post: BlogPost }) {
  return <div className="article-body">
    <div className="article-intro">{post.intro.map((paragraph, index) => <p key={index}><Text value={paragraph} /></p>)}</div>
    {post.sections.map((section, index) => (
      <section id={sectionId(index)} key={index} className="article-section" aria-labelledby={`${sectionId(index)}-title`}>
        <h2 id={`${sectionId(index)}-title`}>{section.heading}</h2>
        <Blocks blocks={section.blocks} sectionIndex={index} />
      </section>
    ))}
  </div>;
}

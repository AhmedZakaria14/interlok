import Image from 'next/image';
import Link from 'next/link';
import {SERVICES,imagePath} from '@/lib/constants';

export default function ServicesSection(){
  return (
    <section className="section container" id="services">
      <div className="section-heading">
        <div>
          <span className="eyebrow">خدمات اللاندسكيب والمشاريع الكبرى</span>
          <h2>خدمات الحدائق والمنتزهات وأعمال الرصف</h2>
        </div>
        <p>
          نقدم حزمة خدمات متكاملة لتجهيز وتنسيق الحدائق العامة، ممرات المشي، شبكات الري، والإنترلوك والبلدورات للمشاريع والشركات.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s,i)=>(
          <Link className="service-card" href={`/services/${s.slug}`} key={s.slug}>
            <div className="card-image">
              <Image src={imagePath(s.image)} alt={s.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"/>
              {s.tag && <span className="service-tag">{s.tag}</span>}
            </div>
            <div className="card-copy">
              <span className="card-number">0{i+1} /</span>
              <h3>{s.title}<span>↗</span></h3>
              <p>{s.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

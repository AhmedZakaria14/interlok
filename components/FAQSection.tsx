import {FAQS} from '@/lib/constants';
export default function FAQSection(){return <section className="section container faq"><div><span className="eyebrow">قبل ما تبدأ</span><h2>أسئلة تساعدك في الخطوة الأولى</h2></div><div>{FAQS.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>}

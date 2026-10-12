import Link from 'next/link';
export default function PageIntro({title,text}:{title:string;text:string}){return <div className="page-intro"><div className="container"><Link href="/">الرئيسية</Link><span> / </span><span>{title}</span><h1>{title}</h1><p>{text}</p></div></div>}

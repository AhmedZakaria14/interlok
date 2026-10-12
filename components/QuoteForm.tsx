'use client';

import { useState, type FormEvent } from 'react';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';

export default function QuoteForm() {
  const [messageUrl, setMessageUrl] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || '').trim();
    for (const key of ['name', 'city']) {
      const input = form.elements.namedItem(key) as HTMLInputElement;
      input.setCustomValidity(value(key) ? '' : 'يرجى كتابة هذه البيانات.');
    }
    if (!form.reportValidity()) return;
    const message = [
      'السلام عليكم، أرغب في عرض سعر.',
      `الاسم: ${value('name')}`,
      `الموقع: ${value('city')}`,
      `الخدمة: ${value('service')}`,
      `المساحة التقريبية: ${value('area') ? value('area') + ' م²' : 'لم تحدد'}`,
      `التفاصيل: ${value('details') || 'لا توجد'}`,
    ].join('\n');
    const url = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    setMessageUrl(url);
    // Same-tab navigation also works when a mobile browser blocks pop-ups.
    window.location.assign(url);
  }

  return <section className="section container" id="quote"><div className="quote-grid">
    <div><span className="eyebrow">خلّنا نتكلم عن مشروعك</span><h2>خطوتك الأولى<br />تبدأ بتفاصيل بسيطة.</h2><p>حدّد الخدمة ومكان المشروع والمساحة التقريبية. سنفتح لك رسالة واتساب جاهزة لتراجعها وترسلها بنفسك.</p><a className="phone-link" href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone} ↗</a><p className="muted">السعر وموعد التنفيذ ونطاق الخدمة تُؤكد عند التواصل.</p></div>
    <form onSubmit={submit} onInput={event => { if (event.target instanceof HTMLInputElement) event.target.setCustomValidity(''); }}>
      <label>الاسم<input name="name" autoComplete="name" required maxLength={80} placeholder="اسمك الكريم" /></label>
      <label>المدينة والحي<input name="city" autoComplete="address-level2" required maxLength={140} placeholder="أين يقع المشروع؟" /></label>
      <div className="form-row"><label>الخدمة<select name="service">{SERVICES.map(s => <option key={s.slug}>{s.title}</option>)}</select></label><label>المساحة التقريبية (م²)<input name="area" type="number" inputMode="decimal" min="0.1" step="any" placeholder="اختياري" /></label></div>
      <label>تفاصيل إضافية<textarea name="details" rows={3} maxLength={1200} placeholder="حالة الموقع وأي تفاصيل تساعدنا" /></label>
      <button className="button" type="submit">جهّز الرسالة على واتساب ↗</button><small>لن يتم حفظ النموذج في الموقع. يُرسل فقط عند إرسالك الرسالة في واتساب.</small>
      {messageUrl && <p role="status" className="quote-fallback">لو لم يفتح واتساب، <a href={messageUrl}>اضغط هنا لفتح رسالتك</a>.</p>}
    </form>
  </div></section>;
}

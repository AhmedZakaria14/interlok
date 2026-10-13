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
      'السلام عليكم، أرغب في طلب عرض سعر / تعاون لتنفيذ مشروع.',
      `الاسم: ${value('name')}`,
      `الموقع (المدينة والحي): ${value('city')}`,
      `الخدمة المطلوبة: ${value('service')}`,
      `المساحة التقريبية: ${value('area') ? value('area') + ' م²' : 'لم تحدد'}`,
      `تفاصيل المشروع: ${value('details') || 'لا توجد'}`,
    ].join('\n');
    const url = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    setMessageUrl(url);
    // Same-tab navigation also works when a mobile browser blocks pop-ups.
    window.location.assign(url);
  }

  return (
    <section className="section container" id="quote">
      <div className="quote-grid">
        <div>
          <span className="eyebrow">تسعير المشاريع والتعاون</span>
          <h2>اطلب عرض سعر لمشروعك.<br />حدائق، متنزهات، ورصف.</h2>
          <p>
            حدّد الخدمة ومكان المشروع والمساحة التقريبية. نخدم مشاريع الحدائق العامة والخاصة، الساحات، الممرات، ومواقف السيارات في حفر الباطن وكافة مناطق المملكة.
          </p>
          <a className="phone-link" href={CONTACT_INFO.callUrl} dir="ltr">{CONTACT_INFO.phone} ↗</a>
          <p className="muted">متاح للتعاون مع الشركات والمقاولين وأصحاب المشاريع والجهات المسؤولة.</p>
        </div>
        <form onSubmit={submit} onInput={event => { if (event.target instanceof HTMLInputElement) event.target.setCustomValidity(''); }}>
          <label>الاسم أو جهة المشروع<input name="name" autoComplete="name" required maxLength={80} placeholder="اسمك الكريم أو اسم الشركة" /></label>
          <label>المدينة والحي<input name="city" autoComplete="address-level2" required maxLength={140} placeholder="مثال: حفر الباطن - حي الروضة" /></label>
          <div className="form-row">
            <label>الخدمة المطلوبة
              <select name="service">
                {SERVICES.map(s => <option key={s.slug}>{s.title}</option>)}
              </select>
            </label>
            <label>المساحة التقريبية (م²)<input name="area" type="number" inputMode="decimal" min="0.1" step="any" placeholder="اختياري" /></label>
          </div>
          <label>تفاصيل المشروع<textarea name="details" rows={3} maxLength={1200} placeholder="حالة الموقع، متطلبات الحدائق أو الممرات، وأي تفاصيل تساعدنا في تقييم المشروع" /></label>
          <button className="button" type="submit">إرسال تفاصيل المشروع عبر واتساب ↗</button>
          <small>سيتم تجهيز رسالة تفصيلية لتأكيد متطلبات المشروع وموعد المعاينة وعرض السعر.</small>
          {messageUrl && <p role="status" className="quote-fallback">لو لم يفتح واتساب تلقائيًا، <a href={messageUrl}>اضغط هنا لفتح المحادثة</a>.</p>}
        </form>
      </div>
    </section>
  );
}

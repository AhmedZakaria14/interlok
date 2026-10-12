'use client';

import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, AlertCircle, Sparkles, Copy, Check, FileText } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'الرياض',
    district: '',
    serviceType: SERVICES[0].title,
    areaSquareMeters: '150',
    description: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [feedbackState, setFeedbackState] = useState<'idle' | 'submitted'>('idle');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const saudiCities = [
    'الرياض',
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'الدمام والخبر',
    'القصيم (بريدة وعنيزة)',
    'الخرج',
    'حائل',
    'أبها وخميس مشيط',
    'تبوك',
    'الأحساء',
    'الجبيل',
    'الطائف',
    'مدينة أخرى بالمملكة',
  ];

  const quickAreaChips = ['60', '120', '250', '400', '700', '1000+'];

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/[\s-]/g, '');
    return /^(05|5|\+9665)[0-9]{8}$/.test(cleaned);
  };

  const generateMessage = () => {
    return [
      'السلام عليكم ورحمة الله وبركاته،',
      `طلب تسعير ومعاينة ميدانية - ${CONTACT_INFO.temporaryBrandName}:`,
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `• الاسم الكريم: ${formData.name.trim() || 'لم يحدد'}`,
      `• رقم الجوال: ${formData.phone.trim() || 'لم يحدد'}`,
      `• المدينة: ${formData.city}`,
      `• الحي / الموقع: ${formData.district.trim() || 'سيتم التحديد هاتفياً'}`,
      `• نوع الخدمة: ${formData.serviceType}`,
      `• المساحة التقريبية: ${formData.areaSquareMeters.trim() || '150'} م²`,
      formData.description.trim() ? `• تفاصيل إضافية: ${formData.description.trim()}` : '',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'يرجى التواصل لتأكيد موعد المعاينة وتزويدي بعرض السعر المناسب.',
    ].filter(Boolean).join('\n');
  };

  const handleCopyDraft = () => {
    const msg = generateMessage();
    navigator.clipboard.writeText(msg);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('يرجى إدخال اسمك الكريم للمعاينة.');
      return;
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      setErrorMessage('يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05 (مثال: 0591066067).');
      return;
    }

    if (!formData.areaSquareMeters.trim()) {
      setErrorMessage('يرجى تحديد المساحة التقريبية بالمتر المربع.');
      return;
    }

    const fullMessage = generateMessage();
    const whatsappUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(fullMessage)}`;

    setFeedbackState('submitted');
    window.location.href = whatsappUrl;
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>طلب تسعير ومقايسة ميدانية مجانية</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            احصل على مقايسة دقيقة لمشروعك بأي منطقة بالمملكة
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
            حدد مواصفات ومساحة موقعك ليقوم مهندس المعاينة بإعداد عرض سعر أولي، وتنسيق موعد مجاني لرفع المناسيب وفحص استواء الأرضية بالموقع.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Information & Process Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            <div className="p-6 rounded-3xl bg-[#061019] text-white space-y-4 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#E59F48] to-transparent" />
              
              <div className="flex items-center gap-2 text-[#E59F48]">
                <Sparkles className="w-4 h-4" />
                <h4 className="font-black text-sm text-white">
                  خطوات ما بعد إرسال الطلب
                </h4>
              </div>

              <div className="space-y-3 text-xs text-slate-300 font-normal">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#132B40] text-amber-300 font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <span>تواصل فوري من المهندس المشرف هاتفياً أو عبر واتساب لمراجعة تفاصيل الموقع.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#132B40] text-amber-300 font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <span>معاينة ميدانية مجانية بالموقع لرفع المقاسات الدقيقة وفحص الميول وحالة الدفان.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#132B40] text-amber-300 font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <span>تسليم جدول كميات رسمي ومفصل لنوع البلاط، وسماكة البلدورات، وتكلفة التركيب.</span>
                </div>
              </div>
            </div>

            {/* Live WhatsApp Draft Preview Box */}
            <div className="p-5 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-right space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black text-[#061019]">
                  <FileText className="w-4 h-4 text-[#D9822B]" />
                  <span>معاينة مسودة الطلب المباشرة:</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-[#061019] bg-white px-2.5 py-1 rounded-lg border border-slate-200 cursor-pointer shadow-2xs"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ النص</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-[11px] text-slate-600 font-mono leading-relaxed max-h-40 overflow-y-auto whitespace-pre-line">
                {generateMessage()}
              </div>
            </div>

            {/* Fast Direct Contact Callout */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-3">
              <div className="font-bold text-[#061019]">تفضل التحدث المباشر مع المهندس؟</div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <a
                  href={CONTACT_INFO.callUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#061019] hover:bg-[#132B40] rounded-xl font-bold text-white transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E59F48]" />
                  <span dir="ltr">{CONTACT_INFO.phone}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold transition-colors text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>واتساب فوري</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(6,16,25,0.06)] text-right">
            
            {feedbackState === 'submitted' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-black text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>تم تجهيز الطلب وتحويلك لمحادثة واتساب الرسمية</span>
                </div>
                <p className="text-xs text-emerald-800">
                  إذا لم تفتح نافذة واتساب تلقائياً، اضغط على الزر أدناه لإرسال الرسالة مباشرة:
                </p>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-black shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>فتح محادثة واتساب الآن</span>
                </a>
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#061019] mb-1.5">
                    الاسم الكريم *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: م. سعود القحطاني"
                    required
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#061019] mb-1.5">
                    رقم الجوال السعودي *
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05xxxxxxxx"
                    required
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none text-right font-mono transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#061019] mb-1.5">
                    المدينة / المنطقة *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none transition-all cursor-pointer shadow-2xs"
                  >
                    {saudiCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#061019] mb-1.5">
                    الحي أو المخطط
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="مثال: حي الياسمين / طريق الملك سلمان"
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#061019] mb-1.5">
                    نوع الخدمة المطلوبة *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none transition-all cursor-pointer shadow-2xs"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#061019] mb-1.5">
                    المساحة التقديرية (م²) *
                  </label>
                  <input
                    type="number"
                    value={formData.areaSquareMeters}
                    onChange={(e) => setFormData({ ...formData, areaSquareMeters: e.target.value })}
                    placeholder="مثال: 150"
                    required
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none font-mono transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Quick Area Clickable Chips */}
              <div className="space-y-1.5">
                <span className="block text-[11px] font-bold text-slate-500">
                  اختيار سريع للمساحة التقريبية (م²):
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickAreaChips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setFormData({ ...formData, areaSquareMeters: chip.replace('+', '') })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all border cursor-pointer ${
                        formData.areaSquareMeters === chip.replace('+', '')
                          ? 'bg-[#061019] text-amber-300 border-[#061019]'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {chip} م²
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#061019] mb-1.5">
                  ملاحظات أو مواصفات إضافية (اختياري)
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="مثال: نوع التربة دفان قديم، مطلوب توريد إنترلوك 8 سم، يوجد غرف تفتيش تحتاج تعديل مناسيب..."
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:border-[#E59F48] focus:ring-1 focus:ring-[#E59F48] focus:outline-none resize-none shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-black text-[#061019] bg-gradient-to-l from-[#D9822B] to-[#E59F48] hover:from-[#B86B1B] hover:to-[#D9822B] rounded-2xl transition-all shadow-[0_4px_25px_-5px_rgba(217,130,43,0.4)] hover:shadow-amber-500/30 active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                <Send className="w-4 h-4 text-[#061019] shrink-0" />
                <span>إرسال طلب المقايسة للمشرف الفني فوراً</span>
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                🔒 يتم رفع المقاسات الفعلية وفحص الميول والتربة ميدانياً مع المهندس المشرف مجاناً
              </p>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

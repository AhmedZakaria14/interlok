'use client';

import React, { useState } from 'react';
import { PROJECTS, CONTACT_INFO } from '@/lib/constants';
import { ProjectItem } from '@/lib/types';
import PatternVisual from './PatternVisual';
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Play,
  Sparkles,
} from 'lucide-react';

interface ProjectsGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectsGallery({ limit, showFilters = true }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'كافة الأعمال' },
    { id: 'interlock', label: 'تركيب الإنترلوك' },
    { id: 'curbstone', label: 'البلدورات وحواف الأرصفة' },
    { id: 'sidewalk', label: 'إنشاء الأرصفة' },
    { id: 'garden', label: 'ممرات الحدائق' },
    { id: 'parking', label: 'مواقف السيارات' },
    { id: 'execution', label: 'مراحل التنفيذ والتجهيز' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleOpenLightbox = (project: ProjectItem) => {
    setSelectedProject(project);
    setZoomLevel(1);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
    setZoomLevel(1);
    setIsVideoModalOpen(false);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = displayedProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % displayedProjects.length;
    setSelectedProject(displayedProjects[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = displayedProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + displayedProjects.length) % displayedProjects.length;
    setSelectedProject(displayedProjects[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <section id="projects" className="py-16 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#D9822B] tracking-wide mb-3">
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
            <span>معرض الأعمال والمشاريع المنفذة</span>
            <span className="w-5 h-0.5 bg-[#D9822B] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#061019] tracking-tight text-balance">
            نماذج أعمال الإنترلوك والبلدورات ومراحل التنفيذ
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal mt-4">
            استعرض نماذج توثيقية للأعمال المنجزة ومراحل الدك والتسوية الهندسية لمختلف أنواع المشاريع السكنية والتجارية بالمملكة.
          </p>
        </div>

        {/* Category Filters: Swipeable horizontal bar on mobile */}
        {showFilters && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all shrink-0 cursor-pointer active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-[#061019] text-[#E59F48] shadow-md border border-[#E59F48]/40'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#E59F48]/60 shadow-[0_4px_20px_-4px_rgba(6,16,25,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(6,16,25,0.12)] transition-all duration-300 flex flex-col justify-between group text-right hover:-translate-y-1"
            >
              {/* Image Container with Zoom Affordance */}
              <div
                className="relative h-52 sm:h-60 bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => handleOpenLightbox(project)}
              >
                <PatternVisual
                  type={project.patternType || 'herringbone'}
                  title={project.categoryLabel}
                  className="transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover/Tap overlay hint */}
                <div className="absolute inset-0 bg-[#061019]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="p-3 rounded-full bg-white text-[#061019] shadow-xl hover:scale-110 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Category label indicator */}
                <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 bg-[#061019]/90 text-amber-300 rounded-lg shadow-2xs border border-white/10 backdrop-blur-xs">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Information Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-black text-base sm:text-lg text-[#061019] group-hover:text-[#D9822B] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Metadata details */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                  {project.areaEstimate && (
                    <div>
                      <span className="text-[#D97706] font-bold">المساحة: </span>
                      <span>{project.areaEstimate}</span>
                    </div>
                  )}
                  {project.thickness && (
                    <div>
                      <span className="text-[#D97706] font-bold">السماكة: </span>
                      <span>{project.thickness}</span>
                    </div>
                  )}
                </div>

                {/* Action Strip */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenLightbox(project)}
                    className="text-xs font-bold text-[#081522] hover:text-[#D97706] transition-colors flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>معاينة التفاصيل</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص تنفيذ عمل مشابه لـ: ${project.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-500 hover:text-[#25D366] transition-colors"
                    title="طلب تسعير مشابه عبر واتساب"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Documentation Spotlight Card */}
        <div className="mt-12 sm:mt-16 bg-[#081522] text-white rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center text-right">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E49B45] uppercase tracking-wider">
                <Play className="w-3.5 h-3.5 fill-[#E49B45]" />
                <span>توثيق مرئي للمشاريع الميدانية بالمملكة</span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white">
                شاهد مراحل تسوية ودك وتثبيت الإنترلوك والبلدورات في الميدان
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                نوثق خطوات التأسيس الأرضي بالدكاك الميكانيكي، رش الماء، وفرش الرمل النقي، لضمان استقامة البلاط وتصريف المطر بكفاءة عالية.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <button
                onClick={() => {
                  setSelectedProject(PROJECTS[5]);
                  setIsVideoModalOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-black text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                <Play className="w-4 h-4 fill-[#081522]" />
                <span>مشاهدة فيديو الموقع الميداني</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Mobile Scroll Protection */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-white text-[#1E293B] rounded-3xl shadow-2xl border border-slate-200 text-right my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-3.5 sm:p-4 border-b border-slate-200 bg-[#F8FAFC]">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[11px] sm:text-xs font-bold text-[#081522] px-2 py-0.5 rounded-lg bg-white border border-slate-300 shrink-0">
                  {selectedProject.categoryLabel}
                </span>
                <h4 className="font-bold text-xs sm:text-base text-[#081522] truncate">
                  {selectedProject.title}
                </h4>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setZoomLevel(zoomLevel === 1 ? 1.3 : 1)}
                  className="p-2 text-slate-500 hover:text-[#081522] rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                  title="تكبير / تصغير"
                  aria-label="تكبير أو تصغير الصورة"
                >
                  {zoomLevel === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleCloseLightbox}
                  className="p-2 text-slate-500 hover:text-[#081522] rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                  title="إغلاق"
                  aria-label="إغلاق نافذة المعاينة"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Visual Area */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-100 overflow-hidden flex items-center justify-center">
              {isVideoModalOpen ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-[#081522] text-white space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E49B45] text-[#081522] flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#081522] ml-1" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm sm:text-base text-white">معاينة فيديو مرحلة التجهيز والدك</h5>
                    <p className="text-xs text-slate-300 max-w-md">
                      فيديو يوضح استخدام الرصاصة الميكانيكية لدمج طبقات الصبيز وتسوية فرشة الرمل تحت أوتار الخيط قبل رصف البلاط.
                    </p>
                  </div>
                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، أود استلام مقاطع الفيديو التفصيلية لأعمالكم الميدانية المنفذة.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>طلب ملفات الفيديو الكاملة عبر واتساب</span>
                  </a>
                </div>
              ) : (
                <div
                  className="w-full h-full transition-transform duration-300 flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <PatternVisual
                    type={selectedProject.patternType || 'herringbone'}
                    title={selectedProject.title}
                  />
                </div>
              )}

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all cursor-pointer"
                aria-label="المشروع السابق"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all cursor-pointer"
                aria-label="المشروع التالي"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Info Footer */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-200 space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {selectedProject.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-semibold text-[11px] sm:text-xs">
                  {selectedProject.areaEstimate && (
                    <span><strong>المساحة: </strong>{selectedProject.areaEstimate}</span>
                  )}
                  {selectedProject.thickness && (
                    <span><strong>السماكة: </strong>{selectedProject.thickness}</span>
                  )}
                  {selectedProject.paverType && (
                    <span><strong>النوع: </strong>{selectedProject.paverType}</span>
                  )}
                </div>

                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص مشروع: ${selectedProject.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#081522] bg-[#E49B45] hover:bg-[#D18933] rounded-xl transition-colors cursor-pointer text-center active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>طلب تسعير لهذا النموذج عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

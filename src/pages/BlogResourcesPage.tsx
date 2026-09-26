import React from 'react';
import { BLOG_RESOURCES } from '../constants/data';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

interface BlogResourcesPageProps {
  onNavigate: (page: string) => void;
}

export const BlogResourcesPage: React.FC<BlogResourcesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Knowledge Base
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            BLOG & ISLAMIC RESOURCES
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Beneficial articles, Tajweed pronunciation guidelines, and family Quran study advice.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_RESOURCES.map((article, i) => (
              <div
                key={i}
                className="bg-[#FAF7F0] rounded-2xl p-7 border border-[#0B3D2E]/10 flex flex-col justify-between hover:border-[#C6A15B]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#0B3D2E] bg-white px-2.5 py-1 rounded-full border border-[#0B3D2E]/10">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#68736D] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0B3D2E] mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E2421]/75 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B3D2E]/10">
                  <button
                    type="button"
                    onClick={() => onNavigate('courses')}
                    className="text-xs font-semibold text-[#0B3D2E] hover:text-[#164C3B] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore Related Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#FAF7F0] rounded-2xl border border-[#0B3D2E]/10 text-center max-w-2xl mx-auto">
            <h4 className="font-serif text-xl font-bold text-[#0B3D2E] mb-2">
              Free Learning Materials for Students
            </h4>
            <p className="text-xs text-[#1E2421]/75 mb-4">
              All enrolled students receive free digital copies of Noorani Qaida, Tajweed reference charts, and daily Dua workbooks.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
            >
              Start Free Trial Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

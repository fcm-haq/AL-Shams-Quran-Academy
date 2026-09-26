import React from 'react';
import { QURAN_QUOTE } from '../constants/data';

export const QuranQuote: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F0] border-y border-[#0B3D2E]/10 relative overflow-hidden">
      {/* Subtle background ambient geometric accent */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle decorative gold divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-10 h-[1px] bg-[#C6A15B]" aria-hidden="true" />
          <span className="w-2 h-2 rotate-45 border border-[#C6A15B]" aria-hidden="true" />
          <span className="w-10 h-[1px] bg-[#C6A15B]" aria-hidden="true" />
        </div>

        {/* Traditional Arabic Text */}
        <p
          lang="ar"
          dir="rtl"
          className="text-2xl sm:text-3xl lg:text-4xl text-[#0B3D2E] font-serif mb-6 leading-loose tracking-wide select-none"
        >
          {QURAN_QUOTE.arabic}
        </p>

        {/* English Translation */}
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B3D2E] font-medium leading-relaxed tracking-tight max-w-3xl mx-auto mb-5 italic">
          {QURAN_QUOTE.english}
        </blockquote>

        {/* Source Citation */}
        <cite className="block text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#C6A15B] font-semibold not-italic">
          {QURAN_QUOTE.source}
        </cite>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../constants/data';

interface ConversionCtaProps {
  onOpenTrialModal: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="bg-[#0B3D2E] text-white py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative ambient lighting and subtle Islamic pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A15B] mb-3 block">
          Begin with Confidence
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          START YOUR QURAN JOURNEY TODAY
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
          Take the first step toward consistent Quran learning from the comfort of your home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] bg-white hover:bg-[#FAF7F0] active:scale-[0.99] rounded-lg shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            <span>BOOK YOUR TRIAL CLASS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0B3D2E]" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#FAF7F0] border border-white/30 hover:border-white/60 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap"
          >
            CONTACT US
          </a>
        </div>

        <p className="text-xs text-white/60 font-medium tracking-wide">
          Limited slots — book your trial class today.
        </p>
      </div>
    </section>
  );
};

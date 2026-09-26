import React from 'react';

export const BeginWithConfidenceBanner: React.FC = () => {
  return (
    <section className="bg-[#0B3D2E] text-white py-16 lg:py-20 relative overflow-hidden">
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

        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Take the first step toward consistent Quran learning from the comfort of your home with patient, dedicated guidance.
        </p>
      </div>
    </section>
  );
};

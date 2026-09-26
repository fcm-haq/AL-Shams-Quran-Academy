import React, { useState } from 'react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { BRAND } from '../constants/data';
import { heroQuranImg } from '../assets/images';

interface HeroProps {
  onOpenTrialModal: () => void;
  onExploreCourses?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal, onExploreCourses }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient gradient & geometric warmth */}
      <div className="absolute inset-0 bg-islamic-stars opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0B3D2E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Conversions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-[#0B3D2E]">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#0B3D2E]">
                {BRAND.name}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B3D2E] leading-[1.08] text-balance">
              LEARN QURAN ONLINE
            </h1>

            {/* Supporting Statement / Slogan */}
            <p className="font-serif text-xl sm:text-2xl text-[#C6A15B] font-medium italic mt-3.5 mb-4">
              {BRAND.tagline}
            </p>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#1E2421]/80 leading-relaxed max-w-xl mb-8">
              Learn the Quran online with personalized guidance, flexible timings, and dedicated teaching for kids, teens, and adults — all from the comfort of your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] active:scale-[0.99] rounded-lg shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>BOOK YOUR TRIAL CLASS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C6A15B]" />
              </button>

              {onExploreCourses ? (
                <button
                  type="button"
                  onClick={onExploreCourses}
                  className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B3D2E] hover:text-[#164C3B] bg-white hover:bg-[#FAF7F0] border border-[#0B3D2E]/20 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
                >
                  EXPLORE COURSES
                </button>
              ) : (
                <a
                  href="#courses"
                  className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B3D2E] hover:text-[#164C3B] bg-white hover:bg-[#FAF7F0] border border-[#0B3D2E]/20 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  EXPLORE COURSES
                </a>
              )}
            </div>

            {/* Hero Trust Indicator */}
            <div className="pt-6 border-t border-[#0B3D2E]/10 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#1E2421]/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-semibold text-[#0B3D2E] tracking-tight">
                  {BRAND.experienceYears} YEARS OF TEACHING EXPERIENCE
                </span>
              </div>
              <span className="hidden sm:inline text-[#C6A15B]">·</span>
              <span className="text-[#68736D] font-medium tracking-wide">
                {BRAND.experienceTagline}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C6A15B]/30 -z-10" />

              <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-[#0B3D2E]/10 aspect-[4/3] sm:aspect-[16/11]">
                {!imgError ? (
                  <img
                    src={heroQuranImg}
                    alt="Holy Quran on handcrafted wooden rehal with warm natural light"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B3D2E] to-[#164C3B] text-[#FAF7F0] text-center">
                    <BookOpen className="w-12 h-12 text-[#C6A15B] mb-3" />
                    <p className="font-serif text-2xl font-bold tracking-wide">
                      Al Shams Quran Academy
                    </p>
                    <p className="text-xs text-[#FAF7F0]/80 mt-1 max-w-xs">
                      Learn Quran. Live by Quran. Lead a Better Life.
                    </p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/30 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-[#0B3D2E]/10 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
                    <span className="text-xs font-semibold text-[#0B3D2E]">
                      Live 1-on-1 Online Sessions
                    </span>
                  </div>
                  <span className="text-[11px] text-[#68736D] font-medium">
                    Worldwide Availability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

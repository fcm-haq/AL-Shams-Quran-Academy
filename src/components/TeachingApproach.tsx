import React, { useState } from 'react';
import { Award, BookOpen, Check, Heart, Sparkles } from 'lucide-react';
import { BRAND } from '../constants/data';
import { teachingStudyImg } from '../assets/images';

export const TeachingApproach: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Professional Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle gold accent frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C6A15B]/30 -z-10" />

              <div className="relative rounded-xl overflow-hidden bg-[#FAF7F0] shadow-md border border-[#0B3D2E]/10 aspect-[4/3] sm:aspect-[4/3.5]">
                {!imgError ? (
                  <img
                    src={teachingStudyImg}
                    alt="Online 1-on-1 Quran study session with notebook and holy book"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B3D2E] to-[#164C3B] text-[#FAF7F0] text-center">
                    <BookOpen className="w-10 h-10 text-[#C6A15B] mb-2" />
                    <p className="font-serif text-xl font-bold">Personalized Quran Guidance</p>
                    <p className="text-xs text-[#FAF7F0]/80 mt-1">One-to-One Online Tutoring</p>
                  </div>
                )}

                {/* Soft gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/25 via-transparent to-transparent pointer-events-none" />

                {/* Corner Credibility Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg border border-[#0B3D2E]/10 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B3D2E]">
                      {BRAND.experienceYears} Years of Teaching Experience
                    </p>
                    <p className="text-[11px] text-[#68736D]">
                      {BRAND.experienceTagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
                OUR APPROACH
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] tracking-tight leading-[1.15] mb-5">
              PERSONALIZED LEARNING WITH DEDICATED GUIDANCE
            </h2>

            <p className="text-base sm:text-lg text-[#1E2421]/80 leading-relaxed mb-6">
              At Al Shams Quran Academy, every student deserves attention, patience, and a learning experience suited to their needs. Our approach focuses on consistent learning, correct Quran recitation, understanding Islamic teachings, and helping students build a meaningful connection with the Quran.
            </p>

            <div className="w-full bg-[#FAF7F0] rounded-xl p-5 border border-[#0B3D2E]/10 mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D2E]">
                    Patience & Encouragement
                  </h4>
                  <p className="text-xs text-[#1E2421]/75 mt-0.5">
                    Never rush students through recitation rules; prioritize proper makharij articulation and confidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D2E]">
                    Flexible Scheduling
                  </h4>
                  <p className="text-xs text-[#1E2421]/75 mt-0.5">
                    Coordinated timings that adapt to school schedules, work hours, and international time differences.
                  </p>
                </div>
              </div>
            </div>

            {/* Credibility statement */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0B3D2E] font-medium">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>Dedicated Quran Education for Kids, Teens, and Adults</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

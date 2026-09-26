import React from 'react';
import { Award, BookOpen, Heart, ShieldCheck, Star, Users, CheckCircle2 } from 'lucide-react';
import { BRAND, WHY_CHOOSE_US } from '../constants/data';
import { teachingStudyImg } from '../assets/images';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              About Al Shams Quran Academy
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            ABOUT OUR ACADEMY & MISSION
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Committed to providing high-quality, authentic, and accessible Quran education to families worldwide with personalized care and Islamic values.
          </p>
        </div>
      </section>

      {/* Academy Overview & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#0B3D2E]/10 shadow-lg aspect-[4/3]">
                <img
                  src={teachingStudyImg}
                  alt="Islamic study desk and authentic Quran teaching"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0B3D2E] text-white p-5 rounded-xl shadow-md border border-[#C6A15B]/30 max-w-xs">
                <p className="text-xs font-semibold text-[#C6A15B] uppercase tracking-wider">
                  Our Commitment
                </p>
                <p className="font-serif text-lg font-bold mt-1">
                  {BRAND.experienceYears} Years of Dedicated Service
                </p>
                <p className="text-xs text-white/80 mt-1">
                  Serving students across the UK, USA, Canada, Australia, and worldwide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] block mb-2">
                  Who We Are
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
                  Learn Quran. Live by Quran. Lead a Better Life.
                </h2>
              </div>

              <p className="text-base text-[#1E2421]/80 leading-relaxed">
                <strong>Al Shams Quran Academy</strong> is an established online educational institution that brings live, one-on-one Quran, Tajweed, and Islamic studies directly to your home. We bridge the gap for Muslim families living abroad or with demanding schedules, ensuring no child or adult misses the opportunity to connect with the Book of Allah.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-[#FAF7F0] rounded-xl border border-[#0B3D2E]/10">
                  <div className="w-8 h-8 rounded-md bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center mb-3">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B3D2E] mb-1">
                    Our Mission
                  </h3>
                  <p className="text-xs text-[#1E2421]/75 leading-relaxed">
                    To nurture a deep love for the Quran in every student through gentle, patient, and correct classical recitation.
                  </p>
                </div>

                <div className="p-5 bg-[#FAF7F0] rounded-xl border border-[#0B3D2E]/10">
                  <div className="w-8 h-8 rounded-md bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center mb-3">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B3D2E] mb-1">
                    Our Teachers
                  </h3>
                  <p className="text-xs text-[#1E2421]/75 leading-relaxed">
                    Qualified, background-checked male and female teachers with certified Tajweed and proven pedagogical skill.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
                >
                  Book a Free Trial Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-[#FAF7F0] border-t border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
              WHY CHOOSE AL SHAMS?
            </h2>
            <p className="mt-2 text-base text-[#1E2421]/75">
              A personalized approach designed to make learning comfortable, accessible, and spiritually rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-[#0B3D2E]/10 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E]">
                    <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />
                  </div>
                  <span className="text-xs font-serif font-bold text-[#C6A15B]/70">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B3D2E] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#1E2421]/75 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

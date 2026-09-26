import React from 'react';
import { TEACHERS_LIST } from '../constants/data';
import { UserCheck, Shield, CheckCircle2, Heart, Award, ArrowRight } from 'lucide-react';
import { quranDetailImg } from '../assets/images';

interface TeachersPageProps {
  onNavigate: (page: string, category?: string) => void;
}

export const TeachersPage: React.FC<TeachersPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Dedicated Instructors
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            MALE & FEMALE QURAN TEACHERS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Learn from verified, certified Quran teachers dedicated to patience, proper Tajweed articulation, and an encouraging learning atmosphere.
          </p>
        </div>
      </section>

      {/* Teachers Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TEACHERS_LIST.map((group) => (
              <div
                key={group.id}
                className="bg-[#FAF7F0] rounded-2xl p-8 border border-[#0B3D2E]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] mb-5 shadow-xs">
                    <UserCheck className="w-6 h-6 text-[#C6A15B]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B3D2E] mb-3">
                    {group.category}
                  </h3>
                  <p className="text-sm text-[#1E2421]/80 leading-relaxed mb-6">
                    {group.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#0B3D2E]/10 mb-8">
                    {group.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#1E2421]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('contact', `Class with ${group.category}`)}
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
                >
                  Request a {group.category} Trial
                </button>
              </div>
            ))}
          </div>

          {/* Teacher Criteria Reassurance */}
          <div className="mt-16 bg-[#FAF7F0] rounded-2xl p-8 border border-[#0B3D2E]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#C6A15B] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#0B3D2E]">Certified & Vetted</h4>
                <p className="text-xs text-[#1E2421]/75 mt-1">Rigorous vetting process verifying Tajweed certification and character.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#C6A15B] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#0B3D2E]">Patience with Kids</h4>
                <p className="text-xs text-[#1E2421]/75 mt-1">Gentle techniques designed to build confidence rather than frustration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#C6A15B] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#0B3D2E]">One-on-One Attention</h4>
                <p className="text-xs text-[#1E2421]/75 mt-1">100% of lesson time dedicated exclusively to one student’s personal growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

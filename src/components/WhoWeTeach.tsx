import React from 'react';
import { Baby, Users, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { AUDIENCE_LEVELS } from '../constants/data';

interface WhoWeTeachProps {
  onOpenTrialModal: (category?: string) => void;
}

const audienceIcons = {
  KIDS: Baby,
  TEENS: GraduationCap,
  ADULTS: Users,
};

export const WhoWeTeach: React.FC<WhoWeTeachProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="who-we-teach" className="py-20 lg:py-28 bg-[#FAF7F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Tailored Programs
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            QURAN LEARNING FOR EVERY AGE
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#1E2421]/75 leading-relaxed">
            Whether you&apos;re beginning your Quran journey or looking to improve your recitation, Al Shams Quran Academy offers learning options for different ages and needs.
          </p>
        </div>

        {/* 3 Large Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {AUDIENCE_LEVELS.map((item) => {
            const Icon = audienceIcons[item.category as keyof typeof audienceIcons] || Users;

            return (
              <div
                key={item.category}
                className="bg-white rounded-2xl p-8 border border-[#0B3D2E]/10 shadow-xs hover:border-[#C6A15B]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E]">
                      <Icon className="w-6 h-6 text-[#C6A15B]" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#0B3D2E] border-b border-[#C6A15B]/40 pb-0.5">
                      {item.ageRange}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="font-serif text-3xl font-bold text-[#0B3D2E] tracking-tight mb-2">
                    {item.category}
                  </h3>
                  <p className="text-xs font-medium text-[#C6A15B] uppercase tracking-wider mb-4">
                    {item.highlight}
                  </p>
                  <p className="text-sm text-[#1E2421]/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-[#0B3D2E]/10 mb-6">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1E2421]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D2E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => onOpenTrialModal(`Class for ${item.category} (${item.ageRange})`)}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] hover:text-white bg-[#FAF7F0] hover:bg-[#0B3D2E] border border-[#0B3D2E]/15 rounded-lg transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book Trial for {item.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

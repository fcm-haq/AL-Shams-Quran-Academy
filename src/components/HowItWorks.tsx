import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants/data';
import { CalendarCheck, PhoneCall, Video, TrendingUp } from 'lucide-react';

const stepIcons = [PhoneCall, CalendarCheck, Video, TrendingUp];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Simple & Straightforward
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            LEARNING THE QURAN IS SIMPLE
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#1E2421]/75 leading-relaxed">
            Get started in four seamless steps with personalized scheduling and direct teacher support.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-[1.5px] bg-gradient-to-r from-[#0B3D2E]/10 via-[#C6A15B]/40 to-[#0B3D2E]/10 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const Icon = stepIcons[idx] || PhoneCall;

              return (
                <div key={item.step} className="flex flex-col items-start sm:items-center text-left sm:text-center group">
                  {/* Step Number + Icon Bubble */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#FAF7F0] border-2 border-[#0B3D2E]/15 group-hover:border-[#C6A15B] flex items-center justify-center text-[#0B3D2E] shadow-xs transition-colors duration-200">
                      <Icon className="w-6 h-6 text-[#0B3D2E] group-hover:text-[#C6A15B] transition-colors" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0B3D2E] text-[#C6A15B] text-[11px] font-bold flex items-center justify-center border-2 border-white">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-[#0B3D2E] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1E2421]/75 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

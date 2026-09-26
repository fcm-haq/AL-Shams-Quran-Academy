import React from 'react';
import { HOW_IT_WORKS_STEPS, PLATFORMS } from '../constants/data';
import { CalendarCheck, PhoneCall, Video, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

const stepIcons = [PhoneCall, CalendarCheck, Video, TrendingUp];

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Simple & Transparent Process
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            HOW IT WORKS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Begin your online Quran journey in 4 easy steps from the comfort of your home with complete scheduling flexibility.
          </p>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || PhoneCall;
              return (
                <div
                  key={step.step}
                  className="bg-[#FAF7F0] rounded-2xl p-7 border border-[#0B3D2E]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] shadow-xs">
                        <Icon className="w-6 h-6 text-[#0B3D2E]" />
                      </div>
                      <span className="font-serif text-2xl font-bold text-[#C6A15B]">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#0B3D2E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1E2421]/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#0B3D2E]/10 flex items-center gap-2 text-xs font-semibold text-[#0B3D2E]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>No upfront fee</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Register for Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Classroom Technology */}
      <section className="py-16 bg-[#FAF7F0] border-t border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0B3D2E]">
              Live 1-on-1 Classes On Your Favorite Device
            </h2>
            <p className="text-sm text-[#1E2421]/75 mt-2">
              Our teachers are equipped to deliver live interactive screen-sharing lessons over Zoom, Skype, and WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-xl p-6 border border-[#0B3D2E]/10 text-center"
              >
                <h3 className="font-serif text-xl font-bold text-[#0B3D2E]">{platform.name}</h3>
                <span className="text-[11px] font-semibold text-[#C6A15B] uppercase block mt-1 mb-2">
                  {platform.badge}
                </span>
                <p className="text-xs text-[#1E2421]/75">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Award, GraduationCap, User, Clock, Home, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants/data';

const iconMap = {
  Award: Award,
  UserCheck: GraduationCap,
  User: User,
  Clock: Clock,
  Home: Home,
  ShieldCheck: ShieldCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FAF7F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              The Al Shams Advantage
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            WHY CHOOSE AL SHAMS?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#1E2421]/75 leading-relaxed">
            A personalized approach to Quran education designed to make learning accessible, comfortable, and effective.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Award;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl p-7 border border-[#0B3D2E]/10 shadow-xs hover:border-[#C6A15B]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] group-hover:bg-[#0B3D2E] group-hover:text-[#FAF7F0] transition-colors duration-200">
                      <Icon className="w-6 h-6 text-[#C6A15B] group-hover:text-[#C6A15B]" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-serif font-bold text-[#C6A15B]/60 tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0B3D2E] mb-2.5 group-hover:text-[#164C3B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#1E2421]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

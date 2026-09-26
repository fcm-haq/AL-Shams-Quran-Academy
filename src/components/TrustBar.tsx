import React from 'react';
import { Award, Clock, HeartHandshake, Laptop, ShieldCheck, UserCheck } from 'lucide-react';
import { BRAND } from '../constants/data';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Award,
      title: `${BRAND.experienceYears} Years Experience`,
      subtitle: 'Dedicated & Passionate',
    },
    {
      icon: UserCheck,
      title: 'Qualified Teacher',
      subtitle: 'Patient & Student-Focused',
    },
    {
      icon: Laptop,
      title: 'One-to-One Classes',
      subtitle: 'Custom Learning Pace',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      subtitle: 'Any Timezone',
    },
    {
      icon: ShieldCheck,
      title: '100% Satisfaction',
      subtitle: 'Quality Guaranteed',
    },
  ];

  return (
    <section className="bg-white border-y border-[#0B3D2E]/10 py-7 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[#0B3D2E]/8">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-4' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#0B3D2E]/10 text-[#0B3D2E] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C6A15B]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B3D2E] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#68736D] truncate">
                    {item.subtitle}
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

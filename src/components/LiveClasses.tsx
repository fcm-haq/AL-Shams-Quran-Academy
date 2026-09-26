import React from 'react';
import { Video, Laptop, MessageCircle, Check } from 'lucide-react';
import { PLATFORMS } from '../constants/data';

export const LiveClasses: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zoom':
        return Video;
      case 'Skype':
        return Laptop;
      case 'WhatsApp':
        return MessageCircle;
      default:
        return Video;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F0] border-t border-[#0B3D2E]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Accessible Learning
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E] tracking-tight">
            LIVE CLASSES, WHEREVER YOU ARE
          </h2>
          <p className="mt-3 text-base text-[#1E2421]/75 leading-relaxed">
            Join your Quran lessons through familiar online platforms and learn directly from your teacher.
          </p>
        </div>

        {/* Supporting Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLATFORMS.map((platform) => {
            const Icon = getIcon(platform.name);

            return (
              <div
                key={platform.name}
                className="bg-white rounded-xl p-6 border border-[#0B3D2E]/10 shadow-xs flex flex-col items-center text-center hover:border-[#C6A15B]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] mb-4">
                  <Icon className="w-6 h-6 text-[#0B3D2E]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B3D2E] mb-1">
                  {platform.name}
                </h3>
                <span className="text-[11px] font-medium text-[#C6A15B] tracking-wider uppercase mb-2.5">
                  {platform.badge}
                </span>
                <p className="text-xs text-[#1E2421]/75 leading-relaxed">
                  {platform.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#68736D] mt-8">
          Compatible with any laptop, desktop, tablet, or smartphone with internet connection.
        </p>
      </div>
    </section>
  );
};

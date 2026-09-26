import React, { useState } from 'react';
import { FAQS } from '../constants/data';
import { ChevronDown, HelpCircle, Mail, MessageCircle } from 'lucide-react';
import { BRAND } from '../constants/data';

interface FaqPageProps {
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Frequently Asked Questions
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            QUESTIONS & ANSWERS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Everything you need to know about our classes, equipment, trial lessons, and timings.
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F0] rounded-xl border border-[#0B3D2E]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-lg font-bold text-[#0B3D2E]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C6A15B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#1E2421]/80 leading-relaxed border-t border-[#0B3D2E]/5 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-12 p-8 bg-[#FAF7F0] rounded-2xl border border-[#0B3D2E]/10 text-center">
            <HelpCircle className="w-8 h-8 text-[#C6A15B] mx-auto mb-2" />
            <h3 className="font-serif text-xl font-bold text-[#0B3D2E]">Have a different question?</h3>
            <p className="text-xs sm:text-sm text-[#1E2421]/75 mt-1 mb-4">
              Feel free to get in touch with us anytime. We are happy to help answer your inquiries.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

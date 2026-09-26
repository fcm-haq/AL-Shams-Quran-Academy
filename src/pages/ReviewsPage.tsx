import React from 'react';
import { REVIEWS } from '../constants/data';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Student & Parent Experiences
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            REVIEWS & TESTIMONIALS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Read how Al Shams Quran Academy has helped students, children, and parents achieve confidence in their recitation.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-[#FAF7F0] rounded-2xl p-8 border border-[#0B3D2E]/10 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C6A15B]">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#C6A15B]/40" />
                  </div>

                  <p className="text-sm text-[#1E2421]/85 italic leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B3D2E]/10">
                  <h4 className="font-serif text-lg font-bold text-[#0B3D2E]">{review.name}</h4>
                  <p className="text-xs text-[#68736D]">{review.location} • {review.course}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0B3D2E] text-white rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Experience the Teaching Firsthand
            </h3>
            <p className="text-sm text-white/80 max-w-md mx-auto mb-6">
              Take a free trial class today with no financial obligation and evaluate the instructor yourself.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] bg-white hover:bg-[#FAF7F0] rounded-lg transition-colors cursor-pointer"
            >
              Book Your Free Trial Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

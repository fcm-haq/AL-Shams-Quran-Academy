import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TeachingApproach } from '../components/TeachingApproach';
import { HowItWorks } from '../components/HowItWorks';
import { QuranQuote } from '../components/QuranQuote';
import { ConversionCta } from '../components/ConversionCta';
import { COURSES } from '../constants/data';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, courseName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        onOpenTrialModal={() => onNavigate('contact')}
        onExploreCourses={() => onNavigate('courses')}
      />

      {/* Trust & Credibility Bar */}
      <TrustBar />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Courses Preview */}
      <section className="py-20 bg-white border-y border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
                  Academic Programs
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
                FEATURED COURSES
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1E2421]/75 max-w-xl">
                Structured one-to-one learning tailored for students of all ages.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] hover:text-[#164C3B] group py-2 cursor-pointer"
            >
              <span>View All 6 Courses & Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSES.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="bg-[#FAF7F0] rounded-xl p-6 border border-[#0B3D2E]/10 flex flex-col justify-between hover:border-[#C6A15B]/50 transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] mb-4">
                    <BookOpen className="w-5 h-5 text-[#0B3D2E]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B3D2E] mb-1">
                    {course.title}
                  </h3>
                  <p className="text-[11px] font-medium text-[#C6A15B] uppercase tracking-wider mb-2.5">
                    {course.subtitle}
                  </p>
                  <p className="text-xs text-[#1E2421]/75 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B3D2E]/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('courses')}
                    className="text-xs font-medium text-[#0B3D2E] hover:underline cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', course.title)}
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 bg-[#0B3D2E] text-white hover:bg-[#164C3B] rounded-md transition-colors cursor-pointer"
                  >
                    Book Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <TeachingApproach />

      {/* How It Works */}
      <HowItWorks />

      {/* Quran Quote */}
      <QuranQuote />

      {/* Conversion Banner */}
      <ConversionCta onOpenTrialModal={() => onNavigate('contact')} />
    </>
  );
};

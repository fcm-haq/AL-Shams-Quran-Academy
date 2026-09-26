import React from 'react';
import { Courses } from '../components/Courses';
import { WhoWeTeach } from '../components/WhoWeTeach';
import { LiveClasses } from '../components/LiveClasses';
import { BeginWithConfidenceBanner } from '../components/BeginWithConfidenceBanner';

interface CoursesPageProps {
  onNavigate: (page: string, courseName?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-[#FAF7F0] pb-12 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Academic Offerings
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            COURSES & PROGRAMS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Personalized Quran, Tajweed, Hifz, and Islamic education designed with patience and structure for students of every age and skill level.
          </p>
        </div>
      </section>

      {/* Complete Course Catalog (All 6 Courses with curriculum expansion) */}
      <Courses onSelectCourseForTrial={(courseTitle) => onNavigate('contact', courseTitle)} />

      {/* Target Audiences: Kids, Teens, Adults */}
      <WhoWeTeach onOpenTrialModal={(category) => onNavigate('contact', category)} />

      {/* Live Classes Platforms */}
      <LiveClasses />

      {/* Elegant inspirational banner without repetitive trial buttons */}
      <BeginWithConfidenceBanner />
    </div>
  );
};

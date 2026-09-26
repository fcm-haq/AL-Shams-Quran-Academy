import React, { useState } from 'react';
import { BookOpen, Sparkles, BookmarkCheck, HeartHandshake, GraduationCap, Users, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../constants/data';

interface CoursesProps {
  onSelectCourseForTrial: (courseTitle: string) => void;
}

const iconComponents = {
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  BookmarkCheck: BookmarkCheck,
  HeartHandshake: HeartHandshake,
  GraduationCap: GraduationCap,
  Users: Users,
};

export const Courses: React.FC<CoursesProps> = ({ onSelectCourseForTrial }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Structured Curriculum
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            WHAT WE OFFER
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#1E2421]/75 leading-relaxed">
            Build your Quranic knowledge and strengthen your connection with the Quran through structured online learning.
          </p>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {COURSES.map((course) => {
            const Icon = iconComponents[course.iconName as keyof typeof iconComponents] || BookOpen;
            const isExpanded = expandedId === course.id;

            return (
              <div
                key={course.id}
                className="bg-[#FAF7F0] rounded-xl p-7 border border-[#0B3D2E]/10 hover:border-[#C6A15B]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon + Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] group-hover:bg-[#0B3D2E] group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-6 h-6 text-[#0B3D2E] group-hover:text-[#C6A15B]" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-medium text-[#68736D]">
                      {course.targetAudience.split('&')[0].trim()}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl font-bold text-[#0B3D2E] tracking-tight mb-1.5">
                    {course.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C6A15B] uppercase tracking-wider mb-3">
                    {course.subtitle}
                  </p>
                  <p className="text-sm text-[#1E2421]/80 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Expandable Key Focus Points */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#0B3D2E]/10 space-y-2 animate-fadeIn">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0B3D2E]">
                        Key Learning Areas:
                      </p>
                      <ul className="space-y-1.5">
                        {course.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#1E2421]/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Controls: Learn More + Book Trial */}
                <div className="pt-5 mt-4 border-t border-[#0B3D2E]/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(course.id)}
                    className="text-xs font-medium text-[#0B3D2E] hover:text-[#164C3B] inline-flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectCourseForTrial(course.title)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] hover:text-white bg-white hover:bg-[#0B3D2E] border border-[#0B3D2E]/20 px-3.5 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Book Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

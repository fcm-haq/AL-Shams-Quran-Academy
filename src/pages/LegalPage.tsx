import React, { useState } from 'react';
import { ShieldCheck, FileText, RefreshCw } from 'lucide-react';
import { BRAND } from '../constants/data';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'refund';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund'>(initialTab);

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E] block mb-2">
            Academy Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
            LEGAL & ACADEMY POLICIES
          </h1>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#0B3D2E]/10 mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'border-[#0B3D2E] text-[#0B3D2E]'
                : 'border-transparent text-[#68736D] hover:text-[#0B3D2E]'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'terms'
                ? 'border-[#0B3D2E] text-[#0B3D2E]'
                : 'border-transparent text-[#68736D] hover:text-[#0B3D2E]'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('refund')}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'refund'
                ? 'border-[#0B3D2E] text-[#0B3D2E]'
                : 'border-transparent text-[#68736D] hover:text-[#0B3D2E]'
            }`}
          >
            Refund Policy
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#0B3D2E]/10 shadow-xs leading-relaxed text-sm text-[#1E2421]/80 space-y-4">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0B3D2E]">Privacy Policy</h2>
              <p>
                At <strong>Al Shams Quran Academy</strong>, your privacy and family safety are of paramount importance to us.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E] pt-2">1. Personal Information Collection</h3>
              <p>
                We only collect necessary information such as student name, parent contact (email/WhatsApp), and timezone to schedule classes and provide educational updates. We never sell, rent, or trade your data to third parties.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E] pt-2">2. Respect for Modesty & Classroom Privacy</h3>
              <p>
                For female students and sisters, classes are strictly handled by dedicated female teachers. Video recording during live 1-on-1 sessions is strictly prohibited without explicit mutual parental consent.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0B3D2E]">Terms & Conditions</h2>
              <p>
                By enrolling or registering for classes with Al Shams Quran Academy, you agree to the following terms:
              </p>
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E] pt-2">1. Class Attendance & Punctuality</h3>
              <p>
                Students are requested to be ready online at least 3 minutes before class starts. If you need to reschedule a class, please notify us at least 4 to 6 hours in advance so a makeup class can be scheduled.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E] pt-2">2. Student Discipline & Respect</h3>
              <p>
                Our teachers maintain a gentle, encouraging environment. We expect respectful interaction from students during lesson hours.
              </p>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0B3D2E]">Refund Policy</h2>
              <p>
                We stand behind our teaching quality with a 100% satisfaction commitment.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E] pt-2">1. Free Trial Guarantee</h3>
              <p>
                You are never asked to pay before you have completed and evaluated your free trial class.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E] pt-2">2. Pro-Rata Refunds</h3>
              <p>
                If at any point during your monthly plan you wish to discontinue lessons, any remaining unused classes for that billing month will be refunded on a pro-rata basis without complications.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

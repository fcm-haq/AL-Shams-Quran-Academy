import React from 'react';
import { BookOpen, Mail, MessageCircle, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { BRAND } from '../constants/data';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigateTo = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08291F] text-[#FAF7F0] pt-16 pb-12 border-t border-[#0B3D2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info (Span 4) */}
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 mb-4 text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-md bg-[#0B3D2E] text-[#C6A15B] border border-white/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {BRAND.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] font-medium block">
                  Online Quran Academy
                </span>
              </div>
            </button>

            <p className="font-serif text-base text-[#C6A15B] italic mb-3">
              {BRAND.tagline}
            </p>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm mb-4">
              Providing certified, dedicated online Quran and Islamic studies education for students worldwide with flexible timings and personalized one-on-one attention.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C6A15B]">
              <ShieldCheck className="w-4 h-4" />
              <span>3+ Years of Dedicated Teaching Experience</span>
            </div>
          </div>

          {/* Column 2: Academics & Courses (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-4">
              Courses & Programs
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button type="button" onClick={() => navigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Noorani Qaida for Beginners
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Quran Reading (Nazra)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Quran with Tajweed Rules
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Quran Memorization (Hifz)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Quran Translation & Tafseer
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Islamic Studies & Daily Duas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academy Sitemap Links (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-4">
              Academy Directory
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button type="button" onClick={() => navigateTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About the Academy & Mission
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('teachers')} className="hover:text-white transition-colors cursor-pointer">
                  Male & Female Quran Teachers
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('how-it-works')} className="hover:text-white transition-colors cursor-pointer">
                  How It Works & Setup
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Monthly Plans & Packages
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Reviews & Parent Testimonials
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog & Islamic Learning Resources
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('login')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#C6A15B]" />
                  <span>Student Portal Login</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Trial Action (Span 2) */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-4">
              Free Trial Class
            </h4>
            <p className="text-xs text-white/70 mb-4">
              Evaluate our 1-on-1 teaching firsthand with zero obligation.
            </p>
            <button
              type="button"
              onClick={() => navigateTo('contact')}
              className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] bg-[#FAF7F0] hover:bg-white rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer mb-5"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-white/70 space-y-1">
              <p>Email: {BRAND.email}</p>
              <p>WhatsApp: {BRAND.whatsapp}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 Al Shams Quran Academy. All rights reserved.</p>

          {/* Legal Sitemap Links */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={() => navigateTo('legal')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => navigateTo('legal')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => navigateTo('legal')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

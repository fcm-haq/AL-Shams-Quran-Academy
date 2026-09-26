import React from 'react';
import { BookOpen, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND } from '../constants/data';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Courses & Programs', page: 'courses' },
    { label: 'Contact & Trial', page: 'contact' },
  ];

  return (
    <footer className="bg-[#08291F] text-[#FAF7F0] pt-16 pb-12 border-t border-[#0B3D2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Area 1: Brand & Slogan */}
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Dedicated online Quran and Islamic studies education for students worldwide, fostering spiritual growth, accurate Tajweed, and lifelong connection with the Holy Quran.
            </p>
          </div>

          {/* Area 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(link.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-white transition-colors duration-150 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Area 3: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-4">
              Official Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-2.5 text-white/80 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span className="break-all group-hover:underline">{BRAND.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/80">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>{BRAND.whatsapp}</span>
                </div>
              </li>
              <li className="text-xs text-white/60 pt-1">
                Available for international inquiries across all timezones.
              </li>
            </ul>
          </div>

          {/* Area 4: CTA Action */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-4">
              Get Started
            </h4>
            <p className="text-xs text-white/70 mb-4">
              Experience our one-on-one teaching with a trial lesson.
            </p>
            <button
              type="button"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] bg-[#FAF7F0] hover:bg-white rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 Al Shams Quran Academy. All rights reserved.</p>
          <p className="text-white/40 text-[11px]">
            Learn Quran · Live by Quran · Lead a Better Life
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { BookOpen, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
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
    <footer className="bg-[#08291F] text-[#FAF7F0] pt-14 pb-10 border-t border-[#0B3D2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-md bg-[#0B3D2E] text-[#C6A15B] border border-white/10 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block">
                  {BRAND.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] font-medium block">
                  Online Quran Academy
                </span>
              </div>
            </button>

            <p className="font-serif text-sm text-[#C6A15B] italic">
              {BRAND.tagline}
            </p>

            <p className="text-xs text-white/70 leading-relaxed max-w-md">
              Learn Quran, Tajweed, and Islamic studies with patient, dedicated guidance from the comfort of your home.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Courses & Programs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Trial
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{BRAND.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>WhatsApp: {BRAND.whatsapp}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>© 2026 Al Shams Quran Academy. All rights reserved.</p>
          <p className="text-[11px] text-[#C6A15B]">
            Learn Quran • Live by Quran • Lead a Better Life
          </p>
        </div>
      </div>
    </footer>
  );
};

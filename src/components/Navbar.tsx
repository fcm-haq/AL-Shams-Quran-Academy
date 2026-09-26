import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 3 clean, uncluttered pages as initially designed
  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Courses & Programs', page: 'courses' },
    { label: 'Contact & Trial', page: 'contact' },
  ];

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#0B3D2E]/10 shadow-xs py-3'
          : 'bg-[#FAF7F0] border-b border-[#0B3D2E]/5 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#0B3D2E] rounded-sm text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-md bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105">
              <BookOpen className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0B3D2E] leading-none">
                Al Shams
              </span>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#68736D] mt-0.5">
                Quran Academy
              </span>
            </div>
          </button>

          {/* Desktop Navigation - Clean 3 Links Only */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0B3D2E] font-semibold'
                      : 'text-[#1E2421]/75 hover:text-[#0B3D2E]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] rounded-full animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button Only */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B3D2E] hover:bg-[#0B3D2E]/5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#0B3D2E]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#0B3D2E]/10 pb-4 space-y-1 animate-fadeIn">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-left px-3 py-2 text-base rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#0B3D2E]/10 text-[#0B3D2E] font-semibold'
                        : 'text-[#1E2421] hover:text-[#0B3D2E] hover:bg-[#0B3D2E]/5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

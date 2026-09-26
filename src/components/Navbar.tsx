import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, LogIn } from 'lucide-react';

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

  // EXACT RECOMMENDED PRIMARY NAVIGATION FROM SITEMAP:
  // Home | About | Courses | How It Works | Pricing | Teachers | Reviews | FAQ | Contact
  // Primary CTA: Book Free Trial
  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Courses', page: 'courses' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Teachers', page: 'teachers' },
    { label: 'Reviews', page: 'reviews' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
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
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#0B3D2E]/10 shadow-xs py-2.5'
          : 'bg-[#FAF7F0] border-b border-[#0B3D2E]/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#0B3D2E] rounded-sm text-left cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0B3D2E] leading-none">
                Al Shams
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#68736D] mt-0.5">
                Quran Academy
              </span>
            </div>
          </button>

          {/* Desktop Sitemap Primary Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-[13px] font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap ${
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

          {/* Action Zone: Primary CTA: Book Free Trial + Student Portal */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('login')}
              className="px-3 py-2 text-xs font-medium text-[#0B3D2E] hover:text-[#164C3B] hover:bg-[#0B3D2E]/5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Student Login</span>
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] active:scale-[0.99] rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0B3D2E] rounded-md whitespace-nowrap sm:hidden"
            >
              Free Trial
            </button>
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
          <div className="xl:hidden mt-3 pt-3 border-t border-[#0B3D2E]/10 pb-4 space-y-1 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#0B3D2E]/10 text-[#0B3D2E] font-semibold'
                        : 'text-[#1E2421] hover:text-[#0B3D2E] hover:bg-[#0B3D2E]/5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => handleLinkClick('blog')}
                className="text-left px-3 py-2 text-sm text-[#1E2421] hover:text-[#0B3D2E] hover:bg-[#0B3D2E]/5 rounded-md"
              >
                Blog / Islamic Resources
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('login')}
                className="text-left px-3 py-2 text-sm text-[#1E2421] hover:text-[#0B3D2E] hover:bg-[#0B3D2E]/5 rounded-md"
              >
                Student Login
              </button>
            </nav>

            <div className="pt-2 border-t border-[#0B3D2E]/10">
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
              >
                Book Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

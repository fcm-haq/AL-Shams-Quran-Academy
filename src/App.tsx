/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { TeachersPage } from './pages/TeachersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { BlogResourcesPage } from './pages/BlogResourcesPage';
import { StudentLoginPage } from './pages/StudentLoginPage';
import { LegalPage } from './pages/LegalPage';
import { ContactPage } from './pages/ContactPage';

export type PageRoute =
  | 'home'
  | 'about'
  | 'courses'
  | 'how-it-works'
  | 'pricing'
  | 'teachers'
  | 'reviews'
  | 'faq'
  | 'blog'
  | 'login'
  | 'legal'
  | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string, courseName?: string) => {
    setCurrentPage(page as PageRoute);
    if (courseName) {
      setSelectedCourse(courseName);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1E2421]">
      {/* 01 — SITEMAP RECOMMENDED PRIMARY NAVIGATION */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* DEDICATED SITEMAP PAGE VIEWS */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'courses' && (
          <CoursesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'pricing' && (
          <PricingPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'teachers' && (
          <TeachersPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'faq' && (
          <FaqPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'blog' && (
          <BlogResourcesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'login' && (
          <StudentLoginPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'legal' && (
          <LegalPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage initialCourse={selectedCourse} />
        )}
      </main>

      {/* 03 — COMPLETE SITEMAP FOOTER */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

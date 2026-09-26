/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'courses' | 'contact'>('home');
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string, courseName?: string) => {
    if (page === 'home' || page === 'courses' || page === 'contact') {
      setCurrentPage(page);
    }
    if (courseName) {
      setSelectedCourse(courseName);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1E2421]">
      {/* 01 — MULTI-PAGE NAVBAR */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTrialModal={(course) => handleNavigate('contact', course)}
      />

      {/* DEDICATED PAGE VIEWS */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'courses' && (
          <CoursesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage initialCourse={selectedCourse} />
        )}
      </main>

      {/* 03 — FOOTER */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

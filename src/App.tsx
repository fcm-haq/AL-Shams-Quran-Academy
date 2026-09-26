/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { ContactPage } from './pages/ContactPage';

export type PageRoute = 'home' | 'courses' | 'contact';

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
      {/* Clean Header - 3 Pages, No Buttons */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Pure 3-Page Structure */}
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

      {/* Clean, Non-overcrowded Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

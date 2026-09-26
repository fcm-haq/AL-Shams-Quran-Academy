import React, { useState } from 'react';
import { Shield, BookOpen, Key, AlertCircle, ArrowRight } from 'lucide-react';
import { BRAND } from '../constants/data';

interface StudentLoginPageProps {
  onNavigate: (page: string) => void;
}

export const StudentLoginPage: React.FC<StudentLoginPageProps> = ({ onNavigate }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-8 border border-[#0B3D2E]/10 shadow-md">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-[#C6A15B]" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#0B3D2E]">Student Portal Login</h1>
            <p className="text-xs text-[#68736D] mt-1">
              Access your class schedules, teacher notes, and learning materials.
            </p>
          </div>

          {message ? (
            <div className="p-4 bg-[#0B3D2E]/5 border border-[#0B3D2E]/20 rounded-xl text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-[#0B3D2E] mx-auto" />
              <p className="text-xs text-[#1E2421]/80">
                To access your customized lesson link, please check your WhatsApp or email directly provided by your coordinator.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] rounded-lg"
              >
                Contact Coordinator
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1">
                  Student ID or Registered Email
                </label>
                <input
                  type="text"
                  required
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g. STU-1029 or email"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#0B3D2E]/20 bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B3D2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#0B3D2E]/20 bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B3D2E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
              >
                Login to Portal
              </button>

              <div className="pt-3 text-center">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-xs text-[#0B3D2E] hover:underline"
                >
                  Need help logging in? Contact support
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { BRAND, COURSES } from '../constants/data';

interface ContactSectionProps {
  initialCourse?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialCourse }) => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [course, setCourse] = useState(initialCourse || 'Nazra Quran');
  const [studentCategory, setStudentCategory] = useState('Kids (5+ Years)');
  const [platform, setPlatform] = useState('WhatsApp');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  const validate = () => {
    const errs: { name?: string; contact?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name or parent name';
    if (!emailOrPhone.trim()) errs.contact = 'Please enter your phone or email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted message for WhatsApp
    const composedText = `Assalamu Alaikum!
I would like to book a trial Quran class with Al Shams Quran Academy.

• Name / Parent: ${name.trim()}
• Contact: ${emailOrPhone.trim()}
• Course: ${course}
• Student Category: ${studentCategory}
• Class Platform: ${platform}
${message.trim() ? `• Preferred Time / Note: ${message.trim()}` : ''}`;

    const whatsappUrl = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(composedText)}`;
    
    setRedirectUrl(whatsappUrl);
    setSubmitted(true);

    // Direct redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Book Your Trial Class
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#1E2421]/75 leading-relaxed">
            Fill in your details below to schedule your trial class. Submitting will directly connect you with our teacher on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Academy Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-[#0B3D2E]/10 shadow-xs space-y-6">
              <div>
                <span className="text-[11px] font-semibold text-[#C6A15B] uppercase tracking-wider block mb-1">
                  Al Shams Quran Academy
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                  Learn Quran From Home
                </h3>
                <p className="text-xs sm:text-sm text-[#1E2421]/75 mt-2 leading-relaxed">
                  Have questions about class timings, curriculum, or teacher availability? You can submit the trial form or reach out directly.
                </p>
              </div>

              <div className="pt-4 border-t border-[#0B3D2E]/10 space-y-3.5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] shrink-0">
                    <Mail className="w-4 h-4 text-[#0B3D2E]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#68736D] uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-sm font-medium text-[#0B3D2E] hover:underline break-all"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] border border-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#0B3D2E]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#68736D] uppercase tracking-wider block">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium text-[#0B3D2E]">
                      {BRAND.whatsapp}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance notes with Limited Slots added */}
            <div className="p-6 rounded-2xl bg-white border border-[#0B3D2E]/10 text-xs text-[#68736D] space-y-3">
              <div className="flex items-center gap-2 text-[#0B3D2E] font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Free Trial Class • No Obligation</span>
              </div>
              <p className="leading-relaxed">
                Experience our 1-on-1 teaching approach firsthand before making any commitment. Classes are scheduled at your preferred time.
              </p>
              
              {/* Limited Slots notice */}
              <div className="pt-2 border-t border-[#0B3D2E]/10 flex items-center gap-2 text-[#C6A15B] font-medium">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span className="text-xs">
                  Limited slots — book your trial class today.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Trial Class Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-[#0B3D2E]/10 shadow-xs">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                  Request Your Trial Class
                </h3>
                <p className="text-xs sm:text-sm text-[#1E2421]/75 mt-0.5">
                  Enter your details and click submit to connect directly on WhatsApp.
                </p>
              </div>

              {/* Limited slots badge on form header */}
              <span className="inline-flex items-center gap-1.5 self-start sm:self-center px-2.5 py-1 rounded-md bg-[#C6A15B]/15 text-[#0B3D2E] text-[11px] font-medium border border-[#C6A15B]/30 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                Limited Slots Available
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#0B3D2E]/5 border border-[#0B3D2E]/15 text-center animate-fadeIn space-y-4">
                <CheckCircle className="w-12 h-12 text-[#0B3D2E] mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                  Connecting to WhatsApp...
                </h4>
                <p className="text-sm text-[#1E2421]/80 max-w-md mx-auto">
                  Assalamu Alaikum <strong>{name}</strong>! If WhatsApp didn&apos;t open automatically, click the button below to continue:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={redirectUrl}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Open WhatsApp Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmailOrPhone('');
                      setMessage('');
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-[#0B3D2E] hover:underline"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1.5">
                      Your Name / Parent Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Tariq / Fatima"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#0B3D2E]/20 bg-[#FAF7F0]/50 focus:bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#0B3D2E] transition-colors`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* WhatsApp Contact */}
                  <div>
                    <label htmlFor="contact-info" className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1.5">
                      WhatsApp Number or Email *
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      value={emailOrPhone}
                      onChange={(e) => {
                        setEmailOrPhone(e.target.value);
                        if (errors.contact) setErrors(prev => ({ ...prev, contact: undefined }));
                      }}
                      placeholder="e.g. +92 340 9478812 or email"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.contact ? 'border-red-500 bg-red-50/30' : 'border-[#0B3D2E]/20 bg-[#FAF7F0]/50 focus:bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#0B3D2E] transition-colors`}
                    />
                    {errors.contact && <p className="text-[11px] text-red-600 mt-1">{errors.contact}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Select Course */}
                  <div>
                    <label htmlFor="contact-course" className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1.5">
                      Course
                    </label>
                    <select
                      id="contact-course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border border-[#0B3D2E]/20 bg-[#FAF7F0]/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B3D2E]"
                    >
                      {COURSES.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Student Category */}
                  <div>
                    <label htmlFor="contact-audience" className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1.5">
                      Student
                    </label>
                    <select
                      id="contact-audience"
                      value={studentCategory}
                      onChange={(e) => setStudentCategory(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border border-[#0B3D2E]/20 bg-[#FAF7F0]/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B3D2E]"
                    >
                      <option value="Kids (5+ Years)">Kids (5+ Years)</option>
                      <option value="Teens">Teens</option>
                      <option value="Adults (Male)">Adults (Male)</option>
                      <option value="Adults (Female)">Adults (Female)</option>
                    </select>
                  </div>

                  {/* Preferred Platform */}
                  <div>
                    <label htmlFor="contact-platform" className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1.5">
                      Platform
                    </label>
                    <select
                      id="contact-platform"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border border-[#0B3D2E]/20 bg-[#FAF7F0]/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B3D2E]"
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Zoom">Zoom</option>
                      <option value="Skype">Skype</option>
                    </select>
                  </div>
                </div>

                {/* Additional Note */}
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] mb-1.5">
                    Preferred Timings or Notes (Optional)
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention convenient days or times (e.g. Evenings, UK or US time)"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#0B3D2E]/20 bg-[#FAF7F0]/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B3D2E] transition-colors resize-none"
                  />
                </div>

                {/* Direct Action Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] active:scale-[0.99] rounded-lg shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Submit Trial Class Request</span>
                  <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                </button>

                <p className="text-center text-[11px] text-[#68736D] pt-1">
                  Clicking submit redirects you straight to WhatsApp with your details pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

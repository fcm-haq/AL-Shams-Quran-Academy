import React from 'react';
import { PRICING_PACKAGES } from '../constants/data';
import { Check, ShieldCheck, ArrowRight, Clock, Calendar } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string, planName?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-[#FAF7F0] pb-14 pt-6 border-b border-[#0B3D2E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">
              Transparent Monthly Plans
            </span>
            <span className="w-5 h-[1.5px] bg-[#C6A15B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0B3D2E] tracking-tight">
            PACKAGES & MONTHLY PLANS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1E2421]/80 leading-relaxed">
            Affordable, personalized one-to-one Quran education with zero hidden fees. Start with a 100% free trial class before choosing a plan.
          </p>
        </div>
      </section>

      {/* Free Trial Banner */}
      <section className="bg-[#0B3D2E] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <ShieldCheck className="w-6 h-6 text-[#C6A15B] shrink-0" />
            <div>
              <p className="font-serif text-lg font-bold">100% Free Trial Class Available</p>
              <p className="text-xs text-white/80">No credit card or payment information required to start.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact', 'Free Trial Class')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B3D2E] bg-[#FAF7F0] hover:bg-white rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Claim Free Trial
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#FAF7F0] rounded-2xl p-8 border border-[#0B3D2E]/10 flex flex-col justify-between hover:border-[#C6A15B]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#0B3D2E] bg-white px-2.5 py-1 rounded-full border border-[#0B3D2E]/10">
                      {pkg.badge}
                    </span>
                    <Clock className="w-4 h-4 text-[#C6A15B]" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0B3D2E] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#68736D] mb-4">{pkg.duration}</p>
                  
                  <div className="p-4 bg-white rounded-xl border border-[#0B3D2E]/10 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                      {pkg.days}
                    </p>
                    <p className="text-sm font-bold text-[#0B3D2E] mt-1">{pkg.price}</p>
                    <p className="text-xs text-[#1E2421]/70 mt-1">{pkg.description}</p>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#1E2421]/80">
                        <Check className="w-4 h-4 text-[#0B3D2E] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('contact', `Plan: ${pkg.name}`)}
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D2E] hover:bg-[#164C3B] rounded-lg transition-colors cursor-pointer"
                >
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-[#68736D] max-w-xl mx-auto">
            * We offer customized weekend-only and daily Hifz packages as well. Contact us directly to tailor a schedule that fits your exact budget and routine.
          </div>
        </div>
      </section>
    </div>
  );
};

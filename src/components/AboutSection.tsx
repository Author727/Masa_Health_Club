import React from 'react';
import { Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, ABOUT_US_IMAGE } from '../data/salonData';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about-us-section" className="py-20 lg:py-28 bg-white border-b border-rose-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50%: About Us Text & Business Description */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Masa Health Club</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight mb-6 leading-tight">
              Kohinoor City&apos;s Sanctuary for Rejuvenation &amp; Beauty
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              {BUSINESS_INFO.aboutUsDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified &amp; Experienced Stylists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Medical-Grade UV Sterilization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pure Organic Herbal Formulations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Private &amp; Relaxing Care Suites</span>
              </div>
            </div>

            {/* Exactly as requested: Anchor tag with GMB link and "Get A Quote" text */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>Get A Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {onLearnMore && (
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-rose-700 hover:bg-rose-50/70 rounded-full transition-colors cursor-pointer"
                >
                  <span>Read Full Story</span>
                </button>
              )}
            </div>
          </div>

          {/* 2nd 50%: Image specified by user */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative accent backdrop frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-rose-200/60 to-rose-50/40 transform -rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-rose-100 bg-slate-100 aspect-4/3 sm:aspect-16/11">
                <img
                  src={ABOUT_US_IMAGE}
                  alt="Masa Health Club Beauty Salon Experience in Faisalabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=870&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating trust card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-xl border border-rose-100 shadow-md">
                  <p className="text-xs uppercase tracking-wider text-rose-600 font-bold mb-1">
                    Prime Location
                  </p>
                  <p className="text-xs text-slate-800 font-medium">
                    The Orion, 8-G, Shop No 6 Jaranwala Rd, Kohinoor City Faisalabad
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

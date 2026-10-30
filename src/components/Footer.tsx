import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 100% div divided into 3 equal parts (33.33% each) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14 pb-14 border-b border-slate-800">
          
          {/* 1st 33.33% Section: Logo + 40-word description + Join Us button linked to GMB */}
          <div className="flex flex-col items-start space-y-5">
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-1 border border-rose-200/40 shadow-xs flex items-center justify-center">
                <img
                  src={BUSINESS_INFO.logo}
                  alt={BUSINESS_INFO.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[11px] tracking-wider uppercase text-rose-400 font-medium">
                  Health &amp; Beauty Shop
                </span>
              </div>
            </div>

            {/* Exactly 40 words description */}
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              {BUSINESS_INFO.footerDescription}
            </p>

            {/* Anchor text button "Join Us" attached to GMB link */}
            <a
              href={BUSINESS_INFO.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all active:scale-98"
            >
              <span>Join Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 2nd 33.33% Section: Navigation Menu */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-serif uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blogs')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.gmbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors inline-flex items-center gap-1 text-slate-400"
                >
                  <span>Google Map Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd 33.33% Section: Business email, phone, full address, working hours in separate lines */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-serif uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Contact Information
            </h3>

            <div className="space-y-3.5 text-sm">
              {/* Separate line 1: Business Email with icon */}
              <div className="flex items-start gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Email Address:</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Separate line 2: Phone Number with icon */}
              <div className="flex items-start gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Phone Number:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="hover:text-rose-400 transition-colors font-semibold"
                  >
                    {BUSINESS_INFO.phone} ({BUSINESS_INFO.phoneFormatted})
                  </a>
                </div>
              </div>

              {/* Separate line 3: Full Address with location icon */}
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Full Address:</span>
                  <p className="leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Separate line 4: Working hours with icon */}
              <div className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Working Hours:</span>
                  <p>{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* All Rights Reserved at last in the center as requested */}
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>© 2026 All Rights Reserved By The Ranking Geeks</p>
        </div>

      </div>
    </footer>
  );
};

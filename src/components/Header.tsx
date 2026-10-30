import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onRequestQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onRequestQuoteClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      {/* Top micro bar for quick business reach */}
      <div className="bg-rose-950 text-rose-100/90 text-xs py-2 px-4 border-b border-rose-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-300 shrink-0" />
              <span>Kohinoor City, Faisalabad</span>
            </span>
            <span className="hidden md:inline-block text-rose-400/50">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-rose-200">
              <span>Mon - Sat: 11:00 AM – 9:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-rose-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-300" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-rose-400/50">·</span>
            <a
              href={BUSINESS_INFO.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-rose-300 hover:text-white underline decoration-rose-400/40"
            >
              Google Maps Location
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Logo & Business Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group shrink-0"
          >
            <div className="w-13 h-13 rounded-full overflow-hidden bg-rose-50/60 p-1 border border-rose-200/60 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={BUSINESS_INFO.logo}
                alt={BUSINESS_INFO.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to text logo if image load fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="block text-2xl font-bold tracking-tight text-slate-900 font-serif leading-none">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] tracking-wider uppercase text-rose-700 font-medium">
                Health &amp; Beauty Sanctuary
              </span>
            </div>
          </div>

          {/* Right: Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 relative transition-colors duration-200 cursor-pointer ${
                  currentPage === link.id
                    ? 'text-rose-700 font-semibold'
                    : 'text-slate-600 hover:text-rose-600'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuoteClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-rose-600 hover:bg-rose-700 rounded-full shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Get A Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuoteClick}
              className="text-xs px-3 py-1.5 bg-rose-600 text-white rounded-md font-medium"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-rose-700 hover:bg-rose-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPage === link.id
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onRequestQuoteClick();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-rose-600 text-white rounded-lg font-medium text-sm shadow-xs"
            >
              Request Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full text-center py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium"
            >
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

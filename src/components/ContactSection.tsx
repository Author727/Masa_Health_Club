import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-us-section" className="py-20 lg:py-28 bg-stone-50 border-b border-rose-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Connect &amp; Visit Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight mb-3">
            Contact Masa Health Club
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conveniently situated at The Orion in Kohinoor City Faisalabad. Reach out for consultations, treatments, or directions.
          </p>
        </div>

        {/* 50 / 50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-stretch">
          
          {/* 1st 50%: Business Details with Flat Icons */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-600 font-bold block mb-2">
                Salon Information
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6">
                Get In Touch With Our Team
              </h3>

              <div className="space-y-6">
                
                {/* Phone Number with flat icon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-lg font-bold text-slate-900 hover:text-rose-600 transition-colors"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Direct line for calls and instant reservations
                    </span>
                  </div>
                </div>

                {/* Address with flat icon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Address
                    </span>
                    <p className="text-base font-semibold text-slate-900 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.gmbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-medium mt-1 underline"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Business Email with flat icon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Business Email
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-base font-semibold text-slate-900 hover:text-rose-600 transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      For corporate inquiries, quotes, and partnership notes
                    </span>
                  </div>
                </div>

                {/* Business Hours with flat icon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Business Hours
                    </span>
                    <p className="text-base font-semibold text-slate-900">
                      {BUSINESS_INFO.hours}
                    </p>
                    <span className="block text-xs text-amber-700 font-medium mt-0.5">
                      Sunday: Closed for deep sanitization
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 03078865865</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* 2nd 50%: Google Maps embed iframe code specified by user */}
          <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 min-h-[420px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4236728552787!2d73.1161831!3d31.4124315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85a41a173e4e2db7%3A0xfa8c1d0aee6f913e!2sMasa%20Health%20Club!5e1!3m2!1sen!2s!4v1793226570250!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Masa Health Club Google Map Location in Kohinoor City Faisalabad"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

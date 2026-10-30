import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_LIST, FAQ_IMAGE, BUSINESS_INFO } from '../data/salonData';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-white border-b border-rose-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title as requested */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Find prompt answers about our beauty treatments, hygienic procedures, and salon appointments in Kohinoor City Faisalabad.
          </p>
        </div>

        {/* 50 / 50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* 1st 50%: FAQs using <details> and <summary> with arrow icon */}
          <div className="space-y-4">
            {FAQS_LIST.map((faq, index) => (
              <details
                key={faq.id}
                open={index === 0}
                className="group rounded-2xl border border-slate-200 bg-stone-50/70 p-5 transition-colors hover:border-rose-300 open:bg-white open:shadow-xs"
              >
                {/* <summary> acts as clickable question with arrow icon in question line */}
                <summary className="flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-slate-900 cursor-pointer select-none">
                  <span className="group-hover:text-rose-700 transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 group-open:bg-rose-600 group-open:text-white transition-all">
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-rose-700 group-open:text-white" />
                  </div>
                </summary>

                {/* Remaining content acts as the answer */}
                <div className="pt-3 text-sm text-slate-600 leading-relaxed font-sans border-t border-rose-50 mt-3">
                  {faq.answer}
                </div>
              </details>
            ))}

            <div className="pt-4 flex items-center gap-3 text-xs text-slate-500">
              <span>Have another question?</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-700 font-semibold hover:underline"
              >
                Chat directly on WhatsApp (03078865865) &rarr;
              </a>
            </div>
          </div>

          {/* 2nd 50%: Image URL provided by user */}
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-rose-200/50 to-pink-100/40 transform -rotate-1" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-rose-100 bg-slate-100 aspect-4/3 sm:aspect-16/12">
                <img
                  src={FAQ_IMAGE}
                  alt="Masa Health Club FAQ and Client Consultation in Faisalabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=870&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-rose-100 shadow-md">
                  <p className="text-xs font-serif font-bold text-slate-900 mb-1">
                    Complimentary Skin &amp; Hair Assessment
                  </p>
                  <p className="text-xs text-slate-600">
                    Visit us at Kohinoor City Faisalabad for a free in-person consultation with our certified aestheticians.
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

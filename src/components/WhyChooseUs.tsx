import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Clock } from 'lucide-react';
import { WHY_CHOOSE_US_IMAGE, BUSINESS_INFO } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const reasonTiles = [
    {
      icon: <Award className="w-5 h-5 text-rose-600" />,
      title: "Certified Master Beauticians",
      description: "Our licensed hair and dermal practitioners undergo regular training in modern techniques, hygiene standards, and organic wellness treatments."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-rose-600" />,
      title: "Hospital-Grade Sanitization",
      description: "Every scissor, cuticle nipper, and extractor is autoclaved and UV-sterilized before each guest. Single-use disposables guarantee zero cross-contact."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-rose-600" />,
      title: "Pure Botanical & Organic Formulations",
      description: "We handpick nourishing natural extracts, mineral salts, and cold-pressed herbal oils that treat sensitive skin and scalp without irritation."
    },
    {
      icon: <Clock className="w-5 h-5 text-rose-600" />,
      title: "Zero Waiting & Punctual Appointments",
      description: "We honor your busy schedule. Scheduled appointments begin on time in serene private care booths designed for effortless relaxation."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-rose-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50%: Tiles & Description */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Our Quality Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight mb-5 leading-tight">
              Why Choose Masa Health Club?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              At Masa Health Club, we combine authentic warmth with clinical hygiene. Whether you need a quick haircut or a comprehensive bridal day treatment, we tailor our service to deliver visible, confidence-boosting results in Faisalabad.
            </p>

            {/* 4 Informative Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {reasonTiles.map((tile, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-rose-300 transition-colors shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs mb-3 border border-rose-100">
                    {tile.icon}
                  </div>
                  <h3 className="text-base font-bold font-serif text-slate-900 mb-1.5">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all active:scale-98"
              >
                <span>Read Verified Reviews on Google</span>
              </a>
            </div>
          </div>

          {/* 2nd 50%: Specified Image */}
          <div>
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose-200/50 via-rose-100/30 to-amber-100/30 transform rotate-1" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-rose-100 bg-slate-100 aspect-4/3 sm:aspect-16/11">
                <img
                  src={WHY_CHOOSE_US_IMAGE}
                  alt="Why Choose Masa Health Club Faisalabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=870&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating highlight badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
                  <span className="text-amber-400 font-bold">100%</span> Client Satisfaction
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

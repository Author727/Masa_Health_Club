import React from 'react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services-section" className="py-20 lg:py-28 bg-stone-50 border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 border border-rose-200 text-rose-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Signature Salon Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight mb-4">
            Health &amp; Beauty Services in Kohinoor City
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Explore our curated menu of hair, skin, body, and nail therapies crafted to refresh your personal appearance in Faisalabad.
          </p>
        </div>

        {/* 8 Services in 2 Rows of 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* 1st: Image with hover layer that expands strictly from the LEFT */}
              <div className="service-img-container relative w-full h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    // Fallback in case of Unsplash temporary disruption
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=870&auto=format&fit=crop";
                  }}
                />
                
                {/* Visual badge inside image on hover */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 text-rose-800 text-[11px] font-bold tracking-wider uppercase shadow-xs">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* 2nd: Title & 3rd: 40-50 words description & 4th: Get a Free Quote button */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-3 group-hover:text-rose-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* 40 to 50 words description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* 4th: Anchor tag with GMB link and "Get a Free Quote" */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <a
                    href={BUSINESS_INFO.gmbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white transition-all duration-200 border border-rose-200/80 hover:border-transparent active:scale-98"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Check, Search, Calendar } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';

interface ServicesPageProps {
  onRequestQuoteClick: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRequestQuoteClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hair' | 'skin' | 'body' | 'nails'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Styling & Cuts' },
    { id: 'skin', label: 'Facial & Skincare' },
    { id: 'body', label: 'Waxing & Polishing' },
    { id: 'nails', label: 'Pedicure & Manicure' }
  ];

  const filteredServices = SERVICES_LIST.filter((s) => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page Hero */}
      <div className="bg-rose-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1629397662600-50ad523ef4fb?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Service Menu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight mb-4">
            Health &amp; Beauty Services
          </h1>
          <p className="text-base sm:text-lg text-rose-100/90 max-w-2xl mx-auto font-light">
            Each service at Masa Health Club is performed with clinical sterilization, organic products, and certified artistry.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-500 text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <p className="text-lg font-serif text-slate-800 mb-2">No matching services found</p>
              <p className="text-sm text-slate-500 mb-6">Try clearing your search term or select another category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-rose-600 text-white text-xs font-bold uppercase rounded-full"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image with left-to-right wipe hover layer */}
                  <div className="service-img-container relative w-full h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 text-rose-800 text-[11px] font-bold tracking-wider uppercase shadow-xs">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-rose-700 transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-auto flex flex-col gap-2">
                      <a
                        href={BUSINESS_INFO.gmbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white transition-all border border-rose-200/80 hover:border-transparent active:scale-98"
                      >
                        <span>Get a Free Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-2 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        Book on WhatsApp &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Packages / Group Bookings */}
      <section className="py-16 bg-white border-t border-rose-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
            Need a Bridal Package or Custom Beauty Treatment Plan?
          </h2>
          <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
            We provide bespoke packages for weddings, family events, and monthly wellness regimens with exclusive package rates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestQuoteClick}
              className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md"
            >
              Request Custom Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-3.5 border border-slate-300 text-slate-700 hover:border-rose-400 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

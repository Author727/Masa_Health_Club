import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Clock, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface AboutPageProps {
  onNavigateContact: () => void;
  onNavigateServices: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateContact,
  onNavigateServices
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-rose-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Ambiance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Our Story</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight mb-4">
            About Masa Health Club
          </h1>
          <p className="text-base sm:text-lg text-rose-100/90 max-w-2xl mx-auto font-light">
            Founded with a passion for transformative beauty and clinical wellness in Kohinoor City Faisalabad.
          </p>
        </div>
      </div>

      {/* Main Story Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Story Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=870&auto=format&fit=crop"
                  alt="Masa Health Club Salon Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-rose-600 text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold font-serif">8+ Years</p>
                <p className="text-xs text-rose-100 mt-1">
                  Elevating personal grooming and skin rejuvenation in Kohinoor City.
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-wider text-rose-600 font-bold block">
                The Masa Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
                Where Modern Aesthetics Meets Rejuvenating Wellness
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Masa Health Club is situated at The Orion in Kohinoor City Faisalabad, providing a serene escape from the rush of everyday life. We believe authentic beauty begins with healthy skin, nourished hair, and a peaceful state of mind.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our salon brings together certified hair artisans, seasoned dermatological aestheticians, and massage therapists dedicated to delivering personalized attention. From custom layered cuts and deep herbal facials to relaxing pedicures and full body polishing, our team ensures every appointment is tailored to your unique aesthetic preferences.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.gmbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all active:scale-98"
                >
                  <span>Get A Quote On Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onNavigateServices}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-300 text-slate-700 hover:text-rose-700 hover:border-rose-400 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Explore All Services</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-24 bg-stone-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
              The Standards We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-3">
                Rigorous Medical Sanitization
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We implement hospital-grade autoclaves, UV light boxes, and single-use kits. Your personal safety and comfort are never compromised.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-3">
                Tailored Individual Care
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No two guests are identical. We conduct an upfront skin and hair texture consultation before recommending therapies or bespoke hairstyles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-3">
                Premium Herbal Extracts
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We formulate treatments with cold-pressed natural oils, organic neem, turmeric, and aloe to calm reactive skin and strengthen hair cuticles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Gallery Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              Atmosphere &amp; Ambience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
              Inside Our Kohinoor City Lounge
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Step inside our soothing suites located at The Orion on Jaranwala Road.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop"
                alt="Hair Styling Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
                alt="Spa & Facial Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=600&auto=format&fit=crop"
                alt="Nail Care & Pedicure Station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop"
                alt="Herbal Facial Therapy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

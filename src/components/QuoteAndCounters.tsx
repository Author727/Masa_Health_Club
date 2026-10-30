import React, { useState } from 'react';
import { Send, Users, Award, Sparkles, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';

export const QuoteAndCounters: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Hairstylin',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Create mailto link for direct delivery to info@masahealthclub.com
    const subject = encodeURIComponent(`Service Quote Request from ${formData.name} - Masa Health Club`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequested Service: ${formData.service}\nNotes: ${formData.notes}`
    );
    // Open email client
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const counterItems = [
    {
      icon: <Users className="w-6 h-6 text-rose-600" />,
      heading: "Satisfied Clients",
      counter: "2,500+",
      desc: "Regular men & women guests across Faisalabad"
    },
    {
      icon: <Award className="w-6 h-6 text-rose-600" />,
      heading: "Expert Beauticians",
      counter: "15+",
      desc: "Certified specialists in hair, skin, and nails"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      heading: "Beauty Services",
      counter: "25+",
      desc: "Tailored head-to-toe grooming therapies"
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-600" />,
      heading: "Years of Experience",
      counter: "8+",
      desc: "Dedicated wellness excellence in Kohinoor City"
    }
  ];

  return (
    <section id="quote-counters-section" className="py-20 lg:py-28 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 50 / 50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50%: Request A Quote Form integrated with info@masahealthclub.com */}
          <div className="bg-stone-800/90 rounded-3xl p-8 sm:p-10 border border-stone-700/80 shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Booking &amp; Estimate</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-3">
              Request A Quote
            </h2>

            <p className="text-sm text-stone-300 mb-6 leading-relaxed">
              Fill out this quick form to receive an instant price estimate or schedule a private consultation. Inquiries are routed directly to <span className="text-rose-300 font-medium">{BUSINESS_INFO.email}</span>.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-lg text-emerald-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>Quote Request Prepared!</span>
                </div>
                <p className="text-sm text-stone-200">
                  Your message has opened in your mail app directed to <strong>{BUSINESS_INFO.email}</strong>. Our front desk coordinator will respond within 2 business hours.
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ayesha Khan"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300-1234567"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Preferred Date &amp; Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us your preferred date/time or specific aesthetic needs..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>
              </form>
            )}
          </div>

          {/* 2nd 50%: Counters with Icon, Heading, and Counter at last */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-400 font-bold block mb-2">
                Proven Track Record
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
                Excellence In Numbers
              </h3>
              <p className="text-stone-300 leading-relaxed text-sm">
                Serving the Kohinoor City and greater Faisalabad community with dedicated hygienic salon, skin therapy, and hair care standards.
              </p>
            </div>

            {/* 4 Counter Boxes with Icon, Heading, and Counter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {counterItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 hover:border-rose-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-stone-900 flex items-center justify-center border border-stone-700 mb-4">
                    {item.icon}
                  </div>

                  <div>
                    {/* Heading */}
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-1">
                      {item.heading}
                    </h4>
                    
                    <p className="text-xs text-stone-400 mb-4">
                      {item.desc}
                    </p>

                    {/* Counter at last as requested */}
                    <span className="block text-3xl sm:text-4xl font-extrabold text-white font-serif tabular-nums tracking-tight">
                      {item.counter}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

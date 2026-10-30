import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Hairstylin',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Contact Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-rose-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We&apos;re Here To Welcome You</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight mb-4">
            Contact Masa Health Club
          </h1>
          <p className="text-base sm:text-lg text-rose-100/90 max-w-2xl mx-auto font-light">
            Located at The Orion, Kohinoor City Faisalabad. Stop by for an in-person consultation or book via phone or WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Business Details Cards */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-600 font-bold block mb-2">
                Direct Contact
              </span>
              <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">
                Visit Our Salon in Kohinoor City
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Whether you are planning a complete makeover, routine hair trimming, or therapeutic herbal facial, we are ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-base font-bold text-slate-900 hover:text-rose-600"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <p className="text-xs text-slate-500 mt-1">Available 11 AM - 9 PM</p>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-base font-bold text-slate-900 hover:text-rose-600 break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
                <p className="text-xs text-slate-500 mt-1">Direct inquiries &amp; quotes</p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Physical Address
                </h3>
                <p className="text-base font-semibold text-slate-900">
                  {BUSINESS_INFO.address}
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <a
                    href={BUSINESS_INFO.gmbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold underline"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Working Hours
                </h3>
                <p className="text-base font-semibold text-slate-900">
                  {BUSINESS_INFO.hours}
                </p>
                <p className="text-xs text-amber-700 mt-1 font-medium">
                  Closed on Sundays
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Front Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Send A Message & Interactive Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-2">
                Send Us a Note
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Messages are emailed directly to {BUSINESS_INFO.email}
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Message Initiated!</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Your email client has opened with your message ready to send to <strong>{BUSINESS_INFO.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Fatima Ali"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-1234567"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-500"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about treatments, pricing, or bookings..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4236728552787!2d73.1161831!3d31.4124315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85a41a173e4e2db7%3A0xfa8c1d0aee6f913e!2sMasa%20Health%20Club!5e1!3m2!1sen!2s!4v1793226570250!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Masa Health Club Google Maps Location"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

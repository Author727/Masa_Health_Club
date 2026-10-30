import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from '../data/salonData';

export const CustomerReviews: React.FC = () => {
  // 6 reviews sliding 2 by 2 -> 3 slides total (0, 1, 2)
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(CUSTOMER_REVIEWS.length / 2);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Get current 2 reviews for the active slide
  const activePair = CUSTOMER_REVIEWS.slice(currentSlide * 2, currentSlide * 2 + 2);

  return (
    <section className="py-20 lg:py-28 bg-rose-50/50 border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Slider Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold tracking-wider uppercase mb-3">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Verified Client Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              Customer Reviews
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Hear what Pakistani men and women from Faisalabad say about their experience at Masa Health Club.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Reviews"
              className="w-12 h-12 rounded-full bg-white hover:bg-rose-600 text-slate-700 hover:text-white border border-rose-200/80 shadow-xs hover:shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Reviews"
              className="w-12 h-12 rounded-full bg-white hover:bg-rose-600 text-slate-700 hover:text-white border border-rose-200/80 shadow-xs hover:shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 2-by-2 Sliding Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[290px]">
          {activePair.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-rose-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* 1st Line: 5-Star Rating at Top as requested */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-600">5.0 / 5.0</span>
                </div>

                {/* 2nd Line: Client Name as requested */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-rose-700 transition-colors">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-rose-600 font-medium mt-0.5">
                    <span>{review.location}</span>
                    <span>·</span>
                    <span className="text-slate-500">{review.service}</span>
                  </div>
                </div>

                {/* Last: Reviews Description as requested */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic font-normal">
                  &ldquo;{review.description}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-50 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Verified Google Review
                </span>
                <MessageSquareQuote className="w-5 h-5 text-rose-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicator Dots (3 dots for 3 slides of 2 reviews) */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to review pair ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? 'w-8 h-2 bg-rose-600'
                  : 'w-2 h-2 bg-rose-200 hover:bg-rose-400'
              }`}
            />
          ))}
        </div>

        {/* GMB Review link */}
        <div className="text-center mt-8">
          <a
            href={BUSINESS_INFO.gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-rose-700 hover:text-rose-900 underline decoration-rose-300"
          >
            Leave Your Own Review on Google Business Profile &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { BANNER_SLIDES, BUSINESS_INFO } from '../data/salonData';

interface BannerSliderProps {
  onNavigateServices: () => void;
  onRequestQuote: () => void;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({
  onNavigateServices,
  onRequestQuote
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  return (
    <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden bg-slate-950 select-none">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {BANNER_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Full Width Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
              />

              {/* Exact 0.5 Opacity Black Layer as requested */}
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
                aria-hidden="true"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-200 text-xs tracking-wider uppercase font-semibold mb-4 backdrop-blur-xs">
                    <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                    <span>{slide.subtitle}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white mb-5 leading-tight drop-shadow-md text-balance">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow-xs">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={onRequestQuote}
                      className="px-7 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-rose-600/30 transition-all cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <span>Book An Appointment</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <a
                      href={BUSINESS_INFO.gmbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-sm rounded-full transition-all cursor-pointer"
                    >
                      Get A Quote (Google Map)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left Slider Arrow Icon */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Slider Arrow Icon */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 4 Bottom Dots as requested */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {BANNER_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === index
                ? 'w-8 h-2.5 bg-rose-500 shadow-md'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { BannerSlider } from '../components/BannerSlider';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CustomerReviews } from '../components/CustomerReviews';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { HomeBlogsSection } from '../components/HomeBlogsSection';
import { QuoteAndCounters } from '../components/QuoteAndCounters';
import { BlogArticle } from '../data/blogsData';

interface HomePageProps {
  onNavigatePage: (page: string) => void;
  onSelectBlog: (blog: BlogArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigatePage,
  onSelectBlog
}) => {
  const scrollToQuote = () => {
    const el = document.getElementById('quote-counters-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1st Section: Banner Slider with 4 slides, 0.5 opacity overlay, arrows, and 4 dots */}
      <BannerSlider
        onNavigateServices={() => onNavigatePage('services')}
        onRequestQuote={scrollToQuote}
      />

      {/* 2nd Section: About Us 50% / 50% with exact image and GMB Get A Quote button */}
      <AboutSection onLearnMore={() => onNavigatePage('about')} />

      {/* 3rd Section: Services 8 items in 2 rows of 4 cards with left hover overlay */}
      <ServicesSection />

      {/* 4th Section: Why Choose Us 50% tiles / 50% image */}
      <WhyChooseUs />

      {/* 5th Section: Customer Reviews with Pakistani clients sliding 2 by 2 */}
      <CustomerReviews />

      {/* 6th Section: 6 FAQs with <details> and <summary> arrow, 50% image */}
      <FaqSection />

      {/* 7th Section: Contact Us 50% flat icons / 50% Google Map embed */}
      <ContactSection />

      {/* 8th Section: 3 Featured Blogs with Read More */}
      <HomeBlogsSection
        onSelectBlog={onSelectBlog}
        onViewAllBlogs={() => onNavigatePage('blogs')}
      />

      {/* 9th Section: Request A Quote Form (email integrated) & Service Counters */}
      <QuoteAndCounters />
    </main>
  );
};

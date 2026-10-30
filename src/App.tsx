import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogDetailModal } from './components/BlogDetailModal';
import { BlogArticle } from './data/blogsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);

  const handleNavigatePage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuoteClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('quote-counters-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('quote-counters-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800 antialiased selection:bg-rose-600 selection:text-white">
      {/* 1st Step: Header Section with Logo & Business Name on left, menu bar on right */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handleNavigatePage}
        onRequestQuoteClick={handleRequestQuoteClick}
      />

      {/* 2nd Step: Body Section with dedicated page views */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigatePage={handleNavigatePage}
            onSelectBlog={(blog) => setSelectedBlog(blog)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateContact={() => handleNavigatePage('contact')}
            onNavigateServices={() => handleNavigatePage('services')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onRequestQuoteClick={handleRequestQuoteClick} />
        )}

        {currentPage === 'blogs' && (
          <BlogsPage onSelectBlog={(blog) => setSelectedBlog(blog)} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </div>

      {/* 3rd Step: Footer Section with 3 equal columns (33.33% each) and bottom credits */}
      <Footer setCurrentPage={handleNavigatePage} />

      {/* Floating Flat WhatsApp Icon on the Right Bottom */}
      <WhatsAppButton />

      {/* Full 800+ words blog article reader modal */}
      <BlogDetailModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
}

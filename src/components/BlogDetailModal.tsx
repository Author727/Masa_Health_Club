import React, { useEffect } from 'react';
import { X, Calendar, User, Clock, HelpCircle, ArrowUpRight, Share2, Check } from 'lucide-react';
import { BlogArticle } from '../data/blogsData';
import { BUSINESS_INFO } from '../data/salonData';

interface BlogDetailModalProps {
  blog: BlogArticle | null;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ blog, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (blog) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [blog, onClose]);

  if (!blog) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-rose-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-stone-50/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
              {blog.primaryKeyword}
            </span>
            <span className="hidden sm:inline text-xs text-slate-500">
              {blog.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-slate-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
              title="Share article link"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-600 hover:text-rose-700 hover:bg-rose-50 transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
          
          {/* Article Header */}
          <div>
            <h1 id="blog-modal-title" className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight mb-4 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-rose-600" />
                <span>{blog.date}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-rose-600" />
                <span>{blog.author}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-600" />
                <span>{blog.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-16/9 bg-slate-100">
            <img
              src={blog.image}
              alt={blog.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Full Article Content */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-base prose-a:text-rose-700 hover:prose-a:text-rose-800 prose-a:underline prose-strong:text-slate-900 space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />

          {/* 5 FAQs Section at end of the blog as requested */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-rose-600" />
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                Frequently Asked Questions About This Topic
              </h3>
            </div>

            <div className="space-y-4">
              {blog.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-stone-50 border border-slate-200">
                  <h4 className="text-base font-bold font-serif text-slate-900 mb-2">
                    {i + 1}. {faq.question}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Box inside Blog */}
          <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold font-serif text-slate-900">
                Ready to Experience It Yourself?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Visit Masa Health Club in Kohinoor City Faisalabad for tailored wellness and hair care.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm shrink-0"
            >
              <span>Get A Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-stone-50 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react';
import { BLOGS_LIST, BlogArticle } from '../data/blogsData';

interface HomeBlogsSectionProps {
  onSelectBlog: (blog: BlogArticle) => void;
  onViewAllBlogs: () => void;
}

export const HomeBlogsSection: React.FC<HomeBlogsSectionProps> = ({
  onSelectBlog,
  onViewAllBlogs
}) => {
  // Show first 3 blogs on Home page as requested
  const featuredBlogs = BLOGS_LIST.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Beauty &amp; Wellness Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              Latest Articles &amp; Guides
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Expert advice on skincare routines, master haircutting, hygiene standards, and body wellness.
            </p>
          </div>

          <button
            onClick={onViewAllBlogs}
            className="inline-flex items-center gap-2 text-sm font-bold text-rose-700 hover:text-rose-900 group cursor-pointer"
          >
            <span>View All 5 In-Depth Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Featured Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Blog Top Image according to primary keyword */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=870&auto=format&fit=crop";
                  }}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-rose-800 uppercase tracking-wider shadow-xs">
                  {blog.primaryKeyword}
                </div>
              </div>

              {/* Title & Short Description & Read More */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" />
                      <span>{blog.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-rose-500" />
                      <span>{blog.author}</span>
                    </span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3
                    onClick={() => onSelectBlog(blog)}
                    className="text-xl font-bold font-serif text-slate-900 group-hover:text-rose-700 transition-colors mb-3 leading-snug cursor-pointer"
                  >
                    {blog.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {blog.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => onSelectBlog(blog)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

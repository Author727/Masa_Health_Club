import React, { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ArrowRight, Search, Sparkles } from 'lucide-react';
import { BLOGS_LIST, BlogArticle } from '../data/blogsData';

interface BlogsPageProps {
  onSelectBlog: (blog: BlogArticle) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onSelectBlog }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = BLOGS_LIST.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.primaryKeyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-rose-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Blogs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Health &amp; Beauty Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight mb-4">
            The Masa Wellness Journal
          </h1>
          <p className="text-base sm:text-lg text-rose-100/90 max-w-2xl mx-auto font-light">
            In-depth expert articles exploring skincare science, master haircutting, organic formulations, and full-body wellness.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-rose-100 max-w-xl mx-auto flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles by keyword or topic..."
            className="w-full text-xs sm:text-sm bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-rose-600 font-bold px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Blogs Articles List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* 1st: Top image according to keyword as requested */}
                <div className="relative w-full h-60 overflow-hidden bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-rose-800 uppercase tracking-wider shadow-xs">
                    {blog.primaryKeyword}
                  </div>
                </div>

                {/* 2nd: Title & Short Description */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-rose-500" />
                        <span>{blog.date}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-rose-500" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    <h2
                      onClick={() => onSelectBlog(blog)}
                      className="text-xl font-bold font-serif text-slate-900 group-hover:text-rose-700 transition-colors mb-3 leading-snug cursor-pointer"
                    >
                      {blog.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {blog.shortDescription}
                    </p>
                  </div>

                  {/* 3rd: Read More button at end as requested */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <button
                      onClick={() => onSelectBlog(blog)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white transition-all cursor-pointer group/btn"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

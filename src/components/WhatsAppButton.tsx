import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      {/* Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-700 pointer-events-none whitespace-nowrap">
        <span className="font-semibold block">Chat with Masa Health Club</span>
        <span className="text-[11px] text-emerald-400">Usually replies in minutes</span>
      </div>

      {/* Flat WhatsApp icon button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Masa Health Club on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="transform"
        >
          <path d="M12.031 2c-5.509 0-9.987 4.478-9.987 9.988 0 1.76.458 3.479 1.33 4.994l-1.374 5.018 5.14-1.349c1.467.801 3.123 1.226 4.891 1.226 5.509 0 9.988-4.478 9.988-9.989 0-5.509-4.479-9.988-9.988-9.988zm5.727 14.127c-.24.674-1.393 1.29-1.932 1.34-.492.046-1.134.066-3.64-1.002-2.138-.912-3.52-3.08-3.626-3.22-.107-.14-8.68-1.156-8.68-2.208 0-1.053.553-1.572.75-1.783.197-.211.43-.264.573-.264.143 0 .286.002.41.008.13.006.305-.05.477.363.178.428.608 1.485.661 1.593.054.107.09.233.018.375-.072.143-.108.232-.215.357-.107.125-.226.279-.323.375-.107.107-.219.224-.094.439.125.214.556.918 1.192 1.485.82.73 1.512.956 1.727 1.063.214.107.34.09.465-.054.125-.143.537-.626.68-.84.143-.215.287-.179.484-.107.197.071 1.252.59 1.467.697.215.107.358.161.411.25.054.09.054.519-.186 1.193z" />
        </svg>
      </a>
    </aside>
  );
};

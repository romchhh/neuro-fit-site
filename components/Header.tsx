'use client';

import { useState } from 'react';

const navItems = ['HOME', 'NEUROFIT', 'NEURO-ІНТЕНСИВ'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 pt-5 pb-4">
      {/* Desktop nav */}
      <nav className="hidden md:flex justify-center">
        <ul className="inline-flex flex-nowrap gap-2 rounded-full bg-white/20 backdrop-blur-2xl px-5 py-3.5 shadow-lg border border-white/60">
          <li>
            <a
              href="/"
              className="px-8 lg:px-10 py-3 rounded-full text-sm lg:text-lg font-bold uppercase tracking-[0.22em] text-[#5f3a6b] whitespace-nowrap hover:text-[#5f3a6b] hover:bg-white/45 hover:shadow-xl transition-all duration-200"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/neurofit"
              className="px-8 lg:px-10 py-3 rounded-full text-sm lg:text-lg font-bold uppercase tracking-[0.22em] text-[#5f3a6b] whitespace-nowrap hover:text-[#5f3a6b] hover:bg-white/45 hover:shadow-xl transition-all duration-200"
            >
              NEUROFIT
            </a>
          </li>
          <li>
            <a
              href="/neuro-intensive"
              className="px-8 lg:px-10 py-3 rounded-full text-sm lg:text-lg font-bold uppercase tracking-[0.22em] text-[#5f3a6b] whitespace-nowrap hover:text-[#5f3a6b] hover:bg-white/45 hover:shadow-xl transition-all duration-200"
            >
              NEURO-ІНТЕНСИВ
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden px-4">
        <div className="flex items-center justify-between bg-white/20 backdrop-blur-2xl rounded-full px-7 py-4 shadow-lg border border-white/70">
          <a
            href="/"
            className="text-[#5f3a6b] font-bold text-base uppercase tracking-[0.22em]"
          >
            NeuroFit
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#5f3a6b] p-1.5 rounded-full hover:bg-white/40 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="mt-2 bg-white/85 backdrop-blur-md rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#764F75] hover:bg-purple-50 transition border-b border-purple-100/60"
            >
              HOME
            </a>
            <a
              href="/neurofit"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#764F75] hover:bg-purple-50 transition border-b border-purple-100/60"
            >
              NEUROFIT
            </a>
            <a
              href="/neuro-intensive"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#764F75] hover:bg-purple-50 transition"
            >
              NEURO-ІНТЕНСИВ
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

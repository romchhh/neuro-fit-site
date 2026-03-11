'use client';

import { useState } from 'react';

const navItems = ['HOME', 'NEUROFIT', 'NEURO-ІНТЕНСИВ'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 pt-4 pb-3">
      {/* Desktop nav */}
      <nav className="hidden md:flex justify-center">
        <ul className="inline-flex flex-nowrap gap-1 rounded-full bg-white/70 backdrop-blur-sm px-3 py-2 shadow-sm border border-purple-100">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-6 lg:px-8 py-2.5 rounded-full text-sm lg:text-base font-bold uppercase tracking-wider text-[#764F75] whitespace-nowrap hover:text-[#764F75]/80 hover:bg-purple-50/80 transition block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden px-4">
        <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-full px-5 py-3 shadow-sm border border-purple-100">
          <span className="text-[#764F75] font-bold text-sm uppercase tracking-wider">NeuroFit</span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#764F75] p-1 rounded-full hover:bg-purple-50 transition"
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
            {navItems.map((item, i) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#764F75] hover:bg-purple-50 transition ${i < navItems.length - 1 ? 'border-b border-purple-100/60' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

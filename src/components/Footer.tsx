import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { AGENCY_NAME, AGENCY_EMAIL, AGENCY_LOCATION } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-[#FAF7F2] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <Link
              to="/"
              className="text-base font-serif tracking-[0.18em] uppercase block font-semibold text-[#FAF7F2] hover:opacity-75 transition-opacity"
            >
              {AGENCY_NAME}
            </Link>
            <p className="text-sm font-serif italic text-[#CFC8BC] max-w-sm leading-relaxed">
              A quiet Los Angeles boutique studio for social media management and creative strategy.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-xs uppercase tracking-[0.1em] text-[#CFC8BC]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-white transition-colors">Our Approach</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3 md:text-right space-y-1.5 text-xs text-[#CFC8BC]">
            <p className="text-white font-medium">{AGENCY_LOCATION}</p>
            <a
              href={`mailto:${AGENCY_EMAIL}`}
              className="block text-[#FAF7F2] underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              {AGENCY_EMAIL}
            </a>
            <p className="text-[#8E877B] pt-1">Mon–Fri · 9:00–18:00 PST</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8E877B]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Consistently Socials</span>
            <span aria-hidden="true">·</span>
            <span>Production scoped separately</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors uppercase tracking-[0.12em] cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

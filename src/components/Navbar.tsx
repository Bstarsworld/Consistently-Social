import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_NAME } from '../data/agencyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/', end: true },
    { label: 'About', path: '/about', end: false },
    { label: 'Services', path: '/services', end: false },
    { label: 'Our Approach', path: '/approach', end: false },
    { label: 'Contact', path: '/contact', end: false },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#141414]/10 py-3.5'
            : 'bg-[#FAF7F2] border-b border-[#141414]/10 py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="text-base sm:text-lg font-serif font-semibold tracking-[0.18em] text-[#141414] uppercase whitespace-nowrap shrink-0 hover:opacity-70 transition-opacity"
            aria-label="Consistently Socials Home"
          >
            {AGENCY_NAME}
          </Link>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-[12px] tracking-[0.1em] uppercase font-editorial-sans"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#141414] font-semibold'
                      : 'text-[#666057] hover:text-[#141414] font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#141414]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] bg-[#141414] text-[#FAF7F2] hover:bg-[#2C2926] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#141414] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-[#141414] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 pt-24 bg-[#FAF7F2] px-8 flex flex-col justify-between pb-12 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-serif py-1 border-b border-[#141414]/10 flex items-baseline justify-between transition-colors ${
                    isActive
                      ? 'text-[#141414] italic font-medium'
                      : 'text-[#666057] hover:text-[#141414]'
                  }`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-[#141414]/10">
            <p className="text-xs text-[#6E6860] tracking-wider uppercase">
              Los Angeles, California
            </p>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#141414] text-[#FAF7F2] text-xs uppercase tracking-[0.15em] font-semibold"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

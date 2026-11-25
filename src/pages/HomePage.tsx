import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  AGENCY_TAGLINE,
  AGENCY_SUBTITLE,
  AGENCY_INTRO_KICKER,
  AGENCY_CORE_IDEA,
  AGENCY_LOCATION,
  SERVICES_DATA,
  AUDIENCE_SEGMENTS,
} from '../data/agencyData';
import { EDITORIAL_MEDIA } from '../data/editorialMedia';

export const HomePage: React.FC = () => {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const markError = (key: string) => {
    setImageError((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="bg-[#FAF7F2]">
      {/* 1. HERO: QUIET AUTHORITY & MAXIMUM BREATHING ROOM */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & Clean Action */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xs tracking-[0.18em] uppercase text-[#6E6860]">
                Independent Creative &amp; Social Media Agency · {AGENCY_LOCATION}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[4.15rem] font-serif font-light leading-[1.06] text-[#141414] tracking-tight [text-wrap:balance]">
                {AGENCY_TAGLINE}
              </h1>

              <p className="text-xl sm:text-2xl font-serif italic text-[#383531] leading-relaxed max-w-xl">
                {AGENCY_SUBTITLE}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#2C2926] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#141414] border-b border-[#141414]/40 pb-1 hover:border-[#141414] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Single Uncluttered Studio Plate */}
            <div className="lg:col-span-5">
              <figure>
                <div className="aspect-[3/4] bg-[#EFEBE4] overflow-hidden border border-[#141414]/12">
                  {!imageError.hero ? (
                    <img
                      src={EDITORIAL_MEDIA.heroStudio}
                      alt="Los Angeles creative studio desk with 35mm contact sheets and black linen notebook"
                      referrerPolicy="no-referrer"
                      onError={() => markError('hero')}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8 text-xs font-serif italic text-[#6E6860]">
                      Consistently Socials · Los Angeles Studio
                    </div>
                  )}
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-xs text-[#6E6860] font-serif italic">
                  <span>Fig. 01 — Editorial desk, Los Angeles</span>
                  <span className="not-italic font-sans text-[11px] tracking-[0.12em] uppercase">
                    By Inquiry
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SECRET WEAPON POSITIONING */}
      <section className="py-20 md:py-28 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                01 · The Studio
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414] leading-[1.14] [text-wrap:balance]">
                {AGENCY_INTRO_KICKER}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-[#45413B] leading-relaxed max-w-2xl">
              <p className="text-[#141414] text-lg font-normal leading-relaxed">
                Consistently Socials operates quietly behind the scenes—turning scattered drafts, studio sessions, and brand moments into an unmistakable digital presence.
              </p>
              <p>
                We handle strategy, monthly calendars, voice-true captions, and scheduling so you stay focused on the work. We do not film or edit in-house; when a project needs original shoots, we connect you directly with our vetted Los Angeles creative network.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#141414] border-b border-[#141414] pb-1 hover:opacity-70 transition-opacity"
                >
                  <span>About the Studio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOCUSED PRACTICE INDEX + EDITORIAL DIPTYCH */}
      <section className="py-20 md:py-28 bg-[#F5F0E7] border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20">
          {/* Clean 3-Row Editorial Index */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#141414]/15">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                  02 · What We Do
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
                  Three disciplines. Custom proposals.
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#141414] hover:opacity-70 transition-opacity whitespace-nowrap shrink-0"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-[#141414]/12">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.id}
                  to="/services"
                  className="group py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#FAF7F2]/60 transition-colors -mx-4 px-4"
                >
                  <span className="md:col-span-1 text-xs font-mono tabular-nums text-[#78726A]">
                    {service.number}
                  </span>
                  <h3 className="md:col-span-4 text-2xl font-serif font-normal text-[#141414] group-hover:italic transition-all">
                    {service.title}
                  </h3>
                  <p className="md:col-span-6 text-sm text-[#544F48] leading-relaxed">
                    {service.tagline}
                  </p>
                  <span className="md:col-span-1 md:text-right text-[#141414]">
                    <ArrowUpRight className="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Two-Frame Editorial Diptych & Roster Line */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="group">
                <div className="aspect-[4/3] bg-[#E8E2D7] overflow-hidden border border-[#141414]/12">
                  {!imageError.artist ? (
                    <img
                      src={EDITORIAL_MEDIA.musicArtist}
                      alt="Independent musician tuning an acoustic guitar in a sunlit Los Angeles loft"
                      referrerPolicy="no-referrer"
                      onError={() => markError('artist')}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-serif italic text-[#6E6860]">
                      Independent Artists · Los Angeles
                    </div>
                  )}
                </div>
                <figcaption className="mt-2.5 text-xs font-serif italic text-[#635E56]">
                  Fig. 02 — Independent artists &amp; creative rollouts, Downtown LA.
                </figcaption>
              </figure>

              <figure className="group">
                <div className="aspect-[4/3] bg-[#E8E2D7] overflow-hidden border border-[#141414]/12">
                  {!imageError.atelier ? (
                    <img
                      src={EDITORIAL_MEDIA.atelierCraft}
                      alt="Los Angeles design atelier table with raw linen, ceramics, and film proof prints"
                      referrerPolicy="no-referrer"
                      onError={() => markError('atelier')}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-serif italic text-[#6E6860]">
                      Founders &amp; Boutique Brands · Los Angeles
                    </div>
                  )}
                </div>
                <figcaption className="mt-2.5 text-xs font-serif italic text-[#635E56]">
                  Fig. 03 — Independent founders &amp; design studios, Westside.
                </figcaption>
              </figure>
            </div>

            {/* Quiet Roster Metadata Strip */}
            <div className="pt-6 border-t border-[#141414]/12 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#5E5952]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="uppercase tracking-[0.14em] text-[#141414] font-semibold mr-1">
                  Who We Partner With
                </span>
                {AUDIENCE_SEGMENTS.map((seg, i) => (
                  <React.Fragment key={seg.id}>
                    {i > 0 && <span aria-hidden="true" className="text-[#A8A196]">·</span>}
                    <span>{seg.shortLabel}</span>
                  </React.Fragment>
                ))}
              </div>
              <Link
                to="/approach"
                className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em] text-[#141414] font-semibold hover:opacity-70 transition-opacity whitespace-nowrap shrink-0"
              >
                <span>Our 5-Step Approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUIET CLOSING INVITATION */}
      <section className="py-24 md:py-32 bg-[#FAF7F2] text-center">
        <div className="max-w-2xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#6E6860]">
            Private Intake · Los Angeles
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.12] [text-wrap:balance]">
            {AGENCY_CORE_IDEA}
          </h2>
          <p className="text-sm sm:text-base text-[#544F48] leading-relaxed">
            Tell us what you are building. We respond personally within 48 hours with a workflow shaped around your goals.
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#2C2926] transition-colors"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

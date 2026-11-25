import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  AGENCY_CORE_IDEA,
  AGENCY_INTRO_LEAD,
  AGENCY_LOCATION,
  AGENCY_PHILOSOPHY,
  AUDIENCE_SEGMENTS,
} from '../data/agencyData';
import { EDITORIAL_MEDIA } from '../data/editorialMedia';

export const AboutPage: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="bg-[#FAF7F2]">
      {/* 1. COMPACT EDITORIAL HEADER */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#6E6860]">
            About · {AGENCY_LOCATION}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#141414] leading-[1.08] max-w-3xl [text-wrap:balance]">
            The quiet team behind the feed.
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-[#3B3731] leading-relaxed max-w-2xl">
            {AGENCY_INTRO_LEAD}
          </p>
        </div>
      </section>

      {/* 2. STUDIO ARCHITECTURE PLATE + MANIFESTO */}
      <section className="py-16 md:py-24 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-16">
          <figure>
            <div className="aspect-[16/9] bg-[#ECE6DC] overflow-hidden border border-[#141414]/12">
              {!imgFailed ? (
                <img
                  src={EDITORIAL_MEDIA.laCourtyard}
                  alt="Sunlit limestone and warm stucco courtyard studio in Los Angeles"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs font-serif italic text-[#6E6860]">
                  Los Angeles Studio · Consistently Socials
                </div>
              )}
            </div>
            <figcaption className="mt-3 text-xs font-serif italic text-[#6E6860]">
              Rooted in Los Angeles—inspired by independent music, fashion, art, and entrepreneurship.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                Our Philosophy
              </p>
              <h2 className="text-3xl font-serif font-light text-[#141414] leading-snug">
                Small roster. High taste. Zero gatekeeping.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base text-[#45413B] leading-relaxed max-w-2xl">
              <p className="text-[#141414]">{AGENCY_PHILOSOPHY}</p>
              <p>
                We intentionally stay small so every client works directly with senior creative minds—never handed off to junior templates. Whether you are releasing an independent record in Silver Lake or scaling a design label across the country, we bring calm operational order to your channels.
              </p>
            </div>
          </div>

          {/* Minimal 3-Column Tenet Strip */}
          <div className="pt-12 border-t border-[#141414]/12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-mono text-[#78726A]">01</p>
              <h3 className="text-xl font-serif text-[#141414]">Voice-True Strategy</h3>
              <p className="text-sm text-[#544F48] leading-relaxed">
                No trend-chasing or generic copy. Every calendar sounds unmistakably like you.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-mono text-[#78726A]">02</p>
              <h3 className="text-xl font-serif text-[#141414]">Quiet Cadence</h3>
              <p className="text-sm text-[#544F48] leading-relaxed">
                Staged and approved ahead of time so social media never interrupts your craft.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-mono text-[#78726A]">03</p>
              <h3 className="text-xl font-serif text-[#141414]">Unbundled Production</h3>
              <p className="text-sm text-[#544F48] leading-relaxed">
                When you need shoots, we connect you directly with vetted LA creatives—no markups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE PARTNER WITH (CLEAN TYPOGRAPHIC INDEX) */}
      <section className="py-20 md:py-24 bg-[#F5F0E7] border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="pb-8 border-b border-[#141414]/15 space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
              Who We Work With
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
              Independent talent at every stage.
            </h2>
          </div>

          <div className="divide-y divide-[#141414]/12">
            {AUDIENCE_SEGMENTS.map((segment, idx) => (
              <div
                key={segment.id}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <span className="md:col-span-1 text-xs font-mono tabular-nums text-[#78726A]">
                  0{idx + 1}
                </span>
                <h3 className="md:col-span-3 text-xl font-serif text-[#141414]">
                  {segment.title}
                </h3>
                <p className="md:col-span-6 text-sm text-[#544F48] leading-relaxed">
                  {segment.description}
                </p>
                <div className="md:col-span-2 md:text-right">
                  <Link
                    to={`/contact?clientStage=${encodeURIComponent(segment.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#141414] hover:opacity-70 transition-opacity whitespace-nowrap"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUIET CLOSING CTA */}
      <section className="py-20 md:py-24 text-center bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6 md:px-10 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
            {AGENCY_CORE_IDEA}
          </h2>
          <div className="pt-2">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#2C2926] transition-colors"
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

import React from 'react';
import { ArrowRight, Calendar, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENCY_TAGLINE, AGENCY_SUBTITLE } from '../data/agencyData';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreServices }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-[#141414]/10">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#141414_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Editorial Top Kicker & Trust Markers */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#141414]/10 text-xs uppercase tracking-[0.18em] text-[#6E6962] font-editorial-sans">
          <div className="flex items-center gap-3">
            <span className="text-[#141414] font-medium">Boutique Agency</span>
            <span aria-hidden="true" className="text-[#B5AFA6]">·</span>
            <span>Los Angeles, California</span>
          </div>
          <div className="flex items-center gap-3">
            <span>By Retainer & Custom Scope</span>
            <span aria-hidden="true" className="text-[#B5AFA6]">·</span>
            <span className="text-[#141414] font-semibold">Q2 / Q3 Availability</span>
          </div>
        </div>

        {/* Hero Grid: Vogue Headline & Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Expressive Headline & Strategic Copy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-light leading-[1.08] text-[#141414] tracking-tight [text-wrap:balance]">
                {AGENCY_TAGLINE}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#383531] leading-relaxed max-w-xl">
                {AGENCY_SUBTITLE}
              </p>

              <div className="pt-2 text-sm sm:text-base text-[#524E48] leading-relaxed max-w-xl font-editorial-sans">
                Consistently Social is a Los Angeles creative advisory and social media management practice.
                We eliminate the chaos of daily digital publishing for discerning brands, architectural firms, luxury houses, and executives through rigorous calendar architecture and strategic consistency.
              </div>
            </div>

            {/* CTAs and Scope Clarification */}
            <div className="pt-10 space-y-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenInquiry}
                  className="group px-8 py-4 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#2C2926] transition-all flex items-center justify-center gap-3 shadow-sm"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="px-8 py-4 border border-[#141414]/25 text-[#141414] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#141414]/5 transition-all text-center"
                >
                  Explore Capabilities
                </button>
              </div>

              {/* Scope Distinction Notice */}
              <div className="flex items-start gap-3 pt-4 border-t border-[#141414]/10 text-xs text-[#6B665E]">
                <ShieldCheck className="w-4 h-4 text-[#141414] shrink-0 mt-0.5" />
                <span>
                  <strong>Scope Notice:</strong> We specialize in strategic management, scheduling, and distribution. Original production is coordinated via our independent collaborator network and scoped separately.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Monocle Editorial Production Board */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-[#F3EFE8] border border-[#141414]/15 p-6 sm:p-8 flex flex-col justify-between h-full shadow-[0_20px_40px_rgba(0,0,0,0.03)] relative">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-6">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#706B62]">
                    CS-ARCH-LA // DOSSIER 01
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#141414] uppercase tracking-wider mt-0.5">
                    Operational Grid Blueprint
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#141414]" />
              </div>

              {/* Staging Preview Mockup - Authentic Editorial Layout */}
              <div className="space-y-4">
                {/* Visual Representation of High Fashion Contact Sheet */}
                <div className="bg-[#FAF7F2] border border-[#141414]/10 p-4">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#7A746B] pb-2 border-b border-[#141414]/10 mb-3">
                    <span>Curated Cadence Staging</span>
                    <span className="font-mono">30-Day Queue</span>
                  </div>

                  {/* 3 Editorial Cards in Monocle Style */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#EBE5DB] aspect-[3/4] p-2 flex flex-col justify-between border border-[#141414]/10">
                      <span className="text-[9px] font-mono text-[#524E48]">01 / MON</span>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-[#141414]/30" />
                        <div className="h-1 w-2/3 bg-[#141414]/20" />
                      </div>
                      <span className="text-[8px] uppercase tracking-wider text-[#141414] font-semibold">Editorial</span>
                    </div>

                    <div className="bg-[#E2DDD3] aspect-[3/4] p-2 flex flex-col justify-between border border-[#141414]/10">
                      <span className="text-[9px] font-mono text-[#524E48]">03 / WED</span>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-[#141414]/40" />
                        <div className="h-1 w-4/5 bg-[#141414]/25" />
                      </div>
                      <span className="text-[8px] uppercase tracking-wider text-[#141414] font-semibold">Leadership</span>
                    </div>

                    <div className="bg-[#EDE9E1] aspect-[3/4] p-2 flex flex-col justify-between border border-[#141414]/10">
                      <span className="text-[9px] font-mono text-[#524E48]">05 / FRI</span>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-[#141414]/30" />
                        <div className="h-1 w-1/2 bg-[#141414]/20" />
                      </div>
                      <span className="text-[8px] uppercase tracking-wider text-[#141414] font-semibold">Archive</span>
                    </div>
                  </div>
                </div>

                {/* Real Operational Protocol */}
                <div className="space-y-2.5 pt-2 text-xs text-[#423E39] font-editorial-sans">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#141414]/10">
                    <span className="text-[#6E685F]">Pre-Schedule Lead Time</span>
                    <span className="font-semibold text-[#141414]">14 Days In Advance</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#141414]/10">
                    <span className="text-[#6E685F]">Caption Drafting & Editing</span>
                    <span className="font-semibold text-[#141414]">Human Editorial Voice</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#141414]/10">
                    <span className="text-[#6E685F]">Asset Organization</span>
                    <span className="font-semibold text-[#141414]">Master Cloud Taxonomy</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-[#6E685F]">Publishing Assurance</span>
                    <span className="font-semibold text-[#141414]">Zero Missed Schedules</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#141414]/15 flex items-center justify-between text-xs text-[#6B655C]">
                <span>ConsistentlySocial.com</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#141414]">EST. LOS ANGELES</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Agency Mandate Ribbon (Full Width Row Below Hero Split as per guidelines) */}
        <div className="mt-16 pt-8 border-t border-[#141414]/15 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#736E66]">01 / Strategy</div>
            <div className="text-base font-serif font-semibold text-[#141414] mt-1">Intentional Direction</div>
            <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
              Every asset serves defined commercial or brand equity goals.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#736E66]">02 / Execution</div>
            <div className="text-base font-serif font-semibold text-[#141414] mt-1">Seamless Scheduling</div>
            <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
              Automated multi-platform delivery without last-minute scramble.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#736E66]">03 / Rigor</div>
            <div className="text-base font-serif font-semibold text-[#141414] mt-1">Asset Organization</div>
            <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
              Structured archives with meticulous categorization and copy tags.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#736E66]">04 / Network</div>
            <div className="text-base font-serif font-semibold text-[#141414] mt-1">Creative Connection</div>
            <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
              Direct access to vetted independent LA photographers and directors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

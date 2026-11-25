import React, { useState } from 'react';
import { SAMPLE_CALENDAR_PREVIEW } from '../data/agencyData';
import { Check, Clock, Calendar, Share2, Layers, CheckCircle2 } from 'lucide-react';

export const AssetArchitectureShowcase: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const currentItem = SAMPLE_CALENDAR_PREVIEW[activeItemIndex];

  return (
    <section id="standard" className="py-24 md:py-32 bg-[#F3EFE7] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            04 / THE PUBLISHING STANDARD
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Proprietary Staging Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Explanatory Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.15] [text-wrap:balance]">
              The architecture behind effortless consistency.
            </h2>

            <p className="text-base text-[#524E48] font-editorial-sans leading-relaxed">
              True consistency looks effortless to your audience because the underlying infrastructure is rigorous. We do not draft captions on mobile notes or upload assets the morning of publishing.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#141414]/10 text-xs text-[#4F4B44]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#141414] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#141414] uppercase tracking-wider block">14-Day Staging Runway:</strong>
                  All content, copy proofs, and channel tags are finalized two full weeks ahead of broadcast.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#141414] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#141414] uppercase tracking-wider block">Bespoke Editorial Voice:</strong>
                  Every caption is drafted by experienced copywriters, matching your exact brand tone with zero generic marketing cliches.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#141414] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#141414] uppercase tracking-wider block">Master Cloud Asset Taxonomy:</strong>
                  Raw high-resolution media is tagged, cropped for native aspect ratios, and cataloged for seamless re-purposing.
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Calendar Slate */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#141414] shadow-sm">
            {/* Top Toolbar */}
            <div className="bg-[#141414] text-[#FAF7F2] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5DFD5]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#E5DFD5]">
                  STAGING BOARD // LIVE QUEUE DEMO
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8B2A6]">
                OCTOBER CYCLE · LA ARCHIVE
              </span>
            </div>

            {/* Selector Tabs */}
            <div className="grid grid-cols-3 border-b border-[#141414]/15 bg-[#EFEBE3]">
              {SAMPLE_CALENDAR_PREVIEW.map((item, idx) => {
                const isActive = idx === activeItemIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveItemIndex(idx)}
                    className={`py-3.5 px-3 text-left transition-all border-r border-[#141414]/15 last:border-r-0 ${
                      isActive
                        ? 'bg-[#FAF7F2] text-[#141414] font-medium shadow-[inset_0_2px_0_#141414]'
                        : 'text-[#615B52] hover:text-[#141414] hover:bg-[#FAF7F2]/50'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A847A]">
                      Slot {idx + 1}
                    </div>
                    <div className="text-xs truncate font-serif font-semibold mt-0.5">
                      {item.channel}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Item Detail Inspector */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#141414]/10 pb-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#736E66]">
                    {currentItem.day} · {currentItem.channel}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#141414]">
                    {currentItem.title}
                  </h3>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 bg-[#141414] text-[#FAF7F2]">
                  {currentItem.status}
                </div>
              </div>

              {/* Monocle Editorial Metadata definition */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs py-2 bg-[#F6F2EA] p-4 border border-[#141414]/10">
                <div>
                  <span className="text-[#78726A] uppercase tracking-wider block text-[10px]">Content Type</span>
                  <span className="font-medium text-[#141414]">{currentItem.type}</span>
                </div>
                <div>
                  <span className="text-[#78726A] uppercase tracking-wider block text-[10px]">Narrative Theme</span>
                  <span className="font-medium text-[#141414]">{currentItem.theme}</span>
                </div>
                <div>
                  <span className="text-[#78726A] uppercase tracking-wider block text-[10px]">Distribution</span>
                  <span className="font-medium text-[#141414]">Auto-Scheduled</span>
                </div>
              </div>

              {/* Caption Draft */}
              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#141414]">
                  Editorial Copy Proof (Human-Authored)
                </div>
                <div className="p-4 bg-[#F8F5EF] border border-[#141414]/10 font-serif italic text-sm text-[#2E2B27] leading-relaxed">
                  "{currentItem.captionExcerpt}"
                </div>
              </div>

              {/* Tags & Taxonomy */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#141414]/10">
                <span className="text-xs uppercase tracking-wider text-[#7A746B] font-mono mr-2">Taxonomy:</span>
                {currentItem.tags.map((t, idx) => (
                  <span key={idx} className="text-xs text-[#141414] font-editorial-sans">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

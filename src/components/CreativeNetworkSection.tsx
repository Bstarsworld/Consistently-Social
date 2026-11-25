import React from 'react';
import { NETWORK_SPECIALISTS } from '../data/agencyData';
import { Camera, Film, Sparkles, Scissors, ArrowUpRight, ShieldAlert } from 'lucide-react';

interface CreativeNetworkSectionProps {
  onOpenInquiry: () => void;
}

export const CreativeNetworkSection: React.FC<CreativeNetworkSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="network" className="py-24 md:py-32 bg-[#F5EFE5] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            06 / CREATIVE COLLABORATOR NETWORK
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Los Angeles Talent Roster
          </span>
        </div>

        {/* Headline & Model Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.15] [text-wrap:balance]">
              Production unbundled. Talent unleashed.
            </h2>
            <p className="text-base text-[#4F4B45] font-editorial-sans leading-relaxed">
              Traditional agencies inflate retainer costs by packing full-time production crews into their overhead. We rejected that model. Instead, we maintain a private directory of Los Angeles' most talented independent image-makers and directors.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#FAF7F2] border border-[#141414]/15 p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#736E66] pb-2 border-b border-[#141414]/10">
              The Two-Tier Working Model
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#47433D] font-editorial-sans">
              <p>
                <strong>Tier 1 — Core Management Retainer:</strong> Covers all calendar planning, copywriting, digital asset organization, scheduling, publishing oversight, and analytics.
              </p>
              <p>
                <strong>Tier 2 — Creative Production (Separately Scoped):</strong> When you require fresh campaign photography or motion vignettes, we engineer the creative brief, connect you with the ideal specialist, and manage file handoff with zero agency commission markups.
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#141414] bg-[#EFE9DF] px-2.5 py-1">
                Zero Markup Bloat · Pure Strategic Coordination
              </span>
            </div>
          </div>
        </div>

        {/* Collaborator Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NETWORK_SPECIALISTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] border border-[#141414]/15 p-6 flex flex-col justify-between hover:border-[#141414]/40 transition-colors"
            >
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#7A746B] pb-2 border-b border-[#141414]/10">
                  Specialist Group {(idx + 1).toString().padStart(2, '0')}
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#141414] mt-3">
                  {item.role}
                </h3>

                <div className="text-xs text-[#635E56] font-mono mt-1">
                  {item.location}
                </div>

                <div className="mt-4 pt-3 border-t border-[#141414]/10">
                  <div className="text-[10px] uppercase tracking-wider text-[#827D74] font-mono mb-1.5">
                    Focus Specialties:
                  </div>
                  <ul className="space-y-1 text-xs text-[#3E3A34]">
                    {item.specialties.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#141414] rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#141414]/10 text-xs text-[#524E48] leading-relaxed">
                {item.involvement}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 pt-8 border-t border-[#141414]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs sm:text-sm text-[#544F47]">
            Are you an independent photographer or filmmaker based in Los Angeles?
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 border border-[#141414] text-[#141414] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#141414] hover:text-[#FAF7F2] transition-colors"
          >
            Apply to Join Collaborator Network
          </button>
        </div>
      </div>
    </section>
  );
};

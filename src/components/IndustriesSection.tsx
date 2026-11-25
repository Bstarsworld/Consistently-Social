import React, { useState } from 'react';
import { INDUSTRIES_SERVED } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenInquiry: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES_SERVED[0].id);

  const activeIndustry = INDUSTRIES_SERVED.find((i) => i.id === selectedIndustryId) || INDUSTRIES_SERVED[0];

  return (
    <section id="industries" className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            05 / SECTORS & CLIENT DISCIPLINES
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Curated Practice Alignment
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.15] [text-wrap:balance]">
            Tailored cadence for design-led industries.
          </h2>
          <p className="mt-4 text-base text-[#59544D] font-editorial-sans leading-relaxed">
            Different creative sectors operate under unique aesthetic conventions, sales cycles, and audience expectations. We calibrate tone and channel architecture specifically for your category.
          </p>
        </div>

        {/* Grid of Industries with Selected Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((item) => {
            const isSelected = item.id === selectedIndustryId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIndustryId(item.id)}
                className={`cursor-pointer p-8 transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F2ECE1] border-[#141414] shadow-sm'
                    : 'bg-[#FAF7F2] border-[#141414]/15 hover:border-[#141414]/40 hover:bg-[#F6F1E8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#78726A] pb-3 border-b border-[#141414]/10">
                    <span>Sector Dossier</span>
                    {isSelected && (
                      <span className="text-[#141414] font-semibold">Active</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-[#141414] mt-4">
                    {item.category}
                  </h3>

                  <p className="text-xs font-serif italic text-[#47433E] mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#545048] mt-4 leading-relaxed font-editorial-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#141414]/10 space-y-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A746B] font-mono block">
                      Priority Channels:
                    </span>
                    <div className="text-xs text-[#141414] font-medium mt-1">
                      {item.priorityChannels.join(' · ')}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A746B] font-mono block">
                      Content Focus:
                    </span>
                    <div className="text-xs text-[#524D45] mt-1 line-clamp-2">
                      {item.contentPillars.join(', ')}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenInquiry(item.category);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141414] hover:opacity-75"
                    >
                      <span>Inquire for {item.category.split(' ')[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F6F2EA] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            02 / CORE CAPABILITIES
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Custom Proposals Only · No Generic Packages
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.15] [text-wrap:balance]">
            Disciplined execution tailored to the scale of your ambition.
          </h2>
          <p className="mt-4 text-base text-[#59544D] font-editorial-sans leading-relaxed">
            We structure our engagements around your precise internal gaps: full management retainers for hands-off operational peace of mind, high-impact creative strategy sprints, or curated access to our Los Angeles production talent.
          </p>
        </div>

        {/* Mandatory Scope Clarification Banner */}
        <div className="mb-14 p-5 sm:p-6 bg-[#FAF7F2] border border-[#141414]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <AlertCircle className="w-5 h-5 text-[#141414] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#45413B] leading-relaxed">
              <strong className="text-[#141414] font-semibold uppercase tracking-wider block sm:inline mr-2">
                Scope Architecture:
              </strong>
              Management retainers govern strategy, scheduling, captions, and publishing. Photography and video production are scoped separately with independent creators to guarantee the highest craft and fair pricing without agency markup.
            </div>
          </div>
          <button
            onClick={() => onOpenInquiry()}
            className="text-xs uppercase tracking-[0.14em] font-semibold text-[#141414] hover:opacity-70 whitespace-nowrap shrink-0 border-b border-[#141414] pb-0.5"
          >
            Inquire About Scope
          </button>
        </div>

        {/* Interactive Editorial Service Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`cursor-pointer p-6 sm:p-7 transition-all border text-left ${
                    isSelected
                      ? 'bg-[#FAF7F2] border-[#141414] shadow-sm'
                      : 'bg-transparent border-[#141414]/10 hover:border-[#141414]/30 hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#78726A]">
                      {service.number} // CAPABILITY
                    </span>
                    {isSelected && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#141414] font-semibold">
                        Selected
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#141414] mt-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C574F] mt-2 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Service Specification Card */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#141414] p-8 sm:p-10 shadow-sm relative">
            <div className="flex items-center justify-between border-b border-[#141414]/10 pb-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#736E66]">
                Deliverable Dossier · {activeService.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#141414] font-medium">
                {activeService.cadenceNote}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#141414] font-normal">
              {activeService.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-[#47433E] font-editorial-sans leading-relaxed">
              {activeService.description}
            </p>

            {/* Deliverables List */}
            <div className="mt-8 pt-6 border-t border-[#141414]/10">
              <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#141414] mb-4">
                Key Retainer Deliverables
              </h4>
              <ul className="grid grid-cols-1 gap-3.5 text-xs sm:text-sm text-[#3E3A35]">
                {activeService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#706B62] shrink-0 mt-0.5">
                      {(idx + 1).toString().padStart(2, '0')}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope Boundary Alert */}
            {activeService.scopeNote && (
              <div className="mt-8 p-4 bg-[#F2EDE3] border border-[#141414]/10 text-xs text-[#524E47] leading-relaxed">
                <span className="font-semibold text-[#141414] uppercase tracking-wider block mb-1">
                  Scope Notice:
                </span>
                {activeService.scopeNote}
              </div>
            )}

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#141414]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-[#6B655D]">
                <span>Engagement format: </span>
                <span className="font-semibold text-[#141414]">Custom Bespoke Proposal</span>
              </div>
              <button
                onClick={() => onOpenInquiry(activeService.title)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#2C2926] transition-colors"
              >
                <span>Request Scope Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, NETWORK_SPECIALISTS } from '../data/agencyData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const navigate = useNavigate();

  const activeService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleInquireService = (serviceTitle: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="bg-[#FAF7F2]">
      {/* 1. HEADER */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#6E6860]">
            Services · Tailored Proposals
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#141414] leading-[1.08] max-w-3xl [text-wrap:balance]">
            Focused scope. Built around your rhythm.
          </h1>
          <p className="text-base sm:text-lg text-[#4D4841] leading-relaxed max-w-2xl">
            We specialize in strategy, calendars, caption preparation, and scheduling—not in-house filming or editing. Every engagement is scoped individually rather than forced into rigid packages.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE THREE-DISCIPLINE INSPECTOR */}
      <section className="py-16 md:py-24 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Selector Column */}
            <div className="lg:col-span-5 divide-y divide-[#141414]/12 border-y border-[#141414]/12">
              {SERVICES_DATA.map((service) => {
                const isSelected = service.id === selectedServiceId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-left py-6 px-4 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#F4EFE7] text-[#141414]'
                        : 'bg-transparent text-[#635E56] hover:bg-[#F4EFE7]/50 hover:text-[#141414]'
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-xs tabular-nums text-[#78726A]">
                        {service.number}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[#6E6860]">
                        {service.cadenceNote.split('·')[0].trim()}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-normal text-[#141414] mt-2">
                      {service.title}
                    </h2>
                    <p className="text-xs text-[#5E5952] mt-1.5 leading-relaxed">
                      {service.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Scope Detail Sheet */}
            <div className="lg:col-span-7 bg-[#F5F0E7] border border-[#141414]/15 p-8 sm:p-10 space-y-7">
              <div className="flex items-baseline justify-between border-b border-[#141414]/12 pb-4">
                <span className="font-mono text-xs tabular-nums text-[#6E6860]">
                  Discipline {activeService.number}
                </span>
                <span className="text-xs text-[#141414] font-medium">
                  {activeService.cadenceNote}
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-serif font-normal text-[#141414]">
                  {activeService.title}
                </h2>
                <p className="text-sm sm:text-base text-[#45413B] leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#141414]/12 space-y-3">
                <h3 className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                  Included
                </h3>
                <ul className="space-y-2.5 text-sm text-[#2F2C28]">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-baseline gap-3">
                      <span className="font-mono text-xs tabular-nums text-[#78726A] shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeService.scopeNote && (
                <p className="text-xs text-[#5E5952] pt-4 border-t border-[#141414]/12 leading-relaxed">
                  <strong className="text-[#141414] font-semibold">Scope Note:</strong>{' '}
                  {activeService.scopeNote}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleInquireService(activeService.title)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#2C2926] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Request Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOS ANGELES CREATIVE NETWORK (CLEAN 4-COLUMN STRIP) */}
      <section className="py-20 md:py-24 bg-[#F5F0E7] border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
              Creative Network · Los Angeles
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
              Direct introductions. Zero agency markups.
            </h2>
            <p className="text-sm text-[#544F48] leading-relaxed">
              Need original photography, short-form motion, or art direction? We pair you directly with trusted independent LA creatives for separately scoped shoots.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#141414]/12">
            {NETWORK_SPECIALISTS.map((item, idx) => (
              <div key={item.role} className="space-y-2.5">
                <span className="font-mono text-xs tabular-nums text-[#78726A]">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-serif text-[#141414]">{item.role}</h3>
                <p className="text-xs text-[#6E6860]">
                  {item.specialties.join(' · ')}
                </p>
                <p className="text-sm text-[#4D4841] leading-relaxed pt-1">
                  {item.involvement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUIET CLOSING CTA */}
      <section className="py-20 md:py-24 text-center bg-[#FAF7F2]">
        <div className="max-w-xl mx-auto px-6 md:px-10 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
            Custom proposals, never bloated retainers.
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

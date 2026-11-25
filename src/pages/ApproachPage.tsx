import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APPROACH_STEPS, SAMPLE_CALENDAR_PREVIEW } from '../data/agencyData';
import { ArrowRight } from 'lucide-react';

export const ApproachPage: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [activeQueueIndex, setActiveQueueIndex] = useState<number>(0);

  const currentStep = APPROACH_STEPS[activeStepIndex];
  const currentSample = SAMPLE_CALENDAR_PREVIEW[activeQueueIndex];

  return (
    <div className="bg-[#FAF7F2]">
      {/* 1. HEADER */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#6E6860]">
            Our Approach · Five Stages
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#141414] leading-[1.08] max-w-4xl [text-wrap:balance]">
            Discover. Define. Organize. Schedule. Refine.
          </h1>
          <p className="text-base sm:text-lg text-[#4D4841] leading-relaxed max-w-2xl">
            No viral gimmicks or last-minute scrambling—just a calm, repeatable monthly rhythm built around your voice and real schedule.
          </p>
        </div>
      </section>

      {/* 2. FIVE-STEP INTERACTIVE METHOD */}
      <section className="py-16 md:py-24 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
          {/* Stepper Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {APPROACH_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.name}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 text-left border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] text-[#FAF7F2] border-[#141414]'
                      : 'bg-transparent text-[#544F48] border-[#141414]/15 hover:border-[#141414]/50 hover:text-[#141414]'
                  }`}
                >
                  <span className="block font-mono text-[11px] tabular-nums opacity-70">
                    {step.number}
                  </span>
                  <span className="block text-xl font-serif mt-1">{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Specification */}
          <div className="bg-[#F5F0E7] border border-[#141414]/12 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-xs tabular-nums text-[#6E6860] uppercase tracking-[0.14em]">
                {currentStep.duration}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
                {currentStep.name}
              </h2>
              <p className="text-base font-serif italic text-[#383531] leading-relaxed">
                {currentStep.objective}
              </p>
              <p className="text-sm text-[#544F48] leading-relaxed pt-1">
                {currentStep.processSummary}
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#141414]/12 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                What Happens Here
              </h3>
              <ul className="space-y-3.5 text-sm text-[#2F2C28]">
                {currentStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tabular-nums text-[#78726A] shrink-0">
                      0{i + 1}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUIET PREVIEW: INSIDE A CLIENT QUEUE */}
      <section className="py-16 md:py-24 bg-[#F5F0E7] border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                The Publishing Standard
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414] leading-[1.15]">
                Staged weeks ahead. Approved once.
              </h2>
              <p className="text-sm text-[#544F48] leading-relaxed">
                Every post arrives in a clean monthly staging queue with your visual sequence, schedule window, and caption written in your exact voice.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#141414]/15">
              {/* Simple 3-Tab Selector */}
              <div className="grid grid-cols-3 border-b border-[#141414]/12">
                {SAMPLE_CALENDAR_PREVIEW.map((item, idx) => {
                  const isActive = idx === activeQueueIndex;
                  return (
                    <button
                      key={item.theme}
                      type="button"
                      onClick={() => setActiveQueueIndex(idx)}
                      className={`py-3.5 px-4 text-left text-xs transition-colors border-r border-[#141414]/12 last:border-r-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#141414] text-[#FAF7F2] font-medium'
                          : 'text-[#5E5952] hover:text-[#141414] hover:bg-[#F5F0E7]/60'
                      }`}
                    >
                      <span className="block truncate">{item.theme}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-[#141414]/10 text-xs text-[#6E6860]">
                  <span>
                    {currentSample.day} · {currentSample.channel}
                  </span>
                  <span className="text-[#141414] font-medium">
                    {currentSample.status}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#141414]">
                  {currentSample.title}
                </h3>

                <blockquote className="text-base font-serif italic text-[#383531] leading-relaxed py-4 border-y border-[#141414]/10">
                  “{currentSample.captionExcerpt}”
                </blockquote>

                <div className="flex items-center justify-between text-xs text-[#6E6860]">
                  <span>Format: {currentSample.type}</span>
                  <span>{currentSample.tags.join('  ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUIET CLOSING CTA */}
      <section className="py-20 md:py-24 text-center bg-[#FAF7F2]">
        <div className="max-w-xl mx-auto px-6 md:px-10 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#141414]">
            Ready for a calmer digital rhythm?
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

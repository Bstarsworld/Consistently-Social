import React, { useState } from 'react';
import { APPROACH_STEPS } from '../data/agencyData';
import { ArrowRight, Clock, Target, CheckCircle } from 'lucide-react';

interface ApproachSectionProps {
  onOpenInquiry: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenInquiry }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            03 / METHODOLOGY & PROCESS
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Five-Stage Client Framework
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.15] [text-wrap:balance]">
            From initial audit to uninterrupted momentum.
          </h2>
          <p className="mt-4 text-base text-[#59544D] font-editorial-sans leading-relaxed">
            We operate through a battle-tested five-stage framework. By systematically decoupling strategy, asset management, and scheduling, we remove stress and give your team back their time.
          </p>
        </div>

        {/* Five Step Interactive Timeline Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10 border-b border-[#141414]/15 pb-8">
          {APPROACH_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.name}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 text-left transition-all border ${
                  isActive
                    ? 'bg-[#141414] text-[#FAF7F2] border-[#141414] shadow-sm'
                    : 'bg-[#F4EFE6] text-[#47433E] border-[#141414]/10 hover:border-[#141414]/40 hover:bg-[#EBE5DA]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest opacity-80">
                  <span>Phase {step.number}</span>
                  <span>{step.duration}</span>
                </div>
                <div className="text-lg font-serif font-medium mt-2">
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="bg-[#F4EFE7] border border-[#141414]/15 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#736D64] font-mono">
                <span>Phase {currentStep.number}</span>
                <span aria-hidden="true">/</span>
                <span>{currentStep.duration}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-[#141414]">
                {currentStep.name}
              </h3>

              <p className="text-base sm:text-lg font-serif italic text-[#3B3732] leading-relaxed pt-2">
                {currentStep.objective}
              </p>

              <p className="text-xs sm:text-sm text-[#544F48] leading-relaxed font-editorial-sans pt-2">
                {currentStep.processSummary}
              </p>

              <div className="pt-6">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#141414] border-b border-[#141414] pb-1 hover:opacity-75 transition-opacity"
                >
                  <span>Initiate Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#141414]/10 p-6 sm:p-8">
              <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#141414] pb-3 border-b border-[#141414]/10 mb-6 flex items-center justify-between">
                <span>Phase Deliverables & Checkpoints</span>
                <span className="font-mono text-[#78726A] text-[11px]">Strict QA Standards</span>
              </h4>

              <div className="space-y-4">
                {currentStep.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 py-1">
                    <span className="w-5 h-5 rounded-full bg-[#141414]/5 text-[#141414] flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5 border border-[#141414]/10">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#38342F] font-editorial-sans leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Approach Assurance Notice */}
              <div className="mt-8 pt-6 border-t border-[#141414]/10 flex items-center justify-between text-xs text-[#6B655D]">
                <span>Status: Client sign-off required prior to stage progression.</span>
                <span className="font-mono text-[#141414] font-semibold">100% Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

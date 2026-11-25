import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface AgencyIntroProps {
  onOpenInquiry: () => void;
}

export const AgencyIntro: React.FC<AgencyIntroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            01 / AGENCY PHILOSOPHY
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Los Angeles Editorial Practice
          </span>
        </div>

        {/* Pull Quote & Lead Argument */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#141414] leading-[1.15] tracking-tight [text-wrap:balance]">
              Consistency is the rarest commodity in modern digital culture.
            </h2>
            <div className="h-0.5 w-16 bg-[#141414]" />
            <p className="text-sm font-editorial-sans uppercase tracking-[0.14em] text-[#6E6860]">
              Why high-end brands falter on social channels
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#3B3834] font-editorial-sans leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#141414]">
              Most creative businesses do not suffer from a lack of talent or quality; they suffer from sporadic, exhausted publishing. A brilliant collection or architectural milestone is launched with fanfare, followed by three weeks of silence, erratic captions, and fragmented aesthetic choices.
            </p>

            <p className="text-[#4F4B45]">
              At Consistently Social, we believe that an authentic digital presence is not born from chasing ephemeral viral choreography. It is built through disciplined calendar architecture, calibrated storytelling, and relentless operational execution.
            </p>

            {/* Monocle Three-Column Manifesto Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#141414]/10 text-sm">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78726A]">Pillar I</span>
                <h3 className="font-serif font-semibold text-[#141414] text-base">Deliberate Presence</h3>
                <p className="text-xs text-[#5E5952] leading-relaxed">
                  Every post reflects your brand's true caliber, tone, and visual poise. No filler.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78726A]">Pillar II</span>
                <h3 className="font-serif font-semibold text-[#141414] text-base">Unbroken Cadence</h3>
                <p className="text-xs text-[#5E5952] leading-relaxed">
                  Calendars built 14 to 30 days ahead eliminate operational panic and preserve momentum.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78726A]">Pillar III</span>
                <h3 className="font-serif font-semibold text-[#141414] text-base">Zero Bloat</h3>
                <p className="text-xs text-[#5E5952] leading-relaxed">
                  Transparent scopes. You pay for strategic rigor, not bloated agency overhead or markups.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#141414] border-b border-[#141414] pb-1 hover:opacity-75 transition-opacity"
              >
                <span>Discuss an Advisory Retainer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { ArrowRight, Check, AlertCircle, Copy, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

interface InquirySectionProps {
  initialService?: string;
  initialIndustry?: string;
}

const PLATFORM_OPTIONS = [
  'Instagram',
  'LinkedIn',
  'Pinterest',
  'TikTok',
  'Threads',
  'YouTube'
];

const SERVICE_OPTIONS = [
  'Social Media Management (Planning, Scheduling & Publishing)',
  'Creative Strategy & Tone Architecture',
  'Creative Collaborator Network (Production Coordination)'
];

const BUDGET_RANGES = [
  '$3,500 – $5,000 / month (Essential Retainer)',
  '$5,000 – $8,000 / month (Core Editorial Retainer)',
  '$8,000 – $12,000 / month (Multi-Channel Luxury)',
  '$12,000+ / month (Enterprise & Multi-Brand)',
  'Custom Advisory Scope'
];

const START_TIMELINES = [
  'Immediate (Within 14 Days)',
  'Next Month (Standard Intake)',
  'Next Quarter (Planning Ahead)',
  'Exploring Future Strategic Alignment'
];

const INDUSTRY_OPTIONS = [
  'Fashion & Ready-to-Wear',
  'Architecture & Interior Design',
  'Fine Jewelry & Luxury Goods',
  'Hospitality & Culinary',
  'Contemporary Art & Cultural',
  'Founder & Executive Personal Brand',
  'Other Luxury / Design Practice'
];

export const InquirySection: React.FC<InquirySectionProps> = ({
  initialService,
  initialIndustry
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    brandName: '',
    email: '',
    handleOrWebsite: '',
    industry: initialIndustry || '',
    platforms: ['Instagram', 'LinkedIn'],
    services: initialService ? [initialService] : ['Social Media Management (Planning, Scheduling & Publishing)'],
    budget: BUDGET_RANGES[1],
    startDate: START_TIMELINES[1],
    notes: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDossier, setSubmittedDossier] = useState<{
    id: string;
    timestamp: string;
    data: InquiryFormData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.brandName.trim()) errs.brandName = 'Brand or practice name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Work email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate or professional email.';
    }
    if (!formData.handleOrWebsite.trim()) {
      errs.handleOrWebsite = 'Website URL or Instagram handle (@...) is required.';
    }
    if (!formData.industry) {
      errs.industry = 'Please select your industry discipline.';
    }
    if (formData.platforms.length === 0) {
      errs.platforms = 'Please select at least one priority platform.';
    }
    if (formData.services.length === 0) {
      errs.services = 'Please select at least one service focus.';
    }
    if (!formData.budget) {
      errs.budget = 'Please select an estimated monthly budget tier.';
    }
    if (!formData.startDate) {
      errs.startDate = 'Please select a desired start window.';
    }
    if (!formData.notes.trim()) {
      errs.notes = 'Please outline your current channels, pain points, or goals.';
    } else if (formData.notes.trim().length < 15) {
      errs.notes = 'Please provide at least 15 characters describing your requirements.';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must acknowledge the privacy & confidential intake protocol.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `CS-LA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const submissionRecord = {
        id: generatedId,
        timestamp: new Date().toISOString(),
        data: formData
      };

      // Save real inquiry submission to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('cs_agency_inquiries') || '[]');
        existing.push(submissionRecord);
        localStorage.setItem('cs_agency_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setIsSubmitting(false);
      setSubmittedDossier(submissionRecord);
    }, 600);
  };

  const handleCopySummary = () => {
    if (!submittedDossier) return;
    const summary = `
[CONSISTENTLY SOCIALS - INQUIRY DOSSIER]
Dossier ID: ${submittedDossier.id}
Client: ${submittedDossier.data.fullName} (${submittedDossier.data.brandName})
Email: ${submittedDossier.data.email}
Digital Footprint: ${submittedDossier.data.handleOrWebsite}
Industry: ${submittedDossier.data.industry}
Platforms: ${submittedDossier.data.platforms.join(', ')}
Services: ${submittedDossier.data.services.join(', ')}
Budget: ${submittedDossier.data.budget}
Target Start: ${submittedDossier.data.startDate}
Project Brief: ${submittedDossier.data.notes}
Submission Timestamp: ${submittedDossier.timestamp}
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const togglePlatform = (p: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(p)
        ? prev.platforms.filter((x) => x !== p)
        : [...prev.platforms, p]
    }));
  };

  const toggleService = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s]
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#141414]/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#736E66] font-mono">
            07 / CLIENT INTAKE & QUALIFICATION
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#141414] font-medium">
            Confidential Client Protocol
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#141414] leading-[1.15] [text-wrap:balance]">
            Initiate a strategic partnership.
          </h2>
          <p className="mt-4 text-base text-[#524E47] font-editorial-sans leading-relaxed">
            We limit active retainers to maintain the highest editorial and operational caliber. Please complete the dossier below to begin our 48-hour discovery review.
          </p>
        </div>

        {submittedDossier ? (
          /* Real Submission Receipt State */
          <div className="bg-[#FAF7F2] border-2 border-[#141414] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between border-b border-[#141414]/15 pb-6 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A746B]">
                  INQUIRY CONFIRMATION // DOSSIER LODGED
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#141414] mt-1">
                  Inquiry Reference: {submittedDossier.id}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#141414] text-[#FAF7F2] flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-6 text-sm text-[#3E3A34] font-editorial-sans">
              <p className="text-base text-[#141414] leading-relaxed">
                Thank you, <strong>{submittedDossier.data.fullName}</strong>. Your inquiry for <strong>{submittedDossier.data.brandName}</strong> has been logged directly into our Los Angeles agency intake docket.
              </p>

              {/* Next Steps Accordion */}
              <div className="bg-[#F4EFE7] p-6 border border-[#141414]/10 space-y-4">
                <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#141414] border-b border-[#141414]/10 pb-2">
                  Standard 48-Hour Protocol:
                </h4>
                <div className="space-y-2 text-xs text-[#524E48]">
                  <p>
                    <strong>1. Channel Diagnostic:</strong> We review your provided digital footprint ({submittedDossier.data.handleOrWebsite}) and past publishing cadences.
                  </p>
                  <p>
                    <strong>2. Managing Partner Review:</strong> A partner evaluates our current capacity against your desired start window ({submittedDossier.data.startDate}).
                  </p>
                  <p>
                    <strong>3. Bespoke Proposal & Invitation:</strong> You will receive a direct email at <em>{submittedDossier.data.email}</em> with an introductory consultation link and preliminary scope outline.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-[#141414]/15">
                <button
                  onClick={handleCopySummary}
                  className="px-6 py-3 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#2C2926] transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Dossier Copied' : 'Copy Inquiry Dossier'}</span>
                </button>

                <a
                  href={`mailto:info@consistentlysocial.com?subject=Consistently%20Social%20Inquiry%20${submittedDossier.id}&body=Hello%20Consistently%20Social%20Team,%0A%0AReferencing%20Dossier%20${submittedDossier.id}%20for%20${encodeURIComponent(submittedDossier.data.brandName)}.`}
                  className="px-6 py-3 border border-[#141414] text-[#141414] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#141414]/5 transition-colors text-center"
                >
                  Direct Email Inquiries
                </a>

                <button
                  onClick={() => setSubmittedDossier(null)}
                  className="text-xs text-[#736E66] hover:text-[#141414] underline text-center sm:ml-auto"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Complete Qualified Intake Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF7F2] border border-[#141414]/20 p-8 sm:p-12 shadow-sm space-y-10"
            noValidate
          >
            {/* Part 1: Client & Practice Details */}
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#736E66] border-b border-[#141414]/10 pb-2">
                01 // Contact & Brand Credentials
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Lauren Vance"
                    className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                    Brand or Practice Name *
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="e.g. Atelier Vance Architecture"
                    className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                  />
                  {errors.brandName && (
                    <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.brandName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="lauren@ateliervance.com"
                    className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                    Website URL or Instagram (@...) *
                  </label>
                  <input
                    type="text"
                    value={formData.handleOrWebsite}
                    onChange={(e) => setFormData({ ...formData, handleOrWebsite: e.target.value })}
                    placeholder="@ateliervance or https://ateliervance.com"
                    className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                  />
                  {errors.handleOrWebsite && (
                    <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.handleOrWebsite}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                  Industry Discipline *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                >
                  <option value="">Select industry...</option>
                  {INDUSTRY_OPTIONS.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.industry}</p>
                )}
              </div>
            </div>

            {/* Part 2: Channels & Scope Selection */}
            <div className="space-y-6 pt-4 border-t border-[#141414]/10">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#736E66] border-b border-[#141414]/10 pb-2">
                02 // Target Channels & Scope Required
              </div>

              {/* Priority Platforms */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-3">
                  Priority Channels *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {PLATFORM_OPTIONS.map((p) => {
                    const isChecked = formData.platforms.includes(p);
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => togglePlatform(p)}
                        className={`py-2.5 px-3 text-left border text-xs font-medium transition-colors flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#141414] text-[#FAF7F2] border-[#141414]'
                            : 'bg-[#FAF7F2] text-[#423F3A] border-[#141414]/20 hover:border-[#141414]/50'
                        }`}
                      >
                        <span>{p}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-[#FAF7F2]" />}
                      </button>
                    );
                  })}
                </div>
                {errors.platforms && (
                  <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.platforms}</p>
                )}
              </div>

              {/* Services Required */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-3">
                  Services Needed *
                </label>
                <div className="space-y-2">
                  {SERVICE_OPTIONS.map((s) => {
                    const isChecked = formData.services.includes(s);
                    return (
                      <div
                        key={s}
                        onClick={() => toggleService(s)}
                        className={`p-3.5 border cursor-pointer text-xs sm:text-sm transition-colors flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#F2ECE1] border-[#141414] text-[#141414]'
                            : 'bg-[#FAF7F2] border-[#141414]/20 text-[#544F47] hover:border-[#141414]/40'
                        }`}
                      >
                        <span>{s}</span>
                        <div
                          className={`w-4 h-4 border flex items-center justify-center shrink-0 ml-3 ${
                            isChecked ? 'bg-[#141414] border-[#141414]' : 'border-[#141414]/30'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-[#FAF7F2]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.services}</p>
                )}
              </div>

              {/* Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                    Estimated Monthly Budget *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-xs sm:text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                    Desired Start Date *
                  </label>
                  <select
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-4 py-3 text-xs sm:text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                  >
                    {START_TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.startDate && (
                    <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.startDate}</p>
                  )}
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#141414] font-medium mb-2">
                  Project Details & Current Publishing Pain Points *
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your brand's current posting rhythm, upcoming campaigns, or specific challenges with consistency and caption drafting..."
                  className="w-full bg-[#FAF7F2] border border-[#141414]/20 p-4 text-sm text-[#141414] focus:outline-none focus:border-[#141414] transition-colors"
                />
                {errors.notes && (
                  <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.notes}</p>
                )}
              </div>

              {/* Privacy & Confidentiality Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 accent-[#141414]"
                  />
                  <span className="text-xs text-[#524E47] leading-relaxed">
                    I acknowledge that all submitted brand details are reviewed under strict agency confidentiality. Consistently Social will never disclose prospective client information or publish without explicit authorization.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p className="mt-1.5 text-xs text-red-600 font-editorial-sans">{errors.privacyConsent}</p>
                )}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6 border-t border-[#141414]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-[#6B655D]">
                <span>Response turnaround: </span>
                <span className="font-semibold text-[#141414]">Within 48 Business Hours</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#2C2926] disabled:opacity-50 transition-all flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? 'Verifying Dossier...' : 'Submit Strategic Inquiry'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

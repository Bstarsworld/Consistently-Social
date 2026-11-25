import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InquiryFormData } from '../types';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { AGENCY_EMAIL, AGENCY_LOCATION } from '../data/agencyData';

const CLIENT_STAGES = [
  'The Everyday Creator',
  'The Independent Artist',
  'The Entrepreneur',
  'The Emerging Talent',
  'The Established Brand',
  'Other Creative Practice',
];

const PLATFORM_OPTIONS = [
  'Instagram',
  'TikTok',
  'YouTube',
  'Threads',
  'LinkedIn',
  'Pinterest',
];

const SERVICE_OPTIONS = [
  'Social Media Management',
  'Creative Strategy',
  'Creative Network',
];

const BUDGET_RANGES = [
  '$1,500 – $3,000 / month',
  '$3,000 – $5,000 / month',
  '$5,000 – $8,000 / month',
  '$8,000+ / month',
  'Project-Based Strategy Sprint',
];

const START_TIMELINES = [
  'Within 14 days',
  'Next month',
  'Upcoming release or launch',
  'Exploring options',
];

const INDUSTRY_OPTIONS = [
  'Music & Performing Arts',
  'Content Creation & Digital Storytelling',
  'Fashion, Apparel & Design',
  'Art & Visual Culture',
  'Small Business & Direct-To-Consumer',
  'Architecture & Interior Design',
  'Hospitality & Lifestyle',
  'Entertainment & Talent',
  'Other',
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');
  const preselectedIndustry = searchParams.get('industry');
  const preselectedStage = searchParams.get('clientStage');

  const matchService = (value: string | null) => {
    if (!value) return null;
    return SERVICE_OPTIONS.find((s) =>
      s.toLowerCase().includes(value.toLowerCase()) ||
      value.toLowerCase().includes(s.toLowerCase())
    );
  };

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    brandName: '',
    email: '',
    handleOrWebsite: '',
    clientStage: preselectedStage
      ? CLIENT_STAGES.find((s) =>
          s.toLowerCase().includes(preselectedStage.toLowerCase())
        ) || preselectedStage
      : '',
    industry: preselectedIndustry || '',
    platforms: ['Instagram', 'TikTok'],
    services: matchService(preselectedService)
      ? [matchService(preselectedService)!]
      : ['Social Media Management'],
    budget: BUDGET_RANGES[1],
    startDate: START_TIMELINES[1],
    notes: '',
    privacyConsent: false,
  });

  useEffect(() => {
    const matchedSvc = matchService(preselectedService);
    if (matchedSvc) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(matchedSvc)
          ? prev.services
          : [matchedSvc, ...prev.services],
      }));
    }
    if (preselectedIndustry) {
      setFormData((prev) => ({ ...prev, industry: preselectedIndustry }));
    }
    if (preselectedStage) {
      const matched = CLIENT_STAGES.find((s) =>
        s.toLowerCase().includes(preselectedStage.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, clientStage: matched }));
      }
    }
  }, [preselectedService, preselectedIndustry, preselectedStage]);

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

    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.brandName.trim())
      errs.brandName = 'Please enter your brand, artist, or project name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.handleOrWebsite.trim()) {
      errs.handleOrWebsite = 'Please enter your website or handle.';
    }
    if (!formData.industry) {
      errs.industry = 'Please select your field.';
    }
    if (formData.platforms.length === 0) {
      errs.platforms = 'Select at least one platform.';
    }
    if (formData.services.length === 0) {
      errs.services = 'Select at least one service.';
    }
    if (!formData.notes.trim() || formData.notes.trim().length < 10) {
      errs.notes = 'Please share a brief note about your project (10+ characters).';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'Please confirm confidentiality consent before submitting.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `CS-LA-${Math.floor(1000 + Math.random() * 9000)}`;
      const submissionRecord = {
        id: generatedId,
        timestamp: new Date().toISOString(),
        data: formData,
      };

      try {
        const existing = JSON.parse(
          localStorage.getItem('cs_agency_inquiries') || '[]'
        );
        existing.push(submissionRecord);
        localStorage.setItem('cs_agency_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setIsSubmitting(false);
      setSubmittedDossier(submissionRecord);
    }, 350);
  };

  const handleCopySummary = () => {
    if (!submittedDossier) return;
    const summary = [
      `Consistently Socials — Inquiry ${submittedDossier.id}`,
      `Name: ${submittedDossier.data.fullName}`,
      `Brand / Project: ${submittedDossier.data.brandName}`,
      `Email: ${submittedDossier.data.email}`,
      `Handle / Website: ${submittedDossier.data.handleOrWebsite}`,
      `Industry: ${submittedDossier.data.industry}`,
      `Platforms: ${submittedDossier.data.platforms.join(', ')}`,
      `Services: ${submittedDossier.data.services.join(', ')}`,
      `Budget: ${submittedDossier.data.budget}`,
      `Start Window: ${submittedDossier.data.startDate}`,
      `Notes: ${submittedDossier.data.notes}`,
    ].join('\n');

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const togglePlatform = (p: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(p)
        ? prev.platforms.filter((x) => x !== p)
        : [...prev.platforms, p],
    }));
  };

  const toggleService = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  return (
    <div className="bg-[#FAF7F2]">
      {/* 1. COMPACT HEADER */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 border-b border-[#141414]/12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[#6E6860]">
            Contact · Confidential Inquiry
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#141414] leading-[1.08] [text-wrap:balance]">
            Tell us what you’re building.
          </h1>
          <p className="text-base text-[#544F48] max-w-xl leading-relaxed">
            Share your channels and timeline below. Every inquiry is read personally and answered within 48 business hours.
          </p>
        </div>
      </section>

      {/* 2. FORM + MINIMAL STUDIO SIDEBAR */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              {submittedDossier ? (
                <div className="bg-[#F5F0E7] border border-[#141414] p-8 sm:p-10 space-y-6">
                  <div className="flex items-baseline justify-between border-b border-[#141414]/15 pb-4">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
                      Inquiry Recorded
                    </span>
                    <span className="font-mono text-xs tabular-nums text-[#141414]">
                      {submittedDossier.id}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-light text-[#141414]">
                      Thank you, {submittedDossier.data.fullName}.
                    </h2>
                    <p className="text-sm text-[#4D4841] leading-relaxed">
                      Your intake summary for <strong>{submittedDossier.data.brandName}</strong> has been saved locally in your browser session. To transmit it directly to our Los Angeles desk, click <strong>Send via Email</strong> below or copy the summary.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#141414]/12">
                    <a
                      href={`mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(
                        `Inquiry ${submittedDossier.id} — ${submittedDossier.data.brandName}`
                      )}&body=${encodeURIComponent(
                        `Hello Consistently Socials,\n\nName: ${submittedDossier.data.fullName}\nBrand/Project: ${submittedDossier.data.brandName}\nHandle/Website: ${submittedDossier.data.handleOrWebsite}\nIndustry: ${submittedDossier.data.industry}\nPlatforms: ${submittedDossier.data.platforms.join(', ')}\nServices: ${submittedDossier.data.services.join(', ')}\nBudget: ${submittedDossier.data.budget}\nStart: ${submittedDossier.data.startDate}\n\nNotes:\n${submittedDossier.data.notes}`
                      )}`}
                      className="px-6 py-3 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#2C2926] transition-colors"
                    >
                      Send via Email
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="px-6 py-3 border border-[#141414]/30 text-[#141414] text-xs font-semibold uppercase tracking-[0.14em] hover:border-[#141414] transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmittedDossier(null)}
                      className="text-xs text-[#6E6860] hover:text-[#141414] underline underline-offset-4 sm:ml-auto cursor-pointer"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  noValidate
                >
                  {/* Group 1 */}
                  <div className="space-y-5">
                    <h2 className="text-xs uppercase tracking-[0.16em] text-[#6E6860] pb-2 border-b border-[#141414]/12">
                      01. About You
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Maya Lin"
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        />
                        {errors.fullName && <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label htmlFor="brandName" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Brand, Artist, or Project *
                        </label>
                        <input
                          id="brandName"
                          type="text"
                          value={formData.brandName}
                          onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                          placeholder="Studio Vance"
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        />
                        {errors.brandName && <p className="mt-1 text-xs text-red-700">{errors.brandName}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="maya@studiovance.com"
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="handleOrWebsite" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Website or Instagram *
                        </label>
                        <input
                          id="handleOrWebsite"
                          type="text"
                          value={formData.handleOrWebsite}
                          onChange={(e) =>
                            setFormData({ ...formData, handleOrWebsite: e.target.value })
                          }
                          placeholder="@studiovance"
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        />
                        {errors.handleOrWebsite && (
                          <p className="mt-1 text-xs text-red-700">{errors.handleOrWebsite}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        >
                          <option value="">Select field</option>
                          {INDUSTRY_OPTIONS.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                        {errors.industry && <p className="mt-1 text-xs text-red-700">{errors.industry}</p>}
                      </div>

                      <div>
                        <label htmlFor="clientStage" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Stage (Optional)
                        </label>
                        <select
                          id="clientStage"
                          value={formData.clientStage || ''}
                          onChange={(e) => setFormData({ ...formData, clientStage: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        >
                          <option value="">Select stage</option>
                          {CLIENT_STAGES.map((stage) => (
                            <option key={stage} value={stage}>
                              {stage}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group 2 */}
                  <div className="space-y-5 pt-2">
                    <h2 className="text-xs uppercase tracking-[0.16em] text-[#6E6860] pb-2 border-b border-[#141414]/12">
                      02. Scope &amp; Timing
                    </h2>

                    <div>
                      <span className="block text-xs text-[#141414] font-medium mb-2">
                        Platforms *
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {PLATFORM_OPTIONS.map((p) => {
                          const isChecked = formData.platforms.includes(p);
                          return (
                            <button
                              type="button"
                              key={p}
                              onClick={() => togglePlatform(p)}
                              className={`py-2 px-3 text-left border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isChecked
                                  ? 'bg-[#141414] text-[#FAF7F2] border-[#141414]'
                                  : 'bg-transparent text-[#4D4841] border-[#141414]/20 hover:border-[#141414]/60'
                              }`}
                            >
                              <span>{p}</span>
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </button>
                          );
                        })}
                      </div>
                      {errors.platforms && <p className="mt-1 text-xs text-red-700">{errors.platforms}</p>}
                    </div>

                    <div>
                      <span className="block text-xs text-[#141414] font-medium mb-2">
                        Services Needed *
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {SERVICE_OPTIONS.map((s) => {
                          const isChecked = formData.services.includes(s);
                          return (
                            <button
                              type="button"
                              key={s}
                              onClick={() => toggleService(s)}
                              className={`py-2.5 px-3 text-left border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isChecked
                                  ? 'bg-[#141414] text-[#FAF7F2] border-[#141414]'
                                  : 'bg-transparent text-[#4D4841] border-[#141414]/20 hover:border-[#141414]/60'
                              }`}
                            >
                              <span>{s}</span>
                              {isChecked && <Check className="w-3.5 h-3.5 shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                      {errors.services && <p className="mt-1 text-xs text-red-700">{errors.services}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="budget" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Estimated Monthly Budget
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        >
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="startDate" className="block text-xs text-[#141414] font-medium mb-1.5">
                          Desired Start
                        </label>
                        <select
                          id="startDate"
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#141414]/20 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                        >
                          {START_TIMELINES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-xs text-[#141414] font-medium mb-1.5">
                        Project Details *
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about what you are creating, upcoming releases, and what consistency looks like for you..."
                        className="w-full bg-[#FAF7F2] border border-[#141414]/20 p-3.5 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                      />
                      {errors.notes && <p className="mt-1 text-xs text-red-700">{errors.notes}</p>}
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) =>
                          setFormData({ ...formData, privacyConsent: e.target.checked })
                        }
                        className="mt-0.5 accent-[#141414]"
                      />
                      <span className="text-xs text-[#544F48] leading-relaxed">
                        I understand my project details are kept strictly confidential and used only to respond to this inquiry.
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-xs text-red-700">{errors.privacyConsent}</p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#141414]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-[#6E6860]">
                      Personal reply within 48 hours
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-[#141414] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#2C2926] disabled:opacity-50 transition-colors inline-flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Saving...' : 'Submit Inquiry'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Minimal Studio Sidebar */}
            <aside className="lg:col-span-4 bg-[#F5F0E7] border border-[#141414]/12 p-7 space-y-6 text-xs text-[#4D4841]">
              <p className="uppercase tracking-[0.16em] text-[#6E6860] pb-3 border-b border-[#141414]/10">
                Los Angeles Desk
              </p>

              <div className="space-y-1">
                <p className="text-[#141414] font-semibold">Direct Email</p>
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  className="text-[#141414] underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  {AGENCY_EMAIL}
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-[#141414] font-semibold">Location</p>
                <p>{AGENCY_LOCATION}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[#141414] font-semibold">Hours</p>
                <p>Monday – Friday · 9:00 – 18:00 PST</p>
              </div>

              <p className="pt-4 border-t border-[#141414]/10 text-[#5E5952] leading-relaxed">
                Unreleased music, upcoming drops, and quiet rebrands are always held in complete discretion.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

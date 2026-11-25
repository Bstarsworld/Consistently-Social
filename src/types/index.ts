export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  scopeNote?: string;
  cadenceNote: string;
}

export interface ApproachStep {
  number: string;
  name: string;
  duration: string;
  objective: string;
  deliverables: string[];
  processSummary: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  whoItIsFor: string[];
  howWeHelp: string;
  commonPlatforms: string[];
}

export interface IndustryFocus {
  id: string;
  category: string;
  subtitle: string;
  description: string;
  priorityChannels: string[];
  contentPillars: string[];
}

export interface NetworkRole {
  role: string;
  specialties: string[];
  location: string;
  involvement: string;
}

export interface InquiryFormData {
  fullName: string;
  brandName: string;
  email: string;
  handleOrWebsite: string;
  clientStage?: string;
  industry: string;
  platforms: string[];
  services: string[];
  budget: string;
  startDate: string;
  notes: string;
  privacyConsent: boolean;
}

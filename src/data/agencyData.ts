import { ServiceItem, ApproachStep, AudienceSegment, IndustryFocus, NetworkRole } from '../types';

export const AGENCY_NAME = "CONSISTENTLY SOCIALS";
export const AGENCY_TAGLINE = "CREATE FREELY. SHOW UP CONSISTENTLY.";
export const AGENCY_SUBTITLE =
  "The quiet Los Angeles social media and creative strategy studio behind independent creators, artists, founders, and brands worth watching.";
export const AGENCY_LOCATION = "Los Angeles, California";
export const AGENCY_EMAIL = "info@consistentlysocial.com";

export const AGENCY_INTRO_KICKER = "Small by design. Built to be your secret weapon.";
export const AGENCY_INTRO_LEAD =
  "Senior-level organization, voice-true copy, and steady publishing—without the noise, bloat, or minimums of a traditional agency.";
export const AGENCY_CORE_IDEA = "You bring the vision. We keep it moving.";
export const AGENCY_PHILOSOPHY =
  "You shouldn't need a major label or a massive retainer to show up with taste and consistency. We operate quietly behind the scenes so your work always looks intentional.";

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: "everyday-creator",
    title: "The Everyday Creator",
    shortLabel: "Creators",
    subtitle: "Content creators and storytellers growing with a steady voice.",
    description:
      "We turn your camera roll and raw drafts into an organized monthly queue so you can keep creating without daily posting fatigue.",
    whoItIsFor: ["Video creators", "Style & culture curators", "Writers expanding to social"],
    howWeHelp: "Organized 30-day calendars, authentic captions, and hands-off scheduling.",
    commonPlatforms: ["Instagram", "TikTok", "YouTube", "Threads"]
  },
  {
    id: "independent-artist",
    title: "The Independent Artist",
    shortLabel: "Artists & Musicians",
    subtitle: "Musicians, designers, and visual artists building without major backing.",
    description:
      "Structured rollout calendars for singles, drops, and exhibitions that keep your audience close between releases.",
    whoItIsFor: ["Independent musicians", "Visual artists", "Fashion & jewelry designers"],
    howWeHelp: "Release rollout planning, teaser pacing, and consistent weekly presence.",
    commonPlatforms: ["Instagram", "TikTok", "YouTube"]
  },
  {
    id: "entrepreneur",
    title: "The Entrepreneur",
    shortLabel: "Founders",
    subtitle: "Founders and small business owners protecting their focus.",
    description:
      "Predictable monthly approval cycles that keep your brand visible and trustworthy while you run the business.",
    whoItIsFor: ["DTC founders", "Boutique owners", "Independent consultants"],
    howWeHelp: "Clear content pillars, refined brand voice, and reliable publishing.",
    commonPlatforms: ["Instagram", "LinkedIn", "Pinterest"]
  },
  {
    id: "emerging-talent",
    title: "The Emerging Talent",
    shortLabel: "Emerging Talent",
    subtitle: "Rising personalities, actors, and models shaping their public portfolio.",
    description:
      "A cohesive, gallery-clean feed that frames your credits, press, and point of view for collaborators and agents.",
    whoItIsFor: ["Actors & hosts", "Editorial models", "Stylists & directors"],
    howWeHelp: "Editorial grid curation, press moment staging, and profile positioning.",
    commonPlatforms: ["Instagram", "TikTok", "Threads"]
  },
  {
    id: "established-brand",
    title: "The Established Brand",
    shortLabel: "Boutique Brands",
    subtitle: "Design studios and brands seeking discreet, dependable execution.",
    description:
      "Quiet multi-channel scheduling and visual balance that plugs seamlessly into your existing creative team.",
    whoItIsFor: ["Design & architecture studios", "Hospitality concepts", "Apparel labels"],
    howWeHelp: "Multi-channel queue oversight, feed harmonization, and monthly refinement.",
    commonPlatforms: ["Instagram", "LinkedIn", "Pinterest"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "management",
    number: "01",
    title: "Social Media Management",
    tagline: "Calendars, asset organization, voice-true captions, and reliable scheduling.",
    description:
      "Hand over your photos, clips, and release notes. We build the monthly calendar, write captions that actually sound like you, organize every asset, and schedule each post to publish cleanly.",
    deliverables: [
      "Monthly visual content calendar built around your real capacity",
      "Voice-calibrated caption preparation and clean formatting",
      "Organized cloud asset library and platform-ready cropping",
      "Multi-platform scheduling and visual grid curation"
    ],
    scopeNote:
      "We specialize in planning, organizing, and scheduling—not in-house filming or raw video editing.",
    cadenceNote: "Monthly Retainer · Custom Scope"
  },
  {
    id: "strategy",
    number: "02",
    title: "Creative Strategy",
    tagline: "Positioning, content pillars, release pacing, and creative direction.",
    description:
      "Before you shoot or post another frame, we sharpen your point of view. We define your core storytelling pillars, grid direction, and campaign timelines for launches, drops, or brand evolutions.",
    deliverables: [
      "Channel audit and sharp positioning reset",
      "Three to four focused content pillars tailored to your craft",
      "Visual grid direction and bio/link architecture",
      "Release, drop, or launch rollout roadmap"
    ],
    scopeNote:
      "Available as a focused 2-week sprint or ongoing advisory alongside management.",
    cadenceNote: "Strategic Sprint or Advisory"
  },
  {
    id: "network",
    number: "03",
    title: "Creative Network",
    tagline: "Direct access to vetted independent Los Angeles photographers, videographers, and stylists.",
    description:
      "When a release or campaign calls for original photography or motion, we introduce you directly to trusted independent Los Angeles creatives—separately scoped, with zero agency markups.",
    deliverables: [
      "Curated matchmaking with LA photographers, filmmakers, and designers",
      "Concise creative brief and shot-list alignment",
      "Direct client-to-creative contracting with zero commission fees",
      "Seamless handoff of final files straight into your monthly calendar"
    ],
    scopeNote:
      "Production is always scoped separately and contracted directly with the independent talent.",
    cadenceNote: "On-Demand · Separately Scoped"
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    name: "Discover",
    duration: "Step 01",
    objective: "Audit your channels, raw assets, and real-world capacity.",
    deliverables: [
      "Private intake conversation and tone calibration",
      "Review of existing feeds, drafts, and visual archive",
      "Alignment on upcoming launches, drops, or milestones"
    ],
    processSummary: "We start by listening—understanding your voice and what actually gets in the way of showing up."
  },
  {
    number: "02",
    name: "Define",
    duration: "Step 02",
    objective: "Set clear content pillars and a sustainable cadence.",
    deliverables: [
      "Focused storytelling themes tailored to your audience",
      "Clear role for each active platform",
      "Custom workflow proposal built around your real schedule"
    ],
    processSummary: "No inflated packages or rigid templates—just a lean rhythm designed to last."
  },
  {
    number: "03",
    name: "Organize",
    duration: "Step 03",
    objective: "Turn scattered drafts into an approval-ready monthly queue.",
    deliverables: [
      "Clean cloud asset folder organized by theme and date",
      "Full monthly visual grid draft",
      "Captions prepared in your natural voice"
    ],
    processSummary: "Everything is staged weeks ahead so you never scramble to post at the last minute."
  },
  {
    number: "04",
    name: "Schedule",
    duration: "Step 04",
    objective: "Approve once, then publish seamlessly across every channel.",
    deliverables: [
      "Single monthly review and quick sign-off checkpoint",
      "Formatting and aspect-ratio verification",
      "Automated, dependable publishing across platforms"
    ],
    processSummary: "Once you approve the month, our team runs the queue quietly while you stay focused on your work."
  },
  {
    number: "05",
    name: "Refine",
    duration: "Step 05",
    objective: "Keep what resonates and sharpen the month ahead.",
    deliverables: [
      "Concise monthly read on what connected with your audience",
      "Pacing and pillar adjustments for the next cycle",
      "Early planning for upcoming releases or press moments"
    ],
    processSummary: "Each month gets calmer, sharper, and more unmistakably yours."
  }
];

export const NETWORK_SPECIALISTS: NetworkRole[] = [
  {
    role: "Photographers",
    specialties: ["Editorial Portraits", "35mm Film", "Lookbooks"],
    location: "Los Angeles",
    involvement: "Press stills, cover art, and seasonal brand refreshes."
  },
  {
    role: "Videographers",
    specialties: ["Short-Form Motion", "Live Sessions", "BTS Vignettes"],
    location: "Los Angeles",
    involvement: "Studio sessions, founder stories, and campaign reels."
  },
  {
    role: "Designers & Stylists",
    specialties: ["Art Direction", "Typography", "Wardrobe & Props"],
    location: "Los Angeles",
    involvement: "Single covers, visual identity polish, and shoot styling."
  },
  {
    role: "Creative Directors",
    specialties: ["World-Building", "Campaign Concepts", "Rollout Vision"],
    location: "Los Angeles",
    involvement: "High-level creative framing for pivotal launches."
  }
];

export const SAMPLE_CALENDAR_PREVIEW = [
  {
    day: "Tuesday · 10:00 AM",
    channel: "Instagram & TikTok",
    type: "Studio Process",
    theme: "Independent Artist",
    title: "Tracking the Bridge — Echo Park Loft",
    status: "Approved & Staged",
    captionExcerpt:
      "Almost scrapped this verse twice. Sometimes you have to step away from the monitors for twenty-four hours to hear what the record actually wants.",
    tags: ["#IndependentMusic", "#LosAngeles"]
  },
  {
    day: "Thursday · 1:30 PM",
    channel: "LinkedIn & Threads",
    type: "Founder Note",
    theme: "Entrepreneur",
    title: "Shipping Order 500 Without an Agency Team",
    status: "Approved & Staged",
    captionExcerpt:
      "You don't need a loud marketing department to build real trust. Just honest documentation of the craft and showing up every single week.",
    tags: ["#FounderNotes", "#SmallBatch"]
  },
  {
    day: "Sunday · 5:00 PM",
    channel: "Instagram & Pinterest",
    type: "Lookbook Frame",
    theme: "Boutique Brand",
    title: "The Canvas Carryall — Raw Cotton Study",
    status: "Scheduled",
    captionExcerpt:
      "Cut from unbleached 16oz cotton duck in Downtown LA. Made for early studio runs and late market afternoons. Capsule opens Friday at noon.",
    tags: ["#MadeInLA", "#DesignStudio"]
  }
];

export const INDUSTRIES_SERVED: IndustryFocus[] = [
  {
    id: "creators",
    category: "Creators & Storytellers",
    subtitle: "Voice development and multi-platform consistency.",
    description: "Digital creators building community across Instagram, TikTok, and YouTube.",
    priorityChannels: ["Instagram", "TikTok", "YouTube"],
    contentPillars: ["Process", "Perspective", "Community"]
  },
  {
    id: "artists",
    category: "Independent Artists & Musicians",
    subtitle: "Rollouts, studio documentation, and drops.",
    description: "Musicians, visual artists, and designers sharing their work without agency bloat.",
    priorityChannels: ["Instagram", "TikTok", "YouTube"],
    contentPillars: ["Studio Sessions", "Releases", "Archive"]
  },
  {
    id: "founders",
    category: "Founders & Boutique Brands",
    subtitle: "Editorial presence with predictable rhythm.",
    description: "Independent studios, DTC labels, and hospitality concepts.",
    priorityChannels: ["Instagram", "LinkedIn", "Pinterest"],
    contentPillars: ["Craft", "Founder Voice", "Launches"]
  }
];

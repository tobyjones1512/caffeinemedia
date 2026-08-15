/**
 * Every piece of copy on the site lives here so it can be edited without
 * touching a component. Anything marked PLACEHOLDER is sample content that
 * should be swapped for the real thing before launch.
 */

export const company = {
  name: "Caffeine Media",
  short: "Caffeine",
  founded: "2026",
  /** Canonical origin — used for metadata, the sitemap and robots.txt. */
  url: "https://thecaffeinemediacompany.com",
  tagline: "Independent film, end to end.",
  positioning:
    "A three-company group built so an independent film never has to leave the building — produced, finished and released by people who answer to each other.",
  email: "hello@thecaffeinemediacompany.com",
  postEmail: "post@thecaffeinemediacompany.com",
  submissionsEmail: "submissions@thecaffeinemediacompany.com",
  phone: "+44 (0)20 7946 0100",
  address: {
    line1: "Caffeine Media Ltd.",
    line2: "Studio 4, The Roastworks",
    city: "London",
    postcode: "E2 8HD",
    country: "United Kingdom",
  },
} as const;

export type DivisionKey = "films" | "studios" | "post";

export type Division = {
  key: DivisionKey;
  index: string;
  name: string;
  shortName: string;
  discipline: string;
  href: string;
  accentVar: string;
  accentHex: string;
  /** One line for cards and nav. */
  blurb: string;
  /** Two or three sentences for the division page hero. */
  intro: string;
  headline: {
    lead: string;
    emphasis: string;
    trail?: string;
  };
  services: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  facts: { label: string; value: string }[];
  cta: { title: string; body: string; action: string; email: string };
};

export const divisions: Record<DivisionKey, Division> = {
  studios: {
    key: "studios",
    index: "01",
    name: "Caffeine Studios",
    shortName: "Studios",
    discipline: "Production",
    href: "/studios",
    accentVar: "var(--color-ember)",
    accentHex: "#d4553a",
    blurb:
      "Development, financing and physical production for features, shorts and documentary.",
    intro:
      "Caffeine Studios is the production arm of the group. We develop original material, package it, find the money, and run the shoot — with a bias toward writer-directors making their first or second feature.",
    headline: { lead: "Films that get", emphasis: "made", trail: ", not developed forever." },
    services: [
      {
        title: "Development",
        body: "Script work, coverage and honest notes. We take a small number of projects at a time and stay on them until the draft is genuinely shootable.",
      },
      {
        title: "Financing & packaging",
        body: "Budgets, schedules, recoupment structures, soft money and tax credits. We put the finance plan together and attach cast, HODs and co-producers around it.",
      },
      {
        title: "Physical production",
        body: "Full line production and production management. Crewing, scheduling, insurance, locations, compliance and cost reporting through to wrap.",
      },
      {
        title: "Documentary",
        body: "Long-lead factual and observational work, structured so a project can start shooting before it is fully financed without losing control of it.",
      },
      {
        title: "Shorts & proof of concept",
        body: "A deliberately fast route for directors who need a calling card, or for a feature that needs to prove its tone before anyone will fund it.",
      },
      {
        title: "Service production",
        body: "Ground support for productions shooting in the UK — crew, kit, locations and back-office, run under our books or yours.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Read",
        body: "You send the script or the treatment. You get a real response in two weeks — a yes, a no, or the two things standing between it and a yes.",
      },
      {
        step: "02",
        title: "Shape",
        body: "Development against a fixed number of drafts and a fixed fee, so the project cannot quietly live in development for three years.",
      },
      {
        step: "03",
        title: "Finance",
        body: "Budget, schedule and finance plan built together. We are honest early about what the film can cost and still recoup.",
      },
      {
        step: "04",
        title: "Shoot",
        body: "Full production. Post is already booked with Caffeine Post before the first day of principal photography.",
      },
    ],
    facts: [
      { label: "Formats", value: "Feature · Short · Doc" },
      { label: "Bias", value: "First & second features" },
      { label: "Base", value: "London / UK-wide" },
      { label: "Response", value: "Two weeks" },
    ],
    cta: {
      title: "Send us the script.",
      body: "Unsolicited submissions are open. One PDF, one paragraph on why now, and a note on what you need from a producer.",
      action: "Submit a project",
      email: "submissions@thecaffeinemediacompany.com",
    },
  },
  post: {
    key: "post",
    index: "02",
    name: "Caffeine Post",
    shortName: "Post",
    discipline: "Post-production",
    href: "/post",
    accentVar: "var(--color-scope)",
    accentHex: "#4fb3ae",
    blurb:
      "Editorial, colour, sound, conform and delivery — plus the conversion work nobody else wants.",
    intro:
      "Caffeine Post finishes films. Offline and online editorial, grade, sound and mastering, run on a colour-managed pipeline — and the unglamorous half of the job too: transcodes, format conversion, deliverable specs and archive.",
    headline: { lead: "The last", emphasis: "ten percent", trail: " is the whole job." },
    services: [
      {
        title: "Editorial",
        body: "Offline cutting rooms and online conform. Assistant editors, media management and versioning, with remote review for producers who are not in the building.",
      },
      {
        title: "Colour",
        body: "Grading in a colour-managed pipeline, HDR and SDR trims from a single master, and hands-on sessions with the director and DoP in the room.",
      },
      {
        title: "Sound",
        body: "Dialogue edit, ADR, sound design, Foley and mix. Stereo through 5.1 and Atmos, delivered with printmasters and full stem sets.",
      },
      {
        title: "Motion & VFX",
        body: "Titles, credit rolls, clean-up, paint-outs, screen replacements and the invisible fixes that keep a shot in the film.",
      },
      {
        title: "Media conversion",
        body: "Format and codec conversion, standards conversion, legacy tape and film scan ingest, subtitle and caption conformance — priced per job, turned around fast.",
      },
      {
        title: "Mastering & delivery",
        body: "DCP, IMF, ProRes and platform-spec masters built against the distributor's delivery schedule, QC'd before they leave, with an archive package that will still open in ten years.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Spec",
        body: "We start from the delivery requirements, not the edit. Knowing the final spec on day one is what stops a re-master in week nine.",
      },
      {
        step: "02",
        title: "Ingest",
        body: "Rushes checked, checksummed and backed up in three places. You get a media report before anyone touches a timeline.",
      },
      {
        step: "03",
        title: "Finish",
        body: "Conform, grade, sound and titles, scheduled so the director is only in the room for the parts that need a director in the room.",
      },
      {
        step: "04",
        title: "Deliver",
        body: "Masters, versions, subtitles and QC reports against every platform's spec sheet — plus a LTO or cloud archive of the whole project.",
      },
    ],
    facts: [
      { label: "Pipeline", value: "ACES colour-managed" },
      { label: "Audio", value: "Stereo · 5.1 · Atmos" },
      { label: "Masters", value: "DCP · IMF · ProRes" },
      { label: "Small jobs", value: "Welcome" },
    ],
    cta: {
      title: "Send us a spec sheet.",
      body: "Whole features, single reels or a folder of files in the wrong codec — tell us the deadline and the delivery spec and you get a fixed quote.",
      action: "Request a quote",
      email: "post@thecaffeinemediacompany.com",
    },
  },
  films: {
    key: "films",
    index: "03",
    name: "Caffeine Films",
    shortName: "Films",
    discipline: "Distribution",
    href: "/films",
    accentVar: "var(--color-crema)",
    accentHex: "#dfae5f",
    blurb:
      "Acquisitions, festival and theatrical strategy, digital release and rights management.",
    intro:
      "Caffeine Films is the distribution arm. We acquire and release independent films — festivals, theatrical where it earns its place, digital everywhere else — on terms a filmmaker can actually read and understand.",
    headline: { lead: "Every film has an", emphasis: "audience", trail: ". Ours is finding it." },
    services: [
      {
        title: "Acquisitions",
        body: "Completed features, festival premieres and works in progress. We watch everything that comes in and we tell you what we think, even when the answer is no.",
      },
      {
        title: "Festival strategy",
        body: "A submission plan built around one honest assessment of where the film can realistically premiere, and what a premiere there is worth.",
      },
      {
        title: "Theatrical",
        body: "Targeted theatrical and event releases — the cities, screens and dates where a specific film can hold, rather than a wide run that quietly loses money.",
      },
      {
        title: "Digital & VOD",
        body: "Transactional, subscription and ad-supported placement, plus the platform relationships and metadata work that decides whether anyone ever sees the artwork.",
      },
      {
        title: "Sales & licensing",
        body: "International sales, territory licensing, broadcast and airline, and the rights tracking that keeps every window straight.",
      },
      {
        title: "Campaign",
        body: "Positioning, key art, trailers, press and paid media, produced in-house with Caffeine Post so the assets arrive on time and on spec.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Watch",
        body: "You send a link. We watch the whole thing and come back within two weeks with a genuine opinion and a view on the market.",
      },
      {
        step: "02",
        title: "Position",
        body: "Who this film is for, where they already are, and what it costs to reach them. Written down before any money is committed.",
      },
      {
        step: "03",
        title: "Release",
        body: "Festivals, theatrical, digital and international, sequenced into a single window plan — not three teams working against each other.",
      },
      {
        step: "04",
        title: "Report",
        body: "Transparent quarterly statements with the line items shown. You can see what was spent, what came back and what is still outstanding.",
      },
    ],
    facts: [
      { label: "Windows", value: "Festival · Theatrical · Digital" },
      { label: "Reporting", value: "Quarterly, itemised" },
      { label: "Terms", value: "Plain English" },
      { label: "Response", value: "Two weeks" },
    ],
    cta: {
      title: "Show us the film.",
      body: "Finished, in a rough cut, or still on a hard drive — send a screener link and we will give you a straight answer about its market.",
      action: "Submit a film",
      email: "submissions@thecaffeinemediacompany.com",
    },
  },
};

export const divisionOrder: DivisionKey[] = ["studios", "post", "films"];
export const divisionList = divisionOrder.map((key) => divisions[key]);

/** The house pipeline shown on the homepage. */
export const pipeline = [
  {
    step: "01",
    title: "Develop",
    owner: "Studios",
    body: "Script, budget, schedule and finance plan, built as one document instead of three.",
  },
  {
    step: "02",
    title: "Produce",
    owner: "Studios",
    body: "Crew, shoot, wrap. Post is already booked before the first day of principal photography.",
  },
  {
    step: "03",
    title: "Finish",
    owner: "Post",
    body: "Cut, grade, mix and master — against the distributor's delivery spec from day one.",
  },
  {
    step: "04",
    title: "Release",
    owner: "Films",
    body: "Festivals, theatrical, digital and international, on terms the filmmaker can read.",
  },
];

export const principles = [
  {
    n: "I",
    title: "One roof, three doors",
    body: "You can hire one company or all three. Nothing is bundled by force, and no division is allowed to hold a project hostage for another.",
  },
  {
    n: "II",
    title: "Terms in plain English",
    body: "Contracts a filmmaker can read without a lawyer translating them. Rights, splits and windows stated once, in words, near the front.",
  },
  {
    n: "III",
    title: "Technically obsessive",
    body: "Colour management, delivery specs and archive are not paperwork. They are the difference between a film that plays anywhere and one that plays once.",
  },
  {
    n: "IV",
    title: "Small on purpose",
    body: "A short list of projects at a time, run by the people who pitched for them. Nobody hands your film to a junior after the deal closes.",
  },
];

export const capabilities = [
  "Development",
  "Financing",
  "Line production",
  "Documentary",
  "Offline editorial",
  "Conform",
  "Colour grading",
  "Sound design",
  "Atmos mixing",
  "Motion & titles",
  "Media conversion",
  "DCP & IMF mastering",
  "Subtitling",
  "Archive & restoration",
  "Acquisitions",
  "Festival strategy",
  "Theatrical booking",
  "Digital & VOD",
  "International sales",
  "Key art & trailers",
];

export const faq = [
  {
    q: "Do we have to use all three companies?",
    a: "No. Most people arrive at one door. A director might only ever work with Caffeine Studios; a distributor might only ever send us conversion work at Caffeine Post. The group exists to make the whole chain available, not compulsory.",
  },
  {
    q: "Will Caffeine Films only distribute Caffeine Studios films?",
    a: "No — and the reverse matters more. Caffeine Films acquires from anyone, and it is free to pass on a Caffeine Studios production. A distribution arm that has to take everything the production arm makes is worth nothing to either.",
  },
  {
    q: "How small a job will Caffeine Post take?",
    a: "One file. Format conversion, a subtitle conform, a single DCP — these are quoted and turned around as ordinary work, not squeezed in around features.",
  },
  {
    q: "Are you open to unsolicited submissions?",
    a: "Yes, for both scripts and finished films, and you get an actual answer within two weeks. If it is a no, we will tell you the reason.",
  },
  {
    q: "Where are you based?",
    a: "London, working UK-wide, with remote review and delivery for clients anywhere. Post sessions can be attended in person or streamed.",
  },
];

export const navigation = [
  { label: "Group", href: "/about" },
  { label: "Studios", href: "/studios" },
  { label: "Post", href: "/post" },
  { label: "Films", href: "/films" },
  { label: "Contact", href: "/contact" },
];

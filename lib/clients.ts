export type StageStatus = 'complete' | 'partial' | 'pending'
export type SignalLevel = 'high' | 'medium' | 'low' | 'neutral'

export interface FormBlock {
  label: string
  rows: { q: string; a: string }[]
}

export interface DiagnosticSection {
  label: string
  framework: string
  signal: string
  items: string[]
}

export interface FitRow {
  dimension: string
  value: string
  level: SignalLevel
}

export interface DiscoveryBlock {
  category: string
  questions: string[]
}

export interface ClientStages {
  form: StageStatus
  analysis: StageStatus
  research: StageStatus
  discovery: StageStatus
  proposal: StageStatus
}

export interface ClientData {
  slug: string
  name: string
  tagline: string
  stages: ClientStages
  signal: string
  signalLevel: SignalLevel
  nextAction: string
  meta: {
    formDate?: string
    discoveryDate?: string
    lastUpdated: string
  }
  form: FormBlock[]
  diagnostic: {
    tagline: string
    businessModel: string
    sections: DiagnosticSection[]
    fit: FitRow[]
    priorityProblem: string
    recommendation: string
  }
  discoveryQuestions: DiscoveryBlock[]
}

// ─── Stage ordering ──────────────────────────────────────────────
export const STAGE_KEYS: (keyof ClientStages)[] = [
  'form', 'analysis', 'research', 'discovery', 'proposal',
]

export const STAGE_LABELS: Record<keyof ClientStages, string> = {
  form: 'Form',
  analysis: 'Analysis',
  research: 'Research',
  discovery: 'Discovery',
  proposal: 'Proposal',
}

// ─── Client data ─────────────────────────────────────────────────
export const clients: ClientData[] = [
  {
    slug: 'bako',
    name: 'Bako',
    tagline: 'Design studio & conservation community',
    stages: {
      form: 'complete',
      analysis: 'complete',
      research: 'pending',
      discovery: 'pending',
      proposal: 'pending',
    },
    signal: 'Community-to-revenue gap. No low-ticket entry product. High fit.',
    signalLevel: 'high',
    nextAction: 'Schedule discovery call — confirm budget and logistics timeline.',
    meta: {
      formDate: '2026-06-20',
      lastUpdated: '2026-06-28',
    },
    form: [
      {
        label: 'Block 01 — The Problem',
        rows: [
          { q: 'Main challenge', a: 'Alta comunidad, conversión baja. Ingresos inestables.' },
          { q: 'Time facing it', a: 'More than a year' },
          { q: "What they've tried", a: 'Pending — key question for discovery call' },
        ],
      },
      {
        label: 'Block 02 — Goals',
        rows: [
          { q: '12-month goal', a: 'Editorial propia, equipo pequeño, facturación estable' },
          { q: 'Priority areas', a: 'Revenue growth · GTM structure' },
          { q: 'Definition of success', a: 'Sueldos para el equipo, productos propios, imprenta internalizada' },
        ],
      },
      {
        label: 'Block 03 — Constraints',
        rows: [
          { q: 'What holds them back', a: 'No low-ticket products · Logistics dependency (external printer)' },
          { q: 'Budget status', a: 'Pending confirmation' },
          { q: 'Additional context', a: '—' },
        ],
      },
    ],
    diagnostic: {
      tagline: 'Design studio & community. High reach, low conversion.',
      businessModel: 'Product sales (Fine Art prints, stickers, postales) + community/content. Revenue is product-dependent, not subscription. Growth comes from converting existing audience, not acquiring new one.',
      sections: [
        {
          label: 'The Gap',
          framework: 'Keenan / Gap Selling',
          signal: 'Bako can articulate the problem clearly — community exists, store underperforms. Pain is real and specific. Discovery call should move quickly to solution fit.',
          items: [
            'Current state: Strong community and brand presence in conservation design. Recognized voice, loyal audience.',
            'Desired state: Stable revenue, own editorial, small high-impact team — financial independence from external logistics.',
            'The gap: Community does not convert to buyers. No low-ticket entry products. Logistics dependency on external printer creates margin and speed bottlenecks.',
            "What they've tried: Not specified — key question for the discovery call.",
          ],
        },
        {
          label: 'Growth Model',
          framework: 'Reforge + Elena Verna',
          signal: 'This is a community-to-revenue conversion problem, not an acquisition problem. Adding more reach without fixing conversion is wasted effort.',
          items: [
            'Priority: Revenue growth + Brand/Community — high alignment between goal and priority area.',
            'Growth type: Community-led with a broken monetization loop. Acquisition works. Conversion does not.',
            'Premature scaling risk: Low. Product exists. Community exists. The lever is product mix and pricing architecture.',
            'Reverse trial problem: Community members experience the brand for free but are never pushed to a paid entry point.',
          ],
        },
        {
          label: 'Character & Stakes',
          framework: 'Donald Miller / StoryBrand',
          signal: 'Success is defined by independence and sustainability — not hypergrowth. Frame the engagement around financial freedom and creative control.',
          items: [
            'The character: A creative founder with deep community trust and a clear aesthetic vision.',
            'What winning looks like: Own editorial, stable salaries, internalized Fine Art printing — creative and financial independence.',
            'The villain: External logistics dependency that compresses margins and limits speed.',
            'Failure scenario: Continuing to generate reach without converting it — community stays engaged, business stays fragile.',
          ],
        },
        {
          label: 'Constraint Map',
          framework: "Lenny's Newsletter — PMF & Retention lens",
          signal: 'High strategic fit for Blooming. Constraint is product mix and operations — not capital or vision. Client is ready to act.',
          items: [
            'Primary constraint: No low-ticket product. The jump from free community to Fine Art prints is too large.',
            'Secondary constraint: External printer limits margin, speed, and quality control.',
            'Budget signal: Unknown — key question for the call.',
            'Timing: Right. Brand is established, community is loyal, next move is monetization architecture.',
          ],
        },
      ],
      fit: [
        { dimension: 'Gap Clarity', value: 'Sharp — problem is well-defined', level: 'high' },
        { dimension: 'Growth Type', value: 'Community-to-revenue conversion', level: 'neutral' },
        { dimension: 'Winning Definition', value: 'Sustainability + creative independence', level: 'neutral' },
        { dimension: 'Constraint Type', value: 'Product mix + operational', level: 'neutral' },
        { dimension: 'Premature Scaling Risk', value: 'Low', level: 'high' },
        { dimension: 'Blooming Fit', value: 'High', level: 'high' },
      ],
      priorityProblem: 'No low-ticket entry product. The gap between free community content and Fine Art prints is too large. Bako needs a $10–$30 product that converts community members into buyers before asking them to spend $200+.',
      recommendation: "Bako has the brand, the community, and the vision. What's missing is the revenue architecture. Blooming's role is to design the conversion layer — low-ticket entry products, simplified logistics, and a monetization loop that matches the community they've built. Discovery call should focus on budget reality and timeline for Fine Art equipment investment.",
    },
    discoveryQuestions: [
      {
        category: 'On the business model',
        questions: [
          'What percentage of your revenue comes from Fine Art prints vs. other products? Is there already a low-ticket product, or is that gap confirmed?',
          'How does your community find you today — is it organic, referrals, content? And what happens after they follow you? Is there any email list or CRM?',
        ],
      },
      {
        category: 'On the problem',
        questions: [
          "You've been facing low conversion for over a year — what have you already tried to fix it? (This was not answered in the form.)",
          'When you say "ingresos inestables," is the issue that revenue is low, unpredictable, or both? What does a bad month look like vs. a good one?',
        ],
      },
      {
        category: 'On the vision',
        questions: [
          "The goal of internalizing Fine Art printing is significant — is this already planned or still aspirational? What's blocking it right now: capital, space, knowledge?",
          'You define success as "sueldos para el equipo" — how many people are we talking about, and what\'s the monthly number you need to hit to feel stable?',
        ],
      },
      {
        category: 'On constraints & budget',
        questions: [
          "Budget was left blank — what is Bako's current capacity to invest in a strategic engagement? Even a range helps Blooming size the proposal correctly.",
          'Is the external printer dependency a cost problem, a speed problem, or a quality problem? Or all three?',
        ],
      },
    ],
  },

  {
    slug: 'cris-safari',
    name: 'Cris Safari',
    tagline: 'Africa travel agency',
    stages: {
      form: 'partial',
      analysis: 'partial',
      research: 'pending',
      discovery: 'pending',
      proposal: 'pending',
    },
    signal: 'ICP undefined. GTM architecture missing. Form analysis pending.',
    signalLevel: 'medium',
    nextAction: 'Complete form analysis — confirm budget signal and ICP hypothesis.',
    meta: {
      lastUpdated: '2026-06-28',
    },
    form: [
      {
        label: 'Block 01 — The Problem',
        rows: [
          { q: 'Main challenge', a: 'Necesita definir cliente ideal y estructura go-to-market' },
          { q: 'Time facing it', a: 'Pending' },
          { q: "What they've tried", a: 'Pending — key question for discovery call' },
        ],
      },
      {
        label: 'Block 02 — Goals',
        rows: [
          { q: '12-month goal', a: 'Ser referente en viajes a África en su mercado objetivo' },
          { q: 'Priority areas', a: 'New markets · Positioning' },
          { q: 'Definition of success', a: 'Revenue predecible, ICP definido' },
        ],
      },
      {
        label: 'Block 03 — Constraints',
        rows: [
          { q: 'What holds them back', a: 'No strategic clarity' },
          { q: 'Budget status', a: 'Pending confirmation' },
          { q: 'Additional context', a: '—' },
        ],
      },
    ],
    diagnostic: {
      tagline: 'Travel agency. Needs to define ideal client and go-to-market.',
      businessModel: 'High-ticket travel experiences (Africa safaris). Revenue per transaction is large, volume is low. Business depends on trust, referrals, and repeat clients. Acquisition cost is high if targeting is wrong.',
      sections: [
        {
          label: 'The Gap',
          framework: 'Keenan / Gap Selling',
          signal: 'Gap is partially visible: GTM and ideal client definition are missing. Discovery call should probe how long this has been unclear and what has been attempted.',
          items: [
            'Current state: Travel agency with product and operations. Positioned around Africa experiences.',
            'Desired state: Clear ideal client profile, predictable revenue, recognized referent in the Africa travel space.',
            'The gap: No clear customer definition = no focused acquisition strategy = unpredictable revenue.',
            "What they've tried: To be confirmed in discovery call — critical to avoid recommending already-tested paths.",
          ],
        },
        {
          label: 'Growth Model',
          framework: 'Reforge + Elena Verna',
          signal: 'This is a GTM architecture problem. Product exists. The distribution and targeting layer is missing.',
          items: [
            'Growth type: Go-to-market + positioning. Not an awareness problem — a focus and targeting problem.',
            'Key signal: No ideal client definition means the acquisition loop cannot be built. Every marketing effort becomes generic.',
            'Premature scaling risk: Medium. Running paid or community channels without ICP clarity will burn budget.',
            'Elena Verna lens: Need to identify which customer segment has the highest natural retention — that is the real ICP.',
          ],
        },
        {
          label: 'Character & Stakes',
          framework: 'Donald Miller / StoryBrand',
          signal: 'Africa positioning is a strong narrative asset. The story exists — it needs to be aimed at a specific character.',
          items: [
            'The character: A founder with deep product knowledge and a clear geographic niche — Africa travel.',
            'What winning looks like: Being the undisputed referent for Africa experiences in their target market.',
            'The villain: Generic positioning that speaks to everyone and converts no one.',
            'Success metric: Likely a mix of revenue target and positioning goal — confirm in discovery call.',
          ],
        },
        {
          label: 'Constraint Map',
          framework: "Lenny's Newsletter — PMF & Retention lens",
          signal: "Strategic clarity is the primary constraint — which is exactly what Blooming solves. High fit signal.",
          items: [
            "Primary constraint: No strategic clarity on ICP and GTM — this maps directly to Blooming's core offering.",
            'Secondary constraint: Revenue predictability — likely follows from solving the ICP problem.',
            'Budget signal: To be confirmed in discovery call.',
            'Timing: Right. The product is mature enough to define a target customer.',
          ],
        },
      ],
      fit: [
        { dimension: 'Gap Clarity', value: 'Partial — ICP and GTM undefined', level: 'medium' },
        { dimension: 'Growth Type', value: 'GTM architecture + positioning', level: 'neutral' },
        { dimension: 'Winning Definition', value: 'Referent in Africa travel', level: 'neutral' },
        { dimension: 'Constraint Type', value: 'Strategic clarity', level: 'neutral' },
        { dimension: 'Premature Scaling Risk', value: 'Medium — no ICP yet', level: 'medium' },
        { dimension: 'Blooming Fit', value: 'High', level: 'high' },
      ],
      priorityProblem: "No ICP definition. Without knowing exactly who the ideal client is, every marketing action is scatter-shot. Running ads, content, or referral programs before defining ICP wastes budget and time Blooming doesn't have.",
      recommendation: "Cris Safari has product and geographic niche — two strong assets. The missing piece is customer definition. Blooming's role is to run an ICP workshop, define the acquisition narrative, and build the first go-to-market motion. Discovery call should validate budget intent and uncover what's been tried so far in terms of targeting.",
    },
    discoveryQuestions: [
      {
        category: 'On the business model',
        questions: [
          'How does a client typically find you and book a trip? Walk me through the full journey from first contact to confirmed booking.',
          'What does your current client mix look like — nationalities, age range, group type (couples, families, solo)? Who are your best clients today?',
        ],
      },
      {
        category: 'On the problem',
        questions: [
          "You mentioned needing GTM and ICP clarity — what have you tried so far to define your target customer? Has anything worked partially?",
          "When you say revenue is unpredictable: is the issue that you don't know where the next client will come from, or that the number of bookings per month varies a lot?",
        ],
      },
      {
        category: 'On the vision',
        questions: [
          '"Ser referente en viajes a África" — referent for whom specifically? A geographic market (Chile, LatAm, France)? A type of traveler? Both?',
          'What would you need to see in 12 months to feel like this engagement with Blooming was worth it?',
        ],
      },
      {
        category: 'On constraints & budget',
        questions: [
          "Budget was not specified — what is Cris Safari's current capacity to invest in a strategic engagement? A rough range helps Blooming size the work correctly.",
          '"No strategic clarity" was the main blocker — have you worked with any consultant or agency before on this? What happened?',
        ],
      },
    ],
  },
]

export function getClient(slug: string): ClientData | undefined {
  return clients.find((c) => c.slug === slug)
}

export function currentStageIndex(c: ClientData): number {
  const order: (keyof ClientStages)[] = ['form', 'analysis', 'research', 'discovery', 'proposal']
  for (let i = order.length - 1; i >= 0; i--) {
    if (c.stages[order[i]] !== 'pending') return i
  }
  return 0
}

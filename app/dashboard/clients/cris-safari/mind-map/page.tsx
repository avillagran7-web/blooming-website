import DiagnosticReport from '@/components/diagnostic/DiagnosticReport'

export default function CrisSafariDiagnostic() {
  return (
    <DiagnosticReport
      client="Cris Safari"
      date="June 2026"
      tagline="Travel agency. Needs to define ideal client and go-to-market."
      businessModel="High-ticket travel experiences (Africa safaris). Revenue per transaction is large, volume is low. Business depends on trust, referrals, and repeat clients. Acquisition cost is high if targeting is wrong."
      sections={[
        {
          label: 'The Gap',
          framework: 'Keenan / Gap Selling',
          signal: 'Gap is partially visible: GTM and ideal client definition are missing. Discovery call should probe how long this has been unclear and what has been attempted.',
          items: [
            'Current state: Travel agency with product and operations. Positioned around Africa experiences.',
            'Desired state: Clear ideal client profile, predictable revenue, recognized referent in the Africa travel space.',
            'The gap: No clear customer definition = no focused acquisition strategy = unpredictable revenue.',
            'What they\'ve tried: To be confirmed in discovery call — critical to avoid recommending already-tested paths.',
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
          signal: 'Strategic clarity is the primary constraint — which is exactly what Blooming solves. High fit signal.',
          items: [
            'Primary constraint: No strategic clarity on ICP and GTM — this maps directly to Blooming\'s core offering.',
            'Secondary constraint: Revenue predictability — likely follows from solving the ICP problem.',
            'Budget signal: To be confirmed in discovery call.',
            'Timing: Right. The product is mature enough to define a target customer.',
          ],
        },
      ]}
      fit={[
        { dimension: 'Gap Clarity', value: 'Partial — ICP and GTM undefined', level: 'medium' },
        { dimension: 'Growth Type', value: 'GTM architecture + positioning', level: 'neutral' },
        { dimension: 'Winning Definition', value: 'Referent in Africa travel', level: 'neutral' },
        { dimension: 'Constraint Type', value: 'Strategic clarity', level: 'neutral' },
        { dimension: 'Premature Scaling Risk', value: 'Medium — no ICP yet', level: 'medium' },
        { dimension: 'Blooming Fit', value: 'High', level: 'high' },
      ]}
      priorityProblem="No ICP definition. Without knowing exactly who the ideal client is, every marketing action is scatter-shot. Running ads, content, or referral programs before defining ICP wastes budget and time Blooming doesn't have."
      recommendation="Cris Safari has product and geographic niche — two strong assets. The missing piece is customer definition. Blooming's role is to run an ICP workshop, define the acquisition narrative, and build the first go-to-market motion. Discovery call should validate budget intent and uncover what's been tried so far in terms of targeting."
    />
  )
}

import DiagnosticReport from '@/components/diagnostic/DiagnosticReport'

export default function BakoDiagnostic() {
  return (
    <DiagnosticReport
      client="Bako"
      date="June 2026"
      tagline="Design studio & community. High reach, low conversion."
      businessModel="Product sales (Fine Art prints, stickers, postales) + community/content. Revenue is product-dependent, not subscription. Growth comes from converting existing audience, not acquiring new one."
      sections={[
        {
          label: 'The Gap',
          framework: 'Keenan / Gap Selling',
          signal:
            'Bako can articulate the problem clearly — community exists, store underperforms. Pain is real and specific. Discovery call should move quickly to solution fit.',
          items: [
            'Current state: Strong community and brand presence in conservation design. Recognized voice, loyal audience.',
            'Desired state: Stable revenue, own editorial, small high-impact team — financial independence from external logistics.',
            'The gap: Community does not convert to buyers. No low-ticket entry products. Logistics dependency on external printer creates margin and speed bottlenecks.',
            'What they\'ve tried: Not specified — key question for the discovery call.',
          ],
        },
        {
          label: 'Growth Model',
          framework: 'Reforge + Elena Verna',
          signal:
            'This is a community-to-revenue conversion problem, not an acquisition problem. Adding more reach without fixing conversion is wasted effort.',
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
          signal:
            'Success is defined by independence and sustainability — not hypergrowth. Frame the engagement around financial freedom and creative control.',
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
          signal:
            'High strategic fit for Blooming. Constraint is product mix and operations — not capital or vision. Client is ready to act.',
          items: [
            'Primary constraint: No low-ticket product. The jump from free community to Fine Art prints is too large.',
            'Secondary constraint: External printer limits margin, speed, and quality control.',
            'Budget signal: Unknown — key question for the call.',
            'Timing: Right. Brand is established, community is loyal, next move is monetization architecture.',
          ],
        },
      ]}
      fit={[
        { dimension: 'Gap Clarity', value: 'Sharp — problem is well-defined', level: 'high' },
        { dimension: 'Growth Type', value: 'Community-to-revenue conversion', level: 'neutral' },
        { dimension: 'Winning Definition', value: 'Sustainability + creative independence', level: 'neutral' },
        { dimension: 'Constraint Type', value: 'Product mix + operational', level: 'neutral' },
        { dimension: 'Premature Scaling Risk', value: 'Low', level: 'high' },
        { dimension: 'Blooming Fit', value: 'High', level: 'high' },
      ]}
      priorityProblem="No low-ticket entry product. The gap between free community content and Fine Art prints is too large. Bako needs a $10–$30 product that converts community members into buyers before asking them to spend $200+."
      recommendation="Bako has the brand, the community, and the vision. What's missing is the revenue architecture. Blooming's role is to design the conversion layer — low-ticket entry products, simplified logistics, and a monetization loop that matches the community they've built. Discovery call should focus on budget reality and timeline for Fine Art equipment investment."
    />
  )
}

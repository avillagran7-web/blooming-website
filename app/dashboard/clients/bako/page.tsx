import Link from 'next/link'

const formResponses = {
  block01: [
    { q: 'Main challenge', a: 'Alta comunidad, conversión baja. Ingresos inestables.' },
    { q: 'Time facing it', a: 'More than a year' },
    { q: "What they've tried", a: 'Pending — key question for discovery call' },
  ],
  block02: [
    { q: '12-month goal', a: 'Editorial propia, equipo pequeño, facturación estable' },
    { q: 'Priority areas', a: 'Revenue growth · GTM structure' },
    { q: 'Definition of success', a: 'Sueldos para el equipo, productos propios, imprenta internalizada' },
  ],
  block03: [
    { q: 'What holds them back', a: 'No low-ticket products · Logistics dependency (external printer)' },
    { q: 'Budget status', a: 'Pending confirmation' },
    { q: 'Additional context', a: '—' },
  ],
}

export default function BakoPage() {
  return (
    <main className="px-10 py-12 max-w-3xl">

      {/* Breadcrumb */}
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-8">
        <Link href="/dashboard/clients" className="hover:text-bosque transition-colors">Clients</Link>
        {' / '}Bako
      </p>

      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="font-display text-5xl font-light text-negro mb-1">Bako</h1>
          <p className="font-body text-sm text-hongo">Design studio & conservation community</p>
        </div>
        <span className="font-body text-xs px-3 py-1.5 bg-bosque/10 text-bosque tracking-wide shrink-0 mt-2">
          Diagnostic ready
        </span>
      </div>

      {/* Key Signal */}
      <div className="border-l-4 border-bosque pl-5 mb-12">
        <p className="font-body text-xs text-hongo uppercase tracking-wider mb-1">Key Signal</p>
        <p className="font-body text-sm text-negro leading-relaxed">
          Community-to-revenue conversion problem. Strong brand, weak monetization loop. No low-ticket entry point. High Blooming fit.
        </p>
      </div>

      {/* Form Responses */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-light text-negro mb-6">Form Responses</h2>

        {[
          { label: 'Block 01 — The Problem', rows: formResponses.block01 },
          { label: 'Block 02 — Goals', rows: formResponses.block02 },
          { label: 'Block 03 — Constraints', rows: formResponses.block03 },
        ].map((block, bi) => (
          <div key={bi} className="mb-8">
            <p className="font-body text-xs text-bosque uppercase tracking-widest mb-3">{block.label}</p>
            <div className="border border-negro/10">
              {block.rows.map((row, ri) => (
                <div
                  key={ri}
                  className={`grid grid-cols-[180px_1fr] gap-4 px-5 py-3.5 font-body text-sm border-b border-negro/5 last:border-0 ${
                    ri % 2 === 0 ? 'bg-white' : 'bg-cream'
                  }`}
                >
                  <span className="text-hongo text-xs leading-relaxed pt-0.5">{row.q}</span>
                  <span className="text-negro leading-relaxed">{row.a}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Diagnostic Link */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-light text-negro mb-6">Diagnostic</h2>
        <Link
          href="/dashboard/clients/bako/mind-map"
          className="group flex items-center justify-between border border-negro/10 bg-white px-6 py-5 hover:border-bosque transition-colors"
        >
          <div>
            <p className="font-body text-sm text-negro group-hover:text-bosque transition-colors font-medium">
              Pre-Discovery Diagnostic
            </p>
            <p className="font-body text-xs text-hongo mt-1">
              Gap Selling · Reforge · StoryBrand · Lenny&apos;s — full analysis ready
            </p>
          </div>
          <span className="font-body text-xs text-hongo">View →</span>
        </Link>
      </section>

      {/* Discovery Call Questions */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-light text-negro mb-2">Discovery Call Questions</h2>
        <p className="font-body text-xs text-hongo mb-6">
          These arise from gaps, ambiguities, or tensions in the form responses.
        </p>

        {[
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
              'You\'ve been facing low conversion for over a year — what have you already tried to fix it? (This was not answered in the form.)',
              'When you say "ingresos inestables," is the issue that revenue is low, unpredictable, or both? What does a bad month look like vs. a good one?',
            ],
          },
          {
            category: 'On the vision',
            questions: [
              'The goal of internalizing Fine Art printing is significant — is this already planned or still aspirational? What\'s blocking it right now: capital, space, knowledge?',
              'You define success as "sueldos para el equipo" — how many people are we talking about, and what\'s the monthly number you need to hit to feel stable?',
            ],
          },
          {
            category: 'On constraints & budget',
            questions: [
              'Budget was left blank — what is Bako\'s current capacity to invest in a strategic engagement? Even a range helps Blooming size the proposal correctly.',
              'Is the external printer dependency a cost problem, a speed problem, or a quality problem? Or all three?',
            ],
          },
        ].map((block, bi) => (
          <div key={bi} className="mb-7">
            <p className="font-body text-xs text-bosque uppercase tracking-widest mb-3">{block.category}</p>
            <div className="flex flex-col gap-2">
              {block.questions.map((q, qi) => (
                <div key={qi} className="flex gap-3 bg-white border border-negro/10 px-5 py-4">
                  <span className="font-body text-hongo text-xs shrink-0 pt-0.5">
                    {String(qi + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-sm text-negro leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Next Action */}
      <section className="border-t border-negro/10 pt-8">
        <p className="font-body text-xs text-hongo uppercase tracking-wider mb-2">Next Action</p>
        <p className="font-display text-xl font-light text-negro">
          Schedule discovery call — confirm budget signal and logistics timeline.
        </p>
      </section>

    </main>
  )
}

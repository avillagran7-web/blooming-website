import Link from 'next/link'

const formResponses = {
  block01: [
    { q: 'Main challenge', a: 'Necesita definir cliente ideal y estructura go-to-market' },
    { q: 'Time facing it', a: 'Pending' },
    { q: "What they've tried", a: 'Pending — key question for discovery call' },
  ],
  block02: [
    { q: '12-month goal', a: 'Ser referente en viajes a África en su mercado objetivo' },
    { q: 'Priority areas', a: 'New markets · Positioning' },
    { q: 'Definition of success', a: 'Revenue predecible, ICP definido' },
  ],
  block03: [
    { q: 'What holds them back', a: 'No strategic clarity' },
    { q: 'Budget status', a: 'Pending confirmation' },
    { q: 'Additional context', a: '—' },
  ],
}

export default function CrisSafariPage() {
  return (
    <main className="min-h-screen bg-cream px-8 py-12 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-8">
        <Link href="/dashboard" className="hover:text-bosque transition-colors">Dashboard</Link>
        {' / '}
        <Link href="/dashboard/clients" className="hover:text-bosque transition-colors">Clients</Link>
        {' / '}Cris Safari
      </p>

      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="font-display text-5xl font-light text-negro mb-1">Cris Safari</h1>
          <p className="font-body text-sm text-hongo">Africa travel agency</p>
        </div>
        <span className="font-body text-xs px-3 py-1.5 bg-tierra/10 text-tierra tracking-wide shrink-0 mt-2">
          Partial diagnostic
        </span>
      </div>

      {/* Key Signal */}
      <div className="border-l-4 border-tierra pl-5 mb-12">
        <p className="font-body text-xs text-hongo uppercase tracking-wider mb-1">Key Signal</p>
        <p className="font-body text-sm text-negro leading-relaxed">
          ICP undefined. GTM architecture missing. Strong geographic niche (Africa), no targeting strategy. Form analysis pending for full diagnostic.
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
          href="/dashboard/clients/cris-safari/mind-map"
          className="group flex items-center justify-between border border-negro/10 bg-white px-6 py-5 hover:border-bosque transition-colors"
        >
          <div>
            <p className="font-body text-sm text-negro group-hover:text-bosque transition-colors font-medium">
              Pre-Discovery Diagnostic
            </p>
            <p className="font-body text-xs text-hongo mt-1">
              Gap Selling · Reforge · StoryBrand · Lenny&apos;s — partial, pending full form
            </p>
          </div>
          <span className="font-body text-xs text-hongo">View →</span>
        </Link>
      </section>

      {/* Next Action */}
      <section className="border-t border-negro/10 pt-8">
        <p className="font-body text-xs text-hongo uppercase tracking-wider mb-2">Next Action</p>
        <p className="font-display text-xl font-light text-negro">
          Complete form analysis — confirm budget signal, ICP hypothesis, and what&apos;s been tried so far.
        </p>
      </section>

    </main>
  )
}

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
    <main className="min-h-screen bg-cream px-8 py-12 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-8">
        <Link href="/dashboard" className="hover:text-bosque transition-colors">Dashboard</Link>
        {' / '}
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

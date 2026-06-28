interface Section {
  label: string
  framework: string
  signal: string
  items: string[]
}

interface FitRow {
  dimension: string
  value: string
  level: 'high' | 'medium' | 'low' | 'neutral'
}

interface DiagnosticReportProps {
  client: string
  date: string
  tagline: string
  businessModel: string
  sections: Section[]
  fit: FitRow[]
  priorityProblem: string
  recommendation: string
}

const levelColors: Record<string, string> = {
  high: 'text-bosque',
  medium: 'text-tierra',
  low: 'text-red-700',
  neutral: 'text-hongo',
}

export default function DiagnosticReport({
  client,
  date,
  tagline,
  businessModel,
  sections,
  fit,
  priorityProblem,
  recommendation,
}: DiagnosticReportProps) {
  return (
    <main className="bg-cream">
      {/* Header */}
      <div className="border-b border-negro/10 px-10 py-10 max-w-3xl">
        <p className="font-body text-xs tracking-widest text-hongo uppercase mb-1">
          Blooming — Pre-Discovery Diagnostic
        </p>
        <h1 className="font-display text-5xl font-light text-negro mb-2">{client}</h1>
        <p className="font-body text-sm text-hongo">{date} · {tagline}</p>
        <div className="mt-5 pt-5 border-t border-negro/10">
          <p className="font-body text-xs text-hongo uppercase tracking-wider mb-1">Business Model</p>
          <p className="font-body text-sm text-negro">{businessModel}</p>
        </div>
      </div>

      <div className="max-w-3xl px-10 py-12 flex flex-col gap-16">

        {/* Sections */}
        {sections.map((section, i) => (
          <section key={i}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-body text-xs text-hongo tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-display text-2xl font-light text-negro">
                  {section.label}
                </h2>
                <p className="font-body text-xs text-bosque tracking-wider uppercase mt-1">
                  {section.framework}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-6 pl-8">
              {section.items.map((item, j) => (
                <div key={j} className="flex gap-3">
                  <span className="font-body text-hongo mt-1">—</span>
                  <p className="font-body text-sm text-negro leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="pl-8 border-l-2 border-bosque">
              <p className="font-body text-xs text-hongo uppercase tracking-wider mb-1">Signal</p>
              <p className="font-body text-sm text-negro italic leading-relaxed">
                {section.signal}
              </p>
            </div>
          </section>
        ))}

        {/* Fit Summary */}
        <section>
          <h2 className="font-display text-2xl font-light text-negro mb-8">
            Pre-Call Brief
          </h2>
          <div className="border border-negro/10">
            {fit.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 font-body text-sm ${
                  i % 2 === 0 ? 'bg-white' : 'bg-cream'
                }`}
              >
                <span className="text-hongo tracking-wide uppercase text-xs">
                  {row.dimension}
                </span>
                <span className={`font-medium ${levelColors[row.level]}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Priority Problem */}
        <section className="bg-negro px-8 py-8">
          <p className="font-body text-xs tracking-widest text-cream/50 uppercase mb-4">
            Priority Problem — Attack This First
          </p>
          <p className="font-display text-2xl font-light text-cream leading-relaxed">
            {priorityProblem}
          </p>
        </section>

        {/* Recommendation */}
        <section className="border-t border-negro/10 pt-10">
          <p className="font-body text-xs tracking-widest text-hongo uppercase mb-4">
            Blooming Recommendation
          </p>
          <p className="font-display text-xl font-light text-negro leading-relaxed">
            {recommendation}
          </p>
        </section>

      </div>
    </main>
  )
}

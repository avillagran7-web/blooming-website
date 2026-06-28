import Link from 'next/link'

const clients = [
  {
    slug: 'bako',
    name: 'Bako',
    tagline: 'Design studio & conservation community',
    status: 'Diagnostic ready',
    statusLevel: 'ready',
    signal: 'Community-to-revenue conversion problem. High Blooming fit.',
    priority: 'Schedule discovery call',
  },
  {
    slug: 'cris-safari',
    name: 'Cris Safari',
    tagline: 'Africa travel agency',
    status: 'Partial diagnostic',
    statusLevel: 'partial',
    signal: 'ICP undefined. GTM architecture missing. Form analysis pending.',
    priority: 'Complete form analysis',
  },
]

const statusColors: Record<string, string> = {
  ready: 'bg-bosque/10 text-bosque',
  partial: 'bg-tierra/10 text-tierra',
  pending: 'bg-hongo/10 text-hongo',
}

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-cream px-8 py-12 max-w-4xl mx-auto">
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <p className="font-body text-xs tracking-widest text-hongo uppercase mb-1">Dashboard</p>
          <h1 className="font-display text-4xl font-light text-negro">Clients</h1>
        </div>
        <p className="font-body text-xs text-hongo">{clients.length} active</p>
      </div>

      <div className="flex flex-col gap-4">
        {clients.map((client) => (
          <Link
            key={client.slug}
            href={`/dashboard/clients/${client.slug}`}
            className="group block border border-negro/10 bg-white hover:border-bosque transition-colors"
          >
            <div className="px-6 py-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="font-display text-xl font-light text-negro group-hover:text-bosque transition-colors">
                    {client.name}
                  </h2>
                  <p className="font-body text-xs text-hongo mt-0.5">{client.tagline}</p>
                </div>
                <span className={`font-body text-xs px-3 py-1 tracking-wide shrink-0 ${statusColors[client.statusLevel]}`}>
                  {client.status}
                </span>
              </div>
              <p className="font-body text-sm text-negro/70 leading-relaxed mb-3">
                {client.signal}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-body text-xs text-hongo uppercase tracking-wider">Next:</span>
                <span className="font-body text-xs text-bosque">{client.priority}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

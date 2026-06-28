import Link from 'next/link'
import { clients, STAGE_KEYS, STAGE_LABELS } from '@/data/clients'

const signalBorder: Record<string, string> = {
  high: 'border-l-bosque',
  medium: 'border-l-tierra',
  low: 'border-l-red-600',
}

const signalBadge: Record<string, string> = {
  high: 'bg-bosque/10 text-bosque',
  medium: 'bg-tierra/10 text-tierra',
  low: 'bg-red-600/10 text-red-700',
}

const stageDot: Record<string, string> = {
  complete: 'bg-bosque',
  partial: 'bg-tierra',
  active: 'bg-tierra',
  pending: 'bg-negro/15',
}

export default function ClientsPage() {
  return (
    <div className="px-10 py-12 max-w-3xl">
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <p className="font-body text-xs tracking-widest text-hongo uppercase mb-1">Overview</p>
          <h1 className="font-display text-4xl font-light text-negro">Clients</h1>
        </div>
        <p className="font-body text-xs text-hongo">{clients.length} active</p>
      </div>

      <div className="flex flex-col gap-3">
        {clients.map((client) => (
          <Link
            key={client.slug}
            href={`/dashboard/clients/${client.slug}`}
            className={`group block border-l-4 border border-negro/10 bg-white hover:border-negro/20 transition-colors ${signalBorder[client.signalLevel] ?? 'border-l-negro/10'}`}
          >
              <div className="px-6 py-5">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h2 className="font-display text-xl font-light text-negro group-hover:text-bosque transition-colors">
                      {client.name}
                    </h2>
                    <p className="font-body text-xs text-hongo mt-0.5">{client.tagline}</p>
                  </div>
                  <span className={`font-body text-xs px-2.5 py-1 shrink-0 ${signalBadge[client.signalLevel] ?? ''}`}>
                    {client.signalLevel === 'high' ? 'High fit'
                      : client.signalLevel === 'medium' ? 'Medium fit'
                      : 'Low fit'}
                  </span>
                </div>

                {/* Signal */}
                <p className="font-body text-xs text-hongo leading-relaxed mb-4">{client.signal}</p>

                {/* Stage progress */}
                <div className="flex items-center gap-1.5">
                  {STAGE_KEYS.map((key, i) => (
                    <div key={key} className="flex items-center gap-1.5" title={STAGE_LABELS[key]}>
                      <div className={`w-1.5 h-1.5 rounded-full ${stageDot[client.stages[key]] ?? 'bg-negro/10'}`} />
                      {i < STAGE_KEYS.length - 1 && <div className="w-3 h-px bg-negro/10" />}
                    </div>
                  ))}
                  <span className="font-body text-xs text-hongo ml-2">
                    {STAGE_KEYS.filter(k => client.stages[k] !== 'pending').length}/{STAGE_KEYS.length} stages
                  </span>
                </div>

                {/* Next action */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-negro/5">
                  <span className="font-body text-xs text-hongo uppercase tracking-wider">Next:</span>
                  <span className="font-body text-xs text-negro">{client.nextAction}</span>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

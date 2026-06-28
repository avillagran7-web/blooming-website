import { notFound } from 'next/navigation'
import Link from 'next/link'
import { clients, getClient, STAGE_KEYS, STAGE_LABELS } from '@/data/clients'
import ClientTabs from '@/components/dashboard/ClientTabs'

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }))
}

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
  pending: 'bg-negro/15',
  active: 'bg-tierra',
}

export default function ClientPage({ params }: { params: { slug: string } }) {
  const client = getClient(params.slug)
  if (!client) notFound()

  return (
    <div className="px-10 py-10 max-w-3xl">

      {/* Breadcrumb */}
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-7">
        <Link href="/dashboard/clients" className="hover:text-negro transition-colors">
          Clients
        </Link>
        {' / '}{client.name}
      </p>

      {/* Header */}
      <div className={`border-l-4 pl-5 mb-10 ${signalBorder[client.signalLevel] ?? 'border-l-negro/20'}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-light text-negro mb-0.5">{client.name}</h1>
            <p className="font-body text-sm text-hongo">{client.tagline}</p>
          </div>
          <span className={`font-body text-xs px-3 py-1.5 shrink-0 mt-1 ${signalBadge[client.signalLevel] ?? ''}`}>
            {client.signalLevel === 'high' ? 'High fit' : client.signalLevel === 'medium' ? 'Medium fit' : 'Low fit'}
          </span>
        </div>

        {/* Stage progress */}
        <div className="flex items-center gap-2 mt-4">
          {STAGE_KEYS.map((key, i) => (
            <div key={key} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-2 h-2 rounded-full ${stageDot[client.stages[key]] ?? 'bg-negro/10'}`}
                  title={STAGE_LABELS[key]}
                />
                <span className="font-body text-xs text-hongo/60 leading-none">
                  {STAGE_LABELS[key].slice(0, 4)}
                </span>
              </div>
              {i < STAGE_KEYS.length - 1 && (
                <div className="w-6 h-px bg-negro/10 mb-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <ClientTabs client={client} />

    </div>
  )
}

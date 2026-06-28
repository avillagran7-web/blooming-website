'use client'

import { useState } from 'react'
import DiagnosticReport from '@/components/diagnostic/DiagnosticReport'
import type { ClientData } from '@/data/clients'

type Tab = 'overview' | 'form' | 'diagnostic' | 'questions'

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'form', label: 'Form' },
  { id: 'diagnostic', label: 'Diagnostic' },
  { id: 'questions', label: 'Discovery Questions' },
]

export default function ClientTabs({ client }: { client: ClientData }) {
  const [active, setActive] = useState<Tab>('overview')

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-0 border-b border-negro/10 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-5 py-3 font-body text-sm transition-colors border-b-2 -mb-px ${
              active === tab.id
                ? 'border-negro text-negro'
                : 'border-transparent text-hongo hover:text-negro'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {active === 'overview' && <OverviewTab client={client} />}
      {active === 'form' && <FormTab client={client} />}
      {active === 'diagnostic' && <DiagnosticTab client={client} />}
      {active === 'questions' && <QuestionsTab client={client} />}
    </div>
  )
}

function OverviewTab({ client }: { client: ClientData }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Business model */}
      <div>
        <p className="font-body text-xs text-hongo uppercase tracking-widest mb-2">Business Model</p>
        <p className="font-body text-sm text-negro leading-relaxed">{client.diagnostic?.businessModel}</p>
      </div>

      {/* Key signal */}
      <div>
        <p className="font-body text-xs text-hongo uppercase tracking-widest mb-2">Key Signal</p>
        <p className="font-body text-sm text-negro leading-relaxed">{client.signal}</p>
      </div>

      {/* Priority problem */}
      {client.diagnostic?.priorityProblem && (
        <div className="bg-negro px-6 py-6">
          <p className="font-body text-xs text-cream/40 uppercase tracking-widest mb-3">
            Priority Problem — Attack This First
          </p>
          <p className="font-display text-lg font-light text-cream leading-relaxed">
            {client.diagnostic.priorityProblem}
          </p>
        </div>
      )}

      {/* Next action */}
      <div className="border-t border-negro/10 pt-6">
        <p className="font-body text-xs text-hongo uppercase tracking-widest mb-2">Next Action</p>
        <p className="font-display text-xl font-light text-negro">{client.nextAction}</p>
      </div>
    </div>
  )
}

function FormTab({ client }: { client: ClientData }) {
  return (
    <div className="flex flex-col gap-8">
      {client.form.map((block, bi) => (
        <div key={bi}>
          <p className="font-body text-xs text-bosque uppercase tracking-widest mb-3">{block.label}</p>
          <div className="border border-negro/10">
            {block.rows.map((row, ri) => (
              <div
                key={ri}
                className={`grid grid-cols-[160px_1fr] gap-4 px-5 py-3.5 text-sm border-b border-negro/5 last:border-0 ${
                  ri % 2 === 0 ? 'bg-white' : 'bg-cream'
                }`}
              >
                <span className="font-body text-hongo text-xs leading-relaxed pt-0.5">{row.q}</span>
                <span className="font-body text-negro leading-relaxed">{row.a}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function DiagnosticTab({ client }: { client: ClientData }) {
  const d = client.diagnostic
  if (!d) {
    return (
      <p className="font-body text-sm text-hongo">
        Diagnostic not yet generated. Complete form analysis first.
      </p>
    )
  }
  return (
    <DiagnosticReport
      client={client.name}
      date={client.meta.lastUpdated}
      tagline={d.tagline}
      businessModel={d.businessModel}
      sections={d.sections}
      fit={d.fit}
      priorityProblem={d.priorityProblem}
      recommendation={d.recommendation}
    />
  )
}

function QuestionsTab({ client }: { client: ClientData }) {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-body text-xs text-hongo">
        Questions arising from gaps, ambiguities, and tensions in the form responses.
      </p>
      {client.discoveryQuestions.map((block, bi) => (
        <div key={bi}>
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
    </div>
  )
}

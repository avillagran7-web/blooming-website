const stages = [
  {
    number: '01',
    name: 'Form',
    description: 'Client fills the Blooming onboarding form. 3 blocks, 9 questions covering problem, goals, and constraints.',
    aiNative: 'Automated delivery via weareblooming.co/onboarding',
    status: 'built' as const,
    questions: [
      'What is the main challenge?',
      'What is the 12-month goal?',
      'What holds you back?',
    ],
  },
  {
    number: '02',
    name: 'Analysis',
    description: "Form responses mapped through Gap Selling, Reforge, StoryBrand, and Lenny's to produce a pre-discovery diagnostic.",
    aiNative: 'AI diagnostic: gap clarity, growth model, constraint map, business model, priority problem #1',
    status: 'built' as const,
    questions: [
      'What type of growth problem is this?',
      'What is the gap between current and desired state?',
      'Is the timing right for Blooming?',
    ],
  },
  {
    number: '03',
    name: 'Research',
    description: 'Blooming independently researches the client: digital presence, market positioning, traction signals, competitive landscape.',
    aiNative: 'AI research brief: LinkedIn, web/SEO, social engagement, funding data, top 3 competitors',
    status: 'pending' as const,
    questions: [
      'Is their digital presence consistent with their positioning?',
      'Who are they competing against?',
      'What do numbers say vs. what they told us?',
    ],
  },
  {
    number: '04',
    name: 'Discovery Call',
    description: 'A focused 45-minute call informed by diagnostic and research. Blooming arrives with hypotheses, not open questions.',
    aiNative: 'AI-generated question set from form gaps and research tensions',
    status: 'built' as const,
    questions: [
      'Is the priority problem we identified actually the priority?',
      'Confirm budget signal.',
      'What has already been tried?',
    ],
  },
  {
    number: '05',
    name: 'Proposal',
    description: 'A focused plan of work: one priority problem, one clear methodology, timeline, and commercial terms. No generic decks.',
    aiNative: 'AI-drafted proposal based on diagnostic and discovery call notes',
    status: 'pending' as const,
    questions: [
      'What is the one problem we are solving?',
      'What does success look like in 90 days?',
      'What is the investment?',
    ],
  },
]

const principles = [
  {
    title: 'One problem at a time',
    body: 'Blooming is a second job. Each engagement starts with one priority problem and one defined outcome. We add more only when the first is resolved.',
  },
  {
    title: 'Arrive with hypotheses',
    body: 'We never go into a discovery call cold. Form + research give us enough to arrive with a point of view. The call is for validation, not exploration.',
  },
  {
    title: 'AI-native, team-first',
    body: 'Every stage has an AI layer — not to automate the relationship, but to automate the prep so the team focuses on decisions that require human judgment.',
  },
  {
    title: 'Qualify hard, commit fully',
    body: 'Vague problem, no budget signal, or premature scaling risk = not a fit right now. The diagnostic exists to surface this before we invest time.',
  },
]

const statusBadge: Record<'built' | 'pending', string> = {
  built: 'bg-bosque/10 text-bosque',
  pending: 'bg-negro/8 text-hongo',
}

export default function MethodologyPage() {
  return (
    <div className="px-10 py-12 max-w-3xl">

      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-1">Blooming</p>
      <h1 className="font-display text-4xl font-light text-negro mb-2">El Sistema Blooming</h1>
      <p className="font-body text-sm text-hongo mb-14">
        Our client engagement methodology. Five stages, AI-native throughout.
      </p>

      {/* Pipeline — horizontal stage markers */}
      <section className="mb-16">
        <div className="flex items-center">
          {stages.map((stage, i) => (
            <div key={stage.number} className="flex items-center flex-1">
              {/* Stage pill */}
              <div className="flex-1 bg-white border border-negro/10 px-4 py-3 text-center">
                <p className="font-body text-xs text-hongo mb-0.5">{stage.number}</p>
                <p className="font-body text-sm text-negro font-medium">{stage.name}</p>
                <span className={`inline-block mt-1.5 font-body text-xs px-2 py-0.5 ${statusBadge[stage.status]}`}>
                  {stage.status}
                </span>
              </div>
              {/* Arrow */}
              {i < stages.length - 1 && (
                <div className="shrink-0 px-1 text-negro/20 font-body text-sm select-none">›</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stage detail list */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-light text-negro mb-8">Stage Breakdown</h2>
        <div className="flex flex-col">
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              className={`grid grid-cols-[56px_1fr] gap-6 py-8 ${
                i < stages.length - 1 ? 'border-b border-negro/8' : ''
              }`}
            >
              {/* Number */}
              <div className="pt-0.5">
                <p className="font-body text-xs text-hongo">{stage.number}</p>
                <span className={`inline-block mt-1 font-body text-xs px-2 py-0.5 ${statusBadge[stage.status]}`}>
                  {stage.status}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-light text-negro mb-2">{stage.name}</h3>
                <p className="font-body text-sm text-negro/70 leading-relaxed mb-4">{stage.description}</p>

                {/* AI native */}
                <div className="bg-bosque/5 border-l-2 border-bosque px-4 py-2.5 mb-4">
                  <p className="font-body text-xs text-hongo uppercase tracking-wider mb-0.5">AI-native</p>
                  <p className="font-body text-sm text-negro">{stage.aiNative}</p>
                </div>

                {/* Key questions */}
                <div className="flex flex-col gap-1.5">
                  {stage.questions.map((q, qi) => (
                    <p key={qi} className="font-body text-xs text-hongo leading-relaxed">
                      — {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-negro/10 pt-12">
        <h2 className="font-display text-2xl font-light text-negro mb-8">Operating Principles</h2>
        <div className="grid grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <div key={i} className="bg-white border border-negro/10 px-6 py-6">
              <p className="font-body text-xs text-bosque uppercase tracking-wider mb-2">{p.title}</p>
              <p className="font-body text-sm text-negro leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

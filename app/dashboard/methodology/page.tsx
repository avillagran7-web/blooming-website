const stages = [
  {
    number: '01',
    name: 'Form',
    description: 'Client fills the Blooming onboarding form. 3 blocks, 9 questions covering problem, goals, and constraints.',
    aiNative: 'Automated delivery via weareblooming.co/onboarding',
    status: 'built',
    questions: ['What is the main challenge?', 'What is the 12-month goal?', 'What holds you back?'],
  },
  {
    number: '02',
    name: 'Analysis',
    description: 'Form responses are mapped through Gap Selling, Reforge, StoryBrand, and Lenny\'s frameworks to produce a pre-discovery diagnostic.',
    aiNative: 'AI-generated diagnostic: gap clarity, growth model, constraint map, business model, priority problem #1',
    status: 'built',
    questions: ['What type of growth problem is this?', 'What is the gap between current and desired state?', 'Is the timing right for Blooming?'],
  },
  {
    number: '03',
    name: 'Research',
    description: 'Blooming independently researches the client: digital presence, market positioning, company size, traction signals, and competitive landscape.',
    aiNative: 'AI research brief: LinkedIn, web/SEO, social engagement, funding/revenue data, top 3 competitors',
    status: 'pending',
    questions: ['Is their digital presence consistent with their positioning?', 'Who are they competing against?', 'What do numbers say vs. what they told us?'],
  },
  {
    number: '04',
    name: 'Discovery Call',
    description: 'A focused 45-minute call informed by the diagnostic and research. Blooming arrives with hypotheses, not open questions.',
    aiNative: 'AI-generated question set from form gaps + research tensions',
    status: 'built',
    questions: ['Validate: is the priority problem we identified actually the priority?', 'Confirm budget signal', 'Understand what has already been tried'],
  },
  {
    number: '05',
    name: 'Proposal',
    description: 'A focused plan of work: one priority problem, one clear methodology, timeline, and commercial terms. No generic decks.',
    aiNative: 'AI-drafted proposal based on diagnostic + discovery call notes',
    status: 'pending',
    questions: ['What is the one problem we are solving?', 'What does success look like in 90 days?', 'What is the investment?'],
  },
]

const principles = [
  {
    title: 'One problem at a time',
    body: 'Blooming is a second job. We cannot run 5 workstreams per client. Each engagement starts with one priority problem and one defined outcome. We add more only when the first is resolved.',
  },
  {
    title: 'Arrive with hypotheses',
    body: 'We never go into a discovery call cold. The form + research give us enough to arrive with a point of view. The call is for validation, not exploration.',
  },
  {
    title: 'AI-native, team-first',
    body: 'Every stage of this system has an AI layer. The goal is not to automate the relationship — it is to automate the prep so the team can focus on the decisions that require human judgment.',
  },
  {
    title: 'Qualify hard, commit fully',
    body: 'A client with a vague problem, no budget signal, or premature scaling risk is not a fit right now. The diagnostic exists to identify this before we invest time.',
  },
]

const statusStyles: Record<string, string> = {
  built: 'bg-bosque/10 text-bosque',
  pending: 'bg-hongo/10 text-hongo',
}

export default function MethodologyPage() {
  return (
    <div className="px-10 py-12 max-w-4xl">

      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-1">Blooming</p>
      <h1 className="font-display text-4xl font-light text-negro mb-2">El Sistema Blooming</h1>
      <p className="font-body text-sm text-hongo mb-14">
        Our client engagement methodology. Five stages, AI-native throughout.
      </p>

      {/* Stage Diagram */}
      <section className="mb-16">
        <div className="flex items-start gap-0">
          {stages.map((stage, i) => (
            <div key={stage.number} className="flex items-start flex-1">
              {/* Stage card */}
              <div className="flex-1">
                <div className="border border-negro/10 bg-white px-5 py-5 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-body text-xs text-hongo">{stage.number}</span>
                    <span className={`font-body text-xs px-2 py-0.5 ${statusStyles[stage.status]}`}>
                      {stage.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-light text-negro mb-2">{stage.name}</h3>
                  <p className="font-body text-xs text-negro/70 leading-relaxed mb-3">{stage.description}</p>
                  <div className="border-t border-negro/10 pt-3 mt-auto">
                    <p className="font-body text-xs text-bosque leading-relaxed">{stage.aiNative}</p>
                  </div>
                </div>
              </div>
              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <div className="flex items-center self-stretch shrink-0 w-px">
                  <div className="h-full w-px bg-negro/15 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Key questions per stage */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-light text-negro mb-8">Key Questions Per Stage</h2>
        <div className="flex flex-col gap-6">
          {stages.map((stage) => (
            <div key={stage.number} className="flex gap-6">
              <div className="shrink-0 w-28">
                <span className="font-body text-xs text-hongo">{stage.number}</span>
                <p className="font-body text-sm text-negro font-medium">{stage.name}</p>
              </div>
              <div className="flex-1 border-l border-negro/10 pl-6 flex flex-col gap-1.5">
                {stage.questions.map((q, qi) => (
                  <p key={qi} className="font-body text-sm text-negro/80 leading-relaxed">
                    — {q}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-negro/10 pt-12">
        <h2 className="font-display text-2xl font-light text-negro mb-8">Operating Principles</h2>
        <div className="grid grid-cols-2 gap-6">
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

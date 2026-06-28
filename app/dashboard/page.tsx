const stats = [
  { label: 'Active clients', value: '2' },
  { label: 'Diagnostics ready', value: '1' },
  { label: 'Discovery pending', value: '2' },
  { label: 'Proposals sent', value: '0' },
]

export default function DashboardPage() {
  return (
    <div className="px-10 py-12 max-w-3xl">
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-1">Overview</p>
      <h1 className="font-display text-4xl font-light text-negro mb-10">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 mb-14">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-negro/10 px-5 py-5">
            <p className="font-display text-3xl font-light text-negro mb-1">{s.value}</p>
            <p className="font-body text-xs text-hongo leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-negro/10 pt-8">
        <p className="font-body text-xs text-hongo uppercase tracking-wider mb-2">Next Action</p>
        <p className="font-display text-xl font-light text-negro">
          Schedule discovery calls for Bako and Cris Safari.
        </p>
      </div>
    </div>
  )
}

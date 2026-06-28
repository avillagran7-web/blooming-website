export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-cream px-8 py-12 max-w-4xl mx-auto">
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-2">Dashboard</p>
      <h1 className="font-display text-4xl font-light text-negro mb-10">Clients</h1>
      <ul className="font-body text-sm text-negro flex flex-col gap-3">
        <li><a href="/dashboard/clients/bako" className="hover:text-bosque transition-colors">Bako →</a></li>
      </ul>
    </main>
  )
}

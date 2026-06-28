import Link from 'next/link'

export default function CrisSafariClientPage() {
  return (
    <main className="min-h-screen bg-cream px-8 py-12 max-w-4xl mx-auto">
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-2">Clients</p>
      <h1 className="font-display text-4xl font-light text-negro mb-10">Cris Safari</h1>
      <ul className="font-body text-sm text-negro flex flex-col gap-3">
        <li><Link href="/dashboard/clients/cris-safari/mind-map" className="hover:text-bosque transition-colors">Mind Map →</Link></li>
      </ul>
    </main>
  )
}

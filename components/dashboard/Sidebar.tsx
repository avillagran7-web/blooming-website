'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clients } from '@/lib/clients'

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/dashboard' && pathname.startsWith(href))
  return (
    <Link
      href={href}
      className={`block px-4 py-2 font-body text-sm rounded-sm transition-colors ${
        isActive
          ? 'text-cream bg-white/10'
          : 'text-cream/50 hover:text-cream/90 hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-52 shrink-0 bg-negro min-h-screen flex flex-col sticky top-0 h-screen">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/10">
        <Link href="/dashboard">
          <p className="font-display text-lg font-light text-cream tracking-widest">Blooming</p>
          <p className="font-body text-xs text-cream/30 tracking-wider mt-0.5">Internal</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-5 px-2 flex flex-col gap-0.5">
        <NavItem href="/dashboard" label="Dashboard" />
        <NavItem href="/dashboard/methodology" label="Methodology" />

        <div className="mt-5 mb-2 px-4">
          <p className="font-body text-xs text-cream/25 uppercase tracking-widest">Clients</p>
        </div>

        {clients.map((c) => (
          <NavItem
            key={c.slug}
            href={`/dashboard/clients/${c.slug}`}
            label={c.name}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/10">
        <p className="font-body text-xs text-cream/25">weareblooming.co</p>
      </div>
    </aside>
  )
}

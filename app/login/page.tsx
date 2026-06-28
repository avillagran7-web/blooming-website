'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-display text-4xl font-light tracking-widest text-negro uppercase">
          Blooming
        </h1>
        <p className="font-body text-sm text-hongo tracking-wider">
          Workspace interno — acceso restringido
        </p>
        <button
          onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
          className="font-body text-sm tracking-wider bg-bosque text-cream px-8 py-3 hover:opacity-90 transition-opacity"
        >
          Entrar con GitHub
        </button>
      </div>
    </main>
  )
}

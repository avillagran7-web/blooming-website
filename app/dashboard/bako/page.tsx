export default function BakoPage() {
  return (
    <main className="min-h-screen bg-cream px-8 py-12 max-w-3xl mx-auto">
      <p className="font-body text-xs tracking-widest text-hongo uppercase mb-2">
        Análisis estratégico
      </p>
      <h1 className="font-display text-4xl font-light text-negro mb-10">Bako</h1>

      <section className="mb-10">
        <h2 className="font-body text-xs tracking-widest text-bosque uppercase mb-4">
          Situación
        </h2>
        <p className="font-body text-sm text-negro leading-relaxed">
          Alta comunidad, baja conversión. El tráfico existe pero el flujo de valor está roto
          en dos puntos críticos: sin productos de ticket bajo y logística dependiente de terceros.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-body text-xs tracking-widest text-bosque uppercase mb-4">
          Flujo de valor
        </h2>
        <pre className="font-body text-xs bg-negro text-cream p-6 leading-relaxed overflow-x-auto">
{`[ COMUNIDAD (Alcance Alto) ]
          │
          │ (Genera tráfico web)
          ▼
┌───────────────────────────┐
│  DESCARGAS GRATUITAS      │  ← FILTRO DE CONVERSIÓN ROTO
└─────────────┬─────────────┘
              │ (Sin productos de ticket bajo)
              ▼
┌───────────────────────────┐
│     TIENDA ONLINE         │  ← BLOQUEO OPERATIVO
└─────────────┬─────────────┘    (Logística: Impresor Externo)
              │
              ▼
┌───────────────────────────┐
│   REVENUE INESTABLE       │
└───────────────────────────┘`}
        </pre>
      </section>

      <section>
        <h2 className="font-body text-xs tracking-widest text-bosque uppercase mb-4">
          Acciones prioritarias
        </h2>
        <div className="flex flex-col gap-4">
          <div className="border-l-2 border-bosque pl-4">
            <p className="font-body text-xs text-hongo uppercase tracking-wider mb-1">Inmediata</p>
            <p className="font-body text-sm text-negro">
              Lanzar catálogo de productos de bajo costo (postales, stickers) para activar la tienda y reducir la fricción de conversión.
            </p>
          </div>
          <div className="border-l-2 border-tierra pl-4">
            <p className="font-body text-xs text-hongo uppercase tracking-wider mb-1">Mediano plazo</p>
            <p className="font-body text-sm text-negro">
              Internalizar logística (compra de equipo) para escalar calidad Fine Art sin depender de impresor externo.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

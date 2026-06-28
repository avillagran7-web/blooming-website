export default function BakoMindMap() {
 return (
 <main className="min-h-screen bg-cream px-8 py-12 max-w-4xl mx-auto">
 <p className="font-body text-xs tracking-widest text-hongo uppercase mb-2">Bako</p>
 <h1 className="font-display text-4xl font-light text-negro mb-10">Mind Map</h1>
 <div className="space-y-8">
  <section className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-4">1. Situación Actual</h2>
    <p>Diseño y talleres de dibujo. Marca bien posicionada en conservación pero con ingresos inestables.</p>
  </section>
  <section className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-4">2. El Dolor (Diagnosis)</h2>
    <ul className="list-disc pl-5">
      <li>Conversión baja: Gran alcance pero poca compra.</li>
      <li>Logística: Dependencia de impresor externo (lento).</li>
      <li>Estructura: Falta de seguimiento y organización de proyectos.</li>
    </ul>
  </section>
  <section className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-4">3. La Visión</h2>
    <p>Editorial propia, equipo pequeño, alto impacto, facturación estable que permita sueldos y nuevos proyectos.</p>
  </section>
  <section className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-4">4. Prioridades este año</h2>
    <ul className="list-disc pl-5">
      <li>Internalizar impresión Fine Art.</li>
      <li>Lanzar productos accesibles (stickers, postales).</li>
      <li>Mejorar conversión web.</li>
    </ul>
  </section>
 </div>
 </main>
 )
}

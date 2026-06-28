export default function BakoMindMap() {
 return (
 <main className="min-h-screen bg-cream px-8 py-12 max-w-5xl mx-auto">
   <div className="mb-10">
     <p className="font-body text-xs tracking-widest text-hongo uppercase mb-2">Bako</p>
     <h1 className="font-display text-4xl font-light text-negro">Strategic Mind Map</h1>
   </div>

   <svg viewBox="0 0 800 500" className="w-full h-auto bg-white rounded-xl shadow-lg p-4">
     {/* Central Node */}
     <circle cx="400" cy="250" r="60" fill="#f5e6ca" stroke="#4a4a4a" strokeWidth="2"/>
     <text x="400" y="255" textAnchor="middle" className="font-bold text-lg">BAKO</text>

     {/* Branches */}
     <line x1="400" y1="250" x2="150" y2="100" stroke="#999" strokeWidth="2"/>
     <rect x="50" y="70" width="200" height="60" fill="#fff" stroke="#4a4a4a" rx="10"/>
     <text x="150" y="105" textAnchor="middle" className="font-bold">1. Situación Actual</text>
     
     <line x1="400" y1="250" x2="650" y2="100" stroke="#999" strokeWidth="2"/>
     <rect x="550" y="70" width="200" height="60" fill="#fff" stroke="#4a4a4a" rx="10"/>
     <text x="650" y="105" textAnchor="middle" className="font-bold">2. Diagnóstico</text>

     <line x1="400" y1="250" x2="150" y2="400" stroke="#999" strokeWidth="2"/>
     <rect x="50" y="370" width="200" height="60" fill="#fff" stroke="#4a4a4a" rx="10"/>
     <text x="150" y="405" textAnchor="middle" className="font-bold">3. Visión</text>

     <line x1="400" y1="250" x2="650" y2="400" stroke="#999" strokeWidth="2"/>
     <rect x="550" y="370" width="200" height="60" fill="#fff" stroke="#4a4a4a" rx="10"/>
     <text x="650" y="405" textAnchor="middle" className="font-bold">4. Prioridades</text>
     
     {/* Details */}
     <text x="150" y="130" textAnchor="middle" fontSize="12">Ingresos inestables</text>
     <text x="650" y="130" textAnchor="middle" fontSize="12">Conversión baja / Logística</text>
     <text x="150" y="430" textAnchor="middle" fontSize="12">Editorial propia</text>
     <text x="650" y="430" textAnchor="middle" fontSize="12">Internalizar impresión</text>
   </svg>
 </main>
 )
}

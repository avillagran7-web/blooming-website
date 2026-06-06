"use client";
import { useState } from "react";

const PASSWORD = "weareblooming";

function BloomSymbol({ stroke = "#1A1A1A", size = 26 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="20" rx="10" ry="4.5" stroke={stroke} strokeWidth="0.8" fill="none"/>
      <ellipse cx="30" cy="20" rx="10" ry="4.5" stroke={stroke} strokeWidth="0.8" fill="none"/>
      <ellipse cx="20" cy="10" rx="4.5" ry="10" stroke={stroke} strokeWidth="0.8" fill="none"/>
      <ellipse cx="20" cy="30" rx="4.5" ry="10" stroke={stroke} strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

type OptionGroupProps = {
  id: string;
  type: "radio" | "checkbox";
  max?: number;
  options: string[];
  values: string[];
  onChange: (vals: string[]) => void;
};

function OptionGroup({ type, max = 1, options, values, onChange }: OptionGroupProps) {
  function toggle(val: string) {
    if (type === "radio") {
      onChange([val]);
    } else {
      if (values.includes(val)) {
        onChange(values.filter(v => v !== val));
      } else if (values.length < max) {
        onChange([...values, val]);
      }
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {options.map(opt => {
        const sel = values.includes(opt);
        return (
          <div
            key={opt}
            onClick={() => toggle(opt)}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "13px 16px",
              border: `1px solid ${sel ? "#5C6B5A" : "rgba(26,26,26,0.09)"}`,
              background: sel ? "rgba(92,107,90,0.05)" : "transparent",
              cursor: "pointer", userSelect: "none", transition: "all 0.18s",
            }}
          >
            <div style={{
              width: 16, height: 16, flexShrink: 0,
              border: `1px solid ${sel ? "#5C6B5A" : "rgba(26,26,26,0.2)"}`,
              borderRadius: type === "radio" ? "50%" : 2,
              background: sel ? "#5C6B5A" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.18s",
            }}>
              {sel && (
                type === "radio"
                  ? <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FAF8F3" }}/>
                  : <span style={{ color: "#FAF8F3", fontSize: 10, fontWeight: 500, lineHeight: 1 }}>✓</span>
              )}
            </div>
            <span style={{ fontSize: "0.87rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.4 }}>{opt}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Onboarding() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw]             = useState("");
  const [pwError, setPwError]   = useState(false);
  const [step, setStep]         = useState(1);
  const [done, setDone]         = useState(false);

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState<string[]>([]);
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState<string[]>([]);
  const [q6, setQ6] = useState("");
  const [q7, setQ7] = useState<string[]>([]);
  const [q8, setQ8] = useState<string[]>([]);
  const [q9, setQ9] = useState("");

  function tryUnlock() {
    if (pw === PASSWORD) { setUnlocked(true); }
    else { setPwError(true); setPw(""); setTimeout(() => setPwError(false), 2000); }
  }

  const input: React.CSSProperties = {
    width: "100%", background: "transparent", border: "none",
    borderBottom: "1px solid rgba(26,26,26,0.18)", padding: "12px 0",
    fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.88rem", fontWeight: 300,
    color: "#1A1A1A", resize: "none" as const, outline: "none", lineHeight: 1.6,
  };

  const eyebrow: React.CSSProperties = {
    fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.25em",
    textTransform: "uppercase" as const, color: "#8B7D6B", marginBottom: 14,
  };

  const qLabel: React.CSSProperties = {
    fontSize: "0.93rem", fontWeight: 400, color: "#1A1A1A", lineHeight: 1.5, marginBottom: 6,
  };

  const qHint: React.CSSProperties = {
    fontSize: "0.74rem", fontWeight: 300, color: "#1A1A1A", opacity: 0.38, marginBottom: 14, lineHeight: 1.5,
  };

  const multiLabel: React.CSSProperties = {
    fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase" as const,
    color: "#8B7D6B", opacity: 0.7, marginBottom: 10,
  };

  if (!unlocked) return (
    <div style={{
      minHeight: "100vh", background: "#FAF8F3",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet"/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <BloomSymbol size={36}/>
        <span style={{ fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase", color: "#1A1A1A" }}>Blooming</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 260 }}>
        <input
          type="password"
          placeholder="Contraseña"
          value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === "Enter" && tryUnlock()}
          style={{
            ...input, textAlign: "center", letterSpacing: "0.1em",
            borderBottom: `1px solid ${pwError ? "#c0392b" : "rgba(26,26,26,0.2)"}`,
          }}
        />
        <span style={{ fontSize: "0.72rem", color: "#c0392b", height: 16, opacity: pwError ? 1 : 0, transition: "opacity 0.2s" }}>
          Contraseña incorrecta
        </span>
      </div>
      <button
        onClick={tryUnlock}
        style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem", fontWeight: 400,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#FAF8F3",
          background: "#1A1A1A", border: "none", padding: "13px 36px", cursor: "pointer",
        }}
      >
        Entrar →
      </button>
    </div>
  );

  if (done) return (
    <div style={{ minHeight: "100vh", background: "#FAF8F3", fontFamily: "'Space Grotesk', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet"/>
      <header style={{ padding: "28px 48px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(26,26,26,0.06)" }}>
        <BloomSymbol/><span style={{ fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase" }}>Blooming</span>
      </header>
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <BloomSymbol stroke="#5C6B5A" size={52}/>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, fontStyle: "italic", color: "#5C6B5A", margin: "28px 0 16px" }}>Gracias.</h2>
        <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "#1A1A1A", opacity: 0.5, lineHeight: 1.75, maxWidth: 400, margin: "0 auto" }}>
          Recibimos tus respuestas.<br/><br/>
          Llegamos a la reunión con todo el contexto — y con las preguntas correctas.<br/><br/>
          Nos vemos pronto.
        </p>
      </div>
    </div>
  );

  const blocks = [
    {
      label: "01 · El problema",
      title: <>Cuéntanos<br/>dónde estás.</>,
      sub: "No hay respuestas correctas. Queremos entender tu contexto real antes de sentarnos contigo.",
    },
    {
      label: "02 · Objetivos",
      title: <>¿Hacia dónde<br/>quieres ir?</>,
      sub: "Queremos entender qué significa el éxito para ti — en tus propios términos.",
    },
    {
      label: "03 · Constraints",
      title: <>¿Qué te<br/>frena hoy?</>,
      sub: "La honestidad aquí nos permite llegar a la reunión con el diagnóstico correcto.",
    },
  ];

  const stepLabels = ["El problema", "Objetivos", "Constraints"];

  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F3", fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet"/>

      <header style={{ padding: "28px 48px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(26,26,26,0.06)" }}>
        <BloomSymbol/>
        <span style={{ fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase" }}>Blooming</span>
      </header>

      <div style={{ maxWidth: 660, margin: "0 auto", padding: "72px 24px 100px" }}>

        {/* Progress */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 72 }}>
          {stepLabels.map((label, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "none" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase",
                color: i + 1 === step ? "#5C6B5A" : "#1A1A1A",
                opacity: i + 1 === step ? 1 : i + 1 < step ? 0.45 : 0.25,
                whiteSpace: "nowrap",
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor" }}/>
                <span>{label}</span>
              </div>
              {i < 2 && <div style={{ flex: 1, height: 1, background: "rgba(26,26,26,0.1)", margin: "0 16px" }}/>}
            </div>
          ))}
        </div>

        {/* Block header */}
        <p style={eyebrow}>{blocks[step - 1].label}</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.15, marginBottom: 10 }}>
          {blocks[step - 1].title}
        </h2>
        <p style={{ fontSize: "0.88rem", fontWeight: 300, opacity: 0.45, lineHeight: 1.65, marginBottom: 56 }}>
          {blocks[step - 1].sub}
        </p>

        {/* ── Step 1 ── */}
        {step === 1 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuál es el principal desafío que quieres resolver?</p>
            <p style={qHint}>Sé específico — esta es la pregunta más importante del form.</p>
            <textarea rows={4} value={q1} onChange={e => setQ1(e.target.value)} style={input}
              placeholder="Ej: Tenemos producto y clientes, pero no logramos escalar el canal de adquisición de forma predecible..."/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuánto tiempo llevas enfrentando este problema?</p>
            <OptionGroup id="q2" type="radio" options={["Menos de 3 meses","3 a 6 meses","6 a 12 meses","Más de un año"]} values={q2} onChange={setQ2}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Qué has intentado para resolverlo? <span style={{ opacity: 0.35, fontWeight: 300, fontSize: "0.83rem" }}>(opcional)</span></p>
            <p style={qHint}>Nos ayuda a no proponer lo que ya no funcionó.</p>
            <textarea rows={3} value={q3} onChange={e => setQ3(e.target.value)} style={input}
              placeholder="Ej: Contratamos un consultor, probamos paid ads, reestructuramos el equipo comercial..."/>
          </div>
        </>}

        {/* ── Step 2 ── */}
        {step === 2 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuál es tu objetivo más importante en los próximos 12 meses?</p>
            <p style={qHint}>Puede ser un número, un mercado, una posición — lo que sea real y concreto para ti.</p>
            <textarea rows={3} value={q4} onChange={e => setQ4(e.target.value)} style={input}
              placeholder="Ej: Llegar a $500K ARR, lanzar en San Francisco, construir una comunidad de 1,000 usuarios activos..."/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿En qué área está tu mayor prioridad hoy?</p>
            <p style={multiLabel}>Elige hasta 2</p>
            <OptionGroup id="q5" type="checkbox" max={2}
              options={["Crecimiento de revenue","Entrada a nuevos mercados","Posicionamiento y marca","Comunidad y relaciones clave","Estructura go-to-market","Operaciones y equipo"]}
              values={q5} onChange={setQ5}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cómo defines el éxito al terminar de trabajar con Blooming?</p>
            <textarea rows={3} value={q6} onChange={e => setQ6(e.target.value)} style={input}
              placeholder="Ej: Tener una estrategia clara que el equipo pueda ejecutar, o haber cerrado los primeros 3 clientes enterprise..."/>
          </div>
        </>}

        {/* ── Step 3 ── */}
        {step === 3 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Qué es lo que más te frena para avanzar?</p>
            <p style={multiLabel}>Elige hasta 2</p>
            <OptionGroup id="q7" type="checkbox" max={2}
              options={["Capital o presupuesto limitado","Equipo — faltan capacidades o personas clave","Sin claridad estratégica — no sabemos bien qué priorizar","El producto o servicio aún no está listo para escalar","Falta de red o acceso a mercados clave","Demasiadas prioridades al mismo tiempo"]}
              values={q7} onChange={setQ7}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Tienes presupuesto asignado para este proyecto?</p>
            <OptionGroup id="q8" type="radio"
              options={["Sí, tengo un rango claro","Tengo una idea pero depende de la propuesta","Aún no — necesito entender el valor primero"]}
              values={q8} onChange={setQ8}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Hay algo más que quieras que sepamos antes de la reunión? <span style={{ opacity: 0.35, fontWeight: 300, fontSize: "0.83rem" }}>(opcional)</span></p>
            <textarea rows={3} value={q9} onChange={e => setQ9(e.target.value)} style={input}
              placeholder="Contexto adicional, restricciones específicas, o algo que simplemente quieras que sepamos..."/>
          </div>
        </>}

        {/* Nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 64, paddingTop: 28, borderTop: "1px solid rgba(26,26,26,0.06)" }}>
          <button
            onClick={() => setStep(s => s - 1)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem", fontWeight: 300,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A1A1A",
              opacity: step === 1 ? 0 : 0.35, background: "none", border: "none",
              cursor: step === 1 ? "default" : "pointer", pointerEvents: step === 1 ? "none" : "auto",
            }}
          >← Volver</button>
          <button
            onClick={() => step < 3 ? setStep(s => s + 1) : setDone(true)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem", fontWeight: 400,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#FAF8F3",
              background: "#1A1A1A", border: "none", padding: "13px 36px", cursor: "pointer",
            }}
          >{step < 3 ? "Continuar →" : "Enviar →"}</button>
        </div>

      </div>
    </div>
  );
}

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

function ScaleRow({ label, hint, value, onChange }: { label: string; hint?: string; value: number | null; onChange: (v: number) => void }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <p style={{ fontSize: "0.93rem", fontWeight: 400, color: "#1A1A1A", lineHeight: 1.5, marginBottom: hint ? 4 : 14 }}>{label}</p>
      {hint && <p style={{ fontSize: "0.74rem", fontWeight: 300, color: "#1A1A1A", opacity: 0.38, marginBottom: 14, lineHeight: 1.5 }}>{hint}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        {[0,1,2,3,4,5].map(n => {
          const sel = value === n;
          return (
            <div
              key={n}
              onClick={() => onChange(n)}
              style={{
                width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                border: `1px solid ${sel ? "#5C6B5A" : "rgba(26,26,26,0.12)"}`,
                background: sel ? "#5C6B5A" : "transparent",
                cursor: "pointer", userSelect: "none", transition: "all 0.18s",
                fontSize: "0.87rem", fontWeight: sel ? 500 : 300,
                color: sel ? "#FAF8F3" : "#1A1A1A",
              }}
            >{n}</div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7D6B", opacity: 0.7 }}>Bajo</span>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7D6B", opacity: 0.7 }}>Alto</span>
      </div>
    </div>
  );
}

export default function Onboarding() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw]             = useState("");
  const [pwError, setPwError]   = useState(false);
  const [step, setStep]         = useState(1);
  const [done, setDone]         = useState(false);

  // Bloque · Quién eres
  const [bIdName, setBIdName]       = useState("");
  const [bIdCompany, setBIdCompany] = useState("");
  const [bIdRole, setBIdRole]       = useState("");

  // Bloque 00 · El negocio
  const [b0Model, setB0Model]     = useState("");
  const [b0Trend, setB0Trend]     = useState<string[]>([]);
  const [b0Clients, setB0Clients] = useState("");

  // Bloque 01 · El problema
  const [b1Locator, setB1Locator] = useState<string[]>([]);
  const [b1Problem, setB1Problem] = useState("");
  const [b1Time, setB1Time]       = useState<string[]>([]);

  // Bloque 02 · Objetivos
  const [b2Vision, setB2Vision]       = useState("");
  const [b2Priority, setB2Priority]   = useState<string[]>([]);

  // Bloque 03 · Commitment
  const [b3Motivation, setB3Motivation]       = useState<number | null>(null);
  const [b3Involvement, setB3Involvement]     = useState<number | null>(null);
  const [b3Commitment, setB3Commitment]       = useState<number | null>(null);
  const [b3Hours, setB3Hours]                 = useState<string[]>([]);
  const [b3Budget, setB3Budget]               = useState<string[]>([]);
  const [b3Links, setB3Links]                 = useState("");

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

  const subSection: React.CSSProperties = {
    fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase" as const,
    color: "#8B7D6B", paddingTop: 32, marginTop: 4, marginBottom: 28,
    borderTop: "1px solid rgba(26,26,26,0.06)",
  };

  // ── Password gate ──
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

  // ── Pantalla de confirmación ──
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
      label: "00 · Quién eres",
      title: <>Antes de empezar,<br/>preséntate.</>,
      sub: "Tres preguntas rápidas — para llegar a la reunión sabiendo con quién hablamos.",
    },
    {
      label: "01 · El negocio",
      title: <>Cuéntanos<br/>cómo funciona.</>,
      sub: "Queremos entender tu negocio antes de hablar de cualquier otra cosa.",
    },
    {
      label: "02 · El problema",
      title: <>¿Dónde está<br/>el quiebre?</>,
      sub: "No hay respuestas correctas. Queremos entender tu contexto real antes de sentarnos contigo.",
    },
    {
      label: "03 · Objetivos",
      title: <>¿Hacia dónde<br/>vas?</>,
      sub: "Queremos entender qué significa el éxito para ti — en tus propios términos.",
    },
    {
      label: "04 · Commitment",
      title: <>¿Cómo llegas<br/>a esta conversación?</>,
      sub: "Una última mirada interna — nos ayuda a entender desde dónde arrancamos contigo.",
    },
  ];

  const stepLabels = ["Quién eres", "El negocio", "El problema", "Objetivos", "Commitment"];

  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F3", fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet"/>

      <header style={{ padding: "28px 48px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(26,26,26,0.06)" }}>
        <BloomSymbol/>
        <span style={{ fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase" }}>Blooming</span>
      </header>

      <div style={{ maxWidth: 660, margin: "0 auto", padding: "72px 24px 100px" }}>

        {/* ── Progreso ── */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 72 }}>
          {stepLabels.map((label, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: i < 3 ? 1 : "none" }}>
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
              {i < 4 && <div style={{ flex: 1, height: 1, background: "rgba(26,26,26,0.1)", margin: "0 16px" }}/>}
            </div>
          ))}
        </div>

        {/* ── Encabezado del bloque ── */}
        <p style={eyebrow}>{blocks[step - 1].label}</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.15, marginBottom: 10 }}>
          {blocks[step - 1].title}
        </h2>
        <p style={{ fontSize: "0.88rem", fontWeight: 300, opacity: 0.45, lineHeight: 1.65, marginBottom: 56 }}>
          {blocks[step - 1].sub}
        </p>

        {/* ── Bloque · Quién eres ── */}
        {step === 1 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuál es tu nombre?</p>
            <input type="text" value={bIdName} onChange={e => setBIdName(e.target.value)} style={{ ...input }} placeholder="Nombre completo"/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿En qué empresa o proyecto estás trabajando?</p>
            <input type="text" value={bIdCompany} onChange={e => setBIdCompany(e.target.value)} style={{ ...input }} placeholder="Nombre de la empresa o proyecto"/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuál es tu rol?</p>
            <input type="text" value={bIdRole} onChange={e => setBIdRole(e.target.value)} style={{ ...input }} placeholder="Ej: CEO, Head of Growth, Founder..."/>
          </div>
        </>}

        {/* ── Bloque 01 · El negocio ── */}
        {step === 2 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuál es tu modelo de negocios y cómo generas revenue?</p>
            <p style={qHint}>Tu fuente principal de ingresos hoy — no la visión, la realidad actual.</p>
            <textarea rows={3} value={b0Model} onChange={e => setB0Model(e.target.value)} style={input}
              placeholder="Ej: Vendemos bolsas directamente a consumidores vía web y tiendas propias. También tenemos una línea B2B con empresas para merchandising..."/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cómo están evolucionando tus ingresos?</p>
            <OptionGroup id="b0Trend" type="radio"
              options={["Creciendo rápido","Creciendo despacio","Estable","Bajando"]}
              values={b0Trend} onChange={setB0Trend}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cómo consigues clientes hoy y quiénes son?</p>
            <p style={qHint}>Canal principal, perfil del cliente, cómo llegan a ti.</p>
            <textarea rows={3} value={b0Clients} onChange={e => setB0Clients(e.target.value)} style={input}
              placeholder="Ej: La mayoría llega por Instagram y Google. Nuestro cliente principal es mujer 25–40, Chile y Argentina..."/>
          </div>
        </>}

        {/* ── Bloque 02 · El problema ── */}
        {step === 3 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>Si tuvieras que señalar dónde se rompe tu crecimiento, ¿dónde está el cuello de botella?</p>
            <p style={qHint}>Elige la opción que más se acerca — aunque no sea exacta.</p>
            <OptionGroup id="b1Locator" type="radio"
              options={[
                "No llega suficiente gente / nadie nos conoce (demanda)",
                "Llega gente pero no compra (conversión)",
                "Compran, pero poco o a mal margen (valor / precio)",
                "Compran una vez y no vuelven (retención)",
                "Vendemos, pero adquirir cuesta más de lo que deja (economía unitaria)",
                "No estoy seguro — necesito ayuda para identificarlo",
              ]}
              values={b1Locator} onChange={setB1Locator}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>Cuéntanos qué está pasando — con el contexto que tú tienes, no el que crees que queremos escuchar.</p>
            <p style={qHint}>Esta es la pregunta más importante del form. Sé específico.</p>
            <textarea rows={5} value={b1Problem} onChange={e => setB1Problem(e.target.value)} style={input}
              placeholder="Ej: Nuestra web antes representaba el 50% de las ventas y hoy es el 30%. No sabemos si cayó el tráfico, si la gente no convierte, o si simplemente otros canales crecieron más..."/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuánto tiempo llevas con este problema?</p>
            <OptionGroup id="b1Time" type="radio"
              options={["Menos de 3 meses","3 a 6 meses","6 a 12 meses","Más de un año"]}
              values={b1Time} onChange={setB1Time}/>
          </div>
        </>}

        {/* ── Bloque 03 · Objetivos ── */}
        {step === 4 && <>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Dónde quieres estar en 5 años, y qué necesitas lograr este año para llegar ahí?</p>
            <p style={qHint}>Tu visión real — dónde quieres llegar y el primer paso concreto.</p>
            <textarea rows={5} value={b2Vision} onChange={e => setB2Vision(e.target.value)} style={input}
              placeholder="Ej: En 5 años queremos ser la marca de bolsas sostenibles de referencia en LatAm. Este año necesitamos recuperar el canal web y llegar a $500K en ventas..."/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿En qué área está tu mayor prioridad hoy?</p>
            <p style={multiLabel}>Elige hasta 2</p>
            <OptionGroup id="b2Priority" type="checkbox" max={2}
              options={["Crecimiento de revenue","Entrada a nuevos mercados","Posicionamiento y marca","Comunidad y relaciones clave","Estructura go-to-market","Operaciones y equipo"]}
              values={b2Priority} onChange={setB2Priority}/>
          </div>
        </>}

        {/* ── Bloque 04 · Commitment ── */}
        {step === 5 && <>
          <ScaleRow
            label="Motivación"
            hint="¿Qué tan motivado estás con este proyecto hoy?"
            value={b3Motivation}
            onChange={setB3Motivation}
          />
          <ScaleRow
            label="Involucramiento"
            hint="¿Qué tan involucrado estarás tú personalmente en el proceso?"
            value={b3Involvement}
            onChange={setB3Involvement}
          />
          <ScaleRow
            label="Compromiso"
            hint="¿Qué tan comprometido estás con cambiar la situación actual?"
            value={b3Commitment}
            onChange={setB3Commitment}
          />
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Cuántas horas por semana puedes dedicar a este proyecto?</p>
            <OptionGroup id="b3Hours" type="radio"
              options={["Menos de 2 horas","2 a 5 horas","5 a 10 horas","Más de 10 horas"]}
              values={b3Hours} onChange={setB3Hours}/>
          </div>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>¿Tienes presupuesto asignado para este proyecto?</p>
            <OptionGroup id="b3Budget" type="radio"
              options={["Sí, tengo un rango claro","Tengo una idea pero depende de la propuesta","Aún no — necesito entender el valor primero"]}
              values={b3Budget} onChange={setB3Budget}/>
          </div>
          <p style={subSection}>Anexo</p>
          <div style={{ marginBottom: 44 }}>
            <p style={qLabel}>Links a documentos relevantes <span style={{ opacity: 0.35, fontWeight: 300, fontSize: "0.83rem" }}>(opcional)</span></p>
            <p style={qHint}>Deck, métricas, data room — cualquier material que nos ayude a llegar preparados.</p>
            <textarea rows={3} value={b3Links} onChange={e => setB3Links(e.target.value)} style={input}
              placeholder="https://..."/>
          </div>
        </>}

        {/* ── Navegación ── */}
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
            onClick={() => step < 5 ? setStep(s => s + 1) : setDone(true)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem", fontWeight: 400,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#FAF8F3",
              background: "#1A1A1A", border: "none", padding: "13px 36px", cursor: "pointer",
            }}
          >{step < 4 ? "Continuar →" : "Enviar →"}</button>
        </div>

      </div>
    </div>
  );
}

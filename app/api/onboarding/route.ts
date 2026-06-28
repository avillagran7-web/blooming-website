import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      name, company, role,
      businessModel, revenueTrend, clients,
      bottleneck, problem, timeWithProblem,
      vision, priorities,
      motivation, involvement, commitment, hoursPerWeek, budget, links,
    } = data

    const timestamp = new Date().toISOString()

    // 1. Save to Google Sheets (same webhook, different shape)
    const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK
    if (sheetUrl) {
      await fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'onboarding',
          date: timestamp,
          name, company, role,
          businessModel, revenueTrend: revenueTrend?.[0],
          clients, bottleneck: bottleneck?.[0], problem,
          timeWithProblem: timeWithProblem?.[0],
          vision, priorities: priorities?.join(', '),
          motivation, involvement, commitment,
          hoursPerWeek: hoursPerWeek?.[0],
          budget: budget?.[0], links,
        }),
      }).catch(e => console.error('[onboarding] Google Sheet error:', e))
    }

    // 2. Email notification to Blooming team
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: 'Blooming <onboarding@resend.dev>',
        to: 'hello@weareblooming.co',
        subject: `New client form — ${name} · ${company}`,
        html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
  <h2 style="font-size:1.4rem;font-weight:400;border-bottom:1px solid #eee;padding-bottom:16px;margin-bottom:24px;">
    Nuevo cliente · ${name}
  </h2>

  <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
    <tr><td style="padding:8px 0;color:#888;font-size:0.8rem;width:160px;">Nombre</td><td style="padding:8px 0;font-size:0.9rem;">${name}</td></tr>
    <tr><td style="padding:8px 0;color:#888;font-size:0.8rem;">Empresa</td><td style="padding:8px 0;font-size:0.9rem;">${company}</td></tr>
    <tr><td style="padding:8px 0;color:#888;font-size:0.8rem;">Rol</td><td style="padding:8px 0;font-size:0.9rem;">${role}</td></tr>
  </table>

  <h3 style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#888;margin-bottom:12px;">El negocio</h3>
  <p style="font-size:0.9rem;margin-bottom:8px;"><strong>Modelo:</strong> ${businessModel || '—'}</p>
  <p style="font-size:0.9rem;margin-bottom:8px;"><strong>Tendencia revenue:</strong> ${revenueTrend?.[0] || '—'}</p>
  <p style="font-size:0.9rem;margin-bottom:24px;"><strong>Clientes:</strong> ${clients || '—'}</p>

  <h3 style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#888;margin-bottom:12px;">El problema</h3>
  <p style="font-size:0.9rem;margin-bottom:8px;"><strong>Cuello de botella:</strong> ${bottleneck?.[0] || '—'}</p>
  <p style="font-size:0.9rem;margin-bottom:8px;"><strong>Descripción:</strong> ${problem || '—'}</p>
  <p style="font-size:0.9rem;margin-bottom:24px;"><strong>Tiempo con el problema:</strong> ${timeWithProblem?.[0] || '—'}</p>

  <h3 style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#888;margin-bottom:12px;">Objetivos</h3>
  <p style="font-size:0.9rem;margin-bottom:8px;"><strong>Visión:</strong> ${vision || '—'}</p>
  <p style="font-size:0.9rem;margin-bottom:24px;"><strong>Prioridades:</strong> ${priorities?.join(', ') || '—'}</p>

  <h3 style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#888;margin-bottom:12px;">Commitment</h3>
  <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
    <tr><td style="padding:6px 0;color:#888;font-size:0.8rem;width:160px;">Motivación</td><td style="font-size:0.9rem;">${motivation ?? '—'}/5</td></tr>
    <tr><td style="padding:6px 0;color:#888;font-size:0.8rem;">Involucramiento</td><td style="font-size:0.9rem;">${involvement ?? '—'}/5</td></tr>
    <tr><td style="padding:6px 0;color:#888;font-size:0.8rem;">Compromiso</td><td style="font-size:0.9rem;">${commitment ?? '—'}/5</td></tr>
    <tr><td style="padding:6px 0;color:#888;font-size:0.8rem;">Horas/semana</td><td style="font-size:0.9rem;">${hoursPerWeek?.[0] || '—'}</td></tr>
    <tr><td style="padding:6px 0;color:#888;font-size:0.8rem;">Presupuesto</td><td style="font-size:0.9rem;">${budget?.[0] || '—'}</td></tr>
  </table>
  ${links ? `<p style="font-size:0.9rem;"><strong>Links:</strong> ${links}</p>` : ''}

  <div style="margin-top:32px;padding:16px;background:#f5f5f5;border-radius:4px;">
    <p style="font-size:0.8rem;color:#888;margin:0;">Recibido: ${timestamp}</p>
    <p style="font-size:0.8rem;margin:4px 0 0;"><a href="https://weareblooming.co/dashboard/clients" style="color:#2D6A4F;">Ver en el dashboard →</a></p>
  </div>
</div>`,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[onboarding] Error:', e)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

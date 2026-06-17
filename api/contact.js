// Vercel Serverless Function — recibe consultas anónimas del formulario
// y las guarda en Vercel Postgres (Neon).
//
// Requiere la integración "Postgres" de Vercel conectada al proyecto.
// Las variables de entorno (POSTGRES_URL, etc.) se inyectan solas al conectarla.
// Ver SETUP-FORM.md para el paso a paso.

import { sql } from '@vercel/postgres';

// Crea la tabla la primera vez (idempotente).
async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id         BIGSERIAL PRIMARY KEY,
      nombre     TEXT NOT NULL,
      email      TEXT NOT NULL,
      mensaje    TEXT NOT NULL,
      ip         TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const nombre = (body.nombre || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const mensaje = (body.mensaje || '').toString().trim();
    const website = (body.website || '').toString();      // honeypot
    const elapsed = Number(body.elapsed) || 0;

    // ---- Anti-spam ----
    if (website) {
      // Un bot completó el campo trampa: respondemos OK para no darle pistas, pero no guardamos.
      return res.status(200).json({ ok: true });
    }
    if (elapsed > 0 && elapsed < 3000) {
      return res.status(429).json({ error: 'Enviaste demasiado rápido. Probá de nuevo.' });
    }

    // ---- Validación ----
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }
    if (nombre.length > 80 || email.length > 120 || mensaje.length > 2000) {
      return res.status(400).json({ error: 'Algún campo supera el largo permitido.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email inválido.' });
    }

    const ip = (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() || null;
    const ua = (req.headers['user-agent'] || '').toString().slice(0, 300) || null;

    await ensureTable();
    await sql`
      INSERT INTO contact_messages (nombre, email, mensaje, ip, user_agent)
      VALUES (${nombre}, ${email}, ${mensaje}, ${ip}, ${ua});
    `;

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact handler error:', err);
    return res.status(500).json({ error: 'Error del servidor. Probá más tarde.' });
  }
}

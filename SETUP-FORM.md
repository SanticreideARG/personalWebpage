# Formulario de consultas anónimas — Setup

El formulario de contacto (botón **"Iniciar un proyecto"** / **"consulta anónima"**) envía los
mensajes a una función serverless (`api/contact.js`) que los guarda en **Vercel Postgres**.

El sitio es estático (Astro → `dist/`), pero la función necesita correr en **Vercel** (no funciona
en GitHub Pages / Netlify estático sin adaptar). En esos hostings el formulario se degrada solo y
muestra el mail de contacto como alternativa.

> **Nota:** `@vercel/postgres` quedó deprecado y Vercel migró su Postgres a **Neon**. El código de
> `api/contact.js` sigue funcionando, pero si armás una base nueva, en el panel de Vercel vas a
> crear una **Neon** (Storage → Create Database → Neon). Las variables `POSTGRES_URL` se siguen
> inyectando igual, así que no hay que tocar el código. Si en el futuro querés, se puede migrar el
> import a `@neondatabase/serverless`.

## Pasos en Vercel

1. **Importá el repo** en Vercel (New Project → Import Git Repository).
   - Framework Preset: **Other** (es un sitio estático con carpeta `/api`).
   - No hace falta build command. Output: raíz del repo.

2. **Creá la base de datos.**
   - En el proyecto → pestaña **Storage** → **Create Database** → **Postgres** (Neon).
   - Conectala al proyecto. Vercel inyecta solo las variables `POSTGRES_URL`, `POSTGRES_PRISMA_URL`,
     etc. No tenés que copiar nada a mano.

3. **Deploy.** En el primer envío del formulario, la función crea la tabla `contact_messages`
   automáticamente (`CREATE TABLE IF NOT EXISTS`).

4. **Probá el formulario** en la web ya deployada. Si todo está bien, ves "¡Listo! Tu consulta llegó".

## Ver los mensajes recibidos

En Vercel → Storage → tu base → pestaña **Query**, ejecutá:

```sql
SELECT id, nombre, email, mensaje, created_at
FROM contact_messages
ORDER BY created_at DESC;
```

## Esquema de la tabla

```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id         BIGSERIAL PRIMARY KEY,
  nombre     TEXT NOT NULL,
  email      TEXT NOT NULL,
  mensaje    TEXT NOT NULL,
  ip         TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

## Medidas anti-spam ya implementadas

- **Honeypot**: un campo oculto (`website`) que los humanos no ven. Si viene completo, se descarta.
- **Tiempo mínimo**: el botón Enviar se habilita recién a los 3 s de abrir el formulario, y el
  servidor rechaza envíos hechos en menos de 3 s.
- **Captcha aritmético**: una suma aleatoria simple ("¿cuánto es 3 + 4?") que se valida en el cliente.
- **Validación de largos y formato de email** en cliente y servidor.

### Mejoras opcionales (si llega spam)

- Sumar **rate limit por IP** con Vercel KV / Upstash Redis.
- Reemplazar el captcha aritmético por **Cloudflare Turnstile** o **hCaptcha** (sin costo, sin tracking).
- Notificación por mail de cada consulta con **Resend** o un webhook a n8n.

## Desarrollo local

Para correr la función localmente necesitás el CLI de Vercel:

```bash
npm i -g vercel
vercel dev
```

Sin `vercel dev`, abrir `index.html` directo muestra el sitio completo; solo el envío del
formulario queda inactivo (muestra el fallback con el mail).

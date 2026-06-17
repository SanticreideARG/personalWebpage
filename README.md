# Sitio personal — Santiago Creide

Sitio web personal *Raíz Digital*, construido con **Astro**. Estático, con tema
claro/oscuro, secciones de CV, certificaciones, proyectos, notas y un formulario
de consulta anónima (función serverless en Vercel).

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:4321
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

## Estructura

```
public/              # imágenes, PDFs, certificados, favicon (se sirven en /)
  images/            #   avatar, hero, projects/, gallery/
  assets/            #   CV (PDF + standalone), certificados/, logos/
api/contact.js       # función serverless (Vercel) del formulario
src/
  layouts/Base.astro # head, nav, modales, visor y todo el JS del sitio
  components/         # una pieza por sección (Hero, Sobre, CV, Notas, …)
  data/              # contenido editable: notas.js, certificados.js, proyectos.js
  styles/global.css  # estilos + tokens de tema (oscuro default / claro)
```

## Cómo editar el contenido

- **Sumar una nota:** agregá un objeto a `src/data/notas.js`.
- **Sumar un certificado:** agregá un objeto a `src/data/certificados.js`.
- **Proyectos / galería:** `src/data/proyectos.js`.
- **Reemplazar placeholders:** pisá las imágenes en `public/images/projects/` y
  `public/images/gallery/` con las reales (mismos nombres).

## Tema claro/oscuro

El oscuro es el diseño por defecto. El toggle (luna/sol en el nav) guarda la
preferencia en `localStorage`. Los colores se definen como tokens en
`src/styles/global.css` (`:root` = oscuro, `[data-theme="light"]` = claro).

## Formulario de contacto

Necesita deploy en Vercel + base Postgres/Neon. Ver **SETUP-FORM.md**.

—
Santiago Creide · Neuquén, Patagonia Argentina · santi.creide@gmail.com

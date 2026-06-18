// Notas (blog). `body`/`body_en` es HTML que se muestra en el visor overlay.
// Campos *_en: traducción al inglés (i18n).
export const notas = [
  {
    id: 'nota-1',
    label: 'Trayectoria',
    label_en: 'Background',
    meta: 'Notas · Trayectoria',
    meta_en: 'Notes · Background',
    title: 'De arreglar una PC a escribir software',
    title_en: 'From fixing a PC to writing software',
    excerpt:
      'El recorrido largo: redes, infraestructura, casinos, depósitos — y cómo cada etapa terminó sumando al perfil que tengo hoy.',
    excerpt_en:
      'The long road: networks, infrastructure, casinos, warehouses — and how each stage ended up shaping the profile I have today.',
    body: `
      <p>Empecé con una pasantía en COTESMA, en telecomunicaciones. Tenía veintipico y no sabía mucho más que abrir una máquina y cambiarle una placa. Pero algo se prendió ahí.</p>
      <p>Después vinieron años que de afuera no parecían tener nada que ver: nueve en un casino, operaciones, atención al público, todo a las corridas. Hoy sé que esa etapa me enseñó más de lo que pensaba — leer a la gente, aguantar el ritmo, no perder la cabeza cuando todo se complica a la vez.</p>
      <p>En el medio nunca solté la parte técnica. Redes, infraestructura, MTCNA, manejo de depósito, compras. Cada laburo me dejó una capa nueva, aunque en el momento no lo viera.</p>
      <p>Cuando me metí de lleno en desarrollo, ya traía algo que no se aprende en un curso: <strong>entender cómo funciona un negocio de verdad, desde adentro</strong>. Saber qué le duele a la persona que está del otro lado del mostrador.</p>
      <p>Por eso, cuando alguien me pide un sistema, lo primero que hago no es abrir el editor. Es preguntar cómo trabajan hoy. El código viene después — y es la parte fácil.</p>
      <p class="vp-sign">— Santiago</p>`,
    body_en: `
      <p>I started with an internship at COTESMA, in telecommunications. I was in my early twenties and barely knew more than how to open a machine and swap a card. But something clicked there.</p>
      <p>Then came years that, from the outside, seemed unrelated: nine in a casino, operations, dealing with the public, always on the run. Today I know that stage taught me more than I thought — reading people, keeping the pace, not losing my head when everything gets complicated at once.</p>
      <p>Through it all I never let go of the technical side. Networks, infrastructure, MTCNA, warehouse management, purchasing. Every job left me a new layer, even if I didn't see it at the time.</p>
      <p>When I went all-in on development, I already brought something you don't learn in a course: <strong>understanding how a business really works, from the inside</strong>. Knowing what hurts for the person on the other side of the counter.</p>
      <p>That's why, when someone asks me for a system, the first thing I do isn't open the editor. It's ask how they work today. The code comes later — and it's the easy part.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
  {
    id: 'nota-2',
    label: 'Automatización',
    label_en: 'Automation',
    meta: 'Notas · Automatización',
    meta_en: 'Notes · Automation',
    title: 'Automatizar sin romper: la parte aburrida es la importante',
    title_en: 'Automating without breaking things: the boring part matters most',
    excerpt:
      'Lo que aprendí conectando WhatsApp, n8n y sistemas de gestión en PyMEs reales. El grueso del trabajo es entender el proceso, no el código.',
    excerpt_en:
      'What I learned connecting WhatsApp, n8n and management systems in real SMEs. The bulk of the work is understanding the process, not the code.',
    body: `
      <p>La automatización tiene fama de magia. La realidad es más aburrida y mucho más útil: sacarle a la gente las tareas repetitivas que la queman.</p>
      <p>El error más común que veo es querer automatizar <em>antes</em> de entender el proceso. Si el flujo manual ya está roto, automatizarlo solo hace que se rompa más rápido y a mayor escala.</p>
      <p>Mi receta es simple, casi obvia:</p>
      <ul>
        <li><strong>Relevar primero.</strong> Mirar cómo trabajan de verdad, no cómo dicen que trabajan. Casi nunca es lo mismo.</li>
        <li><strong>Ordenar.</strong> Si el proceso no tiene sentido en papel, no lo va a tener en código.</li>
        <li><strong>Recién ahí, conectar.</strong> n8n, WhatsApp, el CRM, lo que haga falta. La herramienta es lo último.</li>
      </ul>
      <p>Y dejar siempre una salida manual. Ningún sistema reemplaza el criterio de quien conoce el negocio. El software está para ahorrarle tiempo, no para atarla.</p>
      <p>Cuando sale bien, nadie lo nota. Las cosas simplemente pasan. Esa es la idea.</p>
      <p class="vp-sign">— Santiago</p>`,
    body_en: `
      <p>Automation has a reputation for being magic. The reality is more boring and far more useful: taking the repetitive tasks that burn people out off their plate.</p>
      <p>The most common mistake I see is wanting to automate <em>before</em> understanding the process. If the manual flow is already broken, automating it just makes it break faster and at a larger scale.</p>
      <p>My recipe is simple, almost obvious:</p>
      <ul>
        <li><strong>Map it first.</strong> Look at how they actually work, not how they say they work. It's almost never the same.</li>
        <li><strong>Tidy it up.</strong> If the process doesn't make sense on paper, it won't make sense in code.</li>
        <li><strong>Only then, connect.</strong> n8n, WhatsApp, the CRM, whatever's needed. The tool comes last.</li>
      </ul>
      <p>And always leave a manual way out. No system replaces the judgment of someone who knows the business. Software is there to save them time, not to tie them down.</p>
      <p>When it goes well, nobody notices. Things just happen. That's the idea.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
  {
    id: 'nota-3',
    label: 'Proyecto actual',
    label_en: 'Current project',
    meta: 'Notas · Proyecto actual',
    meta_en: 'Notes · Current project',
    title: 'Verdeo: ordenar una operación que crece en cuatro ciudades',
    title_en: 'Verdeo: bringing order to an operation growing across four cities',
    excerpt:
      'Darle a una empresa de viandas que opera en cuatro ciudades un solo lugar donde mirar, del pedido a la entrega.',
    excerpt_en:
      'Giving a meal-delivery company operating in four cities a single place to look, from order to delivery.',
    body: `
      <p>Verdeo es una empresa de viandas saludables que opera en cuatro ciudades al mismo tiempo. Crecer así es lindo de afuera y un quilombo de adentro: pedidos, entregas, stock, cobros — cada ciudad con su propio ritmo.</p>
      <p>El laburo no fue "hacer una app". Fue darle a la operación <strong>un solo lugar donde mirar</strong>, del pedido a la entrega, sin que nadie tenga que abrir cinco planillas para saber qué está pasando.</p>
      <p>El stack es el que ya conozco bien: Laravel y Filament para el panel, n8n para la automatización, WhatsApp conectado para las notificaciones, Docker para que corra prolijo en su propio servidor. Pero lo técnico es lo de menos.</p>
      <p>Lo difícil siempre es lo mismo: que la herramienta se adapte a cómo trabaja la gente y no al revés. Un sistema que obliga a cambiar la forma de laburar termina en un cajón, por más lindo que sea.</p>
      <p>Sigue en desarrollo. Cada semana aprendo algo nuevo de cómo se mueve un negocio que va rápido.</p>
      <p class="vp-sign">— Santiago</p>`,
    body_en: `
      <p>Verdeo is a healthy-meal company operating in four cities at once. Growing like that looks great from the outside and is a mess on the inside: orders, deliveries, stock, payments — each city with its own rhythm.</p>
      <p>The job wasn't "build an app". It was giving the operation <strong>a single place to look</strong>, from order to delivery, without anyone having to open five spreadsheets to know what's going on.</p>
      <p>The stack is the one I already know well: Laravel and Filament for the panel, n8n for automation, WhatsApp connected for notifications, Docker so it runs cleanly on its own server. But the tech is the least of it.</p>
      <p>The hard part is always the same: getting the tool to adapt to how people work, not the other way around. A system that forces people to change how they work ends up in a drawer, no matter how nice it is.</p>
      <p>Still in development. Every week I learn something new about how a fast-moving business runs.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
  {
    id: 'nota-4',
    label: 'Side project',
    label_en: 'Side project',
    meta: 'Notas · Side project',
    meta_en: 'Notes · Side project',
    title: 'Grimorio: hacer un juego de cero',
    title_en: 'Grimorio: building a game from scratch',
    excerpt:
      'Lo que aprendí fuera del laburo metiéndome con React 19, Zustand y el caos de un combate por turnos.',
    excerpt_en:
      'What I learned outside of work, diving into React 19, Zustand and the chaos of turn-based combat.',
    body: `
      <p>Fuera del laburo me puse a hacer un juego. Grimorio: un RPG cooperativo por turnos, de fantasía oscura, con onda de juego de mesa.</p>
      <p>No lo hice para mostrar nada. Lo hice porque quería entender de verdad cómo se maneja el estado de algo tan caótico como un combate por turnos — y para eso no hay mejor forma que meterse hasta el cuello.</p>
      <p>Terminó en React 19 + Vite + Zustand, con login de Google y mecánicas bastante más complejas de las que tenía en la cabeza al arrancar. Anda igual de bien en desktop y en mobile.</p>
      <p>Aprendí más haciendo esto que en varios cursos. Cuando el proyecto es tuyo y no hay deadline, te metés en los problemas que normalmente esquivás.</p>
      <p>Por algo dicen que la mejor forma de aprender una herramienta es romperla en algo que te importa.</p>
      <p class="vp-sign">— Santiago</p>`,
    body_en: `
      <p>Outside of work I set out to build a game. Grimorio: a cooperative, turn-based dark-fantasy RPG with a board-game feel.</p>
      <p>I didn't make it to show off anything. I made it because I genuinely wanted to understand how you manage the state of something as chaotic as turn-based combat — and there's no better way than getting in up to your neck.</p>
      <p>It ended up in React 19 + Vite + Zustand, with Google login and mechanics quite a bit more complex than I had in mind when I started. It runs just as well on desktop and mobile.</p>
      <p>I learned more building this than in several courses. When the project is yours and there's no deadline, you get into the problems you'd normally dodge.</p>
      <p>There's a reason they say the best way to learn a tool is to break it on something you care about.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
];

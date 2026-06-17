// Notas (blog). El `body` es HTML que se muestra en el visor overlay.
// Para sumar una nota nueva: agregá un objeto a este array.
export const notas = [
  {
    id: 'nota-1',
    label: 'Trayectoria',
    meta: 'Notas · Trayectoria',
    title: 'De arreglar una PC a escribir software',
    excerpt:
      'El recorrido largo: redes, infraestructura, casinos, depósitos — y cómo cada etapa terminó sumando al perfil que tengo hoy.',
    body: `
      <p>Empecé con una pasantía en COTESMA, en telecomunicaciones. Tenía veintipico y no sabía mucho más que abrir una máquina y cambiarle una placa. Pero algo se prendió ahí.</p>
      <p>Después vinieron años que de afuera no parecían tener nada que ver: nueve en un casino, operaciones, atención al público, todo a las corridas. Hoy sé que esa etapa me enseñó más de lo que pensaba — leer a la gente, aguantar el ritmo, no perder la cabeza cuando todo se complica a la vez.</p>
      <p>En el medio nunca solté la parte técnica. Redes, infraestructura, MTCNA, manejo de depósito, compras. Cada laburo me dejó una capa nueva, aunque en el momento no lo viera.</p>
      <p>Cuando me metí de lleno en desarrollo, ya traía algo que no se aprende en un curso: <strong>entender cómo funciona un negocio de verdad, desde adentro</strong>. Saber qué le duele a la persona que está del otro lado del mostrador.</p>
      <p>Por eso, cuando alguien me pide un sistema, lo primero que hago no es abrir el editor. Es preguntar cómo trabajan hoy. El código viene después — y es la parte fácil.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
  {
    id: 'nota-2',
    label: 'Automatización',
    meta: 'Notas · Automatización',
    title: 'Automatizar sin romper: la parte aburrida es la importante',
    excerpt:
      'Lo que aprendí conectando WhatsApp, n8n y sistemas de gestión en PyMEs reales. El grueso del trabajo es entender el proceso, no el código.',
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
  },
  {
    id: 'nota-3',
    label: 'Proyecto actual',
    meta: 'Notas · Proyecto actual',
    title: 'Verdeo: ordenar una operación que crece en cuatro ciudades',
    excerpt:
      'Darle a una empresa de viandas que opera en cuatro ciudades un solo lugar donde mirar, del pedido a la entrega.',
    body: `
      <p>Verdeo es una empresa de viandas saludables que opera en cuatro ciudades al mismo tiempo. Crecer así es lindo de afuera y un quilombo de adentro: pedidos, entregas, stock, cobros — cada ciudad con su propio ritmo.</p>
      <p>El laburo no fue "hacer una app". Fue darle a la operación <strong>un solo lugar donde mirar</strong>, del pedido a la entrega, sin que nadie tenga que abrir cinco planillas para saber qué está pasando.</p>
      <p>El stack es el que ya conozco bien: Laravel y Filament para el panel, n8n para la automatización, WhatsApp conectado para las notificaciones, Docker para que corra prolijo en su propio servidor. Pero lo técnico es lo de menos.</p>
      <p>Lo difícil siempre es lo mismo: que la herramienta se adapte a cómo trabaja la gente y no al revés. Un sistema que obliga a cambiar la forma de laburar termina en un cajón, por más lindo que sea.</p>
      <p>Sigue en desarrollo. Cada semana aprendo algo nuevo de cómo se mueve un negocio que va rápido.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
  {
    id: 'nota-4',
    label: 'Side project',
    meta: 'Notas · Side project',
    title: 'Grimorio: hacer un juego de cero',
    excerpt:
      'Lo que aprendí fuera del laburo metiéndome con React 19, Zustand y el caos de un combate por turnos.',
    body: `
      <p>Fuera del laburo me puse a hacer un juego. Grimorio: un RPG cooperativo por turnos, de fantasía oscura, con onda de juego de mesa.</p>
      <p>No lo hice para mostrar nada. Lo hice porque quería entender de verdad cómo se maneja el estado de algo tan caótico como un combate por turnos — y para eso no hay mejor forma que meterse hasta el cuello.</p>
      <p>Terminó en React 19 + Vite + Zustand, con login de Google y mecánicas bastante más complejas de las que tenía en la cabeza al arrancar. Anda igual de bien en desktop y en mobile.</p>
      <p>Aprendí más haciendo esto que en varios cursos. Cuando el proyecto es tuyo y no hay deadline, te metés en los problemas que normalmente esquivás.</p>
      <p>Por algo dicen que la mejor forma de aprender una herramienta es romperla en algo que te importa.</p>
      <p class="vp-sign">— Santiago</p>`,
  },
];

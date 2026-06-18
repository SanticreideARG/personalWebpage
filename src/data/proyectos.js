// Proyectos personales (subsección dentro de #proyectos).
// Grimorio y Poker Tournament son los destacados (mismo stack, apps reales).
// PoketGotchi va en segundo plano, como proyecto chico.
export const grimorio = {
  name: 'Grimorio',
  badge: 'Mi primer juego en producción · v1.0',
  badge_en: 'My first game in production · v1.0',
  shots: ['/images/projects/grimorio1.jpg', '/images/projects/grimorio2.jpg', '/images/projects/grimorio3.jpg'],
  desc: 'Mi primer juego online desplegado en producción. Un RPG cooperativo por turnos, de fantasía oscura, con onda de juego de mesa. Login con Google, partidas guardadas en la nube y un sistema de combate con dados y mecánicas avanzadas. React 19 + Vite + Zustand, para desktop y mobile.',
  desc_en: 'My first online game deployed to production. A cooperative, turn-based dark-fantasy RPG with a board-game feel. Google login, cloud-saved games and a dice-based combat system with advanced mechanics. React 19 + Vite + Zustand, for desktop and mobile.',
  live: 'https://grimorio-hazel.vercel.app/',
  repo: 'https://github.com/SanticreideARG/Grimorio',
};

export const pokerTournament = {
  name: 'Poker Tournament',
  badge: 'App de gestión · En producción',
  badge_en: 'Management app · In production',
  shots: ['/images/projects/poker1.jpg', '/images/projects/poker2.jpg', '/images/projects/poker3.jpg', '/images/projects/poker4.jpg'],
  desc: 'Director de torneos de poker: timer de niveles y blinds, editor de torneos con importación CSV, control de mesa y ajustes. Mismo stack que Grimorio — React 19 + Vite + Zustand + TypeScript, pensado para desktop y mobile.',
  desc_en: 'Poker tournament director: levels and blinds timer, tournament editor with CSV import, table control and settings. Same stack as Grimorio — React 19 + Vite + Zustand + TypeScript, built for desktop and mobile.',
  live: 'https://tournament-director-seven.vercel.app/',
  repo: 'https://github.com/SanticreideARG/Tournament-Director',
};

export const poketgotchi = {
  name: 'PoketGotchi',
  tag: 'Proyecto HTML',
  tag_en: 'HTML project',
  shots: ['/images/projects/poketgotchi-1.jpg'],
  desc: 'Un proyecto chico, en HTML/CSS/JS puro: un Tamagotchi con un búho de mascota, mecánicas de cuidado y una tienda. Hecho por gusto, para soltar la mano.',
  desc_en: 'A small project in pure HTML/CSS/JS: a Tamagotchi with a pet owl, care mechanics and a shop. Made for fun, to keep my hands warm.',
  live: 'https://poketgochi.vercel.app/',
  repo: 'https://github.com/SanticreideARG/PoketGochi',
};

// Galería personal (placeholders — reemplazar por fotos reales).
export const galeria = [
  { src: '/images/gallery/foto-01.jpg', caption: 'Patagonia' },
  { src: '/images/gallery/foto-02.jpg', caption: 'Taller · setup' },
  { src: '/images/gallery/foto-03.jpg', caption: 'Momento' },
  { src: '/images/gallery/foto-04.jpg', caption: 'Naturaleza' },
  { src: '/images/gallery/foto-05.jpg', caption: 'Personal' },
  { src: '/images/gallery/foto-06.jpg', caption: 'Neuquén' },
];

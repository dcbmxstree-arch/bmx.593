// ============================================================
//  BMX.593 — Contenido del Home
//  Edita este archivo para actualizar videos, fotos,
//  noticias y eventos. El sitio se actualiza al recargar.
// ============================================================


// ── VIDEOS ──────────────────────────────────────────────────
// tipo: "youtube"  → pon el ID del video (lo que va después de ?v= en la URL)
// tipo: "local"    → pon la ruta al archivo, ej: "assets/video/mivideo.mp4"
const VIDEOS = [
  {
    id: 1,
    titulo: "Final Nacional BMX Freestyle 2024",
    descripcion: "Lo mejor de la final nacional celebrada en Quito. Trucos increíbles de los mejores riders del país.",
    tipo: "youtube",
    src: "7XS_SsSkytA",
    fecha: "2024-11-15",
    destacado: true
  },
  {
    id: 2,
    titulo: "Session en Skate Park La Carolina",
    descripcion: "Riders de la comunidad BMX.593 en una sesión de domingo en La Carolina.",
    tipo: "youtube",
    src: "9QV6cwqpqaE",
    fecha: "2024-10-22",
    destacado: false
  },
  {
    id: 3,
    titulo: "Dirt Jumps Guamaní — Edit 2024",
    descripcion: "Edit de las pistas de tierra del sur de Quito. Saltos, whips y mucho flow.",
    tipo: "youtube",
    src: "ue2TLjR2qIw",
    fecha: "2024-09-08",
    destacado: false
  },
  {
    id: 4,
    titulo: "BMX Street Quito — Invierno",
    descripcion: "Explorando las calles de Quito en busca de spots únicos. Street riding en la capital.",
    tipo: "youtube",
    src: "OJm2lSxXrwY",
    fecha: "2024-08-30",
    destacado: false
  },
{
  id: 5,
  titulo: "Título de tu video",
  descripcion: "Descripción del video.",
  tipo: "youtube",
  src: "Qn_C4MMvzlU",    // ← solo esto, sin la URL ni el ?si=...
  fecha: "2025-01-15",
  destacado: false
}
];


// ── FOTOS ────────────────────────────────────────────────────
// imagen: URL de la foto (puede ser https:// o ruta local como "assets/img/foto.jpg")
// Para fotos locales, sube el archivo a la carpeta assets/img/
const FOTOS = [
  {
    id: 1,
    titulo: "La Carolina",
    autor: "@rider_quitense",
    imagen: "https://dcbmxstree-arch.github.io/bmx.593/assets/img/spots/carolina/carolina1.jpg",,
    fecha: "2024-11-10"
  },
  {
    id: 2,
    titulo: "Barspin en el bowl",
    autor: "@bmxec",
    imagen: "https://picsum.photos/seed/bmx2/600/400",
    fecha: "2024-10-18"
  },
  {
    id: 3,
    titulo: "Manual pad — Centro Histórico",
    autor: "@street_qto",
    imagen: "https://picsum.photos/seed/bmx3/600/400",
    fecha: "2024-09-25"
  },
  {
    id: 4,
    titulo: "Dirt jump — Guamaní",
    autor: "@dirtlife593",
    imagen: "https://picsum.photos/seed/bmx4/600/400",
    fecha: "2024-09-01"
  },
  {
    id: 5,
    titulo: "Flair attempt — Quitumbe",
    autor: "@bmxquito",
    imagen: "https://picsum.photos/seed/bmx5/600/400",
    fecha: "2024-08-14"
  },
  {
    id: 6,
    titulo: "Session grupal — El Ejido",
    autor: "@comunidad593",
    imagen: "https://picsum.photos/seed/bmx6/600/400",
    fecha: "2024-07-20"
  }
];


// ── NOTICIAS ─────────────────────────────────────────────────
// link: puede ser una URL externa o una página propia (ej: "noticias/nota-1.html")
// Si no tienes link, pon: link: ""
const NOTICIAS = [
  {
    id: 1,
    titulo: "Ecuador tendrá representación en el UCI BMX Freestyle World Cup 2025",
    descripcion: "Tres riders ecuatorianos clasificaron para representar al país en la próxima World Cup. Un hito histórico para el BMX nacional.",
    categoria: "competencia",
    fecha: "2024-12-01",
    imagen: "https://picsum.photos/seed/noticia1/600/350",
    link: "#"
  },
  {
    id: 2,
    titulo: "Nuevo skate park inaugurado en el Valle de los Chillos",
    descripcion: "El Municipio de Quito inaugura una nueva infraestructura deportiva con rampas de BMX, zona de street y mini ramp.",
    categoria: "infraestructura",
    fecha: "2024-11-20",
    imagen: "https://picsum.photos/seed/noticia2/600/350",
    link: "#"
  },
  {
    id: 3,
    titulo: "Taller de BMX gratuito para jóvenes en Quitumbe",
    descripcion: "La Federación Ecuatoriana de Ciclismo organiza talleres de iniciación al BMX Freestyle dirigidos a jóvenes de 10 a 18 años.",
    categoria: "comunidad",
    fecha: "2024-11-05",
    imagen: "https://picsum.photos/seed/noticia3/600/350",
    link: "#"
  },
  {
    id: 4,
    titulo: "Campeonato Interbarrial de BMX — Resultados",
    descripcion: "Se disputó el primer campeonato interbarrial de BMX en Quito. Conoce los resultados y la clasificación final.",
    categoria: "competencia",
    fecha: "2024-10-28",
    imagen: "https://picsum.photos/seed/noticia4/600/350",
    link: "#"
  }
];


// ── EVENTOS Y CONCURSOS ──────────────────────────────────────
// estado: "proximo" | "en-curso" | "finalizado"
// Para calcular estado automáticamente, deja estado: "auto"
const EVENTOS = [
  {
    id: 1,
    nombre: "Copa BMX.593 — Quito Open",
    descripcion: "Primera edición de la copa organizada por la comunidad. Categorías: kids, junior, open masculino y open femenino.",
    lugar: "Skate Park La Carolina, Quito",
    fecha_inicio: "2025-03-15",
    fecha_fin: "2025-03-16",
    estado: "proximo",
    imagen: "https://picsum.photos/seed/evento1/600/350",
    link_inscripcion: "#"
  },
  {
    id: 2,
    nombre: "Campeonato Nacional FEC 2025",
    descripcion: "Campeonato oficial organizado por la Federación Ecuatoriana de Ciclismo. Válido para el ranking nacional.",
    lugar: "Guayaquil, Ecuador",
    fecha_inicio: "2025-05-10",
    fecha_fin: "2025-05-11",
    estado: "proximo",
    imagen: "https://picsum.photos/seed/evento2/600/350",
    link_inscripcion: "#"
  },
  {
    id: 3,
    nombre: "Session Nocturna — La Floresta",
    descripcion: "Session informal de street riding en el barrio La Floresta. Entrada libre, todos los niveles bienvenidos.",
    lugar: "Barrio La Floresta, Quito",
    fecha_inicio: "2024-12-20",
    fecha_fin: "2024-12-20",
    estado: "proximo",
    imagen: "https://picsum.photos/seed/evento3/600/350",
    link_inscripcion: ""
  },
  {
    id: 4,
    nombre: "Interbarrial BMX Quito Sur",
    descripcion: "Competencia entre riders del sur de Quito. Gran ambiente y premios en efectivo para los ganadores.",
    lugar: "Skate Park Quitumbe, Quito",
    fecha_inicio: "2024-10-26",
    fecha_fin: "2024-10-27",
    estado: "finalizado",
    imagen: "https://picsum.photos/seed/evento4/600/350",
    link_inscripcion: ""
  }
];

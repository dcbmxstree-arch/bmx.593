// ============================================================
//  BMX.593 — Base de datos de Spots
//  ============================================================
//
//  CÓMO AGREGAR UN SPOT NUEVO:
//  1. Copia uno de los objetos de ejemplo de abajo
//  2. Cambia todos los valores (id, nombre, ciudad, etc.)
//  3. El id debe ser único — usa el número siguiente al último
//  4. Agrega las fotos en: assets/img/spots/NOMBRE_SPOT/
//  5. Guarda el archivo y recarga la página
//
//  CÓMO AGREGAR UNA CIUDAD NUEVA:
//  1. Agrega la ciudad al array CIUDADES al final de este archivo
//  2. Crea los spots de esa ciudad con el campo ciudad: "NombreCiudad"
//     (debe coincidir exactamente con el nombre en CIUDADES)
//
//  TIPOS VÁLIDOS:    "parque" | "street" | "dirt"
//  DIFICULTAD:       "principiante" | "intermedio" | "avanzado"
//
//  FOTOS:
//  - Guarda las fotos en: assets/img/spots/nombre_del_spot/
//  - Usa nombres simples sin espacios: foto_1.jpg, foto_2.jpg
//  - Formato recomendado: JPG o WEBP
//  - Tamaño máximo: 1200px de ancho, menos de 500kb por foto
//  - Si no tienes fotos aún, deja el array fotos: [] vacío
//    y se mostrará una imagen de placeholder automáticamente
//
// ============================================================

const SPOTS = [

  // ──────────────────────────────────────────
  //  QUITO
  // ──────────────────────────────────────────

  {
    id: 1,
    nombre: "Skate Park La Carolina",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.1807,
    lng: -78.4840,
    descripcion: "Uno de los skate parks más grandes de Quito, ubicado dentro del Parque La Carolina. Cuenta con rampas, funboxes y zona de street. Muy concurrido los fines de semana, ideal para sesiones grupales y conocer a otros riders de la ciudad.",
    horario: "Lunes a Domingo: 07:00 – 19:00",
    // FOTOS: agrega las imágenes en assets/img/spots/carolina/
    // Ejemplo: "assets/img/spots/carolina/carolina_1.jpg"
    fotos: [
      "https://picsum.photos/seed/carolina1/800/500",
      "https://picsum.photos/seed/carolina2/800/500",
      "https://picsum.photos/seed/carolina3/800/500"
    ]
  },

  {
    id: 2,
    nombre: "Skate Park El Ejido",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "principiante",
    lat: -0.2105,
    lng: -78.4950,
    descripcion: "Pequeño pero bien mantenido, ideal para principiantes. Está en el Parque El Ejido, en pleno centro de Quito. Rampas suaves y ambiente tranquilo entre semana. Perfecto para aprender los fundamentos del BMX sin presión.",
    horario: "Lunes a Domingo: 08:00 – 18:00",
    // FOTOS: agrega las imágenes en assets/img/spots/ejido/
    fotos: [
      "https://picsum.photos/seed/ejido1/800/500",
      "https://picsum.photos/seed/ejido2/800/500"
    ]
  },

  {
    id: 3,
    nombre: "Spot Street Iñaquito",
    ciudad: "Quito",
    tipo: "street",
    dificultad: "avanzado",
    lat: -0.1720,
    lng: -78.4860,
    descripcion: "Zona urbana con escaleras, barras y bordillos de concreto. Punto de encuentro clásico de la escena street de Quito. Mejor visitarlo en la tarde cuando hay menos tráfico peatonal. Se necesita experiencia para aprovechar los obstáculos.",
    horario: "Sin horario fijo – mejor tarde/noche",
    // FOTOS: agrega las imágenes en assets/img/spots/inaquito/
    fotos: [
      "https://picsum.photos/seed/inaquito1/800/500",
      "https://picsum.photos/seed/inaquito2/800/500",
      "https://picsum.photos/seed/inaquito3/800/500"
    ]
  },

  {
    id: 4,
    nombre: "Dirt Tracks Guamaní",
    ciudad: "Quito",
    tipo: "dirt",
    dificultad: "avanzado",
    lat: -0.3450,
    lng: -78.5500,
    descripcion: "Pistas de tierra construidas por la comunidad local al sur de Quito. Saltos de distintos tamaños, ideales para practicar dirt jumps y manual pads. La comunidad es muy unida y siempre hay riders dispuestos a dar tips.",
    horario: "Sábados y Domingos: 09:00 – 17:00",
    // FOTOS: agrega las imágenes en assets/img/spots/guamani/
    fotos: [
      "https://picsum.photos/seed/guamani1/800/500",
      "https://picsum.photos/seed/guamani2/800/500"
    ]
  },

  {
    id: 5,
    nombre: "Skate Park Quitumbe",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.3200,
    lng: -78.5480,
    descripcion: "Moderno skate park en el sur de Quito construido por el Municipio. Bowl, calle y mini ramp en excelente estado. Muy popular entre los riders jóvenes del sector. Cuenta con iluminación para sesiones nocturnas.",
    horario: "Martes a Domingo: 09:00 – 18:00",
    // FOTOS: agrega las imágenes en assets/img/spots/quitumbe/
    fotos: [
      "https://picsum.photos/seed/quitumbe1/800/500",
      "https://picsum.photos/seed/quitumbe2/800/500",
      "https://picsum.photos/seed/quitumbe3/800/500"
    ]
  },

  {
    id: 6,
    nombre: "Spot Street La Floresta",
    ciudad: "Quito",
    tipo: "street",
    dificultad: "intermedio",
    lat: -0.2050,
    lng: -78.4780,
    descripcion: "Barrio bohemio con arquitectura variada que ofrece obstáculos naturales: escaleras cortas, plazoletas y rampas de acceso. Buen ambiente y apoyo del vecindario. Ideal para sesiones fotográficas por el entorno urbano.",
    horario: "Sin horario fijo – mejor mañanas",
    // FOTOS: agrega las imágenes en assets/img/spots/floresta/
    fotos: [
      "https://picsum.photos/seed/floresta1/800/500",
      "https://picsum.photos/seed/floresta2/800/500"
    ]
  },

  {
    id: 7,
    nombre: "Dirt Tracks Pomasqui",
    ciudad: "Quito",
    tipo: "dirt",
    dificultad: "principiante",
    lat: -0.0730,
    lng: -78.4580,
    descripcion: "Zona de tierra al norte de Quito con saltos pequeños y medianos. Ideal para quienes están comenzando en el dirt. La comunidad local mantiene las pistas en buen estado y organiza sesiones los fines de semana.",
    horario: "Fines de semana: 10:00 – 16:00",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },

  // ──────────────────────────────────────────
  //  GUAYAQUIL
  // ──────────────────────────────────────────

  {
    id: 8,
    nombre: "Skate Park Malecón 2000",
    ciudad: "Guayaquil",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -2.1900,
    lng: -79.8827,
    descripcion: "Skate park ubicado en el icónico Malecón 2000 frente al río Guayas. Vista privilegiada y buenas instalaciones con rampas de distintos niveles. Ambiente festivo especialmente los fines de semana.",
    horario: "Martes a Domingo: 09:00 – 18:00",
    // FOTOS: agrega las imágenes en assets/img/spots/malecon/
    fotos: [
      "https://picsum.photos/seed/malecon1/800/500",
      "https://picsum.photos/seed/malecon2/800/500",
      "https://picsum.photos/seed/malecon3/800/500"
    ]
  },

  {
    id: 9,
    nombre: "Spot Street Centro Histórico GYE",
    ciudad: "Guayaquil",
    tipo: "street",
    dificultad: "intermedio",
    lat: -2.1962,
    lng: -79.8862,
    descripcion: "El centro histórico de Guayaquil ofrece escaleras coloniales, barandas de hierro y plazoletas adoquinadas. Zona densa en obstáculos naturales para el street riding. Mejor visitarlo en la mañana antes de que se llene de gente.",
    horario: "Sin horario fijo – mejor mañanas",
    // FOTOS: agrega las imágenes en assets/img/spots/centro_gye/
    fotos: [
      "https://picsum.photos/seed/centrogye1/800/500",
      "https://picsum.photos/seed/centrogye2/800/500"
    ]
  },

  {
    id: 10,
    nombre: "Dirt Park Cerro El Carmen",
    ciudad: "Guayaquil",
    tipo: "dirt",
    dificultad: "avanzado",
    lat: -2.1780,
    lng: -79.8750,
    descripcion: "Pistas de tierra en las laderas del Cerro El Carmen con vistas espectaculares de la ciudad. Saltos de gran tamaño construidos por riders locales. Requiere buena condición física por la altura y el calor de Guayaquil.",
    horario: "Sábados y Domingos: 07:00 – 12:00",
    // FOTOS: agrega las imágenes en assets/img/spots/cerro_carmen/
    fotos: [
      "https://picsum.photos/seed/cerrocarmen1/800/500",
      "https://picsum.photos/seed/cerrocarmen2/800/500"
    ]
  },

  // ──────────────────────────────────────────
  //  CUENCA
  // ──────────────────────────────────────────

  {
    id: 11,
    nombre: "Skate Park Parque de la Madre",
    ciudad: "Cuenca",
    tipo: "parque",
    dificultad: "principiante",
    lat: -2.8974,
    lng: -79.0045,
    descripcion: "Skate park municipal ubicado en el Parque de la Madre, en el corazón de Cuenca. Instalaciones bien mantenidas con rampas para todos los niveles. La altitud de Cuenca (2550 msnm) hace que el esfuerzo físico sea mayor.",
    horario: "Lunes a Domingo: 08:00 – 18:00",
    // FOTOS: agrega las imágenes en assets/img/spots/parque_madre/
    fotos: [
      "https://picsum.photos/seed/cuenca1/800/500",
      "https://picsum.photos/seed/cuenca2/800/500"
    ]
  },

  {
    id: 12,
    nombre: "Spot Street Calle Larga",
    ciudad: "Cuenca",
    tipo: "street",
    dificultad: "intermedio",
    lat: -2.9001,
    lng: -79.0089,
    descripcion: "La famosa Calle Larga de Cuenca ofrece bordillos, escaleras coloniales y plazoletas con adoquín. Ideal para street riding con un fondo arquitectónico único. Zona turística — mejor practicar en horarios de menor afluencia.",
    horario: "Sin horario fijo – mejor al amanecer",
    // FOTOS: agrega las imágenes en assets/img/spots/calle_larga/
    fotos: [
      "https://picsum.photos/seed/callelarga1/800/500",
      "https://picsum.photos/seed/callelarga2/800/500"
    ]
  }

];

// ============================================================
//  CIUDADES DISPONIBLES EN EL SELECTOR
//  ============================================================
//
//  CÓMO AGREGAR UNA CIUDAD NUEVA:
//  1. Agrega un objeto al array con nombre, lat y lng del centro
//  2. Crea los spots correspondientes arriba con ciudad: "NombreCiudad"
//     (el nombre debe coincidir exactamente, respetando tildes y mayúsculas)
//
//  lat/lng: coordenadas del centro de la ciudad para centrar el mapa
//  zoom: nivel de zoom inicial (12 = ciudad, 13 = más detalle)
//
// ============================================================

const CIUDADES = [
  { nombre: "Quito",      lat: -0.2295,  lng: -78.5243, zoom: 12 },
  { nombre: "Guayaquil",  lat: -2.1962,  lng: -79.8862, zoom: 13 },
  { nombre: "Cuenca",     lat: -2.8974,  lng: -79.0045, zoom: 14 },
  // Para agregar Ambato:
  // { nombre: "Ambato", lat: -1.2543, lng: -78.6228, zoom: 13 },
  // Para agregar Manta:
  // { nombre: "Manta",  lat: -0.9677, lng: -80.7089, zoom: 13 },
];

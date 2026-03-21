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
    nombre: "Skate Park La Carolina (Gonzalo Burgos)",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.188501,
    lng: -78.483476,
    descripcion: "Uno de los skate parks más grandes de Quito, ubicado dentro del Parque La Carolina. Cuenta con rampas,zona de street, dirt jump. Muy concurrido los fines de semana, lleva casco",
    horario: "Lunes a Domingo: todo el día",

    // FOTOS: agrega las imágenes en assets/img/spots/carolina/
    // Ejemplo: "assets/img/spots/carolina/carolina_1.jpg"
    fotos: [
      "https://dcbmxstree-arch.github.io/bmx.593/assets/img/spots/carolina/carolina1.jpg",
      "assets/img/spots/carolina/carolina1.jpg",
      "https://picsum.photos/seed/carolina1/800/500",
      "https://picsum.photos/seed/carolina2/800/500",
      "https://picsum.photos/seed/carolina3/800/500"
    ]
  },

  {
   id: 2,
    nombre: "Skate Park El Calzado",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "principiante",
    lat: -0.252859,
    lng: -78.526852,
    descripcion: "Pequeño pero bien mantenido, ideal para principiantes. Está en el Parque El Calzado, al sur de Quito. Rampas bruscas y ambiente tranquilo entre semana.",
    horario: "Lunes a Domingo: todo el dia",
   
    // FOTOS: agrega las imágenes en assets/img/spots/ejido/
    fotos: [
      "https://picsum.photos/seed/ejido1/800/500",
      "https://picsum.photos/seed/ejido2/800/500"
    ]
  },

  {
    id: 3,
    nombre: "Skate Park Turubamba",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.277620,
    lng: -78.542002,
    descripcion: "Parque urbano, uno de los mejores del sur de la capital. Punto de encuentro de bikers de la ciudad, sube el nivel de la escena Quiteña, trae casco.",
    horario: "Sin horario fijo – mejor tarde/noche, lleno fin de semana",

    // FOTOS: agrega las imágenes en assets/img/spots/inaquito/
    fotos: [
      "https://dcbmxstree-arch.github.io/bmx.593/assets/img/spots/turubamba/turubamba1.jpg",
      "https://picsum.photos/seed/inaquito1/800/500",
      "https://picsum.photos/seed/inaquito2/800/500",
      "https://picsum.photos/seed/inaquito3/800/500"
    ]
  },

  {
    id: 4,
    nombre: "Skate Park Factory",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.261358,
    lng: -78.523389,
    descripcion: "Contruido dentro del parque de las diversidades (antiguo Factory), si prácticas street es una opción ideal para mejorar tu nivel.",
    horario: "de lunes a domingo: todo el día",
    // FOTOS: agrega las imágenes en assets/img/spots/guamani/
    fotos: [
      "https://picsum.photos/seed/guamani1/800/500",
      "https://picsum.photos/seed/guamani2/800/500"
    ]
  },

  {
    id: 5,
    nombre: "Skate Park Cumanda",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.229255,
    lng: -78.511027,
    descripcion: "Pequeño skate park de la ciudad de Quito, rampas metálicas y sección reducida de street, buscas algo nuevo en la ciudad? este es el lugar.",
    horario: "lunes a domingo: todo el dia",

    // FOTOS: agrega las imágenes en assets/img/spots/quitumbe/
    fotos: [
      "https://picsum.photos/seed/quitumbe1/800/500",
      "https://picsum.photos/seed/quitumbe2/800/500",
      "https://picsum.photos/seed/quitumbe3/800/500"
    ]
  },

  {
    id: 6,
    nombre: "Skate Park Surus",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "principiante",
    lat: -0.245237,
    lng: -78.527193,
    descripcion: "Al sur del cielo, street con lineas sólidas ideales para mejorar tu nivel con trucos básicos y filos de poca altura.",
    horario: "Sin horario fijo – todo el dia",
    // FOTOS: agrega las imágenes en assets/img/spots/floresta/
    fotos: [
      "https://picsum.photos/seed/floresta1/800/500",
      "https://picsum.photos/seed/floresta2/800/500"
    ]
  },

  {
    id: 7,
    nombre: "Dirt Jumps Fundeporte",
    ciudad: "Quito",
    tipo: "dirt",
    dificultad: "intermedio",
    lat: -0.287618,
    lng: -78.553847,
    descripcion: "De la mano de Hermandad Bmx uno de los escenarios con más nivel de la ciudad, saltos grandes y rapidos, tienes la técnica para mejorar tu nivel en el vertigo?.",
    horario: "todos los dias: trae casco (obligatorio) y protecciones",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },

 {
    id: 8,
    nombre: "Bulevar 24 de Mayo",
    ciudad: "Quito",
    tipo: "street",
    dificultad: "principiante",
    lat: -0.223316,
    lng: -78.516246,
    descripcion: "En una de las zonas más emblematicas y controversiales de la capital te da la bienvenida este espot para mejorar tus combos (ten cuidado de la delincuencia)",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },
 {
    id: 9,
    nombre: "Ciudadela Ibarra City",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "principiante",
    lat: -0.296776,
    lng: -78.561990,
    descripcion: "Al sur de la capital, pequeño skate park que pondra a prueba tus habilidades",

    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },
 {
    id: 10,
    nombre: "Pista de patinaje Ajavi",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "principiante",
    lat: -0.261179,
    lng: -78.540534,
    descripcion: "De camino a el skate park de turubamba? pasa por este pequeño spot y disfruta el camino",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },
 {
    id: 11,
    nombre: "Skate park mini El Condado",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "principiante",
    lat: -0.105967,
    lng: -78.508437,
    descripcion: "Al norte de la ciudad, este mini skate park te da la bienvenida",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },
 {
   id: 12,
    nombre: "Skate park mini Carcelen",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.089160,
    lng: -78.470446,
    descripcion: "Al norte de la ciudad y con un nivel muy alto, uno de los skate parks mas emblematicos de la capital",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },
 {
   id: 13,
    nombre: "Skate park Amagasi",
    ciudad: "Quito",
    tipo: "street",
    dificultad: "intermedio",
    lat: -0.137714,
    lng: -78.456754,
    descripcion: "Street? street, filos para perfeccionar tus grinds e improvisar nuevas lineas",
    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },

{
  id: 14,
    nombre: "Skate park el hueco",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.327746,
    lng: -78.443594,
    descripcion: "En el Valle de los chillos, un skate park con alto nivel te espera para tus mejores aereos",

    // FOTOS: agrega las imágenes en assets/img/spots/pomasqui/
    fotos: [
      "https://picsum.photos/seed/pomasqui1/800/500",
      "https://picsum.photos/seed/pomasqui2/800/500"
    ]
  },
{
  id: 15,
    nombre: "Spot Indoor SKATE PARK",
    ciudad: "Quito",
    tipo: "parque",
    dificultad: "intermedio",
    lat: -0.218641,
    lng: -78.445705,
    descripcion: "En Cumbaya, uno de los pocos skate parks cubiertos del pais, woodward? esta es tu oportunidad, consulta sus precios",

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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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

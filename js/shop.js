// ============================================================
//  BMX.593 — Shop — Base de datos
//  ============================================================
//
//  CÓMO ACTUALIZAR PRODUCTOS:
//  - imagen: ruta a assets/img/shop/ o URL externa
//  - disponible: true = activo, false = "Próximamente"
//  - whatsapp: número sin + ni espacios (ej: 593987654321)
//  - instagram: usuario sin @ (ej: bmx593)
//
//  CÓMO ACTUALIZAR EVENTOS:
//  - fecha: formato "YYYY-MM-DD"
//  - cuposTotal y cuposDisponibles: números enteros
//  - precio: número en dólares (0 = gratis)
//  - estado: "proximo" | "pasado" | "agotado"
// ============================================================

const SHOP_CONFIG = {
  whatsapp: "593999999999",       // ← Cambia al número real
  instagram: "bmx593",            // ← Cambia al usuario real
  moneda: "USD",
};

// ══════════════════════════════════════════════════════════════
//  PRODUCTOS — MERCHANDISE
// ══════════════════════════════════════════════════════════════

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Camiseta BMX.593 Classic",
    categoria: "ropa",
    descripcion: "Camiseta de algodón 100% con el logo BMX.593. Corte unisex, disponible en tallas S al XL.",
    precio: 25,
    disponible: false,
    colores: ["Negro", "Blanco", "Rojo"],
    tallas: ["S", "M", "L", "XL"],
    imagen: "assets/img/shop/camiseta-classic.jpg",
    badge: "Próximamente",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Hoodie BMX.593",
    categoria: "ropa",
    descripcion: "Hoodie de algodón pesado con diseño bordado. Ideal para sesiones nocturnas.",
    precio: 45,
    disponible: false,
    colores: ["Negro", "Gris"],
    tallas: ["S", "M", "L", "XL"],
    imagen: "assets/img/shop/hoodie.jpg",
    badge: "Próximamente",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Sticker Pack BMX.593",
    categoria: "accesorios",
    descripcion: "Pack de 6 stickers con diseños originales BMX.593. Vinilo resistente al agua y al sol.",
    precio: 5,
    disponible: false,
    colores: [],
    tallas: [],
    imagen: "assets/img/shop/stickers.jpg",
    badge: "Próximamente",
    destacado: false,
  },
  {
    id: 4,
    nombre: "Gorra Snapback BMX.593",
    categoria: "accesorios",
    descripcion: "Gorra snapback talla única con parche bordado. Ajuste trasero clásico.",
    precio: 20,
    disponible: false,
    colores: ["Negro", "Negro/Rojo"],
    tallas: ["Talla única"],
    imagen: "assets/img/shop/gorra.jpg",
    badge: "Próximamente",
    destacado: false,
  },
  {
    id: 5,
    nombre: "Camiseta BMX.593 Street Edition",
    categoria: "ropa",
    descripcion: "Edición limitada con gráfico completo en espalda. Serigrafía de alta calidad.",
    precio: 30,
    disponible: false,
    colores: ["Negro"],
    tallas: ["S", "M", "L", "XL"],
    imagen: "assets/img/shop/camiseta-street.jpg",
    badge: "Edición Limitada",
    destacado: true,
  },
  {
    id: 6,
    nombre: "Grip Tape BMX.593",
    categoria: "accesorios",
    descripcion: "Grip tape con diseño exclusivo BMX.593. Textura de alta adherencia para manubrios.",
    precio: 8,
    disponible: false,
    colores: ["Negro", "Rojo"],
    tallas: [],
    imagen: "assets/img/shop/grips.jpg",
    badge: "Próximamente",
    destacado: false,
  },
];


// ══════════════════════════════════════════════════════════════
//  EVENTOS Y TALLERES
// ══════════════════════════════════════════════════════════════

const EVENTOS = [
  {
    id: 1,
    nombre: "Clínica de Bunny Hop — Nivel principiante",
    tipo: "taller",
    fecha: "2025-04-15",
    hora: "10:00",
    lugar: "Skate Park La Carolina",
    ciudad: "Quito",
    descripcion: "Taller intensivo de 3 horas enfocado en dominar el bunny hop desde cero. Cupo limitado para garantizar atención personalizada. Incluye análisis de video en tiempo real.",
    precio: 15,
    cuposTotal: 20,
    cuposDisponibles: 14,
    estado: "proximo",
    incluye: ["Análisis de video", "Material técnico impreso", "Acceso al Street Lab digital"],
    requisitos: ["Bici BMX propia", "Casco obligatorio", "Nivel principiante a intermedio"],
    instructor: "BMX.593 Team",
    imagen: "assets/img/shop/taller-bunnyhop.jpg",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Street Session Abierta — BMX.593",
    tipo: "sesion",
    fecha: "2025-04-05",
    hora: "14:00",
    lugar: "Spot Iñaquito",
    ciudad: "Quito",
    descripcion: "Sesión abierta de street riding con el equipo BMX.593. Todos los niveles bienvenidos. Documentamos la sesión para el canal.",
    precio: 0,
    cuposTotal: 30,
    cuposDisponibles: 22,
    estado: "proximo",
    incluye: ["Sesión documentada en video", "Feedback del equipo", "Acceso a la comunidad"],
    requisitos: ["Bici BMX propia", "Casco obligatorio"],
    instructor: "BMX.593 Team",
    imagen: "assets/img/shop/sesion-street.jpg",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Taller HardWork BMX — Entrenamiento físico",
    tipo: "taller",
    fecha: "2025-05-03",
    hora: "09:00",
    lugar: "Polideportivo norte",
    ciudad: "Quito",
    descripcion: "Taller práctico basado en el módulo Street Lab. Aprende los ejercicios de preparación física específicos para BMX con supervisión directa. Ideal para riders que quieren mejorar su nivel técnico.",
    precio: 20,
    cuposTotal: 15,
    cuposDisponibles: 15,
    estado: "proximo",
    incluye: ["Plan de entrenamiento impreso 30 días", "Supervisión técnica", "Acceso premium Street Lab"],
    requisitos: ["Ropa deportiva", "Hidratación", "Ganas de sudar"],
    instructor: "BMX.593 Team",
    imagen: "assets/img/shop/taller-fitness.jpg",
    destacado: false,
  },
  {
    id: 4,
    nombre: "Primera Street Session BMX.593",
    tipo: "sesion",
    fecha: "2025-01-20",
    hora: "15:00",
    lugar: "Skate Park La Carolina",
    ciudad: "Quito",
    descripcion: "La primera sesión oficial documentada del equipo BMX.593. 18 riders, 4 horas de riding y el inicio de la comunidad.",
    precio: 0,
    cuposTotal: 25,
    cuposDisponibles: 0,
    estado: "pasado",
    incluye: [],
    requisitos: [],
    instructor: "BMX.593 Team",
    imagen: "assets/img/shop/sesion-primera.jpg",
    destacado: false,
  },
];

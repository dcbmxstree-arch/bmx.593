// ============================================================
//  BMX.593 — Lógica del módulo Spots
//  ============================================================
//
//  Este archivo NO necesita editarse para agregar spots o ciudades.
//  Todos los datos se editan en: js/datos-spots.js
//
//  FLUJO:
//  - Al cargar → todos los spots de Quito aparecen en el mapa
//  - Paso 1 → usuario elige ciudad → mapa muestra todos los spots de esa ciudad
//  - Paso 2 → usuario elige tipo → mapa filtra por tipo
//  - Paso 3 → lista de spots → clic → detalle con fotos
//  - Popup en el mapa → nombre del spot → clic → Google Maps (SIEMPRE funciona)
//
// ============================================================

// ── Estado global ────────────────────────────────────────────
let mapa;
let marcadores      = [];   // lista de { spot, marker }
let ciudadActiva    = "Quito";
let tipoActivo      = null;
let spotActivo      = null;
let marcadorUsuario = null;

const COLORES_TIPO = { parque: "#e63946", street: "#f4a261", dirt: "#2ec4b6" };
const ICONOS_TIPO  = { parque: "🏟️", street: "🏙️", dirt: "🌿" };
const LABELS_DIF   = {
  principiante: { color: "#2ec4b6", label: "Principiante" },
  intermedio:   { color: "#f4a261", label: "Intermedio"   },
  avanzado:     { color: "#e63946", label: "Avanzado"     }
};

// ── Arrancar al cargar la página ─────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initMapa();
  initSelectorCiudad();
  initBtnUbicacion();
  initPanelMovil();

  // Mostrar todos los spots de Quito al cargar
  // sin necesidad de que el usuario seleccione nada
  seleccionarCiudad("Quito");
});

// ════════════════════════════════════════════════════════════
//  MAPA
// ════════════════════════════════════════════════════════════

function initMapa() {
  mapa = L.map("mapa", {
    center: [-0.2295, -78.5243],
    zoom: 12,
    zoomControl: false
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(mapa);

  L.control.zoom({ position: "topright" }).addTo(mapa);
}

// ── Icono SVG ────────────────────────────────────────────────
function crearIcono(tipo, activo = false) {
  const color = COLORES_TIPO[tipo] || "#e63946";
  const size  = activo ? 44 : 34;
  const anc   = activo ? 54 : 42;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${anc}" viewBox="0 0 36 44">
      <defs><filter id="sh${activo}">
        <feDropShadow dx="0" dy="2" stdDeviation="${activo ? 4 : 2}" flood-color="rgba(0,0,0,0.55)"/>
      </filter></defs>
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 26 18 26S36 31.5 36 18C36 8.06 27.94 0 18 0z"
            fill="${color}" filter="url(#sh${activo})"
            stroke="${activo ? '#fff' : 'none'}" stroke-width="${activo ? 2.5 : 0}"/>
      <circle cx="18" cy="17" r="9" fill="rgba(0,0,0,0.28)"/>
      <text x="18" y="22" text-anchor="middle" font-size="12" fill="white">🚲</text>
    </svg>`;
  return L.divIcon({
    html: svg, className: "icono-spot",
    iconSize:    [size, anc],
    iconAnchor:  [size / 2, anc],
    popupAnchor: [0, -(anc + 4)]
  });
}

// ── Popup simple: nombre + hint ──────────────────────────────
// El onclick usa las coordenadas directamente en el HTML
// así funciona para CUALQUIER marcador sin depender de listeners
function construirPopupSimple(spot) {
  const color = COLORES_TIPO[spot.tipo] || "#e63946";
  return `
    <div class="popup-simple-inner">
      <div class="popup-simple-tipo" style="background:${color}">
        ${ICONOS_TIPO[spot.tipo]} ${spot.tipo.toUpperCase()}
      </div>
      <button class="popup-nombre-link"
        onclick="abrirEnGoogleMaps(${spot.lat}, ${spot.lng}, '${spot.nombre.replace(/'/g,"\\'")}')">
        ${spot.nombre}
      </button>
      <p class="popup-simple-hint">
        <i class="fa-solid fa-diamond-turn-right"></i> Toca para ir con Google Maps
      </p>
    </div>`;
}

// ── Abrir Google Maps ────────────────────────────────────────
function abrirEnGoogleMaps(lat, lng, nombre) {
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(nombre)}`;
  window.open(url, "_blank");
}

// ── Crear y registrar todos los marcadores de una vez ────────
// Se crean al inicio y nunca se destruyen — solo se muestran u ocultan
function crearTodosMarcadores() {
  // Limpiar marcadores anteriores si los hay
  marcadores.forEach(({ marker }) => mapa.removeLayer(marker));
  marcadores = [];

  SPOTS.forEach(spot => {
    const marker = L.marker([spot.lat, spot.lng], {
      icon:  crearIcono(spot.tipo, false),
      title: spot.nombre
    });

    // Popup con onclick inline — funciona siempre sin listeners externos
    marker.bindPopup(construirPopupSimple(spot), {
      maxWidth: 220,
      className: "popup-bmx popup-simple"
    });

    // Guardar referencia pero NO agregar al mapa todavía
    marcadores.push({ spot, marker });
  });
}

// ── Mostrar/ocultar marcadores según ciudad y tipo ───────────
function actualizarMarcadores() {
  marcadores.forEach(({ spot, marker }) => {
    const coincideCiudad = spot.ciudad === ciudadActiva;
    const coincideTipo   = !tipoActivo || spot.tipo === tipoActivo;
    const mostrar        = coincideCiudad && coincideTipo;

    if (mostrar && !mapa.hasLayer(marker)) {
      marker.addTo(mapa);
    } else if (!mostrar && mapa.hasLayer(marker)) {
      mapa.removeLayer(marker);
    }
  });
}

// ── Resaltar marcador activo ─────────────────────────────────
function resaltarMarcador(spotId) {
  marcadores.forEach(({ spot, marker }) => {
    const esActivo = spot.id === spotId;
    marker.setIcon(crearIcono(spot.tipo, esActivo));
    if (esActivo) {
      mapa.setView([spot.lat, spot.lng], 15, { animate: true });
      marker.openPopup();
    }
  });
}

// ════════════════════════════════════════════════════════════
//  PASO 1 — SELECTOR DE CIUDAD
// ════════════════════════════════════════════════════════════

function initSelectorCiudad() {
  const select = document.getElementById("selector-ciudad");
  if (!select) return;

  CIUDADES.forEach(c => {
    const opt = document.createElement("option");
    opt.value       = c.nombre;
    opt.textContent = c.nombre;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    seleccionarCiudad(select.value);
  });
}

function seleccionarCiudad(nombreCiudad) {
  ciudadActiva = nombreCiudad;
  tipoActivo   = null;
  spotActivo   = null;

  // Centrar mapa en la ciudad
  const ciudad = CIUDADES.find(c => c.nombre === nombreCiudad);
  if (ciudad) {
    mapa.setView([ciudad.lat, ciudad.lng], ciudad.zoom, { animate: true });
  }

  // Actualizar selector visual
  const select = document.getElementById("selector-ciudad");
  if (select) select.value = nombreCiudad;

  // Crear todos los marcadores la primera vez
  // o actualizar visibilidad si ya existen
  if (marcadores.length === 0) {
    crearTodosMarcadores();
  }

  // Mostrar todos los spots de la ciudad (sin filtro de tipo todavía)
  actualizarMarcadores();

  // Actualizar contadores de tipo
  actualizarContadoresTipo(nombreCiudad);

  // Mostrar paso 2, ocultar paso 3 y detalle
  mostrarPaso(2);
  ocultarPaso(3);
  ocultarDetalle();
  limpiarTipos();
  limpiarLista();
}

// ════════════════════════════════════════════════════════════
//  PASO 2 — SELECTOR DE TIPO
// ════════════════════════════════════════════════════════════

function initTipos() {
  document.querySelectorAll(".btn-tipo").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-tipo").forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      seleccionarTipo(btn.dataset.tipo);
    });
  });
}

function seleccionarTipo(tipo) {
  tipoActivo = tipo;
  spotActivo = null;

  ocultarDetalle();
  actualizarMarcadores();
  renderLista();
  mostrarPaso(3);
}

function limpiarTipos() {
  document.querySelectorAll(".btn-tipo").forEach(b => b.classList.remove("activo"));
}

function actualizarContadoresTipo(ciudad) {
  ["parque", "street", "dirt"].forEach(tipo => {
    const n  = SPOTS.filter(s => s.ciudad === ciudad && s.tipo === tipo).length;
    const el = document.getElementById("count-" + tipo);
    if (el) el.textContent = n || "0";
  });
}

// ════════════════════════════════════════════════════════════
//  PASO 3 — LISTA DE SPOTS
// ════════════════════════════════════════════════════════════

function renderLista() {
  const lista = document.getElementById("lista-spots");
  if (!lista) return;

  const spots = SPOTS.filter(
    s => s.ciudad === ciudadActiva && s.tipo === tipoActivo
  );

  if (spots.length === 0) {
    lista.innerHTML = `
      <div class="lista-vacia">
        <i class="fa-solid fa-bicycle"></i>
        <p>No hay spots de este tipo en ${ciudadActiva} aún.</p>
        <span>¡Sé el primero en agregar uno!</span>
      </div>`;
    return;
  }

  lista.innerHTML = spots.map(spot => {
    const dif   = LABELS_DIF[spot.dificultad] || { color: "#999", label: spot.dificultad };
    const color = COLORES_TIPO[spot.tipo];
    return `
      <button class="spot-item" data-id="${spot.id}" onclick="seleccionarSpot(${spot.id})">
        <div class="spot-item-color" style="background:${color}"></div>
        <div class="spot-item-info">
          <span class="spot-item-nombre">${spot.nombre}</span>
          <span class="spot-item-dif" style="color:${dif.color}">
            <i class="fa-solid fa-signal"></i> ${dif.label}
          </span>
        </div>
        <i class="fa-solid fa-chevron-right spot-item-arrow"></i>
      </button>`;
  }).join("");
}

function limpiarLista() {
  const lista = document.getElementById("lista-spots");
  if (lista) lista.innerHTML = "";
}

// ════════════════════════════════════════════════════════════
//  DETALLE DEL SPOT
// ════════════════════════════════════════════════════════════

function seleccionarSpot(id) {
  spotActivo = id;
  const spot = SPOTS.find(s => s.id === id);
  if (!spot) return;

  // Resaltar en la lista
  document.querySelectorAll(".spot-item").forEach(item => {
    item.classList.toggle("activo", parseInt(item.dataset.id) === id);
  });

  // Resaltar marcador en el mapa
  resaltarMarcador(id);

  // Renderizar detalle
  renderDetalle(spot);

  // En móvil: abrir el panel para que el usuario vea el detalle con fotos
  if (window.innerWidth <= 768) {
    abrirPanelMovil();
  }
}

// ── Estado del carrusel ──────────────────────────────────────
let carruselFotos  = [];   // array de URLs del spot activo
let carruselIndice = 0;    // índice de la foto actual

function renderDetalle(spot) {
  const contenedor = document.getElementById("spot-detalle");
  if (!contenedor) return;

  const dif   = LABELS_DIF[spot.dificultad] || { color: "#999", label: spot.dificultad };
  const color = COLORES_TIPO[spot.tipo] || "#e63946";

  // Preparar array de fotos para el carrusel
  // Si no hay fotos → usar placeholder
  carruselFotos = (spot.fotos && spot.fotos.length > 0)
    ? spot.fotos
    : [`https://picsum.photos/seed/bmxspot${spot.id}/800/500`];

  // Primera foto para mostrar en el detalle
  const primeraFoto = carruselFotos[0];
  const totalFotos  = carruselFotos.length;

  // Indicador de cuántas fotos hay
  const indicadorHTML = totalFotos > 1
    ? `<div class="detalle-foto-contador">
         <i class="fa-solid fa-images"></i> ${totalFotos} fotos — toca para ver todas
       </div>`
    : `<div class="detalle-foto-contador">
         <i class="fa-solid fa-image"></i> Toca para ampliar
       </div>`;

  contenedor.innerHTML = `
    <div class="detalle-header">
      <button class="detalle-volver" onclick="ocultarDetalle()" aria-label="Volver a la lista">
        <i class="fa-solid fa-arrow-left"></i> Volver
      </button>
      <span class="detalle-tipo-badge" style="background:${color}">
        ${ICONOS_TIPO[spot.tipo]} ${spot.tipo.toUpperCase()}
      </span>
      <h2 class="detalle-nombre">${spot.nombre}</h2>
      <div class="detalle-meta">
        <span style="color:${dif.color}">
          <i class="fa-solid fa-signal"></i> ${dif.label}
        </span>
        <span><i class="fa-regular fa-clock"></i> ${spot.horario || "Sin horario fijo"}</span>
      </div>
    </div>

    <div class="detalle-foto-unica" onclick="abrirCarrusel(0)">
      <img src="${primeraFoto}" alt="${spot.nombre}"
           onerror="this.src='https://picsum.photos/seed/bmx${spot.id}/800/500'">
      <div class="detalle-foto-unica-overlay">
        <i class="fa-solid fa-expand"></i>
      </div>
      ${indicadorHTML}
    </div>

    <div class="detalle-body">
      <p class="detalle-descripcion">${spot.descripcion}</p>
      <div class="detalle-acciones">
        <button class="detalle-btn-maps"
          onclick="abrirEnGoogleMaps(${spot.lat}, ${spot.lng}, '${spot.nombre.replace(/'/g,"\\'")}')">
          <i class="fa-solid fa-diamond-turn-right"></i> Cómo llegar
        </button>
        <button class="detalle-btn-vermapa" onclick="cerrarPanelMovil()">
          <i class="fa-solid fa-map"></i> Ver en mapa
        </button>
      </div>
    </div>`;

  contenedor.classList.add("visible");
}

// ── Carrusel en lightbox ─────────────────────────────────────
function abrirCarrusel(indice) {
  if (carruselFotos.length === 0) return;
  carruselIndice = indice;

  const lb = document.getElementById("lightbox-foto");
  if (!lb) return;

  lb.classList.add("activo");
  document.body.style.overflow = "hidden";
  renderCarrusel();
}

function renderCarrusel() {
  const total = carruselFotos.length;
  const src   = carruselFotos[carruselIndice];

  // Imagen
  const img = document.getElementById("lbf-img");
  if (img) {
    img.style.opacity = "0";
    img.src = src;
    img.onload = () => { img.style.opacity = "1"; };
    img.onerror = () => {
      img.src = `https://picsum.photos/seed/bmxcarrusel${carruselIndice}/800/500`;
      img.style.opacity = "1";
    };
  }

  // Puntos indicadores
  const puntosEl = document.getElementById("lbf-puntos");
  if (puntosEl) {
    puntosEl.innerHTML = carruselFotos.map((_, i) =>
      `<span class="lbf-punto ${i === carruselIndice ? 'activo' : ''}"
             onclick="irFoto(${i})"></span>`
    ).join("");
  }

  // Contador numérico
  const numEl = document.getElementById("lbf-num");
  if (numEl) numEl.textContent = `${carruselIndice + 1} / ${total}`;

  // Mostrar/ocultar flechas según si hay más de una foto
  const prev = document.getElementById("lbf-prev");
  const next = document.getElementById("lbf-next");
  if (prev) prev.style.display = total > 1 ? "flex" : "none";
  if (next) next.style.display = total > 1 ? "flex" : "none";
}

function irFoto(indice) {
  carruselIndice = indice;
  renderCarrusel();
}

function fotoAnterior() {
  carruselIndice = (carruselIndice - 1 + carruselFotos.length) % carruselFotos.length;
  renderCarrusel();
}

function fotoSiguiente() {
  carruselIndice = (carruselIndice + 1) % carruselFotos.length;
  renderCarrusel();
}

function cerrarCarrusel() {
  const lb = document.getElementById("lightbox-foto");
  if (lb) lb.classList.remove("activo");
  document.body.style.overflow = "";
}

// Mantener compatibilidad con llamadas antiguas a abrirFoto
function abrirFoto(src, titulo) {
  const indice = carruselFotos.indexOf(src);
  abrirCarrusel(indice >= 0 ? indice : 0);
}

function cerrarFoto() { cerrarCarrusel(); }

// ── Ocultar detalle del spot ─────────────────────────────────
function ocultarDetalle() {
  const contenedor = document.getElementById("spot-detalle");
  if (contenedor) contenedor.classList.remove("visible");

  document.querySelectorAll(".spot-item").forEach(i => i.classList.remove("activo"));

  // Quitar resaltado de marcadores
  marcadores.forEach(({ spot, marker }) => {
    if (mapa.hasLayer(marker)) marker.setIcon(crearIcono(spot.tipo, false));
  });
  mapa.closePopup();
  spotActivo = null;
}

// ════════════════════════════════════════════════════════════
//  HELPERS DE UI
// ════════════════════════════════════════════════════════════

function mostrarPaso(num) {
  const el = document.getElementById(`paso-${num}`);
  if (el) el.classList.add("visible");
  if (num === 2) initTipos();
}

function ocultarPaso(num) {
  const el = document.getElementById(`paso-${num}`);
  if (el) el.classList.remove("visible");
}

// ── Botón Mi Ubicación ───────────────────────────────────────
function initBtnUbicacion() {
  const btn = document.getElementById("btnMiUbicacion");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        if (marcadorUsuario) mapa.removeLayer(marcadorUsuario);

        const iconoUser = L.divIcon({
          html: `<div class="icono-usuario">
                   <div class="icono-usuario-punto"></div>
                   <div class="icono-usuario-pulso"></div>
                 </div>`,
          className: "", iconSize: [24, 24], iconAnchor: [12, 12]
        });

        marcadorUsuario = L.marker([coords.latitude, coords.longitude], {
          icon: iconoUser, zIndexOffset: 1000
        }).addTo(mapa)
          .bindPopup('<div style="font-family:sans-serif;font-size:0.85rem;color:#111;font-weight:700">📍 Tu ubicación</div>');

        mapa.setView([coords.latitude, coords.longitude], 14, { animate: true });
        btn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i>';
        btn.classList.add("ubicacion-activa");
      },
      () => {
        btn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i>';
        alert("No se pudo obtener tu ubicación. Verifica los permisos del navegador.");
      },
      { timeout: 10000 }
    );
  });
}

// ── Panel móvil ──────────────────────────────────────────────
function initPanelMovil() {
  const btnAbrir  = document.getElementById("btnAbrirPanel");
  const btnCerrar = document.getElementById("panelCerrar");
  const overlay   = document.getElementById("panelOverlay");

  if (btnAbrir)  btnAbrir.addEventListener("click",  abrirPanelMovil);
  if (btnCerrar) btnCerrar.addEventListener("click",  cerrarPanelMovil);
  if (overlay)   overlay.addEventListener("click",    cerrarPanelMovil);

  // Teclado: ESC cierra, flechas navegan el carrusel
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox-foto");
    const lbAbierto = lb && lb.classList.contains("activo");

    if (e.key === "Escape") {
      if (lbAbierto) cerrarCarrusel();
      else cerrarPanelMovil();
    }
    if (lbAbierto && e.key === "ArrowRight") fotoSiguiente();
    if (lbAbierto && e.key === "ArrowLeft")  fotoAnterior();
  });

  // Swipe en móvil para el carrusel
  let touchStartX = 0;
  const lbEl = document.getElementById("lightbox-foto");
  if (lbEl) {
    lbEl.addEventListener("touchstart", e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    lbEl.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? fotoSiguiente() : fotoAnterior();
      }
    }, { passive: true });
  }
}

function abrirPanelMovil() {
  document.getElementById("spotsPanel")?.classList.add("panel-abierto");
  document.getElementById("panelOverlay")?.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function cerrarPanelMovil() {
  document.getElementById("spotsPanel")?.classList.remove("panel-abierto");
  document.getElementById("panelOverlay")?.classList.remove("activo");
  document.body.style.overflow = "";
}

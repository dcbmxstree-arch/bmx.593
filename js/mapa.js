// ============================================================
//  BMX.593 — Lógica del módulo Spots
//  ============================================================
//
//  Este archivo NO necesita editarse para agregar spots o ciudades.
//  Todos los datos se editan en: js/datos-spots.js
//
//  FLUJO DE 3 PASOS:
//  Paso 1 → El usuario elige una ciudad
//  Paso 2 → El usuario elige un tipo (Parque / Street / Dirt)
//  Paso 3 → Se muestra la lista de spots disponibles
//           Al hacer clic en un spot → se abre el detalle
//           y se señala el marcador en el mapa
//
//  MAPA:
//  - Inicia centrado en Quito
//  - Al elegir ciudad → hace zoom a esa ciudad
//  - Popup del marcador → solo muestra el nombre del spot
//  - Click en el popup → abre Google Maps en ese spot
//
// ============================================================

// ── Estado global ────────────────────────────────────────────
let mapa;
let marcadores      = [];   // lista de { spot, marker }
let ciudadActiva    = null;
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

  // Seleccionar Quito por defecto
  seleccionarCiudad("Quito");
});

// ════════════════════════════════════════════════════════════
//  MAPA
// ════════════════════════════════════════════════════════════

function initMapa() {
  // Centrado inicial en Quito
  mapa = L.map("mapa", {
    center: [-0.2295, -78.5243],
    zoom: 12,
    zoomControl: false
  });

  // Capa oscura CartoDB (no requiere API key)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(mapa);

  L.control.zoom({ position: "topright" }).addTo(mapa);
}

// Icono SVG personalizado para cada tipo
// activo = true → marcador más grande y con borde blanco
function crearIcono(tipo, activo = false) {
  const color = COLORES_TIPO[tipo] || "#e63946";
  const size  = activo ? 44 : 34;
  const anc   = activo ? 54 : 42;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${anc}" viewBox="0 0 36 44">
      <defs><filter id="sh">
        <feDropShadow dx="0" dy="2" stdDeviation="${activo ? 4 : 2}" flood-color="rgba(0,0,0,0.55)"/>
      </filter></defs>
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 26 18 26S36 31.5 36 18C36 8.06 27.94 0 18 0z"
            fill="${color}" filter="url(#sh)"
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

// Crear/actualizar marcadores en el mapa
// Muestra solo los spots de la ciudad y tipo seleccionados
function actualizarMarcadores() {
  // Limpiar marcadores anteriores
  marcadores.forEach(({ marker }) => mapa.removeLayer(marker));
  marcadores = [];

  if (!ciudadActiva || !tipoActivo) return;

  const spotsFiltrados = SPOTS.filter(
    s => s.ciudad === ciudadActiva && s.tipo === tipoActivo
  );

  spotsFiltrados.forEach(spot => {
    const marker = L.marker([spot.lat, spot.lng], {
      icon:  crearIcono(spot.tipo, false),
      title: spot.nombre
    });

    // Popup simplificado: solo nombre + click abre Google Maps
    marker.bindPopup(construirPopupSimple(spot), {
      maxWidth: 220,
      className: "popup-bmx popup-simple"
    });

    // Click en el popup → Google Maps (sin pedir GPS, va directo al spot)
    marker.on("popupopen", () => {
      // Pequeño delay para asegurar que el DOM del popup esté listo
      setTimeout(() => {
        const btn = document.querySelector(".popup-nombre-link");
        if (btn) {
          btn.addEventListener("click", () => {
            abrirEnGoogleMaps(spot.lat, spot.lng, spot.nombre);
          });
        }
      }, 50);
    });

    marker.addTo(mapa);
    marcadores.push({ spot, marker });
  });
}

// Popup minimalista: solo el nombre del spot como botón
function construirPopupSimple(spot) {
  const color = COLORES_TIPO[spot.tipo] || "#e63946";
  return `
    <div class="popup-simple-inner">
      <div class="popup-simple-tipo" style="background:${color}">
        ${ICONOS_TIPO[spot.tipo]} ${spot.tipo.toUpperCase()}
      </div>
      <button class="popup-nombre-link">${spot.nombre}</button>
      <p class="popup-simple-hint">
        <i class="fa-solid fa-diamond-turn-right"></i> Toca para ir con Google Maps
      </p>
    </div>`;
}

// Abrir Google Maps centrado en el spot (sin GPS, va directo al destino)
function abrirEnGoogleMaps(lat, lng, nombre) {
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(nombre)}`;
  window.open(url, "_blank");
}

// Resaltar el marcador del spot activo en el mapa
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

  // Poblar el select con las ciudades del array CIUDADES
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

  // Centrar mapa en la ciudad elegida
  const ciudad = CIUDADES.find(c => c.nombre === nombreCiudad);
  if (ciudad) {
    mapa.setView([ciudad.lat, ciudad.lng], ciudad.zoom, { animate: true });
  }

  // Actualizar selector visual
  const select = document.getElementById("selector-ciudad");
  if (select) select.value = nombreCiudad;

  // Mostrar paso 2, ocultar paso 3 y detalle
  mostrarPaso(2);
  ocultarPaso(3);
  ocultarDetalle();
  limpiarTipos();
  limpiarLista();
  actualizarMarcadores();
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
  renderLista();
  mostrarPaso(3);
  actualizarMarcadores();
}

function limpiarTipos() {
  document.querySelectorAll(".btn-tipo").forEach(b => b.classList.remove("activo"));
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

  // En móvil: cerrar panel para ver el mapa primero
  if (window.innerWidth <= 768) cerrarPanelMovil();
}

function renderDetalle(spot) {
  const contenedor = document.getElementById("spot-detalle");
  if (!contenedor) return;

  const dif   = LABELS_DIF[spot.dificultad] || { color: "#999", label: spot.dificultad };
  const color = COLORES_TIPO[spot.tipo] || "#e63946";

  // Galería de fotos
  const fotosHTML = spot.fotos && spot.fotos.length > 0
    ? `<div class="detalle-galeria">
         ${spot.fotos.map((f, i) => `
           <div class="detalle-foto ${i === 0 ? 'principal' : ''}"
                onclick="abrirFoto('${f}', '${spot.nombre.replace(/'/g,"\\'")}')">
             <img src="${f}" alt="${spot.nombre} — foto ${i + 1}"
                  onerror="this.src='https://picsum.photos/seed/bmx${spot.id}/800/500'">
             <div class="detalle-foto-overlay"><i class="fa-solid fa-expand"></i></div>
           </div>`).join("")}
       </div>`
    : `<div class="detalle-galeria">
         <div class="detalle-foto principal">
           <img src="https://picsum.photos/seed/bmxspot${spot.id}/800/500" alt="${spot.nombre}">
         </div>
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
        <span><i class="fa-regular fa-clock"></i> ${spot.horario}</span>
      </div>
    </div>

    ${fotosHTML}

    <div class="detalle-body">
      <p class="detalle-descripcion">${spot.descripcion}</p>
      <button class="detalle-btn-maps"
        onclick="abrirEnGoogleMaps(${spot.lat}, ${spot.lng}, '${spot.nombre.replace(/'/g,"\\'")}')">
        <i class="fa-solid fa-diamond-turn-right"></i> Cómo llegar con Google Maps
      </button>
    </div>`;

  // Mostrar detalle encima del panel (posición absoluta)
  contenedor.classList.add("visible");

  // En móvil: mantener el panel abierto para que el usuario vea el detalle
  if (window.innerWidth <= 768) {
    abrirPanelMovil();
  }

function ocultarDetalle() {
  const contenedor = document.getElementById("spot-detalle");
  if (contenedor) contenedor.classList.remove("visible");

  document.querySelectorAll(".spot-item").forEach(i => i.classList.remove("activo"));
  marcadores.forEach(({ spot, marker }) => marker.setIcon(crearIcono(spot.tipo, false)));
  mapa.closePopup();
  spotActivo = null;
}

// Lightbox simple para fotos del detalle
function abrirFoto(src, titulo) {
  const lb = document.getElementById("lightbox-foto");
  if (!lb) return;
  document.getElementById("lbf-img").src   = src;
  document.getElementById("lbf-titulo").textContent = titulo;
  lb.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function cerrarFoto() {
  const lb = document.getElementById("lightbox-foto");
  if (lb) lb.classList.remove("activo");
  document.body.style.overflow = "";
}

// ════════════════════════════════════════════════════════════
//  HELPERS DE UI — pasos y panel móvil
// ════════════════════════════════════════════════════════════

function mostrarPaso(num) {
  const el = document.getElementById(`paso-${num}`);
  if (el) el.classList.add("visible");
  // Inicializar listeners del paso 2 cuando aparece
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
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { cerrarPanelMovil(); cerrarFoto(); }
  });
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

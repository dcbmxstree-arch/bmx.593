// ============================================================
//  BMX.593 — Lógica del Home
//  Los videos muestran miniatura y al hacer clic se reproducen
//  dentro de la página (sin redirigir a YouTube).
// ============================================================

// ── Utilidades ───────────────────────────────────────────────
function formatFecha(str) {
  if (!str) return "";
  const d = new Date(str + "T12:00:00");
  return d.toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });
}

function formatFechaCorta(str) {
  if (!str) return "";
  const d = new Date(str + "T12:00:00");
  return d.toLocaleDateString("es-EC", { day: "numeric", month: "short" }).toUpperCase();
}

// ── SECCIÓN: VIDEOS ──────────────────────────────────────────
function renderVideos() {
  const contenedor = document.getElementById("videos-grid");
  if (!contenedor || !VIDEOS) return;

  const destacado = VIDEOS.find(v => v.destacado) || VIDEOS[0];
  const resto     = VIDEOS.filter(v => v.id !== destacado.id).slice(0, 3);

  let html = `<div class="videos-layout">`;

  // Video principal
  html += `
    <div class="video-principal">
      ${buildVideoPlayer(destacado, true)}
      <div class="video-info">
        <span class="video-fecha">${formatFecha(destacado.fecha)}</span>
        <h3 class="video-titulo">${destacado.titulo}</h3>
        <p class="video-desc">${destacado.descripcion}</p>
      </div>
    </div>`;

  // Videos secundarios
  html += `<div class="videos-secundarios">`;
  resto.forEach(v => {
    html += `
      <div class="video-card">
        ${buildVideoPlayer(v, false)}
        <div class="video-info-sm">
          <span class="video-fecha-sm">${formatFecha(v.fecha)}</span>
          <h4 class="video-titulo-sm">${v.titulo}</h4>
        </div>
      </div>`;
  });
  html += `</div></div>`;

  contenedor.innerHTML = html;
}

// ── Constructor del reproductor ───────────────────────────────
// Muestra miniatura con botón play. Al hacer clic, reemplaza
// la miniatura por el iframe con autoplay=1 (reproduce en página).
function buildVideoPlayer(v, grande) {
  const pb = grande ? '52%' : '56%';

  if (v.tipo === "youtube") {
    // YouTube provee miniaturas gratis sin API key
    // maxresdefault = 1280×720, hqdefault = fallback si no existe
    const thumbHQ  = `https://img.youtube.com/vi/${v.src}/maxresdefault.jpg`;
    const thumbFB  = `https://img.youtube.com/vi/${v.src}/hqdefault.jpg`;
    const videoId  = v.src;
    const titulo   = v.titulo.replace(/'/g, "\\'");

    return `
      <div class="video-embed" style="padding-bottom:${pb}" id="ve-${videoId}">
        <div class="video-thumb" onclick="playVideo('${videoId}', '${titulo}')">
          <img
            src="${thumbHQ}"
            alt="${v.titulo}"
            loading="lazy"
            onerror="this.src='${thumbFB}'"
          >
          <div class="video-play-btn" aria-label="Reproducir ${v.titulo}">
            <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <path class="play-bg" d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.8 0 34 0 34 0S12.2 0 7.5 1.7a8.5 8.5 0 0 0-6 6C0 12.4 0 24 0 24s0 11.6 1.7 16.3a8.5 8.5 0 0 0 6 6C12.2 48 34 48 34 48s21.8 0 26.5-1.7a8.5 8.5 0 0 0 6-6C68 35.6 68 24 68 24s0-11.6-1.5-16.3z"/>
              <path class="play-arrow" d="M45 24 27 14v20z"/>
            </svg>
          </div>
        </div>
      </div>`;
  }

  // Video local (archivo .mp4 subido a assets/video/)
  return `
    <div class="video-embed" style="padding-bottom:${pb}">
      <video controls preload="metadata" style="position:absolute;inset:0;width:100%;height:100%;border-radius:inherit">
        <source src="${v.src}" type="video/mp4">
        Tu navegador no soporta video HTML5.
      </video>
    </div>`;
}

// ── Modal de video ────────────────────────────────────────────
// Abre un modal oscuro con el video de YouTube usando
// youtube-nocookie.com que evita restricciones de embed.
function playVideo(videoId, titulo) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  const tituloEl = document.getElementById("video-modal-titulo");
  if (!modal || !iframe) return;

  // youtube-nocookie.com = menos cookies y menos restricciones de embed
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  if (tituloEl) tituloEl.textContent = titulo;

  modal.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function cerrarVideoModal() {
  const modal  = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  if (!modal || !iframe) return;
  // Detener el video limpiando el src
  iframe.src = "";
  modal.classList.remove("activo");
  document.body.style.overflow = "";
}

// ── SECCIÓN: GALERÍA DE FOTOS ────────────────────────────────
function renderFotos() {
  const contenedor = document.getElementById("fotos-grid");
  if (!contenedor || !FOTOS) return;

  let html = "";
  FOTOS.forEach((f, i) => {
    html += `
      <div class="foto-card" onclick="abrirLightbox(${i})" role="button" tabindex="0"
           aria-label="Ver foto: ${f.titulo}"
           onkeydown="if(event.key==='Enter') abrirLightbox(${i})">
        <div class="foto-img-wrap">
          <img src="${f.imagen}" alt="${f.titulo}" loading="lazy">
          <div class="foto-overlay"><i class="fa-solid fa-expand"></i></div>
        </div>
        <div class="foto-meta">
          <span class="foto-titulo">${f.titulo}</span>
          <span class="foto-autor">${f.autor}</span>
        </div>
      </div>`;
  });
  contenedor.innerHTML = html;
}

// ── Lightbox ─────────────────────────────────────────────────
let lightboxIndex = 0;

function abrirLightbox(index) {
  lightboxIndex = index;
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.add("activo");
  actualizarLightbox();
  document.body.style.overflow = "hidden";
}

function cerrarLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("activo");
  document.body.style.overflow = "";
}

function navegarLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + FOTOS.length) % FOTOS.length;
  actualizarLightbox();
}

function actualizarLightbox() {
  const f = FOTOS[lightboxIndex];
  document.getElementById("lb-img").src                    = f.imagen;
  document.getElementById("lb-img").alt                    = f.titulo;
  document.getElementById("lb-titulo").textContent         = f.titulo;
  document.getElementById("lb-autor").textContent          = f.autor;
  document.getElementById("lb-num").textContent            = `${lightboxIndex + 1} / ${FOTOS.length}`;
}

// ── SECCIÓN: NOTICIAS ────────────────────────────────────────
const COLORES_CAT = {
  competencia:     "#e63946",
  infraestructura: "#2ec4b6",
  comunidad:       "#f4a261"
};

function renderNoticias() {
  const contenedor = document.getElementById("noticias-grid");
  if (!contenedor || !NOTICIAS) return;

  let html = "";
  NOTICIAS.forEach(n => {
    const color   = COLORES_CAT[n.categoria] || "#666";
    const linkHtml = n.link
      ? `<a href="${n.link}" class="noticia-link" ${n.link !== "#" ? 'target="_blank" rel="noopener"' : ""}>
           Leer más <i class="fa-solid fa-arrow-right"></i>
         </a>`
      : "";
    html += `
      <article class="noticia-card">
        <div class="noticia-img-wrap">
          <img src="${n.imagen}" alt="${n.titulo}" loading="lazy">
          <span class="noticia-cat-badge" style="background:${color}">${n.categoria.toUpperCase()}</span>
        </div>
        <div class="noticia-body">
          <span class="noticia-fecha">${formatFecha(n.fecha)}</span>
          <h3 class="noticia-titulo">${n.titulo}</h3>
          <p class="noticia-desc">${n.descripcion}</p>
          ${linkHtml}
        </div>
      </article>`;
  });
  contenedor.innerHTML = html;
}

// ── SECCIÓN: EVENTOS ─────────────────────────────────────────
const LABELS_ESTADO = {
  "proximo":    { label: "Próximo",    color: "#2ec4b6" },
  "en-curso":   { label: "En curso",   color: "#f4a261" },
  "finalizado": { label: "Finalizado", color: "#555"    }
};

function getEstado(evento) {
  if (evento.estado !== "auto") return evento.estado;
  const hoy    = new Date();
  const inicio = new Date(evento.fecha_inicio + "T00:00:00");
  const fin    = new Date(evento.fecha_fin    + "T23:59:59");
  if (hoy < inicio) return "proximo";
  if (hoy > fin)    return "finalizado";
  return "en-curso";
}

function renderEventos() {
  const contenedor = document.getElementById("eventos-grid");
  if (!contenedor || !EVENTOS) return;

  const orden  = { "en-curso": 0, "proximo": 1, "finalizado": 2 };
  const sorted = [...EVENTOS].sort((a, b) => orden[getEstado(a)] - orden[getEstado(b)]);

  let html = "";
  sorted.forEach(e => {
    const estado     = getEstado(e);
    const cfg        = LABELS_ESTADO[estado] || LABELS_ESTADO["proximo"];
    const mismaFecha = e.fecha_inicio === e.fecha_fin;
    const fechaTexto = mismaFecha
      ? formatFecha(e.fecha_inicio)
      : `${formatFecha(e.fecha_inicio)} – ${formatFecha(e.fecha_fin)}`;

    const btnInscripcion = e.link_inscripcion && estado === "proximo"
      ? `<a href="${e.link_inscripcion}" class="evento-btn"
            ${e.link_inscripcion !== "#" ? 'target="_blank" rel="noopener"' : ""}>
           Inscribirse <i class="fa-solid fa-arrow-right"></i>
         </a>`
      : "";

    html += `
      <article class="evento-card ${estado === 'finalizado' ? 'evento-finalizado' : ''}">
        <div class="evento-img-wrap">
          <img src="${e.imagen}" alt="${e.nombre}" loading="lazy">
          <span class="evento-estado-badge" style="background:${cfg.color}">${cfg.label}</span>
          <div class="evento-fecha-badge">
            <span class="evento-fecha-dia">${formatFechaCorta(e.fecha_inicio)}</span>
          </div>
        </div>
        <div class="evento-body">
          <h3 class="evento-nombre">${e.nombre}</h3>
          <div class="evento-meta">
            <span><i class="fa-solid fa-calendar"></i> ${fechaTexto}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${e.lugar}</span>
          </div>
          <p class="evento-desc">${e.descripcion}</p>
          ${btnInscripcion}
        </div>
      </article>`;
  });
  contenedor.innerHTML = html;
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderVideos();
  renderFotos();
  renderNoticias();
  renderEventos();

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      cerrarLightbox();
      cerrarVideoModal();
    }
    if (e.key === "ArrowRight") navegarLightbox(1);
    if (e.key === "ArrowLeft")  navegarLightbox(-1);
  });

  const lb = document.getElementById("lightbox");
  if (lb) lb.addEventListener("click", e => { if (e.target === lb) cerrarLightbox(); });

  const vm = document.getElementById("video-modal");
  if (vm) vm.addEventListener("click", e => { if (e.target === vm) cerrarVideoModal(); });
});

// ============================================================
//  BMX.593 — Base de datos de Tutoriales
//  ============================================================
//
//  CÓMO AGREGAR UN TUTORIAL NUEVO:
//  1. Copia uno de los objetos de ejemplo
//  2. Cambia todos los valores
//  3. El id debe ser único — usa el número siguiente al último
//  4. Guarda el archivo y recarga la página
//
//  TIPOS VÁLIDOS:    "truco" | "mantenimiento" | "setup"
//  NIVELES VÁLIDOS:  "principiante" | "intermedio" | "avanzado"
//  ESTILOS VÁLIDOS:  "street" | "park" | "dirt" | "flatland" | "todos"
//
//  VIDEO:
//  - Usa solo el ID del video de YouTube
//  - Ejemplo: si la URL es youtube.com/watch?v=ABC123, el ID es "ABC123"
//  - Si no tienes video, deja video: ""
//
// ============================================================

const TUTORIALES = [

  // ══════════════════════════════════════════════════════════
  //  TRUCOS — PRINCIPIANTE
  // ══════════════════════════════════════════════════════════

  {
    id: 1,
    tipo: "truco",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Bunny Hop",
    descripcion: "El Bunny Hop (ollie) es un truco basico que consiste en saltar obstaculos y mientras sigues subiendo de nivel, gradas, obstaculos y bordes altos:",
      pasos: [
      "Rueda a velocidad moderada en posición neutral — rodillas ligeramente dobladas, peso equilibrado.",
      "Comprime el cuerpo hacia abajo: dobla las rodillas y baja los hombros hacia el manubrio.",
      "Jala el manubrio hacia arriba y hacia atrás con fuerza mientras extiendes las piernas.",
      "Una vez la rueda delantera sube, empuja el manubrio hacia adelante y levanta las rodillas hacia el pecho.",
      "Ambas ruedas deben estar en el aire al mismo tiempo en el punto más alto.",
      "Aterriza con ambas ruedas al mismo tiempo, absorbiendo el impacto con las piernas dobladas."
    ],
    video: "Cygbi400OJw",
    seguridad: "Usa casco siempre. Practica primero en pasto o superficie blanda para amortiguar las caídas. Comienza con alturas muy bajas (un palo en el suelo) antes de intentar obstáculos reales.",
    herramientas: []
  },

  {
    id: 2,
    tipo: "truco",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Manual",
    descripcion: "El manual es rodar en la rueda trasera sin pedalear. Es uno de los movimientos más importantes en BMX — dominar el balance del manual abre la puerta a trucos más avanzados como el nose manual y combinaciones de tricks.",
    pasos: [
      "Rueda a velocidad media y coloca los pies en posición neutral sobre los pedales.",
      "Tira del manubrio hacia atrás y desplaza el peso hacia la rueda trasera.",
      "Encuentra el punto de balance — la clave es mantener el peso exactamente sobre el eje trasero.",
      "Usa las rodillas para ajustar el balance: flexiona para bajar la rueda delantera, extiende para subirla.",
      "Mantén los brazos ligeramente doblados para hacer ajustes finos con el manubrio.",
      "Para salir del manual, simplemente deja caer la rueda delantera con control."
    ],
    video: "GkGnZGkpRxM",
    seguridad: "Practica cerca de una pared o baranda para apoyarte al inicio. Las caídas hacia atrás son las más comunes — aprende a saltar de la bici antes de intentarlo en velocidad.",
    herramientas: []
  },

  {
    id: 3,
    tipo: "truco",
    nivel: "principiante",
    estilo: "todos",
    titulo: "180°",
    descripcion: "El 180 consiste en rotar la bici media vuelta en el aire para aterrizar en dirección contraria. Es el primer truco de rotación que se aprende y la base para el 360 y otros trucos girados.",
    pasos: [
      "Domina el bunny hop antes de intentar el 180.",
      "Elige una dirección de giro (la mayoría gira en la dirección de su pie dominante).",
      "Toma velocidad y ejecuta un bunny hop con un twist del cuerpo en la dirección elegida.",
      "Gira los hombros primero — el cuerpo y la bici seguirán el movimiento.",
      "Mira hacia el punto de aterrizaje durante la rotación para controlar la distancia.",
      "Aterriza en fakie (hacia atrás) con ambas ruedas y rueda suavemente hasta detenerte o hacer un pivot para regresar."
    ],
    video: "UPji_u0ErJU",
    seguridad: "Practica el fakie antes de intentar el 180 completo. Usa protecciones de rodilla y muñeca ya que las caídas laterales son frecuentes al aprender.",
    herramientas: []
  },

  // ══════════════════════════════════════════════════════════
  //  TRUCOS — INTERMEDIO
  // ══════════════════════════════════════════════════════════

  {
    id: 4,
    tipo: "truco",
    nivel: "intermedio",
    estilo: "street",
    titulo: "Feeble Grind",
    descripcion: "El feeble grind es uno de los grinds más populares en BMX street. Consiste en deslizarse sobre un obstáculo con el peg trasero y la horquilla delantera enganchada. Es un grind versátil que se puede hacer en bordillos, barandas y cajones.",
    pasos: [
      "Acércate al obstáculo en ángulo ligero (30-45 grados).",
      "Ejecuta un bunny hop hacia el obstáculo apuntando el peg trasero al borde.",
      "El peg trasero aterriza en el obstáculo y la rueda delantera cae al otro lado.",
      "La horquilla delantera se engancha en el borde del obstáculo creando el balance del feeble.",
      "Mantén el peso ligeramente hacia atrás para mantener el grind.",
      "Para salir, jala el manubrio y empuja para liberar la horquilla y el peg."
    ],
    video: "cuNqgrxqqpA",
    seguridad: "Usa pegs resistentes y verifica que estén bien apretados antes de cada sesión. Practica sobre obstáculos bajos primero. Usa casco y protecciones de rodilla.",
    herramientas: []
  },

  {
    id: 5,
    tipo: "truco",
    nivel: "intermedio",
    estilo: "park",
    titulo: "Nose Manual",
    descripcion: "El nose manual es rodar en la rueda delantera sin pedalear — el opuesto del manual. Requiere un balance muy preciso y es especialmente popular en Park y Flatland. Es significativamente más difícil que el manual estándar.",
    pasos: [
      "Domina completamente el manual antes de intentar el nose manual.",
      "Rueda a velocidad media y empuja el manubrio hacia adelante con fuerza.",
      "Desplaza el peso hacia la rueda delantera hasta que la trasera se levante.",
      "Encuentra el punto de balance sobre el eje delantero — el rango es muy estrecho.",
      "Usa los tobillos y las rodillas para ajustar micro-correcciones de balance.",
      "Para salir, tira del manubrio hacia atrás suavemente para bajar la rueda trasera."
    ],
    video: "H2WOrJN7vh0",
    seguridad: "Las caídas hacia adelante son peligrosas. Usa siempre casco y considera protecciones de muñeca. Practica sobre superficies planas y lisas.",
    herramientas: []
  },

  {
    id: 6,
    tipo: "truco",
    nivel: "intermedio",
    estilo: "park",
    titulo: "Tabletop",
    descripcion: "El tabletop es un truco de estilo donde la bici se inclina horizontalmente en el aire — como una mesa — mientras el rider mantiene el control. Es un truco clásico de Park y Dirt que se ve muy bien en fotos y video.",
    pasos: [
      "Necesitas una rampa o salto que te dé tiempo suficiente en el aire.",
      "Sale de la rampa con un bunny hop limpio.",
      "En el punto más alto del salto, empieza a girar el manubrio hacia un lado.",
      "Empuja la bici lateralmente con las caderas mientras mantienes los pies en los pedales.",
      "La bici debe quedar completamente horizontal — paralela al suelo.",
      "Antes de aterrizar, trae la bici de vuelta a la posición vertical y aterriza limpio."
    ],
    video: "XL7xW0hRIVQ",
    seguridad: "Practica primero el truco mentalmente (visualización). Usa una rampa de altura apropiada a tu nivel. Casco y protecciones son obligatorios.",
    herramientas: []
  },

  // ══════════════════════════════════════════════════════════
  //  TRUCOS — AVANZADO
  // ══════════════════════════════════════════════════════════

  {
    id: 7,
    tipo: "truco",
    nivel: "avanzado",
    estilo: "todos",
    titulo: "Barspin",
    descripcion: "El barspin consiste en soltar el manubrio y hacerlo girar 360° en el aire mientras la bici está en el aire. Es uno de los trucos más icónicos del BMX y la base para combos más complejos. Requiere confianza total en el aire.",
    pasos: [
      "Domina el bunny hop alto antes de intentarlo — necesitas tiempo en el aire.",
      "Practica primero el movimiento de los brazos en el suelo sin soltar el manubrio.",
      "En el aire, suelta el manubrio con una mano y empújalo en la dirección de giro.",
      "El manubrio debe girar frente a ti — mantén los ojos en él durante toda la rotación.",
      "Atrapa el manubrio con ambas manos antes de aterrizar.",
      "Aterriza con control — si no atrapaste el manubrio, suéltate de la bici."
    ],
    video: "Z_kiRjTixgM",
    seguridad: "NUNCA intentes un barspin sin dominar completamente el bunny hop. Si no atrapas el manubrio, es mejor caer que intentar aterrizar sin control. Casco y protecciones completas.",
    herramientas: []
  },

  {
    id: 8,
    tipo: "truco",
    nivel: "avanzado",
    estilo: "todos",
    titulo: "360° barspin (truck driver)",
    descripcion: "El 360 es una rotación completa en el aire. Es la evolución natural del 180 y uno de los trucos más satisfactorios de dominar. En rampas se puede hacer con más tiempo en el aire; en street requiere mucha potencia en el bunny hop.",
    pasos: [
      "Domina completamente el 180 bar antes de intentar el 360 bar.",
      "Necesitas más velocidad y potencia que para el 180.",
      "Inicia el giro desde los pies — es importante el movimiento de todo el cuerpo.",
      "Gira la cabeza con la posicion adecuada, cerrando las piernas y soltando el bar",
      "Comprométete completamente con la rotación — a medio camino no se puede parar.",
      "Aterriza rodando hacia adelante con ambas ruedas y absorbe el impacto."
    ],
    video: "ywNUJE362OE",
    seguridad: "El mayor peligro es comprometerse a medias. Si inicias el giro, complétalo. Usa siempre casco, rodilleras y coderas. Practica en rampas antes de intentarlo en plano.",
    herramientas: []
  },

  // ══════════════════════════════════════════════════════════
  //  MANTENIMIENTO
  // ══════════════════════════════════════════════════════════

  {
    id: 9,
    tipo: "mantenimiento",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Tensión de cadena",
    descripcion: "Una cadena mal tensada puede salirse del plato en el momento menos oportuno o dañar el hub y el bottom bracket. Aprender a ajustar la tensión correcta es esencial para cualquier rider.",
    pasos: [
      "Afloja los nuts del eje trasero con una llave de 15mm.",
      "Empuja la rueda trasera hacia atrás en los dropouts para tensar la cadena.",
      "La tensión correcta es 6-10mm de juego vertical en el centro de la cadena.",
      "Verifica que la rueda esté centrada entre los chainstays antes de apretar.",
      "Aprieta el eje trasero con fuerza uniforme en ambos lados.",
      "Verifica la alineación del neumático con el cuadro y ajusta si es necesario."
    ],
    video: "yE77JN2UBk8",
    seguridad: "Asegúrate de que el eje esté bien apretado antes de rodar. Un eje flojo puede causar que la rueda salga mientras ruedas.",
    herramientas: ["Llave de 15mm", "Regla o medidor (opcional)"]
  },

  {
    id: 10,
    tipo: "mantenimiento",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Cambio de neumático",
    descripcion: "Saber cambiar un neumático es una habilidad fundamental. Tarde o temprano tendrás un pinchazo o el neumático se desgastará — este proceso te tomará menos de 10 minutos una vez lo domines.",
    pasos: [
      "Afloja y retira el eje de la rueda del cuadro o la horquilla.",
      "Desinfla completamente el neumático si aún tiene aire.",
      "Con palancas de neumático, saca un lado del neumático del rim.",
      "Retira la cámara de aire (si aplica) y luego el neumático completo.",
      "Monta el nuevo neumático en un lado del rim con las manos.",
      "Inserta la cámara, empieza por la válvula e infla ligeramente.",
      "Termina de montar el otro lado del neumático — verifica que la cámara no quede atrapada.",
      "Infla a la presión recomendada (marcada en el flanco del neumático) y remonta la rueda."
    ],
    video: "CGclFaFfJ3c",
    seguridad: "No uses herramientas metálicas para montar el neumático — pueden perforar la cámara. Verifica siempre la presión de inflado indicada en el neumático.",
    herramientas: ["Palancas de neumático (2-3)", "Bomba de aire", "Llave de 15mm"]
  },

  {
    id: 11,
    tipo: "mantenimiento",
    nivel: "intermedio",
    estilo: "todos",
    titulo: "Ajuste de headset",
    descripcion: "Un headset flojo causa un golpeteo en la dirección y puede dañar el headtube del cuadro. Un headset muy apretado hace la dirección rígida y difícil de maniobrar. El ajuste correcto es crítico para la seguridad.",
    pasos: [
      "Para verificar si el headset está flojo: frena la rueda delantera y empuja la bici hacia adelante — si sientes golpeteo, está flojo.",
      "Afloja los tornillos del stem con una llave Allen.",
      "Ajusta el bolt superior del stem (el que está encima) para tensar el headset.",
      "Aprieta una vuelta a la vez y verifica el golpeteo entre cada ajuste.",
      "Una vez sin golpeteo, verifica que el manubrio gire suave y sin resistencia.",
      "Aprieta los tornillos del stem en el steerer tube manteniendo el manubrio centrado."
    ],
    video: "XMoGHSOYkS4",
    seguridad: "Un headset flojo es peligroso — nunca ignores el golpeteo en la dirección. Verifica el headset antes de cada sesión de riding.",
    herramientas: ["Llave Allen 5mm y 6mm", "Llave de tubo (para threadless)"]
  },

  {
    id: 12,
    tipo: "mantenimiento",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Lubricación de cadena",
    descripcion: "Una cadena seca chirría, se desgasta más rápido y puede romperse. La lubricación regular es el mantenimiento más simple y más ignorado. Una cadena bien lubricada dura el doble.",
    pasos: [
      "Limpia la cadena con un trapo seco para remover suciedad y lubricante viejo.",
      "Si la cadena está muy sucia, usa desengrasante y un cepillo antes de lubricar.",
      "Aplica lubricante específico para cadenas en cada eslabón mientras giras los pedales hacia atrás.",
      "Deja actuar el lubricante 2-3 minutos.",
      "Con un trapo limpio, retira el exceso de lubricante — el exceso acumula suciedad.",
      "La cadena debe verse ligeramente brillante pero no chorrear lubricante."
    ],
    video: "TaCS1Tim-4c",
    seguridad: "Usa lubricante específico para cadenas — el aceite de cocina o el WD-40 no son sustitutos adecuados. Lubrica después de cada sesión en lluvia o tierra.",
    herramientas: ["Lubricante para cadenas", "Trapos limpios", "Desengrasante (opcional)"]
  },

  // ══════════════════════════════════════════════════════════
  //  SETUP
  // ══════════════════════════════════════════════════════════

  {
    id: 13,
    tipo: "setup",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Instalación de grips",
    descripcion: "Instalar grips nuevos parece simple pero hacerlo mal puede dejarlos flojos o torcidos. Con la técnica correcta quedan perfectos en minutos sin necesidad de pegamento.",
    pasos: [
      "Retira los grips viejos cortándolos si es necesario — no vale la pena guardarlos.",
      "Limpia el manubrio con alcohol isopropílico para remover residuos de pegamento.",
      "Opción sin pegamento: usa aire comprimido o WD-40 como lubricante temporal.",
      "Inserta el grip con movimiento de torsión mientras soplas aire comprimido adentro.",
      "Alinea el patrón del grip si lo tiene antes de que seque.",
      "Deja secar 24 horas antes de rodar si usaste adhesivo.",
      "Verifica que los end caps (tapas) estén instalados — protegen en caídas."
    ],
    video: "eFxz88dsMEs",
    seguridad: "Siempre usa end caps en los extremos del manubrio — en una caída pueden evitar una herida seria en la muñeca o costilla.",
    herramientas: ["Aire comprimido (recomendado)", "Alcohol isopropílico", "Trapo limpio"]
  },

  {
    id: 14,
    tipo: "setup",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Instalación de pedales",
    descripcion: "Instalar pedales parece trivial pero el error más común — invertir el pedal izquierdo — puede dañar las bielas permanentemente. Este tutorial te enseña la regla infalible para no equivocarte.",
    pasos: [
      "REGLA DE ORO: el pedal DERECHO tiene rosca normal (aprieta en sentido horario). El pedal IZQUIERDO tiene rosca INVERSA (aprieta en sentido antihorario).",
      "Los pedales están marcados: R (right/derecho) y L (left/izquierdo).",
      "Aplica grasa en el spindle antes de instalar — evita que se oxide y quede pegado.",
      "Enrosca el pedal a mano primero para verificar que agarra bien (no forzar).",
      "Aprieta con una llave de 15mm o llave Allen según el tipo de pedal.",
      "Verifica que ambos pedales estén bien apretados jalando lateralmente con fuerza."
    ],
    video: "RdMBfOnI594",
    seguridad: "⚠️ Un pedal mal instalado puede salirse mientras ruedas. Verifica siempre antes de una sesión. Si sientes que un pedal está flojo mientras ruedas, detente inmediatamente.",
    herramientas: ["Llave de 15mm o llave Allen 6mm", "Grasa para rosca"]
  },

  {
    id: 15,
    tipo: "setup",
    nivel: "intermedio",
    estilo: "street",
    titulo: "Instalación de pegs",
    descripcion: "Los pegs son cilindros de acero o cromo que se montan en los ejes para hacer grinds. Su instalación correcta es crítica — un peg flojo puede salirse durante un grind y causar una caída.",
    pasos: [
      "Elige el lado donde quieres montar los pegs — la mayoría monta 4 pegs (ambos lados de ambas ruedas).",
      "Retira la tuerca del eje con una llave de 17mm.",
      "Desliza el peg sobre el eje — debe entrar con algo de resistencia.",
      "Algunos pegs tienen tornillo de seguridad Allen — apriétalo una vez en posición.",
      "Remonta la tuerca del eje apretando bien — el peg queda sujeto entre la tuerca y el dropout.",
      "Verifica que el peg no gire jalándolo con fuerza.",
      "Verifica la tensión de la cadena después — montar pegs puede mover la rueda."
    ],
    video: "oVLRa_tjAFo",
    seguridad: "Verifica los pegs antes de cada sesión de grinds. Un peg flojo puede hacer que la rueda se mueva durante un grind. Usa siempre casco y protecciones.",
    herramientas: ["Llave de 17mm", "Llave Allen 5mm (según modelo de peg)"]
  },

  {
    id: 16,
    tipo: "setup",
    nivel: "principiante",
    estilo: "todos",
    titulo: "Ajuste de altura del sillín",
    descripcion: "En BMX freestyle el sillín va bajo, pero la posición correcta varía según el rider y el estilo. Este tutorial muestra cómo ajustarlo correctamente y asegurarlo para que no gire durante trucos.",
    pasos: [
      "Afloja el seat post clamp con una llave Allen o llave de tubo según el modelo.",
      "Ajusta la altura: en freestyle el sillín suele estar varios centímetros por debajo de la altura del manubrio.",
      "Para seat grabs: el sillín debe estar a una altura cómoda para agarrarlo con la mano.",
      "Aprieta el seat post clamp firmemente — no debe poder girar al jalarlo con fuerza.",
      "Si el seat post baja solo al rodar, aplica grasa al tubo y aprieta más el clamp.",
      "Verifica que el sillín esté apuntando hacia adelante y paralelo al toptube."
    ],
    video: "fPmIMASLIpc",
    seguridad: "En BMX freestyle nunca pongas el sillín muy alto — dificulta los trucos y aumenta el riesgo de impacto. Un sillín giratorio puede desorientarte durante un truco.",
    herramientas: ["Llave Allen 4mm o 5mm", "Grasa (opcional)"]
  }

];

// ============================================================
//  BMX.593 — Street Lab — Base de datos de contenido
//  ============================================================
//
//  SECCIONES:
//  - LESIONES:     array con lesiones comunes del BMX
//  - PREVENCION:   consejos y equipamiento de seguridad
//  - EJERCICIOS:   base de ejercicios por capacidad
//  - LAB_SESSIONS: videos del equipo BMX.593
//
//  Para actualizar contenido edita los arrays correspondientes.
// ============================================================


// ══════════════════════════════════════════════════════════════
//  LESIONES COMUNES
// ══════════════════════════════════════════════════════════════
// zona: cabeza | hombro | muneca | codo | espalda | cadera | rodilla | tobillo | pie
// gravedad: leve | moderada | grave

const LESIONES = [
  {
    id: 1,
    zona: "muneca",
    nombre: "Fractura de muñeca",
    mecanismo: "Caída con la mano extendida para amortiguar el impacto — el reflejo más natural y más peligroso.",
    senales: ["Dolor intenso inmediato", "Inflamación rápida", "Dificultad para mover la muñeca", "Deformidad visible en casos graves"],
    gravedad: "grave",
    quéHacer: "Inmovilizar con férula improvisada. No intentar 'recolocar' nada. Ir a urgencias para radiografía.",
    prevención: "Aprender a caer rodando (rolling fall). Usar muñequeras con refuerzo de carbono.",
    tiempoRecuperacion: "4–8 semanas según gravedad"
  },
  {
    id: 2,
    zona: "codo",
    nombre: "Luxación de codo",
    mecanismo: "Caída con el brazo extendido y el codo bloqueado. Muy común en caídas hacia adelante.",
    senales: ["Dolor agudo en el codo", "Deformidad visible", "Incapacidad de doblar o extender el brazo", "Entumecimiento en la mano"],
    gravedad: "grave",
    quéHacer: "No intentar reducir la luxación. Inmovilizar el brazo en la posición en que quedó. Urgencias inmediatamente.",
    prevención: "Coderas de impacto. Técnica de caída con brazos doblados. No 'frenar' la caída con el brazo rígido.",
    tiempoRecuperacion: "3–6 semanas más fisioterapia"
  },
  {
    id: 3,
    zona: "hombro",
    nombre: "Separación acromioclavicular",
    mecanismo: "Caída directa sobre el hombro o caída lateral con el brazo pegado al cuerpo.",
    senales: ["Dolor en la parte superior del hombro", "Protuberancia visible en el hombro", "Dolor al levantar el brazo", "Chasquido al mover el hombro"],
    gravedad: "moderada",
    quéHacer: "Inmovilizar con cabestrillo. Hielo 20 min cada 2 horas. Evaluación médica en el día.",
    prevención: "Rodar en la caída para distribuir el impacto. Coderas y hombrera en sesiones de alto riesgo.",
    tiempoRecuperacion: "2–12 semanas según grado"
  },
  {
    id: 4,
    zona: "rodilla",
    nombre: "Contusión de rodilla",
    mecanismo: "Impacto directo de la rodilla contra el suelo, un obstáculo o el cuadro de la bici.",
    senales: ["Dolor localizado", "Inflamación progresiva", "Hematoma", "Dificultad para doblar la rodilla completamente"],
    gravedad: "leve",
    quéHacer: "Protocolo RICE: Reposo, Hielo, Compresión, Elevación. Si el dolor persiste más de 48h, consultar médico.",
    prevención: "Rodilleras de impacto con espuma de alta densidad. No escatimar en protecciones para rodillas.",
    tiempoRecuperacion: "3–10 días"
  },
  {
    id: 5,
    zona: "rodilla",
    nombre: "Lesión de ligamento (LCA/LCL)",
    mecanismo: "Torsión de la rodilla en aterrizajes torcidos o impactos laterales. Una de las lesiones más serias del BMX.",
    senales: ["Chasquido audible en el momento", "Inflamación rápida y severa", "Inestabilidad al caminar", "Dolor que impide apoyar el peso"],
    gravedad: "grave",
    quéHacer: "Inmovilizar inmediatamente. Hielo. No apoyar peso. Urgencias el mismo día — requiere resonancia magnética.",
    prevención: "Ejercicios de fortalecimiento de cuádriceps y glúteos. Aterrizajes con rodillas ligeramente dobladas. Nunca aterrizar con rodillas bloqueadas.",
    tiempoRecuperacion: "3–12 meses según ligamento y tratamiento"
  },
  {
    id: 6,
    zona: "tobillo",
    nombre: "Esguince de tobillo",
    mecanismo: "Aterrizaje en falso, especialmente en suelo irregular o bordes de obstáculos. La lesión más frecuente en BMX street.",
    senales: ["Dolor inmediato en el tobillo", "Inflamación", "Dificultad para apoyar el pie", "Hematoma en grados moderados"],
    gravedad: "leve",
    quéHacer: "RICE inmediato. Vendaje compresivo. Si no puedes apoyar el pie después de 30 min, radiografía para descartar fractura.",
    prevención: "Zapatillas con buen soporte lateral. Ejercicios de propiocepción. Calentamiento de tobillos antes de sesión.",
    tiempoRecuperacion: "1–6 semanas según grado"
  },
  {
    id: 7,
    zona: "cabeza",
    nombre: "Conmoción cerebral",
    mecanismo: "Impacto de la cabeza contra el suelo u obstáculo. Puede ocurrir incluso con casco puesto si el impacto es severo.",
    senales: ["Confusión o desorientación", "Dolor de cabeza persistente", "Náuseas o vómitos", "Sensibilidad a la luz", "Pérdida breve de conciencia"],
    gravedad: "grave",
    quéHacer: "Parar inmediatamente. No continuar la sesión bajo ninguna circunstancia. Evaluación médica urgente. Reposo total.",
    prevención: "Casco SIEMPRE — es innegociable. Casco certificado y en buen estado (reemplazar después de impacto fuerte).",
    tiempoRecuperacion: "1–4 semanas de reposo total (protocolo de retorno gradual)"
  },
  {
    id: 8,
    zona: "espalda",
    nombre: "Lumbalgia por impacto",
    mecanismo: "Aterrizajes duros repetidos, especialmente en dirt jumps y drops. También por mala postura al rodar.",
    senales: ["Dolor en la parte baja de la espalda", "Rigidez matutina", "Dolor que aumenta al agacharse", "En casos graves: dolor irradiado a la pierna"],
    gravedad: "moderada",
    quéHacer: "Reposo relativo. Hielo/calor alternado. Antiinflamatorios. Si el dolor persiste más de 1 semana o irradia a la pierna, médico.",
    prevención: "Fortalecimiento de core (la mejor prevención). Técnica correcta de aterrizaje absorbiendo con las piernas. Estiramientos de cadera y columna.",
    tiempoRecuperacion: "1–3 semanas para lumbalgia simple"
  },
  {
    id: 9,
    zona: "pie",
    nombre: "Fractura por estrés en el pie",
    mecanismo: "Impactos repetidos en sesiones largas, especialmente sin suficiente descanso entre sesiones. Muy común en riders que entrenan diario.",
    senales: ["Dolor que aumenta gradualmente durante la sesión", "Dolor puntual al presionar el hueso", "Inflamación sin traumatismo claro", "Mejora con reposo, empeora al rodar"],
    gravedad: "moderada",
    quéHacer: "Reposo inmediato. Radiografía (puede no verse en primeras 2 semanas — pedir gammagrafía si hay sospecha). No rodar hasta diagnóstico.",
    prevención: "Descanso adecuado entre sesiones. Zapatillas con amortiguación. Progresión gradual en volumen de entrenamiento.",
    tiempoRecuperacion: "4–8 semanas de reposo"
  },
];


// ══════════════════════════════════════════════════════════════
//  PREVENCIÓN
// ══════════════════════════════════════════════════════════════

const PREVENCION = {
  equipamiento: [
    {
      nombre: "Casco",
      obligatorio: true,
      descripcion: "El único equipamiento verdaderamente obligatorio. Elige entre casco de media cáscara (más fresco, street/park) o casco completo (más protección, dirt/vert). Debe estar certificado (CPSC, EN1078 o ASTM). Reemplaza el casco después de cualquier impacto fuerte — aunque no veas daño exterior, la espuma interior puede estar comprometida.",
      cuando: "Siempre. Sin excepción.",
      icon: "fa-helmet-safety"
    },
    {
      nombre: "Rodilleras",
      obligatorio: false,
      descripcion: "Especialmente importantes para principiantes e intermedios aprendiendo nuevos trucos. Las mejores tienen espuma de impacto D3O o similar. Para street y park son opcionales para riders avanzados, pero altamente recomendadas al aprender algo nuevo.",
      cuando: "Al aprender trucos nuevos, sesiones de dirt, cualquier rider principiante.",
      icon: "fa-shield"
    },
    {
      nombre: "Coderas",
      obligatorio: false,
      descripcion: "Las caídas laterales son muy comunes en BMX. Las coderas con espuma dura protegen el punto más vulnerable en caídas de lado. Especialmente recomendadas para street y al aprender barspin, 360 y trucos de rotación.",
      cuando: "Street, trucos de rotación, principiantes.",
      icon: "fa-shield-halved"
    },
    {
      nombre: "Muñequeras",
      obligatorio: false,
      descripcion: "Reducen el riesgo de fractura de muñeca en caídas hacia adelante. Las versiones con inserto rígido de carbono o plástico son las más efectivas. Pueden interferir con el feel del manubrio al inicio — es cuestión de acostumbrarse.",
      cuando: "Principiantes, aprendizaje de trucos nuevos.",
      icon: "fa-hand"
    },
    {
      nombre: "Zapatillas planas",
      obligatorio: true,
      descripcion: "Las zapatillas para BMX deben tener suela plana y rígida para máximo contacto con el pedal, y buen soporte lateral para proteger los tobillos. Evita zapatillas de running — su suela curva reduce el contacto con el pedal. Marcas específicas de BMX (Etnies, DC, Vans) o skate son perfectas.",
      cuando: "Siempre.",
      icon: "fa-shoe-prints"
    },
  ],
  calenamiento: [
    { ejercicio: "Rotación de tobillos", duracion: "1 min", desc: "Ambos sentidos — activa los estabilizadores del tobillo antes de cualquier impacto." },
    { ejercicio: "Sentadillas suaves", duracion: "10 reps", desc: "Calienta rodillas y caderas — las articulaciones más exigidas en BMX." },
    { ejercicio: "Rotación de caderas", duracion: "10 reps/lado", desc: "Moviliza la cadera para los movimientos de twist y rotación." },
    { ejercicio: "Círculos de hombros", duracion: "10 reps/dir", desc: "Activa el hombro — uno de los puntos más lesionados en caídas." },
    { ejercicio: "Jumping jacks", duracion: "30 seg", desc: "Eleva la temperatura corporal y activa la coordinación general." },
    { ejercicio: "Rotación de muñecas", duracion: "1 min", desc: "Calienta la articulación más en riesgo en caídas." },
  ],
  tecnicaCaida: [
    "Nunca extiendas los brazos rígidos para frenar la caída — es la causa número 1 de fractura de muñeca.",
    "Aprende el 'shoulder roll': cuando caigas hacia adelante, dobla el cuerpo y rueda por el hombro distribuyendo el impacto.",
    "En caídas laterales, trata de aterrizar en el glúteo y muslo, no en el codo o cadera directamente.",
    "Si vas a caer de espaldas, dobla el mentón hacia el pecho para proteger la cabeza.",
    "En caídas desde altura, flexiona las rodillas al aterrizar para absorber el impacto — nunca aterrices con rodillas bloqueadas.",
    "Si la bici va mal, suéltala — es reemplazable, tú no. Especialmente en barspins y trucos con el manubrio suelto.",
  ]
};


// ══════════════════════════════════════════════════════════════
//  EJERCICIOS POR CAPACIDAD — HardWork BMX
// ══════════════════════════════════════════════════════════════
// capacidad: rotacion | potencia | equilibrio | grinds
// bloque: calentamiento | principal | enfriamiento

const EJERCICIOS = [

  // ── ROTACIÓN ────────────────────────────────────────────────
  {
    id: 1,
    capacidad: ["rotacion"],
    nombre: "Russian Twist",
    bloque: "principal",
    series: 4, reps: "20 reps (10/lado)", descanso: "45 seg",
    descripcion: "Sentado en el suelo con las rodillas dobladas y el tronco inclinado 45°. Rota el tronco de lado a lado tocando el suelo con las manos. Añade peso (botella de agua, mochila) para progresar.",
    beneficio: "Desarrolla la rotación del core — el movimiento inicial de cualquier barspin o 360. Un core más rotacional = más velocidad de giro con menos esfuerzo.",
    progresion: "Semana 1-2: sin peso · Semana 3-4: 2-3kg · Semana 5+: aumentar peso o velocidad"
  },
  {
    id: 2,
    capacidad: ["rotacion"],
    nombre: "Pallof Press con rotación",
    bloque: "principal",
    series: 3, reps: "12 reps/lado", descanso: "60 seg",
    descripcion: "Con una banda elástica fijada a un punto lateral, extiende los brazos al frente resistiendo la rotación. Variación: después de extender, agrega una pequeña rotación controlada hacia el lado contrario.",
    beneficio: "Entrena la resistencia a la rotación y la generación de fuerza rotacional — clave para controlar el timing en barspins y tailwhips.",
    progresion: "Aumentar tensión de la banda o añadir pausa de 2 segundos en la extensión"
  },
  {
    id: 3,
    capacidad: ["rotacion"],
    nombre: "Med Ball Rotational Throw",
    bloque: "principal",
    series: 4, reps: "8 reps/lado", descanso: "60 seg",
    descripcion: "De pie junto a una pared, sostén un balón medicinal (o mochila pesada). Rota explosivamente y lanza el balón contra la pared. Atrapa y repite. Máxima velocidad en el lanzamiento.",
    beneficio: "Desarrolla potencia rotacional explosiva — la misma cualidad física que determina qué tan rápido puedes girar el manubrio en un barspin o completar un 360.",
    progresion: "2kg → 4kg → 6kg. Aumentar velocidad antes de aumentar peso"
  },
  {
    id: 4,
    capacidad: ["rotacion"],
    nombre: "Bicycle Crunches",
    bloque: "principal",
    series: 3, reps: "30 reps (15/lado)", descanso: "45 seg",
    descripcion: "Tumbado boca arriba, manos detrás de la cabeza. Lleva el codo derecho hacia la rodilla izquierda mientras extiendes la pierna derecha. Alterna de forma controlada pero con ritmo.",
    beneficio: "Activa oblicuos y hip flexors simultáneamente — la combinación exacta que se usa al iniciar un 360 o tailwhip desde el bunny hop.",
    progresion: "Aumentar velocidad manteniendo control o añadir pausa en cada rotación"
  },
  {
    id: 5,
    capacidad: ["rotacion"],
    nombre: "Jump Squat con giro 180°",
    bloque: "principal",
    series: 4, reps: "8 reps", descanso: "90 seg",
    descripcion: "Sentadilla profunda, luego salto explosivo girando 180° en el aire. Aterriza suave y controlado con rodillas dobladas. Alterna la dirección de giro en cada serie.",
    beneficio: "Entrena la integración de potencia de piernas con rotación del cuerpo en el aire — la secuencia exacta de un 180 o el inicio de un 360.",
    progresion: "Primero dominar el salto sin giro, luego 90°, luego 180°"
  },

  // ── POTENCIA / ALTURA ────────────────────────────────────────
  {
    id: 6,
    capacidad: ["potencia"],
    nombre: "Box Jump",
    bloque: "principal",
    series: 5, reps: "5 reps", descanso: "2 min",
    descripcion: "Frente a una caja o escalón (30-60cm), salta con ambos pies aterrizando suavemente encima. Baja caminando — no saltes hacia atrás. Máxima explosividad en cada salto.",
    beneficio: "Desarrolla potencia explosiva de piernas — la misma que genera la altura en el bunny hop y en los saltos de dirt. Más potencia = más tiempo en el aire = más trucos.",
    progresion: "Aumentar altura de la caja: 30cm → 45cm → 60cm → 75cm"
  },
  {
    id: 7,
    capacidad: ["potencia"],
    nombre: "Sentadilla búlgara con salto",
    bloque: "principal",
    series: 3, reps: "8 reps/pierna", descanso: "90 seg",
    descripcion: "Pie trasero elevado en una silla o escalón. Baja lentamente (3 segundos) hasta que la rodilla trasera casi toque el suelo. Sube de forma explosiva intentando saltar. Equilibra el peso sobre la pierna delantera.",
    beneficio: "Corrige desequilibrios entre piernas (muy comunes en BMX por el pie dominante) y desarrolla potencia unilateral — crítica para aterrizajes limpios y mantenimiento del equilibrio.",
    progresion: "Sin peso → con mochila de 5kg → aumentar peso gradualmente"
  },
  {
    id: 8,
    capacidad: ["potencia"],
    nombre: "Burpee con salto",
    bloque: "principal",
    series: 4, reps: "10 reps", descanso: "90 seg",
    descripcion: "Desde de pie, baja al suelo, haz una plancha, sube rápido y salta con los brazos hacia arriba. Máxima explosividad en la fase de salto. Mantén el core apretado durante todo el movimiento.",
    beneficio: "Combina potencia, coordinación y resistencia — las tres cualidades que determinan si puedes mantener el nivel de una sesión larga de dirt o park.",
    progresion: "Aumentar velocidad de ejecución o añadir peso en chaleco"
  },
  {
    id: 9,
    capacidad: ["potencia"],
    nombre: "Salto desde cuclillas (Tuck Jump)",
    bloque: "principal",
    series: 4, reps: "8 reps", descanso: "2 min",
    descripcion: "Desde posición de cuclillas completa, salta lo más alto posible llevando las rodillas al pecho en el aire. Aterriza suave absorbiendo con las piernas.",
    beneficio: "Simula exactamente el movimiento del bunny hop — compresión profunda y extensión explosiva. Mejora directamente la altura de salto sobre la bici.",
    progresion: "Intentar llevar las rodillas más alto en cada sesión. Añadir pausa de 1 seg en el fondo antes de saltar"
  },
  {
    id: 10,
    capacidad: ["potencia"],
    nombre: "Hip Thrust",
    bloque: "principal",
    series: 4, reps: "12 reps", descanso: "60 seg",
    descripcion: "Espalda apoyada en una superficie elevada (sofá, caja), caderas abajo. Empuja las caderas hacia arriba con fuerza apretando glúteos. Mantén 1 segundo arriba. Puedes añadir peso sobre las caderas.",
    beneficio: "Los glúteos son el motor principal del salto en BMX. Glúteos más fuertes = más potencia de cadera = saltos más altos y pedaleada más potente en dirt.",
    progresion: "Sin peso → 5kg → 10kg+ sobre las caderas"
  },

  // ── EQUILIBRIO ───────────────────────────────────────────────
  {
    id: 11,
    capacidad: ["equilibrio"],
    nombre: "Single Leg Deadlift",
    bloque: "principal",
    series: 3, reps: "10 reps/pierna", descanso: "60 seg",
    descripcion: "De pie en una sola pierna, inclina el tronco hacia adelante mientras la pierna libre va hacia atrás (como una balanza). Mantén la espalda recta. Vuelve a la posición inicial controladamente.",
    beneficio: "Desarrolla la propiocepción (sentido de posición del cuerpo) y la estabilidad unilateral — exactamente lo que se usa para mantener el balance en un manual o nose manual.",
    progresion: "Sin peso → con mancuerna de 5-10kg → ojos cerrados (máxima dificultad)"
  },
  {
    id: 12,
    capacidad: ["equilibrio"],
    nombre: "Plancha con alcance",
    bloque: "principal",
    series: 4, reps: "10 reps/lado", descanso: "45 seg",
    descripcion: "En posición de plancha alta (push-up), levanta una mano y extiende el brazo hacia adelante manteniéndola 2 segundos. Vuelve y alterna. El objetivo es que el cuerpo no rote durante el movimiento.",
    beneficio: "Entrena el core anti-rotacional — la capacidad de mantener el cuerpo estable mientras los brazos se mueven. Esencial para el manual, donde pequeños ajustes del manubrio mantienen el balance.",
    progresion: "Añadir movimiento de pierna opuesta simultáneamente (dead bug en plancha)"
  },
  {
    id: 13,
    capacidad: ["equilibrio"],
    nombre: "Balance en BOSU / almohada",
    bloque: "principal",
    series: 3, reps: "45 seg/pierna", descanso: "30 seg",
    descripcion: "De pie en una pierna sobre una superficie inestable (almohada, colchoneta doblada). Mantén el equilibrio con los ojos abiertos, luego con ojos cerrados. Añade movimientos de brazos para aumentar la dificultad.",
    beneficio: "Entrena los músculos estabilizadores del tobillo y la propiocepción — la misma cadena de retroalimentación que tu cuerpo usa para hacer micro-correcciones en el manual.",
    progresion: "Suelo firme → almohada → ojos cerrados → con movimiento de brazos"
  },
  {
    id: 14,
    capacidad: ["equilibrio"],
    nombre: "Wall Sit con cierre de ojos",
    bloque: "principal",
    series: 3, reps: "45 seg", descanso: "60 seg",
    descripcion: "Sentado contra la pared con rodillas a 90°. Mantén la posición con ojos cerrados. Concéntrate en la sensación de equilibrio y posición. Esta posición carga los cuádriceps isométricamente.",
    beneficio: "Desarrolla resistencia isométrica de cuádriceps y entrena la conciencia corporal sin estímulo visual — similar a lo que experimenta el rider en el manual cuando los ojos están en el horizonte.",
    progresion: "Aumentar tiempo: 30s → 45s → 60s → 90s"
  },
  {
    id: 15,
    capacidad: ["equilibrio"],
    nombre: "Dead Bug",
    bloque: "principal",
    series: 3, reps: "10 reps/lado", descanso: "45 seg",
    descripcion: "Tumbado boca arriba, brazos extendidos hacia el techo, caderas y rodillas a 90°. Baja simultáneamente el brazo derecho y la pierna izquierda sin tocar el suelo. Vuelve y alterna. La espalda baja debe mantenerse pegada al suelo.",
    beneficio: "Activa el core profundo (transverso abdominal) — el estabilizador central que mantiene el cuerpo rígido y en control durante el manual y nose manual.",
    progresion: "Añadir pausa de 2 seg en la posición baja"
  },

  // ── GRINDS ───────────────────────────────────────────────────
  {
    id: 16,
    capacidad: ["grinds"],
    nombre: "Lateral Band Walk",
    bloque: "principal",
    series: 3, reps: "15 pasos/lado", descanso: "45 seg",
    descripcion: "Con una banda elástica en los tobillos, camina lateralmente manteniendo las rodillas ligeramente dobladas y la espalda recta. Mantén tensión en la banda en todo momento.",
    beneficio: "Fortalece abductores y estabilizadores de cadera — los músculos que te mantienen equilibrado lateralmente durante un grind, cuando todo el peso está sobre uno o dos puntos de contacto.",
    progresion: "Banda liviana → media → fuerte. Añadir sentadilla entre cada paso"
  },
  {
    id: 17,
    capacidad: ["grinds"],
    nombre: "Single Leg Squat (Pistol)",
    bloque: "principal",
    series: 3, reps: "6 reps/pierna", descanso: "90 seg",
    descripcion: "De pie en una pierna, baja lentamente flexionando la rodilla mientras la pierna libre va hacia adelante. Baja lo más que puedas manteniendo el equilibrio. Usa apoyo al inicio.",
    beneficio: "Desarrolla fuerza y control unilateral de pierna — fundamental cuando aterrizas de un grind o cuando una pierna absorbe más impacto que la otra en obstáculos con ángulo.",
    progresion: "Con apoyo de pared → sin apoyo → sin apoyo al fondo completo"
  },
  {
    id: 18,
    capacidad: ["grinds"],
    nombre: "Copenhagen Plank",
    bloque: "principal",
    series: 3, reps: "30 seg/lado", descanso: "60 seg",
    descripcion: "En posición lateral, el pie de arriba apoyado en una silla o escalón y el de abajo en el aire. Mantén las caderas alineadas y el cuerpo recto. Es uno de los ejercicios más difíciles para el aductor.",
    beneficio: "Fortalece los aductores y estabilizadores laterales — cruciales para mantener el control lateral durante grinds largos y para proteger la rodilla en aterrizajes asimétricos.",
    progresion: "Con rodilla apoyada → con pie extendido → añadir dip lateral"
  },
  {
    id: 19,
    capacidad: ["grinds"],
    nombre: "Step-up explosivo",
    bloque: "principal",
    series: 4, reps: "8 reps/pierna", descanso: "60 seg",
    descripcion: "Frente a un escalón o caja (30-40cm), sube explosivamente con una sola pierna y extiéndela completamente arriba. Baja controladamente. Enfócate en la pierna de trabajo.",
    beneficio: "Mejora la potencia unilateral y el timing para subir a un obstáculo — la misma mecánica que se usa al montar sobre un bordillo o baranda para hacer un grind.",
    progresion: "Aumentar altura del escalón. Añadir mochila con peso"
  },
  {
    id: 20,
    capacidad: ["grinds"],
    nombre: "Pallof Press lateral",
    bloque: "principal",
    series: 3, reps: "12 reps/lado", descanso: "60 seg",
    descripcion: "Con banda elástica fijada lateralmente, extiende los brazos al frente resistiendo que la banda te gire. Mantén el core apretado y la posición estable.",
    beneficio: "Entrena la resistencia anti-rotacional lateral — la capacidad de mantenerte estable cuando las fuerzas laterales del grind intentan desequilibrarte.",
    progresion: "Aumentar tensión de banda. Añadir pausa de 3 seg en extensión"
  },

  // ── CALENTAMIENTO UNIVERSAL ─────────────────────────────────
  {
    id: 21,
    capacidad: ["rotacion","potencia","equilibrio","grinds"],
    nombre: "Calentamiento articular",
    bloque: "calentamiento",
    series: 1, reps: "1 min", descanso: "0",
    descripcion: "Rotación suave de tobillos, rodillas, caderas, hombros y muñecas. 10 círculos en cada dirección por articulación. Sin forzar — solo movilizar.",
    beneficio: "Prepara las articulaciones para el movimiento y activa el líquido sinovial — reduce el riesgo de lesión articular.",
    progresion: "Siempre igual — consistencia es clave"
  },
  {
    id: 22,
    capacidad: ["rotacion","potencia","equilibrio","grinds"],
    nombre: "Jumping Jacks",
    bloque: "calentamiento",
    series: 2, reps: "30 seg", descanso: "15 seg",
    descripcion: "Clásico jumping jack. Mantén el ritmo constante y la postura erguida. Activa todo el cuerpo progresivamente.",
    beneficio: "Eleva la temperatura corporal y activa la coordinación general — el primer paso de cualquier calentamiento efectivo.",
    progresion: "Aumentar velocidad en la segunda serie"
  },
  {
    id: 23,
    capacidad: ["rotacion","potencia","equilibrio","grinds"],
    nombre: "Sentadillas de calentamiento",
    bloque: "calentamiento",
    series: 2, reps: "15 reps", descanso: "30 seg",
    descripcion: "Sentadilla suave con peso corporal. Baja lentamente (2-3 segundos), sube normal. Sin peso adicional. Enfócate en la postura — espalda recta, rodillas sobre los pies.",
    beneficio: "Activa rodillas, caderas y tobillos — las articulaciones más exigidas en BMX.",
    progresion: "Siempre igual en calentamiento"
  },

  // ── ENFRIAMIENTO UNIVERSAL ──────────────────────────────────
  {
    id: 24,
    capacidad: ["rotacion","potencia","equilibrio","grinds"],
    nombre: "Estiramiento de cadera (Figura 4)",
    bloque: "enfriamiento",
    series: 1, reps: "60 seg/lado", descanso: "0",
    descripcion: "Tumbado boca arriba, cruza el tobillo derecho sobre la rodilla izquierda. Lleva ambas piernas hacia el pecho. Siente el estiramiento en el glúteo y la cadera.",
    beneficio: "Alivia la tensión acumulada en cadera y glúteos después de sesiones de saltos y aterrizajes repetidos.",
    progresion: "Profundizar el estiramiento con la respiración"
  },
  {
    id: 25,
    capacidad: ["rotacion","potencia","equilibrio","grinds"],
    nombre: "Child's Pose con rotación",
    bloque: "enfriamiento",
    series: 1, reps: "60 seg", descanso: "0",
    descripcion: "Posición de niño (rodillas en el suelo, brazos extendidos). Alterna llevando un brazo hacia el lado opuesto rotando el tronco.",
    beneficio: "Estira columna, hombros y dorsales — todas las estructuras que trabajan en la postura de riding.",
    progresion: "Mantener más tiempo según necesidad"
  },
  {
    id: 26,
    capacidad: ["rotacion","potencia","equilibrio","grinds"],
    nombre: "Estiramiento de isquiotibiales",
    bloque: "enfriamiento",
    series: 1, reps: "45 seg/pierna", descanso: "0",
    descripcion: "De pie, extiende una pierna sobre una superficie elevada (silla, escalón). Inclínate hacia adelante manteniendo la espalda recta hasta sentir el estiramiento en la parte trasera del muslo.",
    beneficio: "Los isquiotibiales son los músculos más frecuentemente lesionados por tensión en riders — el estiramiento post-entrenamiento es esencial para su recuperación.",
    progresion: "Elevar más la pierna a medida que la flexibilidad mejora"
  },
];


// ══════════════════════════════════════════════════════════════
//  LAB SESSIONS — Videos del equipo BMX.593
// ══════════════════════════════════════════════════════════════
//
//  Para agregar un video nuevo:
//  1. Copia uno de los objetos de ejemplo
//  2. El campo "video" es el ID de YouTube (lo que va después de ?v=)
//  3. El campo "resultado" puede ser: "logrado" | "en-progreso" | "wip"
//  4. El campo "truco" es el nombre del truco que se está trabajando

const LAB_SESSIONS = [
  {
    id: 1,
    titulo: "Barspin Session — La Carolina",
    truco: "Barspin",
    rider: "BMX.593 Team",
    descripcion: "Primera sesión documentada de barspins en el skate park de La Carolina. Del primer intento al primer clean en 3 horas de sesión.",
    video: "dQw4w9WgXcQ",
    fecha: "2025-02-15",
    resultado: "logrado",
    tags: ["barspin", "park", "carolina"]
  },
  {
    id: 2,
    titulo: "180 Fakie — Spot Street Iñaquito",
    truco: "180 Fakie",
    rider: "BMX.593 Team",
    descripcion: "Explorando los spots de Iñaquito con foco en 180s al fakie. Análisis de los errores más comunes y correcciones en tiempo real.",
    video: "ScMzIvxBSi4",
    fecha: "2025-01-28",
    resultado: "logrado",
    tags: ["180", "fakie", "street"]
  },
  {
    id: 3,
    titulo: "Manual Challenge — 30 días",
    truco: "Manual",
    rider: "BMX.593 Team",
    descripcion: "Reto de 30 días para dominar el manual. Documentamos cada sesión y los ejercicios de equilibrio que marcaron la diferencia.",
    video: "9bZkp7q19f0",
    fecha: "2025-01-10",
    resultado: "en-progreso",
    tags: ["manual", "challenge", "equilibrio"]
  },
  {
    id: 4,
    titulo: "Feeble Grind — Primer bordillo",
    truco: "Feeble Grind",
    rider: "BMX.593 Team",
    descripcion: "De cero al primer feeble en bordillo. Mostramos los intentos fallidos, el proceso de aprendizaje y el momento del primer clean.",
    video: "kffacxfA7G4",
    fecha: "2024-12-20",
    resultado: "logrado",
    tags: ["feeble", "grind", "street", "bordillo"]
  },
];

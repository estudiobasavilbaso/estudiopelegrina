// ==========================================================================
// CONTENIDO DEL BLOG — Estudio Jurídico Pelegrina
// Para agregar una nota nueva: copiá un objeto, cambiá los textos y ejecutá
//   node blog/_generator/build.mjs
// El body admite HTML: <p>, <h2>, <h3>, <ul><li>, <blockquote>,
// y recuadros:  <div class="callout"><span class="callout-ico">⚠️</span><p>…</p></div>
// ==========================================================================

const DISCLAIMER = `<div class="callout"><span class="callout-ico">⚖️</span><p><strong>Nota:</strong> este artículo es informativo y general. Cada caso tiene particularidades que pueden cambiar el resultado. Antes de iniciar cualquier trámite, consultá con una abogada para analizar tu situación concreta.</p></div>`;

export const CATEGORIES = [
  { key: 'all',        label: 'Todos' },
  { key: 'italiana',   label: 'Ciudadanía italiana' },
  { key: 'espanola',   label: 'Ciudadanía española' },
  { key: 'arg',        label: 'Nacionalidad argentina' },
  { key: 'pasaportes', label: 'Pasaportes' },
  { key: 'visas',      label: 'Visas' },
  { key: 'sucesiones', label: 'Sucesiones' },
];

export const ARTICLES = [

  // ====================================================================== 3
  {
    slug: 'pasaporte-italiano-espanol-antes-de-viajar',
    category: 'Pasaportes',
    cat: 'pasaportes',
    featured: true,
    date: '2026-07-02',
    dateLabel: '2 de julio de 2026',
    readTime: '7 min de lectura',
    image: '../pasaporte-carpeta.jpg',
    title: 'Pasaporte italiano o español: 10 cosas que deberías revisar antes de viajar',
    excerpt: 'Tener el pasaporte europeo en la mano no alcanza: hay requisitos de vigencia, hojas libres y detalles que, si no revisás a tiempo, pueden frenarte en el aeropuerto.',
    body: `
<p>Conseguir el pasaporte italiano o español es el final de un camino largo, y con razón se celebra. Pero ese documento no es solo un recuerdo: es una herramienta de viaje con reglas propias, y muchas de esas reglas sorprenden a quien viaja por primera vez con su pasaporte europeo.</p>
<p>La mayoría de los problemas en migraciones no ocurren por falta de derechos, sino por detalles evitables: un pasaporte al que le quedan pocos meses, hojas agotadas o un dato que no coincide. Antes de comprar el pasaje, tomate diez minutos para revisar esta lista.</p>

<h2>1. La vigencia mínima que exige tu destino</h2>
<p>Muchos países no te dejan ingresar si a tu pasaporte le queda poca vigencia, aunque técnicamente no esté vencido. La regla más común es la de los <strong>seis meses</strong>: numerosos destinos exigen que el pasaporte siga válido al menos seis meses después de la fecha en que salís del país.</p>
<p>Si tu pasaporte vence dentro de ese margen, es posible que ni siquiera te permitan embarcar. Revisá la fecha de vencimiento apenas empezás a planificar el viaje, no la semana anterior.</p>

<h2>2. Las reglas del espacio Schengen</h2>
<p>Si viajás con pasaporte italiano o español dentro de la Unión Europea, circulás con total libertad: sos ciudadano comunitario. Pero cuando ese pasaporte se usa para entrar a Europa desde fuera, o para viajar a terceros países, aplican requisitos de vigencia y de validez que conviene tener claros según cada frontera.</p>

<h2>3. Países que piden seis meses de vigencia</h2>
<p>Estados Unidos, buena parte de Asia y varios destinos de América y África aplican la regla de los seis meses de forma estricta. No es un capricho del funcionario: es la política oficial de esos países, y las aerolíneas la controlan antes de dejarte subir al avión.</p>

<h2>4. Revisá las hojas libres</h2>
<p>Cada ingreso y cada visa ocupan espacio. Algunos países exigen tener <strong>dos o más páginas en blanco</strong> para poder estampar el sello de entrada. Si tu pasaporte está lleno de sellos de viajes anteriores, es un motivo real de rechazo, aunque el documento esté vigente.</p>

<h2>5. El pasaporte deteriorado no sirve</h2>
<p>Un pasaporte mojado, con la foto despegándose, la tapa rota o el chip dañado puede ser considerado inválido en migraciones, aunque la fecha de vencimiento esté lejos. Si el tuyo está en mal estado, tramitá uno nuevo antes de viajar: no arriesgues el viaje por ahorrarte ese paso.</p>

<div class="callout"><span class="callout-ico">💡</span><p><strong>Consejo:</strong> guardá el pasaporte en un estuche rígido y lejos de líquidos. El daño físico es una de las causas de rechazo más frustrantes, justamente porque es 100% evitable.</p></div>

<h2>6. Pasaporte próximo a vencer</h2>
<p>No esperes al último mes. Los turnos consulares para renovar pasaporte italiano o español pueden demorar semanas o meses según la sede y la época del año. Si el tuyo vence dentro del próximo año y tenés viajes en mente, empezá el trámite ya.</p>

<h2>7. Renovar o sacar uno nuevo: no siempre es lo mismo</h2>
<p>La diferencia importa. En algunos casos alcanza con renovar el documento vencido o próximo a vencer; en otros —por daño, robo, pérdida o cambio de datos— corresponde iniciar un trámite distinto, con otra documentación. Confirmá cuál es tu caso antes de sacar el turno, para no perder la cita por llevar los papeles equivocados.</p>

<h2>8. Menores de edad</h2>
<p>Los pasaportes de menores suelen tener una vigencia más corta que los de adultos y, para viajar, muchas veces se exigen autorizaciones de ambos progenitores. Si viajás con hijos, revisá tanto la vigencia del pasaporte del menor como los requisitos de autorización de viaje del país de destino y del de salida.</p>

<h2>9. Qué hacer si se pierde o te lo roban</h2>
<p>Si perdés el pasaporte en el exterior, el primer paso es hacer la denuncia policial y luego acudir al consulado del país que emitió el documento (Italia o España) para gestionar un salvoconducto o un pasaporte de emergencia. Tener copias digitales del pasaporte guardadas en tu correo acelera muchísimo el trámite.</p>

<h2>10. Consejos para evitar problemas en migraciones</h2>
<ul>
  <li>Llevá siempre el pasaporte con el que hiciste el trámite de visa o autorización de viaje: los datos deben coincidir.</li>
  <li>Si tenés doble ciudadanía, definí con qué pasaporte entrás y salís de cada país; no siempre conviene usar el mismo.</li>
  <li>Chequeá que tu nombre figure igual en el pasaje y en el pasaporte. Una letra distinta puede complicar el embarque.</li>
  <li>Guardá una foto del pasaporte y de tus reservas en el celular y en tu correo.</li>
</ul>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Cuánto tiempo de vigencia necesito para viajar?', a: 'Depende del país de destino. La regla más frecuente es que el pasaporte siga válido al menos seis meses después de tu fecha de regreso. Antes de sacar el pasaje, verificá el requisito puntual de cada país que vas a visitar.' },
      { q: '¿Puedo viajar con el pasaporte deteriorado si todavía está vigente?', a: 'No conviene. Un pasaporte dañado —mojado, roto o con el chip afectado— puede ser rechazado en migraciones aunque la fecha de vencimiento esté lejos. Lo prudente es tramitar uno nuevo antes de viajar.' },
      { q: '¿Con cuánta anticipación conviene renovar el pasaporte?', a: 'Idealmente, apenas entra en el último año de vigencia y tenés viajes previstos. Los turnos consulares pueden demorar, así que anticiparse evita quedarte sin documento en el momento menos oportuno.' },
      { q: '¿Qué hago si pierdo el pasaporte en el exterior?', a: 'Hacé la denuncia policial y contactá al consulado del país emisor (Italia o España) para gestionar un pasaporte de emergencia o salvoconducto. Tener copias digitales guardadas agiliza mucho el trámite.' },
    ],
    related: ['tengo-derecho-ciudadania-italiana', 'ciudadania-espanola-quien-puede-hoy', 'visa-b1-b2-o-esta-estados-unidos'],
  },

  // ====================================================================== 2
  {
    slug: 'nacionalidad-argentina-requisitos-tramite',
    category: 'Nacionalidad argentina',
    cat: 'arg',
    date: '2026-06-28',
    dateLabel: '28 de junio de 2026',
    readTime: '7 min de lectura',
    image: '../oficina-2.jpg',
    title: 'Nacionalidad argentina: quién puede obtenerla, requisitos y cómo iniciar el trámite',
    excerpt: 'Por nacimiento, por opción o por naturalización: hay más de un camino hacia la nacionalidad argentina. Te contamos cuál corresponde en cada caso y qué necesitás para empezar.',
    body: `
<p>La nacionalidad argentina se puede obtener por distintas vías, y no todas exigen lo mismo ni siguen el mismo procedimiento. Entender a cuál pertenecés es el primer paso: de eso depende qué documentación vas a necesitar y ante qué organismo se tramita.</p>
<p>En términos generales, la ley reconoce tres grandes caminos: la nacionalidad por nacimiento, la nacionalidad por opción y la naturalización para extranjeros. Veamos cada uno.</p>

<h2>Nacionalidad por nacimiento</h2>
<p>Argentina aplica de forma amplia el principio de <em>ius soli</em>: son argentinos quienes nacen en el territorio nacional, sin importar la nacionalidad de sus padres. Es el caso más común y, en general, se acredita directamente con la partida de nacimiento y el DNI.</p>
<p>También se consideran argentinos quienes nacen en buques o aeronaves de guerra de la República, y quienes nacen en representaciones argentinas en el exterior, entre otros supuestos previstos por la ley.</p>

<h2>Nacionalidad por opción</h2>
<p>Es la vía pensada para los <strong>hijos de argentinos que nacieron en el exterior</strong>. Aunque hayan nacido fuera del país, pueden "optar" por la nacionalidad argentina en virtud del vínculo con su madre o padre argentino.</p>
<p>Este trámite es muy frecuente en familias que emigraron y tuvieron hijos afuera, y que hoy quieren que esos hijos tengan también documentación argentina. Se acredita el vínculo filial y la nacionalidad argentina del progenitor.</p>

<div class="callout"><span class="callout-ico">💡</span><p><strong>Importante:</strong> la nacionalidad por opción no depende de dónde vivís hoy, sino del vínculo con tu madre o padre argentino. Es un derecho que se puede ejercer aunque hayan pasado muchos años.</p></div>

<h2>Naturalización para extranjeros</h2>
<p>Es el camino para las personas extranjeras que quieren convertirse en argentinas. La ley exige, como regla general, ser mayor de 18 años y acreditar un período de <strong>residencia continua en el país</strong> —habitualmente de dos años— además de otros requisitos que evalúa la Justicia Federal.</p>
<p>Ese plazo puede reducirse en ciertos supuestos previstos por la ley (por ejemplo, para quienes prestaron determinados servicios a la Nación, tienen cónyuge o hijos argentinos, entre otros). La naturalización se tramita ante los juzgados federales.</p>

<h2>Requisitos generales</h2>
<p>Los requisitos varían según la vía, pero en líneas generales vas a necesitar acreditar:</p>
<ul>
  <li><strong>Identidad:</strong> documento vigente y, según el caso, pasaporte.</li>
  <li><strong>Vínculo o residencia:</strong> partidas de nacimiento y matrimonio para las vías por opción; constancia de residencia continua para la naturalización.</li>
  <li><strong>Antecedentes:</strong> en la naturalización, la Justicia evalúa la conducta y los antecedentes del solicitante.</li>
  <li><strong>Medios de vida lícitos:</strong> se suele requerir demostrar una ocupación o medio de vida honesto.</li>
</ul>

<h2>Documentación</h2>
<p>La documentación depende directamente de la vía. En la nacionalidad por opción, el eje son las partidas que prueban el vínculo con el progenitor argentino. En la naturalización, cobran peso la constancia de residencia, los certificados de antecedentes y la prueba de arraigo en el país. Reunir bien estos documentos desde el inicio es lo que evita idas y vueltas.</p>

<h2>Plazos</h2>
<p>Los tiempos varían según la vía y el organismo interviniente. Los trámites que pasan por la Justicia Federal —como la naturalización— suelen depender de la agenda del juzgado y de la completitud del expediente. Una carpeta ordenada y completa desde el primer día es el mejor modo de acortar los plazos.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Mi hijo que nació en el exterior puede ser argentino?', a: 'Sí. Los hijos de argentinos nacidos fuera del país pueden acceder a la nacionalidad por opción, acreditando el vínculo filial con la madre o el padre argentino. No depende de dónde vivan hoy.' },
      { q: '¿Cuántos años de residencia necesita un extranjero para naturalizarse?', a: 'La regla general es de dos años de residencia continua en el país, además de otros requisitos que evalúa la Justicia Federal. Ese plazo puede reducirse en algunos supuestos previstos por la ley.' },
      { q: '¿La naturalización se pide en un juzgado?', a: 'Sí. El trámite de naturalización de extranjeros se realiza ante los juzgados federales, que analizan la residencia, los antecedentes y demás requisitos del solicitante.' },
      { q: '¿Perder la nacionalidad de origen es requisito para ser argentino?', a: 'No. Argentina admite la doble o múltiple nacionalidad, por lo que naturalizarse o ejercer la opción no exige renunciar a la nacionalidad de origen.' },
    ],
    related: ['pasaporte-italiano-espanol-antes-de-viajar', 'tengo-derecho-ciudadania-italiana', 'ciudadania-espanola-quien-puede-hoy'],
  },

  // ====================================================================== 1
  {
    slug: 'visa-b1-b2-o-esta-estados-unidos',
    category: 'Visas',
    cat: 'visas',
    date: '2026-06-15',
    dateLabel: '15 de junio de 2026',
    readTime: '6 min de lectura',
    image: '../visas.jpg',
    title: '¿Visa B1/B2 o ESTA? Todo lo que necesitás saber antes de viajar a Estados Unidos',
    excerpt: 'Son dos formas distintas de entrar a Estados Unidos, y no todos pueden elegir entre ellas. Te explicamos las diferencias, quién necesita cada una y los errores que provocan rechazos.',
    body: `
<p>Cuando alguien planea viajar a Estados Unidos por turismo o por negocios, aparecen dos siglas que suelen confundirse: la visa B1/B2 y el ESTA. Entender la diferencia es clave, porque de eso depende cómo tenés que preparar tu viaje, y elegir mal puede costarte el ingreso.</p>
<p>La confusión es habitual, sobre todo en quienes tienen doble ciudadanía. Vamos por partes.</p>

<h2>¿Qué es la visa B1/B2?</h2>
<p>La B1/B2 es la <strong>visa de turista y negocios</strong> de Estados Unidos. La "B1" cubre viajes de negocios (reuniones, conferencias, negociaciones) y la "B2" cubre turismo, visitas a familiares o tratamientos médicos. En la práctica se emiten juntas.</p>
<p>Para obtenerla hay que completar una solicitud, pagar el arancel y asistir a una entrevista en la Embajada o Consulado de EE. UU. El funcionario consular evalúa el caso y decide si la otorga.</p>

<h2>¿Qué es el ESTA?</h2>
<p>El ESTA es una <strong>autorización electrónica de viaje</strong>, no una visa. Funciona dentro del <em>Visa Waiver Program</em> (Programa de Exención de Visa), que permite a ciudadanos de determinados países viajar a EE. UU. por turismo o negocios por estadías cortas sin tramitar visa, con solo completar un formulario en línea.</p>

<div class="callout"><span class="callout-ico">⚠️</span><p><strong>Dato clave para argentinos:</strong> Argentina <strong>no</strong> forma parte del Programa de Exención de Visa. Es decir: quien viaja únicamente con pasaporte argentino <strong>no puede usar ESTA</strong> y necesita sí o sí la visa B1/B2.</p></div>

<h2>Diferencias entre ambos</h2>
<ul>
  <li><strong>Naturaleza:</strong> la B1/B2 es una visa que se estampa en el pasaporte tras una entrevista; el ESTA es una autorización electrónica que se tramita online.</li>
  <li><strong>Quién puede usarlo:</strong> el ESTA solo está disponible para ciudadanos de países del Visa Waiver Program; la visa B1/B2 la puede solicitar cualquier persona, incluida la de países que no están en ese programa.</li>
  <li><strong>Trámite:</strong> el ESTA es rápido y en línea; la B1/B2 requiere formulario, arancel y entrevista consular.</li>
</ul>

<h2>Quién necesita visa y quién puede viajar con ESTA</h2>
<p>Acá es donde la doble ciudadanía cambia todo. Si sos argentino y también tenés pasaporte <strong>italiano o español</strong> —dos países que sí integran el Visa Waiver Program—, es probable que puedas viajar con ESTA usando tu pasaporte europeo, en lugar de tramitar la visa americana con el argentino.</p>
<p>Por eso, antes de iniciar el trámite de visa, conviene revisar qué pasaportes tenés: en muchos casos, la ciudadanía europea que ya obtuviste te simplifica también el viaje a Estados Unidos.</p>

<h2>Documentación requerida</h2>
<p>Para la visa B1/B2 vas a necesitar, en general: pasaporte vigente, la solicitud completa, la foto con los requisitos oficiales, el comprobante de pago del arancel y la documentación que respalde el motivo del viaje y tu arraigo en Argentina. Para el ESTA, alcanza con un pasaporte válido de un país del programa y los datos del viaje.</p>

<h2>Errores frecuentes que pueden generar un rechazo</h2>
<ul>
  <li>Completar la solicitud con datos que no coinciden con el pasaporte.</li>
  <li>No demostrar vínculos que acrediten que vas a regresar (trabajo, familia, estudios).</li>
  <li>Antecedentes de estadías irregulares o problemas migratorios previos.</li>
  <li>Contradicciones o inseguridad en la entrevista consular.</li>
  <li>Intentar usar ESTA sin ser ciudadano de un país del Visa Waiver Program.</li>
</ul>

<h2>Qué hacer si la visa fue denegada</h2>
<p>Una negativa no siempre es definitiva. En muchos casos se puede volver a solicitar, sobre todo si en la primera entrevista faltó respaldo documental o quedó algo mal explicado. Lo importante es entender el motivo del rechazo antes de reintentar, para corregir lo que realmente influyó en la decisión.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Soy argentino, ¿puedo viajar a Estados Unidos con ESTA?', a: 'Si viajás únicamente con pasaporte argentino, no: Argentina no integra el Programa de Exención de Visa, así que necesitás la visa B1/B2. Si además tenés pasaporte italiano o español, en cambio, probablemente puedas usar ESTA con ese documento.' },
      { q: '¿El ESTA es una visa?', a: 'No. El ESTA es una autorización electrónica de viaje dentro del Visa Waiver Program, no una visa. Se tramita en línea y solo está disponible para ciudadanos de los países incluidos en ese programa.' },
      { q: 'Me rechazaron la visa, ¿puedo volver a pedirla?', a: 'En general sí. Una denegatoria no siempre es definitiva. Conviene entender el motivo del rechazo y reforzar la documentación o la preparación antes de solicitarla nuevamente.' },
      { q: '¿Tener ciudadanía italiana o española me ayuda para entrar a EE. UU.?', a: 'Sí. Italia y España integran el Visa Waiver Program, por lo que con esos pasaportes solés poder viajar con ESTA, sin necesidad de tramitar la visa americana con el pasaporte argentino.' },
    ],
    related: ['pasaporte-italiano-espanol-antes-de-viajar', 'nacionalidad-argentina-requisitos-tramite', 'tengo-derecho-ciudadania-italiana'],
  },

  // ====================================================================== 4
  {
    slug: 'tengo-derecho-ciudadania-italiana',
    category: 'Ciudadanía italiana',
    cat: 'italiana',
    date: '2026-05-20',
    dateLabel: '20 de mayo de 2026',
    readTime: '7 min de lectura',
    image: '../oficina-1.jpg',
    title: '¿Tengo derecho a la ciudadanía italiana? Cómo saberlo paso a paso',
    excerpt: 'La ciudadanía italiana se transmite por sangre, pero las reglas cambiaron en 2025. Te explicamos cómo saber, paso a paso, si tu caso encuadra hoy.',
    body: `
<p>La pregunta que más recibimos es también la más lógica: "tengo un bisabuelo italiano, ¿me corresponde la ciudadanía?". La respuesta ya no es tan automática como antes, porque en 2025 Italia modificó de fondo las reglas de la ciudadanía por descendencia. Por eso conviene analizarlo con cuidado.</p>
<p>Vamos paso a paso para que puedas ubicar tu caso.</p>

<h2>Quién transmite la ciudadanía</h2>
<p>La ciudadanía italiana se basa en el principio de <em>iure sanguinis</em>: se transmite por vínculo de sangre, de generación en generación, a partir de un antepasado italiano. Durante décadas, ese principio se aplicó sin límite de generaciones: bastaba reconstruir la cadena hasta el italiano que emigró, sin importar cuántas generaciones hubiera de por medio.</p>

<div class="callout"><span class="callout-ico">⚠️</span><p><strong>Cambio importante (2025):</strong> Italia reformó el régimen de ciudadanía por descendencia. Las nuevas reglas restringieron el acceso automático, poniendo el foco en las generaciones más cercanas (por ejemplo, quienes tienen un progenitor o abuelo italiano). Esto cambió el panorama para muchas familias, y por eso hoy es imprescindible analizar cada caso con la normativa vigente antes de ilusionarse o descartar.</p></div>

<h2>Casos más comunes</h2>
<p>En la práctica, las consultas suelen encuadrar en algunos escenarios típicos:</p>
<ul>
  <li><strong>Hijo o nieto de italiano:</strong> son los vínculos más cercanos y, en general, los que hoy tienen el camino más claro bajo las nuevas reglas.</li>
  <li><strong>Bisnieto o tataranieto:</strong> antes de la reforma era una vía habitual; hoy requiere un análisis específico para saber si el caso todavía encuadra.</li>
  <li><strong>Línea materna anterior a 1948:</strong> un capítulo aparte, que explicamos abajo.</li>
</ul>

<h2>El árbol genealógico</h2>
<p>Todo empieza por reconstruir la cadena: desde el antepasado italiano hasta vos, sin que se corte ningún eslabón. Cada vínculo se prueba con partidas de nacimiento, matrimonio y defunción. Un solo dato faltante o una partida que no aparece puede frenar todo el expediente, así que este trabajo de reconstrucción es la columna vertebral del trámite.</p>

<h2>Documentación necesaria</h2>
<p>Vas a necesitar, en líneas generales:</p>
<ul>
  <li>Partida de nacimiento del antepasado italiano (emitida en Italia).</li>
  <li>Partidas de nacimiento, matrimonio y defunción de cada eslabón de la cadena.</li>
  <li>Un certificado que acredite que el antepasado italiano no se naturalizó antes del nacimiento del siguiente eslabón (o la fecha en que lo hizo).</li>
  <li>La documentación traducida y legalizada/apostillada según corresponda.</li>
</ul>

<h2>El caso de la línea materna anterior a 1948</h2>
<p>Históricamente, las mujeres italianas no podían transmitir la ciudadanía a sus hijos nacidos antes de 1948. Cuando el vínculo pasa por una mujer y el hijo nació antes de esa fecha, el reconocimiento no se resuelve por la vía administrativa común, sino que suele requerir un <strong>proceso judicial en Italia</strong>. Son casos perfectamente viables, pero con un procedimiento distinto.</p>

<h2>Errores frecuentes</h2>
<ul>
  <li>Dar por hecho que "el bisabuelo italiano" alcanza sin revisar la normativa actual.</li>
  <li>No verificar si hubo naturalización del antepasado y en qué fecha.</li>
  <li>Frenar el trámite por una partida con errores en lugar de rectificarla.</li>
  <li>No considerar la vía judicial cuando el caso lo requiere.</li>
</ul>

<p>La mejor forma de saber si te corresponde es un análisis de viabilidad: revisar tu árbol, las fechas clave y la documentación disponible a la luz de las reglas vigentes. Con eso sabés, con certeza, si tu caso encuadra y por qué vía.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Sigue existiendo la ciudadanía italiana por descendencia?', a: 'Sí, pero con reglas que cambiaron en 2025. La reforma restringió el acceso automático y puso el foco en los vínculos más cercanos. Por eso cada caso debe analizarse con la normativa vigente antes de iniciar el trámite.' },
      { q: '¿Hasta qué generación puedo reclamar la ciudadanía italiana?', a: 'Antes no había límite de generaciones; hoy el panorama es distinto según la reforma reciente. Lo prudente es hacer un análisis de viabilidad de tu árbol genealógico para determinar si tu caso encuadra.' },
      { q: '¿Qué pasa si el vínculo pasa por una mujer antes de 1948?', a: 'Esos casos suelen requerir un proceso judicial en Italia, porque antes de 1948 las mujeres no podían transmitir la ciudadanía por la vía administrativa. Son viables, pero con un procedimiento diferente.' },
      { q: '¿Una partida con errores me impide tramitar?', a: 'No necesariamente. Los errores en partidas (nombres, fechas) suelen poder rectificarse. Lo que no conviene es presentar la documentación sin corregir esas diferencias, porque frenan el expediente.' },
    ],
    related: ['errores-comunes-ciudadania-italiana', 'pasaporte-italiano-espanol-antes-de-viajar', 'ciudadania-espanola-quien-puede-hoy'],
  },

  // ====================================================================== 5
  {
    slug: 'errores-comunes-ciudadania-italiana',
    category: 'Ciudadanía italiana',
    cat: 'italiana',
    date: '2026-05-06',
    dateLabel: '6 de mayo de 2026',
    readTime: '6 min de lectura',
    image: '../oficina-3.jpg',
    title: 'Los 8 errores más comunes que retrasan una ciudadanía italiana',
    excerpt: 'La mayoría de las demoras en una ciudadanía italiana no vienen de Italia: vienen de errores en la documentación que se podían prevenir desde el primer día.',
    body: `
<p>Cuando una ciudadanía italiana se demora meses de más, casi nunca es por culpa del organismo interviniente. En la enorme mayoría de los casos, el problema estaba en la carpeta desde el principio: una partida con un error, una traducción que no cumple, una apostilla que falta. Y todo eso se puede prevenir.</p>
<p>Estos son los ocho errores que más veces vemos retrasar un expediente.</p>

<h2>1. Partidas con errores</h2>
<p>Una fecha equivocada, un apellido mal transcripto o un dato que no coincide entre dos documentos alcanza para frenar todo. Las partidas son la prueba del vínculo, y cualquier inconsistencia obliga a rectificar antes de seguir. Detectar estos errores al inicio, y no cuando ya presentaste, ahorra meses.</p>

<h2>2. Nombres mal escritos</h2>
<p>Es clásico: el apellido italiano que en Argentina se anotó "castellanizado", o un nombre que aparece de dos formas distintas en diferentes actas. Esas diferencias, aunque parezcan menores, tienen que resolverse para que la cadena de vínculos cierre sin dudas.</p>

<div class="callout"><span class="callout-ico">💡</span><p><strong>Tip:</strong> antes de traducir o apostillar nada, revisá que el nombre y el apellido del antepasado italiano figuren igual en todas las partidas. Corregir después de haber pagado traducciones es tirar plata.</p></div>

<h2>3. Traducciones</h2>
<p>La documentación en español debe traducirse al italiano según los requisitos formales que se exijan. Una traducción hecha sin cumplir esos requisitos, o incompleta, puede ser rechazada. No es un trámite para improvisar ni para resolver con cualquier traductor.</p>

<h2>4. Apostillas</h2>
<p>La apostilla (Convenio de La Haya) es la que da validez internacional a los documentos públicos. Falta de apostilla, apostilla sobre el documento equivocado o apostillar antes de tener el documento definitivo son errores frecuentes que obligan a rehacer pasos.</p>

<h2>5. Falta de documentación</h2>
<p>Un eslabón sin su partida corta toda la cadena. A veces falta la partida de matrimonio de una generación intermedia, o la de defunción de un antepasado. Reunir todo el conjunto antes de avanzar evita que el expediente quede detenido esperando un papel.</p>

<h2>6. Reconstrucción genealógica incorrecta</h2>
<p>Armar mal el árbol —saltear una generación, confundir un vínculo, asumir una fecha— hace que la carpeta no cierre. La reconstrucción tiene que ser precisa y estar respaldada por documentos, no por memoria familiar.</p>

<h2>7. Demoras evitables</h2>
<p>Pedir las partidas de a una en lugar de en paralelo, esperar a último momento para sacar turnos, o no anticipar los tiempos de los registros civiles y consulados: son demoras autoinfligidas. Un buen plan de trabajo desde el inicio comprime muchísimo los plazos totales.</p>

<h2>8. No prevenir en lugar de corregir</h2>
<p>El error que engloba a todos los demás es reaccionar tarde. Cada problema de esta lista es más barato y más rápido de resolver <strong>antes</strong> de presentar que después. Un análisis inicial serio de la documentación es la mejor inversión del trámite.</p>

<h2>Cómo prevenirlas</h2>
<ul>
  <li>Empezá por un relevamiento completo de partidas y fechas antes de gastar en traducciones o apostillas.</li>
  <li>Detectá y rectificá los errores de nombres y fechas al inicio.</li>
  <li>Ordená el árbol genealógico con respaldo documental de cada vínculo.</li>
  <li>Planificá los pedidos de documentación en paralelo, no de a uno.</li>
</ul>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Por qué se demora tanto una ciudadanía italiana?', a: 'La mayoría de las demoras no vienen del organismo, sino de errores en la carpeta: partidas con inconsistencias, traducciones que no cumplen requisitos, apostillas faltantes o documentación incompleta. Prevenir esos errores al inicio acorta mucho los plazos.' },
      { q: '¿Puedo corregir una partida con errores?', a: 'Sí. Los errores en nombres o fechas suelen poder rectificarse. Lo importante es hacerlo antes de traducir y apostillar, para no rehacer pasos ni gastar de más.' },
      { q: '¿Qué es la apostilla y por qué importa?', a: 'Es la certificación del Convenio de La Haya que le da validez internacional a los documentos públicos. Sin apostilla, o apostillando el documento equivocado, el expediente puede frenarse.' },
      { q: '¿Conviene pedir las partidas de a una?', a: 'No. Pedirlas en paralelo, con un plan de trabajo ordenado, comprime los tiempos totales del trámite. Ir de a una suele generar demoras evitables.' },
    ],
    related: ['tengo-derecho-ciudadania-italiana', 'errores-comunes-ciudadania-espanola', 'pasaporte-italiano-espanol-antes-de-viajar'],
  },

  // ====================================================================== 6
  {
    slug: 'ciudadania-espanola-quien-puede-hoy',
    category: 'Ciudadanía española',
    cat: 'espanola',
    date: '2026-04-22',
    dateLabel: '22 de abril de 2026',
    readTime: '7 min de lectura',
    image: '../pasaporte-carpeta.jpg',
    title: 'Ciudadanía española: qué vías siguen abiertas hoy para argentinos',
    excerpt: 'La ventana de la Ley de Memoria Democrática ya cerró, pero la ciudadanía española sigue siendo posible por otras vías. Te explicamos cuáles siguen vigentes.',
    body: `
<p>Durante los últimos años, la Ley de Memoria Democrática —conocida popularmente como "la ley de nietos"— fue la gran protagonista de las consultas por ciudadanía española. Abrió un camino excepcional para hijos, nietos y bisnietos de españoles. Pero esa ventana tenía fecha de cierre, y ya pasó.</p>
<p>La buena noticia es que la Memoria Democrática no era la única vía. La ciudadanía española sigue siendo posible por otros caminos que están plenamente vigentes. Veamos el panorama real, hoy.</p>

<div class="callout"><span class="callout-ico">⚠️</span><p><strong>Lo primero, para no confundirse:</strong> el plazo especial para solicitar por la Ley de Memoria Democrática venció. Si tu información se basa en publicaciones de hace un tiempo, es probable que estés mirando una ventana que ya no está abierta. Por eso conviene analizar tu caso con las vías que siguen vigentes.</p></div>

<h2>Nacionalidad de origen</h2>
<p>Hay personas que son españolas de origen sin saberlo o sin haberlo tramitado: por ejemplo, quienes descienden directamente de un español en determinadas condiciones. Determinar si te corresponde la nacionalidad de origen es siempre el primer análisis, porque es la vía más sólida cuando aplica.</p>

<h2>Nacionalidad por opción</h2>
<p>La vía de la opción está pensada, entre otros supuestos, para personas que están bajo la patria potestad de un español, o que descienden de padre o madre originariamente español y nacido en España, según los casos que prevé la ley. Es un camino que sigue disponible y que conviene revisar en cada situación familiar.</p>

<h2>Nacionalidad por residencia</h2>
<p>Para quienes viven en España, la residencia legal y continuada abre la puerta a la nacionalidad. El plazo general es prolongado, pero para los <strong>nacionales de países iberoamericanos —Argentina entre ellos— se reduce a dos años</strong> de residencia legal. Es una de las vías más relevantes para quien planea instalarse en España.</p>

<h2>Nacionalidad para sefardíes</h2>
<p>Existió una vía específica para descendientes de sefardíes originarios de España, con un plazo de solicitud que también tuvo fecha de cierre. Al igual que con la Memoria Democrática, es importante no confundir una ventana ya cerrada con una vía todavía abierta.</p>

<h2>Carta de naturaleza</h2>
<p>Es una vía excepcional, otorgada de forma discrecional cuando concurren circunstancias particulares. No es un camino de aplicación general, pero existe y en ciertos casos muy puntuales puede ser la opción.</p>

<h2>Entonces, ¿por dónde empiezo?</h2>
<p>El error más común es asumir la vía equivocada. Lo correcto es al revés: primero se analiza tu caso —tu línea de descendencia, las fechas, dónde vivís y tu proyecto— y de ahí surge cuál de estas vías es la que realmente te corresponde hoy. A veces hay más de una posible, y conviene elegir la más sólida.</p>

<div class="callout"><span class="callout-ico">💡</span><p><strong>En resumen:</strong> que la Memoria Democrática haya cerrado no significa que perdiste la posibilidad. Significa que hay que mirar tu caso con las vías vigentes: origen, opción, residencia y demás. El análisis correcto es lo que evita tanto ilusionarse de más como descartar sin razón.</p></div>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Todavía puedo pedir la ciudadanía por la Ley de Memoria Democrática?', a: 'El plazo especial de esa ley (la "ley de nietos") ya venció. Por eso hoy hay que analizar tu caso con las vías que siguen vigentes: nacionalidad de origen, por opción, por residencia y demás supuestos previstos por la ley.' },
      { q: '¿Es cierto que los argentinos tienen un plazo menor por residencia?', a: 'Sí. El plazo general de residencia para nacionalizarse es prolongado, pero para nacionales de países iberoamericanos —Argentina incluida— se reduce a dos años de residencia legal y continuada en España.' },
      { q: 'Cerró la ley de nietos, ¿perdí la posibilidad de ser español?', a: 'No necesariamente. La Memoria Democrática era una de varias vías. Según tu descendencia y tu situación, pueden corresponderte la nacionalidad de origen, la opción u otras vías vigentes. Conviene analizarlo caso por caso.' },
      { q: '¿Puedo tener ciudadanía española y argentina a la vez?', a: 'Por el Convenio de doble nacionalidad entre Argentina y España, en general es posible mantener ambas. Cada situación conviene revisarla, pero la doble nacionalidad hispano-argentina está contemplada.' },
    ],
    related: ['errores-comunes-ciudadania-espanola', 'tengo-derecho-ciudadania-italiana', 'pasaporte-italiano-espanol-antes-de-viajar'],
  },

  // ====================================================================== 7
  {
    slug: 'errores-comunes-ciudadania-espanola',
    category: 'Ciudadanía española',
    cat: 'espanola',
    date: '2026-04-08',
    dateLabel: '8 de abril de 2026',
    readTime: '6 min de lectura',
    image: '../oficina-2.jpg',
    title: 'Ciudadanía española: los errores más frecuentes que pueden hacer fracasar tu trámite',
    excerpt: 'Actas con errores, documentación incompleta, plazos vencidos y turnos perdidos. Los tropiezos más comunes en una ciudadanía española casi siempre son evitables.',
    body: `
<p>Un trámite de ciudadanía española puede caerse por motivos que no tienen nada que ver con el fondo del derecho. Muchas veces el problema es puramente formal: un acta que no coincide, un documento que faltaba, un turno que se dejó vencer. Y lo frustrante es que casi todos esos tropiezos se pueden evitar.</p>
<p>Estos son los errores que más veces vemos, y cómo prevenirlos.</p>

<h2>Actas incorrectas</h2>
<p>Las partidas y actas son la base de todo el expediente. Un nombre mal escrito, una fecha que no coincide entre dos documentos o un apellido transcripto de forma distinta alcanzan para trabar el trámite. Antes de presentar, cada acta tiene que ser revisada y, si hay errores, rectificada.</p>

<h2>Documentación incompleta</h2>
<p>Presentar el expediente al que le falta una pieza es una de las causas más comunes de demora. Cada vía tiene su listado de documentos, y presentar "casi todo" no alcanza: el expediente queda detenido esperando lo que falta. Reunir el conjunto completo antes de iniciar es lo que evita ese freno.</p>

<div class="callout"><span class="callout-ico">💡</span><p><strong>Consejo:</strong> armá un checklist de la documentación de tu vía y no inicies hasta tenerlo completo. Es preferible demorar el inicio unos días que dejar el expediente varado por un papel.</p></div>

<h2>Plazos</h2>
<p>Muchos pasos del trámite tienen plazos: para presentar, para completar, para responder un requerimiento. Dejar vencer un plazo puede obligar a rehacer el trámite desde el principio. Llevar un control de fechas es tan importante como reunir los papeles.</p>

<h2>Turnos</h2>
<p>Los turnos consulares son un recurso escaso. Perder una cita por no llevar la documentación correcta, o dejar vencer un usuario o un turno ya asignado, puede significar meses de espera para conseguir otro. Llegar a la cita con la carpeta completa y en orden es clave.</p>

<h2>Diferencias entre consulados</h2>
<p>No todos los consulados aplican los criterios de la misma manera ni piden exactamente lo mismo. Lo que sirvió para un caso en una sede puede no ajustarse a otra. Conocer los criterios de la sede que te corresponde evita presentar algo que después te van a observar.</p>

<h2>Recomendaciones</h2>
<ul>
  <li>Revisá todas las actas y rectificá los errores <strong>antes</strong> de presentar.</li>
  <li>Completá el 100% de la documentación de tu vía antes de iniciar.</li>
  <li>Llevá un control de plazos y de la validez de turnos y usuarios.</li>
  <li>Informate sobre los criterios de la sede consular que te corresponde.</li>
  <li>Ante la duda, hacé revisar la carpeta por un profesional antes de presentarla.</li>
</ul>

<p>La lógica de fondo es simple: en la ciudadanía española, prevenir siempre es más rápido y más barato que corregir. Una carpeta bien armada desde el inicio es la que llega a buen puerto sin sobresaltos.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Un error en una partida puede frenar mi ciudadanía española?', a: 'Sí. Las actas son la base del expediente, y una inconsistencia en nombres o fechas puede trabar el trámite. Lo recomendable es revisar y rectificar los errores antes de presentar.' },
      { q: '¿Qué pasa si presento la documentación incompleta?', a: 'El expediente queda detenido esperando lo que falta, lo que genera demoras. Por eso conviene reunir el 100% de la documentación de tu vía antes de iniciar.' },
      { q: '¿Todos los consulados piden lo mismo?', a: 'No siempre. Los criterios y requisitos pueden variar entre sedes. Conviene informarse sobre lo que exige el consulado que te corresponde antes de armar y presentar la carpeta.' },
      { q: '¿Qué pasa si dejo vencer un turno consular?', a: 'Los turnos son un recurso escaso y perder una cita puede significar meses de espera para conseguir otra. Por eso es clave llegar con la documentación completa y en orden.' },
    ],
    related: ['ciudadania-espanola-quien-puede-hoy', 'errores-comunes-ciudadania-italiana', 'pasaporte-italiano-espanol-antes-de-viajar'],
  },

  // ====================================================================== 8
  {
    slug: 'fallecio-un-familiar-primeros-pasos',
    category: 'Sucesiones',
    cat: 'sucesiones',
    date: '2026-03-18',
    dateLabel: '18 de marzo de 2026',
    readTime: '6 min de lectura',
    image: '../oficina-1.jpg',
    title: 'Falleció un familiar: cuáles son los primeros pasos que deberías dar',
    excerpt: 'En medio del dolor, aparecen decisiones legales que conviene tomar con orden. Esta guía te ayuda a saber qué reunir, qué evitar y cómo se inicia una sucesión.',
    body: `
<p>Cuando fallece un ser querido, lo último en lo que uno quiere pensar es en trámites. Sin embargo, hay decisiones legales y patrimoniales que conviene ordenar desde temprano, no por apuro, sino para evitar problemas más adelante. Esta guía busca darte claridad en un momento en que todo parece confuso.</p>
<p>No hace falta resolver todo de golpe. Sí conviene saber por dónde empezar.</p>

<h2>Qué documentación reunir</h2>
<p>El primer paso concreto es juntar la documentación básica. Sin apuro, pero de manera ordenada:</p>
<ul>
  <li><strong>Partida de defunción</strong> del familiar fallecido.</li>
  <li><strong>Documentos que acrediten el vínculo:</strong> partidas de nacimiento de los hijos, partida de matrimonio del cónyuge, según corresponda.</li>
  <li><strong>Documentación de los bienes:</strong> escrituras de inmuebles, títulos de vehículos, datos de cuentas bancarias, inversiones, etc.</li>
  <li><strong>Testamento</strong>, si existiera, o cualquier indicio de que el fallecido dejó uno.</li>
</ul>

<h2>Qué conviene no hacer</h2>
<p>Hay decisiones que, tomadas apuradas, después se complican:</p>
<ul>
  <li>No repartas ni vendas bienes del fallecido antes de tener la sucesión en marcha. Esos bienes forman parte del acervo hereditario y hay un procedimiento para disponer de ellos.</li>
  <li>No des de baja ni vacíes cuentas por tu cuenta sin asesoramiento.</li>
  <li>No firmes acuerdos entre herederos "de palabra" sin encuadrarlos legalmente.</li>
</ul>

<div class="callout"><span class="callout-ico">⚠️</span><p><strong>Atención:</strong> disponer de los bienes del fallecido antes de iniciar la sucesión suele generar más problemas de los que resuelve. Lo prudente es ordenar primero el trámite y después avanzar sobre el patrimonio.</p></div>

<h2>Los bienes</h2>
<p>Todo lo que era del fallecido —inmuebles, autos, cuentas, inversiones, y también las deudas— integra lo que se llama el acervo hereditario. La sucesión es, justamente, el proceso que determina quiénes son los herederos y cómo se transmite ese patrimonio. Por eso el primer trabajo es tener claro qué bienes hay.</p>

<h2>Los bancos</h2>
<p>Las cuentas y los plazos fijos del fallecido no se liberan automáticamente a los familiares. Los bancos suelen requerir que la sucesión esté iniciada y que se acredite quiénes son los herederos para poder disponer de esos fondos. Conocer este circuito desde el principio evita frustraciones.</p>

<h2>Los inmuebles</h2>
<p>Una propiedad a nombre del fallecido no puede venderse ni transferirse hasta que la sucesión reconozca a los herederos y se inscriba esa transmisión. Es uno de los motivos más frecuentes por los que conviene no demorar el inicio del trámite.</p>

<h2>Los plazos</h2>
<p>Si bien no siempre hay una urgencia inmediata, dejar pasar demasiado tiempo tiene costos: se acumulan impuestos y expensas, se complica ubicar documentación, y a veces cambian las circunstancias de los herederos. Iniciar la sucesión en un tiempo razonable es la mejor forma de proteger el patrimonio familiar.</p>

<h2>El inicio de la sucesión</h2>
<p>La sucesión es un proceso judicial que se inicia con la presentación correspondiente y culmina, en los casos más habituales, con la declaratoria de herederos: el acto por el cual se reconoce quiénes heredan. A partir de ahí se puede inscribir la transmisión de los bienes y disponer de ellos. Contar con acompañamiento profesional ordena cada etapa y evita pasos en falso.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Puedo usar el dinero de la cuenta del fallecido?', a: 'En general no de forma automática. Los bancos suelen requerir que la sucesión esté iniciada y que se acredite quiénes son los herederos para liberar los fondos. Conviene no disponer de ese dinero sin asesoramiento.' },
      { q: '¿Cuánto tiempo tengo para iniciar la sucesión?', a: 'No siempre hay una urgencia inmediata, pero demorar demasiado tiene costos: impuestos y expensas que se acumulan, documentación más difícil de reunir y circunstancias que cambian. Lo prudente es iniciarla en un tiempo razonable.' },
      { q: '¿Qué documentación necesito para empezar?', a: 'Principalmente la partida de defunción, los documentos que acreditan el vínculo (partidas de nacimiento y matrimonio) y la documentación de los bienes (escrituras, títulos, datos de cuentas). Si hay testamento, también.' },
      { q: '¿Puedo vender o repartir los bienes antes de la sucesión?', a: 'No conviene. Los bienes integran el acervo hereditario y hay un procedimiento para disponer de ellos. Repartir o vender antes de tener la sucesión en marcha suele generar problemas.' },
    ],
    related: ['vender-casa-heredada-sin-sucesion', 'herencia-sin-testamento-quien-hereda', 'nacionalidad-argentina-requisitos-tramite'],
  },

  // ====================================================================== 9
  {
    slug: 'vender-casa-heredada-sin-sucesion',
    category: 'Sucesiones',
    cat: 'sucesiones',
    date: '2026-02-24',
    dateLabel: '24 de febrero de 2026',
    readTime: '6 min de lectura',
    image: '../oficina-3.jpg',
    title: '¿Se puede vender una casa heredada sin hacer la sucesión?',
    excerpt: 'Es una de las consultas más frecuentes. La respuesta corta es no, pero hay matices, riesgos y algunas alternativas que conviene conocer antes de comprometerte.',
    body: `
<p>"Heredé la casa de mis padres y quiero venderla, ¿tengo que hacer sí o sí la sucesión?" Es una de las preguntas que más escuchamos, y se entiende: la sucesión parece un trámite largo y la tentación de saltearla es grande. Vamos con la respuesta clara y con los matices que importan.</p>

<h2>La respuesta corta</h2>
<p>No. Como regla general, <strong>no se puede escriturar la venta de un inmueble que sigue a nombre del fallecido</strong>. Para vender, primero hay que hacer la sucesión: es el proceso que reconoce a los herederos y permite inscribir la transmisión de la propiedad a su nombre. Recién entonces los herederos pueden vender.</p>

<div class="callout"><span class="callout-ico">⚠️</span><p><strong>El punto clave:</strong> quien vende tiene que ser el titular del inmueble. Mientras la propiedad figure a nombre de la persona fallecida, no hay una firma válida que pueda transmitir el dominio. La sucesión es lo que "actualiza" esa titularidad.</p></div>

<h2>Excepciones y matices</h2>
<p>Que no se pueda escriturar sin sucesión no significa que haya que esperar a tenerla 100% terminada para empezar a moverse. En la práctica:</p>
<ul>
  <li>Se puede iniciar la sucesión y, en paralelo, avanzar con la búsqueda de comprador.</li>
  <li>Una vez dictada la declaratoria de herederos e inscripta la transmisión, la venta se destraba.</li>
  <li>En ciertos casos, con la sucesión ya avanzada, se pueden estructurar operaciones con el debido encuadre legal.</li>
</ul>
<p>La clave es no comprometerse a una escritura en una fecha imposible de cumplir si la sucesión todavía no está en el punto necesario.</p>

<h2>Los riesgos de intentar atajos</h2>
<p>Aparecen ofertas y "soluciones" para vender sin sucesión que conviene mirar con mucho cuidado. Comprometerse a vender un inmueble que todavía está a nombre del fallecido, sin el proceso correspondiente, puede derivar en:</p>
<ul>
  <li>Operaciones que no se pueden escriturar en tiempo y forma.</li>
  <li>Conflictos entre herederos si no todos están de acuerdo.</li>
  <li>Compradores que se retiran al advertir que el título no está en condiciones.</li>
</ul>

<h2>El boleto de compraventa</h2>
<p>A veces se ofrece firmar un boleto de compraventa mientras se resuelve la sucesión. El boleto es un compromiso, pero no transfiere el dominio: la transmisión de la propiedad se perfecciona con la escritura y su inscripción. Firmar un boleto sin tener claro el estado de la sucesión puede generar obligaciones difíciles de cumplir. Si se usa, tiene que estar bien encuadrado.</p>

<h2>La escritura</h2>
<p>La escritura traslativa de dominio es el acto que efectivamente transfiere la propiedad, y para firmarla el vendedor tiene que ser el titular registral. Por eso todo el camino pasa por lo mismo: primero la sucesión reconoce a los herederos e inscribe la propiedad a su nombre, y después se puede escriturar la venta.</p>

<h2>Qué conviene hacer</h2>
<p>Si heredaste un inmueble y querés venderlo, el orden lógico es: iniciar la sucesión cuanto antes, avanzar hasta la declaratoria de herederos e inscripción, y recién entonces cerrar la venta. Hacer las cosas en ese orden es lo que da seguridad tanto a los herederos como al comprador, y evita operaciones que se caen a último momento.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: '¿Puedo vender la casa que heredé sin hacer la sucesión?', a: 'Como regla general, no. Para escriturar la venta, la propiedad tiene que estar a nombre de los herederos, y eso se logra con la sucesión. Recién después de reconocer a los herederos e inscribir la transmisión se puede vender.' },
      { q: '¿Puedo buscar comprador mientras hago la sucesión?', a: 'Sí. Se puede iniciar la sucesión y, en paralelo, avanzar con la búsqueda de comprador. Lo que no conviene es comprometerse a una escritura en una fecha que la sucesión no permita cumplir.' },
      { q: '¿El boleto de compraventa me permite vender sin sucesión?', a: 'El boleto es un compromiso, pero no transfiere el dominio: eso ocurre con la escritura y su inscripción. Firmar un boleto sin tener claro el estado de la sucesión puede generar obligaciones difíciles de cumplir.' },
      { q: '¿Qué pasa si no todos los herederos están de acuerdo con vender?', a: 'La venta requiere la conformidad de los herederos. Si hay desacuerdo, hay mecanismos legales para encauzar la situación, pero conviene resolverlo con asesoramiento antes de comprometer la operación.' },
    ],
    related: ['fallecio-un-familiar-primeros-pasos', 'herencia-sin-testamento-quien-hereda', 'nacionalidad-argentina-requisitos-tramite'],
  },

  // ====================================================================== 10
  {
    slug: 'herencia-sin-testamento-quien-hereda',
    category: 'Sucesiones',
    cat: 'sucesiones',
    date: '2026-02-10',
    dateLabel: '10 de febrero de 2026',
    readTime: '6 min de lectura',
    image: '../oficina-2.jpg',
    title: 'Herencia sin testamento: quién hereda y en qué orden',
    excerpt: 'Cuando una persona fallece sin dejar testamento, la ley define quién hereda y en qué orden. Te explicamos cómo funciona la sucesión intestada en Argentina.',
    body: `
<p>No todas las personas dejan testamento. De hecho, la mayoría no lo hace. Cuando eso ocurre, la herencia no queda "en el aire": es la ley la que determina quiénes son los herederos y en qué orden. A eso se lo llama <strong>sucesión intestada</strong> (o <em>ab intestato</em>), y sigue reglas bastante claras.</p>
<p>Veamos quién hereda y en qué orden.</p>

<h2>Los descendientes</h2>
<p>Los <strong>hijos</strong> son los primeros llamados a heredar, en partes iguales entre sí. Si alguno de los hijos falleció antes, sus propios hijos —los <strong>nietos</strong> del causante— heredan en su lugar, repartiéndose la parte que le hubiera correspondido a su padre o madre. Es lo que se conoce como derecho de representación.</p>

<h2>El cónyuge</h2>
<p>El cónyuge sobreviviente tiene un lugar central en la sucesión. Cuando concurre con los hijos, hereda junto a ellos, con reglas particulares según se trate de bienes propios o gananciales del matrimonio. Cuando no hay descendientes, su posición se refuerza. Es una de las situaciones donde más conviene el análisis puntual, porque la combinación de cónyuge y tipo de bienes tiene matices.</p>

<div class="callout"><span class="callout-ico">💡</span><p><strong>Dato:</strong> la posición del cónyuge cambia bastante según con quién concurra (hijos, padres) y según la naturaleza de los bienes. No es lo mismo un bien propio que uno ganancial. Por eso conviene mirar cada caso en concreto.</p></div>

<h2>Los ascendientes: padres</h2>
<p>Si la persona fallece sin dejar hijos ni descendientes, entran a heredar los <strong>ascendientes</strong>: en primer lugar los padres. En ese caso, la herencia se reparte entre los ascendientes y el cónyuge, según las reglas legales.</p>

<h2>Los hermanos y demás colaterales</h2>
<p>Cuando no hay descendientes ni ascendientes ni cónyuge, la herencia pasa a los <strong>parientes colaterales</strong>: primero los hermanos (y los sobrinos, por representación) y luego otros parientes hasta el cuarto grado. Más allá de ese grado, ya no hay derecho hereditario por esta vía.</p>

<h2>Los convivientes: un punto que sorprende</h2>
<p>Acá hay algo que suele tomar por sorpresa a mucha gente: en la sucesión intestada, <strong>el conviviente no hereda como lo hace el cónyuge</strong>. Por más años de convivencia que hubiera, quien no estaba casado no ocupa el mismo lugar que un cónyuge en el reparto legal de la herencia. Es una de las razones por las que, en parejas no casadas, la planificación —por ejemplo, mediante testamento— cobra especial importancia.</p>

<div class="callout"><span class="callout-ico">⚠️</span><p><strong>Importante:</strong> si convivís sin estar casado y querés que tu pareja quede protegida, no alcanza con la convivencia. Conviene asesorarte sobre las herramientas disponibles, como el testamento, dentro de los límites que fija la ley.</p></div>

<h2>Casos especiales</h2>
<p>Existen situaciones que requieren un análisis más fino: hijos de distintas uniones, adopciones, bienes en el exterior, deudas que integran el acervo, o herederos que renuncian. Cada una de estas circunstancias puede modificar cómo se reparte en la práctica, aunque el orden general se mantenga.</p>

<h2>¿Y si igual quiero decidir yo?</h2>
<p>La sucesión intestada es la solución que da la ley cuando no hay testamento. Pero dentro de los límites legales —en especial, la porción legítima que protege a ciertos herederos— cada persona puede ordenar en vida parte de su patrimonio mediante un testamento. Si querés tener una palabra sobre cómo se reparte lo tuyo, ese es el camino.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Si no hay testamento, ¿quién hereda primero?', a: 'Los descendientes: los hijos, en partes iguales. Si un hijo falleció antes, sus hijos (los nietos del causante) heredan en su lugar por representación. El cónyuge concurre con los hijos según las reglas legales.' },
      { q: '¿El conviviente hereda si no estaban casados?', a: 'En la sucesión intestada, el conviviente no hereda como el cónyuge, por más años de convivencia que hubiera. Por eso, en parejas no casadas, conviene analizar herramientas como el testamento para proteger a la pareja.' },
      { q: '¿Los hermanos pueden heredar?', a: 'Sí, cuando no hay descendientes, ascendientes ni cónyuge. La herencia pasa a los colaterales: primero los hermanos y sobrinos, y luego otros parientes hasta el cuarto grado.' },
      { q: '¿Puedo decidir cómo se reparte mi herencia?', a: 'Dentro de los límites que fija la ley —en especial la porción legítima que protege a ciertos herederos— podés ordenar parte de tu patrimonio mediante testamento. Conviene hacerlo con asesoramiento para que sea válido.' },
    ],
    related: ['fallecio-un-familiar-primeros-pasos', 'vender-casa-heredada-sin-sucesion', 'nacionalidad-argentina-requisitos-tramite'],
  },

];

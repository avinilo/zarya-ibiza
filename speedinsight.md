Diagnostica problemas de rendimiento
97
Rendimiento
91
Accesibilidad
100
Prácticas recomendadas
100
SEO
97
FCP
+10
LCP
+24
TBT
+30
CLS
+25
SI
+8
Rendimiento
Los valores son estimaciones y pueden variar. La puntuación del rendimiento se calcula directamente a partir de estas métricas.Ver calculadora.
0–49
50–89
90–100
Final Screenshot

Métricas
Ampliar vista
First Contentful Paint
0,9 s
Renderizado del mayor elemento con contenido
2,1 s
Total Blocking Time
70 ms
Cambios de diseño acumulados
0
Speed Index
3,9 s
Captured at 19 nov 2025, 1:32 CET
Moto G Power emulado with Lighthouse 13.0.1
Sesión de una sola página
Carga inicial de la página
Limitación de 4G lenta
Using HeadlessChromium 137.0.7151.119 with lr
Ver gráfico de rectángulos
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Mostrar auditorías relacionadas con:

All

FCP

LCP

TBT

CLS
Estadísticas
Solicitudes que bloquean el renderizado Ahorro estimado de 130 ms
Las solicitudes están bloqueando el renderizado inicial de la página, lo que puede retrasar el LCP. Si se posponen o se insertan, estas solicitudes de red pueden salir de la ruta crítica.LCPFCPSin puntuar
URL
Tamaño de la transferencia
Duración
vercel.app Propio
9,8 KiB	160 ms
…css/2977b76bb5fbdcc1.css(zarya-ibiza.vercel.app)
9,8 KiB
160 ms
Redistribución forzada
Se produce un reflow forzado cuando JavaScript consulta propiedades geométricas (como offsetWidth) después de que los estilos hayan sido invalidados por un cambio en el estado del DOM. Esto puede provocar un rendimiento deficiente. Consulta más información sobre los reflows forzados y las posibles mitigaciones.Sin puntuar
Llamada a función principal
Tiempo total de redistribución
…chunks/vendors-cee198f2f09928d3.js:2:410698(zarya-ibiza.vercel.app)
60 ms
Fuente
Tiempo total de redistribución
…app/page-4052d615…e3.js:1:13680(zarya-ibiza.vercel.app)
60 ms
[sin asignación]
8 ms
Árbol de dependencia de red
Evita encadenar solicitudes críticas reduciendo la longitud de las cadenas, disminuyendo el tamaño de los recursos o posponiendo la descarga de recursos innecesarios para mejorar la carga de la página.LCPSin puntuar
Latencia de ruta crítica máxima: 1013 ms
Navegación inicial
https://zarya-ibiza.vercel.app - 691 ms, 10,22 KiB
…css/2977b76bb5fbdcc1.css(zarya-ibiza.vercel.app) - 1013 ms, 9,78 KiB
Orígenes preconectados
Las sugerencias para establecer conexión previamente ayudan al navegador a establecer una conexión antes de que se cargue la página, lo que ahorra tiempo al hacer la primera solicitud a ese origen. A continuación se indican los orígenes con los que la página ha establecido conexión previamente.
No hay orígenes con los que se haya establecido conexión previamente
Candidatos para establecer conexión previamente
Añade sugerencias para establecer conexión previamente con tus orígenes más importantes, pero intenta usar 4 como máximo.
No hay más orígenes que sean buenos candidatos para establecer conexión previamente
Usar tiempos de vida de caché eficientes Ahorro estimado de 2 KiB
Una duración en caché más larga puede aumentar el número de visitas repetidas a tu página. Más informaciónLCPFCPSin puntuar
Solicitud
Tiempo de vida en caché
Tamaño de la transferencia
JSDelivr CDN cdn 
17 KiB
…4x3/es.svg(cdn.jsdelivr.net)
7d
16 KiB
…4x3/gb.svg(cdn.jsdelivr.net)
7d
1 KiB
JavaScript antiguo Ahorro estimado de 12 KiB
Los polyfills y los transforms permiten que los navegadores antiguos utilicen las nuevas funciones de JavaScript. Sin embargo, muchos de estos polyfills y transforms no son necesarios para los navegadores modernos. Te recomendamos que modifiques tu proceso de compilación de JavaScript para que no transpile las funciones de Baseline, a menos que sepas que debes admitir navegadores antiguos. Descubre por qué la mayoría de los sitios pueden implementar código ES6+ sin transpilación.LCPFCPSin puntuar
URL
Bytes desperdiciados
vercel.app Propio
12,1 KiB
…chunks/vendors-cee198f2f09928d3.js(zarya-ibiza.vercel.app)
12,1 KiB
…chunks/vendors-cee198f2f09928d3.js:1:14817(zarya-ibiza.vercel.app)
Array.prototype.at
…chunks/vendors-cee198f2f09928d3.js:1:14205(zarya-ibiza.vercel.app)
Array.prototype.flat
…chunks/vendors-cee198f2f09928d3.js:1:14318(zarya-ibiza.vercel.app)
Array.prototype.flatMap
…chunks/vendors-cee198f2f09928d3.js:1:14694(zarya-ibiza.vercel.app)
Object.fromEntries
…chunks/vendors-cee198f2f09928d3.js:1:14952(zarya-ibiza.vercel.app)
Object.hasOwn
…chunks/vendors-cee198f2f09928d3.js:1:13947(zarya-ibiza.vercel.app)
String.prototype.trimEnd
…chunks/vendors-cee198f2f09928d3.js:1:13862(zarya-ibiza.vercel.app)
String.prototype.trimStart
Causantes de los cambios de diseño
Los cambios de diseño se producen cuando los elementos se mueven sin que el usuario interactúe con ellos. Investiga las causas de los cambios de diseño, como la adición o eliminación de elementos o el cambio de fuentes a medida que se carga la página.CLSSin puntuar
Elemento
Puntuación del cambio de diseño
Total
0,000
EN
<div class="lg:hidden flex items-center gap-3">
0,000
Optimizar tamaño del DOM
Un DOM de gran tamaño puede aumentar la duración de los cálculos de estilo y redistribución del diseño, lo que afecta a la capacidad de respuesta de la página. Un DOM de gran tamaño también aumenta el uso de memoria. Consulta cómo evitar un tamaño de DOM excesivo.Sin puntuar
Estadística
Elemento
Valor
Total de elementos
858
Profundidad de DOM
ul.space-y-2 > li.flex > svg.lucide > path
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
11
La mayoría de los elementos secundarios
body.__variable_f367f3
<body class="__variable_f367f3 __variable_0a80b4 __variable_069ab3 font-sans antialiased">
25
Desglose de LCP
Cada subparte tiene estrategias de mejora específicas. Lo ideal es que la mayor parte del tiempo de LCP se dedique a cargar los recursos, no a los retrasos.LCPSin puntuar
Subparte
Duración
Time to First Byte
0 ms
Retraso de renderizado de elementos
1060 ms
First Class Sensations
<span class="ml-2 md:ml-3 text-[10px] sm:text-xs md:text-xl font-bold transition-smooth…">
Terceros
El código de terceros puede afectar mucho a la velocidad de carga. Reduce y aplaza la carga del código de terceros para priorizar el contenido de tu página.Sin puntuar
Tercero
Tamaño de la transferencia
Tiempo del hilo principal
Google Tag Manager tag-manager 
120 KiB	111 ms
/gtag/js?id=G-XXXXXXXXXX(www.googletagmanager.com)
120 KiB
111 ms
JSDelivr CDN cdn 
17 KiB	0 ms
…4x3/es.svg(cdn.jsdelivr.net)
16 KiB
0 ms
…4x3/gb.svg(cdn.jsdelivr.net)
1 KiB
0 ms
Google Analytics analytics 
1 KiB	0 ms
/g/collect?v=…(www.google-analytics.com)
1 KiB
0 ms
Estas estadísticas también están disponibles en el panel Rendimiento de Chrome DevTools. Graba una traza para ver información más detallada.
Diagnósticos
Reduce el contenido JavaScript que no se use Ahorro estimado de 165 KiB
Reduce el contenido JavaScript que no se use y retrasa la carga de secuencias de comandos hasta que se necesiten. Así, se reducirán los bytes consumidos por la actividad de red. Consulta cómo reducir el contenido de JavaScript que no se useLCPFCPSin puntuar
URL
Tamaño de la transferencia
Ahorro estimado
vercel.app Propio
185,9 KiB	111,2 KiB
…chunks/vendors-cee198f2f09928d3.js(zarya-ibiza.vercel.app)
185,9 KiB
111,2 KiB
Google Tag Manager tag-manager 
119,3 KiB	54,1 KiB
/gtag/js?id=G-XXXXXXXXXX(www.googletagmanager.com)
119,3 KiB
54,1 KiB
Evita tareas largas del hilo principal 4 tareas largas encontradas
Enumera las tareas más largas del hilo principal, lo que es útil para identificar las que más contribuyen a la latencia. Consulta cómo evitar tareas largas del hilo principalTBTSin puntuar
URL
Hora de inicio
Duración
vercel.app Propio
215 ms
…chunks/vendors-cee198f2f09928d3.js(zarya-ibiza.vercel.app)
4950 ms
128 ms
…chunks/vendors-cee198f2f09928d3.js(zarya-ibiza.vercel.app)
5260 ms
87 ms
Google Tag Manager tag-manager 
132 ms
/gtag/js?id=G-XXXXXXXXXX(www.googletagmanager.com)
6298 ms
82 ms
/gtag/js?id=G-XXXXXXXXXX(www.googletagmanager.com)
6380 ms
50 ms
Consulta más información sobre el rendimiento de tu aplicación. Estos datos no afectan directamente a la puntuación del rendimiento.
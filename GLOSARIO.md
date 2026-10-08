# Glosario del proyecto

Términos que aparecieron al construir `xbox_clone`, explicados en simple.

## Node.js / npm (el gestor de paquetes)

**Node.js**
Un programa que permite ejecutar JavaScript fuera del navegador (en tu PC, como si fuera Python). Necesario para usar herramientas como Vite.

**npm** (Node Package Manager)
El "gestor de paquetes" que viene con Node.js. Sirve para instalar librerías/herramientas que otras personas ya programaron, en vez de escribirlas tú desde cero. Se usa escribiendo comandos como `npm install`.

**paquete / dependencia**
Una pieza de código reutilizable que instalas con npm (por ejemplo, Vite es un "paquete"). "Dependencia" es lo mismo visto desde tu proyecto: tu proyecto *depende* de ese paquete para funcionar.

**`node_modules/`**
La carpeta donde npm descarga físicamente todos los paquetes instalados. Puede tener miles de archivos y pesar mucho — por eso nunca se sube a Git ni se comparte manualmente; cualquiera puede regenerarla ejecutando `npm install`.

**`package.json`**
La "ficha de identidad" del proyecto: su nombre, y sobre todo la lista de qué paquetes necesita (dependencias) y los "scripts" (atajos de comandos), como `npm run dev`.

**`package-lock.json`**
Un archivo autogenerado que anota la versión *exacta* de cada paquete instalado (y de sus propias dependencias), para que si otra persona instala el proyecto, obtenga exactamente las mismas versiones y no algo distinto que rompa el código. No se edita a mano.

**script (de npm)**
Un atajo definido en `package.json`. Por ejemplo `"dev": "vite"` significa que al escribir `npm run dev`, en realidad se ejecuta el comando `vite`.

## Vite (la herramienta de desarrollo)

**Vite**
Un "servidor de desarrollo" para páginas web. Su trabajo es: (1) levantar una URL local (`http://localhost:5183`) que sirve tus archivos HTML/CSS/JS, y (2) recargar el navegador automáticamente cada vez que guardas un cambio, para no tener que refrescar tú a mano.

**`vite.config.js`**
El archivo de configuración de Vite: le dice cómo comportarse (por ejemplo, en qué puerto abrir el servidor, o qué plugins usar). En este proyecto está casi vacío porque no necesitamos configuración especial.

**servidor de desarrollo (dev server)**
Un programa que se queda corriendo en segundo plano sirviendo tu página mientras programas, distinto de un servidor "de producción" real en internet. Solo funciona en tu propia computadora mientras lo tengas encendido.

**puerto (port)**
Un número que identifica "una puerta" específica en tu computadora por la que un programa escucha conexiones. `localhost:5183` significa "mi propia máquina, puerta número 5183" — ahí es donde Vite dejó la página disponible.

**HMR (Hot Module Replacement)**
La función de Vite que actualiza la página en el navegador al instante cuando guardas un archivo, sin que tengas que presionar F5.

## Tipos de archivo

**`.html`**
El "esqueleto" de la página: qué elementos existen y en qué orden (títulos, párrafos, botones, imágenes).

**`.css`**
Las "reglas de estilo": colores, tamaños, espaciados, animaciones. Le dice al HTML *cómo verse*.

**`.js`** (JavaScript)
El "comportamiento": lo que hace la página cuando el usuario interactúa (clics, el carrusel que avanza solo, animaciones al hacer scroll).

**`.svg`** (Scalable Vector Graphics)
Un formato de imagen hecho de instrucciones matemáticas (líneas, curvas, formas) en vez de una cuadrícula de píxeles como un `.jpg` o `.png`. Ventaja: se puede agrandar sin perder calidad ni pixelarse, y es texto editable (puedes abrirlo con el Bloc de notas). Por eso se usa para logos e íconos, como el favicon de este proyecto.

**`.json`**
Un formato de texto para guardar datos organizados (como una lista de configuraciones) de forma que tanto humanos como programas puedan leerlo fácilmente. `package.json` es un ejemplo.

**`.md`** (Markdown)
Un formato de texto simple para escribir documentación con un poco de formato (títulos, negritas, listas) sin necesidad de HTML. Este mismo glosario es un archivo `.md`.

**favicon**
El pequeño ícono que aparece en la pestaña del navegador, junto al título de la página.

**`.gitignore`**
Una lista de archivos/carpetas que le dices a Git (el sistema de control de versiones) que *ignore* y no guarde en el historial — típicamente `node_modules/` (porque es enorme y regenerable) y archivos temporales.

## Conceptos de HTML/CSS/JS que aparecen en el código

**DOM** (Document Object Model)
La representación en memoria de tu página que el navegador arma a partir del HTML. JavaScript no modifica el archivo `.html` directamente; modifica el DOM, y el navegador redibuja la pantalla al instante.

**clase CSS (`class`)**
Una etiqueta que le pones a un elemento HTML para poder darle estilo o comportamiento por grupo. Ej.: todos los elementos con `class="tile"` comparten el mismo diseño de tarjeta.

**`:root` / variables CSS**
Una forma de definir "valores reutilizables" en CSS, como `--xbox-green: #9bf00b;`. Así, si luego quieres cambiar el verde de toda la página, lo cambias en un solo lugar en vez de buscarlo en cientos de líneas.

**`grid-template-areas`**
Una función de CSS Grid que te deja "dibujar" el layout con nombres (como un mapa de casillas) en vez de calcular filas y columnas a mano. Así se armó el acomodo irregular ("bento grid") de las tarjetas de juegos.

**`aria-label` / accesibilidad**
Texto invisible que le describe a lectores de pantalla (para personas con discapacidad visual) qué hace un botón, cuando el botón solo tiene un ícono y no una palabra. Ej.: `aria-label="Pausar carrusel"`.

**`IntersectionObserver`**
Una herramienta de JavaScript que "avisa" cuando un elemento entra o sale de la parte visible de la pantalla. Se usó para la animación de aparición ("reveal") de las tarjetas al hacer scroll.

**`setInterval`**
Una función de JavaScript que repite una acción cada cierto tiempo (en milisegundos). Es lo que hace que el carrusel avance solo cada 5.5 segundos.

**localhost**
Un nombre especial que siempre apunta "a esta misma computadora", nunca a internet. Por eso `http://localhost:5183` solo funciona en tu PC mientras el servidor de Vite esté encendido — nadie más puede abrir ese link.

# Xbox — réplica de diseño (proyecto educativo)

Réplica de práctica de la página de inicio de Xbox, hecha con HTML, CSS y JavaScript vanilla (sin frameworks). Sin afiliación con Microsoft/Xbox — fines educativos únicamente.

Todo el arte visual (fondos de héroe, teselas de juegos, formas del banner de dispositivos) está generado con CSS (gradientes/formas) por defecto — no se reproducen fotografías ni logotipos reales. Si quieres usar tus propias capturas/fotos, consulta [`assets/img/README.md`](assets/img/README.md): basta con guardar el archivo con el nombre indicado y la página lo detecta sola, sin tocar código.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`).

## Estructura

- `index.html` — marcado de toda la página (header, carrusel hero, bento grid de juegos, banner 25 aniversario, banner de dispositivos, footer)
- `style.css` — sistema de diseño (tokens de color/tipografía), layout y animaciones
- `script.js` — sombra de header al hacer scroll, carrusel hero (autoplay/pausa/puntos), animaciones de aparición al hacer scroll
- `public/` — favicon e iconos SVG

## Uso de IA

Hice este proyecto con ayuda de **Claude** (Anthropic) como asistente de programación. Me ayudó a generar y revisar partes del código, los estilos y esta documentación. La idea, el contenido y la revisión final son míos.

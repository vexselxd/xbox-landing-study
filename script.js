(() => {
  'use strict';

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Hero carousel ---------- */
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dotsWrap = document.getElementById('heroDots');
  const toggleBtn = document.getElementById('heroToggle');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const iconPause = document.getElementById('iconPause');
  const iconPlay = document.getElementById('iconPlay');

  let current = 0;
  let playing = true;
  let timer = null;
  const INTERVAL = 5500;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { goTo(i); restartAutoplayIfPlaying(); });
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, INTERVAL);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function restartAutoplayIfPlaying() {
    if (playing) startAutoplay();
  }

  toggleBtn.addEventListener('click', () => {
    playing = !playing;
    iconPause.hidden = !playing;
    iconPlay.hidden = playing;
    toggleBtn.setAttribute('aria-label', playing ? 'Pausar carrusel' : 'Reanudar carrusel');
    if (playing) startAutoplay(); else stopAutoplay();
  });

  prevBtn.addEventListener('click', () => { prev(); restartAutoplayIfPlaying(); });
  nextBtn.addEventListener('click', () => { next(); restartAutoplayIfPlaying(); });

  // Los navegadores limitan (throttle) los temporizadores en pestañas en segundo plano;
  // al volver a la pestaña, se reanuda el autoplay desde cero para que no se sienta "atascado".
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') restartAutoplayIfPlaying();
  });

  startAutoplay();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => io.observe(el));

  /* ---------- Fotos reales opcionales ----------
     Cada elemento con [data-img] intenta cargar una foto real desde /assets/img/.
     Si el archivo no existe todavía, no pasa nada: se queda el arte CSS generado. */
  document.querySelectorAll('[data-img]').forEach((host) => {
    const src = host.getAttribute('data-img');
    const probe = new Image();
    probe.onload = () => {
      host.style.backgroundImage = `url("${src}")`;
      host.classList.add('has-photo');
    };
    probe.src = src;
  });
})();

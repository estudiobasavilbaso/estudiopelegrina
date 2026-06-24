/* ===== ESTUDIO JURÍDICO PELEGRINA ===== */

// Menú móvil
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
  document.body.style.overflow = !open ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuBtn.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}));

// Acordeón de servicios (uno abierto a la vez)
const svcButtons = document.querySelectorAll('.service-list button');
svcButtons.forEach(btn => btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') === 'true';
  svcButtons.forEach(b => {
    b.setAttribute('aria-expanded', 'false');
    b.querySelector('b').textContent = '+';
  });
  btn.setAttribute('aria-expanded', String(!open));
  btn.querySelector('b').textContent = open ? '+' : '–';
}));

// Acordeón de FAQ
document.querySelectorAll('.faq-item button').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('button').setAttribute('aria-expanded', 'false');
    i.querySelector('button b').textContent = '+';
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.querySelector('b').textContent = '–';
  }
}));

// Reveal on scroll
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Formulario -> WhatsApp
const form = document.querySelector('#form');
const WHATSAPP = '5491154036933';
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const data = new FormData(form);
  const lines = [
    'Hola, quiero hacer una consulta desde la web del Estudio Jurídico Pelegrina.',
    '',
    `Nombre: ${data.get('nombre')}`,
    `Email: ${data.get('email')}`,
    `Teléfono: ${data.get('telefono') || '-'}`,
    `Motivo: ${data.get('area')}`,
    `Consulta: ${data.get('mensaje') || '-'}`
  ];
  form.querySelector('.form-status').textContent = 'Abriendo WhatsApp para enviar tu consulta…';
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
});

// Contadores animados
const counters = document.querySelectorAll('[data-count]');
const countObs = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const el = entry.target;
  const target = +el.dataset.count;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const dur = 1400, start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(start);
  countObs.unobserve(el);
}), { threshold: .5 });
counters.forEach(c => countObs.observe(c));

// Carrusel de testimonios
const track = document.getElementById('testiTrack');
if (track) {
  const cards = [...track.children];
  const dotsWrap = document.getElementById('testiDots');
  cards.forEach((_, i) => {
    const d = document.createElement('button');
    d.setAttribute('aria-label', 'Ir al caso ' + (i + 1));
    d.addEventListener('click', () => scrollToCard(i));
    dotsWrap.appendChild(d);
  });
  const dots = [...dotsWrap.children];
  const step = () => cards[0].getBoundingClientRect().width + 16;
  const current = () => Math.round(track.scrollLeft / step());
  const scrollToCard = i => track.scrollTo({ left: i * step(), behavior: 'smooth' });
  const syncDots = () => { const c = current(); dots.forEach((d, i) => d.classList.toggle('active', i === c)); };
  track.addEventListener('scroll', () => requestAnimationFrame(syncDots), { passive: true });
  document.querySelectorAll('.testi-arrow').forEach(btn => btn.addEventListener('click', () => {
    const next = Math.max(0, Math.min(cards.length - 1, current() + (+btn.dataset.dir)));
    scrollToCard(next);
  }));
  syncDots();
}

// Resaltar link de nav según la sección visible
const navAnchors = [...document.querySelectorAll('.nav-links a')].filter(a => a.getAttribute('href') && a.getAttribute('href').startsWith('#'));
const navObs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id], header[id]').forEach(s => navObs.observe(s));

// Barra de progreso de scroll
const progress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  progress.style.width = (ratio * 100) + '%';
}, { passive: true });

// Año footer
document.querySelector('#year').textContent = new Date().getFullYear();

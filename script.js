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
const WHATSAPP = '5491157253942';
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

// Año footer
document.querySelector('#year').textContent = new Date().getFullYear();

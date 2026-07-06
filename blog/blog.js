/* ===== BLOG — ESTUDIO JURÍDICO PELEGRINA ===== */

// Menú móvil
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
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
}

// Reveal on scroll
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Filtros de categoría (listado del blog)
const chips = document.querySelectorAll('.blog-chip');
const cards = document.querySelectorAll('.post-grid .post-card');
const emptyMsg = document.querySelector('.blog-empty');
if (chips.length) {
  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const cat = chip.dataset.cat;
    let shown = 0;
    cards.forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });
    if (emptyMsg) emptyMsg.style.display = shown ? 'none' : 'block';
  }));
}

// Acordeón FAQ del artículo
document.querySelectorAll('.afaq-item button').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.closest('.afaq-item');
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
  btn.querySelector('b').textContent = isOpen ? '+' : '–';
}));

// Compartir
const shareData = () => ({
  title: document.title,
  text: (document.querySelector('meta[name="description"]') || {}).content || document.title,
  url: location.href
});
const waShare = document.querySelector('[data-share="whatsapp"]');
if (waShare) waShare.addEventListener('click', () => {
  const d = shareData();
  window.open('https://wa.me/?text=' + encodeURIComponent(d.title + ' ' + d.url), '_blank', 'noopener');
});
const copyBtn = document.querySelector('[data-share="copy"]');
if (copyBtn) copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    const label = copyBtn.querySelector('span');
    const prev = label.textContent;
    label.textContent = '¡Link copiado!';
    setTimeout(() => { label.textContent = prev; }, 2000);
  } catch (e) {
    prompt('Copiá el enlace:', location.href);
  }
});
const moreBtn = document.querySelector('[data-share="more"]');
if (moreBtn) {
  if (navigator.share) {
    moreBtn.addEventListener('click', () => navigator.share(shareData()).catch(() => {}));
  } else {
    moreBtn.style.display = 'none';
  }
}

// Barra de progreso de scroll
const progress = document.getElementById('scrollProgress');
if (progress) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    progress.style.width = (ratio * 100) + '%';
  }, { passive: true });
}

// Año footer
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==========================================================================
// GENERADOR DEL BLOG — Estudio Jurídico Pelegrina
// Uso:  node blog/_generator/build.mjs
// Genera:  blog/index.html, blog/<slug>.html y sitemap.xml
// ==========================================================================
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ARTICLES, CATEGORIES } from './articles.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');        // raíz del repo
const BLOG = join(ROOT, 'blog');

const SITE = 'https://estudiopelegrina.com.ar';
const WA = '5491154036933';
const CSS_V = '?v=1';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const absImg = img => SITE + '/' + img.replace(/^\.\.\//, '');

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Libre+Caslon+Display&display=swap" rel="stylesheet">`;

const STYLES = `<link rel="stylesheet" href="../styles.css?v=10">
  <link rel="stylesheet" href="../responsive.css?v=10">
  <link rel="stylesheet" href="blog.css${CSS_V}">`;

const TICKER = `<div class="ticker" aria-hidden="true">
    <div class="ticker-track">
      ${Array(2).fill(`<span>Ciudadanía española e italiana</span><i></i>
      <span>Acompañamiento de principio a fin</span><i></i>
      <span>Atención a argentinos en el exterior</span><i></i>
      <span>Asesoramiento personalizado</span><i></i>
      <span>Seguridad jurídica en cada paso</span><i></i>`).join('\n      ')}
    </div>
  </div>`;

const nav = (active) => `<header class="nav-wrap">
    <div class="nav-shell">
      <a class="brand" href="/" aria-label="Estudio Jurídico Pelegrina · Inicio">
        <img src="../logo.png" alt="Estudio Jurídico Pelegrina" class="brand-logo">
        <span class="brand-text"><b>Estudio Jurídico</b><small>Pelegrina</small></span>
      </a>
      <nav class="nav-links" aria-label="Navegación principal">
        <a href="/#servicios">Servicios</a>
        <a href="/#estudio">¿Quiénes somos?</a>
        <a href="/blog/"${active === 'blog' ? ' class="active"' : ''}>Blog</a>
        <a href="/#faq">Preguntas</a>
        <a href="/#contacto">Contacto</a>
        <a class="nav-cta" href="/#consulta">Agendá tu consulta</a>
      </nav>
      <div class="nav-right">
        <button class="menu-btn" aria-expanded="false" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;

const FOOTER = `<footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/">
          <img src="../logo.png" alt="Estudio Jurídico Pelegrina" class="brand-logo">
          <span class="brand-text"><b>Estudio Jurídico</b><small>Pelegrina</small></span>
        </a>
        <p>Ciudadanías, visados, derecho migratorio y sucesiones. Asesoramiento legal cercano para vos y tu familia.</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <a href="/#estudio">¿Quiénes somos?</a>
        <a href="/#servicios">Servicios</a>
        <a href="/blog/">Blog</a>
        <a href="/#faq">Preguntas frecuentes</a>
        <a href="/#contacto">Contacto</a>
      </div>
      <div class="footer-col">
        <h4>Servicios</h4>
        <a href="/#contacto">Ciudadanía española</a>
        <a href="/#contacto">Ciudadanía italiana</a>
        <a href="/#contacto">Visados y migratorio</a>
        <a href="/#contacto">Sucesiones</a>
        <a href="/#contacto">Rectificación de actas</a>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp +54 9 11 5403 6933</a>
        <a href="mailto:legales.pelegrina@gmail.com">legales.pelegrina@gmail.com</a>
        <a href="https://www.instagram.com/estudiopelegrina/" target="_blank" rel="noopener">Instagram @estudiopelegrina</a>
        <a href="https://www.google.com/maps/search/?api=1&query=Talcahuano+736+CABA" target="_blank" rel="noopener">Talcahuano 736, PB al fondo · CABA</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="year"></span> Estudio Jurídico Pelegrina. Todos los derechos reservados.</p>
      <a href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>

  <a class="float-wa" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp">
    <img src="../icono-whatsapp.png" alt="">
    <span class="float-wa-pulse"></span>
  </a>
  <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>
  <script src="blog.js${CSS_V}"></script>`;

// Tarjeta de nota (grilla y relacionados)
const postCard = (a) => `<a class="post-card reveal" href="${a.slug}.html" data-cat="${a.cat}">
        <div class="post-card-media"><span class="post-tag">${esc(a.category)}</span><img src="${a.image}" alt="${esc(a.title)}" loading="lazy"></div>
        <div class="post-card-body">
          <p class="post-meta">${a.dateLabel} · ${a.readTime}</p>
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.excerpt)}</p>
          <span class="post-more">Leer artículo</span>
        </div>
      </a>`;

const WA_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.32-1.95 1.36-.5.05-.95.24-3.2-.67-2.7-1.06-4.42-3.8-4.55-3.98-.13-.18-1.1-1.46-1.1-2.78 0-1.32.69-1.97.94-2.24.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.58.79 2 .86 2.14.07.14.12.31.02.5-.09.18-.14.29-.28.45-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.27.72 1.18 1.54 1.91 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.18.7-.81.88-1.09.18-.27.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z"/></svg>`;

function articlePage(a, related) {
  const desc = a.excerpt;
  const url = `${SITE}/blog/${a.slug}.html`;
  const faqLd = a.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }));
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: a.title,
        description: desc,
        image: absImg(a.image),
        datePublished: a.date,
        dateModified: a.date,
        articleSection: a.category,
        inLanguage: 'es-AR',
        author: { '@type': 'Person', name: 'Paloma Eugenia Pelegrina', jobTitle: 'Abogada' },
        publisher: {
          '@type': 'LegalService',
          name: 'Estudio Jurídico Pelegrina',
          logo: { '@type': 'ImageObject', url: SITE + '/logo.png' }
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url }
      },
      { '@type': 'FAQPage', mainEntity: faqLd },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog/' },
          { '@type': 'ListItem', position: 3, name: a.title, item: url }
        ]
      }
    ]
  };

  const faqHtml = a.faqs.map(f => `<div class="afaq-item">
        <button aria-expanded="false"><span>${esc(f.q)}</span><b>+</b></button>
        <div class="afaq-panel"><div><p>${esc(f.a)}</p></div></div>
      </div>`).join('\n      ');

  const relatedHtml = related.map(postCard).join('\n      ');

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(a.title)} · Estudio Jurídico Pelegrina</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#5A2531">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="es_AR">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(a.title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${absImg(a.image)}">
  <meta property="article:published_time" content="${a.date}">
  <meta property="article:section" content="${esc(a.category)}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">
  ${JSON.stringify(ld, null, 2)}
  </script>
  <link rel="icon" href="../logo.png" type="image/png">
  ${FONTS}
  ${STYLES}
</head>
<body>
  ${TICKER}
  ${nav('blog')}

  <main>
    <article>
      <header class="article-hero">
        <img class="hero-photo" src="${a.image}" alt="" aria-hidden="true">
        <div class="article-hero-inner">
          <span class="article-cat">${esc(a.category)}</span>
          <h1>${esc(a.title)}</h1>
          <p class="article-meta"><span>${a.dateLabel}</span><i></i><span>${a.readTime}</span></p>
        </div>
      </header>

      <nav class="breadcrumb" aria-label="Ruta de navegación">
        <a href="/">Inicio</a><span>›</span><a href="/blog/">Blog</a><span>›</span>${esc(a.title)}
      </nav>

      <div class="article-body">
        ${a.body.trim()}
      </div>

      <section class="article-faq">
        <h2>Preguntas frecuentes</h2>
        ${faqHtml}
      </section>

      <section class="article-cta">
        <div class="article-cta-card reveal">
          <p class="eyebrow">Sin compromiso</p>
          <h2>¿Querés saber cómo sería tu caso en concreto?</h2>
          <p>Cada situación es distinta. Te explicamos con claridad qué pasos corresponden en tu caso, sin tecnicismos y sin apuros.</p>
          <div class="article-cta-actions">
            <a class="btn btn-whatsapp" href="https://wa.me/${WA}" target="_blank" rel="noopener"><img src="../icono-whatsapp.png" class="wa-ico" alt=""> Consultar por WhatsApp</a>
            <a class="btn btn-primary" href="/#consulta">Agendá tu consulta →</a>
          </div>
          <p class="note">Te respondemos a la brevedad · Consulta confidencial</p>
        </div>
      </section>

      <section class="article-share">
        <div class="share-card reveal">
          <h2>¿Conocés a alguien que le pueda servir esta nota?</h2>
          <p>Compartila: a veces una lectura llega justo en el momento indicado.</p>
          <div class="share-actions">
            <button class="share-btn wa" data-share="whatsapp">${WA_ICON} Compartir por WhatsApp</button>
            <button class="share-btn" data-share="copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg> <span>Copiar link</span></button>
            <button class="share-btn" data-share="more"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg> Más opciones</button>
          </div>
        </div>
      </section>
    </article>

    <section class="article-related">
      <h2>Seguí leyendo</h2>
      <div class="related-grid">
      ${relatedHtml}
      </div>
    </section>
  </main>

  ${FOOTER}
</body>
</html>`;
}

function indexPage(featured, rest) {
  const url = `${SITE}/blog/`;
  const chips = CATEGORIES.map((c, i) => `<button class="blog-chip${i === 0 ? ' active' : ''}" data-cat="${c.key}">${esc(c.label)}</button>`).join('\n      ');
  const grid = rest.map(postCard).join('\n      ');

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog · Estudio Jurídico Pelegrina',
    description: 'Guías y notas sobre ciudadanía española e italiana, nacionalidad argentina, visas, pasaportes y sucesiones.',
    url,
    inLanguage: 'es-AR',
    publisher: { '@type': 'LegalService', name: 'Estudio Jurídico Pelegrina', logo: { '@type': 'ImageObject', url: SITE + '/logo.png' } },
    blogPost: [featured, ...rest].map(a => ({
      '@type': 'BlogPosting', headline: a.title, url: `${SITE}/blog/${a.slug}.html`, datePublished: a.date, articleSection: a.category
    }))
  };

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Blog · Estudio Jurídico Pelegrina · Ciudadanías, visas y sucesiones</title>
  <meta name="description" content="Guías claras sobre ciudadanía española e italiana, nacionalidad argentina, visas, pasaportes y sucesiones. Notas para entender tus trámites legales antes de dar el primer paso.">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#5A2531">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_AR">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="Blog · Estudio Jurídico Pelegrina">
  <meta property="og:description" content="Guías claras sobre ciudadanías, visas, pasaportes y sucesiones para entender tus trámites antes de dar el primer paso.">
  <meta property="og:image" content="${absImg(featured.image)}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">
  ${JSON.stringify(ld, null, 2)}
  </script>
  <link rel="icon" href="../logo.png" type="image/png">
  ${FONTS}
  ${STYLES}
</head>
<body>
  ${TICKER}
  ${nav('blog')}

  <main class="blog-main">
    <header class="blog-hero">
      <p class="eyebrow">Blog del estudio</p>
      <h1>Entendé tu trámite <em>antes de dar el primer paso</em></h1>
      <p>Guías claras sobre ciudadanías, visas, pasaportes, nacionalidad argentina y sucesiones. Información confiable, en lenguaje simple, para que tomes buenas decisiones.</p>
    </header>

    <div class="blog-filters">
      ${chips}
    </div>

    ${featuredCard(featured)}

    <div class="post-grid">
      ${grid}
      <p class="blog-empty">No hay notas en esta categoría por ahora.</p>
    </div>
  </main>

  ${FOOTER}
</body>
</html>`;
}

const featuredCard = (a) => `<a class="blog-featured reveal" href="${a.slug}.html" data-cat="${a.cat}">
      <div class="feat-media"><img src="${a.image}" alt="${esc(a.title)}" loading="lazy"></div>
      <div class="feat-body">
        <span class="feat-kicker"><i></i> Destacado · ${esc(a.category)}</span>
        <h2>${esc(a.title)}</h2>
        <p class="feat-meta">${a.dateLabel} · ${a.readTime}</p>
        <p class="feat-excerpt">${esc(a.excerpt)}</p>
        <span class="post-more">Leer artículo</span>
      </div>
    </a>`;

// ---- Build ----
const byDateDesc = [...ARTICLES].sort((x, y) => y.date.localeCompare(x.date));
const featured = ARTICLES.find(a => a.featured) || byDateDesc[0];
const rest = byDateDesc.filter(a => a.slug !== featured.slug);
const bySlug = Object.fromEntries(ARTICLES.map(a => [a.slug, a]));

// index
writeFileSync(join(BLOG, 'index.html'), indexPage(featured, rest));

// artículos
for (const a of ARTICLES) {
  const related = (a.related || []).map(s => bySlug[s]).filter(Boolean).slice(0, 3);
  writeFileSync(join(BLOG, `${a.slug}.html`), articlePage(a, related));
}

// sitemap
const urls = [
  { loc: SITE + '/', pri: '1.0' },
  { loc: SITE + '/blog/', pri: '0.9' },
  ...byDateDesc.map(a => ({ loc: `${SITE}/blog/${a.slug}.html`, pri: '0.8', lastmod: a.date })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.pri}</priority></url>`).join('\n')}
</urlset>`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);

console.log(`✓ Generado: index.html + ${ARTICLES.length} artículos + sitemap.xml`);
console.log(`  Destacado: ${featured.slug}`);
console.log(`  Notas: ${rest.map(a => a.slug).join(', ')}`);

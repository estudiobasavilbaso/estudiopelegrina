// ==========================================================================
// GENERADOR DEL BLOG — Estudio Jurídico Pelegrina
// Uso:  node blog/_generator/build.mjs
// Genera:  blog/index.html, blog/<slug>.html y sitemap.xml
// Traducciones EN/IT: tr-en.mjs y tr-it.mjs (se inyectan vía PAGE_I18N
// y las aplica i18n.js, el mismo sistema del sitio principal).
// ==========================================================================
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ARTICLES, CATEGORIES } from './articles.mjs';
import { EN } from './tr-en.mjs';
import { IT } from './tr-it.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');        // raíz del repo
const BLOG = join(ROOT, 'blog');

const SITE = 'https://estudiopelegrina.com.ar';
const WA = '5491154036933';
const V = '?v=6';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const absImg = img => SITE + '/' + img.replace(/^\.\.\//, '');

// Fechas y tiempo de lectura localizados
const dateFor = (iso, locale) => new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(iso + 'T12:00:00'));
const mins = a => parseInt(a.readTime, 10);
const readFor = (a, lang) => lang === 'en' ? `${mins(a)} min read` : `${mins(a)} min di lettura`;
const metaFor = (a, lang) => `${dateFor(a.date, lang === 'en' ? 'en-US' : 'it-IT')} · ${readFor(a, lang)}`;

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Libre+Caslon+Display&display=swap" rel="stylesheet">`;

const STYLES = `<link rel="stylesheet" href="../styles.css?v=12">
  <link rel="stylesheet" href="../responsive.css?v=15">
  <link rel="stylesheet" href="blog.css${V}">`;

const TICKER = `<div class="ticker" aria-hidden="true">
    <div class="ticker-track">
      ${Array(2).fill(`<span data-i18n="tk.1">Ciudadanía española e italiana</span><i></i>
      <span data-i18n="tk.2">Acompañamiento de principio a fin</span><i></i>
      <span data-i18n="tk.3">Atención a argentinos en el exterior</span><i></i>
      <span data-i18n="tk.4">Asesoramiento personalizado</span><i></i>
      <span data-i18n="tk.5">Seguridad jurídica en cada paso</span><i></i>`).join('\n      ')}
    </div>
  </div>`;

const NAV = `<header class="nav-wrap">
    <div class="nav-shell">
      <a class="brand" href="/" aria-label="Estudio Jurídico Pelegrina · Inicio">
        <img src="../logo.png" alt="Estudio Jurídico Pelegrina" class="brand-logo">
        <span class="brand-text"><b data-i18n="brand.sub">Estudio Jurídico</b><small>Pelegrina</small></span>
      </a>
      <nav class="nav-links" aria-label="Navegación principal">
        <a href="/#servicios" data-i18n="nav.servicios">Servicios</a>
        <a href="/#estudio" data-i18n="nav.quienes">¿Quiénes somos?</a>
        <a href="/blog/" class="active" data-i18n="nav.blog">Blog</a>
        <a href="/#faq" data-i18n="nav.faq">Preguntas</a>
        <a href="/#contacto" data-i18n="nav.contacto">Contacto</a>
        <a class="nav-cta" href="https://wa.me/${WA}" target="_blank" rel="noopener" data-i18n="nav.cta">Comunicate con nosotros</a>
      </nav>
      <div class="nav-right">
        <div class="lang-switch">
          <button class="lang-btn" aria-haspopup="true" aria-expanded="false" aria-label="Cambiar idioma / Change language">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21C9.5 18.5 8.2 15.3 8.2 12S9.5 5.5 12 3z"/></svg>
            <span class="lang-current">ES</span>
          </button>
          <div class="lang-menu" role="menu">
            <button data-lang="es" role="menuitem">🇪🇸 Español</button>
            <button data-lang="en" role="menuitem">🇬🇧 English</button>
            <button data-lang="it" role="menuitem">🇮🇹 Italiano</button>
          </div>
        </div>
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
          <span class="brand-text"><b data-i18n="brand.sub">Estudio Jurídico</b><small>Pelegrina</small></span>
        </a>
        <p data-i18n="footer.desc">Ciudadanías, visados, derecho migratorio y sucesiones. Asesoramiento legal cercano para vos y tu familia.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.nav">Navegación</h4>
        <a href="/#estudio" data-i18n="nav.quienes">¿Quiénes somos?</a>
        <a href="/#servicios" data-i18n="nav.servicios">Servicios</a>
        <a href="/blog/" data-i18n="nav.blog">Blog</a>
        <a href="/#faq" data-i18n="footer.faq">Preguntas frecuentes</a>
        <a href="/#contacto" data-i18n="nav.contacto">Contacto</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.serv">Servicios</h4>
        <a href="/#contacto" data-i18n="acc.ciud.esp">Ciudadanía española</a>
        <a href="/#contacto" data-i18n="acc.ciud.ita">Ciudadanía italiana</a>
        <a href="/#contacto" data-i18n="svc2.title">Visados y migratorio</a>
        <a href="/#contacto" data-i18n="acc.suc">Sucesiones</a>
        <a href="/#contacto" data-i18n="acc.rect">Rectificación de actas</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="nav.contacto">Contacto</h4>
        <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp +54 9 11 5403 6933</a>
        <a href="mailto:legales.pelegrina@gmail.com">legales.pelegrina@gmail.com</a>
        <a href="https://www.instagram.com/estudiopelegrina/" target="_blank" rel="noopener">Instagram @estudiopelegrina</a>
        <a href="https://www.google.com/maps/search/?api=1&query=Talcahuano+736+CABA" target="_blank" rel="noopener">Talcahuano 736, PB al fondo · CABA</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="year"></span> <span data-i18n="footer.copy">Estudio Jurídico Pelegrina. Todos los derechos reservados.</span></p>
      <a href="#inicio" data-i18n="footer.top">Volver arriba ↑</a>
    </div>
  </footer>

  <a class="float-wa" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp">
    <img src="../icono-whatsapp.png" alt="">
    <span class="float-wa-pulse"></span>
  </a>
  <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>`;

const scripts = (pageDict) => `<script>window.PAGE_I18N=${JSON.stringify(pageDict)};</script>
  <script src="../i18n.js?v=13"></script>
  <script src="blog.js${V}"></script>`;

// Tarjeta de nota (grilla, destacada y relacionados) — claves p.<slug>.*
const postCard = (a) => `<a class="post-card reveal" href="${a.slug}.html" data-cat="${a.cat}">
        <div class="post-card-media"><span class="post-tag" data-i18n="blog.cat.${a.cat}">${esc(a.category)}</span><img src="${a.image}" alt="${esc(a.title)}" loading="lazy"></div>
        <div class="post-card-body">
          <p class="post-meta" data-i18n="p.${a.slug}.meta">${a.dateLabel} · ${a.readTime}</p>
          <h3 data-i18n="p.${a.slug}.title">${esc(a.title)}</h3>
          <p data-i18n="p.${a.slug}.excerpt">${esc(a.excerpt)}</p>
          <span class="post-more" data-i18n="blog.read">Leer artículo</span>
        </div>
      </a>`;

const featuredCard = (a) => `<a class="blog-featured reveal" href="${a.slug}.html" data-cat="${a.cat}">
      <div class="feat-media"><img src="${a.image}" alt="${esc(a.title)}" loading="lazy"></div>
      <div class="feat-body">
        <span class="feat-kicker"><i></i> <span data-i18n="blog.featured">Destacado</span>&nbsp;·&nbsp;<span data-i18n="blog.cat.${a.cat}">${esc(a.category)}</span></span>
        <h2 data-i18n="p.${a.slug}.title">${esc(a.title)}</h2>
        <p class="feat-meta" data-i18n="p.${a.slug}.meta">${a.dateLabel} · ${a.readTime}</p>
        <p class="feat-excerpt" data-i18n="p.${a.slug}.excerpt">${esc(a.excerpt)}</p>
        <span class="post-more" data-i18n="blog.read">Leer artículo</span>
      </div>
    </a>`;

// Diccionario de tarjeta para un artículo (título, extracto, meta) en un idioma
function cardDict(a, lang) {
  const tr = (lang === 'en' ? EN : IT)[a.slug];
  return {
    [`p.${a.slug}.title`]: tr.title,
    [`p.${a.slug}.excerpt`]: tr.excerpt,
    [`p.${a.slug}.meta`]: metaFor(a, lang),
  };
}

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

  const faqHtml = a.faqs.map((f, i) => `<div class="afaq-item reveal">
        <button aria-expanded="false"><span data-i18n="p.${a.slug}.faq${i}.q">${esc(f.q)}</span><b>+</b></button>
        <div class="afaq-panel"><div><p data-i18n="p.${a.slug}.faq${i}.a">${esc(f.a)}</p></div></div>
      </div>`).join('\n      ');

  const relatedHtml = related.map(postCard).join('\n      ');

  // Diccionario de traducciones de esta página
  const dict = { en: {}, it: {} };
  for (const lang of ['en', 'it']) {
    const tr = (lang === 'en' ? EN : IT)[a.slug];
    const d = dict[lang];
    d[`p.${a.slug}.title`] = tr.title;
    d['post.h1'] = tr.title;
    d['post.bc'] = tr.title;
    d['post.meta'] = `<span>${dateFor(a.date, lang === 'en' ? 'en-US' : 'it-IT')}</span><i></i><span>${readFor(a, lang)}</span>`;
    d['post.body'] = tr.body.trim();
    tr.faqs.forEach((f, i) => { d[`p.${a.slug}.faq${i}.q`] = f.q; d[`p.${a.slug}.faq${i}.a`] = f.a; });
    for (const r of related) Object.assign(d, cardDict(r, lang));
  }

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
  <link rel="apple-touch-icon" href="../logo.png">
  ${FONTS}
  ${STYLES}
</head>
<body>
  ${TICKER}
  ${NAV}

  <main>
    <article>
      <header class="article-hero">
        <img class="hero-photo" src="${a.image}" alt="" aria-hidden="true">
        <div class="article-hero-inner">
          <span class="article-cat" data-i18n="blog.cat.${a.cat}">${esc(a.category)}</span>
          <h1 data-i18n="post.h1">${esc(a.title)}</h1>
          <p class="article-meta" data-i18n="post.meta"><span>${a.dateLabel}</span><i></i><span>${a.readTime}</span></p>
        </div>
        <div class="hero-fade" aria-hidden="true"></div>
      </header>

      <nav class="breadcrumb" aria-label="Ruta de navegación">
        <a href="/" data-i18n="blog.bc.home">Inicio</a><span>›</span><a href="/blog/">Blog</a><span>›</span><span class="bc-here" data-i18n="post.bc">${esc(a.title)}</span>
      </nav>

      <div class="article-body" data-i18n="post.body">
        ${a.body.trim()}
      </div>

      <div class="article-author-wrap">
        <div class="article-author reveal">
          <img src="../paloma-selfie.png" alt="Paloma Eugenia Pelegrina">
          <div class="article-author-info">
            <small data-i18n="blog.author.wrote">Escribió esta nota</small>
            <b>Paloma Eugenia Pelegrina</b>
            <span data-i18n="blog.author.role">Abogada · Titular del estudio</span>
          </div>
          <a class="btn btn-outline-wine" href="/#estudio" data-i18n="blog.author.more">Conocé el estudio →</a>
        </div>
      </div>

      <section class="article-faq">
        <h2 data-i18n="blog.faq.h2">Preguntas frecuentes</h2>
        ${faqHtml}
      </section>

      <section class="article-cta">
        <div class="article-cta-card reveal">
          <p class="eyebrow" data-i18n="blog.cta.eyebrow">Sin compromiso</p>
          <h2 data-i18n="blog.cta.h2">Hablemos de tu caso, sin apuros</h2>
          <p data-i18n="blog.cta.p">No hace falta que tengas una decisión tomada. A veces alcanza con conversar y entender cómo sería tu caso en concreto. Te escuchamos con claridad, en privado y sin presiones.</p>
          <div class="article-cta-actions">
            <a class="btn btn-whatsapp" href="https://wa.me/${WA}" target="_blank" rel="noopener">${WA_ICON} <span data-i18n="blog.cta.wa">Consultar por WhatsApp</span></a>
            <a class="btn btn-ghost" href="/#consulta" data-i18n="blog.cta.btn">Evaluá tu caso gratis</a>
          </div>
          <p class="note" data-i18n="blog.cta.note">Te respondemos en menos de 24 h · Consulta confidencial</p>
        </div>
      </section>

      <section class="article-share">
        <div class="share-card reveal">
          <h2 data-i18n="blog.share.h2">¿Conocés a alguien que le pueda servir esta nota?</h2>
          <p data-i18n="blog.share.p">Compartila: a veces una lectura llega justo en el momento indicado.</p>
          <div class="share-actions">
            <button class="share-btn wa" data-share="whatsapp">${WA_ICON} <span data-i18n="blog.share.wa">Compartir por WhatsApp</span></button>
            <button class="share-btn" data-share="copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg> <span data-i18n="blog.share.copy">Copiar link</span></button>
            <button class="share-btn" data-share="more"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg> <span data-i18n="blog.share.more">Más opciones</span></button>
          </div>
        </div>
      </section>
    </article>

    <section class="article-related">
      <h2 data-i18n="blog.related">Seguí leyendo</h2>
      <div class="related-grid">
      ${relatedHtml}
      </div>
    </section>
  </main>

  ${FOOTER}
  ${scripts(dict)}
</body>
</html>`;
}

function indexPage(featured, rest) {
  const url = `${SITE}/blog/`;
  const chips = CATEGORIES.map((c, i) => `<button class="blog-chip${i === 0 ? ' active' : ''}" data-cat="${c.key}" data-i18n="blog.cat.${c.key}">${esc(c.label)}</button>`).join('\n      ');
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

  // Diccionario: tarjetas de todas las notas en EN e IT
  const dict = { en: {}, it: {} };
  for (const lang of ['en', 'it']) {
    for (const a of [featured, ...rest]) Object.assign(dict[lang], cardDict(a, lang));
  }

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
  <link rel="apple-touch-icon" href="../logo.png">
  ${FONTS}
  ${STYLES}
</head>
<body>
  ${TICKER}
  ${NAV}

  <main class="blog-main">
    <header class="blog-hero">
      <p class="eyebrow" data-i18n="blog.eyebrow">Blog del estudio</p>
      <h1 data-i18n="blog.hero.h1">Entendé tu trámite <em>antes de dar el primer paso</em></h1>
      <p data-i18n="blog.hero.p">Guías claras sobre ciudadanías, visas, pasaportes, nacionalidad argentina y sucesiones. Información confiable, en lenguaje simple, para que tomes buenas decisiones.</p>
    </header>

    <div class="blog-filters reveal">
      ${chips}
    </div>

    ${featuredCard(featured)}

    <div class="post-grid">
      ${grid}
      <p class="blog-empty" data-i18n="blog.empty">No hay notas en esta categoría por ahora.</p>
    </div>
  </main>

  ${FOOTER}
  ${scripts(dict)}
</body>
</html>`;
}

// ---- Build ----
const byDateDesc = [...ARTICLES].sort((x, y) => y.date.localeCompare(x.date));
const featured = ARTICLES.find(a => a.featured) || byDateDesc[0];
const rest = byDateDesc.filter(a => a.slug !== featured.slug);
const bySlug = Object.fromEntries(ARTICLES.map(a => [a.slug, a]));

// Chequeo: traducciones completas para todas las notas
for (const a of ARTICLES) {
  for (const [name, T] of [['EN', EN], ['IT', IT]]) {
    if (!T[a.slug]) throw new Error(`Falta traducción ${name} para ${a.slug}`);
    if (T[a.slug].faqs.length !== a.faqs.length) throw new Error(`FAQs ${name} desparejas en ${a.slug}`);
  }
}

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

console.log(`✓ Generado: index.html + ${ARTICLES.length} artículos (ES/EN/IT) + sitemap.xml`);

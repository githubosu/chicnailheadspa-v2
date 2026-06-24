/* Evolved homepage proposal — keeps the live site's IA (hero, services, gallery,
   testimonials, visit/hours/map) but elevates it with our editorial system.
   MOBILE-FIRST: fluid type via clamp(), auto-fit card grids, and a viewport
   hook that collapses the two-column bands + nav at <760px. */
import { useMobile as useIsMobile } from './src/shared/useMobile.js';
if (typeof history !== 'undefined') history.scrollRestoration = 'manual';
const EVO_DS = window.ChicNailHeadSpaDesignSystem_843afb;

/* Real assets from the live site (chicnailheadspa.com). Referenced by URL
   because the build sandbox can't download cross-origin; they load from the
   studio's own server. Drop local copies into assets/site/ to self-host. */
const EVO_CDN = 'https://chicnailheadspa.com/assets/images/';
const EVO_HERO_VIDEO = EVO_CDN + 'hero-video.mp4';
// Self-hosted, resized WebP (see scripts/optimize-images.mjs) — no CDN dependency.
const EVO_GALLERY = [1,2,3,4,5,6,7,8,9].map((n) => './assets/img/nail-' + n + '.webp');
const EVO_SALON = [1,2,3,4].map((n) => './assets/img/salon-' + n + '.webp');

/* Viewport hook — shared single implementation (see src/shared/useMobile.js). */

/* Responsive spacing helpers (mobile-first: small by default, grows fluidly). */
const sectionPad = '(--section-y)';
const padY = (m) => (m ? '56px clamp(20px, 5vw, 32px)' : 'var(--section-y) clamp(24px, 5vw, var(--gutter))');
const padX = (m) => (m ? 'clamp(20px, 5vw, 32px)' : 'var(--gutter)');
const wrap = (m) => ({ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 ' + padX(m) });

const evoOverline = (color) => ({ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 13, letterSpacing: '.26em', textTransform: 'uppercase', color: color || 'var(--accent)' });

/* ── Header (collapses to a sheet menu on mobile) ───────────────────────── */
function EvoHeader() {
  const { Button } = EVO_DS;
  const m = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['services', 'Services'], ['gallery', 'Gallery'], ['visit', 'Visit']];
  const go = (id) => { setOpen(false); const el = document.getElementById('evo-' + id); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); else window.location.href = 'index.html#evo-' + id; };
  const solid = scrolled || open;
  const linkColor = solid ? 'var(--text-secondary)' : 'rgba(254,247,237,0.92)';
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40, background: solid ? 'rgba(254,247,237,0.86)' : 'transparent', backdropFilter: solid ? 'blur(14px)' : 'none', WebkitBackdropFilter: solid ? 'blur(14px)' : 'none', borderBottom: '1px solid ' + (solid ? 'var(--border-subtle)' : 'transparent'), transition: 'background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)' }}>
      <div style={{ ...wrap(m), height: m ? 68 : 86, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="index.html" aria-label="Chic Nail & Head Spa — home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={solid ? './assets/logo-lockup.png' : './assets/logo-lockup-reversed.png'} alt="Chic Nail & Head Spa" style={{ height: m ? 48 : 68, filter: solid ? 'none' : 'drop-shadow(0 2px 10px rgba(42,29,21,0.55))', transition: 'height var(--dur) var(--ease-standard)' }} />
        </a>
        {m ? (
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} style={{ width: 42, height: 42, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'none', color: linkColor, fontSize: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className={open ? 'ph-light ph-x' : 'ph-light ph-list'} />
          </button>
        ) : (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: linkColor, padding: '6px 0', transition: 'color var(--dur) var(--ease-standard)' }}>{label}</button>
            ))}
            <Button variant="primary" size="sm" onClick={() => { window.location.href = 'tel:+16143899999'; }}>Book now</Button>
          </nav>
        )}
      </div>
      {m && open && (
        <div style={{ ...wrap(m), paddingTop: 8, paddingBottom: 20, display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid var(--border-subtle)', background: 'rgba(254,247,237,0.96)' }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 500, color: 'var(--text-strong)', padding: '14px 4px', borderBottom: '1px solid var(--border-subtle)' }}>{label}</button>
          ))}
          <div style={{ marginTop: 12 }}><Button variant="primary" size="lg" block onClick={() => { window.location.href = 'tel:+16143899999'; }}>Book now</Button></div>
        </div>
      )}
    </header>
  );
}

/* ── Hero (video-forward) ───────────────────────────────────────────────── */
function EvoHero() {
  const { Button } = EVO_DS;
  const m = useIsMobile();
  const go = (id) => { const el = document.getElementById('evo-' + id); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); else window.location.href = 'index.html#evo-' + id; };
  return (
    <section style={{ position: 'relative', minHeight: m ? 540 : 660, background: 'var(--espresso-900)', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: m ? '96px 0 64px' : '0' }}>
      <video autoPlay muted loop playsInline poster={EVO_SALON[2]} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={EVO_HERO_VIDEO} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: m ? 'linear-gradient(180deg, rgba(42,29,21,0.72) 0%, rgba(42,29,21,0.82) 100%)' : 'linear-gradient(100deg, rgba(42,29,21,0.86) 0%, rgba(42,29,21,0.55) 55%, rgba(42,29,21,0.32) 100%)' }} />
      <div style={{ position: 'relative', ...wrap(m), width: '100%' }}>
        <div style={{ maxWidth: 620 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 9vw, 84px)', lineHeight: 1.03, color: 'var(--cream-50)', margin: '0', letterSpacing: '-0.015em' }}>
            A moment of care that is entirely <em style={{ fontStyle: 'italic', color: 'var(--honey-300)' }}>yours</em>.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2.6vw, 19px)', lineHeight: 1.6, color: 'var(--taupe-400)', maxWidth: 460, margin: '20px 0 30px' }}>
            Luxury nail artistry and a restorative head spa — warm water, slow hands, and a quiet room in the heart of Plain City.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => { window.location.href = 'tel:+16143899999'; }}>Book now</Button>
            <button onClick={() => go('services')} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cream-100)', fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '5px', textDecorationColor: 'var(--honey-400)' }}>
              View services
            </button>
          </div>
        </div>
      </div>
      {!m && (
        <button onClick={() => go('services')} aria-label="Scroll to services" style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'var(--taupe-400)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
          <span style={{ fontSize: 11, letterSpacing: '.24em', textTransform: 'uppercase' }}>Scroll</span>
          <i className="ph-light ph-caret-down" style={{ fontSize: 18, animation: 'evoBob 1.8s var(--ease-out, ease-out) infinite' }} />
        </button>
      )}
    </section>
  );
}

/* ── Trust strip (auto-fit, wraps to 2×2 then 1 col) ────────────────────── */
function EvoTrust() {
  const m = useIsMobile();
  const go = (id) => { const el = document.getElementById('evo-' + id); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); else window.location.href = 'index.html#evo-' + id; };
  const items = [
    ['ph-sparkle', 'Luxury nail services', null],
    ['ph-drop', 'Restorative head spa', null],
    ['ph-calendar-check', 'Online booking', null],
    ['ph-hand-heart', 'Walk-ins welcome', null],
  ];
  return (
    <section style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: m ? '8px 24px' : '10px var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: m ? 6 : 10 }}>
        {items.map(([ic, t, target]) => {
          const inner = m ? (
            <i className={'ph-light ' + ic} style={{ fontSize: 16, color: 'var(--accent)' }} />
          ) : (
            <React.Fragment>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--accent-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={'ph-light ' + ic} style={{ fontSize: 14, color: 'var(--accent)' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, lineHeight: 1.3 }}>{t}</span>
            </React.Fragment>
          );
          const base = m
            ? { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', background: 'var(--accent-tint)', color: 'var(--accent)', margin: '0 auto' }
            : { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12, color: 'var(--text-secondary)', justifyContent: 'center' };
          return target ? (
            <button key={t} onClick={() => go(target)} style={{ ...base, cursor: 'pointer', font: 'inherit', transition: 'color var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
              {inner}
            </button>
          ) : (
            <div key={t} style={base}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Services with prices ───────────────────────────────────────────────── */
function EvoServices() {
  const { Card, Badge, Button, Tabs } = EVO_DS;
  const m = useIsMobile();
  const order = ['pedi', 'mani', 'acrylic', 'gelx', 'dip', 'headspa'];
  const [cat, setCat] = React.useState('pedi');
  const tabScrollRef = React.useRef(null);
  React.useEffect(() => {
    const el = tabScrollRef.current && tabScrollRef.current.querySelector('[aria-selected="true"]');
    if (el) el.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [cat]);
  const labelMap = { pedi: 'Pedicure', mani: 'Manicure', acrylic: 'Acrylic', gelx: 'Gel-X', dip: 'Dip Powder', headspa: 'Head Spa' };
  const cats = order.map((v) => (v === 'headspa' ? { value: v, label: labelMap[v], count: 'Soon' } : { value: v, label: labelMap[v] }));
  const comingSoon = cat === 'headspa';
  const list = window.CNHS_MENU.full.filter((m2) => m2.cat === cat);
  return (
    <section id="evo-services" style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: padY(m) }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={evoOverline()}>Our Services</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(32px, 6vw, 50px)', color: 'var(--text-strong)', margin: '12px 0 10px' }}>Treatments &amp; <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>specialties</em></h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto' }}>Every service includes a complimentary consultation. Prices are starting rates — ask us for a personalized quote.</p>
        </div>
        <style>{`
          #evo-services .cnhs-tabs{border-bottom:none;gap:6px;}
          #evo-services .cnhs-tab{border-radius:var(--radius-pill);padding:9px 20px;}
          #evo-services .cnhs-tab.is-active{background:var(--accent);color:var(--cream-100);}
          #evo-services .cnhs-tab.is-active::after{display:none;}
          #evo-services .cnhs-tab:hover:not(.is-active){background:var(--surface-soft);}
          #evo-services .tab-scroll{mask-image:linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%);-webkit-mask-image:linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%);}
        `}</style>
        <div ref={tabScrollRef} className="tab-scroll" style={{ overflowX: 'auto', overflowY: 'hidden', touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', margin: '24px 0 32px', display: 'flex', justifyContent: 'safe center' }}>
          <Tabs items={cats} value={cat} onChange={setCat} style={{ flexShrink: 0 }} />
        </div>
        {comingSoon ? (
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', background: 'var(--surface-soft)', border: '1px solid var(--gilt-soft)', borderRadius: 'var(--radius-xl)', padding: '52px 32px' }}>
            <i className="ph-light ph-drop" style={{ fontSize: 40, color: 'var(--gilt)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30, color: 'var(--text-strong)', margin: '14px 0 10px' }}>The Head Spa is coming soon</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 auto 22px', maxWidth: 420 }}>Our restorative scalp rituals open later this season. Join the list and we&rsquo;ll let you know the moment booking opens.</p>
            <Button variant="secondary" iconRight={<i className="ph-light ph-envelope-simple" />}>Notify me</Button>
          </div>
        ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, maxWidth: 920, margin: '0 auto' }}>
          {cat === 'pedi' && (
            <p style={{ gridColumn: '1 / -1', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 13, color: 'var(--text-muted)', margin: '0 0 4px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <i className="ph-light ph-star" style={{ color: 'var(--gilt)', flexShrink: 0 }} />
              Gel color available on all pedicures · +$20
            </p>
          )}
          {list.map((s) => (
            <Card key={s.name} padding="sm" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 17, margin: 0, color: 'var(--text-strong)' }}>{s.name}</h3>
                  {s.tag && <Badge variant={s.tagV}>{s.tag}</Badge>}
                </div>
                {s.blurb && <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>{s.blurb}</p>}
                {s.dur && <div style={{ marginTop: 8 }}><Badge variant="neutral" icon={<i className="ph-light ph-clock" />}>{s.dur}</Badge></div>}
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--accent)', whiteSpace: 'nowrap' }}>{s.price}</span>
            </Card>
          ))}
        </div>
        )}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Button variant="secondary" block={m} onClick={() => { window.location.href = 'services-accordion.html'; }} iconRight={<i className="ph-light ph-arrow-right" />}>View full services &amp; pricing</Button>
        </div>
      </div>
    </section>
  );
}

/* ── Reserve Your Time (CTA — mirrors the live site, after Services) ─────── */
function EvoReserve() {
  const { Button } = EVO_DS;
  const m = useIsMobile();
  const c = window.CNHS_MENU.contact;
  const secRef = React.useRef(null);
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = null;
    const update = () => {
      raf = null;
      const sec = secRef.current, img = imgRef.current;
      if (!sec || !img) return;
      const r = sec.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      // progress: -1 (entering bottom) → 1 (leaving top)
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2 + r.height / 2);
      img.style.transform = 'translate3d(0, ' + (progress * 14).toFixed(2) + '%, 0) scale(1.18)';
    };
    const onScroll = () => { if (raf == null) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <section ref={secRef} id="evo-book" style={{ position: 'relative', overflow: 'hidden', background: 'var(--espresso-900)', color: 'var(--cream-50)' }}>
      <img ref={imgRef} src={EVO_SALON[0]} alt="" aria-hidden="true" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.18)', willChange: 'transform' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(42,29,21,0.78) 0%, rgba(42,29,21,0.88) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: padY(m), textAlign: 'center' }}>
        <div style={evoOverline('var(--honey-300)')}>Reserve Your Time</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(34px, 6vw, 56px)', margin: '14px 0 16px', lineHeight: 1.04, color: 'var(--cream-50)' }}>Ready to be <em style={{ fontStyle: 'italic', color: 'var(--honey-300)' }}>pampered</em>?</h2>
        <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', lineHeight: 1.6, color: 'var(--taupe-400)', maxWidth: 520, margin: '0 auto 30px' }}>Book your appointment online in seconds. Choose your service, select a time, and arrive ready to unwind.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" size="lg" block={m}>Book online now</Button>
        </div>
        <p style={{ fontSize: 14, color: 'var(--taupe-400)', margin: '22px 0 0' }}>Or call us — we&rsquo;re happy to help · <span style={{ color: 'var(--honey-300)' }}>{c.phone}</span></p>
      </div>
    </section>
  );
}

/* ── Seasonal / holiday themes ──────────────────────────────────────────────
   The gallery auto-detects today's date and themes the heading, accent word,
   caption, icon, and per-tile labels to the closest holiday — else the season.
   Holidays take priority within their window. Labels describe the nail-art
   styles the studio would feature; swap in matching photos when available. */
const EVO_THEMES = {
  newyear:     { label: 'New Year',      icon: 'ph-sparkle',        accent: 'sparkle',     title: ['Ring in the year in', 'sparkle'],        caption: 'New Year · gold foils, glitter & midnight chrome', tags: ['Gold foil', 'Glitter tips', 'Midnight chrome', 'Champagne French', 'Star accents', 'Confetti', 'Black & gold', 'Shimmer ombré', 'Diamond dust'] },
  valentines:  { label: "Valentine's",   icon: 'ph-heart',          accent: 'love',        title: ['A little', 'love'],                      caption: "Valentine's · hearts, blush pinks & red lacquer", tags: ['Tiny hearts', 'Blush French', 'Red lacquer', 'Rose accents', 'Pink ombré', 'Lace detail', 'Crystal heart', 'Candy swirl', 'Cupid art'] },
  stpatricks:  { label: "St. Patrick's", icon: 'ph-clover',         accent: 'luck',        title: ['A touch of', 'luck'],                    caption: "St. Patrick's · emerald, shamrocks & gold", tags: ['Shamrock art', 'Emerald gel', 'Gold accents', 'Clover tips', 'Green ombré', 'Rainbow detail', 'Matte green', 'Lucky charm', 'Glitter gold'] },
  spring:      { label: 'Spring',        icon: 'ph-flower',         accent: 'bloom',       title: ['In full', 'bloom'],                      caption: 'Spring · florals, pastels & soft French', tags: ['Cherry blossom', 'Pastel French', 'Daisy art', 'Lavender gel', 'Soft ombré', 'Floral detail', 'Mint chrome', 'Tulip accents', 'Petal tips'] },
  easter:      { label: 'Easter',        icon: 'ph-egg',            accent: 'pastels',     title: ['Soft', 'pastels'],                       caption: 'Easter · pastels, florals & egg-art accents', tags: ['Pastel swirl', 'Floral French', 'Egg art', 'Lilac gel', 'Mint ombré', 'Daisy tips', 'Speckled detail', 'Soft chrome', 'Spring petals'] },
  fourth:      { label: 'July 4th',      icon: 'ph-firework',       accent: 'fireworks',   title: ['Light up the', 'fireworks'],             caption: 'July 4th · fireworks, stars & red-white-blue', tags: ['Fireworks', 'Stars & stripes', 'Red glitter', 'Navy chrome', 'Sparkler tips', 'Flag accents', 'Blue ombré', 'Silver foil', 'Liberty art'] },
  summer:      { label: 'Summer',        icon: 'ph-sun-horizon',    accent: 'sunshine',    title: ['Made for', 'sunshine'],                  caption: 'Summer · brights, citrus & ocean tones', tags: ['Citrus art', 'Aqua chrome', 'Sunset ombré', 'Palm detail', 'Coral tips', 'Neon French', 'Seashell accents', 'Tropical floral', 'Gold shimmer'] },
  halloween:   { label: 'Halloween',     icon: 'ph-ghost',          accent: 'mischief',    title: ['A little', 'mischief'],                  caption: 'Halloween · spider webs, matte black & spice', tags: ['Spider web', 'Matte black', 'Ghost art', 'Pumpkin spice', 'Bat tips', 'Blood-red gel', 'Witchy chrome', 'Cobweb French', 'Candy corn'] },
  thanksgiving:{ label: 'Thanksgiving',  icon: 'ph-leaf',           accent: 'gratitude',   title: ['Warm with', 'gratitude'],                caption: 'Thanksgiving · burnt orange, gold & maple leaves', tags: ['Maple leaf', 'Burnt orange', 'Gold accents', 'Cinnamon gel', 'Plaid detail', 'Amber ombré', 'Wheat art', 'Copper chrome', 'Spice tips'] },
  christmas:   { label: 'Christmas',     icon: 'ph-snowflake',      accent: 'sparkle',     title: ['Merry &', 'sparkle'],                    caption: 'Christmas · snowflakes, evergreen & candy cane', tags: ['Snowflake art', 'Candy cane', 'Evergreen gel', 'Gold glitter', 'Plaid tips', 'Ornament detail', 'Icy chrome', 'Holly accents', 'Velvet red'] },
  autumn:      { label: 'Autumn',        icon: 'ph-leaf',           accent: 'amber',       title: ['Wrapped in', 'amber'],                   caption: 'Autumn · warm neutrals, rust & gold leaf', tags: ['Rust ombré', 'Gold leaf', 'Warm French', 'Maple detail', 'Mocha chrome', 'Amber tips', 'Plaid art', 'Caramel swirl', 'Spice accents'] },
  winter:      { label: 'Winter',        icon: 'ph-snowflake',      accent: 'frost',       title: ['A touch of', 'frost'],                   caption: 'Winter · icy blues, silver chrome & snowflakes', tags: ['Snowflake art', 'Icy chrome', 'Silver foil', 'Frost French', 'Sky-blue gel', 'Crystal tips', 'Glitter ombré', 'Velvet detail', 'Diamond dust'] },
};

/* Returns the theme key for a given date — holidays first, then season. */
function evoThemeForDate(d) {
  const mo = d.getMonth() + 1, day = d.getDate();
  const within = (m1, d1, m2, d2) => {
    const v = mo * 100 + day, a = m1 * 100 + d1, b = m2 * 100 + d2;
    return a <= b ? v >= a && v <= b : v >= a || v <= b;
  };
  if (within(12, 18, 12, 31) || within(1, 1, 1, 1)) return 'christmas';
  if (within(12, 26, 1, 2)) return 'newyear';
  if (within(2, 7, 2, 14)) return 'valentines';
  if (within(3, 12, 3, 17)) return 'stpatricks';
  if (within(3, 25, 4, 21)) return 'easter';          // approx Easter window
  if (within(6, 28, 7, 6)) return 'fourth';
  if (within(10, 20, 10, 31)) return 'halloween';
  if (within(11, 20, 11, 30)) return 'thanksgiving';
  if (within(12, 1, 12, 17)) return 'christmas';
  // seasons (Northern Hemisphere)
  if (within(3, 1, 5, 31)) return 'spring';
  if (within(6, 1, 8, 31)) return 'summer';
  if (within(9, 1, 11, 30)) return 'autumn';
  return 'winter';
}

/* Returns the 9 local paths for a theme's gallery folder.
   Convention: drop nail-1..9.(jpg|png) into assets/gallery/<themeKey>/ then run
   `npm run optimize:images` — it writes nail-1..9.webp, which is what loads here.
   Any missing image falls back to the generic optimized set via onError. */
function evoGalleryImages(key) {
  return Array.from({ length: 9 }, (_, i) => './assets/gallery/' + key + '/nail-' + (i + 1) + '.webp');
}

/* ── Gallery (date-aware: seasonal & holiday themes) ────────────────────── */
function EvoGallery() {
  const { Button, Badge } = EVO_DS;
  const m = useIsMobile();
  const autoKey = React.useMemo(() => evoThemeForDate(new Date()), []);
  const [key, setKey] = React.useState(autoKey);
  const t = EVO_THEMES[key];
  const images = evoGalleryImages(key);
  // chips: a curated rail — current theme first, then the rest
  const chipKeys = [autoKey, ...Object.keys(EVO_THEMES).filter((k) => k !== autoKey)];
  return (
    <section id="evo-gallery" style={{ background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: padY(m) }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18, flexWrap: 'wrap', gap: 16 }}>
          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
            <div style={{ ...evoOverline(), display: 'inline-flex', alignItems: 'center', gap: 8 }}><i className={'ph-fill ' + t.icon} style={{ fontSize: 15 }} /> The Gallery · {t.label}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px, 5vw, 46px)', color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 1.08 }}>{t.title[0]} <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{t.title[1]}</em></h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)', margin: '8px 0 0', letterSpacing: '.04em' }}>{t.caption}</p>
          </div>
          {!m && <Button variant="ghost" iconRight={<i className="ph-light ph-arrow-right" />}>View full gallery</Button>}
        </div>
        {/* chips hidden — theme auto-selects from date, no UI needed */}
        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: m ? 10 : 16 }}>
          {images.map((src, i) => (
            <div key={src} style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--mocha-200)', boxShadow: 'var(--shadow-sm)' }}>
              <img
                src={src}
                alt={t.tags[i % t.tags.length] + ' nail art'}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = EVO_GALLERY[i % EVO_GALLERY.length]; e.currentTarget.onerror = null; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '26px 14px 12px', background: 'linear-gradient(180deg, transparent, rgba(42,29,21,0.72))', display: 'flex', alignItems: 'center', gap: 7 }}>
                <i className={'ph-fill ' + t.icon} style={{ color: 'var(--honey-300)', fontSize: 14 }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 500, letterSpacing: '.04em', color: 'var(--cream-50)' }}>{t.tags[i % t.tags.length]}</span>
              </div>
            </div>
          ))}
        </div>
        {m && <div style={{ marginTop: 20 }}><Button variant="secondary" block iconRight={<i className="ph-light ph-arrow-right" />}>View full gallery</Button></div>}
      </div>
    </section>
  );
}

/* ── Testimonials (auto-fit → 1 col on mobile) ──────────────────────────── */
function EvoTestimonials() {
  const m = useIsMobile();
  const quotes = [
    ['The best hour of my month. I left feeling like I\u2019d been on holiday.', 'Mei R.'],
    ['My scalp has never felt so clean — and the nail art is unreal.', 'Jordan P.'],
    ['Calm, careful, and genuinely luxurious. Worth every minute.', 'Alyssa T.'],
    ['I booked a head spa on a whim and now it\u2019s my monthly ritual.', 'Dana K.'],
  ];
  return (
    <section style={{ background: 'var(--surface-soft)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: padY(m) }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={evoOverline()}>From Our Clients</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 12 : 16, maxWidth: 720, margin: '0 auto' }}>
          {quotes.slice(0, 3).map(([q, who]) => (
            <figure key={who} style={{ margin: 0, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: '16px 16px', display: 'flex', flexDirection: 'column' }}>
              <i className="ph-light ph-quotes" style={{ fontSize: 18, color: 'var(--gilt)' }} />
              <blockquote style={{ flex: 1, margin: '8px 0 12px', fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: 1.35, color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>{q}</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid var(--border-subtle)', paddingTop: 10 }}>
                <span style={{ color: 'var(--honey-500)', letterSpacing: '1.5px', fontSize: 11 }}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{who}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Visit / hours / book (stacks on mobile) ────────────────────────────── */
/* ── Visit / hours / map (stacks on mobile) ─────────────────────────────── */
function EvoVisit() {
  const m = useIsMobile();
  const c = window.CNHS_MENU.contact;
  const hours = [['Mon – Fri', '9:00 AM – 7:00 PM'], ['Saturday', '9:00 AM – 6:00 PM'], ['Sunday', '10:00 AM – 5:00 PM']];
  const MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5392476754278!2d-83.2028395!3d40.18666340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838eb3894a54019%3A0x8281989e1af8745c!2sChic%20Nail%20and%20Head%20Spa!5e1!3m2!1sen!2s!4v1780990941973!5m2!1sen!2s';
  const mapH = m ? 280 : 400;
  return (
    <section id="evo-visit" style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: padY(m), display: 'grid', gridTemplateColumns: m ? '1fr' : '0.8fr 1.2fr', gap: m ? 28 : 48, alignItems: 'stretch' }}>
        <div>
          <div style={evoOverline()}>Visit Us</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px, 5vw, 44px)', color: 'var(--text-strong)', margin: '12px 0 22px', lineHeight: 1.08 }}>Find us in <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Plain City</em></h2>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
            <i className="ph-light ph-map-pin" style={{ fontSize: 22, color: 'var(--gilt)', marginTop: 2 }} />
            <span style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{c.addr1}<br />{c.addr2}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 22 }}>
            <i className="ph-light ph-phone" style={{ fontSize: 22, color: 'var(--gilt)' }} />
            <span style={{ fontSize: 16, color: 'var(--text-secondary)' }}>{c.phone}</span>
          </div>
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 18 }}>
            {hours.map(([d, h]) => (
              <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 15, color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--text-muted)' }}>{d}</span><span style={{ fontWeight: 500 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: mapH, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-subtle)' }}>
          <iframe title="Chic Nail & Head Spa on Google Maps" src={MAP} width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: mapH }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

/* ── Footer (stacks on mobile) ──────────────────────────────────────────── */
function EvoFooter() {
  const { Button } = EVO_DS;
  const m = useIsMobile();
  const c = window.CNHS_MENU.contact;
  return (
    <footer style={{ background: 'var(--espresso-950)', color: 'var(--cream-50)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: (m ? '48px ' : '64px ') + padX(m) + (m ? ' 32px' : ' 36px') }}>
        {/* Brand: logo, then centered social icons, then a large Book now */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
          <img src="./assets/logo-lockup-reversed.png" alt="Chic Nail & Head Spa" style={{ height: m ? 92 : 112 }} />
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            {[['facebook', 'ph-facebook-logo', 'Facebook'], ['instagram', 'ph-instagram-logo', 'Instagram'], ['google', 'ph-google-logo', 'Google reviews']].map(([key, icon, label]) => (
              <a key={key} href={c.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(185,142,79,0.5)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--honey-300)', fontSize: 22, textDecoration: 'none', transition: 'background var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--honey-500)'; e.currentTarget.style.color = 'var(--espresso-950)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--honey-300)'; }}>
                <i className={'ph-fill ' + icon} />
              </a>
            ))}
          </div>
          <Button variant="primary" size="lg" style={{ fontSize: 17, padding: '16px 48px' }} onClick={() => { window.location.href = 'tel:+16143899999'; }}>Book now</Button>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(185,142,79,0.22)', padding: '20px ' + padX(m), textAlign: 'center', fontSize: 12, color: 'var(--taupe-400)' }}>© 2026 Chic Nail &amp; Head Spa · Plain City, Ohio</div>
    </footer>
  );
}

function EvoHome() {
  const [ready, setReady] = React.useState(!!(window.ChicNailHeadSpaDesignSystem_843afb && window.ChicNailHeadSpaDesignSystem_843afb.Button && window.CNHS_MENU));
  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => { if (window.ChicNailHeadSpaDesignSystem_843afb && window.ChicNailHeadSpaDesignSystem_843afb.Button && window.CNHS_MENU) { setReady(true); clearInterval(t); } }, 50);
    return () => clearInterval(t);
  }, [ready]);
  // On load: scroll to top, or honor an #evo-<id> hash from a cross-page link.
  React.useEffect(() => {
    if (!ready) return;
    const id = (window.location.hash || '').replace(/^#/, '');
    if (id) {
      const t = setTimeout(() => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [ready]);
  if (!ready) return null;
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <EvoHeader />
      <EvoHero />
      <EvoTrust />
      <EvoServices />
      <EvoReserve />
      <EvoGallery />
      <EvoTestimonials />
      <EvoVisit />
      <EvoFooter />
    </div>
  );
}

Object.assign(window, { EvoHome, EvoHeader, EvoFooter });

import React from 'react';
import { useMobile } from './shared/useMobile.js';

const BOOK_URL = 'tel:+16143899999';

/* Category metadata that isn't in menu-data (notes + coming-soon state). */
const CAT_META = {
  headspa: { comingSoon: true, sub: 'Coming soon' },
  pedi:    { note: 'Gel color available on all pedicures · +$20.' },
  kids:    { note: 'Ages 10 & under.' },
  extras:  { note: 'Add to any service.' },
};
/* Lowest dollar amount in a category, e.g. '$66+' -> 66. */
function catFrom(cat) {
  const nums = window.CNHS_MENU.full
    .filter((s) => s.cat === cat)
    .map((s) => { const x = String(s.price).match(/\$(\d+)/); return x ? parseInt(x[1], 10) : Infinity; })
    .filter((n) => isFinite(n));
  return nums.length ? Math.min.apply(null, nums) : null;
}
/* Build the accordion categories straight from menu-data — single source of truth. */
function buildCats() {
  return window.CNHS_MENU.cats
    .filter((c) => c.value !== 'all')
    .map((c) => {
      const meta = CAT_META[c.value] || {};
      const min = catFrom(c.value);
      return {
        key: c.value,
        label: c.label,
        comingSoon: !!meta.comingSoon,
        note: meta.note,
        sub: meta.sub || (min != null ? 'From $' + min : ''),
      };
    });
}

function Tag({ variant, children }) {
  const map = {
    accent:  { bg: 'var(--accent-tint)',    color: 'var(--accent)' },
    gilt:    { bg: 'var(--gilt-soft)',       color: 'var(--honey-600)' },
    reserve: { bg: 'rgba(122,37,53,.08)',    color: '#7a2535' },
  };
  const s = map[variant] || map.accent;
  return <span style={{ background: s.bg, color: s.color, fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>{children}</span>;
}

function AccordionRow({ cat, isOpen, onToggle }) {
  const m = useMobile();
  const items = window.CNHS_MENU.full.filter((s) => s.cat === cat.key);
  const contentRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen, items.length]);

  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <button onClick={onToggle} aria-expanded={isOpen} disabled={cat.comingSoon}
        style={{ width: '100%', background: 'none', border: 'none', cursor: cat.comingSoon ? 'default' : 'pointer', padding: m ? '20px 0' : '22px 0', display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: m ? 28 : 34, color: isOpen ? 'var(--accent)' : 'var(--text-strong)', transition: 'color 200ms ease', lineHeight: 1 }}>
            {cat.label}
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: cat.comingSoon ? 'var(--honey-500)' : 'var(--text-muted)', letterSpacing: '.06em' }}>{cat.sub}</span>
        </div>
        {!cat.comingSoon && (
          <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid ' + (isOpen ? 'var(--accent)' : 'var(--border-default)'), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'border-color 200ms ease, transform 200ms ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
            <i className="ph-light ph-plus" style={{ fontSize: 13, color: isOpen ? 'var(--accent)' : 'var(--text-muted)' }} />
          </div>
        )}
        {cat.comingSoon && (
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--honey-500)', background: 'var(--gilt-soft)', padding: '5px 12px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>Soon</span>
        )}
      </button>

      {!cat.comingSoon && (
        <div ref={contentRef} style={{ height: height + 'px', overflow: 'hidden', transition: 'height 280ms cubic-bezier(.4,0,.2,1)' }}>
          <div style={{ paddingBottom: 24 }}>
            {items.map((item, i) => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14.5, color: 'var(--text-strong)' }}>{item.name}</span>
                    {item.dur && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--text-muted)' }}>{item.dur}</span>}
                    {item.tag && <Tag variant={item.tagV}>{item.tag}</Tag>}
                  </div>
                  {item.blurb && <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', margin: '4px 0 0' }}>{item.blurb}</p>}
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--accent)', whiteSpace: 'nowrap', paddingTop: 1 }}>{item.price}</span>
              </div>
            ))}
            {cat.note && (
              <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.6, margin: '16px 0 12px', paddingTop: 14, borderTop: '1px dotted var(--border-default)' }}>
                <i className="ph-light ph-star" style={{ color: 'var(--gilt)', marginRight: 6 }} />{cat.note}
              </p>
            )}
            <div style={{ marginTop: 16 }}>
              <a href={BOOK_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 500, color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.02em' }}>
                Book now <i className="ph-light ph-arrow-right" style={{ fontSize: 14 }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AccordionHeader() {
  const m = useMobile();
  const [open, setOpen] = React.useState(false);
  const navLinks = [['index.html', 'Home'], ['index.html#evo-gallery', 'Gallery'], ['index.html#evo-visit', 'Visit']];
  const padX = m ? '20px' : 'var(--gutter)';
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(254,247,237,0.86)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 ' + padX, height: m ? 68 : 86, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="index.html" aria-label="Chic Nail & Head Spa — home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="./assets/logo-lockup.png" alt="Chic Nail & Head Spa" style={{ height: m ? 48 : 68 }} />
        </a>
        {m ? (
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} style={{ width: 42, height: 42, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'none', color: 'var(--text-secondary)', fontSize: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className={open ? 'ph-light ph-x' : 'ph-light ph-list'} />
          </button>
        ) : (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', padding: '6px 0' }}>{label}</a>
            ))}
            <a href={BOOK_URL} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: 'var(--cream-50)', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 13, letterSpacing: '.01em', padding: '8px 16px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>Book now</a>
          </nav>
        )}
      </div>
      {m && open && (
        <div style={{ padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid var(--border-subtle)', background: 'rgba(254,247,237,0.96)' }}>
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} style={{ display: 'block', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 500, color: 'var(--text-strong)', padding: '14px 4px', borderBottom: '1px solid var(--border-subtle)' }}>{label}</a>
          ))}
          <div style={{ marginTop: 12 }}>
            <a href={BOOK_URL} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: 'var(--cream-50)', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, padding: '14px 0', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>Book now</a>
          </div>
        </div>
      )}
    </header>
  );
}

function AccordionFooter() {
  const m = useMobile();
  const c = window.CNHS_MENU.contact;
  const padX = m ? '20px' : 'var(--gutter)';
  return (
    <footer style={{ background: 'var(--espresso-950)', color: 'var(--cream-50)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: (m ? '48px ' : '64px ') + padX + (m ? ' 32px' : ' 36px'), display: 'grid', gridTemplateColumns: m ? '1fr' : '1.4fr 1fr', gap: m ? 28 : 40, alignItems: 'start' }}>
        <div style={{ gridColumn: m ? '1 / -1' : 'auto', textAlign: m ? 'center' : 'left', marginBottom: m ? 8 : 0 }}>
          <img src="./assets/logo-lockup-reversed.png" alt="Chic Nail & Head Spa" style={{ height: 116, marginLeft: m ? 0 : -6 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: m ? 'center' : 'flex-start' }}>
          <a href={BOOK_URL} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: 'var(--cream-50)', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, letterSpacing: '.01em', padding: '12px 28px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>Book now</a>
          <div style={{ display: 'flex', gap: 12 }}>
            {[['facebook', 'ph-facebook-logo', 'Facebook'], ['instagram', 'ph-instagram-logo', 'Instagram'], ['google', 'ph-google-logo', 'Google reviews']].map(([key, icon, label]) => (
              <a key={key} href={c.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(185,142,79,0.5)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--honey-300)', fontSize: 20, textDecoration: 'none' }}>
                <i className={'ph-fill ' + icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(185,142,79,0.22)', padding: '20px ' + padX, textAlign: 'center', fontSize: 12, color: 'var(--taupe-400)' }}>© 2026 Chic Nail &amp; Head Spa · Plain City, Ohio</div>
    </footer>
  );
}

export default function ServicesAccordion() {
  const [open, setOpen] = React.useState('pedi');
  const m = useMobile();
  const toggle = (key) => setOpen((o) => o === key ? null : key);
  const c = window.CNHS_MENU.contact;
  const CATS = buildCats();

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
      <AccordionHeader />

      {/* Hero (polish-wall photo) */}
      <section style={{ position: 'relative', minHeight: m ? 320 : 420, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', background: 'var(--espresso-900)' }}>
        <img src="./assets/services-hero.webp" alt="A wall of nail polish colors at Chic Nail & Head Spa" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(42,29,21,0.42) 0%, rgba(42,29,21,0.32) 40%, rgba(42,29,21,0.82) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', width: '100%', padding: m ? '0 20px 32px' : '0 var(--gutter) 48px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--honey-300)', marginBottom: 12 }}>The Menu</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: m ? 46 : 68, lineHeight: 1.02, color: 'var(--cream-50)', margin: 0, letterSpacing: '-0.015em' }}>Services &amp; <em style={{ fontStyle: 'italic', color: 'var(--honey-300)' }}>pricing</em></h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: m ? 14 : 16, color: 'var(--cream-100)', margin: '12px 0 0', maxWidth: 460, lineHeight: 1.6 }}>All prices are starting rates. Ask us for a personalized quote.</p>
        </div>
      </section>

      {/* Accordion */}
      <main style={{ maxWidth: 720, margin: '0 auto', padding: m ? '12px 20px 80px' : '12px 0 100px' }}>
        {CATS.map((cat) => (
          <AccordionRow key={cat.key} cat={cat} isOpen={open === cat.key} onToggle={() => toggle(cat.key)} />
        ))}
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--text-muted)', margin: '28px 0 0', lineHeight: 1.6 }}>
          All prices are starting rates. Call {c.phone} for a personalized quote.
        </p>
      </main>

      <AccordionFooter />
    </div>
  );
}

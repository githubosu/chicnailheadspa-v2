import React from 'react';
import { useMobile } from './shared/useMobile.js';
import { byCat } from './categories.js';

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

export default function ServicesAccordion() {
  const [open, setOpen] = React.useState('pedi');
  const m = useMobile();
  const toggle = (key) => setOpen((o) => o === key ? null : key);
  const c = window.CNHS_MENU.contact;
  const CATS = buildCats();

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: 'var(--espresso-900)', height: m ? 60 : 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: m ? '0 20px' : '0 48px', position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="index.html" style={{ textDecoration: 'none' }}>
          <img src="./assets/logo-lockup-reversed.png" alt="Chic Nail & Head Spa" style={{ height: m ? 44 : 62 }} />
        </a>
        <a href={BOOK_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--honey-400)', color: 'var(--espresso-900)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, padding: '10px 22px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
          <i className="ph-light ph-calendar-plus" style={{ fontSize: 15 }} />
          {m ? 'Book' : 'Book now'}
        </a>
      </header>

      {/* Page title */}
      <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', padding: m ? '36px 20px 28px' : '52px 80px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Chic Nail &amp; Head Spa</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: m ? 44 : 64, lineHeight: 1, color: 'var(--text-strong)', margin: '0 0 16px' }}>Services &amp; Pricing</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: m ? 14 : 15, color: 'var(--text-muted)', margin: '0 auto', maxWidth: 400, lineHeight: 1.6 }}>
          All prices are starting rates. Ask us for a personalized quote.
        </p>
      </div>

      {/* Accordion */}
      <main style={{ maxWidth: 720, margin: '0 auto', padding: m ? '12px 20px 80px' : '12px 0 100px' }}>
        {CATS.map((cat) => (
          <AccordionRow key={cat.key} cat={cat} isOpen={open === cat.key} onToggle={() => toggle(cat.key)} />
        ))}
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--text-muted)', margin: '28px 0 0', lineHeight: 1.6 }}>
          All prices are starting rates. Call {c.phone} for a personalized quote.
        </p>

        {/* Browse by category — internal links to the per-category pages */}
        <div style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>Browse by category</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {CATS.map((cat) => {
              const meta = byCat(cat.key);
              if (!meta) return null;
              return (
                <a key={cat.key} href={`${meta.slug}.html`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '7px 16px' }}>
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--espresso-900)', color: 'var(--cream-100)', padding: m ? '40px 20px' : '56px 48px', textAlign: 'center' }}>
        <img src="./assets/logo-lockup-reversed.png" alt="Chic Nail & Head Spa" style={{ height: 48, marginBottom: 20 }} />
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 14, lineHeight: 2, color: 'var(--taupe-400)' }}>
          <div>{c.addr1}, {c.addr2}</div>
          <div>{c.phone}</div>
          <div style={{ marginTop: 4 }}>{c.hours ? c.hours.join(' · ') : ''}</div>
        </div>
        <div style={{ marginTop: 24 }}>
          <a href={BOOK_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--honey-400)', color: 'var(--espresso-900)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, padding: '14px 36px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
            <i className="ph-light ph-calendar-plus" style={{ fontSize: 18 }} />
            Book your appointment
          </a>
        </div>
      </footer>
    </div>
  );
}

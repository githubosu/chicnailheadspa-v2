import React from 'react';
import { useMobile } from './shared/useMobile.js';
import { useScrollReveal } from './shared/useScrollReveal.js';
import { useHeroParallax, HERO_OVERSCAN } from './shared/useHeroParallax.js';

const BOOK_URL = 'book.html';

/* Headline split for the per-word reveal (see .evo-word in effects.css). The
   final word is emitted separately because it carries its own italic styling. */
const HERO_WORDS = ['Services', '&'];

/* Category metadata that isn't in menu-data (notes + coming-soon state). */
const CAT_META = {
  headspa: { comingSoon: true, sub: 'Coming soon' },
  pedi:    { note: 'Gel color available on all pedicures +$20 or Gel French +$25 · Gel removal and regular polish are included with all pedicures.' },
  kids:    { note: 'Ages 10 & under.' },
  extras:  { note: 'Add to any service.' },
  art:     { note: 'Add to any service.' },
};
/* Build the accordion categories straight from menu-data — single source of truth. */
function buildCats() {
  return window.CNHS_MENU.cats
    .filter((c) => c.value !== 'all')
    .map((c) => {
      const meta = CAT_META[c.value] || {};
      return {
        key: c.value,
        label: c.label,
        comingSoon: !!meta.comingSoon,
        note: meta.note,
        sub: meta.sub || '',
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
                    {item.tag2 && <Tag variant={item.tag2V}>{item.tag2}</Tag>}
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
              <a className="evo-link-sweep" href={BOOK_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 500, color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.02em' }}>
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
  const EvoHeader = window.EvoHeader, EvoFooter = window.EvoFooter;
  // Stacked rows — one column, so they cascade down with the scroll. No `key`:
  // opening a row must not re-trigger the reveal on the whole list.
  const rowsRef = useScrollReveal(undefined, 1);
  const hero = useHeroParallax();

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
      <EvoHeader overHero />

      {/* Hero (polish-wall photo) — sits under the transparent shared header */}
      <section ref={hero.sectionRef} style={{ position: 'relative', minHeight: m ? 360 : 460, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', background: 'var(--espresso-900)' }}>
        {/* Parallax wrapper — overscans upward so pushing the photo down the
            page never exposes a gap at its top edge. */}
        <div ref={hero.bgRef} style={{ position: 'absolute', top: -HERO_OVERSCAN, left: 0, right: 0, bottom: 0, willChange: 'transform' }}>
          <img className="evo-hero-image" src="./assets/services-hero.webp" alt="A wall of nail polish colors at Chic Nail & Head Spa" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        {/* Overlay stays pinned to the section — it must not drift with the photo. */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(42,29,21,0.62) 0%, rgba(42,29,21,0.40) 38%, rgba(42,29,21,0.85) 100%)' }} />
        <div ref={hero.copyRef} style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', width: '100%', padding: m ? '0 20px 32px' : '0 var(--gutter) 48px', willChange: 'transform, opacity' }}>
          <div className="evo-hero-rise" style={{ '--evo-hero-i': 0, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--honey-300)', marginBottom: 12 }}>The Menu</div>
          {/* Per-word masked rise, matching the homepage hero. No evo-hero-rise
              on the h1 — the words are the entrance. Indices start at 1 so the
              "The Menu" overline still lands first. */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: m ? 46 : 68, lineHeight: 1.02, color: 'var(--cream-50)', margin: 0, letterSpacing: '-0.015em' }}>
            {HERO_WORDS.map((w, i) => (
              // The {' '} is load-bearing: it keeps the h1's text a real phrase
              // for screen readers, SEO and copy-paste. Spacing via margin would
              // look identical but collapse it into one unbroken run.
              <React.Fragment key={w + i}>
                <span className="evo-word-mask">
                  <span className="evo-word" style={{ '--evo-word-i': i + 1 }}>{w}</span>
                </span>{' '}
              </React.Fragment>
            ))}
            <span className="evo-word-mask">
              <span className="evo-word" style={{ '--evo-word-i': HERO_WORDS.length + 1 }}>
                <em style={{ fontStyle: 'italic', color: 'var(--honey-300)' }}>pricing</em>
              </span>
            </span>
          </h1>
          <p className="evo-hero-rise" style={{ '--evo-hero-i': 2, fontFamily: 'var(--font-sans)', fontSize: m ? 14 : 16, color: 'var(--cream-100)', margin: '12px 0 0', maxWidth: 460, lineHeight: 1.6 }}>All prices are starting rates. Ask us for a personalized quote.</p>
        </div>
      </section>

      {/* Accordion */}
      <main ref={rowsRef} style={{ maxWidth: 720, margin: '0 auto', padding: m ? '12px 20px 80px' : '12px 0 100px' }}>
        {CATS.map((cat) => (
          <AccordionRow key={cat.key} cat={cat} isOpen={open === cat.key} onToggle={() => toggle(cat.key)} />
        ))}
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--text-muted)', margin: '28px 0 0', lineHeight: 1.6 }}>
          All prices are starting rates. Call {c.phone} for a personalized quote.
        </p>
      </main>

      <EvoFooter />
    </div>
  );
}

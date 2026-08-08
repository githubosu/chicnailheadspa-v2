import React from 'react';
import { useMobile } from './shared/useMobile.js';
import { byCat } from './categories.js';

const BOOK_TEL = 'tel:+16143899999';

function Tag({ variant, children }) {
  const map = {
    accent:  { bg: 'var(--accent-tint)', color: 'var(--accent)' },
    gilt:    { bg: 'var(--gilt-soft)',    color: 'var(--honey-600)' },
    reserve: { bg: 'rgba(122,37,53,.08)', color: '#7a2535' },
  };
  const s = map[variant] || map.accent;
  return <span style={{ background: s.bg, color: s.color, fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>{children}</span>;
}

export default function CategoryPage({ cat }) {
  const m = useMobile();
  const meta = byCat(cat);
  const EvoHeader = window.EvoHeader, EvoFooter = window.EvoFooter;
  const items = window.CNHS_MENU.full.filter((s) => s.cat === cat);
  const label = (window.CNHS_MENU.cats.find((c) => c.value === cat) || {}).label || cat;

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <EvoHeader />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: m ? '92px 24px 0' : '110px 48px 0' }}>
        <ol style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, margin: 0, padding: 0, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)' }}>
          <li><a href="index.html" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</a></li>
          <li aria-hidden="true">·</li>
          <li><a href="services-accordion.html" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</a></li>
          <li aria-hidden="true">·</li>
          <li aria-current="page" style={{ color: 'var(--text-secondary)' }}>{label}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: m ? '20px 24px 8px' : '28px 48px 8px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--honey-600)', marginBottom: 12 }}>{meta ? meta.eyebrow : 'Services'}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: m ? 48 : 64, lineHeight: 1, color: 'var(--text-strong)', margin: '0 0 16px' }}>{label}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: m ? 16 : 18, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 560, margin: 0 }}>{meta ? meta.intro : ''}</p>
        <div style={{ maxWidth: 560, height: 1, background: 'linear-gradient(90deg, var(--gilt) 0%, var(--gilt-soft) 60%, transparent 100%)', margin: '28px 0 0' }} />
      </header>

      {/* Services list */}
      <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: m ? '24px 24px 72px' : '32px 48px 96px' }}>
        {meta && meta.comingSoon ? (
          <div style={{ maxWidth: 560, background: 'var(--surface-soft)', border: '1px solid var(--gilt-soft)', borderRadius: 'var(--radius-xl)', padding: m ? '36px 24px' : '52px 40px' }}>
            <i className="ph-light ph-drop" style={{ fontSize: 40, color: 'var(--gilt)' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, color: 'var(--text-strong)', margin: '14px 0 10px' }}>Opening soon</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 8px', maxWidth: 440 }}>Our restorative scalp rituals open later this season. Call and we&rsquo;ll let you know the moment booking opens.</p>
            <a href={BOOK_TEL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>(614) 389-9999 <i className="ph-light ph-arrow-right" /></a>
          </div>
        ) : (
          <div style={{ maxWidth: 720 }}>
            {items.map((item, i) => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 0', borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, color: 'var(--text-strong)' }}>{item.name}</span>
                    {item.dur && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{item.dur}</span>}
                    {item.tag && <Tag variant={item.tagV}>{item.tag}</Tag>}
                    {item.tag2 && <Tag variant={item.tag2V}>{item.tag2}</Tag>}
                  </div>
                  {item.blurb && <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '5px 0 0', maxWidth: 560 }}>{item.blurb}</p>}
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--accent)', whiteSpace: 'nowrap', paddingTop: 1 }}>{item.price}</span>
              </div>
            ))}
            <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--text-muted)', margin: '22px 0 0' }}>
              Prices are starting rates. Call {window.CNHS_MENU.contact.phone} for a personalized quote.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="book.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: 'var(--on-accent)', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15, padding: '13px 28px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                <i className="ph-light ph-calendar-check" /> Book {label.toLowerCase()}
              </a>
              <a href="services-accordion.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--accent)', textDecoration: 'none' }}>
                All services <i className="ph-light ph-arrow-right" />
              </a>
            </div>
          </div>
        )}
      </main>

      <EvoFooter />
    </div>
  );
}

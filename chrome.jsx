/* Shared chrome for the Chic Nail & Head Spa website kit:
   Header, Footer, and a tasteful Photo placeholder (monogram watermark on a
   warm field) standing in for the studio's real photography. */
const DS = window.ChicNailHeadSpaDesignSystem_843afb;
const { Button } = DS;

/* ── Photo placeholder ──────────────────────────────────────────────────── */
function Photo({ ratio = '4 / 3', radius = 'var(--radius-xl)', tone = 'mocha', label = 'Photography', style = {}, children }) {
  const bg = tone === 'espresso' ? 'var(--espresso-900)'
           : tone === 'cream' ? 'var(--cream-100)'
           : 'var(--mocha-200)';
  const mono = tone === 'espresso' ? './assets/monogram-cream.png' : './assets/monogram.png';
  return (
    <div style={{
      position: 'relative', aspectRatio: ratio, width: '100%', background: bg,
      borderRadius: radius, overflow: 'hidden', display: 'flex',
      alignItems: 'center', justifyContent: 'center', ...style,
    }}>
      <img src={mono} alt="" style={{ height: '38%', opacity: 0.16 }} />
      {label && (
        <span style={{
          position: 'absolute', bottom: 14, right: 16, fontFamily: 'var(--font-sans)',
          fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
          color: tone === 'espresso' ? 'var(--honey-300)' : 'var(--mocha-600)', opacity: 0.7,
        }}>{label}</span>
      )}
      {children}
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────────────────────── */
function Header({ onNav, current = 'home' }) {
  const links = [
    ['ritual', 'The Ritual'],
    ['services', 'Services'],
    ['headspa', 'Head Spa'],
    ['gift', 'Gift Cards'],
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(254,247,237,0.82)', backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => onNav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
          <img src="./assets/logo-lockup.png" alt="Chic Nail & Head Spa" style={{ height: 42 }} />
        </button>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {links.map(([key, label]) => (
            <button key={key} onClick={() => { if (key === 'services') { window.location.href = 'services-accordion.html'; } else { onNav('home'); } }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                fontSize: 14, fontWeight: 500, letterSpacing: '.02em',
                color: current === key ? 'var(--accent)' : 'var(--text-secondary)',
                padding: '6px 0', transition: 'color var(--dur) var(--ease-standard)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = current === key ? 'var(--accent)' : 'var(--text-secondary)'}>
              {label}
            </button>
          ))}
          <Button variant="primary" size="sm" onClick={() => onNav('booking')}>Reserve a time</Button>
        </nav>
      </div>
    </header>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────────── */
function Footer({ onNav }) {
  const col = (title, items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--honey-300)', marginBottom: 4 }}>{title}</div>
      {items.map((t) => (
        <span key={t} style={{ fontSize: 14, color: 'var(--cream-200)', lineHeight: 1.5 }}>{t}</span>
      ))}
    </div>
  );
  return (
    <footer style={{ background: 'var(--espresso-900)', color: 'var(--cream-50)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--gutter) 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <img src="./assets/logo-lockup-reversed.png" alt="Chic Nail & Head Spa" style={{ height: 84, marginLeft: -6 }} />
            <p style={{ color: 'var(--taupe-400)', fontSize: 14, lineHeight: 1.65, maxWidth: 260, marginTop: 8 }}>
              An unhurried hour for nails and scalp. Settle in. We'll take it from here.
            </p>
          </div>
          {col('Visit', [window.CNHS_MENU.contact.addr1, window.CNHS_MENU.contact.addr2, window.CNHS_MENU.contact.phone])}
          {col('Hours', window.CNHS_MENU.contact.hours)}
          {col('Follow', ['Instagram', 'Journal', 'Newsletter'])}
        </div>
        <div style={{
          marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(185,142,79,0.28)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'var(--taupe-400)', letterSpacing: '.02em',
        }}>
          <span>© 2026 Chic Nail &amp; Head Spa</span>
          <span style={{ display: 'flex', gap: 22 }}>
            <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav('booking');}} style={{ color: 'var(--cream-200)' }}>Book</a>
            <a href="#" style={{ color: 'var(--cream-200)' }}>Privacy</a>
            <a href="#" style={{ color: 'var(--cream-200)' }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* Shared section heading (overline + serif title) */
function SectionHead({ overline, title, align = 'left', style = {} }) {
  return (
    <div style={{ textAlign: align, ...style }}>
      <div className="ds-overline" style={{ marginBottom: 12 }}>{overline}</div>
      <h2 style={{ fontSize: 'var(--fs-h2)', margin: 0, maxWidth: 620, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>{title}</h2>
    </div>
  );
}

Object.assign(window, { Photo, Header, Footer, SectionHead });

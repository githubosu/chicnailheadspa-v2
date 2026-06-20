/* Home — marketing landing for the website kit. Renders page sections; the
   index shell wraps it with Header + Footer. */
const HOME_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const { Button: HButton, Card: HCard, Badge: HBadge } = HOME_DS;
const { Photo: HPhoto, SectionHead: HSectionHead } = window;

/* Featured services come from the shared menu data (window.CNHS_MENU). */

function Home({ onNav }) {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px var(--gutter) 96px',
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center',
        }}>
          <div>
            <div className="ds-overline" style={{ marginBottom: 20 }}>Nail &amp; Head Spa · Plain City, OH</div>
            <h1 style={{ fontSize: 'var(--fs-display-2)', lineHeight: 1.04, margin: 0, letterSpacing: '-0.015em' }}>
              Settle in.<br />We&rsquo;ll take it<br />from <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>here</em>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 440, margin: '24px 0 32px' }}>
              An unhurried hour for nails and scalp. Warm water, slow hands, and a quiet room — the kind of care you feel for days.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('booking')}>Reserve a time</Button>
              <Button variant="ghost" size="lg" onClick={() => { window.location.href = 'services-accordion.html'; }} iconRight={<i className="ph-light ph-arrow-right" />}>Browse the menu</Button>
            </div>
          </div>
          <HPhoto ratio="4 / 5" label="Studio · hero" />
        </div>
      </section>

      {/* Services preview */}
      <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
          <HSectionHead align="center" overline="The Menu" title="A short list, done beautifully" style={{ marginBottom: 48 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {window.CNHS_MENU.featured.map((s) => (
              <HCard key={s.name} padding="sm" interactive onClick={() => onNav('booking')} style={{ display: 'flex', flexDirection: 'column' }}>
                <HPhoto ratio="5 / 4" radius="var(--radius-md)" label={null} />
                <div style={{ padding: '18px 8px 8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, margin: 0, color: 'var(--text-strong)' }}>{s.name}</h3>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--accent)' }}>{s.price}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '8px 0 12px' }}>
                    <HBadge variant="neutral" icon={<i className="ph-light ph-clock" />}>{s.dur}</HBadge>
                    {s.tag && <HBadge variant={s.tagV}>{s.tag}</HBadge>}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{s.blurb}</p>
                </div>
              </HCard>
            ))}
          </div>
        </div>
      </section>

      {/* The Ritual — inverse band */}
      <section style={{ background: 'var(--espresso-900)', color: 'var(--cream-50)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
          display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center',
        }}>
          <HPhoto ratio="1 / 1" tone="espresso" label="The ritual" />
          <div>
            <div className="ds-overline" style={{ color: 'var(--honey-300)', marginBottom: 16 }}>The Head Spa</div>
            <h2 style={{ color: 'var(--cream-50)', fontSize: 'var(--fs-h1)', margin: '0 0 28px', lineHeight: 1.1 }}>
              Forty minutes of quiet.<br />Warm water. Slow hands.
            </h2>
            {[
              ['01', 'Consultation', 'We start with your scalp and your week — then tailor the pressure and the oils.'],
              ['02', 'The cleanse', 'A double cleanse and warm steam, worked slowly from the crown to the nape.'],
              ['03', 'The rest', 'Cool towels, a quiet room, and tea. You leave lighter than you came.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ display: 'flex', gap: 20, padding: '16px 0', borderTop: '1px solid rgba(185,142,79,0.24)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--honey-400)', minWidth: 36 }}>{n}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16, marginBottom: 4 }}>{t}</div>
                  <p style={{ color: 'var(--taupe-400)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 420 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: 'var(--surface-soft)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: 'var(--section-y) var(--gutter)', textAlign: 'center' }}>
          <i className="ph-light ph-quotes" style={{ fontSize: 40, color: 'var(--gilt)' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 34, lineHeight: 1.3, color: 'var(--text-strong)', margin: '16px 0 24px', letterSpacing: '-0.01em' }}>
            I came in for a manicure and left feeling like I&rsquo;d been on holiday. The head spa is the best hour of my month.
          </p>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Mei R. · Regular guest</div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--surface-card)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px var(--gutter)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--fs-h1)', margin: '0 0 12px' }}>An hour is waiting for you</h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', margin: '0 0 28px' }}>Wednesday through Sunday, by appointment.</p>
          <Button variant="primary" size="lg" onClick={() => onNav('booking')}>Begin booking</Button>
        </div>
      </section>
    </main>
  );
}

const Button = HButton;
Object.assign(window, { Home });

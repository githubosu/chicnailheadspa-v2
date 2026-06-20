/* The Ritual — editorial experience page. Reuses the established design
   language from Home.jsx: split image/text bands, a numbered-step inverse
   (espresso) band, feature cards, a quote band, and a closing CTA band.
   All styling is inline tokens + the ds-overline class; primitives from the
   design-system bundle; imagery via the shared Photo placeholder. */
const RIT_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const { Button: RButton, Card: RCard } = RIT_DS;
const { Photo: RPhoto, SectionHead: RSectionHead } = window;

function TheRitual({ onNav }) {
  return (
    <main style={{ background: 'var(--surface-page)' }}>
      {/* Hero */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px var(--gutter) 96px',
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center',
        }}>
          <div>
            <div className="ds-overline" style={{ marginBottom: 20 }}>The Ritual</div>
            <h1 style={{ fontSize: 'var(--fs-display-2)', lineHeight: 1.04, margin: 0, letterSpacing: '-0.015em' }}>
              An unhurried hour,<br />made <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>for you</em>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 460, margin: '24px 0 32px' }}>
              Every visit is a slow, considered ritual — not a transaction. Warm water,
              soft light, and time that belongs to no one but you.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <RButton variant="primary" size="lg" onClick={() => onNav('booking')}>Reserve a time</RButton>
              <RButton variant="ghost" size="lg" onClick={() => onNav('headspa')} iconRight={<i className="ph-light ph-arrow-right" />}>The head spa</RButton>
            </div>
          </div>
          <RPhoto ratio="4 / 5" label="Studio · the ritual" />
        </div>
      </section>

      {/* Philosophy — split band */}
      <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)',
          display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 64, alignItems: 'center',
        }}>
          <RPhoto ratio="4 / 3" tone="cream" label="Linen & ceramics" />
          <div>
            <div className="ds-overline" style={{ marginBottom: 16 }}>Why we slow down</div>
            <h2 style={{ fontSize: 'var(--fs-h1)', margin: '0 0 20px', lineHeight: 1.1 }}>
              Care you can feel for days
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 16px', maxWidth: 480 }}>
              We keep the room quiet and the pace gentle on purpose. Rushed hands leave
              rushed results — so we don&rsquo;t rush. Each step is given the time it deserves,
              from the first warm soak to the last cool towel.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: 480 }}>
              The result isn&rsquo;t just polished nails or a clean scalp. It&rsquo;s the kind of
              restoration you carry with you long after you leave.
            </p>
          </div>
        </div>
      </section>

      {/* The steps — inverse espresso band */}
      <section style={{ background: 'var(--espresso-900)', color: 'var(--cream-50)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="ds-overline" style={{ color: 'var(--honey-300)', marginBottom: 16 }}>How it unfolds</div>
            <h2 style={{ color: 'var(--cream-50)', fontSize: 'var(--fs-h1)', margin: 0, lineHeight: 1.1 }}>
              Four quiet movements
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {[
              ['01', 'Arrive', 'Settle in with tea while we talk through your day and what you need.'],
              ['02', 'Prepare', 'A warm soak and gentle cleanse to soften, calm, and ready the skin or scalp.'],
              ['03', 'The treatment', 'Slow, attentive work — shaping, color, or a long drifting massage.'],
              ['04', 'Rest', 'Cool towels and a quiet moment. You leave lighter than you came.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ paddingTop: 20, borderTop: '1px solid rgba(185,142,79,0.24)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--honey-400)', marginBottom: 12 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 17, marginBottom: 8 }}>{t}</div>
                <p style={{ color: 'var(--taupe-400)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sensory details — feature cards */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
          <RSectionHead align="center" overline="The little things" title="Details that make it a ritual" style={{ marginBottom: 48 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {[
              ['ph-drop', 'Warm water', 'Always at the right temperature, never a degree off.'],
              ['ph-leaf', 'Linen & eucalyptus', 'Soft robes, warm towels, and the calm of fresh botanicals.'],
              ['ph-moon-stars', 'Unbroken quiet', 'Dim, warm light and a room kept calm — a true pause.'],
            ].map(([ic, t, d]) => (
              <RCard key={t} padding="lg" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 'var(--radius-pill)', background: 'var(--surface-soft)',
                  color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, marginBottom: 20,
                }}>
                  <i className={'ph-light ' + ic} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, margin: '0 0 8px', color: 'var(--text-strong)' }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{d}</p>
              </RCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section style={{ background: 'var(--surface-soft)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: 'var(--section-y) var(--gutter)', textAlign: 'center' }}>
          <i className="ph-light ph-quotes" style={{ fontSize: 40, color: 'var(--gilt)' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 34, lineHeight: 1.3, color: 'var(--text-strong)', margin: '16px 0 24px', letterSpacing: '-0.01em' }}>
            I didn&rsquo;t realize how much I needed an hour that asked nothing of me. I left calmer than I&rsquo;ve felt in months.
          </p>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Priya N. · Head spa guest</div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--surface-card)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px var(--gutter)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--fs-h1)', margin: '0 0 12px' }}>Begin your ritual</h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', margin: '0 0 28px' }}>An unhurried hour is waiting for you.</p>
          <RButton variant="primary" size="lg" onClick={() => onNav('booking')}>Reserve a time</RButton>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { TheRitual });

/* Services — full treatment menu with category tabs and a price list. */
const SVC_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const { Button: SButton, Card: SCard, Badge: SBadge, Tabs: STabs } = SVC_DS;
const { Photo: SPhoto, SectionHead: SSectionHead } = window;

/* Menu + categories come from the shared menu data (window.CNHS_MENU). */

function Services({ onNav }) {
  const [cat, setCat] = React.useState('all');
  const list = window.CNHS_MENU.full.filter((m) => cat === 'all' || m.cat === cat);
  return (
    <main style={{ background: 'var(--surface-page)' }}>
      {/* Intro band */}
      <section style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--gutter) 56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="ds-overline" style={{ marginBottom: 16 }}>The Menu</div>
              <h1 style={{ fontSize: 'var(--fs-display-2)', margin: '0 0 18px', lineHeight: 1.05 }}>Services &amp; pricing</h1>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 480, margin: 0 }}>
                A short, considered list. Every treatment includes a consultation and unhurried time in a quiet room.
              </p>
            </div>
            <SPhoto ratio="4 / 3" label="Treatment room" />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36, overflowX: 'auto' }}>
            <STabs items={window.CNHS_MENU.cats} value={cat} onChange={setCat} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {list.map((m) => (
              <SCard key={m.name} padding="md" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, margin: 0, color: 'var(--text-strong)' }}>{m.name}</h3>
                    {m.tag && <SBadge variant={m.tagV}>{m.tag}</SBadge>}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 10px', maxWidth: 520 }}>{m.blurb}</p>
                  {m.dur && <SBadge variant="neutral" icon={<i className="ph-light ph-clock" />}>{m.dur}</SBadge>}
                </div>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, minWidth: 120 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--accent)', lineHeight: 1 }}>{m.price}</span>
                  <SButton variant="secondary" size="sm" onClick={() => onNav('booking')}>Reserve</SButton>
                </div>
              </SCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Services });

/* Confirmation — calm success state after booking. */
const CF_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const { Button: CButton, Card: CCard, Badge: CBadge } = CF_DS;
const { Photo: CPhoto } = window;

function Confirmation({ booking, onNav }) {
  const b = booking || { service: 'Signature Head Spa', date: 'Thu 19', time: '2:00', name: 'Guest', total: 132, addons: [] };
  return (
    <main style={{ background: 'var(--surface-soft)', minHeight: '70vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '88px var(--gutter) 96px', textAlign: 'center' }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%', background: 'var(--accent)', color: 'var(--on-accent)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, marginBottom: 24,
        }}>
          <i className="ph-light ph-check" />
        </div>
        <div className="ds-overline" style={{ marginBottom: 12 }}>You&rsquo;re booked</div>
        <h1 style={{ fontSize: 'var(--fs-display-2)', lineHeight: 1.05, margin: '0 0 16px' }}>See you soon, {b.name}.</h1>
        <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 40px' }}>
          A confirmation is on its way to your inbox. Come a few minutes early, and we&rsquo;ll have tea waiting.
        </p>

        <CCard padding="lg" style={{ textAlign: 'left', maxWidth: 460, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18 }}>
            <div style={{ width: 56, flex: 'none' }}>
              <CPhoto ratio="1 / 1" radius="var(--radius-md)" label={null} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, margin: 0, color: 'var(--text-strong)' }}>{b.service}</h3>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <CBadge variant="neutral" icon={<i className="ph-light ph-calendar-blank" />}>{b.date}</CBadge>
                <CBadge variant="neutral" icon={<i className="ph-light ph-clock" />}>{b.time}</CBadge>
              </div>
            </div>
          </div>
          {b.addons && b.addons.length > 0 && (
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14, marginBottom: 4 }}>
              {b.addons.map((a) => (
                <div key={a.key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--text-secondary)', padding: '4px 0' }}>
                  <span>{a.label}</span><span>+${a.price}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--border-subtle)', paddingTop: 16, marginTop: 8 }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total at studio</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--accent)' }}>${b.total}</span>
          </div>
        </CCard>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36 }}>
          <CButton variant="ghost" onClick={() => onNav('home')}>Back to home</CButton>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { Confirmation });

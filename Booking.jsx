/* Booking — service, date/time, guest details, add-ons, and a live summary.
   On submit, calls onBook(summary) which the shell routes to Confirmation. */
const BK_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const { Button: BButton, Card: BCard, Input: BInput, Select: BSelect, Checkbox: BCheckbox, Tag: BTag, Badge: BBadge } = BK_DS;

/* Bookable services + add-ons come from shared menu data (window.CNHS_MENU). */
const BK_DATES = [
  { key: 'wed', d: 'Wed', n: '18' }, { key: 'thu', d: 'Thu', n: '19' },
  { key: 'fri', d: 'Fri', n: '20' }, { key: 'sat', d: 'Sat', n: '21' }, { key: 'sun', d: 'Sun', n: '22' },
];
const BK_TIMES = ['11:00', '12:30', '2:00', '3:30', '5:00', '6:30'];

function Booking({ onBook }) {
  const BK_SERVICES = window.CNHS_MENU.bookable;
  const BK_ADDONS = window.CNHS_MENU.addons;
  const [service, setService] = React.useState(BK_SERVICES[0].value);
  const [date, setDate] = React.useState('thu');
  const [time, setTime] = React.useState('2:00');
  const [addons, setAddons] = React.useState({});
  const [name, setName] = React.useState('');

  const svc = BK_SERVICES.find((s) => s.value === service) || BK_SERVICES[0];
  const addTotal = BK_ADDONS.reduce((sum, a) => sum + (addons[a.key] ? a.price : 0), 0);
  const total = svc.price + addTotal;
  const dateObj = BK_DATES.find((d) => d.key === date);

  const labelStyle = { fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 10 };

  return (
    <main style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '64px var(--gutter) 96px' }}>
        <div className="ds-overline" style={{ marginBottom: 14 }}>Reserve a time</div>
        <h1 style={{ fontSize: 'var(--fs-h1)', margin: '0 0 40px' }}>Begin booking</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: 40, alignItems: 'start' }}>
          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); onBook({ service, date: `${dateObj.d} ${dateObj.n}`, time, name: name || 'Guest', total, addons: BK_ADDONS.filter(a => addons[a.key]) }); }}
            style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <BSelect label="Treatment" value={service} onChange={(e) => setService(e.target.value)}
              options={BK_SERVICES.map((s) => ({ value: s.value, label: `${s.value} · $${s.price}` }))} />

            <div>
              <span style={labelStyle}>Choose a day</span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {BK_DATES.map((d) => (
                  <BTag key={d.key} selected={date === d.key} onClick={() => setDate(d.key)}>
                    {d.d} <strong style={{ marginLeft: 4 }}>{d.n}</strong>
                  </BTag>
                ))}
              </div>
            </div>

            <div>
              <span style={labelStyle}>Choose a time</span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {BK_TIMES.map((t) => (
                  <BTag key={t} selected={time === t} onClick={() => setTime(t)}>{t}</BTag>
                ))}
              </div>
            </div>

            <div>
              <span style={labelStyle}>Add to your ritual</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {BK_ADDONS.map((a) => (
                  <BCheckbox key={a.key} checked={!!addons[a.key]}
                    onChange={(e) => setAddons((s) => ({ ...s, [a.key]: e.target.checked }))}
                    label={`${a.label} (+$${a.price})`} />
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <BInput label="Full name" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
              <BInput label="Phone" type="tel" placeholder="(555) 000-0000" />
            </div>
            <BInput label="Email" type="email" icon={<i className="ph-light ph-envelope-simple" />} placeholder="you@email.com" hint="We'll send your confirmation here." required />

            <BButton variant="primary" size="lg" type="submit" block>Confirm reservation</BButton>
          </form>

          {/* Summary */}
          <BCard feature padding="lg" style={{ position: 'sticky', top: 100 }}>
            <div className="ds-overline" style={{ marginBottom: 16 }}>Your reservation</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, color: 'var(--text-strong)', margin: '0 0 4px' }}>{service}</h3>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <BBadge variant="neutral" icon={<i className="ph-light ph-calendar-blank" />}>{dateObj.d} {dateObj.n}</BBadge>
              <BBadge variant="neutral" icon={<i className="ph-light ph-clock" />}>{time}</BBadge>
            </div>
            {[
              [service, `$${svc.price}`],
              ...BK_ADDONS.filter((a) => addons[a.key]).map((a) => [a.label, `$${a.price}`]),
            ].map(([l, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: 15, color: 'var(--text-body)' }}>
                <span>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 18 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--accent)' }}>${total}</span>
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.6, margin: '16px 0 0', textAlign: 'center' }}>
              No charge today — you'll settle in studio. Free to reschedule up to 24 hours ahead.
            </p>
          </BCard>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { Booking });

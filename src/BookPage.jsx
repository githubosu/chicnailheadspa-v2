import React from 'react';
import { useMobile } from './shared/useMobile.js';

/* Online booking — embeds the salon's booking widget (same one chicnailheadspa.com/book uses). */
const BOOKING_EMBED = 'https://manage2.mangoforsalon.com/nextview/onlinebooking/online.html?RVCNo=1552';

export default function BookPage() {
  const m = useMobile();
  const c = window.CNHS_MENU.contact;
  const EvoHeader = window.EvoHeader, EvoFooter = window.EvoFooter;

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
      <EvoHeader />

      {/* Dark intro band — sits under the transparent fixed header */}
      <section style={{ background: 'var(--espresso-900)', paddingTop: m ? 92 : 120 }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: m ? '0 20px 28px' : '0 var(--gutter) 40px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--honey-300)', marginBottom: 12 }}>Reserve your time</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: m ? 40 : 58, lineHeight: 1.05, color: 'var(--cream-50)', margin: 0, letterSpacing: '-0.015em' }}>Book <em style={{ fontStyle: 'italic', color: 'var(--honey-300)' }}>online</em></h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: m ? 14 : 16, color: 'var(--cream-100)', margin: '12px 0 0', maxWidth: 520, lineHeight: 1.6 }}>
            Choose your service, pick a time, and arrive ready to unwind. Prefer to talk? Call us at <a href={'tel:' + c.phone.replace(/[^0-9]/g, '')} style={{ color: 'var(--honey-300)', textDecoration: 'none' }}>{c.phone}</a>.
          </p>
        </div>
      </section>

      {/* Booking widget */}
      <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: m ? '16px 8px 48px' : '24px var(--gutter) 72px' }}>
        <iframe
          src={BOOKING_EMBED}
          title="Book an appointment at Chic Nail & Head Spa"
          style={{ width: '100%', height: m ? '78vh' : '82vh', minHeight: 640, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)' }}
          allow="payment"
        />
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--text-muted)', margin: '16px 0 0', lineHeight: 1.6, textAlign: 'center' }}>
          Trouble booking? Call {c.phone} or email {c.email} — walk-ins are always welcome.
        </p>
      </main>

      <EvoFooter />
    </div>
  );
}

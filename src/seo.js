// Builds the LocalBusiness structured data from menu-data (single source of truth).
// Injected into every page's <head> at build time (see scripts/prerender.mjs) so
// Google can show hours, address, map, and the service list for local search.
const BASE = 'https://githubosu.github.io/chicnailheadspa-v2/';

const HOURS = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
  { days: ['Saturday'], opens: '09:00', closes: '18:00' },
  { days: ['Sunday'], opens: '10:00', closes: '17:00' },
];

const priceNum = (p) => { const m = String(p).match(/\$(\d+)/); return m ? Number(m[1]) : undefined; };

export function localBusinessLd(menu) {
  const c = menu.contact;
  const catLabel = {};
  (menu.cats || []).forEach((x) => { catLabel[x.value] = x.label; });

  const offers = (menu.full || [])
    .map((s) => {
      const price = priceNum(s.price);
      if (price == null) return null;
      return {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price,
        itemOffered: { '@type': 'Service', name: s.name, category: catLabel[s.cat] || undefined },
      };
    })
    .filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': ['NailSalon', 'DaySpa'],
    '@id': BASE + '#business',
    name: 'Chic Nail & Head Spa',
    description: 'A boutique nail salon and Japanese-style head spa in Plain City, Ohio — luxury nail care and restorative scalp rituals.',
    slogan: c.tagline,
    url: BASE,
    logo: BASE + 'assets/logo-lockup.png',
    image: [BASE + 'assets/logo-lockup.png'],
    telephone: '+1-614-389-9999',
    email: c.email,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.addr1,
      addressLocality: 'Plain City',
      addressRegion: 'OH',
      postalCode: '43064',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.186663, longitude: -83.202840 },
    hasMap: c.social && c.social.google,
    areaServed: [
      { '@type': 'City', name: 'Plain City' },
      { '@type': 'AdministrativeArea', name: 'Central Ohio' },
    ],
    openingHoursSpecification: HOURS.map((h) => ({
      '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes,
    })),
    sameAs: [c.social && c.social.facebook, c.social && c.social.instagram, c.social && c.social.google].filter(Boolean),
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services & Pricing', itemListElement: offers },
  };
}

// Ready-to-inject <script> string (split tag so it can't break out of HTML).
export function jsonLdScript(menu) {
  return '<script type="application/ld+json">' + JSON.stringify(localBusinessLd(menu)) + '<\/script>';
}

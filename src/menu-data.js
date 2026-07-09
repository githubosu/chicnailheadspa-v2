/* Chic Nail & Head Spa — single source of truth for the service menu.
   SOURCE: menu-print.html (the studio's printed menu, Jul 2026).
   All prices match the print menu exactly. */
export const CNHS_MENU = {
  contact: {
    addr1: '12076 Sycamore Trace',
    addr2: 'Plain City, OH 43064',
    city: 'Plain City, OH',
    phone: '(614) 389-9999',
    email: 'Chicnailheadspa@gmail.com',
    web: 'chicnailheadspa.com',
    hours: ['Mon – Fri · 10–7', 'Sat · 10–6', 'Sun · 11–5'],
    tagline: 'Luxury · Care · Serenity',
    social: {
      facebook: 'https://www.facebook.com/chicnailandheadspa',
      instagram: 'https://www.instagram.com/chicnailandheadspa/',
      google: 'https://share.google/pF2zbYmZ7iCQ1ilxV',
    },
  },

  /* Filter tabs on the Services page + app. */
  cats: [
    { value: 'all', label: 'All' },
    { value: 'pedi', label: 'Pedicure' },
    { value: 'mani', label: 'Manicure' },
    { value: 'acrylic', label: 'Acrylic' },
    { value: 'gelx', label: 'Gel Extension' },
    { value: 'dip', label: 'Dip Powder' },
    { value: 'headspa', label: 'Head Spa' },
    { value: 'wax', label: 'Waxing' },
    { value: 'kids', label: 'Kids' },
    { value: 'extras', label: 'Extras' },
    { value: 'art', label: 'Art' },
  ],

  /* Full menu — sourced directly from the printed menu. */
  full: [
    // ── Pedicure ──────────────────────────────────────────────────────────
    { cat: 'pedi', name: 'Chic Ritual',      price: '$68', dur: '60 min', tag: 'Popular', tagV: 'accent', tag2: 'Organic', tag2V: 'gilt',
      blurb: 'Warm soak, trim toe, cuticle work, extended massage, callus care, hydrating mask & rich cream wrap with hot-towel + an organic sea-salt scrub treatment for a deep and detoxifying cleanse.' },
    { cat: 'pedi', name: 'The Essential',    price: '$48', dur: '35 min',
      blurb: 'Warm soak, trim toe, cuticle work, light exfoliation, lotion and polish of your choice.' },
    { cat: 'pedi', name: 'The Renewal',      price: '$58', dur: '45 min',
      blurb: 'Essential + callus care, sugar scrub, lotion massage, hydrating mask & rich cream wrap with hot-towel.' },
    { cat: 'pedi', name: 'The Paraffin Luxe', price: '$82', dur: '75 min', tag: 'Organic', tagV: 'gilt',
      blurb: 'The Ritual sealed with a warm organic shea-paraffin dip for deep nourishment.' },
    { cat: 'pedi', name: 'Chic Signature',   price: '$90', dur: '85 min', tag: 'VIP', tagV: 'reserve', tag2: 'Organic', tag2V: 'gilt',
      blurb: 'Organic herbal neck wrap & hot-stone massage — our most indulgent hour.' },

    // ── Manicure ──────────────────────────────────────────────────────────
    { cat: 'mani', name: 'Gel Manicure', price: '$46', tag: 'Popular', tagV: 'gilt',
      blurb: 'Warm soak, shaping, cuticle care & lower arm and hand massage, finished with long-wear gel color for a glossy, 2-3 week manicure. French +$7.' },
    { cat: 'mani', name: 'Manicure Regular Polish', price: '$30',
      blurb: 'Warm soak, shaping, cuticle care & lower arm and hand massage + your selection of regular polish for a finishing touch.' },
    { cat: 'mani', name: 'Manicure Regular Polish + Removal', price: '$40',
      blurb: 'Warm soak, shaping, cuticle care & lower arm and hand massage + Gel, Dip or Acrylic removal.' },

    // ── Acrylic ──────────────────────────────────────────────────────
    { cat: 'acrylic', name: 'Acrylic Full Set',      price: '$66+' },
    { cat: 'acrylic', name: 'Acrylic Fill',          price: '$56+' },
    { cat: 'acrylic', name: 'Ombré Full Set/Fill',   price: '$76+' },
    { cat: 'acrylic', name: 'Pink & White Full Set', price: '$76+' },
    { cat: 'acrylic', name: 'Pink Only',             price: '$56+' },

    // ── Gel Extension ────────────────────────────────────────────────
    { cat: 'gelx', name: 'Builder Gel Full Set', price: '$66+', tag: 'Natural', tagV: 'gilt',
      blurb: 'Strengthening builder gel sculpted over natural nails for added durability & shine.' },
    { cat: 'gelx', name: 'Builder Gel Fill',     price: '$60+', tag: 'Natural', tagV: 'gilt',
      blurb: 'Fresh builder gel applied over your existing set, restoring strength & a flawless finish.' },
    { cat: 'gelx', name: 'Tap Gel Full Set',     price: '$70+',
      blurb: 'Lightweight tap-on gel extensions for a natural & a glossy look.' },
    { cat: 'gelx', name: 'Tap Gel Fill',         price: '$60+',
      blurb: 'Seamless refill of your tap gel set to keep length & shine looking fresh.' },
    { cat: 'gelx', name: 'Gel X Full Set',       price: '$66+',
      blurb: 'Soft gel tip extensions applied with polish gel for a durable, natural-looking set.' },
    { cat: 'gelx', name: 'Gel X Fill',           price: '$60+',
      blurb: 'Rebalanced Gel X set with fresh gel & shaping for continued length & strength.' },

    // ── Dip Powder ──────────────────────────────────────────────────────
    { cat: 'dip', name: 'Dip Powder',               price: '$56' },
    { cat: 'dip', name: 'Dip Full Set / With Tips', price: '$66' },
    { cat: 'dip', name: 'Dip Pink & White',         price: '$66' },

    // ── Head Spa ──────────────────────────────────────────────────────────
    { cat: 'headspa', name: 'Scalp Massage',       dur: '30 min', price: '$45', blurb: 'Pressure-point scalp & shoulder massage that melts away tension.' },
    { cat: 'headspa', name: 'Scalp Treatment',     dur: '45 min', price: '$65', blurb: 'Warm botanical oils nourish a dry, tired scalp with a deep massage.' },
    { cat: 'headspa', name: 'Scalp Detox',         dur: '50 min', price: '$75', blurb: 'A clarifying cleanse that lifts buildup for healthy growth.' },
    { cat: 'headspa', name: 'Signature Head Spa',  dur: '60 min', price: '$95', blurb: 'Scrub, mask, warm steam & a long, drifting massage.', tag: 'Most loved', tagV: 'gilt' },

    // ── Waxing ────────────────────────────────────────────────────────────
    { cat: 'wax', name: 'Eyebrows',             price: '$17+' },
    { cat: 'wax', name: 'Eyebrow Tinting',      price: '$25+' },
    { cat: 'wax', name: 'Eyebrow Wax & Tint',   price: '$40+' },
    { cat: 'wax', name: 'Upper & Lower Lips',   price: '$10' },
    { cat: 'wax', name: 'Chin',                 price: '$10+' },
    { cat: 'wax', name: 'Sideburn',             price: '$15+' },
    { cat: 'wax', name: 'Full Face',            price: '$45+' },
    { cat: 'wax', name: 'Under Arms',           price: '$35+' },
    { cat: 'wax', name: 'Half Arms',            price: '$45+' },
    { cat: 'wax', name: 'Full Arms',            price: '$65+' },
    { cat: 'wax', name: 'Lower Legs',           price: '$50+' },
    { cat: 'wax', name: 'Upper Legs',           price: '$55+' },
    { cat: 'wax', name: 'Full Legs',            price: '$85+' },
    { cat: 'wax', name: 'Back / Chest',         price: '$50+' },
    { cat: 'wax', name: 'Bikini',               price: '$50+' },
    { cat: 'wax', name: 'Brazilian',            price: '$75+' },

    // ── Kids (Ages 10 & Under) ────────────────────────────────────────────
    { cat: 'kids', name: 'Kid Mani',                price: '$20', blurb: 'Gentle shaping & a regular polish in any color.' },
    { cat: 'kids', name: 'Kid Mani Gel',            price: '$35', blurb: 'Shaping & long-wear gel polish.' },
    { cat: 'kids', name: 'Kid Pedi',                price: '$30', blurb: 'A cozy soak, trim & regular polish.' },
    { cat: 'kids', name: 'Kid Pedi Gel',            price: '$45', blurb: 'Soak, trim & long-wear gel polish.' },
    { cat: 'kids', name: 'Kid Polish Change Hands', price: '$12' },
    { cat: 'kids', name: 'Kid Polish Change Toes',  price: '$14' },

    // ── Extras & Add-ons ─────────────────────────────────────────────────
    { cat: 'extras', name: 'Regular Polish Change Toes/Hands', price: '$20' },
    { cat: 'extras', name: 'Gel Change Toes/Hands',            price: '$40' },
    { cat: 'extras', name: 'Gel French Hands',                 price: '+$7' },
    { cat: 'extras', name: 'Cuticle Care',                     price: '+$5' },
    { cat: 'extras', name: 'Nail Art for 2 Fingers',           price: '$7+' },
    { cat: 'extras', name: 'Long Nails',                       price: '+$10' },
    { cat: 'extras', name: 'Nail Repair',                      price: '$8+' },
    { cat: 'extras', name: 'Matte Top Coat',                   price: '+$3' },
    { cat: 'extras', name: 'Dip/Gel Removal',                  price: '$17' },
    { cat: 'extras', name: 'Acrylic Removal',                  price: '$25' },

    // ── Art ──────────────────────────────────────────────────────────────
    { cat: 'art', name: 'Design French', price: '+$10' },
    { cat: 'art', name: 'Chrome',        price: '+$15' },
    { cat: 'art', name: 'Cat Eye',       price: '+$7' },
    { cat: 'art', name: 'Level 1 Art',   price: '$12+', blurb: 'Simple accents — French tips, ombré or a single statement finger.' },
    { cat: 'art', name: 'Level 2 Art',   price: '$35+', blurb: 'Hand-painted designs, gems or foil work across multiple nails.' },
    { cat: 'art', name: 'Level 3 Art',   price: '$66+', blurb: 'Fully custom hand-painted set, 3D detail & charms — priced per design.' },
  ],

};

/* Featured trio for the homepage hero/menu preview (Home.jsx).
   Derived from full[] so prices never need updating in two places.
   Gel Manicure uses a display-only tag override ('Glossy') that differs from its menu tag. */
CNHS_MENU.featured = (function () {
  const find = (name) => ({ ...CNHS_MENU.full.find((s) => s.name === name) });
  return [
    find('Signature Head Spa'),
    find('Chic Ritual'),
    { ...find('Gel Manicure'), tag: 'Glossy', tagV: 'reserve' },
  ];
}());

// Back-compat for code that reads the global (components reference window.CNHS_MENU).
window.CNHS_MENU = CNHS_MENU;

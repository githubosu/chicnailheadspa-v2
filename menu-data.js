/* Chic Nail & Head Spa — single source of truth for the service menu.
   SOURCE: chic-menu-foldout.html (the studio's printed fold-out menu).
   All prices match the fold-out exactly. */
window.CNHS_MENU = {
  contact: {
    addr1: '12076 Sycamore Trace',
    addr2: 'Plain City, OH 43064',
    city: 'Plain City, OH',
    phone: '(614) 389-9999',
    email: 'Chicnailheadspa@gmail.com',
    web: 'chicnailheadspa.com',
    hours: ['Mon – Fri · 9–7', 'Sat · 9–6', 'Sun · 10–5'],
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
    { value: 'gelx', label: 'Gel - X' },
    { value: 'dip', label: 'Dip Powder' },
    { value: 'headspa', label: 'Head Spa' },
    { value: 'wax', label: 'Waxing' },
    { value: 'kids', label: 'Kids' },
    { value: 'extras', label: 'Extras' },
  ],

  /* Full menu — sourced directly from the printed fold-out. */
  full: [
    // ── Pedicure ──────────────────────────────────────────────────────────
    { cat: 'pedi', name: 'Chic Classic',   price: '$48', blurb: 'Warm soak, tidy trim, light exfoliation & lotion.' },
    { cat: 'pedi', name: 'Chic Relax',     price: '$60', blurb: 'The Classic with callus care, a longer massage & a hot-towel wrap.' },
    { cat: 'pedi', name: 'Chic Ritual',    price: '$65', blurb: 'Sugar scrub, hydrating mask & rich cream for soft, glowing skin.', tag: 'Popular', tagV: 'accent' },
    { cat: 'pedi', name: 'Chic Luxe',      price: '$80', blurb: 'The Ritual sealed with a warm paraffin dip — moisture that lingers.' },
    { cat: 'pedi', name: 'Chic Signature', price: '$90', blurb: 'Herbal neck wrap & hot-stone massage — our most indulgent hour.', tag: 'VIP', tagV: 'reserve' },

    // ── Manicure ──────────────────────────────────────────────────────────
    { cat: 'mani', name: 'Chic Manicure',  price: '$30', blurb: 'Warm soak, careful shaping, cuticle care & a soothing hand massage before color.' },
    { cat: 'mani', name: 'Chic Gel',       price: '$46', blurb: 'Long-wear gel color with a glossy finish, up to three weeks.', tag: 'Most loved', tagV: 'gilt' },
    { cat: 'mani', name: 'Polish Change',  price: '$20', blurb: 'A fresh coat in the shade of your choosing — hands or toes.' },
    { cat: 'mani', name: 'Gel Change',     price: '$40', blurb: 'Old gel gently soaked away, replaced with a glassy new color.' },


    // ── Acrylic ──────────────────────────────────────────────────────
    { cat: 'acrylic', name: 'Acrylic Full Set',     price: '$66+' },
    { cat: 'acrylic', name: 'Acrylic Fill',          price: '$56+' },
    { cat: 'acrylic', name: 'Ombré Full Set',        price: '$72+' },
    { cat: 'acrylic', name: 'Ombré Fill',            price: '$67+' },
    { cat: 'acrylic', name: 'Pink & White Full Set', price: '$76+' },
    { cat: 'acrylic', name: 'Pink Only',             price: '$56+' },

    // ── Gel - X ──────────────────────────────────────────────────────
    { cat: 'gelx', name: 'Builder Gel Full Set',  price: '$66+' },
    { cat: 'gelx', name: 'Builder Gel Fill',      price: '$60+' },
    { cat: 'gelx', name: 'Tap Gel Full Set',      price: '$70+' },
    { cat: 'gelx', name: 'Tap Gel Fill',          price: '$60+' },
    { cat: 'gelx', name: 'Gel X Full Set',        price: '$66+' },
    { cat: 'gelx', name: 'Gel X Fill',            price: '$60+' },

    // ── Dip Powder ──────────────────────────────────────────────────────
    { cat: 'dip', name: 'Dip Powder',     price: '$56' },
    { cat: 'dip', name: 'Dip Full Set / With Tips', price: '$66' },
    { cat: 'dip', name: 'Dip Pink & White', price: '$66'},

    // ── Head Spa ──────────────────────────────────────────────────────────
    { cat: 'headspa', name: 'Scalp Massage',       dur: '30 min', price: '$45', blurb: 'Pressure-point scalp & shoulder massage that melts away tension.' },
    { cat: 'headspa', name: 'Scalp Treatment',     dur: '45 min', price: '$65', blurb: 'Warm botanical oils nourish a dry, tired scalp with a deep massage.' },
    { cat: 'headspa', name: 'Scalp Detox',         dur: '50 min', price: '$75', blurb: 'A clarifying cleanse that lifts buildup for healthy growth.' },
    { cat: 'headspa', name: 'Signature Head Spa',  dur: '60 min', price: '$95', blurb: 'Scrub, mask, warm steam & a long, drifting massage.', tag: 'Most loved', tagV: 'gilt' },

    // ── Waxing ────────────────────────────────────────────────────────────
    { cat: 'wax', name: 'Eyebrows',                    price: '$17+' },
    { cat: 'wax', name: 'Eyebrow Tinting',             price: '$25+' },
    { cat: 'wax', name: 'Eyebrow Wax & Tint Combo',    price: '$40+' },
    { cat: 'wax', name: 'Lip',                         price: '$9' },
    { cat: 'wax', name: 'Chin',                        price: '$10+' },
    { cat: 'wax', name: 'Sideburn',                    price: '$15+' },
    { cat: 'wax', name: 'Full Face',                   price: '$45+' },
    { cat: 'wax', name: 'Under Arms',                  price: '$35+' },
    { cat: 'wax', name: 'Half Arms',                   price: '$45+' },
    { cat: 'wax', name: 'Full Arms',                   price: '$65+' },
    { cat: 'wax', name: 'Lower Legs',                  price: '$50+' },
    { cat: 'wax', name: 'Upper Legs',                  price: '$55+' },
    { cat: 'wax', name: 'Full Legs',                   price: '$85+' },
    { cat: 'wax', name: 'Back / Chest',                price: '$50+' },
    { cat: 'wax', name: 'Bikini',                      price: '$45+' },
    { cat: 'wax', name: 'Brazilian',                   price: '$75+' },

    // ── Kids (Ages 10 & Under) ────────────────────────────────────────────
    { cat: 'kids', name: 'Kid Mani',                   price: '$20', blurb: 'Gentle shaping & a regular polish in any color.' },
    { cat: 'kids', name: 'Kid Mani Gel',               price: '$35', blurb: 'Shaping & long-wear gel polish.' },
    { cat: 'kids', name: 'Kid Polish Change · Hands',  price: '$12', blurb: 'Regular polish · Gel $27.' },
    { cat: 'kids', name: 'Kid Pedi',                   price: '$30', blurb: 'A cozy soak, trim & regular polish.' },
    { cat: 'kids', name: 'Kid Pedi Gel',               price: '$45', blurb: 'Soak, trim & long-wear gel polish.' },
    { cat: 'kids', name: 'Kid Polish Change · Toes',   price: '$14', blurb: 'Regular polish · Gel $29.' },

    // ── Extras ───────────────────────────────────────────────────────────
    { cat: 'extras', name: 'Paraffin',          price: '$14' },
    { cat: 'extras', name: 'Nail Art',          price: '$7+ /nail'},
    { cat: 'extras', name: 'Cat Eye',           price: '$17+' },
    { cat: 'extras', name: 'Chrome',            price: '$15' },
    { cat: 'extras', name: 'French',            price: '$7' },
    { cat: 'extras', name: 'Design French',     price: '$10+' },
    { cat: 'extras', name: 'Special Shape',     price: '$7' },
    { cat: 'extras', name: 'Nail Repair',       price: '$8+' },
    { cat: 'extras', name: 'Gel Removal',       price: '$17' },
    { cat: 'extras', name: 'Dip Removal',       price: '$17' },
    { cat: 'extras', name: 'Acrylic Removal',   price: '$25'},
    { cat: 'extras', name: 'Matte Top Coat',    price: '$3' },
  ],

  /* Featured trio for the homepage hero/menu preview (Home.jsx). */
  featured: [
    { name: 'Signature Head Spa', dur: '60 min', price: '$95', tag: 'Most loved', tagV: 'gilt',
      blurb: 'Scrub, mask, warm steam & a long, drifting massage.' },
    { name: 'Chic Ritual',        dur: '50 min', price: '$65', tag: 'Popular', tagV: 'accent',
      blurb: 'Sugar scrub, hydrating mask & rich cream for soft, glowing skin.' },
    { name: 'Chic Gel',           dur: '45 min', price: '$46', tag: 'Glossy', tagV: 'reserve',
      blurb: 'Long-wear gel color with a glossy finish, up to three weeks.' },
  ],

};

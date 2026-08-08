// Per-category metadata for the SEO service pages (slugs, copy, meta).
// One source of truth used by the page component, the HTML generator, and prerender.
export const CATEGORIES = [
  { cat: 'pedi',    slug: 'pedicure',   eyebrow: 'Feet',              comingSoon: false,
    intro: 'Warm soaks, careful callus care and unhurried massage — pedicures finished beautifully.',
    seoTitle: 'Pedicures in Plain City, OH', seoDesc: 'Chic pedicures in Plain City, OH — from a tidy classic to a hot-stone signature ritual. Gel color available. Book your pedicure today.' },
  { cat: 'mani',    slug: 'manicure',   eyebrow: 'Nails',             comingSoon: false,
    intro: 'Careful shaping, cuticle care and long-wear gel — manicures done with patience.',
    seoTitle: 'Manicures & Gel in Plain City, OH', seoDesc: 'Manicures and long-wear gel polish at Chic Nail & Head Spa, Plain City OH. Glossy gel that lasts up to three weeks. Book a manicure.' },
  { cat: 'acrylic', slug: 'acrylic',    eyebrow: 'Enhancements',      comingSoon: false,
    intro: 'Full sets, fills and ombré — durable acrylic enhancements shaped to you.',
    seoTitle: 'Acrylic Nails in Plain City, OH', seoDesc: 'Acrylic full sets, fills, ombré and pink & white at Chic Nail & Head Spa, Plain City OH. Custom length and shape. Book your acrylics.' },
  { cat: 'gelx',    slug: 'gel-x',      eyebrow: 'Gel Extensions',    comingSoon: false,
    intro: 'Lightweight, natural-looking gel extensions — builder, tap and Gel-X.',
    seoTitle: 'Gel-X & Builder Gel in Plain City, OH', seoDesc: 'Gel-X, builder gel and tap gel extensions at Chic Nail & Head Spa, Plain City OH. Lightweight, natural-looking sets. Book Gel-X.' },
  { cat: 'dip',     slug: 'dip-powder', eyebrow: 'Dip Powder',        comingSoon: false,
    intro: 'Strong, lightweight dip powder color and sets.',
    seoTitle: 'Dip Powder Nails in Plain City, OH', seoDesc: 'Dip powder nails, full sets and pink & white at Chic Nail & Head Spa, Plain City OH. Durable, lightweight color. Book dip powder.' },
  { cat: 'headspa', slug: 'head-spa',   eyebrow: 'Scalp',             comingSoon: true,
    intro: 'A Japanese-style head spa — scalp cleansing, warm oils and a long, drifting massage. Opening soon.',
    seoTitle: 'Japanese Head Spa in Plain City, OH', seoDesc: 'A restorative Japanese head spa coming soon to Chic Nail & Head Spa, Plain City OH — scalp massage, treatment, detox and a signature ritual.' },
  { cat: 'wax',     slug: 'waxing',     eyebrow: 'Smooth & polished', comingSoon: false,
    intro: 'Brows to full legs — gentle, tidy waxing.',
    seoTitle: 'Waxing in Plain City, OH', seoDesc: 'Eyebrow, facial and body waxing at Chic Nail & Head Spa, Plain City OH. Brows, lip, arms, legs, bikini and Brazilian. Book waxing.' },
  { cat: 'kids',    slug: 'kids',       eyebrow: 'Ages 10 & under',   comingSoon: false,
    intro: 'Gentle manicures and pedicures for little ones (ages 10 & under).',
    seoTitle: 'Kids Manicures & Pedicures in Plain City, OH', seoDesc: 'Kids manicures and pedicures (ages 10 & under) at Chic Nail & Head Spa, Plain City OH. Gentle, fun and quick. Book a kids service.' },
  { cat: 'extras',  slug: 'extras',     eyebrow: 'Finishing',         comingSoon: false,
    intro: 'Polish changes, cuticle care and the finishing touches that make a set yours.',
    seoTitle: 'Nail Add-Ons in Plain City, OH', seoDesc: 'Polish changes, gel French, cuticle care, nail repair and add-ons at Chic Nail & Head Spa, Plain City OH. Make any service your own.' },
  { cat: 'art',     slug: 'nail-art',   eyebrow: 'Artistry',          comingSoon: false,
    intro: 'From chrome and cat-eye to fully custom hand-painted sets — nail art at every level.',
    seoTitle: 'Nail Art in Plain City, OH', seoDesc: 'Nail art at Chic Nail & Head Spa, Plain City OH — chrome, cat eye, design French and hand-painted custom sets. Book your nail art.' },
];

export const bySlug = (slug) => CATEGORIES.find((c) => c.slug === slug);
export const byCat = (cat) => CATEGORIES.find((c) => c.cat === cat);

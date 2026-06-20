/* Chic Nail & Head Spa — Services page (editorial).
   Faithful static port of ServicesPage.jsx: vertical category sections with
   sticky serif headings + dot-leader pricing rows, rendered from menu-data.js. */
(function () {
  var MENU = window.CNHS_MENU;
  if (!MENU) return;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (m) {
    return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[m]; }); };

  /* Mobile sheet menu */
  var toggle = document.querySelector('.hdr__toggle');
  var nav = document.querySelector('.hdr__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.innerHTML = open ? '<i class="ph-light ph-x"></i>' : '<i class="ph-light ph-list"></i>';
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) nav.classList.remove('is-open'); });
  }

  var CATS = ['pedi', 'mani', 'acrylic', 'gelx', 'dip', 'headspa', 'wax', 'kids', 'extras'];
  var LABELS = { pedi:'Pedicure', mani:'Manicure', acrylic:'Acrylic', gelx:'Gel-X', dip:'Dip Powder', headspa:'Head Spa', wax:'Waxing', kids:'Kids', extras:'Extras' };
  var META = {
    pedi:    { eyebrow:'Feet',              note:'Gel color available on all pedicures · +$20' },
    mani:    { eyebrow:'Nails',             note:'A fill refreshes your existing set every 2–3 weeks. Prices vary by length & complexity.' },
    acrylic: { eyebrow:'Enhancements',      note:'Prices vary by length & complexity — ask us for a personalized quote.' },
    gelx:    { eyebrow:'Gel Extensions',    note:'Prices vary by length & complexity — ask us for a personalized quote.' },
    dip:     { eyebrow:'Dip Powder',        note:null },
    headspa: { eyebrow:'Scalp',             note:'Each ritual ends in quiet calm — restoring scalp and mind.' },
    wax:     { eyebrow:'Smooth & polished', note:null },
    kids:    { eyebrow:'Ages 12 & under',   note:null },
    extras:  { eyebrow:'Finishing',         note:'Make any treatment your own — add a finishing touch, or let your technician suggest the perfect pairing.' },
  };
  var TEL = 'tel:+16143899999';

  function rowHTML(item) {
    var badge = item.tag ? '<span class="badge badge--' + (item.tagV || 'accent') + '">' + esc(item.tag) + '</span>' : '';
    var dur = item.dur ? '<span class="sp-row__dur">' + esc(item.dur) + '</span>' : '';
    var blurb = item.blurb ? '<p class="sp-row__blurb">' + esc(item.blurb) + '</p>' : '';
    return '<div class="sp-row">' +
      '<div class="sp-row__line">' +
        '<span class="sp-row__name">' + esc(item.name) + badge + dur + '</span>' +
        '<span class="sp-row__dots"></span>' +
        '<span class="sp-row__price">' + esc(item.price) + '</span>' +
      '</div>' + blurb +
    '</div>';
  }

  function sectionHTML(cat) {
    var items = MENU.full.filter(function (s) { return s.cat === cat; });
    if (!items.length) return '';
    var meta = META[cat] || {};
    var useTwo = items.length > 6;
    var rows;
    if (useTwo) {
      var half = Math.ceil(items.length / 2);
      rows = '<div class="sp-cat__cols">' +
        '<div>' + items.slice(0, half).map(rowHTML).join('') + '</div>' +
        '<div>' + items.slice(half).map(rowHTML).join('') + '</div>' +
      '</div>';
    } else {
      rows = '<div class="sp-cat__cols sp-cat__cols--one">' + items.map(rowHTML).join('') + '</div>';
    }
    var note = meta.note ? '<p class="sp-cat__note"><i class="ph-light ph-star"></i>' + esc(meta.note) + '</p>' : '';
    return '<section class="sp-cat reveal" id="svc-' + cat + '">' +
      '<div class="sp-cat__grid">' +
        '<div class="sp-cat__head">' +
          '<div class="sp-cat__eyebrow">' + esc(meta.eyebrow || '') + '</div>' +
          '<h2 class="serif sp-cat__title">' + esc(LABELS[cat] || cat) + '</h2>' +
          '<a class="sp-cat__book" href="' + TEL + '">Book this <i class="ph-light ph-arrow-right"></i></a>' +
        '</div>' +
        '<div>' + rows + note + '</div>' +
      '</div>' +
    '</section>';
  }

  var root = document.getElementById('sp-cats');
  if (root) root.innerHTML = CATS.map(sectionHTML).join('');

  /* Reveal-on-scroll */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();

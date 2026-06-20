/* Chic Nail & Head Spa — home page behaviour.
   Faithful static port of EvolvedHome.jsx: scroll-aware header, mobile sheet,
   services tabs, date-aware seasonal gallery, rotating testimonials, reveal. */
(function () {
  var MENU = window.CNHS_MENU || {};
  var CDN = 'https://chicnailheadspa.com/assets/images/';
  var GALLERY_FALLBACK = [1,2,3,4,5,6,7,8,9].map(function (n) { return CDN + 'gallery/nail-' + n + '.png'; });
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (m) {
    return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[m]; }); };

  /* ── Header: transparent → solid on scroll ─────────────────────────── */
  var hdr = document.querySelector('.hdr');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('is-solid', window.scrollY > 36); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile sheet menu ─────────────────────────────────────────────── */
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

  /* ── Services preview: tabs ────────────────────────────────────────── */
  var tabsEl = document.getElementById('svc-tabs');
  var gridEl = document.getElementById('svc-grid');
  if (tabsEl && gridEl && MENU.full) {
    var order = ['pedi', 'mani', 'acrylic', 'gelx', 'dip', 'headspa'];
    var labels = { pedi:'Pedicure', mani:'Manicure', acrylic:'Acrylic', gelx:'Gel-X', dip:'Dip Powder', headspa:'Head Spa' };

    function cardHTML(s) {
      var badge = s.tag ? '<span class="badge badge--' + (s.tagV || 'accent') + '">' + esc(s.tag) + '</span>' : '';
      var blurb = s.blurb ? '<p class="svc-card__blurb">' + esc(s.blurb) + '</p>' : '';
      var dur = s.dur ? '<span class="svc-card__dur"><i class="ph-light ph-clock"></i>' + esc(s.dur) + '</span>' : '';
      return '<div class="svc-card">' +
        '<div class="svc-card__body">' +
          '<div class="svc-card__top"><span class="svc-card__name">' + esc(s.name) + '</span>' + badge + '</div>' +
          blurb + dur +
        '</div>' +
        '<span class="svc-card__price">' + esc(s.price) + '</span>' +
      '</div>';
    }
    function renderCat(cat) {
      var list = MENU.full.filter(function (s) { return s.cat === cat; });
      gridEl.innerHTML = list.map(cardHTML).join('');
    }
    tabsEl.innerHTML = order.map(function (c, i) {
      return '<button class="tab" role="tab" data-cat="' + c + '" aria-selected="' + (i === 0 ? 'true' : 'false') + '">' + esc(labels[c]) + '</button>';
    }).join('');
    tabsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab'); if (!btn) return;
      tabsEl.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
      btn.setAttribute('aria-selected', 'true');
      renderCat(btn.dataset.cat);
    });
    renderCat(order[0]);
  }

  /* ── Seasonal gallery (date-aware) ─────────────────────────────────── */
  var THEMES = {
    newyear:     { label:'New Year',      icon:'ph-sparkle',     title:['Ring in the year in','sparkle'],  caption:'New Year · gold foils, glitter & midnight chrome', tags:['Gold foil','Glitter tips','Midnight chrome','Champagne French','Star accents','Confetti','Black & gold','Shimmer ombré','Diamond dust'] },
    valentines:  { label:"Valentine's",   icon:'ph-heart',       title:['A little','love'],                caption:"Valentine's · hearts, blush pinks & red lacquer", tags:['Tiny hearts','Blush French','Red lacquer','Rose accents','Pink ombré','Lace detail','Crystal heart','Candy swirl','Cupid art'] },
    stpatricks:  { label:"St. Patrick's", icon:'ph-clover',      title:['A touch of','luck'],              caption:"St. Patrick's · emerald, shamrocks & gold", tags:['Shamrock art','Emerald gel','Gold accents','Clover tips','Green ombré','Rainbow detail','Matte green','Lucky charm','Glitter gold'] },
    spring:      { label:'Spring',        icon:'ph-flower',      title:['In full','bloom'],                caption:'Spring · florals, pastels & soft French', tags:['Cherry blossom','Pastel French','Daisy art','Lavender gel','Soft ombré','Floral detail','Mint chrome','Tulip accents','Petal tips'] },
    easter:      { label:'Easter',        icon:'ph-egg',         title:['Soft','pastels'],                 caption:'Easter · pastels, florals & egg-art accents', tags:['Pastel swirl','Floral French','Egg art','Lilac gel','Mint ombré','Daisy tips','Speckled detail','Soft chrome','Spring petals'] },
    fourth:      { label:'July 4th',      icon:'ph-firework',    title:['Light up the','fireworks'],       caption:'July 4th · fireworks, stars & red-white-blue', tags:['Fireworks','Stars & stripes','Red glitter','Navy chrome','Sparkler tips','Flag accents','Blue ombré','Silver foil','Liberty art'] },
    summer:      { label:'Summer',        icon:'ph-sun-horizon', title:['Made for','sunshine'],            caption:'Summer · brights, citrus & ocean tones', tags:['Citrus art','Aqua chrome','Sunset ombré','Palm detail','Coral tips','Neon French','Seashell accents','Tropical floral','Gold shimmer'] },
    halloween:   { label:'Halloween',     icon:'ph-ghost',       title:['A little','mischief'],            caption:'Halloween · spider webs, matte black & spice', tags:['Spider web','Matte black','Ghost art','Pumpkin spice','Bat tips','Blood-red gel','Witchy chrome','Cobweb French','Candy corn'] },
    thanksgiving:{ label:'Thanksgiving',  icon:'ph-leaf',        title:['Warm with','gratitude'],          caption:'Thanksgiving · burnt orange, gold & maple leaves', tags:['Maple leaf','Burnt orange','Gold accents','Cinnamon gel','Plaid detail','Amber ombré','Wheat art','Copper chrome','Spice tips'] },
    christmas:   { label:'Christmas',     icon:'ph-snowflake',   title:['Merry &','sparkle'],              caption:'Christmas · snowflakes, evergreen & candy cane', tags:['Snowflake art','Candy cane','Evergreen gel','Gold glitter','Plaid tips','Ornament detail','Icy chrome','Holly accents','Velvet red'] },
    autumn:      { label:'Autumn',        icon:'ph-leaf',        title:['Wrapped in','amber'],             caption:'Autumn · warm neutrals, rust & gold leaf', tags:['Rust ombré','Gold leaf','Warm French','Maple detail','Mocha chrome','Amber tips','Plaid art','Caramel swirl','Spice accents'] },
    winter:      { label:'Winter',        icon:'ph-snowflake',   title:['A touch of','frost'],             caption:'Winter · icy blues, silver chrome & snowflakes', tags:['Snowflake art','Icy chrome','Silver foil','Frost French','Sky-blue gel','Crystal tips','Glitter ombré','Velvet detail','Diamond dust'] },
  };
  function themeForDate(d) {
    var mo = d.getMonth() + 1, day = d.getDate(), v = mo * 100 + day;
    var within = function (a, b) { return a <= b ? (v >= a && v <= b) : (v >= a || v <= b); };
    if (within(1218, 1231) || v === 101) return 'christmas';
    if (within(1226, 102)) return 'newyear';
    if (within(207, 214)) return 'valentines';
    if (within(312, 317)) return 'stpatricks';
    if (within(325, 421)) return 'easter';
    if (within(628, 706)) return 'fourth';
    if (within(1020, 1031)) return 'halloween';
    if (within(1120, 1130)) return 'thanksgiving';
    if (within(1201, 1217)) return 'christmas';
    if (within(301, 531)) return 'spring';
    if (within(601, 831)) return 'summer';
    if (within(901, 1130)) return 'autumn';
    return 'winter';
  }
  var galEl = document.getElementById('gallery-grid');
  var galEye = document.getElementById('gallery-eyebrow');
  var galTitle = document.getElementById('gallery-title');
  var galCap = document.getElementById('gallery-caption');
  if (galEl) {
    var key = themeForDate(new Date());
    var t = THEMES[key];
    if (galEye) galEye.innerHTML = '<i class="ph-fill ' + t.icon + '"></i> The Gallery · ' + esc(t.label);
    if (galTitle) galTitle.innerHTML = esc(t.title[0]) + ' <em class="ital">' + esc(t.title[1]) + '</em>';
    if (galCap) galCap.textContent = t.caption;
    galEl.innerHTML = GALLERY_FALLBACK.map(function (src, i) {
      var tag = t.tags[i % t.tags.length];
      return '<div class="gallery__tile">' +
        '<img src="' + src + '" alt="' + esc(tag) + ' nail art" loading="lazy">' +
        '<div class="gallery__label"><i class="ph-fill ' + t.icon + '"></i><span>' + esc(tag) + '</span></div>' +
      '</div>';
    }).join('');
  }

  /* ── Testimonials (rotating) ───────────────────────────────────────── */
  var testiQ = document.getElementById('testi-q');
  var testiWho = document.getElementById('testi-who');
  var testiDots = document.getElementById('testi-dots');
  if (testiQ && testiDots) {
    var quotes = [
      ['The best hour of my month. I left feeling like I’d been on holiday.', 'Mei R.'],
      ['My scalp has never felt so clean — and the nail art is unreal.', 'Jordan P.'],
      ['Calm, careful, and genuinely luxurious. Worth every minute.', 'Alyssa T.'],
      ['I booked a head spa on a whim and now it’s my monthly ritual.', 'Dana K.'],
    ];
    var idx = 0, timer = null, paused = false;
    testiDots.innerHTML = quotes.map(function (_, n) {
      return '<button class="testi__dot' + (n === 0 ? ' is-on' : '') + '" data-i="' + n + '" aria-label="Testimonial ' + (n + 1) + '"></button>';
    }).join('');
    function show(n) {
      idx = n;
      testiQ.textContent = quotes[n][0];
      testiQ.style.animation = 'none'; void testiQ.offsetWidth; testiQ.style.animation = '';
      testiWho.textContent = quotes[n][1];
      testiDots.querySelectorAll('.testi__dot').forEach(function (d, i) { d.classList.toggle('is-on', i === n); });
    }
    function start() { timer = setInterval(function () { if (!paused) show((idx + 1) % quotes.length); }, 5000); }
    testiDots.addEventListener('click', function (e) { var b = e.target.closest('.testi__dot'); if (b) show(+b.dataset.i); });
    var testiInner = document.querySelector('.testi__inner');
    if (testiInner) {
      testiInner.addEventListener('mouseenter', function () { paused = true; });
      testiInner.addEventListener('mouseleave', function () { paused = false; });
    }
    show(0); start();
  }

  /* ── Smooth-scroll for in-page anchors ─────────────────────────────── */
  document.querySelectorAll('a[data-scroll]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.querySelector(a.getAttribute('href'));
      if (el) { e.preventDefault(); window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); }
    });
  });

  /* ── Reveal-on-scroll ──────────────────────────────────────────────── */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();

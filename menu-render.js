/* Renders the Services page menu from menu-data.js (window.CNHS_MENU).
   Category tabs filter the grouped menu; "All" shows every group. */
(function () {
  var DATA = window.CNHS_MENU;
  if (!DATA) return;

  var catLabel = {};
  DATA.cats.forEach(function (c) { catLabel[c.value] = c.label; });
  // Order groups by the cats order (excluding "all")
  var order = DATA.cats.map(function (c) { return c.value; }).filter(function (v) { return v !== 'all'; });

  var tabsEl = document.getElementById('menu-tabs');
  var listEl = document.getElementById('menu-body');

  function esc(s) { return String(s).replace(/[&<>"]/g, function (m) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[m]; }); }

  function itemHTML(it) {
    var tag = it.tag
      ? '<span class="menu-tag menu-tag--' + (it.tagV || 'accent') + '">' + esc(it.tag) + '</span>'
      : '';
    var dur = it.dur ? '<span class="menu-item__dur">· ' + esc(it.dur) + '</span>' : '';
    var blurb = it.blurb ? '<p class="menu-item__blurb">' + esc(it.blurb) + '</p>' : '';
    return '<div class="menu-item">' +
      '<div>' +
        '<div class="menu-item__head">' +
          '<span class="menu-item__name">' + esc(it.name) + '</span>' + dur + tag +
        '</div>' + blurb +
      '</div>' +
      '<span class="menu-item__price">' + esc(it.price) + '</span>' +
    '</div>';
  }

  function groupHTML(cat) {
    var items = DATA.full.filter(function (it) { return it.cat === cat; });
    if (!items.length) return '';
    return '<section class="menu-group reveal" data-cat="' + cat + '">' +
      '<h2 class="menu-group__title">' + esc(catLabel[cat] || cat) + '</h2>' +
      '<div class="menu-list">' + items.map(itemHTML).join('') + '</div>' +
    '</section>';
  }

  function render(active) {
    var cats = active === 'all' ? order : [active];
    listEl.innerHTML = cats.map(groupHTML).join('');
    // re-trigger reveal for freshly inserted nodes
    listEl.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  // Build tabs
  tabsEl.innerHTML = DATA.cats.map(function (c, i) {
    return '<button class="tab" role="tab" data-cat="' + c.value + '" aria-selected="' +
      (i === 0 ? 'true' : 'false') + '">' + esc(c.label) + '</button>';
  }).join('');

  tabsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.tab');
    if (!btn) return;
    tabsEl.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
    btn.setAttribute('aria-selected', 'true');
    render(btn.dataset.cat);
  });

  render('all');
})();

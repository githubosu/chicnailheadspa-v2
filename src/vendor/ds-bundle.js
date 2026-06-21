/* @ds-bundle: {"format":3,"namespace":"ChicNailHeadSpaDesignSystem_843afb","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"4fdaafc24c6c","components/actions/IconButton.jsx":"99d0fab86cf3","components/display/Avatar.jsx":"5e2ab6b24106","components/display/Badge.jsx":"dc2f429177fe","components/display/Card.jsx":"245fa555a1cc","components/display/Tag.jsx":"e5505388c8fb","components/forms/Checkbox.jsx":"ad66c6ae994e","components/forms/Input.jsx":"861b5fa211bd","components/forms/Select.jsx":"30b477ad7174","components/forms/Switch.jsx":"e40aafca8407","components/navigation/Tabs.jsx":"8116622f9117","menu-data.js":"8df46959c79a","ui_kits/app/app-screens.jsx":"07c186bdbc6f","ui_kits/app/ios-frame.jsx":"be3343be4b51","ui_kits/website/Booking.jsx":"eb9fad6f7912","ui_kits/website/Confirmation.jsx":"c25fc064e2d5","ui_kits/website/EvolvedHome.jsx":"0f8596f18a22","ui_kits/website/Home.jsx":"1ca0e8b61160","ui_kits/website/Services.jsx":"7cb381323dab","ui_kits/website/ServicesPage.jsx":"a5030e687821","ui_kits/website/ServicesV2.jsx":"ffcf7b1efcb5","ui_kits/website/ServicesV3.jsx":"2b065af0462d","ui_kits/website/chrome.jsx":"446a341066b2","uploads/menu-data-8df46959.js":"8df46959c79a","uploads/menu-data.js":"abcc68f0b452"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChicNailHeadSpaDesignSystem_843afb = window.ChicNailHeadSpaDesignSystem_843afb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Uses the design-system custom properties so it
   restyles automatically under either palette. */
const CSS = `
.cnhs-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-sans);font-weight:500;line-height:1;letter-spacing:.01em;
  border-radius:var(--radius-pill);border:1px solid transparent;cursor:pointer;
  text-decoration:none;white-space:nowrap;
  transition:background var(--dur) var(--ease-standard),color var(--dur) var(--ease-standard),
    border-color var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard),
    transform var(--dur-fast) var(--ease-standard);}
.cnhs-btn:focus-visible{outline:none;box-shadow:var(--focus-ring);}
.cnhs-btn:active{transform:scale(.98);}
.cnhs-btn.is-disabled{cursor:not-allowed;opacity:.5;box-shadow:none;transform:none;pointer-events:none;}
.cnhs-btn.is-block{display:flex;width:100%;}
.cnhs-btn.is-sm{font-size:13px;padding:8px 16px;}
.cnhs-btn.is-md{font-size:15px;padding:11px 22px;}
.cnhs-btn.is-lg{font-size:16px;padding:15px 30px;}
.cnhs-btn.v-primary{background:var(--accent);color:var(--on-accent);}
.cnhs-btn.v-primary:hover{background:var(--accent-hover);}
.cnhs-btn.v-primary:active{background:var(--accent-press);}
.cnhs-btn.v-secondary{background:var(--surface-card);color:var(--accent);border-color:var(--border-default);}
.cnhs-btn.v-secondary:hover{border-color:var(--border-strong);background:var(--surface-soft);}
.cnhs-btn.v-ghost{background:transparent;color:var(--accent);}
.cnhs-btn.v-ghost:hover{background:var(--surface-soft);}
.cnhs-btn.v-reserve{background:var(--reserve);color:var(--text-inverse);}
.cnhs-btn.v-reserve:hover{background:var(--reserve-hover);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-button-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-button-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['cnhs-btn', `v-${variant}`, `is-${size}`, block ? 'is-block' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-iconbtn{display:inline-flex;align-items:center;justify-content:center;
  font-family:var(--font-sans);border-radius:var(--radius-pill);border:1px solid transparent;
  cursor:pointer;color:var(--text-secondary);background:transparent;line-height:0;
  transition:background var(--dur) var(--ease-standard),color var(--dur) var(--ease-standard),
    border-color var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard),
    transform var(--dur-fast) var(--ease-standard);}
.cnhs-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring);}
.cnhs-iconbtn:active{transform:scale(.94);}
.cnhs-iconbtn.is-disabled{cursor:not-allowed;opacity:.45;pointer-events:none;}
.cnhs-iconbtn.is-sm{width:34px;height:34px;font-size:18px;}
.cnhs-iconbtn.is-md{width:42px;height:42px;font-size:20px;}
.cnhs-iconbtn.is-lg{width:48px;height:48px;font-size:24px;}
.cnhs-iconbtn.v-ghost:hover{background:var(--surface-soft);color:var(--accent);}
.cnhs-iconbtn.v-outline{border-color:var(--border-default);background:var(--surface-card);}
.cnhs-iconbtn.v-outline:hover{border-color:var(--border-strong);color:var(--accent);}
.cnhs-iconbtn.v-solid{background:var(--accent);color:var(--on-accent);}
.cnhs-iconbtn.v-solid:hover{background:var(--accent-hover);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-iconbtn-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-iconbtn-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = ['cnhs-iconbtn', `v-${variant}`, `is-${size}`, disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-avatar{display:inline-flex;align-items:center;justify-content:center;flex:none;
  border-radius:50%;overflow:hidden;font-family:var(--font-display);font-weight:600;
  background:var(--mocha-200);color:var(--mocha-700);user-select:none;
  border:1px solid rgba(58,42,32,.06);}
.cnhs-avatar.is-square{border-radius:var(--radius-md);}
.cnhs-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.cnhs-avatar.sz-xs{width:28px;height:28px;font-size:11px;}
.cnhs-avatar.sz-sm{width:36px;height:36px;font-size:13px;}
.cnhs-avatar.sz-md{width:44px;height:44px;font-size:16px;}
.cnhs-avatar.sz-lg{width:56px;height:56px;font-size:20px;}
.cnhs-avatar.sz-xl{width:72px;height:72px;font-size:26px;}
.cnhs-avatar.v-reserve{background:var(--bordeaux-500);color:var(--cream-50);}
.cnhs-avatar.v-espresso{background:var(--espresso-900);color:var(--cream-50);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-avatar-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-avatar-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  src,
  name = '',
  size = 'md',
  square = false,
  variant = 'default',
  className = '',
  ...rest
}) {
  const cls = ['cnhs-avatar', `sz-${size}`, square ? 'is-square' : '', variant !== 'default' ? `v-${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);
  font-size:12px;font-weight:500;line-height:1;letter-spacing:.02em;
  padding:5px 11px;border-radius:var(--radius-pill);border:1px solid transparent;white-space:nowrap;}
.cnhs-badge i{font-size:13px;}
.cnhs-badge.v-neutral{background:var(--surface-sunken);color:var(--text-secondary);border-color:var(--border-subtle);}
.cnhs-badge.v-accent{background:var(--accent-tint);color:var(--accent-press);}
.cnhs-badge.v-gilt{background:var(--gilt-soft);color:var(--honey-600);}
.cnhs-badge.v-success{background:rgba(110,122,79,.16);color:var(--olive-500);}
.cnhs-badge.v-warning{background:rgba(192,138,46,.16);color:var(--amber-500);}
.cnhs-badge.v-danger{background:rgba(168,69,58,.14);color:var(--brick-500);}
.cnhs-badge.v-reserve{background:var(--reserve);color:var(--text-inverse);}
.cnhs-badge.is-dot::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-badge-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-badge-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  variant = 'neutral',
  dot = false,
  icon = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['cnhs-badge', `v-${variant}`, dot ? 'is-dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-card{background:var(--surface-card);border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);overflow:hidden;
  transition:box-shadow var(--dur) var(--ease-standard),transform var(--dur) var(--ease-out),border-color var(--dur) var(--ease-standard);}
.cnhs-card.pad-sm{padding:16px;}
.cnhs-card.pad-md{padding:24px;}
.cnhs-card.pad-lg{padding:32px;}
.cnhs-card.is-flat{box-shadow:none;}
.cnhs-card.is-feature{border-radius:var(--radius-xl);box-shadow:var(--shadow-md);}
.cnhs-card.is-interactive{cursor:pointer;}
.cnhs-card.is-interactive:hover{box-shadow:var(--shadow-md);transform:translateY(-2px);border-color:var(--border-default);}
.cnhs-card.is-interactive:active{transform:translateY(0);}
.cnhs-card:focus-visible{outline:none;box-shadow:var(--focus-ring);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-card-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-card-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  padding = 'md',
  flat = false,
  feature = false,
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['cnhs-card', `pad-${padding}`, flat ? 'is-flat' : '', feature ? 'is-feature' : '', interactive ? 'is-interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    tabIndex: interactive ? 0 : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-tag{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-sans);
  font-size:14px;font-weight:500;color:var(--text-secondary);background:var(--surface-card);
  border:1px solid var(--border-default);border-radius:var(--radius-pill);padding:8px 16px;
  cursor:pointer;line-height:1;white-space:nowrap;
  transition:background var(--dur) var(--ease-standard),color var(--dur) var(--ease-standard),
    border-color var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard);}
.cnhs-tag:hover{border-color:var(--border-strong);color:var(--text-strong);}
.cnhs-tag:focus-visible{outline:none;box-shadow:var(--focus-ring);}
.cnhs-tag.is-selected{background:var(--accent);color:var(--on-accent);border-color:var(--accent);}
.cnhs-tag.is-selected:hover{background:var(--accent-hover);color:var(--on-accent);}
.cnhs-tag__remove{display:inline-flex;font-size:14px;margin-right:-4px;opacity:.7;}
.cnhs-tag__remove:hover{opacity:1;}
.cnhs-tag.is-static{cursor:default;}
.cnhs-tag.is-static:hover{border-color:var(--border-default);color:var(--text-secondary);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-tag-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-tag-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tag({
  selected = false,
  icon = null,
  onRemove,
  interactive = true,
  className = '',
  children,
  ...rest
}) {
  const cls = ['cnhs-tag', selected ? 'is-selected' : '', interactive ? '' : 'is-static', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-pressed": interactive ? selected : undefined
  }, rest), icon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "cnhs-tag__remove",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-x"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-sans);
  font-size:15px;color:var(--text-body);cursor:pointer;line-height:1.4;}
.cnhs-check.is-disabled{cursor:not-allowed;opacity:.5;}
.cnhs-check__input{position:absolute;opacity:0;width:0;height:0;}
.cnhs-check__box{flex:none;width:20px;height:20px;margin-top:1px;border-radius:6px;
  border:1px solid var(--border-strong);background:var(--surface-card);display:flex;
  align-items:center;justify-content:center;color:var(--on-accent);font-size:14px;
  transition:background var(--dur) var(--ease-standard),border-color var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard);}
.cnhs-check__box i{opacity:0;transform:scale(.6);transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-out);}
.cnhs-check:hover .cnhs-check__box{border-color:var(--accent);}
.cnhs-check__input:checked + .cnhs-check__box{background:var(--accent);border-color:var(--accent);}
.cnhs-check__input:checked + .cnhs-check__box i{opacity:1;transform:scale(1);}
.cnhs-check__input:focus-visible + .cnhs-check__box{box-shadow:var(--focus-ring);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-check-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-check-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['cnhs-check', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "cnhs-check__input",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cnhs-check__box"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  })), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans);}
.cnhs-field__label{font-size:13px;font-weight:500;color:var(--text-secondary);letter-spacing:.01em;}
.cnhs-field__req{color:var(--accent);margin-left:2px;}
.cnhs-inputwrap{position:relative;display:flex;align-items:center;}
.cnhs-inputwrap__icon{position:absolute;left:14px;display:flex;color:var(--text-muted);font-size:18px;pointer-events:none;}
.cnhs-input{width:100%;font-family:var(--font-sans);font-size:15px;color:var(--text-body);
  background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-md);
  padding:11px 14px;line-height:1.4;
  transition:border-color var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard);}
.cnhs-input::placeholder{color:var(--text-muted);}
.cnhs-input.has-icon{padding-left:42px;}
.cnhs-input:hover{border-color:var(--border-strong);}
.cnhs-input:focus{outline:none;border-color:var(--accent);box-shadow:var(--focus-ring);}
.cnhs-input:disabled{background:var(--surface-sunken);color:var(--text-disabled);cursor:not-allowed;}
.cnhs-input.is-error{border-color:var(--danger);}
.cnhs-input.is-error:focus{box-shadow:0 0 0 3px rgba(168,69,58,.22);}
.cnhs-field__hint{font-size:12px;color:var(--text-muted);}
.cnhs-field__hint.is-error{color:var(--danger);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-input-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-input-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
let _id = 0;
function Input({
  label,
  hint,
  error,
  icon = null,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || `cnhs-input-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "cnhs-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cnhs-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cnhs-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "cnhs-inputwrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "cnhs-inputwrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ['cnhs-input', icon ? 'has-icon' : '', error ? 'is-error' : '', className].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `cnhs-field__hint${error ? ' is-error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-selfield{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans);}
.cnhs-selfield__label{font-size:13px;font-weight:500;color:var(--text-secondary);}
.cnhs-selwrap{position:relative;display:flex;align-items:center;}
.cnhs-selwrap__chev{position:absolute;right:14px;color:var(--text-muted);font-size:16px;pointer-events:none;}
.cnhs-select{width:100%;appearance:none;-webkit-appearance:none;font-family:var(--font-sans);font-size:15px;
  color:var(--text-body);background:var(--surface-card);border:1px solid var(--border-default);
  border-radius:var(--radius-md);padding:11px 40px 11px 14px;line-height:1.4;cursor:pointer;
  transition:border-color var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard);}
.cnhs-select:hover{border-color:var(--border-strong);}
.cnhs-select:focus{outline:none;border-color:var(--accent);box-shadow:var(--focus-ring);}
.cnhs-select:disabled{background:var(--surface-sunken);color:var(--text-disabled);cursor:not-allowed;}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-select-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-select-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
let _sid = 0;
function Select({
  label,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  const fieldId = id || `cnhs-select-${++_sid}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "cnhs-selfield"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cnhs-selfield__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cnhs-selwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: ['cnhs-select', className].filter(Boolean).join(' ')
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), children || options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    className: "cnhs-selwrap__chev"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-caret-down"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-sans);
  font-size:15px;color:var(--text-body);cursor:pointer;}
.cnhs-switch.is-disabled{cursor:not-allowed;opacity:.5;}
.cnhs-switch__input{position:absolute;opacity:0;width:0;height:0;}
.cnhs-switch__track{flex:none;width:44px;height:26px;border-radius:var(--radius-pill);
  background:var(--taupe-400);position:relative;
  transition:background var(--dur) var(--ease-standard),box-shadow var(--dur) var(--ease-standard);}
.cnhs-switch__thumb{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;
  background:var(--surface-card);box-shadow:var(--shadow-sm);
  transition:transform var(--dur) var(--ease-out);}
.cnhs-switch__input:checked + .cnhs-switch__track{background:var(--accent);}
.cnhs-switch__input:checked + .cnhs-switch__track .cnhs-switch__thumb{transform:translateX(18px);}
.cnhs-switch__input:focus-visible + .cnhs-switch__track{box-shadow:var(--focus-ring);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-switch-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-switch-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['cnhs-switch', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    className: "cnhs-switch__input",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cnhs-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cnhs-switch__thumb"
  })), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cnhs-tabs{display:flex;gap:4px;border-bottom:1px solid var(--border-subtle);font-family:var(--font-sans);}
.cnhs-tab{appearance:none;background:none;border:none;cursor:pointer;font-family:var(--font-sans);
  font-size:15px;font-weight:500;color:var(--text-muted);padding:12px 16px;position:relative;
  display:inline-flex;align-items:center;gap:8px;line-height:1;
  transition:color var(--dur) var(--ease-standard);}
.cnhs-tab i{font-size:18px;}
.cnhs-tab::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;
  background:var(--accent);border-radius:var(--radius-pill);transform:scaleX(0);transform-origin:center;
  transition:transform var(--dur) var(--ease-out);}
.cnhs-tab:hover{color:var(--text-secondary);}
.cnhs-tab:focus-visible{outline:none;color:var(--text-strong);}
.cnhs-tab.is-active{color:var(--accent);}
.cnhs-tab.is-active::after{transform:scaleX(1);}
.cnhs-tab.is-disabled{color:var(--text-disabled);cursor:not-allowed;}
.cnhs-tab__count{font-size:12px;color:var(--text-muted);background:var(--surface-sunken);
  border-radius:var(--radius-pill);padding:2px 8px;}
.cnhs-tab.is-active .cnhs-tab__count{background:var(--accent-tint);color:var(--accent-press);}
`;
if (typeof document !== 'undefined' && !document.getElementById('cnhs-tabs-css')) {
  const el = document.createElement('style');
  el.id = 'cnhs-tabs-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = '',
  ...rest
}) {
  const isControlled = value !== undefined;
  const first = items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = isControlled ? value : internal;
  const select = (val, disabled) => {
    if (disabled) return;
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cnhs-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => {
    const val = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const icon = typeof it === 'string' ? null : it.icon;
    const count = typeof it === 'string' ? undefined : it.count;
    const disabled = typeof it === 'string' ? false : it.disabled;
    const isActive = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      className: ['cnhs-tab', isActive ? 'is-active' : '', disabled ? 'is-disabled' : ''].filter(Boolean).join(' '),
      onClick: () => select(val, disabled)
    }, icon, label, count != null && /*#__PURE__*/React.createElement("span", {
      className: "cnhs-tab__count"
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// menu-data.js
try { (() => {
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
      google: 'https://share.google/pF2zbYmZ7iCQ1ilxV'
    }
  },
  /* Filter tabs on the Services page + app. */
  cats: [{
    value: 'all',
    label: 'All'
  }, {
    value: 'pedi',
    label: 'Pedicure'
  }, {
    value: 'mani',
    label: 'Manicure'
  }, {
    value: 'acrylic',
    label: 'Acrylic'
  }, {
    value: 'gelx',
    label: 'Gel - X'
  }, {
    value: 'dip',
    label: 'Dip Powder'
  }, {
    value: 'headspa',
    label: 'Head Spa'
  }, {
    value: 'wax',
    label: 'Waxing'
  }, {
    value: 'kids',
    label: 'Kids'
  }, {
    value: 'extras',
    label: 'Extras'
  }],
  /* Full menu — sourced directly from the printed fold-out. */
  full: [
  // ── Pedicure ──────────────────────────────────────────────────────────
  {
    cat: 'pedi',
    name: 'Chic Classic',
    price: '$48',
    blurb: 'Warm soak, tidy trim, light exfoliation & lotion.'
  }, {
    cat: 'pedi',
    name: 'Chic Relax',
    price: '$60',
    blurb: 'The Classic with callus care, a longer massage & a hot-towel wrap.'
  }, {
    cat: 'pedi',
    name: 'Chic Ritual',
    price: '$65',
    blurb: 'Sugar scrub, hydrating mask & rich cream for soft, glowing skin.',
    tag: 'Popular',
    tagV: 'accent'
  }, {
    cat: 'pedi',
    name: 'Chic Luxe',
    price: '$80',
    blurb: 'The Ritual sealed with a warm paraffin dip — moisture that lingers.'
  }, {
    cat: 'pedi',
    name: 'Chic Signature',
    price: '$90',
    blurb: 'Herbal neck wrap & hot-stone massage — our most indulgent hour.',
    tag: 'VIP',
    tagV: 'reserve'
  },
  // ── Manicure ──────────────────────────────────────────────────────────
  {
    cat: 'mani',
    name: 'Chic Manicure',
    price: '$30',
    blurb: 'Warm soak, careful shaping, cuticle care & a soothing hand massage before color.'
  }, {
    cat: 'mani',
    name: 'Chic Gel',
    price: '$46',
    blurb: 'Long-wear gel color with a glossy finish, up to three weeks.',
    tag: 'Most loved',
    tagV: 'gilt'
  }, {
    cat: 'mani',
    name: 'Polish Change',
    price: '$20',
    blurb: 'A fresh coat in the shade of your choosing — hands or toes.'
  }, {
    cat: 'mani',
    name: 'Gel Change',
    price: '$40',
    blurb: 'Old gel gently soaked away, replaced with a glassy new color.'
  },
  // ── Acrylic ──────────────────────────────────────────────────────
  {
    cat: 'acrylic',
    name: 'Acrylic Full Set',
    price: '$66+'
  }, {
    cat: 'acrylic',
    name: 'Acrylic Fill',
    price: '$56+'
  }, {
    cat: 'acrylic',
    name: 'Ombré Full Set',
    price: '$72+'
  }, {
    cat: 'acrylic',
    name: 'Ombré Fill',
    price: '$67+'
  }, {
    cat: 'acrylic',
    name: 'Pink & White Full Set',
    price: '$76+'
  }, {
    cat: 'acrylic',
    name: 'Pink Only',
    price: '$56+'
  },
  // ── Gel - X ──────────────────────────────────────────────────────
  {
    cat: 'gelx',
    name: 'Builder Gel Full Set',
    price: '$66+'
  }, {
    cat: 'gelx',
    name: 'Builder Gel Fill',
    price: '$60+'
  }, {
    cat: 'gelx',
    name: 'Tap Gel Full Set',
    price: '$70+'
  }, {
    cat: 'gelx',
    name: 'Tap Gel Fill',
    price: '$60+'
  }, {
    cat: 'gelx',
    name: 'Gel X Full Set',
    price: '$66+'
  }, {
    cat: 'gelx',
    name: 'Gel X Fill',
    price: '$60+'
  },
  // ── Dip Powder ──────────────────────────────────────────────────────
  {
    cat: 'dip',
    name: 'Dip Powder',
    price: '$56'
  }, {
    cat: 'dip',
    name: 'Dip Full Set / With Tips',
    price: '$66'
  }, {
    cat: 'dip',
    name: 'Dip Pink & White',
    price: '$66'
  },
  // ── Head Spa ──────────────────────────────────────────────────────────
  {
    cat: 'headspa',
    name: 'Scalp Massage',
    dur: '30 min',
    price: '$45',
    blurb: 'Pressure-point scalp & shoulder massage that melts away tension.'
  }, {
    cat: 'headspa',
    name: 'Scalp Treatment',
    dur: '45 min',
    price: '$65',
    blurb: 'Warm botanical oils nourish a dry, tired scalp with a deep massage.'
  }, {
    cat: 'headspa',
    name: 'Scalp Detox',
    dur: '50 min',
    price: '$75',
    blurb: 'A clarifying cleanse that lifts buildup for healthy growth.'
  }, {
    cat: 'headspa',
    name: 'Signature Head Spa',
    dur: '60 min',
    price: '$95',
    blurb: 'Scrub, mask, warm steam & a long, drifting massage.',
    tag: 'Most loved',
    tagV: 'gilt'
  },
  // ── Waxing ────────────────────────────────────────────────────────────
  {
    cat: 'wax',
    name: 'Eyebrows',
    price: '$17+'
  }, {
    cat: 'wax',
    name: 'Eyebrow Tinting',
    price: '$25+'
  }, {
    cat: 'wax',
    name: 'Eyebrow Wax & Tint Combo',
    price: '$40+'
  }, {
    cat: 'wax',
    name: 'Lip',
    price: '$9'
  }, {
    cat: 'wax',
    name: 'Chin',
    price: '$10+'
  }, {
    cat: 'wax',
    name: 'Sideburn',
    price: '$15+'
  }, {
    cat: 'wax',
    name: 'Full Face',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Under Arms',
    price: '$35+'
  }, {
    cat: 'wax',
    name: 'Half Arms',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Full Arms',
    price: '$65+'
  }, {
    cat: 'wax',
    name: 'Lower Legs',
    price: '$50+'
  }, {
    cat: 'wax',
    name: 'Upper Legs',
    price: '$55+'
  }, {
    cat: 'wax',
    name: 'Full Legs',
    price: '$85+'
  }, {
    cat: 'wax',
    name: 'Back / Chest',
    price: '$50+'
  }, {
    cat: 'wax',
    name: 'Bikini',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Brazilian',
    price: '$75+'
  },
  // ── Kids (Ages 10 & Under) ────────────────────────────────────────────
  {
    cat: 'kids',
    name: 'Kid Mani',
    price: '$20'
  }, {
    cat: 'kids',
    name: 'Kid Mani Gel',
    price: '$35'
  }, {
    cat: 'kids',
    name: 'Kid Polish Change · Hands',
    price: '$12'
  }, {
    cat: 'kids',
    name: 'Kid Pedi',
    price: '$30'
  }, {
    cat: 'kids',
    name: 'Kid Pedi Gel',
    price: '$45'
  }, {
    cat: 'kids',
    name: 'Kid Polish Change · Toes',
    price: '$14'
  },
  // ── Extras ───────────────────────────────────────────────────────────
  {
    cat: 'extras',
    name: 'Paraffin',
    price: '$14'
  }, {
    cat: 'extras',
    name: 'Nail Art',
    price: '$7+ /nail'
  }, {
    cat: 'extras',
    name: 'Cat Eye',
    price: '$7+'
  }, {
    cat: 'extras',
    name: 'Chrome',
    price: '$15'
  }, {
    cat: 'extras',
    name: 'French',
    price: '$7'
  }, {
    cat: 'extras',
    name: 'Design French',
    price: '$10+'
  }, {
    cat: 'extras',
    name: 'Special Shape',
    price: '$7'
  }, {
    cat: 'extras',
    name: 'Nail Repair',
    price: '$8+'
  }, {
    cat: 'extras',
    name: 'Gel Removal',
    price: '$17'
  }, {
    cat: 'extras',
    name: 'Dip Removal',
    price: '$17'
  }, {
    cat: 'extras',
    name: 'Acrylic Removal',
    price: '$25'
  }, {
    cat: 'extras',
    name: 'Matte Top Coat',
    price: '$3'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "menu-data.js", error: String((e && e.message) || e) }); }

// ui_kits/app/app-screens.jsx
try { (() => {
/* Chic Nail & Head Spa — mobile booking app screens.
   Renders inside the IOSDevice frame. Uses brand bundle components. */
const APP_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const {
  Button: AButton,
  Card: ACard,
  Badge: ABadge,
  Tag: ATag,
  Input: AInput,
  Checkbox: ACheckbox,
  Avatar: AAvatar
} = APP_DS;
const APP_SERVICES = [{
  id: 'spa',
  name: 'Signature Head Spa',
  dur: '60 min',
  price: 95,
  blurb: 'Scrub, mask, warm steam & a long, drifting massage.',
  tag: 'Most loved',
  tagV: 'gilt',
  cat: 'Head Spa'
}, {
  id: 'detox',
  name: 'Scalp Detox',
  dur: '50 min',
  price: 75,
  blurb: 'A clarifying cleanse that lifts buildup for healthy hair growth.',
  cat: 'Head Spa'
}, {
  id: 'massage',
  name: 'Scalp Massage',
  dur: '30 min',
  price: 45,
  blurb: 'Pressure-point scalp & shoulder massage that melts away tension.',
  cat: 'Head Spa'
}, {
  id: 'gel',
  name: 'Chic Gel Manicure',
  dur: '50 min',
  price: 46,
  blurb: 'Shaping, cuticle care & long-wear gel that lasts.',
  tag: 'Most loved',
  tagV: 'gilt',
  cat: 'Nails'
}, {
  id: 'mani',
  name: 'Chic Manicure',
  dur: '40 min',
  price: 30,
  blurb: 'Gentle shaping, cuticle care & a polish of your choosing.',
  cat: 'Nails'
}, {
  id: 'ritual',
  name: 'Chic Ritual Pedicure',
  dur: '60 min',
  price: 70,
  blurb: 'A warm candle-oil massage that melts away tension, finished with a mask.',
  tag: 'Popular',
  tagV: 'accent',
  cat: 'Pedicure'
}, {
  id: 'sigpedi',
  name: 'Chic Signature Pedicure',
  dur: '75 min',
  price: 90,
  blurb: 'An herbal neck wrap & hot-stone massage — our most indulgent, head-to-toe.',
  cat: 'Pedicure'
}];
const APP_DATES = [{
  k: 'wed',
  d: 'Wed',
  n: '18'
}, {
  k: 'thu',
  d: 'Thu',
  n: '19'
}, {
  k: 'fri',
  d: 'Fri',
  n: '20'
}, {
  k: 'sat',
  d: 'Sat',
  n: '21'
}];
const APP_TIMES = ['11:00', '12:30', '2:00', '3:30', '5:00'];
function AppPhoto({
  ratio = '16 / 10',
  radius = 20,
  tone = 'mocha',
  style = {}
}) {
  const bg = tone === 'espresso' ? 'var(--espresso-900)' : 'var(--mocha-200)';
  const mono = tone === 'espresso' ? '../../assets/monogram-cream.png' : '../../assets/monogram.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      background: bg,
      borderRadius: radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: mono,
    alt: "",
    style: {
      height: '42%',
      opacity: 0.16
    }
  }));
}
const ovl = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--accent)'
};
const serif = size => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 500,
  fontSize: size,
  color: 'var(--text-strong)',
  margin: 0,
  lineHeight: 1.1
});

/* ── Bottom tab bar ─────────────────────────────────────────────────────── */
function TabBar({
  active,
  onNav
}) {
  const tabs = [['browse', 'ph-house', 'Home'], ['booking', 'ph-calendar-blank', 'Book'], ['gift', 'ph-gift', 'Gifts'], ['profile', 'ph-user', 'You']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px 8px 30px',
      background: 'rgba(254,247,237,0.9)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, tabs.map(([k, icon, label]) => {
    const on = active === k || k === 'browse' && active === 'detail';
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onNav(k === 'browse' ? 'browse' : k === 'booking' ? 'booking' : 'browse'),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        color: on ? 'var(--accent)' : 'var(--text-muted)',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph${on ? '-fill' : '-light'} ${icon}`,
      style: {
        fontSize: 23
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: 500
      }
    }, label));
  }));
}
function Screen({
  children,
  tab,
  onNav,
  scrollRef
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, children), tab && /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onNav: onNav
  }));
}

/* ── Browse ─────────────────────────────────────────────────────────────── */
function Browse({
  onNav,
  onOpen
}) {
  const [cat, setCat] = React.useState('All');
  const cats = ['All', 'Head Spa', 'Nails', 'Pedicure'];
  const list = APP_SERVICES.filter(s => cat === 'All' || s.cat === cat);
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "browse",
    onNav: onNav
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '54px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: ovl
  }, "Good afternoon"), /*#__PURE__*/React.createElement("h1", {
    style: serif(28)
  }, "What shall we", /*#__PURE__*/React.createElement("br", null), "do for you?")), /*#__PURE__*/React.createElement(AAvatar, {
    src: "../../assets/monogram.png",
    name: "Studio",
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(ATag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, list.map(s => /*#__PURE__*/React.createElement(ACard, {
    key: s.id,
    padding: "sm",
    interactive: true,
    onClick: () => onOpen(s.id)
  }, /*#__PURE__*/React.createElement(AppPhoto, {
    ratio: "16 / 9",
    radius: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 6px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: serif(20)
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      color: 'var(--accent)'
    }
  }, "$", s.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: '6px 0 12px'
    }
  }, s.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ABadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, s.dur), s.tag && /*#__PURE__*/React.createElement(ABadge, {
    variant: s.tagV
  }, s.tag)))))));
}

/* ── Detail ─────────────────────────────────────────────────────────────── */
function Detail({
  id,
  onNav,
  onBook
}) {
  const s = APP_SERVICES.find(x => x.id === id) || APP_SERVICES[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(AppPhoto, {
    ratio: "3 / 2",
    radius: 0
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('browse'),
    style: {
      position: 'absolute',
      top: 54,
      left: 18,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(254,247,237,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-arrow-left",
    style: {
      fontSize: 20
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ovl
  }, s.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      margin: '6px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: serif(28)
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--accent)'
    }
  }, "$", s.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ABadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, s.dur), s.tag && /*#__PURE__*/React.createElement(ABadge, {
    variant: s.tagV
  }, s.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: '0 0 22px'
    }
  }, s.blurb, " You\u2019ll begin with a short consultation, then settle into a quiet room with warm towels and tea."), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, "What\u2019s included"), ['Consultation & scalp reading', 'Warm steam and double cleanse', 'Slow pressure-point massage', 'Cool towels, tea, and rest'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      padding: '8px 0',
      color: 'var(--text-body)',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-check",
    style: {
      color: 'var(--gilt)',
      fontSize: 18
    }
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 30px',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(AButton, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: () => onBook(s.id)
  }, "Reserve \xB7 $", s.price)));
}

/* ── Booking ────────────────────────────────────────────────────────────── */
function AppBooking({
  id,
  onNav,
  onConfirm
}) {
  const s = APP_SERVICES.find(x => x.id === id) || APP_SERVICES[0];
  const [date, setDate] = React.useState('thu');
  const [time, setTime] = React.useState('2:00');
  const [paraffin, setParaffin] = React.useState(true);
  const total = s.price + (paraffin ? 14 : 0);
  const dObj = APP_DATES.find(d => d.k === date);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '54px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('detail'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: 0,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-arrow-left"
  }), " Back"), /*#__PURE__*/React.createElement("div", {
    style: ovl
  }, "Reserve a time"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...serif(26),
      margin: '6px 0 4px'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      margin: '0 0 24px'
    }
  }, s.dur), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '0 0 12px'
    }
  }, "Choose a day"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginBottom: 24
    }
  }, APP_DATES.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.k,
    onClick: () => setDate(d.k),
    style: {
      flex: 1,
      padding: '12px 0',
      borderRadius: 14,
      cursor: 'pointer',
      border: `1px solid ${date === d.k ? 'var(--accent)' : 'var(--border-default)'}`,
      background: date === d.k ? 'var(--accent)' : 'var(--surface-card)',
      color: date === d.k ? 'var(--on-accent)' : 'var(--text-body)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.8
    }
  }, d.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20
    }
  }, d.n)))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '0 0 12px'
    }
  }, "Choose a time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, APP_TIMES.map(t => /*#__PURE__*/React.createElement(ATag, {
    key: t,
    selected: time === t,
    onClick: () => setTime(t)
  }, t))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '0 0 12px'
    }
  }, "Add to your ritual"), /*#__PURE__*/React.createElement(ACard, {
    padding: "sm",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(ACheckbox, {
    checked: paraffin,
    onChange: e => setParaffin(e.target.checked),
    label: "Paraffin dip (+$14)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 30px',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, dObj.d, " ", dObj.n, " \xB7 ", time, " \xB7 Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--accent)'
    }
  }, "$", total)), /*#__PURE__*/React.createElement(AButton, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: () => onConfirm({
      service: s.name,
      date: `${dObj.d} ${dObj.n}`,
      time,
      total
    })
  }, "Confirm reservation")));
}

/* ── Confirmation ───────────────────────────────────────────────────────── */
function AppConfirm({
  booking,
  onNav
}) {
  const b = booking || {
    service: 'Signature Head Spa',
    date: 'Thu 19',
    time: '2:00',
    total: 132
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '90px 24px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 38,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-check"
  })), /*#__PURE__*/React.createElement("div", {
    style: ovl
  }, "You\u2019re booked"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...serif(30),
      margin: '10px 0 14px'
    }
  }, "See you soon."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: '0 0 32px'
    }
  }, "A confirmation is on its way. Come a few minutes early \u2014 we\u2019ll have tea waiting."), /*#__PURE__*/React.createElement(ACard, {
    padding: "md",
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...serif(20),
      marginBottom: 12
    }
  }, b.service), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ABadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-calendar-blank"
    })
  }, b.date), /*#__PURE__*/React.createElement(ABadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, b.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total at studio"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--accent)'
    }
  }, "$", b.total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 30px'
    }
  }, /*#__PURE__*/React.createElement(AButton, {
    variant: "secondary",
    size: "lg",
    block: true,
    onClick: () => onNav('browse')
  }, "Back to home")));
}
function AppShell() {
  const [route, setRoute] = React.useState('browse');
  const [activeId, setActiveId] = React.useState('spa');
  const [booking, setBooking] = React.useState(null);
  const open = id => {
    setActiveId(id);
    setRoute('detail');
  };
  const toBook = id => {
    setActiveId(id);
    setRoute('booking');
  };
  const confirm = b => {
    setBooking(b);
    setRoute('confirm');
  };
  if (route === 'detail') return /*#__PURE__*/React.createElement(Detail, {
    id: activeId,
    onNav: setRoute,
    onBook: toBook
  });
  if (route === 'booking') return /*#__PURE__*/React.createElement(AppBooking, {
    id: activeId,
    onNav: setRoute,
    onConfirm: confirm
  });
  if (route === 'confirm') return /*#__PURE__*/React.createElement(AppConfirm, {
    booking: booking,
    onNav: setRoute
  });
  return /*#__PURE__*/React.createElement(Browse, {
    onNav: setRoute,
    onOpen: open
  });
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
/* Booking — service, date/time, guest details, add-ons, and a live summary.
   On submit, calls onBook(summary) which the shell routes to Confirmation. */
const BK_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const {
  Button: BButton,
  Card: BCard,
  Input: BInput,
  Select: BSelect,
  Checkbox: BCheckbox,
  Tag: BTag,
  Badge: BBadge
} = BK_DS;

/* Bookable services + add-ons come from shared menu data (window.CNHS_MENU). */
const BK_DATES = [{
  key: 'wed',
  d: 'Wed',
  n: '18'
}, {
  key: 'thu',
  d: 'Thu',
  n: '19'
}, {
  key: 'fri',
  d: 'Fri',
  n: '20'
}, {
  key: 'sat',
  d: 'Sat',
  n: '21'
}, {
  key: 'sun',
  d: 'Sun',
  n: '22'
}];
const BK_TIMES = ['11:00', '12:30', '2:00', '3:30', '5:00', '6:30'];
function Booking({
  onBook
}) {
  const BK_SERVICES = window.CNHS_MENU.bookable;
  const BK_ADDONS = window.CNHS_MENU.addons;
  const [service, setService] = React.useState(BK_SERVICES[0].value);
  const [date, setDate] = React.useState('thu');
  const [time, setTime] = React.useState('2:00');
  const [addons, setAddons] = React.useState({});
  const [name, setName] = React.useState('');
  const svc = BK_SERVICES.find(s => s.value === service) || BK_SERVICES[0];
  const addTotal = BK_ADDONS.reduce((sum, a) => sum + (addons[a.key] ? a.price : 0), 0);
  const total = svc.price + addTotal;
  const dateObj = BK_DATES.find(d => d.key === date);
  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--text-secondary)',
    display: 'block',
    marginBottom: 10
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      margin: '0 auto',
      padding: '64px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      marginBottom: 14
    }
  }, "Reserve a time"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      margin: '0 0 40px'
    }
  }, "Begin booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 0.9fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onBook({
        service,
        date: `${dateObj.d} ${dateObj.n}`,
        time,
        name: name || 'Guest',
        total,
        addons: BK_ADDONS.filter(a => addons[a.key])
      });
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(BSelect, {
    label: "Treatment",
    value: service,
    onChange: e => setService(e.target.value),
    options: BK_SERVICES.map(s => ({
      value: s.value,
      label: `${s.value} · $${s.price}`
    }))
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Choose a day"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, BK_DATES.map(d => /*#__PURE__*/React.createElement(BTag, {
    key: d.key,
    selected: date === d.key,
    onClick: () => setDate(d.key)
  }, d.d, " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      marginLeft: 4
    }
  }, d.n))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Choose a time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, BK_TIMES.map(t => /*#__PURE__*/React.createElement(BTag, {
    key: t,
    selected: time === t,
    onClick: () => setTime(t)
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Add to your ritual"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, BK_ADDONS.map(a => /*#__PURE__*/React.createElement(BCheckbox, {
    key: a.key,
    checked: !!addons[a.key],
    onChange: e => setAddons(s => ({
      ...s,
      [a.key]: e.target.checked
    })),
    label: `${a.label} (+$${a.price})`
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(BInput, {
    label: "Full name",
    placeholder: "Your name",
    required: true,
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Phone",
    type: "tel",
    placeholder: "(555) 000-0000"
  })), /*#__PURE__*/React.createElement(BInput, {
    label: "Email",
    type: "email",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-envelope-simple"
    }),
    placeholder: "you@email.com",
    hint: "We'll send your confirmation here.",
    required: true
  }), /*#__PURE__*/React.createElement(BButton, {
    variant: "primary",
    size: "lg",
    type: "submit",
    block: true
  }, "Confirm reservation")), /*#__PURE__*/React.createElement(BCard, {
    feature: true,
    padding: "lg",
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      marginBottom: 16
    }
  }, "Your reservation"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 26,
      color: 'var(--text-strong)',
      margin: '0 0 4px'
    }
  }, service), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(BBadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-calendar-blank"
    })
  }, dateObj.d, " ", dateObj.n), /*#__PURE__*/React.createElement(BBadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, time)), [[service, `$${svc.price}`], ...BK_ADDONS.filter(a => addons[a.key]).map(a => [a.label, `$${a.price}`])].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      color: 'var(--accent)'
    }
  }, "$", total)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: '16px 0 0',
      textAlign: 'center'
    }
  }, "No charge today \u2014 you'll settle in studio. Free to reschedule up to 24 hours ahead.")))));
}
Object.assign(window, {
  Booking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Confirmation.jsx
try { (() => {
/* Confirmation — calm success state after booking. */
const CF_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const {
  Button: CButton,
  Card: CCard,
  Badge: CBadge
} = CF_DS;
const {
  Photo: CPhoto
} = window;
function Confirmation({
  booking,
  onNav
}) {
  const b = booking || {
    service: 'Signature Head Spa',
    date: 'Thu 19',
    time: '2:00',
    name: 'Guest',
    total: 132,
    addons: []
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-soft)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '88px var(--gutter) 96px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 34,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      marginBottom: 12
    }
  }, "You\u2019re booked"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      lineHeight: 1.05,
      margin: '0 0 16px'
    }
  }, "See you soon, ", b.name, "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: '0 0 40px'
    }
  }, "A confirmation is on its way to your inbox. Come a few minutes early, and we\u2019ll have tea waiting."), /*#__PURE__*/React.createElement(CCard, {
    padding: "lg",
    style: {
      textAlign: 'left',
      maxWidth: 460,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(CPhoto, {
    ratio: "1 / 1",
    radius: "var(--radius-md)",
    label: null
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, b.service), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CBadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-calendar-blank"
    })
  }, b.date), /*#__PURE__*/React.createElement(CBadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, b.time)))), b.addons && b.addons.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 14,
      marginBottom: 4
    }
  }, b.addons.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.key,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      color: 'var(--text-secondary)',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, a.label), /*#__PURE__*/React.createElement("span", null, "+$", a.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total at studio"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--accent)'
    }
  }, "$", b.total))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-calendar-plus"
    })
  }, "Add to calendar"), /*#__PURE__*/React.createElement(CButton, {
    variant: "ghost",
    onClick: () => onNav('home')
  }, "Back to home"))));
}
Object.assign(window, {
  Confirmation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Confirmation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EvolvedHome.jsx
try { (() => {
/* Evolved homepage proposal — keeps the live site's IA (hero, services, gallery,
   testimonials, visit/hours/map) but elevates it with our editorial system.
   MOBILE-FIRST: fluid type via clamp(), auto-fit card grids, and a viewport
   hook that collapses the two-column bands + nav at <760px. */
const EVO_DS = window.ChicNailHeadSpaDesignSystem_843afb;

/* Real assets from the live site (chicnailheadspa.com). Referenced by URL
   because the build sandbox can't download cross-origin; they load from the
   studio's own server. Drop local copies into assets/site/ to self-host. */
const EVO_CDN = 'https://chicnailheadspa.com/assets/images/';
const EVO_HERO_VIDEO = EVO_CDN + 'hero-video.mp4';
const EVO_GALLERY = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => EVO_CDN + 'gallery/nail-' + n + '.png');
const EVO_SALON = [1, 2, 3, 4].map(n => EVO_CDN + 'gallery/salon-' + n + '.png');

/* Viewport hook — single breakpoint at 760px (tablet/phone). */
function useIsMobile(bp) {
  const q = '(max-width: ' + (bp || 760) + 'px)';
  const get = () => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false;
  const [m, setM] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on);
    };
  }, [q]);
  return m;
}

/* Responsive spacing helpers (mobile-first: small by default, grows fluidly). */
const sectionPad = '(--section-y)';
const padY = m => m ? '56px clamp(20px, 5vw, 32px)' : 'var(--section-y) clamp(24px, 5vw, var(--gutter))';
const padX = m => m ? 'clamp(20px, 5vw, 32px)' : 'var(--gutter)';
const wrap = m => ({
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 ' + padX(m)
});
const evoOverline = color => ({
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: '.26em',
  textTransform: 'uppercase',
  color: color || 'var(--accent)'
});

/* ── Header (collapses to a sheet menu on mobile) ───────────────────────── */
function EvoHeader() {
  const {
    Button
  } = EVO_DS;
  const m = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['services', 'Services'], ['gallery', 'Gallery'], ['visit', 'Visit']];
  const go = id => {
    setOpen(false);
    const el = document.getElementById('evo-' + id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  };
  const solid = scrolled || open;
  const linkColor = solid ? 'var(--text-secondary)' : 'rgba(254,247,237,0.92)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: solid ? 'rgba(254,247,237,0.86)' : 'transparent',
      backdropFilter: solid ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--border-subtle)' : 'transparent'),
      transition: 'background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap(m),
      height: m ? 68 : 86,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: solid ? '../../assets/logo-lockup.png' : '../../assets/logo-lockup-reversed.png',
    alt: "Chic Nail & Head Spa",
    style: {
      height: m ? 48 : 68,
      filter: solid ? 'none' : 'drop-shadow(0 2px 10px rgba(42,29,21,0.55))',
      transition: 'height var(--dur) var(--ease-standard)'
    }
  }), m ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(o => !o),
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'none',
      color: linkColor,
      fontSize: 24,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: open ? 'ph-light ph-x' : 'ph-light ph-list'
  })) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: linkColor,
      padding: '6px 0',
      transition: 'color var(--dur) var(--ease-standard)'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go('book')
  }, "Book now"))), m && open && /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap(m),
      paddingTop: 8,
      paddingBottom: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(254,247,237,0.96)'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 500,
      color: 'var(--text-strong)',
      padding: '14px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: () => go('book')
  }, "Book now"))));
}

/* ── Hero (video-forward) ───────────────────────────────────────────────── */
function EvoHero() {
  const {
    Button
  } = EVO_DS;
  const m = useIsMobile();
  const go = id => {
    const el = document.getElementById('evo-' + id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: m ? 540 : 660,
      background: 'var(--espresso-900)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: m ? '96px 0 64px' : '0'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    poster: EVO_SALON[2],
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: EVO_HERO_VIDEO,
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: m ? 'linear-gradient(180deg, rgba(42,29,21,0.72) 0%, rgba(42,29,21,0.82) 100%)' : 'linear-gradient(100deg, rgba(42,29,21,0.86) 0%, rgba(42,29,21,0.55) 55%, rgba(42,29,21,0.32) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...wrap(m),
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(40px, 9vw, 84px)',
      lineHeight: 1.03,
      color: 'var(--cream-50)',
      margin: '0',
      letterSpacing: '-0.015em'
    }
  }, "A moment of care that is entirely ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--honey-300)'
    }
  }, "yours"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px, 2.6vw, 19px)',
      lineHeight: 1.6,
      color: 'var(--taupe-400)',
      maxWidth: 460,
      margin: '20px 0 30px'
    }
  }, "Luxury nail artistry and a restorative head spa \u2014 warm water, slow hands, and a quiet room in the heart of Plain City."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('book')
  }, "Book now"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('services'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--cream-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      textUnderlineOffset: '5px',
      textDecorationColor: 'var(--honey-400)'
    }
  }, "View services")))), !m && /*#__PURE__*/React.createElement("button", {
    onClick: () => go('services'),
    "aria-label": "Scroll to services",
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      color: 'var(--taupe-400)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.24em',
      textTransform: 'uppercase'
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-caret-down",
    style: {
      fontSize: 18,
      animation: 'evoBob 1.8s var(--ease-out, ease-out) infinite'
    }
  })));
}

/* ── Trust strip (auto-fit, wraps to 2×2 then 1 col) ────────────────────── */
function EvoTrust() {
  const m = useIsMobile();
  const go = id => {
    const el = document.getElementById('evo-' + id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  };
  const items = [['ph-sparkle', 'Luxury nail services', null], ['ph-drop', 'Restorative head spa', null], ['ph-calendar-check', 'Online booking', null], ['ph-hand-heart', 'Walk-ins welcome', null]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: m ? '8px 24px' : '10px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: m ? 6 : 10
    }
  }, items.map(([ic, t, target]) => {
    const inner = m ? /*#__PURE__*/React.createElement("i", {
      className: 'ph-light ' + ic,
      style: {
        fontSize: 16,
        color: 'var(--accent)'
      }
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--accent-tint)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'ph-light ' + ic,
      style: {
        fontSize: 14,
        color: 'var(--accent)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.3
      }
    }, t));
    const base = m ? {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--accent-tint)',
      color: 'var(--accent)',
      margin: '0 auto'
    } : {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-secondary)',
      justifyContent: 'center'
    };
    return target ? /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => go(target),
      style: {
        ...base,
        cursor: 'pointer',
        font: 'inherit',
        transition: 'color var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }
    }, inner) : /*#__PURE__*/React.createElement("div", {
      key: t,
      style: base
    }, inner);
  })));
}

/* ── Services with prices ───────────────────────────────────────────────── */
function EvoServices() {
  const {
    Card,
    Badge,
    Button,
    Tabs
  } = EVO_DS;
  const m = useIsMobile();
  const [cat, setCat] = React.useState('pedi');
  const order = ['pedi', 'mani', 'acrylic', 'gelx', 'dip', 'headspa'];
  const labelMap = {
    pedi: 'Pedicure',
    mani: 'Manicure',
    acrylic: 'Acrylic',
    gelx: 'Gel-X',
    dip: 'Dip Powder',
    headspa: 'Head Spa'
  };
  const cats = order.map(v => v === 'headspa' ? {
    value: v,
    label: labelMap[v],
    count: 'Soon'
  } : {
    value: v,
    label: labelMap[v]
  });
  const comingSoon = cat === 'headspa';
  const list = window.CNHS_MENU.full.filter(m2 => m2.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "evo-services",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: padY(m)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: evoOverline()
  }, "Our Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(32px, 6vw, 50px)',
      color: 'var(--text-strong)',
      margin: '12px 0 10px'
    }
  }, "Treatments & ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "specialties")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '0 auto'
    }
  }, "Every service includes a complimentary consultation. Prices are starting rates \u2014 ask us for a personalized quote.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '24px 0 32px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }
  }, /*#__PURE__*/React.createElement("style", null, `#evo-services .cnhs-tabs-scroll::-webkit-scrollbar{display:none}`), /*#__PURE__*/React.createElement(Tabs, {
    items: cats,
    value: cat,
    onChange: setCat,
    style: {
      flexShrink: 0,
      width: 'max-content'
    }
  })), comingSoon ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      textAlign: 'center',
      background: 'var(--surface-soft)',
      border: '1px solid var(--gilt-soft)',
      borderRadius: 'var(--radius-xl)',
      padding: '52px 32px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-drop",
    style: {
      fontSize: 40,
      color: 'var(--gilt)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      color: 'var(--text-strong)',
      margin: '14px 0 10px'
    }
  }, "The Head Spa is coming soon"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 auto 22px',
      maxWidth: 420
    }
  }, "Our restorative scalp rituals open later this season. Join the list and we\u2019ll let you know the moment booking opens."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-envelope-simple"
    })
  }, "Notify me")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 16,
      maxWidth: 920,
      margin: '0 auto'
    }
  }, list.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    padding: "sm",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 17,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, s.name), s.tag && /*#__PURE__*/React.createElement(Badge, {
    variant: s.tagV
  }, s.tag)), s.blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, s.blurb), s.dur && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, s.dur))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--accent)',
      whiteSpace: 'nowrap'
    }
  }, s.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: m,
    onClick: () => window.open('./services.html', '_blank'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-arrow-right"
    })
  }, "View full services & pricing"))));
}

/* ── Reserve Your Time (CTA — mirrors the live site, after Services) ─────── */
function EvoReserve() {
  const {
    Button
  } = EVO_DS;
  const m = useIsMobile();
  const c = window.CNHS_MENU.contact;
  const secRef = React.useRef(null);
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = null;
    const update = () => {
      raf = null;
      const sec = secRef.current,
        img = imgRef.current;
      if (!sec || !img) return;
      const r = sec.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      // progress: -1 (entering bottom) → 1 (leaving top)
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2 + r.height / 2);
      img.style.transform = 'translate3d(0, ' + (progress * 14).toFixed(2) + '%, 0) scale(1.18)';
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: secRef,
    id: "evo-book",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--espresso-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: imgRef,
    src: EVO_SALON[0],
    alt: "",
    "aria-hidden": "true",
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(1.18)',
      willChange: 'transform'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(42,29,21,0.78) 0%, rgba(42,29,21,0.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: padY(m),
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: evoOverline('var(--honey-300)')
  }, "Reserve Your Time"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px, 6vw, 56px)',
      margin: '14px 0 16px',
      lineHeight: 1.04,
      color: 'var(--cream-50)'
    }
  }, "Ready to be ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--honey-300)'
    }
  }, "pampered"), "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px, 2.5vw, 19px)',
      lineHeight: 1.6,
      color: 'var(--taupe-400)',
      maxWidth: 520,
      margin: '0 auto 30px'
    }
  }, "Book your appointment online in seconds. Choose your service, select a time, and arrive ready to unwind."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: m
  }, "Book online now")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--taupe-400)',
      margin: '22px 0 0'
    }
  }, "Or call us \u2014 we\u2019re happy to help \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: `tel:${c.phone.replace(/[^0-9]/g, '')}`,
    style: {
      color: 'var(--honey-300)',
      textDecoration: 'none'
    }
  }, c.phone))));
}

/* ── Seasonal / holiday themes ──────────────────────────────────────────────
   The gallery auto-detects today's date and themes the heading, accent word,
   caption, icon, and per-tile labels to the closest holiday — else the season.
   Holidays take priority within their window. Labels describe the nail-art
   styles the studio would feature; swap in matching photos when available. */
const EVO_THEMES = {
  newyear: {
    label: 'New Year',
    icon: 'ph-sparkle',
    accent: 'sparkle',
    title: ['Ring in the year in', 'sparkle'],
    caption: 'New Year · gold foils, glitter & midnight chrome',
    tags: ['Gold foil', 'Glitter tips', 'Midnight chrome', 'Champagne French', 'Star accents', 'Confetti', 'Black & gold', 'Shimmer ombré', 'Diamond dust']
  },
  valentines: {
    label: "Valentine's",
    icon: 'ph-heart',
    accent: 'love',
    title: ['A little', 'love'],
    caption: "Valentine's · hearts, blush pinks & red lacquer",
    tags: ['Tiny hearts', 'Blush French', 'Red lacquer', 'Rose accents', 'Pink ombré', 'Lace detail', 'Crystal heart', 'Candy swirl', 'Cupid art']
  },
  stpatricks: {
    label: "St. Patrick's",
    icon: 'ph-clover',
    accent: 'luck',
    title: ['A touch of', 'luck'],
    caption: "St. Patrick's · emerald, shamrocks & gold",
    tags: ['Shamrock art', 'Emerald gel', 'Gold accents', 'Clover tips', 'Green ombré', 'Rainbow detail', 'Matte green', 'Lucky charm', 'Glitter gold']
  },
  spring: {
    label: 'Spring',
    icon: 'ph-flower',
    accent: 'bloom',
    title: ['In full', 'bloom'],
    caption: 'Spring · florals, pastels & soft French',
    tags: ['Cherry blossom', 'Pastel French', 'Daisy art', 'Lavender gel', 'Soft ombré', 'Floral detail', 'Mint chrome', 'Tulip accents', 'Petal tips']
  },
  easter: {
    label: 'Easter',
    icon: 'ph-egg',
    accent: 'pastels',
    title: ['Soft', 'pastels'],
    caption: 'Easter · pastels, florals & egg-art accents',
    tags: ['Pastel swirl', 'Floral French', 'Egg art', 'Lilac gel', 'Mint ombré', 'Daisy tips', 'Speckled detail', 'Soft chrome', 'Spring petals']
  },
  fourth: {
    label: 'July 4th',
    icon: 'ph-firework',
    accent: 'fireworks',
    title: ['Light up the', 'fireworks'],
    caption: 'July 4th · fireworks, stars & red-white-blue',
    tags: ['Fireworks', 'Stars & stripes', 'Red glitter', 'Navy chrome', 'Sparkler tips', 'Flag accents', 'Blue ombré', 'Silver foil', 'Liberty art']
  },
  summer: {
    label: 'Summer',
    icon: 'ph-sun-horizon',
    accent: 'sunshine',
    title: ['Made for', 'sunshine'],
    caption: 'Summer · brights, citrus & ocean tones',
    tags: ['Citrus art', 'Aqua chrome', 'Sunset ombré', 'Palm detail', 'Coral tips', 'Neon French', 'Seashell accents', 'Tropical floral', 'Gold shimmer']
  },
  halloween: {
    label: 'Halloween',
    icon: 'ph-ghost',
    accent: 'mischief',
    title: ['A little', 'mischief'],
    caption: 'Halloween · spider webs, matte black & spice',
    tags: ['Spider web', 'Matte black', 'Ghost art', 'Pumpkin spice', 'Bat tips', 'Blood-red gel', 'Witchy chrome', 'Cobweb French', 'Candy corn']
  },
  thanksgiving: {
    label: 'Thanksgiving',
    icon: 'ph-leaf',
    accent: 'gratitude',
    title: ['Warm with', 'gratitude'],
    caption: 'Thanksgiving · burnt orange, gold & maple leaves',
    tags: ['Maple leaf', 'Burnt orange', 'Gold accents', 'Cinnamon gel', 'Plaid detail', 'Amber ombré', 'Wheat art', 'Copper chrome', 'Spice tips']
  },
  christmas: {
    label: 'Christmas',
    icon: 'ph-snowflake',
    accent: 'sparkle',
    title: ['Merry &', 'sparkle'],
    caption: 'Christmas · snowflakes, evergreen & candy cane',
    tags: ['Snowflake art', 'Candy cane', 'Evergreen gel', 'Gold glitter', 'Plaid tips', 'Ornament detail', 'Icy chrome', 'Holly accents', 'Velvet red']
  },
  autumn: {
    label: 'Autumn',
    icon: 'ph-leaf',
    accent: 'amber',
    title: ['Wrapped in', 'amber'],
    caption: 'Autumn · warm neutrals, rust & gold leaf',
    tags: ['Rust ombré', 'Gold leaf', 'Warm French', 'Maple detail', 'Mocha chrome', 'Amber tips', 'Plaid art', 'Caramel swirl', 'Spice accents']
  },
  winter: {
    label: 'Winter',
    icon: 'ph-snowflake',
    accent: 'frost',
    title: ['A touch of', 'frost'],
    caption: 'Winter · icy blues, silver chrome & snowflakes',
    tags: ['Snowflake art', 'Icy chrome', 'Silver foil', 'Frost French', 'Sky-blue gel', 'Crystal tips', 'Glitter ombré', 'Velvet detail', 'Diamond dust']
  }
};

/* Returns the theme key for a given date — holidays first, then season. */
function evoThemeForDate(d) {
  const mo = d.getMonth() + 1,
    day = d.getDate();
  const within = (m1, d1, m2, d2) => {
    const v = mo * 100 + day,
      a = m1 * 100 + d1,
      b = m2 * 100 + d2;
    return a <= b ? v >= a && v <= b : v >= a || v <= b;
  };
  if (within(12, 18, 12, 31) || within(1, 1, 1, 1)) return 'christmas';
  if (within(12, 26, 1, 2)) return 'newyear';
  if (within(2, 7, 2, 14)) return 'valentines';
  if (within(3, 12, 3, 17)) return 'stpatricks';
  if (within(3, 25, 4, 21)) return 'easter'; // approx Easter window
  if (within(6, 28, 7, 6)) return 'fourth';
  if (within(10, 20, 10, 31)) return 'halloween';
  if (within(11, 20, 11, 30)) return 'thanksgiving';
  if (within(12, 1, 12, 17)) return 'christmas';
  // seasons (Northern Hemisphere)
  if (within(3, 1, 5, 31)) return 'spring';
  if (within(6, 1, 8, 31)) return 'summer';
  if (within(9, 1, 11, 30)) return 'autumn';
  return 'winter';
}

/* Returns the 9 local paths for a theme's gallery folder.
   Folder convention: assets/gallery/<themeKey>/nail-1.jpg … nail-9.jpg
   Falls back to live-site images via onError on each img tag. */
function evoGalleryImages(key) {
  return Array.from({
    length: 9
  }, (_, i) => '../../assets/gallery/' + key + '/nail-' + (i + 1) + '.jpg');
}

/* ── Gallery (date-aware: seasonal & holiday themes) ────────────────────── */
function EvoGallery() {
  const {
    Button,
    Badge
  } = EVO_DS;
  const m = useIsMobile();
  const autoKey = React.useMemo(() => evoThemeForDate(new Date()), []);
  const [key, setKey] = React.useState(autoKey);
  const t = EVO_THEMES[key];
  const images = evoGalleryImages(key);
  // chips: a curated rail — current theme first, then the rest
  const chipKeys = [autoKey, ...Object.keys(EVO_THEMES).filter(k => k !== autoKey)];
  return /*#__PURE__*/React.createElement("section", {
    id: "evo-gallery",
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: padY(m)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 18,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...evoOverline(),
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + t.icon,
    style: {
      fontSize: 15
    }
  }), " The Gallery \xB7 ", t.label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px, 5vw, 46px)',
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 1.08
    }
  }, t.title[0], " ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, t.title[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '8px 0 0',
      letterSpacing: '.04em'
    }
  }, t.caption)), !m && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-arrow-right"
    })
  }, "View full gallery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: m ? 10 : 16
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--mocha-200)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: t.tags[i % t.tags.length] + ' nail art',
    loading: "lazy",
    onError: e => {
      e.currentTarget.src = EVO_GALLERY[i % EVO_GALLERY.length];
      e.currentTarget.onerror = null;
    },
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '26px 14px 12px',
      background: 'linear-gradient(180deg, transparent, rgba(42,29,21,0.72))',
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + t.icon,
    style: {
      color: 'var(--honey-300)',
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: '.04em',
      color: 'var(--cream-50)'
    }
  }, t.tags[i % t.tags.length]))))), m && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-arrow-right"
    })
  }, "View full gallery"))));
}

/* ── Testimonials (auto-fit → 1 col on mobile) ──────────────────────────── */
function EvoTestimonials() {
  const m = useIsMobile();
  const quotes = [['The best hour of my month. I left feeling like I\u2019d been on holiday.', 'Mei R.'], ['My scalp has never felt so clean — and the nail art is unreal.', 'Jordan P.'], ['Calm, careful, and genuinely luxurious. Worth every minute.', 'Alyssa T.'], ['I booked a head spa on a whim and now it\u2019s my monthly ritual.', 'Dana K.']];
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(n => (n + 1) % quotes.length), 5000);
    return () => clearInterval(t);
  }, [paused, quotes.length]);
  const [q, who] = quotes[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: padY(m)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: evoOverline()
  }, "From Our Clients")), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center',
      minHeight: m ? 240 : 220,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-quotes",
    style: {
      fontSize: 40,
      color: 'var(--gilt)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px, 3.4vw, 34px)',
      lineHeight: 1.3,
      color: 'var(--text-strong)',
      margin: '16px 0 22px',
      letterSpacing: '-0.01em',
      animation: 'evoFade 600ms var(--ease-out, ease-out) both'
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--honey-500)',
      letterSpacing: '2px'
    }
  }, '\u2605\u2605\u2605\u2605\u2605'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, who)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9
    }
  }, quotes.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'Testimonial ' + (n + 1),
    style: {
      width: n === i ? 26 : 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: n === i ? 'var(--accent)' : 'var(--taupe-400)',
      padding: 0,
      transition: 'width var(--dur) var(--ease-standard), background var(--dur) var(--ease-standard)'
    }
  }))))));
}

/* ── Visit / hours / book (stacks on mobile) ────────────────────────────── */
function EvoVisit() {
  const m = useIsMobile();
  const c = window.CNHS_MENU.contact;
  const hours = [['Mon – Fri', '9:00 AM – 7:00 PM'], ['Saturday', '9:00 AM – 6:00 PM'], ['Sunday', '10:00 AM – 5:00 PM']];
  const MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5392476754278!2d-83.2028395!3d40.18666340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838eb3894a54019%3A0x8281989e1af8745c!2sChic%20Nail%20and%20Head%20Spa!5e1!3m2!1sen!2s!4v1780990941973!5m2!1sen!2s';
  const mapH = m ? 280 : 400;
  return /*#__PURE__*/React.createElement("section", {
    id: "evo-visit",
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: padY(m),
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '0.8fr 1.2fr',
      gap: m ? 28 : 48,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: evoOverline()
  }, "Visit Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px, 5vw, 44px)',
      color: 'var(--text-strong)',
      margin: '12px 0 22px',
      lineHeight: 1.08
    }
  }, "Find us in ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "Plain City")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-map-pin",
    style: {
      fontSize: 22,
      color: 'var(--gilt)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, c.addr1, /*#__PURE__*/React.createElement("br", null), c.addr2)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-phone",
    style: {
      fontSize: 22,
      color: 'var(--gilt)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: `tel:${c.phone.replace(/[^0-9]/g, '')}`,
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, c.phone)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 18
    }
  }, hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, h))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: mapH,
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Chic Nail & Head Spa on Google Maps",
    src: MAP,
    width: "100%",
    height: "100%",
    style: {
      border: 0,
      display: 'block',
      minHeight: mapH
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }))));
}

/* ── Footer (stacks on mobile) ──────────────────────────────────────────── */
function EvoFooter() {
  const m = useIsMobile();
  const c = window.CNHS_MENU.contact;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--espresso-950)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: (m ? '48px ' : '64px ') + padX(m) + (m ? ' 32px' : ' 36px'),
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '1.4fr 1fr 1fr',
      gap: m ? 28 : 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: 116,
      marginLeft: -6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--honey-300)',
      marginBottom: 4
    }
  }, "Explore"), [['Services', 'services'], ['Gallery', 'gallery'], ['Visit', 'visit'], ['Book Now', 'book']].map(([t, id]) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => {
      const el = document.getElementById('evo-' + id);
      if (el) window.scrollTo({
        top: el.offsetTop - 64,
        behavior: 'smooth'
      });
    },
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--cream-200)',
      transition: 'color var(--dur) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--honey-300)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--cream-200)'
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--honey-300)',
      marginBottom: 4
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--cream-200)'
    }
  }, c.phone), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--cream-200)'
    }
  }, c.email), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 12
    }
  }, [['facebook', 'ph-facebook-logo', 'Facebook'], ['instagram', 'ph-instagram-logo', 'Instagram'], ['google', 'ph-google-logo', 'Google reviews']].map(([key, icon, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: c.social[key],
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label,
    title: label,
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid rgba(185,142,79,0.5)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--honey-300)',
      fontSize: 20,
      textDecoration: 'none',
      transition: 'background var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--honey-500)';
      e.currentTarget.style.color = 'var(--espresso-950)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--honey-300)';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + icon
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(185,142,79,0.22)',
      padding: '20px ' + padX(m),
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--taupe-400)'
    }
  }, "\xA9 2026 Chic Nail & Head Spa \xB7 Plain City, Ohio"));
}
function EvoHome() {
  const [ready, setReady] = React.useState(!!(window.ChicNailHeadSpaDesignSystem_843afb && window.ChicNailHeadSpaDesignSystem_843afb.Button && window.CNHS_MENU));
  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (window.ChicNailHeadSpaDesignSystem_843afb && window.ChicNailHeadSpaDesignSystem_843afb.Button && window.CNHS_MENU) {
        setReady(true);
        clearInterval(t);
      }
    }, 50);
    return () => clearInterval(t);
  }, [ready]);
  if (!ready) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(EvoHeader, null), /*#__PURE__*/React.createElement(EvoHero, null), /*#__PURE__*/React.createElement(EvoTrust, null), /*#__PURE__*/React.createElement(EvoServices, null), /*#__PURE__*/React.createElement(EvoReserve, null), /*#__PURE__*/React.createElement(EvoGallery, null), /*#__PURE__*/React.createElement(EvoTestimonials, null), /*#__PURE__*/React.createElement(EvoVisit, null), /*#__PURE__*/React.createElement(EvoFooter, null));
}
Object.assign(window, {
  EvoHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EvolvedHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Home — marketing landing for the website kit. Renders page sections; the
   index shell wraps it with Header + Footer. */
const HOME_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const {
  Button: HButton,
  Card: HCard,
  Badge: HBadge
} = HOME_DS;
const {
  Photo: HPhoto,
  SectionHead: HSectionHead
} = window;

/* Featured services come from the shared menu data (window.CNHS_MENU). */

function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--gutter) 96px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      marginBottom: 20
    }
  }, "Nail & Head Spa \xB7 Plain City, OH"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      lineHeight: 1.04,
      margin: 0,
      letterSpacing: '-0.015em'
    }
  }, "Settle in.", /*#__PURE__*/React.createElement("br", null), "We\u2019ll take it", /*#__PURE__*/React.createElement("br", null), "from ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "here"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      maxWidth: 440,
      margin: '24px 0 32px'
    }
  }, "An unhurried hour for nails and scalp. Warm water, slow hands, and a quiet room \u2014 the kind of care you feel for days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('booking')
  }, "Reserve a time"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => onNav('services'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-arrow-right"
    })
  }, "Browse the menu"))), /*#__PURE__*/React.createElement(HPhoto, {
    ratio: "4 / 5",
    label: "Studio \xB7 hero"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(HSectionHead, {
    align: "center",
    overline: "The Menu",
    title: "A short list, done beautifully",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, window.CNHS_MENU.featured.map(s => /*#__PURE__*/React.createElement(HCard, {
    key: s.name,
    padding: "sm",
    interactive: true,
    onClick: () => onNav('booking'),
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(HPhoto, {
    ratio: "5 / 4",
    radius: "var(--radius-md)",
    label: null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 8px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--accent)'
    }
  }, s.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '8px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, s.dur), s.tag && /*#__PURE__*/React.createElement(HBadge, {
    variant: s.tagV
  }, s.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, s.blurb))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--espresso-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(HPhoto, {
    ratio: "1 / 1",
    tone: "espresso",
    label: "The ritual"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      color: 'var(--honey-300)',
      marginBottom: 16
    }
  }, "The Head Spa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--cream-50)',
      fontSize: 'var(--fs-h1)',
      margin: '0 0 28px',
      lineHeight: 1.1
    }
  }, "Forty minutes of quiet.", /*#__PURE__*/React.createElement("br", null), "Warm water. Slow hands."), [['01', 'Consultation', 'We start with your scalp and your week — then tailor the pressure and the oils.'], ['02', 'The cleanse', 'A double cleanse and warm steam, worked slowly from the crown to the nape.'], ['03', 'The rest', 'Cool towels, a quiet room, and tea. You leave lighter than you came.']].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 20,
      padding: '16px 0',
      borderTop: '1px solid rgba(185,142,79,0.24)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--honey-400)',
      minWidth: 36
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 16,
      marginBottom: 4
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--taupe-400)',
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0,
      maxWidth: 420
    }
  }, d))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-quotes",
    style: {
      fontSize: 40,
      color: 'var(--gilt)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      lineHeight: 1.3,
      color: 'var(--text-strong)',
      margin: '16px 0 24px',
      letterSpacing: '-0.01em'
    }
  }, "I came in for a manicure and left feeling like I\u2019d been on holiday. The head spa is the best hour of my month."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Mei R. \xB7 Regular guest"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)',
      margin: '0 0 12px'
    }
  }, "An hour is waiting for you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-secondary)',
      margin: '0 0 28px'
    }
  }, "Wednesday through Sunday, by appointment."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('booking')
  }, "Begin booking"))));
}
const Button = HButton;
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Services — full treatment menu with category tabs and a price list. */
const SVC_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const {
  Button: SButton,
  Card: SCard,
  Badge: SBadge,
  Tabs: STabs
} = SVC_DS;
const {
  Photo: SPhoto,
  SectionHead: SSectionHead
} = window;

/* Menu + categories come from the shared menu data (window.CNHS_MENU). */

function Services({
  onNav
}) {
  const [cat, setCat] = React.useState('all');
  const list = window.CNHS_MENU.full.filter(m => cat === 'all' || m.cat === cat);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      marginBottom: 16
    }
  }, "The Menu"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      margin: '0 0 18px',
      lineHeight: 1.05
    }
  }, "Services & pricing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      maxWidth: 480,
      margin: 0
    }
  }, "A short, considered list. Every treatment includes a consultation and unhurried time in a quiet room.")), /*#__PURE__*/React.createElement(SPhoto, {
    ratio: "4 / 3",
    label: "Treatment room"
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 36,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(STabs, {
    items: window.CNHS_MENU.cats,
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, list.map(m => /*#__PURE__*/React.createElement(SCard, {
    key: m.name,
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, m.name), m.tag && /*#__PURE__*/React.createElement(SBadge, {
    variant: m.tagV
  }, m.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 0 10px',
      maxWidth: 520
    }
  }, m.blurb), m.dur && /*#__PURE__*/React.createElement(SBadge, {
    variant: "neutral",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-light ph-clock"
    })
  }, m.dur)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 12,
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--accent)',
      lineHeight: 1
    }
  }, m.price), /*#__PURE__*/React.createElement(SButton, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNav('booking')
  }, "Reserve"))))))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesPage.jsx
try { (() => {
/* Chic Nail & Head Spa — Services page.
   Magazine editorial layout: typography-forward, no photography,
   vertical category sections with large serif headings + dot-leader pricing.
   Booking links out to the external booking system. */
const SP_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const SP_BOOK_URL = 'https://chicnailheadspa.com/booking'; /* ← update with real booking URL */

function useScrolled(threshold) {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setS(window.scrollY > threshold);
    fn();
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, [threshold]);
  return s;
}
function useMobile(bp) {
  const q = '(max-width:' + (bp || 760) + 'px)';
  const [m, setM] = React.useState(() => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const fn = () => setM(mq.matches);
    fn();
    mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn);
    return () => mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn);
  }, [q]);
  return m;
}

/* ── Header ─────────────────────────────────────────────────────────────── */
function SPHeader() {
  const {
    Button
  } = SP_DS;
  const scrolled = useScrolled(20);
  const m = useMobile();
  const [open, setOpen] = React.useState(false);
  const links = [['/', 'Home'], ['/services', 'Services'], ['#contact', 'Visit']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: scrolled ? 'rgba(254,247,237,0.92)' : 'var(--surface-page)',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: `0 ${m ? '20px' : '48px'}`,
      height: m ? 62 : 74,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./evolved.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: m ? 32 : 42
    }
  })), !m && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, links.map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: label === 'Services' ? 'var(--accent)' : 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => window.open(SP_BOOK_URL, '_blank')
  }, "Book now")), m && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => window.open(SP_BOOK_URL, '_blank')
  }, "Book now")));
}

/* ── Hero band ──────────────────────────────────────────────────────────── */
function SPHero() {
  const m = useMobile();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      paddingTop: m ? 90 : 110,
      paddingBottom: m ? 40 : 60,
      paddingLeft: m ? 24 : 48,
      paddingRight: m ? 24 : 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '1fr 1fr',
      gap: m ? 24 : 64,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 16
    }
  }, "Plain City, Ohio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: m ? 48 : 72,
      lineHeight: 1.02,
      color: 'var(--text-strong)',
      margin: 0,
      letterSpacing: '-0.015em'
    }
  }, "Services &", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "pricing"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: m ? 15 : 17,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: '0 0 20px',
      maxWidth: 420
    }
  }, "A considered list, done beautifully. Every service includes a complimentary consultation. Prices are starting rates \u2014 ask us for a personalized quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mon\u2013Fri \xB7 9\u20137"), /*#__PURE__*/React.createElement("span", null, "Sat \xB7 9\u20136"), /*#__PURE__*/React.createElement("span", null, "Sun \xB7 10\u20135")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '40px auto 0',
      height: 1,
      background: 'linear-gradient(90deg, var(--gilt) 0%, var(--gilt-soft) 60%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '20px auto 0',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./menu-foldout.html",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-muted)',
      textDecoration: 'none',
      letterSpacing: '.02em'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-printer",
    style: {
      fontSize: 16,
      color: 'var(--gilt)'
    }
  }), " Download printable menu")));
}

/* ── Category section ───────────────────────────────────────────────────── */
const SECTION_META = {
  pedi: {
    eyebrow: 'Feet',
    note: 'Gel color available on all pedicures · +$20'
  },
  mani: {
    eyebrow: 'Nails',
    note: 'A fill refreshes your existing set every 2–3 weeks. Prices vary by length & complexity.'
  },
  acrylic: {
    eyebrow: 'Enhancements',
    note: 'Prices vary by length & complexity — ask us for a personalized quote.'
  },
  gelx: {
    eyebrow: 'Gel Extensions',
    note: 'Prices vary by length & complexity — ask us for a personalized quote.'
  },
  dip: {
    eyebrow: 'Dip Powder',
    note: null
  },
  headspa: {
    eyebrow: 'Scalp',
    note: 'Each ritual ends in quiet calm — restoring scalp and mind.'
  },
  wax: {
    eyebrow: 'Smooth & polished',
    note: null
  },
  kids: {
    eyebrow: 'Ages 12 & under',
    note: null
  },
  extras: {
    eyebrow: 'Finishing',
    note: 'Make any treatment your own — add a finishing touch, or let your technician suggest the perfect pairing.'
  }
};
const CAT_LABELS = {
  pedi: 'Pedicure',
  mani: 'Manicure',
  acrylic: 'Acrylic',
  gelx: 'Gel-X',
  dip: 'Dip Powder',
  headspa: 'Head Spa',
  wax: 'Waxing',
  kids: 'Kids',
  extras: 'Extras'
};
function ServiceRow({
  item
}) {
  const m = useMobile();
  const {
    Badge
  } = SP_DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-strong)',
      flex: 1
    }
  }, item.name, item.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: item.tagV
  }, item.tag)), item.dur && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginLeft: 10,
      fontWeight: 400
    }
  }, item.dur)), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: '1 1 40px',
      maxWidth: 120,
      borderBottom: '1px dotted var(--taupe-400)',
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      color: 'var(--accent)',
      whiteSpace: 'nowrap',
      fontWeight: 500
    }
  }, item.price)), item.blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: '4px 0 0',
      maxWidth: 560
    }
  }, item.blurb));
}
function CategorySection({
  cat,
  items
}) {
  const m = useMobile();
  const meta = SECTION_META[cat] || {};
  const label = CAT_LABELS[cat] || cat;
  const isComingSoon = false;
  /* Split into two columns for long lists on desktop */
  const useTwo = !m && items.length > 6;
  const half = Math.ceil(items.length / 2);
  const col1 = useTwo ? items.slice(0, half) : items;
  const col2 = useTwo ? items.slice(half) : [];
  return /*#__PURE__*/React.createElement("section", {
    id: 'svc-' + cat,
    style: {
      borderTop: '1px solid var(--gilt-soft)',
      padding: m ? '52px 24px' : '72px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '260px 1fr',
      gap: m ? 28 : 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: m ? 'relative' : 'sticky',
      top: m ? 'auto' : 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--honey-600)',
      marginBottom: 10
    }
  }, meta.eyebrow || ''), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: m ? 46 : 58,
      lineHeight: 1,
      color: 'var(--text-strong)',
      margin: '0 0 20px'
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, label)), isComingSoon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--mocha-100)',
      border: '1px solid var(--mocha-200)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-clock",
    style: {
      fontSize: 14
    }
  }), " Opening soon"), !isComingSoon && /*#__PURE__*/React.createElement("a", {
    href: SP_BOOK_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--accent)',
      textDecoration: 'none',
      letterSpacing: '.02em'
    }
  }, "Book this ", /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-arrow-right",
    style: {
      fontSize: 16
    }
  }))), /*#__PURE__*/React.createElement("div", null, useTwo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, col1.map(item => /*#__PURE__*/React.createElement(ServiceRow, {
    key: item.name,
    item: item
  }))), /*#__PURE__*/React.createElement("div", null, col2.map(item => /*#__PURE__*/React.createElement(ServiceRow, {
    key: item.name,
    item: item
  })))) : /*#__PURE__*/React.createElement("div", null, items.map(item => /*#__PURE__*/React.createElement(ServiceRow, {
    key: item.name,
    item: item
  }))), meta.note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px dotted var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-star",
    style: {
      color: 'var(--gilt)',
      marginRight: 8
    }
  }), meta.note)))));
}

/* ── Booking CTA band ───────────────────────────────────────────────────── */
function SPBookCTA() {
  const {
    Button
  } = SP_DS;
  const m = useMobile();
  const c = window.CNHS_MENU.contact;
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--espresso-900)',
      color: 'var(--cream-50)',
      padding: m ? '56px 24px' : '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '1fr 1fr',
      gap: m ? 36 : 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      color: 'var(--honey-300)',
      marginBottom: 14
    }
  }, "Reserve your time"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: m ? 40 : 54,
      lineHeight: 1.05,
      color: 'var(--cream-50)',
      margin: '0 0 18px'
    }
  }, "Ready to be ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--honey-300)'
    }
  }, "pampered"), "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--taupe-400)',
      maxWidth: 420,
      margin: '0 0 28px'
    }
  }, "Book your appointment online in seconds. Or call us \u2014 we're happy to help you choose the right treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => window.open(SP_BOOK_URL, '_blank')
  }, "Book online now"), /*#__PURE__*/React.createElement("a", {
    href: `tel:${c.phone.replace(/[^0-9]/g, '')}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--cream-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-phone",
    style: {
      color: 'var(--honey-300)'
    }
  }), c.phone))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(185,142,79,0.28)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: 64,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.8,
      color: 'var(--taupe-400)'
    }
  }, /*#__PURE__*/React.createElement("div", null, c.addr1), /*#__PURE__*/React.createElement("div", null, c.addr2), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, c.hours.join(' · ')))))));
}

/* ── Page root ──────────────────────────────────────────────────────────── */
function ServicesPage() {
  const [ready, setReady] = React.useState(!!(window.ChicNailHeadSpaDesignSystem_843afb && window.ChicNailHeadSpaDesignSystem_843afb.Button && window.CNHS_MENU));
  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (window.ChicNailHeadSpaDesignSystem_843afb && window.ChicNailHeadSpaDesignSystem_843afb.Button && window.CNHS_MENU) {
        setReady(true);
        clearInterval(t);
      }
    }, 50);
    return () => clearInterval(t);
  }, [ready]);
  if (!ready) return null;
  const cats = ['pedi', 'mani', 'acrylic', 'gelx', 'dip', 'headspa', 'wax', 'kids', 'extras'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(SPHeader, null), /*#__PURE__*/React.createElement(SPHero, null), cats.map(cat => /*#__PURE__*/React.createElement(CategorySection, {
    key: cat,
    cat: cat,
    items: window.CNHS_MENU.full.filter(m => m.cat === cat)
  })), /*#__PURE__*/React.createElement(SPBookCTA, null));
}
Object.assign(window, {
  ServicesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesV2.jsx
try { (() => {
/* Chic Nail & Head Spa — Services Menu v2
   Spa-minimal · tab switcher · mobile-first
   @media print: unfolds all categories into a two-column layout */

const SV2_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const SV2_BOOK = 'https://chicnailheadspa.com/booking';
function useMobileV2(bp) {
  const q = '(max-width:' + (bp || 760) + 'px)';
  const [m, setM] = React.useState(() => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const fn = () => setM(mq.matches);
    fn();
    mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn);
    return () => mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn);
  }, [q]);
  return m;
}

/* ── Category config ────────────────────────────────────────────────────── */
const SV2_CATS = [{
  key: 'pedi',
  label: 'Pedicure',
  icon: 'ph-flower-lotus'
}, {
  key: 'mani',
  label: 'Manicure',
  icon: 'ph-hand-waving'
}, {
  key: 'acrylic',
  label: 'Acrylic',
  icon: 'ph-paint-brush'
}, {
  key: 'gelx',
  label: 'Gel-X',
  icon: 'ph-sparkle'
}, {
  key: 'dip',
  label: 'Dip Powder',
  icon: 'ph-drop'
}, {
  key: 'headspa',
  label: 'Head Spa',
  icon: 'ph-waves'
}, {
  key: 'wax',
  label: 'Waxing',
  icon: 'ph-feather'
}, {
  key: 'kids',
  label: 'Kids',
  icon: 'ph-star'
}, {
  key: 'extras',
  label: 'Extras',
  icon: 'ph-plus-circle'
}];
const SV2_NOTE = {
  pedi: 'Gel color add-on available on all pedicures · +$20',
  mani: null,
  acrylic: 'Prices vary by length & complexity.',
  gelx: 'Prices vary by length & complexity.',
  dip: null,
  headspa: null,
  wax: null,
  kids: 'Ages 12 & under.',
  extras: 'Can be added to any service — ask your technician.'
};

/* ── Tag badge ──────────────────────────────────────────────────────────── */
function SV2Tag({
  variant,
  children
}) {
  const styles = {
    accent: {
      background: 'var(--accent-tint)',
      color: 'var(--accent)'
    },
    gilt: {
      background: 'var(--gilt-soft)',
      color: 'var(--honey-600)'
    },
    reserve: {
      background: 'var(--bordeaux-100, #f5eaec)',
      color: 'var(--bordeaux-600, #7a2535)'
    },
    neutral: {
      background: 'var(--surface-soft)',
      color: 'var(--text-muted)'
    }
  };
  const s = styles[variant] || styles.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...s,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, children);
}

/* ── Single service row ─────────────────────────────────────────────────── */
function SV2Row({
  item,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 0',
      borderBottom: last ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-strong)',
      flex: 1,
      lineHeight: 1.3
    }
  }, item.name, item.dur && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 12,
      color: 'var(--text-muted)',
      marginLeft: 8
    }
  }, item.dur)), item.tag && /*#__PURE__*/React.createElement(SV2Tag, {
    variant: item.tagV
  }, item.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 500,
      color: 'var(--accent)',
      whiteSpace: 'nowrap',
      marginLeft: 4
    }
  }, item.price)), item.blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: '5px 0 0',
      maxWidth: 560
    }
  }, item.blurb));
}

/* ── Category panel ─────────────────────────────────────────────────────── */
function SV2Panel({
  catKey
}) {
  const m = useMobileV2();
  const items = window.CNHS_MENU.full.filter(s => s.cat === catKey);
  const note = SV2_NOTE[catKey];
  const cat = SV2_CATS.find(c => c.key === catKey);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: m ? '40px 24px 100px' : '52px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36,
      paddingBottom: 24,
      borderBottom: '1.5px solid var(--gilt-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-light ' + (cat ? cat.icon : 'ph-list'),
    style: {
      fontSize: 18,
      color: 'var(--gilt)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, cat ? cat.label : catKey)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: m ? 48 : 62,
      lineHeight: 1,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, cat ? cat.label : catKey)), /*#__PURE__*/React.createElement("div", null, items.map((item, i) => /*#__PURE__*/React.createElement(SV2Row, {
    key: item.name,
    item: item,
    last: i === items.length - 1
  }))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px dotted var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-star",
    style: {
      color: 'var(--gilt)',
      marginRight: 6,
      fontSize: 13
    }
  }), note), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: SV2_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--accent)',
      textDecoration: 'none',
      letterSpacing: '.02em'
    }
  }, "Book ", cat ? cat.label.toLowerCase() : 'this', /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-arrow-right",
    style: {
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "or call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:6143899999",
    style: {
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, window.CNHS_MENU.contact.phone))));
}

/* ── Header ─────────────────────────────────────────────────────────────── */
function SV2Header() {
  const m = useMobileV2();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--espresso-900)',
      padding: m ? '0 24px' : '0 48px',
      height: m ? 64 : 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./evolved.html",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: m ? 36 : 48
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: SV2_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--honey-400)',
      color: 'var(--espresso-900)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.06em',
      padding: '10px 22px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-calendar-plus",
    style: {
      fontSize: 15
    }
  }), m ? 'Book' : 'Book now'));
}

/* ── Page title band ────────────────────────────────────────────────────── */
function SV2Title() {
  const m = useMobileV2();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: m ? '36px 24px 28px' : '52px 48px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Chic Nail & Head Spa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: m ? 44 : 64,
      lineHeight: 1,
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "Services & Pricing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: m ? 14 : 15,
      color: 'var(--text-muted)',
      margin: '0 auto',
      maxWidth: 400,
      lineHeight: 1.6
    }
  }, "All prices are starting rates. Ask us for a personalized quote \u2014 every guest is different."));
}

/* ── Pill tab bar ───────────────────────────────────────────────────────── */
function SV2Tabs({
  active,
  onChange
}) {
  const m = useMobileV2();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: m ? 64 : 80,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch',
      padding: m ? '12px 24px' : '14px 48px'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.sv2-tabs-inner::-webkit-scrollbar{display:none}`), /*#__PURE__*/React.createElement("div", {
    className: "sv2-tabs-inner",
    style: {
      display: 'flex',
      gap: 8,
      width: 'max-content',
      margin: '0 auto'
    }
  }, SV2_CATS.map(c => {
    const isActive = c.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => onChange(c.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontWeight: isActive ? 600 : 400,
        fontSize: 13,
        letterSpacing: '.04em',
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        border: isActive ? 'none' : '1px solid var(--border-subtle)',
        background: isActive ? 'var(--espresso-900)' : 'transparent',
        color: isActive ? 'var(--cream-50)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'all 180ms ease',
        whiteSpace: 'nowrap'
      },
      onMouseEnter: e => {
        if (!isActive) {
          e.currentTarget.style.color = 'var(--text-strong)';
          e.currentTarget.style.borderColor = 'var(--border-default)';
        }
      },
      onMouseLeave: e => {
        if (!isActive) {
          e.currentTarget.style.color = 'var(--text-muted)';
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
        }
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'ph-light ' + c.icon,
      style: {
        fontSize: 14
      }
    }), c.label);
  }))));
}

/* ── Footer ─────────────────────────────────────────────────────────────── */
function SV2Footer() {
  const m = useMobileV2();
  const c = window.CNHS_MENU.contact;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--espresso-900)',
      color: 'var(--cream-100)',
      padding: m ? '48px 24px 40px' : '64px 48px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: 56,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 2,
      color: 'var(--taupe-400)'
    }
  }, /*#__PURE__*/React.createElement("div", null, c.addr1, ", ", c.addr2), /*#__PURE__*/React.createElement("div", null, c.phone, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${c.email}`,
    style: {
      color: 'var(--honey-300)',
      textDecoration: 'none'
    }
  }, c.email)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, c.hours.join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: SV2_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--honey-400)',
      color: 'var(--espresso-900)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      padding: '14px 36px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-calendar-plus",
    style: {
      fontSize: 18
    }
  }), "Book your appointment")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--taupe-500, #6b5a4e)'
    }
  }, "\xA9 2026 Chic Nail & Head Spa \xB7 Plain City, Ohio"));
}

/* ── Root ───────────────────────────────────────────────────────────────── */
function ServicesV2() {
  const [ready, setReady] = React.useState(!!(window.ChicNailHeadSpaDesignSystem_843afb && window.CNHS_MENU));
  const [active, setActive] = React.useState('pedi');
  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (window.ChicNailHeadSpaDesignSystem_843afb && window.CNHS_MENU) {
        setReady(true);
        clearInterval(t);
      }
    }, 50);
    return () => clearInterval(t);
  }, [ready]);

  /* Restore last tab from localStorage */
  React.useEffect(() => {
    const saved = localStorage.getItem('cnhs-svc-tab');
    if (saved && SV2_CATS.find(c => c.key === saved)) setActive(saved);
  }, []);
  const handleTab = key => {
    setActive(key);
    localStorage.setItem('cnhs-svc-tab', key);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!ready) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(SV2Header, null), /*#__PURE__*/React.createElement(SV2Title, null), /*#__PURE__*/React.createElement(SV2Tabs, {
    active: active,
    onChange: handleTab
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(SV2Panel, {
    catKey: active
  })), /*#__PURE__*/React.createElement(SV2Footer, null));
}
Object.assign(window, {
  ServicesV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesV3.jsx
try { (() => {
/* Chic Nail & Head Spa — Services V3
   Two layout explorations:
   A) Full-page grid — all categories in one view, less scrolling
   B) Accordion — all categories visible, tap to expand  */

const SV3_DS = window.ChicNailHeadSpaDesignSystem_843afb;
const SV3_BOOK = 'https://chicnailheadspa.com/booking';
function useMobileV3(bp) {
  const q = '(max-width:' + (bp || 760) + 'px)';
  const [m, setM] = React.useState(() => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const fn = () => setM(mq.matches);
    fn();
    mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn);
    return () => mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn);
  }, [q]);
  return m;
}
const SV3_CATS = [{
  key: 'pedi',
  label: 'Pedicure',
  sub: 'From $48'
}, {
  key: 'mani',
  label: 'Manicure',
  sub: 'From $20'
}, {
  key: 'acrylic',
  label: 'Acrylic',
  sub: 'From $56'
}, {
  key: 'gelx',
  label: 'Gel-X',
  sub: 'From $60'
}, {
  key: 'dip',
  label: 'Dip Powder',
  sub: 'From $56'
}, {
  key: 'headspa',
  label: 'Head Spa',
  sub: 'From $45'
}, {
  key: 'wax',
  label: 'Waxing',
  sub: 'From $9'
}, {
  key: 'kids',
  label: 'Kids',
  sub: 'From $12'
}, {
  key: 'extras',
  label: 'Extras',
  sub: 'From $3'
}];
function SV3Tag({
  variant,
  children
}) {
  const map = {
    accent: {
      bg: 'var(--accent-tint)',
      color: 'var(--accent)'
    },
    gilt: {
      bg: 'var(--gilt-soft)',
      color: 'var(--honey-600)'
    },
    reserve: {
      bg: 'rgba(122,37,53,.08)',
      color: '#7a2535'
    }
  };
  const s = map[variant] || map.accent;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: s.bg,
      color: s.color,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, children);
}

/* ══════════════════════════════════════════════════════════════════════════
   LAYOUT A  —  Full-page two-column grid
   Compact price list, all categories simultaneously, minimal scrolling
══════════════════════════════════════════════════════════════════════════ */
function LayoutA() {
  const m = useMobileV3();
  const allCats = SV3_CATS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh',
      padding: m ? '32px 20px 80px' : '48px 48px 80px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto 40px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Services & Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: m ? 40 : 56,
      lineHeight: 1,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Everything we offer")), /*#__PURE__*/React.createElement("a", {
    href: SV3_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--espresso-900)',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      padding: '11px 24px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-calendar-plus",
    style: {
      fontSize: 15
    }
  }), " Book now")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(2, 1fr)',
      gap: m ? 28 : 36,
      alignItems: 'start'
    }
  }, allCats.map(cat => {
    const items = window.CNHS_MENU.full.filter(s => s.cat === cat.key);
    return /*#__PURE__*/React.createElement("div", {
      key: cat.key,
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        padding: m ? '24px 20px' : '28px 32px',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 18,
        paddingBottom: 14,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 26,
        color: 'var(--text-strong)'
      }
    }, cat.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '.14em',
        color: 'var(--text-muted)',
        textTransform: 'uppercase'
      }
    }, cat.sub)), items.map((item, i) => /*#__PURE__*/React.createElement("div", {
      key: item.name,
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        padding: '7px 0',
        borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        fontWeight: 400,
        color: 'var(--text-body)',
        flex: 1,
        lineHeight: 1.3
      }
    }, item.name, item.dur && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 11,
        marginLeft: 6
      }
    }, item.dur), item.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8
      }
    }, /*#__PURE__*/React.createElement(SV3Tag, {
      variant: item.tagV
    }, item.tag))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 17,
        color: 'var(--accent)',
        whiteSpace: 'nowrap'
      }
    }, item.price))));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 1200,
      margin: '32px auto 0',
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "All prices are starting rates. Call us at ", window.CNHS_MENU.contact.phone, " \u2014 we're happy to give a personalized quote."));
}

/* ══════════════════════════════════════════════════════════════════════════
   LAYOUT B  —  Accordion
   All 9 categories visible, tap/click to expand, smooth transition
══════════════════════════════════════════════════════════════════════════ */
function AccordionRow({
  cat,
  isOpen,
  onToggle
}) {
  const m = useMobileV3();
  const items = window.CNHS_MENU.full.filter(s => s.cat === cat.key);
  const contentRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, items.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: m ? '20px 0' : '22px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: m ? 28 : 34,
      color: isOpen ? 'var(--accent)' : 'var(--text-strong)',
      transition: 'color 200ms ease',
      lineHeight: 1
    }
  }, cat.label), !isOpen && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      letterSpacing: '.06em'
    }
  }, cat.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, items.length, " ", items.length === 1 ? 'service' : 'services')), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '1px solid ' + (isOpen ? 'var(--accent)' : 'var(--border-default)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'border-color 200ms ease, transform 200ms ease',
      transform: isOpen ? 'rotate(45deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-plus",
    style: {
      fontSize: 13,
      color: isOpen ? 'var(--accent)' : 'var(--text-muted)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    style: {
      height: height + 'px',
      overflow: 'hidden',
      transition: 'height 280ms cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.name,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 0',
      borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, item.name), item.dur && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, item.dur), item.tag && /*#__PURE__*/React.createElement(SV3Tag, {
    variant: item.tagV
  }, item.tag)), item.blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: '4px 0 0'
    }
  }, item.blurb)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--accent)',
      whiteSpace: 'nowrap',
      paddingTop: 1
    }
  }, item.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: SV3_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--accent)',
      textDecoration: 'none',
      letterSpacing: '.02em'
    }
  }, "Book ", cat.label.toLowerCase(), " ", /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-arrow-right",
    style: {
      fontSize: 14
    }
  }))))));
}
function LayoutB() {
  const m = useMobileV3();
  const [open, setOpen] = React.useState('pedi');
  const toggle = key => setOpen(o => o === key ? null : key);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh',
      padding: m ? '32px 20px 80px' : '52px 80px 80px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 48,
      paddingBottom: 24,
      borderBottom: '1.5px solid var(--gilt-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Services & Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: m ? 40 : 56,
      lineHeight: 1,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "What we do")), /*#__PURE__*/React.createElement("a", {
    href: SV3_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--espresso-900)',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      padding: '11px 24px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-calendar-plus",
    style: {
      fontSize: 15
    }
  }), " Book now")), SV3_CATS.map(cat => /*#__PURE__*/React.createElement(AccordionRow, {
    key: cat.key,
    cat: cat,
    isOpen: open === cat.key,
    onToggle: () => toggle(cat.key)
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      margin: '32px 0 0',
      lineHeight: 1.6
    }
  }, "All prices are starting rates. Call ", window.CNHS_MENU.contact.phone, " for a personalized quote.")));
}

/* ══════════════════════════════════════════════════════════════════════════
   LAYOUT C  —  Tab switcher (from v2)
   Pill tabs, one category at a time, scrollable on mobile
══════════════════════════════════════════════════════════════════════════ */
function LayoutC() {
  const m = useMobileV3();
  const [active, setActive] = React.useState(() => localStorage.getItem('cnhs-svc-tab') || 'pedi');
  const handleTab = key => {
    setActive(key);
    localStorage.setItem('cnhs-svc-tab', key);
  };
  const cat = SV3_CATS.find(c => c.key === active);
  const items = window.CNHS_MENU.full.filter(s => s.cat === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: m ? '12px 20px' : '14px 48px',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.sv3-tabs::-webkit-scrollbar{display:none}`), /*#__PURE__*/React.createElement("div", {
    className: "sv3-tabs",
    style: {
      display: 'flex',
      gap: 8,
      width: 'max-content',
      margin: '0 auto'
    }
  }, SV3_CATS.map(c => {
    const isActive = c.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => handleTab(c.key),
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: isActive ? 600 : 400,
        fontSize: 13,
        letterSpacing: '.04em',
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        border: isActive ? 'none' : '1px solid var(--border-subtle)',
        background: isActive ? 'var(--espresso-900)' : 'transparent',
        color: isActive ? 'var(--cream-50)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'all 180ms ease',
        whiteSpace: 'nowrap'
      }
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: m ? '40px 20px 100px' : '52px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36,
      paddingBottom: 24,
      borderBottom: '1.5px solid var(--gilt-soft)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: m ? 48 : 62,
      lineHeight: 1,
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, cat ? cat.label : active), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, cat ? cat.sub : '')), items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.name,
    style: {
      padding: '18px 0',
      borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-strong)',
      flex: 1,
      lineHeight: 1.3
    }
  }, item.name, item.dur && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 12,
      color: 'var(--text-muted)',
      marginLeft: 8
    }
  }, item.dur)), item.tag && /*#__PURE__*/React.createElement(SV3Tag, {
    variant: item.tagV
  }, item.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 500,
      color: 'var(--accent)',
      whiteSpace: 'nowrap'
    }
  }, item.price)), item.blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: '5px 0 0'
    }
  }, item.blurb))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: SV3_BOOK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--accent)',
      textDecoration: 'none'
    }
  }, "Book ", cat ? cat.label.toLowerCase() : 'this', " ", /*#__PURE__*/React.createElement("i", {
    className: "ph-light ph-arrow-right",
    style: {
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "or call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:6143899999",
    style: {
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, window.CNHS_MENU.contact.phone)))));
}

/* ══════════════════════════════════════════════════════════════════════════
   Shared header + toggle to switch between A, B and C
══════════════════════════════════════════════════════════════════════════ */
function ServicesV3() {
  const [ready, setReady] = React.useState(!!(window.ChicNailHeadSpaDesignSystem_843afb && window.CNHS_MENU));
  const [layout, setLayout] = React.useState(() => localStorage.getItem('cnhs-svc-layout') || 'B');
  const m = useMobileV3();
  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (window.ChicNailHeadSpaDesignSystem_843afb && window.CNHS_MENU) {
        setReady(true);
        clearInterval(t);
      }
    }, 50);
    return () => clearInterval(t);
  }, [ready]);
  const switchLayout = l => {
    setLayout(l);
    localStorage.setItem('cnhs-svc-layout', l);
  };
  if (!ready) return null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--espresso-900)',
      height: m ? 60 : 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: m ? '0 20px' : '0 48px',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./evolved.html",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: m ? 34 : 46
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'rgba(255,255,255,.1)',
      borderRadius: 'var(--radius-pill)',
      padding: 3
    }
  }, [['A', 'Grid'], ['B', 'Accordion'], ['C', 'Tabs']].map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => switchLayout(key),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: layout === key ? 'var(--honey-400)' : 'transparent',
      color: layout === key ? 'var(--espresso-900)' : 'rgba(255,255,255,.6)',
      transition: 'all 160ms ease'
    }
  }, label)))), layout === 'A' ? /*#__PURE__*/React.createElement(LayoutA, null) : layout === 'B' ? /*#__PURE__*/React.createElement(LayoutB, null) : /*#__PURE__*/React.createElement(LayoutC, null));
}
Object.assign(window, {
  ServicesV3
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesV3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* Shared chrome for the Chic Nail & Head Spa website kit:
   Header, Footer, and a tasteful Photo placeholder (monogram watermark on a
   warm field) standing in for the studio's real photography. */
const DS = window.ChicNailHeadSpaDesignSystem_843afb;
const {
  Button
} = DS;

/* ── Photo placeholder ──────────────────────────────────────────────────── */
function Photo({
  ratio = '4 / 3',
  radius = 'var(--radius-xl)',
  tone = 'mocha',
  label = 'Photography',
  style = {},
  children
}) {
  const bg = tone === 'espresso' ? 'var(--espresso-900)' : tone === 'cream' ? 'var(--cream-100)' : 'var(--mocha-200)';
  const mono = tone === 'espresso' ? '../../assets/monogram-cream.png' : '../../assets/monogram.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      background: bg,
      borderRadius: radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: mono,
    alt: "",
    style: {
      height: '38%',
      opacity: 0.16
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 14,
      right: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: tone === 'espresso' ? 'var(--honey-300)' : 'var(--mocha-600)',
      opacity: 0.7
    }
  }, label), children);
}

/* ── Header ─────────────────────────────────────────────────────────────── */
function Header({
  onNav,
  current = 'home'
}) {
  const links = [['ritual', 'The Ritual'], ['services', 'Services'], ['headspa', 'Head Spa'], ['gift', 'Gift Cards']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(254,247,237,0.82)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: 42
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 34
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => onNav(key === 'services' ? 'services' : 'home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.02em',
      color: current === key ? 'var(--accent)' : 'var(--text-secondary)',
      padding: '6px 0',
      transition: 'color var(--dur) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--accent)',
    onMouseLeave: e => e.currentTarget.style.color = current === key ? 'var(--accent)' : 'var(--text-secondary)'
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('booking')
  }, "Reserve a time"))));
}

/* ── Footer ─────────────────────────────────────────────────────────────── */
function Footer({
  onNav
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--honey-300)',
      marginBottom: 4
    }
  }, title), items.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 14,
      color: 'var(--cream-200)',
      lineHeight: 1.5
    }
  }, t)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--espresso-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Chic Nail & Head Spa",
    style: {
      height: 84,
      marginLeft: -6
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--taupe-400)',
      fontSize: 14,
      lineHeight: 1.65,
      maxWidth: 260,
      marginTop: 8
    }
  }, "An unhurried hour for nails and scalp. Settle in. We'll take it from here.")), col('Visit', [window.CNHS_MENU.contact.addr1, window.CNHS_MENU.contact.addr2, window.CNHS_MENU.contact.phone]), col('Hours', window.CNHS_MENU.contact.hours), col('Follow', ['Instagram', 'Journal', 'Newsletter'])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: '1px solid rgba(185,142,79,0.28)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      color: 'var(--taupe-400)',
      letterSpacing: '.02em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Chic Nail & Head Spa"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('booking');
    },
    style: {
      color: 'var(--cream-200)'
    }
  }, "Book"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cream-200)'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cream-200)'
    }
  }, "Terms")))));
}

/* Shared section heading (overline + serif title) */
function SectionHead({
  overline,
  title,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline",
    style: {
      marginBottom: 12
    }
  }, overline), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      margin: 0,
      maxWidth: 620,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, title));
}
Object.assign(window, {
  Photo,
  Header,
  Footer,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// uploads/menu-data-8df46959.js
try { (() => {
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
      google: 'https://share.google/pF2zbYmZ7iCQ1ilxV'
    }
  },
  /* Filter tabs on the Services page + app. */
  cats: [{
    value: 'all',
    label: 'All'
  }, {
    value: 'pedi',
    label: 'Pedicure'
  }, {
    value: 'mani',
    label: 'Manicure'
  }, {
    value: 'acrylic',
    label: 'Acrylic'
  }, {
    value: 'gelx',
    label: 'Gel - X'
  }, {
    value: 'dip',
    label: 'Dip Powder'
  }, {
    value: 'headspa',
    label: 'Head Spa'
  }, {
    value: 'wax',
    label: 'Waxing'
  }, {
    value: 'kids',
    label: 'Kids'
  }, {
    value: 'extras',
    label: 'Extras'
  }],
  /* Full menu — sourced directly from the printed fold-out. */
  full: [
  // ── Pedicure ──────────────────────────────────────────────────────────
  {
    cat: 'pedi',
    name: 'Chic Classic',
    price: '$48',
    blurb: 'Warm soak, tidy trim, light exfoliation & lotion.'
  }, {
    cat: 'pedi',
    name: 'Chic Relax',
    price: '$60',
    blurb: 'The Classic with callus care, a longer massage & a hot-towel wrap.'
  }, {
    cat: 'pedi',
    name: 'Chic Ritual',
    price: '$65',
    blurb: 'Sugar scrub, hydrating mask & rich cream for soft, glowing skin.',
    tag: 'Popular',
    tagV: 'accent'
  }, {
    cat: 'pedi',
    name: 'Chic Luxe',
    price: '$80',
    blurb: 'The Ritual sealed with a warm paraffin dip — moisture that lingers.'
  }, {
    cat: 'pedi',
    name: 'Chic Signature',
    price: '$90',
    blurb: 'Herbal neck wrap & hot-stone massage — our most indulgent hour.',
    tag: 'VIP',
    tagV: 'reserve'
  },
  // ── Manicure ──────────────────────────────────────────────────────────
  {
    cat: 'mani',
    name: 'Chic Manicure',
    price: '$30',
    blurb: 'Warm soak, careful shaping, cuticle care & a soothing hand massage before color.'
  }, {
    cat: 'mani',
    name: 'Chic Gel',
    price: '$46',
    blurb: 'Long-wear gel color with a glossy finish, up to three weeks.',
    tag: 'Most loved',
    tagV: 'gilt'
  }, {
    cat: 'mani',
    name: 'Polish Change',
    price: '$20',
    blurb: 'A fresh coat in the shade of your choosing — hands or toes.'
  }, {
    cat: 'mani',
    name: 'Gel Change',
    price: '$40',
    blurb: 'Old gel gently soaked away, replaced with a glassy new color.'
  },
  // ── Acrylic ──────────────────────────────────────────────────────
  {
    cat: 'acrylic',
    name: 'Acrylic Full Set',
    price: '$66+'
  }, {
    cat: 'acrylic',
    name: 'Acrylic Fill',
    price: '$56+'
  }, {
    cat: 'acrylic',
    name: 'Ombré Full Set',
    price: '$72+'
  }, {
    cat: 'acrylic',
    name: 'Ombré Fill',
    price: '$67+'
  }, {
    cat: 'acrylic',
    name: 'Pink & White Full Set',
    price: '$76+'
  }, {
    cat: 'acrylic',
    name: 'Pink Only',
    price: '$56+'
  },
  // ── Gel - X ──────────────────────────────────────────────────────
  {
    cat: 'gelx',
    name: 'Builder Gel Full Set',
    price: '$66+'
  }, {
    cat: 'gelx',
    name: 'Builder Gel Fill',
    price: '$60+'
  }, {
    cat: 'gelx',
    name: 'Tap Gel Full Set',
    price: '$70+'
  }, {
    cat: 'gelx',
    name: 'Tap Gel Fill',
    price: '$60+'
  }, {
    cat: 'gelx',
    name: 'Gel X Full Set',
    price: '$66+'
  }, {
    cat: 'gelx',
    name: 'Gel X Fill',
    price: '$60+'
  },
  // ── Dip Powder ──────────────────────────────────────────────────────
  {
    cat: 'dip',
    name: 'Dip Powder',
    price: '$56'
  }, {
    cat: 'dip',
    name: 'Dip Full Set / With Tips',
    price: '$66'
  }, {
    cat: 'dip',
    name: 'Dip Pink & White',
    price: '$66'
  },
  // ── Head Spa ──────────────────────────────────────────────────────────
  {
    cat: 'headspa',
    name: 'Scalp Massage',
    dur: '30 min',
    price: '$45',
    blurb: 'Pressure-point scalp & shoulder massage that melts away tension.'
  }, {
    cat: 'headspa',
    name: 'Scalp Treatment',
    dur: '45 min',
    price: '$65',
    blurb: 'Warm botanical oils nourish a dry, tired scalp with a deep massage.'
  }, {
    cat: 'headspa',
    name: 'Scalp Detox',
    dur: '50 min',
    price: '$75',
    blurb: 'A clarifying cleanse that lifts buildup for healthy growth.'
  }, {
    cat: 'headspa',
    name: 'Signature Head Spa',
    dur: '60 min',
    price: '$95',
    blurb: 'Scrub, mask, warm steam & a long, drifting massage.',
    tag: 'Most loved',
    tagV: 'gilt'
  },
  // ── Waxing ────────────────────────────────────────────────────────────
  {
    cat: 'wax',
    name: 'Eyebrows',
    price: '$17+'
  }, {
    cat: 'wax',
    name: 'Eyebrow Tinting',
    price: '$25+'
  }, {
    cat: 'wax',
    name: 'Eyebrow Wax & Tint Combo',
    price: '$40+'
  }, {
    cat: 'wax',
    name: 'Lip',
    price: '$9'
  }, {
    cat: 'wax',
    name: 'Chin',
    price: '$10+'
  }, {
    cat: 'wax',
    name: 'Sideburn',
    price: '$15+'
  }, {
    cat: 'wax',
    name: 'Full Face',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Under Arms',
    price: '$35+'
  }, {
    cat: 'wax',
    name: 'Half Arms',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Full Arms',
    price: '$65+'
  }, {
    cat: 'wax',
    name: 'Lower Legs',
    price: '$50+'
  }, {
    cat: 'wax',
    name: 'Upper Legs',
    price: '$55+'
  }, {
    cat: 'wax',
    name: 'Full Legs',
    price: '$85+'
  }, {
    cat: 'wax',
    name: 'Back / Chest',
    price: '$50+'
  }, {
    cat: 'wax',
    name: 'Bikini',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Brazilian',
    price: '$75+'
  },
  // ── Kids (Ages 10 & Under) ────────────────────────────────────────────
  {
    cat: 'kids',
    name: 'Kid Mani',
    price: '$20'
  }, {
    cat: 'kids',
    name: 'Kid Mani Gel',
    price: '$35'
  }, {
    cat: 'kids',
    name: 'Kid Polish Change · Hands',
    price: '$12'
  }, {
    cat: 'kids',
    name: 'Kid Pedi',
    price: '$30'
  }, {
    cat: 'kids',
    name: 'Kid Pedi Gel',
    price: '$45'
  }, {
    cat: 'kids',
    name: 'Kid Polish Change · Toes',
    price: '$14'
  },
  // ── Extras ───────────────────────────────────────────────────────────
  {
    cat: 'extras',
    name: 'Paraffin',
    price: '$14'
  }, {
    cat: 'extras',
    name: 'Nail Art',
    price: '$7+ /nail'
  }, {
    cat: 'extras',
    name: 'Cat Eye',
    price: '$7+'
  }, {
    cat: 'extras',
    name: 'Chrome',
    price: '$15'
  }, {
    cat: 'extras',
    name: 'French',
    price: '$7'
  }, {
    cat: 'extras',
    name: 'Design French',
    price: '$10+'
  }, {
    cat: 'extras',
    name: 'Special Shape',
    price: '$7'
  }, {
    cat: 'extras',
    name: 'Nail Repair',
    price: '$8+'
  }, {
    cat: 'extras',
    name: 'Gel Removal',
    price: '$17'
  }, {
    cat: 'extras',
    name: 'Dip Removal',
    price: '$17'
  }, {
    cat: 'extras',
    name: 'Acrylic Removal',
    price: '$25'
  }, {
    cat: 'extras',
    name: 'Matte Top Coat',
    price: '$3'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/menu-data-8df46959.js", error: String((e && e.message) || e) }); }

// uploads/menu-data.js
try { (() => {
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
      google: 'https://share.google/pF2zbYmZ7iCQ1ilxV'
    }
  },
  /* Filter tabs on the Services page + app. */
  cats: [{
    value: 'all',
    label: 'All'
  }, {
    value: 'pedi',
    label: 'Pedicure'
  }, {
    value: 'mani',
    label: 'Manicure'
  }, {
    value: 'enhance',
    label: 'Enhancements'
  }, {
    value: 'headspa',
    label: 'Head Spa'
  }, {
    value: 'wax',
    label: 'Waxing'
  }, {
    value: 'kids',
    label: 'Kids'
  }, {
    value: 'addons',
    label: 'Add-ons'
  }],
  /* Full menu — sourced directly from the printed fold-out. */
  full: [
  // ── Pedicure ──────────────────────────────────────────────────────────
  {
    cat: 'pedi',
    name: 'Chic Classic',
    price: '$48',
    blurb: 'Warm soak, tidy trim, light exfoliation & lotion.'
  }, {
    cat: 'pedi',
    name: 'Chic Relax',
    price: '$60',
    blurb: 'The Classic with callus care, a longer massage & a hot-towel wrap.'
  }, {
    cat: 'pedi',
    name: 'Chic Ritual',
    price: '$65',
    blurb: 'Sugar scrub, hydrating mask & rich cream for soft, glowing skin.',
    tag: 'Popular',
    tagV: 'accent'
  }, {
    cat: 'pedi',
    name: 'Chic Luxe',
    price: '$80',
    blurb: 'The Ritual sealed with a warm paraffin dip — moisture that lingers.'
  }, {
    cat: 'pedi',
    name: 'Chic Signature',
    price: '$90',
    blurb: 'Herbal neck wrap & hot-stone massage — our most indulgent hour.',
    tag: 'VIP',
    tagV: 'reserve'
  },
  // ── Manicure ──────────────────────────────────────────────────────────
  {
    cat: 'mani',
    name: 'Chic Manicure',
    price: '$30',
    blurb: 'Warm soak, careful shaping, cuticle care & a soothing hand massage before color.'
  }, {
    cat: 'mani',
    name: 'Chic Gel',
    price: '$46',
    blurb: 'Long-wear gel color with a glossy finish, up to three weeks.',
    tag: 'Most loved',
    tagV: 'gilt'
  }, {
    cat: 'mani',
    name: 'Polish Change',
    price: '$20',
    blurb: 'A fresh coat in the shade of your choosing — hands or toes.'
  }, {
    cat: 'mani',
    name: 'Gel Change',
    price: '$40',
    blurb: 'Old gel gently soaked away, replaced with a glassy new color.'
  },
  // ── Enhancements ──────────────────────────────────────────────────────
  {
    cat: 'enhance',
    name: 'Acrylic Full Set',
    price: '$66+'
  }, {
    cat: 'enhance',
    name: 'Acrylic Fill',
    price: '$56+'
  }, {
    cat: 'enhance',
    name: 'Ombré Full Set',
    price: '$72+'
  }, {
    cat: 'enhance',
    name: 'Ombré Fill',
    price: '$67+'
  }, {
    cat: 'enhance',
    name: 'Pink & White Full Set',
    price: '$76+'
  }, {
    cat: 'enhance',
    name: 'Pink Only',
    price: '$56+'
  }, {
    cat: 'enhance',
    name: 'Builder Gel Full Set',
    price: '$66+'
  }, {
    cat: 'enhance',
    name: 'Builder Gel Fill',
    price: '$60+'
  }, {
    cat: 'enhance',
    name: 'Tap Gel Full Set',
    price: '$70+'
  }, {
    cat: 'enhance',
    name: 'Tap Gel Fill',
    price: '$60+'
  }, {
    cat: 'enhance',
    name: 'Gel X Full Set',
    price: '$66+'
  }, {
    cat: 'enhance',
    name: 'Gel X Fill',
    price: '$60+'
  }, {
    cat: 'enhance',
    name: 'Dip Powder',
    price: '$56'
  }, {
    cat: 'enhance',
    name: 'Dip Full Set / With Tips',
    price: '$66'
  }, {
    cat: 'enhance',
    name: 'Dip Pink & White',
    price: '$66'
  },
  // ── Head Spa ──────────────────────────────────────────────────────────
  {
    cat: 'headspa',
    name: 'Scalp Massage',
    dur: '30 min',
    price: '$45',
    blurb: 'Pressure-point scalp & shoulder massage that melts away tension.'
  }, {
    cat: 'headspa',
    name: 'Scalp Treatment',
    dur: '45 min',
    price: '$65',
    blurb: 'Warm botanical oils nourish a dry, tired scalp with a deep massage.'
  }, {
    cat: 'headspa',
    name: 'Scalp Detox',
    dur: '50 min',
    price: '$75',
    blurb: 'A clarifying cleanse that lifts buildup for healthy growth.'
  }, {
    cat: 'headspa',
    name: 'Signature Head Spa',
    dur: '60 min',
    price: '$95',
    blurb: 'Scrub, mask, warm steam & a long, drifting massage.',
    tag: 'Most loved',
    tagV: 'gilt'
  },
  // ── Waxing ────────────────────────────────────────────────────────────
  {
    cat: 'wax',
    name: 'Eyebrows',
    price: '$17+'
  }, {
    cat: 'wax',
    name: 'Eyebrow Tinting',
    price: '$25+'
  }, {
    cat: 'wax',
    name: 'Eyebrow Wax & Tint Combo',
    price: '$40+'
  }, {
    cat: 'wax',
    name: 'Lip',
    price: '$9'
  }, {
    cat: 'wax',
    name: 'Chin',
    price: '$10+'
  }, {
    cat: 'wax',
    name: 'Sideburn',
    price: '$15+'
  }, {
    cat: 'wax',
    name: 'Full Face',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Under Arms',
    price: '$35+'
  }, {
    cat: 'wax',
    name: 'Half Arms',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Full Arms',
    price: '$65+'
  }, {
    cat: 'wax',
    name: 'Lower Legs',
    price: '$50+'
  }, {
    cat: 'wax',
    name: 'Upper Legs',
    price: '$55+'
  }, {
    cat: 'wax',
    name: 'Full Legs',
    price: '$85+'
  }, {
    cat: 'wax',
    name: 'Back / Chest',
    price: '$50+'
  }, {
    cat: 'wax',
    name: 'Bikini',
    price: '$45+'
  }, {
    cat: 'wax',
    name: 'Brazilian',
    price: '$75+'
  },
  // ── Kids (Ages 10 & Under) ────────────────────────────────────────────
  {
    cat: 'kids',
    name: 'Kid Mani',
    price: '$20'
  }, {
    cat: 'kids',
    name: 'Kid Mani Gel',
    price: '$35'
  }, {
    cat: 'kids',
    name: 'Kid Polish Change · Hands',
    price: '$12'
  }, {
    cat: 'kids',
    name: 'Kid Pedi',
    price: '$30'
  }, {
    cat: 'kids',
    name: 'Kid Pedi Gel',
    price: '$45'
  }, {
    cat: 'kids',
    name: 'Kid Polish Change · Toes',
    price: '$14'
  },
  // ── Add-Ons ───────────────────────────────────────────────────────────
  {
    cat: 'addons',
    name: 'Paraffin',
    price: '$14'
  }, {
    cat: 'addons',
    name: 'Nail Art',
    price: '$7+ /nail'
  }, {
    cat: 'addons',
    name: 'Cat Eye',
    price: '$7+'
  }, {
    cat: 'addons',
    name: 'Chrome',
    price: '$15'
  }, {
    cat: 'addons',
    name: 'French',
    price: '$7'
  }, {
    cat: 'addons',
    name: 'Design French',
    price: '$10+'
  }, {
    cat: 'addons',
    name: 'Special Shape',
    price: '$7'
  }, {
    cat: 'addons',
    name: 'Nail Repair',
    price: '$8+'
  }, {
    cat: 'addons',
    name: 'Gel Removal',
    price: '$17'
  }, {
    cat: 'addons',
    name: 'Dip Removal',
    price: '$17'
  }, {
    cat: 'addons',
    name: 'Acrylic Removal',
    price: '$25'
  }, {
    cat: 'addons',
    name: 'Matte Top Coat',
    price: '$3'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/menu-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

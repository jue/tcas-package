import { g$ as $, h0 as D, h1 as o, h2 as A, h3 as C, h4 as R, h5 as k } from "./index-j1oaLRcp.js";
import "vue";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
var h;
(function(t) {
  t.green = "checkCircle", t.yellow = "exclamationMarkTriangle", t.red = "exclamationMarkTriangle", t.blue = "lightbulb";
})(h || (h = {}));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function L(t) {
  const e = "dir", i = `[${e}]`, n = F(t, i);
  return n ? n.getAttribute(e) : "ltr";
}
function B(t) {
  return t.getRootNode();
}
function P(t) {
  return t.host || null;
}
function F(t, e) {
  function i(n) {
    return n ? n.closest(e) || i(P(B(n))) : null;
  }
  return i(t);
}
const u = ":not([slot])";
function M(t, e, i) {
  e && !Array.isArray(e) && typeof e != "string" && (i = e, e = null);
  const n = e ? Array.isArray(e) ? e.map((a) => `[slot="${a}"]`).join(",") : `[slot="${e}"]` : u;
  return i != null && i.all ? T(t, n, i) : H(t, n, i);
}
function z(t, e) {
  return t ? Array.from(t.children || []).filter((i) => i == null ? void 0 : i.matches(e)) : [];
}
function T(t, e, i) {
  let n = e === u ? z(t, u) : Array.from(t.querySelectorAll(e));
  n = i && i.direct === !1 ? n : n.filter((c) => c.parentElement === t), n = i != null && i.matches ? n.filter((c) => c == null ? void 0 : c.matches(i.matches)) : n;
  const a = i == null ? void 0 : i.selector;
  return a ? n.map((c) => Array.from(c.querySelectorAll(a))).reduce((c, s) => [...c, ...s], []).filter((c) => !!c) : n;
}
function H(t, e, i) {
  let n = e === u ? z(t, u)[0] || null : t.querySelector(e);
  n = i && i.direct === !1 || (n == null ? void 0 : n.parentElement) === t ? n : null, n = i != null && i.matches ? n != null && n.matches(i.matches) ? n : null : n;
  const a = i == null ? void 0 : i.selector;
  return a ? n == null ? void 0 : n.querySelector(a) : n;
}
function y(t, e, i) {
  if (typeof e == "string" && e !== "")
    return e;
  if (e === "")
    return t[i];
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function E(t, e, i) {
  const n = U(t);
  return new n(e, i);
}
function U(t) {
  return t === "intersection" ? window.IntersectionObserver : t === "mutation" ? window.MutationObserver : window.ResizeObserver;
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const x = /* @__PURE__ */ new Set();
let l;
const _ = { childList: !0 };
function j(t) {
  l || (l = E("mutation", S)), l.observe(t.el, _);
}
function N(t) {
  x.delete(t.el), S(l.takeRecords()), l.disconnect();
  for (const [e] of x.entries())
    l.observe(e, _);
}
function S(t) {
  t.forEach(({ target: e }) => {
    $(e);
  });
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const X = {
  icon: "icon",
  flipRtl: "flip-rtl"
}, b = {}, w = {}, O = {
  s: 16,
  m: 24,
  l: 32
};
async function W({ icon: t, scale: e }) {
  const i = O[e], n = G(t), a = n.charAt(n.length - 1) === "F", s = `${a ? n.substring(0, n.length - 1) : n}${i}${a ? "F" : ""}`;
  if (b[s])
    return b[s];
  w[s] || (w[s] = fetch(R(`./assets/icon/${s}.json`)).then((g) => g.json()).catch(() => (console.error(`"${s}" is not a valid calcite-ui-icon name`), "")));
  const r = await w[s];
  return b[s] = r, r;
}
function G(t) {
  const e = !isNaN(Number(t.charAt(0))), i = t.split("-");
  return i.length === 1 ? e ? `i${t}` : t : i.map((n, a) => a === 0 ? e ? `i${n.toUpperCase()}` : n : n.charAt(0).toUpperCase() + n.slice(1)).join("");
}
const J = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";
let v = class extends D {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.icon = null, this.flipRtl = !1, this.scale = "m", this.visible = !1;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = !0, this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    var t;
    (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el: t, flipRtl: e, pathData: i, scale: n, textLabel: a } = this, c = L(t), s = O[n], r = !!a, g = [].concat(i || "");
    return o(A, { "aria-hidden": (!r).toString(), "aria-label": r ? a : null, role: r ? "img" : null }, o("svg", { class: {
      [X.flipRtl]: c === "rtl" && e,
      svg: !0
    }, fill: "currentColor", height: "100%", viewBox: `0 0 ${s} ${s}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, g.map((m) => typeof m == "string" ? o("path", { d: m }) : o("path", { d: m.d, opacity: "opacity" in m ? m.opacity : 1 }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon: t, scale: e, visible: i } = this;
    !t || !i || (this.pathData = await W({ icon: t, scale: e }));
  }
  waitUntilVisible(t) {
    if (this.intersectionObserver = E("intersection", (e) => {
      e.forEach((i) => {
        i.isIntersecting && (this.intersectionObserver.disconnect(), this.intersectionObserver = null, t());
      });
    }, { rootMargin: "50px" }), !this.intersectionObserver) {
      t();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      icon: ["loadIconPathData"],
      scale: ["loadIconPathData"]
    };
  }
  static get style() {
    return J;
  }
};
v = /* @__PURE__ */ C(v, [1, "calcite-icon", {
  icon: [513],
  flipRtl: [516, "flip-rtl"],
  scale: [513],
  textLabel: [1, "text-label"],
  pathData: [32],
  visible: [32]
}]);
function q() {
  if (typeof customElements > "u")
    return;
  ["calcite-icon"].forEach((e) => {
    switch (e) {
      case "calcite-icon":
        customElements.get(e) || customElements.define(e, v);
        break;
    }
  });
}
q();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const K = {
  close: "Close"
}, d = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
}, f = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
}, Q = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-left:auto;margin-right:auto;display:none;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{pointer-events:none;margin-top:0px;margin-bottom:0px;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;width:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;max-height:0;text-align:start;-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing);-webkit-border-start:0px solid;border-inline-start:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{pointer-events:auto;display:-ms-flexbox;display:flex;max-height:100%;-ms-flex-align:center;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:var(--calcite-notice-spacing-token-small);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-direction:column;flex-direction:column;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-notice-spacing-token-large);padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto}.notice-close{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}";
let p = class extends D {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteNoticeClose = k(this, "calciteNoticeClose", 7), this.calciteNoticeOpen = k(this, "calciteNoticeOpen", 7), this.active = !1, this.color = "blue", this.dismissible = !1, this.intlClose = K.close, this.scale = "m", this.width = "auto", this.close = () => {
      this.active = !1, this.calciteNoticeClose.emit();
    };
  }
  updateRequestedIcon() {
    this.requestedIcon = y(h, this.icon, this.color);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    j(this);
  }
  disconnectedCallback() {
    N(this);
  }
  componentWillLoad() {
    this.requestedIcon = y(h, this.icon, this.color);
  }
  render() {
    const { el: t } = this, e = o("button", { "aria-label": this.intlClose, class: f.close, onClick: this.close, ref: (n) => this.closeButton = n }, o("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })), i = M(t, d.actionsEnd);
    return o("div", { class: f.container }, this.requestedIcon ? o("div", { class: f.icon }, o("calcite-icon", { icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" })) : null, o("div", { class: f.content }, o("slot", { name: d.title }), o("slot", { name: d.message }), o("slot", { name: d.link })), i ? o("div", { class: f.actionsEnd }, o("slot", { name: d.actionsEnd })) : null, this.dismissible ? e : null);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    const t = this.el.querySelector("calcite-link");
    !this.closeButton && !t || (t ? t.setFocus() : this.closeButton && this.closeButton.focus());
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      icon: ["updateRequestedIcon"],
      color: ["updateRequestedIcon"]
    };
  }
  static get style() {
    return Q;
  }
};
p = /* @__PURE__ */ C(p, [1, "calcite-notice", {
  active: [1540],
  color: [513],
  dismissible: [516],
  icon: [520],
  intlClose: [1, "intl-close"],
  scale: [513],
  width: [513],
  setFocus: [64]
}]);
function I() {
  if (typeof customElements > "u")
    return;
  ["calcite-notice", "calcite-icon"].forEach((e) => {
    switch (e) {
      case "calcite-notice":
        customElements.get(e) || customElements.define(e, p);
        break;
      case "calcite-icon":
        customElements.get(e) || q();
        break;
    }
  });
}
I();
const V = p, tt = I;
export {
  V as CalciteNotice,
  tt as defineCustomElement
};

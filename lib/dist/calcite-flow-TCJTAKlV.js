import { da as h, db as u, dd as m } from "./index-B7TsCcH6.js";
import { c as p } from "./observers-9seiNSXN.js";
import { c as g, s as w, a as b } from "./loadable-Dx1OeX96.js";
import "vue";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const r = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
}, v = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}", f = /* @__PURE__ */ h(class extends u {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.itemMutationObserver = p("mutation", () => this.updateFlowProps()), this.getFlowDirection = (t, e) => {
      const n = t > 1;
      return !(t && e > 1) && !n ? null : e < t ? "retreating" : "advancing";
    }, this.updateFlowProps = () => {
      const { customItemSelectors: t, el: e, items: n } = this, o = Array.from(e.querySelectorAll(`calcite-flow-item${t ? `,${t}` : ""}`)).filter((i) => i.closest("calcite-flow") === e), c = n.length, s = o.length, a = o[s - 1], l = o[s - 2];
      if (s && a && o.forEach((i) => {
        i.showBackButton = i === a && s > 1, i.hidden = i !== a;
      }), l && (l.menuOpen = !1), this.items = o, c !== s) {
        const i = this.getFlowDirection(c, s);
        this.itemCount = s, this.flowDirection = i;
      }
    }, this.customItemSelectors = void 0, this.flowDirection = null, this.itemCount = 0, this.items = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-flow-item`.
   */
  async back() {
    const { items: t } = this, e = t[t.length - 1];
    if (!e)
      return;
    const n = e.beforeBack ? e.beforeBack : () => Promise.resolve();
    try {
      await n.call(e);
    } catch {
      return;
    }
    return e.remove(), e;
  }
  /**
   * Sets focus on the component.
   */
  async setFocus() {
    await g(this);
    const { items: t } = this, e = t[t.length - 1];
    return e == null ? void 0 : e.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var t;
    (t = this.itemMutationObserver) == null || t.observe(this.el, { childList: !0, subtree: !0 }), this.updateFlowProps();
  }
  async componentWillLoad() {
    w(this);
  }
  componentDidLoad() {
    b(this);
  }
  disconnectedCallback() {
    var t;
    (t = this.itemMutationObserver) == null || t.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  async handleItemBackClick(t) {
    if (!t.defaultPrevented)
      return await this.back(), this.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection: t } = this, e = {
      [r.frame]: !0,
      [r.frameAdvancing]: t === "advancing",
      [r.frameRetreating]: t === "retreating"
    };
    return m("div", { class: e }, m("slot", null));
  }
  get el() {
    return this;
  }
  static get style() {
    return v;
  }
}, [1, "calcite-flow", {
  customItemSelectors: [1, "custom-item-selectors"],
  flowDirection: [32],
  itemCount: [32],
  items: [32],
  back: [64],
  setFocus: [64]
}, [[0, "calciteFlowItemBack", "handleItemBackClick"]]]);
function d() {
  if (typeof customElements > "u")
    return;
  ["calcite-flow"].forEach((e) => {
    switch (e) {
      case "calcite-flow":
        customElements.get(e) || customElements.define(e, f);
        break;
    }
  });
}
d();
const D = f, F = d;
export {
  D as CalciteFlow,
  F as defineCustomElement
};
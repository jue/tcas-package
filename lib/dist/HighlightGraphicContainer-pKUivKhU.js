import { a as s, c as a } from "./index-h53IWweP.js";
import { T as o } from "./color-4NJ3Arr4.js";
import { n as d } from "./BaseGraphicContainer-GynWKbdY.js";
import { _ as h } from "./enums-Vyj7xNgv.js";
let t = class extends d {
  doRender(e) {
    e.drawPhase === o.HIGHLIGHT && super.doRender(e);
  }
  renderChildren(e) {
    if (this.attributeView.update(), !this.children.some((n) => n.hasData))
      return;
    this.attributeView.bindTextures(e.context), super.renderChildren(e);
    const { painter: i } = e, r = i.effects.highlight;
    r.bind(e), e.context.setColorMask(!0, !0, !0, !0), e.context.clear(h.COLOR_BUFFER_BIT), this._renderChildren(e, r.defines.concat(["highlightAll"])), r.draw(e), r.unbind();
  }
};
t = s([a("geoscene.views.2d.layers.support.HighlightGraphicContainer")], t);
const u = t;
export {
  u as n
};

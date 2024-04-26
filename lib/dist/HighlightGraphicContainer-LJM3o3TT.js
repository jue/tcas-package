import { e as s, a as o } from "./index-Ek1MTSEY.js";
import { I as h } from "./Utils-1SmxxQP6.js";
import { t as a } from "./BaseGraphicContainer-UV2N_B2B.js";
import { _ as d } from "./enums-n72NRQQZ.js";
let i = class extends a {
  renderChildren(e) {
    if (e.drawPhase !== h.HIGHLIGHT || (this.attributeView.bindTextures(e.context), !this.children.some((r) => r.hasData)))
      return;
    super.renderChildren(e);
    const { painter: n } = e, t = n.effects.highlight;
    t.bind(e), e.context.setColorMask(!0, !0, !0, !0), e.context.clear(d.COLOR_BUFFER_BIT), this._renderChildren(e, t.defines.concat(["highlightAll"])), t.draw(e), t.unbind();
  }
};
i = s([o("geoscene.views.2d.layers.support.HighlightGraphicContainer")], i);
const m = i;
export {
  m as n
};

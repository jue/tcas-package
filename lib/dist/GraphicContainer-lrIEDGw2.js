import { I as t } from "./Utils-1SmxxQP6.js";
import { t as h } from "./BaseGraphicContainer-UV2N_B2B.js";
class a extends h {
  renderChildren(e) {
    this.attributeView.bindTextures(e.context, !1), this.children.some((r) => r.hasData) && (super.renderChildren(e), e.drawPhase === t.MAP && this._renderChildren(e), this.hasHighlight() && e.drawPhase === t.HIGHLIGHT && this._renderHighlight(e), this._boundsRenderer && this._boundsRenderer.doRender(e));
  }
  _renderHighlight(e) {
    const { painter: r } = e, i = r.effects.highlight;
    i.bind(e), this._renderChildren(e, i.defines), i.draw(e), i.unbind();
  }
}
export {
  a as i
};

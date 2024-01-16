import { j as p, m as o, V as a, R as g, a as s, b as m, c as l } from "./index-h53IWweP.js";
import { f as c, d as n } from "./LayerView-Ll--tTKd.js";
import { i as d } from "./GraphicContainer-L-hXPncv.js";
import { o as u } from "./GraphicsView2D-9VrUqx4w.js";
import "vue";
import "./Container-wINu8WJB.js";
import "./definitions-Ikx6Iti_.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-9jggcs3t.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./BaseGraphicContainer-GynWKbdY.js";
import "./FeatureContainer-cnT1vi-B.js";
import "./AttributeStoreView-XrRsw0gL.js";
import "./TiledDisplayObject-k5lpE5yM.js";
import "./WGLContainer-5YwL0fPU.js";
import "./VertexArrayObject-xRQjh19m.js";
import "./ProgramTemplate-WGFc3YF6.js";
import "./GeometryUtils-qBcr22nw.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-LPvm_IXh.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-ESIGpRYL.js";
import "./ExpandedCIM-3LZTL41U.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-m9Kp97Du.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-r2uAqrNR.js";
import "./floatRGBA-RF2HKI4x.js";
import "./util-ykcsKwVm.js";
import "./TileContainer--axx6PsF.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./utils-QyFvT44r.js";
import "./normalizeUtilsSync-cNupCt2o.js";
import "./projectionSupport-p_kmYZqX.js";
import "./json-uwIaZKlZ.js";
import "./Matcher-EB2LXM-b.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-FFqkDx1D.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-IxoHGiVZ.js";
import "./ComputedAttributeStorage-X4eusieF.js";
import "./arcadeTimeUtils-u_1BvLqu.js";
import "./executionError-EEhTiqtD.js";
const w = { remove() {
}, pause() {
}, resume() {
} };
let e = class extends c(n) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  attach() {
    this.graphicsView = new u({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new d(this.view.featuresTilingScheme) }), this._updateHighlight(), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler));
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = p(this.graphicsView);
  }
  async hitTest(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i).map((t) => ({ type: "graphic", graphic: t, mapPoint: i, layer: this.layer })) : null;
  }
  async fetchPopupFeatures(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i).filter((t) => !!t.popupTemplate) : [];
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i) {
    let t;
    typeof i == "number" ? t = [i] : i instanceof o ? t = [i.uid] : Array.isArray(i) && i.length > 0 ? t = typeof i[0] == "number" ? i : i.map((h) => h && h.uid) : a.isCollection(i) && i.length > 0 && (t = i.map((h) => h && h.uid).toArray());
    const r = t == null ? void 0 : t.filter(g);
    return r != null && r.length ? (this._addHighlight(r), { remove: () => this._removeHighlight(r) }) : w;
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t);
        this._highlightIds.set(t, r + 1);
      } else
        this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t) - 1;
        r === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, r);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    var i;
    (i = this.graphicsView) == null || i.setHighlight(Array.from(this._highlightIds.keys()));
  }
};
s([m()], e.prototype, "graphicsView", void 0), e = s([l("geoscene.views.2d.layers.GraphicsLayerView2D")], e);
const di = e;
export {
  di as default
};

import { j as p, m as o, V as a, R as g, a as s, b as m, c as l } from "./index-B7TsCcH6.js";
import { f as c, d as n } from "./LayerView-C6bBL_rq.js";
import { i as d } from "./GraphicContainer-bSPPKI0e.js";
import { o as u } from "./GraphicsView2D-Mk0LDR9N.js";
import "vue";
import "./Container-ul_EuzrF.js";
import "./definitions-Co8CrS3w.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-v5WxIbZy.js";
import "./color-Xkczoxbf.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./BaseGraphicContainer-IJHgFc9L.js";
import "./FeatureContainer-1uun9v5E.js";
import "./AttributeStoreView-gMBKUgth.js";
import "./TiledDisplayObject-952ryiS7.js";
import "./WGLContainer-vjbZun5V.js";
import "./VertexArrayObject-_p3La6MY.js";
import "./ProgramTemplate-aPyLVtfI.js";
import "./GeometryUtils-wM6A7upA.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-azOcA8wo.js";
import "./featureConversionUtils-oKi2Ei-6.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-w0od9lEd.js";
import "./ExpandedCIM-sWOoIMVV.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-99Msuqlm.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-nKmgNZQ1.js";
import "./floatRGBA-Wp7e9WKm.js";
import "./util-Q6nUdqQ4.js";
import "./TileContainer-v6Rn1fM6.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils-Le73uFr2.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./utils-iTYrz_MZ.js";
import "./normalizeUtilsSync-RaRpR1hQ.js";
import "./projectionSupport-P-Yk17hX.js";
import "./json-uwIaZKlZ.js";
import "./Matcher-oZu2Jhpq.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-3DHEGHOy.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-ebbYGtpz.js";
import "./ComputedAttributeStorage-O2RWVkE4.js";
import "./arcadeTimeUtils-49F1RqD9.js";
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

import { m as u, V as f, R as w, l as a, f as p, w as y, a as _, c as V } from "./index-h53IWweP.js";
import { h as v } from "./Container-wINu8WJB.js";
import { r as C } from "./GroupContainer-Nl5R88O6.js";
import { f as H, d as b } from "./LayerView-Ll--tTKd.js";
import { i as c } from "./GraphicContainer-L-hXPncv.js";
import { o as g } from "./GraphicsView2D-9VrUqx4w.js";
import "vue";
import "./definitions-Ikx6Iti_.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-9jggcs3t.js";
import "./WGLContainer-5YwL0fPU.js";
import "./VertexArrayObject-xRQjh19m.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-WGFc3YF6.js";
import "./GeometryUtils-qBcr22nw.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-LPvm_IXh.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./BaseGraphicContainer-GynWKbdY.js";
import "./FeatureContainer-cnT1vi-B.js";
import "./AttributeStoreView-XrRsw0gL.js";
import "./TiledDisplayObject-k5lpE5yM.js";
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
const m = "sublayers", n = "layerView", T = Object.freeze({ remove() {
}, pause() {
}, resume() {
} });
let l = class extends H(b) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map(), this.container = new C();
  }
  async fetchPopupFeatures(i) {
    return Array.from(this.graphicsViews(), (t) => t.hitTest(i).filter((e) => !!e.popupTemplate)).flat();
  }
  *graphicsViews() {
    this._graphicsViewsFeatureCollectionMap == null ? this._graphicsViews == null ? yield* [] : yield* this._graphicsViews : yield* this._graphicsViewsFeatureCollectionMap.keys();
  }
  async hitTest(i, t) {
    return Array.from(this.graphicsViews(), (e) => {
      const s = e.hitTest(i);
      if (this._graphicsViewsFeatureCollectionMap != null) {
        const h = this._graphicsViewsFeatureCollectionMap.get(e);
        for (const r of s)
          !r.popupTemplate && h.popupTemplate && (r.popupTemplate = h.popupTemplate), r.sourceLayer = r.layer = this.layer;
      }
      return s;
    }).flat().map((e) => ({ type: "graphic", graphic: e, layer: this.layer, mapPoint: i }));
  }
  highlight(i) {
    let t;
    typeof i == "number" ? t = [i] : i instanceof u ? t = [i.uid] : Array.isArray(i) && i.length > 0 ? t = typeof i[0] == "number" ? i : i.map((s) => s && s.uid) : f.isCollection(i) && (t = i.map((s) => s && s.uid).toArray());
    const e = t == null ? void 0 : t.filter(w);
    return e != null && e.length ? (this._addHighlight(e), { remove: () => {
      this._removeHighlight(e);
    } }) : T;
  }
  update(i) {
    for (const t of this.graphicsViews())
      t.processUpdate(i);
  }
  attach() {
    const i = this.view, t = () => this.requestUpdate(), e = this.layer.featureCollections;
    if (e != null && e.length) {
      this._graphicsViewsFeatureCollectionMap = /* @__PURE__ */ new Map();
      for (const s of e) {
        const h = new c(this.view.featuresTilingScheme), r = new g({ view: i, graphics: s.source, renderer: s.renderer, requestUpdateCallback: t, container: h });
        this._graphicsViewsFeatureCollectionMap.set(r, s), this.container.addChild(r.container), this.addHandles([a(() => s.visible, (o) => r.container.visible = o, p), a(() => r.updating, () => this.notifyChange("updating"), p)], n);
      }
      this._updateHighlight();
    } else
      this.layer.sublayers != null && this.addHandles(y(() => this.layer.sublayers, "change", () => this._createGraphicsViews(), { onListenerAdd: () => this._createGraphicsViews(), onListenerRemove: () => this._destroyGraphicsViews() }), m);
  }
  detach() {
    this._destroyGraphicsViews(), this.removeHandles(m);
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const i of this.graphicsViews())
      i.viewChange();
  }
  isUpdating() {
    for (const i of this.graphicsViews())
      if (i.updating)
        return !0;
    return !1;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.removeHandles(n);
    for (const i of this.graphicsViews())
      i.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), this.layer.sublayers == null)
      return;
    const i = [], t = this.view, e = () => this.requestUpdate();
    for (const s of this.layer.sublayers) {
      const h = new v(), r = new c(this.view.featuresTilingScheme);
      r.fadeTransitionEnabled = !0;
      const o = new g({ view: t, graphics: s.graphics, requestUpdateCallback: e, container: r });
      this.addHandles([s.on("graphic-update", o.graphicUpdateHandler), a(() => s.visible, (d) => o.container.visible = d, p), a(() => o.updating, () => this.notifyChange("updating"), p)], n), h.addChild(o.container), this.container.addChild(h), i.push(o);
    }
    this._graphicsViews = i, this._updateHighlight();
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const e = this._highlightIds.get(t);
        this._highlightIds.set(t, e + 1);
      } else
        this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const e = this._highlightIds.get(t) - 1;
        e === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, e);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const i = Array.from(this._highlightIds.keys());
    for (const t of this.graphicsViews())
      t.setHighlight(i);
  }
};
l = _([V("geoscene.views.2d.layers.MapNotesLayerView2D")], l);
const bi = l;
export {
  bi as default
};

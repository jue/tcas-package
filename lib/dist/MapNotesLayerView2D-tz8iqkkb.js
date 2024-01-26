import { m as u, V as f, R as w, l as a, f as p, w as y, a as _, c as V } from "./index-HxXrdrYt.js";
import { h as v } from "./Container-y548tJqA.js";
import { r as C } from "./GroupContainer-8F1qfsSc.js";
import { f as H, d as b } from "./LayerView-xItHBa3T.js";
import { i as c } from "./GraphicContainer-Js1SEcjp.js";
import { o as g } from "./GraphicsView2D--Chd-qUk.js";
import "vue";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./BaseGraphicContainer-X4-oLxjj.js";
import "./FeatureContainer-iNSNk881.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./util-_Vbm8maX.js";
import "./TileContainer-KY-TE4tX.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils--xHzoVSe.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./utils-ZpixBail.js";
import "./normalizeUtilsSync-WlqzzP2d.js";
import "./projectionSupport-7oPVn9Md.js";
import "./json-uwIaZKlZ.js";
import "./Matcher-72v38sbr.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-j-mSNUkn.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-kWM-xNyV.js";
import "./ComputedAttributeStorage-2KraofCx.js";
import "./arcadeTimeUtils-8XmFQ2k4.js";
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

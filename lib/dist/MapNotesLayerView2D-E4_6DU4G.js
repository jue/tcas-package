import { m as u, V as f, R as w, l as a, f as p, w as y, a as _, c as V } from "./index-O2RTvw_o.js";
import { h as v } from "./Container-YlBWRIXD.js";
import { r as C } from "./GroupContainer-91cUF1xi.js";
import { f as H, d as b } from "./LayerView-AYRNbjM7.js";
import { i as c } from "./GraphicContainer-uyOMQtiI.js";
import { o as g } from "./GraphicsView2D--2GlIbuy.js";
import "vue";
import "./definitions-jqTA3541.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
import "./WGLContainer-Onm3yFPW.js";
import "./VertexArrayObject-6efe00MS.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-etN3NLwm.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./BaseGraphicContainer-2F-XgeLr.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./floatRGBA-ePb46nBT.js";
import "./util-KO5PrNj-.js";
import "./TileContainer-90vnlfVn.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./utils-4fNQuSlg.js";
import "./normalizeUtilsSync-Dex5kKX_.js";
import "./projectionSupport-Ywut87fi.js";
import "./json-uwIaZKlZ.js";
import "./Matcher-877r_dj4.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-Ghf7sU9Y.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-jwA3T6ex.js";
import "./ComputedAttributeStorage-XU3YtPT-.js";
import "./arcadeTimeUtils-6Xb6Siq7.js";
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

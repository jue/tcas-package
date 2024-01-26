import { l, f as h, g, V as f, k as w, t as d, p as n, a as u, c as V } from "./index-B7TsCcH6.js";
import { f as b, d as S } from "./LayerView-C6bBL_rq.js";
import { i as _ } from "./GraphicContainer-bSPPKI0e.js";
import { o as T } from "./GraphicsView2D-Mk0LDR9N.js";
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
let y = class extends b(S) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = /* @__PURE__ */ new Map(), this.graphicsViews = [];
  }
  async hitTest(t, r) {
    if (!this.graphicsViews.length)
      return null;
    const o = this.layer;
    return this.graphicsViews.reverse().map((e) => {
      const i = this._popupTemplates.get(e), s = e.hitTest(t);
      for (const p of s)
        p.layer = o, p.sourceLayer = o, p.popupTemplate = i;
      return s;
    }).flat().map((e) => ({ type: "graphic", graphic: e, layer: o, mapPoint: t }));
  }
  update(t) {
    if (this.graphicsViews)
      for (const r of this.graphicsViews)
        r.processUpdate(t);
  }
  attach() {
    this.addAttachHandles([l(() => {
      var t;
      return (t = this.layer) == null ? void 0 : t.featureCollections;
    }, (t) => {
      this._clear();
      for (const { popupInfo: r, featureSet: o, layerDefinition: e } of t) {
        const i = g.fromJSON(o), s = new f(i.features), p = e.drawingInfo, c = r ? w.fromJSON(r) : null, a = d(p.renderer), m = new T({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: s, renderer: a, container: new _(this.view.featuresTilingScheme) });
        this._graphicsViewMap[i.geometryType] = m, this._popupTemplates.set(m, c), i.geometryType !== "polygon" || this.layer.polygonSymbol ? i.geometryType !== "polyline" || this.layer.lineSymbol ? i.geometryType !== "point" || this.layer.pointSymbol || (this.layer.pointSymbol = a.symbol) : this.layer.lineSymbol = a.symbol : this.layer.polygonSymbol = a.symbol, this.graphicsViews.push(m), this.container.addChild(m.container);
      }
    }, h), l(() => {
      var t;
      return (t = this.layer) == null ? void 0 : t.polygonSymbol;
    }, (t) => {
      this._graphicsViewMap.polygon.renderer = new n({ symbol: t });
    }, h), l(() => {
      var t;
      return (t = this.layer) == null ? void 0 : t.lineSymbol;
    }, (t) => {
      this._graphicsViewMap.polyline.renderer = new n({ symbol: t });
    }, h), l(() => {
      var t;
      return (t = this.layer) == null ? void 0 : t.pointSymbol;
    }, (t) => {
      this._graphicsViewMap.point.renderer = new n({ symbol: t });
    }, h)]);
  }
  detach() {
    this._clear();
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const t of this.graphicsViews)
      t.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const t of this.graphicsViews)
      t.destroy();
    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }
};
y = u([V("geoscene.views.2d.layers.GeoRSSLayerView2D")], y);
const St = y;
export {
  St as default
};

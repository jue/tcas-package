import { l, f as h, g, V as f, k as w, t as d, p as n, a as u, c as V } from "./index-h53IWweP.js";
import { f as b, d as S } from "./LayerView-Ll--tTKd.js";
import { i as _ } from "./GraphicContainer-L-hXPncv.js";
import { o as T } from "./GraphicsView2D-9VrUqx4w.js";
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

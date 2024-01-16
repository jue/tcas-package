import { l, f as h, g, V as f, k as w, t as d, p as n, a as u, c as V } from "./index-O2RTvw_o.js";
import { f as b, d as S } from "./LayerView-AYRNbjM7.js";
import { i as _ } from "./GraphicContainer-uyOMQtiI.js";
import { o as T } from "./GraphicsView2D--2GlIbuy.js";
import "vue";
import "./Container-YlBWRIXD.js";
import "./definitions-jqTA3541.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
import "./color-etN3NLwm.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./BaseGraphicContainer-2F-XgeLr.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./WGLContainer-Onm3yFPW.js";
import "./VertexArrayObject-6efe00MS.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
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

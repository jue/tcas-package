import { l, f as h, g, V as f, k as w, t as d, p as n, a as u, c as V } from "./index-HxXrdrYt.js";
import { f as b, d as S } from "./LayerView-xItHBa3T.js";
import { i as _ } from "./GraphicContainer-Js1SEcjp.js";
import { o as T } from "./GraphicsView2D--Chd-qUk.js";
import "vue";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./BaseGraphicContainer-X4-oLxjj.js";
import "./FeatureContainer-iNSNk881.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
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

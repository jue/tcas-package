import { V as l, x as m, f as u, R as p, l as g, a as n, b as d, c as _ } from "./index-O2RTvw_o.js";
import { m as w, c as y, C as f, T as k, j as M, S as v, O as V } from "./Stop-80XBqU2y.js";
import { f as G, d as I } from "./LayerView-AYRNbjM7.js";
import { i as F } from "./GraphicContainer-uyOMQtiI.js";
import { o as H } from "./GraphicsView2D--2GlIbuy.js";
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
const C = Object.freeze({ remove() {
}, pause() {
}, resume() {
} }), b = ["route-info", "direction-line", "direction-point", "polygon-barrier", "polyline-barrier", "point-barrier", "stop"], o = { graphic: null, property: null, oldValue: null, newValue: null };
function c(t) {
  return t instanceof w || t instanceof y || t instanceof f || t instanceof k || t instanceof M || t instanceof v || t instanceof V;
}
function U(t) {
  return l.isCollection(t) && t.length && c(t.at(0));
}
function O(t) {
  return Array.isArray(t) && t.length > 0 && c(t[0]);
}
let a = class extends G(I) {
  constructor() {
    super(...arguments), this._graphics = new l(), this._highlightIds = /* @__PURE__ */ new Map(), this._networkFeatureMap = /* @__PURE__ */ new Map(), this._networkGraphicMap = /* @__PURE__ */ new Map();
  }
  get _routeItems() {
    return new m({ getCollections: () => this.layer == null || this.destroyed ? [] : [this.layer.routeInfo != null ? new l([this.layer.routeInfo]) : null, this.layer.directionLines, this.layer.directionPoints, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.pointBarriers, this.layer.stops] });
  }
  initialize() {
    this.updatingHandles.addOnCollectionChange(() => this._routeItems, (t) => this._routeItemsChanged(t), u);
  }
  destroy() {
    var t;
    this._networkFeatureMap.clear(), this._networkGraphicMap.clear(), this._graphics.removeAll(), (t = this._get("_routeItems")) == null || t.destroy();
  }
  attach() {
    this._createGraphicsView();
  }
  detach() {
    this._destroyGraphicsView();
  }
  async fetchPopupFeatures(t) {
    return this._graphicsView.hitTest(t).filter((e) => !!e.popupTemplate);
  }
  highlight(t) {
    let e;
    e = c(t) ? [this._getNetworkFeatureUid(t)] : O(t) ? t.map((r) => this._getNetworkFeatureUid(r)) : U(t) ? t.map((r) => this._getNetworkFeatureUid(r)).toArray() : [t.uid];
    const i = e.filter(p);
    return i.length ? (this._addHighlight(i), { remove: () => this._removeHighlight(i) }) : C;
  }
  async hitTest(t, e) {
    if (this.suspended)
      return null;
    const i = this._graphicsView.hitTest(t).filter(p).map((s) => this._networkGraphicMap.get(s));
    if (!i.length)
      return null;
    const { layer: r } = this;
    return i.reverse().map((s) => ({ type: "route", layer: r, mapPoint: t, networkFeature: s }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveStart() {
  }
  moveEnd() {
  }
  update(t) {
    this._graphicsView.processUpdate(t);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(t) {
    for (const e of t)
      if (this._highlightIds.has(e)) {
        const i = this._highlightIds.get(e);
        this._highlightIds.set(e, i + 1);
      } else
        this._highlightIds.set(e, 1);
    this._updateHighlight();
  }
  _createGraphic(t) {
    const e = t.toGraphic();
    return e.layer = this.layer, e.sourceLayer = this.layer, e;
  }
  _createGraphicsView() {
    const t = this.view, e = () => this.requestUpdate(), i = new F(t.featuresTilingScheme);
    this._graphicsView = new H({ container: i, graphics: this._graphics, requestUpdateCallback: e, view: t }), this.container.addChild(i), this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container), this._graphicsView.destroy();
  }
  _getDrawOrder(t) {
    const e = this._networkGraphicMap.get(t);
    return b.indexOf(e.type);
  }
  _getNetworkFeatureUid(t) {
    return this._networkFeatureMap.has(t) ? this._networkFeatureMap.get(t).uid : null;
  }
  _removeHighlight(t) {
    for (const e of t)
      if (this._highlightIds.has(e)) {
        const i = this._highlightIds.get(e) - 1;
        i === 0 ? this._highlightIds.delete(e) : this._highlightIds.set(e, i);
      }
    this._updateHighlight();
  }
  _routeItemsChanged(t) {
    if (t.removed.length) {
      this._graphics.removeMany(t.removed.map((e) => {
        const i = this._networkFeatureMap.get(e);
        return this._networkFeatureMap.delete(e), this._networkGraphicMap.delete(i), i;
      }));
      for (const e of t.removed)
        this.removeHandles(e);
    }
    if (t.added.length) {
      this._graphics.addMany(t.added.map((e) => {
        const i = this._createGraphic(e);
        return i.symbol == null ? null : (this._networkFeatureMap.set(e, i), this._networkGraphicMap.set(i, e), i);
      }).filter(p));
      for (const e of t.added)
        this.addHandles([g(() => e.geometry, (i, r) => {
          this._updateGraphic(e, "geometry", i, r);
        }), g(() => e.symbol, (i, r) => {
          this._updateGraphic(e, "symbol", i, r);
        })], e);
      this._graphics.sort((e, i) => this._getDrawOrder(e) - this._getDrawOrder(i));
    }
  }
  _updateGraphic(t, e, i, r) {
    if (!this._networkFeatureMap.has(t)) {
      const h = this._createGraphic(t);
      return this._networkFeatureMap.set(t, h), this._networkGraphicMap.set(h, t), void this._graphics.add(h);
    }
    const s = this._networkFeatureMap.get(t);
    s[e] = i, o.graphic = s, o.property = e, o.oldValue = r, o.newValue = i, this._graphicsView.graphicUpdateHandler(o);
  }
  _updateHighlight() {
    const t = Array.from(this._highlightIds.keys());
    this._graphicsView.setHighlight(t);
  }
};
n([d()], a.prototype, "_graphics", void 0), n([d()], a.prototype, "_routeItems", null), a = n([_("geoscene.views.2d.layers.RouteLayerView2D")], a);
const Ut = a;
export {
  Ut as default
};

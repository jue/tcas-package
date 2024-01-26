import { f as a, P as p, r as n, w as g, b as m, j as l, e as v, a as V } from "./index-j1oaLRcp.js";
import { f as I, u as b } from "./LayerView-u7tKPPGO.js";
import { i as H } from "./GraphicContainer-pTHcU1s8.js";
import { r as $ } from "./BaseGraphicContainer-vPm1hpo8.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./Utils-Mkp4Julu.js";
import "./enums-YM9SAu8u.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./MaterialKey-tb9URCR8.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-eTH1ob6-.js";
import "./json-uwIaZKlZ.js";
import "./VertexArrayObject-WfBtioi6.js";
import "./FeatureContainer-Yy5F93tk.js";
import "./TileContainer-_mN9fJMf.js";
import "./WGLContainer-Za_nqieP.js";
import "./pixelUtils-Kz9o33NO.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
import "./visualVariablesUtils-lTNHq6nM.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./Matcher-lReemcRu.js";
import "./tileUtils-ZmGgn6yC.js";
import "./TileClipper-2O-LVJh2.js";
import "./Geometry-etmNDSLV.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./schemaUtils-NQXxAz6-.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./ComputedAttributeStorage-4bJ5RN5o.js";
import "./vec3f32-iv6FBVVh.js";
const d = ["routeInfo", "directionLines", "directionPoints", "polygonBarriers", "polylineBarriers", "pointBarriers", "stops"], A = Object.freeze({ remove() {
}, pause() {
}, resume() {
} });
let r = class extends I(b) {
  constructor() {
    super(...arguments), this._graphicsViews = /* @__PURE__ */ new Map(), this._highlightIds = /* @__PURE__ */ new Map();
  }
  attach() {
    for (const i of d)
      this.handles.add(a(() => n(this.layer[i]) ? i === "routeInfo" ? [g(this.layer[i])] : g(this.layer[i]).toArray() : null, (t) => this._createGraphicsView(i, t), p), i);
  }
  detach() {
    this._destroyGraphicsViews();
  }
  highlight(i) {
    let t;
    return typeof i == "number" ? t = [i] : i instanceof m ? t = [i.uid] : Array.isArray(i) && i.length > 0 ? t = typeof i[0] == "number" ? i : i.map((s) => s && s.uid) : l.isCollection(i) && (t = i.map((s) => s && s.uid).toArray()), t = t.filter((s) => s != null), t.length ? (this._addHighlight(t), { remove: () => this._removeHighlight(t) }) : A;
  }
  async hitTest(i, t) {
    if (this.suspended || !this._graphicsViews.size)
      return Promise.resolve(null);
    const s = Array.from(this._graphicsViews.values()).reverse().map((e) => e.hitTest(i)).flat().filter((e) => !!e);
    for (const e of s)
      e.layer = this.layer, e.sourceLayer = this.layer;
    return s;
  }
  moveStart() {
  }
  moveEnd() {
  }
  update(i) {
    for (const t of this._graphicsViews.values())
      t.processUpdate(i);
  }
  viewChange() {
    for (const i of this._graphicsViews.values())
      i.viewChange();
  }
  isUpdating() {
    for (const i of this._graphicsViews.values())
      if (i.updating)
        return !0;
    return !1;
  }
  _createGraphicsView(i, t) {
    this._destroyGraphicsView(i);
    const s = this.view, e = () => this.requestUpdate(), c = new l(n(t) ? t.map((u) => {
      const { attributes: f, geometry: _, symbol: y, popupInfo: w } = u.toPortalJSON();
      return m.fromJSON({ attributes: f, geometry: _, symbol: y, popupTemplate: w });
    }) : []), o = new H(s.featuresTilingScheme), h = new $({ container: o, graphics: c, requestUpdateCallback: e, view: s });
    this._graphicsViews.set(i, h), this.container.addChildAt(o, d.indexOf(i)), this._updateHighlight(), this.handles.add([a(() => h.updating, () => this.notifyChange("updating"), p)], `updating-${i}`);
  }
  _destroyGraphicsView(i) {
    if (!this._graphicsViews.has(i))
      return;
    const t = this._graphicsViews.get(i);
    this.container.removeChild(t.container), t.destroy(), this.handles.remove(`updating-${i}`), this._graphicsViews.delete(i);
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren();
    for (const [i, t] of this._graphicsViews.entries())
      this.handles.remove(i), t.destroy();
    this._graphicsViews.clear();
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const s = this._highlightIds.get(t);
        this._highlightIds.set(t, s + 1);
      } else
        this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const s = this._highlightIds.get(t) - 1;
        s === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, s);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const i = Array.from(this._highlightIds.keys());
    for (const t of this._graphicsViews.values())
      t.setHighlight(i);
  }
};
r = v([V("geoscene.views.2d.layers.RouteLayerView2D")], r);
const ci = r;
export {
  ci as default
};

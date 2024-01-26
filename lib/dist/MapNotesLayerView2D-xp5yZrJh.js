import { r as o, b as m, j as u, i as p, $ as f, l as w, e as _, a as y } from "./index-j1oaLRcp.js";
import { f as V, u as v } from "./LayerView-u7tKPPGO.js";
import { i as c } from "./GraphicContainer-pTHcU1s8.js";
import { r as g } from "./BaseGraphicContainer-vPm1hpo8.js";
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
const d = "sublayers", n = "layerView", C = Object.freeze({ remove() {
}, pause() {
}, resume() {
} });
let l = class extends V(v) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  async fetchPopupFeatures(i) {
    return Array.from(this.graphicsViews(), (t) => t.hitTest(i).filter((e) => !!e.popupTemplate)).flat();
  }
  *graphicsViews() {
    o(this._graphicsViewsFeatureCollectionMap) ? yield* this._graphicsViewsFeatureCollectionMap.keys() : o(this._graphicsViews) ? yield* this._graphicsViews : yield* [];
  }
  async hitTest(i, t) {
    const e = Array.from(this.graphicsViews(), async (r) => {
      const h = await r.hitTest(i);
      if (o(this._graphicsViewsFeatureCollectionMap)) {
        const s = this._graphicsViewsFeatureCollectionMap.get(r);
        for (const a of h)
          !a.popupTemplate && s.popupTemplate && (a.popupTemplate = s.popupTemplate);
      }
      return h;
    });
    return (await Promise.all(e)).flat();
  }
  highlight(i) {
    let t;
    return typeof i == "number" ? t = [i] : i instanceof m ? t = [i.uid] : Array.isArray(i) && i.length > 0 ? t = typeof i[0] == "number" ? i : i.map((e) => e && e.uid) : u.isCollection(i) && (t = i.map((e) => e && e.uid).toArray()), t = t.filter((e) => e != null), t.length ? (this._addHighlight(t), { remove: () => {
      this._removeHighlight(t);
    } }) : C;
  }
  update(i) {
    for (const t of this.graphicsViews())
      t.processUpdate(i);
  }
  attach() {
    const i = this.view, t = () => this.requestUpdate(), e = this.layer.featureCollections;
    if (o(e) && e.length) {
      this._graphicsViewsFeatureCollectionMap = /* @__PURE__ */ new Map();
      for (const r of e) {
        const h = new c(this.view.featuresTilingScheme);
        h.fadeTransitionEnabled = !0;
        const s = new g({ view: i, graphics: r.source, renderer: r.renderer, requestUpdateCallback: t, container: h });
        this._graphicsViewsFeatureCollectionMap.set(s, r), this.container.addChild(s.container), this.handles.add([p(r, "visible", (a) => s.container.visible = a), p(s, "updating", () => this.notifyChange("updating"))], n);
      }
      this._updateHighlight();
    } else
      o(this.layer.sublayers) && this.handles.add(f(this.layer, "sublayers", "change", () => this._createGraphicsViews(), () => this._createGraphicsViews(), () => this._destroyGraphicsViews()), d);
  }
  detach() {
    this._destroyGraphicsViews(), this.handles.remove(d);
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
    this.container.removeAllChildren(), this.handles.remove(n);
    for (const i of this.graphicsViews())
      i.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), w(this.layer.sublayers))
      return;
    const i = [], t = this.view, e = () => this.requestUpdate();
    for (const r of this.layer.sublayers) {
      const h = new c(this.view.featuresTilingScheme);
      h.fadeTransitionEnabled = !0;
      const s = new g({ view: t, graphics: r.graphics, requestUpdateCallback: e, container: h });
      this.handles.add([r.on("graphic-update", s.graphicUpdateHandler), p(r, "visible", (a) => s.container.visible = a), p(s, "updating", () => this.notifyChange("updating"))], n), this.container.addChild(s.container), i.push(s);
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
l = _([y("geoscene.views.2d.layers.MapNotesLayerView2D")], l);
const li = l;
export {
  li as default
};
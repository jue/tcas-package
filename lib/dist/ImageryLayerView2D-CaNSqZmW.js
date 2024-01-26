import { s as S, e as a, d as o, a as f, ay as q, g as D, b, r as x, X as z, M as B, l as k, c9 as A, w as C, f as g, eQ as _, C as U, ax as M, y as P, dI as O, ab as R, c as N, gB as E, j as V } from "./index-j1oaLRcp.js";
import { _ as j, d as L } from "./RasterVFDisplayObject-LQcecD0Q.js";
import { f as J, u as G } from "./LayerView-u7tKPPGO.js";
import { r as H } from "./BaseGraphicContainer-vPm1hpo8.js";
import { n as W } from "./HighlightGraphicContainer-9BeUO_35.js";
import { d as Q } from "./pixelUtils-Kz9o33NO.js";
import { t as X } from "./BitmapContainer-o7-pgJEM.js";
import { s as K } from "./Container-0QnIUm3K.js";
import { i as Y } from "./Bitmap-WAGgSDLg.js";
import { S as Z } from "./ExportStrategy-Mywkyszm.js";
import { B as ee } from "./rasterProjectionHelper-9TmFtAJj.js";
import { g as te, d as ie } from "./dataUtils-mSVXnWd6.js";
import { a as re, b as se } from "./WGLContainer-Za_nqieP.js";
import { I as $ } from "./Utils-Mkp4Julu.js";
import { d as ae } from "./popupUtils-GfxNYuRl.js";
import { i as ne } from "./RefreshableLayerView-nMKrSELX.js";
import "vue";
import "./VertexArrayObject-WfBtioi6.js";
import "./Texture-PL6UBkoQ.js";
import "./enums-n72NRQQZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./enums-YM9SAu8u.js";
import "./MaterialKey-tb9URCR8.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-eTH1ob6-.js";
import "./json-uwIaZKlZ.js";
import "./FeatureContainer-Yy5F93tk.js";
import "./TileContainer-_mN9fJMf.js";
import "./visualVariablesUtils-lTNHq6nM.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./Matcher-lReemcRu.js";
import "./tileUtils-ZmGgn6yC.js";
import "./TileClipper-2O-LVJh2.js";
import "./Geometry-etmNDSLV.js";
import "./GeometryUtils-ACqEo_je.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./earcut-80XuLCNX.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./schemaUtils-NQXxAz6-.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./ComputedAttributeStorage-4bJ5RN5o.js";
import "./vec3f32-iv6FBVVh.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
const oe = S.getLogger("geoscene.views.2d.layers.imagery.ImageryView2D");
let h = class extends q {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new K(), this.updateRequested = !1, this.type = "imagery", this._bitmapView = new X();
  }
  destroy() {
    this.attached && (this.detach(), this.attached = !1), this.updateRequested = !1;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(t) {
    this.strategy.update(t).catch((i) => {
      D(i) || oe.error(i);
    });
  }
  hitTest(t) {
    return new b({ attributes: {}, geometry: t.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const t = this.layer.version >= 10, i = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, s = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new Z({ container: this._bitmapView, imageNormalizationSupported: t, imageMaxHeight: i, imageMaxWidth: s, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren(), this.updateRequested = !1;
  }
  redraw() {
    this.strategy.updateExports((t) => {
      t.source instanceof HTMLImageElement ? t.requestRender() : this.layer.applyRenderer({ pixelBlock: t.source.pixelBlock }).then((i) => {
        const s = t.source;
        s.pixelBlock = i.pixelBlock, s.filter = (n) => this.layer.applyFilter(n), this.container.requestRender();
      });
    });
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.view.requestUpdate());
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  getPixelData() {
    if (this.updating)
      return null;
    const t = this.strategy.bitmaps;
    if (t.length === 1 && t[0].source)
      return { extent: t[0].source.extent, pixelBlock: t[0].source.originalPixelBlock };
    if (t.length > 1) {
      const i = this.view.extent, s = t.map((r) => r.source).filter((r) => r.extent && r.extent.intersects(i)).map((r) => ({ extent: r.extent, pixelBlock: r.originalPixelBlock })), n = Q(s, i);
      return x(n) ? { extent: n.extent, pixelBlock: n.pixelBlock } : null;
    }
    return null;
  }
  _fetchImage(t, i, s, n) {
    return (n = n || {}).timeExtent = this.timeExtent, n.requestAsImageElement = !0, this.layer.fetchImage(t, i, s, n).then((r) => r.imageElement ? r.imageElement : this.layer.applyRenderer(r.pixelData, { signal: n.signal }).then((l) => {
      const c = new Y(l.pixelBlock, l.extent.clone(), r.pixelData.pixelBlock);
      return c.filter = (p) => this.layer.applyFilter(p), c;
    }));
  }
};
a([o()], h.prototype, "attached", void 0), a([o()], h.prototype, "container", void 0), a([o()], h.prototype, "layer", void 0), a([o()], h.prototype, "strategy", void 0), a([o()], h.prototype, "timeExtent", void 0), a([o()], h.prototype, "view", void 0), a([o()], h.prototype, "updateRequested", void 0), a([o()], h.prototype, "updating", null), a([o()], h.prototype, "type", void 0), h = a([f("geoscene.views.2d.layers.imagery.ImageryView2D")], h);
const le = h;
class he extends re {
  constructor() {
    super(...arguments), this.symbolTypes = ["triangle"];
  }
  get requiresDedicatedFBO() {
    return !1;
  }
  prepareRenderPasses(t) {
    const i = t.registerRenderPass({ name: "imagery (vf)", brushes: [se], target: () => this.children, drawPhase: $.MAP });
    return [...super.prepareRenderPasses(t), i];
  }
  doRender(t) {
    this.visible && t.drawPhase === $.MAP && this.symbolTypes.forEach((i) => {
      t.renderPass = i, super.doRender(t);
    });
  }
}
const pe = S.getLogger("geoscene.views.2d.layers.imagery.VectorFieldView2D");
let y = class extends q {
  constructor(e) {
    super(e), this.update = z((t, i) => this._update(t, i).catch((s) => {
      D(s) || pe.error(s);
    }));
  }
  get updating() {
    return !!this._loading;
  }
  redraw(e) {
    if (!this.container.children.length)
      return;
    const t = this.container.children[0];
    t.symbolizerParameters = e, t.invalidateVAO(), this.container.symbolTypes = e.style === "wind_speed" ? ["scalar", "triangle"] : e.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.requestRender();
  }
  async _update(e, t, i) {
    if (!e.stationary)
      return;
    const { extent: s, spatialReference: n } = e.state, r = new B({ xmin: s.xmin, ymin: s.ymin, xmax: s.xmax, ymax: s.ymax, spatialReference: n }), [l, c] = e.state.size;
    this._loading = this.fetchPixels(r, l, c, i);
    const p = await this._loading;
    this._addToDisplay(p, t, e.state), this._loading = null;
  }
  _addToDisplay(e, t, i) {
    if (k(e.pixelBlock))
      return this.container.children.forEach((l) => l.destroy()), void this.container.removeAllChildren();
    const { extent: s, pixelBlock: n } = e, r = new j(n);
    r.offset = [0, 0], r.symbolizerParameters = t, r.rawPixelData = e, r.invalidateVAO(), r.x = s.xmin, r.y = s.ymax, r.pixelRatio = i.pixelRatio, r.rotation = i.rotation, r.resolution = i.resolution, r.width = n.width * t.symbolTileSize, r.height = n.height * t.symbolTileSize, this.container.children.forEach((l) => l.destroy()), this.container.removeAllChildren(), this.container.symbolTypes = t.style === "wind_speed" ? ["scalar", "triangle"] : t.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.addChild(r);
  }
};
a([o()], y.prototype, "fetchPixels", void 0), a([o()], y.prototype, "container", void 0), a([o()], y.prototype, "_loading", void 0), a([o()], y.prototype, "updating", null), y = a([f("geoscene.views.2d.layers.imagery.ImageryVFStrategy")], y);
const de = y;
let d = class extends A {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new he(), this.type = "imageryVF", this._dataParameters = { exportParametersVersion: 0, bbox: "", symbolTileSize: 0, time: "" }, this._fetchpixels = async (e, t, i, s) => {
      const n = await this._projectFullExtentPromise, { symbolTileSize: r } = this.layer.renderer, { extent: l, width: c, height: p } = te(e, t, i, r, n);
      if (x(n) && !n.intersects(e))
        return { extent: l, pixelBlock: null };
      const u = { bbox: `${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`, exportParametersVersion: this.layer.exportImageServiceParameters.version, symbolTileSize: r, time: JSON.stringify(this.timeExtent || "") };
      if (this._canReuseVectorFieldData(u)) {
        const m = this.getPixelData();
        if (x(m) && `${m.extent.xmin}, ${m.extent.ymin}, ${m.extent.xmax}, ${m.extent.ymax}` === u.bbox)
          return m;
      }
      const { pixelData: v } = await this.layer.fetchImage(l, c, p, { timeExtent: this.timeExtent, requestAsImageElement: !1, signal: s });
      return this._dataParameters = u, k(v.pixelBlock) ? { extent: l, pixelBlock: null } : { extent: l, pixelBlock: this.layer.rasterInfo.dataType === "vector-uv" ? C(ie(v.pixelBlock, "vector-uv")) : v.pixelBlock };
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    this._projectFullExtentPromise = this._getProjectedFullExtent(this.view.spatialReference), this._strategy = new de({ container: this.container, fetchPixels: this._fetchpixels }), this.handles.add(g(() => this.layer.renderer, (e) => this._updateSymbolizerParams(e), _), "vector-field-view-update");
  }
  detach() {
    this._strategy.destroy(), this.container.children.forEach((e) => e.destroy()), this.container.removeAllChildren(), this.handles.remove("vector-field-view-update"), this._strategy = this.container = this._projectFullExtentPromise = null;
  }
  getPixelData() {
    if (this.updating || !this.container.children.length)
      return null;
    const { extent: e, pixelBlock: t } = this.container.children[0].rawPixelData;
    return { extent: e, pixelBlock: t };
  }
  hitTest(e) {
    return new b({ attributes: {}, geometry: e.clone(), layer: this.layer });
  }
  update(e) {
    this._strategy.update(e, this._symbolizerParams);
  }
  redraw() {
    this._updateSymbolizerParams(this.layer.renderer), this._strategy.redraw(this._symbolizerParams);
  }
  _canReuseVectorFieldData(e) {
    const t = this._dataParameters.exportParametersVersion === e.exportParametersVersion, i = this._dataParameters.time === e.time, s = this._dataParameters.symbolTileSize === e.symbolTileSize, n = this._dataParameters.bbox === e.bbox;
    return t && i && s && n;
  }
  async _getProjectedFullExtent(e) {
    try {
      return await ee(this.layer.fullExtent, e);
    } catch {
      try {
        const i = (await U(this.layer.url, { query: { option: "footprints", outSR: e.wkid || JSON.stringify(e.toJSON()), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
        return i ? B.fromJSON(i) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(e) {
    e.type === "vector-field" && (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null }));
  }
};
a([o()], d.prototype, "attached", void 0), a([o()], d.prototype, "container", void 0), a([o()], d.prototype, "layer", void 0), a([o()], d.prototype, "timeExtent", void 0), a([o()], d.prototype, "type", void 0), a([o()], d.prototype, "view", void 0), a([o()], d.prototype, "updating", null), d = a([f("geoscene.views.2d.layers.imagery.VectorFieldView2D")], d);
const ce = d, ue = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.view = null;
    }
    async fetchPopupFeatures(i, s) {
      const { layer: n } = this;
      if (!i)
        throw new P("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: n });
      const { popupEnabled: r } = n, l = ae(n, s);
      if (!r || !x(l))
        throw new P("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: r, popupTemplate: l });
      const c = await l.getRequiredFields(), p = new O();
      p.timeExtent = this.timeExtent, p.geometry = i, p.outFields = c, p.outSpatialReference = i.spatialReference;
      const u = this.view.resolution, v = this.view.type === "2d" ? new R(u, u, this.view.spatialReference) : new R(0.5 * u, 0.5 * u, this.view.spatialReference), { returnTopmostRaster: m, showNoDataRecords: T } = l.layerOptions || { returnTopmostRaster: !0, showNoDataRecords: !1 }, I = { returnDomainValues: !0, returnTopmostRaster: m, pixelSize: v, showNoDataRecords: T, signal: x(s) ? s.signal : null };
      return n.queryVisibleRasters(p, I).then((F) => F);
    }
    canResume() {
      var i;
      return !!super.canResume() && ((i = this.timeExtent) == null || !i.isEmpty);
    }
  };
  return a([o()], t.prototype, "layer", void 0), a([o()], t.prototype, "suspended", void 0), a([o(M)], t.prototype, "timeExtent", void 0), a([o()], t.prototype, "view", void 0), t = a([f("geoscene.views.layers.ImageryLayerView")], t), t;
};
let w = class extends ue(ne(J(G))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1, this._highlightGraphics = new N(), this.subview = null;
  }
  get pixelData() {
    return this.updating ? null : "getPixelData" in this.subview ? this.subview.getPixelData() : null;
  }
  get updating() {
    return !!(!this.subview || "updating" in this.subview && this.subview.updating);
  }
  async hitTest(e, t) {
    return this.subview ? [this.subview.hitTest(e)] : null;
  }
  update(e) {
    var t;
    (t = this.subview) == null || t.update(e);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.view && (this._highlightView = new H({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new W(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container)), this.handles.add([g(() => {
      var e;
      return (e = this.layer.blendMode) != null ? e : "normal";
    }, (e) => this.subview.container.blendMode = e, _), g(() => {
      var e;
      return (e = this.layer.effect) != null ? e : null;
    }, (e) => this.subview.container.effect = e, _), g(() => this.layer.exportImageServiceParameters.version, (e) => {
      e && this._exportImageVersion !== e && (this._exportImageVersion = e, this.requestUpdate());
    }, E), g(() => this.timeExtent, (e) => {
      this.subview.timeExtent = e, "redraw" in this.subview ? this.requestUpdate() : this.subview.redrawOrRefetch();
    }, E), this.layer.on("redraw", () => {
      "redraw" in this.subview ? this.subview.redraw() : this.subview.redrawOrRefetch();
    }), g(() => this.layer.renderer, () => this._setSubView())], "imagerylayerview-update");
  }
  detach() {
    var e, t;
    this.layer.decreaseRasterJobHandlerUsage(), this.container.removeAllChildren(), this._detachSubview(this.subview), (e = this.subview) == null || e.destroy(), this.handles.remove("imagerylayerview-update"), this.subview = null, (t = this._highlightView) == null || t.destroy(), this._exportImageVersion = -1;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e, t) {
    if (!((Array.isArray(e) ? e[0] : V.isCollection(e) ? e.getItemAt(0) : e) instanceof b))
      return { remove: () => {
      } };
    let i = [];
    return Array.isArray(e) || V.isCollection(e) ? i = e.map((s) => s.clone()) : e instanceof b && (i = [e.clone()]), this._highlightGraphics.addMany(i), { remove: () => {
      this._highlightGraphics.removeMany(i);
    } };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  _setSubView() {
    var e;
    if (!this.view)
      return;
    const t = (e = this.layer.renderer) == null ? void 0 : e.type;
    let i = "imagery";
    if (t === "vector-field" && this.layer.format === "lerc" ? i = "imageryVF" : t === "flow" && (i = "flow"), this.subview) {
      var s;
      if (this.subview.type === i)
        return this._attachSubview(this.subview), void (this.subview.type === "flow" && this.subview.redrawOrRefetch());
      this._detachSubview(this.subview), (s = this.subview) == null || s.destroy();
    }
    this.subview = i === "imagery" ? new le({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : i === "imageryVF" ? new ce({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new L({ layer: this.layer, layerView: this }), this._attachSubview(this.subview), this.requestUpdate();
  }
  _attachSubview(e) {
    e && !e.attached && (e.attach(), e.attached = !0, this.container.addChildAt(e.container, 0), e.container.blendMode = this.layer.blendMode, e.container.effect = this.layer.effect);
  }
  _detachSubview(e) {
    e != null && e.attached && (this.container.removeChild(e.container), e.detach(), e.attached = !1);
  }
};
a([o()], w.prototype, "pixelData", null), a([o({ readOnly: !0 })], w.prototype, "updating", null), a([o()], w.prototype, "subview", void 0), w = a([f("geoscene.views.2d.layers.ImageryLayerView2D")], w);
const pt = w;
export {
  pt as default
};

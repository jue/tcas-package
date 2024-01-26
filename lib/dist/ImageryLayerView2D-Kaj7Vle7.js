import { a as s, b as o, c as f, b3 as D, d as _, s as P, m as b, M as z, aC as T, dx as I, l as x, f9 as R, ae as A, b2 as U, H as V, aD as C, az as E, i as M, dN as $, V as S } from "./index-B7TsCcH6.js";
import { d as O, f as N, h as j } from "./RasterVFDisplayObject-TvR55IJz.js";
import { f as H, d as J } from "./LayerView-C6bBL_rq.js";
import { o as L } from "./GraphicsView2D-Mk0LDR9N.js";
import { n as G } from "./HighlightGraphicContainer-0SdLUw2K.js";
import { M as W, m as K, f as Q } from "./dataUtils-u3eW5Se2.js";
import { a as X } from "./BitmapContainer-t1LoeQR3.js";
import { h as Y } from "./Container-ul_EuzrF.js";
import { l as Z } from "./Bitmap-qcipg2DH.js";
import { v as ee } from "./ExportStrategy-XITex4jo.js";
import { q as te } from "./rasterProjectionHelper-CBGRC4RQ.js";
import { T as q } from "./color-Xkczoxbf.js";
import { i as ie } from "./WGLContainer-vjbZun5V.js";
import { p as re } from "./popupUtils-siDvgqb0.js";
import { a as ae } from "./RefreshableLayerView-zx_azbUs.js";
import "vue";
import "./VertexArrayObject-_p3La6MY.js";
import "./Texture-v5WxIbZy.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./ExpandedCIM-sWOoIMVV.js";
import "./BidiEngine-hERHJu7U.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./enums-QU6RH5ju.js";
import "./utils-99Msuqlm.js";
import "./GeometryUtils-wM6A7upA.js";
import "./definitions-Co8CrS3w.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-nKmgNZQ1.js";
import "./floatRGBA-Wp7e9WKm.js";
import "./normalizeUtilsSync-RaRpR1hQ.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./projectionSupport-P-Yk17hX.js";
import "./json-uwIaZKlZ.js";
import "./AttributeStoreView-gMBKUgth.js";
import "./TiledDisplayObject-952ryiS7.js";
import "./visualVariablesUtils-w0od9lEd.js";
import "./util-Q6nUdqQ4.js";
import "./Matcher-oZu2Jhpq.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-3DHEGHOy.js";
import "./earcut-azOcA8wo.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-ebbYGtpz.js";
import "./ComputedAttributeStorage-O2RWVkE4.js";
import "./featureConversionUtils-oKi2Ei-6.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./arcadeTimeUtils-49F1RqD9.js";
import "./executionError-EEhTiqtD.js";
import "./normalizeUtils-Le73uFr2.js";
import "./utils-iTYrz_MZ.js";
import "./BaseGraphicContainer-IJHgFc9L.js";
import "./FeatureContainer-1uun9v5E.js";
import "./TileContainer-v6Rn1fM6.js";
import "./vec3f32-BgIjjdRt.js";
import "./ProgramTemplate-aPyLVtfI.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
let h = class extends D {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new Y(), this.updateRequested = !1, this.type = "imagery", this._bitmapView = new X();
  }
  destroy() {
    this.attached && (this.detach(), this.attached = !1), this.updateRequested = !1;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(e) {
    this.strategy.update(e).catch((t) => {
      _(t) || P.getLogger(this).error(t);
    });
  }
  hitTest(e) {
    return new b({ attributes: {}, geometry: e.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const e = this.layer.version >= 10, t = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, i = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new ee({ container: this._bitmapView, imageNormalizationSupported: e, imageMaxHeight: t, imageMaxWidth: i, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren(), this.updateRequested = !1;
  }
  redraw() {
    this.strategy.updateExports(async (e) => {
      const { source: t } = e;
      if (!t || t instanceof ImageBitmap)
        return;
      const i = await this.layer.applyRenderer({ extent: t.extent, pixelBlock: t.originalPixelBlock ?? t.pixelBlock });
      t.filter = (r) => this.layer.pixelFilter ? this.layer.applyFilter(r) : { ...i, extent: t.extent };
    }).catch((e) => {
      _(e) || P.getLogger(this).error(e);
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
    const e = this.strategy.bitmaps;
    if (e.length === 1 && e[0].source)
      return { extent: e[0].source.extent, pixelBlock: e[0].source.originalPixelBlock };
    if (e.length > 1) {
      const t = this.view.extent, i = e.map((a) => a.source).filter((a) => a.extent && a.extent.intersects(t)).map((a) => ({ extent: a.extent, pixelBlock: a.originalPixelBlock })), r = W(i, t);
      return r != null ? { extent: r.extent, pixelBlock: r.pixelBlock } : null;
    }
    return null;
  }
  async _fetchImage(e, t, i, r) {
    var d;
    (r = r || {}).timeExtent = this.timeExtent, r.requestAsImageElement = !0, r.returnImageBitmap = !0;
    const a = await this.layer.fetchImage(e, t, i, r);
    if (a.imageBitmap)
      return a.imageBitmap;
    const n = await this.layer.applyRenderer(a.pixelData, { signal: r.signal }), l = new Z(n.pixelBlock, (d = n.extent) == null ? void 0 : d.clone(), a.pixelData.pixelBlock);
    return l.filter = (p) => this.layer.applyFilter(p), l;
  }
};
s([o()], h.prototype, "attached", void 0), s([o()], h.prototype, "container", void 0), s([o()], h.prototype, "layer", void 0), s([o()], h.prototype, "strategy", void 0), s([o()], h.prototype, "timeExtent", void 0), s([o()], h.prototype, "view", void 0), s([o()], h.prototype, "updateRequested", void 0), s([o()], h.prototype, "updating", null), s([o()], h.prototype, "type", void 0), h = s([f("geoscene.views.2d.layers.imagery.ImageryView2D")], h);
const se = h;
class oe extends ie {
  constructor() {
    super(...arguments), this.symbolTypes = ["triangle"];
  }
  get requiresDedicatedFBO() {
    return !1;
  }
  prepareRenderPasses(t) {
    const i = t.registerRenderPass({ name: "imagery (vf)", brushes: [O], target: () => this.children, drawPhase: q.MAP });
    return [...super.prepareRenderPasses(t), i];
  }
  doRender(t) {
    this.visible && t.drawPhase === q.MAP && this.symbolTypes.forEach((i) => {
      t.renderPass = i, super.doRender(t);
    });
  }
}
let y = class extends D {
  constructor(e) {
    super(e), this._loading = null, this.update = z((t, i) => this._update(t, i).catch((r) => {
      _(r) || P.getLogger(this).error(r);
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
    const { extent: r, spatialReference: a } = e.state, n = new T({ xmin: r.xmin, ymin: r.ymin, xmax: r.xmax, ymax: r.ymax, spatialReference: a }), [l, d] = e.state.size;
    this._loading = this.fetchPixels(n, l, d, i);
    const p = await this._loading;
    this._addToDisplay(p, t, e.state), this._loading = null;
  }
  _addToDisplay(e, t, i) {
    if (e.pixelBlock == null)
      return this.container.children.forEach((l) => l.destroy()), void this.container.removeAllChildren();
    const { extent: r, pixelBlock: a } = e, n = new N(a);
    n.offset = [0, 0], n.symbolizerParameters = t, n.rawPixelData = e, n.invalidateVAO(), n.x = r.xmin, n.y = r.ymax, n.pixelRatio = i.pixelRatio, n.rotation = i.rotation, n.resolution = i.resolution, n.width = a.width * t.symbolTileSize, n.height = a.height * t.symbolTileSize, this.container.children.forEach((l) => l.destroy()), this.container.removeAllChildren(), this.container.symbolTypes = t.style === "wind_speed" ? ["scalar", "triangle"] : t.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.addChild(n);
  }
};
s([o()], y.prototype, "fetchPixels", void 0), s([o()], y.prototype, "container", void 0), s([o()], y.prototype, "_loading", void 0), s([o()], y.prototype, "updating", null), y = s([f("geoscene.views.2d.layers.imagery.ImageryVFStrategy")], y);
const ne = y;
let c = class extends I {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new oe(), this.type = "imageryVF", this._dataParameters = { exportParametersVersion: 0, bbox: "", symbolTileSize: 0, time: "" }, this._fetchpixels = async (e, t, i, r) => {
      const a = await this._projectFullExtentPromise, { symbolTileSize: n } = this.layer.renderer, { extent: l, width: d, height: p } = K(e, t, i, n, a);
      if (a != null && !a.intersects(e))
        return { extent: l, pixelBlock: null };
      const m = { bbox: `${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`, exportParametersVersion: this.layer.exportImageServiceParameters.version, symbolTileSize: n, time: JSON.stringify(this.timeExtent || "") };
      if (this._canReuseVectorFieldData(m)) {
        const u = this.getPixelData();
        if (u != null && `${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}` === m.bbox)
          return u;
      }
      const { pixelData: g } = await this.layer.fetchImage(l, d, p, { timeExtent: this.timeExtent, requestAsImageElement: !1, signal: r });
      this._dataParameters = m;
      const w = g == null ? void 0 : g.pixelBlock;
      return w == null ? { extent: l, pixelBlock: null } : { extent: l, pixelBlock: this.layer.rasterInfo.dataType === "vector-uv" ? Q(w, "vector-uv") : w };
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    this._projectFullExtentPromise = this._getProjectedFullExtent(this.view.spatialReference), this._strategy = new ne({ container: this.container, fetchPixels: this._fetchpixels }), this.handles.add(x(() => this.layer.renderer, (e) => this._updateSymbolizerParams(e), R), "attach");
  }
  detach() {
    this._strategy.destroy(), this.container.children.forEach((e) => e.destroy()), this.container.removeAllChildren(), this.handles.remove("attach"), this._strategy = this.container = this._projectFullExtentPromise = null;
  }
  getPixelData() {
    var r;
    const e = (r = this.container.children[0]) == null ? void 0 : r.rawPixelData;
    if (this.updating || !e)
      return null;
    const { extent: t, pixelBlock: i } = e;
    return { extent: t, pixelBlock: i };
  }
  hitTest(e) {
    return new b({ attributes: {}, geometry: e.clone(), layer: this.layer });
  }
  update(e) {
    this._strategy.update(e, this._symbolizerParams);
  }
  redraw() {
    const { renderer: e } = this.layer;
    e && (this._updateSymbolizerParams(e), this._strategy.redraw(this._symbolizerParams));
  }
  _canReuseVectorFieldData(e) {
    const t = this._dataParameters.exportParametersVersion === e.exportParametersVersion, i = this._dataParameters.time === e.time, r = this._dataParameters.symbolTileSize === e.symbolTileSize, a = this._dataParameters.bbox === e.bbox;
    return t && i && r && a;
  }
  async _getProjectedFullExtent(e) {
    try {
      return await te(this.layer.fullExtent, e);
    } catch {
      try {
        const i = (await A(this.layer.url, { query: { option: "footprints", outSR: e.wkid || JSON.stringify(e.toJSON()), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
        return i ? T.fromJSON(i) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(e) {
    e.type === "vector-field" && (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null }));
  }
};
s([o()], c.prototype, "attached", void 0), s([o()], c.prototype, "container", void 0), s([o()], c.prototype, "layer", void 0), s([o()], c.prototype, "timeExtent", void 0), s([o()], c.prototype, "type", void 0), s([o()], c.prototype, "view", void 0), s([o()], c.prototype, "updating", null), c = s([f("geoscene.views.2d.layers.imagery.VectorFieldView2D")], c);
const le = c, he = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.view = null;
    }
    async fetchPopupFeatures(i, r) {
      const { layer: a } = this;
      if (!i)
        throw new V("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: a });
      const { popupEnabled: n } = a, l = re(a, r);
      if (!n || l == null)
        throw new V("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: n, popupTemplate: l });
      const d = await l.getRequiredFields(), p = new C();
      p.timeExtent = this.timeExtent, p.geometry = i, p.outFields = d, p.outSpatialReference = i.spatialReference;
      const { resolution: m, spatialReference: g } = this.view, w = this.view.type === "2d" ? new E(m, m, g) : new E(0.5 * m, 0.5 * m, g), { returnTopmostRaster: u, showNoDataRecords: B } = l.layerOptions || { returnTopmostRaster: !0, showNoDataRecords: !1 }, k = { returnDomainValues: !0, returnTopmostRaster: u, pixelSize: w, showNoDataRecords: B, signal: r != null ? r.signal : null };
      return a.queryVisibleRasters(p, k).then((F) => F);
    }
    canResume() {
      var i;
      return !!super.canResume() && !((i = this.timeExtent) != null && i.isEmpty);
    }
  };
  return s([o()], t.prototype, "layer", void 0), s([o()], t.prototype, "suspended", void 0), s([o(U)], t.prototype, "timeExtent", void 0), s([o()], t.prototype, "view", void 0), t = s([f("geoscene.views.layers.ImageryLayerView")], t), t;
};
let v = class extends he(ae(H(J))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1, this._highlightGraphics = new M(), this._highlightView = void 0, this.layer = null, this.subview = null;
  }
  get pixelData() {
    const { subview: e } = this;
    return this.updating || !e ? null : "getPixelData" in e ? e.getPixelData() : null;
  }
  async hitTest(e, t) {
    return this.subview ? [{ type: "graphic", graphic: this.subview.hitTest(e), layer: this.layer, mapPoint: e }] : null;
  }
  update(e) {
    var t;
    (t = this.subview) == null || t.update(e);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.view && (this._highlightView = new L({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new G(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container)), this.addAttachHandles([x(() => this.layer.blendMode ?? "normal", (e) => this.subview && (this.subview.container.blendMode = e), R), x(() => this.layer.effect ?? null, (e) => this.subview && (this.subview.container.effect = e), R), x(() => this.layer.exportImageServiceParameters.version, (e) => {
      e && this._exportImageVersion !== e && (this._exportImageVersion = e, this.requestUpdate());
    }, $), x(() => this.timeExtent, (e) => {
      const { subview: t } = this;
      t && (t.timeExtent = e, "redraw" in t ? this.requestUpdate() : t.redrawOrRefetch());
    }, $), this.layer.on("redraw", () => {
      const { subview: e } = this;
      e && ("redraw" in e ? e.redraw() : e.redrawOrRefetch());
    }), x(() => this.layer.renderer, () => this._setSubView())]);
  }
  detach() {
    var e, t;
    this.layer.decreaseRasterJobHandlerUsage(), this.container.removeAllChildren(), this._detachSubview(this.subview), (e = this.subview) == null || e.destroy(), this.subview = null, (t = this._highlightView) == null || t.destroy(), this._exportImageVersion = -1;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e, t) {
    if (!((Array.isArray(e) ? e[0] : S.isCollection(e) ? e.at(0) : e) instanceof b))
      return { remove: () => {
      } };
    let i = [];
    return Array.isArray(e) || S.isCollection(e) ? i = e.map((r) => r.clone()) : e instanceof b && (i = [e.clone()]), this._highlightGraphics.addMany(i), { remove: () => {
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
    var i, r;
    if (!this.view)
      return;
    const e = (i = this.layer.renderer) == null ? void 0 : i.type;
    let t = "imagery";
    if (e === "vector-field" ? t = "imageryVF" : e === "flow" && (t = "flow"), this.subview) {
      const { type: a } = this.subview;
      if (a === t)
        return this._attachSubview(this.subview), void (a === "flow" ? this.subview.redrawOrRefetch() : a === "imagery" && this.layer.format === "lerc" ? this.subview.redraw() : this.requestUpdate());
      this._detachSubview(this.subview), (r = this.subview) == null || r.destroy();
    }
    this.subview = t === "imagery" ? new se({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : t === "imageryVF" ? new le({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new j({ layer: this.layer, layerView: this }), this._attachSubview(this.subview), this.requestUpdate();
  }
  _attachSubview(e) {
    e && !e.attached && (e.attach(), e.attached = !0, this.container.addChildAt(e.container, 0), e.container.blendMode = this.layer.blendMode, e.container.effect = this.layer.effect);
  }
  _detachSubview(e) {
    e != null && e.attached && (this.container.removeChild(e.container), e.detach(), e.attached = !1);
  }
};
s([o()], v.prototype, "pixelData", null), s([o()], v.prototype, "subview", void 0), v = s([f("geoscene.views.2d.layers.ImageryLayerView2D")], v);
const yt = v;
export {
  yt as default
};
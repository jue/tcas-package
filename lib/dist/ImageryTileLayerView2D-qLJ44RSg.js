import { dr as V, dh as A, hR as X, s as j, e as n, d as u, a as T, c9 as Y, X as K, G as F, M as Z, fx as ee, E as te, F as ie, r as y, l as se, w as k, ab as re, c2 as ae, g as C, de as E, dp as le, dq as oe, f as x, ax as ne, y as G, b as Q, hS as he, eQ as $, P as ue } from "./index-j1oaLRcp.js";
import { _ as ce, d as de } from "./RasterVFDisplayObject-LQcecD0Q.js";
import { f as pe, u as ye } from "./LayerView-u7tKPPGO.js";
import { d as me, w as fe, b as ge } from "./WGLContainer-Za_nqieP.js";
import { r as N, o as H } from "./TileContainer-_mN9fJMf.js";
import { I as z } from "./Utils-Mkp4Julu.js";
import { u as be, l as we } from "./pixelUtils-Kz9o33NO.js";
import { g as B, u as q, s as _e, i as ve } from "./RawBlockCache-HTmINype.js";
import { L as Pe, $ as Te, k as W, B as Ie } from "./rasterProjectionHelper-9TmFtAJj.js";
import { r as J } from "./util-S-jvKCCd.js";
import { j as Re } from "./dataUtils-mSVXnWd6.js";
import { d as Se } from "./popupUtils-GfxNYuRl.js";
import { i as xe } from "./RefreshableLayerView-nMKrSELX.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./VertexArrayObject-WfBtioi6.js";
import "./Texture-PL6UBkoQ.js";
import "./enums-n72NRQQZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./enums-YM9SAu8u.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./MaterialKey-tb9URCR8.js";
import "./earcut-80XuLCNX.js";
class Ve extends N {
  constructor(i, t, s, r, a, l = null) {
    super(i, t, s, r, a), this.bitmap = new me(l, null, null), this.bitmap.coordScale = [r, a], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy(), this.bitmap = null, this.stage = null;
  }
  set stencilRef(i) {
    this.bitmap.stencilRef = i;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  setTransform(i, t) {
    super.setTransform(i, t), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  _createTransforms() {
    return { dvs: V(), tileMat3: V() };
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
let Ce = class extends H {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = !1;
  }
  createTile(i) {
    const t = this._getTileBounds(i), [s, r] = this._tileInfoView.tileInfo.size;
    return new Ve(i, t[0], t[3], s, r);
  }
  prepareRenderPasses(i) {
    const t = i.registerRenderPass({ name: "imagery (tile)", brushes: [fe.raster], target: () => this.children.map((s) => s.bitmap), drawPhase: z.MAP });
    return [...super.prepareRenderPasses(i), t];
  }
  doRender(i) {
    this.visible && i.drawPhase === z.MAP && super.doRender(i);
  }
  _getTileBounds(i) {
    const t = this._tileInfoView.getTileBounds(A(), i);
    if (this.isCustomTilingScheme && i.world) {
      const { tileInfo: s } = this._tileInfoView, r = X(s.spatialReference);
      if (r) {
        const { resolution: a } = s.lodAt(i.level), l = r / a % s.size[0], o = l ? (s.size[0] - l) * a : 0;
        t[0] -= o * i.world, t[2] -= o * i.world;
      }
    }
    return t;
  }
};
const ze = [0, 0], O = j.getLogger("geoscene.views.2d.layers.ImageryTileLayerView2D");
let d = class extends Y {
  constructor() {
    super(...arguments), this._emptyTilePixelBlock = null, this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._srcResolutions = null, this.previousLOD = null, this._needBlockCacheUpdate = !1, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._isCustomTilingScheme = !1, this._globalUpdateRequested = !1, this.attached = !1, this.container = null, this.layer = null, this.timeExtent = null, this.redrawOrRefetch = K((e, i) => !this.previousLOD || this.layerView.suspended ? Promise.resolve() : e ? this.doRefresh() : this._redrawImage(i));
  }
  get useWebGLForProcessing() {
    var e;
    return (e = this._get("useWebGLForProcessing")) == null || e;
  }
  set useWebGLForProcessing(e) {
    this._set("useWebGLForProcessing", e);
  }
  get useProgressiveUpdate() {
    return this._get("useProgressiveUpdate") == null || this._get("useProgressiveUpdate");
  }
  set useProgressiveUpdate(e) {
    if (this._tileStrategy && this.useProgressiveUpdate !== e) {
      this._tileStrategy.destroy(), this.container.removeAllChildren();
      const i = this._getCacheSize(e);
      this._tileStrategy = new F({ cachePolicy: "purge", acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), cacheSize: i, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", e), this.layerView.requestUpdate();
    }
  }
  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume();
    const { extent: i, resolution: t, scale: s } = e.state, r = this._tileInfoView.getClosestInfoForScale(s);
    if (this.layer.raster) {
      var a;
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const l = this._srcResolutions[r.level], o = i.toJSON ? i : Z.fromJSON(i);
        B(this._blockCacheRegistryUrl, this._blockCacheRegistryId, o, t, l, this.layer.raster.ioConfig.sampling);
      }
      this._needBlockCacheUpdate = !1, ((a = this.previousLOD) == null ? void 0 : a.level) !== r.level && (this.previousLOD = r, this._symbolizerParams == null || this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._tileStrategy.updateCacheSize(0));
    }
  }
  moveEnd() {
    !this.layerView.hasTilingEffects && this.useProgressiveUpdate || (this._abortController && this._abortController.abort(), this._abortController = new AbortController(), this._fetchQueue.length === 0 && this._redrawImage(this._abortController.signal).then(() => {
      this._globalUpdateRequested = !1, this.layerView.requestUpdate();
    }));
    const e = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy.updateCacheSize(e), this.layerView.requestUpdate();
  }
  get updating() {
    return this._fetchQueue.updating || this._globalUpdateRequested || !(!this.updatingHandles || !this.updatingHandles.updating);
  }
  attach() {
    ee().supportsTextureFloat || (this.useWebGLForProcessing = !1), this._initializeTileInfo(), this._tileInfoView = new te(this.layerView.tileInfo, this.layerView.fullExtent);
    const e = this._computeFetchConcurrency();
    this._fetchQueue = new ie({ tileInfoView: this._tileInfoView, concurrency: e, process: (t, s) => this._fetchTile1(t, s) });
    const i = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new F({ cachePolicy: "purge", acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), cacheSize: i, tileInfoView: this._tileInfoView }), this._updateBlockCacheRegistry();
  }
  detach() {
    this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, q(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryUrl = this._blockCacheRegistryId = null;
  }
  acquireTile(e) {
    const i = this.container.createTile(e);
    return this._enqueueTileFetch(i), this.layerView.requestUpdate(), this._needBlockCacheUpdate = !0, this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, i;
  }
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this.container.removeChild(e), e.once("detach", () => {
      e.destroy(), this.layerView.requestUpdate();
    }), this.layerView.requestUpdate();
  }
  createEmptyTilePixelBlock(e = null) {
    const i = e == null || e.join(",") === this._tileInfoView.tileInfo.size.join(",");
    if (i && y(this._emptyTilePixelBlock))
      return this._emptyTilePixelBlock;
    e = e || this._tileInfoView.tileInfo.size;
    const [t, s] = e, r = new be({ width: t, height: s, pixels: [new Uint8Array(t * s)], mask: new Uint8Array(t * s), pixelType: "u8" });
    return i && (this._emptyTilePixelBlock = r), r;
  }
  _fetchTile1(e, i) {
    const t = !se(i) && i.signal, s = this.canUseWebGLForProcessing(), { layerView: r } = this, a = !r.tileInfo.isWrappable && y(Pe(r.view.spatialReference)), l = { allowPartialFill: !0, datumTransformation: r.datumTransformation, interpolation: s ? "nearest" : this.layer.interpolation, registryId: this._blockCacheRegistryId, requestRawData: s, signal: k(t), srcResolution: this._srcResolutions[e.level], timeExtent: r.timeExtent, tileInfo: r.tileInfo, disableWrapAround: a };
    return this.fetchTile(e, l);
  }
  _getCacheSize(e) {
    return e ? 40 : 0;
  }
  _initializeTileInfo() {
    const e = this.layerView.view.spatialReference, i = new re({ x: this.layerView.fullExtent.xmin, y: this.layerView.fullExtent.ymax, spatialReference: e }), { scales: t, srcResolutions: s, isCustomTilingScheme: r } = Te(this.layer.rasterInfo, e), a = ae.create({ spatialReference: e, size: 512, scales: t });
    (a.origin.x === 0 || a.origin.x > i.x) && (a.origin = i), this._isCustomTilingScheme = r, this.layerView.set("tileInfo", a), this._srcResolutions = s ?? [];
  }
  _computeFetchConcurrency() {
    const { blockBoundary: e } = this.layer.rasterInfo.storageInfo, i = e[e.length - 1];
    return (i.maxCol - i.minCol + 1) * (i.maxRow - i.minRow + 1) > 64 ? 2 : 10;
  }
  async _enqueueTileFetch(e, i) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key), { bandIds: s } = this.layer;
        let r = !this.useProgressiveUpdate || this.layerView.hasTilingEffects && !this._globalSymbolizerParams;
        if (this._globalUpdateRequested && !this.layerView.moving && this._fetchQueue.length === 0) {
          r = !1;
          try {
            await this._redrawImage(this._abortController && this._abortController.signal);
          } catch (o) {
            C(o) && O.error(o);
          }
          this._globalUpdateRequested = !1;
        }
        !this.canUseWebGLForProcessing() && this.type !== "rasterVF" || this.layerView.hasTilingEffects || this._symbolizerParams != null || this._updateSymbolizerParams();
        const a = this._tileInfoView.getTileCoords(ze, e.key), l = this._tileInfoView.getTileResolution(e.key);
        await this.updateTileSource(e, { source: t, symbolizerParams: this._symbolizerParams, globalSymbolizerParams: this._globalSymbolizerParams, suspended: r, bandIds: s, coords: a, resolution: l }), e.once("attach", () => this.layerView.requestUpdate()), this.container.addChild(e);
      } catch (t) {
        C(t) || O.error(t);
      }
      this.layerView.requestUpdate();
    }
  }
  async _redrawImage(e) {
    if (this.container.children.length === 0)
      return;
    await this.updatingHandles.addPromise(this.layer.updateRenderer()), this.layerView.hasTilingEffects ? await this._updateGlobalSymbolizerParams(e) : (this._updateSymbolizerParams(), this._globalSymbolizerParams = null);
    const i = this.container.children.map(async (t) => this.updateTileSymbolizerParameters(t, { local: this._symbolizerParams, global: this._globalSymbolizerParams }));
    await E(i), this.container.requestRender();
  }
  async _updateGlobalSymbolizerParams(e) {
    const i = { srcResolution: this._srcResolutions[this.previousLOD.level], registryId: this._blockCacheRegistryId, signal: e }, t = await this.layer.fetchPixels(this.layerView.view.extent, this.layerView.view.width, this.layerView.view.height, i);
    if (!t || !t.pixelBlock)
      return;
    const s = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: we(t.pixelBlock, this.layer.bandIds), isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: this.previousLOD.resolution, y: this.previousLOD.resolution }, bandIds: this.layer.bandIds });
    !this.canUseWebGLForProcessing() && s && s.type === "stretch" && this.layer.renderer && this.layer.renderer.type === "raster-stretch" && (s.factor = s.factor.map((r) => 255 * r), s.outMin = Math.round(255 * s.outMin), s.outMax = Math.round(255 * s.outMax)), this._globalSymbolizerParams = s;
  }
  _updateSymbolizerParams() {
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: this.previousLOD.resolution, y: this.previousLOD.resolution }, bandIds: this.layer.bandIds });
  }
  _updateBlockCacheRegistry(e = !1) {
    const { url: i, rasterInfo: t, raster: s } = this.layer, { multidimensionalDefinition: r } = this.layer.normalizeRasterFetchOptions({ multidimensionalDefinition: this.layer.multidimensionalDefinition, timeExtent: this.layerView.timeExtent }), a = t != null && t.multidimensionalInfo ? s.getSliceIndex(r) : null, l = ve(i, a);
    if (l !== this._blockCacheRegistryUrl) {
      if (this._blockCacheRegistryUrl != null && q(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = _e(l, this.layer.raster.rasterInfo), e) {
        const o = this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale), c = this._srcResolutions[o.level];
        B(l, this._blockCacheRegistryId, this.layerView.view.extent, this.layerView.view.resolution, c, this.layer.raster.ioConfig.sampling);
      }
      this._blockCacheRegistryUrl = l;
    }
  }
  async doRefresh() {
    await this.updatingHandles.addPromise(this.layer.updateRenderer()), this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._updateBlockCacheRegistry(!0), this._fetchQueue.reset();
    const e = [];
    this._tileStrategy.tiles.forEach((i) => e.push(this._enqueueTileFetch(i))), await E(e);
  }
};
n([u()], d.prototype, "_fetchQueue", void 0), n([u()], d.prototype, "_globalUpdateRequested", void 0), n([u()], d.prototype, "attached", void 0), n([u()], d.prototype, "container", void 0), n([u()], d.prototype, "layer", void 0), n([u()], d.prototype, "layerView", void 0), n([u()], d.prototype, "type", void 0), n([u()], d.prototype, "useWebGLForProcessing", null), n([u()], d.prototype, "useProgressiveUpdate", null), n([u()], d.prototype, "timeExtent", void 0), n([u()], d.prototype, "updating", null), d = n([T("geoscene.views.2d.layers.imagery.BaseImageryTileSubView2D")], d);
let w = class extends d {
  constructor() {
    super(...arguments), this.container = null, this.layer = null, this.type = "raster";
  }
  attach() {
    super.attach(), this.container = new Ce(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme;
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this.container = null;
  }
  canUseWebGLForProcessing() {
    return this.useWebGLForProcessing && this.layer.symbolizer.canRenderInWebGL && !(this.layer.interpolation === "majority" && J(this.layer));
  }
  fetchTile(e, i) {
    return this.layer.fetchTile(e.level, e.row, e.col, i);
  }
  async updateTileSource(e, i) {
    const { bandIds: t } = this.layer, s = this._getLayerInterpolation(), r = this.canUseWebGLForProcessing(), { source: a, symbolizerParams: l, globalSymbolizerParams: o, suspended: c, coords: g, resolution: p } = i, { bitmap: h } = e;
    if ([h.x, h.y] = g, h.resolution = p, a && y(a) && y(a.pixelBlock)) {
      const m = { extent: a.extent, pixelBlock: a.pixelBlock };
      if (h.rawPixelData = m, r)
        h.source = a.pixelBlock, h.isRendereredSource = !1;
      else {
        const f = await this.layer.applyRenderer(m, (o == null ? void 0 : o.type) === "stretch" ? o : null);
        h.source = f, h.isRendereredSource = !0;
      }
      h.symbolizerParameters = r ? l : null, r ? h.transformGrid || (h.transformGrid = a.transformGrid) : h.transformGrid = null;
    } else {
      const m = this.createEmptyTilePixelBlock();
      h.source = m, h.symbolizerParameters = r ? l : null, h.transformGrid = null;
    }
    h.bandIds = r ? t : null, h.width = this._tileInfoView.tileInfo.size[0], h.height = this._tileInfoView.tileInfo.size[1], h.interpolation = s, h.suspended = c, h.invalidateTexture();
  }
  async updateTileSymbolizerParameters(e, i) {
    const { local: t, global: s } = i, { bandIds: r } = this.layer, a = this._getLayerInterpolation(), l = this.canUseWebGLForProcessing(), { bitmap: o } = e, { rawPixelData: c } = o;
    !l && y(c) ? (o.source = await this.layer.applyRenderer(c, (s == null ? void 0 : s.type) === "stretch" ? s : null), o.isRendereredSource = !0) : (o.isRendereredSource && y(c) && (o.source = c.pixelBlock), o.isRendereredSource = !1), o.symbolizerParameters = l ? s || t : null, o.bandIds = l ? r : null, o.interpolation = a, o.suspended = !1;
  }
  _getLayerInterpolation() {
    const e = this.layer.renderer.type;
    if (e === "raster-colormap" || e === "unique-value" || e === "class-breaks")
      return "nearest";
    const { interpolation: i } = this.layer, { renderer: t } = this.layer;
    return t.type === "raster-stretch" && t.colorRamp != null ? i === "bilinear" || i === "cubic" ? "bilinear" : "nearest" : i;
  }
};
n([u()], w.prototype, "container", void 0), n([u()], w.prototype, "layer", void 0), n([u()], w.prototype, "type", void 0), w = n([T("geoscene.views.2d.layers.imagery.ImageryTileView2D")], w);
const Ue = w;
class ke extends N {
  constructor(i, t, s, r, a, l = null) {
    super(i, t, s, r, a), this.tileData = new ce(l), this.tileData.coordScale = [r, a], this.tileData.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.tileData.destroy(), this.tileData = null, this.stage = null;
  }
  set stencilRef(i) {
    this.tileData.stencilRef = i;
  }
  get stencilRef() {
    return this.tileData.stencilRef;
  }
  _createTransforms() {
    return { dvs: V(), tileMat3: V() };
  }
  setTransform(i, t) {
    super.setTransform(i, t);
    const s = t / (i.resolution * i.pixelRatio), r = this.transforms.tileMat3, [a, l] = this.tileData.offset, o = [this.x + a * t, this.y - l * t], [c, g] = i.toScreenNoRotation([0, 0], o), { symbolTileSize: p } = this.tileData.symbolizerParameters, h = Math.round((this.width - this.tileData.offset[0]) / p) * p, m = Math.round((this.height - this.tileData.offset[1]) / p) * p, f = h / this.rangeX * s, I = m / this.rangeY * s;
    le(r, f, 0, 0, 0, I, 0, c, g, 1), oe(this.transforms.dvs, i.displayViewMat3, r), this.tileData.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class Le extends H {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = !1, this.symbolTypes = ["triangle"];
  }
  createTile(i) {
    const t = this._tileInfoView.getTileBounds(A(), i), [s, r] = this._tileInfoView.tileInfo.size;
    return new ke(i, t[0], t[3], s, r);
  }
  prepareRenderPasses(i) {
    const t = i.registerRenderPass({ name: "imagery (vf tile)", brushes: [ge], target: () => this.children.map((s) => s.tileData), drawPhase: z.MAP });
    return [...super.prepareRenderPasses(i), t];
  }
  doRender(i) {
    this.visible && i.drawPhase === z.MAP && this.symbolTypes.forEach((t) => {
      i.renderPass = t, super.doRender(i);
    });
  }
}
let _ = class extends d {
  constructor() {
    super(...arguments), this._handle = null, this.container = null, this.layer = null, this.type = "rasterVF";
  }
  canUseWebGLForProcessing() {
    return !1;
  }
  async fetchTile(e, i) {
    i = { ...i, interpolation: "nearest", requestProjectedLocalDirections: !0 };
    const t = await this.layer.fetchTile(e.level, e.row, e.col, i);
    return this.layer.rasterInfo.dataType === "vector-magdir" && t != null && t.pixelBlock && (t.pixelBlock = await this.layer.convertVectorFieldData(t.pixelBlock, i)), t;
  }
  updateTileSource(e, i) {
    const t = i.symbolizerParams, { tileData: s } = e;
    s.key = e.key, s.width = this._tileInfoView.tileInfo.size[0], s.height = this._tileInfoView.tileInfo.size[1];
    const { symbolTileSize: r } = t, { source: a } = i;
    if (s.offset = this._getTileSymbolOffset(s.key, r), y(a) && y(a.pixelBlock)) {
      const l = { extent: a.extent, pixelBlock: a.pixelBlock };
      s.rawPixelData = l, s.symbolizerParameters = t, s.source = this._sampleVectorFieldData(a.pixelBlock, t, s.offset);
    } else {
      const l = [Math.round((this._tileInfoView.tileInfo[0] - s.offset[0]) / r), Math.round((this._tileInfoView.tileInfo[1] - s.offset[1]) / r)], o = this.createEmptyTilePixelBlock(l);
      s.source = o, s.symbolizerParameters = t;
    }
    return s.invalidateVAO(), Promise.resolve(null);
  }
  updateTileSymbolizerParameters(e, i) {
    var t;
    const s = i.local, { symbolTileSize: r } = s, { tileData: a } = e;
    a.offset = this._getTileSymbolOffset(a.key, r);
    const l = a.symbolizerParameters.symbolTileSize;
    return a.symbolizerParameters = s, y((t = a.rawPixelData) == null ? void 0 : t.pixelBlock) && l !== r && (a.source = this._sampleVectorFieldData(a.rawPixelData.pixelBlock, a.symbolizerParameters, a.offset)), Promise.resolve(null);
  }
  attach() {
    super.attach(), this.container = new Le(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this._updateSymbolType(this.layer.renderer), this._handle = x(() => this.layer.renderer, (e) => this._updateSymbolType(e));
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this._handle.remove(), this._handle = null;
  }
  _getTileSymbolOffset(e, i) {
    const t = e.col * this._tileInfoView.tileInfo.size[0] % i, s = e.row * this._tileInfoView.tileInfo.size[1] % i;
    return [t > i / 2 ? i - t : -t, s > i / 2 ? i - s : -s];
  }
  _sampleVectorFieldData(e, i, t) {
    const { symbolTileSize: s } = i;
    return Re(e, "vector-uv", s, t);
  }
  _updateSymbolType(e) {
    e.type === "vector-field" && (this.container.symbolTypes = e.style === "wind-barb" ? ["scalar", "triangle"] : e.style === "simple-scalar" ? ["scalar"] : ["triangle"]);
  }
};
n([u()], _.prototype, "container", void 0), n([u()], _.prototype, "layer", void 0), n([u()], _.prototype, "type", void 0), _ = n([T("geoscene.views.2d.layers.imagery.VectorFieldTileView2D")], _);
const De = _, Fe = (e) => {
  let i = class extends e {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    _getfullExtent() {
      return this.projectFullExtent(this.view.spatialReference);
    }
    get hasTilingEffects() {
      return this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment;
    }
    get datumTransformation() {
      return W(k(this.layer.fullExtent), this.view.spatialReference, !0);
    }
    supportsSpatialReference(t) {
      return !!this.projectFullExtent(t);
    }
    projectFullExtent(t) {
      const s = k(this.layer.fullExtent), r = W(s, t, !1);
      return Ie(s, t, r);
    }
    async fetchPopupFeatures(t, s) {
      const { layer: r } = this;
      if (!t)
        return Promise.reject(new G("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: r }));
      const { popupEnabled: a } = r, l = Se(r, s);
      if (!a || !y(l))
        throw new G("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: a, popupTemplate: l });
      const o = [], { value: c, magdirValue: g } = await r.identify(t, { timeExtent: this.timeExtent });
      let p = "";
      if (c && c.length) {
        var h, m;
        p = r.type === "imagery-tile" && r.hasStandardTime() && c[0] != null ? c.map((S) => r.getStandardTimeValue(S)).join(", ") : c.join(", ");
        const f = { ObjectId: 0 }, I = "Raster.ServicePixelValue";
        f[I] = this._formatAttributeValue(p, I);
        const U = (h = r.rasterInfo) == null || (m = h.attributeTable) == null ? void 0 : m.features;
        if (U && U.length > 0) {
          const S = U.filter((b) => {
            const P = b.attributes.value || b.attributes.Value || b.attributes.VALUE;
            return String(P) === p;
          });
          if (S.length > 0) {
            const b = S[0];
            if (b) {
              for (const P in b.attributes)
                if (b.attributes.hasOwnProperty(P)) {
                  const D = this._rasterFieldPrefix + P;
                  f[D] = this._formatAttributeValue(b.attributes[P], D);
                }
            }
          }
        }
        const L = r.rasterInfo.dataType;
        L !== "vector-magdir" && L !== "vector-uv" || (f["Raster.Magnitude"] = g == null ? void 0 : g[0], f["Raster.Direction"] = g == null ? void 0 : g[1]);
        const R = new Q(this.fullExtent.clone(), null, f);
        R.layer = r, R.sourceLayer = R.layer, o.push(R);
      }
      return o;
    }
    _formatAttributeValue(t, s) {
      if (typeof t == "string") {
        const r = this.layer.popupTemplate && this.layer.popupTemplate.fieldInfos, a = this._getFieldInfo(r, s), l = a && a.format;
        if (l) {
          let o, c;
          return t.trim().indexOf(",") > -1 ? (o = ",", c = o + " ", this._formatDelimitedString(t, o, c, l)) : t.trim().indexOf(" ") > -1 ? (o = c = " ", this._formatDelimitedString(t, o, c, l)) : this._formatNumberFromString(t, l);
        }
      }
      return t;
    }
    _getFieldInfo(t, s) {
      if (!t || !t.length || !s)
        return;
      const r = s.toLowerCase();
      let a;
      return t.some((l) => !(!l.fieldName || l.fieldName.toLowerCase() !== r && l.fieldName.toLowerCase() !== r.replace(/ /g, "_")) && (a = l, !0)), a;
    }
    _formatDelimitedString(t, s, r, a) {
      return t && s && r && a ? t.trim().split(s).map((l) => this._formatNumberFromString(l, a)).join(r) : t;
    }
    _formatNumberFromString(t, s) {
      if (!t || !s)
        return t;
      const r = Number(t);
      return isNaN(r) ? t : s.format(r);
    }
  };
  return n([u()], i.prototype, "layer", void 0), n([u(ne)], i.prototype, "timeExtent", void 0), n([u()], i.prototype, "view", void 0), n([u()], i.prototype, "fullExtent", null), n([u()], i.prototype, "tileInfo", void 0), n([u({ readOnly: !0 })], i.prototype, "hasTilingEffects", null), i = n([T("geoscene.views.layers.ImageryTileLayerView")], i), i;
}, M = j.getLogger("geoscene.views.2d.layers.ImageryTileLayerView2D");
let v = class extends Fe(xe(pe(ye))) {
  constructor() {
    super(...arguments), this._useWebGLForProcessing = !0, this._useProgressiveUpdate = !0, this.subview = null;
  }
  get useWebGLForProcessing() {
    return this._useWebGLForProcessing;
  }
  set useWebGLForProcessing(e) {
    this._useWebGLForProcessing = e, this.subview && "useWebGLForProcessing" in this.subview && (this.subview.useWebGLForProcessing = e);
  }
  get useProgressiveUpdate() {
    return this._useWebGLForProcessing;
  }
  set useProgressiveUpdate(e) {
    this._useProgressiveUpdate = e, this.subview && "useProgressiveUpdate" in this.subview && (this.subview.useProgressiveUpdate = e);
  }
  update(e) {
    this.subview.update(e), this.notifyChange("updating");
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._updateSubview(), this.handles.add([he(this.layer, ["bandIds", "renderer", "interpolation", "multidimensionalDefinition"], (e, i, t) => {
      const s = t === "multidimensionalDefinition", r = t === "interpolation" && (e === "majority" || i === "majority") && J(this.layer), a = t === "renderer" && i.type !== e.type;
      a && this._updateSubview();
      const l = s || r || a;
      this.subview.redrawOrRefetch(l).catch((o) => {
        C(o) || M.error(o);
      }), this.notifyChange("updating");
    }), x(() => {
      var e;
      return (e = this.layer.blendMode) != null ? e : "normal";
    }, (e) => {
      this.subview.container.blendMode = e;
    }, $), x(() => {
      var e;
      return (e = this.layer.effect) != null ? e : null;
    }, (e) => {
      this.subview.container.effect = e;
    }, $), x(() => this.timeExtent, () => {
      this.subview.timeExtent = this.timeExtent, this.subview.redrawOrRefetch(!0).catch((e) => {
        C(e) || M.error(e);
      });
    }, ue)], "attach");
  }
  detach() {
    var e;
    this.handles.remove("attach"), this.layer.decreaseRasterJobHandlerUsage(), this._detachSubview(this.subview), (e = this.subview) == null || e.destroy(), this.subview = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.subview.moveEnd();
  }
  async hitTest(e, i) {
    return [new Q({ attributes: {}, geometry: e.clone() })];
  }
  doRefresh() {
    return this.subview.doRefresh();
  }
  _updateSubview() {
    const e = this.layer.renderer.type === "vector-field" ? "rasterVF" : this.layer.renderer.type === "flow" ? "flow" : "raster";
    if (this.subview) {
      var i;
      if (this.subview.type === e)
        return void this._attachSubview(this.subview);
      this._detachSubview(this.subview), (i = this.subview) == null || i.destroy(), this.subview = null;
    }
    const { layer: t } = this;
    let s;
    s = e === "rasterVF" ? new De({ layer: t, layerView: this }) : e === "flow" ? new de({ layer: t, layerView: this }) : new Ue({ layer: t, layerView: this }), "useWebGLForProcessing" in s && (s.useWebGLForProcessing = this._useWebGLForProcessing), "useProgressiveUpdate" in s && (s.useProgressiveUpdate = this._useProgressiveUpdate), "previousLOD" in s && (s.previousLOD = this.subview && "previousLOD" in this.subview && this.subview.previousLOD), this._attachSubview(s), this.subview = s, this.requestUpdate();
  }
  _attachSubview(e) {
    e && !e.attached && (e.attach(), e.attached = !0, this.container.addChildAt(e.container, 0), e.container.blendMode = this.layer.blendMode, e.container.effect = this.layer.effect);
  }
  _detachSubview(e) {
    e != null && e.attached && (this.container.removeChild(e.container), e.detach(), e.attached = !1);
  }
};
n([u()], v.prototype, "subview", void 0), n([u()], v.prototype, "useWebGLForProcessing", null), n([u()], v.prototype, "useProgressiveUpdate", null), v = n([T("geoscene.views.2d.layers.ImageryTileLayerView2D")], v);
const ht = v;
export {
  ht as default
};
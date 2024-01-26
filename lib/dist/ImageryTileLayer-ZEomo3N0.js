import { s as Ge, e as w, d as S, M as L, iz as me, m as G, c2 as ne, bK as Ue, a as K, iA as Ve, l as z, r as k, di as et, C as Ye, gC as tt, y as B, ab as N, w as Z, eN as it, aD as st, x as Xe, de as Ke, eR as nt, R as rt, bt as at, bu as ot, bv as lt, bw as ut, bT as ct, bQ as ht, bF as ft, bz as dt, bG as mt, bY as he, dQ as pt, bW as yt, bs as gt, bJ as xt, B as It, aE as wt, bE as vt } from "./index-j1oaLRcp.js";
import { p as De, l as Qe, e as $e, V as bt, L as St, j as Tt, n as Rt, u as _t, o as Ct, i as kt } from "./rasterRendererHelper-b5LoUup5.js";
import { d as Mt, h as Pt, f as Ft, m as Ot } from "./dataUtils-mSVXnWd6.js";
import { T as Dt, S as $t, p as fe, r as Be, l as re, O as Bt, a as Et, P as At, b as zt, n as pe, N as Ht, x as Lt, c as Nt } from "./RasterSymbolizer-6Tuttxmh.js";
import { i as Ee, m as Ae, x as ze, d as Jt, h as Wt } from "./RawBlockCache-HTmINype.js";
import { y as Se, O as qt, b as jt, v as Gt, s as Ut, a as ke, M as Vt, u as Yt } from "./pixelUtils-Kz9o33NO.js";
import { G as He, L as ye, T as Le, Z as Ne, V as Xt, X as Te, B as Re, D as Kt, K as Qt, N as Zt } from "./rasterProjectionHelper-9TmFtAJj.js";
import { e as ei, f as ti, m as Me, c as ii } from "./utils-jKT7zZbk.js";
import { n as si, z as ni } from "./TilemapCache-0axZcxQ8.js";
import "vue";
import "./ClassBreaksDefinition-nlZvFIvT.js";
import "./colorUtils-tSH3jtgH.js";
const Je = Ge.getLogger("geoscene.layers.mixins.ImageryTileMixin"), ri = (s) => {
  let e = class extends s {
    constructor() {
      super(...arguments), this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.fullExtent = null, this.interpolation = "nearest", this.multidimensionalDefinition = null, this.raster = null, this.rasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.tileInfo = null, this.symbolizer = null;
    }
    set url(t) {
      this._set("url", Ve(t, Je));
    }
    set renderer(t) {
      this._set("renderer", t), this.updateRenderer();
    }
    async convertVectorFieldData(t, i) {
      if (z(t))
        return null;
      const n = this._rasterJobHandler.instance, r = this.rasterInfo.dataType;
      return n ? n.convertVectorFieldData({ pixelBlock: t, dataType: r }, i) : Mt(t, r);
    }
    async createStreamlinesMesh(t, i) {
      const n = this._rasterJobHandler.instance;
      return n ? n.createStreamlinesMesh(t, i) : Pt(t.rendererSettings, t.flowData, k(i.signal) ? i.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(t) {
      const { multidimensionalInfo: i } = this.rasterInfo;
      if (z(i))
        return t;
      let n = t.multidimensionalDefinition || this.multidimensionalDefinition;
      !z(n) && n.length || (n = this._getDefaultSlice());
      const r = t.timeExtent || this.timeExtent;
      if (k(n) && k(r) && (k(r.start) || k(r.end))) {
        var a, o;
        n = n.map((y) => y.clone());
        const u = (a = i.variables.find(({ name: y }) => y === n[0].variableName)) == null || (o = a.dimensions) == null ? void 0 : o.find(({ name: y }) => y === "StdTime"), l = n.find(({ dimensionName: y }) => y === "StdTime");
        if (!u || !l)
          return { ...t, multidimensionalDefinition: null };
        const { start: h, end: c } = r, f = z(h) ? null : h.getTime(), p = z(c) ? null : c.getTime(), m = f ?? p, g = p ?? f;
        if (k(u.values)) {
          const y = u.values.filter((d) => {
            if (Array.isArray(d)) {
              if (m === g)
                return d[0] <= m && d[1] >= m;
              const I = d[0] <= m && d[1] > m || d[0] < g && d[1] >= g, x = d[0] >= m && d[1] <= g || d[0] < m && d[1] > g;
              return I || x;
            }
            return m === g ? d === m : d >= m && d <= g;
          });
          if (y.length) {
            const d = y.sort((I, x) => {
              var _, M, v, T;
              return m === g ? ((v = I[0]) != null ? v : I) - ((T = x[0]) != null ? T : x) : Math.abs(((_ = I[1]) != null ? _ : I) - g) - Math.abs(((M = x[1]) != null ? M : x) - g);
            })[0];
            l.values = [d];
          } else
            n = null;
        } else if (u.hasRegularIntervals && u.extent) {
          const [y, d] = u.extent;
          m > d || g < y ? n = null : l.values = m === g ? [m] : [Math.max(y, m), Math.min(d, g)];
        }
      }
      return { ...t, multidimensionalDefinition: n };
    }
    async updateRenderer() {
      if (!this.loaded || JSON.stringify(this._cachedRendererJson) === JSON.stringify(this.renderer))
        return;
      const t = this._rasterJobHandler.instance;
      t && (this.symbolizer.rendererJSON = $e(this.renderer.toJSON()), this.symbolizer.bind(), await t.updateSymbolizer(this.symbolizer), this._cachedRendererJson = this.renderer.toJSON());
    }
    async applyRenderer(t, i) {
      const n = t && t.pixelBlock;
      if (!(k(n) && n.pixels && n.pixels.length > 0))
        return null;
      let r;
      await this.updateRenderer();
      const a = this._rasterJobHandler.instance, { bandIds: o } = this;
      return r = a ? await a.symbolize({ ...t, simpleStretchParams: i, bandIds: o }) : this.symbolizer.symbolize({ ...t, simpleStretchParams: i, bandIds: o }), r;
    }
    getTileUrl(t, i, n) {
      return this.raster.datasetFormat === "RasterTileServer" ? `${this.url}/tile/${t}/${i}/${n}` : "";
    }
    getCompatibleTileInfo(t, i, n = !1) {
      if (!this.loaded || z(i))
        return null;
      if (n && t.equals(this.spatialReference))
        return this.tileInfo;
      const r = et(t);
      return ne.create({ size: 256, spatialReference: t, origin: r ? { x: r.origin[0], y: r.origin[1] } : { x: i.xmin, y: i.ymax } });
    }
    getCompatibleFullExtent(t) {
      return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(t) || (this._compatibleFullExtent = this.raster.computeExtent(t)), this._compatibleFullExtent) : null;
    }
    async fetchTile(t, i, n, r = {}) {
      if (r.requestAsImageElement) {
        const a = this.getTileUrl(t, i, n);
        return Ye(a, { responseType: "image", query: { ...this.refreshParameters, ...this.raster.ioConfig.customFetchParameters }, signal: r.signal }).then((o) => o.data);
      }
      if (k(this.rasterInfo.multidimensionalInfo) && (r = this.normalizeRasterFetchOptions(r), z(r.multidimensionalDefinition))) {
        const a = r.tileInfo || this.rasterInfo.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(t, i, n, a), pixelBlock: null };
      }
      return await this._initJobHandler(), this.renderer.type === "raster-shaded-relief" && (r = { ...r, buffer: { cols: 1, rows: 1 } }), this.raster.fetchTile(t, i, n, r);
    }
    async fetchPixels(t, i, n, r = {}) {
      return k(this.rasterInfo.multidimensionalInfo) && (r = this.normalizeRasterFetchOptions(r), z(r.multidimensionalDefinition)) ? { extent: t, pixelBlock: null } : (await this._initJobHandler(), this.raster.fetchPixels(t, i, n, r));
    }
    async identify(t, i = {}) {
      return k(this.rasterInfo.multidimensionalInfo) && (i = this.normalizeRasterFetchOptions(i), z(i.multidimensionalDefinition)) ? { location: t, value: null } : this.raster.identify(t, i);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      var t;
      const i = this.rasterInfo.multidimensionalInfo;
      if (!k(i) || this.rasterInfo.dataType !== "standard-time")
        return !1;
      const n = (t = this.multidimensionalDefinition[0]) == null ? void 0 : t.variableName;
      return i.variables.some((r) => r.name === n && r.dimensions.some((a) => a.name === "StdTime"));
    }
    getStandardTimeValue(t) {
      return new Date(24 * (t - 25569) * 3600 * 1e3).toString();
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = this._getDefaultSlice()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null)
        return this._rasterJobHandler.connectionPromise;
      const t = new Rt();
      return this._rasterJobHandler.connectionPromise = t.initialize().then(() => {
        this._rasterJobHandler.instance = t, this.raster.rasterJobHandler = t, this.renderer && this.updateRenderer();
      }).catch(() => null), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this.raster.rasterJobHandler = null;
    }
    _configDefaultInterpolation() {
      if (this.interpolation == null) {
        var t;
        const i = bt(this.rasterInfo, this.raster.tileType, (t = this.sourceJSON) == null ? void 0 : t.defaultResamplingMethod);
        this._set("interpolation", i);
      }
    }
    _getDefaultSlice() {
      const { multidimensionalInfo: t } = this.raster.rasterInfo;
      if (!k(t))
        return null;
      const i = t.variables[0];
      return i.dimensions.map((n) => {
        var r, a;
        return new De({ variableName: i.name, dimensionName: n.name, values: [(r = (a = n.values) == null ? void 0 : a[0]) != null ? r : n.extent[0]], isSlice: !0 });
      });
    }
    _configDefaultRenderer() {
      const t = this.raster.rasterInfo;
      var i;
      this.bandIds || (this.bandIds = St(t)), this.renderer || (this.renderer = Tt(t, { bandIds: this.bandIds, variableName: k(this.multidimensionalDefinition) ? (i = this.multidimensionalDefinition[0]) == null ? void 0 : i.variableName : null })), this.symbolizer ? (this.symbolizer.rendererJSON = $e(this.renderer.toJSON()), this.symbolizer.rasterInfo = t) : this.symbolizer = new Dt({ rendererJSON: this.renderer.toJSON(), rasterInfo: t });
      const n = this.symbolizer.bind();
      n.success || Je.warn("imagery-tile-mixin", n.error || "The given renderer is not supported by the layer.");
    }
  };
  return w([S()], e.prototype, "_cachedRendererJson", void 0), w([S()], e.prototype, "_compatibleFullExtent", void 0), w([S()], e.prototype, "_rasterJobHandler", void 0), w([S()], e.prototype, "bandIds", void 0), w([S({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], e.prototype, "copyright", void 0), w([S({ type: L, json: { read: !1 } }), me("rasterInfo.extent")], e.prototype, "fullExtent", void 0), w([S()], e.prototype, "interpolation", void 0), w([S()], e.prototype, "ioConfig", void 0), w([S({ type: [De] })], e.prototype, "multidimensionalDefinition", void 0), w([S()], e.prototype, "raster", void 0), w([S({ readOnly: !0 }), me("raster.rasterInfo")], e.prototype, "rasterInfo", void 0), w([S()], e.prototype, "sourceJSON", void 0), w([S({ type: G, json: { read: !1 } }), me("rasterInfo.spatialReference")], e.prototype, "spatialReference", void 0), w([S({ type: ne, json: { read: !1 } }), me("rasterInfo.storageInfo.tileInfo")], e.prototype, "tileInfo", void 0), w([S(Ue)], e.prototype, "url", null), w([S({ types: Qe })], e.prototype, "renderer", null), w([S()], e.prototype, "symbolizer", void 0), e = w([K("geoscene.layers.ImageryTileMixin")], e), e;
}, ge = 8;
let U = class extends tt(st) {
  constructor() {
    super(...arguments), this.rasterJobHandler = null, this.datasetName = null, this.datasetFormat = null, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  async init() {
    const s = He();
    this.addResolvingPromise(s), await this.when();
  }
  normalizeCtorArgs(s) {
    return s && s.ioConfig && (s = { ...s, ioConfig: { resolution: null, bandIds: null, sampling: "closest", tileInfo: ne.create(), ...s.ioConfig } }), s;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: s } = this, e = ye(s.spatialReference);
    return k(e) && s.extent.width >= e / 2;
  }
  set url(s) {
    this._set("url", Ve(s, Ge.getLogger(this.declaredClass)));
  }
  async open(s) {
    throw new B("BaseRaster:open-not-implemented", "open() is not implemented");
  }
  async fetchTile(s, e, t, i = {}) {
    const n = i.tileInfo || this.rasterInfo.storageInfo.tileInfo, r = this.getTileExtentFromTileInfo(s, e, t, n);
    return this.fetchPixels(r, n.size[0], n.size[1], i);
  }
  async identify(s, e = {}) {
    e = this._getRequestOptionsWithSliceId(e);
    const { spatialReference: t, extent: i } = this.rasterInfo, { datumTransformation: n } = e;
    let r = Le(s, t, n);
    if (!i.intersects(r))
      return { location: r, value: null };
    if (k(this.rasterInfo.transform)) {
      const x = this.rasterInfo.transform.inverseTransform(r);
      if (!this.rasterInfo.nativeExtent.intersects(x))
        return { location: x, value: null };
      r = x;
    }
    let a = 0;
    if (e.srcResolution)
      a = Ne(e.srcResolution, this.rasterInfo, this.ioConfig.sampling).pyramidLevel;
    else if (a = await this.computeBestPyramidLevelForLocation(s, e), a == null)
      return { location: r, value: null };
    const o = this.identifyPixelLocation(r, a, null);
    if (o === null)
      return { location: r, value: null };
    const { row: u, col: l, rowOffset: h, colOffset: c } = o, f = Ee(this.url, e.sliceId), p = `${a}/${u}/${l}`;
    let m = Ae(f, null, p);
    z(m) && (m = this.fetchRawTile(a, u, l, e), ze(f, null, p, m));
    const g = await m;
    if (z(g) || !g.pixels || g.pixels.length === 0)
      return { location: r, value: null };
    const y = h * this.rasterInfo.storageInfo.blockHeight + c, d = !g.mask || g.mask[y] ? g.pixels.map((x) => x[y]) : null, I = this.rasterInfo.dataType;
    return (I === "vector-magdir" || I === "vector-uv") && (d == null ? void 0 : d.length) > 1 ? { location: r, value: d, magdirValue: I === "vector-magdir" ? [d[0], d[1]] : Ft([d[0], d[1]]), pyramidLevel: a } : { location: r, value: d, pyramidLevel: a };
  }
  async fetchPixels(s, e, t, i = {}) {
    if (s = Xt(s), (i = this._getRequestOptionsWithSliceId(i)).requestRawData)
      return this._fetchPixels(s, e, t, i);
    const n = ye(s.spatialReference), r = Te(s);
    if (z(n) || r === 0 || r === 1 && this._isGlobalWrappableSource)
      return this._fetchPixels(s, e, t, i);
    if (r >= 3)
      return { extent: s, pixelBlock: null };
    const a = [], { xmin: o, xmax: u } = s, l = Math.round(n / (u - o) * e), h = l - Math.round((n / 2 - o) / (u - o) * e);
    let c = 0;
    const f = [];
    for (let y = 0; y <= r; y++) {
      const d = new L({ xmin: y === 0 ? o : -n / 2, xmax: y === r ? u - n * y : n / 2, ymin: s.ymin, ymax: s.ymax, spatialReference: s.spatialReference }), I = y === 0 ? l - h : y === r ? e - c : l;
      c += I, f.push(I);
      const x = i.disableWrapAround && y > 0 ? null : this._fetchPixels(d, I, t, i);
      a.push(x);
    }
    const p = (await Promise.all(a)).map((y) => y == null ? void 0 : y.pixelBlock);
    let m = null;
    const g = { width: e, height: t };
    return this.rasterJobHandler ? m = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: p, srcMosaicSize: g, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: f }, i)).pixelBlock : m = Se(p, g, { blockWidths: f }), { extent: s, srcExtent: Re(s, this.rasterInfo.spatialReference, i.datumTransformation), pixelBlock: m };
  }
  async fetchRawPixels(s, e, t, i = {}) {
    e = { x: Math.floor(e.x), y: Math.floor(e.y) };
    const n = await this._fetchRawTiles(s, e, t, i), { nativeExtent: r, nativePixelSize: a, storageInfo: o } = this.rasterInfo, u = 2 ** s, l = a.x * u, h = a.y * u, c = new L({ xmin: r.xmin + l * e.x, xmax: r.xmin + l * (e.x + t.width - 1), ymin: r.ymax - h * (e.y + t.height - 1), ymax: r.ymax - h * e.y, spatialReference: r.spatialReference });
    if (!n)
      return { extent: c, srcExtent: c, pixelBlock: null };
    const { pixelBlocks: f, mosaicSize: p } = n;
    if (f.length === 1 && k(f[0]) && f[0].width === t.width && f[0].height === t.height)
      return { extent: c, srcExtent: c, pixelBlock: n.pixelBlocks[0] };
    const m = s > 0 ? o.pyramidBlockWidth : o.blockWidth, g = s > 0 ? o.pyramidBlockHeight : o.blockHeight, y = { x: e.x % m, y: e.y % g };
    let d;
    return this.rasterJobHandler ? d = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: f, srcMosaicSize: p, destDimension: t, clipOffset: y, clipSize: t, coefs: null, sampleSpacing: null, interpolation: i.interpolation, alignmentInfo: null, blockWidths: null }, i)).pixelBlock : d = Se(f, p, { clipOffset: y, clipSize: t }), { extent: c, srcExtent: c, pixelBlock: d };
  }
  fetchRawTile(s, e, t, i) {
    throw new B("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(s) {
    return Re(this.rasterInfo.extent, s);
  }
  decodePixelBlock(s, e) {
    return !this.rasterJobHandler || e.useCanvas ? $t(s, e) : this.rasterJobHandler.decode({ data: s, options: e });
  }
  async request(s, e, t) {
    var i, n;
    const { customFetchParameters: r } = this.ioConfig, { range: a, query: o, headers: u } = e;
    t = (i = (n = t) != null ? n : e.retryCount) != null ? i : this.ioConfig.retryCount;
    const l = a ? { Range: `bytes=${a.from}-${a.to}` } : null;
    try {
      return await Ye(s, { ...e, query: { ...o, ...r }, headers: { ...u, ...l } });
    } catch (h) {
      if (t > 0)
        return t--, this.request(s, e, t);
      throw h;
    }
  }
  getSliceIndex(s) {
    const { multidimensionalInfo: e } = this.rasterInfo;
    if (!k(e) || !k(s) || s.length === 0)
      return null;
    let t = 0;
    const i = s[0].variableName;
    for (let n = 0; n < e.variables.length; n++) {
      const r = e.variables[n], a = r.dimensions;
      if (r.name !== i) {
        t += a.map((l) => this._getDimensionValuesCount(l)).reduce((l, h) => l + h);
        break;
      }
      const o = a.map((l) => this._getDimensionValuesCount(l)), u = a.length;
      for (let l = 0; l < u; l++) {
        const h = s.find((p) => p.dimensionName === a[l].name);
        if (h == null)
          return null;
        const c = Array.isArray(h.values[0]) ? h.values[0][0] : h.values[0], f = this._getIndexFromDimensions(c, a[l]);
        if (f === -1)
          return null;
        o.shift(), t += l === u - 1 ? f : f * o.reduce((p, m) => p + m);
      }
    }
    return t;
  }
  getTileExtentFromTileInfo(s, e, t, i) {
    const n = i.lodAt(s);
    return this.getTileExtent({ x: n.resolution, y: n.resolution }, e, t, i.origin, i.spatialReference, i.size);
  }
  updateTileInfo() {
    const { storageInfo: s, spatialReference: e, extent: t, pixelSize: i } = this.rasterInfo;
    if (!s.tileInfo) {
      const n = [], r = s.maximumPyramidLevel || 0;
      let a = Math.max(i.x, i.y), o = 1 / 0.0254 * 96 * a;
      for (let l = 0; l <= r; l++)
        n.push({ level: r - l, resolution: a, scale: o }), a *= 2, o *= 2;
      const u = new N({ x: t.xmin, y: t.ymax, spatialReference: e });
      s.tileInfo = new ne({ origin: u, size: [s.blockWidth, s.blockHeight], spatialReference: e, lods: n }), s.isVirtualTileInfo = !0;
    }
  }
  createRemoteDatasetStorageInfo(s, e = 512, t = 512, i) {
    const { width: n, height: r, nativeExtent: a, pixelSize: o, spatialReference: u } = s, l = new N({ x: a.xmin, y: a.ymax, spatialReference: u });
    i == null && (i = Math.max(0, Math.round(Math.log(Math.max(n, r)) / Math.LN2 - 8)));
    const h = this.computeBlockBoundary(a, 512, 512, { x: a.xmin, y: a.ymax }, [o], i);
    s.storageInfo = new fe({ blockWidth: e, blockHeight: t, pyramidBlockWidth: e, pyramidBlockHeight: t, origin: l, firstPyramidLevel: 1, maximumPyramidLevel: i, blockBoundary: h });
  }
  async computeBestPyramidLevelForLocation(s, e = {}) {
    return 0;
  }
  computeBlockBoundary(s, e, t, i, n, r = 0, a = 2) {
    if (n.length === 1 && r > 0) {
      n = [...n];
      let { x: h, y: c } = n[0];
      for (let f = 0; f < r; f++)
        h *= a, c *= a, n.push({ x: h, y: c });
    }
    const o = [], { x: u, y: l } = i;
    for (let h = 0; h < n.length; h++) {
      const { x: c, y: f } = n[h];
      o.push({ minCol: Math.floor((s.xmin - u + 0.1 * c) / e / c), maxCol: Math.floor((s.xmax - u - 0.1 * c) / e / c), minRow: Math.floor((l - s.ymax + 0.1 * f) / t / f), maxRow: Math.floor((l - s.ymin - 0.1 * f) / t / f) });
    }
    return o;
  }
  getPyramidPixelSize(s) {
    const { nativePixelSize: e } = this.rasterInfo, { pyramidResolutions: t, pyramidScalingFactor: i } = this.rasterInfo.storageInfo;
    if (s === 0)
      return e;
    if (k(t) && t.length)
      return t[s - 1];
    const n = i ** s;
    return { x: e.x * n, y: e.y * n };
  }
  identifyPixelLocation(s, e, t) {
    const { spatialReference: i, nativeExtent: n } = this.rasterInfo, { blockWidth: r, blockHeight: a, maximumPyramidLevel: o, origin: u } = this.rasterInfo.storageInfo, l = Le(s, i, t);
    if (!n.intersects(l) || e < 0 || e > o)
      return null;
    const h = this.getPyramidPixelSize(e), { x: c, y: f } = h, p = (u.y - l.y) / f / a, m = (l.x - u.x) / c / r, g = Math.min(a - 1, Math.floor((p - Math.floor(p)) * a)), y = Math.min(r - 1, Math.floor((m - Math.floor(m)) * r));
    return { pyramidLevel: e, row: Math.floor(p), col: Math.floor(m), rowOffset: g, colOffset: y, srcLocation: l };
  }
  getTileExtent(s, e, t, i, n, r) {
    const [a, o] = r, u = i.x + t * a * s.x, l = u + a * s.x, h = i.y - e * o * s.y, c = h - o * s.y;
    return new L({ xmin: u, xmax: l, ymin: c, ymax: h, spatialReference: n });
  }
  getBlockWidthHeight(s) {
    return { blockWidth: s > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: s > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(s, e, t) {
    const i = this.rasterInfo.storageInfo.blockBoundary[s];
    return !i || i.maxRow < e || i.maxCol < t || i.minRow > e || i.minCol > t;
  }
  async _fetchPixels(s, e, t, i = {}) {
    let n = Te(s);
    if (n >= 2)
      return { extent: s, pixelBlock: null };
    const r = this._getSourceDataInfo(s, e, t, i), { pyramidLevel: a, pyramidResolution: o, srcResolution: u, srcExtent: l, srcWidth: h, srcHeight: c } = r;
    if (h === 0 || c === 0)
      return { extent: s, srcExtent: l, pixelBlock: null };
    const f = Z(this.rasterInfo.transform), p = (f == null ? void 0 : f.type) === "gcs-shift", m = k(ye(s.spatialReference));
    !p && m || (n = Te(r.srcExtent, p));
    const g = this.rasterInfo.storageInfo, y = { x: Math.floor((l.xmin - g.origin.x) / o.x + 0.1), y: Math.floor((g.origin.y - l.ymax) / o.y + 0.1) }, d = await this._fetchRawTiles(a, y, { width: h, height: c, wrapCount: n }, i);
    if (!d)
      return { extent: s, srcExtent: l, pixelBlock: null };
    const I = a > 0 ? g.pyramidBlockWidth : g.blockWidth, x = a > 0 ? g.pyramidBlockHeight : g.blockHeight, _ = I === h && x === c && y.x % I == 0 && y.y % x == 0, M = new N({ x: (s.xmax - s.xmin) / e, y: (s.ymax - s.ymin) / t, spatialReference: s.spatialReference }), v = !s.spatialReference.equals(this.rasterInfo.spatialReference), { datumTransformation: T } = i;
    if (!v && _ && d.pixelBlocks.length === 1 && I === e && x === t && u.x === M.x && u.y === M.y)
      return { extent: s, srcExtent: l, pixelBlock: d.pixelBlocks[0] };
    const R = m && k(ye(l.spatialReference)), P = i.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    P && !this.rasterJobHandler && await He();
    const b = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: s, srcBufferExtent: d.extent, pixelSize: M.toJSON(), datumTransformation: T, rasterTransform: f, hasWrapAround: n > 0 || R, isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== !1, includeGCSGrid: P }, i) : Kt({ projectedExtent: s, srcBufferExtent: d.extent, pixelSize: M, datumTransformation: T, rasterTransform: f, hasWrapAround: n > 0 || R, isAdaptive: !1, includeGCSGrid: P });
    let O;
    const F = !i.requestRawData, J = { rows: b.spacing[0], cols: b.spacing[1] }, W = Z(this._getRasterTileAlignmentInfo(a, d.extent.xmin)), { pixelBlocks: V, mosaicSize: q, isPartiallyFilled: C } = d;
    let E = null;
    if (this.rasterJobHandler)
      ({ pixelBlock: O, localNorthDirections: E } = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: V, srcMosaicSize: q, destDimension: F ? { width: e, height: t } : null, coefs: F ? b.coefficients : null, sampleSpacing: F ? J : null, projectDirections: P, gcsGrid: P ? b.gcsGrid : null, isUV: this.rasterInfo.dataType === "vector-uv", interpolation: i.interpolation, alignmentInfo: W, blockWidths: null }, i));
    else {
      const $ = Se(V, q, { alignmentInfo: W });
      O = F ? qt($, { width: e, height: t }, b.coefficients, J, i.interpolation) : $, P && b.gcsGrid && (E = jt({ width: e, height: t }, b.gcsGrid), O = Ot(O, this.rasterInfo.dataType, E));
    }
    return i.requestRawData || P ? { srcExtent: l, pixelBlock: O, transformGrid: b, localNorthDirections: E, extent: s, isPartiallyFilled: C } : { srcExtent: l, extent: s, pixelBlock: O };
  }
  async _fetchRawTiles(s, e, t, i) {
    const { origin: n, blockBoundary: r } = this.rasterInfo.storageInfo, { blockWidth: a, blockHeight: o } = this.getBlockWidthHeight(s);
    let { x: u, y: l } = e, { width: h, height: c, wrapCount: f } = t;
    const p = this._getRasterTileAlignmentInfo(s, 0);
    i.buffer && (u -= i.buffer.cols, l -= i.buffer.rows, h += 2 * i.buffer.cols, c += 2 * i.buffer.rows);
    let m = 0, g = 0, y = 0;
    f && k(p) && ({ worldColumnCountFromOrigin: g, originColumnOffset: y, rightPadding: m } = p, g * p.blockWidth - m >= u + h && (m = 0));
    const d = Math.floor(u / a), I = Math.floor(l / o), x = Math.floor((u + h + m - 1) / a), _ = Math.floor((l + c + m - 1) / o), M = r[s];
    if (!M)
      return null;
    const { minRow: v, minCol: T, maxCol: R, maxRow: P } = M;
    if (f === 0 && (_ < v || x < T || I > P || d > R))
      return null;
    const b = new Array();
    let O = !1;
    const F = this.ioConfig.allowPartialFill == null ? i.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let $ = I; $ <= _; $++)
      for (let A = d; A <= x; A++) {
        let de = A;
        if (!i.disableWrapAround && f && k(p) && g <= A && (de = A - g - y), $ >= v && de >= T && P >= $ && R >= de) {
          const Fe = this._fetchRawTile(s, $, de, i);
          F ? b.push(new Promise((Oe) => {
            Fe.then((Ze) => Oe(Ze)).catch(() => {
              O = !0, Oe(null);
            });
          })) : b.push(Fe);
        } else
          b.push(null);
      }
    if (b.length === 0)
      return null;
    const J = await Promise.all(b), W = { height: (_ - I + 1) * o, width: (x - d + 1) * a }, { spatialReference: V } = this.rasterInfo, q = this.getPyramidPixelSize(s), { x: C, y: E } = q;
    return { extent: new L({ xmin: n.x + d * a * C, xmax: n.x + (x + 1) * a * C, ymin: n.y - (_ + 1) * o * E, ymax: n.y - I * o * E, spatialReference: V }), pixelBlocks: J, mosaicSize: W, isPartiallyFilled: O };
  }
  _fetchRawTile(s, e, t, i) {
    const n = this.rasterInfo.storageInfo.blockBoundary[s];
    if (!n)
      return Promise.resolve(null);
    const { minRow: r, minCol: a, maxCol: o, maxRow: u } = n;
    if (e < r || t < a || e > u || t > o)
      return Promise.resolve(null);
    const l = Ee(this.url, i.sliceId), h = `${s}/${e}/${t}`;
    let c = Ae(l, i.registryId, h);
    if (z(c)) {
      const f = new AbortController();
      c = this.fetchRawTile(s, e, t, { ...i, signal: f.signal }), ze(l, i.registryId, h, c, f), c.catch(() => Jt(l, i.registryId, h));
    }
    return i.signal && it(i, () => {
      Wt(l, i.registryId, h);
    }), c;
  }
  _getIndexFromDimensions(s, e) {
    const { extent: t, interval: i, unit: n, values: r } = e;
    if (r != null && r.length)
      return Array.isArray(r[0]) ? r.findIndex((l) => l[0] <= s && l[1] >= s) : r.indexOf(s);
    if (s > t[1])
      return -1;
    const a = t[0];
    let o = -1;
    if (n === "ISO8601") {
      var u;
      switch (((u = e.intervalUnit) == null ? void 0 : u.toLowerCase()) || "seconds") {
        case "seconds":
          o = Math.round((s - a) / 1e3 / i);
          break;
        case "minutes":
          o = Math.round((s - a) / 6e4 / i);
          break;
        case "hours":
          o = Math.round((s - a) / 36e5 / i);
          break;
        case "days":
          o = Math.round((s - a) / 864e5 / i);
          break;
        case "years":
          o = Math.round((new Date(s).getUTCFullYear() - new Date(a).getUTCFullYear()) / i);
          break;
        case "decades":
          o = Math.round((new Date(s).getUTCFullYear() - new Date(a).getUTCFullYear()) / 10 / i);
      }
      return o;
    }
    return Math.round((s - a) / i);
  }
  _getDimensionValuesCount(s) {
    const { extent: e, interval: t, unit: i, values: n } = s;
    let r = (n == null ? void 0 : n.length) || 0;
    if (r)
      return r;
    const a = e[0];
    if (r === 0 && i === "ISO8601") {
      var o;
      switch (((o = s.intervalUnit) == null ? void 0 : o.toLowerCase()) || "seconds") {
        case "seconds":
          r = Math.round((e[1] - e[0]) / 1e3 / t);
          break;
        case "minutes":
          r = Math.round((e[1] - e[0]) / 6e4 / t);
          break;
        case "hours":
          r = Math.round((e[1] - e[0]) / 36e5 / t);
          break;
        case "days":
          r = Math.round((e[1] - e[0]) / 864e5 / t);
          break;
        case "years":
          r = Math.round((new Date(e[1]).getUTCFullYear() - new Date(a).getUTCFullYear()) / t);
          break;
        case "decades":
          r = Math.round((new Date(e[1]).getUTCFullYear() - new Date(a).getUTCFullYear()) / 10 / t);
      }
      return r;
    }
    return Math.round((e[1] - e[0]) / t);
  }
  _getRasterTileAlignmentInfo(s, e) {
    return this._rasterTileAlighmentInfo == null && (this._rasterTileAlighmentInfo = Qt(this.rasterInfo)), k(this._rasterTileAlighmentInfo.pyramidsInfo) ? { startX: e, halfWorldWidth: this._rasterTileAlighmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlighmentInfo.hasGCSSShiftTransform, ...this._rasterTileAlighmentInfo.pyramidsInfo[s] } : null;
  }
  _getSourceDataInfo(s, e, t, i = {}) {
    const n = { datumTransformation: i.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0 };
    i.srcResolution && (n.srcResolution = i.srcResolution, this._updateSourceDataInfo(s, n));
    const r = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: a, srcHeight: o, pyramidLevel: u } = n, l = a / e, h = o / t, c = u < r && l * h >= 16;
    if (c || u === r && (l > ge || h > ge) || a === 0 || o === 0) {
      const f = new N({ x: (s.xmax - s.xmin) / e, y: (s.ymax - s.ymin) / t, spatialReference: s.spatialReference });
      let p = Zt(f, this.rasterInfo.spatialReference, s, n.datumTransformation);
      const m = !p || i.srcResolution && p.x + p.y < i.srcResolution.x + i.srcResolution.y;
      if (c && i.srcResolution && m) {
        const g = Math.round(Math.log(Math.max(l, h)) / Math.LN2) - 1;
        if (r - u + 3 >= g) {
          const y = 2 ** g;
          p = { x: i.srcResolution.x * y, y: i.srcResolution.y * y };
        }
      }
      p && (n.srcResolution = p, this._updateSourceDataInfo(s, n));
    }
    return (n.srcWidth / e > ge || n.srcHeight / t > ge) && (n.srcWidth = 0, n.srcHeight = 0), n;
  }
  _updateSourceDataInfo(s, e) {
    e.srcWidth = 0, e.srcHeight = 0;
    const t = this.rasterInfo.spatialReference, { srcResolution: i, datumTransformation: n } = e, { pyramidLevel: r, pyramidResolution: a, excessiveReading: o } = Ne(i, this.rasterInfo, this.ioConfig.sampling);
    if (o)
      return;
    let u = e.srcExtent || Re(s, t, n);
    if (u == null)
      return;
    const l = Z(this.rasterInfo.transform);
    l && (u = l.inverseTransform(u)), e.srcExtent = u;
    const h = Math.ceil((u.xmax - u.xmin) / a.x - 0.1), c = Math.ceil((u.ymax - u.ymin) / a.y - 0.1);
    e.pyramidLevel = r, e.pyramidResolution = a, e.srcWidth = h, e.srcHeight = c;
  }
  _getRequestOptionsWithSliceId(s) {
    return k(this.rasterInfo.multidimensionalInfo) && s.sliceId == null && (s = { ...s, sliceId: this.getSliceIndex(s.multidimensionalDefinition) }), s;
  }
};
w([S()], U.prototype, "_rasterTileAlighmentInfo", void 0), w([S({ readOnly: !0 })], U.prototype, "_isGlobalWrappableSource", null), w([S(Ue)], U.prototype, "url", null), w([S({ type: String, json: { write: !0 } })], U.prototype, "datasetName", void 0), w([S({ type: String, json: { write: !0 } })], U.prototype, "datasetFormat", void 0), w([S()], U.prototype, "rasterInfo", void 0), w([S()], U.prototype, "ioConfig", void 0), w([S()], U.prototype, "sourceJSON", void 0), U = w([K("geoscene.layers.support.rasterDatasets.BaseRaster")], U);
const oe = U;
function ai(s) {
  const e = s.fields, t = s.records, i = e.some((l) => l.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", n = [{ name: i, type: "esriFieldTypeOID", alias: "OID" }].concat(e.map((l) => ({ name: l.name, type: "esriFieldType" + l.typeName, alias: l.name }))), r = n.map((l) => l.name), a = [];
  let o = 0, u = 0;
  return t.forEach((l) => {
    const h = {};
    for (h[i] = o++, u = 1; u < r.length; u++)
      h[r[u]] = l[u - 1];
    a.push({ attributes: h });
  }), { displayFieldName: "", fields: n, features: a };
}
class oi {
  static get supportedVersions() {
    return [5];
  }
  static parse(e) {
    const t = new DataView(e), i = 3 & t.getUint8(0);
    if (i !== 3)
      return { header: { version: i }, recordSet: null };
    const n = t.getUint32(4, !0), r = t.getUint16(8, !0), a = t.getUint16(10, !0), o = { version: i, recordCount: n, headerByteCount: r, recordByteCount: a };
    let u = 32;
    const l = [], h = [];
    let c;
    if (i === 3) {
      for (; t.getUint8(u) !== 13; )
        c = String.fromCharCode(t.getUint8(u + 11)).trim(), l.push({ name: Be(new Uint8Array(e, u, 11)), type: c, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(c)], length: t.getUint8(u + 16) }), u += 32;
      if (u += 1, l.length > 0)
        for (; h.length < n && e.byteLength - u > a; ) {
          const f = [];
          t.getUint8(u) === 32 ? (u += 1, l.forEach((p) => {
            if (p.type === "C")
              f.push(Be(new Uint8Array(e, u, p.length)).trim());
            else if (p.type === "N")
              f.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(e, u, p.length)).trim(), 10));
            else if (p.type === "F")
              f.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(e, u, p.length)).trim()));
            else if (p.type === "D") {
              const m = String.fromCharCode.apply(null, new Uint8Array(e, u, p.length)).trim();
              f.push(new Date(parseInt(m.substring(0, 4), 10), parseInt(m.substring(4, 6), 10) - 1, parseInt(m.substring(6, 8), 10)));
            }
            u += p.length;
          }), h.push(f)) : u += a;
        }
    }
    return { header: o, fields: l, records: h, recordSet: ai({ fields: l, records: h }) };
  }
}
const ee = /* @__PURE__ */ new Map();
ee.set("int16", "esriFieldTypeSmallInteger"), ee.set("int32", "esriFieldTypeInteger"), ee.set("int64", "esriFieldTypeInteger"), ee.set("float32", "esriFieldTypeSingle"), ee.set("float64", "esriFieldTypeDouble"), ee.set("text", "esriFieldTypeString");
const We = 8;
let le = class extends oe {
  constructor() {
    super(...arguments), this.storageInfo = null, this.datasetFormat = "CRF";
  }
  async open(e) {
    await this.init();
    const { data: t } = await this.request(this.url + "/conf.json", { signal: e == null ? void 0 : e.signal });
    if (!this._validateHeader(t))
      throw new B("cloudraster:open", "Invalid or unsupported conf.json.");
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { storageInfo: i, rasterInfo: n } = this._parseHeader(t);
    if (n.dataType === "thematic") {
      const r = await this._fetchAuxiliaryInformation();
      n.attributeTable = r;
    }
    this._set("storageInfo", i), this._set("rasterInfo", n), this.ioConfig.retryCount = this.ioConfig.retryCount || 0;
  }
  async fetchRawTile(e, t, i, n = {}) {
    const r = this.rasterInfo.storageInfo.maximumPyramidLevel - e;
    if (r < 0)
      return null;
    const a = this._buildCacheFilePath(r, t, i, n.multidimensionalDefinition), o = this._getIndexRecordFromBundle(t, i), u = await this.request(a, { range: { from: 0, to: this.storageInfo.headerSize - 1 }, responseType: "array-buffer", signal: n.signal });
    if (!u)
      return null;
    const l = new Uint8Array(u.data), h = this._getTileEndAndContentType(l, o);
    if (h.recordSize === 0)
      return null;
    const c = await this.request(a, { range: { from: h.position, to: h.position + h.recordSize }, responseType: "array-buffer", signal: n.signal });
    return c ? this.decodePixelBlock(c.data, { width: this.rasterInfo.storageInfo.tileInfo.size[0], height: this.rasterInfo.storageInfo.tileInfo.size[1], planes: null, pixelType: null }) : null;
  }
  _validateHeader(e) {
    const t = ["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"];
    return e && e.type === "RasterInfo" && !t.some((i) => !e[i]);
  }
  _parseHeader(e) {
    var t, i;
    const n = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e.pixelType], { bandCount: r, histograms: a, colormap: o, blockWidth: u, blockHeight: l, firstPyramidLevel: h, maximumPyramidLevel: c } = e, f = e.statistics && e.statistics.map((A) => ({ min: A.min, max: A.max, avg: A.mean, stddev: A.standardDeviation, median: A.median, mode: A.mode })), p = e.extent.spatialReference, m = (t = e.geodataXform) == null ? void 0 : t.spatialReference, g = new G(p != null && p.wkid || p != null && p.wkt ? p : m);
    let y = new L({ xmin: e.extent.xmin, ymin: e.extent.ymin, xmax: e.extent.xmax, ymax: e.extent.ymax, spatialReference: g });
    const d = new N({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: g }), I = Math.round((y.xmax - y.xmin) / d.x), x = Math.round((y.ymax - y.ymin) / d.y), _ = this._parseTransform(e.geodataXform), M = _ ? y : null;
    _ && (y = _.forwardTransform(y), d.x = (y.xmax - y.xmin) / I, d.y = (y.ymax - y.ymin) / x);
    const v = (i = e.properties) != null ? i : {}, T = e.format.toLowerCase().replace("cache/", ""), R = new N(e.origin.x, e.origin.y, g);
    let P, b, O, F;
    if (o && o.colors)
      for (P = [], b = 0; b < o.colors.length; b++)
        O = o.colors[b], F = o.values ? o.values[b] : b, P.push([F, 255 & O, O << 16 >>> 24, O << 8 >>> 24, O >>> 24]);
    const J = e.LODInfos, W = [];
    for (b = 0; b < J.levels.length; b++)
      W.push({ level: J.levels[b], resolution: J.resolutions[b], scale: 96 / 0.0254 * J.resolutions[b] });
    const V = new ne({ dpi: 96, lods: W, format: T, origin: R, size: [u, l], spatialReference: g }), q = { recordSize: We, packetSize: e.packetSize, headerSize: e.packetSize * e.packetSize * We + 64 }, C = [{ maxCol: Math.ceil(I / u) - 1, maxRow: Math.ceil(x / l) - 1, minCol: 0, minRow: 0 }];
    let E = 2;
    if (c > 0)
      for (b = 0; b < c; b++)
        C.push({ maxCol: Math.ceil(I / E / u) - 1, maxRow: Math.ceil(x / E / l) - 1, minCol: 0, minRow: 0 }), E *= 2;
    const $ = e.mdInfo;
    return { storageInfo: q, rasterInfo: new re({ width: I, height: x, pixelType: n, bandCount: r, extent: y, nativeExtent: M, transform: _, spatialReference: g, pixelSize: d, keyProperties: v, statistics: f, histograms: a, multidimensionalInfo: $, colormap: P, storageInfo: new fe({ blockWidth: u, blockHeight: l, pyramidBlockWidth: u, pyramidBlockHeight: l, origin: R, tileInfo: V, firstPyramidLevel: h, maximumPyramidLevel: c, blockBoundary: C }) }) };
  }
  _parseTransform(e) {
    var t, i;
    if (!ei(e))
      throw new B("cloudraster:open", "the data contains unsupported geodata transform types");
    const n = ti(e);
    if (n.type === "identity")
      return null;
    if (n.type !== "polynomial" || (t = n.forwardCoefficients) == null || !t.length || (i = n.inverseCoefficients) == null || !i.length)
      throw new B("cloudraster:open", "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");
    return n;
  }
  async _fetchAuxiliaryInformation(e) {
    const t = this.request(this.url + "/conf.vat.json", { signal: e }).then((a) => a.data).catch(() => null), i = this.request(this.url + "/conf.vat.dbf", { responseType: "array-buffer", signal: e }).then((a) => a.data).catch(() => null), n = await Promise.all([t, i]);
    let r;
    if (n[0]) {
      let a = n[0].fields;
      const o = n[0].values;
      if (a && o) {
        a = a.map((l) => ({ type: l.name === "OID" ? "esriFieldTypeOID" : ee.get(l.type), name: l.name, alias: l.alias || l.name }));
        const u = o.map((l) => ({ attributes: l }));
        a && o && (r = { fields: a, features: u });
      }
    }
    return !r && n[1] && (r = oi.parse(n[1]).recordSet), Xe.fromJSON(r);
  }
  _buildCacheFilePath(e, t, i, n) {
    const r = this.storageInfo.packetSize, a = Math.floor(t / r) * r, o = Math.floor(i / r) * r, u = "R" + this._toHexString4(a) + "C" + this._toHexString4(o);
    let l = "L";
    l += e >= 10 ? e.toString() : "0" + e.toString();
    const { multidimensionalInfo: h } = this.rasterInfo, c = n == null ? void 0 : n[0];
    if (!k(h) || !c)
      return `${this.url}/_alllayers/${l}/${u}.bundle`;
    let f = h.variables.find((m) => m.name === c.variableName).dimensions[0].values.indexOf(c.values[0]).toString(16);
    const p = 4 - f.length;
    for (let m = 0; m < p; m++)
      f = "0" + f;
    return f = "S" + f, `${this.url}/_alllayers/${c.variableName}/${f}/${l}/${u}.bundle`;
  }
  _getIndexRecordFromBundle(e, t) {
    const i = this.storageInfo.packetSize, n = i * (e % i) + t % i;
    if (n < 0)
      throw "Invalid level / row / col";
    return 20 + n * this.storageInfo.recordSize + 44;
  }
  _getTileEndAndContentType(e, t) {
    const i = e.subarray(t, t + 8);
    let n, r = 0;
    for (n = 0; n < 5; n++)
      r |= (255 & i[n]) << 8 * n;
    const a = 1099511627775 & r;
    for (r = 0, n = 5; n < 8; n++)
      r |= (255 & i[n]) << 8 * (n - 5);
    return { position: a, recordSize: 1099511627775 & r };
  }
  _toHexString4(e) {
    let t = e.toString(16);
    if (t.length !== 4) {
      let i = 4 - t.length;
      for (; i-- > 0; )
        t = "0" + t;
    }
    return t;
  }
};
w([S({ readOnly: !0 })], le.prototype, "storageInfo", void 0), w([S({ type: String, json: { write: !0 } })], le.prototype, "datasetFormat", void 0), le = w([K("geoscene.layers.support.rasterDatasets.CloudRaster")], le);
const li = le;
let ue = class extends oe {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY";
  }
  async open(s) {
    var e;
    await this.init();
    const { pixelBlock: t, statistics: i, histograms: n, name: r, keyProperties: a, nativeExtent: o, transform: u } = this.data, { width: l, height: h, pixelType: c } = t, f = this.data.extent || new L({ xmin: -0.5, ymin: 0.5, xmax: l - 0.5, ymax: h - 0.5, spatialReference: new G({ wkid: 3857 }) }), p = (e = this.data.isPseudoSpatialReference) != null ? e : !this.data.extent, m = { x: f.width / l, y: f.height / h }, g = new re({ width: l, height: h, pixelType: c, extent: f, nativeExtent: o, transform: u, pixelSize: m, spatialReference: f.spatialReference, bandCount: 3, keyProperties: a || {}, statistics: i, isPseudoSpatialReference: p, histograms: n });
    this.createRemoteDatasetStorageInfo(g, 512, 512), this._set("rasterInfo", g), this.updateTileInfo(), await this._buildInMemoryRaster(t, { width: 512, height: 512 }, s), this.datasetName = r, this.url = "/InMemory/" + r;
  }
  fetchRawTile(s, e, t, i = {}) {
    const n = this._pixelBlockTiles.get(`${s}/${e}/${t}`);
    return Promise.resolve(n);
  }
  async _buildInMemoryRaster(s, e, t) {
    const i = this.rasterInfo.storageInfo.maximumPyramidLevel, n = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: s, tileSize: e, maximumPyramidLevel: i }, t) : Promise.resolve(Gt(s, e, i)), r = k(this.rasterInfo.statistics), a = k(this.rasterInfo.histograms), o = r && a ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: s }, t) : Promise.resolve(Ut(s)), u = await Ke([n, o]);
    if (!u[0].value && u[1].value)
      throw new B("inmemory-raster:open", "failed to build in memory raster");
    var l, h;
    this._pixelBlockTiles = u[0].value, r || (this.rasterInfo.statistics = (l = u[1].value) == null ? void 0 : l.statistics), a && (this.rasterInfo.histograms = (h = u[1].value) == null ? void 0 : h.histograms);
  }
};
w([S({ type: String, json: { write: !0 } })], ue.prototype, "datasetFormat", void 0), w([S()], ue.prototype, "data", void 0), ue = w([K("geoscene.layers.support.rasterDatasets.InMemoryRaster")], ue);
const ui = ue;
function ae(s, e) {
  if (!s || !e)
    return [];
  let t = e;
  e.indexOf("/") > -1 ? (t = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const i = [];
  if (e) {
    const r = ae(s, t);
    for (let a = 0; a < r.length; a++)
      ae(r[a], e).forEach((o) => i.push(o));
    return i;
  }
  const n = s.getElementsByTagNameNS("*", t);
  if (!n || n.length === 0)
    return [];
  for (let r = 0; r < n.length; r++)
    i.push(n[r] || n.item[r]);
  return i;
}
function j(s, e) {
  if (!s || !e)
    return null;
  let t = e;
  e.indexOf("/") > -1 ? (t = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const i = ae(s, t);
  return i.length > 0 ? e ? j(i[0], e) : i[0] : null;
}
function X(s, e = null) {
  const t = e ? j(s, e) : s;
  let i;
  return t ? (i = t.textContent || t.nodeValue, i ? i.trim() : null) : null;
}
function ci(s, e) {
  const t = ae(s, e), i = [];
  let n;
  for (let r = 0; r < t.length; r++)
    n = t[r].textContent || t[r].nodeValue, n && (n = n.trim(), n !== "" && i.push(n));
  return i;
}
function xe(s, e) {
  return ci(s, e).map((t) => Number(t));
}
function ie(s, e) {
  const t = X(s, e);
  return Number(t);
}
function _e(s, e) {
  var t;
  const i = s == null || (t = s.nodeName) == null ? void 0 : t.toLowerCase(), n = e.toLowerCase();
  return i.slice(i.lastIndexOf(":") + 1) === n;
}
function qe(s, e) {
  if (!s || !e)
    return null;
  const t = [];
  for (let i = 0; i < s.length; i++)
    t.push(s[i]), t.push(e[i]);
  return t;
}
function hi(s) {
  var e;
  const t = j(s, "GeodataXform"), i = be(ie(t, "SpatialReference/WKID") || X(t, "SpatialReference/WKT"));
  if (t.getAttribute("xsi:type") !== "typens:PolynomialXform")
    return { spatialReference: i, transform: null };
  const n = (e = ie(t, "PolynomialOrder")) != null ? e : 1, r = xe(t, "CoeffX/Double"), a = xe(t, "CoeffY/Double"), o = xe(t, "InverseCoeffX/Double"), u = xe(t, "InverseCoeffY/Double"), l = qe(r, a), h = qe(o, u);
  return { spatialReference: i, transform: new Me({ spatialReference: i, polynomialOrder: n, forwardCoefficients: l, inverseCoefficients: h }) };
}
function fi(s) {
  var e;
  const t = ie(s, "NoDataValue"), i = j(s, "Histograms/HistItem"), n = ie(i, "HistMin"), r = ie(i, "HistMax"), a = ie(i, "BucketCount"), o = (e = X(i, "HistCounts")) == null ? void 0 : e.split("|").map((p) => Number(p));
  let u, l, h, c;
  ae(s, "Metadata/MDI").forEach((p) => {
    var m;
    const g = Number((m = p.textContent) != null ? m : p.nodeValue);
    switch (p.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        u = g;
        break;
      case "STATISTICS_MAXIMUM":
        l = g;
        break;
      case "STATISTICS_MEAN":
        h = g;
        break;
      case "STATISTICS_STDDEV":
        c = g;
    }
  });
  const f = ie(s, "Metadata/SourceBandIndex");
  return { noDataValue: t, histogram: o != null && o.length && u != null && l != null ? { min: n, max: r, size: a || o.length, counts: o } : null, sourceBandIndex: f, statistics: u != null && l != null ? { min: u, max: l, avg: h, stddev: c } : null };
}
function be(s) {
  if (!s)
    return null;
  let e = Number(s);
  if (!isNaN(e) && e !== 0)
    return new G({ wkid: e });
  if ((s = String(s)).startsWith("COMPD_CS")) {
    if (!s.includes("VERTCS") || !s.includes("GEOGCS") && !s.startsWith("PROJCS"))
      return null;
    const t = s.indexOf("VERTCS"), i = s.indexOf("PROJCS"), n = i > -1 ? i : s.indexOf("GEOGCS");
    if (n === -1)
      return null;
    const r = s.slice(n, s.lastIndexOf("]", t) + 1).trim(), a = s.slice(t, s.lastIndexOf("]")).trim();
    e = Ce(r);
    const o = new G(e ? { wkid: e } : { wkt: r }), u = Ce(a);
    return u && (o.vcsWkid = u), o;
  }
  return s.startsWith("GEOGCS") || s.startsWith("PROJCS") ? (e = Ce(s), new G(e !== 0 ? { wkid: e } : { wkt: s })) : null;
}
function Ce(s) {
  var e;
  const t = s.replace(/\]/g, "[").replace(/\"/g, "").split("[").map((r) => r.trim()).filter((r) => r !== ""), i = t[t.length - 1].split(","), n = (e = i[0]) == null ? void 0 : e.toLowerCase();
  if ((n === "epsg" || n === "esri") && s.endsWith('"]]')) {
    const r = Number(i[1]);
    if (!isNaN(r) && r !== 0)
      return r;
  }
  return 0;
}
function Pe(s) {
  var e;
  if ((s == null || (e = s.documentElement.tagName) == null ? void 0 : e.toLowerCase()) !== "pamdataset")
    return {};
  const t = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  s.documentElement.childNodes.forEach((n) => {
    if (n.nodeType === 1) {
      if (_e(n, "SRS")) {
        if (!t.spatialReference) {
          const r = X(n);
          t.spatialReference = be(r);
        }
      } else if (_e(n, "Metadata"))
        if (n.getAttribute("domain") === "xml:ESRI") {
          const { spatialReference: r, transform: a } = hi(n);
          t.transform = a, t.spatialReference || (t.spatialReference = r);
        } else
          ae(n, "MDI").forEach((r) => t.metadata[r.getAttribute("key")] = X(r));
      else if (_e(n, "PAMRasterBand")) {
        const r = fi(n);
        r.sourceBandIndex != null && t.rasterBands[r.sourceBandIndex] == null ? t.rasterBands[r.sourceBandIndex] = r : t.rasterBands.push(r);
      }
    }
  });
  const i = t.rasterBands;
  if (i) {
    const n = !!i[0].statistics;
    t.statistics = n ? i.map((a) => a.statistics) : null;
    const r = !!i[0].histogram;
    t.histograms = r ? i.map((a) => a.histogram) : null;
  }
  return t;
}
let ve = class extends oe {
  async open(s) {
    await this.init();
    const e = await this._fetchData(s);
    let { spatialReference: t, statistics: i, histograms: n, transform: r } = await this._fetchAuxiliaryData(s);
    const a = !t;
    a && (t = new G({ wkid: 3857 })), n != null && n.length && i == null && (i = ke(n));
    const { width: o, height: u } = e;
    let l = new L({ xmin: -0.5, ymin: 0.5 - u, xmax: o - 0.5, ymax: 0.5, spatialReference: t });
    const h = r ? r.forwardTransform(l) : l;
    let c = !0;
    if (r) {
      const p = r.forwardCoefficients;
      c = p && p[1] === 0 && p[2] === 0, c && (r = null, l = h);
    }
    const f = new ui({ data: { extent: h, nativeExtent: l, transform: r, pixelBlock: e, statistics: i, histograms: n, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: a } });
    await f.open(), this._set("rasterInfo", f.rasterInfo), this._inMemoryRaster = f;
  }
  fetchRawTile(s, e, t, i = {}) {
    return this._inMemoryRaster.fetchRawTile(s, e, t, i);
  }
  async _fetchData(s) {
    const { data: e } = await this.request(this.url, { responseType: "array-buffer", signal: s == null ? void 0 : s.signal }), t = Bt(e).toUpperCase();
    if (t !== "JPG" && t !== "PNG" && t !== "GIF" && t !== "BMP")
      throw new B("image-aux-raster:open", "the data is not a supported format");
    return this._set("datasetFormat", t), await this.decodePixelBlock(e, { format: "jpg", width: 1, height: 1, useCanvas: !0 });
  }
  async _fetchAuxiliaryData(s) {
    var e, t;
    const i = Z(s == null ? void 0 : s.signal), n = (e = this.ioConfig.skipExtensions) != null ? e : [], r = n.indexOf("aux.xml") > -1 ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: i }), a = this.datasetFormat, o = a === "JPG" ? "jgw" : a === "PNG" ? "pgw" : a === "BMP" ? "bpw" : null, u = n.indexOf(o) > -1 ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + o, { responseType: "text", signal: i }), l = await Ke([r, u]);
    if (i != null && i.aborted)
      throw nt();
    const h = Pe((t = l[0].value) == null ? void 0 : t.data);
    if (!h.transform) {
      const c = l[1].value ? l[1].value.data.split(`
`).slice(0, 6).map((f) => Number(f)) : null;
      h.transform = (c == null ? void 0 : c.length) === 6 ? new Me({ forwardCoefficients: [c[4], c[5], c[0], -c[1], c[2], -c[3]] }) : null;
    }
    return h;
  }
};
w([S({ type: String, json: { write: !0 } })], ve.prototype, "datasetFormat", void 0), ve = w([K("geoscene.layers.support.rasterDatasets.ImageAuxRaster")], ve);
const Ie = ve;
let ce = class extends oe {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._slices = null, this._tilemapCache = null, this.datasetFormat = "RasterTileServer";
  }
  async open(e) {
    await this.init();
    const t = e && e.signal, i = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: t });
    i.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const n = i.data;
    if (this.sourceJSON = n, !n)
      throw new B("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!n.tileInfo)
      throw new B("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const r = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = n.cacheType, this.tileType == null && (r.indexOf(n.tileInfo.format.toLowerCase()) > -1 ? this.tileType = "Map" : n.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = n.name.slice(n.name.indexOf("/") + 1);
    const a = await this._fetchRasterInfo({ signal: t });
    if (!k(a))
      throw new B("image-server-raster:open", "cannot initialize image service");
    {
      const o = this.tileType === "Map" ? si(n.tileInfo, n) : ne.fromJSON(n.tileInfo), { extent: u, pixelSize: l } = a, h = 0.5 / a.width * l.x;
      let c, f;
      const p = o.lodAt(Math.max.apply(null, o.lods.map((v) => v.level)));
      this.tileType !== "Map" && n.maxScale !== 0 && (this.tileType === "Raster" ? (c = o.lods.find((v) => v.resolution === l.x), c || (c = o.lods[o.lods.length - 1])) : (c = o.lods.find((v) => Math.abs(v.scale - n.maxScale) < h), c || (c = o.lods.filter((v) => v.scale > n.maxScale).sort((v, T) => v.scale > T.scale ? 1 : -1)[0])), l.x = l.y = c.resolution, a.width = Math.ceil((u.xmax - u.xmin) / l.x - 0.1), a.height = Math.ceil((u.ymax - u.ymin) / l.y - 0.1)), c || (c = p);
      const m = o.lodAt(Math.min.apply(null, o.lods.map((v) => v.level)));
      this.tileType === "Map" ? this._levelOffset = o.lods[0].level : n.minScale !== 0 && this.tileType === "Elevation" && (f = o.lods.find((v) => Math.abs(v.scale - n.minScale) < h), this._levelOffset = f.level - m.level), f || (f = m);
      const g = Math.max(l.x, l.y);
      (Math.abs(l.x - l.y) > h || !o.lods.some((v) => Math.abs(v.resolution - g) < h)) && (l.x = l.y = c.resolution, a.width = Math.ceil((u.xmax - u.xmin) / l.x - 0.1), a.height = Math.ceil((u.ymax - u.ymin) / l.y - 0.1));
      const y = c.level - f.level, [d, I] = o.size, x = [];
      o.lods.forEach((v) => {
        v.level >= f.level && v.level <= c.level && x.push({ x: v.resolution, y: v.resolution });
      }), x.sort((v, T) => v.x - T.x);
      const _ = this.computeBlockBoundary(u, d, I, o.origin, x, y), M = x.length > 1 ? x.slice(1) : null;
      a.storageInfo = new fe({ blockWidth: o.size[0], blockHeight: o.size[1], pyramidBlockWidth: o.size[0], pyramidBlockHeight: o.size[1], pyramidResolutions: M, compression: o.format, origin: o.origin, firstPyramidLevel: 1, maximumPyramidLevel: y, tileInfo: o, blockBoundary: _ }), this._fixGCSShift(a), this._set("rasterInfo", a);
    }
    if (n.capabilities.toLowerCase().indexOf("tilemap") > -1) {
      const o = { tileInfo: a.storageInfo.tileInfo, parsedUrl: rt(this.url), url: this.url, tileServers: [], type: "tile" };
      this._tilemapCache = new ni({ layer: o });
    }
  }
  async fetchRawTile(e, t, i, n = {}) {
    if (this._slices && n.sliceId == null)
      return null;
    const { storageInfo: r, extent: a } = this.rasterInfo, o = r.maximumPyramidLevel - e + this._levelOffset, u = `${this.url}/tile/${o}/${t}/${i}`, l = this._slices ? { sliceId: n.sliceId || 0 } : null, { data: h } = await this.request(u, { query: l, responseType: "array-buffer", signal: n.signal });
    if (!h)
      return null;
    const c = await this.decodePixelBlock(h, { width: r.tileInfo.size[0], height: r.tileInfo.size[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation" }), f = r.blockBoundary[e];
    if (r.compression !== "jpg" || i > f.minCol && i < f.maxCol && t > f.minRow && t < f.maxRow)
      return c;
    const { origin: p, blockWidth: m, blockHeight: g } = r, { x: y, y: d } = this.getPyramidPixelSize(e), I = Math.round((a.xmin - p.x) / y) % m, x = Math.round((a.xmax - p.x) / y) % m || m, _ = Math.round((p.y - a.ymax) / d) % g, M = Math.round((p.y - a.ymin) / d) % g || g, v = i === f.minCol ? I : 0, T = t === f.minRow ? _ : 0, R = i === f.maxCol ? x : m, P = t === f.maxRow ? M : g;
    return Vt(c, { x: v, y: T }, { width: R - v, height: P - T }), c;
  }
  getSliceIndex(e) {
    if (!this._slices || z(e) || e.length === 0)
      return null;
    const t = e;
    for (let i = 0; i < this._slices.length; i++) {
      const n = this._slices[i].multidimensionalDefinition;
      if (n.length === t.length && !n.some((r) => {
        const a = t.find((o) => r.variableName === o.variableName && o.dimensionName === r.dimensionName);
        return a ? (Array.isArray(r.values[0]) ? `${r.values[0][0]}-${r.values[0][1]}` : r.values[0]) !== (Array.isArray(a.values[0]) ? `${a.values[0][0]}-${a.values[0][1]}` : a.values[0]) : !0;
      }))
        return i;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(e, t) {
    const i = this.request(this.url + "/statistics", { query: { variable: e, f: "json" }, signal: t }).then((a) => {
      var o;
      return (o = a.data) == null ? void 0 : o.statistics;
    }), n = this.request(this.url + "/histograms", { query: { variable: e, f: "json" }, signal: t }).then((a) => {
      var o;
      return (o = a.data) == null ? void 0 : o.histograms;
    }), r = await Promise.all([i, n]);
    return r[0] && r[0].forEach((a) => {
      a.avg = a.mean, a.stddev = a.standardDeviation;
    }), { statistics: r[0] || null, histograms: r[1] || null };
  }
  async computeBestPyramidLevelForLocation(e, t = {}) {
    if (!this._tilemapCache)
      return 0;
    let i = this.identifyPixelLocation(e, 0, Z(t.datumTransformation));
    if (i === null)
      return null;
    let n = 0;
    const { maximumPyramidLevel: r } = this.rasterInfo.storageInfo;
    let a = r - n + this._levelOffset;
    const o = i.srcLocation;
    for (; a >= 0; ) {
      try {
        if (await this._tilemapCache.fetchAvailability(a, i.row, i.col, t) === "available")
          break;
      } catch {
      }
      if (a--, n++, i = this.identifyPixelLocation(o, n, Z(t.datumTransformation)), i === null)
        return null;
    }
    return a === -1 || i == null ? null : n;
  }
  async _fetchRasterInfo(e) {
    const t = this.sourceJSON, i = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - 0.1), n = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - 0.1), r = G.fromJSON(t.spatialReference || t.extent.spatialReference);
    if (this.tileType === "Map")
      return new re({ width: i, height: n, bandCount: 3, extent: L.fromJSON(t.extent), spatialReference: r, pixelSize: new N({ x: t.pixelSizeX, y: t.pixelSizeY, spatialReference: r }), pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    const { slice: a, signal: o } = e, u = !!t.hasRasterAttributeTable && this.request(this.url + "/rasterAttributeTable", { query: { slice: a, f: "json" }, signal: o }).then((m) => Xe.fromJSON(m.data)).catch(() => null), l = !!t.hasColormap && this.request(this.url + "/colormap", { query: { slice: a, f: "json" }, signal: o }).then((m) => {
      var g;
      return (g = m.data) == null ? void 0 : g.colormap;
    }), h = !!t.hasHistograms && this.request(this.url + "/histograms", { query: { slice: a, f: "json" }, signal: o }).then((m) => {
      var g;
      return (g = m.data) == null ? void 0 : g.histograms;
    }), c = this.request(this.url + "/keyProperties", { query: { f: "json" }, signal: o }).then((m) => m.data).catch(() => {
    }), f = !!t.hasMultidimensions && this._fetchMultidimensionalInfo(), p = !!t.hasMultidimensions && this.request(this.url + "/slices", { query: { f: "json" }, signal: o }).then((m) => m.data && m.data.slices).catch(() => {
    });
    return Promise.all([u, l, h, c, f, p]).then((m) => {
      let g = null;
      if (t.minValues && t.minValues.length === t.bandCount) {
        g = [];
        for (let y = 0; y < t.minValues.length; y++)
          g.push({ min: t.minValues[y], max: t.maxValues[y], avg: t.meanValues[y], stddev: t.stdvValues[y] });
      }
      return this._slices = m[5] || null, new re({ width: i, height: n, bandCount: t.bandCount, extent: L.fromJSON(t.extent), spatialReference: r, pixelSize: new N({ x: t.pixelSizeX, y: t.pixelSizeY, spatialReference: r }), pixelType: t.pixelType.toLowerCase(), statistics: g, attributeTable: m[0] || null, colormap: m[1] || null, histograms: m[2] || null, keyProperties: m[3] || {}, multidimensionalInfo: m[4] || null });
    });
  }
  async _fetchMultidimensionalInfo(e) {
    var t;
    const i = await this.request(this.url + "/multidimensionalInfo", { query: { f: "json" }, signal: e }).then((n) => {
      var r;
      return (r = n.data) == null ? void 0 : r.multidimensionalInfo;
    });
    return (t = i.variables) != null && t.length && i.variables.forEach((n) => {
      var r;
      (r = n.statistics) != null && r.length && n.statistics.forEach((a) => {
        a.avg = a.mean, a.stddev = a.standardDeviation;
      });
    }), i;
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: e } = this;
    e.minScale && e.minScale < 0 && (e.minScale = 0), e.maxScale && e.maxScale < 0 && (e.maxScale = 0);
  }
  _fixGCSShift(e) {
    const { extent: t, spatialReference: i } = e;
    t.xmin === 0 && t.xmax === 360 && i.wkid && i.isGeographic && (e.nativeExtent = e.extent, e.transform = new ii(), e.extent = e.transform.forwardTransform(t));
  }
};
w([S({ type: String, json: { write: !0 } })], ce.prototype, "datasetFormat", void 0), w([S()], ce.prototype, "tileType", void 0), ce = w([K("geoscene.layers.support.rasterDatasets.ImageServerRaster")], ce);
const di = ce, Y = /* @__PURE__ */ new Map();
Y.set("Int8", "s8"), Y.set("UInt8", "u8"), Y.set("Int16", "s16"), Y.set("UInt16", "u16"), Y.set("Int32", "s32"), Y.set("UInt32", "u32"), Y.set("Float32", "f32"), Y.set("Float64", "f32"), Y.set("Double64", "f32");
const Q = /* @__PURE__ */ new Map();
Q.set("none", { blobExtension: ".til", isOneSegment: !0, decoderFormat: "bip" }), Q.set("lerc", { blobExtension: ".lrc", isOneSegment: !1, decoderFormat: "lerc" }), Q.set("deflate", { blobExtension: ".pzp", isOneSegment: !0, decoderFormat: "deflate" }), Q.set("jpeg", { blobExtension: ".pjg", isOneSegment: !0, decoderFormat: "jpg" });
let se = class extends oe {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async open(e) {
    var t;
    await this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const i = e ? Z(e.signal) : null, n = await this.request(this.url, { responseType: "xml", signal: i }), { rasterInfo: r, files: a } = this._parseHeader(n.data);
    if (((t = this.ioConfig.skipExtensions) == null ? void 0 : t.indexOf("aux.xml")) === -1) {
      const I = await this._fetchAuxiliaryData(e);
      var o;
      I != null && (r.statistics = (o = I.statistics) != null ? o : r.statistics, r.histograms = I.histograms, I.histograms && !k(r.statistics) && (r.statistics = ke(I.histograms)));
    }
    this._set("rasterInfo", r), this._files = a;
    const u = await this.request(a.index, { responseType: "array-buffer", signal: i });
    this._storageIndex = this._parseIndex(u.data);
    const { blockWidth: l, blockHeight: h } = this.rasterInfo.storageInfo, c = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: f, height: p } = this.rasterInfo, m = [], g = this._getBandSegmentCount();
    let y = 0, d = -1;
    for (; y < this._storageIndex.length; ) {
      d++;
      const I = Math.ceil(f / l / c ** d) - 1, x = Math.ceil(p / h / c ** d) - 1;
      y += (I + 1) * (x + 1) * g * 4, m.push({ maxRow: x, maxCol: I, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = m, d > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = d), this.updateTileInfo();
  }
  async fetchRawTile(e, t, i, n = {}) {
    const { blockWidth: r, blockHeight: a, blockBoundary: o } = this.rasterInfo.storageInfo, u = o[e];
    if (!u || u.maxRow < t || u.maxCol < i || u.minRow > t || u.minCol > i)
      return null;
    const { bandCount: l, pixelType: h } = this.rasterInfo, { ranges: c, actualTileWidth: f, actualTileHeight: p } = this._getTileLocation(e, t, i);
    if (!c || c.length === 0)
      return null;
    if (c[0].from === 0 && c[0].to === 0) {
      const b = new Uint8Array(r * a);
      return new Yt({ width: r, height: a, pixels: null, mask: b, validPixelCount: 0 });
    }
    const { bandIds: m } = this.ioConfig, g = this._getBandSegmentCount(), y = [];
    let d = 0;
    for (d = 0; d < g; d++)
      (!m || m.indexOf[d] > -1) && y.push(this.request(this._files.data, { range: { from: c[d].from, to: c[d].to }, responseType: "array-buffer", signal: n.signal }));
    const I = await Promise.all(y), x = I.map((b) => b.data.byteLength).reduce((b, O) => b + O), _ = new Uint8Array(x);
    let M = 0;
    for (d = 0; d < g; d++)
      _.set(new Uint8Array(I[d].data), M), M += I[d].data.byteLength;
    const v = Q.get(this.rasterInfo.storageInfo.compression).decoderFormat, T = await this.decodePixelBlock(_.buffer, { width: r, height: a, format: v, planes: (m == null ? void 0 : m.length) || l, pixelType: h });
    if (k(this.rasterInfo.noDataValue) && v !== "lerc" && !T.mask) {
      const b = this.rasterInfo.noDataValue[0];
      if (b != null) {
        const O = T.width * T.height, F = new Uint8Array(O);
        if (Math.abs(b) > 1e24)
          for (d = 0; d < O; d++)
            Math.abs((T.pixels[0][d] - b) / b) > 1e-6 && (F[d] = 1);
        else
          for (d = 0; d < O; d++)
            T.pixels[0][d] !== b && (F[d] = 1);
        T.mask = F;
      }
    }
    let R = 0, P = 0;
    if (f !== r || p !== a) {
      let b = T.mask;
      if (b)
        for (d = 0; d < a; d++)
          if (P = d * r, d < p)
            for (R = f; R < r; R++)
              b[P + R] = 0;
          else
            for (R = 0; R < r; R++)
              b[P + R] = 0;
      else
        for (b = new Uint8Array(r * a), T.mask = b, d = 0; d < p; d++)
          for (P = d * r, R = 0; R < f; R++)
            b[P + R] = 1;
    }
    return T;
  }
  _parseIndex(e) {
    if (e.byteLength % 16 > 0)
      throw "invalid array buffer must be multiples of 16";
    let t, i, n, r, a, o;
    if (Et) {
      for (i = new Uint8Array(e), r = new ArrayBuffer(e.byteLength), n = new Uint8Array(r), a = 0; a < e.byteLength / 4; a++)
        for (o = 0; o < 4; o++)
          n[4 * a + o] = i[4 * a + 3 - o];
      t = new Uint32Array(r);
    } else
      t = new Uint32Array(e);
    return t;
  }
  _getBandSegmentCount() {
    return Q.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(e, t, i) {
    const { blockWidth: n, blockHeight: r, pyramidScalingFactor: a } = this.rasterInfo.storageInfo, { width: o, height: u } = this.rasterInfo, l = this._getBandSegmentCount();
    let h, c, f, p = 0, m = 0;
    for (f = 0; f < e; f++)
      m = a ** f, h = Math.ceil(o / n / m), c = Math.ceil(u / r / m), p += h * c;
    m = a ** e, h = Math.ceil(o / n / m), c = Math.ceil(u / r / m), p += t * h + i, p *= 4 * l;
    const g = this._storageIndex.subarray(p, p + 4 * l);
    let y = 0, d = 0;
    const I = [];
    for (let x = 0; x < l; x++)
      y = g[4 * x + 0] * 2 ** 32 + g[4 * x + 1], d = y + g[4 * x + 2] * 2 ** 32 + g[4 * x + 3], I.push({ from: y, to: d });
    return { ranges: I, actualTileWidth: i < h - 1 ? n : Math.ceil(o / m) - n * (h - 1), actualTileHeight: t < c - 1 ? r : Math.ceil(u / m) - r * (c - 1) };
  }
  _parseHeader(e) {
    const t = j(e, "MRF_META/Raster");
    if (!t)
      throw new B("mrf:open", "not a valid MRF format");
    const i = j(t, "Size"), n = parseInt(i.getAttribute("x"), 10), r = parseInt(i.getAttribute("y"), 10), a = parseInt(i.getAttribute("c"), 10), o = (X(t, "Compression") || "none").toLowerCase();
    if (!Q.has(o))
      throw new B("mrf:open", "currently does not support compression " + o);
    const u = X(t, "DataType") || "UInt8", l = Y.get(u);
    if (l == null)
      throw new B("mrf:open", "currently does not support pixel type " + u);
    const h = j(t, "PageSize"), c = parseInt(h.getAttribute("x"), 10), f = parseInt(h.getAttribute("y"), 10), p = j(t, "DataValues");
    let m, g;
    if (p && (g = p.getAttribute("NoData"), g != null && (m = g.trim().split(" ").map((F) => parseFloat(F)))), j(e, "MRF_META/CachedSource"))
      throw new B("mrf:open", "currently does not support MRF referencing other data files");
    const y = j(e, "MRF_META/GeoTags"), d = j(y, "BoundingBox");
    let I, x = !1;
    if (d != null) {
      const F = parseFloat(d.getAttribute("minx")), J = parseFloat(d.getAttribute("miny")), W = parseFloat(d.getAttribute("maxx")), V = parseFloat(d.getAttribute("maxy")), q = X(y, "Projection") || "";
      let C;
      if (q !== "LOCAL_CS[]")
        if (q.toLowerCase().startsWith("epsg:")) {
          const E = Number(q.slice(5));
          isNaN(E) || E === 0 || (C = new G({ wkid: E }));
        } else
          C = be(q);
      else
        x = !0, C = new G({ wkid: 3857 });
      I = new L(F, J, W, V), I.spatialReference = C;
    } else
      x = !0, I = new L({ xmin: -0.5, ymin: 0.5 - r, xmax: n - 0.5, ymax: 0.5, spatialReference: new G({ wkid: 3857 }) });
    const _ = j(e, "MRF_META/Rsets"), M = parseInt(_ && _.getAttribute("scale") || "2", 10), v = I.spatialReference, T = new fe({ origin: new N({ x: I.xmin, y: I.ymax, spatialReference: v }), blockWidth: c, blockHeight: f, pyramidBlockWidth: c, pyramidBlockHeight: f, compression: o, pyramidScalingFactor: M }), R = new N({ x: I.width / n, y: I.height / r, spatialReference: v }), P = new re({ width: n, height: r, extent: I, isPseudoSpatialReference: x, spatialReference: v, bandCount: a, pixelType: l, pixelSize: R, noDataValue: m, storageInfo: T }), b = X(e, "datafile"), O = X(e, "IndexFile");
    return { rasterInfo: P, files: { mrf: this.url, index: O || this.url.replace(".mrf", ".idx"), data: b || this.url.replace(".mrf", Q.get(o).blobExtension) } };
  }
  async _fetchAuxiliaryData(e) {
    try {
      const { data: t } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: e == null ? void 0 : e.signal });
      return Pe(t);
    } catch {
      return null;
    }
  }
};
w([S()], se.prototype, "_files", void 0), w([S()], se.prototype, "_storageIndex", void 0), w([S({ type: String, json: { write: !0 } })], se.prototype, "datasetFormat", void 0), se = w([K("geoscene.layers.support.rasterIO.MRFRaster")], se);
const mi = se, je = function(s, e) {
  const t = s.get(e);
  return t && t.values;
}, we = function(s, e) {
  const t = s.get(e);
  return t && t.values[0];
};
let te = class extends oe {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  async open(s) {
    var e, t, i;
    await this.init();
    const n = s ? Z(s.signal) : null, { data: r } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: n });
    if (!r)
      throw new B("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { littleEndian: a, firstIFD: o, isBigTiff: u } = At(r), l = [];
    await this._readIFDs(l, r, a, o, 0, u ? 8 : 4, n);
    const h = zt(l), { width: c, height: f, tileWidth: p, tileHeight: m, planes: g, pixelType: y, compression: d, firstPyramidLevel: I, maximumPyramidLevel: x, pyramidBlockWidth: _, pyramidBlockHeight: M, tileBoundary: v, affine: T, metadata: R } = h, P = ((e = h.extent.spatialReference) == null ? void 0 : e.wkt) || ((t = h.extent.spatialReference) == null ? void 0 : t.wkid);
    let b = be(P), O = !1;
    b == null && (O = !0, b = new G({ wkid: 3857 }));
    const F = new L({ ...h.extent, spatialReference: b }), J = new N(F ? { x: F.xmin, y: F.ymax, spatialReference: b } : { x: 0, y: 0 }), W = new fe({ blockWidth: p, blockHeight: m, pyramidBlockWidth: _, pyramidBlockHeight: M, compression: d, origin: J, firstPyramidLevel: I, maximumPyramidLevel: x, blockBoundary: v }), V = new N({ x: (F.xmax - F.xmin) / c, y: (F.ymax - F.ymin) / f, spatialReference: b }), q = R ? { BandProperties: R.bandProperties, DataType: R.dataType } : {}, C = new re({ width: c, height: f, bandCount: g, pixelType: y, compression: d, pixelSize: V, storageInfo: W, spatialReference: b, isPseudoSpatialReference: O, keyProperties: q, extent: F, statistics: R ? R.statistics : null });
    if (T != null && T.length && (C.nativeExtent = new L({ xmin: -0.5, ymin: 0.5 - f, xmax: c - 0.5, ymax: 0.5, spatialReference: b }), C.transform = new Me({ polynomialOrder: 1, forwardCoefficients: [T[2] + T[0] / 2, T[5] - T[3] / 2, T[0], T[3], -T[1], -T[4]] }), C.extent = C.transform.forwardTransform(C.nativeExtent), C.pixelSize = new N({ x: (F.xmax - F.xmin) / c, y: (F.ymax - F.ymin) / f, spatialReference: b }), W.origin.x = -0.5, W.origin.y = 0.5), (i = this.ioConfig.skipExtensions) == null || !i.includes("aux.xml")) {
      const $ = await this._fetchAuxiliaryData(s);
      if ($ != null) {
        var E;
        if (C.statistics = (E = $.statistics) != null ? E : C.statistics, C.histograms = $.histograms, $.histograms && !k(C.statistics) && (C.statistics = ke($.histograms)), $.transform && !T) {
          C.transform = $.transform, C.nativeExtent = C.extent;
          const A = C.transform.forwardTransform(C.nativeExtent);
          C.pixelSize = new N({ x: (A.xmax - A.xmin) / c, y: (A.ymax - A.ymin) / f, spatialReference: b }), C.extent = A;
        }
        C.spatialReference || (C.spatialReference = $.spatialReference);
      }
    }
    if (this._set("rasterInfo", C), this._headerInfo = { littleEndian: a, isBigTiff: u, ifds: l, ...h }, !this._headerInfo.isSupported)
      throw new B("tiffraster:open", "this tiff is not supported: " + this._headerInfo.message);
    this.updateTileInfo();
  }
  async fetchRawTile(s, e, t, i = {}) {
    var n;
    if ((n = this._headerInfo) == null || !n.isSupported || this.isBlockOutside(s, e, t))
      return null;
    const r = this._getTileLocation(s, e, t);
    if (!r)
      return null;
    const { ranges: a, actualTileWidth: o, actualTileHeight: u, ifd: l } = r, h = a.map((v) => this.request(this.url, { range: v, responseType: "array-buffer", signal: i.signal })), c = await Promise.all(h), f = c.map((v) => v.data.byteLength).reduce((v, T) => v + T), p = c.length === 1 ? c[0].data : new ArrayBuffer(f), m = [0], g = [0];
    if (c.length > 1) {
      const v = new Uint8Array(p);
      for (let T = 0, R = 0; T < c.length; T++) {
        const P = c[T].data;
        v.set(new Uint8Array(P), R), m[T] = R, R += P.byteLength, g[T] = P.byteLength;
      }
    }
    const { blockWidth: y, blockHeight: d } = this.getBlockWidthHeight(s), I = await this.decodePixelBlock(p, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: l, offsets: m, sizes: g }, width: y, height: d, planes: null, pixelType: null });
    let x, _, M;
    if (o !== y || u !== d) {
      let v = I.mask;
      if (v)
        for (x = 0; x < d; x++)
          if (M = x * y, x < u)
            for (_ = o; _ < y; _++)
              v[M + _] = 0;
          else
            for (_ = 0; _ < y; _++)
              v[M + _] = 0;
      else
        for (v = new Uint8Array(y * d), I.mask = v, x = 0; x < u; x++)
          for (M = x * y, _ = 0; _ < o; _++)
            v[M + _] = 1;
    }
    return I;
  }
  async _readIFDs(s, e, t, i, n, r = 4, a) {
    if (!i)
      return null;
    (i >= e.byteLength || i < 0) && (e = (await this.request(this.url, { range: { from: i + n, to: i + n + this._bufferSize }, responseType: "array-buffer", signal: a })).data, n = i + n, i = 0);
    const o = await this._readIFD(e, t, i, n, pe.TIFF_TAGS, r, a);
    if (s.push(o.ifd), !o.nextIFD)
      return null;
    await this._readIFDs(s, e, t, o.nextIFD - n, n, r, a);
  }
  async _readIFD(s, e, t, i, n = pe.TIFF_TAGS, r = 4, a) {
    if (!s)
      return null;
    const o = Ht(s, e, t, i, n, r);
    if (o.success) {
      const u = [];
      if (o.ifd.forEach((l) => {
        l.values || u.push(l);
      }), u.length > 0) {
        const l = u.map((c) => c.offlineOffsetSize), h = Math.min.apply(null, l.map((c) => c[0]));
        if (Math.min.apply(null, l.map((c) => c[0] + c[1])) - h <= this._bufferSize) {
          const { data: c } = await this.request(this.url, { range: { from: h, to: h + this._bufferSize }, responseType: "array-buffer", signal: a });
          s = c, i = h, u.forEach((f) => Lt(s, e, f, i));
        }
      }
      if (o.ifd.has("GEOKEYDIRECTORY")) {
        const l = o.ifd.get("GEOKEYDIRECTORY"), h = l.values;
        if (h && h.length > 4) {
          const c = h[0] + "." + h[1] + "." + h[2], f = await this._readIFD(s, e, l.valueOffset + 6 - i, i, pe.GEO_KEYS, 2, a);
          l.data = f.ifd, l.data && l.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [c] });
        }
      }
      return o;
    }
    if (o.requiredBufferSize && o.requiredBufferSize !== s.byteLength)
      return (s = (await this.request(this.url, { range: { from: i, to: i + o.requiredBufferSize + 4 }, responseType: "array-buffer", signal: a })).data).byteLength < o.requiredBufferSize ? null : this._readIFD(s, e, 0, i, pe.TIFF_TAGS, 4, a);
  }
  _getTileLocation(s, e, t) {
    const { firstPyramidLevel: i, blockBoundary: n } = this.rasterInfo.storageInfo, r = s === 0 ? 0 : s - (i - 1), a = this._headerInfo.ifds[r];
    if (!a)
      return null;
    const o = Nt(a, this._headerInfo), u = je(a, "TILEOFFSETS");
    if (u === void 0)
      return null;
    const l = je(a, "TILEBYTECOUNTS"), { minRow: h, minCol: c, maxRow: f, maxCol: p } = n[r];
    if (e > f || t > p || e < h || t < c)
      return null;
    const m = we(a, "IMAGEWIDTH"), g = we(a, "IMAGELENGTH"), y = we(a, "TILEWIDTH"), d = we(a, "TILELENGTH"), I = o ? this.rasterInfo.bandCount : 1, x = I * e * (p + 1) + t, _ = [{ from: u[x], to: u[x + I - 1] + l[x + I - 1] - 1 }];
    if (o) {
      let T = !0;
      for (let R = 0; R < I; R++)
        if (u[x + R] + l[x + R] !== u[x + R + 1]) {
          T = !1;
          break;
        }
      if (!T)
        for (let R = 0; R < I; R++)
          _[R] = { from: u[x + R], to: u[x + R] + l[x + R] - 1 };
    }
    const M = u[x], v = l[x];
    return M == null || v == null ? null : { ranges: _, ifd: a, actualTileWidth: t === p ? m % y : y, actualTileHeight: e === f ? g % d : d };
  }
  async _fetchAuxiliaryData(s) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: s == null ? void 0 : s.signal });
      return Pe(e);
    } catch {
      return null;
    }
  }
};
w([S()], te.prototype, "_files", void 0), w([S()], te.prototype, "_headerInfo", void 0), w([S()], te.prototype, "_bufferSize", void 0), w([S({ type: String, json: { write: !0 } })], te.prototype, "datasetFormat", void 0), te = w([K("geoscene.layers.support.rasterDatasets.TIFFRaster")], te);
const pi = te, H = /* @__PURE__ */ new Map();
H.set("CRF", { desc: "Cloud Raster Format", constructor: li }), H.set("MRF", { desc: "Meta Raster Format", constructor: mi }), H.set("TIFF", { desc: "GeoTIFF", constructor: pi }), H.set("RasterTileServer", { desc: "Raster Tile Server", constructor: di }), H.set("JPG", { desc: "JPG Raster Format", constructor: Ie }), H.set("PNG", { desc: "PNG Raster Format", constructor: Ie }), H.set("GIF", { desc: "GIF Raster Format", constructor: Ie }), H.set("BMP", { desc: "BMP Raster Format", constructor: Ie });
class yi {
  static get supportedFormats() {
    const e = /* @__PURE__ */ new Set();
    return H.forEach((t, i) => e.add(i)), e;
  }
  static async open(e) {
    const { url: t, ioConfig: i, sourceJSON: n } = e;
    let r = e.datasetFormat;
    r == null && t.lastIndexOf(".") && (r = t.slice(t.lastIndexOf(".") + 1).toUpperCase()), r === "OVR" || r === "TIF" ? r = "TIFF" : r !== "JPG" && r !== "JPEG" && r !== "JFIF" || (r = "JPG"), t.toLowerCase().indexOf("/imageserver") > -1 && t.toLowerCase().indexOf("/wcsserver") === -1 && (r = "RasterTileServer");
    const a = { url: t, sourceJSON: n, datasetFormat: r, ioConfig: i || { bandIds: null, sampling: null } };
    let o, u;
    if (this.supportedFormats.has(r))
      return o = H.get(r).constructor, u = new o(a), await u.open({ signal: e.signal }), u;
    if (r)
      throw new B("rasterfactory:open", "not a supported format " + r);
    const l = Array.from(H.keys());
    let h = 0;
    const c = function() {
      return r = l[h++], r ? (o = H.get(r).constructor, u = new o(a), u.open({ signal: e.signal }).then(() => u).catch(() => c())) : null;
    };
    return c();
  }
  static register(e, t, i) {
    H.has(e.toUpperCase()) || H.set(e.toUpperCase(), { desc: t, constructor: i });
  }
}
let D = class extends at(ot(lt(ut(ct(ri(ht(ft(dt(vt))))))))) {
  constructor(...s) {
    super(...s), this.bandIds = null, this.interpolation = null, this.legendEnabled = !0, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.title = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.fields = null;
  }
  normalizeCtorArgs(s, e) {
    return typeof s == "string" ? { url: s, ...e } : s;
  }
  load(s) {
    const e = k(s) ? s.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, s).catch(mt).then(() => this._openRaster(e))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    var s, e;
    let t = [new he({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: !1, length: 50, type: "string" })];
    const i = (s = this.rasterInfo) == null || (e = s.attributeTable) == null ? void 0 : e.fields, n = "Raster.";
    if (i) {
      const o = i.filter((u) => u.type !== "oid" && u.name.toLowerCase() !== "value").map((u) => {
        const l = u.clone();
        return l.name = n + u.name, l;
      });
      t = t.concat(o);
    }
    const r = this.rasterInfo.dataType;
    if ((r === "vector-magdir" || r === "vector-uv") && k(this.rasterInfo.multidimensionalInfo)) {
      var a;
      const o = (a = this.rasterInfo.multidimensionalInfo.variables[0].unit) == null ? void 0 : a.trim(), u = "Magnitude" + (o ? ` (${o})` : "");
      t.push(new he({ name: "Raster.Magnitude", alias: u, domain: null, editable: !1, type: "double" })), t.push(new he({ name: "Raster.Direction", alias: "Direction (°)", domain: null, editable: !1, type: "double" }));
    }
    return t;
  }
  set renderer(s) {
    this._set("renderer", s), this.updateRenderer();
  }
  readRenderer(s, e, t) {
    const i = e && e.layerDefinition && e.layerDefinition.drawingInfo && e.layerDefinition.drawingInfo.renderer, n = _t(i, t) || void 0;
    if (n != null)
      return n;
  }
  createPopupTemplate(s) {
    return pt({ fields: this.rasterFields, title: this.title }, s);
  }
  write(s, e) {
    const { raster: t } = this;
    if (this.loaded ? t.datasetFormat === "RasterTileServer" && (t.tileType === "Raster" || t.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url))
      return super.write(s, e);
    if (e && e.messages) {
      const i = `${e.origin}/${e.layerContainerType || "operational-layers"}`;
      e.messages.push(new B("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${i}'`, { layer: this }));
    }
    return null;
  }
  async _openRaster(s) {
    this.raster ? (this.raster.rasterInfo || await this.raster.open(), this.url = this.raster.url) : this.raster = await yi.open({ url: this.url, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: s });
    const { rasterInfo: e } = this.raster;
    if (!e)
      throw new B("imagery-tile-layer:load", "cannot load resources on " + this.url);
    if (this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null) {
      const t = this.raster.tileType === "Map" && this.sourceJSON.minLOD != null && this.sourceJSON.maxLOD != null ? this.sourceJSON : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
      this.read(t, { origin: "service" });
    }
    this.title == null && (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = !1), this._configDefaultSettings(), this.watch("customParameters", (t) => this.raster.ioConfig.customFetchParameters = t);
  }
};
w([S({ type: [yt], json: { write: { overridePolicy() {
  var s;
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || ((s = this.bandIds) == null ? void 0 : s.join(",")) !== "0,1,2" };
} } } })], D.prototype, "bandIds", void 0), w([S({ json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.interpolation !== "bilinear" };
} } } }), gt(Ct)], D.prototype, "interpolation", void 0), w([S({ json: { write: !0 } })], D.prototype, "multidimensionalDefinition", void 0), w([S(xt)], D.prototype, "legendEnabled", void 0), w([S({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], D.prototype, "isReference", void 0), w([S({ type: ["show", "hide"] })], D.prototype, "listMode", void 0), w([S()], D.prototype, "sourceJSON", void 0), w([S({ readOnly: !0, json: { origins: { service: { read: { source: "currentVersion" } } } } })], D.prototype, "version", void 0), w([S()], D.prototype, "title", void 0), w([S({ readOnly: !0, json: { read: !1 } })], D.prototype, "type", void 0), w([S({ type: ["ArcGISTiledImageServiceLayer"] })], D.prototype, "operationalLayerType", void 0), w([S({ type: Boolean, value: !0, json: { read: { source: "disablePopup", reader: (s, e) => !e.disablePopup }, write: { target: "disablePopup", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
}, writer(s, e, t) {
  e[t] = !s;
} } } })], D.prototype, "popupEnabled", void 0), w([S({ type: It, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
} } } })], D.prototype, "popupTemplate", void 0), w([S({ readOnly: !0 })], D.prototype, "defaultPopupTemplate", null), w([S({ readOnly: !0, type: [he] })], D.prototype, "fields", void 0), w([S({ readOnly: !0, type: [he] })], D.prototype, "rasterFields", null), w([S({ types: Qe, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
  var s;
  const e = ((s = this.renderer) == null ? void 0 : s.type) === "raster-stretch" && this.renderer.stretchType === "none" && !this.renderer.useGamma;
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || !e };
} }, origins: { "web-scene": { types: kt, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (s) => ({ enabled: s && s.type !== "vector-field" && s.type !== "flow" }) } } } } })], D.prototype, "renderer", null), w([wt("renderer")], D.prototype, "readRenderer", null), D = w([K("geoscene.layers.ImageryTileLayer")], D);
const Oi = D;
export {
  Oi as default
};

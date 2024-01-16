import { hH as dt, bm as Z, j8 as st, s as De, H as O, g0 as Be, az as A, aC as H, ae as nt, B as mt, d4 as rt, fL as pt, a as I, b as v, cu as at, c as Q, bk as yt, g as Ne, aE as He, a9 as q, bl as gt, $ as xt, T as ot, R as Me, z as wt, fO as It, ad as bt, L as St, ck as Rt, co as vt, cm as Tt, cn as _t, cP as Ft, cM as kt, cN as Mt, cl as Pt, cp as Ct, cq as Ot, cW as ce, eT as $t, l as Dt, cV as Bt, bj as Nt, ct as Jt, k as Et, ax as zt } from "./index-O2RTvw_o.js";
import { c as At, N as Pe, l as Ht, d as Lt, a as Wt, h as qt, Q as Le, E as We, L as Gt, q as jt, k as qe, t as Ut, m as Vt, b as Xt } from "./ImageHistogramParameters-yS86cJze.js";
import { h as lt, D as Yt, i as Kt, a as Qt, p as ct, d as Ge, o as Zt, f as je, g as ei } from "./multidimensionalUtils-hmbECSFw.js";
import { j as ti, n as pe, m as ii, L as si, r as Ue, a as ye, h as ni, g as Je, P as ri, b as ai, v as oi, U as li, N as ci, R as ui, c as ge, B as hi, d as fi, D as di } from "./RasterSymbolizer-MmJLX_OE.js";
import { i as Ve, m as Xe, x as Ye, h as mi, s as pi } from "./RawBlockCache-tBPqFl1-.js";
import { U as ve, R as ut, I as yi, a as gi, l as xi, c as wi, u as ee, f as Ii, s as bi, W as Si, T as Ri } from "./dataUtils-_4KU8Je7.js";
import { k as Ce, K as xe, _ as Ke, i as Qe, n as vi, Q as Te, q as be, $ as Ti, V as _i, C as Fi, J as ki } from "./rasterProjectionHelper-6zLWNfKl.js";
import { _ as Oe, f as Mi, i as Pi, y as Ee, n as Ci, h as Oi } from "./utils-Vz-UiRSa.js";
import { T as $i } from "./TilemapCache-P7-AHLsj.js";
import "vue";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./utils-4fNQuSlg.js";
import "./utils-hTTSzIWS.js";
import "./utils-SOJirR9_.js";
import "./rasterRendererChecks-oYgkjG7g.js";
import "./generateRendererUtils-_k7fengR.js";
import "./colorUtils-lH7-fxuz.js";
import "./ByteSizeUnit-dxTdcbwN.js";
const Ze = 8, Di = 256;
let L = class extends dt(yt) {
  constructor() {
    super(...arguments), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = !0, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  async init() {
    const s = Ce();
    this.addResolvingPromise(s), await this.when();
  }
  normalizeCtorArgs(s) {
    return s && s.ioConfig && (s = { ...s, ioConfig: { resolution: null, bandIds: null, sampling: "closest", tileInfo: Z.create(), ...s.ioConfig } }), s;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: s } = this, e = xe(s.spatialReference);
    return e != null && s.extent.width >= e / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const { transform: s } = this.rasterInfo;
    return s == null || s.type === "gcs-shift";
  }
  set rasterJobHandler(s) {
    var e, n;
    this._set("rasterJobHandler", s), this.datasetFormat === "Function" && ((n = (e = this.primaryRasters) == null ? void 0 : e.rasters) == null || n.forEach((t) => t.rasterJobHandler = s));
  }
  set url(s) {
    this._set("url", st(s, De.getLogger(this)));
  }
  async open(s) {
    throw new O("BaseRaster:open-not-implemented", "open() is not implemented");
  }
  async fetchTile(s, e, n, t = {}) {
    const i = t.tileInfo || this.rasterInfo.storageInfo.tileInfo, r = this.getTileExtentFromTileInfo(s, e, n, i);
    return this.fetchPixels(r, i.size[0], i.size[1], t);
  }
  async identify(s, e = {}) {
    var M;
    s = Be(A, s).clone().normalize();
    const { multidimensionalDefinition: n, timeExtent: t } = e, { rasterInfo: i } = this, { hasMultidimensionalTranspose: r, multidimensionalInfo: a } = i;
    let { transposedVariableName: o } = e;
    const l = a != null && r && (t != null || lt(n));
    l && !o && (o = n != null && n.length > 0 ? n[0].variableName ?? void 0 : a.variables[0].name, e = { ...e, transposedVariableName: o }), e = this._getRequestOptionsWithSliceId(e);
    const { spatialReference: c, extent: d } = i, { datumTransformation: u } = e;
    let m = Ke(s, c, u);
    if (!d.intersects(m))
      return { location: m, value: null };
    if (i.transform != null) {
      const P = i.transform.inverseTransform(m);
      if (!i.nativeExtent.intersects(P))
        return { location: P, value: null };
      m = P;
    }
    let f = 0;
    const p = o != null && a != null && i.hasMultidimensionalTranspose;
    if (this.datasetFormat === "Function") {
      const P = this.primaryRasters.rasters[0];
      if (p)
        return P.identify(m, e);
      const { pixelSize: E } = i, $ = 3, C = E.x * $ / 2, D = E.y * $ / 2, N = new H({ xmin: m.x - C, xmax: m.x + C, ymin: m.y - D, ymax: m.y + D, spatialReference: c }), V = { interpolation: "nearest" }, { pixelBlock: z } = await P.fetchPixels(N, $, $, V), { pixelBlock: B } = await this.fetchPixels(N, $, $, V);
      if (z == null)
        return { location: m, value: null };
      const j = Math.floor($ * $ * 0.5), oe = !z.mask || z.mask[j] ? z.pixels.map((G) => G[j]) : null;
      let X;
      return B != null && (X = !B.mask || B.mask[j] ? B.pixels.map((G) => G[j]) : void 0), { location: m, value: oe, processedValue: X, pyramidLevel: 0 };
    }
    if (!p) {
      if (e.srcResolution)
        f = Qe(e.srcResolution, i, this.ioConfig.sampling).pyramidLevel;
      else if (f = await this.computeBestPyramidLevelForLocation(s, e), f == null)
        return { location: m, value: null };
    }
    const y = this.identifyPixelLocation(m, f, null, p);
    if (y === null)
      return { location: m, value: null };
    const { row: h, col: g, rowOffset: x, colOffset: w, blockWidth: b } = y, T = o ?? e.sliceId, R = Ve(this.url, T), F = `${f}/${h}/${g}`;
    let _ = Xe(R, null, F);
    _ == null && (_ = this.fetchRawTile(f, h, g, e), Ye(R, null, F, _));
    const k = await _;
    if (k == null || !((M = k.pixels) != null && M.length))
      return { location: m, value: null };
    const S = x * b + w;
    return this._processIdentifyResult(k, { srcLocation: m, position: S, pyramidLevel: f, useTransposedTile: !!p, requestSomeSlices: l, identifyOptions: e });
  }
  async fetchPixels(s, e, n, t = {}) {
    s = vi(s), t = this._getRequestOptionsWithSliceId(t);
    const { _hasNoneOrGCSShiftTransform: i } = this;
    if (t.requestRawData && i)
      return this._fetchPixels(s, e, n, t);
    const r = xe(s.spatialReference), a = Te(s);
    if (r == null || a === 0 || a === 1 && this._isGlobalWrappableSource && i)
      return this._fetchPixels(s, e, n, t);
    if (a >= 3)
      return { extent: s, pixelBlock: null };
    const o = [], { xmin: l, xmax: c } = s, d = Math.round(r / (c - l) * e), u = d - Math.round((r / 2 - l) / (c - l) * e);
    let m = 0;
    const f = [];
    for (let g = 0; g <= a; g++) {
      const x = new H({ xmin: g === 0 ? l : -r / 2, xmax: g === a ? c - r * g : r / 2, ymin: s.ymin, ymax: s.ymax, spatialReference: s.spatialReference }), w = g === 0 ? d - u : g === a ? e - m : d;
      m += w, f.push(w);
      const b = t.disableWrapAround && g > 0 ? null : this._fetchPixels(x, w, n, t);
      o.push(b);
    }
    const p = (await Promise.all(o)).map((g) => g == null ? void 0 : g.pixelBlock);
    let y = null;
    const h = { width: e, height: n };
    return this.rasterJobHandler ? y = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: p, srcMosaicSize: h, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: f }, t)).pixelBlock : y = ve(p, h, { blockWidths: f }), { extent: s, srcExtent: be(s, this.rasterInfo.spatialReference, t.datumTransformation), pixelBlock: y };
  }
  async fetchRawPixels(s, e, n, t = {}) {
    e = { x: Math.floor(e.x), y: Math.floor(e.y) };
    const i = await this._fetchRawTiles(s, e, n, t), { nativeExtent: r, nativePixelSize: a, storageInfo: o } = this.rasterInfo, l = 2 ** s, c = a.x * l, d = a.y * l, u = new H({ xmin: r.xmin + c * e.x, xmax: r.xmin + c * (e.x + n.width - 1), ymin: r.ymax - d * (e.y + n.height - 1), ymax: r.ymax - d * e.y, spatialReference: r.spatialReference });
    if (!i)
      return { extent: u, srcExtent: u, pixelBlock: null };
    const { pixelBlocks: m, mosaicSize: f } = i;
    if (m.length === 1 && m[0] != null && m[0].width === n.width && m[0].height === n.height)
      return { extent: u, srcExtent: u, pixelBlock: i.pixelBlocks[0] };
    const p = s > 0 ? o.pyramidBlockWidth : o.blockWidth, y = s > 0 ? o.pyramidBlockHeight : o.blockHeight, h = { x: e.x % p, y: e.y % y };
    let g;
    return this.rasterJobHandler ? g = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: m, srcMosaicSize: f, destDimension: n, clipOffset: h, clipSize: n, coefs: null, sampleSpacing: null, interpolation: t.interpolation, alignmentInfo: null, blockWidths: null }, t)).pixelBlock : g = ve(m, f, { clipOffset: h, clipSize: n }), { extent: u, srcExtent: u, pixelBlock: g };
  }
  fetchRawTile(s, e, n, t) {
    throw new O("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(s) {
    return be(this.rasterInfo.extent, s);
  }
  decodePixelBlock(s, e) {
    return !this.rasterJobHandler || e.useCanvas ? ti(s, e) : this.rasterJobHandler.decode({ data: s, options: e });
  }
  async request(s, e, n = 0) {
    const { customFetchParameters: t } = this.ioConfig, { range: i, query: r, headers: a } = e;
    n = n ?? e.retryCount ?? this.ioConfig.retryCount;
    const o = i ? { Range: `bytes=${i.from}-${i.to}` } : null;
    try {
      return await nt(s, { ...e, query: { ...r, ...t }, headers: { ...a, ...o } });
    } catch (l) {
      if (n > 0)
        return n--, this.request(s, e, n);
      throw l;
    }
  }
  getSliceIndex(s) {
    const { multidimensionalInfo: e } = this.rasterInfo;
    return e == null || s == null || s.length === 0 ? null : Yt(s, e);
  }
  getTileExtentFromTileInfo(s, e, n, t) {
    const i = mt(t.lodAt(s));
    return this.getTileExtent({ x: i.resolution, y: i.resolution }, e, n, t.origin, t.spatialReference, t.size);
  }
  updateTileInfo() {
    const { storageInfo: s, spatialReference: e, extent: n, pixelSize: t } = this.rasterInfo;
    if (!s.tileInfo) {
      const i = [], r = s.maximumPyramidLevel || 0;
      let a = Math.max(t.x, t.y), o = 1 / 0.0254 * 96 * a;
      for (let c = 0; c <= r; c++)
        i.push(new rt({ level: r - c, resolution: a, scale: o })), a *= 2, o *= 2;
      const l = new A({ x: n.xmin, y: n.ymax, spatialReference: e });
      s.tileInfo = new Z({ origin: l, size: [s.blockWidth, s.blockHeight], spatialReference: e, lods: i }), s.isVirtualTileInfo = !0;
    }
  }
  createRemoteDatasetStorageInfo(s, e = 512, n = 512, t) {
    const { width: i, height: r, nativeExtent: a, pixelSize: o, spatialReference: l } = s, c = new A({ x: a.xmin, y: a.ymax, spatialReference: l });
    t == null && (t = Math.max(0, Math.round(Math.log(Math.max(i, r)) / Math.LN2 - 8)));
    const d = this.computeBlockBoundary(a, 512, 512, { x: a.xmin, y: a.ymax }, [o], t);
    s.storageInfo = new pe({ blockWidth: e, blockHeight: n, pyramidBlockWidth: e, pyramidBlockHeight: n, origin: c, firstPyramidLevel: 1, maximumPyramidLevel: t, blockBoundary: d });
  }
  async computeBestPyramidLevelForLocation(s, e = {}) {
    return 0;
  }
  computeBlockBoundary(s, e, n, t, i, r = 0, a = 2) {
    if (i.length === 1 && r > 0) {
      i = [...i];
      let { x: d, y: u } = i[0];
      for (let m = 0; m < r; m++)
        d *= a, u *= a, i.push({ x: d, y: u });
    }
    const o = [], { x: l, y: c } = t;
    for (let d = 0; d < i.length; d++) {
      const { x: u, y: m } = i[d];
      o.push({ minCol: Math.floor((s.xmin - l + 0.1 * u) / e / u), maxCol: Math.floor((s.xmax - l - 0.1 * u) / e / u), minRow: Math.floor((c - s.ymax + 0.1 * m) / n / m), maxRow: Math.floor((c - s.ymin - 0.1 * m) / n / m) });
    }
    return o;
  }
  getPyramidPixelSize(s) {
    const { nativePixelSize: e } = this.rasterInfo, { pyramidResolutions: n, pyramidScalingFactor: t } = this.rasterInfo.storageInfo;
    if (s === 0)
      return e;
    if (n != null && n.length)
      return n[s - 1];
    const i = t ** s;
    return { x: e.x * i, y: e.y * i };
  }
  identifyPixelLocation(s, e, n, t) {
    const { spatialReference: i, nativeExtent: r, storageInfo: a } = this.rasterInfo, { maximumPyramidLevel: o, origin: l, transposeInfo: c } = a, d = t && c != null ? c.tileSize[0] : a.blockWidth, u = t && c != null ? c.tileSize[1] : a.blockHeight, m = Ke(s, i, n);
    if (!r.intersects(m) || e < 0 || e > o)
      return null;
    const f = this.getPyramidPixelSize(e), { x: p, y } = f, h = (l.y - m.y) / y / u, g = (m.x - l.x) / p / d, x = Math.min(u - 1, Math.floor((h - Math.floor(h)) * u)), w = Math.min(d - 1, Math.floor((g - Math.floor(g)) * d));
    return { pyramidLevel: e, row: Math.floor(h), col: Math.floor(g), rowOffset: x, colOffset: w, blockWidth: d, srcLocation: m };
  }
  getTileExtent(s, e, n, t, i, r) {
    const [a, o] = r, l = t.x + n * a * s.x, c = l + a * s.x, d = t.y - e * o * s.y, u = d - o * s.y;
    return new H({ xmin: l, xmax: c, ymin: u, ymax: d, spatialReference: i });
  }
  getBlockWidthHeight(s) {
    return { blockWidth: s > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: s > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(s, e, n) {
    const t = this.rasterInfo.storageInfo.blockBoundary[s];
    return !t || t.maxRow < e || t.maxCol < n || t.minRow > e || t.minCol > n;
  }
  async _fetchPixels(s, e, n, t = {}) {
    let i = Te(s);
    if (i >= 2)
      return { extent: s, pixelBlock: null };
    const r = this._getSourceDataInfo(s, e, n, t), { pyramidLevel: a, srcResolution: o, srcExtent: l, srcWidth: c, srcHeight: d, ul: u } = r;
    if (c === 0 || d === 0)
      return { extent: s, srcExtent: l, pixelBlock: null };
    const { rasterInfo: m } = this, f = m.transform, p = (f == null ? void 0 : f.type) === "gcs-shift", y = xe(s.spatialReference) != null;
    !p && y || (i = Te(r.srcExtent, p));
    const h = await this._fetchRawTiles(a, u, { width: c, height: d, wrapCount: i }, t);
    if (!h)
      return { extent: s, srcExtent: l, pixelBlock: null };
    const g = m.storageInfo, x = a > 0 ? g.pyramidBlockWidth : g.blockWidth, w = a > 0 ? g.pyramidBlockHeight : g.blockHeight;
    let { x: b, y: T } = m.pixelSize;
    if (a > 0) {
      const { pyramidResolutions: G, pyramidScalingFactor: ft } = g;
      if (G != null && G[a - 1])
        ({ x: b, y: T } = G[a - 1]);
      else {
        const Ae = ft ** a;
        b *= Ae, T *= Ae;
      }
    }
    const R = m.spatialReference, F = new A({ x: b, y: T, spatialReference: R }), _ = x === c && w === d && u.x % x == 0 && u.y % w == 0, k = new A({ x: (s.xmax - s.xmin) / e, y: (s.ymax - s.ymin) / n, spatialReference: s.spatialReference }), S = !s.spatialReference.equals(R), M = R.isGeographic ? 1e-9 : 1e-4, { datumTransformation: P } = t;
    if (!S && _ && h.pixelBlocks.length === 1 && x === e && w === n && this._isSameResolution(o, k, M))
      return { extent: s, srcExtent: l, srcTilePixelSize: F, pixelBlock: h.pixelBlocks[0] };
    const E = y && xe(l.spatialReference) != null && this._hasNoneOrGCSShiftTransform, $ = t.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    $ && !this.rasterJobHandler && await Ce();
    const C = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: s, srcBufferExtent: h.extent, pixelSize: k.toJSON(), datumTransformation: P, rasterTransform: f, hasWrapAround: i > 0 || E, isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== !1, includeGCSGrid: $ }, t) : Ti({ projectedExtent: s, srcBufferExtent: h.extent, pixelSize: k, datumTransformation: P, rasterTransform: f, hasWrapAround: i > 0 || E, isAdaptive: !1, includeGCSGrid: $ });
    let D;
    const N = !t.requestRawData, V = { rows: C.spacing[0], cols: C.spacing[1] }, z = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(a, h.extent.xmin) : void 0, { pixelBlocks: B, mosaicSize: j, isPartiallyFilled: oe } = h;
    let X = null;
    if (this.rasterJobHandler)
      ({ pixelBlock: D, localNorthDirections: X } = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: B, srcMosaicSize: j, destDimension: N ? { width: e, height: n } : null, coefs: N ? C.coefficients : null, sampleSpacing: N ? V : null, projectDirections: $, gcsGrid: $ ? C.gcsGrid : null, isUV: this.rasterInfo.dataType === "vector-uv", interpolation: t.interpolation, alignmentInfo: z, blockWidths: null }, t));
    else {
      const G = ve(B, j, { alignmentInfo: z });
      D = N ? ut(G, { width: e, height: n }, C.coefficients, V, t.interpolation) : G, $ && C.gcsGrid && (X = yi({ width: e, height: n }, C.gcsGrid), D = gi(D, this.rasterInfo.dataType, X));
    }
    return t.requestRawData || $ ? { extent: s, srcExtent: l, srcTilePixelSize: F, pixelBlock: D, transformGrid: C, localNorthDirections: X, isPartiallyFilled: oe } : { extent: s, srcExtent: l, srcTilePixelSize: F, pixelBlock: D };
  }
  async _fetchRawTiles(s, e, n, t) {
    const { origin: i, blockBoundary: r } = this.rasterInfo.storageInfo, { blockWidth: a, blockHeight: o } = this.getBlockWidthHeight(s);
    let { x: l, y: c } = e, { width: d, height: u, wrapCount: m } = n;
    const f = this._getRasterTileAlignmentInfo(s, 0);
    t.buffer && (l -= t.buffer.cols, c -= t.buffer.rows, d += 2 * t.buffer.cols, u += 2 * t.buffer.rows);
    let p = 0, y = 0, h = 0;
    m && f != null && ({ worldColumnCountFromOrigin: y, originColumnOffset: h, rightPadding: p } = f, y * f.blockWidth - p >= l + d && (p = 0));
    const g = Math.floor(l / a), x = Math.floor(c / o), w = Math.floor((l + d + p - 1) / a), b = Math.floor((c + u + p - 1) / o), T = r[s];
    if (!T)
      return null;
    const { minRow: R, minCol: F, maxCol: _, maxRow: k } = T;
    if (m === 0 && (b < R || w < F || x > k || g > _))
      return null;
    const S = new Array();
    let M = !1;
    const P = this.ioConfig.allowPartialFill == null ? t.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let z = x; z <= b; z++)
      for (let B = g; B <= w; B++) {
        let j = B;
        if (!t.disableWrapAround && m && f != null && y <= B && (j = B - y - h), z >= R && j >= F && k >= z && _ >= j) {
          const oe = this._fetchRawTile(s, z, j, t);
          P ? S.push(new Promise((X) => {
            oe.then((G) => X(G)).catch(() => {
              M = !0, X(null);
            });
          })) : S.push(oe);
        } else
          S.push(Promise.resolve(null));
      }
    if (S.length === 0)
      return null;
    const E = await Promise.all(S), $ = { height: (b - x + 1) * o, width: (w - g + 1) * a }, { spatialReference: C } = this.rasterInfo, D = this.getPyramidPixelSize(s), { x: N, y: V } = D;
    return { extent: new H({ xmin: i.x + g * a * N, xmax: i.x + (w + 1) * a * N, ymin: i.y - (b + 1) * o * V, ymax: i.y - x * o * V, spatialReference: C }), pixelBlocks: E, mosaicSize: $, isPartiallyFilled: M };
  }
  _isSameResolution(s, e, n) {
    return Math.abs(s.x - e.x) < n && Math.abs(s.y - e.y) < n;
  }
  _fetchRawTile(s, e, n, t) {
    const i = this.rasterInfo.storageInfo.blockBoundary[s];
    if (!i)
      return Promise.resolve(null);
    const { minRow: r, minCol: a, maxCol: o, maxRow: l } = i;
    if (e < r || n < a || e > l || n > o)
      return Promise.resolve(null);
    const c = Ve(this.url, t.sliceId), d = `${s}/${e}/${n}`;
    let u = Xe(c, t.registryId, d);
    if (u == null) {
      const m = new AbortController();
      u = this.fetchRawTile(s, e, n, { ...t, signal: m.signal }), Ye(c, t.registryId, d, u, m), u.catch(() => mi(c, t.registryId, d));
    }
    return t.signal && pt(t, () => {
      pi(c, t.registryId, d);
    }), u;
  }
  _computeMagDirValues(s) {
    var l;
    const { bandCount: e, dataType: n } = this.rasterInfo;
    if (!(e === 2 && n === "vector-magdir" || n === "vector-uv") || (s == null ? void 0 : s.length) !== 2 || !((l = s[0]) != null && l.length))
      return null;
    const t = s[0].length;
    if (n === "vector-magdir") {
      const c = s[1].map((d) => (d + 360) % 360);
      return [s[0], c];
    }
    const [i, r] = s, a = [], o = [];
    for (let c = 0; c < t; c++) {
      const [d, u] = xi([i[c], r[c]]);
      a.push(d), o.push(u);
    }
    return [a, o];
  }
  _getRasterTileAlignmentInfo(s, e) {
    return this._rasterTileAlighmentInfo == null && (this._rasterTileAlighmentInfo = _i(this.rasterInfo)), this._rasterTileAlighmentInfo.pyramidsInfo == null ? null : { startX: e, halfWorldWidth: this._rasterTileAlighmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlighmentInfo.hasGCSSShiftTransform, ...this._rasterTileAlighmentInfo.pyramidsInfo[s] };
  }
  _getSourceDataInfo(s, e, n, t = {}) {
    const i = { datumTransformation: t.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0, ul: { x: 0, y: 0 } };
    t.srcResolution && (i.srcResolution = t.srcResolution, this._updateSourceDataInfo(s, i));
    const r = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: a, srcHeight: o, pyramidLevel: l } = i, c = a / e, d = o / n, u = l < r && c * d >= 16, m = l === r && this._requireTooManySrcTiles(a, o, e, n);
    if (u || m || a === 0 || o === 0) {
      const f = new A({ x: (s.xmax - s.xmin) / e, y: (s.ymax - s.ymin) / n, spatialReference: s.spatialReference });
      let p = Fi(f, this.rasterInfo.spatialReference, s, i.datumTransformation);
      const y = !p || t.srcResolution && p.x + p.y < t.srcResolution.x + t.srcResolution.y;
      if (u && t.srcResolution && y) {
        const h = Math.round(Math.log(Math.max(c, d)) / Math.LN2) - 1;
        if (r - l + 3 >= h) {
          const g = 2 ** h;
          p = { x: t.srcResolution.x * g, y: t.srcResolution.y * g };
        }
      }
      p && (i.srcResolution = p, this._updateSourceDataInfo(s, i));
    }
    return this._requireTooManySrcTiles(i.srcWidth, i.srcHeight, e, n) && (i.srcWidth = 0, i.srcHeight = 0), i;
  }
  _requireTooManySrcTiles(s, e, n, t) {
    const { tileInfo: i } = this.rasterInfo.storageInfo;
    return Math.ceil(s / i.size[0]) * Math.ceil(e / i.size[1]) >= Di || s / n > Ze || e / t > Ze;
  }
  _updateSourceDataInfo(s, e) {
    e.srcWidth = 0, e.srcHeight = 0;
    const { rasterInfo: n } = this, t = n.spatialReference, { srcResolution: i, datumTransformation: r } = e, { pyramidLevel: a, pyramidResolution: o, excessiveReading: l } = Qe(i, n, this.ioConfig.sampling);
    if (l)
      return;
    let c = e.srcExtent || be(s, t, r);
    if (c == null)
      return;
    const d = n.transform;
    d && (c = d.inverseTransform(c)), e.srcExtent = c;
    const { x: u, y: m } = n.storageInfo.origin, f = Math.floor((c.xmin - u) / o.x + 0.1), p = Math.floor((m - c.ymax) / o.y + 0.1), y = Math.floor((c.xmax - u) / o.x - 0.1), h = Math.floor((m - c.ymin) / o.y - 0.1), g = c.width < 0.1 * o.x ? 0 : y - f + 1, x = c.height < 0.1 * o.y ? 0 : h - p + 1;
    e.pyramidLevel = a, e.pyramidResolution = o, e.srcWidth = g, e.srcHeight = x, e.ul = { x: f, y: p };
  }
  _getRequestOptionsWithSliceId(s) {
    return this.rasterInfo.multidimensionalInfo != null && s.sliceId == null && (s = { ...s, sliceId: this.getSliceIndex(s.multidimensionalDefinition) }), s;
  }
  _processIdentifyResult(s, e) {
    const { srcLocation: n, position: t, pyramidLevel: i, useTransposedTile: r } = e, a = s.pixels[0].length / s.width / s.height;
    if (!(!s.mask || s.mask[t]))
      return { location: n, value: null };
    const { multidimensionalInfo: o } = this.rasterInfo;
    if (o == null || !r) {
      const h = s.pixels.map((w) => w[t]), g = { location: n, value: h, pyramidLevel: i }, x = this._computeMagDirValues(h.map((w) => [w]));
      return x != null && x.length && (g.magdirValue = x.map((w) => w[0])), g;
    }
    let l = s.pixels.map((h) => h.slice(t * a, t * a + a)), c = this._computeMagDirValues(l);
    const { requestSomeSlices: d, identifyOptions: u } = e;
    let m = Kt(o, u.transposedVariableName);
    if (d) {
      const h = Qt(m, u.multidimensionalDefinition, u.timeExtent);
      l = l.map((g) => h.map((x) => g[x])), c = c == null ? void 0 : c.map((g) => h.map((x) => g[x])), m = h.map((g) => m[g]);
    }
    const f = s.noDataValues || this.rasterInfo.noDataValue, p = { pixels: l, pixelType: s.pixelType };
    let y;
    return f != null && (wi(p, f), y = p.mask), { location: n, value: null, dataSeries: m.map((h, g) => {
      const x = { value: (y == null ? void 0 : y[g]) === 0 ? null : l.map((w) => w[g]), multidimensionalDefinition: h.multidimensionalDefinition.map((w) => new ct({ ...w, isSlice: !0 })) };
      return c != null && c.length && (x.magdirValue = [c[0][g], c[1][g]]), x;
    }), pyramidLevel: i };
  }
};
I([v()], L.prototype, "_rasterTileAlighmentInfo", void 0), I([v({ readOnly: !0 })], L.prototype, "_isGlobalWrappableSource", null), I([v({ readOnly: !0 })], L.prototype, "_hasNoneOrGCSShiftTransform", null), I([v()], L.prototype, "rasterJobHandler", null), I([v(at)], L.prototype, "url", null), I([v({ type: String, json: { write: !0 } })], L.prototype, "datasetName", void 0), I([v({ type: String, json: { write: !0 } })], L.prototype, "datasetFormat", void 0), I([v()], L.prototype, "hasUniqueSourceStorageInfo", void 0), I([v()], L.prototype, "rasterInfo", void 0), I([v()], L.prototype, "ioConfig", void 0), I([v()], L.prototype, "sourceJSON", void 0), L = I([Q("geoscene.layers.support.rasterDatasets.BaseRaster")], L);
const ae = L;
let ie = class extends ae {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null;
  }
  async open(e) {
    var d, u, m, f;
    await this.init();
    const { rasterFunction: n } = this;
    (u = (d = this.primaryRasters) == null ? void 0 : d.rasters) != null && u.length ? n.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = n.getPrimaryRasters(), this.rasterJobHandler && ((m = this.primaryRasters.rasters) == null || m.forEach((p) => p.rasterJobHandler = this.rasterJobHandler)));
    const { rasters: t, rasterIds: i } = this.primaryRasters, r = t.map((p) => p.rasterInfo ? void 0 : p.open(e));
    await Promise.all(r);
    const a = t.map(({ rasterInfo: p }) => p), o = n.bind({ rasterInfos: a, rasterIds: i });
    if (!o.success || a.length === 0)
      throw new O("raster-function:open", `cannot bind the function: ${o.error ?? ""}`);
    const l = n.functionName === "Table" ? n : (f = n.functionArguments) == null ? void 0 : f.raster;
    (l == null ? void 0 : l.functionName) === "Table" && (n.rasterInfo.attributeTable = Ne.fromJSON(l.functionArguments.attributeTableAsRecordSet)), await this.syncJobHandler();
    const c = a[0];
    this.hasUniqueSourceStorageInfo = a.length === 1 || a.slice(1).every((p) => this._hasSameStorageInfo(p, c)), this.set("sourceJSON", t[0].sourceJSON), this.set("rasterInfo", n.rasterInfo);
  }
  async syncJobHandler() {
    var e;
    return (e = this.rasterJobHandler) == null ? void 0 : e.updateRasterFunction(this.rasterFunction);
  }
  async fetchPixels(e, n, t, i = {}) {
    var w, b;
    const { rasters: r, rasterIds: a } = this.primaryRasters;
    let o = !1;
    const { interpolation: l } = i, c = (w = this.rasterFunction.flatWebGLFunctionChain) == null ? void 0 : w.hasSurfaceFunction;
    !i.requestRawData && l !== "bilinear" && c && (o = r.length === 1 && !i.skipRasterFunction, i = { ...i, interpolation: "bilinear", requestRawData: o });
    const d = r.map((T) => T.fetchPixels(e, n, t, i)), u = await Promise.all(d), m = u.map((T) => T.pixelBlock), f = o || i.requestRawData ? u.map((T) => T.srcTilePixelSize) : null;
    if (i.skipRasterFunction || m.every((T) => T == null))
      return u[0];
    const p = ((b = u.find((T) => T.pixelBlock != null)) == null ? void 0 : b.extent) ?? e, y = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: p, primaryPixelBlocks: m, primaryPixelSizes: f, primaryRasterIds: a }) : this.rasterFunction.process({ extent: p, primaryPixelBlocks: m, primaryPixelSizes: f, primaryRasterIds: a }), { transformGrid: h } = u[0];
    if (!o || y == null || h == null)
      return { ...u[0], pixelBlock: y };
    const g = { rows: h.spacing[0], cols: h.spacing[1] };
    let x;
    return this.rasterJobHandler ? x = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: [y], srcMosaicSize: { width: y.width, height: y.height }, destDimension: { width: n, height: t }, coefs: h.coefficients, sampleSpacing: g, projectDirections: !1, gcsGrid: null, isUV: !1, interpolation: l, alignmentInfo: void 0, blockWidths: null }, i)).pixelBlock : x = ut(y, { width: n, height: t }, h.coefficients, g, l), { extent: e, srcExtent: u[0].srcExtent, pixelBlock: x };
  }
  _hasSameStorageInfo(e, n) {
    const { storageInfo: t, pixelSize: i, spatialReference: r, extent: a } = e, { storageInfo: o, pixelSize: l, spatialReference: c, extent: d } = n;
    return i.x === l.x && i.y === l.y && r.equals(c) && a.equals(d) && t.blockHeight === o.blockHeight && t.blockWidth === o.blockWidth && t.maximumPyramidLevel === o.maximumPyramidLevel;
  }
};
I([v({ type: String, json: { write: !0 } })], ie.prototype, "datasetFormat", void 0), I([v()], ie.prototype, "tileType", void 0), I([v()], ie.prototype, "rasterFunction", void 0), I([v()], ie.prototype, "primaryRasters", void 0), ie = I([Q("geoscene.layers.support.rasterDatasets.FunctionRaster")], ie);
const $e = ie;
function Bi(s, e) {
  if (s.spatialReference.equals(e))
    return s;
  const n = He(s.spatialReference), t = He(e);
  if (n === t)
    return s;
  const i = n / t;
  return { x: s.x * i, y: s.y * i };
}
async function Ni(s, e, n) {
  if (n.type === "extent")
    return Ei(s, e, n);
  const { width: t, height: i } = s, r = new Uint8Array(t * i), { contains: a, intersects: o } = await import("./geometryEngine-obmfouvH.js");
  return o(e, n) ? n.type === "polyline" ? zi(s, e, n) : a(n, e) ? s : Ji(s, e, n) : new ee({ pixelType: s.pixelType, width: t, height: i, mask: r, maskIsAlpha: !1, pixels: [...s.pixels] });
}
function Ji(s, e, n) {
  if (!s)
    return s;
  const { width: t, height: i } = s, r = e.width / t, a = e.height / i, { xmin: o, ymax: l } = e;
  let c;
  if (n.type === "extent") {
    const h = (n.xmin - o) / r, g = (n.xmax - o) / r, x = (l - n.ymax) / a, w = (l - n.ymin) / a;
    c = [[[h, x], [h, w], [g, w], [g, x], [h, x]]];
  } else
    c = n.rings.map((h) => h.map(([g, x]) => [(g - o) / r, (l - x) / a]));
  const d = document.createElement("canvas");
  d.width = t, d.height = i;
  const u = d.getContext("2d");
  u.fillStyle = "#f00", c.forEach((h) => {
    u.beginPath(), u.moveTo(h[0][0], h[0][1]);
    for (let g = 0; g < h.length; g++)
      u.lineTo(h[g][0], h[g][1]);
    u.closePath(), u.fill();
  });
  const m = u.getImageData(0, 0, t, i).data, f = s.mask, p = t * i, y = new Uint8Array(p);
  for (let h = 0; h < p; h++)
    f && !f[h] || (y[h] = m[4 * h + 3] > 127 ? 255 : 0);
  return new ee({ pixelType: s.pixelType, width: t, height: i, mask: y, maskIsAlpha: !1, pixels: [...s.pixels] });
}
function Ei(s, e, n) {
  const { width: t, height: i } = s, r = new Uint8Array(t * i), a = e.width / t, o = e.height / i;
  if (n.width / a < 0.5 || n.height / o < 0.5)
    return new ee({ pixelType: s.pixelType, width: t, height: i, mask: r, pixels: [...s.pixels] });
  const { xmin: l, xmax: c, ymin: d, ymax: u } = e, { xmin: m, xmax: f, ymin: p, ymax: y } = n, h = Math.max(l, m), g = Math.min(c, f), x = Math.max(d, p), w = Math.min(u, y), b = 0.5 * a, T = 0.5 * o;
  if (g - h < b || w - x < T || g < l + b || h > c - b || x > u - T || w < d + T)
    return new ee({ pixelType: s.pixelType, width: t, height: i, mask: r, pixels: [...s.pixels] });
  const R = Math.max(0, (h - l) / a), F = Math.min(t, Math.max(0, (g - l) / a)), _ = Math.max(0, (u - w) / o), k = Math.min(i, Math.max(0, (u - x) / o)), S = Math.round(R), M = Math.round(F) - 1, P = Math.round(_), E = Math.round(k) - 1;
  if (S === M && R % 1 > 0.5 && F % 1 < 0.5 || P === E && _ % 1 > 0.5 && k % 1 < 0.5)
    return new ee({ pixelType: s.pixelType, width: t, height: i, mask: r, pixels: [...s.pixels] });
  if (S === 0 && P === 0 && M === t && E === i)
    return s;
  const $ = s.mask;
  for (let C = P; C <= E; C++)
    for (let D = S; D <= M; D++) {
      const N = C * t + D;
      r[N] = $ ? $[N] : 255;
    }
  return new ee({ pixelType: s.pixelType, width: t, height: i, mask: r, pixels: [...s.pixels] });
}
function zi(s, e, n) {
  const { width: t, height: i } = s, r = new Uint8Array(t * i), a = e.width / t, o = e.height / i, { xmin: l, ymax: c } = e, { paths: d } = n, u = s.mask;
  for (let m = 0; m < d.length; m++) {
    const f = d[m];
    for (let p = 0; p < f.length - 1; p++) {
      const [y, h] = f[p], [g, x] = f[p + 1];
      let w = Math.floor((c - h) / o), b = Math.floor((c - x) / o);
      if (b < w) {
        const R = w;
        w = b, b = R;
      }
      w = Math.max(0, w), b = Math.min(i - 1, b);
      const T = (g - y) / (x - h);
      for (let R = w; R <= b; R++) {
        const F = R === w ? Math.max(h, x) : (i + 1 - R) * o, _ = R === b ? Math.min(h, x) : F - o;
        let k = Math.floor(x === h ? (y - l) / a : (T * (F - h) + y - l) / a), S = Math.floor(x === h ? (g - l) / a : (T * (_ - h) + y - l) / a);
        if (S < k) {
          const P = k;
          k = S, S = P;
        }
        const M = R * t;
        k = Math.max(0, k), S = Math.min(t - 1, S);
        for (let P = M + k; P <= M + S; P++)
          r[P] = u ? u[P] : 255;
      }
    }
  }
  return new ee({ pixelType: s.pixelType, width: t, height: i, mask: r, pixels: [...s.pixels] });
}
function Ai(s, e, n, t = !0) {
  const { spatialReference: i } = s, { x: r, y: a } = Bi(n, i);
  let o, l, c;
  const d = e.type === "extent" ? e : e.extent;
  let { xmin: u, xmax: m, ymax: f, ymin: p } = d;
  const { xmin: y, ymax: h } = s.extent;
  return t ? (u = y + (u > y ? r * Math.round((u - y) / r) : 0), f = h - (f < h ? a * Math.round((h - f) / a) : 0), m = y + (m > y ? r * Math.round((m - y) / r) : 0), p = h - (p < h ? a * Math.round((h - p) / a) : 0), o = new H({ xmin: u, ymax: f, xmax: m, ymin: p, spatialReference: i }), l = Math.round(o.width / r), c = Math.round(o.height / a)) : (l = Math.floor((m - u) / r + 0.8), c = Math.floor((f - p) / a + 0.8), u = y + (u > y ? r * Math.floor((u - y) / r + 0.1) : 0), f = h - (f < h ? a * Math.floor((h - f) / a + 0.1) : 0), m = u + l * r, p = f - c * a, o = new H({ xmin: u, ymax: f, xmax: m, ymin: p, spatialReference: i })), { extent: o, width: l, height: c };
}
const et = De.getLogger("geoscene.layers.mixins.ImageryTileMixin"), Hi = (s) => {
  let e = class extends s {
    constructor(...t) {
      var i, r;
      super(...t), this._isConstructedFromFunctionRaster = !1, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.interpolation = "nearest", this.multidimensionalSubset = null, this.raster = null, this.rasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = ((r = (i = t[0]) == null ? void 0 : i.raster) == null ? void 0 : r.datasetFormat) === "Function";
    }
    get fullExtent() {
      var t;
      return (t = this.rasterInfo) == null ? void 0 : t.extent;
    }
    set multidimensionalDefinition(t) {
      this._set("multidimensionalDefinition", t), this.updateRenderer();
    }
    set rasterFunction(t) {
      var i;
      ((i = t == null ? void 0 : t.functionName) == null ? void 0 : i.toLowerCase()) === "none" && (t = void 0), this._set("rasterFunction", t), this.updateRasterFunction();
    }
    set url(t) {
      this._set("url", st(t, et));
    }
    set renderer(t) {
      t == null && this.rasterFunction == null ? this._configDefaultRenderer("override") : (this._set("renderer", t), this.updateRenderer());
    }
    readRenderer(t, i, r) {
      var o, l;
      const a = (l = (o = i == null ? void 0 : i.layerDefinition) == null ? void 0 : o.drawingInfo) == null ? void 0 : l.renderer;
      return Wt(a, r) || void 0;
    }
    async convertVectorFieldData(t, i) {
      if (t == null || !this.rasterInfo)
        return null;
      const r = this._rasterJobHandler.instance, a = this.rasterInfo.dataType;
      return r ? r.convertVectorFieldData({ pixelBlock: t, dataType: a }, i) : Ii(t, a);
    }
    async computeStatisticsHistograms(t, i) {
      t = Be(qt, t).clone();
      const { rasterInfo: r } = this, { geometry: a } = t;
      if (a == null)
        throw new O("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
      let o = a;
      const { spatialReference: l } = r;
      a.spatialReference.equals(l) || (await Ce(), o = a.type === "extent" ? be(a, l) : ki(a, l));
      const c = t.pixelSize ?? new A({ x: r.pixelSize.x, y: r.pixelSize.y, spatialReference: l }), { extent: d, width: u, height: m } = Ai(r, o, c), f = await this.fetchPixels(d, u, m, { ...i, interpolation: "nearest" });
      if (f.pixelBlock == null)
        throw new O("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
      const p = await Ni(f.pixelBlock, d, o), y = this._rasterJobHandler.instance;
      return y ? y.computeStatisticsHistograms({ pixelBlock: p }, i) : ii(p);
    }
    async createFlowMesh(t, i) {
      const r = this._rasterJobHandler.instance;
      return r ? r.createFlowMesh(t, i) : bi(t.meshType, t.simulationSettings, t.flowData, i.signal != null ? i.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(t) {
      var o, l;
      const { multidimensionalInfo: i } = this.rasterInfo ?? {};
      if (i == null)
        return t;
      let r = t.multidimensionalDefinition || this.multidimensionalDefinition;
      r != null && r.length || (r = Ge(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset }));
      const a = t.timeExtent || this.timeExtent;
      if (r != null && a != null && (a.start != null || a.end != null)) {
        r = r.map((g) => g.clone());
        const c = (l = (o = i.variables.find(({ name: g }) => g === r[0].variableName)) == null ? void 0 : o.dimensions) == null ? void 0 : l.find(({ name: g }) => g === "StdTime"), d = r.find(({ dimensionName: g }) => g === "StdTime");
        if (!c || !d)
          return { ...t, multidimensionalDefinition: null };
        const { start: u, end: m } = a, f = u == null ? null : u.getTime(), p = m == null ? null : m.getTime(), y = f ?? p, h = p ?? f;
        if (c.values != null) {
          const g = c.values.filter((x) => {
            if (Array.isArray(x)) {
              if (y === h)
                return x[0] <= y && x[1] >= y;
              const w = x[0] <= y && x[1] > y || x[0] < h && x[1] >= h, b = x[0] >= y && x[1] <= h || x[0] < y && x[1] > h;
              return w || b;
            }
            return y === h ? x === y : x >= y && x <= h;
          });
          if (g.length) {
            const x = g.sort((w, b) => {
              const T = Array.isArray(w) ? w[0] : w, R = Array.isArray(w) ? w[1] : w, F = Array.isArray(b) ? b[0] : b, _ = Array.isArray(b) ? b[1] : b;
              return y === h ? T - F : Math.abs(R - h) - Math.abs(_ - h);
            })[0];
            d.values = [x];
          } else
            r = null;
        } else if (c.hasRegularIntervals && c.extent) {
          const [g, x] = c.extent;
          y > x || h < g ? r = null : d.values = y === h ? [y] : [Math.max(g, y), Math.min(x, h)];
        }
      }
      return r != null && Zt(r, this.multidimensionalSubset) ? { ...t, multidimensionalDefinition: null } : { ...t, multidimensionalDefinition: r };
    }
    async updateRasterFunction() {
      var d, u, m;
      if (!this.loaded || this.type !== "imagery-tile" || !this.rasterFunction && !this._cachedRasterFunctionJson || JSON.stringify(this.rasterFunction) === JSON.stringify(this._cachedRasterFunctionJson))
        return;
      if (this._isConstructedFromFunctionRaster && this.raster.datasetFormat === "Function") {
        const f = this.raster.rasterFunction.toJSON();
        return !this.rasterFunction && f && this._set("rasterFunction", Pe.fromJSON(f)), void (this._cachedRasterFunctionJson = (d = this.rasterFunction) == null ? void 0 : d.toJSON());
      }
      let t, i = this.raster, r = !1;
      i.datasetFormat === "Function" ? (t = i.primaryRasters.rasters, i = t[0], r = !0) : t = [i];
      const { rasterFunction: a } = this;
      if (a) {
        const f = { raster: i };
        t.length > 1 && t.forEach((h) => f[h.url] = h);
        const p = Oe(((u = a.functionDefinition) == null ? void 0 : u.toJSON()) ?? a.toJSON(), f), y = new $e({ rasterFunction: p });
        y.rasterJobHandler = this._rasterJobHandler.instance, await y.open(), this._cachedRasterFunctionJson = (m = this.rasterFunction) == null ? void 0 : m.toJSON(), this.raster = y;
      } else
        this.raster = i, this._cachedRasterFunctionJson = null, await i.when();
      if (this._cachedRendererJson = null, !r && !a)
        return;
      const { bandIds: o } = this, { bandCount: l } = this.raster.rasterInfo, c = o != null && o.length ? o.some((f) => f >= l) : l >= 3;
      o && (c || this.renderer && this.renderer.type !== "raster-stretch") && this._set("bandIds", null), this._configDefaultRenderer("auto");
    }
    async updateRenderer() {
      const { loaded: t, symbolizer: i } = this;
      if (!t || !i || !this.renderer)
        return;
      const { rasterInfo: r } = this.raster, a = je(r, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), o = a == null ? void 0 : a.name, l = Le({ ...this.renderer.toJSON(), variableName: o });
      if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(l))
        return;
      const c = this._rasterJobHandler.instance;
      c && (i.rasterInfo = We(r, o), i.rendererJSON = l, i.bind(), await c.updateSymbolizer(i), this._cachedRendererJson = l);
    }
    async applyRenderer(t, i) {
      const r = t && t.pixelBlock;
      if (!(r != null && r.pixels && r.pixels.length > 0))
        return null;
      let a;
      await this.updateRenderer();
      const o = this._rasterJobHandler.instance, l = this.bandIds ?? [];
      return a = o ? await o.symbolize({ ...t, simpleStretchParams: i, bandIds: l }) : this.symbolizer.symbolize({ ...t, simpleStretchParams: i, bandIds: l }), a;
    }
    getTileUrl(t, i, r) {
      return this.raster.datasetFormat === "RasterTileServer" ? `${this.url}/tile/${t}/${i}/${r}` : "";
    }
    getCompatibleTileInfo(t, i, r = !1) {
      if (!this.loaded || i == null)
        return null;
      if (r && t.equals(this.spatialReference))
        return this.tileInfo;
      const a = xt(t);
      return Z.create({ size: 256, spatialReference: t, origin: a ? { x: a.origin[0], y: a.origin[1] } : { x: i.xmin, y: i.ymax } });
    }
    getCompatibleFullExtent(t) {
      return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(t) || (this._compatibleFullExtent = this.raster.computeExtent(t)), this._compatibleFullExtent) : null;
    }
    async fetchTile(t, i, r, a = {}) {
      var l;
      if (n(this), a.requestAsImageElement) {
        const c = this.getTileUrl(t, i, r);
        return nt(c, { responseType: "image", query: { ...this.refreshParameters, ...this.raster.ioConfig.customFetchParameters }, signal: a.signal }).then((d) => d.data);
      }
      const { rasterInfo: o } = this;
      if (o.multidimensionalInfo != null && (a = this.normalizeRasterFetchOptions(a)).multidimensionalDefinition == null) {
        const c = a.tileInfo || o.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(t, i, r, c), pixelBlock: null };
      }
      return await this._initJobHandler(), await this.updateRasterFunction(), ((l = this.renderer) == null ? void 0 : l.type) === "raster-shaded-relief" && (a = { ...a, buffer: { cols: 1, rows: 1 } }), this.raster.fetchTile(t, i, r, a);
    }
    async fetchPixels(t, i, r, a = {}) {
      return this.rasterInfo.multidimensionalInfo != null && (a = this.normalizeRasterFetchOptions(a)).multidimensionalDefinition == null ? { extent: t, pixelBlock: null } : (await this._initJobHandler(), await this.updateRasterFunction(), i = Math.round(i), r = Math.round(r), this.raster.fetchPixels(t, i, r, a));
    }
    async identify(t, i = {}) {
      var l;
      const { raster: r, rasterInfo: a } = this;
      if (a.multidimensionalInfo != null && !(a.hasMultidimensionalTranspose && (lt(i.multidimensionalDefinition) || i.transposedVariableName || i.timeExtent)) && (i = this.normalizeRasterFetchOptions(i)).multidimensionalDefinition == null)
        return { location: t, value: null };
      const o = (l = this.multidimensionalSubset) == null ? void 0 : l.areaOfInterest;
      if (o && !o.contains(t))
        throw new O("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
      return r.identify(t, i);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      var a, o, l;
      const t = (a = this.rasterInfo) == null ? void 0 : a.multidimensionalInfo;
      if (t == null || ((o = this.rasterInfo) == null ? void 0 : o.dataType) !== "standard-time")
        return !1;
      const i = this.multidimensionalDefinition, r = (l = i == null ? void 0 : i[0]) == null ? void 0 : l.variableName;
      return t.variables.some((c) => c.name === r && (!(i != null && i[0].dimensionName) || c.dimensions.some((d) => d.name === "StdTime")));
    }
    getStandardTimeValue(t) {
      return new Date(24 * (t - 25569) * 3600 * 1e3).toString();
    }
    getMultidimensionalSubsetVariables(t) {
      var r;
      const i = t ?? ((r = this.rasterInfo) == null ? void 0 : r.multidimensionalInfo);
      return ei(this.multidimensionalSubset, i);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = Ge(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this.rasterFunction && this.raster.datasetFormat === "Function" && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null)
        return this._rasterJobHandler.connectionPromise;
      const t = new Ut();
      return this._rasterJobHandler.connectionPromise = t.initialize().then(async () => {
        n(this), this._rasterJobHandler.instance = t, this.raster.rasterJobHandler = t, this.raster.datasetFormat === "Function" && this.raster.syncJobHandler(), this.rasterFunction && await this.updateRasterFunction().catch(() => {
        }), this.renderer && this.updateRenderer();
      }).catch(() => {
      }), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null, this.raster && (this.raster.rasterJobHandler = null);
    }
    _configDefaultInterpolation() {
      var t;
      if (this.interpolation == null) {
        n(this);
        const { raster: i } = this, r = Gt(i.rasterInfo, i.tileType, (t = this.sourceJSON) == null ? void 0 : t.defaultResamplingMethod);
        this._set("interpolation", r);
      }
    }
    _configDefaultRenderer(t = "no") {
      var d, u;
      n(this);
      const { rasterInfo: i } = this.raster;
      !this.bandIds && i.bandCount > 1 && (this.bandIds = jt(i));
      const r = je(i, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), a = r == null ? void 0 : r.name;
      if (!this.renderer || t === "override") {
        const m = qe(i, { bandIds: this.bandIds, variableName: a }), f = i.statistics, p = f && f.length > 0 ? f[0] : null, y = (p == null ? void 0 : p.max) ?? 0, h = (p == null ? void 0 : p.min) ?? 0;
        this.raster.datasetFormat === "WCSServer" && m.type === "raster-stretch" && (y > 1e24 || h < -1e24) && (m.dynamicRangeAdjustment = !0, m.statistics = null, m.stretchType === "none" && (m.stretchType = "min-max")), this.renderer = m;
      }
      const o = Le({ ...this.renderer.toJSON(), variableName: a }), l = We(i, a);
      this.symbolizer ? (this.symbolizer.rendererJSON = o, this.symbolizer.rasterInfo = l) : this.symbolizer = new si({ rendererJSON: o, rasterInfo: l });
      const c = this.symbolizer.bind();
      if (c.success) {
        if (t === "auto") {
          const { colormap: m } = this.raster.rasterInfo, f = this.renderer;
          if (m != null && f.type === "raster-colormap") {
            const p = qe(this.raster.rasterInfo);
            JSON.stringify(p) !== JSON.stringify(f) && this._configDefaultRenderer("override");
          } else if (f.type === "raster-stretch") {
            const p = (d = this.bandIds) == null ? void 0 : d.length, y = (u = f.statistics) == null ? void 0 : u.length;
            !f.dynamicRangeAdjustment && y && p && y !== p && this._configDefaultRenderer("override");
          }
        }
      } else
        et.warn("imagery-tile-mixin", c.error || "The given renderer is not supported by the layer."), t === "auto" && this._configDefaultRenderer("override");
    }
  };
  function n(t) {
    if (!t.raster || !t.rasterInfo)
      throw new O("imagery-tile", "no raster");
  }
  return I([v()], e.prototype, "_cachedRendererJson", void 0), I([v()], e.prototype, "_cachedRasterFunctionJson", void 0), I([v()], e.prototype, "_compatibleFullExtent", void 0), I([v()], e.prototype, "_isConstructedFromFunctionRaster", void 0), I([v()], e.prototype, "_rasterJobHandler", void 0), I([v()], e.prototype, "bandIds", void 0), I([v({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], e.prototype, "copyright", void 0), I([v({ json: { read: !1 } })], e.prototype, "fullExtent", null), I([v()], e.prototype, "interpolation", void 0), I([v()], e.prototype, "ioConfig", void 0), I([v({ type: [ct], json: { write: !0 } })], e.prototype, "multidimensionalDefinition", null), I([v({ type: At, json: { write: !0 } })], e.prototype, "multidimensionalSubset", void 0), I([v()], e.prototype, "raster", void 0), I([v({ type: Pe, json: { name: "renderingRule", write: !0 } })], e.prototype, "rasterFunction", null), I([v()], e.prototype, "rasterInfo", void 0), I([v()], e.prototype, "sourceJSON", void 0), I([v({ readOnly: !0, type: q, json: { read: !1 } })], e.prototype, "spatialReference", void 0), I([v({ type: Z })], e.prototype, "tileInfo", void 0), I([v(at)], e.prototype, "url", null), I([v({ types: Ht, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
    var i;
    const t = ((i = this.renderer) == null ? void 0 : i.type) === "raster-stretch" && this.renderer.stretchType === "none" && !this.renderer.useGamma;
    return { enabled: !this.loaded || this.raster.tileType === "Raster" || !t };
  } }, origins: { "web-scene": { types: Lt, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (t) => ({ enabled: t && t.type !== "vector-field" && t.type !== "flow" }) } } } } })], e.prototype, "renderer", null), I([gt("renderer")], e.prototype, "readRenderer", null), I([v()], e.prototype, "symbolizer", void 0), e = I([Q("geoscene.layers.ImageryTileMixin")], e), e;
};
function Li(s) {
  const e = s.fields, n = s.records, t = e.some((c) => c.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", i = [{ name: t, type: "esriFieldTypeOID", alias: "OID" }].concat(e.map((c) => ({ name: c.name, type: "esriFieldType" + c.typeName, alias: c.name }))), r = i.map((c) => c.name), a = [];
  let o = 0, l = 0;
  return n.forEach((c) => {
    const d = {};
    for (d[t] = o++, l = 1; l < r.length; l++)
      d[r[l]] = c[l - 1];
    a.push({ attributes: d });
  }), { displayFieldName: "", fields: i, features: a };
}
class ht {
  static get supportedVersions() {
    return [5];
  }
  static parse(e) {
    const n = new DataView(e), t = 3 & n.getUint8(0);
    if (t !== 3)
      return { header: { version: t }, recordSet: null };
    const i = n.getUint32(4, !0), r = n.getUint16(8, !0), a = n.getUint16(10, !0), o = { version: t, recordCount: i, headerByteCount: r, recordByteCount: a };
    let l = 32;
    const c = [], d = [];
    let u;
    if (t === 3) {
      for (; n.getUint8(l) !== 13; )
        u = String.fromCharCode(n.getUint8(l + 11)).trim(), c.push({ name: Ue(new Uint8Array(e, l, 11)), type: u, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(u)], length: n.getUint8(l + 16) }), l += 32;
      if (l += 1, c.length > 0)
        for (; d.length < i && e.byteLength - l > a; ) {
          const m = [];
          n.getUint8(l) === 32 ? (l += 1, c.forEach((f) => {
            if (f.type === "C")
              m.push(Ue(new Uint8Array(e, l, f.length)).trim());
            else if (f.type === "N")
              m.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(e, l, f.length)).trim(), 10));
            else if (f.type === "F")
              m.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(e, l, f.length)).trim()));
            else if (f.type === "D") {
              const p = String.fromCharCode.apply(null, new Uint8Array(e, l, f.length)).trim();
              m.push(new Date(parseInt(p.substring(0, 4), 10), parseInt(p.substring(4, 6), 10) - 1, parseInt(p.substring(6, 8), 10)));
            }
            l += f.length;
          }), d.push(m)) : l += a;
        }
    }
    return { header: o, fields: c, records: d, recordSet: Li({ fields: c, records: d }) };
  }
}
const se = /* @__PURE__ */ new Map();
se.set("int16", "esriFieldTypeSmallInteger"), se.set("int32", "esriFieldTypeInteger"), se.set("int64", "esriFieldTypeInteger"), se.set("float32", "esriFieldTypeSingle"), se.set("float64", "esriFieldTypeDouble"), se.set("text", "esriFieldTypeString");
const tt = 8;
let fe = class extends ae {
  constructor() {
    super(...arguments), this.storageInfo = null, this.datasetFormat = "CRF";
  }
  async open(e) {
    await this.init();
    const { data: n } = await this.request(this.url + "/conf.json", { signal: e == null ? void 0 : e.signal });
    if (!this._validateHeader(n))
      throw new O("cloudraster:open", "Invalid or unsupported conf.json.");
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { storageInfo: t, rasterInfo: i } = this._parseHeader(n);
    if (i.dataType === "thematic") {
      const r = await this._fetchAuxiliaryInformation();
      i.attributeTable = r;
    }
    this._set("storageInfo", t), this._set("rasterInfo", i), this.ioConfig.retryCount = this.ioConfig.retryCount || 0;
  }
  async fetchRawTile(e, n, t, i = {}) {
    const { transposeInfo: r } = this.rasterInfo.storageInfo, { transposedVariableName: a } = i, o = !(!r || !a), l = o ? 0 : this.rasterInfo.storageInfo.maximumPyramidLevel - e;
    if (l < 0)
      return null;
    const c = this._buildCacheFilePath(l, n, t, i.multidimensionalDefinition, a), d = this._getIndexRecordFromBundle(n, t, o), u = await this.request(c, { range: { from: 0, to: this.storageInfo.headerSize - 1 }, responseType: "array-buffer", signal: i.signal });
    if (!u)
      return null;
    const m = new Uint8Array(u.data), f = this._getTileEndAndContentType(m, d);
    if (f.recordSize === 0)
      return null;
    const p = await this.request(c, { range: { from: f.position, to: f.position + f.recordSize }, responseType: "array-buffer", signal: i.signal });
    if (!p)
      return null;
    const [y, h] = this._getTileSize(o);
    return this.decodePixelBlock(p.data, { width: y, height: h, planes: null, pixelType: null, returnInterleaved: o });
  }
  _validateHeader(e) {
    const n = ["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"];
    return e && e.type === "RasterInfo" && !n.some((t) => !e[t]);
  }
  _parseHeader(e) {
    var z;
    const n = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e.pixelType], { bandCount: t, histograms: i, colormap: r, blockWidth: a, blockHeight: o, firstPyramidLevel: l, maximumPyramidLevel: c } = e, d = e.statistics && e.statistics.map((B) => ({ min: B.min, max: B.max, avg: B.mean, stddev: B.standardDeviation, median: B.median, mode: B.mode })), u = e.extent.spatialReference, m = (z = e.geodataXform) == null ? void 0 : z.spatialReference, f = new q(u != null && u.wkid || u != null && u.wkt ? u : m);
    let p = new H({ xmin: e.extent.xmin, ymin: e.extent.ymin, xmax: e.extent.xmax, ymax: e.extent.ymax, spatialReference: f });
    const y = new A({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: f }), h = Math.round((p.xmax - p.xmin) / y.x), g = Math.round((p.ymax - p.ymin) / y.y), x = this._parseTransform(e.geodataXform), w = x ? p : null;
    x && (p = x.forwardTransform(p), y.x = (p.xmax - p.xmin) / h, y.y = (p.ymax - p.ymin) / g);
    const b = e.properties ?? {}, T = e.format.toLowerCase().replace("cache/", ""), R = new A(e.origin.x, e.origin.y, f);
    let F, _, k, S;
    if (r && r.colors)
      for (F = [], _ = 0; _ < r.colors.length; _++)
        k = r.colors[_], S = r.values ? r.values[_] : _, F.push([S, 255 & k, k << 16 >>> 24, k << 8 >>> 24, k >>> 24]);
    const M = e.LODInfos, P = [];
    for (_ = 0; _ < M.levels.length; _++)
      P.push(new rt({ level: M.levels[_], resolution: M.resolutions[_], scale: 96 / 0.0254 * M.resolutions[_] }));
    const E = new Z({ dpi: 96, lods: P, format: T, origin: R, size: [a, o], spatialReference: f }), $ = { recordSize: tt, packetSize: e.packetSize, headerSize: e.packetSize * e.packetSize * tt + 64 }, C = [{ maxCol: Math.ceil(h / a) - 1, maxRow: Math.ceil(g / o) - 1, minCol: 0, minRow: 0 }];
    let D = 2;
    if (c > 0)
      for (_ = 0; _ < c; _++)
        C.push({ maxCol: Math.ceil(h / D / a) - 1, maxRow: Math.ceil(g / D / o) - 1, minCol: 0, minRow: 0 }), D *= 2;
    const N = e.mdInfo;
    let V = null;
    if (N && b._yxs) {
      const B = b._yxs;
      V = { packetSize: B.PacketSize, tileSize: [B.TileXSize, B.TileYSize] };
    }
    return { storageInfo: $, rasterInfo: new ye({ width: h, height: g, pixelType: n, bandCount: t, extent: p, nativeExtent: w, transform: x, spatialReference: f, pixelSize: y, keyProperties: b, statistics: d, histograms: i, multidimensionalInfo: N, colormap: F, storageInfo: new pe({ blockWidth: a, blockHeight: o, pyramidBlockWidth: a, pyramidBlockHeight: o, origin: R, tileInfo: E, transposeInfo: V, firstPyramidLevel: l, maximumPyramidLevel: c, blockBoundary: C }) }) };
  }
  _parseTransform(e) {
    var t, i;
    if (!Mi(e))
      throw new O("cloudraster:open", "the data contains unsupported geodata transform types");
    const n = Pi(e);
    if (n.type === "identity")
      return null;
    if (n.type !== "polynomial" || !((t = n.forwardCoefficients) != null && t.length) || !((i = n.inverseCoefficients) != null && i.length))
      throw new O("cloudraster:open", "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");
    return n;
  }
  async _fetchAuxiliaryInformation(e) {
    const n = this.request(this.url + "/conf.vat.json", { signal: e }).then((a) => a.data).catch(() => null), t = this.request(this.url + "/conf.vat.dbf", { responseType: "array-buffer", signal: e }).then((a) => a.data).catch(() => null), i = await Promise.all([n, t]);
    let r;
    if (i[0]) {
      let a = i[0].fields;
      const o = i[0].values;
      if (a && o) {
        a = a.map((c) => ({ type: c.name === "OID" ? "esriFieldTypeOID" : se.get(c.type), name: c.name, alias: c.alias || c.name }));
        const l = o.map((c) => ({ attributes: c }));
        a && o && (r = { fields: a, features: l });
      }
    }
    return !r && i[1] && (r = ht.parse(i[1]).recordSet), Ne.fromJSON(r);
  }
  _buildCacheFilePath(e, n, t, i, r) {
    const a = this._getPackageSize(!!r), o = Math.floor(n / a) * a, l = Math.floor(t / a) * a, c = "R" + this._toHexString4(o) + "C" + this._toHexString4(l);
    let d = "L";
    d += e >= 10 ? e.toString() : "0" + e.toString();
    const { multidimensionalInfo: u } = this.rasterInfo, m = i == null ? void 0 : i[0];
    if (u == null || !m)
      return `${this.url}/_alllayers/${d}/${c}.bundle`;
    let f = "_yxs";
    if (!r) {
      f = u.variables.find((h) => h.name === m.variableName).dimensions[0].values.indexOf(m.values[0]).toString(16);
      const y = 4 - f.length;
      for (let h = 0; h < y; h++)
        f = "0" + f;
      f = "S" + f;
    }
    const p = this._getVariableFolderName(r || m.variableName);
    return `${this.url}/_alllayers/${p}/${f}/${d}/${c}.bundle`;
  }
  _getPackageSize(e = !1) {
    const { transposeInfo: n } = this.rasterInfo.storageInfo;
    return e && n != null ? n.packetSize ?? 0 : this.storageInfo.packetSize;
  }
  _getTileSize(e = !1) {
    const { storageInfo: n } = this.rasterInfo, { transposeInfo: t } = n;
    return e && t != null ? t.tileSize : n.tileInfo.size;
  }
  _getVariableFolderName(e) {
    return (e = e.trim()) === "" ? "_v" : e.replaceAll(/[\{|\}\-]/g, "_").replace("\\*", "_v");
  }
  _getIndexRecordFromBundle(e, n, t = !1) {
    const i = this._getPackageSize(t), r = i * (e % i) + n % i;
    if (r < 0)
      throw new Error("Invalid level / row / col");
    return 20 + r * this.storageInfo.recordSize + 44;
  }
  _getTileEndAndContentType(e, n) {
    const t = e.subarray(n, n + 8);
    let i, r = 0;
    for (i = 0; i < 5; i++)
      r |= (255 & t[i]) << 8 * i;
    const a = 1099511627775 & r;
    for (r = 0, i = 5; i < 8; i++)
      r |= (255 & t[i]) << 8 * (i - 5);
    return { position: a, recordSize: 1099511627775 & r };
  }
  _toHexString4(e) {
    let n = e.toString(16);
    if (n.length !== 4) {
      let t = 4 - n.length;
      for (; t-- > 0; )
        n = "0" + n;
    }
    return n;
  }
};
I([v({ readOnly: !0 })], fe.prototype, "storageInfo", void 0), I([v({ type: String, json: { write: !0 } })], fe.prototype, "datasetFormat", void 0), fe = I([Q("geoscene.layers.support.rasterDatasets.CloudRaster")], fe);
const Wi = fe;
let de = class extends ae {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.data = null;
  }
  async open(e) {
    await this.init();
    const n = this.data, { pixelBlock: t, statistics: i, histograms: r, name: a, keyProperties: o, nativeExtent: l, transform: c } = this.data, { width: d, height: u, pixelType: m } = t, f = n.extent ?? new H({ xmin: -0.5, ymin: 0.5, xmax: d - 0.5, ymax: u - 0.5, spatialReference: new q({ wkid: 3857 }) }), p = n.isPseudoSpatialReference ?? !n.extent, y = { x: f.width / d, y: f.height / u }, h = new ye({ width: d, height: u, pixelType: m, extent: f, nativeExtent: l, transform: c, pixelSize: y, spatialReference: f.spatialReference, bandCount: t.pixels.length, keyProperties: o || {}, statistics: i, isPseudoSpatialReference: p, histograms: r });
    this.createRemoteDatasetStorageInfo(h, 512, 512), this._set("rasterInfo", h), this.updateTileInfo(), await this._buildInMemoryRaster(t, { width: 512, height: 512 }, e), this.datasetName = a, this.url = "/InMemory/" + a;
  }
  fetchRawTile(e, n, t, i = {}) {
    const r = this._pixelBlockTiles.get(`${e}/${n}/${t}`);
    return Promise.resolve(r);
  }
  async _buildInMemoryRaster(e, n, t) {
    var d, u;
    const i = this.rasterInfo.storageInfo.maximumPyramidLevel, r = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: e, tileSize: n, maximumPyramidLevel: i }, t) : Promise.resolve(Si(e, n, i)), a = this.rasterInfo.statistics != null, o = this.rasterInfo.histograms != null, l = a ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: e }, t) : Promise.resolve(ni(e)), c = await ot([r, l]);
    if (!c[0].value && c[1].value)
      throw new O("inmemory-raster:open", "failed to build in memory raster");
    this._pixelBlockTiles = c[0].value, a || (this.rasterInfo.statistics = (d = c[1].value) == null ? void 0 : d.statistics), o || (this.rasterInfo.histograms = (u = c[1].value) == null ? void 0 : u.histograms);
  }
};
I([v({ type: String, json: { write: !0 } })], de.prototype, "datasetFormat", void 0), I([v()], de.prototype, "data", void 0), de = I([Q("geoscene.layers.support.rasterDatasets.InMemoryRaster")], de);
const qi = de;
function ue(s, e) {
  if (!s || !e)
    return [];
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const t = [];
  if (e) {
    const r = ue(s, n);
    for (let a = 0; a < r.length; a++)
      ue(r[a], e).forEach((o) => t.push(o));
    return t;
  }
  const i = s.getElementsByTagNameNS("*", n);
  if (!i || i.length === 0)
    return [];
  for (let r = 0; r < i.length; r++)
    t.push(i[r] || i.item(r));
  return t;
}
function U(s, e) {
  if (!s || !e)
    return null;
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const t = ue(s, n);
  return t.length > 0 ? e ? U(t[0], e) : t[0] : null;
}
function K(s, e = null) {
  const n = e ? U(s, e) : s;
  let t;
  return n ? (t = n.textContent || n.nodeValue, t ? t.trim() : null) : null;
}
function Gi(s, e) {
  const n = ue(s, e), t = [];
  let i;
  for (let r = 0; r < n.length; r++)
    i = n[r].textContent || n[r].nodeValue, i && (i = i.trim(), i !== "" && t.push(i));
  return t;
}
function we(s, e) {
  return Gi(s, e).map((n) => Number(n));
}
function re(s, e) {
  const n = K(s, e);
  return Number(n);
}
function _e(s, e) {
  var i;
  const n = (i = s == null ? void 0 : s.nodeName) == null ? void 0 : i.toLowerCase(), t = e.toLowerCase();
  return n.slice(n.lastIndexOf(":") + 1) === t;
}
function it(s, e) {
  if (!s || !e)
    return null;
  const n = [];
  for (let t = 0; t < s.length; t++)
    n.push(s[t]), n.push(e[t]);
  return n;
}
function ji(s) {
  const e = U(s, "GeodataXform"), n = Re(re(e, "SpatialReference/WKID") || K(e, "SpatialReference/WKT"));
  if (e.getAttribute("xsi:type") !== "typens:PolynomialXform")
    return { spatialReference: n, transform: null };
  const t = re(e, "PolynomialOrder") ?? 1, i = we(e, "CoeffX/Double"), r = we(e, "CoeffY/Double"), a = we(e, "InverseCoeffX/Double"), o = we(e, "InverseCoeffY/Double"), l = it(i, r), c = it(a, o);
  return { spatialReference: n, transform: l && c && l.length && c.length ? new Ee({ spatialReference: n, polynomialOrder: t, forwardCoefficients: l, inverseCoefficients: c }) : null };
}
function Ui(s) {
  var m;
  const e = re(s, "NoDataValue"), n = U(s, "Histograms/HistItem"), t = re(n, "HistMin"), i = re(n, "HistMax"), r = re(n, "BucketCount"), a = (m = K(n, "HistCounts")) == null ? void 0 : m.split("|").map((f) => Number(f));
  let o, l, c, d;
  ue(s, "Metadata/MDI").forEach((f) => {
    const p = Number(f.textContent ?? f.nodeValue);
    switch (f.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        o = p;
        break;
      case "STATISTICS_MAXIMUM":
        l = p;
        break;
      case "STATISTICS_MEAN":
        c = p;
        break;
      case "STATISTICS_STDDEV":
        d = p;
    }
  });
  const u = re(s, "Metadata/SourceBandIndex");
  return { noDataValue: e, histogram: a != null && a.length && t != null && i != null ? { min: t, max: i, size: r || a.length, counts: a } : null, sourceBandIndex: u, statistics: o != null && l != null ? { min: o, max: l, avg: c, stddev: d } : null };
}
function Re(s) {
  if (!s)
    return null;
  let e = Number(s);
  if (!isNaN(e) && e !== 0)
    return new q({ wkid: e });
  if ((s = String(s)).startsWith("COMPD_CS")) {
    if (!s.includes("VERTCS") || !s.includes("GEOGCS") && !s.startsWith("PROJCS"))
      return null;
    const n = s.indexOf("VERTCS"), t = s.indexOf("PROJCS"), i = t > -1 ? t : s.indexOf("GEOGCS");
    if (i === -1)
      return null;
    const r = s.slice(i, s.lastIndexOf("]", n) + 1).trim(), a = s.slice(n, s.lastIndexOf("]")).trim();
    e = Fe(r);
    const o = new q(e ? { wkid: e } : { wkt: r }), l = Fe(a);
    return l && (o.vcsWkid = l), o;
  }
  return s.startsWith("GEOGCS") || s.startsWith("PROJCS") ? (e = Fe(s), new q(e !== 0 ? { wkid: e } : { wkt: s })) : null;
}
function Fe(s) {
  var i;
  const e = s.replaceAll("]", "[").replaceAll('"', "").split("[").map((r) => r.trim()).filter((r) => r !== ""), n = e[e.length - 1].split(","), t = (i = n[0]) == null ? void 0 : i.toLowerCase();
  if ((t === "epsg" || t === "esri") && s.endsWith('"]]')) {
    const r = Number(n[1]);
    if (!isNaN(r) && r !== 0)
      return r;
  }
  return 0;
}
function ze(s) {
  var t;
  if (((t = s == null ? void 0 : s.documentElement.tagName) == null ? void 0 : t.toLowerCase()) !== "pamdataset")
    return {};
  const e = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  s.documentElement.childNodes.forEach((i) => {
    if (i.nodeType === 1) {
      if (_e(i, "SRS")) {
        if (!e.spatialReference) {
          const r = K(i);
          e.spatialReference = Re(r);
        }
      } else if (_e(i, "Metadata"))
        if (i.getAttribute("domain") === "xml:ESRI") {
          const { spatialReference: r, transform: a } = ji(i);
          e.transform = a, e.spatialReference || (e.spatialReference = r);
        } else
          ue(i, "MDI").forEach((r) => e.metadata[r.getAttribute("key")] = K(r));
      else if (_e(i, "PAMRasterBand")) {
        const r = Ui(i);
        r.sourceBandIndex != null && e.rasterBands[r.sourceBandIndex] == null ? e.rasterBands[r.sourceBandIndex] = r : e.rasterBands.push(r);
      }
    }
  });
  const n = e.rasterBands;
  if (n.length) {
    const i = !!n[0].statistics;
    e.statistics = i ? n.map((a) => a.statistics).filter(Me) : null;
    const r = !!n[0].histogram;
    e.histograms = r ? n.map((a) => a.histogram).filter(Me) : null;
  }
  return e;
}
let Se = class extends ae {
  async open(s) {
    await this.init();
    const e = await this._fetchData(s);
    let { spatialReference: n, statistics: t, histograms: i, transform: r } = await this._fetchAuxiliaryData(s);
    const a = !n;
    a && (n = new q({ wkid: 3857 })), i != null && i.length && t == null && (t = Je(i));
    const { width: o, height: l } = e;
    let c = new H({ xmin: -0.5, ymin: 0.5 - l, xmax: o - 0.5, ymax: 0.5, spatialReference: n });
    const d = r ? r.forwardTransform(c) : c;
    let u = !0;
    if (r) {
      const f = r.forwardCoefficients;
      u = f && f[1] === 0 && f[2] === 0, u && (r = null, c = d);
    }
    const m = new qi({ data: { extent: d, nativeExtent: c, transform: r, pixelBlock: e, statistics: t, histograms: i, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: a } });
    await m.open(), m.data = null, this._set("rasterInfo", m.rasterInfo), this._inMemoryRaster = m;
  }
  fetchRawTile(s, e, n, t = {}) {
    return this._inMemoryRaster.fetchRawTile(s, e, n, t);
  }
  async _fetchData(s) {
    const { data: e } = await this.request(this.url, { responseType: "array-buffer", signal: s == null ? void 0 : s.signal }), n = ri(e).toUpperCase();
    if (n !== "JPG" && n !== "PNG" && n !== "GIF" && n !== "BMP")
      throw new O("image-aux-raster:open", "the data is not a supported format");
    this._set("datasetFormat", n);
    const t = n.toLowerCase(), i = t === "gif" || t === "bmp" || !wt("ios"), r = await this.decodePixelBlock(e, { format: t, useCanvas: i, hasNoZlibMask: !0 });
    if (r == null)
      throw new O("image-aux-raster:open", "the data cannot be decoded");
    return r;
  }
  async _fetchAuxiliaryData(s) {
    var c;
    const e = s == null ? void 0 : s.signal, n = this.ioConfig.skipExtensions ?? [], t = n.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: e }), i = this.datasetFormat, r = i === "JPG" ? "jgw" : i === "PNG" ? "pgw" : i === "BMP" ? "bpw" : null, a = r && n.includes(r) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + r, { responseType: "text", signal: e }), o = await ot([t, a]);
    if (e != null && e.aborted)
      throw It();
    const l = ze((c = o[0].value) == null ? void 0 : c.data);
    if (!l.transform) {
      const d = o[1].value ? o[1].value.data.split(`
`).slice(0, 6).map((u) => Number(u)) : null;
      l.transform = (d == null ? void 0 : d.length) === 6 ? new Ee({ forwardCoefficients: [d[4], d[5], d[0], -d[1], d[2], -d[3]] }) : null;
    }
    return l;
  }
};
I([v({ type: String, json: { write: !0 } })], Se.prototype, "datasetFormat", void 0), Se = I([Q("geoscene.layers.support.rasterDatasets.ImageAuxRaster")], Se);
const Ie = Se;
let me = class extends ae {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  async open(e) {
    var _, k;
    await this.init();
    const n = e && e.signal, t = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: n });
    t.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const i = t.data;
    if (this.sourceJSON = i, !i)
      throw new O("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!i.tileInfo)
      throw new O("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const r = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = i.cacheType, this.tileType == null && (r.includes(i.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : i.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = ((_ = i.name) == null ? void 0 : _.slice(i.name.indexOf("/") + 1)) ?? "";
    const a = await this._fetchRasterInfo({ signal: n });
    if (a == null)
      throw new O("image-server-raster:open", "cannot initialize image service");
    const o = this.tileType === "Map" ? Vi(i.tileInfo, i) : Z.fromJSON(i.tileInfo);
    bt(o);
    const [l, c] = this._computeMinMaxLOD(a, o), { extent: d, pixelSize: u } = a, m = 0.5 / a.width * u.x, f = Math.max(u.x, u.y), { lods: p } = o;
    (this.tileType !== "Map" && i.maxScale !== 0 || Math.abs(u.x - u.y) > m || !p.some((S) => Math.abs(S.resolution - f) < m)) && (u.x = u.y = l.resolution, a.width = Math.ceil((d.xmax - d.xmin) / u.x - 0.1), a.height = Math.ceil((d.ymax - d.ymin) / u.y - 0.1));
    const y = l.level - c.level, [h, g] = o.size, x = [], w = [];
    p.forEach((S, M) => {
      S.level >= c.level && S.level <= l.level && x.push({ x: S.resolution, y: S.resolution }), M < p.length - 1 && w.push(Math.round(10 * S.resolution / p[M + 1].resolution) / 10);
    }), x.sort((S, M) => S.x - M.x);
    const b = this.computeBlockBoundary(d, h, g, o.origin, x, y), T = x.length > 1 ? x.slice(1) : null;
    let R;
    i.transposeInfo && (R = { tileSize: [i.transposeInfo.rows, i.transposeInfo.cols], packetSize: ((k = a.keyProperties) == null ? void 0 : k._yxs.PacketSize) ?? 0 });
    const F = w.length <= 1 || w.length >= 3 && w.slice(0, w.length - 1).every((S) => S === w[0]) ? w[0] ?? 2 : Math.round(10 / (c.resolution / l.resolution) ** (-1 / y)) / 10;
    if (a.storageInfo = new pe({ blockWidth: o.size[0], blockHeight: o.size[1], pyramidBlockWidth: o.size[0], pyramidBlockHeight: o.size[1], pyramidResolutions: T, pyramidScalingFactor: F, compression: o.format, origin: o.origin, firstPyramidLevel: 1, maximumPyramidLevel: y, tileInfo: o, transposeInfo: R, blockBoundary: b }), this._fixGCSShift(a), this._set("rasterInfo", a), i.capabilities.toLowerCase().includes("tilemap")) {
      const S = { tileInfo: a.storageInfo.tileInfo, parsedUrl: St(this.url), url: this.url, tileServers: [] };
      this._tilemapCache = new $i({ layer: S });
    }
  }
  async fetchRawTile(e, n, t, i = {}) {
    const { storageInfo: r, extent: a } = this.rasterInfo, { transposeInfo: o } = r, l = o != null && !!i.transposedVariableName;
    if (this._slices && !l && i.sliceId == null)
      return null;
    const c = l ? 0 : r.maximumPyramidLevel - e + this._levelOffset, d = `${this.url}/tile/${c}/${n}/${t}`, u = this._slices ? l ? { variable: i.transposedVariableName } : { sliceId: i.sliceId || 0 } : null, { data: m } = await this.request(d, { query: u, responseType: "array-buffer", signal: i.signal });
    if (!m)
      return null;
    const f = l ? o.tileSize : r.tileInfo.size, p = await this.decodePixelBlock(m, { width: f[0], height: f[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation", returnInterleaved: l, noDataValue: this.rasterInfo.noDataValue });
    if (p == null)
      return null;
    const y = r.blockBoundary[e];
    if (r.compression !== "jpg" || t > y.minCol && t < y.maxCol && n > y.minRow && n < y.maxRow)
      return p;
    const { origin: h, blockWidth: g, blockHeight: x } = r, { x: w, y: b } = this.getPyramidPixelSize(e), T = Math.round((a.xmin - h.x) / w) % g, R = Math.round((a.xmax - h.x) / w) % g || g, F = Math.round((h.y - a.ymax) / b) % x, _ = Math.round((h.y - a.ymin) / b) % x || x, k = t === y.minCol ? T : 0, S = n === y.minRow ? F : 0, M = t === y.maxCol ? R : g, P = n === y.maxRow ? _ : x;
    return Ri(p, { x: k, y: S }, { width: M - k, height: P - S }), p;
  }
  getSliceIndex(e) {
    if (!this._slices || e == null || e.length === 0)
      return null;
    const n = e;
    for (let t = 0; t < this._slices.length; t++) {
      const i = this._slices[t].multidimensionalDefinition;
      if (i.length === n.length && !i.some((r) => {
        const a = n.find((o) => r.variableName === o.variableName && o.dimensionName === r.dimensionName);
        return a ? (Array.isArray(r.values[0]) ? `${r.values[0][0]}-${r.values[0][1]}` : r.values[0]) !== (Array.isArray(a.values[0]) ? `${a.values[0][0]}-${a.values[0][1]}` : a.values[0]) : !0;
      }))
        return t;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(e, n) {
    const t = this.request(this.url + "/statistics", { query: { variable: e, f: "json" }, signal: n }).then((a) => {
      var o;
      return (o = a.data) == null ? void 0 : o.statistics;
    }), i = this.request(this.url + "/histograms", { query: { variable: e, f: "json" }, signal: n }).then((a) => {
      var o;
      return (o = a.data) == null ? void 0 : o.histograms;
    }), r = await Promise.all([t, i]);
    return r[0] && r[0].forEach((a) => {
      a.avg = a.mean, a.stddev = a.standardDeviation;
    }), { statistics: r[0] || null, histograms: r[1] || null };
  }
  async computeBestPyramidLevelForLocation(e, n = {}) {
    if (!this._tilemapCache)
      return 0;
    let t = this.identifyPixelLocation(e, 0, n.datumTransformation);
    if (t === null)
      return null;
    let i = 0;
    const { maximumPyramidLevel: r } = this.rasterInfo.storageInfo;
    let a = r - i + this._levelOffset;
    const o = t.srcLocation;
    for (; a >= 0; ) {
      try {
        if (await this._tilemapCache.fetchAvailability(a, t.row, t.col, n) === "available")
          break;
      } catch {
      }
      if (a--, i++, t = this.identifyPixelLocation(o, i, n.datumTransformation), t === null)
        return null;
    }
    return a === -1 || t == null ? null : i;
  }
  async _fetchRasterInfo(e) {
    const n = this.sourceJSON;
    if (this.tileType === "Map") {
      const o = n.fullExtent || n.extent, l = Math.ceil((o.xmax - o.xmin) / n.pixelSizeX - 0.1), c = Math.ceil((o.ymax - o.ymin) / n.pixelSizeY - 0.1), d = q.fromJSON(n.spatialReference || o.spatialReference), u = new A({ x: n.pixelSizeX, y: n.pixelSizeY, spatialReference: d });
      return new ye({ width: l, height: c, bandCount: 3, extent: H.fromJSON(o), spatialReference: d, pixelSize: u, pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    }
    const { signal: t } = e, i = Vt(this.url, this.sourceJSON, { signal: t, query: this.ioConfig.customFetchParameters }), r = n.hasMultidimensions ? this.request(`${this.url}/slices`, { query: { f: "json" }, signal: t }).then((o) => o.data && o.data.slices).catch(() => null) : null, a = await Promise.all([i, r]);
    return this._slices = a[1], a[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: e } = this;
    e.minScale && e.minScale < 0 && (e.minScale = 0), e.maxScale && e.maxScale < 0 && (e.maxScale = 0);
  }
  _fixGCSShift(e) {
    const { extent: n, spatialReference: t } = e;
    n.xmin > -1 && n.xmax > 181 && (t != null && t.wkid) && t.isGeographic && (e.nativeExtent = e.extent, e.transform = new Ci(), e.extent = e.transform.forwardTransform(n));
  }
  _computeMinMaxLOD(e, n) {
    const { pixelSize: t } = e, i = 0.5 / e.width * t.x, { lods: r } = n, a = n.lodAt(Math.max.apply(null, r.map((f) => f.level))), o = n.lodAt(Math.min.apply(null, r.map((f) => f.level))), { tileType: l } = this;
    if (l === "Map")
      return this._levelOffset = r[0].level, [a, o];
    if (l === "Raster")
      return [r.find((f) => f.resolution === t.x) ?? a, o];
    const { minScale: c, maxScale: d } = this.sourceJSON;
    let u = a;
    d > 0 && (u = r.find((f) => Math.abs(f.scale - d) < i), u || (u = r.filter((f) => f.scale > d).sort((f, p) => f.scale > p.scale ? 1 : -1)[0] ?? a));
    let m = o;
    return c > 0 && (m = r.find((f) => Math.abs(f.scale - c) < i) ?? o, this._levelOffset = m.level - o.level), [u, m];
  }
};
function Vi(s, e) {
  if (!s)
    return null;
  const { minScale: n, maxScale: t, minLOD: i, maxLOD: r } = e;
  if (i != null && r != null)
    return Z.fromJSON({ ...s, lods: s.lods.filter(({ level: a }) => a != null && a >= i && a <= r) });
  if (n !== 0 && t !== 0) {
    const a = (c) => Math.round(1e4 * c) / 1e4, o = n ? a(n) : 1 / 0, l = t ? a(t) : -1 / 0;
    return Z.fromJSON({ ...s, lods: s.lods.filter((c) => {
      const d = a(c.scale);
      return d <= o && d >= l;
    }) });
  }
  return Z.fromJSON(s);
}
I([v({ type: String, json: { write: !0 } })], me.prototype, "datasetFormat", void 0), I([v()], me.prototype, "tileType", void 0), me = I([Q("geoscene.layers.support.rasterDatasets.ImageServerRaster")], me);
const Xi = me, Y = /* @__PURE__ */ new Map();
Y.set("Int8", "s8"), Y.set("UInt8", "u8"), Y.set("Int16", "s16"), Y.set("UInt16", "u16"), Y.set("Int32", "s32"), Y.set("UInt32", "u32"), Y.set("Float32", "f32"), Y.set("Float64", "f32"), Y.set("Double64", "f32");
const te = /* @__PURE__ */ new Map();
te.set("none", { blobExtension: ".til", isOneSegment: !0, decoderFormat: "bip" }), te.set("lerc", { blobExtension: ".lrc", isOneSegment: !1, decoderFormat: "lerc" }), te.set("deflate", { blobExtension: ".pzp", isOneSegment: !0, decoderFormat: "deflate" }), te.set("jpeg", { blobExtension: ".pjg", isOneSegment: !0, decoderFormat: "jpg" });
let le = class extends ae {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async open(s) {
    var y;
    await this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const e = s ? s.signal : null, n = await this.request(this.url, { responseType: "xml", signal: e }), { rasterInfo: t, files: i } = this._parseHeader(n.data);
    if (((y = this.ioConfig.skipExtensions) == null ? void 0 : y.indexOf("aux.xml")) === -1) {
      const h = await this._fetchAuxiliaryData(s);
      h != null && (t.statistics = h.statistics ?? t.statistics, t.histograms = h.histograms, h.histograms && t.statistics == null && (t.statistics = Je(h.histograms)));
    }
    this._set("rasterInfo", t), this._files = i;
    const r = await this.request(i.index, { responseType: "array-buffer", signal: e });
    this._storageIndex = this._parseIndex(r.data);
    const { blockWidth: a, blockHeight: o } = this.rasterInfo.storageInfo, l = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: c, height: d } = this.rasterInfo, u = [], m = this._getBandSegmentCount();
    let f = 0, p = -1;
    for (; f < this._storageIndex.length; ) {
      p++;
      const h = Math.ceil(c / a / l ** p) - 1, g = Math.ceil(d / o / l ** p) - 1;
      f += (h + 1) * (g + 1) * m * 4, u.push({ maxRow: g, maxCol: h, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = u, p > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = p), this.updateTileInfo();
  }
  async fetchRawTile(s, e, n, t = {}) {
    const { blockWidth: i, blockHeight: r, blockBoundary: a } = this.rasterInfo.storageInfo, o = a[s];
    if (!o || o.maxRow < e || o.maxCol < n || o.minRow > e || o.minCol > n)
      return null;
    const { bandCount: l, pixelType: c } = this.rasterInfo, { ranges: d, actualTileWidth: u, actualTileHeight: m } = this._getTileLocation(s, e, n);
    if (!d || d.length === 0)
      return null;
    if (d[0].from === 0 && d[0].to === 0) {
      const S = new Uint8Array(i * r);
      return new ee({ width: i, height: r, pixels: null, mask: S, validPixelCount: 0 });
    }
    const { bandIds: f } = this.ioConfig, p = this._getBandSegmentCount(), y = [];
    let h = 0;
    for (h = 0; h < p; h++)
      f && !f.includes(h) || y.push(this.request(this._files.data, { range: { from: d[h].from, to: d[h].to }, responseType: "array-buffer", signal: t.signal }));
    const g = await Promise.all(y), x = g.map((S) => S.data.byteLength).reduce((S, M) => S + M), w = new Uint8Array(x);
    let b = 0;
    for (h = 0; h < p; h++)
      w.set(new Uint8Array(g[h].data), b), b += g[h].data.byteLength;
    const T = te.get(this.rasterInfo.storageInfo.compression).decoderFormat, R = await this.decodePixelBlock(w.buffer, { width: i, height: r, format: T, planes: (f == null ? void 0 : f.length) || l, pixelType: c });
    if (R == null)
      return null;
    let { noDataValue: F } = this.rasterInfo;
    if (F != null && T !== "lerc" && !R.mask && (F = F[0], F != null)) {
      const S = R.width * R.height, M = new Uint8Array(S);
      if (Math.abs(F) > 1e24)
        for (h = 0; h < S; h++)
          Math.abs((R.pixels[0][h] - F) / F) > 1e-6 && (M[h] = 1);
      else
        for (h = 0; h < S; h++)
          R.pixels[0][h] !== F && (M[h] = 1);
      R.mask = M;
    }
    let _ = 0, k = 0;
    if (u !== i || m !== r) {
      let S = R.mask;
      if (S)
        for (h = 0; h < r; h++)
          if (k = h * i, h < m)
            for (_ = u; _ < i; _++)
              S[k + _] = 0;
          else
            for (_ = 0; _ < i; _++)
              S[k + _] = 0;
      else
        for (S = new Uint8Array(i * r), R.mask = S, h = 0; h < m; h++)
          for (k = h * i, _ = 0; _ < u; _++)
            S[k + _] = 1;
    }
    return R;
  }
  _parseIndex(s) {
    if (s.byteLength % 16 > 0)
      throw new Error("invalid array buffer must be multiples of 16");
    let e, n, t, i, r, a;
    if (ai) {
      for (n = new Uint8Array(s), i = new ArrayBuffer(s.byteLength), t = new Uint8Array(i), r = 0; r < s.byteLength / 4; r++)
        for (a = 0; a < 4; a++)
          t[4 * r + a] = n[4 * r + 3 - a];
      e = new Uint32Array(i);
    } else
      e = new Uint32Array(s);
    return e;
  }
  _getBandSegmentCount() {
    return te.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(s, e, n) {
    const { blockWidth: t, blockHeight: i, pyramidScalingFactor: r } = this.rasterInfo.storageInfo, { width: a, height: o } = this.rasterInfo, l = this._getBandSegmentCount();
    let c, d, u, m = 0, f = 0;
    for (u = 0; u < s; u++)
      f = r ** u, c = Math.ceil(a / t / f), d = Math.ceil(o / i / f), m += c * d;
    f = r ** s, c = Math.ceil(a / t / f), d = Math.ceil(o / i / f), m += e * c + n, m *= 4 * l;
    const p = this._storageIndex.subarray(m, m + 4 * l);
    let y = 0, h = 0;
    const g = [];
    for (let x = 0; x < l; x++)
      y = p[4 * x] * 2 ** 32 + p[4 * x + 1], h = y + p[4 * x + 2] * 2 ** 32 + p[4 * x + 3], g.push({ from: y, to: h });
    return { ranges: g, actualTileWidth: n < c - 1 ? t : Math.ceil(a / f) - t * (c - 1), actualTileHeight: e < d - 1 ? i : Math.ceil(o / f) - i * (d - 1) };
  }
  _parseHeader(s) {
    const e = U(s, "MRF_META/Raster");
    if (!e)
      throw new O("mrf:open", "not a valid MRF format");
    const n = U(e, "Size"), t = parseInt(n.getAttribute("x"), 10), i = parseInt(n.getAttribute("y"), 10), r = parseInt(n.getAttribute("c"), 10), a = (K(e, "Compression") || "none").toLowerCase();
    if (!te.has(a))
      throw new O("mrf:open", "currently does not support compression " + a);
    const o = K(e, "DataType") || "UInt8", l = Y.get(o);
    if (l == null)
      throw new O("mrf:open", "currently does not support pixel type " + o);
    const c = U(e, "PageSize"), d = parseInt(c.getAttribute("x"), 10), u = parseInt(c.getAttribute("y"), 10), m = U(e, "DataValues");
    let f, p;
    if (m && (p = m.getAttribute("NoData"), p != null && (f = p.trim().split(" ").map((M) => parseFloat(M)))), U(s, "MRF_META/CachedSource"))
      throw new O("mrf:open", "currently does not support MRF referencing other data files");
    const y = U(s, "MRF_META/GeoTags"), h = U(y, "BoundingBox");
    let g, x = !1;
    if (h != null) {
      const M = parseFloat(h.getAttribute("minx")), P = parseFloat(h.getAttribute("miny")), E = parseFloat(h.getAttribute("maxx")), $ = parseFloat(h.getAttribute("maxy")), C = K(y, "Projection") || "";
      let D = q.WGS84;
      if (C !== "LOCAL_CS[]")
        if (C.toLowerCase().startsWith("epsg:")) {
          const N = Number(C.slice(5));
          isNaN(N) || N === 0 || (D = new q({ wkid: N }));
        } else
          D = Re(C) ?? q.WGS84;
      else
        x = !0, D = new q({ wkid: 3857 });
      g = new H(M, P, E, $), g.spatialReference = D;
    } else
      x = !0, g = new H({ xmin: -0.5, ymin: 0.5 - i, xmax: t - 0.5, ymax: 0.5, spatialReference: new q({ wkid: 3857 }) });
    const w = U(s, "MRF_META/Rsets"), b = parseInt(w && w.getAttribute("scale") || "2", 10), T = g.spatialReference, R = new pe({ origin: new A({ x: g.xmin, y: g.ymax, spatialReference: T }), blockWidth: d, blockHeight: u, pyramidBlockWidth: d, pyramidBlockHeight: u, compression: a, pyramidScalingFactor: b }), F = new A({ x: g.width / t, y: g.height / i, spatialReference: T }), _ = new ye({ width: t, height: i, extent: g, isPseudoSpatialReference: x, spatialReference: T, bandCount: r, pixelType: l, pixelSize: F, noDataValue: f, storageInfo: R }), k = K(s, "datafile"), S = K(s, "IndexFile");
    return { rasterInfo: _, files: { mrf: this.url, index: S || this.url.replace(".mrf", ".idx"), data: k || this.url.replace(".mrf", te.get(a).blobExtension) } };
  }
  async _fetchAuxiliaryData(s) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: s == null ? void 0 : s.signal });
      return ze(e);
    } catch {
      return null;
    }
  }
};
I([v()], le.prototype, "_files", void 0), I([v()], le.prototype, "_storageIndex", void 0), I([v({ type: String, json: { write: !0 } })], le.prototype, "datasetFormat", void 0), le = I([Q("geoscene.layers.support.rasterIO.MRFRaster")], le);
const Yi = le, ke = (s, e) => {
  var n;
  return (n = s.get(e)) == null ? void 0 : n.values;
}, he = (s, e) => {
  var n, t;
  return (t = (n = s.get(e)) == null ? void 0 : n.values) == null ? void 0 : t[0];
};
let ne = class extends ae {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  async open(s) {
    var p, y, h, g;
    await this.init();
    const e = s ? s.signal : null, { data: n } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: e });
    if (!n)
      throw new O("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1, this.url.lastIndexOf("."));
    const { littleEndian: t, firstIFDPos: i, isBigTiff: r } = oi(n), a = [];
    await this._readIFDs(a, n, t, i, 0, r ? 8 : 4, e);
    const { imageInfo: o, rasterInfo: l } = this._parseIFDs(a), c = li(a), d = ci(a);
    if (this._headerInfo = { littleEndian: t, isBigTiff: r, ifds: a, pyramidIFDs: c, maskIFDs: d, ...o }, this._set("rasterInfo", l), !o.isSupported)
      throw new O("tiffraster:open", "this tiff is not supported: " + o.message);
    if (!o.tileWidth)
      throw new O("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
    const u = (y = (p = a[0].get("PREDICTOR")) == null ? void 0 : p.values) == null ? void 0 : y[0];
    if (((g = (h = a[0].get("SAMPLEFORMAT")) == null ? void 0 : h.values) == null ? void 0 : g[0]) === 3 && u === 2)
      throw new O("tiffraster:open", "unsupported horizontal difference encoding. Predictor=3 is supported for floatting point data");
    const { skipExtensions: f = [] } = this.ioConfig;
    if (!f.includes("aux.xml")) {
      const x = await this._fetchAuxiliaryMetaData(s);
      x != null && this._processPAMInfo(x, l);
    }
    f.includes("vat.dbf") || l.bandCount !== 1 || l.pixelType !== "u8" || (l.attributeTable = await this._fetchAuxiliaryTable(s), l.attributeTable != null && (l.keyProperties.DataType = "thematic")), this.updateTileInfo();
  }
  async fetchRawTile(s, e, n, t = {}) {
    var r;
    if (!((r = this._headerInfo) != null && r.isSupported) || this.isBlockOutside(s, e, n))
      return null;
    const i = await this._fetchRawTiffTile(s, e, n, !1, t);
    if (i != null && this._headerInfo.hasMaskBand) {
      const a = await this._fetchRawTiffTile(s, e, n, !0, t);
      a != null && a.pixels[0] instanceof Uint8Array && (i.mask = a.pixels[0]);
    }
    return i;
  }
  _parseIFDs(s) {
    var P, E;
    const e = ui(s), { width: n, height: t, tileWidth: i, tileHeight: r, planes: a, pixelType: o, compression: l, firstPyramidLevel: c, maximumPyramidLevel: d, pyramidBlockWidth: u, pyramidBlockHeight: m, tileBoundary: f, affine: p, metadata: y } = e, h = ((P = e.extent.spatialReference) == null ? void 0 : P.wkt) || ((E = e.extent.spatialReference) == null ? void 0 : E.wkid);
    let g = Re(h), x = !!e.isPseudoGeographic;
    g == null && (x = !0, g = new q({ wkid: 3857 }));
    const w = new H({ ...e.extent, spatialReference: g }), b = new A(w ? { x: w.xmin, y: w.ymax, spatialReference: g } : { x: 0, y: 0 }), T = new pe({ blockWidth: i, blockHeight: r, pyramidBlockWidth: u, pyramidBlockHeight: m, compression: l, origin: b, firstPyramidLevel: c, maximumPyramidLevel: d, blockBoundary: f }), R = new A({ x: (w.xmax - w.xmin) / n, y: (w.ymax - w.ymin) / t, spatialReference: g }), F = y ? { BandProperties: y.bandProperties, DataType: y.dataType } : {};
    let _ = null;
    const k = he(s[0], "PHOTOMETRICINTERPRETATION"), S = ke(s[0], "COLORMAP");
    if (k <= 3 && (S == null ? void 0 : S.length) > 3 && S.length % 3 == 0) {
      _ = [];
      const $ = S.length / 3;
      for (let C = 0; C < $; C++)
        _.push([C, S[C] >>> 8, S[C + $] >>> 8, S[C + 2 * $] >>> 8]);
    }
    const M = new ye({ width: n, height: t, bandCount: a, pixelType: o, pixelSize: R, storageInfo: T, spatialReference: g, isPseudoSpatialReference: x, keyProperties: F, extent: w, colormap: _, statistics: y ? y.statistics : null });
    return p != null && p.length && (M.nativeExtent = new H({ xmin: -0.5, ymin: 0.5 - t, xmax: n - 0.5, ymax: 0.5, spatialReference: g }), M.transform = new Ee({ polynomialOrder: 1, forwardCoefficients: [p[2] + p[0] / 2, p[5] - p[3] / 2, p[0], p[3], -p[1], -p[4]] }), M.extent = M.transform.forwardTransform(M.nativeExtent), M.pixelSize = new A({ x: (w.xmax - w.xmin) / n, y: (w.ymax - w.ymin) / t, spatialReference: g }), T.origin.x = -0.5, T.origin.y = 0.5), { imageInfo: e, rasterInfo: M };
  }
  _processPAMInfo(s, e) {
    if (e.statistics = s.statistics ?? e.statistics, e.histograms = s.histograms, s.histograms && e.statistics == null && (e.statistics = Je(s.histograms)), s.transform && e.transform == null) {
      e.transform = s.transform, e.nativeExtent = e.extent;
      const n = e.transform.forwardTransform(e.nativeExtent);
      e.pixelSize = new A({ x: (n.xmax - n.xmin) / e.width, y: (n.ymax - n.ymin) / e.height, spatialReference: e.spatialReference }), e.extent = n;
    }
    e.isPseudoSpatialReference && s.spatialReference && (e.spatialReference = s.spatialReference, e.extent.spatialReference = e.nativeExtent.spatialReference = e.storageInfo.origin.spatialReference = e.spatialReference);
  }
  async _readIFDs(s, e, n, t, i, r = 4, a) {
    if (!t)
      return null;
    (t >= e.byteLength || t < 0) && (e = (await this.request(this.url, { range: { from: t + i, to: t + i + this._bufferSize }, responseType: "array-buffer", signal: a })).data, i = t + i, t = 0);
    const o = await this._readIFD(e, n, t, i, ge.TIFF_TAGS, r, a);
    if (s.push(o.ifd), !o.nextIFD)
      return null;
    await this._readIFDs(s, e, n, o.nextIFD - i, i, r, a);
  }
  async _readIFD(s, e, n, t, i = ge.TIFF_TAGS, r = 4, a) {
    var l, c;
    if (!s)
      return null;
    const o = hi(s, e, n, t, i, r);
    if (o.success) {
      const d = [];
      if ((l = o.ifd) == null || l.forEach((u) => {
        u.values || d.push(u);
      }), d.length > 0) {
        const u = d.map((f) => f.offlineOffsetSize).filter(Me), m = Math.min.apply(null, u.map((f) => f[0]));
        if (Math.min.apply(null, u.map((f) => f[0] + f[1])) - m <= this._bufferSize) {
          const { data: f } = await this.request(this.url, { range: { from: m, to: m + this._bufferSize }, responseType: "array-buffer", signal: a });
          s = f, t = m, d.forEach((p) => fi(s, e, p, t));
        }
      }
      if ((c = o.ifd) != null && c.has("GEOKEYDIRECTORY")) {
        const u = o.ifd.get("GEOKEYDIRECTORY"), m = u == null ? void 0 : u.values;
        if (m && m.length > 4) {
          const f = m[0] + "." + m[1] + "." + m[2], p = await this._readIFD(s, e, u.valueOffset + 6 - t, t, ge.GEO_KEYS, 2, a);
          u.data = p.ifd, u.data && u.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [f] });
        }
      }
      return o;
    }
    if (o.requiredBufferSize && o.requiredBufferSize !== s.byteLength)
      return (s = (await this.request(this.url, { range: { from: t, to: t + o.requiredBufferSize + 4 }, responseType: "array-buffer", signal: a })).data).byteLength < o.requiredBufferSize ? null : this._readIFD(s, e, 0, t, ge.TIFF_TAGS, 4, a);
  }
  async _fetchRawTiffTile(s, e, n, t, i = {}) {
    const r = this._getTileLocation(s, e, n, t);
    if (!r)
      return null;
    const { ranges: a, actualTileWidth: o, actualTileHeight: l, ifd: c } = r, d = a.map((R) => this.request(this.url, { range: R, responseType: "array-buffer", signal: i.signal })), u = await Promise.all(d), m = u.map((R) => R.data.byteLength).reduce((R, F) => R + F), f = u.length === 1 ? u[0].data : new ArrayBuffer(m), p = [0], y = [0];
    if (u.length > 1) {
      const R = new Uint8Array(f);
      for (let F = 0, _ = 0; F < u.length; F++) {
        const k = u[F].data;
        R.set(new Uint8Array(k), _), p[F] = _, _ += k.byteLength, y[F] = k.byteLength;
      }
    }
    const { blockWidth: h, blockHeight: g } = this.getBlockWidthHeight(s), x = await this.decodePixelBlock(f, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: c, offsets: p, sizes: y }, width: h, height: g, planes: null, pixelType: null });
    if (x == null)
      return null;
    let w, b, T;
    if (o !== h || l !== g) {
      let R = x.mask;
      if (R)
        for (w = 0; w < g; w++)
          if (T = w * h, w < l)
            for (b = o; b < h; b++)
              R[T + b] = 0;
          else
            for (b = 0; b < h; b++)
              R[T + b] = 0;
      else
        for (R = new Uint8Array(h * g), x.mask = R, w = 0; w < l; w++)
          for (T = w * h, b = 0; b < o; b++)
            R[T + b] = 1;
    }
    return x;
  }
  _getTileLocation(s, e, n, t = !1) {
    const { firstPyramidLevel: i, blockBoundary: r } = this.rasterInfo.storageInfo, a = s === 0 ? 0 : s - (i - 1), { _headerInfo: o } = this;
    if (!o)
      return null;
    const l = t ? o.maskIFDs[a] : a === 0 ? o == null ? void 0 : o.ifds[0] : o == null ? void 0 : o.pyramidIFDs[a - 1];
    if (!l)
      return null;
    const c = di(l, o), d = ke(l, "TILEOFFSETS");
    if (d === void 0)
      return null;
    const u = ke(l, "TILEBYTECOUNTS"), { minRow: m, minCol: f, maxRow: p, maxCol: y } = r[a];
    if (e > p || n > y || e < m || n < f)
      return null;
    const h = he(l, "IMAGEWIDTH"), g = he(l, "IMAGELENGTH"), x = he(l, "TILEWIDTH"), w = he(l, "TILELENGTH"), b = [];
    if (c) {
      const { bandCount: T } = this.rasterInfo;
      for (let R = 0; R < T; R++) {
        const F = R * (p + 1) * (y + 1) + e * (y + 1) + n;
        b[R] = { from: d[F], to: d[F] + u[F] - 1 };
      }
    } else {
      const T = e * (y + 1) + n;
      b.push({ from: d[T], to: d[T] + u[T] - 1 });
    }
    for (let T = 0; T < b.length; T++)
      if (b[T].from == null || !b[T].to)
        return null;
    return { ranges: b, ifd: l, actualTileWidth: n === y && h % x || x, actualTileHeight: e === p && g % w || w };
  }
  async _fetchAuxiliaryMetaData(s) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: s == null ? void 0 : s.signal });
      return ze(e);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(s) {
    try {
      const { data: e } = await this.request(this.url + ".vat.dbf", { responseType: "array-buffer", signal: s == null ? void 0 : s.signal }), n = ht.parse(e);
      return n != null && n.recordSet ? Ne.fromJSON(n.recordSet) : null;
    } catch {
      return null;
    }
  }
};
I([v()], ne.prototype, "_files", void 0), I([v()], ne.prototype, "_headerInfo", void 0), I([v()], ne.prototype, "_bufferSize", void 0), I([v({ type: String, json: { write: !0 } })], ne.prototype, "datasetFormat", void 0), ne = I([Q("geoscene.layers.support.rasterDatasets.TIFFRaster")], ne);
const Ki = ne, W = /* @__PURE__ */ new Map();
W.set("CRF", { desc: "Cloud Raster Format", constructor: Wi }), W.set("MRF", { desc: "Meta Raster Format", constructor: Yi }), W.set("TIFF", { desc: "GeoTIFF", constructor: Ki }), W.set("RasterTileServer", { desc: "Raster Tile Server", constructor: Xi }), W.set("JPG", { desc: "JPG Raster Format", constructor: Ie }), W.set("PNG", { desc: "PNG Raster Format", constructor: Ie }), W.set("GIF", { desc: "GIF Raster Format", constructor: Ie }), W.set("BMP", { desc: "BMP Raster Format", constructor: Ie });
class Qi {
  static get supportedFormats() {
    const e = /* @__PURE__ */ new Set();
    return W.forEach((n, t) => e.add(t)), e;
  }
  static async open(e) {
    const { url: n, ioConfig: t, sourceJSON: i } = e;
    let r = e.datasetFormat;
    r == null && n.lastIndexOf(".") && (r = n.slice(n.lastIndexOf(".") + 1).toUpperCase()), r === "OVR" || r === "TIF" ? r = "TIFF" : r !== "JPG" && r !== "JPEG" && r !== "JFIF" || (r = "JPG"), n.toLowerCase().includes("/imageserver") && !n.toLowerCase().includes("/wcsserver") && (r = "RasterTileServer");
    const a = { url: n, sourceJSON: i, datasetFormat: r, ioConfig: t ?? { bandIds: null, sampling: null } };
    let o, l;
    if (r && this.supportedFormats.has(r)) {
      if (r === "CRF" && !(t != null && t.enableCRF))
        throw new O("rasterfactory:open", `cannot open raster: ${n}`);
      return o = W.get(r).constructor, l = new o(a), await l.open({ signal: e.signal }), l;
    }
    if (r)
      throw new O("rasterfactory:open", "not a supported format " + r);
    const c = Array.from(W.keys());
    let d = 0;
    const u = () => (r = c[d++], r && (r !== "CRF" || t != null && t.enableCRF) ? (o = W.get(r).constructor, l = new o(a), l.open({ signal: e.signal }).then(() => l).catch(() => u())) : null);
    return u();
  }
  static register(e, n, t) {
    W.has(e.toUpperCase()) || W.set(e.toUpperCase(), { desc: n, constructor: t });
  }
}
let J = class extends Rt(vt(Tt(_t(Ft(Hi(kt(Mt(Pt(Ct(zt)))))))))) {
  constructor(...s) {
    super(...s), this._primaryRasters = [], this.bandIds = null, this.interpolation = null, this.legendEnabled = !0, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.fields = null;
  }
  normalizeCtorArgs(s, e) {
    return typeof s == "string" ? { url: s, ...e } : s;
  }
  load(s) {
    const e = s != null ? s.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, s).catch(Ot).then(() => this._openRaster(e))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    var o;
    const s = [new ce({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: !1, length: 50, type: "string" }), new ce({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Pixel Value", domain: null, editable: !1, length: 50, type: "string" })], { rasterInfo: e } = this, n = e == null ? void 0 : e.attributeTable, t = n != null ? n.fields : null, i = "Raster.";
    if (t) {
      const l = t.filter((c) => c.type !== "oid" && c.name.toLowerCase() !== "value").map((c) => {
        const d = c.clone();
        return d.name = i + c.name, d;
      });
      s.push(...l);
    }
    const r = e == null ? void 0 : e.dataType, a = e == null ? void 0 : e.multidimensionalInfo;
    if ((r === "vector-magdir" || r === "vector-uv") && a != null) {
      const l = (o = a.variables[0].unit) == null ? void 0 : o.trim(), c = "Magnitude" + (l ? ` (${l})` : "");
      s.push(new ce({ name: "Raster.Magnitude", alias: c, domain: null, editable: !1, type: "double" })), s.push(new ce({ name: "Raster.Direction", alias: "Direction (°)", domain: null, editable: !1, type: "double" }));
    }
    return s;
  }
  createPopupTemplate(s) {
    const { rasterFields: e } = this, n = new Set(e.map(({ name: t }) => t).filter((t) => t.toLowerCase() !== "raster.servicepixelvalue.raw"));
    return $t({ fields: e, title: this.title }, { ...s, visibleFieldNames: n });
  }
  async generateRasterInfo(s, e) {
    var n;
    if (!(s = Be(Pe, s)))
      return this.rasterInfo;
    try {
      const t = { raster: this._primaryRasters[0] };
      this._primaryRasters.length > 1 && this._primaryRasters.forEach((a) => t[a.url] = a);
      const i = Oe(((n = s.functionDefinition) == null ? void 0 : n.toJSON()) ?? s.toJSON(), t), r = new $e({ rasterFunction: i });
      return await r.open(e), r.rasterInfo;
    } catch (t) {
      throw t instanceof O ? t : new O("imagery-tile-layer", "the given raster function is not supported");
    }
  }
  write(s, e) {
    const n = this._primaryRasters[0] ?? this.raster;
    if (this.loaded ? n.datasetFormat === "RasterTileServer" && (n.tileType === "Raster" || n.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url))
      return super.write(s, e);
    if (e && e.messages) {
      const t = `${e.origin}/${e.layerContainerType || "operational-layers"}`;
      e.messages.push(new O("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${t}'`, { layer: this }));
    }
    return null;
  }
  async _openRaster(s) {
    var t;
    let e = !1;
    if (this.raster)
      this.raster.rasterInfo || await this.raster.open(), this.raster.datasetFormat === "Function" ? (e = !0, this._primaryRasters = this.raster.primaryRasters.rasters) : this._primaryRasters = [this.raster], this.url = this.raster.url;
    else {
      const { rasterFunction: i } = this, r = [this.url];
      i && Oi(i.toJSON(), r);
      const a = await Promise.all(r.map((l) => Qi.open({ url: l, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: s }))), o = a.findIndex((l) => l == null);
      if (o > -1)
        throw new O("imagery-tile-layer:open", `cannot open raster: ${r[o]}`);
      if (this._primaryRasters = a, i) {
        const l = { raster: this._primaryRasters[0] };
        this._primaryRasters.length > 1 && this._primaryRasters.forEach((u) => l[u.url] = u);
        const c = Oe(((t = i.functionDefinition) == null ? void 0 : t.toJSON()) ?? i.toJSON(), l), d = new $e({ rasterFunction: c });
        try {
          await d.open(), this.raster = d;
        } catch (u) {
          const m = De.getLogger(this);
          u instanceof O && m.error("imagery-tile-layer:open", u.message), m.warn("imagery-tile-layer:open", "the raster function cannot be applied and is removed"), this._set("rasterFunction", null), this.raster = a[0];
        }
      } else
        this.raster = a[0];
    }
    const n = this.raster.rasterInfo;
    if (!n)
      throw new O("imagery-tile-layer:load", "cannot load resources on " + this.url);
    if (this._set("rasterInfo", e ? n : this._primaryRasters[0].rasterInfo), this._set("spatialReference", n.spatialReference), this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null) {
      const i = this.raster.tileType === "Map" && this.sourceJSON.minLOD != null && this.sourceJSON.maxLOD != null ? this.sourceJSON : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
      this.read(i, { origin: "service" });
    } else
      this.read({ tileInfo: this.rasterInfo.storageInfo.tileInfo.toJSON() }, { origin: "service" });
    this.title || (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = !1), this._configDefaultSettings(), this.addHandles(Dt(() => this.customParameters, (i) => {
      this.raster && (this.raster.ioConfig.customFetchParameters = i);
    }));
  }
};
I([v()], J.prototype, "_primaryRasters", void 0), I([v({ type: [Bt], json: { write: { overridePolicy() {
  var s;
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || ((s = this.bandIds) == null ? void 0 : s.join(",")) !== "0,1,2" };
} } } })], J.prototype, "bandIds", void 0), I([v({ json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.interpolation !== "bilinear" };
} } } }), Nt(Xt)], J.prototype, "interpolation", void 0), I([v(Jt)], J.prototype, "legendEnabled", void 0), I([v({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], J.prototype, "isReference", void 0), I([v({ type: ["show", "hide"] })], J.prototype, "listMode", void 0), I([v({ json: { read: !0, write: !0 } })], J.prototype, "blendMode", void 0), I([v()], J.prototype, "sourceJSON", void 0), I([v({ readOnly: !0, json: { origins: { service: { read: { source: "currentVersion" } } } } })], J.prototype, "version", void 0), I([v({ readOnly: !0, json: { read: !1 } })], J.prototype, "type", void 0), I([v({ type: ["ArcGISTiledImageServiceLayer"] })], J.prototype, "operationalLayerType", void 0), I([v({ type: Boolean, value: !0, json: { read: { source: "disablePopup", reader: (s, e) => !e.disablePopup }, write: { target: "disablePopup", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
}, writer(s, e, n) {
  e[n] = !s;
} } } })], J.prototype, "popupEnabled", void 0), I([v({ type: Et, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
} } } })], J.prototype, "popupTemplate", void 0), I([v({ readOnly: !0 })], J.prototype, "defaultPopupTemplate", null), I([v({ readOnly: !0, type: [ce] })], J.prototype, "fields", void 0), I([v({ readOnly: !0, type: [ce] })], J.prototype, "rasterFields", null), J = I([Q("geoscene.layers.ImageryTileLayer")], J);
const Ss = J;
export {
  Ss as default
};

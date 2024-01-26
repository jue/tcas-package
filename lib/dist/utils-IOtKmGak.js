import { p as se } from "./colorUtils-lH7-fxuz.js";
import { a as c, b as h, c as x, bk as Zt, d8 as Ie, C as Ft, bj as q, aT as S, jI as Oe, bl as ht, jJ as Ve, cU as mt, kF as pt, H as ft, az as re, aC as Ue } from "./index-B7TsCcH6.js";
import { u as d, o as Le, r as We, h as It, q as Te, t as Ne, w as qe, v as G, x as Xe, y as He, k as Re, z as Je, A as Ye } from "./dataUtils-u3eW5Se2.js";
import { a as Ke, i as Ze, k as xt, l as Qe, o as Ce, w as oe, p as tn, q as Nt, u as en, t as nn, x as Tt, y as sn, M as rn, z as on } from "./RasterSymbolizer-Ha7GC3Bh.js";
let wt = class extends Zt {
  constructor() {
    super(...arguments), this.raster = void 0;
  }
};
c([h({ json: { write: !0 } })], wt.prototype, "raster", void 0), wt = c([x("geoscene.layers.support.rasterFunctions.AspectFunctionArguments")], wt);
const _ = wt;
var Rt;
let Ct = Rt = class extends _ {
  clone() {
    return new Rt({ raster: this.raster });
  }
};
Ct = Rt = c([x("geoscene.layers.support.rasterFunctions.AspectFunctionArguments")], Ct);
const an = Ct, un = /* @__PURE__ */ new Set(["slope", "aspect", "curvature", "hillshade", "shadedrelief"]);
let F = class extends Zt {
  constructor() {
    super(...arguments), this.functionArguments = null, this.readingBufferSize = 0, this.id = -1, this.isNoopProcess = !1, this.rawInputBandIds = [], this.isInputBandIdsSwizzled = !1, this.swizzledBandSelection = [], this.isBranch = !1, this._bindingResult = null;
  }
  get supportsGPU() {
    return this._bindingResult.supportsGPU;
  }
  get flatWebGLFunctionChain() {
    const t = this.getWebGLProcessorDefinition();
    if (!t)
      return null;
    const e = [t], { parameters: s } = t;
    let i = s.rasters || s.raster && [s.raster];
    for (; i != null && i.length; ) {
      e.unshift(...i);
      const n = [];
      for (let u = 0; u < i.length; u++) {
        const { parameters: l } = i[u], p = l.rasters || l.raster && [l.raster];
        p != null && p.length && n.push(...p);
      }
      i = n;
    }
    for (let n = e.length - 1; n >= 0; n--)
      e[n].isNoopProcess && e.splice(n, 1);
    let r = !1;
    for (let n = 0; n < e.length; n++) {
      const u = e[n];
      u.id = e.length - n - 1;
      const { rasters: l } = u.parameters;
      r = r || l != null && l.length > 1;
    }
    const a = e.some(({ name: n }) => un.has(n.toLowerCase()));
    return { functions: e, hasBranches: r, hasSurfaceFunction: a };
  }
  bind(t, e = !1, s = -1) {
    this.id = s + 1;
    const i = this._getRasterValues();
    let r = !0;
    for (let a = 0; a < i.length; a++) {
      const n = i[a];
      if (n != null && this._isRasterFunctionValue(n)) {
        const u = n.bind(t, e, this.id + a);
        if (!u.success)
          return this._bindingResult = u, u;
        r = r && u.supportsGPU;
      }
    }
    return !this.rasterInfo || e ? (this.sourceRasterInfos = this._getSourceRasterInfos(t), this._bindingResult = this._bindSourceRasters(), this._bindingResult.success && this._patchRasterInfo(), this._bindingResult.supportsGPU = r && this._bindingResult.supportsGPU, this.processInputBandIds(), this._bindingResult) : (this._bindingResult = { success: !0, supportsGPU: !0 }, this.processInputBandIds(), this._bindingResult);
  }
  process(t) {
    const e = this._getRasterValues(), s = e.length === 0 ? t.pixelBlocks ?? t.primaryPixelBlocks : e.map((i) => this._readRasterValue(i, t));
    return this._processPixels({ ...t, pixelBlocks: s });
  }
  processInputBandIds() {
    const t = this._getRasterValues().filter(this._isRasterFunctionValue);
    let e;
    if (t.length > 1) {
      const r = t.map((n) => n.processInputBandIds()[0]);
      this.rawInputBandIds = r, this.isInputBandIdsSwizzled = this.rawInputBandIds.some((n, u) => n !== u);
      const a = t.filter((n) => n.functionName === "ExtractBand");
      return a.length && a.forEach((n, u) => {
        n.isInputBandIdsSwizzled = !0, n.swizzledBandSelection = [u, u, u];
      }), this.rawInputBandIds;
    }
    const s = t[0];
    if (s) {
      if (e = s.processInputBandIds(), s.isInputBandIdsSwizzled)
        return this.rawInputBandIds = e, e;
    } else {
      e = [];
      const { bandCount: r } = this.sourceRasterInfos[0];
      for (let a = 0; a < r; a++)
        e.push(a);
    }
    const i = this._getInputBandIds(e);
    return this.isInputBandIdsSwizzled = i.some((r, a) => r !== a), this.rawInputBandIds = i, this.rawInputBandIds;
  }
  getPrimaryRasters() {
    const t = [], e = [];
    return this._getPrimaryRasters(this, t, e), { rasters: t, rasterIds: e };
  }
  getWebGLProcessorDefinition() {
    const t = this._getWebGLParameters(), { raster: e, rasters: s } = this.functionArguments;
    return s && Array.isArray(s) && s.length ? (t.rasters = s.map((i) => this._isRasterFunctionValue(i) ? i.getWebGLProcessorDefinition() : typeof i == "number" ? { name: "Constant", parameters: { value: i }, pixelType: "f32", id: -1, isNoopProcess: !1 } : { name: "Identity", parameters: { value: i }, pixelType: "f32", id: -1, isNoopProcess: !1 }), t.rasters.some((i) => i != null) || (t.rasters = null)) : this._isRasterFunctionValue(e) && (t.raster = e.getWebGLProcessorDefinition()), { name: this.functionName, parameters: t, pixelType: this.outputPixelType, id: this.id, isNoopProcess: this.isNoopProcess };
  }
  _getOutputPixelType(t) {
    return this.outputPixelType === "unknown" ? t : this.outputPixelType ?? t;
  }
  _getWebGLParameters() {
    return {};
  }
  _getInputBandIds(t) {
    return t;
  }
  _isOutputRoundingNeeded() {
    const { outputPixelType: t } = this;
    return ((t == null ? void 0 : t.startsWith("u")) || (t == null ? void 0 : t.startsWith("s"))) ?? !1;
  }
  _getRasterValues() {
    const { rasterArgumentNames: t } = this;
    return t[0] === "rasters" ? this.functionArguments.rasters ?? [] : t.map((e) => this.functionArguments[e]).flat();
  }
  _getSourceRasterInfos(t) {
    const e = this._getRasterValues(), { rasterInfos: s, rasterIds: i } = t;
    if (e.length === 0)
      return s;
    const r = e.map((n) => n && typeof n == "object" && "bind" in n && n.rasterInfo ? n.rasterInfo : typeof n == "string" && i.includes(n) ? s[i.indexOf(n)] : typeof n != "number" ? s[0] : void 0), a = r.find((n) => n) ?? s[0];
    return r.forEach((n, u) => {
      n === void 0 && (r[u] = a);
    }), r;
  }
  _getPrimaryRasterId(t) {
    return t == null ? void 0 : t.url;
  }
  _getPrimaryRasters(t, e = [], s = []) {
    for (let i = 0; i < t.sourceRasters.length; i++) {
      const r = t.sourceRasters[i];
      if (typeof r != "number")
        if ("bind" in r)
          this._getPrimaryRasters(r, e, s);
        else {
          const a = r, n = this._getPrimaryRasterId(a);
          if (n == null)
            continue;
          s.includes(n) || (this.mainPrimaryRasterId === n ? (e.unshift(a), s.unshift(n)) : (e.push(a), s.push(n)));
        }
    }
  }
  _isRasterFunctionValue(t) {
    return t != null && typeof t == "object" && "getWebGLProcessorDefinition" in t;
  }
  _readRasterValue(t, e) {
    const { primaryPixelBlocks: s } = e;
    if (t == null || t === "$$") {
      const i = s[0];
      return i == null ? null : i.clone();
    }
    if (typeof t == "string") {
      const i = e.primaryRasterIds.indexOf(t);
      return i === -1 ? null : s[i];
    }
    if (typeof t == "number") {
      const i = s[0];
      if (i == null)
        return null;
      const { width: r, height: a, pixelType: n, mask: u } = i, l = u ? new Uint8Array(u) : null, p = new Float32Array(r * a);
      p.fill(t);
      const m = this.sourceRasterInfos[0].bandCount, f = new Array(m).fill(p);
      return new d({ width: r, height: a, pixelType: n, pixels: f, mask: l });
    }
    return t.process(e);
  }
  _patchRasterInfo() {
    const { rasterInfo: t } = this;
    if (!(t != null && t.keyProperties))
      return;
    const { bandCount: e, keyProperties: s, statistics: i, histograms: r } = t, a = s.BandProperties;
    a && a.length !== e && (t.keyProperties = { ...s, BandProperties: void 0 }), i && i.length !== e && (t.statistics = i.length > e ? i.slice(0, e) : null), r && r.length !== e && (t.histograms = r.length > e ? r.slice(0, e) : null), s.BAND_COUNT && Number(s.BAND_COUNT) !== e && (t.keyProperties = { ...s, BAND_COUNT: typeof s.BAND_COUNT == "string" ? String(e) : e });
  }
};
c([h({ json: { write: !0 } })], F.prototype, "functionName", void 0), c([h({ json: { write: !0 } })], F.prototype, "functionArguments", void 0), c([h()], F.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } }), Ie((o) => o == null ? void 0 : o.toLowerCase())], F.prototype, "outputPixelType", void 0), c([h({ json: { write: !0 } })], F.prototype, "mainPrimaryRasterId", void 0), c([h()], F.prototype, "sourceRasters", void 0), c([h({ type: [Ke], json: { write: !0 } })], F.prototype, "sourceRasterInfos", void 0), c([h({ json: { write: !0 } })], F.prototype, "rasterInfo", void 0), c([h({ json: { write: !0 } })], F.prototype, "readingBufferSize", void 0), c([h({ json: { write: !0 } })], F.prototype, "id", void 0), c([h()], F.prototype, "isNoopProcess", void 0), c([h()], F.prototype, "supportsGPU", null), c([h()], F.prototype, "rawInputBandIds", void 0), c([h()], F.prototype, "isInputBandIdsSwizzled", void 0), c([h()], F.prototype, "swizzledBandSelection", void 0), c([h()], F.prototype, "isBranch", void 0), c([h()], F.prototype, "flatWebGLFunctionChain", null), c([h()], F.prototype, "_bindingResult", void 0), F = c([x("geoscene.layers.support.rasterFunctions.BaseRasterFunction")], F);
const B = F;
let X = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Aspect", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    var s;
    const t = this.sourceRasterInfos[0];
    this.isGCS = ((s = t.spatialReference) == null ? void 0 : s.isGeographic) ?? !1, this.outputPixelType = this._getOutputPixelType("f32");
    const e = t.clone();
    return e.pixelType = this.outputPixelType, e.statistics = [{ min: -1, max: 360, avg: 180, stddev: 30 }], e.histograms = null, e.colormap = null, e.attributeTable = null, e.bandCount = 1, this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var n;
    const e = (n = t.pixelBlocks) == null ? void 0 : n[0];
    if (e == null)
      return null;
    const { extent: s, primaryPixelSizes: i } = t, r = i == null ? void 0 : i[0], a = r ?? (s ? { x: s.width / e.width, y: s.height / e.height } : { x: 1, y: 1 });
    return Ze(e, { resolution: a });
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], X.prototype, "functionName", void 0), c([h({ type: an, json: { write: !0, name: "rasterFunctionArguments" } })], X.prototype, "functionArguments", void 0), c([h()], X.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], X.prototype, "isGCS", void 0), X = c([x("geoscene.layers.support.rasterFunctions.AspectFunction")], X);
const ln = X, cn = /* @__PURE__ */ new Set(["+", "-", "*", "/", "(", ")"]);
function pn(o, t) {
  (o = o.replaceAll(" ", "")).startsWith("-") && (o = "0" + o), o.startsWith("+") && (o = o.slice(1, o.length));
  const e = o.split(""), s = [], i = [];
  let r = "";
  for (let a = 0; a < e.length; a++) {
    const n = e[a];
    if (cn.has(n))
      r !== "" && i.push(parseFloat(r)), s.push(n), r = "";
    else {
      if (n.toLowerCase() === "b") {
        a++, r = n.concat(e[a]), i.push(t[parseInt(r[1], 10) - 1]), r = "";
        continue;
      }
      r = r.concat(n), a === e.length - 1 && i.push(parseFloat(r));
    }
  }
  return { ops: s, nums: i };
}
function hn(o, t, e, s) {
  if (typeof e == "number" && typeof s == "number")
    return e + s;
  let i, r, a;
  typeof e == "number" ? (a = s, i = a.length, r = new Float32Array(i), r.fill(e)) : (i = e.length, r = e, s.constructor === Number ? (a = new Float32Array(i), a.fill(s)) : a = s);
  const n = new Float32Array(i);
  switch (t) {
    case "+":
      for (let u = 0; u < i; u++)
        (o == null || o[u]) && (n[u] = r[u] + a[u]);
      break;
    case "-":
      for (let u = 0; u < i; u++)
        (o == null || o[u]) && (n[u] = r[u] - a[u]);
      break;
    case "*":
      for (let u = 0; u < i; u++)
        (o == null || o[u]) && (n[u] = r[u] * a[u]);
      break;
    case "/":
      for (let u = 0; u < i; u++)
        (o == null || o[u]) && a[u] && (n[u] = r[u] / a[u]);
      break;
    case "(":
    case ")":
      throw new Error("encountered error with custom band index equation");
  }
  return n;
}
function mn(o, t) {
  o.splice(t, 1);
  let e = 0, s = 0;
  do {
    e = 0, s = 0;
    for (let i = 0; i < o.length; i++)
      if (o[i] === "(")
        e = i;
      else if (o[i] === ")") {
        s = i;
        break;
      }
    s === e + 1 && o.splice(e, 2);
  } while (s === e + 1);
  return o;
}
function fn(o) {
  if (o.length === 1)
    return { opIndex: 0, numIndex: 0 };
  let t = 0, e = 0;
  for (let a = 0; a < o.length; a++)
    if (o[a] === "(")
      t = a;
    else if (o[a] === ")") {
      e = a;
      break;
    }
  const s = e === 0 ? o : o.slice(t + 1, e);
  let i = -1;
  for (let a = 0; a < s.length; a++)
    if (s[a] === "*" || s[a] === "/") {
      i = a;
      break;
    }
  if (i > -1)
    e > 0 && (i += t + 1);
  else {
    for (let a = 0; a < s.length; a++)
      if (s[a] === "+" || s[a] === "-") {
        i = a;
        break;
      }
    e > 0 && (i += t + 1);
  }
  let r = 0;
  for (let a = 0; a < i; a++)
    o[a] === "(" && r++;
  return { opIndex: i, numIndex: i - r };
}
function dn(o, t, e) {
  let s, { ops: i, nums: r } = pn(e, t);
  if (i.length === 0) {
    const a = r.length === 1 ? r[0] : t[0];
    if (a instanceof Float32Array)
      return [a];
    const n = new Float32Array(t[0].length);
    return typeof a == "number" ? n.fill(a) : n.set(a), [n];
  }
  for (; i.length > 0; ) {
    const { numIndex: a, opIndex: n } = fn(i);
    if (s = hn(o, i[n], r[a], r[a + 1]), i.length === 1)
      break;
    i = mn(i, n), r.splice(a, 2, s);
  }
  return [s];
}
const gn = new Ft({ 0: "custom", 1: "ndvi", 2: "savi", 3: "tsavi", 4: "msavi", 5: "gemi", 6: "pvi", 7: "gvitm", 8: "sultan", 9: "vari", 10: "gndvi", 11: "sr", 12: "ndvi-re", 13: "sr-re", 14: "mtvi2", 15: "rtvi-core", 16: "ci-re", 17: "ci-g", 18: "ndwi", 19: "evi", 20: "iron-oxide", 21: "ferrous-minerals", 22: "clay-minerals", 23: "wndwi", 24: "bai", 25: "nbr", 26: "ndbi", 27: "ndmi", 28: "ndsi", 29: "mndwi" }, { useNumericKeys: !0 });
function yn(o, t) {
  if (!Le(o))
    return o;
  const { equation: e, method: s } = t, i = t.bandIndexes.map((p) => p - 1), { pixels: r, mask: a } = o;
  let n;
  switch (s) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      n = ie(a, r[i[0]], r[i[1]]);
      break;
    case "ndwi":
      n = ie(a, r[i[1]], r[i[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      n = vn(a, r[i[0]], r[i[1]]);
      break;
    case "ci-g":
    case "ci-re":
      n = xn(a, r[i[0]], r[i[1]]);
      break;
    case "savi":
      n = wn(a, r[i[0]], r[i[1]], i[2] + 1);
      break;
    case "tsavi":
      n = An(a, r[i[0]], r[i[1]], i[2] + 1, i[3] + 1, i[4] + 1);
      break;
    case "msavi":
      n = Pn(a, r[i[0]], r[i[1]]);
      break;
    case "gemi":
      n = $n(a, r[i[0]], r[i[1]]);
      break;
    case "pvi":
      n = Fn(a, r[i[0]], r[i[1]], i[2] + 1, i[3] + 1);
      break;
    case "gvitm":
      n = In(a, [r[i[0]], r[i[1]], r[i[2]], r[i[3]], r[i[4]], r[i[5]]]);
      break;
    case "sultan":
      n = Tn(a, [r[i[0]], r[i[1]], r[i[2]], r[i[3]], r[i[4]], r[i[5]]]);
      break;
    case "vari":
      n = Nn(a, [r[i[0]], r[i[1]], r[i[2]]]);
      break;
    case "mtvi2":
      n = Rn(a, [r[i[0]], r[i[1]], r[i[2]]]);
      break;
    case "rtvi-core":
      n = Cn(a, [r[i[0]], r[i[1]], r[i[2]]]);
      break;
    case "evi":
      n = _n(a, [r[i[0]], r[i[1]], r[i[2]]]);
      break;
    case "wndwi":
      n = Bn(a, [r[i[0]], r[i[1]], r[i[2]]], i[3] ? i[3] + 1 : 0.5);
      break;
    case "bai":
      n = kn(a, r[i[0]], r[i[1]]);
      break;
    case "custom":
      n = dn(a, r, e);
      break;
    default:
      return o;
  }
  const u = a != null ? new Uint8Array(a.length) : null;
  a != null && u != null && u.set(a);
  const l = new d({ width: o.width, height: o.height, pixelType: "f32", pixels: n, mask: u });
  return l.updateStatistics(), l;
}
function bn(o, t, e, s) {
  const { mask: i, pixels: r, width: a, height: n } = o, u = r[e], l = r[t], p = l.length, m = s ? new Uint8Array(p) : new Float32Array(p), f = s ? 100 : 1, g = s ? 100.5 : 0;
  for (let v = 0; v < p; v++)
    if (i == null || i[v]) {
      const A = u[v], dt = l[v], z = A + dt;
      z && (m[v] = (A - dt) / z * f + g);
    }
  const y = new d({ width: a, height: n, mask: i, pixelType: s ? "u8" : "f32", pixels: [m] });
  return y.updateStatistics(), y;
}
function T(o) {
  const t = new Float32Array(9);
  return t[3 * o[0]] = 1, t[3 * o[1] + 1] = 1, t[3 * o[2] + 2] = 1, t;
}
function ie(o, t, e) {
  const s = e.length, i = new Float32Array(s);
  for (let r = 0; r < s; r++)
    if (o == null || o[r]) {
      const a = t[r], n = e[r], u = a + n;
      u && (i[r] = (a - n) / u);
    }
  return [i];
}
function vn(o, t, e) {
  const s = e.length, i = new Float32Array(s);
  for (let r = 0; r < s; r++)
    if (o == null || o[r]) {
      const a = t[r], n = e[r];
      n && (i[r] = a / n);
    }
  return [i];
}
function xn(o, t, e) {
  const s = t.length, i = new Float32Array(s);
  for (let r = 0; r < s; r++)
    if (o == null || o[r]) {
      const a = t[r], n = e[r];
      n && (i[r] = a / n - 1);
    }
  return [i];
}
function wn(o, t, e, s) {
  const i = e.length, r = new Float32Array(i);
  for (let a = 0; a < i; a++)
    if (o == null || o[a]) {
      const n = e[a], u = t[a], l = u + n + s;
      l && (r[a] = (u - n) / l * (1 + s));
    }
  return [r];
}
function An(o, t, e, s, i, r) {
  const a = e.length, n = new Float32Array(a), u = -i * s + r * (1 + s * s);
  for (let l = 0; l < a; l++)
    if (o == null || o[l]) {
      const p = e[l], m = t[l], f = i * m + p + u;
      f && (n[l] = s * (m - s * p - i) / f);
    }
  return [n];
}
function Pn(o, t, e) {
  const s = e.length, i = new Float32Array(s);
  for (let r = 0; r < s; r++)
    if (o == null || o[r]) {
      const a = e[r], n = t[r];
      i[r] = 0.5 * (2 * (n + 1) - Math.sqrt((2 * n + 1) ** 2 - 8 * (n - a)));
    }
  return [i];
}
function $n(o, t, e) {
  const s = e.length, i = new Float32Array(s);
  for (let r = 0; r < s; r++)
    if (o == null || o[r]) {
      const a = e[r], n = t[r];
      if (a !== 1) {
        const u = (2 * (n * n - a * a) + 1.5 * n + 0.5 * a) / (n + a + 0.5);
        i[r] = u * (1 - 0.25 * u) - (a - 0.125) / (1 - a);
      }
    }
  return [i];
}
function Fn(o, t, e, s, i) {
  const r = e.length, a = new Float32Array(r), n = Math.sqrt(1 + s * s);
  for (let u = 0; u < r; u++)
    if (o == null || o[u]) {
      const l = e[u], p = t[u];
      a[u] = (p - s * l - i) / n;
    }
  return [a];
}
function In(o, t) {
  const [e, s, i, r, a, n] = t, u = e.length, l = new Float32Array(u);
  for (let p = 0; p < u; p++)
    (o == null || o[p]) && (l[p] = -0.2848 * e[p] - 0.2435 * s[p] - 0.5436 * i[p] + 0.7243 * r[p] + 0.084 * a[p] - 1.18 * n[p]);
  return [l];
}
function Tn(o, t) {
  const [e, , s, i, r, a] = t, n = e.length, u = new Float32Array(n), l = new Float32Array(n), p = new Float32Array(n);
  for (let m = 0; m < n; m++)
    (o == null || o[m]) && (u[m] = a[m] ? r[m] / a[m] * 100 : 0, l[m] = e[m] ? r[m] / e[m] * 100 : 0, p[m] = i[m] ? s[m] / i[m] * (r[m] / i[m]) * 100 : 0);
  return [u, l, p];
}
function Nn(o, t) {
  const [e, s, i] = t, r = e.length, a = new Float32Array(r);
  for (let n = 0; n < r; n++)
    if (o == null || o[n])
      for (n = 0; n < r; n++) {
        const u = e[n], l = s[n], p = l + u - i[n];
        p && (a[n] = (l - u) / p);
      }
  return [a];
}
function Rn(o, t) {
  const [e, s, i] = t, r = e.length, a = new Float32Array(r);
  for (let n = 0; n < r; n++)
    if (o == null || o[n])
      for (n = 0; n < r; n++) {
        const u = e[n], l = s[n], p = i[n], m = Math.sqrt((2 * u + 1) ** 2 - 6 * u - 5 * Math.sqrt(l) - 0.5);
        a[n] = 1.5 * (1.2 * (u - p) - 2.5 * (l - p)) * m;
      }
  return [a];
}
function Cn(o, t) {
  const [e, s, i] = t, r = e.length, a = new Float32Array(r);
  for (let n = 0; n < r; n++)
    if (o == null || o[n])
      for (n = 0; n < r; n++) {
        const u = e[n], l = s[n], p = i[n];
        a[n] = 100 * (u - l) - 10 * (u - p);
      }
  return [a];
}
function _n(o, t) {
  const [e, s, i] = t, r = e.length, a = new Float32Array(r);
  for (let n = 0; n < r; n++)
    if (o == null || o[n])
      for (n = 0; n < r; n++) {
        const u = e[n], l = s[n], p = u + 6 * l - 7.5 * i[n] + 1;
        p && (a[n] = 2.5 * (u - l) / p);
      }
  return [a];
}
function Bn(o, t, e = 0.5) {
  const [s, i, r] = t, a = i.length, n = new Float32Array(a);
  for (let u = 0; u < a; u++)
    if (o == null || o[u])
      for (u = 0; u < a; u++) {
        const l = s[u], p = i[u], m = r[u], f = l + e * p + (1 - e) * m;
        f && (n[u] = (l - e * p - (1 - e) * m) / f);
      }
  return [n];
}
function kn(o, t, e) {
  const s = e.length, i = new Float32Array(s);
  for (let r = 0; r < s; r++)
    if (o == null || o[r])
      for (r = 0; r < s; r++) {
        const a = (0.1 - t[r]) ** 2 + (0.06 - e[r]) ** 2;
        a && (i[r] = 1 / a);
      }
  return [i];
}
var _t;
let gt = _t = class extends _ {
  constructor() {
    super(...arguments), this.method = "custom";
  }
  clone() {
    return new _t({ method: this.method, bandIndexes: this.bandIndexes, raster: S(this.raster) });
  }
};
c([h({ json: { type: String, write: !0 } })], gt.prototype, "bandIndexes", void 0), c([q(gn)], gt.prototype, "method", void 0), gt = _t = c([x("geoscene.layers.support.rasterFunctions.BandArithmeticFunctionArguments")], gt);
const jn = gt, Sn = /* @__PURE__ */ new Set(["vari", "mtvi2", "rtvi-core", "evi"]);
let st = class extends B {
  constructor() {
    super(...arguments), this.functionName = "BandArithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0];
    if (t.bandCount < 2)
      return { success: !1, supportsGPU: !1, error: "band-arithmetic-function: source raster has insufficient amount of raster bands" };
    const e = t.clone();
    return e.pixelType = this.outputPixelType, e.statistics = null, e.histograms = null, e.bandCount = this.functionArguments.method === "sultan" ? 3 : 1, e.keyProperties = { ...e.keyProperties, BandProperties: void 0 }, this.rasterInfo = e, { success: !0, supportsGPU: !["custom", "gvitm", "sultan"].includes(this.functionArguments.method) };
  }
  _processPixels(t) {
    var a;
    const e = (a = t.pixelBlocks) == null ? void 0 : a[0];
    if (e == null)
      return e;
    const { method: s, bandIndexes: i } = this.functionArguments, r = i.split(" ").map((n) => parseFloat(n));
    return yn(e, { method: s, bandIndexes: r, equation: i });
  }
  _getWebGLParameters() {
    const t = this.functionArguments.bandIndexes.split(" ").map((n) => parseFloat(n) - 1);
    t.length === 2 && t.push(0);
    const e = this.isInputBandIdsSwizzled ? [0, 1, 2] : t;
    let s, i;
    const r = new Float32Array(3), { method: a } = this.functionArguments;
    switch (a) {
      case "gndvi":
      case "nbr":
      case "ndbi":
      case "ndvi":
      case "ndvi-re":
      case "ndsi":
      case "ndmi":
      case "mndwi":
        s = T([e[0], e[1], 0]), i = "ndxi";
        break;
      case "ndwi":
        s = T([e[1], e[0], 0]), i = "ndxi";
        break;
      case "sr":
      case "sr-re":
      case "iron-oxide":
      case "ferrous-minerals":
      case "clay-minerals":
        s = T([e[0], e[1], 0]), i = "sr";
        break;
      case "ci-g":
      case "ci-re":
        s = T([e[0], e[1], 0]), i = "ci";
        break;
      case "savi":
        s = T([e[0], e[1], 0]), i = "savi", r[0] = t[2] + 1;
        break;
      case "tsavi":
        s = T([e[0], e[1], 0]), i = "tsavi", r[0] = t[2] + 1, r[1] = t[3] + 1, r[2] = t[4] + 1;
        break;
      case "msavi":
        s = T([e[0], e[1], 0]), i = "msavi";
        break;
      case "gemi":
        s = T([e[0], e[1], 0]), i = "gemi";
        break;
      case "pvi":
        s = T([e[0], e[1], 0]), i = "tsavi", r[0] = t[2] + 1, r[1] = t[3] + 1;
        break;
      case "vari":
        s = T([e[0], e[1], e[2]]), i = "vari";
        break;
      case "mtvi2":
        s = T([e[0], e[1], e[2]]), i = "mtvi2";
        break;
      case "rtvi-core":
        s = T([e[0], e[1], e[2]]), i = "rtvicore";
        break;
      case "evi":
        s = T([e[0], e[1], e[2]]), i = "evi";
        break;
      case "wndwi":
        s = T([e[0], e[1], 0]), i = "wndwi", r[0] = t[3] ? t[3] + 1 : 0.5;
        break;
      case "bai":
        s = T([e[1], e[0], 0]), i = "bai";
        break;
      default:
        s = T([0, 1, 2]), i = "custom";
    }
    return { bandIndexMat3: s, indexType: i, adjustments: r };
  }
  _getInputBandIds(t) {
    if (this.functionArguments.method === "custom")
      return t;
    const e = this.functionArguments.bandIndexes.split(" ").map((n) => parseFloat(n) - 1), s = t.length, i = e.map((n) => n >= s ? s - 1 : n), r = Sn.has(this.functionArguments.method) ? 3 : 2, a = i.slice(0, r).map((n) => t[n]);
    return a.length === 2 && a.push(0), a;
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], st.prototype, "functionName", void 0), c([h({ type: jn, json: { write: !0, name: "rasterFunctionArguments" } })], st.prototype, "functionArguments", void 0), c([h()], st.prototype, "rasterArgumentNames", void 0), st = c([x("geoscene.layers.support.rasterFunctions.BandArithmeticFunction")], st);
const Mn = st;
var Bt;
let D = Bt = class extends _ {
  castColormapName(o) {
    if (!o)
      return null;
    const t = o.toLowerCase();
    return Qe.includes(t) ? t : null;
  }
  readColorRamp(o) {
    return Ve(o);
  }
  readColorRampName(o, t) {
    if (!o)
      return null;
    const e = xt.jsonValues.find((s) => s.toLowerCase() === o.toLowerCase());
    return e ? xt.fromJSON(e) : null;
  }
  clone() {
    var o;
    return new Bt({ colormap: S(this.colormap), colormapName: this.colormapName, colorRamp: (o = this.colorRamp) == null ? void 0 : o.clone(), colorRampName: this.colorRampName });
  }
};
c([h({ type: [[Number]], json: { write: !0 } })], D.prototype, "colormap", void 0), c([h({ type: String, json: { write: !0 } })], D.prototype, "colormapName", void 0), c([Ie("colormapName")], D.prototype, "castColormapName", null), c([h({ types: Oe, json: { write: !0 } })], D.prototype, "colorRamp", void 0), c([ht("colorRamp")], D.prototype, "readColorRamp", null), c([h({ type: xt.apiValues, json: { type: xt.jsonValues, write: xt.write } })], D.prototype, "colorRampName", void 0), c([ht("colorRampName")], D.prototype, "readColorRampName", null), D = Bt = c([x("geoscene.layers.support.rasterFunctions.ColormapFunctionArguments")], D);
const Dn = D, zn = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [112, 75, 3], [113, 76, 3], [114, 77, 3], [115, 77, 3], [116, 78, 3], [117, 79, 3], [118, 79, 3], [119, 80, 3], [121, 81, 4], [122, 82, 4], [123, 82, 4], [124, 83, 4], [125, 84, 4], [126, 84, 4], [127, 85, 4], [128, 86, 4], [129, 86, 4], [130, 87, 4], [131, 88, 4], [132, 89, 4], [133, 89, 4], [134, 90, 4], [135, 91, 4], [136, 91, 4], [137, 92, 4], [138, 93, 4], [139, 94, 4], [140, 94, 4], [142, 95, 5], [143, 96, 5], [144, 96, 5], [145, 97, 5], [146, 98, 5], [147, 99, 5], [148, 99, 5], [149, 100, 5], [150, 101, 5], [151, 101, 5], [152, 102, 5], [153, 103, 5], [154, 104, 5], [155, 104, 5], [156, 105, 5], [157, 106, 5], [158, 106, 5], [159, 107, 5], [160, 108, 5], [161, 108, 5], [162, 109, 5], [164, 110, 6], [165, 111, 6], [166, 111, 6], [167, 112, 6], [168, 113, 6], [169, 113, 6], [170, 114, 6], [171, 115, 6], [172, 116, 6], [173, 116, 6], [174, 117, 6], [245, 0, 0], [245, 5, 0], [245, 10, 0], [246, 15, 0], [246, 20, 0], [246, 25, 0], [246, 30, 0], [247, 35, 0], [247, 40, 0], [247, 45, 0], [247, 50, 0], [247, 55, 0], [248, 60, 0], [248, 65, 0], [248, 70, 0], [248, 75, 0], [249, 81, 0], [249, 86, 0], [249, 91, 0], [249, 96, 0], [250, 101, 0], [250, 106, 0], [250, 111, 0], [250, 116, 0], [250, 121, 0], [251, 126, 0], [251, 131, 0], [251, 136, 0], [251, 141, 0], [252, 146, 0], [252, 151, 0], [252, 156, 0], [252, 156, 0], [251, 159, 0], [250, 162, 0], [249, 165, 0], [248, 168, 0], [247, 171, 0], [246, 174, 0], [245, 177, 0], [245, 179, 0], [244, 182, 0], [243, 185, 0], [242, 188, 0], [241, 191, 0], [240, 194, 0], [239, 197, 0], [238, 200, 0], [237, 203, 0], [236, 206, 0], [235, 209, 0], [234, 212, 0], [233, 215, 0], [232, 218, 0], [231, 221, 0], [230, 224, 0], [230, 226, 0], [229, 229, 0], [228, 232, 0], [227, 235, 0], [226, 238, 0], [225, 241, 0], [224, 244, 0], [223, 247, 0], [165, 247, 0], [163, 244, 0], [161, 240, 0], [158, 237, 0], [156, 233, 1], [154, 230, 1], [152, 227, 1], [149, 223, 1], [147, 220, 1], [145, 216, 1], [143, 213, 1], [140, 210, 2], [138, 206, 2], [136, 203, 2], [134, 200, 2], [132, 196, 2], [129, 193, 2], [127, 189, 2], [125, 186, 3], [123, 183, 3], [120, 179, 3], [118, 176, 3], [116, 172, 3], [114, 169, 3], [111, 166, 3], [109, 162, 4], [107, 159, 4], [105, 155, 4], [103, 152, 4], [100, 149, 4], [98, 145, 4], [96, 142, 4], [94, 138, 5], [91, 135, 5], [89, 132, 5], [87, 128, 5], [85, 125, 5], [82, 121, 5], [80, 118, 5], [78, 115, 6], [76, 111, 6], [73, 108, 6], [71, 105, 6], [69, 101, 6], [67, 98, 6], [65, 94, 6], [62, 91, 7], [60, 88, 7], [58, 84, 7], [56, 81, 7], [53, 77, 7], [51, 74, 7], [49, 71, 7], [47, 67, 8], [44, 64, 8], [42, 60, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8]], En = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [245, 20, 0], [245, 24, 0], [245, 29, 0], [245, 31, 0], [247, 33, 0], [247, 33, 0], [247, 37, 0], [247, 41, 0], [247, 41, 0], [247, 41, 0], [247, 45, 0], [247, 45, 0], [247, 47, 0], [247, 49, 0], [247, 49, 0], [247, 54, 0], [247, 54, 0], [247, 56, 0], [247, 58, 0], [247, 58, 0], [250, 62, 0], [250, 62, 0], [250, 62, 0], [250, 67, 0], [250, 67, 0], [250, 67, 0], [250, 69, 0], [250, 71, 0], [250, 71, 0], [250, 75, 0], [250, 75, 0], [250, 78, 0], [250, 79, 0], [250, 79, 0], [250, 79, 0], [250, 81, 0], [250, 83, 0], [250, 83, 0], [250, 87, 0], [250, 87, 0], [250, 90, 0], [250, 92, 0], [252, 93, 0], [252, 93, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 105, 0], [252, 105, 0], [252, 107, 0], [252, 109, 0], [252, 109, 0], [252, 113, 13], [255, 118, 20], [255, 119, 23], [255, 121, 25], [255, 126, 33], [255, 132, 38], [255, 133, 40], [255, 135, 43], [255, 141, 48], [255, 144, 54], [255, 150, 59], [255, 152, 61], [255, 153, 64], [255, 159, 69], [255, 163, 77], [255, 165, 79], [255, 168, 82], [255, 174, 87], [255, 176, 92], [255, 181, 97], [255, 183, 99], [255, 186, 102], [255, 191, 107], [255, 197, 115], [255, 201, 120], [255, 203, 123], [255, 205, 125], [255, 209, 130], [255, 214, 138], [255, 216, 141], [255, 218, 143], [255, 224, 150], [255, 228, 156], [255, 234, 163], [255, 236, 165], [255, 238, 168], [255, 243, 173], [255, 248, 181], [255, 252, 186], [253, 252, 186], [250, 252, 187], [244, 250, 180], [238, 247, 176], [234, 246, 173], [231, 245, 169], [223, 240, 163], [217, 237, 157], [211, 235, 150], [205, 233, 146], [200, 230, 142], [195, 227, 136], [189, 224, 132], [184, 222, 126], [180, 220, 123], [174, 217, 119], [169, 214, 114], [163, 212, 108], [160, 210, 105], [154, 207, 101], [148, 204, 96], [143, 201, 93], [138, 199, 88], [134, 197, 84], [130, 194, 81], [126, 191, 77], [117, 189, 70], [115, 186, 68], [112, 184, 64], [106, 181, 60], [100, 179, 55], [94, 176, 49], [92, 174, 47], [90, 173, 45], [81, 168, 37], [75, 166, 33], [71, 163, 28], [66, 160, 24], [62, 158, 21], [56, 156, 14], [51, 153, 0], [51, 153, 0], [51, 153, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [49, 148, 0], [49, 148, 0], [49, 148, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [44, 133, 0], [44, 133, 0], [44, 133, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [42, 128, 0], [42, 128, 0], [42, 128, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0]];
function Qt(o, t) {
  const e = [], s = [];
  for (let r = 0; r < o.length - 1; r++)
    e.push({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: o[r].slice(1), toColor: o[r + 1].slice(1) }), s.push(o[r + 1][0] - o[r][0]);
  const i = o[o.length - 1][0];
  return Ce({ type: "multipart", colorRamps: e }, { numColors: i, weights: t = t ?? s });
}
function Gn() {
  return Qt([[0, 0, 191, 191], [51, 0, 0, 255], [102, 255, 0, 255], [153, 255, 0, 127], [204, 191, 63, 127], [256, 20, 20, 20]]);
}
function On() {
  const o = Qt([[0, 255, 255, 255], [70, 0, 255, 0], [80, 205, 173, 193], [100, 150, 150, 150], [110, 120, 51, 100], [130, 120, 100, 200], [140, 28, 3, 144], [160, 6, 0, 55], [180, 10, 25, 30], [201, 6, 7, 27]]);
  for (let t = o.length; t < 256; t++)
    o.push([6, 27, 7]);
  return o;
}
function Vn() {
  return Ce({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: [0, 0, 0], toColor: [255, 255, 255] });
}
function Un() {
  const o = [];
  for (let t = 0; t < 256; t++) {
    const e = [];
    for (let s = 0; s < 3; s++)
      e.push(Math.round(255 * Math.random()));
    o.push(e);
  }
  return o;
}
function Ln() {
  return Qt([[0, 38, 41, 54], [69, 79, 82, 90], [131, 156, 156, 156], [256, 253, 253, 241]], [0.268, 0.238, 0.495]);
}
function Wn(o) {
  let t;
  switch (o) {
    case "elevation":
      t = Gn();
      break;
    case "gray":
      t = Vn();
      break;
    case "hillshade":
      t = Ln();
      break;
    case "ndvi":
      t = zn;
      break;
    case "ndvi2":
      t = On();
      break;
    case "ndvi3":
      t = En;
      break;
    case "random":
      t = Un();
  }
  return t ? (t = t.map((e, s) => [s, ...e]), t) : null;
}
let O = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Colormap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    if (t.bandCount > 1)
      return { success: !1, supportsGPU: !1, error: "colormap-function: source data must be single band" };
    let { colormap: e, colormapName: s, colorRamp: i, colorRampName: r } = this.functionArguments;
    if (!(e != null && e.length))
      if (i)
        e = oe(i, { interpolateAlpha: !0 });
      else if (r) {
        const n = tn(r);
        n && (e = oe(n));
      } else
        s && (e = Wn(s));
    if (!(e != null && e.length))
      return { success: !1, supportsGPU: !1, error: "colormap-function: missing colormap argument" };
    this.outputPixelType = this._getOutputPixelType("u8");
    const a = t.clone();
    return a.pixelType = this.outputPixelType, a.colormap = e, a.bandCount = 1, this.rasterInfo = a, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var e;
    return (e = t.pixelBlocks) == null ? void 0 : e[0];
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], O.prototype, "functionName", void 0), c([h({ type: Dn, json: { write: !0, name: "rasterFunctionArguments" } })], O.prototype, "functionArguments", void 0), c([h()], O.prototype, "rasterArgumentNames", void 0), c([h()], O.prototype, "isNoopProcess", void 0), c([h({ json: { write: !0 } })], O.prototype, "indexedColormap", void 0), O = c([x("geoscene.layers.support.rasterFunctions.ColormapFunction")], O);
const qn = O;
var kt;
let yt = kt = class extends _ {
  constructor() {
    super(...arguments), this.rasters = [];
  }
  writeRasters(o, t) {
    t.rasters = o.map((e) => typeof e == "number" || typeof e == "string" ? e : e.toJSON());
  }
  clone() {
    return new kt({ rasters: S(this.rasters) });
  }
};
c([h({ json: { write: !0 } })], yt.prototype, "rasters", void 0), c([mt("rasters")], yt.prototype, "writeRasters", null), yt = kt = c([x("geoscene.layers.support.rasterFunctions.CompositeBandFunctionArguments")], yt);
const Xn = yt;
let rt = class extends B {
  constructor() {
    super(...arguments), this.functionName = "CompositeBand", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0];
    this.outputPixelType = this._getOutputPixelType(e.pixelType);
    const s = e.clone();
    if (s.attributeTable = null, s.colormap = null, s.pixelType = this.outputPixelType, s.bandCount = t.map(({ bandCount: r }) => r).reduce((r, a) => r + a), t.every(({ statistics: r }) => r != null && r.length)) {
      const r = [];
      t.forEach(({ statistics: a }) => a != null && r.push(...a)), s.statistics = r;
    }
    if (t.every(({ histograms: r }) => r != null && r.length)) {
      const r = [];
      t.forEach(({ histograms: a }) => a != null && r.push(...a)), s.histograms = r;
    }
    s.bandCount > 1 && (s.colormap = null, s.attributeTable = null);
    const i = t.every((r) => {
      var a;
      return (a = r.keyProperties.BandProperties) == null ? void 0 : a.length;
    }) ? t.flatMap((r) => r.keyProperties.BandProperties) : void 0;
    return s.keyProperties = { ...s.keyProperties, BandProperties: i }, this.rasterInfo = s, { success: !0, supportsGPU: s.bandCount <= 3 };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e ? (e == null ? void 0 : e[0]) == null ? null : We(e) : null;
  }
  _getWebGLParameters() {
    return { bandCount: this.rasterInfo.bandCount };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], rt.prototype, "functionName", void 0), c([h({ type: Xn, json: { write: !0, name: "rasterFunctionArguments" } })], rt.prototype, "functionArguments", void 0), c([h()], rt.prototype, "rasterArgumentNames", void 0), rt = c([x("geoscene.layers.support.rasterFunctions.CompositeBandFunction")], rt);
const Hn = rt, w = { userDefined: -1, lineDetectionHorizontal: 0, lineDetectionVertical: 1, lineDetectionLeftDiagonal: 2, lineDetectionRightDiagonal: 3, gradientNorth: 4, gradientWest: 5, gradientEast: 6, gradientSouth: 7, gradientNorthEast: 8, gradientNorthWest: 9, smoothArithmeticMean: 10, smoothing3x3: 11, smoothing5x5: 12, sharpening3x3: 13, sharpening5x5: 14, laplacian3x3: 15, laplacian5x5: 16, sobelHorizontal: 17, sobelVertical: 18, sharpen: 19, sharpen2: 20, pointSpread: 21, none: 255 }, Jn = { plus: 1, minus: 2, times: 3, sqrt: 4, power: 5, abs: 10, divide: 23, exp: 25, exp10: 26, exp2: 27, int: 30, float: 32, ln: 35, log10: 36, log2: 37, mod: 44, negate: 45, roundDown: 48, roundUp: 49, square: 53, floatDivide: 64, floorDivide: 65 }, k = { bitwiseAnd: 11, bitwiseLeftShift: 12, bitwiseNot: 13, bitwiseOr: 14, bitwiseRightShift: 15, bitwiseXOr: 16, booleanAnd: 17, booleanNot: 18, booleanOr: 19, booleanXOr: 20, equalTo: 24, greaterThan: 28, greaterThanEqual: 29, lessThan: 33, lessThanEqual: 34, isNull: 31, notEqual: 46 }, M = { acos: 6, asin: 7, atan: 8, atanh: 9, cos: 21, cosh: 22, sin: 51, sinh: 52, tan: 56, tanh: 57, acosh: 59, asinh: 60, atan2: 61 }, Yn = { majority: 38, max: 39, mean: 40, med: 41, min: 42, minority: 43, range: 47, stddev: 54, sum: 55, variety: 58, majorityIgnoreNoData: 66, maxIgnoreNoData: 67, meanIgnoreNoData: 68, medIgnoreNoData: 69, minIgnoreNoData: 70, minorityIgnoreNoData: 71, rangeIgnoreNoData: 72, stddevIgnoreNoData: 73, sumIgnoreNoData: 74, varietyIgnoreNoData: 75 }, _e = { setNull: 50, conditional: 78 }, ae = { ...Jn, ...k, ...M, ...Yn, ..._e }, P = /* @__PURE__ */ new Map();
function Kn(o) {
  const t = Math.sqrt(o.length), e = o.slice(0, t), s = [1];
  for (let i = 1; i < t; i++) {
    let r = null;
    for (let a = 0; a < t; a++) {
      const n = o[a + i * t], u = o[a];
      if (r == null)
        if (u === 0) {
          if (n)
            return { separable: !1, row: null, col: null };
        } else
          r = n / u;
      else if (n / u !== r)
        return { separable: !1, row: null, col: null };
    }
    if (r == null)
      return { separable: !1, row: null, col: null };
    s.push(r);
  }
  return { separable: !0, row: e, col: s };
}
function ue(o, t, e, s, i, r, a) {
  const n = new Float32Array(t * e), u = r.length, l = a ? 0 : s, p = a ? s : 0, m = a ? 1 : t;
  for (let f = l; f < e - l; f++) {
    const g = f * t;
    for (let y = p; y < t - p; y++) {
      if (i && !i[g + y])
        continue;
      let v = 0;
      for (let A = 0; A < u; A++)
        v += o[g + y + (A - s) * m] * r[A];
      n[g + y] = v;
    }
  }
  return n;
}
function Zn(o, t, e, s, i, r, a) {
  const n = new Float32Array(t * e), u = Math.floor(s / 2), l = Math.floor(i / 2);
  for (let p = u; p < e - u; p++) {
    const m = p * t;
    for (let f = l; f < t - l; f++) {
      if (r && !r[m + f])
        continue;
      let g = 0;
      for (let y = 0; y < s; y++)
        for (let v = 0; v < i; v++)
          g += o[m + f + (y - u) * t + v - l] * a[y * i + v];
      n[m + f] = g;
    }
  }
  return n;
}
function Qn(o, t, e = !0) {
  const { pixels: s, width: i, height: r, pixelType: a, mask: n } = o, u = s.length, l = [], { kernel: p, rows: m, cols: f } = t;
  for (let g = 0; g < u; g++) {
    const y = Zn(s[g], i, r, m, f, n, p);
    e && Be(y, i, r, m, f), l.push(y);
  }
  return new d({ width: i, height: r, pixelType: a, pixels: l, mask: n });
}
function Be(o, t, e, s, i) {
  const r = Math.floor(s / 2);
  for (let n = 0; n < r; n++)
    for (let u = 0; u < t; u++)
      o[n * t + u] = o[(i - 1 - n) * t + u], o[(e - 1 - n) * t + u] = o[(e - i + n) * t + u];
  const a = Math.floor(i / 2);
  for (let n = 0; n < e; n++) {
    const u = n * t;
    for (let l = 0; l < a; l++)
      o[u + l] = o[u + i - 1 - l], o[u + t - l - 1] = o[u + t + l - i];
  }
}
function ts(o, t, e, s = !0) {
  const { pixels: i, width: r, height: a, pixelType: n, mask: u } = o, l = i.length, p = [], m = t.length, f = e.length, g = Math.floor(m / 2), y = Math.floor(f / 2);
  for (let v = 0; v < l; v++) {
    let A = ue(i[v], r, a, g, u, t, !0);
    A = ue(A, r, a, y, u, e, !1), s && Be(A, r, a, m, f), p.push(A);
  }
  return new d({ width: r, height: a, pixelType: n, pixels: p, mask: u });
}
function es(o, t) {
  const e = Kn(t.kernel), s = t.mirrorEdges !== !1, i = e.separable ? ts(o, e.row, e.col, s) : Qn(o, t, s), { outputPixelType: r } = t;
  return r && i.clamp(r), i;
}
P.set(w.none, [0, 0, 0, 0, 1, 0, 0, 0, 0]), P.set(w.lineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]), P.set(w.lineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]), P.set(w.lineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]), P.set(w.lineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]), P.set(w.gradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), P.set(w.gradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), P.set(w.gradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]), P.set(w.gradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]), P.set(w.gradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]), P.set(w.gradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]), P.set(w.smoothArithmeticMean, [0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111]), P.set(w.smoothing3x3, [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]), P.set(w.smoothing5x5, [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]), P.set(w.sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]), P.set(w.sharpening5x5, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1]), P.set(w.laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]), P.set(w.laplacian5x5, [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0]), P.set(w.sobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), P.set(w.sobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), P.set(w.sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]), P.set(w.sharpen2, [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]), P.set(w.pointSpread, [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]);
var jt;
let H = jt = class extends _ {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  }
  set convolutionType(o) {
    this._set("convolutionType", o);
    const t = P.get(o);
    if (!t || o === w.userDefined || o === w.none)
      return;
    const e = Math.sqrt(t.length);
    this._set("kernel", t), this._set("cols", e), this._set("rows", e);
  }
  clone() {
    return new jt({ cols: this.cols, rows: this.rows, kernel: [...this.kernel], convolutionType: this.convolutionType, raster: S(this.raster) });
  }
};
c([h({ json: { type: Number, write: !0 } })], H.prototype, "rows", void 0), c([h({ json: { type: Number, write: !0 } })], H.prototype, "cols", void 0), c([h({ json: { name: "type", type: Number, write: !0 } })], H.prototype, "convolutionType", null), c([h({ json: { type: [Number], write: !0 } })], H.prototype, "kernel", void 0), H = jt = c([x("geoscene.layers.support.rasterFunctions.ConvolutionFunctionArguments")], H);
const ns = H, le = 25;
let ot = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Convolution", this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { convolutionType: t, rows: e, cols: s, kernel: i } = this.functionArguments;
    if (!Object.values(w).includes(t))
      return { success: !1, supportsGPU: !1, error: `convolution-function: the specified kernel type is not supported ${t}` };
    if (t !== w.none && e * s !== i.length)
      return { success: !1, supportsGPU: !1, error: "convolution-function: the specified rows and cols do not match the length of the kernel" };
    const r = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(r.pixelType);
    const a = r.clone();
    a.pixelType = this.outputPixelType;
    const n = [w.none, w.sharpen, w.sharpen2, w.sharpening3x3, w.sharpening5x5];
    return this.outputPixelType === "u8" || n.includes(t) || (a.statistics = null, a.histograms = null), a.colormap = null, a.attributeTable = null, this.rasterInfo = a, { success: !0, supportsGPU: i.length <= le };
  }
  _processPixels(t) {
    var n;
    const e = (n = t.pixelBlocks) == null ? void 0 : n[0];
    if (e == null || this.functionArguments.convolutionType === w.none)
      return e;
    let { kernel: s, rows: i, cols: r } = this.functionArguments;
    const a = s.reduce((u, l) => u + l);
    return a !== 0 && a !== 1 && (s = s.map((u) => u / a)), es(e, { kernel: s, rows: i, cols: r, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    let { kernel: t } = this.functionArguments;
    const e = t.reduce((i, r) => i + r);
    e !== 0 && e !== 1 && (t = t.map((i) => i / e));
    const s = new Float32Array(le);
    return s.set(t), { kernelRows: this.functionArguments.rows, kernelCols: this.functionArguments.cols, kernel: s, clampRange: It(this.outputPixelType) };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], ot.prototype, "functionName", void 0), c([h({ type: ns, json: { write: !0, name: "rasterFunctionArguments" } })], ot.prototype, "functionArguments", void 0), c([h()], ot.prototype, "rasterArgumentNames", void 0), ot = c([x("geoscene.layers.support.rasterFunctions.ConvolutionFunction")], ot);
const ss = ot;
var St;
const ke = new Ft({ 0: "standard", 1: "platform", 2: "profile" }, { useNumericKeys: !0 });
let it = St = class extends _ {
  constructor() {
    super(...arguments), this.curvatureType = "standard", this.zFactor = 1;
  }
  readCurvatureType(o, t) {
    return ke.fromJSON(t.type ?? t.curvatureType ?? 0);
  }
  clone() {
    return new St({ curvatureType: this.curvatureType, zFactor: this.zFactor, raster: this.raster });
  }
};
c([h({ json: { write: { target: "type" } } }), q(ke)], it.prototype, "curvatureType", void 0), c([ht("curvatureType", ["type", "curvatureType"])], it.prototype, "readCurvatureType", null), c([h({ type: Number, json: { write: !0 } })], it.prototype, "zFactor", void 0), it = St = c([x("geoscene.layers.support.rasterFunctions.CurvatureFunctionArguments")], it);
const rs = it;
let J = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Curvature", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    var e;
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return t.pixelType = this.outputPixelType, t.statistics = null, t.histograms = null, t.colormap = null, t.attributeTable = null, t.bandCount = 1, this.rasterInfo = t, this.isGCS = ((e = t.spatialReference) == null ? void 0 : e.isGeographic) ?? !1, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var p;
    const e = (p = t.pixelBlocks) == null ? void 0 : p[0];
    if (e == null)
      return null;
    const { zFactor: s, curvatureType: i } = this.functionArguments, { extent: r, primaryPixelSizes: a } = t, n = a == null ? void 0 : a[0], u = n ?? (r ? { x: r.width / e.width, y: r.height / e.height } : { x: 1, y: 1 }), l = this.isGCS && s >= 1 ? s * Nt : s;
    return en(e, { zFactor: l, curvatureType: i, resolution: u });
  }
  _getWebGLParameters() {
    const { zFactor: t, curvatureType: e } = this.functionArguments;
    return { curvatureType: e, zFactor: this.isGCS && t >= 1 ? t * Nt : t };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], J.prototype, "functionName", void 0), c([h({ type: rs, json: { write: !0, name: "rasterFunctionArguments" } })], J.prototype, "functionArguments", void 0), c([h()], J.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], J.prototype, "isGCS", void 0), J = c([x("geoscene.layers.support.rasterFunctions.CurvatureFunction")], J);
const os = J;
var Mt;
let E = Mt = class extends _ {
  constructor() {
    super(...arguments), this.bandIds = [], this.bandNames = [], this.bandWavelengths = [], this.missingBandAction = Te.bestMatch;
  }
  clone() {
    return new Mt({ bandIds: [...this.bandIds], bandNames: [...this.bandNames], missingBandAction: this.missingBandAction, method: this.method, wavelengthMatchTolerance: this.wavelengthMatchTolerance });
  }
};
c([h({ json: { write: !0 } })], E.prototype, "bandIds", void 0), c([h({ json: { write: !0 } })], E.prototype, "bandNames", void 0), c([h({ json: { write: !0 } })], E.prototype, "bandWavelengths", void 0), c([q({ 0: "name", 1: "wavelength", 2: "id" })], E.prototype, "method", void 0), c([h({ json: { write: !0 } })], E.prototype, "missingBandAction", void 0), c([h({ json: { write: !0 } })], E.prototype, "wavelengthMatchTolerance", void 0), E = Mt = c([x("geoscene.layers.support.rasterFunctions.ExtractBandFunctionArguments")], E);
const is = E;
let at = class extends B {
  constructor() {
    super(...arguments), this.functionName = "ExtractBand", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    var dt;
    const { functionArguments: t, sourceRasterInfos: e } = this, s = e[0], { method: i, bandNames: r, bandWavelengths: a, bandIds: n, missingBandAction: u } = t, l = (r == null ? void 0 : r.length) && (i === "name" || i !== "id" && !(n != null && n.length)), p = (a == null ? void 0 : a.length) && (i === "wavelength" || i !== "id" && !(n != null && n.length)), m = u === Te.fail, f = l ? this._matchBandNames(s, r) : p ? this._matchBandWavelengths(s, a, m) : this._matchBandIds(s, n, m);
    if (f == null)
      return { success: !1, supportsGPU: !1, error: `extract-band-function: Invalid ${l ? "band names" : p ? "band wavelengths" : "band ids"} for the imagery data source` };
    this.functionArguments.bandIds = f, this.functionArguments.method = "id", this.outputPixelType = this._getOutputPixelType("f32");
    const g = s.clone();
    g.pixelType = this.outputPixelType, g.bandCount = f.length;
    const { statistics: y, histograms: v } = g;
    y != null && y.length && (g.statistics = f.map((z) => y[z] || y[y.length - 1])), v != null && v.length && (g.histograms = f.map((z) => v[z] || v[v.length - 1]));
    let A = (dt = g.keyProperties) == null ? void 0 : dt.BandProperties;
    return A != null && A.length && (A = f.map((z) => z >= A.length ? A[A.length - 1] : A[z]), g.keyProperties = { ...g.keyProperties, BandProperties: A }), this.rasterInfo = g, { success: !0, supportsGPU: g.bandCount <= 3 };
  }
  _processPixels(t) {
    var r;
    const e = (r = t.pixelBlocks) == null ? void 0 : r[0];
    if (e == null)
      return null;
    const s = e.pixels.length, i = this.functionArguments.bandIds.map((a) => a >= s ? s - 1 : a);
    return e.extractBands(i);
  }
  _getWebGLParameters() {
    let t;
    if (this.isInputBandIdsSwizzled)
      t = this.swizzledBandSelection.length ? this.swizzledBandSelection : [0, 1, 2];
    else {
      t = [...this.functionArguments.bandIds], t.length === 0 ? t = [0, 1, 2] : t.length < 3 && (t[1] = t[1] ?? t[0], t[2] = t[2] ?? t[1]);
      for (let e = 0; e < 3; e++)
        t[e] = Math.min(t[e], 2);
    }
    return { bandIndexMat3: T(t) };
  }
  _getInputBandIds(t) {
    const e = t.length;
    return this.functionArguments.bandIds.map((s) => s >= e ? e - 1 : s).map((s) => t[s]);
  }
  _matchBandNames(t, e) {
    const s = t.bandInfos.map(({ name: r }) => r.toLowerCase()), i = [];
    for (let r = 0; r < e.length; r++) {
      const a = e[r].toLowerCase();
      let n = s.indexOf(a);
      if (n === -1 && a === "nearinfrared" && (n = s.findIndex((u) => u.startsWith("nearinfrared_1")), n === -1 && (n = s.findIndex((u) => u.startsWith("nearinfrared")))), n === -1)
        return null;
      i.push(n);
    }
    return i;
  }
  _matchBandIds(t, e, s) {
    const { bandCount: i } = t;
    return !(e != null && e.length) || s && e.some((r) => r < 0 || r >= i) ? null : e;
  }
  _matchBandWavelengths(t, e, s) {
    const { bandInfos: i } = t, r = [];
    for (let u = 0; u < i.length; u++) {
      const { minWavelength: l, maxWavelength: p } = i[u];
      if (!l || !p)
        return null;
      r.push({ minWavelength: l, maxWavelength: p });
    }
    const { wavelengthMatchTolerance: a } = this.functionArguments, n = [];
    for (let u = 0; u < e.length; u++) {
      const l = e[u];
      let p = !1, m = -1, f = Number.MAX_VALUE;
      for (let g = 0; g < r.length; g++) {
        const y = r[g], v = l >= y.minWavelength && l <= y.maxWavelength, A = Math.abs(l - (y.minWavelength + y.maxWavelength) / 2);
        v ? A < f && (p = !0, m = g, f = A) : !p && A < f && (m = g, f = A);
      }
      if (!p && a && f < a && (p = !0), !p && s)
        return null;
      n.push(m);
    }
    return n;
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], at.prototype, "functionName", void 0), c([h({ type: is, json: { write: !0, name: "rasterFunctionArguments" } })], at.prototype, "functionArguments", void 0), c([h()], at.prototype, "rasterArgumentNames", void 0), at = c([x("geoscene.layers.support.rasterFunctions.ExtractBandFunction")], at);
const as = at;
var Dt;
let Y = Dt = class extends _ {
  constructor() {
    super(...arguments), this.rasters = [], this.processAsMultiband = !0;
  }
  writeRasters(o, t) {
    t.rasters = o.map((e) => typeof e == "number" || typeof e == "string" ? e : e.toJSON());
  }
  clone() {
    return new Dt({ operation: this.operation, processAsMultiband: this.processAsMultiband, rasters: S(this.rasters) });
  }
};
c([h({ json: { write: !0 } })], Y.prototype, "operation", void 0), c([h({ json: { write: !0 } })], Y.prototype, "rasters", void 0), c([mt("rasters")], Y.prototype, "writeRasters", null), c([h({ json: { write: !0 } })], Y.prototype, "processAsMultiband", void 0), Y = Dt = c([x("geoscene.layers.support.rasterFunctions.LocalFunctionArguments")], Y);
const us = Y, N = /* @__PURE__ */ new Map();
function ls(o) {
  return N.get(o);
}
N.set(M.acos, [0, Math.PI]), N.set(M.asin, [-Math.PI / 2, Math.PI / 2]), N.set(M.atan, [-Math.PI / 2, Math.PI / 2]), N.set(M.cos, [-1, 1]), N.set(M.sin, [-1, 1]), N.set(k.booleanAnd, [0, 1]), N.set(k.booleanNot, [0, 1]), N.set(k.booleanOr, [0, 1]), N.set(k.booleanXOr, [0, 1]), N.set(k.equalTo, [0, 1]), N.set(k.notEqual, [0, 1]), N.set(k.greaterThan, [0, 1]), N.set(k.greaterThanEqual, [0, 1]), N.set(k.lessThan, [0, 1]), N.set(k.lessThanEqual, [0, 1]), N.set(k.isNull, [0, 1]);
const ce = [0, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 999, 999, 999, 999, 999, 999, 2, 1, 2, 999, 1, 1, 2, 1, 1, 1, 999, 999, 1, 1, 999, 1, 1, 2, 999, 999, 2, 2, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 3, 999, 3];
function cs(o, t = !1) {
  const e = o.map((n) => n.mask), s = e.filter((n) => n != null), i = o[0].pixels[0].length;
  if (s.length === 0)
    return new Uint8Array(i).fill(255);
  const r = s[0], a = new Uint8Array(r);
  if (s.length === 1)
    return a;
  if (!t) {
    for (let n = 1; n < s.length; n++) {
      const u = s[n];
      for (let l = 0; l < a.length; l++)
        a[l] && (a[l] = u[l] ? 255 : 0);
    }
    return a;
  }
  if (s.length !== e.length)
    return new Uint8Array(i).fill(255);
  for (let n = 1; n < s.length; n++) {
    const u = s[n];
    for (let l = 0; l < a.length; l++)
      a[l] === 0 && (a[l] = u[l] ? 255 : 0);
  }
  return a;
}
function ps(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] + i[n]);
  return a;
}
function hs(o, t, e) {
  const [s] = o, i = s.length, r = d.createEmptyBand("f32", i);
  return r.set(s), r;
}
function ms(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] - i[n]);
  return a;
}
function fs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] * i[n]);
  return a;
}
function ds(o, t, e) {
  const [s] = o, i = s.length, r = d.createEmptyBand(e, i);
  for (let a = 0; a < i; a++)
    t && !t[a] || (r[a] = Math.sign(s[a]) * Math.floor(Math.abs(s[a])));
  return r;
}
function je(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] / i[n]);
  return a;
}
function gs(o, t, e) {
  return je(o, t, "f32");
}
function ys(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = Math.floor(s[n] / i[n]));
  return a;
}
function bs(o, t, e, s) {
  const i = o[0], r = i.length, a = d.createEmptyBand(e, r);
  if (s === M.atanh) {
    for (let u = 0; u < r; u++)
      if (t[u]) {
        const l = i[u];
        Math.abs(l) >= 1 ? t[u] = 0 : a[u] = Math.atanh(l);
      }
    return a;
  }
  const n = s === M.asin ? Math.asin : Math.acos;
  for (let u = 0; u < r; u++)
    if (t[u]) {
      const l = i[u];
      Math.abs(l) > 1 ? t[u] = 0 : a[u] = n(l);
    }
  return a;
}
function vs(o, t, e, s) {
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s(i[n]));
  return a;
}
function xs(o, t, e, s) {
  const [i, r] = o, a = i.length, n = d.createEmptyBand(e, a);
  for (let u = 0; u < a; u++)
    t && !t[u] || (n[u] = s(i[u], r[u]));
  return n;
}
function ws(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] & i[n]);
  return a;
}
function pe(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] << i[n]);
  return a;
}
function As(o, t, e) {
  const [s] = o, i = s.length, r = d.createEmptyBand(e, i);
  for (let a = 0; a < i; a++)
    t && !t[a] || (r[a] = ~s[a]);
  return r;
}
function Ps(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] | i[n]);
  return a;
}
function $s(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] >> i[n]);
  return a;
}
function Fs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] ^ i[n]);
  return a;
}
function Is(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] && i[n] ? 1 : 0);
  return a;
}
function Ts(o, t, e) {
  const [s] = o, i = s.length, r = d.createEmptyBand(e, i);
  for (let a = 0; a < i; a++)
    t && !t[a] || (r[a] = s[a] ? 0 : 1);
  return r;
}
function Ns(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] || i[n] ? 1 : 0);
  return a;
}
function Rs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = (s[n] ? 1 : 0) ^ (i[n] ? 1 : 0));
  return a;
}
function Cs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] === i[n] ? 1 : 0);
  return a;
}
function te(o, t, e, s) {
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r), n = s === Math.E;
  for (let u = 0; u < r; u++)
    t && !t[u] || (a[u] = n ? Math.exp(i[u]) : s ** i[u]);
  return a;
}
function _s(o, t, e) {
  return te(o, t, e, 10);
}
function Bs(o, t, e) {
  return te(o, t, e, 2);
}
function ks(o, t, e) {
  return te(o, t, e, Math.E);
}
function ee(o, t, e, s) {
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (i[n] <= 0 ? t[n] = 0 : a[n] = s(i[n]));
  return a;
}
function js(o, t, e) {
  return ee(o, t, e, Math.log10);
}
function Ss(o, t, e) {
  return ee(o, t, e, Math.log2);
}
function Ms(o, t, e) {
  return ee(o, t, e, Math.log);
}
function Ds(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] > i[n] ? 1 : 0);
  return a;
}
function zs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] >= i[n] ? 1 : 0);
  return a;
}
function Es(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] < i[n] ? 1 : 0);
  return a;
}
function Gs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] <= i[n] ? 1 : 0);
  return a;
}
function Os(o, t, e) {
  const [s] = o, i = s.length, r = d.createEmptyBand(e, i);
  if (!t)
    return r;
  for (let a = 0; a < i; a++)
    r[a] = t[a] ? 0 : 1;
  return r;
}
function Vs(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] % i[n]);
  return a;
}
function Us(o, t, e) {
  const [s] = o, i = s.length, r = d.createEmptyBand(e, i);
  for (let a = 0; a < i; a++)
    t && !t[a] || (r[a] = -s[a]);
  return r;
}
function Ls(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t && !t[n] || (a[n] = s[n] === i[n] ? 0 : 1);
  return a;
}
function Ws(o, t, e) {
  const [s, i] = o, r = s.length, a = d.createEmptyBand(e, r), n = new Uint8Array(r);
  for (let u = 0; u < r; u++)
    t != null && !t[u] || s[u] !== 0 || (a[u] = i[u], n[u] = 255);
  return { band: a, mask: n };
}
function he(o, t, e) {
  const [s, i, r] = o, a = s.length, n = d.createEmptyBand(e, a);
  for (let u = 0; u < a; u++)
    t && !t[u] || (n[u] = s[u] ? i[u] : r[u]);
  return n;
}
function me(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    if (!t || t[n]) {
      let u = i[n];
      for (let l = 1; l < s; l++) {
        const p = o[l][n];
        u < p && (u = p);
      }
      a[n] = u;
    }
  return a;
}
function fe(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    if (!t || t[n]) {
      let u = i[n];
      for (let l = 1; l < s; l++) {
        const p = o[l][n];
        u > p && (u = p);
      }
      a[n] = u;
    }
  return a;
}
function de(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    if (!t || t[n]) {
      let u = i[n], l = u;
      for (let p = 1; p < s; p++) {
        const m = o[p][n];
        l < m ? l = m : u > m && (u = m);
      }
      a[n] = l - u;
    }
  return a;
}
function ge(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    if (!t || t[n]) {
      let u = 0;
      for (let l = 0; l < s; l++)
        u += o[l][n];
      a[n] = u / s;
    }
  return a;
}
function ye(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    if (!t || t[n])
      for (let u = 0; u < s; u++) {
        const l = o[u];
        a[n] += l[n];
      }
  return a;
}
function be(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    if (!t || t[n]) {
      const u = new Float32Array(s);
      let l = 0;
      for (let m = 0; m < s; m++) {
        const f = o[m];
        l += f[n], u[m] = f[n];
      }
      l /= s;
      let p = 0;
      for (let m = 0; m < s; m++)
        p += (u[m] - l) ** 2;
      a[n] = Math.sqrt(p / s);
    }
  return a;
}
function ve(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const i = Math.floor(s / 2), [r] = o, a = r.length, n = d.createEmptyBand(e, a), u = new Float32Array(s), l = s % 2 == 1;
  for (let p = 0; p < a; p++)
    if (!t || t[p]) {
      for (let m = 0; m < s; m++)
        u[m] = o[m][p];
      u.sort(), n[p] = l ? u[i] : (u[i] + u[i - 1]) / 2;
    }
  return n;
}
function Se(o, t, e) {
  const [s, i] = o;
  if (i == null)
    return s;
  const r = s.length, a = d.createEmptyBand(e, r);
  for (let n = 0; n < r; n++)
    t[n] && (s[n] === i[n] ? a[n] = s[n] : t[n] = 0);
  return a;
}
function xe(o, t, e) {
  const s = o.length;
  if (s <= 2)
    return Se(o, t, e);
  const i = o[0].length, r = d.createEmptyBand(e, i), a = /* @__PURE__ */ new Map();
  for (let n = 0; n < i; n++)
    if (!t || t[n]) {
      let u;
      a.clear();
      for (let m = 0; m < s; m++)
        u = o[m][n], a.set(u, a.has(u) ? a.get(u) + 1 : 1);
      let l = 0, p = 0;
      for (const m of a.keys())
        l = a.get(m), l > p && (p = l, u = m);
      r[n] = u;
    }
  return r;
}
function we(o, t, e) {
  const s = o.length;
  if (s <= 2)
    return Se(o, t, e);
  const i = o[0].length, r = d.createEmptyBand(e, i), a = /* @__PURE__ */ new Map();
  for (let n = 0; n < i; n++)
    if (!t || t[n]) {
      let u;
      a.clear();
      for (let m = 0; m < s; m++)
        u = o[m][n], a.set(u, a.has(u) ? a.get(u) + 1 : 1);
      let l = 0, p = o.length;
      for (const m of a.keys())
        l = a.get(m), l < p && (p = l, u = m);
      r[n] = u;
    }
  return r;
}
function Ae(o, t, e) {
  const s = o.length;
  if (s < 2)
    return o[0];
  const [i] = o, r = i.length, a = d.createEmptyBand(e, r), n = /* @__PURE__ */ new Set();
  for (let u = 0; u < r; u++)
    if (!t || t[u]) {
      let l;
      n.clear();
      for (let p = 0; p < s; p++)
        l = o[p][u], n.add(l);
      a[u] = n.size;
    }
  return a;
}
const I = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
function qs() {
  I.size || (I.set(4, Math.sqrt), I.set(6, Math.acos), I.set(7, Math.asin), I.set(8, Math.atan), I.set(9, Math.atanh), I.set(10, Math.abs), I.set(21, Math.cos), I.set(22, Math.cosh), I.set(48, Math.floor), I.set(49, Math.ceil), I.set(51, Math.sin), I.set(52, Math.sinh), I.set(56, Math.tan), I.set(57, Math.tanh), I.set(59, Math.acosh), I.set(60, Math.asinh), I.set(65, Math.floor), $t.set(5, Math.pow), $t.set(61, Math.atan2), b.set(1, ps), b.set(2, ms), b.set(3, fs), b.set(11, ws), b.set(12, pe), b.set(12, pe), b.set(13, As), b.set(14, Ps), b.set(15, $s), b.set(16, Fs), b.set(17, Is), b.set(18, Ts), b.set(19, Ns), b.set(20, Rs), b.set(23, je), b.set(24, Cs), b.set(25, ks), b.set(26, _s), b.set(27, Bs), b.set(28, Ds), b.set(29, zs), b.set(30, ds), b.set(31, Os), b.set(32, hs), b.set(33, Es), b.set(34, Gs), b.set(35, Ms), b.set(36, js), b.set(37, Ss), b.set(44, Vs), b.set(45, Us), b.set(46, Ls), b.set(64, gs), b.set(65, ys), b.set(76, he), b.set(78, he), $.set(38, xe), $.set(39, me), $.set(40, ge), $.set(41, ve), $.set(42, fe), $.set(43, we), $.set(47, de), $.set(54, be), $.set(55, ye), $.set(58, Ae), $.set(66, xe), $.set(67, me), $.set(68, ge), $.set(69, ve), $.set(70, fe), $.set(71, we), $.set(72, de), $.set(73, be), $.set(74, ye), $.set(75, Ae));
}
function Xs(o, t, e, s) {
  let [i, r] = It(e);
  const a = e.startsWith("u") || e.startsWith("s");
  a && (i -= 1e-5, r += 1e-5);
  for (let n = 0; n < t.length; n++)
    if (t[n]) {
      const u = o[n];
      isNaN(u) || u < i || u > r ? t[n] = 0 : s[n] = a ? Math.round(u) : u;
    }
}
function Hs(o, t, e = {}) {
  qs();
  let s = cs(o, t >= 66 && t <= 75);
  const { outputPixelType: i = "f32" } = e, r = !$.has(t) || e.processAsMultiband, a = r ? o[0].pixels.length : 1, n = [];
  for (let l = 0; l < a; l++) {
    const p = $.has(t) && !r ? o.flatMap((g) => g.pixels) : o.map((g) => g.pixels[l]);
    let m, f = !0;
    if (t === _e.setNull) {
      const g = Ws(p, s, i);
      m = g.band, s = g.mask, f = !1;
    } else
      b.has(t) ? m = b.get(t)(p, s, "f64") : I.has(t) ? m = t === M.asin || t === M.acos || t === M.atanh ? bs(p, s, "f64", t) : vs(p, s, "f64", I.get(t)) : $t.has(t) ? m = xs(p, s, "f64", $t.get(t)) : $.has(t) ? m = $.get(t)(p, s, "f64") : (m = p[0], f = !1);
    if (f && t !== k.isNull && !N.has(t)) {
      const g = d.createEmptyBand(i, m.length);
      s || (s = new Uint8Array(m.length).fill(255)), Xs(m, s, i, g), m = g;
    }
    n.push(m);
  }
  const u = o[0];
  return new d({ width: u.width, height: u.height, pixelType: i, mask: t === k.isNull ? null : s, pixels: n });
}
let ut = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Local", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0], { bandCount: s } = e, { processAsMultiband: i } = this.functionArguments;
    if (t.some((p) => p.bandCount !== s))
      return { success: !1, supportsGPU: !1, error: "local-function: input rasters do not have same band count" };
    const { operation: r, rasters: a } = this.functionArguments, n = ce[r];
    if (!(n === 999 || a.length === n || a.length <= 1 && n === 1))
      return { success: !1, supportsGPU: !1, error: `local-function: the length of functionArguments.rasters does not match operation's requirement: ${n}` };
    this.outputPixelType = this._getOutputPixelType("f32");
    const u = e.clone();
    u.pixelType = this.outputPixelType, u.statistics = null, u.histograms = null, u.colormap = null, u.attributeTable = null, u.bandCount = n !== 999 || i ? s : 1;
    const l = ls(r);
    if (l) {
      u.statistics = [];
      for (let p = 0; p < u.bandCount; p++)
        u.statistics[p] = { min: l[0], max: l[1], avg: (l[0] + l[1]) / 2, stddev: (l[0] + l[1]) / 10 };
    }
    return this.rasterInfo = u, { success: !0, supportsGPU: u.bandCount === 1 && n <= 3 && (r < 11 || r > 16) };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e == null || e.some((s) => s == null) ? null : Hs(e, this.functionArguments.operation, { processAsMultiband: this.functionArguments.processAsMultiband, outputPixelType: this.outputPixelType ?? void 0 });
  }
  _getWebGLParameters() {
    var u;
    const { operation: t } = this.functionArguments, e = ce[t], s = ((u = Object.keys(ae).find((l) => ae[l] === t)) == null ? void 0 : u.toLowerCase()) ?? "undefined", i = this.outputPixelType ?? "f32";
    let [r, a] = It(i);
    const n = i.startsWith("u") || i.startsWith("s");
    return n && (r -= 1e-4, a += 1e-4), { imageCount: e, operationName: s, domainRange: [r, a], isOutputRounded: n };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], ut.prototype, "functionName", void 0), c([h({ type: us, json: { write: !0, name: "rasterFunctionArguments" } })], ut.prototype, "functionArguments", void 0), c([h()], ut.prototype, "rasterArgumentNames", void 0), ut = c([x("geoscene.layers.support.rasterFunctions.LocalFunction")], ut);
const Js = ut;
var zt;
let K = zt = class extends _ {
  constructor() {
    super(...arguments), this.includedRanges = null, this.noDataValues = null, this.noDataInterpretation = Ne.matchAny;
  }
  get normalizedNoDataValues() {
    const { noDataValues: o } = this;
    if (!(o != null && o.length))
      return null;
    let t = !1;
    const e = o.map((s) => {
      if (typeof s == "number")
        return t = !0, [s];
      if (typeof s == "string") {
        const i = s.trim().split(" ").filter((r) => r.trim() !== "").map((r) => Number(r));
        return t = t || i.length > 0, i.length === 0 ? null : i;
      }
      return null;
    });
    return t ? e : null;
  }
  clone() {
    var o, t;
    return new zt({ includedRanges: ((o = this.includedRanges) == null ? void 0 : o.slice()) ?? [], noDataValues: ((t = this.noDataValues) == null ? void 0 : t.slice()) ?? [], noDataInterpretation: this.noDataInterpretation });
  }
};
c([h({ json: { write: !0 } })], K.prototype, "includedRanges", void 0), c([h({ json: { write: !0 } })], K.prototype, "noDataValues", void 0), c([h()], K.prototype, "normalizedNoDataValues", null), c([h({ json: { write: !0 } })], K.prototype, "noDataInterpretation", void 0), K = zt = c([x("geoscene.layers.support.rasterFunctions.MaskFunctionArguments")], K);
const Ys = K;
let Z = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Mask", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(), { pixelType: e } = t;
    this.outputPixelType = this._getOutputPixelType(e), t.pixelType = this.outputPixelType, this.rasterInfo = t;
    const { includedRanges: s, normalizedNoDataValues: i } = this.functionArguments;
    if (!(s != null && s.length) && !(i != null && i.length))
      return { success: !1, supportsGPU: !1, error: "missing includedRanges or noDataValues argument" };
    let r = [];
    for (let n = 0; n < t.bandCount; n++) {
      const u = qe(e, s == null ? void 0 : s.slice(2 * n, 2 * n + 2), i == null ? void 0 : i[n]);
      if (u == null) {
        r = null;
        break;
      }
      r.push(u);
    }
    this.lookups = r;
    const a = i != null && i.every((n) => {
      var u;
      return (n == null ? void 0 : n.length) === ((u = i[0]) == null ? void 0 : u.length);
    });
    return { success: !0, supportsGPU: (!s || s.length <= 2 * G) && (!i || a && i[0].length <= G) };
  }
  _processPixels(t) {
    var l;
    const e = (l = t.pixelBlocks) == null ? void 0 : l[0];
    if (e == null)
      return null;
    const { outputPixelType: s, lookups: i } = this, { includedRanges: r, noDataInterpretation: a, normalizedNoDataValues: n } = this.functionArguments, u = a === Ne.matchAll;
    return Xe(e, { includedRanges: r, noDataValues: n, outputPixelType: s, matchAll: u, lookups: i });
  }
  _getWebGLParameters() {
    var r;
    const { includedRanges: t, normalizedNoDataValues: e } = this.functionArguments, s = new Float32Array(G);
    s.fill(pt), (r = e == null ? void 0 : e[0]) != null && r.length && s.set(e[0]);
    const i = new Float32Array(G);
    for (let a = 0; a < i.length; a += 2)
      i[a] = (t == null ? void 0 : t[a]) ?? -pt, i[a + 1] = (t == null ? void 0 : t[a + 1]) ?? pt;
    return t && t.length && i.set(t), { bandCount: this.sourceRasterInfos[0].bandCount, noDataValues: s, includedRanges: i };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], Z.prototype, "functionName", void 0), c([h({ type: Ys, json: { write: !0, name: "rasterFunctionArguments" } })], Z.prototype, "functionArguments", void 0), c([h()], Z.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], Z.prototype, "lookups", void 0), Z = c([x("geoscene.layers.support.rasterFunctions.MaskFunction")], Z);
const Ks = Z;
var Et;
let lt = Et = class extends _ {
  constructor() {
    super(...arguments), this.visibleBandID = 0, this.infraredBandID = 1, this.scientificOutput = !1;
  }
  clone() {
    const { visibleBandID: o, infraredBandID: t, scientificOutput: e } = this;
    return new Et({ visibleBandID: o, infraredBandID: t, scientificOutput: e });
  }
};
c([h({ json: { write: !0 } })], lt.prototype, "visibleBandID", void 0), c([h({ json: { write: !0 } })], lt.prototype, "infraredBandID", void 0), c([h({ json: { write: !0 } })], lt.prototype, "scientificOutput", void 0), lt = Et = c([x("geoscene.layers.support.rasterFunctions.NDVIFunctionArguments")], lt);
const Zs = lt;
let ct = class extends B {
  constructor() {
    super(...arguments), this.functionName = "NDVI", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { scientificOutput: t, visibleBandID: e, infraredBandID: s } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t ? "f32" : "u8");
    const i = this.sourceRasterInfos[0], r = Math.max(e, s);
    if (i.bandCount < 2 || r >= i.bandCount)
      return { success: !1, supportsGPU: !1, error: "ndvi-function: source raster has insufficient amount of raster bands" };
    const a = i.clone();
    a.pixelType = this.outputPixelType, a.colormap = null, a.histograms = null, a.bandCount = 1, a.keyProperties = { ...a.keyProperties, BandProperties: void 0 };
    const [n, u, l, p] = t ? [-1, 1, 0, 0.1] : [0, 200, 100, 10];
    return a.statistics = [{ min: n, max: u, avg: l, stddev: p }], this.rasterInfo = a, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var a;
    const e = (a = t.pixelBlocks) == null ? void 0 : a[0];
    if (e == null)
      return null;
    const { visibleBandID: s, infraredBandID: i, scientificOutput: r } = this.functionArguments;
    return bn(e, s, i, !r);
  }
  _getWebGLParameters() {
    const { visibleBandID: t, infraredBandID: e, scientificOutput: s } = this.functionArguments, i = this.isInputBandIdsSwizzled ? [0, 1, 2] : [e, t, 0];
    return { bandIndexMat3: T(i), scaled: !s };
  }
  _getInputBandIds(t) {
    const { visibleBandID: e, infraredBandID: s } = this.functionArguments;
    return [s, e, 0].map((i) => t[i]);
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], ct.prototype, "functionName", void 0), c([h({ type: Zs, json: { write: !0, name: "rasterFunctionArguments" } })], ct.prototype, "functionArguments", void 0), c([h()], ct.prototype, "rasterArgumentNames", void 0), ct = c([x("geoscene.layers.support.rasterFunctions.NDVIFunction")], ct);
const Qs = ct;
var Gt;
let V = Gt = class extends _ {
  constructor() {
    super(...arguments), this.inputRanges = null, this.outputValues = null, this.noDataRanges = null, this.allowUnmatched = !1, this.isLastInputRangeInclusive = !1;
  }
  clone() {
    return new Gt({ inputRanges: [...this.inputRanges], outputValues: [...this.outputValues], noDataRanges: [...this.noDataRanges], allowUnmatched: this.allowUnmatched, isLastInputRangeInclusive: this.isLastInputRangeInclusive });
  }
};
c([h({ json: { write: !0 } })], V.prototype, "inputRanges", void 0), c([h({ json: { write: !0 } })], V.prototype, "outputValues", void 0), c([h({ json: { write: !0 } })], V.prototype, "noDataRanges", void 0), c([h({ json: { write: !0 } })], V.prototype, "allowUnmatched", void 0), c([h({ json: { write: !0 } })], V.prototype, "isLastInputRangeInclusive", void 0), V = Gt = c([x("geoscene.layers.support.rasterFunctions.RemapFunctionArguments")], V);
const tr = V;
let Q = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Remap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(), { pixelType: e } = t;
    this.outputPixelType = this._getOutputPixelType(e), t.pixelType = this.outputPixelType, t.colormap = null, t.histograms = null, t.bandCount = 1, t.attributeTable = null;
    const { statistics: s } = t, { allowUnmatched: i, outputValues: r, inputRanges: a, noDataRanges: n, isLastInputRangeInclusive: u } = this.functionArguments;
    if (s != null && s.length && (r != null && r.length))
      if (i) {
        const l = Math.min.apply(null, [...r, s[0].min]), p = Math.max.apply(null, [...r, s[0].max]);
        t.statistics = [{ ...s[0], min: l, max: p }];
      } else {
        let l = r[0], p = l;
        for (let m = 0; m < r.length; m++)
          l = l > r[m] ? r[m] : l, p = p > r[m] ? p : r[m];
        t.statistics = [{ ...s[0], min: l, max: p }];
      }
    return this.rasterInfo = t, this.lookup = i ? null : He({ srcPixelType: e, inputRanges: a, outputValues: r, noDataRanges: n, allowUnmatched: i, isLastInputRangeInclusive: u, outputPixelType: this.outputPixelType }), { success: !0, supportsGPU: (!r || r.length <= G) && (!n || n.length <= G) };
  }
  _processPixels(t) {
    var p;
    const e = (p = t.pixelBlocks) == null ? void 0 : p[0];
    if (e == null)
      return null;
    const { lookup: s, outputPixelType: i } = this;
    if (s) {
      const m = Re(e, { lut: [s.lut], offset: s.offset, outputPixelType: i });
      return m != null && s.mask && (m.mask = Je(e.pixels[0], e.mask, s.mask, s.offset, "u8")), m;
    }
    const { inputRanges: r, outputValues: a, noDataRanges: n, allowUnmatched: u, isLastInputRangeInclusive: l } = this.functionArguments;
    return Ye(e, { inputRanges: r, outputValues: a, noDataRanges: n, outputPixelType: i, allowUnmatched: u, isLastInputRangeInclusive: l });
  }
  _getWebGLParameters() {
    const { allowUnmatched: t, noDataRanges: e, isLastInputRangeInclusive: s } = this.functionArguments, i = new Float32Array(3 * G), r = 1e-5, a = this.functionArguments.inputRanges ?? [], n = this.functionArguments.outputValues ?? [], u = n.length;
    for (let p = 0; p < G; p++)
      i[3 * p] = a[2 * p] ?? pt - 1, i[3 * p + 1] = a[2 * p + 1] ?? pt, i[3 * p + 2] = n[p] ?? 0, p < u && (p > 0 && (i[3 * p] -= r), (p < u - 1 || !s) && (i[3 * p + 1] -= r));
    const l = new Float32Array(2 * G);
    return l.fill(pt), e != null && e.length && l.set(e), { allowUnmatched: t, rangeMaps: i, noDataRanges: l, clampRange: It(this.outputPixelType) };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], Q.prototype, "functionName", void 0), c([h({ type: tr, json: { write: !0, name: "rasterFunctionArguments" } })], Q.prototype, "functionArguments", void 0), c([h()], Q.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], Q.prototype, "lookup", void 0), Q = c([x("geoscene.layers.support.rasterFunctions.RemapFunction")], Q);
const er = Q;
var Ot;
const nr = new Ft({ 1: "degree", 2: "percent-rise", 3: "adjusted" }, { useNumericKeys: !0 });
let U = Ot = class extends _ {
  constructor() {
    super(...arguments), this.slopeType = "degree", this.zFactor = 1, this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.removeEdgeEffect = !1;
  }
  clone() {
    return new Ot({ slopeType: this.slopeType, zFactor: this.zFactor, pixelSizePower: this.pixelSizePower, pixelSizeFactor: this.pixelSizeFactor, removeEdgeEffect: this.removeEdgeEffect, raster: this.raster });
  }
};
c([q(nr)], U.prototype, "slopeType", void 0), c([h({ type: Number, json: { write: !0 } })], U.prototype, "zFactor", void 0), c([h({ type: Number, json: { name: "psPower", write: !0 } })], U.prototype, "pixelSizePower", void 0), c([h({ type: Number, json: { name: "psZFactor", write: !0 } })], U.prototype, "pixelSizeFactor", void 0), c([h({ type: Boolean, json: { write: !0 } })], U.prototype, "removeEdgeEffect", void 0), U = Ot = c([x("geoscene.layers.support.rasterFunctions.SlopeFunctionArguments")], U);
const sr = U;
let tt = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Slope", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    var e;
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return t.pixelType = this.outputPixelType, t.statistics = this.functionArguments.slopeType !== "percent-rise" ? [{ min: 0, max: 90, avg: 1, stddev: 1 }] : null, t.histograms = null, t.colormap = null, t.attributeTable = null, t.bandCount = 1, this.rasterInfo = t, this.isGCS = ((e = t.spatialReference) == null ? void 0 : e.isGeographic) ?? !1, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var f;
    const e = (f = t.pixelBlocks) == null ? void 0 : f[0];
    if (e == null)
      return null;
    const { zFactor: s, slopeType: i, pixelSizePower: r, pixelSizeFactor: a } = this.functionArguments, { isGCS: n } = this, { extent: u, primaryPixelSizes: l } = t, p = l == null ? void 0 : l[0], m = p ?? (u ? { x: u.width / e.width, y: u.height / e.height } : { x: 1, y: 1 });
    return nn(e, { zFactor: s, slopeType: i, pixelSizePower: r, pixelSizeFactor: a, isGCS: n, resolution: m });
  }
  _getWebGLParameters() {
    const { zFactor: t, slopeType: e, pixelSizeFactor: s, pixelSizePower: i } = this.functionArguments;
    return { zFactor: this.isGCS && t >= 1 ? t * Nt : t, slopeType: e, pixelSizeFactor: s ?? 0, pixelSizePower: i ?? 0 };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], tt.prototype, "functionName", void 0), c([h({ type: sr, json: { write: !0, name: "rasterFunctionArguments" } })], tt.prototype, "functionArguments", void 0), c([h()], tt.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], tt.prototype, "isGCS", void 0), tt = c([x("geoscene.layers.support.rasterFunctions.SlopeFunction")], tt);
const rr = tt;
var Vt;
let et = Vt = class extends _ {
  constructor() {
    super(...arguments), this.statistics = null, this.histograms = null;
  }
  readStatistics(o, t) {
    if (!(o != null && o.length))
      return null;
    const e = [];
    return o.forEach((s) => {
      const i = { min: s.min, max: s.max, avg: s.avg ?? s.mean, stddev: s.stddev ?? s.standardDeviation };
      e.push(i);
    }), e;
  }
  writeStatistics(o, t, e) {
    if (!(o != null && o.length))
      return;
    const s = [];
    o.forEach((i) => {
      const r = { ...i, mean: i.avg, standardDeviation: i.stddev };
      delete r.avg, delete r.stddev, s.push(r);
    }), t[e] = s;
  }
  clone() {
    return new Vt({ statistics: S(this.statistics), histograms: S(this.histograms) });
  }
};
c([h({ json: { write: !0 } })], et.prototype, "statistics", void 0), c([ht("statistics")], et.prototype, "readStatistics", null), c([mt("statistics")], et.prototype, "writeStatistics", null), c([h({ json: { write: !0 } })], et.prototype, "histograms", void 0), et = Vt = c([x("geoscene.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments")], et);
const or = et;
let L = class extends B {
  constructor() {
    super(...arguments), this.functionName = "StatisticsHistogram", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const e = t.clone(), { statistics: s, histograms: i } = this.functionArguments;
    return i && (e.histograms = i), s && (e.statistics = s), this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var e;
    return (e = t.pixelBlocks) == null ? void 0 : e[0];
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], L.prototype, "functionName", void 0), c([h({ type: or, json: { write: !0, name: "rasterFunctionArguments" } })], L.prototype, "functionArguments", void 0), c([h()], L.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], L.prototype, "indexedColormap", void 0), c([h()], L.prototype, "isNoopProcess", void 0), L = c([x("geoscene.layers.support.rasterFunctions.StatisticsHistogramFunction")], L);
const ir = L;
var Ut;
const ar = new Ft({ 0: "none", 3: "standard-deviation", 4: "histogram-equalization", 5: "min-max", 6: "percent-clip", 9: "sigmoid" }, { useNumericKeys: !0 });
let R = Ut = class extends _ {
  constructor() {
    super(...arguments), this.computeGamma = !1, this.dynamicRangeAdjustment = !1, this.gamma = [], this.histograms = null, this.statistics = null, this.stretchType = "none", this.useGamma = !1;
  }
  writeStatistics(o, t, e) {
    o != null && o.length && (Array.isArray(o[0]) || (o = o.map((s) => [s.min, s.max, s.avg, s.stddev])), t[e] = o);
  }
  clone() {
    return new Ut({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: S(this.statistics), gamma: S(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, histograms: S(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment, raster: this.raster });
  }
};
c([h({ type: Boolean, json: { write: !0 } })], R.prototype, "computeGamma", void 0), c([h({ type: Boolean, json: { name: "dra", write: !0 } })], R.prototype, "dynamicRangeAdjustment", void 0), c([h({ type: [Number], json: { write: !0 } })], R.prototype, "gamma", void 0), c([h()], R.prototype, "histograms", void 0), c([h({ type: Number, json: { write: !0 } })], R.prototype, "maxPercent", void 0), c([h({ type: Number, json: { write: !0 } })], R.prototype, "minPercent", void 0), c([h({ type: Number, json: { write: !0 } })], R.prototype, "numberOfStandardDeviations", void 0), c([h({ type: Number, json: { name: "max", write: !0 } })], R.prototype, "outputMax", void 0), c([h({ type: Number, json: { name: "min", write: !0 } })], R.prototype, "outputMin", void 0), c([h({ type: Number, json: { write: !0 } })], R.prototype, "sigmoidStrengthLevel", void 0), c([h({ json: { type: [[Number]], write: !0 } })], R.prototype, "statistics", void 0), c([mt("statistics")], R.prototype, "writeStatistics", null), c([q(ar)], R.prototype, "stretchType", void 0), c([h({ type: Boolean, json: { write: !0 } })], R.prototype, "useGamma", void 0), R = Ut = c([x("geoscene.layers.support.rasterFunctions.StretchFunctionArguments")], R);
const ur = R;
let W = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Stretch", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null, this.cutOffs = null;
  }
  _bindSourceRasters() {
    this.lookup = null, this.cutOffs = null;
    const t = this.sourceRasterInfos[0], { pixelType: e } = t, { functionArguments: s } = this, { dynamicRangeAdjustment: i, gamma: r, useGamma: a } = s;
    if (!i && ["u8", "u16", "s8", "s16"].includes(e)) {
      const u = Tt(s.toJSON(), { rasterInfo: t }), l = this._isOutputRoundingNeeded() ? "round" : "float";
      this.lookup = sn({ pixelType: e, ...u, gamma: a ? r : null, rounding: l }), this.cutOffs = u;
    } else
      i || (this.cutOffs = Tt(s.toJSON(), { rasterInfo: t }));
    this.outputPixelType = this._getOutputPixelType(e);
    const n = t.clone();
    return n.pixelType = this.outputPixelType, n.statistics = null, n.histograms = null, n.colormap = null, n.attributeTable = null, this.outputPixelType === "u8" && (n.keyProperties.DataType = "processed"), this.rasterInfo = n, { success: !0, supportsGPU: !i };
  }
  _processPixels(t) {
    var n;
    const e = (n = t.pixelBlocks) == null ? void 0 : n[0];
    if (e == null)
      return e;
    const { lookup: s } = this;
    if (s)
      return Re(e, { ...s, outputPixelType: this.rasterInfo.pixelType });
    const { functionArguments: i } = this, r = this.cutOffs || Tt(i.toJSON(), { rasterInfo: this.sourceRasterInfos[0], pixelBlock: e }), a = i.useGamma ? i.gamma : null;
    return rn(e, { ...r, gamma: a, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const { outputMin: t = 0, outputMax: e = 255, gamma: s, useGamma: i } = this.functionArguments, r = this.rasterInfo.bandCount >= 2 ? 3 : 1, a = i && s && s.length ? on(r, s) : [1, 1, 1], { minCutOff: n, maxCutOff: u } = this.cutOffs ?? { minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255] };
    n.length === 1 && (n[1] = n[2] = n[0], u[1] = u[2] = u[0]);
    const l = new Float32Array(r);
    let p;
    for (p = 0; p < r; p++)
      l[p] = (e - t) / (u[p] - n[p]);
    const m = this._isOutputRoundingNeeded();
    return { bandCount: r, outMin: t, outMax: e, minCutOff: n, maxCutOff: u, factor: l, useGamma: i, gamma: i && s ? s : [1, 1, 1], gammaCorrection: i && a ? a : [1, 1, 1], stretchType: this.functionArguments.stretchType, isOutputRounded: m, type: "stretch" };
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], W.prototype, "functionName", void 0), c([h({ type: ur, json: { write: !0, name: "rasterFunctionArguments" } })], W.prototype, "functionArguments", void 0), c([h()], W.prototype, "rasterArgumentNames", void 0), c([h({ json: { write: !0 } })], W.prototype, "lookup", void 0), c([h({ json: { write: !0 } })], W.prototype, "cutOffs", void 0), W = c([x("geoscene.layers.support.rasterFunctions.StretchFunction")], W);
const lr = W;
var Lt;
let At = Lt = class extends _ {
  constructor() {
    super(...arguments), this.attributeTableAsRecordSet = null;
  }
  clone() {
    return new Lt({ attributeTableAsRecordSet: S(this.attributeTableAsRecordSet) });
  }
};
c([h({ json: { write: !0 } })], At.prototype, "attributeTableAsRecordSet", void 0), At = Lt = c([x("geoscene.layers.support.rasterFunctions.TableFunctionArguments")], At);
const cr = At;
let nt = class extends B {
  constructor() {
    super(...arguments), this.functionName = "Table", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    if (t.bandCount > 1 || t.pixelType.startsWith("f"))
      return { success: !1, supportsGPU: !1, error: "table-function: Source data must be single band and integer pixel type." };
    const { attributeTableAsRecordSet: e } = this.functionArguments;
    if (!e)
      return { success: !1, supportsGPU: !1, error: "table-function: Missing attributeTableAsRecordSet argument." };
    this.outputPixelType = this._getOutputPixelType(t.pixelType);
    const s = t.clone();
    return s.pixelType = this.outputPixelType, s.bandCount = 1, s.dataType !== "thematic" && (s.keyProperties = s.keyProperties ? { ...s.keyProperties, DataType: "thematic" } : { DataType: "thematic" }), this.rasterInfo = s, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    var e;
    return (e = t.pixelBlocks) == null ? void 0 : e[0];
  }
};
c([h({ json: { write: !0, name: "rasterFunction" } })], nt.prototype, "functionName", void 0), c([h({ type: cr, json: { write: !0, name: "rasterFunctionArguments" } })], nt.prototype, "functionArguments", void 0), c([h()], nt.prototype, "rasterArgumentNames", void 0), c([h()], nt.prototype, "isNoopProcess", void 0), nt = c([x("geoscene.layers.support.rasterFunctions.TableFunction")], nt);
const pr = nt, C = /* @__PURE__ */ new Map();
function hr(o, t) {
  const { rasterFunctionArguments: e } = o;
  e && (e.rasters || [e.raster]).forEach((s) => {
    s && typeof s != "number" && (typeof s == "string" ? s.startsWith("http") && (t.includes(s) || t.push(s)) : "rasterFunctionArguments" in s && hr(s, t));
  });
}
function Lr(o, t) {
  if (t = t ?? {}, "function" in (o = S(o)) && "arguments" in o && o.arguments) {
    const e = ze(o, /* @__PURE__ */ new Map(), t);
    if (Xt(e), !e.renderingRule)
      throw new ft("raster-function-helper", "Unsupported raster function json.");
    o = e.renderingRule;
  }
  if ("rasterFunction" in o)
    return Me(o = Wt(o), t);
  throw new ft("raster-function-helper", "unsupported raster function json.");
}
function mr(o, t) {
  return t[0] === "rasters" && Array.isArray(o.rasters) ? o.rasters : t.map((e) => o[e]);
}
function Pe(o) {
  return !!(o && typeof o == "object" && o.rasterFunction && o.rasterFunctionArguments);
}
function Wt(o) {
  var i;
  const { rasterFunction: t, rasterFunctionArguments: e } = o, s = {};
  for (const r in e) {
    let a = e[r];
    const n = r.toLowerCase();
    if (n === "rasters" && Array.isArray(a))
      s.rasters = a.map((u) => Pe(u) ? Wt(u) : u);
    else
      switch (Pe(a) && (a = Wt(a)), n) {
        case "dra":
          s.dra = a;
          break;
        case "pspower":
          s.psPower = a;
          break;
        case "pszfactor":
          s.psZFactor = a;
          break;
        case "bandids":
          s.bandIds = a;
          break;
        default:
          s[r[0].toLowerCase() + r.slice(1)] = a;
      }
  }
  return t !== "Local" || (i = s.rasters) != null && i.length || (s.rasters = ["$$"]), { ...o, rasterFunctionArguments: s };
}
function Me(o, t) {
  var f, g;
  const { rasterFunction: e, rasterFunctionArguments: s } = o, i = (f = o.outputPixelType) == null ? void 0 : f.toLowerCase();
  if (e == null || !C.has(e))
    throw new ft("raster-function-helper", `unsupported raster function: ${e}`);
  const r = C.get(e), a = (typeof r.ctor == "function" ? r.ctor : r.ctor.default).fromJSON({ ...o, outputPixelType: i }), { rasterArgumentNames: n } = a, u = [], l = mr(s, n), p = n[0] === "rasters", m = [];
  for (let y = 0; y < l.length; y++) {
    const v = l[y];
    let A;
    v == null || typeof v == "string" && v.startsWith("$") ? u.push(t == null ? void 0 : t.raster) : typeof v == "string" ? t[v] && u.push(t[v]) : typeof v != "number" && "rasterFunction" in v && (A = Me(v, t), p || (a.functionArguments[n[y]] = A), u.push(A)), p && m.push(A ?? v);
  }
  if (p && (a.functionArguments.rasters = m), t) {
    a.sourceRasters = u;
    const y = (g = t.raster) == null ? void 0 : g.url;
    y && (a.mainPrimaryRasterId = y);
  }
  return a;
}
function De(o, t) {
  if (o && t)
    for (const e in o) {
      const s = o[e];
      s && typeof s == "object" && "type" in s && (s.type === "RasterFunctionTemplate" ? De(s.arguments, t) : s.type === "RasterFunctionVariable" && t[s.name] != null && (s.value = t[s.name]));
    }
}
function qt(o, t) {
  var i;
  if (!o || typeof o != "object")
    return o;
  const { value: e } = o;
  if (!e || typeof e != "object")
    return o.isDataset ? "$$" : e;
  if (Array.isArray(e))
    return e.length === 0 ? [] : e.map((r) => typeof r == "object" && r.type === "RasterFunctionVariable" ? qt(r, t) : r);
  if ("value" in e && ["number", "string", "boolean"].includes(typeof e.value))
    return e.value;
  if (o.isDataset && e.type !== "Scalar")
    return "$$";
  if (!("type" in e))
    return e;
  let s = e;
  switch (e.type) {
    case "Scalar":
      s = e.value;
      break;
    case "AlgorithmicColorRamp":
      s = $e(e);
      break;
    case "MultiPartColorRamp":
      s = { type: "multipart", colorRamps: e.ArrayOfColorRamp.map($e) };
      break;
    case "ArgumentArray":
      if ((i = e.elements) != null && i.length && e.elements[0].type !== "RasterStatistics") {
        const r = [];
        for (let a = 0; a < e.elements.length; a++) {
          const n = e.elements[a], { type: u } = n;
          if (u)
            if (u === "RasterFunctionTemplate") {
              const { renderingRule: l } = ze(n, t);
              r.push(l), n._object_id != null && t.set(n._object_id, l);
            } else {
              if (u !== "RasterFunctionVariable")
                throw new ft("raster-function-helper", "unsupported raster function json.");
              {
                const l = qt(n, t);
                r.push(l), n._object_id != null && t.set(n._object_id, l);
              }
            }
          else
            r.push(n);
        }
        s = r;
      } else
        s = e.elements;
  }
  return e._object_id != null && t.set(e._object_id, s), s;
}
function $e(o) {
  const t = o.algorithm ?? "esriHSVAlgorithm";
  let { FromColor: e, ToColor: s } = o;
  if (!Array.isArray(e)) {
    const { r: i, g: r, b: a } = se({ h: e.Hue, s: e.Saturation, v: e.Value });
    e = [i, r, a, e.AlphaValue];
  }
  if (!Array.isArray(s)) {
    const { r: i, g: r, b: a } = se({ h: s.Hue, s: s.Saturation, v: s.Value });
    s = [i, r, a, s.AlphaValue];
  }
  return { type: "algorithmic", algorithm: t, fromColor: e, toColor: s };
}
function ze(o, t, e) {
  e && De(o, e);
  const s = { renderingRule: {}, templates: t };
  return Ee(o, s), s;
}
function Ee(o, t) {
  if (!o || !t.renderingRule)
    return;
  const { renderingRule: e, templates: s } = t, { function: i, arguments: r, _object_id: a } = o;
  if (!i || !r)
    return;
  a != null && s.set(a, e), e.rasterFunction = i.type.replace("Function", ""), e.outputPixelType = i.pixelType;
  const n = {};
  e.rasterFunctionArguments = n;
  for (const u in r) {
    if (u === "type" || u === "object_id" || u === "_object_ref_id")
      continue;
    const l = r[u];
    l && typeof l == "object" && "type" in l && (l.type === "RasterFunctionTemplate" || l.type === "RasterFunctionVariable") ? (l.type === "RasterFunctionVariable" ? n[u] = qt(l, s) : (e.rasterFunctionArguments[u] = {}, Ee(l, { renderingRule: e.rasterFunctionArguments[u], templates: s })), l._object_id != null && s.set(l._object_id, n[u])) : n[u] = l;
  }
  switch (n.DEM && !n.Raster && (n.Raster = n.DEM, delete n.DEM), e.rasterFunction) {
    case "Stretch":
      fr(n);
      break;
    case "Colormap":
      dr(n);
      break;
    case "Convolution":
      gr(n);
      break;
    case "Mask":
      yr(n);
  }
}
function Xt(o) {
  const { renderingRule: t, templates: e } = o;
  if (typeof t != "object" || !(t != null && t.rasterFunctionArguments) || !e.size)
    return;
  const { rasterFunctionArguments: s } = t;
  for (const i in s) {
    const r = s[i], a = i === "_object_ref_id" ? r : r && typeof r == "object" && "_object_ref_id" in r ? r._object_ref_id : null;
    if (a == null)
      r && typeof r == "object" && (r.rasterFunctionArguments && Xt({ renderingRule: r, templates: e }), Array.isArray(r) && r.forEach((n, u) => {
        if (typeof n == "object")
          if (n._object_ref_id != null) {
            if (!e.has(n._object_ref_id))
              throw new ft("raster-function-helper", `unsupported raster function json. _object_ref_id: ${r} does not exist`);
            const l = e.get(a);
            l && typeof l == "object" ? Object.assign(n, l) : r[u] = l;
          } else
            Xt({ renderingRule: n, templates: e });
      }));
    else {
      if (!e.has(a))
        throw new ft("raster-function-helper", `unsupported raster function json. _object_ref_id: ${a} does not exist`);
      const n = e.get(a);
      i !== "_object_ref_id" ? s[i] = n : n && typeof n == "object" && Object.assign(s, n);
    }
  }
}
function fr(o) {
  var t;
  (t = o.Statistics) != null && t.length && typeof o.Statistics == "object" && (o.Statistics = o.Statistics.map((e) => [e.min, e.max, e.mean, e.standardDeviation])), o.NumberOfStandardDeviation != null && (o.NumberOfStandardDeviations = o.NumberOfStandardDeviation, delete o.NumberOfStandardDeviation);
}
function dr(o) {
  var t, e;
  ((e = (t = o.ColorRamp) == null ? void 0 : t.type) == null ? void 0 : e.toLowerCase()) === "randomcolorramp" && (delete o.ColorRamp, o.ColormapName = "Random"), o.ColorSchemeType === 0 && delete o.ColorRamp;
}
function gr(o) {
  o.ConvolutionType != null && (o.Type = o.ConvolutionType, delete o.ConvolutionType);
}
function yr(o) {
  var t;
  (t = o.NoDataValues) != null && t.length && typeof o.NoDataValues[0] == "string" && (o.NoDataValues = o.NoDataValues.filter((e) => e !== "").map((e) => Number(e)));
}
C.set("Aspect", { desc: "Aspect Function", ctor: ln, rasterArgumentNames: ["raster"] }), C.set("BandArithmetic", { desc: "Band Arithmetic Function", ctor: Mn, rasterArgumentNames: ["raster"] }), C.set("Colormap", { desc: "Colormap Function", ctor: qn, rasterArgumentNames: ["raster"] }), C.set("CompositeBand", { desc: "CompositeBand Function", ctor: Hn, rasterArgumentNames: ["rasters"] }), C.set("Convolution", { desc: "Convolution Function", ctor: ss, rasterArgumentNames: ["raster"] }), C.set("ExtractBand", { desc: "ExtractBand Function", ctor: as, rasterArgumentNames: ["raster"] }), C.set("Curvature", { desc: "Curvature Function", ctor: os, rasterArgumentNames: ["raster"] }), C.set("Local", { desc: "Local Function", ctor: Js, rasterArgumentNames: ["rasters"] }), C.set("Mask", { desc: "Mask Function", ctor: Ks, rasterArgumentNames: ["raster"] }), C.set("NDVI", { desc: "NDVI Function", ctor: Qs, rasterArgumentNames: ["raster"] }), C.set("Remap", { desc: "Remap Function", ctor: er, rasterArgumentNames: ["raster"] }), C.set("Slope", { desc: "Slope Function", ctor: rr, rasterArgumentNames: ["raster"] }), C.set("StatisticsHistogram", { desc: "Statistics Histogram Function", ctor: ir, rasterArgumentNames: ["raster"] }), C.set("Stretch", { desc: "Stretch Function", ctor: lr, rasterArgumentNames: ["raster"] }), C.set("Table", { desc: "Attribute Table Function", ctor: pr, rasterArgumentNames: ["raster"] });
let bt = class extends Zt {
  get affectsPixelSize() {
    return !1;
  }
  forwardTransform(o) {
    return o;
  }
  inverseTransform(o) {
    return o;
  }
};
c([h()], bt.prototype, "affectsPixelSize", null), c([h({ json: { write: !0 } })], bt.prototype, "spatialReference", void 0), bt = c([x("geoscene.layers.support.rasterTransforms.BaseRasterTransform")], bt);
const ne = bt;
var Ht;
let vt = Ht = class extends ne {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(o) {
    return (o = o.clone()).type === "point" ? (o.x > 180 + this.tolerance && (o.x -= 360), o) : (o.xmin >= 180 - this.tolerance ? (o.xmax -= 360, o.xmin -= 360) : o.xmax > 180 + this.tolerance && (o.xmin = -180, o.xmax = 180), o);
  }
  inverseTransform(o) {
    return (o = o.clone()).type === "point" ? (o.x < -this.tolerance && (o.x += 360), o) : (o.xmin < -this.tolerance && (o.xmin += 360, o.xmax += 360), o);
  }
  clone() {
    return new Ht({ tolerance: this.tolerance });
  }
};
c([q({ GCSShiftXform: "gcs-shift" })], vt.prototype, "type", void 0), c([h()], vt.prototype, "tolerance", void 0), vt = Ht = c([x("geoscene.layers.support.rasterTransforms.GCSShiftTransform")], vt);
const br = vt;
var Jt;
let Pt = Jt = class extends ne {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new Jt();
  }
};
c([q({ IdentityXform: "identity" })], Pt.prototype, "type", void 0), Pt = Jt = c([x("geoscene.layers.support.rasterTransforms.IdentityTransform")], Pt);
const vr = Pt;
var Yt;
function Kt(o, t, e) {
  const { x: s, y: i } = t;
  if (e < 2)
    return { x: o[0] + s * o[2] + i * o[4], y: o[1] + s * o[3] + i * o[5] };
  if (e === 2) {
    const f = s * s, g = i * i, y = s * i;
    return { x: o[0] + s * o[2] + i * o[4] + f * o[6] + y * o[8] + g * o[10], y: o[1] + s * o[3] + i * o[5] + f * o[7] + y * o[9] + g * o[11] };
  }
  const r = s * s, a = i * i, n = s * i, u = r * s, l = r * i, p = s * a, m = i * a;
  return { x: o[0] + s * o[2] + i * o[4] + r * o[6] + n * o[8] + a * o[10] + u * o[12] + l * o[14] + p * o[16] + m * o[18], y: o[1] + s * o[3] + i * o[5] + r * o[7] + n * o[9] + a * o[11] + u * o[13] + l * o[15] + p * o[17] + m * o[19] };
}
function Fe(o, t, e) {
  const { xmin: s, ymin: i, xmax: r, ymax: a, spatialReference: n } = t;
  let u = [];
  if (e < 2)
    u.push({ x: s, y: a }), u.push({ x: r, y: a }), u.push({ x: s, y: i }), u.push({ x: r, y: i });
  else {
    let m = 10;
    for (let f = 0; f < m; f++)
      u.push({ x: s, y: i + (a - i) * f / (m - 1) }), u.push({ x: r, y: i + (a - i) * f / (m - 1) });
    m = 8;
    for (let f = 1; f <= m; f++)
      u.push({ x: s + (r - s) * f / m, y: i }), u.push({ x: s + (r - s) * f / m, y: a });
  }
  u = u.map((m) => Kt(o, m, e));
  const l = u.map((m) => m.x), p = u.map((m) => m.y);
  return new Ue({ xmin: Math.min.apply(null, l), xmax: Math.max.apply(null, l), ymin: Math.min.apply(null, p), ymax: Math.max.apply(null, p), spatialReference: n });
}
function xr(o) {
  const [t, e, s, i, r, a] = o, n = s * a - r * i, u = r * i - s * a;
  return [(r * e - t * a) / n, (s * e - t * i) / u, a / n, i / u, -r / n, -s / u];
}
let j = Yt = class extends ne {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(o, t) {
    const { coeffX: e, coeffY: s } = t;
    if (!(e != null && e.length) || !(s != null && s.length) || e.length !== s.length)
      return null;
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(e[r]), i.push(s[r]);
    return i;
  }
  writeForwardCoefficients(o, t, e) {
    const s = [], i = [];
    for (let r = 0; r < (o == null ? void 0 : o.length); r++)
      r % 2 == 0 ? s.push(o[r]) : i.push(o[r]);
    t.coeffX = s, t.coeffY = i;
  }
  get inverseCoefficients() {
    let o = this._get("inverseCoefficients");
    const t = this._get("forwardCoefficients");
    return !o && t && this.polynomialOrder < 2 && (o = xr(t)), o;
  }
  set inverseCoefficients(o) {
    this._set("inverseCoefficients", o);
  }
  readInverseCoefficients(o, t) {
    const { inverseCoeffX: e, inverseCoeffY: s } = t;
    if (!(e != null && e.length) || !(s != null && s.length) || e.length !== s.length)
      return null;
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(e[r]), i.push(s[r]);
    return i;
  }
  writeInverseCoefficients(o, t, e) {
    const s = [], i = [];
    for (let r = 0; r < (o == null ? void 0 : o.length); r++)
      r % 2 == 0 ? s.push(o[r]) : i.push(o[r]);
    t.inverseCoeffX = s, t.inverseCoeffY = i;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(o) {
    if (o.type === "point") {
      const t = Kt(this.forwardCoefficients, o, this.polynomialOrder);
      return new re({ x: t.x, y: t.y, spatialReference: o.spatialReference });
    }
    return Fe(this.forwardCoefficients, o, this.polynomialOrder);
  }
  inverseTransform(o) {
    if (o.type === "point") {
      const t = Kt(this.inverseCoefficients, o, this.polynomialOrder);
      return new re({ x: t.x, y: t.y, spatialReference: o.spatialReference });
    }
    return Fe(this.inverseCoefficients, o, this.polynomialOrder);
  }
  clone() {
    return new Yt({ polynomialOrder: this.polynomialOrder, forwardCoefficients: this.forwardCoefficients ? [...this.forwardCoefficients] : null, inverseCoefficients: this.inverseCoefficients ? [...this.inverseCoefficients] : null });
  }
};
c([h({ json: { write: !0 } })], j.prototype, "polynomialOrder", void 0), c([h()], j.prototype, "forwardCoefficients", void 0), c([ht("forwardCoefficients", ["coeffX", "coeffY"])], j.prototype, "readForwardCoefficients", null), c([mt("forwardCoefficients")], j.prototype, "writeForwardCoefficients", null), c([h({ json: { write: !0 } })], j.prototype, "inverseCoefficients", null), c([ht("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], j.prototype, "readInverseCoefficients", null), c([mt("inverseCoefficients")], j.prototype, "writeInverseCoefficients", null), c([h()], j.prototype, "affectsPixelSize", null), c([q({ PolynomialXform: "polynomial" })], j.prototype, "type", void 0), j = Yt = c([x("geoscene.layers.support.rasterTransforms.PolynomialTransform")], j);
const wr = j, Ge = { GCSShiftXform: br, IdentityXform: vr, PolynomialXform: wr }, Ar = Object.keys(Ge);
function Wr(o) {
  const t = o == null ? void 0 : o.type;
  return !o || Ar.includes(t);
}
function qr(o) {
  if (!(o == null ? void 0 : o.type))
    return null;
  const e = Ge[o == null ? void 0 : o.type];
  if (e) {
    const s = new e();
    return s.read(o), s;
  }
  return null;
}
export {
  Lr as _,
  Wr as f,
  hr as h,
  qr as i,
  br as n,
  wr as y
};

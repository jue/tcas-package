import { a as W, b as z, d8 as Vt, c as _t, bk as Dt, H as Lt, aT as Rt, s as Y, C as Nt, z as nt, b5 as Et, $ as jt, aC as Ot, hL as Ut, hc as Gt } from "./index-O2RTvw_o.js";
let gt = class {
  constructor(e = null, n = null, r = null) {
    this.minValue = e, this.maxValue = n, this.noDataValue = r;
  }
};
const qt = 9999999e31, Wt = 2e-7, Xt = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767], u32: [0, 4294967295], s32: [-2147483648, 2147483647], f32: [-34028234663852886e22, 34028234663852886e22], f64: [-Number.MAX_VALUE, Number.MAX_VALUE], unknown: void 0, c64: void 0, c128: void 0 };
function ht(t) {
  return Xt[t] ?? [-34028234663852886e22, 34028234663852886e22];
}
function xe(t, e, n) {
  if (t.depthCount && t.depthCount > 1)
    return;
  const { pixels: r, statistics: a, pixelType: i } = t, l = r[0].length, c = t.bandMasks ?? [], h = t.mask ?? new Uint8Array(l).fill(255), o = i === "f32" || i === "f64", s = ht(i);
  let f = !1;
  for (let p = 0; p < r.length; p++) {
    const u = typeof e == "number" ? e : e[p];
    if (u == null)
      continue;
    const d = (a == null ? void 0 : a[p].minValue) ?? s[0], m = (a == null ? void 0 : a[p].maxValue) ?? s[1];
    if (d > u + Number.EPSILON || m < u - Number.EPSILON)
      continue;
    const x = c[p] || new Uint8Array(l).fill(255), w = r[p], A = n == null ? void 0 : n.customFloatTolerance;
    if (o && A !== 0) {
      let y = A;
      y || (y = Math.abs(u) >= qt ? Wt * Math.abs(u) : i === "f32" ? 2 ** -23 : Number.EPSILON);
      for (let M = 0; M < w.length; M++)
        x[M] && Math.abs(w[M] - u) < y && (w[M] = 0, x[M] = 0, h[M] = 0, f = !0);
    } else
      for (let y = 0; y < w.length; y++)
        x[y] && w[y] === u && (w[y] = 0, x[y] = 0, h[y] = 0, f = !0);
    c[p] = x;
  }
  f && (t.bandMasks = c, t.mask = h), f && "updateStatistics" in t && t.updateStatistics();
}
var Z;
let O = Z = class extends Dt {
  static createEmptyBand(t, e) {
    return new (Z.getPixelArrayConstructor(t))(e);
  }
  static getPixelArrayConstructor(t) {
    let e;
    switch (t) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e = Uint8Array;
        break;
      case "u16":
        e = Uint16Array;
        break;
      case "u32":
        e = Uint32Array;
        break;
      case "s8":
        e = Int8Array;
        break;
      case "s16":
        e = Int16Array;
        break;
      case "s32":
        e = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        e = Float32Array;
        break;
      case "f64":
        e = Float64Array;
    }
    return e;
  }
  constructor(t) {
    super(t), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = !1, this.premultiplyAlpha = !1, this.statistics = null, this.depthCount = 1;
  }
  castPixelType(t) {
    if (!t)
      return "f32";
    let e = t.toLowerCase();
    return ["u1", "u2", "u4"].includes(e) ? e = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].includes(e) || (e = "f32"), e;
  }
  getPlaneCount() {
    var t;
    return (t = this.pixels) == null ? void 0 : t.length;
  }
  addData(t) {
    if (!t.pixels || t.pixels.length !== this.width * this.height)
      throw new Lt("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t.pixels), this.statistics.push(t.statistics ?? new gt());
  }
  getAsRGBA() {
    const t = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t);
        break;
      default:
        this._fillFrom8Bit(t);
    }
    return new Uint8ClampedArray(t);
  }
  getAsRGBAFloat() {
    const t = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t), t;
  }
  updateStatistics() {
    if (!this.pixels)
      return;
    this.statistics = this.pixels.map((n) => this._calculateBandStatistics(n, this.mask));
    const t = this.mask;
    let e = 0;
    if (t != null)
      for (let n = 0; n < t.length; n++)
        t[n] && e++;
    else
      e = this.width * this.height;
    this.validPixelCount = e;
  }
  clamp(t) {
    if (!t || t === "f64" || t === "f32" || !this.pixels)
      return;
    const [e, n] = ht(t), r = this.pixels, a = this.width * this.height, i = r.length;
    let l, c, h;
    const o = [];
    for (let s = 0; s < i; s++) {
      h = Z.createEmptyBand(t, a), l = r[s];
      for (let f = 0; f < a; f++)
        c = l[f], h[f] = c > n ? n : c < e ? e : c;
      o.push(h);
    }
    this.pixels = o, this.pixelType = t;
  }
  extractBands(t) {
    var f;
    const { pixels: e, statistics: n } = this;
    if (t == null || t.length === 0 || !e || e.length === 0)
      return this;
    const r = e.length, a = t.some((p) => p >= e.length), i = r === t.length && !t.some((p, u) => p !== u);
    if (a || i)
      return this;
    const l = ((f = this.bandMasks) == null ? void 0 : f.length) === r ? t.map((p) => this.bandMasks[p]) : void 0;
    let { mask: c, validPixelCount: h } = this;
    const { width: o, height: s } = this;
    if (l) {
      if (l.length === 1)
        c = l[0];
      else {
        const p = o * s;
        c = new Uint8Array(p).fill(255);
        for (let u = 0; u < l.length; u++) {
          const d = l[u];
          for (let m = 0; m < p; m++)
            d[m] || (c[m] = 0);
        }
      }
      h = c.filter((p) => !!p).length;
    }
    return new Z({ pixelType: this.pixelType, width: o, height: s, mask: c, bandMasks: l, validPixelCount: h, maskIsAlpha: this.maskIsAlpha, pixels: t.map((p) => e[p]), statistics: n && t.map((p) => n[p]) });
  }
  clone() {
    const t = new Z({ width: this.width, height: this.height, pixelType: this.pixelType, maskIsAlpha: this.maskIsAlpha, validPixelCount: this.validPixelCount });
    let e;
    this.mask != null && (this.mask instanceof Uint8Array ? t.mask = new Uint8Array(this.mask) : t.mask = this.mask.slice(0)), this.bandMasks && (t.bandMasks = this.bandMasks.map((r) => new Uint8Array(r)));
    const n = Z.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t.pixels = [];
      const r = !!this.pixels[0].slice;
      for (e = 0; e < this.pixels.length; e++)
        t.pixels[e] = r ? this.pixels[e].slice(0, this.pixels[e].length) : new n(this.pixels[e]);
    }
    if (this.statistics)
      for (t.statistics = [], e = 0; e < this.statistics.length; e++)
        t.statistics[e] = Rt(this.statistics[e]);
    return t.premultiplyAlpha = this.premultiplyAlpha, t;
  }
  _fillFrom8Bit(t) {
    const { mask: e, maskIsAlpha: n, premultiplyAlpha: r, pixels: a } = this;
    if (!t || !a || !a.length)
      return void Y.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let i, l, c, h;
    i = l = c = a[0], a.length >= 3 ? (l = a[1], c = a[2]) : a.length === 2 && (l = a[1]);
    const o = new Uint32Array(t), s = this.width * this.height;
    if (i.length === s)
      if (e != null && e.length === s)
        if (n)
          for (h = 0; h < s; h++) {
            const f = e[h];
            if (f) {
              const p = f / 255;
              o[h] = r ? f << 24 | c[h] * p << 16 | l[h] * p << 8 | i[h] * p : f << 24 | c[h] << 16 | l[h] << 8 | i[h];
            }
          }
        else
          for (h = 0; h < s; h++)
            e[h] && (o[h] = 255 << 24 | c[h] << 16 | l[h] << 8 | i[h]);
      else
        for (h = 0; h < s; h++)
          o[h] = 255 << 24 | c[h] << 16 | l[h] << 8 | i[h];
    else
      Y.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t) {
    const { pixels: e, mask: n, statistics: r } = this;
    if (!t || !e || !e.length)
      return void Y.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const a = this.pixelType;
    let i = 1, l = 0, c = 1;
    if (r && r.length > 0) {
      for (const m of r)
        if (m.minValue != null && (l = Math.min(l, m.minValue)), m.maxValue != null && m.minValue != null) {
          const x = m.maxValue - m.minValue;
          c = Math.max(c, x);
        }
      i = 255 / c;
    } else {
      let m = 255;
      a === "s8" ? (l = -128, m = 127) : a === "u16" ? m = 65535 : a === "s16" ? (l = -32768, m = 32767) : a === "u32" ? m = 4294967295 : a === "s32" ? (l = -2147483648, m = 2147483647) : a === "f32" ? (l = -34e38, m = 34e38) : a === "f64" && (l = -Number.MAX_VALUE, m = Number.MAX_VALUE), i = 255 / (m - l);
    }
    const h = new Uint32Array(t), o = this.width * this.height;
    let s, f, p, u, d;
    if (s = f = p = e[0], s.length !== o)
      return Y.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (e.length >= 2)
      if (f = e[1], e.length >= 3 && (p = e[2]), n != null && n.length === o)
        for (u = 0; u < o; u++)
          n[u] && (h[u] = 255 << 24 | (p[u] - l) * i << 16 | (f[u] - l) * i << 8 | (s[u] - l) * i);
      else
        for (u = 0; u < o; u++)
          h[u] = 255 << 24 | (p[u] - l) * i << 16 | (f[u] - l) * i << 8 | (s[u] - l) * i;
    else if (n != null && n.length === o)
      for (u = 0; u < o; u++)
        d = (s[u] - l) * i, n[u] && (h[u] = 255 << 24 | d << 16 | d << 8 | d);
    else
      for (u = 0; u < o; u++)
        d = (s[u] - l) * i, h[u] = 255 << 24 | d << 16 | d << 8 | d;
  }
  _fillFrom32Bit(t) {
    const { pixels: e, mask: n } = this;
    if (!t || !e || !e.length)
      return Y.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let r, a, i, l;
    r = a = i = e[0], e.length >= 3 ? (a = e[1], i = e[2]) : e.length === 2 && (a = e[1]);
    const c = this.width * this.height;
    if (r.length !== c)
      return Y.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let h = 0;
    if (n != null && n.length === c)
      for (l = 0; l < c; l++)
        t[h++] = r[l], t[h++] = a[l], t[h++] = i[l], t[h++] = 1 & n[l];
    else
      for (l = 0; l < c; l++)
        t[h++] = r[l], t[h++] = a[l], t[h++] = i[l], t[h++] = 1;
  }
  _calculateBandStatistics(t, e) {
    let n = 1 / 0, r = -1 / 0;
    const a = t.length;
    let i, l = 0;
    if (e != null)
      for (i = 0; i < a; i++)
        e[i] && (l = t[i], n = l < n ? l : n, r = l > r ? l : r);
    else
      for (i = 0; i < a; i++)
        l = t[i], n = l < n ? l : n, r = l > r ? l : r;
    return new gt(n, r);
  }
};
W([z({ json: { write: !0 } })], O.prototype, "width", void 0), W([z({ json: { write: !0 } })], O.prototype, "height", void 0), W([z({ json: { write: !0 } })], O.prototype, "pixelType", void 0), W([Vt("pixelType")], O.prototype, "castPixelType", null), W([z({ json: { write: !0 } })], O.prototype, "validPixelCount", void 0), W([z({ json: { write: !0 } })], O.prototype, "mask", void 0), W([z({ json: { write: !0 } })], O.prototype, "maskIsAlpha", void 0), W([z({ json: { write: !0 } })], O.prototype, "pixels", void 0), W([z()], O.prototype, "premultiplyAlpha", void 0), W([z({ json: { write: !0 } })], O.prototype, "statistics", void 0), W([z({ json: { write: !0 } })], O.prototype, "depthCount", void 0), W([z({ json: { write: !0 } })], O.prototype, "noDataValues", void 0), W([z({ json: { write: !0 } })], O.prototype, "bandMasks", void 0), O = Z = W([_t("geoscene.layers.support.PixelBlock")], O);
const _ = O;
var xt, wt;
(function(t) {
  t[t.matchAny = 0] = "matchAny", t[t.matchAll = 1] = "matchAll";
})(xt || (xt = {})), function(t) {
  t[t.bestMatch = 0] = "bestMatch", t[t.fail = 1] = "fail";
}(wt || (wt = {}));
const we = 6;
function L(t) {
  return t != null && t.declaredClass === "geoscene.layers.support.PixelBlock" && t.pixels && t.pixels.length > 0;
}
function ye(t) {
  var s;
  if (!(t != null && t.length) || t.some((f) => !L(f)))
    return null;
  if (t.length === 1)
    return ((s = t[0]) == null ? void 0 : s.clone()) ?? null;
  const e = t, { width: n, height: r, pixelType: a } = e[0];
  if (e.some((f) => f.width !== n || f.height !== r))
    return null;
  const i = e.map(({ mask: f }) => f).filter((f) => f != null);
  let l = null;
  i.length && (l = new Uint8Array(n * r), l.set(i[0]), i.length > 1 && $t(i.slice(1), l));
  const c = [];
  e.forEach(({ pixels: f }) => c.push(...f));
  const h = e.map(({ statistics: f }) => f).filter((f) => f == null ? void 0 : f.length), o = [];
  return h.forEach((f) => o.push(...f)), new _({ pixelType: a, width: n, height: r, mask: l, pixels: c, statistics: o.length ? o : null });
}
function ke(t) {
  if (!t)
    return;
  const e = t.colormap;
  if (!e || e.length === 0)
    return;
  const n = e.sort((f, p) => f[0] - p[0]);
  let r = 0;
  n[0][0] < 0 && (r = n[0][0]);
  const a = Math.max(256, n[n.length - 1][0] - r + 1), i = new Uint8Array(4 * a), l = [];
  let c, h = 0, o = 0;
  const s = n[0].length === 5;
  if (a > 65536)
    return n.forEach((f) => {
      l[f[0] - r] = s ? f.slice(1) : f.slice(1).concat([255]);
    }), { indexed2DColormap: l, offset: r, alphaSpecified: s };
  if (t.fillUnspecified)
    for (c = n[o], h = c[0] - r; h < a; h++)
      i[4 * h] = c[1], i[4 * h + 1] = c[2], i[4 * h + 2] = c[3], i[4 * h + 3] = s ? c[4] : 255, h === c[0] - r && (c = o === n.length - 1 ? c : n[++o]);
  else
    for (h = 0; h < n.length; h++)
      c = n[h], o = 4 * (c[0] - r), i[o] = c[1], i[o + 1] = c[2], i[o + 2] = c[3], i[o + 3] = s ? c[4] : 255;
  return { indexedColormap: i, offset: r, alphaSpecified: s };
}
function Me(t, e) {
  if (!L(t) || !e || !e.indexedColormap && !e.indexed2DColormap)
    return t;
  const n = t.clone(), r = n.pixels;
  let a = n.mask;
  const i = n.width * n.height;
  if (r.length !== 1)
    return t;
  const { indexedColormap: l, indexed2DColormap: c, offset: h, alphaSpecified: o } = e;
  let s = 0;
  const f = r[0], p = new Uint8Array(f.length), u = new Uint8Array(f.length), d = new Uint8Array(f.length);
  let m, x = 0;
  if (l) {
    const w = l.length - 1;
    if (a != null)
      for (s = 0; s < i; s++)
        a[s] && (x = 4 * (f[s] - h), x < h || x > w ? a[s] = 0 : (p[s] = l[x], u[s] = l[x + 1], d[s] = l[x + 2], a[s] = l[x + 3]));
    else {
      for (a = new Uint8Array(i), s = 0; s < i; s++)
        x = 4 * (f[s] - h), x < h || x > w ? a[s] = 0 : (p[s] = l[x], u[s] = l[x + 1], d[s] = l[x + 2], a[s] = l[x + 3]);
      n.mask = a;
    }
  } else if (c)
    if (a != null)
      for (s = 0; s < i; s++)
        a[s] && (m = c[f[s]], p[s] = m[0], u[s] = m[1], d[s] = m[2], a[s] = m[3]);
    else {
      for (a = new Uint8Array(i), s = 0; s < i; s++)
        m = c[f[s]], p[s] = m[0], u[s] = m[1], d[s] = m[2], a[s] = m[3];
      n.mask = a;
    }
  return n.pixels = [p, u, d], n.statistics = null, n.pixelType = "u8", n.maskIsAlpha = o, n;
}
function Ae(t, e) {
  if (!L(t))
    return null;
  const { pixels: n, mask: r } = t, a = n.length;
  let i = e.lut;
  const { offset: l } = e;
  i && i[0].length === 1 && (i = n.map(() => i));
  const c = [], h = e.outputPixelType || "u8";
  for (let s = 0; s < a; s++) {
    const f = Pt(n[s], r, i[s], l || 0, h);
    c.push(f);
  }
  const o = new _({ width: t.width, height: t.height, pixels: c, mask: r, pixelType: h });
  return o.updateStatistics(), o;
}
function Pt(t, e, n, r, a) {
  const i = t.length, l = _.createEmptyBand(a, i);
  if (e)
    for (let c = 0; c < i; c++)
      e[c] && (l[c] = n[t[c] - r]);
  else
    for (let c = 0; c < i; c++)
      l[c] = n[t[c] - r];
  return l;
}
function be(t, e) {
  if (!L(t))
    return null;
  const n = t.clone(), { pixels: r } = n, a = n.width * n.height, i = e.length, l = Math.floor(i / 2), c = e[Math.floor(l)], h = r[0];
  let o, s, f, p, u, d, m = !1;
  const x = new Uint8Array(a), w = new Uint8Array(a), A = new Uint8Array(a);
  let y = n.mask;
  const M = e[0].mappedColor.length === 4;
  for (y || (y = new Uint8Array(a), y.fill(M ? 255 : 1), n.mask = y), u = 0; u < a; u++)
    if (y[u]) {
      for (o = h[u], m = !1, d = l, s = c, f = 0, p = i - 1; p - f > 1; ) {
        if (o === s.value) {
          m = !0;
          break;
        }
        o > s.value ? f = d : p = d, d = Math.floor((f + p) / 2), s = e[Math.floor(d)];
      }
      m || (o === e[f].value ? (s = e[f], m = !0) : o === e[p].value ? (s = e[p], m = !0) : o < e[f].value ? (m = !1, s = null) : o > e[f].value && (o < e[p].value ? (s = e[f], m = !0) : p === i - 1 ? (m = !1, s = null) : (s = e[p], m = !0))), m ? (x[u] = s.mappedColor[0], w[u] = s.mappedColor[1], A[u] = s.mappedColor[2], y[u] = s.mappedColor[3]) : x[u] = w[u] = A[u] = y[u] = 0;
    }
  return n.pixels = [x, w, A], n.mask = y, n.pixelType = "u8", n.maskIsAlpha = M, n;
}
function ve(t, e) {
  if (!L(t))
    return null;
  const { width: n, height: r } = t, { inputRanges: a, outputValues: i, outputPixelType: l, noDataRanges: c, allowUnmatched: h, isLastInputRangeInclusive: o } = e, s = t.pixels[0], f = _.createEmptyBand(l, s.length), p = t.mask, u = new Uint8Array(n * r);
  p ? u.set(p) : u.fill(255);
  const d = t.pixelType.startsWith("f") ? 1e-6 : 0, m = a.map((M) => M - d);
  m[0] = a[0], m[m.length - 1] = a[a.length - 1] + (o ? 1e-6 : 0);
  const x = a.length / 2, [w, A] = ht(l);
  for (let M = 0; M < r; M++)
    for (let g = 0; g < n; g++) {
      const k = M * n + g;
      if (u[k]) {
        const v = s[k];
        let b = !1;
        for (let $ = x - 1; $ >= 0; $--)
          if (v === m[2 * $] || v > m[2 * $] && v < m[2 * $ + 1]) {
            f[k] = i[$], b = !0;
            break;
          }
        b || (h ? f[k] = v > A ? A : v < w ? w : v : u[k] = 0);
      }
    }
  const y = c == null ? void 0 : c.length;
  if (y)
    for (let M = 0; M < r; M++)
      for (let g = 0; g < n; g++) {
        const k = M * n + g;
        if (!p || p[k]) {
          const v = s[k];
          for (let b = 0; b < y; b += 2)
            if (v >= c[b] && v <= c[b + 1]) {
              f[k] = 0, u[k] = 0;
              break;
            }
        }
      }
  return new _({ width: n, height: r, pixelType: l, pixels: [f], mask: u });
}
function yt(t, e, n, r) {
  const a = n != null && n.length >= 2 ? new Set(n) : null, i = (n == null ? void 0 : n.length) === 1 ? n[0] : null, l = !!(e != null && e.length);
  for (let c = 0; c < t.length; c++)
    if (r[c]) {
      const h = t[c];
      if (l) {
        let o = !1;
        for (let s = 0; s < e.length; s += 2)
          if (h >= e[s] && h <= e[s + 1]) {
            o = !0;
            break;
          }
        o || (r[c] = 0);
      }
      r[c] && (h === i || a != null && a.has(h)) && (r[c] = 0);
    }
}
function kt(t, e) {
  const n = t[0].length;
  for (let r = 0; r < n; r++)
    if (e[r]) {
      let a = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i][r]) {
          a = !0;
          break;
        }
      a || (e[r] = 0);
    }
}
function $t(t, e) {
  const n = t[0].length;
  for (let r = 0; r < n; r++)
    if (e[r]) {
      let a = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i][r] === 0) {
          a = !0;
          break;
        }
      a && (e[r] = 0);
    }
}
function Ue(t, e) {
  if (!L(t))
    return null;
  const { width: n, height: r, pixels: a } = t, i = n * r, l = new Uint8Array(i);
  t.mask ? l.set(t.mask) : l.fill(255);
  const c = a.length, { includedRanges: h, noDataValues: o, outputPixelType: s, matchAll: f, lookups: p } = e;
  if (p) {
    const u = [];
    for (let d = 0; d < c; d++) {
      const m = p[d], x = Pt(a[d], l, m.lut, m.offset || 0, "u8");
      u.push(x);
    }
    u.length === 1 ? l.set(u[0]) : f ? kt(u, l) : $t(u, l);
  } else if (f) {
    const u = [];
    for (let d = 0; d < c; d++) {
      const m = new Uint8Array(i);
      m.set(l), yt(a[d], h == null ? void 0 : h.slice(2 * d, 2 * d + 2), o == null ? void 0 : o[d], m), u.push(m);
    }
    u.length === 1 ? l.set(u[0]) : kt(u, l);
  } else
    for (let u = 0; u < c; u++)
      yt(a[u], h == null ? void 0 : h.slice(2 * u, 2 * u + 2), o == null ? void 0 : o[u], l);
  return new _({ width: n, height: r, pixelType: s, pixels: a, mask: l });
}
function Pe(t) {
  const { srcPixelType: e, inputRanges: n, outputValues: r, allowUnmatched: a, noDataRanges: i, isLastInputRangeInclusive: l, outputPixelType: c } = t;
  if (e !== "u8" && e !== "s8" && e !== "u16" && e !== "s16")
    return null;
  const h = e.includes("16") ? 65536 : 256, o = e.includes("s") ? -h / 2 : 0, s = _.createEmptyBand(c, h), f = new Uint8Array(h);
  a && f.fill(255);
  const [p, u] = ht(c);
  if (n != null && n.length && (r != null && r.length)) {
    const m = n.map((x) => x - 1e-6);
    m[0] = n[0], l && (m[m.length - 1] = n[n.length - 1]);
    for (let x = 0; x < m.length; x++) {
      const w = r[x] > u ? u : r[x] < p ? p : r[x], A = Math.ceil(m[2 * x] - o), y = Math.floor(m[2 * x + 1] - o);
      for (let M = A; M <= y; M++)
        s[M] = w, f[M] = 255;
    }
  }
  if (i != null && i.length)
    for (let d = 0; d < i.length; d++) {
      const m = Math.ceil(i[2 * d] - o), x = Math.floor(i[2 * d + 1] - o);
      for (let w = m; w <= x; w++)
        f[w] = 0;
    }
  return { lut: s, offset: o, mask: f };
}
function $e(t, e, n) {
  if (t !== "u8" && t !== "s8" && t !== "u16" && t !== "s16")
    return null;
  const r = t.includes("16") ? 65536 : 256, a = t.includes("s") ? -r / 2 : 0, i = new Uint8Array(r);
  if (e)
    for (let l = 0; l < e.length; l++) {
      const c = Math.ceil(e[2 * l] - a), h = Math.floor(e[2 * l + 1] - a);
      for (let o = c; o <= h; o++)
        i[o] = 255;
    }
  else
    i.fill(255);
  if (n)
    for (let l = 0; l < n.length; l++)
      i[n[l] - a] = 0;
  return { lut: i, offset: a };
}
function zt(t, e, n, r, a, i, l, c) {
  return { xmin: a <= n * t ? 0 : a < n * t + t ? a - n * t : t, ymin: i <= r * e ? 0 : i < r * e + e ? i - r * e : e, xmax: a + l <= n * t ? 0 : a + l < n * t + t ? a + l - n * t : t, ymax: i + c <= r * e ? 0 : i + c < r * e + e ? i + c - r * e : e };
}
function Te(t, e) {
  if (!t || t.length === 0)
    return null;
  const n = t.find((d) => d.pixelBlock);
  if (!n || n.pixelBlock == null)
    return null;
  const r = (n.extent.xmax - n.extent.xmin) / n.pixelBlock.width, a = (n.extent.ymax - n.extent.ymin) / n.pixelBlock.height, i = 0.01 * Math.min(r, a), l = t.sort((d, m) => Math.abs(d.extent.ymax - m.extent.ymax) > i ? m.extent.ymax - d.extent.ymax : Math.abs(d.extent.xmin - m.extent.xmin) > i ? d.extent.xmin - m.extent.xmin : 0), c = Math.min.apply(null, l.map((d) => d.extent.xmin)), h = Math.min.apply(null, l.map((d) => d.extent.ymin)), o = Math.max.apply(null, l.map((d) => d.extent.xmax)), s = Math.max.apply(null, l.map((d) => d.extent.ymax)), f = { x: Math.round((e.xmin - c) / r), y: Math.round((s - e.ymax) / a) }, p = { width: Math.round((o - c) / r), height: Math.round((s - h) / a) }, u = { width: Math.round((e.xmax - e.xmin) / r), height: Math.round((e.ymax - e.ymin) / a) };
  return Math.round(p.width / n.pixelBlock.width) * Math.round(p.height / n.pixelBlock.height) !== l.length || f.x < 0 || f.y < 0 || p.width < u.width || p.height < u.height ? null : { extent: e, pixelBlock: Jt(l.map((d) => d.pixelBlock), p, { clipOffset: f, clipSize: u }) };
}
function ft(t, e, n, r, a, i) {
  const { width: l, height: c } = n.block, { x: h, y: o } = n.offset, { width: s, height: f } = n.mosaic, p = zt(l, c, r, a, h, o, s, f);
  let u = 0, d = 0;
  if (i) {
    const m = i.hasGCSSShiftTransform ? 360 : i.halfWorldWidth ?? 0, x = l * i.resolutionX, w = i.startX + r * x;
    w < m && w + x > m ? d = i.rightPadding : w >= m && (u = i.leftMargin - i.rightPadding, d = 0);
  }
  if (p.xmax -= d, typeof e != "number")
    for (let m = p.ymin; m < p.ymax; m++) {
      const x = (a * c + m - o) * s + (r * l - h) + u, w = m * l;
      for (let A = p.xmin; A < p.xmax; A++)
        t[x + A] = e[w + A];
    }
  else
    for (let m = p.ymin; m < p.ymax; m++) {
      const x = (a * c + m - o) * s + (r * l - h) + u;
      for (let w = p.xmin; w < p.xmax; w++)
        t[x + w] = e;
    }
}
function Jt(t, e, n = {}) {
  var T;
  const { clipOffset: r, clipSize: a, alignmentInfo: i, blockWidths: l } = n;
  if (l)
    return Ht(t, e, { blockWidths: l });
  const c = t.find((P) => L(P));
  if (c == null)
    return null;
  const h = a ? a.width : e.width, o = a ? a.height : e.height, s = c.width, f = c.height, p = e.width / s, u = e.height / f, d = { offset: r || { x: 0, y: 0 }, mosaic: a || e, block: { width: s, height: f } }, m = c.pixelType, x = _.getPixelArrayConstructor(m), w = c.pixels.length, A = [];
  let y, M;
  for (let P = 0; P < w; P++) {
    M = new x(h * o);
    for (let U = 0; U < u; U++)
      for (let I = 0; I < p; I++) {
        const C = t[U * p + I];
        L(C) && (y = C.pixels[P], ft(M, y, d, I, U, i));
      }
    A.push(M);
  }
  const g = t.some((P) => P == null || P.mask != null && P.mask.length > 0), k = t.some((P) => P != null && P.bandMasks && P.bandMasks.length > 1), v = g ? new Uint8Array(h * o) : void 0, b = k ? [] : void 0;
  if (v) {
    for (let P = 0; P < u; P++)
      for (let U = 0; U < p; U++) {
        const I = t[P * p + U], C = I != null ? I.mask : null;
        ft(v, C ?? (I ? 255 : 0), d, U, P, i);
      }
    if (b)
      for (let P = 0; P < w; P++) {
        const U = new Uint8Array(h * o);
        for (let I = 0; I < u; I++)
          for (let C = 0; C < p; C++) {
            const B = t[I * p + C], S = ((T = B == null ? void 0 : B.bandMasks) == null ? void 0 : T[P]) ?? (B == null ? void 0 : B.mask);
            ft(U, S ?? (B ? 255 : 0), d, C, I, i);
          }
        b.push(U);
      }
  }
  const $ = new _({ width: h, height: o, pixels: A, pixelType: m, bandMasks: b, mask: v });
  return $.updateStatistics(), $;
}
function Ht(t, e, n) {
  var x;
  const r = t.find((w) => w != null);
  if (r == null)
    return null;
  const a = t.some((w) => w == null || !!w.mask), { width: i, height: l } = e, c = a ? new Uint8Array(i * l) : null, { blockWidths: h } = n, o = [], s = r.getPlaneCount(), f = _.getPixelArrayConstructor(r.pixelType);
  if (a)
    for (let w = 0, A = 0; w < t.length; A += h[w], w++) {
      const y = t[w];
      if (!L(y))
        continue;
      const M = y.mask;
      for (let g = 0; g < l; g++)
        for (let k = 0; k < h[w]; k++)
          c[g * i + k + A] = M == null ? 255 : M[g * y.width + k];
    }
  const p = t.some((w) => w != null && w.bandMasks && w.bandMasks.length > 1), u = p ? [] : void 0, d = i * l;
  for (let w = 0; w < s; w++) {
    const A = new f(d), y = p ? new Uint8Array(d) : void 0;
    for (let M = 0, g = 0; M < t.length; g += h[M], M++) {
      const k = t[M];
      if (!L(k))
        continue;
      const v = k.pixels[w];
      if (v != null) {
        for (let b = 0; b < l; b++)
          for (let $ = 0; $ < h[M]; $++)
            A[b * i + $ + g] = v[b * k.width + $];
        if (y) {
          const b = ((x = k.bandMasks) == null ? void 0 : x[w]) ?? k.mask;
          for (let $ = 0; $ < l; $++)
            for (let T = 0; T < h[M]; T++)
              y[$ * i + T + g] = b ? b[$ * k.width + T] : 255;
        }
      }
    }
    o.push(A), u && y && u.push(y);
  }
  const m = new _({ width: i, height: l, mask: c, bandMasks: u, pixels: o, pixelType: r.pixelType });
  return m.updateStatistics(), m;
}
function Ie(t, e, n) {
  if (!L(t))
    return null;
  const { width: r, height: a } = t, i = e.x, l = e.y, c = n.width + i, h = n.height + l;
  if (i < 0 || l < 0 || c > r || h > a || i === 0 && l === 0 && c === r && h === a)
    return t;
  t.mask || (t.mask = new Uint8Array(r * a));
  const o = t.mask;
  for (let s = 0; s < a; s++) {
    const f = s * r;
    for (let p = 0; p < r; p++)
      o[f + p] = s < l || s >= h || p < i || p >= c ? 0 : 1;
  }
  return t.updateStatistics(), t;
}
function Kt(t) {
  if (!L(t))
    return null;
  const e = t.clone(), { width: n, height: r, pixels: a } = t, i = a[0], l = e.pixels[0], c = t.mask;
  for (let h = 2; h < r - 1; h++) {
    const o = /* @__PURE__ */ new Map();
    for (let f = h - 2; f < h + 2; f++)
      for (let p = 0; p < 4; p++) {
        const u = f * n + p;
        lt(o, i[u], c ? c[u] : 1);
      }
    l[h * n] = Mt(o), l[h * n + 1] = l[h * n + 2] = l[h * n];
    let s = 3;
    for (; s < n - 1; s++) {
      let f = (h - 2) * n + s + 1;
      lt(o, i[f], c ? c[f] : 1), f = (h - 1) * n + s + 1, lt(o, i[f], c ? c[f] : 1), f = h * n + s + 1, lt(o, i[f], c ? c[f] : 1), f = (h + 1) * n + s + 1, lt(o, i[f], c ? c[f] : 1), f = (h - 2) * n + s - 3, ot(o, i[f], c ? c[f] : 1), f = (h - 1) * n + s - 3, ot(o, i[f], c ? c[f] : 1), f = h * n + s - 3, ot(o, i[f], c ? c[f] : 1), f = (h + 1) * n + s - 3, ot(o, i[f], c ? c[f] : 1), l[h * n + s] = Mt(o);
    }
    l[h * n + s + 1] = l[h * n + s];
  }
  for (let h = 0; h < n; h++)
    l[h] = l[n + h] = l[2 * n + h], l[(r - 1) * n + h] = l[(r - 2) * n + h];
  return e.updateStatistics(), e;
}
function Mt(t) {
  if (t.size === 0)
    return 0;
  let e = 0, n = -1, r = 0;
  const a = t.keys();
  let i = a.next();
  for (; !i.done; )
    r = t.get(i.value), r > e && (n = i.value, e = r), i = a.next();
  return n;
}
function ot(t, e, n) {
  if (n === 0)
    return;
  const r = t.get(e);
  r === 1 ? t.delete(e) : t.set(e, r - 1);
}
function lt(t, e, n) {
  n !== 0 && t.set(e, t.has(e) ? t.get(e) + 1 : 1);
}
function Qt(t, e, n) {
  let { x: r, y: a } = e;
  const { width: i, height: l } = n;
  if (r === 0 && a === 0 && l === t.height && i === t.width)
    return t;
  const { width: c, height: h } = t, o = Math.max(0, a), s = Math.max(0, r), f = Math.min(r + i, c), p = Math.min(a + l, h);
  if (f < 0 || p < 0 || !L(t))
    return null;
  r = Math.max(0, -r), a = Math.max(0, -a);
  const { pixels: u } = t, d = i * l, m = u.length, x = [];
  for (let M = 0; M < m; M++) {
    const g = u[M], k = _.createEmptyBand(t.pixelType, d);
    for (let v = o; v < p; v++) {
      const b = v * c;
      let $ = (v + a - o) * i + r;
      for (let T = s; T < f; T++)
        k[$++] = g[b + T];
    }
    x.push(k);
  }
  const w = new Uint8Array(d), A = t.mask;
  for (let M = o; M < p; M++) {
    const g = M * c;
    let k = (M + a - o) * i + r;
    for (let v = s; v < f; v++)
      w[k++] = A ? A[g + v] : 1;
  }
  const y = new _({ width: n.width, height: n.height, pixelType: t.pixelType, pixels: x, mask: w });
  return y.updateStatistics(), y;
}
function Yt(t, e = !0) {
  if (!L(t))
    return null;
  const { pixels: n, width: r, height: a, mask: i, pixelType: l } = t, c = [], h = Math.round(r / 2), o = Math.round(a / 2), s = a - 1, f = r - 1;
  for (let u = 0; u < n.length; u++) {
    const d = n[u], m = _.createEmptyBand(l, h * o);
    let x = 0;
    for (let w = 0; w < a; w += 2)
      for (let A = 0; A < r; A += 2) {
        const y = d[w * r + A];
        if (e) {
          const M = A === f ? y : d[w * r + A + 1], g = w === s ? y : d[w * r + A + r], k = A === f ? g : w === s ? M : d[w * r + A + r + 1];
          m[x++] = (y + M + g + k) / 4;
        } else
          m[x++] = y;
      }
    c.push(m);
  }
  let p = null;
  if (i != null) {
    p = new Uint8Array(h * o);
    let u = 0;
    for (let d = 0; d < a; d += 2)
      for (let m = 0; m < r; m += 2) {
        const x = i[d * r + m];
        if (e) {
          const w = m === f ? x : i[d * r + m + 1], A = d === s ? x : i[d * r + m + r], y = m === f ? A : d === s ? w : i[d * r + m + r + 1];
          p[u++] = x * w * A * y ? 1 : 0;
        } else
          p[u++] = x;
      }
  }
  return new _({ width: h, height: o, pixelType: l, pixels: c, mask: p });
}
function Se(t, e, n) {
  if (!L(t))
    return null;
  const { width: r, height: a } = e;
  let { width: i, height: l } = t;
  const c = /* @__PURE__ */ new Map(), h = { x: 0, y: 0 }, o = n == null ? 1 : 1 + n;
  let s = t;
  for (let f = 0; f < o; f++) {
    const p = Math.ceil(i / r), u = Math.ceil(l / a);
    for (let d = 0; d < u; d++) {
      h.y = d * a;
      for (let m = 0; m < p; m++) {
        h.x = m * r;
        const x = Qt(s, h, e);
        c.set(`${f}/${d}/${m}`, x);
      }
    }
    f < o - 1 && (s = Yt(s)), i = Math.round(i / 2), l = Math.round(l / 2);
  }
  return c;
}
function Tt(t, e, n, r, a = 0) {
  const { width: i, height: l } = t, { width: c, height: h } = e, o = r.cols, s = r.rows, f = Math.ceil(c / o - 0.1 / o), p = Math.ceil(h / s - 0.1 / s);
  let u, d, m, x, w, A, y;
  const M = f * o, g = M * p * s, k = new Float32Array(g), v = new Float32Array(g), b = new Uint32Array(g), $ = new Uint32Array(g);
  let T, P, U = 0;
  for (let I = 0; I < p; I++)
    for (let C = 0; C < f; C++) {
      u = 12 * (I * f + C), d = n[u], m = n[u + 1], x = n[u + 2], w = n[u + 3], A = n[u + 4], y = n[u + 5];
      for (let B = 0; B < s; B++) {
        U = (I * s + B) * M + C * o, P = (B + 0.5) / s;
        for (let S = 0; S < B; S++)
          T = (S + 0.5) / o, k[U + S] = (d * T + m * P + x) * i + a, v[U + S] = (w * T + A * P + y) * l + a, b[U + S] = Math.floor(k[U + S]), $[U + S] = Math.floor(v[U + S]);
      }
      u += 6, d = n[u], m = n[u + 1], x = n[u + 2], w = n[u + 3], A = n[u + 4], y = n[u + 5];
      for (let B = 0; B < s; B++) {
        U = (I * s + B) * M + C * o, P = (B + 0.5) / s;
        for (let S = B; S < o; S++)
          T = (S + 0.5) / o, k[U + S] = (d * T + m * P + x) * i + a, v[U + S] = (w * T + A * P + y) * l + a, b[U + S] = Math.floor(k[U + S]), $[U + S] = Math.floor(v[U + S]);
      }
    }
  return { offsets_x: k, offsets_y: v, offsets_xi: b, offsets_yi: $, gridWidth: M };
}
function Be(t, e) {
  const { coefficients: n, spacing: r } = e, { offsets_x: a, offsets_y: i, gridWidth: l } = Tt(t, t, n, { rows: r[0], cols: r[1] }), { width: c, height: h } = t, o = new Float32Array(c * h), s = 180 / Math.PI;
  for (let f = 0; f < h; f++)
    for (let p = 0; p < c; p++) {
      const u = f * l + p, d = f === 0 ? u : u - l, m = f === h - 1 ? u : u + l, x = a[d] - a[m], w = i[m] - i[d];
      if (isNaN(x) || isNaN(w))
        o[f * c + p] = 90;
      else {
        let A = Math.atan2(w, x) * s;
        A = (360 + A) % 360, o[f * c + p] = A;
      }
    }
  return o;
}
function Ce(t, e, n, r, a = "nearest") {
  if (!L(t))
    return null;
  a === "majority" && (t = Kt(t));
  const { pixels: i, mask: l, bandMasks: c, pixelType: h } = t, o = t.width, s = t.height, f = _.getPixelArrayConstructor(h), p = i.length, { width: u, height: d } = e;
  let m = !1;
  for (let U = 0; U < n.length; U += 3)
    n[U] === -1 && n[U + 1] === -1 && n[U + 2] === -1 && (m = !0);
  const { offsets_x: x, offsets_y: w, offsets_xi: A, offsets_yi: y, gridWidth: M } = Tt({ width: o, height: s }, e, n, r, a === "majority" ? 0.5 : 0);
  let g;
  const k = (U, I, C, B) => {
    const S = U instanceof Float32Array || U instanceof Float64Array ? 0 : 0.5;
    for (let F = 0; F < d; F++) {
      g = F * M;
      for (let V = 0; V < u; V++) {
        if (x[g] < 0 || w[g] < 0)
          U[F * u + V] = 0;
        else if (B)
          U[F * u + V] = I[A[g] + y[g] * o];
        else {
          const E = Math.floor(x[g]), q = Math.floor(w[g]), R = Math.ceil(x[g]), G = Math.ceil(w[g]), X = x[g] - E, H = w[g] - q;
          if (!C || C[E + q * o] && C[R + q * o] && C[E + G * o] && C[R + G * o]) {
            const et = (1 - X) * I[E + q * o] + X * I[R + q * o], K = (1 - X) * I[E + G * o] + X * I[R + G * o];
            U[F * u + V] = (1 - H) * et + H * K + S;
          } else
            U[F * u + V] = I[A[g] + y[g] * o];
        }
        g++;
      }
    }
  }, v = [];
  let b;
  const $ = (c == null ? void 0 : c.length) === p, T = [];
  for (let U = 0; U < p; U++) {
    if ($) {
      const I = new Uint8Array(u * d);
      k(I, c[U], c[U], !0), T.push(I);
    }
    b = new f(u * d), k(b, i[U], $ ? c[U] : l, a === "nearest" || a === "majority"), v.push(b);
  }
  const P = new _({ width: u, height: d, pixelType: h, pixels: v, bandMasks: $ ? T : void 0 });
  if (l != null)
    P.mask = new Uint8Array(u * d), k(P.mask, l, l, !0);
  else if (m) {
    P.mask = new Uint8Array(u * d);
    for (let U = 0; U < u * d; U++)
      P.mask[U] = x[U] < 0 || w[U] < 0 ? 0 : 1;
  }
  return P.updateStatistics(), P;
}
const tt = /* @__PURE__ */ new Map();
tt.set("meter-per-second", 1), tt.set("kilometer-per-hour", 0.277778), tt.set("knots", 0.514444), tt.set("feet-per-second", 0.3048), tt.set("mile-per-hour", 0.44704);
const pt = 180 / Math.PI, dt = 5, at = new Nt({ esriMetersPerSecond: "meter-per-second", esriKilometersPerHour: "kilometer-per-hour", esriKnots: "knots", esriFeetPerSecond: "feet-per-second", esriMilesPerHour: "mile-per-hour" });
function mt(t, e) {
  return tt.get(t) / tt.get(e) || 1;
}
function It(t) {
  return (450 - t) % 360;
}
function St(t, e = "geographic") {
  const [n, r] = t, a = Math.sqrt(n * n + r * r);
  let i = Math.atan2(r, n) * pt;
  return i = (360 + i) % 360, e === "geographic" && (i = It(i)), [a, i];
}
function Bt(t, e = "geographic") {
  let n = t[1];
  e === "geographic" && (n = It(n)), n %= 360;
  const r = t[0];
  return [r * Math.cos(n / pt), r * Math.sin(n / pt)];
}
function Fe(t, e, n, r = "geographic") {
  if (!L(t) || n == null)
    return t;
  const a = e === "vector-magdir" ? t.clone() : At(t, e), i = a.pixels[1];
  for (let l = 0; l < i.length; l++)
    i[l] = r === "geographic" ? (i[l] + n[l] + 270) % 360 : (i[l] + 360 - n[l]) % 360;
  return e === "vector-magdir" ? a : At(a, "vector-magdir");
}
function At(t, e, n = "geographic", r = 1) {
  if (!L(t))
    return t;
  const { pixels: a, width: i, height: l } = t, c = i * l, h = a[0], o = a[1], s = t.pixelType.startsWith("f") ? t.pixelType : "f32", f = _.createEmptyBand(s, c), p = _.createEmptyBand(s, c);
  let u = 0;
  for (let m = 0; m < l; m++)
    for (let x = 0; x < i; x++)
      e === "vector-uv" ? ([f[u], p[u]] = St([h[u], o[u]], n), f[u] *= r) : ([f[u], p[u]] = Bt([h[u], o[u]], n), f[u] *= r, p[u] *= r), u++;
  const d = new _({ pixelType: s, width: t.width, height: t.height, mask: t.mask, validPixelCount: t.validPixelCount, maskIsAlpha: t.maskIsAlpha, pixels: [f, p] });
  return d.updateStatistics(), d;
}
function Ve(t, e, n = 1) {
  if (n === 1 || !L(t))
    return t;
  const r = t.clone(), { pixels: a, width: i, height: l } = r, c = a[0], h = a[1];
  let o = 0;
  for (let s = 0; s < l; s++)
    for (let f = 0; f < i; f++)
      e === "vector-uv" ? (c[o] *= n, h[o] *= n) : c[o] *= n, o++;
  return r.updateStatistics(), r;
}
function _e(t, e, n, r, a) {
  if (a == null || !a.spatialReference.equals(t.spatialReference))
    return { extent: t, width: Math.round(e / r), height: Math.round(n / r), resolution: t.width / e };
  const i = a.xmin, l = a.ymax, c = (t.xmax - t.xmin) / e * r, h = (t.ymax - t.ymin) / n * r, o = (c + h) / 2;
  return t.xmin = i + Math.floor((t.xmin - i) / c) * c, t.xmax = i + Math.ceil((t.xmax - i) / c) * c, t.ymin = l + Math.floor((t.ymin - l) / h) * h, t.ymax = l + Math.ceil((t.ymax - l) / h) * h, { extent: t, width: Math.round(t.width / c), height: Math.round(t.height / h), resolution: o };
}
const Zt = Ct(0, 0, 0);
function Ct(t = 0, e = 0, n = Math.PI, r = !0) {
  r && (n = (2 * Math.PI - n) % (2 * Math.PI));
  const a = r ? -1 : 1, i = 13 * a, l = -7 * a, c = -2 * a, h = -16 * a, o = 21.75, [s, f] = j(0, e + i, n, o), [p, u] = j(t - 5.5, e + l, n, o), [d, m] = j(t + 5.5, e + l, n, o), [x, w] = j(t - 1.5, e + c, n, o), [A, y] = j(t + 1.5, e + c, n, o), [M, g] = j(t - 1.5, e + h, n, o), [k, v] = j(t + 1.5, e + h, n, o);
  return [s, f, p, u, x, w, A, y, d, m, M, g, k, v];
}
function te(t = 0, e = Math.PI, n = !0) {
  n && (e = (2 * Math.PI - e) % (2 * Math.PI));
  const r = 10, a = n ? -1 : 1, i = 5 * a, l = 20 * a, c = 25 * a, h = 45, o = 0, s = 0, f = 2, p = 0, u = f * a, d = n ? 1 : -1, m = r / 2 * d;
  let [x, w] = [o + m, s - l], [A, y] = [x + f * d, w], [M, g] = [A - p * d, y + u], [k, v] = [o - m, s - c], [b, $] = [k + p * d, v - u], T = Math.ceil(t / dt), P = Math.floor(T / 10);
  T -= 8 * P;
  const U = [], I = [];
  for (let X = 0; X < T / 2; X++, P--) {
    P <= 0 && T % 2 == 1 && X === (T - 1) / 2 && (k = o, b = k + p * d, v = (v + w) / 2, $ = v - u);
    const [H, et] = j(k, v, e, h);
    if (P > 0) {
      const [K, it] = j(A, v, e, h), [st, D] = j(x, w, e, h);
      U.push(K), U.push(it), U.push(H), U.push(et), U.push(st), U.push(D);
    } else {
      const [K, it] = j(A, y, e, h), [st, D] = j(M, g, e, h), [N, ct] = j(b, $, e, h);
      I.push(H), I.push(et), I.push(N), I.push(ct), I.push(st), I.push(D), I.push(K), I.push(it);
    }
    v += i, w += i, y += i, g += i, $ += i;
  }
  const [C, B] = j(o + m, s + l, e, h), S = (r / 2 + f) * d, [F, V] = j(o + S, s + l, e, h), [E, q] = j(o + m, s - c, e, h), [R, G] = j(o + S, s - c, e, h);
  return { pennants: U, barbs: I, shaft: [C, B, F, V, E, q, R, G] };
}
function j(t, e, n, r = 1) {
  const a = Math.sqrt(t * t + e * e) / r, i = (2 * Math.PI + Math.atan2(e, t)) % (2 * Math.PI);
  return [a, (2 * Math.PI + i - n) % (2 * Math.PI)];
}
const rt = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], ee = [0, 0.5, 1, 1.5, 2], ne = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function Q(t, e, n, r) {
  const a = mt(r || "knots", n);
  let i;
  for (i = 1; i < e.length; i++)
    if (i === e.length - 1) {
      if (t < e[i] * a)
        break;
    } else if (t <= e[i] * a)
      break;
  return Math.min(i - 1, e.length - 2);
}
function ie(t, e, n, r, a) {
  let i = 0;
  switch (e) {
    case "beaufort_kn":
      i = Q(t, rt, "knots", n);
      break;
    case "beaufort_km":
      i = Q(t, rt, "kilometer-per-hour", n);
      break;
    case "beaufort_ft":
      i = Q(t, rt, "feet-per-second", n);
      break;
    case "beaufort_m":
      i = Q(t, rt, "meter-per-second", n);
      break;
    case "classified_arrow":
      i = Q(t, a ?? [], r, n);
      break;
    case "ocean_current_m":
      i = Q(t, ee, "meter-per-second", n);
      break;
    case "ocean_current_kn":
      i = Q(t, ne, "knots", n);
  }
  return i;
}
function se(t, e) {
  const { style: n, inputUnit: r, outputUnit: a, breakValues: i } = e, l = at.fromJSON(r), c = at.fromJSON(a), h = 7 * 6, o = 15;
  let s = 0, f = 0;
  const { width: p, height: u, mask: d } = t, m = t.pixels[0], x = t.pixels[1], w = d != null ? d.filter((g) => g > 0).length : p * u, A = new Float32Array(w * h), y = new Uint32Array(o * w), M = e.invertDirection ? Ct(0, 0, 0, !1) : Zt;
  for (let g = 0; g < u; g++)
    for (let k = 0; k < p; k++) {
      const v = g * p + k;
      if (!d || d[g * p + k]) {
        const b = (x[v] + 360) % 360 / 180 * Math.PI, $ = ie(m[v], n, l, c, i);
        for (let P = 0; P < M.length; P += 2)
          A[s++] = (k + 0.5) / p, A[s++] = (g + 0.5) / u, A[s++] = M[P], A[s++] = M[P + 1] + b, A[s++] = $, A[s++] = m[v];
        const T = 7 * (s / h - 1);
        y[f++] = T, y[f++] = T + 1, y[f++] = T + 2, y[f++] = T + 0, y[f++] = T + 4, y[f++] = T + 3, y[f++] = T + 0, y[f++] = T + 2, y[f++] = T + 3, y[f++] = T + 2, y[f++] = T + 5, y[f++] = T + 3, y[f++] = T + 5, y[f++] = T + 6, y[f++] = T + 3;
      }
    }
  return { vertexData: A, indexData: y };
}
const ut = [];
function le(t, e) {
  if (ut.length === 0)
    for (let u = 0; u < 30; u++)
      ut.push(te(5 * u, 0, !e.invertDirection));
  const n = mt(at.fromJSON(e.inputUnit), "knots"), { width: r, height: a, mask: i } = t, l = t.pixels[0], c = t.pixels[1], h = 6, o = [], s = [];
  let f = 0, p = 0;
  for (let u = 0; u < a; u++)
    for (let d = 0; d < r; d++) {
      const m = u * r + d, x = l[m] * n;
      if ((!i || i[u * r + d]) && x >= dt) {
        const w = (c[m] + 360) % 360 / 180 * Math.PI, { pennants: A, barbs: y, shaft: M } = ut[Math.min(Math.floor(x / 5), 29)];
        if (A.length + y.length === 0)
          continue;
        let g = o.length / h;
        const k = (d + 0.5) / r, v = (u + 0.5) / a;
        for (let b = 0; b < A.length; b += 2)
          o[f++] = k, o[f++] = v, o[f++] = A[b], o[f++] = A[b + 1] + w, o[f++] = 0, o[f++] = x;
        for (let b = 0; b < y.length; b += 2)
          o[f++] = k, o[f++] = v, o[f++] = y[b], o[f++] = y[b + 1] + w, o[f++] = 0, o[f++] = x;
        for (let b = 0; b < M.length; b += 2)
          o[f++] = k, o[f++] = v, o[f++] = M[b], o[f++] = M[b + 1] + w, o[f++] = 0, o[f++] = x;
        for (let b = 0; b < A.length / 6; b++)
          s[p++] = g, s[p++] = g + 1, s[p++] = g + 2, g += 3;
        for (let b = 0; b < y.length / 8; b++)
          s[p++] = g, s[p++] = g + 1, s[p++] = g + 2, s[p++] = g + 1, s[p++] = g + 2, s[p++] = g + 3, g += 4;
        s[p++] = g + 0, s[p++] = g + 1, s[p++] = g + 2, s[p++] = g + 1, s[p++] = g + 3, s[p++] = g + 2, g += 4;
      }
    }
  return { vertexData: new Float32Array(o), indexData: new Uint32Array(s) };
}
function oe(t, e) {
  let r = 0, a = 0;
  const { width: i, height: l, mask: c } = t, h = t.pixels[0], o = [], s = [], f = mt(at.fromJSON(e.inputUnit), "knots"), p = e.style === "wind_speed" ? dt : Number.MAX_VALUE;
  for (let u = 0; u < l; u++)
    for (let d = 0; d < i; d++) {
      const m = h[u * i + d] * f;
      if ((!c || c[u * i + d]) && m < p) {
        for (let w = 0; w < 4; w++)
          o[r++] = (d + 0.5) / i, o[r++] = (u + 0.5) / l, o[r++] = w < 2 ? -0.5 : 0.5, o[r++] = w % 2 == 0 ? -0.5 : 0.5, o[r++] = 0, o[r++] = m;
        const x = 4 * (r / 24 - 1);
        s[a++] = x, s[a++] = x + 1, s[a++] = x + 2, s[a++] = x + 1, s[a++] = x + 2, s[a++] = x + 3;
      }
    }
  return { vertexData: new Float32Array(o), indexData: new Uint32Array(s) };
}
function De(t, e) {
  return e.style === "simple_scalar" ? oe(t, e) : e.style === "wind_speed" ? le(t, e) : se(t, e);
}
function Le(t, e, n, r = [0, 0], a = 0.5) {
  const { width: i, height: l, mask: c } = t, [h, o] = t.pixels, [s, f] = r, p = Math.round((i - s) / n), u = Math.round((l - f) / n), d = p * u, m = new Float32Array(d), x = new Float32Array(d), w = new Uint8Array(d), A = e === "vector-uv";
  for (let M = 0; M < u; M++)
    for (let g = 0; g < p; g++) {
      let k = 0;
      const v = M * p + g, b = Math.max(0, M * n + f), $ = Math.max(0, g * n + s), T = Math.min(l, b + n), P = Math.min(i, $ + n);
      for (let U = b; U < T; U++)
        for (let I = $; I < P; I++) {
          const C = U * i + I;
          if (!c || c[C]) {
            k++;
            const B = A ? [h[C], o[C]] : [h[C], (360 + o[C]) % 360], [S, F] = A ? B : Bt(B);
            m[v] += S, x[v] += F;
          }
        }
      if (k >= (T - b) * (P - $) * (1 - a)) {
        w[v] = 1;
        const [U, I] = St([m[v] / k, x[v] / k]);
        m[v] = U, x[v] = I;
      } else
        w[v] = 0, m[v] = 0, x[v] = 0;
    }
  const y = new _({ width: p, height: u, pixels: [m, x], mask: w });
  return y.updateStatistics(), y;
}
const J = Y.getLogger("geoscene.views.2d.engine.flow.dataUtils"), re = 10;
async function Re(t, e, n, r) {
  const a = performance.now(), i = ae(e, n), l = performance.now(), c = ce(e, i, n.width, n.height), h = performance.now(), o = ue(c, !0), s = performance.now(), f = t === "Streamlines" ? pe(o, re) : de(o), p = performance.now();
  return nt("geoscene-2d-profiler") && (J.info("I.1", "_createFlowFieldFromData (ms)", Math.round(l - a)), J.info("I.2", "_getStreamlines (ms)", Math.round(h - l)), J.info("I.3", "createAnimatedLinesData (ms)", Math.round(s - h)), J.info("I.4", "create{Streamlines|Particles}Mesh (ms)", Math.round(p - s)), J.info("I.5", "createFlowMesh (ms)", Math.round(p - a)), J.info("I.6", "Mesh size (bytes)", f.vertexData.buffer.byteLength + f.indexData.buffer.byteLength)), await Promise.resolve(), Et(r), f;
}
function ae(t, e) {
  const n = fe(e.data, e.width, e.height, t.smoothing);
  return t.interpolate ? (r, a) => {
    const i = Math.floor(r), l = Math.floor(a);
    if (i < 0 || i >= e.width)
      return [0, 0];
    if (l < 0 || l >= e.height)
      return [0, 0];
    const c = r - i, h = a - l, o = i, s = l, f = i < e.width - 1 ? i + 1 : i, p = l < e.height - 1 ? l + 1 : l, u = n[2 * (s * e.width + o)], d = n[2 * (s * e.width + f)], m = n[2 * (p * e.width + o)], x = n[2 * (p * e.width + f)], w = n[2 * (s * e.width + o) + 1], A = n[2 * (s * e.width + f) + 1];
    return [(u * (1 - h) + m * h) * (1 - c) + (d * (1 - h) + x * h) * c, (w * (1 - h) + n[2 * (p * e.width + o) + 1] * h) * (1 - c) + (A * (1 - h) + n[2 * (p * e.width + f) + 1] * h) * c];
  } : (r, a) => {
    const i = Math.round(r), l = Math.round(a);
    return i < 0 || i >= e.width || l < 0 || l >= e.height ? [0, 0] : [n[2 * (l * e.width + i)], n[2 * (l * e.width + i) + 1]];
  };
}
function he(t, e, n, r, a, i, l, c, h) {
  const o = [];
  let s = n, f = r, p = 0, [u, d] = e(s, f);
  u *= t.velocityScale, d *= t.velocityScale;
  const m = Math.sqrt(u * u + d * d);
  let x, w;
  o.push({ x: s, y: f, t: p, speed: m });
  for (let A = 0; A < t.verticesPerLine; A++) {
    let [y, M] = e(s, f);
    y *= t.velocityScale, M *= t.velocityScale;
    const g = Math.sqrt(y * y + M * M);
    if (g < t.minSpeedThreshold)
      return o;
    const k = y / g, v = M / g;
    if (s += k * t.segmentLength, f += v * t.segmentLength, p += t.segmentLength / g, Math.acos(k * x + v * w) > t.maxTurnAngle)
      return o;
    if (t.collisions) {
      const b = Math.round(s * h), $ = Math.round(f * h);
      if (b < 0 || b > l - 1 || $ < 0 || $ > c - 1)
        return o;
      const T = i[$ * l + b];
      if (T !== -1 && T !== a)
        return o;
      i[$ * l + b] = a;
    }
    o.push({ x: s, y: f, t: p, speed: g }), x = k, w = v;
  }
  return o;
}
function ce(t, e, n, r) {
  const a = [], i = new Ut(), l = 1 / Math.max(t.lineCollisionWidth, 1), c = Math.round(n * l), h = Math.round(r * l), o = new Int32Array(c * h);
  for (let f = 0; f < o.length; f++)
    o[f] = -1;
  const s = [];
  for (let f = 0; f < r; f += t.lineSpacing)
    for (let p = 0; p < n; p += t.lineSpacing)
      s.push({ x: p, y: f, sort: i.getFloat() });
  s.sort((f, p) => f.sort - p.sort);
  for (const { x: f, y: p } of s)
    if (i.getFloat() < t.density) {
      const u = he(t, e, f, p, a.length, o, c, h, l);
      if (u.length < 2)
        continue;
      a.push(u);
    }
  return a;
}
function fe(t, e, n, r) {
  if (r === 0)
    return t;
  const a = Math.round(3 * r), i = new Array(2 * a + 1);
  let l = 0;
  for (let o = -a; o <= a; o++) {
    const s = Math.exp(-o * o / (r * r));
    i[o + a] = s, l += s;
  }
  for (let o = -a; o <= a; o++)
    i[o + a] /= l;
  const c = new Float32Array(t.length);
  for (let o = 0; o < n; o++)
    for (let s = 0; s < e; s++) {
      let f = 0, p = 0;
      for (let u = -a; u <= a; u++) {
        if (s + u < 0 || s + u >= e)
          continue;
        const d = i[u + a];
        f += d * t[2 * (o * e + (s + u))], p += d * t[2 * (o * e + (s + u)) + 1];
      }
      c[2 * (o * e + s)] = f, c[2 * (o * e + s) + 1] = p;
    }
  const h = new Float32Array(t.length);
  for (let o = 0; o < e; o++)
    for (let s = 0; s < n; s++) {
      let f = 0, p = 0;
      for (let u = -a; u <= a; u++) {
        if (s + u < 0 || s + u >= n)
          continue;
        const d = i[u + a];
        f += d * c[2 * ((s + u) * e + o)], p += d * c[2 * ((s + u) * e + o) + 1];
      }
      h[2 * (s * e + o)] = f, h[2 * (s * e + o) + 1] = p;
    }
  return h;
}
function ue(t, e) {
  const n = new Ut(), r = t.reduce((h, o) => h + o.length, 0), a = new Float32Array(4 * r), i = new Array(t.length);
  let l = 0, c = 0;
  for (const h of t) {
    const o = l;
    for (const s of h)
      a[4 * l] = s.x, a[4 * l + 1] = s.y, a[4 * l + 2] = s.t, a[4 * l + 3] = s.speed, l++;
    i[c++] = { startVertex: o, numberOfVertices: h.length, totalTime: h[h.length - 1].t, timeSeed: e ? n.getFloat() : 0 };
  }
  return { lineVertices: a, lineDescriptors: i };
}
function pe(t, e) {
  const { lineVertices: r, lineDescriptors: a } = t;
  let i = 0, l = 0;
  for (const u of a)
    i += 2 * u.numberOfVertices, l += 6 * (u.numberOfVertices - 1);
  const c = new Float32Array(i * 9), h = new Uint32Array(l);
  let o = 0, s = 0;
  function f() {
    h[s++] = o - 2, h[s++] = o, h[s++] = o - 1, h[s++] = o, h[s++] = o + 1, h[s++] = o - 1;
  }
  function p(u, d, m, x, w, A, y, M) {
    const g = o * 9;
    let k = 0;
    c[g + k++] = u, c[g + k++] = d, c[g + k++] = 1, c[g + k++] = m, c[g + k++] = A, c[g + k++] = y, c[g + k++] = x / 2, c[g + k++] = w / 2, c[g + k++] = M, o++, c[g + k++] = u, c[g + k++] = d, c[g + k++] = -1, c[g + k++] = m, c[g + k++] = A, c[g + k++] = y, c[g + k++] = -x / 2, c[g + k++] = -w / 2, c[g + k++] = M, o++;
  }
  for (const u of a) {
    const { totalTime: d, timeSeed: m } = u;
    let x = null, w = null, A = null, y = null, M = null, g = null;
    for (let k = 0; k < u.numberOfVertices; k++) {
      const v = r[4 * (u.startVertex + k)], b = r[4 * (u.startVertex + k) + 1], $ = r[4 * (u.startVertex + k) + 2], T = r[4 * (u.startVertex + k) + 3];
      let P = null, U = null, I = null, C = null;
      if (k > 0) {
        P = v - x, U = b - w;
        const B = Math.sqrt(P * P + U * U);
        if (P /= B, U /= B, k > 1) {
          let S = P + M, F = U + g;
          const V = Math.sqrt(S * S + F * F);
          S /= V, F /= V;
          const E = Math.min(1 / (S * P + F * U), e);
          S *= E, F *= E, I = -F, C = S;
        } else
          I = -U, C = P;
        I !== null && C !== null && (p(x, w, A, I, C, d, m, T), f());
      }
      x = v, w = b, A = $, M = P, g = U, y = T;
    }
    p(x, w, A, -g, M, d, m, y);
  }
  return { vertexData: c, indexData: h };
}
function de(t) {
  const { lineVertices: a, lineDescriptors: i } = t;
  let l = 0, c = 0;
  for (const B of i) {
    const S = B.numberOfVertices - 1;
    l += 4 * S * 2, c += 6 * S * 2;
  }
  const h = new Float32Array(l * 16), o = new Uint32Array(c);
  let s, f, p, u, d, m, x, w, A, y, M, g, k, v, b = 0, $ = 0;
  function T() {
    o[$++] = b - 8, o[$++] = b - 7, o[$++] = b - 6, o[$++] = b - 7, o[$++] = b - 5, o[$++] = b - 6, o[$++] = b - 4, o[$++] = b - 3, o[$++] = b - 2, o[$++] = b - 3, o[$++] = b - 1, o[$++] = b - 2;
  }
  function P(B, S, F, V, E, q, R, G, X, H, et, K, it, st) {
    const D = b * 16;
    let N = 0;
    for (const ct of [1, 2])
      for (const Ft of [1, 2, 3, 4])
        h[D + N++] = B, h[D + N++] = S, h[D + N++] = F, h[D + N++] = V, h[D + N++] = R, h[D + N++] = G, h[D + N++] = X, h[D + N++] = H, h[D + N++] = ct, h[D + N++] = Ft, h[D + N++] = it, h[D + N++] = st, h[D + N++] = E / 2, h[D + N++] = q / 2, h[D + N++] = et / 2, h[D + N++] = K / 2, b++;
  }
  function U(B, S) {
    let F = A + M, V = y + g;
    const E = Math.sqrt(F * F + V * V);
    F /= E, V /= E;
    const q = A * F + y * V;
    F /= q, V /= q;
    let R = M + k, G = g + v;
    const X = Math.sqrt(R * R + G * G);
    R /= X, G /= X;
    const H = M * R + g * G;
    R /= H, G /= H, P(s, f, p, u, -V, F, d, m, x, w, -G, R, B, S), T();
  }
  function I(B, S, F, V, E, q) {
    if (A = M, y = g, M = k, g = v, A == null && y == null && (A = M, y = g), d != null && m != null) {
      k = B - d, v = S - m;
      const R = Math.sqrt(k * k + v * v);
      k /= R, v /= R;
    }
    A != null && y != null && U(E, q), s = d, f = m, p = x, u = w, d = B, m = S, x = F, w = V;
  }
  function C(B, S) {
    A = M, y = g, M = k, g = v, A == null && y == null && (A = M, y = g), A != null && y != null && U(B, S);
  }
  for (const B of i) {
    s = null, f = null, p = null, u = null, d = null, m = null, x = null, w = null, A = null, y = null, M = null, g = null, k = null, v = null;
    const { totalTime: S, timeSeed: F } = B;
    for (let V = 0; V < B.numberOfVertices; V++)
      I(a[4 * (B.startVertex + V)], a[4 * (B.startVertex + V) + 1], a[4 * (B.startVertex + V) + 2], a[4 * (B.startVertex + V) + 3], S, F);
    C(S, F);
  }
  return { vertexData: h, indexData: o };
}
function bt(t, e) {
  const n = e.pixels, { width: r, height: a } = e, i = new Float32Array(r * a * 2), l = e.mask || new Uint8Array(r * a * 2);
  if (e.mask || l.fill(255), t === "vector-uv")
    for (let c = 0; c < r * a; c++)
      i[2 * c] = n[0][c], i[2 * c + 1] = -n[1][c];
  else if (t === "vector-magdir")
    for (let c = 0; c < r * a; c++) {
      const h = n[0][c], o = Gt(n[1][c]), s = Math.cos(o - Math.PI / 2), f = Math.sin(o - Math.PI / 2);
      i[2 * c] = s * h, i[2 * c + 1] = f * h;
    }
  return { data: i, mask: l, width: r, height: a };
}
async function Ne(t, e, n, r, a, i) {
  const l = performance.now(), c = jt(e.spatialReference);
  if (!c) {
    const M = await vt(t, e, n, r, a, i);
    return nt("geoscene-2d-profiler") && J.info("I.7", "loadImagery, early exit (ms)", Math.round(performance.now() - l)), nt("geoscene-2d-profiler") && J.info("I.9", "Number of parts", 1), M;
  }
  const [h, o] = c.valid, s = o - h, f = Math.ceil(e.width / s), p = e.width / f, u = Math.round(n / f);
  let d = e.xmin;
  const m = [], x = performance.now();
  for (let M = 0; M < f; M++) {
    const g = new Ot({ xmin: d, xmax: d + p, ymin: e.ymin, ymax: e.ymax, spatialReference: e.spatialReference });
    m.push(vt(t, g, u, r, a, i)), d += p;
  }
  const w = await Promise.all(m);
  nt("geoscene-2d-profiler") && J.info("I.8", "All calls to _fetchPart (ms)", Math.round(performance.now() - x)), nt("geoscene-2d-profiler") && J.info("I.9", "Number of parts", w.length);
  const A = { data: new Float32Array(n * r * 2), mask: new Uint8Array(n * r), width: n, height: r };
  let y = 0;
  for (const M of w) {
    for (let g = 0; g < M.height; g++)
      for (let k = 0; k < M.width; k++)
        y + k >= n || (A.data[2 * (g * n + y + k)] = M.data[2 * (g * M.width + k)], A.data[2 * (g * n + y + k) + 1] = M.data[2 * (g * M.width + k) + 1], A.mask[g * n + y + k] = M.mask[g * M.width + k]);
    y += M.width;
  }
  return nt("geoscene-2d-profiler") && J.info("I.10", "loadImagery, general exit (ms)", Math.round(performance.now() - l)), A;
}
async function vt(t, e, n, r, a, i) {
  const l = { requestProjectedLocalDirections: !0, signal: i };
  if (a != null && (l.timeExtent = a), t.type === "imagery") {
    await t.load({ signal: i });
    const o = t.rasterInfo.dataType, s = await t.fetchImage(e, n, r, l);
    return s && s.pixelData != null && s.pixelData.pixelBlock != null ? bt(o, s.pixelData.pixelBlock) : { data: new Float32Array(n * r * 2), mask: new Uint8Array(n * r), width: n, height: r };
  }
  await t.load({ signal: i });
  const c = t.rasterInfo.dataType, h = await t.fetchPixels(e, n, r, l);
  return h && h.pixelBlock != null ? bt(c, h.pixelBlock) : { data: new Float32Array(n * r * 2), mask: new Uint8Array(n * r), width: n, height: r };
}
export {
  ve as A,
  Be as I,
  Te as M,
  Ce as R,
  Le as S,
  Ie as T,
  Jt as U,
  Se as W,
  oe as _,
  Fe as a,
  De as b,
  xe as c,
  at as d,
  mt as e,
  At as f,
  Ne as g,
  ht as h,
  Me as i,
  be as j,
  Ae as k,
  St as l,
  _e as m,
  ke as n,
  L as o,
  Ve as p,
  wt as q,
  ye as r,
  Re as s,
  xt as t,
  _ as u,
  we as v,
  $e as w,
  Ue as x,
  Pe as y,
  Pt as z
};
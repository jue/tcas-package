import { s as Z, e as G, d as R, c7 as tt, a as et, aD as it, y as st, l as L, S as nt, r as W } from "./index-j1oaLRcp.js";
var j;
const V = Z.getLogger("geoscene.layers.support.PixelBlock");
let I = j = class extends it {
  constructor(t) {
    super(t), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = !1, this.pixels = null, this.statistics = null;
  }
  static createEmptyBand(t, s) {
    return new (j.getPixelArrayConstructor(t))(s);
  }
  static getPixelArrayConstructor(t) {
    let s;
    switch (t) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        s = Uint8Array;
        break;
      case "u16":
        s = Uint16Array;
        break;
      case "u32":
        s = Uint32Array;
        break;
      case "s8":
        s = Int8Array;
        break;
      case "s16":
        s = Int16Array;
        break;
      case "s32":
        s = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        s = Float32Array;
        break;
      case "f64":
        s = Float64Array;
    }
    return s;
  }
  castPixelType(t) {
    if (!t)
      return "f32";
    let s = t.toLowerCase();
    return ["u1", "u2", "u4"].indexOf(s) > -1 ? s = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].indexOf(s) === -1 && (s = "f32"), s;
  }
  getPlaneCount() {
    return this.pixels && this.pixels.length;
  }
  addData(t) {
    if (!t.pixels || t.pixels.length !== this.width * this.height)
      throw new st("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t.pixels), this.statistics.push(t.statistics || { minValue: null, maxValue: null });
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
    this.statistics = this.pixels.map((i) => this._calculateBandStatistics(i, this.mask));
    const t = this.mask;
    let s = 0;
    if (t)
      for (let i = 0; i < t.length; i++)
        t[i] && s++;
    else
      s = this.width * this.height;
    this.validPixelCount = s;
  }
  clamp(t) {
    if (!t || t === "f64" || t === "f32")
      return;
    let s;
    switch (t) {
      case "u8":
        s = [0, 255];
        break;
      case "u16":
        s = [0, 65535];
        break;
      case "u32":
        s = [0, 4294967295];
        break;
      case "s8":
        s = [-128, 127];
        break;
      case "s16":
        s = [-32768, 32767];
        break;
      case "s32":
        s = [-2147483648, 2147483647];
        break;
      default:
        s = [-34e38, 34e38];
    }
    const [i, r] = s, f = this.pixels, o = this.width * this.height, a = f.length;
    let c, e, u;
    const p = [];
    for (let n = 0; n < a; n++) {
      u = j.createEmptyBand(t, o), c = f[n];
      for (let l = 0; l < o; l++)
        e = c[l], u[l] = e > r ? r : e < i ? i : e;
      p.push(u);
    }
    this.pixels = p, this.pixelType = t;
  }
  extractBands(t) {
    if (L(t) || t.length === 0 || this.pixels == null || this.pixels.length === 0)
      return this;
    const s = this.pixels.length, i = t.some((f) => f >= this.pixels.length), r = s === t.length && !t.some((f, o) => f !== o);
    return i || r ? this : new j({ pixelType: this.pixelType, width: this.width, height: this.height, mask: this.mask, validPixelCount: this.validPixelCount, maskIsAlpha: this.maskIsAlpha, pixels: t.map((f) => this.pixels[f]), statistics: this.statistics && t.map((f) => this.statistics[f]) });
  }
  clone() {
    const t = new j({ width: this.width, height: this.height, pixelType: this.pixelType, maskIsAlpha: this.maskIsAlpha, validPixelCount: this.validPixelCount });
    let s;
    this.mask && (this.mask instanceof Uint8Array ? t.mask = new Uint8Array(this.mask) : t.mask = this.mask.slice(0));
    const i = j.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t.pixels = [];
      const r = this.pixels[0].slice;
      for (s = 0; s < this.pixels.length; s++)
        t.pixels[s] = r ? this.pixels[s].slice(0, this.pixels[s].length) : new i(this.pixels[s]);
    }
    if (this.statistics)
      for (t.statistics = [], s = 0; s < this.statistics.length; s++)
        t.statistics[s] = nt(this.statistics[s]);
    return t;
  }
  _fillFrom8Bit(t) {
    const { mask: s, maskIsAlpha: i, pixels: r } = this;
    if (!t || !r || !r.length)
      return void V.error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let f, o, a, c;
    f = o = a = r[0], r.length >= 3 ? (o = r[1], a = r[2]) : r.length === 2 && (o = r[1]);
    const e = new Uint32Array(t), u = this.width * this.height;
    if (f.length === u)
      if (s && s.length === u)
        if (i)
          for (c = 0; c < u; c++)
            s[c] && (e[c] = s[c] << 24 | a[c] << 16 | o[c] << 8 | f[c]);
        else
          for (c = 0; c < u; c++)
            s[c] && (e[c] = 255 << 24 | a[c] << 16 | o[c] << 8 | f[c]);
      else
        for (c = 0; c < u; c++)
          e[c] = 255 << 24 | a[c] << 16 | o[c] << 8 | f[c];
    else
      V.error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t) {
    const { pixels: s, mask: i, statistics: r } = this;
    if (!t || !s || !s.length)
      return void V.error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const f = this.pixelType;
    let o = 1, a = 0, c = 1;
    if (r && r.length > 0)
      a = r.map((m) => m.minValue).reduce((m, g) => Math.min(m, g)), c = r.map((m) => m.maxValue - m.minValue).reduce((m, g) => Math.max(m, g)), o = 255 / c;
    else {
      let m = 255;
      f === "s8" ? (a = -128, m = 127) : f === "u16" ? m = 65535 : f === "s16" ? (a = -32768, m = 32767) : f === "u32" ? m = 4294967295 : f === "s32" ? (a = -2147483648, m = 2147483647) : f === "f32" ? (a = -34e38, m = 34e38) : f === "f64" && (a = -Number.MAX_VALUE, m = Number.MAX_VALUE), o = 255 / (m - a);
    }
    const e = new Uint32Array(t), u = this.width * this.height;
    let p, n, l, h, x;
    if (p = n = l = s[0], p.length !== u)
      return V.error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (s.length >= 2)
      if (n = s[1], s.length >= 3 && (l = s[2]), i && i.length === u)
        for (h = 0; h < u; h++)
          i[h] && (e[h] = 255 << 24 | (l[h] - a) * o << 16 | (n[h] - a) * o << 8 | (p[h] - a) * o);
      else
        for (h = 0; h < u; h++)
          e[h] = 255 << 24 | (l[h] - a) * o << 16 | (n[h] - a) * o << 8 | (p[h] - a) * o;
    else if (i && i.length === u)
      for (h = 0; h < u; h++)
        x = (p[h] - a) * o, i[h] && (e[h] = 255 << 24 | x << 16 | x << 8 | x);
    else
      for (h = 0; h < u; h++)
        x = (p[h] - a) * o, e[h] = 255 << 24 | x << 16 | x << 8 | x;
  }
  _fillFrom32Bit(t) {
    const { pixels: s, mask: i } = this;
    if (!t || !s || !s.length)
      return V.error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let r, f, o, a;
    r = f = o = s[0], s.length >= 3 ? (f = s[1], o = s[2]) : s.length === 2 && (f = s[1]);
    const c = this.width * this.height;
    if (r.length !== c)
      return V.error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let e = 0;
    if (i && i.length === c)
      for (a = 0; a < c; a++)
        t[e++] = r[a], t[e++] = f[a], t[e++] = o[a], t[e++] = 1 & i[a];
    else
      for (a = 0; a < c; a++)
        t[e++] = r[a], t[e++] = f[a], t[e++] = o[a], t[e++] = 1;
  }
  _calculateBandStatistics(t, s) {
    let i = 1 / 0, r = -1 / 0;
    const f = t.length;
    let o, a = 0;
    if (s)
      for (o = 0; o < f; o++)
        s[o] && (a = t[o], i = a < i ? a : i, r = a > r ? a : r);
    else
      for (o = 0; o < f; o++)
        a = t[o], i = a < i ? a : i, r = a > r ? a : r;
    return { minValue: i, maxValue: r };
  }
};
G([R({ json: { write: !0 } })], I.prototype, "width", void 0), G([R({ json: { write: !0 } })], I.prototype, "height", void 0), G([R({ json: { write: !0 } })], I.prototype, "pixelType", void 0), G([tt("pixelType")], I.prototype, "castPixelType", null), G([R({ json: { write: !0 } })], I.prototype, "validPixelCount", void 0), G([R({ json: { write: !0 } })], I.prototype, "mask", void 0), G([R({ json: { write: !0 } })], I.prototype, "maskIsAlpha", void 0), G([R({ json: { write: !0 } })], I.prototype, "pixels", void 0), G([R({ json: { write: !0 } })], I.prototype, "statistics", void 0), I = j = G([et("geoscene.layers.support.PixelBlock")], I);
const $ = I;
function S(t) {
  return W(t) && t.declaredClass === "geoscene.layers.support.PixelBlock" && t.pixels && t.pixels.length > 0;
}
function pt(t, s) {
  if (s == null || !s.length || !S(t))
    return t;
  const i = t.pixels.length;
  return s && s.some((r) => r >= i) || i === 1 && s.length === 1 && s[0] === 0 ? t : i !== s.length || s.some((r, f) => r !== f) ? new $({ pixelType: t.pixelType, width: t.width, height: t.height, mask: t.mask, validPixelCount: t.validPixelCount, maskIsAlpha: t.maskIsAlpha, pixels: s.map((r) => t.pixels[r]), statistics: t.statistics && s.map((r) => t.statistics[r]) }) : t;
}
function xt(t) {
  if (!t)
    return;
  const s = t.colormap;
  if (!s || s.length === 0)
    return;
  const i = s.sort((n, l) => n[0] - l[0]);
  let r = 0;
  i[0][0] < 0 && (r = i[0][0]);
  const f = Math.max(256, i[i.length - 1][0] - r + 1), o = new Uint8Array(4 * f), a = [];
  let c, e = 0, u = 0;
  const p = i[0].length === 5;
  if (f > 65536)
    return i.forEach((n) => {
      a[n[0] - r] = p ? n.slice(1) : n.slice(1).concat([255]);
    }), { indexed2DColormap: a, offset: r, alphaSpecified: p };
  if (t.fillUnspecified)
    for (c = i[u], e = c[0] - r; e < f; e++)
      o[4 * e] = c[1], o[4 * e + 1] = c[2], o[4 * e + 2] = c[3], o[4 * e + 3] = p ? c[4] : 255, e === c[0] - r && (c = u === i.length - 1 ? c : i[++u]);
  else
    for (e = 0; e < i.length; e++)
      c = i[e], u = 4 * (c[0] - r), o[u] = c[1], o[u + 1] = c[2], o[u + 2] = c[3], o[u + 3] = p ? c[4] : 255;
  return { indexedColormap: o, offset: r, alphaSpecified: p };
}
function mt(t, s) {
  if (!S(t) || !s && (s.indexedColormap || s.indexed2DColormap))
    return t;
  const i = t.clone(), r = i.pixels;
  let f = i.mask;
  const o = i.width * i.height;
  if (r.length !== 1)
    return t;
  const { indexedColormap: a, indexed2DColormap: c, offset: e, alphaSpecified: u } = s, p = a.length - 1;
  let n = 0;
  const l = r[0], h = new Uint8Array(l.length), x = new Uint8Array(l.length), m = new Uint8Array(l.length);
  let g, d = 0;
  if (a)
    if (f)
      for (n = 0; n < o; n++)
        f[n] && (d = 4 * (l[n] - e), d < e || d > p ? f[n] = 0 : (h[n] = a[d], x[n] = a[d + 1], m[n] = a[d + 2], f[n] = a[d + 3]));
    else {
      for (f = new Uint8Array(o), n = 0; n < o; n++)
        d = 4 * (l[n] - e), d < e || d > p ? f[n] = 0 : (h[n] = a[d], x[n] = a[d + 1], m[n] = a[d + 2], f[n] = a[d + 3]);
      i.mask = f;
    }
  else if (f)
    for (n = 0; n < o; n++)
      f[n] && (g = c[l[n]], h[n] = g[0], x[n] = g[1], m[n] = g[2], f[n] = g[3]);
  else {
    for (f = new Uint8Array(o), n = 0; n < o; n++)
      g = c[l[n]], h[n] = g[0], x[n] = g[1], m[n] = g[2], f[n] = g[3];
    i.mask = f;
  }
  return i.pixels = [h, x, m], i.statistics = null, i.pixelType = "u8", i.maskIsAlpha = u, i;
}
function dt(t) {
  if (!S(t))
    return null;
  t.statistics || t.updateStatistics();
  const { pixels: s, mask: i, pixelType: r, statistics: f } = t, o = t.width * t.height, a = s.length;
  let c, e, u, p, n;
  const l = [], h = [];
  let x, m, g, d, y, k, w, T, b, M;
  const U = 256;
  for (p = 0; p < a; p++) {
    if (x = new Uint32Array(U), g = s[p], r === "u8")
      if (c = -0.5, e = 255.5, i)
        for (n = 0; n < o; n++)
          i[n] && x[g[n]]++;
      else
        for (n = 0; n < o; n++)
          x[g[n]]++;
    else {
      if (c = f[p].minValue, e = f[p].maxValue, u = (e - c) / U, m = new Uint32Array(U + 1), i)
        for (n = 0; n < o; n++)
          i[n] && m[Math.floor((g[n] - c) / u)]++;
      else
        for (n = 0; n < o; n++)
          m[Math.floor((g[n] - c) / u)]++;
      for (n = 0; n < 255; n++)
        x[n] = m[n];
      x[255] = m[255] + m[256];
    }
    for (l.push({ min: c, max: e, size: U, counts: x }), d = 0, y = 0, T = 0, n = 0; n < U; n++)
      d += x[n], y += n * x[n];
    for (b = y / d, n = 0; n < U; n++)
      T += x[n] * (n - b) ** 2;
    M = Math.sqrt(T / (d - 1)), u = (e - c) / U, k = (b + 0.5) * u + c, w = M * u, h.push({ min: c, max: e, avg: k, stddev: w });
  }
  return { statistics: h, histograms: l };
}
function gt(t) {
  const s = [];
  for (let i = 0; i < t.length; i++) {
    const { min: r, max: f, size: o, counts: a } = t[i];
    let c = 0, e = 0;
    for (let x = 0; x < o; x++)
      c += a[x], e += x * a[x];
    const u = e / c;
    let p = 0;
    for (let x = 0; x < o; x++)
      p += a[x] * (x - u) ** 2;
    const n = (f - r) / o, l = (u + 0.5) * n + r, h = Math.sqrt(p / (c - 1)) * n;
    s.push({ min: r, max: f, avg: l, stddev: h });
  }
  return s;
}
function yt(t) {
  const { minCutOff: s, maxCutOff: i, gamma: r, pixelType: f } = t, o = t.outMin || 0, a = t.outMax || 255;
  if (["u8", "u16", "s8", "s16"].indexOf(f) === -1)
    return null;
  const c = s.length;
  let e, u, p = 0;
  f === "s8" ? p = -127 : f === "s16" && (p = -32767);
  let n = 256;
  ["u16", "s16"].indexOf(f) > -1 && (n = 65536);
  const l = [], h = a - o;
  for (e = 0; e < c; e++)
    l[e] = i[e] - s[e], h / (i[e] - s[e]);
  const x = r && r.length >= c, m = [];
  if (x)
    for (e = 0; e < c; e++)
      r[e] > 1 ? r[e] > 2 ? m[e] = 6.5 + (r[e] - 2) ** 2.5 : m[e] = 6.5 + 100 * (2 - r[e]) ** 4 : m[e] = 1;
  let g;
  const d = [];
  let y, k, w;
  if (x)
    for (e = 0; e < c; e++) {
      for (w = [], u = 0; u < n; u++)
        y = u + p, g = (y - s[e]) / l[e], k = 1, r[e] > 1 && (k -= (1 / h) ** (g * m[e])), y < i[e] && y > s[e] ? w[u] = Math.floor(k * h * g ** (1 / r[e])) + o : y >= i[e] ? w[u] = a : w[u] = o;
      d[e] = w;
    }
  else
    for (e = 0; e < c; e++) {
      for (w = [], u = 0; u < n; u++)
        y = u + p, y <= s[e] ? w[u] = o : y >= i[e] ? w[u] = a : w[u] = Math.floor((y - s[e]) / l[e] * h) + o;
      d[e] = w;
    }
  if (t.contrastOffset != null) {
    const T = lt(t.contrastOffset, t.brightnessOffset);
    for (e = 0; e < c; e++)
      for (w = d[e], u = 0; u < n; u++)
        w[u] = T[w[u]];
  }
  return { lut: d, offset: p };
}
function lt(t, s) {
  const i = Math.min(Math.max(t, -100), 100), r = Math.min(Math.max(s, -100), 100), f = 255, o = 128;
  let a, c;
  const e = new Uint8Array(256);
  for (a = 0; a < 256; a++)
    i > 0 && i < 100 ? c = (200 * a - 100 * f + 2 * f * r) / (2 * (100 - i)) + o : i <= 0 && i > -100 ? c = (200 * a - 100 * f + 2 * f * r) * (100 + i) / 2e4 + o : i === 100 ? (c = 200 * a - 100 * f + (f + 1) * (100 - i) + 2 * f * r, c = c > 0 ? f : 0) : i === -100 && (c = o), e[a] = c > f ? f : c < 0 ? 0 : c;
  return e;
}
function wt(t, s = 256) {
  s = Math.min(s, 256);
  const { size: i, counts: r } = t, f = new Uint8Array(i), o = r.reduce((p, n) => p + n / s, 0);
  let a = 0, c = 0, e = 0, u = o;
  for (let p = 0; p < i; p++)
    if (e += r[p], !(p < i - 1 && e + r[p + 1] < u)) {
      for (; a < s - 1 && u < e; )
        a++, u += o;
      for (let n = c; n <= p; n++)
        f[n] = a;
      c = p + 1;
    }
  for (let p = c; p < i; p++)
    f[p] = s - 1;
  return f;
}
function kt(t, s) {
  if (!S(t))
    return null;
  const i = t.clone(), { pixels: r, mask: f } = i, { minCutOff: o, maxCutOff: a, gamma: c } = s, e = s.outMin || 0, u = s.outMax || 255, p = i.width * i.height, n = r.length;
  let l, h, x, m, g;
  const d = u - e, y = [];
  for (l = 0; l < n; l++)
    y[l] = a[l] - o[l], d / (a[l] - o[l]);
  const k = c && c.length >= n, w = [];
  if (k)
    for (l = 0; l < n; l++)
      c[l] > 1 ? c[l] > 2 ? w[l] = 6.5 + (c[l] - 2) ** 2.5 : w[l] = 6.5 + 100 * (2 - c[l]) ** 4 : w[l] = 1;
  if (k)
    if (f != null) {
      for (h = 0; h < p; h++)
        if (f[h])
          for (l = 0; l < n; l++)
            x = r[l][h], g = (x - o[l]) / y[l], m = 1, c[l] > 1 && (m -= (1 / d) ** (g * w[l])), x < a[l] && x > o[l] ? r[l][h] = Math.floor(m * d * g ** (1 / c[l])) + e : x >= a[l] ? r[l][h] = u : r[l][h] = e;
    } else
      for (h = 0; h < p; h++)
        for (l = 0; l < n; l++)
          x = r[l][h], g = (x - o[l]) / y[l], m = 1, c[l] > 1 && (m -= (1 / d) ** (g * w[l])), x < a[l] && x > o[l] ? r[l][h] = Math.floor(m * d * g ** (1 / c[l])) + e : x >= a[l] ? r[l][h] = u : r[l][h] = e;
  else if (f != null) {
    for (h = 0; h < p; h++)
      if (f[h])
        for (l = 0; l < n; l++)
          x = r[l][h], x < a[l] && x > o[l] ? r[l][h] = Math.floor((x - o[l]) / y[l] * d) + e : x >= a[l] ? r[l][h] = u : r[l][h] = e;
  } else
    for (h = 0; h < p; h++)
      for (l = 0; l < n; l++)
        x = r[l][h], x < a[l] && x > o[l] ? r[l][h] = Math.floor((x - o[l]) / y[l] * d) + e : x >= a[l] ? r[l][h] = u : r[l][h] = e;
  return i.pixelType = "u8", i.updateStatistics(), i;
}
function At(t, s) {
  if (!S(t))
    return null;
  const { pixels: i, mask: r } = t, f = t.width * t.height, o = i.length;
  let a = s.lut;
  const { offset: c } = s;
  let e, u;
  a && a[0].length === 1 && (a = i.map(() => a));
  const p = [];
  let n, l, h;
  if (c)
    if (r == null)
      for (e = 0; e < o; e++) {
        for (n = i[e], l = a[e], h = new Uint8Array(f), u = 0; u < f; u++)
          h[u] = l[n[u] - c];
        p.push(h);
      }
    else
      for (e = 0; e < o; e++) {
        for (n = i[e], l = a[e], h = new Uint8Array(f), u = 0; u < f; u++)
          r[u] && (h[u] = l[n[u] - c]);
        p.push(h);
      }
  else if (r == null)
    for (e = 0; e < o; e++) {
      for (n = i[e], l = a[e], h = new Uint8Array(f), u = 0; u < f; u++)
        h[u] = l[n[u]];
      p.push(h);
    }
  else
    for (e = 0; e < o; e++) {
      for (n = i[e], l = a[e], h = new Uint8Array(f), u = 0; u < f; u++)
        r[u] && (h[u] = l[n[u]]);
      p.push(h);
    }
  const x = new $({ width: t.width, height: t.height, pixels: p, mask: r, pixelType: "u8" });
  return x.updateStatistics(), x;
}
function Mt(t, s) {
  if (!S(t))
    return null;
  const i = t.clone(), { pixels: r } = i, f = i.width * i.height, o = s.length, a = Math.floor(o / 2), c = s[Math.floor(a)], e = r[0];
  let u, p, n, l, h, x, m = !1;
  const g = new Uint8Array(f), d = new Uint8Array(f), y = new Uint8Array(f);
  let k = i.mask;
  const w = s[0].mappedColor.length === 4;
  for (k || (k = new Uint8Array(f), k.fill(w ? 255 : 1), i.mask = k), h = 0; h < f; h++)
    if (k[h]) {
      for (u = e[h], m = !1, x = a, p = c, n = 0, l = o - 1; l - n > 1; ) {
        if (u === p.value) {
          m = !0;
          break;
        }
        u > p.value ? n = x : l = x, x = Math.floor((n + l) / 2), p = s[Math.floor(x)];
      }
      m || (u === s[n].value ? (p = s[n], m = !0) : u === s[l].value ? (p = s[l], m = !0) : u < s[n].value ? (m = !1, p = null) : u > s[n].value && (u < s[l].value ? (p = s[n], m = !0) : l === o - 1 ? (m = !1, p = null) : (p = s[l], m = !0))), m ? (g[h] = p.mappedColor[0], d[h] = p.mappedColor[1], y[h] = p.mappedColor[2], k[h] = p.mappedColor[3]) : g[h] = d[h] = y[h] = k[h] = 0;
    }
  return i.pixels = [g, d, y], i.mask = k, i.pixelType = "u8", i.maskIsAlpha = w, i;
}
function rt(t, s, i, r, f, o, a, c) {
  return { xmin: f <= i * t ? 0 : f < i * t + t ? f - i * t : t, ymin: o <= r * s ? 0 : o < r * s + s ? o - r * s : s, xmax: f + a <= i * t ? 0 : f + a < i * t + t ? f + a - i * t : t, ymax: o + c <= r * s ? 0 : o + c < r * s + s ? o + c - r * s : s };
}
function Ut(t, s) {
  if (!t || t.length === 0)
    return null;
  const i = t.find((x) => x.pixelBlock);
  if (!i || L(i.pixelBlock))
    return null;
  const r = (i.extent.xmax - i.extent.xmin) / i.pixelBlock.width, f = (i.extent.ymax - i.extent.ymin) / i.pixelBlock.height, o = 0.01 * Math.min(r, f), a = t.sort((x, m) => Math.abs(x.extent.ymax - m.extent.ymax) > o ? m.extent.ymax - x.extent.ymax : Math.abs(x.extent.xmin - m.extent.xmin) > o ? x.extent.xmin - m.extent.xmin : 0), c = Math.min.apply(null, a.map((x) => x.extent.xmin)), e = Math.min.apply(null, a.map((x) => x.extent.ymin)), u = Math.max.apply(null, a.map((x) => x.extent.xmax)), p = Math.max.apply(null, a.map((x) => x.extent.ymax)), n = { x: Math.round((s.xmin - c) / r), y: Math.round((p - s.ymax) / f) }, l = { width: Math.round((u - c) / r), height: Math.round((p - e) / f) }, h = { width: Math.round((s.xmax - s.xmin) / r), height: Math.round((s.ymax - s.ymin) / f) };
  return Math.round(l.width / i.pixelBlock.width) * Math.round(l.height / i.pixelBlock.height) !== a.length || n.x < 0 || n.y < 0 || l.width < h.width || l.height < h.height ? null : { extent: s, pixelBlock: ot(a.map((x) => x.pixelBlock), l, { clipOffset: n, clipSize: h }) };
}
function H(t, s, i, r, f, o) {
  const { width: a, height: c } = i.block, { x: e, y: u } = i.offset, { width: p, height: n } = i.mosaic, l = rt(a, c, r, f, e, u, p, n);
  let h = 0, x = 0;
  if (o) {
    const m = o.hasGCSSShiftTransform ? 360 : o.halfWorldWidth, g = a * o.resolutionX, d = o.startX + r * g, y = d + g;
    d < m && y > m ? x = o.rightPadding : d >= m && (h = o.leftMargin - o.rightPadding, x = 0);
  }
  if (l.xmax -= x, typeof s != "number")
    for (let m = l.ymin; m < l.ymax; m++) {
      const g = (f * c + m - u) * p + (r * a - e) + h, d = m * a;
      for (let y = l.xmin; y < l.xmax; y++)
        t[g + y] = s[d + y];
    }
  else
    for (let m = l.ymin; m < l.ymax; m++) {
      const g = (f * c + m - u) * p + (r * a - e) + h;
      for (let d = l.xmin; d < l.xmax; d++)
        t[g + d] = s;
    }
}
function ot(t, s, i = {}) {
  const { clipOffset: r, clipSize: f, alignmentInfo: o, blockWidths: a } = i;
  if (a)
    return at(t, s, { blockWidths: a });
  const c = t.find((M) => S(M));
  if (L(c))
    return null;
  const e = f ? f.width : s.width, u = f ? f.height : s.height, p = c.width, n = c.height, l = s.width / p, h = s.height / n, x = { offset: r || { x: 0, y: 0 }, mosaic: f || s, block: { width: p, height: n } }, m = c.pixelType, g = $.getPixelArrayConstructor(m), d = c.pixels.length, y = [];
  let k, w;
  for (let M = 0; M < d; M++) {
    w = new g(e * u);
    for (let U = 0; U < h; U++)
      for (let A = 0; A < l; A++) {
        const B = t[U * l + A];
        S(B) && (k = B.pixels[M], H(w, k, x, A, U, o));
      }
    y.push(w);
  }
  let T;
  if (t.some((M) => L(M) || M.mask && M.mask.length > 0)) {
    T = new Uint8Array(e * u);
    for (let M = 0; M < h; M++)
      for (let U = 0; U < l; U++) {
        const A = t[M * l + U], B = W(A) ? A.mask : null;
        H(T, B || (A ? 1 : 0), x, U, M, o);
      }
  }
  const b = new $({ width: e, height: u, pixels: y, pixelType: m, mask: T });
  return b.updateStatistics(), b;
}
function at(t, s, i) {
  const r = t.find((h) => W(h));
  if (!W(r))
    return null;
  const f = t.some((h) => !W(h) || !!h.mask), { width: o, height: a } = s, c = f ? new Uint8Array(o * a) : null, { blockWidths: e } = i, u = [], p = r.getPlaneCount(), n = $.getPixelArrayConstructor(r.pixelType);
  if (f)
    for (let h = 0, x = 0; h < t.length; x += e[h], h++) {
      const m = t[h];
      if (!S(m))
        continue;
      const g = m.mask;
      for (let d = 0; d < a; d++)
        for (let y = 0; y < e[h]; y++)
          c[d * o + y + x] = g == null ? 255 : g[d * m.width + y];
    }
  for (let h = 0; h < p; h++) {
    const x = new n(o * a);
    for (let m = 0, g = 0; m < t.length; g += e[m], m++) {
      const d = t[m];
      if (!S(d))
        continue;
      const y = d.pixels[h];
      if (y != null)
        for (let k = 0; k < a; k++)
          for (let w = 0; w < e[m]; w++)
            x[k * o + w + g] = y[k * d.width + w];
    }
    u.push(x);
  }
  const l = new $({ width: o, height: a, mask: c, pixels: u, pixelType: r.pixelType });
  return l.updateStatistics(), l;
}
function vt(t, s, i) {
  if (!S(t))
    return null;
  const { width: r, height: f } = t, o = s.x, a = s.y, c = i.width + o, e = i.height + a;
  if (o < 0 || a < 0 || c > r || e > f || o === 0 && a === 0 && c === r && e === f)
    return t;
  t.mask || (t.mask = new Uint8Array(r * f));
  const u = t.mask;
  for (let p = 0; p < f; p++) {
    const n = p * r;
    for (let l = 0; l < r; l++)
      u[n + l] = p < a || p >= e || l < o || l >= c ? 0 : 1;
  }
  return t.updateStatistics(), t;
}
function ht(t) {
  if (!S(t))
    return null;
  const s = t.clone(), { width: i, height: r, pixels: f, mask: o } = t, a = f[0], c = s.pixels[0];
  for (let e = 2; e < r - 1; e++) {
    const u = /* @__PURE__ */ new Map();
    for (let n = e - 2; n < e + 2; n++)
      for (let l = 0; l < 4; l++) {
        const h = n * i + l;
        N(u, a[h], o ? o[h] : 1);
      }
    c[e * i] = J(u), c[e * i + 1] = c[e * i + 2] = c[e * i];
    let p = 3;
    for (; p < i - 1; p++) {
      let n = (e - 2) * i + p + 1;
      N(u, a[n], o ? o[n] : 1), n = (e - 1) * i + p + 1, N(u, a[n], o ? o[n] : 1), n = e * i + p + 1, N(u, a[n], o ? o[n] : 1), n = (e + 1) * i + p + 1, N(u, a[n], o ? o[n] : 1), n = (e - 2) * i + p - 3, D(u, a[n], o ? o[n] : 1), n = (e - 1) * i + p - 3, D(u, a[n], o ? o[n] : 1), n = e * i + p - 3, D(u, a[n], o ? o[n] : 1), n = (e + 1) * i + p - 3, D(u, a[n], o ? o[n] : 1), c[e * i + p] = J(u);
    }
    c[e * i + p + 1] = c[e * i + p];
  }
  for (let e = 0; e < i; e++)
    c[e] = c[i + e] = c[2 * i + e], c[(r - 1) * i + e] = c[(r - 2) * i + e];
  return s.updateStatistics(), s;
}
function J(t) {
  if (t.size === 0)
    return 0;
  let s = 0, i = -1, r = 0;
  const f = t.keys();
  let o = f.next();
  for (; !o.done; )
    r = t.get(o.value), r > s && (i = o.value, s = r), o = f.next();
  return i;
}
function D(t, s, i) {
  if (i === 0)
    return;
  const r = t.get(s);
  r === 1 ? t.delete(s) : t.set(s, r - 1);
}
function N(t, s, i) {
  i !== 0 && t.set(s, t.has(s) ? t.get(s) + 1 : 1);
}
function ft(t, s, i) {
  let { x: r, y: f } = s;
  const { width: o, height: a } = i;
  if (r === 0 && f === 0 && a === t.height && o === t.width)
    return t;
  const { width: c, height: e } = t, u = Math.max(0, f), p = Math.max(0, r), n = Math.min(r + o, c), l = Math.min(f + a, e);
  if (n < 0 || l < 0 || !S(t))
    return null;
  r = Math.max(0, -r), f = Math.max(0, -f);
  const { pixels: h, mask: x } = t, m = o * a, g = h.length, d = [];
  for (let w = 0; w < g; w++) {
    const T = h[w], b = $.createEmptyBand(t.pixelType, m);
    for (let M = u; M < l; M++) {
      const U = M * c;
      let A = (M + f - u) * o + r;
      for (let B = p; B < n; B++)
        b[A++] = T[U + B];
    }
    d.push(b);
  }
  const y = new Uint8Array(m);
  for (let w = u; w < l; w++) {
    const T = w * c;
    let b = (w + f - u) * o + r;
    for (let M = p; M < n; M++)
      y[b++] = x ? x[T + M] : 1;
  }
  const k = new $({ width: i.width, height: i.height, pixelType: t.pixelType, pixels: d, mask: y });
  return k.updateStatistics(), k;
}
function ct(t, s = !0) {
  if (!S(t))
    return null;
  const { pixels: i, width: r, height: f, mask: o, pixelType: a } = t, c = [], e = Math.round(r / 2), u = Math.round(f / 2), p = f - 1, n = r - 1;
  for (let h = 0; h < i.length; h++) {
    const x = i[h], m = $.createEmptyBand(a, e * u);
    let g = 0;
    for (let d = 0; d < f; d += 2)
      for (let y = 0; y < r; y += 2) {
        const k = x[d * r + y];
        if (s) {
          const w = y === n ? k : x[d * r + y + 1], T = d === p ? k : x[d * r + y + r], b = y === n ? T : d === p ? w : x[d * r + y + r + 1];
          m[g++] = (k + w + T + b) / 4;
        } else
          m[g++] = k;
      }
    c.push(m);
  }
  let l = null;
  if (o) {
    l = new Uint8Array(e * u);
    let h = 0;
    for (let x = 0; x < f; x += 2)
      for (let m = 0; m < r; m += 2) {
        const g = o[x * r + m];
        if (s) {
          const d = m === n ? g : o[x * r + m + 1], y = x === p ? g : o[x * r + m + r], k = m === n ? y : x === p ? d : o[x * r + m + r + 1];
          l[h++] = g * d * y * k ? 1 : 0;
        } else
          l[h++] = g;
      }
  }
  return new $({ width: e, height: u, pixelType: a, pixels: c, mask: l });
}
function Tt(t, s, i) {
  if (!S(t))
    return null;
  const { width: r, height: f } = s;
  let { width: o, height: a } = t;
  const c = /* @__PURE__ */ new Map(), e = { x: 0, y: 0 }, u = i == null ? 1 : 1 + i;
  let p = t;
  for (let n = 0; n < u; n++) {
    const l = Math.ceil(o / r), h = Math.ceil(a / f);
    for (let x = 0; x < h; x++) {
      e.y = x * f;
      for (let m = 0; m < l; m++) {
        e.x = m * r;
        const g = ft(p, e, s);
        c.set(`${n}/${x}/${m}`, g);
      }
    }
    n < u - 1 && (p = ct(p)), o = Math.round(o / 2), a = Math.round(a / 2);
  }
  return c;
}
function K(t, s, i, r, f = 0.5) {
  const { width: o, height: a } = t, { width: c, height: e } = s, u = r.cols, p = r.rows, n = Math.ceil(c / u - 0.1 / u), l = Math.ceil(e / p - 0.1 / p);
  let h, x, m, g, d, y, k;
  const w = n * u, T = w * l * p, b = new Float32Array(T), M = new Float32Array(T), U = new Uint32Array(T), A = new Uint32Array(T);
  let B, O, P = 0;
  for (let _ = 0; _ < l; _++)
    for (let F = 0; F < n; F++) {
      h = 12 * (_ * n + F), x = i[h], m = i[h + 1], g = i[h + 2], d = i[h + 3], y = i[h + 4], k = i[h + 5];
      for (let C = 0; C < p; C++) {
        P = (_ * p + C) * w + F * u, O = (C + 0.5) / p;
        for (let v = 0; v < C; v++)
          B = (v + 0.5) / u, b[P + v] = (x * B + m * O + g) * o - f, M[P + v] = (d * B + y * O + k) * a - f, U[P + v] = Math.round(b[P + v]), A[P + v] = Math.round(M[P + v]);
      }
      h += 6, x = i[h], m = i[h + 1], g = i[h + 2], d = i[h + 3], y = i[h + 4], k = i[h + 5];
      for (let C = 0; C < p; C++) {
        P = (_ * p + C) * w + F * u, O = (C + 0.5) / p;
        for (let v = C; v < u; v++)
          B = (v + 0.5) / u, b[P + v] = (x * B + m * O + g) * o - f, M[P + v] = (d * B + y * O + k) * a - f, U[P + v] = Math.round(b[P + v]), A[P + v] = Math.round(M[P + v]);
      }
    }
  return { offsets_x: b, offsets_y: M, offsets_xi: U, offsets_yi: A, gridWidth: w };
}
function bt(t, s) {
  const { coefficients: i, spacing: r } = s, { offsets_x: f, offsets_y: o, gridWidth: a } = K(t, t, i, { rows: r[0], cols: r[1] }, 0.5), { width: c, height: e } = t, u = new Float32Array(c * e), p = 180 / Math.PI;
  for (let n = 0; n < e; n++)
    for (let l = 0; l < c; l++) {
      const h = n * a + l, x = n === 0 ? h : h - a, m = n === e - 1 ? h : h + a, g = f[x] - f[m], d = o[m] - o[x];
      if (isNaN(g) || isNaN(d))
        u[n * c + l] = 90;
      else {
        let y = Math.atan2(d, g) * p;
        y = (360 + y) % 360, u[n * c + l] = y;
      }
    }
  return u;
}
function Bt(t, s, i, r, f = "nearest") {
  if (!S(t))
    return null;
  f === "majority" && (t = ht(t));
  const { pixels: o, mask: a, pixelType: c } = t, e = t.width, u = t.height, p = $.getPixelArrayConstructor(c), n = o.length, { width: l, height: h } = s;
  let x = !1;
  for (let A = 0; A < i.length; A += 3)
    i[A] === -1 && i[A + 1] === -1 && i[A + 2] === -1 && (x = !0);
  const { offsets_x: m, offsets_y: g, offsets_xi: d, offsets_yi: y, gridWidth: k } = K({ width: e, height: u }, s, i, r, f === "majority" ? 0 : 0.5);
  let w;
  const T = (A, B, O) => {
    const P = A instanceof Float32Array || A instanceof Float64Array ? 0 : 0.5;
    for (let _ = 0; _ < h; _++) {
      w = _ * k;
      for (let F = 0; F < l; F++) {
        if (m[w] < 0 || g[w] < 0)
          A[_ * l + F] = 0;
        else if (O)
          A[_ * l + F] = B[d[w] + y[w] * e];
        else {
          const C = Math.floor(m[w]), v = Math.floor(g[w]), X = Math.ceil(m[w]), E = Math.ceil(g[w]), z = m[w] - C, q = g[w] - v;
          if (!a || a[C + v * e] && a[C + v * e] && a[C + E * e] && a[X + E * e]) {
            const Q = (1 - z) * B[C + v * e] + z * B[X + v * e], Y = (1 - z) * B[C + E * e] + z * B[X + E * e];
            A[_ * l + F] = (1 - q) * Q + q * Y + P;
          } else
            A[_ * l + F] = B[d[w] + y[w] * e];
        }
        w++;
      }
    }
  }, b = [];
  let M;
  for (let A = 0; A < n; A++)
    M = new p(l * h), T(M, o[A], f === "nearest" || f === "majority"), b.push(M);
  const U = new $({ width: l, height: h, pixelType: c, pixels: b });
  if (a)
    U.mask = new Uint8Array(l * h), T(U.mask, a, !0);
  else if (x) {
    U.mask = new Uint8Array(l * h);
    for (let A = 0; A < l * h; A++)
      U.mask[A] = m[A] < 0 || g[A] < 0 ? 0 : 1;
  }
  return U.updateStatistics(), U;
}
export {
  vt as M,
  Bt as O,
  gt as a,
  bt as b,
  kt as c,
  Ut as d,
  wt as e,
  yt as f,
  S as i,
  pt as l,
  xt as o,
  Mt as p,
  mt as r,
  dt as s,
  $ as u,
  Tt as v,
  At as x,
  ot as y
};

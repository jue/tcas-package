import { C as z, a as v, bj as I, b as y, c as S, bk as F, s as j } from "./index-HxXrdrYt.js";
const q = new z({ esriClassifyEqualInterval: "equal-interval", esriClassifyManual: "manual", esriClassifyNaturalBreaks: "natural-breaks", esriClassifyQuantile: "quantile", esriClassifyStandardDeviation: "standard-deviation", esriClassifyDefinedInterval: "defined-interval" }), w = new z({ esriNormalizeByLog: "log", esriNormalizeByPercentOfTotal: "percent-of-total", esriNormalizeByField: "field" });
let V = class extends F {
  constructor(s) {
    super(s), this.type = "class-breaks-definition", this.breakCount = null, this.classificationField = null, this.classificationMethod = null, this.normalizationField = null, this.normalizationType = null;
  }
  set standardDeviationInterval(s) {
    this.classificationMethod === "standard-deviation" && this._set("standardDeviationInterval", s);
  }
  set definedInterval(s) {
    this.classificationMethod === "defined-interval" && this._set("definedInterval", s);
  }
};
v([I({ classBreaksDef: "class-breaks-definition" })], V.prototype, "type", void 0), v([y({ json: { write: !0 } })], V.prototype, "breakCount", void 0), v([y({ json: { write: !0 } })], V.prototype, "classificationField", void 0), v([y({ type: String, json: { read: q.read, write: q.write } })], V.prototype, "classificationMethod", void 0), v([y({ json: { write: !0 } })], V.prototype, "normalizationField", void 0), v([y({ json: { read: w.read, write: w.write } })], V.prototype, "normalizationType", void 0), v([y({ value: null, json: { write: !0 } })], V.prototype, "standardDeviationInterval", null), v([y({ value: null, json: { write: !0 } })], V.prototype, "definedInterval", null), V = v([S("geoscene.rest.support.ClassBreaksDefinition")], V);
const O = V, B = j.getLogger("geoscene.rest.support.generateRendererUtils");
function M(n, s) {
  return Number(n.toFixed(s));
}
function P(n) {
  const { normalizationTotal: s } = n;
  return { classBreaks: N(n), normalizationTotal: s };
}
function N(n) {
  const s = n.definition, { classificationMethod: a, normalizationType: i, definedInterval: h } = s, c = s.breakCount ?? 1, u = [];
  let l = n.values;
  if (l.length === 0)
    return [];
  l = l.sort((o, f) => o - f);
  const d = l[0], m = l[l.length - 1];
  if (a === "equal-interval")
    if (l.length >= c) {
      const o = (m - d) / c;
      let f = d;
      for (let t = 1; t < c; t++) {
        const e = M(d + t * o, 6);
        u.push({ minValue: f, maxValue: e, label: b(f, e, i) }), f = e;
      }
      u.push({ minValue: f, maxValue: m, label: b(f, m, i) });
    } else
      l.forEach((o) => {
        u.push({ minValue: o, maxValue: o, label: b(o, o, i) });
      });
  else if (a === "natural-breaks") {
    const o = D(l), f = n.valueFrequency || o.valueFrequency, t = $(o.uniqueValues, f, c);
    let e = d;
    for (let r = 1; r < c; r++)
      if (o.uniqueValues.length > r) {
        const p = M(o.uniqueValues[t[r]], 6);
        u.push({ minValue: e, maxValue: p, label: b(e, p, i) }), e = p;
      }
    u.push({ minValue: e, maxValue: m, label: b(e, m, i) });
  } else if (a === "quantile")
    if (l.length >= c && d !== m) {
      let o = d, f = Math.ceil(l.length / c), t = 0;
      for (let e = 1; e < c; e++) {
        let r = f + t - 1;
        r > l.length && (r = l.length - 1), r < 0 && (r = 0), u.push({ minValue: o, maxValue: l[r], label: b(o, l[r], i) }), o = l[r], t += f, f = Math.ceil((l.length - t) / (c - e));
      }
      u.push({ minValue: o, maxValue: m, label: b(o, m, i) });
    } else {
      let o = -1;
      for (let f = 0; f < l.length; f++) {
        const t = l[f];
        t !== o && (o = t, u.push({ minValue: o, maxValue: t, label: b(o, t, i) }), o = t);
      }
    }
  else if (a === "standard-deviation") {
    const o = L(l), f = _(l, o);
    if (f === 0)
      u.push({ minValue: l[0], maxValue: l[0], label: b(l[0], l[0], i) });
    else {
      const t = E(d, m, c, o, f) * f;
      let e = 0, r = d;
      for (let g = c; g >= 1; g--) {
        const k = M(o - (g - 0.5) * t, 6);
        u.push({ minValue: r, maxValue: k, label: b(r, k, i) }), r = k, e++;
      }
      let p = M(o + 0.5 * t, 6);
      u.push({ minValue: r, maxValue: p, label: b(r, p, i) }), r = p, e++;
      for (let g = 1; g <= c; g++)
        p = e === 2 * c ? m : M(o + (g + 0.5) * t, 6), u.push({ minValue: r, maxValue: p, label: b(r, p, i) }), r = p, e++;
    }
  } else if (a === "defined-interval") {
    if (!h)
      return u;
    const o = l[0], f = l[l.length - 1], t = Math.ceil((f - o) / h);
    let e = o;
    for (let r = 1; r < t; r++) {
      const p = M(o + r * h, 6);
      u.push({ minValue: e, maxValue: p, label: b(e, p, i) }), e = p;
    }
    u.push({ minValue: e, maxValue: f, label: b(e, f, i) });
  }
  return u;
}
function b(n, s, a) {
  let i = null;
  return i = n === s ? a && a === "percent-of-total" ? n + "%" : n.toString() : a && a === "percent-of-total" ? n + "% - " + s + "%" : n + " - " + s, i;
}
function D(n) {
  const s = [], a = [];
  let i = Number.MIN_VALUE, h = 1, c = -1;
  for (let u = 0; u < n.length; u++) {
    const l = n[u];
    l === i ? (h++, a[c] = h) : l !== null && (s.push(l), i = l, h = 1, a.push(h), c++);
  }
  return { uniqueValues: s, valueFrequency: a };
}
function $(n, s, a) {
  const i = n.length, h = [];
  a > i && (a = i);
  for (let u = 0; u < a; u++)
    h.push(Math.round(u * i / a - 1));
  h.push(i - 1);
  let c = C(h, n, s, a);
  return T(c.mean, c.sdcm, h, n, s, a) && (c = C(h, n, s, a)), h;
}
function C(n, s, a, i) {
  let h = [], c = [], u = [], l = 0;
  const d = [], m = [];
  for (let e = 0; e < i; e++) {
    const r = x(e, n, s, a);
    d.push(r.sbMean), m.push(r.sbSdcm), l += m[e];
  }
  let o, f = l, t = !0;
  for (; t || l < f; ) {
    t = !1, h = [];
    for (let e = 0; e < i; e++)
      h.push(n[e]);
    for (let e = 0; e < i; e++)
      for (let r = n[e] + 1; r <= n[e + 1]; r++)
        if (o = s[r], e > 0 && r !== n[e + 1] && Math.abs(o - d[e]) > Math.abs(o - d[e - 1]))
          n[e] = r;
        else if (e < i - 1 && n[e] !== r - 1 && Math.abs(o - d[e]) > Math.abs(o - d[e + 1])) {
          n[e + 1] = r - 1;
          break;
        }
    f = l, l = 0, c = [], u = [];
    for (let e = 0; e < i; e++) {
      c.push(d[e]), u.push(m[e]);
      const r = x(e, n, s, a);
      d[e] = r.sbMean, m[e] = r.sbSdcm, l += m[e];
    }
  }
  if (l > f) {
    for (let e = 0; e < i; e++)
      n[e] = h[e], d[e] = c[e], m[e] = u[e];
    l = f;
  }
  return { mean: d, sdcm: m };
}
function T(n, s, a, i, h, c) {
  let u = 0, l = 0, d = 0, m = 0, o = !0;
  for (let f = 0; f < 2 && o; f++) {
    f === 0 && (o = !1);
    for (let t = 0; t < c - 1; t++)
      for (; a[t + 1] + 1 !== a[t + 2]; ) {
        a[t + 1] = a[t + 1] + 1;
        const e = x(t, a, i, h);
        d = e.sbMean, u = e.sbSdcm;
        const r = x(t + 1, a, i, h);
        if (m = r.sbMean, l = r.sbSdcm, !(u + l < s[t] + s[t + 1])) {
          a[t + 1] = a[t + 1] - 1;
          break;
        }
        s[t] = u, s[t + 1] = l, n[t] = d, n[t + 1] = m, o = !0;
      }
    for (let t = c - 1; t > 0; t--)
      for (; a[t] !== a[t - 1] + 1; ) {
        a[t] = a[t] - 1;
        const e = x(t - 1, a, i, h);
        d = e.sbMean, u = e.sbSdcm;
        const r = x(t, a, i, h);
        if (m = r.sbMean, l = r.sbSdcm, !(u + l < s[t - 1] + s[t])) {
          a[t] = a[t] + 1;
          break;
        }
        s[t - 1] = u, s[t] = l, n[t - 1] = d, n[t] = m, o = !0;
      }
  }
  return o;
}
function E(n, s, a, i, h) {
  let c = Math.max(i - n, s - i) / h / a;
  return c = c >= 1 ? 1 : c >= 0.5 ? 0.5 : 0.25, c;
}
function L(n) {
  let s = 0;
  for (let a = 0; a < n.length; a++)
    s += n[a];
  return s /= n.length, s;
}
function _(n, s) {
  let a = 0;
  for (let i = 0; i < n.length; i++) {
    const h = n[i];
    a += (h - s) * (h - s);
  }
  return a /= n.length, Math.sqrt(a);
}
function x(n, s, a, i) {
  let h = 0, c = 0;
  for (let d = s[n] + 1; d <= s[n + 1]; d++) {
    const m = i[d];
    h += a[d] * m, c += m;
  }
  c <= 0 && B.warn("Exception in Natural Breaks calculation");
  const u = h / c;
  let l = 0;
  for (let d = s[n] + 1; d <= s[n + 1]; d++)
    l += i[d] * (a[d] - u) ** 2;
  return { sbMean: u, sbSdcm: l };
}
export {
  P as a,
  O as d
};

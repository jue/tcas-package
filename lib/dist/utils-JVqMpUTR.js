import { l as S } from "./ClassBreaksDefinition-nlZvFIvT.js";
function v(e, t) {
  return Number(e.toFixed(t));
}
function D(e) {
  const { normalizationTotal: t } = e;
  return { classBreaks: I(e), normalizationTotal: t };
}
function I(e) {
  const t = e.definition, { classificationMethod: l, breakCount: n, normalizationType: a, definedInterval: r } = t, u = [];
  let o = e.values;
  if (o.length === 0)
    return [];
  o = o.sort((s, f) => s - f);
  const d = o[0], p = o[o.length - 1];
  if (l === "equal-interval")
    if (o.length >= n) {
      const s = (p - d) / n;
      let f = d;
      for (let c = 1; c < n; c++) {
        const i = v(d + c * s, 6);
        u.push({ minValue: f, maxValue: i, label: b(f, i, a) }), f = i;
      }
      u.push({ minValue: f, maxValue: p, label: b(f, p, a) });
    } else
      o.forEach((s) => {
        u.push({ minValue: s, maxValue: s, label: b(s, s, a) });
      });
  else if (l === "natural-breaks") {
    const s = N(o), f = e.valueFrequency || s.valueFrequency, c = k(s.uniqueValues, f, n);
    let i = d;
    for (let m = 1; m < n; m++)
      if (s.uniqueValues.length > m) {
        const h = v(s.uniqueValues[c[m]], 6);
        u.push({ minValue: i, maxValue: h, label: b(i, h, a) }), i = h;
      }
    u.push({ minValue: i, maxValue: p, label: b(i, p, a) });
  } else if (l === "quantile")
    if (o.length >= n && d !== p) {
      let s = d, f = Math.ceil(o.length / n), c = 0;
      for (let i = 1; i < n; i++) {
        let m = f + c - 1;
        m > o.length && (m = o.length - 1), m < 0 && (m = 0), u.push({ minValue: s, maxValue: o[m], label: b(s, o[m], a) }), s = o[m], c += f, f = Math.ceil((o.length - c) / (n - i));
      }
      u.push({ minValue: s, maxValue: p, label: b(s, p, a) });
    } else {
      let s = -1;
      for (let f = 0; f < o.length; f++) {
        const c = o[f];
        c !== s && (s = c, u.push({ minValue: s, maxValue: c, label: b(s, c, a) }), s = c);
      }
    }
  else if (l === "standard-deviation") {
    const s = E(o), f = $(o, s);
    if (f === 0)
      u.push({ minValue: o[0], maxValue: o[0], label: b(o[0], o[0], a) });
    else {
      const c = C(d, p, n, s, f) * f;
      let i = 0, m = d;
      for (let V = n; V >= 1; V--) {
        const x = v(s - (V - 0.5) * c, 6);
        u.push({ minValue: m, maxValue: x, label: b(m, x, a) }), m = x, i++;
      }
      let h = v(s + 0.5 * c, 6);
      u.push({ minValue: m, maxValue: h, label: b(m, h, a) }), m = h, i++;
      for (let V = 1; V <= n; V++)
        h = i === 2 * n ? p : v(s + (V + 0.5) * c, 6), u.push({ minValue: m, maxValue: h, label: b(m, h, a) }), m = h, i++;
    }
  } else if (l === "defined-interval") {
    if (!r)
      return u;
    const s = o[0], f = o[o.length - 1], c = Math.ceil((f - s) / r);
    let i = s;
    for (let m = 1; m < c; m++) {
      const h = v(s + m * r, 6);
      u.push({ minValue: i, maxValue: h, label: b(i, h, a) }), i = h;
    }
    u.push({ minValue: i, maxValue: f, label: b(i, f, a) });
  }
  return u;
}
function b(e, t, l) {
  let n = null;
  return n = e === t ? l && l === "percent-of-total" ? e + "%" : e.toString() : l && l === "percent-of-total" ? e + "% - " + t + "%" : e + " - " + t, n;
}
function N(e) {
  const t = [], l = [];
  let n = Number.MIN_VALUE, a = 1, r = -1;
  for (let u = 0; u < e.length; u++) {
    const o = e[u];
    o === n ? (a++, l[r] = a) : o !== null && (t.push(o), n = o, a = 1, l.push(a), r++);
  }
  return { uniqueValues: t, valueFrequency: l };
}
function k(e, t, l) {
  const n = e.length, a = [];
  l > n && (l = n);
  for (let u = 0; u < l; u++)
    a.push(Math.round(u * n / l - 1));
  a.push(n - 1);
  let r = T(a, e, t, l);
  return q(r.mean, r.sdcm, a, e, t, l) && (r = T(a, e, t, l)), a;
}
function T(e, t, l, n) {
  let a = [], r = [], u = [], o = 0;
  const d = [], p = [];
  for (let i = 0; i < n; i++) {
    const m = g(i, e, t, l);
    d.push(m.sbMean), p.push(m.sbSdcm), o += p[i];
  }
  let s, f = o, c = !0;
  for (; c || o < f; ) {
    c = !1, a = [];
    for (let i = 0; i < n; i++)
      a.push(e[i]);
    for (let i = 0; i < n; i++)
      for (let m = e[i] + 1; m <= e[i + 1]; m++)
        if (s = t[m], i > 0 && m !== e[i + 1] && Math.abs(s - d[i]) > Math.abs(s - d[i - 1]))
          e[i] = m;
        else if (i < n - 1 && e[i] !== m - 1 && Math.abs(s - d[i]) > Math.abs(s - d[i + 1])) {
          e[i + 1] = m - 1;
          break;
        }
    f = o, o = 0, r = [], u = [];
    for (let i = 0; i < n; i++) {
      r.push(d[i]), u.push(p[i]);
      const m = g(i, e, t, l);
      d[i] = m.sbMean, p[i] = m.sbSdcm, o += p[i];
    }
  }
  if (o > f) {
    for (let i = 0; i < n; i++)
      e[i] = a[i], d[i] = r[i], p[i] = u[i];
    o = f;
  }
  return { mean: d, sdcm: p };
}
function q(e, t, l, n, a, r) {
  let u = 0, o = 0, d = 0, p = 0, s = !0;
  for (let f = 0; f < 2 && s; f++) {
    f === 0 && (s = !1);
    for (let c = 0; c < r - 1; c++)
      for (; l[c + 1] + 1 !== l[c + 2]; ) {
        l[c + 1] = l[c + 1] + 1;
        const i = g(c, l, n, a);
        d = i.sbMean, u = i.sbSdcm;
        const m = g(c + 1, l, n, a);
        if (p = m.sbMean, o = m.sbSdcm, !(u + o < t[c] + t[c + 1])) {
          l[c + 1] = l[c + 1] - 1;
          break;
        }
        t[c] = u, t[c + 1] = o, e[c] = d, e[c + 1] = p, s = !0;
      }
    for (let c = r - 1; c > 0; c--)
      for (; l[c] !== l[c - 1] + 1; ) {
        l[c] = l[c] - 1;
        const i = g(c - 1, l, n, a);
        d = i.sbMean, u = i.sbSdcm;
        const m = g(c, l, n, a);
        if (p = m.sbMean, o = m.sbSdcm, !(u + o < t[c - 1] + t[c])) {
          l[c] = l[c] + 1;
          break;
        }
        t[c - 1] = u, t[c] = o, e[c - 1] = d, e[c] = p, s = !0;
      }
  }
  return s;
}
function C(e, t, l, n, a) {
  let r = Math.max(n - e, t - n) / a / l;
  return r = r >= 1 ? 1 : r >= 0.5 ? 0.5 : 0.25, r;
}
function E(e) {
  let t = 0;
  for (let l = 0; l < e.length; l++)
    t += e[l];
  return t /= e.length, t;
}
function $(e, t) {
  let l = 0;
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    l += (a - t) * (a - t);
  }
  return l /= e.length, Math.sqrt(l);
}
function g(e, t, l, n) {
  let a = 0, r = 0;
  for (let d = t[e] + 1; d <= t[e + 1]; d++) {
    const p = n[d];
    a += l[d] * p, r += p;
  }
  r <= 0 && console.log("Exception in Natural Breaks calculation");
  const u = a / r;
  let o = 0;
  for (let d = t[e] + 1; d <= t[e + 1]; d++)
    o += n[d] * (l[d] - u) ** 2;
  return { sbMean: u, sbSdcm: o };
}
const w = "equal-interval", B = 1, U = 5, G = 10, P = /\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi, y = /* @__PURE__ */ new Set(["esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"]), O = ["min", "max", "avg", "stddev", "count", "sum", "variance", "nullcount", "median"];
function A(e) {
  const t = e.normalizationField != null || e.normalizationType != null, l = e.minValue != null || e.maxValue != null, n = !!e.sqlExpression && e.supportsSQLExpression;
  return !t && !l && !n;
}
function X(e) {
  const t = e.returnDistinct ? [...new Set(e.values)] : e.values, l = t.filter((a) => a != null).length, n = { count: l };
  return e.supportsNullCount && (n.nullcount = t.length - l), e.percentileParams && (n.median = z(t, e.percentileParams)), n;
}
function L(e) {
  const { values: t, useSampleStdDev: l, supportsNullCount: n } = e;
  let a = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY, u = null, o = null, d = null, p = null, s = 0;
  const f = e.minValue == null ? -1 / 0 : e.minValue, c = e.maxValue == null ? 1 / 0 : e.maxValue;
  for (const m of t)
    Number.isFinite(m) ? m >= f && m <= c && (u += m, a = Math.min(a, m), r = Math.max(r, m), s++) : typeof m == "string" && s++;
  if (s && u != null) {
    o = u / s;
    let m = 0;
    for (const h of t)
      Number.isFinite(h) && h >= f && h <= c && (m += (h - o) ** 2);
    p = l ? s > 1 ? m / (s - 1) : 0 : s > 0 ? m / s : 0, d = Math.sqrt(p);
  } else
    a = null, r = null;
  const i = { avg: o, count: s, max: r, min: a, stddev: d, sum: u, variance: p };
  return n && (i.nullcount = t.length - s), e.percentileParams && (i.median = z(t, e.percentileParams)), i;
}
function z(e, t) {
  const { fieldType: l, value: n, orderBy: a, isDiscrete: r } = t, u = _(l, a === "desc");
  if ((e = [...e].filter((i) => i != null).sort((i, m) => u(i, m))).length === 0)
    return null;
  if (n <= 0)
    return e[0];
  if (n >= 1)
    return e[e.length - 1];
  const o = (e.length - 1) * n, d = Math.floor(o), p = d + 1, s = o % 1, f = e[d], c = e[p];
  return p >= e.length || r || typeof f == "string" || typeof c == "string" ? f : f * (1 - s) + c * s;
}
function _(e, t) {
  const l = t ? 1 : -1, n = Y(t), a = F(t);
  if (!(e && ["esriFieldTypeDate", "esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...y].includes(e)))
    return (r, u) => typeof r == "number" && typeof u == "number" ? n(r, u) : typeof r == "string" && typeof u == "string" ? a(r, u) : l;
  if (e === "esriFieldTypeDate")
    return (r, u) => {
      const o = new Date(r).getTime(), d = new Date(u).getTime();
      return isNaN(o) || isNaN(d) ? l : n(o, d);
    };
  if (y.has(e))
    return (r, u) => n(r, u);
  if (e === "esriFieldTypeString")
    return (r, u) => a(r, u);
  if (e === "esriFieldTypeGUID" || e === "esriFieldTypeGlobalID") {
    const r = F(t);
    return (u, o) => r(M(u), M(o));
  }
  return t ? (r, u) => 1 : (r, u) => -1;
}
function F(e) {
  return e ? (t, l) => {
    var n, a;
    return (t = (n = t) == null ? void 0 : n.toUpperCase()) > (l = (a = l) == null ? void 0 : a.toUpperCase()) ? -1 : t < l ? 1 : 0;
  } : (t, l) => {
    var n, a;
    return (t = (n = t) == null ? void 0 : n.toUpperCase()) < (l = (a = l) == null ? void 0 : a.toUpperCase()) ? -1 : t > l ? 1 : 0;
  };
}
function Y(e) {
  return e ? (t, l) => l - t : (t, l) => t - l;
}
function M(e) {
  return e.substr(24, 12) + e.substr(19, 4) + e.substr(16, 2) + e.substr(14, 2) + e.substr(11, 2) + e.substr(9, 2) + e.substr(6, 2) + e.substr(4, 2) + e.substr(2, 2) + e.substr(0, 2);
}
function Z(e, t) {
  let l;
  for (l in e)
    O.indexOf(l) > -1 && (Number.isFinite(e[l]) || (e[l] = null));
  return t && ["avg", "stddev", "variance"].forEach((n) => {
    e[n] != null && (e[n] = Math.ceil(e[n]));
  }), e;
}
function ee(e) {
  const t = {};
  for (let l of e)
    (l == null || typeof l == "string" && l.trim() === "") && (l = null), t[l] == null ? t[l] = { count: 1, data: l } : t[l].count++;
  return { count: t };
}
function le(e, t, l) {
  const n = e.count, a = [];
  l && t && t.type === "coded-value" && t.codedValues.forEach((r) => {
    const u = r.code;
    n.hasOwnProperty(u) || (n[u] = { data: u, count: 0 });
  });
  for (const r in n) {
    const u = n[r];
    a.push({ value: u.data, count: u.count, label: u.label });
  }
  return { uniqueValueInfos: a };
}
function te(e, t, l, n) {
  let a = null;
  switch (t) {
    case "log":
      e !== 0 && (a = Math.log(e) * Math.LOG10E);
      break;
    case "percent-of-total":
      Number.isFinite(n) && n !== 0 && (a = e / n * 100);
      break;
    case "field":
      Number.isFinite(l) && l !== 0 && (a = e / l);
      break;
    case "natural-log":
      e > 0 && (a = Math.log(e));
      break;
    case "square-root":
      e > 0 && (a = e ** 0.5);
  }
  return a;
}
function Q(e, t) {
  const l = H({ field: t.field, normalizationType: t.normalizationType, normalizationField: t.normalizationField, classificationMethod: t.classificationMethod, standardDeviationInterval: t.standardDeviationInterval, breakCount: t.numClasses || U });
  return e = j(e, t.minValue, t.maxValue), D({ definition: l, values: e, normalizationTotal: t.normalizationTotal });
}
function j(e, t, l) {
  return t = t ?? -1 / 0, l = l ?? 1 / 0, e.filter((n) => Number.isFinite(n) && n >= t && n <= l);
}
function H(e) {
  const t = e.field, l = e.classificationMethod || w, n = e.normalizationType, a = e.normalizationField, r = new S();
  return r.classificationField = t, r.breakCount = e.breakCount, r.classificationMethod = l, r.standardDeviationInterval = l === "standard-deviation" ? e.standardDeviationInterval || B : void 0, r.normalizationType = n, r.normalizationField = n === "field" ? a : void 0, r;
}
function ne(e, t) {
  let l = e.classBreaks;
  const n = l.length, a = l[0].minValue, r = l[n - 1].maxValue, u = t === "standard-deviation", o = P;
  return l = l.map((d) => {
    const p = d.label, s = { minValue: d.minValue, maxValue: d.maxValue, label: p };
    if (u && p) {
      const f = p.match(o).map((c) => +c.trim());
      f.length === 2 ? (s.minStdDev = f[0], s.maxStdDev = f[1], f[0] < 0 && f[1] > 0 && (s.hasAvg = !0)) : f.length === 1 && (p.includes("<") ? (s.minStdDev = null, s.maxStdDev = f[0]) : p.includes(">") && (s.minStdDev = f[0], s.maxStdDev = null));
    }
    return s;
  }), { minValue: a, maxValue: r, classBreakInfos: l, normalizationTotal: e.normalizationTotal };
}
function ae(e, t) {
  const { min: l, max: n, intervals: a } = J(e, t), r = a.map((u, o) => ({ minValue: a[o][0], maxValue: a[o][1], count: 0 }));
  for (const u of e)
    if (u != null && u >= l && u <= n) {
      const o = K(a, u);
      o > -1 && r[o].count++;
    }
  return { bins: r, minValue: l, maxValue: n, normalizationTotal: t.normalizationTotal };
}
function J(e, t) {
  const { field: l, classificationMethod: n, standardDeviationInterval: a, normalizationType: r, normalizationField: u, normalizationTotal: o, minValue: d, maxValue: p } = t, s = t.numBins || G;
  let f = null, c = null, i = null;
  if ((!n || n === "equal-interval") && !r) {
    if (d != null && p != null)
      f = d, c = p;
    else {
      const m = L({ values: e, minValue: d, maxValue: p, useSampleStdDev: !r, supportsNullCount: A({ normalizationType: r, normalizationField: u, minValue: d, maxValue: p }) });
      f = m.min, c = m.max;
    }
    i = R(f, c, s);
  } else {
    const { classBreaks: m } = Q(e, { field: l, normalizationType: r, normalizationField: u, normalizationTotal: o, classificationMethod: n, standardDeviationInterval: a, minValue: d, maxValue: p, numClasses: s });
    f = m[0].minValue, c = m[m.length - 1].maxValue, i = m.map((h) => [h.minValue, h.maxValue]);
  }
  return { min: f, max: c, intervals: i };
}
function K(e, t) {
  let l = -1;
  for (let n = e.length - 1; n >= 0; n--)
    if (t >= e[n][0]) {
      l = n;
      break;
    }
  return l;
}
function R(e, t, l) {
  const n = (t - e) / l, a = [];
  let r, u = e;
  for (let o = 1; o <= l; o++)
    r = u + n, r = Number(r.toFixed(16)), a.push([u, o === l ? t : r]), u = r;
  return a;
}
export {
  ne as D,
  te as T,
  Z as V,
  L as c,
  z as d,
  _ as f,
  ee as g,
  le as h,
  X as m,
  A as s,
  Q as y,
  ae as z
};

import { C as T, h2 as j, dI as J, a3 as y, a4 as g, a5 as Z, S as z, aM as B, h3 as _, h4 as V, a0 as Y, bY as N, h5 as D, h6 as H, h7 as K, h8 as W, H as w, c8 as A, c1 as k } from "./index-O2RTvw_o.js";
import { d as Q, h as G, b as L, P as b, $ as X, H as tt, U as et, K as M } from "./featureConversionUtils-9-9v0Fhl.js";
import { t as S } from "./OptimizedGeometry-VApaomRE.js";
import { f as v, g as U } from "./projectionSupport-Ywut87fi.js";
import { b as rt } from "./normalizeUtils-XFPcyvoe.js";
const it = new T({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" }), x = Object.freeze({}), F = new S(), nt = new S(), P = new S(), m = { esriGeometryPoint: b, esriGeometryPolyline: X, esriGeometryPolygon: tt, esriGeometryMultipoint: et };
function Nt(t, e, i, r = t.hasZ, n = t.hasM) {
  if (e == null)
    return null;
  const l = t.hasZ && r, s = t.hasM && n;
  if (i) {
    const a = G(P, e, t.hasZ, t.hasM, "esriGeometryPoint", i, r, n);
    return b(a, l, s);
  }
  return b(e, l, s);
}
function d(t, e, i, r, n, l, s = e, a = i) {
  var R, p, h;
  const u = e && s, o = i && a, c = r != null ? "coords" in r ? r : r.geometry : null;
  if (c == null)
    return null;
  if (n) {
    let f = Q(nt, c, e, i, t, n, s, a);
    return l && (f = G(P, f, u, o, t, l)), ((R = m[t]) == null ? void 0 : R.call(m, f, u, o)) ?? null;
  }
  if (l) {
    const f = G(P, c, e, i, t, l, s, a);
    return ((p = m[t]) == null ? void 0 : p.call(m, f, u, o)) ?? null;
  }
  return L(F, c, e, i, s, a), ((h = m[t]) == null ? void 0 : h.call(m, F, u, o)) ?? null;
}
async function At(t, e, i) {
  const { outFields: r, orderByFields: n, groupByFieldsForStatistics: l, outStatistics: s } = t;
  if (r)
    for (let a = 0; a < r.length; a++)
      r[a] = r[a].trim();
  if (n)
    for (let a = 0; a < n.length; a++)
      n[a] = n[a].trim();
  if (l)
    for (let a = 0; a < l.length; a++)
      l[a] = l[a].trim();
  if (s)
    for (let a = 0; a < s.length; a++)
      s[a].onStatisticField && (s[a].onStatisticField = s[a].onStatisticField.trim());
  return t.geometry && !t.outSR && (t.outSR = t.geometry.spatialReference), st(t, e, i);
}
async function st(t, e, i) {
  var l;
  if (!t)
    return null;
  let { where: r } = t;
  if (t.where = r = r && r.trim(), (!r || /^1 *= *1$/.test(r) || e && e === r) && (t.where = null), !t.geometry)
    return t;
  let n = await at(t);
  if (t.distance = 0, t.units = null, t.spatialRel === "esriSpatialRelEnvelopeIntersects") {
    const { spatialReference: s } = t.geometry;
    n = j(n), n.spatialReference = s;
  }
  if (n) {
    await v(n.spatialReference, i), n = lt(n, i);
    const s = (await rt(J(n)))[0];
    if (s == null)
      throw x;
    const a = "quantizationParameters" in t && ((l = t.quantizationParameters) == null ? void 0 : l.tolerance) || "maxAllowableOffset" in t && t.maxAllowableOffset || 0, u = a && E(n, i) ? { densificationStep: 8 * a } : void 0, o = s.toJSON(), c = await U(o, o.spatialReference, i, u);
    if (!c)
      throw x;
    c.spatialReference = i, t.geometry = c;
  }
  return t;
}
function E(t, e) {
  if (!t)
    return !1;
  const i = t.spatialReference;
  return (y(t) || g(t) || Z(t)) && !z(i, e) && !B(i, e);
}
function lt(t, e) {
  const i = t.spatialReference;
  return E(t, e) && y(t) ? { spatialReference: i, rings: [[[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]]] } : t;
}
async function at(t) {
  const { distance: e, units: i } = t, r = t.geometry;
  if (e == null || "vertexAttributes" in r)
    return r;
  const n = r.spatialReference, l = i ? it.fromJSON(i) : _(n), s = n && (V(n) || Y(n)) ? r : await v(n, N).then(() => U(r, N));
  return (await ot())(s.spatialReference, s, e, l);
}
async function ot() {
  return (await import("./geometryEngineJSON-pPJ4cfGc.js")).geodesicBuffer;
}
function Mt(t) {
  return t && q in t ? JSON.parse(JSON.stringify(t, ut)) : t;
}
const q = "_geVersion", ut = (t, e) => t !== q ? e : void 0;
function ct(t) {
  return t === "mesh" ? D : H(t);
}
function O(t, e) {
  return t ? e ? 4 : 3 : e ? 3 : 2;
}
function ft(t, e, i, r) {
  return C(t, e, i, r.coords[0], r.coords[1]);
}
function mt(t, e, i, r, n, l) {
  const s = O(n, l), { coords: a, lengths: u } = r;
  if (!u)
    return !1;
  for (let o = 0, c = 0; o < u.length; o++, c += s)
    if (!C(t, e, i, a[c], a[c + 1]))
      return !1;
  return !0;
}
function C(t, e, i, r, n) {
  if (!t)
    return !1;
  const l = O(e, i), { coords: s, lengths: a } = t;
  let u = !1, o = 0;
  for (const c of a)
    u = pt(u, s, l, o, c, r, n), o += c * l;
  return u;
}
function pt(t, e, i, r, n, l, s) {
  let a = t, u = r;
  for (let o = r, c = r + n * i; o < c; o += i) {
    u = o + i, u === c && (u = r);
    const R = e[o], p = e[o + 1], h = e[u], f = e[u + 1];
    (p < s && f >= s || f < s && p >= s) && R + (s - p) / (f - p) * (h - R) < l && (a = !a);
  }
  return a;
}
const $ = "feature-store:unsupported-query", yt = { esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "intersects", esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: null }, I = { spatialRelationship: { esriSpatialRelIntersects: !0, esriSpatialRelContains: !0, esriSpatialRelWithin: !0, esriSpatialRelCrosses: !0, esriSpatialRelDisjoint: !0, esriSpatialRelTouches: !0, esriSpatialRelOverlaps: !0, esriSpatialRelEnvelopeIntersects: !0, esriSpatialRelIndexIntersects: !1, esriSpatialRelRelation: !1 }, queryGeometry: { esriGeometryPoint: !0, esriGeometryMultipoint: !0, esriGeometryPolyline: !0, esriGeometryPolygon: !0, esriGeometryEnvelope: !0 }, layerGeometry: { esriGeometryPoint: !0, esriGeometryMultipoint: !0, esriGeometryPolyline: !0, esriGeometryPolygon: !0, esriGeometryEnvelope: !1 } };
function Rt(t) {
  return t != null && I.spatialRelationship[t] === !0;
}
function St(t) {
  return t != null && I.queryGeometry[k(t)] === !0;
}
function ht(t) {
  return t != null && I.layerGeometry[t] === !0;
}
function dt() {
  return import("./geometryEngineJSON-pPJ4cfGc.js");
}
function xt(t, e, i, r, n) {
  if (g(e) && i === "esriGeometryPoint" && (t === "esriSpatialRelIntersects" || t === "esriSpatialRelContains")) {
    const l = M(new S(), e, !1, !1);
    return Promise.resolve((s) => ft(l, !1, !1, s));
  }
  if (g(e) && i === "esriGeometryMultipoint") {
    const l = M(new S(), e, !1, !1);
    if (t === "esriSpatialRelContains")
      return Promise.resolve((s) => mt(l, !1, !1, s, r, n));
  }
  if (y(e) && i === "esriGeometryPoint" && (t === "esriSpatialRelIntersects" || t === "esriSpatialRelContains"))
    return Promise.resolve((l) => K(e, d(i, r, n, l)));
  if (y(e) && i === "esriGeometryMultipoint" && t === "esriSpatialRelContains")
    return Promise.resolve((l) => W(e, d(i, r, n, l)));
  if (y(e) && t === "esriSpatialRelIntersects") {
    const l = ct(i);
    return Promise.resolve((s) => l(e, d(i, r, n, s)));
  }
  return dt().then((l) => {
    const s = l[yt[t]].bind(null, e.spatialReference, e);
    return (a) => s(d(i, r, n, a));
  });
}
async function Ft(t, e, i) {
  const { spatialRel: r, geometry: n } = t;
  if (n) {
    if (!Rt(r))
      throw new w($, "Unsupported query spatial relationship", { query: t });
    if (A(n.spatialReference) && A(i)) {
      if (!St(n))
        throw new w($, "Unsupported query geometry type", { query: t });
      if (!ht(e))
        throw new w($, "Unsupported layer geometry type", { query: t });
      if (t.outSR)
        return v(t.geometry && t.geometry.spatialReference, t.outSR);
    }
  }
}
function Ut(t) {
  if (y(t))
    return !0;
  if (g(t)) {
    for (const e of t.rings)
      if (e.length !== 5 || e[0][0] !== e[1][0] || e[0][0] !== e[4][0] || e[2][0] !== e[3][0] || e[0][1] !== e[3][1] || e[0][1] !== e[4][1] || e[1][1] !== e[2][1])
        return !1;
    return !0;
  }
  return !1;
}
async function Et(t, e) {
  if (!t)
    return null;
  const i = e.featureAdapter, { startTimeField: r, endTimeField: n } = t;
  let l = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
  if (r && n)
    await e.forEach((a) => {
      const u = i.getAttribute(a, r), o = i.getAttribute(a, n);
      u == null || isNaN(u) || (l = Math.min(l, u)), o == null || isNaN(o) || (s = Math.max(s, o));
    });
  else {
    const a = r || n;
    await e.forEach((u) => {
      const o = i.getAttribute(u, a);
      o == null || isNaN(o) || (l = Math.min(l, o), s = Math.max(s, o));
    });
  }
  return { start: l, end: s };
}
function qt(t, e, i) {
  if (!e || !t)
    return null;
  const { startTimeField: r, endTimeField: n } = t;
  if (!r && !n)
    return null;
  const { start: l, end: s } = e;
  return l === null && s === null ? null : l === void 0 && s === void 0 ? $t() : r && n ? gt(i, r, n, l, s) : wt(i, r || n, l, s);
}
function gt(t, e, i, r, n) {
  return r != null && n != null ? (l) => {
    const s = t.getAttribute(l, e), a = t.getAttribute(l, i);
    return (s == null || s <= n) && (a == null || a >= r);
  } : r != null ? (l) => {
    const s = t.getAttribute(l, i);
    return s == null || s >= r;
  } : n != null ? (l) => {
    const s = t.getAttribute(l, e);
    return s == null || s <= n;
  } : void 0;
}
function wt(t, e, i, r) {
  return i != null && r != null && i === r ? (n) => t.getAttribute(n, e) === i : i != null && r != null ? (n) => {
    const l = t.getAttribute(n, e);
    return l >= i && l <= r;
  } : i != null ? (n) => t.getAttribute(n, e) >= i : r != null ? (n) => t.getAttribute(n, e) <= r : void 0;
}
function $t() {
  return () => !1;
}
export {
  Nt as G,
  Ut as I,
  x as M,
  d as P,
  Mt as Z,
  At as a,
  Ft as b,
  qt as n,
  Et as t,
  xt as v,
  st as z
};

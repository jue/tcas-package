import { D as q, fB as x, V as j, a4 as B, l as v, fM as J, fN as V, dm as D, aQ as b, r as Z, fO as z, fP as G, fQ as W, b1 as p, fR as $, fS as Y, fT as k, fU as Q, fV as X, fW as K, a7 as w, fX as M, a9 as R, es as L, fY as H, y as g, b6 as F, aX as ee } from "./index-j1oaLRcp.js";
import { f as P, g as E } from "./projectionSupport-eTH1ob6-.js";
function $e(e, t) {
  if (!e)
    return null;
  const n = t.featureAdapter, { startTimeField: r, endTimeField: i } = e;
  let s = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY;
  if (r && i)
    t.forEach((o) => {
      const a = n.getAttribute(o, r), u = n.getAttribute(o, i);
      a == null || isNaN(a) || (s = Math.min(s, a)), u == null || isNaN(u) || (l = Math.max(l, u));
    });
  else {
    const o = r || i;
    t.forEach((a) => {
      const u = n.getAttribute(a, o);
      u == null || isNaN(u) || (s = Math.min(s, u), l = Math.max(l, u));
    });
  }
  return { start: s, end: l };
}
function we(e, t, n) {
  if (!t || !e)
    return null;
  const { startTimeField: r, endTimeField: i } = e;
  if (!r && !i)
    return null;
  const { start: s, end: l } = t;
  return s === null && l === null ? null : s === void 0 && l === void 0 ? ie() : r && i ? te(n, r, i, s, l) : re(n, r || i, s, l);
}
function te(e, t, n, r, i) {
  return r != null && i != null ? (s) => {
    const l = e.getAttribute(s, t), o = e.getAttribute(s, n);
    return (l == null || l <= i) && (o == null || o >= r);
  } : r != null ? (s) => {
    const l = e.getAttribute(s, n);
    return l == null || l >= r;
  } : i != null ? (s) => {
    const l = e.getAttribute(s, t);
    return l == null || l <= i;
  } : void 0;
}
function re(e, t, n, r) {
  return n != null && r != null && n === r ? (i) => e.getAttribute(i, t) === n : n != null && r != null ? (i) => {
    const s = e.getAttribute(i, t);
    return s >= n && s <= r;
  } : n != null ? (i) => e.getAttribute(i, t) >= n : r != null ? (i) => e.getAttribute(i, t) <= r : void 0;
}
function ie() {
  return () => !1;
}
const ne = new q({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" }), A = Object.freeze({}), U = new p(), se = new p(), I = new p(), h = { esriGeometryPoint: $, esriGeometryPolyline: Y, esriGeometryPolygon: k, esriGeometryMultipoint: Q };
function Ie(e, t, n, r = e.hasZ, i = e.hasM) {
  if (v(t))
    return null;
  const s = e.hasZ && r, l = e.hasM && i;
  if (n) {
    const o = G(I, t, e.hasZ, e.hasM, "esriGeometryPoint", n, r, i);
    return $(o, s, l);
  }
  return $(t, s, l);
}
function y(e, t, n, r, i, s, l = t, o = n) {
  const a = t && l, u = n && o, f = Z(r) ? "coords" in r ? r : r.geometry : null;
  if (v(f))
    return null;
  if (i) {
    let c = z(se, f, t, n, e, i, l, o);
    return s && (c = G(I, c, a, u, e, s)), h[e](c, a, u);
  }
  if (s) {
    const c = G(I, f, t, n, e, s, l, o);
    return h[e](c, a, u);
  }
  return W(U, f, t, n, l, o), h[e](U, a, u);
}
async function ve(e, t, n) {
  const { outFields: r, orderByFields: i, groupByFieldsForStatistics: s, outStatistics: l } = e;
  if (r)
    for (let o = 0; o < r.length; o++)
      r[o] = r[o].trim();
  if (i)
    for (let o = 0; o < i.length; o++)
      i[o] = i[o].trim();
  if (s)
    for (let o = 0; o < s.length; o++)
      s[o] = s[o].trim();
  if (l)
    for (let o = 0; o < l.length; o++)
      l[o].onStatisticField && (l[o].onStatisticField = l[o].onStatisticField.trim());
  return e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference), le(e, t, n);
}
async function le(e, t, n) {
  if (!e)
    return null;
  let { where: r } = e;
  if (e.where = r = r && r.trim(), (!r || /^1 *= *1$/.test(r) || t && t === r) && (e.where = null), !e.geometry)
    return e;
  let i = await oe(e);
  if (e.distance = 0, e.units = null, e.spatialRel === "esriSpatialRelEnvelopeIntersects") {
    const { spatialReference: a } = e.geometry;
    i = x(i), i.spatialReference = a;
  }
  e.geometry = i, await P(i.spatialReference, n);
  const s = (await j(B(i)))[0];
  if (v(s))
    throw A;
  const l = s.toJSON(), o = await E(l, l.spatialReference, n);
  if (!o)
    throw A;
  return o.spatialReference = n, e.geometry = o, e;
}
async function oe(e) {
  const { geometry: t, distance: n, units: r } = e;
  if (n == null || "vertexAttributes" in t)
    return t;
  const i = t.spatialReference, s = r ? ne.fromJSON(r) : J(i), l = i && (V(i) || D(i)) ? t : await P(i, b).then(() => E(t, b));
  return (await ae())(l.spatialReference, l, n, s);
}
async function ae() {
  return (await import("./geometryEngineJSON-RRPcM-Hn.js").then((e) => e.g)).geodesicBuffer;
}
function Pe(e) {
  return e && T in e ? JSON.parse(JSON.stringify(e, ue)) : e;
}
const T = "_geVersion", ue = (e, t) => e !== T ? t : void 0;
function fe(e) {
  return e === "mesh" ? X : K(e);
}
function O(e, t) {
  return e ? t ? 4 : 3 : t ? 3 : 2;
}
function ce(e, t, n, r) {
  return _(e, t, n, r.coords[0], r.coords[1]);
}
function pe(e, t, n, r, i, s) {
  const l = O(i, s), { coords: o, lengths: a } = r;
  if (!a)
    return !1;
  for (let u = 0, f = 0; u < a.length; u++, f += l)
    if (!_(e, t, n, o[f], o[f + 1]))
      return !1;
  return !0;
}
function _(e, t, n, r, i) {
  if (!e)
    return !1;
  const s = O(t, n), { coords: l, lengths: o } = e;
  let a = !1, u = 0;
  for (const f of o)
    a = me(a, l, s, u, f, r, i), u += f * s;
  return a;
}
function me(e, t, n, r, i, s, l) {
  let o = e, a = r;
  for (let u = r, f = r + i * n; u < f; u += n) {
    a = u + n, a === f && (a = r);
    const c = t[u], m = t[u + 1], C = t[a], S = t[a + 1];
    (m < l && S >= l || S < l && m >= l) && c + (l - m) / (S - m) * (C - c) < s && (o = !o);
  }
  return o;
}
const d = "feature-store:unsupported-query", ye = { esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "intersects", esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: null }, N = { spatialRelationship: { esriSpatialRelIntersects: !0, esriSpatialRelContains: !0, esriSpatialRelWithin: !0, esriSpatialRelCrosses: !0, esriSpatialRelDisjoint: !0, esriSpatialRelTouches: !0, esriSpatialRelOverlaps: !0, esriSpatialRelEnvelopeIntersects: !0, esriSpatialRelIndexIntersects: !1, esriSpatialRelRelation: !1 }, queryGeometry: { esriGeometryPoint: !0, esriGeometryMultipoint: !0, esriGeometryPolyline: !0, esriGeometryPolygon: !0, esriGeometryEnvelope: !0 }, layerGeometry: { esriGeometryPoint: !0, esriGeometryMultipoint: !0, esriGeometryPolyline: !0, esriGeometryPolygon: !0, esriGeometryEnvelope: !1 } };
function Re(e) {
  return N.spatialRelationship[e] === !0;
}
function Se(e) {
  return N.queryGeometry[ee(e)] === !0;
}
function ge(e) {
  return N.layerGeometry[e] === !0;
}
function he() {
  return import("./geometryEngineJSON-RRPcM-Hn.js").then((e) => e.g);
}
function Ne(e, t, n, r, i) {
  if (w(t) && n === "esriGeometryPoint" && (e === "esriSpatialRelIntersects" || e === "esriSpatialRelContains")) {
    const s = M(new p(), t, !1, !1);
    return Promise.resolve((l) => ce(s, !1, !1, l));
  }
  if (w(t) && n === "esriGeometryMultipoint") {
    const s = M(new p(), t, !1, !1);
    if (e === "esriSpatialRelContains")
      return Promise.resolve((l) => pe(s, !1, !1, l, r, i));
  }
  if (R(t) && n === "esriGeometryPoint" && (e === "esriSpatialRelIntersects" || e === "esriSpatialRelContains"))
    return Promise.resolve((s) => L(t, y(n, r, i, s)));
  if (R(t) && n === "esriGeometryMultipoint" && e === "esriSpatialRelContains")
    return Promise.resolve((s) => H(t, y(n, r, i, s)));
  if (R(t) && e === "esriSpatialRelIntersects") {
    const s = fe(n);
    return Promise.resolve((l) => s(t, y(n, r, i, l)));
  }
  return he().then((s) => {
    const l = s[ye[e]].bind(null, t.spatialReference, t);
    return (o) => l(y(n, r, i, o));
  });
}
async function be(e, t, n) {
  const { spatialRel: r, geometry: i } = e;
  if (i) {
    if (!Re(r))
      throw new g(d, "Unsupported query spatial relationship", { query: e });
    if (F(i.spatialReference) && F(n)) {
      if (!Se(i))
        throw new g(d, "Unsupported query geometry type", { query: e });
      if (!ge(t))
        throw new g(d, "Unsupported layer geometry type", { query: e });
      if (e.outSR)
        return P(e.geometry && e.geometry.spatialReference, e.outSR);
    }
  }
}
function Me(e) {
  if (R(e))
    return !0;
  if (w(e)) {
    for (const t of e.rings)
      if (t.length !== 5 || t[0][0] !== t[1][0] || t[0][0] !== t[4][0] || t[2][0] !== t[3][0] || t[0][1] !== t[3][1] || t[0][1] !== t[4][1] || t[1][1] !== t[2][1])
        return !1;
    return !0;
  }
  return !1;
}
export {
  Me as I,
  y as J,
  Ie as O,
  ve as P,
  A as U,
  le as Z,
  be as a,
  we as n,
  $e as t,
  Ne as v,
  Pe as z
};

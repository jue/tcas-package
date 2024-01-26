import { G as r } from "./geometryEngineBase-JcvP0DtW.js";
import { t as o } from "./json-uwIaZKlZ.js";
function s(n) {
  return r.extendedSpatialReferenceInfo(n);
}
function l(n, e, t) {
  return r.clip(o, n, e, t);
}
function a(n, e, t) {
  return r.cut(o, n, e, t);
}
function p(n, e, t) {
  return r.contains(o, n, e, t);
}
function d(n, e, t) {
  return r.crosses(o, n, e, t);
}
function g(n, e, t, i) {
  return r.distance(o, n, e, t, i);
}
function m(n, e, t) {
  return r.equals(o, n, e, t);
}
function h(n, e, t) {
  return r.intersects(o, n, e, t);
}
function y(n, e, t) {
  return r.touches(o, n, e, t);
}
function x(n, e, t) {
  return r.within(o, n, e, t);
}
function w(n, e, t) {
  return r.disjoint(o, n, e, t);
}
function A(n, e, t) {
  return r.overlaps(o, n, e, t);
}
function S(n, e, t, i) {
  return r.relate(o, n, e, t, i);
}
function V(n, e) {
  return r.isSimple(o, n, e);
}
function z(n, e) {
  return r.simplify(o, n, e);
}
function _(n, e, t = !1) {
  return r.convexHull(o, n, e, t);
}
function b(n, e, t) {
  return r.difference(o, n, e, t);
}
function v(n, e, t) {
  return r.symmetricDifference(o, n, e, t);
}
function E(n, e, t) {
  return r.intersect(o, n, e, t);
}
function j(n, e, t = null) {
  return r.union(o, n, e, t);
}
function D(n, e, t, i, c, u, f) {
  return r.offset(o, n, e, t, i, c, u, f);
}
function H(n, e, t, i, c = !1) {
  return r.buffer(o, n, e, t, i, c);
}
function I(n, e, t, i, c, u, f) {
  return r.geodesicBuffer(o, n, e, t, i, c, u, f);
}
function L(n, e, t, i = !0) {
  return r.nearestCoordinate(o, n, e, t, i);
}
function R(n, e, t) {
  return r.nearestVertex(o, n, e, t);
}
function q(n, e, t, i, c) {
  return r.nearestVertices(o, n, e, t, i, c);
}
function B(n, e, t, i) {
  if (e == null || i == null)
    throw new Error("Illegal Argument Exception");
  const c = r.rotate(e, t, i);
  return c.spatialReference = n, c;
}
function C(n, e, t) {
  if (e == null || t == null)
    throw new Error("Illegal Argument Exception");
  const i = r.flipHorizontal(e, t);
  return i.spatialReference = n, i;
}
function O(n, e, t) {
  if (e == null || t == null)
    throw new Error("Illegal Argument Exception");
  const i = r.flipVertical(e, t);
  return i.spatialReference = n, i;
}
function G(n, e, t, i, c) {
  return r.generalize(o, n, e, t, i, c);
}
function $(n, e, t, i) {
  return r.densify(o, n, e, t, i);
}
function k(n, e, t, i, c = 0) {
  return r.geodesicDensify(o, n, e, t, i, c);
}
function J(n, e, t) {
  return r.planarArea(o, n, e, t);
}
function M(n, e, t) {
  return r.planarLength(o, n, e, t);
}
function N(n, e, t, i) {
  return r.geodesicArea(o, n, e, t, i);
}
function P(n, e, t, i) {
  return r.geodesicLength(o, n, e, t, i);
}
const K = Object.freeze({ __proto__: null, extendedSpatialReferenceInfo: s, clip: l, cut: a, contains: p, crosses: d, distance: g, equals: m, intersects: h, touches: y, within: x, disjoint: w, overlaps: A, relate: S, isSimple: V, simplify: z, convexHull: _, difference: b, symmetricDifference: v, intersect: E, union: j, offset: D, buffer: H, geodesicBuffer: I, nearestCoordinate: L, nearestVertex: R, nearestVertices: q, rotate: B, flipHorizontal: C, flipVertical: O, generalize: G, densify: $, geodesicDensify: k, planarArea: J, planarLength: M, geodesicArea: N, geodesicLength: P }), Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buffer: H,
  clip: l,
  contains: p,
  convexHull: _,
  crosses: d,
  cut: a,
  densify: $,
  difference: b,
  disjoint: w,
  distance: g,
  equals: m,
  extendedSpatialReferenceInfo: s,
  flipHorizontal: C,
  flipVertical: O,
  generalize: G,
  geodesicArea: N,
  geodesicBuffer: I,
  geodesicDensify: k,
  geodesicLength: P,
  intersect: E,
  intersects: h,
  isSimple: V,
  nearestCoordinate: L,
  nearestVertex: R,
  nearestVertices: q,
  offset: D,
  overlaps: A,
  planarArea: J,
  planarLength: M,
  relate: S,
  rotate: B,
  simplify: z,
  symmetricDifference: v,
  touches: y,
  union: j,
  within: x
}, Symbol.toStringTag, { value: "Module" }));
export {
  Q as g,
  K as k
};

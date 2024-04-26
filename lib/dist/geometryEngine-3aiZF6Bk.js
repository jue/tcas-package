import { G as r } from "./geometryEngineBase-JcvP0DtW.js";
import { hydratedAdapter as i } from "./hydrated-E_sxY9fb.js";
import "./index-Ek1MTSEY.js";
import "vue";
function o(n) {
  return Array.isArray(n) ? n[0].spatialReference : n && n.spatialReference;
}
function d(n) {
  return r.extendedSpatialReferenceInfo(n);
}
function m(n, e) {
  return r.clip(i, o(n), n, e);
}
function x(n, e) {
  return r.cut(i, o(n), n, e);
}
function h(n, e) {
  return r.contains(i, o(n), n, e);
}
function w(n, e) {
  return r.crosses(i, o(n), n, e);
}
function A(n, e, t) {
  return r.distance(i, o(n), n, e, t);
}
function E(n, e) {
  return r.equals(i, o(n), n, e);
}
function y(n, e) {
  return r.intersects(i, o(n), n, e);
}
function R(n, e) {
  return r.touches(i, o(n), n, e);
}
function I(n, e) {
  return r.within(i, o(n), n, e);
}
function v(n, e) {
  return r.disjoint(i, o(n), n, e);
}
function S(n, e) {
  return r.overlaps(i, o(n), n, e);
}
function V(n, e, t) {
  return r.relate(i, o(n), n, e, t);
}
function z(n) {
  return r.isSimple(i, o(n), n);
}
function D(n) {
  return r.simplify(i, o(n), n);
}
function H(n, e = !1) {
  return r.convexHull(i, o(n), n, e);
}
function L(n, e) {
  return r.difference(i, o(n), n, e);
}
function J(n, e) {
  return r.symmetricDifference(i, o(n), n, e);
}
function N(n, e) {
  return r.intersect(i, o(n), n, e);
}
function O(n, e = null) {
  return r.union(i, o(n), n, e);
}
function b(n, e, t, u, a, s) {
  return r.offset(i, o(n), n, e, t, u, a, s);
}
function j(n, e, t, u = !1) {
  return r.buffer(i, o(n), n, e, t, u);
}
function q(n, e, t, u, a, s) {
  return r.geodesicBuffer(i, o(n), n, e, t, u, a, s);
}
function B(n, e, t = !0) {
  return r.nearestCoordinate(i, o(n), n, e, t);
}
function C(n, e) {
  return r.nearestVertex(i, o(n), n, e);
}
function $(n, e, t, u) {
  return r.nearestVertices(i, o(n), n, e, t, u);
}
function c(n) {
  return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? n.extent.center : null;
}
function k(n, e, t) {
  var u;
  if (n == null)
    throw new Error("Illegal Argument Exception");
  const a = n.spatialReference;
  if ((t = (u = t) != null ? u : c(n)) == null)
    throw new Error("Illegal Argument Exception");
  const s = n.constructor.fromJSON(r.rotate(n, e, t));
  return s.spatialReference = a, s;
}
function G(n, e) {
  var t;
  if (n == null)
    throw new Error("Illegal Argument Exception");
  const u = n.spatialReference;
  if ((e = (t = e) != null ? t : c(n)) == null)
    throw new Error("Illegal Argument Exception");
  const a = n.constructor.fromJSON(r.flipHorizontal(n, e));
  return a.spatialReference = u, a;
}
function F(n, e) {
  var t;
  if (n == null)
    throw new Error("Illegal Argument Exception");
  const u = n.spatialReference;
  if ((e = (t = e) != null ? t : c(n)) == null)
    throw new Error("Illegal Argument Exception");
  const a = n.constructor.fromJSON(r.flipVertical(n, e));
  return a.spatialReference = u, a;
}
function K(n, e, t, u) {
  return r.generalize(i, o(n), n, e, t, u);
}
function M(n, e, t) {
  return r.densify(i, o(n), n, e, t);
}
function P(n, e, t, u = 0) {
  return r.geodesicDensify(i, o(n), n, e, t, u);
}
function Q(n, e) {
  return r.planarArea(i, o(n), n, e);
}
function T(n, e) {
  return r.planarLength(i, o(n), n, e);
}
function U(n, e, t) {
  return r.geodesicArea(i, o(n), n, e, t);
}
function W(n, e, t) {
  return r.geodesicLength(i, o(n), n, e, t);
}
export {
  j as buffer,
  m as clip,
  h as contains,
  H as convexHull,
  w as crosses,
  x as cut,
  M as densify,
  L as difference,
  v as disjoint,
  A as distance,
  E as equals,
  d as extendedSpatialReferenceInfo,
  G as flipHorizontal,
  F as flipVertical,
  K as generalize,
  U as geodesicArea,
  q as geodesicBuffer,
  P as geodesicDensify,
  W as geodesicLength,
  N as intersect,
  y as intersects,
  z as isSimple,
  B as nearestCoordinate,
  C as nearestVertex,
  $ as nearestVertices,
  b as offset,
  S as overlaps,
  Q as planarArea,
  T as planarLength,
  V as relate,
  k as rotate,
  D as simplify,
  J as symmetricDifference,
  R as touches,
  O as union,
  I as within
};

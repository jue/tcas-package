import { a4 as f, cV as p } from "./index-j1oaLRcp.js";
function i(t) {
  var r;
  return Array.isArray(t) ? (r = t[0]) == null ? void 0 : r.spatialReference : t == null ? void 0 : t.spatialReference;
}
function l(t) {
  return t && (Array.isArray(t) ? t.map(l) : t.toJSON ? t.toJSON() : t);
}
function u(t) {
  return Array.isArray(t) ? t.map((r) => f(r)) : f(t);
}
function w(t, r) {
  let n;
  return Array.isArray(t) ? n = t : (n = [], n.push(t), r != null && n.push(r)), n;
}
let s;
async function d() {
  return s || (s = p("geometryEngineWorker", { strategy: "distributed" })), s;
}
async function e(t, r) {
  return (await d()).invoke("executeGEOperation", { operation: t, parameters: l(r) });
}
async function A(t, r) {
  return u(await e("clip", [i(t), t, r]));
}
async function h(t, r) {
  return u(await e("cut", [i(t), t, r]));
}
function v(t, r) {
  return e("contains", [i(t), t, r]);
}
function x(t, r) {
  return e("crosses", [i(t), t, r]);
}
function E(t, r, n) {
  return e("distance", [i(t), t, r, n]);
}
function O(t, r) {
  return e("equals", [i(t), t, r]);
}
function R(t, r) {
  return e("intersects", [i(t), t, r]);
}
function S(t, r) {
  return e("touches", [i(t), t, r]);
}
function J(t, r) {
  return e("within", [i(t), t, r]);
}
function b(t, r) {
  return e("disjoint", [i(t), t, r]);
}
function k(t, r) {
  return e("overlaps", [i(t), t, r]);
}
function L(t, r, n) {
  return e("relate", [i(t), t, r, n]);
}
function N(t) {
  return e("isSimple", [i(t), t]);
}
async function $(t) {
  return u(await e("simplify", [i(t), t]));
}
async function j(t, r) {
  return u(await e("difference", [i(t), t, r]));
}
async function q(t, r) {
  return u(await e("symmetricDifference", [i(t), t, r]));
}
async function D(t, r) {
  return u(await e("intersect", [i(t), t, r]));
}
async function G(t, r = null) {
  const n = w(t, r);
  return u(await e("union", [i(n), n]));
}
async function I(t, r, n, a, c, o) {
  return u(await e("offset", [i(t), t, r, n, a, c, o]));
}
async function V(t, r, n, a = !1) {
  const c = [i(t), t, r, n, a];
  return u(await e("buffer", c));
}
async function W(t, r, n, a, c, o) {
  const y = [i(t), t, r, n, a, c, o];
  return u(await e("geodesicBuffer", y));
}
function g(t) {
  return "xmin" in t ? t.center : "x" in t ? t : t.extent.center;
}
async function z(t, r, n) {
  var a;
  if (t == null)
    throw new Error("Illegal Argument Exception");
  const c = t.spatialReference;
  n = (a = n) != null ? a : g(t);
  const o = t.constructor.fromJSON(await e("rotate", [c, t, r, n]));
  return o.spatialReference = c, o;
}
async function B(t, r, n, a) {
  return u(await e("generalize", [i(t), t, r, n, a]));
}
async function F(t, r, n) {
  return u(await e("densify", [i(t), t, r, n]));
}
async function K(t, r, n, a = 0) {
  return u(await e("geodesicDensify", [i(t), t, r, n, a]));
}
function M(t, r) {
  return e("planarArea", [i(t), t, r]);
}
function P(t, r) {
  return e("planarLength", [i(t), t, r]);
}
function U(t, r, n) {
  return e("geodesicArea", [i(t), t, r, n]);
}
function C(t, r, n) {
  return e("geodesicLength", [i(t), t, r, n]);
}
export {
  S as A,
  q as E,
  P as F,
  B as G,
  I,
  $ as J,
  U as K,
  C as M,
  k as O,
  F as P,
  j as R,
  b as S,
  K as U,
  V,
  M as W,
  W as b,
  O as d,
  R as g,
  L as h,
  D as j,
  G as k,
  A as l,
  E as m,
  v as p,
  z as q,
  N as v,
  x as w,
  J as x,
  h as y
};

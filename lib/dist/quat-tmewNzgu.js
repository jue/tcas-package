import { e as L } from "./mat3f64-Hpz0k8AN.js";
import { e as x } from "./quatf64-7HSf-W7T.js";
import { bH as y, bI as O, bJ as S, bK as T, bL as W, bM as X, bN as Y, bO as D, bP as H, bQ as J, bR as K, bS as N, bT as Q, bU as g, bV as R, bW as U, bh as V, bi as A, bX as Z } from "./index-HxXrdrYt.js";
function k(n) {
  return n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n;
}
function _(n, o, a) {
  a *= 0.5;
  const r = Math.sin(a);
  return n[0] = r * o[0], n[1] = r * o[1], n[2] = r * o[2], n[3] = Math.cos(a), n;
}
function w(n, o) {
  const a = 2 * Math.acos(o[3]), r = Math.sin(a / 2);
  return r > y() ? (n[0] = o[0] / r, n[1] = o[1] / r, n[2] = o[2] / r) : (n[0] = 1, n[1] = 0, n[2] = 0), a;
}
function j(n, o, a) {
  const r = o[0], e = o[1], c = o[2], t = o[3], u = a[0], i = a[1], h = a[2], M = a[3];
  return n[0] = r * M + t * u + e * h - c * i, n[1] = e * M + t * i + c * u - r * h, n[2] = c * M + t * h + r * i - e * u, n[3] = t * M - r * u - e * i - c * h, n;
}
function B(n, o, a) {
  a *= 0.5;
  const r = o[0], e = o[1], c = o[2], t = o[3], u = Math.sin(a), i = Math.cos(a);
  return n[0] = r * i + t * u, n[1] = e * i + c * u, n[2] = c * i - e * u, n[3] = t * i - r * u, n;
}
function C(n, o, a) {
  a *= 0.5;
  const r = o[0], e = o[1], c = o[2], t = o[3], u = Math.sin(a), i = Math.cos(a);
  return n[0] = r * i - c * u, n[1] = e * i + t * u, n[2] = c * i + r * u, n[3] = t * i - e * u, n;
}
function F(n, o, a) {
  a *= 0.5;
  const r = o[0], e = o[1], c = o[2], t = o[3], u = Math.sin(a), i = Math.cos(a);
  return n[0] = r * i + e * u, n[1] = e * i - r * u, n[2] = c * i + t * u, n[3] = t * i - c * u, n;
}
function G(n, o) {
  const a = o[0], r = o[1], e = o[2];
  return n[0] = a, n[1] = r, n[2] = e, n[3] = Math.sqrt(Math.abs(1 - a * a - r * r - e * e)), n;
}
function $(n, o, a, r) {
  const e = o[0], c = o[1], t = o[2], u = o[3];
  let i, h, M, l, f, b = a[0], m = a[1], q = a[2], p = a[3];
  return h = e * b + c * m + t * q + u * p, h < 0 && (h = -h, b = -b, m = -m, q = -q, p = -p), 1 - h > y() ? (i = Math.acos(h), M = Math.sin(i), l = Math.sin((1 - r) * i) / M, f = Math.sin(r * i) / M) : (l = 1 - r, f = r), n[0] = l * e + f * b, n[1] = l * c + f * m, n[2] = l * t + f * q, n[3] = l * u + f * p, n;
}
function nn(n) {
  const o = Z, a = o(), r = o(), e = o(), c = Math.sqrt(1 - a), t = Math.sqrt(a);
  return n[0] = c * Math.sin(2 * Math.PI * r), n[1] = c * Math.cos(2 * Math.PI * r), n[2] = t * Math.sin(2 * Math.PI * e), n[3] = t * Math.cos(2 * Math.PI * e), n;
}
function on(n, o) {
  const a = o[0], r = o[1], e = o[2], c = o[3], t = a * a + r * r + e * e + c * c, u = t ? 1 / t : 0;
  return n[0] = -a * u, n[1] = -r * u, n[2] = -e * u, n[3] = c * u, n;
}
function rn(n, o) {
  return n[0] = -o[0], n[1] = -o[1], n[2] = -o[2], n[3] = o[3], n;
}
function v(n, o) {
  const a = o[0] + o[4] + o[8];
  let r;
  if (a > 0)
    r = Math.sqrt(a + 1), n[3] = 0.5 * r, r = 0.5 / r, n[0] = (o[5] - o[7]) * r, n[1] = (o[6] - o[2]) * r, n[2] = (o[1] - o[3]) * r;
  else {
    let e = 0;
    o[4] > o[0] && (e = 1), o[8] > o[3 * e + e] && (e = 2);
    const c = (e + 1) % 3, t = (e + 2) % 3;
    r = Math.sqrt(o[3 * e + e] - o[3 * c + c] - o[3 * t + t] + 1), n[e] = 0.5 * r, r = 0.5 / r, n[3] = (o[3 * c + t] - o[3 * t + c]) * r, n[c] = (o[3 * c + e] + o[3 * e + c]) * r, n[t] = (o[3 * t + e] + o[3 * e + t]) * r;
  }
  return n;
}
function en(n, o, a, r) {
  const e = 0.5 * Math.PI / 180;
  o *= e, a *= e, r *= e;
  const c = Math.sin(o), t = Math.cos(o), u = Math.sin(a), i = Math.cos(a), h = Math.sin(r), M = Math.cos(r);
  return n[0] = c * i * M - t * u * h, n[1] = t * u * M + c * i * h, n[2] = t * i * h - c * u * M, n[3] = t * i * M + c * u * h, n;
}
function an(n) {
  return "quat(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + ")";
}
const cn = O, tn = S, un = T, hn = j, Mn = W, sn = X, ln = Y, z = D, fn = z, E = H, bn = E, P = J, mn = K, qn = N;
function pn(n, o, a) {
  const r = Q(o, a);
  return r < -0.999999 ? (g(s, $n, o), R(s) < 1e-6 && g(s, gn, o), U(s, s), _(n, s, Math.PI), n) : r > 0.999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n) : (g(s, o, a), n[0] = s[0], n[1] = s[1], n[2] = s[2], n[3] = 1 + r, P(n, n));
}
const s = V(), $n = A(1, 0, 0), gn = A(0, 1, 0);
function Pn(n, o, a, r, e, c) {
  return $(d, o, e, c), $(I, a, r, c), $(n, d, I, 2 * c * (1 - c)), n;
}
const d = x(), I = x();
function dn(n, o, a, r) {
  const e = In;
  return e[0] = a[0], e[3] = a[1], e[6] = a[2], e[1] = r[0], e[4] = r[1], e[7] = r[2], e[2] = -o[0], e[5] = -o[1], e[8] = -o[2], P(n, v(n, e));
}
const In = L();
Object.freeze(Object.defineProperty({ __proto__: null, add: un, calculateW: G, conjugate: rn, copy: cn, dot: sn, equals: qn, exactEquals: mn, fromEuler: en, fromMat3: v, getAxisAngle: w, identity: k, invert: on, len: fn, length: z, lerp: ln, mul: hn, multiply: j, normalize: P, random: nn, rotateX: B, rotateY: C, rotateZ: F, rotationTo: pn, scale: Mn, set: tn, setAxes: dn, setAxisAngle: _, slerp: $, sqlerp: Pn, sqrLen: bn, squaredLength: E, str: an }, Symbol.toStringTag, { value: "Module" }));
export {
  mn as K,
  rn as S,
  en as k,
  _ as v,
  w as x,
  j as y
};

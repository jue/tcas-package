import { s as A } from "./index-Ek1MTSEY.js";
function q() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function L(t, n) {
  return new Float64Array(t, n, 9);
}
function F() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function z(t) {
  return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]];
}
function C(t, n) {
  return new Float64Array(t, n, 16);
}
const D = F();
function j() {
  return [0, 0, 0, 1];
}
function E(t) {
  return [t[0], t[1], t[2], t[3]];
}
function G(t, n) {
  return new Float64Array(t, n, 4);
}
const H = j(), w = A.getLogger("geoscene.views.3d.support.buffer.math");
function J(t, n, e) {
  if (t.count !== n.count)
    return void w.error("source and destination buffers need to have the same number of elements");
  const i = t.count, f = e[0], c = e[1], d = e[2], s = e[4], o = e[5], r = e[6], u = e[8], a = e[9], B = e[10], p = e[12], l = e[13], v = e[14], b = t.typedBuffer, $ = t.typedBufferStride, m = n.typedBuffer, x = n.typedBufferStride;
  for (let y = 0; y < i; y++) {
    const S = y * $, h = y * x, g = m[h], I = m[h + 1], M = m[h + 2];
    b[S] = f * g + s * I + u * M + p, b[S + 1] = c * g + o * I + a * M + l, b[S + 2] = d * g + r * I + B * M + v;
  }
}
function K(t, n, e) {
  if (t.count !== n.count)
    return void w.error("source and destination buffers need to have the same number of elements");
  const i = t.count, f = e[0], c = e[1], d = e[2], s = e[3], o = e[4], r = e[5], u = e[6], a = e[7], B = e[8], p = t.typedBuffer, l = t.typedBufferStride, v = n.typedBuffer, b = n.typedBufferStride;
  for (let $ = 0; $ < i; $++) {
    const m = $ * l, x = $ * b, y = v[x], S = v[x + 1], h = v[x + 2];
    p[m] = f * y + s * S + u * h, p[m + 1] = c * y + o * S + a * h, p[m + 2] = d * y + r * S + B * h;
  }
}
function N(t, n, e) {
  const i = Math.min(t.count, n.count), f = t.typedBuffer, c = t.typedBufferStride, d = n.typedBuffer, s = n.typedBufferStride;
  for (let o = 0; o < i; o++) {
    const r = o * c, u = o * s;
    f[r] = e * d[u], f[r + 1] = e * d[u + 1], f[r + 2] = e * d[u + 2];
  }
}
function O(t, n) {
  const e = Math.min(t.count, n.count), i = t.typedBuffer, f = t.typedBufferStride, c = n.typedBuffer, d = n.typedBufferStride;
  for (let s = 0; s < e; s++) {
    const o = s * f, r = s * d, u = c[r], a = c[r + 1], B = c[r + 2], p = Math.sqrt(u * u + a * a + B * B);
    if (p > 0) {
      const l = 1 / p;
      i[o] = l * u, i[o + 1] = l * a, i[o + 2] = l * B;
    }
  }
}
function P(t, n, e) {
  const i = Math.min(t.count, n.count), f = t.typedBuffer, c = t.typedBufferStride, d = n.typedBuffer, s = n.typedBufferStride;
  for (let o = 0; o < i; o++) {
    const r = o * c, u = o * s;
    f[r] = d[u] >> e, f[r + 1] = d[u + 1] >> e, f[r + 2] = d[u + 2] >> e;
  }
}
function Q(t, n, e) {
  const i = t.typedBuffer, f = t.typedBufferStride, c = n.typedBuffer, d = n.typedBufferStride, s = e ? e.count : n.count;
  let o = (e && e.dstIndex ? e.dstIndex : 0) * f, r = (e && e.srcIndex ? e.srcIndex : 0) * d;
  for (let u = 0; u < s; ++u)
    i[o] = c[r], i[o + 1] = c[r + 1], i[o + 2] = c[r + 2], o += f, r += d;
}
function R(t, n, e, i, f) {
  var c, d;
  const s = t.typedBuffer, o = t.typedBufferStride, r = (c = f == null ? void 0 : f.count) != null ? c : t.count;
  let u = ((d = f == null ? void 0 : f.dstIndex) != null ? d : 0) * o;
  for (let a = 0; a < r; ++a)
    s[u] = n, s[u + 1] = e, s[u + 2] = i, u += o;
}
export {
  Q as a,
  q as b,
  j as c,
  F as d,
  J as e,
  K as f,
  D as g,
  E as h,
  H as i,
  w as j,
  z as k,
  L as l,
  C as m,
  P as n,
  O as o,
  G as p,
  N as r,
  R as t
};

import { l as O, dj as $, dk as w, r as k, dl as q, b6 as V, J as S, h as Z, dm as z, dn as A } from "./index-j1oaLRcp.js";
import { t as P } from "./json-uwIaZKlZ.js";
function d(s, n) {
  return s ? n ? 4 : 3 : n ? 3 : 2;
}
function X(s, n, r, e, i) {
  if (O(n) || !n.lengths.length)
    return null;
  const l = (i == null ? void 0 : i.originPosition) === "upperLeft" ? -1 : 1;
  s.lengths.length && (s.lengths.length = 0), s.coords.length && (s.coords.length = 0);
  const t = s.coords, c = [], u = r ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: a, coords: N } = n, _ = d(r, e);
  let T = 0;
  for (const o of a) {
    const h = J(u, N, T, o, r, e, l);
    h && c.push(h), T += o * _;
  }
  if (c.sort((o, h) => {
    let f = l * o[2] - l * h[2];
    return f === 0 && r && (f = o[4] - h[4]), f;
  }), c.length) {
    let o = 6 * c[0][2];
    t[0] = c[0][0] / o, t[1] = c[0][1] / o, r && (o = 6 * c[0][4], t[2] = o !== 0 ? c[0][3] / o : 0), (t[0] < u[0] || t[0] > u[1] || t[1] < u[2] || t[1] > u[3] || r && (t[2] < u[4] || t[2] > u[5])) && (t.length = 0);
  }
  if (!t.length) {
    const o = n.lengths[0] ? L(N, 0, a[0], r, e) : null;
    if (!o)
      return null;
    t[0] = o[0], t[1] = o[1], r && o.length > 2 && (t[2] = o[2]);
  }
  return s;
}
function J(s, n, r, e, i, l, t = 1) {
  const c = d(i, l);
  let u = r, a = r + c, N = 0, _ = 0, T = 0, o = 0, h = 0;
  for (let b = 0, x = e - 1; b < x; b++, u += c, a += c) {
    const I = n[u], g = n[u + 1], m = n[u + 2], p = n[a], M = n[a + 1], F = n[a + 2];
    let E = I * M - p * g;
    o += E, N += (I + p) * E, _ += (g + M) * E, i && (E = I * F - p * m, T += (m + F) * E, h += E), I < s[0] && (s[0] = I), I > s[1] && (s[1] = I), g < s[2] && (s[2] = g), g > s[3] && (s[3] = g), i && (m < s[4] && (s[4] = m), m > s[5] && (s[5] = m));
  }
  if (o * t > 0 && (o *= -1), h * t > 0 && (h *= -1), !o)
    return null;
  const f = [N, _, 0.5 * o];
  return i && (f[3] = T, f[4] = 0.5 * h), f;
}
function L(s, n, r, e, i) {
  const l = d(e, i);
  let t = n, c = n + l, u = 0, a = 0, N = 0, _ = 0;
  for (let T = 0, o = r - 1; T < o; T++, t += l, c += l) {
    const h = s[t], f = s[t + 1], b = s[t + 2], x = s[c], I = s[c + 1], g = s[c + 2], m = e ? C(h, f, b, x, I, g) : B(h, f, x, I);
    if (m)
      if (u += m, e) {
        const p = H(h, f, b, x, I, g);
        a += m * p[0], N += m * p[1], _ += m * p[2];
      } else {
        const p = D(h, f, x, I);
        a += m * p[0], N += m * p[1];
      }
  }
  return u > 0 ? e ? [a / u, N / u, _ / u] : [a / u, N / u] : r > 0 ? e ? [s[n], s[n + 1], s[n + 2]] : [s[n], s[n + 1]] : null;
}
function B(s, n, r, e) {
  const i = r - s, l = e - n;
  return Math.sqrt(i * i + l * l);
}
function C(s, n, r, e, i, l) {
  const t = e - s, c = i - n, u = l - r;
  return Math.sqrt(t * t + c * c + u * u);
}
function D(s, n, r, e) {
  return [s + 0.5 * (r - s), n + 0.5 * (e - n)];
}
function H(s, n, r, e, i, l) {
  return [s + 0.5 * (e - s), n + 0.5 * (i - n), r + 0.5 * (l - r)];
}
const y = [0, 0];
function R(s, n) {
  if (!n)
    return null;
  if ("x" in n) {
    const r = { x: 0, y: 0 };
    return [r.x, r.y] = s(n.x, n.y, y), n.z != null && (r.z = n.z), n.m != null && (r.m = n.m), r;
  }
  if ("xmin" in n) {
    const r = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [r.xmin, r.ymin] = s(n.xmin, n.ymin, y), [r.xmax, r.ymax] = s(n.xmax, n.ymax, y), n.hasZ && (r.zmin = n.zmin, r.zmax = n.zmax, r.hasZ = !0), n.hasM && (r.mmin = n.mmin, r.mmax = n.mmax, r.hasM = !0), r;
  }
  return "rings" in n ? { rings: Y(n.rings, s), hasM: n.hasM, hasZ: n.hasZ } : "paths" in n ? { paths: Y(n.paths, s), hasM: n.hasM, hasZ: n.hasZ } : "points" in n ? { points: j(n.points, s), hasM: n.hasM, hasZ: n.hasZ } : void 0;
}
function Y(s, n) {
  const r = [];
  for (const e of s)
    r.push(j(e, n));
  return r;
}
function j(s, n) {
  const r = [];
  for (const e of s) {
    const i = n(e[0], e[1], [0, 0]);
    r.push(i), e.length > 2 && i.push(e[2]), e.length > 3 && i.push(e[3]);
  }
  return r;
}
async function nn(s, n) {
  if (!n)
    return;
  const r = Array.isArray(s) ? s.map((e) => k(e.geometry) && e.geometry.spatialReference) : [s];
  await q(r.map((e) => ({ source: e, dest: n })));
}
const v = R.bind(null, $), G = R.bind(null, w);
function sn(s, n, r) {
  if (!s || (r || (r = n, n = s.spatialReference), !V(n) || !V(r) || S(n, r)))
    return s;
  if (Z(n, r)) {
    const e = z(r) ? v(s) : G(s);
    return e.spatialReference = r, e;
  }
  return A(P, [s], n, r, null)[0];
}
class K {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  async push(n, r, e) {
    if (!n || !n.length || !r || !e || S(r, e))
      return n;
    const i = { geometries: n, inSpatialReference: r, outSpatialReference: e, resolve: null };
    return this._jobs.push(i), new Promise((l) => {
      i.resolve = l, this._timer === null && (this._timer = setTimeout(this._process, 10));
    });
  }
  _process() {
    this._timer = null;
    const n = this._jobs.shift();
    if (!n)
      return;
    const { geometries: r, inSpatialReference: e, outSpatialReference: i, resolve: l } = n;
    Z(e, i) ? z(i) ? l(r.map(v)) : l(r.map(G)) : l(A(P, r, e, i, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
}
const Q = new K();
function rn(s, n, r) {
  return Q.push(s, n, r);
}
export {
  rn as M,
  X as e,
  nn as f,
  sn as g
};

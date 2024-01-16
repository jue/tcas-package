import { i3 as T, i4 as K, i5 as N, i6 as W, cc as V, bh as $, bT as v, ce as g, ch as d, cg as P, i7 as h, hV as Y, i8 as k, bI as S, gU as Z, cd as D, s as F, hw as q, bU as x, i9 as G, hg as H, cf as J, bW as tt, ia as R, ep as C, ht as et, hu as st } from "./index-h53IWweP.js";
import { E as it } from "./ByteSizeUnit-dxTdcbwN.js";
import { n as rt } from "./mat3f64-Hpz0k8AN.js";
import { n as nt } from "./mat4f64-kAXAVCnO.js";
import { n as ot } from "./quatf64-7HSf-W7T.js";
class ct {
  constructor(e) {
    this._allocator = e, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return this._itemsPtr === 0 && T(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const e = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * E);
    this._items.length = Math.min(e, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let e = 0; e < Math.max(8, Math.min(this._items.length, E)); e++)
      this._items.push(this._allocator());
  }
}
const E = 1024;
let l = class a {
  constructor(e, s, i) {
    this._itemByteSize = e, this._itemCreate = s, this._buffers = new Array(), this._items = new Array(), this._itemsPtr = 0, this._itemsPerBuffer = Math.ceil(i / this._itemByteSize);
  }
  get() {
    this._itemsPtr === 0 && T(() => this._reset());
    const e = Math.floor(this._itemsPtr / this._itemsPerBuffer);
    for (; this._buffers.length <= e; ) {
      const s = new ArrayBuffer(this._itemsPerBuffer * this._itemByteSize);
      for (let i = 0; i < this._itemsPerBuffer; ++i)
        this._items.push(this._itemCreate(s, i * this._itemByteSize));
      this._buffers.push(s);
    }
    return this._items[this._itemsPtr++];
  }
  _reset() {
    const e = 2 * (Math.floor(this._itemsPtr / this._itemsPerBuffer) + 1);
    for (; this._buffers.length > e; )
      this._buffers.pop(), this._items.length = this._buffers.length * this._itemsPerBuffer;
    this._itemsPtr = 0;
  }
  static createVec2f64(e = m) {
    return new a(16, K, e);
  }
  static createVec3f64(e = m) {
    return new a(24, N, e);
  }
  static createVec4f64(e = m) {
    return new a(32, W, e);
  }
  static createMat3f64(e = m) {
    return new a(72, rt, e);
  }
  static createMat4f64(e = m) {
    return new a(128, nt, e);
  }
  static createQuatf64(e = m) {
    return new a(32, ot, e);
  }
  get test() {
    return { size: this._buffers.length * this._itemsPerBuffer * this._itemByteSize };
  }
};
const m = 4 * it.KILOBYTES;
l.createVec2f64();
const f = l.createVec3f64();
l.createVec4f64();
l.createMat3f64();
const ut = l.createMat4f64();
l.createQuatf64();
var _;
(function(t) {
  t[t.X = 0] = "X", t[t.Y = 1] = "Y", t[t.Z = 2] = "Z";
})(_ || (_ = {}));
function at(t) {
  return t ? O(V(t.origin), V(t.direction)) : O($(), $());
}
function O(t, e) {
  return { origin: t, direction: e };
}
function Yt(t, e) {
  const s = ft.get();
  return s.origin = t, s.direction = e, s;
}
function ht(t, e, s) {
  const i = v(t.direction, g(s, e, t.origin));
  return d(s, t.origin, P(s, t.direction, i)), s;
}
const ft = new ct(() => at());
function mt(t, e) {
  const s = v(t, e) / (h(t) * h(e));
  return -Y(s);
}
const _t = M();
function M() {
  return k();
}
function X(t, e = M()) {
  return S(e, t);
}
function gt(t, e) {
  return Z(t[0], t[1], t[2], e);
}
function lt(t) {
  return t;
}
function pt(t) {
  t[0] = t[1] = t[2] = t[3] = 0;
}
function $t(t, e) {
  return t[0] = t[1] = t[2] = 0, t[3] = e, t;
}
function b(t) {
  return t[3];
}
function Pt(t) {
  return t;
}
function Mt(t, e, s, i) {
  return Z(t, e, s, i);
}
function dt(t, e, s) {
  return t !== s && D(s, t), s[3] = t[3] + e, s;
}
function bt(t, e, s) {
  return F.getLogger("geoscene.geometry.support.sphere").error("sphere.setExtent is not yet supported"), t === s ? s : X(t, s);
}
function w(t, e, s) {
  if (e == null)
    return !1;
  const { origin: i, direction: r } = e, n = wt;
  n[0] = i[0] - t[0], n[1] = i[1] - t[1], n[2] = i[2] - t[2];
  const o = r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
  if (o === 0)
    return !1;
  const c = 2 * (r[0] * n[0] + r[1] * n[1] + r[2] * n[2]), p = c * c - 4 * o * (n[0] * n[0] + n[1] * n[1] + n[2] * n[2] - t[3] * t[3]);
  if (p < 0)
    return !1;
  const A = Math.sqrt(p);
  let u = (-c - A) / (2 * o);
  const y = (-c + A) / (2 * o);
  return (u < 0 || y < u && y > 0) && (u = y), !(u < 0) && (s && (s[0] = i[0] + r[0] * u, s[1] = i[1] + r[1] * u, s[2] = i[2] + r[2] * u), !0);
}
const wt = $();
function yt(t, e) {
  return w(t, e, null);
}
function Bt(t, e, s) {
  if (w(t, e, s))
    return s;
  const i = j(t, e, f.get());
  return d(s, e.origin, P(f.get(), e.direction, q(e.origin, i) / h(e.direction))), s;
}
function j(t, e, s) {
  const i = f.get(), r = ut.get();
  x(i, e.origin, e.direction);
  const n = b(t);
  x(s, i, e.origin), P(s, s, 1 / h(s) * n);
  const o = L(t, e.origin), c = mt(e.origin, s);
  return G(r, c + o, i), H(s, s, r), s;
}
function St(t, e, s) {
  return w(t, e, s) ? s : (ht(e, t, s), I(t, s, s));
}
function I(t, e, s) {
  const i = g(f.get(), e, t), r = P(f.get(), i, t[3] / h(i));
  return d(s, r, t);
}
function zt(t, e) {
  const s = g(f.get(), e, t), i = J(s), r = t[3] * t[3];
  return Math.sqrt(Math.abs(i - r));
}
function L(t, e) {
  const s = g(f.get(), e, t), i = h(s), r = b(t), n = r + Math.abs(r - i);
  return Y(r / n);
}
const B = $();
function Q(t, e, s, i) {
  const r = g(B, e, t);
  switch (s) {
    case _.X: {
      const n = R(r, B)[2];
      return C(i, -Math.sin(n), Math.cos(n), 0);
    }
    case _.Y: {
      const n = R(r, B), o = n[1], c = n[2], p = Math.sin(o);
      return C(i, -p * Math.cos(c), -p * Math.sin(c), Math.cos(o));
    }
    case _.Z:
      return tt(i, r);
    default:
      return;
  }
}
function U(t, e) {
  const s = g(z, e, t);
  return h(s) - t[3];
}
function At(t, e, s, i) {
  const r = U(t, e), n = Q(t, e, _.Z, z), o = P(z, n, s - r);
  return d(i, e, o);
}
function Vt(t, e) {
  const s = et(t, e), i = b(t);
  return s <= i * i;
}
function xt(t, e, s = M()) {
  const i = q(t, e), r = t[3], n = e[3];
  return i + n < r ? (S(s, t), s) : i + r < n ? (S(s, e), s) : (st(s, t, e, (i + n - r) / (2 * i)), s[3] = (i + r + n) / 2, s);
}
const z = $(), Rt = M();
Object.freeze(Object.defineProperty({ __proto__: null, NullSphere: _t, altitudeAt: U, angleToSilhouette: L, axisAt: Q, clear: pt, closestPoint: St, closestPointOnSilhouette: j, containsPoint: Vt, copy: X, create: M, distanceToSilhouette: zt, elevate: dt, fromCenterAndRadius: gt, fromRadius: $t, fromValues: Mt, getCenter: Pt, getRadius: b, intersectRay: w, intersectRayClosestSilhouette: Bt, intersectsRay: yt, projectPoint: I, setAltitudeAt: At, setExtent: bt, tmpSphere: Rt, union: xt, wrap: lt }, Symbol.toStringTag, { value: "Module" }));
export {
  Vt as Q,
  yt as V,
  M as _,
  f as c,
  at as d,
  b as k,
  Yt as p,
  X as q,
  ct as s,
  Pt as z
};

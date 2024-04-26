import { fZ as ar, f_ as ir, dy as sr, e as T, d as A, a as lr, aD as cr, f$ as x, dd as fr, g0 as ur, g1 as gr, g2 as pr, g3 as J, g4 as G, g5 as M, g6 as w, g7 as yr, g8 as V, g9 as hr, ab as mr, r as j, ga as Tr, gb as Ar, gc as B, s as $r, gd as U, ge as k, gf as W, gg as dr, gh as Pr, gi as Fr, gj as Er, gk as Mr, l as h, dc as C, gl as Z, gm as vr, gn as Rr, go as _r, gp as xr } from "./index-Ek1MTSEY.js";
import { c as K, d as $, e as F, a as wr, g as Cr, b as Q, f as d, o as X } from "./vec33-xPYzdI97.js";
import { I as D, v as br, P as Nr } from "./quat-Pv0iCRyB.js";
import { T as g, i as u } from "./BufferView-iMd5U1JV.js";
function E(r = Lr) {
  return [r[0], r[1], r[2], r[3]];
}
function lt(r, t, e = E()) {
  return ar(e, r), e[3] = t, e;
}
function ct(r, t, e = E()) {
  return D(v, r, z(r)), D(H, t, z(t)), br(v, H, v), Or(e, ir(Nr(e, v)));
}
function ft(r) {
  return r;
}
function z(r) {
  return sr(r[3]);
}
function Or(r, t) {
  return r[3] = t, r;
}
const Lr = [0, 0, 1, 0], v = K(), H = K();
E();
var S;
let y = S = class extends cr {
  constructor(r) {
    super(r), this.origin = x(), this.translation = x(), this.rotation = E(), this.scale = fr(1, 1, 1), this.geographic = !0;
  }
  get localMatrix() {
    const r = $();
    return ur(r, this.scale), gr(r, r, z(this.rotation), this.rotation), pr(r, r, this.translation), r;
  }
  get localMatrixInverse() {
    return J($(), this.localMatrix);
  }
  applyLocal(r, t) {
    return G(t, r, this.localMatrix);
  }
  applyLocalInverse(r, t) {
    return G(t, r, this.localMatrixInverse);
  }
  project(r, t) {
    const e = new Float64Array(r.length), o = g.fromTypedArray(e), n = g.fromTypedArray(r);
    if (this.geographic) {
      const l = M(t), c = $();
      return w(t, this.origin, c, l), yr(c, c, this.localMatrix), F(o, n, c), V(e, l, 0, e, t, 0, e.length / 3), e;
    }
    const { localMatrix: a, origin: i } = this;
    hr(a, Cr) ? wr(o, n) : F(o, n, a);
    for (let l = 0; l < e.length; l += 3)
      e[l + 0] += i[0], e[l + 1] += i[1], e[l + 2] += i[2];
    return e;
  }
  getOriginPoint(r) {
    const [t, e, o] = this.origin;
    return new mr({ x: t, y: e, z: o, spatialReference: r });
  }
  equals(r) {
    return j(r) && this.geographic === r.geographic && Tr(this.origin, r.origin) && Ar(this.localMatrix, r.localMatrix);
  }
  clone() {
    const r = { origin: B(this.origin), translation: B(this.translation), rotation: E(this.rotation), scale: B(this.scale), geographic: this.geographic };
    return new S(r);
  }
};
T([A({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "origin", void 0), T([A({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "translation", void 0), T([A({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "rotation", void 0), T([A({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "scale", void 0), T([A({ type: Boolean, nonNullable: !0, json: { write: !0 } })], y.prototype, "geographic", void 0), T([A()], y.prototype, "localMatrix", null), T([A()], y.prototype, "localMatrixInverse", null), y = S = T([lr("geoscene.geometry.support.MeshTransform")], y);
const Br = y;
function b(r, t) {
  var e;
  return r.isGeographic || r.isWebMercator && ((e = t == null ? void 0 : t.geographic) == null || e);
}
const N = $r.getLogger("geoscene.geometry.support.meshUtils.normalProjection");
function jr(r, t, e, o, n) {
  return L(o) ? (O(m.TO_PCPF, u.fromTypedArray(r), g.fromTypedArray(t), g.fromTypedArray(e), o, u.fromTypedArray(n)), n) : (N.error("Cannot convert spatial reference to PCPF"), n);
}
function zr(r, t, e, o, n) {
  return L(o) ? (O(m.FROM_PCPF, u.fromTypedArray(r), g.fromTypedArray(t), g.fromTypedArray(e), o, u.fromTypedArray(n)), n) : (N.error("Cannot convert to spatial reference from PCPF"), n);
}
function Sr(r, t, e) {
  return V(r, t, 0, e, M(t), 0, r.length / 3), e;
}
function Yr(r, t, e) {
  return V(r, M(e), 0, t, e, 0, r.length / 3), t;
}
function Ir(r, t, e) {
  if (h(r))
    return t;
  const o = g.fromTypedArray(r), n = g.fromTypedArray(t);
  return F(n, o, e), t;
}
function Vr(r, t, e) {
  if (h(r))
    return t;
  C(f, e);
  const o = u.fromTypedArray(r), n = u.fromTypedArray(t);
  return d(n, o, f), Z(f) || X(n, n), t;
}
function qr(r, t, e) {
  if (h(r))
    return t;
  C(f, e);
  const o = u.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT), n = u.fromTypedArray(t, 4 * Float32Array.BYTES_PER_ELEMENT);
  if (d(n, o, f), Z(f) || X(n, n), r !== t)
    for (let a = 3; a < r.length; a += 4)
      t[a] = r[a];
  return t;
}
function Gr(r, t, e, o, n) {
  if (!L(o))
    return N.error("Cannot convert spatial reference to PCPF"), n;
  O(m.TO_PCPF, u.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT), g.fromTypedArray(t), g.fromTypedArray(e), o, u.fromTypedArray(n, 4 * Float32Array.BYTES_PER_ELEMENT));
  for (let a = 3; a < r.length; a += 4)
    n[a] = r[a];
  return n;
}
function Ur(r, t, e, o, n) {
  if (!L(o))
    return N.error("Cannot convert to spatial reference from PCPF"), n;
  O(m.FROM_PCPF, u.fromTypedArray(r, 16), g.fromTypedArray(t), g.fromTypedArray(e), o, u.fromTypedArray(n, 16));
  for (let a = 3; a < r.length; a += 4)
    n[a] = r[a];
  return n;
}
function O(r, t, e, o, n, a) {
  if (!t)
    return;
  const i = e.count, l = M(n);
  if (rr(n))
    for (let c = 0; c < i; c++)
      o.getVec(c, R), t.getVec(c, p), w(l, R, _, l), U(f, _), r === m.FROM_PCPF && k(f, f), W(p, p, f), a.setVec(c, p);
  else
    for (let c = 0; c < i; c++) {
      o.getVec(c, R), t.getVec(c, p), w(l, R, _, l), U(f, _);
      const P = dr(e.get(c, 1));
      let s = Math.cos(P);
      r === m.TO_PCPF && (s = 1 / s), f[0] *= s, f[1] *= s, f[2] *= s, f[3] *= s, f[4] *= s, f[5] *= s, r === m.FROM_PCPF && k(f, f), W(p, p, f), Pr(p, p), a.setVec(c, p);
    }
  return a;
}
function L(r) {
  return rr(r) || kr(r);
}
function rr(r) {
  return r.isWGS84 || Fr(r) || Er(r) || Mr(r);
}
function kr(r) {
  return r.isWebMercator;
}
var m;
(function(r) {
  r[r.TO_PCPF = 0] = "TO_PCPF", r[r.FROM_PCPF = 1] = "FROM_PCPF";
})(m || (m = {}));
const R = x(), p = x(), _ = $(), f = Q();
function tr(r, t, e) {
  return b(t.spatialReference, e) ? Jr(r, t, e) : Hr(r, t, e);
}
function Wr(r, t, e) {
  const { position: o, normal: n, tangent: a } = r;
  if (h(t))
    return { position: o, normal: n, tangent: a };
  const i = t.localMatrix;
  return tr({ position: Ir(o, new Float64Array(o.length), i), normal: j(n) ? Vr(n, new Float32Array(n.length), i) : null, tangent: j(a) ? qr(a, new Float32Array(a.length), i) : null }, t.getOriginPoint(e), { geographic: t.geographic });
}
function ut(r, t, e) {
  if (e != null && e.useTransform) {
    var o;
    const { position: n, normal: a, tangent: i } = r;
    return { vertexAttributes: { position: n, normal: a, tangent: i }, transform: new Br({ origin: [t.x, t.y, (o = t.z) != null ? o : 0], geographic: b(t.spatialReference, e) }) };
  }
  return { vertexAttributes: tr(r, t, e), transform: null };
}
function Dr(r, t, e) {
  return b(t.spatialReference, e) ? er(r, t, e) : Y(r, t, e);
}
function gt(r, t, e, o) {
  if (h(t))
    return Dr(r, e, o);
  const n = Wr(r, t, e.spatialReference);
  return e.equals(t.getOriginPoint(e.spatialReference)) ? Y(n, e, o) : b(e.spatialReference, o) ? er(n, e, o) : Y(n, e, o);
}
function Hr(r, t, e) {
  const o = new Float64Array(r.position.length), n = r.position, a = t.x, i = t.y, l = t.z || 0, { horizontal: c, vertical: P } = q(e ? e.unit : null, t.spatialReference);
  for (let s = 0; s < n.length; s += 3)
    o[s + 0] = n[s + 0] * c + a, o[s + 1] = n[s + 1] * c + i, o[s + 2] = n[s + 2] * P + l;
  return { position: o, normal: r.normal, tangent: r.tangent };
}
function Jr(r, t, e) {
  const o = t.spatialReference, n = nr(t, e, I), a = new Float64Array(r.position.length), i = Zr(r.position, n, o, a), l = C(or, n);
  return { position: i, normal: Kr(i, a, r.normal, l, o), tangent: Qr(i, a, r.tangent, l, o) };
}
function Zr(r, t, e, o) {
  F(g.fromTypedArray(o), g.fromTypedArray(r), t);
  const n = new Float64Array(r.length);
  return Yr(o, n, e);
}
function Kr(r, t, e, o, n) {
  if (h(e))
    return null;
  const a = new Float32Array(e.length);
  return d(u.fromTypedArray(a), u.fromTypedArray(e), o), zr(a, r, t, n, a), a;
}
function Qr(r, t, e, o, n) {
  if (h(e))
    return null;
  const a = new Float32Array(e.length);
  d(u.fromTypedArray(a, 4 * Float32Array.BYTES_PER_ELEMENT), u.fromTypedArray(e, 4 * Float32Array.BYTES_PER_ELEMENT), o);
  for (let i = 3; i < a.length; i += 4)
    a[i] = e[i];
  return Ur(a, r, t, n, a), a;
}
function Y(r, t, e) {
  const o = new Float64Array(r.position.length), n = r.position, a = t.x, i = t.y, l = t.z || 0, { horizontal: c, vertical: P } = q(e ? e.unit : null, t.spatialReference);
  for (let s = 0; s < n.length; s += 3)
    o[s + 0] = (n[s + 0] - a) / c, o[s + 1] = (n[s + 1] - i) / c, o[s + 2] = (n[s + 2] - l) / P;
  return { position: o, normal: r.normal, tangent: r.tangent };
}
function er(r, t, e) {
  const o = t.spatialReference;
  nr(t, e, I);
  const n = J(et, I), a = new Float64Array(r.position.length), i = Xr(r.position, o, n, a), l = C(or, n);
  return { position: i, normal: rt(r.normal, r.position, a, o, l), tangent: tt(r.tangent, r.position, a, o, l) };
}
function nr(r, t, e) {
  w(r.spatialReference, [r.x, r.y, r.z || 0], e, M(r.spatialReference));
  const { horizontal: o, vertical: n } = q(t ? t.unit : null, r.spatialReference);
  return vr(e, e, [o, o, n]), e;
}
function Xr(r, t, e, o) {
  const n = Sr(r, t, o), a = g.fromTypedArray(n), i = new Float64Array(n.length), l = g.fromTypedArray(i);
  return F(l, a, e), i;
}
function rt(r, t, e, o, n) {
  if (h(r))
    return null;
  const a = jr(r, t, e, o, new Float32Array(r.length)), i = u.fromTypedArray(a);
  return d(i, i, n), a;
}
function tt(r, t, e, o, n) {
  if (h(r))
    return null;
  const a = Gr(r, t, e, o, new Float32Array(r.length)), i = u.fromTypedArray(a, 4 * Float32Array.BYTES_PER_ELEMENT);
  return d(i, i, n), a;
}
function q(r, t) {
  if (h(r))
    return nt;
  const e = t.isGeographic ? 1 : Rr(t), o = t.isGeographic ? 1 : _r(t), n = xr(1, r, "meters");
  return { horizontal: n * e, vertical: n * o };
}
const I = $(), et = $(), or = Q(), nt = { horizontal: 1, vertical: 1 };
export {
  Ur as L,
  Dr as M,
  Yr as O,
  gt as P,
  Wr as _,
  Sr as a,
  Gr as b,
  E as c,
  z as d,
  lt as e,
  Br as f,
  zr as h,
  jr as j,
  ut as k,
  ft as l,
  ct as q,
  b as r,
  tr as x
};

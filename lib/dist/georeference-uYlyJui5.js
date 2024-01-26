import { h9 as xt, ha as dt, hb as vt, cd as bt, gV as Mt, hc as wt, a as m, b as F, c as Rt, bk as _t, bh as U, hd as Ct, bi as it, cc as R, he as Ot, hf as st, hg as J, hh as Et, s as lt, eE as j, hi as B, hj as K, er as Q, eq as X, hk as Nt, bW as St, hl as jt, bF as Bt, bG as zt, gS as z, hm as ct, hn as Z, ho as Lt, hp as Vt, aM as Gt, hq as Wt, hr as qt, e8 as It, hs as kt } from "./index-B7TsCcH6.js";
import { e as ut } from "./mat3f64-Hpz0k8AN.js";
import { e as b, o as N } from "./mat4f64-kAXAVCnO.js";
import { c as w } from "./spatialReferenceEllipsoidUtils-DsOZj49r.js";
import { m as Ut, p as Yt, t as tt, o as Dt } from "./MeshLocalVertexSpace--G56oOae.js";
import { m as Ht } from "./MeshGeoreferencedRelativeVertexSpace-GiW1X68I.js";
import { v as W, y as Jt, x as Kt } from "./quat-JSHGXzum.js";
import { e as Y } from "./quatf64-7HSf-W7T.js";
import { n as x, s as ft, r as M } from "./vec32-5hPMwhXf.js";
import { i as $, T as A } from "./BufferView-9WKeEt1v.js";
function T(t = pt) {
  return [t[0], t[1], t[2], t[3]];
}
function S(t, r, e = T()) {
  return bt(e, t), e[3] = r, e;
}
function rt(t, r, e = T()) {
  return W(_, t, q(t)), W(et, r, q(r)), Jt(_, et, _), Xt(e, Mt(Kt(e, _)));
}
function Er(t, r, e, n = T()) {
  return S(xt, t, C), S(dt, r, nt), S(vt, e, ot), rt(C, nt, C), rt(C, ot, n), n;
}
function Nr(t) {
  return t;
}
function Qt(t) {
  return t[3];
}
function q(t) {
  return wt(t[3]);
}
function Xt(t, r) {
  return t[3] = r, t;
}
const pt = [0, 0, 1, 0], _ = Y(), et = Y();
T();
const C = T(), nt = T(), ot = T();
var I;
let h = I = class extends _t {
  constructor(t) {
    super(t), this.translation = U(), this.rotationAxis = Ct(pt), this.rotationAngle = 0, this.scale = it(1, 1, 1);
  }
  get rotation() {
    return S(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t) {
    this.rotationAxis = R(t), this.rotationAngle = Qt(t);
  }
  get localMatrix() {
    const t = b();
    return W(at, this.rotation, q(this.rotation)), Ot(t, at, this.translation, this.scale), t;
  }
  get localMatrixInverse() {
    return st(b(), this.localMatrix);
  }
  applyLocal(t, r) {
    return J(r, t, this.localMatrix);
  }
  applyLocalInverse(t, r) {
    return J(r, t, this.localMatrixInverse);
  }
  equals(t) {
    return this === t || t != null && Et(this.localMatrix, t.localMatrix);
  }
  clone() {
    const t = { translation: R(this.translation), rotationAxis: R(this.rotationAxis), rotationAngle: this.rotationAngle, scale: R(this.scale) };
    return new I(t);
  }
};
m([F({ type: [Number], nonNullable: !0, json: { write: !0 } })], h.prototype, "translation", void 0), m([F({ type: [Number], nonNullable: !0, json: { write: !0 } })], h.prototype, "rotationAxis", void 0), m([F({ type: Number, nonNullable: !0, json: { write: !0 } })], h.prototype, "rotationAngle", void 0), m([F({ type: [Number], nonNullable: !0, json: { write: !0 } })], h.prototype, "scale", void 0), m([F()], h.prototype, "rotation", null), m([F()], h.prototype, "localMatrix", null), m([F()], h.prototype, "localMatrixInverse", null), h = I = m([Rt("geoscene.geometry.support.MeshTransform")], h);
const at = Y(), Zt = h;
function gt(t, r) {
  return t.isGeographic || t.isWebMercator && ((r == null ? void 0 : r.geographic) ?? !0);
}
function Sr(t, r, e) {
  const n = !t.isGeoreferenced;
  (e == null ? void 0 : e.geographic) != null && e.geographic !== n && lt.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`);
}
const L = lt.getLogger("geoscene.geometry.support.meshUtils.normalProjection");
function tr(t, r, e, n, o) {
  return G(n) ? (V(y.TO_PCPF, $.fromTypedArray(t), A.fromTypedArray(r), A.fromTypedArray(e), n, $.fromTypedArray(o)), o) : (L.error("Cannot convert spatial reference to PCPF"), o);
}
function rr(t, r, e, n, o) {
  return G(n) ? (V(y.FROM_PCPF, $.fromTypedArray(t), A.fromTypedArray(r), A.fromTypedArray(e), n, $.fromTypedArray(o)), o) : (L.error("Cannot convert to spatial reference from PCPF"), o);
}
function er(t, r, e) {
  return j(t, r, 0, e, w(r), 0, t.length / 3), e;
}
function nr(t, r, e) {
  return j(t, w(e), 0, r, e, 0, t.length / 3), r;
}
function or(t, r, e) {
  return z(u, e), x(r, t, u), ct(u) || ft(r, r), r;
}
function ar(t, r, e) {
  if (z(u, e), x(r, t, u, 4), ct(u) || ft(r, r, 4), t !== r)
    for (let n = 3; n < t.length; n += 4)
      r[n] = t[n];
  return r;
}
function ir(t, r, e, n, o) {
  if (!G(n))
    return L.error("Cannot convert spatial reference to PCPF"), o;
  V(y.TO_PCPF, $.fromTypedArray(t, 4 * Float32Array.BYTES_PER_ELEMENT), A.fromTypedArray(r), A.fromTypedArray(e), n, $.fromTypedArray(o, 4 * Float32Array.BYTES_PER_ELEMENT));
  for (let a = 3; a < t.length; a += 4)
    o[a] = t[a];
  return o;
}
function sr(t, r, e, n, o) {
  if (!G(n))
    return L.error("Cannot convert to spatial reference from PCPF"), o;
  V(y.FROM_PCPF, $.fromTypedArray(t, 16), A.fromTypedArray(r), A.fromTypedArray(e), n, $.fromTypedArray(o, 16));
  for (let a = 3; a < t.length; a += 4)
    o[a] = t[a];
  return o;
}
function V(t, r, e, n, o, a) {
  if (!r)
    return;
  const i = e.count, c = w(o);
  if (ht(o))
    for (let s = 0; s < i; s++)
      n.getVec(s, O), r.getVec(s, g), B(c, O, E, c), K(u, E), t === y.FROM_PCPF && Q(u, u), X(g, g, u), a.setVec(s, g);
  else
    for (let s = 0; s < i; s++) {
      n.getVec(s, O), r.getVec(s, g), B(c, O, E, c), K(u, E);
      const l = Nt(e.get(s, 1));
      let f = Math.cos(l);
      t === y.TO_PCPF && (f = 1 / f), u[0] *= f, u[1] *= f, u[2] *= f, u[3] *= f, u[4] *= f, u[5] *= f, t === y.FROM_PCPF && Q(u, u), X(g, g, u), St(g, g), a.setVec(s, g);
    }
  return a;
}
function G(t) {
  return ht(t) || lr(t);
}
function ht(t) {
  return t.isWGS84 || jt(t) || Bt(t) || zt(t);
}
function lr(t) {
  return t.isWebMercator;
}
var y;
(function(t) {
  t[t.TO_PCPF = 0] = "TO_PCPF", t[t.FROM_PCPF = 1] = "FROM_PCPF";
})(y || (y = {}));
const O = U(), g = U(), E = b(), u = ut();
function D(t, r, e) {
  return gt(r.spatialReference, e) ? gr(t, r, e) : pr(t, r, e);
}
function yt(t, r, e, n) {
  const { position: o, normal: a, tangent: i } = t;
  if (!r.isRelative)
    return { position: o, normal: a, tangent: i };
  const c = (e == null ? void 0 : e.localMatrix) ?? N;
  return D({ position: M(new Float64Array(o.length), o, c), normal: a != null ? or(a, new Float32Array(a.length), c) : null, tangent: i != null ? ar(i, new Float32Array(i.length), c) : null }, r.getOriginPoint(n), { geographic: !r.isGeoreferenced });
}
function cr(t, r, e) {
  if (e != null && e.useTransform) {
    const { position: n, normal: o, tangent: a } = t, { x: i, y: c, z: s } = r, l = it(i, c, s ?? 0);
    return { vertexAttributes: { position: n, normal: o, tangent: a }, vertexSpace: e.geographic ?? 1 ? new Ut({ origin: l }) : new Ht({ origin: l }), transform: new Zt() };
  }
  return { vertexAttributes: D(t, r, e), vertexSpace: new Yt(), transform: null };
}
function k(t, r, e) {
  return gt(r.spatialReference, e) ? $r(t, r, e) : mt(t, r, e);
}
function ur(t, r, e, n, o) {
  if (!r.isRelative)
    return k(t, n, o);
  const { spatialReference: a } = n, i = yt(t, r, e, a);
  return n.equals(r.getOriginPoint(a)) ? mt(i, n, o) : k(i, n, o);
}
function fr({ positions: t, transform: r, vertexSpace: e, inSpatialReference: n, outSpatialReference: o, outPositions: a, local: i }) {
  const c = e.isRelative ? e.origin : Z, s = e.isRelative ? (r == null ? void 0 : r.localMatrix) ?? N : N;
  if (e.isGeoreferenced) {
    const p = a ?? tt(t.length);
    if (Lt(s, N) ? Dt(p, t) : M(p, t, s), !Vt(c, Z)) {
      const [Ft, Pt, Tt] = c;
      for (let v = 0; v < p.length; v += 3)
        p[v] += Ft, p[v + 1] += Pt, p[v + 2] += Tt;
    }
    return j(p, n, 0, p, o, 0, p.length / 3), p;
  }
  const l = w(n), f = !i && Gt(n, l) ? l : n;
  B(n, c, P, f), Wt(P, P, s);
  const d = a ?? tt(t.length);
  return M(d, t, P), j(d, f, 0, d, o, 0, d.length / 3), d;
}
function pr(t, r, e) {
  const n = new Float64Array(t.position.length), o = t.position, a = r.x, i = r.y, c = r.z ?? 0, s = H(e ? e.unit : null, r.spatialReference);
  for (let l = 0; l < o.length; l += 3)
    n[l] = o[l] * s + a, n[l + 1] = o[l + 1] * s + i, n[l + 2] = o[l + 2] * s + c;
  return { position: n, normal: t.normal, tangent: t.tangent };
}
function gr(t, r, e) {
  const n = r.spatialReference, o = $t(r, e, P), a = new Float64Array(t.position.length), i = hr(t.position, o, n, a), c = z(At, o);
  return { position: i, normal: yr(i, a, t.normal, c, n), tangent: mr(i, a, t.tangent, c, n) };
}
function hr(t, r, e, n) {
  M(n, t, r);
  const o = new Float64Array(t.length);
  return nr(n, o, e);
}
function yr(t, r, e, n, o) {
  if (e == null)
    return null;
  const a = new Float32Array(e.length);
  return x(a, e, n), rr(a, t, r, o, a), a;
}
function mr(t, r, e, n, o) {
  if (e == null)
    return null;
  const a = new Float32Array(e.length);
  x(a, e, n, 4);
  for (let i = 3; i < a.length; i += 4)
    a[i] = e[i];
  return sr(a, t, r, o, a), a;
}
function mt(t, r, e) {
  const n = new Float64Array(t.position.length), o = t.position, a = r.x, i = r.y, c = r.z ?? 0, s = H(e ? e.unit : null, r.spatialReference);
  for (let l = 0; l < o.length; l += 3)
    n[l] = (o[l] - a) / s, n[l + 1] = (o[l + 1] - i) / s, n[l + 2] = (o[l + 2] - c) / s;
  return { position: n, normal: t.normal, tangent: t.tangent };
}
function $r(t, r, e) {
  const n = r.spatialReference;
  $t(r, e, P);
  const o = st(Tr, P), a = new Float64Array(t.position.length), i = Ar(t.position, n, o, a), c = z(At, o);
  return { position: i, normal: Fr(t.normal, t.position, a, n, c), tangent: Pr(t.tangent, t.position, a, n, c) };
}
function $t(t, r, e) {
  B(t.spatialReference, [t.x, t.y, t.z ?? 0], e, w(t.spatialReference));
  const n = H(r ? r.unit : null, t.spatialReference);
  return qt(e, e, [n, n, n]), e;
}
function Ar(t, r, e, n) {
  const o = er(t, r, n), a = new Float64Array(o.length);
  return M(a, o, e), a;
}
function Fr(t, r, e, n, o) {
  if (t == null)
    return null;
  const a = tr(t, r, e, n, new Float32Array(t.length));
  return x(a, a, o), a;
}
function Pr(t, r, e, n, o) {
  if (t == null)
    return null;
  const a = ir(t, r, e, n, new Float32Array(t.length));
  return x(a, a, o, 4), a;
}
function H(t, r) {
  if (t == null)
    return 1;
  const e = It(r);
  return 1 / kt(e, "meters", t);
}
const P = b(), Tr = b(), At = ut(), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  georeference: D,
  georeferenceApplyTransform: yt,
  georeferenceByTransform: cr,
  project: fr,
  ungeoreference: k,
  ungeoreferenceByTransform: ur
}, Symbol.toStringTag, { value: "Module" }));
export {
  k as D,
  ur as E,
  fr as I,
  Zt as N,
  D as O,
  ir as R,
  yt as T,
  tr as _,
  nr as a,
  T as b,
  jr as c,
  rt as g,
  er as h,
  rr as j,
  Er as l,
  Sr as o,
  cr as q,
  gt as r,
  sr as v,
  q as w,
  Nr as x
};

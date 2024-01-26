import { n as It } from "./deduplicate-1-XIbeYo.js";
import { y as wt, u as St, i as Et, c as Ot, l as Tt, p as yt, o as vt, m as Dt, T as Lt, h as Vt, a as Mt, b as bt, d as Pt, A as Rt, O as Ut, x as xt, g as Ft, w as Bt, E as Ct, L as Ht, B as Wt, F as kt, I as Gt, U as zt, j as Kt, V as Xt, M as _t, S as jt, k as qt, q as Jt, v as Yt, z as Zt, C as Qt, D as te, G as ee, H as ne } from "./BufferView-_ODXD1vX.js";
import { hc as oe, gh as ut, f$ as O, dx as re, dy as nt, hd as se, he as ie, hf as W, fZ as ot, hg as G, hh as ae, hi as ce, hj as gt, hk as rt, hl as fe } from "./index-j1oaLRcp.js";
import { C as L } from "./enums-n72NRQQZ.js";
import { t as le } from "./VertexElementDescriptor-L2lGUBx9.js";
import { T as q } from "./InterleavedLayout-6hDpGqsV.js";
import { O as h } from "./VertexAttribute-MlR_5QZE.js";
import "./vec4-ehH7P-M2.js";
import "vue";
import "./types-RkIspGI6.js";
function st(t, e, n) {
  const s = e / 3, r = new Uint32Array(n + 1), a = new Uint32Array(n + 1), d = (o, i) => {
    o < i ? r[o + 1]++ : a[i + 1]++;
  };
  for (let o = 0; o < s; o++) {
    const i = t[3 * o], u = t[3 * o + 1], g = t[3 * o + 2];
    d(i, u), d(u, g), d(g, i);
  }
  let c = 0, p = 0;
  for (let o = 0; o < n; o++) {
    const i = r[o + 1], u = a[o + 1];
    r[o + 1] = c, a[o + 1] = p, c += i, p += u;
  }
  const f = new Uint32Array(6 * s), l = r[n], N = (o, i, u) => {
    if (o < i) {
      const g = r[o + 1]++;
      f[2 * g] = i, f[2 * g + 1] = u;
    } else {
      const g = a[i + 1]++;
      f[2 * l + 2 * g] = o, f[2 * l + 2 * g + 1] = u;
    }
  };
  for (let o = 0; o < s; o++) {
    const i = t[3 * o], u = t[3 * o + 1], g = t[3 * o + 2];
    N(i, u, o), N(u, g, o), N(g, i, o);
  }
  const $ = (o, i) => {
    const u = 2 * o, g = i - o;
    for (let I = 1; I < g; I++) {
      const E = f[u + 2 * I], v = f[u + 2 * I + 1];
      let w = I - 1;
      for (; w >= 0 && f[u + 2 * w] > E; w--)
        f[u + 2 * w + 2] = f[u + 2 * w], f[u + 2 * w + 3] = f[u + 2 * w + 1];
      f[u + 2 * w + 2] = E, f[u + 2 * w + 3] = v;
    }
  };
  for (let o = 0; o < n; o++)
    $(r[o], r[o + 1]), $(l + a[o], l + a[o + 1]);
  const m = new Int32Array(3 * s), T = (o, i) => o === t[3 * i] ? 0 : o === t[3 * i + 1] ? 1 : o === t[3 * i + 2] ? 2 : -1, A = (o, i) => {
    const u = T(o, i);
    m[3 * i + u] = -1;
  }, y = (o, i, u, g) => {
    const I = T(o, i);
    m[3 * i + I] = g;
    const E = T(u, g);
    m[3 * g + E] = i;
  };
  for (let o = 0; o < n; o++) {
    let i = r[o];
    const u = r[o + 1];
    let g = a[o];
    const I = a[o + 1];
    for (; i < u && g < I; ) {
      const E = f[2 * i], v = f[2 * l + 2 * g];
      E === v ? (y(o, f[2 * i + 1], v, f[2 * l + 2 * g + 1]), i++, g++) : E < v ? (A(o, f[2 * i + 1]), i++) : (A(v, f[2 * l + 2 * g + 1]), g++);
    }
    for (; i < u; )
      A(o, f[2 * i + 1]), i++;
    for (; g < I; )
      A(f[2 * l + 2 * g], f[2 * l + 2 * g + 1]), g++;
  }
  return m;
}
function it(t, e) {
  return e.push(t.buffer), { buffer: t.buffer, layout: ue(t.layout) };
}
function ue(t) {
  const e = new Array();
  return t.fields.forEach((n, s) => {
    const r = { ...n, constructor: dt(n.constructor) };
    e.push([s, r]);
  }), { stride: t.stride, fields: e, fieldNames: t.fieldNames };
}
const ge = [wt, St, Et, Ot, Tt, yt, vt, Dt, Lt, Vt, Mt, bt, Pt, Rt, Ut, xt, Ft, Bt, Ct, Ht, Wt, kt, Gt, zt, Kt, Xt, _t, jt, qt, Jt, Yt, Zt, Qt, te, ee, ne];
function dt(t) {
  return `${t.ElementType}_${t.ElementCount}`;
}
const de = /* @__PURE__ */ new Map();
ge.forEach((t) => de.set(dt(t), t));
function J(t, e = 0) {
  const n = t.stride;
  return t.fieldNames.filter((s) => {
    const r = t.fields.get(s).optional;
    return !(r && r.glPadding);
  }).map((s) => {
    const r = t.fields.get(s), a = r.constructor.ElementCount, d = he(r.constructor.ElementType), c = r.offset, p = !(!r.optional || !r.optional.glNormalized);
    return new le(s, a, d, c, n, p, e);
  });
}
function he(t) {
  const e = pe[t];
  if (e)
    return e;
  throw new Error("BufferType not supported in WebGL");
}
const pe = { u8: L.UNSIGNED_BYTE, u16: L.UNSIGNED_SHORT, u32: L.UNSIGNED_INT, i8: L.BYTE, i16: L.SHORT, i32: L.INT, f32: L.FLOAT }, ht = q().vec3f(h.POSITION).u16(h.COMPONENTINDEX).u16(h.U16PADDING), me = q().vec2u8(h.SIDENESS);
J(me);
const pt = q().vec3f(h.POSITION0).vec3f(h.POSITION1).u16(h.COMPONENTINDEX).u8(h.VARIANTOFFSET, { glNormalized: !0 }).u8(h.VARIANTSTROKE).u8(h.VARIANTEXTENSION, { glNormalized: !0 }).u8(h.U8PADDING, { glPadding: !0 }).u16(h.U16PADDING, { glPadding: !0 }), z = pt.clone().vec3f(h.NORMAL), K = pt.clone().vec3f(h.NORMALA).vec3f(h.NORMALB);
h.POSITION0, h.POSITION1, h.COMPONENTINDEX, h.VARIANTOFFSET, h.VARIANTSTROKE, h.VARIANTEXTENSION, h.NORMAL, h.NORMALA, h.NORMALB, h.SIDENESS;
let mt = class {
  updateSettings(e) {
    this.settings = e, this.edgeHashFunction = e.reducedPrecision ? $e : Ne;
  }
  write(e, n, s) {
    const r = this.edgeHashFunction(s);
    B.seed = r;
    const a = B.getIntRange(0, 255), d = B.getIntRange(0, this.settings.variants - 1), c = 0.7, p = B.getFloat(), f = 255 * (0.5 * Ae(-(1 - Math.min(p / c, 1)) + Math.max(0, p - c) / (1 - c), 1.2) + 0.5);
    e.position0.setVec(n, s.position0), e.position1.setVec(n, s.position1), e.componentIndex.set(n, s.componentIndex), e.variantOffset.set(n, a), e.variantStroke.set(n, d), e.variantExtension.set(n, f);
  }
  trim(e, n) {
    return e.slice(0, n);
  }
};
const Y = new Float32Array(6), C = new Uint32Array(Y.buffer), D = new Uint32Array(1);
function Ne(t) {
  const e = Y;
  e[0] = t.position0[0], e[1] = t.position0[1], e[2] = t.position0[2], e[3] = t.position1[0], e[4] = t.position1[1], e[5] = t.position1[2], D[0] = 5381;
  for (let n = 0; n < C.length; n++)
    D[0] = 31 * D[0] + C[n];
  return D[0];
}
function $e(t) {
  const e = Y;
  e[0] = P(t.position0[0]), e[1] = P(t.position0[1]), e[2] = P(t.position0[2]), e[3] = P(t.position1[0]), e[4] = P(t.position1[1]), e[5] = P(t.position1[2]), D[0] = 5381;
  for (let n = 0; n < C.length; n++)
    D[0] = 31 * D[0] + C[n];
  return D[0];
}
const at = 1e4;
function P(t) {
  return Math.round(t * at) / at;
}
function Ae(t, e) {
  const n = t < 0 ? -1 : 1;
  return Math.abs(t) ** e * n;
}
let X = class {
  constructor() {
    this.commonWriter = new mt();
  }
  updateSettings(e) {
    this.commonWriter.updateSettings(e);
  }
  allocate(e) {
    return z.createBuffer(e);
  }
  write(e, n, s) {
    this.commonWriter.write(e, n, s), oe(F, s.faceNormal0, s.faceNormal1), ut(F, F), e.normal.setVec(n, F);
  }
  trim(e, n) {
    return this.commonWriter.trim(e, n);
  }
};
X.Layout = z, X.glLayout = J(z, 1);
let _ = class {
  constructor() {
    this.commonWriter = new mt();
  }
  updateSettings(e) {
    this.commonWriter.updateSettings(e);
  }
  allocate(e) {
    return K.createBuffer(e);
  }
  write(e, n, s) {
    this.commonWriter.write(e, n, s), e.normalA.setVec(n, s.faceNormal0), e.normalB.setVec(n, s.faceNormal1);
  }
  trim(e, n) {
    return this.commonWriter.trim(e, n);
  }
};
_.Layout = K, _.glLayout = J(K, 1);
const F = O(), B = new re(), V = -1;
var ct;
function Ie(t, e, n, s = ye) {
  const r = t.vertices.position, a = t.vertices.componentIndex, d = nt(s.anglePlanar), c = nt(s.angleSignificantEdge), p = Math.cos(c), f = Math.cos(d), l = j.edge, N = l.position0, $ = l.position1, m = l.faceNormal0, T = l.faceNormal1, A = Te(t), y = Oe(t), o = y.length / 4, i = e.allocate(o);
  let u = 0;
  const g = o, I = n.allocate(g);
  let E = 0, v = 0, w = 0;
  const Z = se(0, o), U = new Float32Array(o);
  ie(U, (M, S, R) => {
    r.getVec(y[4 * S + 0], N), r.getVec(y[4 * S + 1], $), R[S] = fe(N, $);
  }), Z.sort((M, S) => U[S] - U[M]);
  const Q = new Array(), tt = new Array();
  for (let M = 0; M < o; M++) {
    const S = Z[M], R = U[S], H = y[4 * S + 0], At = y[4 * S + 1], b = y[4 * S + 2], x = y[4 * S + 3], et = x === V;
    if (r.getVec(H, N), r.getVec(At, $), et)
      W(m, A[3 * b + 0], A[3 * b + 1], A[3 * b + 2]), ot(T, m), l.componentIndex = a.get(H), l.cosAngle = G(m, T);
    else {
      if (W(m, A[3 * b + 0], A[3 * b + 1], A[3 * b + 2]), W(T, A[3 * x + 0], A[3 * x + 1], A[3 * x + 2]), l.componentIndex = a.get(H), l.cosAngle = G(m, T), Se(l, f))
        continue;
      l.cosAngle < -0.9999 && ot(T, m);
    }
    v += R, w++, et || we(l, p) ? (e.write(i, u++, l), Q.push(R)) : Ee(l, d) && (n.write(I, E++, l), tt.push(R));
  }
  const Nt = new Float32Array(Q.reverse()), $t = new Float32Array(tt.reverse());
  return { regular: { instancesData: e.trim(i, u), lodInfo: { lengths: Nt } }, silhouette: { instancesData: n.trim(I, E), lodInfo: { lengths: $t } }, averageEdgeLength: v / w };
}
function we(t, e) {
  return t.cosAngle < e;
}
function Se(t, e) {
  return t.cosAngle > e;
}
function Ee(t, e) {
  const n = ae(t.cosAngle), s = j.fwd, r = j.ortho;
  return ce(s, t.position1, t.position0), n * (G(gt(r, t.faceNormal0, t.faceNormal1), s) > 0 ? -1 : 1) > e;
}
function Oe(t) {
  const e = t.faces.length / 3, n = t.faces, s = t.neighbors;
  let r = 0;
  for (let c = 0; c < e; c++) {
    const p = s[3 * c + 0], f = s[3 * c + 1], l = s[3 * c + 2], N = n[3 * c + 0], $ = n[3 * c + 1], m = n[3 * c + 2];
    r += p === V || N < $ ? 1 : 0, r += f === V || $ < m ? 1 : 0, r += l === V || m < N ? 1 : 0;
  }
  const a = new Int32Array(4 * r);
  let d = 0;
  for (let c = 0; c < e; c++) {
    const p = s[3 * c + 0], f = s[3 * c + 1], l = s[3 * c + 2], N = n[3 * c + 0], $ = n[3 * c + 1], m = n[3 * c + 2];
    (p === V || N < $) && (a[d++] = N, a[d++] = $, a[d++] = c, a[d++] = p), (f === V || $ < m) && (a[d++] = $, a[d++] = m, a[d++] = c, a[d++] = f), (l === V || m < N) && (a[d++] = m, a[d++] = N, a[d++] = c, a[d++] = l);
  }
  return a;
}
function Te(t) {
  const e = t.faces.length / 3, n = t.vertices.position, s = t.faces, r = k.v0, a = k.v1, d = k.v2, c = new Float32Array(3 * e);
  for (let p = 0; p < e; p++) {
    const f = s[3 * p + 0], l = s[3 * p + 1], N = s[3 * p + 2];
    n.getVec(f, r), n.getVec(l, a), n.getVec(N, d), rt(a, a, r), rt(d, d, r), gt(r, a, d), ut(r, r), c[3 * p + 0] = r[0], c[3 * p + 1] = r[1], c[3 * p + 2] = r[2];
  }
  return c;
}
(function(t) {
  t[t.SOLID = 0] = "SOLID", t[t.SKETCH = 1] = "SKETCH";
})(ct || (ct = {}));
const j = { edge: { position0: O(), position1: O(), faceNormal0: O(), faceNormal1: O(), componentIndex: 0, cosAngle: 0 }, ortho: O(), fwd: O() }, k = { v0: O(), v1: O(), v2: O() }, ye = { anglePlanar: 4, angleSignificantEdge: 35 };
async function ze(t) {
  const e = De(t), n = ve(e), s = [e.data.buffer];
  return { result: Le(n, s), transferList: s };
}
function ve(t) {
  const e = Ve(t.data, t.skipDeduplicate, t.indices, t.indicesLength);
  return ft.updateSettings(t.writerSettings), lt.updateSettings(t.writerSettings), Ie(e, ft, lt);
}
function De(t) {
  return { data: ht.createView(t.dataBuffer), indices: t.indicesType === "Uint32Array" ? new Uint32Array(t.indicesBuffer) : t.indicesType === "Uint16Array" ? new Uint16Array(t.indicesBuffer) : void 0, indicesLength: t.indicesLength, writerSettings: t.writerSettings, skipDeduplicate: t.skipDeduplicate };
}
function Le(t, e) {
  return e.push(t.regular.lodInfo.lengths.buffer), e.push(t.silhouette.lodInfo.lengths.buffer), { regular: { instancesData: it(t.regular.instancesData, e), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: it(t.silhouette.instancesData, e), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
function Ve(t, e, n, s) {
  if (e)
    return { faces: n, facesLength: s, neighbors: st(n, s, t.count), vertices: t };
  const r = It(t.buffer, t.stride / 4, { originalIndices: n, originalIndicesLength: s }), a = st(r.indices, s, r.uniqueCount);
  return { faces: r.indices, facesLength: r.indices.length, neighbors: a, vertices: ht.createView(r.buffer) };
}
const ft = new X(), lt = new _();
export {
  ve as work,
  ze as wrappedWork
};

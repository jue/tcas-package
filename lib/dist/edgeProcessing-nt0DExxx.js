import { e as It } from "./deduplicate-6qWLhLLW.js";
import { H as U } from "./InterleavedLayout-87pAr1r3.js";
import { O as u } from "./VertexAttribute-g45rDpm-.js";
import { C as D } from "./enums-Vyj7xNgv.js";
import { t as ht } from "./VertexElementDescriptor-L2lGUBx9.js";
import { hc as nt, hU as At, hw as Ot, ep as G, cd as ot, bT as X, hV as St, hW as wt, bU as ft, ce as rt, bW as ut, bh as E, ch as Tt, hL as Et } from "./index-HxXrdrYt.js";
function j(t, e = 0) {
  const o = t.stride;
  return Array.from(t.fields.keys()).filter((s) => {
    var c;
    const r = (c = t.fields.get(s)) == null ? void 0 : c.optional;
    return !(r && r.glPadding);
  }).map((s) => {
    const r = t.fields.get(s), c = r.constructor.ElementCount, g = vt(r.constructor.ElementType), a = r.offset, N = !(!r.optional || !r.optional.glNormalized);
    return new ht(s, c, g, a, o, N, e);
  });
}
function vt(t) {
  const e = $t[t];
  if (e)
    return e;
  throw new Error("BufferType not supported in WebGL");
}
const $t = { u8: D.UNSIGNED_BYTE, u16: D.UNSIGNED_SHORT, u32: D.UNSIGNED_INT, i8: D.BYTE, i16: D.SHORT, i32: D.INT, f32: D.FLOAT }, yt = U().vec3f(u.POSITION).u16(u.COMPONENTINDEX).u16(u.U16PADDING), Pt = U().vec2u8(u.SIDENESS);
j(Pt);
const gt = U().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u8(u.VARIANTOFFSET, { glNormalized: !0 }).u8(u.VARIANTSTROKE).u8(u.VARIANTEXTENSION, { glNormalized: !0 }).u8(u.U8PADDING, { glPadding: !0 }).u16(u.U16PADDING, { glPadding: !0 }), z = gt.clone().vec3f(u.NORMAL), K = gt.clone().vec3f(u.NORMALA).vec3f(u.NORMALB);
u.POSITION0, u.POSITION1, u.COMPONENTINDEX, u.VARIANTOFFSET, u.VARIANTSTROKE, u.VARIANTEXTENSION, u.NORMAL, u.NORMALA, u.NORMALB, u.SIDENESS;
const L = -1;
var st;
function Dt(t, e, o, s = Ut) {
  const r = t.vertices.position, c = t.vertices.componentIndex, g = nt(s.anglePlanar), a = nt(s.angleSignificantEdge), N = Math.cos(a), l = Math.cos(g), f = k.edge, I = f.position0, h = f.position1, d = f.faceNormal0, v = f.faceNormal1, A = xt(t), $ = Rt(t), n = $.length / 4, i = e.allocate(n);
  let m = 0;
  const p = n, O = o.allocate(p);
  let T = 0, y = 0, S = 0;
  const Q = At(0, n), _ = new Float32Array(n);
  _.forEach((V, w, x) => {
    r.getVec($[4 * w], I), r.getVec($[4 * w + 1], h), x[w] = Ot(I, h);
  }), Q.sort((V, w) => _[w] - _[V]);
  const Z = new Array(), tt = new Array();
  for (let V = 0; V < n; V++) {
    const w = Q[V], x = _[w], B = $[4 * w], dt = $[4 * w + 1], M = $[4 * w + 2], F = $[4 * w + 3], et = F === L;
    if (r.getVec(B, I), r.getVec(dt, h), et)
      G(d, A[3 * M], A[3 * M + 1], A[3 * M + 2]), ot(v, d), f.componentIndex = c.get(B), f.cosAngle = X(d, v);
    else {
      if (G(d, A[3 * M], A[3 * M + 1], A[3 * M + 2]), G(v, A[3 * F], A[3 * F + 1], A[3 * F + 2]), f.componentIndex = c.get(B), f.cosAngle = X(d, v), Vt(f, l))
        continue;
      f.cosAngle < -0.9999 && ot(v, d);
    }
    y += x, S++, et || Lt(f, N) ? (e.write(i, m++, f), Z.push(x)) : Mt(f, g) && (o.write(O, T++, f), tt.push(x));
  }
  const pt = new Float32Array(Z.reverse()), Nt = new Float32Array(tt.reverse());
  return { regular: { instancesData: e.trim(i, m), lodInfo: { lengths: pt } }, silhouette: { instancesData: o.trim(O, T), lodInfo: { lengths: Nt } }, averageEdgeLength: y / S };
}
function Lt(t, e) {
  return t.cosAngle < e;
}
function Vt(t, e) {
  return t.cosAngle > e;
}
function Mt(t, e) {
  const o = St(t.cosAngle), s = k.fwd, r = k.ortho;
  return wt(s, t.position1, t.position0), o * (X(ft(r, t.faceNormal0, t.faceNormal1), s) > 0 ? -1 : 1) > e;
}
function Rt(t) {
  const e = t.faces.length / 3, o = t.faces, s = t.neighbors;
  let r = 0;
  for (let a = 0; a < e; a++) {
    const N = s[3 * a], l = s[3 * a + 1], f = s[3 * a + 2], I = o[3 * a], h = o[3 * a + 1], d = o[3 * a + 2];
    r += N === L || I < h ? 1 : 0, r += l === L || h < d ? 1 : 0, r += f === L || d < I ? 1 : 0;
  }
  const c = new Int32Array(4 * r);
  let g = 0;
  for (let a = 0; a < e; a++) {
    const N = s[3 * a], l = s[3 * a + 1], f = s[3 * a + 2], I = o[3 * a], h = o[3 * a + 1], d = o[3 * a + 2];
    (N === L || I < h) && (c[g++] = I, c[g++] = h, c[g++] = a, c[g++] = N), (l === L || h < d) && (c[g++] = h, c[g++] = d, c[g++] = a, c[g++] = l), (f === L || d < I) && (c[g++] = d, c[g++] = I, c[g++] = a, c[g++] = f);
  }
  return c;
}
function xt(t) {
  const e = t.faces.length / 3, o = t.vertices.position, s = t.faces, r = H.v0, c = H.v1, g = H.v2, a = new Float32Array(3 * e);
  for (let N = 0; N < e; N++) {
    const l = s[3 * N], f = s[3 * N + 1], I = s[3 * N + 2];
    o.getVec(l, r), o.getVec(f, c), o.getVec(I, g), rt(c, c, r), rt(g, g, r), ft(r, c, g), ut(r, r), a[3 * N] = r[0], a[3 * N + 1] = r[1], a[3 * N + 2] = r[2];
  }
  return a;
}
(function(t) {
  t[t.SOLID = 0] = "SOLID", t[t.SKETCH = 1] = "SKETCH";
})(st || (st = {}));
const k = { edge: { position0: E(), position1: E(), faceNormal0: E(), faceNormal1: E(), componentIndex: 0, cosAngle: 0 }, ortho: E(), fwd: E() }, H = { v0: E(), v1: E(), v2: E() }, Ut = { anglePlanar: 4, angleSignificantEdge: 35 };
function it(t, e, o) {
  const s = e / 3, r = new Uint32Array(o + 1), c = new Uint32Array(o + 1), g = (n, i) => {
    n < i ? r[n + 1]++ : c[i + 1]++;
  };
  for (let n = 0; n < s; n++) {
    const i = t[3 * n], m = t[3 * n + 1], p = t[3 * n + 2];
    g(i, m), g(m, p), g(p, i);
  }
  let a = 0, N = 0;
  for (let n = 0; n < o; n++) {
    const i = r[n + 1], m = c[n + 1];
    r[n + 1] = a, c[n + 1] = N, a += i, N += m;
  }
  const l = new Uint32Array(6 * s), f = r[o], I = (n, i, m) => {
    if (n < i) {
      const p = r[n + 1]++;
      l[2 * p] = i, l[2 * p + 1] = m;
    } else {
      const p = c[i + 1]++;
      l[2 * f + 2 * p] = n, l[2 * f + 2 * p + 1] = m;
    }
  };
  for (let n = 0; n < s; n++) {
    const i = t[3 * n], m = t[3 * n + 1], p = t[3 * n + 2];
    I(i, m, n), I(m, p, n), I(p, i, n);
  }
  const h = (n, i) => {
    const m = 2 * n, p = i - n;
    for (let O = 1; O < p; O++) {
      const T = l[m + 2 * O], y = l[m + 2 * O + 1];
      let S = O - 1;
      for (; S >= 0 && l[m + 2 * S] > T; S--)
        l[m + 2 * S + 2] = l[m + 2 * S], l[m + 2 * S + 3] = l[m + 2 * S + 1];
      l[m + 2 * S + 2] = T, l[m + 2 * S + 3] = y;
    }
  };
  for (let n = 0; n < o; n++)
    h(r[n], r[n + 1]), h(f + c[n], f + c[n + 1]);
  const d = new Int32Array(3 * s), v = (n, i) => n === t[3 * i] ? 0 : n === t[3 * i + 1] ? 1 : n === t[3 * i + 2] ? 2 : -1, A = (n, i) => {
    const m = v(n, i);
    d[3 * i + m] = -1;
  }, $ = (n, i, m, p) => {
    const O = v(n, i);
    d[3 * i + O] = p;
    const T = v(m, p);
    d[3 * p + T] = i;
  };
  for (let n = 0; n < o; n++) {
    let i = r[n];
    const m = r[n + 1];
    let p = c[n];
    const O = c[n + 1];
    for (; i < m && p < O; ) {
      const T = l[2 * i], y = l[2 * f + 2 * p];
      T === y ? ($(n, l[2 * i + 1], y, l[2 * f + 2 * p + 1]), i++, p++) : T < y ? (A(n, l[2 * i + 1]), i++) : (A(y, l[2 * f + 2 * p + 1]), p++);
    }
    for (; i < m; )
      A(n, l[2 * i + 1]), i++;
    for (; p < O; )
      A(l[2 * f + 2 * p], l[2 * f + 2 * p + 1]), p++;
  }
  return d;
}
let mt = class {
  updateSettings(e) {
    this.settings = e, this._edgeHashFunction = e.reducedPrecision ? Ft : _t;
  }
  write(e, o, s) {
    const r = this._edgeHashFunction(s);
    W.seed = r;
    const c = W.getIntRange(0, 255), g = W.getIntRange(0, this.settings.variants - 1), a = 0.7, N = W.getFloat(), l = 255 * (0.5 * bt(-(1 - Math.min(N / a, 1)) + Math.max(0, N - a) / (1 - a), 1.2) + 0.5);
    e.position0.setVec(o, s.position0), e.position1.setVec(o, s.position1), e.componentIndex.set(o, s.componentIndex), e.variantOffset.set(o, c), e.variantStroke.set(o, g), e.variantExtension.set(o, l);
  }
  trim(e, o) {
    return e.slice(0, o);
  }
};
const J = new Float32Array(6), C = new Uint32Array(J.buffer), P = new Uint32Array(1);
function _t(t) {
  const e = J;
  e[0] = t.position0[0], e[1] = t.position0[1], e[2] = t.position0[2], e[3] = t.position1[0], e[4] = t.position1[1], e[5] = t.position1[2], P[0] = 5381;
  for (let o = 0; o < C.length; o++)
    P[0] = 31 * P[0] + C[o];
  return P[0];
}
function Ft(t) {
  const e = J;
  e[0] = R(t.position0[0]), e[1] = R(t.position0[1]), e[2] = R(t.position0[2]), e[3] = R(t.position1[0]), e[4] = R(t.position1[1]), e[5] = R(t.position1[2]), P[0] = 5381;
  for (let o = 0; o < C.length; o++)
    P[0] = 31 * P[0] + C[o];
  return P[0];
}
const ct = 1e4;
function R(t) {
  return Math.round(t * ct) / ct;
}
function bt(t, e) {
  const o = t < 0 ? -1 : 1;
  return Math.abs(t) ** e * o;
}
let q = class {
  constructor() {
    this._commonWriter = new mt();
  }
  updateSettings(e) {
    this._commonWriter.updateSettings(e);
  }
  allocate(e) {
    return z.createBuffer(e);
  }
  write(e, o, s) {
    this._commonWriter.write(e, o, s), Tt(b, s.faceNormal0, s.faceNormal1), ut(b, b), e.normal.setVec(o, b);
  }
  trim(e, o) {
    return this._commonWriter.trim(e, o);
  }
};
q.Layout = z, q.glLayout = j(z, 1);
class Y {
  constructor() {
    this._commonWriter = new mt();
  }
  updateSettings(e) {
    this._commonWriter.updateSettings(e);
  }
  allocate(e) {
    return K.createBuffer(e);
  }
  write(e, o, s) {
    this._commonWriter.write(e, o, s), e.normalA.setVec(o, s.faceNormal0), e.normalB.setVec(o, s.faceNormal1);
  }
  trim(e, o) {
    return this._commonWriter.trim(e, o);
  }
}
Y.Layout = K, Y.glLayout = j(K, 1);
const b = E(), W = new Et();
function Yt(t) {
  const e = Wt(t.data, t.skipDeduplicate, t.indices, t.indicesLength);
  return at.updateSettings(t.writerSettings), lt.updateSettings(t.writerSettings), Dt(e, at, lt);
}
function Wt(t, e, o, s) {
  if (e) {
    const g = it(o, s, t.count);
    return new Ct(o, s, g, t);
  }
  const r = It(t.buffer, t.stride / 4, { originalIndices: o, originalIndicesLength: s }), c = it(r.indices, s, r.uniqueCount);
  return { faces: r.indices, facesLength: r.indices.length, neighbors: c, vertices: yt.createView(r.buffer) };
}
class Ct {
  constructor(e, o, s, r) {
    this.faces = e, this.facesLength = o, this.neighbors = s, this.vertices = r;
  }
}
const at = new q(), lt = new Y(), jt = U().vec3f(u.POSITION0).vec3f(u.POSITION1), Jt = U().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u16(u.U16PADDING, { glPadding: !0 });
export {
  yt as A,
  jt as a,
  Yt as f,
  Jt as m,
  Dt as p,
  Wt as u
};

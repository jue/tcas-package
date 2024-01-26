import { N as b, S as E, T as _, R as a, I as d } from "./enums-n72NRQQZ.js";
import { C as B } from "./index-j1oaLRcp.js";
var h, p, f, o, g, O, N, S, T, v, I, A, C, W;
(function(t) {
  t[t.None = 0] = "None", t[t.Front = 1] = "Front", t[t.Back = 2] = "Back", t[t.COUNT = 3] = "COUNT";
})(h || (h = {})), function(t) {
  t[t.Less = 0] = "Less", t[t.Lequal = 1] = "Lequal", t[t.COUNT = 2] = "COUNT";
}(p || (p = {})), function(t) {
  t[t.NONE = 0] = "NONE", t[t.SMAA = 1] = "SMAA";
}(f || (f = {})), function(t) {
  t[t.Color = 0] = "Color", t[t.Alpha = 1] = "Alpha", t[t.FrontFace = 2] = "FrontFace", t[t.NONE = 3] = "NONE", t[t.COUNT = 4] = "COUNT";
}(o || (o = {})), function(t) {
  t[t.BACKGROUND = 0] = "BACKGROUND", t[t.UPDATE = 1] = "UPDATE";
}(g || (g = {})), function(t) {
  t[t.NOT_LOADED = 0] = "NOT_LOADED", t[t.LOADING = 1] = "LOADING", t[t.LOADED = 2] = "LOADED";
}(O || (O = {})), function(t) {
  t[t.IntegratedMeshMaskExcluded = 1] = "IntegratedMeshMaskExcluded", t[t.OutlineVisualElementMask = 2] = "OutlineVisualElementMask";
}(N || (N = {})), function(t) {
  t[t.ASYNC = 0] = "ASYNC", t[t.SYNC = 1] = "SYNC";
}(S || (S = {})), function(t) {
  t[t.Highlight = 0] = "Highlight", t[t.MaskOccludee = 1] = "MaskOccludee", t[t.COUNT = 2] = "COUNT";
}(T || (T = {})), function(t) {
  t[t.Triangle = 0] = "Triangle", t[t.Point = 1] = "Point", t[t.Line = 2] = "Line";
}(v || (v = {})), function(t) {
  t[t.STRETCH = 1] = "STRETCH", t[t.PAD = 2] = "PAD";
}(I || (I = {})), function(t) {
  t[t.CHANGED = 0] = "CHANGED", t[t.UNCHANGED = 1] = "UNCHANGED";
}(A || (A = {})), function(t) {
  t[t.Blend = 0] = "Blend", t[t.Opaque = 1] = "Opaque", t[t.Mask = 2] = "Mask", t[t.MaskBlend = 3] = "MaskBlend", t[t.COUNT = 4] = "COUNT";
}(C || (C = {})), function(t) {
  t[t.OFF = 0] = "OFF", t[t.ON = 1] = "ON";
}(W || (W = {}));
function $(t, e, n = _.ADD, i = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: t, dstRgb: e, dstAlpha: e, opRgb: n, opAlpha: n, color: { r: i[0], g: i[1], b: i[2], a: i[3] } };
}
function w(t, e, n, i, s = _.ADD, m = _.ADD, c = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: e, dstRgb: n, dstAlpha: i, opRgb: s, opAlpha: m, color: { r: c[0], g: c[1], b: c[2], a: c[3] } };
}
const H = { face: b.BACK, mode: E.CCW }, G = { face: b.FRONT, mode: E.CCW }, dt = (t) => t === h.Back ? H : t === h.Front ? G : null, pt = { zNear: 0, zFar: 1 }, ft = { r: !0, g: !0, b: !0, a: !0 };
function z(t) {
  return Z.intern(t);
}
function K(t) {
  return J.intern(t);
}
function q(t) {
  return X.intern(t);
}
function x(t) {
  return tt.intern(t);
}
function Y(t) {
  return et.intern(t);
}
function j(t) {
  return it.intern(t);
}
function V(t) {
  return nt.intern(t);
}
function Q(t) {
  return st.intern(t);
}
function gt(t) {
  return lt.intern(t);
}
class l {
  constructor(e, n) {
    this.makeKey = e, this.makeRef = n, this.interns = /* @__PURE__ */ new Map();
  }
  intern(e) {
    if (!e)
      return null;
    const n = this.makeKey(e), i = this.interns;
    return i.has(n) || i.set(n, this.makeRef(e)), i.get(n);
  }
}
function r(t) {
  return "[" + t.join(",") + "]";
}
const Z = new l(R, (t) => ({ __tag: "Blending", ...t }));
function R(t) {
  return t ? r([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
}
const J = new l(y, (t) => ({ __tag: "Culling", ...t }));
function y(t) {
  return t ? r([t.face, t.mode]) : null;
}
const X = new l(F, (t) => ({ __tag: "PolygonOffset", ...t }));
function F(t) {
  return t ? r([t.factor, t.units]) : null;
}
const tt = new l(k, (t) => ({ __tag: "DepthTest", ...t }));
function k(t) {
  return t ? r([t.func]) : null;
}
const et = new l(U, (t) => ({ __tag: "StencilTest", ...t }));
function U(t) {
  return t ? r([t.function.func, t.function.ref, t.function.mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
}
const it = new l(L, (t) => ({ __tag: "DepthWrite", ...t }));
function L(t) {
  return t ? r([t.zNear, t.zFar]) : null;
}
const nt = new l(M, (t) => ({ __tag: "ColorWrite", ...t }));
function M(t) {
  return t ? r([t.r, t.g, t.b, t.a]) : null;
}
const st = new l(P, (t) => ({ __tag: "StencilWrite", ...t }));
function P(t) {
  return t ? r([t.mask]) : null;
}
const lt = new l(rt, (t) => ({ blending: z(t.blending), culling: K(t.culling), polygonOffset: q(t.polygonOffset), depthTest: x(t.depthTest), stencilTest: Y(t.stencilTest), depthWrite: j(t.depthWrite), colorWrite: V(t.colorWrite), stencilWrite: Q(t.stencilWrite) }));
function rt(t) {
  return t ? r([R(t.blending), y(t.culling), F(t.polygonOffset), k(t.depthTest), U(t.stencilTest), L(t.depthWrite), M(t.colorWrite), P(t.stencilWrite)]) : null;
}
class Ot {
  constructor(e) {
    this._pipelineInvalid = !0, this._blendingInvalid = !0, this._cullingInvalid = !0, this._polygonOffsetInvalid = !0, this._depthTestInvalid = !0, this._stencilTestInvalid = !0, this._depthWriteInvalid = !0, this._colorWriteInvalid = !0, this._stencilWriteInvalid = !0, this._stateSetters = e;
  }
  setPipeline(e) {
    (this._pipelineInvalid || e !== this._pipeline) && (this._setBlending(e.blending), this._setCulling(e.culling), this._setPolygonOffset(e.polygonOffset), this._setDepthTest(e.depthTest), this._setStencilTest(e.stencilTest), this._setDepthWrite(e.depthWrite), this._setColorWrite(e.colorWrite), this._setStencilWrite(e.stencilWrite), this._pipeline = e), this._pipelineInvalid = !1;
  }
  invalidateBlending() {
    this._blendingInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateCulling() {
    this._cullingInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
  }
  _setBlending(e) {
    this._blending = this._setSubState(e, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = !1;
  }
  _setCulling(e) {
    this._culling = this._setSubState(e, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = !1;
  }
  _setPolygonOffset(e) {
    this._polygonOffset = this._setSubState(e, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = !1;
  }
  _setDepthTest(e) {
    this._depthTest = this._setSubState(e, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = !1;
  }
  _setStencilTest(e) {
    this._stencilTest = this._setSubState(e, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = !1;
  }
  _setDepthWrite(e) {
    this._depthWrite = this._setSubState(e, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = !1;
  }
  _setColorWrite(e) {
    this._colorWrite = this._setSubState(e, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = !1;
  }
  _setStencilWrite(e) {
    this._stencilWrite = this._setSubState(e, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = !1;
  }
  _setSubState(e, n, i, s) {
    return (i || e !== n) && (s(e), this._pipelineInvalid = !0), e;
  }
}
function at(t, e, n) {
  for (let i = 0; i < n; ++i)
    e[2 * i] = t[i], e[2 * i + 1] = t[i] - e[2 * i];
}
function Nt(t, e, n, i) {
  for (let s = 0; s < i; ++s)
    D[0] = t[s], at(D, u, 1), e[s] = u[0], n[s] = u[1];
}
const D = new Float64Array(1), u = new Float32Array(2), St = w(a.SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), ot = $(a.ONE, a.ONE), ct = $(a.ZERO, a.ONE_MINUS_SRC_ALPHA);
function Tt(t) {
  return t === o.FrontFace ? null : t === o.Alpha ? ct : ot;
}
const vt = 5e5, ht = { factor: -1, units: -2 };
function It(t) {
  return t ? ht : null;
}
function At(t, e = d.LESS) {
  return t === o.NONE || t === o.FrontFace ? e : d.LEQUAL;
}
async function Ct(t, e) {
  const { data: n } = await B(t, { responseType: "image", ...e });
  return n;
}
export {
  ct as A,
  C,
  Tt as E,
  Ot as M,
  p as N,
  o as O,
  gt as W,
  vt as _,
  N as a,
  St as b,
  v as c,
  At as d,
  pt as e,
  ft as f,
  It as g,
  dt as h,
  O as i,
  I as l,
  h as n,
  at as o,
  Nt as r,
  Ct as t
};

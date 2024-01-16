import { aW as tr, kG as pe, a4 as W, a5 as st, a2 as Te, a3 as J, a1 as hs, aT as j, kH as Lt, a9 as Ps, kI as xs, hL as si, a6 as Ms, _ as lt, kJ as er, kK as Ls, kL as sr, kM as ir, kD as rr, kN as nr, kO as or, kP as ar, z as hr, kQ as lr, dZ as q, kR as cr, dU as ur, kl as ls, iR as fe, kg as ii, iT as cs, kS as zs, es as ge, kk as ri, ki as We, kj as Os, s as _e, ac as fr, hx as At, as as mr, hN as pr, H as _r, kT as dr, kU as ye, gG as ni, fD as oi, iz as N, kV as Gt } from "./index-h53IWweP.js";
import { C as gr } from "./BidiEngine-hERHJu7U.js";
import { t as us } from "./OptimizedGeometry-VApaomRE.js";
import { t as Ts, c as yr, n as Pe } from "./GeometryUtils-UnkSlEkY.js";
import { O as It, P as $e, R as L, k as Y, B as Rt, A as xe, X as ot, o as xt, Y as Je, Z as Xt, K as Me, U as ct, w as ut, C as Pr, l as xr, a as Mr, u as br, y as Sr, b as $s, c as Cr, m as wr, f as Ns, i as Ee, e as Ue, n as qe } from "./enums-QU6RH5ju.js";
import { b, F as Tt, k as bs, S as Ss, x as ai, G as hi, P as Ft, L as fs, w as Ne, h as vr, g as kr, m as Ir, d as Lr, I as zr, A as Or, i as Tr, l as $r, u as V, p as be, e as k, s as Nr, c as Ar, t as As } from "./utils-m9Kp97Du.js";
import { t as Yt, g as Se, f as Fr } from "./GeometryUtils-qBcr22nw.js";
import { b as li, w as ci, a5 as ui, e as fi } from "./definitions-Ikx6Iti_.js";
import { w as B, E as Ce, S as Er } from "./color-4NJ3Arr4.js";
import { t as Gr } from "./Rect-FEaRGIbu.js";
import { U as Rr, v as Xr, q as Dr, k as Hr } from "./quantizationUtils-r2uAqrNR.js";
import { o as Yr } from "./floatRGBA-RF2HKI4x.js";
const mi = "arial-unicode-ms", Fs = "woff2", Es = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Set();
let Br = class {
  constructor(t, e) {
    this.fontFace = t, this.promise = e;
  }
};
async function Uo(l) {
  const t = Wr(l), e = Es.get(t);
  if (e)
    return e.promise;
  const s = new FontFace(l.family, `url('${tr.fontsUrl}/woff2/${t}.${Fs}') format('${Fs}')`, { style: l.style, weight: l.weight }), r = document.fonts;
  if (r.has(s) && s.status === "loading")
    return s.loaded;
  const i = s.load().then(() => (r.add(s), s));
  return Es.set(t, new Br(s, i)), Vr.add(s), i;
}
function pi(l) {
  if (!l)
    return mi;
  const t = l.toLowerCase().split(" ").join("-");
  switch (t) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return t;
  }
}
function Wr(l) {
  const t = Jr(l) + Ur(l);
  return pi(l.family) + (t.length > 0 ? t : "-regular");
}
function Jr(l) {
  if (!l.weight)
    return "";
  switch (l.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function Ur(l) {
  if (!l.style)
    return "";
  switch (l.style.toLowerCase()) {
    case "italic":
    case "oblique":
      return "-italic";
  }
  return "";
}
const je = new gr();
function Cs(l) {
  if (l == null)
    return ["", !1];
  if (!je.hasBidiChar(l))
    return [l, !1];
  let t;
  return t = je.checkContextual(l) === "rtl" ? "IDNNN" : "ICNNN", [je.bidiTransform(l, t, "VLYSN"), !0];
}
let Et = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (this.rz == null || this.rz === 0 && this.rzCos !== 1 && this.rzSin !== 0) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t, e) {
    this.tx = t, this.ty = e;
  }
  setTranslateZ(t) {
    this.tz = t;
  }
  setRotateCS(t, e) {
    this.rz = void 0, this.rzCos = t, this.rzSin = e;
  }
  setRotate(t) {
    this.rz = t, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t) {
    this.ry = t;
  }
  setScale(t) {
    this.s = t;
  }
  setMeasure(t) {
    this.m = t;
  }
}, $ = class {
  static fromOptimized(t, e, s = !1, r = !1) {
    return new ms().initialize(t, e, s, r, 1);
  }
  static fromJSON(t, e = !1, s = !1) {
    const [r, i] = Gs(t);
    return new ps().initialize(r, i, e, s, 1);
  }
  static fromOptimizedCIM(t, e, s = !1, r = !1) {
    return new Rs().initialize(t, e, s, r, 1);
  }
  static fromJSONCIM(t, e = !1, s = !1) {
    const [r, i] = Gs(t);
    return new Xs().initialize(r, i, e, s, 1);
  }
  static fromFeatureSetReader(t) {
    const e = t.readGeometryForDisplay(), s = t.geometryType;
    return e && s ? this.fromOptimized(e, s) : null;
  }
  static fromFeatureSetReaderCIM(t) {
    const e = t.readGeometryForDisplay(), s = t.geometryType;
    return e && s ? this.fromOptimizedCIM(e, s) : null;
  }
  static createEmptyOptimized(t, e = !1, s = !1) {
    return new ms().initialize(new us(), t, e, s, 1);
  }
  static createEmptyJSON(t, e = !1, s = !1) {
    return new ps().initialize([], t, e, s, 1);
  }
  static createEmptyOptimizedCIM(t, e = !1, s = !1) {
    return new Rs().initialize(new us(), t, e, s, 1);
  }
  static createEmptyJSONCIM(t, e = !1, s = !1) {
    return new Xs().initialize([], t, e, s, 1);
  }
  asJSON() {
    const t = pe(this);
    return this.geometryType === "esriGeometryEnvelope" ? { xmin: t[0][0][0], ymin: t[0][0][1], xmax: t[0][2][0], ymax: t[0][2][1] } : this.geometryType === "esriGeometryMultipoint" ? { points: t.flat() } : this.geometryType === "esriGeometryPoint" ? { x: t[0][0][0], y: t[0][0][1] } : this.geometryType === "esriGeometryPolygon" ? { rings: t } : { paths: t };
  }
  invertY() {
    this.yFactor *= -1;
  }
}, ms = class _i extends $ {
  constructor() {
    super(...arguments), this._end = -1;
  }
  initialize(t, e, s, r, i) {
    return this.hasZ = s, this.hasM = r, this.geometryType = e, this._stride = 2 + Number(s) + Number(r), this._geometry = t, this._pathIndex = -1, this._pathOffset = 0, this._pointOffset = -this._stride, this._end = -1, this.yFactor = i, this;
  }
  reset() {
    this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  seekPathStart() {
    this._pointOffset = this._pathOffset - this._stride;
  }
  seekPathEnd() {
    this._pointOffset = this._end;
  }
  seekInPath(t) {
    const e = this._pathOffset + t * this._stride;
    return e >= 0 && e < this._end && (this._pointOffset = e, !0);
  }
  nextPoint() {
    return (this._pointOffset += this._stride) < this._end;
  }
  prevPoint() {
    return (this._pointOffset -= this._stride) >= this._pathOffset;
  }
  nextPath() {
    if (this._pathIndex >= 0) {
      const e = this._geometry.isPoint ? 1 : this._geometry.lengths[this._pathIndex];
      this._pathOffset += this._stride * e;
    }
    this._pointOffset = this._pathOffset - this._stride;
    const t = this._geometry.isPoint ? 1 : this._geometry.lengths[this._pathIndex + 1];
    return this._end = this._pointOffset + this._stride + this._stride * t, ++this._pathIndex < this.numPaths;
  }
  pathLength() {
    const t = this._end, e = this._stride, s = this._geometry.coords;
    let r = 0;
    for (let i = this._pathOffset + e; i < t; i += e) {
      const n = s[i - e], o = s[i - e + 1], a = s[i] - n, h = s[i + 1] - o;
      r += Math.sqrt(a * a + h * h);
    }
    return r;
  }
  startPath() {
    this._geometry.lengths.push(0);
  }
  pushPath(t) {
    this.startPath(), this.pushPoints(t);
  }
  pushPoint(t) {
    for (let e = 0; e < this._stride; ++e)
      this._geometry.coords.push(t[e]);
    this._geometry.lengths[this.numPaths - 1]++;
  }
  pushXY(t, e) {
    this._geometry.coords.push(t, e), this._geometry.lengths[this.numPaths - 1]++;
  }
  pushPoints(t) {
    for (const e of t)
      for (let s = 0; s < this._stride; ++s)
        this._geometry.coords.push(e[s]);
    this._geometry.lengths[this.numPaths - 1] += t.length;
  }
  asOptimized() {
    const t = this._geometry.clone();
    if (this.yFactor !== 1)
      for (let e = 1; e < t.coords.length; e += this._stride)
        t.coords[e] *= this.yFactor;
    return this.geometryType === "esriGeometryPoint" && (t.lengths.length = 0), t;
  }
  isClosed() {
    const t = this._geometry.coords, e = this._pathOffset, s = this._end - this._stride;
    for (let r = 0; r < this._stride; r++)
      if (t[e + r] !== t[s + r])
        return !1;
    return !0;
  }
  clone() {
    return new _i().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get numPoints() {
    const { lengths: t } = this._geometry;
    return this._pathIndex < 0 || this._pathIndex > t.length - 1 ? 0 : t[this._pathIndex];
  }
  get numPaths() {
    return this._geometry.lengths.length;
  }
  get x() {
    return this._geometry.coords[this._pointOffset];
  }
  set x(t) {
    this._geometry.coords[this._pointOffset] = t;
  }
  get y() {
    return this.yFactor * this._geometry.coords[this._pointOffset + 1];
  }
  set y(t) {
    this._geometry.coords[this._pointOffset + 1] = this.yFactor * t;
  }
  get z() {
    return this._geometry.coords[this._pointOffset + 2];
  }
  set z(t) {
    this._geometry.coords[this._pointOffset + 2] = t;
  }
  get m() {
    const t = this.hasZ ? 3 : 2;
    return this._geometry.coords[this._pointOffset + t];
  }
  set m(t) {
    this._geometry.coords[this._pointOffset + 3] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get pointIndex() {
    return this._pointOffset / this._stride;
  }
};
function qr(l) {
  const t = [l.x, l.y];
  return l.z && t.push(l.z), l.m && t.push(l.m), t;
}
function Gs(l) {
  return W(l) ? [l.rings, "esriGeometryPolygon"] : st(l) ? [l.paths, "esriGeometryPolyline"] : Te(l) ? [[l.points], "esriGeometryMultipoint"] : J(l) ? [[[[l.xmin, l.ymin], [l.xmin, l.ymax], [l.xmax, l.ymax], [l.xmax, l.ymin], [l.xmin, l.ymin]]], "esriGeometryEnvelope"] : hs(l) ? [[[qr(l)]], "esriGeometryPoint"] : [[], "esriGeometryPolyline"];
}
let ps = class di extends $ {
  initialize(t, e, s, r, i) {
    return this._paths = t, this.geometryType = e, this.hasZ = s, this.hasM = r, this._pathIndex = this._pointIndex = -1, this.yFactor = i, this._mIdx = this.hasZ ? 3 : 2, this;
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t) {
    return t >= 0 && t < this._currentPath.length && (this._pointIndex = t, this._currentPoint = this._currentPath[this._pointIndex], !0);
  }
  nextPoint() {
    return this._currentPoint = this._currentPath[++this._pointIndex], this._pointIndex < this._currentPath.length;
  }
  prevPoint() {
    return this._currentPoint = this._currentPath[--this._pointIndex], this._pointIndex >= 0;
  }
  nextPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[++this._pathIndex], this._pathIndex < this.numPaths;
  }
  pathLength() {
    const t = this._currentPath.length, e = this._currentPath;
    let s = 0;
    for (let r = 1; r < t; r++) {
      const i = e[r - 1], n = e[r], o = i[0], a = i[1], h = n[0] - o, c = n[1] - a;
      s += Math.sqrt(h * h + c * c);
    }
    return s;
  }
  startPath() {
    this._paths.push([]);
  }
  pushPath(t) {
    this._paths.push(t);
  }
  pushPoint(t) {
    this._paths[this.pathIndex].push(t);
  }
  pushXY(t, e) {
    this._paths[this.pathIndex].push([t, e]);
  }
  pushPoints(t) {
    this._paths[this.pathIndex].push(...t);
  }
  asOptimized() {
    const t = new us();
    if (this.geometryType === "esriGeometryPoint")
      t.coords.push(...this._paths[0][0]), t.lengths.length = 0;
    else
      for (const e of this._paths) {
        for (const s of e)
          t.coords.push(s[0]), t.coords.push(s[1] * this.yFactor), this.hasZ && t.coords.push(s[2]), this.hasM && t.coords.push(s[this._mIdx]);
        t.lengths.push(e.length);
      }
    return t;
  }
  isClosed() {
    const t = this._currentPath[0], e = this._currentPath[this._currentPath.length - 1];
    for (let s = 0; s < t.length; s++)
      if (t[s] !== e[s])
        return !1;
    return !0;
  }
  clone() {
    return new di().initialize(j(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get numPoints() {
    return this._pathIndex < 0 || this._pathIndex > this.numPaths - 1 ? -1 : this._paths[this._pathIndex].length;
  }
  get numPaths() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t) {
    this._currentPoint[0] = t;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t) {
    this._currentPoint[1] = this.yFactor * t;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t) {
    this._currentPoint[2] = t;
  }
  get m() {
    return this._currentPoint[this._mIdx];
  }
  set m(t) {
    this._currentPoint[this._mIdx] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get pointIndex() {
    return this._pointIndex;
  }
};
const we = 4, ve = 1;
let Rs = class gi extends ms {
  initialize(t, e, s, r, i) {
    return super.initialize(t, e, s, r, i), this._controlPoints || (this._controlPoints = this._controlPoints = new Array(this.numPaths).fill(void 0).map((n) => /* @__PURE__ */ new Set())), this;
  }
  startPath() {
    super.startPath(), this._controlPoints.push(/* @__PURE__ */ new Set());
  }
  clone() {
    const t = new gi().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
    return t._controlPoints = this._controlPoints, t;
  }
  setControlPoint() {
    this._controlPoints[this.pathIndex].add(this.pointIndex);
  }
  getControlPoint() {
    return this._controlPoints[this.pathIndex].has(this.pointIndex);
  }
  setControlPointAt(t) {
    this._controlPoints[this.pathIndex].add(t);
  }
  getControlPointAt(t) {
    return this._controlPoints[this.pathIndex].has(t);
  }
}, Xs = class yi extends ps {
  initialize(t, e, s, r, i) {
    return super.initialize(t, e, s, r, i);
  }
  clone() {
    return new yi().initialize(j(this._paths), this.geometryType, this.hasZ, this.hasM, 1);
  }
  setControlPoint() {
    this._paths[this.pathIndex][this.pointIndex][we] = ve;
  }
  getControlPoint() {
    return this._paths[this.pathIndex][this.pointIndex][we] === ve;
  }
  setControlPointAt(t) {
    this._paths[this.pathIndex][t][we] = ve;
  }
  getControlPointAt(t) {
    return this._paths[this.pathIndex][t][we] === ve;
  }
};
const jr = 512;
let at, _s = class {
  constructor(t) {
    this._geometry = t;
  }
  next() {
    const t = this._geometry;
    return this._geometry = null, t;
  }
};
function ws(l, t) {
  at || (at = new yr(0, 0, 0, 1));
  const e = l.geometryType === "esriGeometryPolygon", s = e ? Ts.Polygon : Ts.LineString, r = e ? 3 : 2;
  let i, n;
  for (at.reset(s), at.setPixelMargin(t + 1), at.setExtent(jr); l.nextPath(); )
    if (!(l.numPoints < r)) {
      for (l.nextPoint(), i = l.x, n = -l.y, at.moveTo(i, n); l.nextPoint(); )
        i = l.x, n = -l.y, at.lineTo(i, n);
      e && at.close();
    }
  const o = at.result(!1);
  if (o) {
    const a = $.createEmptyOptimizedCIM(l.geometryType);
    for (const h of o) {
      a.startPath();
      for (const c of h)
        a.pushXY(c.x, -c.y);
    }
    return a.reset(), a;
  }
  return null;
}
let Zr = class {
  applyColorSubstituition(t, e) {
    if (!e)
      return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: s, height: r } = t, i = this._rasterizationCanvas, n = i.getContext("2d");
    t !== i && (i.width = s, i.height = r, n.drawImage(t, 0, 0, s, r));
    const o = n.getImageData(0, 0, s, r).data;
    if (e) {
      for (const h of e)
        if (h && h.oldColor && h.oldColor.length === 4 && h.newColor && h.newColor.length === 4) {
          const [c, u, m, f] = h.oldColor, [_, p, d, g] = h.newColor;
          if (c === _ && u === p && m === d && f === g)
            continue;
          for (let y = 0; y < o.length; y += 4)
            c === o[y] && u === o[y + 1] && m === o[y + 2] && f === o[y + 3] && (o[y] = _, o[y + 1] = p, o[y + 2] = d, o[y + 3] = g);
        }
    }
    const a = new ImageData(o, s, r);
    return n.putImageData(a, 0, 0), i;
  }
  tintImageData(t, e) {
    if (!e || e.length < 4)
      return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: s, height: r } = t, i = this._rasterizationCanvas, n = i.getContext("2d");
    t !== i && (i.width = s, i.height = r, n.drawImage(t, 0, 0, s, r));
    const o = n.getImageData(0, 0, s, r), a = new Uint8Array(o.data), h = [e[0] / 255, e[1] / 255, e[2] / 255, e[3] / 255];
    for (let u = 0; u < a.length; u += 4)
      a[u] *= h[0], a[u + 1] *= h[1], a[u + 2] *= h[2], a[u + 3] *= h[3];
    const c = new ImageData(new Uint8ClampedArray(a.buffer), s, r);
    return n.putImageData(c, 0, 0), i;
  }
}, Pi = class Vt {
  static local() {
    return Vt.instance === null && (Vt.instance = new Vt()), Vt.instance;
  }
  execute(t, e, s, r, i) {
    return new Kr(t, e, s);
  }
};
Pi.instance = null;
let Kr = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._angleTolerance = e.angleTolerance !== void 0 ? e.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.geometryType === "esriGeometryPolygon")
        this._isClosed = !0;
      else if (t.geometryType === "esriGeometryPolyline")
        this._isClosed = !1;
      else {
        if (t.geometryType !== "esriGeometryEnvelope") {
          t = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle)
          return t;
        this._isClosed = !0;
      }
      for (; t.nextPath(); )
        this._processPath(t);
      return t.reset(), t;
    }
    return null;
  }
  _processPath(t) {
    if (t.nextPoint()) {
      const e = t.x, s = t.y;
      let r = e, i = s, n = t.numPoints, o = 0, a = 0, h = 0, c = 0, u = 0, m = 0;
      this._isClosed && ++n;
      for (let f = 1; t.nextPoint() || f < n; ++f) {
        let _, p;
        this._isClosed && f === n - 1 ? (_ = e, p = s) : (_ = t.x, p = t.y);
        const d = _ - r, g = p - i, y = Math.sqrt(d * d + g * g);
        f > 1 && y > 0 && h > 0 && (o * d + a * g) / y / h <= this._maxCosAngle && t.setControlPointAt(f - 1), f === 1 && (c = d, u = g, m = y), y > 0 && (r = _, i = p, o = d, a = g, h = y);
      }
      this._isClosed && h > 0 && m > 0 && (o * c + a * u) / m / h <= this._maxCosAngle && t.setControlPointAt(0);
    }
  }
};
function Ze(l, t) {
  l[4] = t;
}
let de = class {
  constructor(t, e = !0, s = !0, r = 0) {
    this.isClosed = !1, this.geometryCursor = null, this.geometryCursor = !e && t.geometryType === "esriGeometryPolygon" || !s && t.geometryType === "esriGeometryPolyline" ? null : t, this.geomUnitsPerPoint = r, this.iteratePath = !1, this.internalPlacement = new Et();
  }
  next() {
    if (!this.geometryCursor)
      return null;
    for (; this.iteratePath || this.geometryCursor.nextPath(); ) {
      this.geometryCursor.seekPathStart();
      const t = this.processPath(this.geometryCursor);
      if (t)
        return t;
    }
    return this.geometryCursor = null, null;
  }
}, He = class {
  constructor(t, e, s, r = 0) {
    this.isClosed = !1, this.inputGeometries = t, this.acceptPolygon = e, this.acceptPolyline = s, this.geomUnitsPerPoint = r, this.iteratePath = !1, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let t = this.inputGeometries.next();
        for (; t && (this.isClosed = this.acceptPolygon && t.geometryType === "esriGeometryPolygon" || t.geometryType === "esriGeometryEnvelope", this.multiPathCursor = t, !this.multiPathCursor); )
          t = this.inputGeometries.next();
        if (!this.multiPathCursor)
          return null;
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t = this.processPath(this.multiPathCursor);
        if (t)
          return t;
      }
      this.multiPathCursor = null;
    }
  }
};
const me = 0.03;
let ft = class {
  constructor(t = 0, e = !1) {
  }
  isEmpty(t) {
    if (!t.nextPoint())
      return !0;
    let e, s, r, i;
    for (e = t.x, s = t.y; t.nextPoint(); e = s, s = i)
      if (r = t.x, i = t.y, r !== e || i !== s)
        return t.seekPathStart(), !1;
    return t.seekPathStart(), !0;
  }
  normalize(t) {
    const e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    e !== 0 && (t[0] /= e, t[1] /= e);
  }
  getLength(t, e, s, r) {
    const i = s - t, n = r - e;
    return Math.sqrt(i * i + n * n);
  }
  getSegLength(t) {
    const [[e, s], [r, i]] = t;
    return this.getLength(e, s, r, i);
  }
  getCoord2D(t, e, s, r, i) {
    return [t + (s - t) * i, e + (r - e) * i];
  }
  getSegCoord2D(t, e) {
    const [[s, r], [i, n]] = t;
    return this.getCoord2D(s, r, i, n, e);
  }
  getAngle(t, e, s, r, i) {
    const n = s - t, o = r - e;
    return Math.atan2(o, n);
  }
  getAngleCS(t, e, s, r, i) {
    const n = s - t, o = r - e, a = Math.sqrt(n * n + o * o);
    return a > 0 ? [n / a, o / a] : [1, 0];
  }
  getSegAngleCS(t, e) {
    const [[s, r], [i, n]] = t;
    return this.getAngleCS(s, r, i, n, e);
  }
  cut(t, e, s, r, i, n) {
    return [i <= 0 ? [t, e] : this.getCoord2D(t, e, s, r, i), n >= 1 ? [s, r] : this.getCoord2D(t, e, s, r, n)];
  }
  getSubCurve(t, e, s) {
    const r = $.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r, t, e, s) ? r : null;
  }
  appendSubCurve(t, e, s, r) {
    t.startPath(), e.seekPathStart();
    let i = 0, n = !0;
    if (!e.nextPoint())
      return !1;
    let o = e.x, a = e.y;
    for (; e.nextPoint(); ) {
      const h = this.getLength(o, a, e.x, e.y);
      if (h !== 0) {
        if (n) {
          if (i + h > s) {
            const c = (s - i) / h;
            let u = 1, m = !1;
            i + h >= r && (u = (r - i) / h, m = !0);
            const f = this.cut(o, a, e.x, e.y, c, u);
            if (f && t.pushPoints(f), m)
              break;
            n = !1;
          }
        } else {
          if (i + h > r) {
            const c = this.cut(o, a, e.x, e.y, 0, (r - i) / h);
            c && t.pushPoint(c[1]);
            break;
          }
          t.pushXY(e.x, e.y);
        }
        i += h, o = e.x, a = e.y;
      } else
        o = e.x, a = e.y;
    }
    return !0;
  }
  getCIMPointAlong(t, e) {
    if (!t.nextPoint())
      return null;
    let s, r, i, n, o = 0;
    for (s = t.x, r = t.y; t.nextPoint(); s = i, r = n) {
      i = t.x, n = t.y;
      const a = this.getLength(s, r, i, n);
      if (a !== 0) {
        if (o + a > e) {
          const h = (e - o) / a;
          return this.getCoord2D(s, r, i, n, h);
        }
        o += a;
      }
    }
    return null;
  }
  offset(t, e, s, r, i) {
    if (!t || t.length < 2)
      return null;
    let n = 0, o = t[n++], a = n;
    for (; n < t.length; ) {
      const m = t[n];
      m[0] === o[0] && m[1] === o[1] || (n !== a && (t[a] = t[n]), o = t[a++]), n++;
    }
    const h = t[0][0] === t[a - 1][0] && t[0][1] === t[a - 1][1];
    if (h && --a, a < (h ? 3 : 2))
      return null;
    const c = [];
    o = h ? t[a - 1] : null;
    let u = t[0];
    for (let m = 0; m < a; m++) {
      const f = m === a - 1 ? h ? t[0] : null : t[m + 1];
      if (o)
        if (f) {
          const _ = [f[0] - u[0], f[1] - u[1]];
          this.normalize(_);
          const p = [u[0] - o[0], u[1] - o[1]];
          this.normalize(p);
          const d = p[0] * _[1] - p[1] * _[0], g = p[0] * _[0] + p[1] * _[1];
          if (d === 0 && g === 1) {
            u = f;
            continue;
          }
          if (d >= 0 == e <= 0) {
            if (g < 1) {
              const y = [_[0] - p[0], _[1] - p[1]];
              this.normalize(y);
              const x = Math.sqrt((1 + g) / 2);
              if (x > 1 / r) {
                const P = -Math.abs(e) / x;
                c.push([u[0] - y[0] * P, u[1] - y[1] * P]);
              }
            }
          } else
            switch (s) {
              case It.Mitered: {
                const y = Math.sqrt((1 + g) / 2);
                if (y > 0 && 1 / y < r) {
                  const x = [_[0] - p[0], _[1] - p[1]];
                  this.normalize(x);
                  const P = Math.abs(e) / y;
                  c.push([u[0] - x[0] * P, u[1] - x[1] * P]);
                  break;
                }
              }
              case It.Bevelled:
                c.push([u[0] + p[1] * e, u[1] - p[0] * e]), c.push([u[0] + _[1] * e, u[1] - _[0] * e]);
                break;
              case It.Rounded:
                if (g < 1) {
                  c.push([u[0] + p[1] * e, u[1] - p[0] * e]);
                  const y = Math.floor(2.5 * (1 - g));
                  if (y > 0) {
                    const x = 1 / y;
                    let P = x;
                    for (let M = 1; M < y; M++, P += x) {
                      const S = [p[1] * (1 - P) + _[1] * P, -p[0] * (1 - P) - _[0] * P];
                      this.normalize(S), c.push([u[0] + S[0] * e, u[1] + S[1] * e]);
                    }
                  }
                  c.push([u[0] + _[1] * e, u[1] - _[0] * e]);
                }
                break;
              case It.Square:
              default:
                if (d < 0)
                  c.push([u[0] + (p[1] + p[0]) * e, u[1] + (p[1] - p[0]) * e]), c.push([u[0] + (_[1] - _[0]) * e, u[1] - (_[0] + _[1]) * e]);
                else {
                  const y = Math.sqrt((1 + Math.abs(g)) / 2), x = [_[0] - p[0], _[1] - p[1]];
                  this.normalize(x);
                  const P = e / y;
                  c.push([u[0] - x[0] * P, u[1] - x[1] * P]);
                }
            }
        } else {
          const _ = [u[0] - o[0], u[1] - o[1]];
          this.normalize(_), c.push([u[0] + _[1] * e, u[1] - _[0] * e]);
        }
      else {
        const _ = [f[0] - u[0], f[1] - u[1]];
        this.normalize(_), c.push([u[0] + _[1] * e, u[1] - _[0] * e]);
      }
      o = u, u = f;
    }
    return c.length < (h ? 3 : 2) ? null : (h && c.push([c[0][0], c[0][1]]), c);
  }
};
const Ke = 1.7320508075688772, Qr = 5, tn = $e.OpenEnded;
let xi = class Bt {
  static local() {
    return Bt.instance === null && (Bt.instance = new Bt()), Bt.instance;
  }
  execute(t, e, s, r, i) {
    return new en(t, e, s);
  }
};
xi.instance = null;
let en = class extends He {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new ft(), this._width = (e.width !== void 0 ? e.width : Qr) * s, this._arrowType = e.geometricEffectArrowType !== void 0 ? e.geometricEffectArrowType : e.arrowType !== void 0 ? e.arrowType : tn, this._offsetFlattenError = me * s;
  }
  processPath(t) {
    const e = $.createEmptyOptimizedCIM(t.geometryType);
    switch (this._arrowType) {
      case $e.OpenEnded:
      default:
        this._constructSimpleArrow(e, t, !0);
        break;
      case $e.Block:
        this._constructSimpleArrow(e, t, !1);
        break;
      case $e.Crossed:
        this._constructCrossedArrow(e, t);
    }
    return e;
  }
  _constructSimpleArrow(t, e, s) {
    const r = e.pathLength();
    let i = this._width;
    r < 2 * i && (i = r / 2);
    const n = this._curveHelper.getSubCurve(e, 0, r - i);
    if (!n || !n.nextPath())
      return;
    n.seekPathStart();
    const o = i / 2;
    if (this._curveHelper.isEmpty(n))
      return;
    const a = Lt(n), h = this._constructOffset(a, -o);
    if (!h)
      return;
    const c = this._constructOffset(a, o);
    if (!c)
      return;
    const u = this._constructArrowBasePoint(h, -o / 2);
    if (!u)
      return;
    const m = this._constructArrowBasePoint(c, o / 2);
    if (!m)
      return;
    e.seekInPath(e.numPoints - 1);
    const f = [e.x, e.y];
    t.pushPath(c), t.nextPath(), t.nextPoint(), t.setControlPoint(), t.pushPoint(m), t.nextPoint(), t.setControlPoint(), t.pushPoint(f), t.nextPoint(), t.setControlPoint(), t.pushPoint(u), t.nextPoint(), t.setControlPoint(), t.pushPoints(h.reverse()), t.setControlPoint(), s || (t.setControlPointAt(0), t.setControlPointAt(t.numPoints - 1), t.pushPoint(c[0])), t.reset();
  }
  _constructCrossedArrow(t, e) {
    const s = e.pathLength();
    let r = this._width;
    s < r * (1 + Ke + 1) && (r = s / (1 + Ke + 1)), e.seekPathStart();
    const i = this._curveHelper.getSubCurve(e, 0, s - r * (1 + Ke));
    if (!i)
      return;
    i.nextPath();
    const n = r / 2;
    if (this._curveHelper.isEmpty(i))
      return;
    const o = Lt(i), a = this._constructOffset(o, n);
    if (!a)
      return;
    const h = this._constructOffset(o, -n);
    if (!h)
      return;
    const c = this._curveHelper.getSubCurve(e, 0, s - r);
    if (!c || (c.nextPath(), this._curveHelper.isEmpty(c)))
      return;
    const u = Lt(c), m = this._constructOffset(u, n);
    if (!m)
      return;
    const f = this._constructOffset(u, -n);
    if (!f)
      return;
    const _ = m[m.length - 1], p = this._constructArrowBasePoint(m, n / 2);
    if (!p)
      return;
    const d = f[f.length - 1], g = this._constructArrowBasePoint(f, -n / 2);
    if (!g)
      return;
    e.seekInPath(e.numPoints - 1);
    const y = [e.x, e.y];
    t.pushPath(a), t.nextPath(), t.nextPoint(), t.setControlPoint(), t.pushPoint(d), t.nextPoint(), t.setControlPoint(), t.pushPoint(g), t.nextPoint(), t.setControlPoint(), t.pushPoint(y), t.nextPoint(), t.setControlPoint(), t.pushPoint(p), t.nextPoint(), t.setControlPoint(), t.pushPoint(_), t.nextPoint(), t.setControlPoint(), t.pushPoints(h.reverse()), t.nextPoint(), t.setControlPoint(), t.reset();
  }
  _constructOffset(t, e) {
    return this._curveHelper.offset(t, e, It.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t, e) {
    if (!t || t.length < 2)
      return null;
    const s = t[t.length - 2], r = t[t.length - 1], i = [r[0] - s[0], r[1] - s[1]];
    return this._curveHelper.normalize(i), [r[0] + i[1] * e, r[1] - i[0] * e];
  }
}, Mi = class Wt {
  static local() {
    return Wt.instance === null && (Wt.instance = new Wt()), Wt.instance;
  }
  execute(t, e, s, r, i, n) {
    return new sn(t, e, s, r, i, n);
  }
};
Mi.instance = null;
let sn = class {
  constructor(t, e, s, r, i, n) {
    this._inputGeometries = t, this._tileKey = r, this._geometryEngine = i, this._curveHelper = new ft(), this._size = (e.size !== void 0 ? e.size : 1) * s, this._maxInflateSize = n * s, this._offsetFlattenError = me * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (this._size === 0)
        return t;
      if (t.geometryType === "esriGeometryEnvelope") {
        if (this._size > 0) {
          const i = $.createEmptyOptimizedCIM(t.geometryType), n = pe(t)[0], o = this._curveHelper.offset(n, this._size, It.Rounded, 4, this._offsetFlattenError);
          if (o)
            return i.pushPath(o), i;
        } else if (this._size < 0) {
          const i = t.asJSON();
          if (Math.min(i.xmax - i.xmin, i.ymax - i.ymin) + 2 * this._size > 0)
            return $.fromJSONCIM({ xmin: i.xmin - this._size, xmax: i.xmax + this._size, ymin: i.ymin - this._size, ymax: i.ymax + this._size });
        }
      }
      const e = this._geometryEngine;
      if (e == null)
        return null;
      const s = this._tileKey ? ws(t, this._maxInflateSize) : t;
      if (!s)
        continue;
      const r = e.buffer(Ps.WebMercator, s.asJSON(), this._size, 1);
      return r ? $.fromJSONCIM(r) : null;
    }
    return null;
  }
}, bi = class Jt {
  static local() {
    return Jt.instance === null && (Jt.instance = new Jt()), Jt.instance;
  }
  execute(t, e, s, r, i) {
    return new rn(t, e, s);
  }
};
bi.instance = null;
let rn = class {
  constructor(t, e, s) {
    this._defaultPointSize = 20, this._inputGeometries = t, this._geomUnitsPerPoint = s, this._rule = e.rule ?? L.FullGeometry, this._defaultSize = this._defaultPointSize * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      const e = this._processGeom(pe(t));
      if (e && e.length)
        return $.fromJSONCIM({ paths: e });
    }
    return null;
  }
  _clone(t) {
    return [t[0], t[1]];
  }
  _mid(t, e) {
    return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
  }
  _mix(t, e, s, r) {
    return [t[0] * e + s[0] * r, t[1] * e + s[1] * r];
  }
  _add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  }
  _add2(t, e, s) {
    return [t[0] + e, t[1] + s];
  }
  _sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  }
  _dist(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }
  _norm(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  _normalize(t, e = 1) {
    const s = e / this._norm(t);
    t[0] *= s, t[1] *= s;
  }
  _leftPerpendicular(t) {
    const e = -t[1], s = t[0];
    t[0] = e, t[1] = s;
  }
  _leftPerp(t) {
    return [-t[1], t[0]];
  }
  _rightPerpendicular(t) {
    const e = t[1], s = -t[0];
    t[0] = e, t[1] = s;
  }
  _rightPerp(t) {
    return [t[1], -t[0]];
  }
  _dotProduct(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  _crossProduct(t, e) {
    return t[0] * e[1] - t[1] * e[0];
  }
  _rotateDirect(t, e, s) {
    const r = t[0] * e - t[1] * s, i = t[0] * s + t[1] * e;
    t[0] = r, t[1] = i;
  }
  _makeCtrlPt(t) {
    const e = [t[0], t[1]];
    return Ze(e, 1), e;
  }
  _addAngledTicks(t, e, s, r) {
    const i = this._sub(s, e);
    this._normalize(i);
    const n = this._crossProduct(i, this._sub(r, e));
    let o;
    o = n > 0 ? this._rightPerp(i) : this._leftPerp(i);
    const a = Math.abs(n) / 2, h = [];
    h.push([e[0] + (o[0] - i[0]) * a, e[1] + (o[1] - i[1]) * a]), h.push(e), h.push(s), h.push([s[0] + (o[0] + i[0]) * a, s[1] + (o[1] + i[1]) * a]), t.push(h);
  }
  _addBezier2(t, e, s, r, i) {
    if (i-- == 0)
      return void t.push(r);
    const n = this._mid(e, s), o = this._mid(s, r), a = this._mid(n, o);
    this._addBezier2(t, e, n, a, i), this._addBezier2(t, a, o, r, i);
  }
  _addBezier3(t, e, s, r, i, n) {
    if (n-- == 0)
      return void t.push(i);
    const o = this._mid(e, s), a = this._mid(s, r), h = this._mid(r, i), c = this._mid(o, a), u = this._mid(a, h), m = this._mid(c, u);
    this._addBezier3(t, e, o, c, m, n), this._addBezier3(t, m, u, h, i, n);
  }
  _add90DegArc(t, e, s, r, i) {
    const n = i ?? this._crossProduct(this._sub(s, e), this._sub(r, e)) > 0, o = this._mid(e, s), a = this._sub(o, e);
    n ? this._leftPerpendicular(a) : this._rightPerpendicular(a), o[0] += a[0], o[1] += a[1], this._addBezier3(t, e, this._mix(e, 0.33333, o, 0.66667), this._mix(s, 0.33333, o, 0.66667), s, 4);
  }
  _addArrow(t, e, s) {
    const r = e[0], i = e[1], n = e[e.length - 1], o = this._sub(r, i);
    this._normalize(o);
    const a = this._crossProduct(o, this._sub(n, i)), h = 0.5 * a, c = this._leftPerp(o), u = [n[0] - c[0] * a, n[1] - c[1] * a], m = e.length - 1, f = [];
    f.push(s ? [-c[0], -c[1]] : c);
    let _ = [-o[0], -o[1]];
    for (let p = 1; p < m - 1; p++) {
      const d = this._sub(e[p + 1], e[p]);
      this._normalize(d);
      const g = this._dotProduct(d, _), y = this._crossProduct(d, _), x = Math.sqrt((1 + g) / 2), P = this._sub(d, _);
      this._normalize(P), P[0] /= x, P[1] /= x, f.push(y < 0 ? [-P[0], -P[1]] : P), _ = d;
    }
    f.push(this._rightPerp(_));
    for (let p = f.length - 1; p > 0; p--)
      t.push([e[p][0] + f[p][0] * h, e[p][1] + f[p][1] * h]);
    t.push([u[0] + f[0][0] * h, u[1] + f[0][1] * h]), t.push([u[0] + f[0][0] * a, u[1] + f[0][1] * a]), t.push(r), t.push([u[0] - f[0][0] * a, u[1] - f[0][1] * a]), t.push([u[0] - f[0][0] * h, u[1] - f[0][1] * h]);
    for (let p = 1; p < f.length; p++)
      t.push([e[p][0] - f[p][0] * h, e[p][1] - f[p][1] * h]);
  }
  _cp2(t, e, s) {
    return t.length >= 2 ? t[1] : this._add2(t[0], e * this._defaultSize, s * this._defaultSize);
  }
  _cp3(t, e, s, r) {
    if (t.length >= 3)
      return t[2];
    const i = this._mix(t[0], 1 - s, e, s), n = this._sub(e, t[0]);
    return this._normalize(n), this._rightPerpendicular(n), [i[0] + n[0] * r * this._defaultSize, i[1] + n[1] * r * this._defaultSize];
  }
  _arrowPath(t) {
    if (t.length > 2)
      return t;
    const e = t[0], s = this._cp2(t, -4, 0), r = this._sub(e, s);
    this._normalize(r);
    const i = this._rightPerp(r);
    return [e, s, [e[0] + (i[0] - r[0]) * this._defaultSize, e[1] + (i[1] - r[1]) * this._defaultSize]];
  }
  _arrowLastSeg(t) {
    const e = t[0], s = this._cp2(t, -4, 0);
    let r;
    if (t.length >= 3)
      r = t[t.length - 1];
    else {
      const i = this._sub(e, s);
      this._normalize(i);
      const n = this._rightPerp(i);
      r = [e[0] + (n[0] - i[0]) * this._defaultSize, e[1] + (n[1] - i[1]) * this._defaultSize];
    }
    return [s, r];
  }
  _processGeom(t) {
    if (!t)
      return null;
    const e = [];
    for (const s of t) {
      if (!s || s.length === 0)
        continue;
      const r = s.length;
      let i = s[0];
      switch (this._rule) {
        case L.PerpendicularFromFirstSegment: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 4), a = [];
          a.push(o), a.push(this._mid(i, n)), e.push(a);
          break;
        }
        case L.ReversedFirstSegment: {
          const n = this._cp2(s, 0, -1);
          e.push([n, i]);
          break;
        }
        case L.PerpendicularToSecondSegment: {
          const n = this._cp2(s, -4, 1), o = this._cp3(s, n, 0.882353, -1.94), a = [];
          a.push(this._mid(n, o)), a.push(i), e.push(a);
          break;
        }
        case L.SecondSegmentWithTicks: {
          const n = this._cp2(s, -4, 1), o = this._cp3(s, n, 0.882353, -1.94), a = this._sub(o, n);
          let h;
          h = this._crossProduct(a, this._sub(i, n)) > 0 ? this._rightPerp(h) : this._leftPerp(a);
          const c = [];
          c.push([n[0] + (h[0] - a[0]) / 3, n[1] + (h[1] - a[1]) / 3]), c.push(n), c.push(o), c.push([o[0] + (h[0] + a[0]) / 3, o[1] + (h[1] + a[1]) / 3]), e.push(c);
          break;
        }
        case L.DoublePerpendicular: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 3), a = this._mid(i, n), h = this._sub(a, o);
          this._normalize(h);
          const c = this._crossProduct(h, this._sub(i, o));
          this._leftPerpendicular(h);
          const u = [];
          u.push(i), u.push([o[0] + h[0] * c, o[1] + h[1] * c]), e.push(u);
          const m = [];
          m.push([o[0] - h[0] * c, o[1] - h[1] * c]), m.push(n), e.push(m);
          break;
        }
        case L.OppositeToFirstSegment: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 3), a = this._mid(i, n), h = this._sub(a, o);
          this._normalize(h);
          const c = this._crossProduct(h, this._sub(i, o));
          this._leftPerpendicular(h);
          const u = [];
          u.push([o[0] + h[0] * c, o[1] + h[1] * c]), u.push([o[0] - h[0] * c, o[1] - h[1] * c]), e.push(u);
          break;
        }
        case L.TriplePerpendicular: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 4), a = this._mid(i, n), h = this._sub(a, o);
          this._normalize(h);
          const c = this._crossProduct(h, this._sub(i, o));
          this._leftPerpendicular(h);
          const u = [];
          u.push([o[0] + h[0] * c * 0.8, o[1] + h[1] * c * 0.8]), u.push([a[0] + 0.8 * (i[0] - a[0]), a[1] + 0.8 * (i[1] - a[1])]), e.push(u), e.push([o, a]);
          const m = [];
          m.push([o[0] - h[0] * c * 0.8, o[1] - h[1] * c * 0.8]), m.push([a[0] + 0.8 * (n[0] - a[0]), a[1] + 0.8 * (n[1] - a[1])]), e.push(m);
          break;
        }
        case L.HalfCircleFirstSegment: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 4), a = this._mid(i, n);
          let h = this._sub(n, i);
          const c = Math.cos(Math.PI / 18), u = Math.sin(Math.PI / 18), m = Math.sqrt((1 + c) / 2), f = Math.sqrt((1 - c) / 2), _ = [];
          let p;
          this._crossProduct(h, this._sub(o, i)) > 0 ? (_.push(i), h = this._sub(i, a), p = n) : (_.push(n), h = this._sub(n, a), p = i), this._rotateDirect(h, m, f), h[0] /= m, h[1] /= m;
          for (let d = 1; d <= 18; d++)
            _.push(this._add(a, h)), this._rotateDirect(h, c, u);
          _.push(p), e.push(_);
          break;
        }
        case L.HalfCircleSecondSegment: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 1, -1);
          let a = this._sub(i, n);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, n)) / 2;
          this._leftPerpendicular(a);
          const c = [n[0] + a[0] * h, n[1] + a[1] * h];
          a = this._sub(n, c);
          const u = Math.cos(Math.PI / 18);
          let m = Math.sin(Math.PI / 18);
          h > 0 && (m = -m);
          const f = [n];
          for (let _ = 1; _ <= 18; _++)
            this._rotateDirect(a, u, m), f.push(this._add(c, a));
          e.push(f);
          break;
        }
        case L.HalfCircleExtended: {
          const n = this._cp2(s, 0, -2), o = this._cp3(s, n, 1, -1);
          let a;
          if (r >= 4)
            a = s[3];
          else {
            const _ = this._sub(i, n);
            a = this._add(o, _);
          }
          const h = this._dist(n, o) / 2 / 0.75, c = this._sub(n, i);
          this._normalize(c, h);
          const u = this._sub(o, a);
          this._normalize(u, h);
          const m = [a, o];
          e.push(m);
          const f = [this._clone(o)];
          this._addBezier3(f, o, this._add(o, u), this._add(n, c), n, 4), f.push(i), e.push(f);
          break;
        }
        case L.OpenCircle: {
          const n = this._cp2(s, -2, 0), o = this._sub(n, i), a = Math.cos(Math.PI / 18), h = -Math.sin(Math.PI / 18), c = [n];
          for (let u = 1; u <= 33; u++)
            this._rotateDirect(o, a, h), c.push(this._add(i, o));
          e.push(c);
          break;
        }
        case L.CoverageEdgesWithTicks: {
          const n = this._cp2(s, 0, -1);
          let o, a;
          if (r >= 3)
            o = s[2];
          else {
            const m = this._sub(n, i), f = this._leftPerp(m);
            o = [i[0] + f[0] - 0.25 * m[0], i[1] + f[1] - 0.25 * m[1]];
          }
          if (r >= 4)
            a = s[3];
          else {
            const m = this._mid(i, n), f = this._sub(i, n);
            this._normalize(f), this._leftPerpendicular(f);
            const _ = this._crossProduct(f, this._sub(o, m));
            this._rightPerpendicular(f), a = [o[0] + f[0] * _ * 2, o[1] + f[1] * _ * 2];
          }
          const h = this._sub(n, i);
          let c, u;
          c = this._crossProduct(h, this._sub(o, i)) > 0 ? this._rightPerp(h) : this._leftPerp(h), u = [], u.push(o), u.push(i), u.push([i[0] + (c[0] - h[0]) / 3, i[1] + (c[1] - h[1]) / 3]), e.push(u), c = this._crossProduct(h, this._sub(a, n)) > 0 ? this._rightPerp(c) : this._leftPerp(h), u = [], u.push([n[0] + (c[0] + h[0]) / 3, n[1] + (c[1] + h[1]) / 3]), u.push(n), u.push(a), e.push(u);
          break;
        }
        case L.GapExtentWithDoubleTicks: {
          const n = this._cp2(s, 0, 2), o = this._cp3(s, n, 0, 1);
          let a;
          if (r >= 4)
            a = s[3];
          else {
            const h = this._sub(n, i);
            a = this._add(o, h);
          }
          this._addAngledTicks(e, i, n, this._mid(o, a)), this._addAngledTicks(e, o, a, this._mid(i, n));
          break;
        }
        case L.GapExtentMidline: {
          const n = this._cp2(s, 2, 0), o = this._cp3(s, n, 0, 1);
          let a;
          if (r >= 4)
            a = s[3];
          else {
            const c = this._sub(n, i);
            a = this._add(o, c);
          }
          const h = [];
          h.push(this._mid(i, o)), h.push(this._mid(n, a)), e.push(h);
          break;
        }
        case L.Chevron: {
          const n = this._cp2(s, -1, -1);
          let o;
          if (r >= 3)
            o = s[2];
          else {
            const a = this._sub(n, i);
            this._leftPerpendicular(a), o = this._add(i, a);
          }
          e.push([n, this._makeCtrlPt(i), o]);
          break;
        }
        case L.PerpendicularWithArc: {
          const n = this._cp2(s, 0, -2), o = this._cp3(s, n, 0.5, -1);
          let a = this._sub(n, i);
          const h = this._norm(a);
          a[0] /= h, a[1] /= h;
          const c = this._crossProduct(a, this._sub(o, i));
          let u = this._dotProduct(a, this._sub(o, i));
          u < 0.05 * h ? u = 0.05 * h : u > 0.95 * h && (u = 0.95 * h);
          const m = [i[0] + a[0] * u, i[1] + a[1] * u];
          this._leftPerpendicular(a);
          let f = [];
          f.push([m[0] - a[0] * c, m[1] - a[1] * c]), f.push([m[0] + a[0] * c, m[1] + a[1] * c]), e.push(f);
          const _ = [n[0] + a[0] * c, n[1] + a[1] * c];
          a = this._sub(n, _);
          const p = Math.cos(Math.PI / 18);
          let d = Math.sin(Math.PI / 18);
          c < 0 && (d = -d), f = [i, n];
          for (let g = 1; g <= 9; g++)
            this._rotateDirect(a, p, d), f.push(this._add(_, a));
          e.push(f);
          break;
        }
        case L.ClosedHalfCircle: {
          const n = this._cp2(s, 2, 0), o = this._mid(i, n), a = this._sub(n, o), h = Math.cos(Math.PI / 18), c = Math.sin(Math.PI / 18), u = [i, n];
          for (let m = 1; m <= 18; m++)
            this._rotateDirect(a, h, c), u.push(this._add(o, a));
          e.push(u);
          break;
        }
        case L.TripleParallelExtended: {
          const n = this._cp2(s, 0, -2), o = this._cp3(s, n, 1, -2), a = this._mid(i, n), h = this._sub(o, n);
          this._normalize(h);
          const c = Math.abs(this._crossProduct(h, this._sub(a, n))) / 2, u = this._dist(n, o), m = [n, i];
          m.push([i[0] + h[0] * u * 0.5, i[1] + h[1] * u * 0.5]), e.push(m);
          const f = [];
          f.push([a[0] - h[0] * c, a[1] - h[1] * c]), f.push([a[0] + h[0] * u * 0.375, a[1] + h[1] * u * 0.375]), Ze(f[f.length - 1], 1), f.push([a[0] + h[0] * u * 0.75, a[1] + h[1] * u * 0.75]), e.push(f);
          const _ = [n, o];
          e.push(_);
          break;
        }
        case L.ParallelWithTicks: {
          const n = this._cp2(s, 3, 0), o = this._cp3(s, n, 0.5, -1), a = this._sub(o, n);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, i));
          this._leftPerpendicular(a), this._addAngledTicks(e, i, n, o), this._addAngledTicks(e, this._mix(i, 1, a, h), this._mix(n, 1, a, h), this._mid(i, n));
          break;
        }
        case L.Parallel: {
          const n = this._cp2(s, 3, 0), o = this._cp3(s, n, 0.5, -1), a = this._sub(n, i);
          this._normalize(a);
          const h = this._leftPerp(a), c = this._crossProduct(a, this._sub(o, i));
          let u = [i, n];
          e.push(u), u = [], u.push([i[0] + h[0] * c, i[1] + h[1] * c]), u.push([n[0] + h[0] * c, n[1] + h[1] * c]), e.push(u);
          break;
        }
        case L.PerpendicularToFirstSegment: {
          const n = this._cp2(s, 3, 0), o = this._cp3(s, n, 0.5, -1), a = this._mid(i, n), h = this._sub(n, i);
          this._normalize(h);
          const c = this._crossProduct(h, this._sub(o, i));
          this._leftPerpendicular(h);
          const u = [];
          u.push([a[0] - h[0] * c * 0.25, a[1] - h[1] * c * 0.25]), u.push([a[0] + h[0] * c * 1.25, a[1] + h[1] * c * 1.25]), e.push(u);
          break;
        }
        case L.ParallelOffset: {
          const n = this._cp2(s, 3, 0), o = this._cp3(s, n, 0.5, -1), a = this._sub(n, i);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, i));
          this._leftPerpendicular(a);
          const c = [];
          c.push([i[0] - a[0] * h, i[1] - a[1] * h]), c.push([n[0] - a[0] * h, n[1] - a[1] * h]), e.push(c);
          const u = [];
          u.push([i[0] + a[0] * h, i[1] + a[1] * h]), u.push([n[0] + a[0] * h, n[1] + a[1] * h]), e.push(u);
          break;
        }
        case L.OffsetOpposite: {
          const n = this._cp2(s, 3, 0), o = this._cp3(s, n, 0.5, -1), a = this._sub(n, i);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, i));
          this._leftPerpendicular(a);
          const c = [];
          c.push([i[0] - a[0] * h, i[1] - a[1] * h]), c.push([n[0] - a[0] * h, n[1] - a[1] * h]), e.push(c);
          break;
        }
        case L.OffsetSame: {
          const n = this._cp2(s, 3, 0), o = this._cp3(s, n, 0.5, -1), a = this._sub(n, i);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, i));
          this._leftPerpendicular(a);
          const c = [];
          c.push([i[0] + a[0] * h, i[1] + a[1] * h]), c.push([n[0] + a[0] * h, n[1] + a[1] * h]), e.push(c);
          break;
        }
        case L.CircleWithArc: {
          let n = this._cp2(s, 3, 0);
          const o = this._cp3(s, n, 0.5, -1);
          let a, h;
          if (r >= 4)
            a = s[3], h = this._crossProduct(this._sub(a, n), this._sub(o, n)) > 0;
          else {
            a = n, h = this._crossProduct(this._sub(a, i), this._sub(o, i)) > 0;
            const _ = 24 * this._geomUnitsPerPoint, p = this._sub(a, i);
            this._normalize(p, _);
            const d = Math.sqrt(2) / 2;
            this._rotateDirect(p, d, h ? d : -d), n = this._add(i, p);
          }
          const c = this._sub(n, i), u = Math.cos(Math.PI / 18), m = Math.sin(Math.PI / 18), f = [n];
          for (let _ = 1; _ <= 36; _++)
            this._rotateDirect(c, u, m), f.push(this._add(i, c));
          this._add90DegArc(f, n, a, o, h), Ze(f[f.length - 8], 1), e.push(f);
          break;
        }
        case L.DoubleJog: {
          let n, o, a = this._cp2(s, -3, 1);
          if (n = r >= 3 ? s[2] : this._add(i, this._sub(i, a)), r >= 4)
            o = s[3];
          else {
            const g = i;
            i = a, o = n;
            const y = this._dist(i, g), x = this._dist(o, g);
            let P = 30 * this._geomUnitsPerPoint;
            0.5 * y < P && (P = 0.5 * y), 0.5 * x < P && (P = 0.5 * x), a = this._mix(i, P / y, g, (y - P) / y), n = this._mix(o, P / x, g, (x - P) / x);
          }
          const h = this._mid(i, a), c = this._mid(o, n), u = this._dist(i, a), m = this._dist(n, o);
          let f = Math.min(u, m) / 8;
          f = Math.min(f, 24 * this._geomUnitsPerPoint);
          const _ = Math.cos(Math.PI / 4);
          let p = this._sub(i, a);
          this._normalize(p, f), this._crossProduct(p, this._sub(o, a)) > 0 ? this._rotateDirect(p, _, -_) : this._rotateDirect(p, _, _);
          let d = [];
          d.push(a), d.push(this._add(h, p)), d.push(this._sub(h, p)), d.push(i), e.push(d), p = this._sub(o, n), this._normalize(p, f), this._crossProduct(p, this._sub(i, n)) < 0 ? this._rotateDirect(p, _, _) : this._rotateDirect(p, _, -_), d = [], d.push(n), d.push(this._add(c, p)), d.push(this._sub(c, p)), d.push(o), e.push(d);
          break;
        }
        case L.PerpendicularOffset: {
          const n = this._cp2(s, -4, 1), o = this._cp3(s, n, 0.882353, -1.94), a = this._sub(o, n);
          this._crossProduct(a, this._sub(i, n)) > 0 ? this._rightPerpendicular(a) : this._leftPerpendicular(a);
          const h = [a[0] / 8, a[1] / 8], c = this._sub(this._mid(n, o), h);
          e.push([c, i]);
          break;
        }
        case L.LineExcludingLastSegment: {
          const n = this._arrowPath(s), o = [];
          let a = n.length - 2;
          for (; a--; )
            o.push(n[a]);
          e.push(o);
          break;
        }
        case L.MultivertexArrow: {
          const n = this._arrowPath(s), o = [];
          this._addArrow(o, n, !1), e.push(o);
          break;
        }
        case L.CrossedArrow: {
          const n = this._arrowPath(s), o = [];
          this._addArrow(o, n, !0), e.push(o);
          break;
        }
        case L.ChevronArrow: {
          const [n, o] = this._arrowLastSeg(s), a = 10 * this._geomUnitsPerPoint, h = this._sub(i, n);
          this._normalize(h);
          const c = this._crossProduct(h, this._sub(o, n)), u = this._leftPerp(h), m = [o[0] - u[0] * c * 2, o[1] - u[1] * c * 2], f = [];
          f.push([o[0] + h[0] * a, o[1] + h[1] * a]), f.push(i), f.push([m[0] + h[0] * a, m[1] + h[1] * a]), e.push(f);
          break;
        }
        case L.ChevronArrowOffset: {
          const [n, o] = this._arrowLastSeg(s), a = this._sub(i, n);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, n));
          this._leftPerpendicular(a);
          const c = [o[0] - a[0] * h, o[1] - a[1] * h], u = [];
          u.push([c[0] + a[0] * h * 0.5, c[1] + a[1] * h * 0.5]), u.push(this._mid(c, i)), u.push([c[0] - a[0] * h * 0.5, c[1] - a[1] * h * 0.5]), e.push(u);
          break;
        }
        case L.PartialFirstSegment: {
          const [n, o] = this._arrowLastSeg(s), a = this._sub(i, n);
          this._normalize(a);
          const h = this._crossProduct(a, this._sub(o, n));
          this._leftPerpendicular(a);
          const c = [o[0] - a[0] * h, o[1] - a[1] * h];
          e.push([n, c]);
          break;
        }
        case L.Arch: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 1), a = this._sub(i, n), h = this._mix(o, 1, a, 0.55), c = this._mix(o, 1, a, -0.55), u = [i];
          this._addBezier2(u, i, h, o, 4), this._addBezier2(u, o, c, n, 4), e.push(u);
          break;
        }
        case L.CurvedParallelTicks: {
          const n = this._cp2(s, -4, 1), o = this._cp3(s, n, 0.882353, -1.94), a = this._sub(o, n);
          this._crossProduct(a, this._sub(i, n)) > 0 ? this._rightPerpendicular(a) : this._leftPerpendicular(a);
          const h = [a[0] / 8, a[1] / 8], c = this._sub(this._mid(n, o), h), u = this._sub(this._mix(n, 0.75, o, 0.25), h), m = this._sub(this._mix(n, 0.25, o, 0.75), h), f = [n];
          this._addBezier2(f, n, u, c, 3), this._addBezier2(f, c, m, o, 3), e.push(f);
          for (let _ = 0; _ < 8; _++) {
            const p = f[2 * _ + 1], d = [this._clone(p)];
            d.push(this._add(p, [a[0] / 4, a[1] / 4])), e.push(d);
          }
          break;
        }
        case L.Arc90Degrees: {
          const n = this._cp2(s, 0, -1), o = this._cp3(s, n, 0.5, 1), a = [n];
          this._add90DegArc(a, n, i, o), e.push(a);
          break;
        }
        case L.FullGeometry:
        default:
          e.push(s);
      }
    }
    return e;
  }
}, Si = class Ut {
  static local() {
    return Ut.instance === null && (Ut.instance = new Ut()), Ut.instance;
  }
  execute(t, e, s, r, i) {
    return new nn(t, e, s);
  }
};
Si.instance = null;
let nn = class extends He {
  constructor(t, e, s) {
    super(t, !0, !0), this._curveHelper = new ft(), this._beginCut = (e.beginCut !== void 0 ? e.beginCut : 1) * s, this._endCut = (e.endCut !== void 0 ? e.endCut : 1) * s, this._middleCut = (e.middleCut !== void 0 ? e.middleCut : 0) * s, this._invert = e.invert !== void 0 && e.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t) {
    const { _beginCut: e, _endCut: s, _middleCut: r } = this, i = t.pathLength(), n = $.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (e !== 0 || s !== 0 || r !== 0)
        if (e + s + r >= i)
          for (n.startPath(); t.nextPoint(); )
            n.pushXY(t.x, t.y);
        else
          this._curveHelper.appendSubCurve(n, t, 0, e), this._curveHelper.appendSubCurve(n, t, 0.5 * (i - r), 0.5 * (i + r)), this._curveHelper.appendSubCurve(n, t, i - s, s);
    } else if (e === 0 && s === 0 && r === 0)
      for (n.startPath(); t.nextPoint(); )
        n.pushXY(t.x, t.y);
    else
      e + s + r < i && (r === 0 ? this._curveHelper.appendSubCurve(n, t, e, i - s) : (this._curveHelper.appendSubCurve(n, t, e, 0.5 * (i - r)), this._curveHelper.appendSubCurve(n, t, 0.5 * (i + r), i - s)));
    return n.numPaths === 0 ? null : n;
  }
};
const Ds = 1e-7;
let Ye = class {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return this._values.length === 0;
  }
  size() {
    return this._values.length;
  }
  init(t, e, s = !0) {
    if (this._setEmpty(), !t || t.length === 0)
      return !1;
    for (let r = 0; r < t.length; r++) {
      let i = Math.abs(t[r]);
      s && i < Ds && (i = Ds), this._values.push(i), this._length += i;
    }
    return e && 1 & t.length && (this._length *= 2), this._length !== 0 && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, !0);
  }
  scale(t) {
    const e = this._values ? this._values.length : 0;
    for (let s = 0; s < e; ++s)
      this._values[s] *= t;
    this._length *= t, this.extPtGap *= t, this.ctrlPtGap *= t;
  }
  addValue(t) {
    this._length += t, this._values.push(t);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
}, ht = class {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var Pt;
(function(l) {
  l[l.FAIL = 0] = "FAIL", l[l.END = 1] = "END", l[l.CONTINUE = 2] = "CONTINUE";
})(Pt || (Pt = {}));
let ke = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = !1, this.isPartEnd = !1;
  }
  isValid() {
    return this.segment !== null;
  }
  copyTo(t) {
    t.segment = this.segment, t.segmentLength = this.segmentLength, t.abscissa = this.abscissa, t.isPathEnd = this.isPathEnd, t.isPartEnd = this.isPartEnd;
  }
}, Ve = class extends ft {
  constructor(t = 0, e = !1) {
    super(t, e), this._tolerance = me, this._currentPosition = new ke();
  }
  updateTolerance(t) {
    this._tolerance = me * t;
  }
  init(t, e, s = !0) {
    return s ? (this._patternLength = e.length(), this._partExtPtGap = e.extPtGap, this._partCtrlPtGap = e.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t, e = Pt.FAIL) {
    const s = new ke();
    return !!this._nextPosition(t, s, null, e) && (s.copyTo(this._currentPosition), !0);
  }
  curPointAndAngle(t) {
    t.pt = this._getPoint(this._currentPosition);
    const [e, s] = this._getAngleCS(this._currentPosition);
    t.ca = e, t.sa = s;
  }
  nextPointAndAngle(t, e, s = Pt.FAIL) {
    const r = new ke();
    if (!this._nextPosition(t, r, null, s))
      return !1;
    r.copyTo(this._currentPosition), e.pt = this._getPoint(r);
    const [i, n] = this._getAngleCS(r);
    return e.ca = i, e.sa = n, !0;
  }
  nextCurve(t) {
    if (t === 0)
      return null;
    const e = $.createEmptyOptimizedCIM("esriGeometryPolyline");
    e.startPath(), e.nextPath();
    const s = new ke();
    return this._nextPosition(t, s, e, Pt.END) ? (s.copyTo(this._currentPosition), e) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t) {
    return this._pathCursor.seekInPath(t), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t) {
    return [this.getPt(t), this.getPt(t + 1)];
  }
  _nextPosition(t, e, s, r) {
    if (this._currentPosition.isPathEnd)
      return !1;
    let i = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (i /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e); e.abscissa + t * this._partLengthRatio > e.segmentLength + this._tolerance; ) {
      if (s) {
        if (s.numPoints === 0)
          if (i === 0) {
            const o = e.segment[0];
            s.pushXY(o[0], o[1]);
          } else
            s.pushPoint(this.getSegCoord2D(e.segment, i));
        const n = e.segment[1];
        s.pushXY(n[0], n[1]);
      }
      if (i = 0, t -= (e.segmentLength - e.abscissa) / this._partLengthRatio, this._partSegCount)
        e.segment = this._nextSegment(), e.segmentLength = this.getSegLength(e.segment), e.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart())
          return r !== Pt.FAIL && (e.segmentLength = this.getSegLength(e.segment), e.isPartEnd = !0, r === Pt.END ? (e.abscissa = e.segmentLength, e.isPathEnd = !0) : e.abscissa = e.segmentLength + t, !0);
        this._currentPosition.copyTo(e);
      }
    }
    if (e.abscissa += t * this._partLengthRatio, s) {
      s.numPoints === 0 && (i === 0 ? s.pushPoint(e.segment[0]) : s.pushPoint(this.getSegCoord2D(e.segment, i)));
      const n = e.abscissa / e.segmentLength;
      n === 1 ? s.pushPoint(e.segment[1]) : s.pushPoint(this.getSegCoord2D(e.segment, n));
    }
    return this._partSegCount || Math.abs(e.abscissa - e.segmentLength) < this._tolerance && (e.isPathEnd = this._partIsLast, e.isPartEnd = !0), !0;
  }
  _getPoint(t) {
    const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e);
  }
  _getAngleCS(t) {
    const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
    return this.getSegAngleCS(this._currentPosition.segment, e);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; )
      this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment())
      return !1;
    for (this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0; this._hasNextSegment(); )
      if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
        this._partIsLast = !this._hasNextSegment();
        break;
      }
    let t = this._partSegCount;
    for (; t; )
      this._previousSegment(), --t;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = !1, --this._partSegCount;
    const e = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e);
    let s = e + this._partSegCount + 1;
    if (s >= this._pathCursor.numPoints && (s = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s), this._patternLength > 0) {
      const r = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, i = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let n = Math.round((this._partLength - (r + i)) / this._patternLength);
      n <= 0 && (n = r + i > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (r + i + n * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else
      this._partLengthRatio = 1;
    return !0;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.numPoints - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
}, Ci = class qt {
  static local() {
    return qt.instance === null && (qt.instance = new qt()), qt.instance;
  }
  execute(t, e, s, r, i) {
    return new on(t, e, s);
  }
};
Ci.instance = null;
let on = class extends He {
  constructor(t, e, s) {
    super(t, !0, !0), this._firstCurve = null, this._walker = new Ve(), this._walker.updateTolerance(s), this._endings = e.lineDashEnding, this._customDashPos = -(e.offsetAlongLine ?? 0) * s, this._offsetAtEnd = (e.customEndingOffset ?? 0) * s, this._pattern = new Ye(), this._pattern.init(e.dashTemplate, !0), this._pattern.scale(s);
  }
  processPath(t) {
    if (this._pattern.length() === 0) {
      this.iteratePath = !1;
      const r = Lt(t);
      return $.fromJSONCIM({ paths: [r] });
    }
    if (!this.iteratePath) {
      let r = !0;
      switch (this._endings) {
        case Y.HalfPattern:
        case Y.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case Y.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case Y.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case Y.NoConstraint:
          this.isClosed || (r = !1);
          break;
        case Y.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const i = t.pathLength();
      if (this._pattern.isEmpty() || i < 0.1 * this._pattern.length()) {
        const n = Lt(t);
        return $.fromJSONCIM({ paths: [n] });
      }
      if (!this._walker.init(t, this._pattern, r)) {
        const n = Lt(t);
        return $.fromJSONCIM({ paths: [n] });
      }
    }
    let e;
    if (this.iteratePath)
      e = this._pattern.nextValue();
    else {
      let r;
      switch (this._endings) {
        case Y.HalfPattern:
        default:
          r = 0.5 * this._pattern.firstValue();
          break;
        case Y.HalfGap:
          r = 0.5 * -this._pattern.lastValue();
          break;
        case Y.FullGap:
          r = -this._pattern.lastValue();
          break;
        case Y.FullPattern:
          r = 0;
          break;
        case Y.NoConstraint:
        case Y.Custom:
          r = -this._customDashPos;
      }
      let i = r / this._pattern.length();
      i -= Math.floor(i), r = i * this._pattern.length(), this._pattern.reset(), e = this._pattern.nextValue();
      let n = !1;
      for (; r >= e; )
        r -= e, e = this._pattern.nextValue(), n = !n;
      e -= r, n ? (this._walker.nextPosition(e), e = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(e), e = this._pattern.nextValue(), this._walker.nextPosition(e), e = this._pattern.nextValue());
    }
    let s = this._walker.nextCurve(e);
    if (s)
      if (this._walker.isPathEnd()) {
        if (this.iteratePath = !1, this._firstCurve) {
          for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); )
            s.pushXY(this._firstCurve.x, this._firstCurve.y);
          this._firstCurve = null;
        }
      } else
        e = this._pattern.nextValue(), !this._walker.nextPosition(e) || this._walker.isPathEnd() ? (this.iteratePath = !1, this._firstCurve && (s = this._firstCurve, this._firstCurve = null)) : this.iteratePath = !0;
    else
      this.iteratePath = !1, s = this._firstCurve, this._firstCurve = null;
    return s == null || s.reset(), s;
  }
}, wi = class jt {
  static local() {
    return jt.instance === null && (jt.instance = new jt()), jt.instance;
  }
  execute(t, e, s, r, i, n) {
    return new an(t, e, s, r, i, n);
  }
};
wi.instance = null;
let an = class {
  constructor(t, e, s, r, i, n) {
    switch (this._inputGeometries = t, this._tileKey = r, this._geometryEngine = i, this._maxInflateSize = n * s, this._width = (e.width !== void 0 ? e.width : 2) * s, e.method) {
      case Rt.Mitered:
      case Rt.Bevelled:
      case Rt.Rounded:
      case Rt.TrueBuffer:
      case Rt.Square:
    }
    this._option = e.option;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (t.geometryType === "esriGeometryEnvelope" && this._width > 0) {
        const e = t.asJSON();
        return Math.min(e.xmax - e.xmin, e.ymax - e.ymin) - 2 * this._width < 0 ? t : $.fromJSONCIM({ paths: [[[e.xmin + this._width, e.ymin + this._width], [e.xmax - this._width, e.ymin + this._width], [e.xmax - this._width, e.ymax - this._width], [e.xmin + this._width, e.ymax - this._width], [e.xmin + this._width, e.ymin + this._width]], [[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]] });
      }
      if (t.geometryType === "esriGeometryPolygon") {
        if (this._width === 0)
          return t.clone();
        const e = this._geometryEngine;
        if (e == null)
          return null;
        const s = this._tileKey ? ws(t, this._maxInflateSize) : t.clone();
        if (!s)
          continue;
        const r = e.buffer(Ps.WebMercator, s.asJSON(), -this._width, 1);
        if (r)
          for (const i of r.rings)
            i && s.pushPath(i.reverse());
        return s;
      }
    }
    return null;
  }
}, vi = class Zt {
  static local() {
    return Zt.instance === null && (Zt.instance = new Zt()), Zt.instance;
  }
  execute(t, e, s, r, i) {
    return new hn(t, e, s);
  }
};
vi.instance = null;
let hn = class extends He {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new ft(), this._length = (e.length !== void 0 ? e.length : 20) * s, this._angle = e.angle !== void 0 ? e.angle : 225, this._position = e.position !== void 0 ? e.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = !1;
  }
  processPath(t) {
    const e = $.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(t))
      return null;
    t.seekInPath(0);
    const s = t.x, r = t.y;
    t.seekInPath(t.numPoints - 1);
    const i = t.x, n = t.y, o = [i - s, n - r];
    this._curveHelper.normalize(o);
    const a = s + (i - s) * this._position / 100, h = r + (n - r) * this._position / 100, c = Math.cos((90 - this._angle) / 180 * Math.PI);
    let u = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (u = -u), this._mirror = !this._mirror;
    const m = [a - this._length / 2 * c, h - this._length / 2 * u], f = [a + this._length / 2 * c, h + this._length / 2 * u];
    return e.pushPath([[s, r], m, f, [i, n]]), e;
  }
}, ki = class Kt {
  static local() {
    return Kt.instance === null && (Kt.instance = new Kt()), Kt.instance;
  }
  execute(t, e, s, r, i) {
    return new ln(t, e, s);
  }
};
ki.instance = null;
let ln = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0, this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.numPaths > 0)
        return this._move(t.clone(), this._offsetX, this._offsetY);
      t = this._inputGeometries.next();
    }
    return null;
  }
  _move(t, e, s) {
    for (; t.nextPath(); )
      for (; t.nextPoint(); )
        t.x = t.x + e, t.y = t.y + s;
    return t.reset(), t;
  }
}, Ii = class Qt {
  static local() {
    return Qt.instance === null && (Qt.instance = new Qt()), Qt.instance;
  }
  execute(t, e, s, r, i, n) {
    return new cn(t, e, s, r, i, n);
  }
};
Ii.instance = null;
let cn = class {
  constructor(t, e, s, r, i, n) {
    this._inputGeometries = t, this._tileKey = r, this._geometryEngine = i, this._curveHelper = new ft(), this._offset = (e.offset ?? 1) * s, this._method = e.method, this._maxInflateSize = n * s, this._option = e.option, this._offsetFlattenError = me * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (this._offset === 0)
        return t.clone();
      if (t.geometryType === "esriGeometryEnvelope") {
        if (this._method === It.Rounded && this._offset > 0) {
          const n = Lt(t), o = this._curveHelper.offset(n, -this._offset, this._method, 4, this._offsetFlattenError);
          if (o) {
            const a = $.createEmptyOptimizedCIM(t.geometryType);
            return a.pushPath(o), a;
          }
          return null;
        }
        const i = t.asJSON();
        if (J(i) && Math.min(i.xmax - i.xmin, i.ymax - i.ymin) + 2 * this._offset > 0)
          return $.fromJSONCIM({ xmin: i.xmin - this._offset, xmax: i.xmax + this._offset, ymin: i.ymin - this._offset, ymax: i.ymax + this._offset });
      }
      const e = this._geometryEngine;
      if (e == null)
        continue;
      const s = this._tileKey ? ws(t, this._maxInflateSize) : t.clone();
      if (!s)
        continue;
      const r = e.offset(Ps.WebMercator, s.asJSON(), -this._offset, 1, this._method, 4, this._offsetFlattenError);
      return r ? $.fromJSONCIM(r) : null;
    }
    return null;
  }
}, Li = class te {
  static local() {
    return te.instance === null && (te.instance = new te()), te.instance;
  }
  execute(t, e, s, r, i) {
    return new un(t, e, s);
  }
};
Li.instance = null;
let un = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._reverse = e.reverse === void 0 || e.reverse;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (!this._reverse)
        return t;
      if (t.geometryType === "esriGeometryPolyline")
        return fn(t.clone());
      t = this._inputGeometries.next();
    }
    return null;
  }
};
function fn(l) {
  for (; l.nextPath(); )
    for (let t = 0; t < l.numPoints / 2; t++) {
      l.seekInPath(t);
      const e = l.x, s = l.y;
      l.seekInPath(l.numPoints - t - 1);
      const r = l.x, i = l.y;
      l.x = e, l.y = s, l.seekInPath(t), l.x = r, l.y = i;
    }
  return l.reset(), l;
}
let zi = class ee {
  static local() {
    return ee.instance === null && (ee.instance = new ee()), ee.instance;
  }
  execute(t, e, s, r, i) {
    return new mn(t, e, s);
  }
};
zi.instance = null;
let mn = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._rotateAngle = e.angle !== void 0 ? e.angle * Math.PI / 180 : 0;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (this._rotateAngle === 0 || t.geometryType === "esriGeometryPoint")
        return t;
      if (t.numPaths > 0) {
        const e = xs(t), s = (e[2] + e[0]) / 2, r = (e[3] + e[1]) / 2;
        return t.reset(), this._rotate(t.clone(), s, r);
      }
      t = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t, e, s) {
    const r = Math.cos(this._rotateAngle), i = Math.sin(this._rotateAngle);
    for (; t.nextPath(); )
      for (; t.nextPoint(); ) {
        const n = t.x - e, o = t.y - s;
        t.x = e + n * r - o * i, t.y = s + n * i + o * r;
      }
    return t.reset(), t;
  }
}, Oi = class se {
  static local() {
    return se.instance === null && (se.instance = new se()), se.instance;
  }
  execute(t, e, s, r, i) {
    return new pn(t, e, s);
  }
};
Oi.instance = null;
let pn = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._xFactor = e.XScaleFactor !== void 0 ? e.XScaleFactor : 1.15, this._yFactor = e.YScaleFactor !== void 0 ? e.YScaleFactor : 1.15;
  }
  next() {
    const t = this._inputGeometries.next();
    if (t) {
      if (this._xFactor === 1 && this._yFactor === 1 || t.geometryType === "esriGeometryPoint")
        return t;
      if (t.numPaths > 0) {
        const e = xs(t), s = (e[2] + e[0]) / 2, r = (e[3] + e[1]) / 2;
        return t.reset(), this._scaleCursor(t.clone(), s, r);
      }
    }
    return null;
  }
  _scaleCursor(t, e, s) {
    for (; t.nextPath(); )
      for (; t.nextPoint(); )
        t.x = e + (t.x - e) * this._xFactor, t.y = s + (t.y - s) * this._yFactor;
    return t.reset(), t;
  }
}, Ti = class ie {
  static local() {
    return ie.instance === null && (ie.instance = new ie()), ie.instance;
  }
  execute(t, e, s, r, i) {
    return new _n(t, e, s);
  }
};
Ti.instance = null;
let _n = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._height = (e.amplitude !== void 0 ? e.amplitude : 2) * s, this._period = (e.period !== void 0 ? e.period : 3) * s, this._style = e.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new Ye(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new Ve(), this._walker.updateTolerance(s);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (this._height === 0 || this._period === 0)
        return t;
      const e = this._processGeom(t);
      if (e)
        return e;
      t = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(t) {
    const e = $.createEmptyOptimizedCIM(t.geometryType);
    for (; t.nextPath(); ) {
      e.startPath();
      const s = t.pathLength();
      if (this._walker.init(t, this._pattern))
        switch (this._style) {
          case xe.Sinus:
          default:
            this._constructCurve(e, s, !1);
            break;
          case xe.Square:
            this._constructSquare(e, s);
            break;
          case xe.Triangle:
            this._constructTriangle(e, s);
            break;
          case xe.Random:
            this._constructCurve(e, s, !0);
        }
      else
        for (; t.nextPoint(); )
          e.pushXY(t.x, t.y);
    }
    return e;
  }
  _constructCurve(t, e, s) {
    let r = Math.round(e / this._period);
    r === 0 && (r = 1);
    const i = r * 16 + 1, n = e / r, o = this._period / 16, a = 1 / i, h = 2 * Math.PI * e / n, c = 2 * Math.PI * Math.random(), u = 2 * Math.PI * Math.random(), m = 2 * Math.PI * Math.random(), f = 0.75 - Math.random() / 2, _ = 0.75 - Math.random() / 2, p = new ht();
    this._walker.curPointAndAngle(p), t.pushPoint(p.pt);
    let d = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(o, p)) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const g = d;
        let y;
        if (d += a, s) {
          const x = this._height / 2 * (1 + 0.3 * Math.sin(f * h * g + c));
          y = x * Math.sin(h * g + u), y += x * Math.sin(_ * h * g + m), y /= 2;
        } else
          y = 0.5 * this._height * Math.sin(0.5 * h * g);
        t.pushXY(p.pt[0] - y * p.sa, p.pt[1] + y * p.ca);
      }
    }
  }
  _constructSquare(t, e) {
    Math.round(e / this._period);
    let s = !0;
    for (; ; ) {
      let r = !1;
      if (this._walker.curPositionIsValid()) {
        const i = new ht();
        this._walker.curPointAndAngle(i);
        const n = new ht();
        if (this._walker.nextPointAndAngle(this._period, n)) {
          const o = new ht();
          this._walker.nextPointAndAngle(this._period, o) && (s ? (t.pushPoint(i.pt), s = !1) : t.pushPoint(i.pt), t.pushXY(i.pt[0] - this._height / 2 * i.sa, i.pt[1] + this._height / 2 * i.ca), t.pushXY(n.pt[0] - this._height / 2 * n.sa, n.pt[1] + this._height / 2 * n.ca), t.pushXY(n.pt[0] + this._height / 2 * n.sa, n.pt[1] - this._height / 2 * n.ca), t.pushXY(o.pt[0] + this._height / 2 * o.sa, o.pt[1] - this._height / 2 * o.ca), r = !0);
        }
      }
      if (!r) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t, e) {
    Math.round(e / this._period);
    let s = !0;
    for (; ; ) {
      let r = !1;
      if (this._walker.curPositionIsValid()) {
        const i = new ht();
        this._walker.curPointAndAngle(i);
        const n = new ht();
        if (this._walker.nextPointAndAngle(this._period / 2, n)) {
          const o = new ht();
          this._walker.nextPointAndAngle(this._period, o) && (this._walker.nextPosition(this._period / 2) && (s ? (t.pushPoint(i.pt), s = !1) : t.pushPoint(i.pt), t.pushXY(n.pt[0] - this._height / 2 * n.sa, n.pt[1] + this._height / 2 * n.ca), t.pushXY(o.pt[0] + this._height / 2 * o.sa, o.pt[1] - this._height / 2 * o.ca)), r = !0);
        }
      }
      if (!r) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
}, $i = class re {
  static local() {
    return re.instance === null && (re.instance = new re()), re.instance;
  }
  execute(t, e, s, r, i) {
    return new dn(t, e, s);
  }
};
$i.instance = null;
let dn = class extends de {
  constructor(t, e, s) {
    super(t), this._geometryWalker = new Ve(), this._geometryWalker.updateTolerance(s), this._angleToLine = e.angleToLine ?? !0, this._offset = (e.offset ? e.offset : 0) * s, this._originalEndings = e.endings, this._offsetAtEnd = (e.customEndingOffset ? e.customEndingOffset : 0) * s, this._position = -(e.offsetAlongLine ? e.offsetAlongLine : 0) * s, this._pattern = new Ye(), this._pattern.init(e.placementTemplate, !1), this._pattern.scale(s), this._endings = this._originalEndings;
  }
  processPath(t) {
    if (this._pattern.isEmpty())
      return null;
    let e;
    if (this.iteratePath)
      e = this._pattern.nextValue();
    else {
      this._originalEndings === ot.WithFullGap && this.isClosed ? this._endings = ot.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let r, i = !0;
      switch (this._endings) {
        case ot.NoConstraint:
          r = -this._position, r = this._adjustPosition(r), i = !1;
          break;
        case ot.WithHalfGap:
        default:
          r = -this._pattern.lastValue() / 2;
          break;
        case ot.WithFullGap:
          r = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case ot.WithMarkers:
          r = 0;
          break;
        case ot.Custom:
          r = -this._position, r = this._adjustPosition(r), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t, this._pattern, i))
        return null;
      this._pattern.reset();
      let n = 0;
      for (; r > n; )
        r -= n, n = this._pattern.nextValue();
      n -= r, e = n, this.iteratePath = !0;
    }
    const s = new ht();
    return this._geometryWalker.nextPointAndAngle(e, s) ? this._endings === ot.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = !1, null) : this._endings === ot.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = !1, this.isClosed) ? null : (this.internalPlacement.setTranslate(s.pt[0] - this._offset * s.sa, s.pt[1] + this._offset * s.ca), this._angleToLine && this.internalPlacement.setRotateCS(s.ca, s.sa), this.internalPlacement) : (this.iteratePath = !1, null);
  }
  _adjustPosition(t) {
    let e = t / this._pattern.length();
    return e -= Math.floor(e), e * this._pattern.length();
  }
}, Ni = class ne {
  static local() {
    return ne.instance === null && (ne.instance = new ne()), ne.instance;
  }
  execute(t, e, s, r, i) {
    return new gn(t, e, s);
  }
};
Ni.instance = null;
let gn = class extends de {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new ft(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._type = e.extremityPlacement, this._position = e.offsetAlongLine !== void 0 ? e.offsetAlongLine * s : 0, this._beginProcessed = !1;
  }
  processPath(t) {
    let e;
    switch (this._type) {
      case xt.Both:
      default:
        this._beginProcessed ? (e = this._atExtremities(t, this._position, !1), this._beginProcessed = !1, this.iteratePath = !1) : (e = this._atExtremities(t, this._position, !0), this._beginProcessed = !0, this.iteratePath = !0);
        break;
      case xt.JustBegin:
        e = this._atExtremities(t, this._position, !0);
        break;
      case xt.JustEnd:
        e = this._atExtremities(t, this._position, !1);
      case xt.None:
    }
    return e;
  }
  _atExtremities(t, e, s) {
    if (s || t.seekPathEnd(), s ? t.nextPoint() : t.prevPoint()) {
      let r = 0, [i, n] = [0, 0], [o, a] = [t.x, t.y];
      for (; s ? t.nextPoint() : t.prevPoint(); ) {
        i = o, n = a, o = t.x, a = t.y;
        const h = this._curveHelper.getLength(i, n, o, a);
        if (r + h > e) {
          const c = (e - r) / h, [u, m] = this._curveHelper.getAngleCS(i, n, o, a, c), f = this._curveHelper.getCoord2D(i, n, o, a, c);
          return this.internalPlacement.setTranslate(f[0] - this._offset * m, f[1] + this._offset * u), this._angleToLine && this.internalPlacement.setRotateCS(-u, -m), this.internalPlacement;
        }
        r += h;
      }
    }
    return null;
  }
}, Ai = class oe {
  static local() {
    return oe.instance === null && (oe.instance = new oe()), oe.instance;
  }
  execute(t, e, s, r, i) {
    return new yn(t, e, s);
  }
};
Ai.instance = null;
let yn = class extends de {
  constructor(t, e, s) {
    super(t), this._walker = new Ve(), this._walker.updateTolerance(s), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._beginGap = e.beginPosition !== void 0 ? e.beginPosition * s : 0, this._endGap = e.endPosition !== void 0 ? e.endPosition * s : 0, this._flipFirst = e.flipFirst === void 0 || e.flipFirst, this._pattern = new Ye(), this._pattern.init(e.positionArray, !1, !1), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0;
  }
  processPath(t) {
    if (this._pattern.isEmpty())
      return null;
    let e;
    if (this.iteratePath) {
      const o = this._pattern.nextValue() * this._subPathLen, a = this._beginGap + o;
      e = a - this._prevPos, this._prevPos = a;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0, this._subPathLen = t.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0)
        return this.iteratePath = !1, null;
      if (!this._walker.init(t, this._pattern, !1))
        return null;
      this._pattern.reset();
      const o = this._pattern.nextValue() * this._subPathLen, a = this._beginGap + o;
      e = a - this._prevPos, this._prevPos = a, this.iteratePath = !0;
    }
    const s = new ht();
    if (!this._walker.nextPointAndAngle(e, s, Pt.END))
      return this.iteratePath = !1, null;
    this.internalPlacement.setTranslate(s.pt[0] - this._offset * s.sa, s.pt[1] + this._offset * s.ca);
    const r = this._isFirst && this._flipFirst;
    let i, n;
    return this._angleToLine ? (i = s.ca, n = s.sa) : (i = 1, n = 0), r && (i = -i, n = -n), this.internalPlacement.setRotateCS(i, n), this._isFirst = !1, this._posCount--, this._posCount === 0 && (this.iteratePath = !1), this.internalPlacement;
  }
};
const gt = 512, Pn = 10, K = 24, Ge = 1e-6;
let Fi = class ae {
  static local() {
    return ae.instance === null && (ae.instance = new ae()), ae.instance;
  }
  execute(t, e, s, r, i) {
    return new xn(t, e, s, r, i);
  }
};
Fi.instance = null;
let xn = class St {
  constructor(t, e, s, r, i) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = !1, this._verticalSubdivision = !0, this._stepX = Math.abs(e.stepX ?? 16) * s, this._stepY = Math.abs(e.stepY ?? 16) * s, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, this._stepX !== 0 && this._stepY !== 0) {
      if (this._gridType = e.gridType ?? Je.Fixed, this._gridType === Je.Random) {
        const n = e.seed ?? 13, o = 1;
        this._randomLCG = new si(n * o), this._randomness = (e.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = !1, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = e.gridAngle ?? 0, this._shiftOddRows = e.shiftOddRows ?? !1, this._offsetX = (e.offsetX ?? 0) * s, this._offsetY = (e.offsetY ?? 0) * s, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX)
          if (this._offsetX < 0)
            for (; this._offsetX < -0.5 * this._stepX; )
              this._offsetX += this._stepX;
          else
            for (; this._offsetX >= 0.5 * this._stepX; )
              this._offsetX -= this._stepX;
        if (this._stepY)
          if (this._offsetY < 0)
            for (; this._offsetY < -0.5 * this._stepY; )
              this._offsetY += this._stepY;
          else
            for (; this._offsetY >= 0.5 * this._stepY; )
              this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, r != null) {
        const [n, o, a, h] = r.split("/"), c = parseFloat(n), u = parseFloat(o), m = parseFloat(a), f = parseFloat(h);
        this._graphicOriginX = -(f * 2 ** c + m) * gt, this._graphicOriginY = u * gt, this._testInsidePolygon = !0;
      }
      this._internalPlacement = new Et(), this._calculateMinMax(t), this._geometryCursor = t;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!St._randValues) {
      St._randValues = [];
      for (let t = 0; t < K; t++)
        for (let e = 0; e < K; e++)
          St._randValues.push(this._randomLCG.getFloat()), St._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t) {
    let e, s, r, i, n, o, a, h, c, u, m, f, _, p;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, a = h = _ = m = Number.MAX_VALUE, c = u = p = f = -Number.MAX_VALUE;
    const d = this._cosAngle !== 1;
    for (t.reset(); t.nextPath(); )
      for (; t.nextPoint(); )
        o = t.x, n = t.y, e = o - this._graphicOriginX - this._offsetX, s = n - this._graphicOriginY - this._offsetY, d ? (r = this._cosAngle * e - this._sinAngle * s, i = this._sinAngle * e + this._cosAngle * s) : (r = e, i = s), a = Math.min(a, r), c = Math.max(c, r), h = Math.min(h, i), u = Math.max(u, i), m = Math.min(m, n), f = Math.max(f, n), _ = Math.min(_, o), p = Math.max(p, o);
    m = m !== Number.MAX_VALUE ? m : -gt - this._stepY, f = f !== -Number.MAX_VALUE ? f : this._stepY, _ = _ !== Number.MAX_VALUE ? _ : -this._stepX, p = p !== -Number.MAX_VALUE ? p : gt + this._stepX;
    const g = f - m, y = p - _;
    if (this._verticalSubdivision = g >= y, this._polygonMin = this._verticalSubdivision ? m : _, this._testInsidePolygon) {
      let x = 0 - this._graphicOriginX - this._offsetX - this._stepX, P = gt - this._graphicOriginX - this._offsetX + this._stepX, M = -gt - this._graphicOriginY - this._offsetY - this._stepY, S = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (d) {
        const v = [[x, M], [x, S], [P, M], [P, S]];
        x = M = Number.MAX_VALUE, P = S = -Number.MAX_VALUE;
        for (const C of v) {
          const I = this._cosAngle * C[0] - this._sinAngle * C[1], w = this._sinAngle * C[0] + this._cosAngle * C[1];
          x = Math.min(x, I), P = Math.max(P, I), M = Math.min(M, w), S = Math.max(S, w);
        }
      }
      a = a !== Number.MAX_VALUE ? Math.max(a, x) : x, h = h !== Number.MAX_VALUE ? Math.max(h, M) : M, c = c !== -Number.MAX_VALUE ? Math.min(c, P) : P, u = u !== -Number.MAX_VALUE ? Math.min(u, S) : S;
    }
    this._xMin = Math.round(a / this._stepX), this._xMax = Math.round(c / this._stepX), this._yMin = Math.round(h / this._stepY), this._yMax = Math.round(u / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t, _, p, m, f);
  }
  _buildAccelerationMap(t, e, s, r, i) {
    t.reset();
    const n = /* @__PURE__ */ new Map(), o = this._verticalSubdivision, a = o ? i - r : s - e;
    let h = Math.ceil(a / Pn);
    if (h <= 1)
      return;
    const c = Math.floor(a / h);
    let u, m, f, _, p, d, g, y, x, P, M;
    for (h++, this._delta = c, o ? (x = -gt - this._stepY, P = this._stepY, M = r) : (x = -this._stepX, P = gt + this._stepX, M = e); t.nextPath(); )
      if (!(t.numPoints < 2) && t.nextPoint())
        for (u = t.x, m = t.y; t.nextPoint(); u = f, m = _) {
          if (f = t.x, _ = t.y, o) {
            if (m === _ || m < x && _ < x || m > P && _ > P)
              continue;
            p = Math.min(m, _), d = Math.max(m, _);
          } else {
            if (u === f || u < x && f < x || u > P && f > P)
              continue;
            p = Math.min(u, f), d = Math.max(u, f);
          }
          for (; p < d; )
            g = Math.floor((p - M) / c), Hs(g, u, m, f, _, n), p += c;
          y = Math.floor((d - M) / c), y > g && Hs(y, u, m, f, _, n);
        }
    this._accelerationMap = n;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax)
          return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t += 0.5 * this._stepX);
      const e = this._currentY * this._stepY + this._offsetY;
      let s, r;
      if (this._currentX++, this._gridType === Je.Random) {
        const i = (this._currentX % K + K) % K, n = (this._currentY % K + K) % K;
        s = this._graphicOriginX + t + this._stepX * this._randomness * (0.5 - St._randValues[n * K + i]) * 2 / 3, r = this._graphicOriginY + e + this._stepY * this._randomness * (0.5 - St._randValues[n * K + i + 1]) * 2 / 3;
      } else
        s = this._graphicOriginX + this._cosAngle * t + this._sinAngle * e, r = this._graphicOriginY - this._sinAngle * t + this._cosAngle * e;
      if (!this._testInsidePolygon || this._isInsidePolygon(s, r, this._geometryCursor))
        return this._internalPlacement.setTranslate(s, r), this._internalPlacement;
    }
  }
  _isInsidePolygon(t, e, s) {
    if (this._accelerationMap == null)
      return Mn(t, e, s);
    t += Ge, e += Ge;
    const r = this._verticalSubdivision, i = r ? e : t, n = Math.floor((i - this._polygonMin) / this._delta), o = this._accelerationMap.get(n);
    if (!o)
      return !1;
    let a, h, c, u = 0;
    for (const m of o) {
      if (a = m[0], h = m[1], r) {
        if (a[1] > e == h[1] > e)
          continue;
        c = (h[0] - a[0]) * (e - a[1]) - (h[1] - a[1]) * (t - a[0]);
      } else {
        if (a[0] > t == h[0] > t)
          continue;
        c = (h[1] - a[1]) * (t - a[0]) - (h[0] - a[0]) * (e - a[1]);
      }
      c > 0 ? u++ : u--;
    }
    return u !== 0;
  }
};
function Mn(l, t, e) {
  let s, r, i, n, o = 0;
  for (l += Ge, t += Ge, e.reset(); e.nextPath(); )
    if (e.nextPoint())
      for (s = e.x, r = e.y; e.nextPoint(); s = i, r = n)
        i = e.x, n = e.y, r > t != n > t && ((i - s) * (t - r) - (n - r) * (l - s) > 0 ? o++ : o--);
  return o !== 0;
}
function Hs(l, t, e, s, r, i) {
  let n = i.get(l);
  n || (n = [], i.set(l, n)), n.push([[t, e], [s, r]]);
}
const bn = 1e-3;
let Ei = class he {
  static local() {
    return he.instance === null && (he.instance = new he()), he.instance;
  }
  execute(t, e, s, r, i) {
    return new Sn(t, e, s);
  }
};
Ei.instance = null;
let Sn = class extends de {
  constructor(t, e, s) {
    super(t), this._curveHelper = new ft(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._relativeTo = e.relativeTo, this._position = e.startPointOffset !== void 0 ? e.startPointOffset * s : 0, this._epsilon = bn * s;
  }
  processPath(t) {
    const e = this._position;
    if (this._relativeTo === Xt.SegmentMidpoint) {
      if (this.iteratePath || (this.iteratePath = !0), t.nextPoint()) {
        let [r, i] = [t.x, t.y], [n, o] = [0, 0];
        for (; t.nextPoint(); ) {
          n = t.x, o = t.y;
          const a = this._curveHelper.getLength(r, i, n, o);
          if (a < this._epsilon) {
            r = n, i = o;
            continue;
          }
          const h = 0.5 + this._position / a, [c, u] = this._curveHelper.getAngleCS(r, i, n, o, h), m = this._curveHelper.getCoord2D(r, i, n, o, h);
          return this.internalPlacement.setTranslate(m[0] - this._offset * u, m[1] + this._offset * c), this._angleToLine && this.internalPlacement.setRotateCS(c, u), this.internalPlacement;
        }
      }
      return this.iteratePath = !1, null;
    }
    const s = this._relativeTo === Xt.LineEnd;
    return this.onLine(t, e, s);
  }
  onLine(t, e, s) {
    let r, i = !1;
    switch (this._relativeTo) {
      case Xt.LineMiddle:
      default:
        t.seekPathStart(), r = t.pathLength() / 2 + e;
        break;
      case Xt.LineBeginning:
        r = e;
        break;
      case Xt.LineEnd:
        r = e, i = !0;
    }
    s ? t.seekPathEnd() : t.seekPathStart();
    let n = 0;
    if (s ? t.prevPoint() : t.nextPoint()) {
      let [o, a] = [t.x, t.y], [h, c] = [0, 0];
      for (; s ? t.prevPoint() : t.nextPoint(); ) {
        h = t.x, c = t.y;
        const u = this._curveHelper.getLength(o, a, h, c);
        if (n + u > r) {
          const m = (r - n) / u, [f, _] = this._curveHelper.getAngleCS(o, a, h, c, m), p = this._curveHelper.getCoord2D(o, a, h, c, m), d = i ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(p[0] - d * _, p[1] + d * f), this._angleToLine && (i ? this.internalPlacement.setRotateCS(-f, -_) : this.internalPlacement.setRotateCS(f, _)), this.internalPlacement;
        }
        o = h, a = c, n += u;
      }
    }
    return null;
  }
};
const Cn = 1e-15;
let Gi = class le {
  static local() {
    return le.instance === null && (le.instance = new le()), le.instance;
  }
  execute(t, e, s, r, i) {
    return new wn(t, e, s);
  }
};
Gi.instance = null;
let wn = class extends de {
  constructor(t, e, s) {
    super(t), this._curveHelper = new ft(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._endPoints = e.placeOnEndPoints === void 0 || e.placeOnEndPoints, this._controlPoints = e.placeOnControlPoints === void 0 || e.placeOnControlPoints, this._regularVertices = e.placeOnRegularVertices === void 0 || e.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t) {
    if (this.iteratePath || (this._preparePath(t), this.iteratePath = !0), this._tagIterator >= this._tags.length)
      return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = !1, null;
    const e = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e[2]);
    let s = e[0], r = e[1];
    if (this._offset !== 0) {
      const i = Math.cos(e[2]), n = Math.sin(e[2]);
      s -= this._offset * n, r += this._offset * i;
    }
    return this.internalPlacement.setTranslate(s, r), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t) {
    this._tags.length = 0, this._tagIterator = 0, t.seekPathStart();
    const e = t.isClosed();
    let s = 0, r = !1, i = 0, n = 0;
    if (t.seekPathStart(), t.nextPoint()) {
      let o = t.x, a = t.y, h = t.getControlPoint(), c = !0, u = t.nextPoint();
      for (; u; ) {
        const m = t.x, f = t.y, _ = t.getControlPoint();
        (this._angleToLine || this._offset !== 0) && (i = this._curveHelper.getAngle(o, a, m, f, 0)), c ? (c = !1, e ? (s = i, r = h) : (this._endPoints || this._controlPoints && h) && this._tags.push([o, a, i])) : h ? this._controlPoints && this._tags.push([o, a, Ie(n, i)]) : this._regularVertices && this._tags.push([o, a, Ie(n, i)]), (this._angleToLine || this._offset !== 0) && (n = this._curveHelper.getAngle(o, a, m, f, 1)), u = t.nextPoint(), u || (e ? _ || r ? this._controlPoints && this._tags.push([m, f, Ie(n, s)]) : this._regularVertices && this._tags.push([m, f, Ie(n, s)]) : (this._endPoints || this._controlPoints && _) && this._tags.push([m, f, n])), o = m, a = f, h = _;
      }
    }
    this._tagIterator = 0;
  }
};
function Ie(l, t) {
  const e = Math.PI;
  for (; Math.abs(t - l) > e + 2 * Cn; )
    t - l > e ? t -= 2 * e : t += 2 * e;
  return (l + t) / 2;
}
let vn = class {
  constructor(t = kn) {
    this._data = [], this._compare = t;
  }
  get size() {
    return this._data.length;
  }
  enqueue(t) {
    if (t == null)
      return;
    const { _data: e, _compare: s } = this;
    e.push(t);
    let r = e.length - 1 >>> 0;
    const i = e[r];
    for (; r > 0; ) {
      const n = r - 1 >> 1, o = e[n];
      if (!(s(o, i) <= 0))
        break;
      e[n] = i, e[r] = o, r = n;
    }
  }
  dequeue() {
    const { _data: t, _compare: e } = this, s = t[0], r = t.pop();
    if (t.length === 0)
      return s;
    t[0] = r;
    let i = 0;
    const n = t.length, o = t[0];
    let a, h, c = null;
    for (; ; ) {
      const u = 2 * i + 1, m = 2 * i + 2;
      if (c = null, u < n && (a = t[u], e(a, o) > 0 && (c = u)), m < n && (h = t[m], (c === null && e(h, o) <= 0 || c !== null && e(h, a) <= 0) && (c = m)), c === null)
        break;
      t[i] = t[c], t[c] = o, i = c;
    }
    return s;
  }
};
const kn = (l, t) => l < t ? -1 : l > t ? 1 : 0, In = 100 * 222045e-21;
function Ln(l) {
  return zn({ rings: pe(l) });
}
function zn(l) {
  const { rings: t } = l;
  if (!t || t.length === 0)
    return null;
  const e = Ms(lt(), l);
  if (!e)
    return null;
  const s = 4 * (Math.abs(e[0]) + Math.abs(e[2]) + Math.abs(e[1]) + Math.abs(e[3]) + 1) * In;
  let r = 0, i = 0;
  for (let w = 0; w < t.length; w++) {
    const z = er(t[w]);
    z > i && (i = z, r = w);
  }
  if (Math.abs(i) <= 2 * s * s) {
    const w = Ls(lt(), t[r]);
    return [(w[0] + w[2]) / 2, (w[1] + w[3]) / 2];
  }
  const n = sr(t[r], !1, lt());
  if (n === null)
    return null;
  if (t.length === 1 && t[0].length < 4)
    return n;
  const o = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], a = [NaN, NaN, NaN, NaN], h = [NaN, NaN, NaN, NaN];
  let c = !1, u = Dt(n, l, !0);
  u.distance === 0 && (c = !0, o[0][0] = n[0], o[0][1] = n[1], u = Dt(n, l, !1)), a[0] = u.distance, h[0] = 0;
  const m = [NaN, NaN];
  let f = !1, _ = 0.25, p = -1;
  const d = Ls(lt(), t[r]);
  let g = NaN;
  do
    if (g = NaN, o[1] = Qe(l, ts(d[0], d[2], _), s, e), isNaN(o[1][0]) || isNaN(o[1][1]) || (u = Dt(o[1], l, !1), g = u.distance), !isNaN(g) && g > s && Ae(o[1], l))
      f = !0, a[1] = g, h[1] = Ct(o[1], n);
    else if (!isNaN(g) && g > p && (p = g, m[0] = o[1][0], m[1] = o[1][1]), _ -= 0.01, _ < 0.1) {
      if (!(p >= 0))
        break;
      f = !0, a[1] = p, o[1][0] = m[0], o[1][1] = m[1], h[1] = Ct(o[1], n);
    }
  while (!f);
  f = !1, _ = 0.5, p = -1;
  let y = 0.01, x = 1;
  do
    if (g = NaN, o[2] = Qe(l, ts(d[0], d[2], _), s, e), isNaN(o[2][0]) || isNaN(o[2][1]) || (u = Dt(o[2], l, !1), g = u.distance), !isNaN(g) && g > s && Ae(o[2], l))
      f = !0, a[2] = g, h[2] = Ct(o[2], n);
    else if (!isNaN(g) && g > p)
      p = g, m[0] = o[2][0], m[1] = o[2][1];
    else if (g > p && (p = g, m[0] = o[2][0], m[1] = o[2][1]), _ = 0.5 + y * x, y += 0.01, x *= -1, _ < 0.3 || _ > 0.7) {
      if (!(p >= 0))
        break;
      f = !0, a[2] = p, o[2][0] = m[0], o[2][1] = m[1], h[2] = Ct(o[2], n);
    }
  while (!f);
  f = !1, _ = 0.75, p = -1;
  do
    if (g = NaN, o[3] = Qe(l, ts(d[0], d[2], _), s, e), isNaN(o[3][0]) || isNaN(o[3][1]) || (u = Dt(o[3], l, !1), g = u.distance), !isNaN(g) && g > s && Ae(o[3], l))
      f = !0, a[3] = g, h[3] = Ct(o[3], n);
    else if (g > p && (p = g, m[0] = o[3][0], m[1] = o[3][1]), _ += 0.01, _ > 0.9) {
      if (!(p >= 0))
        break;
      f = !0, a[3] = p, o[3][0] = m[0], o[3][1] = m[1], h[3] = Ct(o[3], n);
    }
  while (!f);
  const P = [0, 1, 2, 3], M = c ? 0 : 1;
  let S;
  for (let w = M; w < 4; w++)
    for (let z = M; z < 3; z++) {
      const F = h[z], O = h[z + 1];
      $n(F, O) > 0 && (S = P[z], P[z] = P[z + 1], P[z + 1] = S, h[z] = O, h[z + 1] = F);
    }
  let v = M, C = 0, I = 0;
  for (let w = M; w < 4; w++) {
    switch (w) {
      case 0:
        I = 2 * a[P[w]];
        break;
      case 1:
        I = 1.66666666 * a[P[w]];
        break;
      case 2:
        I = 1.33333333 * a[P[w]];
        break;
      case 3:
        I = a[P[w]];
    }
    I > C && (C = I, v = P[w]);
  }
  return o[v];
}
function Ae(l, t) {
  const { rings: e } = t;
  let s = 0;
  for (const r of e) {
    const i = r.length;
    for (let n = 1; n < i; ++n) {
      const o = r[n - 1], a = r[n];
      o[1] > l[1] != a[1] > l[1] && ((a[0] - o[0]) * (l[1] - o[1]) - (a[1] - o[1]) * (l[0] - o[0]) > 0 ? s++ : s--);
    }
  }
  return s !== 0;
}
function Dt(l, t, e) {
  if (e && Ae(l, t))
    return { coord: l, distance: 0 };
  let s = 1 / 0, r = 0, i = 0;
  const n = [0, 0], { rings: o } = t;
  for (const a of o)
    if (!(a.length < 2))
      for (let h = 0; h < a.length - 1; h++) {
        ir(n, l, a, h);
        const c = Ct(l, n);
        c < s && (s = c, r = n[0], i = n[1]);
      }
  return { coord: [r, i], distance: Math.sqrt(s) };
}
function Qe(l, t, e, s) {
  const r = [t, 0];
  let i = 1 / 0, n = 1 / 0, o = !1, a = !1;
  const h = [[t, s[1] - 1], [t, s[3] + 1]], c = [0, 0], u = [0, 0], m = [0, 0], f = [[0, 0], [0, 0]], _ = lt(), { rings: p } = l;
  for (const d of p)
    if (!(d.length < 2))
      for (let g = 1; g < d.length; g++) {
        if (f[0][0] = d[g - 1][0], f[0][1] = d[g - 1][1], f[1][0] = d[g][0], f[1][1] = d[g][1], On(_, f) === null || (u[0] = h[0][0], u[1] = h[0][1], m[0] = h[1][0], m[1] = h[1][1], Tn(_, u, m) === 0) || !rr(h[0], h[1], f[0], f[1], c))
          continue;
        const y = c[1];
        i > n ? y < i && (i = y, o = !0) : y < n && (n = y, a = !0);
      }
  return o && a ? r[1] = (i + n) / 2 : r[0] = r[1] = NaN, r;
}
function On(l, t) {
  if (t.length < 2)
    return null;
  l || (l = lt());
  const [e, s] = t[0], [r, i] = t[1];
  return l[0] = Math.min(e, r), l[1] = Math.min(s, i), l[2] = Math.max(e, r), l[3] = Math.max(s, i), l;
}
const Le = 1, ze = 4, Ys = 3, Vs = 12;
function Tn(l, t, e) {
  let s = Q(t, l), r = Q(e, l);
  const i = l[0], n = l[1], o = l[2], a = l[3];
  if (s & r)
    return 0;
  if (!(s | r))
    return 4;
  const h = (s ? 1 : 0) | (r ? 2 : 0);
  do {
    const c = e[0] - t[0], u = e[1] - t[1];
    if (c > u)
      s & Ys ? (s & Le ? (t[1] += u * (i - t[0]) / c, t[0] = i) : (t[1] += u * (o - t[0]) / c, t[0] = o), s = Q(t, l)) : r & Ys ? (r & Le ? (e[1] += u * (i - e[0]) / c, e[0] = i) : (e[1] += u * (o - e[0]) / c, e[0] = o), r = Q(e, l)) : s ? (s & ze ? (t[0] += c * (n - t[1]) / u, t[1] = n) : (t[0] += c * (a - t[1]) / u, t[1] = a), s = Q(t, l)) : (r & ze ? (e[0] += c * (n - e[1]) / u, e[1] = n) : (e[0] += c * (a - e[1]) / u, e[1] = a), r = Q(e, l));
    else if (s & Vs ? (s & ze ? (t[0] += c * (n - t[1]) / u, t[1] = n) : (t[0] += c * (a - t[1]) / u, t[1] = a), s = Q(t, l)) : r & Vs ? (r & ze ? (e[0] += c * (n - e[1]) / u, e[1] = n) : (e[0] += c * (a - e[1]) / u, e[1] = a), r = Q(e, l)) : s ? (s & Le ? (t[1] += u * (i - t[0]) / c, t[0] = i) : (t[1] += u * (o - t[0]) / c, t[0] = o), s = Q(t, l)) : (r & Le ? (e[1] += u * (i - e[0]) / c, e[0] = i) : (e[1] += u * (o - e[0]) / c, e[0] = o), r = Q(e, l)), s & r)
      return 0;
  } while (s | r);
  return h;
}
function Q(l, t) {
  return (l[0] < t[0] ? 1 : 0) | (l[0] > t[2] ? 1 : 0) << 1 | (l[1] < t[1] ? 1 : 0) << 2 | (l[1] > t[3] ? 1 : 0) << 3;
}
function ts(l, t, e) {
  return l + (t - l) * e;
}
function Ct(l, t) {
  return (l[0] - t[0]) * (l[0] - t[0]) + (l[1] - t[1]) * (l[1] - t[1]);
}
function $n(l, t) {
  if (l < t)
    return -1;
  if (l > t)
    return 1;
  if (l === t)
    return 0;
  const e = isNaN(l), s = isNaN(t);
  return e < s ? -1 : e > s ? 1 : 0;
}
let $t = class {
  constructor(t, e, s, r) {
    this.x = t, this.y = e, this.cellSize = s, this.distancefromCellCenter = ar(t, e, r), this.maxDistanceToPolygon = this.distancefromCellCenter + this.cellSize * Math.SQRT2;
  }
};
const Nn = 1, An = 100;
function Fn(l) {
  if (!l.nextPath() || !l.numPoints)
    return null;
  const t = nr(l), e = t[2] - t[0], s = t[3] - t[1];
  if (e === 0 || s === 0)
    return [t[0] + e / 2, t[1] + s / 2];
  const r = Math.max(Math.min(e, s) / An, Nn), i = new vn((f, _) => _.maxDistanceToPolygon - f.maxDistanceToPolygon), n = Math.min(e, s);
  let o = n / 2, a = 0, h = 0;
  for (a = t[0]; a < t[2]; a += n)
    for (h = t[1]; h < t[3]; h += n)
      i.enqueue(new $t(a + o, h + o, o, l));
  const c = or(l);
  if (c === null)
    return null;
  let u, m = new $t(c[0], c[1], 0, l);
  for (; i.size > 0; )
    u = i.dequeue(), u.distancefromCellCenter > m.distancefromCellCenter && (m = u), u.maxDistanceToPolygon - m.distancefromCellCenter <= r || (o = u.cellSize / 2, i.enqueue(new $t(u.x - o, u.y - o, o, l)), i.enqueue(new $t(u.x + o, u.y - o, o, l)), i.enqueue(new $t(u.x - o, u.y + o, o, l)), i.enqueue(new $t(u.x + o, u.y + o, o, l)));
  return [m.x, m.y];
}
let Ri = class ce {
  static local() {
    return ce.instance === null && (ce.instance = new ce()), ce.instance;
  }
  execute(t, e, s, r, i) {
    return new En(t, e, s);
  }
};
Ri.instance = null;
let En = class {
  constructor(t, e, s) {
    this._geometryCursor = t, this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0, this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0, this._method = e.method !== void 0 ? e.method : Me.OnPolygon, this._internalPlacement = new Et();
  }
  next() {
    const t = this._geometryCursor;
    return this._geometryCursor = null, t ? this._polygonCenter(t) : null;
  }
  _polygonCenter(t) {
    let e = !1;
    switch (this._method) {
      case Me.CenterOfMass:
        {
          const s = lr(t);
          s && (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY), e = !0);
        }
        break;
      case Me.BoundingBoxCenter:
        {
          const s = xs(t);
          s && (this._internalPlacement.setTranslate((s[2] + s[0]) / 2 + this._offsetX, (s[3] + s[1]) / 2 + this._offsetY), e = !0);
        }
        break;
      case Me.OnPolygon:
      default: {
        let s;
        s = hr("polylabel-placement-enabled") ? Fn(t) : Ln(t), s !== null && (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY), e = !0);
      }
    }
    return e ? this._internalPlacement : null;
  }
};
function ds(l) {
  if (!l)
    return null;
  switch (l.type) {
    case "CIMGeometricEffectAddControlPoints":
      return Pi.local();
    case "CIMGeometricEffectArrow":
      return xi.local();
    case "CIMGeometricEffectBuffer":
      return Mi.local();
    case "CIMGeometricEffectControlMeasureLine":
      return bi.local();
    case "CIMGeometricEffectCut":
      return Si.local();
    case "CIMGeometricEffectDashes":
      return Ci.local();
    case "CIMGeometricEffectDonut":
      return wi.local();
    case "CIMGeometricEffectJog":
      return vi.local();
    case "CIMGeometricEffectMove":
      return ki.local();
    case "CIMGeometricEffectOffset":
      return Ii.local();
    case "CIMGeometricEffectReverse":
      return Li.local();
    case "CIMGeometricEffectRotate":
      return zi.local();
    case "CIMGeometricEffectScale":
      return Oi.local();
    case "CIMGeometricEffectWave":
      return Ti.local();
  }
  return null;
}
function Gn(l) {
  if (!l)
    return null;
  switch (l.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return $i.local();
    case "CIMMarkerPlacementAtExtremities":
      return Ni.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return Ai.local();
    case "CIMMarkerPlacementInsidePolygon":
      return Fi.local();
    case "CIMMarkerPlacementOnLine":
      return Ei.local();
    case "CIMMarkerPlacementOnVertices":
      return Gi.local();
    case "CIMMarkerPlacementPolygonCenter":
      return Ri.local();
  }
  return null;
}
function es(l) {
  const t = l.getFrame(0);
  if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement)
    return t;
  const e = document.createElement("canvas");
  e.width = l.width, e.height = l.height;
  const s = e.getContext("2d");
  return t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0), e;
}
let Xi = class {
  constructor(t = 0, e = 0, s = 0, r = 0) {
    this.x = t, this.y = e, this.width = s, this.height = r;
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t) {
    this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.width = Math.max(this.width, t.width), this.height = Math.max(this.height, t.height);
  }
};
function Rn(l) {
  return `rgb(${l.slice(0, 3).toString()})`;
}
function ss(l) {
  return `rgba(${l.slice(0, 3).toString()},${l[3]})`;
}
let Di = class {
  constructor(t) {
    t && (this._textRasterizationCanvas = t);
  }
  rasterizeText(t, e) {
    var z, F;
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const s = this._textRasterizationCanvas, r = s.getContext("2d");
    this._setFontProperties(r, e), this._parameters = e, this._textLines = t.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const { decoration: i, weight: n } = e.font;
    this._lineThroughWidthOffset = i && i === "line-through" ? 0.1 * this._lineHeight : 0;
    const o = e.backgroundColor != null || e.borderLine != null, a = o ? cr : 0, h = this._computeTextWidth(r, e) + 2 * a, c = this._lineHeight * this._textLines.length + 2 * a;
    if (s.width = h + 2 * this._lineThroughWidthOffset, s.height = c, s.width === 0 || s.height === 0)
      return s.width = s.height = 1, { size: [0, 0], image: new Uint32Array(0), sdf: !1, simplePattern: !1, anchorX: 0, anchorY: 0, canvas: s };
    this._renderedLineHeight = Math.round(this._lineHeight * e.pixelRatio), this._renderedHaloSize = q(e.halo.size) * e.pixelRatio, this._renderedWidth = h * e.pixelRatio, this._renderedHeight = c * e.pixelRatio, this._lineThroughWidthOffset *= e.pixelRatio;
    const u = e.color ?? [0, 0, 0, 0], m = e.halo && e.halo.color ? e.halo.color : [0, 0, 0, 0];
    this._fillStyle = ss(u), this._haloStyle = Rn(m);
    const f = this._renderedLineHeight, _ = this._renderedHaloSize;
    r.save(), r.clearRect(0, 0, s.width, s.height), this._setFontProperties(r, e);
    const p = a * e.pixelRatio, d = Xn(r.textAlign, this._renderedWidth - 2 * p) + _ + p, g = _ + p, y = _ > 0;
    let x = this._lineThroughWidthOffset, P = 0;
    if (o) {
      r.save();
      const O = e.backgroundColor ?? [0, 0, 0, 0], A = ((z = e.borderLine) == null ? void 0 : z.color) ?? [0, 0, 0, 0], U = 2 * q(((F = e.borderLine) == null ? void 0 : F.size) ?? 0);
      r.fillStyle = ss(O), r.strokeStyle = ss(A), r.lineWidth = U, r.fillRect(0, 0, s.width, s.height), r.strokeRect(0, 0, s.width, s.height), r.restore();
    }
    y && this._renderHalo(r, d, g, x, P, e), P += g, x += d;
    for (const O of this._textLines)
      y ? (r.globalCompositeOperation = "destination-out", r.fillStyle = "rgb(0, 0, 0)", r.fillText(O, x, P), r.globalCompositeOperation = "source-over", r.fillStyle = this._fillStyle, r.fillText(O, x, P)) : (r.fillStyle = this._fillStyle, r.fillText(O, x, P)), i && i !== "none" && this._renderDecoration(r, x, P, i, n), P += f;
    r.restore();
    const M = this._renderedWidth + 2 * this._lineThroughWidthOffset, S = this._renderedHeight, v = r.getImageData(0, 0, M, S), C = new Uint8Array(v.data);
    if (e.premultiplyColors) {
      let O;
      for (let A = 0; A < C.length; A += 4)
        O = C[A + 3] / 255, C[A] = C[A] * O, C[A + 1] = C[A + 1] * O, C[A + 2] = C[A + 2] * O;
    }
    let I, w;
    switch (e.horizontalAlignment) {
      case "left":
        I = -0.5;
        break;
      case "right":
        I = 0.5;
        break;
      default:
        I = 0;
    }
    switch (e.verticalAlignment) {
      case "bottom":
        w = -0.5;
        break;
      case "top":
        w = 0.5;
        break;
      default:
        w = 0;
    }
    return { size: [M, S], image: new Uint32Array(C.buffer), sdf: !1, simplePattern: !1, anchorX: I, anchorY: w, canvas: s };
  }
  _renderHalo(t, e, s, r, i, n) {
    const o = this._renderedWidth, a = this._renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = o, this._haloRasterizationCanvas.height = a;
    const h = this._haloRasterizationCanvas, c = h.getContext("2d");
    c.clearRect(0, 0, o, a), this._setFontProperties(c, n);
    const { decoration: u, weight: m } = n.font;
    c.fillStyle = this._haloStyle, c.strokeStyle = this._haloStyle, c.lineJoin = "round", this._renderHaloNative(c, e, s, u, m), t.globalAlpha = this._parameters.halo.color[3], t.drawImage(h, 0, 0, o, a, r, i, o, a), t.globalAlpha = 1;
  }
  _renderHaloNative(t, e, s, r, i) {
    const n = this._renderedLineHeight, o = this._renderedHaloSize;
    for (const a of this._textLines) {
      const h = 2 * o, c = 5, u = 0.1;
      for (let m = 0; m < c; m++) {
        const f = (1 - (c - 1) * u + m * u) * h;
        t.lineWidth = f, t.strokeText(a, e, s), r && r !== "none" && this._renderDecoration(t, e, s, r, i, f);
      }
      s += n;
    }
  }
  _setFontProperties(t, e) {
    const s = Math.max(e.size, 0.5), r = e.font, i = `${r.style} ${r.weight} ${q(s * e.pixelRatio).toFixed(1)}px ${r.family}, sans-serif`;
    let n;
    switch (t.font = i, t.textBaseline = "top", e.horizontalAlignment) {
      case "left":
      default:
        n = "left";
        break;
      case "right":
        n = "right";
        break;
      case "center":
        n = "center";
    }
    t.textAlign = n;
  }
  computeTextSize(t, e) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const s = this._textRasterizationCanvas, r = s.getContext("2d");
    this._setFontProperties(r, e), this._parameters = e, this._textLines = t.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const i = this._computeTextWidth(r, e), n = this._lineHeight * this._textLines.length;
    return s.width = i, s.height = n, [i * e.pixelRatio, n * e.pixelRatio];
  }
  _computeTextWidth(t, e) {
    let s = 0;
    for (const i of this._textLines)
      s = Math.max(s, t.measureText(i).width);
    const r = e.font;
    return (r.style === "italic" || r.style === "oblique" || typeof r.weight == "string" && (r.weight === "bold" || r.weight === "bolder") || typeof r.weight == "number" && r.weight > 600) && (s += 0.3 * t.measureText("w").width), s += 2 * q(this._parameters.halo.size), Math.round(s);
  }
  _computeLineHeight() {
    let t = 1.275 * this._parameters.size;
    const e = this._parameters.font.decoration;
    return e && e === "underline" && (t *= 1.3), Math.round(t + 2 * q(this._parameters.halo.size));
  }
  _renderDecoration(t, e, s, r, i, n) {
    const o = 0.9 * this._lineHeight, a = i === "bold" ? 0.06 : i === "bolder" ? 0.09 : 0.04;
    switch (t.textAlign) {
      case "center":
        e -= this._renderedWidth / 2;
        break;
      case "right":
        e -= this._renderedWidth;
    }
    const h = t.textBaseline;
    if (r === "underline")
      switch (h) {
        case "top":
          s += o;
          break;
        case "middle":
          s += o / 2;
      }
    else if (r === "line-through")
      switch (h) {
        case "top":
          s += o / 1.5;
          break;
        case "middle":
          s += o / 3;
      }
    const c = n ? 1.5 * n : Math.ceil(o * a);
    t.save(), t.beginPath(), t.strokeStyle = t.fillStyle, t.lineWidth = c, t.moveTo(e - this._lineThroughWidthOffset, s), t.lineTo(e + this._renderedWidth + 2 * this._lineThroughWidthOffset, s), t.stroke(), t.restore();
  }
};
function Xn(l, t) {
  return l === "center" ? 0.5 * t : l === "right" ? t : 0;
}
let ue = class gs {
  constructor(t, e, s, r) {
    this.center = ur(t, e), this.centerT = ls(), this.halfWidth = s / 2, this.halfHeight = r / 2, this.width = s, this.height = r;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t) {
    this.center[0] = t;
  }
  set y(t) {
    this.center[1] = t;
  }
  clone() {
    return new gs(this.x, this.y, this.width, this.height);
  }
  serialize(t) {
    return t.writeF32(this.center[0]), t.writeF32(this.center[1]), t.push(this.width), t.push(this.height), t;
  }
  findCollisionDelta(t, e = 4) {
    const s = Math.abs(t.centerT[0] - this.centerT[0]), r = Math.abs(t.centerT[1] - this.centerT[1]), i = (t.halfWidth + this.halfWidth + e) / s, n = (t.halfHeight + this.halfHeight + e) / r, o = Math.min(i, n);
    return Math.log2(o);
  }
  extend(t) {
    const e = Math.min(this.xmin, t.xmin), s = Math.min(this.ymin, t.ymin), r = Math.max(this.xmax, t.xmax) - e, i = Math.max(this.ymax, t.ymax) - s, n = e + r / 2, o = s + i / 2;
    this.width = r, this.height = i, this.halfWidth = r / 2, this.halfHeight = i / 2, this.x = n, this.y = o;
  }
  static deserialize(t) {
    const e = t.readF32(), s = t.readF32(), r = t.readInt32(), i = t.readInt32();
    return new gs(e, s, r, i);
  }
};
const vs = 26, Hi = 4, Dn = vs + Hi, Hn = vs - 6, Bs = 3, G = 8, Yn = Math.PI / 180, yt = 8, Vn = 1.5;
let Yi = class {
  constructor(t, e, s, r) {
    this._rotationT = fe(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const i = s.rect, n = new Float32Array(8);
    t *= r, e *= r;
    const o = s.code ? i.width * r : s.metrics.width, a = s.code ? i.height * r : s.metrics.height;
    this.width = o, this.height = a, n[0] = t, n[1] = e, n[2] = t + o, n[3] = e, n[4] = t, n[5] = e + a, n[6] = t + o, n[7] = e + a, this._data = n, this._setTextureCoords(i), this._scale = r, this._mosaic = s, this.x = t, this.y = e, this.maxOffset = Math.max(t + o, e + a);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t) {
    this._angle = t, ii(this._rotationT, -t), this._setOffsets(this._data);
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(this._data), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t, width: e } = this._mosaic.metrics, s = e * this._scale, r = Math.abs(t) * this._scale, i = new Float32Array(8);
      i[0] = this.x, i[1] = this.y, i[2] = this.x + s, i[3] = this.y, i[4] = this.x, i[5] = this.y + r, i[6] = this.x + s, i[7] = this.y + r;
      const n = cs(fe(), this._rotationT, this._transform);
      zs(i, i, n);
      let o = 1 / 0, a = 1 / 0, h = 0, c = 0;
      for (let p = 0; p < 4; p++) {
        const d = i[2 * p], g = i[2 * p + 1];
        o = Math.min(o, d), a = Math.min(a, g), h = Math.max(h, d), c = Math.max(c, g);
      }
      const u = h - o, m = c - a, f = o + u / 2, _ = a + m / 2;
      this._bounds = new ue(f, _, u, m);
    }
    return this._bounds;
  }
  setTransform(t) {
    this._transform = t, this._offsets = null;
  }
  _setOffsets(t) {
    this._offsets || (this._offsets = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 });
    const e = this._offsets, s = new Float32Array(8), r = cs(fe(), this._rotationT, this._transform);
    zs(s, t, r), e.upperLeft = B(s[0] * G, s[1] * G), e.upperRight = B(s[2] * G, s[3] * G), e.lowerLeft = B(s[4] * G, s[5] * G), e.lowerRight = B(s[6] * G, s[7] * G);
  }
  _setTextureCoords({ x: t, y: e, width: s, height: r }) {
    this._texcoords = { upperLeft: B(t, e), upperRight: B(t + s, e), lowerLeft: B(t, e + r), lowerRight: B(t + s, e + r) };
  }
};
const Bn = (l, t) => ({ code: 0, page: 0, sdf: !0, rect: new Gr(0, 0, 11, 8), textureBinding: t, metrics: { advance: 0, height: 4, width: l, left: 0, top: 0 } });
function Ht(l, t) {
  return l.forEach((e) => ri(e, e, t)), { upperLeft: B(G * l[0][0], G * l[0][1]), upperRight: B(G * l[1][0], G * l[1][1]), lowerLeft: B(G * l[2][0], G * l[2][1]), lowerRight: B(G * l[3][0], G * l[3][1]) };
}
let Wn = class {
  constructor(t, e, s) {
    this._rotation = 0, this._decorate(t, e, s), this.glyphs = t, this.bounds = this._createBounds(t), this.isMultiline = e.length > 1, this._hasRotation = s.angle !== 0, this._transform = this._createGlyphTransform(this.bounds, s), this._borderLineSize = s.borderLineSize, (s.borderLineSize || s.hasBackground) && ([this.bounds, this.background] = this.shapeBackground(this._transform));
    for (const r of t)
      r.setTransform(this._transform);
  }
  setRotation(t) {
    if (t === 0 && this._rotation === 0)
      return;
    this._rotation = t;
    const e = this._transform, s = ii(fe(), t);
    cs(e, s, e);
    for (const r of this.glyphs)
      r.setTransform(this._transform);
  }
  _decorate(t, e, s) {
    if (!s.decoration || s.decoration === "none" || !t.length)
      return;
    const r = s.scale, i = s.decoration === "underline" ? Dn : Hn, n = t[0].textureBinding;
    for (const o of e) {
      const a = o.startX * r, h = o.startY * r, c = (o.width + o.glyphWidthEnd) * r;
      t.push(new Yi(a, h + i * r, Bn(c, n), 1));
    }
  }
  shapeBackground(t) {
    const e = q(this._borderLineSize || 0), s = (Vn + e) / 2, r = this._borderLineSize ? s : 0, { xmin: i, ymin: n, xmax: o, ymax: a, x: h, y: c, width: u, height: m } = this.bounds, f = [i - yt, n - yt], _ = [o + yt, n - yt], p = [i - yt, a + yt], d = [o + yt, a + yt], g = Ht([[f[0] - s, f[1] - s], [_[0] + s, _[1] - s], [f[0] + r, f[1] + r], [_[0] - r, _[1] + r]], t), y = Ht([[p[0] + r, p[1] - r], [d[0] - r, d[1] - r], [p[0] - s, p[1] + s], [d[0] + s, d[1] + s]], t), x = Ht([[f[0] - s, f[1] - s], [f[0] + r, f[1] + r], [p[0] - s, p[1] + s], [p[0] + r, p[1] - r]], t), P = Ht([[_[0] - r, _[1] + r], [_[0] + s, _[1] - s], [d[0] - r, d[1] - r], [d[0] + s, d[1] + s]], t), M = { main: Ht([f, _, p, d], t), top: g, bot: y, left: x, right: P };
    return [new ue(h, c, u + 2 * s, m + 2 * s), M];
  }
  get boundsT() {
    const t = this.bounds, e = ge(ls(), t.x, t.y);
    if (ri(e, e, this._transform), this._hasRotation) {
      const s = Math.max(t.width, t.height);
      return new ue(e[0], e[1], s, s);
    }
    return new ue(e[0], e[1], t.width, t.height);
  }
  _createBounds(t) {
    let e = 1 / 0, s = 1 / 0, r = 0, i = 0;
    for (const a of t)
      e = Math.min(e, a.xTopLeft), s = Math.min(s, a.yTopLeft), r = Math.max(r, a.xBottomRight), i = Math.max(i, a.yBottomRight);
    const n = r - e, o = i - s;
    return new ue(e + n / 2, s + o / 2, n, o);
  }
  _createGlyphTransform(t, e) {
    const s = Yn * e.angle, r = fe(), i = ls();
    return We(r, r, ge(i, e.xOffset, -e.yOffset)), e.isCIM ? Os(r, r, s) : (We(r, r, ge(i, t.x, t.y)), Os(r, r, s), We(r, r, ge(i, -t.x, -t.y))), r;
  }
};
class Oe {
  constructor(t, e, s, r, i, n) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(e, s)), this.end = Math.max(0, Math.max(e, s)), this.end < t.length && (this.glyphWidthEnd = t[this.end].metrics.width), this.width = r, this.yMin = i, this.yMax = n;
  }
}
const ys = (l) => l === 10, Ws = (l) => l === 32;
function Jn(l, t, e) {
  const s = new Array(), r = 1 / e.scale, i = e.maxLineWidth * r, n = t ? l.length - 1 : 0, o = t ? -1 : l.length, a = t ? -1 : 1;
  let h = n, c = 0, u = 0, m = h, f = m, _ = 0, p = 1 / 0, d = 0;
  for (; h !== o; ) {
    const { code: y, metrics: x } = l[h], P = Math.abs(x.top);
    if (ys(y) || Ws(y) || (p = Math.min(p, P), d = Math.max(d, P + x.height)), ys(y))
      h !== n && (s.push(new Oe(l, m, h - a, c, p, d)), p = 1 / 0, d = 0), c = 0, m = h + a, f = h + a, u = 0;
    else if (Ws(y))
      f = h + a, u = 0, _ = x.advance, c += x.advance;
    else if (c > i) {
      if (f !== m) {
        const M = f - 2 * a;
        c -= _, s.push(new Oe(l, m, M, c - u, p, d)), p = 1 / 0, d = 0, m = f, c = u;
      } else
        s.push(new Oe(l, m, h - a, c, p, d)), p = 1 / 0, d = 0, m = h, f = h, c = 0;
      c += x.advance, u += x.advance;
    } else
      c += x.advance, u += x.advance;
    h += a;
  }
  const g = new Oe(l, m, h - a, c, p, d);
  return g.start >= 0 && g.end < l.length && s.push(g), s;
}
function Un(l, t) {
  let e = 0;
  for (let i = 0; i < l.length; i++) {
    const { width: n } = l[i];
    e = Math.max(n, e);
  }
  const s = t.decoration === "underline" ? Hi : 0, r = l[0].yMin;
  return { x: 0, y: r, height: l[l.length - 1].yMax + t.lineHeight * (l.length - 1) + s - r, width: e };
}
function Vi(l, t, e) {
  const s = e.scale, r = new Array(), i = Jn(l, t, e), n = Un(i, e), { vAlign: o, hAlign: a } = e, h = o === Yt.Baseline ? 1 : 0, c = h ? 0 : o - 1, u = (1 - h) * -n.y + c * (n.height / 2) + (h ? 1 : 0) * -vs;
  for (let m = 0; m < i.length; m++) {
    const { start: f, end: _, width: p } = i[m];
    let d = -1 * (a + 1) * (p / 2) - Bs;
    const g = m * e.lineHeight + u - Bs;
    i[m].startX = d, i[m].startY = g;
    for (let y = f; y <= _; y++) {
      const x = l[y];
      if (ys(x.code))
        continue;
      const P = new Yi(d + x.metrics.left, g - x.metrics.top, x, s);
      d += x.metrics.advance, r.push(P);
    }
  }
  return new Wn(r, i, e);
}
const bt = Math.PI / 180, Bi = _e.getLogger("geoscene.symbols.cim.CIMSymbolDrawHelper"), vt = 4, Re = 10, qn = 10, ks = 4, Be = 10;
let wt = class et {
  constructor(t) {
    this._t = t;
  }
  static createIdentity() {
    return new et([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t = this._t;
    return new et(t.slice());
  }
  transform(t) {
    const e = this._t;
    return [e[0] * t[0] + e[1] * t[1] + e[2], e[3] * t[0] + e[4] * t[1] + e[5]];
  }
  static createScale(t, e) {
    return new et([t, 0, 0, 0, e, 0]);
  }
  scale(t, e) {
    const s = this._t;
    return s[0] *= t, s[1] *= t, s[2] *= t, s[3] *= e, s[4] *= e, s[5] *= e, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t, e) {
    return new et([0, 0, t, 0, 0, e]);
  }
  translate(t, e) {
    const s = this._t;
    return s[2] += t, s[5] += e, this;
  }
  static createRotate(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return new et([e, -s, 0, s, e, 0]);
  }
  rotate(t) {
    return et.multiply(this, et.createRotate(t), this);
  }
  angle() {
    const t = this._t[0], e = this._t[3], s = Math.sqrt(t * t + e * e);
    return [t / s, e / s];
  }
  static multiply(t, e, s) {
    const r = t._t, i = e._t, n = r[0] * i[0] + r[3] * i[1], o = r[1] * i[0] + r[4] * i[1], a = r[2] * i[0] + r[5] * i[1] + i[2], h = r[0] * i[3] + r[3] * i[4], c = r[1] * i[3] + r[4] * i[4], u = r[2] * i[3] + r[5] * i[4] + i[5], m = s._t;
    return m[0] = n, m[1] = o, m[2] = a, m[3] = h, m[4] = c, m[5] = u, s;
  }
  invert() {
    const t = this._t;
    let e = t[0] * t[4] - t[1] * t[3];
    if (e === 0)
      return new et([0, 0, 0, 0, 0, 0]);
    e = 1 / e;
    const s = (t[1] * t[5] - t[2] * t[4]) * e, r = (t[2] * t[3] - t[0] * t[5]) * e, i = t[4] * e, n = -t[1] * e, o = -t[3] * e, a = t[0] * e;
    return new et([i, n, s, o, a, r]);
  }
}, Is = class {
  constructor(t, e) {
    this._resourceManager = t, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new mr(Et, void 0, void 0, 100), this._earlyReturn = !1, this._mapRotation = 0, this._transfos.push(e || wt.createIdentity()), this._sizeTransfos.push(e ? e.scaleRatio() : 1);
  }
  setTransform(t, e) {
    this._transfos = [t || wt.createIdentity()], this._sizeTransfos = [e || (t ? t.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t) {
    this._geomUnitsPerPoint = t;
  }
  transformPt(t) {
    return this._transfos[this._transfos.length - 1].transform(t);
  }
  transformSize(t) {
    return t * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t) {
    return this._transfos[this._transfos.length - 1].invert().transform(t);
  }
  reverseTransformSize(t) {
    return t / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t, e) {
    const s = e ? t.scaleRatio() : 1;
    wt.multiply(t, this.back(), t), this._transfos.push(t), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * s);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t, e, s) {
    if (t)
      switch (t.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          this.drawMultiLayerSymbol(t, e);
          break;
        case "CIMTextSymbol":
          this.drawTextSymbol(t, e, s);
      }
  }
  drawMultiLayerSymbol(t, e) {
    if (!t || !e)
      return;
    const s = t.symbolLayers;
    if (!s)
      return;
    const r = t.effects;
    if (r && r.length > 0) {
      const i = this.executeEffects(r, e);
      if (i) {
        let n = i.next();
        for (; n; )
          this.drawSymbolLayers(s, n.asJSON()), n = i.next();
      }
    } else
      this.drawSymbolLayers(s, e);
  }
  executeEffects(t, e) {
    const s = this._resourceManager.geometryEngine;
    let r = new _s($.fromJSONCIM(e));
    for (const i of t) {
      const n = ds(i);
      n && (r = n.execute(r, i, this.geomUnitsPerPoint(), null, s));
    }
    return r;
  }
  drawSymbolLayers(t, e) {
    let s = t.length;
    for (; s--; ) {
      const r = t[s];
      if (!r || r.enable === !1)
        continue;
      const i = r.effects;
      if (i && i.length > 0) {
        const n = this.executeEffects(i, e);
        if (n) {
          let o = null;
          for (; (o = n.next()) && (this.drawSymbolLayer(r, o.asJSON()), !this._earlyReturn); )
            ;
        }
      } else
        this.drawSymbolLayer(r, e);
      if (this._earlyReturn)
        return;
    }
  }
  drawSymbolLayer(t, e) {
    switch (t.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e, t.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e, t);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e, t);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e, t);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e, t.color, t.width, t.capStyle, t.joinStyle, t.miterLimit);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e, t);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e, t);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t, e);
    }
  }
  drawHatchFill(t, e) {
    const s = this._buildHatchPolyline(e, t, this.geomUnitsPerPoint());
    s && (this.pushClipPath(t), this.drawMultiLayerSymbol(e.lineSymbol, s), this.popClipPath());
  }
  drawPictureFill(t, e) {
  }
  drawGradientFill(t, e) {
  }
  drawPictureStroke(t, e) {
  }
  drawGradientStroke(t, e) {
  }
  drawMarkerLayer(t, e) {
    const s = t.markerPlacement;
    if (s) {
      const r = Gn(s);
      if (r) {
        const i = s.type === "CIMMarkerPlacementInsidePolygon" || s.type === "CIMMarkerPlacementPolygonCenter" && s.clipAtBoundary;
        i && this.pushClipPath(e);
        const n = r.execute($.fromJSONCIM(e), s, this.geomUnitsPerPoint(), null, this._resourceManager.geometryEngine);
        if (n) {
          let o = null;
          for (; (o = n.next()) && (this.drawMarker(t, o), !this._earlyReturn); )
            ;
        }
        i && this.popClipPath();
      }
    } else {
      const r = this._placementPool.acquire();
      if (hs(e))
        r.tx = e.x, r.ty = e.y, this.drawMarker(t, r);
      else if (W(e)) {
        const i = pr(e);
        i && ([r.tx, r.ty] = i, this.drawMarker(t, r));
      } else
        for (const i of e.points)
          if (r.tx = i[0], r.ty = i[1], this.drawMarker(t, r), this._earlyReturn)
            break;
      this._placementPool.release(r);
    }
  }
  drawMarker(t, e) {
    switch (t.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t, e);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t, e);
    }
  }
  drawPictureMarker(t, e) {
    if (!t)
      return;
    const s = this._resourceManager.getResource(t.url), r = b(t.size, Re);
    if (s == null || r <= 0)
      return;
    const i = s.width, n = s.height;
    if (!i || !n)
      return;
    const o = i / n, a = b(t.scaleX, 1), h = wt.createIdentity(), c = t.anchorPoint;
    if (c) {
      let d = c.x, g = c.y;
      t.anchorPointUnits !== "Absolute" && (d *= r * o * a, g *= r), h.translate(-d, -g);
    }
    let u = b(t.rotation);
    t.rotateClockwise && (u = -u), this._mapRotation && (u += this._mapRotation), u && h.rotate(u * bt);
    let m = b(t.offsetX), f = b(t.offsetY);
    if (m || f) {
      if (this._mapRotation) {
        const d = bt * this._mapRotation, g = Math.cos(d), y = Math.sin(d), x = m * y + f * g;
        m = m * g - f * y, f = x;
      }
      h.translate(m, f);
    }
    const _ = this.geomUnitsPerPoint();
    _ !== 1 && h.scale(_, _);
    const p = e.getAngle();
    p && h.rotate(p), h.translate(e.tx, e.ty), this.push(h, !1), this.drawImage(t, r), this.pop();
  }
  drawVectorMarker(t, e) {
    if (!t)
      return;
    const s = t.markerGraphics;
    if (!s)
      return;
    const r = b(t.size, Re), i = t.frame, n = i ? i.ymax - i.ymin : 0, o = r && n ? r / n : 1, a = wt.createIdentity();
    i && a.translate(0.5 * -(i.xmax + i.xmin), 0.5 * -(i.ymax + i.ymin));
    const h = t.anchorPoint;
    if (h) {
      let p = h.x, d = h.y;
      t.anchorPointUnits !== "Absolute" ? i && (p *= i.xmax - i.xmin, d *= i.ymax - i.ymin) : (p /= o, d /= o), a.translate(-p, -d);
    }
    o !== 1 && a.scale(o, o);
    let c = b(t.rotation);
    t.rotateClockwise && (c = -c), this._mapRotation && (c += this._mapRotation), c && a.rotate(c * bt);
    let u = b(t.offsetX), m = b(t.offsetY);
    if (u || m) {
      if (this._mapRotation) {
        const p = bt * this._mapRotation, d = Math.cos(p), g = Math.sin(p), y = u * g + m * d;
        u = u * d - m * g, m = y;
      }
      a.translate(u, m);
    }
    const f = this.geomUnitsPerPoint();
    f !== 1 && a.scale(f, f);
    const _ = e.getAngle();
    _ && a.rotate(_), a.translate(e.tx, e.ty), this.push(a, t.scaleSymbolsProportionally);
    for (const p of s)
      if (p && p.symbol && p.geometry || Bi.error("Invalid marker graphic", p), this.drawSymbol(p.symbol, p.geometry, p.textString), this._earlyReturn)
        break;
    this.pop();
  }
  drawTextSymbol(t, e, s) {
    if (!t || !hs(e) || b(t.height, Be) <= 0)
      return;
    const r = wt.createIdentity();
    let i = b(t.angle);
    i = -i, i && r.rotate(i * bt);
    const n = b(t.offsetX), o = b(t.offsetY);
    (n || o) && r.translate(n, o);
    const a = this.geomUnitsPerPoint();
    a !== 1 && r.scale(a, a), r.translate(e.x, e.y), this.push(r, !1), this.drawText(t, s), this.pop();
  }
  _buildHatchPolyline(t, e, s) {
    let r = b(t.separation, ks) * s, i = b(t.rotation);
    if (r === 0)
      return null;
    r < 0 && (r = -r);
    let n = 0;
    const o = 0.5 * r;
    for (; n > o; )
      n -= r;
    for (; n < -o; )
      n += r;
    const a = lt();
    Ms(a, e), a[0] -= o, a[1] -= o, a[2] += o, a[3] += o;
    const h = [[a[0], a[1]], [a[0], a[3]], [a[2], a[3]], [a[2], a[1]]];
    for (; i > 180; )
      i -= 180;
    for (; i < 0; )
      i += 180;
    const c = Math.cos(i * bt), u = Math.sin(i * bt), m = -r * u, f = r * c;
    let _, p, d, g;
    n = b(t.offsetX) * s * u - b(t.offsetY) * s * c, _ = d = Number.MAX_VALUE, p = g = -Number.MAX_VALUE;
    for (const C of h) {
      const I = C[0], w = C[1], z = c * I + u * w, F = -u * I + c * w;
      _ = Math.min(_, z), d = Math.min(d, F), p = Math.max(p, z), g = Math.max(g, F);
    }
    d = Math.floor(d / r) * r;
    let y = c * _ - u * d - m * n / r, x = u * _ + c * d - f * n / r, P = c * p - u * d - m * n / r, M = u * p + c * d - f * n / r;
    const S = 1 + Math.round((g - d) / r), v = [];
    for (let C = 0; C < S; C++)
      y += m, x += f, P += m, M += f, v.push([[y, x], [P, M]]);
    return { paths: v };
  }
}, jn = class extends Is {
  constructor(t, e) {
    super(t, e), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new Xi(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return fr(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t) {
    if (t && !(this._clipCount > 0))
      if (W(t))
        this._processPath(t.rings, 0);
      else if (st(t))
        this._processPath(t.paths, 0);
      else if (J(t)) {
        const e = kt(t);
        e && this._processPath(e.rings, 0);
      } else
        console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t, e, s) {
    if (!t || this._clipCount > 0)
      return;
    const r = 0.5 * this.transformSize(b(s, vt));
    if (W(t))
      this._processPath(t.rings, r);
    else if (st(t))
      this._processPath(t.paths, r);
    else if (J(t)) {
      const i = kt(t);
      i && this._processPath(i.rings, r);
    } else
      console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t, e) {
    W(e) && t.markerPlacement && (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t.markerPlacement.clipAtBoundary) ? this._processPath(e.rings, 0) : super.drawMarkerLayer(t, e);
  }
  drawHatchFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureFill(t, e) {
    this.drawSolidFill(t);
  }
  drawGradientFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  drawGradientStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  pushClipPath(t) {
    this.drawSolidFill(t), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t, e) {
    const { url: s } = t, r = b(t.scaleX, 1);
    let i = r * e, n = e;
    const o = this._resourceManager.getResource(s);
    e || o == null || (i = r * o.width, n = o.height), this._merge(this.transformPt([-i / 2, -n / 2]), 0), this._merge(this.transformPt([-i / 2, n / 2]), 0), this._merge(this.transformPt([i / 2, -n / 2]), 0), this._merge(this.transformPt([i / 2, n / 2]), 0);
  }
  drawText(t, e) {
    if (!e || e.length === 0)
      return;
    this._textRasterizer || (this._textRasterizer = new Di());
    const s = qi(t), [r, i] = this._textRasterizer.computeTextSize(e, s);
    let n = 0;
    switch (t.horizontalAlignment) {
      case "Left":
        n = r / 2;
        break;
      case "Right":
        n = -r / 2;
    }
    let o = 0;
    switch (t.verticalAlignment) {
      case "Bottom":
        o = i / 2;
        break;
      case "Top":
        o = -i / 2;
        break;
      case "Baseline":
        o = i / 6;
    }
    this._merge(this.transformPt([-r / 2 + n, -i / 2 + o]), 0), this._merge(this.transformPt([-r / 2 + n, i / 2 + o]), 0), this._merge(this.transformPt([r / 2 + n, -i / 2 + o]), 0), this._merge(this.transformPt([r / 2 + n, i / 2 + o]), 0);
  }
  _processPath(t, e) {
    if (t)
      for (const s of t) {
        const r = s ? s.length : 0;
        if (r > 1) {
          this._merge(this.transformPt(s[0]), e);
          for (let i = 1; i < r; i++)
            this._merge(this.transformPt(s[i]), e);
        }
      }
  }
  _merge(t, e) {
    t[0] - e < this._xmin && (this._xmin = t[0] - e), t[0] + e > this._xmax && (this._xmax = t[0] + e), t[1] - e < this._ymin && (this._ymin = t[1] - e), t[1] + e > this._ymax && (this._ymax = t[1] + e);
  }
};
class Na extends Is {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null;
  }
  hitTest(t, e, s, r, i, n) {
    const o = n * q(1);
    this.setTransform(), this.setGeomUnitsPerPoint(o), this._searchPoint = [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2], this._searchDistPoint = (t[2] - t[0]) / 2 / o, this._textInfo = r;
    const a = e && (e.type === "CIMPointSymbol" && e.angleAlignment !== "Map" || e.type === "CIMTextSymbol");
    return this._mapRotation = a ? i : 0, this._earlyReturn = !1, this.drawSymbol(e, s), this._earlyReturn;
  }
  drawSolidFill(t, e) {
    this._hitTestFill(t);
  }
  drawHatchFill(t, e) {
    this._hitTestFill(t);
  }
  drawPictureFill(t, e) {
    this._hitTestFill(t);
  }
  drawGradientFill(t, e) {
    this._hitTestFill(t);
  }
  drawSolidStroke(t, e, s, r, i, n) {
    this._hitTestStroke(t, s);
  }
  drawPictureStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawGradientStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawMarkerLayer(t, e) {
    t.markerPlacement && (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t.markerPlacement.clipAtBoundary) ? this._hitTestFill(e) : super.drawMarkerLayer(t, e);
  }
  pushClipPath(t) {
  }
  popClipPath() {
  }
  drawImage(t, e) {
    const { url: s } = t, r = b(t.scaleX, 1), i = this._resourceManager.getResource(s);
    if (i == null || i.height === 0 || e === 0)
      return;
    const n = e * this.geomUnitsPerPoint(), o = n * r * (i.width / i.height), a = this.reverseTransformPt(this._searchPoint), h = this._searchDistPoint;
    Math.abs(a[0]) < o / 2 + h && Math.abs(a[1]) < n / 2 + h && (this._earlyReturn = !0);
  }
  drawText(t, e) {
    var y, x;
    const s = this._textInfo;
    if (!s)
      return;
    const r = s.get(t);
    if (!r)
      return;
    const { text: i, mosaicItem: n } = r;
    if (!((y = n == null ? void 0 : n.glyphMosaicItems) != null && y.length))
      return;
    const o = b(t.height, Be), { lineGapType: a, lineGap: h } = t, c = a ? Ui(a, b(h), o) : 0, u = Cs(i)[1], m = n.glyphMosaicItems, f = ((x = t.callout) == null ? void 0 : x.type) === "CIMBackgroundCallout", _ = Vi(m, u, { scale: o / li, angle: 0, xOffset: 0, yOffset: 0, hAlign: Wi(t.horizontalAlignment), vAlign: Ji(t.verticalAlignment), maxLineWidth: 512, lineHeight: ci * Math.max(0.25, Math.min(c || 1, 4)), decoration: t.font.decoration || "none", isCIM: !0, hasBackground: f }), p = this.reverseTransformPt(this._searchPoint), d = p[0], g = p[1];
    for (const P of _.glyphs)
      if (d > P.xTopLeft && d < P.xBottomRight && g > -P.yBottomRight && g < -P.yTopLeft) {
        this._earlyReturn = !0;
        break;
      }
  }
  _hitTestFill(t) {
    let e = null;
    if (J(t)) {
      const r = t;
      e = [[[r.xmin, r.ymin], [r.xmin, r.ymax], [r.xmax, r.ymax], [r.xmax, r.ymin], [r.xmin, r.ymin]]];
    } else if (W(t))
      e = t.rings;
    else {
      if (!st(t))
        return;
      e = t.paths;
    }
    const s = this.reverseTransformPt(this._searchPoint);
    if (this._pointInPolygon(s, e) && (this._earlyReturn = !0), !this._earlyReturn) {
      const r = this.reverseTransformSize(this._searchDistPoint) * this.geomUnitsPerPoint();
      this._nearLine(s, e, r) && (this._earlyReturn = !0);
    }
  }
  _hitTestStroke(t, e) {
    let s = null;
    if (J(t)) {
      const o = t;
      s = [[[o.xmin, o.ymin], [o.xmin, o.ymax], [o.xmax, o.ymax], [o.xmax, o.ymin], [o.xmin, o.ymin]]];
    } else if (W(t))
      s = t.rings;
    else {
      if (!st(t))
        return;
      s = t.paths;
    }
    const r = this.reverseTransformPt(this._searchPoint), i = b(e, vt) * this.geomUnitsPerPoint(), n = this.reverseTransformSize(this._searchDistPoint) * this.geomUnitsPerPoint();
    this._nearLine(r, s, i / 2 + n) && (this._earlyReturn = !0);
  }
  _pointInPolygon(t, e) {
    let s = 0;
    for (const r of e) {
      const i = r.length;
      for (let n = 1; n < i; n++) {
        const o = r[n - 1], a = r[n];
        o[1] > t[1] != a[1] > t[1] && ((a[0] - o[0]) * (t[1] - o[1]) - (a[1] - o[1]) * (t[0] - o[0]) > 0 ? s++ : s--);
      }
    }
    return s !== 0;
  }
  _nearLine(t, e, s) {
    for (const r of e) {
      const i = r.length;
      for (let n = 1; n < i; n++) {
        const o = r[n - 1], a = r[n];
        let h = (a[0] - o[0]) * (a[0] - o[0]) + (a[1] - o[1]) * (a[1] - o[1]);
        if (h === 0)
          continue;
        h = Math.sqrt(h);
        const c = ((a[0] - o[0]) * (t[1] - o[1]) - (a[1] - o[1]) * (t[0] - o[0])) / h;
        if (Math.abs(c) < s) {
          const u = ((a[0] - o[0]) * (t[0] - o[0]) + (a[1] - o[1]) * (t[1] - o[1])) / h;
          if (u > -s && u < h + s)
            return !0;
        }
      }
    }
    return !1;
  }
}
class Zn extends Is {
  constructor(t, e, s, r) {
    super(e, s), this._applyAdditionalRenderProps = r, this._colorSubstitutionHelper = new Zr(), this._ctx = t;
  }
  drawSolidFill(t, e) {
    if (!t)
      return;
    if (W(t))
      this._buildPath(t.rings, !0);
    else if (st(t))
      this._buildPath(t.paths, !0);
    else if (J(t))
      this._buildPath(kt(t).rings, !0);
    else {
      if (!Te(t))
        return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const s = this._ctx;
    s.fillStyle = typeof e == "string" ? e : "rgba(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + "," + (e[3] ?? 255) / 255 + ")", s.fill("evenodd");
  }
  drawSolidStroke(t, e, s, r, i, n) {
    if (!t || !e || s === 0)
      return;
    if (W(t))
      this._buildPath(t.rings, !0);
    else if (st(t))
      this._buildPath(t.paths, !1);
    else {
      if (!J(t))
        return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(kt(t).rings, !0);
    }
    const o = this._ctx;
    o.strokeStyle = typeof e == "string" ? e : "rgba(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + "," + (e[3] ?? 255) / 255 + ")", o.lineWidth = Math.max(this.transformSize(s), 0.5), this._setCapStyle(r), this._setJoinStyle(i), o.miterLimit = n, o.stroke();
  }
  pushClipPath(t) {
    if (this._ctx.save(), W(t))
      this._buildPath(t.rings, !0);
    else if (st(t))
      this._buildPath(t.paths, !0);
    else {
      if (!J(t))
        return;
      this._buildPath(kt(t).rings, !0);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t, e) {
    const { colorSubstitutions: s, url: r, tintColor: i } = t, n = b(t.scaleX, 1), o = this._resourceManager.getResource(r);
    if (o == null)
      return;
    let a = e * (o.width / o.height), h = e;
    e || (a = o.width, h = o.height);
    const c = Tt(r) || "src" in o && Tt(o.src);
    let u = "getFrame" in o ? es(o) : o;
    s && (u = this._colorSubstitutionHelper.applyColorSubstituition(u, s)), this._applyAdditionalRenderProps && !c && i && (u = this._colorSubstitutionHelper.tintImageData(u, i));
    const m = this.transformPt([0, 0]), [f, _] = this.getTransformAngle(), p = this.transformSize(1), d = this._ctx;
    d.save(), d.setTransform({ m11: n * p * f, m12: n * p * _, m21: -p * _, m22: p * f, m41: m[0], m42: m[1] }), d.drawImage(u, -a / 2, -h / 2, a, h), d.restore();
  }
  drawText(t, e) {
    if (!e || e.length === 0)
      return;
    this._textRasterizer || (this._textRasterizer = new Di());
    const s = qi(t);
    s.size *= this.transformSize(At(1));
    const r = this._textRasterizer.rasterizeText(e, s);
    if (!r)
      return;
    const { size: i, anchorX: n, anchorY: o, canvas: a } = r, h = i[0] * (n + 0.5), c = i[1] * (o - 0.5), u = this._ctx, m = this.transformPt([0, 0]), [f, _] = this.getTransformAngle(), p = 1;
    u.save(), u.setTransform({ m11: p * f, m12: p * _, m21: -p * _, m22: p * f, m41: m[0] - p * h, m42: m[1] + p * c }), u.drawImage(a, 0, 0), u.restore();
  }
  drawPictureFill(t, e) {
    if (!t)
      return;
    let { colorSubstitutions: s, height: r, offsetX: i, offsetY: n, rotation: o, scaleX: a, tintColor: h, url: c } = e;
    const u = this._resourceManager.getResource(c);
    if (u == null)
      return;
    if (W(t))
      this._buildPath(t.rings, !0);
    else if (st(t))
      this._buildPath(t.paths, !0);
    else if (J(t))
      this._buildPath(kt(t).rings, !0);
    else {
      if (!Te(t))
        return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const m = this._ctx, f = Tt(c) || "src" in u && Tt(u.src);
    let _, p = "getFrame" in u ? es(u) : u;
    if (s && (p = this._colorSubstitutionHelper.applyColorSubstituition(p, s)), this._applyAdditionalRenderProps) {
      f || h && (p = this._colorSubstitutionHelper.tintImageData(p, h)), _ = m.createPattern(p, "repeat");
      const d = this.transformSize(1);
      o || (o = 0), i ? i *= d : i = 0, n ? n *= d : n = 0, r && (r *= d);
      const g = r ? r / u.height : 1, y = a && r ? a * r / u.width : 1;
      if (o !== 0 || g !== 1 || y !== 1 || i !== 0 || n !== 0) {
        const x = new DOMMatrix();
        x.rotateSelf(0, 0, -o).translateSelf(i, n).scaleSelf(y, g, 1), _.setTransform(x);
      }
    } else
      _ = m.createPattern(p, "repeat");
    m.save(), m.fillStyle = _, m.fill("evenodd"), m.restore();
  }
  drawPictureStroke(t, e) {
    if (!t)
      return;
    let { colorSubstitutions: s, capStyle: r, joinStyle: i, miterLimit: n, tintColor: o, url: a, width: h } = e;
    const c = this._resourceManager.getResource(a);
    if (c == null)
      return;
    let u;
    if (W(t))
      u = t.rings;
    else if (st(t))
      u = t.paths;
    else {
      if (!J(t))
        return Te(t) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      u = kt(t).rings;
    }
    h || (h = c.width);
    const m = Tt(a) || "src" in c && Tt(c.src);
    let f = "getFrame" in c ? es(c) : c;
    s && (f = this._colorSubstitutionHelper.applyColorSubstituition(f, s)), this._applyAdditionalRenderProps && (m || o && (f = this._colorSubstitutionHelper.tintImageData(f, o)));
    const _ = Math.max(this.transformSize(q(h)), 0.5), p = _ / f.width, d = this._ctx, g = d.createPattern(f, "repeat-y");
    let y, x;
    d.save(), this._setCapStyle(r), this._setJoinStyle(i), n !== void 0 && (d.miterLimit = n), d.lineWidth = _;
    for (let P of u)
      if (P = j(P), to(P), P && !(P.length <= 1)) {
        y = this.transformPt(P[0]);
        for (let M = 1; M < P.length; M++) {
          x = this.transformPt(P[M]);
          const S = Kn(y, x), v = new DOMMatrix();
          v.translateSelf(0, y[1] - _ / 2).scaleSelf(p, p, 1).rotateSelf(0, 0, 90 - S), g.setTransform(v), d.strokeStyle = g, d.beginPath(), d.moveTo(y[0], y[1]), d.lineTo(x[0], x[1]), d.stroke(), y = x;
        }
      }
    d.restore();
  }
  _buildPath(t, e) {
    const s = this._ctx;
    if (s.beginPath(), t)
      for (const r of t) {
        const i = r ? r.length : 0;
        if (i > 1) {
          let n = this.transformPt(r[0]);
          s.moveTo(n[0], n[1]);
          for (let o = 1; o < i; o++)
            n = this.transformPt(r[o]), s.lineTo(n[0], n[1]);
          e && s.closePath();
        }
      }
  }
  _setCapStyle(t) {
    switch (t) {
      case ct.Butt:
        this._ctx.lineCap = "butt";
        break;
      case ct.Round:
        this._ctx.lineCap = "round";
        break;
      case ct.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t) {
    switch (t) {
      case ut.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case ut.Round:
        this._ctx.lineJoin = "round";
        break;
      case ut.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
}
function Kn(l, t) {
  const e = t[0] - l[0], s = t[1] - l[1];
  return 180 / Math.PI * Math.atan2(s, e);
}
const kt = (l) => l ? { spatialReference: l.spatialReference, rings: [[[l.xmin, l.ymin], [l.xmin, l.ymax], [l.xmax, l.ymax], [l.xmax, l.ymin], [l.xmin, l.ymin]]] } : null, Wi = (l) => {
  switch (l) {
    case "Left":
      return Se.Left;
    case "Right":
      return Se.Right;
    case "Center":
      return Se.Center;
    case "Justify":
      return Bi.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), Se.Center;
  }
}, Ji = (l) => {
  switch (l) {
    case "Top":
      return Yt.Top;
    case "Center":
      return Yt.Center;
    case "Bottom":
      return Yt.Bottom;
    case "Baseline":
      return Yt.Baseline;
  }
}, Ui = (l, t, e) => {
  switch (l) {
    case "ExtraLeading":
      return 1 + t / e;
    case "Multiple":
      return t;
    case "Exact":
      return t / e;
  }
};
function qi(l, t = 1) {
  var g;
  const e = bs(l), s = Ss(l.fontStyleName), r = l.fontFamilyName ?? mi, { weight: i, style: n } = s, o = t * (l.height || 5), a = ai(l.horizontalAlignment), h = hi(l.verticalAlignment), c = Ft(l), u = Ft(l.haloSymbol), m = u ? t * (0 | l.haloSize) : 0, f = ((g = l.callout) == null ? void 0 : g.type) === "CIMBackgroundCallout" ? l.callout.backgroundSymbol : null, _ = Ft(f), p = fs(f), d = Ne(f);
  return { color: c, size: o, horizontalAlignment: a, verticalAlignment: h, font: { family: r, style: vr(n), weight: kr(i), decoration: e }, halo: { size: m || 0, color: u, style: n }, backgroundColor: _, borderLine: p != null && d != null ? { size: p, color: d } : null, pixelRatio: 1, premultiplyColors: !0 };
}
const Qn = 1e-4;
function to(l) {
  let t, e, s, r, i, n = l[0], o = 1;
  for (; o < l.length; )
    t = l[o][0] - n[0], e = l[o][1] - n[1], r = t !== 0 ? e / t : Math.PI / 2, s !== void 0 && r - s <= Qn ? (l.splice(o - 1, 1), n = i) : (i = n, n = l[o], o++), s = r;
}
function Nt(l, t, e, s, r) {
  if (l == null)
    return null;
  const i = l.referencesGeometry() && r ? eo(t, s, r) : t, n = l.repurposeFeature(i);
  try {
    return l.evaluate({ ...e, $feature: n }, l.services);
  } catch (o) {
    return _e.getLogger("geoscene.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", o), null;
  }
}
const is = /* @__PURE__ */ new Map();
function eo(l, t, e) {
  const { transform: s, hasZ: r, hasM: i } = e;
  is.has(t) || is.set(t, so(t));
  const n = is.get(t)(l.geometry, s, r, i);
  return { ...l, geometry: n };
}
function so(l) {
  const t = {};
  switch (l) {
    case "esriGeometryPoint":
      return (e, s, r, i) => Hr(s, t, e, r, i);
    case "esriGeometryPolygon":
      return (e, s, r, i) => Dr(s, t, e, r, i);
    case "esriGeometryPolyline":
      return (e, s, r, i) => Xr(s, t, e, r, i);
    case "esriGeometryMultipoint":
      return (e, s, r, i) => Rr(s, t, e, r, i);
    default:
      return _e.getLogger("geoscene.views.2d.support.arcadeOnDemand").error(new _r("mapview-arcade", `Unable to handle geometryType: ${l}`)), (e) => e;
  }
}
const ji = Math.PI, io = ji / 2, Js = Math.PI / 180, tt = 96 / 72, Us = 4, Xe = _e.getLogger("geoscene.symbols.cim.CIMSymbolHelper");
function Aa(l) {
  if (!l || !l.type)
    return null;
  let t;
  switch (l.type) {
    case "cim":
      return l.data;
    case "web-style":
      return l;
    case "simple-marker": {
      const e = H.fromSimpleMarker(l);
      if (!e)
        return null;
      t = e;
      break;
    }
    case "picture-marker":
      t = H.fromPictureMarker(l);
      break;
    case "simple-line":
      t = H.fromSimpleLineSymbol(l);
      break;
    case "simple-fill":
      t = H.fromSimpleFillSymbol(l);
      break;
    case "picture-fill":
      t = H.fromPictureFillSymbol(l);
      break;
    case "text":
      t = H.fromTextSymbol(l);
  }
  return { type: "CIMSymbolReference", symbol: t };
}
function Fe(l, t, e) {
  switch (t.type) {
    case "CIMSymbolReference":
      return Fe(l, t.symbol, e);
    case "CIMPointSymbol":
      e == null && (e = { x: 0, y: 0 }), l.drawSymbol(t, e);
      break;
    case "CIMLineSymbol":
      e == null && (e = { paths: [[[0, 0], [10, 0]]] }), l.drawSymbol(t, e);
      break;
    case "CIMPolygonSymbol":
      e == null && (e = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), l.drawSymbol(t, e);
      break;
    case "CIMTextSymbol": {
      const s = { x: 0, y: 0 };
      l.drawSymbol(t, s);
      break;
    }
    case "CIMVectorMarker": {
      const s = new Et();
      l.drawMarker(t, s);
      break;
    }
  }
  return l.envelope();
}
function ro(l) {
  if (!l)
    return 0;
  switch (l.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(l.offset);
    default:
      return 0;
  }
}
function no(l) {
  if (!l)
    return 0;
  switch (l.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * l.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(l.size);
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(l.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * l.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(b(l.offsetX)), Math.abs(b(l.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(l.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(l.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(l.fromWidth), Math.abs(l.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(l.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(l.width);
  }
}
function De(l) {
  if (!l)
    return 0;
  let t = 0;
  for (const e of l)
    t += no(e);
  return t;
}
class Fa {
  getSymbolInflateSize(t, e, s, r, i) {
    return t || (t = [0, 0, 0, 0]), e ? this._getInflateSize(t, e, s, r, i) : t;
  }
  static safeSize(t) {
    const e = Math.max(Math.abs(t[0]), Math.abs(t[2])), s = Math.max(Math.abs(t[1]), Math.abs(t[3]));
    return Math.sqrt(e * e + s * s);
  }
  _vectorMarkerBounds(t, e, s, r) {
    let i = !0;
    const n = lt();
    if (e && e.markerGraphics)
      for (const o of e.markerGraphics) {
        const a = [0, 0, 0, 0];
        o.geometry && (Ms(n, o.geometry), a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, this.getSymbolInflateSize(a, o.symbol, s, 0, r), n[0] += a[0], n[1] += a[1], n[2] += a[2], n[3] += a[3], i ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], i = !1) : (t[0] = Math.min(t[0], n[0]), t[1] = Math.min(t[1], n[1]), t[2] = Math.max(t[2], n[2]), t[3] = Math.max(t[3], n[3])));
      }
    return t;
  }
  _getInflateSize(t, e, s, r, i) {
    if (uo(e)) {
      const n = this._getLayersInflateSize(t, e.symbolLayers, s, r, i), o = De(e.effects);
      return o > 0 && (n[0] -= o, n[1] -= o, n[2] += o, n[3] += o), n;
    }
    return this._getTextInflatedSize(t, e, i);
  }
  _getLayersInflateSize(t, e, s, r, i) {
    let n = !0;
    if (!e)
      return t;
    for (const o of e) {
      if (!o)
        continue;
      let a = [0, 0, 0, 0];
      switch (o.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const c = o;
          let u = c.width;
          u != null && (c.capStyle === ct.Square || c.joinStyle === ut.Miter ? u /= 1.4142135623730951 : u /= 2, a[0] = -u, a[1] = -u, a[2] = u, a[3] = u);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const c = o;
          if (o.type === "CIMVectorMarker") {
            const p = o;
            if (a = this._vectorMarkerBounds(a, p, s, i), p.frame) {
              const d = (p.frame.xmin + p.frame.xmax) / 2, g = (p.frame.ymin + p.frame.ymax) / 2;
              if (a[0] -= d, a[1] -= g, a[2] -= d, a[3] -= g, p.size != null) {
                const y = p.size / (p.frame.ymax - p.frame.ymin);
                a[0] *= y, a[1] *= y, a[2] *= y, a[3] *= y;
              }
            }
          } else if (o.type === "CIMPictureMarker") {
            const p = o, d = s.getResource(p.url);
            let g = 1;
            if (d != null && d.height && (g = d.width / d.height), c.size != null) {
              const y = c.size / 2, x = c.size * g * p.scaleX / 2;
              a = [-x, -y, x, y];
            }
          } else if (c.size != null) {
            const p = c.size / 2;
            a = [-p, -p, p, p];
          }
          if (c.anchorPoint) {
            let p, d;
            c.anchorPointUnits === "Absolute" ? (p = c.anchorPoint.x, d = c.anchorPoint.y) : (p = c.anchorPoint.x * (a[2] - a[0]), d = c.anchorPoint.y * (a[3] - a[1])), a[0] -= p, a[1] -= d, a[2] -= p, a[3] -= d;
          }
          let u = b(c.rotation);
          if (c.rotateClockwise && (u = -u), r && (u -= r), u) {
            const p = Js * u, d = Math.cos(p), g = Math.sin(p), y = lt([Pe, Pe, -Pe, -Pe]);
            ye(y, [a[0] * d - a[1] * g, a[0] * g + a[1] * d]), ye(y, [a[0] * d - a[3] * g, a[0] * g + a[3] * d]), ye(y, [a[2] * d - a[1] * g, a[2] * g + a[1] * d]), ye(y, [a[2] * d - a[3] * g, a[2] * g + a[3] * d]), a = y;
          }
          let m = b(c.offsetX), f = b(c.offsetY);
          if (r) {
            const p = Js * r, d = Math.cos(p), g = Math.sin(p), y = m * g + f * d;
            m = m * d - f * g, f = y;
          }
          a[0] += m, a[1] += f, a[2] += m, a[3] += f;
          const _ = ro(c.markerPlacement);
          _ > 0 && (a[0] -= _, a[1] -= _, a[2] += _, a[3] += _);
          break;
        }
      }
      const h = De(o.effects);
      h > 0 && (a[0] -= h, a[1] -= h, a[2] += h, a[3] += h), n ? (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], n = !1) : (t[0] = Math.min(t[0], a[0]), t[1] = Math.min(t[1], a[1]), t[2] = Math.max(t[2], a[2]), t[3] = Math.max(t[3], a[3]));
    }
    return t;
  }
  _getTextInflatedSize(t, e, s) {
    var p, d;
    const r = e.height ?? Be;
    if (t[0] = -r / 2, t[1] = -r / 2, t[2] = r / 2, t[3] = r / 2, !s)
      return t;
    const i = s.get(e);
    if (!i)
      return t;
    const { text: n, mosaicItem: o } = i;
    if (!((p = o == null ? void 0 : o.glyphMosaicItems) != null && p.length))
      return t;
    const { lineGapType: a, lineGap: h } = e, c = a ? Ui(a, h ?? 0, r) : 0, u = Cs(n)[1], m = o.glyphMosaicItems, f = ((d = e.callout) == null ? void 0 : d.type) === "CIMBackgroundCallout", _ = Vi(m, u, { scale: r / li, angle: b(e.angle), xOffset: b(e.offsetX), yOffset: b(e.offsetY), hAlign: Wi(e.horizontalAlignment), vAlign: Ji(e.verticalAlignment), maxLineWidth: 512, lineHeight: ci * Math.max(0.25, Math.min(c || 1, 4)), decoration: e.font.decoration || "none", isCIM: !0, hasBackground: f }).boundsT;
    return t[0] = _.x - _.halfWidth, t[1] = -_.y - _.halfHeight, t[2] = _.x + _.halfWidth, t[3] = -_.y + _.halfHeight, t;
  }
}
class H {
  static getEnvelope(t, e, s) {
    if (!t)
      return null;
    const r = new jn(s);
    if (Array.isArray(t)) {
      let i;
      for (const n of t)
        i ? i.union(Fe(r, n, e)) : i = Fe(r, n, e);
      return i;
    }
    return Fe(r, t, e);
  }
  static getTextureAnchor(t, e) {
    const s = this.getEnvelope(t, null, e);
    if (!s)
      return [0, 0, 0];
    const r = (s.x + 0.5 * s.width) * tt, i = (s.y + 0.5 * s.height) * tt, n = s.width * tt + 2, o = s.height * tt + 2;
    return [-r / n, -i / o, o];
  }
  static rasterize(t, e, s, r, i = !0) {
    const n = s || this.getEnvelope(e, null, r);
    if (!n)
      return [null, 0, 0, 0, 0];
    const o = (n.x + 0.5 * n.width) * tt, a = (n.y + 0.5 * n.height) * tt;
    t.width = n.width * tt, t.height = n.height * tt, s || (t.width += 2, t.height += 2);
    const h = t.getContext("2d"), c = wt.createScale(tt, -tt);
    c.translate(0.5 * t.width - o, 0.5 * t.height + a);
    const u = new Zn(h, r, c);
    switch (e.type) {
      case "CIMPointSymbol": {
        const _ = { type: "point", x: 0, y: 0 };
        u.drawSymbol(e, _);
        break;
      }
      case "CIMVectorMarker": {
        const _ = new Et();
        u.drawMarker(e, _);
        break;
      }
    }
    const m = h.getImageData(0, 0, t.width, t.height), f = new Uint8Array(m.data);
    if (i) {
      let _;
      for (let p = 0; p < f.length; p += 4)
        _ = f[p + 3] / 255, f[p] = f[p] * _, f[p + 1] = f[p + 1] * _, f[p + 2] = f[p + 2] * _;
    }
    return [f, t.width, t.height, -o / t.width, -a / t.height];
  }
  static fromTextSymbol(t) {
    const { angle: e, color: s, font: r, haloColor: i, haloSize: n, horizontalAlignment: o, kerning: a, text: h, verticalAlignment: c, xoffset: u, yoffset: m, backgroundColor: f, borderLineColor: _, borderLineSize: p } = t;
    let d, g, y, x, P, M;
    r && (d = r.family, g = r.style, y = r.weight, x = r.size, P = r.decoration);
    let S = !1;
    return h && (S = Cs(h)[1]), (f || p) && (M = { type: "CIMBackgroundCallout", margin: null, backgroundSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", color: D(f) }, { type: "CIMSolidStroke", color: D(_), width: p }] }, accentBarSymbol: null, gap: null, leaderLineSymbol: null, lineStyle: null }), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: { type: "CIMTextSymbol", angle: e, blockProgression: Pr.BTT, depth3D: 1, extrapolateBaselines: !0, fontEffects: xr.Normal, fontEncoding: Mr.Unicode, fontFamilyName: d || "Arial", fontStyleName: ho(g, y), fontType: br.Unspecified, haloSize: n, height: x, hinting: Sr.Default, horizontalAlignment: oo(o ?? "center"), kerning: a, letterWidth: 100, ligatures: !0, lineGapType: "Multiple", offsetX: b(u), offsetY: b(m), strikethrough: P === "line-through", underline: P === "underline", symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: !0, color: D(s) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: !0, color: D(i) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: S ? $s.RTL : $s.LTR, verticalAlignment: ao(c ?? "baseline"), verticalGlyphOrientation: Cr.Right, wordSpacing: 100, billboardMode3D: wr.FaceNearPlane, callout: M }, textString: h }], scaleSymbolsProportionally: !0, respectFrame: !0 }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(t) {
    const { height: e, outline: s, width: r, xoffset: i, xscale: n, yoffset: o, yscale: a } = t, h = [], c = { type: "CIMPolygonSymbol", symbolLayers: h };
    if (s) {
      const p = js(s);
      p && h.push(p);
    }
    let u = t.url;
    t.type === "esriPFS" && t.imageData && (u = t.imageData);
    const m = "angle" in t ? t.angle ?? 0 : 0, f = (r ?? 0) * (n || 1), _ = (e ?? 0) * (a || 1);
    return h.push({ type: "CIMPictureFill", invertBackfaceTexture: !1, scaleX: 1, textureFilter: Ns.Picture, tintColor: null, url: u, height: _, width: f, offsetX: b(i), offsetY: b(o), rotation: b(-m), colorSubstitutions: null }), c;
  }
  static fromSimpleFillSymbol(t) {
    const { color: e, style: s, outline: r } = t, i = [], n = { type: "CIMPolygonSymbol", symbolLayers: i };
    if (r) {
      const o = js(r);
      o && i.push(o);
    }
    if (s && s !== "solid" && s !== "none" && s !== "esriSFSSolid" && s !== "esriSFSNull") {
      const o = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: D(e), capStyle: ct.Butt, joinStyle: ut.Miter, width: 0.75 }] };
      let a = 0;
      const h = At(fo(s) ? 8 : 10);
      switch (s) {
        case "vertical":
        case "esriSFSVertical":
          a = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          a = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          a = 45;
          break;
        case "cross":
        case "esriSFSCross":
          a = 0;
      }
      i.push({ type: "CIMHatchFill", lineSymbol: o, offsetX: 0, offsetY: 0, rotation: a, separation: h }), s === "cross" || s === "esriSFSCross" ? i.push({ type: "CIMHatchFill", lineSymbol: j(o), offsetX: 0, offsetY: 0, rotation: 90, separation: h }) : s !== "diagonal-cross" && s !== "esriSFSDiagonalCross" || i.push({ type: "CIMHatchFill", lineSymbol: j(o), offsetX: 0, offsetY: 0, rotation: 45, separation: h });
    } else
      !s || s !== "solid" && s !== "esriSFSSolid" || i.push({ type: "CIMSolidFill", enable: !0, color: D(e) });
    return n;
  }
  static fromSimpleLineSymbol(t) {
    const { cap: e, color: s, join: r, marker: i, miterLimit: n, style: o, width: a } = t;
    let h = null;
    o !== "solid" && o !== "none" && o !== "esriSLSSolid" && o !== "esriSLSNull" && (h = [{ type: "CIMGeometricEffectDashes", dashTemplate: Qi(o, e), lineDashEnding: "NoConstraint", scaleDash: !0, offsetAlongLine: null }]);
    const c = [];
    if (i) {
      let u;
      switch (i.placement) {
        case "begin-end":
          u = xt.Both;
          break;
        case "begin":
          u = xt.JustBegin;
          break;
        case "end":
          u = xt.JustEnd;
          break;
        default:
          u = xt.None;
      }
      const m = H.fromSimpleMarker(i, a, s).symbolLayers[0];
      m.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", angleToLine: !0, offset: 0, extremityPlacement: u, offsetAlongLine: 0 }, c.push(m);
    }
    return c.push({ type: "CIMSolidStroke", color: o !== "none" && o !== "esriSLSNull" ? D(s) : [0, 0, 0, 0], capStyle: Zi(e), joinStyle: Ki(r), miterLimit: n, width: a, effects: h }), { type: "CIMLineSymbol", symbolLayers: c };
  }
  static fromPictureMarker(t) {
    const { angle: e, height: s, width: r, xoffset: i, yoffset: n } = t;
    let o = t.url;
    return t.type === "esriPMS" && t.imageData && (o = t.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: !1, scaleX: 1, textureFilter: Ns.Picture, tintColor: null, url: o, size: s, width: r, offsetX: b(i), offsetY: b(n), rotation: b(-e) }] };
  }
  static fromSimpleMarker(t, e, s) {
    const { style: r } = t, i = t.color ?? s;
    if (r === "path") {
      const h = [];
      if ("outline" in t && t.outline) {
        const m = t.outline;
        h.push({ type: "CIMSolidStroke", enable: !0, width: q(Math.round(At(m.width))), color: D(m.color) });
      }
      h.push({ type: "CIMSolidFill", enable: !0, color: D(i), path: t.path });
      const [c, u] = qs("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, rotation: b(-t.angle), size: b(t.size || 6), offsetX: b(t.xoffset), offsetY: b(t.yoffset), frame: c, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: u, symbol: { type: "CIMPolygonSymbol", symbolLayers: h } }] }] };
    }
    const [n, o] = qs(r);
    let a;
    if (o && n) {
      const h = [];
      if ("outline" in t && t.outline) {
        const u = t.outline;
        h.push({ type: "CIMSolidStroke", enable: !0, width: u.width != null && u.width > 0.667 ? q(Math.round(At(u.width))) : u.width, color: D(u.color) });
      } else
        !e || t.type !== "line-marker" || t.style !== "cross" && t.style !== "x" || h.push({ type: "CIMSolidStroke", enable: !0, width: e, color: D(i) });
      h.push({ type: "CIMSolidFill", enable: !0, color: D(i) });
      const c = { type: "CIMPolygonSymbol", symbolLayers: h };
      a = { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, rotation: b(-t.angle), size: b(t.size || 6 * e), offsetX: b(t.xoffset), offsetY: b(t.yoffset), frame: n, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: o, symbol: c }] }] };
    }
    return a;
  }
  static fromCIMHatchFill(t, e) {
    var a;
    const s = e * (t.separation ?? ks), r = s / 2, i = j(t.lineSymbol);
    (a = i.symbolLayers) == null || a.forEach((h) => {
      var c;
      switch (h.type) {
        case "CIMSolidStroke":
          h.width != null && (h.width *= e), (c = h.effects) == null || c.forEach((u) => {
            u.type === "CIMGeometricEffectDashes" && (u.dashTemplate = u.dashTemplate.map((m) => m * e));
          });
          break;
        case "CIMVectorMarker": {
          h.size != null && (h.size *= e);
          const u = h.markerPlacement;
          u != null && "placementTemplate" in u && (u.placementTemplate = u.placementTemplate.map((m) => m * e));
          break;
        }
      }
    });
    let n = this._getLineSymbolPeriod(i) || Us;
    for (; n < Us; )
      n *= 2;
    const o = n / 2;
    return { type: "CIMVectorMarker", frame: { xmin: -o, xmax: o, ymin: -r, ymax: r }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-o, 0], [o, 0]]] }, symbol: i }], size: s };
  }
  static fetchResources(t, e, s) {
    if (t && e)
      switch (t.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          const r = t.symbolLayers;
          if (!r)
            return;
          for (const i of r)
            switch (po(i, e, s), i.type) {
              case "CIMPictureFill":
              case "CIMHatchFill":
              case "CIMGradientFill":
              case "CIMPictureStroke":
              case "CIMGradientStroke":
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
                "url" in i && i.url && s.push(e.fetchResource(i.url, null));
                break;
              case "CIMVectorMarker": {
                const n = i.markerGraphics;
                if (!n)
                  continue;
                for (const o of n)
                  if (o) {
                    const a = o.symbol;
                    a && H.fetchResources(a, e, s);
                  }
              }
            }
          break;
        }
      }
  }
  static fetchFonts(t, e, s) {
    if (t && e) {
      if ("symbolLayers" in t && t.symbolLayers) {
        for (const r of t.symbolLayers)
          if (r.type === "CIMVectorMarker" && r.markerGraphics)
            for (const i of r.markerGraphics)
              i != null && i.symbol && H.fetchFonts(i.symbol, e, s);
      } else if (t.type === "CIMTextSymbol") {
        const { fontFamilyName: r, fontStyleName: i } = t;
        if (!r || r.toLowerCase() === "calcitewebcoreicons")
          return;
        const { style: n, weight: o } = Ss(i), a = bs(t), h = new dr({ family: r, style: n, weight: o, decoration: a });
        s.push(e.loadFont(h).catch(() => {
          Xe.error(`Unsupported font ${r} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(t) {
    if (t) {
      const e = this._getEffectsRepeat(t.effects);
      if (e)
        return e;
      if (t.symbolLayers) {
        for (const s of t.symbolLayers)
          if (s) {
            const r = this._getEffectsRepeat(s.effects);
            if (r)
              return r;
            switch (s.type) {
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
              case "CIMVectorMarker":
              case "CIMObjectMarker3D":
              case "CIMglTFMarker3D": {
                const i = this._getPlacementRepeat(s.markerPlacement);
                if (i)
                  return i;
              }
            }
          }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(t) {
    if (t) {
      for (const e of t)
        if (e)
          switch (e.type) {
            case "CIMGeometricEffectDashes": {
              const s = e.dashTemplate;
              if (s && s.length) {
                let r = 0;
                for (const i of s)
                  r += i;
                return 1 & s.length && (r *= 2), r;
              }
              break;
            }
            case "CIMGeometricEffectWave":
              return e.period;
            default:
              Xe.error(`unsupported geometric effect type ${e.type}`);
          }
    }
    return 0;
  }
  static _getPlacementRepeat(t) {
    if (t)
      switch (t.type) {
        case "CIMMarkerPlacementAlongLineSameSize":
        case "CIMMarkerPlacementAlongLineRandomSize":
        case "CIMMarkerPlacementAlongLineVariableSize": {
          const e = t.placementTemplate;
          if (e && e.length) {
            let s = 0;
            for (const r of e)
              s += +r;
            return 1 & e.length && (s *= 2), s;
          }
          break;
        }
      }
    return 0;
  }
  static fromCIMInsidePolygon(t) {
    const e = t.markerPlacement, s = { ...t };
    s.markerPlacement = null, s.anchorPoint = null;
    const r = Math.abs(e.stepX), i = Math.abs(e.stepY), n = (e.randomness ?? 100) / 100;
    let o, a, h, c;
    if (e.gridType === "Random") {
      const u = At(ui), m = Math.max(Math.floor(u / r), 1), f = Math.max(Math.floor(u / i), 1);
      o = m * r / 2, a = f * i / 2, h = 2 * a;
      const _ = new si(e.seed), p = n * r / 1.5, d = n * i / 1.5;
      c = [];
      for (let g = 0; g < m; g++)
        for (let y = 0; y < f; y++) {
          const x = g * r - o + p * (0.5 - _.getFloat()), P = y * i - a + d * (0.5 - _.getFloat());
          c.push({ x, y: P }), g === 0 && c.push({ x: x + 2 * o, y: P }), y === 0 && c.push({ x, y: P + 2 * a });
        }
    } else
      e.shiftOddRows === !0 ? (o = r / 2, a = i, h = 2 * i, c = [{ x: -o, y: 0 }, { x: o, y: 0 }, { x: 0, y: a }, { x: 0, y: -a }]) : (o = r / 2, a = i / 2, h = i, c = [{ x: -r, y: 0 }, { x: 0, y: -i }, { x: -r, y: -i }, { x: 0, y: 0 }, { x: r, y: 0 }, { x: 0, y: i }, { x: r, y: i }, { x: -r, y: i }, { x: r, y: -i }]);
    return { type: "CIMVectorMarker", frame: { xmin: -o, xmax: o, ymin: -a, ymax: a }, markerGraphics: c.map((u) => ({ type: "CIMMarkerGraphic", geometry: u, symbol: { type: "CIMPointSymbol", symbolLayers: [s] } })), size: h };
  }
  static getSize(t) {
    if (t)
      switch (t.type) {
        case "CIMTextSymbol":
          return t.height;
        case "CIMPointSymbol": {
          let e = 0;
          if (t.symbolLayers) {
            for (const s of t.symbolLayers)
              if (s)
                switch (s.type) {
                  case "CIMCharacterMarker":
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                  case "CIMObjectMarker3D":
                  case "CIMglTFMarker3D": {
                    const r = s.size;
                    r != null && r > e && (e = r);
                    break;
                  }
                }
          }
          return e;
        }
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          let e = 0;
          if (t.symbolLayers) {
            for (const s of t.symbolLayers)
              if (s)
                switch (s.type) {
                  case "CIMSolidStroke":
                  case "CIMPictureStroke":
                  case "CIMGradientStroke": {
                    const r = s.width;
                    r != null && r > e && (e = r);
                    break;
                  }
                  case "CIMCharacterMarker":
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                  case "CIMObjectMarker3D":
                  case "CIMglTFMarker3D":
                    if (s.markerPlacement && Ir(s.markerPlacement)) {
                      const r = s.size;
                      r != null && r > e && (e = r);
                    }
                }
          }
          return e;
        }
      }
  }
  static getMarkerScaleRatio(t) {
    if (t && t.type === "CIMVectorMarker" && t.scaleSymbolsProportionally !== !1 && t.frame && t.size != null) {
      const e = t.frame.ymax - t.frame.ymin;
      return t.size / e;
    }
    return 1;
  }
}
class T {
  static findApplicableOverrides(t, e, s) {
    if (t && e) {
      if (t.primitiveName) {
        let r = !1;
        for (const i of s)
          if (i.primitiveName === t.primitiveName) {
            r = !0;
            break;
          }
        if (!r)
          for (const i of e)
            i.primitiveName === t.primitiveName && s.push(i);
      }
      switch (t.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (t.effects)
            for (const r of t.effects)
              T.findApplicableOverrides(r, e, s);
          if (t.symbolLayers)
            for (const r of t.symbolLayers)
              T.findApplicableOverrides(r, e, s);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
        case "CIMVectorMarker":
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          if (t.effects)
            for (const r of t.effects)
              T.findApplicableOverrides(r, e, s);
          if (t.markerPlacement && T.findApplicableOverrides(t.markerPlacement, e, s), t.type === "CIMVectorMarker") {
            if (t.markerGraphics)
              for (const r of t.markerGraphics)
                T.findApplicableOverrides(r, e, s), T.findApplicableOverrides(r.symbol, e, s);
          } else
            t.type === "CIMCharacterMarker" ? T.findApplicableOverrides(t.symbol, e, s) : t.type === "CIMHatchFill" ? T.findApplicableOverrides(t.lineSymbol, e, s) : t.type === "CIMPictureMarker" && T.findApplicableOverrides(t.animatedSymbolProperties, e, s);
      }
    }
  }
  static findEffectOverrides(t, e, s) {
    if (!e || !t)
      return;
    const r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i], o = n == null ? void 0 : n.primitiveName;
      if (o) {
        let a = !1;
        for (const h of s)
          if (h.primitiveName === o) {
            a = !0;
            break;
          }
        if (!a)
          for (const h of e)
            h.primitiveName === o && s.push(h);
      }
    }
  }
  static async resolveSymbolOverrides(t, e, s, r, i, n, o) {
    if (!t || !t.symbol)
      return null;
    let { symbol: a, primitiveOverrides: h } = t;
    const c = !!h;
    if (!c && !r)
      return a;
    a = j(a);
    let u = !0;
    if (e || (e = { attributes: {} }, u = !1), c) {
      if (u || (h = h.filter((m) => {
        var f;
        return !((f = m.valueExpressionInfo) != null && f.expression.includes("$feature"));
      })), o || (h = h.filter((m) => {
        var f;
        return !((f = m.valueExpressionInfo) != null && f.expression.includes("$view"));
      })), h.length > 0) {
        const m = Or(e.attributes);
        await T.evaluateOverrides(h, e, { spatialReference: s, fields: m, geometryType: i }, n, o);
      }
      T.applyOverrides(a, h);
    }
    return r && T.applyDictionaryTextOverrides(a, e, r), a;
  }
  static async evaluateOverrides(t, e, s, r, i) {
    if (!e)
      return;
    let n;
    for (const o of t) {
      const a = o.valueExpressionInfo;
      if (a && s && s.geometryType) {
        n || (n = []), o.value = void 0;
        const h = ni(a.expression, s.spatialReference, s.fields).then((c) => {
          o.value = Nt(c, e, { $view: i }, s.geometryType, r);
        });
        n.push(h);
      }
    }
    n !== void 0 && n.length > 0 && await Promise.all(n);
  }
  static applyDictionaryTextOverrides(t, e, s, r = "Normal") {
    if (t && t.type)
      switch (t.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
        case "CIMTextSymbol":
          {
            const i = t.symbolLayers;
            if (!i)
              return;
            for (const n of i)
              n && n.type === "CIMVectorMarker" && T.applyDictionaryTextOverrides(n, e, s, t.type === "CIMTextSymbol" ? t.textCase : r);
          }
          break;
        case "CIMVectorMarker":
          {
            const i = t.markerGraphics;
            if (!i)
              return;
            for (const n of i)
              n && T.applyDictionaryTextOverrides(n, e, s);
          }
          break;
        case "CIMMarkerGraphic": {
          const i = t.textString;
          if (i && i.includes("[")) {
            const n = Tr(i, s);
            t.textString = $r(e, n, r);
          }
        }
      }
  }
  static applyOverrides(t, e, s, r) {
    if (t.primitiveName) {
      for (const i of e)
        if (i.primitiveName === t.primitiveName) {
          const n = mo(i.propertyName);
          if (r && r.push({ cim: t, nocapPropertyName: n, value: t[n] }), i.expression && (i.value = T.toValue(i.propertyName, i.expression)), s) {
            let o = !1;
            for (const a of s)
              a.primitiveName === t.primitiveName && (o = !0);
            o || s.push(i);
          }
          i.value != null && (t[n] = i.value);
        }
    }
    switch (t.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (t.effects)
          for (const i of t.effects)
            T.applyOverrides(i, e, s, r);
        if (t.symbolLayers)
          for (const i of t.symbolLayers)
            T.applyOverrides(i, e, s, r);
        break;
      case "CIMTextSymbol":
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
      case "CIMVectorMarker":
        if (t.effects)
          for (const i of t.effects)
            T.applyOverrides(i, e, s, r);
        if (t.type === "CIMVectorMarker" && t.markerGraphics)
          for (const i of t.markerGraphics)
            T.applyOverrides(i, e, s, r), T.applyOverrides(i.symbol, e, s, r);
    }
  }
  static restoreOverrides(t) {
    for (const e of t)
      e.cim[e.nocapPropertyName] = e.value;
  }
  static buildOverrideKey(t) {
    let e = "";
    for (const s of t)
      s.value !== void 0 && (e += `${s.primitiveName}${s.propertyName}${JSON.stringify(s.value)}`);
    return e;
  }
  static toValue(t, e) {
    if (t === "DashTemplate")
      return e.split(" ").map((s) => Number(s));
    if (t === "Color") {
      const s = new oi(e).toRgba();
      return s[3] *= 255, s;
    }
    return e;
  }
}
const Zi = (l) => {
  if (!l)
    return ct.Butt;
  switch (l) {
    case "butt":
      return ct.Butt;
    case "square":
      return ct.Square;
    case "round":
      return ct.Round;
  }
}, Ki = (l) => {
  if (!l)
    return ut.Miter;
  switch (l) {
    case "miter":
      return ut.Miter;
    case "round":
      return ut.Round;
    case "bevel":
      return ut.Bevel;
  }
}, oo = (l) => {
  if (l == null)
    return "Center";
  switch (l) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
}, ao = (l) => {
  if (l == null)
    return "Center";
  switch (l) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
}, D = (l) => {
  if (!l)
    return [0, 0, 0, 0];
  const { r: t, g: e, b: s, a: r } = l;
  return [t, e, s, 255 * r];
}, ho = (l, t) => {
  const e = lo(t), s = co(l);
  return e && s ? `${e}-${s}` : `${e}${s}`;
}, lo = (l) => {
  if (!l)
    return "";
  switch (l.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
}, co = (l) => {
  if (!l)
    return "";
  switch (l.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
}, Qi = (l, t) => {
  const e = t === "butt";
  switch (l) {
    case "dash":
    case "esriSLSDash":
      return e ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return e ? [4, 3, 1, 3] : [3, 4, 0, 4];
    case "dot":
    case "esriSLSDot":
      return e ? [1, 3] : [0, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return e ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return e ? [8, 3, 1, 3] : [7, 4, 0, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return e ? [8, 3, 1, 3, 1, 3] : [7, 4, 0, 4, 0, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return e ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return e ? [4, 1, 1, 1] : [3, 2, 0, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return e ? [4, 1, 1, 1, 1, 1] : [3, 2, 0, 2, 0, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return e ? [1, 1] : [0, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return Xe.error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return Xe.error(`Tried to rasterize SLS, but found an unexpected style: ${l}!`), [0, 0];
  }
};
function uo(l) {
  return l.symbolLayers !== void 0;
}
const qs = (l) => {
  let s, r;
  const i = l;
  if (i === "circle" || i === "esriSMSCircle") {
    let o = Math.acos(0.995), a = Math.ceil(ji / o / 4);
    a === 0 && (a = 1), o = io / a, a *= 4;
    const h = [];
    h.push([50, 0]);
    for (let c = 1; c < a; c++)
      h.push([50 * Math.cos(c * o), -50 * Math.sin(c * o)]);
    h.push([50, 0]), s = { rings: [h] }, r = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 };
  } else if (i === "cross" || i === "esriSMSCross")
    s = { rings: [[[0, 50], [0, 0], [50, 0], [50, -0], [0, -0], [0, -50], [-0, -50], [-0, -0], [-50, -0], [-50, 0], [-0, 0], [-0, 50], [0, 50]]] }, r = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 };
  else if (i === "diamond" || i === "esriSMSDiamond")
    s = { rings: [[[-50, 0], [0, 50], [50, 0], [0, -50], [-50, 0]]] }, r = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 };
  else if (i === "square" || i === "esriSMSSquare")
    s = { rings: [[[-50, -50], [-50, 50], [50, 50], [50, -50], [-50, -50]]] }, r = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 };
  else if (i === "x" || i === "esriSMSX")
    s = { rings: [[[0, 0], [50, 50], [50, 50], [0, 0], [50, -50], [50, -50], [0, -0], [-50, -50], [-50, -50], [-0, 0], [-50, 50], [-50, 50], [0, 0]]] }, r = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 };
  else if (i === "triangle" || i === "esriSMSTriangle") {
    const n = 57.735026918962575, o = -n, a = 2 / 3 * 100, h = a - 100;
    s = { rings: [[[o, h], [0, a], [n, h], [o, h]]] }, r = { xmin: o, ymin: h, xmax: n, ymax: a };
  } else
    i === "arrow" && (s = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, r = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
  return [r, s];
}, fo = (l) => l === "vertical" || l === "horizontal" || l === "cross" || l === "esriSFSCross" || l === "esriSFSVertical" || l === "esriSFSHorizontal", mo = (l) => l && l.charAt(0).toLowerCase() + l.substr(1);
function po(l, t, e) {
  if (!(!l.effects || t.geometryEngine != null)) {
    if (t.geometryEnginePromise)
      return void e.push(t.geometryEnginePromise);
    Lr(l.effects) && (t.geometryEnginePromise = zr(), e.push(t.geometryEnginePromise), t.geometryEnginePromise.then((s) => t.geometryEngine = s));
  }
}
function js(l) {
  if (!l)
    return null;
  let t = null;
  const { cap: e, color: s, join: r, miterLimit: i, style: n, width: o } = l;
  return n !== "solid" && n !== "none" && n !== "esriSLSSolid" && n !== "esriSLSNull" && (t = [{ type: "CIMGeometricEffectDashes", dashTemplate: Qi(n, e), lineDashEnding: "NoConstraint", scaleDash: !0, offsetAlongLine: null }]), { type: "CIMSolidStroke", color: n !== "esriSLSNull" && n !== "none" ? D(s) : [0, 0, 0, 0], capStyle: Zi(e), joinStyle: Ki(r), miterLimit: i, width: o, effects: t };
}
function _o(l) {
  var t;
  if (!l)
    return null;
  switch (l.type) {
    case "CIMPointSymbol": {
      const e = l.symbolLayers;
      return e && e.length === 1 ? _o(e[0]) : null;
    }
    case "CIMVectorMarker": {
      const e = l.markerGraphics;
      if (!e || e.length !== 1)
        return null;
      const s = e[0];
      if (!s)
        return null;
      const r = s.geometry;
      if (!r)
        return null;
      const i = s.symbol;
      return !i || i.type !== "CIMPolygonSymbol" && i.type !== "CIMLineSymbol" || (t = i.symbolLayers) != null && t.some((n) => !!n.effects) ? null : { geom: r, asFill: i.type === "CIMPolygonSymbol" };
    }
    case "sdf":
      return { geom: l.geom, asFill: l.asFill };
  }
  return null;
}
function go(l) {
  return l ? l.rings ? l.rings : l.paths ? l.paths : l.xmin !== void 0 && l.ymin !== void 0 && l.xmax !== void 0 && l.ymax !== void 0 ? [[[l.xmin, l.ymin], [l.xmin, l.ymax], [l.xmax, l.ymax], [l.xmax, l.ymin], [l.xmin, l.ymin]]] : null : null;
}
function yo(l) {
  let t = 1 / 0, e = -1 / 0, s = 1 / 0, r = -1 / 0;
  for (const i of l)
    for (const n of i)
      n[0] < t && (t = n[0]), n[0] > e && (e = n[0]), n[1] < s && (s = n[1]), n[1] > r && (r = n[1]);
  return new Xi(t, s, e - t, r - s);
}
function Zs(l) {
  let t = 1 / 0, e = -1 / 0, s = 1 / 0, r = -1 / 0;
  for (const i of l)
    for (const n of i)
      n[0] < t && (t = n[0]), n[0] > e && (e = n[0]), n[1] < s && (s = n[1]), n[1] > r && (r = n[1]);
  return [t, s, e, r];
}
function Ks(l) {
  return l ? l.rings ? Zs(l.rings) : l.paths ? Zs(l.paths) : J(l) ? [l.xmin, l.ymin, l.xmax, l.ymax] : null : null;
}
function Qs(l, t, e, s, r) {
  const [i, n, o, a] = l;
  if (o < i || a < n)
    return [0, 0, 0];
  const h = o - i, c = a - n, u = 128, m = fi, f = Math.floor(0.5 * (0.5 * u - m)), _ = (u - 2 * (f + m)) / Math.max(h, c), p = Math.round(h * _) + 2 * f, d = Math.round(c * _) + 2 * f;
  let g = 1;
  t && (g = d / _ / (t.ymax - t.ymin));
  let y = 0, x = 0, P = 1;
  s && (r ? t && e && t.ymax - t.ymin > 0 && (P = (t.xmax - t.xmin) / (t.ymax - t.ymin), y = s.x / (e * P), x = s.y / e) : (y = s.x, x = s.y)), t && (y = 0.5 * (t.xmax + t.xmin) + y * (t.xmax - t.xmin), x = 0.5 * (t.ymax + t.ymin) + x * (t.ymax - t.ymin)), y -= i, x -= n, y *= _, x *= _, y += f, x += f;
  let M = y / p - 0.5, S = x / d - 0.5;
  return r && e && (M *= e * P, S *= e), [g, M, S];
}
function Ea(l) {
  const t = go(l.geom), e = yo(t), s = 128, r = fi, i = Math.floor(0.5 * (0.5 * s - r)), n = (s - 2 * (i + r)) / Math.max(e.width, e.height), o = Math.round(e.width * n) + 2 * i, a = Math.round(e.height * n) + 2 * i, h = [];
  for (const u of t)
    if (u && u.length > 1) {
      const m = [];
      for (const f of u) {
        let [_, p] = f;
        _ -= e.x, p -= e.y, _ *= n, p *= n, _ += i - 0.5, p += i - 0.5, l.asFill ? m.push([_, p]) : m.push([Math.round(_), Math.round(p)]);
      }
      if (l.asFill) {
        const f = m.length - 1;
        m[0][0] === m[f][0] && m[0][1] === m[f][1] || m.push(m[0]);
      }
      h.push(m);
    }
  const c = Po(h, o, a, i);
  return l.asFill && xo(h, o, a, i, c), [Mo(c, i), o, a];
}
function Po(l, t, e, s) {
  const r = t * e, i = new Array(r), n = s * s + 1;
  for (let o = 0; o < r; ++o)
    i[o] = n;
  for (const o of l) {
    const a = o.length;
    for (let h = 1; h < a; ++h) {
      const c = o[h - 1], u = o[h];
      let m, f, _, p;
      c[0] < u[0] ? (m = c[0], f = u[0]) : (m = u[0], f = c[0]), c[1] < u[1] ? (_ = c[1], p = u[1]) : (_ = u[1], p = c[1]);
      let d = Math.floor(m) - s, g = Math.floor(f) + s, y = Math.floor(_) - s, x = Math.floor(p) + s;
      d < 0 && (d = 0), g > t && (g = t), y < 0 && (y = 0), x > e && (x = e);
      const P = u[0] - c[0], M = u[1] - c[1], S = P * P + M * M;
      for (let v = d; v < g; v++)
        for (let C = y; C < x; C++) {
          let I, w, z = (v - c[0]) * P + (C - c[1]) * M;
          z < 0 ? (I = c[0], w = c[1]) : z > S ? (I = u[0], w = u[1]) : (z /= S, I = c[0] + z * P, w = c[1] + z * M);
          const F = (v - I) * (v - I) + (C - w) * (C - w), O = (e - C - 1) * t + v;
          F < i[O] && (i[O] = F);
        }
    }
  }
  for (let o = 0; o < r; ++o)
    i[o] = Math.sqrt(i[o]);
  return i;
}
function xo(l, t, e, s, r) {
  for (const i of l) {
    const n = i.length;
    for (let o = 1; o < n; ++o) {
      const a = i[o - 1], h = i[o];
      let c, u, m, f;
      a[0] < h[0] ? (c = a[0], u = h[0]) : (c = h[0], u = a[0]), a[1] < h[1] ? (m = a[1], f = h[1]) : (m = h[1], f = a[1]);
      let _ = Math.floor(c), p = Math.floor(u) + 1, d = Math.floor(m), g = Math.floor(f) + 1;
      _ < s && (_ = s), p > t - s && (p = t - s), d < s && (d = s), g > e - s && (g = e - s);
      for (let y = d; y < g; ++y) {
        if (a[1] > y == h[1] > y)
          continue;
        const x = (e - y - 1) * t;
        for (let P = _; P < p; ++P)
          P < (h[0] - a[0]) * (y - a[1]) / (h[1] - a[1]) + a[0] && (r[x + P] = -r[x + P]);
        for (let P = s; P < _; ++P)
          r[x + P] = -r[x + P];
      }
    }
  }
}
function Mo(l, t) {
  const e = 2 * t, s = l.length, r = new Uint8Array(4 * s);
  for (let i = 0; i < s; ++i) {
    const n = 0.5 - l[i] / e;
    Yr(n, r, 4 * i);
  }
  return r;
}
function bo(l, t) {
  let e;
  if (typeof l == "string")
    e = N(l + `-seed(${t})`);
  else {
    let s = 12;
    e = l ^ t;
    do
      e = 107 * (e >> 8 ^ e) + s | 0;
    while (--s != 0);
  }
  return (1 + e / (1 << 31)) / 2;
}
function So(l) {
  return Math.floor(bo(l, Co) * wo);
}
const Co = 53290320, wo = 10, vo = 96 / 72;
let ti = class {
  static executeEffects(t, e, s, r) {
    const i = vo, n = De(t);
    let o = new _s(e);
    for (const a of t) {
      const h = ds(a);
      h && (o = h.execute(o, a, i, s, r, n));
    }
    return o;
  }
  static applyEffects(t, e, s) {
    if (!t)
      return e;
    const r = De(t);
    let i, n = new _s($.fromJSONCIM(e));
    for (const h of t) {
      const c = ds(h);
      c && (n = c.execute(n, h, 1, null, s, r));
    }
    const o = [];
    let a = null;
    for (; i = n.next(); )
      o.push(...pe(i)), a = i.geometryType;
    return o.length === 0 || a === null ? null : a === "esriGeometryPolygon" ? { rings: o } : { paths: o };
  }
};
const ei = 0.05;
function ko(l) {
  return Math.max(Math.round(l / ei), 1) * ei;
}
const Io = /* @__PURE__ */ new Set(["StartTimeOffset", "Duration", "RepeatDelay"]);
function Lo(l, t) {
  return Io.has(t) ? ko(l) : l;
}
const zo = _e.getLogger("geoscene.symbols.cim.cimAnalyzer");
function rs(l) {
  switch (l) {
    case "Butt":
      return Ue.BUTT;
    case "Square":
      return Ue.SQUARE;
    default:
      return Ue.ROUND;
  }
}
function ns(l) {
  switch (l) {
    case "Bevel":
      return qe.BEVEL;
    case "Miter":
      return qe.MITER;
    default:
      return qe.ROUND;
  }
}
function Oo(l) {
  const t = l.markerPlacement;
  return t && t.angleToLine ? Ee.MAP : Ee.SCREEN;
}
class Ra {
  constructor(t, e) {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [], this._resourceManager = t, this._info = e;
  }
  async analyzeSymbolReference(t, e, s) {
    if (this._cimLayers = s ?? [], !t)
      return this._cimLayers;
    if (t.primitiveOverrides) {
      this._primitiveOverrides = t.primitiveOverrides, this._poMap = {};
      const n = [], o = this._info;
      for (const a of this._primitiveOverrides) {
        const h = a.valueExpressionInfo;
        if (h && o) {
          const c = h.expression, u = ni(c, o.spatialReference, o.fields).then((m) => {
            m != null && this._setPoMap(a.primitiveName, a.propertyName, m);
          });
          n.push(u);
        } else
          a.value != null && this._setPoMap(a.primitiveName, a.propertyName, a.value);
        n.length > 0 && await Promise.all(n);
      }
    }
    const r = t.symbol, i = [];
    return H.fetchResources(r, this._resourceManager, i), i.length > 0 && await Promise.all(i), this._analyzeSymbol(r, e), this._cimLayers;
  }
  _analyzeSymbol(t, e) {
    switch (t == null ? void 0 : t.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this._analyzeMultiLayerSymbol(t, e, 1, 0, 0, 0);
    }
  }
  _analyzeMultiLayerSymbol(t, e, s, r, i, n) {
    const o = t == null ? void 0 : t.symbolLayers;
    if (!o)
      return;
    const a = t.effects;
    let h = Ee.SCREEN;
    const c = H.getSize(t) ?? 0;
    t.type === "CIMPointSymbol" && t.angleAlignment === "Map" && (h = Ee.MAP);
    const u = t.type === "CIMPolygonSymbol";
    let m = o.length;
    for (; m--; ) {
      const f = o[m];
      if (!f || f.enable === !1)
        continue;
      let _;
      a && a.length && (_ = [...a]);
      const p = f.effects;
      p && p.length && (a ? _.push(...p) : _ = [...p]);
      const d = [];
      let g;
      T.findEffectOverrides(_, this._primitiveOverrides, d), g = d.length > 0 ? this._createEffectsOverrideFunction(_, d) : _;
      const y = [];
      switch (T.findApplicableOverrides(f, this._primitiveOverrides, y), f.type) {
        case "CIMSolidFill":
          this._analyzeSolidFill(f, g);
          break;
        case "CIMPictureFill":
          this._analyzePictureFill(f, g);
          break;
        case "CIMHatchFill":
          this._analyzeHatchFill(f, g);
          break;
        case "CIMGradientFill":
          this._analyzeGradientFill(f, g);
          break;
        case "CIMSolidStroke":
          this._analyzeSolidStroke(f, g, u, c);
          break;
        case "CIMPictureStroke":
          this._analyzePictureStroke(f, g, u, c);
          break;
        case "CIMGradientStroke":
          this._analyzeGradientStroke(f, g, u, c);
          break;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker": {
          t.type === "CIMLineSymbol" && (h = Oo(f));
          const x = [], P = f.primitiveName;
          P && x.push(P), this._analyzeMarker(f, g, null, x, h, c, 1, e, s, r, i, n);
          break;
        }
        default:
          zo.error("Cannot analyze CIM layer", f.type);
      }
    }
  }
  _analyzeSolidFill(t, e) {
    const s = t.primitiveName, r = V(t.color), [i, n] = this._analyzePrimitiveOverrides(s, e, null, null), o = N(JSON.stringify(t) + n).toString();
    this._cimLayers.push({ type: "fill", templateHash: o, materialHash: i ? () => o : o, cim: t, materialOverrides: null, colorLocked: !!t.colorLocked, color: this._createOverrideFunction(s, "Color", r, X), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: e, applyRandomOffset: !1, sampleAlphaOnly: !0 });
  }
  _analyzePictureFill(t, e) {
    const s = t.primitiveName, r = be(t), [i, n] = this._analyzePrimitiveOverrides(s, e, null, null), o = N(JSON.stringify(t) + n).toString(), a = N(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(), h = b(t.height, qn);
    let c = b(t.scaleX, 1);
    if ("width" in t && typeof t.width == "number") {
      const u = t.width;
      let m = 1;
      const f = this._resourceManager.getResource(t.url);
      f != null && (m = f.width / f.height), c /= m * (h / u);
    }
    this._cimLayers.push({ type: "fill", templateHash: o, materialHash: i ? () => a : a, cim: t, materialOverrides: null, colorLocked: !!t.colorLocked, effects: e, color: this._createOverrideFunction(s, "TintColor", r, X), height: this._createOverrideFunction(s, "Height", h), scaleX: this._createOverrideFunction(s, "ScaleX", c), angle: this._createOverrideFunction(s, "Rotation", b(t.rotation)), offsetX: this._createOverrideFunction(s, "OffsetX", b(t.offsetX)), offsetY: this._createOverrideFunction(s, "OffsetY", b(t.offsetY)), url: t.url, applyRandomOffset: !1, sampleAlphaOnly: !1 });
  }
  _analyzeHatchFill(t, e) {
    var m, f;
    const s = t.primitiveName, r = this._analyzeMaterialOverrides(s, ["Rotation", "OffsetX", "OffsetY"]);
    let [i, n] = this._analyzePrimitiveOverrides(s, e, null, null);
    const o = N(JSON.stringify(t) + n).toString(), a = N(`${t.separation}${JSON.stringify(t.lineSymbol)}`).toString();
    let h = { r: 255, g: 255, b: 255, a: 1 }, c = !1;
    const u = (f = (m = t.lineSymbol) == null ? void 0 : m.symbolLayers) == null ? void 0 : f.find((_) => {
      var p;
      return _.type === "CIMSolidStroke" && ((p = this._poMap[_.primitiveName]) == null ? void 0 : p.Color) != null;
    });
    if (u) {
      h = V(u.color), h = this._createOverrideFunction(u.primitiveName, "Color", h, X);
      const _ = typeof h == "function";
      i = i || _, c = u.color != null || _;
    }
    this._cimLayers.push({ type: "fill", templateHash: o, materialHash: i && r ? this._createMaterialHashFunction(a, r) : a, cim: t, materialOverrides: r, colorLocked: !!t.colorLocked, effects: e, color: h, height: this._createOverrideFunction(s, "Separation", b(t.separation, ks)), scaleX: 1, angle: this._createOverrideFunction(s, "Rotation", b(t.rotation)), offsetX: this._createOverrideFunction(s, "OffsetX", b(t.offsetX)), offsetY: this._createOverrideFunction(s, "OffsetY", b(t.offsetY)), applyRandomOffset: !1, sampleAlphaOnly: !0, hasUnresolvedReplacementColor: !c });
  }
  _analyzeGradientFill(t, e) {
    const s = t.primitiveName, [r, i] = this._analyzePrimitiveOverrides(s, e, null, null), n = N(JSON.stringify(t) + i).toString();
    this._cimLayers.push({ type: "fill", templateHash: n, materialHash: r ? () => n : n, cim: t, materialOverrides: null, colorLocked: !!t.colorLocked, effects: e, color: { r: 128, g: 128, b: 128, a: 1 }, height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, applyRandomOffset: !1, sampleAlphaOnly: !1 });
  }
  _analyzeSolidStroke(t, e, s, r) {
    const i = t.primitiveName, n = V(t.color), o = b(t.width, vt), a = rs(t.capStyle), h = ns(t.joinStyle), c = t.miterLimit, [u, m] = this._analyzePrimitiveOverrides(i, e, null, null), f = N(JSON.stringify(t) + m).toString();
    let _, p;
    if (e && e instanceof Array && e.length > 0) {
      const d = e[e.length - 1];
      if (d.type === "CIMGeometricEffectDashes" && d.lineDashEnding === "NoConstraint" && d.offsetAlongLine === null) {
        const g = (e = [...e]).pop();
        _ = g.dashTemplate, p = g.scaleDash;
      }
    }
    this._cimLayers.push({ type: "line", templateHash: f, materialHash: u ? () => f : f, cim: t, materialOverrides: null, isOutline: s, colorLocked: !!t.colorLocked, effects: e, color: this._createOverrideFunction(i, "Color", n, X), width: this._createOverrideFunction(i, "Width", o), cap: this._createOverrideFunction(i, "CapStyle", a), join: this._createOverrideFunction(i, "JoinStyle", h), miterLimit: c && this._createOverrideFunction(i, "MiterLimit", c), referenceWidth: r, zOrder: os(t.name), dashTemplate: _, scaleDash: p, sampleAlphaOnly: !0 });
  }
  _analyzePictureStroke(t, e, s, r) {
    const i = N(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(), n = t.primitiveName, o = be(t), a = b(t.width, vt), h = rs(t.capStyle), c = ns(t.joinStyle), u = t.miterLimit, [m, f] = this._analyzePrimitiveOverrides(n, e, null, null), _ = N(JSON.stringify(t) + f).toString();
    this._cimLayers.push({ type: "line", templateHash: _, materialHash: m ? () => i : i, cim: t, materialOverrides: null, isOutline: s, colorLocked: !!t.colorLocked, effects: e, color: this._createOverrideFunction(n, "TintColor", o, X), width: this._createOverrideFunction(n, "Width", a), cap: this._createOverrideFunction(n, "CapStyle", h), join: this._createOverrideFunction(n, "JoinStyle", c), miterLimit: u && this._createOverrideFunction(n, "MiterLimit", u), referenceWidth: r, zOrder: os(t.name), dashTemplate: null, scaleDash: !1, url: t.url, sampleAlphaOnly: !1 });
  }
  _analyzeGradientStroke(t, e, s, r) {
    const i = t.primitiveName, n = b(t.width, vt), o = rs(t.capStyle), a = ns(t.joinStyle), h = t.miterLimit, [c, u] = this._analyzePrimitiveOverrides(i, e, null, null), m = N(JSON.stringify(t) + u).toString();
    this._cimLayers.push({ type: "line", templateHash: m, materialHash: c ? () => m : m, cim: t, materialOverrides: null, isOutline: s, colorLocked: !!t.colorLocked, effects: e, color: { r: 128, g: 128, b: 128, a: 1 }, width: this._createOverrideFunction(i, "Width", n), cap: this._createOverrideFunction(i, "CapStyle", o), join: this._createOverrideFunction(i, "JoinStyle", a), miterLimit: h && this._createOverrideFunction(i, "MiterLimit", h), referenceWidth: r, zOrder: os(t.name), dashTemplate: null, scaleDash: !1, sampleAlphaOnly: !1 });
  }
  _analyzeMarker(t, e, s, r, i, n, o, a, h, c, u, m, f = !1) {
    if (this._analyzeMarkerInsidePolygon(t, e))
      return;
    const _ = b(t.size, Re), p = b(t.rotation), d = b(t.offsetX), g = b(t.offsetY);
    let y = this._createOverrideFunction(t.primitiveName, "Size", _), x = this._createOverrideFunction(t.primitiveName, "Rotation", p), P = this._createOverrideFunction(t.primitiveName, "OffsetX", d), M = this._createOverrideFunction(t.primitiveName, "OffsetY", g);
    y = this._transformSize(y, o), x = this._transformRotation(x, !!t.rotateClockwise, c);
    const S = this._transformOffsetX(P, M, c, o, u), v = this._transformOffsetY(P, M, c, o, m);
    switch (P = S, M = v, t.type) {
      case "CIMPictureMarker":
        this._analyzePictureMarker(t, e, s, r, i, n, y, x, P, M, t.colorLocked || f);
        break;
      case "CIMVectorMarker":
        this._analyzeVectorMarker(t, e, s, r, i, n, o, a, y, x, P, M, t.colorLocked || f);
    }
  }
  _analyzeMarkerInsidePolygon(t, e) {
    const { markerPlacement: s, type: r } = t;
    if (!s || s.type !== "CIMMarkerPlacementInsidePolygon")
      return !1;
    if (r === "CIMVectorMarker" || r === "CIMPictureMarker") {
      const d = t.primitiveName;
      if (d) {
        const [y, x] = this._analyzePrimitiveOverrides([d], e, null, null);
        if (y)
          return !1;
      }
      const g = s.primitiveName;
      if (g) {
        const [y, x] = this._analyzePrimitiveOverrides([g], e, null, null);
        if (y)
          return !1;
      }
      if (r === "CIMVectorMarker") {
        const { markerGraphics: y } = t;
        if (y)
          for (const x of y) {
            const { symbol: P } = x;
            if ((P == null ? void 0 : P.type) === "CIMPolygonSymbol" && P.symbolLayers) {
              const { symbolLayers: M } = P;
              for (const S of M)
                if (S.type === "CIMSolidStroke")
                  return !1;
            }
          }
      } else {
        const { animatedSymbolProperties: y } = t;
        if (y)
          return !1;
      }
    }
    const i = s, n = Math.abs(i.stepX), o = Math.abs(i.stepY);
    if (n === 0 || o === 0)
      return !0;
    const a = ["Rotation", "OffsetX", "OffsetY"], h = this._primitiveOverrides.filter((d) => d.primitiveName !== t.primitiveName || !a.includes(d.propertyName)), c = "url" in t && typeof t.url == "string" ? t.url : void 0, u = N(JSON.stringify(t)).toString();
    let m, f, _ = null;
    if (s.gridType === "Random") {
      const d = At(ui), g = Math.max(Math.floor(d / n), 1), y = Math.max(Math.floor(d / o), 1);
      m = o * y, _ = (x) => x ? x * y : 0, f = g * n / m;
    } else
      s.shiftOddRows ? (m = 2 * o, _ = (d) => d ? 2 * d : 0, f = n / o * 0.5) : (m = o, _ = null, f = n / o);
    const p = be(t);
    return this._cimLayers.push({ type: "fill", templateHash: u, materialHash: u, cim: t, materialOverrides: h, colorLocked: !!t.colorLocked, effects: e, color: p, height: this._createOverrideFunction(i.primitiveName, "StepY", m, _), scaleX: f, angle: i.gridAngle, offsetX: b(i.offsetX), offsetY: b(i.offsetY), url: c, applyRandomOffset: s.gridType === "Random", sampleAlphaOnly: !c, hasUnresolvedReplacementColor: !0 }), !0;
  }
  _analyzePictureMarker(t, e, s, r, i, n, o, a, h, c, u) {
    let m = b(t.scaleX, 1);
    const f = be(t), _ = N(`${t.url}${JSON.stringify(t.colorSubstitutions)}${JSON.stringify(t.animatedSymbolProperties)}`).toString();
    s || (s = this._createMarkerPlacementOverrideFunction(t.markerPlacement));
    const p = this._createAnimatedSymbolPropertiesOverrideFunction(t.animatedSymbolProperties), [d, g] = this._analyzePrimitiveOverrides(r, e, s, p), y = N(JSON.stringify(t) + g).toString(), x = t.anchorPoint ?? { x: 0, y: 0 };
    if ("width" in t && typeof t.width == "number") {
      const S = t.width;
      let v = 1;
      const C = this._resourceManager.getResource(t.url);
      C != null && (v = C.width / C.height), m /= v * (b(t.size) / S);
    }
    function P(S, v) {
      return p != null ? As(p, S, v) : null;
    }
    const M = t.animatedSymbolProperties && t.animatedSymbolProperties.randomizeStartTime === !0 ? (S, v, C, I) => {
      const w = So(I ?? 0), z = P(S, v);
      return _ + `-MATERIALGROUP(${w})-ASP(${JSON.stringify(z)})`;
    } : d ? (S, v) => {
      const C = P(S, v);
      return _ + `-ASP(${JSON.stringify(C)})`;
    } : _;
    this._cimLayers.push({ type: "marker", templateHash: y, materialHash: M, cim: t, materialOverrides: null, colorLocked: !!t.colorLocked || !!u, effects: e, scaleSymbolsProportionally: !1, alignment: i, size: o, scaleX: this._createOverrideFunction(t.primitiveName, "ScaleX", m), rotation: a, offsetX: h, offsetY: c, color: this._createOverrideFunction(t.primitiveName, "TintColor", f, X), anchorPoint: { x: x.x, y: x.y }, isAbsoluteAnchorPoint: t.anchorPointUnits !== "Relative", outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, frameHeight: 0, rotateClockwise: !1, referenceSize: n, sizeRatio: 1, markerPlacement: s, url: t.url, animatedSymbolProperties: p });
  }
  _analyzeVectorMarker(t, e, s, r, i, n, o, a, h, c, u, m, f) {
    const _ = t.markerGraphics;
    if (!_)
      return;
    let p, d = 0, g = 1;
    t.scaleSymbolsProportionally && (p = t.frame, p && (d = p.ymax - p.ymin, g = this._transformSize(h, 1 / d))), g = this._transformSize(g, o), s || (s = this._createMarkerPlacementOverrideFunction(t.markerPlacement));
    for (const y of _)
      if (y) {
        const x = y.symbol;
        if (!x)
          continue;
        const P = y.primitiveName;
        P && r.push(P);
        let M = u, S = m;
        if ((x.type === "CIMPointSymbol" || x.type === "CIMTextSymbol") && p) {
          let v = 0, C = 0;
          const I = y.geometry;
          "x" in I && "y" in I && (v += I.x - 0.5 * (p.xmin + p.xmax), C += I.y - 0.5 * (p.ymin + p.ymax));
          const w = t.anchorPoint;
          w && (t.anchorPointUnits === "Absolute" ? (v -= w.x, C -= w.y) : p && (v -= (p.xmax - p.xmin) * w.x, C -= (p.ymax - p.ymin) * w.y)), M = this._transformOffsetX(v, C, c, g, u), S = this._transformOffsetY(v, C, c, g, m);
        }
        switch (x.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol":
            a ? this._analyzeMultiLayerGraphicNonSDF(t, e, s, null, y, r, i, n, d, !!f || !!t.colorLocked) : this._analyzeMultiLayerGraphic(t, e, s, null, y, r, i, n, d, g, h, c, M, S, !!f || !!t.colorLocked);
            break;
          case "CIMTextSymbol":
            this._analyzeTextGraphic(t, e, s, y, r, i, n, d, g, h, c, M, S, f);
        }
        P && r.pop();
      }
  }
  _analyzeMultiLayerGraphic(t, e, s, r, i, n, o, a, h, c, u, m, f, _, p) {
    const d = i.symbol, g = d.symbolLayers;
    if (!g)
      return;
    let y = g.length;
    if (To(g))
      return void this._analyzeCompositeMarkerGraphic(t, e, s, r, i, g, n, o, a, h, u, m, f, _, !!p || !!t.colorLocked);
    const x = this._resourceManager.geometryEngine, P = ti.applyEffects(d.effects, i.geometry, x);
    if (P)
      for (; y--; ) {
        const M = g[y];
        if (!M || M.enable === !1)
          continue;
        const S = M.primitiveName;
        switch (S && n.push(S), M.type) {
          case "CIMSolidFill":
          case "CIMSolidStroke": {
            const v = ti.applyEffects(M.effects, P, x), C = Ks(v);
            if (!C)
              continue;
            const I = t.anchorPointUnits !== "Relative", [w, z, F] = Qs(C, t.frame, t.size, t.anchorPoint, I), O = M.type === "CIMSolidFill", A = { type: "sdf", geom: v, asFill: O }, U = M.path, it = V(O ? Ft(M) : Ne(M)), mt = O ? { r: 0, g: 0, b: 0, a: 0 } : V(Ne(M)), pt = fs(M) ?? 0;
            if (!O && !pt)
              break;
            const Z = i.primitiveName;
            let _t = null;
            !O || M.colorLocked || p || (_t = this._createOverrideFunction(Z, "FillColor", it, X));
            let E = null;
            M.colorLocked || p || (E = this._createOverrideFunction(Z, "StrokeColor", mt, X));
            const dt = this._createOverrideFunction(Z, "StrokeWidth", pt);
            let rt = !1, R = "";
            for (const Ot of this._primitiveOverrides)
              n.includes(Ot.primitiveName) && (Ot.value != null ? R += `-${Ot.primitiveName}-${Ot.propertyName}-${JSON.stringify(Ot.value)}` : Ot.valueExpressionInfo && (rt = !0));
            (e != null && typeof e == "function" || s != null && typeof s == "function") && (rt = !0), (k(u) || k(m) || k(f) || k(_)) && (rt = !0);
            const zt = JSON.stringify({ ...t, markerGraphics: null }), Mt = N(JSON.stringify(A) + U).toString(), nt = N(JSON.stringify(i) + JSON.stringify(M) + zt + R).toString();
            this._cimLayers.push({ type: "marker", templateHash: nt, materialHash: rt ? () => Mt : Mt, cim: A, materialOverrides: null, colorLocked: !!M.colorLocked || !!p, effects: e, scaleSymbolsProportionally: !!t.scaleSymbolsProportionally, alignment: o, anchorPoint: { x: z, y: F }, isAbsoluteAnchorPoint: I, size: u, rotation: m, offsetX: f, offsetY: _, scaleX: 1, frameHeight: h, rotateClockwise: !1, referenceSize: a, sizeRatio: w, color: k(_t) ? _t : this._createOverrideFunction(S, "Color", it, X), outlineColor: k(E) ? E : this._createOverrideFunction(S, "Color", mt, X), outlineWidth: k(dt) ? dt : this._createOverrideFunction(S, "Width", pt), markerPlacement: s, animatedSymbolProperties: r, path: U });
            break;
          }
          case "CIMVectorMarker":
            M.markerPlacement ? this._analyzeMultiLayerGraphicNonSDF(t, e, s, r, i, n, o, a, h, !!p || !!M.colorLocked) : this._analyzeMarker(M, e, s, n, o, a, c, !1, u, m, f, _, !!p || !!t.colorLocked);
            break;
          default:
            this._analyzeMultiLayerGraphicNonSDF(t, e, s, r, i, n, o, a, h, !!p || !!t.colorLocked);
        }
        S && n.pop();
      }
  }
  _analyzeTextGraphic(t, e, s, r, i, n, o, a, h, c, u, m, f, _) {
    const p = [];
    T.findApplicableOverrides(r, this._primitiveOverrides, p);
    const d = r.geometry;
    if (!("x" in d) || !("y" in d))
      return;
    const g = r.symbol, y = bs(g), x = Ss(g.fontStyleName), P = pi(g.fontFamilyName);
    g.font = { family: P, decoration: y, ...x };
    let M = b(g.height, Be), S = b(g.angle), v = b(g.offsetX), C = b(g.offsetY);
    M = this._transformSize(M, h), S = this._transformRotation(S, !1, u);
    const I = this._transformOffsetX(v, C, u, h, m), w = this._transformOffsetY(v, C, u, h, f);
    v = I, C = w;
    const z = V(Ft(g));
    let F = V(Ne(g)), O = fs(g) ?? 0;
    O || (F = V(Ft(g.haloSymbol)), O = b(g.haloSize)), O = this._transformSize(O, h);
    let A = null, U = null, it = 0;
    if (g.callout && g.callout.type === "CIMBackgroundCallout") {
      const zt = g.callout;
      if (zt.backgroundSymbol) {
        const Mt = zt.backgroundSymbol.symbolLayers;
        if (Mt)
          for (const nt of Mt)
            nt.type === "CIMSolidFill" ? A = V(nt.color) : nt.type === "CIMSolidStroke" && (U = V(nt.color), it = b(nt.width, vt));
      }
    }
    const [mt, pt] = this._analyzePrimitiveOverrides(i, e, s, null), Z = JSON.stringify(t.effects) + Number(t.colorLocked || _).toString() + JSON.stringify(t.anchorPoint) + t.anchorPointUnits + JSON.stringify(t.markerPlacement) + t.size.toString(), _t = N(JSON.stringify(r) + Z + pt).toString();
    let E = this._createOverrideFunction(r.primitiveName, "TextString", r.textString ?? "", Nr, g.textCase);
    if (E == null)
      return;
    const { fontStyleName: dt } = g, rt = P + (dt ? "-" + dt.toLowerCase() : "-regular"), R = rt;
    typeof E == "string" && E.includes("[") && g.fieldMap && (E = Ar(g.fieldMap, E, g.textCase)), this._cimLayers.push({ type: "text", templateHash: _t, materialHash: mt || typeof E == "function" || /\[(.*?)\]/.test(E) ? (zt, Mt, nt) => R + "-" + As(E, zt, Mt, nt) : R + "-" + N(E), cim: g, materialOverrides: null, colorLocked: !!t.colorLocked || !!_, effects: e, alignment: n, anchorPoint: { x: 0, y: 0 }, isAbsoluteAnchorPoint: t.anchorPointUnits !== "Relative", fontName: rt, decoration: y, weight: x.weight, style: x.style, size: M, angle: S, offsetX: v, offsetY: C, horizontalAlignment: ai(g.horizontalAlignment), verticalAlignment: hi(g.verticalAlignment), text: E, color: z, outlineColor: F, outlineSize: O, backgroundColor: A, borderLineColor: U, borderLineWidth: it, referenceSize: o, sizeRatio: 1, markerPlacement: s });
  }
  _analyzeMultiLayerGraphicNonSDF(t, e, s, r, i, n, o, a, h, c) {
    const u = this._buildSimpleMarker(t, i), m = t.primitiveName, f = this._analyzeMaterialOverrides(m, ["Rotation", "OffsetX", "OffsetY"]), [_, p] = this._analyzePrimitiveOverrides(n, null, null, null), [d, g, y] = H.getTextureAnchor(u, this._resourceManager), x = b(t.rotation), P = b(t.offsetX), M = b(t.offsetY), S = N(JSON.stringify(u) + p).toString(), v = f && f.length > 0 || e != null && typeof e == "function";
    this._cimLayers.push({ type: "marker", templateHash: S, materialHash: v && f ? this._createMaterialHashFunction(S, f) : S, cim: u, materialOverrides: f, colorLocked: !!t.colorLocked || !!c, effects: e, scaleSymbolsProportionally: !!t.scaleSymbolsProportionally, alignment: o, anchorPoint: { x: d, y: g }, isAbsoluteAnchorPoint: !1, size: b(t.size, Re), rotation: this._createOverrideFunction(m, "Rotation", x), offsetX: this._createOverrideFunction(m, "OffsetX", P), offsetY: this._createOverrideFunction(m, "OffsetY", M), color: { r: 255, g: 255, b: 255, a: 1 }, outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, scaleX: 1, frameHeight: h, rotateClockwise: !!t.rotateClockwise, referenceSize: a, sizeRatio: y / q(t.size), markerPlacement: s, animatedSymbolProperties: r, avoidSDFRasterization: !0 });
  }
  _buildSimpleMarker(t, e) {
    return { type: t.type, enable: !0, name: t.name, colorLocked: t.colorLocked, primitiveName: t.primitiveName, anchorPoint: t.anchorPoint, anchorPointUnits: t.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: t.rotateClockwise, rotation: 0, size: t.size, billboardMode3D: t.billboardMode3D, depth3D: t.depth3D, frame: t.frame, markerGraphics: [e], scaleSymbolsProportionally: t.scaleSymbolsProportionally, respectFrame: t.respectFrame, clippingPath: t.clippingPath };
  }
  _analyzeCompositeMarkerGraphic(t, e, s, r, i, n, o, a, h, c, u, m, f, _, p) {
    const d = i.geometry, g = n[0], y = n[1], x = Ks(d);
    if (!x)
      return;
    const P = t.anchorPointUnits !== "Relative", [M, S, v] = Qs(x, t.frame, t.size, t.anchorPoint, P), C = { type: "sdf", geom: d, asFill: !0 }, I = y.path, w = y.primitiveName, z = g.primitiveName, F = V(y.color), O = V(g.color), A = b(g.width, vt), U = i.primitiveName;
    let it = null;
    y.colorLocked || p || (it = this._createOverrideFunction(U, "FillColor", F, X));
    let mt = null;
    g.colorLocked || p || (mt = this._createOverrideFunction(U, "StrokeColor", O, X));
    const pt = this._createOverrideFunction(U, "StrokeWidth", A);
    let Z = !1, _t = "";
    for (const R of this._primitiveOverrides)
      (R.primitiveName === w || R.primitiveName === z || o.includes(R.primitiveName)) && (R.value != null ? _t += `-${R.primitiveName}-${R.propertyName}-${JSON.stringify(R.value)}` : R.valueExpressionInfo && (Z = !0));
    s != null && typeof s == "function" && (Z = !0), (k(u) || k(m) || k(f) || k(_)) && (Z = !0);
    const E = JSON.stringify({ ...t, markerGraphics: null }), dt = N(JSON.stringify(C) + I).toString(), rt = N(JSON.stringify(i) + JSON.stringify(y) + JSON.stringify(g) + E + _t).toString();
    this._cimLayers.push({ type: "marker", templateHash: rt, materialHash: Z ? () => dt : dt, cim: C, materialOverrides: null, colorLocked: !!p, effects: e, scaleSymbolsProportionally: !!t.scaleSymbolsProportionally, alignment: a, anchorPoint: { x: S, y: v }, isAbsoluteAnchorPoint: P, size: u, rotation: m, offsetX: f, offsetY: _, scaleX: 1, frameHeight: c, rotateClockwise: !1, referenceSize: h, sizeRatio: M, color: k(it) ? it : this._createOverrideFunction(w, "Color", F, X), outlineColor: k(mt) ? mt : this._createOverrideFunction(z, "Color", O, X), outlineWidth: k(pt) ? pt : this._createOverrideFunction(z, "Width", A), markerPlacement: s, path: I, animatedSymbolProperties: r });
  }
  _createMaterialHashFunction(t, e) {
    var r;
    const s = (r = this._info) == null ? void 0 : r.geometryType;
    if (s) {
      const i = this._poMap;
      for (const n of e)
        if (n.valueExpressionInfo) {
          const o = i[n.primitiveName] && i[n.primitiveName][n.propertyName];
          o instanceof Gt && (n.fn = (a, h, c) => Nt(o, a, { $view: c }, s, h));
        }
    }
    return (i, n, o) => {
      for (const a of e)
        a.fn && (a.value = a.fn(i, n, o));
      return N(t + T.buildOverrideKey(e)).toString();
    };
  }
  _setPoMap(t, e, s) {
    let r;
    this._poMap[t] ? r = this._poMap[t] : (r = {}, this._poMap[t] = r), r[e] = s;
  }
  _createOverrideFunction(t, e, s, r, i) {
    var h;
    if (t == null)
      return s;
    const n = this._poMap[t];
    if (n == null)
      return s;
    const o = n[e];
    if (typeof o == "string" || typeof o == "number" || o instanceof Array)
      return r ? r.call(null, o, i) : o;
    const a = (h = this._info) == null ? void 0 : h.geometryType;
    return o != null && o instanceof Gt && a != null ? (c, u, m) => {
      let f = Nt(o, c, { $view: m }, a, u);
      return f !== null && r && (f = r.call(null, f, i)), f !== null ? f : s;
    } : s;
  }
  _createEffectsOverrideFunction(t, e) {
    var i;
    const s = this._poMap, r = (i = this._info) == null ? void 0 : i.geometryType;
    for (const n of e)
      if (n.valueExpressionInfo && r) {
        const o = s[n.primitiveName] && s[n.primitiveName][n.propertyName];
        o instanceof Gt && (n.fn = (a, h, c) => Nt(o, a, { $view: c }, r, h));
      }
    return (n, o, a) => {
      for (const c of e)
        c.fn && (c.value = c.fn(n, o, a));
      const h = [];
      for (let c of t) {
        const u = c == null ? void 0 : c.primitiveName;
        if (u) {
          let m = !1;
          for (const f of e)
            if (f.primitiveName === u) {
              const _ = as(f.propertyName);
              f.value != null && f.value !== c[_] && (m || (c = j(c), m = !0), c[_] = f.value);
            }
        }
        h.push(c);
      }
      return h;
    };
  }
  _createMarkerPlacementOverrideFunction(t) {
    var i;
    const e = [];
    if (T.findApplicableOverrides(t, this._primitiveOverrides, e), t == null || e.length === 0)
      return t;
    const s = this._poMap, r = (i = this._info) == null ? void 0 : i.geometryType;
    for (const n of e)
      if (n.valueExpressionInfo && r) {
        const o = s[n.primitiveName] && s[n.primitiveName][n.propertyName];
        o instanceof Gt && (n.fn = (a, h, c) => Nt(o, a, { $view: c }, r, h));
      }
    return (n, o, a) => {
      for (const u of e)
        u.fn && (u.value = u.fn(n, o, a));
      const h = j(t), c = t.primitiveName;
      for (const u of e)
        if (u.primitiveName === c) {
          const m = as(u.propertyName);
          u.value != null && u.value !== h[m] && (h[m] = u.value);
        }
      return h;
    };
  }
  _createAnimatedSymbolPropertiesOverrideFunction(t) {
    var r;
    const e = [];
    if (T.findApplicableOverrides(t, this._primitiveOverrides, e), t == null || e.length === 0)
      return t;
    const s = (r = this._info) == null ? void 0 : r.geometryType;
    if (s) {
      const i = this._poMap;
      for (const n of e)
        if (n.valueExpressionInfo) {
          const o = i[n.primitiveName] && i[n.primitiveName][n.propertyName];
          o instanceof Gt && (n.fn = (a, h, c) => Nt(o, a, { $view: c }, s, h));
        }
    }
    return (i, n, o) => {
      for (const c of e)
        c.fn && (c.value = c.fn(i, n, o));
      const a = j(t), h = t.primitiveName;
      for (const c of e)
        if (c.primitiveName === h) {
          const u = as(c.propertyName);
          if (c.value != null) {
            const m = Lo(c.value, c.propertyName);
            m !== a[u] && (a[u] = m);
          }
        }
      return a;
    };
  }
  _analyzePrimitiveOverrides(t, e, s, r) {
    let i = !1, n = "";
    typeof t == "string" && (t = [t]);
    for (const o of this._primitiveOverrides)
      t != null && t.includes(o.primitiveName) && (o.value != null ? n += `-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}` : o.valueExpressionInfo && (i = !0));
    return e != null && typeof e == "function" && (i = !0), s != null && typeof s == "function" && (i = !0), r != null && typeof r == "function" && (i = !0), [i, n];
  }
  _analyzeMaterialOverrides(t, e) {
    return this._primitiveOverrides.filter((s) => s.primitiveName !== t || !e.includes(s.propertyName));
  }
  _transformSize(t, e) {
    return k(t) || k(e) ? (s, r, i) => (k(t) ? t(s, r, i) : t) * (k(e) ? e(s, r, i) : e) : t * e;
  }
  _transformRotation(t, e, s) {
    return k(t) || k(s) ? (r, i, n) => {
      const o = k(t) ? t(r, i, n) : t, a = k(s) ? s(r, i, n) : s;
      return e ? a - o : a + o;
    } : e ? s - t : s + t;
  }
  _transformOffsetX(t, e, s, r, i) {
    if (!(k(t) || k(e) || k(s) || k(r) || k(i))) {
      const n = s * Math.PI / 180;
      if (n) {
        const o = Math.cos(n), a = Math.sin(n);
        return (o * t - a * e) * r + i;
      }
      return t * r + i;
    }
    return (n, o, a) => {
      let h = k(s) ? s(n, o, a) : s;
      const c = k(r) ? r(n, o, a) : r, u = k(t) ? t(n, o, a) : t, m = k(i) ? i(n, o, a) : i;
      return h ? (h *= Math.PI / 180, (Math.cos(h) * u - Math.sin(h) * (k(e) ? e(n, o, a) : e)) * c + m) : u * c + m;
    };
  }
  _transformOffsetY(t, e, s, r, i) {
    if (!(k(t) || k(e) || k(s) || k(r) || k(i))) {
      const n = s * Math.PI / 180;
      if (n) {
        const o = Math.cos(n);
        return (Math.sin(n) * t + o * e) * r + i;
      }
      return e * r + i;
    }
    return (n, o, a) => {
      let h = k(s) ? s(n, o, a) : s;
      const c = k(r) ? r(n, o, a) : r, u = k(e) ? e(n, o, a) : e, m = k(i) ? i(n, o, a) : i;
      if (h) {
        h *= Math.PI / 180;
        const f = Math.cos(h);
        return (Math.sin(h) * (k(t) ? t(n, o, a) : t) + f * u) * c + m;
      }
      return u * c + m;
    };
  }
}
function os(l) {
  if (l && l.indexOf("Level_") === 0) {
    const t = parseInt(l.substr(6), 10);
    if (!isNaN(t))
      return t;
  }
  return 0;
}
function X(l) {
  if (!l || l.length === 0)
    return null;
  const t = new oi(l).toRgba();
  return { r: t[0], g: t[1], b: t[2], a: t[3] };
}
function as(l) {
  return l && l.charAt(0).toLowerCase() + l.substr(1);
}
function Xa(l, t) {
  if (!t || t.length === 0)
    return l;
  const e = j(l);
  return T.applyOverrides(e, t), e;
}
const To = (l) => l && l.length === 2 && l[0].enable && l[1].enable && l[0].type === "CIMSolidStroke" && l[1].type === "CIMSolidFill" && !l[0].effects && !l[1].effects, $o = { marker: Ce.MARKER, fill: Ce.FILL, line: Ce.LINE, text: Ce.TEXT };
class Da {
  constructor(t, e, s, r) {
    const i = { minScale: e == null ? void 0 : e.minScale, maxScale: e == null ? void 0 : e.maxScale }, n = No(i);
    this.layers = t, this.data = e, this.hash = this._createHash() + n, this.rendererKey = s;
    const o = { isOutline: !1, placement: null, symbologyType: Er.DEFAULT, vvFlags: s };
    for (const a of t) {
      const h = $o[a.type];
      o.isOutline = a.type === "line" && a.isOutline, a.materialKey = Fr(h, o), a.maxVVSize = r, a.scaleInfo = i, a.templateHash += n;
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let t = "";
    for (const e of this.layers)
      t += e.templateHash;
    return t;
  }
}
function No(l) {
  return l.minScale || l.maxScale ? l.minScale + "-" + l.maxScale : "";
}
export {
  Ra as G,
  Qi as M,
  Vi as S,
  Xa as V,
  $ as a,
  Da as b,
  Uo as c,
  Nt as d,
  Aa as e,
  H as f,
  Gn as g,
  _o as h,
  Cs as i,
  Xi as j,
  Ea as k,
  ti as l,
  bo as m,
  Wr as n,
  So as o,
  Fa as s,
  Na as t
};
import { Z as Lt, eF as kt } from "./index-j1oaLRcp.js";
import { U as Bt, e as C, n as j, o as Dt } from "./enums-YM9SAu8u.js";
import { t as S, s as tt } from "./Geometry-etmNDSLV.js";
import { g as dt } from "./GeometryUtils-ACqEo_je.js";
const It = 128e3;
let Tt = null, Vt = null;
async function jt() {
  return Tt || (Tt = Ut()), Tt;
}
async function Ut() {
  Vt = await (Lt("geoscene-csp-restrictions") ? await import("./libtess-asm-IcOXTIOp.js").then((t) => t.l) : await import("./libtess-zBj61anh.js").then((t) => t.l)).load({ locateFile: () => kt("geoscene/core/libs/libtess/libtess.wasm") });
}
function qt(a, t) {
  const i = Math.max(a.length, It);
  return Vt.triangulate(a, t, i);
}
function Pt(a, t) {
  return a.x === t.x && a.y === t.y;
}
function St(a) {
  if (!a)
    return;
  const t = a.length;
  if (t <= 1)
    return;
  let i = 0;
  for (let n = 1; n < t; n++)
    Pt(a[n], a[i]) || ++i === n || (a[i] = a[n]);
  a.length = i + 1;
}
function A(a, t) {
  return a.x = t.y, a.y = -t.x, a;
}
function U(a, t) {
  return a.x = -t.y, a.y = t.x, a;
}
function Mt(a, t) {
  return a.x = t.x, a.y = t.y, a;
}
function wt(a, t) {
  return a.x = -t.x, a.y = -t.y, a;
}
function Rt(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
}
function $t(a, t) {
  return a.x * t.y - a.y * t.x;
}
function bt(a, t) {
  return a.x * t.x + a.y * t.y;
}
function ht(a, t, i, n) {
  return a.x = t.x * i + t.y * n, a.y = t.x * n - t.y * i, a;
}
class Xt {
  constructor(t, i, n) {
    this.writeVertex = t, this.writeTriangle = i, this.canUseThinTessellation = n, this.prevNormal = { x: void 0, y: void 0 }, this.nextNormal = { x: void 0, y: void 0 }, this.textureNormalLeft = { x: 0, y: 1 }, this.textureNormalRight = { x: 0, y: -1 }, this.textureNormal = { x: void 0, y: void 0 }, this.joinNormal = { x: void 0, y: void 0 }, this.inner = { x: void 0, y: void 0 }, this.outer = { x: void 0, y: void 0 }, this.roundStart = { x: void 0, y: void 0 }, this.roundEnd = { x: void 0, y: void 0 }, this.startBreak = { x: void 0, y: void 0 }, this.endBreak = { x: void 0, y: void 0 }, this.innerPrev = { x: void 0, y: void 0 }, this.innerNext = { x: void 0, y: void 0 }, this.bevelStart = { x: void 0, y: void 0 }, this.bevelEnd = { x: void 0, y: void 0 }, this.bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(t, i) {
    St(t), this.canUseThinTessellation && i.halfWidth < Bt && !i.offset ? this._tessellateThin(t, i) : this._tessellate(t, i);
  }
  _tessellateThin(t, i) {
    if (t.length < 2)
      return;
    const n = i.wrapDistance || 65535;
    let x = i.initialDistance || 0, y = !1, l = t[0].x, u = t[0].y;
    const o = t.length;
    for (let m = 1; m < o; ++m) {
      y && (y = !1, x = 0);
      let E = t[m].x, v = t[m].y, c = E - l, p = v - u, h = Math.sqrt(c * c + p * p);
      if (c /= h, p /= h, x + h > n) {
        y = !0;
        const s = (n - x) / h;
        h = n - x, E = (1 - s) * l + s * E, v = (1 - s) * u + s * v, --m;
      }
      const r = this.writeVertex(l, u, 0, 0, c, p, p, -c, 0, -1, x), d = this.writeVertex(l, u, 0, 0, c, p, -p, c, 0, 1, x);
      x += h;
      const f = this.writeVertex(E, v, 0, 0, c, p, p, -c, 0, -1, x), e = this.writeVertex(E, v, 0, 0, c, p, -p, c, 0, 1, x);
      this.writeTriangle(r, d, f), this.writeTriangle(d, f, e), l = E, u = v;
    }
  }
  _tessellate(t, i) {
    const n = t[0], x = t[t.length - 1], y = Pt(n, x), l = y ? 3 : 2;
    if (t.length < l)
      return;
    const u = i.pixelCoordRatio, o = i.capType != null ? i.capType : C.BUTT, m = i.joinType != null ? i.joinType : j.MITER, E = i.miterLimit != null ? Math.min(i.miterLimit, 4) : 2, v = i.roundLimit != null ? Math.min(i.roundLimit, 1.05) : 1.05, c = i.halfWidth != null ? i.halfWidth : 2, p = !!i.textured;
    let h, r, d = null, f = null;
    const e = this.prevNormal, s = this.nextNormal;
    let it = -1, G = -1;
    const _ = this.joinNormal;
    let M, b;
    const rt = this.textureNormalLeft, yt = this.textureNormalRight, N = this.textureNormal;
    let V = -1, T = -1;
    const gt = i.wrapDistance || 65535;
    let w = i.initialDistance || 0;
    const Et = this.writeVertex, Nt = this.writeTriangle, P = function($, ot, K, B, W, q) {
      const X = Et(h, r, M, b, K, B, $, ot, W, q, w);
      return V >= 0 && T >= 0 && X >= 0 && Nt(V, T, X), V = T, T = X, X;
    };
    y && (d = t[t.length - 2], s.x = x.x - d.x, s.y = x.y - d.y, G = Rt(s), s.x /= G, s.y /= G);
    let st = !1;
    for (let $ = 0; $ < t.length; ++$) {
      if (st && (st = !1, w = 0), d && (e.x = -s.x, e.y = -s.y, it = G, w + it > gt && (st = !0)), st) {
        const g = (gt - w) / it;
        it = gt - w, d = { x: (1 - g) * d.x + g * t[$].x, y: (1 - g) * d.y + g * t[$].y }, --$;
      } else
        d = t[$];
      h = d.x, r = d.y;
      const ot = $ <= 0 && !st, K = $ === t.length - 1;
      if (ot || (w += it), f = K ? y ? t[1] : null : t[$ + 1], f ? (s.x = f.x - h, s.y = f.y - r, G = Rt(s), s.x /= G, s.y /= G) : (s.x = void 0, s.y = void 0), !y) {
        if (ot) {
          U(_, s), M = _.x, b = _.y, o === C.SQUARE && (P(-s.y - s.x, s.x - s.y, s.x, s.y, 0, -1), P(s.y - s.x, -s.x - s.y, s.x, s.y, 0, 1)), o === C.ROUND && (P(-s.y - s.x, s.x - s.y, s.x, s.y, -1, -1), P(s.y - s.x, -s.x - s.y, s.x, s.y, -1, 1)), o !== C.ROUND && o !== C.BUTT || (P(-s.y, s.x, s.x, s.y, 0, -1), P(s.y, -s.x, s.x, s.y, 0, 1));
          continue;
        }
        if (K) {
          A(_, e), M = _.x, b = _.y, o !== C.ROUND && o !== C.BUTT || (P(e.y, -e.x, -e.x, -e.y, 0, -1), P(-e.y, e.x, -e.x, -e.y, 0, 1)), o === C.SQUARE && (P(e.y - e.x, -e.x - e.y, -e.x, -e.y, 0, -1), P(-e.y - e.x, e.x - e.y, -e.x, -e.y, 0, 1)), o === C.ROUND && (P(e.y - e.x, -e.x - e.y, -e.x, -e.y, 1, -1), P(-e.y - e.x, e.x - e.y, -e.x, -e.y, 1, 1));
          continue;
        }
      }
      let B, W, q = -$t(e, s);
      if (Math.abs(q) < 0.01)
        bt(e, s) > 0 ? (_.x = e.x, _.y = e.y, q = 1, B = Number.MAX_VALUE, W = !0) : (U(_, s), q = 1, B = 1, W = !1);
      else {
        _.x = (e.x + s.x) / q, _.y = (e.y + s.y) / q, B = Rt(_);
        const g = (B - 1) * c * u;
        W = B > 4 || g > it && g > G;
      }
      M = _.x, b = _.y;
      let X = m;
      switch (m) {
        case j.BEVEL:
          B < 1.05 && (X = j.MITER);
          break;
        case j.ROUND:
          B < v && (X = j.MITER);
          break;
        case j.MITER:
          B > E && (X = j.BEVEL);
      }
      switch (X) {
        case j.MITER:
          if (P(_.x, _.y, -e.x, -e.y, 0, -1), P(-_.x, -_.y, -e.x, -e.y, 0, 1), K)
            break;
          if (p) {
            const g = st ? 0 : w;
            V = this.writeVertex(h, r, M, b, s.x, s.y, _.x, _.y, 0, -1, g), T = this.writeVertex(h, r, M, b, s.x, s.y, -_.x, -_.y, 0, 1, g);
          }
          break;
        case j.BEVEL: {
          const g = q < 0;
          let k, D, H, z;
          if (g) {
            const R = V;
            V = T, T = R, k = rt, D = yt;
          } else
            k = yt, D = rt;
          if (W)
            H = g ? U(this.innerPrev, e) : A(this.innerPrev, e), z = g ? A(this.innerNext, s) : U(this.innerNext, s);
          else {
            const R = g ? wt(this.inner, _) : Mt(this.inner, _);
            H = R, z = R;
          }
          const O = g ? A(this.bevelStart, e) : U(this.bevelStart, e);
          P(H.x, H.y, -e.x, -e.y, k.x, k.y);
          const at = P(O.x, O.y, -e.x, -e.y, D.x, D.y);
          if (K)
            break;
          const Q = g ? U(this.bevelEnd, s) : A(this.bevelEnd, s);
          if (W) {
            const R = this.writeVertex(h, r, M, b, -e.x, -e.y, 0, 0, 0, 0, w);
            V = this.writeVertex(h, r, M, b, s.x, s.y, z.x, z.y, k.x, k.y, w), T = this.writeVertex(h, r, M, b, s.x, s.y, Q.x, Q.y, D.x, D.y, w), this.writeTriangle(at, R, T);
          } else {
            if (p) {
              const R = this.bevelMiddle;
              R.x = (O.x + Q.x) / 2, R.y = (O.y + Q.y) / 2, ht(N, R, -e.x, -e.y), P(R.x, R.y, -e.x, -e.y, N.x, N.y), ht(N, R, s.x, s.y), V = this.writeVertex(h, r, M, b, s.x, s.y, R.x, R.y, N.x, N.y, w), T = this.writeVertex(h, r, M, b, s.x, s.y, z.x, z.y, k.x, k.y, w);
            } else {
              const R = V;
              V = T, T = R;
            }
            P(Q.x, Q.y, s.x, s.y, D.x, D.y);
          }
          if (g) {
            const R = V;
            V = T, T = R;
          }
          break;
        }
        case j.ROUND: {
          const g = q < 0;
          let k, D;
          if (g) {
            const I = V;
            V = T, T = I, k = rt, D = yt;
          } else
            k = yt, D = rt;
          const H = g ? wt(this.inner, _) : Mt(this.inner, _);
          let z, O;
          W ? (z = g ? U(this.innerPrev, e) : A(this.innerPrev, e), O = g ? A(this.innerNext, s) : U(this.innerNext, s)) : (z = H, O = H);
          const at = g ? A(this.roundStart, e) : U(this.roundStart, e), Q = g ? U(this.roundEnd, s) : A(this.roundEnd, s), R = P(z.x, z.y, -e.x, -e.y, k.x, k.y), ut = P(at.x, at.y, -e.x, -e.y, D.x, D.y);
          if (K)
            break;
          const J = this.writeVertex(h, r, M, b, -e.x, -e.y, 0, 0, 0, 0, w);
          W || this.writeTriangle(V, T, J);
          const F = wt(this.outer, H), Y = this.writeVertex(h, r, M, b, s.x, s.y, Q.x, Q.y, D.x, D.y, w);
          let et, nt;
          const mt = B > 2;
          if (mt) {
            let I;
            B !== Number.MAX_VALUE ? (F.x /= B, F.y /= B, I = bt(e, F), I = (B * (I * I - 1) + 1) / I) : I = -1, et = g ? A(this.startBreak, e) : U(this.startBreak, e), et.x += e.x * I, et.y += e.y * I, nt = g ? U(this.endBreak, s) : A(this.endBreak, s), nt.x += s.x * I, nt.y += s.y * I;
          }
          ht(N, F, -e.x, -e.y);
          const ct = this.writeVertex(h, r, M, b, -e.x, -e.y, F.x, F.y, N.x, N.y, w);
          ht(N, F, s.x, s.y);
          const _t = p ? this.writeVertex(h, r, M, b, s.x, s.y, F.x, F.y, N.x, N.y, w) : ct, vt = J, pt = p ? this.writeVertex(h, r, M, b, s.x, s.y, 0, 0, 0, 0, w) : J;
          let xt = -1, lt = -1;
          if (mt && (ht(N, et, -e.x, -e.y), xt = this.writeVertex(h, r, M, b, -e.x, -e.y, et.x, et.y, N.x, N.y, w), ht(N, nt, s.x, s.y), lt = this.writeVertex(h, r, M, b, s.x, s.y, nt.x, nt.y, N.x, N.y, w)), p ? mt ? (this.writeTriangle(vt, ut, xt), this.writeTriangle(vt, xt, ct), this.writeTriangle(pt, _t, lt), this.writeTriangle(pt, lt, Y)) : (this.writeTriangle(vt, ut, ct), this.writeTriangle(pt, _t, Y)) : mt ? (this.writeTriangle(J, ut, xt), this.writeTriangle(J, xt, lt), this.writeTriangle(J, lt, Y)) : (this.writeTriangle(J, ut, ct), this.writeTriangle(J, _t, Y)), W ? (V = this.writeVertex(h, r, M, b, s.x, s.y, O.x, O.y, k.x, k.y, w), T = Y) : (V = p ? this.writeVertex(h, r, M, b, s.x, s.y, O.x, O.y, k.x, k.y, w) : R, this.writeTriangle(V, pt, Y), T = Y), g) {
            const I = V;
            V = T, T = I;
          }
          break;
        }
      }
    }
  }
}
class ft {
  constructor(t, i, n) {
    this.ratio = t, this.x = i, this.y = n;
  }
}
class Qt {
  constructor(t, i, n, x = 8, y = 8) {
    this.lines = [], this.starts = [], this.validateTessellation = !0, this.pixelRatio = x, this.pixelMargin = y, this.tileSize = Dt * x, this.dz = t, this.yPos = i, this.xPos = n;
  }
  setPixelMargin(t) {
    t !== this.pixelMargin && (this.pixelMargin = t, this.setExtent(this._extent));
  }
  setExtent(t) {
    this._extent = t, this.finalRatio = this.tileSize / t * (1 << this.dz);
    let i = this.pixelRatio * this.pixelMargin;
    i /= this.finalRatio;
    const n = t >> this.dz;
    i > n && (i = n), this.margin = i, this.xmin = n * this.xPos - i, this.ymin = n * this.yPos - i, this.xmax = this.xmin + n + 2 * i, this.ymax = this.ymin + n + 2 * i;
  }
  reset(t) {
    this.type = t, this.lines = [], this.starts = [], this.line = null, this.start = 0;
  }
  moveTo(t, i) {
    this._pushLine(), this._prevIsIn = this._isIn(t, i), this._moveTo(t, i, this._prevIsIn), this._prevPt = new S(t, i), this._firstPt = new S(t, i), this._dist = 0;
  }
  lineTo(t, i) {
    const n = this._isIn(t, i), x = new S(t, i), y = S.distance(this._prevPt, x);
    let l, u, o, m, E, v, c, p;
    if (n)
      this._prevIsIn ? this._lineTo(t, i, !0) : (l = this._prevPt, u = x, o = this._intersect(u, l), this.start = this._dist + y * (1 - this._r), this._lineTo(o.x, o.y, !0), this._lineTo(u.x, u.y, !0));
    else if (this._prevIsIn)
      u = this._prevPt, l = x, o = this._intersect(u, l), this._lineTo(o.x, o.y, !0), this._lineTo(l.x, l.y, !1);
    else {
      const h = this._prevPt, r = x;
      if (h.x <= this.xmin && r.x <= this.xmin || h.x >= this.xmax && r.x >= this.xmax || h.y <= this.ymin && r.y <= this.ymin || h.y >= this.ymax && r.y >= this.ymax)
        this._lineTo(r.x, r.y, !1);
      else {
        const d = [];
        if ((h.x < this.xmin && r.x > this.xmin || h.x > this.xmin && r.x < this.xmin) && (m = (this.xmin - h.x) / (r.x - h.x), p = h.y + m * (r.y - h.y), p <= this.ymin ? v = !1 : p >= this.ymax ? v = !0 : d.push(new ft(m, this.xmin, p))), (h.x < this.xmax && r.x > this.xmax || h.x > this.xmax && r.x < this.xmax) && (m = (this.xmax - h.x) / (r.x - h.x), p = h.y + m * (r.y - h.y), p <= this.ymin ? v = !1 : p >= this.ymax ? v = !0 : d.push(new ft(m, this.xmax, p))), (h.y < this.ymin && r.y > this.ymin || h.y > this.ymin && r.y < this.ymin) && (m = (this.ymin - h.y) / (r.y - h.y), c = h.x + m * (r.x - h.x), c <= this.xmin ? E = !1 : c >= this.xmax ? E = !0 : d.push(new ft(m, c, this.ymin))), (h.y < this.ymax && r.y > this.ymax || h.y > this.ymax && r.y < this.ymax) && (m = (this.ymax - h.y) / (r.y - h.y), c = h.x + m * (r.x - h.x), c <= this.xmin ? E = !1 : c >= this.xmax ? E = !0 : d.push(new ft(m, c, this.ymax))), d.length === 0)
          E ? v ? this._lineTo(this.xmax, this.ymax, !0) : this._lineTo(this.xmax, this.ymin, !0) : v ? this._lineTo(this.xmin, this.ymax, !0) : this._lineTo(this.xmin, this.ymin, !0);
        else if (d.length > 1 && d[0].ratio > d[1].ratio)
          this.start = this._dist + y * d[1].ratio, this._lineTo(d[1].x, d[1].y, !0), this._lineTo(d[0].x, d[0].y, !0);
        else {
          this.start = this._dist + y * d[0].ratio;
          for (let f = 0; f < d.length; f++)
            this._lineTo(d[f].x, d[f].y, !0);
        }
        this._lineTo(r.x, r.y, !1);
      }
    }
    this._dist += y, this._prevIsIn = n, this._prevPt = x;
  }
  close() {
    if (this.line.length > 2) {
      const t = this._firstPt, i = this._prevPt;
      t.x === i.x && t.y === i.y || this.lineTo(t.x, t.y);
      const n = this.line;
      let x = n.length;
      for (; x >= 4 && (n[0].x === n[1].x && n[0].x === n[x - 2].x || n[0].y === n[1].y && n[0].y === n[x - 2].y); )
        n.pop(), n[0].x = n[x - 2].x, n[0].y = n[x - 2].y, --x;
    }
  }
  result(t = !0) {
    return this._pushLine(), this.lines.length === 0 ? null : (this.type === tt.Polygon && t && Z.simplify(this.tileSize, this.margin * this.finalRatio, this.lines), this.lines);
  }
  resultWithStarts() {
    if (this.type !== tt.LineString)
      throw new Error("Only valid for lines");
    this._pushLine();
    const t = this.lines, i = t.length;
    if (i === 0)
      return null;
    const n = [];
    for (let x = 0; x < i; x++)
      n.push({ line: t[x], start: this.starts[x] || 0 });
    return n;
  }
  _isIn(t, i) {
    return t >= this.xmin && t <= this.xmax && i >= this.ymin && i <= this.ymax;
  }
  _intersect(t, i) {
    let n, x, y;
    if (i.x >= this.xmin && i.x <= this.xmax)
      x = i.y <= this.ymin ? this.ymin : this.ymax, y = (x - t.y) / (i.y - t.y), n = t.x + y * (i.x - t.x);
    else if (i.y >= this.ymin && i.y <= this.ymax)
      n = i.x <= this.xmin ? this.xmin : this.xmax, y = (n - t.x) / (i.x - t.x), x = t.y + y * (i.y - t.y);
    else {
      x = i.y <= this.ymin ? this.ymin : this.ymax, n = i.x <= this.xmin ? this.xmin : this.xmax;
      const l = (n - t.x) / (i.x - t.x), u = (x - t.y) / (i.y - t.y);
      l < u ? (y = l, x = t.y + l * (i.y - t.y)) : (y = u, n = t.x + u * (i.x - t.x));
    }
    return this._r = y, new S(n, x);
  }
  _pushLine() {
    this.line && (this.type === tt.Point ? this.line.length > 0 && (this.lines.push(this.line), this.starts.push(this.start)) : this.type === tt.LineString ? this.line.length > 1 && (this.lines.push(this.line), this.starts.push(this.start)) : this.type === tt.Polygon && this.line.length > 3 && (this.lines.push(this.line), this.starts.push(this.start))), this.line = [], this.start = 0;
  }
  _moveTo(t, i, n) {
    this.type !== tt.Polygon ? n && (t = Math.round((t - (this.xmin + this.margin)) * this.finalRatio), i = Math.round((i - (this.ymin + this.margin)) * this.finalRatio), this.line.push(new S(t, i))) : (n || (t < this.xmin && (t = this.xmin), t > this.xmax && (t = this.xmax), i < this.ymin && (i = this.ymin), i > this.ymax && (i = this.ymax)), t = Math.round((t - (this.xmin + this.margin)) * this.finalRatio), i = Math.round((i - (this.ymin + this.margin)) * this.finalRatio), this.line.push(new S(t, i)), this._is_h = !1, this._is_v = !1);
  }
  _lineTo(t, i, n) {
    let x, y;
    if (this.type !== tt.Polygon)
      if (n) {
        if (t = Math.round((t - (this.xmin + this.margin)) * this.finalRatio), i = Math.round((i - (this.ymin + this.margin)) * this.finalRatio), this.line.length > 0 && (x = this.line[this.line.length - 1], x.equals(t, i)))
          return;
        this.line.push(new S(t, i));
      } else
        this.line && this.line.length > 0 && this._pushLine();
    else if (n || (t < this.xmin && (t = this.xmin), t > this.xmax && (t = this.xmax), i < this.ymin && (i = this.ymin), i > this.ymax && (i = this.ymax)), t = Math.round((t - (this.xmin + this.margin)) * this.finalRatio), i = Math.round((i - (this.ymin + this.margin)) * this.finalRatio), this.line && this.line.length > 0) {
      x = this.line[this.line.length - 1];
      const l = x.x === t, u = x.y === i;
      if (l && u)
        return;
      this._is_h && l || this._is_v && u ? (x.x = t, x.y = i, y = this.line[this.line.length - 2], y.x === t && y.y === i ? (this.line.pop(), this.line.length <= 1 ? (this._is_h = !1, this._is_v = !1) : (y = this.line[this.line.length - 2], this._is_h = y.x === t, this._is_v = y.y === i)) : (this._is_h = y.x === t, this._is_v = y.y === i)) : (this.line.push(new S(t, i)), this._is_h = l, this._is_v = u);
    } else
      this.line.push(new S(t, i));
  }
}
class Ft {
  setExtent(t) {
    this._ratio = t === 4096 ? 1 : 4096 / t;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(t) {
    this.lines = [], this.line = null;
  }
  moveTo(t, i) {
    this.line && this.lines.push(this.line), this.line = [];
    const n = this._ratio;
    this.line.push(new S(t * n, i * n));
  }
  lineTo(t, i) {
    const n = this._ratio;
    this.line.push(new S(t * n, i * n));
  }
  close() {
    const t = this.line;
    t && !t[0].isEqual(t[t.length - 1]) && t.push(t[0]);
  }
  result() {
    return this.line && this.lines.push(this.line), this.lines.length === 0 ? null : this.lines;
  }
}
var L;
(function(a) {
  a[a.sideLeft = 0] = "sideLeft", a[a.sideRight = 1] = "sideRight", a[a.sideTop = 2] = "sideTop", a[a.sideBottom = 3] = "sideBottom";
})(L || (L = {}));
class Z {
  static simplify(t, i, n) {
    if (!n)
      return;
    const x = -i, y = t + i, l = -i, u = t + i, o = [], m = [], E = n.length;
    for (let c = 0; c < E; ++c) {
      const p = n[c];
      if (!p || p.length < 2)
        continue;
      let h, r = p[0];
      const d = p.length;
      for (let f = 1; f < d; ++f)
        h = p[f], r.x === h.x && (r.x <= x && (r.y > h.y ? (o.push(c), o.push(f), o.push(L.sideLeft), o.push(-1)) : (m.push(c), m.push(f), m.push(L.sideLeft), m.push(-1))), r.x >= y && (r.y < h.y ? (o.push(c), o.push(f), o.push(L.sideRight), o.push(-1)) : (m.push(c), m.push(f), m.push(L.sideRight), m.push(-1)))), r.y === h.y && (r.y <= l && (r.x < h.x ? (o.push(c), o.push(f), o.push(L.sideTop), o.push(-1)) : (m.push(c), m.push(f), m.push(L.sideTop), m.push(-1))), r.y >= u && (r.x > h.x ? (o.push(c), o.push(f), o.push(L.sideBottom), o.push(-1)) : (m.push(c), m.push(f), m.push(L.sideBottom), m.push(-1)))), r = h;
    }
    if (o.length === 0 || m.length === 0)
      return;
    Z.fillParent(n, m, o), Z.fillParent(n, o, m);
    const v = [];
    Z.calcDeltas(v, m, o), Z.calcDeltas(v, o, m), Z.addDeltas(v, n);
  }
  static fillParent(t, i, n) {
    const x = n.length, y = i.length;
    for (let l = 0; l < y; l += 4) {
      const u = i[l], o = i[l + 1], m = i[l + 2], E = t[u][o - 1], v = t[u][o];
      let c = 8092, p = -1;
      for (let h = 0; h < x; h += 4) {
        if (n[h + 2] !== m)
          continue;
        const r = n[h], d = n[h + 1], f = t[r][d - 1], e = t[r][d];
        switch (m) {
          case L.sideLeft:
          case L.sideRight:
            if (dt(E.y, f.y, e.y) && dt(v.y, f.y, e.y)) {
              const s = Math.abs(e.y - f.y);
              s < c && (c = s, p = h);
            }
            break;
          case L.sideTop:
          case L.sideBottom:
            if (dt(E.x, f.x, e.x) && dt(v.x, f.x, e.x)) {
              const s = Math.abs(e.x - f.x);
              s < c && (c = s, p = h);
            }
        }
      }
      i[l + 3] = p;
    }
  }
  static calcDeltas(t, i, n) {
    const x = i.length;
    for (let y = 0; y < x; y += 4) {
      const l = [], u = Z.calcDelta(y, i, n, l);
      t.push(i[y]), t.push(i[y + 1]), t.push(i[y + 2]), t.push(u);
    }
  }
  static calcDelta(t, i, n, x) {
    const y = i[t + 3];
    if (y === -1)
      return 0;
    const l = x.length;
    return l > 1 && x[l - 2] === y ? 0 : (x.push(y), Z.calcDelta(y, n, i, x) + 1);
  }
  static addDeltas(t, i) {
    const n = t.length;
    let x = 0;
    for (let y = 0; y < n; y += 4) {
      const l = t[y + 3];
      l > x && (x = l);
    }
    for (let y = 0; y < n; y += 4) {
      const l = i[t[y]], u = t[y + 1], o = x - t[y + 3];
      switch (t[y + 2]) {
        case L.sideLeft:
          l[u - 1].x -= o, l[u].x -= o, u === 1 && (l[l.length - 1].x -= o), u === l.length - 1 && (l[0].x -= o);
          break;
        case L.sideRight:
          l[u - 1].x += o, l[u].x += o, u === 1 && (l[l.length - 1].x += o), u === l.length - 1 && (l[0].x += o);
          break;
        case L.sideTop:
          l[u - 1].y -= o, l[u].y -= o, u === 1 && (l[l.length - 1].y -= o), u === l.length - 1 && (l[0].y -= o);
          break;
        case L.sideBottom:
          l[u - 1].y += o, l[u].y += o, u === 1 && (l[l.length - 1].y += o), u === l.length - 1 && (l[0].y += o);
      }
    }
  }
}
export {
  jt as a,
  Xt as d,
  Ft as l,
  Qt as n,
  qt as r
};

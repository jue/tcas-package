import { z as Et, eg as bt } from "./index-O2RTvw_o.js";
import { e as I, n as D } from "./enums-QU6RH5ju.js";
import { $ as pt } from "./definitions-jqTA3541.js";
const Mt = 128e3;
let dt = null, gt = null;
async function St() {
  return dt || (dt = Rt()), dt;
}
async function Rt() {
  gt = await (Et("geoscene-csp-restrictions") ? await import("./libtess-asm-LG4yh_Po.js").then((i) => i.l) : await import("./libtess-oKI84BVq.js").then((i) => i.l)).load({ locateFile: (i) => bt(`geoscene/core/libs/libtess/${i}`) });
}
function $t(x, i) {
  const r = Math.max(x.length, Mt);
  return gt.triangulate(x, i, r);
}
function mt(x, i) {
  return x.x === i.x && x.y === i.y;
}
function Ut(x) {
  if (!x)
    return;
  const i = x.length;
  if (i <= 1)
    return;
  let r = 0;
  for (let g = 1; g < i; g++)
    mt(x[g], x[r]) || ++r === g || (x[r] = x[g]);
  x.length = r + 1;
}
function k(x, i) {
  return x.x = i.y, x.y = -i.x, x;
}
function p(x, i) {
  return x.x = -i.y, x.y = i.x, x;
}
function wt(x, i) {
  return x.x = i.x, x.y = i.y, x;
}
function ft(x, i) {
  return x.x = -i.x, x.y = -i.y, x;
}
function vt(x) {
  return Math.sqrt(x.x * x.x + x.y * x.y);
}
function kt(x, i) {
  return x.x * i.y - x.y * i.x;
}
function Tt(x, i) {
  return x.x * i.x + x.y * i.y;
}
function et(x, i, r, g) {
  return x.x = i.x * r + i.y * g, x.y = i.x * g - i.y * r, x;
}
class At {
  constructor(i, r, g) {
    this._writeVertex = i, this._writeTriangle = r, this._canUseThinTessellation = g, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(i, r) {
    Ut(i), this._canUseThinTessellation && r.halfWidth < pt && !r.offset ? this._tessellateThin(i, r) : this._tessellate(i, r);
  }
  _tessellateThin(i, r) {
    if (i.length < 2)
      return;
    const g = r.wrapDistance || 65535;
    let E = r.initialDistance || 0, P = !1, C = i[0].x, F = i[0].y;
    const B = i.length;
    for (let j = 1; j < B; ++j) {
      P && (P = !1, E = 0);
      let W = i[j].x, X = i[j].y, b = W - C, f = X - F, w = Math.sqrt(b * b + f * f);
      if (b /= w, f /= w, E + w > g) {
        P = !0;
        const t = (g - E) / w;
        w = g - E, W = (1 - t) * C + t * W, X = (1 - t) * F + t * X, --j;
      }
      const o = this._writeVertex(C, F, 0, 0, b, f, f, -b, 0, -1, E), y = this._writeVertex(C, F, 0, 0, b, f, -f, b, 0, 1, E);
      E += w;
      const G = this._writeVertex(W, X, 0, 0, b, f, f, -b, 0, -1, E), e = this._writeVertex(W, X, 0, 0, b, f, -f, b, 0, 1, E);
      this._writeTriangle(o, y, G), this._writeTriangle(y, G, e), C = W, F = X;
    }
  }
  _tessellate(i, r) {
    const g = i[0], E = i[i.length - 1], P = mt(g, E), C = P ? 3 : 2;
    if (i.length < C)
      return;
    const F = r.pixelCoordRatio, B = r.capType != null ? r.capType : I.BUTT, j = r.joinType != null ? r.joinType : D.MITER, W = r.miterLimit != null ? Math.min(r.miterLimit, 4) : 2, X = r.roundLimit != null ? Math.min(r.roundLimit, 1.05) : 1.05, b = r.halfWidth != null ? r.halfWidth : 2, f = !!r.textured;
    let w, o, y, G = null;
    const e = this._prevNormal, t = this._nextNormal;
    let K = -1, Q = -1;
    const s = this._joinNormal;
    let _, c;
    const rt = this._textureNormalLeft, nt = this._textureNormalRight, v = this._textureNormal;
    let u = -1, h = -1;
    const _t = r.wrapDistance || 65535;
    let l = r.initialDistance || 0;
    const Vt = this._writeVertex, Nt = this._writeTriangle, d = (M, st, H, m, L, S) => {
      const $ = Vt(o, y, _, c, H, m, M, st, L, S, l);
      return u >= 0 && h >= 0 && $ >= 0 && Nt(u, h, $), u = h, h = $, $;
    };
    P && (w = i[i.length - 2], t.x = E.x - w.x, t.y = E.y - w.y, Q = vt(t), t.x /= Q, t.y /= Q);
    let Y = !1;
    for (let M = 0; M < i.length; ++M) {
      if (Y && (Y = !1, l = 0), w && (e.x = -t.x, e.y = -t.y, K = Q, l + K > _t && (Y = !0)), Y) {
        const n = (_t - l) / K;
        K = _t - l, w = { x: (1 - n) * w.x + n * i[M].x, y: (1 - n) * w.y + n * i[M].y }, --M;
      } else
        w = i[M];
      o = w.x, y = w.y;
      const st = M <= 0 && !Y, H = M === i.length - 1;
      if (st || (l += K), G = H ? P ? i[1] : null : i[M + 1], G ? (t.x = G.x - o, t.y = G.y - y, Q = vt(t), t.x /= Q, t.y /= Q) : (t.x = void 0, t.y = void 0), !P) {
        if (st) {
          p(s, t), _ = s.x, c = s.y, B === I.SQUARE && (d(-t.y - t.x, t.x - t.y, t.x, t.y, 0, -1), d(t.y - t.x, -t.x - t.y, t.x, t.y, 0, 1)), B === I.ROUND && (d(-t.y - t.x, t.x - t.y, t.x, t.y, -1, -1), d(t.y - t.x, -t.x - t.y, t.x, t.y, -1, 1)), B !== I.ROUND && B !== I.BUTT || (d(-t.y, t.x, t.x, t.y, 0, -1), d(t.y, -t.x, t.x, t.y, 0, 1));
          continue;
        }
        if (H) {
          k(s, e), _ = s.x, c = s.y, B !== I.ROUND && B !== I.BUTT || (d(e.y, -e.x, -e.x, -e.y, 0, -1), d(-e.y, e.x, -e.x, -e.y, 0, 1)), B === I.SQUARE && (d(e.y - e.x, -e.x - e.y, -e.x, -e.y, 0, -1), d(-e.y - e.x, e.x - e.y, -e.x, -e.y, 0, 1)), B === I.ROUND && (d(e.y - e.x, -e.x - e.y, -e.x, -e.y, 1, -1), d(-e.y - e.x, e.x - e.y, -e.x, -e.y, 1, 1));
          continue;
        }
      }
      let m, L, S = -kt(e, t);
      if (Math.abs(S) < 0.01)
        Tt(e, t) > 0 ? (s.x = e.x, s.y = e.y, S = 1, m = Number.MAX_VALUE, L = !0) : (p(s, t), S = 1, m = 1, L = !1);
      else {
        s.x = (e.x + t.x) / S, s.y = (e.y + t.y) / S, m = vt(s);
        const n = (m - 1) * b * F;
        L = m > 4 || n > K && n > Q;
      }
      _ = s.x, c = s.y;
      let $ = j;
      switch (j) {
        case D.BEVEL:
          m < 1.05 && ($ = D.MITER);
          break;
        case D.ROUND:
          m < X && ($ = D.MITER);
          break;
        case D.MITER:
          m > W && ($ = D.BEVEL);
      }
      switch ($) {
        case D.MITER:
          if (d(s.x, s.y, -e.x, -e.y, 0, -1), d(-s.x, -s.y, -e.x, -e.y, 0, 1), H)
            break;
          if (f) {
            const n = Y ? 0 : l;
            u = this._writeVertex(o, y, _, c, t.x, t.y, s.x, s.y, 0, -1, n), h = this._writeVertex(o, y, _, c, t.x, t.y, -s.x, -s.y, 0, 1, n);
          }
          break;
        case D.BEVEL: {
          const n = S < 0;
          let T, V, q, R;
          if (n) {
            const a = u;
            u = h, h = a, T = rt, V = nt;
          } else
            T = nt, V = rt;
          if (L)
            q = n ? p(this._innerPrev, e) : k(this._innerPrev, e), R = n ? k(this._innerNext, t) : p(this._innerNext, t);
          else {
            const a = n ? ft(this._inner, s) : wt(this._inner, s);
            q = a, R = a;
          }
          const U = n ? k(this._bevelStart, e) : p(this._bevelStart, e);
          d(q.x, q.y, -e.x, -e.y, T.x, T.y);
          const yt = d(U.x, U.y, -e.x, -e.y, V.x, V.y);
          if (H)
            break;
          const A = n ? p(this._bevelEnd, t) : k(this._bevelEnd, t);
          if (L) {
            const a = this._writeVertex(o, y, _, c, -e.x, -e.y, 0, 0, 0, 0, l);
            u = this._writeVertex(o, y, _, c, t.x, t.y, R.x, R.y, T.x, T.y, l), h = this._writeVertex(o, y, _, c, t.x, t.y, A.x, A.y, V.x, V.y, l), this._writeTriangle(yt, a, h);
          } else {
            if (f) {
              const a = this._bevelMiddle;
              a.x = (U.x + A.x) / 2, a.y = (U.y + A.y) / 2, et(v, a, -e.x, -e.y), d(a.x, a.y, -e.x, -e.y, v.x, v.y), et(v, a, t.x, t.y), u = this._writeVertex(o, y, _, c, t.x, t.y, a.x, a.y, v.x, v.y, l), h = this._writeVertex(o, y, _, c, t.x, t.y, R.x, R.y, T.x, T.y, l);
            } else {
              const a = u;
              u = h, h = a;
            }
            d(A.x, A.y, t.x, t.y, V.x, V.y);
          }
          if (n) {
            const a = u;
            u = h, h = a;
          }
          break;
        }
        case D.ROUND: {
          const n = S < 0;
          let T, V;
          if (n) {
            const N = u;
            u = h, h = N, T = rt, V = nt;
          } else
            T = nt, V = rt;
          const q = n ? ft(this._inner, s) : wt(this._inner, s);
          let R, U;
          L ? (R = n ? p(this._innerPrev, e) : k(this._innerPrev, e), U = n ? k(this._innerNext, t) : p(this._innerNext, t)) : (R = q, U = q);
          const yt = n ? k(this._roundStart, e) : p(this._roundStart, e), A = n ? p(this._roundEnd, t) : k(this._roundEnd, t), a = d(R.x, R.y, -e.x, -e.y, T.x, T.y), ot = d(yt.x, yt.y, -e.x, -e.y, V.x, V.y);
          if (H)
            break;
          const z = this._writeVertex(o, y, _, c, -e.x, -e.y, 0, 0, 0, 0, l);
          L || this._writeTriangle(u, h, z);
          const O = ft(this._outer, q), J = this._writeVertex(o, y, _, c, t.x, t.y, A.x, A.y, V.x, V.y, l);
          let Z, tt;
          const ht = m > 2;
          if (ht) {
            let N;
            m !== Number.MAX_VALUE ? (O.x /= m, O.y /= m, N = Tt(e, O), N = (m * (N * N - 1) + 1) / N) : N = -1, Z = n ? k(this._startBreak, e) : p(this._startBreak, e), Z.x += e.x * N, Z.y += e.y * N, tt = n ? p(this._endBreak, t) : k(this._endBreak, t), tt.x += t.x * N, tt.y += t.y * N;
          }
          et(v, O, -e.x, -e.y);
          const lt = this._writeVertex(o, y, _, c, -e.x, -e.y, O.x, O.y, v.x, v.y, l);
          et(v, O, t.x, t.y);
          const ct = f ? this._writeVertex(o, y, _, c, t.x, t.y, O.x, O.y, v.x, v.y, l) : lt, ut = z, at = f ? this._writeVertex(o, y, _, c, t.x, t.y, 0, 0, 0, 0, l) : z;
          let it = -1, xt = -1;
          if (ht && (et(v, Z, -e.x, -e.y), it = this._writeVertex(o, y, _, c, -e.x, -e.y, Z.x, Z.y, v.x, v.y, l), et(v, tt, t.x, t.y), xt = this._writeVertex(o, y, _, c, t.x, t.y, tt.x, tt.y, v.x, v.y, l)), f ? ht ? (this._writeTriangle(ut, ot, it), this._writeTriangle(ut, it, lt), this._writeTriangle(at, ct, xt), this._writeTriangle(at, xt, J)) : (this._writeTriangle(ut, ot, lt), this._writeTriangle(at, ct, J)) : ht ? (this._writeTriangle(z, ot, it), this._writeTriangle(z, it, xt), this._writeTriangle(z, xt, J)) : (this._writeTriangle(z, ot, lt), this._writeTriangle(z, ct, J)), L ? (u = this._writeVertex(o, y, _, c, t.x, t.y, U.x, U.y, T.x, T.y, l), h = J) : (u = f ? this._writeVertex(o, y, _, c, t.x, t.y, U.x, U.y, T.x, T.y, l) : a, this._writeTriangle(u, at, J), h = J), n) {
            const N = u;
            u = h, h = N;
          }
          break;
        }
      }
    }
  }
}
export {
  At as c,
  St as i,
  $t as r
};

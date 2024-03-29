import { iX as Ae, gG as ke, iY as Ye, eP as Ze, r as Je, g as He } from "./index-j1oaLRcp.js";
import { I as Ie, L as he } from "./enums-iri-XDIh.js";
import { f as Be, t as ce, n as ne, a as ve, h as Ke, r as Ce, P as X, b as pe } from "./GeometryUtils-lfXCngnH.js";
import { t as Se, C as Xe } from "./BidiEngine-NdusBwFe.js";
import { o as Ee } from "./config-TPD5ZwJG.js";
import { l as fe, m as A, o as Re, n as be, p as Qe, u as Pe, a as ie } from "./StyleDefinition-lNHHnPSw.js";
import { t as D, s as et } from "./Geometry-etmNDSLV.js";
import { r as tt, d as st, n as it, l as rt, a as nt } from "./TileClipper-2O-LVJh2.js";
import { t as F, L as at, m as ot, l as lt } from "./StyleRepository-wXTAe7vD.js";
import { x as Oe } from "./earcut-80XuLCNX.js";
import "vue";
import "./enums-YM9SAu8u.js";
import "./GeometryUtils-ACqEo_je.js";
import "./enums-n72NRQQZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./colorUtils-tSH3jtgH.js";
function ht(c) {
  return c === 746 || c === 747 || !(c < 4352) && (c >= 12704 && c <= 12735 || c >= 12544 && c <= 12591 || c >= 65072 && c <= 65103 && !(c >= 65097 && c <= 65103) || c >= 63744 && c <= 64255 || c >= 13056 && c <= 13311 || c >= 11904 && c <= 12031 || c >= 12736 && c <= 12783 || c >= 12288 && c <= 12351 && !(c >= 12296 && c <= 12305 || c >= 12308 && c <= 12319 || c === 12336) || c >= 13312 && c <= 19903 || c >= 19968 && c <= 40959 || c >= 12800 && c <= 13055 || c >= 12592 && c <= 12687 || c >= 43360 && c <= 43391 || c >= 55216 && c <= 55295 || c >= 4352 && c <= 4607 || c >= 44032 && c <= 55215 || c >= 12352 && c <= 12447 || c >= 12272 && c <= 12287 || c >= 12688 && c <= 12703 || c >= 12032 && c <= 12255 || c >= 12784 && c <= 12799 || c >= 12448 && c <= 12543 && c !== 12540 || c >= 65280 && c <= 65519 && !(c === 65288 || c === 65289 || c === 65293 || c >= 65306 && c <= 65310 || c === 65339 || c === 65341 || c === 65343 || c >= 65371 && c <= 65503 || c === 65507 || c >= 65512 && c <= 65519) || c >= 65104 && c <= 65135 && !(c >= 65112 && c <= 65118 || c >= 65123 && c <= 65126) || c >= 5120 && c <= 5759 || c >= 6320 && c <= 6399 || c >= 65040 && c <= 65055 || c >= 19904 && c <= 19967 || c >= 40960 && c <= 42127 || c >= 42128 && c <= 42191);
}
function ct(c) {
  return !(c < 11904) && (c >= 12704 && c <= 12735 || c >= 12544 && c <= 12591 || c >= 65072 && c <= 65103 || c >= 63744 && c <= 64255 || c >= 13056 && c <= 13311 || c >= 11904 && c <= 12031 || c >= 12736 && c <= 12783 || c >= 12288 && c <= 12351 || c >= 13312 && c <= 19903 || c >= 19968 && c <= 40959 || c >= 12800 && c <= 13055 || c >= 65280 && c <= 65519 || c >= 12352 && c <= 12447 || c >= 12272 && c <= 12287 || c >= 12032 && c <= 12255 || c >= 12784 && c <= 12799 || c >= 12448 && c <= 12543 || c >= 65040 && c <= 65055 || c >= 42128 && c <= 42191 || c >= 40960 && c <= 42127);
}
function ut(c) {
  switch (c) {
    case 10:
    case 32:
    case 38:
    case 40:
    case 41:
    case 43:
    case 45:
    case 47:
    case 173:
    case 183:
    case 8203:
    case 8208:
    case 8211:
    case 8231:
      return !0;
  }
  return !1;
}
function Fe(c) {
  switch (c) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
      return !0;
  }
  return !1;
}
const j = 24, We = 17;
let je = class {
  constructor(e, t, i, s, n, r, a) {
    this._glyphItems = e, this._maxWidth = t, this._lineHeight = i, this._letterSpacing = s, this._hAnchor = n, this._vAnchor = r, this._justify = a;
  }
  getShaping(e, t, i) {
    const s = this._letterSpacing, n = this._lineHeight, r = this._justify, a = this._maxWidth, o = [];
    let l = 0, h = 0;
    const u = e.length;
    for (let g = 0; g < u; g++) {
      const I = e.charCodeAt(g), b = i && ht(I);
      let _;
      for (const M of this._glyphItems)
        if (_ = M[I], _)
          break;
      o.push({ codePoint: I, x: l, y: h, vertical: b, glyphMosaicItem: _ }), _ && (l += _.metrics.advance + s);
    }
    let f = l;
    a > 0 && (f = l / Math.max(1, Math.ceil(l / a)));
    const d = e.indexOf("​") >= 0, x = [];
    for (let g = 0; g < u - 1; g++) {
      const I = o[g].codePoint, b = ct(I);
      if (ut(I) || b) {
        let _ = 0;
        if (I === 10)
          _ -= 1e4;
        else if (b && d)
          _ += 150;
        else {
          I !== 40 && I !== 65288 || (_ += 50);
          const M = o[g + 1].codePoint;
          M !== 41 && M !== 65289 || (_ += 50);
        }
        x.push(this._buildBreak(g + 1, o[g].x, f, x, _, !1));
      }
    }
    const p = this._optimalBreaks(this._buildBreak(u, l, f, x, 0, !0));
    let w = 0;
    const y = t ? -n : n;
    let m = 0;
    for (let g = 0; g < p.length; g++) {
      const I = p[g];
      let b = m;
      for (; b < I && Fe(o[b].codePoint); )
        o[b].glyphMosaicItem = null, ++b;
      let _ = I - 1;
      for (; _ > b && Fe(o[_].codePoint); )
        o[_].glyphMosaicItem = null, --_;
      if (b <= _) {
        const M = o[b].x;
        for (let P = b; P <= _; P++)
          o[P].x -= M, o[P].y = h;
        let T = o[_].x;
        o[_].glyphMosaicItem && (T += o[_].glyphMosaicItem.metrics.advance), w = Math.max(T, w), r && this._applyJustification(o, b, _);
      }
      m = I, h += y;
    }
    if (o.length > 0) {
      const g = p.length - 1, I = (r - this._hAnchor) * w;
      let b = (-this._vAnchor * (g + 1) + 0.5) * n;
      t && g && (b += g * n);
      for (const _ of o)
        _.x += I, _.y += b;
    }
    return o.filter((g) => g.glyphMosaicItem);
  }
  static getTextBox(e, t) {
    if (!e.length)
      return null;
    let i = 1 / 0, s = 1 / 0, n = 0, r = 0;
    for (const a of e) {
      const o = a.glyphMosaicItem.metrics.advance, l = a.x, h = a.y - We, u = l + o, f = h + t;
      i = Math.min(i, l), n = Math.max(n, u), s = Math.min(s, h), r = Math.max(r, f);
    }
    return { x: i, y: s, width: n - i, height: r - s };
  }
  static getBox(e) {
    if (!e.length)
      return null;
    let t = 1 / 0, i = 1 / 0, s = 0, n = 0;
    for (const r of e) {
      const { height: a, left: o, top: l, width: h } = r.glyphMosaicItem.metrics, u = r.x, f = r.y - (a - Math.abs(l)), d = u + h + o, x = f + a;
      t = Math.min(t, u), s = Math.max(s, d), i = Math.min(i, f), n = Math.max(n, x);
    }
    return { x: t, y: i, width: s - t, height: n - i };
  }
  static addDecoration(e, t) {
    const i = e.length;
    if (i === 0)
      return;
    const s = 3;
    let n = e[0].x + e[0].glyphMosaicItem.metrics.left, r = e[0].y;
    for (let o = 1; o < i; o++) {
      const l = e[o];
      if (l.y !== r) {
        const h = e[o - 1].x + e[o - 1].glyphMosaicItem.metrics.left + e[o - 1].glyphMosaicItem.metrics.width;
        e.push({ codePoint: 0, x: n, y: r + t - s, vertical: !1, glyphMosaicItem: { sdf: !0, rect: new Se(4, 0, 4, 8), metrics: { width: h - n, height: 2 + 2 * s, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } }), r = l.y, n = l.x + l.glyphMosaicItem.metrics.left;
      }
    }
    const a = e[i - 1].x + e[i - 1].glyphMosaicItem.metrics.left + e[i - 1].glyphMosaicItem.metrics.width;
    e.push({ codePoint: 0, x: n, y: r + t - s, vertical: !1, glyphMosaicItem: { sdf: !0, rect: new Se(4, 0, 4, 8), metrics: { width: a - n, height: 2 + 2 * s, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } });
  }
  _breakScore(e, t, i, s) {
    const n = (e - t) * (e - t);
    return s ? e < t ? n / 2 : 2 * n : n + Math.abs(i) * i;
  }
  _buildBreak(e, t, i, s, n, r) {
    let a = null, o = this._breakScore(t, i, n, r);
    for (const l of s) {
      const h = t - l.x, u = this._breakScore(h, i, n, r) + l.score;
      u <= o && (a = l, o = u);
    }
    return { index: e, x: t, score: o, previousBreak: a };
  }
  _optimalBreaks(e) {
    return e ? this._optimalBreaks(e.previousBreak).concat(e.index) : [];
  }
  _applyJustification(e, t, i) {
    const s = e[i], n = s.vertical ? j : s.glyphMosaicItem ? s.glyphMosaicItem.metrics.advance : 0, r = (s.x + n) * this._justify;
    for (let a = t; a <= i; a++)
      e[a].x -= r;
  }
};
const ze = 4096, ue = 8, ee = 0.5, Te = 2;
let me = class {
  constructor(e, t, i = 0, s = -1, n = ee) {
    this.x = e, this.y = t, this.angle = i, this.segment = s, this.minzoom = n;
  }
};
class _e {
  constructor(e, t, i, s, n, r = ee, a = ne) {
    this.anchor = e, this.labelAngle = t, this.glyphAngle = i, this.page = s, this.alternateVerticalGlyph = n, this.minzoom = r, this.maxzoom = a;
  }
}
let Ne = class {
  constructor(e, t, i, s, n, r, a, o, l, h, u, f) {
    this.tl = e, this.tr = t, this.bl = i, this.br = s, this.mosaicRect = n, this.labelAngle = r, this.minAngle = a, this.maxAngle = o, this.anchor = l, this.minzoom = h, this.maxzoom = u, this.page = f;
  }
}, Ue = class {
  constructor(e) {
    this.shapes = e;
  }
}, ft = class {
  getIconPlacement(e, t, i) {
    const s = new D(e.x, e.y), n = i.rotationAlignment === fe.MAP, r = i.keepUpright;
    let a = i.rotate * Be;
    n && (a += e.angle);
    const o = new Ue([]);
    return i.allowOverlap && i.ignorePlacement || !Ee || (o.iconColliders = []), this._addIconPlacement(o, s, t, i, a), n && r && this._addIconPlacement(o, s, t, i, a + ce), o;
  }
  _addIconPlacement(e, t, i, s, n) {
    const r = i.pixelRatio, a = i.width / r, o = i.height / r, l = s.offset;
    let h = l[0], u = l[1];
    switch (s.anchor) {
      case A.CENTER:
        h -= a / 2, u -= o / 2;
        break;
      case A.LEFT:
        u -= o / 2;
        break;
      case A.RIGHT:
        h -= a, u -= o / 2;
        break;
      case A.TOP:
        h -= a / 2;
        break;
      case A.BOTTOM:
        h -= a / 2, u -= o;
        break;
      case A.TOP_LEFT:
        break;
      case A.BOTTOM_LEFT:
        u -= o;
        break;
      case A.TOP_RIGHT:
        h -= a;
        break;
      case A.BOTTOM_RIGHT:
        h -= a, u -= o;
    }
    const f = i.rect, d = 2 / r, x = h - d, p = u - d, w = x + f.width / r, y = p + f.height / r, m = new D(x, p), g = new D(w, y), I = new D(x, y), b = new D(w, p);
    if (n !== 0) {
      const M = Math.cos(n), T = Math.sin(n);
      m.rotate(M, T), g.rotate(M, T), I.rotate(M, T), b.rotate(M, T);
    }
    const _ = new Ne(m, b, I, g, f, n, 0, 256, t, ee, ne, 0);
    if (e.shapes.push(_), (!s.allowOverlap || !s.ignorePlacement) && Ee) {
      const M = s.size, T = s.padding, P = { xTile: t.x, yTile: t.y, dxPixels: h * M - T, dyPixels: u * M - T, hard: !s.optional, partIndex: 0, width: a * M + 2 * T, height: o * M + 2 * T, angle: n, minLod: ee, maxLod: ne };
      e.iconColliders.push(P);
    }
  }
  getTextPlacement(e, t, i, s) {
    const n = new D(e.x, e.y), r = s.rotate * Be, a = s.rotationAlignment === fe.MAP, o = s.keepUpright, l = s.padding;
    let h = ee;
    const u = a ? e.angle : 0, f = e.segment >= 0 && a, d = s.allowOverlap && s.ignorePlacement ? null : [], x = [], p = 4, w = !f;
    let y = Number.POSITIVE_INFINITY, m = Number.NEGATIVE_INFINITY, g = y, I = m;
    const b = (f || a) && o, _ = s.size / j;
    let M = !1;
    for (const L of t)
      if (L.vertical) {
        M = !0;
        break;
      }
    let T, P = 0, B = 0;
    if (!f && M) {
      const L = je.getTextBox(t, s.lineHeight * j);
      switch (s.anchor) {
        case A.LEFT:
          P = L.height / 2, B = -L.width / 2;
          break;
        case A.RIGHT:
          P = -L.height / 2, B = L.width / 2;
          break;
        case A.TOP:
          P = L.height / 2, B = L.width / 2;
          break;
        case A.BOTTOM:
          P = -L.height / 2, B = -L.width / 2;
          break;
        case A.TOP_LEFT:
          P = L.height;
          break;
        case A.BOTTOM_LEFT:
          B = -L.width;
          break;
        case A.TOP_RIGHT:
          B = L.width;
          break;
        case A.BOTTOM_RIGHT:
          P = -L.height;
      }
    }
    P += s.offset[0] * j, B += s.offset[1] * j;
    for (const L of t) {
      const S = L.glyphMosaicItem;
      if (!S || S.rect.isEmpty)
        continue;
      const k = S.rect, V = S.metrics, z = S.page;
      if (d && w) {
        if (T !== void 0 && T !== L.y) {
          let R, N, K, W;
          M ? (R = -I + P, N = y + B, K = I - g, W = m - y) : (R = y + P, N = g + B, K = m - y, W = I - g);
          const Z = { xTile: e.x, yTile: e.y, dxPixels: R * _ - l, dyPixels: N * _ - l, hard: !s.optional, partIndex: 1, width: K * _ + 2 * l, height: W * _ + 2 * l, angle: r, minLod: ee, maxLod: ne };
          d.push(Z), y = Number.POSITIVE_INFINITY, m = Number.NEGATIVE_INFINITY, g = y, I = m;
        }
        T = L.y;
      }
      const O = [];
      if (f) {
        const R = 0.5 * S.metrics.width, N = (L.x + V.left - p + R) * _ * ue;
        if (h = this._placeGlyph(e, h, N, i, e.segment, 1, L.vertical, z, O), o && (h = this._placeGlyph(e, h, N, i, e.segment, -1, L.vertical, z, O)), h >= Te)
          break;
      } else
        O.push(new _e(n, u, u, z, !1)), a && o && O.push(new _e(n, u + ce, u + ce, z, !1));
      const v = L.x + V.left, U = L.y - We - V.top, G = v + V.width, Q = U + V.height;
      let E, H, te, se, q, de, De, Ve;
      if (!f && M)
        if (L.vertical) {
          const R = (v + G) / 2 - V.height / 2, N = (U + Q) / 2 + V.width / 2;
          E = new D(-N - p + P, R - p + B), H = new D(E.x + k.width, E.y + k.height), te = new D(E.x, H.y), se = new D(H.x, E.y);
        } else
          E = new D(-U + p + P, v - p + B), H = new D(E.x - k.height, E.y + k.width), te = new D(H.x, E.y), se = new D(E.x, H.y);
      else
        E = new D(v - p + P, U - p + B), H = new D(E.x + k.width, E.y + k.height), te = new D(E.x, H.y), se = new D(H.x, E.y);
      for (const R of O) {
        let N, K, W, Z;
        if (R.alternateVerticalGlyph) {
          if (!q) {
            const J = (U + Q) / 2 + B;
            q = new D((v + G) / 2 + P - V.height / 2 - p, J + V.width / 2 + p), de = new D(q.x + k.height, q.y - k.width), De = new D(de.x, q.y), Ve = new D(q.x, de.y);
          }
          N = q, K = De, W = Ve, Z = de;
        } else
          N = E, K = te, W = se, Z = H;
        const xe = U, Me = Q, ye = R.glyphAngle + r;
        if (ye !== 0) {
          const J = Math.cos(ye), ge = Math.sin(ye);
          N = N.clone(), K = K.clone(), W = W.clone(), Z = Z.clone(), N.rotate(J, ge), Z.rotate(J, ge), K.rotate(J, ge), W.rotate(J, ge);
        }
        let oe = 0, le = 256;
        if (f && M ? L.vertical ? R.alternateVerticalGlyph ? (oe = 32, le = 96) : (oe = 224, le = 32) : (oe = 224, le = 96) : (oe = 192, le = 64), x.push(new Ne(N, W, K, Z, k, R.labelAngle, oe, le, R.anchor, R.minzoom, R.maxzoom, R.page)), d && (!b || this._legible(R.labelAngle))) {
          if (w)
            v < y && (y = v), xe < g && (g = xe), G > m && (m = G), Me > I && (I = Me);
          else if (R.minzoom < Te) {
            const J = { xTile: e.x, yTile: e.y, dxPixels: (v + P) * _ - l, dyPixels: (xe + P) * _ - l, hard: !s.optional, partIndex: 1, width: (G - v) * _ + 2 * l, height: (Me - xe) * _ + 2 * l, angle: ye, minLod: R.minzoom, maxLod: R.maxzoom };
            d.push(J);
          }
        }
      }
    }
    if (h >= Te)
      return null;
    if (d && w) {
      let L, S, k, V;
      M ? (L = -I + P, S = y + B, k = I - g, V = m - y) : (L = y + P, S = g + B, k = m - y, V = I - g);
      const z = { xTile: e.x, yTile: e.y, dxPixels: L * _ - l, dyPixels: S * _ - l, hard: !s.optional, partIndex: 1, width: k * _ + 2 * l, height: V * _ + 2 * l, angle: r, minLod: ee, maxLod: ne };
      d.push(z);
    }
    const C = new Ue(x);
    return d && d.length > 0 && (C.textColliders = d), C;
  }
  _legible(e) {
    const t = Ke(e);
    return t < 65 || t >= 193;
  }
  _placeGlyph(e, t, i, s, n, r, a, o, l) {
    let h = r;
    const u = h < 0 ? ve(e.angle + ce, Ce) : e.angle;
    let f = 0;
    i < 0 && (h *= -1, i *= -1, f = ce), h > 0 && ++n;
    let d = new D(e.x, e.y), x = s[n], p = ne;
    if (s.length <= n)
      return p;
    for (; ; ) {
      const w = x.x - d.x, y = x.y - d.y, m = Math.sqrt(w * w + y * y), g = Math.max(i / m, t), I = w / m, b = y / m, _ = ve(Math.atan2(b, I) + f, Ce);
      if (l.push(new _e(d, u, _, o, !1, g, p)), a && l.push(new _e(d, u, _, o, !0, g, p)), g <= t)
        return g;
      d = x.clone();
      do {
        if (n += h, s.length <= n || n < 0)
          return g;
        x = s[n];
      } while (d.isEqual(x));
      let M = x.x - d.x, T = x.y - d.y;
      const P = Math.sqrt(M * M + T * T);
      M *= m / P, T *= m / P, d.x -= M, d.y -= T, p = g;
    }
  }
};
var ae;
(function(c) {
  c[c.moveTo = 1] = "moveTo", c[c.lineTo = 2] = "lineTo", c[c.close = 7] = "close";
})(ae || (ae = {}));
let dt = class {
  constructor(e, t) {
    this.values = {};
    const i = t.keys, s = t.values;
    for (; e.next(); )
      switch (e.tag()) {
        case 1:
          this.id = e.getUInt64();
          break;
        case 2: {
          const n = e.getMessage(), r = this.values;
          for (; !n.empty(); ) {
            const a = n.getUInt32(), o = n.getUInt32();
            r[i[a]] = s[o];
          }
          n.release();
          break;
        }
        case 3:
          this.type = e.getUInt32();
          break;
        case 4:
          this._pbfGeometry = e.getMessage();
          break;
        default:
          e.skip();
      }
  }
  getGeometry(e) {
    if (this._geometry !== void 0)
      return this._geometry;
    if (!this._pbfGeometry)
      return null;
    const t = this._pbfGeometry;
    let i, s;
    this._pbfGeometry = null, e ? e.reset(this.type) : i = [];
    let n, r = ae.moveTo, a = 0, o = 0, l = 0;
    for (; !t.empty(); ) {
      if (a === 0) {
        const h = t.getUInt32();
        r = 7 & h, a = h >> 3;
      }
      switch (a--, r) {
        case ae.moveTo:
          o += t.getSInt32(), l += t.getSInt32(), e ? e.moveTo(o, l) : (s && i.push(s), s = [], s.push(new D(o, l)));
          break;
        case ae.lineTo:
          o += t.getSInt32(), l += t.getSInt32(), e ? e.lineTo(o, l) : s.push(new D(o, l));
          break;
        case ae.close:
          e ? e.close() : s && !s[0].equals(o, l) && s.push(s[0].clone());
          break;
        default:
          throw t.release(), new Error("Invalid path operation");
      }
    }
    return e ? n = e.result() : (s && i.push(s), n = i), t.release(), this._geometry = n, n;
  }
}, re = class extends F {
  constructor() {
    super(12);
  }
  add(e, t, i) {
    const s = this.array;
    s.push(e), s.push(t), s.push(i);
  }
};
class Le {
  constructor(e) {
    for (this.extent = 4096, this.keys = [], this.values = [], this._pbfLayer = e.clone(); e.next(); )
      switch (e.tag()) {
        case 1:
          this.name = e.getString();
          break;
        case 3:
          this.keys.push(e.getString());
          break;
        case 4:
          this.values.push(e.processMessage(Le._parseValue));
          break;
        case 5:
          this.extent = e.getUInt32();
          break;
        default:
          e.skip();
      }
  }
  getData() {
    return this._pbfLayer;
  }
  static _parseValue(e) {
    for (; e.next(); )
      switch (e.tag()) {
        case 1:
          return e.getString();
        case 2:
          return e.getFloat();
        case 3:
          return e.getDouble();
        case 4:
          return e.getInt64();
        case 5:
          return e.getUInt64();
        case 6:
          return e.getSInt64();
        case 7:
          return e.getBool();
        default:
          e.skip();
      }
    return null;
  }
}
let xt = class extends F {
  constructor(e) {
    super(e);
  }
  add(e, t, i, s, n, r, a, o, l, h, u, f) {
    const d = this.array;
    let x = F.i1616to32(e, t);
    d.push(x);
    const p = 31;
    x = F.i8888to32(Math.round(p * i), Math.round(p * s), Math.round(p * n), Math.round(p * r)), d.push(x), x = F.i8888to32(Math.round(p * a), Math.round(p * o), Math.round(p * l), Math.round(p * h)), d.push(x), x = F.i1616to32(u, 0), d.push(x), f && d.push(...f);
  }
}, yt = class extends F {
  constructor(e) {
    super(e);
  }
  add(e, t, i) {
    const s = this.array;
    s.push(F.i1616to32(e, t)), i && s.push(...i);
  }
};
class gt extends F {
  constructor(e) {
    super(e);
  }
  add(e, t, i, s, n, r, a) {
    const o = this.array, l = this.index;
    let h = F.i1616to32(e, t);
    o.push(h);
    const u = 15;
    return h = F.i8888to32(Math.round(u * i), Math.round(u * s), n, r), o.push(h), a && o.push(...a), l;
  }
}
class $e extends F {
  constructor(e) {
    super(e);
  }
  add(e, t, i, s, n, r, a, o, l, h, u, f) {
    const d = this.array;
    let x = F.i1616to32(e, t);
    d.push(x), x = F.i1616to32(Math.round(8 * i), Math.round(8 * s)), d.push(x), x = F.i8888to32(n / 4, r / 4, o, l), d.push(x), x = F.i8888to32(0, Ke(a), 10 * h, Math.min(10 * u, 255)), d.push(x), f && d.push(...f);
  }
}
let pt = class extends F {
  constructor(e) {
    super(e);
  }
  add(e, t, i, s, n) {
    const r = this.array, a = F.i1616to32(2 * e + i, 2 * t + s);
    r.push(a), n && r.push(...n);
  }
};
class we {
  constructor(e, t, i) {
    this.layerExtent = 4096, this._features = [], this.layer = e, this.zoom = t, this._spriteInfo = i, this._filter = e.getFeatureFilter();
  }
  pushFeature(e) {
    this._filter && !this._filter.filter(e, this.zoom) || this._features.push(e);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
  getResources(e, t, i) {
  }
}
let mt = class extends we {
  constructor(e, t, i, s, n) {
    super(e, t, i), this.type = Ie.CIRCLE, this._circleVertexBuffer = s, this._circleIndexBuffer = n;
  }
  get circleIndexStart() {
    return this._circleIndexStart;
  }
  get circleIndexCount() {
    return this._circleIndexCount;
  }
  processFeatures(e) {
    const t = this._circleVertexBuffer, i = this._circleIndexBuffer;
    this._circleIndexStart = 3 * i.index, this._circleIndexCount = 0;
    const s = this.layer, n = this.zoom;
    e && e.setExtent(this.layerExtent);
    for (const r of this._features) {
      const a = r.getGeometry(e);
      if (!a)
        continue;
      const o = s.circleMaterial.encodeAttributes(r, n, s);
      for (const l of a)
        if (l)
          for (const h of l) {
            const u = t.index;
            t.add(h.x, h.y, 0, 0, o), t.add(h.x, h.y, 0, 1, o), t.add(h.x, h.y, 1, 0, o), t.add(h.x, h.y, 1, 1, o), i.add(u + 0, u + 1, u + 2), i.add(u + 1, u + 2, u + 3), this._circleIndexCount += 6;
          }
    }
  }
  serialize() {
    let e = 6;
    e += this.layerUIDs.length, e += this._circleVertexBuffer.array.length, e += this._circleIndexBuffer.array.length;
    const t = new Uint32Array(e), i = new Int32Array(t.buffer);
    let s = 0;
    t[s++] = this.type, t[s++] = this.layerUIDs.length;
    for (let n = 0; n < this.layerUIDs.length; n++)
      t[s++] = this.layerUIDs[n];
    t[s++] = this._circleIndexStart, t[s++] = this._circleIndexCount, t[s++] = this._circleVertexBuffer.array.length;
    for (let n = 0; n < this._circleVertexBuffer.array.length; n++)
      i[s++] = this._circleVertexBuffer.array[n];
    t[s++] = this._circleIndexBuffer.array.length;
    for (let n = 0; n < this._circleIndexBuffer.array.length; n++)
      t[s++] = this._circleIndexBuffer.array[n];
    return t.buffer;
  }
}, _t = class qe extends we {
  constructor(e, t, i, s, n, r, a) {
    super(e, t, i), this.type = Ie.FILL, this._patternMap = /* @__PURE__ */ new Map(), this._fillVertexBuffer = s, this._fillIndexBuffer = n, this._outlineVertexBuffer = r, this._outlineIndexBuffer = a;
  }
  get fillIndexStart() {
    return this._fillIndexStart;
  }
  get fillIndexCount() {
    return this._fillIndexCount;
  }
  get outlineIndexStart() {
    return this._outlineIndexStart;
  }
  get outlineIndexCount() {
    return this._outlineIndexCount;
  }
  getResources(e, t, i) {
    const s = this.layer, n = this.zoom, r = s.getPaintProperty("fill-pattern");
    if (r)
      if (r.isDataDriven)
        for (const a of this._features)
          t(r.getValue(n, a), !0);
      else
        t(r.getValue(n), !0);
  }
  processFeatures(e) {
    this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
    const t = this.layer, i = this.zoom, { fillMaterial: s, outlineMaterial: n, hasDataDrivenFill: r, hasDataDrivenOutline: a } = t;
    e && e.setExtent(this.layerExtent);
    const o = t.getPaintProperty("fill-pattern"), l = o == null ? void 0 : o.isDataDriven;
    let h = !o && t.getPaintValue("fill-antialias", i);
    if (t.outlineUsesFillColor) {
      if (h && !t.hasDataDrivenOpacity) {
        const d = t.getPaintValue("fill-opacity", i), x = t.getPaintValue("fill-opacity", i + 1);
        d < 1 && x < 1 && (h = !1);
      }
      if (h && !t.hasDataDrivenColor) {
        const d = t.getPaintValue("fill-color", i), x = t.getPaintValue("fill-color", i + 1);
        d[3] < 1 && x[3] < 1 && (h = !1);
      }
    }
    const u = this._features, f = e == null ? void 0 : e.validateTessellation;
    if (l) {
      const d = [];
      for (const x of u) {
        const p = o.getValue(i, x), w = this._spriteInfo[p];
        if (!w || !w.rect)
          continue;
        const y = s.encodeAttributes(x, i, t, w), m = h && a ? n.encodeAttributes(x, i, t) : [], g = x.getGeometry(e);
        d.push({ ddFillAttributes: y, ddOutlineAttributes: m, page: w.page, geometry: g }), d.sort((I, b) => I.page - b.page);
        for (const { ddFillAttributes: I, ddOutlineAttributes: b, page: _, geometry: M } of d)
          this._processFeature(M, h, t.outlineUsesFillColor, I, b, f, _);
      }
    } else
      for (const d of u) {
        const x = r ? s.encodeAttributes(d, i, t) : null, p = h && a ? n.encodeAttributes(d, i, t) : null, w = d.getGeometry(e);
        this._processFeature(w, h, t.outlineUsesFillColor, x, p, f);
      }
  }
  serialize() {
    let e = 10;
    e += this.layerUIDs.length, e += this._fillVertexBuffer.array.length, e += this._fillIndexBuffer.array.length, e += this._outlineVertexBuffer.array.length, e += this._outlineIndexBuffer.array.length, e += 3 * this._patternMap.size + 1;
    const t = new Uint32Array(e), i = new Int32Array(t.buffer);
    let s = 0;
    t[s++] = this.type, t[s++] = this.layerUIDs.length;
    for (let a = 0; a < this.layerUIDs.length; a++)
      t[s++] = this.layerUIDs[a];
    t[s++] = this._fillIndexStart, t[s++] = this._fillIndexCount, t[s++] = this._outlineIndexStart, t[s++] = this._outlineIndexCount;
    const n = this._patternMap, r = n.size;
    if (t[s++] = r, r > 0)
      for (const [a, [o, l]] of n)
        t[s++] = a, t[s++] = o, t[s++] = l;
    t[s++] = this._fillVertexBuffer.array.length;
    for (let a = 0; a < this._fillVertexBuffer.array.length; a++)
      i[s++] = this._fillVertexBuffer.array[a];
    t[s++] = this._fillIndexBuffer.array.length;
    for (let a = 0; a < this._fillIndexBuffer.array.length; a++)
      t[s++] = this._fillIndexBuffer.array[a];
    t[s++] = this._outlineVertexBuffer.array.length;
    for (let a = 0; a < this._outlineVertexBuffer.array.length; a++)
      i[s++] = this._outlineVertexBuffer.array[a];
    t[s++] = this._outlineIndexBuffer.array.length;
    for (let a = 0; a < this._outlineIndexBuffer.array.length; a++)
      t[s++] = this._outlineIndexBuffer.array[a];
    return t.buffer;
  }
  _processFeature(e, t, i, s, n, r, a) {
    if (!e)
      return;
    const o = e.length, l = !n || n.length === 0;
    if (t && (!i || l))
      for (let f = 0; f < o; f++)
        this._processOutline(e[f], n);
    const h = 32;
    let u;
    for (let f = 0; f < o; f++) {
      const d = qe._area(e[f]);
      d > h ? (u !== void 0 && this._processFill(e, u, s, r, a), u = [f]) : d < -h && u !== void 0 && u.push(f);
    }
    u !== void 0 && this._processFill(e, u, s, r, a);
  }
  _processOutline(e, t) {
    const i = this._outlineVertexBuffer, s = this._outlineIndexBuffer, n = s.index;
    let r, a, o;
    const l = new D(0, 0), h = new D(0, 0), u = new D(0, 0);
    let f = -1, d = -1, x = -1, p = -1, w = -1, y = !1;
    const m = 0;
    let g = e.length;
    if (g < 2)
      return;
    const I = e[m];
    let b = e[g - 1];
    for (; g && b.isEqual(I); )
      --g, b = e[g - 1];
    if (!(g - m < 2)) {
      for (let _ = m; _ < g; ++_) {
        _ === m ? (r = e[g - 1], a = e[m], o = e[m + 1], l.assignSub(a, r), l.normalize(), l.rightPerpendicular()) : (r = a, a = o, o = _ !== g - 1 ? e[_ + 1] : e[m], l.assign(h));
        const M = this._isClipEdge(r, a);
        p === -1 && (y = M), h.assignSub(o, a), h.normalize(), h.rightPerpendicular();
        const T = l.x * h.y - l.y * h.x;
        u.assignAdd(l, h), u.normalize();
        const P = -u.x * -l.x + -u.y * -l.y;
        let B = Math.abs(P !== 0 ? 1 / P : 1);
        B > 8 && (B = 8), T >= 0 ? (x = i.add(a.x, a.y, l.x, l.y, 0, 1, t), p === -1 && (p = x), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x), d = i.add(a.x, a.y, B * -u.x, B * -u.y, 0, -1, t), w === -1 && (w = d), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x), f = d, d = x, x = i.add(a.x, a.y, u.x, u.y, 0, 1, t), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x), d = i.add(a.x, a.y, h.x, h.y, 0, 1, t), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x)) : (x = i.add(a.x, a.y, B * u.x, B * u.y, 0, 1, t), p === -1 && (p = x), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x), d = i.add(a.x, a.y, -l.x, -l.y, 0, -1, t), w === -1 && (w = d), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x), f = d, d = x, x = i.add(a.x, a.y, -u.x, -u.y, 0, -1, t), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x), f = i.add(a.x, a.y, -h.x, -h.y, 0, -1, t), f >= 0 && d >= 0 && x >= 0 && !M && s.add(f, d, x));
      }
      f >= 0 && d >= 0 && p >= 0 && !y && s.add(f, d, p), f >= 0 && p >= 0 && w >= 0 && !y && s.add(f, w, p), this._outlineIndexCount += 3 * (s.index - n);
    }
  }
  _processFill(e, t, i, s, n) {
    s = !0;
    let r;
    t.length > 1 && (r = []);
    let a = 0;
    for (const u of t)
      a !== 0 && r.push(a), a += e[u].length;
    const o = 2 * a, l = Ae.acquire();
    for (const u of t) {
      const f = e[u], d = f.length;
      for (let x = 0; x < d; ++x)
        l.push(f[x].x, f[x].y);
    }
    const h = Oe(l, r, 2);
    if (s && Oe.deviation(l, r, 2, h) > 0) {
      const u = t.map((x) => e[x].length), { buffer: f, vertexCount: d } = tt(l, u);
      if (d > 0) {
        const x = this._fillVertexBuffer.index;
        for (let p = 0; p < d; p++)
          this._fillVertexBuffer.add(f[2 * p], f[2 * p + 1], i);
        for (let p = 0; p < d; p += 3) {
          const w = x + p;
          this._fillIndexBuffer.add(w, w + 1, w + 2);
        }
        if (n !== void 0) {
          const p = this._patternMap, w = p.get(n);
          w ? w[1] += d : p.set(n, [this._fillIndexStart + this._fillIndexCount, d]);
        }
        this._fillIndexCount += d;
      }
    } else {
      const u = h.length;
      if (u > 0) {
        const f = this._fillVertexBuffer.index;
        let d = 0;
        for (; d < o; )
          this._fillVertexBuffer.add(l[d++], l[d++], i);
        let x = 0;
        for (; x < u; )
          this._fillIndexBuffer.add(f + h[x++], f + h[x++], f + h[x++]);
        if (n !== void 0) {
          const p = this._patternMap, w = p.get(n);
          w ? w[1] += u : p.set(n, [this._fillIndexStart + this._fillIndexCount, u]);
        }
        this._fillIndexCount += u;
      }
    }
    Ae.release(l);
  }
  _isClipEdge(e, t) {
    return e.x === t.x ? e.x <= -64 || e.x >= 4160 : e.y === t.y && (e.y <= -64 || e.y >= 4160);
  }
  static _area(e) {
    let t = 0;
    const i = e.length - 1;
    for (let s = 0; s < i; s++)
      t += (e[s].x - e[s + 1].x) * (e[s].y + e[s + 1].y);
    return t += (e[i].x - e[0].x) * (e[i].y + e[0].y), 0.5 * t;
  }
};
const It = 65535;
class wt extends we {
  constructor(e, t, i, s, n) {
    super(e, t, i), this.type = Ie.LINE, this._tessellationOptions = { pixelCoordRatio: 8, halfWidth: 0, offset: 0 }, this._patternMap = /* @__PURE__ */ new Map(), this.tessellationProperties = { _lineVertexBuffer: null, _lineIndexBuffer: null, _ddValues: null }, this.tessellationProperties._lineVertexBuffer = s, this.tessellationProperties._lineIndexBuffer = n, this._lineTessellator = new st(Mt(this.tessellationProperties), bt(this.tessellationProperties), e.canUseThinTessellation);
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  getResources(e, t, i) {
    const s = this.layer, n = this.zoom, r = s.hasDataDrivenLine, a = s.getPaintProperty("line-pattern"), o = s.getPaintProperty("line-dasharray"), l = s.getLayoutProperty("line-cap");
    if (!a && !o)
      return;
    const h = (l == null ? void 0 : l.getValue(n)) || 0, u = l == null ? void 0 : l.isDataDriven;
    if (r) {
      const f = a == null ? void 0 : a.isDataDriven, d = o == null ? void 0 : o.isDataDriven;
      if (!f && !d)
        return;
      for (const x of this._features)
        t(f ? a.getValue(n, x) : this._getDashArrayKey(x, n, s, o, u, l, h));
    } else if (a)
      t(a.getValue(n));
    else if (o) {
      const f = o.getValue(n);
      t(s.getDashKey(f, h));
    }
  }
  processFeatures(e) {
    var t, i, s, n, r, a;
    this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
    const o = this.layer, l = this.zoom, h = this._features, u = this._tessellationOptions, { hasDataDrivenLine: f, lineMaterial: d } = o;
    e && e.setExtent(this.layerExtent);
    const x = o.getPaintProperty("line-pattern"), p = o.getPaintProperty("line-dasharray"), w = x == null ? void 0 : x.isDataDriven, y = p == null ? void 0 : p.isDataDriven;
    let m;
    m = o.getLayoutProperty("line-cap");
    const g = (t = m) != null && t.isDataDriven ? m : null, I = g ? null : o.getLayoutValue("line-cap", l), b = I || 0, _ = !!g;
    m = o.getLayoutProperty("line-join");
    const M = (i = m) != null && i.isDataDriven ? m : null, T = M ? null : o.getLayoutValue("line-join", l);
    m = o.getLayoutProperty("line-miter-limit");
    const P = (s = m) != null && s.isDataDriven ? m : null, B = P ? null : o.getLayoutValue("line-miter-limit", l);
    m = o.getLayoutProperty("line-round-limit");
    const C = (n = m) != null && n.isDataDriven ? m : null, L = C ? null : o.getLayoutValue("line-round-limit", l);
    m = o.getPaintProperty("line-width");
    const S = (r = m) != null && r.isDataDriven ? m : null, k = S ? null : o.getPaintValue("line-width", l);
    m = o.getPaintProperty("line-offset");
    const V = (a = m) != null && a.isDataDriven ? m : null, z = V ? null : o.getPaintValue("line-offset", l);
    if (w || y) {
      const O = [];
      for (const v of h) {
        const U = w ? x.getValue(l, v) : this._getDashArrayKey(v, l, o, p, _, g, b), G = this._spriteInfo[U];
        if (!G || !G.rect)
          continue;
        const Q = d.encodeAttributes(v, l, o, G), E = v.getGeometry(e);
        O.push({ ddAttributes: Q, page: G.page, cap: g ? g.getValue(l, v) : I, join: M ? M.getValue(l, v) : T, miterLimit: P ? P.getValue(l, v) : B, roundLimit: C ? C.getValue(l, v) : L, halfWidth: 0.5 * (S ? S.getValue(l, v) : k), offset: V ? V.getValue(l, v) : z, geometry: E });
      }
      O.sort((v, U) => v.page - U.page), u.textured = !0;
      for (const { ddAttributes: v, page: U, cap: G, join: Q, miterLimit: E, roundLimit: H, halfWidth: te, offset: se, geometry: q } of O)
        u.capType = G, u.joinType = Q, u.miterLimit = E, u.roundLimit = H, u.halfWidth = te, u.offset = se, this._processFeature(q, v, U);
    } else {
      u.textured = !(!x && !p), u.capType = I, u.joinType = T, u.miterLimit = B, u.roundLimit = L, u.halfWidth = 0.5 * k, u.offset = z;
      for (const O of h) {
        const v = f ? d.encodeAttributes(O, l, o) : null;
        g && (u.capType = g.getValue(l, O)), M && (u.joinType = M.getValue(l, O)), P && (u.miterLimit = P.getValue(l, O)), C && (u.roundLimit = C.getValue(l, O)), S && (u.halfWidth = 0.5 * S.getValue(l, O)), V && (u.offset = V.getValue(l, O));
        const U = O.getGeometry(e);
        this._processFeature(U, v);
      }
    }
  }
  serialize() {
    let e = 6;
    e += this.layerUIDs.length, e += this.tessellationProperties._lineVertexBuffer.array.length, e += this.tessellationProperties._lineIndexBuffer.array.length, e += 3 * this._patternMap.size + 1;
    const t = new Uint32Array(e), i = new Int32Array(t.buffer);
    let s = 0;
    t[s++] = this.type, t[s++] = this.layerUIDs.length;
    for (let a = 0; a < this.layerUIDs.length; a++)
      t[s++] = this.layerUIDs[a];
    t[s++] = this._lineIndexStart, t[s++] = this._lineIndexCount;
    const n = this._patternMap, r = n.size;
    if (t[s++] = r, r > 0)
      for (const [a, [o, l]] of n)
        t[s++] = a, t[s++] = o, t[s++] = l;
    t[s++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (let a = 0; a < this.tessellationProperties._lineVertexBuffer.array.length; a++)
      i[s++] = this.tessellationProperties._lineVertexBuffer.array[a];
    t[s++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (let a = 0; a < this.tessellationProperties._lineIndexBuffer.array.length; a++)
      t[s++] = this.tessellationProperties._lineIndexBuffer.array[a];
    return t.buffer;
  }
  _processFeature(e, t, i) {
    if (!e)
      return;
    const s = e.length;
    for (let n = 0; n < s; n++)
      this._processGeometry(e[n], t, i);
  }
  _processGeometry(e, t, i) {
    if (e.length < 2)
      return;
    const s = 1e-3;
    let n, r, a = e[0], o = 1;
    for (; o < e.length; )
      n = e[o].x - a.x, r = e[o].y - a.y, n * n + r * r < s * s ? e.splice(o, 1) : (a = e[o], ++o);
    if (e.length < 2)
      return;
    const l = this.tessellationProperties._lineIndexBuffer, h = 3 * l.index;
    this._tessellationOptions.initialDistance = 0, this._tessellationOptions.wrapDistance = It, this.tessellationProperties._ddValues = t, this._lineTessellator.tessellate(e, this._tessellationOptions);
    const u = 3 * l.index - h;
    if (i !== void 0) {
      const f = this._patternMap, d = f.get(i);
      d ? d[1] += u : f.set(i, [h + this._lineIndexCount, u]);
    }
    this._lineIndexCount += u;
  }
  _getDashArrayKey(e, t, i, s, n, r, a) {
    const o = n ? r.getValue(t, e) : a, l = s.getValue(t, e);
    return i.getDashKey(l, o);
  }
}
const Mt = (c) => (e, t, i, s, n, r, a, o, l, h, u) => (c._lineVertexBuffer.add(e, t, a, o, i, s, n, r, l, h, u, c._ddValues), c._lineVertexBuffer.index - 1), bt = (c) => (e, t, i) => {
  c._lineIndexBuffer.add(e, t, i);
}, Ge = 10;
function Pt(c, e) {
  return c.iconMosaicItem && e.iconMosaicItem ? c.iconMosaicItem.page === e.iconMosaicItem.page ? 0 : c.iconMosaicItem.page - e.iconMosaicItem.page : c.iconMosaicItem && !e.iconMosaicItem ? 1 : !c.iconMosaicItem && e.iconMosaicItem ? -1 : 0;
}
class $ extends we {
  constructor(e, t, i, s, n, r, a, o) {
    super(e, t, o.getSpriteItems()), this.type = Ie.SYMBOL, this._markerMap = /* @__PURE__ */ new Map(), this._glyphMap = /* @__PURE__ */ new Map(), this._glyphBufferDataStorage = /* @__PURE__ */ new Map(), this._isIconSDF = !1, this._iconVertexBuffer = i, this._iconIndexBuffer = s, this._textVertexBuffer = n, this._textIndexBuffer = r, this._placementEngine = a, this._workerTileHandler = o;
  }
  get markerPageMap() {
    return this._markerMap;
  }
  get glyphsPageMap() {
    return this._glyphMap;
  }
  get symbolInstances() {
    return this._symbolInstances;
  }
  getResources(e, t, i) {
    const s = this.layer, n = this.zoom;
    e && e.setExtent(this.layerExtent);
    const r = s.getLayoutProperty("icon-image"), a = s.getLayoutProperty("text-field");
    let o = s.getLayoutProperty("text-transform"), l = s.getLayoutProperty("text-font");
    const h = [];
    let u, f, d, x;
    r && !r.isDataDriven && (u = r.getValue(n)), a && !a.isDataDriven && (f = a.getValue(n)), o && o.isDataDriven || (d = s.getLayoutValue("text-transform", n), o = null), l && l.isDataDriven || (x = s.getLayoutValue("text-font", n), l = null);
    for (const p of this._features) {
      const w = p.getGeometry(e);
      if (!w || w.length === 0)
        continue;
      let y, m;
      r && (y = r.isDataDriven ? r.getValue(n, p) : this._replaceKeys(u, p.values), y && t(y));
      let g = !1;
      if (a && (m = a.isDataDriven ? a.getValue(n, p) : this._replaceKeys(f, p.values), m)) {
        switch (m = m.replace(/\\n/g, `
`), o && (d = o.getValue(n, p)), d) {
          case Re.LOWERCASE:
            m = m.toLowerCase();
            break;
          case Re.UPPERCASE:
            m = m.toUpperCase();
        }
        if ($._bidiEngine.hasBidiChar(m)) {
          let M;
          M = $._bidiEngine.checkContextual(m) === "rtl" ? "IDNNN" : "ICNNN", m = $._bidiEngine.bidiTransform(m, M, "VLYSN"), g = !0;
        }
        const _ = m.length;
        if (_ > 0) {
          l && (x = l.getValue(n, p));
          for (const M of x) {
            let T = i[M];
            T || (T = i[M] = /* @__PURE__ */ new Set());
            for (let P = 0; P < _; P++) {
              const B = m.charCodeAt(P);
              T.add(B);
            }
          }
        }
      }
      if (!y && !m)
        continue;
      const I = s.getLayoutValue("symbol-sort-key", n, p), b = { feature: p, sprite: y, label: m, rtl: g, geometry: w, hash: (m ? ke(m) : 0) ^ (y ? ke(y) : 0), priority: I, textFont: x };
      h.push(b);
    }
    this._symbolFeatures = h;
  }
  processFeatures(e) {
    e && e.setExtent(this.layerExtent);
    const t = this.layer, i = this.zoom, s = t.getLayoutValue("symbol-placement", i), n = s !== be.POINT, r = t.getLayoutValue("symbol-spacing", i) * ue, a = t.getLayoutProperty("icon-image"), o = t.getLayoutProperty("text-field"), l = a ? new at(t, i, n) : null, h = o ? new ot(t, i, n) : null, u = this._workerTileHandler;
    let f;
    a && (f = u.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
    const d = [];
    let x = 1;
    h && h.size && (x = h.size / j);
    const p = h ? h.maxAngle * Be : 0, w = h ? h.size * ue : 0;
    for (const y of this._symbolFeatures) {
      let m;
      l && f && y.sprite && (m = f[y.sprite], m && m.sdf && (this._isIconSDF = !0));
      let g;
      m && l.update(i, y.feature);
      let I = 0;
      const b = y.label;
      if (b) {
        h.update(i, y.feature);
        const _ = n ? h.keepUpright : h.writingMode && h.writingMode.indexOf(Qe.VERTICAL) >= 0;
        let M = 0.5;
        switch (h.anchor) {
          case A.TOP_LEFT:
          case A.LEFT:
          case A.BOTTOM_LEFT:
            M = 0;
            break;
          case A.TOP_RIGHT:
          case A.RIGHT:
          case A.BOTTOM_RIGHT:
            M = 1;
        }
        let T = 0.5;
        switch (h.anchor) {
          case A.TOP_LEFT:
          case A.TOP:
          case A.TOP_RIGHT:
            T = 0;
            break;
          case A.BOTTOM_LEFT:
          case A.BOTTOM:
          case A.BOTTOM_RIGHT:
            T = 1;
        }
        let P = 0.5;
        switch (h.justify) {
          case Pe.AUTO:
            P = M;
            break;
          case Pe.LEFT:
            P = 0;
            break;
          case Pe.RIGHT:
            P = 1;
        }
        const B = h.letterSpacing * j, C = n ? 0 : h.maxWidth * j, L = h.lineHeight * j, S = y.textFont.map((k) => u.getGlyphItems(k));
        if (g = new je(S, C, L, B, M, T, P).getShaping(b, y.rtl, _), g && g.length > 0) {
          let k = 1e30, V = -1e30;
          for (const z of g)
            k = Math.min(k, z.x), V = Math.max(V, z.x);
          I = (V - k + 2 * j) * x * ue;
        }
      }
      for (let _ of y.geometry) {
        const M = [];
        if (s === be.LINE) {
          if (g && g.length > 0 && h && h.size) {
            const T = h.size * ue * (2 + Math.min(2, 4 * Math.abs(h.offset[1])));
            _ = $._smoothVertices(_, T);
          }
          $._pushAnchors(M, _, r, I);
        } else
          s === be.LINE_CENTER ? $._pushCenterAnchor(M, _) : y.feature.type === et.Polygon ? $._pushCentroid(M, _) : M.push(new me(_[0].x, _[0].y));
        for (const T of M) {
          if (T.x < 0 || T.x > ze || T.y < 0 || T.y > ze || n && I > 0 && h.rotationAlignment === fe.MAP && !$._honorsTextMaxAngle(_, T, I, p, w))
            continue;
          const P = { shaping: g, line: _, iconMosaicItem: m, anchor: T, symbolFeature: y, textColliders: [], iconColliders: [], textVertexRanges: [], iconVertexRanges: [] };
          d.push(P), this._processFeature(P, l, h);
        }
      }
    }
    d.sort(Pt), this._addPlacedGlyphs(), this._symbolInstances = d;
  }
  serialize() {
    let e = 11;
    e += this.layerUIDs.length, e += 3 * this.markerPageMap.size, e += 3 * this.glyphsPageMap.size, e += $._symbolsSerializationLength(this._symbolInstances), e += this._iconVertexBuffer.array.length, e += this._iconIndexBuffer.array.length, e += this._textVertexBuffer.array.length, e += this._textIndexBuffer.array.length;
    const t = new Uint32Array(e), i = new Int32Array(t.buffer), s = new Float32Array(t.buffer);
    let n = 0;
    t[n++] = this.type, t[n++] = this.layerUIDs.length;
    for (let r = 0; r < this.layerUIDs.length; r++)
      t[n++] = this.layerUIDs[r];
    t[n++] = this._isIconSDF ? 1 : 0, t[n++] = this.markerPageMap.size;
    for (const [r, [a, o]] of this.markerPageMap)
      t[n++] = r, t[n++] = a, t[n++] = o;
    t[n++] = this.glyphsPageMap.size;
    for (const [r, [a, o]] of this.glyphsPageMap)
      t[n++] = r, t[n++] = a, t[n++] = o;
    t[n++] = this._iconVertexBuffer.index / 4, t[n++] = this._textVertexBuffer.index / 4, n = $.serializeSymbols(t, i, s, n, this._symbolInstances), t[n++] = this._iconVertexBuffer.array.length;
    for (let r = 0; r < this._iconVertexBuffer.array.length; r++)
      i[n++] = this._iconVertexBuffer.array[r];
    t[n++] = this._iconIndexBuffer.array.length;
    for (let r = 0; r < this._iconIndexBuffer.array.length; r++)
      t[n++] = this._iconIndexBuffer.array[r];
    t[n++] = this._textVertexBuffer.array.length;
    for (let r = 0; r < this._textVertexBuffer.array.length; r++)
      i[n++] = this._textVertexBuffer.array[r];
    t[n++] = this._textIndexBuffer.array.length;
    for (let r = 0; r < this._textIndexBuffer.array.length; r++)
      t[n++] = this._textIndexBuffer.array[r];
    return t.buffer;
  }
  static _symbolsSerializationLength(e) {
    let t = 0;
    t += 1;
    for (const i of e || []) {
      t += 4, t += 1;
      for (const s of i.textColliders)
        t += Ge;
      for (const s of i.iconColliders)
        t += Ge;
      t += 1, t += 2 * i.textVertexRanges.length, t += 1, t += 2 * i.iconVertexRanges.length;
    }
    return t;
  }
  static serializeSymbols(e, t, i, s, n) {
    n = n || [], t[s++] = n.length;
    for (const r of n) {
      t[s++] = r.anchor.x, t[s++] = r.anchor.y, t[s++] = r.symbolFeature.hash, t[s++] = r.symbolFeature.priority, t[s++] = r.textColliders.length + r.iconColliders.length;
      for (const a of r.textColliders)
        t[s++] = a.xTile, t[s++] = a.yTile, t[s++] = a.dxPixels, t[s++] = a.dyPixels, t[s++] = a.hard ? 1 : 0, t[s++] = a.partIndex, i[s++] = a.minLod, i[s++] = a.maxLod, t[s++] = a.width, t[s++] = a.height;
      for (const a of r.iconColliders)
        t[s++] = a.xTile, t[s++] = a.yTile, t[s++] = a.dxPixels, t[s++] = a.dyPixels, t[s++] = a.hard ? 1 : 0, t[s++] = a.partIndex, i[s++] = a.minLod, i[s++] = a.maxLod, t[s++] = a.width, t[s++] = a.height;
      t[s++] = r.textVertexRanges.length;
      for (const [a, o] of r.textVertexRanges)
        t[s++] = a, t[s++] = o;
      t[s++] = r.iconVertexRanges.length;
      for (const [a, o] of r.iconVertexRanges)
        t[s++] = a, t[s++] = o;
    }
    return s;
  }
  _replaceKeys(e, t) {
    return e.replace(/{([^{}]+)}/g, function(i, s) {
      return s in t ? t[s] : "";
    });
  }
  _processFeature(e, t, i) {
    const { line: s, iconMosaicItem: n, shaping: r, anchor: a } = e, o = this.zoom, l = this.layer, h = !!n;
    let u = !0;
    h && (u = t.optional || !n);
    const f = r && r.length > 0;
    let d, x, p = !0;
    if (f && (p = i.optional), h && (d = this._placementEngine.getIconPlacement(a, n, t)), (d || u) && (f && (x = this._placementEngine.getTextPlacement(a, r, s, i)), x || p)) {
      if (d && x || (p || u ? p || x ? u || d || (x = null) : d = null : (d = null, x = null)), x) {
        const w = l.hasDataDrivenText ? l.textMaterial.encodeAttributes(e.symbolFeature.feature, o, l) : null;
        if (this._storePlacedGlyphs(e, x.shapes, o, i.rotationAlignment, w), x.textColliders) {
          e.textColliders = x.textColliders;
          for (const y of x.textColliders) {
            y.minLod = Math.max(o + X(y.minLod), 0), y.maxLod = Math.min(o + X(y.maxLod), 25);
            const m = y.angle;
            if (m) {
              const g = Math.cos(m), I = Math.sin(m), b = y.dxPixels * g - y.dyPixels * I, _ = y.dxPixels * I + y.dyPixels * g, M = (y.dxPixels + y.width) * g - y.dyPixels * I, T = (y.dxPixels + y.width) * I + y.dyPixels * g, P = y.dxPixels * g - (y.dyPixels + y.height) * I, B = y.dxPixels * I + (y.dyPixels + y.height) * g, C = (y.dxPixels + y.width) * g - (y.dyPixels + y.height) * I, L = (y.dxPixels + y.width) * I + (y.dyPixels + y.height) * g, S = Math.min(b, M, P, C), k = Math.max(b, M, P, C), V = Math.min(_, T, B, L), z = Math.max(_, T, B, L);
              y.dxPixels = S, y.dyPixels = V, y.width = k - S, y.height = z - V;
            }
          }
        }
      }
      if (d) {
        const w = l.hasDataDrivenIcon ? l.iconMaterial.encodeAttributes(e.symbolFeature.feature, o, l) : null;
        if (this._addPlacedIcons(e, d.shapes, o, n.page, t.rotationAlignment === fe.VIEWPORT, w), d.iconColliders) {
          e.iconColliders = d.iconColliders;
          for (const y of d.iconColliders) {
            y.minLod = Math.max(o + X(y.minLod), 0), y.maxLod = Math.min(o + X(y.maxLod), 25);
            const m = y.angle;
            if (m) {
              const g = Math.cos(m), I = Math.sin(m), b = y.dxPixels * g - y.dyPixels * I, _ = y.dxPixels * I + y.dyPixels * g, M = (y.dxPixels + y.width) * g - y.dyPixels * I, T = (y.dxPixels + y.width) * I + y.dyPixels * g, P = y.dxPixels * g - (y.dyPixels + y.height) * I, B = y.dxPixels * I + (y.dyPixels + y.height) * g, C = (y.dxPixels + y.width) * g - (y.dyPixels + y.height) * I, L = (y.dxPixels + y.width) * I + (y.dyPixels + y.height) * g, S = Math.min(b, M, P, C), k = Math.max(b, M, P, C), V = Math.min(_, T, B, L), z = Math.max(_, T, B, L);
              y.dxPixels = S, y.dyPixels = V, y.width = k - S, y.height = z - V;
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(e, t, i, s, n, r) {
    const a = Math.max(i - 1, 0), o = this._iconVertexBuffer, l = this._iconIndexBuffer, h = this._markerMap;
    for (const u of t) {
      const f = n ? 0 : Math.max(i + X(u.minzoom), a), d = n ? 25 : Math.min(i + X(u.maxzoom), 25);
      if (d <= f)
        continue;
      const x = u.tl, p = u.tr, w = u.bl, y = u.br, m = u.mosaicRect, g = u.labelAngle, I = u.minAngle, b = u.maxAngle, _ = u.anchor, M = o.index, T = m.x, P = m.y, B = T + m.width, C = P + m.height, L = o.index;
      o.add(_.x, _.y, x.x, x.y, T, P, g, I, b, f, d, r), o.add(_.x, _.y, p.x, p.y, B, P, g, I, b, f, d, r), o.add(_.x, _.y, w.x, w.y, T, C, g, I, b, f, d, r), o.add(_.x, _.y, y.x, y.y, B, C, g, I, b, f, d, r), e.iconVertexRanges.length > 0 && e.iconVertexRanges[0][0] + e.iconVertexRanges[0][1] === L ? e.iconVertexRanges[0][1] += 4 : e.iconVertexRanges.push([L, 4]), l.add(M + 0, M + 1, M + 2), l.add(M + 1, M + 2, M + 3), h.has(s) ? h.get(s)[1] += 6 : h.set(s, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
    }
  }
  _addPlacedGlyphs() {
    const e = this._textVertexBuffer, t = this._textIndexBuffer, i = this._glyphMap;
    for (const [s, n] of this._glyphBufferDataStorage)
      for (const r of n) {
        const a = e.index, o = r.symbolInstance, l = r.ddAttributes, h = e.index;
        e.add(r.glyphAnchor[0], r.glyphAnchor[1], r.tl[0], r.tl[1], r.xmin, r.ymin, r.labelAngle, r.minAngle, r.maxAngle, r.minLod, r.maxLod, l), e.add(r.glyphAnchor[0], r.glyphAnchor[1], r.tr[0], r.tr[1], r.xmax, r.ymin, r.labelAngle, r.minAngle, r.maxAngle, r.minLod, r.maxLod, l), e.add(r.glyphAnchor[0], r.glyphAnchor[1], r.bl[0], r.bl[1], r.xmin, r.ymax, r.labelAngle, r.minAngle, r.maxAngle, r.minLod, r.maxLod, l), e.add(r.glyphAnchor[0], r.glyphAnchor[1], r.br[0], r.br[1], r.xmax, r.ymax, r.labelAngle, r.minAngle, r.maxAngle, r.minLod, r.maxLod, l), o.textVertexRanges.length > 0 && o.textVertexRanges[0][0] + o.textVertexRanges[0][1] === h ? o.textVertexRanges[0][1] += 4 : o.textVertexRanges.push([h, 4]), t.add(a + 0, a + 1, a + 2), t.add(a + 1, a + 2, a + 3), i.has(s) ? i.get(s)[1] += 6 : i.set(s, [this._textIndexStart + this._textIndexCount, 6]), this._textIndexCount += 6;
      }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(e, t, i, s, n) {
    const r = Math.max(i - 1, 0), a = s === fe.VIEWPORT;
    let o, l, h, u, f, d, x, p, w, y, m;
    for (const g of t)
      o = a ? 0 : Math.max(i + X(g.minzoom), r), l = a ? 25 : Math.min(i + X(g.maxzoom), 25), !(l <= o) && (h = g.tl, u = g.tr, f = g.bl, d = g.br, x = g.labelAngle, p = g.minAngle, w = g.maxAngle, y = g.anchor, m = g.mosaicRect, this._glyphBufferDataStorage.has(g.page) || this._glyphBufferDataStorage.set(g.page, []), this._glyphBufferDataStorage.get(g.page).push({ glyphAnchor: [y.x, y.y], tl: [h.x, h.y], tr: [u.x, u.y], bl: [f.x, f.y], br: [d.x, d.y], xmin: m.x, ymin: m.y, xmax: m.x + m.width, ymax: m.y + m.height, labelAngle: x, minAngle: p, maxAngle: w, minLod: o, maxLod: l, placementLod: r, symbolInstance: e, ddAttributes: n }));
  }
  static _pushAnchors(e, t, i, s) {
    i += s;
    let n = 0;
    const r = t.length - 1;
    for (let f = 0; f < r; f++)
      n += D.distance(t[f], t[f + 1]);
    let a = s || i;
    if (a *= 0.5, n <= a)
      return;
    const o = a / n;
    let l = 0, h = -(i = n / Math.max(Math.round(n / i), 1)) / 2;
    const u = t.length - 1;
    for (let f = 0; f < u; f++) {
      const d = t[f], x = t[f + 1], p = x.x - d.x, w = x.y - d.y, y = Math.sqrt(p * p + w * w);
      let m;
      for (; h + i < l + y; ) {
        h += i;
        const g = (h - l) / y, I = pe(d.x, x.x, g), b = pe(d.y, x.y, g);
        m === void 0 && (m = Math.atan2(w, p)), e.push(new me(I, b, m, f, o));
      }
      l += y;
    }
  }
  static _pushCenterAnchor(e, t) {
    let i = 0;
    const s = t.length - 1;
    for (let o = 0; o < s; o++)
      i += D.distance(t[o], t[o + 1]);
    const n = i / 2;
    let r = 0;
    const a = t.length - 1;
    for (let o = 0; o < a; o++) {
      const l = t[o], h = t[o + 1], u = h.x - l.x, f = h.y - l.y, d = Math.sqrt(u * u + f * f);
      if (n < r + d) {
        const x = (n - r) / d, p = pe(l.x, h.x, x), w = pe(l.y, h.y, x), y = Math.atan2(f, u);
        return void e.push(new me(p, w, y, o, 0));
      }
      r += d;
    }
  }
  static _deviation(e, t, i) {
    const s = (t.x - e.x) * (i.x - t.x) + (t.y - e.y) * (i.y - t.y), n = (t.x - e.x) * (i.y - t.y) - (t.y - e.y) * (i.x - t.x);
    return Math.atan2(n, s);
  }
  static _honorsTextMaxAngle(e, t, i, s, n) {
    let r = 0;
    const a = i / 2;
    let o = new D(t.x, t.y), l = t.segment + 1;
    for (; r > -a; ) {
      if (--l, l < 0)
        return !1;
      r -= D.distance(e[l], o), o = e[l];
    }
    r += D.distance(e[l], e[l + 1]);
    const h = [];
    let u = 0;
    const f = e.length;
    for (; r < a; ) {
      const d = e[l];
      let x, p = l;
      do {
        if (++p, p === f)
          return !1;
        x = e[p];
      } while (x.isEqual(d));
      let w, y = p;
      do {
        if (++y, y === f)
          return !1;
        w = e[y];
      } while (w.isEqual(x));
      const m = this._deviation(d, x, w);
      for (h.push({ deviation: m, distToAnchor: r }), u += m; r - h[0].distToAnchor > n; )
        u -= h.shift().deviation;
      if (Math.abs(u) > s)
        return !1;
      r += D.distance(x, w), l = p;
    }
    return !0;
  }
  static _smoothVertices(e, t) {
    if (t <= 0)
      return e;
    let i = e.length;
    if (i < 3)
      return e;
    const s = [];
    let n = 0, r = 0;
    s.push(0);
    for (let p = 1; p < i; p++) {
      const w = D.distance(e[p], e[p - 1]);
      w > 0 && (n += w, s.push(n), r++, r !== p && (e[r] = e[p]));
    }
    if (i = r + 1, i < 3)
      return e;
    t = Math.min(t, 0.2 * n);
    const a = e[0].x, o = e[0].y, l = e[i - 1].x, h = e[i - 1].y, u = D.sub(e[0], e[1]);
    u.normalize(), e[0].x += t * u.x, e[0].y += t * u.y, u.assignSub(e[i - 1], e[i - 2]), u.normalize(), e[i - 1].x += t * u.x, e[i - 1].y += t * u.y, s[0] -= t, s[i - 1] += t;
    const f = [];
    f.push(new D(a, o));
    const d = 1e-6, x = 0.5 * t;
    for (let p = 1; p < i - 1; p++) {
      let w = 0, y = 0, m = 0;
      for (let g = p - 1; g >= 0; g--) {
        const I = x + s[g + 1] - s[p];
        if (I < 0)
          break;
        const b = s[g + 1] - s[g], _ = s[p] - s[g] < x ? 1 : I / b;
        if (_ < d)
          break;
        const M = _ * _, T = _ * I - 0.5 * M * b, P = _ * b / t, B = e[g + 1], C = e[g].x - B.x, L = e[g].y - B.y;
        w += P / T * (B.x * _ * I + 0.5 * M * (I * C - b * B.x) - M * _ * b * C / 3), y += P / T * (B.y * _ * I + 0.5 * M * (I * L - b * B.y) - M * _ * b * L / 3), m += P;
      }
      for (let g = p + 1; g < i; g++) {
        const I = x - s[g - 1] + s[p];
        if (I < 0)
          break;
        const b = s[g] - s[g - 1], _ = s[g] - s[p] < x ? 1 : I / b;
        if (_ < d)
          break;
        const M = _ * _, T = _ * I - 0.5 * M * b, P = _ * b / t, B = e[g - 1], C = e[g].x - B.x, L = e[g].y - B.y;
        w += P / T * (B.x * _ * I + 0.5 * M * (I * C - b * B.x) - M * _ * b * C / 3), y += P / T * (B.y * _ * I + 0.5 * M * (I * L - b * B.y) - M * _ * b * L / 3), m += P;
      }
      f.push(new D(w / m, y / m));
    }
    return f.push(new D(l, h)), e[0].x = a, e[0].y = o, e[i - 1].x = l, e[i - 1].y = h, f;
  }
  static _pushCentroid(e, t) {
    const a = t.length - 1;
    let o = 0, l = 0, h = 0, u = t[0].x, f = t[0].y;
    u > 4096 && (u = 4096), u < 0 && (u = 0), f > 4096 && (f = 4096), f < 0 && (f = 0);
    for (let d = 1; d < a; d++) {
      let x = t[d].x, p = t[d].y, w = t[d + 1].x, y = t[d + 1].y;
      x > 4096 && (x = 4096), x < 0 && (x = 0), p > 4096 && (p = 4096), p < 0 && (p = 0), w > 4096 && (w = 4096), w < 0 && (w = 0), y > 4096 && (y = 4096), y < 0 && (y = 0);
      const m = (x - u) * (y - f) - (w - u) * (p - f);
      o += m * (u + x + w), l += m * (f + p + y), h += m;
    }
    o /= 3 * h, l /= 3 * h, isNaN(o) || isNaN(l) || e.push(new me(o, l));
  }
}
$._bidiEngine = new Xe();
var Y;
(function(c) {
  c[c.INITIALIZED = 0] = "INITIALIZED", c[c.NO_DATA = 1] = "NO_DATA", c[c.READY = 2] = "READY", c[c.MODIFIED = 3] = "MODIFIED", c[c.INVALID = 4] = "INVALID";
})(Y || (Y = {}));
const Tt = 8, Bt = 14, Lt = 5;
class Dt {
  constructor(e, t, i, s, n) {
    if (this._pbfTiles = {}, this._tileClippers = {}, this._client = i, this._tile = t, n) {
      this._styleLayerUIDs = /* @__PURE__ */ new Set();
      for (const h of n)
        this._styleLayerUIDs.add(h);
    }
    this._styleRepository = s, this._layers = this._styleRepository.layers;
    const [r, a, o] = t.tileKey.split("/").map(parseFloat);
    this._level = r;
    const l = Tt + Math.max((this._level - Bt) * Lt, 0);
    for (const h of Object.keys(e)) {
      const u = e[h];
      if (this._pbfTiles[h] = new Ye(new Uint8Array(u.protobuff), new DataView(u.protobuff)), u.refKey) {
        const [f] = u.refKey.split("/").map(parseFloat), d = r - f;
        if (d > 0) {
          const x = (1 << d) - 1, p = a & x, w = o & x;
          this._tileClippers[h] = new it(d, p, w, 8, l);
        }
      }
      this._tileClippers[h] || (this._tileClippers[h] = new rt());
    }
  }
  _canParseStyleLayer(e) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(e);
  }
  async parse(e) {
    const t = nt(), i = this._initialize(e), { returnedBuckets: s } = i;
    this._processLayers(i), this._linkReferences(i), this._filterFeatures(i);
    const n = [], r = /* @__PURE__ */ new Set(), a = (h, u) => {
      r.has(h) || (n.push({ name: h, repeat: u }), r.add(h));
    }, o = {};
    for (const h of s)
      h.getResources(h.tileClipper, a, o);
    if (this._tile.status === Y.INVALID)
      return Promise.resolve([]);
    const l = this._fetchResources(n, o, e);
    return Promise.all([...l, t]).then(() => this._processFeatures(i.returnedBuckets));
  }
  _initialize(e) {
    return { signal: e && e.signal, sourceNameToTileData: this._parseTileData(this._pbfTiles), layers: this._layers, zoom: this._level, sourceNameToTileClipper: this._tileClippers, sourceNameToUniqueSourceLayerBuckets: {}, sourceNameToUniqueSourceLayers: {}, returnedBuckets: [], layerIdToBucket: {}, referencerUIDToReferencedId: /* @__PURE__ */ new Map() };
  }
  _processLayers(e) {
    const { sourceNameToTileData: t, layers: i, zoom: s, sourceNameToTileClipper: n, sourceNameToUniqueSourceLayerBuckets: r, sourceNameToUniqueSourceLayers: a, returnedBuckets: o, layerIdToBucket: l, referencerUIDToReferencedId: h } = e;
    for (let u = i.length - 1; u >= 0; u--) {
      const f = i[u];
      if (!this._canParseStyleLayer(f.uid) || f.minzoom && s < Math.floor(f.minzoom) || f.maxzoom && s >= f.maxzoom || f.type === ie.BACKGROUND || !t[f.source] || !n[f.source])
        continue;
      const d = t[f.source], x = n[f.source], p = f.sourceLayer, w = d[p];
      if (w) {
        let y = a[f.source];
        if (y || (y = a[f.source] = /* @__PURE__ */ new Set()), y.add(f.sourceLayer), f.refLayerId)
          h.set(f.uid, f.refLayerId);
        else {
          const m = this._createBucket(f);
          if (m) {
            m.layerUIDs = [f.uid], m.layerExtent = w.extent, m.tileClipper = x;
            let g = r[f.source];
            g || (g = r[f.source] = {});
            let I = g[p];
            I || (I = g[p] = []), I.push(m), o.push(m), l[f.id] = m;
          }
        }
      }
    }
  }
  _linkReferences(e) {
    const { layerIdToBucket: t, referencerUIDToReferencedId: i } = e;
    i.forEach((s, n) => {
      t[s = s] && t[s].layerUIDs.push(n);
    });
  }
  _filterFeatures(e) {
    const { signal: t, sourceNameToTileData: i, sourceNameToUniqueSourceLayerBuckets: s, sourceNameToUniqueSourceLayers: n } = e, r = 10 * this._level, a = 10 * (this._level + 1), o = [], l = [];
    for (const h of Object.keys(n))
      n[h].forEach((u) => {
        o.push(u), l.push(h);
      });
    for (let h = 0; h < o.length; h++) {
      const u = l[h], f = o[h];
      if (!i[u] || !s[u])
        continue;
      const d = i[u][f], x = s[u][f];
      if (!x || x.length === 0)
        continue;
      if (Ze(t))
        return;
      const p = d.getData();
      for (; p.nextTag(2); ) {
        const w = p.getMessage(), y = new dt(w, d);
        w.release();
        const m = y.values;
        if (m) {
          const g = m._minzoom;
          if (g && g >= a)
            continue;
          const I = m._maxzoom;
          if (I && I <= r)
            continue;
        }
        for (const g of x)
          g.pushFeature(y);
      }
    }
  }
  _fetchResources(e, t, i) {
    const s = [], n = this._tile.getWorkerTileHandler();
    let r, a;
    e.length > 0 && (r = n.fetchSprites(e, this._client, i), s.push(r));
    for (const o in t) {
      const l = t[o];
      l.size > 0 && (a = n.fetchGlyphs(this._tile.tileKey, o, l, this._client, i), s.push(a));
    }
    return s;
  }
  _processFeatures(e) {
    const t = e.filter((i) => i.hasFeatures() || this._canParseStyleLayer(i.layer.uid));
    for (const i of t)
      i.processFeatures(i.tileClipper);
    return t;
  }
  _parseTileData(e) {
    const t = {};
    for (const i of Object.keys(e)) {
      const s = e[i], n = {};
      for (; s.next(); )
        switch (s.tag()) {
          case 3: {
            const r = s.getMessage(), a = new Le(r);
            r.release(), n[a.name] = a;
            break;
          }
          default:
            s.skip();
        }
      t[i] = n;
    }
    return t;
  }
  _createBucket(e) {
    switch (e.type) {
      case ie.BACKGROUND:
        return null;
      case ie.FILL:
        return this._createFillBucket(e);
      case ie.LINE:
        return this._createLineBucket(e);
      case ie.CIRCLE:
        return this._createCircleBucket(e);
      case ie.SYMBOL:
        return this._createSymbolBucket(e);
    }
  }
  _createFillBucket(e) {
    return new _t(e, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new yt(e.fillMaterial.getStride()), new re(), new gt(e.outlineMaterial.getStride()), new re());
  }
  _createLineBucket(e) {
    return new wt(e, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new xt(e.lineMaterial.getStride()), new re());
  }
  _createCircleBucket(e) {
    return new mt(e, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new pt(e.circleMaterial.getStride()), new re());
  }
  _createSymbolBucket(e) {
    const t = this._tile;
    return new $(e, this._level, new $e(e.iconMaterial.getStride()), new re(), new $e(e.textMaterial.getStride()), new re(), t.placementEngine, t.getWorkerTileHandler());
  }
}
class Vt {
  constructor(e, t, i, s) {
    this.status = Y.INITIALIZED, this.placementEngine = new ft(), this.tileKey = e, this.refKeys = t, this._workerTileHandler = i, this._styleRepository = s;
  }
  release() {
    this.tileKey = "", this.refKeys = null, this.status = Y.INITIALIZED, this._workerTileHandler = null;
  }
  async parse(e, t) {
    const i = t && t.signal;
    if (Je(i)) {
      const h = () => {
        i.removeEventListener("abort", h), this.status = Y.INVALID;
      };
      i.addEventListener("abort", h);
    }
    let s;
    const n = { bucketsWithData: [], emptyBuckets: null };
    try {
      s = await this._parse(e, t);
    } catch (h) {
      if (He(h))
        throw h;
      return { result: n, transferList: [] };
    }
    this.status = Y.READY;
    const r = n.bucketsWithData, a = [];
    for (const h of s)
      if (h.hasFeatures()) {
        const u = h.serialize();
        r.push(u);
      } else
        a.push(h.layer.uid);
    const o = [...r];
    let l = null;
    return a.length > 0 && (l = Uint32Array.from(a), o.push(l.buffer)), n.emptyBuckets = l, { result: n, transferList: o };
  }
  setObsolete() {
    this.status = Y.INVALID;
  }
  getLayers() {
    return this._workerTileHandler.getLayers();
  }
  getWorkerTileHandler() {
    return this._workerTileHandler;
  }
  async _parse(e, t) {
    const i = e.sourceName2DataAndRefKey;
    return Object.keys(i).length === 0 ? [] : (this.status = Y.MODIFIED, new Dt(i, this, t.client, this._styleRepository, e.styleLayerUIDs).parse(t));
  }
}
class is {
  constructor() {
    this._spriteInfo = {}, this._glyphInfo = {};
  }
  reset() {
    return this._spriteInfo = {}, this._glyphInfo = {}, Promise.resolve();
  }
  getLayers() {
    var e;
    return (e = this._styleRepository) == null ? void 0 : e.layers;
  }
  async createTileAndParse(e, t) {
    const { key: i } = e, s = {};
    for (const r of Object.keys(e.sourceName2DataAndRefKey)) {
      const a = e.sourceName2DataAndRefKey[r];
      s[r] = a.refKey;
    }
    const n = new Vt(i, s, this, this._styleRepository);
    try {
      return await n.parse(e, t);
    } catch (r) {
      if (n.setObsolete(), n.release(), !He(r))
        throw r;
      return null;
    }
  }
  updateStyle(e) {
    if (!e || e.length === 0 || !this._styleRepository)
      return;
    const t = this._styleRepository;
    for (const i of e) {
      const s = i.type, n = i.data;
      switch (s) {
        case he.PAINTER_CHANGED:
          t.setPaintProperties(n.layer, n.paint);
          break;
        case he.LAYOUT_CHANGED:
          t.setLayoutProperties(n.layer, n.layout);
          break;
        case he.LAYER_REMOVED:
          t.deleteStyleLayer(n.layer);
          break;
        case he.LAYER_CHANGED:
          t.setStyleLayer(n.layer, n.index);
          break;
        case he.SPRITES_CHANGED:
          this._spriteInfo = {};
      }
    }
  }
  setStyle(e) {
    this._styleRepository = new lt(e), this._spriteInfo = {}, this._glyphInfo = {};
  }
  fetchSprites(e, t, i) {
    const s = [], n = this._spriteInfo;
    for (const r of e)
      n[r.name] === void 0 && s.push(r);
    return s.length === 0 ? Promise.resolve() : t.invoke("getSprites", s, { signal: i && i.signal }).then((r) => {
      for (const a in r) {
        const o = r[a];
        n[a] = o;
      }
    });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(e, t, i, s, n) {
    const r = [];
    let a = this._glyphInfo[t];
    return a ? i.forEach((o) => {
      a[o] || r.push(o);
    }) : (a = this._glyphInfo[t] = [], i.forEach((o) => r.push(o))), r.length === 0 ? Promise.resolve() : s.invoke("getGlyphs", { tileID: e, font: t, codePoints: r }, n).then((o) => {
      for (let l = 0; l < o.length; l++)
        o[l] && (a[l] = o[l]);
    });
  }
  getGlyphItems(e) {
    return this._glyphInfo[e];
  }
}
export {
  is as default
};

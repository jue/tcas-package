import { af as an, Q as yn, M as K, Y as $, l as z, r as S, ag as W, ab as G, ah as dn, y as Mn, ai as k, aj as E, ak as U, al as wn, am as Rn, m as Pn, an as D } from "./index-j1oaLRcp.js";
function ln(n, t, i) {
  return !dn(n, t, i);
}
function C(n, t, i) {
  const r = ln(n, t, i);
  if (r && !an())
    throw new Mn("rasterprojectionhelper-project", "projection engine is not loaded");
  return r;
}
const V = function(n, t, i, r = 0) {
  if (i[0] === 1)
    return [0, 0];
  let a = 1, e = -1, o = 1, c = -1;
  for (let u = 0; u < n.length; u += 2)
    isNaN(n[u]) || (a = a > n[u] ? n[u] : a, e = e > n[u] ? e : n[u], o = o > n[u + 1] ? n[u + 1] : o, c = c > n[u + 1] ? c : n[u + 1]);
  const { cols: s, rows: m } = t, h = (e - a) / s / i[0], R = (c - o) / m / i[1], g = 2 * r;
  let d = 0, l = !1, f = [0, 0];
  for (let u = 0; u < s - 3; u++) {
    for (let y = 0; y < m - 3; y++) {
      const x = u * m * 2 + 2 * y, p = (n[x] + n[x + 4] + n[x + 4 * m] + n[x + 4 * m + 4]) / 4, M = (n[x + 1] + n[x + 5] + n[x + 4 * m + 1] + n[x + 4 * m + 5]) / 4, w = Math.abs((p - n[x + 2 * m + 2]) / h), P = Math.abs((M - n[x + 2 * m + 3]) / R);
      if (w + P > d && (d = w + P, f = [w, P]), g && d > g) {
        l = !0;
        break;
      }
    }
    if (l)
      break;
  }
  return f;
}, Sn = { 3395: 20037508342789244e-9, 3410: 17334193943686873e-9, 3857: 20037508342788905e-9, 3975: 17367530445161372e-9, 4087: 20037508342789244e-9, 4088: 20015108787169147e-9, 6933: 17367530445161372e-9, 32662: 20037508342789244e-9, 53001: 2001508679602057e-8, 53002: 1000754339801029e-8, 53003: 2001508679602057e-8, 53004: 2001508679602057e-8, 53016: 14152803599503474e-9, 53017: 17333573624304302e-9, 53034: 2001508679602057e-8, 53079: 20015114352186374e-9, 53080: 20015114352186374e-9, 54001: 20037508342789244e-9, 54002: 10018754171394624e-9, 54003: 20037508342789244e-9, 54004: 20037508342789244e-9, 54016: 14168658027268292e-9, 54017: 1736753044516137e-8, 54034: 20037508342789244e-9, 54079: 20037508342789244e-9, 54080: 20037508342789244e-9, 54100: 20037508342789244e-9, 54101: 20037508342789244e-9 }, Y = 32, I = 4, L = I, q = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
async function Cn() {
  if (an())
    return null;
  await yn();
}
function _n(n, t, i) {
  return C(n.spatialReference, t) ? i ? D(t, n.spatialReference, n) : D(n.spatialReference, t, n) : null;
}
function Z(n, t, i, r = null) {
  const a = n.spatialReference;
  if (a.equals(t))
    return n;
  C(a, t, r);
  const e = i.center, o = new K({ xmin: e.x - n.x / 2, xmax: e.x + n.x / 2, ymin: e.y - n.y / 2, ymax: e.y + n.y / 2, spatialReference: a }), c = $(o, t, r);
  if (z(c))
    return null;
  const s = { x: c.xmax - c.xmin, y: c.ymax - c.ymin }, m = T(t);
  if (S(m) && s.x >= m) {
    const h = W(a) / W(t);
    s.x = n.x * h, s.y = n.y * h;
  }
  return s;
}
function N(n, t = 0.01) {
  return W(n) ? t / W(n) : 0;
}
function nn(n, t, i = null, r = !0) {
  const a = n.spatialReference;
  if (a.equals(t))
    return n;
  C(a, t, i);
  const e = $(n, t, i);
  if (!r || !e)
    return e;
  const o = B(a, !0), c = B(t, !0), s = N(a);
  return s && S(o) && S(c) && (e.x > 0 && Math.abs(n.x - o[0]) < s ? e.x -= c[1] - c[0] : e.x < 0 && Math.abs(n.x - o[1]) < s && (e.x += c[1] - c[0])), e;
}
function bn(n) {
  const { inSR: t, outSR: i, datumTransformation: r, preferPE: a } = n;
  if (t.equals(i)) {
    const { points: e } = Q(n, null);
    return e;
  }
  if (t.isWebMercator && i.isWGS84 || t.isWGS84 && i.isWebMercator)
    return En(n);
  if (C(t, i, r) && a) {
    if (t.isGeographic)
      return tn(n);
    const e = O(t);
    if (S(e))
      return tn(n);
  }
  return Gn(n);
}
function Gn(n) {
  const { points: t } = Q(n, null), i = t.map((r) => new G(r[0], r[1], n.inSR));
  return $(i, n.outSR, n.datumTransformation).map((r) => r ? [r.x, r.y] : [NaN, NaN]);
}
function tn(n) {
  const { inSR: t, outSR: i, datumTransformation: r } = n, a = O(t), { points: e, mask: o } = Q(n, a);
  if (!t.isGeographic) {
    const s = t.wkid ? k.coordsys(t.wkid) : k.fromString(t.isGeographic ? E.PE_TYPE_GEOGCS : E.PE_TYPE_PROJCS, t.wkt);
    U.projToGeog(s, e.length, e);
  }
  if (S(r) && r.steps.length && r.steps.forEach((s) => {
    const m = s.wkid ? k.geogtran(s.wkid) : k.fromString(E.PE_TYPE_GEOGTRAN, s.wkt);
    wn.geogToGeog(m, e.length, e, null, s.isInverse ? E.PE_TRANSFORM_2_TO_1 : E.PE_TRANSFORM_1_TO_2);
  }), !i.isGeographic) {
    const s = O(i, !0), m = S(s) && s.isEnvelope ? [s.bbox[1], s.bbox[3]] : [-90, 90];
    kn(e, m);
    const h = i.wkid ? k.coordsys(i.wkid) : k.fromString(i.isGeographic ? E.PE_TYPE_GEOGCS : E.PE_TYPE_PROJCS, i.wkt);
    U.geogToProj(h, e.length, e);
  }
  let c = e;
  if (o && e.length !== o.length) {
    c = [];
    for (let s = 0, m = 0; s < o.length; s++)
      o[s] ? c.push(e[m++]) : c.push([NaN, NaN]);
  }
  return c;
}
function En(n) {
  const { cols: t, rows: i, xres: r, yres: a, usePixelCenter: e, inSR: o, outSR: c } = n;
  let { xmin: s, ymax: m } = n;
  e && (s += r / 2, m -= a / 2);
  const h = [], R = [], g = Math.max(t, i);
  for (let l = 0; l < g; l++) {
    const f = s + r * Math.min(t, l), u = m - a * Math.min(i, l), y = $(new G({ x: f, y: u, spatialReference: o }), c);
    l <= t && h.push(y.x), l <= i && R.push(y.y);
  }
  const d = [];
  for (let l = 0; l < t; l++)
    for (let f = 0; f < i; f++)
      d.push([h[l], R[f]]);
  return d;
}
function O(n, t = !1) {
  let i = n.wkid || n.wkt;
  if (!i || n.isGeographic)
    return null;
  if (i = String(i), q.has(i)) {
    const o = q.get(i);
    return t ? o == null ? void 0 : o.gcs : o == null ? void 0 : o.pcs;
  }
  const r = n.wkid ? k.coordsys(n.wkid) : k.fromString(n.isGeographic ? E.PE_TYPE_GEOGCS : E.PE_TYPE_PROJCS, n.wkt), a = en(r, N(n, 1e-4)), e = en(r, 0, !0);
  return q.set(i, { pcs: a, gcs: e }), t ? e : a;
}
function en(n, t = 0, i = !1) {
  const r = Rn.generate(n), a = i ? n.horizonGcsGenerate() : n.horizonPcsGenerate();
  if (a == null || !a.length)
    return null;
  let e = !1, o = a.find((f) => f.getInclusive() === 1 && f.getKind() === 1);
  if (!o) {
    if (o = a.find((f) => f.getInclusive() === 1 && f.getKind() === 0), !o)
      return null;
    e = !0;
  }
  const c = r.isPannableRectangle(), s = o.getCoord();
  if (e)
    return { isEnvelope: e, isPannable: c, vertices: s, coef: null, bbox: [s[0][0] - t, s[0][1] - t, s[1][0] + t, s[1][1] + t] };
  let m = 0;
  const h = [];
  let [R, g] = s[0], [d, l] = s[0];
  for (let f = 0, u = s.length; f < u; f++) {
    m++, m === u && (m = 0);
    const [y, x] = s[f], [p, M] = s[m];
    if (M === x)
      h.push([y, p, x, M, 2]);
    else {
      const w = (p - y) / (M - x || 1e-4), P = y - w * x;
      x < M ? h.push([w, P, x, M, 0]) : h.push([w, P, M, x, 1]);
    }
    R = R < y ? R : y, g = g < x ? g : x, d = d > y ? d : y, l = l > x ? l : x;
  }
  return { isEnvelope: !1, isPannable: c, vertices: s, coef: h, bbox: [R, g, d, l] };
}
function Q(n, t) {
  const i = [], { cols: r, rows: a, xres: e, yres: o, usePixelCenter: c } = n;
  let { xmin: s, ymax: m } = n;
  if (c && (s += e / 2, m -= o / 2), !S(t)) {
    for (let d = 0; d < r; d++)
      for (let l = 0; l < a; l++)
        i.push([s + e * d, m - o * l]);
    return { points: i };
  }
  const h = new Uint8Array(r * a);
  if (t.isEnvelope) {
    const { bbox: [d, l, f, u] } = t;
    for (let y = 0, x = 0; y < r; y++) {
      const p = s + e * y, M = t.isPannable || p >= d && p <= f;
      for (let w = 0; w < a; w++, x++) {
        const P = m - o * w;
        M && P >= l && P <= u && (i.push([p, P]), h[x] = 1);
      }
    }
    return { points: i, mask: h };
  }
  const { coef: R } = t, g = [];
  for (let d = 0; d < a; d++) {
    const l = m - o * d, f = [], u = [];
    for (let x = 0; x < R.length; x++) {
      const [p, M, w, P, v] = R[x];
      if (l === w && w === P)
        f.push(p), f.push(M), u.push(2), u.push(2);
      else if (l >= w && l <= P) {
        const j = p * l + M;
        f.push(j), u.push(v);
      }
    }
    let y = f;
    if (f.length > 2) {
      let x = u[0] === 2 ? 0 : u[0], p = f[0];
      y = [];
      for (let M = 1; M < u.length; M++)
        u[M] === 2 && M !== u.length - 1 || (u[M] !== x && (y.push(x === 0 ? Math.min(p, f[M - 1]) : Math.max(p, f[M - 1])), x = u[M], p = f[M]), M === u.length - 1 && y.push(u[M] === 0 ? Math.min(p, f[M]) : Math.max(p, f[M])));
      y.sort((M, w) => M - w);
    } else
      f[0] > f[1] && (y = [f[1], f[0]]);
    g.push(y);
  }
  for (let d = 0, l = 0; d < r; d++) {
    const f = s + e * d;
    for (let u = 0; u < a; u++, l++) {
      const y = m - o * u, x = g[u];
      if (x.length === 2)
        f >= x[0] && f <= x[1] && (i.push([f, y]), h[l] = 1);
      else if (x.length > 2) {
        let p = !1;
        for (let M = 0; M < x.length; M += 2)
          if (f >= x[M] && f <= x[M + 1]) {
            p = !0;
            break;
          }
        p && (i.push([f, y]), h[l] = 1);
      }
    }
  }
  return { points: i, mask: h };
}
function kn(n, t) {
  const [i, r] = t;
  for (let a = 0; a < n.length; a++) {
    const e = n[a][1];
    (e < i || e > r) && (n[a] = [NaN, NaN]);
  }
}
function cn(n) {
  const t = T(n[0].spatialReference);
  if (n.length < 2 || !S(t))
    return n[0];
  let { xmin: i, xmax: r, ymin: a, ymax: e } = n[0];
  for (let o = 1; o < n.length; o++) {
    const c = n[o];
    r = c.xmax + t * o, a = Math.min(a, c.ymin), e = Math.max(e, c.ymax);
  }
  return new K({ xmin: i, xmax: r, ymin: a, ymax: e, spatialReference: n[0].spatialReference });
}
function fn(n, t, i = null, r = !0) {
  if (n.spatialReference.equals(t))
    return n;
  const a = Nn(n), e = T(n.spatialReference, !0), o = T(t);
  if (a === 0 || z(e) || z(o))
    return sn(n, t, i, r);
  const c = n.clone().normalize();
  if (c.length === 1 && n.xmax < e && n.xmax - e / 2 > N(n.spatialReference)) {
    const { xmin: s, xmax: m } = n;
    for (let h = 0; h <= a; h++) {
      const R = h === 0 ? s : -e / 2, g = h === a ? m - e * h : e / 2;
      c[h] = new K({ xmin: R, xmax: g, ymin: n.ymin, ymax: n.ymax, spatialReference: n.spatialReference });
    }
  }
  return cn(c.map((s) => sn(s, t, i, r)).filter((s) => !!s));
}
function sn(n, t, i = null, r = !0, a = !0) {
  const e = n.spatialReference;
  if (e.equals(t))
    return n;
  C(e, t, i);
  const o = $(n, t, i);
  if (a && t.isWebMercator && o && (o.ymax = Math.min(20037508342787e-6, o.ymax), o.ymin = Math.max(-20037508342787e-6, o.ymin), o.ymin >= o.ymax))
    return null;
  if (!r || !o)
    return o;
  const c = B(e, !0), s = B(t, !0);
  if (z(c) || z(s))
    return o;
  const m = N(e, 1e-3), h = N(e, 500), R = N(t, 1e-3);
  if (Math.abs(o.xmin - s[0]) < R && Math.abs(o.xmax - s[1]) < R) {
    const g = Math.abs(n.xmin - c[0]), d = Math.abs(c[1] - n.xmax);
    if (g < m && d > h) {
      o.xmin = s[0];
      const l = [];
      l.push(new G(n.xmax, n.ymin, e)), l.push(new G(n.xmax, (n.ymin + n.ymax) / 2, e)), l.push(new G(n.xmax, n.ymax, e));
      const f = l.map((u) => nn(u, t, i)).filter((u) => !isNaN(u == null ? void 0 : u.x)).map((u) => u.x);
      o.xmax = Math.max.apply(null, f);
    }
    if (d < m && g > h) {
      o.xmax = s[1];
      const l = [];
      l.push(new G(n.xmin, n.ymin, e)), l.push(new G(n.xmin, (n.ymin + n.ymax) / 2, e)), l.push(new G(n.xmin, n.ymax, e));
      const f = l.map((u) => nn(u, t, i)).filter((u) => !isNaN(u == null ? void 0 : u.x)).map((u) => u.x);
      o.xmin = Math.min.apply(null, f);
    }
  } else {
    const g = N(t, 1e-3);
    Math.abs(o.xmin - s[0]) < g && (o.xmin = s[0]), Math.abs(o.xmax - s[1]) < g && (o.xmax = s[1]);
  }
  return o;
}
function T(n, t = !1) {
  const i = t ? 20037508342787e-6 : 20037508342788905e-9;
  return n.isWebMercator ? 2 * i : n.wkid && n.isGeographic ? 360 : 2 * Sn[n.wkid] || null;
}
function B(n, t = !1) {
  if (n.isGeographic)
    return [-180, 180];
  const i = T(n, t);
  return S(i) ? [-i / 2, i / 2] : null;
}
function on(n, t, i, r) {
  let a = (n - t) / i;
  return a - Math.floor(a) != 0 ? a = Math.floor(a) : r && (a -= 1), a;
}
function Nn(n, t = !1) {
  const i = T(n.spatialReference);
  if (!S(i))
    return 0;
  const r = t ? 0 : -(i / 2), a = N(n.spatialReference), e = !t && Math.abs(n.xmax - i / 2) < a ? i / 2 : n.xmax, o = !t && Math.abs(n.xmin + i / 2) < a ? -i / 2 : n.xmin;
  return on(e, r, i, !0) - on(o, r, i, !1);
}
function zn(n) {
  const t = n.storageInfo.origin.x, i = T(n.spatialReference, !0);
  if (!S(i))
    return { originX: t, halfWorldWidth: null, pyramidsInfo: null };
  const r = i / 2, { nativePixelSize: a, storageInfo: e, extent: o } = n, { maximumPyramidLevel: c, blockWidth: s, pyramidScalingFactor: m } = e;
  let h = a.x;
  const R = [], g = S(n.transform) && n.transform.type === "gcs-shift", d = t + (g ? 0 : r), l = g ? i - t : r - t;
  for (let f = 0; f <= c; f++) {
    const u = (o.xmax - t) / h / s, y = u - Math.floor(u) == 0 ? u : Math.ceil(u), x = l / h / s, p = x - Math.floor(x) == 0 ? x : Math.ceil(x), M = Math.floor(d / h / s), w = Math.round(d / h) % s, P = (s - Math.round(l / h) % s) % s;
    R.push({ resolutionX: h, blockWidth: s, datsetColumnCount: y, worldColumnCountFromOrigin: p, leftMargin: w, rightPadding: P, originColumnOffset: M }), h *= m;
  }
  return { originX: t, halfWorldWidth: r, pyramidsInfo: R, hasGCSSShiftTransform: g };
}
function Tn(n) {
  if (!n || n.isGeographic)
    return n;
  const t = String(n.wkid || n.wkt);
  let i;
  return J.has(t) ? i = J.get(t) : (i = (n.wkid ? k.coordsys(n.wkid) : k.fromString(E.PE_TYPE_PROJCS, n.wkt)).getGeogcs().getCode(), J.set(t, i)), new Pn({ wkid: i });
}
function Wn(n) {
  const t = n.isAdaptive && n.spacing == null;
  let i = n.spacing || [Y, Y], r = X(n), a = { cols: r.size[0] + 1, rows: r.size[1] + 1 };
  const e = r.outofBoundPointCount > 0 && r.outofBoundPointCount < r.offsets.length / 2;
  let o = r.outofBoundPointCount === r.offsets.length / 2 || t && e ? [0, 0] : V(r.offsets, a, i, L);
  const c = (o[0] + o[1]) / 2, s = n.projectedExtent.spatialReference, m = n.srcBufferExtent.spatialReference;
  if (t && (e || c > L) && (ln(s, m, n.datumTransformation) && (s.isGeographic || S(O(s))), i = [I, I], r = X({ ...n, spacing: i }), a = { cols: r.size[0] + 1, rows: r.size[1] + 1 }, o = V(r.offsets, a, i, L)), r.error = o, i[0] > 1 && (r.coefficients = rn(r.offsets, a, e)), n.includeGCSGrid && !s.isGeographic && !s.isWebMercator)
    if (m.isGeographic)
      r.gcsGrid = { offsets: r.offsets, coefficients: r.coefficients, spacing: i };
    else {
      const h = O(s);
      if (S(h) && !h.isEnvelope) {
        const R = Tn(s), g = fn(n.projectedExtent, R), { offsets: d } = X({ ...n, srcBufferExtent: g, spacing: i }), l = rn(d, a, e);
        r.gcsGrid = { offsets: d, coefficients: l, spacing: i };
      }
    }
  return r;
}
function X(n) {
  const { projectedExtent: t, srcBufferExtent: i, pixelSize: r, datumTransformation: a, rasterTransform: e } = n, o = t.spatialReference, c = i.spatialReference;
  C(o, c);
  const { xmin: s, ymin: m, xmax: h, ymax: R } = t, g = T(c), d = S(g) && (n.hasWrapAround || (e == null ? void 0 : e.type) === "gcs-shift"), l = n.spacing || [Y, Y], f = l[0] * r.x, u = l[1] * r.y, y = l[0] === 1, x = Math.ceil((h - s) / f - 0.1 / l[0]) + (y ? 0 : 1), p = Math.ceil((R - m) / u - 0.1 / l[1]) + (y ? 0 : 1), M = bn({ cols: x, rows: p, xmin: s, ymax: R, xres: f, yres: u, inSR: o, outSR: c, datumTransformation: a, preferPE: l[0] <= I, usePixelCenter: y }), w = [];
  let P, v = 0;
  const j = y ? -1 : NaN, { xmin: un, xmax: xn, ymax: mn, width: hn, height: pn } = i, gn = N(c, 500);
  for (let A = 0; A < x; A++) {
    const F = [];
    for (let _ = 0; _ < p; _++) {
      let b = M[A * p + _];
      if (d && b[0] > xn && b[0] > g / 2 - gn && (b[0] -= g), !b || isNaN(b[0]) || isNaN(b[1]))
        w.push(j), w.push(j), F.push(null), v++;
      else {
        if (e) {
          const H = e.inverseTransform(new G({ x: b[0], y: b[1], spatialReference: c }));
          b = [H.x, H.y];
        }
        F.push(b), A > 0 && d && P[_] && b[0] < P[_][0] && (b[0] += g), w.push((b[0] - un) / hn), w.push((mn - b[1]) / pn);
      }
    }
    P = F;
  }
  return { offsets: w, error: null, coefficients: null, outofBoundPointCount: v, spacing: l, size: y ? [x, p] : [x - 1, p - 1] };
}
function rn(n, t, i) {
  const { cols: r, rows: a } = t, e = new Float32Array((r - 1) * (a - 1) * 2 * 6), o = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), c = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let s = 0; s < r - 1; s++) {
    for (let m = 0; m < a - 1; m++) {
      let h = s * a * 2 + 2 * m;
      const R = n[h], g = n[h + 1], d = n[h + 2], l = n[h + 3];
      h += 2 * a;
      const f = n[h], u = n[h + 1], y = n[h + 2], x = n[h + 3];
      let p = 0, M = 12 * (m * (r - 1) + s);
      for (let w = 0; w < 3; w++)
        e[M++] = o[p++] * R + o[p++] * d + o[p++] * y;
      p = 0;
      for (let w = 0; w < 3; w++)
        e[M++] = o[p++] * g + o[p++] * l + o[p++] * x;
      p = 0;
      for (let w = 0; w < 3; w++)
        e[M++] = c[p++] * R + c[p++] * f + c[p++] * y;
      p = 0;
      for (let w = 0; w < 3; w++)
        e[M++] = c[p++] * g + c[p++] * u + c[p++] * x;
    }
    if (i)
      for (let m = 0; m < e.length; m++)
        isNaN(e[m]) && (e[m] = -1);
  }
  return e;
}
function On(n) {
  const t = n.clone().normalize();
  return t.length === 1 ? t[0] : cn(t);
}
function $n(n, t, i) {
  const { storageInfo: r, pixelSize: a } = t;
  let e, o = !1;
  const { pyramidResolutions: c } = r;
  if (S(c) && c.length) {
    const g = (n.x + n.y) / 2, d = c[c.length - 1], l = (d.x + d.y) / 2, f = (a.x + a.y) / 2;
    if (g <= f)
      e = 0;
    else if (g >= l)
      e = c.length, o = g / l > 8;
    else {
      let y, x = f;
      for (let p = 1; p <= c.length; p++) {
        if (y = (c[p - 1].x + c[p - 1].y) / 2, g <= y) {
          g === y ? e = p : i === "down" ? (e = p - 1, o = g / x > 8) : e = i === "up" || g - x > y - g || g / x > 2 ? p : p - 1;
          break;
        }
        x = y;
      }
    }
    const u = e === 0 ? a : c[e - 1];
    return { pyramidLevel: e, pyramidResolution: new G({ x: u.x, y: u.y, spatialReference: t.spatialReference }), excessiveReading: o };
  }
  const s = Math.log(n.x / a.x) / Math.LN2, m = Math.log(n.y / a.y) / Math.LN2, h = t.storageInfo.maximumPyramidLevel || 0;
  e = i === "down" ? Math.floor(Math.min(s, m)) : i === "up" ? Math.ceil(Math.max(s, m)) : Math.round((s + m) / 2), e < 0 ? e = 0 : e > h && (o = e > h + 3, e = h);
  const R = 2 ** e;
  return { pyramidLevel: e, pyramidResolution: new G({ x: R * t.nativePixelSize.x, y: R * t.nativePixelSize.y, spatialReference: t.spatialReference }), excessiveReading: o };
}
function jn(n, t, i = 512, r = !0) {
  const { extent: a, spatialReference: e, pixelSize: o } = n, c = Z(new G({ x: o.x, y: o.y, spatialReference: e }), t, a);
  if (c == null)
    return { projectedPixelSize: null, scales: null, srcResolutions: null, isCustomTilingScheme: !1 };
  const s = (c.x + c.y) / 2, m = W(t), h = s * m * 96 * 39.37, R = t.isGeographic ? 256 / i * 2958287637958547e-7 : 256 / i * 591657527591555e-6;
  let g = n.dataType === "vector-magdir" || n.dataType === "vector-uv";
  const d = fn(a, t);
  g || r && (t.isGeographic || t.isWebMercator) && (g = d.xmin * d.xmax < 0);
  let l, f = h;
  const u = 1.001;
  if (g) {
    f = R;
    const w = t.isGeographic ? 1341104507446289e-21 : 0.29858214164761665, P = w * (96 * m * 39.37), v = t.isGeographic ? 4326 : 3857;
    l = Z(new G({ x: w, y: w, spatialReference: { wkid: v } }), e, d), l.x *= f / P, l.y *= f / P;
  } else {
    l = { x: o.x, y: o.y };
    const w = Math.ceil(Math.log(Math.min(n.width, n.height) / 32) / Math.LN2);
    let P = 0;
    for (; f < R * (u / 2) && P < w; )
      P++, f *= 2, l.x *= 2, l.y *= 2;
    Math.max(f, R) / Math.min(f, R) <= u && (f = R);
  }
  const y = [f], x = [{ x: l.x, y: l.y }], p = 70.5310735, M = Math.min(p, h) / u;
  for (; f >= M; )
    f /= 2, l.x /= 2, l.y /= 2, y.push(f), x.push({ x: l.x, y: l.y });
  return { projectedPixelSize: c, scales: y, srcResolutions: x, isCustomTilingScheme: !g };
}
export {
  jn as $,
  fn as B,
  Wn as D,
  Cn as G,
  zn as K,
  T as L,
  Z as N,
  nn as T,
  On as V,
  Nn as X,
  $n as Z,
  _n as k,
  ln as y
};

import { D as pt, l as N, w as mt, r as at, s as gt, bc as wt, di as Mt, M as xt, dx as it, dy as yt } from "./index-j1oaLRcp.js";
import { i as G, u as R } from "./pixelUtils-Kz9o33NO.js";
const T = /* @__PURE__ */ new Map();
T.set("meter-per-second", 1), T.set("kilometer-per-hour", 0.277778), T.set("knots", 0.514444), T.set("feet-per-second", 0.3048), T.set("mile-per-hour", 0.44704);
const z = 180 / Math.PI, Q = 5, E = new pt({ esriMetersPerSecond: "meter-per-second", esriKilometersPerHour: "kilometer-per-hour", esriKnots: "knots", esriFeetPerSecond: "feet-per-second", esriMilesPerHour: "mile-per-hour" });
function Y(t, e) {
  return T.get(t) / T.get(e) || 1;
}
function st(t) {
  return (450 - t) % 360;
}
function lt(t, e = "geographic") {
  const [r, l] = t, s = Math.sqrt(r * r + l * l);
  let i = Math.atan2(l, r) * z;
  return i = (360 + i) % 360, e === "geographic" && (i = st(i)), [s, i];
}
function ht(t, e = "geographic") {
  let r = t[1];
  e === "geographic" && (r = st(r)), r %= 360;
  const l = t[0];
  return [l * Math.cos(r / z), l * Math.sin(r / z)];
}
function Bt(t, e, r, l = "geographic") {
  if (!G(t) || N(r))
    return t;
  const s = e === "vector-magdir" ? t.clone() : mt(et(t, e)), i = s.pixels[1];
  for (let o = 0; o < i.length; o++)
    i[o] = l === "geographic" ? (i[o] + r[o] + 270) % 360 : (i[o] + 360 - r[o]) % 360;
  return e === "vector-magdir" ? s : et(s, "vector-magdir");
}
function et(t, e, r = "geographic", l = 1) {
  if (!G(t))
    return t;
  const { pixels: s, width: i, height: o } = t, d = i * o, c = s[0], n = s[1], a = t.pixelType.startsWith("f") ? t.pixelType : "f32", h = R.createEmptyBand(a, d), u = R.createEmptyBand(a, d);
  let f = 0;
  for (let x = 0; x < o; x++)
    for (let M = 0; M < i; M++)
      e === "vector-uv" ? ([h[f], u[f]] = lt([c[f], n[f]], r), h[f] *= l) : ([h[f], u[f]] = ht([c[f], n[f]], r), h[f] *= l, u[f] *= l), f++;
  const g = new R({ pixelType: a, width: t.width, height: t.height, mask: t.mask, validPixelCount: t.validPixelCount, maskIsAlpha: t.maskIsAlpha, pixels: [h, u] });
  return g.updateStatistics(), g;
}
function Nt(t, e, r = 1) {
  if (r === 1 || !G(t))
    return t;
  const l = t.clone(), { pixels: s, width: i, height: o } = l, d = s[0], c = s[1];
  let n = 0;
  for (let a = 0; a < o; a++)
    for (let h = 0; h < i; h++)
      e === "vector-uv" ? (d[n] *= r, c[n] *= r) : d[n] *= r, n++;
  return l.updateStatistics(), l;
}
function Rt(t, e, r, l, s) {
  if (!at(s) || !s.spatialReference.equals(t.spatialReference))
    return { extent: t, width: Math.round(e / l), height: Math.round(r / l), resolution: t.width / e };
  const i = s.xmin, o = s.ymax, d = (t.xmax - t.xmin) / e * l, c = (t.ymax - t.ymin) / r * l, n = (d + c) / 2;
  return t.xmin = i + Math.floor((t.xmin - i) / d) * d, t.xmax = i + Math.ceil((t.xmax - i) / d) * d, t.ymin = o + Math.floor((t.ymin - o) / c) * c, t.ymax = o + Math.ceil((t.ymax - o) / c) * c, { extent: t, width: Math.round(t.width / d), height: Math.round(t.height / c), resolution: n };
}
const W = kt(0, 0, 0);
function kt(t = 0, e = 0, r = Math.PI, l = !0) {
  l && (r = (2 * Math.PI - r) % (2 * Math.PI));
  const s = l ? -1 : 1, i = 13 * s, o = -7 * s, d = -2 * s, c = -16 * s, n = 21.75, [a, h] = S(0, e + i, r, n), [u, f] = S(t - 5.5, e + o, r, n), [g, x] = S(t + 5.5, e + o, r, n), [M, k] = S(t - 1.5, e + d, r, n), [P, w] = S(t + 1.5, e + d, r, n), [m, p] = S(t - 1.5, e + c, r, n), [y, b] = S(t + 1.5, e + c, r, n);
  return [a, h, u, f, M, k, P, w, g, x, m, p, y, b];
}
function Pt(t = 0, e = Math.PI, r = !0) {
  r && (e = (2 * Math.PI - e) % (2 * Math.PI));
  const l = 10, s = r ? -1 : 1, i = 5 * s, o = 20 * s, d = 25 * s, c = 45, n = 0, a = 0, h = 2, u = 0, f = h * s;
  let [g, x] = [n + l / 2, a - o], [M, k] = [g + h, x], [P, w] = [M - u, k + f], [m, p] = [n - l / 2, a - d], [y, b] = [m + u, p - f], F = Math.ceil(t / Q), v = Math.floor(F / 10);
  F -= 8 * v;
  const A = [], I = [];
  for (let J = 0; J < F / 2; J++, v--) {
    v <= 0 && F % 2 == 1 && J === (F - 1) / 2 && (m = n, y = m + u, p = (p + x) / 2, b = p - f);
    const [Z, tt] = S(m, p, e, c);
    if (v > 0) {
      const [j, C] = S(M, p, e, c), [H, K] = S(g, x, e, c);
      A.push(j), A.push(C), A.push(Z), A.push(tt), A.push(H), A.push(K);
    } else {
      const [j, C] = S(M, k, e, c), [H, K] = S(P, w, e, c), [ft, dt] = S(y, b, e, c);
      I.push(Z), I.push(tt), I.push(ft), I.push(dt), I.push(H), I.push(K), I.push(j), I.push(C);
    }
    p += i, x += i, k += i, w += i, b += i;
  }
  const [D, _] = S(n + l / 2, a + o, e, c), $ = l / 2 + h, [U, V] = S(n + $, a + o, e, c), [q, O] = S(n + l / 2, a - d, e, c), [ct, ut] = S(n + $, a - d, e, c);
  return { pennants: A, barbs: I, shaft: [D, _, U, V, q, O, ct, ut] };
}
function S(t, e, r, l = 1) {
  const s = Math.sqrt(t * t + e * e) / l, i = (2 * Math.PI + Math.atan2(e, t)) % (2 * Math.PI);
  return [s, (2 * Math.PI + i - r) % (2 * Math.PI)];
}
const B = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], vt = [0, 0.5, 1, 1.5, 2], At = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function L(t, e, r, l) {
  const s = Y(l || "knots", r);
  let i;
  for (i = 1; i < e.length; i++)
    if (i === e.length - 1) {
      if (t < e[i] * s)
        break;
    } else if (t <= e[i] * s)
      break;
  return Math.min(i - 1, e.length - 2);
}
function bt(t, e, r, l, s) {
  let i = 0;
  switch (e) {
    case "beaufort_kn":
      i = L(t, B, "knots", r);
      break;
    case "beaufort_km":
      i = L(t, B, "kilometer-per-hour", r);
      break;
    case "beaufort_ft":
      i = L(t, B, "feet-per-second", r);
      break;
    case "beaufort_m":
      i = L(t, B, "meter-per-second", r);
      break;
    case "classified_arrow":
      i = L(t, s, l, r);
      break;
    case "ocean_current_m":
      i = L(t, vt, "meter-per-second", r);
      break;
    case "ocean_current_kn":
      i = L(t, At, "knots", r);
  }
  return i;
}
function It(t, e) {
  const { style: r, inputUnit: l, outputUnit: s, breakValues: i } = e, o = E.fromJSON(l), d = E.fromJSON(s), c = 7 * 6, n = 15;
  let a = 0, h = 0;
  const { width: u, height: f, mask: g } = t, x = t.pixels[0], M = t.pixels[1], k = g ? g.filter((p) => p > 0).length : u * f, P = new Float32Array(k * c), w = new Uint32Array(n * k);
  for (let p = 0; p < f; p++)
    for (let y = 0; y < u; y++) {
      const b = p * u + y;
      if (!g || g[p * u + y]) {
        var m;
        const F = (m = (M[b] + 360) % 360 / 180 * Math.PI) != null ? m : 2 * Math.PI * Math.random(), v = bt(x[b], r, o, d, i);
        for (let I = 0; I < W.length; I += 2)
          P[a++] = (y + 0.5) / u, P[a++] = (p + 0.5) / f, P[a++] = W[I], P[a++] = W[I + 1] + F, P[a++] = v, P[a++] = x[b];
        const A = 7 * (a / c - 1);
        w[h++] = A, w[h++] = A + 1, w[h++] = A + 2, w[h++] = A + 0, w[h++] = A + 4, w[h++] = A + 3, w[h++] = A + 0, w[h++] = A + 2, w[h++] = A + 3, w[h++] = A + 2, w[h++] = A + 5, w[h++] = A + 3, w[h++] = A + 5, w[h++] = A + 6, w[h++] = A + 3;
      }
    }
  return { vertexData: P, indexData: w };
}
const X = [];
function Ft(t, e) {
  if (X.length === 0)
    for (let g = 0; g < 30; g++)
      X.push(Pt(5 * g, 0));
  const r = Y(E.fromJSON(e.inputUnit), "knots"), { width: l, height: s, mask: i } = t, o = t.pixels[0], d = t.pixels[1], c = 6, n = [], a = [];
  let h = 0, u = 0;
  for (let g = 0; g < s; g++)
    for (let x = 0; x < l; x++) {
      const M = g * l + x, k = o[M] * r;
      if ((!i || i[g * l + x]) && k >= Q) {
        var f;
        const P = (f = (d[M] + 360) % 360 / 180 * Math.PI) != null ? f : 2 * Math.PI * Math.random(), { pennants: w, barbs: m, shaft: p } = X[Math.min(Math.floor(k / 5), 29)];
        if (w.length + m.length === 0)
          continue;
        let y = n.length / c;
        const b = (x + 0.5) / l, F = (g + 0.5) / s;
        for (let v = 0; v < w.length; v += 2)
          n[h++] = b, n[h++] = F, n[h++] = w[v], n[h++] = w[v + 1] + P, n[h++] = 0, n[h++] = k;
        for (let v = 0; v < m.length; v += 2)
          n[h++] = b, n[h++] = F, n[h++] = m[v], n[h++] = m[v + 1] + P, n[h++] = 0, n[h++] = k;
        for (let v = 0; v < p.length; v += 2)
          n[h++] = b, n[h++] = F, n[h++] = p[v], n[h++] = p[v + 1] + P, n[h++] = 0, n[h++] = k;
        for (let v = 0; v < w.length / 6; v++)
          a[u++] = y, a[u++] = y + 1, a[u++] = y + 2, y += 3;
        for (let v = 0; v < m.length / 8; v++)
          a[u++] = y, a[u++] = y + 1, a[u++] = y + 2, a[u++] = y + 1, a[u++] = y + 2, a[u++] = y + 3, y += 4;
        a[u++] = y + 0, a[u++] = y + 1, a[u++] = y + 2, a[u++] = y + 1, a[u++] = y + 3, a[u++] = y + 2, y += 4;
      }
    }
  return { vertexData: new Float32Array(n), indexData: new Uint32Array(a) };
}
function St(t, e) {
  let l = 0, s = 0;
  const { width: i, height: o, mask: d } = t, c = t.pixels[0], n = [], a = [], h = Y(E.fromJSON(e.inputUnit), "knots"), u = e.style === "wind_speed" ? Q : Number.MAX_VALUE;
  for (let f = 0; f < o; f++)
    for (let g = 0; g < i; g++) {
      const x = c[f * i + g] * h;
      if ((!d || d[f * i + g]) && x < u) {
        for (let k = 0; k < 4; k++)
          n[l++] = (g + 0.5) / i, n[l++] = (f + 0.5) / o, n[l++] = k < 2 ? -0.5 : 0.5, n[l++] = k % 2 == 0 ? -0.5 : 0.5, n[l++] = 0, n[l++] = x;
        const M = 4 * (l / 24 - 1);
        a[s++] = M, a[s++] = M + 1, a[s++] = M + 2, a[s++] = M + 1, a[s++] = M + 2, a[s++] = M + 3;
      }
    }
  return { vertexData: new Float32Array(n), indexData: new Uint32Array(a) };
}
function Et(t, e) {
  return e.style === "simple_scalar" ? St(t, e) : e.style === "wind_speed" ? Ft(t, e) : It(t, e);
}
function Jt(t, e, r, l = [0, 0], s = 0.5) {
  const { width: i, height: o, mask: d } = t, [c, n] = t.pixels, [a, h] = l, u = Math.round((i - a) / r), f = Math.round((o - h) / r), g = u * f, x = new Float32Array(g), M = new Float32Array(g), k = new Uint8Array(g), P = e === "vector-uv";
  for (let m = 0; m < f; m++)
    for (let p = 0; p < u; p++) {
      let y = 0;
      const b = m * u + p, F = Math.max(0, m * r + h), v = Math.max(0, p * r + a), A = Math.min(o, F + r), I = Math.min(i, v + r);
      for (let D = F; D < A; D++)
        for (let _ = v; _ < I; _++) {
          const $ = D * i + _;
          if (!d || d[$]) {
            y++;
            const U = P ? [c[$], n[$]] : [c[$], (360 + n[$]) % 360], [V, q] = P ? U : ht(U);
            x[b] += V, M[b] += q;
          }
        }
      if (y >= (A - F) * (I - v) * (1 - s)) {
        k[b] = 1;
        const [D, _] = lt([x[b] / y, M[b] / y]);
        x[b] = D, M[b] = _;
      } else
        k[b] = 0, x[b] = 0, M[b] = 0;
    }
  const w = new R({ width: u, height: f, pixels: [x, M], mask: k });
  return w.updateStatistics(), w;
}
const Dt = gt.getLogger("geoscene.views.2d.engine.flow.dataUtils"), nt = 9;
async function jt(t, e, r) {
  const l = performance.now(), s = _t(t, e), i = performance.now(), o = Ut(t, s, e.width, e.height), d = performance.now(), c = Lt(o, !0), n = performance.now(), a = Tt(c), h = performance.now();
  if (t.profile) {
    const u = { "_createFlowFieldFromData()": Math.round(i - l), "_getStreamlines()": Math.round(d - i), "createAnimatedLinesData()": Math.round(n - d), "createLinesMesh()": Math.round(h - n), "Total elapsed time": Math.round(h - l) };
    Dt.info("createStreamlinesMesh profile", u);
  }
  return await Promise.resolve(), wt(r), a;
}
function _t(t, e) {
  const r = Vt(e.data, e.width, e.height, t.smoothing);
  return t.interpolate ? (l, s) => {
    const i = Math.floor(l), o = Math.floor(s);
    if (i < 0 || i >= e.width)
      return [0, 0];
    if (o < 0 || o >= e.height)
      return [0, 0];
    const d = l - i, c = s - o, n = i, a = o, h = i < e.width - 1 ? i + 1 : i, u = o < e.height - 1 ? o + 1 : o, f = r[2 * (a * e.width + n)], g = r[2 * (a * e.width + h)], x = r[2 * (u * e.width + n)], M = r[2 * (u * e.width + h)], k = r[2 * (a * e.width + n) + 1], P = r[2 * (a * e.width + h) + 1];
    return [(f * (1 - c) + x * c) * (1 - d) + (g * (1 - c) + M * c) * d, (k * (1 - c) + r[2 * (u * e.width + n) + 1] * c) * (1 - d) + (P * (1 - c) + r[2 * (u * e.width + h) + 1] * c) * d];
  } : (l, s) => {
    const i = Math.round(l), o = Math.round(s);
    return i < 0 || i >= e.width || o < 0 || o >= e.height ? [0, 0] : [r[2 * (o * e.width + i) + 0], r[2 * (o * e.width + i) + 1]];
  };
}
function $t(t, e, r, l, s, i, o, d, c) {
  const n = [];
  let a = r, h = l, u = 0, [f, g] = e(a, h);
  f *= t.velocityScale, g *= t.velocityScale;
  const x = Math.sqrt(f * f + g * g);
  let M, k;
  n.push({ x: a, y: h, t: u, speed: x });
  for (let P = 0; P < t.verticesPerLine; P++) {
    let [w, m] = e(a, h);
    w *= t.velocityScale, m *= t.velocityScale;
    const p = Math.sqrt(w * w + m * m);
    if (p < t.minSpeedThreshold)
      return n;
    const y = w / p, b = m / p;
    if (a += y * t.segmentLength, h += b * t.segmentLength, u += t.segmentLength / p, Math.acos(y * M + b * k) > t.maxTurnAngle)
      return n;
    if (t.mergeLines) {
      const F = Math.round(a * c), v = Math.round(h * c);
      if (F < 0 || F > o - 1 || v < 0 || v > d - 1)
        return n;
      const A = i[v * o + F];
      if (A !== -1 && A !== s)
        return n;
      i[v * o + F] = s;
    }
    n.push({ x: a, y: h, t: u, speed: p }), M = y, k = b;
  }
  return n;
}
function Ut(t, e, r, l) {
  const s = [], i = new it(), o = 1 / Math.max(t.lineCollisionWidth, 1), d = Math.round(r * o), c = Math.round(l * o), n = new Int32Array(d * c);
  for (let h = 0; h < n.length; h++)
    n[h] = -1;
  const a = [];
  for (let h = 0; h < l; h += t.lineSpacing)
    for (let u = 0; u < r; u += t.lineSpacing)
      a.push({ x: u, y: h, sort: i.getFloat() });
  a.sort((h, u) => h.sort - u.sort);
  for (const { x: h, y: u } of a)
    if (i.getFloat() < t.density) {
      const f = $t(t, e, h, u, s.length, n, d, c, o);
      if (f.length < 2)
        continue;
      s.push(f);
    }
  return s;
}
function Vt(t, e, r, l) {
  if (l === 0)
    return t;
  const s = Math.round(3 * l), i = new Array(2 * s + 1);
  let o = 0;
  for (let n = -s; n <= s; n++) {
    const a = Math.exp(-n * n / (l * l));
    i[n + s] = a, o += a;
  }
  for (let n = -s; n <= s; n++)
    i[n + s] /= o;
  const d = new Float32Array(t.length);
  for (let n = 0; n < r; n++)
    for (let a = 0; a < e; a++) {
      let h = 0, u = 0;
      for (let f = -s; f <= s; f++) {
        if (a + f < 0 || a + f >= e)
          continue;
        const g = i[f + s];
        h += g * t[2 * (n * e + (a + f)) + 0], u += g * t[2 * (n * e + (a + f)) + 1];
      }
      d[2 * (n * e + a) + 0] = h, d[2 * (n * e + a) + 1] = u;
    }
  const c = new Float32Array(t.length);
  for (let n = 0; n < e; n++)
    for (let a = 0; a < r; a++) {
      let h = 0, u = 0;
      for (let f = -s; f <= s; f++) {
        if (a + f < 0 || a + f >= r)
          continue;
        const g = i[f + s];
        h += g * d[2 * ((a + f) * e + n) + 0], u += g * d[2 * ((a + f) * e + n) + 1];
      }
      c[2 * (a * e + n) + 0] = h, c[2 * (a * e + n) + 1] = u;
    }
  return c;
}
function Lt(t, e) {
  const r = new it(), l = t.reduce((c, n) => c + n.length, 0), s = new Float32Array(4 * l), i = new Array(t.length);
  let o = 0, d = 0;
  for (const c of t) {
    const n = o;
    for (const a of c)
      s[4 * o + 0] = a.x, s[4 * o + 1] = a.y, s[4 * o + 2] = a.t, s[4 * o + 3] = a.speed, o++;
    i[d++] = { startVertex: n, numberOfVertices: c.length, totalTime: c[c.length - 1].t, timeSeed: e ? r.getFloat() : 0 };
  }
  return { lineVertices: s, lineDescriptors: i };
}
function Tt(t, e = 10) {
  const { lineVertices: r, lineDescriptors: l } = t;
  let s = 0, i = 0;
  for (const u of l)
    s += 2 * u.numberOfVertices, i += 6 * (u.numberOfVertices - 1);
  const o = new Float32Array(s * nt), d = new Uint32Array(i);
  let c = 0, n = 0;
  function a() {
    d[n++] = c - 2, d[n++] = c, d[n++] = c - 1, d[n++] = c, d[n++] = c + 1, d[n++] = c - 1;
  }
  function h(u, f, g, x, M, k, P, w) {
    const m = c * nt;
    let p = 0;
    o[m + p++] = u, o[m + p++] = f, o[m + p++] = 1, o[m + p++] = g, o[m + p++] = k, o[m + p++] = P, o[m + p++] = x / 2, o[m + p++] = M / 2, o[m + p++] = w, c++, o[m + p++] = u, o[m + p++] = f, o[m + p++] = -1, o[m + p++] = g, o[m + p++] = k, o[m + p++] = P, o[m + p++] = -x / 2, o[m + p++] = -M / 2, o[m + p++] = w, c++;
  }
  for (const u of l) {
    const { totalTime: f, timeSeed: g } = u;
    let x = null, M = null, k = null, P = null, w = null, m = null;
    for (let p = 0; p < u.numberOfVertices; p++) {
      const y = r[4 * (u.startVertex + p) + 0], b = r[4 * (u.startVertex + p) + 1], F = r[4 * (u.startVertex + p) + 2], v = r[4 * (u.startVertex + p) + 3];
      let A = null, I = null, D = null, _ = null;
      if (p > 0) {
        A = y - x, I = b - M;
        const $ = Math.sqrt(A * A + I * I);
        if (A /= $, I /= $, p > 1) {
          let U = A + w, V = I + m;
          const q = Math.sqrt(U * U + V * V);
          U /= q, V /= q;
          const O = Math.min(1 / (U * A + V * I), e);
          U *= O, V *= O, D = -V, _ = U;
        } else
          D = -I, _ = A;
        D !== null && _ !== null && (h(x, M, k, D, _, f, g, v), a());
      }
      x = y, M = b, k = F, w = A, m = I, P = v;
    }
    h(x, M, k, -m, w, f, g, P);
  }
  return { vertexData: o, indexData: d };
}
function rt(t, e) {
  const r = e.pixels, { width: l, height: s } = e, i = new Float32Array(l * s * 2);
  if (t === "vector-uv")
    for (let o = 0; o < l * s; o++)
      i[2 * o + 0] = r[0][o], i[2 * o + 1] = -r[1][o];
  else if (t === "vector-magdir")
    for (let o = 0; o < l * s; o++) {
      const d = r[0][o], c = yt(r[1][o]), n = Math.cos(c - Math.PI / 2), a = Math.sin(c - Math.PI / 2);
      i[2 * o + 0] = n * d, i[2 * o + 1] = a * d;
    }
  return { data: i, width: l, height: s };
}
async function Ct(t, e, r, l, s, i) {
  const o = Mt(e.spatialReference);
  if (!o)
    return ot(t, e, r, l, s, i);
  const [d, c] = o.valid, n = c - d, a = Math.ceil(e.width / n), h = e.width / a, u = Math.round(r / a);
  let f = e.xmin;
  const g = [];
  for (let P = 0; P < a; P++) {
    const w = new xt({ xmin: f, xmax: f + h, ymin: e.ymin, ymax: e.ymax, spatialReference: e.spatialReference });
    g.push(ot(t, w, u, l, s, i)), f += h;
  }
  const x = await Promise.all(g), M = { data: new Float32Array(r * l * 2), width: r, height: l };
  let k = 0;
  for (const P of x) {
    for (let w = 0; w < P.height; w++)
      for (let m = 0; m < P.width; m++)
        k + m >= r || (M.data[2 * (w * r + k + m) + 0] = P.data[2 * (w * P.width + m) + 0], M.data[2 * (w * r + k + m) + 1] = P.data[2 * (w * P.width + m) + 1]);
    k += P.width;
  }
  return M;
}
async function ot(t, e, r, l, s, i) {
  const o = { requestProjectedLocalDirections: !0, signal: i };
  if (at(s) && (o.timeExtent = s), t.type === "imagery") {
    await t.load({ signal: i });
    const n = t.rasterInfo.dataType, a = await t.fetchImage(e, r, l, o);
    return !a || N(a.pixelData) || N(a.pixelData.pixelBlock) ? { data: new Float32Array(r * l * 2), width: r, height: l } : rt(n, a.pixelData.pixelBlock);
  }
  await t.load({ signal: i });
  const d = t.rasterInfo.dataType, c = await t.fetchPixels(e, r, l, o);
  return !c || N(c.pixelBlock) ? { data: new Float32Array(r * l * 2), width: r, height: l } : rt(d, c.pixelBlock);
}
export {
  St as D,
  Et as F,
  Nt as M,
  Y as c,
  et as d,
  lt as f,
  Rt as g,
  jt as h,
  Jt as j,
  E as l,
  Bt as m,
  Ct as y
};

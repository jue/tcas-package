import { a9 as Pe, a6 as fe, a7 as me, s as ae, y as we, gG as M, r as D, fh as Le, gH as Q, S as ve, fj as $e, db as Ie } from "./index-j1oaLRcp.js";
import { o as Xe, t as ze, a as He, A as ue, x as Je, r as pe, $ as X, K as U, i as H, M as C, b as Ae, c as Re, e as Ye, p as Ee, C as Fe } from "./CIMSymbolHelper-KLEKDisI.js";
import { i as ne, e as te, n as oe } from "./enums-YM9SAu8u.js";
import { q as Te, C as Ge, B as We, v as De } from "./quantizationUtils-p-hCoL_j.js";
import { E as _ } from "./Utils-Mkp4Julu.js";
import { L as Ue } from "./MaterialKey-tb9URCR8.js";
function je(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "CIMPointSymbol": {
      const o = e.symbolLayers;
      return o && o.length === 1 ? je(o[0]) : null;
    }
    case "CIMVectorMarker": {
      var t;
      const o = e.markerGraphics;
      if (!o || o.length !== 1)
        return null;
      const n = o[0];
      if (!n)
        return null;
      const i = n.geometry;
      if (!i)
        return null;
      const a = n.symbol;
      return !a || a.type !== "CIMPolygonSymbol" && a.type !== "CIMLineSymbol" || (t = a.symbolLayers) != null && t.some((r) => !!r.effects) ? null : { geom: i, asFill: a.type === "CIMPolygonSymbol" };
    }
    case "sdf":
      return { geom: e.geom, asFill: e.asFill };
  }
  return null;
}
function Be(e) {
  return e ? e.rings ? e.rings : e.paths ? e.paths : e.xmin !== void 0 && e.ymin !== void 0 && e.xmax !== void 0 && e.ymax !== void 0 ? [[[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]] : null : null;
}
function qe(e) {
  let t = 1 / 0, o = -1 / 0, n = 1 / 0, i = -1 / 0;
  for (const a of e)
    for (const r of a)
      r[0] < t && (t = r[0]), r[0] > o && (o = r[0]), r[1] < n && (n = r[1]), r[1] > i && (i = r[1]);
  return new ze(t, n, o - t, i - n);
}
function ye(e) {
  let t = 1 / 0, o = -1 / 0, n = 1 / 0, i = -1 / 0;
  for (const a of e)
    for (const r of a)
      r[0] < t && (t = r[0]), r[0] > o && (o = r[0]), r[1] < n && (n = r[1]), r[1] > i && (i = r[1]);
  return [t, n, o, i];
}
function Ne(e) {
  return e ? e.rings ? ye(e.rings) : e.paths ? ye(e.paths) : Pe(e) ? [e.xmin, e.ymin, e.xmax, e.ymax] : null : null;
}
function be(e, t, o, n, i) {
  const [a, r, s, l] = e;
  if (s < a || l < r)
    return [0, 0, 0];
  const u = s - a, m = l - r, p = 128, f = 1, c = Math.floor(0.5 * (0.5 * p - f)), y = (p - 2 * (c + f)) / Math.max(u, m), g = Math.round(u * y) + 2 * c, S = Math.round(m * y) + 2 * c;
  let d = 1;
  t && (d = S / y / (t.ymax - t.ymin));
  let v = 0, N = 0;
  if (n)
    if (i) {
      if (t && o && t.ymax - t.ymin > 0) {
        const b = (t.xmax - t.xmin) / (t.ymax - t.ymin);
        v = n.x / (o * b), N = n.y / o;
      }
    } else
      v = n.x, N = n.y;
  return v = 0.5 * (t.xmax + t.xmin) + v * (t.xmax - t.xmin), N = 0.5 * (t.ymax + t.ymin) + N * (t.ymax - t.ymin), v -= a, N -= r, v *= y, N *= y, v += c, N += c, [d, v / g - 0.5, -(N / S - 0.5)];
}
function Xt(e) {
  const t = Be(e.geom), o = qe(t), n = 128, i = 1, a = Math.floor(0.5 * (0.5 * n - i)), r = (n - 2 * (a + i)) / Math.max(o.width, o.height), s = Math.round(o.width * r) + 2 * a, l = Math.round(o.height * r) + 2 * a, u = [];
  for (const p of t)
    if (p && p.length > 1) {
      const f = [];
      for (const c of p) {
        let [y, g] = c;
        y -= o.x, g -= o.y, y *= r, g *= r, y += a - 0.5, g += a - 0.5, e.asFill ? f.push([y, g]) : f.push([Math.round(y), Math.round(g)]);
      }
      if (e.asFill) {
        const c = f.length - 1;
        f[0][0] === f[c][0] && f[0][1] === f[c][1] || f.push(f[0]);
      }
      u.push(f);
    }
  const m = Ve(u, s, l, a);
  return e.asFill && Ke(u, s, l, a, m), [_e(m, a), s, l];
}
function Ve(e, t, o, n) {
  const i = t * o, a = new Array(i), r = n * n + 1;
  for (let s = 0; s < i; ++s)
    a[s] = r;
  for (const s of e) {
    const l = s.length;
    for (let u = 1; u < l; ++u) {
      const m = s[u - 1], p = s[u];
      let f, c, y, g;
      m[0] < p[0] ? (f = m[0], c = p[0]) : (f = p[0], c = m[0]), m[1] < p[1] ? (y = m[1], g = p[1]) : (y = p[1], g = m[1]);
      let S = Math.floor(f) - n, d = Math.floor(c) + n, v = Math.floor(y) - n, N = Math.floor(g) + n;
      S < 0 && (S = 0), d > t && (d = t), v < 0 && (v = 0), N > o && (N = o);
      const b = p[0] - m[0], O = p[1] - m[1], I = b * b + O * O;
      for (let P = S; P < d; P++)
        for (let x = v; x < N; x++) {
          let k, z, L = (P - m[0]) * b + (x - m[1]) * O;
          L < 0 ? (k = m[0], z = m[1]) : L > I ? (k = p[0], z = p[1]) : (L /= I, k = m[0] + L * b, z = m[1] + L * O);
          const J = (P - k) * (P - k) + (x - z) * (x - z), E = (o - x - 1) * t + P;
          J < a[E] && (a[E] = J);
        }
    }
  }
  for (let s = 0; s < i; ++s)
    a[s] = Math.sqrt(a[s]);
  return a;
}
function Ke(e, t, o, n, i) {
  for (const a of e) {
    const r = a.length;
    for (let s = 1; s < r; ++s) {
      const l = a[s - 1], u = a[s];
      let m, p, f, c;
      l[0] < u[0] ? (m = l[0], p = u[0]) : (m = u[0], p = l[0]), l[1] < u[1] ? (f = l[1], c = u[1]) : (f = u[1], c = l[1]);
      let y = Math.floor(m), g = Math.floor(p) + 1, S = Math.floor(f), d = Math.floor(c) + 1;
      y < n && (y = n), g > t - n && (g = t - n), S < n && (S = n), d > o - n && (d = o - n);
      for (let v = S; v < d; ++v) {
        if (l[1] > v == u[1] > v)
          continue;
        const N = (o - v - 1) * t;
        for (let b = y; b < g; ++b)
          b < (u[0] - l[0]) * (v - l[1]) / (u[1] - l[1]) + l[0] && (i[N + b] = -i[N + b]);
        for (let b = n; b < y; ++b)
          i[N + b] = -i[N + b];
      }
    }
  }
}
function _e(e, t) {
  const o = 2 * t, n = e.length, i = new Uint8Array(4 * n);
  for (let a = 0; a < n; ++a) {
    const r = 0.5 - e[a] / o;
    Xe(r, i, 4 * a);
  }
  return i;
}
const Qe = 96 / 72;
class he {
  static executeEffects(t, o, n) {
    const i = He(o), a = Qe;
    let r = new pe(i);
    for (const s of t) {
      const l = ue(s);
      l && (r = l.execute(r, s, a, n));
    }
    return r;
  }
  static next(t) {
    const o = t.next();
    return Je(o), o;
  }
  static applyEffects(t, o, n) {
    if (!t)
      return o;
    let i = new pe(o);
    for (const s of t) {
      const l = ue(s);
      l && (i = l.execute(i, s, 1, n));
    }
    let a, r = null;
    for (; a = i.next(); )
      r ? fe(r) ? fe(a) && r.paths.push(...a.paths) : me(r) && me(a) && r.rings.push(...a.rings) : r = a;
    return r;
  }
}
function Z(e, t, o, n, i) {
  const a = e.referencesGeometry() && i ? Ze(t, n, i) : t, r = e.repurposeFeature(a);
  try {
    return e.evaluate({ ...o, $feature: r });
  } catch (s) {
    return ae.getLogger("geoscene.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", s), null;
  }
}
const ie = /* @__PURE__ */ new Map();
function Ze(e, t, o) {
  const { transform: n, hasZ: i, hasM: a } = o;
  ie.has(t) || ie.set(t, et(t));
  const r = ie.get(t)(e.geometry, n, i, a);
  return { ...e, geometry: r };
}
function et(e) {
  const t = {};
  switch (e) {
    case "esriGeometryPoint":
      return (o, n, i, a) => De(n, t, o, i, a);
    case "esriGeometryPolygon":
      return (o, n, i, a) => We(n, t, o, i, a);
    case "esriGeometryPolyline":
      return (o, n, i, a) => Ge(n, t, o, i, a);
    case "esriGeometryMultipoint":
      return (o, n, i, a) => Te(n, t, o, i, a);
    default:
      return ae.getLogger("geoscene.views.2d.support.arcadeOnDemand").error(new we("mapview-arcade", `Unable to handle geometryType: ${e}`)), (o) => o;
  }
}
function Ce(e) {
  const t = e.toLowerCase().split(" ").join("-");
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
function zt(e) {
  const t = tt(e) + ot(e);
  return Ce(e.family) + (t.length > 0 ? t : "-regular");
}
function tt(e) {
  if (!e.weight)
    return "";
  switch (e.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function ot(e) {
  if (!e.style)
    return "";
  switch (e.style.toLowerCase()) {
    case "italic":
    case "oblique":
      return "-italic";
  }
  return "";
}
const ke = ae.getLogger("geoscene.symbols.cim.cimAnalyzer");
function se(e) {
  switch (e) {
    case "Butt":
      return te.BUTT;
    case "Square":
      return te.SQUARE;
    default:
      return te.ROUND;
  }
}
function le(e) {
  switch (e) {
    case "Bevel":
      return oe.BEVEL;
    case "Miter":
      return oe.MITER;
    default:
      return oe.ROUND;
  }
}
function it(e) {
  switch (e) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
      return "center";
    case "Justify":
      return "justify";
  }
}
function rt(e) {
  switch (e) {
    case "Top":
    default:
      return "top";
    case "Center":
      return "middle";
    case "Baseline":
      return "baseline";
    case "Bottom":
      return "bottom";
  }
}
function nt(e) {
  let t = "", o = "";
  if (e) {
    const n = e.toLowerCase();
    n.indexOf("italic") !== -1 ? t = "italic" : n.indexOf("oblique") !== -1 && (t = "oblique"), n.indexOf("bold") !== -1 ? o = "bold" : n.indexOf("light") !== -1 && (o = "lighter");
  }
  return { style: t, weight: o };
}
function at(e) {
  return e.underline ? "underline" : e.strikethrough ? "line-through" : "none";
}
function ge(e, t, o, n) {
  let i;
  e[t] ? i = e[t] : (i = {}, e[t] = i), i[o] = n;
}
function de(e) {
  const t = e.markerPlacement;
  return t && t.angleToLine ? ne.MAP : ne.SCREEN;
}
async function Ht(e, t, o, n, i) {
  const a = n ?? [];
  if (!e)
    return a;
  let r, s;
  const l = {};
  if (e.type !== "CIMSymbolReference")
    return ke.error("Expect cim type to be 'CIMSymbolReference'"), a;
  if (r = e.symbol, s = e.primitiveOverrides, s) {
    const m = [];
    for (const p of s) {
      const f = p.valueExpressionInfo;
      if (f && t) {
        const c = f.expression, y = $e(c, t.spatialReference, t.fields).then((g) => {
          g && ge(l, p.primitiveName, p.propertyName, g);
        });
        m.push(y);
      } else
        p.value != null && ge(l, p.primitiveName, p.propertyName, p.value);
    }
    m.length > 0 && await Promise.all(m);
  }
  const u = [];
  switch (Oe(r, o, u), u.length > 0 && await Promise.all(u), r.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      st(r, s, l, t, a, o, i);
  }
  return a;
}
function st(e, t, o, n, i, a, r) {
  if (!e)
    return;
  const s = e.symbolLayers;
  if (!s)
    return;
  const l = e.effects;
  let u;
  const m = X.getSize(e);
  e.type === "CIMPointSymbol" && e.angleAlignment === "Map" && (u = ne.MAP);
  let p = s.length;
  for (; p--; ) {
    const f = s[p];
    if (!f || f.enable === !1)
      continue;
    let c;
    l && l.length && (c = [...l]);
    const y = f.effects;
    y && y.length && (l ? c.push(...y) : c = [...y]);
    const g = [];
    let S;
    U.findEffectOverrides(c, t, g), S = g.length > 0 ? bt(c, g, o, n) : c;
    const d = [];
    switch (U.findApplicableOverrides(f, t, d), f.type) {
      case "CIMSolidFill":
        lt(f, S, o, d, n, i);
        break;
      case "CIMPictureFill":
        ct(f, S, o, d, n, a, i);
        break;
      case "CIMHatchFill":
        ft(f, S, o, d, n, i);
        break;
      case "CIMGradientFill":
        mt(f, S, o, d, n, i);
        break;
      case "CIMSolidStroke":
        ut(f, S, o, d, n, i, e.type === "CIMPolygonSymbol", m);
        break;
      case "CIMPictureStroke":
        pt(f, S, o, d, n, i, e.type === "CIMPolygonSymbol", m);
        break;
      case "CIMGradientStroke":
        yt(f, S, o, d, n, i, e.type === "CIMPolygonSymbol", m);
        break;
      case "CIMCharacterMarker":
        if (re(f, S, o, d, n, i))
          break;
        break;
      case "CIMPictureMarker":
        if (re(f, S, o, d, n, i))
          break;
        e.type === "CIMLineSymbol" && (u = de(f)), ht(f, S, o, d, n, a, i, u, m);
        break;
      case "CIMVectorMarker":
        if (re(f, S, o, d, n, i))
          break;
        e.type === "CIMLineSymbol" && (u = de(f)), gt(f, S, o, d, n, i, a, u, m, r);
        break;
      default:
        ke.error("Cannot analyze CIM layer", f.type);
    }
  }
}
function lt(e, t, o, n, i, a) {
  const r = e.primitiveName, s = H(e.color), [l, u] = A(n, r, t, null), m = M(JSON.stringify(e) + u).toString();
  a.push({ type: "fill", templateHash: m, materialHash: l ? () => m : m, cim: e, materialOverrides: null, colorLocked: e.colorLocked, color: h(r, o, "Color", i, s, Y), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: t });
}
function ct(e, t, o, n, i, a, r) {
  const s = e.primitiveName, l = e.tintColor ? H(e.tintColor) : { r: 255, g: 255, b: 255, a: 1 }, [u, m] = A(n, s, t, null), p = M(JSON.stringify(e) + m).toString(), f = M(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();
  let c = C(e.scaleX);
  if ("width" in e) {
    const y = e.width;
    let g = 1;
    const S = a.getResource(e.url);
    D(S) && (g = S.width / S.height), c /= g * (e.height / y);
  }
  r.push({ type: "fill", templateHash: p, materialHash: u ? () => f : f, cim: e, materialOverrides: null, colorLocked: e.colorLocked, effects: t, color: h(s, o, "TintColor", i, l, Y), height: h(s, o, "Height", i, e.height), scaleX: h(s, o, "ScaleX", i, c), angle: h(s, o, "Rotation", i, C(e.rotation)), offsetX: h(s, o, "OffsetX", i, C(e.offsetX)), offsetY: h(s, o, "OffsetY", i, C(e.offsetY)), url: e.url });
}
function ft(e, t, o, n, i, a) {
  const r = ["Rotation", "OffsetX", "OffsetY"], s = n.filter((c) => c.primitiveName !== e.primitiveName && r.indexOf(c.propertyName) === -1), l = e.primitiveName, [u, m] = A(n, l, t, null), p = M(JSON.stringify(e) + m).toString(), f = M(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();
  a.push({ type: "fill", templateHash: p, materialHash: u ? q(f, o, s, i) : f, cim: e, materialOverrides: s, colorLocked: e.colorLocked, effects: t, color: { r: 255, g: 255, b: 255, a: 1 }, height: h(l, o, "Separation", i, e.separation), scaleX: 1, angle: h(l, o, "Rotation", i, C(e.rotation)), offsetX: h(l, o, "OffsetX", i, C(e.offsetX)), offsetY: h(l, o, "OffsetY", i, C(e.offsetY)) });
}
function mt(e, t, o, n, i, a) {
  const r = e.primitiveName, [s, l] = A(n, r, t, null), u = M(JSON.stringify(e) + l).toString();
  a.push({ type: "fill", templateHash: u, materialHash: s ? q(u, o, n, i) : u, cim: e, materialOverrides: null, colorLocked: e.colorLocked, effects: t, color: { r: 128, g: 128, b: 128, a: 1 }, height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1 });
}
function ut(e, t, o, n, i, a, r, s) {
  const l = e.primitiveName, u = H(e.color), m = e.width !== void 0 ? e.width : 4, p = se(e.capStyle), f = le(e.joinStyle), c = e.miterLimit, [y, g] = A(n, l, t, null), S = M(JSON.stringify(e) + g).toString();
  let d, v;
  if (t && t instanceof Array && t.length > 0) {
    const N = t[t.length - 1];
    if (N.type === "CIMGeometricEffectDashes" && N.lineDashEnding === "NoConstraint" && N.offsetAlongLine === null) {
      const b = (t = [...t]).pop();
      d = b.dashTemplate, v = b.scaleDash;
    }
  }
  a.push({ type: "line", templateHash: S, materialHash: y ? () => S : S, cim: e, materialOverrides: null, isOutline: r, colorLocked: e.colorLocked, effects: t, color: h(l, o, "Color", i, u, Y), width: h(l, o, "Width", i, m), cap: h(l, o, "CapStyle", i, p), join: h(l, o, "JoinStyle", i, f), miterLimit: h(l, o, "MiterLimit", i, c), referenceWidth: s, zOrder: ce(e.name), dashTemplate: d, scaleDash: v });
}
function pt(e, t, o, n, i, a, r, s) {
  const l = M(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(), u = e.primitiveName, m = H(e.tintColor), p = e.width !== void 0 ? e.width : 4, f = se(e.capStyle), c = le(e.joinStyle), y = e.miterLimit, [g, S] = A(n, u, t, null), d = M(JSON.stringify(e) + S).toString();
  a.push({ type: "line", templateHash: d, materialHash: g ? () => l : l, cim: e, materialOverrides: null, isOutline: r, colorLocked: e.colorLocked, effects: t, color: h(u, o, "TintColor", i, m, Y), width: h(u, o, "Width", i, p), cap: h(u, o, "CapStyle", i, f), join: h(u, o, "JoinStyle", i, c), miterLimit: h(u, o, "MiterLimit", i, y), referenceWidth: s, zOrder: ce(e.name), dashTemplate: null, scaleDash: !1, url: e.url });
}
function yt(e, t, o, n, i, a, r, s) {
  const l = e.primitiveName, u = e.width !== void 0 ? e.width : 4, m = se(e.capStyle), p = le(e.joinStyle), f = e.miterLimit, [c, y] = A(n, l, t, null), g = M(JSON.stringify(e) + y).toString();
  a.push({ type: "line", templateHash: g, materialHash: c ? q(g, o, n, i) : g, cim: e, materialOverrides: null, isOutline: r, colorLocked: e.colorLocked, effects: t, color: { r: 128, g: 128, b: 128, a: 1 }, width: h(l, o, "Width", i, u), cap: h(l, o, "CapStyle", i, m), join: h(l, o, "JoinStyle", i, p), miterLimit: h(l, o, "MiterLimit", i, f), referenceWidth: s, zOrder: ce(e.name), dashTemplate: null, scaleDash: !1 });
}
function re(e, t, o, n, i, a) {
  const r = e.markerPlacement;
  if (!r || r.type !== "CIMMarkerPlacementInsidePolygon")
    return !1;
  const s = r, l = ["Rotation", "OffsetX", "OffsetY"], u = n.filter((d) => d.primitiveName !== e.primitiveName && l.indexOf(d.propertyName) === -1), m = "url" in e ? e.url : null, [p, f] = A(n, s.primitiveName, t, null), c = M(JSON.stringify(e) + f).toString();
  let y = s.stepY, g = null, S = 1;
  return r.shiftOddRows && (y *= 2, g = function(d) {
    return d ? 2 * d : 0;
  }, S = 0.5), a.push({ type: "fill", templateHash: c, materialHash: p ? q(c, o, u, i) : c, cim: e, materialOverrides: u, colorLocked: e.colorLocked, effects: t, color: { r: 255, g: 255, b: 255, a: 1 }, height: h(s.primitiveName, o, "StepY", i, y, g), scaleX: S, angle: h(s.primitiveName, o, "GridAngle", i, s.gridAngle), offsetX: h(s.primitiveName, o, "OffsetX", i, C(s.offsetX)), offsetY: h(s.primitiveName, o, "OffsetY", i, C(s.offsetY)), url: m }), !0;
}
function ht(e, t, o, n, i, a, r, s, l) {
  var u;
  const m = e.primitiveName, p = C(e.size);
  let f = C(e.scaleX);
  const c = C(e.rotation), y = C(e.offsetX), g = C(e.offsetY), S = e.tintColor ? H(e.tintColor) : { r: 255, g: 255, b: 255, a: 1 }, d = M(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(), v = Me(e.markerPlacement, n, o, i), [N, b] = A(n, m, t, v), O = M(JSON.stringify(e) + b).toString(), I = (u = e.anchorPoint) != null ? u : { x: 0, y: 0 };
  if ("width" in e) {
    const P = e.width;
    let x = 1;
    const k = a.getResource(e.url);
    D(k) && (x = k.width / k.height), f /= x * (p / P);
  }
  r.push({ type: "marker", templateHash: O, materialHash: N ? () => d : d, cim: e, materialOverrides: null, colorLocked: e.colorLocked, effects: t, scaleSymbolsProportionally: !1, alignment: s, size: h(m, o, "Size", i, p), scaleX: h(m, o, "ScaleX", i, f), rotation: h(m, o, "Rotation", i, c), offsetX: h(m, o, "OffsetX", i, y), offsetY: h(m, o, "OffsetY", i, g), color: h(m, o, "TintColor", i, S, Y), anchorPoint: { x: I.x, y: -I.y }, isAbsoluteAnchorPoint: e.anchorPointUnits !== "Relative", outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, frameHeight: 0, rotateClockwise: e.rotateClockwise, referenceSize: l, sizeRatio: 1, markerPlacement: e.markerPlacement, url: e.url });
}
function gt(e, t, o, n, i, a, r, s, l, u) {
  const m = e.markerGraphics;
  if (!m)
    return;
  let p = 0;
  if (e.scaleSymbolsProportionally) {
    const c = e.frame;
    c && (p = c.ymax - c.ymin);
  }
  const f = Me(e.markerPlacement, n, o, i);
  for (const c of m)
    if (c) {
      const y = c.symbol;
      if (!y)
        continue;
      switch (y.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          St(e, t, f, c, n, o, i, a, r, s, l, p, u);
          break;
        case "CIMTextSymbol":
          dt(e, t, f, c, o, n, i, a, s, l, p);
      }
    }
}
function dt(e, t, o, n, i, a, r, s, l, u, m) {
  const p = [];
  U.findApplicableOverrides(n, a, p);
  const f = n.geometry;
  if (!("x" in f) || !("y" in f))
    return;
  const c = n.symbol, y = at(c), g = nt(c.fontStyleName), S = Ce(c.fontFamilyName);
  c.font = { family: S, decoration: y, ...g };
  const d = e.frame, v = f.x - 0.5 * (d.xmin + d.xmax), N = f.y - 0.5 * (d.ymin + d.ymax), b = e.size / m, O = e.primitiveName, I = C(c.height) * b, P = C(c.angle), x = C(e.offsetX) + (C(c.offsetX) + v) * b, k = C(e.offsetY) + (C(c.offsetY) + N) * b, z = H(X.getFillColor(c));
  let L = H(X.getStrokeColor(c)), J = X.getStrokeWidth(c);
  J || (L = H(X.getFillColor(c.haloSymbol)), J = c.haloSize * b);
  const [E, j] = A(a, O, t, o), F = JSON.stringify(e.effects) + Number(e.colorLocked) + JSON.stringify(e.anchorPoint) + e.anchorPointUnits + JSON.stringify(e.markerPlacement), R = M(JSON.stringify(n) + F + j).toString();
  let $ = h(n.primitiveName, i, "TextString", r, n.textString, Ae, c.textCase);
  if ($ == null)
    return;
  const { fontStyleName: T } = c, G = S + (T ? "-" + T.toLowerCase() : "-regular"), w = G;
  typeof $ == "string" && $.indexOf("[") > -1 && c.fieldMap && ($ = Re(c.fieldMap, $, c.textCase)), s.push({ type: "text", templateHash: R, materialHash: E || typeof $ == "function" || $.match(/\[(.*?)\]/) ? (V, ee, K) => w + "-" + Ye($, V, ee, K) : w + "-" + M($), cim: c, materialOverrides: null, colorLocked: e.colorLocked, effects: t, alignment: l, anchorPoint: { x: e.anchorPoint ? e.anchorPoint.x : 0, y: e.anchorPoint ? e.anchorPoint.y : 0 }, isAbsoluteAnchorPoint: e.anchorPointUnits !== "Relative", fontName: G, decoration: y, weight: h(O, i, "Weight", r, g.weight), style: h(O, i, "Size", r, g.style), size: h(O, i, "Size", r, I), angle: h(O, i, "Rotation", r, P), offsetX: h(O, i, "OffsetX", r, x), offsetY: h(O, i, "OffsetY", r, k), horizontalAlignment: it(c.horizontalAlignment), verticalAlignment: rt(c.verticalAlignment), text: $, color: z, outlineColor: L, outlineSize: J, referenceSize: u, sizeRatio: 1, markerPlacement: o });
}
function St(e, t, o, n, i, a, r, s, l, u, m, p, f) {
  const c = n.symbol, y = c.symbolLayers;
  if (!y)
    return;
  if (f)
    return void Se(e, t, o, n, a, i, r, s, l, u, m, p);
  let g = y.length;
  if (Ct(y))
    return void vt(e, t, o, n, y, i, a, r, s, u, m, p);
  const S = he.applyEffects(c.effects, n.geometry, l.geometryEngine);
  if (S)
    for (; g--; ) {
      const v = y[g];
      if (v && v.enable !== !1)
        switch (v.type) {
          case "CIMSolidFill":
          case "CIMSolidStroke": {
            var d;
            const N = he.applyEffects(v.effects, S, l.geometryEngine), b = Ne(N);
            if (!b)
              continue;
            const [O, I, P] = be(b, e.frame, e.size, e.anchorPoint, e.anchorPointUnits !== "Relative"), x = v.type === "CIMSolidFill", k = { type: "sdf", geom: N, asFill: x }, z = e.primitiveName, L = (d = C(e.size)) != null ? d : 10, J = C(e.rotation), E = C(e.offsetX), j = C(e.offsetY), F = v.path, R = v.primitiveName, $ = H(x ? X.getFillColor(v) : X.getStrokeColor(v)), T = x ? { r: 0, g: 0, b: 0, a: 0 } : H(X.getStrokeColor(v)), G = X.getStrokeWidth(v);
            if (!x && !G)
              break;
            let w = !1, V = "";
            for (const W of i)
              W.primitiveName !== R && W.primitiveName !== z || (W.value !== void 0 ? V += `-${W.primitiveName}-${W.propertyName}-${JSON.stringify(W.value)}` : W.valueExpressionInfo && (w = !0));
            D(t) && typeof t == "function" && (w = !0);
            const ee = JSON.stringify({ ...e, markerGraphics: null }), K = M(JSON.stringify(k) + F).toString(), xe = { type: "marker", templateHash: M(JSON.stringify(n) + JSON.stringify(v) + ee + V).toString(), materialHash: w ? () => K : K, cim: k, materialOverrides: null, colorLocked: e.colorLocked, effects: t, scaleSymbolsProportionally: e.scaleSymbolsProportionally, alignment: u, anchorPoint: { x: I, y: P }, isAbsoluteAnchorPoint: !1, size: h(e.primitiveName, a, "Size", r, L), rotation: h(e.primitiveName, a, "Rotation", r, J), offsetX: h(e.primitiveName, a, "OffsetX", r, E), offsetY: h(e.primitiveName, a, "OffsetY", r, j), scaleX: 1, frameHeight: p, rotateClockwise: e.rotateClockwise, referenceSize: m, sizeRatio: O, color: h(R, a, "Color", r, $, Y), outlineColor: h(R, a, "Color", r, T, Y), outlineWidth: h(R, a, "Width", r, G), markerPlacement: o, path: F };
            s.push(xe);
            break;
          }
          default:
            Se(e, t, o, n, a, i, r, s, l, u, m, p);
        }
    }
}
function vt(e, t, o, n, i, a, r, s, l, u, m, p) {
  const f = n.geometry, c = i[0], y = i[1], g = Ne(f);
  if (!g)
    return;
  const [S, d, v] = be(g, e.frame, e.size, e.anchorPoint, e.anchorPointUnits !== "Relative"), N = { type: "sdf", geom: f, asFill: !0 }, b = e.primitiveName, O = C(e.size), I = C(e.rotation), P = C(e.offsetX), x = C(e.offsetY), k = y.path, z = y.primitiveName, L = c.primitiveName, J = H(X.getFillColor(y)), E = H(X.getStrokeColor(c)), j = X.getStrokeWidth(c);
  let F = !1, R = "";
  for (const w of a)
    w.primitiveName !== z && w.primitiveName !== L && w.primitiveName !== b || (w.value !== void 0 ? R += `-${w.primitiveName}-${w.propertyName}-${JSON.stringify(w.value)}` : w.valueExpressionInfo && (F = !0));
  const $ = JSON.stringify({ ...e, markerGraphics: null }), T = M(JSON.stringify(N) + k).toString(), G = { type: "marker", templateHash: M(JSON.stringify(n) + JSON.stringify(y) + JSON.stringify(c) + $ + R).toString(), materialHash: F ? () => T : T, cim: N, materialOverrides: null, colorLocked: e.colorLocked, effects: t, scaleSymbolsProportionally: e.scaleSymbolsProportionally, alignment: u, anchorPoint: { x: d, y: v }, isAbsoluteAnchorPoint: !1, size: h(e.primitiveName, r, "Size", s, O), rotation: h(e.primitiveName, r, "Rotation", s, I), offsetX: h(e.primitiveName, r, "OffsetX", s, P), offsetY: h(e.primitiveName, r, "OffsetY", s, x), scaleX: 1, frameHeight: p, rotateClockwise: e.rotateClockwise, referenceSize: m, sizeRatio: S, color: h(z, r, "Color", s, J, Y), outlineColor: h(L, r, "Color", s, E, Y), outlineWidth: h(L, r, "Width", s, j), markerPlacement: o, path: k };
  l.push(G);
}
function Se(e, t, o, n, i, a, r, s, l, u, m, p) {
  const f = Nt(e, n);
  let c = [];
  const y = ["Rotation", "OffsetX", "OffsetY"];
  c = a.filter((k) => k.primitiveName !== e.primitiveName || y.indexOf(k.propertyName) === -1);
  let g = "";
  for (const k of a)
    k.value !== void 0 && (g += `-${k.primitiveName}-${k.propertyName}-${JSON.stringify(k.value)}`);
  const [S, d, v] = X.getTextureAnchor(f, l), N = e.primitiveName, b = C(e.rotation), O = C(e.offsetX), I = C(e.offsetY), P = M(JSON.stringify(f) + g).toString(), x = { type: "marker", templateHash: P, materialHash: c.length > 0 || D(t) && typeof t == "function" ? q(P, i, c, r) : P, cim: f, materialOverrides: c, colorLocked: e.colorLocked, effects: t, scaleSymbolsProportionally: e.scaleSymbolsProportionally, alignment: u, anchorPoint: { x: S, y: d }, isAbsoluteAnchorPoint: !1, size: e.size, rotation: h(N, i, "Rotation", r, b), offsetX: h(N, i, "OffsetX", r, O), offsetY: h(N, i, "OffsetY", r, I), color: { r: 255, g: 255, b: 255, a: 1 }, outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, scaleX: 1, frameHeight: p, rotateClockwise: e.rotateClockwise, referenceSize: m, sizeRatio: v / Le(e.size), markerPlacement: o };
  s.push(x);
}
function Nt(e, t) {
  return { type: e.type, enable: !0, name: e.name, colorLocked: e.colorLocked, primitiveName: e.primitiveName, anchorPoint: e.anchorPoint, anchorPointUnits: e.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: e.rotateClockwise, rotation: 0, size: e.size, billboardMode3D: e.billboardMode3D, depth3D: e.depth3D, frame: e.frame, markerGraphics: [t], scaleSymbolsProportionally: e.scaleSymbolsProportionally, respectFrame: e.respectFrame, clippingPath: e.clippingPath };
}
function ce(e) {
  if (e && e.indexOf("Level_") === 0) {
    const t = parseInt(e.substr(6), 10);
    if (!isNaN(t))
      return t;
  }
  return 0;
}
function Y(e) {
  if (!e || e.length === 0)
    return null;
  const t = new Ie(e).toRgba();
  return { r: t[0], g: t[1], b: t[2], a: t[3] };
}
function h(e, t, o, n, i, a, r) {
  const s = t[e];
  if (s) {
    const l = s[o];
    if (typeof l == "string" || typeof l == "number" || l instanceof Array)
      return a ? a.call(null, l, r) : l;
    if (l != null && l instanceof Q)
      return (u, m, p) => {
        let f = Z(l, u, { $view: p }, n.geometryType, m);
        return f !== null && a && (f = a.call(null, f, r)), f !== null ? f : i;
      };
  }
  return i;
}
function bt(e, t, o, n) {
  for (const a of t)
    if (a.valueExpressionInfo) {
      const r = o[a.primitiveName] && o[a.primitiveName][a.propertyName];
      r instanceof Q && (a.fn = (s, l, u) => Z(r, s, { $view: u }, n.geometryType, l));
    }
  const i = (a) => a && a.charAt(0).toLowerCase() + a.substr(1);
  return (a, r, s) => {
    for (const m of t)
      m.fn && (m.value = m.fn(a, r, s));
    const l = [];
    for (let m of e) {
      var u;
      const p = (u = m) == null ? void 0 : u.primitiveName;
      if (p) {
        let f = !1;
        for (const c of t)
          if (c.primitiveName === p) {
            const y = i(c.propertyName);
            c.value != null && c.value !== m[y] && (f || (m = ve(m), f = !0), m[y] = c.value);
          }
      }
      l.push(m);
    }
    return l;
  };
}
function Me(e, t, o, n) {
  const i = [];
  if (U.findApplicableOverrides(e, t, i), i.length === 0)
    return e;
  for (const r of i)
    if (r.valueExpressionInfo) {
      const s = o[r.primitiveName] && o[r.primitiveName][r.propertyName];
      s instanceof Q && (r.fn = (l, u, m) => Z(s, l, { $view: m }, n.geometryType, u));
    }
  const a = (r) => r && r.charAt(0).toLowerCase() + r.substr(1);
  return (r, s, l) => {
    for (const p of i)
      p.fn && (p.value = p.fn(r, s, l));
    const u = ve(e), m = e.primitiveName;
    for (const p of i)
      if (p.primitiveName === m) {
        const f = a(p.propertyName);
        p.value != null && p.value !== u[f] && (u[f] = p.value);
      }
    return u;
  };
}
function q(e, t, o, n) {
  for (const i of o)
    if (i.valueExpressionInfo) {
      const a = t[i.primitiveName] && t[i.primitiveName][i.propertyName];
      a instanceof Q && (i.fn = (r, s, l) => Z(a, r, { $view: l }, n.geometryType, s));
    }
  return (i, a, r) => {
    for (const s of o)
      s.fn && (s.value = s.fn(i, a, r));
    return M(e + U.buildOverrideKey(o)).toString();
  };
}
function Jt(e, t) {
  if (!t || t.length === 0)
    return e;
  const o = JSON.parse(JSON.stringify(e));
  return U.applyOverrides(o, t), o;
}
function A(e, t, o, n) {
  let i = !1, a = "";
  for (const r of e)
    r.primitiveName === t && (r.value !== void 0 ? a += `-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}` : r.valueExpressionInfo && (i = !0));
  return D(o) && typeof o == "function" && (i = !0), D(n) && typeof n == "function" && (i = !0), [i, a];
}
function Oe(e, t, o) {
  if (e && t)
    switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol": {
        const n = e.symbolLayers;
        if (!n)
          return;
        for (const i of n)
          switch (kt(i, t, o), i.type) {
            case "CIMPictureFill":
            case "CIMHatchFill":
            case "CIMGradientFill":
            case "CIMPictureStroke":
            case "CIMGradientStroke":
            case "CIMCharacterMarker":
            case "CIMPictureMarker":
              "url" in i && i.url && o.push(t.fetchResource(i.url, null));
              break;
            case "CIMVectorMarker": {
              const a = i.markerGraphics;
              if (!a)
                continue;
              for (const r of a)
                if (r) {
                  const s = r.symbol;
                  s && Oe(s, t, o);
                }
            }
          }
      }
    }
}
const Ct = (e) => e && e.length === 2 && e[0].enable && e[1].enable && e[0].type === "CIMSolidStroke" && e[1].type === "CIMSolidFill" && !e[0].effects && !e[1].effects;
let B;
function kt(e, t, o) {
  if (!(!e.effects || D(t.geometryEngine))) {
    if (B)
      return void o.push(B);
    Ee(e.effects) && (B = Fe(), o.push(B), B.then((n) => t.geometryEngine = n));
  }
}
const Mt = { marker: _.MARKER, fill: _.FILL, line: _.LINE, text: _.TEXT };
class At {
  constructor(t, o, n, i) {
    const a = { minScale: o == null ? void 0 : o.minScale, maxScale: o == null ? void 0 : o.maxScale }, r = Ot(a);
    this.layers = t, this.data = o, this.hash = this._createHash() + r, this.rendererKey = n;
    const s = { isOutline: !1, isOutlinedFill: !1, placement: null, stride: { fill: "default" }, vvFlags: n };
    for (const l of t) {
      const u = Mt[l.type];
      l.materialKey = Ue(u, s), l.maxVVSize = i, l.scaleInfo = a, l.templateHash += r;
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let t = "";
    for (const o of this.layers)
      t += o.templateHash;
    return t;
  }
}
function Ot(e) {
  return e.minScale || e.maxScale ? e.minScale + "-" + e.maxScale : "";
}
export {
  Ht as H,
  he as f,
  At as l,
  Xt as m,
  zt as n,
  Jt as o,
  je as r,
  Z as s
};

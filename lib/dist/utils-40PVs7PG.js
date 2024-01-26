function B(t) {
  return typeof t == "function";
}
function v(t, r, o, e) {
  return B(t) ? t(r, o, e) : t;
}
const E = ` /-,
`;
function L(t) {
  let r = t.length;
  for (; r--; )
    if (!E.includes(t.charAt(r)))
      return !1;
  return !0;
}
function F(t, r) {
  const o = [];
  let e = 0, n = -1;
  do
    if (n = t.indexOf("[", e), n >= e) {
      if (n > e) {
        const i = t.substr(e, n - e);
        o.push([i, null, L(i)]);
      }
      if (e = n + 1, n = t.indexOf("]", e), n >= e) {
        if (n > e) {
          const i = r[t.substr(e, n - e)];
          i && o.push([null, i, !1]);
        }
        e = n + 1;
      }
    }
  while (n !== -1);
  if (e < t.length - 1) {
    const i = t.substr(e);
    o.push([i, null, L(i)]);
  }
  return o;
}
function z(t, r, o) {
  let e = "", n = null;
  for (const i of r) {
    const [M, u, f] = i;
    if (M)
      f ? n = M : (n && (e += n, n = null), e += M);
    else {
      const C = t.attributes[u];
      C && (n && (e += n, n = null), e += C);
    }
  }
  return R(e, o);
}
function D(t, r, o) {
  const e = F(r, t);
  return (n) => z(n, e, o);
}
function R(t, r) {
  switch (typeof t != "string" && (t = String(t)), r) {
    case "LowerCase":
      return t.toLowerCase();
    case "Allcaps":
      return t.toUpperCase();
    default:
      return t;
  }
}
function N(t, r, o, e, n, i, M = !0) {
  const u = r / n, f = o / i, C = Math.ceil(u / 2), G = Math.ceil(f / 2);
  for (let s = 0; s < i; s++)
    for (let y = 0; y < n; y++) {
      const m = 4 * (y + (M ? i - s - 1 : s) * n);
      let l = 0, b = 0, p = 0, I = 0, k = 0, g = 0, S = 0;
      const O = (s + 0.5) * f;
      for (let d = Math.floor(s * f); d < (s + 1) * f; d++) {
        const w = Math.abs(O - (d + 0.5)) / G, T = (y + 0.5) * u, q = w * w;
        for (let h = Math.floor(y * u); h < (y + 1) * u; h++) {
          let c = Math.abs(T - (h + 0.5)) / C;
          const a = Math.sqrt(q + c * c);
          a >= -1 && a <= 1 && (l = 2 * a * a * a - 3 * a * a + 1, l > 0 && (c = 4 * (h + d * r), S += l * t[c + 3], p += l, t[c + 3] < 255 && (l = l * t[c + 3] / 250), I += l * t[c], k += l * t[c + 1], g += l * t[c + 2], b += l));
        }
      }
      e[m] = I / b, e[m + 1] = k / b, e[m + 2] = g / b, e[m + 3] = S / p;
    }
}
function V(t) {
  return t ? { r: t[0], g: t[1], b: t[2], a: t[3] / 255 } : { r: 0, g: 0, b: 0, a: 0 };
}
function U(t) {
  var r;
  return ((r = t.data) == null ? void 0 : r.symbol) ?? null;
}
function j(t) {
  return t.type === "CIMVectorMarker" || t.type === "CIMPictureMarker" || t.type === "CIMBarChartMarker" || t.type === "CIMCharacterMarker" || t.type === "CIMPieChartMarker" || t.type === "CIMStackedBarChartMarker";
}
function J(t) {
  return t.type === "CIMGradientStroke" || t.type === "CIMPictureStroke" || t.type === "CIMSolidStroke";
}
function $(t) {
  return t != null && (t.type === "CIMMarkerPlacementAlongLineRandomSize" || t.type === "CIMMarkerPlacementAlongLineSameSize" || t.type === "CIMMarkerPlacementAlongLineVariableSize" || t.type === "CIMMarkerPlacementAtExtremities" || t.type === "CIMMarkerPlacementAtMeasuredUnits" || t.type === "CIMMarkerPlacementAtRatioPositions" || t.type === "CIMMarkerPlacementOnLine" || t.type === "CIMMarkerPlacementOnVertices");
}
const H = (t, r = 0) => t == null || isNaN(t) ? r : t, K = (t) => t.tintColor ? V(t.tintColor) : { r: 255, g: 255, b: 255, a: 1 }, Q = (t) => {
  if (!t)
    return !1;
  for (const r of t)
    switch (r.type) {
      case "CIMGeometricEffectBuffer":
      case "CIMGeometricEffectOffset":
      case "CIMGeometricEffectDonut":
        return !0;
    }
  return !1;
};
function W() {
  return import("./geometryEngineJSON-h4WfBguA.js");
}
function X(t) {
  if (!t)
    return "normal";
  switch (t.toLowerCase()) {
    case "italic":
      return "italic";
    case "oblique":
      return "oblique";
    default:
      return "normal";
  }
}
function Y(t) {
  if (!t)
    return "normal";
  switch (t.toLowerCase()) {
    case "bold":
      return "bold";
    case "bolder":
      return "bolder";
    case "lighter":
      return "lighter";
    default:
      return "normal";
  }
}
function Z(t) {
  let r = "normal", o = "normal";
  if (t) {
    const e = t.toLowerCase();
    e.includes("italic") ? r = "italic" : e.includes("oblique") && (r = "oblique"), e.includes("bold") ? o = "bold" : e.includes("light") && (o = "lighter");
  }
  return { style: r, weight: o };
}
function _(t) {
  return t.underline ? "underline" : t.strikethrough ? "line-through" : "none";
}
function P(t) {
  if (!t)
    return null;
  switch (t.type) {
    case "CIMPolygonSymbol":
      if (t.symbolLayers)
        for (const r of t.symbolLayers) {
          const o = P(r);
          if (o != null)
            return o;
        }
      break;
    case "CIMTextSymbol":
      return P(t.symbol);
    case "CIMSolidFill":
      return t.color;
  }
}
function x(t) {
  if (t)
    switch (t.type) {
      case "CIMPolygonSymbol":
      case "CIMLineSymbol": {
        const r = t.symbolLayers;
        if (r)
          for (const o of r) {
            const e = x(o);
            if (e != null)
              return e;
          }
        break;
      }
      case "CIMTextSymbol":
        return x(t.symbol);
      case "CIMSolidStroke":
        return t.color;
    }
}
function A(t) {
  if (t)
    switch (t.type) {
      case "CIMPolygonSymbol":
      case "CIMLineSymbol":
        if (t.symbolLayers)
          for (const r of t.symbolLayers) {
            const o = A(r);
            if (o !== void 0)
              return o;
          }
        break;
      case "CIMTextSymbol":
        return A(t.symbol);
      case "CIMSolidStroke":
      case "CIMGradientStroke":
      case "CIMPictureStroke":
        return t.width;
    }
}
function tt(t) {
  switch (t) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
    case "Justify":
      return "center";
  }
}
function rt(t) {
  switch (t) {
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
function et(t) {
  return (t ? Object.keys(t) : []).map((r) => ({ name: r, alias: r, type: typeof t[r] == "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
}
const nt = (t) => t.includes("data:image/svg+xml");
export {
  et as A,
  nt as F,
  rt as G,
  W as I,
  A as L,
  J as M,
  P,
  Z as S,
  N as a,
  H as b,
  D as c,
  Q as d,
  B as e,
  U as f,
  Y as g,
  X as h,
  F as i,
  _ as k,
  z as l,
  $ as m,
  K as p,
  R as s,
  v as t,
  V as u,
  x as w,
  tt as x,
  j as y
};

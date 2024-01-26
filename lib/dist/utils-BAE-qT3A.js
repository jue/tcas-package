import { fD as a, dq as d, an as h, fE as y, fF as S, fG as M, fH as g } from "./index-B7TsCcH6.js";
import { f as C, u as I, M as z, y as L, m as j } from "./utils-99Msuqlm.js";
function x(o) {
  const t = [];
  return m(C(o), t), t.length ? new a(I(t[0])) : null;
}
function m(o, t) {
  var e;
  if (!o)
    return;
  let n;
  n = o.type === "CIMTextSymbol" ? o.symbol : o;
  const l = o.type === "CIMPolygonSymbol";
  if (n != null && n.symbolLayers) {
    for (const r of n.symbolLayers)
      if (!(r.colorLocked || l && (z(r) || L(r) && r.markerPlacement && j(r.markerPlacement))))
        switch (r.type) {
          case "CIMPictureMarker":
          case "CIMPictureStroke":
          case "CIMPictureFill":
            r.tintColor && p(t, r.tintColor);
            break;
          case "CIMVectorMarker":
            (e = r.markerGraphics) == null || e.forEach((c) => {
              m(c.symbol, t);
            });
            break;
          case "CIMSolidStroke":
          case "CIMSolidFill":
            p(t, r.color);
            break;
          case "CIMHatchFill":
            m(r.lineSymbol, t);
        }
  }
}
function p(o, t) {
  for (const n of o)
    if (n.join(".") === t.join("."))
      return;
  o.push(t);
}
new d(1e3);
new a([128, 128, 128]);
const $ = new a("white");
function A(o, t) {
  if (!o)
    return null;
  let n = null;
  return h(o) ? n = E(o) : y(o) && (n = o.type === "cim" ? x(o) : o.color ? new a(o.color) : null), n ? s(n, t) : null;
}
function E(o) {
  const t = o.symbolLayers;
  if (!t)
    return null;
  let n = null;
  return t.forEach((l) => {
    var e;
    l.type === "object" && ((e = l.resource) != null && e.href) || (n = l.type === "water" ? l.color : l.material ? l.material.color : null);
  }), n ? new a(n) : null;
}
function s(o, t) {
  if (t == null || o == null)
    return o;
  const n = o.toRgba();
  return n[3] = n[3] * t, new a(n);
}
function P(o, t, n) {
  const l = o.symbolLayers;
  if (!l)
    return;
  const e = (r) => s(t = t ?? r ?? (n != null ? $ : null), n);
  l.forEach((r) => {
    var c;
    if (r.type !== "object" || !((c = r.resource) != null && c.href) || t)
      if (r.type === "water")
        r.color = e(r.color);
      else {
        const f = r.material != null ? r.material.color : null, i = e(f);
        r.material == null ? r.material = new g({ color: i }) : r.material.color = i, n != null && "outline" in r && r.outline != null && r.outline.color != null && (r.outline.color = s(r.outline.color, n));
      }
  });
}
function v(o, t, n) {
  (t = t ?? o.color) && (o.color = s(t, n)), n != null && "outline" in o && o.outline && o.outline.color && (o.outline.color = s(o.outline.color, n));
}
function B(o, t, n) {
  o && (t || n != null) && (t && (t = new a(t)), h(o) ? P(o, t, n) : y(o) && v(o, t, n));
}
async function F(o, t) {
  const n = o.symbolLayers;
  n && await S(n, async (l) => R(l, t));
}
async function R(o, t) {
  switch (o.type) {
    case "extrude":
      D(o, t);
      break;
    case "icon":
    case "line":
    case "text":
      q(o, t);
      break;
    case "path":
      H(o, t);
      break;
    case "object":
      await G(o, t);
  }
}
function q(o, t) {
  const n = w(t);
  n != null && (o.size = n);
}
function w(o) {
  for (const t of o)
    if (typeof t == "number")
      return t;
  return null;
}
function D(o, t) {
  o.size = typeof t[2] == "number" ? t[2] : 0;
}
async function G(o, t) {
  const { resourceSize: n, symbolSize: l } = await O(o), e = k(t, n, l);
  o.width = u(t[0], l[0], n[0], e), o.depth = u(t[1], l[1], n[1], e), o.height = u(t[2], l[2], n[2], e);
}
function H(o, t) {
  const n = k(t, M, [o.width, void 0, o.height]);
  o.width = u(t[0], o.width, 1, n), o.height = u(t[2], o.height, 1, n);
}
function k(o, t, n) {
  for (let l = 0; l < 3; l++) {
    const e = o[l];
    switch (e) {
      case "symbol-value": {
        const r = n[l];
        return r != null ? r / t[l] : 1;
      }
      case "proportional":
        break;
      default:
        if (e && t[l])
          return e / t[l];
    }
  }
  return 1;
}
async function O(o) {
  const { computeObjectLayerResourceSize: t } = await import("./symbolLayerUtils-Qy_2yzng.js"), n = await t(o, 10), { width: l, height: e, depth: r } = o, c = [l, r, e];
  let f = 1;
  for (let i = 0; i < 3; i++) {
    const b = c[i];
    if (b != null) {
      f = b / n[i];
      break;
    }
  }
  for (let i = 0; i < 3; i++)
    c[i] == null && (c[i] = n[i] * f);
  return { resourceSize: n, symbolSize: c };
}
function u(o, t, n, l) {
  switch (o) {
    case "proportional":
      return n * l;
    case "symbol-value":
      return t ?? n;
    default:
      return o;
  }
}
function T(o, t) {
  const n = w(t);
  if (n != null)
    switch (o.type) {
      case "simple-marker":
        o.size = n;
        break;
      case "picture-marker": {
        const l = o.width / o.height;
        l > 1 ? (o.width = n, o.height = n * l) : (o.width = n * l, o.height = n);
        break;
      }
      case "simple-line":
        o.width = n;
        break;
      case "text":
        o.font.size = n;
    }
}
async function J(o, t) {
  if (o && t)
    return h(o) ? F(o, t) : void (y(o) && T(o, t));
}
function K(o, t, n) {
  if (o && t != null)
    if (h(o)) {
      const l = o.symbolLayers;
      l && l.forEach((e) => {
        if (e && e.type === "object")
          switch (n) {
            case "tilt":
              e.tilt = t;
              break;
            case "roll":
              e.roll = t;
              break;
            default:
              e.heading = t;
          }
      });
    } else
      y(o) && (o.type !== "simple-marker" && o.type !== "picture-marker" && o.type !== "text" || (o.angle = t));
}
async function N(o, t) {
  return await o.fetchSymbol(t) || o.fetchCIMSymbol(t);
}
export {
  J as D,
  K as I,
  A as b,
  B as g,
  N as q
};

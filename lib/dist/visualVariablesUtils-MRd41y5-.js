import { l as d, fg as p, fh as g } from "./index-Ek1MTSEY.js";
import { x as v, A as l } from "./Utils-1SmxxQP6.js";
import { c as z } from "./enums-YM9SAu8u.js";
import { o as S } from "./visualVariablesUtils-EcwyP76J.js";
const $ = 8388607, m = 8388608, x = 254, E = 255, F = 0, y = 1, h = (t) => (t & m) >>> 23, U = (t) => t & $, L = (t) => h(t) === y ? x : E;
function R(t) {
  return h(t) === y;
}
function T(t, e) {
  return ((e ? m : 0) | t) >>> 0;
}
function V(t, e = 0, n = !1) {
  const s = t[e + 3];
  return t[e + 0] *= s, t[e + 1] *= s, t[e + 2] *= s, n || (t[e + 3] *= 255), t;
}
function Z(t) {
  if (!t)
    return 0;
  const { r: e, g: n, b: s, a: o } = t;
  return v(e * o, n * o, s * o, 255 * o);
}
function k(t) {
  if (!t)
    return 0;
  const [e, n, s, o] = t;
  return v(e * (o / 255), n * (o / 255), s * (o / 255), o);
}
const N = (t, e) => t && ((...n) => e.warn("DEBUG:", ...n)) || (() => null), O = !1;
function P(t, e) {
  if (!t || !e)
    return t;
  switch (e) {
    case "radius":
    case "distance":
      return 2 * t;
    case "diameter":
    case "width":
      return t;
    case "area":
      return Math.sqrt(t);
  }
  return t;
}
function _(t) {
  return { value: t.value, size: p(t.size) };
}
function a(t) {
  return t.map((e) => _(e));
}
function u(t) {
  if (typeof t == "string" || typeof t == "number")
    return p(t);
  const e = t;
  return { type: "size", expression: e.expression, stops: a(e.stops) };
}
const c = (t) => {
  const e = [], n = [], s = a(t), o = s.length;
  for (let i = 0; i < 6; i++) {
    const r = s[Math.min(i, o - 1)];
    e.push(r.value), n.push(r.size == null ? z : g(r.size));
  }
  return { values: new Float32Array(e), sizes: new Float32Array(n) };
};
function q(t) {
  const e = t && t.length > 0 ? {} : null, n = e ? {} : null;
  if (!e)
    return { vvFields: e, vvRanges: n };
  for (const s of t)
    if (s.field && (e[s.type] = s.field), s.type === "size") {
      n.size || (n.size = {});
      const o = s;
      switch (S(o)) {
        case l.SIZE_MINMAX_VALUE:
          n.size.minMaxValue = { minDataValue: o.minDataValue, maxDataValue: o.maxDataValue, minSize: u(o.minSize), maxSize: u(o.maxSize) };
          break;
        case l.SIZE_SCALE_STOPS:
          n.size.scaleStops = { stops: a(o.stops) };
          break;
        case l.SIZE_FIELD_STOPS:
          if (o.levels) {
            const i = {};
            for (const r in o.levels)
              i[r] = c(o.levels[r]);
            n.size.fieldStops = { type: "level-dependent", levels: i };
          } else
            n.size.fieldStops = { type: "static", ...c(o.stops) };
          break;
        case l.SIZE_UNIT_VALUE:
          n.size.unitValue = { unit: o.valueUnit, valueRepresentation: o.valueRepresentation };
      }
    } else if (s.type === "color")
      n.color = A(s);
    else if (s.type === "opacity")
      n.opacity = b(s);
    else if (s.type === "rotation") {
      const o = s;
      n.rotation = { type: o.rotationType };
    }
  return { vvFields: e, vvRanges: n };
}
function b(t) {
  const e = { values: [0, 0, 0, 0, 0, 0, 0, 0], opacities: [0, 0, 0, 0, 0, 0, 0, 0] };
  if (typeof t.field == "string") {
    if (!t.stops)
      return null;
    {
      if (t.stops.length > 8)
        return null;
      const n = t.stops;
      for (let s = 0; s < 8; ++s) {
        const o = n[Math.min(s, n.length - 1)];
        e.values[s] = o.value, e.opacities[s] = o.opacity;
      }
    }
  } else {
    if (!(t.stops && t.stops.length >= 0))
      return null;
    {
      const n = t.stops && t.stops.length >= 0 && t.stops[0].opacity;
      for (let s = 0; s < 8; s++)
        e.values[s] = 1 / 0, e.opacities[s] = n;
    }
  }
  return e;
}
function f(t, e, n) {
  t[4 * e + 0] = n.r / 255, t[4 * e + 1] = n.g / 255, t[4 * e + 2] = n.b / 255, t[4 * e + 3] = n.a;
}
function A(t) {
  if (d(t) || t.normalizationField)
    return null;
  const e = { field: null, values: [0, 0, 0, 0, 0, 0, 0, 0], colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  if (typeof t.field == "string") {
    if (!t.stops)
      return null;
    {
      if (t.stops.length > 8)
        return null;
      e.field = t.field;
      const n = t.stops;
      for (let s = 0; s < 8; ++s) {
        const o = n[Math.min(s, n.length - 1)];
        e.values[s] = o.value, f(e.colors, s, o.color);
      }
    }
  } else {
    if (!(t.stops && t.stops.length >= 0))
      return null;
    {
      const n = t.stops && t.stops.length >= 0 && t.stops[0].color;
      for (let s = 0; s < 8; s++)
        e.values[s] = 1 / 0, f(e.colors, s, n);
    }
  }
  for (let n = 0; n < 32; n += 4)
    V(e.colors, n, !0);
  return e;
}
export {
  $ as a,
  k as b,
  y as c,
  Z as d,
  h as e,
  U as f,
  L as i,
  O as l,
  q as m,
  N as n,
  R as p,
  P as r,
  T as s,
  F as u
};

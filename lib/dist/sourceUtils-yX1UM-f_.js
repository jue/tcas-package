import { b2 as m, b3 as g, a$ as p, b4 as y, b5 as b, b6 as f } from "./index-j1oaLRcp.js";
class w {
  constructor() {
    this.code = null, this.description = null;
  }
}
class I {
  constructor(t) {
    this.error = new w(), this.globalId = null, this.objectId = null, this.success = !1, this.uniqueId = null, this.error.description = t;
  }
}
function d(e) {
  return new I(e);
}
class q {
  constructor(t) {
    this.globalId = null, this.success = !0, this.objectId = this.uniqueId = t;
  }
}
function G(e) {
  return new q(e);
}
const a = /* @__PURE__ */ new Set();
function P(e, t, i, h = !1, u) {
  a.clear();
  for (const r in i) {
    const n = e.get(r);
    if (!n)
      continue;
    const l = i[r], s = v(n, l);
    if (s !== l && u && u.push({ name: "invalid-value-type", message: "attribute value was converted to match the field type", details: { field: n, originalValue: l, sanitizedValue: s } }), a.add(n.name), n && (h || n.editable)) {
      const c = m(n, s);
      if (c)
        return d(g(c, n, s));
      t[n.name] = s;
    }
  }
  for (const r of e.requiredFields)
    if (!a.has(r.name))
      return d(`missing required field "${r.name}"`);
  return null;
}
function v(e, t) {
  let i = t;
  return typeof t == "string" && p(e) ? i = parseFloat(t) : t != null && y(e) && typeof t != "string" && (i = String(t)), b(i);
}
let o;
function S(e, t) {
  if (!e || !f(t))
    return e;
  if ("rings" in e || "paths" in e) {
    if (!o)
      throw new TypeError("geometry engine not loaded");
    return o.simplify(t, e);
  }
  return e;
}
async function j() {
  return o || (o = await import("./geometryEngineJSON-RRPcM-Hn.js").then((e) => e.g), o);
}
async function V(e, t) {
  !f(e) || t !== "esriGeometryPolygon" && t !== "esriGeometryPolyline" || await j();
}
export {
  G as c,
  P as d,
  S as h,
  d as u,
  V as y
};

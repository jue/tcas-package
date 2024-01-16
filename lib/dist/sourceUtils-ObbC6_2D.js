import { c4 as m, c5 as p, c3 as g, c6 as y, c7 as w, c8 as f } from "./index-h53IWweP.js";
class b {
  constructor() {
    this.code = null, this.description = null;
  }
}
class I {
  constructor(n) {
    this.error = new b(), this.globalId = null, this.objectId = null, this.success = !1, this.uniqueId = null, this.error.description = n;
  }
}
function d(e) {
  return new I(e);
}
class q {
  constructor(n) {
    this.globalId = null, this.success = !0, this.objectId = this.uniqueId = n;
  }
}
function G(e) {
  return new q(e);
}
const a = /* @__PURE__ */ new Set();
function P(e, n, i, h = !1, u) {
  a.clear();
  for (const s in i) {
    const t = e.get(s);
    if (!t)
      continue;
    const l = i[s], r = v(t, l);
    if (r !== l && u && u.push({ name: "invalid-value-type", message: "attribute value was converted to match the field type", details: { field: t, originalValue: l, sanitizedValue: r } }), a.add(t.name), t && (h || t.editable)) {
      const c = m(t, r);
      if (c)
        return d(p(c, t, r));
      n[t.name] = r;
    }
  }
  for (const s of (e == null ? void 0 : e.requiredFields) ?? [])
    if (!a.has(s.name))
      return d(`missing required field "${s.name}"`);
  return null;
}
function v(e, n) {
  let i = n;
  return typeof n == "string" && g(e) ? i = parseFloat(n) : n != null && y(e) && typeof n != "string" && (i = String(n)), w(i);
}
let o;
function S(e, n) {
  if (!e || !f(n))
    return e;
  if ("rings" in e || "paths" in e) {
    if (o == null)
      throw new TypeError("geometry engine not loaded");
    return o.simplify(n, e);
  }
  return e;
}
async function j() {
  return o == null && (o = await import("./geometryEngineJSON-DxRWTvqU.js")), o;
}
async function V(e, n) {
  !f(e) || n !== "esriGeometryPolygon" && n !== "esriGeometryPolyline" || await j();
}
export {
  G as c,
  P as d,
  S as h,
  d as u,
  V as y
};

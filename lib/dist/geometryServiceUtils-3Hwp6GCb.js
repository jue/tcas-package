import { a as c, b as f, c as S, bk as d, c1 as m, fb as h, ae as w, aW as u, H as l, W as v } from "./index-HxXrdrYt.js";
import { f as R, i as $, o as j } from "./utils-ZpixBail.js";
import "vue";
let n = class extends d {
  constructor(t) {
    super(t), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const t = this.geometries.map((a) => a.toJSON()), r = this.geometries[0], e = {};
    return e.outSR = this.outSpatialReference.wkid || JSON.stringify(this.outSpatialReference.toJSON()), e.inSR = r.spatialReference.wkid || JSON.stringify(r.spatialReference.toJSON()), e.geometries = JSON.stringify({ geometryType: m(r), geometries: t }), this.transformation && (e.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (e.transformForward = this.transformForward), e;
  }
};
c([f()], n.prototype, "geometries", void 0), c([f({ json: { read: { source: "outSR" } } })], n.prototype, "outSpatialReference", void 0), c([f()], n.prototype, "transformation", void 0), c([f()], n.prototype, "transformForward", void 0), n = c([S("geoscene.rest.support.ProjectParameters")], n);
const p = n, J = h(p);
async function N(o, t, r) {
  t = J(t);
  const e = R(o), a = { ...e.query, f: "json", ...t.toJSON() }, i = t.outSpatialReference, s = m(t.geometries[0]), g = $(a, r);
  return w(e.path + "/project", g).then(({ data: { geometries: y } }) => j(y, s, i));
}
async function O(o = null, t) {
  var a, i;
  if (u.geometryServiceUrl)
    return u.geometryServiceUrl;
  if (!o)
    throw new l("internal:geometry-service-url-not-configured");
  let r;
  r = "portal" in o ? o.portal || v.getDefault() : o, await r.load({ signal: t });
  const e = (i = (a = r.helperServices) == null ? void 0 : a.geometry) == null ? void 0 : i.url;
  if (!e)
    throw new l("internal:geometry-service-url-not-configured");
  return e;
}
async function x(o, t, r = null, e) {
  const a = await O(r, e), i = new p();
  i.geometries = [o], i.outSpatialReference = t;
  const s = await N(a, i, { signal: e });
  if (s && Array.isArray(s) && s.length === 1)
    return s[0];
  throw new l("internal:geometry-service-projection-failed");
}
export {
  O as getGeometryServiceURL,
  x as projectGeometry
};
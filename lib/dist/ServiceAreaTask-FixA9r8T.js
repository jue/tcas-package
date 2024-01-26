import { e as a, aD as k, d as i, ab as P, aE as n, ad as w, ac as N, b as g, a as A, m as j, w as q, eU as x, r as F, a4 as J, q as O, V as C, C as E, aF as I } from "./index-j1oaLRcp.js";
import { a as V, i as d, u as D, f as K, d as M, o as Q } from "./NAMessage-kHKHah00.js";
import "vue";
import "./GPMessage-aEe8Sv1I.js";
function $(r) {
  return r.features.map((e) => {
    const y = j.fromJSON(r.spatialReference), o = g.fromJSON(e);
    return q(o.geometry).spatialReference = y, o;
  });
}
function B(r) {
  return x(r.features.map((e) => (F(e.geometry) && (e.geometry.spatialReference = r.spatialReference), J(e.geometry))));
}
let t = class extends k {
  constructor(r) {
    super(r), this.facilities = null, this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.serviceAreaPolylines = null, this.serviceAreaPolygons = null;
  }
  readFacilities(r) {
    return B(r);
  }
  readPointBarriers(r, e) {
    return B(e.barriers);
  }
  readPolylineBarriers(r) {
    return B(r);
  }
  readPolygonBarriers(r) {
    return B(r);
  }
  readIncidents(r, e) {
    return $(e.saPolylines);
  }
  readServiceAreaPolygons(r, e) {
    return $(e.saPolygons);
  }
};
a([i({ type: [P] })], t.prototype, "facilities", void 0), a([n("facilities")], t.prototype, "readFacilities", null), a([i({ type: [V] })], t.prototype, "messages", void 0), a([i({ type: [P] })], t.prototype, "pointBarriers", void 0), a([n("pointBarriers", ["barriers"])], t.prototype, "readPointBarriers", null), a([i({ type: [w] })], t.prototype, "polylineBarriers", void 0), a([n("polylineBarriers")], t.prototype, "readPolylineBarriers", null), a([i({ type: [N] })], t.prototype, "polygonBarriers", void 0), a([n("polygonBarriers")], t.prototype, "readPolygonBarriers", null), a([i({ type: [g] })], t.prototype, "serviceAreaPolylines", void 0), a([n("serviceAreaPolylines", ["saPolylines"])], t.prototype, "readIncidents", null), a([i({ type: [g] })], t.prototype, "serviceAreaPolygons", void 0), a([n("serviceAreaPolygons", ["saPolygons"])], t.prototype, "readServiceAreaPolygons", null), t = a([A("geoscene.rest.support.ServiceAreaSolveResult")], t);
const T = t, U = Q({ accumulateAttributes: { name: "accumulateAttributeNames" }, attributeParameterValues: !0, defaultBreaks: !0, facilities: !0, outSpatialReference: { name: "outSR", getter: (r) => r.outSpatialReference.wkid }, pointBarriers: { name: "barriers" }, polylineBarriers: !0, polygonBarriers: !0, restrictionAttributes: { name: "restrictionAttributeNames" }, returnPointBarriers: { name: "returnBarriers" }, travelMode: !0 });
async function Z(r, e, y) {
  const o = [], p = [], l = {}, u = {}, m = O(r), { path: v } = m;
  e.facilities && e.facilities.features && d(e.facilities.features, p, "facilities.features", l), e.pointBarriers && e.pointBarriers.features && d(e.pointBarriers.features, p, "pointBarriers.features", l), e.polylineBarriers && e.polylineBarriers.features && d(e.polylineBarriers.features, p, "polylineBarriers.features", l), e.polygonBarriers && e.polygonBarriers.features && d(e.polygonBarriers.features, p, "polygonBarriers.features", l);
  const h = await C(p);
  for (const s in l) {
    const c = l[s];
    o.push(s), u[s] = h.slice(c[0], c[1]);
  }
  if (D(u, o)) {
    let s = null;
    try {
      s = await K(v, e.apiKey, y);
    } catch {
    }
    s && !s.hasZ && M(u, o);
  }
  for (const s in u)
    u[s].forEach((c, R) => {
      e.get(s)[R].geometry = c;
    });
  const S = { ...y, query: { ...m.query, ...U.toQueryParams(e), f: "json" } }, { data: b } = await E(`${v}/solveServiceArea`, S);
  return T.fromJSON(b);
}
let f = class extends I {
  constructor(r) {
    super(r), this.url = null;
  }
  solve(r, e) {
    return Z(this.url, r, e);
  }
};
a([i()], f.prototype, "url", void 0), f = a([A("geoscene.tasks.ServiceAreaTask")], f);
const W = f;
export {
  W as default
};

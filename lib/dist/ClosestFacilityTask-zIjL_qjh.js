import { e as i, aD as N, d as a, ab as B, aE as u, ad as S, ac as F, b, a as h, m as C, r as x, x as j, q as k, V as w, C as J, aF as O } from "./index-Ek1MTSEY.js";
import { a as q, i as y, u as T, f as E, d as I, o as V } from "./NAMessage-KvfqzuuR.js";
import { c as D } from "./DirectionsFeatureSet-5SN0UaXF.js";
import "vue";
import "./GPMessage-sfsWusZ1.js";
function K(r) {
  return r.features.map((e) => {
    const d = C.fromJSON(r.spatialReference), o = b.fromJSON(e);
    return x(o.geometry) && (o.geometry.spatialReference = d), o;
  });
}
function c(r) {
  return j.fromJSON(r).features.map((e) => e.geometry);
}
let t = class extends N {
  constructor(r) {
    super(r), this.directions = null, this.facilities = null, this.incidents = null, this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routes = null;
  }
  readFacilities(r) {
    return c(r);
  }
  readIncidents(r) {
    return c(r);
  }
  readPointBarriers(r, e) {
    return c(e.barriers);
  }
  readPolylineBarriers(r) {
    return c(r);
  }
  readPolygonBarriers(r) {
    return c(r);
  }
  readRoutes(r) {
    return K(r);
  }
};
i([a({ type: [D] })], t.prototype, "directions", void 0), i([a({ type: [B] })], t.prototype, "facilities", void 0), i([u("facilities")], t.prototype, "readFacilities", null), i([a({ type: [B] })], t.prototype, "incidents", void 0), i([u("incidents")], t.prototype, "readIncidents", null), i([a({ type: [q] })], t.prototype, "messages", void 0), i([a({ type: [B] })], t.prototype, "pointBarriers", void 0), i([u("pointBarriers", ["barriers"])], t.prototype, "readPointBarriers", null), i([a({ type: [S] })], t.prototype, "polylineBarriers", void 0), i([u("polylineBarriers")], t.prototype, "readPolylineBarriers", null), i([a({ type: [F] })], t.prototype, "polygonBarriers", void 0), i([u("polygonBarriers")], t.prototype, "readPolygonBarriers", null), i([a({ type: [b] })], t.prototype, "routes", void 0), i([u("routes")], t.prototype, "readRoutes", null), t = i([h("geoscene.rest.support.ClosestFacilitySolveResult")], t);
const M = t, Q = V({ accumulateAttributes: { name: "accumulateAttributeNames" }, attributeParameterValues: !0, directionsTimeAttribute: { name: "directionsTimeAttributeName" }, impedanceAttribute: { name: "impedanceAttributeName" }, facilities: !0, incidents: !0, outSpatialReference: { name: "outSR", getter: (r) => r.outSpatialReference.wkid }, pointBarriers: { name: "barriers" }, polylineBarriers: !0, polygonBarriers: !0, restrictionAttributes: { name: "restrictionAttributeNames" }, returnPointBarriers: { name: "returnBarriers" }, returnRoutes: { name: "returnCFRoutes" }, travelMode: !0 });
async function Z(r, e, d) {
  const o = [], l = [], n = {}, p = {}, g = k(r), { path: $ } = g;
  e.incidents && e.incidents.features && y(e.incidents.features, l, "incidents.features", n), e.facilities && e.facilities.features && y(e.facilities.features, l, "facilities.features", n), e.pointBarriers && e.pointBarriers.features && y(e.pointBarriers.features, l, "pointBarriers.features", n), e.polylineBarriers && e.polylineBarriers.features && y(e.polylineBarriers.features, l, "polylineBarriers.features", n), e.polygonBarriers && e.polygonBarriers.features && y(e.polygonBarriers.features, l, "polygonBarriers.features", n);
  const v = await w(l);
  for (const s in n) {
    const f = n[s];
    o.push(s), p[s] = v.slice(f[0], f[1]);
  }
  if (T(p, o)) {
    let s = null;
    try {
      s = await E($, e.apiKey, d);
    } catch {
    }
    s && !s.hasZ && I(p, o);
  }
  for (const s in p)
    p[s].forEach((f, P) => {
      e.get(s)[P].geometry = f;
    });
  const R = { ...d, query: { ...g.query, ...Q.toQueryParams(e), f: "json" } }, { data: A } = await J(`${$}/solveClosestFacility`, R);
  return M.fromJSON(A);
}
let m = class extends O {
  constructor(r) {
    super(r), this.url = null;
  }
  solve(r, e) {
    return Z(this.url, r, e);
  }
};
i([a()], m.prototype, "url", void 0), m = i([h("geoscene.tasks.ClosestFacilityTask")], m);
const W = m;
export {
  W as default
};

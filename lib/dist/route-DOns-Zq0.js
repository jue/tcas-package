import { e as i, d as c, x as L, b as P, a as q, aD as C, aE as E, q as J, V as M, C as V, r as D } from "./index-j1oaLRcp.js";
import { a as F, i as T, u as K, f as Q, d as W, o as Z } from "./NAMessage-kHKHah00.js";
import { c as z } from "./DirectionsFeatureSet-64-nZUjm.js";
let m = class extends C {
  constructor(r) {
    super(r), this.directionLines = null, this.directionPoints = null, this.directions = null, this.route = null, this.routeName = null, this.stops = null;
  }
};
i([c({ type: L, json: { write: !0 } })], m.prototype, "directionLines", void 0), i([c({ type: L, json: { write: !0 } })], m.prototype, "directionPoints", void 0), i([c({ type: z, json: { write: !0 } })], m.prototype, "directions", void 0), i([c({ type: P, json: { write: !0 } })], m.prototype, "route", void 0), i([c({ type: String, json: { write: !0 } })], m.prototype, "routeName", void 0), i([c({ type: [P], json: { write: !0 } })], m.prototype, "stops", void 0), m = i([q("geoscene.rest.support.RouteResult")], m);
const G = m;
function I(s) {
  return s && L.fromJSON(s).features.map((r) => r);
}
let p = class extends C {
  constructor(s) {
    super(s), this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(s, r) {
    return I(r.barriers);
  }
  readPolylineBarriers(s) {
    return I(s);
  }
  readPolygonBarriers(s) {
    return I(s);
  }
};
i([c({ type: [F] })], p.prototype, "messages", void 0), i([c({ type: [P] })], p.prototype, "pointBarriers", void 0), i([E("pointBarriers", ["barriers"])], p.prototype, "readPointBarriers", null), i([c({ type: [P] })], p.prototype, "polylineBarriers", void 0), i([E("polylineBarriers")], p.prototype, "readPolylineBarriers", null), i([c({ type: [P] })], p.prototype, "polygonBarriers", void 0), i([E("polygonBarriers")], p.prototype, "readPolygonBarriers", null), i([c({ type: [G] })], p.prototype, "routeResults", void 0), p = i([q("geoscene.rest.support.RouteSolveResult")], p);
const H = p, U = Z({ accumulateAttributes: { name: "accumulateAttributeNames" }, attributeParameterValues: !0, directionsTimeAttribute: { name: "directionsTimeAttributeName" }, impedanceAttribute: { name: "impedanceAttributeName" }, outSpatialReference: { name: "outSR", getter: (s) => s.outSpatialReference.wkid }, pointBarriers: { name: "barriers" }, polylineBarriers: !0, polygonBarriers: !0, restrictionAttributes: { name: "restrictionAttributeNames" }, stops: !0, travelMode: !0 });
function j(s) {
  return (s == null ? void 0 : s.declaredClass) === "geoscene.rest.support.FeatureSet";
}
async function re(s, r, N) {
  const b = [], g = [], y = {}, e = {}, h = J(s), { path: d } = h;
  j(r.stops) && T(r.stops.features, g, "stops.features", y), j(r.pointBarriers) && T(r.pointBarriers.features, g, "pointBarriers.features", y), j(r.polylineBarriers) && T(r.polylineBarriers.features, g, "polylineBarriers.features", y), j(r.polygonBarriers) && T(r.polygonBarriers.features, g, "polygonBarriers.features", y);
  const w = await M(g);
  for (const n in y) {
    const v = y[n];
    b.push(n), e[n] = w.slice(v[0], v[1]);
  }
  if (K(e, b)) {
    let n = null;
    try {
      n = await Q(d, r.apiKey, N);
    } catch {
    }
    n && !n.hasZ && W(e, b);
  }
  for (const n in e)
    e[n].forEach((v, S) => {
      r.get(n)[S].geometry = v;
    });
  const A = { ...N, query: { ...h.query, ...U.toQueryParams(r), f: "json" } }, f = d.endsWith("/solve") ? d : `${d}/solve`, { data: $ } = await V(f, A);
  return X($);
}
function X(s) {
  var r, N, b, g, y;
  const e = /* @__PURE__ */ new Map(), { directionLines: h, directionPoints: d, directions: w, routes: A, stops: f, barriers: $, polygonBarriers: n, polylineBarriers: v, messages: S } = s, x = (r = (N = (b = (g = A == null ? void 0 : A.spatialReference) != null ? g : f == null ? void 0 : f.spatialReference) != null ? b : $ == null ? void 0 : $.spatialReference) != null ? N : n == null ? void 0 : n.spatialReference) != null ? r : v == null ? void 0 : v.spatialReference;
  A == null || A.features.forEach((t) => {
    const o = t.attributes.Name, l = t.attributes.ObjectID;
    e.has(o) ? (e.get(o).route = t, e.get(o).routeId = l) : e.set(o, { route: t, routeId: l, routeName: o }), D(t.geometry) && (t.geometry.spatialReference = x);
  }), w == null || w.forEach((t) => {
    const o = t.routeName;
    e.has(o) ? e.get(o).directions = t : e.set(o, { routeName: o, directions: t });
  }), f == null || f.features.forEach((t) => {
    var o;
    const l = (o = t.attributes.RouteName) != null ? o : null;
    e.has(l) ? e.get(l).stops ? e.get(l).stops.push(t) : e.get(l).stops = [t] : e.set(l, { stops: [t], routeName: l }), D(t.geometry) && (t.geometry.spatialReference = x);
  });
  const O = (y = f == null ? void 0 : f.features.every((t) => t.attributes.RouteName == null)) == null || y;
  if ((f == null ? void 0 : f.features.length) > 0 && O) {
    const t = Array.from(e.keys())[0];
    e.get(t).stops = e.get(null).stops, e.delete(null);
  }
  h == null || h.features.forEach((t) => {
    var o;
    const l = t.attributes.RouteID, a = (o = Array.from(e.values()).find((u) => u.routeId === l)) == null ? void 0 : o.routeName;
    if (a)
      if (e.has(a))
        if (e.get(a).directionLines)
          e.get(a).directionLines.features.push(t);
        else {
          const { fieldAliases: u, geometryType: B, spatialReference: R } = h;
          e.get(a).directionLines = { features: [t], fieldAliases: u, geometryType: B, spatialReference: R };
        }
      else {
        const { fieldAliases: u, geometryType: B, spatialReference: R } = h;
        e.set(a, { routeName: a, directionLines: { features: [t], fieldAliases: u, geometryType: B, spatialReference: R } });
      }
  }), d == null || d.features.forEach((t) => {
    var o;
    const l = t.attributes.RouteID, a = (o = Array.from(e.values()).find((u) => u.routeId === l)) == null ? void 0 : o.routeName;
    if (a)
      if (e.has(a))
        if (e.get(a).directionPoints)
          e.get(a).directionPoints.features.push(t);
        else {
          const { fieldAliases: u, geometryType: B, spatialReference: R } = d;
          e.get(a).directionPoints = { features: [t], fieldAliases: u, geometryType: B, spatialReference: R };
        }
      else {
        const { fieldAliases: u, geometryType: B, spatialReference: R } = d;
        e.set(a, { routeName: a, directionPoints: { features: [t], fieldAliases: u, geometryType: B, spatialReference: R } });
      }
  });
  const k = Array.from(e.values());
  return H.fromJSON({ routeResults: k, barriers: $, polygonBarriers: n, polylineBarriers: v, messages: S });
}
export {
  re as p
};

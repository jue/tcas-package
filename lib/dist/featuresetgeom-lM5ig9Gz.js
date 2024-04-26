import { n as S } from "./arcadeUtils-w0rSqD6f.js";
import { cP as w, ck as y, cF as d, cE as o, cB as u, cv as s, cu as A } from "./index-Ek1MTSEY.js";
import { n as l, g as R } from "./SpatialFilter-X_sUIAHX.js";
import { h as F, w as v, A as k, x as D, O as b, p as E, g as h } from "./geometryEngineAsync-qMem9Fr-.js";
import "vue";
import "./WhereClause-tgx5XbAS.js";
function p(t) {
  return t instanceof o;
}
function c(t, a, r, f, m) {
  return m(t, a, function(e, I, n) {
    if (n.length < 2)
      return f(new Error("Missing Parameters"));
    if ((n = w(n))[0] === null && n[1] === null)
      return s(!1);
    if (u(n[0]))
      return n[1] instanceof o ? s(new R({ parentfeatureset: n[0], relation: r, relationGeom: n[1] })) : n[1] === null ? s(new l({ parentfeatureset: n[0] })) : f("Spatial Relation cannot accept this parameter type");
    if (p(n[0])) {
      if (p(n[1])) {
        let i = null;
        switch (r) {
          case "esriSpatialRelEnvelopeIntersects":
            i = h(S(n[0]), S(n[1]));
            break;
          case "esriSpatialRelIntersects":
            i = h(n[0], n[1]);
            break;
          case "esriSpatialRelContains":
            i = E(n[0], n[1]);
            break;
          case "esriSpatialRelOverlaps":
            i = b(n[0], n[1]);
            break;
          case "esriSpatialRelWithin":
            i = D(n[0], n[1]);
            break;
          case "esriSpatialRelTouches":
            i = k(n[0], n[1]);
            break;
          case "esriSpatialRelCrosses":
            i = v(n[0], n[1]);
        }
        return i !== null ? i : A(new Error("Unrecognised Relationship"));
      }
      return u(n[1]) ? s(new R({ parentfeatureset: n[1], relation: r, relationGeom: n[0] })) : n[1] === null ? s(!1) : f("Spatial Relation cannot accept this parameter type");
    }
    return n[0] !== null ? f("Spatial Relation cannot accept this parameter type") : u(n[1]) ? s(new l({ parentfeatureset: n[1] })) : n[1] instanceof o || n[1] === null ? s(!1) : void 0;
  });
}
function T(t) {
  t.mode === "async" && (t.functions.intersects = function(a, r) {
    return c(a, r, "esriSpatialRelIntersects", t.failDefferred, t.standardFunctionAsync);
  }, t.functions.envelopeintersects = function(a, r) {
    return c(a, r, "esriSpatialRelEnvelopeIntersects", t.failDefferred, t.standardFunctionAsync);
  }, t.signatures.push({ name: "envelopeintersects", min: "2", max: "2" }), t.functions.contains = function(a, r) {
    return c(a, r, "esriSpatialRelContains", t.failDefferred, t.standardFunctionAsync);
  }, t.functions.overlaps = function(a, r) {
    return c(a, r, "esriSpatialRelOverlaps", t.failDefferred, t.standardFunctionAsync);
  }, t.functions.within = function(a, r) {
    return c(a, r, "esriSpatialRelWithin", t.failDefferred, t.standardFunctionAsync);
  }, t.functions.touches = function(a, r) {
    return c(a, r, "esriSpatialRelTouches", t.failDefferred, t.standardFunctionAsync);
  }, t.functions.crosses = function(a, r) {
    return c(a, r, "esriSpatialRelCrosses", t.failDefferred, t.standardFunctionAsync);
  }, t.functions.relate = function(a, r) {
    return t.standardFunctionAsync(a, r, function(f, m, e) {
      if (e = w(e), y(e, 3, 3), p(e[0]) && p(e[1]))
        return F(e[0], e[1], d(e[2]));
      if (e[0] instanceof o && e[1] === null || e[1] instanceof o && e[0] === null)
        return !1;
      if (u(e[0]) && e[1] === null)
        return new l({ parentfeatureset: e[0] });
      if (u(e[1]) && e[0] === null)
        return new l({ parentfeatureset: e[1] });
      if (u(e[0]) && e[1] instanceof o)
        return e[0].relate(e[1], d(e[2]));
      if (u(e[1]) && e[0] instanceof o)
        return e[1].relate(e[0], d(e[2]));
      if (e[0] === null && e[1] === null)
        return !1;
      throw new Error("Illegal Argument");
    });
  });
}
export {
  T as registerFunctions
};

import { t as y, e as F } from "./executionError-EEhTiqtD.js";
import { Q as h, V as d, z as m, L as A, q as l, a3 as c, v as i } from "./arcadeUtils-6_knHA4j.js";
import { f as g } from "./WhereClause-ULyNcODK.js";
import "./index-O2RTvw_o.js";
import "vue";
import "./arcadeTimeUtils-6Xb6Siq7.js";
import "./number-S_814j9r.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
async function s(n, r, a, t, o, e) {
  if (t.length === 1) {
    if (m(t[0]))
      return c(n, t[0], i(t[1], -1));
    if (l(t[0]))
      return c(n, t[0].toArray(), i(t[1], -1));
  } else if (t.length === 2) {
    if (m(t[0]))
      return c(n, t[0], i(t[1], -1));
    if (l(t[0]))
      return c(n, t[0].toArray(), i(t[1], -1));
    if (d(t[0])) {
      const u = await t[0].load(), f = await p(g.create(t[1], u.getFieldsIndex()), e, o);
      return t[0].calculateStatistic(n, f, i(t[2], 1e3), r.abortSignal);
    }
  } else if (t.length === 3 && d(t[0])) {
    const u = await t[0].load(), f = await p(g.create(t[1], u.getFieldsIndex()), e, o);
    return t[0].calculateStatistic(n, f, i(t[2], 1e3), r.abortSignal);
  }
  return c(n, t, -1);
}
async function p(n, r, a) {
  const t = n.getVariables();
  if (t.length > 0) {
    const o = [];
    for (let u = 0; u < t.length; u++) {
      const f = { name: t[u] };
      o.push(await r.evaluateIdentifier(a, f));
    }
    const e = {};
    for (let u = 0; u < t.length; u++)
      e[t[u]] = o[u];
    return n.parameters = e, n;
  }
  return n;
}
function L(n) {
  n.mode === "async" && (n.functions.stdev = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("stdev", t, o, e, r, n));
  }, n.functions.variance = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("variance", t, o, e, r, n));
  }, n.functions.average = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("mean", t, o, e, r, n));
  }, n.functions.mean = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("mean", t, o, e, r, n));
  }, n.functions.sum = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("sum", t, o, e, r, n));
  }, n.functions.min = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("min", t, o, e, r, n));
  }, n.functions.max = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => s("max", t, o, e, r, n));
  }, n.functions.count = function(r, a) {
    return n.standardFunctionAsync(r, a, (t, o, e) => {
      if (h(e, 1, 1, r, a), d(e[0]))
        return e[0].count(t.abortSignal);
      if (m(e[0]) || A(e[0]))
        return e[0].length;
      if (l(e[0]))
        return e[0].length();
      throw new y(r, F.InvalidParameter, a);
    });
  });
}
export {
  L as registerFunctions
};
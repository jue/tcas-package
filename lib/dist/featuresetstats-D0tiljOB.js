import { ck as F, cB as l, cy as m, cx as A, cz as h, cv as s, cQ as f, cm as v, cu as p } from "./index-j1oaLRcp.js";
import { m as d } from "./arcadeUtils-9hqHphUR.js";
import { WhereClause as g } from "./WhereClause-GhOl_FlK.js";
import "vue";
function i(t, e, c, n, u, r) {
  if (n.length === 1) {
    if (m(n[0]))
      return s(d(t, n[0], f(n[1], -1)));
    if (h(n[0]))
      return s(d(t, n[0].toArray(), f(n[1], -1)));
  } else if (n.length === 2) {
    if (m(n[0]))
      return s(d(t, n[0], f(n[1], -1)));
    if (h(n[0]))
      return s(d(t, n[0].toArray(), f(n[1], -1)));
    if (l(n[0]))
      return n[0].load().then((a) => y(g.create(n[1], a.getFieldsIndex()), r, u).then((o) => n[0].calculateStatistic(t, o, f(n[2], 1e3), e.abortSignal)));
  } else if (n.length === 3 && l(n[0]))
    return n[0].load().then((a) => y(g.create(n[1], a.getFieldsIndex()), r, u).then((o) => n[0].calculateStatistic(t, o, f(n[2], 1e3), e.abortSignal)));
  return s(d(t, n, -1));
}
function y(t, e, c) {
  try {
    const n = t.getVariables();
    if (n.length > 0) {
      const u = [];
      for (let r = 0; r < n.length; r++) {
        const a = { name: n[r] };
        u.push(e.evaluateIdentifier(c, a));
      }
      return v(u).then((r) => {
        const a = {};
        for (let o = 0; o < n.length; o++)
          a[n[o]] = r[o];
        return t.parameters = a, t;
      });
    }
    return s(t);
  } catch (n) {
    return p(n);
  }
}
function k(t) {
  t.mode === "async" && (t.functions.stdev = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("stdev", n, u, r, e, t);
    });
  }, t.functions.variance = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("variance", n, u, r, e, t);
    });
  }, t.functions.average = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("mean", n, u, r, e, t);
    });
  }, t.functions.mean = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("mean", n, u, r, e, t);
    });
  }, t.functions.sum = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("sum", n, u, r, e, t);
    });
  }, t.functions.min = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("min", n, u, r, e, t);
    });
  }, t.functions.max = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      return i("max", n, u, r, e, t);
    });
  }, t.functions.count = function(e, c) {
    return t.standardFunctionAsync(e, c, function(n, u, r) {
      if (F(r, 1, 1), l(r[0]))
        return r[0].count(n.abortSignal);
      if (m(r[0]) || A(r[0]))
        return r[0].length;
      if (h(r[0]))
        return r[0].length();
      throw new Error("Invalid Parameters for Count");
    });
  });
}
export {
  k as registerFunctions
};

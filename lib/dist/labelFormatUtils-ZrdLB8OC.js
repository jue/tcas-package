import { s as d, cd as m, ce as y, cf as g, a$ as b, cg as v, y as x, ch as h, ci as F } from "./index-j1oaLRcp.js";
import "vue";
const w = d.getLogger("geoscene.layers.support.labelFormatUtils"), f = { type: "simple", evaluate: () => null }, $ = { getAttribute: (t, r) => t.field(r) };
async function S(t, r, e) {
  if (!t || !t.symbol)
    return f;
  const l = t.where, n = m(t), o = l ? await import("./WhereClause-GhOl_FlK.js") : null;
  let u;
  if (n.type === "arcade") {
    const a = await y(n.expression, e, r);
    u = { type: "arcade", evaluate(i) {
      try {
        const s = a.evaluate({ $feature: "attributes" in i ? a.repurposeFeature(i) : i });
        if (s != null)
          return s.toString();
      } catch {
        w.error(new x("bad-arcade-expression", "Encountered an error when evaluating label expression for feature", { feature: i, expression: n }));
      }
      return null;
    }, needsHydrationToEvaluate: () => h(n.expression) == null };
  } else
    u = { type: "simple", evaluate: (a) => n.expression.replace(/{[^}]*}/g, (i) => {
      const s = i.slice(1, -1), c = r.get(s);
      if (!c)
        return i;
      let p = null;
      return "attributes" in a ? a && a.attributes && (p = a.attributes[c.name]) : p = a.field(c.name), p == null ? "" : V(p, c);
    }) };
  if (l) {
    let a;
    try {
      a = o.WhereClause.create(l, r);
    } catch {
      return f;
    }
    const i = u.evaluate;
    u.evaluate = (s) => {
      const c = "attributes" in s ? void 0 : $;
      return a.testFeature(s, c) ? i(s) : null;
    };
  }
  return u;
}
function V(t, r) {
  if (t == null)
    return "";
  const e = r.domain;
  if (e) {
    if (e.type === "codedValue" || e.type === "coded-value") {
      const n = t;
      for (const o of e.codedValues)
        if (o.code === n)
          return o.name;
    } else if (e.type === "range") {
      const n = +t, o = "range" in e ? e.range[0] : e.minValue, u = "range" in e ? e.range[1] : e.maxValue;
      if (o <= n && n <= u)
        return e.name;
    }
  }
  let l = t;
  return r.type === "date" || r.type === "esriFieldTypeDate" ? l = g(l, F("short-date")) : b(r) && (l = v(+l)), l || "";
}
export {
  S as createLabelFunction,
  V as formatField
};

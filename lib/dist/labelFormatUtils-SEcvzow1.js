import { s as m, dB as y, dC as h, H as f, dD as w, dE as v, dF as b, c3 as x, dG as F } from "./index-HxXrdrYt.js";
import "vue";
const p = m.getLogger("geoscene.layers.support.labelFormatUtils"), g = { type: "simple", evaluate: () => null }, $ = { getAttribute: (a, n) => a.field(n) };
async function C(a, n, r) {
  if (!a || !a.symbol || !n)
    return g;
  const s = a.where, l = y(a), i = s ? await import("./WhereClause-ifbkwP0w.js").then((e) => e.W) : null;
  let o;
  if (l.type === "arcade") {
    const e = await h(l.expression, r, n);
    if (e == null)
      return g;
    o = { type: "arcade", evaluate(u) {
      try {
        const t = e.evaluate({ $feature: "attributes" in u ? e.repurposeFeature(u) : u }, e.services);
        if (t != null)
          return t.toString();
      } catch (t) {
        p.error(new f("arcade-expression-error", "Encountered an error when evaluating label expression for feature", { error: t, feature: u, expression: l }));
      }
      return null;
    }, needsHydrationToEvaluate: () => w(l.expression) == null };
  } else
    o = { type: "simple", evaluate: (e) => l.expression.replaceAll(/{[^}]*}/g, (u) => {
      const t = u.slice(1, -1), c = n.get(t);
      if (!c)
        return u;
      let d = null;
      return "attributes" in e ? e && e.attributes && (d = e.attributes[c.name]) : d = e.field(c.name), d == null ? "" : E(d, c);
    }) };
  if (s) {
    let e;
    try {
      e = i.WhereClause.create(s, n);
    } catch (t) {
      return p.error(new f("bad-where-clause", "Encountered an error when evaluating where clause, ignoring", { where: s, error: t })), g;
    }
    const u = o.evaluate;
    o.evaluate = (t) => {
      const c = "attributes" in t ? void 0 : $;
      try {
        if (e.testFeature(t, c))
          return u(t);
      } catch (d) {
        p.error(new f("bad-where-clause", "Encountered an error when evaluating where clause for feature", { where: s, feature: t, error: d }));
      }
      return null;
    };
  }
  return o;
}
function E(a, n) {
  if (a == null)
    return "";
  const r = n.domain;
  if (r) {
    if (r.type === "codedValue" || r.type === "coded-value") {
      const l = a;
      for (const i of r.codedValues)
        if (i.code === l)
          return i.name;
    } else if (r.type === "range") {
      const l = +a, i = "range" in r ? r.range[0] : r.minValue, o = "range" in r ? r.range[1] : r.maxValue;
      if (i <= l && l <= o)
        return r.name;
    }
  }
  let s = a;
  return n.type === "date" || n.type === "esriFieldTypeDate" ? s = v(s, b("short-date")) : x(n) && (s = F(+s)), s || "";
}
export {
  C as createLabelFunction,
  E as formatField
};

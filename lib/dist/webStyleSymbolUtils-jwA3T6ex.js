import { H as w, ah as F, B as W, W as N, L as b, ai as g, aj as U, ak as j, al as D, am as $, an as k, ao as h, ap as d, aq as q, ar as v } from "./index-O2RTvw_o.js";
import { c as A, a as S } from "./devEnvironmentUtils-HhcOP4Aw.js";
import "vue";
function R(t, e, a, l) {
  const n = t.name;
  return n == null ? Promise.reject(new w("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference")) : t.styleName && t.styleName === "Esri2DPointSymbolsStyle" ? H(n, e, l) : F(t, e, l).then((r) => E(W(r), n, e, a, v, l));
}
function B(t, e) {
  return e.items.find((a) => a.name === t);
}
function E(t, e, a, l, n, r) {
  var p;
  const m = a && a.portal != null ? a.portal : N.getDefault(), c = { portal: m, url: b(t.baseUrl), origin: "portal-item" }, o = B(e, t.data);
  if (!o) {
    const y = `The symbol name '${e}' could not be found`;
    return Promise.reject(new w("symbolstyleutils:symbol-name-not-found", y, { symbolName: e }));
  }
  let i = g(n(o, l), c), u = ((p = o.thumbnail) == null ? void 0 : p.href) ?? null;
  const f = o.thumbnail && o.thumbnail.imageData;
  A() && (i = S(i) ?? "", u = S(u));
  const P = { portal: m, url: b(U(i)), origin: "portal-item" };
  return j(i, r).then((y) => {
    const O = l === "cimRef" ? D(y.data) : y.data, s = $(O, P);
    if (s && k(s)) {
      if (u) {
        const x = g(u, c);
        s.thumbnail = new h({ url: x });
      } else
        f && (s.thumbnail = new h({ url: `data:image/png;base64,${f}` }));
      t.styleUrl ? s.styleOrigin = new d({ portal: a.portal, styleUrl: t.styleUrl, name: e }) : t.styleName && (s.styleOrigin = new d({ portal: a.portal, styleName: t.styleName, name: e }));
    }
    return s;
  });
}
function H(t, e, a) {
  const l = q.replaceAll(/\{SymbolName\}/gi, t), n = e.portal != null ? e.portal : N.getDefault();
  return j(l, a).then((r) => {
    const m = D(r.data);
    return $(m, { portal: n, url: b(U(l)), origin: "portal-item" });
  });
}
export {
  E as fetchSymbolFromStyle,
  B as getStyleItemFromStyle,
  R as resolveWebStyleSymbol
};

import { bd as P, y as g, aa as O, R as u, be as c, bf as R, bg as N, bh as S, bi as w, bj as j, bk as k, bl as f, bm as h, bn as v } from "./index-j1oaLRcp.js";
import { c as x, a as d } from "./devEnvironmentUtils-czI3Gfmg.js";
import "vue";
function W(e, t, a, l) {
  return e.name ? e.styleName && e.styleName === "Esri2DPointSymbolsStyle" ? E(e, t, l) : P(e, t, l).then((o) => B(o, e.name, t, a, l)) : Promise.reject(new g("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference"));
}
function B(e, t, a, l, o) {
  const b = e.data, y = { portal: a && a.portal || O.getDefault(), url: u(e.baseUrl), origin: "portal-item" }, s = b.items.find((r) => r.name === t);
  if (!s) {
    const r = `The symbol name '${t}' could not be found`;
    return Promise.reject(new g("symbolstyleutils:symbol-name-not-found", r, { symbolName: t }));
  }
  let m = c(R(s, l), y), i = s.thumbnail && s.thumbnail.href;
  const p = s.thumbnail && s.thumbnail.imageData;
  x() && (m = d(m), i = d(i));
  const U = { portal: a.portal, url: u(N(m)), origin: "portal-item" };
  return S(m, o).then((r) => {
    const $ = l === "cimRef" ? w(r.data) : r.data, n = j($, U);
    if (n && k(n)) {
      if (i) {
        const D = c(i, y);
        n.thumbnail = new f({ url: D });
      } else
        p && (n.thumbnail = new f({ url: `data:image/png;base64,${p}` }));
      e.styleUrl ? n.styleOrigin = new h({ portal: a.portal, styleUrl: e.styleUrl, name: t }) : e.styleName && (n.styleOrigin = new h({ portal: a.portal, styleName: e.styleName, name: t }));
    }
    return n;
  });
}
function E(e, t, a) {
  const l = v.replace(/\{SymbolName\}/gi, e.name);
  return S(l, a).then((o) => {
    const b = w(o.data);
    return j(b, { portal: t.portal, url: u(N(l)), origin: "portal-item" });
  });
}
export {
  B as fetchSymbolFromStyle,
  W as resolveWebStyleSymbol
};

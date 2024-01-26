import { i as N } from "./multiOriginJSONSupportUtils-vbwzQTfc.js";
import { cA as P, cB as x, cC as b, cD as d, cE as O, cF as R, cG as S, cH as j, cI as y, cJ as B, cK as F, bo as J, bp as A, cL as K } from "./index-B7TsCcH6.js";
import { t as f } from "./resourceExtension-YqFFLUQD.js";
function k(e) {
  const o = (e == null ? void 0 : e.origins) ?? [void 0];
  return (t, n) => {
    const s = C(e, t, n);
    for (const a of o) {
      const i = P(t, a, n);
      for (const r in s)
        i[r] = s[r];
    }
  };
}
function C(e, o, t) {
  if ((e == null ? void 0 : e.type) === "resource")
    return D(e, o, t);
  switch ((e == null ? void 0 : e.type) ?? "other") {
    case "other":
      return { read: !0, write: !0 };
    case "url": {
      const { read: n, write: s } = K;
      return { read: n, write: s };
    }
  }
}
function D(e, o, t) {
  const n = x(o, t);
  return { type: String, read: (s, a, i) => {
    const r = b(s, a, i);
    return n.type === String ? r : typeof n.type == "function" ? new n.type({ url: r }) : void 0;
  }, write: { writer(s, a, i, r) {
    if (!r || !r.resources)
      return typeof s == "string" ? void (a[i] = d(s, r)) : void (a[i] = s.write({}, r));
    const l = L(s), c = d(l, { ...r, verifyItemRelativeUrls: r && r.verifyItemRelativeUrls ? { writtenUrls: r.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, O.NO), u = n.type !== String && (!N(this) || r && r.origin && this.originIdOf(t) > R(r.origin)), p = { object: this, propertyName: t, value: s, targetUrl: c, dest: a, targetPropertyName: i, context: r, params: e };
    r && r.portalItem && c && !S(c) ? u ? E(p) : G(p) : r && r.portalItem && (c == null || j(c) != null || y(c) || u) ? g(p) : a[i] = c;
  } } };
}
function g(e) {
  const { targetUrl: o, params: t, value: n, context: s, dest: a, targetPropertyName: i } = e;
  if (!s.portalItem)
    return;
  const r = B(o), l = (r == null ? void 0 : r.filename) ?? F(), c = (t == null ? void 0 : t.prefix) ?? (r == null ? void 0 : r.prefix), u = v(n, o, s), p = J(c, l), U = `${p}.${f(u)}`, m = s.portalItem.resourceFromPath(U);
  y(o) && s.resources && s.resources.pendingOperations.push(H(o).then((I) => {
    m.path = `${p}.${f(I)}`, a[i] = m.itemRelativeUrl;
  }).catch(() => {
  }));
  const w = (t == null ? void 0 : t.compress) ?? !1;
  s.resources && h({ ...e, resource: m, content: u, compress: w, updates: s.resources.toAdd }), a[i] = m.itemRelativeUrl;
}
function E(e) {
  const { context: o, targetUrl: t, params: n, value: s, dest: a, targetPropertyName: i } = e;
  if (!o.portalItem)
    return;
  const r = o.portalItem.resourceFromPath(t), l = v(s, t, o), c = f(l), u = A(r.path), p = (n == null ? void 0 : n.compress) ?? !1;
  c === u ? (o.resources && h({ ...e, resource: r, content: l, compress: p, updates: o.resources.toUpdate }), a[i] = t) : g(e);
}
function G({ context: e, targetUrl: o, dest: t, targetPropertyName: n }) {
  e.portalItem && e.resources && (e.resources.toKeep.push({ resource: e.portalItem.resourceFromPath(o), compress: !1 }), t[n] = o);
}
function h({ object: e, propertyName: o, updates: t, resource: n, content: s, compress: a }) {
  t.push({ resource: n, content: s, compress: a, finish: (i) => {
    T(e, o, i);
  } });
}
function v(e, o, t) {
  return typeof e == "string" ? { url: o } : new Blob([JSON.stringify(e.toJSON(t))], { type: "application/json" });
}
async function H(e) {
  const o = (await import("./index-B7TsCcH6.js").then((n) => n.lB)).default, { data: t } = await o(e, { responseType: "blob" });
  return t;
}
function L(e) {
  return e == null ? null : typeof e == "string" ? e : e.url;
}
function T(e, o, t) {
  typeof e[o] == "string" ? e[o] = t.url : e[o].url = t.url;
}
export {
  k as g
};

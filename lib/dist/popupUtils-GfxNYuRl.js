import { r as i, O as c, A as h } from "./index-j1oaLRcp.js";
async function I(e, a = e.popupTemplate) {
  if (!i(a))
    return [];
  const s = await a.getRequiredFields(e.fieldsIndex), { lastEditInfoEnabled: o } = a, { objectIdField: l, typeIdField: u, globalIdField: n, relationships: t } = e;
  if (s.includes("*"))
    return ["*"];
  const f = o ? await c(e) : [], d = h(e.fieldsIndex, [...s, ...f]);
  return u && d.push(u), d && l && e.fieldsIndex.has(l) && d.indexOf(l) === -1 && d.push(l), d && n && e.fieldsIndex.has(n) && d.indexOf(n) === -1 && d.push(n), t && t.forEach((r) => {
    const { keyField: p } = r;
    d && p && e.fieldsIndex.has(p) && d.indexOf(p) === -1 && d.push(p);
  }), d;
}
function m(e, a) {
  return e.popupTemplate ? e.popupTemplate : i(a) && a.defaultPopupTemplateEnabled && i(e.defaultPopupTemplate) ? e.defaultPopupTemplate : null;
}
export {
  m as d,
  I as t
};

import { bo as c, H as p, ae as w, bp as g } from "./index-O2RTvw_o.js";
import "vue";
async function q(e, t = {}, r) {
  await e.load(r);
  const a = c(e.itemUrl, "resources"), { start: n = 1, num: u = 10, sortOrder: o = "asc", sortField: l = "created" } = t, i = { query: { start: n, num: u, sortOrder: o, sortField: l, token: e.apiKey }, signal: r == null ? void 0 : r.signal }, s = await e.portal.request(a, i);
  return { total: s.total, nextStart: s.nextStart, resources: s.resources.map(({ created: m, size: h, resource: f }) => ({ created: new Date(m), size: h, resource: e.resourceFromPath(f) })) };
}
async function x(e, t, r, a) {
  if (!e.hasPath())
    throw new p(`portal-item-resource-${t}:invalid-path`, "Resource does not have a valid path");
  const n = e.portalItem;
  await n.load(a);
  const u = c(n.userItemUrl, t === "add" ? "addResources" : "updateResources"), [o, l] = d(e.path), i = await R(r), s = new FormData();
  return o && o !== "." && s.append("resourcesPrefix", o), a != null && a.compress && s.append("compress", "true"), s.append("fileName", l), s.append("file", i, l), s.append("f", "json"), a != null && a.access && s.append("access", a.access), await n.portal.request(u, { method: "post", body: s, signal: a == null ? void 0 : a.signal }), e;
}
async function P(e, t, r) {
  if (!t.hasPath())
    throw new p("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
  await e.load(r);
  const a = c(e.userItemUrl, "removeResources");
  await e.portal.request(a, { method: "post", query: { resource: t.path }, signal: r == null ? void 0 : r.signal }), t.portalItem = null;
}
async function F(e, t) {
  await e.load(t);
  const r = c(e.userItemUrl, "removeResources");
  return e.portal.request(r, { method: "post", query: { deleteAll: !0 }, signal: t == null ? void 0 : t.signal });
}
function d(e) {
  const t = e.lastIndexOf("/");
  return t === -1 ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
}
function y(e) {
  const [t, r] = v(e), [a, n] = d(t);
  return [a, n, r];
}
function v(e) {
  const t = g(e);
  return t == null ? [e, ""] : [e.slice(0, e.length - t.length - 1), `.${t}`];
}
async function R(e) {
  return e instanceof Blob ? e : (await w(e.url, { responseType: "blob" })).data;
}
function O(e, t) {
  if (!e.hasPath())
    return null;
  const [r, , a] = y(e.path);
  return e.portalItem.resourceFromPath(c(r, t + a));
}
export {
  x as addOrUpdateResource,
  R as contentToBlob,
  q as fetchResources,
  O as getSiblingOfSameTypeI,
  F as removeAllResources,
  P as removeResource,
  y as splitPrefixFileNameAndExtension
};

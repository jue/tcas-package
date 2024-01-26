import { s as A, M as $, N as E, H as u, O as p, P as L, Q as P, T as K, U as R, W as j, G as D, X as F, Y as m, Z as d } from "./index-B7TsCcH6.js";
import { i as v } from "./originUtils-0olwExvB.js";
import { r as U } from "./fetchService-fphYC2dk.js";
import { o as I } from "./jsonContext-OkZK4YM3.js";
import "vue";
import "./multiOriginJSONSupportUtils-vbwzQTfc.js";
const Y = A.getLogger("geoscene.layers.FeatureLayer"), y = "Feature Service";
function c(e, a) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`;
}
function S(e, a) {
  if (a.type !== y)
    throw new u("feature-layer:portal-item-wrong-type", c(e, `should have portal item of type "${y}"`));
}
async function h(e) {
  if (await e.load(), E(e))
    throw new u("feature-layer:save", c(e, "using an in-memory source cannot be saved to a portal item"));
}
function q(e, a) {
  let t = (e.messages ?? []).filter(({ type: r }) => r === "error").map(({ name: r, message: s, details: o }) => new u(r, s, o));
  if (a != null && a.ignoreUnsupported && (t = t.filter(({ name: r }) => r !== "layer:unsupported" && r !== "symbol:unsupported" && r !== "symbol-layer:unsupported" && r !== "property:unsupported" && r !== "url:unsupported")), t.length > 0)
    throw new u("feature-layer:save", "Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: t });
}
async function g(e, a, t) {
  "beforeSave" in e && typeof e.beforeSave == "function" && await e.beforeSave();
  const r = e.write({}, a);
  return q(a, t), r;
}
function N(e) {
  const { layer: a, layerJSON: t } = e;
  return a.isTable ? { layers: [], tables: [t] } : { layers: [t], tables: [] };
}
function O(e) {
  p(e, d.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((a, t, r) => r.indexOf(a) === t));
}
function M(e) {
  const a = e.portalItem;
  if (!a)
    throw Y.error("save: requires the portalItem property to be set"), new u("feature-layer:portal-item-not-set", c(e, "requires the portalItem property to be set"));
  if (!a.loaded)
    throw new u("feature-layer:portal-item-not-loaded", c(e, "cannot be saved to a portal item that does not exist or is inaccessible"));
  S(e, a);
}
async function _(e, a) {
  return /\/\d+\/?$/.test(e.url ?? "") ? N(a[0]) : B(e, a);
}
async function B(e, a) {
  const { layer: { url: t, customParameters: r, apiKey: s } } = a[0];
  let o = await e.fetchData("json");
  o && o.layers != null && o.tables != null || (o = await C(o, { url: t ?? "", customParameters: r, apiKey: s }, a.map((n) => n.layer.layerId)));
  for (const n of a)
    T(n.layer, n.layerJSON, o);
  return o;
}
async function C(e, a, t) {
  e || (e = {}), e.layers || (e.layers = []), e.tables || (e.tables = []);
  const { url: r, customParameters: s, apiKey: o } = a, { serviceJSON: n, layersJSON: i } = await U(r, { customParameters: s, apiKey: o }), l = w(e.layers, n.layers, t), f = w(e.tables, n.tables, t);
  e.layers = l.itemResources, e.tables = f.itemResources;
  const J = [...l.added, ...f.added], x = i ? [...i.layers, ...i.tables] : [];
  return await G(e, J, r, x), e;
}
function w(e, a, t) {
  const r = L(e, a, (o, n) => o.id === n.id);
  e = e.filter((o) => !r.removed.some((n) => n.id === o.id));
  const s = r.added.map(({ id: o }) => ({ id: o }));
  return s.forEach(({ id: o }) => {
    e.push({ id: o });
  }), { itemResources: e, added: s.filter(({ id: o }) => !t.includes(o)) };
}
async function G(e, a, t, r) {
  const s = a.map(({ id: o }) => new P({ url: t, layerId: o, sourceJSON: r.find(({ id: n }) => n === o) }));
  await K(s.map((o) => o.load())), s.forEach((o) => {
    const { layerId: n, loaded: i, defaultPopupTemplate: l } = o;
    !i || l == null || T(o, { id: n, popupInfo: l.toJSON() }, e);
  });
}
function T(e, a, t) {
  e.isTable ? b(t.tables, a) : b(t.layers, a);
}
function b(e, a) {
  if (!e)
    return;
  const t = e.findIndex(({ id: r }) => r === a.id);
  t === -1 ? e.push(a) : e[t] = a;
}
function k(e, a) {
  let t = R.from(a);
  return t.id && (t = t.clone(), t.id = null), t.type ?? (t.type = y), t.portal ?? (t.portal = j.getDefault()), S(e, t), t;
}
async function z(e, a) {
  const { url: t, layerId: r, title: s, fullExtent: o, isTable: n } = e, i = D(t), l = i != null && i.serverType === "FeatureServer";
  a.url = l ? t : `${t}/${r}`, a.title || (a.title = s), a.extent = null, n || o == null || (a.extent = await F(o)), m(a, d.METADATA), m(a, d.MULTI_LAYER), p(a, d.SINGLE_LAYER), n && p(a, d.TABLE), O(a);
}
async function H(e, a, t) {
  var s;
  const r = e.portal;
  await (r == null ? void 0 : r.signIn()), await ((s = r == null ? void 0 : r.user) == null ? void 0 : s.addItem({ item: e, data: a, folder: t == null ? void 0 : t.folder }));
}
const re = $(Q);
async function Q(e, a) {
  await h(e), M(e);
  const t = e.portalItem, r = I(t), s = await g(e, r, a), o = await _(t, [{ layer: e, layerJSON: s }]);
  return O(t), await t.update({ data: o }), v(r), t;
}
const oe = $(W);
async function W(e, a, t) {
  await h(e);
  const r = k(e, a), s = I(r), o = N({ layer: e, layerJSON: await g(e, s, t) });
  return await z(e, r), await H(r, o, t), e.portalItem = r, v(s), r;
}
export {
  re as save,
  oe as saveAs
};

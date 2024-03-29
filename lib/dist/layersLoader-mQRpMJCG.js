import { C as h, y as d, df as b, aa as I } from "./index-j1oaLRcp.js";
import { a as i } from "./lazyLayerLoader-Lv876dgF.js";
import { o as g } from "./jsonContext-u43hNVvn.js";
async function y(e) {
  const { data: a } = await h(e, { responseType: "json", query: { f: "json" } });
  return a;
}
async function w(e, a) {
  const t = e.instance.portalItem;
  return t && t.id ? (await t.load(a), T(e), L(e, a)) : Promise.resolve();
}
function T(e) {
  const a = e.instance.portalItem;
  if (e.supportedTypes.indexOf(a.type) === -1)
    throw new d("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: a.type, expectedType: e.supportedTypes.join(", ") });
}
async function L(e, a) {
  const t = e.instance, n = t.portalItem, { url: r, title: l } = n, o = g(n);
  if (t.type === "group")
    return t.read({ title: l }, o), S(t, e);
  r && t.read({ url: r }, o);
  const c = await f(e, a);
  return c && t.read(c, o), t.resourceReferences = { portalItem: n, paths: o.readResourcePaths }, t.read({ title: l }, o), b(t, o);
}
function S(e, a) {
  let t;
  const n = e.portalItem.type;
  switch (n) {
    case "Feature Service":
    case "Feature Collection":
      t = i.FeatureLayer;
      break;
    case "Stream Service":
      t = i.StreamLayer;
      break;
    case "Scene Service":
      t = i.SceneLayer;
      break;
    default:
      throw new d("portal:unsupported-item-type-as-group", `The item type '${n}' is not supported as a 'IGroupLayer'`);
  }
  let r;
  return t().then((l) => (r = l, f(a))).then(async (l) => n === "Feature Service" ? (l = await m(l, e.portalItem.url), u(e, r, l)) : s(l) > 0 ? u(e, r, l) : F(e, r));
}
function F(e, a) {
  return e.portalItem.url ? y(e.portalItem.url).then((t) => {
    var n, r;
    function l(o) {
      return { id: o.id, name: o.name };
    }
    t && u(e, a, { layers: (n = t.layers) == null ? void 0 : n.map(l), tables: (r = t.tables) == null ? void 0 : r.map(l) });
  }) : Promise.resolve();
}
function u(e, a, t) {
  let n = t.layers || [];
  const r = t.tables || [];
  e.portalItem.type === "Feature Collection" && (n.forEach((l) => {
    var o;
    (l == null || (o = l.layerDefinition) == null ? void 0 : o.type) === "Table" && r.push(l);
  }), n = n.filter((l) => {
    var o;
    return (l == null || (o = l.layerDefinition) == null ? void 0 : o.type) !== "Table";
  })), n.reverse().forEach((l) => {
    const o = p(e, a, t, l);
    e.add(o);
  }), r.reverse().forEach((l) => {
    const o = p(e, a, t, l);
    e.tables.add(o);
  });
}
function p(e, a, t, n) {
  const r = new a({ portalItem: e.portalItem.clone(), layerId: n.id, sublayerTitleMode: "service-name" });
  if (e.portalItem.type === "Feature Collection") {
    const l = { origin: "portal-item", portal: e.portalItem.portal || I.getDefault() };
    r.read(n, l);
    const o = t.showLegend;
    o != null && r.read({ showLegend: o }, l);
  }
  return r;
}
function f(e, a) {
  if (e.supportsData === !1)
    return Promise.resolve(void 0);
  const t = e.instance;
  return t.portalItem.fetchData("json", a).catch(() => null).then(async (n) => {
    if (j(t)) {
      let r, l = !0;
      return n && s(n) > 0 && (t.layerId == null && (t.layerId = v(n)), r = $(n, t.layerId), r && (s(n) === 1 && (l = !1), n.showLegend != null && (r.showLegend = n.showLegend))), l && t.sublayerTitleMode !== "service-name" && (t.sublayerTitleMode = "item-title-and-service-name"), r;
    }
    return n;
  });
}
async function m(e, a) {
  var t, n;
  if (((t = e) == null ? void 0 : t.layers) == null || ((n = e) == null ? void 0 : n.tables) == null) {
    const r = await y(a);
    (e = e || {}).layers = e.layers || (r == null ? void 0 : r.layers), e.tables = e.tables || (r == null ? void 0 : r.tables);
  }
  return e;
}
function v(e) {
  const a = e.layers;
  if (a && a.length)
    return a[0].id;
  const t = e.tables;
  return t && t.length ? t[0].id : null;
}
function $(e, a) {
  const t = e.layers;
  if (t) {
    for (let r = 0; r < t.length; r++)
      if (t[r].id === a)
        return t[r];
  }
  const n = e.tables;
  if (n) {
    for (let r = 0; r < n.length; r++)
      if (n[r].id === a)
        return n[r];
  }
  return null;
}
function s(e) {
  var a, t, n, r;
  return ((a = e == null || (t = e.layers) == null ? void 0 : t.length) != null ? a : 0) + ((n = e == null || (r = e.tables) == null ? void 0 : r.length) != null ? n : 0);
}
function j(e) {
  return e.type !== "stream" && "layerId" in e;
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFirstLayerOrTableId: v,
  getNumLayersAndTables: s,
  load: w,
  preprocessFSItemData: m
}, Symbol.toStringTag, { value: "Module" }));
export {
  v as f,
  s as h,
  P as l,
  m,
  y as n
};

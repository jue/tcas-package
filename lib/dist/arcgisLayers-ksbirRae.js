import { G as v, H as h, I as O, J as L, L as T, K as b } from "./index-B7TsCcH6.js";
import { t as d, r as P } from "./fetchService-fphYC2dk.js";
import { a as g } from "./lazyLayerLoader-08z__tOJ.js";
import "vue";
const C = { FeatureLayer: !0, SceneLayer: !0 };
async function R(r) {
  var t;
  const l = (t = r.properties) == null ? void 0 : t.customParameters, e = await J(r.url, l), a = { ...r.properties, url: r.url };
  if (!e.sublayerIds)
    return e.layerOrTableId != null && (a.layerId = e.layerOrTableId, a.sourceJSON = e.sourceJSON), new e.Constructor(a);
  const s = new (await import("./GroupLayer-1Lhl0nrp.js")).default({ title: e.parsedUrl.title });
  return F(s, e, a), s;
}
function S(r, l) {
  return r ? r.find((e) => e.id === l) : null;
}
function F(r, l, e) {
  function a(s, t) {
    const u = { ...e, layerId: s, sublayerTitleMode: "service-name" };
    return t != null && (u.sourceJSON = t), new l.Constructor(u);
  }
  l.sublayerIds.forEach((s) => {
    const t = a(s, S(l.sublayerInfos, s));
    r.add(t);
  }), l.tableIds.forEach((s) => {
    const t = a(s, S(l.tableInfos, s));
    r.tables.add(t);
  });
}
async function J(r, l) {
  var m, p, f, I;
  let e = v(r);
  if (e == null && (e = await N(r, l)), e == null)
    throw new h("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r });
  const { serverType: a, sublayer: s } = e;
  let t;
  const u = { FeatureServer: "FeatureLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer" };
  switch (a) {
    case "MapServer":
      s != null ? t = "FeatureLayer" : t = await V(r, l) ? "TileLayer" : "MapImageLayer";
      break;
    case "ImageServer": {
      const n = await d(r, { customParameters: l }), { tileInfo: c, cacheType: y } = n;
      t = c ? ((m = c == null ? void 0 : c.format) == null ? void 0 : m.toUpperCase()) !== "LERC" || y && y.toLowerCase() !== "elevation" ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const n = await d(e.url.path, { customParameters: l });
      if (t = "SceneLayer", n) {
        const c = n == null ? void 0 : n.layers;
        if ((n == null ? void 0 : n.layerType) === "Voxel")
          t = "VoxelLayer";
        else if (c != null && c.length) {
          const y = (p = c[0]) == null ? void 0 : p.layerType;
          y != null && b[y] != null && (t = b[y]);
        }
      }
      break;
    }
    default:
      t = u[a];
  }
  const o = a === "FeatureServer", i = { parsedUrl: e, Constructor: null, layerOrTableId: o ? s : void 0, sublayerIds: null, tableIds: null };
  if (C[t] && s == null) {
    const n = await U(r, a, l);
    o && (i.sublayerInfos = n.layerInfos, i.tableInfos = n.tableInfos), n.layerIds.length + n.tableIds.length !== 1 ? (i.sublayerIds = n.layerIds, i.tableIds = n.tableIds) : o && (i.layerOrTableId = n.layerIds[0] ?? n.tableIds[0], i.sourceJSON = ((f = n.layerInfos) == null ? void 0 : f[0]) ?? ((I = n.tableInfos) == null ? void 0 : I[0]));
  }
  return i.Constructor = await x(t), i;
}
async function N(r, l) {
  var o;
  const e = await d(r, { customParameters: l });
  let a = null, s = null;
  const t = e.type;
  if (t === "Feature Layer" || t === "Table" ? (a = "FeatureServer", s = e.id ?? null) : t === "indexedVector" ? a = "VectorTileServer" : e.hasOwnProperty("mapName") ? a = "MapServer" : e.hasOwnProperty("bandCount") && e.hasOwnProperty("pixelSizeX") ? a = "ImageServer" : e.hasOwnProperty("maxRecordCount") && e.hasOwnProperty("allowGeometryUpdates") ? a = "FeatureServer" : e.hasOwnProperty("streamUrls") ? a = "StreamServer" : w(e) ? (a = "SceneServer", s = e.id) : e.hasOwnProperty("layers") && w((o = e.layers) == null ? void 0 : o[0]) && (a = "SceneServer"), !a)
    return null;
  const u = s != null ? O(r) : null;
  return { title: u != null && e.name || L(r), serverType: a, sublayer: s, url: { path: u != null ? u.serviceUrl : T(r).path } };
}
function w(r) {
  return r != null && r.hasOwnProperty("store") && r.hasOwnProperty("id") && typeof r.id == "number";
}
async function U(r, l, e) {
  let a, s = !1;
  if (l === "FeatureServer") {
    const o = await P(r, { customParameters: e });
    s = !!o.layersJSON, a = o.layersJSON || o.serviceJSON;
  } else
    a = await d(r, { customParameters: e });
  const t = a == null ? void 0 : a.layers, u = a == null ? void 0 : a.tables;
  return { layerIds: (t == null ? void 0 : t.map((o) => o.id).reverse()) || [], tableIds: (u == null ? void 0 : u.map((o) => o.id).reverse()) || [], layerInfos: s ? t : [], tableInfos: s ? u : [] };
}
async function x(r) {
  return (0, g[r])();
}
async function V(r, l) {
  return (await d(r, { customParameters: l })).tileInfo;
}
export {
  R as fromUrl
};

import { c1 as l, y as f } from "./index-j1oaLRcp.js";
import { a as d } from "./lazyLayerLoader-Lv876dgF.js";
import { n as c, h as i, m as L, f as N } from "./layersLoader-mQRpMJCG.js";
import "vue";
import "./jsonContext-u43hNVvn.js";
function y(e, r) {
  return !!e.typeKeywords && e.typeKeywords.indexOf(r) > -1;
}
function B(e) {
  return !e.portalItem || e.portalItem instanceof l || (e = { ...e, portalItem: new l(e.portalItem) }), S(e.portalItem).then((r) => {
    const t = { portalItem: e.portalItem, ...r.properties }, n = r.constructor;
    return Promise.resolve(new n(t));
  });
}
function S(e) {
  return e.load().then(h).then(I);
}
function h(e) {
  switch (e.type) {
    case "Map Service":
      return w(e);
    case "Feature Service":
      return g(e);
    case "Feature Collection":
      return T(e);
    case "Scene Service":
      return v(e);
    case "Image Service":
      return M(e);
    case "Stream Service":
      return P();
    case "Vector Tile Service":
      return C();
    case "KML":
      return F();
    case "WFS":
      return K();
    case "WMTS":
      return j();
    case "WMS":
      return $();
    case "Feed":
      return x();
    default:
      return Promise.reject(new f("portal:unknown-item-type", "Unknown item type '${type}'", { type: e.type }));
  }
}
function I(e) {
  return (0, d[e.className])().then((r) => ({ constructor: r, properties: e.properties }));
}
function w(e) {
  return O(e).then((r) => r ? { className: "TileLayer" } : { className: "MapImageLayer" });
}
function g(e) {
  return m(e).then((r) => {
    if (typeof r == "object") {
      const t = {};
      return r.id != null && (t.layerId = r.id), { className: "FeatureLayer", properties: t };
    }
    return { className: "GroupLayer" };
  });
}
function v(e) {
  return m(e).then((r) => {
    if (typeof r == "object") {
      const t = {};
      let n;
      if (r.id != null ? (t.layerId = r.id, n = `${e.url}/layers/${r.id}`) : n = e.url, Array.isArray(e.typeKeywords) && e.typeKeywords.length > 0) {
        const a = { IntegratedMesh: "IntegratedMeshLayer", "3DObject": "SceneLayer", Point: "SceneLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
        for (const s of Object.keys(a))
          if (e.typeKeywords.indexOf(s) !== -1)
            return { className: a[s] };
      }
      return c(n).then((a) => {
        let s = "SceneLayer";
        const o = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
        return a && a.layerType && o[a.layerType] && (s = o[a.layerType]), { className: s, properties: t };
      });
    }
    return r === !1 ? c(e.url).then((t) => (t == null ? void 0 : t.layerType) === "Voxel" ? { className: "VoxelLayer" } : { className: "GroupLayer" }) : { className: "GroupLayer" };
  });
}
async function T(e) {
  if (await e.load(), y(e, "Map Notes"))
    return { className: "MapNotesLayer" };
  if (y(e, "Route Layer"))
    return { className: "RouteLayer" };
  const r = await e.fetchData();
  return i(r) === 1 ? { className: "FeatureLayer" } : { className: "GroupLayer" };
}
async function M(e) {
  var r, t, n;
  await e.load();
  const a = (r = (t = e.typeKeywords) == null ? void 0 : t.map((p) => p.toLowerCase())) != null ? r : [];
  if (a.indexOf("elevation 3d layer") > -1)
    return { className: "ElevationLayer" };
  if (a.indexOf("tiled imagery") > -1)
    return { className: "ImageryTileLayer" };
  const s = await e.fetchData(), o = s == null ? void 0 : s.layerType;
  return o === "ArcGISTiledImageServiceLayer" ? { className: "ImageryTileLayer" } : o === "ArcGISImageServiceLayer" ? { className: "ImageryLayer" } : ((n = (await c(e.url)).cacheType) == null ? void 0 : n.toLowerCase()) === "map" ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
}
function P() {
  return { className: "StreamLayer" };
}
function C() {
  return { className: "VectorTileLayer" };
}
function F() {
  return { className: "KMLLayer" };
}
function K() {
  return { className: "WFSLayer" };
}
function $() {
  return { className: "WMSLayer" };
}
function j() {
  return { className: "WMTSLayer" };
}
function x() {
  return { className: "StreamLayer" };
}
function O(e) {
  return c(e.url).then((r) => r.tileInfo);
}
function m(e) {
  return !e.url || e.url.match(/\/\d+$/) ? Promise.resolve({}) : e.load().then(() => e.fetchData()).then(async (r) => e.type === "Feature Service" ? u(r = await L(r, e.url)) : i(r) > 0 ? u(r) : c(e.url).then(u));
}
function u(e) {
  return i(e) === 1 && { id: N(e) };
}
export {
  B as fromItem,
  h as selectLayerClassPath
};

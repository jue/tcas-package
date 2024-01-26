import { de as f, df as g, c1 as G, j as M } from "./index-j1oaLRcp.js";
import { a as L } from "./lazyLayerLoader-Lv876dgF.js";
import { selectLayerClassPath as m } from "./portalLayers-LQbiAkUA.js";
import "vue";
import "./layersLoader-mQRpMJCG.js";
import "./jsonContext-u43hNVvn.js";
function v(e) {
  return d(e, "notes");
}
function A(e) {
  return d(e, "route");
}
function d(e, r) {
  return !(!e.layerType || e.layerType !== "ArcGISFeatureLayer") && e.featureCollectionType === r;
}
async function w(e, r, a) {
  if (!r)
    return;
  const y = [];
  for (const t of r) {
    const i = O(t, a);
    t.layerType === "GroupLayer" ? y.push(x(i, t, a)) : y.push(i);
  }
  const n = await f(y);
  for (const t of n)
    !t.value || a.filter && !a.filter(t.value) || e.add(t.value);
}
const b = { ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", PointCloudLayer: "PointCloudLayer", ArcGISSceneServiceLayer: "SceneLayer", IntegratedMeshLayer: "IntegratedMeshLayer", OGCFeatureLayer: "OGCFeatureLayer", BuildingSceneLayer: "BuildingSceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", GroupLayer: "GroupLayer", GeoJSON: "GeoJSONLayer", WebTiledLayer: "WebTileLayer", CSV: "CSVLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer", KML: "KMLLayer", RasterDataLayer: "UnsupportedLayer", Voxel: "VoxelLayer" }, W = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" }, F = { ArcGISTiledMapServiceLayer: "TileLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", OpenStreetMap: "OpenStreetMapLayer", WebTiledLayer: "WebTileLayer", VectorTileLayer: "VectorTileLayer", ArcGISImageServiceLayer: "UnsupportedLayer", WMS: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", DefaultTileLayer: "TileLayer" }, C = { ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoRSS: "GeoRSSLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", OGCFeatureLayer: "OGCFeatureLayer", SubtypeGroupLayer: "UnsupportedLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, V = { ArcGISFeatureLayer: "FeatureLayer" }, B = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WebTiledLayer: "WebTileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer" };
async function O(e, r) {
  return h(await U(e, r), e, r);
}
async function h(e, r, a) {
  const y = new e();
  return y.read(r, a.context), y.type === "group" && I(r) && await R(y, r, a.context), await g(y, a.context), y;
}
async function U(e, r) {
  const a = r.context, y = D(a);
  let n = e.layerType || e.type;
  !n && r && r.defaultLayerType && (n = r.defaultLayerType);
  const t = y[n];
  let i = t ? L[t] : L.UnknownLayer;
  if (T(e)) {
    const s = a == null ? void 0 : a.portal;
    if (e.itemId) {
      const l = new G({ id: e.itemId, portal: s });
      await l.load();
      const o = (await m(l)).className || "UnknownLayer";
      i = L[o];
    }
  } else
    n === "ArcGISFeatureLayer" ? v(e) ? i = L.MapNotesLayer : A(e) ? i = L.RouteLayer : I(e) && (i = L.GroupLayer) : e.wmtsInfo && e.wmtsInfo.url && e.wmtsInfo.layerIdentifier ? i = L.WMTSLayer : n === "WFS" && e.wfsInfo.version !== "2.0.0" && (i = L.UnsupportedLayer);
  return i();
}
function I(e) {
  var r, a, y;
  return e.layerType !== "ArcGISFeatureLayer" || T(e) ? !1 : ((r = (a = e.featureCollection) == null || (y = a.layers) == null ? void 0 : y.length) != null ? r : 0) > 1;
}
function T(e) {
  return e.type === "Feature Collection";
}
function D(e) {
  let r;
  if (e.origin === "web-scene")
    switch (e.layerContainerType) {
      case "basemap":
        r = F;
        break;
      case "ground":
        r = W;
        break;
      default:
        r = b;
    }
  else
    switch (e.layerContainerType) {
      case "basemap":
        r = B;
        break;
      case "tables":
        r = V;
        break;
      default:
        r = C;
    }
  return r;
}
async function x(e, r, a) {
  const y = new M(), n = w(y, Array.isArray(r.layers) ? r.layers : [], a), t = await e;
  if (await n, t.type === "group")
    return t.layers.addMany(y), t;
}
async function R(e, r, a) {
  const y = L.FeatureLayer, n = await y(), t = r.featureCollection, i = t.showLegend, s = t.layers.map((l, o) => {
    var u, p;
    const c = new n();
    c.read(l, a);
    const S = { ...a, ignoreDefaults: !0 };
    return c.read({ id: `${e.id}-sublayer-${o}`, visibility: (u = (p = r.visibleLayers) == null ? void 0 : p.includes(o)) == null || u }, S), i != null && c.read({ showLegend: i }, S), c;
  });
  e.layers.addMany(s);
}
export {
  w as populateOperationalLayers
};

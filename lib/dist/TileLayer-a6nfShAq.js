import { ck as _, co as S, cm as T, cn as b, cN as w, cp as O, b0 as $, cl as R, cO as U, cP as W, cq as P, a9 as v, L as j, ae as u, d5 as L, cR as N, H as h, G as k, d6 as A, ay as B, d7 as M, a as i, b as o, bl as C, cU as I, d8 as D, cu as J, c as q, ax as G } from "./index-B7TsCcH6.js";
import { p as E } from "./ArcGISCachedService-lg39pSp-.js";
import { E as V, f as x, Y as H } from "./SublayersOwner-Vz7YjPGq.js";
import { o as f } from "./imageBitmapUtils-27ShIz0K.js";
import "vue";
import "./TileInfoTilemapCache-yX-rHyP5.js";
import "./TilemapCache-2I91dGKY.js";
import "./ByteSizeUnit-dxTdcbwN.js";
import "./QueryTask-D86mupcM.js";
import "./utils-iTYrz_MZ.js";
import "./executeForIds-eKrPJQC-.js";
import "./query-1m4tLbNM.js";
import "./normalizeUtils-Le73uFr2.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./pbfQueryUtils-7EAEP13Y.js";
import "./pbf-AaymeYEC.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./executeQueryJSON-JSJch6gf.js";
import "./executeQueryPBF-KutxCZUS.js";
import "./featureConversionUtils-oKi2Ei-6.js";
import "./sublayerUtils-4nG-Ec5e.js";
var y;
const m = ["Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Elevation/World_Hillshade", "Elevation/World_Hillshade_Dark", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Ocean_Basemap", "Reference/World_Boundaries_and_Places", "Reference/World_Boundaries_and_Places_Alternate", "Reference/World_Transportation", "World_Imagery", "World_Street_Map", "World_Topo_Map"];
let s = y = class extends _(S(V(E(x(T(b(w(O($(R(U(W(G))))))))))))) {
  constructor(...e) {
    super(...e), this.listMode = "show", this.isReference = null, this.operationalLayerType = "ArcGISTiledMapServiceLayer", this.resampling = !0, this.sourceJSON = null, this.spatialReference = null, this.path = null, this.sublayers = null, this.type = "tile", this.url = null;
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  load(e) {
    const r = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }, e).catch(P).then(() => this._fetchService(r))), Promise.resolve(this);
  }
  get attributionDataUrl() {
    var r;
    const e = (r = this.parsedUrl) == null ? void 0 : r.path.toLowerCase();
    return e ? this._getDefaultAttribution(this._getMapName(e)) : null;
  }
  readSpatialReference(e, r) {
    return (e = e || r.tileInfo && r.tileInfo.spatialReference) && v.fromJSON(e);
  }
  writeSublayers(e, r, t, a) {
    if (!this.loaded || !e)
      return;
    const p = e.slice().reverse().flatten(({ sublayers: l }) => l && l.toArray().reverse()).toArray(), n = [], c = { writeSublayerStructure: !1, ...a };
    p.forEach((l) => {
      const d = l.write({}, c);
      n.push(d);
    }), n.some((l) => Object.keys(l).length > 1) && (r.layers = n);
  }
  get tileServers() {
    var e;
    return this._getDefaultTileServers((e = this.parsedUrl) == null ? void 0 : e.path);
  }
  castTileServers(e) {
    return Array.isArray(e) ? e.map((r) => j(r).path) : null;
  }
  fetchTile(e, r, t, a = {}) {
    const { signal: p } = a, n = this.getTileUrl(e, r, t), c = { responseType: "image", signal: p, query: { ...this.refreshParameters } };
    return u(n, c).then((l) => l.data);
  }
  async fetchImageBitmapTile(e, r, t, a = {}) {
    const { signal: p } = a;
    if (this.fetchTile !== y.prototype.fetchTile) {
      const d = await this.fetchTile(e, r, t, a);
      return f(d, e, r, t, p);
    }
    const n = this.getTileUrl(e, r, t), c = { responseType: "blob", signal: p, query: { ...this.refreshParameters } }, { data: l } = await u(n, c);
    return f(l, e, r, t, p);
  }
  getTileUrl(e, r, t) {
    var c, l;
    const a = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, p = L({ ...(c = this.parsedUrl) == null ? void 0 : c.query, blankTile: !a && null, ...this.customParameters, token: this.apiKey }), n = this.tileServers;
    return `${n && n.length ? n[r % n.length] : (l = this.parsedUrl) == null ? void 0 : l.path}/tile/${e}/${r}/${t}${p ? "?" + p : ""}`;
  }
  loadAll() {
    return N(this, (e) => {
      e(this.allSublayers);
    });
  }
  _fetchService(e) {
    return new Promise((r, t) => {
      if (this.sourceJSON) {
        if (this.sourceJSON.bandCount != null && this.sourceJSON.pixelSizeX != null)
          throw new h("tile-layer:unsupported-url", "use ImageryTileLayer to open a tiled image service");
        return void r({ data: this.sourceJSON });
      }
      if (!this.parsedUrl)
        throw new h("tile-layer:undefined-url", "layer's url is not defined");
      const a = k(this.parsedUrl.path);
      if (a != null && a.serverType === "ImageServer")
        throw new h("tile-layer:unsupported-url", "use ImageryTileLayer to open a tiled image service");
      u(this.parsedUrl.path, { query: { f: "json", ...this.parsedUrl.query, ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e }).then(r, t);
    }).then((r) => {
      let t = this.url;
      if (r.ssl && (t = this.url = t.replace(/^http:/i, "https:")), this.sourceJSON = r.data, this.read(r.data, { origin: "service", url: this.parsedUrl }), this.version === 10.1 && !A(t))
        return this._fetchServerVersion(t, e).then((a) => {
          this.read({ currentVersion: a });
        }).catch(() => {
        });
    });
  }
  _fetchServerVersion(e, r) {
    if (!B(e))
      return Promise.reject();
    const t = e.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
    return u(t, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: r }).then((a) => {
      if (a.data && a.data.currentVersion)
        return a.data.currentVersion;
      throw new h("tile-layer:version-not-available");
    });
  }
  _getMapName(e) {
    const r = e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);
    return r ? r[2] : void 0;
  }
  _getDefaultAttribution(e) {
    if (e == null)
      return null;
    let r;
    e = e.toLowerCase();
    for (let t = 0, a = m.length; t < a; t++)
      if (r = m[t], r.toLowerCase().includes(e))
        return M("//static.arcgis.com/attribution/" + r);
    return null;
  }
  _getDefaultTileServers(e) {
    if (e == null)
      return [];
    const r = e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i) !== -1, t = e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i) !== -1;
    return r || t ? [e, e.replace(r ? /server\.arcgisonline/i : /services\.arcgisonline/i, r ? "services.arcgisonline" : "server.arcgisonline")] : [];
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[g];
  }
};
i([o({ readOnly: !0 })], s.prototype, "attributionDataUrl", null), i([o({ type: ["show", "hide", "hide-children"] })], s.prototype, "listMode", void 0), i([o({ json: { read: !0, write: !0 } })], s.prototype, "blendMode", void 0), i([o({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], s.prototype, "isReference", void 0), i([o({ readOnly: !0, type: ["ArcGISTiledMapServiceLayer"] })], s.prototype, "operationalLayerType", void 0), i([o({ type: Boolean })], s.prototype, "resampling", void 0), i([o()], s.prototype, "sourceJSON", void 0), i([o({ type: v })], s.prototype, "spatialReference", void 0), i([C("spatialReference", ["spatialReference", "tileInfo"])], s.prototype, "readSpatialReference", null), i([o({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], s.prototype, "path", void 0), i([o({ readOnly: !0 })], s.prototype, "sublayers", void 0), i([I("sublayers", { layers: { type: [H] } })], s.prototype, "writeSublayers", null), i([o({ json: { read: !1, write: !1 } })], s.prototype, "popupEnabled", void 0), i([o()], s.prototype, "tileServers", null), i([D("tileServers")], s.prototype, "castTileServers", null), i([o({ readOnly: !0, json: { read: !1 } })], s.prototype, "type", void 0), i([o(J)], s.prototype, "url", void 0), s = y = i([q("geoscene.layers.TileLayer")], s);
const g = Symbol("default-fetch-tile");
s.prototype.fetchTile[g] = !0;
const fe = s;
export {
  fe as default
};
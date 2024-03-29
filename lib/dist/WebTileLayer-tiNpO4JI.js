import { e as l, d as o, a as f, aD as T, S as d, bt as S, bF as j, bu as R, bv as x, bw as P, bz as M, M as w, m as u, c2 as b, ab as $, c3 as r, e9 as h, y as E, ea as I, eb as W, C as D, ec as O, aE as v, bD as L, bE as U } from "./index-j1oaLRcp.js";
var m;
let p = m = class extends T {
  constructor(e) {
    super(e);
  }
  clone() {
    return new m({ customLayerParameters: d(this.customLayerParameters), customParameters: d(this.customParameters), layerIdentifier: this.layerIdentifier, tileMatrixSet: this.tileMatrixSet, url: this.url });
  }
};
l([o({ json: { type: Object, write: !0 } })], p.prototype, "customLayerParameters", void 0), l([o({ json: { type: Object, write: !0 } })], p.prototype, "customParameters", void 0), l([o({ type: String, json: { write: !0 } })], p.prototype, "layerIdentifier", void 0), l([o({ type: String, json: { write: !0 } })], p.prototype, "tileMatrixSet", void 0), l([o({ type: String, json: { write: !0 } })], p.prototype, "url", void 0), p = m = l([f("geoscene.layer.support.WMTSLayerInfo")], p);
const z = p;
let s = class extends S(j(R(x(P(M(U)))))) {
  constructor(...e) {
    super(...e), this.copyright = "", this.fullExtent = new w(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, u.WebMercator), this.legendEnabled = !1, this.isReference = null, this.popupEnabled = !1, this.spatialReference = u.WebMercator, this.subDomains = null, this.tileInfo = new b({ size: [256, 256], dpi: 96, format: "png8", compressionQuality: 0, origin: new $({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: u.WebMercator }), spatialReference: u.WebMercator, lods: [new r({ level: 0, scale: 591657527591555e-6, resolution: 156543.033928 }), new r({ level: 1, scale: 295828763795777e-6, resolution: 78271.5169639999 }), new r({ level: 2, scale: 147914381897889e-6, resolution: 39135.7584820001 }), new r({ level: 3, scale: 73957190948944e-6, resolution: 19567.8792409999 }), new r({ level: 4, scale: 36978595474472e-6, resolution: 9783.93962049996 }), new r({ level: 5, scale: 18489297737236e-6, resolution: 4891.96981024998 }), new r({ level: 6, scale: 9244648868618e-6, resolution: 2445.98490512499 }), new r({ level: 7, scale: 4622324434309e-6, resolution: 1222.99245256249 }), new r({ level: 8, scale: 2311162217155e-6, resolution: 611.49622628138 }), new r({ level: 9, scale: 1155581108577e-6, resolution: 305.748113140558 }), new r({ level: 10, scale: 577790.554289, resolution: 152.874056570411 }), new r({ level: 11, scale: 288895.277144, resolution: 76.4370282850732 }), new r({ level: 12, scale: 144447.638572, resolution: 38.2185141425366 }), new r({ level: 13, scale: 72223.819286, resolution: 19.1092570712683 }), new r({ level: 14, scale: 36111.909643, resolution: 9.55462853563415 }), new r({ level: 15, scale: 18055.954822, resolution: 4.77731426794937 }), new r({ level: 16, scale: 9027.977411, resolution: 2.38865713397468 }), new r({ level: 17, scale: 4513.988705, resolution: 1.19432856685505 }), new r({ level: 18, scale: 2256.994353, resolution: 0.597164283559817 }), new r({ level: 19, scale: 1128.497176, resolution: 0.298582141647617 }), new r({ level: 20, scale: 564.248588, resolution: 0.14929107082380833 }), new r({ level: 21, scale: 282.124294, resolution: 0.07464553541190416 }), new r({ level: 22, scale: 141.062147, resolution: 0.03732276770595208 }), new r({ level: 23, scale: 70.5310735, resolution: 0.01866138385297604 })] }), this.type = "web-tile", this.urlTemplate = null, this.wmtsInfo = null;
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { urlTemplate: e, ...t } : e;
  }
  load(e) {
    const t = this.loadFromPortal({ supportedTypes: ["WMTS"] }, e).then(() => {
      let i = "";
      if (this.urlTemplate)
        if (this.spatialReference.equals(this.tileInfo.spatialReference)) {
          const a = new h(this.urlTemplate);
          this.subDomains && this.subDomains.length > 0 || a.authority.indexOf("{subDomain}") === -1 || (i = "is missing 'subDomains' property");
        } else
          i = "spatialReference must match tileInfo.spatialReference";
      else
        i = "is missing the required 'urlTemplate' property value";
      if (i)
        throw new E("web-tile-layer:load", `WebTileLayer (title: '${this.title}', id: '${this.id}') ${i}`);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
  get levelValues() {
    const e = [];
    if (!this.tileInfo)
      return null;
    for (const t of this.tileInfo.lods)
      e[t.level] = t.levelValue || t.level;
    return e;
  }
  readSpatialReference(e, t) {
    return e || t.fullExtent && t.fullExtent.spatialReference && u.fromJSON(t.fullExtent.spatialReference);
  }
  get tileServers() {
    if (!this.urlTemplate)
      return null;
    const e = [], { urlTemplate: t, subDomains: i } = this, a = new h(t), c = a.scheme ? a.scheme + "://" : "//", y = c + a.authority + "/";
    if (a.authority.indexOf("{subDomain}") === -1)
      e.push(y);
    else if (i && i.length > 0 && a.authority.split(".").length > 1)
      for (const n of i)
        e.push(c + a.authority.replace(/\{subDomain\}/gi, n) + "/");
    return e.map((n) => (n.charAt(n.length - 1) !== "/" && (n += "/"), n));
  }
  get urlPath() {
    if (!this.urlTemplate)
      return null;
    const e = this.urlTemplate, t = new h(e), i = (t.scheme ? t.scheme + "://" : "//") + t.authority + "/";
    return e.substring(i.length);
  }
  readUrlTemplate(e, t) {
    return e || t.templateUrl;
  }
  writeUrlTemplate(e, t) {
    e && I(e) && (e = "https:" + e), e && (e = e.replace(/\{z\}/gi, "{level}").replace(/\{x\}/gi, "{col}").replace(/\{y\}/gi, "{row}"), e = W(e)), t.templateUrl = e;
  }
  fetchTile(e, t, i, a = {}) {
    const { signal: c } = a, y = this.getTileUrl(e, t, i), n = { responseType: "image", signal: c, query: { ...this.refreshParameters } };
    return D(y, n).then((g) => g.data);
  }
  getTileUrl(e, t, i) {
    const a = this.levelValues[e];
    return this.tileServers[t % this.tileServers.length] + O(this.urlPath, { level: a, z: a, col: i, x: i, row: t, y: t });
  }
};
l([o({ type: String, value: "", json: { write: !0 } })], s.prototype, "copyright", void 0), l([o({ type: w, json: { write: !0 }, nonNullable: !0 })], s.prototype, "fullExtent", void 0), l([o({ readOnly: !0, json: { read: !1, write: !1 } })], s.prototype, "legendEnabled", void 0), l([o({ type: ["show", "hide"] })], s.prototype, "listMode", void 0), l([o()], s.prototype, "levelValues", null), l([o({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], s.prototype, "isReference", void 0), l([o({ type: ["WebTiledLayer"], value: "WebTiledLayer" })], s.prototype, "operationalLayerType", void 0), l([o({ readOnly: !0, json: { read: !1, write: !1 } })], s.prototype, "popupEnabled", void 0), l([o({ type: u })], s.prototype, "spatialReference", void 0), l([v("spatialReference", ["spatialReference", "fullExtent.spatialReference"])], s.prototype, "readSpatialReference", null), l([o({ type: [String], json: { write: !0 } })], s.prototype, "subDomains", void 0), l([o({ type: b, json: { write: !0 } })], s.prototype, "tileInfo", void 0), l([o({ readOnly: !0 })], s.prototype, "tileServers", null), l([o({ json: { read: !1 } })], s.prototype, "type", void 0), l([o()], s.prototype, "urlPath", null), l([o({ type: String, json: { origins: { "portal-item": { read: { source: "url" } } } } })], s.prototype, "urlTemplate", void 0), l([v("urlTemplate", ["urlTemplate", "templateUrl"])], s.prototype, "readUrlTemplate", null), l([L("urlTemplate", { templateUrl: { type: String } })], s.prototype, "writeUrlTemplate", null), l([o({ type: z, json: { write: !0 } })], s.prototype, "wmtsInfo", void 0), s = l([f("geoscene.layers.WebTileLayer")], s);
const V = s, q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V
}, Symbol.toStringTag, { value: "Module" }));
export {
  q as W,
  z as a,
  V as x
};

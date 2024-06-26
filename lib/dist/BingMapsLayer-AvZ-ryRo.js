import { bt as M, bu as x, bF as T, c2 as c, m as g, M as j, dh as B, C as h, y as p, e as a, d as r, a as w, bE as U, D as $, bv as k, bz as R, r as m, l as v } from "./index-Ek1MTSEY.js";
import "vue";
const d = { id: "0/0/0", level: 0, row: 0, col: 0, extent: null };
let u = class extends M(x(T(U))) {
  constructor() {
    super(...arguments), this.tileInfo = c.create({ spatialReference: g.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new j(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, g.WebMercator), this.spatialReference = g.WebMercator;
  }
  getTileBounds(t, o, i, n) {
    const l = n || B();
    return d.level = t, d.row = o, d.col = i, d.extent = l, this.tileInfo.updateTileInfo(d), d.extent = null, l;
  }
  fetchTile(t, o, i, n = {}) {
    const { signal: l } = n, y = this.getTileUrl(t, o, i), f = { responseType: "image", signal: l, query: { ...this.refreshParameters } };
    return h(y, f).then((S) => S.data);
  }
  getTileUrl() {
    throw new p("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
a([r({ type: c })], u.prototype, "tileInfo", void 0), a([r({ type: ["show", "hide"] })], u.prototype, "listMode", void 0), a([r({ readOnly: !0, value: "base-tile" })], u.prototype, "type", void 0), a([r({ nonNullable: !0 })], u.prototype, "fullExtent", void 0), a([r()], u.prototype, "spatialReference", void 0), u = a([w("geoscene.layers.BaseTileLayer")], u);
const P = u, b = new $({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" }), _ = "https://dev.virtualearth.net";
let s = class extends M(k(R(P))) {
  constructor(e) {
    super(e), this.type = "bing-maps", this.tileInfo = new c({ size: [256, 256], dpi: 96, origin: { x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: g.WebMercator }, spatialReference: g.WebMercator, lods: [{ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }, { level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }, { level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }, { level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }, { level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }, { level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }, { level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }, { level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }, { level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }, { level: 10, resolution: 152.874056570411, scale: 577790.554289 }, { level: 11, resolution: 76.4370282850732, scale: 288895.277144 }, { level: 12, resolution: 38.2185141425366, scale: 144447.638572 }, { level: 13, resolution: 19.1092570712683, scale: 72223.819286 }, { level: 14, resolution: 9.55462853563415, scale: 36111.909643 }, { level: 15, resolution: 4.77731426794937, scale: 18055.954822 }, { level: 16, resolution: 2.38865713397468, scale: 9027.977411 }, { level: 17, resolution: 1.19432856685505, scale: 4513.988705 }, { level: 18, resolution: 0.597164283559817, scale: 2256.994353 }, { level: 19, resolution: 0.298582141647617, scale: 1128.497176 }, { level: 20, resolution: 0.1492910708238085, scale: 564.248588 }] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = !0;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e) {
    this._set("bingMetadata", e);
  }
  get copyright() {
    return m(this.bingMetadata) ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return b.toJSON(this.style);
  }
  get bingLogo() {
    return m(this.bingMetadata) ? this.bingMetadata.brandLogoUri : null;
  }
  load(e) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new p("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e, t, o) {
    if (!this.loaded || v(this.bingMetadata))
      return null;
    const i = this.bingMetadata.resourceSets[0].resources[0], n = i.imageUrlSubdomains[t % i.imageUrlSubdomains.length], l = this._getQuadKey(e, t, o);
    return i.imageUrl.replace("{subdomain}", n).replace("{quadkey}", l);
  }
  async fetchAttributionData() {
    return this.load().then(() => v(this.bingMetadata) ? null : { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e) => ({ attribution: e.attribution, coverageAreas: e.coverageAreas.map((t) => ({ zoomMin: t.zoomMin, zoomMax: t.zoomMax, score: 1, bbox: [t.bbox[0], t.bbox[1], t.bbox[2], t.bbox[3]] })) })) });
  }
  _getMetadata() {
    const e = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return h(`${_}/REST/v1/Imagery/Metadata/${e}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: !0, output: "json", culture: this.culture, userRegion: this.region } }).then((t) => {
      const o = t.data;
      if (o.statusCode !== 200)
        throw new p("bingmapslayer:getmetadata", o.statusDescription);
      if (this.bingMetadata = o, this.bingMetadata.resourceSets.length === 0)
        throw new p("bingmapslayer:getmetadata", "no bing resourcesets");
      if (this.bingMetadata.resourceSets[0].resources.length === 0)
        throw new p("bingmapslayer:getmetadata", "no bing resources");
    }).catch((t) => {
      throw new p("bingmapslayer:getmetadata", t.message);
    });
  }
  _getPortalBingKey() {
    return h(this.portalUrl, { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e) => {
      if (!e.data.bingKey)
        throw new p("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e.data.bingKey;
    }).catch((e) => {
      throw new p("bingmapslayer:getportalbingkey", e.message);
    });
  }
  _getQuadKey(e, t, o) {
    let i = "";
    for (let n = e; n > 0; n--) {
      let l = 0;
      const y = 1 << n - 1;
      o & y && (l += 1), t & y && (l += 2), i += l.toString();
    }
    return i;
  }
};
a([r({ json: { read: !1, write: !1 }, value: null })], s.prototype, "bingMetadata", null), a([r({ json: { read: !1, write: !1 }, value: "bing-maps", readOnly: !0 })], s.prototype, "type", void 0), a([r({ type: c })], s.prototype, "tileInfo", void 0), a([r({ type: String, readOnly: !0, json: { read: !1, write: !1 } })], s.prototype, "copyright", null), a([r({ type: String, json: { write: !1, read: !1 } })], s.prototype, "key", void 0), a([r({ type: b.apiValues, nonNullable: !0, json: { read: { source: "layerType", reader: b.read } } })], s.prototype, "style", void 0), a([r({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], s.prototype, "operationalLayerType", null), a([r({ type: String, json: { write: !1, read: !1 } })], s.prototype, "culture", void 0), a([r({ type: String, json: { write: !1, read: !1 } })], s.prototype, "region", void 0), a([r({ type: String, json: { write: !0, read: !0 } })], s.prototype, "portalUrl", void 0), a([r({ type: Boolean, json: { write: !1, read: !1 } })], s.prototype, "hasAttributionData", void 0), a([r({ type: String, readOnly: !0 })], s.prototype, "bingLogo", null), s = a([w("geoscene.layers.BingMapsLayer")], s);
const z = s;
export {
  z as default
};

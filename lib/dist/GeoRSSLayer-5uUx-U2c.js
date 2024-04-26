import { bt as p, bF as u, bv as d, bw as h, bu as c, bz as v, U as m, r as S, bG as b, C as g, bH as f, aq as C, e as o, d as r, aE as G, M as w, bI as P, bJ as _, bK as $, a as x, bL as n, bM as F, bN as R, bO as k, bP as E, bE as M } from "./index-Ek1MTSEY.js";
import "vue";
const j = ["atom", "xml"], L = { base: n, key: "type", typeMap: { "simple-line": F }, errorContext: "symbol" }, O = { base: n, key: "type", typeMap: { "picture-marker": R, "simple-marker": k }, errorContext: "symbol" }, T = { base: n, key: "type", typeMap: { "simple-fill": E }, errorContext: "symbol" };
let t = class extends p(u(d(h(c(v(M)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = !0, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e, s) {
    return typeof e == "string" ? { url: e, ...s } : e;
  }
  readFeatureCollections(e, s) {
    return s.featureCollection.layers.forEach((i) => {
      var l;
      const a = i.layerDefinition.drawingInfo.renderer.symbol;
      a && a.type === "esriSFS" && (l = a.outline) != null && l.style.includes("esriSFS") && (a.outline.style = "esriSLSSolid");
    }), s.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && this.originOf("title") !== "defaults" ? e : this.url ? m(this.url, j) || "GeoRSS" : e || "";
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const s = S(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e).catch(b).then(() => this._fetchService(s)).then((i) => {
      this.read(i, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e = await this._fetchService();
    return this.read(e, { origin: "service", ignoreDefaults: !0 }), !0;
  }
  async _fetchService(e) {
    var s;
    const i = this.spatialReference, { data: l } = await g(C.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: f(i) ? void 0 : (s = i.wkid) != null ? s : JSON.stringify(i) }, signal: e });
    return l;
  }
  _hasGeometry(e) {
    var s, i;
    return (s = (i = this.featureCollections) == null ? void 0 : i.some((l) => {
      var a, y;
      return ((a = l.featureSet) == null ? void 0 : a.geometryType) === e && ((y = l.featureSet.features) == null ? void 0 : y.length) > 0;
    })) != null && s;
  }
};
o([r()], t.prototype, "description", void 0), o([r()], t.prototype, "featureCollections", void 0), o([G("service", "featureCollections", ["featureCollection.layers"])], t.prototype, "readFeatureCollections", null), o([r({ type: w, json: { name: "lookAtExtent" } })], t.prototype, "fullExtent", void 0), o([r(P)], t.prototype, "id", void 0), o([r(_)], t.prototype, "legendEnabled", void 0), o([r({ types: L, json: { write: !0 } })], t.prototype, "lineSymbol", void 0), o([r({ type: ["show", "hide"] })], t.prototype, "listMode", void 0), o([r({ types: O, json: { write: !0 } })], t.prototype, "pointSymbol", void 0), o([r({ types: T, json: { write: !0 } })], t.prototype, "polygonSymbol", void 0), o([r({ type: ["GeoRSS"] })], t.prototype, "operationalLayerType", void 0), o([r($)], t.prototype, "url", void 0), o([r({ json: { origins: { service: { read: { source: "name", reader: (e) => e || void 0 } } } } })], t.prototype, "title", null), o([r({ readOnly: !0, json: { read: !1 }, value: "geo-rss" })], t.prototype, "type", void 0), t = o([x("geoscene.layers.GeoRSSLayer")], t);
const q = t;
export {
  q as default
};

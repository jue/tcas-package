import { bt as x, bQ as w, bu as $, bR as O, bv as I, bw as E, bz as M, bF as T, bS as P, bT as L, aw as R, r as F, bG as N, bU as v, az as g, y as f, C as b, g as j, M as J, a1 as U, bB as q, bV as A, e as s, d as o, aE as k, bD as z, bK as V, a as C, bE as W, bW as D } from "./index-j1oaLRcp.js";
import { r as G } from "./scaleUtils-pO3ETIVl.js";
import { S as K, y as _, W as B } from "./SublayersOwner-uSzUfGAa.js";
import { c as H } from "./ExportImageParameters-tJOQ5PFj.js";
import { e as S } from "./sublayerUtils-XJKH7kDg.js";
import "vue";
import "./Version-w5GduY1W.js";
import "./floorFilterUtils-HsstcPZ9.js";
let t = class extends x(w($(K(_(O(I(E(M(T(P(L(R(W))))))))))))) {
  constructor(...e) {
    super(...e), this.datesInUnknownTimezone = !1, this.dpi = 96, this.gdbVersion = null, this.imageFormat = "png24", this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = !0, this.isReference = null, this.labelsVisible = !1, this.operationalLayerType = "ArcGISMapServiceLayer", this.sourceJSON = null, this.sublayers = null, this.type = "map-image", this.url = null;
  }
  normalizeCtorArgs(e, i) {
    return typeof e == "string" ? { url: e, ...i } : e;
  }
  load(e) {
    const i = F(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }, e).catch(N).then(() => this._fetchService(i))), Promise.resolve(this);
  }
  readImageFormat(e, i) {
    const y = i.supportedImageFormatTypes;
    return y && y.indexOf("PNG32") > -1 ? "png32" : "png24";
  }
  writeSublayers(e, i, y, r) {
    if (!this.loaded || !e)
      return;
    const l = e.slice().reverse().flatten(({ sublayers: a }) => a && a.toArray().reverse()).toArray();
    let n = !1;
    if (this.capabilities && this.capabilities.operations.supportsExportMap && this.capabilities.exportMap.supportsDynamicLayers) {
      const a = v(r.origin);
      if (a === g.PORTAL_ITEM) {
        const u = this.createSublayersForOrigin("service").sublayers;
        n = S(l, u, g.SERVICE);
      } else if (a > g.PORTAL_ITEM) {
        const u = this.createSublayersForOrigin("portal-item");
        n = S(l, u.sublayers, v(u.origin));
      }
    }
    const p = [], m = { writeSublayerStructure: n, ...r };
    let h = n;
    l.forEach((a) => {
      const u = a.write({}, m);
      p.push(u), h = h || a.originOf("visible") === "user";
    }), p.some((a) => Object.keys(a).length > 1) && (i.layers = p), h && (i.visibleLayers = l.filter((a) => a.visible).map((a) => a.id));
  }
  createExportImageParameters(e, i, y, r) {
    const l = r && r.pixelRatio || 1;
    e && this.version >= 10 && (e = e.clone().shiftCentralMeridian());
    const n = new H({ layer: this, floors: r == null ? void 0 : r.floors, scale: G({ extent: e, width: i }) * l }), p = n.toJSON();
    n.destroy();
    const m = !r || !r.rotation || this.version < 10.3 ? {} : { rotation: -r.rotation }, h = e && e.spatialReference, a = h.wkid || JSON.stringify(h.toJSON());
    p.dpi *= l;
    const u = {};
    if (r != null && r.timeExtent) {
      const { start: c, end: d } = r.timeExtent.toJSON();
      u.time = c && d && c === d ? "" + c : `${c ?? "null"},${d ?? "null"}`;
    } else
      this.timeInfo && !this.timeInfo.hasLiveData && (u.time = "null,null");
    return { bbox: e && e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax, bboxSR: a, imageSR: a, size: i + "," + y, ...p, ...m, ...u };
  }
  async fetchImage(e, i, y, r) {
    var l;
    const n = { responseType: "image", signal: (l = r == null ? void 0 : r.signal) != null ? l : null, query: { ...this.parsedUrl.query, ...this.createExportImageParameters(e, i, y, r), f: "image", ...this.refreshParameters, ...this.customParameters, token: this.apiKey } }, p = this.parsedUrl.path + "/export";
    return n.query.dynamicLayers != null && !this.capabilities.exportMap.supportsDynamicLayers ? Promise.reject(new f("mapimagelayer:dynamiclayer-not-supported", `service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`, { query: n.query })) : b(p, n).then((m) => m.data).catch((m) => {
      throw j(m) ? m : new f("mapimagelayer:image-fetch-error", `Unable to load image: ${p}`, { error: m });
    });
  }
  async fetchRecomputedExtents(e = {}) {
    const i = { ...e, query: { returnUpdates: !0, f: "json", ...this.customParameters, token: this.apiKey } }, { data: y } = await b(this.url, i), { extent: r, fullExtent: l, timeExtent: n } = y, p = r || l;
    return { fullExtent: p && J.fromJSON(p), timeExtent: n && U.fromJSON({ start: n[0], end: n[1] }) };
  }
  loadAll() {
    return q(this, (e) => {
      e(this.allSublayers);
    });
  }
  serviceSupportsSpatialReference(e) {
    return A(this, e);
  }
  async _fetchService(e) {
    if (this.sourceJSON)
      return void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    const { data: i, ssl: y } = await b(this.parsedUrl.path, { query: { f: "json", ...this.parsedUrl.query, ...this.customParameters, token: this.apiKey }, signal: e });
    y && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = i, this.read(i, { origin: "service", url: this.parsedUrl });
  }
};
s([o({ type: Boolean })], t.prototype, "datesInUnknownTimezone", void 0), s([o()], t.prototype, "dpi", void 0), s([o()], t.prototype, "gdbVersion", void 0), s([o()], t.prototype, "imageFormat", void 0), s([k("imageFormat", ["supportedImageFormatTypes"])], t.prototype, "readImageFormat", null), s([o({ json: { origins: { service: { read: { source: "maxImageHeight" } } } } })], t.prototype, "imageMaxHeight", void 0), s([o({ json: { origins: { service: { read: { source: "maxImageWidth" } } } } })], t.prototype, "imageMaxWidth", void 0), s([o()], t.prototype, "imageTransparency", void 0), s([o({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], t.prototype, "isReference", void 0), s([o({ json: { read: !1, write: !1 } })], t.prototype, "labelsVisible", void 0), s([o({ type: ["ArcGISMapServiceLayer"] })], t.prototype, "operationalLayerType", void 0), s([o({ json: { read: !1, write: !1 } })], t.prototype, "popupEnabled", void 0), s([o()], t.prototype, "sourceJSON", void 0), s([o({ json: { write: { ignoreOrigin: !0 } } })], t.prototype, "sublayers", void 0), s([z("sublayers", { layers: { type: [B] }, visibleLayers: { type: [D] } })], t.prototype, "writeSublayers", null), s([o({ type: ["show", "hide", "hide-children"] })], t.prototype, "listMode", void 0), s([o({ json: { read: !1 }, readOnly: !0, value: "map-image" })], t.prototype, "type", void 0), s([o(V)], t.prototype, "url", void 0), t = s([C("geoscene.layers.MapImageLayer")], t);
const ie = t;
export {
  ie as default
};

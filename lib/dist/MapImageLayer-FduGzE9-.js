import { ck as w, cM as $, co as I, cN as O, cm as T, cn as E, cp as M, cl as R, cO as P, cP as F, b0 as L, cq as N, cF as b, aI as g, ae as f, aC as j, cQ as q, cR as J, cS as U, H as v, d as k, a as i, b as n, cT as x, bl as A, cU as _, cu as V, c as z, ax as C, cV as H } from "./index-h53IWweP.js";
import { i as B } from "./scaleUtils-cblzwORW.js";
import { E as D, f as G, Y as K } from "./SublayersOwner-02DioN0B.js";
import { m as W } from "./ExportImageParameters-J_wM08jE.js";
import { t as Q } from "./imageBitmapUtils-bR4wSIen.js";
import { e as S } from "./sublayerUtils-dO-slOGX.js";
import "vue";
import "./QueryTask-3d1oJwlO.js";
import "./utils-QyFvT44r.js";
import "./executeForIds-i9bdbGYS.js";
import "./query-ePqQPCKo.js";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./pbfQueryUtils-72HutQeH.js";
import "./pbf-LwH3gq-e.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./executeQueryJSON-Lx88O8j6.js";
import "./executeQueryPBF-vYJWbr4Z.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./floorFilterUtils-EbR9s7nP.js";
let s = class extends w($(I(D(G(O(T(E(M(R(P(F(L(C))))))))))))) {
  constructor(...e) {
    super(...e), this.dateFieldsTimeReference = null, this.datesInUnknownTimezone = !1, this.dpi = 96, this.gdbVersion = null, this.imageFormat = "png24", this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = !0, this.isReference = null, this.labelsVisible = !1, this.operationalLayerType = "ArcGISMapServiceLayer", this.preferredTimeReference = null, this.sourceJSON = null, this.sublayers = null, this.type = "map-image", this.url = null;
  }
  normalizeCtorArgs(e, a) {
    return typeof e == "string" ? { url: e, ...a } : e;
  }
  load(e) {
    const a = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }, e).catch(N).then(() => this._fetchService(a))), Promise.resolve(this);
  }
  readImageFormat(e, a) {
    const l = a.supportedImageFormatTypes;
    return l && l.includes("PNG32") ? "png32" : "png24";
  }
  writeSublayers(e, a, l, t) {
    var h;
    if (!this.loaded || !e)
      return;
    const o = e.slice().reverse().flatten(({ sublayers: r }) => r && r.toArray().reverse()).toArray();
    let p = !1;
    if (this.capabilities && this.capabilities.operations.supportsExportMap && ((h = this.capabilities.exportMap) != null && h.supportsDynamicLayers)) {
      const r = b(t.origin);
      if (r === g.PORTAL_ITEM) {
        const m = this.createSublayersForOrigin("service").sublayers;
        p = S(o, m, g.SERVICE);
      } else if (r > g.PORTAL_ITEM) {
        const m = this.createSublayersForOrigin("portal-item");
        p = S(o, m.sublayers, b(m.origin));
      }
    }
    const c = [], d = { writeSublayerStructure: p, ...t };
    let y = p;
    o.forEach((r) => {
      const m = r.write({}, d);
      c.push(m), y = y || r.originOf("visible") === "user";
    }), c.some((r) => Object.keys(r).length > 1) && (a.layers = c), y && (a.visibleLayers = o.filter((r) => r.visible).map((r) => r.id));
  }
  createExportImageParameters(e, a, l, t) {
    const o = t && t.pixelRatio || 1;
    e && this.version >= 10 && (e = e.clone().shiftCentralMeridian());
    const p = new W({ layer: this, floors: t == null ? void 0 : t.floors, scale: B({ extent: e, width: a }) * o }), c = p.toJSON();
    p.destroy();
    const d = !t || !t.rotation || this.version < 10.3 ? {} : { rotation: -t.rotation }, y = e && e.spatialReference, h = y.wkid || JSON.stringify(y.toJSON());
    c.dpi *= o;
    const r = {};
    if (t != null && t.timeExtent) {
      const { start: m, end: u } = t.timeExtent.toJSON();
      r.time = m && u && m === u ? "" + m : `${m ?? "null"},${u ?? "null"}`;
    } else
      this.timeInfo && !this.timeInfo.hasLiveData && (r.time = "null,null");
    return { bbox: e && e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax, bboxSR: h, imageSR: h, size: a + "," + l, ...c, ...d, ...r };
  }
  async fetchImage(e, a, l, t) {
    const { data: o } = await this._fetchImage("image", e, a, l, t);
    return o;
  }
  async fetchImageBitmap(e, a, l, t) {
    const { data: o, url: p } = await this._fetchImage("blob", e, a, l, t);
    return Q(o, p, t == null ? void 0 : t.signal);
  }
  async fetchRecomputedExtents(e = {}) {
    const a = { ...e, query: { returnUpdates: !0, f: "json", ...this.customParameters, token: this.apiKey } }, { data: l } = await f(this.url, a), { extent: t, fullExtent: o, timeExtent: p } = l, c = t || o;
    return { fullExtent: c && j.fromJSON(c), timeExtent: p && q.fromJSON({ start: p[0], end: p[1] }) };
  }
  loadAll() {
    return J(this, (e) => {
      e(this.allSublayers);
    });
  }
  serviceSupportsSpatialReference(e) {
    return U(this, e);
  }
  async _fetchImage(e, a, l, t, o) {
    var d, y, h;
    const p = { responseType: e, signal: (o == null ? void 0 : o.signal) ?? null, query: { ...this.parsedUrl.query, ...this.createExportImageParameters(a, l, t, o), f: "image", ...this.refreshParameters, ...this.customParameters, token: this.apiKey } }, c = this.parsedUrl.path + "/export";
    if (((d = p.query) == null ? void 0 : d.dynamicLayers) != null && !((h = (y = this.capabilities) == null ? void 0 : y.exportMap) != null && h.supportsDynamicLayers))
      throw new v("mapimagelayer:dynamiclayer-not-supported", `service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`, { query: p.query });
    try {
      const { data: r } = await f(c, p);
      return { data: r, url: c };
    } catch (r) {
      throw k(r) ? r : new v("mapimagelayer:image-fetch-error", `Unable to load image: ${c}`, { error: r });
    }
  }
  async _fetchService(e) {
    if (this.sourceJSON)
      return void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    const { data: a, ssl: l } = await f(this.parsedUrl.path, { query: { f: "json", ...this.parsedUrl.query, ...this.customParameters, token: this.apiKey }, signal: e });
    l && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = a, this.read(a, { origin: "service", url: this.parsedUrl });
  }
};
i([n({ type: x })], s.prototype, "dateFieldsTimeReference", void 0), i([n({ type: Boolean })], s.prototype, "datesInUnknownTimezone", void 0), i([n()], s.prototype, "dpi", void 0), i([n()], s.prototype, "gdbVersion", void 0), i([n()], s.prototype, "imageFormat", void 0), i([A("imageFormat", ["supportedImageFormatTypes"])], s.prototype, "readImageFormat", null), i([n({ json: { origins: { service: { read: { source: "maxImageHeight" } } } } })], s.prototype, "imageMaxHeight", void 0), i([n({ json: { origins: { service: { read: { source: "maxImageWidth" } } } } })], s.prototype, "imageMaxWidth", void 0), i([n()], s.prototype, "imageTransparency", void 0), i([n({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], s.prototype, "isReference", void 0), i([n({ json: { read: !1, write: !1 } })], s.prototype, "labelsVisible", void 0), i([n({ type: ["ArcGISMapServiceLayer"] })], s.prototype, "operationalLayerType", void 0), i([n({ json: { read: !1, write: !1 } })], s.prototype, "popupEnabled", void 0), i([n({ type: x })], s.prototype, "preferredTimeReference", void 0), i([n()], s.prototype, "sourceJSON", void 0), i([n({ json: { write: { ignoreOrigin: !0 } } })], s.prototype, "sublayers", void 0), i([_("sublayers", { layers: { type: [K] }, visibleLayers: { type: [H] } })], s.prototype, "writeSublayers", null), i([n({ type: ["show", "hide", "hide-children"] })], s.prototype, "listMode", void 0), i([n({ json: { read: !1 }, readOnly: !0, value: "map-image" })], s.prototype, "type", void 0), i([n(V)], s.prototype, "url", void 0), s = i([z("geoscene.layers.MapImageLayer")], s);
const be = s;
export {
  be as default
};

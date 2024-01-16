import { a as t, b as s, c as b, bk as T, eP as P, eQ as F, ck as k, cM as D, co as O, cl as C, cN as E, cm as N, cn as U, cp as _, cP as L, a9 as I, H as d, cq as A, eR as u, fi as M, s as V, fj as G, eL as m, dX as J, eT as W, aD as z, ae as q, cW as Q, eS as X, aw as H, fk as K, aC as Z, eV as B, eW as Y, eX as ee, ct as te, cV as f, fl as ie, fm as se, eZ as re, k as oe, e_ as ne, e$ as ae, bl as g, f0 as le, cu as pe, f3 as de, ax as ce } from "./index-O2RTvw_o.js";
import "vue";
var h;
let l = h = class extends T {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new h({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
t([s({ type: Number, json: { write: !0 } })], l.prototype, "age", void 0), t([s({ type: Number, json: { write: !0 } })], l.prototype, "ageReceived", void 0), t([s({ type: Number, json: { write: !0 } })], l.prototype, "displayCount", void 0), t([s({ type: Number, json: { write: !0 } })], l.prototype, "maxObservations", void 0), l = h = t([b("geoscene.layers.support.PurgeOptions")], l);
const S = l, v = de();
function w(e, r) {
  return new d("layer:unsupported", `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`, { layer: e });
}
let i = class extends P(F(k(D(O(C(E(N(U(_(L(ce))))))))))) {
  constructor(...e) {
    super(...e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.popupEnabled = !0, this.popupTemplate = null, this.purgeOptions = new S(), this.refreshInterval = 0, this.screenSizePerspectiveEnabled = !0, this.sourceJSON = null, this.spatialReference = I.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.useViewTime = !0, this.webSocketUrl = null;
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  load(e) {
    if (!("WebSocket" in globalThis))
      return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const r = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, e).catch(A).then(() => this._fetchService(r))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e) {
    const r = this._normalizeFeatureReduction(e);
    this._set("featureReduction", r);
  }
  set renderer(e) {
    u(e, this.fieldsIndex), this._set("renderer", e);
  }
  readRenderer(e, r, o) {
    var n;
    r = r.layerDefinition || r;
    const a = (n = r.drawingInfo) == null ? void 0 : n.renderer;
    if (a) {
      const p = M(a, r, o) || void 0;
      return p || V.getLogger(this).error("Failed to create renderer", { rendererDefinition: r.drawingInfo.renderer, layer: this, context: o }), p;
    }
    return G(r, o);
  }
  async connect(e) {
    const [{ createConnection: r }] = await Promise.all([import("./createConnection-fspAdMDz.js"), this.load()]), o = this.geometryType ? m.toJSON(this.geometryType) : null, { customParameters: a = null, definitionExpression: n = null, geometryDefinition: p = null, maxReconnectionAttempts: x = 0, maxReconnectionInterval: $ = 20, spatialReference: R = this.spatialReference } = e || this.createConnectionParameters(), c = r(this.parsedUrl, this.spatialReference, R, o, { geometry: p, where: n }, x, $, a ?? void 0), j = J([this.on("send-message-to-socket", (y) => c.sendMessageToSocket(y)), this.on("send-message-to-client", (y) => c.sendMessageToClient(y))]);
    return c.once("destroy", j.remove), c;
  }
  createConnectionParameters() {
    return { spatialReference: this.spatialReference, customParameters: this.customParameters, definitionExpression: this.definitionExpression, geometryDefinition: this.geometryDefinition, maxReconnectionAttempts: this.maxReconnectionAttempts, maxReconnectionInterval: this.maxReconnectionInterval };
  }
  createPopupTemplate(e) {
    return W(this, e);
  }
  createQuery() {
    const e = new z();
    return e.returnGeometry = !0, e.outFields = ["*"], e.where = this.definitionExpression || "1=1", e;
  }
  getFieldDomain(e, r) {
    if (!this.fields)
      return null;
    let o = null;
    return this.fields.some((a) => (a.name === e && (o = a.domain), !!o)), o;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  serviceSupportsSpatialReference(e) {
    return !0;
  }
  sendMessageToSocket(e) {
    this.emit("send-message-to-socket", e);
  }
  sendMessageToClient(e) {
    this.emit("send-message-to-client", e);
  }
  write(e, r) {
    const o = r == null ? void 0 : r.messages;
    return this.webSocketUrl ? (o == null || o.push(w(this, "using a custom websocket connection cannot be written to web scenes and web maps")), null) : this.parsedUrl ? super.write(e, r) : (o == null || o.push(w(this, "using a client-side only connection without a url cannot be written to web scenes and web maps")), null);
  }
  async _fetchService(e) {
    var r, o, a;
    if (!this.webSocketUrl && this.parsedUrl) {
      if (!this.sourceJSON) {
        const { data: n } = await q(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, ...this.parsedUrl.query }, responseType: "json", signal: e });
        this.sourceJSON = n;
      }
    } else {
      if (!((r = this.timeInfo) != null && r.trackIdField))
        throw new d("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
      if (!this.objectIdField) {
        const n = (o = this.fields.find((p) => p.type === "oid")) == null ? void 0 : o.name;
        if (!n)
          throw new d("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
        this.objectIdField = n;
      }
      if (!this.fields)
        throw new d("stream-layer:missing-metadata", "The stream layer fields must be specified.");
      if (this.fields.some((n) => n.name === this.objectIdField) || this.fields.push(new Q({ name: this.objectIdField, alias: this.objectIdField, type: "oid" })), !this.geometryType)
        throw new d("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
      this.webSocketUrl && (this.url = this.webSocketUrl);
    }
    return this.read(this.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: (a = this.portalItem) == null ? void 0 : a.portal, url: this.parsedUrl }), u(this.renderer, this.fieldsIndex), X(this.timeInfo, this.fieldsIndex), this.objectIdField || (this.objectIdField = "__esri_stream_id__"), H(this, { origin: "service" });
  }
};
t([s({ type: String })], i.prototype, "copyright", void 0), t([s({ readOnly: !0 })], i.prototype, "defaultPopupTemplate", null), t([s({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), t([s({ type: String })], i.prototype, "displayField", void 0), t([s({ type: K })], i.prototype, "elevationInfo", void 0), t([s({ json: { origins: { "web-map": { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-scene": { read: !1, write: !1 } } } })], i.prototype, "featureReduction", null), t([s(v.fields)], i.prototype, "fields", void 0), t([s(v.fieldsIndex)], i.prototype, "fieldsIndex", void 0), t([s({ type: Z, json: { name: "layerDefinition.definitionGeometry", write: !0 } })], i.prototype, "geometryDefinition", void 0), t([s({ type: m.apiValues, json: { read: { reader: m.read } } })], i.prototype, "geometryType", void 0), t([s(B)], i.prototype, "labelsVisible", void 0), t([s({ type: [Y], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo", reader: ee }, write: { target: "layerDefinition.drawingInfo.labelingInfo" } } })], i.prototype, "labelingInfo", void 0), t([s(te)], i.prototype, "legendEnabled", void 0), t([s({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), t([s({ type: f })], i.prototype, "maxReconnectionAttempts", void 0), t([s({ type: f })], i.prototype, "maxReconnectionInterval", void 0), t([s(ie)], i.prototype, "maxScale", void 0), t([s(se)], i.prototype, "minScale", void 0), t([s({ type: String })], i.prototype, "objectIdField", void 0), t([s({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], i.prototype, "operationalLayerType", void 0), t([s(re)], i.prototype, "popupEnabled", void 0), t([s({ type: oe, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), t([s({ type: S })], i.prototype, "purgeOptions", void 0), t([s({ json: { read: !1, write: !1 } })], i.prototype, "refreshInterval", void 0), t([s({ types: ne, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: !1 } }, "web-scene": { name: "layerDefinition.drawingInfo.renderer", types: ae, write: !0 } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], i.prototype, "renderer", null), t([g("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), g("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], i.prototype, "readRenderer", null), t([s(le)], i.prototype, "screenSizePerspectiveEnabled", void 0), t([s()], i.prototype, "sourceJSON", void 0), t([s({ type: I, json: { origins: { service: { read: { source: "spatialReference" } } } } })], i.prototype, "spatialReference", void 0), t([s({ json: { read: !1 } })], i.prototype, "type", void 0), t([s(pe)], i.prototype, "url", void 0), t([s({ type: Number })], i.prototype, "updateInterval", void 0), t([s({ json: { read: !1, write: !1 } })], i.prototype, "useViewTime", void 0), t([s({ type: String })], i.prototype, "webSocketUrl", void 0), i = t([b("geoscene.layers.StreamLayer")], i);
const he = i;
export {
  he as default
};
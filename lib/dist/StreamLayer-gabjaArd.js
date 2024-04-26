import { e, d as i, a as g, aD as w, s as S, dN as I, bt as $, bQ as x, bu as j, bF as T, bR as R, bv as F, bw as O, bz as P, bT as N, m as v, y as p, r as D, bG as E, dO as u, eh as k, ei as _, p as L, dQ as J, dI as U, C, dP as A, df as G, ej as V, dS as z, M, dH as c, dT as W, dU as q, dV as Q, bJ as B, bW as m, ek as X, el as Y, dX as Z, B as H, dY as K, dZ as ee, aE as h, d_ as te, bK as ie, em as re, en as se, e1 as oe, bE as ae } from "./index-Ek1MTSEY.js";
import "vue";
var y;
let n = y = class extends w {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new y({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
e([i({ type: Number, json: { write: !0 } })], n.prototype, "age", void 0), e([i({ type: Number, json: { write: !0 } })], n.prototype, "ageReceived", void 0), e([i({ type: Number, json: { write: !0 } })], n.prototype, "displayCount", void 0), e([i({ type: Number, json: { write: !0 } })], n.prototype, "maxObservations", void 0), n = y = e([g("geoscene.layers.support.PurgeOptions")], n);
const b = n, ne = S.getLogger("geoscene.layers.StreamLayer"), f = oe();
let t = class extends I($(x(j(T(R(F(O(P(N(ae)))))))))) {
  constructor(...r) {
    super(...r), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.featureReduction = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.popupEnabled = !0, this.popupTemplate = null, this.purgeOptions = new b(), this.screenSizePerspectiveEnabled = !0, this.sourceJSON = null, this.spatialReference = v.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.webSocketUrl = null;
  }
  normalizeCtorArgs(r, s) {
    return typeof r == "string" ? { url: r, ...s } : r;
  }
  load(r) {
    if (!("WebSocket" in globalThis))
      return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const s = D(r) ? r.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, r).catch(E).then(() => this._fetchService(s))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(r) {
    u(r, this.fieldsIndex), this._set("renderer", r);
  }
  readRenderer(r, s, o) {
    const a = (s = s.layerDefinition || s).drawingInfo && s.drawingInfo.renderer || void 0;
    if (a) {
      const l = k(a, s, o) || void 0;
      return l || ne.error("Failed to create renderer", { rendererDefinition: s.drawingInfo.renderer, layer: this, context: o }), l;
    }
    if (s.defaultSymbol)
      return s.types && s.types.length ? new _({ defaultSymbol: d(s.defaultSymbol, s, o), field: s.typeIdField, uniqueValueInfos: s.types.map((l) => ({ id: l.id, symbol: d(l.symbol, l, o) })) }) : new L({ symbol: d(s.defaultSymbol, s, o) });
  }
  createPopupTemplate(r) {
    return J(this, r);
  }
  createQuery() {
    const r = new U();
    return r.returnGeometry = !0, r.outFields = ["*"], r.where = this.definitionExpression || "1=1", r;
  }
  getFieldDomain(r, s) {
    if (!this.fields)
      return null;
    let o = null;
    return this.fields.some((a) => (a.name === r && (o = a.domain), !!o)), o;
  }
  getField(r) {
    return this.fieldsIndex.get(r);
  }
  serviceSupportsSpatialReference(r) {
    return !0;
  }
  async _fetchService(r) {
    var s;
    if (this.webSocketUrl) {
      var o;
      if ((o = this.timeInfo) == null || !o.trackIdField)
        throw new p("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
      if (!this.objectIdField)
        throw new p("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
      if (!this.fields)
        throw new p("stream-layer:missing-metadata", "The stream layer fields must be specified.");
      if (!this.geometryType)
        throw new p("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
      this.url = this.webSocketUrl;
    } else if (!this.sourceJSON) {
      const { data: a } = await C(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, ...this.parsedUrl.query }, responseType: "json", signal: r });
      this.sourceJSON = a;
    }
    return this.sourceJSON = { ...(s = this.sourceJSON) != null ? s : {}, objectIdField: "__esri_stream_id__" }, this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl }), u(this.renderer, this.fieldsIndex), A(this.timeInfo, this.fieldsIndex), G(this, { origin: "service" });
  }
};
e([i({ type: String })], t.prototype, "copyright", void 0), e([i({ readOnly: !0 })], t.prototype, "defaultPopupTemplate", null), e([i({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], t.prototype, "definitionExpression", void 0), e([i({ type: String })], t.prototype, "displayField", void 0), e([i({ type: V })], t.prototype, "elevationInfo", void 0), e([i(z)], t.prototype, "featureReduction", void 0), e([i(f.fields)], t.prototype, "fields", void 0), e([i(f.fieldsIndex)], t.prototype, "fieldsIndex", void 0), e([i({ type: M })], t.prototype, "geometryDefinition", void 0), e([i({ type: c.apiValues, json: { read: { reader: c.read } } })], t.prototype, "geometryType", void 0), e([i(W)], t.prototype, "labelsVisible", void 0), e([i({ type: [q], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo", reader: Q }, write: { target: "layerDefinition.drawingInfo.labelingInfo" } } })], t.prototype, "labelingInfo", void 0), e([i(B)], t.prototype, "legendEnabled", void 0), e([i({ type: ["show", "hide"] })], t.prototype, "listMode", void 0), e([i({ type: m })], t.prototype, "maxReconnectionAttempts", void 0), e([i({ type: m })], t.prototype, "maxReconnectionInterval", void 0), e([i(X)], t.prototype, "maxScale", void 0), e([i(Y)], t.prototype, "minScale", void 0), e([i({ type: String })], t.prototype, "objectIdField", void 0), e([i({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], t.prototype, "operationalLayerType", void 0), e([i(Z)], t.prototype, "popupEnabled", void 0), e([i({ type: H, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], t.prototype, "popupTemplate", void 0), e([i({ type: b })], t.prototype, "purgeOptions", void 0), e([i({ types: K, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: !1 } }, "web-scene": { name: "layerDefinition.drawingInfo.renderer", types: ee, write: !0 } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], t.prototype, "renderer", null), e([h("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), h("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], t.prototype, "readRenderer", null), e([i(te)], t.prototype, "screenSizePerspectiveEnabled", void 0), e([i()], t.prototype, "sourceJSON", void 0), e([i({ type: v, json: { origins: { service: { read: { source: "spatialReference" } } } } })], t.prototype, "spatialReference", void 0), e([i({ json: { read: !1 } })], t.prototype, "type", void 0), e([i(ie)], t.prototype, "url", void 0), e([i({ type: Number })], t.prototype, "updateInterval", void 0), e([i({ type: String })], t.prototype, "webSocketUrl", void 0), t = e([g("geoscene.layers.StreamLayer")], t);
const d = re({ types: se }), de = t;
export {
  de as default
};

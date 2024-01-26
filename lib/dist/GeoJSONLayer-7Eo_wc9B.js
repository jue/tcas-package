import { s as j, e as r, d as s, a as b, W as N, X as $, r as O, x as w, M as I, y as m, l as J, ac as R, cV as q, Z as P, dH as S, dM as T, bT as k, dN as D, bt as Q, bQ as Z, bu as G, bF as z, bv as L, bz as V, m as F, dO as f, dP as C, R as g, dQ as B, dI as h, dR as U, dS as W, bY as M, bI as A, dT as X, dU as Y, dV as H, bJ as K, dW as ee, dX as te, B as re, dY as se, dZ as ie, d_ as oe, d$ as ne, e0 as ae, bK as le, e1 as ue, bE as de } from "./index-j1oaLRcp.js";
import { c as pe } from "./clientSideDefaults-ZvpGx7fH.js";
import "vue";
import "./QueryEngineCapabilities-gmxC9I6i.js";
const v = j.getLogger("geoscene.layers.graphics.sources.GeoJSONSource");
let p = class extends N {
  constructor() {
    super(...arguments), this.type = "geojson", this.refresh = $(async (e) => {
      await this.load();
      const { extent: t, timeExtent: i } = await this._connection.invoke("refresh", e);
      return this.sourceJSON.extent = t, i && (this.sourceJSON.timeInfo.timeExtent = [i.start, i.end]), { dataChanged: !0, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e) {
    const t = O(e) ? e.signal : null;
    return this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this);
  }
  destroy() {
    var e;
    (e = this._connection) == null || e.close(), this._connection = null;
  }
  applyEdits(e) {
    return this.load().then(() => this._applyEdits(e));
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  queryFeatures(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)).then((i) => w.fromJSON(i));
  }
  queryFeaturesJSON(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t));
  }
  queryFeatureCount(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t));
  }
  queryObjectIds(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t));
  }
  queryExtent(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryExtent", e ? e.toJSON() : null, t)).then((i) => ({ count: i.count, extent: I.fromJSON(i.extent) }));
  }
  querySnapping(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("querySnapping", e, t));
  }
  _applyEdits(e) {
    if (!this._connection)
      throw new m("geojson-layer-source:edit-failure", "Memory source not loaded");
    const t = this.layer.objectIdField, i = [], n = [], d = [];
    if (e.addFeatures)
      for (const a of e.addFeatures)
        i.push(this._serializeFeature(a));
    if (e.deleteFeatures)
      for (const a of e.deleteFeatures)
        "objectId" in a && a.objectId != null ? n.push(a.objectId) : "attributes" in a && a.attributes[t] != null && n.push(a.attributes[t]);
    if (e.updateFeatures)
      for (const a of e.updateFeatures)
        d.push(this._serializeFeature(a));
    return this._connection.invoke("applyEdits", { adds: i, updates: d, deletes: n }).then(({ extent: a, timeExtent: l, featureEditResults: u }) => (this.sourceJSON.extent = a, l && (this.sourceJSON.timeInfo.timeExtent = [l.start, l.end]), this._createEditsResult(u)));
  }
  _createEditsResult(e) {
    return { addFeatureResults: e.addResults ? e.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: e.updateResults ? e.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: e.deleteResults ? e.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] };
  }
  _createFeatureEditResult(e) {
    const t = e.success === !0 ? null : e.error || { code: void 0, description: void 0 };
    return { objectId: e.objectId, globalId: e.globalId, error: t ? new m("geojson-layer-source:edit-failure", t.description, { code: t.code }) : null };
  }
  _serializeFeature(e) {
    const { attributes: t } = e, i = this._geometryForSerialization(e);
    return i ? { geometry: i.toJSON(), attributes: t } : { attributes: t };
  }
  _geometryForSerialization(e) {
    const { geometry: t } = e;
    return J(t) ? null : t.type === "mesh" || t.type === "extent" ? R.fromExtent(t.extent) : t;
  }
  async _startWorker(e) {
    this._connection = await q("GeoJSONSourceWorker", { strategy: P("feature-layers-workers") ? "dedicated" : "local", signal: e });
    const { fields: t, spatialReference: i, hasZ: n, geometryType: d, objectIdField: a, url: l, timeInfo: u, customParameters: E } = this.layer, x = this.layer.originOf("spatialReference") === "defaults", _ = { url: l, customParameters: E, fields: t && t.map((y) => y.toJSON()), geometryType: S.toJSON(d), hasZ: n, objectIdField: a, timeInfo: u ? u.toJSON() : null, spatialReference: x ? null : i && i.toJSON() }, c = await this._connection.invoke("load", _, { signal: e });
    for (const y of c.warnings)
      v.warn(y.message, { layer: this.layer, warning: y });
    c.featureErrors.length && v.warn(`Encountered ${c.featureErrors.length} validation errors while loading features`, c.featureErrors), this.sourceJSON = c.layerDefinition, this.capabilities = pe(this.sourceJSON.hasZ, !0);
  }
};
r([s()], p.prototype, "capabilities", void 0), r([s()], p.prototype, "type", void 0), r([s({ constructOnly: !0 })], p.prototype, "layer", void 0), r([s()], p.prototype, "sourceJSON", void 0), p = r([b("geoscene.layers.graphics.sources.GeoJSONSource")], p);
const ce = p, he = ue();
let o = class extends T(k(D(Q(Z(G(z(L(V(de))))))))) {
  constructor(e) {
    super(e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.editingEnabled = !1, this.elevationInfo = null, this.featureReduction = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "GeoJSON", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new ce({ layer: this }), this.spatialReference = F.WGS84, this.templates = null, this.title = "GeoJSON", this.type = "geojson", this.typeIdField = null, this.types = null;
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy();
  }
  load(e) {
    return this.addResolvingPromise(this.source.load(e).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo"], "service"), f(this.renderer, this.fieldsIndex), C(this.timeInfo, this.fieldsIndex);
    })), Promise.resolve(this);
  }
  get capabilities() {
    return this.source ? this.source.capabilities : null;
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  get parsedUrl() {
    return this.url ? g(this.url) : null;
  }
  set renderer(e) {
    f(e, this.fieldsIndex), this._set("renderer", e);
  }
  set url(e) {
    if (!e)
      return void this._set("url", e);
    const t = g(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async applyEdits(e, t) {
    const i = await import("./editingSupport-QxeuZxsb.js");
    await this.load();
    const n = await i.applyEdits(this, this.source, e, t);
    return this.read({ extent: this.source.sourceJSON.extent, timeInfo: this.source.sourceJSON.timeInfo }, { origin: "service", ignoreDefaults: !0 }), n;
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return B(this, e);
  }
  createQuery() {
    const e = new h(), t = this.get("capabilities.data");
    e.returnGeometry = !0, t && t.supportsZ && (e.returnZ = !0), e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
    const { timeOffset: i, timeExtent: n } = this;
    return e.timeExtent = i != null && n != null ? n.offset(-i.value, i.unit) : n || null, e;
  }
  getFieldDomain(e, t) {
    let i, n = !1;
    const d = t && t.feature, a = d && d.attributes, l = this.typeIdField && a && a[this.typeIdField];
    return l != null && this.types && (n = this.types.some((u) => u.id == l && (i = u.domains && u.domains[e], i && i.type === "inherited" && (i = this._getLayerDomain(e)), !0))), n || i || (i = this._getLayerDomain(e)), i;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(h.from(e) || this.createQuery(), t)).then((i) => {
      if (i != null && i.features)
        for (const n of i.features)
          n.layer = n.sourceLayer = this;
      return i;
    });
  }
  queryObjectIds(e, t) {
    return this.load().then(() => this.source.queryObjectIds(h.from(e) || this.createQuery(), t));
  }
  queryFeatureCount(e, t) {
    return this.load().then(() => this.source.queryFeatureCount(h.from(e) || this.createQuery(), t));
  }
  queryExtent(e, t) {
    return this.load().then(() => this.source.queryExtent(h.from(e) || this.createQuery(), t));
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(this.customParameters);
      return O(t) && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
  _getLayerDomain(e) {
    if (!this.fields)
      return null;
    let t = null;
    return this.fields.some((i) => (i.name === e && (t = i.domain), !!t)), t;
  }
};
r([s({ readOnly: !0, json: { read: !1, write: !1 } })], o.prototype, "capabilities", null), r([s({ type: String })], o.prototype, "copyright", void 0), r([s({ readOnly: !0 })], o.prototype, "createQueryVersion", null), r([s({ readOnly: !0 })], o.prototype, "defaultPopupTemplate", null), r([s({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], o.prototype, "definitionExpression", void 0), r([s({ type: String })], o.prototype, "displayField", void 0), r([s({ type: Boolean })], o.prototype, "editingEnabled", void 0), r([s(U)], o.prototype, "elevationInfo", void 0), r([s(W)], o.prototype, "featureReduction", void 0), r([s({ type: [M], json: { name: "layerDefinition.fields", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "fields" } } } })], o.prototype, "fields", void 0), r([s(he.fieldsIndex)], o.prototype, "fieldsIndex", void 0), r([s({ type: I, json: { name: "extent" } })], o.prototype, "fullExtent", void 0), r([s({ type: ["point", "polygon", "polyline", "multipoint"], json: { read: { reader: S.read } } })], o.prototype, "geometryType", void 0), r([s({ type: Boolean })], o.prototype, "hasZ", void 0), r([s(A)], o.prototype, "id", void 0), r([s({ type: Boolean, readOnly: !0 })], o.prototype, "isTable", null), r([s(X)], o.prototype, "labelsVisible", void 0), r([s({ type: [Y], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: H }, write: !0 } })], o.prototype, "labelingInfo", void 0), r([s(K)], o.prototype, "legendEnabled", void 0), r([s({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), r([s({ type: String, json: { name: "layerDefinition.objectIdField", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "objectIdField" } } } })], o.prototype, "objectIdField", void 0), r([s(ee)], o.prototype, "opacity", void 0), r([s({ type: ["GeoJSON"] })], o.prototype, "operationalLayerType", void 0), r([s({ readOnly: !0 })], o.prototype, "parsedUrl", null), r([s(te)], o.prototype, "popupEnabled", void 0), r([s({ type: re, json: { name: "popupInfo", write: !0 } })], o.prototype, "popupTemplate", void 0), r([s({ types: se, json: { name: "layerDefinition.drawingInfo.renderer", write: !0, origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: ie } } } })], o.prototype, "renderer", null), r([s(oe)], o.prototype, "screenSizePerspectiveEnabled", void 0), r([s({ readOnly: !0 })], o.prototype, "source", void 0), r([s({ type: F })], o.prototype, "spatialReference", void 0), r([s({ type: [ne] })], o.prototype, "templates", void 0), r([s()], o.prototype, "title", void 0), r([s({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0), r([s({ type: String, readOnly: !0 })], o.prototype, "typeIdField", void 0), r([s({ type: [ae] })], o.prototype, "types", void 0), r([s(le)], o.prototype, "url", null), o = r([b("geoscene.layers.GeoJSONLayer")], o);
const ve = o;
export {
  ve as default
};

import { s as j, a as s, b as i, c as b, e4 as w, M as $, g as J, aC as O, H as f, aA as N, dK as R, z as q, eL as I, eO as P, cP as T, eP as k, eQ as D, ck as L, cM as C, co as G, cl as Q, cm as Z, cn as z, cp as M, a9 as F, cq as V, eR as m, eS as W, L as g, eT as U, aD as h, eU as A, cW as B, cs as H, eV as K, eW as X, eX as Y, ct as ee, eY as te, eZ as se, k as re, e_ as ie, e$ as oe, f0 as ne, f1 as ae, f2 as le, cu as ue, f3 as de, ax as pe } from "./index-HxXrdrYt.js";
import { c as ce } from "./clientSideDefaults-LEIIpsqg.js";
import "vue";
import "./QueryEngineCapabilities-gkC_bzZo.js";
const S = "geoscene.layers.graphics.sources.GeoJSONSource", v = j.getLogger(S);
let p = class extends w {
  constructor() {
    super(...arguments), this.type = "geojson", this.refresh = $(async (e) => {
      await this.load();
      const { extent: t, timeExtent: r } = await this._connection.invoke("refresh", e);
      return this.sourceJSON.extent = t, r && (this.sourceJSON.timeInfo.timeExtent = [r.start, r.end]), { dataChanged: !0, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e) {
    const t = e != null ? e.signal : null;
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
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)).then((r) => J.fromJSON(r));
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
    return this.load(t).then(() => this._connection.invoke("queryExtent", e ? e.toJSON() : null, t)).then((r) => ({ count: r.count, extent: O.fromJSON(r.extent) }));
  }
  querySnapping(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("querySnapping", e, t));
  }
  _applyEdits(e) {
    if (!this._connection)
      throw new f("geojson-layer-source:edit-failure", "Memory source not loaded");
    const t = this.layer.objectIdField, r = [], n = [], d = [];
    if (e.addFeatures)
      for (const a of e.addFeatures)
        r.push(this._serializeFeature(a));
    if (e.deleteFeatures)
      for (const a of e.deleteFeatures)
        "objectId" in a && a.objectId != null ? n.push(a.objectId) : "attributes" in a && a.attributes[t] != null && n.push(a.attributes[t]);
    if (e.updateFeatures)
      for (const a of e.updateFeatures)
        d.push(this._serializeFeature(a));
    return this._connection.invoke("applyEdits", { adds: r, updates: d, deletes: n }).then(({ extent: a, timeExtent: l, featureEditResults: u }) => (this.sourceJSON.extent = a, l && (this.sourceJSON.timeInfo.timeExtent = [l.start, l.end]), this._createEditsResult(u)));
  }
  _createEditsResult(e) {
    return { addFeatureResults: e.addResults ? e.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: e.updateResults ? e.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: e.deleteResults ? e.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] };
  }
  _createFeatureEditResult(e) {
    const t = e.success === !0 ? null : e.error || { code: void 0, description: void 0 };
    return { objectId: e.objectId, globalId: e.globalId, error: t ? new f("geojson-layer-source:edit-failure", t.description, { code: t.code }) : null };
  }
  _serializeFeature(e) {
    const { attributes: t } = e, r = this._geometryForSerialization(e);
    return r ? { geometry: r.toJSON(), attributes: t } : { attributes: t };
  }
  _geometryForSerialization(e) {
    const { geometry: t } = e;
    return t == null ? null : t.type === "mesh" || t.type === "extent" ? N.fromExtent(t.extent) : t;
  }
  async _startWorker(e) {
    this._connection = await R("GeoJSONSourceWorker", { strategy: q("feature-layers-workers") ? "dedicated" : "local", signal: e });
    const { fields: t, spatialReference: r, hasZ: n, geometryType: d, objectIdField: a, url: l, timeInfo: u, customParameters: E } = this.layer, x = this.layer.originOf("spatialReference") === "defaults", _ = { url: l, customParameters: E, fields: t && t.map((y) => y.toJSON()), geometryType: I.toJSON(d), hasZ: n, objectIdField: a, timeInfo: u ? u.toJSON() : null, spatialReference: x ? null : r && r.toJSON() }, c = await this._connection.invoke("load", _, { signal: e });
    for (const y of c.warnings)
      v.warn(y.message, { layer: this.layer, warning: y });
    c.featureErrors.length && v.warn(`Encountered ${c.featureErrors.length} validation errors while loading features`, c.featureErrors), this.sourceJSON = c.layerDefinition, this.capabilities = ce(this.sourceJSON.hasZ, !0);
  }
};
s([i()], p.prototype, "capabilities", void 0), s([i()], p.prototype, "type", void 0), s([i({ constructOnly: !0 })], p.prototype, "layer", void 0), s([i()], p.prototype, "sourceJSON", void 0), p = s([b(S)], p);
const he = de();
let o = class extends P(T(k(D(L(C(G(Q(Z(z(M(pe))))))))))) {
  constructor(e) {
    super(e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.editingEnabled = !1, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "GeoJSON", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new p({ layer: this }), this.spatialReference = F.WGS84, this.templates = null, this.title = "GeoJSON", this.type = "geojson", this.typeIdField = null, this.types = null;
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy();
  }
  load(e) {
    const t = this.loadFromPortal({ supportedTypes: ["GeoJson"], supportsData: !1 }, e).catch(V).then(() => this.source.load(e)).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo"], "service"), m(this.renderer, this.fieldsIndex), W(this.timeInfo, this.fieldsIndex);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
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
    m(e, this.fieldsIndex), this._set("renderer", e);
  }
  set url(e) {
    if (!e)
      return void this._set("url", e);
    const t = g(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async applyEdits(e, t) {
    const { applyEdits: r } = await import("./editingSupport-PxOoFvdj.js");
    await this.load();
    const n = await r(this, this.source, e, t);
    return this.read({ extent: this.source.sourceJSON.extent, timeInfo: this.source.sourceJSON.timeInfo }, { origin: "service", ignoreDefaults: !0 }), n;
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return U(this, e);
  }
  createQuery() {
    const e = new h(), t = this.get("capabilities.data");
    e.returnGeometry = !0, t && t.supportsZ && (e.returnZ = !0), e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
    const { timeOffset: r, timeExtent: n } = this;
    return e.timeExtent = r != null && n != null ? n.offset(-r.value, r.unit) : n || null, e;
  }
  getFieldDomain(e, t) {
    let r, n = !1;
    const d = t && t.feature, a = d && d.attributes, l = this.typeIdField && a && a[this.typeIdField];
    return l != null && this.types && (n = this.types.some((u) => u.id == l && (r = u.domains && u.domains[e], r && r.type === "inherited" && (r = this._getLayerDomain(e)), !0))), n || r || (r = this._getLayerDomain(e)), r;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(h.from(e) || this.createQuery(), t)).then((r) => {
      if (r != null && r.features)
        for (const n of r.features)
          n.layer = n.sourceLayer = this;
      return r;
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
      return t != null && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
  _getLayerDomain(e) {
    if (!this.fields)
      return null;
    let t = null;
    return this.fields.some((r) => (r.name === e && (t = r.domain), !!t)), t;
  }
};
s([i({ readOnly: !0, json: { read: !1, write: !1 } })], o.prototype, "capabilities", null), s([i({ type: String })], o.prototype, "copyright", void 0), s([i({ readOnly: !0 })], o.prototype, "createQueryVersion", null), s([i({ readOnly: !0 })], o.prototype, "defaultPopupTemplate", null), s([i({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], o.prototype, "definitionExpression", void 0), s([i({ type: String })], o.prototype, "displayField", void 0), s([i({ type: Boolean })], o.prototype, "editingEnabled", void 0), s([i(A)], o.prototype, "elevationInfo", void 0), s([i({ type: [B], json: { name: "layerDefinition.fields", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "fields" } } } })], o.prototype, "fields", void 0), s([i(he.fieldsIndex)], o.prototype, "fieldsIndex", void 0), s([i({ type: O, json: { name: "extent" } })], o.prototype, "fullExtent", void 0), s([i({ type: ["point", "polygon", "polyline", "multipoint"], json: { read: { reader: I.read } } })], o.prototype, "geometryType", void 0), s([i({ type: Boolean })], o.prototype, "hasZ", void 0), s([i(H)], o.prototype, "id", void 0), s([i({ type: Boolean, readOnly: !0 })], o.prototype, "isTable", null), s([i(K)], o.prototype, "labelsVisible", void 0), s([i({ type: [X], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: Y }, write: !0 } })], o.prototype, "labelingInfo", void 0), s([i(ee)], o.prototype, "legendEnabled", void 0), s([i({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), s([i({ type: String, json: { name: "layerDefinition.objectIdField", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "objectIdField" } } } })], o.prototype, "objectIdField", void 0), s([i(te)], o.prototype, "opacity", void 0), s([i({ type: ["GeoJSON"] })], o.prototype, "operationalLayerType", void 0), s([i({ readOnly: !0 })], o.prototype, "parsedUrl", null), s([i(se)], o.prototype, "popupEnabled", void 0), s([i({ type: re, json: { name: "popupInfo", write: !0 } })], o.prototype, "popupTemplate", void 0), s([i({ types: ie, json: { name: "layerDefinition.drawingInfo.renderer", write: !0, origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: oe } } } })], o.prototype, "renderer", null), s([i(ne)], o.prototype, "screenSizePerspectiveEnabled", void 0), s([i({ readOnly: !0 })], o.prototype, "source", void 0), s([i({ type: F })], o.prototype, "spatialReference", void 0), s([i({ type: [ae] })], o.prototype, "templates", void 0), s([i()], o.prototype, "title", void 0), s([i({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0), s([i({ type: String, readOnly: !0 })], o.prototype, "typeIdField", void 0), s([i({ type: [le] })], o.prototype, "types", void 0), s([i(ue)], o.prototype, "url", null), o = s([b("geoscene.layers.GeoJSONLayer")], o);
const ve = o;
export {
  ve as default
};

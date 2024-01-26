import { a as s, b as o, c as D, e4 as B, g as L, a9 as x, fd as N, H as b, cO as k, cP as H, eP as Z, eQ as J, ck as U, eO as V, cM as W, co as z, cm as K, cn as X, cl as Y, cp as ee, eR as F, eT as te, aD as I, eS as se, eU as re, cW as oe, aC as ie, eL as O, eW as ne, eX as pe, eV as ae, ct as le, eZ as ue, k as ce, e_ as de, e$ as ye, f0 as he, f2 as fe, cu as me, f3 as ge, ax as ve } from "./index-HxXrdrYt.js";
import { x as Se, b as $, k as T, I as xe, F as we, j as Ce, T as Re, h as be, w as Fe } from "./ogcFeatureUtils-fFXwUoPS.js";
import "vue";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./geojson-inKfa19b.js";
import "./clientSideDefaults-LEIIpsqg.js";
import "./QueryEngineCapabilities-gkC_bzZo.js";
let c = class extends B {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }
  load(e) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, e)), this.when();
  }
  getSource() {
    const { featureDefinition: { collection: e, layerDefinition: t, spatialReference: i, supportedCrs: n }, layer: { apiKey: p, customParameters: l, effectiveMaxRecordCount: a } } = this;
    return { type: "ogc-source", collection: e, layerDefinition: t, maxRecordCount: a, queryParameters: { apiKey: p, customParameters: l }, spatialReference: i, supportedCrs: n };
  }
  queryExtent(e, t = {}) {
    return null;
  }
  queryFeatureCount(e, t = {}) {
    return null;
  }
  queryFeatures(e, t = {}) {
    return this.queryFeaturesJSON(e, t).then((i) => L.fromJSON(i));
  }
  queryFeaturesJSON(e, t = {}) {
    const i = this.getSource();
    return this.load(t).then(() => Se(i, e, t));
  }
  queryObjectIds(e, t = {}) {
    return null;
  }
  serviceSupportsSpatialReference(e) {
    return !(!e.isWGS84 && !e.isWebMercator) || !!this.featureDefinition.supportedCrs[e.wkid];
  }
  _conformsToType(e, t) {
    const i = new RegExp(`^${t}$`, "i");
    return e.conformsTo.some((n) => i.test(n)) ?? !1;
  }
  _getCapabilities(e, t) {
    return { analytics: { supportsCacheHint: !1 }, attachment: null, data: { isVersioned: !1, supportsAttachment: !1, supportsM: !1, supportsZ: e }, metadata: { supportsAdvancedFieldProperties: !1 }, operations: { supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsAdd: !1, supportsDelete: !1, supportsEditing: !1, supportsChangeTracking: !1, supportsQuery: !1, supportsQueryAnalytics: !1, supportsQueryAttachments: !1, supportsQueryTopFeatures: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsUpdate: !1, supportsExceedsLimitStatistics: !1, supportsAsyncConvert3D: !1 }, query: { maxRecordCount: t, maxRecordCountFactor: void 0, standardMaxRecordCount: void 0, supportsCacheHint: !1, supportsCentroid: !1, supportsDisjointSpatialRelationship: !1, supportsDistance: !1, supportsDistinct: !1, supportsExtent: !1, supportsFormatPBF: !1, supportsGeometryProperties: !1, supportsHavingClause: !1, supportsHistoricMoment: !1, supportsMaxRecordCountFactor: !1, supportsOrderBy: !1, supportsPagination: !1, supportsPercentileStatistics: !1, supportsQuantization: !1, supportsQuantizationEditMode: !1, supportsQueryByOthers: !1, supportsQueryGeometry: !1, supportsResultType: !1, supportsStandardizedQueriesOnly: !1, supportsTopFeaturesQuery: !1, supportsStatistics: !1, supportsSpatialAggregationStatistics: !1, supportedSpatialAggregationStatistics: { envelope: !1, centroid: !1, convexHull: !1 }, supportsDefaultSpatialReference: !1, supportsFullTextSearch: !1, supportsCompactGeometry: !1, supportsSqlExpression: !1, tileMaxRecordCount: void 0 }, queryRelated: { supportsCount: !1, supportsOrderBy: !1, supportsPagination: !1, supportsCacheHint: !1 }, queryTopFeatures: { supportsCacheHint: !1 }, editing: { supportsDeleteByAnonymous: !1, supportsDeleteByOthers: !1, supportsGeometryUpdate: !1, supportsGlobalId: !1, supportsReturnServiceEditsInSourceSpatialReference: !1, supportsRollbackOnFailure: !1, supportsUpdateByAnonymous: !1, supportsUpdateByOthers: !1, supportsUploadWithItemId: !1, supportsUpdateWithoutM: !1, supportsAsyncApplyEdits: !1 } };
  }
  _getMaxRecordCount(e) {
    var i, n, p, l, a;
    const t = (i = e == null ? void 0 : e.components) == null ? void 0 : i.parameters;
    return ((p = (n = t == null ? void 0 : t.limit) == null ? void 0 : n.schema) == null ? void 0 : p.maximum) ?? ((a = (l = t == null ? void 0 : t.limitFeatures) == null ? void 0 : l.schema) == null ? void 0 : a.maximum);
  }
  _getStorageSpatialReference(e) {
    const t = e.storageCrs ?? $, i = T(t);
    return i == null ? x.WGS84 : new x({ wkid: i });
  }
  _getSupportedSpatialReferences(e, t) {
    const i = "#/crs", n = e.crs ?? [$], p = n.includes(i) ? n.filter((a) => a !== i).concat(t.crs ?? []) : n, l = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return p.filter((a) => !l.test(a));
  }
  async _loadOGCServices(e, t) {
    const i = t != null ? t.signal : null, { apiKey: n, collectionId: p, customParameters: l, fields: a, geometryType: h, hasZ: f, objectIdField: j, timeInfo: m, url: P } = e, E = { fields: a == null ? void 0 : a.map((u) => u.toJSON()), geometryType: N.toJSON(h), hasZ: f ?? !1, objectIdField: j, timeInfo: m == null ? void 0 : m.toJSON() }, d = { apiKey: n, customParameters: l, signal: i }, g = await xe(P, d), [w, C] = await Promise.all([we(g, d), Ce(g, d)]);
    if (!this._conformsToType(w, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))
      throw new b("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
    const y = C.collections.find((u) => u.id === p);
    if (!y)
      throw new b("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");
    const _ = this._conformsToType(w, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? await Re(g, d) : null, R = await be(y, E, d), q = this._getMaxRecordCount(_), M = this._getCapabilities(R.hasZ, q), A = this._getStorageSpatialReference(y).toJSON(), G = this._getSupportedSpatialReferences(y, C), Q = new RegExp(`^${Fe}`, "i"), v = {};
    for (const u of G) {
      const S = T(u);
      S != null && (v[S] || (v[S] = u.replace(Q, "")));
    }
    this.featureDefinition = { capabilities: M, collection: y, layerDefinition: R, spatialReference: A, supportedCrs: v };
  }
};
s([o()], c.prototype, "featureDefinition", void 0), s([o({ constructOnly: !0 })], c.prototype, "layer", void 0), s([o()], c.prototype, "type", void 0), c = s([D("geoscene.layers.graphics.sources.OGCFeatureSource")], c);
const Ie = ge();
let r = class extends k(H(Z(J(U(V(W(z(K(X(Y(ee(ve)))))))))))) {
  constructor(e) {
    super(e), this.capabilities = null, this.collectionId = null, this.copyright = null, this.definitionExpression = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.maxRecordCount = null, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new c({ layer: this }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy();
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["OGCFeatureServer"] }, e).then(() => this._fetchService(e))), this.when();
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get effectiveMaxRecordCount() {
    var e;
    return this.maxRecordCount ?? ((e = this.capabilities) == null ? void 0 : e.query.maxRecordCount) ?? 5e3;
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  set renderer(e) {
    F(e, this.fieldsIndex), this._set("renderer", e);
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return te(this, e);
  }
  createQuery() {
    return new I();
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    var a;
    let i, n = !1;
    const p = (a = t == null ? void 0 : t.feature) == null ? void 0 : a.attributes, l = this.typeIdField && (p == null ? void 0 : p[this.typeIdField]);
    return l != null && this.types && (n = this.types.some((h) => {
      var f;
      return h.id == l && (i = (f = h.domains) == null ? void 0 : f[e], (i == null ? void 0 : i.type) === "inherited" && (i = this._getLayerDomain(e)), !0);
    })), n || i || (i = this._getLayerDomain(e)), i;
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(I.from(e) || this.createQuery(), t)).then((i) => {
      var n;
      return (n = i == null ? void 0 : i.features) == null || n.forEach((p) => {
        p.layer = p.sourceLayer = this;
      }), i;
    });
  }
  serviceSupportsSpatialReference(e) {
    var t;
    return ((t = this.source) == null ? void 0 : t.serviceSupportsSpatialReference(e)) ?? !1;
  }
  async _fetchService(e) {
    await this.source.load(e), this.read(this.source.featureDefinition, { origin: "service" }), F(this.renderer, this.fieldsIndex), se(this.timeInfo, this.fieldsIndex);
  }
  _getLayerDomain(e) {
    if (!this.fields)
      return null;
    for (const t of this.fields)
      if (t.name === e && t.domain)
        return t.domain;
    return null;
  }
};
s([o({ readOnly: !0, json: { origins: { service: { read: !0 } } } })], r.prototype, "capabilities", void 0), s([o({ type: String, json: { write: !0 } })], r.prototype, "collectionId", void 0), s([o({ type: String })], r.prototype, "copyright", void 0), s([o({ readOnly: !0 })], r.prototype, "defaultPopupTemplate", null), s([o({ type: String })], r.prototype, "definitionExpression", void 0), s([o({ readOnly: !0, type: String, json: { origins: { service: { name: "collection.description" } } } })], r.prototype, "description", void 0), s([o({ type: String })], r.prototype, "displayField", void 0), s([o({ type: Number })], r.prototype, "effectiveMaxRecordCount", null), s([o(re)], r.prototype, "elevationInfo", void 0), s([o({ type: [oe], json: { origins: { service: { name: "layerDefinition.fields" } } } })], r.prototype, "fields", void 0), s([o(Ie.fieldsIndex)], r.prototype, "fieldsIndex", void 0), s([o({ readOnly: !0, type: ie, json: { origins: { service: { name: "layerDefinition.extent" } } } })], r.prototype, "fullExtent", void 0), s([o({ type: O.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: O.read } } } } })], r.prototype, "geometryType", void 0), s([o({ type: Boolean, json: { origins: { service: { name: "layerDefinition.hasZ" } } } })], r.prototype, "hasZ", void 0), s([o({ type: Boolean, readOnly: !0 })], r.prototype, "isTable", null), s([o({ type: [ne], json: { origins: { "web-document": { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: pe }, write: !0 } } } })], r.prototype, "labelingInfo", void 0), s([o(ae)], r.prototype, "labelsVisible", void 0), s([o(le)], r.prototype, "legendEnabled", void 0), s([o({ type: Number })], r.prototype, "maxRecordCount", void 0), s([o({ type: String, json: { origins: { service: { name: "layerDefinition.objectIdField" } } } })], r.prototype, "objectIdField", void 0), s([o({ type: ["OGCFeatureLayer"] })], r.prototype, "operationalLayerType", void 0), s([o(ue)], r.prototype, "popupEnabled", void 0), s([o({ type: ce, json: { name: "popupInfo", write: !0 } })], r.prototype, "popupTemplate", void 0), s([o({ types: de, json: { origins: { service: { name: "layerDefinition.drawingInfo.renderer", write: !1 }, "web-scene": { types: ye, name: "layerDefinition.drawingInfo.renderer", write: !0 } }, name: "layerDefinition.drawingInfo.renderer", write: !0 } })], r.prototype, "renderer", null), s([o(he)], r.prototype, "screenSizePerspectiveEnabled", void 0), s([o({ readOnly: !0 })], r.prototype, "source", void 0), s([o({ readOnly: !0, type: x, json: { origins: { service: { read: !0 } } } })], r.prototype, "spatialReference", void 0), s([o({ type: String, json: { write: { enabled: !0, ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "collection.title" } } } })], r.prototype, "title", void 0), s([o({ readOnly: !0, json: { read: !1 } })], r.prototype, "type", void 0), s([o({ type: String, readOnly: !0 })], r.prototype, "typeIdField", void 0), s([o({ type: [fe] })], r.prototype, "types", void 0), s([o(me)], r.prototype, "url", void 0), r = s([D("geoscene.layers.OGCFeatureLayer")], r);
const Me = r;
export {
  Me as default
};

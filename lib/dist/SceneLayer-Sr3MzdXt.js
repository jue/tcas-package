import { e as s, d as o, a as F, aD as P, s as D, bR as R, bv as U, bw as Q, bu as N, bz as q, bS as C, j as S, r as p, aT as G, dO as m, bG as k, df as V, dI as K, dQ as M, l as f, y as d, aG as z, C as W, bC as Z, az as v, g as B, e4 as J, ed as X, ee as H, ef as Y, aE as h, dR as ee, dT as te, dU as re, dV as b, bJ as se, eg as ie, dZ as oe, dX as ae, B as ne, d_ as le, e1 as de, bE as pe } from "./index-Ek1MTSEY.js";
import { A as ye, K as I } from "./SceneService-yc-BGZl3.js";
import { t as ue, l as ce } from "./FetchAssociatedFeatureLayer-tCMLnFlQ.js";
import { s as j, l as he, u as fe, m as ge } from "./I3SLayerDefinitions-3sQN3QEG.js";
import "vue";
import "./originUtils-coUxWAIW.js";
import "./resourceUtils-OFVXASHI.js";
let u = class extends P {
  constructor() {
    super(...arguments), this.name = null, this.field = null, this.currentRangeExtent = null, this.fullRangeExtent = null, this.type = "rangeInfo";
  }
};
s([o({ type: String, json: { read: !0, write: !0 } })], u.prototype, "name", void 0), s([o({ type: String, json: { read: !0, write: !0 } })], u.prototype, "field", void 0), s([o({ type: [Number], json: { read: !0, write: !0 } })], u.prototype, "currentRangeExtent", void 0), s([o({ type: [Number], json: { read: !0, write: !0 } })], u.prototype, "fullRangeExtent", void 0), s([o({ type: ["rangeInfo"], readOnly: !0, json: { read: !1, write: !0 } })], u.prototype, "type", void 0), u = s([F("geoscene.layers.support.RangeInfo")], u);
const me = u, ve = ["3DObject", "Point"], c = D.getLogger("geoscene.layers.SceneLayer"), w = de();
let i = class extends ye(R(U(Q(N(q(C(pe))))))) {
  constructor(...e) {
    super(...e), this.featureReduction = null, this.rangeInfos = null, this.operationalLayerType = "ArcGISSceneServiceLayer", this.type = "scene", this.fields = null, this.floorInfo = null, this.outFields = null, this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.excludeObjectIds = new S(), this.definitionExpression = null, this.path = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.cachedDrawingInfo = { color: !1 }, this.popupEnabled = !0, this.popupTemplate = null, this.objectIdField = null, this.globalIdField = null, this._fieldUsageInfo = {}, this.screenSizePerspectiveEnabled = !0;
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    var r, a, n, l;
    const y = (r = this.getFeatureType(t == null ? void 0 : t.feature)) == null || (a = r.domains) == null ? void 0 : a[e];
    return y && y.type !== "inherited" ? y : (n = (l = this.getField(e)) == null ? void 0 : l.domain) != null ? n : null;
  }
  getFeatureType(e) {
    return e && p(this.associatedLayer) ? this.associatedLayer.getFeatureType(e) : null;
  }
  get types() {
    return p(this.associatedLayer) ? this.associatedLayer.types : [];
  }
  get typeIdField() {
    return p(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }
  get formTemplate() {
    return p(this.associatedLayer) ? this.associatedLayer.formTemplate : null;
  }
  get fieldsIndex() {
    return new G(this.fields);
  }
  readNodePages(e, t, r) {
    return t.layerType === "Point" && (e = t.pointNodePages), e == null || typeof e != "object" ? null : j.fromJSON(e, r);
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this.loaded && this._validateElevationInfo();
  }
  get geometryType() {
    return be[this.profile] || "mesh";
  }
  set renderer(e) {
    m(e, this.fieldsIndex), this._set("renderer", e);
  }
  readCachedDrawingInfo(e) {
    return e != null && typeof e == "object" || (e = {}), e.color == null && (e.color = !1), e;
  }
  get capabilities() {
    const e = p(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : ue, { query: t, editing: { supportsGlobalId: r, supportsRollbackOnFailure: a, supportsUploadWithItemId: n, supportsReturnServiceEditsInSourceSpatialReference: l }, data: { supportsZ: y, supportsM: E, isVersioned: O, supportsAttachment: T }, operations: { supportsEditing: _, supportsUpdate: x, supportsQuery: $, supportsQueryAttachments: A } } = e, g = e.operations.supportsChangeTracking;
    return { query: t, editing: { supportsGlobalId: r, supportsReturnServiceEditsInSourceSpatialReference: l, supportsRollbackOnFailure: a, supportsGeometryUpdate: !1, supportsUploadWithItemId: n }, data: { supportsAttachment: T, supportsZ: y, supportsM: E, isVersioned: O }, operations: { supportsQuery: $, supportsQueryAttachments: A, supportsEditing: _ && g, supportsAdd: !1, supportsDelete: !1, supportsUpdate: x && g } };
  }
  get editingEnabled() {
    return this._isOverridden("editingEnabled") ? this._get("editingEnabled") : this.userHasEditingPrivileges;
  }
  set editingEnabled(e) {
    e != null ? this._override("editingEnabled", e) : this._clearOverride("editingEnabled");
  }
  get defaultPopupTemplate() {
    return p(this.associatedLayer) || this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  readObjectIdField(e, t) {
    return !e && t.fields && t.fields.some((r) => (r.type === "esriFieldTypeOID" && (e = r.name), !!e)), e || void 0;
  }
  readGlobalIdField(e, t) {
    return !e && t.fields && t.fields.some((r) => (r.type === "esriFieldTypeGlobalID" && (e = r.name), !!e)), e || void 0;
  }
  get displayField() {
    return p(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }
  readProfile(e, t) {
    const r = t.store.profile;
    return r != null && L[r] ? L[r] : (c.error("Unknown or missing profile", { profile: r, layer: this }), "mesh-pyramids");
  }
  load(e) {
    const t = p(e) ? e.signal : null, r = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(k).then(() => this._fetchService(t)).then(() => Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages, t), this._setAssociatedFeatureLayer(t)])).then(() => this._validateElevationInfo()).then(() => this._applyAssociatedLayerOverrides()).then(() => this._populateFieldUsageInfo()).then(() => V(this, { origin: "service" }, t)).then(() => m(this.renderer, this.fieldsIndex)).then(() => this.finishLoadEditablePortalLayer(e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  createQuery() {
    const e = new K();
    return this.geometryType !== "mesh" && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
  }
  queryExtent(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryExtent(e || this.createQuery(), t));
  }
  queryFeatureCount(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryFeatureCount(e || this.createQuery(), t));
  }
  queryFeatures(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryFeatures(e || this.createQuery(), t)).then((r) => {
      if (r != null && r.features)
        for (const a of r.features)
          a.layer = this, a.sourceLayer = this;
      return r;
    });
  }
  queryObjectIds(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryObjectIds(e || this.createQuery(), t));
  }
  queryAttachments(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryAttachments(e, t));
  }
  getFieldUsageInfo(e) {
    const t = { supportsLabelingInfo: !1, supportsRenderer: !1, supportsPopupTemplate: !1, supportsLayerQuery: !1 };
    return this.loaded ? this._fieldUsageInfo[e] || t : (c.error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t);
  }
  createPopupTemplate(e) {
    return M(this, e);
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return p(e) && e.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), f(this.associatedLayer))
      throw new d("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new d("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", { layer: this, error: e });
    }
    return this.associatedLayer;
  }
  hasCachedStatistics(e) {
    return this.statisticsInfo != null && this.statisticsInfo.some((t) => t.name === e);
  }
  async queryCachedStatistics(e, t) {
    if (await this.load(t), !this.statisticsInfo)
      throw new d("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const r = this.fieldsIndex.get(e);
    if (!r)
      throw new d("scenelayer:field-unexisting", `Field '${e}' does not exist on the layer`);
    for (const a of this.statisticsInfo)
      if (a.name === r.name) {
        const n = z(this.parsedUrl.path, a.href);
        return W(n, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: t ? t.signal : null }).then((l) => l.data);
      }
    throw new d("scenelayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(I.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" };
    return this._debouncedSaveOperations(I.SAVE, e);
  }
  async applyEdits(e, t) {
    const r = await import("./editingSupport-4-whPc23.js");
    if (await this.load(), f(this.associatedLayer))
      throw new d(`${this.type}-layer:not-editable`, "Service is not editable");
    return await this.associatedLayer.load(), r.applyEdits(this, this.associatedLayer.source, e, t);
  }
  on(e, t) {
    return super.on(e, t);
  }
  validateLayer(e) {
    if (e.layerType && ve.indexOf(e.layerType) === -1)
      throw new d("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new d("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    if (this.version.major > 2)
      throw new d("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    function t(r, a) {
      let n = !1, l = !1;
      if (r == null)
        n = !0, l = !0;
      else {
        const y = a && a.isGeographic;
        switch (r) {
          case "east-north-up":
          case "earth-centered":
            n = !0, l = y;
            break;
          case "vertex-reference-frame":
            n = !0, l = !y;
            break;
          default:
            n = !1;
        }
      }
      if (!n)
        throw new d("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
      if (!l)
        throw new d("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
    }
    t(this.normalReferenceFrame, this.spatialReference);
  }
  _getTypeKeywords() {
    const e = [];
    if (this.profile === "points")
      e.push("Point");
    else {
      if (this.profile !== "mesh-pyramids")
        throw new d("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
      e.push("3DObject");
    }
    return e;
  }
  _populateFieldUsageInfo() {
    if (this._fieldUsageInfo = {}, this.fields)
      for (const e of this.fields) {
        const t = !(!this.attributeStorageInfo || !this.attributeStorageInfo.some((n) => n.name === e.name)), r = !!(p(this.associatedLayer) && this.associatedLayer.fields && this.associatedLayer.fields.some((n) => n && e.name === n.name)), a = { supportsLabelingInfo: t, supportsRenderer: t, supportsPopupTemplate: t || r, supportsLayerQuery: r };
        this._fieldUsageInfo[e.name] = a;
      }
  }
  _applyAssociatedLayerOverrides() {
    this._applyAssociatedLayerFieldsOverrides(), this._applyAssociatedLayerPopupOverrides();
  }
  _applyAssociatedLayerFieldsOverrides() {
    if (f(this.associatedLayer) || !this.associatedLayer.fields)
      return;
    let e = null;
    for (const t of this.associatedLayer.fields) {
      const r = this.getField(t.name);
      r ? (!r.domain && t.domain && (r.domain = t.domain.clone()), r.editable = t.editable, r.nullable = t.nullable, r.length = t.length) : (e || (e = this.fields ? this.fields.slice() : []), e.push(t.clone()));
    }
    e && this._set("fields", e);
  }
  _applyAssociatedLayerPopupOverrides() {
    if (f(this.associatedLayer))
      return;
    const e = ["popupTemplate", "popupEnabled"], t = Z(this);
    for (let r = 0; r < e.length; r++) {
      const a = e[r], n = this.originIdOf(a), l = this.associatedLayer.originIdOf(a);
      n < l && (l === v.SERVICE || l === v.PORTAL_ITEM) && t.setAtOrigin(a, this.associatedLayer[a], l);
    }
  }
  async _setAssociatedFeatureLayer(e) {
    if (["mesh-pyramids", "points"].indexOf(this.profile) === -1)
      return;
    const t = new ce(this.parsedUrl, this.portalItem, this.apiKey, e);
    try {
      this.associatedLayer = await t.fetch();
    } catch (r) {
      B(r) || this._logWarningOnPopupEnabled();
    }
  }
  async _logWarningOnPopupEnabled() {
    await J(() => this.popupEnabled && this.popupTemplate != null);
    const e = `this SceneLayer: ${this.title}`;
    this.attributeStorageInfo == null ? c.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`) : c.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    e && (this.profile === "mesh-pyramids" && e.mode !== "absolute-height" && c.warn(".elevationInfo=", "Mesh scene layers only support absolute-height elevation mode"), e.featureExpressionInfo && e.featureExpressionInfo.expression !== "0" && c.warn(".elevationInfo=", "Scene layers do not support featureExpressionInfo"));
  }
};
s([o({ types: { key: "type", base: X, typeMap: { selection: H } }, json: { origins: { "web-scene": { name: "layerDefinition.featureReduction", write: !0 }, "portal-item": { name: "layerDefinition.featureReduction", write: !0 } } } })], i.prototype, "featureReduction", void 0), s([o({ type: [me], json: { read: !1, origins: { "web-scene": { name: "layerDefinition.rangeInfos", write: !0 }, "portal-item": { name: "layerDefinition.rangeInfos", write: !0 } } } })], i.prototype, "rangeInfos", void 0), s([o({ json: { read: !1 } })], i.prototype, "associatedLayer", void 0), s([o({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), s([o({ type: ["ArcGISSceneServiceLayer"] })], i.prototype, "operationalLayerType", void 0), s([o({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0), s([o({ ...w.fields, readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], i.prototype, "fields", void 0), s([o()], i.prototype, "types", null), s([o()], i.prototype, "typeIdField", null), s([o()], i.prototype, "formTemplate", null), s([o({ readOnly: !0 })], i.prototype, "fieldsIndex", null), s([o({ type: Y, json: { read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo" } } })], i.prototype, "floorInfo", void 0), s([o(w.outFields)], i.prototype, "outFields", void 0), s([o({ type: j, readOnly: !0, json: { read: !1 } })], i.prototype, "nodePages", void 0), s([h("service", "nodePages", ["nodePages", "pointNodePages"])], i.prototype, "readNodePages", null), s([o({ type: [he], readOnly: !0 })], i.prototype, "materialDefinitions", void 0), s([o({ type: [fe], readOnly: !0 })], i.prototype, "textureSetDefinitions", void 0), s([o({ type: [ge], readOnly: !0 })], i.prototype, "geometryDefinitions", void 0), s([o({ readOnly: !0 })], i.prototype, "serviceUpdateTimeStamp", void 0), s([o({ readOnly: !0 })], i.prototype, "attributeStorageInfo", void 0), s([o({ readOnly: !0 })], i.prototype, "statisticsInfo", void 0), s([o({ type: S.ofType(Number), nonNullable: !0, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.excludeObjectIds", write: { enabled: !0 } } })], i.prototype, "excludeObjectIds", void 0), s([o({ type: String, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), s([o({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], i.prototype, "path", void 0), s([o(ee)], i.prototype, "elevationInfo", null), s([o({ type: String })], i.prototype, "geometryType", null), s([o(te)], i.prototype, "labelsVisible", void 0), s([o({ type: [re], json: { origins: { service: { name: "drawingInfo.labelingInfo", read: { reader: b }, write: !1 } }, name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: b }, write: !0 } })], i.prototype, "labelingInfo", void 0), s([o(se)], i.prototype, "legendEnabled", void 0), s([o({ type: Number, json: { origins: { "web-document": { default: 1, write: { enabled: !0, target: { opacity: { type: Number }, "layerDefinition.drawingInfo.transparency": { type: Number } } }, read: { source: ["opacity", "layerDefinition.drawingInfo.transparency"], reader(e, t) {
  var r, a;
  if (typeof e == "number" && e >= 0 && e <= 1)
    return e;
  const n = (r = t.layerDefinition) == null || (a = r.drawingInfo) == null ? void 0 : a.transparency;
  return n !== void 0 ? ie(n) : void 0;
} } }, "portal-item": { write: !0 }, service: { read: !1 } } } })], i.prototype, "opacity", void 0), s([o({ types: oe, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: !0 }, value: null })], i.prototype, "renderer", null), s([o({ json: { read: !1 } })], i.prototype, "cachedDrawingInfo", void 0), s([h("service", "cachedDrawingInfo")], i.prototype, "readCachedDrawingInfo", null), s([o({ readOnly: !0, json: { read: !1 } })], i.prototype, "capabilities", null), s([o({ type: Boolean, json: { read: !1 } })], i.prototype, "editingEnabled", null), s([o(ae)], i.prototype, "popupEnabled", void 0), s([o({ type: ne, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), s([o({ readOnly: !0, json: { read: !1 } })], i.prototype, "defaultPopupTemplate", null), s([o({ type: String, json: { read: !1 } })], i.prototype, "objectIdField", void 0), s([h("service", "objectIdField", ["objectIdField", "fields"])], i.prototype, "readObjectIdField", null), s([o({ type: String, json: { read: !1 } })], i.prototype, "globalIdField", void 0), s([h("service", "globalIdField", ["globalIdField", "fields"])], i.prototype, "readGlobalIdField", null), s([o({ readOnly: !0, type: String, json: { read: !1 } })], i.prototype, "displayField", null), s([o({ type: String, json: { read: !1 } })], i.prototype, "profile", void 0), s([h("service", "profile", ["store.profile"])], i.prototype, "readProfile", null), s([o({ readOnly: !0, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: !1 } })], i.prototype, "normalReferenceFrame", void 0), s([o(le)], i.prototype, "screenSizePerspectiveEnabled", void 0), i = s([F("geoscene.layers.SceneLayer")], i);
const L = { "mesh-pyramids": "mesh-pyramids", meshpyramids: "mesh-pyramids", "features-meshes": "mesh-pyramids", points: "points", "features-points": "points", lines: "lines", "features-lines": "lines", polygons: "polygons", "features-polygons": "polygons" }, be = { "mesh-pyramids": "mesh", points: "point", lines: "polyline", polygons: "polygon" }, Oe = i;
export {
  Oe as default
};

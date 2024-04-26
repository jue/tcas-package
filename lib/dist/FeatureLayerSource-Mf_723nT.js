import { D as _, e as f, d as F, W as O, X as w, r as E, Z as b, l as q, _ as S, C as h, a0 as v, M as T, a1 as A, a2 as x, y as R, a3 as j, m as k, b as J, a4 as N, a as Q, T as I } from "./index-Ek1MTSEY.js";
import { n as U } from "./clientSideDefaults-LKtLjX6p.js";
import "vue";
import "./QueryEngineCapabilities-gmxC9I6i.js";
const D = new _({ originalAndCurrentFeatures: "original-and-current-features", none: "none" });
async function $(t) {
  return typeof t == "string" ? I(t) || { data: t } : new Promise((e, a) => {
    const s = new FileReader();
    s.readAsDataURL(t), s.onload = () => e(I(s.result)), s.onerror = (i) => a(i);
  });
}
const C = /* @__PURE__ */ new Set(["Feature Layer", "Table"]);
let p = class extends O {
  constructor() {
    super(...arguments), this.type = "feature-layer", this.refresh = w(async () => {
      var t, e;
      await this.load();
      const a = (t = this.sourceJSON.editingInfo) == null ? void 0 : t.lastEditDate;
      if (a == null)
        return { dataChanged: !0, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: !0, updates: {} };
      }
      const s = a !== ((e = this.sourceJSON.editingInfo) == null ? void 0 : e.lastEditDate);
      return { dataChanged: s, updates: s ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    });
  }
  load(t) {
    const e = E(t) ? t.signal : null;
    return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON, e)), Promise.resolve(this);
  }
  get queryTask() {
    const { capabilities: { query: { supportsFormatPBF: t } }, parsedUrl: e, dynamicDataSource: a, infoFor3D: s, gdbVersion: i, spatialReference: u, fieldsIndex: r } = this.layer, o = b("featurelayer-pbf") && t && q(s) ? "pbf" : "json";
    return new S({ url: e.path, format: o, fieldsIndex: r, infoFor3D: s, dynamicDataSource: a, gdbVersion: i, sourceSpatialReference: u });
  }
  async addAttachment(t, e) {
    await this.load();
    const a = t.attributes[this.layer.objectIdField], s = this.layer.parsedUrl.path + "/" + a + "/addAttachment", i = this._getLayerRequestOptions(), u = this._getFormDataForAttachment(e, i.query);
    try {
      const r = await h(s, { body: u });
      return this._createFeatureEditResult(r.data.addAttachmentResult);
    } catch (r) {
      throw this._createAttachmentErrorResult(a, r);
    }
  }
  async updateAttachment(t, e, a) {
    await this.load();
    const s = t.attributes[this.layer.objectIdField], i = this.layer.parsedUrl.path + "/" + s + "/updateAttachment", u = this._getLayerRequestOptions({ query: { attachmentId: e } }), r = this._getFormDataForAttachment(a, u.query);
    try {
      const o = await h(i, { body: r });
      return this._createFeatureEditResult(o.data.updateAttachmentResult);
    } catch (o) {
      throw this._createAttachmentErrorResult(s, o);
    }
  }
  async applyEdits(t, e) {
    await this.load();
    const a = t.addFeatures.map(this._serializeFeature, this), s = t.updateFeatures.map(this._serializeFeature, this), i = this._getFeatureIds(t.deleteFeatures, e == null ? void 0 : e.globalIdUsed);
    v(a, s, this.layer.spatialReference);
    const u = [], r = [], o = [...t.deleteAttachments];
    for (const d of t.addAttachments)
      u.push(await this._serializeAttachment(d));
    for (const d of t.updateAttachments)
      r.push(await this._serializeAttachment(d));
    const n = u.length || r.length || o.length ? { adds: u, updates: r, deletes: o } : null, l = { gdbVersion: (e == null ? void 0 : e.gdbVersion) || this.layer.gdbVersion, rollbackOnFailure: e == null ? void 0 : e.rollbackOnFailureEnabled, useGlobalIds: e == null ? void 0 : e.globalIdUsed, returnEditMoment: e == null ? void 0 : e.returnEditMoment, usePreviousEditMoment: e == null ? void 0 : e.usePreviousEditMoment, sessionId: e == null ? void 0 : e.sessionId };
    e != null && e.returnServiceEditsOption ? (l.edits = JSON.stringify([{ id: this.layer.layerId, adds: a, updates: s, deletes: i, attachments: n }]), l.returnServiceEditsOption = D.toJSON(e == null ? void 0 : e.returnServiceEditsOption), l.returnServiceEditsInSourceSR = e == null ? void 0 : e.returnServiceEditsInSourceSR) : (l.adds = a.length ? JSON.stringify(a) : null, l.updates = s.length ? JSON.stringify(s) : null, l.deletes = i.length ? e != null && e.globalIdUsed ? JSON.stringify(i) : i.join(",") : null, l.attachments = n && JSON.stringify(n));
    const c = this._getLayerRequestOptions({ method: "post", query: l }), m = e != null && e.returnServiceEditsOption ? this.layer.url : this.layer.parsedUrl.path, g = await h(m + "/applyEdits", c);
    return this._createEditsResult(g);
  }
  async deleteAttachments(t, e) {
    await this.load();
    const a = t.attributes[this.layer.objectIdField], s = this.layer.parsedUrl.path + "/" + a + "/deleteAttachments";
    try {
      return (await h(s, this._getLayerRequestOptions({ query: { attachmentIds: e.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(this._createFeatureEditResult);
    } catch (i) {
      throw this._createAttachmentErrorResult(a, i);
    }
  }
  fetchRecomputedExtents(t = {}) {
    const e = t.signal;
    return this.load({ signal: e }).then(async () => {
      const a = this._getLayerRequestOptions({ ...t, query: { returnUpdates: !0 } }), { layerId: s, url: i } = this.layer, { data: u } = await h(`${i}/${s}`, a), { id: r, extent: o, fullExtent: n, timeExtent: l } = u, c = o || n;
      return { id: r, fullExtent: c && T.fromJSON(c), timeExtent: l && A.fromJSON({ start: l[0], end: l[1] }) };
    });
  }
  async queryAttachments(t, e = {}) {
    const { parsedUrl: a } = this.layer, s = a.path;
    await this.load();
    const i = this._getLayerRequestOptions(e);
    if (!this.layer.get("capabilities.operations.supportsQueryAttachments")) {
      const { objectIds: u } = t, r = [];
      for (const o of u) {
        const n = s + "/" + o + "/attachments";
        r.push(h(n, i));
      }
      return Promise.all(r).then((o) => u.map((n, l) => ({ parentObjectId: n, attachmentInfos: o[l].data.attachmentInfos }))).then((o) => x(o, s));
    }
    return this.queryTask.executeAttachmentQuery(t, i);
  }
  async queryFeatures(t, e) {
    return await this.load(), this.queryTask.execute(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryFeaturesJSON(t, e) {
    return await this.load(), this.queryTask.executeJSON(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryObjectIds(t, e) {
    return await this.load(), this.queryTask.executeForIds(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryFeatureCount(t, e) {
    return await this.load(), this.queryTask.executeForCount(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryExtent(t, e) {
    return await this.load(), this.queryTask.executeForExtent(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryRelatedFeatures(t, e) {
    return await this.load(), this.queryTask.executeRelationshipQuery(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryRelatedFeaturesCount(t, e) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopFeatures(t, e) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopObjectIds(t, e) {
    return await this.load(), this.queryTask.executeForTopIds(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopExtents(t, e) {
    return await this.load(), this.queryTask.executeForTopExtents(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopCount(t, e) {
    return await this.load(), this.queryTask.executeForTopCount(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  _createRequestQueryOptions(t) {
    const e = { ...this.layer.customParameters, token: this.layer.apiKey, ...t == null ? void 0 : t.query };
    return this.layer.datesInUnknownTimezone && (e.timeReferenceUnknownClient = !0), e;
  }
  async _fetchService(t, e) {
    if (!t) {
      const { data: s } = await h(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: b("featurelayer-advanced-symbols") ? { returnAdvancedSymbols: !0 } : {}, signal: e }));
      t = s;
    }
    this.sourceJSON = this._patchServiceJSON(t);
    const a = t.type;
    if (!C.has(a))
      throw new R("feature-layer-source:unsupported-type", `Source type "${a}" is not supported`);
  }
  _patchServiceJSON(t) {
    var e;
    if (t.type !== "Table" && t.geometryType && (t == null || (e = t.drawingInfo) == null || !e.renderer) && !t.defaultSymbol) {
      const a = U(t.geometryType).renderer;
      j("drawingInfo.renderer", a, t);
    }
    return t.geometryType === "esriGeometryMultiPatch" && t.infoFor3D && (t.geometryType = "mesh"), t;
  }
  _serializeFeature(t) {
    const { geometry: e, attributes: a } = t;
    return q(e) ? { attributes: a } : e.type === "mesh" || e.type === "extent" ? null : { geometry: e.toJSON(), attributes: a };
  }
  async _serializeAttachment(t) {
    const { feature: e, attachment: a } = t, { globalId: s, name: i, contentType: u, data: r, uploadId: o } = a, n = { globalId: s, parentGlobalId: null, contentType: null, name: null, uploadId: null, data: null };
    if (e && (n.parentGlobalId = "attributes" in e ? e.attributes && e.attributes[this.layer.globalIdField] : e.globalId), o)
      n.uploadId = o;
    else if (r) {
      const l = await $(r);
      n.contentType = l.mediaType, n.data = l.data, r instanceof File && (n.name = r.name);
    }
    return i && (n.name = i), u && (n.contentType = u), n;
  }
  _getFeatureIds(t, e) {
    const a = t[0];
    return a ? this._canUseGlobalIds(e, t) ? this._getGlobalIdsFromFeatureIdentifier(t) : "objectId" in a ? this._getObjectIdsFromFeatureIdentifier(t) : this._getIdsFromFeatures(t) : [];
  }
  _getIdsFromFeatures(t) {
    const e = this.layer.objectIdField;
    return t.map((a) => a.attributes && a.attributes[e]);
  }
  _canUseGlobalIds(t, e) {
    return t && "globalId" in e[0];
  }
  _getObjectIdsFromFeatureIdentifier(t) {
    return t.map((e) => e.objectId);
  }
  _getGlobalIdsFromFeatureIdentifier(t) {
    return t.map((e) => e.globalId);
  }
  _createEditsResult(t) {
    var e;
    const a = t.data, { layerId: s } = this.layer, i = [];
    let u = null;
    if (Array.isArray(a))
      for (const n of a)
        i.push({ id: n.id, editedFeatures: n.editedFeatures }), n.id === s && (u = { addResults: n.addResults, updateResults: n.updateResults, deleteResults: n.deleteResults, attachments: n.attachments, editMoment: n.editMoment });
    else
      u = a;
    const r = (e = u) == null ? void 0 : e.attachments, o = { addFeatureResults: u.addResults ? u.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: u.updateResults ? u.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: u.deleteResults ? u.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: r && r.addResults ? r.addResults.map(this._createFeatureEditResult, this) : [], updateAttachmentResults: r && r.updateResults ? r.updateResults.map(this._createFeatureEditResult, this) : [], deleteAttachmentResults: r && r.deleteResults ? r.deleteResults.map(this._createFeatureEditResult, this) : [] };
    if (u.editMoment && (o.editMoment = u.editMoment), i.length > 0) {
      o.editedFeatureResults = [];
      for (const n of i) {
        const { adds: l, updates: c, deletes: m, spatialReference: g } = n.editedFeatures, d = g ? new k(g) : null;
        o.editedFeatureResults.push({ layerId: n.id, editedFeatures: { adds: (l == null ? void 0 : l.map((y) => this._createEditedFeature(y, d))) || [], updates: (c == null ? void 0 : c.map((y) => ({ original: this._createEditedFeature(y[0], d), current: this._createEditedFeature(y[1], d) }))) || [], deletes: (m == null ? void 0 : m.map((y) => this._createEditedFeature(y, d))) || [], spatialReference: d } });
      }
    }
    return o;
  }
  _createEditedFeature(t, e) {
    return new J({ attributes: t.attributes, geometry: N({ ...t.geometry, spatialReference: e }) });
  }
  _createFeatureEditResult(t) {
    const e = t.success === !0 ? null : t.error || { code: void 0, description: void 0 };
    return { objectId: t.objectId, globalId: t.globalId, error: e ? new R("feature-layer-source:edit-failure", e.description, { code: e.code }) : null };
  }
  _createAttachmentErrorResult(t, e) {
    const a = e.details.messages && e.details.messages[0] || e.message, s = e.details.httpStatus || e.details.messageCode;
    return { objectId: t, globalId: null, error: new R("feature-layer-source:attachment-failure", a, { code: s }) };
  }
  _getFormDataForAttachment(t, e) {
    const a = t instanceof FormData ? t : t && t.elements ? new FormData(t) : null;
    if (a)
      for (const s in e) {
        const i = e[s];
        i != null && (a.set ? a.set(s, i) : a.append(s, i));
      }
    return a;
  }
  _getLayerRequestOptions(t = {}) {
    const { parsedUrl: e, gdbVersion: a, dynamicDataSource: s } = this.layer;
    return { ...t, query: { gdbVersion: a, layer: s ? JSON.stringify({ source: s }) : void 0, ...e.query, f: "json", ...this._createRequestQueryOptions(t) }, responseType: "json" };
  }
};
f([F()], p.prototype, "type", void 0), f([F({ constructOnly: !0 })], p.prototype, "layer", void 0), f([F({ readOnly: !0 })], p.prototype, "queryTask", null), p = f([Q("geoscene.layers.graphics.sources.FeatureLayerSource")], p);
const z = p;
export {
  z as default
};

import { bY as g, bZ as x, H as _, b_ as k, b$ as C, c0 as D, d as Q, s as v, S as Z, ae as G, c1 as q } from "./index-B7TsCcH6.js";
import { r as P, s as A, e as M, n as N, t as z } from "./featureConversionUtils-oKi2Ei-6.js";
import { m as B } from "./FeatureStore-1Yde9T8N.js";
import { f as F, g as E } from "./projectionSupport-P-Yk17hX.js";
import { e as L } from "./QueryEngine-rs36pY9p.js";
import { L as H, I as J, T as U } from "./geojson-jPepW0LN.js";
import { o as V, a as W, i as Y } from "./clientSideDefaults-HooaZVw0.js";
import { y as K, d as b, c as w, u as I, h as S } from "./sourceUtils-DToSfz9e.js";
import "vue";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./BoundsStore-ESKxJiYA.js";
import "./PooledRBush-jBcGaEJ6.js";
import "./timeSupport-3AHhSm68.js";
import "./normalizeUtils-Le73uFr2.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./utils-iTYrz_MZ.js";
import "./json-uwIaZKlZ.js";
import "./WhereClause-QtNSpQDR.js";
import "./executionError-EEhTiqtD.js";
import "./QueryEngineCapabilities-gkC_bzZo.js";
import "./quantizationUtils-nKmgNZQ1.js";
import "./utils-H9V5fB-o.js";
import "./generateRendererUtils-K3CRBfPx.js";
const X = { hasAttachments: !1, capabilities: "query, editing, create, delete, update", useStandardizedQueries: !0, supportsCoordinatesQuantization: !0, supportsReturningQueryGeometry: !0, advancedQueryCapabilities: { supportsQueryAttachments: !1, supportsStatistics: !0, supportsPercentileStatistics: !0, supportsReturningGeometryCentroid: !0, supportsQueryWithDistance: !0, supportsDistinct: !0, supportsReturningQueryExtent: !0, supportsReturningGeometryProperties: !1, supportsHavingClause: !0, supportsOrderBy: !0, supportsPagination: !0, supportsQueryWithResultType: !1, supportsSqlExpression: !0, supportsDisjointSpatialRel: !0 } };
class je {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e) => {
      const t = await this._fetch(e);
      return this._createFeatures(t);
    };
  }
  destroy() {
    var e;
    (e = this._queryEngine) == null || e.destroy(), this._queryEngine = this._fieldsIndex = this._createDefaultAttributes = null;
  }
  async load(e, t = {}) {
    this._loadOptions = { url: e.url, customParameters: e.customParameters };
    const n = [];
    await this._checkProjection(e.spatialReference);
    let i = null;
    e.url && (i = await this._fetch(t == null ? void 0 : t.signal));
    const r = H(i, { geometryType: e.geometryType }), a = e.fields || r.fields || [], u = e.hasZ != null ? e.hasZ : r.hasZ, d = r.geometryType;
    let c = e.objectIdField || r.objectIdFieldName || "__OBJECTID";
    const y = e.spatialReference || g;
    let s = e.timeInfo;
    a === r.fields && r.unknownFields.length > 0 && n.push({ name: "geojson-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: r.unknownFields } });
    let l = new x(a).get(c);
    l ? (l.type !== "esriFieldTypeString" && (l.type = "esriFieldTypeOID"), l.editable = !1, l.nullable = !1, c = l.name) : (l = { alias: c, name: c, type: r.objectIdFieldType === "string" ? "esriFieldTypeString" : "esriFieldTypeOID", editable: !1, nullable: !1 }, a.unshift(l));
    const h = {};
    for (const o of a) {
      if (o.name == null && (o.name = o.alias), o.alias == null && (o.alias = o.name), !o.name)
        throw new _("geojson-layer:invalid-field-name", "field name is missing", { field: o });
      if (!k.jsonValues.includes(o.type))
        throw new _("geojson-layer:invalid-field-type", `invalid type for field "${o.name}"`, { field: o });
      if (o.name !== l.name) {
        const f = C(o);
        f !== void 0 && (h[o.name] = f);
      }
    }
    this._fieldsIndex = new x(a);
    const p = this._fieldsIndex.requiredFields.indexOf(l);
    if (p > -1 && this._fieldsIndex.requiredFields.splice(p, 1), s) {
      if (s.startTimeField) {
        const o = this._fieldsIndex.get(s.startTimeField);
        o ? (s.startTimeField = o.name, o.type = "esriFieldTypeDate") : s.startTimeField = null;
      }
      if (s.endTimeField) {
        const o = this._fieldsIndex.get(s.endTimeField);
        o ? (s.endTimeField = o.name, o.type = "esriFieldTypeDate") : s.endTimeField = null;
      }
      if (s.trackIdField) {
        const o = this._fieldsIndex.get(s.trackIdField);
        o ? s.trackIdField = o.name : (s.trackIdField = null, n.push({ name: "geojson-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: s } }));
      }
      s.startTimeField || s.endTimeField || (n.push({ name: "geojson-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: s } }), s = null);
    }
    const R = d ? V(d) : void 0, m = { warnings: n, featureErrors: [], layerDefinition: { ...X, drawingInfo: R ?? void 0, templates: W(h), extent: void 0, geometryType: d, objectIdField: c, fields: a, hasZ: !!u, timeInfo: s } };
    this._queryEngine = new L({ fields: a, geometryType: d, hasM: !1, hasZ: u, objectIdField: c, spatialReference: y, timeInfo: s, featureStore: new B({ geometryType: d, hasM: !1, hasZ: u }), cacheSpatialQueries: !0 }), this._createDefaultAttributes = Y(h, c);
    const T = await this._createFeatures(i);
    this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, T);
    const $ = this._normalizeFeatures(T, m.warnings, m.featureErrors);
    this._queryEngine.featureStore.addMany($);
    const { fullExtent: O, timeExtent: j } = await this._queryEngine.fetchRecomputedExtents();
    if (m.layerDefinition.extent = O, j) {
      const { start: o, end: f } = j;
      m.layerDefinition.timeInfo.timeExtent = [o, f];
    }
    return m;
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: n } = this._queryEngine;
    return await Promise.all([K(t, n), F(e.adds, t), F(e.updates, t)]), await this._waitSnapshotComplete(), this._applyEdits(e);
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t.signal);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  async refresh(e) {
    var i;
    this._loadOptions.customParameters = e, (i = this._snapshotTask) == null || i.abort(), this._snapshotTask = D(this._snapshotFeatures), this._snapshotTask.promise.then((r) => {
      this._queryEngine.featureStore.clear(), this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, r);
      const a = this._normalizeFeatures(r);
      a && this._queryEngine.featureStore.addMany(a);
    }, (r) => {
      this._queryEngine.featureStore.clear(), Q(r) || v.getLogger("geoscene.layers.GeoJSONLayer").error(new _("geojson-layer:refresh", "An error occurred during refresh", { error: r }));
    }), await this._waitSnapshotComplete();
    const { fullExtent: t, timeExtent: n } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: t, timeExtent: n };
  }
  async _createFeatures(e) {
    if (e == null)
      return [];
    const { geometryType: t, hasZ: n, objectIdField: i } = this._queryEngine, r = J(e, { geometryType: t, hasZ: n, objectIdField: i });
    if (!Z(this._queryEngine.spatialReference, g))
      for (const a of r)
        a.geometry != null && (a.geometry = P(E(A(a.geometry, this._queryEngine.geometryType, this._queryEngine.hasZ, !1), g, this._queryEngine.spatialReference)));
    return r;
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(e) {
    const { url: t, customParameters: n } = this._loadOptions, i = (await G(t, { responseType: "json", query: { ...n }, signal: e })).data;
    return await U(i), i;
  }
  _normalizeFeatures(e, t, n) {
    const { objectIdField: i } = this._queryEngine, r = [];
    for (const a of e) {
      const u = this._createDefaultAttributes(), d = b(this._fieldsIndex, u, a.attributes, !0, t);
      d ? n == null || n.push(d) : (this._assignObjectId(u, a.attributes, !0), a.attributes = u, a.objectId = u[i], r.push(a));
    }
    return r;
  }
  async _applyEdits(e) {
    const { adds: t, updates: n, deletes: i } = e, r = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t && t.length && this._applyAddEdits(r, t), n && n.length && this._applyUpdateEdits(r, n), i && i.length) {
      for (const d of i)
        r.deleteResults.push(w(d));
      this._queryEngine.featureStore.removeManyById(i);
    }
    const { fullExtent: a, timeExtent: u } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: a, timeExtent: u, featureEditResults: r };
  }
  _applyAddEdits(e, t) {
    const { addResults: n } = e, { geometryType: i, hasM: r, hasZ: a, objectIdField: u, spatialReference: d, featureStore: c } = this._queryEngine, y = [];
    for (const s of t) {
      if (s.geometry && i !== q(s.geometry)) {
        n.push(I("Incorrect geometry type."));
        continue;
      }
      const l = this._createDefaultAttributes(), h = b(this._fieldsIndex, l, s.attributes);
      if (h)
        n.push(h);
      else {
        if (this._assignObjectId(l, s.attributes), s.attributes = l, s.uid != null) {
          const p = s.attributes[u];
          e.uidToObjectId[s.uid] = p;
        }
        if (s.geometry != null) {
          const p = s.geometry.spatialReference ?? d;
          s.geometry = E(S(s.geometry, p), p, d);
        }
        y.push(s), n.push(w(s.attributes[u]));
      }
    }
    c.addMany(M([], y, i, a, r, u));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const { geometryType: n, hasM: i, hasZ: r, objectIdField: a, spatialReference: u, featureStore: d } = this._queryEngine;
    for (const c of t) {
      const { attributes: y, geometry: s } = c, l = y && y[a];
      if (l == null) {
        e.push(I(`Identifier field ${a} missing`));
        continue;
      }
      if (!d.has(l)) {
        e.push(I(`Feature with object id ${l} missing`));
        continue;
      }
      const h = N(d.getFeature(l), n, r, i);
      if (s != null) {
        if (n !== q(s)) {
          e.push(I("Incorrect geometry type."));
          continue;
        }
        const p = s.spatialReference ?? u;
        h.geometry = E(S(s, p), p, u);
      }
      if (y) {
        const p = b(this._fieldsIndex, h.attributes, y);
        if (p) {
          e.push(p);
          continue;
        }
      }
      d.add(z(h, n, r, i, a)), e.push(w(l));
    }
  }
  _createObjectIdGenerator(e, t) {
    const n = e.fieldsIndex.get(e.objectIdField);
    if (n.type === "esriFieldTypeString")
      return () => n.name + "-" + Date.now().toString(16);
    let i = Number.NEGATIVE_INFINITY;
    for (const r of t)
      r.objectId && (i = Math.max(i, r.objectId));
    return i = Math.max(0, i) + 1, () => i++;
  }
  _assignObjectId(e, t, n = !1) {
    const i = this._queryEngine.objectIdField;
    e[i] = n && i in t ? t[i] : this._objectIdGenerator();
  }
  async _checkProjection(e) {
    try {
      await F(g, e);
    } catch {
      throw new _("geojson-layer", "Projection not supported");
    }
  }
}
export {
  je as default
};
import { y as I, aR as v, aS as Q, aT as M, l as Z, aX as b, r as _, aY as q, aZ as $, a_ as A, aQ as D, a5 as w } from "./index-j1oaLRcp.js";
import { t as P, n as k } from "./objectIdUtils-4qzxZdBC.js";
import { m as C } from "./FeatureStore-yEt-cJgR.js";
import { f as E, g as T } from "./projectionSupport-eTH1ob6-.js";
import { V as G } from "./QueryEngine-t0J8FDj7.js";
import { a as W, n as z, l as L } from "./clientSideDefaults-ZvpGx7fH.js";
import { y as B, u as g, d as j, c as x, h as O } from "./sourceUtils-yX1UM-f_.js";
import "vue";
import "./PooledRBush-6KS_9oyk.js";
import "./json-uwIaZKlZ.js";
import "./WhereClause-GhOl_FlK.js";
import "./QueryEngineCapabilities-gmxC9I6i.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./utils-JVqMpUTR.js";
import "./ClassBreaksDefinition-nlZvFIvT.js";
import "./spatialQuerySupport-IkUKoANG.js";
const U = D, V = { xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: D }, H = { hasAttachments: !1, capabilities: "query, editing, create, delete, update", useStandardizedQueries: !0, supportsCoordinatesQuantization: !0, supportsReturningQueryGeometry: !0, advancedQueryCapabilities: { supportsQueryAttachments: !1, supportsStatistics: !0, supportsPercentileStatistics: !0, supportsReturningGeometryCentroid: !0, supportsQueryWithDistance: !0, supportsDistinct: !0, supportsReturningQueryExtent: !0, supportsReturningGeometryProperties: !1, supportsHavingClause: !0, supportsOrderBy: !0, supportsPagination: !0, supportsQueryWithResultType: !1, supportsSqlExpression: !0, supportsDisjointSpatialRel: !0 } };
function X(m) {
  return w(m) ? m.z != null : !!m.hasZ;
}
function Y(m) {
  return w(m) ? m.m != null : !!m.hasM;
}
class ye {
  constructor() {
    this._queryEngine = null, this._nextObjectId = null;
  }
  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = this._fieldsIndex = this._createDefaultAttributes = null;
  }
  async load(e) {
    const t = [], { features: r } = e, i = this._inferLayerProperties(r, e.fields), o = e.fields || [], p = e.hasM != null ? e.hasM : i.hasM, y = e.hasZ != null ? e.hasZ : i.hasZ, f = !e.spatialReference && !i.spatialReference, d = f ? U : e.spatialReference || i.spatialReference, a = f ? V : null, s = e.geometryType || i.geometryType, c = !s;
    let u = e.objectIdField || i.objectIdField, l = e.timeInfo;
    if (!c && (f && t.push({ name: "feature-layer:spatial-reference-not-found", message: "Spatial reference not provided or found in features. Defaults to WGS84" }), !s))
      throw new I("feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");
    if (!u)
      throw new I("feature-layer:missing-property", "objectIdField not set and couldn't be found in the provided fields");
    if (i.objectIdField && u !== i.objectIdField && (t.push({ name: "feature-layer:duplicated-oid-field", message: `Provided objectIdField "${u}" doesn't match the field name "${i.objectIdField}", found in the provided fields` }), u = i.objectIdField), u && !i.objectIdField) {
      let n = null;
      o.some((h) => h.name === u && (n = h, !0)) ? (n.type = "esriFieldTypeOID", n.editable = !1, n.nullable = !1) : o.unshift({ alias: u, name: u, type: "esriFieldTypeOID", editable: !1, nullable: !1 });
    }
    for (const n of o) {
      if (n.name == null && (n.name = n.alias), n.alias == null && (n.alias = n.name), !n.name)
        throw new I("feature-layer:invalid-field-name", "field name is missing", { field: n });
      if (n.name === u && (n.type = "esriFieldTypeOID"), v.jsonValues.indexOf(n.type) === -1)
        throw new I("feature-layer:invalid-field-type", `invalid type for field "${n.name}"`, { field: n });
    }
    const F = {};
    for (const n of o)
      if (n.type !== "esriFieldTypeOID" && n.type !== "esriFieldTypeGlobalID") {
        const h = Q(n);
        h !== void 0 && (F[n.name] = h);
      }
    if (this._fieldsIndex = new M(o), this._createDefaultAttributes = W(F, u), l) {
      if (l.startTimeField) {
        const n = this._fieldsIndex.get(l.startTimeField);
        n ? (l.startTimeField = n.name, n.type = "esriFieldTypeDate") : l.startTimeField = null;
      }
      if (l.endTimeField) {
        const n = this._fieldsIndex.get(l.endTimeField);
        n ? (l.endTimeField = n.name, n.type = "esriFieldTypeDate") : l.endTimeField = null;
      }
      if (l.trackIdField) {
        const n = this._fieldsIndex.get(l.trackIdField);
        n ? l.trackIdField = n.name : (l.trackIdField = null, t.push({ name: "feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: l } }));
      }
      l.startTimeField || l.endTimeField || (t.push({ name: "feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing or invalid", details: { timeInfo: l } }), l = null);
    }
    const R = { warnings: t, featureErrors: [], layerDefinition: { ...H, drawingInfo: z(s), templates: L(F), extent: a, geometryType: s, objectIdField: u, fields: o, hasZ: !!y, hasM: !!p, timeInfo: l }, assignedObjectIds: {} };
    if (this._queryEngine = new G({ fields: o, geometryType: s, hasM: p, hasZ: y, objectIdField: u, spatialReference: d, featureStore: new C({ geometryType: s, hasM: p, hasZ: y }), timeInfo: l, cacheSpatialQueries: !0 }), !r || !r.length)
      return this._nextObjectId = P, R;
    const S = k(u, r);
    return this._nextObjectId = S + 1, await E(r, d), this._loadInitialFeatures(R, r);
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: r } = this._queryEngine;
    return await Promise.all([B(t, r), E(e.adds, t), E(e.updates, t)]), this._applyEdits(e);
  }
  queryFeatures(e, t = {}) {
    return this._queryEngine.executeQuery(e, t.signal);
  }
  queryFeatureCount(e, t = {}) {
    return this._queryEngine.executeQueryForCount(e, t.signal);
  }
  queryObjectIds(e, t = {}) {
    return this._queryEngine.executeQueryForIds(e, t.signal);
  }
  queryExtent(e, t = {}) {
    return this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  querySnapping(e, t = {}) {
    return this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  _inferLayerProperties(e, t) {
    let r, i, o = null, p = null, y = null;
    for (const f of e) {
      const d = f.geometry;
      if (!Z(d) && (o || (o = b(d)), p || (p = d.spatialReference), r == null && (r = X(d)), i == null && (i = Y(d)), o && p && r != null && i != null))
        break;
    }
    if (t && t.length) {
      let f = null;
      t.some((d) => {
        const a = d.type === "esriFieldTypeOID", s = !d.type && d.name && d.name.toLowerCase() === "objectid";
        return f = d, a || s;
      }) && (y = f.name);
    }
    return { geometryType: o, spatialReference: p, objectIdField: y, hasM: i, hasZ: r };
  }
  _loadInitialFeatures(e, t) {
    const { geometryType: r, hasM: i, hasZ: o, objectIdField: p, spatialReference: y, featureStore: f } = this._queryEngine, d = [];
    for (const a of t) {
      if (a.uid != null && (e.assignedObjectIds[a.uid] = -1), a.geometry && r !== b(a.geometry)) {
        e.featureErrors.push(g("Incorrect geometry type."));
        continue;
      }
      const s = this._createDefaultAttributes(), c = j(this._fieldsIndex, s, a.attributes, !0, e.warnings);
      c ? e.featureErrors.push(c) : (this._assignObjectId(s, a.attributes, !0), a.attributes = s, a.uid != null && (e.assignedObjectIds[a.uid] = a.attributes[p]), _(a.geometry) && (a.geometry = T(a.geometry, a.geometry.spatialReference, y)), d.push(a));
    }
    if (f.addMany(q([], d, r, o, i, p)), e.layerDefinition.extent = this._queryEngine.fullExtent, e.layerDefinition.timeInfo) {
      const { start: a, end: s } = this._queryEngine.timeExtent;
      e.layerDefinition.timeInfo.timeExtent = [a, s];
    }
    return e;
  }
  _applyEdits(e) {
    const { adds: t, updates: r, deletes: i } = e, o = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t && t.length && this._applyAddEdits(o, t), r && r.length && this._applyUpdateEdits(o, r), i && i.length) {
      for (const p of i)
        o.deleteResults.push(x(p));
      this._queryEngine.featureStore.removeManyById(i);
    }
    return { fullExtent: this._queryEngine.fullExtent, featureEditResults: o };
  }
  _applyAddEdits(e, t) {
    const { addResults: r } = e, { geometryType: i, hasM: o, hasZ: p, objectIdField: y, spatialReference: f, featureStore: d } = this._queryEngine, a = [];
    for (const s of t) {
      if (s.geometry && i !== b(s.geometry)) {
        r.push(g("Incorrect geometry type."));
        continue;
      }
      const c = this._createDefaultAttributes(), u = j(this._fieldsIndex, c, s.attributes);
      if (u)
        r.push(u);
      else {
        if (this._assignObjectId(c, s.attributes), s.attributes = c, s.uid != null) {
          const l = s.attributes[y];
          e.uidToObjectId[s.uid] = l;
        }
        _(s.geometry) && (s.geometry = T(O(s.geometry, f), s.geometry.spatialReference, f)), a.push(s), r.push(x(s.attributes[y]));
      }
    }
    d.addMany(q([], a, i, p, o, y));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const { geometryType: r, hasM: i, hasZ: o, objectIdField: p, spatialReference: y, featureStore: f } = this._queryEngine;
    for (const d of t) {
      const { attributes: a, geometry: s } = d, c = a && a[p];
      if (c == null) {
        e.push(g(`Identifier field ${p} missing`));
        continue;
      }
      if (!f.has(c)) {
        e.push(g(`Feature with object id ${c} missing`));
        continue;
      }
      const u = $(f.getFeature(c), r, o, i);
      if (_(s)) {
        if (r !== b(s)) {
          e.push(g("Incorrect geometry type."));
          continue;
        }
        u.geometry = T(O(s, y), s.spatialReference, y);
      }
      if (a) {
        const l = j(this._fieldsIndex, u.attributes, a);
        if (l) {
          e.push(l);
          continue;
        }
      }
      f.add(A(u, r, o, i, p)), e.push(x(c));
    }
  }
  _assignObjectId(e, t, r = !1) {
    const i = this._queryEngine.objectIdField;
    r && t && isFinite(t[i]) ? e[i] = t[i] : e[i] = this._nextObjectId++;
  }
}
export {
  ye as default
};

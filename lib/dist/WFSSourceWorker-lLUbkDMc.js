import { bc as h, J as m, aQ as o, r as g, aV as _, aW as d, aT as f, w, y as u, aU as E, g as q, s as F } from "./index-Ek1MTSEY.js";
import { m as S } from "./FeatureStore-jXd5NPYd.js";
import { g as T, f as x } from "./projectionSupport-OcYAvekw.js";
import { V as b } from "./QueryEngine-VI1gPsDJ.js";
import { O as I, L as j } from "./geojson-niEOVREX.js";
import { d as C } from "./sourceUtils-P1n6socB.js";
import { K as P } from "./wfsUtils-ow9yNepC.js";
import "vue";
import "./PooledRBush-3WmNXB5l.js";
import "./json-uwIaZKlZ.js";
import "./WhereClause-tgx5XbAS.js";
import "./QueryEngineCapabilities-gmxC9I6i.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./utils-GLnihTtT.js";
import "./ClassBreaksDefinition-niJmWb63.js";
import "./spatialQuerySupport-Z2pv9ola.js";
import "./xmlUtils-mxxkHqmu.js";
class z {
  constructor() {
    this._queryEngine = null, this._customParameters = null, this._snapshotFeatures = async (e) => {
      const { objectIdField: t } = this._queryEngine, s = await P(this._getFeatureUrl, this._featureType.typeName, this._getFeatureOutputFormat, { customParameters: this._customParameters, dateFields: this._queryEngine.fieldsIndex.dateFields.map((r) => r.name), signal: e });
      await I(s), h(e);
      const a = j(s, { geometryType: this._queryEngine.geometryType, hasZ: !1, objectIdField: t });
      if (!m(this._queryEngine.spatialReference, o))
        for (const r of a)
          g(r.geometry) && (r.geometry = _(T(d(r.geometry, this._queryEngine.geometryType, !1, !1), o, this._queryEngine.spatialReference)));
      let n = 1;
      for (const r of a) {
        const i = {};
        C(this._fieldsIndex, i, r.attributes, !0), r.attributes = i, r.attributes[t] == null && (r.objectId = r.attributes[t] = n++);
      }
      return a;
    };
  }
  destroy() {
    var e;
    (e = this._queryEngine) == null || e.destroy(), this._queryEngine = null;
  }
  async load(e, t) {
    const { getFeatureUrl: s, getFeatureOutputFormat: a, spatialReference: n, fields: r, geometryType: i, featureType: p, objectIdField: y, customParameters: c } = e;
    this._featureType = p, this._customParameters = c, this._getFeatureUrl = s, this._getFeatureOutputFormat = a, this._fieldsIndex = new f(r), await this._checkProjection(n), h(t), this._queryEngine = new b({ fields: r, geometryType: i, hasM: !1, hasZ: !1, objectIdField: y, spatialReference: n, timeInfo: null, featureStore: new S({ geometryType: i, hasM: !1, hasZ: !1 }) });
    const l = await this._snapshotFeatures(w(t.signal));
    return this._queryEngine.featureStore.addMany(l), { extent: this._queryEngine.fullExtent };
  }
  async applyEdits() {
    throw new u("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
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
    var t;
    return this._customParameters = e, (t = this._snapshotTask) == null || t.abort(), this._snapshotTask = E(this._snapshotFeatures), this._snapshotTask.promise.then((s) => {
      this._queryEngine.featureStore.clear(), s && this._queryEngine.featureStore.addMany(s);
    }, (s) => {
      this._queryEngine.featureStore.clear(), q(s) || F.getLogger("geoscene.layers.WFSLayer").error(new u("wfs-layer:getfeature-error", "An error occurred during the GetFeature request", { error: s }));
    }), await this._waitSnapshotComplete(), { extent: this._queryEngine.fullExtent };
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
  async _checkProjection(e) {
    try {
      await x(o, e);
    } catch {
      throw new u("unsupported-projection", "Projection not supported", { spatialReference: e });
    }
  }
}
export {
  z as default
};

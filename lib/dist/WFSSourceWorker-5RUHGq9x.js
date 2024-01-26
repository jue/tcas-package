import { b5 as p, S as l, bY as o, bZ as g, H as u, c0 as _, d, s as f } from "./index-B7TsCcH6.js";
import { r as w, s as E } from "./featureConversionUtils-oKi2Ei-6.js";
import { m as q } from "./FeatureStore-1Yde9T8N.js";
import { g as F, f as S } from "./projectionSupport-P-Yk17hX.js";
import { e as x } from "./QueryEngine-rs36pY9p.js";
import { T, I as b } from "./geojson-jPepW0LN.js";
import { d as I } from "./sourceUtils-DToSfz9e.js";
import { H as j } from "./wfsUtils-ctD68ekP.js";
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
import "./xmlUtils-0nU_OsFP.js";
class te {
  constructor() {
    this._queryEngine = null, this._customParameters = null, this._snapshotFeatures = async (e) => {
      const { objectIdField: t } = this._queryEngine, s = await j(this._getFeatureUrl ?? "", this._featureType.typeName, this._getFeatureOutputFormat, { customParameters: this._customParameters, dateFields: this._queryEngine.fieldsIndex.dateFields.map((r) => r.name), signal: e });
      await T(s), p(e);
      const a = b(s, { geometryType: this._queryEngine.geometryType, hasZ: !1, objectIdField: t });
      if (!l(this._queryEngine.spatialReference, o))
        for (const r of a)
          r.geometry != null && (r.geometry = w(F(E(r.geometry, this._queryEngine.geometryType, !1, !1), o, this._queryEngine.spatialReference)));
      let n = 1;
      for (const r of a) {
        const i = {};
        I(this._fieldsIndex, i, r.attributes, !0), r.attributes = i, r.attributes[t] == null && (r.objectId = r.attributes[t] = n++);
      }
      return a;
    };
  }
  destroy() {
    var e;
    (e = this._queryEngine) == null || e.destroy(), this._queryEngine = null;
  }
  async load(e, t) {
    const { getFeatureUrl: s, getFeatureOutputFormat: a, spatialReference: n, fields: r, geometryType: i, featureType: h, objectIdField: m, customParameters: y } = e;
    this._featureType = h, this._customParameters = y, this._getFeatureUrl = s, this._getFeatureOutputFormat = a, this._fieldsIndex = new g(r), await this._checkProjection(n), p(t), this._queryEngine = new x({ fields: r, geometryType: i, hasM: !1, hasZ: !1, objectIdField: m, spatialReference: n, timeInfo: null, featureStore: new q({ geometryType: i, hasM: !1, hasZ: !1 }) });
    const c = await this._snapshotFeatures(t.signal);
    return this._queryEngine.featureStore.addMany(c), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
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
    return this._customParameters = e, (t = this._snapshotTask) == null || t.abort(), this._snapshotTask = _(this._snapshotFeatures), this._snapshotTask.promise.then((s) => {
      this._queryEngine.featureStore.clear(), s && this._queryEngine.featureStore.addMany(s);
    }, (s) => {
      this._queryEngine.featureStore.clear(), d(s) || f.getLogger("geoscene.layers.WFSLayer").error(new u("wfs-layer:getfeature-error", "An error occurred during the GetFeature request", { error: s }));
    }), await this._waitSnapshotComplete(), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
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
      await S(o, e);
    } catch {
      throw new u("unsupported-projection", "Projection not supported", { spatialReference: e });
    }
  }
}
export {
  te as default
};

import { s as m, H as p, _ as c, aD as _, a6 as u } from "./index-h53IWweP.js";
import { z as y, v as f, n as w } from "./timeSupport-4vool2zW.js";
import { I } from "./FeatureStore2D-dnHLHpqY.js";
import "vue";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./projectionSupport-p_kmYZqX.js";
import "./json-uwIaZKlZ.js";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./utils-QyFvT44r.js";
import "./CircularArray-y-fwYqtW.js";
import "./ComputedAttributeStorage-X4eusieF.js";
import "./arcadeTimeUtils-u_1BvLqu.js";
import "./executionError-EEhTiqtD.js";
import "./definitions-Ikx6Iti_.js";
import "./visualVariablesUtils-ESIGpRYL.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
const d = m.getLogger("geoscene.views.2d.layers.features.support.whereUtils"), b = { getAttribute: (r, e) => r.field(e) };
async function g(r, e) {
  const t = await import("./WhereClause-QfxSJvm_.js").then((i) => i.W);
  try {
    const i = t.WhereClause.create(r, e);
    if (!i.isStandardized) {
      const s = new p("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", i);
      d.error(s);
    }
    return (s) => {
      const n = s.readArcadeFeature();
      return i.testFeature(n, b);
    };
  } catch {
    return d.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r), (s) => !0;
  }
}
const a = 1, T = 2;
class k {
  constructor(e) {
    this._geometryBounds = c(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = e;
  }
  get hash() {
    return this._hash;
  }
  check(e) {
    return this._applyFilter(e);
  }
  clear() {
    const e = this._resetAllHiddenIds();
    return this.update(), { show: e, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((e, t) => {
      this._idToVisibility.set(t, 0);
    });
  }
  setKnownIds(e) {
    for (const t of e)
      this._idToVisibility.set(t, a);
  }
  setTrue(e) {
    const t = [], i = [], s = new Set(e);
    return this._idToVisibility.forEach((n, o) => {
      const l = !!(this._idToVisibility.get(o) & a), h = s.has(o);
      !l && h ? t.push(o) : l && !h && i.push(o), this._idToVisibility.set(o, h ? a | T : 0);
    }), { show: t, hide: i };
  }
  createQuery() {
    const { geometry: e, spatialRel: t, where: i, timeExtent: s, objectIds: n } = this;
    return _.fromJSON({ geometry: e, spatialRel: t, where: i, timeExtent: s, objectIds: n });
  }
  async update(e, t) {
    this._hash = JSON.stringify(e);
    const i = await y(e, null, t);
    await Promise.all([this._setGeometryFilter(i), this._setIdFilter(i), this._setAttributeFilter(i), this._setTimeFilter(i)]);
  }
  async _setAttributeFilter(e) {
    if (!e || !e.where)
      return this._clause = null, void (this.where = null);
    this._clause = await g(e.where, this._serviceInfo.fieldsIndex), this.where = e.where;
  }
  _setIdFilter(e) {
    this._idsToShow = e && e.objectIds && new Set(e.objectIds), this._idsToHide = e && e.hiddenIds && new Set(e.hiddenIds), this.objectIds = e && e.objectIds;
  }
  async _setGeometryFilter(e) {
    if (!e || !e.geometry)
      return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const t = e.geometry, i = e.spatialRel || "esriSpatialRelIntersects", s = await f(i, t, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    u(this._geometryBounds, t), this._spatialQueryOperator = s, this.geometry = t, this.spatialRel = i;
  }
  _setTimeFilter(e) {
    if (this.timeExtent = this._timeOperator = null, e && e.timeExtent)
      if (this._serviceInfo.timeInfo)
        this.timeExtent = e.timeExtent, this._timeOperator = w(this._serviceInfo.timeInfo, e.timeExtent, I);
      else {
        const t = new p("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", e.timeExtent);
        m.getLogger("geoscene.views.2d.layers.features.controllers.FeatureFilter").error(t);
      }
  }
  _applyFilter(e) {
    return this._filterByGeometry(e) && this._filterById(e) && this._filterByTime(e) && this._filterByExpression(e);
  }
  _filterByExpression(e) {
    return !this.where || this._clause(e);
  }
  _filterById(e) {
    return (!this._idsToHide || !this._idsToHide.size || !this._idsToHide.has(e.getObjectId())) && (!this._idsToShow || !this._idsToShow.size || this._idsToShow.has(e.getObjectId()));
  }
  _filterByGeometry(e) {
    if (!this.geometry)
      return !0;
    const t = e.readHydratedGeometry();
    return !!t && this._spatialQueryOperator(t);
  }
  _filterByTime(e) {
    return this._timeOperator == null || this._timeOperator(e);
  }
  _resetAllHiddenIds() {
    const e = [];
    return this._idToVisibility.forEach((t, i) => {
      t & a || (this._idToVisibility.set(i, a), e.push(i));
    }), e;
  }
}
export {
  k as default
};

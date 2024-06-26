import { s as c, y as m, dh as u, dI as _, dJ as p, r as y } from "./index-Ek1MTSEY.js";
import { Z as f, v as w, n as I } from "./spatialQuerySupport-Z2pv9ola.js";
import { u as b } from "./FeatureStore2D-mb7RzHnA.js";
import "vue";
import "./projectionSupport-OcYAvekw.js";
import "./json-uwIaZKlZ.js";
import "./CircularArray-_0_Ut6zm.js";
import "./ComputedAttributeStorage-oDQUKOa8.js";
import "./enums-YM9SAu8u.js";
import "./visualVariablesUtils-MRd41y5-.js";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-EcwyP76J.js";
const d = c.getLogger("geoscene.views.2d.layers.features.support.whereUtils"), g = { getAttribute: (r, e) => r.field(e) };
async function T(r, e) {
  const t = await import("./WhereClause-tgx5XbAS.js");
  try {
    const i = t.WhereClause.create(r, e);
    if (!i.isStandardized) {
      const s = new m("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", i);
      d.error(s);
    }
    return (s) => {
      const n = s.readArcadeFeature();
      return i.testFeature(n, g);
    };
  } catch {
    return d.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r), (s) => !0;
  }
}
const v = c.getLogger("geoscene.views.2d.layers.features.controllers.FeatureFilter"), a = 1, x = 2;
class U {
  constructor(e) {
    this._geometryBounds = u(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = e;
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
      !l && h ? t.push(o) : l && !h && i.push(o), this._idToVisibility.set(o, h ? a | x : 0);
    }), { show: t, hide: i };
  }
  createQuery() {
    const { geometry: e, spatialRel: t, where: i, timeExtent: s, objectIds: n } = this;
    return _.fromJSON({ geometry: e, spatialRel: t, where: i, timeExtent: s, objectIds: n });
  }
  async update(e, t) {
    this._hash = JSON.stringify(e);
    const i = await f(e, null, t);
    await Promise.all([this._setGeometryFilter(i), this._setIdFilter(i), this._setAttributeFilter(i), this._setTimeFilter(i)]);
  }
  async _setAttributeFilter(e) {
    if (!e || !e.where)
      return this._clause = null, void (this.where = null);
    this._clause = await T(e.where, this._serviceInfo.fieldsIndex), this.where = e.where;
  }
  _setIdFilter(e) {
    this._idsToShow = e && e.objectIds && new Set(e.objectIds), this._idsToHide = e && e.hiddenIds && new Set(e.hiddenIds), this.objectIds = e && e.objectIds;
  }
  async _setGeometryFilter(e) {
    if (!e || !e.geometry)
      return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const t = e.geometry, i = e.spatialRel || "esriSpatialRelIntersects", s = await w(i, t, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    p(this._geometryBounds, t), this._spatialQueryOperator = s, this.geometry = t, this.spatialRel = i;
  }
  _setTimeFilter(e) {
    if (this.timeExtent = this._timeOperator = null, e && e.timeExtent)
      if (this._serviceInfo.timeInfo)
        this.timeExtent = e.timeExtent, this._timeOperator = I(this._serviceInfo.timeInfo, e.timeExtent, b);
      else {
        const t = new m("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", e.timeExtent);
        v.error(t);
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
    return !y(this._timeOperator) || this._timeOperator(e);
  }
  _resetAllHiddenIds() {
    const e = [];
    return this._idToVisibility.forEach((t, i) => {
      t & a || (this._idToVisibility.set(i, a), e.push(i));
    }), e;
  }
}
export {
  U as default
};

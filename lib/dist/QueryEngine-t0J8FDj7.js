import { bo as ae, y as T, l as k, b6 as we, J as Z, r as L, aV as ve, b4 as re, fA as be, fB as ne, fC as Qe, fD as Ee, dg as Ie, fE as ze, ar as Fe, fF as Ve, aT as Ce, fG as oe, fH as le, S as N, as as $e, fI as De, au as Ge, ag as X, V as ue, a4 as ce, fJ as he, fK as Pe, a9 as Ne, fL as de, a7 as Me, dJ as Oe, dh as je } from "./index-j1oaLRcp.js";
import { WhereClause as qe } from "./WhereClause-GhOl_FlK.js";
import { g as j, M as ke, f as K } from "./projectionSupport-eTH1ob6-.js";
import { t as Be } from "./QueryEngineCapabilities-gmxC9I6i.js";
import { s as fe } from "./quantizationUtils-p-hCoL_j.js";
import { T as Ze, s as Le, m as me, c as pe, V as He, g as Ue, h as Je, y as Ye, D as We, z as Xe, f as Ke, d as et } from "./utils-JVqMpUTR.js";
import { z as B, n as tt, J, O as ye, t as st, P as M, U as O, v as ge, I as xe, a as _e } from "./spatialQuerySupport-IkUKoANG.js";
let it = class {
  constructor(e, t) {
    this._cache = new ae(e), this._invalidCache = new ae(t);
  }
  get(e, t) {
    const s = `${t.uid}:${e}`, i = this._cache.get(s);
    if (i)
      return i;
    if (this._invalidCache.get(s) !== void 0)
      return null;
    try {
      const a = qe.create(e, t);
      return this._cache.put(s, a), a;
    } catch {
      return this._invalidCache.put(s, null), null;
    }
  }
};
const ee = new it(50, 500), C = "feature-store:unsupported-query", Se = " as ", at = /* @__PURE__ */ new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeDate"]);
function rt(m, e) {
  if (!e)
    return !0;
  const t = ee.get(e, m);
  if (!t)
    throw new T(C, "invalid SQL expression", { where: e });
  if (!t.isStandardized)
    throw new T(C, "where clause is not standard", { where: e });
  return V(m, t.fieldNames, "where clause contains missing fields"), !0;
}
function nt(m, e, t) {
  if (!e)
    return !0;
  const s = ee.get(e, m);
  if (!s)
    throw new T(C, "invalid SQL expression", { having: e });
  if (!s.isAggregate)
    throw new T(C, "having does not contain a valid aggregate function", { having: e });
  const i = s.fieldNames;
  if (V(m, i, "having contains missing fields"), !s.getExpressions().every((a) => {
    const { aggregateType: r, field: o } = a, n = m.has(o) && m.get(o).name;
    return t.some((l) => {
      const { onStatisticField: u, statisticType: h } = l;
      return (m.has(u) && m.get(u).name) === n && h.toLowerCase().trim() === r;
    });
  }))
    throw new T(C, "expressions in having should also exist in outStatistics", { having: e });
  return !0;
}
function q(m, e) {
  return m ? ee.get(m, e) : null;
}
function V(m, e, t, s = !0) {
  const i = [];
  for (const a of e)
    if (a !== "*" && !m.has(a))
      if (s) {
        const r = Te(a);
        try {
          const o = q(r, m);
          if (!o)
            throw new T(C, "invalid SQL expression", { where: r });
          if (!o.isStandardized)
            throw new T(C, "expression is not standard", { clause: o });
          V(m, o.fieldNames, "expression contains missing fields");
        } catch (o) {
          const n = o && o.details;
          if (n && (n.clause || n.where))
            throw o;
          n && n.missingFields ? i.push(...n.missingFields) : i.push(a);
        }
      } else
        i.push(a);
  if (i.length)
    throw new T(C, t, { missingFields: i });
}
function Te(m) {
  return m.split(Se)[0];
}
function ot(m) {
  return m.split(Se)[1];
}
function lt(m, e) {
  const t = e.get(m);
  return !!t && !at.has(t.type);
}
class Y {
  constructor(e, t, s) {
    this._fieldDataCache = /* @__PURE__ */ new Map(), this._returnDistinctMap = /* @__PURE__ */ new Map(), this.returnDistinctValues = e.returnDistinctValues, this.fieldsIndex = s, this.featureAdapter = t;
    const i = e.outFields;
    if (i && i.indexOf("*") === -1) {
      this.outFields = i;
      let a = 0;
      for (const r of i) {
        const o = Te(r), n = this.fieldsIndex.get(o), l = n ? null : q(o, s), u = n ? n.name : ot(r) || "FIELD_EXP_" + a++;
        this._fieldDataCache.set(r, { alias: u, clause: l });
      }
    }
  }
  countDistinctValues(e) {
    return this.returnDistinctValues ? (e.forEach((t) => this.getAttributes(t)), this._returnDistinctMap.size) : e.length;
  }
  getAttributes(e) {
    const t = this._processAttributesForOutFields(e);
    return this._processAttributesForDistinctValues(t);
  }
  getFieldValue(e, t, s) {
    const i = s ? s.name : t;
    let a = null;
    return this._fieldDataCache.has(i) ? a = this._fieldDataCache.get(i).clause : s || (a = q(t, this.fieldsIndex), this._fieldDataCache.set(i, { alias: i, clause: a })), s ? this.featureAdapter.getAttribute(e, i) : a.calculateValue(e, this.featureAdapter);
  }
  getNormalizedValue(e, t) {
    const s = t.normalizationType, i = t.normalizationTotal;
    let a = this.getFieldValue(e, t.field, t.fieldInfo);
    if (s && Number.isFinite(a)) {
      const r = this.getFieldValue(e, t.normalizationField, t.normalizationFieldInfo);
      a = Ze(a, s, r, i);
    }
    return a;
  }
  getExpressionValue(e, t, s) {
    const i = { attributes: this.featureAdapter.getAttributes(e) }, a = s.createExecContext(i, t.viewInfo);
    return s.executeFunction(t.compiledFunc, a);
  }
  validateItem(e, t) {
    return this._fieldDataCache.has(t) || this._fieldDataCache.set(t, { alias: t, clause: q(t, this.fieldsIndex) }), this._fieldDataCache.get(t).clause.testFeature(e, this.featureAdapter);
  }
  validateItems(e, t) {
    return this._fieldDataCache.has(t) || this._fieldDataCache.set(t, { alias: t, clause: q(t, this.fieldsIndex) }), this._fieldDataCache.get(t).clause.testSet(e, this.featureAdapter);
  }
  _processAttributesForOutFields(e) {
    const t = this.outFields;
    if (!t || !t.length)
      return this.featureAdapter.getAttributes(e);
    const s = {};
    for (const i of t) {
      const { alias: a, clause: r } = this._fieldDataCache.get(i);
      s[a] = r ? r.calculateValue(e, this.featureAdapter) : this.featureAdapter.getAttribute(e, a);
    }
    return s;
  }
  _processAttributesForDistinctValues(e) {
    if (k(e) || !this.returnDistinctValues)
      return e;
    const t = this.outFields, s = [];
    if (t)
      for (const r of t) {
        const { alias: o } = this._fieldDataCache.get(r);
        s.push(e[o]);
      }
    else
      for (const r in e)
        s.push(e[r]);
    const i = `${(t || ["*"]).join(",")}=${s.join(",")}`;
    let a = this._returnDistinctMap.get(i) || 0;
    return this._returnDistinctMap.set(i, ++a), a > 1 ? null : e;
  }
}
class S {
  constructor(e, t, s) {
    this.items = e, this.queryGeometry = t, this.definitionExpression = s.definitionExpression, this.geometryType = s.geometryType, this.hasM = s.hasM, this.hasZ = s.hasZ, this.objectIdField = s.objectIdField, this.spatialReference = s.spatialReference, this.fieldsIndex = s.fieldsIndex, this.timeInfo = s.timeInfo, this.featureAdapter = s.featureAdapter, this.aggregateAdapter = s.aggregateAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount(e) {
    const t = new Y(e, this.featureAdapter, this.fieldsIndex);
    if (!e.outStatistics)
      return t.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: s, having: i } = e;
    if (!(s != null && s.length))
      return 1;
    const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), n = e.outStatistics;
    for (const l of n) {
      const { statisticType: u } = l, h = u !== "exceedslimit" ? l.onStatisticField : void 0;
      if (!r.has(h)) {
        const f = [];
        for (const c of s) {
          const _ = this._getAttributeValues(t, c, a);
          f.push(_);
        }
        r.set(h, this._calculateUniqueValues(f, t.returnDistinctValues));
      }
      const d = r.get(h);
      for (const f in d) {
        const { data: c, items: _ } = d[f], I = c.join(",");
        i && !t.validateItems(_, i) || o.add(I);
      }
    }
    return o.size;
  }
  async createQueryResponse(e) {
    let t;
    return e.outStatistics ? t = e.outStatistics.some((s) => s.statisticType === "exceedslimit") ? this._createExceedsLimitQueryResponse(e) : await this._createStatisticsQueryResponse(e) : t = this._createFeatureQueryResponse(e), e.returnQueryGeometry && (we(e.outSR) && !Z(this.queryGeometry.spatialReference, e.outSR) ? t.queryGeometry = B({ spatialReference: e.outSR, ...j(this.queryGeometry, this.queryGeometry.spatialReference, e.outSR) }) : t.queryGeometry = B({ spatialReference: e.outSR, ...this.queryGeometry })), t;
  }
  createSnappingResponse(e, t) {
    const s = this.featureAdapter, i = ct(this.hasZ, this.hasM), { x: a, y: r } = e.point, o = typeof e.distance == "number" ? e.distance : e.distance.x, n = typeof e.distance == "number" ? e.distance : e.distance.y, l = { candidates: [] }, u = this.geometryType === "esriGeometryPolygon", h = this._getPointCreator(e.point, this.spatialReference, t);
    for (const d of this.items) {
      const f = s.getGeometry(d);
      if (k(f))
        continue;
      const { coords: c, lengths: _ } = f;
      if (e.types & H.EDGE) {
        let I = 0;
        for (let w = 0; w < _.length; w++) {
          const p = _[w];
          for (let x = 0; x < p; x++, I += i) {
            const F = c[I], y = c[I + 1];
            if (x !== p - 1) {
              const g = c[I + i], R = c[I + i + 1], { x: b, y: $ } = ut(a, r, F, y, g, R), A = (a - b) / o, Q = (r - $) / n, D = A * A + Q * Q;
              D <= 1 && l.candidates.push({ type: "edge", objectId: s.getObjectId(d), distance: Math.sqrt(D), target: h(b, $), start: h(F, y), end: h(g, R) });
            }
          }
        }
      }
      if (e.types & H.VERTEX) {
        const I = u ? c.length - i : c.length;
        for (let w = 0; w < I; w += i) {
          const p = c[w], x = c[w + 1], F = (a - p) / o, y = (r - x) / n, g = F * F + y * y;
          g <= 1 && l.candidates.push({ type: "vertex", objectId: s.getObjectId(d), distance: Math.sqrt(g), target: h(p, x) });
        }
      }
    }
    return l.candidates.sort((d, f) => d.distance - f.distance), l;
  }
  _getPointCreator(e, t, s) {
    const i = L(s) && !Z(t, s) ? (a) => j(a, t, s) : (a) => a;
    return e.z != null && e.m != null ? (a, r) => i({ x: a, y: r, z: e.z, m: e.m }) : e.z != null ? (a, r) => i({ x: a, y: r, z: e.z }) : e.m != null ? (a, r) => i({ x: a, y: r, m: e.m }) : (a, r) => i({ x: a, y: r });
  }
  executeAttributesQuery(e) {
    const t = q(e.where, this.fieldsIndex);
    if (!t)
      return Promise.resolve(this);
    if (t.isStandardized) {
      let s = 0;
      const i = [];
      for (const r of this.items)
        t.testFeature(r, this.featureAdapter) && (i[s++] = r);
      const a = new S(i, this.queryGeometry, this);
      return a.definitionExpression = e.where, Promise.resolve(a);
    }
    return Promise.reject(new TypeError("Where clause is not standardized"));
  }
  executeAggregateIdsQuery(e) {
    if (!e.aggregateIds || !e.aggregateIds.length || k(this.aggregateAdapter))
      return Promise.resolve(this);
    const t = /* @__PURE__ */ new Set();
    for (const i of e.aggregateIds)
      this.aggregateAdapter.getFeatureObjectIds(i).forEach((a) => t.add(a));
    const s = this.featureAdapter.getObjectId;
    return Promise.resolve(new S(this.items.filter((i) => t.has(s(i))), this.queryGeometry, this));
  }
  executeObjectIdsQuery(e) {
    if (!e.objectIds || !e.objectIds.length)
      return Promise.resolve(this);
    const t = new Set(e.objectIds), s = this.featureAdapter.getObjectId;
    return Promise.resolve(new S(this.items.filter((i) => t.has(s(i))), this.queryGeometry, this));
  }
  executeTimeQuery(e) {
    const t = tt(this.timeInfo, e.timeExtent, this.featureAdapter);
    if (!L(t))
      return Promise.resolve(this);
    const s = this.items.filter(t);
    return Promise.resolve(new S(s, this.queryGeometry, this));
  }
  filterLatest() {
    const { trackIdField: e, startTimeField: t, endTimeField: s } = this.timeInfo, i = s || t, a = /* @__PURE__ */ new Map(), r = this.featureAdapter.getAttribute;
    for (const n of this.items) {
      const l = r(n, e), u = r(n, i), h = a.get(l);
      (!h || u > r(h, i)) && a.set(l, n);
    }
    const o = Array.from(a.values());
    return Promise.resolve(new S(o, this.queryGeometry, this));
  }
  async project(e) {
    if (!e || Z(this.spatialReference, e))
      return this;
    const t = this.featureAdapter, s = (await ke(this.items.map((i) => J(this.geometryType, this.hasZ, this.hasM, t.getGeometry(i))), this.spatialReference, e)).map((i, a) => t.cloneWithGeometry(this.items[a], ve(i, this.hasZ, this.hasM)));
    return new S(s, this.queryGeometry, { definitionExpression: this.definitionExpression, geometryType: this.geometryType, hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: e, fieldsIndex: this.fieldsIndex, timeInfo: this.timeInfo, featureAdapter: this.featureAdapter });
  }
  async createSummaryStatisticsResponse(e, t) {
    const { field: s, valueExpression: i, normalizationField: a, normalizationType: r, normalizationTotal: o, minValue: n, maxValue: l, scale: u } = t, h = this.fieldsIndex.isDateField(s), d = await this._getDataValues(e, { field: s, valueExpression: i, normalizationField: a, normalizationType: r, normalizationTotal: o, scale: u }), f = Le({ normalizationType: r, normalizationField: a, minValue: n, maxValue: l }), c = this.fieldsIndex.get(s), _ = { value: 0.5, fieldType: c == null ? void 0 : c.type }, I = re(c) ? me({ values: d, supportsNullCount: f, percentileParams: _ }) : pe({ values: d, minValue: n, maxValue: l, useSampleStdDev: !r, supportsNullCount: f, percentileParams: _ });
    return He(I, h);
  }
  async createUniqueValuesResponse(e, t) {
    const { field: s, valueExpression: i, domain: a, returnAllCodedValues: r, scale: o } = t, n = await this._getDataValues(e, { field: s, valueExpression: i, scale: o }), l = Ue(n);
    return Je(l, a, r);
  }
  async createClassBreaksResponse(e, t) {
    const { field: s, valueExpression: i, normalizationField: a, normalizationType: r, normalizationTotal: o, classificationMethod: n, standardDeviationInterval: l, minValue: u, maxValue: h, numClasses: d, scale: f } = t, c = await this._getDataValues(e, { field: s, valueExpression: i, normalizationField: a, normalizationType: r, normalizationTotal: o, scale: f }), _ = Ye(c, { field: s, normalizationField: a, normalizationType: r, normalizationTotal: o, classificationMethod: n, standardDeviationInterval: l, minValue: u, maxValue: h, numClasses: d });
    return We(_, n);
  }
  async createHistogramResponse(e, t) {
    const { field: s, valueExpression: i, normalizationField: a, normalizationType: r, normalizationTotal: o, classificationMethod: n, standardDeviationInterval: l, minValue: u, maxValue: h, numBins: d, scale: f } = t, c = await this._getDataValues(e, { field: s, valueExpression: i, normalizationField: a, normalizationType: r, normalizationTotal: o, scale: f });
    return Xe(c, { field: s, normalizationField: a, normalizationType: r, normalizationTotal: o, classificationMethod: n, standardDeviationInterval: l, minValue: u, maxValue: h, numBins: d });
  }
  _sortFeatures(e, t, s) {
    if (e.length > 1 && t && t.length)
      for (const i of t.reverse()) {
        const a = i.split(" "), r = a[0], o = this.fieldsIndex.get(r), n = a[1] && a[1].toLowerCase() === "desc", l = Ke(o == null ? void 0 : o.type, n);
        e.sort((u, h) => {
          const d = s(u, r, o), f = s(h, r, o);
          return l(d, f);
        });
      }
  }
  _createFeatureQueryResponse(e) {
    const t = this.items, { geometryType: s, hasM: i, hasZ: a, objectIdField: r, spatialReference: o } = this, { outFields: n, outSR: l, quantizationParameters: u, resultRecordCount: h, resultOffset: d, returnZ: f, returnM: c } = e, _ = h != null && t.length > (d || 0) + h, I = n && (n.includes("*") ? [...this.fieldsIndex.fields] : n.map((w) => this.fieldsIndex.get(w)));
    return { exceededTransferLimit: _, features: this._createFeatures(e, t), fields: I, geometryType: s, hasM: i && c, hasZ: a && f, objectIdFieldName: r, spatialReference: B(l || o), transform: u && fe(u) || null };
  }
  _createFeatures(e, t) {
    const s = new Y(e, this.featureAdapter, this.fieldsIndex), { hasM: i, hasZ: a } = this, { orderByFields: r, quantizationParameters: o, returnGeometry: n, returnCentroid: l, maxAllowableOffset: u, resultOffset: h, resultRecordCount: d, returnZ: f = !1, returnM: c = !1 } = e, _ = a && f, I = i && c;
    let w = [], p = 0;
    const x = [...t];
    if (this._sortFeatures(x, r, (y, g, R) => s.getFieldValue(y, g, R)), n || l) {
      const y = fe(o);
      if (n && !l)
        for (const g of x)
          w[p++] = { attributes: s.getAttributes(g), geometry: J(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(g), u, y, _, I) };
      else if (!n && l)
        for (const g of x)
          w[p++] = { attributes: s.getAttributes(g), centroid: ye(this, this.featureAdapter.getCentroid(g, this), y) };
      else
        for (const g of x)
          w[p++] = { attributes: s.getAttributes(g), centroid: ye(this, this.featureAdapter.getCentroid(g, this), y), geometry: J(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(g), u, y, _, I) };
    } else
      for (const y of x) {
        const g = s.getAttributes(y);
        g && (w[p++] = { attributes: g });
      }
    const F = h || 0;
    if (d != null) {
      const y = F + d;
      w = w.slice(F, Math.min(w.length, y));
    }
    return w;
  }
  _createExceedsLimitQueryResponse(e) {
    let t = !1, s = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY;
    for (const r of e.outStatistics)
      if (r.statisticType === "exceedslimit") {
        s = r.maxPointCount != null ? r.maxPointCount : Number.POSITIVE_INFINITY, i = r.maxRecordCount != null ? r.maxRecordCount : Number.POSITIVE_INFINITY, a = r.maxVertexCount != null ? r.maxVertexCount : Number.POSITIVE_INFINITY;
        break;
      }
    if (this.geometryType === "esriGeometryPoint")
      t = this.items.length > s;
    else if (this.items.length > i)
      t = !0;
    else {
      const r = this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2, o = this.featureAdapter;
      t = this.items.reduce((n, l) => {
        const u = o.getGeometry(l);
        return n + (L(u) && u.coords.length || 0);
      }, 0) / r > a;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(t) } }] };
  }
  async _createStatisticsQueryResponse(e) {
    const t = { attributes: {} }, s = [], i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), n = new Y(e, this.featureAdapter, this.fieldsIndex), l = e.outStatistics, { groupByFieldsForStatistics: u, having: h, orderByFields: d } = e, f = u && u.length, c = !!f, _ = c && u[0], I = c && !this.fieldsIndex.get(_);
    for (const p of l) {
      const { outStatisticFieldName: x, statisticType: F } = p, y = p, g = F !== "exceedslimit" ? p.onStatisticField : void 0, R = F === "percentile_disc" || F === "percentile_cont", b = F === "EnvelopeAggregate" || F === "CentroidAggregate" || F === "ConvexHullAggregate", $ = c && f === 1 && (g === _ || I) && F === "count";
      if (c) {
        if (!r.has(g)) {
          const Q = [];
          for (const D of u) {
            const U = this._getAttributeValues(n, D, i);
            Q.push(U);
          }
          r.set(g, this._calculateUniqueValues(Q, n.returnDistinctValues));
        }
        const A = r.get(g);
        for (const Q in A) {
          const { count: D, data: U, items: te, itemPositions: Re } = A[Q], se = U.join(",");
          if (!h || n.validateItems(te, h)) {
            const G = o.get(se) || { attributes: {} };
            if (b) {
              G.aggregateGeometries || (G.aggregateGeometries = {});
              const { aggregateGeometries: E, outStatisticFieldName: P } = await this._getAggregateGeometry(y, te);
              G.aggregateGeometries[P] = E;
            } else {
              let E = null;
              if ($)
                E = D;
              else {
                const P = this._getAttributeValues(n, g, i), ie = Re.map((Ae) => P[Ae]);
                E = R && "statisticParameters" in y ? this._getPercentileValue(y, ie) : this._getStatisticValue(y, ie, null, n.returnDistinctValues);
              }
              G.attributes[x] = E;
            }
            u.forEach((E, P) => G.attributes[this.fieldsIndex.get(E) ? E : `EXPR_${P + 1}`] = U[P]), o.set(se, G);
          }
        }
      } else if (b) {
        t.aggregateGeometries || (t.aggregateGeometries = {});
        const { aggregateGeometries: A, outStatisticFieldName: Q } = await this._getAggregateGeometry(y, this.items);
        t.aggregateGeometries[Q] = A;
      } else {
        const A = this._getAttributeValues(n, g, i);
        t.attributes[x] = R && "statisticParameters" in y ? this._getPercentileValue(y, A) : this._getStatisticValue(y, A, a, n.returnDistinctValues);
      }
      s.push({ name: x, alias: x, type: "esriFieldTypeDouble" });
    }
    const w = c ? Array.from(o.values()) : [t];
    return this._sortFeatures(w, d, (p, x) => p.attributes[x]), { fields: s, features: w };
  }
  async _getAggregateGeometry(e, t) {
    const s = await import("./geometryEngineJSON-RRPcM-Hn.js").then((c) => c.g), { statisticType: i, outStatisticFieldName: a } = e, { featureAdapter: r, spatialReference: o, geometryType: n, hasZ: l, hasM: u } = this, h = t.map((c) => J(n, l, u, r.getGeometry(c))), d = s.convexHull(o, h, !0)[0], f = { aggregateGeometries: null, outStatisticFieldName: null };
    if (i === "EnvelopeAggregate") {
      const c = d ? be(d) : ne(s.union(o, h));
      f.aggregateGeometries = { ...c, spatialReference: o }, f.outStatisticFieldName = a || "extent";
    } else if (i === "CentroidAggregate") {
      const c = d ? Qe(d) : Ee(ne(s.union(o, h)));
      f.aggregateGeometries = { x: c[0], y: c[1], spatialReference: o }, f.outStatisticFieldName = a || "centroid";
    } else
      i === "ConvexHullAggregate" && (f.aggregateGeometries = d, f.outStatisticFieldName = a || "convexHull");
    return f;
  }
  _getStatisticValue(e, t, s, i) {
    const { onStatisticField: a, statisticType: r } = e;
    let o = null;
    return o = s != null && s.has(a) ? s.get(a) : re(this.fieldsIndex.get(a)) ? me({ values: t, returnDistinct: i }) : pe({ values: t, minValue: null, maxValue: null, useSampleStdDev: !0 }), s && s.set(a, o), o[r === "var" ? "variance" : r];
  }
  _getPercentileValue(e, t) {
    const { onStatisticField: s, statisticParameters: i, statisticType: a } = e, { value: r, orderBy: o } = i, n = this.fieldsIndex.get(s), l = { value: r, orderBy: o, fieldType: n == null ? void 0 : n.type, isDiscrete: a === "percentile_disc" };
    return et(t, l);
  }
  _getAttributeValues(e, t, s) {
    if (s.has(t))
      return s.get(t);
    const i = this.fieldsIndex.get(t), a = this.items.map((r) => e.getFieldValue(r, t, i));
    return s.set(t, a), a;
  }
  _getAttributeNormalizedValues(e, t) {
    return this.items.map((s) => e.getNormalizedValue(s, { field: t.field, fieldInfo: this.fieldsIndex.get(t.field), normalizationField: t.normalizationField, normalizationFieldInfo: this.fieldsIndex.get(t.normalizationField), normalizationType: t.normalizationType, normalizationTotal: t.normalizationTotal }));
  }
  async _getAttributeExpressionValues(e, t, s) {
    const { arcadeUtils: i } = await Ie(), a = i.createFunction(t), r = s && i.getViewInfo(s);
    return this.items.map((o) => e.getExpressionValue(o, { compiledFunc: a, viewInfo: r }, i));
  }
  _calculateUniqueValues(e, t) {
    const s = {}, i = this.items, a = i.length;
    for (let r = 0; r < a; r++) {
      const o = i[r], n = [];
      for (const u of e)
        n.push(u[r]);
      const l = n.join(",");
      t ? s[l] == null && (s[l] = { count: 1, data: n, items: [o], itemPositions: [r] }) : s[l] == null ? s[l] = { count: 1, data: n, items: [o], itemPositions: [r] } : (s[l].count++, s[l].items.push(o), s[l].itemPositions.push(r));
    }
    return s;
  }
  async _getDataValues(e, t) {
    const s = new Y(e, this.featureAdapter, this.fieldsIndex), { valueExpression: i, field: a, normalizationField: r, normalizationType: o, normalizationTotal: n, scale: l } = t, u = i ? { viewingMode: "map", scale: l, spatialReference: e.outSR || this.spatialReference } : null;
    return i ? this._getAttributeExpressionValues(s, i, u) : this._getAttributeNormalizedValues(s, { field: a, normalizationField: r, normalizationType: o, normalizationTotal: n });
  }
}
function ut(m, e, t, s, i, a) {
  const r = i - t, o = a - s, n = r * r + o * o, l = (m - t) * r + (e - s) * o, u = Math.min(1, Math.max(0, l / n));
  return { x: t + r * u, y: s + o * u };
}
function ct(m, e) {
  return m ? e ? 4 : 3 : e ? 3 : 2;
}
var H;
(function(m) {
  m[m.NONE = 0] = "NONE", m[m.EDGE = 1] = "EDGE", m[m.VERTEX = 2] = "VERTEX";
})(H || (H = {}));
function ht(m) {
  return m.every((e) => e.statisticType !== "exceedslimit");
}
const z = "feature-store:unsupported-query", W = /* @__PURE__ */ new Set(), dt = new ze(2e6);
let ft = 0;
class St {
  constructor(e) {
    this.capabilities = { query: Be }, this.geometryType = e.geometryType, this.hasM = e.hasM, this.hasZ = e.hasZ, this.objectIdField = e.objectIdField, this.spatialReference = e.spatialReference, this.definitionExpression = e.definitionExpression, this.featureStore = e.featureStore, this.aggregateAdapter = e.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e.timeInfo, e.cacheSpatialQueries && (this._geometryQueryCache = new Ve(ft++ + "$$", dt)), this.fieldsIndex = new Ce(e.fields), e.scheduler && e.priority && (this._frameTask = e.scheduler.registerTask(e.priority));
  }
  destroy() {
    this._frameTask = oe(this._frameTask), this.clearCache(), le(this._geometryQueryCache), this._changeHandle = oe(this._changeHandle), le(this.fieldsIndex);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  get fullExtent() {
    const e = this.featureStore.fullBounds;
    return e ? { xmin: e[0], ymin: e[1], xmax: e[2], ymax: e[3], spatialReference: B(this.spatialReference) } : null;
  }
  get timeExtent() {
    return this.timeInfo ? (this._timeExtent || (this._timeExtent = st(this.timeInfo, this.featureStore)), this._timeExtent) : null;
  }
  clearCache() {
    this._geometryQueryCache && this._geometryQueryCache.clear(), this._allItems = null, this._timeExtent = null;
  }
  async executeQuery(e = {}, t) {
    let s, i = N(e);
    try {
      i = await this._schedule(() => M(i, this.definitionExpression, this.spatialReference), t), i = await this._reschedule(() => this._checkQuerySupport(i), t), s = await this._reschedule(() => this._executeGeometryQuery(i, t), t), s = await this._reschedule(() => s.executeAggregateIdsQuery(i), t), s = await this._reschedule(() => s.executeObjectIdsQuery(i), t), s = await this._reschedule(() => s.executeTimeQuery(i), t), s = await this._reschedule(() => s.executeAttributesQuery(i), t);
    } catch (a) {
      if (a !== O)
        throw a;
      s = new S([], null, this);
    }
    return s.createQueryResponse(i);
  }
  async executeQueryForCount(e = {}, t) {
    let s = N(e);
    s.returnGeometry = !1, s.returnCentroid = !1, s.outSR = null;
    try {
      s = await this._schedule(() => M(s, this.definitionExpression, this.spatialReference), t), s = await this._reschedule(() => this._checkQuerySupport(s), t);
      let i = await this._reschedule(() => this._executeGeometryQuery(s, t), t);
      return i = await this._reschedule(() => i.executeAggregateIdsQuery(s), t), i = await this._reschedule(() => i.executeObjectIdsQuery(s), t), i = await this._reschedule(() => i.executeTimeQuery(s), t), i = await this._reschedule(() => i.executeAttributesQuery(s), t), i.createQueryResponseForCount(s);
    } catch (i) {
      if (i !== O)
        throw i;
      return 0;
    }
  }
  async executeQueryForExtent(e = {}, t) {
    let s, i = N(e);
    const a = i.outSR;
    try {
      i = await this._schedule(() => M(i, this.definitionExpression, this.spatialReference), t), i = await this._reschedule(() => this._checkQuerySupport(i), t), i.returnGeometry = !0, i.returnCentroid = !1, i.outSR = null, s = await this._reschedule(() => this._executeGeometryQuery(i, t), t), s = await this._reschedule(() => s.executeAggregateIdsQuery(i), t), s = await this._reschedule(() => s.executeObjectIdsQuery(i), t), s = await this._reschedule(() => s.executeTimeQuery(i), t), s = await this._reschedule(() => s.executeAttributesQuery(i), t);
      const r = s.size;
      if (!r)
        return { count: r, extent: null };
      De(v, $e), this.featureStore.forEachBounds(s.items, (l) => Ge(v, l), mt);
      const o = { xmin: v[0], ymin: v[1], xmax: v[3], ymax: v[4], spatialReference: B(this.spatialReference) };
      this.hasZ && isFinite(v[2]) && isFinite(v[5]) && (o.zmin = v[2], o.zmax = v[5]);
      const n = j(o, s.spatialReference, a);
      if (n.spatialReference = B(a || this.spatialReference), n.xmax - n.xmin == 0) {
        const l = X(n.spatialReference);
        n.xmin -= l, n.xmax += l;
      }
      if (n.ymax - n.ymin == 0) {
        const l = X(n.spatialReference);
        n.ymin -= l, n.ymax += l;
      }
      if (this.hasZ && n.zmin != null && n.zmax != null && n.zmax - n.zmin == 0) {
        const l = X(n.spatialReference);
        n.zmin -= l, n.zmax += l;
      }
      return { count: r, extent: n };
    } catch (r) {
      if (r === O)
        return { count: 0, extent: null };
      throw r;
    }
  }
  async executeQueryForIds(e = {}, t) {
    return this.executeQueryForIdSet(e, t).then((s) => Array.from(s));
  }
  async executeQueryForIdSet(e = {}, t) {
    let s, i = N(e);
    i.returnGeometry = !1, i.returnCentroid = !1, i.outSR = null;
    try {
      i = await this._schedule(() => M(i, this.definitionExpression, this.spatialReference), t), i = await this._reschedule(() => this._checkQuerySupport(i), t), s = await this._reschedule(() => this._executeGeometryQuery(i, t), t), s = await this._reschedule(() => s.executeAggregateIdsQuery(i), t), s = await this._reschedule(() => s.executeObjectIdsQuery(i), t), s = await this._reschedule(() => s.executeTimeQuery(i), t), s = await this._reschedule(() => s.executeAttributesQuery(i), t);
      const a = s.items, r = /* @__PURE__ */ new Set();
      return await this._reschedule(() => {
        for (const o of a)
          r.add(s.featureAdapter.getObjectId(o));
      }, t), r;
    } catch (a) {
      if (a === O)
        return /* @__PURE__ */ new Set();
      throw a;
    }
  }
  async executeQueryForSnapping(e, t) {
    const { point: s, distance: i, types: a } = e;
    if (a === H.NONE)
      return { candidates: [] };
    const r = await this._reschedule(() => this._checkQuerySupport(e.query), t), o = !Z(s.spatialReference, this.spatialReference);
    o && await K(s.spatialReference, this.spatialReference);
    const n = typeof i == "number" ? i : i.x, l = typeof i == "number" ? i : i.y, u = { xmin: s.x - n, xmax: s.x + n, ymin: s.y - l, ymax: s.y + l, spatialReference: s.spatialReference }, h = o ? j(u, this.spatialReference) : u;
    if (!h)
      return { candidates: [] };
    const d = (await ue(ce(s), null, { signal: t }))[0], f = (await ue(ce(h), null, { signal: t }))[0];
    if (k(d) || k(f))
      return { candidates: [] };
    let c = new S(this._searchFeatures(this._getQueryBBoxes(f.toJSON())), null, this);
    c = await this._reschedule(() => c.executeObjectIdsQuery(r), t), c = await this._reschedule(() => c.executeTimeQuery(r), t), c = await this._reschedule(() => c.executeAttributesQuery(r), t);
    const _ = d.toJSON(), I = o ? j(_, this.spatialReference) : _, w = o ? Math.max(h.xmax - h.xmin, h.ymax - h.ymin) / 2 : i;
    return c.createSnappingResponse({ ...e, point: I, distance: w }, s.spatialReference);
  }
  async executeQueryForLatestObservations(e = {}, t) {
    if (!this.timeInfo || !this.timeInfo.trackIdField)
      throw new T(z, "Missing timeInfo or timeInfo.trackIdField", { query: e, timeInfo: this.timeInfo });
    let s, i = N(e);
    try {
      i = await this._schedule(() => M(i, this.definitionExpression, this.spatialReference), t), i = await this._reschedule(() => this._checkQuerySupport(i), t), s = await this._reschedule(() => this._executeGeometryQuery(i, t), t), s = await this._reschedule(() => s.executeAggregateIdsQuery(i), t), s = await this._reschedule(() => s.executeObjectIdsQuery(i), t), s = await this._reschedule(() => s.executeTimeQuery(i), t), s = await this._reschedule(() => s.executeAttributesQuery(i), t), s = await this._reschedule(() => s.filterLatest(), t);
    } catch (a) {
      if (a !== O)
        throw a;
      s = new S([], null, this);
    }
    return s.createQueryResponse(i);
  }
  async executeQueryForSummaryStatistics(e = {}, t, s) {
    const { field: i, normalizationField: a, valueExpression: r } = t;
    return (await this._getQueryEngineResultForStats(e, { field: i, normalizationField: a, valueExpression: r }, s)).createSummaryStatisticsResponse(e, t);
  }
  async executeQueryForUniqueValues(e = {}, t, s) {
    const { field: i, valueExpression: a } = t;
    return (await this._getQueryEngineResultForStats(e, { field: i, valueExpression: a }, s)).createUniqueValuesResponse(e, t);
  }
  async executeQueryForClassBreaks(e = {}, t, s) {
    const { field: i, normalizationField: a, valueExpression: r } = t;
    return (await this._getQueryEngineResultForStats(e, { field: i, normalizationField: a, valueExpression: r }, s)).createClassBreaksResponse(e, t);
  }
  async executeQueryForHistogram(e = {}, t, s) {
    const { field: i, normalizationField: a, valueExpression: r } = t;
    return (await this._getQueryEngineResultForStats(e, { field: i, normalizationField: a, valueExpression: r }, s)).createHistogramResponse(e, t);
  }
  async _schedule(e, t) {
    return L(this._frameTask) ? this._frameTask.schedule(e, t) : e(he);
  }
  async _reschedule(e, t) {
    return L(this._frameTask) ? this._frameTask.reschedule(e, t) : e(he);
  }
  _getAll() {
    if (!this._allItems) {
      const e = [];
      this.featureStore.forEach((t) => e.push(t)), this._allItems = new S(e, null, this);
    }
    return this._allItems;
  }
  async _executeGeometryQuery(e, t) {
    const { geometry: s, outSR: i, spatialRel: a, returnGeometry: r, returnCentroid: o } = e, n = this.featureStore.featureSpatialReference, l = s && n && n !== s.spatialReference ? j(s, n) : s, u = r || o, h = we(i) && !Z(this.spatialReference, i), d = this._geometryQueryCache ? JSON.stringify(h && u ? { originalFilterGeometry: s, spatialRelationship: a, outSpatialReference: i } : { originalFilterGeometry: s, spatialRelationship: a }) : null;
    if (d) {
      const p = this._geometryQueryCache.get(d);
      if (!Pe(p))
        return p;
    }
    const f = async (p) => {
      if (h && u) {
        const x = await p.project(i);
        return d && this._geometryQueryCache.put(d, x, x.size || 1), x;
      }
      return d && this._geometryQueryCache.put(d, p, p.size || 1), p;
    };
    if (!l)
      return f(this._getAll());
    const c = this.featureAdapter;
    if (a === "esriSpatialRelDisjoint") {
      const p = this._searchFeatures(this._getQueryBBoxes(s));
      if (!p.length)
        return f(this._getAll());
      let x, F;
      const y = /* @__PURE__ */ new Set();
      for (const R of p)
        y.add(c.getObjectId(R));
      await this._reschedule(() => {
        let R = 0;
        x = new Array(y.size), this.featureStore.forEach((b) => x[R++] = b), F = y;
      }, t);
      const g = await this._reschedule(async () => {
        const R = await ge(a, l, this.geometryType, this.hasZ, this.hasM), b = ($) => !F.has(c.getObjectId($)) || R(c.getGeometry($));
        return new S(await this._runSpatialFilter(x, b, t), s, this);
      }, t);
      return f(g);
    }
    const _ = this._searchFeatures(this._getQueryBBoxes(s));
    if (!_.length) {
      const p = new S([], s, this);
      return d && this._geometryQueryCache.put(d, p, p.size || 1), p;
    }
    if (this._canExecuteSoloPass(l, e))
      return f(new S(_, s, this));
    const I = await ge(a, l, this.geometryType, this.hasZ, this.hasM), w = await this._runSpatialFilter(_, (p) => I(c.getGeometry(p)), t);
    return f(new S(w, s, this));
  }
  async _runSpatialFilter(e, t, s) {
    if (!t)
      return e;
    if (k(this._frameTask))
      return e.filter((o) => t(o));
    let i = 0;
    const a = new Array(), r = async (o) => {
      for (; i < e.length; ) {
        const n = e[i++];
        t(n) && (a.push(n), o.madeProgress()), o.done && await this._reschedule((l) => r(l), s);
      }
    };
    return this._reschedule((o) => r(o), s).then(() => a);
  }
  _canExecuteSoloPass(e, t) {
    const { geometryType: s } = this, { spatialRel: i } = t;
    return xe(e) && (i === "esriSpatialRelEnvelopeIntersects" || s === "esriGeometryPoint" && (i === "esriSpatialRelIntersects" || i === "esriSpatialRelContains" || i === "esriSpatialRelWithin"));
  }
  _getQueryBBoxes(e) {
    if (xe(e)) {
      if (Ne(e))
        return [de(e.xmin, e.ymin, e.xmax, e.ymax)];
      if (Me(e))
        return e.rings.map((t) => de(Math.min(t[0][0], t[2][0]), Math.min(t[0][1], t[2][1]), Math.max(t[0][0], t[2][0]), Math.max(t[0][1], t[2][1])));
    }
    return [Oe(je(), e)];
  }
  _searchFeatures(e) {
    for (const i of e)
      this.featureStore.forEachInBounds(i, (a) => {
        W.add(a);
      });
    const t = new Array(W.size);
    let s = 0;
    return W.forEach((i) => t[s++] = i), W.clear(), t;
  }
  async _checkStatisticsSupport(e, t) {
    if (e.distance < 0 || e.geometryPrecision != null || e.multipatchOption || e.pixelSize || e.relationParam || e.text || e.outStatistics || e.groupByFieldsForStatistics || e.having || e.orderByFields)
      throw new T(z, "Unsupported query options", { query: e });
    return Promise.all([this._checkAttributesQuerySupport(e), this._checkStatisticsParamsSupport(t), _e(e, this.geometryType, this.spatialReference), K(this.spatialReference, e.outSR)]).then(() => e);
  }
  async _checkStatisticsParamsSupport(e) {
    let t = [];
    if (e.valueExpression) {
      const { arcadeUtils: s } = await Ie();
      t = s.extractFieldNames(e.valueExpression);
    }
    if (e.field && t.push(e.field), e.normalizationField && t.push(e.normalizationField), !t.length)
      throw new T(z, "params should have at least a field or valueExpression", { params: e });
    V(this.fieldsIndex, t, "params contains missing fields");
  }
  async _checkQuerySupport(e) {
    if (e.distance < 0 || e.geometryPrecision != null || e.multipatchOption || e.pixelSize || e.relationParam || e.text)
      throw new T(z, "Unsupported query options", { query: e });
    return Promise.all([this._checkAttributesQuerySupport(e), this._checkStatisticsQuerySupport(e), _e(e, this.geometryType, this.spatialReference), K(this.spatialReference, e.outSR)]).then(() => e);
  }
  _checkAttributesQuerySupport(e) {
    const { outFields: t, orderByFields: s, returnDistinctValues: i, outStatistics: a } = e, r = a ? a.map((o) => o.outStatisticFieldName && o.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
    if (s && s.length > 0) {
      const o = " asc", n = " desc", l = s.map((u) => {
        const h = u.toLowerCase();
        return h.indexOf(o) > -1 ? h.split(o)[0] : h.indexOf(n) > -1 ? h.split(n)[0] : u;
      }).filter((u) => r.indexOf(u) === -1);
      V(this.fieldsIndex, l, "orderByFields contains missing fields");
    }
    if (t && t.length > 0)
      V(this.fieldsIndex, t, "outFields contains missing fields");
    else if (i)
      throw new T(z, "outFields should be specified for returnDistinctValues", { query: e });
    rt(this.fieldsIndex, e.where);
  }
  async _checkStatisticsQuerySupport(e) {
    const { outStatistics: t, groupByFieldsForStatistics: s, having: i } = e, a = s && s.length, r = t && t.length;
    if (i) {
      if (!a || !r)
        throw new T(z, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: e });
      nt(this.fieldsIndex, i, t);
    }
    if (r) {
      if (!ht(t))
        return;
      const o = t.map((n) => n.onStatisticField).filter(Boolean);
      V(this.fieldsIndex, o, "onStatisticFields contains missing fields"), a && V(this.fieldsIndex, s, "groupByFieldsForStatistics contains missing fields");
      for (const n of t) {
        const { onStatisticField: l, statisticType: u } = n;
        if ((u === "percentile_disc" || u === "percentile_cont") && "statisticParameters" in n) {
          const { statisticParameters: h } = n;
          if (!h)
            throw new T(z, "statisticParamters should be set for percentile type", { definition: n, query: e });
        } else if (u !== "count" && l && lt(l, this.fieldsIndex))
          throw new T(z, "outStatistics contains non-numeric fields", { definition: n, query: e });
      }
    }
  }
  async _getQueryEngineResultForStats(e = {}, t, s) {
    let i;
    e = N(e);
    try {
      e = await this._schedule(() => M(e, this.definitionExpression, this.spatialReference), s), e = await this._reschedule(() => this._checkStatisticsSupport(e, t), s), i = await this._reschedule(() => this._executeGeometryQuery(e, s), s), i = await this._reschedule(() => i.executeAggregateIdsQuery(e), s), i = await this._reschedule(() => i.executeObjectIdsQuery(e), s), i = await this._reschedule(() => i.executeTimeQuery(e), s), i = await this._reschedule(() => i.executeAttributesQuery(e), s);
    } catch (a) {
      if (a !== O)
        throw a;
      i = new S([], null, this);
    }
    return i;
  }
}
const mt = Fe(), v = Fe();
export {
  St as V
};

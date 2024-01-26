import { dq as G, fI as K, iy as ee, fz as te, b5 as g, aT as P, iz as D, a as h, b as f, c as w, b3 as Z, _ as W, c0 as O, iA as z, eo as $, iB as R, dx as se, b4 as ie, dN as X, d6 as ne, aD as b, aC as re, cq as ae, s as oe, fP as le, c$ as ue, bm as I, iC as Y, eM as ce, eB as he, ba as H, fT as de, hI as N, a9 as M, fk as fe, l as U, fa as pe } from "./index-HxXrdrYt.js";
import { m as _e } from "./FeatureStore-KPHY91oX.js";
import { e as ge } from "./QueryEngine-HiYhyjI1.js";
import { f as ye, i as me, y as Ee } from "./featureConversionUtils-F620bamw.js";
import { a as Ce } from "./pbfQueryUtils-91ISjCB5.js";
import { S as Fe, c as Te, m as ve, p as be } from "./query-aJTyB32e.js";
import { t as Se, c as j } from "./byteSizeEstimations-ZWOmCZBv.js";
import { E as Ie } from "./ByteSizeUnit-dxTdcbwN.js";
import { o as we } from "./BoundsStore-tbCjCPmr.js";
import "vue";
import "./projectionSupport-7oPVn9Md.js";
import "./json-uwIaZKlZ.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./timeSupport-qxAI4x5Y.js";
import "./normalizeUtils--xHzoVSe.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./utils-ZpixBail.js";
import "./WhereClause-ifbkwP0w.js";
import "./executionError-EEhTiqtD.js";
import "./QueryEngineCapabilities-gkC_bzZo.js";
import "./quantizationUtils-W83AezcF.js";
import "./utils-fidWd9xl.js";
import "./generateRendererUtils-TMdM0CCu.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./pbf-xpZxashh.js";
import "./PooledRBush-A3E2ngqM.js";
function q(s = !1, e) {
  if (s) {
    const { elevationInfo: t, alignPointsInFeatures: i, spatialReference: n } = e;
    return new Ae(t, i, n);
  }
  return new xe();
}
let xe = class {
  async alignCandidates(e, t) {
    return e;
  }
  notifyElevationSourceChange() {
  }
};
const Oe = 1024;
let Ae = class {
  constructor(e, t, i) {
    this._elevationInfo = e, this._alignPointsInFeatures = t, this.spatialReference = i, this._alignmentsCache = new G(Oe), this._cacheVersion = 0, this._metersPerVerticalUnit = K(i);
  }
  async alignCandidates(e, t) {
    const i = this._elevationInfo;
    return i == null || i.mode !== "absolute-height" || i.featureExpressionInfo ? this._alignComputedElevationCandidates(e, t) : (this._alignAbsoluteElevationCandidates(e, i), e);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e, t) {
    const { offset: i, unit: n } = t;
    if (i == null)
      return;
    const r = i * (ee(n ?? "meters") / this._metersPerVerticalUnit);
    for (const a of e)
      switch (a.type) {
        case "edge":
          a.start.z += r, a.end.z += r;
          continue;
        case "vertex":
          a.target.z += r;
          continue;
      }
  }
  async _alignComputedElevationCandidates(e, t) {
    const i = /* @__PURE__ */ new Map();
    for (const p of e)
      te(i, p.objectId, Re).push(p);
    const [n, r, a] = this._prepareQuery(i), o = await this._alignPointsInFeatures(n, t);
    if (g(t), a !== this._cacheVersion)
      return this._alignComputedElevationCandidates(e, t);
    this._applyCacheAndResponse(n, o, r);
    const { drapedObjectIds: u, failedObjectIds: c } = o, d = [];
    for (const p of e) {
      const { objectId: y } = p;
      u.has(y) && p.type === "edge" && (p.draped = !0), c.has(y) || d.push(p);
    }
    return d;
  }
  _prepareQuery(e) {
    const t = [], i = [];
    for (const [n, r] of e) {
      const a = [];
      for (const o of r)
        this._addToQueriesOrCachedResult(n, o.target, a, i), o.type === "edge" && (this._addToQueriesOrCachedResult(n, o.start, a, i), this._addToQueriesOrCachedResult(n, o.end, a, i));
      a.length !== 0 && t.push({ objectId: n, points: a });
    }
    return [t, i, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e, t, i, n) {
    const r = B(e, t), a = this._alignmentsCache.get(r);
    a == null ? i.push(t) : n.push(new $e(t, a));
  }
  _applyCacheAndResponse(e, { elevations: t, drapedObjectIds: i, failedObjectIds: n }, r) {
    for (const u of r)
      u.apply();
    let a = 0;
    const o = this._alignmentsCache;
    for (const { objectId: u, points: c } of e) {
      if (n.has(u)) {
        a += c.length;
        continue;
      }
      const d = !i.has(u);
      for (const p of c) {
        const y = B(u, p), m = t[a++];
        p.z = m, d && o.put(y, m, 1);
      }
    }
  }
};
class $e {
  constructor(e, t) {
    this.point = e, this.z = t;
  }
  apply() {
    this.point.z = this.z;
  }
}
function B(s, { x: e, y: t, z: i }) {
  return `${s}-${e}-${t}-${i ?? 0}}`;
}
function Re() {
  return [];
}
let Pe = class {
  filter(e, t) {
    return t;
  }
  notifyElevationSourceChange() {
  }
}, De = class {
  filter(e, t) {
    const { point: i, distance: n } = e, { z: r } = i;
    if (r == null || t.length === 0)
      return t;
    const a = Ue(n), o = this._updateCandidatesTo3D(t, i, a).filter(ze);
    return o.sort(je), o;
  }
  _updateCandidatesTo3D(e, t, i) {
    for (const n of e)
      switch (n.type) {
        case "edge":
          He(n, t, i);
          continue;
        case "vertex":
          Me(n, t, i);
          continue;
      }
    return e;
  }
};
function ze(s) {
  return s.distance <= 1;
}
function V(s = !1) {
  return s ? new De() : new Pe();
}
function He(s, e, { x: t, y: i, z: n }) {
  const { start: r, end: a, target: o } = s;
  s.draped || Ne(o, e, r, a);
  const u = (e.x - o.x) / t, c = (e.y - o.y) / i, d = (e.z - o.z) / n;
  s.distance = Math.sqrt(u * u + c * c + d * d);
}
function Ne(s, e, t, i) {
  const n = i.x - t.x, r = i.y - t.y, a = i.z - t.z, o = n * n + r * r + a * a, u = (e.x - t.x) * n + (e.y - t.y) * r + a * (e.z - t.z), c = Math.min(1, Math.max(0, u / o)), d = t.x + n * c, p = t.y + r * c, y = t.z + a * c;
  s.x = d, s.y = p, s.z = y;
}
function Me(s, e, { x: t, y: i, z: n }) {
  const { target: r } = s, a = (e.x - r.x) / t, o = (e.y - r.y) / i, u = (e.z - r.z) / n, c = Math.sqrt(a * a + o * o + u * u);
  s.distance = c;
}
function Ue(s) {
  return typeof s == "number" ? { x: s, y: s, z: s } : s;
}
function je(s, e) {
  return s.distance - e.distance;
}
function k(s = !1, e) {
  return s ? new Ve(e) : new qe();
}
class qe {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
}
const Be = 1024;
class Ve {
  constructor(e) {
    this._getSymbologyCandidates = e, this._candidatesCache = new G(Be), this._cacheVersion = 0;
  }
  async fetch(e, t) {
    if (e.length === 0)
      return [];
    const i = [], n = [], r = this._candidatesCache;
    for (const p of e) {
      const y = J(p), m = r.get(y);
      if (m)
        for (const v of m)
          n.push(P(v));
      else
        i.push(p), r.put(y, [], 1);
    }
    if (i.length === 0)
      return n;
    const a = this._cacheVersion, { candidates: o, sourceCandidateIndices: u } = await this._getSymbologyCandidates(i, t);
    if (g(t), a !== this._cacheVersion)
      return this.fetch(e, t);
    const c = [], { length: d } = o;
    for (let p = 0; p < d; ++p) {
      const y = o[p], m = J(i[u[p]]), v = r.get(m);
      v.push(y), r.put(m, v, v.length), c.push(P(y));
    }
    return n.concat(c);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
}
function J(s) {
  switch (s.type) {
    case "vertex": {
      const { objectId: e, target: t } = s, i = `${e}-vertex-${t.x}-${t.y}-${t.z ?? 0}`;
      return D(i).toString();
    }
    case "edge": {
      const { objectId: e, start: t, end: i } = s, n = `${e}-edge-${t.x}-${t.y}-${t.z ?? 0}-to-${i.x}-${i.y}-${i.z ?? 0}`;
      return D(n).toString();
    }
    default:
      return "";
  }
}
let S = class extends Z {
  constructor() {
    super(...arguments), this.updating = !1, this._pending = [];
  }
  push(e, t) {
    this._pending.push({ promise: e, callback: t }), this._pending.length === 1 && this._process();
  }
  _process() {
    if (!this._pending.length)
      return void (this.updating = !1);
    this.updating = !0;
    const e = this._pending[0];
    e.promise.then((t) => e.callback(t)).catch(() => {
    }).then(() => {
      this._pending.shift(), this._process();
    });
  }
};
h([f()], S.prototype, "updating", void 0), S = h([w("geoscene.core.AsyncSequence")], S);
class ke {
  constructor(e, t) {
    this.data = e, this.resolution = t, this.state = { type: l.CREATED }, this.alive = !0;
  }
  process(e) {
    switch (this.state.type) {
      case l.CREATED:
        return this.state = this._gotoFetchCount(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case l.FETCH_COUNT:
        break;
      case l.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case l.FETCH_FEATURES:
        break;
      case l.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, e);
      case l.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this._featureCount, state: this._stateToString };
  }
  get _featureCount() {
    switch (this.state.type) {
      case l.CREATED:
      case l.FETCH_COUNT:
        return 0;
      case l.FETCHED_COUNT:
        return this.state.featureCount;
      case l.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case l.FETCHED_FEATURES:
        return this.state.features.length;
      case l.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case l.CREATED:
        return "created";
      case l.FETCH_COUNT:
        return "fetch-count";
      case l.FETCHED_COUNT:
        return "fetched-count";
      case l.FETCH_FEATURES:
        return "fetch-features";
      case l.FETCHED_FEATURES:
        return "fetched-features";
      case l.DONE:
        return "done";
    }
  }
  _gotoFetchCount(e, t) {
    return { type: l.FETCH_COUNT, previous: e, task: O(async (i) => {
      const n = await z(t.fetchCount(this, i));
      this.state.type === l.FETCH_COUNT && (this.state = this._gotoFetchedCount(this.state, n.ok ? n.value : 1 / 0));
    }) };
  }
  _gotoFetchedCount(e, t) {
    return { type: l.FETCHED_COUNT, featureCount: t, previous: e };
  }
  _gotoFetchFeatures(e, t) {
    return { type: l.FETCH_FEATURES, previous: e, task: O(async (i) => {
      const n = await z(t.fetchFeatures(this, e.featureCount, i));
      this.state.type === l.FETCH_FEATURES && (this.state = this._gotoFetchedFeatures(this.state, n.ok ? n.value : []));
    }) };
  }
  _gotoFetchedFeatures(e, t) {
    return { type: l.FETCHED_FEATURES, previous: e, features: t };
  }
  _goToDone(e, t) {
    return t.finish(this, e.features), { type: l.DONE, previous: e };
  }
  reset() {
    const e = this.state;
    switch (this.state = { type: l.CREATED }, e.type) {
      case l.CREATED:
      case l.FETCHED_COUNT:
      case l.FETCHED_FEATURES:
      case l.DONE:
        break;
      case l.FETCH_COUNT:
      case l.FETCH_FEATURES:
        e.task.abort();
    }
  }
  intersects(e) {
    return e == null || !this.data.extent || ($(e, L), R(this.data.extent, L));
  }
}
var l;
(function(s) {
  s[s.CREATED = 0] = "CREATED", s[s.FETCH_COUNT = 1] = "FETCH_COUNT", s[s.FETCHED_COUNT = 2] = "FETCHED_COUNT", s[s.FETCH_FEATURES = 3] = "FETCH_FEATURES", s[s.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", s[s.DONE = 5] = "DONE";
})(l || (l = {}));
const L = W();
let _ = class extends se {
  get _minimumVerticesPerFeature() {
    var e;
    switch ((e = this.store) == null ? void 0 : e.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  set filter(e) {
    const t = this._get("filter"), i = this._filterProperties(e);
    JSON.stringify(t) !== JSON.stringify(i) && this._set("filter", i);
  }
  set customParameters(e) {
    const t = this._get("customParameters");
    JSON.stringify(t) !== JSON.stringify(e) && this._set("customParameters", e);
  }
  get _configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(e) {
    const t = this._get("tileInfo");
    t !== e && (e != null && t != null && JSON.stringify(e) === JSON.stringify(t) || (this._set("tileInfo", e), this.store.tileInfo = e));
  }
  set tileSize(e) {
    this._get("tileSize") !== e && this._set("tileSize", e);
  }
  get updating() {
    return this.updatingExcludingEdits || this._pendingEdits.updating;
  }
  get updatingExcludingEdits() {
    return this.updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  constructor(e) {
    super(e), this.tilesOfInterest = [], this.availability = 0, this._pendingTiles = /* @__PURE__ */ new Map(), this._pendingEdits = new S(), this._pendingEditsAbortController = new AbortController();
  }
  initialize() {
    this._initializeFetchExtent(), this.updatingHandles.add(() => this._configuration, () => this.refresh()), this.updatingHandles.add(() => this.tilesOfInterest, (e, t) => {
      ie(e, t, ({ id: i }, { id: n }) => i === n) || this._process();
    }, X);
  }
  destroy() {
    this._pendingTiles.forEach((e) => this._deletePendingTile(e)), this._pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this._pendingEditsAbortController.abort(), this._pendingEditsAbortController = null;
  }
  refresh() {
    this.store.refresh(), this._pendingTiles.forEach((e) => this._deletePendingTile(e)), this._process();
  }
  applyEdits(e) {
    this._pendingEdits.push(e, async (t) => {
      if (t.addedFeatures.length === 0 && t.updatedFeatures.length === 0 && t.deletedFeatures.length === 0)
        return;
      for (const [, n] of this._pendingTiles)
        n.reset();
      const i = { ...t, deletedFeatures: t.deletedFeatures.map(({ objectId: n, globalId: r }) => n && n !== -1 ? n : this._lookupObjectIdByGlobalId(r)) };
      await this.updatingHandles.addPromise(this.store.processEdits(i, (n, r) => this._queryFeaturesById(n, r), this._pendingEditsAbortController.signal)), this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !ne(this.url))
      return;
    const e = O(async (t) => {
      var i;
      try {
        const n = await Fe(this.url, new b({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: this.capabilities.query.supportsCacheHint ?? void 0 }), { query: this._configuration.customParameters, signal: t });
        this.store.extent = re.fromJSON((i = n.data) == null ? void 0 : i.extent);
      } catch (n) {
        ae(n), oe.getLogger(this).warn("Failed to fetch data extent", n);
      }
    });
    this.updatingHandles.addPromise(e.promise.then(() => this._process())), this.handles.add(le(() => e.abort()));
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this._pendingTiles.values()).map((e) => e.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, e] of this._pendingTiles)
      e.alive = !1;
  }
  _createPendingTiles() {
    const e = this._collectMissingTilesInfo();
    if (this._setAvailability(e == null ? 1 : e.coveredArea / e.fullArea), e != null)
      for (const { data: t, resolution: i } of e.missingTiles) {
        const n = this._pendingTiles.get(t.id);
        n ? (n.resolution = i, n.alive = !0) : this._createPendingTile(t, i);
      }
  }
  _collectMissingTilesInfo() {
    let e = null;
    for (let t = this.tilesOfInterest.length - 1; t >= 0; t--) {
      const i = this.tilesOfInterest[t], n = this.store.process(i, (r, a) => this._verifyTileComplexity(r, a));
      e == null ? e = n : e.prepend(n);
    }
    return e;
  }
  _deletePendingTiles() {
    for (const [, e] of this._pendingTiles)
      e.alive || this._deletePendingTile(e);
  }
  _processPendingTiles() {
    const e = { fetchCount: (t, i) => this._fetchCount(t, i), fetchFeatures: (t, i, n) => this._fetchFeatures(t, i, n), finish: (t, i) => this._finishPendingTile(t, i), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(e))
      for (const [, t] of this._pendingTiles)
        this._verifyTileComplexity(this.store.getFeatureCount(t.data), t.resolution) && this.updatingHandles.addPromise(t.process(e));
  }
  _verifyTileComplexity(e, t) {
    return this._verifyVertexComplexity(e) && this._verifyFeatureDensity(e, t);
  }
  _verifyVertexComplexity(e) {
    return e * this._minimumVerticesPerFeature < Le;
  }
  _verifyFeatureDensity(e, t) {
    if (this.tileInfo == null)
      return !1;
    const i = this.tileSize * t;
    return e * (Qe / (i * i)) < Ge;
  }
  _ensureFetchAllCounts(e) {
    let t = !0;
    for (const [, i] of this._pendingTiles)
      i.state.type < l.FETCHED_COUNT && this.updatingHandles.addPromise(i.process(e)), i.state.type <= l.FETCH_COUNT && (t = !1);
    return t;
  }
  _finishPendingTile(e, t) {
    this.store.add(e.data, t), this._deletePendingTile(e), this._updateAvailability();
  }
  _updateAvailability() {
    const e = this._collectMissingTilesInfo();
    this._setAvailability(e == null ? 1 : e.coveredArea / e.fullArea);
  }
  _setAvailability(e) {
    this._set("availability", e);
  }
  _createPendingTile(e, t) {
    const i = new ke(e, t);
    return this._pendingTiles.set(e.id, i), i;
  }
  _deletePendingTile(e) {
    e.reset(), this._pendingTiles.delete(e.data.id);
  }
  async _fetchCount(e, t) {
    return this.store.fetchCount(e.data, this.url, this._createCountQuery(e), { query: this.customParameters, timeout: x, signal: t });
  }
  async _fetchFeatures(e, t, i) {
    let n = 0;
    const r = [];
    let a = 0, o = t;
    for (; ; ) {
      const u = this._createFeaturesQuery(e), c = this._setPagingParameters(u, n, o), { features: d, exceededTransferLimit: p } = await this._queryFeatures(u, i);
      c && (n += u.num), a += d.length;
      for (const y of d)
        r.push(y);
      if (o = t - a, !c || !p || o <= 0)
        return r;
    }
  }
  _filterProperties(e) {
    return e == null ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: e.where || "1=1", timeExtent: e.timeExtent, gdbVersion: e.gdbVersion };
  }
  _lookupObjectIdByGlobalId(e) {
    const t = this.globalIdField, i = this.objectIdField;
    if (t == null)
      throw new Error("Expected globalIdField to be defined");
    let n = null;
    if (this.store.featureStore.forEach((r) => {
      e === r.attributes[t] && (n = r.objectId ?? r.attributes[i]);
    }), n == null)
      throw new Error(`Expected to find a feature with globalId ${e}`);
    return n;
  }
  _queryFeaturesById(e, t) {
    const i = this._createFeaturesQuery();
    return i.objectIds = e, this._queryFeatures(i, t);
  }
  _queryFeatures(e, t) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(e, t) : this._queryFeaturesJSON(e, t);
  }
  async _queryFeaturesPBF(e, t) {
    const { sourceSpatialReference: i } = this, { data: n } = await Te(this.url, e, new Ce({ sourceSpatialReference: i }), { query: this._configuration.customParameters, timeout: x, signal: t });
    return ye(n);
  }
  async _queryFeaturesJSON(e, t) {
    const { sourceSpatialReference: i } = this, { data: n } = await ve(this.url, e, i, { query: this._configuration.customParameters, timeout: x, signal: t });
    return me(n, this.objectIdField);
  }
  _createCountQuery(e) {
    const t = this._createBaseQuery(e);
    return this.capabilities.query.supportsCacheHint && (t.cacheHint = !0), t;
  }
  _createFeaturesQuery(e = null) {
    const t = this._createBaseQuery(e);
    return t.outFields = this.globalIdField ? [this.globalIdField, this.objectIdField] : [this.objectIdField], t.returnGeometry = !0, e != null && (this.capabilities.query.supportsResultType ? t.resultType = "tile" : this.capabilities.query.supportsCacheHint && (t.cacheHint = !0)), t;
  }
  _createBaseQuery(e) {
    const t = new b({ returnZ: this.hasZ, returnM: !1, geometry: this.tileInfo != null && e != null ? ue(e.data.extent, this.tileInfo.spatialReference) : void 0 }), i = this._configuration.filter;
    return i != null && (t.where = i.where, t.gdbVersion = i.gdbVersion, t.timeExtent = i.timeExtent), t.outSpatialReference = this.spatialReference, t;
  }
  _setPagingParameters(e, t, i) {
    if (!this.capabilities.query.supportsPagination)
      return !1;
    const { supportsMaxRecordCountFactor: n, supportsCacheHint: r, tileMaxRecordCount: a, maxRecordCount: o, supportsResultType: u } = this.capabilities.query, c = n ? b.MAX_MAX_RECORD_COUNT_FACTOR : 1, d = c * ((u || r) && a ? a : o || Je);
    return e.start = t, n ? (e.maxRecordCountFactor = Math.min(c, Math.ceil(i / d)), e.num = Math.min(i, e.maxRecordCountFactor * d)) : e.num = Math.min(i, d), !0;
  }
};
h([f({ constructOnly: !0 })], _.prototype, "url", void 0), h([f({ constructOnly: !0 })], _.prototype, "objectIdField", void 0), h([f({ constructOnly: !0 })], _.prototype, "globalIdField", void 0), h([f({ constructOnly: !0 })], _.prototype, "capabilities", void 0), h([f({ constructOnly: !0 })], _.prototype, "sourceSpatialReference", void 0), h([f({ constructOnly: !0 })], _.prototype, "spatialReference", void 0), h([f({ constructOnly: !0 })], _.prototype, "store", void 0), h([f({ readOnly: !0 })], _.prototype, "_minimumVerticesPerFeature", null), h([f()], _.prototype, "filter", null), h([f()], _.prototype, "customParameters", null), h([f({ readOnly: !0 })], _.prototype, "_configuration", null), h([f()], _.prototype, "tileInfo", null), h([f()], _.prototype, "tileSize", null), h([f()], _.prototype, "tilesOfInterest", void 0), h([f({ readOnly: !0 })], _.prototype, "updating", null), h([f({ readOnly: !0 })], _.prototype, "updatingExcludingEdits", null), h([f({ readOnly: !0 })], _.prototype, "availability", void 0), h([f()], _.prototype, "hasZ", null), _ = h([w("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], _);
const Je = 2e3, x = 6e5, Le = 1e6, Qe = 25, Ge = 1;
class Ze {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._byteSize = 0;
  }
  set(e, t) {
    this.delete(e), this._store.set(e, t), this._byteSize += t.byteSize;
  }
  delete(e) {
    const t = this._store.get(e);
    return !!this._store.delete(e) && (t != null && (this._byteSize -= t.byteSize), !0);
  }
  get(e) {
    return this._used(e), this._store.get(e);
  }
  has(e) {
    return this._used(e), this._store.has(e);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(e, t) {
    for (const [i, n] of this._store) {
      if (this._byteSize <= e)
        break;
      this.delete(i), t(n);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(e) {
    const t = this._store.get(e);
    t && (this._store.delete(e), this._store.set(e, t));
  }
}
let F = class extends Z {
  constructor(s) {
    super(s), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * Ie.MEGABYTES, this._tileBounds = new we(), this._tiles = new Ze(), this._refCounts = /* @__PURE__ */ new Map(), this._tileFeatureCounts = /* @__PURE__ */ new Map(), this._tmpBoundingRect = W();
  }
  add(s, e) {
    const t = [];
    for (const i of e)
      this._referenceFeature(i.objectId) === C.ADDED && t.push(i);
    this._addTileStorage(s, new Set(e.map((i) => i.objectId)), We(e)), this.featureStore.addMany(t), this._tiles.applyByteSizeLimit(this.maximumByteSize, (i) => this._removeTileStorage(i));
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this._tileBounds.clear(), this._tiles.clear(), this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(s, e, t) {
    return this._processEditsDelete(s.deletedFeatures.concat(s.updatedFeatures)), this._processEditsRefetch(s.addedFeatures.concat(s.updatedFeatures), e, t);
  }
  _addTileStorage(s, e, t) {
    const i = s.id;
    this._tiles.set(i, new Ke(s, e, t)), this._tileBounds.set(i, s.extent), this._tileFeatureCounts.set(i, e.size);
  }
  _remove({ id: s }) {
    const e = this._tiles.get(s);
    e && this._removeTileStorage(e);
  }
  _removeTileStorage(s) {
    const e = [];
    for (const i of s.objectIds)
      this._unreferenceFeature(i) === C.REMOVED && e.push(i);
    this.featureStore.removeManyById(e);
    const t = s.data.id;
    this._tiles.delete(t), this._tileBounds.delete(t);
  }
  _processEditsDelete(s) {
    this.featureStore.removeManyById(s);
    for (const [, e] of this._tiles) {
      for (const t of s)
        e.objectIds.delete(t);
      this._tileFeatureCounts.set(e.data.id, e.objectIds.size);
    }
    for (const e of s)
      this._refCounts.delete(e);
  }
  async _processEditsRefetch(s, e, t) {
    const i = (await e(s, t)).features, { hasZ: n, hasM: r } = this.featureStore;
    for (const a of i) {
      const o = Ee(this._tmpBoundingRect, a.geometry, n, r);
      o != null && this._tileBounds.forEachInBounds(o, (u) => {
        const c = this._tiles.get(u);
        this.featureStore.add(a);
        const d = a.objectId;
        c.objectIds.has(d) || (c.objectIds.add(d), this._referenceFeature(d), this._tileFeatureCounts.set(c.data.id, c.objectIds.size));
      });
    }
  }
  process(s, e = () => !0) {
    if (this.tileInfo == null || !s.extent || this.extent != null && !R($(this.extent, this._tmpBoundingRect), s.extent))
      return new A(s);
    if (this._tiles.has(s.id))
      return new A(s);
    const t = this._createTileTree(s, this.tileInfo);
    return this._simplify(t, e, null, 0, 1), this._collectMissingTiles(s, t, this.tileInfo);
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: s }) => ({ data: s, featureCount: this._tileFeatureCounts.get(s.id) || 0 }));
  }
  getFeatureCount(s) {
    return this._tileFeatureCounts.get(s.id) ?? 0;
  }
  async fetchCount(s, e, t, i) {
    const n = this._tileFeatureCounts.get(s.id);
    if (n != null)
      return n;
    const r = await be(e, t, i);
    return this._tileFeatureCounts.set(s.id, r.data.count), r.data.count;
  }
  _createTileTree(s, e) {
    const t = new Q(s.level, s.row, s.col);
    return e.updateTileInfo(t, I.ExtrapolateOptions.POWER_OF_TWO), this._tileBounds.forEachInBounds(s.extent, (i) => {
      var r;
      const n = (r = this._tiles.get(i)) == null ? void 0 : r.data;
      n && this._tilesAreRelated(s, n) && this._populateChildren(t, n, e, this._tileFeatureCounts.get(n.id) || 0);
    }), t;
  }
  _tilesAreRelated(s, e) {
    if (!s || !e)
      return !1;
    if (s.level === e.level)
      return s.row === e.row && s.col === e.col;
    const t = s.level < e.level, i = t ? s : e, n = t ? e : s, r = 1 << n.level - i.level;
    return Math.floor(n.row / r) === i.row && Math.floor(n.col / r) === i.col;
  }
  _populateChildren(s, e, t, i) {
    const n = e.level - s.level - 1;
    if (n < 0)
      return void (s.isLeaf = !0);
    const r = e.row >> n, a = e.col >> n, o = s.row << 1, u = a - (s.col << 1) + (r - o << 1), c = s.children[u];
    if (c != null)
      this._populateChildren(c, e, t, i);
    else {
      const d = new Q(s.level + 1, r, a);
      t.updateTileInfo(d, I.ExtrapolateOptions.POWER_OF_TWO), s.children[u] = d, this._populateChildren(d, e, t, i);
    }
  }
  _simplify(s, e, t, i, n) {
    const r = n * n;
    if (s.isLeaf)
      return e(this.getFeatureCount(s), n) ? 0 : (this._remove(s), t != null && (t.children[i] = null), r);
    const a = n / 2, o = a * a;
    let u = 0;
    for (let c = 0; c < s.children.length; c++) {
      const d = s.children[c];
      u += d != null ? this._simplify(d, e, s, c, a) : o;
    }
    return u === 0 ? this._mergeChildren(s) : 1 - u / r < tt && (this._purge(s), t != null && (t.children[i] = null), u = r), u;
  }
  _mergeChildren(s) {
    const e = /* @__PURE__ */ new Set();
    let t = 0;
    this._forEachLeaf(s, (i) => {
      const n = this._tiles.get(i.id);
      if (n) {
        t += n.byteSize;
        for (const r of n.objectIds)
          e.has(r) || (e.add(r), this._referenceFeature(r));
        this._remove(i);
      }
    }), this._addTileStorage(s, e, t), s.isLeaf = !0, s.children[0] = s.children[1] = s.children[2] = s.children[3] = null, this._tileFeatureCounts.set(s.id, e.size);
  }
  _forEachLeaf(s, e) {
    for (const t of s.children)
      t != null && (t.isLeaf ? e(t) : this._forEachLeaf(t, e));
  }
  _purge(s) {
    if (s != null)
      if (s.isLeaf)
        this._remove(s);
      else
        for (let e = 0; e < s.children.length; e++) {
          const t = s.children[e];
          this._purge(t), s.children[e] = null;
        }
  }
  _collectMissingTiles(s, e, t) {
    const i = new et(t, s, this.extent);
    return this._collectMissingTilesRecurse(e, i, 1), i.info;
  }
  _collectMissingTilesRecurse(s, e, t) {
    if (s.isLeaf)
      return;
    if (!s.hasChildren)
      return void e.addMissing(s.level, s.row, s.col, t);
    const i = t / 2;
    for (let n = 0; n < s.children.length; n++) {
      const r = s.children[n];
      r == null ? e.addMissing(s.level + 1, (s.row << 1) + ((2 & n) >> 1), (s.col << 1) + (1 & n), i) : this._collectMissingTilesRecurse(r, e, i);
    }
  }
  _referenceFeature(s) {
    const e = (this._refCounts.get(s) || 0) + 1;
    return this._refCounts.set(s, e), e === 1 ? C.ADDED : C.UNCHANGED;
  }
  _unreferenceFeature(s) {
    const e = (this._refCounts.get(s) || 0) - 1;
    return e === 0 ? (this._refCounts.delete(s), C.REMOVED) : (e > 0 && this._refCounts.set(s, e), C.UNCHANGED);
  }
  get test() {
    return { tiles: Array.from(this._tiles.values()).map((s) => `${s.data.id}:[${Array.from(s.objectIds)}]`), featureReferences: Array.from(this._refCounts.keys()).map((s) => `${s}:${this._refCounts.get(s)}`) };
  }
};
function We(s) {
  return s.reduce((e, t) => e + Xe(t), 0);
}
function Xe(s) {
  return 32 + Ye(s.geometry) + Se(s.attributes);
}
function Ye(s) {
  if (s == null)
    return 0;
  const e = j(s.lengths, 4);
  return 32 + j(s.coords, 8) + e;
}
h([f({ constructOnly: !0 })], F.prototype, "featureStore", void 0), h([f()], F.prototype, "tileInfo", void 0), h([f()], F.prototype, "extent", void 0), h([f()], F.prototype, "maximumByteSize", void 0), F = h([w("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], F);
let Ke = class {
  constructor(e, t, i) {
    this.data = e, this.objectIds = t, this.byteSize = i;
  }
};
class Q {
  constructor(e, t, i) {
    this.level = e, this.row = t, this.col = i, this.isLeaf = !1, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (this.children[0] != null || this.children[1] != null || this.children[2] != null || this.children[3] != null);
  }
}
class A {
  constructor(e, t = []) {
    this.missingTiles = t, this.fullArea = 0, this.coveredArea = 0, this.fullArea = Y(e.extent), this.coveredArea = this.fullArea;
  }
  prepend(e) {
    this.missingTiles = e.missingTiles.concat(this.missingTiles), this.coveredArea += e.coveredArea, this.fullArea += e.fullArea;
  }
}
class et {
  constructor(e, t, i) {
    this._tileInfo = e, this._extent = null, this.info = new A(t), i != null && (this._extent = $(i));
  }
  addMissing(e, t, i, n) {
    const r = new ce(null, e, t, i);
    this._tileInfo.updateTileInfo(r, I.ExtrapolateOptions.POWER_OF_TWO), r.extent == null || this._extent != null && !R(this._extent, r.extent) || (this.info.missingTiles.push({ data: r, resolution: n }), this.info.coveredArea -= Y(r.extent));
  }
}
const tt = 0.18751;
var C;
(function(s) {
  s[s.ADDED = 0] = "ADDED", s[s.REMOVED = 1] = "REMOVED", s[s.UNCHANGED = 2] = "UNCHANGED";
})(C || (C = {}));
let T = class extends he.EventedAccessor {
  constructor() {
    super(...arguments), this._isInitializing = !0, this.remoteClient = null, this._whenSetup = H(), this._elevationAligner = q(), this._elevationFilter = V(), this._symbologyCandidatesFetcher = k(), this._handles = new de(), this._updatingHandles = new N(), this._editsUpdatingHandles = new N(), this._pendingApplyEdits = /* @__PURE__ */ new Map(), this._alignPointsInFeatures = async (s, e) => {
      const t = { points: s }, i = await this.remoteClient.invoke("alignElevation", t, { signal: e });
      return g(e), i;
    }, this._getSymbologyCandidates = async (s, e) => {
      const t = { candidates: s, spatialReference: this._spatialReference.toJSON() }, i = await this.remoteClient.invoke("getSymbologyCandidates", t, { signal: e });
      return g(e), i;
    };
  }
  get updating() {
    return this.updatingExcludingEdits || this._editsUpdatingHandles.updating || this._featureFetcher.updating;
  }
  get updatingExcludingEdits() {
    return this._featureFetcher.updatingExcludingEdits || this._isInitializing || this._updatingHandles.updating;
  }
  destroy() {
    var s, e, t, i;
    (s = this._featureFetcher) == null || s.destroy(), (e = this._queryEngine) == null || e.destroy(), (t = this._featureStore) == null || t.clear(), (i = this._handles) == null || i.destroy();
  }
  async setup(s) {
    if (this.destroyed)
      return { result: {} };
    const { geometryType: e, objectIdField: t, timeInfo: i, fields: n } = s.serviceInfo, { hasZ: r } = s, a = M.fromJSON(s.spatialReference);
    this._spatialReference = a, this._featureStore = new _e({ ...s.serviceInfo, hasZ: r, hasM: !1 }), this._queryEngine = new ge({ spatialReference: s.spatialReference, featureStore: this._featureStore, geometryType: e, fields: n, hasZ: r, hasM: !1, objectIdField: t, timeInfo: i }), this._featureFetcher = new _({ store: new F({ featureStore: this._featureStore }), url: s.serviceInfo.url, objectIdField: s.serviceInfo.objectIdField, globalIdField: s.serviceInfo.globalIdField, capabilities: s.serviceInfo.capabilities, spatialReference: a, sourceSpatialReference: M.fromJSON(s.serviceInfo.spatialReference) });
    const o = s.configuration.viewType === "3d";
    return this._elevationAligner = q(o, { elevationInfo: s.elevationInfo != null ? fe.fromJSON(s.elevationInfo) : null, alignPointsInFeatures: this._alignPointsInFeatures, spatialReference: a }), this._elevationFilter = V(o), this._handles.add([U(() => this._featureFetcher.availability, (u) => this.emit("notify-availability", { availability: u }), X), U(() => this.updating, () => this._notifyUpdating())]), this._whenSetup.resolve(), this._isInitializing = !1, this.configure(s.configuration);
  }
  async configure(s) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), this._updateFeatureFetcherConfiguration(s), { result: {} };
  }
  async fetchCandidates(s, e) {
    await this._whenSetup.promise, g(e);
    const t = st(s), i = e != null ? e.signal : null, n = await this._queryEngine.executeQueryForSnapping(t, i);
    g(i);
    const r = await this._elevationAligner.alignCandidates(n.candidates, i);
    g(i);
    const a = await this._symbologyCandidatesFetcher.fetch(r, i);
    g(i);
    const o = a.length === 0 ? r : r.concat(a);
    return { result: { candidates: this._elevationFilter.filter(t, o) } };
  }
  async updateTiles(s, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), g(e), this._featureFetcher.tileSize = s.tileSize, this._featureFetcher.tilesOfInterest = s.tiles, this._featureFetcher.tileInfo = s.tileInfo != null ? I.fromJSON(s.tileInfo) : null, E;
  }
  async refresh(s, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), g(e), this._featureFetcher.refresh(), E;
  }
  async whenNotUpdating(s, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), g(e), await pe(() => !this.updatingExcludingEdits, e), g(e), E;
  }
  async getDebugInfo(s, e) {
    return g(e), { result: this._featureFetcher.debugInfo };
  }
  async beginApplyEdits(s, e) {
    this._updatingHandles.addPromise(this._whenSetup.promise), g(e);
    const t = H();
    return this._pendingApplyEdits.set(s.id, t), this._featureFetcher.applyEdits(t.promise), this._editsUpdatingHandles.addPromise(t.promise), E;
  }
  async endApplyEdits(s, e) {
    const t = this._pendingApplyEdits.get(s.id);
    return t && t.resolve(s.edits), g(e), E;
  }
  async notifyElevationSourceChange(s, e) {
    return this._elevationAligner.notifyElevationSourceChange(), E;
  }
  async notifySymbologyChange(s, e) {
    return this._symbologyCandidatesFetcher.notifySymbologyChange(), E;
  }
  async setSymbologySnappingSupported(s) {
    return this._symbologyCandidatesFetcher = k(s, this._getSymbologyCandidates), E;
  }
  _updateFeatureFetcherConfiguration(s) {
    this._featureFetcher.filter = s.filter != null ? b.fromJSON(s.filter) : null, this._featureFetcher.customParameters = s.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
h([f({ readOnly: !0 })], T.prototype, "updating", null), h([f({ readOnly: !0 })], T.prototype, "updatingExcludingEdits", null), h([f()], T.prototype, "_isInitializing", void 0), T = h([w("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], T);
const Ht = T;
function st(s) {
  return { point: s.point, mode: s.mode, distance: s.distance, returnEdge: s.returnEdge, returnVertex: s.returnVertex, query: s.filter != null ? s.filter : { where: "1=1" } };
}
const E = { result: {} };
export {
  Ht as default
};

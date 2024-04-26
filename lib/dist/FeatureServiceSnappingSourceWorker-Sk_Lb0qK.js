import { e as o, d as u, a as S, ay as M, dh as U, aU as I, gL as R, l as f, et as O, gM as A, s as B, c9 as j, r as h, gN as q, gB as k, dI as T, gO as L, M as V, bG as G, eG as J, w as Q, gP as W, gQ as Z, gR as X, gS as Y, gD as K, er as ee, eL as te, eX as se, gT as ie, c2 as v, gU as re, gV as x, gW as $, e2 as ne, gX as D, u as ae, gY as oe, gZ as le, m as P, bc as m, eu as ue, g_ as he } from "./index-Ek1MTSEY.js";
import { e as ce, m as de } from "./FeatureStore-jXd5NPYd.js";
import { V as pe } from "./QueryEngine-VI1gPsDJ.js";
import "vue";
import "./PooledRBush-3WmNXB5l.js";
import "./projectionSupport-OcYAvekw.js";
import "./json-uwIaZKlZ.js";
import "./WhereClause-tgx5XbAS.js";
import "./QueryEngineCapabilities-gmxC9I6i.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./utils-GLnihTtT.js";
import "./ClassBreaksDefinition-niJmWb63.js";
import "./spatialQuerySupport-Z2pv9ola.js";
let C = class extends M {
  constructor() {
    super(...arguments), this.updating = !1, this.pending = [];
  }
  push(t, e) {
    this.pending.push({ promise: t, callback: e }), this.pending.length === 1 && this._process();
  }
  _process() {
    if (!this.pending.length)
      return void (this.updating = !1);
    this.updating = !0;
    const t = this.pending[0];
    t.promise.then((e) => t.callback(e)).catch(() => {
    }).then(() => {
      this.pending.shift(), this._process();
    });
  }
};
o([u()], C.prototype, "updating", void 0), C = o([S("geoscene.core.AsyncSequence")], C);
class fe {
  constructor(e, s) {
    this.data = e, this.resolution = s, this.state = { type: a.CREATED }, this.alive = !0;
  }
  process(e) {
    switch (this.state.type) {
      case a.CREATED:
        return this.state = this._gotoFetchCount(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case a.FETCH_COUNT:
        break;
      case a.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case a.FETCH_FEATURES:
        break;
      case a.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, e);
      case a.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this.featureCount, state: this.stateToString };
  }
  get featureCount() {
    switch (this.state.type) {
      case a.CREATED:
      case a.FETCH_COUNT:
        return 0;
      case a.FETCHED_COUNT:
        return this.state.featureCount;
      case a.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case a.FETCHED_FEATURES:
        return this.state.features.length;
      case a.DONE:
        return this.state.previous.features.length;
    }
  }
  get stateToString() {
    switch (this.state.type) {
      case a.CREATED:
        return "created";
      case a.FETCH_COUNT:
        return "fetch-count";
      case a.FETCHED_COUNT:
        return "fetched-count";
      case a.FETCH_FEATURES:
        return "fetch-features";
      case a.FETCHED_FEATURES:
        return "fetched-features";
      case a.DONE:
        return "done";
    }
  }
  _gotoFetchCount(e, s) {
    return { type: a.FETCH_COUNT, previous: e, task: I(async (i) => {
      const r = await R(s.fetchCount(this, i));
      this.state.type === a.FETCH_COUNT && (this.state = this._gotoFetchedCount(this.state, r.ok ? r.value : 1 / 0));
    }) };
  }
  _gotoFetchedCount(e, s) {
    return { type: a.FETCHED_COUNT, featureCount: s, previous: e };
  }
  _gotoFetchFeatures(e, s) {
    return { type: a.FETCH_FEATURES, previous: e, task: I(async (i) => {
      const r = await R(s.fetchFeatures(this, e.featureCount, i));
      this.state.type === a.FETCH_FEATURES && (this.state = this._gotoFetchedFeatures(this.state, r.ok ? r.value : []));
    }) };
  }
  _gotoFetchedFeatures(e, s) {
    return { type: a.FETCHED_FEATURES, previous: e, features: s };
  }
  _goToDone(e, s) {
    return s.finish(this, e.features), { type: a.DONE, previous: e };
  }
  reset() {
    const e = this.state;
    switch (this.state = { type: a.CREATED }, e.type) {
      case a.CREATED:
      case a.FETCHED_COUNT:
      case a.FETCHED_FEATURES:
      case a.DONE:
        break;
      case a.FETCH_COUNT:
      case a.FETCH_FEATURES:
        e.task.abort();
    }
  }
  intersects(e) {
    return !(!f(e) && this.data.extent) || (O(e, H), A(this.data.extent, H));
  }
}
var a;
(function(t) {
  t[t.CREATED = 0] = "CREATED", t[t.FETCH_COUNT = 1] = "FETCH_COUNT", t[t.FETCHED_COUNT = 2] = "FETCHED_COUNT", t[t.FETCH_FEATURES = 3] = "FETCH_FEATURES", t[t.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", t[t.DONE = 5] = "DONE";
})(a || (a = {}));
const H = U(), ge = B.getLogger("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");
let c = class extends j {
  constructor(e) {
    super(e), this.tilesOfInterest = [], this.availability = 0, this.pendingTiles = /* @__PURE__ */ new Map(), this.pendingEdits = new C(), this.pendingEditsAbortController = new AbortController();
  }
  get minimumVerticesPerFeature() {
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
    const s = this._get("filter"), i = this._filterProperties(e);
    JSON.stringify(s) !== JSON.stringify(i) && this._set("filter", i);
  }
  set customParameters(e) {
    const s = this._get("customParameters");
    JSON.stringify(s) !== JSON.stringify(e) && this._set("customParameters", e);
  }
  get configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(e) {
    const s = this._get("tileInfo");
    s !== e && (h(e) && h(s) && JSON.stringify(e) === JSON.stringify(s) || (this._set("tileInfo", e), this.store.tileInfo = e));
  }
  set tileSize(e) {
    this._get("tileSize") !== e && this._set("tileSize", e);
  }
  get updating() {
    return this.updatingHandles.updating || this.pendingEdits.updating;
  }
  initialize() {
    this._initializeFetchExtent(), this.updatingHandles.add(() => this.configuration, () => this.refresh()), this.updatingHandles.add(() => this.tilesOfInterest, (e, s) => {
      q(e, s, ({ id: i }, { id: r }) => i === r) || this._process();
    }, k);
  }
  destroy() {
    this.pendingTiles.forEach((e) => this._deletePendingTile(e)), this.pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this.pendingEditsAbortController.abort(), this.pendingEditsAbortController = null;
  }
  refresh() {
    this.store.refresh(), this.pendingTiles.forEach((e) => this._deletePendingTile(e)), this._process();
  }
  applyEdits(e) {
    this.pendingEdits.push(e, async (s) => {
      if (s.addedFeatures.length === 0 && s.updatedFeatures.length === 0 && s.deletedFeatures.length === 0)
        return;
      for (const [, r] of this.pendingTiles)
        r.reset();
      const i = { ...s, deletedFeatures: s.deletedFeatures.map(({ objectId: r, globalId: n }) => r && r !== -1 ? r : this._lookupObjectIdByGlobalId(n)) };
      await this.updatingHandles.addPromise(this.store.processEdits(i, (r, n) => this._queryFeaturesById(r, n), this.pendingEditsAbortController.signal)), this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent)
      return;
    const e = I(async (s) => {
      try {
        var i;
        const r = await L(this.url, new T({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: !!this.capabilities.query.supportsCacheHint || void 0 }), { query: this.configuration.customParameters, signal: s });
        this.store.extent = V.fromJSON((i = r.data) == null ? void 0 : i.extent);
      } catch (r) {
        G(r), ge.warn("Failed to fetch data extent", r);
      }
    });
    this.updatingHandles.addPromise(e.promise.then(() => this._process())), this.handles.add(J(() => e.abort()));
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this.pendingTiles.values()).map((e) => e.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, e] of this.pendingTiles)
      e.alive = !1;
  }
  _createPendingTiles() {
    const e = this._collectMissingTilesInfo();
    if (this._setAvailability(f(e) ? 1 : e.coveredArea / e.fullArea), !f(e))
      for (const { data: s, resolution: i } of e.missingTiles) {
        const r = this.pendingTiles.get(s.id);
        r ? (r.resolution = i, r.alive = !0) : this._createPendingTile(s, i);
      }
  }
  _collectMissingTilesInfo() {
    let e = null;
    for (let s = this.tilesOfInterest.length - 1; s >= 0; s--) {
      const i = this.tilesOfInterest[s], r = this.store.process(i, (n, l) => this._verifyTileComplexity(n, l));
      f(e) ? e = r : e.prepend(r);
    }
    return e;
  }
  _deletePendingTiles() {
    for (const [, e] of this.pendingTiles)
      e.alive || this._deletePendingTile(e);
  }
  _processPendingTiles() {
    const e = { fetchCount: (s, i) => this._fetchCount(s, i), fetchFeatures: (s, i, r) => this._fetchFeatures(s, i, r), finish: (s, i) => this._finishPendingTile(s, i), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(e))
      for (const [, s] of this.pendingTiles)
        this._verifyTileComplexity(this.store.getFeatureCount(s.data), s.resolution) && this.updatingHandles.addPromise(s.process(e));
  }
  _verifyTileComplexity(e, s) {
    return this._verifyVertexComplexity(e) && this._verifyFeatureDensity(e, s);
  }
  _verifyVertexComplexity(e) {
    return e * this.minimumVerticesPerFeature < _e;
  }
  _verifyFeatureDensity(e, s) {
    if (f(this.tileInfo))
      return !1;
    const i = this.tileSize * s;
    return e * (me / (i * i)) < Ee;
  }
  _ensureFetchAllCounts(e) {
    let s = !0;
    for (const [, i] of this.pendingTiles)
      i.state.type < a.FETCHED_COUNT && this.updatingHandles.addPromise(i.process(e)), i.state.type <= a.FETCH_COUNT && (s = !1);
    return s;
  }
  _finishPendingTile(e, s) {
    this.store.add(e.data, s), this._deletePendingTile(e), this._updateAvailability();
  }
  _updateAvailability() {
    const e = this._collectMissingTilesInfo();
    this._setAvailability(f(e) ? 1 : e.coveredArea / e.fullArea);
  }
  _setAvailability(e) {
    this._set("availability", e);
  }
  _createPendingTile(e, s) {
    const i = new fe(e, s);
    return this.pendingTiles.set(e.id, i), i;
  }
  _deletePendingTile(e) {
    e.reset(), this.pendingTiles.delete(e.data.id);
  }
  async _fetchCount(e, s) {
    return this.store.fetchCount(e.data, this.url, this._createCountQuery(e), { query: this.customParameters, timeout: b, signal: s });
  }
  async _fetchFeatures(e, s, i) {
    let r, n = 0, l = 0, y = s;
    for (; ; ) {
      const p = this._createFeaturesQuery(e), d = this._setPagingParameters(p, n, y), { features: g, exceededTransferLimit: z } = await this._queryFeatures(p, i);
      if (d && (n += Q(p.num)), l += g.length, r = r ? r.concat(g) : g, y = s - l, !d || !z || y <= 0)
        return r;
    }
  }
  _filterProperties(e) {
    return f(e) ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: e.where || "1=1", timeExtent: e.timeExtent, gdbVersion: e.gdbVersion };
  }
  _lookupObjectIdByGlobalId(e) {
    const s = this.globalIdField, i = this.objectIdField;
    if (f(s))
      throw new Error("Expected globalIdField to be defined");
    let r = null;
    if (this.store.featureStore.forEach((n) => {
      var l;
      e === n.attributes[s] && (r = (l = n.objectId) != null ? l : n.attributes[i]);
    }), f(r))
      throw new Error(`Expected to find a feature with globalId ${e}`);
    return r;
  }
  _queryFeaturesById(e, s) {
    const i = this._createFeaturesQuery(null);
    return i.objectIds = e, this._queryFeatures(i, s);
  }
  _queryFeatures(e, s) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(e, s) : this._queryFeaturesJSON(e, s);
  }
  async _queryFeaturesPBF(e, s) {
    const { sourceSpatialReference: i } = this, { data: r } = await W(this.url, e, new Z({ sourceSpatialReference: i }), { query: this.configuration.customParameters, timeout: b, signal: s });
    return X(r);
  }
  async _queryFeaturesJSON(e, s) {
    const { sourceSpatialReference: i } = this, { data: r } = await Y(this.url, e, i, { query: this.configuration.customParameters, timeout: b, signal: s });
    return K(r, this.objectIdField);
  }
  _createCountQuery(e) {
    const s = this._createBaseQuery(e);
    return this.capabilities.query.supportsCacheHint && (s.cacheHint = !0), s;
  }
  _createFeaturesQuery(e) {
    const s = this._createBaseQuery(e);
    return s.outFields = this.globalIdField ? [this.globalIdField, this.objectIdField] : [this.objectIdField], s.returnGeometry = !0, h(e) && (this.capabilities.query.supportsResultType ? s.resultType = "tile" : this.capabilities.query.supportsCacheHint && (s.cacheHint = !0)), s;
  }
  _createBaseQuery(e) {
    const s = new T({ returnZ: !1, returnM: !1, geometry: h(this.tileInfo) && h(e) ? ee(e.data.extent, this.tileInfo.spatialReference) : void 0 }), i = this.configuration.filter;
    return h(i) && (s.where = i.where, s.gdbVersion = i.gdbVersion, s.timeExtent = i.timeExtent), s.outSpatialReference = this.spatialReference, s;
  }
  _setPagingParameters(e, s, i) {
    if (!this.capabilities.query.supportsPagination)
      return !1;
    const { supportsMaxRecordCountFactor: r, supportsCacheHint: n, tileMaxRecordCount: l, maxRecordCount: y, supportsResultType: p } = this.capabilities.query, d = r ? T.MAX_MAX_RECORD_COUNT_FACTOR : 1, g = d * ((p || n) && l ? l : y || ye);
    return e.start = s, r ? (e.maxRecordCountFactor = Math.min(d, Math.ceil(i / g)), e.num = Math.min(i, e.maxRecordCountFactor * g)) : e.num = Math.min(i, g), !0;
  }
};
o([u({ constructOnly: !0 })], c.prototype, "url", void 0), o([u({ constructOnly: !0 })], c.prototype, "objectIdField", void 0), o([u({ constructOnly: !0 })], c.prototype, "globalIdField", void 0), o([u({ constructOnly: !0 })], c.prototype, "capabilities", void 0), o([u({ constructOnly: !0 })], c.prototype, "sourceSpatialReference", void 0), o([u({ constructOnly: !0 })], c.prototype, "spatialReference", void 0), o([u({ constructOnly: !0 })], c.prototype, "store", void 0), o([u({ readOnly: !0 })], c.prototype, "minimumVerticesPerFeature", null), o([u()], c.prototype, "filter", null), o([u()], c.prototype, "customParameters", null), o([u({ readOnly: !0 })], c.prototype, "configuration", null), o([u()], c.prototype, "tileInfo", null), o([u()], c.prototype, "tileSize", null), o([u()], c.prototype, "tilesOfInterest", void 0), o([u({ readOnly: !0 })], c.prototype, "updating", null), o([u({ readOnly: !0 })], c.prototype, "availability", void 0), c = o([S("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], c);
const ye = 2e3, b = 6e5, _e = 1e6, me = 25, Ee = 1;
class Fe {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._byteSize = 0;
  }
  set(e, s) {
    this.delete(e), this._store.set(e, s), this._byteSize += s.byteSize;
  }
  delete(e) {
    const s = this._store.get(e);
    return !!this._store.delete(e) && (this._byteSize -= s.byteSize, !0);
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
  applyByteSizeLimit(e, s) {
    for (const [i, r] of this._store) {
      if (this._byteSize <= e)
        break;
      this.delete(i), s(r);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(e) {
    const s = this._store.get(e);
    s && (this._store.delete(e), this._store.set(e, s));
  }
}
let E = class extends M {
  constructor(t) {
    super(t), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * te.MEGABYTES, this.tileBounds = new ce(), this.tiles = new Fe(), this.refCounts = /* @__PURE__ */ new Map(), this.tileFeatureCounts = /* @__PURE__ */ new Map(), this.tmpBoundingRect = U();
  }
  add(t, e) {
    const s = [];
    for (const i of e)
      this._referenceFeature(i.objectId) === _.ADDED && s.push(i);
    this._addTileStorage(t, new Set(e.map(({ objectId: i }) => i)), Te(e)), this.featureStore.addMany(s), this.tiles.applyByteSizeLimit(this.maximumByteSize, (i) => this._removeTileStorage(i));
  }
  destroy() {
    this.clear(), this.tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this.tileBounds.clear(), this.tiles.clear(), this.refCounts.clear();
  }
  refresh() {
    this.clear(), this.tileFeatureCounts.clear();
  }
  processEdits(t, e, s) {
    return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)), this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures), e, s);
  }
  _addTileStorage(t, e, s) {
    this.tiles.set(t.id, new Se(t, e, s)), this.tileBounds.set(t.id, t.extent), this.tileFeatureCounts.set(t.id, e.size);
  }
  _remove({ id: t }) {
    const e = this.tiles.get(t);
    e && this._removeTileStorage(e);
  }
  _removeTileStorage(t) {
    const e = [];
    for (const i of t.objectIds)
      this._unreferenceFeature(i) === _.REMOVED && e.push(i);
    this.featureStore.removeManyById(e);
    const s = t.data.id;
    this.tiles.delete(s), this.tileBounds.delete(s);
  }
  _processEditsDelete(t) {
    this.featureStore.removeManyById(t);
    for (const [, e] of this.tiles) {
      for (const s of t)
        e.objectIds.delete(s);
      this.tileFeatureCounts.set(e.data.id, e.objectIds.size);
    }
    for (const e of t)
      this.refCounts.delete(e);
  }
  async _processEditsRefetch(t, e, s) {
    const i = (await e(t, s)).features, { hasZ: r, hasM: n } = this.featureStore;
    for (const l of i) {
      const y = se(this.tmpBoundingRect, l.geometry, r, n);
      f(y) || this.tileBounds.forEachInBounds(y, (p) => {
        const d = this.tiles.get(p);
        this.featureStore.add(l), d.objectIds.has(l.objectId) || (d.objectIds.add(l.objectId), this._referenceFeature(l.objectId), this.tileFeatureCounts.set(d.data.id, d.objectIds.size));
      });
    }
  }
  process(t, e = () => !0) {
    if (f(this.tileInfo) || !t.extent || h(this.extent) && !A(O(this.extent, this.tmpBoundingRect), t.extent))
      return new w(t);
    if (this.tiles.has(t.id))
      return new w(t);
    const s = this._createTileTree(t, this.tileInfo);
    return this._simplify(s, e, null, 0, 1), this._collectMissingTiles(t, s, this.tileInfo);
  }
  get debugInfo() {
    return Array.from(this.tiles.values()).map(({ data: t }) => ({ data: t, featureCount: this.tileFeatureCounts.get(t.id) || 0 }));
  }
  getFeatureCount(t) {
    const e = this.tileFeatureCounts.get(t.id);
    return e ?? 0;
  }
  async fetchCount(t, e, s, i) {
    const r = this.tileFeatureCounts.get(t.id);
    if (r != null)
      return r;
    const n = await ie(e, s, i);
    return this.tileFeatureCounts.set(t.id, n.data.count), n.data.count;
  }
  _createTileTree(t, e) {
    const s = new N(t.level, t.row, t.col);
    return e.updateTileInfo(s, v.ExtrapolateOptions.POWER_OF_TWO), this.tileBounds.forEachInBounds(t.extent, (i) => {
      const r = this.tiles.get(i).data;
      this._tilesAreRelated(t, r) && this._populateChildren(s, r, e, this.tileFeatureCounts.get(r.id) || 0);
    }), s;
  }
  _tilesAreRelated(t, e) {
    if (!t || !e)
      return !1;
    if (t.level === e.level)
      return t.row === e.row && t.col === e.col;
    const s = t.level < e.level, i = s ? t : e, r = s ? e : t, n = 1 << r.level - i.level;
    return Math.floor(r.row / n) === i.row && Math.floor(r.col / n) === i.col;
  }
  _populateChildren(t, e, s, i) {
    const r = e.level - t.level - 1;
    if (r < 0)
      return void (t.isLeaf = !0);
    const n = e.row >> r, l = e.col >> r, y = t.row << 1, p = l - (t.col << 1) + (n - y << 1), d = t.children[p];
    if (h(d))
      this._populateChildren(d, e, s, i);
    else {
      const g = new N(t.level + 1, n, l);
      s.updateTileInfo(g, v.ExtrapolateOptions.POWER_OF_TWO), t.children[p] = g, this._populateChildren(g, e, s, i);
    }
  }
  _simplify(t, e, s, i, r) {
    const n = r * r;
    if (t.isLeaf)
      return e(this.getFeatureCount(t), r) ? 0 : (this._remove(t), h(s) && (s.children[i] = null), n);
    const l = r / 2, y = l * l;
    let p = 0;
    for (let d = 0; d < t.children.length; d++) {
      const g = t.children[d];
      p += h(g) ? this._simplify(g, e, t, d, l) : y;
    }
    return p === 0 ? this._mergeChildren(t) : 1 - p / n < Ie && (this._purge(t), h(s) && (s.children[i] = null), p = n), p;
  }
  _mergeChildren(t) {
    const e = /* @__PURE__ */ new Set();
    let s = 0;
    this._forEachLeaf(t, (i) => {
      const r = this.tiles.get(i.id);
      if (r) {
        s += r.byteSize;
        for (const n of r.objectIds)
          e.has(n) || (e.add(n), this._referenceFeature(n));
        this._remove(i);
      }
    }), this._addTileStorage(t, e, s), t.isLeaf = !0, t.children[0] = t.children[1] = t.children[2] = t.children[3] = null, this.tileFeatureCounts.set(t.id, e.size);
  }
  _forEachLeaf(t, e) {
    for (const s of t.children)
      f(s) || (s.isLeaf ? e(s) : this._forEachLeaf(s, e));
  }
  _purge(t) {
    if (!f(t))
      if (t.isLeaf)
        this._remove(t);
      else
        for (let e = 0; e < t.children.length; e++) {
          const s = t.children[e];
          this._purge(s), t.children[e] = null;
        }
  }
  _collectMissingTiles(t, e, s) {
    const i = new be(s, t, this.extent);
    return this._collectMissingTilesRecurse(e, i, 1), i.info;
  }
  _collectMissingTilesRecurse(t, e, s) {
    if (t.isLeaf)
      return;
    if (!t.hasChildren)
      return void e.addMissing(t.level, t.row, t.col, s);
    const i = s / 2;
    for (let r = 0; r < t.children.length; r++) {
      const n = t.children[r];
      f(n) ? e.addMissing(t.level + 1, (t.row << 1) + ((2 & r) >> 1), (t.col << 1) + (1 & r), i) : this._collectMissingTilesRecurse(n, e, i);
    }
  }
  _referenceFeature(t) {
    const e = (this.refCounts.get(t) || 0) + 1;
    return this.refCounts.set(t, e), e === 1 ? _.ADDED : _.UNCHANGED;
  }
  _unreferenceFeature(t) {
    const e = (this.refCounts.get(t) || 0) - 1;
    return e === 0 ? (this.refCounts.delete(t), _.REMOVED) : (e > 0 && this.refCounts.set(t, e), _.UNCHANGED);
  }
  get test() {
    return { tiles: Array.from(this.tiles.values()).map((t) => `${t.data.id}:[${Array.from(t.objectIds)}]`), featureReferences: Array.from(this.refCounts.keys()).map((t) => `${t}:${this.refCounts.get(t)}`) };
  }
};
function Te(t) {
  return t.reduce((e, s) => e + Ce(s), 0);
}
function Ce(t) {
  return 32 + ve(t.geometry) + re(t.attributes);
}
function ve(t) {
  if (f(t))
    return 0;
  const e = x(t.lengths, 4);
  return 32 + x(t.coords, 8) + e;
}
o([u({ constructOnly: !0 })], E.prototype, "featureStore", void 0), o([u()], E.prototype, "tileInfo", void 0), o([u()], E.prototype, "extent", void 0), o([u()], E.prototype, "maximumByteSize", void 0), E = o([S("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], E);
class Se {
  constructor(e, s, i) {
    this.data = e, this.objectIds = s, this.byteSize = i;
  }
}
class N {
  constructor(e, s, i) {
    this.level = e, this.row = s, this.col = i, this.isLeaf = !1, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (h(this.children[0]) || h(this.children[1]) || h(this.children[2]) || h(this.children[3]));
  }
}
class w {
  constructor(e, s = []) {
    this.missingTiles = s, this.fullArea = 0, this.coveredArea = 0, this.fullArea = $(e.extent), this.coveredArea = this.fullArea;
  }
  prepend(e) {
    this.missingTiles = e.missingTiles.concat(this.missingTiles), this.coveredArea += e.coveredArea, this.fullArea += e.fullArea;
  }
}
class be {
  constructor(e, s, i) {
    this.tileInfo = e, this.extent = null, this.info = new w(s), h(i) && (this.extent = O(i));
  }
  addMissing(e, s, i, r) {
    const n = { id: null, level: e, row: s, col: i };
    this.tileInfo.updateTileInfo(n, v.ExtrapolateOptions.POWER_OF_TWO), !h(n.extent) || h(this.extent) && !A(this.extent, n.extent) || (this.info.missingTiles.push({ data: n, resolution: r }), this.info.coveredArea -= $(n.extent));
  }
}
const Ie = 0.18751;
var _;
(function(t) {
  t[t.ADDED = 0] = "ADDED", t[t.REMOVED = 1] = "REMOVED", t[t.UNCHANGED = 2] = "UNCHANGED";
})(_ || (_ = {}));
let F = class extends ne.EventedAccessor {
  constructor() {
    super(...arguments), this.isInitializing = !0, this.whenSetup = D(), this.handles = new ae(), this.updatingHandles = new oe(), this.pendingApplyEdits = /* @__PURE__ */ new Map();
  }
  get updating() {
    return this.featureFetcher.updating || this.isInitializing || this.updatingHandles.updating;
  }
  destroy() {
    this.featureFetcher.destroy(), this.queryEngine.destroy(), this.featureStore.clear(), this.handles.destroy();
  }
  async setup(t) {
    const { geometryType: e, objectIdField: s, timeInfo: i, fields: r } = t.serviceInfo;
    return this.featureStore = new de({ ...t.serviceInfo, hasZ: !1, hasM: !1 }), this.queryEngine = new pe({ spatialReference: t.spatialReference, featureStore: this.featureStore, geometryType: e, fields: r, hasZ: !1, hasM: !1, objectIdField: s, timeInfo: i ? le.fromJSON(i) : null }), this.featureFetcher = new c({ store: new E({ featureStore: this.featureStore }), url: t.serviceInfo.url, objectIdField: t.serviceInfo.objectIdField, globalIdField: t.serviceInfo.globalIdField, capabilities: t.serviceInfo.capabilities, spatialReference: P.fromJSON(t.spatialReference), sourceSpatialReference: P.fromJSON(t.serviceInfo.spatialReference) }), this.handles.add([this.featureFetcher.watch("availability", (n) => this.emit("notify-availability", { availability: n }), !0), this.watch("updating", () => this._notifyUpdating())]), this.whenSetup.resolve(), this.isInitializing = !1, this.configure(t.configuration);
  }
  async configure(t) {
    return await this.updatingHandles.addPromise(this.whenSetup.promise), this._updateFeatureFetcherConfiguration(t), { result: {} };
  }
  async fetchCandidates(t, e) {
    return await this.whenSetup.promise, m(e), { result: await this.queryEngine.executeQueryForSnapping({ point: t.point, distance: t.distance, types: t.types, query: h(t.filter) ? t.filter : { where: "1=1" } }, h(e) ? e.signal : null) };
  }
  async updateTiles(t, e) {
    return await this.updatingHandles.addPromise(this.whenSetup.promise), m(e), this.featureFetcher.tileSize = t.tileSize, this.featureFetcher.tilesOfInterest = t.tiles, this.featureFetcher.tileInfo = h(t.tileInfo) ? v.fromJSON(t.tileInfo) : null, { result: {} };
  }
  async refresh(t, e) {
    return await this.updatingHandles.addPromise(this.whenSetup.promise), m(e), this.featureFetcher.refresh(), { result: {} };
  }
  async whenNotUpdating(t, e) {
    return await this.updatingHandles.addPromise(this.whenSetup.promise), m(e), await ue(he(this, "updating"), e), { result: {} };
  }
  async getDebugInfo(t, e) {
    return m(e), { result: this.featureFetcher.debugInfo };
  }
  async beginApplyEdits(t, e) {
    this.updatingHandles.addPromise(this.whenSetup.promise), m(e);
    const s = D();
    return this.pendingApplyEdits.set(t.id, s), this.featureFetcher.applyEdits(s.promise), this.updatingHandles.addPromise(s.promise), { result: {} };
  }
  async endApplyEdits(t, e) {
    const s = this.pendingApplyEdits.get(t.id);
    return s && s.resolve(t.edits), m(e), { result: {} };
  }
  _updateFeatureFetcherConfiguration(t) {
    this.featureFetcher.filter = h(t.filter) ? T.fromJSON(t.filter) : null, this.featureFetcher.customParameters = t.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
function je() {
  return new F();
}
o([u({ readOnly: !0 })], F.prototype, "updating", null), o([u()], F.prototype, "isInitializing", void 0), F = o([S("geoscene.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], F);
export {
  F as FeatureServiceSnappingSourceWorker,
  je as default
};

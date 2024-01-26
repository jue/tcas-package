import { d as D, a as F, c as R, dy as K, fr as w, b5 as b, a9 as $, dz as S, B as E } from "./index-HxXrdrYt.js";
import { i as P } from "./ExpandedCIM-zhKUhBHU.js";
import { p as L } from "./visualVariablesUtils-DYpRy0_r.js";
import { S as A } from "./color-kwBCExHr.js";
import { x as O, o as x, a as U, E as z, n as B } from "./Matcher-72v38sbr.js";
import { p as j } from "./BaseProcessor-lwWU6jNM.js";
import "vue";
import "./BidiEngine-hERHJu7U.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./enums-QU6RH5ju.js";
import "./utils-40PVs7PG.js";
import "./GeometryUtils-ks2bByfT.js";
import "./definitions-5wPyT42Z.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-j-mSNUkn.js";
import "./earcut-fJT_ZMGO.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-kWM-xNyV.js";
class H {
  constructor(e) {
    this._remoteClient = e, this._resourceMap = /* @__PURE__ */ new Map(), this._inFlightResourceMap = /* @__PURE__ */ new Map(), this.geometryEngine = null, this.geometryEnginePromise = null;
  }
  destroy() {
  }
  async fetchResource(e, s) {
    const r = this._resourceMap, i = r.get(e);
    if (i)
      return i;
    let a = this._inFlightResourceMap.get(e);
    if (a)
      return a;
    try {
      a = this._remoteClient.invoke("tileRenderer.fetchResource", { url: e }, { ...s }), this._inFlightResourceMap.set(e, a), a.then((n) => (this._inFlightResourceMap.delete(e), r.set(e, n), n));
    } catch (n) {
      return D(n) ? null : { width: 0, height: 0 };
    }
    return a;
  }
  getResource(e) {
    return this._resourceMap.get(e) ?? null;
  }
  loadFont(e) {
    return Promise.resolve(null);
  }
}
function T(t, e) {
  return (!t.minScale || t.minScale >= e) && (!t.maxScale || t.maxScale <= e);
}
function k(t) {
  const e = t.message, s = { message: { data: {}, tileKey: e.tileKey, tileKeyOrigin: e.tileKeyOrigin, version: e.version }, transferList: new Array() };
  for (const r in e.data) {
    const i = r, a = e.data[i];
    if (s.message.data[i] = null, a != null) {
      const n = a.stride, o = a.indices.slice(0), l = a.vertices.slice(0), c = a.records.slice(0), h = { stride: n, indices: o, vertices: l, records: c, metrics: S(a.metrics, (f) => f.slice(0)) };
      s.transferList.push(o, l, c), s.message.data[i] = h;
    }
  }
  return s;
}
let v = class extends j {
  constructor() {
    super(...arguments), this.type = "symbol", this._matchers = { feature: null, aggregate: null }, this._bufferData = /* @__PURE__ */ new Map(), this._bufferIds = /* @__PURE__ */ new Map();
  }
  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]), this._resourceManagerProxy = new H(this.remoteClient);
  }
  destroy() {
    this._resourceManagerProxy.destroy();
  }
  get supportsTileUpdates() {
    return !0;
  }
  forEachBufferId(t) {
    this._bufferIds.forEach((e) => {
      e.forEach(t);
    });
  }
  async update(t, e) {
    var i;
    const s = e.schema.processors[0];
    if (s.type !== "symbol")
      return;
    const r = K(this._schema, s);
    (w(r, "mesh") || w(r, "target")) && (t.mesh = !0, (i = t.why) == null || i.mesh.push("Symbology changed"), this._schema = s, this._factory = this._createFactory(s), this._factory.update(s, this.tileStore.tileScheme.tileInfo));
  }
  onTileMessage(t, e, s, r) {
    return b(r), this._onTileData(t, e, s, r);
  }
  onTileClear(t, e) {
    const s = { clear: !0, end: e };
    return this._bufferData.delete(t.key.id), this._bufferIds.delete(t.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: t.id, data: s });
  }
  onTileError(t, e, s) {
    const r = s.signal, i = { tileKey: t.id, error: e };
    return this.remoteClient.invoke("tileRenderer.onTileError", i, { signal: r });
  }
  onTileUpdate(t) {
    for (const e of t.removed)
      this._bufferData.has(e.key.id) && this._bufferData.delete(e.key.id), this._bufferIds.has(e.key.id) && this._bufferIds.delete(e.key.id);
    for (const e of t.added)
      this._bufferData.forEach((s) => {
        for (const r of s)
          r.message.tileKey === e.id && this._updateTileMesh("append", e, k(r), [], !1, !1, null);
      });
  }
  _addBufferData(t, e) {
    var s;
    this._bufferData.has(t) || this._bufferData.set(t, []), (s = this._bufferData.get(t)) == null || s.push(k(e));
  }
  _createFactory(t) {
    const { geometryType: e, objectIdField: s, fields: r } = this.service, i = (c, h) => this.remoteClient.invoke("tileRenderer.getMaterialItems", c, h), a = { geometryType: e, fields: r, spatialReference: $.fromJSON(this.spatialReference) }, n = new O(i, this.tileStore.tileScheme.tileInfo), { matcher: o, aggregateMatcher: l } = t.mesh;
    return this._store = n, this._matchers.feature = x(o, n, a, this._resourceManagerProxy), this._matchers.aggregate = S(l, (c) => x(c, n, a, this._resourceManagerProxy)), new U(e, s, n);
  }
  async _onTileData(t, e, s, r) {
    var f;
    b(r);
    const { type: i, addOrUpdate: a, remove: n, clear: o, end: l } = e, c = !!this._schema.mesh.sortKey;
    if (!a) {
      const d = { type: i, addOrUpdate: null, remove: n, clear: o, end: l, sort: c };
      return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: t.id, data: d }, r);
    }
    const h = this._processFeatures(t, a, s, r, (f = e.status) == null ? void 0 : f.version);
    try {
      const d = await h;
      if (d == null) {
        const u = { type: i, addOrUpdate: null, remove: n, clear: o, end: l, sort: c };
        return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: t.id, data: u }, r);
      }
      const m = [];
      for (const u of d) {
        let g = !1;
        const p = u.message.bufferIds, y = t.key.id, M = u.message.tileKey;
        if (y !== M && p != null) {
          if (!this.tileStore.get(M)) {
            this._addBufferData(y, u), m.push(u);
            continue;
          }
          let _ = this._bufferIds.get(M);
          _ || (_ = /* @__PURE__ */ new Set(), this._bufferIds.set(M, _));
          const C = Array.from(p);
          for (const I of C) {
            if (_.has(I)) {
              g = !0;
              break;
            }
            _.add(I);
          }
        }
        g || (this._addBufferData(y, u), m.push(u));
      }
      await Promise.all(m.map((u) => {
        const g = t.key.id === u.message.tileKey, p = g ? e.remove : [], y = g && e.end;
        return this._updateTileMesh(i, t, u, p, y, !!e.clear, r.signal);
      }));
    } catch (d) {
      this._handleError(t, d, r);
    }
  }
  async _updateTileMesh(t, e, s, r, i, a, n) {
    const o = t, l = s.message.tileKey, c = !!this._schema.mesh.sortKey;
    l !== e.key.id && (i = !1);
    const h = { type: o, addOrUpdate: S(s, (d) => d.message), remove: r, clear: a, end: i, sort: c }, f = { transferList: S(s, (d) => d.transferList) || [], signal: n };
    return b(f), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: l, data: h }, f);
  }
  async _processFeatures(t, e, s, r, i) {
    if (e == null || !e.hasFeatures)
      return null;
    const a = { transform: t.transform, hasZ: !1, hasM: !1 }, n = this._factory, o = { viewingMode: "", scale: t.scale }, l = await this._matchers.feature, c = await this._matchers.aggregate;
    b(r);
    const h = this._getLabelInfos(t, e);
    return await n.analyze(e.getCursor(), this._resourceManagerProxy, l, c, a, o), b(r), this._writeFeatureSet(t, e, a, h, n, s, i);
  }
  _writeFeatureSet(t, e, s, r, i, a, n) {
    const o = e.getSize(), l = this._schema.mesh.matcher.symbologyType, c = new z(t.key.id, { features: o, records: o, metrics: 0 }, l, a, l !== A.HEATMAP, n), h = { viewingMode: "", scale: t.scale }, f = e.getCursor();
    for (; f.next(); )
      try {
        const m = f.getDisplayId(), u = r != null ? r.get(m) : null;
        i.writeCursor(c, f, s, h, t.level, u, this._resourceManagerProxy);
      } catch {
      }
    const d = t.tileInfoView.tileInfo.isWrappable;
    return c.serialize(d);
  }
  _handleError(t, e, s) {
    if (!D(e)) {
      const r = { tileKey: t.id, error: e.message };
      return this.remoteClient.invoke("tileRenderer.onTileError", r, { signal: s.signal });
    }
    return Promise.resolve();
  }
  _getLabelingSchemaForScale(t) {
    const e = this._schema.mesh.labels;
    if (e == null)
      return null;
    if (e.type === "subtype") {
      const r = { type: "subtype", classes: {} };
      let i = !1;
      for (const a in e.classes) {
        const n = e.classes[a].filter((o) => T(o, t.scale));
        i = i || !!n.length, r.classes[a] = n;
      }
      return i ? r : null;
    }
    const s = e.classes.filter((r) => T(r, t.scale));
    return s.length ? { type: "simple", classes: s } : null;
  }
  _getLabels(t, e) {
    if (e.type === "subtype") {
      const s = this.service.subtypeField, r = E(s, "Expected to find subtype Field"), i = t.readAttribute(r);
      return i == null ? [] : e.classes[i] ?? [];
    }
    return e.classes;
  }
  _getLabelInfos(t, e) {
    const s = this._getLabelingSchemaForScale(t);
    if (s == null)
      return null;
    const r = /* @__PURE__ */ new Map(), i = e.getCursor();
    for (; i.next(); ) {
      const a = i.getDisplayId(), n = [], o = L(a), l = o && i.readAttribute("cluster_count") !== 1 ? "aggregate" : "feature", c = this._getLabels(i, s);
      for (const h of c) {
        if (h.target !== l)
          continue;
        const f = i.getStorage(), d = o && l === "feature" ? f.getComputedStringAtIndex(i.readAttribute("referenceId"), h.fieldIndex) : f.getComputedStringAtIndex(a, h.fieldIndex);
        if (!d)
          continue;
        const m = P(d.toString()), u = m[0], g = m[1];
        this._store.getMosaicItem(h.symbol, B(u)).then((p) => {
          n[h.index] = { glyphs: p.glyphMosaicItems ?? [], rtl: g, index: h.index };
        });
      }
      r.set(a, n);
    }
    return r;
  }
};
v = F([R("geoscene.views.2d.layers.features.processors.SymbolProcessor")], v);
const me = v;
export {
  me as default
};

import { g as T, s as $, e as C, a as R, cb as F, ep as K, Z as E, bc as _, m as L, cc as M, l as b, r as w, cm as P, eq as A, w as U } from "./index-Ek1MTSEY.js";
import { n as O } from "./CIMSymbolHelper-vL0M3Zv4.js";
import { p as j } from "./visualVariablesUtils-MRd41y5-.js";
import { j as z, l as S, a as B, E as Z, t as q } from "./Matcher-j-6bbFef.js";
import { p as J } from "./BaseProcessor-3M3rxMnp.js";
import "vue";
import "./BidiEngine-NdusBwFe.js";
import "./enums-YM9SAu8u.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./GeometryUtils-lfXCngnH.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./tileUtils-_JbVMe5W.js";
import "./TileClipper-UwGzPO3l.js";
import "./Geometry-etmNDSLV.js";
import "./GeometryUtils-ACqEo_je.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./earcut-80XuLCNX.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
class N {
  constructor(e) {
    this._remoteClient = e, this._resourceMap = /* @__PURE__ */ new Map(), this._inFlightResourceMap = /* @__PURE__ */ new Map(), this.geometryEngine = null;
  }
  destroy() {
  }
  async fetchResource(e, r) {
    const s = this._resourceMap, i = s.get(e);
    if (i)
      return i;
    let a = this._inFlightResourceMap.get(e);
    if (a)
      return a;
    try {
      a = this._remoteClient.invoke("tileRenderer.fetchResource", { url: e }, { ...r }), this._inFlightResourceMap.set(e, a), a.then((o) => (this._inFlightResourceMap.delete(e), s.set(e, o), o));
    } catch (o) {
      return T(o) ? null : { width: 0, height: 0 };
    }
    return a;
  }
  getResource(e) {
    var r;
    return (r = this._resourceMap.get(e)) != null ? r : null;
  }
}
function x(t, e) {
  return (!t.minScale || t.minScale >= e) && (!t.maxScale || t.maxScale <= e);
}
function k(t) {
  const e = t.message, r = { message: { data: {}, tileKey: e.tileKey, tileKeyOrigin: e.tileKeyOrigin }, transferList: new Array() };
  for (const s in e.data) {
    const i = e.data[s];
    if (r.message.data[s] = null, w(i)) {
      const a = i.stride, o = i.indices.slice(0), l = i.vertices.slice(0), h = i.records.slice(0), d = { stride: a, indices: o, vertices: l, records: h, metrics: M(i.metrics, (n) => n.slice(0)) };
      r.transferList.push(o, l, h), r.message.data[s] = d;
    }
  }
  return r;
}
$.getLogger("geoscene.views.2d.layers.features.processors.SymbolProcessor");
let v = class extends J {
  constructor() {
    super(...arguments), this.type = "symbol", this._matchers = { feature: null, aggregate: null }, this._bufferData = /* @__PURE__ */ new Map(), this._bufferIds = /* @__PURE__ */ new Map();
  }
  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]), this._resourceManagerProxy = new N(this.remoteClient);
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
    const r = e.schema.processors[0];
    if (r.type !== "symbol")
      return;
    const s = F(this._schema, r);
    K(s, "mesh") && (E("geoscene-2d-update-debug") && console.debug("Applying Update - Processor:", s), t.mesh = !0, t.why.mesh.push("Symbology changed"), this._schema = r, this._factory = this._createFactory(r), this._factory.update(r, this.tileStore.tileScheme.tileInfo));
  }
  onTileMessage(t, e, r, s) {
    return _(s), this._onTileData(t, e, r, s);
  }
  onTileClear(t) {
    const e = { clear: !0 };
    return this._bufferData.delete(t.key.id), this._bufferIds.delete(t.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: t.id, data: e });
  }
  onTileError(t, e, r) {
    const s = r.signal, i = { tileKey: t.id, error: e };
    return this.remoteClient.invoke("tileRenderer.onTileError", i, { signal: s });
  }
  onTileUpdate(t) {
    for (const e of t.removed)
      this._bufferData.has(e.key.id) && this._bufferData.delete(e.key.id), this._bufferIds.has(e.key.id) && this._bufferIds.delete(e.key.id);
    for (const e of t.added)
      this._bufferData.forEach((r) => {
        for (const s of r)
          s.message.tileKey === e.id && this._updateTileMesh("append", e, k(s), [], !1, !1, null);
      });
  }
  _addBufferData(t, e) {
    this._bufferData.has(t) || this._bufferData.set(t, []), this._bufferData.get(t).push(k(e));
  }
  _createFactory(t) {
    const { geometryType: e, objectIdField: r, fields: s } = this.service, i = (d, n) => this.remoteClient.invoke("tileRenderer.getMaterialItems", d, n), a = { geometryType: e, fields: s, spatialReference: L.fromJSON(this.spatialReference) }, o = new z(i, this.tileStore.tileScheme.tileInfo), { matcher: l, aggregateMatcher: h } = t.mesh;
    return this._store = o, this._matchers.feature = S(l, o, a, this._resourceManagerProxy), this._matchers.aggregate = M(h, (d) => S(d, o, a, this._resourceManagerProxy)), new B(e, r, o);
  }
  async _onTileData(t, e, r, s) {
    _(s);
    const { type: i, addOrUpdate: a, remove: o } = e, l = e.end, h = !!this._schema.mesh.sortKey;
    if (!a) {
      const n = { type: i, addOrUpdate: null, remove: o, clear: !1, end: l, sort: h };
      return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: t.id, data: n }, s);
    }
    const d = this._processFeatures(t, a, r, s);
    try {
      const n = await d;
      if (b(n)) {
        const c = { type: i, addOrUpdate: null, remove: o, clear: !1, end: l, sort: h };
        return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: t.id, data: c }, s);
      }
      const u = [];
      for (const c of n) {
        let f = !1;
        const m = c.message.bufferIds, g = t.key.id, p = c.message.tileKey;
        if (g !== p && w(m)) {
          if (!this.tileStore.get(p)) {
            this._addBufferData(g, c), u.push(c);
            continue;
          }
          let y = this._bufferIds.get(p);
          y || (y = /* @__PURE__ */ new Set(), this._bufferIds.set(p, y));
          const D = Array.from(m);
          for (const I of D) {
            if (y.has(I)) {
              f = !0;
              break;
            }
            y.add(I);
          }
        }
        f || (this._addBufferData(g, c), u.push(c));
      }
      await P(u.map((c) => {
        const f = t.key.id === c.message.tileKey, m = f ? e.remove : [], g = f && e.end;
        return this._updateTileMesh(i, t, c, m, g, e.clear, s.signal);
      }));
    } catch (n) {
      this._handleError(t, n, s);
    }
  }
  async _updateTileMesh(t, e, r, s, i, a, o) {
    const l = t, h = r.message.tileKey, d = !!this._schema.mesh.sortKey;
    h !== e.key.id && (i = !1);
    const n = M(r, (m) => m.message), u = M(r, (m) => m.transferList) || [], c = { type: l, addOrUpdate: n, remove: s, clear: !1, end: i, sort: d }, f = { transferList: U(u) || [], signal: o };
    return _(f), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: h, data: c }, f);
  }
  async _processFeatures(t, e, r, s) {
    if (b(e) || !e.hasFeatures)
      return null;
    const i = { transform: t.transform, hasZ: !1, hasM: !1 }, a = this._factory, o = { viewingMode: "", scale: t.scale }, l = await this._matchers.feature, h = await this._matchers.aggregate;
    _(s);
    const d = this._getLabelInfos(t, e);
    return await a.analyze(e.getCursor(), this._resourceManagerProxy, l, h, i, o), _(s), this._writeFeatureSet(t, e, i, d, a, r);
  }
  _writeFeatureSet(t, e, r, s, i, a) {
    const o = e.getSize(), l = new Z(t.key.id, { features: o, records: o, metrics: 0 }, this._schema.mesh.matcher.stride, a, !0), h = { viewingMode: "", scale: t.scale }, d = e.getCursor();
    for (; d.next(); )
      try {
        const u = d.getDisplayId(), c = w(s) ? s.get(u) : null;
        i.writeCursor(l, d, r, h, t.level, c, this._resourceManagerProxy);
      } catch {
      }
    const n = t.tileInfoView.tileInfo.isWrappable;
    return l.serialize(n);
  }
  _handleError(t, e, r) {
    if (!T(e)) {
      const s = { tileKey: t.id, error: e.message };
      return this.remoteClient.invoke("tileRenderer.onTileError", s, { signal: r.signal });
    }
  }
  _getLabelingSchemaForScale(t) {
    const e = this._schema.mesh.labels;
    if (b(e))
      return null;
    if (e.type === "subtype") {
      const s = { type: "subtype", classes: {} };
      let i = !1;
      for (const a in e.classes) {
        const o = e.classes[a].filter((l) => x(l, t.scale));
        i = i || !!o.length, s.classes[a] = o;
      }
      return i ? s : null;
    }
    const r = e.classes.filter((s) => x(s, t.scale));
    return r.length ? { type: "simple", classes: r } : null;
  }
  _getLabels(t, e) {
    if (e.type === "subtype") {
      var r;
      const s = this.service.subtypeField, i = A(s, "Expected to find subtype Field"), a = t.readAttribute(i);
      return a == null ? [] : (r = e.classes[a]) != null ? r : [];
    }
    return e.classes;
  }
  _getLabelInfos(t, e) {
    const r = this._getLabelingSchemaForScale(t);
    if (b(r))
      return null;
    const s = /* @__PURE__ */ new Map(), i = e.getCursor();
    for (; i.next(); ) {
      const a = i.getDisplayId(), o = [], l = j(a), h = l && i.readAttribute("cluster_count") !== 1 ? "aggregate" : "feature", d = this._getLabels(i, r);
      for (const n of d) {
        if (n.target !== h)
          continue;
        const u = i.getStorage(), c = l && h === "feature" ? u.getComputedStringAtIndex(i.readAttribute("referenceId"), n.fieldIndex) : u.getComputedStringAtIndex(a, n.fieldIndex);
        if (!c)
          continue;
        const f = O(c.toString()), m = f[0], g = f[1];
        this._store.getMosaicItem(n.symbol, q(m)).then((p) => {
          o[n.index] = { glyphs: p.glyphMosaicItems, rtl: g, index: n.index };
        });
      }
      s.set(a, o);
    }
    return s;
  }
};
v = C([R("geoscene.views.2d.layers.features.processors.SymbolProcessor")], v);
const pe = v;
export {
  pe as default
};

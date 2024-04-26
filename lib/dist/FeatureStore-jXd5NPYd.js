import { Z as u, b0 as _, l as h, b1 as m, e2 as l, dh as a, eV as I, r as o, eW as c, s as g, y, eX as f } from "./index-Ek1MTSEY.js";
import { h as B } from "./PooledRBush-3WmNXB5l.js";
import { e as b } from "./projectionSupport-OcYAvekw.js";
const x = 5e4, n = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
function v(d, e, t) {
  n.minX = e[0], n.minY = e[1], n.maxX = e[2], n.maxY = e[3], d.search(n, t);
}
class p {
  constructor() {
    this._indexInvalid = !1, this._boundsToLoad = [], this._boundsById = /* @__PURE__ */ new Map(), this._idByBounds = /* @__PURE__ */ new Map(), this._index = new B(9, u("geoscene-csp-restrictions") ? (e) => ({ minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] }) : ["[0]", "[1]", "[2]", "[3]"]), this._loadIndex = () => {
      if (this._indexInvalid) {
        const e = new Array(this._idByBounds.size);
        let t = 0;
        this._idByBounds.forEach((s, i) => {
          e[t++] = i;
        }), this._indexInvalid = !1, this._index.clear(), this._index.load(e);
      } else
        this._boundsToLoad.length && (this._index.load(this._boundsToLoad.filter((e) => this._idByBounds.has(e))), this._boundsToLoad.length = 0);
    };
  }
  clear() {
    this._indexInvalid = !1, this._boundsToLoad.length = 0, this._boundsById.clear(), this._idByBounds.clear(), this._index.clear();
  }
  delete(e) {
    const t = this._boundsById.get(e);
    this._boundsById.delete(e), t && (this._idByBounds.delete(t), this._indexInvalid || this._index.remove(t));
  }
  forEachInBounds(e, t) {
    this._loadIndex(), v(this._index, e, (s) => t(this._idByBounds.get(s)));
  }
  get(e) {
    return this._boundsById.get(e);
  }
  has(e) {
    return this._boundsById.has(e);
  }
  invalidateIndex() {
    this._indexInvalid || (this._indexInvalid = !0, this._boundsToLoad.length = 0);
  }
  set(e, t) {
    if (!this._indexInvalid) {
      const s = this._boundsById.get(e);
      s && (this._index.remove(s), this._idByBounds.delete(s));
    }
    this._boundsById.set(e, t), t && (this._idByBounds.set(t, e), this._indexInvalid || (this._boundsToLoad.push(t), this._boundsToLoad.length > x && this._loadIndex()));
  }
}
const M = { getObjectId: (d) => d.objectId, getAttributes: (d) => d.attributes, getAttribute: (d, e) => d.attributes[e], cloneWithGeometry: (d, e) => new _(e, d.attributes, null, d.objectId), getGeometry: (d) => d.geometry, getCentroid: (d, e) => (h(d.centroid) && (d.centroid = b(new m(), d.geometry, e.hasZ, e.hasM)), d.centroid) };
class E {
  constructor(e) {
    this.geometryInfo = e, this._boundsStore = new p(), this._featuresById = /* @__PURE__ */ new Map(), this._markedIds = /* @__PURE__ */ new Set(), this.events = new l(), this.featureAdapter = M;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    if (!this.numFeatures)
      return null;
    const e = a(I);
    return this._featuresById.forEach((t) => {
      const s = this._boundsStore.get(t.objectId);
      s && (e[0] = Math.min(s[0], e[0]), e[1] = Math.min(s[1], e[1]), e[2] = Math.max(s[2], e[2]), e[3] = Math.max(s[3], e[3]));
    }), e;
  }
  get storeStatistics() {
    let e = 0;
    return this._featuresById.forEach((t) => {
      o(t.geometry) && t.geometry.coords && (e += t.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  add(e) {
    this._add(e), this._emitChanged();
  }
  addMany(e) {
    for (const t of e)
      this._add(t);
    this._emitChanged();
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged();
  }
  removeById(e) {
    const t = this._featuresById.get(e);
    return t ? (this._remove(t), this._emitChanged(), t) : null;
  }
  removeManyById(e) {
    this._boundsStore.invalidateIndex();
    for (const t of e) {
      const s = this._featuresById.get(t);
      s && this._remove(s);
    }
    this._emitChanged();
  }
  forEachBounds(e, t, s) {
    for (const i of e) {
      const r = this._boundsStore.get(i.objectId);
      r && t(c(s, r));
    }
  }
  getFeature(e) {
    return this._featuresById.get(e);
  }
  has(e) {
    return this._featuresById.has(e);
  }
  forEach(e) {
    this._featuresById.forEach((t) => e(t));
  }
  forEachInBounds(e, t) {
    this._boundsStore.forEachInBounds(e, (s) => {
      t(this._featuresById.get(s));
    });
  }
  startMarkingUsedFeatures() {
    this._boundsStore.invalidateIndex(), this._markedIds.clear();
  }
  sweep() {
    let e = !1;
    this._featuresById.forEach((t, s) => {
      this._markedIds.has(s) || (e = !0, this._remove(t));
    }), this._markedIds.clear(), e && this._emitChanged();
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(e) {
    if (!e)
      return;
    const t = e.objectId;
    if (t == null)
      return void g.getLogger("geoscene.layers.graphics.data.FeatureStore").error(new y("featurestore:invalid-feature", "feature id is missing", { feature: e }));
    const s = this._featuresById.get(t);
    let i;
    if (this._markedIds.add(t), s ? (e.displayId = s.displayId, i = this._boundsStore.get(t), this._boundsStore.delete(t)) : o(this.onFeatureAdd) && this.onFeatureAdd(e), h(e.geometry) || !e.geometry.coords || !e.geometry.coords.length)
      return this._boundsStore.set(t, null), void this._featuresById.set(t, e);
    i = f(o(i) ? i : a(), e.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), o(i) && this._boundsStore.set(t, i), this._featuresById.set(t, e);
  }
  _remove(e) {
    return o(this.onFeatureRemove) && this.onFeatureRemove(e), this._markedIds.delete(e.objectId), this._boundsStore.delete(e.objectId), this._featuresById.delete(e.objectId), e;
  }
}
export {
  p as e,
  E as m
};

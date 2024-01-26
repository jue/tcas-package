import { ci as I, bg as A, hZ as y, a as n, b as s, az as x, fk as j, c as d, b3 as T, hy as N, V as v, v as P, l as w, f9 as O, u as L, dz as c, h_ as Z, cZ as C, h$ as H, i0 as k, cm as M, cp as V, ax as B } from "./index-HxXrdrYt.js";
import { c as D } from "./Analysis-5JPJZ8PW.js";
import { g as f } from "./persistable-Ne0w3OoP.js";
import "vue";
import "./multiOriginJSONSupportUtils-vbwzQTfc.js";
import "./resourceExtension-oz9U1aiy.js";
function R(e, t) {
  return m(e) === m(t);
}
function m(e) {
  if (e == null)
    return null;
  const t = e.layer != null ? e.layer.id : "";
  let i = null;
  return i = e.objectId != null ? e.objectId : e.layer != null && "objectIdField" in e.layer && e.layer.objectIdField != null && e.attributes != null ? e.attributes[e.layer.objectIdField] : e.uid, i == null ? null : `o-${t}-${i}`;
}
const z = { json: { write: { writer: G, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: J } } } };
function G(e, t) {
  var i;
  e != null && ((i = e.layer) == null ? void 0 : i.objectIdField) != null && e.attributes != null && (t.feature = { layerId: e.layer.id, objectId: e.attributes[e.layer.objectIdField] });
}
function J(e) {
  if (e.layerId != null && e.objectId != null)
    return { uid: null, layer: { id: e.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e.objectId } };
}
let o = class extends I(A(T)) {
  constructor(t) {
    super(t), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(t) {
    return y(this.position, t.position) && y(this.elevationInfo, t.elevationInfo) && R(this.feature, t.feature);
  }
};
n([s({ type: x, json: { write: { isRequired: !0 } } })], o.prototype, "position", void 0), n([s({ type: j }), f()], o.prototype, "elevationInfo", void 0), n([s(z)], o.prototype, "feature", void 0), o = n([d("geoscene.analysis.LineOfSightAnalysisObserver")], o);
const E = o;
let a = class extends I(N) {
  constructor(e) {
    super(e), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(e) {
    return y(this.position, e.position) && y(this.elevationInfo, e.elevationInfo) && R(this.feature, e.feature);
  }
};
n([s({ type: x }), f()], a.prototype, "position", void 0), n([s({ type: j }), f()], a.prototype, "elevationInfo", void 0), n([s(z)], a.prototype, "feature", void 0), a = n([d("geoscene.analysis.LineOfSightAnalysisTarget")], a);
const F = a;
function K(e) {
  return e ? W : X;
}
function Q(e, t) {
  return t != null && t.mode ? t.mode : K(e).mode;
}
function U(e, t) {
  return Q(e != null && e.hasZ, t);
}
const W = { mode: "absolute-height", offset: 0 }, X = { mode: "on-the-ground", offset: null }, g = v.ofType(F);
let l = class extends D {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(w(() => this._computeExtent(), (e) => {
      e != null && e.pending != null || this._set("extent", e != null ? e.extent : null);
    }, O));
  }
  get targets() {
    return this._get("targets") || new g();
  }
  set targets(e) {
    this._set("targets", L(e, this.targets, g));
  }
  get spatialReference() {
    return this.observer != null && this.observer.position != null ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [c(this.observer, (e) => e.position)];
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    return e != null ? e.pending : Promise.resolve();
  }
  _computeExtent() {
    const e = this.spatialReference;
    if (this.observer == null || this.observer.position == null || e == null)
      return null;
    const t = (u) => U(u.position, u.elevationInfo) === "absolute-height", i = this.observer.position, b = Z(i.x, i.y, i.z, i.x, i.y, i.z);
    for (const u of this.targets)
      if (u.position != null) {
        const p = C(u.position, e);
        if (p.pending != null)
          return { pending: p.pending, extent: null };
        if (p.geometry != null) {
          const { x: S, y: _, z: q } = p.geometry;
          H(b, [S, _, q]);
        }
      }
    const h = k(b, e);
    return t(this.observer) && this.targets.every(t) || (h.zmin = void 0, h.zmax = void 0), { pending: null, extent: h };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
n([s({ type: ["line-of-sight"] })], l.prototype, "type", void 0), n([s({ type: E, json: { read: !0, write: !0 } })], l.prototype, "observer", void 0), n([s({ cast: P, type: g, nonNullable: !0, json: { read: !0, write: !0 } })], l.prototype, "targets", null), n([s({ value: null, readOnly: !0 })], l.prototype, "extent", void 0), n([s({ readOnly: !0 })], l.prototype, "spatialReference", null), n([s({ readOnly: !0 })], l.prototype, "requiredPropertiesForEditing", null), l = n([d("geoscene.analysis.LineOfSightAnalysis")], l);
const $ = l, Y = v.ofType(F);
let r = class extends M(V(B)) {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new $(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(w(() => this.analysis, (e, t) => {
      t != null && t.parent === this && (t.parent = null), e != null && (e.parent = this);
    }, O));
  }
  async load() {
    return this.analysis != null && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return c(this.analysis, (e) => e.observer);
  }
  set observer(e) {
    c(this.analysis, (t) => t.observer = e);
  }
  get targets() {
    return this.analysis != null ? this.analysis.targets : new v();
  }
  set targets(e) {
    var t;
    L(e, (t = this.analysis) == null ? void 0 : t.targets);
  }
  get fullExtent() {
    return this.analysis != null ? this.analysis.extent : null;
  }
  get spatialReference() {
    return this.analysis != null ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e) {
    this.analysis === e && (this.analysis = new $());
  }
};
n([s({ json: { read: !1 }, readOnly: !0 })], r.prototype, "type", void 0), n([s({ type: ["LineOfSightLayer"] })], r.prototype, "operationalLayerType", void 0), n([s({ type: E, json: { read: !0, write: { isRequired: !0, ignoreOrigin: !0 } } })], r.prototype, "observer", null), n([s({ type: Y, json: { read: !0, write: { ignoreOrigin: !0 } } })], r.prototype, "targets", null), n([s({ nonNullable: !0, json: { read: !1, write: !1 } })], r.prototype, "analysis", void 0), n([s({ readOnly: !0 })], r.prototype, "fullExtent", null), n([s({ readOnly: !0 })], r.prototype, "spatialReference", null), n([s({ readOnly: !0, json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], r.prototype, "opacity", void 0), n([s({ type: ["show", "hide"] })], r.prototype, "listMode", void 0), r = n([d("geoscene.layers.LineOfSightLayer")], r);
const oe = r;
export {
  oe as default
};

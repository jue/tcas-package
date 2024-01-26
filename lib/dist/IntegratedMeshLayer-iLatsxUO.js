import { a as t, b as a, aA as S, cU as O, c as f, bk as _, aM as N, d1 as x, fS as b, aT as L, ci as I, V as M, L as R, ae as A, cN as j, cm as J, cn as U, co as K, cp as V, cO as $, fT as D, w as P, ai as E, cq as G, H as c, bl as k, eU as q, ax as z, dN as C } from "./index-HxXrdrYt.js";
import { g as m } from "./persistable-Ne0w3OoP.js";
import { N as F, K as v } from "./SceneService-dmDeJnyW.js";
import { s as H, l as B, u as Q, m as W } from "./I3SLayerDefinitions-JDqIuBpd.js";
import "vue";
import "./multiOriginJSONSupportUtils-vbwzQTfc.js";
import "./resourceExtension-oz9U1aiy.js";
import "./originUtils-0olwExvB.js";
import "./resourceUtils-V0YeISic.js";
var h;
let n = h = class extends _ {
  constructor(e) {
    super(e), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e, i, o, s) {
    if (s.layer && s.layer.spatialReference && !s.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!N(e.spatialReference, s.layer.spatialReference))
        return void (s && s.messages && s.messages.push(new x("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s.layer.spatialReference, context: s })));
      const l = new S();
      b(e, l, s.layer.spatialReference), i[o] = l.toJSON(s);
    } else
      i[o] = e.toJSON(s);
    delete i[o].spatialReference;
  }
  clone() {
    return new h({ geometry: L(this.geometry), type: this.type });
  }
};
t([a({ type: S }), m()], n.prototype, "geometry", void 0), t([O(["web-scene", "portal-item"], "geometry")], n.prototype, "writeGeometry", null), t([a({ type: ["clip", "mask", "replace"], nonNullable: !0 }), m()], n.prototype, "type", void 0), n = h = t([f("geoscene.layers.support.SceneModification")], n);
const d = n;
var p;
let y = p = class extends I(M.ofType(d)) {
  constructor(e) {
    super(e), this.url = null;
  }
  clone() {
    return new p({ url: this.url, items: this.items.map((e) => e.clone()) });
  }
  toJSON(e) {
    return this.toArray().map((i) => i.toJSON(e)).filter((i) => !!i.geometry);
  }
  static fromJSON(e, i) {
    const o = new p();
    for (const s of e)
      o.add(d.fromJSON(s, i));
    return o;
  }
  static async fromUrl(e, i, o) {
    const s = { url: R(e), origin: "service" }, l = await A(e, { responseType: "json", signal: o == null ? void 0 : o.signal }), T = i.toJSON(), u = [];
    for (const g of l.data)
      u.push(d.fromJSON({ ...g, geometry: { ...g.geometry, spatialReference: T } }, s));
    return new p({ url: e, items: u });
  }
};
t([a({ type: String })], y.prototype, "url", void 0), y = p = t([f("geoscene.layers.support.SceneModifications")], y);
const w = y;
let r = class extends F(j(J(U(K(V($(z))))))) {
  constructor(...e) {
    super(...e), this._handles = new D(), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.elevationInfo = null, this.path = null;
  }
  destroy() {
    this._handles.destroy();
  }
  initialize() {
    this._handles.add(P(() => this.modifications, "after-changes", () => this.modifications = this.modifications, C));
  }
  normalizeCtorArgs(e, i) {
    return typeof e == "string" ? { url: e, ...i } : e;
  }
  readModifications(e, i, o) {
    this._modificationsSource = { url: E(e, o), context: o };
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const i = e == null ? void 0 : e.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (o) {
      G(o);
    }
    if (await this._fetchService(i), this._modificationsSource != null) {
      const o = await w.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", o, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, i);
  }
  beforeSave() {
    if (this._modificationsSource != null)
      return this.load().then(() => {
      }, () => {
      });
  }
  async saveAs(e, i) {
    return this._debouncedSaveOperations(v.SAVE_AS, { ...i, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(v.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "IntegratedMesh")
      throw new c("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new c("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new c("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
};
t([a({ type: String, readOnly: !0 })], r.prototype, "geometryType", void 0), t([a({ type: ["show", "hide"] })], r.prototype, "listMode", void 0), t([a({ type: ["IntegratedMeshLayer"] })], r.prototype, "operationalLayerType", void 0), t([a({ json: { read: !1 }, readOnly: !0 })], r.prototype, "type", void 0), t([a({ type: H, readOnly: !0 })], r.prototype, "nodePages", void 0), t([a({ type: [B], readOnly: !0 })], r.prototype, "materialDefinitions", void 0), t([a({ type: [Q], readOnly: !0 })], r.prototype, "textureSetDefinitions", void 0), t([a({ type: [W], readOnly: !0 })], r.prototype, "geometryDefinitions", void 0), t([a({ readOnly: !0 })], r.prototype, "serviceUpdateTimeStamp", void 0), t([a({ type: w }), m({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], r.prototype, "modifications", void 0), t([k(["web-scene", "portal-item"], "modifications")], r.prototype, "readModifications", null), t([a(q)], r.prototype, "elevationInfo", void 0), t([a({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], r.prototype, "path", void 0), r = t([f("geoscene.layers.IntegratedMeshLayer")], r);
const ae = r;
export {
  ae as default
};

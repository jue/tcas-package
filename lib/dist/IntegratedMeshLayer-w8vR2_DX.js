import { aI as U, r as m, gs as E, gt as G, dK as F, gu as N, gv as k, bU as B, gw as C, l as I, gx as q, gy as A, f1 as H, aG as Q, aH as R, gz as W, e as p, d as y, ac as L, bD as X, a as T, aD as Y, ah as Z, b$ as ee, gA as te, S as ie, e3 as oe, j as re, R as se, C as ne, bR as ae, bv as pe, bw as le, bu as ce, bz as ye, bS as de, u as ue, K as me, be as he, bG as fe, y as w, aE as ge, dR as ve, bE as we, gB as Se } from "./index-Ek1MTSEY.js";
import { i as $e } from "./originUtils-coUxWAIW.js";
import { A as be, K as j } from "./SceneService-yc-BGZl3.js";
import { s as Oe, l as xe, u as Ie, m as Re } from "./I3SLayerDefinitions-3sQN3QEG.js";
import "vue";
import "./resourceUtils-OFVXASHI.js";
function $(e) {
  return _[Te(e)] || Ne;
}
function Te(e) {
  return e instanceof Blob ? e.type : _e(e.url);
}
function _e(e) {
  const t = U(e);
  return b[t] || M;
}
const _ = {}, M = "text/plain", Ne = _[M], b = { png: "image/png", jpeg: "image/jpeg", jpg: "image/jpg", bmp: "image/bmp", gif: "image/gif", json: "application/json", txt: "text/plain", xml: "application/xml", svg: "image/svg+xml", zip: "application/zip", pbf: "application/vnd.mapbox-vector-tile", gz: "application/gzip" };
for (const e in b)
  _[b[e]] = e;
function O(e) {
  const t = m(e) && e.origins ? e.origins : [void 0];
  return (i, o) => {
    const s = je(e, i, o);
    for (const a of t) {
      const n = E(i, a, o);
      for (const r in s)
        n[r] = s[r];
    }
  };
}
function je(e, t, i) {
  if (m(e) && e.type === "resource")
    return Ue(e, t, i);
  switch (m(e) && e.type ? e.type : "other") {
    case "other":
      return { read: !0, write: !0 };
    case "url": {
      const { read: o, write: s } = W;
      return { read: o, write: s };
    }
  }
}
function Ue(e, t, i) {
  const o = G(t, i);
  return { type: String, read: (s, a, n) => {
    const r = F(s, a, n);
    return o.type === String ? r : typeof o.type == "function" ? new o.type({ url: r }) : void 0;
  }, write: { writer(s, a, n, r) {
    if (!r || !r.resources)
      return typeof s == "string" ? void (a[n] = N(s, r)) : void (a[n] = s.write({}, r));
    const d = Ke(s), c = d ? N(d, { ...r, verifyItemRelativeUrls: r && r.verifyItemRelativeUrls ? { writtenUrls: r.verifyItemRelativeUrls.writtenUrls, rootPath: null } : null }, k.NO) : null, h = o.type !== String && (!$e(this) || r && r.origin && this.originIdOf(i) > B(r.origin));
    r && r.portalItem && m(c) && !C(c) ? h ? Ae(this, i, s, c, a, n, r, e) : Le(c, a, n, r) : r && r.portalItem && (I(c) || m(q(c)) || A(c) || h) ? K(this, i, s, c, a, n, r, e) : a[n] = c;
  } } };
}
function K(e, t, i, o, s, a, n, r) {
  const d = H(), c = P(i, o, n), h = Q(R(r, "prefix"), d), z = `${h}.${$(c)}`, g = n.portalItem.resourceFromPath(z);
  A(o) && n.resources.pendingOperations.push(Me(o).then((V) => {
    g.path = `${h}.${$(V)}`, s[a] = g.itemRelativeUrl;
  }).catch(() => {
  })), J(e, t, g, c, n.resources.toAdd), s[a] = g.itemRelativeUrl;
}
function Ae(e, t, i, o, s, a, n, r) {
  const d = n.portalItem.resourceFromPath(o), c = P(i, o, n);
  $(c) === U(d.path) ? (J(e, t, d, c, n.resources.toUpdate), s[a] = o) : K(e, t, i, o, s, a, n, r);
}
function Le(e, t, i, o) {
  o.resources.toKeep.push({ resource: o.portalItem.resourceFromPath(e) }), t[i] = e;
}
function J(e, t, i, o, s) {
  s.push({ resource: i, content: o, finish: (a) => {
    Je(e, t, a);
  } });
}
function P(e, t, i) {
  return typeof e == "string" ? { url: t } : new Blob([JSON.stringify(e.toJSON(i))], { type: "application/json" });
}
async function Me(e) {
  const t = (await import("./index-Ek1MTSEY.js").then((o) => o.kD)).default, { data: i } = await t(e, { responseType: "blob" });
  return i;
}
function Ke(e) {
  return I(e) ? null : typeof e == "string" ? e : e.url;
}
function Je(e, t, i) {
  typeof e[t] == "string" ? e[t] = i.url : e[t].url = i.url;
}
var x;
let u = x = class extends Y {
  constructor(e) {
    super(e), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e, t, i, o) {
    if (o.layer && o.layer.spatialReference && !o.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!Z(e.spatialReference, o.layer.spatialReference))
        return void (o && o.messages && o.messages.push(new ee("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: o.layer.spatialReference, context: o })));
      const s = new L();
      te(e, s, o.layer.spatialReference), t[i] = s.toJSON(o);
    } else
      t[i] = e.toJSON(o);
    delete t[i].spatialReference;
  }
  clone() {
    return new x({ geometry: ie(this.geometry), type: this.type });
  }
};
p([y({ type: L }), O()], u.prototype, "geometry", void 0), p([X(["web-scene", "portal-item"], "geometry")], u.prototype, "writeGeometry", null), p([y({ type: ["clip", "mask", "replace"], nonNullable: !0 }), O()], u.prototype, "type", void 0), u = x = p([T("geoscene.layers.support.SceneModification")], u);
const S = u;
var f;
let v = f = class extends oe(re.ofType(S)) {
  constructor(e) {
    super(e), this.url = null;
  }
  toJSON(e) {
    return this.toArray().map((t) => t.toJSON(e)).filter((t) => !!t.geometry);
  }
  clone() {
    return new f({ url: this.url, items: this.items.map((e) => e.clone()) });
  }
  _readModifications(e, t) {
    for (const i of e)
      this.add(S.fromJSON(i, t));
  }
  static fromJSON(e, t) {
    const i = new f();
    return i._readModifications(e, t), i;
  }
  static async fromUrl(e, t, i) {
    const o = { url: se(e), origin: "service" }, s = await ne(e, { responseType: "json", signal: R(i, "signal") }), a = t.toJSON(), n = [];
    for (const r of s.data)
      n.push(S.fromJSON({ ...r, geometry: { ...r.geometry, spatialReference: a } }, o));
    return new f({ url: e, items: n });
  }
};
p([y({ type: String })], v.prototype, "url", void 0), v = f = p([T("geoscene.layers.support.SceneModifications")], v);
const D = v;
let l = class extends be(ae(pe(le(ce(ye(de(we))))))) {
  constructor(...e) {
    super(...e), this.handles = new ue(), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.elevationInfo = null, this.path = null;
  }
  destroy() {
    this.handles.destroy();
  }
  initialize() {
    this.handles.add(me(() => this.modifications, "after-changes", () => this.modifications = this.modifications, Se));
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  readModifications(e, t, i) {
    this._modificationsSource = { url: he(e, i), context: i };
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const t = R(e, "signal");
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (i) {
      fe(i);
    }
    if (await this._fetchService(t), m(this._modificationsSource)) {
      const i = await D.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", i, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t);
  }
  beforeSave() {
    if (!I(this._modificationsSource))
      return this.load().then(() => {
      }, () => {
      });
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(j.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(j.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "IntegratedMesh")
      throw new w("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new w("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new w("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
};
p([y({ type: String, readOnly: !0 })], l.prototype, "geometryType", void 0), p([y({ type: ["show", "hide"] })], l.prototype, "listMode", void 0), p([y({ type: ["IntegratedMeshLayer"] })], l.prototype, "operationalLayerType", void 0), p([y({ json: { read: !1 }, readOnly: !0 })], l.prototype, "type", void 0), p([y({ type: Oe, readOnly: !0 })], l.prototype, "nodePages", void 0), p([y({ type: [xe], readOnly: !0 })], l.prototype, "materialDefinitions", void 0), p([y({ type: [Ie], readOnly: !0 })], l.prototype, "textureSetDefinitions", void 0), p([y({ type: [Re], readOnly: !0 })], l.prototype, "geometryDefinitions", void 0), p([y({ readOnly: !0 })], l.prototype, "serviceUpdateTimeStamp", void 0), p([y({ type: D }), O({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], l.prototype, "modifications", void 0), p([ge(["web-scene", "portal-item"], "modifications")], l.prototype, "readModifications", null), p([y(ve)], l.prototype, "elevationInfo", void 0), p([y({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], l.prototype, "path", void 0), l = p([T("geoscene.layers.IntegratedMeshLayer")], l);
const Fe = l;
export {
  Fe as default
};

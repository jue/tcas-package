import { r as _, C as f, y as u, f1 as $, de as L, bc as M, ev as K, s as V, e as c, d, bI as k, m as I, aE as m, M as x, eJ as q, bK as F, bD as C, a as z, X as J, f2 as D, L as B, f3 as Z, f4 as G, f5 as H, R as A, c1 as X, aa as E } from "./index-Ek1MTSEY.js";
import { r as N } from "./originUtils-coUxWAIW.js";
import { getSiblingOfSameTypeI as Q } from "./resourceUtils-OFVXASHI.js";
async function W(i, s, e, t, a, r) {
  let o = null;
  if (_(e)) {
    const n = `${i}/nodepages/`, h = n + Math.floor(e.rootIndex / e.nodesPerPage);
    try {
      return { type: "page", rootPage: (await f(h, { query: { f: "json", token: t }, responseType: "json", signal: r })).data, rootIndex: e.rootIndex, pageSize: e.nodesPerPage, lodMetric: e.lodSelectionMetricType, urlPrefix: n };
    } catch (g) {
      _(a) && a.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", h, g), o = g;
    }
  }
  if (!s)
    return null;
  const l = `${i}/nodes/`, p = l + (s && s.split("/").pop());
  try {
    return { type: "node", rootNode: (await f(p, { query: { f: "json", token: t }, responseType: "json", signal: r })).data, urlPrefix: l };
  } catch (n) {
    throw new u("sceneservice:root-node-missing", "Root node missing.", { pageError: o, nodeError: n, url: p });
  }
}
async function T(i, s, e) {
  if (!s || !s.resources)
    return;
  const t = s.portalItem === i.portalItem ? new Set(i.paths) : /* @__PURE__ */ new Set();
  i.paths.length = 0, i.portalItem = s.portalItem;
  const a = new Set(s.resources.toKeep.map((n) => n.resource.path)), r = /* @__PURE__ */ new Set(), o = [];
  a.forEach((n) => {
    t.delete(n), i.paths.push(n);
  });
  for (const n of s.resources.toUpdate)
    if (t.delete(n.resource.path), a.has(n.resource.path) || r.has(n.resource.path)) {
      const { resource: h, content: g, finish: P, error: U } = n, R = Q(h, $());
      i.paths.push(R.path), o.push(j({ resource: R, content: g, finish: P, error: U }, e));
    } else
      i.paths.push(n.resource.path), o.push(Y(n, e)), r.add(n.resource.path);
  for (const n of s.resources.toAdd)
    o.push(j(n, e)), i.paths.push(n.resource.path);
  if (t.forEach((n) => {
    const h = s.portalItem.resourceFromPath(n);
    o.push(h.portalItem.removeResource(h).catch(() => {
    }));
  }), o.length === 0)
    return;
  const l = await L(o);
  M(e);
  const p = l.filter((n) => "error" in n).map((n) => n.error);
  if (p.length > 0)
    throw new u("save:resources", "Failed to save one or more resources", { errors: p });
}
async function j(i, s) {
  const e = await K(i.resource.portalItem.addResource(i.resource, i.content, s));
  if (e.ok !== !0)
    throw i.error && i.error(e.error), e.error;
  i.finish && i.finish(i.resource);
}
async function Y(i, s) {
  const e = await K(i.resource.update(i.content, s));
  if (e.ok !== !0)
    throw i.error(e.error), e.error;
  i.finish(i.resource);
}
const y = V.getLogger("geoscene.layers.mixins.SceneService"), ae = (i) => {
  let s = class extends i {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = J(async (e, t, a) => {
        switch (e) {
          case S.SAVE:
            return this._save(t);
          case S.SAVE_AS:
            return this._saveAs(a, t);
        }
      });
    }
    readSpatialReference(e, t) {
      return this._readSpatialReference(t);
    }
    _readSpatialReference(e) {
      if (e.spatialReference != null)
        return I.fromJSON(e.spatialReference);
      {
        const t = e.store, a = t.indexCRS || t.geographicCRS, r = a && parseInt(a.substring(a.lastIndexOf("/") + 1, a.length), 10);
        return r != null ? new I(r) : null;
      }
    }
    readFullExtent(e, t, a) {
      if (e != null && typeof e == "object") {
        const l = e.spatialReference == null ? { ...e, spatialReference: this._readSpatialReference(t) } : e;
        return x.fromJSON(l, a);
      }
      const r = t.store, o = this._readSpatialReference(t);
      return o == null || r == null || r.extent == null || !Array.isArray(r.extent) || r.extent.some((l) => l < b) ? null : new x({ xmin: r.extent[0], ymin: r.extent[1], xmax: r.extent[2], ymax: r.extent[3], spatialReference: o });
    }
    parseVersionString(e) {
      const t = { major: Number.NaN, minor: Number.NaN, versionString: e }, a = e.split(".");
      return a.length >= 2 && (t.major = parseInt(a[0], 10), t.minor = parseInt(a[1], 10)), t;
    }
    readVersion(e, t) {
      const a = t.store, r = a.version != null ? a.version.toString() : "";
      return this.parseVersionString(r);
    }
    readTitlePortalItem(e) {
      return this.sublayerTitleMode !== "item-title" ? void 0 : e;
    }
    readTitleService(e, t) {
      const a = this.portalItem && this.portalItem.title;
      if (this.sublayerTitleMode === "item-title")
        return D(this.url, t.name);
      let r = t.name;
      if (!r && this.url) {
        const o = B(this.url);
        _(o) && (r = o.title);
      }
      return this.sublayerTitleMode === "item-title-and-service-name" && a && (r = a + " - " + r), Z(r);
    }
    set url(e) {
      const t = G({ layer: this, url: e, nonStandardUrlAllowed: !1, logger: y });
      this._set("url", t.url), t.layerId != null && this._set("layerId", t.layerId);
    }
    writeUrl(e, t, a, r) {
      H(this, e, "layers", t, r);
    }
    get parsedUrl() {
      const e = this._get("url");
      if (!e)
        return null;
      const t = A(e);
      return this.layerId != null && (t.path = `${t.path}/layers/${this.layerId}`), t;
    }
    async _fetchIndexAndUpdateExtent(e, t) {
      this.indexInfo = W(this.parsedUrl.path, this.rootNode, e, this.apiKey, y, t), this.fullExtent == null || this.fullExtent.hasZ || this._updateExtent(await this.indexInfo);
    }
    _updateExtent(e) {
      if ((e == null ? void 0 : e.type) === "page") {
        var t, a;
        const o = e.rootIndex % e.pageSize, l = (t = e.rootPage) == null || (a = t.nodes) == null ? void 0 : a[o];
        if (l == null || l.obb == null || l.obb.center == null || l.obb.halfSize == null)
          throw new u("sceneservice:invalid-node-page", "Invalid node page.");
        if (l.obb.center[0] < b || this.fullExtent == null || this.fullExtent.hasZ)
          return;
        const p = l.obb.halfSize, n = l.obb.center[2], h = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
        this.fullExtent.zmin = n - h, this.fullExtent.zmax = n + h;
      } else if ((e == null ? void 0 : e.type) === "node") {
        var r;
        const o = (r = e.rootNode) == null ? void 0 : r.mbs;
        if (!Array.isArray(o) || o.length !== 4 || o[0] < b)
          return;
        const l = o[2], p = o[3];
        this.fullExtent.zmin = l - p, this.fullExtent.zmax = l + p;
      }
    }
    async _fetchService(e) {
      if (this.url == null)
        throw new u("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
      if (this.layerId == null && /SceneServer\/*$/i.test(this.url)) {
        const t = await this._fetchFirstLayerId(e);
        t != null && (this.layerId = t);
      }
      return this._fetchServiceLayer(e);
    }
    async _fetchFirstLayerId(e) {
      const t = await f(this.url, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e });
      if (t.data && Array.isArray(t.data.layers) && t.data.layers.length > 0)
        return t.data.layers[0].id;
    }
    async _fetchServiceLayer(e) {
      const t = await f(this.parsedUrl.path, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e });
      t.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
      let a = !1;
      if (t.data.layerType && t.data.layerType === "Voxel" && (a = !0), a)
        return this._fetchVoxelServiceLayer();
      const r = t.data;
      this.read(r, { origin: "service", url: this.parsedUrl }), this.validateLayer(r);
    }
    async _fetchVoxelServiceLayer(e) {
      const t = (await f(this.parsedUrl.path + "/layer", { query: { f: "json", token: this.apiKey }, responseType: "json", signal: e })).data;
      this.read(t, { origin: "service", url: this.parsedUrl }), this.validateLayer(t);
    }
    async _ensureLoadBeforeSave() {
      await this.load(), "beforeSave" in this && typeof this.beforeSave == "function" && await this.beforeSave();
    }
    validateLayer(e) {
    }
    _updateTypeKeywords(e, t, a) {
      e.typeKeywords || (e.typeKeywords = []);
      const r = t.getTypeKeywords();
      for (const o of r)
        e.typeKeywords.push(o);
      e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((o, l, p) => p.indexOf(o) === l), a === v.newItem && (e.typeKeywords = e.typeKeywords.filter((o) => o !== "Hosted Service")));
    }
    async _saveAs(e, t) {
      const a = { ...O, ...t };
      let r = X.from(e);
      r || (y.error("_saveAs(): requires a portal item parameter"), await Promise.reject(new u("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to"))), r.id && (r = r.clone(), r.id = null);
      const o = r.portal || E.getDefault();
      await this._ensureLoadBeforeSave(), r.type = w, r.portal = o;
      const l = { origin: "portal-item", url: null, messages: [], portal: o, portalItem: r, writtenProperties: [], blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } }, p = { layers: [this.write({}, l)] };
      return await Promise.all(l.resources.pendingOperations), await this._validateAgainstJSONSchema(p, l, a), r.url = this.url, r.title || (r.title = this.title), this._updateTypeKeywords(r, a, v.newItem), await o._signIn(), await o.user.addItem({ item: r, folder: a && a.folder, data: p }), await T(this.resourceReferences, l, null), this.portalItem = r, N(l), l.portalItem = r, r;
    }
    async _save(e) {
      const t = { ...O, ...e };
      this.portalItem || (y.error("_save(): requires the .portalItem property to be set"), await Promise.reject(new u("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService"))), this.portalItem.type !== w && (y.error("_save(): Non-matching portal item type. Got " + this.portalItem.type + ", expected " + w), await Promise.reject(new u("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${w}"`))), await this._ensureLoadBeforeSave();
      const a = { origin: "portal-item", url: this.portalItem.itemUrl && A(this.portalItem.itemUrl), messages: [], portal: this.portalItem.portal || E.getDefault(), portalItem: this.portalItem, writtenProperties: [], blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } }, r = { layers: [this.write({}, a)] };
      return await Promise.all(a.resources.pendingOperations), await this._validateAgainstJSONSchema(r, a, t), this.portalItem.url = this.url, this.portalItem.title || (this.portalItem.title = this.title), this._updateTypeKeywords(this.portalItem, t, v.existingItem), await this.portalItem.update({ data: r }), await T(this.resourceReferences, a, null), N(a), this.portalItem;
    }
    async _validateAgainstJSONSchema(e, t, a) {
      let r = t.messages.filter((o) => o.type === "error").map((o) => new u(o.name, o.message, o.details));
      if (a && a.validationOptions.ignoreUnsupported && (r = r.filter((o) => o.name !== "layer:unsupported" && o.name !== "symbol:unsupported" && o.name !== "symbol-layer:unsupported" && o.name !== "property:unsupported" && o.name !== "url:unsupported" && o.name !== "scenemodification:unsupported")), a.validationOptions.enabled || ee) {
        const o = (await import("./schemaValidator-19mnoH8o.js")).validate(e, a.portalItemLayerType);
        if (o.length > 0) {
          const l = `Layer item did not validate:
${o.join(`
`)}`;
          if (y.error(`_validateAgainstJSONSchema(): ${l}`), a.validationOptions.failPolicy === "throw") {
            const p = o.map((n) => new u("sceneservice:schema-validation", n)).concat(r);
            throw new u("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { combined: p });
          }
        }
      }
      if (r.length > 0)
        throw new u("sceneservice:save", "Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: r });
    }
  };
  return c([d(k)], s.prototype, "id", void 0), c([d({ type: I })], s.prototype, "spatialReference", void 0), c([m("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], s.prototype, "readSpatialReference", null), c([d({ type: x })], s.prototype, "fullExtent", void 0), c([m("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], s.prototype, "readFullExtent", null), c([d({ readOnly: !0, type: q })], s.prototype, "heightModelInfo", void 0), c([d({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: { source: "minScale" }, write: !1 } } } })], s.prototype, "minScale", void 0), c([d({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: { source: "maxScale" }, write: !1 } } } })], s.prototype, "maxScale", void 0), c([d({ readOnly: !0 })], s.prototype, "version", void 0), c([m("version", ["store.version"])], s.prototype, "readVersion", null), c([d({ type: String, json: { read: { source: "copyrightText" } } })], s.prototype, "copyright", void 0), c([d({ type: String, json: { read: !1 } })], s.prototype, "sublayerTitleMode", void 0), c([d({ type: String })], s.prototype, "title", void 0), c([m("portal-item", "title")], s.prototype, "readTitlePortalItem", null), c([m("service", "title", ["name"])], s.prototype, "readTitleService", null), c([d({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: !0, ignoreOrigin: !0 }, read: !1 } } } })], s.prototype, "layerId", void 0), c([d(F)], s.prototype, "url", null), c([C("url")], s.prototype, "writeUrl", null), c([d()], s.prototype, "parsedUrl", null), c([d({ readOnly: !0 })], s.prototype, "store", void 0), c([d({ type: String, readOnly: !0, json: { read: { source: "store.rootNode" } } })], s.prototype, "rootNode", void 0), s = c([z("geoscene.layers.mixins.SceneService")], s), s;
}, b = -1e38, ee = !1;
var v;
(function(i) {
  i[i.existingItem = 0] = "existingItem", i[i.newItem = 1] = "newItem";
})(v || (v = {}));
const w = "Scene Service", O = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: !0, ignoreUnsupported: !1, failPolicy: "throw" } };
var S;
(function(i) {
  i[i.SAVE = 0] = "SAVE", i[i.SAVE_AS = 1] = "SAVE_AS";
})(S || (S = {}));
export {
  ae as A,
  S as K,
  W as n
};

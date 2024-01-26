import { e as r, d as o, a as y, aD as q, bW as S, bs as v, S as u, s as B, bR as E, bv as N, bw as _, bu as A, bz as L, bS as O, bY as m, a3 as V, r as D, bG as G, dQ as K, hD as x, y as l, aG as k, C as M, dX as z, B as U, aE as J, dR as Q, bJ as W, bD as X, e1 as Y, bE as H } from "./index-j1oaLRcp.js";
import { A as Z, K as C } from "./SceneService-PkmRTvGa.js";
import { c as P, d as ee, b as te, a as re } from "./PointCloudUniqueValueRenderer-HACsLSEK.js";
import "vue";
import "./originUtils-coUxWAIW.js";
import "./resourceUtils-dtS02Sh0.js";
let c = class extends q {
  constructor(e) {
    super(e), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
r([o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "field", void 0), r([o({ readOnly: !0, nonNullable: !0, json: { read: !1 } })], c.prototype, "type", void 0), c = r([y("geoscene.layers.pointCloudFilters.PointCloudFilter")], c);
const g = c;
var b;
let d = b = class extends g {
  constructor(e) {
    super(e), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new b({ field: this.field, requiredClearBits: u(this.requiredClearBits), requiredSetBits: u(this.requiredSetBits) });
  }
};
r([o({ type: [S], json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !0, isRequired: !this.requiredSetBits };
} } } })], d.prototype, "requiredClearBits", void 0), r([o({ type: [S], json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !0, isRequired: !this.requiredClearBits };
} } } })], d.prototype, "requiredSetBits", void 0), r([v({ pointCloudBitfieldFilter: "bitfield" })], d.prototype, "type", void 0), d = b = r([y("geoscene.layers.pointCloudFilters.PointCloudBitfieldFilter")], d);
const oe = d;
var w;
let f = w = class extends g {
  constructor(e) {
    super(e), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new w({ field: this.field, includedReturns: u(this.includedReturns) });
  }
};
r([o({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "includedReturns", void 0), r([v({ pointCloudReturnFilter: "return" })], f.prototype, "type", void 0), f = w = r([y("geoscene.layers.pointCloudFilters.PointCloudReturnFilter")], f);
const ie = f;
var I;
let p = I = class extends g {
  constructor(e) {
    super(e), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new I({ field: this.field, mode: this.mode, values: u(this.values) });
  }
};
r([o({ type: ["exclude", "include"], json: { write: { enabled: !0, isRequired: !0 } } })], p.prototype, "mode", void 0), r([v({ pointCloudValueFilter: "value" })], p.prototype, "type", void 0), r([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], p.prototype, "values", void 0), p = I = r([y("geoscene.layers.pointCloudFilters.PointCloudValueFilter")], p);
const ne = p, se = { key: "type", base: g, typeMap: { value: ne, bitfield: oe, return: ie } };
var $;
let h = $ = class extends P {
  constructor(e) {
    super(e), this.type = "point-cloud-rgb", this.field = null;
  }
  clone() {
    return new $({ ...this.cloneProperties(), field: u(this.field) });
  }
};
r([v({ pointCloudRGBRenderer: "point-cloud-rgb" })], h.prototype, "type", void 0), r([o({ type: String, json: { write: !0 } })], h.prototype, "field", void 0), h = $ = r([y("geoscene.renderers.PointCloudRGBRenderer")], h);
const ae = h, R = { key: "type", base: P, typeMap: { "point-cloud-class-breaks": ee, "point-cloud-rgb": ae, "point-cloud-stretch": te, "point-cloud-unique-value": re }, errorContext: "renderer" }, T = B.getLogger("geoscene.layers.PointCloudLayer"), F = Y();
let i = class extends Z(E(N(_(A(L(O(H))))))) {
  constructor(...e) {
    super(...e), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = !0, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.fieldsIndex = null, this.outFields = null, this.path = null, this.legendEnabled = !0, this.renderer = null, this.type = "point-cloud";
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  getFieldDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t && t.domain ? t.domain : null;
  }
  readServiceFields(e, t, s) {
    return Array.isArray(e) ? e.map((n) => {
      const a = new m();
      return n.type === "FieldTypeInteger" && ((n = u(n)).type = "esriFieldTypeInteger"), a.read(n, s), a;
    }) : Array.isArray(t.attributeStorageInfo) ? t.attributeStorageInfo.map((n) => new m({ name: n.name, type: n.name === "ELEVATION" ? "double" : "integer" })) : null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  writeRenderer(e, t, s, n) {
    V("layerDefinition.drawingInfo.renderer", e.write({}, n), t);
  }
  load(e) {
    const t = D(e) ? e.signal : null, s = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(G).then(() => this._fetchService(t));
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    const t = K(this, e);
    return this._formatPopupTemplateReturnsField(t), this._formatPopupTemplateRGBField(t), t;
  }
  _formatPopupTemplateReturnsField(e) {
    const t = this.fieldsIndex.get("RETURNS");
    if (!t)
      return;
    const s = e.fieldInfos.find((a) => a.fieldName === t.name);
    if (!s)
      return;
    const n = new x({ name: "pcl-returns-decoded", title: t.alias || t.name, expression: `
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e.expressionInfos = [...e.expressionInfos || [], n], s.fieldName = "expression/pcl-returns-decoded";
  }
  _formatPopupTemplateRGBField(e) {
    const t = this.fieldsIndex.get("RGB");
    if (!t)
      return;
    const s = e.fieldInfos.find((a) => a.fieldName === t.name);
    if (!s)
      return;
    const n = new x({ name: "pcl-rgb-decoded", title: t.alias || t.name, expression: `
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      ` });
    e.expressionInfos = [...e.expressionInfos || [], n], s.fieldName = "expression/pcl-rgb-decoded";
  }
  async queryCachedStatistics(e, t) {
    if (await this.load(t), !this.attributeStorageInfo)
      throw new l("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const s = this.fieldsIndex.get(e);
    if (!s)
      throw new l("pointcloudlayer:field-unexisting", `Field '${e}' does not exist on the layer`);
    for (const n of this.attributeStorageInfo)
      if (n.name === s.name) {
        const a = k(this.parsedUrl.path, `./statistics/${n.key}`);
        return M(a, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: t ? t.signal : null }).then((j) => j.data);
      }
    throw new l("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(C.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
    return this._debouncedSaveOperations(C.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "PointCloud")
      throw new l("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new l("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
    if (this.version.major > 2)
      throw new l("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
  }
  hasCachedStatistics(e) {
    return this.attributeStorageInfo != null && this.attributeStorageInfo.some((t) => t.name === e);
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    e && (e.mode !== "absolute-height" && T.warn(".elevationInfo=", "Point cloud layers only support absolute-height elevation mode"), e.featureExpressionInfo && e.featureExpressionInfo.expression !== "0" && T.warn(".elevationInfo=", "Point cloud layers do not support featureExpressionInfo"));
  }
};
r([o({ type: ["PointCloudLayer"] })], i.prototype, "operationalLayerType", void 0), r([o(z)], i.prototype, "popupEnabled", void 0), r([o({ type: U, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), r([o({ readOnly: !0, json: { read: !1 } })], i.prototype, "defaultPopupTemplate", null), r([o({ readOnly: !0, json: { write: !1, read: !1, origins: { "web-document": { write: !1, read: !1 } } } })], i.prototype, "opacity", void 0), r([o({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), r([o({ types: [se], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: !0 } })], i.prototype, "filters", void 0), r([o({ type: [m] })], i.prototype, "fields", void 0), r([o(F.fieldsIndex)], i.prototype, "fieldsIndex", void 0), r([J("service", "fields", ["fields", "attributeStorageInfo"])], i.prototype, "readServiceFields", null), r([o(F.outFields)], i.prototype, "outFields", void 0), r([o({ readOnly: !0 })], i.prototype, "attributeStorageInfo", void 0), r([o(Q)], i.prototype, "elevationInfo", null), r([o({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], i.prototype, "path", void 0), r([o(W)], i.prototype, "legendEnabled", void 0), r([o({ types: R, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: R }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], i.prototype, "renderer", void 0), r([X("renderer")], i.prototype, "writeRenderer", null), r([o({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0), i = r([y("geoscene.layers.PointCloudLayer")], i);
const fe = i;
export {
  fe as default
};

import { a as r, b as o, c, bk as q, cV as S, bj as g, aT as u, cN as B, cm as N, cn as E, co as V, cp as _, cO as L, cW as b, d0 as O, cq as A, eT as K, im as C, H as l, bo as k, ae as D, s as T, eZ as G, k as M, bl as U, eU as z, ct as H, cU as W, f3 as Z, ax as J } from "./index-O2RTvw_o.js";
import { N as Q, K as F } from "./SceneService-COKZimiP.js";
import { c as j, d as X, b as Y, a as ee } from "./PointCloudUniqueValueRenderer-m6flzMAg.js";
import "vue";
import "./originUtils-0olwExvB.js";
import "./multiOriginJSONSupportUtils-vbwzQTfc.js";
import "./resourceUtils-zoan8Otp.js";
let f = class extends q {
  constructor(e) {
    super(e), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
r([o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "field", void 0), r([o({ readOnly: !0, nonNullable: !0, json: { read: !1 } })], f.prototype, "type", void 0), f = r([c("geoscene.layers.pointCloudFilters.PointCloudFilter")], f);
const m = f;
var w;
let d = w = class extends m {
  constructor(e) {
    super(e), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new w({ field: this.field, requiredClearBits: u(this.requiredClearBits), requiredSetBits: u(this.requiredSetBits) });
  }
};
r([o({ type: [S], json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !0, isRequired: !this.requiredSetBits };
} } } })], d.prototype, "requiredClearBits", void 0), r([o({ type: [S], json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !0, isRequired: !this.requiredClearBits };
} } } })], d.prototype, "requiredSetBits", void 0), r([g({ pointCloudBitfieldFilter: "bitfield" })], d.prototype, "type", void 0), d = w = r([c("geoscene.layers.pointCloudFilters.PointCloudBitfieldFilter")], d);
const te = d;
var I;
let h = I = class extends m {
  constructor(e) {
    super(e), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new I({ field: this.field, includedReturns: u(this.includedReturns) });
  }
};
r([o({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: !0, isRequired: !0 } } })], h.prototype, "includedReturns", void 0), r([g({ pointCloudReturnFilter: "return" })], h.prototype, "type", void 0), h = I = r([c("geoscene.layers.pointCloudFilters.PointCloudReturnFilter")], h);
const re = h;
var $;
let p = $ = class extends m {
  constructor(e) {
    super(e), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new $({ field: this.field, mode: this.mode, values: u(this.values) });
  }
};
r([o({ type: ["exclude", "include"], json: { write: { enabled: !0, isRequired: !0 } } })], p.prototype, "mode", void 0), r([g({ pointCloudValueFilter: "value" })], p.prototype, "type", void 0), r([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], p.prototype, "values", void 0), p = $ = r([c("geoscene.layers.pointCloudFilters.PointCloudValueFilter")], p);
const oe = p, ie = { key: "type", base: m, typeMap: { value: oe, bitfield: te, return: re } };
var x;
let v = x = class extends j {
  constructor(e) {
    super(e), this.type = "point-cloud-rgb", this.field = null;
  }
  clone() {
    return new x({ ...this.cloneProperties(), field: u(this.field) });
  }
};
r([g({ pointCloudRGBRenderer: "point-cloud-rgb" })], v.prototype, "type", void 0), r([o({ type: String, json: { write: !0 } })], v.prototype, "field", void 0), v = x = r([c("geoscene.renderers.PointCloudRGBRenderer")], v);
const ne = v, P = { key: "type", base: j, typeMap: { "point-cloud-class-breaks": X, "point-cloud-rgb": ne, "point-cloud-stretch": Y, "point-cloud-unique-value": ee }, errorContext: "renderer" }, R = Z();
let i = class extends Q(B(N(E(V(_(L(J))))))) {
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
      const a = new b();
      return n.type === "FieldTypeInteger" && ((n = u(n)).type = "esriFieldTypeInteger"), a.read(n, s), a;
    }) : Array.isArray(t.attributeStorageInfo) ? t.attributeStorageInfo.map((n) => new b({ name: n.name, type: n.name === "ELEVATION" ? "double" : "integer" })) : null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  writeRenderer(e, t, s, n) {
    O("layerDefinition.drawingInfo.renderer", e.write({}, n), t);
  }
  load(e) {
    const t = e != null ? e.signal : null, s = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(A).then(() => this._fetchService(t));
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    const t = K(this, e);
    return t && (this._formatPopupTemplateReturnsField(t), this._formatPopupTemplateRGBField(t)), t;
  }
  _formatPopupTemplateReturnsField(e) {
    var a;
    const t = this.fieldsIndex.get("RETURNS");
    if (!t)
      return;
    const s = (a = e.fieldInfos) == null ? void 0 : a.find((y) => y.fieldName === t.name);
    if (!s)
      return;
    const n = new C({ name: "pcl-returns-decoded", title: t.alias || t.name, expression: `
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e.expressionInfos = [...e.expressionInfos || [], n], s.fieldName = "expression/pcl-returns-decoded";
  }
  _formatPopupTemplateRGBField(e) {
    var a;
    const t = this.fieldsIndex.get("RGB");
    if (!t)
      return;
    const s = (a = e.fieldInfos) == null ? void 0 : a.find((y) => y.fieldName === t.name);
    if (!s)
      return;
    const n = new C({ name: "pcl-rgb-decoded", title: t.alias || t.name, expression: `
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
        return D(a, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: t ? t.signal : null }).then((y) => y.data);
      }
    throw new l("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(F.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
    return this._debouncedSaveOperations(F.SAVE, e);
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
    e && (e.mode !== "absolute-height" && T.getLogger(this).warn(".elevationInfo=", "Point cloud layers only support absolute-height elevation mode"), e.featureExpressionInfo && e.featureExpressionInfo.expression !== "0" && T.getLogger(this).warn(".elevationInfo=", "Point cloud layers do not support featureExpressionInfo"));
  }
};
r([o({ type: ["PointCloudLayer"] })], i.prototype, "operationalLayerType", void 0), r([o(G)], i.prototype, "popupEnabled", void 0), r([o({ type: M, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), r([o({ readOnly: !0, json: { read: !1 } })], i.prototype, "defaultPopupTemplate", null), r([o({ readOnly: !0, json: { write: !1, read: !1, origins: { "web-document": { write: !1, read: !1 } } } })], i.prototype, "opacity", void 0), r([o({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), r([o({ types: [ie], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: !0 } })], i.prototype, "filters", void 0), r([o({ type: [b] })], i.prototype, "fields", void 0), r([o(R.fieldsIndex)], i.prototype, "fieldsIndex", void 0), r([U("service", "fields", ["fields", "attributeStorageInfo"])], i.prototype, "readServiceFields", null), r([o(R.outFields)], i.prototype, "outFields", void 0), r([o({ readOnly: !0 })], i.prototype, "attributeStorageInfo", void 0), r([o(z)], i.prototype, "elevationInfo", null), r([o({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], i.prototype, "path", void 0), r([o(H)], i.prototype, "legendEnabled", void 0), r([o({ types: P, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: P }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], i.prototype, "renderer", void 0), r([W("renderer")], i.prototype, "writeRenderer", null), r([o({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0), i = r([c("geoscene.layers.PointCloudLayer")], i);
const ye = i;
export {
  ye as default
};

import { e as a, d as n, aE as g, M as Q, bI as Y, dX as Z, m as ee, a as N, C as G, R as re, bc as te, s as K, aw as ie, bz as se, f6 as ae, y as E, az as y, aT as le, f7 as oe, bk as ne, f8 as $, e5 as ye, j as R, I as pe, bC as _, dQ as ue, dI as U, S as D, r as B, bY as de, ef as ce, bW as M, dU as fe, bD as w, B as he, dY as be, dZ as ge, f9 as J, fa as q, c7 as me, e0 as Se, bU as F, W as ve, e7 as Ie, fb as we } from "./index-j1oaLRcp.js";
import { r as Ee } from "./Version-w5GduY1W.js";
import { l as Le } from "./floorFilterUtils-HsstcPZ9.js";
import { o as xe } from "./sublayerUtils-XJKH7kDg.js";
const Ae = (e) => {
  let r = class extends e {
    constructor() {
      super(...arguments), this.capabilities = void 0, this.copyright = null, this.fullExtent = null, this.legendEnabled = !0, this.spatialReference = null, this.version = void 0;
    }
    readCapabilities(t, i) {
      var s, o;
      const p = i.capabilities && i.capabilities.split(",").map((X) => X.toLowerCase().trim());
      if (!p)
        return { operations: { supportsQuery: !1, supportsExportMap: !1, supportsExportTiles: !1, supportsTileMap: !1 }, exportMap: null, exportTiles: null };
      const d = this.type, m = p.includes("query"), b = p.includes("map"), c = !!i.exportTilesAllowed, L = p.includes("tilemap"), I = d !== "tile" && !!i.supportsDynamicLayers, x = d !== "tile" && (!i.tileInfo || I), u = d !== "tile" && (!i.tileInfo || I), h = d !== "tile", S = i.cimVersion && Ee.parse(i.cimVersion), O = (s = S == null ? void 0 : S.since(1, 4)) != null && s, H = (o = S == null ? void 0 : S.since(2, 0)) != null && o;
      return { operations: { supportsQuery: m, supportsExportMap: b, supportsExportTiles: c, supportsTileMap: L }, exportMap: b ? { supportsArcadeExpressionForLabeling: O, supportsSublayersChanges: h, supportsDynamicLayers: I, supportsSublayerVisibility: x, supportsSublayerDefinitionExpression: u, supportsCIMSymbols: H } : null, exportTiles: c ? { maxExportTilesCount: +i.maxExportTilesCount } : null };
    }
    readVersion(t, i) {
      let s = i.currentVersion;
      return s || (s = i.hasOwnProperty("capabilities") || i.hasOwnProperty("tables") ? 10 : i.hasOwnProperty("supportedImageFormatTypes") ? 9.31 : 9.3), s;
    }
    async fetchSublayerInfo(t, i) {
      return await this.fetchAllLayersAndTables(i), this._allLayersAndTablesMap.get(t);
    }
    async fetchAllLayersAndTables(t) {
      await this.load(t), this._allLayersAndTablesPromise || (this._allLayersAndTablesPromise = G(re(this.url).path + "/layers", { responseType: "json", query: { f: "json", ...this.customParameters, token: this.apiKey } }).then((s) => {
        this._allLayersAndTablesMap = /* @__PURE__ */ new Map();
        for (const o of s.data.layers)
          this._allLayersAndTablesMap.set(o.id, o);
        return { result: s.data };
      }, (s) => ({ error: s })));
      const i = await this._allLayersAndTablesPromise;
      if (te(t), "result" in i)
        return i.result;
      throw i.error;
    }
  };
  return a([n({ readOnly: !0 })], r.prototype, "capabilities", void 0), a([g("service", "capabilities", ["capabilities", "exportTilesAllowed", "maxExportTilesCount", "supportsDynamicLayers", "tileInfo"])], r.prototype, "readCapabilities", null), a([n({ json: { read: { source: "copyrightText" } } })], r.prototype, "copyright", void 0), a([n({ type: Q })], r.prototype, "fullExtent", void 0), a([n(Y)], r.prototype, "id", void 0), a([n({ type: Boolean, json: { origins: { service: { read: { enabled: !1 } } }, read: { source: "showLegend" }, write: { target: "showLegend" } } })], r.prototype, "legendEnabled", void 0), a([n(Z)], r.prototype, "popupEnabled", void 0), a([n({ type: ee })], r.prototype, "spatialReference", void 0), a([n({ readOnly: !0 })], r.prototype, "version", void 0), a([g("version", ["currentVersion", "capabilities", "tables", "supportedImageFormatTypes"])], r.prototype, "readVersion", null), r = a([N("geoscene.layers.mixins.ArcGISMapService")], r), r;
};
var P;
function A(e) {
  return e && e.type === "esriSMS";
}
function j(e, r, t) {
  var i;
  const s = this.originIdOf(r) >= F(t.origin);
  return { ignoreOrigin: !0, allowNull: s, enabled: !!t && ((i = t.layer) == null ? void 0 : i.type) === "map-image" && (t.writeSublayerStructure || s) };
}
function W(e, r, t) {
  var i;
  return { enabled: !!t && ((i = t.layer) == null ? void 0 : i.type) === "tile" && this._isOverridden(r) };
}
function f(e, r, t) {
  return { ignoreOrigin: !0, enabled: t && t.writeSublayerStructure || !1 };
}
function T(e, r, t) {
  return { ignoreOrigin: !0, enabled: !!t && (t.writeSublayerStructure || this.originIdOf(r) >= F(t.origin)) };
}
const C = K.getLogger("geoscene.layers.support.Sublayer");
let Oe = 0;
const v = /* @__PURE__ */ new Set();
v.add("layer"), v.add("parent"), v.add("loaded"), v.add("loadStatus"), v.add("loadError"), v.add("loadWarnings");
let l = P = class extends ie(se(ae(ve))) {
  constructor(e) {
    super(e), this.capabilities = void 0, this.fields = null, this.fullExtent = null, this.globalIdField = null, this.legendEnabled = !0, this.objectIdField = null, this.popupEnabled = !0, this.popupTemplate = null, this.sourceJSON = null, this.title = null, this.typeIdField = null, this.types = null;
  }
  async load(e) {
    return this.addResolvingPromise((async () => {
      var r;
      if (!this.layer && !this.url)
        throw new E("sublayer:missing-layer", "Sublayer can't be loaded without being part of a layer", { sublayer: this });
      let t = null;
      if (!this.layer || this.originIdOf("url") > y.SERVICE || ((r = this.source) == null ? void 0 : r.type) === "data-layer")
        t = (await G(this.url, { responseType: "json", query: { f: "json" }, ...e })).data;
      else {
        var i;
        let s = this.id;
        ((i = this.source) == null ? void 0 : i.type) === "map-layer" && (s = this.source.mapLayerId), t = await this.layer.fetchSublayerInfo(s, e);
      }
      t && (this.sourceJSON = t, this.read({ layerDefinition: t }, { origin: "service" }));
    })()), this;
  }
  readCapabilities(e, r) {
    const t = (e = (r = r.layerDefinition || r).capabilities || e) ? e.toLowerCase().split(",").map((i) => i.trim()) : [];
    return { exportMap: { supportsModification: !!r.canModifyLayer }, operations: { supportsQuery: t.indexOf("query") !== -1 } };
  }
  set definitionExpression(e) {
    this._setAndNotifyLayer("definitionExpression", e);
  }
  get fieldsIndex() {
    return new le(this.fields || []);
  }
  set floorInfo(e) {
    this._setAndNotifyLayer("floorInfo", e);
  }
  readGlobalIdFieldFromService(e, r) {
    if ((r = r.layerDefinition || r).globalIdField)
      return r.globalIdField;
    if (r.fields) {
      for (const t of r.fields)
        if (t.type === "esriFieldTypeGlobalID")
          return t.name;
    }
  }
  get id() {
    const e = this._get("id");
    return e ?? Oe++;
  }
  set id(e) {
    this._get("id") !== e && (this.get("layer.capabilities.exportMap.supportsDynamicLayers") !== !1 ? this._set("id", e) : this._logLockedError("id", "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));
  }
  set labelingInfo(e) {
    this._setAndNotifyLayer("labelingInfo", e);
  }
  writeLabelingInfo(e, r, t, i) {
    e && e.length && (r.layerDefinition = { drawingInfo: { labelingInfo: e.map((s) => s.write({}, i)) } });
  }
  set labelsVisible(e) {
    this._setAndNotifyLayer("labelsVisible", e);
  }
  set layer(e) {
    this._set("layer", e), this.sublayers && this.sublayers.forEach((r) => r.layer = e);
  }
  set listMode(e) {
    this._set("listMode", e);
  }
  set minScale(e) {
    this._setAndNotifyLayer("minScale", e);
  }
  readMinScale(e, r) {
    return r.minScale || r.layerDefinition && r.layerDefinition.minScale || 0;
  }
  set maxScale(e) {
    this._setAndNotifyLayer("maxScale", e);
  }
  readMaxScale(e, r) {
    return r.maxScale || r.layerDefinition && r.layerDefinition.maxScale || 0;
  }
  get effectiveScaleRange() {
    const { minScale: e, maxScale: r } = this;
    return { minScale: e, maxScale: r };
  }
  readObjectIdFieldFromService(e, r) {
    if ((r = r.layerDefinition || r).objectIdField)
      return r.objectIdField;
    if (r.fields) {
      for (const t of r.fields)
        if (t.type === "esriFieldTypeOID")
          return t.name;
    }
  }
  set opacity(e) {
    this._setAndNotifyLayer("opacity", e);
  }
  readOpacity(e, r) {
    const t = r.layerDefinition;
    return 1 - 0.01 * (t.transparency != null ? t.transparency : t.drawingInfo.transparency);
  }
  writeOpacity(e, r, t, i) {
    r.layerDefinition = { drawingInfo: { transparency: 100 - 100 * e } };
  }
  writeParent(e, r) {
    this.parent && this.parent !== this.layer ? r.parentLayerId = oe(this.parent.id) : r.parentLayerId = -1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e) {
    if (e) {
      for (const r of e.getSymbols())
        if (ne(r)) {
          C.warn("Sublayer renderer should use 2D symbols");
          break;
        }
    }
    this._setAndNotifyLayer("renderer", e);
  }
  get source() {
    return this._get("source") || new $({ mapLayerId: this.id });
  }
  set source(e) {
    this._setAndNotifyLayer("source", e);
  }
  set sublayers(e) {
    this._handleSublayersChange(e, this._get("sublayers")), this._set("sublayers", e);
  }
  castSublayers(e) {
    return ye(R.ofType(P), e);
  }
  writeSublayers(e, r, t) {
    this.get("sublayers.length") && (r[t] = this.sublayers.map((i) => i.id).toArray().reverse());
  }
  readTypeIdField(e, r) {
    let t = (r = r.layerDefinition || r).typeIdField;
    if (t && r.fields) {
      t = t.toLowerCase();
      const i = r.fields.find((s) => s.name.toLowerCase() === t);
      i && (t = i.name);
    }
    return null;
  }
  get url() {
    var e, r;
    const t = (e = (r = this.layer) == null ? void 0 : r.parsedUrl) != null ? e : this._lastParsedUrl, i = this.source;
    if (!t)
      return null;
    if (this._lastParsedUrl = t, (i == null ? void 0 : i.type) === "map-layer")
      return `${t.path}/${i.mapLayerId}`;
    const s = { layer: JSON.stringify({ source: this.source }) };
    return `${t.path}/dynamicLayer?${pe(s)}`;
  }
  set url(e) {
    e ? this._override("url", e) : this._clearOverride("url");
  }
  set visible(e) {
    this._setAndNotifyLayer("visible", e);
  }
  writeVisible(e, r, t, i) {
    r[t] = this.getAtOrigin("defaultVisibility", "service") || e;
  }
  clone() {
    const { store: e } = _(this), r = new P();
    return _(r).store = e.clone(v), this.commitProperty("url"), r._lastParsedUrl = this._lastParsedUrl, r;
  }
  createPopupTemplate(e) {
    return ue(this, e);
  }
  createQuery() {
    return new U({ returnGeometry: !0, where: this.definitionExpression || "1=1" });
  }
  async createFeatureLayer() {
    var e, r;
    if (this.hasOwnProperty("sublayers"))
      return null;
    const t = (e = this.layer) == null ? void 0 : e.parsedUrl, i = new (await import("./index-j1oaLRcp.js").then((s) => s.kH)).default({ url: t.path });
    return t && this.source && (this.source.type === "map-layer" ? i.layerId = this.source.mapLayerId : i.dynamicDataSource = this.source), this.layer.refreshInterval != null && (i.refreshInterval = this.layer.refreshInterval), this.definitionExpression && (i.definitionExpression = this.definitionExpression), this.floorInfo && (i.floorInfo = D(this.floorInfo)), this.originIdOf("labelingInfo") > y.SERVICE && (i.labelingInfo = D(this.labelingInfo)), this.originIdOf("labelsVisible") > y.DEFAULTS && (i.labelsVisible = this.labelsVisible), this.originIdOf("legendEnabled") > y.DEFAULTS && (i.legendEnabled = this.legendEnabled), this.originIdOf("visible") > y.DEFAULTS && (i.visible = this.visible), this.originIdOf("minScale") > y.DEFAULTS && (i.minScale = this.minScale), this.originIdOf("maxScale") > y.DEFAULTS && (i.maxScale = this.maxScale), this.originIdOf("opacity") > y.DEFAULTS && (i.opacity = this.opacity), this.originIdOf("popupTemplate") > y.DEFAULTS && (i.popupTemplate = D(this.popupTemplate)), this.originIdOf("renderer") > y.SERVICE && (i.renderer = D(this.renderer)), ((r = this.source) == null ? void 0 : r.type) === "data-layer" && (i.dynamicDataSource = this.source.clone()), this.originIdOf("title") > y.DEFAULTS && (i.title = this.title), this.layer.type === "map-image" && this.layer.originIdOf("customParameters") > y.DEFAULTS && (i.customParameters = this.layer.customParameters), this.layer.type === "tile" && this.layer.originIdOf("customParameters") > y.DEFAULTS && (i.customParameters = this.layer.customParameters), i;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFeatureType(e) {
    const { typeIdField: r, types: t } = this;
    if (!r || !e)
      return null;
    const i = e.attributes ? e.attributes[r] : void 0;
    if (i == null)
      return null;
    let s = null;
    return t.some((o) => {
      const { id: p } = o;
      return p != null && (p.toString() === i.toString() && (s = o), !!s);
    }), s;
  }
  getFieldDomain(e, r) {
    const t = r && r.feature, i = this.getFeatureType(t);
    if (i) {
      const s = i.domains && i.domains[e];
      if (s && s.type !== "inherited")
        return s;
    }
    return this._getLayerDomain(e);
  }
  async queryFeatures(e = this.createQuery(), r) {
    var t, i, s, o;
    if (await this.load(), !this.get("capabilities.operations.supportsQuery"))
      throw new E("Sublayer.queryFeatures", "this layer doesn't support queries.");
    const [{ executeQuery: p }, { default: d }] = await Promise.all([import("./index-j1oaLRcp.js").then((c) => c.kE), import("./index-j1oaLRcp.js").then((c) => c.kF)]), m = await p(this.url, U.from(e), (t = (i = this.layer) == null ? void 0 : i.spatialReference) != null ? t : null, { ...r, query: { ...(s = this.layer) == null ? void 0 : s.customParameters, token: (o = this.layer) == null ? void 0 : o.apiKey } }), b = d.fromJSON(m.data);
    if (b != null && b.features)
      for (const c of b.features)
        c.sourceLayer = this;
    return b;
  }
  toExportImageJSON(e) {
    var r;
    const t = { id: this.id, source: ((r = this.source) == null ? void 0 : r.toJSON()) || { mapLayerId: this.id, type: "mapLayer" } };
    if (this.definitionExpression) {
      const o = B(e) ? Le(e, this) : this.definitionExpression;
      t.definitionExpression = o;
    } else
      B(e) && (t.definitionExpression = e);
    const i = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce((o, p) => (o[p] = this.originIdOf(p), o), {});
    if (Object.keys(i).some((o) => i[o] > y.SERVICE)) {
      const o = t.drawingInfo = {};
      i.renderer > y.SERVICE && (o.renderer = this.renderer ? this.renderer.toJSON() : null), i.labelsVisible > y.SERVICE && (o.showLabels = this.labelsVisible), this.labelsVisible && i.labelingInfo > y.SERVICE && (o.labelingInfo = this.labelingInfo ? this.labelingInfo.map((p) => p.write({}, { origin: "service", layer: this.layer })) : null, o.showLabels = !0), i.opacity > y.SERVICE && (o.transparency = 100 - 100 * this.opacity), this._assignDefaultSymbolColors(o.renderer);
    }
    return t;
  }
  _assignDefaultSymbolColors(e) {
    this._forEachSimpleMarkerSymbols(e, (r) => {
      r.color || r.style !== "esriSMSX" && r.style !== "esriSMSCross" || (r.outline && r.outline.color ? r.color = r.outline.color : r.color = [0, 0, 0, 0]);
    });
  }
  _forEachSimpleMarkerSymbols(e, r) {
    if (e) {
      const t = "uniqueValueInfos" in e ? e.uniqueValueInfos : "classBreakInfos" in e ? e.classBreakInfos : [];
      for (const i of t)
        A(i.symbol) && r(i.symbol);
      "symbol" in e && A(e.symbol) && r(e.symbol), "defaultSymbol" in e && A(e.defaultSymbol) && r(e.defaultSymbol);
    }
  }
  _setAndNotifyLayer(e, r) {
    const t = this.layer, i = this._get(e);
    let s, o;
    switch (e) {
      case "definitionExpression":
      case "floorInfo":
        s = "supportsSublayerDefinitionExpression";
      case "minScale":
      case "maxScale":
      case "visible":
        s = "supportsSublayerVisibility";
        break;
      case "labelingInfo":
      case "labelsVisible":
      case "opacity":
      case "renderer":
      case "source":
        s = "supportsDynamicLayers", o = "supportsModification";
    }
    const p = _(this).getDefaultOrigin();
    if (p !== "service") {
      if (s && this.get(`layer.capabilities.exportMap.${s}`) === !1)
        return void this._logLockedError(e, `capability not available 'layer.capabilities.exportMap.${s}'`);
      if (o && this.get(`capabilities.exportMap.${o}`) === !1)
        return void this._logLockedError(e, `capability not available 'capabilities.exportMap.${o}'`);
    }
    e !== "source" || this.loadStatus === "not-loaded" ? (this._set(e, r), p !== "service" && i !== r && t && t.emit && t.emit("sublayer-update", { propertyName: e, target: this })) : this._logLockedError(e, "'source' can't be changed after calling sublayer.load()");
  }
  _handleSublayersChange(e, r) {
    r && (r.forEach((t) => {
      t.parent = null, t.layer = null;
    }), this.handles.removeAll()), e && (e.forEach((t) => {
      t.parent = this, t.layer = this.layer;
    }), this.handles.add([e.on("after-add", ({ item: t }) => {
      t.parent = this, t.layer = this.layer;
    }), e.on("after-remove", ({ item: t }) => {
      t.parent = null, t.layer = null;
    }), e.on("before-changes", (t) => {
      const i = this.get("layer.capabilities.exportMap.supportsSublayersChanges");
      i == null || i || (C.error(new E("sublayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", { sublayer: this, layer: this.layer })), t.preventDefault());
    })]));
  }
  _logLockedError(e, r) {
    C.error(new E("sublayer:locked", `Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`, { reason: r, sublayer: this, layer: this.layer }));
  }
  _getLayerDomain(e) {
    const r = this.fieldsIndex.get(e);
    return r ? r.domain : null;
  }
};
l.test = { isMapImageLayerOverridePolicy: (e) => e === f || e === j, isTileImageLayerOverridePolicy: (e) => e === W }, a([n({ readOnly: !0 })], l.prototype, "capabilities", void 0), a([g("service", "capabilities", ["layerDefinition.canModifyLayer", "layerDefinition.capabilities"])], l.prototype, "readCapabilities", null), a([n({ type: String, value: null, json: { name: "layerDefinition.definitionExpression", write: { allowNull: !0, overridePolicy: j } } })], l.prototype, "definitionExpression", null), a([n({ type: [de], json: { origins: { service: { read: { source: "layerDefinition.fields" } } } } })], l.prototype, "fields", void 0), a([n({ readOnly: !0 })], l.prototype, "fieldsIndex", null), a([n({ type: ce, value: null, json: { name: "layerDefinition.floorInfo", read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo", overridePolicy: j }, origins: { "web-scene": { read: !1, write: !1 } } } })], l.prototype, "floorInfo", null), a([n({ type: Q, json: { read: { source: "layerDefinition.extent" } } })], l.prototype, "fullExtent", void 0), a([n({ type: String })], l.prototype, "globalIdField", void 0), a([g("service", "globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], l.prototype, "readGlobalIdFieldFromService", null), a([n({ type: M, json: { write: { ignoreOrigin: !0 } } })], l.prototype, "id", null), a([n({ value: null, type: [fe], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo" }, write: { target: "layerDefinition.drawingInfo.labelingInfo", overridePolicy: f } } })], l.prototype, "labelingInfo", null), a([w("labelingInfo")], l.prototype, "writeLabelingInfo", null), a([n({ type: Boolean, value: !0, json: { read: { source: "layerDefinition.drawingInfo.showLabels" }, write: { target: "layerDefinition.drawingInfo.showLabels", overridePolicy: f } } })], l.prototype, "labelsVisible", null), a([n({ value: null })], l.prototype, "layer", null), a([n({ type: Boolean, value: !0, json: { origins: { service: { read: { enabled: !1 } } }, read: { source: "showLegend" }, write: { target: "showLegend", overridePolicy: T } } })], l.prototype, "legendEnabled", void 0), a([n({ type: ["show", "hide", "hide-children"], value: "show", json: { read: !1, write: !1, origins: { "web-scene": { read: !0, write: !0 } } } })], l.prototype, "listMode", null), a([n({ type: Number, value: 0, json: { write: { overridePolicy: f } } })], l.prototype, "minScale", null), a([g("minScale", ["minScale", "layerDefinition.minScale"])], l.prototype, "readMinScale", null), a([n({ type: Number, value: 0, json: { write: { overridePolicy: f } } })], l.prototype, "maxScale", null), a([g("maxScale", ["maxScale", "layerDefinition.maxScale"])], l.prototype, "readMaxScale", null), a([n({ readOnly: !0 })], l.prototype, "effectiveScaleRange", null), a([n({ type: String })], l.prototype, "objectIdField", void 0), a([g("service", "objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], l.prototype, "readObjectIdFieldFromService", null), a([n({ type: Number, value: 1, json: { write: { target: "layerDefinition.drawingInfo.transparency", overridePolicy: f } } })], l.prototype, "opacity", null), a([g("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], l.prototype, "readOpacity", null), a([w("opacity")], l.prototype, "writeOpacity", null), a([n({ json: { type: M, write: { target: "parentLayerId", writerEnsuresNonNull: !0, overridePolicy: f } } })], l.prototype, "parent", void 0), a([w("parent")], l.prototype, "writeParent", null), a([n({ type: Boolean, value: !0, json: { read: { source: "disablePopup", reader: (e, r) => !r.disablePopup }, write: { target: "disablePopup", overridePolicy: T, writer(e, r, t) {
  r[t] = !e;
} } } })], l.prototype, "popupEnabled", void 0), a([n({ type: he, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy: T } } })], l.prototype, "popupTemplate", void 0), a([n({ readOnly: !0 })], l.prototype, "defaultPopupTemplate", null), a([n({ types: be, value: null, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: f }, origins: { "web-scene": { types: ge, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: f } } } } })], l.prototype, "renderer", null), a([n({ types: { key: "type", base: null, typeMap: { "data-layer": J, "map-layer": $ } }, cast(e) {
  if (e) {
    if ("mapLayerId" in e)
      return q($, e);
    if ("dataSource" in e)
      return q(J, e);
  }
  return e;
}, json: { name: "layerDefinition.source", write: { overridePolicy: f } } })], l.prototype, "source", null), a([n()], l.prototype, "sourceJSON", void 0), a([n({ value: null, json: { type: [M], write: { target: "subLayerIds", allowNull: !0, overridePolicy: f } } })], l.prototype, "sublayers", null), a([me("sublayers")], l.prototype, "castSublayers", null), a([w("sublayers")], l.prototype, "writeSublayers", null), a([n({ type: String, json: { name: "name", write: { overridePolicy: T } } })], l.prototype, "title", void 0), a([n({ type: String })], l.prototype, "typeIdField", void 0), a([g("typeIdField", ["layerDefinition.typeIdField"])], l.prototype, "readTypeIdField", null), a([n({ type: [Se], json: { origins: { service: { read: { source: "layerDefinition.types" } } } } })], l.prototype, "types", void 0), a([n({ type: String, json: { read: { source: "layerUrl" }, write: { target: "layerUrl", overridePolicy: W } } })], l.prototype, "url", null), a([n({ type: Boolean, value: !0, json: { read: { source: "defaultVisibility" }, write: { target: "defaultVisibility", overridePolicy: f } } })], l.prototype, "visible", null), a([w("visible")], l.prototype, "writeVisible", null), l = P = a([N("geoscene.layers.support.Sublayer")], l);
const k = l, De = K.getLogger("geoscene.layers.TileLayer");
function Te(e, r) {
  const t = [], i = {};
  return e && e.forEach((s) => {
    const o = new k();
    if (o.read(s, r), i[o.id] = o, s.parentLayerId != null && s.parentLayerId !== -1) {
      const p = i[s.parentLayerId];
      p.sublayers || (p.sublayers = []), p.sublayers.unshift(o);
    } else
      t.unshift(o);
  }), t;
}
const V = R.ofType(k);
function z(e, r) {
  e && e.forEach((t) => {
    r(t), t.sublayers && t.sublayers.length && z(t.sublayers, r);
  });
}
const je = (e) => {
  let r = class extends e {
    constructor(...t) {
      super(...t), this.allSublayers = new Ie({ getCollections: () => [this.sublayers], getChildrenFunction: (i) => i.sublayers }), this.sublayersSourceJSON = { [y.SERVICE]: {}, [y.PORTAL_ITEM]: {}, [y.WEB_SCENE]: {}, [y.WEB_MAP]: {} }, this.handles.add(this.watch("sublayers", (i, s) => this._handleSublayersChange(i, s), !0));
    }
    readSublayers(t, i) {
      if (!i || !t)
        return;
      const { sublayersSourceJSON: s } = this, o = F(i.origin);
      if (o < y.SERVICE || (s[o] = { context: i, visibleLayers: t.visibleLayers || s[o].visibleLayers, layers: t.layers || s[o].layers }, o > y.SERVICE))
        return;
      this._set("serviceSublayers", this.createSublayersForOrigin("service").sublayers);
      const { sublayers: p, origin: d } = this.createSublayersForOrigin("web-document"), m = _(this);
      m.setDefaultOrigin(d), this._set("sublayers", new V(p)), m.setDefaultOrigin("user");
    }
    findSublayerById(t) {
      return this.allSublayers.find((i) => i.id === t);
    }
    createServiceSublayers() {
      return this.createSublayersForOrigin("service").sublayers;
    }
    createSublayersForOrigin(t) {
      const i = F(t === "web-document" ? "web-map" : t);
      let s = y.SERVICE, o = this.sublayersSourceJSON[y.SERVICE].layers, p = this.sublayersSourceJSON[y.SERVICE].context, d = null;
      const m = [y.PORTAL_ITEM, y.WEB_SCENE, y.WEB_MAP].filter((u) => u <= i);
      for (const u of m) {
        const h = this.sublayersSourceJSON[u];
        xe(h.layers) && (s = u, o = h.layers, p = h.context, h.visibleLayers && (d = { visibleLayers: h.visibleLayers, context: h.context }));
      }
      const b = [y.PORTAL_ITEM, y.WEB_SCENE, y.WEB_MAP].filter((u) => u > s && u <= i);
      let c = null;
      for (const u of b) {
        const { layers: h, visibleLayers: S, context: O } = this.sublayersSourceJSON[u];
        h && (c = { layers: h, context: O }), S && (d = { visibleLayers: S, context: O });
      }
      const L = Te(o, p), I = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
      if (c)
        for (const u of c.layers)
          I.set(u.id, u);
      if (d)
        for (const u of d.visibleLayers)
          x.add(u);
      return z(L, (u) => {
        c && u.read(I.get(u.id), c.context), d && u.read({ defaultVisibility: x.has(u.id) }, d.context);
      }), { origin: we(s), sublayers: new V({ items: L }) };
    }
    read(t, i) {
      super.read(t, i), this.readSublayers(t, i);
    }
    _handleSublayersChange(t, i) {
      i && (i.forEach((s) => {
        s.parent = null, s.layer = null;
      }), this.handles.remove("sublayers-owner")), t && (t.forEach((s) => {
        s.parent = this, s.layer = this;
      }), this.handles.add([t.on("after-add", ({ item: s }) => {
        s.parent = this, s.layer = this;
      }), t.on("after-remove", ({ item: s }) => {
        s.parent = null, s.layer = null;
      })], "sublayers-owner"), this.type === "tile" && this.handles.add(t.on("before-changes", (s) => {
        De.error(new E("tilelayer:sublayers-non-modifiable", "ISublayer can't be added, moved, or removed from the layer's sublayers", { layer: this })), s.preventDefault();
      }), "sublayers-owner"));
    }
  };
  return a([n({ readOnly: !0 })], r.prototype, "allSublayers", void 0), a([n({ readOnly: !0, type: R.ofType(k) })], r.prototype, "serviceSublayers", void 0), a([n({ value: null, type: V, json: { read: !1, write: { allowNull: !0, ignoreOrigin: !0 } } })], r.prototype, "sublayers", void 0), a([n({ readOnly: !0 })], r.prototype, "sublayersSourceJSON", void 0), r = a([N("geoscene.layers.mixins.SublayersOwner")], r), r;
};
export {
  je as S,
  k as W,
  Ae as y
};

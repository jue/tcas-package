import { e as i, d as o, a as p, W as w, X as v, r as y, x as S, M as O, cV as b, Z as I, aE as F, dK as q, dL as N, b_ as _, m as j, R as x, dI as l, y as J } from "./index-Ek1MTSEY.js";
import { c as C } from "./clientSideDefaults-LKtLjX6p.js";
import "vue";
import "./QueryEngineCapabilities-gmxC9I6i.js";
let a = class extends w {
  constructor(e) {
    super(e), this.type = "csv", this.refresh = v(async (t) => {
      await this.load();
      const { extent: n, timeExtent: s } = await this._connection.invoke("refresh", t);
      return this.sourceJSON.extent = n, s && (this.sourceJSON.timeInfo.timeExtent = [s.start, s.end]), { dataChanged: !0, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e) {
    const t = y(e) ? e.signal : null;
    return this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this);
  }
  destroy() {
    var e;
    (e = this._connection) == null || e.close(), this._connection = null;
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(e, t = {}) {
    await this.load(t);
    const n = await this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);
    return S.fromJSON(n);
  }
  async queryFeaturesJSON(e, t = {}) {
    return await this.load(t), this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);
  }
  async queryFeatureCount(e, t = {}) {
    return await this.load(t), this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t);
  }
  async queryObjectIds(e, t = {}) {
    return await this.load(t), this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t);
  }
  async queryExtent(e, t = {}) {
    await this.load(t);
    const n = await this._connection.invoke("queryExtent", e ? e.toJSON() : null, t);
    return { count: n.count, extent: O.fromJSON(n.extent) };
  }
  async querySnapping(e, t = {}) {
    return await this.load(t), this._connection.invoke("querySnapping", e, t);
  }
  async _startWorker(e) {
    this._connection = await b("CSVSourceWorker", { strategy: I("feature-layers-workers") ? "dedicated" : "local", signal: e });
    const { url: t, delimiter: n, fields: s, latitudeField: m, longitudeField: f, spatialReference: d, timeInfo: c } = this.loadOptions, u = await this._connection.invoke("load", { url: t, customParameters: this.customParameters, parsingOptions: { delimiter: n, fields: s == null ? void 0 : s.map((g) => g.toJSON()), latitudeField: m, longitudeField: f, spatialReference: d == null ? void 0 : d.toJSON(), timeInfo: c == null ? void 0 : c.toJSON() } }, { signal: e });
    this.locationInfo = u.locationInfo, this.sourceJSON = u.layerDefinition, this.delimiter = u.delimiter;
  }
};
i([o()], a.prototype, "type", void 0), i([o()], a.prototype, "loadOptions", void 0), i([o()], a.prototype, "customParameters", void 0), i([o()], a.prototype, "locationInfo", void 0), i([o()], a.prototype, "sourceJSON", void 0), i([o()], a.prototype, "delimiter", void 0), a = i([p("geoscene.layers.graphics.sources.CSVSource")], a);
const h = a, k = "CSVLayer";
let r = class extends _ {
  constructor(...e) {
    super(...e), this.capabilities = C(!1, !1), this.delimiter = null, this.editingEnabled = !1, this.fields = null, this.latitudeField = null, this.locationType = "coordinates", this.longitudeField = null, this.operationalLayerType = "CSV", this.outFields = ["*"], this.path = null, this.portalItem = null, this.spatialReference = j.WGS84, this.source = null, this.type = "csv";
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  readWebMapLabelsVisible(e, t) {
    return t.showLabels != null ? t.showLabels : !!(t.layerDefinition && t.layerDefinition.drawingInfo && t.layerDefinition.drawingInfo.labelingInfo);
  }
  set url(e) {
    if (!e)
      return void this._set("url", e);
    const t = x(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async createGraphicsSource(e) {
    const t = new h({ loadOptions: { delimiter: this.delimiter, fields: this.fields, latitudeField: this.latitudeField, longitudeField: this.longitudeField, spatialReference: this.spatialReference, timeInfo: this.timeInfo, url: this.url }, customParameters: this.customParameters });
    return this._set("source", t), await t.load({ signal: e }), this.read({ locationInfo: t.locationInfo, columnDelimiter: t.delimiter }, { origin: "service", url: this.parsedUrl }), t;
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(l.from(e) || this.createQuery())).then((n) => {
      if (n != null && n.features)
        for (const s of n.features)
          s.layer = s.sourceLayer = this;
      return n;
    });
  }
  queryObjectIds(e, t) {
    return this.load().then(() => this.source.queryObjectIds(l.from(e) || this.createQuery()));
  }
  queryFeatureCount(e, t) {
    return this.load().then(() => this.source.queryFeatureCount(l.from(e) || this.createQuery()));
  }
  queryExtent(e, t) {
    return this.load().then(() => this.source.queryExtent(l.from(e) || this.createQuery()));
  }
  write(e, t) {
    return super.write(e, { ...t, writeLayerSchema: !0 });
  }
  clone() {
    throw new J(k, `CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(this.customParameters);
      return y(t) && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
  _verifyFields() {
  }
  _verifySource() {
  }
  _hasMemorySource() {
    return !1;
  }
};
i([o({ readOnly: !0, json: { read: !1, write: !1 } })], r.prototype, "capabilities", void 0), i([o({ type: [",", " ", ";", "|", "	"], json: { read: { source: "columnDelimiter" }, write: { target: "columnDelimiter", ignoreOrigin: !0 } } })], r.prototype, "delimiter", void 0), i([o({ readOnly: !0, type: Boolean, json: { origins: { "web-scene": { read: !1, write: !1 } } } })], r.prototype, "editingEnabled", void 0), i([o({ json: { read: { source: "layerDefinition.fields" }, write: { target: "layerDefinition.fields" } } })], r.prototype, "fields", void 0), i([o({ type: Boolean, readOnly: !0 })], r.prototype, "isTable", null), i([F("web-map", "labelsVisible", ["layerDefinition.drawingInfo.labelingInfo", "showLabels"])], r.prototype, "readWebMapLabelsVisible", null), i([o({ type: String, json: { read: { source: "locationInfo.latitudeFieldName" }, write: { target: "locationInfo.latitudeFieldName", ignoreOrigin: !0 } } })], r.prototype, "latitudeField", void 0), i([o({ type: ["show", "hide"] })], r.prototype, "listMode", void 0), i([o({ type: ["coordinates"], json: { read: { source: "locationInfo.locationType" }, write: { target: "locationInfo.locationType", ignoreOrigin: !0, isRequired: !0 } } })], r.prototype, "locationType", void 0), i([o({ type: String, json: { read: { source: "locationInfo.longitudeFieldName" }, write: { target: "locationInfo.longitudeFieldName", ignoreOrigin: !0 } } })], r.prototype, "longitudeField", void 0), i([o({ type: ["CSV"] })], r.prototype, "operationalLayerType", void 0), i([o()], r.prototype, "outFields", void 0), i([o({ type: String, json: { origins: { "web-scene": { read: !1, write: !1 } }, read: !1, write: !1 } })], r.prototype, "path", void 0), i([o({ json: { read: !1, write: !1, origins: { "web-document": { read: !1, write: !1 } } } })], r.prototype, "portalItem", void 0), i([o({ json: { read: !1 }, cast: null, type: h, readOnly: !0 })], r.prototype, "source", void 0), i([o({ json: { read: !1 }, value: "csv", readOnly: !0 })], r.prototype, "type", void 0), i([o({ json: { read: q, write: { isRequired: !0, ignoreOrigin: !0, writer: N } } })], r.prototype, "url", null), r = i([p("geoscene.layers.CSVLayer")], r);
const $ = r;
export {
  $ as default
};

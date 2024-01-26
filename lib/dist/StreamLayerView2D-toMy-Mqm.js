import { e as s, d as a, a as h, y as p, x as u, l as c, r as l } from "./index-j1oaLRcp.js";
import f from "./FeatureLayerView2D-38umVoIr.js";
import { e as v } from "./util-S-jvKCCd.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./enums-YM9SAu8u.js";
import "./LayerView-u7tKPPGO.js";
import "./schemaUtils-NQXxAz6-.js";
import "./Utils-Mkp4Julu.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./MaterialKey-tb9URCR8.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./MD5-ekk-4Jqp.js";
import "./popupUtils-GfxNYuRl.js";
import "./floorFilterUtils-HsstcPZ9.js";
import "./RefreshableLayerView-nMKrSELX.js";
function d(e, t) {
  if (c(e) && c(t))
    return null;
  const r = {};
  return l(t) && (r.geometry = t.toJSON()), l(e) && (r.where = e), r;
}
let o = class extends f {
  constructor() {
    super(...arguments), this._enabledDataReceived = !1, this.errorString = null, this.connectionStatus = "disconnected";
  }
  initialize() {
    this.handles.add([this.layer.watch("purgeOptions", () => this._update()), this.watch("suspended", (e) => {
      e ? this._proxy.pauseStream() : this._proxy.resumeStream();
    })]);
  }
  get connectionError() {
    if (this.errorString)
      return new p("stream-controller", this.errorString);
  }
  on(e, t) {
    e === "data-received" && (this._enabledDataReceived = !0, this._proxy.enableEvent("data-received", !0));
    const r = super.on(e, t), i = this;
    return { remove() {
      r.remove(), e === "data-received" && (i._proxy.closed || i.hasEventListener("data-received") || i._proxy.enableEvent("data-received", !1));
    } };
  }
  queryLatestObservations(e, t) {
    if (!(this.layer.timeInfo.endField || this.layer.timeInfo.startField))
      throw new p("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return this._proxy.queryLatestObservations(this._cleanUpQuery(e), t).then((r) => {
      const i = u.fromJSON(r);
      return i.features.forEach((n) => {
        n.layer = this.layer, n.sourceLayer = this.layer;
      }), i;
    });
  }
  detach() {
    super.detach(), this.connectionStatus = "disconnected";
  }
  _createClientOptions() {
    return { ...super._createClientOptions(), setProperty: (e) => {
      this.set(e.propertyName, e.value);
    } };
  }
  _createTileRendererHash(e) {
    const t = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression, this.layer.geometryDefinition))})`;
    return super._createTileRendererHash(e) + t;
  }
  async _createServiceOptions() {
    const e = this.layer, { objectIdField: t } = e, r = e.fields.map((y) => y.toJSON()), i = v(e.geometryType), n = e.timeInfo && e.timeInfo.toJSON() || null, m = e.spatialReference ? e.spatialReference.toJSON() : null;
    return { type: "stream", fields: r, geometryType: i, objectIdField: t, timeInfo: n, source: this.layer.parsedUrl, serviceFilter: d(this.layer.definitionExpression, this.layer.geometryDefinition), purgeOptions: this.layer.purgeOptions.toJSON(), enableDataReceived: this._enabledDataReceived, spatialReference: m, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, updateInterval: this.layer.updateInterval, customParameters: e.customParameters };
  }
};
s([a()], o.prototype, "errorString", void 0), s([a({ readOnly: !0 })], o.prototype, "connectionError", null), s([a()], o.prototype, "connectionStatus", void 0), o = s([h("geoscene.views.2d.layers.StreamLayerView2D")], o);
const U = o;
export {
  U as default
};

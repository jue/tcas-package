import { e as s, d as a, a as h, y as p, x as u, l as c, r as l } from "./index-Ek1MTSEY.js";
import f from "./FeatureLayerView2D-uPKEZCL1.js";
import { e as v } from "./util-_ClfQE9K.js";
import "vue";
import "./Container-zrthpNTa.js";
import "./enums-YM9SAu8u.js";
import "./LayerView-d-au0HlH.js";
import "./schemaUtils-U3wpMwz7.js";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./MD5-ekk-4Jqp.js";
import "./popupUtils-bYu52YBh.js";
import "./floorFilterUtils-HsstcPZ9.js";
import "./RefreshableLayerView-7pUptc3P.js";
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

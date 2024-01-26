import { a as s, b as n, A as h, c as y, l as m, H as d, dX as _, g as f } from "./index-HxXrdrYt.js";
import S from "./FeatureLayerView2D-oSWjsEcR.js";
import { e as g } from "./util-_Vbm8maX.js";
import "vue";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./LayerView-xItHBa3T.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./BitmapTileContainer-gQnm5fn6.js";
import "./Bitmap-EiCLkSAd.js";
import "./TileContainer-KY-TE4tX.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-IiDyiuVY.js";
import "./FeatureContainer-iNSNk881.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-r80YF5Ip.js";
import "./RefreshableLayerView-8Iw3yFgN.js";
const v = (e) => {
  let t = class extends e {
    resume() {
      this._isUserPaused = !1, this.suspended || this._doResume();
    }
    pause() {
      this._isUserPaused = !0, this.suspended || this._doPause();
    }
    constructor(...r) {
      super(...r), this._isUserPaused = !1, this.filter = null;
    }
    get connectionStatus() {
      return this._isUserPaused ? "paused" : this._streamConnectionStatus;
    }
    _onSuspendedChange(r) {
      r ? this._doPause() : this._isUserPaused || this._doResume();
    }
  };
  return s([n()], t.prototype, "_isUserPaused", void 0), s([n({ readOnly: !0 })], t.prototype, "connectionStatus", null), s([n({ type: h })], t.prototype, "filter", void 0), t = s([y("geoscene.layers.mixins.StreamLayerView")], t), t;
};
function c(e, t) {
  if (e == null && t == null)
    return null;
  const r = {};
  return t != null && (r.geometry = t.toJSON()), e != null && (r.where = e), r;
}
let o = class extends v(S) {
  constructor() {
    super(...arguments), this.pipelineConnectionStatus = "disconnected", this.pipelineErrorString = null, this._enabledEventTypes = /* @__PURE__ */ new Set();
  }
  initialize() {
    this.addHandles([m(() => this.layer.customParameters, (e) => this._proxy.updateCustomParameters(e)), this.layer.on("send-message-to-socket", (e) => this._proxy.sendMessageToSocket(e)), this.layer.on("send-message-to-client", (e) => this._proxy.sendMessageToClient(e)), m(() => this.layer.purgeOptions, () => this._update()), m(() => this.suspended, this._onSuspendedChange.bind(this))], "constructor");
  }
  get connectionError() {
    return this.pipelineErrorString ? new d("stream-controller", this.pipelineErrorString) : null;
  }
  on(e, t) {
    if (Array.isArray(e))
      return _(e.map((p) => this.on(p, t)));
    const r = ["data-received", "message-received"].includes(e);
    r && (this._enabledEventTypes.add(e), this._proxy.enableEvent(e, !0));
    const a = super.on(e, t), i = this;
    return { remove() {
      a.remove(), r && (i._proxy.closed || i.hasEventListener(e) || i._proxy.enableEvent(e, !1));
    } };
  }
  queryLatestObservations(e, t) {
    var r, a, i;
    if (!((r = this.layer.timeInfo) != null && r.endField || (a = this.layer.timeInfo) != null && a.startField || (i = this.layer.timeInfo) != null && i.trackIdField))
      throw new d("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return this._proxy.queryLatestObservations(this._cleanUpQuery(e), t).then((p) => {
      const l = f.fromJSON(p);
      return l.features.forEach((u) => {
        u.layer = this.layer, u.sourceLayer = this.layer;
      }), l;
    });
  }
  detach() {
    super.detach(), this.pipelineConnectionStatus = "disconnected";
  }
  get _streamConnectionStatus() {
    return this.pipelineConnectionStatus;
  }
  _doPause() {
    var e;
    (e = this._proxy) == null || e.pauseStream();
  }
  _doResume() {
    var e;
    (e = this._proxy) == null || e.resumeStream();
  }
  _createClientOptions() {
    return { ...super._createClientOptions(), setProperty: (e) => {
      this.set(e.propertyName, e.value);
    } };
  }
  _createTileRendererHash(e) {
    const t = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression, this.layer.geometryDefinition))})`;
    return super._createTileRendererHash(e) + t;
  }
  async _createServiceOptions() {
    const e = this.layer, { objectIdField: t } = e, r = e.fields.map((l) => l.toJSON()), a = g(e.geometryType), i = e.timeInfo && e.timeInfo.toJSON() || null, p = e.spatialReference ? e.spatialReference.toJSON() : null;
    return { type: "stream", isPaused: this._isUserPaused, fields: r, geometryType: a, objectIdField: t, timeInfo: i, source: this.layer.parsedUrl, serviceFilter: c(this.layer.definitionExpression, this.layer.geometryDefinition), purgeOptions: this.layer.purgeOptions.toJSON(), enabledEventTypes: Array.from(this._enabledEventTypes.values()), spatialReference: p, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, updateInterval: this.layer.updateInterval, customParameters: e.customParameters };
  }
};
s([n()], o.prototype, "pipelineConnectionStatus", void 0), s([n()], o.prototype, "pipelineErrorString", void 0), s([n({ readOnly: !0 })], o.prototype, "connectionError", null), s([n({ readOnly: !0 })], o.prototype, "_streamConnectionStatus", null), o = s([y("geoscene.views.2d.layers.StreamLayerView2D")], o);
const pe = o;
export {
  pe as default
};

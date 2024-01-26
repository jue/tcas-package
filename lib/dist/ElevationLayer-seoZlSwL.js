import { s as g, cV as _, eG as f, eH as w, r as d, bc as u, w as b, bR as $, bv as S, bw as T, bz as L, eI as x, y as I, bG as k, C as y, I as E, e as a, d as o, aE as D, eJ as V, bK as C, a as j, bE as M } from "./index-j1oaLRcp.js";
import { s as O } from "./ArcGISCachedService-GdK3CoP0.js";
import "vue";
import "./TilemapCache-0axZcxQ8.js";
const P = g.getLogger("geoscene.core.workers.WorkerHandle");
let A = class {
  constructor(e, t, s, n = {}) {
    this._mainMethod = t, this._listeners = [], this._promise = _(e, { ...n, schedule: s }).then((h) => {
      if (this._thread === void 0) {
        this._thread = h, this._promise = null, n.hasInitialize && this.broadcast({}, "initialize");
        for (const p of this._listeners)
          this._connectListener(p);
      } else
        h.close();
    }), this._promise.catch((h) => P.error(`Failed to initialize ${e} worker: ${h}`));
  }
  on(e, t) {
    const s = { removed: !1, eventName: e, callback: t, threadHandle: null };
    return this._listeners.push(s), this._connectListener(s), f(() => {
      s.removed = !0, w(this._listeners, s), this._thread && d(s.threadHandle) && s.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null;
  }
  invoke(e, t) {
    return this.invokeMethod(this._mainMethod, e, t);
  }
  invokeMethod(e, t, s) {
    if (this._thread) {
      const n = this.getTransferList(t, e);
      return this._thread.invoke(e, t, { transferList: n, signal: s });
    }
    return this._promise ? this._promise.then(() => (u(s), this.invokeMethod(e, t, s))) : Promise.reject(null);
  }
  broadcast(e, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e)).then(() => {
    }) : this._promise ? this._promise.then(() => this.broadcast(e, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e) {
    this._thread && this._thread.on(e.eventName, e.callback).then((t) => {
      e.removed || (e.threadHandle = t);
    });
  }
};
class m extends A {
  constructor(e = null) {
    super("LercWorker", "_decode", e, { strategy: "dedicated" }), this.schedule = e, this.ref = 0;
  }
  decode(e, t, s) {
    return e && e.byteLength !== 0 ? this.invoke({ buffer: e, options: t }, s) : Promise.resolve(null);
  }
  getTransferList(e) {
    return [e.buffer];
  }
  release() {
    --this.ref <= 0 && (c.forEach((e, t) => {
      e === this && c.delete(t);
    }), this.destroy());
  }
}
const c = /* @__PURE__ */ new Map();
function N(r = null) {
  let e = c.get(b(r));
  return e || (d(r) ? (e = new m((t) => r.schedule(t)), c.set(r, e)) : (e = new m(), c.set(null, e))), ++e.ref, e;
}
const v = g.getLogger("geoscene.layers.ElevationLayer");
let i = class extends O($(S(T(L(M))))) {
  constructor(...r) {
    super(...r), this.copyright = null, this.heightModelInfo = null, this.path = null, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = N();
  }
  normalizeCtorArgs(r, e) {
    return typeof r == "string" ? { url: r, ...e } : r;
  }
  destroy() {
    this._lercDecoder = x(this._lercDecoder);
  }
  set minScale(r) {
    this.constructed && v.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);
  }
  get minScale() {
  }
  set maxScale(r) {
    this.constructed && v.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);
  }
  get maxScale() {
  }
  readVersion(r, e) {
    let t = e.currentVersion;
    return t || (t = 9.3), t;
  }
  load(r) {
    const e = d(r) ? r.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: !1, validateItem: (t) => {
      for (let s = 0; s < t.typeKeywords.length; s++)
        if (t.typeKeywords[s].toLowerCase() === "elevation 3d layer")
          return !0;
      throw new I("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, r).catch(k).then(() => this._fetchImageService(e))), Promise.resolve(this);
  }
  fetchTile(r, e, t, s) {
    const n = d((s = s || { signal: null }).signal) ? s.signal : s.signal = new AbortController().signal, h = { responseType: "array-buffer", signal: n }, p = { noDataValue: s.noDataValue, returnFileInfo: !0 };
    return this.load().then(() => this._fetchTileAvailability(r, e, t, s)).then(() => y(this.getTileUrl(r, e, t), h)).then((l) => this._lercDecoder.decode(l.data, p, n)).then((l) => ({ values: l.pixelData, width: l.width, height: l.height, maxZError: l.fileInfo.maxZError, noDataValue: l.noDataValue, minValue: l.minValue, maxValue: l.maxValue }));
  }
  getTileUrl(r, e, t) {
    const s = !this.tilemapCache && this.supportsBlankTile, n = E({ ...this.parsedUrl.query, blankTile: !s && null });
    return `${this.parsedUrl.path}/tile/${r}/${e}/${t}${n ? "?" + n : ""}`;
  }
  async queryElevation(r, e) {
    const { ElevationQuery: t } = await import("./ElevationQuery-jJvitFmq.js");
    return u(e), new t().query(this, r, e);
  }
  async createElevationSampler(r, e) {
    const { ElevationQuery: t } = await import("./ElevationQuery-jJvitFmq.js");
    return u(e), new t().createSampler(this, r, e);
  }
  _fetchTileAvailability(r, e, t, s) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(r, e, t, s) : Promise.resolve("unknown");
  }
  async _fetchImageService(r) {
    if (this.sourceJSON)
      return this.sourceJSON;
    const e = { query: { f: "json", ...this.parsedUrl.query }, responseType: "json", signal: r }, t = await y(this.parsedUrl.path, e);
    t.ssl && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = t.data, this.read(t.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile.__isDefault__;
  }
};
a([o({ json: { read: { source: "copyrightText" } } })], i.prototype, "copyright", void 0), a([o({ readOnly: !0, type: V })], i.prototype, "heightModelInfo", void 0), a([o({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], i.prototype, "path", void 0), a([o({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), a([o({ json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], i.prototype, "minScale", null), a([o({ json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], i.prototype, "maxScale", null), a([o({ json: { read: !1, write: !1, origins: { "web-document": { read: !1, write: !1 } } } })], i.prototype, "opacity", void 0), a([o({ type: ["ArcGISTiledElevationServiceLayer"] })], i.prototype, "operationalLayerType", void 0), a([o()], i.prototype, "sourceJSON", void 0), a([o({ json: { read: !1 }, value: "elevation", readOnly: !0 })], i.prototype, "type", void 0), a([o(C)], i.prototype, "url", void 0), a([o()], i.prototype, "version", void 0), a([D("version", ["currentVersion"])], i.prototype, "readVersion", null), i = a([j("geoscene.layers.ElevationLayer")], i), i.prototype.fetchTile.__isDefault__ = !0;
const F = i;
export {
  F as default
};

import { e2 as _, e3 as x, e4 as c, r as y, M as b, e5 as v, j as h, e as r, d as l, c7 as k, e6 as L, aE as p, a as f, W as F, bt as O, bF as j, bu as $, bv as M, bw as I, bz as K, e7 as C, m as g, U as N, bG as P, bD as R, bK as T, bE as z } from "./index-j1oaLRcp.js";
import { j as H, S as m, g as S, d as w } from "./kmlUtils-TZvirNpK.js";
import "vue";
var u;
let o = u = class extends _.EventedMixin(x(F)) {
  constructor() {
    super(...arguments), this._sublayersHandles = null, this.description = null, this.id = null, this.networkLink = null, this.title = null, this.sourceJSON = null, this.fullExtent = null;
  }
  initialize() {
    c(() => this.networkLink).then(() => c(() => this.visible === !0)).then(() => this.load());
  }
  load(e) {
    if (!this.networkLink || this.networkLink.viewFormat)
      return;
    const s = y(e) ? e.signal : null, t = this._fetchService(this._get("networkLink").href, s).then((a) => {
      const n = H(a.sublayers);
      this.fullExtent = b.fromJSON(n), this.sourceJSON = a;
      const d = v(h.ofType(u), m(u, a));
      this.sublayers ? this.sublayers.addMany(d) : this.sublayers = d, this.layer.emit("sublayer-update"), this.layer && this.layer.notifyChange("visibleSublayers");
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
  set sublayers(e) {
    const s = this._get("sublayers");
    s && (s.forEach((t) => {
      t.parent = null, t.layer = null;
    }), this._sublayersHandles.forEach((t) => t.remove()), this._sublayersHandles = null), e && (e.forEach((t) => {
      t.parent = this, t.layer = this.layer;
    }), this._sublayersHandles = [e.on("after-add", ({ item: t }) => {
      t.parent = this, t.layer = this.layer;
    }), e.on("after-remove", ({ item: t }) => {
      t.parent = null, t.layer = null;
    })]), this._set("sublayers", e);
  }
  castSublayers(e) {
    return v(h.ofType(u), e);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e) {
    this._get("visible") !== e && (this._set("visible", e), this.layer && this.layer.notifyChange("visibleSublayers"));
  }
  readVisible(e, s) {
    return !!s.visibility;
  }
  set layer(e) {
    this._set("layer", e), this.sublayers && this.sublayers.forEach((s) => s.layer = e);
  }
  _fetchService(e, s) {
    return S(e, this.layer.outSpatialReference, this.layer.refreshInterval, s).then((t) => w(t.data));
  }
};
r([l()], o.prototype, "description", void 0), r([l()], o.prototype, "id", void 0), r([l({ readOnly: !0, value: null })], o.prototype, "networkLink", void 0), r([l({ json: { write: { allowNull: !0 } } })], o.prototype, "parent", void 0), r([l({ value: null, json: { write: { allowNull: !0 } } })], o.prototype, "sublayers", null), r([k("sublayers")], o.prototype, "castSublayers", null), r([l({ value: null, json: { read: { source: "name", reader: (e) => L(e) } } })], o.prototype, "title", void 0), r([l({ value: !0 })], o.prototype, "visible", null), r([p("visible", ["visibility"])], o.prototype, "readVisible", null), r([l()], o.prototype, "sourceJSON", void 0), r([l({ value: null })], o.prototype, "layer", null), r([l({ type: b })], o.prototype, "fullExtent", void 0), o = u = r([f("geoscene.layers.support.KMLSublayer")], o);
const E = o, J = ["kml", "xml"];
let i = class extends O(j($(M(I(K(z)))))) {
  constructor(...e) {
    super(...e), this._visibleFolders = [], this.allSublayers = new C({ getCollections: () => [this.sublayers], getChildrenFunction: (s) => s.sublayers }), this.outSpatialReference = g.WGS84, this.path = null, this.legendEnabled = !1, this.operationalLayerType = "KML", this.sublayers = null, this.type = "kml", this.url = null;
  }
  initialize() {
    this.watch("sublayers", (e, s) => {
      s && s.forEach((t) => {
        t.parent = null, t.layer = null;
      }), e && e.forEach((t) => {
        t.parent = this, t.layer = this;
      });
    }, !0), this.on("sublayer-update", () => this.notifyChange("fullExtent"));
  }
  normalizeCtorArgs(e, s) {
    return typeof e == "string" ? { url: e, ...s } : e;
  }
  readSublayersFromItemOrWebMap(e, s) {
    this._visibleFolders = s.visibleFolders;
  }
  readSublayers(e, s, t) {
    return m(E, s, t, this._visibleFolders);
  }
  writeSublayers(e, s) {
    const t = [], a = e.toArray();
    for (; a.length; ) {
      const n = a[0];
      n.networkLink || (n.visible && t.push(n.id), n.sublayers && a.push(...n.sublayers.toArray())), a.shift();
    }
    s.visibleFolders = t;
  }
  get title() {
    const e = this._get("title");
    return e && this.originOf("title") !== "defaults" ? e : this.url ? N(this.url, J) || "KML" : e || "";
  }
  set title(e) {
    this._set("title", e);
  }
  get visibleSublayers() {
    const e = this.sublayers, s = [], t = (a) => {
      a.visible && (s.push(a), a.sublayers && a.sublayers.forEach(t));
    };
    return e && e.forEach(t), s;
  }
  get fullExtent() {
    return this._recomputeFullExtent();
  }
  load(e) {
    const s = y(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["KML"] }, e).catch(P).then(() => this._fetchService(s))), Promise.resolve(this);
  }
  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }
  async _fetchService(e) {
    const s = await Promise.resolve().then(() => this.resourceInfo ? { ssl: !1, data: this.resourceInfo } : S(this.url, this.outSpatialReference, this.refreshInterval, e)), t = w(s.data);
    t && this.read(t, { origin: "service" });
  }
  _recomputeFullExtent() {
    let e = null;
    y(this.extent) && (e = this.extent.clone());
    const s = (t) => {
      if (t.sublayers)
        for (const a of t.sublayers.items)
          s(a), a.visible && a.fullExtent && (y(e) ? e.union(a.fullExtent) : e = a.fullExtent.clone());
    };
    return s(this), e;
  }
};
r([l({ readOnly: !0 })], i.prototype, "allSublayers", void 0), r([l({ type: g })], i.prototype, "outSpatialReference", void 0), r([l({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], i.prototype, "path", void 0), r([l({ readOnly: !0, json: { read: !1, write: !1 } })], i.prototype, "legendEnabled", void 0), r([l({ type: ["show", "hide", "hide-children"] })], i.prototype, "listMode", void 0), r([l({ type: ["KML"] })], i.prototype, "operationalLayerType", void 0), r([l({})], i.prototype, "resourceInfo", void 0), r([l({ type: h.ofType(E), json: { write: { ignoreOrigin: !0 } } })], i.prototype, "sublayers", void 0), r([p(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], i.prototype, "readSublayersFromItemOrWebMap", null), r([p("service", "sublayers", ["sublayers"])], i.prototype, "readSublayers", null), r([R("sublayers")], i.prototype, "writeSublayers", null), r([l({ readOnly: !0, json: { read: !1 } })], i.prototype, "type", void 0), r([l({ json: { origins: { "web-map": { read: { source: "title" } } }, write: { ignoreOrigin: !0 } } })], i.prototype, "title", null), r([l(T)], i.prototype, "url", void 0), r([l({ readOnly: !0 })], i.prototype, "visibleSublayers", null), r([l({ type: b })], i.prototype, "extent", void 0), r([l()], i.prototype, "fullExtent", null), i = r([f("geoscene.layers.KMLLayer")], i);
const U = i;
export {
  U as default
};

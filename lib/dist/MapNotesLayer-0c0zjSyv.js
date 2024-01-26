import { bY as I, e as o, d as s, a as $, bP as R, bM as D, bO as x, bZ as _, bt as j, bu as P, bv as G, bw as F, bz as z, m as h, j as N, b_ as k, S as v, M as J, b as B, l as b, y as W, r as L, a3 as A, J as Y, ah as Q, af as V, Q as Z, Y as q, V as H, b$ as C, aE as f, bD as K, c0 as U, bE as X } from "./index-j1oaLRcp.js";
import { n as ee } from "./objectIdUtils-4qzxZdBC.js";
import "vue";
function O(t) {
  return t.layers.some((e) => e.layerDefinition.visibilityField != null);
}
const M = new I({ name: "OBJECTID", alias: "OBJECTID", type: "oid", nullable: !1, editable: !1 }), te = new I({ name: "title", alias: "Title", type: "string", nullable: !0, editable: !0 });
let g = class extends U {
  constructor() {
    super(...arguments), this.visibilityMode = "inherited";
  }
  initialize() {
    for (const t of this.graphics)
      t.sourceLayer = this.layer;
    this.graphics.on("after-add", (t) => {
      t.item.sourceLayer = this.layer;
    }), this.graphics.on("after-remove", (t) => {
      t.item.sourceLayer = null;
    });
  }
  get sublayers() {
    return this.graphics;
  }
};
o([s({ readOnly: !0 })], g.prototype, "sublayers", null), o([s()], g.prototype, "layer", void 0), o([s({ readOnly: !0 })], g.prototype, "visibilityMode", void 0), g = o([$("geoscene.layers.MapNotesLayer.MapNotesSublayer")], g);
const T = [{ geometryType: "polygon", geometryTypeJSON: "esriGeometryPolygon", layerId: "polygonLayer", title: "Polygons", identifyingSymbol: new R().toJSON() }, { geometryType: "polyline", geometryTypeJSON: "esriGeometryPolyline", layerId: "polylineLayer", title: "Polylines", identifyingSymbol: new D().toJSON() }, { geometryType: "multipoint", geometryTypeJSON: "esriGeometryMultipoint", layerId: "multipointLayer", title: "Multipoints", identifyingSymbol: new x().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", layerId: "pointLayer", title: "Points", identifyingSymbol: new x().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", layerId: "textLayer", title: "Text", identifyingSymbol: new _().toJSON() }];
let a = class extends j(P(G(F(z(X))))) {
  constructor(t) {
    super(t), this.capabilities = { operations: { supportsMapNotesEditing: !0 } }, this.featureCollections = null, this.featureCollectionJSON = null, this.featureCollectionType = "notes", this.legendEnabled = !1, this.minScale = 0, this.maxScale = 0, this.spatialReference = h.WGS84, this.sublayers = new N(T.map((e) => new g({ id: e.layerId, title: e.title, layer: this }))), this.title = "Map Notes", this.type = "map-notes", this.visibilityMode = "inherited";
  }
  readCapabilities(t, e, r) {
    return { operations: { supportsMapNotesEditing: !O(e) && (r == null ? void 0 : r.origin) !== "portal-item" } };
  }
  readFeatureCollections(t, e, r) {
    if (!O(e))
      return null;
    const i = e.layers.map((l) => {
      const n = new k();
      return n.read(l, r), n;
    });
    return new N({ items: i });
  }
  readLegacyfeatureCollectionJSON(t, e) {
    return O(e) ? v(e.featureCollection) : null;
  }
  readFullExtent(t, e) {
    if (!e.layers.length || e.layers.every((i) => !i.layerDefinition.extent))
      return new J({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: h.WGS84 });
    const r = h.fromJSON(e.layers[0].layerDefinition.spatialReference);
    return e.layers.reduce((i, l) => {
      const n = l.layerDefinition.extent;
      return n ? J.fromJSON(n).union(i) : i;
    }, new J({ spatialReference: r }));
  }
  readMinScale(t, e) {
    for (const r of e.layers)
      if (r.layerDefinition.minScale != null)
        return r.layerDefinition.minScale;
    return 0;
  }
  readMaxScale(t, e) {
    for (const r of e.layers)
      if (r.layerDefinition.maxScale != null)
        return r.layerDefinition.maxScale;
    return 0;
  }
  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }
  get pointLayer() {
    return this._findSublayer("pointLayer");
  }
  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }
  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }
  readSpatialReference(t, e) {
    return e.layers.length ? h.fromJSON(e.layers[0].layerDefinition.spatialReference) : h.WGS84;
  }
  readSublayers(t, e, r) {
    if (O(e))
      return null;
    const i = [];
    for (let n = 0; n < e.layers.length; n++) {
      var l;
      const { layerDefinition: y, featureSet: p } = e.layers[n], m = (l = y.geometryType) != null ? l : p.geometryType, c = T.find((u) => {
        var d, S, w;
        return m === u.geometryTypeJSON && ((d = y.drawingInfo) == null || (S = d.renderer) == null || (w = S.symbol) == null ? void 0 : w.type) === u.identifyingSymbol.type;
      });
      if (c) {
        const u = new g({ id: c.layerId, title: y.name, layer: this, graphics: p.features.map(({ geometry: d, symbol: S, attributes: w, popupInfo: E }) => B.fromJSON({ attributes: w, geometry: d, symbol: S, popupTemplate: E })) });
        i.push(u);
      }
    }
    return new N(i);
  }
  writeSublayers(t, e, r, i) {
    const { minScale: l, maxScale: n } = this;
    if (b(t))
      return;
    const y = t.some((u) => u.graphics.length > 0);
    if (!this.capabilities.operations.supportsMapNotesEditing) {
      var p;
      y && (i == null || (p = i.messages) == null || p.push(new W("map-notes-layer:editing-not-supported", "New map notes cannot be added to this layer")));
      return;
    }
    const m = [];
    let c = this.spatialReference.toJSON();
    e:
      for (const u of t)
        for (const d of u.graphics)
          if (L(d.geometry)) {
            c = d.geometry.spatialReference.toJSON();
            break e;
          }
    for (const u of T) {
      const d = t.find((S) => u.layerId === S.id);
      this._writeMapNoteSublayer(m, d, u, l, n, c, i);
    }
    A("featureCollection.layers", m, e);
  }
  get textLayer() {
    return this._findSublayer("textLayer");
  }
  load(t) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, t)), Promise.resolve(this);
  }
  read(t, e) {
    "featureCollection" in t && (t = v(t), Object.assign(t, t.featureCollection)), super.read(t, e);
  }
  async beforeSave() {
    if (b(this.sublayers))
      return;
    let t = null;
    const e = [];
    for (const i of this.sublayers)
      for (const l of i.graphics)
        if (L(l.geometry)) {
          const n = l.geometry;
          t ? Y(n.spatialReference, t) || (Q(n.spatialReference, t) || V() || await Z(), l.geometry = q(n, t)) : t = n.spatialReference, e.push(l);
        }
    const r = await H(e.map((i) => i.geometry));
    e.forEach((i, l) => i.geometry = r[l]);
  }
  _findSublayer(t) {
    var e, r;
    return b(this.sublayers) ? null : (e = (r = this.sublayers) == null ? void 0 : r.find((i) => i.id === t)) != null ? e : null;
  }
  _writeMapNoteSublayer(t, e, r, i, l, n, y) {
    const p = [];
    if (!b(e)) {
      for (const m of e.graphics)
        this._writeMapNote(p, m, r.geometryType, y);
      this._normalizeObjectIds(p, M), t.push({ layerDefinition: { name: e.title, drawingInfo: { renderer: { type: "simple", symbol: v(r.identifyingSymbol) } }, geometryType: r.geometryTypeJSON, minScale: i, maxScale: l, objectIdField: "OBJECTID", fields: [M.toJSON(), te.toJSON()], spatialReference: n }, featureSet: { features: p, geometryType: r.geometryTypeJSON } });
    }
  }
  _writeMapNote(t, e, r, i) {
    if (b(e))
      return;
    const { geometry: l, symbol: n, popupTemplate: y } = e;
    if (b(l))
      return;
    var p, m;
    if (l.type !== r)
      return void (i == null || (p = i.messages) == null || p.push(new C("map-notes-layer:invalid-geometry-type", `Geometry "${l.type}" cannot be saved in "${r}" layer`, { graphic: e })));
    if (b(n))
      return void (i == null || (m = i.messages) == null || m.push(new C("map-notes-layer:no-symbol", "Skipping map notes with no symbol", { graphic: e })));
    const c = { attributes: { ...e.attributes }, geometry: l.toJSON(), symbol: n.toJSON() };
    L(y) && (c.popupInfo = y.toJSON()), t.push(c);
  }
  _normalizeObjectIds(t, e) {
    const r = e.name;
    let i = ee(r, t) + 1;
    const l = /* @__PURE__ */ new Set();
    for (const n of t) {
      n.attributes || (n.attributes = {});
      const { attributes: y } = n;
      (y[r] == null || l.has(y[r])) && (y[r] = i++), l.add(y[r]);
    }
  }
};
o([s({ readOnly: !0 })], a.prototype, "capabilities", void 0), o([f(["portal-item", "web-map"], "capabilities", ["layers"])], a.prototype, "readCapabilities", null), o([s({ readOnly: !0 })], a.prototype, "featureCollections", void 0), o([f(["web-map", "portal-item"], "featureCollections", ["layers"])], a.prototype, "readFeatureCollections", null), o([s({ readOnly: !0, json: { origins: { "web-map": { write: { enabled: !0, target: "featureCollection" } } } } })], a.prototype, "featureCollectionJSON", void 0), o([f(["web-map", "portal-item"], "featureCollectionJSON", ["featureCollection"])], a.prototype, "readLegacyfeatureCollectionJSON", null), o([s({ readOnly: !0, json: { read: !1, write: { enabled: !0, ignoreOrigin: !0 } } })], a.prototype, "featureCollectionType", void 0), o([s({ json: { write: !1 } })], a.prototype, "fullExtent", void 0), o([f(["web-map", "portal-item"], "fullExtent", ["layers"])], a.prototype, "readFullExtent", null), o([s({ readOnly: !0, json: { origins: { "web-map": { write: { target: "featureCollection.showLegend", overridePolicy() {
  return { enabled: this.featureCollectionJSON != null };
} } } } } })], a.prototype, "legendEnabled", void 0), o([s({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), o([s({ type: Number, nonNullable: !0, json: { write: !1 } })], a.prototype, "minScale", void 0), o([f(["web-map", "portal-item"], "minScale", ["layers"])], a.prototype, "readMinScale", null), o([s({ type: Number, nonNullable: !0, json: { write: !1 } })], a.prototype, "maxScale", void 0), o([f(["web-map", "portal-item"], "maxScale", ["layers"])], a.prototype, "readMaxScale", null), o([s({ readOnly: !0 })], a.prototype, "multipointLayer", null), o([s({ value: "ArcGISFeatureLayer", type: ["ArcGISFeatureLayer"] })], a.prototype, "operationalLayerType", void 0), o([s({ readOnly: !0 })], a.prototype, "pointLayer", null), o([s({ readOnly: !0 })], a.prototype, "polygonLayer", null), o([s({ readOnly: !0 })], a.prototype, "polylineLayer", null), o([s({ type: h })], a.prototype, "spatialReference", void 0), o([f(["web-map", "portal-item"], "spatialReference", ["layers"])], a.prototype, "readSpatialReference", null), o([s({ readOnly: !0, json: { origins: { "web-map": { write: { ignoreOrigin: !0 } } } } })], a.prototype, "sublayers", void 0), o([f("web-map", "sublayers", ["layers"])], a.prototype, "readSublayers", null), o([K("web-map", "sublayers")], a.prototype, "writeSublayers", null), o([s({ readOnly: !0 })], a.prototype, "textLayer", null), o([s()], a.prototype, "title", void 0), o([s({ readOnly: !0, json: { read: !1 } })], a.prototype, "type", void 0), a = o([$("geoscene.layers.MapNotesLayer")], a);
const ie = a;
export {
  ie as default
};

import { c1 as C, b1 as W, a as u, b as c, i1 as K, dI as X, aC as N, a9 as Y, cQ as ee, c as M, bk as Q, g0 as te, m as A, bl as re, cU as se, fd as ie, ae as ne, b3 as oe, M as ae, w as le, H as T, V as ue, R as U, fP as pe, cy as L, fz as ye, aE as V, z as ce, i2 as fe, T as he, ey as de } from "./index-HxXrdrYt.js";
import { i as me, r as ge } from "./scaleUtils-T4Kp2ufH.js";
import { n as _ } from "./floorFilterUtils-EbR9s7nP.js";
import { b as be } from "./normalizeUtils--xHzoVSe.js";
import { f as we, s as ve, i as xe } from "./utils-ZpixBail.js";
import { n as $e } from "./sublayerUtils-HD1T8Okk.js";
import { n as Se, p as Re } from "./popupUtils-r80YF5Ip.js";
function I(e, t) {
  return t ? "xoffset" in t && t.xoffset ? Math.max(e, Math.abs(t.xoffset)) : "yoffset" in t && t.yoffset ? Math.max(e, Math.abs(t.yoffset || 0)) : e : e;
}
function Fe(e) {
  let t = 0, s = 0;
  for (let i = 0; i < e.length; i++) {
    const r = e[i].size;
    typeof r == "number" && (t += r, s++);
  }
  return t / s;
}
function z(e, t) {
  return typeof e == "number" ? e : e && e.stops && e.stops.length ? Fe(e.stops) : t;
}
function Oe(e, t) {
  if (!t)
    return e;
  const s = t.filter((o) => o.type === "size").map((o) => {
    const { maxSize: a, minSize: y } = o;
    return (z(a, e) + z(y, e)) / 2;
  });
  let i = 0;
  const r = s.length;
  if (r === 0)
    return e;
  for (let o = 0; o < r; o++)
    i += s[o];
  const n = Math.floor(i / r);
  return Math.max(n, e);
}
function H(e) {
  var r;
  const t = e && e.renderer, s = (e && e.event && e.event.pointerType) === "touch" ? 9 : 6;
  if (!t)
    return s;
  const i = "visualVariables" in t ? Oe(s, t.visualVariables) : s;
  if (t.type === "simple")
    return I(i, t.symbol);
  if (t.type === "unique-value") {
    let n = i;
    return (r = t.uniqueValueInfos) == null || r.forEach((o) => {
      n = I(n, o.symbol);
    }), n;
  }
  if (t.type === "class-breaks") {
    let n = i;
    return t.classBreakInfos.forEach((o) => {
      n = I(n, o.symbol);
    }), n;
  }
  return t.type === "dot-density" || t.type, i;
}
const J = (e) => e.spatialReference.wkid || JSON.stringify(e.spatialReference);
function je(e, t) {
  const { dpi: s, gdbVersion: i, geometry: r, geometryPrecision: n, height: o, layerOption: a, mapExtent: y, maxAllowableOffset: l, returnFieldName: p, returnGeometry: f, returnUnformattedValues: h, returnZ: R, spatialReference: x, timeExtent: $, tolerance: m, width: F } = e.toJSON(), { dynamicLayers: b, layerDefs: w, layerIds: v } = Ee(e), E = t && t.geometry != null ? t.geometry : null, g = { geometryPrecision: n, maxAllowableOffset: l, returnFieldName: p, returnGeometry: f, returnUnformattedValues: h, returnZ: R, tolerance: m }, O = E && E.toJSON() || r;
  if (g.imageDisplay = `${F},${o},${s}`, i && (g.gdbVersion = i), O && (delete O.spatialReference, g.geometry = JSON.stringify(O), g.geometryType = C(O)), x ? g.sr = x.wkid || JSON.stringify(x) : O && O.spatialReference ? g.sr = J(O) : y && y.spatialReference && (g.sr = J(y)), g.time = $ ? [$.start, $.end].join(",") : null, y) {
    const { xmin: q, ymin: B, xmax: D, ymax: Z } = y;
    g.mapExtent = `${q},${B},${D},${Z}`;
  }
  return w && (g.layerDefs = w), b && !w && (g.dynamicLayers = b), g.layers = a === "popup" ? "visible" : a, v && !b && (g.layers += `:${v.join(",")}`), g;
}
function Ee(e) {
  var x, $;
  const { mapExtent: t, floors: s, width: i, sublayers: r, layerIds: n, layerOption: o, gdbVersion: a } = e, y = ($ = (x = r == null ? void 0 : r.find((m) => m.layer != null)) == null ? void 0 : x.layer) == null ? void 0 : $.serviceSublayers, l = o === "popup", p = {}, f = me({ extent: t, width: i, spatialReference: t == null ? void 0 : t.spatialReference }), h = [], R = (m) => {
    const F = f === 0, b = m.minScale === 0 || f <= m.minScale, w = m.maxScale === 0 || f >= m.maxScale;
    if (m.visible && (F || b && w))
      if (m.sublayers)
        m.sublayers.forEach(R);
      else {
        if ((n == null ? void 0 : n.includes(m.id)) === !1 || l && (!m.popupTemplate || !m.popupEnabled))
          return;
        h.unshift(m);
      }
  };
  if (r == null || r.forEach(R), r && !h.length)
    p.layerIds = [];
  else {
    const m = $e(h, y, a), F = h.map((b) => {
      const w = _(s, b);
      return b.toExportImageJSON(w);
    });
    if (m)
      p.dynamicLayers = JSON.stringify(F);
    else {
      if (r) {
        let w = h.map(({ id: v }) => v);
        n && (w = w.filter((v) => n.includes(v))), p.layerIds = w;
      } else
        n != null && n.length && (p.layerIds = n);
      const b = Ne(s, h);
      if (b != null && b.length) {
        const w = {};
        for (const v of b)
          v.definitionExpression && (w[v.id] = v.definitionExpression);
        Object.keys(w).length && (p.layerDefs = JSON.stringify(w));
      }
    }
  }
  return p;
}
function Ne(e, t) {
  const s = !!(e != null && e.length), i = t.filter((r) => r.definitionExpression != null || s && r.floorInfo != null);
  return i.length ? i.map((r) => {
    const n = _(e, r), o = W(n, r.definitionExpression);
    return { id: r.id, definitionExpression: o ?? void 0 };
  }) : null;
}
var G;
let d = G = class extends Q {
  static from(e) {
    return te(G, e);
  }
  constructor(e) {
    super(e), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = !0, this.returnGeometry = !1, this.returnM = !1, this.returnUnformattedValues = !0, this.returnZ = !1, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
};
u([c({ type: Number, json: { write: !0 } })], d.prototype, "dpi", void 0), u([c()], d.prototype, "floors", void 0), u([c({ type: String, json: { write: !0 } })], d.prototype, "gdbVersion", void 0), u([c({ types: K, json: { read: X, write: !0 } })], d.prototype, "geometry", void 0), u([c({ type: Number, json: { write: !0 } })], d.prototype, "geometryPrecision", void 0), u([c({ type: Number, json: { write: !0 } })], d.prototype, "height", void 0), u([c({ type: [Number], json: { write: !0 } })], d.prototype, "layerIds", void 0), u([c({ type: ["top", "visible", "all", "popup"], json: { write: !0 } })], d.prototype, "layerOption", void 0), u([c({ type: N, json: { write: !0 } })], d.prototype, "mapExtent", void 0), u([c({ type: Number, json: { write: !0 } })], d.prototype, "maxAllowableOffset", void 0), u([c({ type: Boolean, json: { write: !0 } })], d.prototype, "returnFieldName", void 0), u([c({ type: Boolean, json: { write: !0 } })], d.prototype, "returnGeometry", void 0), u([c({ type: Boolean, json: { write: !0 } })], d.prototype, "returnM", void 0), u([c({ type: Boolean, json: { write: !0 } })], d.prototype, "returnUnformattedValues", void 0), u([c({ type: Boolean, json: { write: !0 } })], d.prototype, "returnZ", void 0), u([c({ type: Y, json: { write: !0 } })], d.prototype, "spatialReference", void 0), u([c()], d.prototype, "sublayers", void 0), u([c({ type: ee, json: { write: !0 } })], d.prototype, "timeExtent", void 0), u([c({ type: Number, json: { write: !0 } })], d.prototype, "tolerance", void 0), u([c({ type: Number, json: { write: !0 } })], d.prototype, "width", void 0), d = G = u([M("geoscene.rest.support.IdentifyParameters")], d);
const k = d;
let S = class extends Q {
  constructor(e) {
    super(e), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(e, t) {
    return A.fromJSON({ attributes: { ...t.attributes }, geometry: { ...t.geometry } });
  }
  writeFeature(e, t) {
    if (!e)
      return;
    const { attributes: s, geometry: i } = e;
    s && (t.attributes = { ...s }), i != null && (t.geometry = i.toJSON(), t.geometryType = ie.toJSON(i.type));
  }
};
u([c({ type: String, json: { write: !0 } })], S.prototype, "displayFieldName", void 0), u([c({ type: A })], S.prototype, "feature", void 0), u([re("feature", ["attributes", "geometry"])], S.prototype, "readFeature", null), u([se("feature")], S.prototype, "writeFeature", null), u([c({ type: Number, json: { write: !0 } })], S.prototype, "layerId", void 0), u([c({ type: String, json: { write: !0 } })], S.prototype, "layerName", void 0), S = u([M("geoscene.rest.support.IdentifyResult")], S);
const Ie = S;
async function Pe(e, t, s) {
  const i = (t = Ge(t)).geometry ? [t.geometry] : [], r = we(e);
  return r.path += "/identify", be(i).then((n) => {
    const o = je(t, { geometry: n && n[0] }), a = ve({ ...r.query, f: "json", ...o }), y = xe(a, s);
    return ne(r.path, y).then(Ve).then((l) => Me(l, t.sublayers));
  });
}
function Ve(e) {
  const t = e.data;
  return t.results = t.results || [], t.exceededTransferLimit = !!t.exceededTransferLimit, t.results = t.results.map((s) => Ie.fromJSON(s)), t;
}
function Ge(e) {
  return e = k.from(e);
}
function Me(e, t) {
  if (!(t != null && t.length))
    return e;
  const s = /* @__PURE__ */ new Map();
  function i(r) {
    s.set(r.id, r), r.sublayers && r.sublayers.forEach(i);
  }
  t.forEach(i);
  for (const r of e.results)
    r.feature.sourceLayer = s.get(r.layerId);
  return e;
}
let P = null;
function Be(e, t) {
  return t.type === "tile" || t.type === "map-image";
}
let j = class extends oe {
  constructor(e) {
    super(e), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = ae(async (t) => {
      this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(() => {
      }));
    });
  }
  initialize() {
    const e = (t) => {
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t).catch(() => {
      })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([le(() => this.highlightGraphics, "change", (t) => e(t.added), { onListenerAdd: (t) => e(t) })]);
  }
  async fetchPopupFeatures(e, t) {
    var o, a;
    const { layerView: { layer: s, view: { scale: i } } } = this;
    if (!e)
      throw new T("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: s });
    const r = Ae(s.sublayers, i, t);
    if (!r.length)
      return [];
    const n = await Te(s, r);
    if (!((((a = (o = s.capabilities) == null ? void 0 : o.operations) == null ? void 0 : a.supportsIdentify) ?? !0) && s.version >= 10.5) && !n)
      throw new T("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: s });
    return n ? this._fetchPopupFeaturesUsingQueries(e, r, t) : this._fetchPopupFeaturesUsingIdentify(e, r, t);
  }
  clearHighlights() {
    var e;
    (e = this.highlightGraphics) == null || e.removeAll();
  }
  highlight(e) {
    const t = this.highlightGraphics;
    if (!t)
      return { remove() {
      } };
    let s = null;
    if (e instanceof A ? s = [e] : ue.isCollection(e) && e.length > 0 ? s = e.toArray() : Array.isArray(e) && e.length > 0 && (s = e), s = s == null ? void 0 : s.filter(U), !s || !s.length)
      return pe();
    for (const i of s) {
      const r = i.sourceLayer;
      r != null && "geometryType" in r && r.geometryType === "point" && (i.visible = !1);
    }
    return t.addMany(s), { remove: () => {
      t.removeMany(s ?? []);
    } };
  }
  async _updateHighlightedFeaturesSymbols(e) {
    const { layerView: { view: t }, highlightGraphics: s, highlightGraphicUpdated: i } = this;
    if (s && i)
      for (const r of e) {
        const n = r.sourceLayer && "renderer" in r.sourceLayer && r.sourceLayer.renderer;
        r.sourceLayer && "geometryType" in r.sourceLayer && r.sourceLayer.geometryType === "point" && n && "getSymbolAsync" in n && n.getSymbolAsync(r).then(async (o) => {
          var l;
          o || (o = new L());
          let a = null;
          const y = "visualVariables" in n ? (l = n.visualVariables) == null ? void 0 : l.find((p) => p.type === "size") : void 0;
          y && (P || (P = (await import("./index-HxXrdrYt.js").then((p) => p.lD)).getSize), a = P(y, r, { view: t.type, scale: t.scale, shape: o.type === "simple-marker" ? o.style : null })), a || (a = "width" in o && "height" in o && o.width != null && o.height != null ? Math.max(o.width, o.height) : "size" in o ? o.size : 16), s.includes(r) && (r.symbol = new L({ style: "square", size: a, xoffset: "xoffset" in o ? o.xoffset : 0, yoffset: "yoffset" in o ? o.yoffset : 0 }), i(r, "symbol"), r.visible = !0);
        });
      }
  }
  async _updateHighlightedFeaturesGeometries(e) {
    const { layerView: { layer: t, view: s }, highlightGraphics: i, highlightGraphicUpdated: r } = this;
    if (this._highlightGeometriesResolution = e, !r || !(i != null && i.length) || !t.capabilities.operations.supportsQuery)
      return;
    const n = this._getTargetResolution(e), o = /* @__PURE__ */ new Map();
    for (const l of i)
      if (!this._featuresResolutions.has(l) || this._featuresResolutions.get(l) > n) {
        const p = l.sourceLayer;
        ye(o, p, () => /* @__PURE__ */ new Map()).set(l.getObjectId(), l);
      }
    const a = Array.from(o, ([l, p]) => {
      const f = l.createQuery();
      return f.objectIds = [...p.keys()], f.outFields = [l.objectIdField], f.returnGeometry = !0, f.maxAllowableOffset = n, f.outSpatialReference = s.spatialReference, l.queryFeatures(f);
    }), y = await Promise.all(a);
    if (!this.destroyed)
      for (const { features: l } of y)
        for (const p of l) {
          const f = p.sourceLayer, h = o.get(f).get(p.getObjectId());
          h && i.includes(h) && (h.geometry = p.geometry, r(h, "geometry"), this._featuresResolutions.set(h, n));
        }
  }
  _getTargetResolution(e) {
    const t = e * V(this.layerView.view.spatialReference), s = t / 16;
    return s <= 10 ? 0 : e / t * s;
  }
  async _fetchPopupFeaturesUsingIdentify(e, t, s) {
    const i = await this._createIdentifyParameters(e, t, s);
    if (i == null)
      return [];
    const { results: r } = await Pe(this.layerView.layer.parsedUrl, i);
    return r.map((n) => n.feature);
  }
  async _createIdentifyParameters(e, t, s) {
    const { floors: i, layer: r, timeExtent: n, view: { spatialReference: o, scale: a } } = this.layerView, y = s != null ? s.event : null;
    if (!t.length)
      return null;
    await Promise.all(t.map(({ sublayer: x }) => x.load().catch(() => {
    })));
    const l = Math.min(ce("mapservice-popup-identify-max-tolerance"), r.allSublayers.reduce((x, $) => $.renderer ? H({ renderer: $.renderer, event: y }) : x, 2)), p = this.createFetchPopupFeaturesQueryGeometry(e, l), f = ge(a, o), h = Math.round(p.width / f), R = new N({ xmin: p.center.x - f * h, ymin: p.center.y - f * h, xmax: p.center.x + f * h, ymax: p.center.y + f * h, spatialReference: p.spatialReference });
    return new k({ floors: i, gdbVersion: "gdbVersion" in r ? r.gdbVersion : void 0, geometry: e, height: h, layerOption: "popup", mapExtent: R, returnGeometry: !0, spatialReference: o, sublayers: r.sublayers, timeExtent: n, tolerance: l, width: h });
  }
  async _fetchPopupFeaturesUsingQueries(e, t, s) {
    const { layerView: { floors: i, timeExtent: r } } = this, n = s != null ? s.event : null, o = t.map(async ({ sublayer: a, popupTemplate: y }) => {
      var v;
      if (await a.load().catch(() => {
      }), a.capabilities && !a.capabilities.operations.supportsQuery)
        return [];
      const l = a.createQuery(), p = H({ renderer: a.renderer, event: n }), f = this.createFetchPopupFeaturesQueryGeometry(e, p), h = /* @__PURE__ */ new Set(), [R] = await Promise.all([Se(a, y), (v = a.renderer) == null ? void 0 : v.collectRequiredFields(h, a.fieldsIndex)]);
      fe(h, a.fieldsIndex, R);
      const x = Array.from(h).sort();
      if (l.geometry = f, l.outFields = x, l.timeExtent = r, i) {
        const E = i.clone(), g = _(E, a);
        g != null && (l.where = l.where ? `(${l.where}) AND (${g})` : g);
      }
      const $ = this._getTargetResolution(f.width / p), m = await _e(y), F = a.geometryType === "point" || m && m.arcadeUtils.hasGeometryOperations(y);
      F || (l.maxAllowableOffset = $);
      let { features: b } = await a.queryFeatures(l);
      const w = F ? 0 : $;
      b = await Ue(a, b);
      for (const E of b)
        this._featuresResolutions.set(E, w);
      return b;
    });
    return (await he(o)).reverse().reduce((a, y) => y.value ? [...a, ...y.value] : a, []).filter(U);
  }
};
function Ae(e, t, s) {
  const i = [], r = (n) => {
    const o = n.minScale === 0 || t <= n.minScale, a = n.maxScale === 0 || t >= n.maxScale;
    if (n.visible && o && a) {
      if (n.sublayers)
        n.sublayers.forEach(r);
      else if (n.popupEnabled) {
        const y = Re(n, { ...s, defaultPopupTemplateEnabled: !1 });
        y != null && i.unshift({ sublayer: n, popupTemplate: y });
      }
    }
  };
  return ((e == null ? void 0 : e.toArray()) ?? []).reverse().map(r), i;
}
function _e(e) {
  var t;
  return (t = e.expressionInfos) != null && t.length || Array.isArray(e.content) && e.content.some((s) => s.type === "expression") ? de() : Promise.resolve();
}
async function Te(e, t) {
  var s, i;
  if ((i = (s = e.capabilities) == null ? void 0 : s.operations) != null && i.supportsQuery)
    return !0;
  try {
    return await Promise.any(t.map(({ sublayer: r }) => r.load().then(() => r.capabilities.operations.supportsQuery)));
  } catch {
    return !1;
  }
}
async function Ue(e, t) {
  const s = e.renderer;
  return s && "defaultSymbol" in s && !s.defaultSymbol && (t = s.valueExpression ? await Promise.all(t.map((i) => s.getSymbolAsync(i).then((r) => r ? i : null))).then((i) => i.filter((r) => r != null)) : t.filter((i) => s.getSymbol(i) != null)), t;
}
u([c({ constructOnly: !0 })], j.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), u([c({ constructOnly: !0 })], j.prototype, "layerView", void 0), u([c({ constructOnly: !0 })], j.prototype, "highlightGraphics", void 0), u([c({ constructOnly: !0 })], j.prototype, "highlightGraphicUpdated", void 0), u([c({ constructOnly: !0 })], j.prototype, "updatingHandles", void 0), j = u([M("geoscene.views.layers.support.MapService")], j);
function De(e, t, s, i = new N()) {
  let r = 0;
  if (s.type === "2d")
    r = t * (s.resolution ?? 0);
  else if (s.type === "3d") {
    const p = s.overlayPixelSizeInMapUnits(e), f = s.basemapSpatialReference;
    r = f == null || f.equals(s.spatialReference) ? t * p : V(f) / V(s.spatialReference);
  }
  const n = e.x - r, o = e.y - r, a = e.x + r, y = e.y + r, { spatialReference: l } = s;
  return i.xmin = Math.min(n, a), i.ymin = Math.min(o, y), i.xmax = Math.max(n, a), i.ymax = Math.max(o, y), i.spatialReference = l, i;
}
new N();
export {
  Be as S,
  j as U,
  De as r
};

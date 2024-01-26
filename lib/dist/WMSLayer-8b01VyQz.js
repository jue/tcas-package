import { e as a, d as l, aE as I, c7 as Ee, a as ce, fc as Se, u as Ne, M as F, e5 as Ie, j as J, y as Oe, m as O, R as Re, l as Ue, D as Fe, aw as $e, bt as Le, bQ as Ae, bF as _e, bu as Me, bv as Pe, bw as Te, bz as qe, e7 as je, r as W, bG as Ce, C as ee, ap as Ve, B as Be, b as We, fd as De, J as ke, e9 as Ge, aq as te, S as He, bD as D, bJ as Xe, bW as Je, bK as Qe, bE as ze, fe as Ye } from "./index-j1oaLRcp.js";
import { r as re } from "./scaleUtils-pO3ETIVl.js";
import { o as H } from "./crsUtils-ID083j2U.js";
import { l as ne } from "./ExportWMSImageParameters-ut-3qPuG.js";
import "vue";
var q;
let Ke = 0, h = q = class extends Se {
  constructor(e) {
    super(e), this._sublayersHandles = new Ne(), this.dimensions = null, this.fullExtents = null, this.featureInfoFormat = null, this.featureInfoUrl = null, this.legendUrl = null, this.legendEnabled = !0, this.maxScale = 0, this.minScale = 0, this.popupEnabled = !1, this.queryable = !1, this.spatialReferences = null;
  }
  get description() {
    return this._get("description");
  }
  set description(e) {
    this._set("description", e);
  }
  get fullExtent() {
    return this._get("fullExtent");
  }
  set fullExtent(e) {
    this._set("fullExtent", e);
  }
  readExtent(e, t) {
    return (e = t.extent) ? F.fromJSON(e) : null;
  }
  get id() {
    const e = this._get("id");
    return e ?? Ke++;
  }
  set id(e) {
    this._set("id", e);
  }
  readLegendUrl(e, t) {
    return t ? t.legendUrl || t.legendURL : null;
  }
  set layer(e) {
    this._set("layer", e), this.sublayers && this.sublayers.forEach((t) => t.layer = e);
  }
  get effectiveScaleRange() {
    const { minScale: e, maxScale: t } = this;
    return { minScale: e, maxScale: t };
  }
  get name() {
    return this._get("name");
  }
  set name(e) {
    this._set("name", e);
  }
  set sublayers(e) {
    const t = this._get("sublayers");
    t && (t.forEach((r) => {
      r.layer = null;
    }), this._sublayersHandles.removeAll(), this._sublayersHandles = null), e && (e.forEach((r) => {
      r.parent = this, r.layer = this.layer;
    }), this._sublayersHandles.add([e.on("after-add", ({ item: r }) => {
      r.parent = this, r.layer = this.layer;
    }), e.on("after-remove", ({ item: r }) => {
      r.parent = null, r.layer = null;
    })])), this._set("sublayers", e);
  }
  castSublayers(e) {
    return Ie(J.ofType(q), e);
  }
  get title() {
    return this._get("title");
  }
  set title(e) {
    this._set("title", e);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e) {
    this._setAndNotifyLayer("visible", e);
  }
  clone() {
    const e = new q();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent.clone()), this.hasOwnProperty("fullExtents") && (e.fullExtents = this.fullExtents.map((t) => t.clone())), this.hasOwnProperty("featureInfoFormat") && (e.featureInfoFormat = this.featureInfoFormat), this.hasOwnProperty("featureInfoUrl") && (e.featureInfoUrl = this.featureInfoUrl), this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl), this.hasOwnProperty("legendEnabled") && (e.legendEnabled = this.legendEnabled), this.hasOwnProperty("layer") && (e.layer = this.layer), this.hasOwnProperty("name") && (e.name = this.name), this.hasOwnProperty("parent") && (e.parent = this.parent), this.hasOwnProperty("queryable") && (e.queryable = this.queryable), this.hasOwnProperty("sublayers") && (e.sublayers = this.sublayers && this.sublayers.map((t) => t.clone())), this.hasOwnProperty("spatialReferences") && (e.spatialReferences = this.spatialReferences.map((t) => t)), this.hasOwnProperty("visible") && (e.visible = this.visible), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
  _setAndNotifyLayer(e, t) {
    const r = this.layer;
    this._get(e) !== t && (this._set(e, t), r && r.emit("wms-sublayer-update", { propertyName: e, id: this.id }));
  }
};
a([l()], h.prototype, "description", null), a([l({ readOnly: !0 })], h.prototype, "dimensions", void 0), a([l({ value: null })], h.prototype, "fullExtent", null), a([I("fullExtent", ["extent"])], h.prototype, "readExtent", null), a([l()], h.prototype, "fullExtents", void 0), a([l()], h.prototype, "featureInfoFormat", void 0), a([l()], h.prototype, "featureInfoUrl", void 0), a([l({ type: Number, json: { write: { enabled: !1, overridePolicy: () => ({ ignoreOrigin: !0, enabled: !0 }) } } })], h.prototype, "id", null), a([l({ type: String, json: { origins: { "web-document": { read: { source: ["legendUrl", "legendURL"] }, write: { target: "legendUrl", ignoreOrigin: !0 } } }, read: { source: "legendURL" }, write: { ignoreOrigin: !0 } } })], h.prototype, "legendUrl", void 0), a([I(["web-document"], "legendUrl")], h.prototype, "readLegendUrl", null), a([l({ value: !0, type: Boolean, json: { read: { source: "showLegend" }, write: { target: "showLegend" }, origins: { "web-map": { read: !1, write: !1 }, "web-scene": { read: !1, write: !1 } } } })], h.prototype, "legendEnabled", void 0), a([l({ value: null })], h.prototype, "layer", null), a([l()], h.prototype, "maxScale", void 0), a([l()], h.prototype, "minScale", void 0), a([l({ readOnly: !0 })], h.prototype, "effectiveScaleRange", null), a([l({ type: String, value: null, json: { read: { source: "name" }, write: { ignoreOrigin: !0 } } })], h.prototype, "name", null), a([l()], h.prototype, "parent", void 0), a([l({ type: Boolean, json: { read: { source: "showPopup" }, write: { ignoreOrigin: !0, target: "showPopup" } } })], h.prototype, "popupEnabled", void 0), a([l({ type: Boolean, json: { write: { ignoreOrigin: !0 } } })], h.prototype, "queryable", void 0), a([l()], h.prototype, "sublayers", null), a([Ee("sublayers")], h.prototype, "castSublayers", null), a([l({ type: [Number], json: { read: { source: "spatialReferences" } } })], h.prototype, "spatialReferences", void 0), a([l({ type: String, value: null, json: { write: { ignoreOrigin: !0 } } })], h.prototype, "title", null), a([l({ type: Boolean, value: !0, json: { read: { source: "defaultVisibility" } } })], h.prototype, "visible", null), h = q = a([ce("geoscene.layers.support.WMSSublayer")], h);
const X = h, T = { 84: 4326, 83: 4269, 27: 4267 };
function Ze(e) {
  if (!e)
    return null;
  const t = { idCounter: -1 };
  typeof e == "string" && (e = new DOMParser().parseFromString(e, "text/xml"));
  const r = e.documentElement;
  if (r.nodeName === "ServiceExceptionReport") {
    const g = Array.prototype.slice.call(r.childNodes).map((v) => v.textContent).join(`\r
`);
    throw new Oe("wmslayer:wms-capabilities-xml-is-not-valid", "The server returned errors when the WMS capabilities were requested.", g);
  }
  const n = x("Capability", r), s = x("Service", r), u = x("Request", n);
  if (!n || !s || !u)
    return null;
  const i = x("Layer", n);
  if (!i)
    return null;
  const d = r.nodeName === "WMS_Capabilities" || r.nodeName === "WMT_MS_Capabilities" ? r.getAttribute("version") : "1.3.0", b = E("Title", s, "") || E("Name", s, ""), o = E("AccessConstraints", s, ""), m = E("Abstract", s, ""), y = parseInt(E("MaxWidth", s, "5000"), 10), c = parseInt(E("MaxHeight", s, "5000"), 10), w = ie(u, "GetMap"), S = se(u, "GetMap"), f = _(i, d, t);
  let R, $ = 0;
  if (Array.prototype.slice.call(n.childNodes).forEach((g) => {
    g.nodeName === "Layer" && ($ === 0 ? R = g : ($ === 1 && f.name && (f.name = "", f.sublayers.push(_(R, d, t))), f.sublayers.push(_(g, d, t))), $++);
  }), !f)
    return null;
  let N, M;
  const ge = f.fullExtents;
  if (N = f.sublayers, N || (N = []), N.length === 0 && N.push(f), M = f.extent, !M) {
    const g = new F(N[0].extent);
    f.extent = g.toJSON(), M = f.extent;
  }
  const be = f.spatialReferences.length > 0 ? f.spatialReferences : me(f), Q = se(u, "GetFeatureInfo");
  let P;
  if (Q) {
    const g = ie(u, "GetFeatureInfo");
    g.indexOf("text/html") > -1 ? P = "text/html" : g.indexOf("text/plain") > -1 && (P = "text/plain");
  }
  if (!P) {
    const g = function(v) {
      v && (v.queryable = !1, v.sublayers && v.sublayers.forEach((V) => {
        g(V);
      }));
    };
    g(f);
  }
  const z = ye(N), xe = f.minScale || 0, we = f.maxScale || 0, Y = f.dimensions, ve = z.reduce((g, v) => g.concat(v.dimensions), []), K = Y.concat(ve).filter(fe);
  let Z = null;
  if (K.length > 0) {
    let g = Number.POSITIVE_INFINITY, v = Number.NEGATIVE_INFINITY;
    K.forEach((V) => {
      const { extent: B } = V;
      rt(B) ? B.forEach((L) => {
        g = Math.min(g, L.getTime()), v = Math.max(v, L.getTime());
      }) : B.forEach((L) => {
        g = Math.min(g, L.min.getTime()), v = Math.max(v, L.max.getTime());
      });
    }), Z = { startTimeField: null, endTimeField: null, trackIdField: null, timeExtent: [g, v] };
  }
  return { copyright: o, description: m, dimensions: Y, extent: M, fullExtents: ge, featureInfoFormat: P, featureInfoUrl: Q, mapUrl: S, maxWidth: y, maxHeight: c, maxScale: we, minScale: xe, layers: z, spatialReferences: be, supportedImageFormatTypes: w, timeInfo: Z, title: b, version: d };
}
function et(e) {
  return e.length ? e.filter((t) => t.popupEnabled && t.name && t.queryable).map((t) => t.name).join(",") : "";
}
function me(e) {
  if (e.spatialReferences.length > 0)
    return e.spatialReferences;
  if (e.sublayers)
    for (const t of e.sublayers) {
      const r = me(t);
      if (r.length > 0)
        return r;
    }
  return [];
}
function ye(e) {
  let t = [];
  return e.forEach((r) => {
    t.push(r), r.sublayers && r.sublayers.length && (t = t.concat(ye(r.sublayers)), delete r.sublayers);
  }), t;
}
function j(e, t, r) {
  var n;
  return (n = t.getAttribute(e)) != null ? n : r;
}
function tt(e, t, r, n) {
  const s = x(e, r);
  return s ? j(t, s, n) : n;
}
function x(e, t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const n = t.childNodes[r];
    if (he(n) && n.nodeName === e)
      return n;
  }
  return null;
}
function C(e, t) {
  const r = [];
  for (let n = 0; n < t.childNodes.length; n++) {
    const s = t.childNodes[n];
    he(s) && s.nodeName === e && r.push(s);
  }
  return r;
}
function E(e, t, r) {
  const n = x(e, t);
  return n ? n.textContent : r;
}
function A(e, t, r) {
  if (!e)
    return null;
  const n = parseFloat(e.getAttribute("minx")), s = parseFloat(e.getAttribute("miny")), u = parseFloat(e.getAttribute("maxx")), i = parseFloat(e.getAttribute("maxy"));
  let d, b, o, m;
  r ? (d = isNaN(s) ? -Number.MAX_VALUE : s, b = isNaN(n) ? -Number.MAX_VALUE : n, o = isNaN(i) ? Number.MAX_VALUE : i, m = isNaN(u) ? Number.MAX_VALUE : u) : (d = isNaN(n) ? -Number.MAX_VALUE : n, b = isNaN(s) ? -Number.MAX_VALUE : s, o = isNaN(u) ? Number.MAX_VALUE : u, m = isNaN(i) ? Number.MAX_VALUE : i);
  const y = new O({ wkid: t });
  return new F({ xmin: d, ymin: b, xmax: o, ymax: m, spatialReference: y });
}
function se(e, t) {
  const r = x(t, e);
  if (r) {
    const n = x("DCPType", r);
    if (n) {
      const s = x("HTTP", n);
      if (s) {
        const u = x("Get", s);
        if (u) {
          let i = tt("OnlineResource", "xlink:href", u, null);
          if (i)
            return i.indexOf("&") === i.length - 1 && (i = i.substring(0, i.length - 1)), st(i, ["service", "request"]);
        }
      }
    }
  }
  return null;
}
function ie(e, t) {
  const r = C("Operation", e);
  if (r.length === 0)
    return C("Format", x(t, e)).map((s) => s.textContent);
  const n = [];
  return r.forEach((s) => {
    s.getAttribute("name") === t && C("Format", s).forEach((u) => {
      n.push(u.textContent);
    });
  }), n;
}
function ae(e, t, r) {
  const n = x(t, e);
  if (!n)
    return r;
  const { textContent: s } = n;
  if (s == null || s === "")
    return r;
  const u = Number(s);
  return isNaN(u) ? r : u;
}
function _(e, t, r) {
  var n;
  if (!e)
    return null;
  const s = { id: r.idCounter++, fullExtents: [], parentLayerId: null, queryable: e.getAttribute("queryable") === "1", spatialReferences: [], sublayers: null }, u = x("LatLonBoundingBox", e), i = x("EX_GeographicBoundingBox", e);
  let d = null;
  u && (d = A(u, 4326)), i && (d = new F(0, 0, 0, 0, new O({ wkid: 4326 })), d.xmin = parseFloat(E("westBoundLongitude", i, "0")), d.ymin = parseFloat(E("southBoundLatitude", i, "0")), d.xmax = parseFloat(E("eastBoundLongitude", i, "0")), d.ymax = parseFloat(E("northBoundLatitude", i, "0"))), u || i || (d = new F(-180, -90, 180, 90, new O({ wkid: 4326 }))), s.minScale = ae(e, "MaxScaleDenominator", 0), s.maxScale = ae(e, "MinScaleDenominator", 0);
  const b = ["1.0.0", "1.1.0", "1.1.1"].indexOf(t) > -1 ? "SRS" : "CRS";
  return Array.prototype.slice.call(e.childNodes).forEach((o) => {
    if (o.nodeName === "Name")
      s.name = o.textContent || "";
    else if (o.nodeName === "Title")
      s.title = o.textContent || "";
    else if (o.nodeName === "Abstract")
      s.description = o.textContent || "";
    else if (o.nodeName === "BoundingBox") {
      const m = o.getAttribute(b);
      if (m && m.indexOf("EPSG:") === 0) {
        const c = parseInt(m.substring(5), 10);
        c === 0 || isNaN(c) || d || (d = t === "1.3.0" ? A(o, c, H(c)) : A(o, c));
      }
      const y = m && m.indexOf(":");
      if (y && y > -1) {
        let c = parseInt(m.substring(y + 1, m.length), 10);
        c === 0 || isNaN(c) || (c = T[c] ? T[c] : c);
        const w = t === "1.3.0" ? A(o, c, H(c)) : A(o, c);
        s.fullExtents.push(w);
      }
    } else if (o.nodeName === b)
      o.textContent.split(" ").forEach((m) => {
        const y = m.includes(":") ? parseInt(m.split(":")[1], 10) : parseInt(m, 10);
        if (y !== 0 && !isNaN(y)) {
          const c = T[y] ? T[y] : y;
          s.spatialReferences.includes(c) || s.spatialReferences.push(c);
        }
      });
    else if (o.nodeName !== "Style" || s.legendURL) {
      if (o.nodeName === "Layer") {
        const m = _(o, t, r);
        m && (m.parentLayerId = s.id, s.sublayers || (s.sublayers = []), s.sublayers.push(m));
      }
    } else {
      const m = x("LegendURL", o);
      if (m) {
        const y = x("OnlineResource", m);
        y && (s.legendURL = y.getAttribute("xlink:href"));
      }
    }
  }), s.extent = (n = d) == null ? void 0 : n.toJSON(), s.dimensions = C("Dimension", e).filter((o) => o.getAttribute("name") && o.getAttribute("units") && o.textContent).map((o) => {
    const m = o.getAttribute("name"), y = o.getAttribute("units"), c = o.textContent, w = o.getAttribute("unitSymbol"), S = o.getAttribute("default"), f = j("default", o, "0") !== "0", R = j("nearestValue", o, "0") !== "0", $ = j("current", o, "0") !== "0";
    return fe({ name: m, units: y }) ? { name: "time", units: "ISO8601", extent: ue(c), default: ue(S), multipleValues: f, nearestValue: R, current: $ } : nt({ name: m, units: y }) ? { name: "elevation", units: y, extent: oe(c), unitSymbol: w, default: oe(S), multipleValues: f, nearestValue: R } : { name: m, units: y, extent: le(c), unitSymbol: w, default: le(S), multipleValues: f, nearestValue: R };
  }), s;
}
function rt(e) {
  return Array.isArray(e) && e.length > 0 && e[0] instanceof Date;
}
function he(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function nt(e) {
  return /^elevation$/i.test(e.name) && /^(epsg|crs):\d+$/i.test(e.units);
}
function fe(e) {
  return /^time$/i.test(e.name) && /^iso8601$/i.test(e.units);
}
function st(e, t) {
  const r = [], n = Re(e);
  for (const s in n.query)
    n.query.hasOwnProperty(s) && t.indexOf(s.toLowerCase()) === -1 && r.push(s + "=" + n.query[s]);
  return n.path + (r.length ? "?" + r.join("&") : "");
}
function oe(e) {
  if (!e)
    return null;
  const t = e.indexOf("/") !== -1, r = e.split(",");
  return t ? r.map((n) => {
    const s = n.split("/");
    return s.length < 2 ? null : { min: parseFloat(s[0]), max: parseFloat(s[1]), resolution: s.length >= 3 && s[2] !== "0" ? parseFloat(s[2]) : void 0 };
  }).filter((n) => n) : r.map((n) => parseFloat(n));
}
function le(e) {
  if (!e)
    return null;
  const t = e.indexOf("/") !== -1, r = e.split(",");
  return t ? r.map((n) => {
    const s = n.split("/");
    return s.length < 2 ? null : { min: s[0], max: s[1], resolution: s.length >= 3 && s[2] !== "0" ? s[2] : void 0 };
  }).filter((n) => n) : r;
}
function ue(e) {
  if (!e)
    return null;
  const t = e.indexOf("/") !== -1, r = e.split(",");
  return t ? r.map((n) => {
    const s = n.split("/");
    return s.length < 2 ? null : { min: new Date(s[0]), max: new Date(s[1]), resolution: s.length >= 3 && s[2] !== "0" ? it(s[2]) : void 0 };
  }).filter((n) => n) : r.map((n) => new Date(n));
}
function it(e) {
  const t = /(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i, r = e.match(t);
  return r ? { years: U(r[1]), months: U(r[2]), days: U(r[3]), hours: U(r[4]), minutes: U(r[5]), seconds: U(r[6]) } : null;
}
function U(e) {
  if (!e)
    return 0;
  const t = /(?:\d+(?:.|,)\d+|\d+)/, r = e.match(t);
  if (!r)
    return 0;
  const n = r[0].replace(",", ".");
  return Number(n);
}
function k(e) {
  return e.toISOString().replace(/\.[0-9]{3}/, "");
}
const pe = /* @__PURE__ */ new Set([102100, 3857, 102113, 900913]), at = /* @__PURE__ */ new Set([3395, 54004]);
function ot(e, t) {
  let r = e.wkid;
  return Ue(t) ? r : (!t.includes(r) && e.latestWkid && (r = e.latestWkid), pe.has(r) ? t.find((n) => pe.has(n)) || t.find((n) => at.has(n)) || 102100 : r);
}
const G = new Fe({ bmp: "image/bmp", gif: "image/gif", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml" }, { ignoreUnknown: !1 });
let p = class extends $e(Le(Ae(_e(Me(Pe(Te(qe(ze)))))))) {
  constructor(...e) {
    super(...e), this.allSublayers = new je({ getCollections: () => [this.sublayers], getChildrenFunction: (t) => t.sublayers }), this.customParameters = null, this.customLayerParameters = null, this.copyright = null, this.description = null, this.dimensions = null, this.fullExtent = null, this.fullExtents = null, this.featureInfoFormat = null, this.featureInfoUrl = null, this.imageFormat = null, this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = !0, this.legendEnabled = !0, this.mapUrl = null, this.isReference = null, this.operationalLayerType = "WMS", this.spatialReference = null, this.spatialReferences = null, this.sublayers = null, this.type = "wms", this.url = null, this.version = null, this.watch("sublayers", (t, r) => {
      if (r) {
        for (const n of r)
          n.layer = null;
        this.handles.remove("wms-sublayer");
      }
      if (t) {
        for (const n of t)
          n.parent = this, n.layer = this;
        this.handles.add([t.on("after-add", ({ item: n }) => {
          n.parent = this, n.layer = this;
        }), t.on("after-remove", ({ item: n }) => {
          n.parent = null, n.layer = null;
        })], "wms-sublayer");
      }
    }, !0);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = W(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMS"] }, e).catch(Ce).then(() => this._fetchService(t))), Promise.resolve(this);
  }
  readFullExtentFromItemOrMap(e, t) {
    const r = t.extent;
    return new F({ xmin: r[0][0], ymin: r[0][1], xmax: r[1][0], ymax: r[1][1] });
  }
  writeFullExtent(e, t) {
    t.extent = [[e.xmin, e.ymin], [e.xmax, e.ymax]];
  }
  readImageFormat(e, t) {
    const r = t.supportedImageFormatTypes;
    return r && r.indexOf("image/png") > -1 ? "image/png" : r && r[0];
  }
  readSpatialReferenceFromItemOrDocument(e, t) {
    return new O(t.spatialReferences[0]);
  }
  writeSpatialReferences(e, t) {
    const r = this.spatialReference && this.spatialReference.wkid;
    e && r ? (t.spatialReferences = e.filter((n) => n !== r), t.spatialReferences.unshift(r)) : t.spatialReferences = e;
  }
  readSublayersFromItemOrMap(e, t, r) {
    return de(t.layers, r, t.visibleLayers);
  }
  readSublayers(e, t, r) {
    return de(t.layers, r);
  }
  writeSublayers(e, t, r, n) {
    t.layers = [];
    const s = /* @__PURE__ */ new Map(), u = e.flatten(({ sublayers: i }) => i && i.toArray()).toArray();
    u.forEach((i) => {
      typeof i.parent.id == "number" && (s.has(i.parent.id) ? s.get(i.parent.id).push(i.id) : s.set(i.parent.id, [i.id]));
    }), u.forEach((i) => {
      const d = { sublayer: i, ...n }, b = i.write({ parentLayerId: typeof i.parent.id == "number" ? i.parent.id : -1 }, d);
      if (s.has(i.id) && (b.sublayerIds = s.get(i.id)), !i.sublayers && i.name) {
        const o = i.write({}, d);
        delete o.id, t.layers.push(o);
      }
    }), t.visibleLayers = u.filter((i) => i.visible && !i.sublayers).map((i) => i.name);
  }
  createExportImageParameters(e, t, r, n) {
    const s = n && n.pixelRatio || 1, u = re({ extent: e, width: t }) * s, i = new ne({ layer: this, scale: u }), { xmin: d, ymin: b, xmax: o, ymax: m, spatialReference: y } = e, c = ot(y, this.spatialReferences), w = this.version === "1.3.0" && H(c) ? `${b},${d},${m},${o}` : `${d},${b},${o},${m}`, S = i.toJSON();
    return { bbox: w, [this.version === "1.3.0" ? "crs" : "srs"]: isNaN(c) ? void 0 : "EPSG:" + c, ...S };
  }
  async fetchImage(e, t, r, n) {
    var s, u;
    const i = this.mapUrl, d = this.createExportImageParameters(e, t, r, n);
    if (!d.layers) {
      const c = document.createElement("canvas");
      return c.width = t, c.height = r, c;
    }
    const b = n == null || (s = n.timeExtent) == null ? void 0 : s.start, o = n == null || (u = n.timeExtent) == null ? void 0 : u.end, m = W(b) && W(o) ? b.getTime() === o.getTime() ? k(b) : `${k(b)}/${k(o)}` : void 0, y = { responseType: "image", query: this._mixCustomParameters({ width: t, height: r, ...d, time: m, ...this.refreshParameters }), signal: n == null ? void 0 : n.signal };
    return ee(i, y).then((c) => c.data);
  }
  fetchFeatureInfo(e, t, r, n, s) {
    const u = re({ extent: e, width: t }), i = new ne({ layer: this, scale: u }), d = et(i.visibleSublayers);
    if (!this.featureInfoUrl || !d)
      return null;
    const b = this.version === "1.3.0" ? { I: n, J: s } : { x: n, y: s }, o = { query_layers: d, request: "GetFeatureInfo", info_format: this.featureInfoFormat, feature_count: 25, width: t, height: r, ...b }, m = { ...this.createExportImageParameters(e, t, r), ...o }, y = this._mixCustomParameters(m), c = Ve(this.featureInfoUrl, y), w = document.createElement("iframe");
    w.src = c, w.style.border = "none", w.style.margin = "0", w.style.width = "100%", w.setAttribute("sandbox", "");
    const S = new Be({ title: this.title, content: w });
    return new We({ sourceLayer: this, popupTemplate: S });
  }
  findSublayerById(e) {
    return this.allSublayers.find((t) => t.id === e);
  }
  findSublayerByName(e) {
    return this.allSublayers.find((t) => t.name === e);
  }
  serviceSupportsSpatialReference(e) {
    return De(this.url) || this.spatialReferences.some((t) => {
      const r = t === 900913 ? O.WebMercator : new O({ wkid: t });
      return ke(r, e);
    });
  }
  async _fetchService(e) {
    if (!this.resourceInfo) {
      this.parsedUrl.query && this.parsedUrl.query.service && (this.parsedUrl.query.SERVICE = this.parsedUrl.query.service, delete this.parsedUrl.query.service), this.parsedUrl.query && this.parsedUrl.query.request && (this.parsedUrl.query.REQUEST = this.parsedUrl.query.request, delete this.parsedUrl.query.request);
      const t = await ee(this.parsedUrl.path, { query: { SERVICE: "WMS", REQUEST: "GetCapabilities", ...this.parsedUrl.query, ...this.customParameters }, responseType: "xml", signal: e });
      this.resourceInfo = Ze(t.data);
    }
    if (this.parsedUrl) {
      const t = new Ge(this.parsedUrl.path);
      t.scheme !== "https" || t.port && t.port !== "443" || te.request.httpsDomains.indexOf(t.host) !== -1 || te.request.httpsDomains.push(t.host);
    }
    this.read(this.resourceInfo, { origin: "service" });
  }
  _mixCustomParameters(e) {
    if (!this.customLayerParameters && !this.customParameters)
      return e;
    const t = { ...this.customParameters, ...this.customLayerParameters };
    for (const r in t)
      e[r.toLowerCase()] = t[r];
    return e;
  }
};
function lt(e, t) {
  return e.some((r) => {
    for (const n in r)
      if (Ye(r, n, null, t))
        return !0;
    return !1;
  });
}
function de(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  e.every((u) => u.id == null) && (e = He(e)).forEach((u, i) => u.id = i);
  for (const u of e) {
    const i = new X();
    i.read(u, t), (r == null ? void 0 : r.indexOf(i.name)) === -1 && (i.visible = !1), n.set(i.id, i);
  }
  const s = [];
  for (const u of e) {
    const i = n.get(u.id);
    if (u.parentLayerId != null && u.parentLayerId >= 0) {
      const d = n.get(u.parentLayerId);
      d.sublayers || (d.sublayers = new J()), d.sublayers.unshift(i);
    } else
      s.unshift(i);
  }
  return s;
}
a([l({ readOnly: !0 })], p.prototype, "allSublayers", void 0), a([l({ json: { type: Object, write: !0 } })], p.prototype, "customParameters", void 0), a([l({ json: { type: Object, write: !0 } })], p.prototype, "customLayerParameters", void 0), a([l({ type: String, json: { write: !0 } })], p.prototype, "copyright", void 0), a([l()], p.prototype, "description", void 0), a([l({ readOnly: !0 })], p.prototype, "dimensions", void 0), a([l({ json: { type: [[Number]], read: { source: "extent" }, write: { target: "extent" }, origins: { "web-document": { write: { ignoreOrigin: !0 } }, "portal-item": { write: { ignoreOrigin: !0 } } } } })], p.prototype, "fullExtent", void 0), a([I(["web-document", "portal-item"], "fullExtent", ["extent"])], p.prototype, "readFullExtentFromItemOrMap", null), a([D(["web-document", "portal-item"], "fullExtent", { extent: { type: [[Number]] } })], p.prototype, "writeFullExtent", null), a([l()], p.prototype, "fullExtents", void 0), a([l({ type: String, json: { write: { ignoreOrigin: !0 } } })], p.prototype, "featureInfoFormat", void 0), a([l({ type: String, json: { write: { ignoreOrigin: !0 } } })], p.prototype, "featureInfoUrl", void 0), a([l({ type: String, json: { origins: { "web-document": { default: "image/png", type: G.jsonValues, read: { reader: G.read, source: "format" }, write: { writer: G.write, target: "format" } } } } })], p.prototype, "imageFormat", void 0), a([I("imageFormat", ["supportedImageFormatTypes"])], p.prototype, "readImageFormat", null), a([l({ type: Number, json: { read: { source: "maxHeight" }, write: { target: "maxHeight" } } })], p.prototype, "imageMaxHeight", void 0), a([l({ type: Number, json: { read: { source: "maxWidth" }, write: { target: "maxWidth" } } })], p.prototype, "imageMaxWidth", void 0), a([l()], p.prototype, "imageTransparency", void 0), a([l(Xe)], p.prototype, "legendEnabled", void 0), a([l({ type: ["show", "hide", "hide-children"] })], p.prototype, "listMode", void 0), a([l({ type: String, json: { write: { ignoreOrigin: !0 } } })], p.prototype, "mapUrl", void 0), a([l({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], p.prototype, "isReference", void 0), a([l({ type: ["WMS"] })], p.prototype, "operationalLayerType", void 0), a([l()], p.prototype, "resourceInfo", void 0), a([l({ type: O, json: { origins: { service: { read: { source: "extent.spatialReference" } } }, write: !1 } })], p.prototype, "spatialReference", void 0), a([I(["web-document", "portal-item"], "spatialReference", ["spatialReferences"])], p.prototype, "readSpatialReferenceFromItemOrDocument", null), a([l({ type: [Je], json: { read: !1, origins: { service: { read: !0 }, "web-document": { read: !1, write: { ignoreOrigin: !0 } }, "portal-item": { read: !1, write: { ignoreOrigin: !0 } } } } })], p.prototype, "spatialReferences", void 0), a([D(["web-document", "portal-item"], "spatialReferences")], p.prototype, "writeSpatialReferences", null), a([l({ type: J.ofType(X), json: { write: { target: "layers", overridePolicy(e, t, r) {
  if (lt(this.allSublayers, r))
    return { ignoreOrigin: !0 };
} } } })], p.prototype, "sublayers", void 0), a([I(["web-document", "portal-item"], "sublayers", ["layers", "visibleLayers"])], p.prototype, "readSublayersFromItemOrMap", null), a([I("service", "sublayers", ["layers"])], p.prototype, "readSublayers", null), a([D("sublayers", { layers: { type: [X] }, visibleLayers: { type: [String] } })], p.prototype, "writeSublayers", null), a([l({ json: { read: !1 }, readOnly: !0, value: "wms" })], p.prototype, "type", void 0), a([l(Qe)], p.prototype, "url", void 0), a([l({ type: String, json: { write: { ignoreOrigin: !0 } } })], p.prototype, "version", void 0), p = a([ce("geoscene.layers.WMSLayer")], p);
const yt = p;
export {
  yt as default
};

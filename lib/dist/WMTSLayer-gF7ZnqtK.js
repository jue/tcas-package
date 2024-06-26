import { h6 as Q, e as a, d as u, M as F, c2 as J, a as U, aD as q, aE as O, j as W, y as K, ab as pe, h7 as k, h8 as de, r as me, bt as he, bF as ye, bu as fe, bv as ge, bw as ve, bz as xe, u as Z, bG as ee, gK as we, C as te, S as re, R as ie, I as Se, bD as Me, bE as Ie } from "./index-Ek1MTSEY.js";
import { a as Te, x as Le } from "./WebTileLayer-5DVU8b13.js";
import { o as z } from "./crsUtils-ID083j2U.js";
import { o as se } from "./xmlUtils-mxxkHqmu.js";
import "vue";
let be = class {
  constructor(t, r = 0, i = t.lods.length - 1) {
    this.tileInfo = t, this.minLOD = r, this.maxLOD = i;
  }
  getAvailability(t, r, i) {
    const s = this.tileInfo.lodAt(t);
    return !s || t < this.minLOD || t > this.maxLOD ? "unavailable" : s.cols && s.rows ? i >= s.cols[0] && i <= s.cols[1] && r >= s.rows[0] && r <= s.rows[1] ? "available" : "unavailable" : "available";
  }
  async fetchAvailability(t, r, i, s) {
    return await Q(s), this.getAvailability(t, r, i);
  }
  async fetchAvailabilityUpsample(t, r, i, s, o) {
    await Q(o), s.level = t, s.row = r, s.col = i;
    const l = this.tileInfo;
    for (l.updateTileInfo(s); ; ) {
      const n = this.getAvailability(s.level, s.row, s.col);
      if (n !== "unavailable")
        return n;
      if (!l.upsampleTile(s))
        return "unavailable";
    }
  }
};
var B;
let $ = B = class extends q {
  constructor(e) {
    super(e), this.fullExtent = null, this.id = null, this.tileInfo = null;
  }
  clone() {
    const e = new B();
    return this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("tileInfo") && (e.tileInfo = this.tileInfo && this.tileInfo.clone()), e;
  }
};
a([u({ type: F, json: { read: { source: "fullExtent" } } })], $.prototype, "fullExtent", void 0), a([u({ type: String, json: { read: { source: "id" } } })], $.prototype, "id", void 0), a([u({ type: J, json: { read: { source: "tileInfo" } } })], $.prototype, "tileInfo", void 0), $ = B = a([U("geoscene.layer.support.TileMatrixSet")], $);
const Ee = $;
var H;
let E = H = class extends q {
  constructor(e) {
    super(e), this.id = null, this.title = null, this.description = null, this.legendUrl = null;
  }
  clone() {
    const e = new H();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("isDefault") && (e.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (e.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
};
a([u({ json: { read: { source: "id" } } })], E.prototype, "id", void 0), a([u({ json: { read: { source: "title" } } })], E.prototype, "title", void 0), a([u({ json: { read: { source: "abstract" } } })], E.prototype, "description", void 0), a([u({ json: { read: { source: "legendUrl" } } })], E.prototype, "legendUrl", void 0), a([u({ json: { read: { source: "isDefault" } } })], E.prototype, "isDefault", void 0), a([u({ json: { read: { source: "keywords" } } })], E.prototype, "keywords", void 0), E = H = a([U("geoscene.layer.support.WMTSStyle")], E);
const Ce = E;
var G;
let w = G = class extends q {
  constructor(e) {
    super(e), this.fullExtent = null, this.fullExtents = null, this.imageFormats = null, this.id = null, this.layer = null, this.styles = null, this.tileMatrixSetId = null, this.tileMatrixSets = null;
  }
  get description() {
    return this._get("description");
  }
  set description(e) {
    this._set("description", e);
  }
  readFullExtent(e, t) {
    return (e = t.fullExtent) ? F.fromJSON(e) : null;
  }
  readFullExtents(e, t) {
    var r;
    return (r = t.fullExtents) != null && r.length ? t.fullExtents.map((i) => F.fromJSON(i)) : t.tileMatrixSets.map((i) => F.fromJSON(i.fullExtent)).filter((i) => i);
  }
  get imageFormat() {
    let e = this._get("imageFormat");
    return e || (e = this.imageFormats && this.imageFormats.length ? this.imageFormats[0] : ""), e;
  }
  set imageFormat(e) {
    const t = this.imageFormats;
    e && (e.indexOf("image/") > -1 || t && t.indexOf(e) === -1) && (e.indexOf("image/") === -1 && (e = "image/" + e), t && t.indexOf(e) === -1) ? console.error("The layer doesn't support the format of " + e) : this._set("imageFormat", e);
  }
  get styleId() {
    let e = this._get("styleId");
    return e || (e = this.styles && this.styles.length ? this.styles.getItemAt(0).id : ""), e;
  }
  set styleId(e) {
    this._set("styleId", e);
  }
  get title() {
    return this._get("title");
  }
  set title(e) {
    this._set("title", e);
  }
  get tileMatrixSet() {
    return this.tileMatrixSets ? this.tileMatrixSets.find((e) => e.id === this.tileMatrixSetId) : null;
  }
  clone() {
    const e = new G();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("imageFormats") && (e.imageFormats = this.imageFormats && this.imageFormats.slice()), this.hasOwnProperty("imageFormat") && (e.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("layer") && (e.layer = this.layer), this.hasOwnProperty("styleId") && (e.styleId = this.styleId), this.hasOwnProperty("styles") && (e.styles = this.styles && this.styles.clone()), this.hasOwnProperty("tileMatrixSetId") && (e.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (e.tileMatrixSets = this.tileMatrixSets.clone()), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
};
a([u()], w.prototype, "description", null), a([u()], w.prototype, "fullExtent", void 0), a([O("fullExtent", ["fullExtent"])], w.prototype, "readFullExtent", null), a([u({ readOnly: !0 })], w.prototype, "fullExtents", void 0), a([O("fullExtents", ["fullExtents", "tileMatrixSets"])], w.prototype, "readFullExtents", null), a([u()], w.prototype, "imageFormat", null), a([u({ json: { read: { source: "formats" } } })], w.prototype, "imageFormats", void 0), a([u()], w.prototype, "id", void 0), a([u()], w.prototype, "layer", void 0), a([u()], w.prototype, "styleId", null), a([u({ type: W.ofType(Ce), json: { read: { source: "styles" } } })], w.prototype, "styles", void 0), a([u({ value: null, json: { write: { ignoreOrigin: !0 } } })], w.prototype, "title", null), a([u()], w.prototype, "tileMatrixSetId", void 0), a([u({ readOnly: !0 })], w.prototype, "tileMatrixSet", null), a([u({ type: W.ofType(Ee), json: { read: { source: "tileMatrixSets" } } })], w.prototype, "tileMatrixSets", void 0), w = G = a([U("geoscene.layers.support.WMTSSublayer")], w);
const A = w, oe = 90.71428571428571;
function Pe(e, t) {
  var r, i;
  e = e.replace(/ows:/gi, "");
  const s = new DOMParser().parseFromString(e, "text/xml").documentElement, o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), n = g("Contents", s);
  if (!n)
    throw new K("wmtslayer:wmts-capabilities-xml-is-not-valid");
  const c = g("OperationsMetadata", s), p = c == null ? void 0 : c.querySelector("[name='GetTile']"), h = p == null ? void 0 : p.getElementsByTagName("Get"), y = h && Array.prototype.slice.call(h), d = (r = (t == null || (i = t.url) == null ? void 0 : i.indexOf("https")) > -1) != null && r;
  let v, M, T = t.serviceMode, S = t && t.url;
  if (y && y.length && y.some((I) => {
    const b = g("Constraint", I);
    return !b || _("AllowedValues", "Value", T, b) ? (S = I.attributes[0].nodeValue, !0) : (!b || _("AllowedValues", "Value", "RESTful", b) || _("AllowedValues", "Value", "REST", b) ? M = I.attributes[0].nodeValue : b && !_("AllowedValues", "Value", "KVP", b) || (v = I.attributes[0].nodeValue), !1);
  }), !S)
    if (M)
      S = M, T = "RESTful";
    else if (v)
      S = v, T = "KVP";
    else {
      const I = g("ServiceMetadataURL", s);
      S = I && I.getAttribute("xlink:href");
    }
  const x = S.indexOf("1.0.0/");
  x === -1 && T === "RESTful" ? S += "/" : x > -1 && (S = S.substring(0, x)), T === "KVP" && (S += x > -1 ? "" : "?"), d && (S = S.replace(/^http:/i, "https:"));
  const L = f("ServiceIdentification>ServiceTypeVersion", s), C = f("ServiceIdentification>AccessConstraints", s), j = P("Layer", n), N = P("TileMatrixSet", n), D = j.map((I) => {
    const b = f("Identifier", I);
    return o.set(b, I), Re(b, I, N, d, L);
  });
  return { copyright: C, dimensionMap: l, layerMap: o, layers: D, serviceMode: T, tileUrl: S };
}
function Oe(e) {
  return e.layers.forEach((t) => {
    t.tileMatrixSets.forEach((r) => {
      const i = r.tileInfo;
      i.dpi !== 96 && (i.lods.forEach((s) => {
        s.scale = 96 * s.scale / i.dpi, s.resolution = ce(i.spatialReference.wkid, s.scale * oe / 96, r.id);
      }), i.dpi = 96);
    });
  }), e;
}
function X(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function g(e, t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const i = t.childNodes[r];
    if (X(i) && i.nodeName === e)
      return i;
  }
  return null;
}
function P(e, t) {
  const r = [];
  for (let i = 0; i < t.childNodes.length; i++) {
    const s = t.childNodes[i];
    X(s) && s.nodeName === e && r.push(s);
  }
  return r;
}
function R(e, t) {
  const r = [];
  for (let i = 0; i < t.childNodes.length; i++) {
    const s = t.childNodes[i];
    X(s) && s.nodeName === e && r.push(s);
  }
  return r.map((i) => i.textContent);
}
function f(e, t) {
  return e.split(">").forEach((r) => {
    t && (t = g(r, t));
  }), t && t.textContent;
}
function _(e, t, r, i) {
  let s;
  return Array.prototype.slice.call(i.childNodes).some((o) => {
    if (o.nodeName.indexOf(e) > -1) {
      const l = g(t, o), n = l && l.textContent;
      if (n === r || r.split(":") && r.split(":")[1] === n)
        return s = o, !0;
    }
    return !1;
  }), s;
}
function Re(e, t, r, i, s) {
  const o = f("Abstract", t), l = R("Format", t);
  return { id: e, fullExtent: Ve(t), fullExtents: Ae(t), description: o, formats: l, styles: Ue(t, i), title: f("Title", t), tileMatrixSets: je(s, t, r) };
}
function ne(e, t) {
  var r;
  const i = [], s = (r = e.layerMap) == null ? void 0 : r.get(t);
  if (!s)
    return;
  const o = P("ResourceURL", s), l = P("Dimension", s);
  let n, c, p, h;
  return l.length && (n = f("Identifier", l[0]), c = R("Default", l[0]) || R("Value", l[0])), l.length > 1 && (p = f("Identifier", l[1]), h = R("Default", l[1]) || R("Value", l[1])), e.dimensionMap.set(t, { dimensions: c, dimensions2: h }), o.forEach((y) => {
    let d = y.getAttribute("template");
    if (y.getAttribute("resourceType") === "tile") {
      if (n && c.length)
        if (d.indexOf("{" + n + "}") > -1)
          d = d.replace("{" + n + "}", "{dimensionValue}");
        else {
          const v = d.toLowerCase().indexOf("{" + n.toLowerCase() + "}");
          v > -1 && (d = d.substring(0, v) + "{dimensionValue}" + d.substring(v + n.length + 2));
        }
      if (p && h.length)
        if (d.indexOf("{" + p + "}") > -1)
          d = d.replace("{" + p + "}", "{dimensionValue2}");
        else {
          const v = d.toLowerCase().indexOf("{" + p.toLowerCase() + "}");
          v > -1 && (d = d.substring(0, v) + "{dimensionValue2}" + d.substring(v + p.length + 2));
        }
      i.push({ template: d, format: y.getAttribute("format"), resourceType: "tile" });
    }
  }), i;
}
function Fe(e, t, r, i, s, o, l, n) {
  var c, p;
  const h = $e(e, t, i);
  if (!((h == null ? void 0 : h.length) > 0))
    return "";
  const { dimensionMap: y } = e, d = (c = y.get(t).dimensions) == null ? void 0 : c[0], v = (p = y.get(t).dimensions2) == null ? void 0 : p[0];
  return h[l % h.length].template.replace(/\{Style\}/gi, s).replace(/\{TileMatrixSet\}/gi, r).replace(/\{TileMatrix\}/gi, o).replace(/\{TileRow\}/gi, "" + l).replace(/\{TileCol\}/gi, "" + n).replace(/\{dimensionValue\}/gi, d).replace(/\{dimensionValue2\}/gi, v);
}
function $e(e, t, r) {
  const i = ne(e, t), s = i.filter((o) => o.format === r);
  return s.length ? s : i;
}
function _e(e, t, r, i) {
  const { dimensionMap: s } = e, o = ne(e, t);
  let l = "";
  if (o && o.length > 0) {
    const n = s.get(t).dimensions && s.get(t).dimensions[0], c = s.get(t).dimensions2 && s.get(t).dimensions2[0];
    l = o[0].template, l.indexOf(".xxx") === l.length - 4 && (l = l.slice(0, l.length - 4)), l = l.replace(/\{Style\}/gi, i), l = l.replace(/\{TileMatrixSet\}/gi, r), l = l.replace(/\{TileMatrix\}/gi, "{level}"), l = l.replace(/\{TileRow\}/gi, "{row}"), l = l.replace(/\{TileCol\}/gi, "{col}"), l = l.replace(/\{dimensionValue\}/gi, n), l = l.replace(/\{dimensionValue2\}/gi, c);
  }
  return l;
}
function Ve(e) {
  const t = g("WGS84BoundingBox", e), r = t ? f("LowerCorner", t).split(" ") : ["-180", "-90"], i = t ? f("UpperCorner", t).split(" ") : ["180", "90"];
  return { xmin: parseFloat(r[0]), ymin: parseFloat(r[1]), xmax: parseFloat(i[0]), ymax: parseFloat(i[1]), spatialReference: { wkid: 4326 } };
}
function Ae(e) {
  const t = [];
  return se(e, { BoundingBox: (r) => {
    if (!r.getAttribute("crs"))
      return;
    const i = r.getAttribute("crs").toLowerCase(), s = Y(i), o = i.includes("epsg") && z(s.wkid);
    let l, n, c, p;
    se(r, { LowerCorner: (h) => {
      [l, n] = h.textContent.split(" ").map((y) => Number.parseFloat(y)), o && ([l, n] = [n, l]);
    }, UpperCorner: (h) => {
      [c, p] = h.textContent.split(" ").map((y) => Number.parseFloat(y)), o && ([c, p] = [p, c]);
    } }), t.push({ xmin: l, ymin: n, xmax: c, ymax: p, spatialReference: s });
  } }), t;
}
function Ue(e, t) {
  return P("Style", e).map((r) => {
    const i = g("LegendURL", r), s = g("Keywords", r), o = s && R("Keyword", s);
    let l = i && i.getAttribute("xlink:href");
    return t && (l = l && l.replace(/^http:/i, "https:")), { abstract: f("Abstract", r), id: f("Identifier", r), isDefault: r.getAttribute("isDefault") === "true", keywords: o, legendUrl: l, title: f("Title", r) };
  });
}
function je(e, t, r) {
  return P("TileMatrixSetLink", t).map((i) => Ne(e, i, r));
}
function Ne(e, t, r) {
  const i = g("TileMatrixSet", t).textContent, s = R("TileMatrix", t), o = r.find((x) => {
    const L = g("Identifier", x), C = L && L.textContent;
    return !!(C === i || i.split(":") && i.split(":")[1] === C);
  }), l = g("TileMatrixSetLimits", t), n = l && P("TileMatrixLimits", l), c = /* @__PURE__ */ new Map();
  if (n != null && n.length)
    for (const x of n) {
      const L = g("TileMatrix", x).textContent, C = +g("MinTileRow", x).textContent, j = +g("MaxTileRow", x).textContent, N = +g("MinTileCol", x).textContent, D = +g("MaxTileCol", x).textContent;
      c.set(L, { minCol: N, maxCol: D, minRow: C, maxRow: j });
    }
  const p = f("SupportedCRS", o).toLowerCase(), h = De(o, p), y = h.spatialReference, d = g("TileMatrix", o), v = [parseInt(f("TileWidth", d), 10), parseInt(f("TileHeight", d), 10)], M = [];
  s.length ? s.forEach((x, L) => {
    const C = _("TileMatrix", "Identifier", x, o);
    M.push(le(C, p, L, i, c));
  }) : P("TileMatrix", o).forEach((x, L) => {
    M.push(le(x, p, L, i, c));
  });
  const T = ke(e, o, h, v, M[0]).toJSON(), S = new J({ dpi: 96, spatialReference: y, size: v, origin: h, lods: M }).toJSON();
  return { id: i, fullExtent: T, tileInfo: S };
}
function Y(e) {
  e = e.toLowerCase();
  let t = parseInt(e.split(":").pop(), 10);
  t !== 900913 && t !== 3857 || (t = 102100);
  const r = Ke(e);
  return me(r) && (t = r), { wkid: t };
}
function De(e, t) {
  return ue(g("TileMatrix", e), t);
}
function ue(e, t) {
  const r = Y(t), [i, s] = f("TopLeftCorner", e).split(" ").map((l) => parseFloat(l)), o = t.includes("epsg") && z(r.wkid);
  return new pe(o ? { x: s, y: i, spatialReference: r } : { x: i, y: s, spatialReference: r });
}
function ke(e, t, r, i, s) {
  const o = g("BoundingBox", t);
  let l, n, c, p, h, y;
  if (o && (l = f("LowerCorner", o).split(" "), n = f("UpperCorner", o).split(" ")), l && l.length > 1 && n && n.length > 1)
    c = parseFloat(l[0]), h = parseFloat(l[1]), p = parseFloat(n[0]), y = parseFloat(n[1]);
  else {
    const d = g("TileMatrix", t), v = parseInt(f("MatrixWidth", d), 10), M = parseInt(f("MatrixHeight", d), 10);
    c = r.x, y = r.y, p = c + v * i[0] * s.resolution, h = y - M * i[1] * s.resolution;
  }
  return We(e, r.spatialReference) ? new F(h, c, y, p, r.spatialReference) : new F(c, h, p, y, r.spatialReference);
}
function We(e, t) {
  return e === "1.0.0" && z(t.wkid);
}
var V;
function Ke(e) {
  return e.includes("crs84") || e.includes("crs:84") ? V.CRS84 : e.includes("crs83") || e.includes("crs:83") ? V.CRS83 : e.includes("crs27") || e.includes("crs:27") ? V.CRS27 : null;
}
function le(e, t, r, i, s) {
  var o;
  const l = Y(t), n = f("Identifier", e);
  let c = parseFloat(f("ScaleDenominator", e));
  const p = ce(l.wkid, c, i);
  c *= 96 / oe;
  const h = +f("MatrixWidth", e), y = +f("MatrixHeight", e), { maxCol: d = h - 1, maxRow: v = y - 1, minCol: M = 0, minRow: T = 0 } = (o = s.get(n)) != null ? o : {}, { x: S, y: x } = ue(e, t);
  return { cols: [M, d], level: r, levelValue: n, origin: [S, x], scale: c, resolution: p, rows: [T, v] };
}
function ce(e, t, r) {
  let i;
  return i = k.hasOwnProperty("" + e) ? k.values[k[e]] : r === "default028mm" ? 6370997 * Math.PI / 180 : de(e).metersPerDegree, 7 * t / 25e3 / i;
}
(function(e) {
  e[e.CRS84 = 4326] = "CRS84", e[e.CRS83 = 4269] = "CRS83", e[e.CRS27 = 4267] = "CRS27";
})(V || (V = {}));
const ae = { "image/png": ".png", "image/png8": ".png", "image/png24": ".png", "image/png32": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "image/gif": ".gif", "image/bmp": ".bmp", "image/tiff": ".tif", "image/jpgpng": "", "image/jpegpng": "", "image/unknown": "" }, Be = /* @__PURE__ */ new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);
let m = class extends he(ye(fe(ge(ve(xe(Ie)))))) {
  constructor(...e) {
    super(...e), this._sublayersHandles = new Z(), this.copyright = "", this.customParameters = null, this.customLayerParameters = null, this.fullExtent = null, this.operationalLayerType = "WebTiledLayer", this.resourceInfo = null, this.serviceMode = "RESTful", this.sublayers = null, this.type = "wmts", this.version = "1.0.0", this.watch("activeLayer", (t, r) => {
      r && (r.layer = null), t && (t.layer = this);
    }, !0), this.watch("sublayers", (t, r) => {
      r && (r.forEach((i) => {
        i.layer = null;
      }), this._sublayersHandles.removeAll(), this._sublayersHandles = null), t && (t.forEach((i) => {
        i.layer = this;
      }), this._sublayersHandles || (this._sublayersHandles = new Z()), this._sublayersHandles.add([t.on("after-add", ({ item: i }) => {
        i.layer = this;
      }), t.on("after-remove", ({ item: i }) => {
        i.layer = null;
      })]));
    }, !0);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    if (this.serviceMode === "KVP" || this.serviceMode === "RESTful")
      return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMTS"] }, e).catch(ee).then(() => this._fetchService(e)).catch((t) => {
        throw ee(t), new K("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", { error: t });
      })), Promise.resolve(this);
    console.error("WMTS mode could only be 'KVP' or 'RESTful'");
  }
  get activeLayer() {
    return this._get("activeLayer");
  }
  set activeLayer(e) {
    this._set("activeLayer", e);
  }
  readActiveLayerFromService(e, t, r) {
    this.activeLayer || (this.activeLayer = new A());
    let i = t.layers.find((s) => s.id === this.activeLayer.id);
    return i || (i = t.layers[0]), this.activeLayer.read(i, r), this.activeLayer;
  }
  readActiveLayerFromItemOrWebDoc(e, t) {
    const { templateUrl: r, wmtsInfo: i } = t, s = r ? this._getLowerCasedUrlParams(r) : null, o = i == null ? void 0 : i.layerIdentifier;
    let l = null;
    const n = i == null ? void 0 : i.tileMatrixSet;
    n && (Array.isArray(n) ? n.length && (l = n[0]) : l = n);
    const c = s == null ? void 0 : s.format, p = s == null ? void 0 : s.style;
    return new A({ id: o, imageFormat: c, styleId: p, tileMatrixSetId: l });
  }
  writeActiveLayer(e, t, r, i) {
    const s = this.activeLayer;
    t.templateUrl = this.getUrlTemplate(s.id, s.tileMatrixSetId, s.imageFormat, s.styleId);
    const o = we("tileMatrixSet.tileInfo", s);
    t.tileInfo = o ? o.toJSON(i) : null, t.wmtsInfo = { ...t.wmtsInfo, layerIdentifier: s.id, tileMatrixSet: s.tileMatrixSetId };
  }
  readCustomParameters(e, t) {
    const r = t.wmtsInfo;
    return r ? this._mergeParams(r.customParameters, r.url) : null;
  }
  get fullExtents() {
    return this.activeLayer.fullExtents;
  }
  readServiceMode(e, t) {
    return t.templateUrl.indexOf("?") > -1 ? "KVP" : "RESTful";
  }
  readSublayersFromService(e, t, r) {
    return He(t.layers, r);
  }
  get supportedSpatialReferences() {
    return this.activeLayer.tileMatrixSets.map((e) => e.tileInfo.spatialReference).toArray();
  }
  get tilemapCache() {
    var e, t;
    const r = (e = this.activeLayer) == null || (t = e.tileMatrixSet) == null ? void 0 : t.tileInfo;
    return new be(r);
  }
  get title() {
    var e, t;
    return (e = (t = this.activeLayer) == null ? void 0 : t.title) != null ? e : "Layer";
  }
  set title(e) {
    e ? this._override("title", e) : this._clearOverride("title");
  }
  get url() {
    return this._get("url");
  }
  set url(e) {
    e && e.substr(-1) === "/" ? this._set("url", e.slice(0, -1)) : this._set("url", e);
  }
  createWebTileLayer(e) {
    const t = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId), r = this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo, i = e.fullExtent, s = new Te({ layerIdentifier: e.id, tileMatrixSet: e.tileMatrixSetId, url: this.url });
    return this.customLayerParameters && (s.customLayerParameters = this.customLayerParameters), this.customParameters && (s.customParameters = this.customParameters), new Le({ fullExtent: i, urlTemplate: t, tileInfo: r, wmtsInfo: s });
  }
  fetchTile(e, t, r) {
    const i = this.getTileUrl(e, t, r);
    return te(i, { responseType: "image" }).then((s) => s.data);
  }
  findSublayerById(e) {
    return this.sublayers.find((t) => t.id === e);
  }
  getTileUrl(e, t, r) {
    const i = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e], s = i ? i.levelValue ? i.levelValue : `${i.level}` : `${e}`;
    let o = this.resourceInfo ? "" : Fe({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, s, t, r);
    return o || (o = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replace(/\{level\}/gi, s).replace(/\{row\}/gi, `${t}`).replace(/\{col\}/gi, `${r}`)), o = this._appendCustomLayerParameters(o), o;
  }
  getUrlTemplate(e, t, r, i) {
    if (!this.resourceInfo) {
      const s = _e({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e, t, i);
      if (s)
        return s;
    }
    if (this.serviceMode === "KVP")
      return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e + "&STYLE=" + i + "&FORMAT=" + r + "&TILEMATRIXSET=" + t + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";
    if (this.serviceMode === "RESTful") {
      let s = "";
      return ae[r.toLowerCase()] && (s = ae[r.toLowerCase()]), this.url + e + "/" + i + "/" + t + "/{level}/{row}/{col}" + s;
    }
    return "";
  }
  async _fetchService(e) {
    let t;
    if (this.resourceInfo)
      this.resourceInfo.serviceMode === "KVP" && (this.url += this.url.indexOf("?") > -1 ? "" : "?"), t = { ssl: !1, data: this.resourceInfo };
    else
      try {
        t = await this._getCapabilities(this.serviceMode, e);
      } catch {
        const r = this.serviceMode === "KVP" ? "RESTful" : "KVP";
        try {
          t = await this._getCapabilities(r, e), this.serviceMode = r;
        } catch (i) {
          throw new K("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", { error: i });
        }
      }
    this.resourceInfo ? t.data = Oe(t.data) : t.data = Pe(t.data, { serviceMode: this.serviceMode, url: this.url }), t.data && this.read(t.data, { origin: "service" });
  }
  async _getCapabilities(e, t) {
    const r = this._getCapabilitiesUrl(e);
    return await te(r, { ...t, responseType: "text" });
  }
  _getTileMatrixSetById(e) {
    return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t) => t.id === e);
  }
  _appendCustomParameters(e) {
    return this._appendParameters(e, this.customParameters);
  }
  _appendCustomLayerParameters(e) {
    return this._appendParameters(e, { ...re(this.customParameters), ...this.customLayerParameters });
  }
  _appendParameters(e, t) {
    const r = ie(e), i = { ...r.query, ...t }, s = Se(i);
    return s === "" ? r.path : `${r.path}?${s}`;
  }
  _getCapabilitiesUrl(e) {
    let t;
    return this.url = this.url.split("?")[0], e === "KVP" ? t = this.url + "?request=GetCapabilities&service=WMTS&version=" + this.version : e === "RESTful" && (t = this.url + "/" + this.version + "/WMTSCapabilities.xml"), t = this._appendCustomParameters(t), t;
  }
  _getLowerCasedUrlParams(e) {
    if (!e)
      return null;
    const t = ie(e).query;
    if (!t)
      return null;
    const r = {};
    return Object.keys(t).forEach((i) => {
      r[i.toLowerCase()] = t[i];
    }), r;
  }
  _mergeParams(e, t) {
    const r = this._getLowerCasedUrlParams(t);
    if (r) {
      const i = Object.keys(r);
      i.length && (e = e ? re(e) : {}, i.forEach((s) => {
        e.hasOwnProperty(s) || Be.has(s) || (e[s] = r[s]);
      }));
    }
    return e;
  }
};
function He(e, t) {
  return e.map((r) => {
    const i = new A();
    return i.read(r, t), i;
  });
}
a([u()], m.prototype, "dimensionMap", void 0), a([u()], m.prototype, "layerMap", void 0), a([u({ type: A, json: { origins: { "web-document": { write: { ignoreOrigin: !0 } } } } })], m.prototype, "activeLayer", null), a([O("service", "activeLayer", ["layers"])], m.prototype, "readActiveLayerFromService", null), a([O(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], m.prototype, "readActiveLayerFromItemOrWebDoc", null), a([Me(["web-document", "portal-item"], "activeLayer", { templateUrl: { type: String }, tileInfo: { type: J }, "wmtsInfo.layerIdentifier": { type: String }, "wmtsInfo.tileMatrixSet": { type: String } })], m.prototype, "writeActiveLayer", null), a([u({ type: String, value: "", json: { write: !0 } })], m.prototype, "copyright", void 0), a([u({ type: ["show", "hide"] })], m.prototype, "listMode", void 0), a([u({ json: { origins: { "web-document": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } }, "portal-item": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } } } } })], m.prototype, "customParameters", void 0), a([O(["portal-item", "web-document"], "customParameters")], m.prototype, "readCustomParameters", null), a([u({ json: { origins: { "web-document": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } }, "portal-item": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } } } } })], m.prototype, "customLayerParameters", void 0), a([u({ type: F, json: { write: { ignoreOrigin: !0 }, origins: { "web-document": { read: { source: "fullExtent" } }, "portal-item": { read: { source: "fullExtent" } } } } })], m.prototype, "fullExtent", void 0), a([u({ readOnly: !0 })], m.prototype, "fullExtents", null), a([u({ type: ["WebTiledLayer"] })], m.prototype, "operationalLayerType", void 0), a([u()], m.prototype, "resourceInfo", void 0), a([u()], m.prototype, "serviceMode", void 0), a([O(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], m.prototype, "readServiceMode", null), a([u({ type: W.ofType(A) })], m.prototype, "sublayers", void 0), a([O("service", "sublayers", ["layers"])], m.prototype, "readSublayersFromService", null), a([u({ readOnly: !0 })], m.prototype, "supportedSpatialReferences", null), a([u({ readOnly: !0 })], m.prototype, "tilemapCache", null), a([u({ json: { read: { source: "title" } } })], m.prototype, "title", null), a([u({ json: { read: !1 }, readOnly: !0, value: "wmts" })], m.prototype, "type", void 0), a([u({ json: { origins: { service: { read: { source: "tileUrl" } }, "web-document": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } }, "portal-item": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } } } } })], m.prototype, "url", null), a([u()], m.prototype, "version", void 0), m = a([U("geoscene.layers.WMTSLayer")], m);
const Qe = m;
export {
  Qe as default
};

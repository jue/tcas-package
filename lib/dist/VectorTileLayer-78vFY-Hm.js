import { s as W, R as U, I as X, C as v, y as j, bc as C, H as V, g as Y, S as _, gw as Q, aG as M, ap as b, M as q, aq as E, i4 as H, ea as z, gJ as F, eb as G, bg as Z, i5 as J, c2 as B, bt as ee, bu as te, bR as re, bv as se, bw as ie, bT as le, bS as oe, bz as ae, bG as O, fx as D, aU as ne, e as p, d as y, m as ue, bD as ce, aE as pe, a as ye, bE as he } from "./index-j1oaLRcp.js";
import { s as de } from "./ArcGISCachedService-GdK3CoP0.js";
import { n as fe, z as me } from "./TilemapCache-0axZcxQ8.js";
import { o as ge } from "./jsonContext-u43hNVvn.js";
import { l as Ae } from "./StyleRepository-wXTAe7vD.js";
import "vue";
import "./StyleDefinition-lNHHnPSw.js";
import "./enums-YM9SAu8u.js";
import "./enums-iri-XDIh.js";
import "./enums-n72NRQQZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./colorUtils-tSH3jtgH.js";
import "./GeometryUtils-lfXCngnH.js";
import "./Geometry-etmNDSLV.js";
let T = null;
function Se(e) {
  if (T)
    return T;
  const t = { lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==", animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" };
  return T = new Promise((r) => {
    const s = new Image();
    s.onload = () => {
      s.onload = s.onerror = null, r(s.width > 0 && s.height > 0);
    }, s.onerror = () => {
      s.onload = s.onerror = null, r(!1);
    }, s.src = "data:image/webp;base64," + t[e];
  }), T;
}
const ve = W.getLogger("geoscene.layers.support.SpriteSource"), we = 1.15;
let N = class {
  constructor(t, r, s, i) {
    this.baseURL = t, this.devicePixelRatio = r, this.maxTextureSize = s, this._spriteImageFormat = i, this._isRetina = !1, this._spritesData = {}, this.image = null, this.width = null, this.height = null, this.loadStatus = "not-loaded";
  }
  get spriteNames() {
    const t = [];
    for (const r in this._spritesData)
      t.push(r);
    return t.sort(), t;
  }
  getSpriteInfo(t) {
    return this._spritesData[t];
  }
  async load(t) {
    if (this.baseURL) {
      this.loadStatus = "loading";
      try {
        await this._loadSprites(t), this.loadStatus = "loaded";
      } catch {
        this.loadStatus = "failed";
      }
    } else
      this.loadStatus = "failed";
  }
  _loadSprites(t) {
    this._isRetina = this.devicePixelRatio > we;
    const r = U(this.baseURL), s = r.query ? "?" + X(r.query) : "", i = this._isRetina ? "@2x" : "", l = `${r.path}${i}.${this._spriteImageFormat}${s}`, o = `${r.path}${i}.json${s}`;
    return Promise.all([v(o, t), v(l, { responseType: "image", ...t })]).then(([a, n]) => {
      const u = Object.keys(a.data);
      if (!u || u.length === 0 || u.length === 1 && u[0] === "_ssl" || !n || !n.data)
        return this._spritesData = this.image = null, this.width = this.height = 0, Promise.resolve(null);
      this._spritesData = a.data;
      const h = n.data, A = Math.max(this.maxTextureSize, 4096);
      if (h.width > A || h.height > A) {
        const g = `Sprite resource for style ${r.path} is bigger than the maximum allowed of ${A} pixels}`;
        throw ve.error(g), new j("SpriteSource", g);
      }
      this.width = h.width, this.height = h.height;
      const d = document.createElement("canvas"), f = d.getContext("2d");
      d.width = h.width, d.height = h.height, f.drawImage(h, 0, 0, h.width, h.height);
      const I = f.getImageData(0, 0, h.width, h.height), m = new Uint8Array(I.data);
      let R;
      for (let g = 0; g < m.length; g += 4)
        R = m[g + 3] / 255, m[g] = m[g] * R, m[g + 1] = m[g + 1] * R, m[g + 2] = m[g + 2] * R;
      this.image = m;
    });
  }
}, xe = class {
  constructor(t) {
    this.url = t;
  }
  async fetchTileIndex() {
    return this._tileIndexPromise || (this._tileIndexPromise = v(this.url).then((t) => t.data.index)), this._tileIndexPromise;
  }
  async dataKey(t, r) {
    const s = await this.fetchTileIndex();
    return C(r), this._getIndexedDataKey(s, t);
  }
  _getIndexedDataKey(t, r) {
    const s = [r];
    if (r.level < 0 || r.row < 0 || r.col < 0 || r.row >> r.level > 0 || r.col >> r.level > 0)
      return null;
    let i = r;
    for (; i.level !== 0; )
      i = new V(i.level - 1, i.row >> 1, i.col >> 1, i.world), s.push(i);
    let l, o, a = t, n = s.pop();
    if (a === 1)
      return n;
    for (; s.length; )
      if (l = s.pop(), o = (1 & l.col) + ((1 & l.row) << 1), a) {
        if (a[o] === 0) {
          n = null;
          break;
        }
        if (a[o] === 1) {
          n = l;
          break;
        }
        n = l, a = a[o];
      }
    return n;
  }
}, be = class {
  constructor(t, r) {
    this._tilemap = t, this._tileIndexUrl = r;
  }
  async fetchTileIndex(t) {
    return this._tileIndexPromise || (this._tileIndexPromise = v(this._tileIndexUrl, { query: { ...t == null ? void 0 : t.query } }).then((r) => r.data.index)), this._tileIndexPromise;
  }
  dataKey(t, r) {
    const { level: s, row: i, col: l } = t, o = new V(t);
    return this._tilemap.fetchAvailabilityUpsample(s, i, l, o, r).then(() => (o.world = t.world, o)).catch((a) => {
      if (Y(a))
        throw a;
      return null;
    });
  }
};
const P = /* @__PURE__ */ new Map();
function _e(e, t, r, s, i) {
  return Ue(e.replace(/\{z\}/gi, t.toString()).replace(/\{y\}/gi, r.toString()).replace(/\{x\}/gi, s.toString()), i);
}
function Ue(e, t) {
  const r = P.get(e);
  if (r)
    return r.then((i) => _(i));
  const s = v(e, { responseType: "array-buffer", ...t }).then(({ data: i }) => (P.delete(e), i)).catch((i) => {
    throw P.delete(e), i;
  });
  return P.set(e, s), s;
}
let Ie = class {
  constructor(t, r, s) {
    this.tilemap = null, this.tileInfo = null, this.capabilities = null, this.fullExtent = null, this.name = t, this.sourceUrl = r;
    const i = U(this.sourceUrl), l = _(s), o = l.tiles;
    if (i)
      for (let d = 0; d < o.length; d++) {
        const f = U(o[d]);
        f && (Q(f.path) || (f.path = M(i.path, f.path)), o[d] = b(f.path, { ...i.query, ...f.query }));
      }
    this.tileServers = o;
    const a = s.capabilities && s.capabilities.split(",").map((d) => d.toLowerCase().trim()), n = (s == null ? void 0 : s.exportTilesAllowed) === !0, u = (a == null ? void 0 : a.includes("tilemap")) === !0, h = n && s.hasOwnProperty("maxExportTilesCount") ? s.maxExportTilesCount : 0;
    this.capabilities = { operations: { supportsExportTiles: n, supportsTileMap: u }, exportTiles: n ? { maxExportTilesCount: +h } : null }, this.tileInfo = fe(l.tileInfo, l, null, { ignoreMinMaxLOD: !0 });
    const A = s.tileMap ? b(M(i.path, s.tileMap), i.query) : null;
    u ? (this.type = "vector-tile", this.tilemap = new be(new me({ layer: { parsedUrl: i, tileInfo: this.tileInfo, type: "vector-tile", tileServers: this.tileServers } }), A)) : A && (this.tilemap = new xe(A)), this.fullExtent = q.fromJSON(s.fullExtent);
  }
  destroy() {
  }
  async getRefKey(t, r) {
    var s, i;
    return (s = (i = this.tilemap) == null ? void 0 : i.dataKey(t, r)) != null ? s : t;
  }
  requestTile(t, r, s, i) {
    const l = this.tileServers[r % this.tileServers.length];
    return _e(l, t, r, s, i);
  }
  isCompatibleWith(t) {
    const r = this.tileInfo, s = t.tileInfo;
    if (!r.spatialReference.equals(s.spatialReference) || !r.origin.equals(s.origin) || Math.round(r.dpi) !== Math.round(s.dpi))
      return !1;
    const i = r.lods, l = s.lods, o = Math.min(i.length, l.length);
    for (let a = 0; a < o; a++) {
      const n = i[a], u = l[a];
      if (n.level !== u.level || Math.round(n.scale) !== Math.round(u.scale))
        return !1;
    }
    return !0;
  }
};
const L = E.defaults && E.defaults.io.corsEnabledServers;
async function Re(e, t) {
  const r = { source: null, sourceBase: null, sourceUrl: null, validatedSource: null, style: null, styleBase: null, styleUrl: null, sourceNameToSource: {}, primarySourceName: "", spriteFormat: "png" }, [s, i] = typeof e == "string" ? [e, null] : [null, e.jsonUrl];
  await S(r, "esri", e, i, t);
  const l = { layerDefinition: r.validatedSource, url: s, serviceUrl: r.sourceUrl, style: r.style, styleUrl: r.styleUrl, spriteUrl: r.style.sprite && x(r.styleBase, r.style.sprite), spriteFormat: r.spriteFormat, glyphsUrl: r.style.glyphs && x(r.styleBase, r.style.glyphs), sourceNameToSource: r.sourceNameToSource, primarySourceName: r.primarySourceName };
  return w(l.spriteUrl), w(l.glyphsUrl), l;
}
function w(e) {
  if (!e)
    return;
  const t = H(e);
  L && !L.includes(t) && L.push(t);
}
function x(...e) {
  let t;
  for (let r = 0; r < e.length; ++r)
    z(e[r]) ? t && (t = t.split("://")[0] + ":" + e[r].trim()) : t = Q(e[r]) ? e[r] : M(t, e[r]);
  return F(t);
}
async function S(e, t, r, s, i) {
  let l, o, a;
  if (C(i), typeof r == "string") {
    const u = G(r);
    w(u), a = await v(u, { ...i, responseType: "json", query: { f: "json", ...i == null ? void 0 : i.query } }), a.ssl && (l && (l = l.replace(/^http:/i, "https:")), o && (o = o.replace(/^http:/i, "https:"))), l = u, o = u;
  } else
    a = { data: r }, l = r.jsonUrl || null, o = s;
  const n = a.data;
  return K(n) ? (e.styleUrl = l || null, Pe(e, n, o, i)) : Te(n) ? e.sourceUrl ? k(e, n, o, !1, t, i) : (e.sourceUrl = l || null, k(e, n, o, !0, t, i)) : Promise.reject("You must specify the URL or the JSON for a service or for a style.");
}
function K(e) {
  return !!e.sources;
}
function Te(e) {
  return !K(e);
}
async function Pe(e, t, r, s) {
  const i = r ? Z(r) : J();
  e.styleBase = i, e.style = t, e.styleUrl && w(e.styleUrl), t["sprite-format"] && t["sprite-format"].toLowerCase() === "webp" && (e.spriteFormat = "webp");
  const l = [];
  if (t.sources && t.sources.esri) {
    const o = t.sources.esri;
    o.url ? await S(e, "esri", x(i, o.url), void 0, s) : l.push(S(e, "esri", o, i, s));
  }
  for (const o of Object.keys(t.sources))
    o !== "esri" && t.sources[o].type === "vector" && (t.sources[o].url ? l.push(S(e, o, x(i, t.sources[o].url), void 0, s)) : t.sources[o].tiles && l.push(S(e, o, t.sources[o], i, s)));
  await Promise.all(l);
}
async function k(e, t, r, s, i, l) {
  const o = r ? F(r) + "/" : J(), a = $e(t, o), n = new Ie(i, b(o, l == null ? void 0 : l.query), a);
  if (!s && e.primarySourceName in e.sourceNameToSource) {
    const u = e.sourceNameToSource[e.primarySourceName];
    if (!u.isCompatibleWith(n))
      return Promise.resolve();
    n.fullExtent != null && (u.fullExtent != null ? u.fullExtent.union(n.fullExtent) : u.fullExtent = n.fullExtent.clone()), u.tileInfo.lods.length < n.tileInfo.lods.length && (u.tileInfo = n.tileInfo);
  }
  if (s ? (e.sourceBase = o, e.source = t, e.validatedSource = a, e.primarySourceName = i, e.sourceUrl && w(e.sourceUrl)) : w(o), e.sourceNameToSource[i] = n, !e.style)
    return t.defaultStyles == null ? Promise.reject() : typeof t.defaultStyles == "string" ? S(e, "", x(o, t.defaultStyles, "root.json"), void 0, l) : S(e, "", t.defaultStyles, x(o, "root.json"), l);
}
function $e(e, t) {
  if (e.hasOwnProperty("tileInfo"))
    return e;
  const r = { xmin: -20037507067161843e-9, ymin: -20037507067161843e-9, xmax: 20037507067161843e-9, ymax: 20037507067161843e-9, spatialReference: { wkid: 102100 } }, s = 512;
  let i = 78271.51696400007, l = 2958287637957775e-7;
  const o = [], a = e.hasOwnProperty("minzoom") ? +e.minzoom : 0, n = e.hasOwnProperty("maxzoom") ? +e.maxzoom : 22;
  for (let u = 0; u <= n; u++)
    u >= a && o.push({ level: u, scale: l, resolution: i }), i /= 2, l /= 2;
  for (const u of e.tiles)
    w(x(t, u));
  return { capabilities: "TilesOnly", initialExtent: r, fullExtent: r, minScale: 0, maxScale: 0, tiles: e.tiles, tileInfo: { rows: s, cols: s, dpi: 96, format: "pbf", origin: { x: -20037508342787e-6, y: 20037508342787e-6 }, lods: o, spatialReference: { wkid: 102100 } } };
}
const $ = 1e-6;
function Oe(e, t) {
  if (e === t)
    return !0;
  if (!e && t != null || e != null && !t || !e.spatialReference.equals(t.spatialReference) || e.dpi !== t.dpi)
    return !1;
  const r = e.origin, s = t.origin;
  if (Math.abs(r.x - s.x) >= $ || Math.abs(r.y - s.y) >= $)
    return !1;
  let i, l;
  e.lods[0].scale > t.lods[0].scale ? (i = e, l = t) : (l = e, i = t);
  for (let o = i.lods[0].scale; o >= l.lods[l.lods.length - 1].scale - $; o /= 2)
    if (Math.abs(o - l.lods[0].scale) < $)
      return !0;
  return !1;
}
function Le(e, t) {
  if (e === t)
    return e;
  if (!e && t != null)
    return t;
  if (e != null && !t)
    return e;
  const r = e.size[0], s = e.format, i = e.dpi, l = { x: e.origin.x, y: e.origin.y }, o = e.spatialReference.toJSON(), a = e.lods[0].scale > t.lods[0].scale ? e.lods[0] : t.lods[0], n = e.lods[e.lods.length - 1].scale <= t.lods[t.lods.length - 1].scale ? e.lods[e.lods.length - 1] : t.lods[t.lods.length - 1], u = a.scale, h = a.resolution, A = n.scale, d = [];
  let f = u, I = h, m = 0;
  for (; f > A; )
    d.push({ level: m, resolution: I, scale: f }), m++, f /= 2, I /= 2;
  return new B({ size: [r, r], dpi: i, format: s || "pbf", origin: l, lods: d, spatialReference: o });
}
let c = class extends ee(te(de(re(se(ie(le(oe(ae(he))))))))) {
  constructor(...e) {
    super(...e), this._spriteSourceMap = /* @__PURE__ */ new Map(), this.currentStyleInfo = null, this.style = null, this.isReference = null, this.operationalLayerType = "VectorTileLayer", this.type = "vector-tile", this.url = null, this.symbolCollisionBoxesVisible = !1, this.path = null;
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  destroy() {
    if (this.sourceNameToSource)
      for (const e of Object.values(this.sourceNameToSource))
        e == null || e.destroy();
    this._spriteSourceMap.clear();
  }
  async prefetchResources(e) {
    await this.loadSpriteSource(globalThis.devicePixelRatio || 1, e);
  }
  load(e) {
    const t = this.loadFromPortal({ supportedTypes: ["Vector Tile Service"], supportsData: !1 }, e).catch(O).then(async () => {
      if (!this.portalItem || !this.portalItem.id)
        return;
      const r = `${this.portalItem.itemUrl}/resources/styles/root.json`;
      (await v(r, { ...e, query: { f: "json", ...this.customParameters, token: this.apiKey } })).data && this.read({ url: r }, ge(this.portalItem));
    }).catch(O).then(() => this._loadStyle(e));
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
  get attributionDataUrl() {
    const e = this.currentStyleInfo, t = e && e.serviceUrl && U(e.serviceUrl);
    if (!t)
      return null;
    const r = this._getDefaultAttribution(t.path);
    return r ? b(r, { ...this.customParameters, token: this.apiKey }) : null;
  }
  get capabilities() {
    const e = this.primarySource;
    return e ? e.capabilities : { operations: { supportsExportTiles: !1, supportsTileMap: !1 }, exportTiles: null };
  }
  get fullExtent() {
    var e;
    return ((e = this.primarySource) == null ? void 0 : e.fullExtent) || null;
  }
  get parsedUrl() {
    return this.serviceUrl ? U(this.serviceUrl) : null;
  }
  get serviceUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.serviceUrl || null;
  }
  get spatialReference() {
    return this.tileInfo && this.tileInfo.spatialReference || null;
  }
  get styleUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.styleUrl || null;
  }
  writeStyleUrl(e, t) {
    e && z(e) && (e = `https:${e}`), t.styleUrl = e;
  }
  get tileInfo() {
    var e;
    const t = [];
    for (const s in this.sourceNameToSource)
      t.push(this.sourceNameToSource[s]);
    let r = ((e = this.primarySource) == null ? void 0 : e.tileInfo) || new B();
    if (t.length > 1)
      for (let s = 0; s < t.length; s++)
        Oe(r, t[s].tileInfo) && (r = Le(r, t[s].tileInfo));
    return r;
  }
  readVersion(e, t) {
    return t.version ? parseFloat(t.version) : parseFloat(t.currentVersion);
  }
  async loadSpriteSource(e = 1, t) {
    if (!this._spriteSourceMap.has(e)) {
      var r;
      const s = D().maxTextureSize, i = (r = this.currentStyleInfo) != null && r.spriteUrl ? b(this.currentStyleInfo.spriteUrl, { ...this.customParameters, token: this.apiKey }) : null, l = new N(i, e, s, this.currentStyleInfo.spriteFormat);
      await l.load(t), this._spriteSourceMap.set(e, l);
    }
    return Promise.resolve(this._spriteSourceMap.get(e));
  }
  async setSpriteSource(e, t = "png", r = 1, s) {
    const i = D().maxTextureSize, l = e ? b(e, { ...this.customParameters, token: this.apiKey }) : null;
    if (!l)
      return null;
    const o = new N(l, r, i, t);
    try {
      return await o.load(s), this._spriteSourceMap.clear(), this._spriteSourceMap.set(r, o), this.currentStyleInfo.spriteUrl = l, this.emit("spriteSource-change", { spriteSource: o }), o;
    } catch (a) {
      O(a);
    }
    return null;
  }
  async loadStyle(e, t) {
    var r;
    const s = e || this.style || this.url;
    return this._loadingTask && typeof s == "string" && this.url === s || ((r = this._loadingTask) == null || r.abort(), this._loadingTask = ne((i) => (this._spriteSourceMap.clear(), this._getSourceAndStyle(s, { signal: i })), t)), this._loadingTask.promise;
  }
  getStyleLayerId(e) {
    return this.styleRepository.getStyleLayerId(e);
  }
  getStyleLayerIndex(e) {
    return this.styleRepository.getStyleLayerIndex(e);
  }
  getPaintProperties(e) {
    return _(this.styleRepository.getPaintProperties(e));
  }
  setPaintProperties(e, t) {
    const r = this.styleRepository.isPainterDataDriven(e);
    this.styleRepository.setPaintProperties(e, t);
    const s = this.styleRepository.isPainterDataDriven(e);
    this.emit("paint-change", { layer: e, paint: t, isDataDriven: r || s });
  }
  getStyleLayer(e) {
    return _(this.styleRepository.getStyleLayer(e));
  }
  setStyleLayer(e, t) {
    this.styleRepository.setStyleLayer(e, t), this.emit("style-layer-change", { layer: e, index: t });
  }
  deleteStyleLayer(e) {
    this.styleRepository.deleteStyleLayer(e), this.emit("delete-style-layer", { layer: e });
  }
  getLayoutProperties(e) {
    return _(this.styleRepository.getLayoutProperties(e));
  }
  setLayoutProperties(e, t) {
    this.styleRepository.setLayoutProperties(e, t), this.emit("layout-change", { layer: e, layout: t });
  }
  setStyleLayerVisibility(e, t) {
    this.styleRepository.setStyleLayerVisibility(e, t), this.emit("style-layer-visibility-change", { layer: e, visibility: t });
  }
  getStyleLayerVisibility(e) {
    return this.styleRepository.getStyleLayerVisibility(e);
  }
  write(e, t) {
    return t != null && t.origin && !this.styleUrl ? (t.messages && t.messages.push(new j("vectortilelayer:unsupported", `VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`, { layer: this })), null) : super.write(e, t);
  }
  getTileUrl(e, t, r) {
    return null;
  }
  async _getSourceAndStyle(e, t) {
    if (!e)
      throw new Error("invalid style!");
    const r = await Re(e, { ...t, query: { ...this.customParameters, token: this.apiKey } });
    r.spriteFormat === "webp" && (await Se("lossy") || (r.spriteFormat = "png")), this._set("currentStyleInfo", { ...r }), typeof e == "string" ? (this.url = e, this.style = null) : (this.url = null, this.style = e), this._set("sourceNameToSource", r.sourceNameToSource), this._set("primarySource", r.sourceNameToSource[r.primarySourceName]), this._set("styleRepository", new Ae(r.style)), this.read(r.layerDefinition, { origin: "service" }), this.emit("load-style");
  }
  _getDefaultAttribution(e) {
    const t = e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i), r = ["OpenStreetMap_v2", "OpenStreetMap_Daylight_v2", "OpenStreetMap_Export_v2", "OpenStreetMap_FTS_v2", "OpenStreetMap_GCS_v2", "World_Basemap", "World_Basemap_v2", "World_Basemap_Export_v2", "World_Basemap_GCS_v2", "World_Basemap_WGS84", "World_Contours_v2"];
    if (!t)
      return;
    const s = t[2] && t[2].toLowerCase();
    if (!s)
      return;
    const i = t[1] || "";
    for (const l of r)
      if (l.toLowerCase().includes(s))
        return G(`//static.arcgis.com/attribution/Vector${i}/${l}`);
  }
  async _loadStyle(e) {
    var t, r;
    return (t = (r = this._loadingTask) == null ? void 0 : r.promise) != null ? t : this.loadStyle(null, e);
  }
};
p([y({ readOnly: !0 })], c.prototype, "attributionDataUrl", null), p([y({ type: ["show", "hide"] })], c.prototype, "listMode", void 0), p([y({ readOnly: !0, json: { read: !1 } })], c.prototype, "capabilities", null), p([y({ readOnly: !0 })], c.prototype, "currentStyleInfo", void 0), p([y({ json: { read: !1 }, readOnly: !0, type: q })], c.prototype, "fullExtent", null), p([y()], c.prototype, "style", void 0), p([y({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], c.prototype, "isReference", void 0), p([y({ type: ["VectorTileLayer"] })], c.prototype, "operationalLayerType", void 0), p([y({ readOnly: !0 })], c.prototype, "parsedUrl", null), p([y({ readOnly: !0 })], c.prototype, "serviceUrl", null), p([y({ type: ue, readOnly: !0 })], c.prototype, "spatialReference", null), p([y({ readOnly: !0 })], c.prototype, "styleRepository", void 0), p([y({ readOnly: !0 })], c.prototype, "sourceNameToSource", void 0), p([y({ readOnly: !0 })], c.prototype, "primarySource", void 0), p([y({ type: String, readOnly: !0, json: { write: { ignoreOrigin: !0 }, origins: { "web-document": { write: { ignoreOrigin: !0, isRequired: !0 } } } } })], c.prototype, "styleUrl", null), p([ce(["portal-item", "web-document"], "styleUrl")], c.prototype, "writeStyleUrl", null), p([y({ json: { read: !1, origins: { service: { read: !1 } } }, readOnly: !0, type: B })], c.prototype, "tileInfo", null), p([y({ json: { read: !1 }, readOnly: !0, value: "vector-tile" })], c.prototype, "type", void 0), p([y({ json: { origins: { "web-document": { read: { source: "styleUrl" } }, "portal-item": { read: { source: "url" } } }, write: !1, read: !1 } })], c.prototype, "url", void 0), p([y({ readOnly: !0 })], c.prototype, "version", void 0), p([pe("version", ["version", "currentVersion"])], c.prototype, "readVersion", null), p([y({ type: Boolean })], c.prototype, "symbolCollisionBoxesVisible", void 0), p([y({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], c.prototype, "path", void 0), c = p([ye("geoscene.layers.VectorTileLayer")], c);
const Ye = c;
export {
  Ye as default
};

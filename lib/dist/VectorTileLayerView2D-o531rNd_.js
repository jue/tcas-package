import { C as we, iY as xe, ap as X, cV as Se, H as L, g as G, de as Z, eM as Ie, hr as de, l as M, r as p, w as k, ds as Te, dt as Ce, dv as ve, hU as Re, dr as q, j1 as De, e2 as Pe, eC as Ae, dh as Y, E as Le, c2 as Me, s as Be, b as Oe, f as ke, P as Ve, cb as Ue, ep as Ee, J as ze, F as ee, S as He, e as H, d as $, a as qe } from "./index-j1oaLRcp.js";
import { I as R, L as I } from "./enums-iri-XDIh.js";
import { t as A } from "./BidiEngine-NdusBwFe.js";
import { P as ye, G as fe, D as Fe, F as C, O as E, I as te, R as N } from "./enums-n72NRQQZ.js";
import { u as _e } from "./Texture-PL6UBkoQ.js";
import { J as $e } from "./CIMSymbolHelper-KLEKDisI.js";
import { c as v, f as z } from "./VertexArrayObject-WfBtioi6.js";
import { e as Q, t as Ne, c as Qe } from "./config-TPD5ZwJG.js";
import { r as pe, o as We } from "./TileContainer-_mN9fJMf.js";
import { n as je, l as V, r as Je, i as K, a as T } from "./StyleDefinition-lNHHnPSw.js";
import { I as O } from "./Utils-Mkp4Julu.js";
import { l as se } from "./StyleRepository-wXTAe7vD.js";
import { f as Ge, u as Ye } from "./LayerView-u7tKPPGO.js";
import { v as Ke } from "./Bitmap-WAGgSDLg.js";
import { t as Xe } from "./BitmapContainer-o7-pgJEM.js";
import "vue";
import "./enums-YM9SAu8u.js";
import "./MaterialKey-tb9URCR8.js";
import "./GeometryUtils-lfXCngnH.js";
import "./Container-0QnIUm3K.js";
import "./WGLContainer-Za_nqieP.js";
import "./pixelUtils-Kz9o33NO.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
import "./colorUtils-tSH3jtgH.js";
import "./Geometry-etmNDSLV.js";
let F = class {
  constructor(e, s) {
    this._width = 0, this._height = 0, this._free = [], this._width = e, this._height = s, this._free.push(new A(0, 0, e, s));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e, s) {
    if (e > this._width || s > this._height)
      return new A();
    let t = null, i = -1;
    for (let r = 0; r < this._free.length; ++r) {
      const o = this._free[r];
      e <= o.width && s <= o.height && (t === null || o.y <= t.y && o.x <= t.x) && (t = o, i = r);
    }
    return t === null ? new A() : (this._free.splice(i, 1), t.width < t.height ? (t.width > e && this._free.push(new A(t.x + e, t.y, t.width - e, s)), t.height > s && this._free.push(new A(t.x, t.y + s, t.width, t.height - s))) : (t.width > e && this._free.push(new A(t.x + e, t.y, t.width - e, t.height)), t.height > s && this._free.push(new A(t.x, t.y + s, e, t.height - s))), new A(t.x, t.y, e, s));
  }
  release(e) {
    for (let s = 0; s < this._free.length; ++s) {
      const t = this._free[s];
      if (t.y === e.y && t.height === e.height && t.x + t.width === e.x)
        t.width += e.width;
      else if (t.x === e.x && t.width === e.width && t.y + t.height === e.y)
        t.height += e.height;
      else if (e.y === t.y && e.height === t.height && e.x + e.width === t.x)
        t.x = e.x, t.width += e.width;
      else {
        if (e.x !== t.x || e.width !== t.width || e.y + e.height !== t.y)
          continue;
        t.y = e.y, t.height += e.height;
      }
      this._free.splice(s, 1), this.release(e);
    }
    this._free.push(e);
  }
}, ie = class {
  constructor(e, s, t) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this.width = e, this.height = s, this._glyphSource = t, this._binPack = new F(e - 4, s - 4), this._glyphData.push(new Uint8Array(e * s)), this._dirties.push(!0), this._textures.push(void 0);
  }
  getGlyphItems(e, s) {
    const t = [], i = this._glyphSource, r = /* @__PURE__ */ new Set(), o = 1 / 256;
    for (const a of s) {
      const h = Math.floor(a * o);
      r.add(h);
    }
    const n = [];
    return r.forEach((a) => {
      if (a <= 256) {
        const h = e + a;
        if (this._rangePromises.has(h))
          n.push(this._rangePromises.get(h));
        else {
          const d = i.getRange(e, a).then(() => {
            this._rangePromises.delete(h);
          }, () => {
            this._rangePromises.delete(h);
          });
          this._rangePromises.set(h, d), n.push(d);
        }
      }
    }), Promise.all(n).then(() => {
      let a = this._glyphIndex[e];
      a || (a = {}, this._glyphIndex[e] = a);
      for (const h of s) {
        const d = a[h];
        if (d) {
          t[h] = { sdf: !0, rect: d.rect, metrics: d.metrics, page: d.page, code: h };
          continue;
        }
        const y = i.getGlyph(e, h);
        if (!y || !y.metrics)
          continue;
        const u = y.metrics;
        let c;
        if (u.width === 0)
          c = new A(0, 0, 0, 0);
        else {
          const f = u.width + 6, g = u.height + 2 * 3;
          let m = f % 4 ? 4 - f % 4 : 4, w = g % 4 ? 4 - g % 4 : 4;
          m === 1 && (m = 5), w === 1 && (w = 5), c = this._binPack.allocate(f + m, g + w), c.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(void 0), this._binPack = new F(this.width - 4, this.height - 4), c = this._binPack.allocate(f + m, g + w));
          const b = this._glyphData[this._currentPage], x = y.bitmap;
          let P, S;
          if (x)
            for (let D = 0; D < g; D++) {
              P = f * D, S = this.width * (c.y + D + 1) + c.x;
              for (let B = 0; B < f; B++)
                b[S + B + 1] = x[P + B];
            }
        }
        a[h] = { rect: c, metrics: u, tileIDs: null, page: this._currentPage }, t[h] = { sdf: !0, rect: c, metrics: u, page: this._currentPage, code: h }, this._dirties[this._currentPage] = !0;
      }
      return t;
    });
  }
  removeGlyphs(e) {
    for (const s in this._glyphIndex) {
      const t = this._glyphIndex[s];
      if (!t)
        continue;
      let i;
      for (const r in t)
        if (i = t[r], i.tileIDs.delete(e), i.tileIDs.size === 0) {
          const o = this._glyphData[i.page], n = i.rect;
          let a, h;
          for (let d = 0; d < n.height; d++)
            for (a = this.width * (n.y + d) + n.x, h = 0; h < n.width; h++)
              o[a + h] = 0;
          delete t[r], this._dirties[i.page] = !0;
        }
    }
  }
  bind(e, s, t, i = 0) {
    this._textures[t] || (this._textures[t] = new _e(e, { pixelFormat: ye.ALPHA, dataType: fe.UNSIGNED_BYTE, width: this.width, height: this.height }, new Uint8Array(this.width * this.height)));
    const r = this._textures[t];
    r.setSamplingMode(s), this._dirties[t] && r.setData(this._glyphData[t]), e.bindTexture(r, i), this._dirties[t] = !1;
  }
  dispose() {
    this._binPack = null;
    for (const e of this._textures)
      e && e.dispose();
    this._textures.length = 0;
  }
}, re = class {
  constructor(e) {
    if (this._metrics = [], this._bitmaps = [], e)
      for (; e.next(); )
        switch (e.tag()) {
          case 1: {
            const s = e.getMessage();
            for (; s.next(); )
              switch (s.tag()) {
                case 3: {
                  const t = s.getMessage();
                  let i, r, o, n, a, h, d;
                  for (; t.next(); )
                    switch (t.tag()) {
                      case 1:
                        i = t.getUInt32();
                        break;
                      case 2:
                        r = t.getBytes();
                        break;
                      case 3:
                        o = t.getUInt32();
                        break;
                      case 4:
                        n = t.getUInt32();
                        break;
                      case 5:
                        a = t.getSInt32();
                        break;
                      case 6:
                        h = t.getSInt32();
                        break;
                      case 7:
                        d = t.getUInt32();
                        break;
                      default:
                        t.skip();
                    }
                  t.release(), i && (this._metrics[i] = { width: o, height: n, left: a, top: h, advance: d }, this._bitmaps[i] = r);
                  break;
                }
                default:
                  s.skip();
              }
            s.release();
            break;
          }
          default:
            e.skip();
        }
  }
  getMetrics(e) {
    return this._metrics[e];
  }
  getBitmap(e) {
    return this._bitmaps[e];
  }
}, Ze = class {
  constructor() {
    this._ranges = [];
  }
  getRange(e) {
    return this._ranges[e];
  }
  addRange(e, s) {
    this._ranges[e] = s;
  }
}, ne = class {
  constructor(e) {
    this._glyphInfo = {}, this._baseURL = e;
  }
  getRange(e, s) {
    const t = this._getFontStack(e);
    if (t.getRange(s))
      return Promise.resolve();
    const i = 256 * s, r = i + 255, o = this._baseURL.replace("{fontstack}", e).replace("{range}", i + "-" + r);
    return we(o, { responseType: "array-buffer" }).then((n) => {
      t.addRange(s, new re(new xe(new Uint8Array(n.data), new DataView(n.data))));
    }).catch(() => {
      t.addRange(s, new re());
    });
  }
  getGlyph(e, s) {
    const t = this._getFontStack(e);
    if (!t)
      return;
    const i = Math.floor(s / 256);
    if (i > 256)
      return;
    const r = t.getRange(i);
    return r ? { metrics: r.getMetrics(s), bitmap: r.getBitmap(s) } : void 0;
  }
  _getFontStack(e) {
    let s = this._glyphInfo[e];
    return s || (s = this._glyphInfo[e] = new Ze()), s;
  }
};
const et = "dasharray-";
let J = class ge {
  constructor(e, s, t = 0) {
    this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, (e <= 0 || s <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = e, this._pageHeight = s, t > 0 && (this._maxItemSize = t), this._binPack = new F(e - 4, s - 4);
  }
  dispose() {
    this._binPack = null, this._mosaicRects = {};
    for (const e of this._textures)
      e && e.dispose();
    this._textures.length = 0;
  }
  getWidth(e) {
    return e >= this._size.length ? -1 : this._size[e][0];
  }
  getHeight(e) {
    return e >= this._size.length ? -1 : this._size[e][1];
  }
  getPageSize(e) {
    return e >= this._size.length ? null : this._size[e];
  }
  setSpriteSource(e) {
    if (this.dispose(), this.pixelRatio = e.devicePixelRatio, this._mosaicsData.length === 0) {
      this._binPack = new F(this._pageWidth - 4, this._pageHeight - 4);
      const s = Math.floor(this._pageWidth), t = Math.floor(this._pageHeight), i = new Uint32Array(s * t);
      this._mosaicsData[0] = i, this._dirties.push(!0), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
    }
    this._sprites = e;
  }
  getSpriteItem(e, s = !1) {
    let t, i, r = this._mosaicRects[e];
    if (r)
      return r;
    if (!this._sprites || this._sprites.loadStatus !== "loaded" || (e && e.startsWith(et) ? ([t, i] = this._rasterizeDash(e), s = !0) : t = this._sprites.getSpriteInfo(e), !t || !t.width || !t.height || t.width < 0 || t.height < 0))
      return null;
    const o = t.width, n = t.height, [a, h, d] = this._allocateImage(o, n);
    return a.width <= 0 ? null : (this._copy(a, t, h, d, s, i), r = { rect: a, width: o, height: n, sdf: t.sdf, simplePattern: !1, pixelRatio: t.pixelRatio, page: h }, this._mosaicRects[e] = r, r);
  }
  getSpriteItems(e) {
    const s = {};
    for (const t of e)
      s[t.name] = this.getSpriteItem(t.name, t.repeat);
    return s;
  }
  getMosaicItemPosition(e, s) {
    const t = this.getSpriteItem(e, s), i = t && t.rect;
    if (!i)
      return null;
    i.width = t.width, i.height = t.height;
    const r = t.width, o = t.height, n = 2;
    return { tl: [i.x + n, i.y + n], br: [i.x + n + r, i.y + n + o], page: t.page };
  }
  bind(e, s, t = 0, i = 0) {
    this._textures[t] || (this._textures[t] = new _e(e, { pixelFormat: ye.RGBA, dataType: fe.UNSIGNED_BYTE, wrapMode: Fe.CLAMP_TO_EDGE, width: this._size[t][0], height: this._size[t][1] }, new Uint8Array(this._mosaicsData[t].buffer)));
    const r = this._textures[t];
    r.setSamplingMode(s), this._dirties[t] && r.setData(new Uint8Array(this._mosaicsData[t].buffer)), e.bindTexture(r, i), this._dirties[t] = !1;
  }
  static _copyBits(e, s, t, i, r, o, n, a, h, d, y) {
    let u = i * s + t, c = a * o + n;
    if (y) {
      c -= o;
      for (let _ = -1; _ <= d; _++, u = ((_ + d) % d + i) * s + t, c += o)
        for (let f = -1; f <= h; f++)
          r[c + f] = e[u + (f + h) % h];
    } else
      for (let _ = 0; _ < d; _++) {
        for (let f = 0; f < h; f++)
          r[c + f] = e[u + f];
        u += s, c += o;
      }
  }
  _copy(e, s, t, i, r, o) {
    if (!this._sprites || this._sprites.loadStatus !== "loaded" || t >= this._mosaicsData.length)
      return;
    const n = new Uint32Array(o ? o.buffer : this._sprites.image.buffer), a = this._mosaicsData[t];
    a && n || console.error("Source or target images are uninitialized!");
    const h = 2, d = o ? s.width : this._sprites.width;
    ge._copyBits(n, d, s.x, s.y, a, i[0], e.x + h, e.y + h, s.width, s.height, r), this._dirties[t] = !0;
  }
  _allocateImage(e, s) {
    e += 2, s += 2;
    const t = Math.max(e, s);
    if (this._maxItemSize && this._maxItemSize < t) {
      const n = new A(0, 0, e, s);
      return this._mosaicsData.push(new Uint32Array(e * s)), this._dirties.push(!0), this._size.push([e, s]), this._textures.push(void 0), [n, this._mosaicsData.length - 1, [e, s]];
    }
    let i = e % 4 ? 4 - e % 4 : 4, r = s % 4 ? 4 - s % 4 : 4;
    i === 1 && (i = 5), r === 1 && (r = 5);
    const o = this._binPack.allocate(e + i, s + r);
    return o.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(!0), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new F(this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(e, s)) : [o, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _rasterizeDash(e) {
    const s = /\[(.*?)\]/, t = e.match(s);
    if (!t)
      return null;
    const i = t[1].split(",").map(Number), r = e.slice(e.lastIndexOf("-") + 1), [o, n, a] = $e.rasterizeDash(i, r);
    return [{ x: 0, y: 0, width: n, height: a, sdf: !0, pixelRatio: 1 }, new Uint8Array(o.buffer)];
  }
};
function oe(l, e, s, t, i, r) {
  l.fillStyle = e, l.fillRect(s, t, i, r);
}
function tt(l, e, s, t, i, r) {
  l.strokeStyle = e, l.strokeRect(s, t, i, r);
}
function st(l, e) {
  const s = window.COLLISION_XRAY;
  for (let t = 0; t < e.length; ++t) {
    const i = !e[t].unique.show;
    if (s || !i)
      for (const r of e[t].colliders) {
        if (!r.enabled)
          continue;
        const o = !e[t].unique.parts[r.partIndex].show;
        if (!s && o)
          continue;
        const n = r.xScreen, a = r.yScreen, h = r.dxScreen, d = r.dyScreen;
        l.globalAlpha = i || o ? 0.2 : 1, oe(l, "green", n - 1, a - 1, 3, 3), tt(l, "red", n + h, a + d, r.width, r.height), oe(l, "blue", n + h - 1, a + d - 1, 3, 3), l.globalAlpha = 1;
      }
  }
}
function it(l, e, s) {
  if (!window.PERFORMANCE_RECORDING_STORAGE)
    return;
  const t = window.PERFORMANCE_RECORDING_STORAGE;
  t.perf = t.perf || {};
  const i = t.perf;
  i[l] = i[l] || { start: null, time: 0, min: void 0, max: void 0, samples: [], unit: s }, i[l].time += e, i[l].samples.push(e), (i[l].min == null || e < i[l].min) && (i[l].min = e), (i[l].max == null || e > i[l].max) && (i[l].max = e);
}
let rt = class {
  constructor(e, s, t) {
    this._layer = e, this._styleRepository = s, this.devicePixelRatio = t, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null;
  }
  destroy() {
    this._connection && (this._connection.close(), this._connection = null), this._styleRepository = null, this._layer = null, this._spriteMosaic && (this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic = null);
  }
  get spriteMosaic() {
    return this._spriteSourcePromise.then(() => this._spriteMosaic);
  }
  get glyphMosaic() {
    return this._glyphMosaic;
  }
  async start(e) {
    this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, e), this._spriteSourcePromise.then((t) => {
      this._spriteMosaic = new J(1024, 1024, 250), this._spriteMosaic.setSpriteSource(t);
    });
    const s = new ne(this._layer.currentStyleInfo.glyphsUrl ? X(this._layer.currentStyleInfo.glyphsUrl, { ...this._layer.customParameters, token: this._layer.apiKey }) : null);
    this._glyphMosaic = new ie(1024, 1024, s), this._broadcastPromise = Se("WorkerTileHandler", { client: this, schedule: e.schedule, signal: e.signal }).then((t) => (this._connection = t, Promise.all(this._connection.broadcast("setStyle", this._layer.currentStyleInfo.style, e))));
  }
  async updateStyle(e) {
    return await this._broadcastPromise, this._broadcastPromise = Promise.all(this._connection.broadcast("updateStyle", e)), this._broadcastPromise;
  }
  setSpriteSource(e) {
    const s = new J(1024, 1024, 250);
    return s.setSpriteSource(e), this._spriteMosaic = s, this._spriteSourcePromise = Promise.resolve(e), s;
  }
  async setStyle(e, s) {
    await this._broadcastPromise, this._styleRepository = e, this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, null), this._spriteSourcePromise.then((i) => {
      this._spriteMosaic = new J(1024, 1024, 250), this._spriteMosaic.setSpriteSource(i);
    });
    const t = new ne(this._layer.currentStyleInfo.glyphsUrl ? X(this._layer.currentStyleInfo.glyphsUrl, { ...this._layer.customParameters, token: this._layer.apiKey }) : null);
    return this._glyphMosaic = new ie(1024, 1024, t), this._broadcastPromise = Promise.all(this._connection.broadcast("setStyle", s)), this._broadcastPromise;
  }
  fetchTileData(e, s) {
    return this._getRefKeys(e, s).then((t) => {
      const i = this._layer.sourceNameToSource, r = [];
      for (const o in i)
        r.push(o);
      return this._getSourcesData(r, t, s);
    });
  }
  parseTileData(e, s) {
    const t = e && e.data;
    if (!t)
      return Promise.resolve(null);
    const { sourceName2DataAndRefKey: i, transferList: r } = t;
    return Object.keys(i).length === 0 ? Promise.resolve(null) : this._broadcastPromise.then(() => this._connection.getAvailableClient().then((o) => o.invoke("createTileAndParse", { key: e.key.id, sourceName2DataAndRefKey: i, styleLayerUIDs: e.styleLayerUIDs }, { ...s, transferList: r })));
  }
  async getSprites(e) {
    return await this._spriteSourcePromise, this._spriteMosaic.getSpriteItems(e);
  }
  getGlyphs(e) {
    return this._glyphMosaic.getGlyphItems(e.font, e.codePoints);
  }
  perfReport({ key: e, milliseconds: s }) {
    it(e, s, "ms");
  }
  async _getTilePayload(e, s, t) {
    const i = L.pool.acquire(e.id), r = this._layer.sourceNameToSource[s], { level: o, row: n, col: a } = i;
    L.pool.release(i);
    try {
      return { protobuff: await r.requestTile(o, n, a, t), sourceName: s };
    } catch (h) {
      if (G(h))
        throw h;
      return { protobuff: null, sourceName: s };
    }
  }
  _getRefKeys(e, s) {
    const t = this._layer.sourceNameToSource, i = new Array();
    for (const r in t) {
      const o = t[r].getRefKey(e, s);
      i.push(o);
    }
    return Z(i);
  }
  _getSourcesData(e, s, t) {
    const i = [];
    for (let r = 0; r < s.length; r++)
      if (s[r].value == null || e[r] == null)
        i.push(null);
      else {
        const o = this._getTilePayload(s[r].value, e[r], t);
        i.push(o);
      }
    return Z(i).then((r) => {
      const o = {}, n = [];
      for (let a = 0; a < r.length; a++)
        if (r[a].value && r[a].value && r[a].value.protobuff && r[a].value.protobuff.byteLength > 0) {
          const h = s[a].value.id;
          o[r[a].value.sourceName] = { refKey: h, protobuff: r[a].value.protobuff }, n.push(r[a].value.protobuff);
        }
      return { sourceName2DataAndRefKey: o, transferList: n };
    });
  }
};
const ae = 512, nt = 1e-6, ot = (l, e) => l + 1 / (1 << 2 * e);
let at = class {
  constructor(e, s) {
    this._tiles = /* @__PURE__ */ new Map(), this._tileCache = new Ie(40, (t) => t.dispose()), this._viewSize = [0, 0], this._visibleTiles = /* @__PURE__ */ new Map(), this.acquireTile = e.acquireTile, this.releaseTile = e.releaseTile, this.tileInfoView = e.tileInfoView, this._container = s;
  }
  destroy() {
    for (const [e, s] of this._tiles)
      s.dispose();
    this._tiles = null, this._tileCache.clear(), this._tileCache = null;
  }
  update(e) {
    this._updateCacheSize(e);
    const s = this.tileInfoView, t = s.getTileCoverage(e.state, 0, "smallest"), { spans: i, lodInfo: r } = t, { level: o } = r, n = this._tiles, a = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
    for (const { row: y, colFrom: u, colTo: c } of i)
      for (let _ = u; _ <= c; _++) {
        const f = L.getId(o, y, r.normalizeCol(_), r.getWorldForColumn(_)), g = this._getOrAcquireTile(f);
        a.add(f), g.processed() ? this._addToContainer(g) : h.add(new L(f));
      }
    for (const [y, u] of n)
      u.isCoverage = a.has(y);
    for (const y of h)
      this._findPlaceholdersForMissingTiles(y, a);
    let d = !1;
    for (const [y, u] of n)
      u.neededForCoverage = a.has(y), u.neededForCoverage || u.isHoldingForFade && s.intersects(t, u.key) && a.add(y), u.isFading && (d = !0);
    for (const [y, u] of this._tiles)
      a.has(y) || this._releaseTile(y);
    return de.pool.release(t), !d;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  _findPlaceholdersForMissingTiles(e, s) {
    const t = [];
    for (const [r, o] of this._tiles)
      this._addPlaceholderChild(t, o, e, s);
    const i = t.reduce(ot, 0);
    Math.abs(1 - i) < nt || this._addPlaceholderParent(e.id, s);
  }
  _addPlaceholderChild(e, s, t, i) {
    s.key.level <= t.level || !s.hasData() || ht(t, s.key) && (this._addToContainer(s), i.add(s.id), e.push(s.key.level - t.level));
  }
  _addPlaceholderParent(e, s) {
    const t = this._tiles;
    let i = e;
    for (; ; ) {
      if (i = lt(i), !i || s.has(i))
        return;
      const r = t.get(i);
      if (r && r.hasData())
        return this._addToContainer(r), void s.add(r.id);
    }
  }
  _getOrAcquireTile(e) {
    let s = this._tiles.get(e);
    return s || (s = this._tileCache.pop(e), s || (s = this.acquireTile(new L(e))), this._tiles.set(e, s), s);
  }
  _releaseTile(e) {
    const s = this._tiles.get(e);
    this.releaseTile(s), this._removeFromContainer(s), this._tiles.delete(e), s.hasData() ? this._tileCache.put(e, s, 1) : s.dispose();
  }
  _addToContainer(e) {
    let s;
    const t = [], i = this._container;
    if (i.contains(e))
      return;
    const r = this._visibleTiles;
    for (const [o, n] of r)
      this._canConnectDirectly(e, n) && t.push(n), M(s) && this._canConnectDirectly(n, e) && (s = n);
    if (p(s)) {
      for (const o of t)
        s.childrenTiles.delete(o), e.childrenTiles.add(o), o.parentTile = e;
      s.childrenTiles.add(e), e.parentTile = s;
    } else
      for (const o of t)
        e.childrenTiles.add(o), o.parentTile = e;
    r.set(e.id, e), i.addChild(e);
  }
  _removeFromContainer(e) {
    if (this._visibleTiles.delete(e.id), this._container.removeChild(e), p(e.parentTile)) {
      e.parentTile.childrenTiles.delete(e);
      for (const s of e.childrenTiles)
        p(e.parentTile) && e.parentTile.childrenTiles.add(s);
    }
    for (const s of e.childrenTiles)
      s.parentTile = e.parentTile;
    e.parentTile = null, e.childrenTiles.clear();
  }
  _canConnectDirectly(e, s) {
    const t = e.key;
    let { level: i, row: r, col: o, world: n } = s.key;
    const a = this._visibleTiles;
    for (; i > 0; ) {
      if (i--, r >>= 1, o >>= 1, t.level === i && t.row === r && t.col === o && t.world === n)
        return !0;
      if (a.has(`${i}/${r}/${o}/${n}`))
        return !1;
    }
    return !1;
  }
  _updateCacheSize(e) {
    const s = e.state.size;
    if (s[0] === this._viewSize[0] && s[1] === this._viewSize[1])
      return;
    const t = Math.ceil(s[0] / ae) + 1, i = Math.ceil(s[1] / ae) + 1;
    this._viewSize[0] = s[0], this._viewSize[1] = s[1], this._tileCache.maxSize = 5 * t * i;
  }
};
function lt(l) {
  const [e, s, t, i] = l.split("/"), r = parseInt(e, 10);
  return r === 0 ? null : `${r - 1}/${parseInt(s, 10) >> 1}/${parseInt(t, 10) >> 1}/${parseInt(i, 10)}`;
}
function ht(l, e) {
  const s = e.level - l.level;
  return l.row === e.row >> s && l.col === e.col >> s && l.world === e.world;
}
let ct = class {
  constructor(e) {
    this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = e;
  }
}, ut = class {
  constructor() {
    this.tileSymbols = [], this.parts = [{ startTime: 0, startOpacity: 0, targetOpacity: 0, show: !1 }, { startTime: 0, startOpacity: 0, targetOpacity: 0, show: !1 }], this.show = !1;
  }
};
function le(l, e, s, t, i, r) {
  const o = s - i;
  if (o >= 0)
    return (e >> o) + (t - (r << o)) * (l >> o);
  const n = -o;
  return e - (r - (t << n)) * (l >> n) << n;
}
let me = class {
  constructor(e, s, t) {
    this._rows = Math.ceil(s / t), this._columns = Math.ceil(e / t), this._cellSize = t, this.cells = new Array(this._rows);
    for (let i = 0; i < this._rows; i++) {
      this.cells[i] = new Array(this._columns);
      for (let r = 0; r < this._columns; r++)
        this.cells[i][r] = [];
    }
  }
  getCell(e, s) {
    const t = Math.min(Math.max(Math.floor(s / this._cellSize), 0), this._rows - 1), i = Math.min(Math.max(Math.floor(e / this._cellSize), 0), this._columns - 1);
    return this.cells[t] && this.cells[t][i] || null;
  }
  getCellSpan(e, s, t, i) {
    return [Math.min(Math.max(Math.floor(e / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(s / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(t / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(i / this._cellSize), 0), this.rows - 1)];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
};
function dt(l, e, s, t, i, r) {
  const o = e[t++];
  for (let n = 0; n < o; n++) {
    const a = new ct(r);
    a.xTile = e[t++], a.yTile = e[t++], a.hash = e[t++], a.priority = e[t++];
    const h = e[t++];
    for (let u = 0; u < h; u++) {
      const c = e[t++], _ = e[t++], f = e[t++], g = e[t++], m = !!e[t++], w = e[t++], b = s[t++], x = s[t++], P = e[t++], S = e[t++];
      a.colliders.push({ xTile: c, yTile: _, dxPixels: f, dyPixels: g, hard: m, partIndex: w, width: P, height: S, minLod: b, maxLod: x });
    }
    const d = l[t++];
    for (let u = 0; u < d; u++)
      a.textVertexRanges.push([l[t++], l[t++]]);
    const y = l[t++];
    for (let u = 0; u < y; u++)
      a.iconVertexRanges.push([l[t++], l[t++]]);
    i.push(a);
  }
  return t;
}
function yt(l, e, s) {
  for (const [t, i] of l.symbols)
    ft(l, e, s, i, t);
}
function ft(l, e, s, t, i) {
  const r = l.layerData.get(i);
  if (r.type === R.SYMBOL) {
    for (const o of t) {
      const n = o.unique;
      let a;
      if (o.selectedForRendering) {
        const h = n.parts[0], d = h.startOpacity, y = h.targetOpacity;
        l.allSymbolsFadingOut = l.allSymbolsFadingOut && y === 0;
        const u = s ? Math.floor(127 * d) | y << 7 : y ? 255 : 0;
        a = u << 24 | u << 16 | u << 8 | u;
      } else
        a = 0;
      for (const [h, d] of o.iconVertexRanges)
        for (let y = h; y < h + d; y += 4)
          r.iconOpacity[y / 4] = a;
      if (o.selectedForRendering) {
        const h = n.parts[1], d = h.startOpacity, y = h.targetOpacity;
        l.allSymbolsFadingOut = l.allSymbolsFadingOut && y === 0;
        const u = s ? Math.floor(127 * d) | y << 7 : y ? 255 : 0;
        a = u << 24 | u << 16 | u << 8 | u;
      } else
        a = 0;
      for (const [h, d] of o.textVertexRanges)
        for (let y = h; y < h + d; y += 4)
          r.textOpacity[y / 4] = a;
    }
    r.lastOpacityUpdate = e, r.opacityChanged = !0;
  }
}
class j {
  constructor(e, s) {
    this.layerUIDs = [], this.isDestroyed = !1, this.data = e, this.memoryUsed = e.byteLength;
    let t = 1;
    const i = new Uint32Array(e);
    this.layerUIDs = [];
    const r = i[t++];
    for (let o = 0; o < r; o++)
      this.layerUIDs[o] = i[t++];
    this.bufferDataOffset = t, s && (this.layer = s.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return M(this.data);
  }
  get offset() {
    return this.bufferDataOffset;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), this.isDestroyed = !0);
  }
  prepareForRendering(e) {
    M(this.data) || (this.doPrepareForRendering(e, this.data, this.bufferDataOffset), this.data = null);
  }
}
let _t = class extends j {
  constructor(e, s) {
    super(e, s), this.type = R.LINE, this.lineIndexStart = 0, this.lineIndexCount = 0;
    const t = new Uint32Array(e);
    let i = this.bufferDataOffset;
    this.lineIndexStart = t[i++], this.lineIndexCount = t[i++];
    const r = t[i++];
    if (r > 0) {
      const o = /* @__PURE__ */ new Map();
      for (let n = 0; n < r; n++) {
        const a = t[i++], h = t[i++], d = t[i++];
        o.set(a, [h, d]);
      }
      this.patternMap = o;
    }
    this.bufferDataOffset = i;
  }
  hasData() {
    return this.lineIndexCount > 0;
  }
  triangleCount() {
    return this.lineIndexCount / 3;
  }
  doDestroy() {
    p(this.lineVertexArrayObject) && this.lineVertexArrayObject.dispose(), p(this.lineVertexBuffer) && this.lineVertexBuffer.dispose(), p(this.lineIndexBuffer) && this.lineIndexBuffer.dispose(), this.lineVertexArrayObject = null, this.lineVertexBuffer = null, this.lineIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), o = i[t++];
    this.lineVertexBuffer = v.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, o)), t += o;
    const n = i[t++];
    this.lineIndexBuffer = v.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, n)), t += n;
    const a = this.layer.lineMaterial;
    this.lineVertexArrayObject = new z(e, a.getAttributeLocations(), a.getLayoutInfo(), { geometry: this.lineVertexBuffer }, this.lineIndexBuffer);
  }
}, pt = class extends j {
  constructor(e, s) {
    super(e, s), this.type = R.FILL, this.fillIndexStart = 0, this.fillIndexCount = 0, this.outlineIndexStart = 0, this.outlineIndexCount = 0;
    const t = new Uint32Array(e);
    let i = this.bufferDataOffset;
    this.fillIndexStart = t[i++], this.fillIndexCount = t[i++], this.outlineIndexStart = t[i++], this.outlineIndexCount = t[i++];
    const r = t[i++];
    if (r > 0) {
      const o = /* @__PURE__ */ new Map();
      for (let n = 0; n < r; n++) {
        const a = t[i++], h = t[i++], d = t[i++];
        o.set(a, [h, d]);
      }
      this.patternMap = o;
    }
    this.bufferDataOffset = i;
  }
  hasData() {
    return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
  }
  triangleCount() {
    return (this.fillIndexCount + this.outlineIndexCount) / 3;
  }
  doDestroy() {
    p(this.fillVertexArrayObject) && this.fillVertexArrayObject.dispose(), p(this.fillVertexBuffer) && this.fillVertexBuffer.dispose(), p(this.fillIndexBuffer) && this.fillIndexBuffer.dispose(), this.fillVertexArrayObject = null, this.fillVertexBuffer = null, this.fillIndexBuffer = null, p(this.outlineVertexArrayObject) && this.outlineVertexArrayObject.dispose(), p(this.outlineVertexBuffer) && this.outlineVertexBuffer.dispose(), p(this.outlineIndexBuffer) && this.outlineIndexBuffer.dispose(), this.outlineVertexArrayObject = null, this.outlineVertexBuffer = null, this.outlineIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), o = i[t++];
    this.fillVertexBuffer = v.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, o)), t += o;
    const n = i[t++];
    this.fillIndexBuffer = v.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, n)), t += n;
    const a = i[t++];
    this.outlineVertexBuffer = v.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, a)), t += a;
    const h = i[t++];
    this.outlineIndexBuffer = v.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, h)), t += h;
    const d = this.layer, y = d.fillMaterial, u = d.outlineMaterial;
    this.fillVertexArrayObject = new z(e, y.getAttributeLocations(), y.getLayoutInfo(), { geometry: this.fillVertexBuffer }, this.fillIndexBuffer), this.outlineVertexArrayObject = new z(e, u.getAttributeLocations(), u.getLayoutInfo(), { geometry: this.outlineVertexBuffer }, this.outlineIndexBuffer);
  }
};
class gt extends j {
  constructor(e, s, t) {
    super(e, s), this.type = R.SYMBOL, this.iconPerPageElementsMap = /* @__PURE__ */ new Map(), this.glyphPerPageElementsMap = /* @__PURE__ */ new Map(), this.symbolInstances = [], this.isIconSDF = !1, this.opacityChanged = !1, this.lastOpacityUpdate = 0, this.symbols = [];
    const i = new Uint32Array(e), r = new Int32Array(e), o = new Float32Array(e);
    let n = this.bufferDataOffset;
    this.isIconSDF = !!i[n++];
    const a = i[n++];
    for (let u = 0; u < a; u++) {
      const c = i[n++], _ = i[n++], f = i[n++];
      this.iconPerPageElementsMap.set(c, [_, f]);
    }
    const h = i[n++];
    for (let u = 0; u < h; u++) {
      const c = i[n++], _ = i[n++], f = i[n++];
      this.glyphPerPageElementsMap.set(c, [_, f]);
    }
    const d = i[n++], y = i[n++];
    this.iconOpacity = new Int32Array(d), this.textOpacity = new Int32Array(y), n = dt(i, r, o, n, this.symbols, t), this.bufferDataOffset = n;
  }
  hasData() {
    return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
  }
  triangleCount() {
    let e = 0;
    for (const [s, t] of this.iconPerPageElementsMap)
      e += t[1];
    for (const [s, t] of this.glyphPerPageElementsMap)
      e += t[1];
    return e / 3;
  }
  doDestroy() {
    p(this.iconVertexArrayObject) && this.iconVertexArrayObject.dispose(), p(this.iconVertexBuffer) && this.iconVertexBuffer.dispose(), p(this.iconOpacityBuffer) && this.iconOpacityBuffer.dispose(), p(this.iconIndexBuffer) && this.iconIndexBuffer.dispose(), this.iconVertexArrayObject = null, this.iconVertexBuffer = null, this.iconOpacityBuffer = null, this.iconIndexBuffer = null, p(this.textVertexArrayObject) && this.textVertexArrayObject.dispose(), p(this.textVertexBuffer) && this.textVertexBuffer.dispose(), p(this.textOpacityBuffer) && this.textOpacityBuffer.dispose(), p(this.textIndexBuffer) && this.textIndexBuffer.dispose(), this.textVertexArrayObject = null, this.textVertexBuffer = null, this.textOpacityBuffer = null, this.textIndexBuffer = null, this.memoryUsed = 0;
  }
  updateOpacityInfo() {
    if (!this.opacityChanged)
      return;
    this.opacityChanged = !1;
    const e = k(this.iconOpacity), s = k(this.iconOpacityBuffer);
    e.length > 0 && e.byteLength === s.size && s.setSubData(e);
    const t = k(this.textOpacity), i = k(this.textOpacityBuffer);
    t.length > 0 && t.byteLength === i.size && i.setSubData(t);
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), o = i[t++];
    this.iconVertexBuffer = v.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, o)), t += o;
    const n = i[t++];
    this.iconIndexBuffer = v.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, n)), t += n;
    const a = i[t++];
    this.textVertexBuffer = v.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, a)), t += a;
    const h = i[t++];
    this.textIndexBuffer = v.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, h)), t += h, this.iconOpacityBuffer = v.createVertex(e, C.STATIC_DRAW, k(this.iconOpacity).buffer), this.textOpacityBuffer = v.createVertex(e, C.STATIC_DRAW, k(this.textOpacity).buffer);
    const d = this.layer, y = d.iconMaterial, u = d.textMaterial;
    this.iconVertexArrayObject = new z(e, y.getAttributeLocations(), y.getLayoutInfo(), { geometry: this.iconVertexBuffer, opacity: this.iconOpacityBuffer }, this.iconIndexBuffer), this.textVertexArrayObject = new z(e, u.getAttributeLocations(), u.getLayoutInfo(), { geometry: this.textVertexBuffer, opacity: this.textOpacityBuffer }, this.textIndexBuffer);
  }
}
class mt extends j {
  constructor(e, s) {
    super(e, s), this.type = R.CIRCLE, this.circleIndexStart = 0, this.circleIndexCount = 0;
    const t = new Uint32Array(e);
    let i = this.bufferDataOffset;
    this.circleIndexStart = t[i++], this.circleIndexCount = t[i++], this.bufferDataOffset = i;
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
    p(this.circleVertexArrayObject) && this.circleVertexArrayObject.dispose(), p(this.circleVertexBuffer) && this.circleVertexBuffer.dispose(), p(this.circleIndexBuffer) && this.circleIndexBuffer.dispose(), this.circleVertexArrayObject = null, this.circleVertexBuffer = null, this.circleIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), o = i[t++];
    this.circleVertexBuffer = v.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, o)), t += o;
    const n = i[t++];
    this.circleIndexBuffer = v.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, n)), t += n;
    const a = this.layer.circleMaterial;
    this.circleVertexArrayObject = new z(e, a.getAttributeLocations(), a.getLayoutInfo(), { geometry: this.circleVertexBuffer }, this.circleIndexBuffer);
  }
}
let bt = class be extends pe {
  constructor(e, s, t, i, r, o, n = null) {
    super(e, s, t, i, r, 4096, 4096), this._memCache = n, this.type = "vector-tile", this._referenced = 0, this._hasSymbolBuckets = !1, this._memoryUsedByLayerData = 0, this.layerData = /* @__PURE__ */ new Map(), this.layerCount = 0, this.status = "loading", this.allSymbolsFadingOut = !1, this.lastOpacityUpdate = 0, this.symbols = /* @__PURE__ */ new Map(), this.isCoverage = !1, this.neededForCoverage = !1, this.decluttered = !1, this.invalidating = !1, this.parentTile = null, this.childrenTiles = /* @__PURE__ */ new Set(), this._processed = !1, this._referenced = 1, this.styleRepository = o, this.id = e.id;
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < Q;
  }
  get isHoldingForFade() {
    return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < Q);
  }
  get wasRequested() {
    return this.status === "errored" || this.status === "loaded" || this.status === "reloading";
  }
  setData(e) {
    this.changeDataImpl(e), this.requestRender(), this.ready(), this.invalidating = !1, this._processed = !0;
  }
  deleteLayerData(e) {
    let s = !1;
    for (const t of e)
      if (this.layerData.has(t)) {
        const i = this.layerData.get(t);
        this._memoryUsedByLayerData -= i.memoryUsed, i.type === R.SYMBOL && this.symbols.has(t) && (this.symbols.delete(t), s = !0), i.destroy(), this.layerData.delete(t), this.layerCount--;
      }
    p(this._memCache) && this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData), s && this.emit("symbols-changed"), this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerCount > 0;
  }
  dispose() {
    this.status !== "unloaded" && (wt.delete(this), be._destroyRenderBuckets(this.layerData), this.layerData = null, this.layerCount = 0, this._memoryUsedByLayerData = 0, this.destroy(), this.status = "unloaded");
  }
  release() {
    return --this._referenced == 0 && (this.dispose(), this.stage = null, !0);
  }
  retain() {
    ++this._referenced;
  }
  get referenced() {
    return this._referenced;
  }
  get memoryUsage() {
    return (this._memoryUsedByLayerData + 256) / (this._referenced || 1);
  }
  changeDataImpl(e) {
    let s = !1;
    if (e) {
      const { bucketsWithData: t, emptyBuckets: i } = e, r = this._createRenderBuckets(t);
      if (i && i.byteLength > 0) {
        const o = new Uint32Array(i);
        for (const n of o)
          this._deleteLayerData(n);
      }
      for (const [o, n] of r)
        this._deleteLayerData(o), n.type === R.SYMBOL && (this.symbols.set(o, n.symbols), s = !0), this._memoryUsedByLayerData += n.memoryUsed, this.layerData.set(o, n), this.layerCount++;
      p(this._memCache) && this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData);
    }
    this._hasSymbolBuckets = !1;
    for (const [t, i] of this.layerData)
      i.type === R.SYMBOL && (this._hasSymbolBuckets = !0);
    s && this.emit("symbols-changed");
  }
  attachWithContext(e) {
    this.stage = { context: e, trashDisplayObject(s) {
      s.processDetach();
    }, untrashDisplayObject: () => !1 };
  }
  setTransform(e, s) {
    super.setTransform(e, s);
    const t = s / (e.resolution * e.pixelRatio), i = this.width / this.rangeX * t, r = this.height / this.rangeY * t, o = [0, 0];
    e.toScreen(o, [this.x, this.y]);
    const n = this.transforms.tileUnitsToPixels;
    Te(n), Ce(n, n, o), ve(n, n, Math.PI * e.rotation / 180), Re(n, n, [i, r, 1]);
  }
  _createTransforms() {
    return { dvs: q(), tileMat3: q(), tileUnitsToPixels: q() };
  }
  static _destroyRenderBuckets(e) {
    if (!e)
      return;
    const s = /* @__PURE__ */ new Set();
    e.forEach((t) => {
      s.has(t) || (t.destroy(), s.add(t));
    }), e.clear();
  }
  _createRenderBuckets(e) {
    const s = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
    for (const i of e) {
      const r = this._deserializeBucket(i, t);
      for (const o of r.layerUIDs)
        s.set(o, r);
    }
    return s;
  }
  _deserializeBucket(e, s) {
    let t = s.get(e);
    if (t)
      return t;
    switch (new Uint32Array(e)[0]) {
      case R.FILL:
        t = new pt(e, this.styleRepository);
        break;
      case R.LINE:
        t = new _t(e, this.styleRepository);
        break;
      case R.SYMBOL:
        t = new gt(e, this.styleRepository, this);
        break;
      case R.CIRCLE:
        t = new mt(e, this.styleRepository);
    }
    return s.set(e, t), t;
  }
  _deleteLayerData(e) {
    if (!this.layerData.has(e))
      return;
    const s = this.layerData.get(e);
    this._memoryUsedByLayerData -= s.memoryUsed, s.destroy(), this.layerData.delete(e), this.layerCount--;
  }
};
const wt = /* @__PURE__ */ new Map();
function xt(l, e, s, t, i, r) {
  const { iconRotationAlignment: o, textRotationAlignment: n, iconTranslate: a, iconTranslateAnchor: h, textTranslate: d, textTranslateAnchor: y } = t;
  let u = 0;
  for (const c of l.colliders) {
    const [_, f] = c.partIndex === 0 ? a : d, g = c.partIndex === 0 ? h : y, m = c.minLod <= r && r <= c.maxLod;
    u += m ? 0 : 1, c.enabled = m, c.xScreen = c.xTile * i[0] + c.yTile * i[3] + i[6], c.yScreen = c.xTile * i[1] + c.yTile * i[4] + i[7], g === Je.MAP ? (c.xScreen += s * _ - e * f, c.yScreen += e * _ + s * f) : (c.xScreen += _, c.yScreen += f), V.VIEWPORT === (c.partIndex === 0 ? o : n) ? (c.dxScreen = c.dxPixels, c.dyScreen = c.dyPixels) : (c.dxScreen = s * (c.dxPixels + c.width / 2) - e * (c.dyPixels + c.height / 2) - c.width / 2, c.dyScreen = e * (c.dxPixels + c.width / 2) + s * (c.dyPixels + c.height / 2) - c.height / 2);
  }
  l.colliders.length > 0 && u === l.colliders.length && (l.unique.show = !1);
}
let St = class {
  constructor(e, s, t, i, r, o) {
    this._symbols = e, this._styleRepository = i, this._zoom = r, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = /* @__PURE__ */ new Map(), this._allNeededMatrices = /* @__PURE__ */ new Map(), this._gridIndex = new me(s, t, Ne), this._si = Math.sin(Math.PI * o / 180), this._co = Math.cos(Math.PI * o / 180);
    for (const n of e)
      for (const a of n.symbols)
        this._allNeededMatrices.has(a.tile) || this._allNeededMatrices.set(a.tile, De(a.tile.transforms.tileUnitsToPixels));
  }
  work(e) {
    const s = this._gridIndex;
    function t(r) {
      const o = r.xScreen + r.dxScreen, n = r.yScreen + r.dyScreen, a = o + r.width, h = n + r.height, [d, y, u, c] = s.getCellSpan(o, n, a, h);
      for (let _ = y; _ <= c; _++)
        for (let f = d; f <= u; f++) {
          const g = s.cells[_][f];
          for (const m of g) {
            const w = m.xScreen + m.dxScreen, b = m.yScreen + m.dyScreen, x = w + m.width, P = b + m.height;
            if (!(a < w || o > x || h < b || n > P))
              return !0;
          }
        }
      return !1;
    }
    const i = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const r = this._symbols[this._currentLayerCursor], o = this._getProperties(r.styleLayerUID);
      for (; this._currentSymbolCursor < r.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - i > e)
          return !1;
        const n = r.symbols[this._currentSymbolCursor];
        if (!n.unique.show)
          continue;
        xt(n, this._si, this._co, o, this._allNeededMatrices.get(n.tile), this._zoom);
        const a = n.unique;
        if (!a.show)
          continue;
        const { iconAllowOverlap: h, iconIgnorePlacement: d, textAllowOverlap: y, textIgnorePlacement: u } = o;
        for (const c of n.colliders) {
          if (!c.enabled)
            continue;
          const _ = a.parts[c.partIndex];
          _.show && !(c.partIndex ? y : h) && t(c) && (c.hard ? a.show = !1 : _.show = !1);
        }
        if (a.show)
          for (const c of n.colliders) {
            if (!c.enabled || (c.partIndex ? u : d) || !a.parts[c.partIndex].show)
              continue;
            const _ = c.xScreen + c.dxScreen, f = c.yScreen + c.dyScreen, g = _ + c.width, m = f + c.height, [w, b, x, P] = this._gridIndex.getCellSpan(_, f, g, m);
            for (let S = b; S <= P; S++)
              for (let D = w; D <= x; D++)
                this._gridIndex.cells[S][D].push(c);
          }
      }
    }
    return !0;
  }
  _getProperties(e) {
    const s = this._styleProps.get(e);
    if (s)
      return s;
    const t = this._zoom, i = this._styleRepository.getStyleLayerByUID(e), r = i.getLayoutValue("symbol-placement", t) !== je.POINT;
    let o = i.getLayoutValue("icon-rotation-alignment", t);
    o === V.AUTO && (o = r ? V.MAP : V.VIEWPORT);
    let n = i.getLayoutValue("text-rotation-alignment", t);
    n === V.AUTO && (n = r ? V.MAP : V.VIEWPORT);
    const a = i.getPaintValue("icon-translate", t), h = i.getPaintValue("icon-translate-anchor", t), d = i.getPaintValue("text-translate", t), y = i.getPaintValue("text-translate-anchor", t), u = { iconAllowOverlap: i.getLayoutValue("icon-allow-overlap", t), iconIgnorePlacement: i.getLayoutValue("icon-ignore-placement", t), textAllowOverlap: i.getLayoutValue("text-allow-overlap", t), textIgnorePlacement: i.getLayoutValue("text-ignore-placement", t), iconRotationAlignment: o, textRotationAlignment: n, iconTranslateAnchor: h, iconTranslate: a, textTranslateAnchor: y, textTranslate: d };
    return this._styleProps.set(e, u), u;
  }
};
function It(l, e) {
  if (l.priority - e.priority)
    return l.priority - e.priority;
  const s = l.tile.key, t = e.tile.key;
  return s.world - t.world ? s.world - t.world : s.level - t.level ? s.level - t.level : s.row - t.row ? s.row - t.row : s.col - t.col ? s.col - t.col : l.xTile - e.xTile ? l.xTile - e.xTile : l.yTile - e.yTile;
}
let Tt = class {
  constructor(e, s, t, i, r, o) {
    this._visibleTiles = e, this._symbolRepository = s, this._createCollisionJob = t, this._assignTileSymbolsOpacity = i, this._symbolLayerSorter = r, this._isLayerVisible = o, this._selectionJob = null, this._selectionJobCompleted = !1, this._collisionJob = null, this._collisionJobCompleted = !1, this._opacityJob = null, this._opacityJobCompleted = !1, this._running = !0;
  }
  get running() {
    return this._running;
  }
  setScreenSize(e, s) {
    this._screenWidth === e && this._screenHeight === s || this.restart(), this._screenWidth = e, this._screenHeight = s;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = !1, this._collisionJob = null, this._collisionJobCompleted = !1, this._opacityJob = null, this._opacityJobCompleted = !1, this._running = !0;
  }
  continue(e) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const s = performance.now();
      if (!this._selectionJob.work(e) || (this._selectionJobCompleted = !0, (e = Math.max(0, e - (performance.now() - s))) === 0))
        return !1;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const s = performance.now();
      if (!this._collisionJob.work(e) || (this._collisionJobCompleted = !0, (e = Math.max(0, e - (performance.now() - s))) === 0))
        return !1;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const s = performance.now();
      if (!this._opacityJob.work(e) || (this._opacityJobCompleted = !0, (e = Math.max(0, e - (performance.now() - s))) === 0))
        return !1;
    }
    return this._running = !1, !0;
  }
  _createSelectionJob() {
    const e = this._symbolRepository.uniqueSymbols;
    for (let a = 0; a < e.length; a++) {
      const h = e[a];
      for (let d = 0; d < h.uniqueSymbols.length; d++) {
        const y = h.uniqueSymbols[d];
        for (const u of y.tileSymbols)
          u.selectedForRendering = !1;
      }
    }
    const s = [];
    let t = 0, i = 0;
    const r = this._isLayerVisible;
    function o(a) {
      let h;
      const d = performance.now();
      for (; i < e.length; i++, t = 0) {
        const y = e[i], u = y.styleLayerUID;
        if (!r(u)) {
          s[i] || (s[i] = { styleLayerUID: u, symbols: [] });
          continue;
        }
        s[i] = s[i] || { styleLayerUID: u, symbols: [] };
        const c = s[i];
        for (; t < y.uniqueSymbols.length; t++) {
          if (h = y.uniqueSymbols[t], t % 100 == 99 && performance.now() - d > a)
            return !1;
          let _ = null, f = !1, g = !1;
          for (const m of h.tileSymbols)
            if (!g || !f) {
              const w = m.tile;
              (!_ || w.isCoverage || w.neededForCoverage && !f) && (_ = m, (w.neededForCoverage || w.isCoverage) && (g = !0), w.isCoverage && (f = !0));
            }
          if (_.selectedForRendering = !0, g) {
            c.symbols.push(_), h.show = !0;
            for (const m of h.parts)
              m.show = !0;
          } else
            h.show = !1;
        }
      }
      for (const y of s)
        y.symbols.sort(It);
      return !0;
    }
    const n = this._symbolLayerSorter;
    return { work: o, get sortedSymbols() {
      return s.sort(n);
    } };
  }
  _createOpacityJob() {
    const e = this._assignTileSymbolsOpacity, s = this._visibleTiles;
    let t = 0;
    function i(r, o) {
      const n = r.symbols;
      for (const [a, h] of n)
        Ct(h, o);
      e(r, o);
      for (const a of r.childrenTiles)
        i(a, o);
    }
    return { work(r) {
      const o = performance.now();
      for (; t < s.length; t++) {
        if (performance.now() - o > r)
          return !1;
        const n = s[t];
        p(n.parentTile) || i(n, performance.now());
      }
      return !0;
    } };
  }
};
function Ct(l, e) {
  for (const s of l) {
    const t = s.unique;
    for (const i of t.parts) {
      const r = i.targetOpacity > 0.5 ? 1 : -1;
      i.startOpacity += r * ((e - i.startTime) / Q), i.startOpacity = Math.min(Math.max(i.startOpacity, 0), 1), i.startTime = e, i.targetOpacity = t.show && i.show ? 1 : 0;
    }
  }
}
const vt = 32, Rt = 8, Dt = 64;
class Pt {
  constructor(e, s, t) {
    this.tileCoordRange = e, this._visibleTiles = s, this._createUnique = t, this._tiles = /* @__PURE__ */ new Map(), this._uniqueSymbolsReferences = /* @__PURE__ */ new Map();
  }
  get uniqueSymbols() {
    return M(this._uniqueSymbolLayerArray) && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  add(e, s) {
    this._uniqueSymbolLayerArray = null;
    let t = this._tiles.get(e.id);
    t || (t = { symbols: /* @__PURE__ */ new Map() }, this._tiles.set(e.id, t));
    const i = /* @__PURE__ */ new Map();
    if (s)
      for (const n of s)
        t.symbols.has(n) && (i.set(n, t.symbols.get(n)), t.symbols.delete(n));
    else
      for (const [n, a] of e.layerData)
        t.symbols.has(n) && (i.set(n, t.symbols.get(n)), t.symbols.delete(n));
    this._removeSymbols(i);
    const r = e.symbols, o = /* @__PURE__ */ new Map();
    for (const [n, a] of r) {
      let h = a.length;
      if (h >= vt) {
        let d = this.tileCoordRange;
        do
          d /= 2, h /= 4;
        while (h > Rt && d > Dt);
        const y = new me(this.tileCoordRange, this.tileCoordRange, d);
        o.set(n, { flat: a, index: y }), t.symbols.set(n, { flat: a, index: y });
        for (const u of a)
          y.getCell(u.xTile, u.yTile).push(u);
      } else
        o.set(n, { flat: a }), t.symbols.set(n, { flat: a });
    }
    this._addSymbols(e.key, r);
  }
  deleteStyleLayers(e) {
    this._uniqueSymbolLayerArray = null;
    for (const [s, t] of this._tiles) {
      const i = /* @__PURE__ */ new Map();
      for (const r of e)
        t.symbols.has(r) && (i.set(r, t.symbols.get(r)), t.symbols.delete(r));
      this._removeSymbols(i), t.symbols.size === 0 && this._tiles.delete(s);
    }
  }
  removeTile(e) {
    this._uniqueSymbolLayerArray = null;
    const s = this._tiles.get(e.id);
    if (!s)
      return;
    const t = /* @__PURE__ */ new Map();
    for (const [i, r] of e.symbols)
      s.symbols.has(i) && (t.set(i, s.symbols.get(i)), s.symbols.delete(i));
    this._removeSymbols(t), s.symbols.size === 0 && this._tiles.delete(e.id);
  }
  _removeSymbols(e) {
    for (const [s, { flat: t }] of e)
      for (const i of t) {
        const r = i.unique, o = r.tileSymbols, n = o.length - 1;
        for (let a = 0; a < n; a++)
          if (o[a] === i) {
            o[a] = o[n];
            break;
          }
        if (o.length = n, n === 0) {
          const a = this._uniqueSymbolsReferences.get(s);
          a.delete(r), a.size === 0 && this._uniqueSymbolsReferences.delete(s);
        }
        i.unique = null;
      }
  }
  _addSymbols(e, s) {
    if (s.size === 0)
      return;
    const t = this._visibleTiles;
    for (const i of t)
      i.parentTile || i.key.world !== e.world || i.key.level === e.level && !i.key.equals(e) || this._matchSymbols(i, e, s);
    for (const [i, r] of s)
      for (const o of r)
        if (M(o.unique)) {
          const n = this._createUnique();
          o.unique = n, n.tileSymbols.push(o);
          let a = this._uniqueSymbolsReferences.get(i);
          a || (a = /* @__PURE__ */ new Set(), this._uniqueSymbolsReferences.set(i, a)), a.add(n);
        }
  }
  _matchSymbols(e, s, t) {
    if (e.key.level > s.level) {
      const r = e.key.level - s.level;
      if (e.key.row >> r !== s.row || e.key.col >> r !== s.col)
        return;
    }
    if (s.level > e.key.level) {
      const r = s.level - e.key.level;
      if (s.row >> r !== e.key.row || s.col >> r !== e.key.col)
        return;
    }
    if (s.equals(e.key)) {
      for (const r of e.childrenTiles)
        this._matchSymbols(r, s, t);
      return;
    }
    const i = /* @__PURE__ */ new Map();
    for (const [r, o] of t) {
      const n = [];
      for (const y of o) {
        const u = le(this.tileCoordRange, y.xTile, s.level, s.col, e.key.level, e.key.col), c = le(this.tileCoordRange, y.yTile, s.level, s.row, e.key.level, e.key.row);
        u >= 0 && u < this.tileCoordRange && c >= 0 && c < this.tileCoordRange && n.push({ symbol: y, xTransformed: u, yTransformed: c });
      }
      const a = [], h = e.key.level < s.level ? 1 : 1 << e.key.level - s.level, d = this._tiles.get(e.id).symbols.get(r);
      if (d) {
        const y = d.flat;
        for (const u of n) {
          let c, _ = !1;
          const f = u.xTransformed, g = u.yTransformed;
          c = p(d.index) ? d.index.getCell(f, g) : y;
          const m = u.symbol, w = m.hash;
          for (const b of c)
            if (w === b.hash && Math.abs(f - b.xTile) <= h && Math.abs(g - b.yTile) <= h) {
              const x = b.unique;
              m.unique = x, x.tileSymbols.push(m), _ = !0;
              break;
            }
          _ || a.push(m);
        }
      }
      a.length > 0 && i.set(r, a);
    }
    for (const r of e.childrenTiles)
      this._matchSymbols(r, s, i);
  }
  _createUniqueSymbolLayerArray() {
    const e = this._uniqueSymbolsReferences, s = new Array(e.size);
    let t, i = 0;
    for (const [r, o] of e) {
      const n = new Array(o.size);
      t = 0;
      for (const a of o)
        n[t++] = a;
      s[i] = { styleLayerUID: r, uniqueSymbols: n }, i++;
    }
    return s;
  }
}
const At = 0.5, he = 1e-6;
class Lt extends Pe {
  constructor(e, s) {
    super(), this.styleRepository = e, this._tileToHandle = /* @__PURE__ */ new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._completed = !1, this._symbolRepository = new Pt(4096, s, () => new ut()), this._symbolDeclutterer = new Tt(s, this._symbolRepository, (t, i, r) => new St(t, i, r, this.styleRepository, this._zoom, this._viewState.rotation), (t, i) => {
      t.allSymbolsFadingOut = !0, t.lastOpacityUpdate = i, yt(t, i, !0), t.decluttered = !0, t.requestRender();
    }, (t, i) => this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z - this.styleRepository.getStyleLayerByUID(i.styleLayerUID).z, (t) => {
      const i = this.styleRepository.getStyleLayerByUID(t);
      if (this._zoom + he < i.minzoom || this._zoom - he >= i.maxzoom)
        return !1;
      const r = i.getLayoutProperty("visibility");
      return !r || r.getValue() !== K.NONE;
    });
  }
  addTile(e) {
    e.decluttered = !1, this._tileToHandle.set(e, e.on("symbols-changed", () => {
      this._symbolRepository.add(e), this.restartDeclutter();
    })), this._symbolRepository.add(e), this.restartDeclutter();
  }
  removeTile(e) {
    const s = this._tileToHandle.get(e);
    s && (this._symbolRepository.removeTile(e), this.restartDeclutter(), s.remove(), this._tileToHandle.delete(e));
  }
  update(e, s) {
    return this._zoom = e, this._viewState = { scale: s.scale, rotation: s.rotation, center: [s.center[0], s.center[1]], size: [s.size[0], s.size[1]] }, this._continueDeclutter(), this._completed;
  }
  restartDeclutter() {
    this._completed = !1, this._symbolDeclutterer.restart(), this._notifyUnstable();
  }
  clear() {
    this._completed = !1, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach((e) => e.remove()), this._tileToHandle.clear();
  }
  get stale() {
    return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
  }
  deleteStyleLayers(e) {
    this._symbolRepository.deleteStyleLayers(e);
  }
  _continueDeclutter() {
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(Qe), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    p(this._stableNotificationHandle) && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this.emit("fade-complete");
    }, (1 + At) * Q);
  }
  _notifyUnstable() {
    p(this._stableNotificationHandle) && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this.emit("fade-start");
  }
}
let Mt = class extends pe {
  _createTransforms() {
    return { dvs: q(), tileMat3: q() };
  }
};
const W = 1e-6;
function ce(l, e) {
  if (l) {
    const s = l.getLayoutProperty("visibility");
    if (!s || s.getValue() !== K.NONE && (l.minzoom === void 0 || l.minzoom < e + W) && (l.maxzoom === void 0 || l.maxzoom >= e - W))
      return !0;
  }
  return !1;
}
let Bt = class extends We {
  constructor(e) {
    super(e), this._backgroundTiles = [], this._pointToCallbacks = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.removeAllChildren(), this._spriteMosaic && (this._spriteMosaic.dispose(), this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic.dispose(), this._glyphMosaic = null), p(this._symbolFader) && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [], this._pointToCallbacks.clear();
  }
  setStyleResources(e, s, t) {
    if (this._spriteMosaic = e, this._glyphMosaic = s, this._styleRepository = t, M(this._symbolFader)) {
      const i = new Lt(this._styleRepository, this.children);
      i.on("fade-start", () => {
        this.emit("fade-start"), this.requestRender();
      }), i.on("fade-complete", () => {
        this.emit("fade-complete"), this.requestRender();
      }), this._symbolFader = i;
    }
    k(this._symbolFader).styleRepository = t;
  }
  setSpriteMosaic(e) {
    this._spriteMosaic.dispose(), this._spriteMosaic = e;
  }
  deleteStyleLayers(e) {
    p(this._symbolFader) && this._symbolFader.deleteStyleLayers(e);
  }
  async hitTest(e) {
    const s = Ae();
    return this._pointToCallbacks.set(e, s), this.requestRender(), s.promise;
  }
  enterTileInvalidation() {
    for (const e of this.children)
      e.invalidating = !0;
  }
  createRenderParams(e) {
    return { ...super.createRenderParams(e), renderPass: null, styleLayer: null, styleLayerUID: -1, glyphMosaic: this._glyphMosaic, spriteMosaic: this._spriteMosaic, hasClipping: !!this._clippingInfos };
  }
  doRender(e) {
    !this.visible || e.drawPhase !== O.MAP && e.drawPhase !== O.DEBUG || this._spriteMosaic === void 0 || super.doRender(e);
  }
  addChild(e) {
    return super.addChild(e), p(this._symbolFader) ? this._symbolFader.addTile(e) : e.decluttered = !0, this.requestRender(), e;
  }
  removeChild(e) {
    return p(this._symbolFader) && this._symbolFader.removeTile(e), this.requestRender(), super.removeChild(e);
  }
  renderChildren(e) {
    const { drawPhase: s } = e;
    if (s !== O.DEBUG) {
      if (this._doRender(e), this._pointToCallbacks.size > 0) {
        e.drawPhase = O.HITTEST;
        const t = e.painter.effects.hittestVTL;
        t.bind(e), this._doRender(e), t.draw(e, this._pointToCallbacks), t.unbind(e), e.drawPhase = s;
      }
    } else
      super.renderChildren(e);
  }
  removeAllChildren() {
    for (let e = 0; e < this.children.length; e++) {
      const s = this.children[e];
      p(this._symbolFader) && this._symbolFader.removeTile(s), s.dispose();
    }
    super.removeAllChildren();
  }
  getStencilTarget() {
    return this.children.filter((e) => e.neededForCoverage && e.hasData());
  }
  restartDeclutter() {
    p(this._symbolFader) && this._symbolFader.restartDeclutter();
  }
  _doRender(e) {
    const { context: s } = e, t = this._styleRepository;
    if (!t)
      return;
    const i = t.layers;
    let r = !0;
    e.drawPhase === O.HITTEST && (r = !1), t.backgroundBucketIds.length > 0 && (e.renderPass = "background", this._renderBackgroundLayers(e, t.backgroundBucketIds)), super.renderChildren(e), e.drawPhase === O.MAP && this._fade(e.displayLevel, e.state);
    const o = this.children.filter((n) => n.visible && n.hasData());
    if (!o || o.length === 0)
      return s.bindVAO(), s.setStencilTestEnabled(!0), void s.setBlendingEnabled(!0);
    for (const n of o)
      n.triangleCount = 0;
    s.setStencilWriteMask(0), s.setColorMask(!0, !0, !0, !0), s.setStencilOp(E.KEEP, E.KEEP, E.REPLACE), s.setStencilTestEnabled(!0), s.setBlendingEnabled(!1), s.setDepthTestEnabled(!0), s.setDepthWriteEnabled(!0), s.setDepthFunction(te.LEQUAL), s.setClearDepth(1), s.clear(s.gl.DEPTH_BUFFER_BIT), e.renderPass = "opaque";
    for (let n = i.length - 1; n >= 0; n--)
      this._renderStyleLayer(i[n], e, o);
    s.setDepthWriteEnabled(!1), s.setBlendingEnabled(r), s.setBlendFunctionSeparate(N.ONE, N.ONE_MINUS_SRC_ALPHA, N.ONE, N.ONE_MINUS_SRC_ALPHA), e.renderPass = "translucent";
    for (let n = 0; n < i.length; n++)
      this._renderStyleLayer(i[n], e, o);
    s.setDepthTestEnabled(!1), e.renderPass = "symbol";
    for (let n = 0; n < i.length; n++)
      this._renderStyleLayer(i[n], e, o);
    s.bindVAO(), s.setStencilTestEnabled(!0), s.setBlendingEnabled(!0);
  }
  _fade(e, s) {
    p(this._symbolFader) && (this._symbolFader.update(e, s) || this.requestRender());
  }
  _renderStyleLayer(e, s, t) {
    const { painter: i, renderPass: r } = s;
    if (e === void 0)
      return;
    const o = e.getLayoutProperty("visibility");
    if (o && o.getValue() === K.NONE)
      return;
    let n;
    switch (e.type) {
      case T.BACKGROUND:
        return;
      case T.FILL:
        if (r !== "opaque" && s.renderPass !== "translucent")
          return;
        n = "vtlFill";
        break;
      case T.LINE:
        if (r !== "translucent")
          return;
        n = "vtlLine";
        break;
      case T.CIRCLE:
        if (r !== "symbol")
          return;
        n = "vtlCircle";
        break;
      case T.SYMBOL:
        if (r !== "symbol")
          return;
        n = "vtlSymbol";
    }
    if (t = e.type === T.SYMBOL ? t.filter((h) => h.decluttered) : t.filter((h) => h.neededForCoverage), n !== "vtlSymbol") {
      const h = s.displayLevel;
      if (t.length === 0 || e.minzoom !== void 0 && e.minzoom >= h + W || e.maxzoom !== void 0 && e.maxzoom < h - W)
        return;
    }
    const a = e.uid;
    s.styleLayerUID = a, s.styleLayer = e;
    for (const h of t)
      if (h.layerData.has(a)) {
        i.renderObjects(s, t, n);
        break;
      }
  }
  _renderBackgroundLayers(e, s) {
    const { context: t, displayLevel: i, painter: r, state: o } = e, n = this._styleRepository;
    let a = !1;
    for (const b of s)
      if (n.getLayerById(b).type === T.BACKGROUND && ce(n.getLayerById(b), i)) {
        a = !0;
        break;
      }
    if (!a)
      return;
    const h = this._tileInfoView.getTileCoverage(e.state, 0, "smallest"), { spans: d, lodInfo: y } = h, { level: u } = y, c = Y(), _ = [];
    if (this._renderPasses) {
      const b = this._renderPasses[0];
      p(this._clippingInfos) && (b.brushes[0].prepareState(e, this._clippingInfos[0]), b.brushes[0].drawMany(e, this._clippingInfos));
    }
    const f = this._backgroundTiles;
    let g, m = 0;
    for (const { row: b, colFrom: x, colTo: P } of d)
      for (let S = x; S <= P; S++) {
        if (m < f.length)
          g = f[m], g.key.set(u, b, y.normalizeCol(S), y.getWorldForColumn(S)), this._tileInfoView.getTileBounds(c, g.key, !1), g.x = c[0], g.y = c[3];
        else {
          const D = new L(u, b, y.normalizeCol(S), y.getWorldForColumn(S)), B = this._tileInfoView.getTileBounds(Y(), D);
          g = new Mt(D, B[0], B[3], 512, 512, 4096, 4096), f.push(g);
        }
        g.setTransform(o, this._tileInfoView.getTileResolution(g.key)), _.push(g), m++;
      }
    t.setStencilWriteMask(0), t.setColorMask(!0, !0, !0, !0), t.setStencilOp(E.KEEP, E.KEEP, E.REPLACE), t.setStencilFunction(te.EQUAL, 0, 255);
    let w = !0;
    e.drawPhase === O.HITTEST && (w = !1), t.setStencilTestEnabled(w);
    for (const b of s) {
      const x = n.getLayerById(b);
      x.type === T.BACKGROUND && ce(x, i) && (e.styleLayerUID = x.uid, e.styleLayer = x, r.renderObjects(e, _, "vtlBackground"));
    }
    de.pool.release(h);
  }
};
class Ot extends Xe {
  constructor(e) {
    super(), this.requestRender = this.requestRender.bind(this), this._layerView = e, this._canvas = document.createElement("canvas"), this._context = this._canvas.getContext("2d"), this._bitmap = new Ke(null, "standard", !1), this.addChild(this._bitmap);
  }
  doRender(e) {
    const s = e.state, t = this._createCustomRenderParams(e), i = this._canvas, r = this._bitmap, o = window.devicePixelRatio;
    i.width = s.size[0] * o, i.height = s.size[1] * o, r.resolution = s.resolution;
    const n = s.clone();
    n.pixelRatio = o, r.pixelRatio = o, t.state = n, r.x = s.viewpoint.targetGeometry.x - Math.abs(s.extent.xmax - s.extent.xmin) / 2, r.y = s.viewpoint.targetGeometry.y + Math.abs(s.extent.ymax - s.extent.ymin) / 2, this._layerView.render(t), r.source = i, r.rotation = s.rotation, super.doRender({ ...e, state: n });
  }
  _createCustomRenderParams(e) {
    return { globalOpacity: e.globalOpacity, state: e.state, stationary: e.stationary, pixelRatio: window.devicePixelRatio, context: this._context };
  }
}
class kt extends Le {
  constructor() {
    super(...arguments), this._fullCacheLodInfos = null, this._levelByScale = {};
  }
  getTileParentId(e) {
    const s = L.pool.acquire(e), t = s.level === 0 ? null : L.getId(s.level - 1, s.row >> 1, s.col >> 1, s.world);
    return L.pool.release(s), t;
  }
  getTileCoverage(e, s, t) {
    const i = super.getTileCoverage(e, s, t);
    if (!i)
      return i;
    const r = 1 << i.lodInfo.level;
    return i.spans = i.spans.filter((o) => o.row >= 0 && o.row < r), i;
  }
  scaleToLevel(e) {
    if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e])
      return this._levelByScale[e];
    {
      const s = this._fullCacheLodInfos;
      if (e > s[0].scale)
        return s[0].level;
      let t, i;
      for (let r = 0; r < s.length - 1; r++)
        if (i = s[r + 1], e > i.scale)
          return t = s[r], t.level + (t.scale - e) / (t.scale - i.scale);
      return s[s.length - 1].level;
    }
  }
  _initializeFullCacheLODs(e) {
    let s;
    if (e[0].level === 0)
      s = e.map((t) => ({ level: t.level, resolution: t.resolution, scale: t.scale }));
    else {
      const t = this.tileInfo.size[0], i = this.tileInfo.spatialReference;
      s = Me.create({ size: t, spatialReference: i }).lods.map((r) => ({ level: r.level, resolution: r.resolution, scale: r.scale }));
    }
    for (let t = 0; t < s.length; t++)
      this._levelByScale[s[t].scale] = s[t].level;
    this._fullCacheLodInfos = s;
  }
}
const ue = Be.getLogger("geoscene.views.2d.layers.VectorTileLayerView2D");
let U = class extends Ge(Ye) {
  constructor() {
    super(...arguments), this._styleChanges = [], this._fetchQueue = null, this._parseQueue = null, this._isTileHandlerReady = !1, this.fading = !1;
  }
  async hitTest(l, e) {
    if (!this._tileHandlerPromise)
      return null;
    await this._tileHandlerPromise;
    const s = await this._vectorTileContainer.hitTest(e);
    if (!s || s.length === 0)
      return null;
    const t = s[0] - 1, i = this._styleRepository, r = i.getStyleLayerByUID(t);
    if (!r)
      return null;
    const o = i.getStyleLayerIndex(r.id), n = new Oe({ attributes: { layerId: o, layerName: r.id, layerUID: t } });
    return n.layer = this.layer, n.sourceLayer = this.layer, [n];
  }
  update(l) {
    if (this._tileHandlerPromise && this._isTileHandlerReady)
      return l.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = l.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = l.state, this._parseQueue.state = l.state, this._tileManager.update(l) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
  }
  attach() {
    const { style: l } = this.layer.currentStyleInfo;
    this._styleRepository = new se(l), this._tileInfoView = new kt(this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new Bt(this._tileInfoView), this._tileHandler = new rt(this.layer, this._styleRepository, window.devicePixelRatio || 1), this.container.addChild(this._vectorTileContainer), this._start(), this.handles.add([this._vectorTileContainer.on("fade-start", () => {
      this.fading = !0, this.notifyChange("updating"), this.requestUpdate();
    }), this._vectorTileContainer.on("fade-complete", () => {
      var e;
      (e = this._collisionBoxesDisplay) == null || e.requestRender(), this.fading = !1, this.notifyChange("updating"), this.requestUpdate();
    }), ke(() => this.layer.symbolCollisionBoxesVisible, (e) => {
      e ? (this._collisionBoxesDisplay = new Ot({ render: (s) => this._renderCollisionBoxes(s.context) }), this.container.addChild(this._collisionBoxesDisplay)) : (this.container.removeChild(this._collisionBoxesDisplay), this._collisionBoxesDisplay = null);
    }, Ve), this.layer.on("paint-change", (e) => {
      if (e.isDataDriven)
        this._styleChanges.push({ type: I.PAINTER_CHANGED, data: e }), this.notifyChange("updating"), this.requestUpdate();
      else {
        const s = this._styleRepository, t = s.getLayerById(e.layer);
        if (!t)
          return;
        const i = t.type === T.SYMBOL;
        s.setPaintProperties(e.layer, e.paint), i && this._vectorTileContainer.restartDeclutter(), this._vectorTileContainer.requestRender();
      }
    }), this.layer.on("layout-change", (e) => {
      const s = this._styleRepository, t = s.getLayerById(e.layer);
      if (!t)
        return;
      const i = Ue(t.layout, e.layout);
      if (!M(i)) {
        if (Ee(i, "visibility") && Vt(i) === 1)
          return s.setLayoutProperties(e.layer, e.layout), t.type === T.SYMBOL && this._vectorTileContainer.restartDeclutter(), void this._vectorTileContainer.requestRender();
        this._styleChanges.push({ type: I.LAYOUT_CHANGED, data: e }), this.notifyChange("updating"), this.requestUpdate();
      }
    }), this.layer.on("style-layer-visibility-change", (e) => {
      const s = this._styleRepository, t = s.getLayerById(e.layer);
      t && (s.setStyleLayerVisibility(e.layer, e.visibility), t.type === T.SYMBOL && this._vectorTileContainer.restartDeclutter(), this._vectorTileContainer.requestRender());
    }), this.layer.on("style-layer-change", (e) => {
      this._styleChanges.push({ type: I.LAYER_CHANGED, data: e }), this.notifyChange("updating"), this.requestUpdate();
    }), this.layer.on("delete-style-layer", (e) => {
      this._styleChanges.push({ type: I.LAYER_REMOVED, data: e }), this.notifyChange("updating"), this.requestUpdate();
    }), this.layer.on("load-style", () => this._loadStyle()), this.layer.on("spriteSource-change", (e) => {
      this._newSpriteSource = e.spriteSource, this._styleChanges.push({ type: I.SPRITES_CHANGED, data: null });
      const s = this._styleRepository.layers;
      for (const t of s)
        switch (t.type) {
          case T.SYMBOL:
            t.getLayoutProperty("icon-image") && this._styleChanges.push({ type: I.LAYOUT_CHANGED, data: { layer: t.id, layout: t.layout } });
            break;
          case T.LINE:
            t.getPaintProperty("line-pattern") && this._styleChanges.push({ type: I.PAINTER_CHANGED, data: { layer: t.id, paint: t.paint, isDataDriven: t.isPainterDataDriven() } });
            break;
          case T.FILL:
            t.getLayoutProperty("fill-pattern") && this._styleChanges.push({ type: I.PAINTER_CHANGED, data: { layer: t.id, paint: t.paint, isDataDriven: t.isPainterDataDriven() } });
        }
      this.notifyChange("updating"), this.requestUpdate();
    })], this.declaredClass);
  }
  detach() {
    var l, e;
    this._stop(), this.container.removeAllChildren(), (l = this._vectorTileContainer) == null || l.destroy(), this._vectorTileContainer = null, (e = this._tileHandler) == null || e.destroy(), this._tileHandler = null, this.handles.remove(this.declaredClass);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this._collisionBoxesDisplay && this._vectorTileContainer.restartDeclutter(), this.requestUpdate();
  }
  supportsSpatialReference(l) {
    var e;
    return ze((e = this.layer.tileInfo) == null ? void 0 : e.spatialReference, l);
  }
  canResume() {
    let l = super.canResume();
    const { currentStyleInfo: e } = this.layer;
    if (l && e != null && e.layerDefinition) {
      const s = this.view.scale, { minScale: t, maxScale: i } = e.layerDefinition;
      e && e.layerDefinition && (t && t < s && (l = !1), i && i > s && (l = !1));
    }
    return l;
  }
  isUpdating() {
    const l = this._vectorTileContainer.children;
    return !this._isTileHandlerReady || !this._fetchQueue || !this._parseQueue || this._fetchQueue.updating || this._parseQueue.updating || l.length > 0 && l.filter((e) => e.invalidating).length > 0 || this.fading;
  }
  acquireTile(l) {
    const e = this._createVectorTile(l);
    return this._tileHandlerPromise.then(() => {
      this._fetchQueue.push(e.key).then((s) => this._parseQueue.push({ key: e.key, data: s })).then((s) => {
        e.once("attach", () => this.requestUpdate()), e.setData(s), this.requestUpdate(), this.notifyChange("updating");
      }).catch((s) => {
        this.notifyChange("updating"), G(s) || ue.error(s);
      });
    }), e;
  }
  releaseTile(l) {
    const e = l.key.id;
    this._fetchQueue.abort(e), this._parseQueue.abort(e), this.requestUpdate();
  }
  _start() {
    if (this._stop(), this._tileManager = new at({ acquireTile: (s) => this.acquireTile(s), releaseTile: (s) => this.releaseTile(s), tileInfoView: this._tileInfoView }, this._vectorTileContainer), !this.layer.currentStyleInfo)
      return;
    const l = new AbortController(), e = this._tileHandler.start({ signal: l.signal }).then(() => {
      this._fetchQueue = new ee({ tileInfoView: this._tileInfoView, process: (s, t) => this._getTileData(s, t), concurrency: 15 }), this._parseQueue = new ee({ tileInfoView: this._tileInfoView, process: (s, t) => this._parseTileData(s, t), concurrency: 8 }), this.requestUpdate(), this._isTileHandlerReady = !0;
    });
    this._tileHandler.spriteMosaic.then((s) => {
      this._vectorTileContainer.setStyleResources(s, this._tileHandler.glyphMosaic, this._styleRepository), this.requestUpdate();
    }), this._tileHandlerAbortController = l, this._tileHandlerPromise = e;
  }
  _stop() {
    if (!this._tileHandlerAbortController || !this._vectorTileContainer)
      return;
    const l = this._tileHandlerAbortController;
    l && l.abort(), this._tileHandlerPromise = null, this._isTileHandlerReady = !1, this._fetchQueue && (this._fetchQueue.destroy(), this._fetchQueue = null), this._parseQueue && (this._parseQueue.destroy(), this._parseQueue = null), this._tileManager && (this._tileManager.destroy(), this._tileManager = null), this._vectorTileContainer.removeAllChildren();
  }
  async _getTileData(l, e) {
    const s = await this._tileHandler.fetchTileData(l, e);
    return this.notifyChange("updating"), s;
  }
  async _parseTileData(l, e) {
    return this._tileHandler.parseTileData(l, e);
  }
  async _applyStyleChanges() {
    this._isTileHandlerReady = !1, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._tileManager.clearCache();
    const l = this._styleChanges;
    try {
      await this._tileHandler.updateStyle(l);
    } catch (o) {
      ue.error("error applying vector-tiles style update", o.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0;
    }
    const e = this._styleRepository, s = [];
    l.forEach((o) => {
      if (o.type !== I.LAYER_REMOVED)
        return;
      const n = o.data, a = e.getLayerById(n.layer);
      a && s.push(a.uid);
    });
    const t = [];
    let i;
    l.forEach((o) => {
      const n = o.type, a = o.data;
      switch (n) {
        case I.PAINTER_CHANGED:
          e.setPaintProperties(a.layer, a.paint), i = a.layer;
          break;
        case I.LAYOUT_CHANGED:
          e.setLayoutProperties(a.layer, a.layout), i = a.layer;
          break;
        case I.LAYER_REMOVED:
          return void e.deleteStyleLayer(a.layer);
        case I.LAYER_CHANGED:
          e.setStyleLayer(a.layer, a.index), i = a.layer.id;
          break;
        case I.SPRITES_CHANGED:
          this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(this._newSpriteSource)), this._newSpriteSource = null, i = null;
      }
      const h = e.getLayerById(i);
      h && t.push(h.uid);
    });
    const r = this._vectorTileContainer.children;
    if (s.length > 0) {
      this._vectorTileContainer.deleteStyleLayers(s);
      for (const o of r)
        o.deleteLayerData(s);
    }
    if (this._fetchQueue.resume(), this._parseQueue.resume(), t.length > 0) {
      const o = [];
      for (const n of r) {
        const a = this._fetchQueue.push(n.key).then((h) => this._parseQueue.push({ key: n.key, data: h, styleLayerUIDs: t })).then((h) => n.setData(h));
        o.push(a);
      }
      await Promise.all(o);
    }
    this._styleChanges = [], this._isTileHandlerReady = !0, this.notifyChange("updating"), this.requestUpdate();
  }
  async _loadStyle() {
    const { style: l } = this.layer.currentStyleInfo, e = He(l);
    this._isTileHandlerReady = !1, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this.notifyChange("updating"), this._styleRepository = new se(e), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = new AbortController();
    const { signal: s } = this._tileHandlerAbortController;
    try {
      this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, e), await this._tileHandlerPromise;
    } catch (i) {
      if (!G(i))
        throw i;
    }
    if (s.aborted)
      return this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0, this.notifyChange("updating"), void this.requestUpdate();
    const t = await this._tileHandler.spriteMosaic;
    this._vectorTileContainer.setStyleResources(t, this._tileHandler.glyphMosaic, this._styleRepository), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0, this.notifyChange("updating"), this.requestUpdate();
  }
  _createVectorTile(l) {
    const e = this._tileInfoView.getTileBounds(Y(), l);
    return new bt(l, e[0], e[3], 512, 512, this._styleRepository);
  }
  _renderCollisionBoxes(l) {
    for (const e of this._vectorTileContainer.children)
      if (e.symbols) {
        const s = [];
        for (const [t, i] of e.symbols)
          s.push(...i);
        st(l, s);
      }
  }
};
function Vt(l) {
  if (M(l))
    return 0;
  switch (l.type) {
    case "partial":
      return Object.keys(l.diff).length;
    case "complete":
      return Math.max(Object.keys(l.oldValue).length, Object.keys(l.newValue).length);
    case "collection":
      return Object.keys(l.added).length + Object.keys(l.changed).length + Object.keys(l.removed).length;
  }
}
H([$()], U.prototype, "_fetchQueue", void 0), H([$()], U.prototype, "_parseQueue", void 0), H([$()], U.prototype, "_isTileHandlerReady", void 0), H([$()], U.prototype, "fading", void 0), U = H([qe("geoscene.views.2d.layers.VectorTileLayerView2D")], U);
const Rs = U;
export {
  Rs as default
};

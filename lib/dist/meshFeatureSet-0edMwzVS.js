import { a as u, b as m, eN as Ft, cU as Lt, bl as Dt, c as U, bk as ce, cD as He, g0 as Se, bg as Ct, fD as nt, s as x, d8 as k, aT as F, jj as Et, aC as De, jk as D, ce as ae, ch as ve, bh as $, ev as rt, b5 as Ce, az as P, aj as Pt, jl as Ot, H as X, jg as It, fN as _t, fO as Nt, hy as Ut, V as kt, hi as ot, hj as st, eq as ge, bW as Wt, ep as it, i9 as zt, hg as Ht, hn as at, cg as lt, b0 as Vt, e4 as Gt, hH as Bt, dH as Zt, l as Jt, aA as Xt, g as Yt, a9 as qt, m as Kt, bi as Qt, fp as en, fz as Ve } from "./index-O2RTvw_o.js";
import { I as ct, o as $e, r as be, D as tn, O as nn, h as Ee, _ as Pe, R as Oe, a as Ie, j as _e, v as Ne, q as rn, b as Ue, N as ee, g as on, x as Me, w as sn, l as an } from "./georeference-1nF-51XC.js";
import { r as ln } from "./imageUtils-taVEByxa.js";
import { m as ut } from "./MeshGeoreferencedRelativeVertexSpace-Ez5kQ46e.js";
import { a as cn, e as un, t as pt, p as Re, m as de } from "./MeshLocalVertexSpace-DHMCPNMn.js";
import { i as pn } from "./earcut-UWG02iJs.js";
import { t as ht } from "./Indices-JU1hbf1W.js";
import { e as Ge } from "./deduplicate-XVKswDT5.js";
import { o as Be, h as hn, m as fn, i as mn, a as gn } from "./External-XuC6RUdw.js";
import { e as ke } from "./mat3f64-Hpz0k8AN.js";
import { e as ft } from "./mat4f64-kAXAVCnO.js";
import { c as We } from "./spatialReferenceEllipsoidUtils-cvK3ZJAK.js";
var B;
const Ae = /* @__PURE__ */ new WeakMap();
let dn = 0, L = B = class extends ce {
  constructor(e) {
    super(e), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(e) {
    this._set("url", e), e && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(e) {
    this._set("data", e), e && this._set("url", null);
  }
  writeData(e, t, n, r) {
    if (e instanceof HTMLImageElement) {
      const o = { type: "image-element", src: He(e.src, r), crossOrigin: e.crossOrigin };
      t[n] = o;
    } else if (e instanceof HTMLCanvasElement) {
      const o = e.getContext("2d").getImageData(0, 0, e.width, e.height), s = { type: "canvas-element", imageData: this._encodeImageData(o) };
      t[n] = s;
    } else if (e instanceof HTMLVideoElement) {
      const o = { type: "video-element", src: He(e.src, r), autoplay: e.autoplay, loop: e.loop, muted: e.muted, crossOrigin: e.crossOrigin, preload: e.preload };
      t[n] = o;
    } else if (e instanceof ImageData) {
      const o = { type: "image-data", imageData: this._encodeImageData(e) };
      t[n] = o;
    }
  }
  readData(e) {
    switch (e.type) {
      case "image-element": {
        const t = new Image();
        return t.src = e.src, t.crossOrigin = e.crossOrigin, t;
      }
      case "canvas-element": {
        const t = this._decodeImageData(e.imageData), n = document.createElement("canvas");
        return n.width = t.width, n.height = t.height, n.getContext("2d").putImageData(t, 0, 0), n;
      }
      case "image-data":
        return this._decodeImageData(e.imageData);
      case "video-element": {
        const t = document.createElement("video");
        return t.src = e.src, t.crossOrigin = e.crossOrigin, t.autoplay = e.autoplay, t.loop = e.loop, t.muted = e.muted, t.preload = e.preload, t;
      }
      default:
        return;
    }
  }
  get transparent() {
    const e = this.data, t = this.url;
    if (e instanceof HTMLCanvasElement)
      return this._imageDataContainsTransparent(e.getContext("2d").getImageData(0, 0, e.width, e.height));
    if (e instanceof ImageData)
      return this._imageDataContainsTransparent(e);
    if (t) {
      const n = t.substr(t.length - 4, 4).toLowerCase(), r = t.substr(0, 15).toLocaleLowerCase();
      if (n === ".png" || r === "data:image/png;")
        return !0;
    }
    return !1;
  }
  set transparent(e) {
    this._overrideIfSome("transparent", e);
  }
  get contentHash() {
    const e = typeof this.wrap == "string" ? this.wrap : typeof this.wrap == "object" ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", t = (n = "") => `d:${n},t:${this.transparent},w:${e}`;
    return this.url != null ? t(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? t(this.data.src) : (Ae.has(this.data) || Ae.set(this.data, ++dn), t(Ae.get(this.data))) : t();
  }
  get memoryUsage() {
    let e = 0;
    if (e += this.url != null ? this.url.length : 0, this.data != null) {
      const t = this.data;
      "data" in t ? e += t.data.byteLength : t instanceof HTMLImageElement ? e += t.naturalWidth * t.naturalHeight * 3 : t instanceof HTMLCanvasElement && (e += t.width * t.height * 3);
    }
    return e;
  }
  clone() {
    const e = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new B(e);
  }
  cloneWithDeduplication(e) {
    const t = e.get(this);
    if (t)
      return t;
    const n = this.clone();
    return e.set(this, n), n;
  }
  _cloneWrap() {
    return typeof this.wrap == "string" ? this.wrap : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
  }
  _encodeImageData(e) {
    let t = "";
    for (let n = 0; n < e.data.length; n++)
      t += String.fromCharCode(e.data[n]);
    return { data: btoa(t), width: e.width, height: e.height };
  }
  _decodeImageData(e) {
    const t = atob(e.data), n = new Uint8ClampedArray(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = t.charCodeAt(r);
    return ln(n, e.width, e.height);
  }
  _imageDataContainsTransparent(e) {
    for (let t = 3; t < e.data.length; t += 4)
      if (e.data[t] !== 255)
        return !0;
    return !1;
  }
  static from(e) {
    return typeof e == "string" ? new B({ url: e }) : e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageData || e instanceof HTMLVideoElement ? new B({ data: e }) : Se(B, e);
  }
};
u([m({ type: String, json: { write: Ft } })], L.prototype, "url", null), u([m({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), m()], L.prototype, "data", null), u([Lt("data")], L.prototype, "writeData", null), u([Dt("data")], L.prototype, "readData", null), u([m({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], L.prototype, "transparent", null), u([m({ json: { write: !0 } })], L.prototype, "wrap", void 0), u([m({ readOnly: !0 })], L.prototype, "contentHash", null), L = B = u([U("geoscene.geometry.support.MeshTexture")], L);
const se = L;
let Z = class extends Ct(ce) {
  constructor(t) {
    super(t), this.offset = [0, 0], this.rotation = 0, this.scale = [1, 1];
  }
};
u([m({ type: [Number], nonNullable: !0, json: { write: !0 } })], Z.prototype, "offset", void 0), u([m({ type: Number, nonNullable: !0, json: { write: !0 } })], Z.prototype, "rotation", void 0), u([m({ type: [Number], nonNullable: !0, json: { write: !0 } })], Z.prototype, "scale", void 0), Z = u([U("geoscene.geometry.support.MeshTextureTransform")], Z);
const ie = Z;
var je;
let j = je = class extends ce {
  constructor(e) {
    super(e), this.color = null, this.colorTexture = null, this.colorTextureTransform = null, this.normalTexture = void 0, this.normalTextureTransform = void 0, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = !0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n)
      return n;
    const r = new je(this.clonePropertiesWithDeduplication(t));
    return e != null && e.set(this, r), r;
  }
  clonePropertiesWithDeduplication(e) {
    var t, n, r, o;
    return { color: this.color != null ? this.color.clone() : null, colorTexture: (t = this.colorTexture) == null ? void 0 : t.cloneWithDeduplication(e), normalTexture: (n = this.normalTexture) == null ? void 0 : n.cloneWithDeduplication(e), alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided, colorTextureTransform: (r = this.colorTextureTransform) == null ? void 0 : r.clone(), normalTextureTransform: (o = this.normalTextureTransform) == null ? void 0 : o.clone() };
  }
  get memoryUsage() {
    return this.getMemoryUsage();
  }
  getMemoryUsage() {
    let e = 0;
    return e += this.color != null ? 16 : 0, this.colorTexture != null && (e += this.colorTexture.memoryUsage), e += this.colorTextureTransform != null ? 20 : 0, this.normalTexture != null && (e += this.normalTexture.memoryUsage), e += this.normalTextureTransform != null ? 20 : 0, e;
  }
};
u([m({ type: nt, json: { write: !0 } })], j.prototype, "color", void 0), u([m({ type: se, json: { write: !0 } })], j.prototype, "colorTexture", void 0), u([m({ type: ie, json: { write: !0 } })], j.prototype, "colorTextureTransform", void 0), u([m({ type: se, json: { write: !0 } })], j.prototype, "normalTexture", void 0), u([m({ type: ie, json: { write: !0 } })], j.prototype, "normalTextureTransform", void 0), u([m({ nonNullable: !0, json: { write: !0 } })], j.prototype, "alphaMode", void 0), u([m({ nonNullable: !0, json: { write: !0 } })], j.prototype, "alphaCutoff", void 0), u([m({ nonNullable: !0, json: { write: !0 } })], j.prototype, "doubleSided", void 0), j = je = u([U("geoscene.geometry.support.MeshMaterial")], j);
const ze = j;
var Fe;
let R = Fe = class extends ze {
  constructor(e) {
    super(e), this.emissiveColor = null, this.emissiveTexture = null, this.emissiveTextureTransform = void 0, this.occlusionTexture = null, this.occlusionTextureTransform = void 0, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null, this.metallicRoughnessTextureTransform = void 0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n)
      return n;
    const r = new Fe(this.clonePropertiesWithDeduplication(t));
    return e != null && e.set(this, r), r;
  }
  getMemoryUsage() {
    let e = super.getMemoryUsage();
    return e += this.emissiveColor != null ? 16 : 0, this.emissiveTexture != null && (e += this.emissiveTexture.memoryUsage), e += this.emissiveTextureTransform != null ? 20 : 0, this.occlusionTexture != null && (e += this.occlusionTexture.memoryUsage), e += this.occlusionTextureTransform != null ? 20 : 0, this.metallicRoughnessTexture != null && (e += this.metallicRoughnessTexture.memoryUsage), e += this.metallicRoughnessTextureTransform != null ? 20 : 0, e;
  }
  clonePropertiesWithDeduplication(e) {
    var t, n, r, o, s, i, l;
    return { ...super.clonePropertiesWithDeduplication(e), emissiveColor: (t = this.emissiveColor) == null ? void 0 : t.clone(), emissiveTexture: (n = this.emissiveTexture) == null ? void 0 : n.cloneWithDeduplication(e), emissiveTextureTransform: (r = this.emissiveTextureTransform) == null ? void 0 : r.clone(), occlusionTexture: (o = this.occlusionTexture) == null ? void 0 : o.cloneWithDeduplication(e), occlusionTextureTransform: (s = this.occlusionTextureTransform) == null ? void 0 : s.clone(), metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: (i = this.metallicRoughnessTexture) == null ? void 0 : i.cloneWithDeduplication(e), metallicRoughnessTextureTransform: (l = this.metallicRoughnessTextureTransform) == null ? void 0 : l.clone() };
  }
};
u([m({ type: nt, json: { write: !0 } })], R.prototype, "emissiveColor", void 0), u([m({ type: se, json: { write: !0 } })], R.prototype, "emissiveTexture", void 0), u([m({ type: ie, json: { write: !0 } })], R.prototype, "emissiveTextureTransform", void 0), u([m({ type: se, json: { write: !0 } })], R.prototype, "occlusionTexture", void 0), u([m({ type: ie, json: { write: !0 } })], R.prototype, "occlusionTextureTransform", void 0), u([m({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "metallic", void 0), u([m({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "roughness", void 0), u([m({ type: se, json: { write: !0 } })], R.prototype, "metallicRoughnessTexture", void 0), u([m({ type: ie, json: { write: !0 } })], R.prototype, "metallicRoughnessTextureTransform", void 0), R = Fe = u([U("geoscene.geometry.support.MeshMaterialMetallicRoughness")], R);
const yn = R;
var fe;
const mt = "geoscene.geometry.support.MeshVertexAttributes", z = x.getLogger(mt);
let A = fe = class extends ce {
  constructor(e) {
    super(e), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(e) {
    return J(e, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, z);
  }
  castPosition(e) {
    return e && e instanceof Float32Array && z.warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"), J(e, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, z);
  }
  castUv(e) {
    return J(e, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, z);
  }
  castNormal(e) {
    return J(e, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, z);
  }
  castTangent(e) {
    return J(e, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, z);
  }
  clone() {
    const e = { position: F(this.position), uv: F(this.uv), normal: F(this.normal), tangent: F(this.tangent), color: F(this.color) };
    return new fe(e);
  }
  clonePositional() {
    const e = { position: F(this.position), normal: F(this.normal), tangent: F(this.tangent), uv: this.uv, color: this.color };
    return new fe(e);
  }
  get memoryUsage() {
    let e = 0;
    return e += this.position.byteLength, this.uv != null && (e += this.uv.byteLength), this.normal != null && (e += this.normal.byteLength), this.tangent != null && (e += this.tangent.byteLength), this.color != null && (e += this.color.byteLength), e;
  }
};
function Te(e, t, n, r) {
  const { loggerTag: o, stride: s } = t;
  return e.length % s != 0 ? (r.error(o, `Invalid array length, expected a multiple of ${s}`), new n([])) : e;
}
function J(e, t, n, r, o) {
  if (!e)
    return e;
  if (e instanceof t)
    return Te(e, r, t, o);
  for (const s of n)
    if (e instanceof s)
      return Te(new t(e), r, t, o);
  if (Array.isArray(e))
    return Te(new t(e), r, t, o);
  {
    const s = n.map((i) => `'${i.name}'`);
    return o.error(`Failed to set property, expected one of ${s}, but got ${e.constructor.name}`), new t([]);
  }
}
function ne(e, t, n) {
  t[n] = xn(e);
}
function xn(e) {
  const t = new Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e[n];
  return t;
}
u([m({ json: { write: ne } })], A.prototype, "color", void 0), u([k("color")], A.prototype, "castColor", null), u([m({ nonNullable: !0, json: { write: ne } })], A.prototype, "position", void 0), u([k("position")], A.prototype, "castPosition", null), u([m({ json: { write: ne } })], A.prototype, "uv", void 0), u([k("uv")], A.prototype, "castUv", null), u([m({ json: { write: ne } })], A.prototype, "normal", void 0), u([k("normal")], A.prototype, "castNormal", null), u([m({ json: { write: ne } })], A.prototype, "tangent", void 0), u([k("tangent")], A.prototype, "castTangent", null), A = fe = u([U(mt)], A);
var oe;
const gt = "geoscene.geometry.support.MeshComponent", wn = x.getLogger(gt);
let C = oe = class extends ce {
  static from(e) {
    return Se(oe, e);
  }
  constructor(e) {
    super(e), this.faces = null, this.material = null, this.shading = "source", this.trustSourceNormals = !1;
  }
  castFaces(e) {
    return J(e, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, wn);
  }
  castMaterial(e) {
    return Se(e && typeof e == "object" && ("metallic" in e || "roughness" in e || "metallicRoughnessTexture" in e) ? yn : ze, e);
  }
  clone() {
    return new oe({ faces: F(this.faces), shading: this.shading, material: F(this.material), trustSourceNormals: this.trustSourceNormals });
  }
  cloneWithDeduplication(e, t) {
    const n = { faces: F(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(e, t) : null, trustSourceNormals: this.trustSourceNormals };
    return new oe(n);
  }
  get memoryUsage() {
    let e = 0;
    return this.faces != null && (e += this.faces.byteLength), this.material != null && (e += this.material.memoryUsage), e;
  }
};
u([m({ json: { write: !0 } })], C.prototype, "faces", void 0), u([k("faces")], C.prototype, "castFaces", null), u([m({ type: ze, json: { write: !0 } })], C.prototype, "material", void 0), u([k("material")], C.prototype, "castMaterial", null), u([m({ type: String, json: { write: !0 } })], C.prototype, "shading", void 0), u([m({ type: Boolean })], C.prototype, "trustSourceNormals", void 0), C = oe = u([U(gt)], C);
const te = C;
function vn(e) {
  const t = bn(e.rings, e.hasZ, ye.CCW_IS_HOLE), n = new Array();
  let r = 0, o = 0;
  for (const l of t.polygons) {
    const c = l.count, a = l.index, p = cn(t.position, 3 * a, 3 * c), f = l.holeIndices.map((g) => g - a), h = ht(pn(p, f, 3));
    n.push({ position: p, faces: h }), r += p.length, o += h.length;
  }
  const s = $n(n, r, o), i = Array.isArray(s.position) ? Ge(s.position, 3, { originalIndices: s.faces }) : Ge(s.position.buffer, 6, { originalIndices: s.faces });
  return s.position = un(new Float64Array(i.buffer)), s.faces = i.indices, s;
}
function $n(e, t, n) {
  if (e.length === 1)
    return e[0];
  const r = pt(t), o = new Array(n);
  let s = 0, i = 0, l = 0;
  for (const c of e) {
    for (let a = 0; a < c.position.length; a++)
      r[s++] = c.position[a];
    for (const a of c.faces)
      o[i++] = a + l;
    l = s / 3;
  }
  return { position: r, faces: ht(o) };
}
function bn(e, t, n) {
  const r = e.length, o = new Array(r), s = new Array(r), i = new Array(r);
  let l = 0, c = 0, a = 0, p = 0;
  for (let g = 0; g < r; ++g)
    p += e[g].length;
  const f = pt(3 * p);
  let h = 0;
  for (let g = r - 1; g >= 0; g--) {
    const d = e[g], O = n === ye.CCW_IS_HOLE && An(d);
    if (O && r !== 1)
      o[l++] = d;
    else {
      let T = d.length;
      for (let y = 0; y < l; ++y)
        T += o[y].length;
      const S = { index: h, pathLengths: new Array(l + 1), count: T, holeIndices: new Array(l) };
      S.pathLengths[0] = d.length, d.length > 0 && (i[a++] = { index: h, count: d.length }), h = O ? ue(d, d.length - 1, -1, f, h, d.length, t) : ue(d, 0, 1, f, h, d.length, t);
      for (let y = 0; y < l; ++y) {
        const v = o[y];
        S.holeIndices[y] = h, S.pathLengths[y + 1] = v.length, v.length > 0 && (i[a++] = { index: h, count: v.length }), h = ue(v, 0, 1, f, h, v.length, t);
      }
      l = 0, S.count > 0 && (s[c++] = S);
    }
  }
  for (let g = 0; g < l; ++g) {
    const d = o[g];
    d.length > 0 && (i[a++] = { index: h, count: d.length }), h = ue(d, 0, 1, f, h, d.length, t);
  }
  return s.length = c, i.length = a, { position: f, polygons: s, outlines: i };
}
function ue(e, t, n, r, o, s, i) {
  o *= 3;
  for (let l = 0; l < s; ++l) {
    const c = e[t];
    r[o++] = c[0], r[o++] = c[1], r[o++] = i ? c[2] : 0, t += n;
  }
  return o / 3;
}
function An(e) {
  return !Et(e, !1, !1);
}
var ye;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
})(ye || (ye = {}));
function Tn({ xmin: e, xmax: t, ymin: n, ymax: r, zmin: o, zmax: s }, i, l, c) {
  o ?? (o = 0), s ?? (s = 0), Ze ?? (Ze = new Float64Array(24));
  const a = Ze;
  return a[0] = e, a[1] = n, a[2] = o, a[3] = e, a[4] = r, a[5] = o, a[6] = t, a[7] = r, a[8] = o, a[9] = t, a[10] = n, a[11] = o, a[12] = e, a[13] = n, a[14] = s, a[15] = e, a[16] = r, a[17] = s, a[18] = t, a[19] = r, a[20] = s, a[21] = t, a[22] = n, a[23] = s, ct({ positions: a, transform: i, vertexSpace: l, inSpatialReference: c, outSpatialReference: c, outPositions: a, local: !1 }), me(a, c);
}
let Ze = null;
function me(e, t) {
  let n = 1 / 0, r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0, l = -1 / 0;
  const c = e.length;
  let a = 0;
  for (; a < c; ) {
    const p = e[a++], f = e[a++], h = e[a++];
    n = Math.min(n, p), r = Math.min(r, f), o = Math.min(o, h), s = Math.max(s, p), i = Math.max(i, f), l = Math.max(l, h);
  }
  return new De({ xmin: n, ymin: r, zmin: o, xmax: s, ymax: i, zmax: l, spatialReference: t });
}
const le = "geoscene.geometry.support.meshUtils.centerAt";
function Sn(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position)
    return;
  const { vertexSpace: r } = e, o = (n == null ? void 0 : n.origin) ?? e.origin;
  r.isRelative ? ($e(r, le, n), Mn(e, t, o)) : be(e.spatialReference, n) ? Rn(e, t, o) : jn(e, t, o);
}
function Mn(e, t, n) {
  const { vertexSpace: r } = e;
  if (!r.isRelative)
    return;
  const o = yt, s = dt;
  if (!D(t, s, e.spatialReference))
    return void x.getLogger(le).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  if (!D(n, o, e.spatialReference)) {
    const c = e.origin;
    o[0] = c.x, o[1] = c.y, o[2] = c.z, x.getLogger(le).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  const i = ae(Ln, s, o), l = r.origin;
  r.origin = ve($(), l, i);
}
function Rn(e, t, n) {
  const r = tn(e.vertexAttributes, n, { geographic: !0 }), { position: o, normal: s, tangent: i } = nn(r, t, { geographic: !0 });
  e.vertexAttributes.position = o, e.vertexAttributes.normal = s, e.vertexAttributes.tangent = i, e.vertexAttributesChanged();
}
function jn(e, t, n) {
  const r = yt, o = dt;
  if (D(t, o, e.spatialReference)) {
    if (!D(n, r, e.spatialReference)) {
      const s = e.origin;
      r[0] = s.x, r[1] = s.y, r[2] = s.z, x.getLogger(le).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
    }
    Fn(e.vertexAttributes.position, o, r), e.vertexAttributesChanged();
  } else
    x.getLogger(le).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
}
function Fn(e, t, n) {
  if (e)
    for (let r = 0; r < e.length; r += 3)
      for (let o = 0; o < 3; o++)
        e[r + o] += t[o] - n[o];
}
const dt = $(), yt = $(), Ln = $();
async function Dn(e, t, n) {
  const { source: r } = t, { loadGLTFMesh: o } = await rt(import("./loadGLTFMesh-S_alFEfO.js"), n), s = await En(r, n);
  Ce(n);
  const i = o(new P({ x: 0, y: 0, z: 0, spatialReference: e.spatialReference }), s.url, { resolveFile: Cn(s), useTransform: !0, signal: n == null ? void 0 : n.signal });
  i.then(() => s.dispose(), () => s.dispose());
  const { vertexAttributes: l, components: c } = await i;
  e.vertexAttributes = l, e.components = c;
}
function Cn(e) {
  const t = Pt(e.url);
  return (n) => {
    const r = Ot(n, t, t), o = r ? r.replace(/^ *\.\//, "") : null;
    return (o ? e.files.get(o) : null) ?? n;
  };
}
async function En(e, t) {
  if (Array.isArray(e)) {
    if (!e.length)
      throw new X("mesh-load-external:missing-assets", "There must be at least one file to load");
    return e[0] instanceof File ? On(e) : In(e, t);
  }
  return xt(e);
}
async function Pn(e, t) {
  const { parts: n } = e;
  if (n.length === 1)
    return new xe(n[0].partUrl);
  const r = await e.toBlob(t);
  return Ce(t), xe.fromBlob(r);
}
function xt(e) {
  return xe.fromBlob(e);
}
function On(e) {
  return wt(e.map((t) => ({ name: t.name, mimeType: t.type, source: xt(t) })));
}
async function In(e, t) {
  const n = await It(e.map(async (r) => {
    const o = await Pn(r);
    return Ce(t), { name: r.assetName, mimeType: r.assetMimeType, source: o };
  }));
  if (_t(t))
    throw n.forEach((r) => r.source.dispose()), Nt();
  return wt(n);
}
const _n = /^(model\/gltf\+json)|(model\/gltf-binary)$/, Nn = /\.(gltf|glb)/i;
function wt(e) {
  const t = /* @__PURE__ */ new Map();
  let n = null;
  for (const { name: r, mimeType: o, source: s } of e)
    (n == null || _n.test(o) || Nn.test(r)) && (n = s.url), t.set(r, s.url), s.files.forEach((i, l) => t.set(l, i));
  if (n == null)
    throw new X("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new xe(n, () => e.forEach(({ source: r }) => r.dispose()), t);
}
let xe = class vt {
  constructor(t, n = () => {
  }, r = /* @__PURE__ */ new Map()) {
    this.url = t, this.dispose = n, this.files = r;
  }
  static fromBlob(t) {
    const n = URL.createObjectURL(t);
    return new vt(n, () => URL.revokeObjectURL(n));
  }
}, N = class extends Ut {
  constructor() {
    super(), this.externalSources = new kt(), this._explicitDisplaySource = null;
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(t) {
    if (t != null && !Be(t))
      throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = t, t && this.externalSources.every((n) => !hn(n, t)) && this.externalSources.add(t);
  }
  clearSources() {
    this.displaySource = null, this.externalSources.removeAll();
  }
  getExternalSourcesOnService(t) {
    return this.externalSources.items.filter((n) => fn(n, t));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(Be);
  }
};
u([m()], N.prototype, "externalSources", void 0), u([m()], N.prototype, "displaySource", null), u([m()], N.prototype, "_implicitDisplaySource", null), u([m()], N.prototype, "_explicitDisplaySource", void 0), N = u([U("geoscene.geometry.support.meshUtils.Metadata")], N);
const Un = "geoscene.geometry.support.meshUtils.offset";
function kn(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position)
    return;
  const { vertexSpace: r } = e;
  r.isRelative ? ($e(r, Un, n), Wn(r, t)) : be(e.spatialReference, n) ? zn(e, t) : Hn(e, t);
}
function Wn(e, t) {
  const n = e.origin;
  e.origin = ve($(), n, t);
}
function zn(e, t) {
  const n = e.spatialReference, r = e.vertexAttributes.position, o = e.vertexAttributes.normal, s = e.vertexAttributes.tangent, i = new Float64Array(r.length), l = o != null ? new Float32Array(o.length) : null, c = s != null ? new Float32Array(s.length) : null, a = e.extent.center, p = Vn;
  ot(n, [a.x, a.y, a.z], Je, We(n)), st(Xe, Je), ge(p, t, Xe), Ee(r, n, i), o != null && l != null && Pe(o, r, i, n, l), s != null && c != null && Oe(s, r, i, n, c), $t(i, p), Ie(i, r, n), o != null && l != null && _e(l, r, i, n, o), s != null && c != null && Ne(c, r, i, n, s), e.vertexAttributesChanged();
}
function Hn(e, t) {
  $t(e.vertexAttributes.position, t), e.vertexAttributesChanged();
}
function $t(e, t) {
  if (e)
    for (let n = 0; n < e.length; n += 3)
      for (let r = 0; r < 3; r++)
        e[n + r] += t[r];
}
const Vn = $(), Je = ft(), Xe = ke();
function Gn() {
  const { faceDescriptions: e, faceVertexOffsets: t, uvScales: n } = Qn, r = 4 * e.length, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), l = new Uint32Array(2 * e.length * 3);
  let c = 0, a = 0, p = 0, f = 0;
  for (let h = 0; h < e.length; h++) {
    const g = e[h], d = c / 3;
    for (const T of t)
      l[f++] = d + T;
    const O = g.corners;
    for (let T = 0; T < 4; T++) {
      const S = O[T];
      let y = 0;
      i[p++] = 0.25 * n[T][0] + g.uvOrigin[0], i[p++] = g.uvOrigin[1] - 0.25 * n[T][1];
      for (let v = 0; v < 3; v++)
        g.axis[v] !== 0 ? (o[c++] = 0.5 * g.axis[v], s[a++] = g.axis[v]) : (o[c++] = 0.5 * S[y++], s[a++] = 0);
    }
  }
  return { position: o, normal: s, uv: i, faces: l };
}
function Bn(e, t) {
  const n = e.components[0], r = n.faces, o = er[t], s = 6 * o, i = new Array(6), l = new Array(r.length - 6);
  let c = 0, a = 0;
  for (let p = 0; p < r.length; p++)
    p >= s && p < s + 6 ? i[c++] = r[p] : l[a++] = r[p];
  if (e.vertexAttributes.uv != null) {
    const p = new Float32Array(e.vertexAttributes.uv), f = 4 * o * 2, h = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let g = 0; g < h.length; g++)
      p[f + g] = h[g];
    e.vertexAttributes.uv = p;
  }
  return e.components = [new te({ faces: i, material: n.material }), new te({ faces: l })], e;
}
function Zn(e = 0) {
  const t = Math.round(8 * 2 ** e), n = 2 * t, r = (t - 1) * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), l = new Uint32Array(3 * ((t - 1) * n * 2));
  let c = 0, a = 0, p = 0, f = 0;
  for (let h = 0; h <= t; h++) {
    const g = h / t * Math.PI + 0.5 * Math.PI, d = Math.cos(g), O = Math.sin(g);
    w[2] = O;
    const T = h === 0 || h === t, S = T ? n - 1 : n;
    for (let y = 0; y <= S; y++) {
      const v = y / S * 2 * Math.PI;
      w[0] = -Math.sin(v) * d, w[1] = Math.cos(v) * d;
      for (let I = 0; I < 3; I++)
        o[c] = 0.5 * w[I], s[c] = w[I], ++c;
      i[a++] = (y + (T ? 0.5 : 0)) / n, i[a++] = h / t, h !== 0 && y !== n && (h !== t && (l[p++] = f, l[p++] = f + 1, l[p++] = f - n), h !== 1 && (l[p++] = f, l[p++] = f - n, l[p++] = f - n - 1)), f++;
    }
  }
  return { position: o, normal: s, uv: i, faces: l };
}
function Jn(e = 0) {
  const n = Math.round(16 * 2 ** e), r = 4 * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), l = new Uint32Array(3 * (4 * n));
  let c = 0, a = 0, p = 0, f = 0, h = 0;
  for (let g = 0; g <= 5; g++) {
    const d = g === 0 || g === 5, O = g <= 1 || g >= 4, T = g === 2 || g === 4, S = d ? n - 1 : n;
    for (let y = 0; y <= S; y++) {
      const v = y / S * 2 * Math.PI, I = d ? 0 : 0.5;
      w[0] = I * Math.sin(v), w[1] = I * -Math.cos(v), w[2] = g <= 2 ? 0.5 : -0.5;
      for (let W = 0; W < 3; W++)
        o[c++] = w[W], s[a++] = O ? W === 2 ? g <= 1 ? 1 : -1 : 0 : W === 2 ? 0 : w[W] / I;
      i[p++] = (y + (d ? 0.5 : 0)) / n, i[p++] = g <= 1 ? 1 * g / 3 : g <= 3 ? 1 * (g - 2) / 3 + 1 / 3 : 1 * (g - 4) / 3 + 2 / 3, T || g === 0 || y === n || (g !== 5 && (l[f++] = h, l[f++] = h + 1, l[f++] = h - n), g !== 1 && (l[f++] = h, l[f++] = h - n, l[f++] = h - n - 1)), h++;
    }
  }
  return { position: o, normal: s, uv: i, faces: l };
}
function Xn(e, t) {
  const n = typeof t == "number" ? t : t != null ? t.width : 1, r = typeof t == "number" ? t : t != null ? t.height : 1;
  switch (e) {
    case "up":
    case "down":
      return { width: n, depth: r };
    case "north":
    case "south":
      return { width: n, height: r };
    case "east":
    case "west":
      return { depth: n, height: r };
  }
}
function Yn(e) {
  const t = re.facingAxisOrderSwap[e], n = re.position, r = re.normal, o = new Float64Array(n.length), s = new Float32Array(r.length);
  let i = 0;
  for (let l = 0; l < 4; l++) {
    const c = i;
    for (let a = 0; a < 3; a++) {
      const p = t[a], f = Math.abs(p) - 1, h = p >= 0 ? 1 : -1;
      o[i] = n[c + f] * h, s[i] = r[c + f] * h, i++;
    }
  }
  return { position: o, normal: s, uv: new Float32Array(re.uv), faces: new Uint32Array(re.faces), isPlane: !0 };
}
const H = 1, V = 2, G = 3, re = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [G, H, V], west: [-G, -H, V], north: [-H, G, V], south: [H, -G, V], up: [H, V, G], down: [H, -V, -G] } };
function pe(e, t, n) {
  e.isPlane || qn(e), Kn(e, n == null ? void 0 : n.size);
  const { vertexAttributes: r, vertexSpace: o, transform: s } = rn(e, t, n);
  return { vertexAttributes: new A({ ...r, uv: e.uv }), vertexSpace: o, transform: s, components: [new te({ faces: e.faces, material: n && n.material || null })], spatialReference: t.spatialReference };
}
function qn(e) {
  for (let t = 0; t < e.position.length; t += 3)
    e.position[t + 2] += 0.5;
}
function Kn(e, t) {
  if (t == null)
    return;
  const n = typeof t == "number" ? [t, t, t] : [t.width != null ? t.width : 1, t.depth != null ? t.depth : 1, t.height != null ? t.height : 1];
  _[0] = n[0], _[4] = n[1], _[8] = n[2];
  for (let r = 0; r < e.position.length; r += 3) {
    for (let o = 0; o < 3; o++)
      w[o] = e.position[r + o];
    ge(w, w, _);
    for (let o = 0; o < 3; o++)
      e.position[r + o] = w[o];
  }
  if (n[0] !== n[1] || n[1] !== n[2]) {
    _[0] = 1 / n[0], _[4] = 1 / n[1], _[8] = 1 / n[2];
    for (let r = 0; r < e.normal.length; r += 3) {
      for (let o = 0; o < 3; o++)
        w[o] = e.normal[r + o];
      ge(w, w, _), Wt(w, w);
      for (let o = 0; o < 3; o++)
        e.normal[r + o] = w[o];
    }
  }
}
const Qn = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, er = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, w = $(), _ = ke(), bt = "geoscene.geometry.support.meshUtils.rotate";
function tr(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position || t[3] === 0)
    return;
  const { spatialReference: r, vertexSpace: o } = e;
  if (o.isRelative) {
    $e(o, bt, n);
    const s = (n == null ? void 0 : n.origin) ?? e.origin;
    e.transform ?? (e.transform = new ee()), nr(e.transform, o, t, s);
  } else {
    const s = (n == null ? void 0 : n.origin) ?? e.origin;
    be(r, n) ? rr(e, t, s) : or(e, t, s);
  }
}
function nr(e, t, n, r) {
  const o = t.origin, s = it(Y, r.x, r.y, r.z ?? 0), i = ae(Y, s, o);
  e.applyLocalInverse(i, Ye), e.rotation = on(e.rotation, n, Ue()), e.applyLocalInverse(i, i), ae(i, i, Ye), e.translation = ve($(), e.translation, i);
}
function rr(e, t, n) {
  const r = e.spatialReference, o = We(r), s = At;
  D(n, s, o) || D(e.origin, s, o);
  const i = e.vertexAttributes.position, l = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, a = new Float64Array(i.length), p = l != null ? new Float32Array(l.length) : null, f = c != null ? new Float32Array(c.length) : null;
  ot(o, s, we, o), st(Ke, we);
  const h = qe;
  ge(Me(qe), Me(t), Ke), h[3] = t[3], Ee(i, r, a), l != null && p != null && Pe(l, i, a, r, p), c != null && f != null && Oe(c, i, a, r, f), K(a, h, 3, s), Ie(a, i, r), l != null && p != null && (K(p, h, 3), _e(p, i, a, r, l)), c != null && f != null && (K(f, h, 4), Ne(f, i, a, r, c)), e.vertexAttributesChanged();
}
function or(e, t, n) {
  const r = At;
  if (!D(n, r, e.spatialReference)) {
    const o = e.origin;
    r[0] = o.x, r[1] = o.y, r[2] = o.z, x.getLogger(bt).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  K(e.vertexAttributes.position, t, 3, r), K(e.vertexAttributes.normal, t, 3), K(e.vertexAttributes.tangent, t, 4), e.vertexAttributesChanged();
}
function K(e, t, n, r = at) {
  if (e != null) {
    zt(we, sn(t), Me(t));
    for (let o = 0; o < e.length; o += n) {
      for (let s = 0; s < 3; s++)
        Y[s] = e[o + s] - r[s];
      Ht(Y, Y, we);
      for (let s = 0; s < 3; s++)
        e[o + s] = Y[s] + r[s];
    }
  }
}
const Y = $(), Ye = $(), qe = Ue(), we = ft(), Ke = ke(), At = $(), Tt = "geoscene.geometry.support.meshUtils.scale";
function sr(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position)
    return;
  const { spatialReference: r, vertexSpace: o } = e;
  if (o.isRelative) {
    $e(o, Tt, n);
    const s = (n == null ? void 0 : n.origin) ?? e.origin;
    e.transform ?? (e.transform = new ee()), ir(e.transform, o, t, s);
  } else {
    const s = be(r, n), i = (n == null ? void 0 : n.origin) ?? e.origin;
    s ? ar(e, t, i) : lr(e, t, i);
  }
}
function ir(e, t, n, r) {
  const o = t.origin, s = it(q, r.x, r.y, r.z), i = ae(q, s, o);
  e.applyLocalInverse(i, Qe);
  const l = lt($(), e.scale, n);
  e.scale = l, e.applyLocalInverse(i, i), ae(i, i, Qe), e.translation = ve($(), e.translation, i);
}
function ar(e, t, n) {
  const r = e.spatialReference, o = We(r), s = Mt;
  D(n, s, o) || D(e.origin, s, o);
  const i = e.vertexAttributes.position, l = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, a = new Float64Array(i.length), p = l != null ? new Float32Array(l.length) : null, f = c != null ? new Float32Array(c.length) : null;
  Ee(i, r, a), l != null && p != null && Pe(l, i, a, r, p), c != null && f != null && Oe(c, i, a, r, f), St(a, t, s), Ie(a, i, r), l != null && p != null && _e(p, i, a, r, l), c != null && f != null && Ne(f, i, a, r, c), e.vertexAttributesChanged();
}
function lr(e, t, n) {
  const r = Mt;
  if (!D(n, r, e.spatialReference)) {
    const o = e.origin;
    r[0] = o.x, r[1] = o.y, r[2] = o.z, x.getLogger(Tt).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  St(e.vertexAttributes.position, t, r), e.vertexAttributesChanged();
}
function St(e, t, n = at) {
  if (e)
    for (let r = 0; r < e.length; r += 3) {
      for (let o = 0; o < 3; o++)
        q[o] = e[r + o] - n[o];
      lt(q, q, t);
      for (let o = 0; o < 3; o++)
        e[r + o] = q[o] + n[o];
    }
}
const q = $(), Qe = $(), Mt = $();
var M;
const E = "geoscene.geometry.Mesh", cr = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: Re, "georeferenced-relative": ut, local: de } };
let b = M = class extends Vt(Gt.LoadableMixin(Bt(Zt))) {
  constructor(e) {
    super(e), this.components = null, this.vertexSpace = new Re(), this.transform = null, this.metadata = new N(), this.hasZ = !0, this.hasM = !1, this.vertexAttributes = new A(), this.type = "mesh";
  }
  initialize() {
    (this.metadata.externalSources.length === 0 || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.handles.add(Jt(() => {
        var e;
        return { vertexAttributes: this.vertexAttributes, components: (e = this.components) == null ? void 0 : e.map((t) => t.clone()) };
      }, () => this._clearSources(), { once: !0, sync: !0 }));
    });
  }
  get hasExtent() {
    var e;
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : ((e = this.metadata.displaySource) == null ? void 0 : e.extent) != null;
  }
  get _transformedExtent() {
    const { components: e, spatialReference: t, vertexAttributes: n, vertexSpace: r } = this, o = n.position;
    if (o.length === 0 || e && e.length === 0)
      return new De({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t });
    if (r.type === "local") {
      const { _untransformedExtent: s, transform: i } = this;
      return Tn(s, i, r, t);
    }
    if (r.type === "georeferenced-relative") {
      const { transform: s } = this, i = ct({ positions: o, transform: s, vertexSpace: r, inSpatialReference: t, outSpatialReference: t, local: !1 });
      return me(i, t);
    }
    return me(o, t);
  }
  get _untransformedExtent() {
    return me(this.vertexAttributes.position, this.spatialReference);
  }
  get anchor() {
    const { vertexSpace: e } = this;
    if (e.isRelative)
      return e.getOriginPoint(this.spatialReference);
    const { center: t, zmin: n } = this._transformedExtent;
    return new P({ x: t.x, y: t.y, z: n, spatialReference: this.spatialReference });
  }
  get origin() {
    const { vertexSpace: e } = this;
    return e.isRelative ? e.getOriginPoint(this.spatialReference) : this._transformedExtent.center;
  }
  get extent() {
    var e, t;
    return this.loaded || ((t = (e = this.metadata) == null ? void 0 : e.displaySource) == null ? void 0 : t.extent) == null ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e) {
    this.loaded ? (this.components || (this.components = []), this.components.push(te.from(e)), this.notifyChange("components")) : x.getLogger(this).error("addComponent()", "Mesh must be loaded before applying operations");
  }
  removeComponent(e) {
    if (this.loaded) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1)
          return this.components.splice(t, 1), void this.notifyChange("components");
      }
      x.getLogger(this).error("removeComponent()", "Provided component is not part of the list of components");
    } else
      x.getLogger(this).error("removeComponent()", "Mesh must be loaded before applying operations");
  }
  rotate(e, t, n, r) {
    return an(e, t, n, et), tr(this, et, r), this;
  }
  offset(e, t, n, r) {
    return this.loaded ? (he[0] = e, he[1] = t, he[2] = n, kn(this, he, r), this) : (x.getLogger(this).error("offset()", "Mesh must be loaded before applying operations"), this);
  }
  scale(e, t) {
    return this.loaded ? (sr(this, e, t), this) : (x.getLogger(this).error("scale()", "Mesh must be loaded before applying operations"), this);
  }
  centerAt(e, t) {
    return this.loaded ? (Sn(this, e, t), this) : (x.getLogger(this).error("centerAt()", "Mesh must be loaded before applying operations"), this);
  }
  load(e) {
    const { metadata: { displaySource: t } } = this;
    return t && this.addResolvingPromise(Dn(this, t, e)), Promise.resolve(this);
  }
  addExternalSources(e) {
    this.metadata.externalSources.addMany(e);
  }
  updateDisplaySource(e) {
    this.metadata.displaySource = e;
  }
  clone() {
    return this.cloneWithVertexSpace(this.vertexSpace.clone());
  }
  cloneWithVertexSpace(e) {
    var r;
    let t = null;
    if (this.components) {
      const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      t = this.components.map((i) => i.cloneWithDeduplication(o, s));
    }
    const n = { components: t, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes.clone(), vertexSpace: e, transform: ((r = this.transform) == null ? void 0 : r.clone()) ?? null, metadata: this.metadata.clone() };
    return new M(n);
  }
  cloneShallow() {
    return new M({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e) {
    const t = import("./gltfexport-ArOGnfpj.js"), n = this.load(), r = await Promise.all([t, n]), { toBinaryGLTF: o } = r[0];
    return o(this, e);
  }
  get memoryUsage() {
    let e = 0;
    if (e += this.vertexAttributes.memoryUsage, this.components != null)
      for (const t of this.components)
        e += t.memoryUsage;
    return e;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  static createBox(e, t) {
    if (!(e instanceof P))
      return x.getLogger(E).error(".createBox()", "expected location to be a Point instance"), null;
    const n = new M(pe(Gn(), e, t));
    return t && t.imageFace && t.imageFace !== "all" ? Bn(n, t.imageFace) : n;
  }
  static createSphere(e, t) {
    return e instanceof P ? new M(pe(Zn(t && t.densificationFactor || 0), e, t)) : (x.getLogger(E).error(".createSphere()", "expected location to be a Point instance"), null);
  }
  static createCylinder(e, t) {
    return e instanceof P ? new M(pe(Jn(t && t.densificationFactor || 0), e, t)) : (x.getLogger(E).error(".createCylinder()", "expected location to be a Point instance"), null);
  }
  static createPlane(e, t) {
    if (!(e instanceof P))
      return x.getLogger(E).error(".createPlane()", "expected location to be a Point instance"), null;
    const n = (t == null ? void 0 : t.facing) ?? "up", r = Xn(n, t == null ? void 0 : t.size);
    return new M(pe(Yn(n), e, { ...t, size: r }));
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof Xt))
      return x.getLogger(E).error(".createFromPolygon()", "expected polygon to be a Polygon instance"), null;
    const n = vn(e);
    return new M({ vertexAttributes: new A({ position: n.position }), components: [new te({ faces: n.faces, shading: "flat", material: (t == null ? void 0 : t.material) ?? null })], spatialReference: e.spatialReference, vertexSpace: new Re() });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof P))
      throw x.getLogger(E).error(".createfromGLTF()", "expected location to be a Point instance"), new X("invalid-input", "Expected location to be a Point instance");
    const { loadGLTFMesh: r } = await rt(import("./loadGLTFMesh-S_alFEfO.js"), n);
    return new M(await r(e, t, n));
  }
  static async createFromFiles(e, t, n) {
    if (!(e instanceof P)) {
      const i = "Expected location to be a Point instance";
      throw x.getLogger(E).error(".createFromFiles()", i), new X("invalid-input", i);
    }
    const r = M.createWithExternalSource(e, t), o = n == null ? void 0 : n.layer;
    if (!o) {
      const i = "A layer is needed to convert the files";
      throw x.getLogger(E).error(".createFromFiles()", i), new X("invalid-input", i);
    }
    const [s] = await o.uploadAssets([r], n);
    return s;
  }
  static createWithExternalSource(e, t, n) {
    var h;
    const r = (n == null ? void 0 : n.extent) ?? null, { x: o, y: s, z: i, spatialReference: l } = e, c = ((h = n == null ? void 0 : n.transform) == null ? void 0 : h.clone()) ?? new ee(), a = (n == null ? void 0 : n.vertexSpace) ?? new de({ origin: [o, s, i ?? 0] }), p = { source: t, extent: r }, f = new N();
    return f.externalSources.push(p), new M({ metadata: f, transform: c, vertexSpace: a, spatialReference: l });
  }
  static createIncomplete(e, t) {
    var a;
    const { x: n, y: r, z: o, spatialReference: s } = e, i = ((a = t == null ? void 0 : t.transform) == null ? void 0 : a.clone()) ?? new ee(), l = (t == null ? void 0 : t.vertexSpace) ?? new de({ origin: [n, r, o ?? 0] }), c = new M({ transform: i, vertexSpace: l, spatialReference: s });
    return c.addResolvingPromise(Promise.reject(new X("mesh-incomplete", "Mesh resources are not complete"))), c;
  }
};
u([m({ type: [te], json: { write: !0 } })], b.prototype, "components", void 0), u([m({ nonNullable: !0, types: cr, constructOnly: !0, json: { write: !0 } })], b.prototype, "vertexSpace", void 0), u([m({ type: ee, json: { write: !0 } })], b.prototype, "transform", void 0), u([m({ constructOnly: !0 })], b.prototype, "metadata", void 0), u([m()], b.prototype, "hasExtent", null), u([m()], b.prototype, "_transformedExtent", null), u([m()], b.prototype, "_untransformedExtent", null), u([m()], b.prototype, "anchor", null), u([m()], b.prototype, "origin", null), u([m({ readOnly: !0, json: { read: !1 } })], b.prototype, "extent", null), u([m({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })], b.prototype, "hasZ", void 0), u([m({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })], b.prototype, "hasM", void 0), u([m({ type: A, nonNullable: !0, json: { write: !0 } })], b.prototype, "vertexAttributes", void 0), b = M = u([U(E)], b);
const he = $(), et = Ue(), tt = b, Le = () => x.getLogger("geoscene.rest.support.meshFeatureSet");
function ur(e, t, n) {
  const r = n.features;
  n.features = [], delete n.geometryType;
  const o = Yt.fromJSON(n);
  if (o.geometryType = "mesh", !n.assetMaps)
    return o;
  const s = jt(t, n.assetMaps), i = e.sourceSpatialReference ?? qt.WGS84, l = n.globalIdFieldName, { outFields: c } = e, a = c != null && c.length > 0 ? pr(c.includes("*") ? null : new Set(c)) : () => ({});
  for (const p of r) {
    const f = Rt(p, l, i, t, s);
    f != null && o.features.push(new Kt({ geometry: f, attributes: a(p) }));
  }
  return o;
}
function pr(e) {
  return ({ attributes: t }) => {
    if (!t)
      return {};
    if (!e)
      return t;
    for (const n in t)
      e.has(n) || delete t[n];
    return t;
  };
}
function Rt(e, t, n, r, o) {
  const s = e.attributes[t], i = o.get(s);
  if (i == null)
    return Le().error("mesh-feature-set:asset-not-found", "Service returned a feature which was not found in the asset map", e), null;
  if (!e.geometry)
    return Le().error("mesh-feature-set:no-geometry", "Service returned a feature without geometry", e), null;
  const { originPoint: l, originVector: c } = hr(e, n, r), a = De.fromJSON(e.geometry);
  a.spatialReference = n;
  const p = fr(e.attributes, r), f = i.projectVertices ? new ut({ origin: c }) : new de({ origin: c }), h = mr(i);
  return h ? tt.createWithExternalSource(l, h, { extent: a, transform: p, vertexSpace: f }) : tt.createIncomplete(l, { extent: a, transform: p, vertexSpace: f });
}
function hr({ attributes: e }, t, { transformFieldRoles: n }) {
  const r = e[n.originX], o = e[n.originY], s = e[n.originZ];
  return { originPoint: new P({ x: r, y: o, z: s, spatialReference: t }), originVector: Qt(r, o, s) };
}
function fr(e, { transformFieldRoles: t }) {
  return new ee({ translation: [e[t.translationX], -e[t.translationZ], e[t.translationY]], rotationAxis: [e[t.rotationX], e[t.rotationZ], e[t.rotationY]], rotationAngle: e[t.rotationDeg], scale: [e[t.scaleX], e[t.scaleY], e[t.scaleZ]] });
}
var Q;
function jt(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t) {
    const o = r.parentGlobalId;
    if (o == null)
      continue;
    const s = r.assetName, i = r.assetType, l = r.assetHash, c = r.assetURL, a = r.conversionStatus, p = r.seqNo, f = en(i, e.supportedFormats);
    if (!f) {
      Le().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${i}, but it does not list it as a supported type`);
      continue;
    }
    const h = Ve(n, o, () => ({ projectVertices: dr(r.flags).projectVertices, files: /* @__PURE__ */ new Map() }));
    Ve(h.files, s, () => ({ name: s, type: i, mimeType: f, status: gr(a), parts: [] })).parts[p] = { hash: l, url: c };
  }
  return n;
}
function mr(e) {
  const t = Array.from(e.files.values()), n = new Array();
  for (const r of t) {
    if (r.status !== Q.COMPLETED)
      return null;
    const o = new Array();
    for (const s of r.parts) {
      if (!s)
        return null;
      o.push(new mn(s.url, s.hash));
    }
    n.push(new gn(r.name, r.mimeType, o));
  }
  return n;
}
function gr(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return Q.COMPLETED;
    case "INPROGRESS":
      return Q.PENDING;
    default:
      return Q.FAILED;
  }
}
function dr(e) {
  return { projectVertices: e.includes("PROJECT_VERTICES") };
}
(function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
})(Q || (Q = {}));
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assetMapFromAssetMapsJSON: jt,
  extractMesh: Rt,
  meshFeatureSetFromJSON: ur
}, Symbol.toStringTag, { value: "Module" }));
export {
  ie as a,
  Dr as b,
  yn as c,
  te as g,
  se as m,
  A as p
};
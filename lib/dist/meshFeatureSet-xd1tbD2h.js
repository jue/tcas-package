import { e as u, d, dL as mt, bD as dt, aE as yt, a as ee, aD as xe, gu as Be, iE as wt, fa as Fe, db as et, r as f, s as W, c7 as z, S as C, iF as xt, iG as _, f$ as M, eu as Ie, ab as L, bg as vt, iH as $t, iI as bt, eP as At, bc as Mt, l as se, y as Te, hc as Pe, g6 as tt, g5 as Se, gd as nt, gf as he, gh as Ft, hf as rt, hk as fe, iJ as Tt, g4 as Dt, iw as ot, iK as st, aw as Rt, W as Ct, gC as Et, cE as Lt, f as Ot, M as De, ac as It, dd as $e, x as Pt, b as St } from "./index-Ek1MTSEY.js";
import { r as ve, M as jt, x as Nt, a as je, j as Ne, b as _e, O as ze, h as Ue, L as We, k as _t, c as ie, q as Re, d as zt, l as Ce, e as ue, f as ge } from "./georeference-WRaZC6oB.js";
import { x as Ut } from "./earcut-80XuLCNX.js";
import { n as Wt } from "./deduplicate-r17RWnFm.js";
import { d as it, b as ke } from "./vec33-xPYzdI97.js";
var J;
const be = /* @__PURE__ */ new WeakMap();
let kt = 0, E = J = class extends xe {
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
      const o = { type: "image-element", src: Be(e.src, r), crossOrigin: e.crossOrigin };
      t[n] = o;
    } else if (e instanceof HTMLCanvasElement) {
      const o = e.getContext("2d").getImageData(0, 0, e.width, e.height), s = { type: "canvas-element", imageData: this._encodeImageData(o) };
      t[n] = s;
    } else if (e instanceof HTMLVideoElement) {
      const o = { type: "video-element", src: Be(e.src, r), autoplay: e.autoplay, loop: e.loop, muted: e.muted, crossOrigin: e.crossOrigin, preload: e.preload };
      t[n] = o;
    } else {
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
    e != null ? this._override("transparent", e) : this._clearOverride("transparent");
  }
  get contentHash() {
    const e = typeof this.wrap == "string" ? this.wrap : typeof this.wrap == "object" ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", t = (n = "") => `d:${n},t:${this.transparent},w:${e}`;
    return this.url != null ? t(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? t(this.data.src) : (be.has(this.data) || be.set(this.data, ++kt), t(be.get(this.data))) : t();
  }
  clone() {
    const e = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new J(e);
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
    return wt(n, e.width, e.height);
  }
  _imageDataContainsTransparent(e) {
    for (let t = 3; t < e.data.length; t += 4)
      if (e.data[t] !== 255)
        return !0;
    return !1;
  }
  static from(e) {
    return typeof e == "string" ? new J({ url: e }) : e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageData || e instanceof HTMLVideoElement ? new J({ data: e }) : Fe(J, e);
  }
};
u([d({ type: String, json: { write: mt } })], E.prototype, "url", null), u([d({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), d()], E.prototype, "data", null), u([dt("data")], E.prototype, "writeData", null), u([yt("data")], E.prototype, "readData", null), u([d({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], E.prototype, "transparent", null), u([d({ json: { write: !0 } })], E.prototype, "wrap", void 0), u([d({ readOnly: !0 })], E.prototype, "contentHash", null), E = J = u([ee("geoscene.geometry.support.MeshTexture")], E);
const oe = E;
var Ee;
let O = Ee = class extends xe {
  constructor(e) {
    super(e), this.color = null, this.colorTexture = null, this.normalTexture = null, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = !0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = f(e) ? e.get(this) : null;
    if (n)
      return n;
    const r = new Ee(this.clonePropertiesWithDeduplication(t));
    return f(e) && e.set(this, r), r;
  }
  clonePropertiesWithDeduplication(e) {
    return { color: f(this.color) ? this.color.clone() : null, colorTexture: f(this.colorTexture) ? this.colorTexture.cloneWithDeduplication(e) : null, normalTexture: f(this.normalTexture) ? this.normalTexture.cloneWithDeduplication(e) : null, alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided };
  }
};
u([d({ type: et, json: { write: !0 } })], O.prototype, "color", void 0), u([d({ type: oe, json: { write: !0 } })], O.prototype, "colorTexture", void 0), u([d({ type: oe, json: { write: !0 } })], O.prototype, "normalTexture", void 0), u([d({ nonNullable: !0, json: { write: !0 } })], O.prototype, "alphaMode", void 0), u([d({ nonNullable: !0, json: { write: !0 } })], O.prototype, "alphaCutoff", void 0), u([d({ nonNullable: !0, json: { write: !0 } })], O.prototype, "doubleSided", void 0), O = Ee = u([ee("geoscene.geometry.support.MeshMaterial")], O);
const He = O;
var Le;
let I = Le = class extends He {
  constructor(e) {
    super(e), this.emissiveColor = null, this.emissiveTexture = null, this.occlusionTexture = null, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = f(e) ? e.get(this) : null;
    if (n)
      return n;
    const r = new Le(this.clonePropertiesWithDeduplication(t));
    return f(e) && e.set(this, r), r;
  }
  clonePropertiesWithDeduplication(e) {
    return { ...super.clonePropertiesWithDeduplication(e), emissiveColor: f(this.emissiveColor) ? this.emissiveColor.clone() : null, emissiveTexture: f(this.emissiveTexture) ? this.emissiveTexture.cloneWithDeduplication(e) : null, occlusionTexture: f(this.occlusionTexture) ? this.occlusionTexture.cloneWithDeduplication(e) : null, metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: f(this.metallicRoughnessTexture) ? this.metallicRoughnessTexture.cloneWithDeduplication(e) : null };
  }
};
u([d({ type: et, json: { write: !0 } })], I.prototype, "emissiveColor", void 0), u([d({ type: oe, json: { write: !0 } })], I.prototype, "emissiveTexture", void 0), u([d({ type: oe, json: { write: !0 } })], I.prototype, "occlusionTexture", void 0), u([d({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], I.prototype, "metallic", void 0), u([d({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], I.prototype, "roughness", void 0), u([d({ type: oe, json: { write: !0 } })], I.prototype, "metallicRoughnessTexture", void 0), I = Le = u([ee("geoscene.geometry.support.MeshMaterialMetallicRoughness")], I);
const Ht = I;
var pe;
const H = W.getLogger("geoscene.geometry.support.MeshVertexAttributes");
let A = pe = class extends xe {
  constructor(e) {
    super(e), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(e) {
    return Y(e, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, H);
  }
  castPosition(e) {
    return e && e instanceof Float32Array && H.warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"), Y(e, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, H);
  }
  castUv(e) {
    return Y(e, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, H);
  }
  castNormal(e) {
    return Y(e, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, H);
  }
  castTangent(e) {
    return Y(e, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, H);
  }
  clone() {
    const e = { position: C(this.position), uv: C(this.uv), normal: C(this.normal), tangent: C(this.tangent), color: C(this.color) };
    return new pe(e);
  }
  clonePositional() {
    const e = { position: C(this.position), normal: C(this.normal), tangent: C(this.tangent), uv: this.uv, color: this.color };
    return new pe(e);
  }
};
function Ae(e, t, n, r) {
  const { loggerTag: o, stride: s } = t;
  return e.length % s != 0 ? (r.error(o, `Invalid array length, expected a multiple of ${s}`), new n([])) : e;
}
function Y(e, t, n, r, o) {
  if (!e)
    return e;
  if (e instanceof t)
    return Ae(e, r, t, o);
  for (const s of n)
    if (e instanceof s)
      return Ae(new t(e), r, t, o);
  if (Array.isArray(e))
    return Ae(new t(e), r, t, o);
  {
    const s = n.map((i) => `'${i.name}'`);
    return o.error(`Failed to set property, expected one of ${s}, but got ${e.constructor.name}`), new t([]);
  }
}
function te(e, t, n) {
  t[n] = Bt(e);
}
function Bt(e) {
  const t = new Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e[n];
  return t;
}
u([d({ json: { write: te } })], A.prototype, "color", void 0), u([z("color")], A.prototype, "castColor", null), u([d({ nonNullable: !0, json: { write: te } })], A.prototype, "position", void 0), u([z("position")], A.prototype, "castPosition", null), u([d({ json: { write: te } })], A.prototype, "uv", void 0), u([z("uv")], A.prototype, "castUv", null), u([d({ json: { write: te } })], A.prototype, "normal", void 0), u([z("normal")], A.prototype, "castNormal", null), u([d({ json: { write: te } })], A.prototype, "tangent", void 0), u([z("tangent")], A.prototype, "castTangent", null), A = pe = u([ee("geoscene.geometry.support.MeshVertexAttributes")], A);
var re;
const Gt = W.getLogger("geoscene.geometry.support.MeshComponent");
let P = re = class extends xe {
  constructor(e) {
    super(e), this.faces = null, this.material = null, this.shading = "source", this.trustSourceNormals = !1;
  }
  static from(e) {
    return Fe(re, e);
  }
  castFaces(e) {
    return Y(e, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, Gt);
  }
  castMaterial(e) {
    return Fe(e && typeof e == "object" && ("metallic" in e || "roughness" in e || "metallicRoughnessTexture" in e) ? Ht : He, e);
  }
  clone() {
    return new re({ faces: C(this.faces), shading: this.shading, material: C(this.material), trustSourceNormals: this.trustSourceNormals });
  }
  cloneWithDeduplication(e, t) {
    const n = { faces: C(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(e, t) : null, trustSourceNormals: this.trustSourceNormals };
    return new re(n);
  }
};
u([d({ json: { write: !0 } })], P.prototype, "faces", void 0), u([z("faces")], P.prototype, "castFaces", null), u([d({ type: He, json: { write: !0 } })], P.prototype, "material", void 0), u([z("material")], P.prototype, "castMaterial", null), u([d({ type: String, json: { write: !0 } })], P.prototype, "shading", void 0), u([d({ type: Boolean })], P.prototype, "trustSourceNormals", void 0), P = re = u([ee("geoscene.geometry.support.MeshComponent")], P);
const Q = P;
function Zt(e) {
  const t = Jt(e.rings, e.hasZ, me.CCW_IS_HOLE), n = [];
  let r = 0, o = 0;
  for (const a of t.polygons) {
    const c = a.count, l = a.index, g = new Float64Array(t.position.buffer, 3 * l * t.position.BYTES_PER_ELEMENT, 3 * c), m = a.holeIndices.map((h) => h - l), p = new Uint32Array(Ut(g, m, 3));
    n.push({ position: g, faces: p }), r += g.length, o += p.length;
  }
  const s = Vt(n, r, o), i = Wt(s.position.buffer, 6, { originalIndices: s.faces });
  return s.position = new Float64Array(i.buffer), s.faces = i.indices, s;
}
function Vt(e, t, n) {
  if (e.length === 1)
    return e[0];
  const r = new Float64Array(t), o = new Uint32Array(n);
  let s = 0, i = 0, a = 0;
  for (const c of e) {
    for (let l = 0; l < c.position.length; l++)
      r[s++] = c.position[l];
    for (let l = 0; l < c.faces.length; l++)
      o[i++] = c.faces[l] + a;
    a = s / 3;
  }
  return { position: r, faces: o };
}
function Jt(e, t, n) {
  const r = e.length, o = new Array(r), s = new Array(r), i = new Array(r);
  let a = 0, c = 0, l = 0, g = 0;
  for (let h = 0; h < r; ++h)
    g += e[h].length;
  const m = new Float64Array(3 * g);
  let p = 0;
  for (let h = r - 1; h >= 0; h--) {
    const y = e[h], T = n === me.CCW_IS_HOLE && Yt(y);
    if (T && r !== 1)
      o[a++] = y;
    else {
      let v = y.length;
      for (let w = 0; w < a; ++w)
        v += o[w].length;
      const $ = { index: p, pathLengths: new Array(a + 1), count: v, holeIndices: new Array(a) };
      $.pathLengths[0] = y.length, y.length > 0 && (i[l++] = { index: p, count: y.length }), p = T ? ae(y, y.length - 1, -1, m, p, y.length, t) : ae(y, 0, 1, m, p, y.length, t);
      for (let w = 0; w < a; ++w) {
        const b = o[w];
        $.holeIndices[w] = p, $.pathLengths[w + 1] = b.length, b.length > 0 && (i[l++] = { index: p, count: b.length }), p = ae(b, 0, 1, m, p, b.length, t);
      }
      a = 0, $.count > 0 && (s[c++] = $);
    }
  }
  for (let h = 0; h < a; ++h) {
    const y = o[h];
    y.length > 0 && (i[l++] = { index: p, count: y.length }), p = ae(y, 0, 1, m, p, y.length, t);
  }
  return c < r && (s.length = c), l < r && (i.length = l), { position: m, polygons: s, outlines: i };
}
function ae(e, t, n, r, o, s, i) {
  o *= 3;
  for (let a = 0; a < s; ++a) {
    const c = e[t];
    r[o++] = c[0], r[o++] = c[1], r[o++] = i ? c[2] : 0, t += n;
  }
  return o / 3;
}
function Yt(e) {
  return !xt(e, !1, !1);
}
var me;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
})(me || (me = {}));
const Oe = W.getLogger("geoscene.geometry.support.meshUtils.centerAt");
function qt(e, t, n) {
  var r;
  if (!e.vertexAttributes || !e.vertexAttributes.position)
    return;
  const o = (r = n == null ? void 0 : n.origin) != null ? r : e.origin;
  f(e.transform) ? ((n == null ? void 0 : n.geographic) != null && n.geographic !== e.transform.geographic && Oe.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`), Xt(e.transform, t, o)) : ve(e.spatialReference, n) ? Kt(e, t, o) : Qt(e, t, o);
}
function Xt(e, t, n) {
  const r = t.x - n.x, o = t.y - n.y, s = t.hasZ && n.hasZ ? t.z - n.z : 0, i = e.origin;
  e.origin = [i[0] + r, i[1] + o, i[2] + s];
}
function Kt(e, t, n) {
  const r = jt(e.vertexAttributes, n, { geographic: !0 }), { position: o, normal: s, tangent: i } = Nt(r, t, { geographic: !0 });
  e.vertexAttributes.position = o, e.vertexAttributes.normal = s, e.vertexAttributes.tangent = i, e.vertexAttributesChanged();
}
function Qt(e, t, n) {
  const r = nn, o = tn;
  if (_(t, o, e.spatialReference)) {
    if (!_(n, r, e.spatialReference)) {
      const s = e.origin;
      r[0] = s.x, r[1] = s.y, r[2] = s.z, Oe.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);
    }
    en(e.vertexAttributes.position, o, r), e.vertexAttributesChanged();
  } else
    Oe.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`);
}
function en(e, t, n) {
  if (e)
    for (let r = 0; r < e.length; r += 3)
      for (let o = 0; o < 3; o++)
        e[r + o] += t[o] - n[o];
}
const tn = M(), nn = M();
async function rn(e, t, n) {
  const { loadGLTFMesh: r } = await Ie(import("./loadGLTFMesh-Znya-ip5.js"), n), o = await at(t, n), s = r(new L({ x: 0, y: 0, z: 0, spatialReference: e.spatialReference }), o.url, { resolveFile: on(o), useTransform: !0, signal: f(n) ? n.signal : null });
  s.then(() => o.dispose(), () => o.dispose());
  const { vertexAttributes: i, components: a } = await s;
  e.vertexAttributes = i, e.components = a;
}
function on(e) {
  const t = vt(e.url);
  return (n) => {
    var r;
    const o = $t(n, t, t), s = o ? o.replace(/^ *\.\//, "") : null;
    return (r = e.files.get(s)) != null ? r : n;
  };
}
async function at(e, t) {
  return e instanceof Blob ? de.fromBlob(e) : typeof e == "string" ? new de(e) : Array.isArray(e) ? sn(e, t) : an(e, t);
}
async function sn(e, t) {
  const n = /* @__PURE__ */ new Map();
  let r = null;
  const o = await bt(e.map(async (i) => ({ name: i.name, source: await at(i instanceof Blob ? i : i.source, t) }))), s = [];
  for (const i of o)
    i && (At(t) ? i.source.dispose() : s.push(i));
  Mt(t);
  for (const { name: i, source: a } of s)
    (se(r) || /\.(gltf|glb)/i.test(i)) && (r = a.url), n.set(i, a.url), a.files && a.files.forEach((c, l) => n.set(l, c));
  if (se(r))
    throw new Te("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new de(r, () => s.forEach(({ source: i }) => i.dispose()), n);
}
async function an(e, t) {
  const { default: n } = await Ie(import("./index-Ek1MTSEY.js").then((o) => o.kD), t), r = typeof e.multipart[0] == "string" ? await Promise.all(e.multipart.map(async (o) => (await n(o, { responseType: "array-buffer" })).data)) : e.multipart;
  return de.fromBlob(new Blob(r));
}
let de = class lt {
  constructor(t, n = () => {
  }, r = /* @__PURE__ */ new Map()) {
    this.url = t, this.dispose = n, this.files = r;
  }
  static fromBlob(t) {
    const n = URL.createObjectURL(t);
    return new lt(n, () => URL.revokeObjectURL(n));
  }
};
const ln = W.getLogger("geoscene.geometry.support.meshUtils.offset");
function cn(e, t, n) {
  e.vertexAttributes && e.vertexAttributes.position && (f(e.transform) ? ((n == null ? void 0 : n.geographic) != null && n.geographic !== e.transform.geographic && ln.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`), un(e.transform, t)) : ve(e.spatialReference, n) ? pn(e, t) : hn(e, t));
}
function un(e, t) {
  const n = e.origin;
  e.origin = Pe(M(), n, t);
}
function pn(e, t) {
  const n = e.spatialReference, r = e.vertexAttributes.position, o = e.vertexAttributes.normal, s = e.vertexAttributes.tangent, i = new Float64Array(r.length), a = f(o) ? new Float32Array(o.length) : null, c = f(s) ? new Float32Array(s.length) : null, l = e.extent.center, g = fn;
  tt(n, [l.x, l.y, l.z], Ge, Se(n)), nt(Ze, Ge), he(g, t, Ze), je(r, n, i), f(o) && Ne(o, r, i, n, a), f(s) && _e(s, r, i, n, c), ct(i, g), ze(i, r, n), f(o) && Ue(a, r, i, n, o), f(s) && We(c, r, i, n, s), e.vertexAttributesChanged();
}
function hn(e, t) {
  ct(e.vertexAttributes.position, t), e.vertexAttributesChanged();
}
function ct(e, t) {
  if (e)
    for (let n = 0; n < e.length; n += 3)
      for (let r = 0; r < 3; r++)
        e[n + r] += t[r];
}
const fn = M(), Ge = it(), Ze = ke();
function gn() {
  const { faceDescriptions: e, faceVertexOffsets: t, uvScales: n } = bn, r = 4 * e.length, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(2 * e.length * 3);
  let c = 0, l = 0, g = 0, m = 0;
  for (let p = 0; p < e.length; p++) {
    const h = e[p], y = c / 3;
    for (const v of t)
      a[m++] = y + v;
    const T = h.corners;
    for (let v = 0; v < 4; v++) {
      const $ = T[v];
      let w = 0;
      i[g++] = 0.25 * n[v][0] + h.uvOrigin[0], i[g++] = h.uvOrigin[1] - 0.25 * n[v][1];
      for (let b = 0; b < 3; b++)
        h.axis[b] !== 0 ? (o[c++] = 0.5 * h.axis[b], s[l++] = h.axis[b]) : (o[c++] = 0.5 * $[w++], s[l++] = 0);
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function mn(e, t) {
  const n = e.components[0], r = n.faces, o = An[t], s = 6 * o, i = new Uint32Array(6), a = new Uint32Array(r.length - 6);
  let c = 0, l = 0;
  for (let g = 0; g < r.length; g++)
    g >= s && g < s + 6 ? i[c++] = r[g] : a[l++] = r[g];
  if (f(e.vertexAttributes.uv)) {
    const g = new Float32Array(e.vertexAttributes.uv), m = 4 * o * 2, p = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let h = 0; h < p.length; h++)
      g[m + h] = p[h];
    e.vertexAttributes.uv = g;
  }
  return e.components = [new Q({ faces: i, material: n.material }), new Q({ faces: a })], e;
}
function dn(e = 0) {
  const t = Math.round(8 * 2 ** e), n = 2 * t, r = (t - 1) * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * ((t - 1) * n * 2));
  let c = 0, l = 0, g = 0, m = 0;
  for (let p = 0; p <= t; p++) {
    const h = p / t * Math.PI + 0.5 * Math.PI, y = Math.cos(h), T = Math.sin(h);
    x[2] = T;
    const v = p === 0 || p === t, $ = v ? n - 1 : n;
    for (let w = 0; w <= $; w++) {
      const b = w / $ * 2 * Math.PI;
      x[0] = -Math.sin(b) * y, x[1] = Math.cos(b) * y;
      for (let S = 0; S < 3; S++)
        o[c] = 0.5 * x[S], s[c] = x[S], ++c;
      i[l++] = (w + (v ? 0.5 : 0)) / n, i[l++] = p / t, p !== 0 && w !== n && (p !== t && (a[g++] = m, a[g++] = m + 1, a[g++] = m - n), p !== 1 && (a[g++] = m, a[g++] = m - n, a[g++] = m - n - 1)), m++;
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function yn(e = 0) {
  const n = Math.round(16 * 2 ** e), r = 4 * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * (4 * n));
  let c = 0, l = 0, g = 0, m = 0, p = 0;
  for (let h = 0; h <= 5; h++) {
    const y = h === 0 || h === 5, T = h <= 1 || h >= 4, v = h === 2 || h === 4, $ = y ? n - 1 : n;
    for (let w = 0; w <= $; w++) {
      const b = w / $ * 2 * Math.PI, S = y ? 0 : 0.5;
      x[0] = S * Math.sin(b), x[1] = S * -Math.cos(b), x[2] = h <= 2 ? 0.5 : -0.5;
      for (let k = 0; k < 3; k++)
        o[c++] = x[k], s[l++] = T ? k === 2 ? h <= 1 ? 1 : -1 : 0 : k === 2 ? 0 : x[k] / S;
      i[g++] = (w + (y ? 0.5 : 0)) / n, i[g++] = h <= 1 ? 1 * h / 3 : h <= 3 ? 1 * (h - 2) / 3 + 1 / 3 : 1 * (h - 4) / 3 + 2 / 3, v || h === 0 || w === n || (h !== 5 && (a[m++] = p, a[m++] = p + 1, a[m++] = p - n), h !== 1 && (a[m++] = p, a[m++] = p - n, a[m++] = p - n - 1)), p++;
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function wn(e, t) {
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
function xn(e) {
  const t = ne.facingAxisOrderSwap[e], n = ne.position, r = ne.normal, o = new Float64Array(n.length), s = new Float32Array(r.length);
  let i = 0;
  for (let a = 0; a < 4; a++) {
    const c = i;
    for (let l = 0; l < 3; l++) {
      const g = t[l], m = Math.abs(g) - 1, p = g >= 0 ? 1 : -1;
      o[i] = n[c + m] * p, s[i] = r[c + m] * p, i++;
    }
  }
  return { position: o, normal: s, uv: new Float32Array(ne.uv), faces: new Uint32Array(ne.faces) };
}
const B = 1, G = 2, Z = 3, ne = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [Z, B, G], west: [-Z, -B, G], north: [-B, Z, G], south: [B, -Z, G], up: [B, G, Z], down: [B, -G, -Z] } };
function le(e, t, n) {
  vn(e), $n(e, n && n.size);
  const { vertexAttributes: r, transform: o } = _t(e, t, n);
  return { vertexAttributes: new A({ ...r, uv: e.uv }), transform: o, components: [new Q({ faces: e.faces, material: n && n.material || null })], spatialReference: t.spatialReference };
}
function vn(e) {
  for (let t = 0; t < e.position.length; t += 3)
    e.position[t + 2] += 0.5;
}
function $n(e, t) {
  if (t == null)
    return;
  const n = typeof t == "number" ? [t, t, t] : [t.width != null ? t.width : 1, t.depth != null ? t.depth : 1, t.height != null ? t.height : 1];
  j[0] = n[0], j[4] = n[1], j[8] = n[2];
  for (let r = 0; r < e.position.length; r += 3) {
    for (let o = 0; o < 3; o++)
      x[o] = e.position[r + o];
    he(x, x, j);
    for (let o = 0; o < 3; o++)
      e.position[r + o] = x[o];
  }
  if (n[0] !== n[1] || n[1] !== n[2]) {
    j[0] = 1 / n[0], j[4] = 1 / n[1], j[8] = 1 / n[2];
    for (let r = 0; r < e.normal.length; r += 3) {
      for (let o = 0; o < 3; o++)
        x[o] = e.normal[r + o];
      he(x, x, j), Ft(x, x);
      for (let o = 0; o < 3; o++)
        e.normal[r + o] = x[o];
    }
  }
}
const bn = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, An = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, x = M(), j = ke(), ut = W.getLogger("geoscene.geometry.support.meshUtils.rotate");
function Mn(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position || t[3] === 0)
    return;
  const r = e.spatialReference;
  if (f(e.transform)) {
    var o;
    (n == null ? void 0 : n.geographic) != null && n.geographic !== e.transform.geographic && ut.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);
    const i = (o = n == null ? void 0 : n.origin) != null ? o : e.transform.getOriginPoint(r);
    Fn(e.transform, t, i);
  } else {
    var s;
    const i = (s = n == null ? void 0 : n.origin) != null ? s : e.origin;
    ve(e.spatialReference, n) ? Tn(e, t, i) : Dn(e, t, i);
  }
}
function Fn(e, t, n) {
  const r = rt(q, n.x, n.y, n.z), o = fe(q, r, e.origin);
  e.applyLocalInverse(o, Ve), e.rotation = Re(e.rotation, t, ie()), e.applyLocalInverse(o, o), fe(o, o, Ve), e.translation = Pe(M(), e.translation, o);
}
function Tn(e, t, n) {
  const r = e.spatialReference, o = Se(r), s = pt;
  _(n, s, o) || _(e.origin, s, o);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, l = new Float64Array(i.length), g = f(a) ? new Float32Array(a.length) : null, m = f(c) ? new Float32Array(c.length) : null;
  tt(o, s, ye, o), nt(Ye, ye);
  const p = Je;
  he(Ce(Je), Ce(t), Ye), p[3] = t[3], je(i, r, l), f(a) && Ne(a, i, l, r, g), f(c) && _e(c, i, l, r, m), K(l, p, 3, s), ze(l, i, r), f(a) && (K(g, p, 3), Ue(g, i, l, r, a)), f(c) && (K(m, p, 4), We(m, i, l, r, c)), e.vertexAttributesChanged();
}
function Dn(e, t, n) {
  const r = pt;
  if (!_(n, r, e.spatialReference)) {
    const o = e.origin;
    r[0] = o.x, r[1] = o.y, r[2] = o.z, ut.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);
  }
  K(e.vertexAttributes.position, t, 3, r), K(e.vertexAttributes.normal, t, 3), K(e.vertexAttributes.tangent, t, 4), e.vertexAttributesChanged();
}
function K(e, t, n, r = ot) {
  if (!se(e)) {
    Tt(ye, zt(t), Ce(t));
    for (let o = 0; o < e.length; o += n) {
      for (let s = 0; s < 3; s++)
        q[s] = e[o + s] - r[s];
      Dt(q, q, ye);
      for (let s = 0; s < 3; s++)
        e[o + s] = q[s] + r[s];
    }
  }
}
const q = M(), Ve = M(), Je = ie(), ye = it(), Ye = ke(), pt = M(), ht = W.getLogger("geoscene.geometry.support.meshUtils.scale");
function Rn(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position)
    return;
  const r = e.spatialReference;
  if (f(e.transform)) {
    var o;
    (n == null ? void 0 : n.geographic) != null && n.geographic !== e.transform.geographic && ht.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);
    const s = (o = n == null ? void 0 : n.origin) != null ? o : e.transform.getOriginPoint(r);
    Cn(e.transform, t, s);
  } else {
    const s = ve(e.spatialReference, n), i = n && n.origin || e.origin;
    s ? En(e, t, i) : Ln(e, t, i);
  }
}
function Cn(e, t, n) {
  const r = rt(X, n.x, n.y, n.z), o = fe(X, r, e.origin);
  e.applyLocalInverse(o, qe);
  const s = st(M(), e.scale, t);
  e.scale = s, e.applyLocalInverse(o, o), fe(o, o, qe), e.translation = Pe(M(), e.translation, o);
}
function En(e, t, n) {
  const r = e.spatialReference, o = Se(r), s = gt;
  _(n, s, o) || _(e.origin, s, o);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, l = new Float64Array(i.length), g = f(a) ? new Float32Array(a.length) : null, m = f(c) ? new Float32Array(c.length) : null;
  je(i, r, l), f(a) && Ne(a, i, l, r, g), f(c) && _e(c, i, l, r, m), ft(l, t, s), ze(l, i, r), f(a) && Ue(g, i, l, r, a), f(c) && We(m, i, l, r, c), e.vertexAttributesChanged();
}
function Ln(e, t, n) {
  const r = gt;
  if (!_(n, r, e.spatialReference)) {
    const o = e.origin;
    r[0] = o.x, r[1] = o.y, r[2] = o.z, ht.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);
  }
  ft(e.vertexAttributes.position, t, r), e.vertexAttributesChanged();
}
function ft(e, t, n = ot) {
  if (e)
    for (let r = 0; r < e.length; r += 3) {
      for (let o = 0; o < 3; o++)
        X[o] = e[r + o] - n[o];
      st(X, X, t);
      for (let o = 0; o < 3; o++)
        e[r + o] = X[o] + n[o];
    }
}
const X = M(), qe = M(), gt = M();
var R;
const D = W.getLogger("geoscene.geometry.Mesh");
let F = R = class extends Rt(Ct.LoadableMixin(Et(Lt))) {
  constructor(e) {
    super(e), this.components = null, this.transform = null, this.external = null, this.hasZ = !0, this.hasM = !1, this.vertexAttributes = new A(), this.type = "mesh";
  }
  initialize() {
    (se(this.external) || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.handles.add(Ot(() => {
        var e;
        return { vertexAttributes: this.vertexAttributes, components: (e = this.components) == null ? void 0 : e.map((t) => t.clone()), transform: f(this.transform) ? this.transform.clone() : null };
      }, () => this._set("external", null), { once: !0, sync: !0 }));
    });
  }
  get hasExtent() {
    return !this.loaded && f(this.external) && f(this.external.extent) || this.loaded && this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0);
  }
  get boundingInfo() {
    const e = this.vertexAttributes.position, t = this.spatialReference;
    if (e.length === 0 || this.components && this.components.length === 0)
      return { extent: new De({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t }), center: new L({ x: 0, y: 0, z: 0, spatialReference: t }) };
    const n = f(this.transform) ? this.transform.project(e, t) : e;
    let r = 1 / 0, o = 1 / 0, s = 1 / 0, i = -1 / 0, a = -1 / 0, c = -1 / 0, l = 0, g = 0, m = 0;
    const p = n.length, h = 1 / (p / 3);
    let y = 0;
    for (; y < p; ) {
      const T = n[y++], v = n[y++], $ = n[y++];
      r = Math.min(r, T), o = Math.min(o, v), s = Math.min(s, $), i = Math.max(i, T), a = Math.max(a, v), c = Math.max(c, $), l += h * T, g += h * v, m += h * $;
    }
    return { extent: new De({ xmin: r, ymin: o, zmin: s, xmax: i, ymax: a, zmax: c, spatialReference: t }), center: new L({ x: l, y: g, z: m, spatialReference: t }) };
  }
  get anchor() {
    if (f(this.transform))
      return this.transform.getOriginPoint(this.spatialReference);
    const e = this.boundingInfo;
    return new L({ x: e.center.x, y: e.center.y, z: e.extent.zmin, spatialReference: this.spatialReference });
  }
  get origin() {
    return f(this.transform) ? this.transform.getOriginPoint(this.spatialReference) : this.boundingInfo.center;
  }
  get extent() {
    return !this.loaded && f(this.external) && f(this.external.extent) ? this.external.extent.clone() : this.boundingInfo.extent;
  }
  addComponent(e) {
    this.loaded ? (this.components || (this.components = []), this.components.push(Q.from(e)), this.notifyChange("components")) : D.error("addComponent()", "Mesh must be loaded before applying operations");
  }
  removeComponent(e) {
    if (this.loaded) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1)
          return this.components.splice(t, 1), void this.notifyChange("components");
      }
      D.error("removeComponent()", "Provided component is not part of the list of components");
    } else
      D.error("removeComponent()", "Mesh must be loaded before applying operations");
  }
  rotate(e, t, n, r) {
    return ue(Me.x, e, V), ue(Me.y, t, Xe), ue(Me.z, n, Ke), Re(V, Xe, V), Re(V, Ke, V), Mn(this, V, r), this;
  }
  offset(e, t, n, r) {
    return this.loaded ? (ce[0] = e, ce[1] = t, ce[2] = n, cn(this, ce, r), this) : (D.error("offset()", "Mesh must be loaded before applying operations"), this);
  }
  scale(e, t) {
    return this.loaded ? (Rn(this, e, t), this) : (D.error("scale()", "Mesh must be loaded before applying operations"), this);
  }
  centerAt(e, t) {
    return this.loaded ? (qt(this, e, t), this) : (D.error("centerAt()", "Mesh must be loaded before applying operations"), this);
  }
  load(e) {
    return f(this.external) && this.addResolvingPromise(rn(this, this.external.source, e)), Promise.resolve(this);
  }
  clone() {
    const e = this.components ? /* @__PURE__ */ new Map() : null, t = this.components ? /* @__PURE__ */ new Map() : null, n = { components: this.components ? this.components.map((r) => r.cloneWithDeduplication(e, t)) : null, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes.clone(), transform: f(this.transform) ? this.transform.clone() : null, external: f(this.external) ? { source: this.external.source, extent: f(this.external.extent) ? this.external.extent.clone() : null } : null };
    return new R(n);
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e) {
    const { toBinaryGLTF: t } = await import("./gltfexport-Ti-fkYtn.js");
    return t(this, e);
  }
  static createBox(e, t) {
    if (!(e instanceof L))
      return D.error(".createBox()", "expected location to be a Point instance"), null;
    const n = new R(le(gn(), e, t));
    return t && t.imageFace && t.imageFace !== "all" ? mn(n, t.imageFace) : n;
  }
  static createSphere(e, t) {
    return e instanceof L ? new R(le(dn(t && t.densificationFactor || 0), e, t)) : (D.error(".createSphere()", "expected location to be a Point instance"), null);
  }
  static createCylinder(e, t) {
    return e instanceof L ? new R(le(yn(t && t.densificationFactor || 0), e, t)) : (D.error(".createCylinder()", "expected location to be a Point instance"), null);
  }
  static createPlane(e, t) {
    var n;
    if (!(e instanceof L))
      return D.error(".createPlane()", "expected location to be a Point instance"), null;
    const r = (n = t == null ? void 0 : t.facing) != null ? n : "up", o = wn(r, t == null ? void 0 : t.size);
    return new R(le(xn(r), e, { ...t, size: o }));
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof It))
      return D.error(".createFromPolygon()", "expected polygon to be a Polygon instance"), null;
    const n = Zt(e);
    return new R({ vertexAttributes: new A({ position: n.position }), components: [new Q({ faces: n.faces, shading: "flat", material: t && t.material || null })], spatialReference: e.spatialReference });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof L))
      throw D.error(".createfromGLTF()", "expected location to be a Point instance"), new Te("invalid-input", "Expected location to be a Point instance");
    const { loadGLTFMesh: r } = await Ie(import("./loadGLTFMesh-Znya-ip5.js"), n);
    return new R(await r(e, t, n));
  }
  static createWithExternalSource(e, t, n) {
    var r, o, s;
    const i = (r = n == null ? void 0 : n.extent) != null ? r : null, a = (o = n == null ? void 0 : n.transform.clone()) != null ? o : new ge();
    a.origin = [e.x, e.y, (s = e.z) != null ? s : 0];
    const c = e.spatialReference;
    return new R({ external: { source: t, extent: i }, transform: a, spatialReference: c });
  }
  static createIncomplete(e, t) {
    var n, r;
    const o = (n = t == null ? void 0 : t.transform.clone()) != null ? n : new ge();
    o.origin = [e.x, e.y, (r = e.z) != null ? r : 0];
    const s = e.spatialReference, i = new R({ transform: o, spatialReference: s });
    return i.addResolvingPromise(Promise.reject(new Te("mesh-incomplete", "Mesh resources are not complete"))), i;
  }
};
u([d({ type: [Q], json: { write: !0 } })], F.prototype, "components", void 0), u([d({ type: ge, json: { write: !0 } })], F.prototype, "transform", void 0), u([d({ constructOnly: !0 })], F.prototype, "external", void 0), u([d({ readOnly: !0 })], F.prototype, "hasExtent", null), u([d({ readOnly: !0 })], F.prototype, "boundingInfo", null), u([d({ readOnly: !0 })], F.prototype, "anchor", null), u([d({ readOnly: !0 })], F.prototype, "origin", null), u([d({ readOnly: !0, json: { read: !1 } })], F.prototype, "extent", null), u([d({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })], F.prototype, "hasZ", void 0), u([d({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })], F.prototype, "hasM", void 0), u([d({ type: A, nonNullable: !0, json: { write: !0 } })], F.prototype, "vertexAttributes", void 0), F = R = u([ee("geoscene.geometry.Mesh")], F);
const Me = { x: $e(1, 0, 0), y: $e(0, 1, 0), z: $e(0, 0, 1) }, V = ie(), Xe = ie(), Ke = ie(), ce = M(), Qe = F;
var U, we;
(function(e) {
  e.featureGUID = "featureGUID", e.assetName = "assetName", e.hash = "hash", e.type = "type", e.conversionStatus = "conversionStatus", e.flags = "flags", e.complexity = "complexity", e.size = "size", e.seqNo = "seqNo", e.sourceHash = "sourceHash", e.assetURL = "assetURL";
})(U || (U = {})), function(e) {
  e.SUBMITTED = "SUBMITTED", e.INPROGRESS = "INPROGRESS", e.FAILED = "FAILED", e.COMPLETED = "COMPLETED";
}(we || (we = {}));
function On(e, t, n) {
  const r = n.features;
  n.features = [], delete n.geometryType;
  const o = Pt.fromJSON(n);
  o.geometryType = "mesh";
  const s = o.spatialReference, i = se(e.outFields) || !e.outFields.length ? () => ({}) : In(e.outFields.includes("*") ? null : new Set(e.outFields));
  for (const a of r) {
    const c = Pn(a, s, t);
    f(c) && o.features.push(new St({ geometry: c, attributes: i(a) }));
  }
  return o;
}
function In(e) {
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
function Pn(e, t, n) {
  const { status: r, source: o } = Nn(e);
  if (r === N.FAILED)
    return null;
  const s = Sn(e, t, n), i = De.fromJSON(e.geometry);
  i.spatialReference = t;
  const a = jn(e, n);
  return r === N.PENDING ? Qe.createIncomplete(s, { extent: i, transform: a }) : Qe.createWithExternalSource(s, o, { extent: i, transform: a });
}
function Sn({ attributes: e }, t, { transformFieldRoles: n }) {
  return new L({ x: e[n.originX], y: e[n.originY], z: e[n.originZ], spatialReference: t });
}
function jn({ attributes: e, assetMappings: t }, { transformFieldRoles: n }) {
  var r;
  return new ge({ translation: [e[n.translationX], e[n.translationY], e[n.translationZ]], rotation: ue([e[n.rotationX], e[n.rotationY], e[n.rotationZ]], e[n.rotationDeg]), scale: [e[n.scaleX], e[n.scaleY], e[n.scaleZ]], geographic: !((r = t[U.flags]) != null && r.includes("PROJECT_VERTICES")) });
}
function Nn(e) {
  if (!e.assetMappings)
    return { status: N.FAILED };
  const t = [], n = /* @__PURE__ */ new Map();
  for (const r of e.assetMappings) {
    const o = r[U.seqNo], s = r[U.assetName], i = r[U.assetURL], a = r[U.conversionStatus];
    if (a === we.FAILED)
      return { status: N.FAILED };
    if (a !== we.COMPLETED)
      return { status: N.PENDING };
    if (o == null)
      t.push({ name: s, source: i });
    else {
      const c = n.get(s);
      let l;
      c ? l = c.multipart : (l = [], t.push({ name: s, source: { multipart: l } }), n.set(s, { multipart: l })), l[o] = i;
    }
  }
  return { status: N.COMPLETED, source: t };
}
var N;
(function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
})(N || (N = {}));
const Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meshFeatureSetFromJSON: On
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hn as a,
  Ht as c,
  Q as f,
  oe as m,
  A as p
};

import { j as xe, d as ue, k as ce, c as ge, l as _e, m as Se, p as Ee } from "./vec33-xPYzdI97.js";
import { c as Ie, u as Ae, r as Ne, e as Oe } from "./types-P8vOpb2s.js";
import { iv as fe, bc as Ue, je as le, l as de, C as Ce, ev as Re, bG as $e, y as K, s as Me, e_ as pe, jf as Be, T as Le, da as ve, g7 as Pe, g2 as Fe, g1 as De, gm as Ge, c6 as je, r as Q, jg as he, eL as Ve, jh as ke, ji as Ye, gc as ee, f$ as x, hk as te, jj as He, hj as qe, hf as C, hc as O, iK as j, fm as ze, jk as Je } from "./index-Ek1MTSEY.js";
import { D as k, L as Y, C as d, E as L } from "./enums-n72NRQQZ.js";
import { r as me } from "./Version-sFmbM26K.js";
import { P as Xe } from "./quat-Pv0iCRyB.js";
import { B as Ke, g as Qe, d as We, i as z, c as re, u as ye, x as Ze, L as et, O as tt, E as rt, F as nt, w as st, q as ot, A as at, V as it } from "./BufferView-iMd5U1JV.js";
function Ht() {
  return [0, 0, 0, 0];
}
function qt(n, e, t, s) {
  return [n, e, t, s];
}
function ut(n, e) {
  return new Float64Array(n, e, 4);
}
function zt(n, e, t) {
  if (n.count !== e.count)
    return void xe.error("source and destination buffers need to have the same number of elements");
  const s = n.count, r = t[0], o = t[1], a = t[2], c = t[3], u = t[4], i = t[5], f = t[6], l = t[7], p = t[8], y = n.typedBuffer, M = n.typedBufferStride, h = e.typedBuffer, B = e.typedBufferStride;
  for (let S = 0; S < s; S++) {
    const E = S * M, g = S * B, I = h[g], A = h[g + 1], N = h[g + 2], q = h[g + 3];
    y[E] = r * I + c * A + f * N, y[E + 1] = o * I + u * A + l * N, y[E + 2] = a * I + i * A + p * N, y[E + 3] = q;
  }
}
function Jt(n, e, t) {
  const s = Math.min(n.count, e.count), r = n.typedBuffer, o = n.typedBufferStride, a = e.typedBuffer, c = e.typedBufferStride;
  for (let u = 0; u < s; u++) {
    const i = u * o, f = u * c;
    r[i] = t * a[f], r[i + 1] = t * a[f + 1], r[i + 2] = t * a[f + 2], r[i + 3] = t * a[f + 3];
  }
}
function Xt(n, e, t) {
  const s = Math.min(n.count, e.count), r = n.typedBuffer, o = n.typedBufferStride, a = e.typedBuffer, c = e.typedBufferStride;
  for (let u = 0; u < s; u++) {
    const i = u * o, f = u * c;
    r[i] = a[f] >> t, r[i + 1] = a[f + 1] >> t, r[i + 2] = a[f + 2] >> t, r[i + 3] = a[f + 3] >> t;
  }
}
function J(n, e) {
  const t = n.count;
  e || (e = new n.TypedArrayConstructor(t));
  for (let s = 0; s < t; s++)
    e[s] = n.get(s);
  return e;
}
function ct(n, e, t) {
  const s = n.typedBuffer, r = n.typedBufferStride, o = e.typedBuffer, a = e.typedBufferStride, c = t ? t.count : e.count;
  let u = (t && t.dstIndex ? t.dstIndex : 0) * r, i = (t && t.srcIndex ? t.srcIndex : 0) * a;
  for (let f = 0; f < c; ++f)
    s[u] = o[i], s[u + 1] = o[i + 1], u += r, i += a;
}
function Kt(n, e, t) {
  const s = n.typedBuffer, r = n.typedBufferStride, o = e.typedBuffer, a = e.typedBufferStride, c = t ? t.count : e.count;
  let u = (t && t.dstIndex ? t.dstIndex : 0) * r, i = (t && t.srcIndex ? t.srcIndex : 0) * a;
  if (Ie(e.elementType)) {
    const f = Ae(e.elementType);
    if (Ne(e.elementType))
      for (let l = 0; l < c; ++l)
        s[u] = Math.max(o[i] / f, -1), s[u + 1] = Math.max(o[i + 1] / f, -1), u += r, i += a;
    else
      for (let l = 0; l < c; ++l)
        s[u] = o[i] / f, s[u + 1] = o[i + 1] / f, u += r, i += a;
  } else
    ct(n, e, t);
  return n;
}
function Qt(n, e, t, s) {
  var r, o;
  const a = n.typedBuffer, c = n.typedBufferStride, u = (r = s == null ? void 0 : s.count) != null ? r : n.count;
  let i = ((o = s == null ? void 0 : s.dstIndex) != null ? o : 0) * c;
  for (let f = 0; f < u; ++f)
    a[i] = e, a[i + 1] = t, i += c;
}
function Wt(n, e, t) {
  const s = n.typedBuffer, r = n.typedBufferStride, o = e.typedBuffer, a = e.typedBufferStride, c = t ? t.count : e.count;
  let u = (t && t.dstIndex ? t.dstIndex : 0) * r, i = (t && t.srcIndex ? t.srcIndex : 0) * a;
  for (let f = 0; f < c; ++f)
    s[u] = o[i], s[u + 1] = o[i + 1], s[u + 2] = o[i + 2], s[u + 3] = o[i + 3], u += r, i += a;
}
function Zt(n, e, t, s, r, o) {
  var a, c;
  const u = n.typedBuffer, i = n.typedBufferStride, f = (a = o == null ? void 0 : o.count) != null ? a : n.count;
  let l = ((c = o == null ? void 0 : o.dstIndex) != null ? c : 0) * i;
  for (let p = 0; p < f; ++p)
    u[l] = e, u[l + 1] = t, u[l + 2] = s, u[l + 3] = r, l += i;
}
function er(n, e) {
  return new n(new ArrayBuffer(e * n.ElementCount * Oe(n.ElementType)));
}
let tr = class {
  constructor(e) {
    this.streamDataRequester = e;
  }
  async loadJSON(e, t) {
    return this._load("json", e, t);
  }
  async loadBinary(e, t) {
    return fe(e) ? (Ue(t), le(e)) : this._load("binary", e, t);
  }
  async loadImage(e, t) {
    return this._load("image", e, t);
  }
  async _load(e, t, s) {
    if (de(this.streamDataRequester))
      return (await Ce(t, { responseType: ft[e] })).data;
    const r = await Re(this.streamDataRequester.request(t, e, s));
    if (r.ok === !0)
      return r.value;
    throw $e(r.error), new K("", `Request for resource failed: ${r.error}`);
  }
};
const ft = { image: "image", binary: "array-buffer", json: "json" }, lt = Me.getLogger("geoscene.views.3d.glTF");
let dt = class {
  error(e) {
    throw new K("gltf-loader-error", e);
  }
  errorUnsupported(e) {
    throw new K("gltf-loader-unsupported-feature", e);
  }
  errorUnsupportedIf(e, t) {
    e && this.errorUnsupported(t);
  }
  assert(e, t) {
    e || this.error(t);
  }
  warn(e) {
    lt.warn(e);
  }
  warnUnsupported(e) {
    this.warn("[Unsupported Feature] " + e);
  }
  warnUnsupportedIf(e, t) {
    e && this.warnUnsupported(t);
  }
};
function pt(n = {}) {
  return { color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: !1, castShadows: !0, receiveShadows: !0, receiveAmbientOcclustion: !0, textureColor: null, textureNormal: null, textureOcclusion: null, textureEmissive: null, textureMetallicRoughness: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply", ...n };
}
function ht(n, e = {}) {
  return { data: n, parameters: { wrap: { s: k.REPEAT, t: k.REPEAT, ...e.wrap }, noUnpackFlip: !0, mipmap: !1, ...e } };
}
let ne = class {
  constructor(e) {
    this.data = e, this.offset4 = 0, this.dataUint32 = new Uint32Array(this.data, 0, Math.floor(this.data.byteLength / 4));
  }
  readUint32() {
    const e = this.offset4;
    return this.offset4 += 1, this.dataUint32[e];
  }
  readUint8Array(e) {
    const t = 4 * this.offset4;
    return this.offset4 += e / 4, new Uint8Array(this.data, t, e);
  }
  remainingBytes() {
    return this.data.byteLength - 4 * this.offset4;
  }
};
var $, se;
(function(n) {
  n.SCALAR = "SCALAR", n.VEC2 = "VEC2", n.VEC3 = "VEC3", n.VEC4 = "VEC4", n.MAT2 = "MAT2", n.MAT3 = "MAT3", n.MAT4 = "MAT4";
})($ || ($ = {})), function(n) {
  n[n.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", n[n.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(se || (se = {}));
const Te = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 }, mt = { pbrMetallicRoughness: Te, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: !1 }, yt = { ESRI_externalColorMixMode: "tint" }, oe = (n = {}) => {
  const e = { ...Te, ...n.pbrMetallicRoughness }, t = Tt({ ...yt, ...n.extras });
  return { ...mt, ...n, pbrMetallicRoughness: e, extras: t };
};
function Tt(n) {
  switch (n.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      pe(n.ESRI_externalColorMixMode), n.ESRI_externalColorMixMode = "tint";
  }
  return n;
}
const wt = { magFilter: Y.LINEAR, minFilter: Y.LINEAR_MIPMAP_LINEAR, wrapS: k.REPEAT, wrapT: k.REPEAT }, bt = (n) => ({ ...wt, ...n });
function xt(n) {
  let e, t;
  return n.replace(/^(.*\/)?([^/]*)$/, (s, r, o) => (e = r || "", t = o || "", "")), { dirPart: e, filePart: t };
}
const v = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562, MIN_HEADER_LENGTH: 20 };
class T {
  constructor(e, t, s, r, o) {
    this.context = e, this.errorContext = t, this.uri = s, this.json = r, this.glbBuffer = o, this.bufferLoaders = /* @__PURE__ */ new Map(), this.textureLoaders = /* @__PURE__ */ new Map(), this.textureCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map(), this.nodeParentMap = /* @__PURE__ */ new Map(), this.nodeTransformCache = /* @__PURE__ */ new Map(), this.baseUri = xt(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), t.errorUnsupportedIf(r.scenes == null, "Scenes must be defined."), t.errorUnsupportedIf(r.meshes == null, "Meshes must be defined"), t.errorUnsupportedIf(r.nodes == null, "Nodes must be defined."), this._computeNodeParents();
  }
  static async load(e, t, s, r) {
    if (fe(s)) {
      const c = Le(s);
      if (c.mediaType !== "model/gltf-binary")
        try {
          const i = JSON.parse(c.isBase64 ? atob(c.data) : c.data);
          return new T(e, t, s, i);
        } catch {
        }
      const u = le(s);
      if (T._isGLBData(u))
        return this._fromGLBData(e, t, s, u);
    }
    if (s.endsWith(".gltf")) {
      const c = await e.loadJSON(s, r);
      return new T(e, t, s, c);
    }
    const o = await e.loadBinary(s, r);
    if (T._isGLBData(o))
      return this._fromGLBData(e, t, s, o);
    const a = await e.loadJSON(s, r);
    return new T(e, t, s, a);
  }
  static _isGLBData(e) {
    const t = new ne(e);
    return t.remainingBytes() >= 4 && t.readUint32() === v.MAGIC;
  }
  static async _fromGLBData(e, t, s, r) {
    const o = await T._parseGLBData(t, r);
    return new T(e, t, s, o.json, o.binaryData);
  }
  static async _parseGLBData(e, t) {
    const s = new ne(t);
    e.assert(s.remainingBytes() >= 12, "GLB binary data is insufficiently large.");
    const r = s.readUint32(), o = s.readUint32(), a = s.readUint32();
    e.assert(r === v.MAGIC, "Magic first 4 bytes do not fit to expected GLB value."), e.assert(t.byteLength >= a, "GLB binary data is smaller than header specifies."), e.errorUnsupportedIf(o !== 2, "An unsupported GLB container version was detected. Only version 2 is supported.");
    let c, u, i = 0;
    for (; s.remainingBytes() >= 8; ) {
      const f = s.readUint32(), l = s.readUint32();
      i === 0 ? (e.assert(l === v.CHUNK_TYPE_JSON, "First GLB chunk must be JSON."), e.assert(f >= 0, "No JSON data found."), c = await At(s.readUint8Array(f))) : i === 1 ? (e.errorUnsupportedIf(l !== v.CHUNK_TYPE_BIN, "Second GLB chunk expected to be BIN."), u = s.readUint8Array(f)) : e.warnUnsupported("More than 2 GLB chunks detected. Skipping."), i += 1;
    }
    return c || e.error("No GLB JSON chunk detected."), { json: c, binaryData: u };
  }
  async getBuffer(e, t) {
    const s = this.json.buffers[e], r = this.errorContext;
    if (s.uri == null)
      return r.assert(this.glbBuffer != null, "GLB buffer not present"), this.glbBuffer;
    const o = await this._getBufferLoader(e, t);
    return r.assert(o.byteLength === s.byteLength, "Buffer byte lengths should match."), o;
  }
  async _getBufferLoader(e, t) {
    const s = this.bufferLoaders.get(e);
    if (s)
      return s;
    const r = this.json.buffers[e], o = this.context.loadBinary(this._resolveUri(r.uri), t).then((a) => new Uint8Array(a));
    return this.bufferLoaders.set(e, o), o;
  }
  async getAccessor(e, t) {
    const s = this.errorContext;
    s.errorUnsupportedIf(!this.json.accessors, "Accessors missing.");
    const r = this.json.accessors[e];
    s.errorUnsupportedIf((r == null ? void 0 : r.bufferView) == null, "Some accessor does not specify a bufferView."), s.errorUnsupportedIf(r.type in [$.MAT2, $.MAT3, $.MAT4], `AttributeType ${r.type} is not supported`);
    const o = this.json.bufferViews[r.bufferView], a = await this.getBuffer(o.buffer, t), c = St[r.type], u = Et[r.componentType], i = c * u, f = o.byteStride || i;
    return { raw: a.buffer, byteStride: f, byteOffset: a.byteOffset + (o.byteOffset || 0) + (r.byteOffset || 0), entryCount: r.count, isDenselyPacked: f === i, componentCount: c, componentByteSize: u, componentType: r.componentType, min: r.min, max: r.max, normalized: !!r.normalized };
  }
  async getIndexData(e, t) {
    if (e.indices == null)
      return null;
    const s = await this.getAccessor(e.indices, t);
    if (s.isDenselyPacked)
      switch (s.componentType) {
        case d.UNSIGNED_BYTE:
          return new Uint8Array(s.raw, s.byteOffset, s.entryCount);
        case d.UNSIGNED_SHORT:
          return new Uint16Array(s.raw, s.byteOffset, s.entryCount);
        case d.UNSIGNED_INT:
          return new Uint32Array(s.raw, s.byteOffset, s.entryCount);
      }
    else
      switch (s.componentType) {
        case d.UNSIGNED_BYTE:
          return J(this._wrapAccessor(We, s));
        case d.UNSIGNED_SHORT:
          return J(this._wrapAccessor(Qe, s));
        case d.UNSIGNED_INT:
          return J(this._wrapAccessor(Ke, s));
      }
  }
  async getPositionData(e, t) {
    const s = this.errorContext;
    s.errorUnsupportedIf(e.attributes.POSITION == null, "No POSITION vertex data found.");
    const r = await this.getAccessor(e.attributes.POSITION, t);
    return s.errorUnsupportedIf(r.componentType !== d.FLOAT, "Expected type FLOAT for POSITION vertex attribute, but found " + F[r.componentType]), s.errorUnsupportedIf(r.componentCount !== 3, "POSITION vertex attribute must have 3 components, but found " + r.componentCount.toFixed()), this._wrapAccessor(z, r);
  }
  async getNormalData(e, t) {
    const s = this.errorContext;
    s.assert(e.attributes.NORMAL != null, "No NORMAL vertex data found.");
    const r = await this.getAccessor(e.attributes.NORMAL, t);
    return s.errorUnsupportedIf(r.componentType !== d.FLOAT, "Expected type FLOAT for NORMAL vertex attribute, but found " + F[r.componentType]), s.errorUnsupportedIf(r.componentCount !== 3, "NORMAL vertex attribute must have 3 components, but found " + r.componentCount.toFixed()), this._wrapAccessor(z, r);
  }
  async getTangentData(e, t) {
    const s = this.errorContext;
    s.assert(e.attributes.TANGENT != null, "No TANGENT vertex data found.");
    const r = await this.getAccessor(e.attributes.TANGENT, t);
    return s.errorUnsupportedIf(r.componentType !== d.FLOAT, "Expected type FLOAT for TANGENT vertex attribute, but found " + F[r.componentType]), s.errorUnsupportedIf(r.componentCount !== 4, "TANGENT vertex attribute must have 4 components, but found " + r.componentCount.toFixed()), new re(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
  }
  async getTextureCoordinates(e, t) {
    const s = this.errorContext;
    s.assert(e.attributes.TEXCOORD_0 != null, "No TEXCOORD_0 vertex data found.");
    const r = await this.getAccessor(e.attributes.TEXCOORD_0, t);
    return s.errorUnsupportedIf(r.componentCount !== 2, "TEXCOORD_0 vertex attribute must have 2 components, but found " + r.componentCount.toFixed()), r.componentType === d.FLOAT ? this._wrapAccessor(ye, r) : (s.errorUnsupportedIf(!r.normalized, "Integer component types are only supported for a normalized accessor for TEXCOORD_0."), It(r));
  }
  async getVertexColors(e, t) {
    const s = this.errorContext;
    s.assert(e.attributes.COLOR_0 != null, "No COLOR_0 vertex data found.");
    const r = await this.getAccessor(e.attributes.COLOR_0, t);
    if (s.errorUnsupportedIf(r.componentCount !== 4 && r.componentCount !== 3, "COLOR_0 attribute must have 3 or 4 components, but found " + r.componentCount.toFixed()), r.componentCount === 4) {
      if (r.componentType === d.FLOAT)
        return this._wrapAccessor(re, r);
      if (r.componentType === d.UNSIGNED_BYTE)
        return this._wrapAccessor(Ze, r);
      if (r.componentType === d.UNSIGNED_SHORT)
        return this._wrapAccessor(et, r);
    } else if (r.componentCount === 3) {
      if (r.componentType === d.FLOAT)
        return this._wrapAccessor(z, r);
      if (r.componentType === d.UNSIGNED_BYTE)
        return this._wrapAccessor(tt, r);
      if (r.componentType === d.UNSIGNED_SHORT)
        return this._wrapAccessor(rt, r);
    }
    s.errorUnsupported("Unsupported component type for COLOR_0 attribute: " + F[r.componentType]);
  }
  hasPositions(e) {
    return e.attributes.POSITION !== void 0;
  }
  hasNormals(e) {
    return e.attributes.NORMAL !== void 0;
  }
  hasVertexColors(e) {
    return e.attributes.COLOR_0 !== void 0;
  }
  hasTextureCoordinates(e) {
    return e.attributes.TEXCOORD_0 !== void 0;
  }
  hasTangents(e) {
    return e.attributes.TANGENT !== void 0;
  }
  async getMaterial(e, t, s) {
    let r = this.materialCache.get(e.material);
    if (!r) {
      const o = e.material != null ? oe(this.json.materials[e.material]) : oe(), a = o.pbrMetallicRoughness, c = this.hasVertexColors(e), u = this.getTexture(a.baseColorTexture, t), i = this.getTexture(o.normalTexture, t), f = s ? this.getTexture(o.occlusionTexture, t) : null, l = s ? this.getTexture(o.emissiveTexture, t) : null, p = s ? this.getTexture(a.metallicRoughnessTexture, t) : null, y = e.material != null ? e.material : -1;
      r = { alphaMode: o.alphaMode, alphaCutoff: o.alphaCutoff, color: a.baseColorFactor, doubleSided: !!o.doubleSided, colorTexture: await u, normalTexture: await i, name: o.name, id: y, occlusionTexture: await f, emissiveTexture: await l, emissiveFactor: o.emissiveFactor, metallicFactor: a.metallicFactor, roughnessFactor: a.roughnessFactor, metallicRoughnessTexture: await p, vertexColors: c, ESRI_externalColorMixMode: o.extras.ESRI_externalColorMixMode };
    }
    return r;
  }
  async getTexture(e, t) {
    if (!e)
      return null;
    this.errorContext.errorUnsupportedIf((e.texCoord || 0) !== 0, "Only TEXCOORD with index 0 is supported.");
    const s = e.index, r = this.errorContext, o = this.json.textures[s], a = bt(o.sampler != null ? this.json.samplers[o.sampler] : {});
    r.errorUnsupportedIf(o.source == null, "Source is expected to be defined for a texture.");
    const c = this.json.images[o.source], u = await this._loadTextureImageData(s, o, t);
    return ve(this.textureCache, s, () => {
      const i = (l) => l === 33071 || l === 33648 || l === 10497, f = (l) => (r.error(`Unexpected TextureSampler WrapMode: ${l}. Using default REPEAT(10497).`), 10497);
      return { data: u, wrapS: i(a.wrapS) ? a.wrapS : f(a.wrapS), wrapT: i(a.wrapT) ? a.wrapT : f(a.wrapT), minFilter: a.minFilter, name: c.name, id: s };
    });
  }
  getNodeTransform(e) {
    if (e === void 0)
      return _t;
    let t = this.nodeTransformCache.get(e);
    if (!t) {
      const s = this.getNodeTransform(this._getNodeParent(e)), r = this.json.nodes[e];
      r.matrix ? t = Pe(ue(), s, r.matrix) : r.translation || r.rotation || r.scale ? (t = ce(s), r.translation && Fe(t, t, r.translation), r.rotation && (P[3] = Xe(P, r.rotation), De(t, t, P[3], P)), r.scale && Ge(t, t, r.scale)) : t = s, this.nodeTransformCache.set(e, t);
    }
    return t;
  }
  _wrapAccessor(e, t) {
    return new e(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * (t.entryCount - 1) + t.componentByteSize * t.componentCount);
  }
  _resolveUri(e) {
    return je(e, this.baseUri);
  }
  _getNodeParent(e) {
    return this.nodeParentMap.get(e);
  }
  _checkVersionSupported() {
    const e = me.parse(this.json.asset.version, "glTF");
    gt.validate(e);
  }
  _checkRequiredExtensionsSupported() {
    const e = this.json, t = this.errorContext;
    e.extensionsRequired && e.extensionsRequired.length !== 0 && t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: " + e.extensionsRequired.join(", "));
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e, t) => {
      e.children && e.children.forEach((s) => {
        this.nodeParentMap.set(s, t);
      });
    });
  }
  async _loadTextureImageData(e, t, s) {
    const r = this.textureLoaders.get(e);
    if (r)
      return r;
    const o = this._createTextureLoader(t, s);
    return this.textureLoaders.set(e, o), o;
  }
  async _createTextureLoader(e, t) {
    const s = this.json.images[e.source];
    if (s.uri)
      return this.context.loadImage(this._resolveUri(s.uri), t);
    const r = this.errorContext;
    r.errorUnsupportedIf(s.bufferView == null, "Image bufferView must be defined."), r.errorUnsupportedIf(s.mimeType == null, "Image mimeType must be defined.");
    const o = this.json.bufferViews[s.bufferView], a = await this.getBuffer(o.buffer, t);
    return r.errorUnsupportedIf(o.byteStride != null, "byteStride not supported for image buffer"), Nt(new Uint8Array(a.buffer, a.byteOffset + (o.byteOffset || 0), o.byteLength), s.mimeType);
  }
}
const gt = new me(2, 0, "glTF"), _t = Be(ue(), Math.PI / 2), P = ge(), St = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }, Et = { [d.BYTE]: 1, [d.UNSIGNED_BYTE]: 1, [d.SHORT]: 2, [d.UNSIGNED_SHORT]: 2, [d.FLOAT]: 4, [d.UNSIGNED_INT]: 4 };
function It(n) {
  switch (n.componentType) {
    case d.BYTE:
      return new it(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    case d.UNSIGNED_BYTE:
      return new at(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    case d.SHORT:
      return new ot(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    case d.UNSIGNED_SHORT:
      return new st(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    case d.UNSIGNED_INT:
      return new nt(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    case d.FLOAT:
      return new ye(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    default:
      return void pe(n.componentType);
  }
}
async function At(n) {
  return new Promise((e, t) => {
    const s = new Blob([n]), r = new FileReader();
    r.onload = () => {
      const o = r.result;
      e(JSON.parse(o));
    }, r.onerror = (o) => {
      t(o);
    }, r.readAsText(s);
  });
}
async function Nt(n, e) {
  return new Promise((t, s) => {
    const r = new Blob([n], { type: e }), o = URL.createObjectURL(r), a = new Image();
    a.addEventListener("load", () => {
      URL.revokeObjectURL(o), "decode" in a ? a.decode().then(() => t(a), () => t(a)) : t(a);
    }), a.addEventListener("error", (c) => {
      URL.revokeObjectURL(o), s(c);
    }), a.src = o;
  });
}
const F = { 5120: "BYTE", 5121: "UNSIGNED_BYTE", 5122: "SHORT", 5123: "UNSIGNED_SHORT", 5125: "UNSIGNED_INT", 5126: "FLOAT" };
let Ot = 0;
async function or(n, e, t = {}, s = !0) {
  const r = await T.load(n, V, e, t), o = "gltf_" + Ot++, a = { lods: [], materials: /* @__PURE__ */ new Map(), textures: /* @__PURE__ */ new Map(), meta: Ut(r) }, c = !(!r.json.asset.extras || r.json.asset.extras.ESRI_type !== "symbolResource"), u = /* @__PURE__ */ new Map();
  await Ct(r, async (i, f, l, p) => {
    var y;
    const M = (y = u.get(l)) != null ? y : 0;
    u.set(l, M + 1);
    const h = i.mode !== void 0 ? i.mode : L.TRIANGLES, B = h === L.TRIANGLES || h === L.TRIANGLE_STRIP || h === L.TRIANGLE_FAN ? h : null;
    if (de(B))
      return void V.warnUnsupported("Unsupported primitive mode (" + Bt[h] + "). Skipping primitive.");
    if (!r.hasPositions(i))
      return void V.warn("Skipping primitive without POSITION vertex attribute.");
    const S = r.getPositionData(i, t), E = r.getMaterial(i, t, s), g = r.hasNormals(i) ? r.getNormalData(i, t) : null, I = r.hasTangents(i) ? r.getTangentData(i, t) : null, A = r.hasTextureCoordinates(i) ? r.getTextureCoordinates(i, t) : null, N = r.hasVertexColors(i) ? r.getVertexColors(i, t) : null, q = r.getIndexData(i, t), be = { transform: ce(f), attributes: { position: await S, normal: g ? await g : null, texCoord0: A ? await A : null, color: N ? await N : null, tangent: I ? await I : null }, indices: await q, primitiveType: B, material: $t(a, await E, o) };
    let Z = null;
    Q(a.meta) && Q(a.meta.ESRI_lod) && a.meta.ESRI_lod.metric === "screenSpaceRadius" && (Z = a.meta.ESRI_lod.thresholds[l]), a.lods[l] = a.lods[l] || { parts: [], name: p, lodThreshold: Z }, a.lods[l].parts[M] = be;
  });
  for (const i of a.lods)
    i.parts = i.parts.filter((f) => !!f);
  return { model: a, meta: { isEsriSymbolResource: c, uri: r.uri }, customMeta: {} };
}
function Ut(n) {
  const e = n.json;
  let t = null;
  return e.nodes.forEach((s) => {
    const r = s.extras;
    Q(r) && (r.ESRI_proxyEllipsoid || r.ESRI_lod) && (t = r);
  }), t;
}
async function Ct(n, e) {
  const t = n.json, s = t.scenes[t.scene || 0].nodes, r = s.length > 1, o = [];
  for (const c of s) {
    const u = t.nodes[c];
    o.push(a(c, 0)), Rt(u) && !r && u.extensions.MSFT_lod.ids.forEach((i, f) => a(i, f + 1));
  }
  async function a(c, u) {
    const i = t.nodes[c], f = n.getNodeTransform(c);
    if (V.warnUnsupportedIf(i.weights != null, "Morph targets are not supported."), i.mesh != null) {
      const l = t.meshes[i.mesh];
      for (const p of l.primitives)
        o.push(e(p, f, u, l.name));
    }
    for (const l of i.children || [])
      o.push(a(l, u));
  }
  await Promise.all(o);
}
function Rt(n) {
  return n.extensions && n.extensions.MSFT_lod && Array.isArray(n.extensions.MSFT_lod.ids);
}
function $t(n, e, t) {
  const s = (o) => {
    const a = `${t}_tex_${o && o.id}${o && o.name ? "_" + o.name : ""}`;
    if (o && !n.textures.has(a)) {
      const c = ht(o.data, { wrap: { s: o.wrapS, t: o.wrapT }, mipmap: Mt.some((u) => u === o.minFilter), noUnpackFlip: !0 });
      n.textures.set(a, c);
    }
    return a;
  }, r = `${t}_mat_${e.id}_${e.name}`;
  if (!n.materials.has(r)) {
    const o = pt({ color: [e.color[0], e.color[1], e.color[2]], opacity: e.color[3], alphaMode: e.alphaMode, alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, colorMixMode: e.ESRI_externalColorMixMode, textureColor: e.colorTexture ? s(e.colorTexture) : void 0, textureNormal: e.normalTexture ? s(e.normalTexture) : void 0, textureOcclusion: e.occlusionTexture ? s(e.occlusionTexture) : void 0, textureEmissive: e.emissiveTexture ? s(e.emissiveTexture) : void 0, textureMetallicRoughness: e.metallicRoughnessTexture ? s(e.metallicRoughnessTexture) : void 0, emissiveFactor: [e.emissiveFactor[0], e.emissiveFactor[1], e.emissiveFactor[2]], metallicFactor: e.metallicFactor, roughnessFactor: e.roughnessFactor });
    n.materials.set(r, o);
  }
  return r;
}
const V = new dt(), Mt = [Y.LINEAR_MIPMAP_LINEAR, Y.LINEAR_MIPMAP_NEAREST], Bt = ["POINTS", "LINES", "LINE_LOOP", "LINE_STRIP", "TRIANGLES", "TRIANGLE_STRIP", "TRIANGLE_FAN"];
let W = class {
  constructor(e) {
    this.allocator = e, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return this._itemsPtr === 0 && he(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const e = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * ae);
    this._items.length = Math.min(e, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let e = 0; e < Math.max(8, Math.min(this._items.length, ae)); e++)
      this._items.push(this.allocator());
  }
};
const ae = 1024;
let R = class _ {
  constructor(e, t, s) {
    this.itemByteSize = e, this.itemCreate = t, this._buffers = new Array(), this._items = new Array(), this._itemsPtr = 0, this._itemsPerBuffer = Math.ceil(s / this.itemByteSize);
  }
  get() {
    this._itemsPtr === 0 && he(() => this._reset());
    const e = Math.floor(this._itemsPtr / this._itemsPerBuffer);
    for (; this._buffers.length <= e; ) {
      const t = new ArrayBuffer(this._itemsPerBuffer * this.itemByteSize);
      for (let s = 0; s < this._itemsPerBuffer; ++s)
        this._items.push(this.itemCreate(t, s * this.itemByteSize));
      this._buffers.push(t);
    }
    return this._items[this._itemsPtr++];
  }
  _reset() {
    const e = 2 * (Math.floor(this._itemsPtr / this._itemsPerBuffer) + 1);
    for (; this._buffers.length > e; )
      this._buffers.pop(), this._items.length = this._buffers.length * this._itemsPerBuffer;
    this._itemsPtr = 0;
  }
  static createVec2f64(e = U) {
    return new _(16, ke, e);
  }
  static createVec3f64(e = U) {
    return new _(24, Ye, e);
  }
  static createVec4f64(e = U) {
    return new _(32, ut, e);
  }
  static createMat3f64(e = U) {
    return new _(72, _e, e);
  }
  static createMat4f64(e = U) {
    return new _(128, Se, e);
  }
  static createQuatf64(e = U) {
    return new _(32, Ee, e);
  }
  get test() {
    return { size: this._buffers.length * this._itemsPerBuffer * this.itemByteSize };
  }
};
const U = 4 * Ve.KILOBYTES;
R.createVec2f64();
R.createVec3f64();
R.createVec4f64();
R.createMat3f64();
R.createMat4f64();
R.createQuatf64();
function Lt(n) {
  return n ? { origin: ee(n.origin), vector: ee(n.vector) } : { origin: x(), vector: x() };
}
new W(() => ({ origin: null, vector: null }));
function vt(n, e, t) {
  return te(X, e, n), te(ie, t, n), He(qe(X, X, ie)) / 2;
}
new W(Lt);
new W(() => ({ p0: null, p1: null, p2: null }));
const X = x(), ie = x();
let b = (() => {
  const n = new Uint32Array(131072);
  for (let e = 0; e < n.length; ++e)
    n[e] = e;
  return n;
})();
const we = new Uint16Array([0]), H = (() => {
  const n = new Uint16Array(65536);
  for (let e = 0; e < n.length; ++e)
    n[e] = e;
  return n;
})();
function Pt(n) {
  if (n === 1)
    return we;
  if (n < H.length)
    return new Uint16Array(H.buffer, 0, n);
  if (n > b.length) {
    const e = Math.max(2 * b.length, n);
    b = new Uint32Array(e);
    for (let t = 0; t < b.length; t++)
      b[t] = t;
  }
  return new Uint32Array(b.buffer, 0, n);
}
function ir(n) {
  if (n === 1)
    return new Uint16Array(we);
  if (n < H.length)
    return new Uint16Array(H.slice(0, n));
  if (n > b.length) {
    const e = new Uint32Array(n);
    for (let t = 0; t < e.length; t++)
      e[t] = t;
    return e;
  }
  return new Uint32Array(b.slice(0, n));
}
function ur(n, e, t) {
  if (!n)
    return !1;
  const { size: s, data: r } = n;
  C(t, 0, 0, 0), C(w, 0, 0, 0);
  let o = 0, a = 0;
  for (let c = 0; c < e.length - 2; c += 3) {
    const u = e[c + 0] * s, i = e[c + 1] * s, f = e[c + 2] * s;
    C(m, r[u + 0], r[u + 1], r[u + 2]), C(D, r[i + 0], r[i + 1], r[i + 2]), C(G, r[f + 0], r[f + 1], r[f + 2]);
    const l = vt(m, D, G);
    l ? (O(m, m, D), O(m, m, G), j(m, m, 1 / 3 * l), O(t, t, m), o += l) : (O(w, w, m), O(w, w, D), O(w, w, G), a += 3);
  }
  return (a !== 0 || o !== 0) && (o !== 0 ? (j(t, t, 1 / o), !0) : a !== 0 && (j(t, w, 1 / a), !0));
}
function cr(n, e, t) {
  if (!n || !e)
    return !1;
  const { size: s, data: r } = n;
  C(t, 0, 0, 0);
  let o = -1, a = 0;
  for (let c = 0; c < e.length; c++) {
    const u = e[c] * s;
    o !== u && (t[0] += r[u + 0], t[1] += r[u + 1], t[2] += r[u + 2], a++), o = u;
  }
  return a > 1 && j(t, t, 1 / a), a > 0;
}
const m = x(), D = x(), G = x(), w = x();
function fr(n, e = Pt) {
  return typeof n == "number" ? e(n) : ze(n) || Je(n) ? new Uint32Array(n) : n;
}
function lr(n) {
  const e = typeof n == "number" ? n : n.length;
  if (e < 3)
    return new Uint16Array(0);
  const t = e - 2, s = t <= 65536 ? new Uint16Array(3 * t) : new Uint32Array(3 * t);
  if (typeof n == "number") {
    let r = 0;
    for (let o = 0; o < t; o += 1)
      o % 2 == 0 ? (s[r++] = o, s[r++] = o + 1, s[r++] = o + 2) : (s[r++] = o + 1, s[r++] = o, s[r++] = o + 2);
  } else {
    let r = 0;
    for (let o = 0; o < t; o += 1)
      if (o % 2 == 0) {
        const a = n[o], c = n[o + 1], u = n[o + 2];
        s[r++] = a, s[r++] = c, s[r++] = u;
      } else {
        const a = n[o + 1], c = n[o], u = n[o + 2];
        s[r++] = a, s[r++] = c, s[r++] = u;
      }
  }
  return s;
}
function dr(n) {
  const e = typeof n == "number" ? n : n.length;
  if (e < 3)
    return new Uint16Array(0);
  const t = e - 2, s = t <= 65536 ? new Uint16Array(3 * t) : new Uint32Array(3 * t);
  if (typeof n == "number") {
    let r = 0;
    for (let o = 0; o < t; ++o)
      s[r++] = 0, s[r++] = o + 1, s[r++] = o + 2;
    return s;
  }
  {
    const r = n[0];
    let o = n[1], a = 0;
    for (let c = 0; c < t; ++c) {
      const u = n[c + 2];
      s[a++] = r, s[a++] = o, s[a++] = u, o = u;
    }
    return s;
  }
}
const pr = 2.1;
export {
  zt as a,
  Kt as b,
  or as c,
  Qt as d,
  Wt as e,
  Jt as f,
  lr as g,
  fr as h,
  dr as i,
  qt as j,
  ir as k,
  pr as l,
  Pt as m,
  tr as n,
  Xt as o,
  cr as p,
  Ht as q,
  er as r,
  W as s,
  Zt as t,
  ur as u
};

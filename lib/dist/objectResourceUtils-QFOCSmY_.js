import { a as di } from "./devEnvironmentUtils-czI3Gfmg.js";
import { aJ as ur, f$ as U, dd as Ot, gc as ui, ko as Ct, kp as mi, e$ as hi, l as W, eF as pi, s as Qe, eE as st, e2 as fi, gy as Bt, iv as vi, gq as Ve, jk as Ue, r as g, bc as Gt, kq as gi, eN as xi, eR as bi, e_ as mr, y as hr, aO as Vt, fG as Ti, eI as Se, cY as _i, kr as Ci, ar as Si, ks as yi, kt as Ai, hf as lt, hj as Mi, gh as Pt, ca as wi, ku as pr, fZ as ot, hk as Oe, g2 as fr, hc as Ut, g4 as We, iw as vt, Z as Oi, kv as ue, kw as Pi, fp as Ht, e as E, jj as vr, iK as kt, hg as Ei, gf as Ri, ev as gr, C as Ii, w as Di, bG as xr, kx as Wt, ky as br, kz as ct, aH as Ni, dc as qt, g3 as Li, kA as jt } from "./index-j1oaLRcp.js";
import { d as Tr, b as _r, e as $i, f as Fi, r as Xt, a as zi } from "./vec33-KIqI1xKc.js";
import { c as St, x as Ye, u as Cr, i as Ne, L as Bi, O as Kt, E as Gi } from "./BufferView-_ODXD1vX.js";
import { m as Yt, u as Vi, p as Ui, s as Hi, q as ki, j as Sr, c as Wi, n as qi, l as Ie, r as Me, a as ji, b as Xi, f as Zt, e as Ki, t as Yi, i as Zi, g as Qi, h as Ji } from "./DefaultMaterial_COLOR_GAMMA-NyhsorRg.js";
import { r as yr } from "./Version-w5GduY1W.js";
import { c as at, l as gt, t as Ar, C as H, i as yt, r as eo, a as fe, n as ve, O as Le, N as Je, W as to, b as ro, E as io, h as oo, d as ao, e as no, f as so, g as lo, _ as co } from "./requestImageUtils-BQkJwDei.js";
import { O as p } from "./VertexAttribute-MlR_5QZE.js";
import { t as de, P as Ae, L as Pe, C as ee, F as uo, D as De, M as Qt, G as Jt, Y as mo, V as ho, E as qe, I as ge, O as K } from "./enums-n72NRQQZ.js";
import { u as pe, n as po, a as fo, c as vo } from "./Texture-PL6UBkoQ.js";
import { _ as go, f as xo, c as bo, D as To, n as _o } from "./VertexArrayObject-WfBtioi6.js";
import { t as te } from "./VertexElementDescriptor-L2lGUBx9.js";
import { T as Mr } from "./InterleavedLayout-6hDpGqsV.js";
import { A as xt, E as tt } from "./RenderSlot-9D6BRv6G.js";
import { t as Co } from "./vec3f32-iv6FBVVh.js";
let So = class {
  constructor(e) {
    this.message = e;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
};
function j(t, e) {
  if (!t)
    throw e = e || "assert", console.log(new Error(e).stack), new So(e);
}
let yo = class wr {
  constructor(e, r, i, o) {
    this.primitiveIndices = e, this._numIndexPerPrimitive = r, this.indices = i, this.position = o, this.center = U(), j(e.length >= 1), j(i.length % this._numIndexPerPrimitive == 0), j(i.length >= e.length * this._numIndexPerPrimitive), j(o.size === 3 || o.size === 4);
    const { data: a, size: l } = o, c = e.length;
    let d = l * i[this._numIndexPerPrimitive * e[0]];
    ye.clear(), ye.push(d), this.bbMin = Ot(a[d], a[d + 1], a[d + 2]), this.bbMax = ui(this.bbMin);
    for (let u = 0; u < c; ++u) {
      const f = this._numIndexPerPrimitive * e[u];
      for (let m = 0; m < this._numIndexPerPrimitive; ++m) {
        d = l * i[f + m], ye.push(d);
        let x = a[d];
        this.bbMin[0] = Math.min(x, this.bbMin[0]), this.bbMax[0] = Math.max(x, this.bbMax[0]), x = a[d + 1], this.bbMin[1] = Math.min(x, this.bbMin[1]), this.bbMax[1] = Math.max(x, this.bbMax[1]), x = a[d + 2], this.bbMin[2] = Math.min(x, this.bbMin[2]), this.bbMax[2] = Math.max(x, this.bbMax[2]);
      }
    }
    Ct(this.center, this.bbMin, this.bbMax, 0.5), this.radius = 0.5 * Math.max(Math.max(this.bbMax[0] - this.bbMin[0], this.bbMax[1] - this.bbMin[1]), this.bbMax[2] - this.bbMin[2]);
    let s = this.radius * this.radius;
    for (let u = 0; u < ye.length; ++u) {
      d = ye.getItemAt(u);
      const f = a[d] - this.center[0], m = a[d + 1] - this.center[1], x = a[d + 2] - this.center[2], h = f * f + m * m + x * x;
      if (h <= s)
        continue;
      const _ = Math.sqrt(h), C = 0.5 * (_ - this.radius);
      this.radius = this.radius + C, s = this.radius * this.radius;
      const T = C / _;
      this.center[0] += f * T, this.center[1] += m * T, this.center[2] += x * T;
    }
    ye.clear();
  }
  getCenter() {
    return this.center;
  }
  getBSRadius() {
    return this.radius;
  }
  getBBMin() {
    return this.bbMin;
  }
  getBBMax() {
    return this.bbMax;
  }
  getChildren() {
    if (this._children)
      return this._children;
    if (mi(this.bbMin, this.bbMax) > 1) {
      const e = Ct(U(), this.bbMin, this.bbMax, 0.5), r = this.primitiveIndices.length, i = new Uint8Array(r), o = new Array(8);
      for (let s = 0; s < 8; ++s)
        o[s] = 0;
      const { data: a, size: l } = this.position;
      for (let s = 0; s < r; ++s) {
        let u = 0;
        const f = this._numIndexPerPrimitive * this.primitiveIndices[s];
        let m = l * this.indices[f], x = a[m], h = a[m + 1], _ = a[m + 2];
        for (let C = 1; C < this._numIndexPerPrimitive; ++C) {
          m = l * this.indices[f + C];
          const T = a[m], G = a[m + 1], w = a[m + 2];
          T < x && (x = T), G < h && (h = G), w < _ && (_ = w);
        }
        x < e[0] && (u |= 1), h < e[1] && (u |= 2), _ < e[2] && (u |= 4), i[s] = u, ++o[u];
      }
      let c = 0;
      for (let s = 0; s < 8; ++s)
        o[s] > 0 && ++c;
      if (c < 2)
        return;
      const d = new Array(8);
      for (let s = 0; s < 8; ++s)
        d[s] = o[s] > 0 ? new Uint32Array(o[s]) : void 0;
      for (let s = 0; s < 8; ++s)
        o[s] = 0;
      for (let s = 0; s < r; ++s) {
        const u = i[s];
        d[u][o[u]++] = this.primitiveIndices[s];
      }
      this._children = new Array(8);
      for (let s = 0; s < 8; ++s)
        d[s] !== void 0 && (this._children[s] = new wr(d[s], this._numIndexPerPrimitive, this.indices, this.position));
    }
    return this._children;
  }
  static prune() {
    ye.prune();
  }
};
const ye = new ur({ deallocator: null });
let Et = class {
  constructor() {
    this.id = hi();
  }
  unload() {
  }
};
var Ze;
(function(t) {
  t[t.Layer = 0] = "Layer", t[t.Object = 1] = "Object", t[t.Geometry = 2] = "Geometry", t[t.Material = 3] = "Material", t[t.Texture = 4] = "Texture", t[t.COUNT = 5] = "COUNT";
})(Ze || (Ze = {}));
let Or = class Pr extends Et {
  constructor(e, r = [], i = at.Triangle, o = -1) {
    super(), this._primitiveType = i, this.edgeIndicesLength = o, this.type = Ze.Geometry, this._vertexAttributes = /* @__PURE__ */ new Map(), this._indices = /* @__PURE__ */ new Map(), this._boundingInfo = null;
    for (const [a, l] of e)
      l && this._vertexAttributes.set(a, { ...l });
    if (r == null || r.length === 0) {
      const a = Ao(this._vertexAttributes), l = Yt(a);
      this.edgeIndicesLength = this.edgeIndicesLength < 0 ? a : this.edgeIndicesLength;
      for (const c of this._vertexAttributes.keys())
        this._indices.set(c, l);
    } else
      for (const [a, l] of r)
        l && (this._indices.set(a, Mo(l)), a === p.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._indices.get(a).length : this.edgeIndicesLength));
  }
  cloneShallow() {
    const e = new Pr([], void 0, this._primitiveType, void 0), { _vertexAttributes: r, _indices: i } = e;
    return this._vertexAttributes.forEach((o, a) => {
      r.set(a, o);
    }), this._indices.forEach((o, a) => {
      i.set(a, o);
    }), e.screenToWorldRatio = this.screenToWorldRatio, e._boundingInfo = this._boundingInfo, e;
  }
  get vertexAttributes() {
    return this._vertexAttributes;
  }
  getMutableAttribute(e) {
    const r = this._vertexAttributes.get(e);
    return r && !r.exclusive && (r.data = Array.from(r.data), r.exclusive = !0), r;
  }
  get indices() {
    return this._indices;
  }
  get indexCount() {
    const e = this._indices.values().next().value;
    return e ? e.length : 0;
  }
  get primitiveType() {
    return this._primitiveType;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return W(this._boundingInfo) && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(e) {
    return this.primitiveType === at.Triangle ? this._computeAttachmentOriginTriangles(e) : this._computeAttachmentOriginPoints(e);
  }
  _computeAttachmentOriginTriangles(e) {
    const r = this.indices.get(p.POSITION), i = this.vertexAttributes.get(p.POSITION);
    return Vi(i, r, e);
  }
  _computeAttachmentOriginPoints(e) {
    const r = this.indices.get(p.POSITION), i = this.vertexAttributes.get(p.POSITION);
    return Ui(i, r, e);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const e = this.indices.get(p.POSITION);
    if (e.length === 0)
      return null;
    const r = this.primitiveType === at.Triangle ? 3 : 1;
    j(e.length % r == 0, "Indexing error: " + e.length + " not divisible by " + r);
    const i = Yt(e.length / r), o = this.vertexAttributes.get(p.POSITION);
    return new yo(i, r, e, o);
  }
};
function Ao(t) {
  const e = t.values().next().value;
  return e == null ? 0 : e.data.length / e.size;
}
function Mo(t) {
  if (t.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT)
    return t;
  for (const e of t)
    if (e >= 65536)
      return t;
  return new Uint16Array(t);
}
function wo() {
  if (W(bt)) {
    const t = (e) => pi(`geoscene/libs/basisu/${e}`);
    bt = import("./basis_transcoder-xqUjcXIw.js").then((e) => e.b).then(({ default: e }) => e({ locateFile: t }).then((r) => (r.initializeBasis(), delete r.then, r)));
  }
  return bt;
}
let bt;
var we;
(function(t) {
  t[t.ETC1_RGB = 0] = "ETC1_RGB", t[t.ETC2_RGBA = 1] = "ETC2_RGBA", t[t.BC1_RGB = 2] = "BC1_RGB", t[t.BC3_RGBA = 3] = "BC3_RGBA", t[t.BC4_R = 4] = "BC4_R", t[t.BC5_RG = 5] = "BC5_RG", t[t.BC7_M6_RGB = 6] = "BC7_M6_RGB", t[t.BC7_M5_RGBA = 7] = "BC7_M5_RGBA", t[t.PVRTC1_4_RGB = 8] = "PVRTC1_4_RGB", t[t.PVRTC1_4_RGBA = 9] = "PVRTC1_4_RGBA", t[t.ASTC_4x4_RGBA = 10] = "ASTC_4x4_RGBA", t[t.ATC_RGB = 11] = "ATC_RGB", t[t.ATC_RGBA = 12] = "ATC_RGBA", t[t.FXT1_RGB = 17] = "FXT1_RGB", t[t.PVRTC2_4_RGB = 18] = "PVRTC2_4_RGB", t[t.PVRTC2_4_RGBA = 19] = "PVRTC2_4_RGBA", t[t.ETC2_EAC_R11 = 20] = "ETC2_EAC_R11", t[t.ETC2_EAC_RG11 = 21] = "ETC2_EAC_RG11", t[t.RGBA32 = 13] = "RGBA32", t[t.RGB565 = 14] = "RGB565", t[t.BGR565 = 15] = "BGR565", t[t.RGBA4444 = 16] = "RGBA4444";
})(we || (we = {}));
let re = null, rt = null;
async function Er() {
  return W(rt) && (rt = wo(), re = await rt), rt;
}
function Oo(t, e) {
  if (W(re))
    return t.byteLength;
  const r = new re.BasisFile(new Uint8Array(t)), i = Ir(r) ? Rr(r.getNumLevels(0), r.getHasAlpha(), r.getImageWidth(0, 0), r.getImageHeight(0, 0), e) : 0;
  return r.close(), r.delete(), i;
}
function Po(t, e) {
  if (W(re))
    return t.byteLength;
  const r = new re.KTX2File(new Uint8Array(t)), i = Dr(r) ? Rr(r.getLevels(), r.getHasAlpha(), r.getWidth(), r.getHeight(), e) : 0;
  return r.close(), r.delete(), i;
}
function Rr(t, e, r, i, o) {
  const a = go(e ? de.COMPRESSED_RGBA8_ETC2_EAC : de.COMPRESSED_RGB8_ETC2), l = o && t > 1 ? (4 ** t - 1) / (3 * 4 ** (t - 1)) : 1;
  return Math.ceil(r * i * a * l);
}
function Ir(t) {
  return t.getNumImages() >= 1 && !t.isUASTC();
}
function Dr(t) {
  return t.getFaces() >= 1 && t.isETC1S();
}
async function Eo(t, e, r) {
  W(re) && (re = await Er());
  const i = new re.BasisFile(new Uint8Array(r));
  if (!Ir(i))
    return null;
  i.startTranscoding();
  const o = Nr(t, e, i.getNumLevels(0), i.getHasAlpha(), i.getImageWidth(0, 0), i.getImageHeight(0, 0), (a, l) => i.getImageTranscodedSizeInBytes(0, a, l), (a, l, c) => i.transcodeImage(c, 0, a, l, 0, 0));
  return i.close(), i.delete(), o;
}
async function Ro(t, e, r) {
  W(re) && (re = await Er());
  const i = new re.KTX2File(new Uint8Array(r));
  if (!Dr(i))
    return null;
  i.startTranscoding();
  const o = Nr(t, e, i.getLevels(), i.getHasAlpha(), i.getWidth(), i.getHeight(), (a, l) => i.getImageTranscodedSizeInBytes(a, 0, 0, l), (a, l, c) => i.transcodeImage(c, a, 0, 0, l, 0, -1, -1));
  return i.close(), i.delete(), o;
}
function Nr(t, e, r, i, o, a, l, c) {
  const { compressedTextureETC: d, compressedTextureS3TC: s } = t.capabilities, [u, f] = d ? i ? [we.ETC2_RGBA, de.COMPRESSED_RGBA8_ETC2_EAC] : [we.ETC1_RGB, de.COMPRESSED_RGB8_ETC2] : s ? i ? [we.BC3_RGBA, de.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [we.BC1_RGB, de.COMPRESSED_RGB_S3TC_DXT1_EXT] : [we.RGBA32, Ae.RGBA], m = e.hasMipmap ? r : Math.min(1, r), x = [];
  for (let T = 0; T < m; T++)
    x.push(new Uint8Array(l(T, u))), c(T, u, x[T]);
  const h = x.length > 1, _ = h ? Pe.LINEAR_MIPMAP_LINEAR : Pe.LINEAR, C = { ...e, samplingMode: _, hasMipmap: h, internalFormat: f, width: o, height: a };
  return new pe(t, C, { type: "compressed", levels: x });
}
const He = Qe.getLogger("geoscene.views.3d.webgl-engine.lib.DDSUtil"), Io = 542327876, Do = 131072, No = 4;
function Rt(t) {
  return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24);
}
function Lo(t) {
  return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
}
const $o = Rt("DXT1"), Fo = Rt("DXT3"), zo = Rt("DXT5"), Bo = 31, Go = 0, Vo = 1, Uo = 2, Ho = 3, ko = 4, Wo = 7, qo = 20, jo = 21;
function Xo(t, e, r) {
  const { textureData: i, internalFormat: o, width: a, height: l } = Ko(r, e.hasMipmap);
  return e.samplingMode = i.levels.length > 1 ? Pe.LINEAR_MIPMAP_LINEAR : Pe.LINEAR, e.hasMipmap = i.levels.length > 1, e.internalFormat = o, e.width = a, e.height = l, new pe(t, e, i);
}
function Ko(t, e) {
  const r = new Int32Array(t, 0, Bo);
  if (r[Go] !== Io)
    return He.error("Invalid magic number in DDS header"), null;
  if (!(r[qo] & No))
    return He.error("Unsupported format, must contain a FourCC code"), null;
  const i = r[jo];
  let o, a;
  switch (i) {
    case $o:
      o = 8, a = de.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case Fo:
      o = 16, a = de.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case zo:
      o = 16, a = de.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return He.error("Unsupported FourCC code:", Lo(i)), null;
  }
  let l = 1, c = r[ko], d = r[Ho];
  !(3 & c) && !(3 & d) || (He.warn("Rounding up compressed texture size to nearest multiple of 4."), c = c + 3 & -4, d = d + 3 & -4);
  const s = c, u = d;
  let f, m;
  r[Uo] & Do && e !== !1 && (l = Math.max(1, r[Wo])), l === 1 || st(c) && st(d) || (He.warn("Ignoring mipmaps of non power of two sized compressed texture."), l = 1);
  let x = r[Vo] + 4;
  const h = [];
  for (let _ = 0; _ < l; ++_)
    m = (c + 3 >> 2) * (d + 3 >> 2) * o, f = new Uint8Array(t, x, m), h.push(f), x += m, c = Math.max(1, c >> 1), d = Math.max(1, d >> 1);
  return { textureData: { type: "compressed", levels: h }, internalFormat: a, width: s, height: u };
}
const ht = /* @__PURE__ */ new Map([[p.POSITION, 0], [p.NORMAL, 1], [p.UV0, 2], [p.COLOR, 3], [p.SIZE, 4], [p.TANGENT, 4], [p.AUXPOS1, 5], [p.SYMBOLCOLOR, 5], [p.AUXPOS2, 6], [p.FEATUREATTRIBUTE, 6], [p.INSTANCEFEATUREATTRIBUTE, 6], [p.INSTANCECOLOR, 7], [p.MODEL, 8], [p.MODELNORMAL, 12], [p.MODELORIGINHI, 11], [p.MODELORIGINLO, 15]]);
new te(p.POSITION, 3, ee.FLOAT, 0, 12);
new te(p.POSITION, 3, ee.FLOAT, 0, 20), new te(p.UV0, 2, ee.FLOAT, 12, 20);
new te(p.POSITION, 3, ee.FLOAT, 0, 32), new te(p.NORMAL, 3, ee.FLOAT, 12, 32), new te(p.UV0, 2, ee.FLOAT, 24, 32);
new te(p.POSITION, 3, ee.FLOAT, 0, 16), new te(p.COLOR, 4, ee.UNSIGNED_BYTE, 12, 16);
const Yo = [new te(p.POSITION, 2, ee.FLOAT, 0, 8)], Zo = [new te(p.POSITION, 2, ee.FLOAT, 0, 16), new te(p.UV0, 2, ee.FLOAT, 8, 16)];
function Qo(t, e = Yo, r = ht, i = -1, o = 1) {
  let a = null;
  return e === Zo ? a = new Float32Array([i, i, 0, 0, o, i, 1, 0, i, o, 0, 1, o, o, 1, 1]) : a = new Float32Array([i, i, o, i, i, o, o, o]), new xo(t, r, { geometry: e }, { geometry: bo.createVertex(t, uo.STATIC_DRAW, a) });
}
let ce = class se extends Et {
  constructor(e, r) {
    super(), this.data = e, this.type = Ze.Texture, this._glTexture = null, this._powerOfTwoStretchInfo = null, this._loadingPromise = null, this._loadingController = null, this.events = new fi(), this.params = r || {}, this.params.mipmap = this.params.mipmap !== !1, this.params.noUnpackFlip = this.params.noUnpackFlip || !1, this.params.preMultiplyAlpha = this.params.preMultiplyAlpha || !1, this.params.wrap = this.params.wrap || { s: De.REPEAT, t: De.REPEAT }, this.params.powerOfTwoResizeMode = this.params.powerOfTwoResizeMode || gt.STRETCH, this.estimatedTexMemRequired = se._estimateTexMemRequired(this.data, this.params), this._startPreload();
  }
  _startPreload() {
    const e = this.data;
    W(e) || (e instanceof HTMLVideoElement ? this._startPreloadVideoElement(e) : e instanceof HTMLImageElement && this._startPreloadImageElement(e));
  }
  _startPreloadVideoElement(e) {
    Bt(e.src) || e.preload === "auto" && e.crossOrigin || (e.preload = "auto", e.crossOrigin = "anonymous", e.src = e.src);
  }
  _startPreloadImageElement(e) {
    vi(e.src) || Bt(e.src) || e.crossOrigin || (e.crossOrigin = "anonymous", e.src = e.src);
  }
  static _getDataDimensions(e) {
    return e instanceof HTMLVideoElement ? { width: e.videoWidth, height: e.videoHeight } : e;
  }
  static _estimateTexMemRequired(e, r) {
    if (W(e))
      return 0;
    if (Ve(e) || Ue(e))
      return r.encoding === se.KTX2_ENCODING ? Po(e, r.mipmap) : r.encoding === se.BASIS_ENCODING ? Oo(e, r.mipmap) : e.byteLength;
    const { width: i, height: o } = e instanceof Image || e instanceof ImageData || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement ? se._getDataDimensions(e) : r;
    return (r.mipmap ? 4 / 3 : 1) * i * o * (r.components || 4) || 0;
  }
  dispose() {
    this.data = void 0;
  }
  get width() {
    return this.params.width;
  }
  get height() {
    return this.params.height;
  }
  _createDescriptor(e) {
    var r;
    return { target: Qt.TEXTURE_2D, pixelFormat: Ae.RGBA, dataType: Jt.UNSIGNED_BYTE, wrapMode: this.params.wrap, flipped: !this.params.noUnpackFlip, samplingMode: this.params.mipmap ? Pe.LINEAR_MIPMAP_LINEAR : Pe.LINEAR, hasMipmap: this.params.mipmap, preMultiplyAlpha: this.params.preMultiplyAlpha, maxAnisotropy: (r = this.params.maxAnisotropy) != null ? r : this.params.mipmap ? e.parameters.maxMaxAnisotropy : 1 };
  }
  get glTexture() {
    return this._glTexture;
  }
  load(e, r) {
    if (g(this._glTexture))
      return this._glTexture;
    if (g(this._loadingPromise))
      return this._loadingPromise;
    const i = this.data;
    return W(i) ? (this._glTexture = new pe(e, this._createDescriptor(e), null), this._glTexture) : typeof i == "string" ? this._loadFromURL(e, r, i) : i instanceof Image ? this._loadFromImageElement(e, r, i) : i instanceof HTMLVideoElement ? this._loadFromVideoElement(e, r, i) : i instanceof ImageData || i instanceof HTMLCanvasElement ? this._loadFromImage(e, i, r) : (Ve(i) || Ue(i)) && this.params.encoding === se.DDS_ENCODING ? (this.data = void 0, this._loadFromDDSData(e, i)) : (Ve(i) || Ue(i)) && this.params.encoding === se.KTX2_ENCODING ? (this.data = void 0, this._loadFromKTX2(e, i)) : (Ve(i) || Ue(i)) && this.params.encoding === se.BASIS_ENCODING ? (this.data = void 0, this._loadFromBasis(e, i)) : Ue(i) ? this._loadFromPixelData(e, i) : Ve(i) ? this._loadFromPixelData(e, new Uint8Array(i)) : null;
  }
  get requiresFrameUpdates() {
    return this.data instanceof HTMLVideoElement;
  }
  frameUpdate(e, r, i) {
    if (!(this.data instanceof HTMLVideoElement) || W(this._glTexture) || this.data.readyState < je.HAVE_CURRENT_DATA || i === this.data.currentTime)
      return i;
    if (g(this._powerOfTwoStretchInfo)) {
      const { framebuffer: o, vao: a, sourceTexture: l } = this._powerOfTwoStretchInfo;
      l.setData(this.data), this._drawStretchedTexture(e, r, o, a, l, this._glTexture);
    } else {
      const { width: o, height: a } = this.data, { width: l, height: c } = this._glTexture.descriptor;
      o !== l || a !== c ? this._glTexture.updateData(0, 0, 0, Math.min(o, l), Math.min(a, c), this.data) : this._glTexture.setData(this.data);
    }
    return this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this.data.currentTime;
  }
  _loadFromDDSData(e, r) {
    return this._glTexture = Xo(e, this._createDescriptor(e), r), this._glTexture;
  }
  _loadFromKTX2(e, r) {
    return this._loadAsync(() => Ro(e, this._createDescriptor(e), r).then((i) => (this._glTexture = i, i)));
  }
  _loadFromBasis(e, r) {
    return this._loadAsync(() => Eo(e, this._createDescriptor(e), r).then((i) => (this._glTexture = i, i)));
  }
  _loadFromPixelData(e, r) {
    j(this.params.width > 0 && this.params.height > 0);
    const i = this._createDescriptor(e);
    return i.pixelFormat = this.params.components === 1 ? Ae.LUMINANCE : this.params.components === 3 ? Ae.RGB : Ae.RGBA, i.width = this.params.width, i.height = this.params.height, this._glTexture = new pe(e, i, r), this._glTexture;
  }
  _loadFromURL(e, r, i) {
    return this._loadAsync(async (o) => {
      const a = await Ar(i, { signal: o });
      return Gt(o), this._loadFromImage(e, a, r);
    });
  }
  _loadFromImageElement(e, r, i) {
    return i.complete ? this._loadFromImage(e, i, r) : this._loadAsync(async (o) => {
      const a = await gi(i, i.src, !1, o);
      return Gt(o), this._loadFromImage(e, a, r);
    });
  }
  _loadFromVideoElement(e, r, i) {
    return i.readyState >= je.HAVE_CURRENT_DATA ? this._loadFromImage(e, i, r) : this._loadFromVideoElementAsync(e, r, i);
  }
  _loadFromVideoElementAsync(e, r, i) {
    return this._loadAsync((o) => new Promise((a, l) => {
      const c = () => {
        i.removeEventListener("loadeddata", d), i.removeEventListener("error", s), Ti(u);
      }, d = () => {
        i.readyState >= je.HAVE_CURRENT_DATA && (c(), a(this._loadFromImage(e, i, r)));
      }, s = (f) => {
        c(), l(f || new hr("Failed to load video"));
      };
      i.addEventListener("loadeddata", d), i.addEventListener("error", s);
      const u = xi(o, () => s(bi()));
    }));
  }
  _loadFromImage(e, r, i) {
    const o = se._getDataDimensions(r);
    this.params.width = o.width, this.params.height = o.height;
    const a = this._createDescriptor(e);
    return a.pixelFormat = this.params.components === 3 ? Ae.RGB : Ae.RGBA, !this._requiresPowerOfTwo(e, a) || st(o.width) && st(o.height) ? (a.width = o.width, a.height = o.height, this._glTexture = new pe(e, a, r), this._glTexture) : (this._glTexture = this._makePowerOfTwoTexture(e, r, o, a, i), this._glTexture);
  }
  _loadAsync(e) {
    const r = new AbortController();
    this._loadingController = r;
    const i = e(r.signal);
    this._loadingPromise = i;
    const o = () => {
      this._loadingController === r && (this._loadingController = null), this._loadingPromise === i && (this._loadingPromise = null);
    };
    return i.then(o, o), i;
  }
  _requiresPowerOfTwo(e, r) {
    const i = De.CLAMP_TO_EDGE, o = typeof r.wrapMode == "number" ? r.wrapMode === i : r.wrapMode.s === i && r.wrapMode.t === i;
    return !po(e.gl) && (r.hasMipmap || !o);
  }
  _makePowerOfTwoTexture(e, r, i, o, a) {
    const { width: l, height: c } = i, d = Vt(l), s = Vt(c);
    let u;
    switch (o.width = d, o.height = s, this.params.powerOfTwoResizeMode) {
      case gt.PAD:
        o.textureCoordinateScaleFactor = [l / d, c / s], u = new pe(e, o), u.updateData(0, 0, 0, l, c, r);
        break;
      case gt.STRETCH:
      case null:
      case void 0:
        u = this._stretchToPowerOfTwo(e, r, o, a());
        break;
      default:
        mr(this.params.powerOfTwoResizeMode);
    }
    return o.hasMipmap && u.generateMipmap(), u;
  }
  _stretchToPowerOfTwo(e, r, i, o) {
    const a = new pe(e, i), l = new To(e, { colorTarget: mo.TEXTURE, depthStencilTarget: ho.NONE }, a), c = new pe(e, { target: Qt.TEXTURE_2D, pixelFormat: i.pixelFormat, dataType: Jt.UNSIGNED_BYTE, wrapMode: De.CLAMP_TO_EDGE, samplingMode: Pe.LINEAR, flipped: !!i.flipped, maxAnisotropy: 8, preMultiplyAlpha: i.preMultiplyAlpha }, r), d = Qo(e), s = e.getBoundFramebufferObject();
    return this._drawStretchedTexture(e, o, l, d, c, a), this.requiresFrameUpdates ? this._powerOfTwoStretchInfo = { vao: d, sourceTexture: c, framebuffer: l } : (d.dispose(!0), c.dispose(), l.detachColorTexture(), l.dispose()), e.bindFramebuffer(s), a;
  }
  _drawStretchedTexture(e, r, i, o, a, l) {
    e.bindFramebuffer(i);
    const c = e.getViewport();
    e.setViewport(0, 0, l.descriptor.width, l.descriptor.height);
    const d = e.useTechnique(r);
    d.setUniform4f("uColor", 1, 1, 1, 1), d.bindTexture(a, "tex"), e.bindVAO(o), e.drawArrays(qe.TRIANGLE_STRIP, 0, _o(o, "geometry")), e.bindFramebuffer(null), e.setViewport(c.x, c.y, c.width, c.height);
  }
  unload() {
    if (g(this._powerOfTwoStretchInfo)) {
      const { framebuffer: e, vao: r, sourceTexture: i } = this._powerOfTwoStretchInfo;
      r.dispose(!0), i.dispose(), e.dispose(), this._glTexture = null, this._powerOfTwoStretchInfo = null;
    }
    if (g(this._glTexture) && (this._glTexture.dispose(), this._glTexture = null), g(this._loadingController)) {
      const e = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, e.abort();
    }
    this.events.emit("unloaded");
  }
};
var je;
ce.DDS_ENCODING = "image/vnd-ms.dds", ce.KTX2_ENCODING = "image/ktx2", ce.BASIS_ENCODING = "image/x.basis", function(t) {
  t[t.HAVE_NOTHING = 0] = "HAVE_NOTHING", t[t.HAVE_METADATA = 1] = "HAVE_METADATA", t[t.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", t[t.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", t[t.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
}(je || (je = {}));
var b;
(function(t) {
  t[t.Color = 0] = "Color", t[t.Depth = 1] = "Depth", t[t.Normal = 2] = "Normal", t[t.Shadow = 3] = "Shadow", t[t.Highlight = 4] = "Highlight", t[t.Draped = 5] = "Draped", t[t.Occlusion = 6] = "Occlusion", t[t.Alpha = 7] = "Alpha", t[t.COUNT = 8] = "COUNT";
})(b || (b = {}));
function n(t, ...e) {
  let r = "";
  for (let i = 0; i < e.length; i++)
    r += t[i] + e[i];
  return r += t[t.length - 1], r;
}
(function(t) {
  function e(i) {
    return Math.round(i).toString();
  }
  function r(i) {
    return i.toPrecision(8);
  }
  t.int = e, t.float = r;
})(n || (n = {}));
function Jo(t, e) {
  const r = t.fragment;
  switch (r.code.add(n`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), e.doubleSidedMode) {
    case q.None:
      r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case q.View:
      r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case q.WindingOrder:
      r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      mr(e.doubleSidedMode);
    case q.COUNT:
  }
}
var q;
(function(t) {
  t[t.None = 0] = "None", t[t.View = 1] = "View", t[t.WindingOrder = 2] = "WindingOrder", t[t.COUNT = 3] = "COUNT";
})(q || (q = {}));
const ea = 0.1, It = 1e-3;
function Ee(t, e) {
  const r = t.fragment;
  switch (e.alphaDiscardMode) {
    case H.Blend:
      r.code.add(n`
        #define discardOrAdjustAlpha(color) { if (color.a < ${n.float(It)}) { discard; } }
      `);
      break;
    case H.Opaque:
      r.code.add(n`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
      break;
    case H.Mask:
      r.uniforms.add("textureAlphaCutoff", "float"), r.code.add(n`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);
      break;
    case H.MaskBlend:
      t.fragment.uniforms.add("textureAlphaCutoff", "float"), t.fragment.code.add(n`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);
  }
}
let ta = class {
  constructor(e) {
    this._material = e.material, this._techniqueRep = e.techniqueRep, this._output = e.output;
  }
  dispose() {
    this._techniqueRep.release(this._technique);
  }
  get technique() {
    return this._technique;
  }
  ensureTechnique(e, r, i = this._output) {
    return this._technique = this._techniqueRep.releaseAndAcquire(e, this._material.getTechniqueConfig(i, r), this._technique), this._technique;
  }
  ensureResources(e) {
    return yt.LOADED;
  }
}, ra = class extends ta {
  constructor(e) {
    super(e), this._numLoading = 0, this._disposed = !1, this._textureRepository = e.textureRep, this._textureId = e.textureId, this._acquire(e.textureId, (r) => this._texture = r), this._acquire(e.normalTextureId, (r) => this._textureNormal = r), this._acquire(e.emissiveTextureId, (r) => this._textureEmissive = r), this._acquire(e.occlusionTextureId, (r) => this._textureOcclusion = r), this._acquire(e.metallicRoughnessTextureId, (r) => this._textureMetallicRoughness = r);
  }
  dispose() {
    this._texture = Se(this._texture), this._textureNormal = Se(this._textureNormal), this._textureEmissive = Se(this._textureEmissive), this._textureOcclusion = Se(this._textureOcclusion), this._textureMetallicRoughness = Se(this._textureMetallicRoughness), this._disposed = !0;
  }
  ensureResources(e) {
    return this._numLoading === 0 ? yt.LOADED : yt.LOADING;
  }
  updateTexture(e) {
    (W(this._texture) || e !== this._texture.id) && (this._texture = Se(this._texture), this._textureId = e, this._acquire(this._textureId, (r) => this._texture = r));
  }
  bindTextures(e) {
    g(this._texture) && e.bindTexture(this._texture.glTexture, "tex"), g(this._textureNormal) && e.bindTexture(this._textureNormal.glTexture, "normalTexture"), g(this._textureEmissive) && e.bindTexture(this._textureEmissive.glTexture, "texEmission"), g(this._textureOcclusion) && e.bindTexture(this._textureOcclusion.glTexture, "texOcclusion"), g(this._textureMetallicRoughness) && e.bindTexture(this._textureMetallicRoughness.glTexture, "texMetallicRoughness");
  }
  bindTextureScale(e) {
    const r = g(this._texture) ? this._texture.glTexture : null;
    g(r) && r.descriptor.textureCoordinateScaleFactor ? e.setUniform2fv("textureCoordinateScaleFactor", r.descriptor.textureCoordinateScaleFactor) : e.setUniform2f("textureCoordinateScaleFactor", 1, 1);
  }
  _acquire(e, r) {
    if (W(e))
      return void r(null);
    const i = this._textureRepository.acquire(e);
    if (_i(i))
      return ++this._numLoading, void i.then((o) => {
        if (this._disposed)
          return Se(o), void r(null);
        r(o);
      }).finally(() => --this._numLoading);
    r(i);
  }
};
function ia(t) {
  return Math.abs(t * t * t);
}
function oa(t, e, r) {
  const i = r.parameters, o = r.paddingPixelsOverride;
  return ke.scale = Math.min(i.divisor / (e - i.offset), 1), ke.factor = ia(t), ke.minPixelSize = i.minPixelSize, ke.paddingPixels = o, ke;
}
function aa(t, e) {
  return t === 0 ? e.minPixelSize : e.minPixelSize * (1 + 2 * e.paddingPixels / t);
}
function na(t, e) {
  return Math.max(Ci(t * e.scale, t, e.factor), aa(t, e));
}
function sa(t, e, r, i) {
  return na(t, oa(e, r, i));
}
const ke = { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 };
function la(t) {
  return !!g(t) && !t.visible;
}
const it = Si();
function ca(t, e, r, i, o, a, l) {
  if (!la(e))
    if (t.boundingInfo) {
      j(t.primitiveType === at.Triangle);
      const c = r.tolerance;
      Lr(t.boundingInfo, i, o, c, a, l);
    } else {
      const c = t.indices.get(p.POSITION), d = t.vertexAttributes.get(p.POSITION);
      Fr(i, o, 0, c.length / 3, c, d, void 0, a, l);
    }
}
const da = U();
function Lr(t, e, r, i, o, a) {
  if (W(t))
    return;
  const l = ma(e, r, da);
  if (yi(it, t.getBBMin()), Ai(it, t.getBBMax()), g(o) && o.applyToAabb(it), ha(it, e, l, i)) {
    const { primitiveIndices: c, indices: d, position: s } = t, u = c ? c.length : d.length / 3;
    if (u > ba) {
      const f = t.getChildren();
      if (f !== void 0) {
        for (let m = 0; m < 8; ++m)
          f[m] !== void 0 && Lr(f[m], e, r, i, o, a);
        return;
      }
    }
    Fr(e, r, 0, u, d, s, c, o, a);
  }
}
const $r = U();
function Fr(t, e, r, i, o, a, l, c, d) {
  if (l)
    return ua(t, e, r, i, o, a, l, c, d);
  const s = a.data, u = a.stride || a.size, f = t[0], m = t[1], x = t[2], h = e[0] - f, _ = e[1] - m, C = e[2] - x;
  for (let T = r, G = 3 * r; T < i; ++T) {
    let w = u * o[G++], M = s[w++], D = s[w++], S = s[w];
    w = u * o[G++];
    let y = s[w++], P = s[w++], v = s[w];
    w = u * o[G++];
    let A = s[w++], L = s[w++], $ = s[w];
    g(c) && ([M, D, S] = c.applyToVertex(M, D, S, T), [y, P, v] = c.applyToVertex(y, P, v, T), [A, L, $] = c.applyToVertex(A, L, $, T));
    const I = y - M, z = P - D, F = v - S, B = A - M, Z = L - D, oe = $ - S, xe = _ * oe - Z * C, Fe = C * B - oe * h, ze = h * Z - B * _, Q = I * xe + z * Fe + F * ze;
    if (Math.abs(Q) <= Number.EPSILON)
      continue;
    const X = f - M, be = m - D, Te = x - S, ie = X * xe + be * Fe + Te * ze;
    if (Q > 0) {
      if (ie < 0 || ie > Q)
        continue;
    } else if (ie > 0 || ie < Q)
      continue;
    const ae = be * F - z * Te, Be = Te * I - F * X, Ge = X * z - I * be, _e = h * ae + _ * Be + C * Ge;
    if (Q > 0) {
      if (_e < 0 || ie + _e > Q)
        continue;
    } else if (_e > 0 || ie + _e < Q)
      continue;
    const Ce = (B * ae + Z * Be + oe * Ge) / Q;
    Ce >= 0 && d(Ce, zr(I, z, F, B, Z, oe, $r), T, !1);
  }
}
function ua(t, e, r, i, o, a, l, c, d) {
  const s = a.data, u = a.stride || a.size, f = t[0], m = t[1], x = t[2], h = e[0] - f, _ = e[1] - m, C = e[2] - x;
  for (let T = r; T < i; ++T) {
    const G = l[T];
    let w = 3 * G, M = u * o[w++], D = s[M++], S = s[M++], y = s[M];
    M = u * o[w++];
    let P = s[M++], v = s[M++], A = s[M];
    M = u * o[w];
    let L = s[M++], $ = s[M++], I = s[M];
    g(c) && ([D, S, y] = c.applyToVertex(D, S, y, T), [P, v, A] = c.applyToVertex(P, v, A, T), [L, $, I] = c.applyToVertex(L, $, I, T));
    const z = P - D, F = v - S, B = A - y, Z = L - D, oe = $ - S, xe = I - y, Fe = _ * xe - oe * C, ze = C * Z - xe * h, Q = h * oe - Z * _, X = z * Fe + F * ze + B * Q;
    if (Math.abs(X) <= Number.EPSILON)
      continue;
    const be = f - D, Te = m - S, ie = x - y, ae = be * Fe + Te * ze + ie * Q;
    if (X > 0) {
      if (ae < 0 || ae > X)
        continue;
    } else if (ae > 0 || ae < X)
      continue;
    const Be = Te * B - F * ie, Ge = ie * z - B * be, _e = be * F - z * Te, Ce = h * Be + _ * Ge + C * _e;
    if (X > 0) {
      if (Ce < 0 || ae + Ce > X)
        continue;
    } else if (Ce > 0 || ae + Ce < X)
      continue;
    const zt = (Z * Be + oe * Ge + xe * _e) / X;
    zt >= 0 && d(zt, zr(z, F, B, Z, oe, xe, $r), G, !1);
  }
}
const er = U(), tr = U();
function zr(t, e, r, i, o, a, l) {
  return lt(er, t, e, r), lt(tr, i, o, a), Mi(l, er, tr), Pt(l, l), l;
}
function ma(t, e, r) {
  return lt(r, 1 / (e[0] - t[0]), 1 / (e[1] - t[1]), 1 / (e[2] - t[2]));
}
function ha(t, e, r, i) {
  return pa(t, e, r, i, 1 / 0);
}
function pa(t, e, r, i, o) {
  const a = (t[0] - i - e[0]) * r[0], l = (t[3] + i - e[0]) * r[0];
  let c = Math.min(a, l), d = Math.max(a, l);
  const s = (t[1] - i - e[1]) * r[1], u = (t[4] + i - e[1]) * r[1];
  if (d = Math.min(d, Math.max(s, u)), d < 0 || (c = Math.max(c, Math.min(s, u)), c > d))
    return !1;
  const f = (t[2] - i - e[2]) * r[2], m = (t[5] + i - e[2]) * r[2];
  return d = Math.min(d, Math.max(f, m)), !(d < 0) && (c = Math.max(c, Math.min(f, m)), !(c > d) && c < o);
}
function fa(t, e, r, i, o) {
  let a = (r.screenLength || 0) * t.pixelRatio;
  o && (a = sa(a, i, e, o));
  const l = a * Math.tan(0.5 * t.fovY) / (0.5 * t.fullHeight);
  return wi(l * e, r.minWorldLength || 0, r.maxWorldLength != null ? r.maxWorldLength : 1 / 0);
}
function va(t, e, r) {
  if (!t)
    return;
  const i = t.parameters, o = t.paddingPixelsOverride;
  e.setUniform4f(r, i.divisor, i.offset, i.minPixelSize, o);
}
function Br(t, e) {
  const r = e ? Br(e) : {};
  for (const i in t) {
    let o = t[i];
    o && o.forEach && (o = xa(o)), o == null && i in r || (r[i] = o);
  }
  return r;
}
function ga(t, e) {
  let r = !1;
  for (const i in e) {
    const o = e[i];
    o !== void 0 && (r = !0, Array.isArray(o) ? t[i] = o.slice() : t[i] = o);
  }
  return r;
}
function xa(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
}
const rr = { multiply: 1, ignore: 2, replace: 3, tint: 4 }, ba = 1e3;
let Ta = class extends Et {
  constructor(e, r) {
    super(), this.type = Ze.Material, this.supportsEdges = !1, this._visible = !0, this._renderPriority = 0, this._insertOrder = 0, this._vertexAttributeLocations = ht, this._parameters = Br(e, r), this.validateParameters(this._parameters);
  }
  dispose() {
  }
  get parameters() {
    return this._parameters;
  }
  update(e) {
    return !1;
  }
  setParameters(e) {
    ga(this._parameters, e) && (this.validateParameters(this._parameters), this.parametersChanged());
  }
  validateParameters(e) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    e !== this._visible && (this._visible = e, this.parametersChanged());
  }
  shouldRender(e) {
    return this.isVisible() && this.isVisibleInPass(e.pass) && (this.renderOccluded & e.renderOccludedMask) != 0;
  }
  isVisibleInPass(e) {
    return !0;
  }
  get renderOccluded() {
    return this.parameters.renderOccluded;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(e) {
    e !== this._renderPriority && (this._renderPriority = e, this.parametersChanged());
  }
  get insertOrder() {
    return this._insertOrder;
  }
  set insertOrder(e) {
    e !== this._insertOrder && (this._insertOrder = e, this.parametersChanged());
  }
  get vertexAttributeLocations() {
    return this._vertexAttributeLocations;
  }
  isVisible() {
    return this._visible;
  }
  parametersChanged() {
    g(this.repository) && this.repository.materialChanged(this);
  }
};
var At;
(function(t) {
  t[t.Occlude = 1] = "Occlude", t[t.Transparent = 2] = "Transparent", t[t.OccludeAndTransparent = 4] = "OccludeAndTransparent", t[t.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", t[t.Opaque = 16] = "Opaque";
})(At || (At = {}));
const _a = { renderOccluded: At.Occlude };
var ir;
(function(t) {
  t[t.X = 0] = "X", t[t.Y = 1] = "Y", t[t.Z = 2] = "Z";
})(ir || (ir = {}));
function Ca() {
  return { origin: null, direction: null };
}
new Hi(Ca);
Qe.getLogger("geoscene.geometry.support.sphere");
function Sa() {
  return ki();
}
let ya = class {
  constructor(e = 0) {
    this.offset = e, this.sphere = Sa(), this.tmpVertex = U();
  }
  applyToVertex(e, r, i) {
    const o = this.objectTransform.transform;
    let a = o[0] * e + o[4] * r + o[8] * i + o[12], l = o[1] * e + o[5] * r + o[9] * i + o[13], c = o[2] * e + o[6] * r + o[10] * i + o[14];
    const d = this.offset / Math.sqrt(a * a + l * l + c * c);
    a += a * d, l += l * d, c += c * d;
    const s = this.objectTransform.inverse;
    return this.tmpVertex[0] = s[0] * a + s[4] * l + s[8] * c + s[12], this.tmpVertex[1] = s[1] * a + s[5] * l + s[9] * c + s[13], this.tmpVertex[2] = s[2] * a + s[6] * l + s[10] * c + s[14], this.tmpVertex;
  }
  applyToMinMax(e, r) {
    const i = this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    e[0] += e[0] * i, e[1] += e[1] * i, e[2] += e[2] * i;
    const o = this.offset / Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
    r[0] += r[0] * o, r[1] += r[1] * o, r[2] += r[2] * o;
  }
  applyToAabb(e) {
    const r = this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    e[0] += e[0] * r, e[1] += e[1] * r, e[2] += e[2] * r;
    const i = this.offset / Math.sqrt(e[3] * e[3] + e[4] * e[4] + e[5] * e[5]);
    return e[3] += e[3] * i, e[4] += e[4] * i, e[5] += e[5] * i, e;
  }
  applyToBoundingSphere(e) {
    const r = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), i = this.offset / r;
    return this.sphere[0] = e[0] + e[0] * i, this.sphere[1] = e[1] + e[1] * i, this.sphere[2] = e[2] + e[2] * i, this.sphere[3] = e[3] + e[3] * this.offset / r, this.sphere;
  }
};
const or = new ya();
function Aa(t) {
  return g(t) ? (or.offset = t, or) : null;
}
function Ma(t, e, r, i) {
  const o = r.typedBuffer, a = r.typedBufferStride, l = t.length;
  i *= a;
  for (let c = 0; c < l; ++c) {
    const d = 2 * t[c];
    o[i] = e[d], o[i + 1] = e[d + 1], i += a;
  }
}
function Gr(t, e, r, i, o) {
  const a = r.typedBuffer, l = r.typedBufferStride, c = t.length;
  if (i *= l, o == null || o === 1)
    for (let d = 0; d < c; ++d) {
      const s = 3 * t[d];
      a[i] = e[s], a[i + 1] = e[s + 1], a[i + 2] = e[s + 2], i += l;
    }
  else
    for (let d = 0; d < c; ++d) {
      const s = 3 * t[d];
      for (let u = 0; u < o; ++u)
        a[i] = e[s], a[i + 1] = e[s + 1], a[i + 2] = e[s + 2], i += l;
    }
}
function wa(t, e, r, i, o = 1) {
  const a = r.typedBuffer, l = r.typedBufferStride, c = t.length;
  if (i *= l, o === 1)
    for (let d = 0; d < c; ++d) {
      const s = 4 * t[d];
      a[i] = e[s], a[i + 1] = e[s + 1], a[i + 2] = e[s + 2], a[i + 3] = e[s + 3], i += l;
    }
  else
    for (let d = 0; d < c; ++d) {
      const s = 4 * t[d];
      for (let u = 0; u < o; ++u)
        a[i] = e[s], a[i + 1] = e[s + 1], a[i + 2] = e[s + 2], a[i + 3] = e[s + 3], i += l;
    }
}
function Oa(t, e, r, i, o, a = 1) {
  if (!r)
    return void Gr(t, e, i, o, a);
  const l = i.typedBuffer, c = i.typedBufferStride, d = t.length, s = r[0], u = r[1], f = r[2], m = r[4], x = r[5], h = r[6], _ = r[8], C = r[9], T = r[10], G = r[12], w = r[13], M = r[14];
  if (o *= c, a === 1)
    for (let D = 0; D < d; ++D) {
      const S = 3 * t[D], y = e[S], P = e[S + 1], v = e[S + 2];
      l[o] = s * y + m * P + _ * v + G, l[o + 1] = u * y + x * P + C * v + w, l[o + 2] = f * y + h * P + T * v + M, o += c;
    }
  else
    for (let D = 0; D < d; ++D) {
      const S = 3 * t[D], y = e[S], P = e[S + 1], v = e[S + 2], A = s * y + m * P + _ * v + G, L = u * y + x * P + C * v + w, $ = f * y + h * P + T * v + M;
      for (let I = 0; I < a; ++I)
        l[o] = A, l[o + 1] = L, l[o + 2] = $, o += c;
    }
}
function Pa(t, e, r, i, o, a = 1) {
  if (!r)
    return void Gr(t, e, i, o, a);
  const l = r, c = i.typedBuffer, d = i.typedBufferStride, s = t.length, u = l[0], f = l[1], m = l[2], x = l[4], h = l[5], _ = l[6], C = l[8], T = l[9], G = l[10], w = !pr(l), M = 1e-6, D = 1 - M;
  if (o *= d, a === 1)
    for (let S = 0; S < s; ++S) {
      const y = 3 * t[S], P = e[y], v = e[y + 1], A = e[y + 2];
      let L = u * P + x * v + C * A, $ = f * P + h * v + T * A, I = m * P + _ * v + G * A;
      if (w) {
        const z = L * L + $ * $ + I * I;
        if (z < D && z > M) {
          const F = 1 / Math.sqrt(z);
          L *= F, $ *= F, I *= F;
        }
      }
      c[o + 0] = L, c[o + 1] = $, c[o + 2] = I, o += d;
    }
  else
    for (let S = 0; S < s; ++S) {
      const y = 3 * t[S], P = e[y], v = e[y + 1], A = e[y + 2];
      let L = u * P + x * v + C * A, $ = f * P + h * v + T * A, I = m * P + _ * v + G * A;
      if (w) {
        const z = L * L + $ * $ + I * I;
        if (z < D && z > M) {
          const F = 1 / Math.sqrt(z);
          L *= F, $ *= F, I *= F;
        }
      }
      for (let z = 0; z < a; ++z)
        c[o + 0] = L, c[o + 1] = $, c[o + 2] = I, o += d;
    }
}
function Ea(t, e, r, i, o, a = 1) {
  if (!r)
    return void wa(t, e, i, o, a);
  const l = r, c = i.typedBuffer, d = i.typedBufferStride, s = t.length, u = l[0], f = l[1], m = l[2], x = l[4], h = l[5], _ = l[6], C = l[8], T = l[9], G = l[10], w = !pr(l), M = 1e-6, D = 1 - M;
  if (o *= d, a === 1)
    for (let S = 0; S < s; ++S) {
      const y = 4 * t[S], P = e[y], v = e[y + 1], A = e[y + 2], L = e[y + 3];
      let $ = u * P + x * v + C * A, I = f * P + h * v + T * A, z = m * P + _ * v + G * A;
      if (w) {
        const F = $ * $ + I * I + z * z;
        if (F < D && F > M) {
          const B = 1 / Math.sqrt(F);
          $ *= B, I *= B, z *= B;
        }
      }
      c[o + 0] = $, c[o + 1] = I, c[o + 2] = z, c[o + 3] = L, o += d;
    }
  else
    for (let S = 0; S < s; ++S) {
      const y = 4 * t[S], P = e[y], v = e[y + 1], A = e[y + 2], L = e[y + 3];
      let $ = u * P + x * v + C * A, I = f * P + h * v + T * A, z = m * P + _ * v + G * A;
      if (w) {
        const F = $ * $ + I * I + z * z;
        if (F < D && F > M) {
          const B = 1 / Math.sqrt(F);
          $ *= B, I *= B, z *= B;
        }
      }
      for (let F = 0; F < a; ++F)
        c[o + 0] = $, c[o + 1] = I, c[o + 2] = z, c[o + 3] = L, o += d;
    }
}
function ar(t, e, r, i, o, a = 1) {
  const l = i.typedBuffer, c = i.typedBufferStride, d = t.length;
  if (o *= c, a === 1) {
    if (r === 4)
      for (let s = 0; s < d; ++s) {
        const u = 4 * t[s];
        l[o] = e[u], l[o + 1] = e[u + 1], l[o + 2] = e[u + 2], l[o + 3] = e[u + 3], o += c;
      }
    else if (r === 3)
      for (let s = 0; s < d; ++s) {
        const u = 3 * t[s];
        l[o] = e[u], l[o + 1] = e[u + 1], l[o + 2] = e[u + 2], l[o + 3] = 255, o += c;
      }
  } else if (r === 4)
    for (let s = 0; s < d; ++s) {
      const u = 4 * t[s];
      for (let f = 0; f < a; ++f)
        l[o] = e[u], l[o + 1] = e[u + 1], l[o + 2] = e[u + 2], l[o + 3] = e[u + 3], o += c;
    }
  else if (r === 3)
    for (let s = 0; s < d; ++s) {
      const u = 3 * t[s];
      for (let f = 0; f < a; ++f)
        l[o] = e[u], l[o + 1] = e[u + 1], l[o + 2] = e[u + 2], l[o + 3] = 255, o += c;
    }
}
function Ra(t, e, r, i, o, a) {
  for (const l of e.fieldNames) {
    const c = t.vertexAttributes.get(l), d = t.indices.get(l);
    if (c && d)
      switch (l) {
        case p.POSITION: {
          j(c.size === 3);
          const s = o.getField(l, Ne);
          s && Oa(d, c.data, r, s, a);
          break;
        }
        case p.NORMAL: {
          j(c.size === 3);
          const s = o.getField(l, Ne);
          s && Pa(d, c.data, i, s, a);
          break;
        }
        case p.UV0: {
          j(c.size === 2);
          const s = o.getField(l, Cr);
          s && Ma(d, c.data, s, a);
          break;
        }
        case p.COLOR: {
          j(c.size === 3 || c.size === 4);
          const s = o.getField(l, Ye);
          s && ar(d, c.data, c.size, s, a);
          break;
        }
        case p.SYMBOLCOLOR: {
          j(c.size === 3 || c.size === 4);
          const s = o.getField(l, Ye);
          s && ar(d, c.data, c.size, s, a);
          break;
        }
        case p.TANGENT: {
          j(c.size === 4);
          const s = o.getField(l, St);
          s && Ea(d, c.data, i, s, a);
          break;
        }
      }
  }
}
function Re(t, e) {
  if (e.slicePlaneEnabled) {
    t.extensions.add("GL_OES_standard_derivatives"), e.sliceEnabledForVertexPrograms && (t.vertex.uniforms.add("slicePlaneOrigin", "vec3"), t.vertex.uniforms.add("slicePlaneBasis1", "vec3"), t.vertex.uniforms.add("slicePlaneBasis2", "vec3")), t.fragment.uniforms.add("slicePlaneOrigin", "vec3"), t.fragment.uniforms.add("slicePlaneBasis1", "vec3"), t.fragment.uniforms.add("slicePlaneBasis2", "vec3");
    const r = n`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`, i = n`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`, o = e.sliceHighlightDisabled ? n`#define highlightSlice(_color_, _pos_) (_color_)` : n`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;
    e.sliceEnabledForVertexPrograms && t.vertex.code.add(r), t.fragment.code.add(r), t.fragment.code.add(o);
  } else {
    const r = n`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;
    e.sliceEnabledForVertexPrograms && t.vertex.code.add(r), t.fragment.code.add(r);
  }
}
function Ia(t, e, r, i) {
  if (e.slicePlaneEnabled)
    if (g(r)) {
      if (ot(ne, r.origin), ot(me, r.basis1), ot(he, r.basis2), g(i) && g(i.origin) && Oe(ne, r.origin, i.origin), g(i) && g(i.view)) {
        const o = g(i.origin) ? fr(Da, i.view, i.origin) : i.view;
        Ut(me, me, ne), Ut(he, he, ne), We(ne, ne, o), We(me, me, o), We(he, he, o), Oe(me, me, ne), Oe(he, he, ne);
      }
      t.setUniform3fv("slicePlaneOrigin", ne), t.setUniform3fv("slicePlaneBasis1", me), t.setUniform3fv("slicePlaneBasis2", he);
    } else
      t.setUniform3fv("slicePlaneBasis1", vt), t.setUniform3fv("slicePlaneBasis2", vt), t.setUniform3fv("slicePlaneOrigin", vt);
}
const ne = U(), me = U(), he = U(), Da = Tr();
function Vr({ code: t }, e) {
  e.doublePrecisionRequiresObfuscation ? t.add(n`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`) : t.add(n`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);
}
function Ur(t) {
  return !!Oi("force-double-precision-obfuscation") || t.driverTest.doublePrecisionRequiresObfuscation;
}
function Hr(t, e) {
  e.instanced && e.instancedDoublePrecision && (t.attributes.add(p.MODELORIGINHI, "vec3"), t.attributes.add(p.MODELORIGINLO, "vec3"), t.attributes.add(p.MODEL, "mat3"), t.attributes.add(p.MODELNORMAL, "mat3")), e.instancedDoublePrecision && (t.vertex.include(Vr, e), t.vertex.uniforms.add("viewOriginHi", "vec3"), t.vertex.uniforms.add("viewOriginLo", "vec3"));
  const r = [n`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision ? "return model * localPosition().xyz;" : "return localPosition().xyz;"}
    }
    `, n`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision ? n`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `, n`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision ? "return normalize(modelNormal * _normal.xyz);" : "return normalize(_normal.xyz);"}
    }
    `, n`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision ? "return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);" : "return normalize((viewNormal * _normal).xyz);"}
    }
    `, e.vertexTangents ? n`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision ? "return vec4(modelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}

    }
    ` : n``];
  t.vertex.code.add(r[0]), t.vertex.code.add(r[1]), t.vertex.code.add(r[2]), e.output === b.Normal && t.vertex.code.add(r[3]), t.vertex.code.add(r[4]);
}
function Na(t, e) {
  eo(e, nr, sr, 3), t.setUniform3fv("viewOriginHi", nr), t.setUniform3fv("viewOriginLo", sr);
}
const nr = U(), sr = U();
function La(t) {
  const e = n`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;
  t.fragment.code.add(e), t.vertex.code.add(e);
}
function pt(t, e) {
  e.normalType === k.Attribute && (t.attributes.add(p.NORMAL, "vec3"), t.vertex.code.add(n`vec3 normalModel() {
return normal;
}`)), e.normalType === k.CompressedAttribute && (t.include(La), t.attributes.add(p.NORMALCOMPRESSED, "vec2"), t.vertex.code.add(n`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)), e.normalType === k.ScreenDerivative && (t.extensions.add("GL_OES_standard_derivatives"), t.fragment.code.add(n`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));
}
var k;
(function(t) {
  t[t.Attribute = 0] = "Attribute", t[t.CompressedAttribute = 1] = "CompressedAttribute", t[t.Ground = 2] = "Ground", t[t.ScreenDerivative = 3] = "ScreenDerivative", t[t.COUNT = 4] = "COUNT";
})(k || (k = {}));
function $e(t, e) {
  e.attributeTextureCoordinates === Y.Default && (t.attributes.add(p.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), t.vertex.code.add(n`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)), e.attributeTextureCoordinates === Y.Atlas && (t.attributes.add(p.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), t.attributes.add(p.UVREGION, "vec4"), t.varyings.add("vuvRegion", "vec4"), t.vertex.code.add(n`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)), e.attributeTextureCoordinates === Y.None && t.vertex.code.add(n`void forwardTextureCoordinates() {}`);
}
var Y;
(function(t) {
  t[t.None = 0] = "None", t[t.Default = 1] = "Default", t[t.Atlas = 2] = "Atlas", t[t.COUNT = 3] = "COUNT";
})(Y || (Y = {}));
function $a(t) {
  t.vertex.code.add(n`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`), t.vertex.code.add(n`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), t.vertex.code.add(n`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`), t.vertex.code.add(n`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`), t.vertex.code.add(n`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), t.vertex.code.add(n`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`), t.vertex.code.add(n`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function kr(t, e) {
  const r = t.vertex.code;
  e.verticalOffsetEnabled ? (t.vertex.uniforms.add("verticalOffset", "vec4"), e.screenSizePerspectiveEnabled && (t.include($a), t.vertex.uniforms.add("screenSizePerspectiveAlignment", "vec4")), r.add(n`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode === ue.Global ? n`vec3 worldNormal = normalize(worldPos + localOrigin);` : n`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled ? n`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : n`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)) : r.add(n`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
function Fa(t, e, r) {
  if (!e.verticalOffset)
    return;
  const i = za(e.verticalOffset, r.camera.fovY, r.camera.fullViewport[3]), o = r.camera.pixelRatio || 1;
  t.setUniform4f("verticalOffset", i.screenLength * o, i.perDistance, i.minWorldLength, i.maxWorldLength);
}
function za(t, e, r, i = Ba) {
  return i.screenLength = t.screenLength, i.perDistance = Math.tan(0.5 * e) / (0.5 * r), i.minWorldLength = t.minWorldLength, i.maxWorldLength = t.maxWorldLength, i;
}
const Ba = { screenLength: 0, perDistance: 0, minWorldLength: 0, maxWorldLength: 0 }, Ga = Sr(1, 1, 0, 1), Va = Sr(1, 0, 1, 1);
function Ua(t) {
  t.fragment.uniforms.add("depthTex", "sampler2D"), t.fragment.uniforms.add("highlightViewportPixelSz", "vec4"), t.fragment.constants.add("occludedHighlightFlag", "vec4", Ga).add("unoccludedHighlightFlag", "vec4", Va), t.fragment.code.add(n`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);
}
function Ha(t, e) {
  t.bindTexture(e.highlightDepthTexture, "depthTex"), t.setUniform4f("highlightViewportPixelSz", 0, 0, e.inverseViewport[0], e.inverseViewport[1]);
}
function dt(t, e) {
  t.fragment.uniforms.add("terrainDepthTexture", "sampler2D"), t.fragment.uniforms.add("nearFar", "vec2"), t.fragment.uniforms.add("inverseViewport", "vec2"), t.fragment.code.add(n`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround ? ">" : "<="} terrainDepth){
        discard;
      }
    }
  `);
}
function ka(t, e) {
  e.multipassTerrainEnabled && e.terrainLinearDepthTexture && t.bindTexture(e.terrainLinearDepthTexture, "terrainDepthTexture");
}
function Wa(t) {
  t.extensions.add("GL_EXT_shader_texture_lod"), t.extensions.add("GL_OES_standard_derivatives"), t.fragment.code.add(n`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);
}
function Wr(t, e) {
  t.include($e, e), t.fragment.code.add(n`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas ? "vec2 size;" : ""}
  } vtc;
  `), e.attributeTextureCoordinates === Y.Default && t.fragment.code.add(n`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`), e.attributeTextureCoordinates === Y.Atlas && (t.include(Wa), t.fragment.code.add(n`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));
}
Co(0, 0.6, 0.2);
var N;
function qr(t, e) {
  const r = t.fragment, i = e.hasMetalnessAndRoughnessTexture || e.hasEmissionTexture || e.hasOcclusionTexture;
  e.pbrMode === N.Normal && i && t.include(Wr, e), e.pbrMode !== N.Schematic ? (e.pbrMode === N.Disabled && r.code.add(n`float getBakedOcclusion() { return 1.0; }`), e.pbrMode === N.Normal && (r.uniforms.add("emissionFactor", "vec3"), r.uniforms.add("mrrFactors", "vec3"), r.code.add(n`vec3 mrr;
vec3 emission;
float occlusion;`), e.hasMetalnessAndRoughnessTexture && (r.uniforms.add("texMetallicRoughness", "sampler2D"), e.supportsTextureAtlas && r.uniforms.add("texMetallicRoughnessSize", "vec2"), r.code.add(n`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)), e.hasEmissionTexture && (r.uniforms.add("texEmission", "sampler2D"), e.supportsTextureAtlas && r.uniforms.add("texEmissionSize", "vec2"), r.code.add(n`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)), e.hasOcclusionTexture ? (r.uniforms.add("texOcclusion", "sampler2D"), e.supportsTextureAtlas && r.uniforms.add("texOcclusionSize", "vec2"), r.code.add(n`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)) : r.code.add(n`float getBakedOcclusion() { return 1.0; }`), r.code.add(n`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i ? "vtc.uv = vuv0;" : ""}
      ${e.hasMetalnessAndRoughnessTexture ? e.supportsTextureAtlas ? "vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);" : "applyMetallnessAndRoughness(vtc);" : ""}
      ${e.hasEmissionTexture ? e.supportsTextureAtlas ? "vtc.size = texEmissionSize; applyEmission(vtc);" : "applyEmission(vtc);" : ""}
      ${e.hasOcclusionTexture ? e.supportsTextureAtlas ? "vtc.size = texOcclusionSize; applyOcclusion(vtc);" : "applyOcclusion(vtc);" : ""}
    }
  `))) : r.code.add(n`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
}
function qa(t, e, r = !1) {
  r || (t.setUniform3fv("mrrFactors", e.mrrFactors), t.setUniform3fv("emissionFactor", e.emissiveFactor));
}
(function(t) {
  t[t.Disabled = 0] = "Disabled", t[t.Normal = 1] = "Normal", t[t.Schematic = 2] = "Schematic", t[t.Water = 3] = "Water", t[t.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", t[t.COUNT = 5] = "COUNT";
})(N || (N = {}));
function Dt(t) {
  t.code.add(n`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);
}
function Nt(t) {
  t.fragment.include(Dt), t.fragment.uniforms.add("shadowMapTex", "sampler2D"), t.fragment.uniforms.add("numCascades", "int"), t.fragment.uniforms.add("cascadeDistances", "vec4"), t.fragment.uniforms.add("shadowMapMatrix", "mat4", 4), t.fragment.uniforms.add("depthHalfPixelSz", "float"), t.fragment.code.add(n`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`);
}
function ja(t, e, r) {
  e.shadowMappingEnabled && e.shadowMap.bindView(t, r);
}
function Xe(t, e) {
  e.vvInstancingEnabled && (e.vvSize || e.vvColor) && t.attributes.add(p.INSTANCEFEATUREATTRIBUTE, "vec4"), e.vvSize ? (t.vertex.uniforms.add("vvSizeMinSize", "vec3"), t.vertex.uniforms.add("vvSizeMaxSize", "vec3"), t.vertex.uniforms.add("vvSizeOffset", "vec3"), t.vertex.uniforms.add("vvSizeFactor", "vec3"), t.vertex.uniforms.add("vvSymbolRotationMatrix", "mat3"), t.vertex.uniforms.add("vvSymbolAnchor", "vec3"), t.vertex.code.add(n`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`), t.vertex.code.add(n`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled ? n`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : t.vertex.code.add(n`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), e.vvColor ? (t.vertex.constants.add("vvColorNumber", "int", 8), t.vertex.code.add(n`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled ? n`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }` : ""}
    `)) : t.vertex.code.add(n`vec4 vvColor() { return vec4(1.0); }`);
}
function Xa(t, e) {
  e.vvSizeEnabled && (t.setUniform3fv("vvSizeMinSize", e.vvSizeMinSize), t.setUniform3fv("vvSizeMaxSize", e.vvSizeMaxSize), t.setUniform3fv("vvSizeOffset", e.vvSizeOffset), t.setUniform3fv("vvSizeFactor", e.vvSizeFactor)), e.vvColorEnabled && (t.setUniform1fv("vvColorValues", e.vvColorValues), t.setUniform4fv("vvColorColors", e.vvColorColors));
}
function Ka(t, e) {
  Xa(t, e), e.vvSizeEnabled && (t.setUniform3fv("vvSymbolAnchor", e.vvSymbolAnchor), t.setUniformMatrix3fv("vvSymbolRotationMatrix", e.vvSymbolRotationMatrix));
}
function Ya(t, e, r) {
  t.setUniform3f("cameraPosition", r[3] - e[0], r[7] - e[1], r[11] - e[2]);
}
function Za(t, e) {
  t.setUniformMatrix4fv("proj", e);
}
function Qa(t, e, r) {
  fr(lr, r, e), t.setUniform3fv("localOrigin", e), t.setUniformMatrix4fv("view", lr);
}
const lr = Pi();
let jr = class {
  constructor(e, r) {
    this._module = e, this._loadModule = r;
  }
  get() {
    return this._module;
  }
  async reload() {
    return this._module = await this._loadModule(), this._module;
  }
}, Ja = class {
  constructor(e, r, i) {
    this.release = i, r && (this._config = r.snapshot()), this._program = this.initializeProgram(e), this._pipeline = this.initializePipeline(e);
  }
  destroy() {
    this._program = Ht(this._program), this._pipeline = this._config = null;
  }
  reload(e) {
    Ht(this._program), this._program = this.initializeProgram(e), this._pipeline = this.initializePipeline(e);
  }
  get program() {
    return this._program;
  }
  get key() {
    return this._config.key;
  }
  get configuration() {
    return this._config;
  }
  bindPass(e, r) {
  }
  bindMaterial(e, r) {
  }
  bindDraw(e) {
  }
  bindPipelineState(e, r = null, i) {
    e.setPipelineState(this.getPipelineState(r, i));
  }
  ensureAttributeLocations(e) {
    this.program.assertCompatibleVertexAttributeLocations(e);
  }
  get primitiveType() {
    return qe.TRIANGLES;
  }
  getPipelineState(e, r) {
    return this._pipeline;
  }
}, en = class {
  constructor() {
    this._key = "", this._keyDirty = !1, this._parameterBits = this._parameterBits ? this._parameterBits.map(() => 0) : [], this._parameterNames || (this._parameterNames = []);
  }
  get key() {
    return this._keyDirty && (this._keyDirty = !1, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
  }
  snapshot() {
    const e = this._parameterNames, r = { key: this.key };
    for (const i of e)
      r[i] = this[i];
    return r;
  }
};
function R(t = {}) {
  return (e, r) => {
    var i, o;
    e._parameterNames = (i = e._parameterNames) != null ? i : [], e._parameterNames.push(r);
    const a = e._parameterNames.length - 1, l = t.count || 2, c = Math.ceil(Math.log2(l)), d = (o = e._parameterBits) != null ? o : [0];
    let s = 0;
    for (; d[s] + c > 16; )
      s++, s >= d.length && d.push(0);
    e._parameterBits = d;
    const u = d[s], f = (1 << c) - 1 << u;
    d[s] += c, Object.defineProperty(e, r, { get() {
      return this[a];
    }, set(m) {
      if (this[a] !== m && (this[a] = m, this._keyDirty = !0, this._parameterBits[s] = this._parameterBits[s] & ~f | +m << u & f, typeof m != "number" && typeof m != "boolean"))
        throw "Configuration value for " + r + " must be boolean or number, got " + typeof m;
    } });
  };
}
let Xr = class {
  constructor(e, r, i) {
    this._context = e, this._locations = i, this._textures = /* @__PURE__ */ new Map(), this._freeTextureUnits = new ur({ deallocator: null }), this._glProgram = e.programCache.acquire(r.generateSource("vertex"), r.generateSource("fragment"), i), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this._fragmentUniforms = fo() ? r.fragmentUniforms.entries : null;
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get isCompiled() {
    return this._glProgram.isCompiled;
  }
  setUniform1b(e, r) {
    this._glProgram.setUniform1i(e, r ? 1 : 0);
  }
  setUniform1i(e, r) {
    this._glProgram.setUniform1i(e, r);
  }
  setUniform1f(e, r) {
    this._glProgram.setUniform1f(e, r);
  }
  setUniform1fv(e, r) {
    this._glProgram.setUniform1fv(e, r);
  }
  setUniform1iv(e, r) {
    this._glProgram.setUniform1iv(e, r);
  }
  setUniform2f(e, r, i) {
    this._glProgram.setUniform2f(e, r, i);
  }
  setUniform2fv(e, r) {
    this._glProgram.setUniform2fv(e, r);
  }
  setUniform2iv(e, r) {
    this._glProgram.setUniform2iv(e, r);
  }
  setUniform3f(e, r, i, o) {
    this._glProgram.setUniform3f(e, r, i, o);
  }
  setUniform3fv(e, r) {
    this._glProgram.setUniform3fv(e, r);
  }
  setUniform3iv(e, r) {
    this._glProgram.setUniform3iv(e, r);
  }
  setUniform4f(e, r, i, o, a) {
    this._glProgram.setUniform4f(e, r, i, o, a);
  }
  setUniform4fv(e, r) {
    this._glProgram.setUniform4fv(e, r);
  }
  setUniform4iv(e, r) {
    this._glProgram.setUniform4iv(e, r);
  }
  setUniformMatrix3fv(e, r) {
    this._glProgram.setUniformMatrix3fv(e, r);
  }
  setUniformMatrix4fv(e, r) {
    this._glProgram.setUniformMatrix4fv(e, r);
  }
  assertCompatibleVertexAttributeLocations(e) {
    e.locations !== this._locations && console.error("VertexAttributeLocations are incompatible");
  }
  stop() {
    this._textures.clear(), this._freeTextureUnits.clear();
  }
  bindTexture(e, r) {
    if (W(e) || e.glName == null) {
      const o = this._textures.get(r);
      return o && (this._context.bindTexture(null, o.unit), this._freeTextureUnit(o), this._textures.delete(r)), null;
    }
    let i = this._textures.get(r);
    return i == null ? (i = this._allocTextureUnit(e), this._textures.set(r, i)) : i.texture = e, this._context.useProgram(this), this.setUniform1i(r, i.unit), this._context.bindTexture(e, i.unit), i.unit;
  }
  rebindTextures() {
    this._context.useProgram(this), this._textures.forEach((e, r) => {
      this._context.bindTexture(e.texture, e.unit), this.setUniform1i(r, e.unit);
    }), g(this._fragmentUniforms) && this._fragmentUniforms.forEach((e) => {
      if ((e.type === "sampler2D" || e.type === "samplerCube") && !this._textures.has(e.name))
        throw new Error(`Texture sampler ${e.name} has no bound texture`);
    });
  }
  _allocTextureUnit(e) {
    return { texture: e, unit: this._freeTextureUnits.length === 0 ? this._textures.size : this._freeTextureUnits.pop() };
  }
  _freeTextureUnit(e) {
    this._freeTextureUnits.push(e.unit);
  }
};
ge.LESS;
ge.ALWAYS;
const tn = { mask: 255 }, rn = { function: { func: ge.ALWAYS, ref: fe.OutlineVisualElementMask, mask: fe.OutlineVisualElementMask }, operation: { fail: K.KEEP, zFail: K.KEEP, zPass: K.ZERO } }, on = { function: { func: ge.ALWAYS, ref: fe.OutlineVisualElementMask, mask: fe.OutlineVisualElementMask }, operation: { fail: K.KEEP, zFail: K.KEEP, zPass: K.REPLACE } };
ge.EQUAL, fe.OutlineVisualElementMask, fe.OutlineVisualElementMask, K.KEEP, K.KEEP, K.KEEP;
ge.NOTEQUAL, fe.OutlineVisualElementMask, fe.OutlineVisualElementMask, K.KEEP, K.KEEP, K.KEEP;
function Kr(t, e) {
  e.output === b.Color && e.receiveShadows ? (t.varyings.add("linearDepth", "float"), t.vertex.code.add(n`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)) : e.output === b.Depth || e.output === b.Shadow ? (t.varyings.add("linearDepth", "float"), t.vertex.uniforms.add("nearFar", "vec2"), t.vertex.code.add(n`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)) : t.vertex.code.add(n`void forwardLinearDepth() {}`);
}
function Yr(t) {
  t.vertex.code.add(n`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}
function Ke(t, e) {
  const r = { hasModelTransformation: !1, ...e };
  if (r.hasModelTransformation)
    return r.linearDepth ? void t.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`) : void t.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);
  r.linearDepth ? t.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`) : t.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
}
function Lt(t) {
  t.attributes.add(p.POSITION, "vec3"), t.vertex.code.add(n`vec3 positionModel() { return position; }`);
}
var J;
(function(t) {
  t[t.Multiply = 1] = "Multiply", t[t.Ignore = 2] = "Ignore", t[t.Replace = 3] = "Replace", t[t.Tint = 4] = "Tint";
})(J || (J = {}));
function an(t) {
  t.vertex.code.add(n`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.int(J.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.int(J.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.int(J.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.int(J.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}
function Zr(t, e) {
  e.symbolColor ? (t.include(an), t.attributes.add(p.SYMBOLCOLOR, "vec4"), t.varyings.add("colorMixMode", "mediump float")) : t.fragment.uniforms.add("colorMixMode", "int"), e.symbolColor ? t.vertex.code.add(n`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`) : t.vertex.code.add(n`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);
}
function Qr(t, e) {
  e.attributeColor ? (t.attributes.add(p.COLOR, "vec4"), t.varyings.add("vColor", "vec4"), t.vertex.code.add(n`void forwardVertexColor() { vColor = color; }`), t.vertex.code.add(n`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : t.vertex.code.add(n`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}
function nn(t, e) {
  t.include(Lt), t.vertex.include(Vr, e), t.varyings.add("vPositionWorldCameraRelative", "vec3"), t.varyings.add("vPosition_view", "vec3"), t.vertex.uniforms.add("transformWorldFromModelRS", "mat3"), t.vertex.uniforms.add("transformWorldFromModelTH", "vec3"), t.vertex.uniforms.add("transformWorldFromModelTL", "vec3"), t.vertex.uniforms.add("transformWorldFromViewTH", "vec3"), t.vertex.uniforms.add("transformWorldFromViewTL", "vec3"), t.vertex.uniforms.add("transformViewFromCameraRelativeRS", "mat3"), t.vertex.uniforms.add("transformProjFromView", "mat4"), t.vertex.code.add(n`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`), t.fragment.uniforms.add("transformWorldFromViewTL", "vec3"), t.fragment.code.add(n`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
}
function Jr(t, e) {
  e.normalType === k.Attribute || e.normalType === k.CompressedAttribute ? (t.include(pt, e), t.varyings.add("vNormalWorld", "vec3"), t.varyings.add("vNormalView", "vec3"), t.vertex.uniforms.add("transformNormalGlobalFromModel", "mat3"), t.vertex.uniforms.add("transformNormalViewFromGlobal", "mat3"), t.vertex.code.add(n`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)) : e.normalType === k.Ground ? (t.include(nn, e), t.varyings.add("vNormalWorld", "vec3"), t.vertex.code.add(n`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode === ue.Global ? n`normalize(vPositionWorldCameraRelative);` : n`vec3(0.0, 0.0, 1.0);`}
    }
    `)) : t.vertex.code.add(n`void forwardNormal() {}`);
}
function sn(t, e) {
  t.fragment.include(Dt), e.output === b.Shadow ? (t.extensions.add("GL_OES_standard_derivatives"), t.fragment.code.add(n`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)) : e.output === b.Depth && t.fragment.code.add(n`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);
}
function ei(t, e) {
  const r = t.vertex.code, i = t.fragment.code, o = e.hasModelTransformation;
  e.output !== b.Depth && e.output !== b.Shadow || (t.include(Ke, { linearDepth: !0, hasModelTransformation: o }), t.include($e, e), t.include(Xe, e), t.include(sn, e), t.include(Re, e), t.vertex.uniforms.add("nearFar", "vec2"), t.varyings.add("depth", "float"), e.hasColorTexture && t.fragment.uniforms.add("tex", "sampler2D"), r.add(n`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${o ? "model," : ""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `), t.include(Ee, e), i.add(n`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);` : ""}
        outputDepth(depth);
      }
    `)), e.output === b.Normal && (t.include(Ke, { linearDepth: !1, hasModelTransformation: o }), t.include(pt, e), t.include(Jr, e), t.include($e, e), t.include(Xe, e), e.hasColorTexture && t.fragment.uniforms.add("tex", "sampler2D"), t.vertex.uniforms.add("viewNormal", "mat4"), t.varyings.add("vPositionView", "vec3"), r.add(n`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType === k.Attribute ? n`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : ""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o ? "model," : ""} vpos);
        forwardTextureCoordinates();
      }
    `), t.include(Re, e), t.include(Ee, e), i.add(n`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);` : ""}

        ${e.normalType === k.ScreenDerivative ? n`
            vec3 normal = screenDerivativeNormal(vPositionView);` : n`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)), e.output === b.Highlight && (t.include(Ke, { linearDepth: !1, hasModelTransformation: o }), t.include($e, e), t.include(Xe, e), e.hasColorTexture && t.fragment.uniforms.add("tex", "sampler2D"), r.add(n`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o ? "model," : ""} vpos);
        forwardTextureCoordinates();
      }
    `), t.include(Re, e), t.include(Ee, e), t.include(Ua), i.add(n`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);` : ""}
        outputHighlight();
      }
    `));
}
function ut(t) {
  t.include(Dt), t.code.add(n`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);
}
function ln(t, e) {
  const r = t.fragment;
  e.vertexTangents ? (t.attributes.add(p.TANGENT, "vec4"), t.varyings.add("vTangent", "vec4"), e.doubleSidedMode === q.WindingOrder ? r.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : r.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : (t.extensions.add("GL_OES_standard_derivatives"), r.code.add(n`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)), e.attributeTextureCoordinates !== Y.None && (t.include(Wr, e), r.uniforms.add("normalTexture", "sampler2D"), r.uniforms.add("normalTextureSize", "vec2"), r.code.add(n`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas ? "vtc.size = normalTextureSize;" : ""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));
}
function $t(t, e) {
  const r = t.fragment;
  e.receiveAmbientOcclusion ? (r.uniforms.add("ssaoTex", "sampler2D"), r.uniforms.add("viewportPixelSz", "vec4"), r.code.add(n`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)) : r.code.add(n`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);
}
function cn(t, e) {
  const r = t.fragment, i = e.lightingSphericalHarmonicsOrder !== void 0 ? e.lightingSphericalHarmonicsOrder : 2;
  i === 0 ? (r.uniforms.add("lightingAmbientSH0", "vec3"), r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : i === 1 ? (r.uniforms.add("lightingAmbientSH_R", "vec4"), r.uniforms.add("lightingAmbientSH_G", "vec4"), r.uniforms.add("lightingAmbientSH_B", "vec4"), r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)) : i === 2 && (r.uniforms.add("lightingAmbientSH0", "vec3"), r.uniforms.add("lightingAmbientSH_R1", "vec4"), r.uniforms.add("lightingAmbientSH_G1", "vec4"), r.uniforms.add("lightingAmbientSH_B1", "vec4"), r.uniforms.add("lightingAmbientSH_R2", "vec4"), r.uniforms.add("lightingAmbientSH_G2", "vec4"), r.uniforms.add("lightingAmbientSH_B2", "vec4"), r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`), e.pbrMode !== N.Normal && e.pbrMode !== N.Schematic || r.code.add(n`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
function dn(t) {
  const e = t.fragment;
  e.uniforms.add("lightingMainDirection", "vec3"), e.uniforms.add("lightingMainIntensity", "vec3"), e.uniforms.add("lightingFixedFactor", "float"), e.uniforms.add("lightingSpecularStrength", "float"), e.uniforms.add("lightingEnvironmentStrength", "float"), e.code.add(n`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);
}
function un(t) {
  const e = t.fragment.code;
  e.add(n`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`), e.add(n`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`), e.add(n`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);
}
function ti(t) {
  t.vertex.code.add(n`const float PI = 3.141592653589793;`), t.fragment.code.add(n`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
}
function Ft(t, e) {
  const r = t.fragment.code;
  t.include(ti), e.pbrMode === N.Water || e.pbrMode === N.WaterOnIntegratedMesh ? (r.add(n`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater ? "2.2" : "2.0"};
    `), r.add(n`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`), r.add(n`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`), r.add(n`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`), r.add(n`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)) : e.pbrMode !== N.Normal && e.pbrMode !== N.Schematic || (t.include(un), r.add(n`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`), r.add(n`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`), r.add(n`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`), r.add(n`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`), r.add(n`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`), r.add(n`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));
}
function ri(t, e) {
  const r = t.fragment;
  t.include(dn), t.include($t, e), e.pbrMode !== N.Disabled && t.include(Ft, e), t.include(cn, e), e.receiveShadows && t.include(Nt, e), r.uniforms.add("lightingGlobalFactor", "float"), r.uniforms.add("ambientBoostFactor", "float"), r.uniforms.add("hasFillLights", "bool"), t.include(ti), r.code.add(n`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode === N.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), r.code.add(n`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode === ue.Global ? n`normalize(vPosWorld)` : n`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), r.code.add(n`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`), e.pbrMode === N.Disabled || e.pbrMode === N.WaterOnIntegratedMesh ? r.code.add(n`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`) : e.pbrMode !== N.Normal && e.pbrMode !== N.Schematic || (r.code.add(n`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), r.code.add(n`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), r.code.add(n`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), r.code.add(n`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), r.code.add(n`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode === N.Schematic ? n`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));` : n`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));
}
function mn(t, e) {
  const r = n`
  /*
  *  ${e.name}
  *  ${e.output === b.Color ? "RenderOutput: Color" : e.output === b.Depth ? "RenderOutput: Depth" : e.output === b.Shadow ? "RenderOutput: Shadow" : e.output === b.Normal ? "RenderOutput: Normal" : e.output === b.Highlight ? "RenderOutput: Highlight" : ""}
  */
  `;
  vo() && (t.fragment.code.add(r), t.vertex.code.add(r));
}
function hn(t) {
  t.code.add(n`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);
}
function mt(t) {
  t.include(hn), t.code.add(n`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.int(J.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${n.int(J.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${n.int(J.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.int(J.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${n.int(J.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `);
}
const pn = Qe.getLogger("geoscene.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
class ii {
  constructor() {
    this.includedModules = /* @__PURE__ */ new Map();
  }
  include(e, r) {
    this.includedModules.has(e) ? this.includedModules.get(e) !== r && pn.error("Trying to include shader module multiple times with different sets of options.") : (this.includedModules.set(e, r), e(this.builder, r));
  }
}
class oi extends ii {
  constructor() {
    super(...arguments), this.vertex = new cr(), this.fragment = new cr(), this.attributes = new gn(), this.varyings = new xn(), this.extensions = new Mt(), this.constants = new ai();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms;
  }
  get builder() {
    return this;
  }
  generateSource(e) {
    const r = this.extensions.generateSource(e), i = this.attributes.generateSource(e), o = this.varyings.generateSource(), a = e === "vertex" ? this.vertex : this.fragment, l = a.uniforms.generateSource(), c = a.code.generateSource(), d = e === "vertex" ? Tn : bn, s = this.constants.generateSource().concat(a.constants.generateSource());
    return `
${r.join(`
`)}

${d}

${s.join(`
`)}

${l.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${c.join(`
`)}`;
  }
}
class fn {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, r, i) {
    const o = `${e}_${r}_${i}`;
    return this._entries.set(o, { name: e, type: r, arraySize: i }), this;
  }
  generateSource() {
    const e = (r) => r ? `[${r}]` : "";
    return Array.from(this._entries.values()).map((r) => `uniform ${r.type} ${r.name}${e(r.arraySize)};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}
class vn {
  constructor() {
    this._entries = new Array();
  }
  add(e) {
    this._entries.push(e);
  }
  generateSource() {
    return this._entries;
  }
}
class cr extends ii {
  constructor() {
    super(...arguments), this.uniforms = new fn(), this.code = new vn(), this.constants = new ai();
  }
  get builder() {
    return this;
  }
}
class gn {
  constructor() {
    this._entries = new Array();
  }
  add(e, r) {
    this._entries.push([e, r]);
  }
  generateSource(e) {
    return e === "fragment" ? [] : this._entries.map((r) => `attribute ${r[1]} ${r[0]};`);
  }
}
class xn {
  constructor() {
    this._entries = new Array();
  }
  add(e, r) {
    this._entries.push([e, r]);
  }
  generateSource() {
    return this._entries.map((e) => `varying ${e[1]} ${e[0]};`);
  }
}
let Mt = class wt {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e) {
    this._entries.add(e);
  }
  generateSource(e) {
    const r = e === "vertex" ? wt.ALLOWLIST_VERTEX : wt.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((i) => r.includes(i)).map((i) => `#extension ${i} : enable`);
  }
};
Mt.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], Mt.ALLOWLIST_VERTEX = [];
let ai = class V {
  constructor() {
    this._entries = [];
  }
  add(e, r, i) {
    let o = "ERROR_CONSTRUCTOR_STRING";
    switch (r) {
      case "float":
        o = V._numberToFloatStr(i);
        break;
      case "int":
        o = V._numberToIntStr(i);
        break;
      case "bool":
        o = i.toString();
        break;
      case "vec2":
        o = `vec2(${V._numberToFloatStr(i[0])},                            ${V._numberToFloatStr(i[1])})`;
        break;
      case "vec3":
        o = `vec3(${V._numberToFloatStr(i[0])},                            ${V._numberToFloatStr(i[1])},                            ${V._numberToFloatStr(i[2])})`;
        break;
      case "vec4":
        o = `vec4(${V._numberToFloatStr(i[0])},                            ${V._numberToFloatStr(i[1])},                            ${V._numberToFloatStr(i[2])},                            ${V._numberToFloatStr(i[3])})`;
        break;
      case "ivec2":
        o = `ivec2(${V._numberToIntStr(i[0])},                             ${V._numberToIntStr(i[1])})`;
        break;
      case "ivec3":
        o = `ivec3(${V._numberToIntStr(i[0])},                             ${V._numberToIntStr(i[1])},                             ${V._numberToIntStr(i[2])})`;
        break;
      case "ivec4":
        o = `ivec4(${V._numberToIntStr(i[0])},                             ${V._numberToIntStr(i[1])},                             ${V._numberToIntStr(i[2])},                             ${V._numberToIntStr(i[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        o = `${r}(${Array.prototype.map.call(i, (a) => V._numberToFloatStr(a)).join(", ")})`;
    }
    return this._entries.push(`const ${r} ${e} = ${o};`), this;
  }
  static _numberToIntStr(e) {
    return e.toFixed(0);
  }
  static _numberToFloatStr(e) {
    return Number.isInteger(e) ? e.toFixed(1) : e.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
const bn = `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`, Tn = `precision highp float;
precision highp sampler2D;`;
function _n(t) {
  const e = new oi(), r = e.vertex.code, i = e.fragment.code;
  e.include(mn, { name: "Default Material Shader", output: t.output }), e.vertex.uniforms.add("proj", "mat4").add("view", "mat4").add("cameraPosition", "vec3").add("localOrigin", "vec3");
  const o = t.hasModelTransformation;
  return o && e.vertex.uniforms.add("model", "mat4"), e.include(Lt), e.varyings.add("vpos", "vec3"), e.include(Xe, t), e.include(Hr, t), e.include(kr, t), t.output !== b.Color && t.output !== b.Alpha || (e.include(pt, t), e.include(Ke, { linearDepth: !1, hasModelTransformation: o }), t.normalType === k.Attribute && t.offsetBackfaces && e.include(Yr), e.include(ln, t), e.include(Jr, t), t.instancedColor && e.attributes.add(p.INSTANCECOLOR, "vec4"), e.varyings.add("localvpos", "vec3"), e.include($e, t), e.include(Kr, t), e.include(Zr, t), e.include(Qr, t), e.vertex.uniforms.add("externalColor", "vec4"), e.varyings.add("vcolorExt", "vec4"), t.multipassTerrainEnabled && e.varyings.add("depth", "float"), r.add(n`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor ? "vcolorExt *= instanceColor;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n.float(It)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType === k.Attribute ? n`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, ${o ? "model," : ""} vpos);
          ${t.normalType === k.Attribute && t.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
        }

        ${t.multipassTerrainEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)), t.output === b.Alpha && (e.include(Re, t), e.include(Ee, t), t.multipassTerrainEnabled && (e.fragment.include(ut), e.include(dt, t)), e.fragment.uniforms.add("cameraPosition", "vec3").add("localOrigin", "vec3").add("opacity", "float").add("layerOpacity", "float"), t.hasColorTexture && e.fragment.uniforms.add("tex", "sampler2D"), e.fragment.include(mt), i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${t.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : n`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor ? n`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)), t.output === b.Color && (e.include(Re, t), e.include(ri, t), e.include($t, t), e.include(Ee, t), t.receiveShadows && e.include(Nt, t), t.multipassTerrainEnabled && (e.fragment.include(ut), e.include(dt, t)), e.fragment.uniforms.add("cameraPosition", "vec3").add("localOrigin", "vec3").add("ambient", "vec3").add("diffuse", "vec3").add("opacity", "float").add("layerOpacity", "float"), t.hasColorTexture && e.fragment.uniforms.add("tex", "sampler2D"), e.include(qr, t), e.include(Ft, t), e.fragment.include(mt), e.include(Jo, t), i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${t.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : n`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType === k.ScreenDerivative ? n`
        vec3 normal = screenDerivativeNormal(localvpos);` : n`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode === N.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : t.viewingMode === ue.Global ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor ? n`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture ? n`
              mat3 tangentSpace = ${t.vertexTangents ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);` : "vec3 shadedNormal = normal;"}
        ${t.pbrMode === N.Normal || t.pbrMode === N.Schematic ? t.viewingMode === ue.Global ? n`vec3 normalGround = normalize(vpos + localOrigin);` : n`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : n``}
        ${t.pbrMode === N.Normal || t.pbrMode === N.Schematic ? n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : "vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
      }
    `)), e.include(ei, t), e;
}
const Cn = Object.freeze({ __proto__: null, build: _n }), Sn = Qe.getLogger("geoscene.views.3d.webgl-engine.shaders.DefaultTechnique");
class et extends Ja {
  initializeProgram(e) {
    const r = et.shader.get(), i = this.configuration, o = r.build({ oitEnabled: i.transparencyPassType === Le.Color, output: i.output, viewingMode: e.viewingMode, receiveShadows: i.receiveShadows, slicePlaneEnabled: i.slicePlaneEnabled, sliceHighlightDisabled: i.sliceHighlightDisabled, sliceEnabledForVertexPrograms: !1, symbolColor: i.symbolColors, vvSize: i.vvSize, vvColor: i.vvColor, vvInstancingEnabled: !0, instanced: i.instanced, instancedColor: i.instancedColor, instancedDoublePrecision: i.instancedDoublePrecision, pbrMode: i.usePBR ? i.isSchematic ? N.Schematic : N.Normal : N.Disabled, hasMetalnessAndRoughnessTexture: i.hasMetalnessAndRoughnessTexture, hasEmissionTexture: i.hasEmissionTexture, hasOcclusionTexture: i.hasOcclusionTexture, hasNormalTexture: i.hasNormalTexture, hasColorTexture: i.hasColorTexture, hasModelTransformation: i.hasModelTransformation, receiveAmbientOcclusion: i.receiveAmbientOcclusion, useCustomDTRExponentForWater: !1, normalType: i.normalsTypeDerivate ? k.ScreenDerivative : k.Attribute, doubleSidedMode: i.doubleSidedMode, vertexTangents: i.vertexTangents, attributeTextureCoordinates: i.hasMetalnessAndRoughnessTexture || i.hasEmissionTexture || i.hasOcclusionTexture || i.hasNormalTexture || i.hasColorTexture ? Y.Default : Y.None, textureAlphaPremultiplied: i.textureAlphaPremultiplied, attributeColor: i.vertexColors, screenSizePerspectiveEnabled: i.screenSizePerspective, verticalOffsetEnabled: i.verticalOffset, offsetBackfaces: i.offsetBackfaces, doublePrecisionRequiresObfuscation: Ur(e.rctx), alphaDiscardMode: i.alphaDiscardMode, supportsTextureAtlas: !1, multipassTerrainEnabled: i.multipassTerrainEnabled, cullAboveGround: i.cullAboveGround });
    return new Xr(e.rctx, o, ht);
  }
  bindPass(e, r) {
    var i, o;
    Za(this.program, r.camera.projectionMatrix);
    const a = this.configuration.output;
    this.configuration.hasModelTransformation && (g(e.modelTransformation) ? this.program.setUniformMatrix4fv("model", e.modelTransformation) : Sn.warnOnce("hasModelTransformation true, but no modelTransformation found.")), (this.configuration.output === b.Depth || r.multipassTerrainEnabled || a === b.Shadow) && this.program.setUniform2fv("nearFar", r.camera.nearFar), r.multipassTerrainEnabled && (this.program.setUniform2fv("inverseViewport", r.inverseViewport), ka(this.program, r)), a === b.Alpha && (this.program.setUniform1f("opacity", e.opacity), this.program.setUniform1f("layerOpacity", e.layerOpacity), this.program.setUniform4fv("externalColor", e.externalColor), this.program.setUniform1i("colorMixMode", rr[e.colorMixMode])), a === b.Color ? (r.lighting.setUniforms(this.program, !1, r.hasFillLights), this.program.setUniform3fv("ambient", e.ambient), this.program.setUniform3fv("diffuse", e.diffuse), this.program.setUniform4fv("externalColor", e.externalColor), this.program.setUniform1i("colorMixMode", rr[e.colorMixMode]), this.program.setUniform1f("opacity", e.opacity), this.program.setUniform1f("layerOpacity", e.layerOpacity), this.configuration.usePBR && qa(this.program, e, this.configuration.isSchematic)) : a === b.Highlight && Ha(this.program, r), Ka(this.program, e), Fa(this.program, e, r), va(e.screenSizePerspective, this.program, "screenSizePerspectiveAlignment"), e.textureAlphaMode !== H.Mask && e.textureAlphaMode !== H.MaskBlend || this.program.setUniform1f("textureAlphaCutoff", e.textureAlphaCutoff), (i = r.shadowMap) == null || i.bind(this.program), (o = r.ssaoHelper) == null || o.bind(this.program, r.camera);
  }
  bindDraw(e) {
    const r = this.configuration.instancedDoublePrecision ? Ot(e.camera.viewInverseTransposeMatrix[3], e.camera.viewInverseTransposeMatrix[7], e.camera.viewInverseTransposeMatrix[11]) : e.origin;
    Qa(this.program, r, e.camera.viewMatrix), this.program.rebindTextures(), (this.configuration.output === b.Color || this.configuration.output === b.Alpha || this.configuration.output === b.Depth && this.configuration.screenSizePerspective || this.configuration.output === b.Normal && this.configuration.screenSizePerspective || this.configuration.output === b.Highlight && this.configuration.screenSizePerspective) && Ya(this.program, r, e.camera.viewInverseTransposeMatrix), this.configuration.output === b.Normal && this.program.setUniformMatrix4fv("viewNormal", e.camera.viewInverseTransposeMatrix), this.configuration.instancedDoublePrecision && Na(this.program, r), Ia(this.program, this.configuration, e.slicePlane, { origin: r }), this.configuration.output === b.Color && ja(this.program, e, r);
  }
  _convertDepthTestFunction(e) {
    return e === Je.Lequal ? ge.LEQUAL : ge.LESS;
  }
  _setPipeline(e, r) {
    const i = this.configuration, o = e === Le.NONE, a = e === Le.FrontFace;
    return to({ blending: i.output !== b.Color && i.output !== b.Alpha || !i.transparent ? null : o ? ro : io(e), culling: yn(i) && oo(i.cullFace), depthTest: { func: ao(e, this._convertDepthTestFunction(i.customDepthTest)) }, depthWrite: o || a ? i.writeDepth && no : null, colorWrite: so, stencilWrite: i.sceneHasOcludees ? tn : null, stencilTest: i.sceneHasOcludees ? r ? on : rn : null, polygonOffset: o || a ? null : lo(i.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._setPipeline(this.configuration.transparencyPassType, !0), this._setPipeline(this.configuration.transparencyPassType, !1);
  }
  getPipelineState(e, r) {
    return r ? this._occludeePipelineState : super.getPipelineState(e, r);
  }
}
function yn(t) {
  return t.cullFace ? t.cullFace !== ve.None : !t.slicePlaneEnabled && !t.transparent && !t.doubleSidedMode;
}
et.shader = new jr(Cn, () => import("./DefaultMaterial.glsl-fbl31cD_.js"));
class O extends en {
  constructor() {
    super(...arguments), this.output = b.Color, this.alphaDiscardMode = H.Opaque, this.doubleSidedMode = q.None, this.isSchematic = !1, this.vertexColors = !1, this.offsetBackfaces = !1, this.symbolColors = !1, this.vvSize = !1, this.vvColor = !1, this.verticalOffset = !1, this.receiveShadows = !1, this.slicePlaneEnabled = !1, this.sliceHighlightDisabled = !1, this.receiveAmbientOcclusion = !1, this.screenSizePerspective = !1, this.textureAlphaPremultiplied = !1, this.hasColorTexture = !1, this.usePBR = !1, this.hasMetalnessAndRoughnessTexture = !1, this.hasEmissionTexture = !1, this.hasOcclusionTexture = !1, this.hasNormalTexture = !1, this.instanced = !1, this.instancedColor = !1, this.instancedDoublePrecision = !1, this.vertexTangents = !1, this.normalsTypeDerivate = !1, this.writeDepth = !0, this.sceneHasOcludees = !1, this.transparent = !1, this.enableOffset = !0, this.cullFace = ve.None, this.transparencyPassType = Le.NONE, this.multipassTerrainEnabled = !1, this.cullAboveGround = !1, this.hasModelTransformation = !1, this.customDepthTest = Je.Less;
  }
}
E([R({ count: b.COUNT })], O.prototype, "output", void 0), E([R({ count: H.COUNT })], O.prototype, "alphaDiscardMode", void 0), E([R({ count: q.COUNT })], O.prototype, "doubleSidedMode", void 0), E([R()], O.prototype, "isSchematic", void 0), E([R()], O.prototype, "vertexColors", void 0), E([R()], O.prototype, "offsetBackfaces", void 0), E([R()], O.prototype, "symbolColors", void 0), E([R()], O.prototype, "vvSize", void 0), E([R()], O.prototype, "vvColor", void 0), E([R()], O.prototype, "verticalOffset", void 0), E([R()], O.prototype, "receiveShadows", void 0), E([R()], O.prototype, "slicePlaneEnabled", void 0), E([R()], O.prototype, "sliceHighlightDisabled", void 0), E([R()], O.prototype, "receiveAmbientOcclusion", void 0), E([R()], O.prototype, "screenSizePerspective", void 0), E([R()], O.prototype, "textureAlphaPremultiplied", void 0), E([R()], O.prototype, "hasColorTexture", void 0), E([R()], O.prototype, "usePBR", void 0), E([R()], O.prototype, "hasMetalnessAndRoughnessTexture", void 0), E([R()], O.prototype, "hasEmissionTexture", void 0), E([R()], O.prototype, "hasOcclusionTexture", void 0), E([R()], O.prototype, "hasNormalTexture", void 0), E([R()], O.prototype, "instanced", void 0), E([R()], O.prototype, "instancedColor", void 0), E([R()], O.prototype, "instancedDoublePrecision", void 0), E([R()], O.prototype, "vertexTangents", void 0), E([R()], O.prototype, "normalsTypeDerivate", void 0), E([R()], O.prototype, "writeDepth", void 0), E([R()], O.prototype, "sceneHasOcludees", void 0), E([R()], O.prototype, "transparent", void 0), E([R()], O.prototype, "enableOffset", void 0), E([R({ count: ve.COUNT })], O.prototype, "cullFace", void 0), E([R({ count: Le.COUNT })], O.prototype, "transparencyPassType", void 0), E([R()], O.prototype, "multipassTerrainEnabled", void 0), E([R()], O.prototype, "cullAboveGround", void 0), E([R()], O.prototype, "hasModelTransformation", void 0), E([R({ count: Je.COUNT })], O.prototype, "customDepthTest", void 0);
function An(t) {
  const e = new oi(), r = e.vertex.code, i = e.fragment.code;
  return e.vertex.uniforms.add("proj", "mat4").add("view", "mat4").add("cameraPosition", "vec3").add("localOrigin", "vec3"), e.include(Lt), e.varyings.add("vpos", "vec3"), e.include(Xe, t), e.include(Hr, t), e.include(kr, t), t.output !== b.Color && t.output !== b.Alpha || (e.include(pt, t), e.include(Ke, { linearDepth: !1 }), t.offsetBackfaces && e.include(Yr), t.instancedColor && e.attributes.add(p.INSTANCECOLOR, "vec4"), e.varyings.add("vNormalWorld", "vec3"), e.varyings.add("localvpos", "vec3"), t.multipassTerrainEnabled && e.varyings.add("depth", "float"), e.include($e, t), e.include(Kr, t), e.include(Zr, t), e.include(Qr, t), e.vertex.uniforms.add("externalColor", "vec4"), e.varyings.add("vcolorExt", "vec4"), r.add(n`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor ? "vcolorExt *= instanceColor;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n.float(It)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
          }
          ${t.multipassTerrainEnabled ? n`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), t.output === b.Alpha && (e.include(Re, t), e.include(Ee, t), t.multipassTerrainEnabled && (e.fragment.include(ut), e.include(dt, t)), e.fragment.uniforms.add("cameraPosition", "vec3").add("localOrigin", "vec3").add("opacity", "float").add("layerOpacity", "float"), e.fragment.uniforms.add("view", "mat4"), t.hasColorTexture && e.fragment.uniforms.add("tex", "sampler2D"), e.fragment.include(mt), i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled ? n`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${t.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : n`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor ? n`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)), t.output === b.Color && (e.include(Re, t), e.include(ri, t), e.include($t, t), e.include(Ee, t), t.receiveShadows && e.include(Nt, t), t.multipassTerrainEnabled && (e.fragment.include(ut), e.include(dt, t)), e.fragment.uniforms.add("cameraPosition", "vec3").add("localOrigin", "vec3").add("ambient", "vec3").add("diffuse", "vec3").add("opacity", "float").add("layerOpacity", "float"), e.fragment.uniforms.add("view", "mat4"), t.hasColorTexture && e.fragment.uniforms.add("tex", "sampler2D"), e.include(qr, t), e.include(Ft, t), e.fragment.include(mt), i.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled ? n`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${t.hasColorTexture ? n`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : n`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode === N.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : t.viewingMode === ue.Global ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor ? n`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${n`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode === N.Normal || t.pbrMode === N.Schematic ? t.viewingMode === ue.Global ? n`vec3 normalGround = normalize(vpos + localOrigin);` : n`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : n``}
        ${t.pbrMode === N.Normal || t.pbrMode === N.Schematic ? n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : "vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
      }
    `)), e.include(ei, t), e;
}
const Mn = Object.freeze({ __proto__: null, build: An });
class ft extends et {
  initializeProgram(e) {
    const r = ft.shader.get(), i = this.configuration, o = r.build({ oitEnabled: i.transparencyPassType === Le.Color, output: i.output, viewingMode: e.viewingMode, receiveShadows: i.receiveShadows, slicePlaneEnabled: i.slicePlaneEnabled, sliceHighlightDisabled: i.sliceHighlightDisabled, sliceEnabledForVertexPrograms: !1, symbolColor: i.symbolColors, vvSize: i.vvSize, vvColor: i.vvColor, vvInstancingEnabled: !0, instanced: i.instanced, instancedColor: i.instancedColor, instancedDoublePrecision: i.instancedDoublePrecision, pbrMode: i.usePBR ? N.Normal : N.Disabled, hasMetalnessAndRoughnessTexture: !1, hasEmissionTexture: !1, hasOcclusionTexture: !1, hasNormalTexture: !1, hasColorTexture: i.hasColorTexture, hasModelTransformation: !1, receiveAmbientOcclusion: i.receiveAmbientOcclusion, useCustomDTRExponentForWater: !1, normalType: k.Attribute, doubleSidedMode: q.WindingOrder, vertexTangents: !1, attributeTextureCoordinates: i.hasColorTexture ? Y.Default : Y.None, textureAlphaPremultiplied: i.textureAlphaPremultiplied, attributeColor: i.vertexColors, screenSizePerspectiveEnabled: i.screenSizePerspective, verticalOffsetEnabled: i.verticalOffset, offsetBackfaces: i.offsetBackfaces, doublePrecisionRequiresObfuscation: Ur(e.rctx), alphaDiscardMode: i.alphaDiscardMode, supportsTextureAtlas: !1, multipassTerrainEnabled: i.multipassTerrainEnabled, cullAboveGround: i.cullAboveGround });
    return new Xr(e.rctx, o, ht);
  }
}
ft.shader = new jr(Mn, () => import("./RealisticTree.glsl-SgqQD1nY.js"));
class ni extends Ta {
  constructor(e) {
    super(e, On), this.supportsEdges = !0, this.techniqueConfig = new O(), this.vertexBufferLayout = En(this.parameters), this.instanceBufferLayout = e.instanced ? Rn(this.parameters) : null;
  }
  isVisibleInPass(e) {
    return e !== xt.MATERIAL_DEPTH_SHADOWMAP_ALL && e !== xt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT && e !== xt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT || this.parameters.castShadows;
  }
  isVisible() {
    const e = this.parameters;
    if (!super.isVisible() || e.layerOpacity === 0)
      return !1;
    const r = e.instanced, i = e.vertexColors, o = e.symbolColors, a = !!r && r.indexOf("color") > -1, l = e.vvColorEnabled, c = e.colorMixMode === "replace", d = e.opacity > 0, s = e.externalColor && e.externalColor[3] > 0;
    return i && (a || l || o) ? !!c || d : i ? c ? s : d : a || l || o ? !!c || d : c ? s : d;
  }
  getTechniqueConfig(e, r) {
    return this.techniqueConfig.output = e, this.techniqueConfig.hasNormalTexture = !!this.parameters.normalTextureId, this.techniqueConfig.hasColorTexture = !!this.parameters.textureId, this.techniqueConfig.vertexTangents = this.parameters.vertexTangents, this.techniqueConfig.instanced = !!this.parameters.instanced, this.techniqueConfig.instancedDoublePrecision = this.parameters.instancedDoublePrecision, this.techniqueConfig.vvSize = this.parameters.vvSizeEnabled, this.techniqueConfig.verticalOffset = this.parameters.verticalOffset !== null, this.techniqueConfig.screenSizePerspective = this.parameters.screenSizePerspective !== null, this.techniqueConfig.slicePlaneEnabled = this.parameters.slicePlaneEnabled, this.techniqueConfig.sliceHighlightDisabled = this.parameters.sliceHighlightDisabled, this.techniqueConfig.alphaDiscardMode = this.parameters.textureAlphaMode, this.techniqueConfig.normalsTypeDerivate = this.parameters.normals === "screenDerivative", this.techniqueConfig.transparent = this.parameters.transparent, this.techniqueConfig.writeDepth = this.parameters.writeDepth, g(this.parameters.customDepthTest) && (this.techniqueConfig.customDepthTest = this.parameters.customDepthTest), this.techniqueConfig.sceneHasOcludees = this.parameters.sceneHasOcludees, this.techniqueConfig.cullFace = this.parameters.slicePlaneEnabled ? ve.None : this.parameters.cullFace, this.techniqueConfig.multipassTerrainEnabled = r.multipassTerrainEnabled, this.techniqueConfig.cullAboveGround = r.cullAboveGround, this.techniqueConfig.hasModelTransformation = g(this.parameters.modelTransformation), e !== b.Color && e !== b.Alpha || (this.techniqueConfig.vertexColors = this.parameters.vertexColors, this.techniqueConfig.symbolColors = this.parameters.symbolColors, this.parameters.treeRendering ? this.techniqueConfig.doubleSidedMode = q.WindingOrder : this.techniqueConfig.doubleSidedMode = this.parameters.doubleSided && this.parameters.doubleSidedType === "normal" ? q.View : this.parameters.doubleSided && this.parameters.doubleSidedType === "winding-order" ? q.WindingOrder : q.None, this.techniqueConfig.instancedColor = !!this.parameters.instanced && this.parameters.instanced.indexOf("color") > -1, this.techniqueConfig.receiveShadows = this.parameters.receiveShadows && this.parameters.shadowMappingEnabled, this.techniqueConfig.receiveAmbientOcclusion = !!r.ssaoEnabled && this.parameters.receiveSSAO, this.techniqueConfig.vvColor = this.parameters.vvColorEnabled, this.techniqueConfig.textureAlphaPremultiplied = !!this.parameters.textureAlphaPremultiplied, this.techniqueConfig.usePBR = this.parameters.usePBR, this.techniqueConfig.hasMetalnessAndRoughnessTexture = !!this.parameters.metallicRoughnessTextureId, this.techniqueConfig.hasEmissionTexture = !!this.parameters.emissiveTextureId, this.techniqueConfig.hasOcclusionTexture = !!this.parameters.occlusionTextureId, this.techniqueConfig.offsetBackfaces = !(!this.parameters.transparent || !this.parameters.offsetTransparentBackfaces), this.techniqueConfig.isSchematic = this.parameters.usePBR && this.parameters.isSchematic, this.techniqueConfig.transparencyPassType = r.transparencyPassType, this.techniqueConfig.enableOffset = r.camera.relativeElevation < co), this.techniqueConfig;
  }
  intersect(e, r, i, o, a, l, c) {
    if (this.parameters.verticalOffset !== null) {
      const d = o.camera;
      lt(_t, i[12], i[13], i[14]);
      let s = null;
      switch (o.viewingMode) {
        case ue.Global:
          s = Pt(dr, _t);
          break;
        case ue.Local:
          s = ot(dr, Nn);
      }
      let u = 0;
      if (this.parameters.verticalOffset !== null) {
        const f = Oe(Ln, _t, d.eye), m = vr(f), x = kt(f, f, 1 / m);
        let h = null;
        this.parameters.screenSizePerspective && (h = Ei(s, x)), u += fa(d, m, this.parameters.verticalOffset, h, this.parameters.screenSizePerspective);
      }
      kt(s, s, u), Ri(Tt, s, o.transform.inverseRotation), a = Oe(In, a, Tt), l = Oe(Dn, l, Tt);
    }
    ca(e, r, o, a, l, Aa(o.verticalOffset), c);
  }
  requiresSlot(e) {
    return e === (this.parameters.transparent ? this.parameters.writeDepth ? tt.TRANSPARENT_MATERIAL : tt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : tt.OPAQUE_MATERIAL) || e === tt.DRAPED_MATERIAL;
  }
  createGLMaterial(e) {
    return e.output === b.Color || e.output === b.Alpha || e.output === b.Depth || e.output === b.Normal || e.output === b.Shadow || e.output === b.Highlight ? new wn(e) : null;
  }
  createBufferWriter() {
    return new Pn(this.vertexBufferLayout, this.instanceBufferLayout);
  }
}
let wn = class extends ra {
  constructor(e) {
    super({ ...e, ...e.material.parameters });
  }
  updateParameters(e) {
    const r = this._material.parameters;
    return this.updateTexture(r.textureId), this.ensureTechnique(r.treeRendering ? ft : et, e);
  }
  _updateShadowState(e) {
    e.shadowMappingEnabled !== this._material.parameters.shadowMappingEnabled && this._material.setParameters({ shadowMappingEnabled: e.shadowMappingEnabled });
  }
  _updateOccludeeState(e) {
    e.hasOccludees !== this._material.parameters.sceneHasOcludees && this._material.setParameters({ sceneHasOcludees: e.hasOccludees });
  }
  beginSlot(e) {
    return this._output !== b.Color && this._output !== b.Alpha || (this._updateShadowState(e), this._updateOccludeeState(e)), this.updateParameters(e);
  }
  bind(e, r) {
    r.bindPass(this._material.parameters, e), this.bindTextures(r.program);
  }
};
const On = { textureId: void 0, initTextureTransparent: !1, isSchematic: !1, usePBR: !1, normalTextureId: void 0, vertexTangents: !1, occlusionTextureId: void 0, emissiveTextureId: void 0, metallicRoughnessTextureId: void 0, emissiveFactor: [0, 0, 0], mrrFactors: [0, 1, 0.5], ambient: [0.2, 0.2, 0.2], diffuse: [0.8, 0.8, 0.8], externalColor: [1, 1, 1, 1], colorMixMode: "multiply", opacity: 1, layerOpacity: 1, vertexColors: !1, symbolColors: !1, doubleSided: !1, doubleSidedType: "normal", cullFace: ve.Back, instanced: void 0, instancedDoublePrecision: !1, normals: "default", receiveSSAO: !0, fillLightsEnabled: !0, receiveShadows: !0, castShadows: !0, shadowMappingEnabled: !1, verticalOffset: null, screenSizePerspective: null, slicePlaneEnabled: !1, sliceHighlightDisabled: !1, offsetTransparentBackfaces: !1, vvSizeEnabled: !1, vvSizeMinSize: [1, 1, 1], vvSizeMaxSize: [100, 100, 100], vvSizeOffset: [0, 0, 0], vvSizeFactor: [1, 1, 1], vvSizeValue: [1, 1, 1], vvColorEnabled: !1, vvColorValues: [0, 0, 0, 0, 0, 0, 0, 0], vvColorColors: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], vvSymbolAnchor: [0, 0, 0], vvSymbolRotationMatrix: _r(), modelTransformation: null, transparent: !1, writeDepth: !0, customDepthTest: Je.Less, textureAlphaMode: H.Blend, textureAlphaCutoff: ea, textureAlphaPremultiplied: !1, sceneHasOcludees: !1, ..._a };
class Pn {
  constructor(e, r) {
    this.vertexBufferLayout = e, this.instanceBufferLayout = r;
  }
  allocate(e) {
    return this.vertexBufferLayout.createBuffer(e);
  }
  elementCount(e) {
    return e.indices.get(p.POSITION).length;
  }
  write(e, r, i, o) {
    Ra(r, this.vertexBufferLayout, e.transformation, e.invTranspTransformation, i, o);
  }
}
function En(t) {
  const e = t.textureId || t.normalTextureId || t.metallicRoughnessTextureId || t.emissiveTextureId || t.occlusionTextureId, r = Mr().vec3f(p.POSITION).vec3f(p.NORMAL);
  return t.vertexTangents && r.vec4f(p.TANGENT), e && r.vec2f(p.UV0), t.vertexColors && r.vec4u8(p.COLOR), t.symbolColors && r.vec4u8(p.SYMBOLCOLOR), r;
}
function Rn(t) {
  let e = Mr();
  return e = t.instancedDoublePrecision ? e.vec3f(p.MODELORIGINHI).vec3f(p.MODELORIGINLO).mat3f(p.MODEL).mat3f(p.MODELNORMAL) : e.mat4f(p.MODEL).mat4f(p.MODELNORMAL), t.instanced && t.instanced.indexOf("color") > -1 && (e = e.vec4f(p.INSTANCECOLOR)), t.instanced && t.instanced.indexOf("featureAttribute") > -1 && (e = e.vec4f(p.INSTANCEFEATUREATTRIBUTE)), e;
}
const In = U(), Dn = U(), Nn = Ot(0, 0, 1), dr = U(), Tt = U(), _t = U(), Ln = U(), le = Qe.getLogger("geoscene.views.3d.layers.graphics.objectResourceUtils");
async function $n(t, e) {
  const r = await Fn(t, e);
  return { resource: r, textures: await Un(r.textureDefinitions, e) };
}
async function Fn(t, e) {
  const r = g(e) && e.streamDataRequester;
  if (r)
    return zn(t, r, e);
  const i = await gr(Ii(t, Di(e)));
  if (i.ok === !0)
    return i.value.data;
  xr(i.error), si(i.error);
}
async function zn(t, e, r) {
  const i = await gr(e.request(t, "json", r));
  if (i.ok === !0)
    return i.value;
  xr(i.error), si(i.error.details.url);
}
function si(t) {
  throw new hr("", `Request for object resource failed: ${t}`);
}
function Bn(t) {
  const e = t.params, r = e.topology;
  let i = !0;
  switch (e.vertexAttributes || (le.warn("Geometry must specify vertex attributes"), i = !1), e.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const a = e.faces;
      if (a) {
        if (e.vertexAttributes)
          for (const l in e.vertexAttributes) {
            const c = a[l];
            c && c.values ? (c.valueType != null && c.valueType !== "UInt32" && (le.warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`), i = !1), c.valuesPerElement != null && c.valuesPerElement !== 1 && (le.warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`), i = !1)) : (le.warn(`Indexed geometry does not specify face indices for '${l}' attribute`), i = !1);
          }
      } else
        le.warn("Indexed geometries must specify faces"), i = !1;
      break;
    }
    default:
      le.warn(`Unsupported topology '${r}'`), i = !1;
  }
  t.params.material || (le.warn("Geometry requires material"), i = !1);
  const o = t.params.vertexAttributes;
  for (const a in o)
    o[a].values || (le.warn("Geometries with externally defined attributes are not yet supported"), i = !1);
  return i;
}
function Gn(t, e) {
  const r = [], i = [], o = [], a = [], l = t.resource, c = yr.parse(l.version || "1.0", "wosr");
  kn.validate(c);
  const d = l.model.name, s = l.model.geometries, u = l.materialDefinitions, f = t.textures;
  let m = 0;
  const x = /* @__PURE__ */ new Map();
  for (let h = 0; h < s.length; h++) {
    const _ = s[h];
    if (!Bn(_))
      continue;
    const C = Hn(_), T = _.params.vertexAttributes, G = [];
    for (const v in T) {
      const A = T[v], L = A.values;
      G.push([v, { data: L, size: A.valuesPerElement, exclusive: !0 }]);
    }
    const w = [];
    if (_.params.topology !== "PerAttributeArray") {
      const v = _.params.faces;
      for (const A in v)
        w.push([A, new Uint32Array(v[A].values)]);
    }
    const M = f && f[C.texture];
    if (M && !x.has(C.texture)) {
      const { image: v, params: A } = M, L = new ce(v, A);
      a.push(L), x.set(C.texture, L);
    }
    const D = x.get(C.texture), S = D ? D.id : void 0;
    let y = o[C.material] ? o[C.material][C.texture] : null;
    if (!y) {
      const v = u[C.material.substring(C.material.lastIndexOf("/") + 1)].params;
      v.transparency === 1 && (v.transparency = 0);
      const A = M && M.alphaChannelUsage, L = v.transparency > 0 || A === "transparency" || A === "maskAndTransparency", $ = M ? li(M.alphaChannelUsage) : void 0, I = { ambient: Wt(v.diffuse), diffuse: Wt(v.diffuse), opacity: 1 - (v.transparency || 0), transparent: L, textureAlphaMode: $, textureAlphaCutoff: 0.33, textureId: S, initTextureTransparent: !0, doubleSided: !0, cullFace: ve.None, colorMixMode: v.externalColorMixMode || "tint", textureAlphaPremultiplied: !!M && !!M.params.preMultiplyAlpha };
      g(e) && e.materialParamsMixin && Object.assign(I, e.materialParamsMixin), y = new ni(I), o[C.material] || (o[C.material] = {}), o[C.material][C.texture] = y;
    }
    i.push(y);
    const P = new Or(G, w);
    m += w.position ? w.position.length : 0, r.push(P);
  }
  return { name: d, stageResources: { textures: a, materials: i, geometries: r }, pivotOffset: l.model.pivotOffset, boundingBox: Vn(r), numberOfVertices: m, lodThreshold: null };
}
function Vn(t) {
  const e = br();
  return t.forEach((r) => {
    const i = r.boundingInfo;
    g(i) && (ct(e, i.getBBMin()), ct(e, i.getBBMax()));
  }), e;
}
async function Un(t, e) {
  const r = [];
  for (const a in t) {
    const l = t[a], c = l.images[0].data;
    if (!c) {
      le.warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const d = l.encoding + ";base64," + c, s = "/textureDefinitions/" + a, u = l.channels === "rgba" ? l.alphaChannelUsage || "transparency" : "none", f = { noUnpackFlip: !0, wrap: { s: De.REPEAT, t: De.REPEAT }, preMultiplyAlpha: li(u) !== H.Opaque }, m = g(e) && e.disableTextures ? Promise.resolve(null) : Ar(d, e);
    r.push(m.then((x) => ({ refId: s, image: x, params: f, alphaChannelUsage: u })));
  }
  const i = await Promise.all(r), o = {};
  for (const a of i)
    o[a.refId] = a;
  return o;
}
function li(t) {
  switch (t) {
    case "mask":
      return H.Mask;
    case "maskAndTransparency":
      return H.MaskBlend;
    case "none":
      return H.Opaque;
    default:
      return H.Blend;
  }
}
function Hn(t) {
  const e = t.params;
  return { id: 1, material: e.material, texture: e.texture, region: e.texture };
}
const kn = new yr(1, 2, "wosr");
async function Wn(t, e) {
  const r = ci(di(t));
  if (r.fileType === "wosr") {
    const d = await (e.cache ? e.cache.loadWOSR(r.url, e) : $n(r.url, e)), s = Gn(d, e);
    return { lods: [s], referenceBoundingBox: s.boundingBox, isEsriSymbolResource: !1, isWosr: !0, remove: d.remove };
  }
  const i = await (e.cache ? e.cache.loadGLTF(r.url, e, e.usePBR) : Wi(new qi(e.streamDataRequester), r.url, e, e.usePBR)), o = Ni(i.model.meta, "ESRI_proxyEllipsoid");
  i.meta.isEsriSymbolResource && g(o) && i.meta.uri.indexOf("/RealisticTrees/") !== -1 && Xn(i, o);
  const a = i.meta.isEsriSymbolResource ? { usePBR: e.usePBR, isSchematic: !1, treeRendering: i.customMeta.geosceneTreeRendering, mrrFactors: [0, 1, 0.2] } : { usePBR: e.usePBR, isSchematic: !1, mrrFactors: [0, 1, 0.5] }, l = { ...e.materialParamsMixin, treeRendering: i.customMeta.geosceneTreeRendering };
  if (r.specifiedLodIndex != null) {
    const d = nt(i, a, l, r.specifiedLodIndex);
    let s = d[0].boundingBox;
    return r.specifiedLodIndex !== 0 && (s = nt(i, a, l, 0)[0].boundingBox), { lods: d, referenceBoundingBox: s, isEsriSymbolResource: i.meta.isEsriSymbolResource, isWosr: !1, remove: i.remove };
  }
  const c = nt(i, a, l);
  return { lods: c, referenceBoundingBox: c[0].boundingBox, isEsriSymbolResource: i.meta.isEsriSymbolResource, isWosr: !1, remove: i.remove };
}
function ci(t) {
  const e = t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  return e ? { fileType: "gltf", url: e[1], specifiedLodIndex: e[4] != null ? Number(e[4]) : null } : t.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: t, specifiedLodIndex: null } : { fileType: "unknown", url: t, specifiedLodIndex: null };
}
function nt(t, e, r, i) {
  const o = t.model, a = _r(), l = new Array(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  return o.lods.forEach((s, u) => {
    if (i !== void 0 && u !== i)
      return;
    const f = { name: s.name, stageResources: { textures: new Array(), materials: new Array(), geometries: new Array() }, lodThreshold: g(s.lodThreshold) ? s.lodThreshold : null, pivotOffset: [0, 0, 0], numberOfVertices: 0, boundingBox: br() };
    l.push(f), s.parts.forEach((m) => {
      const x = m.material + (m.attributes.normal ? "_normal" : "") + (m.attributes.color ? "_color" : "") + (m.attributes.texCoord0 ? "_texCoord0" : "") + (m.attributes.tangent ? "_tangent" : ""), h = o.materials.get(m.material), _ = g(m.attributes.texCoord0), C = g(m.attributes.normal), T = qn(h.alphaMode);
      if (!c.has(x)) {
        if (_) {
          if (g(h.textureColor) && !d.has(h.textureColor)) {
            const B = o.textures.get(h.textureColor), Z = { ...B.parameters, preMultiplyAlpha: T !== H.Opaque };
            d.set(h.textureColor, new ce(B.data, Z));
          }
          if (g(h.textureNormal) && !d.has(h.textureNormal)) {
            const B = o.textures.get(h.textureNormal);
            d.set(h.textureNormal, new ce(B.data, B.parameters));
          }
          if (g(h.textureOcclusion) && !d.has(h.textureOcclusion)) {
            const B = o.textures.get(h.textureOcclusion);
            d.set(h.textureOcclusion, new ce(B.data, B.parameters));
          }
          if (g(h.textureEmissive) && !d.has(h.textureEmissive)) {
            const B = o.textures.get(h.textureEmissive);
            d.set(h.textureEmissive, new ce(B.data, B.parameters));
          }
          if (g(h.textureMetallicRoughness) && !d.has(h.textureMetallicRoughness)) {
            const B = o.textures.get(h.textureMetallicRoughness);
            d.set(h.textureMetallicRoughness, new ce(B.data, B.parameters));
          }
        }
        const v = h.color[0] ** (1 / Ie), A = h.color[1] ** (1 / Ie), L = h.color[2] ** (1 / Ie), $ = h.emissiveFactor[0] ** (1 / Ie), I = h.emissiveFactor[1] ** (1 / Ie), z = h.emissiveFactor[2] ** (1 / Ie), F = g(h.textureColor) && _ ? d.get(h.textureColor) : null;
        c.set(x, new ni({ ...e, transparent: T === H.Blend, customDepthTest: Je.Lequal, textureAlphaMode: T, textureAlphaCutoff: h.alphaCutoff, diffuse: [v, A, L], ambient: [v, A, L], opacity: h.opacity, doubleSided: h.doubleSided, doubleSidedType: "winding-order", cullFace: h.doubleSided ? ve.None : ve.Back, vertexColors: !!m.attributes.color, vertexTangents: !!m.attributes.tangent, normals: C ? "default" : "screenDerivative", castShadows: !0, receiveSSAO: !0, fillLightsEnabled: !0, textureId: g(F) ? F.id : void 0, colorMixMode: h.colorMixMode, normalTextureId: g(h.textureNormal) && _ ? d.get(h.textureNormal).id : void 0, textureAlphaPremultiplied: g(F) && !!F.params.preMultiplyAlpha, occlusionTextureId: g(h.textureOcclusion) && _ ? d.get(h.textureOcclusion).id : void 0, emissiveTextureId: g(h.textureEmissive) && _ ? d.get(h.textureEmissive).id : void 0, metallicRoughnessTextureId: g(h.textureMetallicRoughness) && _ ? d.get(h.textureMetallicRoughness).id : void 0, emissiveFactor: [$, I, z], mrrFactors: [h.metallicFactor, h.roughnessFactor, e.mrrFactors[2]], isSchematic: !1, ...r }));
      }
      const G = jn(m.indices || m.attributes.position.count, m.primitiveType), w = m.attributes.position.count, M = Me(Ne, w);
      $i(M, m.attributes.position, m.transform);
      const D = [[p.POSITION, { data: M.typedBuffer, size: M.elementCount, exclusive: !0 }]], S = [[p.POSITION, G]];
      if (g(m.attributes.normal)) {
        const v = Me(Ne, w);
        qt(a, m.transform), Fi(v, m.attributes.normal, a), D.push([p.NORMAL, { data: v.typedBuffer, size: v.elementCount, exclusive: !0 }]), S.push([p.NORMAL, G]);
      }
      if (g(m.attributes.tangent)) {
        const v = Me(St, w);
        qt(a, m.transform), ji(v, m.attributes.tangent, a), D.push([p.TANGENT, { data: v.typedBuffer, size: v.elementCount, exclusive: !0 }]), S.push([p.TANGENT, G]);
      }
      if (g(m.attributes.texCoord0)) {
        const v = Me(Cr, w);
        Xi(v, m.attributes.texCoord0), D.push([p.UV0, { data: v.typedBuffer, size: v.elementCount, exclusive: !0 }]), S.push([p.UV0, G]);
      }
      if (g(m.attributes.color)) {
        const v = Me(Ye, w);
        if (m.attributes.color.elementCount === 4)
          m.attributes.color instanceof St ? Zt(v, m.attributes.color, 255) : m.attributes.color instanceof Ye ? Ki(v, m.attributes.color) : m.attributes.color instanceof Bi && Zt(v, m.attributes.color, 1 / 256);
        else {
          Yi(v, 255, 255, 255, 255);
          const A = new Kt(v.buffer, 0, 4);
          m.attributes.color instanceof Ne ? Xt(A, m.attributes.color, 255) : m.attributes.color instanceof Kt ? zi(A, m.attributes.color) : m.attributes.color instanceof Gi && Xt(A, m.attributes.color, 1 / 256);
        }
        D.push([p.COLOR, { data: v.typedBuffer, size: v.elementCount, exclusive: !0 }]), S.push([p.COLOR, G]);
      }
      const y = new Or(D, S);
      f.stageResources.geometries.push(y), f.stageResources.materials.push(c.get(x)), _ && (g(h.textureColor) && f.stageResources.textures.push(d.get(h.textureColor)), g(h.textureNormal) && f.stageResources.textures.push(d.get(h.textureNormal)), g(h.textureOcclusion) && f.stageResources.textures.push(d.get(h.textureOcclusion)), g(h.textureEmissive) && f.stageResources.textures.push(d.get(h.textureEmissive)), g(h.textureMetallicRoughness) && f.stageResources.textures.push(d.get(h.textureMetallicRoughness))), f.numberOfVertices += w;
      const P = y.boundingInfo;
      g(P) && (ct(f.boundingBox, P.getBBMin()), ct(f.boundingBox, P.getBBMax()));
    });
  }), l;
}
function qn(t) {
  switch (t) {
    case "BLEND":
      return H.Blend;
    case "MASK":
      return H.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return H.Opaque;
  }
}
function jn(t, e) {
  switch (e) {
    case qe.TRIANGLES:
      return Ji(t);
    case qe.TRIANGLE_STRIP:
      return Qi(t);
    case qe.TRIANGLE_FAN:
      return Zi(t);
  }
}
function Xn(t, e) {
  for (let r = 0; r < t.model.lods.length; ++r) {
    const i = t.model.lods[r];
    t.customMeta.geosceneTreeRendering = !0;
    for (const o of i.parts) {
      const a = o.attributes.normal;
      if (W(a))
        return;
      const l = o.attributes.position, c = l.count, d = U(), s = U(), u = U(), f = Me(Ye, c), m = Me(Ne, c), x = Li(Tr(), o.transform);
      for (let h = 0; h < c; h++) {
        l.getVec(h, s), a.getVec(h, d), We(s, s, o.transform), Oe(u, s, e.center), jt(u, u, e.radius);
        const _ = u[2], C = vr(u), T = Math.min(0.45 + 0.55 * C * C, 1);
        jt(u, u, e.radius), We(u, u, x), Pt(u, u), r + 1 !== t.model.lods.length && t.model.lods.length > 1 && Ct(u, u, d, _ > -1 ? 0.2 : Math.min(-4 * _ - 3.8, 1)), m.setVec(h, u), f.set(h, 0, 255 * T), f.set(h, 1, 255 * T), f.set(h, 2, 255 * T), f.set(h, 3, 255);
      }
      o.attributes.normal = m, o.attributes.color = f;
    }
  }
}
const _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fetch: Wn,
  gltfToEngineResources: nt,
  parseUrl: ci
}, Symbol.toStringTag, { value: "Module" }));
export {
  _n as $,
  An as _,
  _s as o
};

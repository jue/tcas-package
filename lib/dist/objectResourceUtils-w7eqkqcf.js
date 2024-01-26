import { a as Ei } from "./devEnvironmentUtils-HhcOP4Aw.js";
import { bA as mo, lo as Ri, lp as $i, lq as qt, dQ as Je, F as Pr, bz as Li, g_ as Pi, bt as fo, bi as ze, cc as Mt, hu as tr, bh as P, ht as Ii, fR as po, ce as we, i7 as ur, bU as vo, ep as K, ch as le, cg as fe, lr as Ni, hg as Xe, eg as Di, s as hr, eB as Fi, cI as Ir, af as zi, eD as st, jh as lt, b5 as Nr, ls as Vi, fL as Bi, fO as Ui, dR as rr, H as mr, hR as Hi, fQ as Ye, gE as Ne, dL as Gi, k4 as Wi, aX as ki, lt as ji, lu as qi, bW as fr, at as Xi, hF as Ki, eF as Dr, lv as go, lw as xo, hp as Qi, hn as Ft, je as or, a as f, bJ as oe, i8 as zt, gU as pr, b as W, c as Zi, b3 as Ji, gS as Et, hw as Yi, es as Rt, fs as To, hd as ir, lx as ar, cd as ea, bT as ta, eq as ra, z as oa, gA as _o, ae as ia, cq as bo, fU as So, ly as Ao, h$ as $t, hf as aa, k5 as Fr } from "./index-HxXrdrYt.js";
import { e as xt } from "./mat3f64-Hpz0k8AN.js";
import { o as Ke, r as na, e as Vt } from "./mat4f64-kAXAVCnO.js";
import { x as Bt, c as nr, y as sa, u as la, q as ca, i as Lt, L as da, O as ua, E as ha } from "./BufferView-1zPuZK8o.js";
import { r as ma, n as fa, u as zr } from "./vec32-9QTi3NEX.js";
import { l as pa, n as va, i as He, o as ga, j as xa, k as Ta, u as Vr, t as _a, m as ba } from "./DefaultMaterial_COLOR_GAMMA-pfFhNuf4.js";
import { t as Xt } from "./resourceUtils-OYKAQSQ8.js";
import { e as Sa } from "./byteSizeEstimations-ZWOmCZBv.js";
import { t as Aa } from "./NestedMap-CBPqzy-K.js";
import { t as yo } from "./requestImageUtils-ywrCBi5N.js";
import { t as ya, u as ct, N as sr, a as Oe, i as X, n as Me, e as Tt } from "./basicInterfaces-qgybO4Nz.js";
import { y as Br, t as Ca } from "./Indices-EI5Mlgt1.js";
import { s as H, H as wa } from "./InterleavedLayout-87pAr1r3.js";
import { s as Co, _ as wo } from "./sphere-NWuWAz0g.js";
import { v as Oa } from "./lineSegment-tpGKYDPu.js";
import { O as h } from "./VertexAttribute-g45rDpm-.js";
import { f as Ae, G as Ge, L as Qe, D as dt, E as Ma, I as Ee, O as ne, C as ce } from "./enums-Vyj7xNgv.js";
import { T as ut, E as Ea, e as Ra, b as $a } from "./Texture-X07ZHrz1.js";
import { o as s, n as vr, W as gr, _ as xr, a as Ze, c as La, A as Pa, h as Ia, l as Na, b as Da, d as Fa, S as za } from "./OrderIndependentTransparency-I6xtnkaq.js";
import { S as Va } from "./quat-tmewNzgu.js";
import { e as Ba } from "./quatf64-7HSf-W7T.js";
import { n as Ua } from "./vec3f32-BgIjjdRt.js";
import { o as Ha, r as Ga } from "./doublePrecisionUtils-YlAjf9o0.js";
import { n as be } from "./symbolColorUtils-II0vHsdR.js";
import { t as de } from "./VertexElementDescriptor-L2lGUBx9.js";
import "./VertexArrayObject-2WiKUGbv.js";
let We = class {
  constructor(e, r, o = !1, i = r) {
    this.data = e, this.size = r, this.exclusive = o, this.stride = i;
  }
};
function bt(t, e = !1) {
  return t <= mo ? e ? new Array(t).fill(0) : new Array(t) : new Float32Array(t);
}
function it(t) {
  if (t == null)
    return null;
  const e = t.offset != null ? t.offset : Ri, r = t.rotation != null ? t.rotation : 0, o = t.scale != null ? t.scale : $i, i = qt(1, 0, 0, 0, 1, 0, e[0], e[1], 1), a = qt(Math.cos(r), -Math.sin(r), 0, Math.sin(r), Math.cos(r), 0, 0, 0, 1), n = qt(o[0], 0, 0, 0, o[1], 0, 0, 0, 1), l = Je();
  return Pr(l, a, n), Pr(l, i, l), l;
}
let Wa = class {
  constructor() {
    this.geometries = new Array(), this.materials = new Array(), this.textures = new Array();
  }
}, ka = class {
  constructor(e, r, o) {
    this.name = e, this.lodThreshold = r, this.pivotOffset = o, this.stageResources = new Wa(), this.numberOfVertices = 0;
  }
};
function ja(t) {
  if (t.length < mo)
    return Array.from(t);
  if (Li(t))
    return Float64Array.from(t);
  if (!("BYTES_PER_ELEMENT" in t))
    return Array.from(t);
  switch (t.BYTES_PER_ELEMENT) {
    case 1:
      return Uint8Array.from(t);
    case 2:
      return Pi(t) ? Uint16Array.from(t) : Int16Array.from(t);
    case 4:
      return Float32Array.from(t);
    default:
      return Float64Array.from(t);
  }
}
let qa = class Oo {
  constructor(e, r, o, i) {
    this.primitiveIndices = e, this._numIndexPerPrimitive = r, this.indices = o, this.position = i, this._children = void 0, H(e.length >= 1), H(o.length % this._numIndexPerPrimitive == 0), H(o.length >= e.length * this._numIndexPerPrimitive), H(i.size === 3 || i.size === 4);
    const { data: a, size: n } = i, l = e.length;
    let c = n * o[this._numIndexPerPrimitive * e[0]];
    De.clear(), De.push(c);
    const d = ze(a[c], a[c + 1], a[c + 2]), u = Mt(d);
    for (let p = 0; p < l; ++p) {
      const g = this._numIndexPerPrimitive * e[p];
      for (let _ = 0; _ < this._numIndexPerPrimitive; ++_) {
        c = n * o[g + _], De.push(c);
        let T = a[c];
        d[0] = Math.min(T, d[0]), u[0] = Math.max(T, u[0]), T = a[c + 1], d[1] = Math.min(T, d[1]), u[1] = Math.max(T, u[1]), T = a[c + 2], d[2] = Math.min(T, d[2]), u[2] = Math.max(T, u[2]);
      }
    }
    this.bbMin = d, this.bbMax = u;
    const m = tr(P(), this.bbMin, this.bbMax, 0.5);
    this.radius = 0.5 * Math.max(Math.max(u[0] - d[0], u[1] - d[1]), u[2] - d[2]);
    let v = this.radius * this.radius;
    for (let p = 0; p < De.length; ++p) {
      c = De.at(p);
      const g = a[c] - m[0], _ = a[c + 1] - m[1], T = a[c + 2] - m[2], O = g * g + _ * _ + T * T;
      if (O <= v)
        continue;
      const D = Math.sqrt(O), M = 0.5 * (D - this.radius);
      this.radius = this.radius + M, v = this.radius * this.radius;
      const R = M / D;
      m[0] += g * R, m[1] += _ * R, m[2] += T * R;
    }
    this.center = m, De.clear();
  }
  getChildren() {
    if (this._children || Ii(this.bbMin, this.bbMax) <= 1)
      return this._children;
    const e = tr(P(), this.bbMin, this.bbMax, 0.5), r = this.primitiveIndices.length, o = new Uint8Array(r), i = new Array(8);
    for (let d = 0; d < 8; ++d)
      i[d] = 0;
    const { data: a, size: n } = this.position;
    for (let d = 0; d < r; ++d) {
      let u = 0;
      const m = this._numIndexPerPrimitive * this.primitiveIndices[d];
      let v = n * this.indices[m], p = a[v], g = a[v + 1], _ = a[v + 2];
      for (let T = 1; T < this._numIndexPerPrimitive; ++T) {
        v = n * this.indices[m + T];
        const O = a[v], D = a[v + 1], M = a[v + 2];
        O < p && (p = O), D < g && (g = D), M < _ && (_ = M);
      }
      p < e[0] && (u |= 1), g < e[1] && (u |= 2), _ < e[2] && (u |= 4), o[d] = u, ++i[u];
    }
    let l = 0;
    for (let d = 0; d < 8; ++d)
      i[d] > 0 && ++l;
    if (l < 2)
      return;
    const c = new Array(8);
    for (let d = 0; d < 8; ++d)
      c[d] = i[d] > 0 ? new Uint32Array(i[d]) : void 0;
    for (let d = 0; d < 8; ++d)
      i[d] = 0;
    for (let d = 0; d < r; ++d) {
      const u = o[d];
      c[u][i[u]++] = this.primitiveIndices[d];
    }
    this._children = new Array();
    for (let d = 0; d < 8; ++d)
      c[d] !== void 0 && this._children.push(new Oo(c[d], this._numIndexPerPrimitive, this.indices, this.position));
    return this._children;
  }
  static prune() {
    De.prune();
  }
};
const De = new fo({ deallocator: null });
let Tr = class {
  constructor() {
    this.id = po();
  }
  unload() {
  }
};
var ye;
(function(t) {
  t[t.Layer = 0] = "Layer", t[t.Object = 1] = "Object", t[t.Mesh = 2] = "Mesh", t[t.Line = 3] = "Line", t[t.Point = 4] = "Point", t[t.Material = 5] = "Material", t[t.Texture = 6] = "Texture", t[t.COUNT = 7] = "COUNT";
})(ye || (ye = {}));
function Xa(t) {
  return t ? { p0: Mt(t.p0), p1: Mt(t.p1), p2: Mt(t.p2) } : { p0: P(), p1: P(), p2: P() };
}
function Ka(t, e, r) {
  return we(Kt, e, t), we(Ur, r, t), ur(vo(Kt, Kt, Ur)) / 2;
}
new Co(Oa);
new Co(() => Xa());
const Kt = P(), Ur = P();
function Qa(t, e, r) {
  if (!t || !e)
    return !1;
  const { size: o, data: i } = t;
  K(r, 0, 0, 0), K(ae, 0, 0, 0);
  let a = 0, n = 0;
  for (let l = 0; l < e.length - 2; l += 3) {
    const c = e[l] * o, d = e[l + 1] * o, u = e[l + 2] * o;
    K(q, i[c], i[c + 1], i[c + 2]), K(Se, i[d], i[d + 1], i[d + 2]), K(St, i[u], i[u + 1], i[u + 2]);
    const m = Ka(q, Se, St);
    m ? (le(q, q, Se), le(q, q, St), fe(q, q, 1 / 3 * m), le(r, r, q), a += m) : (le(ae, ae, q), le(ae, ae, Se), le(ae, ae, St), n += 3);
  }
  return (n !== 0 || a !== 0) && (a !== 0 ? (fe(r, r, 1 / a), !0) : n !== 0 && (fe(r, ae, 1 / n), !0));
}
function Za(t, e, r) {
  if (!t || !e)
    return !1;
  const { size: o, data: i } = t;
  K(r, 0, 0, 0);
  let a = -1, n = 0;
  for (let l = 0; l < e.length; l++) {
    const c = e[l] * o;
    a !== c && (r[0] += i[c], r[1] += i[c + 1], r[2] += i[c + 2], n++), a = c;
  }
  return n > 1 && fe(r, r, 1 / n), n > 0;
}
function Ja(t, e, r, o) {
  if (!t)
    return !1;
  K(o, 0, 0, 0), K(ae, 0, 0, 0);
  let i = 0, a = 0;
  const { size: n, data: l } = t, c = e ? e.length - 1 : l.length / n - 1, d = c + (r ? 2 : 0);
  for (let u = 0; u < d; u += 2) {
    const m = u < c ? u : c, v = u < c ? u + 1 : 0, p = (e ? e[m] : m) * n, g = (e ? e[v] : v) * n;
    q[0] = l[p], q[1] = l[p + 1], q[2] = l[p + 2], Se[0] = l[g], Se[1] = l[g + 1], Se[2] = l[g + 2], fe(q, le(q, q, Se), 0.5);
    const _ = Ni(q, Se);
    _ > 0 ? (le(o, o, fe(q, q, _)), i += _) : i === 0 && (le(ae, ae, q), a++);
  }
  return i !== 0 ? (fe(o, o, 1 / i), !0) : a !== 0 && (fe(o, ae, 1 / a), !0);
}
const q = P(), Se = P(), St = P(), ae = P();
let Ya = class {
  constructor(e) {
    this.channel = e, this.id = po();
  }
};
function en(t, e) {
  return t == null && (t = []), t.push(e), t;
}
function tn(t, e) {
  if (t == null)
    return null;
  const r = t.filter((o) => o !== e);
  return r.length === 0 ? null : r;
}
let Mo = class Eo extends Tr {
  constructor(e, r, o = [], i = null, a = ye.Mesh, n = null, l = -1) {
    super(), this.material = e, this.mapPositions = i, this.type = a, this.objectAndLayerIdColor = n, this.edgeIndicesLength = l, this.visible = !0, this._vertexAttributes = /* @__PURE__ */ new Map(), this._indices = /* @__PURE__ */ new Map(), this._boundingInfo = null;
    for (const [c, d] of r)
      d && this._vertexAttributes.set(c, { ...d });
    if (o == null || o.length === 0) {
      const c = rn(this._vertexAttributes), d = Br(c);
      this.edgeIndicesLength = this.edgeIndicesLength < 0 ? c : this.edgeIndicesLength;
      for (const u of this._vertexAttributes.keys())
        this._indices.set(u, d);
    } else
      for (const [c, d] of o)
        d && (this._indices.set(c, Ca(d)), c === h.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._indices.get(c).length : this.edgeIndicesLength));
  }
  instantiate(e = {}) {
    const r = new Eo(e.material || this.material, [], void 0, this.mapPositions, this.type, this.objectAndLayerIdColor, this.edgeIndicesLength);
    return this._vertexAttributes.forEach((o, i) => {
      o.exclusive = !1, r._vertexAttributes.set(i, o);
    }), this._indices.forEach((o, i) => r._indices.set(i, o)), r._boundingInfo = this._boundingInfo, r.transformation = e.transformation || this.transformation, r;
  }
  get vertexAttributes() {
    return this._vertexAttributes;
  }
  getMutableAttribute(e) {
    let r = this._vertexAttributes.get(e);
    return r && !r.exclusive && (r = { ...r, exclusive: !0, data: ja(r.data) }, this._vertexAttributes.set(e, r)), r;
  }
  setAttributeData(e, r) {
    const o = this._vertexAttributes.get(e);
    o && this._vertexAttributes.set(e, { ...o, exclusive: !0, data: r });
  }
  get indices() {
    return this._indices;
  }
  get indexCount() {
    const e = this._indices.values().next().value;
    return e ? e.length : 0;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return this._boundingInfo == null && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(e) {
    return !!(this.type === ye.Mesh ? this._computeAttachmentOriginTriangles(e) : this.type === ye.Line ? this._computeAttachmentOriginLines(e) : this._computeAttachmentOriginPoints(e)) && (this._transformation != null && Xe(e, e, this._transformation), !0);
  }
  _computeAttachmentOriginTriangles(e) {
    const r = this.indices.get(h.POSITION), o = this.vertexAttributes.get(h.POSITION);
    return Qa(o, r, e);
  }
  _computeAttachmentOriginLines(e) {
    const r = this.vertexAttributes.get(h.POSITION), o = this.indices.get(h.POSITION);
    return Ja(r, o, o && on(this.material.parameters, r, o), e);
  }
  _computeAttachmentOriginPoints(e) {
    const r = this.indices.get(h.POSITION), o = this.vertexAttributes.get(h.POSITION);
    return Za(o, r, e);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const e = this.indices.get(h.POSITION), r = this.vertexAttributes.get(h.POSITION);
    if (!e || e.length === 0 || !r)
      return null;
    const o = this.type === ye.Mesh ? 3 : 1;
    H(e.length % o == 0, "Indexing error: " + e.length + " not divisible by " + o);
    const i = Br(e.length / o);
    return new qa(i, o, e, r);
  }
  get transformation() {
    return this._transformation ?? Ke;
  }
  set transformation(e) {
    this._transformation = e && e !== Ke ? na(e) : null;
  }
  get shaderTransformation() {
    return this._shaderTransformer != null ? this._shaderTransformer(this.transformation) : this.transformation;
  }
  get shaderTransformer() {
    return this._shaderTransformer;
  }
  set shaderTransformer(e) {
    this._shaderTransformer = e;
  }
  get hasVolatileTransformation() {
    return this._shaderTransformer != null;
  }
  addHighlight() {
    const e = new Ya(ya.Highlight);
    return this.highlights = en(this.highlights, e), e;
  }
  removeHighlight(e) {
    this.highlights = tn(this.highlights, e);
  }
};
function rn(t) {
  const e = t.values().next().value;
  return e == null ? 0 : e.data.length / e.size;
}
function on(t, e, r) {
  return !(!("isClosed" in t) || !t.isClosed) && (r ? r.length > 2 : e.data.length > 6);
}
function an() {
  if (Qt == null) {
    const t = (e) => Di(`geoscene/libs/basisu/${e}`);
    Qt = import("./basis_transcoder-WSkdVjxp.js").then((e) => e.b).then(({ default: e }) => e({ locateFile: t }).then((r) => (r.initializeBasis(), delete r.then, r)));
  }
  return Qt;
}
let Qt;
var Fe;
(function(t) {
  t[t.ETC1_RGB = 0] = "ETC1_RGB", t[t.ETC2_RGBA = 1] = "ETC2_RGBA", t[t.BC1_RGB = 2] = "BC1_RGB", t[t.BC3_RGBA = 3] = "BC3_RGBA", t[t.BC4_R = 4] = "BC4_R", t[t.BC5_RG = 5] = "BC5_RG", t[t.BC7_M6_RGB = 6] = "BC7_M6_RGB", t[t.BC7_M5_RGBA = 7] = "BC7_M5_RGBA", t[t.PVRTC1_4_RGB = 8] = "PVRTC1_4_RGB", t[t.PVRTC1_4_RGBA = 9] = "PVRTC1_4_RGBA", t[t.ASTC_4x4_RGBA = 10] = "ASTC_4x4_RGBA", t[t.ATC_RGB = 11] = "ATC_RGB", t[t.ATC_RGBA = 12] = "ATC_RGBA", t[t.FXT1_RGB = 17] = "FXT1_RGB", t[t.PVRTC2_4_RGB = 18] = "PVRTC2_4_RGB", t[t.PVRTC2_4_RGBA = 19] = "PVRTC2_4_RGBA", t[t.ETC2_EAC_R11 = 20] = "ETC2_EAC_R11", t[t.ETC2_EAC_RG11 = 21] = "ETC2_EAC_RG11", t[t.RGBA32 = 13] = "RGBA32", t[t.RGB565 = 14] = "RGB565", t[t.BGR565 = 15] = "BGR565", t[t.RGBA4444 = 16] = "RGBA4444";
})(Fe || (Fe = {}));
let ue = null, At = null;
async function Ro() {
  return At == null && (At = an(), ue = await At), At;
}
function nn(t, e) {
  if (ue == null)
    return t.byteLength;
  const r = new ue.BasisFile(new Uint8Array(t)), o = Lo(r) ? $o(r.getNumLevels(0), r.getHasAlpha(), r.getImageWidth(0, 0), r.getImageHeight(0, 0), e) : 0;
  return r.close(), r.delete(), o;
}
function sn(t, e) {
  if (ue == null)
    return t.byteLength;
  const r = new ue.KTX2File(new Uint8Array(t)), o = Po(r) ? $o(r.getLevels(), r.getHasAlpha(), r.getWidth(), r.getHeight(), e) : 0;
  return r.close(), r.delete(), o;
}
function $o(t, e, r, o, i) {
  const a = Ea(e ? Ae.COMPRESSED_RGBA8_ETC2_EAC : Ae.COMPRESSED_RGB8_ETC2), n = i && t > 1 ? (4 ** t - 1) / (3 * 4 ** (t - 1)) : 1;
  return Math.ceil(r * o * a * n);
}
function Lo(t) {
  return t.getNumImages() >= 1 && !t.isUASTC();
}
function Po(t) {
  return t.getFaces() >= 1 && t.isETC1S();
}
async function ln(t, e, r) {
  ue == null && (ue = await Ro());
  const o = new ue.BasisFile(new Uint8Array(r));
  if (!Lo(o))
    return null;
  o.startTranscoding();
  const i = Io(t, e, o.getNumLevels(0), o.getHasAlpha(), o.getImageWidth(0, 0), o.getImageHeight(0, 0), (a, n) => o.getImageTranscodedSizeInBytes(0, a, n), (a, n, l) => o.transcodeImage(l, 0, a, n, 0, 0));
  return o.close(), o.delete(), i;
}
async function cn(t, e, r) {
  ue == null && (ue = await Ro());
  const o = new ue.KTX2File(new Uint8Array(r));
  if (!Po(o))
    return null;
  o.startTranscoding();
  const i = Io(t, e, o.getLevels(), o.getHasAlpha(), o.getWidth(), o.getHeight(), (a, n) => o.getImageTranscodedSizeInBytes(a, 0, 0, n), (a, n, l) => o.transcodeImage(l, a, 0, 0, n, 0, -1, -1));
  return o.close(), o.delete(), i;
}
function Io(t, e, r, o, i, a, n, l) {
  const { compressedTextureETC: c, compressedTextureS3TC: d } = t.capabilities, [u, m] = c ? o ? [Fe.ETC2_RGBA, Ae.COMPRESSED_RGBA8_ETC2_EAC] : [Fe.ETC1_RGB, Ae.COMPRESSED_RGB8_ETC2] : d ? o ? [Fe.BC3_RGBA, Ae.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [Fe.BC1_RGB, Ae.COMPRESSED_RGB_S3TC_DXT1_EXT] : [Fe.RGBA32, Ge.RGBA], v = e.hasMipmap ? r : Math.min(1, r), p = [];
  for (let g = 0; g < v; g++)
    p.push(new Uint8Array(n(g, u))), l(g, u, p[g]);
  return e.internalFormat = m, e.hasMipmap = p.length > 1, e.samplingMode = e.hasMipmap ? Qe.LINEAR_MIPMAP_LINEAR : Qe.LINEAR, e.width = i, e.height = a, new ut(t, e, { type: "compressed", levels: p });
}
const yt = hr.getLogger("geoscene.views.3d.webgl-engine.lib.DDSUtil"), dn = 542327876, un = 131072, hn = 4;
function _r(t) {
  return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24);
}
function mn(t) {
  return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
}
const fn = _r("DXT1"), pn = _r("DXT3"), vn = _r("DXT5"), gn = 31, xn = 0, Tn = 1, _n = 2, bn = 3, Sn = 4, An = 7, yn = 20, Cn = 21;
function wn(t, e, r) {
  const o = On(r, e.hasMipmap ?? !1);
  if (o == null)
    throw new Error("DDS texture data is null");
  const { textureData: i, internalFormat: a, width: n, height: l } = o;
  return e.samplingMode = i.levels.length > 1 ? Qe.LINEAR_MIPMAP_LINEAR : Qe.LINEAR, e.hasMipmap = i.levels.length > 1, e.internalFormat = a, e.width = n, e.height = l, new ut(t, e, i);
}
function On(t, e) {
  const r = new Int32Array(t, 0, gn);
  if (r[xn] !== dn)
    return yt.error("Invalid magic number in DDS header"), null;
  if (!(r[yn] & hn))
    return yt.error("Unsupported format, must contain a FourCC code"), null;
  const o = r[Cn];
  let i, a;
  switch (o) {
    case fn:
      i = 8, a = Ae.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case pn:
      i = 16, a = Ae.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case vn:
      i = 16, a = Ae.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return yt.error("Unsupported FourCC code:", mn(o)), null;
  }
  let n = 1, l = r[Sn], c = r[bn];
  !(3 & l) && !(3 & c) || (yt.warn("Rounding up compressed texture size to nearest multiple of 4."), l = l + 3 & -4, c = c + 3 & -4);
  const d = l, u = c;
  let m, v;
  r[_n] & un && e !== !1 && (n = Math.max(1, r[An]));
  let p = r[Tn] + 4;
  const g = [];
  for (let _ = 0; _ < n; ++_)
    v = (l + 3 >> 2) * (c + 3 >> 2) * i, m = new Uint8Array(t, p, v), g.push(m), p += v, l = Math.max(1, l >> 1), c = Math.max(1, c >> 1);
  return { textureData: { type: "compressed", levels: g }, internalFormat: a, width: d, height: u };
}
let No = class extends Tr {
  constructor(e, r) {
    super(), this._data = e, this.type = ye.Texture, this._glTexture = null, this._loadingPromise = null, this._loadingController = null, this.events = new Fi(), this.parameters = r || {}, this.parameters.mipmap = this.parameters.mipmap !== !1, this.parameters.noUnpackFlip = this.parameters.noUnpackFlip || !1, this.parameters.preMultiplyAlpha = this.parameters.preMultiplyAlpha || !1, this.parameters.wrap = this.parameters.wrap || { s: dt.REPEAT, t: dt.REPEAT }, this._startPreload(e);
  }
  _startPreload(e) {
    e != null && (e instanceof HTMLVideoElement ? this._startPreloadVideoElement(e) : e instanceof HTMLImageElement && this._startPreloadImageElement(e));
  }
  _startPreloadVideoElement(e) {
    if (!(Ir(e.src) || e.preload === "auto" && e.crossOrigin)) {
      e.preload = "auto", e.crossOrigin = "anonymous";
      const r = !e.paused;
      if (e.src = e.src, r && e.autoplay) {
        const o = () => {
          e.removeEventListener("canplay", o), e.play();
        };
        e.addEventListener("canplay", o);
      }
    }
  }
  _startPreloadImageElement(e) {
    zi(e.src) || Ir(e.src) || e.crossOrigin || (e.crossOrigin = "anonymous", e.src = e.src);
  }
  dispose() {
    this._data = void 0;
  }
  _createDescriptor(e) {
    const r = new Ra();
    return r.wrapMode = this.parameters.wrap ?? dt.REPEAT, r.flipped = !this.parameters.noUnpackFlip, r.samplingMode = this.parameters.mipmap ? Qe.LINEAR_MIPMAP_LINEAR : Qe.LINEAR, r.hasMipmap = !!this.parameters.mipmap, r.preMultiplyAlpha = !!this.parameters.preMultiplyAlpha, r.maxAnisotropy = this.parameters.maxAnisotropy ?? (this.parameters.mipmap ? e.parameters.maxMaxAnisotropy : 1), r;
  }
  get glTexture() {
    return this._glTexture;
  }
  get memoryEstimate() {
    var e;
    return ((e = this._glTexture) == null ? void 0 : e.gpuMemoryUsage) || Mn(this._data, this.parameters);
  }
  load(e) {
    if (this._glTexture != null)
      return this._glTexture;
    if (this._loadingPromise)
      return this._loadingPromise;
    const r = this._data;
    return r == null ? (this._glTexture = new ut(e, this._createDescriptor(e), null), this._glTexture) : typeof r == "string" ? this._loadFromURL(e, r) : r instanceof Image ? this._loadFromImageElement(e, r) : r instanceof HTMLVideoElement ? this._loadFromVideoElement(e, r) : r instanceof ImageData || r instanceof HTMLCanvasElement ? this._loadFromImage(e, r) : (st(r) || lt(r)) && this.parameters.encoding === ct.DDS_ENCODING ? (this._data = void 0, this._loadFromDDSData(e, r)) : (st(r) || lt(r)) && this.parameters.encoding === ct.KTX2_ENCODING ? (this._data = void 0, this._loadFromKTX2(e, r)) : (st(r) || lt(r)) && this.parameters.encoding === ct.BASIS_ENCODING ? (this._data = void 0, this._loadFromBasis(e, r)) : lt(r) ? this._loadFromPixelData(e, r) : st(r) ? this._loadFromPixelData(e, new Uint8Array(r)) : null;
  }
  get requiresFrameUpdates() {
    return this._data instanceof HTMLVideoElement;
  }
  frameUpdate(e) {
    return this._data instanceof HTMLVideoElement && this._glTexture != null ? this._data.readyState < ht.HAVE_CURRENT_DATA || e === this._data.currentTime ? e : (this._glTexture.setData(this._data), this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this.parameters.updateCallback && this.parameters.updateCallback(), this._data.currentTime) : e;
  }
  _loadFromDDSData(e, r) {
    return this._glTexture = wn(e, this._createDescriptor(e), r), this._glTexture;
  }
  _loadFromKTX2(e, r) {
    return this._loadAsync(() => cn(e, this._createDescriptor(e), r).then((o) => (this._glTexture = o, o)));
  }
  _loadFromBasis(e, r) {
    return this._loadAsync(() => ln(e, this._createDescriptor(e), r).then((o) => (this._glTexture = o, o)));
  }
  _loadFromPixelData(e, r) {
    H(this.parameters.width > 0 && this.parameters.height > 0);
    const o = this._createDescriptor(e);
    return o.pixelFormat = this.parameters.components === 1 ? Ge.LUMINANCE : this.parameters.components === 3 ? Ge.RGB : Ge.RGBA, o.width = this.parameters.width ?? 0, o.height = this.parameters.height ?? 0, this._glTexture = new ut(e, o, r), this._glTexture;
  }
  _loadFromURL(e, r) {
    return this._loadAsync(async (o) => {
      const i = await yo(r, { signal: o });
      return Nr(o), this._loadFromImage(e, i);
    });
  }
  _loadFromImageElement(e, r) {
    return r.complete ? this._loadFromImage(e, r) : this._loadAsync(async (o) => {
      const i = await Vi(r, r.src, !1, o);
      return Nr(o), this._loadFromImage(e, i);
    });
  }
  _loadFromVideoElement(e, r) {
    return r.readyState >= ht.HAVE_CURRENT_DATA ? this._loadFromImage(e, r) : this._loadFromVideoElementAsync(e, r);
  }
  _loadFromVideoElementAsync(e, r) {
    return this._loadAsync((o) => new Promise((i, a) => {
      const n = () => {
        r.removeEventListener("loadeddata", l), r.removeEventListener("error", c), Hi(d);
      }, l = () => {
        r.readyState >= ht.HAVE_CURRENT_DATA && (n(), i(this._loadFromImage(e, r)));
      }, c = (u) => {
        n(), a(u || new mr("Failed to load video"));
      };
      r.addEventListener("loadeddata", l), r.addEventListener("error", c);
      const d = Bi(o, () => c(Ui()));
    }));
  }
  _loadFromImage(e, r) {
    const o = Do(r);
    this.parameters.width = o.width, this.parameters.height = o.height;
    const i = this._createDescriptor(e);
    return i.pixelFormat = this.parameters.components === 3 ? Ge.RGB : Ge.RGBA, i.width = o.width, i.height = o.height, this._glTexture = new ut(e, i, r), this._glTexture;
  }
  _loadAsync(e) {
    const r = new AbortController();
    this._loadingController = r;
    const o = e(r.signal);
    this._loadingPromise = o;
    const i = () => {
      this._loadingController === r && (this._loadingController = null), this._loadingPromise === o && (this._loadingPromise = null);
    };
    return o.then(i, i), o;
  }
  unload() {
    if (this._glTexture = rr(this._glTexture), this._loadingController != null) {
      const e = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, e.abort();
    }
    this.events.emit("unloaded");
  }
};
function Mn(t, e) {
  if (t == null)
    return 0;
  if (st(t) || lt(t))
    return e.encoding === ct.KTX2_ENCODING ? sn(t, !!e.mipmap) : e.encoding === ct.BASIS_ENCODING ? nn(t, !!e.mipmap) : t.byteLength;
  const { width: r, height: o } = t instanceof Image || t instanceof ImageData || t instanceof HTMLCanvasElement || t instanceof HTMLVideoElement ? Do(t) : e;
  return (e.mipmap ? 4 / 3 : 1) * r * o * (e.components || 4) || 0;
}
function Do(t) {
  return t instanceof HTMLVideoElement ? { width: t.videoWidth, height: t.videoHeight } : t;
}
var ht;
(function(t) {
  t[t.HAVE_NOTHING = 0] = "HAVE_NOTHING", t[t.HAVE_METADATA = 1] = "HAVE_METADATA", t[t.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", t[t.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", t[t.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
})(ht || (ht = {}));
var y;
(function(t) {
  t[t.Color = 0] = "Color", t[t.Depth = 1] = "Depth", t[t.Normal = 2] = "Normal", t[t.Shadow = 3] = "Shadow", t[t.ShadowHighlight = 4] = "ShadowHighlight", t[t.ShadowExcludeHighlight = 5] = "ShadowExcludeHighlight", t[t.Highlight = 6] = "Highlight", t[t.Alpha = 7] = "Alpha", t[t.ObjectAndLayerIdColor = 8] = "ObjectAndLayerIdColor", t[t.COUNT = 9] = "COUNT";
})(y || (y = {}));
function Ut(t, e) {
  switch (e.normalType) {
    case B.Compressed:
      t.attributes.add(h.NORMALCOMPRESSED, "vec2"), t.vertex.code.add(s`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);
      break;
    case B.Attribute:
      t.attributes.add(h.NORMAL, "vec3"), t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);
      break;
    case B.ScreenDerivative:
      t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);
      break;
    default:
      Ye(e.normalType);
    case B.COUNT:
    case B.Ground:
  }
}
var B;
(function(t) {
  t[t.Attribute = 0] = "Attribute", t[t.Compressed = 1] = "Compressed", t[t.Ground = 2] = "Ground", t[t.ScreenDerivative = 3] = "ScreenDerivative", t[t.COUNT = 4] = "COUNT";
})(B || (B = {}));
function En(t, e) {
  const r = t.fragment;
  switch (r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), e.doubleSidedMode) {
    case re.None:
      r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case re.View:
      r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case re.WindingOrder:
      r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      Ye(e.doubleSidedMode);
    case re.COUNT:
  }
}
var re;
(function(t) {
  t[t.None = 0] = "None", t[t.View = 1] = "View", t[t.WindingOrder = 2] = "WindingOrder", t[t.COUNT = 3] = "COUNT";
})(re || (re = {}));
var Y;
function qe(t, e) {
  switch (e.textureCoordinateType) {
    case Y.Default:
      return t.attributes.add(h.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);
    case Y.Compressed:
      return t.attributes.add(h.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);
    case Y.Atlas:
      return t.attributes.add(h.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), t.attributes.add(h.UVREGION, "vec4"), t.varyings.add("vuvRegion", "vec4"), void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      Ye(e.textureCoordinateType);
    case Y.None:
      return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);
    case Y.COUNT:
      return;
  }
}
(function(t) {
  t[t.None = 0] = "None", t[t.Default = 1] = "Default", t[t.Atlas = 2] = "Atlas", t[t.Compressed = 3] = "Compressed", t[t.COUNT = 4] = "COUNT";
})(Y || (Y = {}));
function Rn(t) {
  t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);
}
function Fo(t, e) {
  switch (t.include(qe, e), e.textureCoordinateType) {
    case Y.Default:
    case Y.Compressed:
      return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);
    case Y.Atlas:
      return t.include(Rn), void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);
    default:
      Ye(e.textureCoordinateType);
    case Y.None:
    case Y.COUNT:
      return;
  }
}
var z;
(function(t) {
  t[t.Pass = 0] = "Pass", t[t.Draw = 1] = "Draw";
})(z || (z = {}));
let J = class {
  constructor(e, r, o, i, a = null) {
    this.name = e, this.type = r, this.arraySize = a, this.bind = { [z.Pass]: null, [z.Draw]: null }, o != null && i != null && (this.bind[o] = i);
  }
  equals(e) {
    return this.type === e.type && this.name === e.name && this.arraySize === e.arraySize;
  }
}, he = class extends J {
  constructor(e, r) {
    super(e, "vec3", z.Draw, (o, i, a, n) => o.setUniform3fv(e, r(i, a, n)));
  }
}, Q = class extends J {
  constructor(e, r) {
    super(e, "vec3", z.Pass, (o, i, a) => o.setUniform3fv(e, r(i, a)));
  }
}, mt = class extends J {
  constructor(e, r) {
    super(e, "sampler2D", z.Draw, (o, i, a) => o.bindTexture(e, r(i, a)));
  }
}, Z = class extends J {
  constructor(e, r) {
    super(e, "sampler2D", z.Pass, (o, i, a) => o.bindTexture(e, r(i, a)));
  }
}, $n = class {
  constructor(e) {
    this._material = e.material, this._techniqueRepository = e.techniqueRep, this._output = e.output;
  }
  dispose() {
    this._techniqueRepository.release(this._technique);
  }
  get technique() {
    return this._technique;
  }
  get _stippleTextureRepository() {
    return this._techniqueRepository.constructionContext.stippleTextureRepository;
  }
  get _markerTextureRepository() {
    return this._techniqueRepository.constructionContext.markerTextureRepository;
  }
  ensureTechnique(e, r) {
    return this._technique = this._techniqueRepository.releaseAndAcquire(e, this._material.getConfiguration(this._output, r), this._technique), this._technique;
  }
  ensureResources(e) {
    return sr.LOADED;
  }
}, Ln = class extends $n {
  constructor(e) {
    super(e), this._numLoading = 0, this._disposed = !1, this._textureRepository = e.textureRep, this._textureId = e.textureId, this._acquire(e.textureId, (r) => this._texture = r), this._acquire(e.normalTextureId, (r) => this._textureNormal = r), this._acquire(e.emissiveTextureId, (r) => this._textureEmissive = r), this._acquire(e.occlusionTextureId, (r) => this._textureOcclusion = r), this._acquire(e.metallicRoughnessTextureId, (r) => this._textureMetallicRoughness = r);
  }
  dispose() {
    this._texture = Ne(this._texture), this._textureNormal = Ne(this._textureNormal), this._textureEmissive = Ne(this._textureEmissive), this._textureOcclusion = Ne(this._textureOcclusion), this._textureMetallicRoughness = Ne(this._textureMetallicRoughness), this._disposed = !0;
  }
  ensureResources(e) {
    return this._numLoading === 0 ? sr.LOADED : sr.LOADING;
  }
  get textureBindParameters() {
    return new Pn(this._texture != null ? this._texture.glTexture : null, this._textureNormal != null ? this._textureNormal.glTexture : null, this._textureEmissive != null ? this._textureEmissive.glTexture : null, this._textureOcclusion != null ? this._textureOcclusion.glTexture : null, this._textureMetallicRoughness != null ? this._textureMetallicRoughness.glTexture : null);
  }
  updateTexture(e) {
    this._texture != null && e === this._texture.id || (this._texture = Ne(this._texture), this._textureId = e, this._acquire(this._textureId, (r) => this._texture = r));
  }
  _acquire(e, r) {
    if (e == null)
      return void r(null);
    const o = this._textureRepository.acquire(e);
    if (Gi(o))
      return ++this._numLoading, void o.then((i) => {
        if (this._disposed)
          return Ne(i), void r(null);
        r(i);
      }).finally(() => --this._numLoading);
    r(o);
  }
}, Pn = class extends vr {
  constructor(e = null, r = null, o = null, i = null, a = null) {
    super(), this.texture = e, this.textureNormal = r, this.textureEmissive = o, this.textureOcclusion = i, this.textureMetallicRoughness = a;
  }
};
var $;
(function(t) {
  t[t.Disabled = 0] = "Disabled", t[t.Normal = 1] = "Normal", t[t.Schematic = 2] = "Schematic", t[t.Water = 3] = "Water", t[t.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", t[t.Terrain = 5] = "Terrain", t[t.TerrainWithWater = 6] = "TerrainWithWater", t[t.COUNT = 7] = "COUNT";
})($ || ($ = {}));
function zo(t, e) {
  const r = t.fragment, o = e.hasMetallicRoughnessTexture || e.hasEmissionTexture || e.hasOcclusionTexture;
  if (e.pbrMode === $.Normal && o && t.include(Fo, e), e.pbrMode !== $.Schematic)
    if (e.pbrMode !== $.Disabled) {
      if (e.pbrMode === $.Normal) {
        r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);
        const i = e.pbrTextureBindType;
        e.hasMetallicRoughnessTexture && (r.uniforms.add(i === z.Pass ? new Z("texMetallicRoughness", (a) => a.textureMetallicRoughness) : new mt("texMetallicRoughness", (a) => a.textureMetallicRoughness)), r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)), e.hasEmissionTexture && (r.uniforms.add(i === z.Pass ? new Z("texEmission", (a) => a.textureEmissive) : new mt("texEmission", (a) => a.textureEmissive)), r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)), e.hasOcclusionTexture ? (r.uniforms.add(i === z.Pass ? new Z("texOcclusion", (a) => a.textureOcclusion) : new mt("texOcclusion", (a) => a.textureOcclusion)), r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)) : r.code.add(s`float getBakedOcclusion() { return 1.0; }`), i === z.Pass ? r.uniforms.add(new Q("emissionFactor", (a) => a.emissiveFactor), new Q("mrrFactors", (a) => a.mrrFactors)) : r.uniforms.add(new he("emissionFactor", (a) => a.emissiveFactor), new he("mrrFactors", (a) => a.mrrFactors)), r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture ? s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform ? s`metallicRoughnessUV` : "vuv0"});` : ""}

      ${e.hasEmissionTexture ? s`applyEmission(${e.hasEmissiveTextureTransform ? s`emissiveUV` : "vuv0"});` : ""}

      ${e.hasOcclusionTexture ? s`applyOcclusion(${e.hasOcclusionTextureTransform ? s`occlusionUV` : "vuv0"});` : ""}
    }
  `);
      }
    } else
      r.code.add(s`float getBakedOcclusion() { return 1.0; }`);
  else
    r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
}
const Ht = /* @__PURE__ */ new Map([[h.POSITION, 0], [h.NORMAL, 1], [h.NORMALCOMPRESSED, 1], [h.UV0, 2], [h.COLOR, 3], [h.COLORFEATUREATTRIBUTE, 3], [h.SIZE, 4], [h.TANGENT, 4], [h.AUXPOS1, 5], [h.SYMBOLCOLOR, 5], [h.AUXPOS2, 6], [h.FEATUREATTRIBUTE, 6], [h.INSTANCEFEATUREATTRIBUTE, 6], [h.INSTANCECOLOR, 7], [h.OBJECTANDLAYERIDCOLOR, 7], [h.INSTANCEOBJECTANDLAYERIDCOLOR, 7], [h.MODEL, 8], [h.MODELNORMAL, 12], [h.MODELORIGINHI, 11], [h.MODELORIGINLO, 15]]);
function In(t) {
  return Math.abs(t * t * t);
}
function Nn(t, e, r) {
  const o = r.parameters, i = r.paddingPixelsOverride;
  return at.scale = Math.min(o.divisor / (e - o.offset), 1), at.factor = In(t), at.minPixelSize = o.minPixelSize, at.paddingPixels = i, at;
}
function Dn(t, e) {
  return t === 0 ? e.minPixelSize : e.minPixelSize * (1 + 2 * e.paddingPixels / t);
}
function Fn(t, e) {
  return Math.max(Wi(t * e.scale, t, e.factor), Dn(t, e));
}
function zn(t, e, r, o) {
  return Fn(t, Nn(e, r, o));
}
const at = { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 }, Ct = ki();
function Vn(t, e, r, o, i, a) {
  if (t.visible)
    if (t.boundingInfo) {
      H(t.type === ye.Mesh);
      const n = e.tolerance;
      Vo(t.boundingInfo, r, o, n, i, a);
    } else {
      const n = t.indices.get(h.POSITION), l = t.vertexAttributes.get(h.POSITION);
      Uo(r, o, 0, n.length / 3, n, l, void 0, i, a);
    }
}
const Bn = P();
function Vo(t, e, r, o, i, a) {
  if (t == null)
    return;
  const n = Hn(e, r, Bn);
  if (ji(Ct, t.bbMin), qi(Ct, t.bbMax), i != null && i.applyToAabb(Ct), Gn(Ct, e, n, o)) {
    const { primitiveIndices: l, indices: c, position: d } = t, u = l ? l.length : c.length / 3;
    if (u > Kn) {
      const m = t.getChildren();
      if (m !== void 0) {
        for (const v of m)
          Vo(v, e, r, o, i, a);
        return;
      }
    }
    Uo(e, r, 0, u, c, d, l, i, a);
  }
}
const Bo = P();
function Uo(t, e, r, o, i, a, n, l, c) {
  if (n)
    return Un(t, e, r, o, i, a, n, l, c);
  const { data: d, stride: u } = a, m = t[0], v = t[1], p = t[2], g = e[0] - m, _ = e[1] - v, T = e[2] - p;
  for (let O = r, D = 3 * r; O < o; ++O) {
    let M = u * i[D++], R = d[M++], I = d[M++], b = d[M];
    M = u * i[D++];
    let E = d[M++], L = d[M++], C = d[M];
    M = u * i[D++];
    let w = d[M++], F = d[M++], S = d[M];
    l != null && ([R, I, b] = l.applyToVertex(R, I, b, O), [E, L, C] = l.applyToVertex(E, L, C, O), [w, F, S] = l.applyToVertex(w, F, S, O));
    const N = E - R, V = L - I, G = C - b, j = w - R, ve = F - I, ge = S - b, Re = _ * ge - ve * T, et = T * j - ge * g, tt = g * ve - j * _, se = N * Re + V * et + G * tt;
    if (Math.abs(se) <= Number.EPSILON)
      continue;
    const ie = m - R, $e = v - I, Le = p - b, me = ie * Re + $e * et + Le * tt;
    if (se > 0) {
      if (me < 0 || me > se)
        continue;
    } else if (me > 0 || me < se)
      continue;
    const xe = $e * G - V * Le, rt = Le * N - G * ie, ot = ie * V - N * $e, Pe = g * xe + _ * rt + T * ot;
    if (se > 0) {
      if (Pe < 0 || me + Pe > se)
        continue;
    } else if (Pe > 0 || me + Pe < se)
      continue;
    const Ie = (j * xe + ve * rt + ge * ot) / se;
    Ie >= 0 && c(Ie, Ho(N, V, G, j, ve, ge, Bo), O, !1);
  }
}
function Un(t, e, r, o, i, a, n, l, c) {
  const { data: d, stride: u } = a, m = t[0], v = t[1], p = t[2], g = e[0] - m, _ = e[1] - v, T = e[2] - p;
  for (let O = r; O < o; ++O) {
    const D = n[O];
    let M = 3 * D, R = u * i[M++], I = d[R++], b = d[R++], E = d[R];
    R = u * i[M++];
    let L = d[R++], C = d[R++], w = d[R];
    R = u * i[M];
    let F = d[R++], S = d[R++], N = d[R];
    l != null && ([I, b, E] = l.applyToVertex(I, b, E, O), [L, C, w] = l.applyToVertex(L, C, w, O), [F, S, N] = l.applyToVertex(F, S, N, O));
    const V = L - I, G = C - b, j = w - E, ve = F - I, ge = S - b, Re = N - E, et = _ * Re - ge * T, tt = T * ve - Re * g, se = g * ge - ve * _, ie = V * et + G * tt + j * se;
    if (Math.abs(ie) <= Number.EPSILON)
      continue;
    const $e = m - I, Le = v - b, me = p - E, xe = $e * et + Le * tt + me * se;
    if (ie > 0) {
      if (xe < 0 || xe > ie)
        continue;
    } else if (xe > 0 || xe < ie)
      continue;
    const rt = Le * j - G * me, ot = me * V - j * $e, Pe = $e * G - V * Le, Ie = g * rt + _ * ot + T * Pe;
    if (ie > 0) {
      if (Ie < 0 || xe + Ie > ie)
        continue;
    } else if (Ie > 0 || xe + Ie < ie)
      continue;
    const Lr = (ve * rt + ge * ot + Re * Pe) / ie;
    Lr >= 0 && c(Lr, Ho(V, G, j, ve, ge, Re, Bo), D, !1);
  }
}
const Hr = P(), Gr = P();
function Ho(t, e, r, o, i, a, n) {
  return K(Hr, t, e, r), K(Gr, o, i, a), vo(n, Hr, Gr), fr(n, n), n;
}
function Hn(t, e, r) {
  return K(r, 1 / (e[0] - t[0]), 1 / (e[1] - t[1]), 1 / (e[2] - t[2]));
}
function Gn(t, e, r, o) {
  return Wn(t, e, r, o, 1 / 0);
}
function Wn(t, e, r, o, i) {
  const a = (t[0] - o - e[0]) * r[0], n = (t[3] + o - e[0]) * r[0];
  let l = Math.min(a, n), c = Math.max(a, n);
  const d = (t[1] - o - e[1]) * r[1], u = (t[4] + o - e[1]) * r[1];
  if (c = Math.min(c, Math.max(d, u)), c < 0 || (l = Math.max(l, Math.min(d, u)), l > c))
    return !1;
  const m = (t[2] - o - e[2]) * r[2], v = (t[5] + o - e[2]) * r[2];
  return c = Math.min(c, Math.max(m, v)), !(c < 0) && (l = Math.max(l, Math.min(m, v)), !(l > c) && l < i);
}
function kn(t, e, r, o, i) {
  let a = (r.screenLength || 0) * t.pixelRatio;
  i != null && (a = zn(a, o, e, i));
  const n = a * Math.tan(0.5 * t.fovY) / (0.5 * t.fullHeight);
  return Xi(n * e, r.minWorldLength || 0, r.maxWorldLength != null ? r.maxWorldLength : 1 / 0);
}
function Go(t, e) {
  const r = e ? Go(e) : {};
  for (const o in t) {
    let i = t[o];
    i && i.forEach && (i = qn(i)), i == null && o in r || (r[o] = i);
  }
  return r;
}
function jn(t, e) {
  let r = !1;
  for (const o in e) {
    const i = e[o];
    i !== void 0 && (Array.isArray(i) ? t[o] === null ? (t[o] = i.slice(), r = !0) : Ki(t[o], i) && (r = !0) : t[o] !== i && (r = !0, t[o] = i));
  }
  return r;
}
function qn(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
}
const Xn = { multiply: 1, ignore: 2, replace: 3, tint: 4 }, Kn = 1e3;
let Qn = class extends Tr {
  constructor(e, r) {
    super(), this.type = ye.Material, this.supportsEdges = !1, this._visible = !0, this._renderPriority = 0, this._insertOrder = 0, this._vertexAttributeLocations = Ht, this._pp0 = ze(0, 0, 1), this._pp1 = ze(0, 0, 0), this._parameters = Go(e, r), this.validateParameters(this._parameters);
  }
  dispose() {
  }
  get parameters() {
    return this._parameters;
  }
  update(e) {
    return !1;
  }
  setParameters(e, r = !0) {
    jn(this._parameters, e) && (this.validateParameters(this._parameters), r && this.parametersChanged());
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
    return this.isVisible() && this.isVisibleForOutput(e.output) && (this.renderOccluded & e.renderOccludedMask) != 0;
  }
  isVisibleForOutput(e) {
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
    this.repository != null && this.repository.materialChanged(this);
  }
  intersectDraped(e, r, o, i, a, n) {
    return this._pp0[0] = this._pp1[0] = i[0], this._pp0[1] = this._pp1[1] = i[1], this.intersect(e, r, o, this._pp0, this._pp1, a);
  }
};
var lr;
(function(t) {
  t[t.None = 0] = "None", t[t.Occlude = 1] = "Occlude", t[t.Transparent = 2] = "Transparent", t[t.OccludeAndTransparent = 4] = "OccludeAndTransparent", t[t.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", t[t.Opaque = 16] = "Opaque";
})(lr || (lr = {}));
var je;
(function(t) {
  t[t.INTEGRATED_MESH = 0] = "INTEGRATED_MESH", t[t.OPAQUE_TERRAIN = 1] = "OPAQUE_TERRAIN", t[t.OPAQUE_MATERIAL = 2] = "OPAQUE_MATERIAL", t[t.TRANSPARENT_MATERIAL = 3] = "TRANSPARENT_MATERIAL", t[t.TRANSPARENT_TERRAIN = 4] = "TRANSPARENT_TERRAIN", t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL = 5] = "TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL", t[t.OCCLUDED_TERRAIN = 6] = "OCCLUDED_TERRAIN", t[t.OCCLUDER_MATERIAL = 7] = "OCCLUDER_MATERIAL", t[t.TRANSPARENT_OCCLUDER_MATERIAL = 8] = "TRANSPARENT_OCCLUDER_MATERIAL", t[t.OCCLUSION_PIXELS = 9] = "OCCLUSION_PIXELS", t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE = 10] = "POSTPROCESSING_ENVIRONMENT_OPAQUE", t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT = 11] = "POSTPROCESSING_ENVIRONMENT_TRANSPARENT", t[t.LASERLINES = 12] = "LASERLINES", t[t.LASERLINES_CONTRAST_CONTROL = 13] = "LASERLINES_CONTRAST_CONTROL", t[t.HUD_MATERIAL = 14] = "HUD_MATERIAL", t[t.LABEL_MATERIAL = 15] = "LABEL_MATERIAL", t[t.LINE_CALLOUTS = 16] = "LINE_CALLOUTS", t[t.LINE_CALLOUTS_HUD_DEPTH = 17] = "LINE_CALLOUTS_HUD_DEPTH", t[t.DRAPED_MATERIAL = 18] = "DRAPED_MATERIAL", t[t.DRAPED_WATER = 19] = "DRAPED_WATER", t[t.VOXEL = 20] = "VOXEL", t[t.MAX_SLOTS = 21] = "MAX_SLOTS";
})(je || (je = {}));
let Zn = class {
  constructor(e = 0) {
    this.componentLocalOriginLength = 0, this._tmpVertex = P(), this._mbs = wo(), this._obb = { center: P(), halfSize: Ua(), quaternion: null }, this._totalOffset = 0, this._offset = 0, this._resetOffset(e);
  }
  _resetOffset(e) {
    this._offset = e, this._totalOffset = e;
  }
  set offset(e) {
    this._resetOffset(e);
  }
  get offset() {
    return this._offset;
  }
  set componentOffset(e) {
    this._totalOffset = this._offset + e;
  }
  set localOrigin(e) {
    this.componentLocalOriginLength = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  }
  applyToVertex(e, r, o) {
    const i = e, a = r, n = o + this.componentLocalOriginLength, l = this._totalOffset / Math.sqrt(i * i + a * a + n * n);
    return this._tmpVertex[0] = e + i * l, this._tmpVertex[1] = r + a * l, this._tmpVertex[2] = o + n * l, this._tmpVertex;
  }
  applyToAabb(e) {
    const r = e[0], o = e[1], i = e[2] + this.componentLocalOriginLength, a = e[3], n = e[4], l = e[5] + this.componentLocalOriginLength, c = r * a < 0 ? 0 : Math.min(Math.abs(r), Math.abs(a)), d = o * n < 0 ? 0 : Math.min(Math.abs(o), Math.abs(n)), u = i * l < 0 ? 0 : Math.min(Math.abs(i), Math.abs(l)), m = Math.sqrt(c * c + d * d + u * u);
    if (m < this._totalOffset)
      return e[0] -= r < 0 ? this._totalOffset : 0, e[1] -= o < 0 ? this._totalOffset : 0, e[2] -= i < 0 ? this._totalOffset : 0, e[3] += a > 0 ? this._totalOffset : 0, e[4] += n > 0 ? this._totalOffset : 0, e[5] += l > 0 ? this._totalOffset : 0, e;
    const v = Math.max(Math.abs(r), Math.abs(a)), p = Math.max(Math.abs(o), Math.abs(n)), g = Math.max(Math.abs(i), Math.abs(l)), _ = Math.sqrt(v * v + p * p + g * g), T = this._totalOffset / _, O = this._totalOffset / m;
    return e[0] += r * (r > 0 ? T : O), e[1] += o * (o > 0 ? T : O), e[2] += i * (i > 0 ? T : O), e[3] += a * (a < 0 ? T : O), e[4] += n * (n < 0 ? T : O), e[5] += l * (l < 0 ? T : O), e;
  }
  applyToMbs(e) {
    const r = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), o = this._totalOffset / r;
    return this._mbs[0] = e[0] + e[0] * o, this._mbs[1] = e[1] + e[1] * o, this._mbs[2] = e[2] + e[2] * o, this._mbs[3] = e[3] + e[3] * this._totalOffset / r, this._mbs;
  }
  applyToObb(e) {
    const r = e.center, o = this._totalOffset / Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
    this._obb.center[0] = r[0] + r[0] * o, this._obb.center[1] = r[1] + r[1] * o, this._obb.center[2] = r[2] + r[2] * o, Dr(this._obb.halfSize, e.halfSize, e.quaternion), le(this._obb.halfSize, this._obb.halfSize, e.center);
    const i = this._totalOffset / Math.sqrt(this._obb.halfSize[0] * this._obb.halfSize[0] + this._obb.halfSize[1] * this._obb.halfSize[1] + this._obb.halfSize[2] * this._obb.halfSize[2]);
    return this._obb.halfSize[0] += this._obb.halfSize[0] * i, this._obb.halfSize[1] += this._obb.halfSize[1] * i, this._obb.halfSize[2] += this._obb.halfSize[2] * i, we(this._obb.halfSize, this._obb.halfSize, e.center), Va(kr, e.quaternion), Dr(this._obb.halfSize, this._obb.halfSize, kr), this._obb.halfSize[0] *= this._obb.halfSize[0] < 0 ? -1 : 1, this._obb.halfSize[1] *= this._obb.halfSize[1] < 0 ? -1 : 1, this._obb.halfSize[2] *= this._obb.halfSize[2] < 0 ? -1 : 1, this._obb.quaternion = e.quaternion, this._obb;
  }
}, Jn = class {
  constructor(e = 0) {
    this.offset = e, this.sphere = wo(), this.tmpVertex = P();
  }
  applyToVertex(e, r, o) {
    const i = this.objectTransform.transform;
    let a = i[0] * e + i[4] * r + i[8] * o + i[12], n = i[1] * e + i[5] * r + i[9] * o + i[13], l = i[2] * e + i[6] * r + i[10] * o + i[14];
    const c = this.offset / Math.sqrt(a * a + n * n + l * l);
    a += a * c, n += n * c, l += l * c;
    const d = this.objectTransform.inverse;
    return this.tmpVertex[0] = d[0] * a + d[4] * n + d[8] * l + d[12], this.tmpVertex[1] = d[1] * a + d[5] * n + d[9] * l + d[13], this.tmpVertex[2] = d[2] * a + d[6] * n + d[10] * l + d[14], this.tmpVertex;
  }
  applyToMinMax(e, r) {
    const o = this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    e[0] += e[0] * o, e[1] += e[1] * o, e[2] += e[2] * o;
    const i = this.offset / Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
    r[0] += r[0] * i, r[1] += r[1] * i, r[2] += r[2] * i;
  }
  applyToAabb(e) {
    const r = this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    e[0] += e[0] * r, e[1] += e[1] * r, e[2] += e[2] * r;
    const o = this.offset / Math.sqrt(e[3] * e[3] + e[4] * e[4] + e[5] * e[5]);
    return e[3] += e[3] * o, e[4] += e[4] * o, e[5] += e[5] * o, e;
  }
  applyToBoundingSphere(e) {
    const r = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), o = this.offset / r;
    return this.sphere[0] = e[0] + e[0] * o, this.sphere[1] = e[1] + e[1] * o, this.sphere[2] = e[2] + e[2] * o, this.sphere[3] = e[3] + e[3] * this.offset / r, this.sphere;
  }
};
const Wr = new Jn();
function Yn(t) {
  return t != null ? (Wr.offset = t, Wr) : null;
}
new Zn();
const kr = Ba();
function jr(t, e, r, o) {
  const i = r.typedBuffer, a = r.typedBufferStride, n = t.length;
  o *= a;
  for (let l = 0; l < n; ++l) {
    const c = 2 * t[l];
    i[o] = e[c], i[o + 1] = e[c + 1], o += a;
  }
}
function Wo(t, e, r, o, i) {
  const a = r.typedBuffer, n = r.typedBufferStride, l = t.length;
  if (o *= n, i == null || i === 1)
    for (let c = 0; c < l; ++c) {
      const d = 3 * t[c];
      a[o] = e[d], a[o + 1] = e[d + 1], a[o + 2] = e[d + 2], o += n;
    }
  else
    for (let c = 0; c < l; ++c) {
      const d = 3 * t[c];
      for (let u = 0; u < i; ++u)
        a[o] = e[d], a[o + 1] = e[d + 1], a[o + 2] = e[d + 2], o += n;
    }
}
function ko(t, e, r, o, i = 1) {
  const a = r.typedBuffer, n = r.typedBufferStride, l = t.length;
  if (o *= n, i === 1)
    for (let c = 0; c < l; ++c) {
      const d = 4 * t[c];
      a[o] = e[d], a[o + 1] = e[d + 1], a[o + 2] = e[d + 2], a[o + 3] = e[d + 3], o += n;
    }
  else
    for (let c = 0; c < l; ++c) {
      const d = 4 * t[c];
      for (let u = 0; u < i; ++u)
        a[o] = e[d], a[o + 1] = e[d + 1], a[o + 2] = e[d + 2], a[o + 3] = e[d + 3], o += n;
    }
}
function es(t, e, r, o, i, a = 1) {
  if (!r)
    return void Wo(t, e, o, i, a);
  const n = o.typedBuffer, l = o.typedBufferStride, c = t.length, d = r[0], u = r[1], m = r[2], v = r[4], p = r[5], g = r[6], _ = r[8], T = r[9], O = r[10], D = r[12], M = r[13], R = r[14];
  i *= l;
  let I = 0, b = 0, E = 0;
  const L = go(r) ? (C) => {
    I = e[C] + D, b = e[C + 1] + M, E = e[C + 2] + R;
  } : (C) => {
    const w = e[C], F = e[C + 1], S = e[C + 2];
    I = d * w + v * F + _ * S + D, b = u * w + p * F + T * S + M, E = m * w + g * F + O * S + R;
  };
  if (a === 1)
    for (let C = 0; C < c; ++C)
      L(3 * t[C]), n[i] = I, n[i + 1] = b, n[i + 2] = E, i += l;
  else
    for (let C = 0; C < c; ++C) {
      L(3 * t[C]);
      for (let w = 0; w < a; ++w)
        n[i] = I, n[i + 1] = b, n[i + 2] = E, i += l;
    }
}
function ts(t, e, r, o, i, a = 1) {
  if (!r)
    return void Wo(t, e, o, i, a);
  const n = r, l = o.typedBuffer, c = o.typedBufferStride, d = t.length, u = n[0], m = n[1], v = n[2], p = n[4], g = n[5], _ = n[6], T = n[8], O = n[9], D = n[10], M = !xo(n), R = 1e-6, I = 1 - R;
  i *= c;
  let b = 0, E = 0, L = 0;
  const C = go(n) ? (w) => {
    b = e[w], E = e[w + 1], L = e[w + 2];
  } : (w) => {
    const F = e[w], S = e[w + 1], N = e[w + 2];
    b = u * F + p * S + T * N, E = m * F + g * S + O * N, L = v * F + _ * S + D * N;
  };
  if (a === 1)
    if (M)
      for (let w = 0; w < d; ++w) {
        C(3 * t[w]);
        const F = b * b + E * E + L * L;
        if (F < I && F > R) {
          const S = 1 / Math.sqrt(F);
          l[i] = b * S, l[i + 1] = E * S, l[i + 2] = L * S;
        } else
          l[i] = b, l[i + 1] = E, l[i + 2] = L;
        i += c;
      }
    else
      for (let w = 0; w < d; ++w)
        C(3 * t[w]), l[i] = b, l[i + 1] = E, l[i + 2] = L, i += c;
  else
    for (let w = 0; w < d; ++w) {
      if (C(3 * t[w]), M) {
        const F = b * b + E * E + L * L;
        if (F < I && F > R) {
          const S = 1 / Math.sqrt(F);
          b *= S, E *= S, L *= S;
        }
      }
      for (let F = 0; F < a; ++F)
        l[i] = b, l[i + 1] = E, l[i + 2] = L, i += c;
    }
}
function rs(t, e, r, o, i, a = 1) {
  if (!r)
    return void ko(t, e, o, i, a);
  const n = r, l = o.typedBuffer, c = o.typedBufferStride, d = t.length, u = n[0], m = n[1], v = n[2], p = n[4], g = n[5], _ = n[6], T = n[8], O = n[9], D = n[10], M = !xo(n), R = 1e-6, I = 1 - R;
  if (i *= c, a === 1)
    for (let b = 0; b < d; ++b) {
      const E = 4 * t[b], L = e[E], C = e[E + 1], w = e[E + 2], F = e[E + 3];
      let S = u * L + p * C + T * w, N = m * L + g * C + O * w, V = v * L + _ * C + D * w;
      if (M) {
        const G = S * S + N * N + V * V;
        if (G < I && G > R) {
          const j = 1 / Math.sqrt(G);
          S *= j, N *= j, V *= j;
        }
      }
      l[i] = S, l[i + 1] = N, l[i + 2] = V, l[i + 3] = F, i += c;
    }
  else
    for (let b = 0; b < d; ++b) {
      const E = 4 * t[b], L = e[E], C = e[E + 1], w = e[E + 2], F = e[E + 3];
      let S = u * L + p * C + T * w, N = m * L + g * C + O * w, V = v * L + _ * C + D * w;
      if (M) {
        const G = S * S + N * N + V * V;
        if (G < I && G > R) {
          const j = 1 / Math.sqrt(G);
          S *= j, N *= j, V *= j;
        }
      }
      for (let G = 0; G < a; ++G)
        l[i] = S, l[i + 1] = N, l[i + 2] = V, l[i + 3] = F, i += c;
    }
}
function os(t, e, r, o, i, a = 1) {
  const n = o.typedBuffer, l = o.typedBufferStride, c = t.length;
  if (i *= l, r !== e.length || r !== 4)
    if (a !== 1)
      if (r !== 4)
        for (let d = 0; d < c; ++d) {
          const u = 3 * t[d];
          for (let m = 0; m < a; ++m)
            n[i] = e[u], n[i + 1] = e[u + 1], n[i + 2] = e[u + 2], n[i + 3] = 255, i += l;
        }
      else
        for (let d = 0; d < c; ++d) {
          const u = 4 * t[d];
          for (let m = 0; m < a; ++m)
            n[i] = e[u], n[i + 1] = e[u + 1], n[i + 2] = e[u + 2], n[i + 3] = e[u + 3], i += l;
        }
    else {
      if (r === 4) {
        for (let d = 0; d < c; ++d) {
          const u = 4 * t[d];
          n[i] = e[u], n[i + 1] = e[u + 1], n[i + 2] = e[u + 2], n[i + 3] = e[u + 3], i += l;
        }
        return;
      }
      for (let d = 0; d < c; ++d) {
        const u = 3 * t[d];
        n[i] = e[u], n[i + 1] = e[u + 1], n[i + 2] = e[u + 2], n[i + 3] = 255, i += l;
      }
    }
  else {
    n[i] = e[0], n[i + 1] = e[1], n[i + 2] = e[2], n[i + 3] = e[3];
    const d = new Uint32Array(o.typedBuffer.buffer, o.start), u = l / 4, m = d[i /= 4];
    i += u;
    const v = c * a;
    for (let p = 1; p < v; ++p)
      d[i] = m, i += u;
  }
}
function is(t, e, r, o) {
  const i = r.typedBuffer, a = r.typedBufferStride, n = t.length, l = e[0];
  o *= a;
  for (let c = 0; c < n; ++c)
    i[o] = l, o += a;
}
function as(t, e, r, o, i = 1) {
  const a = e.typedBuffer, n = e.typedBufferStride;
  if (o *= n, i === 1)
    for (let l = 0; l < r; ++l)
      a[o] = t[0], a[o + 1] = t[1], a[o + 2] = t[2], a[o + 3] = t[3], o += n;
  else
    for (let l = 0; l < r; ++l)
      for (let c = 0; c < i; ++c)
        a[o] = t[0], a[o + 1] = t[1], a[o + 2] = t[2], a[o + 3] = t[3], o += n;
}
function ns(t, e, r, o, i, a) {
  for (const n of e.fields.keys()) {
    const l = t.vertexAttributes.get(n), c = t.indices.get(n);
    if (l && c)
      ss(n, l, c, r, o, i, a);
    else if (n === h.OBJECTANDLAYERIDCOLOR && t.objectAndLayerIdColor != null) {
      const d = t.indices.get(h.POSITION);
      if (H(!!d, `No buffer view for ${n}`), d) {
        const u = d.length, m = i.getField(n, Bt);
        as(t.objectAndLayerIdColor, m, u, a);
      }
    }
  }
}
function ss(t, e, r, o, i, a, n) {
  switch (t) {
    case h.POSITION: {
      H(e.size === 3);
      const l = a.getField(t, Lt);
      H(!!l, `No buffer view for ${t}`), l && es(r, e.data, o, l, n);
      break;
    }
    case h.NORMAL: {
      H(e.size === 3);
      const l = a.getField(t, Lt);
      H(!!l, `No buffer view for ${t}`), l && ts(r, e.data, i, l, n);
      break;
    }
    case h.NORMALCOMPRESSED: {
      H(e.size === 2);
      const l = a.getField(t, ca);
      H(!!l, `No buffer view for ${t}`), l && jr(r, e.data, l, n);
      break;
    }
    case h.UV0: {
      H(e.size === 2);
      const l = a.getField(t, la);
      H(!!l, `No buffer view for ${t}`), l && jr(r, e.data, l, n);
      break;
    }
    case h.COLOR:
    case h.SYMBOLCOLOR: {
      const l = a.getField(t, Bt);
      H(!!l, `No buffer view for ${t}`), H(e.size === 3 || e.size === 4), !l || e.size !== 3 && e.size !== 4 || os(r, e.data, e.size, l, n);
      break;
    }
    case h.COLORFEATUREATTRIBUTE: {
      const l = a.getField(t, sa);
      H(!!l, `No buffer view for ${t}`), H(e.size === 1), l && e.size === 1 && is(r, e.data, l, n);
      break;
    }
    case h.TANGENT: {
      H(e.size === 4);
      const l = a.getField(t, nr);
      H(!!l, `No buffer view for ${t}`), l && rs(r, e.data, i, l, n);
      break;
    }
    case h.PROFILERIGHT:
    case h.PROFILEUP:
    case h.PROFILEVERTEXANDNORMAL:
    case h.FEATUREVALUE: {
      H(e.size === 4);
      const l = a.getField(t, nr);
      H(!!l, `No buffer view for ${t}`), l && ko(r, e.data, l, n);
    }
  }
}
let ls = class {
  constructor(e) {
    this.vertexBufferLayout = e;
  }
  elementCount(e) {
    return e.indices.get(h.POSITION).length;
  }
  write(e, r, o, i, a) {
    ns(o, this.vertexBufferLayout, e, r, i, a);
  }
};
function br(t) {
  t.attributes.add(h.POSITION, "vec3"), t.vertex.code.add(s`vec3 positionModel() { return position; }`);
}
function jo({ code: t }, e) {
  e.doublePrecisionRequiresObfuscation ? t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`) : t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);
}
let qo = class extends J {
  constructor(e, r) {
    super(e, "mat3", z.Draw, (o, i, a) => o.setUniformMatrix3fv(e, r(i, a)));
  }
}, pe = class extends J {
  constructor(e, r) {
    super(e, "mat3", z.Pass, (o, i, a) => o.setUniformMatrix3fv(e, r(i, a)));
  }
}, Ve = class extends J {
  constructor(e, r) {
    super(e, "mat4", z.Pass, (o, i, a) => o.setUniformMatrix4fv(e, r(i, a)));
  }
};
function Xo(t, e) {
  t.include(br);
  const r = t.vertex;
  r.include(jo, e), t.varyings.add("vPositionWorldCameraRelative", "vec3"), t.varyings.add("vPosition_view", "vec3"), r.uniforms.add(new Q("transformWorldFromViewTH", (o) => o.transformWorldFromViewTH), new Q("transformWorldFromViewTL", (o) => o.transformWorldFromViewTL), new pe("transformViewFromCameraRelativeRS", (o) => o.transformViewFromCameraRelativeRS), new Ve("transformProjFromView", (o) => o.transformProjFromView), new qo("transformWorldFromModelRS", (o) => o.transformWorldFromModelRS), new he("transformWorldFromModelTH", (o) => o.transformWorldFromModelTH), new he("transformWorldFromModelTL", (o) => o.transformWorldFromModelTL)), r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`), r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical ? s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)` : s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `), t.fragment.uniforms.add(new Q("transformWorldFromViewTL", (o) => o.transformWorldFromViewTL)), r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`), t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
}
class cs extends vr {
  constructor() {
    super(...arguments), this.transformWorldFromViewTH = P(), this.transformWorldFromViewTL = P(), this.transformViewFromCameraRelativeRS = xt(), this.transformProjFromView = Vt();
  }
}
function Ko(t, e) {
  switch (e.normalType) {
    case B.Attribute:
    case B.Compressed:
      t.include(Ut, e), t.varyings.add("vNormalWorld", "vec3"), t.varyings.add("vNormalView", "vec3"), t.vertex.uniforms.add(new qo("transformNormalGlobalFromModel", (r) => r.transformNormalGlobalFromModel), new pe("transformNormalViewFromGlobal", (r) => r.transformNormalViewFromGlobal)), t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);
      break;
    case B.Ground:
      t.include(Xo, e), t.varyings.add("vNormalWorld", "vec3"), t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical ? s`normalize(vPositionWorldCameraRelative);` : s`vec3(0.0, 0.0, 1.0);`}
        }
        `);
      break;
    case B.ScreenDerivative:
      t.vertex.code.add(s`void forwardNormal() {}`);
      break;
    default:
      Ye(e.normalType);
    case B.COUNT:
  }
}
let ds = class extends cs {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = xt();
  }
};
const us = 0.1, Sr = 1e-3;
let Gt = class {
  constructor(e, r) {
    this._module = e, this._loadModule = r;
  }
  get() {
    return this._module;
  }
  async reload() {
    return this._module = await this._loadModule(), this._module;
  }
}, Ar = class {
  constructor(e, r, o) {
    this.release = o, this.initializeConfiguration(e, r), this._configuration = r.snapshot(), this._program = this.initializeProgram(e), this._pipeline = this.initializePipeline(e.rctx.capabilities);
  }
  destroy() {
    this._program = rr(this._program), this._pipeline = this._configuration = null;
  }
  reload(e) {
    rr(this._program), this._program = this.initializeProgram(e), this._pipeline = this.initializePipeline(e.rctx.capabilities);
  }
  get program() {
    return this._program;
  }
  get compiled() {
    return this.program.compiled;
  }
  get key() {
    return this._configuration.key;
  }
  get configuration() {
    return this._configuration;
  }
  bindPipelineState(e, r = null, o) {
    e.setPipelineState(this.getPipelineState(r, o));
  }
  ensureAttributeLocations(e) {
    this.program.assertCompatibleVertexAttributeLocations(e);
  }
  get primitiveType() {
    return Ma.TRIANGLES;
  }
  getPipelineState(e, r) {
    return this._pipeline;
  }
  initializeConfiguration(e, r) {
  }
}, yr = class {
  constructor(e, r, o) {
    this._context = e, this._locations = o, this._textures = /* @__PURE__ */ new Map(), this._freeTextureUnits = new fo({ deallocator: null }), this._glProgram = e.programCache.acquire(r.generate("vertex"), r.generate("fragment"), o), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bindPass = r.generateBind(z.Pass, this), this.bindDraw = r.generateBind(z.Draw, this), this._fragmentUniforms = $a() ? r.fragmentUniforms : null;
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get compiled() {
    return this._glProgram.compiled;
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
  setUniform2fv(e, r) {
    this._glProgram.setUniform2fv(e, r);
  }
  setUniform3fv(e, r) {
    this._glProgram.setUniform3fv(e, r);
  }
  setUniform4fv(e, r) {
    this._glProgram.setUniform4fv(e, r);
  }
  setUniformMatrix3fv(e, r) {
    this._glProgram.setUniformMatrix3fv(e, r);
  }
  setUniformMatrix4fv(e, r) {
    this._glProgram.setUniformMatrix4fv(e, r);
  }
  setUniform1fv(e, r) {
    this._glProgram.setUniform1fv(e, r);
  }
  setUniform1iv(e, r) {
    this._glProgram.setUniform1iv(e, r);
  }
  setUniform2iv(e, r) {
    this._glProgram.setUniform3iv(e, r);
  }
  setUniform3iv(e, r) {
    this._glProgram.setUniform3iv(e, r);
  }
  setUniform4iv(e, r) {
    this._glProgram.setUniform4iv(e, r);
  }
  assertCompatibleVertexAttributeLocations(e) {
    e.locations !== this._locations && console.error("VertexAttributeLocations are incompatible");
  }
  stop() {
    this._textures.clear(), this._freeTextureUnits.clear();
  }
  bindTexture(e, r) {
    if (r == null || r.glName == null) {
      const i = this._textures.get(e);
      return i && (this._context.bindTexture(null, i.unit), this._freeTextureUnit(i), this._textures.delete(e)), null;
    }
    let o = this._textures.get(e);
    return o == null ? (o = this._allocTextureUnit(r), this._textures.set(e, o)) : o.texture = r, this._context.useProgram(this), this.setUniform1i(e, o.unit), this._context.bindTexture(r, o.unit), o.unit;
  }
  rebindTextures() {
    this._context.useProgram(this), this._textures.forEach((e, r) => {
      this._context.bindTexture(e.texture, e.unit), this.setUniform1i(r, e.unit);
    }), this._fragmentUniforms != null && this._fragmentUniforms.forEach((e) => {
      e.type !== "sampler2D" && e.type !== "samplerCube" || this._textures.has(e.name) || console.error(`Texture sampler ${e.name} has no bound texture`);
    });
  }
  _allocTextureUnit(e) {
    return { texture: e, unit: this._freeTextureUnits.length === 0 ? this._textures.size : this._freeTextureUnits.pop() };
  }
  _freeTextureUnit(e) {
    this._freeTextureUnits.push(e.unit);
  }
};
Ee.LESS;
Ee.ALWAYS;
const hs = { mask: 255 }, ms = { function: { func: Ee.ALWAYS, ref: Oe.OutlineVisualElementMask, mask: Oe.OutlineVisualElementMask }, operation: { fail: ne.KEEP, zFail: ne.KEEP, zPass: ne.ZERO } }, fs = { function: { func: Ee.ALWAYS, ref: Oe.OutlineVisualElementMask, mask: Oe.OutlineVisualElementMask }, operation: { fail: ne.KEEP, zFail: ne.KEEP, zPass: ne.REPLACE } };
Ee.EQUAL, Oe.OutlineVisualElementMask, Oe.OutlineVisualElementMask, ne.KEEP, ne.KEEP, ne.KEEP;
Ee.NOTEQUAL, Oe.OutlineVisualElementMask, Oe.OutlineVisualElementMask, ne.KEEP, ne.KEEP, ne.KEEP;
function ps({ normalTexture: t, metallicRoughnessTexture: e, metallicFactor: r, roughnessFactor: o, emissiveTexture: i, emissiveFactor: a, occlusionTexture: n }) {
  return t == null && e == null && i == null && (a == null || Qi(a, Ft)) && n == null && (o == null || o === 1) && (r == null || r === 1 || r === 0);
}
const Qo = [1, 1, 0.5], vs = [0, 0.6, 0.2], gs = [0, 1, 0.2];
let Ce = class extends J {
  constructor(e, r) {
    super(e, "vec2", z.Pass, (o, i, a) => o.setUniform2fv(e, r(i, a)));
  }
};
function qr(t) {
  t.varyings.add("linearDepth", "float");
}
function Zo(t) {
  t.vertex.uniforms.add(new Ce("nearFar", (e, r) => r.camera.nearFar));
}
function Jo(t) {
  t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);
}
function Yo(t, e) {
  const { vertex: r } = t;
  switch (e.output) {
    case y.Color:
      if (e.receiveShadows)
        return qr(t), void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);
      break;
    case y.Depth:
    case y.Shadow:
    case y.ShadowHighlight:
    case y.ShadowExcludeHighlight:
      return t.include(Xo, e), qr(t), Zo(t), Jo(t), void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);
  }
  r.code.add(s`void forwardLinearDepth() {}`);
}
function ei(t) {
  t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}
function Be(t, e) {
  xs(t, e, new he("slicePlaneOrigin", (r, o) => Ts(e, r, o)), new he("slicePlaneBasis1", (r, o) => {
    var i;
    return Xr(e, r, o, (i = o.slicePlane) == null ? void 0 : i.basis1);
  }), new he("slicePlaneBasis2", (r, o) => {
    var i;
    return Xr(e, r, o, (i = o.slicePlane) == null ? void 0 : i.basis2);
  }));
}
function xs(t, e, ...r) {
  if (!e.hasSlicePlane) {
    const n = s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;
    return e.hasSliceInVertexProgram && t.vertex.code.add(n), void t.fragment.code.add(n);
  }
  e.hasSliceInVertexProgram && t.vertex.uniforms.add(...r), t.fragment.uniforms.add(...r);
  const o = s`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`, i = s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`, a = e.hasSliceHighlight ? s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      ` : s`#define highlightSlice(_color_, _pos_) (_color_)`;
  e.hasSliceInVertexProgram && t.vertex.code.add(o), t.fragment.code.add(o), t.fragment.code.add(a);
}
function ti(t, e, r) {
  return t.instancedDoublePrecision ? K(_s, r.camera.viewInverseTransposeMatrix[3], r.camera.viewInverseTransposeMatrix[7], r.camera.viewInverseTransposeMatrix[11]) : e.slicePlaneLocalOrigin;
}
function ri(t, e) {
  return t != null ? we(Pt, e.origin, t) : e.origin;
}
function oi(t, e, r) {
  return t.hasSliceTranslatedView ? e != null ? or(bs, r.camera.viewMatrix, e) : r.camera.viewMatrix : null;
}
function Ts(t, e, r) {
  if (r.slicePlane == null)
    return Ft;
  const o = ti(t, e, r), i = ri(o, r.slicePlane), a = oi(t, o, r);
  return a != null ? Xe(Pt, i, a) : i;
}
function Xr(t, e, r, o) {
  if (o == null || r.slicePlane == null)
    return Ft;
  const i = ti(t, e, r), a = ri(i, r.slicePlane), n = oi(t, i, r);
  return n != null ? (le(nt, o, a), Xe(Pt, a, n), Xe(nt, nt, n), we(nt, nt, Pt)) : o;
}
const _s = P(), Pt = P(), nt = P(), bs = Vt();
function ft(t) {
  Jo(t), t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`), t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
}
var Kr, Qr, Zr, Jr, Yr;
(function(t) {
  t[t.INNER = 0] = "INNER", t[t.OUTER = 1] = "OUTER";
})(Kr || (Kr = {})), function(t) {
  t[t.REGULAR = 0] = "REGULAR", t[t.HAS_NORTH_POLE = 1] = "HAS_NORTH_POLE", t[t.HAS_SOUTH_POLE = 2] = "HAS_SOUTH_POLE", t[t.HAS_BOTH_POLES = 3] = "HAS_BOTH_POLES";
}(Qr || (Qr = {})), function(t) {
  t[t.OFF = 0] = "OFF", t[t.ON = 1] = "ON";
}(Zr || (Zr = {})), function(t) {
  t[t.Color = 0] = "Color", t[t.ColorNoRasterImage = 1] = "ColorNoRasterImage", t[t.Highlight = 2] = "Highlight", t[t.Water = 3] = "Water", t[t.Occluded = 4] = "Occluded", t[t.ObjectAndLayerIdColor = 5] = "ObjectAndLayerIdColor";
}(Jr || (Jr = {})), function(t) {
  t[t.FADING = 0] = "FADING", t[t.IMMEDIATE = 1] = "IMMEDIATE", t[t.UNFADED = 2] = "UNFADED";
}(Yr || (Yr = {}));
var eo;
(function(t) {
  t[t.None = 0] = "None", t[t.ColorAndWater = 1] = "ColorAndWater", t[t.Highlight = 2] = "Highlight", t[t.Occluded = 3] = "Occluded", t[t.ObjectAndLayerIdColor = 4] = "ObjectAndLayerIdColor";
})(eo || (eo = {}));
let ee = class extends J {
  constructor(e, r) {
    super(e, "float", z.Pass, (o, i, a) => o.setUniform1f(e, r(i, a)));
  }
}, Ss = class extends J {
  constructor(e, r) {
    super(e, "mat4", z.Draw, (o, i, a) => o.setUniformMatrix4fv(e, r(i, a)));
  }
};
function gt(t, e) {
  e.instancedDoublePrecision ? t.constants.add("cameraPosition", "vec3", Ft) : t.uniforms.add(new he("cameraPosition", (r, o) => K(ii, o.camera.viewInverseTransposeMatrix[3] - r.origin[0], o.camera.viewInverseTransposeMatrix[7] - r.origin[1], o.camera.viewInverseTransposeMatrix[11] - r.origin[2])));
}
function pt(t, e) {
  if (!e.instancedDoublePrecision)
    return void t.uniforms.add(new Ve("proj", (o, i) => i.camera.projectionMatrix), new Ss("view", (o, i) => or(to, i.camera.viewMatrix, o.origin)), new he("localOrigin", (o) => o.origin));
  const r = (o) => K(ii, o.camera.viewInverseTransposeMatrix[3], o.camera.viewInverseTransposeMatrix[7], o.camera.viewInverseTransposeMatrix[11]);
  t.uniforms.add(new Ve("proj", (o, i) => i.camera.projectionMatrix), new Ve("view", (o, i) => or(to, i.camera.viewMatrix, r(i))), new Q("localOrigin", (o, i) => r(i)));
}
const to = Vt(), ii = P();
function As(t) {
  t.uniforms.add(new Ve("viewNormal", (e, r) => r.camera.viewInverseTransposeMatrix));
}
let ai = class extends vr {
  constructor() {
    super(), this._key = "", this._keyDirty = !1, this._parameterBits = this._parameterBits ? this._parameterBits.map(() => 0) : [], this._parameterNames || (this._parameterNames = []);
  }
  get key() {
    return this._keyDirty && (this._keyDirty = !1, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
  }
  snapshot() {
    const e = this._parameterNames, r = { key: this.key };
    for (const o of e)
      r[o] = this[o];
    return r;
  }
};
function x(t = {}) {
  return (e, r) => {
    if (e._parameterNames = e._parameterNames ?? [], e._parameterNames.push(r), t.constValue != null)
      Object.defineProperty(e, r, { get: () => t.constValue });
    else {
      const o = e._parameterNames.length - 1, i = t.count || 2, a = Math.ceil(Math.log2(i)), n = e._parameterBits ?? [0];
      let l = 0;
      for (; n[l] + a > 16; )
        l++, l >= n.length && n.push(0);
      e._parameterBits = n;
      const c = n[l], d = (1 << a) - 1 << c;
      n[l] += a, Object.defineProperty(e, r, { get() {
        return this[o];
      }, set(u) {
        if (this[o] !== u && (this[o] = u, this._keyDirty = !0, this._parameterBits[l] = this._parameterBits[l] & ~d | +u << c & d, typeof u != "number" && typeof u != "boolean"))
          throw new Error("Configuration value for " + r + " must be boolean or number, got " + typeof u);
      } });
    }
  };
}
let ys = class extends ai {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = !1;
  }
};
function ni(t, e) {
  e.instanced && e.instancedDoublePrecision && (t.attributes.add(h.MODELORIGINHI, "vec3"), t.attributes.add(h.MODELORIGINLO, "vec3"), t.attributes.add(h.MODEL, "mat3"), t.attributes.add(h.MODELNORMAL, "mat3"));
  const r = t.vertex;
  e.instancedDoublePrecision && (r.include(jo, e), r.uniforms.add(new he("viewOriginHi", (o, i) => Ha(K(wt, i.camera.viewInverseTransposeMatrix[3], i.camera.viewInverseTransposeMatrix[7], i.camera.viewInverseTransposeMatrix[11]), wt)), new he("viewOriginLo", (o, i) => Ga(K(wt, i.camera.viewInverseTransposeMatrix[3], i.camera.viewInverseTransposeMatrix[7], i.camera.viewInverseTransposeMatrix[11]), wt)))), r.code.add(s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision ? "return model * localPosition().xyz;" : "return localPosition().xyz;"}
    }
    `), r.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision ? s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), r.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision ? "return normalize(modelNormal * _normal.xyz);" : "return normalize(_normal.xyz);"}
    }
    `), e.output === y.Normal && (As(r), r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision ? "return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);" : "return normalize((viewNormal * _normal).xyz);"}
    }
    `)), e.hasVertexTangents && r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision ? "return vec4(modelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}

    }
    `);
}
f([x()], ys.prototype, "instancedDoublePrecision", void 0);
const wt = P();
function Cs(t) {
  t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(be.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(be.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(be.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(be.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}
let si = class extends J {
  constructor(e, r) {
    super(e, "int", z.Pass, (o, i, a) => o.setUniform1i(e, r(i, a)));
  }
};
function li(t, e) {
  e.hasSymbolColors ? (t.include(Cs), t.attributes.add(h.SYMBOLCOLOR, "vec4"), t.varyings.add("colorMixMode", "mediump float"), t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)) : (t.fragment.uniforms.add(new si("colorMixMode", (r) => Xn[r.colorMixMode])), t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));
}
function ci(t, e) {
  e.hasVertexColors ? (t.attributes.add(h.COLOR, "vec4"), t.varyings.add("vColor", "vec4"), t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`), t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}
let te = class extends J {
  constructor(e, r) {
    super(e, "vec4", z.Pass, (o, i, a) => o.setUniform4fv(e, r(i, a)));
  }
};
function ws(t) {
  t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`), t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`), t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`), t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`), t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function Os(t) {
  t.uniforms.add(new te("screenSizePerspectiveAlignment", (e) => Ms(e.screenSizePerspectiveAlignment || e.screenSizePerspective)));
}
function Ms(t) {
  return oe(Es, t.parameters.divisor, t.parameters.offset, t.parameters.minPixelSize, t.paddingPixelsOverride);
}
const Es = zt();
function di(t, e) {
  const r = t.vertex;
  e.hasVerticalOffset ? ($s(r), e.hasScreenSizePerspective && (t.include(ws), Os(r), gt(t.vertex, e)), r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical ? s`vec3 worldNormal = normalize(worldPos + localOrigin);` : s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective ? s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)) : r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
const Rs = zt();
function $s(t) {
  t.uniforms.add(new te("verticalOffset", (e, r) => {
    const { minWorldLength: o, maxWorldLength: i, screenLength: a } = e.verticalOffset, n = Math.tan(0.5 * r.camera.fovY) / (0.5 * r.camera.fullViewport[3]), l = r.camera.pixelRatio || 1;
    return oe(Rs, a * l, n, o, i);
  }));
}
function Ls(t, e) {
  const r = e.output === y.ObjectAndLayerIdColor, o = e.objectAndLayerIdColorInstanced;
  r && (t.varyings.add("objectAndLayerIdColorVarying", "vec4"), o ? t.attributes.add(h.INSTANCEOBJECTANDLAYERIDCOLOR, "vec4") : t.attributes.add(h.OBJECTANDLAYERIDCOLOR, "vec4")), t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r ? o ? s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;` : s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;` : s``} }`), t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r ? s`fragColor = objectAndLayerIdColorVarying;` : s``} }`);
}
function Cr(t) {
  t.code.add(s`const float MAX_RGBA_FLOAT =
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
function Ps(t, e) {
  switch (t.fragment.include(Cr), e.output) {
    case y.Shadow:
    case y.ShadowHighlight:
    case y.ShadowExcludeHighlight:
      t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);
      break;
    case y.Depth:
      t.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`);
  }
}
const Is = pr(1, 1, 0, 1), Ns = pr(1, 0, 1, 1);
function Ds(t) {
  t.fragment.uniforms.add(new Z("depthTexture", (e, r) => r.highlightDepthTexture)), t.fragment.constants.add("occludedHighlightFlag", "vec4", Is).add("unoccludedHighlightFlag", "vec4", Ns), t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`);
}
let Fs = class extends J {
  constructor(e, r, o) {
    super(e, "vec4", z.Pass, (i, a, n) => i.setUniform4fv(e, r(a, n)), o);
  }
}, zs = class extends J {
  constructor(e, r, o) {
    super(e, "float", z.Pass, (i, a, n) => i.setUniform1fv(e, r(a, n)), o);
  }
}, U = class extends Ji {
  constructor() {
    super(...arguments), this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR = !1, this.DECONFLICTOR_SHOW_VISIBLE = !1, this.DECONFLICTOR_SHOW_INVISIBLE = !1, this.DECONFLICTOR_SHOW_GRID = !1, this.LABELS_SHOW_BORDER = !1, this.TEXT_SHOW_BASELINE = !1, this.TEXT_SHOW_BORDER = !1, this.OVERLAY_DRAW_DEBUG_TEXTURE = !1, this.OVERLAY_SHOW_CENTER = !1, this.SHOW_POI = !1, this.TESTS_DISABLE_OPTIMIZATIONS = !1, this.TESTS_DISABLE_FAST_UPDATES = !1, this.DRAW_MESH_GEOMETRY_NORMALS = !1, this.FEATURE_TILE_FETCH_SHOW_TILES = !1, this.FEATURE_TILE_TREE_SHOW_TILES = !1, this.TERRAIN_TILE_TREE_SHOW_TILES = !1, this.I3S_TREE_SHOW_TILES = !1, this.I3S_SHOW_MODIFICATIONS = !1, this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES = !1, this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL = !1, this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES = !1, this.LINE_WIREFRAMES = !1;
  }
};
f([W()], U.prototype, "SCENEVIEW_HITTEST_RETURN_INTERSECTOR", void 0), f([W()], U.prototype, "DECONFLICTOR_SHOW_VISIBLE", void 0), f([W()], U.prototype, "DECONFLICTOR_SHOW_INVISIBLE", void 0), f([W()], U.prototype, "DECONFLICTOR_SHOW_GRID", void 0), f([W()], U.prototype, "LABELS_SHOW_BORDER", void 0), f([W()], U.prototype, "TEXT_SHOW_BASELINE", void 0), f([W()], U.prototype, "TEXT_SHOW_BORDER", void 0), f([W()], U.prototype, "OVERLAY_DRAW_DEBUG_TEXTURE", void 0), f([W()], U.prototype, "OVERLAY_SHOW_CENTER", void 0), f([W()], U.prototype, "SHOW_POI", void 0), f([W()], U.prototype, "TESTS_DISABLE_OPTIMIZATIONS", void 0), f([W()], U.prototype, "TESTS_DISABLE_FAST_UPDATES", void 0), f([W()], U.prototype, "DRAW_MESH_GEOMETRY_NORMALS", void 0), f([W()], U.prototype, "FEATURE_TILE_FETCH_SHOW_TILES", void 0), f([W()], U.prototype, "FEATURE_TILE_TREE_SHOW_TILES", void 0), f([W()], U.prototype, "TERRAIN_TILE_TREE_SHOW_TILES", void 0), f([W()], U.prototype, "I3S_TREE_SHOW_TILES", void 0), f([W()], U.prototype, "I3S_SHOW_MODIFICATIONS", void 0), f([W()], U.prototype, "LOD_INSTANCE_RENDERER_DISABLE_UPDATES", void 0), f([W()], U.prototype, "LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL", void 0), f([W()], U.prototype, "EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES", void 0), f([W()], U.prototype, "LINE_WIREFRAMES", void 0), U = f([Zi("geoscene.views.3d.support.DebugFlags")], U);
new U();
var ro, oo;
(function(t) {
  t[t.Undefined = 0] = "Undefined", t[t.DefinedSize = 1] = "DefinedSize", t[t.DefinedScale = 2] = "DefinedScale";
})(ro || (ro = {})), function(t) {
  t[t.Undefined = 0] = "Undefined", t[t.DefinedAngle = 1] = "DefinedAngle";
}(oo || (oo = {}));
const Zt = 8;
function vt(t, e) {
  const { vertex: r, attributes: o } = t;
  e.hasVvInstancing && (e.vvSize || e.vvColor) && o.add(h.INSTANCEFEATUREATTRIBUTE, "vec4"), e.vvSize ? (r.uniforms.add(new Q("vvSizeMinSize", (i) => i.vvSize.minSize)), r.uniforms.add(new Q("vvSizeMaxSize", (i) => i.vvSize.maxSize)), r.uniforms.add(new Q("vvSizeOffset", (i) => i.vvSize.offset)), r.uniforms.add(new Q("vvSizeFactor", (i) => i.vvSize.factor)), r.uniforms.add(new pe("vvSymbolRotationMatrix", (i) => i.vvSymbolRotationMatrix)), r.uniforms.add(new Q("vvSymbolAnchor", (i) => i.vvSymbolAnchor)), r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`), r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing ? s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), e.vvColor ? (r.constants.add("vvColorNumber", "int", Zt), r.uniforms.add(new zs("vvColorValues", (i) => i.vvColor.values, Zt), new Fs("vvColorColors", (i) => i.vvColor.colors, Zt)), r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing ? s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }` : "vec4 vvColor() { return vec4(1.0); }"}
    `)) : r.code.add(s`vec4 vvColor() { return vec4(1.0); }`);
}
function Vs(t) {
  t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Sr)}) { discard; } }
  `);
}
function Ue(t, e) {
  Bs(t, e, new ee("textureAlphaCutoff", (r) => r.textureAlphaCutoff));
}
function Bs(t, e, r) {
  const o = t.fragment;
  switch (e.alphaDiscardMode !== X.Mask && e.alphaDiscardMode !== X.MaskBlend || o.uniforms.add(r), e.alphaDiscardMode) {
    case X.Blend:
      return t.include(Vs);
    case X.Opaque:
      o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
      break;
    case X.Mask:
      o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);
      break;
    case X.MaskBlend:
      t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);
  }
}
function ui(t, e) {
  const { vertex: r, fragment: o } = t, i = e.hasModelTransformation;
  if (i) {
    const n = xt();
    r.uniforms.add(new Ve("model", (l) => l.modelTransformation ?? Ke)), r.uniforms.add(new pe("normalTransform", (l) => (Et(n, l.modelTransformation ?? Ke), n)));
  }
  const a = e.hasColorTexture && e.alphaDiscardMode !== X.Opaque;
  switch (e.output) {
    case y.Depth:
    case y.Shadow:
    case y.ShadowHighlight:
    case y.ShadowExcludeHighlight:
    case y.ObjectAndLayerIdColor:
      pt(r, e), t.include(ft, e), t.include(qe, e), t.include(vt, e), t.include(Ps, e), t.include(Be, e), t.include(Ls, e), Zo(t), t.varyings.add("depth", "float"), a && o.uniforms.add(new Z("tex", (n) => n.texture)), r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            ${i ? "vpos = (model * vec4(vpos, 1.0)).xyz;" : ""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `), t.include(Ue, e), o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            ${e.output === y.ObjectAndLayerIdColor ? s`outputObjectAndLayerIdColor();` : s`outputDepth(depth);`}
          }
        `);
      break;
    case y.Normal: {
      pt(r, e), t.include(ft, e), t.include(Ut, e), t.include(Ko, e), t.include(qe, e), t.include(vt, e), a && o.uniforms.add(new Z("tex", (l) => l.texture)), e.normalType === B.ScreenDerivative && t.varyings.add("vPositionView", "vec3");
      const n = e.normalType === B.Attribute || e.normalType === B.Compressed;
      r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            ${i ? "vpos = (model * vec4(vpos, 1.0)).xyz;" : ""}

            ${n ? s`vNormalWorld = ${i ? "normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))" : "dpNormalView(vvLocalNormal(normalModel()))"};` : s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `), t.include(Be, e), t.include(Ue, e), o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}

            ${e.normalType === B.ScreenDerivative ? s`vec3 normal = screenDerivativeNormal(vPositionView);` : s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);
      break;
    }
    case y.Highlight:
      pt(r, e), t.include(ft, e), t.include(qe, e), t.include(vt, e), a && o.uniforms.add(new Z("tex", (n) => n.texture)), r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            ${i ? "vpos = (model * vec4(vpos, 1.0)).xyz;" : ""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `), t.include(Be, e), t.include(Ue, e), t.include(Ds, e), o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            outputHighlight();
          }
        `);
  }
}
function Us(t, e) {
  const r = t.fragment;
  e.hasVertexTangents ? (t.attributes.add(h.TANGENT, "vec4"), t.varyings.add("vTangent", "vec4"), e.doubleSidedMode === re.WindingOrder ? r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`), e.textureCoordinateType !== Y.None && (t.include(Fo, e), r.uniforms.add(e.pbrTextureBindType === z.Pass ? new Z("normalTexture", (o) => o.textureNormal) : new mt("normalTexture", (o) => o.textureNormal)), r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`));
}
new de(h.POSITION, 3, ce.FLOAT, 0, 12);
new de(h.POSITION, 3, ce.FLOAT, 0, 20), new de(h.UV0, 2, ce.FLOAT, 12, 20);
new de(h.POSITION, 3, ce.FLOAT, 0, 32), new de(h.NORMAL, 3, ce.FLOAT, 12, 32), new de(h.UV0, 2, ce.FLOAT, 24, 32);
new de(h.POSITION, 3, ce.FLOAT, 0, 16), new de(h.COLOR, 4, ce.UNSIGNED_BYTE, 12, 16);
new de(h.POSITION, 2, ce.FLOAT, 0, 8);
new de(h.POSITION, 2, ce.FLOAT, 0, 16), new de(h.UV0, 2, ce.FLOAT, 8, 16);
function hi(t, e = !0) {
  t.attributes.add(h.POSITION, "vec2"), e && t.varyings.add("uv", "vec2"), t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e ? s`uv = position * 0.5 + vec2(0.5);` : ""}
    }
  `);
}
function wr(t) {
  t.include(Cr), t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`);
}
let Hs = class extends J {
  constructor(e, r) {
    super(e, "vec2", z.Draw, (o, i, a, n) => o.setUniform2fv(e, r(i, a, n)));
  }
};
const mi = hr.getLogger("geoscene.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
let fi = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(e, r) {
    if (this._includedModules.has(e)) {
      const o = this._includedModules.get(e);
      if (o !== r) {
        mi.error("Trying to include shader module multiple times with different sets of options.");
        const i = /* @__PURE__ */ new Set();
        for (const a of Object.keys(o))
          o[a] !== e[a] && i.add(a);
        for (const a of Object.keys(e))
          o[a] !== e[a] && i.add(a);
        i.forEach((a) => console.error(`  ${a}: current ${o[a]} new ${e[a]}`));
      }
    } else
      this._includedModules.set(e, r), e(this.builder, r);
  }
}, Wt = class extends fi {
  constructor() {
    super(...arguments), this.vertex = new io(), this.fragment = new io(), this.attributes = new ks(), this.varyings = new js(), this.extensions = new cr(), this.constants = new pi();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e) {
    const r = this.extensions.generateSource(e), o = this.attributes.generateSource(e), i = this.varyings.generateSource(e), a = e === "vertex" ? this.vertex : this.fragment, n = a.uniforms.generateSource(), l = a.code.generateSource(), c = e === "vertex" ? Xs : qs, d = this.constants.generateSource().concat(a.constants.generateSource());
    return `#version 300 es
${r.join(`
`)}

${c}

${d.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${l.join(`
`)}`;
  }
  generateBind(e, r) {
    const o = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((n) => {
      const l = n.bind[e];
      l != null && o.set(n.name, l);
    }), this.fragment.uniforms.entries.forEach((n) => {
      const l = n.bind[e];
      l != null && o.set(n.name, l);
    });
    const i = Array.from(o.values()), a = i.length;
    return (n, l, c) => {
      for (let d = 0; d < a; ++d)
        i[d](r, n, l, c);
    };
  }
}, Gs = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(...e) {
    for (const r of e)
      this._add(r);
  }
  get(e) {
    return this._entries.get(e);
  }
  _add(e) {
    if (e != null) {
      if (this._entries.has(e.name) && !this._entries.get(e.name).equals(e))
        throw new mr(`Duplicate uniform name ${e.name} for different uniform type`);
      this._entries.set(e.name, e);
    } else
      mi.error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e) => e.arraySize != null ? `uniform ${e.type} ${e.name}[${e.arraySize}];` : `uniform ${e.type} ${e.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}, Ws = class {
  constructor() {
    this._entries = new Array();
  }
  add(e) {
    this._entries.push(e);
  }
  generateSource() {
    return this._entries;
  }
}, io = class extends fi {
  constructor() {
    super(...arguments), this.uniforms = new Gs(), this.code = new Ws(), this.constants = new pi();
  }
  get builder() {
    return this;
  }
}, ks = class {
  constructor() {
    this._entries = new Array();
  }
  add(e, r) {
    this._entries.push([e, r]);
  }
  generateSource(e) {
    return e === "fragment" ? [] : this._entries.map((r) => `in ${r[1]} ${r[0]};`);
  }
}, js = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, r) {
    this._entries.has(e) && H(this._entries.get(e) === r), this._entries.set(e, r);
  }
  generateSource(e) {
    const r = new Array();
    return this._entries.forEach((o, i) => r.push(e === "vertex" ? `out ${o} ${i};` : `in ${o} ${i};`)), r;
  }
}, cr = class dr {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e) {
    this._entries.add(e);
  }
  generateSource(e) {
    const r = e === "vertex" ? dr.ALLOWLIST_VERTEX : dr.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((o) => r.includes(o)).map((o) => `#extension ${o} : enable`);
  }
};
cr.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], cr.ALLOWLIST_VERTEX = [];
let pi = class k {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e, r, o) {
    let i = "ERROR_CONSTRUCTOR_STRING";
    switch (r) {
      case "float":
        i = k._numberToFloatStr(o);
        break;
      case "int":
        i = k._numberToIntStr(o);
        break;
      case "bool":
        i = o.toString();
        break;
      case "vec2":
        i = `vec2(${k._numberToFloatStr(o[0])},                            ${k._numberToFloatStr(o[1])})`;
        break;
      case "vec3":
        i = `vec3(${k._numberToFloatStr(o[0])},                            ${k._numberToFloatStr(o[1])},                            ${k._numberToFloatStr(o[2])})`;
        break;
      case "vec4":
        i = `vec4(${k._numberToFloatStr(o[0])},                            ${k._numberToFloatStr(o[1])},                            ${k._numberToFloatStr(o[2])},                            ${k._numberToFloatStr(o[3])})`;
        break;
      case "ivec2":
        i = `ivec2(${k._numberToIntStr(o[0])},                             ${k._numberToIntStr(o[1])})`;
        break;
      case "ivec3":
        i = `ivec3(${k._numberToIntStr(o[0])},                             ${k._numberToIntStr(o[1])},                             ${k._numberToIntStr(o[2])})`;
        break;
      case "ivec4":
        i = `ivec4(${k._numberToIntStr(o[0])},                             ${k._numberToIntStr(o[1])},                             ${k._numberToIntStr(o[2])},                             ${k._numberToIntStr(o[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        i = `${r}(${Array.prototype.map.call(o, (a) => k._numberToFloatStr(a)).join(", ")})`;
    }
    return this._entries.add(`const ${r} ${e} = ${i};`), this;
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
const qs = `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif

out vec4 fragColor;`, Xs = `precision highp float;
precision highp sampler2D;`, Jt = 4;
function Ks() {
  const t = new Wt(), e = t.fragment;
  t.include(hi);
  const r = (Jt + 1) / 2, o = 1 / (2 * r * r);
  return e.include(wr), e.uniforms.add(new Z("depthMap", (i) => i.depthTexture), new mt("tex", (i) => i.colorTexture), new Hs("blurSize", (i) => i.blurSize), new ee("projScale", (i, a) => {
    const n = Yi(a.camera.eye, a.camera.center);
    return n > 5e4 ? Math.max(0, i.projScale - (n - 5e4)) : i.projScale;
  }), new Ce("nearFar", (i, a) => a.camera.nearFar)), e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `), e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(Jt)}; r <= ${s.int(Jt)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `), t;
}
const Qs = Object.freeze(Object.defineProperty({ __proto__: null, build: Ks }, Symbol.toStringTag, { value: "Module" }));
let Zs = class vi extends Ar {
  initializeProgram(e) {
    return new yr(e.rctx, vi.shader.get().build(), Ht);
  }
  initializePipeline() {
    return gr({ colorWrite: xr });
  }
};
Zs.shader = new Gt(Qs, () => import("./SSAOBlur.glsl-h2bbq4sG.js"));
function Js(t) {
  t.fragment.uniforms.add(new te("projInfo", (e, r) => Ys(r))), t.fragment.uniforms.add(new Ce("zScale", (e, r) => gi(r))), t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function Ys(t) {
  const e = t.camera.projectionMatrix;
  return e[11] === 0 ? oe(ao, 2 / (t.camera.fullWidth * e[0]), 2 / (t.camera.fullHeight * e[5]), (1 + e[12]) / e[0], (1 + e[13]) / e[5]) : oe(ao, -2 / (t.camera.fullWidth * e[0]), -2 / (t.camera.fullHeight * e[5]), (1 - e[8]) / e[0], (1 - e[9]) / e[5]);
}
const ao = zt();
function gi(t) {
  return t.camera.projectionMatrix[11] === 0 ? Rt(no, 0, 1) : Rt(no, 1, 0);
}
const no = To(), so = 16;
function el() {
  const t = new Wt(), e = t.fragment;
  return t.include(hi), e.include(wr), t.include(Js), e.uniforms.add(new ee("radius", (r, o) => xi(o.camera))), e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`), e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`), e.uniforms.add(new Ce("nearFar", (r, o) => o.camera.nearFar), new Z("normalMap", (r) => r.normalTexture), new Z("depthMap", (r) => r.depthTexture), new Ce("zScale", (r, o) => gi(o)), new ee("projScale", (r) => r.projScale), new Z("rnm", (r) => r.noiseTexture), new Ce("rnmScale", (r, o) => Rt(lo, o.camera.fullWidth / r.noiseTexture.descriptor.width, o.camera.fullHeight / r.noiseTexture.descriptor.height)), new ee("intensity", (r) => r.intensity), new Ce("screenSize", (r, o) => Rt(lo, o.camera.fullWidth, o.camera.fullHeight))), e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(so)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(so)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `), t;
}
function xi(t) {
  return Math.max(10, 20 * t.computeScreenPixelSizeAtDist(Math.abs(4 * t.relativeElevation)));
}
const lo = To(), tl = Object.freeze(Object.defineProperty({ __proto__: null, build: el, getRadius: xi }, Symbol.toStringTag, { value: "Module" }));
let rl = class Ti extends Ar {
  initializeProgram(e) {
    return new yr(e.rctx, Ti.shader.get().build(), Ht);
  }
  initializePipeline() {
    return gr({ colorWrite: xr });
  }
};
rl.shader = new Gt(tl, () => import("./SSAO.glsl-TSQTTkpE.js"));
const ol = 2;
function Or(t, e) {
  const r = t.fragment;
  e.receiveAmbientOcclusion ? (r.uniforms.add(new Z("ssaoTex", (o, i) => i.ssaoHelper.colorTexture)), r.constants.add("blurSizePixelsInverse", "float", 1 / ol), r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)) : r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);
}
function il(t, e) {
  const r = t.fragment, o = e.lightingSphericalHarmonicsOrder !== void 0 ? e.lightingSphericalHarmonicsOrder : 2;
  o === 0 ? (r.uniforms.add(new Q("lightingAmbientSH0", (i, a) => K(co, a.lighting.sh.r[0], a.lighting.sh.g[0], a.lighting.sh.b[0]))), r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : o === 1 ? (r.uniforms.add(new te("lightingAmbientSH_R", (i, a) => oe(Te, a.lighting.sh.r[0], a.lighting.sh.r[1], a.lighting.sh.r[2], a.lighting.sh.r[3])), new te("lightingAmbientSH_G", (i, a) => oe(Te, a.lighting.sh.g[0], a.lighting.sh.g[1], a.lighting.sh.g[2], a.lighting.sh.g[3])), new te("lightingAmbientSH_B", (i, a) => oe(Te, a.lighting.sh.b[0], a.lighting.sh.b[1], a.lighting.sh.b[2], a.lighting.sh.b[3]))), r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)) : o === 2 && (r.uniforms.add(new Q("lightingAmbientSH0", (i, a) => K(co, a.lighting.sh.r[0], a.lighting.sh.g[0], a.lighting.sh.b[0])), new te("lightingAmbientSH_R1", (i, a) => oe(Te, a.lighting.sh.r[1], a.lighting.sh.r[2], a.lighting.sh.r[3], a.lighting.sh.r[4])), new te("lightingAmbientSH_G1", (i, a) => oe(Te, a.lighting.sh.g[1], a.lighting.sh.g[2], a.lighting.sh.g[3], a.lighting.sh.g[4])), new te("lightingAmbientSH_B1", (i, a) => oe(Te, a.lighting.sh.b[1], a.lighting.sh.b[2], a.lighting.sh.b[3], a.lighting.sh.b[4])), new te("lightingAmbientSH_R2", (i, a) => oe(Te, a.lighting.sh.r[5], a.lighting.sh.r[6], a.lighting.sh.r[7], a.lighting.sh.r[8])), new te("lightingAmbientSH_G2", (i, a) => oe(Te, a.lighting.sh.g[5], a.lighting.sh.g[6], a.lighting.sh.g[7], a.lighting.sh.g[8])), new te("lightingAmbientSH_B2", (i, a) => oe(Te, a.lighting.sh.b[5], a.lighting.sh.b[6], a.lighting.sh.b[7], a.lighting.sh.b[8]))), r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`), e.pbrMode !== $.Normal && e.pbrMode !== $.Schematic || r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
const co = P(), Te = zt();
function Mr(t) {
  t.uniforms.add(new Q("mainLightDirection", (e, r) => r.lighting.mainLight.direction));
}
function kt(t) {
  t.uniforms.add(new Q("mainLightIntensity", (e, r) => r.lighting.mainLight.intensity));
}
function uo(t) {
  Mr(t.fragment), kt(t.fragment), t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);
}
function al(t) {
  const e = t.fragment.code;
  e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`), e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`), e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);
}
function _i(t) {
  t.vertex.code.add(s`const float PI = 3.141592653589793;`), t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
}
function Er(t, e) {
  const r = t.fragment.code;
  t.include(_i), e.pbrMode !== $.Normal && e.pbrMode !== $.Schematic && e.pbrMode !== $.Terrain && e.pbrMode !== $.TerrainWithWater || (r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`), r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)), e.pbrMode !== $.Normal && e.pbrMode !== $.Schematic || (t.include(al), r.add(s`struct PBRShadingInfo
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
};`), r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`), r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`), r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));
}
let nl = class extends J {
  constructor(e, r) {
    super(e, "bool", z.Pass, (o, i, a) => o.setUniform1b(e, r(i, a)));
  }
};
const sl = 0.4;
function Rr(t) {
  t.constants.add("ambientBoostFactor", "float", sl);
}
function $r(t) {
  t.uniforms.add(new ee("lightingGlobalFactor", (e, r) => r.lighting.globalFactor));
}
function bi(t, e) {
  const r = t.fragment;
  switch (t.include(Or, e), e.pbrMode !== $.Disabled && t.include(Er, e), t.include(il, e), t.include(_i), r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode === $.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), Rr(r), $r(r), Mr(r), r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical ? s`normalize(vPosWorld)` : s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), kt(r), r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`), e.pbrMode) {
    case $.Disabled:
    case $.WaterOnIntegratedMesh:
    case $.Water:
      t.include(uo), r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);
      break;
    case $.Normal:
    case $.Schematic:
      r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), e.useFillLights ? r.uniforms.add(new nl("hasFillLights", (o, i) => i.enableFillLights)) : r.constants.add("hasFillLights", "bool", !1), r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), r.uniforms.add(new ee("lightingSpecularStrength", (o, i) => i.lighting.mainLight.specularStrength), new ee("lightingEnvironmentStrength", (o, i) => i.lighting.mainLight.environmentStrength)), r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode === $.Schematic ? s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));` : s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);
      break;
    case $.Terrain:
    case $.TerrainWithWater:
      t.include(uo), r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);
      break;
    default:
      Ye(e.pbrMode);
    case $.COUNT:
  }
}
function It(t, e) {
  e.hasMultipassTerrain && (t.fragment.include(wr), t.fragment.uniforms.add(new Z("terrainDepthTexture", (r, o) => o.multipassTerrain.linearDepthTexture)), t.fragment.uniforms.add(new Ce("nearFar", (r, o) => o.camera.nearFar)), t.fragment.uniforms.add(new Ce("inverseViewport", (r, o) => o.inverseViewport)), t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround ? ">" : "<="} terrainDepth){
        discard;
      }
    }
  `));
}
class ll extends J {
  constructor(e, r, o) {
    super(e, "mat4", z.Draw, (i, a, n, l) => i.setUniformMatrix4fv(e, r(a, n, l)), o);
  }
}
let cl = class extends J {
  constructor(e, r, o) {
    super(e, "mat4", z.Pass, (i, a, n) => i.setUniformMatrix4fv(e, r(a, n)), o);
  }
};
function Si(t, e) {
  e.receiveShadows && (t.fragment.uniforms.add(new cl("shadowMapMatrix", (r, o) => o.shadowMap.getShadowMapMatrices(r.origin), 4)), yi(t));
}
function Ai(t, e) {
  e.receiveShadows && (t.fragment.uniforms.add(new ll("shadowMapMatrix", (r, o) => o.shadowMap.getShadowMapMatrices(r.origin), 4)), yi(t));
}
function yi(t) {
  const e = t.fragment;
  e.include(Cr), e.uniforms.add(new Z("shadowMapTex", (r, o) => o.shadowMap.depthTexture), new si("numCascades", (r, o) => o.shadowMap.numCascades), new te("cascadeDistances", (r, o) => o.shadowMap.cascadeDistances)), e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
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
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
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
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`);
}
function dl(t) {
  t.vertex.uniforms.add(new pe("colorTextureTransformMatrix", (e) => e.colorTextureTransformMatrix != null ? e.colorTextureTransformMatrix : Je())), t.varyings.add("colorUV", "vec2"), t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function ul(t) {
  t.vertex.uniforms.add(new pe("normalTextureTransformMatrix", (e) => e.normalTextureTransformMatrix != null ? e.normalTextureTransformMatrix : Je())), t.varyings.add("normalUV", "vec2"), t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function hl(t) {
  t.vertex.uniforms.add(new pe("emissiveTextureTransformMatrix", (e) => e.emissiveTextureTransformMatrix != null ? e.emissiveTextureTransformMatrix : Je())), t.varyings.add("emissiveUV", "vec2"), t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function ml(t) {
  t.vertex.uniforms.add(new pe("occlusionTextureTransformMatrix", (e) => e.occlusionTextureTransformMatrix != null ? e.occlusionTextureTransformMatrix : Je())), t.varyings.add("occlusionUV", "vec2"), t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function fl(t) {
  t.vertex.uniforms.add(new pe("metallicRoughnessTextureTransformMatrix", (e) => e.metallicRoughnessTextureTransformMatrix != null ? e.metallicRoughnessTextureTransformMatrix : Je())), t.varyings.add("metallicRoughnessUV", "vec2"), t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);
}
function pl(t) {
  t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
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
function Nt(t) {
  t.include(pl), t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(be.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(be.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(be.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}
function vl(t) {
  const e = new Wt(), { vertex: r, fragment: o, varyings: i } = e;
  if (pt(r, t), e.include(br), i.add("vpos", "vec3"), e.include(vt, t), e.include(ni, t), e.include(di, t), t.hasColorTextureTransform && e.include(dl), t.output === y.Color || t.output === y.Alpha) {
    t.hasNormalTextureTransform && e.include(ul), t.hasEmissionTextureTransform && e.include(hl), t.hasOcclusionTextureTransform && e.include(ml), t.hasMetallicRoughnessTextureTransform && e.include(fl), gt(r, t), e.include(Ut, t), e.include(ft, t);
    const a = t.normalType === B.Attribute || t.normalType === B.Compressed;
    a && t.offsetBackfaces && e.include(ei), e.include(Us, t), e.include(Ko, t), t.instancedColor && e.attributes.add(h.INSTANCECOLOR, "vec4"), i.add("vPositionLocal", "vec3"), e.include(qe, t), e.include(Yo, t), e.include(li, t), e.include(ci, t), r.uniforms.add(new te("externalColor", (l) => l.externalColor)), i.add("vcolorExt", "vec4"), t.hasMultipassTerrain && i.add("depth", "float");
    const n = t.hasModelTransformation;
    if (n) {
      const l = xt();
      r.uniforms.add(new Ve("model", (c) => c.modelTransformation ?? Ke)), r.uniforms.add(new pe("normalTransform", (c) => (Et(l, c.modelTransformation ?? Ke), l)));
    }
    r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor ? "vcolorExt *= instanceColor * 0.003921568627451;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Sr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${n ? "vpos = (model * vec4(vpos, 1.0)).xyz;" : ""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a ? s`vNormalWorld = ${n ? "normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))" : "dpNormal(vvLocalNormal(normalModel()))"};` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a && t.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
        }

        ${t.hasMultipassTerrain ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform ? s`forwardColorUV();` : ""}
        ${t.hasNormalTextureTransform ? s`forwardNormalUV();` : ""}
        ${t.hasEmissionTextureTransform ? s`forwardEmissiveUV();` : ""}
        ${t.hasOcclusionTextureTransform ? s`forwardOcclusionUV();` : ""}
        ${t.hasMetallicRoughnessTextureTransform ? s`forwardMetallicRoughnessUV();` : ""}
      }
    `);
  }
  switch (t.output) {
    case y.Alpha:
      e.include(Be, t), e.include(Ue, t), e.include(It, t), o.uniforms.add(new ee("opacity", (a) => a.opacity), new ee("layerOpacity", (a) => a.layerOpacity)), t.hasColorTexture && o.uniforms.add(new Z("tex", (a) => a.texture)), o.include(Nt), o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${t.hasColorTexture ? s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors ? s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);
      break;
    case y.Color:
      e.include(Be, t), e.include(bi, t), e.include(Or, t), e.include(Ue, t), e.include(t.instancedDoublePrecision ? Si : Ai, t), e.include(It, t), gt(o, t), o.uniforms.add(r.uniforms.get("localOrigin"), new Q("ambient", (a) => a.ambient), new Q("diffuse", (a) => a.diffuse), new ee("opacity", (a) => a.opacity), new ee("layerOpacity", (a) => a.layerOpacity)), t.hasColorTexture && o.uniforms.add(new Z("tex", (a) => a.texture)), e.include(zo, t), e.include(Er, t), o.include(Nt), e.include(En, t), Rr(o), $r(o), kt(o), o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${t.hasColorTexture ? s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType === B.ScreenDerivative ? s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);` : s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode === $.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows ? "readShadowMap(vpos, linearDepth)" : t.spherical ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors ? s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture ? s`
                mat3 tangentSpace = ${t.hasVertexTangents ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform ? s`normalUV` : "vuv0"});` : s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical ? s`normalize(posWorld);` : s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover ? s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);` : ""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode === $.Normal || t.pbrMode === $.Schematic ? s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover ? s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType === Ze.Color ? s`fragColor = premultiplyAlpha(fragColor);` : ""}
      }
    `);
  }
  return e.include(ui, t), e;
}
const gl = Object.freeze(Object.defineProperty({ __proto__: null, build: vl }, Symbol.toStringTag, { value: "Module" }));
let xl = class extends ds {
  constructor() {
    super(...arguments), this.isSchematic = !1, this.usePBR = !1, this.mrrFactors = ir(Qo), this.hasVertexColors = !1, this.hasSymbolColors = !1, this.doubleSided = !1, this.doubleSidedType = "normal", this.cullFace = Me.Back, this.isInstanced = !1, this.hasInstancedColor = !1, this.emissiveFactor = ze(0, 0, 0), this.instancedDoublePrecision = !1, this.normalType = B.Attribute, this.receiveSSAO = !0, this.receiveShadows = !0, this.castShadows = !0, this.shadowMappingEnabled = !1, this.ambient = ze(0.2, 0.2, 0.2), this.diffuse = ze(0.8, 0.8, 0.8), this.externalColor = pr(1, 1, 1, 1), this.colorMixMode = "multiply", this.opacity = 1, this.layerOpacity = 1, this.origin = P(), this.hasSlicePlane = !1, this.hasSliceHighlight = !0, this.offsetTransparentBackfaces = !1, this.vvSize = null, this.vvColor = null, this.vvOpacity = null, this.vvSymbolAnchor = null, this.vvSymbolRotationMatrix = null, this.modelTransformation = null, this.transparent = !1, this.writeDepth = !0, this.customDepthTest = Tt.Less, this.textureAlphaMode = X.Blend, this.textureAlphaCutoff = us, this.textureAlphaPremultiplied = !1, this.hasOccludees = !1, this.renderOccluded = lr.Occlude;
  }
};
class _t extends Ar {
  initializeConfiguration(e, r) {
    r.spherical = e.viewingMode === ar.Global, r.doublePrecisionRequiresObfuscation = e.rctx.driverTest.doublePrecisionRequiresObfuscation.result, r.textureCoordinateType = r.hasColorTexture || r.hasMetallicRoughnessTexture || r.hasEmissionTexture || r.hasOcclusionTexture || r.hasNormalTexture ? Y.Default : Y.None, r.objectAndLayerIdColorInstanced = r.instanced;
  }
  initializeProgram(e) {
    return this._initializeProgram(e, _t.shader);
  }
  _initializeProgram(e, r) {
    return new yr(e.rctx, r.get().build(this.configuration), Ht);
  }
  _convertDepthTestFunction(e) {
    return e === Tt.Lequal ? Ee.LEQUAL : Ee.LESS;
  }
  _makePipeline(e, r) {
    const o = this.configuration, i = e === Ze.NONE, a = e === Ze.FrontFace;
    return gr({ blending: o.output !== y.Color && o.output !== y.Alpha || !o.transparent ? null : i ? La : Pa(e), culling: Tl(o) ? Ia(o.cullFace) : null, depthTest: { func: Na(e, this._convertDepthTestFunction(o.customDepthTest)) }, depthWrite: (i || a) && o.writeDepth ? Da : null, colorWrite: xr, stencilWrite: o.hasOccludees ? hs : null, stencilTest: o.hasOccludees ? r ? fs : ms : null, polygonOffset: i || a ? null : Fa(o.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._makePipeline(this.configuration.transparencyPassType, !0), this._makePipeline(this.configuration.transparencyPassType, !1);
  }
  getPipelineState(e, r) {
    return r ? this._occludeePipelineState : super.getPipelineState(e, r);
  }
}
function Tl(t) {
  return t.cullFace !== Me.None || !t.hasSlicePlane && !t.transparent && !t.doubleSidedMode;
}
_t.shader = new Gt(gl, () => import("./DefaultMaterial.glsl-hHCOyeY0.js"));
class ke extends ai {
}
f([x({ constValue: !0 })], ke.prototype, "hasSliceHighlight", void 0), f([x({ constValue: !1 })], ke.prototype, "hasSliceInVertexProgram", void 0), f([x({ constValue: !1 })], ke.prototype, "instancedDoublePrecision", void 0), f([x({ constValue: !1 })], ke.prototype, "hasModelTransformation", void 0), f([x({ constValue: z.Pass })], ke.prototype, "pbrTextureBindType", void 0);
class A extends ke {
  constructor() {
    super(...arguments), this.output = y.Color, this.alphaDiscardMode = X.Opaque, this.doubleSidedMode = re.None, this.pbrMode = $.Disabled, this.cullFace = Me.None, this.transparencyPassType = Ze.NONE, this.normalType = B.Attribute, this.textureCoordinateType = Y.None, this.customDepthTest = Tt.Less, this.spherical = !1, this.hasVertexColors = !1, this.hasSymbolColors = !1, this.hasVerticalOffset = !1, this.hasSlicePlane = !1, this.hasSliceHighlight = !0, this.hasColorTexture = !1, this.hasMetallicRoughnessTexture = !1, this.hasEmissionTexture = !1, this.hasOcclusionTexture = !1, this.hasNormalTexture = !1, this.hasScreenSizePerspective = !1, this.hasVertexTangents = !1, this.hasOccludees = !1, this.hasMultipassTerrain = !1, this.hasModelTransformation = !1, this.offsetBackfaces = !1, this.vvSize = !1, this.vvColor = !1, this.receiveShadows = !1, this.receiveAmbientOcclusion = !1, this.textureAlphaPremultiplied = !1, this.instanced = !1, this.instancedColor = !1, this.objectAndLayerIdColorInstanced = !1, this.instancedDoublePrecision = !1, this.doublePrecisionRequiresObfuscation = !1, this.writeDepth = !0, this.transparent = !1, this.enableOffset = !0, this.cullAboveGround = !1, this.snowCover = !1, this.hasColorTextureTransform = !1, this.hasEmissionTextureTransform = !1, this.hasNormalTextureTransform = !1, this.hasOcclusionTextureTransform = !1, this.hasMetallicRoughnessTextureTransform = !1;
  }
}
f([x({ count: y.COUNT })], A.prototype, "output", void 0), f([x({ count: X.COUNT })], A.prototype, "alphaDiscardMode", void 0), f([x({ count: re.COUNT })], A.prototype, "doubleSidedMode", void 0), f([x({ count: $.COUNT })], A.prototype, "pbrMode", void 0), f([x({ count: Me.COUNT })], A.prototype, "cullFace", void 0), f([x({ count: Ze.COUNT })], A.prototype, "transparencyPassType", void 0), f([x({ count: B.COUNT })], A.prototype, "normalType", void 0), f([x({ count: Y.COUNT })], A.prototype, "textureCoordinateType", void 0), f([x({ count: Tt.COUNT })], A.prototype, "customDepthTest", void 0), f([x()], A.prototype, "spherical", void 0), f([x()], A.prototype, "hasVertexColors", void 0), f([x()], A.prototype, "hasSymbolColors", void 0), f([x()], A.prototype, "hasVerticalOffset", void 0), f([x()], A.prototype, "hasSlicePlane", void 0), f([x()], A.prototype, "hasSliceHighlight", void 0), f([x()], A.prototype, "hasColorTexture", void 0), f([x()], A.prototype, "hasMetallicRoughnessTexture", void 0), f([x()], A.prototype, "hasEmissionTexture", void 0), f([x()], A.prototype, "hasOcclusionTexture", void 0), f([x()], A.prototype, "hasNormalTexture", void 0), f([x()], A.prototype, "hasScreenSizePerspective", void 0), f([x()], A.prototype, "hasVertexTangents", void 0), f([x()], A.prototype, "hasOccludees", void 0), f([x()], A.prototype, "hasMultipassTerrain", void 0), f([x()], A.prototype, "hasModelTransformation", void 0), f([x()], A.prototype, "offsetBackfaces", void 0), f([x()], A.prototype, "vvSize", void 0), f([x()], A.prototype, "vvColor", void 0), f([x()], A.prototype, "receiveShadows", void 0), f([x()], A.prototype, "receiveAmbientOcclusion", void 0), f([x()], A.prototype, "textureAlphaPremultiplied", void 0), f([x()], A.prototype, "instanced", void 0), f([x()], A.prototype, "instancedColor", void 0), f([x()], A.prototype, "objectAndLayerIdColorInstanced", void 0), f([x()], A.prototype, "instancedDoublePrecision", void 0), f([x()], A.prototype, "doublePrecisionRequiresObfuscation", void 0), f([x()], A.prototype, "writeDepth", void 0), f([x()], A.prototype, "transparent", void 0), f([x()], A.prototype, "enableOffset", void 0), f([x()], A.prototype, "cullAboveGround", void 0), f([x()], A.prototype, "snowCover", void 0), f([x()], A.prototype, "hasColorTextureTransform", void 0), f([x()], A.prototype, "hasEmissionTextureTransform", void 0), f([x()], A.prototype, "hasNormalTextureTransform", void 0), f([x()], A.prototype, "hasOcclusionTextureTransform", void 0), f([x()], A.prototype, "hasMetallicRoughnessTextureTransform", void 0), f([x({ constValue: !0 })], A.prototype, "hasVvInstancing", void 0), f([x({ constValue: !1 })], A.prototype, "useCustomDTRExponentForWater", void 0), f([x({ constValue: !1 })], A.prototype, "supportsTextureAtlas", void 0), f([x({ constValue: !0 })], A.prototype, "useFillLights", void 0);
function _l(t) {
  const e = new Wt(), { vertex: r, fragment: o, varyings: i } = e;
  return pt(r, t), e.include(br), i.add("vpos", "vec3"), e.include(vt, t), e.include(ni, t), e.include(di, t), t.output !== y.Color && t.output !== y.Alpha || (gt(e.vertex, t), e.include(Ut, t), e.include(ft, t), t.offsetBackfaces && e.include(ei), t.instancedColor && e.attributes.add(h.INSTANCECOLOR, "vec4"), i.add("vNormalWorld", "vec3"), i.add("localvpos", "vec3"), t.hasMultipassTerrain && i.add("depth", "float"), e.include(qe, t), e.include(Yo, t), e.include(li, t), e.include(ci, t), r.uniforms.add(new te("externalColor", (a) => a.externalColor)), i.add("vcolorExt", "vec4"), r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor ? "vcolorExt *= instanceColor * 0.003921568627451;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Sr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
          }
          ${t.hasMultipassTerrain ? s`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), t.output === y.Alpha && (e.include(Be, t), e.include(Ue, t), e.include(It, t), o.uniforms.add(new ee("opacity", (a) => a.opacity), new ee("layerOpacity", (a) => a.layerOpacity)), t.hasColorTexture && o.uniforms.add(new Z("tex", (a) => a.texture)), o.include(Nt), o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain ? s`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${t.hasColorTexture ? s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors ? s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)), t.output === y.Color && (e.include(Be, t), e.include(bi, t), e.include(Or, t), e.include(Ue, t), e.include(t.instancedDoublePrecision ? Si : Ai, t), e.include(It, t), gt(e.fragment, t), Mr(o), Rr(o), $r(o), o.uniforms.add(r.uniforms.get("localOrigin"), r.uniforms.get("view"), new Q("ambient", (a) => a.ambient), new Q("diffuse", (a) => a.diffuse), new ee("opacity", (a) => a.opacity), new ee("layerOpacity", (a) => a.layerOpacity)), t.hasColorTexture && o.uniforms.add(new Z("tex", (a) => a.texture)), e.include(zo, t), e.include(Er, t), o.include(Nt), kt(o), o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain ? s`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${t.hasColorTexture ? s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode === $.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : t.spherical ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors ? s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover ? s`albedo = mix(albedo, vec3(1), 0.9);` : s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode === $.Normal || t.pbrMode === $.Schematic ? t.spherical ? s`vec3 normalGround = normalize(vpos + localOrigin);` : s`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : s``}
        ${t.pbrMode === $.Normal || t.pbrMode === $.Schematic ? s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover ? s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType === Ze.Color ? s`fragColor = premultiplyAlpha(fragColor);` : s``}
      }
    `)), e.include(ui, t), e;
}
const bl = Object.freeze(Object.defineProperty({ __proto__: null, build: _l }, Symbol.toStringTag, { value: "Module" }));
class jt extends _t {
  initializeConfiguration(e, r) {
    super.initializeConfiguration(e, r), r.hasMetallicRoughnessTexture = !1, r.hasEmissionTexture = !1, r.hasOcclusionTexture = !1, r.hasNormalTexture = !1, r.hasModelTransformation = !1, r.normalType = B.Attribute, r.doubleSidedMode = re.WindingOrder, r.hasVertexTangents = !1;
  }
  initializeProgram(e) {
    return this._initializeProgram(e, jt.shader);
  }
}
jt.shader = new Gt(bl, () => import("./RealisticTree.glsl-PfqQGmZl.js"));
let Dt = class extends Qn {
  constructor(e) {
    super(e, yl), this.supportsEdges = !0, this._configuration = new A(), this._vertexBufferLayout = Cl(this.parameters);
  }
  isVisibleForOutput(e) {
    return e !== y.Shadow && e !== y.ShadowExcludeHighlight && e !== y.ShadowHighlight || this.parameters.castShadows;
  }
  isVisible() {
    const e = this.parameters;
    if (!super.isVisible() || e.layerOpacity === 0)
      return !1;
    const { hasInstancedColor: r, hasVertexColors: o, hasSymbolColors: i, vvColor: a } = e, n = e.colorMixMode === "replace", l = e.opacity > 0, c = e.externalColor && e.externalColor[3] > 0, d = r || a || i;
    return o && d ? n || l : o ? n ? c : l : d ? n || l : n ? c : l;
  }
  getConfiguration(e, r) {
    return this._configuration.output = e, this._configuration.hasNormalTexture = !!this.parameters.normalTextureId, this._configuration.hasColorTexture = !!this.parameters.textureId, this._configuration.hasVertexTangents = this.parameters.hasVertexTangents, this._configuration.instanced = this.parameters.isInstanced, this._configuration.instancedDoublePrecision = this.parameters.instancedDoublePrecision, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.hasVerticalOffset = this.parameters.verticalOffset != null, this._configuration.hasScreenSizePerspective = this.parameters.screenSizePerspective != null, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasSliceHighlight = this.parameters.hasSliceHighlight, this._configuration.alphaDiscardMode = this.parameters.textureAlphaMode, this._configuration.normalType = this.parameters.normalType, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this.parameters.customDepthTest != null && (this._configuration.customDepthTest = this.parameters.customDepthTest), this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.cullFace = this.parameters.hasSlicePlane ? Me.None : this.parameters.cullFace, this._configuration.hasMultipassTerrain = r.multipassTerrain.enabled, this._configuration.cullAboveGround = r.multipassTerrain.cullAboveGround, this._configuration.hasModelTransformation = this.parameters.modelTransformation != null, e !== y.Color && e !== y.Alpha || (this._configuration.hasVertexColors = this.parameters.hasVertexColors, this._configuration.hasSymbolColors = this.parameters.hasSymbolColors, this.parameters.treeRendering ? this._configuration.doubleSidedMode = re.WindingOrder : this._configuration.doubleSidedMode = this.parameters.doubleSided && this.parameters.doubleSidedType === "normal" ? re.View : this.parameters.doubleSided && this.parameters.doubleSidedType === "winding-order" ? re.WindingOrder : re.None, this._configuration.instancedColor = this.parameters.hasInstancedColor, this._configuration.receiveShadows = this.parameters.receiveShadows && this.parameters.shadowMappingEnabled, this._configuration.receiveAmbientOcclusion = !!r.ssaoHelper.active && this.parameters.receiveSSAO, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.textureAlphaPremultiplied = !!this.parameters.textureAlphaPremultiplied, this._configuration.pbrMode = this.parameters.usePBR ? this.parameters.isSchematic ? $.Schematic : $.Normal : $.Disabled, this._configuration.hasMetallicRoughnessTexture = !!this.parameters.metallicRoughnessTextureId, this._configuration.hasEmissionTexture = !!this.parameters.emissiveTextureId, this._configuration.hasOcclusionTexture = !!this.parameters.occlusionTextureId, this._configuration.offsetBackfaces = !(!this.parameters.transparent || !this.parameters.offsetTransparentBackfaces), this._configuration.transparencyPassType = r.transparencyPassType, this._configuration.enableOffset = r.camera.relativeElevation < za, this._configuration.snowCover = this.hasSnowCover(r), this._configuration.hasColorTextureTransform = !!this.parameters.colorTextureTransformMatrix, this._configuration.hasNormalTextureTransform = !!this.parameters.normalTextureTransformMatrix, this._configuration.hasEmissionTextureTransform = !!this.parameters.emissiveTextureTransformMatrix, this._configuration.hasOcclusionTextureTransform = !!this.parameters.occlusionTextureTransformMatrix, this._configuration.hasMetallicRoughnessTextureTransform = !!this.parameters.metallicRoughnessTextureTransformMatrix), this._configuration;
  }
  hasSnowCover(e) {
    return e.weather != null && e.weatherVisible && e.weather.type === "snowy" && e.weather.snowCover === "enabled";
  }
  intersect(e, r, o, i, a, n) {
    if (this.parameters.verticalOffset != null) {
      const l = o.camera;
      K(er, r[12], r[13], r[14]);
      let c = null;
      switch (o.viewingMode) {
        case ar.Global:
          c = fr(ho, er);
          break;
        case ar.Local:
          c = ea(ho, Ml);
      }
      let d = 0;
      const u = we(El, er, l.eye), m = ur(u), v = fe(u, u, 1 / m);
      let p = null;
      this.parameters.screenSizePerspective && (p = ta(c, v)), d += kn(l, m, this.parameters.verticalOffset, p ?? 0, this.parameters.screenSizePerspective), fe(c, c, d), ra(Yt, c, o.transform.inverseRotation), i = we(wl, i, Yt), a = we(Ol, a, Yt);
    }
    Vn(e, o, i, a, Yn(o.verticalOffset), n);
  }
  requiresSlot(e, r) {
    return r === y.Color || r === y.Alpha || r === y.Depth || r === y.Normal || r === y.Shadow || r === y.ShadowHighlight || r === y.ShadowExcludeHighlight || r === y.Highlight || r === y.ObjectAndLayerIdColor ? e === (this.parameters.transparent ? this.parameters.writeDepth ? je.TRANSPARENT_MATERIAL : je.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : je.OPAQUE_MATERIAL) || e === je.DRAPED_MATERIAL : !1;
  }
  createGLMaterial(e) {
    return new Sl(e);
  }
  createBufferWriter() {
    return new ls(this._vertexBufferLayout);
  }
}, Sl = class extends Ln {
  constructor(e) {
    super({ ...e, ...e.material.parameters });
  }
  _updateShadowState(e) {
    e.shadowMap.enabled !== this._material.parameters.shadowMappingEnabled && this._material.setParameters({ shadowMappingEnabled: e.shadowMap.enabled });
  }
  _updateOccludeeState(e) {
    e.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e.hasOccludees });
  }
  beginSlot(e) {
    this._output !== y.Color && this._output !== y.Alpha || (this._updateShadowState(e), this._updateOccludeeState(e));
    const r = this._material.parameters;
    this.updateTexture(r.textureId);
    const o = e.camera.viewInverseTransposeMatrix;
    return K(r.origin, o[3], o[7], o[11]), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(r.treeRendering ? jt : _t, e);
  }
}, Al = class extends xl {
  constructor() {
    super(...arguments), this.initTextureTransparent = !1, this.treeRendering = !1, this.hasVertexTangents = !1;
  }
};
const yl = new Al();
function Cl(t) {
  const e = wa().vec3f(h.POSITION);
  return t.normalType === B.Compressed ? e.vec2i16(h.NORMALCOMPRESSED, { glNormalized: !0 }) : e.vec3f(h.NORMAL), t.hasVertexTangents && e.vec4f(h.TANGENT), (t.textureId || t.normalTextureId || t.metallicRoughnessTextureId || t.emissiveTextureId || t.occlusionTextureId) && e.vec2f(h.UV0), t.hasVertexColors && e.vec4u8(h.COLOR), t.hasSymbolColors && e.vec4u8(h.SYMBOLCOLOR), oa("enable-feature:objectAndLayerId-rendering") && e.vec4u8(h.OBJECTANDLAYERIDCOLOR), e;
}
const wl = P(), Ol = P(), Ml = ze(0, 0, 1), ho = P(), Yt = P(), er = P(), El = P(), _e = hr.getLogger("geoscene.views.3d.layers.graphics.objectResourceUtils");
async function Rl(t, e) {
  const r = await $l(t, e), o = await Dl(r.textureDefinitions ?? {}, e);
  let i = 0;
  for (const a in o)
    if (o.hasOwnProperty(a)) {
      const n = o[a];
      i += n != null && n.image ? n.image.width * n.image.height * 4 : 0;
    }
  return { resource: r, textures: o, size: i + Sa(r) };
}
async function $l(t, e) {
  const r = e != null && e.streamDataRequester;
  if (r)
    return Ll(t, r, e);
  const o = await _o(ia(t, e));
  if (o.ok === !0)
    return o.value.data;
  bo(o.error), Ci(o.error);
}
async function Ll(t, e, r) {
  const o = await _o(e.request(t, "json", r));
  if (o.ok === !0)
    return o.value;
  bo(o.error), Ci(o.error.details.url);
}
function Ci(t) {
  throw new mr("", `Request for object resource failed: ${t}`);
}
function Pl(t) {
  const e = t.params, r = e.topology;
  let o = !0;
  switch (e.vertexAttributes || (_e.warn("Geometry must specify vertex attributes"), o = !1), e.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const a = e.faces;
      if (a) {
        if (e.vertexAttributes)
          for (const n in e.vertexAttributes) {
            const l = a[n];
            l && l.values ? (l.valueType != null && l.valueType !== "UInt32" && (_e.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`), o = !1), l.valuesPerElement != null && l.valuesPerElement !== 1 && (_e.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`), o = !1)) : (_e.warn(`Indexed geometry does not specify face indices for '${n}' attribute`), o = !1);
          }
      } else
        _e.warn("Indexed geometries must specify faces"), o = !1;
      break;
    }
    default:
      _e.warn(`Unsupported topology '${r}'`), o = !1;
  }
  t.params.material || (_e.warn("Geometry requires material"), o = !1);
  const i = t.params.vertexAttributes;
  for (const a in i)
    i[a].values || (_e.warn("Geometries with externally defined attributes are not yet supported"), o = !1);
  return o;
}
function Il(t, e) {
  var g;
  const r = new Array(), o = new Array(), i = new Array(), a = new Aa(), n = t.resource, l = So.parse(n.version || "1.0", "wosr");
  zl.validate(l);
  const c = n.model.name, d = n.model.geometries, u = n.materialDefinitions ?? {}, m = t.textures;
  let v = 0;
  const p = /* @__PURE__ */ new Map();
  for (let _ = 0; _ < d.length; _++) {
    const T = d[_];
    if (!Pl(T))
      continue;
    const O = Fl(T), D = T.params.vertexAttributes, M = [];
    for (const S in D) {
      const N = D[S], V = N.values;
      M.push([S, new We(V, N.valuesPerElement, !0)]);
    }
    const R = [];
    if (T.params.topology !== "PerAttributeArray") {
      const S = T.params.faces;
      for (const N in S)
        R.push([N, S[N].values]);
    }
    const I = O.texture, b = m && m[I];
    if (b && !p.has(I)) {
      const { image: S, parameters: N } = b, V = new No(S, N);
      o.push(V), p.set(I, V);
    }
    const E = p.get(I), L = E ? E.id : void 0, C = O.material;
    let w = a.get(C, I);
    if (w == null) {
      const S = u[C.substring(C.lastIndexOf("/") + 1)].params;
      S.transparency === 1 && (S.transparency = 0);
      const N = b && b.alphaChannelUsage, V = S.transparency > 0 || N === "transparency" || N === "maskAndTransparency", G = b ? wi(b.alphaChannelUsage) : void 0, j = { ambient: ir(S.diffuse), diffuse: ir(S.diffuse), opacity: 1 - (S.transparency || 0), transparent: V, textureAlphaMode: G, textureAlphaCutoff: 0.33, textureId: L, initTextureTransparent: !0, doubleSided: !0, cullFace: Me.None, colorMixMode: S.externalColorMixMode || "tint", textureAlphaPremultiplied: (b == null ? void 0 : b.parameters.preMultiplyAlpha) ?? !1 };
      e != null && e.materialParamsMixin && Object.assign(j, e.materialParamsMixin), w = new Dt(j), a.set(C, I, w);
    }
    i.push(w);
    const F = new Mo(w, M, R);
    v += ((g = R.find((S) => S[0] === h.POSITION)) == null ? void 0 : g[1].length) ?? 0, r.push(F);
  }
  return { engineResources: [{ name: c, stageResources: { textures: o, materials: i, geometries: r }, pivotOffset: n.model.pivotOffset, numberOfVertices: v, lodThreshold: null }], referenceBoundingBox: Nl(r) };
}
function Nl(t) {
  const e = Ao();
  return t.forEach((r) => {
    const o = r.boundingInfo;
    o != null && ($t(e, o.bbMin), $t(e, o.bbMax));
  }), e;
}
async function Dl(t, e) {
  const r = new Array();
  for (const a in t) {
    const n = t[a], l = n.images[0].data;
    if (!l) {
      _e.warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const c = n.encoding + ";base64," + l, d = "/textureDefinitions/" + a, u = n.channels === "rgba" ? n.alphaChannelUsage || "transparency" : "none", m = { noUnpackFlip: !0, wrap: { s: dt.REPEAT, t: dt.REPEAT }, preMultiplyAlpha: wi(u) !== X.Opaque }, v = e != null && e.disableTextures ? Promise.resolve(null) : yo(c, e);
    r.push(v.then((p) => ({ refId: d, image: p, parameters: m, alphaChannelUsage: u })));
  }
  const o = await Promise.all(r), i = {};
  for (const a of o)
    i[a.refId] = a;
  return i;
}
function wi(t) {
  switch (t) {
    case "mask":
      return X.Mask;
    case "maskAndTransparency":
      return X.MaskBlend;
    case "none":
      return X.Opaque;
    default:
      return X.Blend;
  }
}
function Fl(t) {
  const e = t.params;
  return { id: 1, material: e.material, texture: e.texture, region: e.texture };
}
const zl = new So(1, 2, "wosr");
async function Vl(t, e) {
  var m;
  const r = Oi(Ei(t));
  if (r.fileType === "wosr") {
    const v = await (e.cache ? e.cache.loadWOSR(r.url, e) : Rl(r.url, e)), { engineResources: p, referenceBoundingBox: g } = Il(v, e);
    return { lods: p, referenceBoundingBox: g, isEsriSymbolResource: !1, isWosr: !0 };
  }
  const o = await (e.cache ? e.cache.loadGLTF(r.url, e, !!e.usePBR) : pa(new va(e.streamDataRequester), r.url, e, e.usePBR)), i = (m = o.model.meta) == null ? void 0 : m.ESRI_proxyEllipsoid, a = o.meta.isEsriSymbolResource && i != null && o.meta.uri.includes("/RealisticTrees/");
  a && !o.customMeta.geosceneTreeRendering && (o.customMeta.geosceneTreeRendering = !0, Gl(o, i));
  const n = !!e.usePBR, l = o.meta.isEsriSymbolResource ? { usePBR: n, isSchematic: !1, treeRendering: a, mrrFactors: [...gs] } : { usePBR: n, isSchematic: !1, treeRendering: !1, mrrFactors: [...Qo] }, c = { ...e.materialParamsMixin, treeRendering: a }, { engineResources: d, referenceBoundingBox: u } = Mi(o, l, c, e.skipHighLods && r.specifiedLodIndex == null ? { skipHighLods: !0 } : { skipHighLods: !1, singleLodIndex: r.specifiedLodIndex });
  return { lods: d, referenceBoundingBox: u, isEsriSymbolResource: o.meta.isEsriSymbolResource, isWosr: !1 };
}
function Oi(t) {
  const e = t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  return e ? { fileType: "gltf", url: e[1], specifiedLodIndex: e[4] != null ? Number(e[4]) : null } : t.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: t, specifiedLodIndex: null } : { fileType: "unknown", url: t, specifiedLodIndex: null };
}
function Mi(t, e, r, o) {
  const i = t.model, a = new Array(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = i.lods.length, d = Ao();
  return i.lods.forEach((u, m) => {
    const v = o.skipHighLods === !0 && (c > 1 && m === 0 || c > 3 && m === 1) || o.skipHighLods === !1 && o.singleLodIndex != null && m !== o.singleLodIndex;
    if (v && m !== 0)
      return;
    const p = new ka(u.name, u.lodThreshold, [0, 0, 0]);
    u.parts.forEach((g) => {
      const _ = v ? new Dt({}) : Bl(i, g, p, e, r, n, l), { geometry: T, vertexCount: O } = Ul(g, _ ?? new Dt({})), D = T.boundingInfo;
      D != null && m === 0 && ($t(d, D.bbMin), $t(d, D.bbMax)), _ != null && (p.stageResources.geometries.push(T), p.numberOfVertices += O);
    }), v || a.push(p);
  }), { engineResources: a, referenceBoundingBox: d };
}
function Bl(t, e, r, o, i, a, n) {
  const l = e.material + (e.attributes.normal ? "_normal" : "") + (e.attributes.color ? "_color" : "") + (e.attributes.texCoord0 ? "_texCoord0" : "") + (e.attributes.tangent ? "_tangent" : ""), c = t.materials.get(e.material), d = e.attributes.texCoord0 != null, u = e.attributes.normal != null;
  if (c == null)
    return null;
  const m = Hl(c.alphaMode);
  if (!a.has(l)) {
    if (d) {
      const I = (b, E = !1) => {
        if (b != null && !n.has(b)) {
          const L = t.textures.get(b);
          if (L != null) {
            const C = L.data;
            n.set(b, new No(Xt(C) ? C.data : C, { ...L.parameters, preMultiplyAlpha: !Xt(C) && E, encoding: Xt(C) && C.encoding != null ? C.encoding : void 0 }));
          }
        }
      };
      I(c.textureColor, m !== X.Opaque), I(c.textureNormal), I(c.textureOcclusion), I(c.textureEmissive), I(c.textureMetallicRoughness);
    }
    const p = c.color[0] ** (1 / He), g = c.color[1] ** (1 / He), _ = c.color[2] ** (1 / He), T = c.emissiveFactor[0] ** (1 / He), O = c.emissiveFactor[1] ** (1 / He), D = c.emissiveFactor[2] ** (1 / He), M = c.textureColor != null && d ? n.get(c.textureColor) : null, R = ps({ normalTexture: c.textureNormal, metallicRoughnessTexture: c.textureMetallicRoughness, metallicFactor: c.metallicFactor, roughnessFactor: c.roughnessFactor, emissiveTexture: c.textureEmissive, emissiveFactor: c.emissiveFactor, occlusionTexture: c.textureOcclusion });
    a.set(l, new Dt({ ...o, transparent: m === X.Blend, customDepthTest: Tt.Lequal, textureAlphaMode: m, textureAlphaCutoff: c.alphaCutoff, diffuse: [p, g, _], ambient: [p, g, _], opacity: c.opacity, doubleSided: c.doubleSided, doubleSidedType: "winding-order", cullFace: c.doubleSided ? Me.None : Me.Back, hasVertexColors: !!e.attributes.color, hasVertexTangents: !!e.attributes.tangent, normalType: u ? B.Attribute : B.ScreenDerivative, castShadows: !0, receiveSSAO: !0, textureId: M != null ? M.id : void 0, colorMixMode: c.colorMixMode, normalTextureId: c.textureNormal != null && d ? n.get(c.textureNormal).id : void 0, textureAlphaPremultiplied: M != null && !!M.parameters.preMultiplyAlpha, occlusionTextureId: c.textureOcclusion != null && d ? n.get(c.textureOcclusion).id : void 0, emissiveTextureId: c.textureEmissive != null && d ? n.get(c.textureEmissive).id : void 0, metallicRoughnessTextureId: c.textureMetallicRoughness != null && d ? n.get(c.textureMetallicRoughness).id : void 0, emissiveFactor: [T, O, D], mrrFactors: R ? [...vs] : [c.metallicFactor, c.roughnessFactor, o.mrrFactors[2]], isSchematic: R, colorTextureTransformMatrix: it(c.colorTextureTransform), normalTextureTransformMatrix: it(c.normalTextureTransform), occlusionTextureTransformMatrix: it(c.occlusionTextureTransform), emissiveTextureTransformMatrix: it(c.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: it(c.metallicRoughnessTextureTransform), ...i }));
  }
  const v = a.get(l);
  if (r.stageResources.materials.push(v), d) {
    const p = (g) => {
      g != null && r.stageResources.textures.push(n.get(g));
    };
    p(c.textureColor), p(c.textureNormal), p(c.textureOcclusion), p(c.textureEmissive), p(c.textureMetallicRoughness);
  }
  return v;
}
function Ul(t, e) {
  const r = t.attributes.position.count, o = ga(t.indices || r, t.primitiveType), i = bt(3 * r), { typedBuffer: a, typedBufferStride: n } = t.attributes.position;
  ma(i, a, t.transform, 3, n);
  const l = [[h.POSITION, new We(i, 3, !0)]], c = [[h.POSITION, o]];
  if (t.attributes.normal != null) {
    const d = bt(3 * r), { typedBuffer: u, typedBufferStride: m } = t.attributes.normal;
    Et(Ot, t.transform), fa(d, u, Ot, 3, m), l.push([h.NORMAL, new We(d, 3, !0)]), c.push([h.NORMAL, o]);
  }
  if (t.attributes.tangent != null) {
    const d = bt(4 * r), { typedBuffer: u, typedBufferStride: m } = t.attributes.tangent;
    Et(Ot, t.transform), xa(d, u, Ot, 4, m), l.push([h.TANGENT, new We(d, 4, !0)]), c.push([h.TANGENT, o]);
  }
  if (t.attributes.texCoord0 != null) {
    const d = bt(2 * r), { typedBuffer: u, typedBufferStride: m } = t.attributes.texCoord0;
    Ta(d, u, 2, m), l.push([h.UV0, new We(d, 2, !0)]), c.push([h.UV0, o]);
  }
  if (t.attributes.color != null) {
    const d = new Uint8Array(4 * r);
    t.attributes.color.elementCount === 4 ? t.attributes.color instanceof nr ? Vr(d, t.attributes.color, 255) : t.attributes.color instanceof Bt ? _a(d, t.attributes.color) : t.attributes.color instanceof da && Vr(d, t.attributes.color, 1 / 256) : (d.fill(255), t.attributes.color instanceof Lt ? zr(d, t.attributes.color, 255, 4) : t.attributes.color instanceof ua ? ba(d, t.attributes.color.typedBuffer, 4, t.attributes.color.typedBufferStride) : t.attributes.color instanceof ha && zr(d, t.attributes.color, 1 / 256, 4)), l.push([h.COLOR, new We(d, 4, !0)]), c.push([h.COLOR, o]);
  }
  return { geometry: new Mo(e, l, c), vertexCount: r };
}
const Ot = xt();
function Hl(t) {
  switch (t) {
    case "BLEND":
      return X.Blend;
    case "MASK":
      return X.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return X.Opaque;
  }
}
function Gl(t, e) {
  for (let r = 0; r < t.model.lods.length; ++r) {
    const o = t.model.lods[r];
    for (const i of o.parts) {
      const a = i.attributes.normal;
      if (a == null)
        return;
      const n = i.attributes.position, l = n.count, c = P(), d = P(), u = P(), m = new Uint8Array(4 * l), v = new Float64Array(3 * l), p = aa(Vt(), i.transform);
      let g = 0, _ = 0;
      for (let T = 0; T < l; T++) {
        n.getVec(T, d), a.getVec(T, c), Xe(d, d, i.transform), we(u, d, e.center), Fr(u, u, e.radius);
        const O = u[2], D = ur(u), M = Math.min(0.45 + 0.55 * D * D, 1);
        Fr(u, u, e.radius), p !== null && Xe(u, u, p), fr(u, u), r + 1 !== t.model.lods.length && t.model.lods.length > 1 && tr(u, u, c, O > -1 ? 0.2 : Math.min(-4 * O - 3.8, 1)), v[g] = u[0], v[g + 1] = u[1], v[g + 2] = u[2], g += 3, m[_] = 255 * M, m[_ + 1] = 255 * M, m[_ + 2] = 255 * M, m[_ + 3] = 255, _ += 4;
      }
      i.attributes.normal = new Lt(v), i.attributes.color = new Bt(m);
    }
  }
}
const hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fetch: Vl,
  gltfToEngineResources: Mi,
  parseUrl: Oi
}, Symbol.toStringTag, { value: "Module" }));
export {
  _l as I,
  vl as Y,
  Ks as c,
  el as d,
  xi as m,
  hd as o
};

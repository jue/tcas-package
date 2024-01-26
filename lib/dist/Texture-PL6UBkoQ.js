import { s as B, Z as $, y as V, eD as w, r as A, eE as L, w as z } from "./index-j1oaLRcp.js";
import { f as S, M as g, L as E, D as R, G as y, P as D, U as I, t as k } from "./enums-n72NRQQZ.js";
const H = B.getLogger("geoscene/views/webgl");
function Y(o, t) {
  switch (t) {
    case o.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case o.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case o.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case o.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case o.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case o.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
const G = !!$("enable-feature:webgl-debug");
function K() {
  return G;
}
function tt() {
  return G;
}
function b(o) {
  if (K()) {
    const t = o.getError();
    if (t) {
      const e = Y(o, t), a = new Error().stack;
      H.error(new V("webgl-error", "WebGL error occured", { message: e, stack: a }));
    }
  }
}
function U(o) {
  return window.WebGL2RenderingContext && o instanceof window.WebGL2RenderingContext;
}
const F = 4;
class _ {
  constructor(t, e, a = null) {
    if (this._context = t, this.type = "texture", this._glName = null, this._descriptor = void 0, this._samplingModeDirty = !1, this._wrapModeDirty = !1, this._wasImmutablyAllocated = !1, t.instanceCounter.increment(S.Texture, this), this._descriptor = { target: g.TEXTURE_2D, samplingMode: E.LINEAR, wrapMode: R.REPEAT, flipped: !1, hasMipmap: !1, isOpaque: !1, unpackAlignment: 4, preMultiplyAlpha: !1, isImmutable: !1, ...e }, t.type !== w.WEBGL2 && (this._descriptor.isImmutable && (this._descriptor.isImmutable = !1), x(this._descriptor.target)))
      throw new Error("3D and array textures are not supported in WebGL1");
    this._descriptor.target === g.TEXTURE_CUBE_MAP ? this._setDataCubeMap(a) : this.setData(a);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  dispose() {
    this._context.gl && this._glName && (this._context.unbindTextureAllUnits(this), this._context.gl.deleteTexture(this._glName), this._glName = null, this._context.instanceCounter.decrement(S.Texture, this));
  }
  release() {
    this.dispose();
  }
  resize(t, e) {
    const a = this._descriptor;
    if (a.width !== t || a.height !== e) {
      if (this._wasImmutablyAllocated)
        throw new Error("Immutable textures can't be resized!");
      a.width = t, a.height = e, this._descriptor.target === g.TEXTURE_CUBE_MAP ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  _setDataCubeMap(t = null) {
    for (let e = g.TEXTURE_CUBE_MAP_POSITIVE_X; e <= g.TEXTURE_CUBE_MAP_NEGATIVE_Z; e++)
      this._setData(t, e);
  }
  setData(t) {
    this._setData(t);
  }
  _setData(t, e) {
    if (!this._context || !this._context.gl)
      return;
    const a = this._context.gl;
    this._glName || (this._glName = a.createTexture()), t === void 0 && (t = null);
    const r = this._descriptor;
    e != null || (e = r.target);
    const i = x(e);
    var p;
    t === null && (r.width = r.width || F, r.height = r.height || F, i && (r.depth = (p = r.depth) != null ? p : 1));
    const n = this._context.bindTexture(this, _.TEXTURE_UNIT_FOR_UPDATES);
    this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES), _._validateTexture(this._context, r), this._configurePixelStorage();
    const s = r.pixelFormat;
    let l = r.internalFormat ? r.internalFormat : this._deriveInternalFormat(s, r.dataType);
    if (N(t)) {
      let h = t.width, m = t.height;
      const u = 1;
      t instanceof HTMLVideoElement && (h = t.videoWidth, m = t.videoHeight), r.width && r.height, i && r.depth, r.isImmutable && !this._wasImmutablyAllocated && this._texStorage(e, l, r.hasMipmap, h, m, u), this._texImage(e, 0, l, h, m, u, t), b(a), r.hasMipmap && this.generateMipmap(), r.width === void 0 && (r.width = h), r.height === void 0 && (r.height = m), i && r.depth === void 0 && (r.depth = u);
    } else {
      const { width: h, height: m, depth: u } = r;
      if (h != null && m != null || console.error("Width and height must be specified!"), i && u == null && console.error("Depth must be specified!"), r.isImmutable && !this._wasImmutablyAllocated && this._texStorage(e, l, r.hasMipmap, h, m, u), a.DEPTH24_STENCIL8 && l === a.DEPTH_STENCIL && (l = a.DEPTH24_STENCIL8), P(t)) {
        const c = t.levels, d = v(e, h, m, u), T = Math.min(d - 1, c.length - 1);
        U(a) ? a.texParameteri(r.target, a.TEXTURE_MAX_LEVEL, T) : r.hasMipmap = r.hasMipmap && d === c.length;
        const M = l;
        if (!Z(M))
          throw new Error("Attempting to use compressed data with an umcompressed format!");
        this._forEachMipmapLevel((f, O, X, C) => {
          const W = c[Math.min(f, c.length - 1)];
          this._compressedTexImage(e, f, M, O, X, C, W);
        }, T);
      } else
        A(t) ? (this._texImage(e, 0, l, h, m, u, t), b(a), r.hasMipmap && this.generateMipmap()) : this._forEachMipmapLevel((c, d, T, M) => {
          this._texImage(e, c, l, d, T, M, null), b(a);
        });
    }
    _._applySamplingMode(a, this._descriptor), _._applyWrapMode(a, this._descriptor), _._applyAnisotropicFilteringParameters(this._context, this._descriptor), b(a), this._context.bindTexture(n, _.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData(t, e, a, r, i, p) {
    p || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const n = this._context.gl, s = this._descriptor, { pixelFormat: l, internalFormat: h, dataType: m, isImmutable: u, target: c } = s;
    if (u && !this._wasImmutablyAllocated)
      throw new Error("Cannot update immutable texture before allocation!");
    const d = this._context.bindTexture(this, _.TEXTURE_UNIT_FOR_UPDATES);
    (e < 0 || a < 0 || r > s.width || i > s.height || e + r > s.width || a + i > s.height) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage(), N(p) ? n.texSubImage2D(c, t, e, a, l, m, p) : P(p) ? n.compressedTexSubImage2D(c, t, e, a, r, i, h, p.levels[t]) : n.texSubImage2D(c, t, e, a, r, i, l, m, p), this._context.bindTexture(d, _.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(t, e, a, r, i, p, n, s) {
    s || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const l = this._context.gl;
    if (!U(l))
      throw new Error("3D textures are not supported in WebGL1");
    const h = this._descriptor, { pixelFormat: m, dataType: u, isImmutable: c, target: d, internalFormat: T } = h;
    if (c && !this._wasImmutablyAllocated)
      throw new Error("Cannot update immutable texture before allocation!");
    x(d) || console.warn("Attempting to set 3D texture data on a non-3D texture");
    const M = this._context.bindTexture(this, _.TEXTURE_UNIT_FOR_UPDATES);
    if (this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES), (e < 0 || a < 0 || r < 0 || i > h.width || p > h.height || n > h.depth || e + i > h.width || a + p > h.height || r + n > h.depth) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage(), P(s))
      s = s.levels[t], l.compressedTexSubImage3D(d, t, e, a, r, i, p, n, T, s);
    else {
      const f = s;
      l.texSubImage3D(d, t, e, a, r, i, p, n, m, u, f);
    }
    this._context.bindTexture(M, _.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const t = this._descriptor;
    if (!t.hasMipmap) {
      if (this._wasImmutablyAllocated)
        throw new Error("Cannot add mipmaps to immutable texture after allocation");
      t.hasMipmap = !0, this._samplingModeDirty = !0, _._validateTexture(this._context, t);
    }
    t.samplingMode === E.LINEAR ? (this._samplingModeDirty = !0, t.samplingMode = E.LINEAR_MIPMAP_NEAREST) : t.samplingMode === E.NEAREST && (this._samplingModeDirty = !0, t.samplingMode = E.NEAREST_MIPMAP_NEAREST);
    const e = this._context.bindTexture(this, _.TEXTURE_UNIT_FOR_UPDATES);
    this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES), this._context.gl.generateMipmap(t.target), this._context.bindTexture(e, _.TEXTURE_UNIT_FOR_UPDATES);
  }
  setSamplingMode(t) {
    t !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t, this._samplingModeDirty = !0);
  }
  setWrapMode(t) {
    t !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t, _._validateTexture(this._context, this._descriptor), this._wrapModeDirty = !0);
  }
  applyChanges() {
    const t = this._context.gl, e = this._descriptor;
    this._samplingModeDirty && (_._applySamplingMode(t, e), this._samplingModeDirty = !1), this._wrapModeDirty && (_._applyWrapMode(t, e), this._wrapModeDirty = !1);
  }
  _deriveInternalFormat(t, e) {
    if (this._context.type === w.WEBGL1)
      return t;
    switch (e) {
      case y.FLOAT:
        switch (t) {
          case D.RGBA:
            return I.RGBA32F;
          case D.RGB:
            return I.RGB32F;
          default:
            throw new Error("Unable to derive format");
        }
      case y.UNSIGNED_BYTE:
        switch (t) {
          case D.RGBA:
            return I.RGBA8;
          case D.RGB:
            return I.RGB8;
        }
      default:
        return t;
    }
  }
  _configurePixelStorage() {
    const t = this._context.gl, { unpackAlignment: e, flipped: a, preMultiplyAlpha: r } = this._descriptor;
    t.pixelStorei(t.UNPACK_ALIGNMENT, e), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, a ? 1 : 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r ? 1 : 0);
  }
  _texStorage(t, e, a, r, i, p) {
    const n = this._context.gl;
    if (!U(n))
      throw new Error("Immutable textures are not supported in WebGL1");
    if (!q(e))
      throw new Error("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable)
      return;
    const s = a ? v(t, r, i, p) : 1;
    x(t) ? n.texStorage3D(t, s, e, r, i, p) : n.texStorage2D(t, s, e, r, i), this._wasImmutablyAllocated = !0;
  }
  _texImage(t, e, a, r, i, p, n) {
    const s = this._context.gl;
    let l = null;
    const h = this._context.type === w.WEBGL2, m = x(t), { isImmutable: u, pixelFormat: c, dataType: d } = this._descriptor;
    if (h && (l = s), h || !N(n))
      if (u) {
        if (A(n)) {
          const T = n;
          m ? l.texSubImage3D(t, e, 0, 0, 0, r, i, p, c, d, T) : s.texSubImage2D(t, e, 0, 0, r, i, c, d, T);
        }
      } else {
        const T = z(n);
        m ? l.texImage3D(t, e, a, r, i, p, 0, c, d, T) : s.texImage2D(t, e, a, r, i, 0, c, d, T);
      }
    else
      s.texImage2D(t, 0, a, c, d, n);
  }
  _compressedTexImage(t, e, a, r, i, p, n) {
    const s = this._context.gl;
    let l = null;
    const h = x(t), m = this._descriptor.isImmutable;
    if (h) {
      if (this._context.type !== w.WEBGL2)
        throw new Error("3D textures are not supported in WebGL1");
      l = s;
    }
    m ? A(n) && (h ? l.compressedTexSubImage3D(t, e, 0, 0, 0, r, i, p, a, n) : s.compressedTexSubImage2D(t, e, 0, 0, r, i, a, n)) : h ? l.compressedTexImage3D(t, e, a, r, i, p, 0, n) : s.compressedTexImage2D(t, e, a, r, i, 0, n);
  }
  _forEachMipmapLevel(t, e = 1 / 0) {
    let { width: a, height: r, depth: i, hasMipmap: p, target: n } = this._descriptor;
    const s = n === g.TEXTURE_3D;
    for (let l = 0; t(l, a, r, i), p && (a !== 1 || r !== 1 || s && i !== 1) && !(l >= e); ++l)
      a = Math.max(1, a >> 1), r = Math.max(1, r >> 1), s && (i = Math.max(1, i >> 1));
  }
  static _validateTexture(t, e) {
    (e.width < 0 || e.height < 0 || e.depth < 0) && console.error("Negative dimension parameters are not allowed!");
    const a = U(t.gl), r = L(e.width) && L(e.height);
    a || !e.isImmutable && !x(e.target) || console.error("Immutable and 3D-like textures are not supported in WebGL1!"), a || r || (typeof e.wrapMode == "number" ? e.wrapMode !== R.CLAMP_TO_EDGE && console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!") : e.wrapMode.s === R.CLAMP_TO_EDGE && e.wrapMode.t === R.CLAMP_TO_EDGE || console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"), e.hasMipmap && console.error("Mipmapping requires power-of-two textures!"));
  }
  static _applySamplingMode(t, e) {
    let a = e.samplingMode, r = e.samplingMode;
    a === E.LINEAR_MIPMAP_NEAREST || a === E.LINEAR_MIPMAP_LINEAR ? (a = E.LINEAR, e.hasMipmap || (r = E.LINEAR)) : a !== E.NEAREST_MIPMAP_NEAREST && a !== E.NEAREST_MIPMAP_LINEAR || (a = E.NEAREST, e.hasMipmap || (r = E.NEAREST)), t.texParameteri(e.target, t.TEXTURE_MAG_FILTER, a), t.texParameteri(e.target, t.TEXTURE_MIN_FILTER, r);
  }
  static _applyWrapMode(t, e) {
    typeof e.wrapMode == "number" ? (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode), t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode)) : (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode.s), t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode.t));
  }
  static _applyAnisotropicFilteringParameters(t, e) {
    var a;
    const r = t.capabilities.textureFilterAnisotropic;
    r && t.gl.texParameterf(e.target, r.TEXTURE_MAX_ANISOTROPY, (a = e.maxAnisotropy) != null ? a : 1);
  }
}
function q(o) {
  return o in I;
}
function Z(o) {
  return o in k;
}
function P(o) {
  return A(o) && "type" in o && o.type === "compressed";
}
function j(o) {
  return A(o) && "byteLength" in o;
}
function N(o) {
  return A(o) && !P(o) && !j(o);
}
function x(o) {
  return o === g.TEXTURE_3D || o === g.TEXTURE_2D_ARRAY;
}
function v(o, t, e, a = 1) {
  let r = Math.max(t, e);
  return o === g.TEXTURE_3D && (r = Math.max(r, a)), Math.round(Math.log(r) / Math.LN2) + 1;
}
_.TEXTURE_UNIT_FOR_UPDATES = 0;
export {
  K as a,
  tt as c,
  U as n,
  b as s,
  _ as u
};

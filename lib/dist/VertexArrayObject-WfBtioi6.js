import { s as V, eD as g, r as C, fm as W, fn as Y, fo as tt, l as w, fp as et } from "./index-j1oaLRcp.js";
import { s as M, u as B, a as k, c as it } from "./Texture-PL6UBkoQ.js";
import { f as N, A as f, F as H, C as P, t as d, U as h, B as R, P as E, u as m, V as l, G as v, o as j, n as F, M as b, Y as y, L as Q, D as Z } from "./enums-n72NRQQZ.js";
const T = V.getLogger("geoscene.views.webgl.BufferObject");
function st(a) {
  return tt(a);
}
let rt = class O {
  constructor(t, e, i, s) {
    this._context = t, this.bufferType = e, this.usage = i, this._glName = null, this._size = -1, this._indexType = void 0, t.instanceCounter.increment(N.Buffer, this), this._glName = this._context.gl.createBuffer(), M(this._context.gl), s && this.setData(s);
  }
  static createIndex(t, e, i) {
    return new O(t, f.ELEMENT_ARRAY_BUFFER, e, i);
  }
  static createVertex(t, e, i) {
    return new O(t, f.ARRAY_BUFFER, e, i);
  }
  static createUniform(t, e, i) {
    if (t.type !== g.WEBGL2)
      throw new Error("Uniform buffers are supported in WebGL2 only!");
    return new O(t, f.UNIFORM_BUFFER, e, i);
  }
  static createPixelPack(t, e = H.STREAM_READ, i) {
    if (t.type !== g.WEBGL2)
      throw new Error("Pixel pack buffers are supported in WebGL2 only!");
    const s = new O(t, f.PIXEL_PACK_BUFFER, e);
    return i && s.setSize(i), s;
  }
  static createPixelUnpack(t, e = H.STREAM_DRAW, i) {
    if (t.type !== g.WEBGL2)
      throw new Error("Pixel unpack buffers are supported in WebGL2 only!");
    return new O(t, f.PIXEL_UNPACK_BUFFER, e, i);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get byteSize() {
    return this.bufferType === f.ELEMENT_ARRAY_BUFFER ? this._indexType === P.UNSIGNED_INT ? 4 * this._size : 2 * this._size : this._size;
  }
  get _isVAOAware() {
    return this.bufferType === f.ELEMENT_ARRAY_BUFFER || this.bufferType === f.ARRAY_BUFFER;
  }
  dispose() {
    var t;
    (t = this._context) != null && t.gl ? (this._glName && (this._context.gl.deleteBuffer(this._glName), this._glName = null), this._context.instanceCounter.decrement(N.Buffer, this), this._context = null) : this._glName && T.warn("Leaked WebGL buffer object");
  }
  setSize(t, e = null) {
    if (t <= 0 && T.error("Buffer size needs to be positive!"), this.bufferType === f.ELEMENT_ARRAY_BUFFER && C(e))
      switch (this._indexType = e, e) {
        case P.UNSIGNED_SHORT:
          t *= 2;
          break;
        case P.UNSIGNED_INT:
          t *= 4;
      }
    this._setBufferData(t);
  }
  setData(t) {
    if (!t)
      return;
    let e = t.byteLength;
    this.bufferType === f.ELEMENT_ARRAY_BUFFER && (W(t) && (e /= 2, this._indexType = P.UNSIGNED_SHORT), Y(t) && (e /= 4, this._indexType = P.UNSIGNED_INT)), this._setBufferData(e, t);
  }
  _setBufferData(t, e = null) {
    this._size = t;
    const i = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const s = this._context.gl;
    C(e) ? s.bufferData(this.bufferType, e, this.usage) : s.bufferData(this.bufferType, t, this.usage), M(s), this._isVAOAware && this._context.bindVAO(i);
  }
  setSubData(t, e = 0, i = 0, s = t.byteLength) {
    if (!t)
      return;
    (e < 0 || e >= this._size) && T.error("offset is out of range!");
    let o = e, n = i, r = s, c = t.byteLength;
    this.bufferType === f.ELEMENT_ARRAY_BUFFER && (W(t) ? (c /= 2, o *= 2, n *= 2, r *= 2) : Y(t) && (c /= 4, o *= 4, n *= 4, r *= 4)), s === void 0 && (s = c - 1), i >= s && T.error("end must be bigger than start!"), e + i - s > this._size && T.error("An attempt to write beyond the end of the buffer!");
    const _ = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const u = this._context.gl, p = ArrayBuffer.isView(t) ? t.buffer : t, U = n === 0 && r === t.byteLength ? p : p.slice(n, r);
    u.bufferSubData(this.bufferType, o, U), M(u), this._isVAOAware && this._context.bindVAO(_);
  }
  setSubDataFromView(t, e, i, s) {
    if (!t)
      return;
    (e < 0 || e >= this._size) && T.error("offset is out of range!"), i >= s && T.error("end must be bigger than start!"), e + i - s > this._size && T.error("An attempt to write beyond the end of the buffer!");
    const o = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const n = this._context.gl;
    if (this._context.type === g.WEBGL2)
      n.bufferSubData(this.bufferType, e * t.BYTES_PER_ELEMENT, t, i, s - i);
    else {
      const r = i === 0 && s === t.length ? t : t.subarray(i, s);
      n.bufferSubData(this.bufferType, e * t.BYTES_PER_ELEMENT, r);
    }
    M(n), this._isVAOAware && this._context.bindVAO(o);
  }
  getSubData(t, e = 0, i, s) {
    if (this._context.type !== g.WEBGL2)
      return void T.error("Get buffer subdata is supported in WebGL2 only!");
    if (i < 0 || s < 0)
      return void T.error("Problem getting subdata: offset and length were less than zero!");
    const o = st(t) ? t.BYTES_PER_ELEMENT : 1;
    if (o * ((i ?? 0) + (s ?? 0)) > t.byteLength)
      return void T.error("Problem getting subdata: offset and length exceeded destination size!");
    e + o * (s ?? 0) > this.byteSize && T.warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const n = this._context.gl;
    this._context.bindBuffer(this, f.COPY_READ_BUFFER), n.getBufferSubData(f.COPY_READ_BUFFER, e, t, i, s), this._context.unbindBuffer(f.COPY_READ_BUFFER);
  }
  async getSubDataAsync(t, e = 0, i, s) {
    this._context.type === g.WEBGL2 ? (await this._context.clientWaitAsync(), this.getSubData(t, e, i, s)) : T.error("Get buffer subdata is supported in WebGL2 only!");
  }
};
class L {
  constructor(t, e) {
    this._context = t, this._desc = e, this.type = "renderbuffer", this._context.instanceCounter.increment(N.Renderbuffer, this);
    const i = this._context.gl;
    this.glName = i.createRenderbuffer(), this._context.bindRenderbuffer(this);
    const { width: s, height: o, internalFormat: n, multisampled: r } = e;
    if (r) {
      if (this._context.type !== g.WEBGL2)
        throw new Error("Multisampled renderbuffers are not supported in WebGL1!");
      i.renderbufferStorageMultisample(i.RENDERBUFFER, this.samples, n, s, o);
    } else
      i.renderbufferStorage(i.RENDERBUFFER, n, s, o);
  }
  get descriptor() {
    return this._desc;
  }
  get samples() {
    const t = this._desc.samples, e = this._context.parameters.maxSamples;
    return t ? Math.min(t, e) : e;
  }
  resize(t, e) {
    const i = this._desc;
    if (i.width === t && i.height === e)
      return;
    i.width = t, i.height = e;
    const s = this._context.gl;
    this._context.bindRenderbuffer(this), i.multisampled ? s.renderbufferStorageMultisample(s.RENDERBUFFER, this.samples, i.internalFormat, i.width, i.height) : s.renderbufferStorage(s.RENDERBUFFER, i.internalFormat, i.width, i.height);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(N.Renderbuffer, this), this._context = null);
  }
}
function Et(a) {
  const t = a.gl;
  switch (t.getError()) {
    case t.NO_ERROR:
      return null;
    case t.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case t.INVALID_VALUE:
      return "A numeric argument is out of range";
    case t.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case t.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case t.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case t.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function dt(a, t) {
  return a.vertexBuffers[t].size / nt(a.layout[t]);
}
function nt(a) {
  return a[0].stride;
}
function at(a, t, e, i, s = 0) {
  const o = a.gl, n = a.capabilities.instancing;
  a.bindBuffer(e);
  for (const r of i) {
    const c = t.get(r.name);
    c === void 0 && console.error(`There is no location for vertex attribute '${r.name}' defined.`);
    const _ = s * r.stride;
    if (r.count <= 4)
      o.vertexAttribPointer(c, r.count, r.type, r.normalized, r.stride, r.offset + _), o.enableVertexAttribArray(c), r.divisor > 0 && n && n.vertexAttribDivisor(c, r.divisor);
    else if (r.count === 9)
      for (let u = 0; u < 3; u++)
        o.vertexAttribPointer(c + u, 3, r.type, r.normalized, r.stride, r.offset + 12 * u + _), o.enableVertexAttribArray(c + u), r.divisor > 0 && n && n.vertexAttribDivisor(c + u, r.divisor);
    else if (r.count === 16)
      for (let u = 0; u < 4; u++)
        o.vertexAttribPointer(c + u, 4, r.type, r.normalized, r.stride, r.offset + 16 * u + _), o.enableVertexAttribArray(c + u), r.divisor > 0 && n && n.vertexAttribDivisor(c + u, r.divisor);
    else
      console.error("Unsupported vertex attribute element count: " + r.count);
  }
}
function ht(a, t, e, i) {
  const s = a.gl, o = a.capabilities.instancing;
  a.bindBuffer(e);
  for (const n of i) {
    const r = t.get(n.name);
    if (n.count <= 4)
      s.disableVertexAttribArray(r), n.divisor && n.divisor > 0 && o && o.vertexAttribDivisor(r, 0);
    else if (n.count === 9)
      for (let c = 0; c < 3; c++)
        s.disableVertexAttribArray(r + c), n.divisor && n.divisor > 0 && o && o.vertexAttribDivisor(r + c, 0);
    else if (n.count === 16)
      for (let c = 0; c < 4; c++)
        s.disableVertexAttribArray(r + c), n.divisor && n.divisor > 0 && o && o.vertexAttribDivisor(r + c, 0);
    else
      console.error("Unsupported vertex attribute element count: " + n.count);
  }
  a.unbindBuffer(f.ARRAY_BUFFER);
}
function ot(a) {
  switch (a) {
    case E.ALPHA:
    case E.LUMINANCE:
    case E.RED:
    case E.RED_INTEGER:
    case h.R8:
    case h.R8I:
    case h.R8UI:
    case h.R8_SNORM:
    case R.STENCIL_INDEX8:
      return 1;
    case E.LUMINANCE_ALPHA:
    case E.RG:
    case E.RG_INTEGER:
    case h.RGBA4:
    case h.R16F:
    case h.R16I:
    case h.R16UI:
    case h.RG8:
    case h.RG8I:
    case h.RG8UI:
    case h.RG8_SNORM:
    case h.RGB565:
    case h.RGB5_A1:
    case R.DEPTH_COMPONENT16:
      return 2;
    case E.DEPTH_COMPONENT:
    case E.RGB:
    case E.RGB_INTEGER:
    case h.RGB8:
    case h.RGB8I:
    case h.RGB8UI:
    case h.RGB8_SNORM:
    case h.SRGB8:
    case R.DEPTH_COMPONENT24:
      return 3;
    case E.DEPTH_STENCIL:
    case E.RGBA:
    case E.RGBA_INTEGER:
    case h.RGBA8:
    case h.R32F:
    case h.R11F_G11F_B10F:
    case h.RG16F:
    case h.R32I:
    case h.R32UI:
    case h.RG16I:
    case h.RG16UI:
    case h.RGBA8I:
    case h.RGBA8UI:
    case h.RGBA8_SNORM:
    case h.SRGB8_ALPHA8:
    case h.RGB9_E5:
    case h.RGB10_A2UI:
    case h.RGB10_A2:
    case R.DEPTH_STENCIL:
    case R.DEPTH_COMPONENT32F:
    case R.DEPTH24_STENCIL8:
      return 4;
    case R.DEPTH32F_STENCIL8:
      return 5;
    case h.RGB16F:
    case h.RGB16I:
    case h.RGB16UI:
      return 6;
    case h.RG32F:
    case h.RG32I:
    case h.RG32UI:
    case h.RGBA16F:
    case h.RGBA16I:
    case h.RGBA16UI:
      return 8;
    case h.RGB32F:
    case h.RGB32I:
    case h.RGB32UI:
      return 12;
    case h.RGBA32F:
    case h.RGBA32I:
    case h.RGBA32UI:
      return 16;
    case d.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case d.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case d.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case d.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case d.COMPRESSED_R11_EAC:
    case d.COMPRESSED_SIGNED_R11_EAC:
    case d.COMPRESSED_RGB8_ETC2:
    case d.COMPRESSED_SRGB8_ETC2:
    case d.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case d.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case d.COMPRESSED_RG11_EAC:
    case d.COMPRESSED_SIGNED_RG11_EAC:
    case d.COMPRESSED_RGBA8_ETC2_EAC:
    case d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}
function z(a) {
  if (w(a))
    return 0;
  if ("descriptor" in a)
    return a.glName ? z(a.descriptor) : 0;
  const t = a.internalFormat || "pixelFormat" in a && a.pixelFormat;
  if (!t)
    return 0;
  const e = "hasMipmap" in a && a.hasMipmap ? 1.3 : 1, i = a.width * a.height;
  return ot(t) * i * e;
}
const ct = V.getLogger("geoscene.views.webgl.FrameBufferObject");
class S {
  constructor(t, e, i = null, s = null) {
    if (this._context = t, this._glName = null, this._depthAttachment = null, this._stencilAttachment = null, this._colorAttachments = /* @__PURE__ */ new Map(), this._initialized = !1, this._desc = { ...e }, t.instanceCounter.increment(N.Framebuffer, this), C(i)) {
      Array.isArray(i) || (i = [i]);
      for (let n = 0; n < i.length; ++n) {
        const r = i[n], c = m.COLOR_ATTACHMENT0 + n;
        let _;
        q(r) ? (x(r) ? (_ = r.descriptor, this._colorAttachments.set(c, r)) : (_ = r, this._colorAttachments.set(c, new B(this._context, _))), G(_, this._desc)) : (K(r) ? (_ = r.descriptor, this._colorAttachments.set(c, r)) : (_ = r, this._colorAttachments.set(c, new L(this._context, _))), I(_, this._desc)), this._validateColorAttachmentPoint(c);
      }
    }
    if (C(s)) {
      let n, r;
      if (q(s))
        this._context.capabilities.depthTexture || console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"), x(s) ? (r = s.descriptor, this._depthStencilTexture = s) : (r = s, this._depthStencilTexture = new B(this._context, r)), G(r, this._desc);
      else {
        var o;
        K(s) ? (r = s.descriptor, n = s) : (r = s, n = new L(this._context, r));
        const c = (o = this._desc.depthStencilTarget) != null ? o : l.DEPTH_STENCIL_RENDER_BUFFER;
        c === l.STENCIL_RENDER_BUFFER ? this._stencilAttachment = n : c === l.DEPTH_RENDER_BUFFER || c === l.DEPTH_STENCIL_RENDER_BUFFER ? this._depthAttachment = n : console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'), I(r, this._desc);
      }
    }
  }
  dispose() {
    if (!this._desc)
      return;
    const t = this._context.getBoundFramebufferObject();
    this._disposeColorAttachments(), this._disposeDepthStencilAttachments(), this._glName && (this._context.gl.deleteFramebuffer(this._glName), this._glName = null), this._context.bindFramebuffer(t), this._context.instanceCounter.decrement(N.Framebuffer, this), this._desc = null;
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._desc;
  }
  get colorTexture() {
    const t = this._colorAttachments.get(m.COLOR_ATTACHMENT0);
    return t && x(t) ? t : null;
  }
  get colorAttachment() {
    return this._colorAttachments.get(m.COLOR_ATTACHMENT0);
  }
  get depthStencilAttachment() {
    return this._depthStencilTexture || this._depthAttachment || this._stencilAttachment;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    return this._desc.width;
  }
  get height() {
    return this._desc.height;
  }
  get gpuMemoryUsage() {
    return [...this._colorAttachments].reduce((t, [e, i]) => t + z(i), 0) + z(this.depthStencilAttachment);
  }
  getColorTexture(t) {
    const e = this._colorAttachments.get(t);
    return e && x(e) ? e : null;
  }
  attachColorTexture(t, e = m.COLOR_ATTACHMENT0) {
    t && (this._validateColorAttachmentPoint(e), G(t.descriptor, this._desc), this._disposeColorAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(t.glName, e)), this._colorAttachments.set(e, t));
  }
  detachColorTexture(t = m.COLOR_ATTACHMENT0) {
    const e = this._colorAttachments.get(t);
    if (x(e)) {
      const i = e;
      return this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t)), this._colorAttachments.delete(t), i;
    }
  }
  setColorTextureTarget(t, e = m.COLOR_ATTACHMENT0) {
    const i = this._colorAttachments.get(e);
    x(i) && this._framebufferTexture2D(i.glName, e, t);
  }
  attachDepthStencilTexture(t) {
    if (w(t))
      return;
    const e = t.descriptor;
    e.pixelFormat !== E.DEPTH_STENCIL && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), e.dataType !== v.UNSIGNED_INT_24_8 && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"), this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"), G(e, this._desc), this._desc.depthStencilTarget && this._desc.depthStencilTarget !== l.DEPTH_STENCIL_TEXTURE && (this._desc.depthStencilTarget = l.DEPTH_STENCIL_TEXTURE), this._disposeDepthStencilAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(t.glName, j)), this._depthStencilTexture = t;
  }
  detachDepthStencilTexture() {
    const t = this._depthStencilTexture;
    return t && this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, j)), this._depthStencilTexture = null, t;
  }
  attachDepthStencilBuffer(t) {
    if (w(t))
      return;
    const e = t.descriptor;
    if (e.internalFormat !== R.DEPTH_STENCIL && e.internalFormat !== R.DEPTH_COMPONENT16 && console.error("Depth/Stencil buffer must have correct internalFormat"), I(e, this._desc), this._disposeDepthStencilAttachments(), this._desc.depthStencilTarget = e.internalFormat === R.DEPTH_STENCIL ? l.DEPTH_STENCIL_RENDER_BUFFER : l.DEPTH_RENDER_BUFFER, this._initialized) {
      this._context.bindFramebuffer(this);
      const i = this._context.gl, s = this._desc.depthStencilTarget === l.DEPTH_RENDER_BUFFER ? i.DEPTH_ATTACHMENT : i.DEPTH_STENCIL_ATTACHMENT;
      i.framebufferRenderbuffer(F.FRAMEBUFFER, s, i.RENDERBUFFER, t.glName);
    }
    this._depthAttachment = t;
  }
  detachDepthStencilBuffer() {
    const t = this._context.gl, e = this._depthAttachment;
    if (e && this._initialized) {
      this._context.bindFramebuffer(this);
      const i = this._desc.depthStencilTarget === l.DEPTH_RENDER_BUFFER ? t.DEPTH_ATTACHMENT : t.DEPTH_STENCIL_ATTACHMENT;
      t.framebufferRenderbuffer(F.FRAMEBUFFER, i, t.RENDERBUFFER, null);
    }
    return this._depthAttachment = null, e;
  }
  detachAll() {
    this._colorAttachments.forEach((t, e) => this._detachColorAttachment(e)), this.detachDepthStencilBuffer(), this.detachDepthStencilTexture();
  }
  copyToTexture(t, e, i, s, o, n, r) {
    (t < 0 || e < 0 || o < 0 || n < 0) && console.error("Offsets cannot be negative!"), (i <= 0 || s <= 0) && console.error("Copy width and height must be greater than zero!");
    const c = this._desc, _ = r.descriptor;
    r.descriptor.target !== b.TEXTURE_2D && console.error("Texture target must be TEXTURE_2D!"), (t + i > c.width || e + s > c.height || o + i > _.width || n + s > _.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const u = this._context, p = u.bindTexture(r, B.TEXTURE_UNIT_FOR_UPDATES);
    u.setActiveTexture(B.TEXTURE_UNIT_FOR_UPDATES), u.bindFramebuffer(this), u.gl.copyTexSubImage2D(b.TEXTURE_2D, 0, o, n, t, e, i, s), u.bindTexture(p, B.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(t, e, i, s, o, n, r) {
    (i <= 0 || s <= 0) && console.error("Copy width and height must be greater than zero!"), r || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this), this._context.gl.readPixels(t, e, i, s, o, n, r);
  }
  async readPixelsAsync(t, e, i, s, o, n, r) {
    if (this._context.type !== g.WEBGL2)
      return k() && console.warn("Attempting to read pixels using pixel buffer object without WebGL2"), void this.readPixels(t, e, i, s, o, n, r);
    const c = this._context.gl, _ = rt.createPixelPack(this._context, H.STREAM_READ, r.byteLength);
    this._context.bindBuffer(_), this._context.bindFramebuffer(this), c.readPixels(t, e, i, s, o, n, 0), this._context.unbindBuffer(f.PIXEL_PACK_BUFFER), await _.getSubDataAsync(r), _.dispose();
  }
  resize(t, e) {
    const i = this._desc;
    if (i.width !== t || i.height !== e) {
      if (!this._initialized)
        return i.width = t, i.height = e, this._colorAttachments.forEach((s) => {
          s && s.resize(t, e);
        }), void (this._depthStencilTexture && this._depthStencilTexture.resize(t, e));
      i.width = t, i.height = e, this._colorAttachments.forEach((s) => {
        s && s.resize(t, e);
      }), this._depthStencilTexture != null ? this._depthStencilTexture.resize(t, e) : (this._depthAttachment || this._stencilAttachment) && (this._depthAttachment && this._depthAttachment.resize(t, e), this._stencilAttachment && this._stencilAttachment.resize(t, e)), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = !1;
    }
  }
  initializeAndBind(t = F.FRAMEBUFFER) {
    var e, i, s, o;
    const n = this._context.gl;
    if (this._initialized)
      return void n.bindFramebuffer(t, this.glName);
    this._glName && n.deleteFramebuffer(this._glName);
    const r = this._context, c = n.createFramebuffer(), _ = this._desc, u = (e = _.colorTarget) != null ? e : y.RENDER_BUFFER, p = (i = _.width) != null ? i : 1, U = (s = _.height) != null ? s : 1;
    if (n.bindFramebuffer(t, c), this._colorAttachments.size === 0)
      if (u === y.TEXTURE || u === y.CUBEMAP)
        this._colorAttachments.set(m.COLOR_ATTACHMENT0, _t(r, _, this.descriptor.colorTarget === y.CUBEMAP ? b.TEXTURE_CUBE_MAP : b.TEXTURE_2D));
      else {
        const A = new L(r, { internalFormat: h.RGBA4, width: p, height: U });
        this._colorAttachments.set(m.COLOR_ATTACHMENT0, A);
      }
    this._colorAttachments.forEach((A, $) => {
      A && (x(A) ? this._framebufferTexture2D(A.glName, $, J(A), t) : n.framebufferRenderbuffer(t, $, n.RENDERBUFFER, A.glName));
    });
    const X = (o = _.depthStencilTarget) != null ? o : l.NONE;
    switch (X) {
      case l.DEPTH_RENDER_BUFFER:
      case l.DEPTH_STENCIL_RENDER_BUFFER: {
        this._depthAttachment || (this._depthAttachment = new L(r, { internalFormat: _.depthStencilTarget === l.DEPTH_RENDER_BUFFER ? R.DEPTH_COMPONENT16 : R.DEPTH_STENCIL, width: p, height: U }));
        const A = X === l.DEPTH_RENDER_BUFFER ? n.DEPTH_ATTACHMENT : n.DEPTH_STENCIL_ATTACHMENT;
        n.framebufferRenderbuffer(t, A, n.RENDERBUFFER, this._depthAttachment.glName);
        break;
      }
      case l.STENCIL_RENDER_BUFFER:
        this._stencilAttachment || (this._stencilAttachment = new L(r, { internalFormat: R.STENCIL_INDEX8, width: p, height: U })), n.framebufferRenderbuffer(t, n.STENCIL_ATTACHMENT, n.RENDERBUFFER, this._stencilAttachment.glName);
        break;
      case l.DEPTH_STENCIL_TEXTURE:
        if (!this._depthStencilTexture) {
          r.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");
          const A = { target: b.TEXTURE_2D, pixelFormat: E.DEPTH_STENCIL, dataType: v.UNSIGNED_INT_24_8, samplingMode: Q.NEAREST, wrapMode: Z.CLAMP_TO_EDGE, width: p, height: U };
          this._depthStencilTexture = new B(r, A);
        }
        this._framebufferTexture2D(this._depthStencilTexture.glName, n.DEPTH_STENCIL_ATTACHMENT, J(this._depthStencilTexture), t);
    }
    it() && n.checkFramebufferStatus(t) !== n.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!"), this._glName = c, this._initialized = !0;
  }
  _framebufferTexture2D(t, e = m.COLOR_ATTACHMENT0, i = b.TEXTURE_2D, s = F.FRAMEBUFFER, o = 0) {
    this._context.gl.framebufferTexture2D(s, e, i, t, o);
  }
  _detachColorAttachment(t) {
    k() && console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");
    const e = this._context.gl, i = this._colorAttachments.get(t);
    return x(i) ? this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t)) : this._initialized && (this._context.bindFramebuffer(this), e.framebufferRenderbuffer(F.FRAMEBUFFER, t, e.RENDERBUFFER, null)), this._colorAttachments.delete(t), i;
  }
  _disposeColorAttachments() {
    this._colorAttachments.forEach((t, e) => {
      this._detachColorAttachment(e), t.dispose();
    }), this._colorAttachments.clear();
  }
  _disposeDepthStencilAttachments() {
    const t = this._context.gl;
    if (this._depthAttachment) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const e = this._desc.depthStencilTarget === l.DEPTH_RENDER_BUFFER ? t.DEPTH_ATTACHMENT : t.DEPTH_STENCIL_ATTACHMENT;
        t.framebufferRenderbuffer(F.FRAMEBUFFER, e, t.RENDERBUFFER, null);
      }
      this._depthAttachment.dispose(), this._depthAttachment = null;
    }
    this._stencilAttachment && (this._initialized && (this._context.bindFramebuffer(this), t.framebufferRenderbuffer(F.FRAMEBUFFER, t.STENCIL_ATTACHMENT, t.RENDERBUFFER, null)), this._stencilAttachment.dispose(), this._stencilAttachment = null), this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t.DEPTH_STENCIL_ATTACHMENT)), this._depthStencilTexture.dispose(), this._depthStencilTexture = null);
  }
  _validateColorAttachmentPoint(t) {
    if (S._MAX_COLOR_ATTACHMENTS === -1) {
      const i = this._context.capabilities.drawBuffers;
      if (i) {
        const s = this._context.gl;
        S._MAX_COLOR_ATTACHMENTS = s.getParameter(i.MAX_COLOR_ATTACHMENTS);
      } else
        S._MAX_COLOR_ATTACHMENTS = 1;
    }
    const e = t - m.COLOR_ATTACHMENT0;
    e + 1 > S._MAX_COLOR_ATTACHMENTS && ct.error("geoscene.FrameBufferObject", `illegal attachment point for color attachment: ${e + 1}. Implementation supports up to ${S._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
}
function x(a) {
  return "type" in a && a.type === "texture";
}
function K(a) {
  return "type" in a && a.type === "renderbuffer";
}
function q(a) {
  return x(a) || "pixelFormat" in a;
}
function _t(a, t, e) {
  return new B(a, { target: e, pixelFormat: E.RGBA, dataType: v.UNSIGNED_BYTE, samplingMode: Q.NEAREST, wrapMode: Z.CLAMP_TO_EDGE, width: t.width, height: t.height });
}
function G(a, t) {
  a.target !== b.TEXTURE_2D && a.target !== b.TEXTURE_CUBE_MAP && console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"), t.width !== void 0 && t.width >= 0 && t.height !== void 0 && t.height >= 0 ? t.width === a.width && t.height === a.height || console.error("Color attachment texture must match the framebuffer's!") : (t.width = a.width, t.height = a.height);
}
function I(a, t) {
  t.width !== void 0 && t.width >= 0 && t.height !== void 0 && t.height >= 0 ? t.width === a.width && t.height === a.height || console.error("Renderbuffer dimensions must match the framebuffer's!") : (t.width = a.width, t.height = a.height);
}
function J(a) {
  return a.descriptor.target === b.TEXTURE_CUBE_MAP ? b.TEXTURE_CUBE_MAP_POSITIVE_X : b.TEXTURE_2D;
}
S._MAX_COLOR_ATTACHMENTS = -1;
const D = V.getLogger("geoscene.views.webgl.VertexArrayObject");
let Tt = class {
  constructor(t, e, i, s, o = null) {
    this._context = t, this._locations = e, this._layout = i, this._buffers = s, this._indexBuffer = o, this._glName = null, this._initialized = !1, t.instanceCounter.increment(N.VAO, this);
  }
  get glName() {
    return this._glName;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get size() {
    return Object.keys(this._buffers).reduce((t, e) => t + this._buffers[e].size, C(this._indexBuffer) ? this._indexBuffer.size : 0);
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  dispose(t = !0) {
    if (!this._context)
      return void ((this._glName || t && Object.getOwnPropertyNames(this._buffers).length > 0) && D.warn("Leaked WebGL VAO"));
    if (this._glName) {
      var e, i;
      const s = (e = this._context) == null || (i = e.capabilities) == null ? void 0 : i.vao;
      s ? (s.deleteVertexArray(this._glName), this._glName = null) : D.warn("Leaked WebGL VAO");
    }
    if (this._context.getBoundVAO() === this && this._context.bindVAO(null), t) {
      for (const s in this._buffers)
        this._buffers[s].dispose(), delete this._buffers[s];
      this._indexBuffer = et(this._indexBuffer);
    }
    this._context.instanceCounter.decrement(N.VAO, this), this._context = null;
  }
  initialize() {
    if (this._initialized)
      return;
    const t = this._context.capabilities.vao;
    if (t) {
      const e = t.createVertexArray();
      t.bindVertexArray(e), this._bindLayout(), t.bindVertexArray(null), this._glName = e;
    }
    this._initialized = !0;
  }
  bind() {
    this.initialize();
    const t = this._context.capabilities.vao;
    t ? t.bindVertexArray(this.glName) : (this._context.bindVAO(null), this._bindLayout());
  }
  _bindLayout() {
    const { _buffers: t, _layout: e, _indexBuffer: i } = this;
    t || D.error("Vertex buffer dictionary is empty!");
    const s = this._context.gl;
    for (const o in t) {
      const n = t[o];
      n || D.error("Vertex buffer is uninitialized!");
      const r = e[o];
      r || D.error("Vertex element descriptor is empty!"), at(this._context, this._locations, n, r);
    }
    C(i) && (this._context.capabilities.vao ? s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, i.glName) : this._context.bindBuffer(i));
  }
  unbind() {
    this.initialize();
    const t = this._context.capabilities.vao;
    t ? t.bindVertexArray(null) : this._unbindLayout();
  }
  _unbindLayout() {
    const { _buffers: t, _layout: e } = this;
    t || D.error("Vertex buffer dictionary is empty!");
    for (const i in t) {
      const s = t[i];
      s || D.error("Vertex buffer is uninitialized!");
      const o = e[i];
      ht(this._context, this._locations, s, o);
    }
    C(this._indexBuffer) && this._context.unbindBuffer(this._indexBuffer.bufferType);
  }
};
export {
  S as D,
  ot as _,
  rt as c,
  Tt as f,
  Et as i,
  dt as n,
  L as r
};

import { r as C, eD as A, l as M } from "./index-Ek1MTSEY.js";
import { c as b } from "./Texture-__nVcVzI.js";
import { H as p, f as U } from "./enums-n72NRQQZ.js";
const se = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];
var j, q = { exports: {} };
(j = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]) !== void 0 && (q.exports = j);
const le = q.exports;
var R, z = { exports: {} };
R = z, function(r) {
  var e = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"];
  e !== void 0 && (R.exports = e);
}();
const B = z.exports;
var K = { exports: {} };
(function(r) {
  (function(e) {
    var o = /* @__PURE__ */ function() {
      return ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"];
    }();
    o !== void 0 && (r.exports = o);
  })();
})(K);
const ce = K.exports;
var _ = 999, O = 9999, E = 0, P = 1, V = 2, $ = 3, I = 4, D = 5, fe = 6, me = 7, ue = 8, G = 9, he = 10, N = 11, de = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function ge() {
  var r, e, o, t = 0, a = 0, i = _, n = [], m = [], l = 1, s = 0, c = 0, u = !1, g = !1, h = "";
  return function(f) {
    return m = [], f !== null ? Q(f.replace ? f.replace(/\r\n/g, `
`) : f) : Z();
  };
  function d(f) {
    f.length && m.push({ type: de[i], data: f, position: c, line: l, column: s });
  }
  function Q(f) {
    var T;
    for (t = 0, o = (h += f).length; r = h[t], t < o; ) {
      switch (T = t, i) {
        case E:
          t = te();
          break;
        case P:
          t = ee();
          break;
        case V:
          t = k();
          break;
        case $:
          t = re();
          break;
        case I:
          t = ne();
          break;
        case N:
          t = oe();
          break;
        case D:
          t = ae();
          break;
        case O:
          t = ie();
          break;
        case G:
          t = Y();
          break;
        case _:
          t = J();
      }
      T !== t && (h[T] === `
` ? (s = 0, ++l) : ++s);
    }
    return a += t, h = h.slice(t), m;
  }
  function Z(f) {
    return n.length && d(n.join("")), i = he, d("(eof)"), m;
  }
  function J() {
    return n = n.length ? [] : n, e === "/" && r === "*" ? (c = a + t - 1, i = E, e = r, t + 1) : e === "/" && r === "/" ? (c = a + t - 1, i = P, e = r, t + 1) : r === "#" ? (i = V, c = a + t, t) : /\s/.test(r) ? (i = G, c = a + t, t) : (u = /\d/.test(r), g = /[^\w_]/.test(r), c = a + t, i = u ? I : g ? $ : O, t);
  }
  function Y() {
    return /[^\s]/g.test(r) ? (d(n.join("")), i = _, t) : (n.push(r), e = r, t + 1);
  }
  function k() {
    return r !== "\r" && r !== `
` || e === "\\" ? (n.push(r), e = r, t + 1) : (d(n.join("")), i = _, t);
  }
  function ee() {
    return k();
  }
  function te() {
    return r === "/" && e === "*" ? (n.push(r), d(n.join("")), i = _, t + 1) : (n.push(r), e = r, t + 1);
  }
  function re() {
    if (e === "." && /\d/.test(r))
      return i = D, t;
    if (e === "/" && r === "*")
      return i = E, t;
    if (e === "/" && r === "/")
      return i = P, t;
    if (r === "." && n.length) {
      for (; w(n); )
        ;
      return i = D, t;
    }
    if (r === ";" || r === ")" || r === "(") {
      if (n.length)
        for (; w(n); )
          ;
      return d(r), i = _, t + 1;
    }
    var f = n.length === 2 && r !== "=";
    if (/[\w_\d\s]/.test(r) || f) {
      for (; w(n); )
        ;
      return i = _, t;
    }
    return n.push(r), e = r, t + 1;
  }
  function w(f) {
    for (var T, y, F = 0; ; ) {
      if (T = B.indexOf(f.slice(0, f.length + F).join("")), y = B[T], T === -1) {
        if (F-- + f.length > 0)
          continue;
        y = f.slice(0, 1).join("");
      }
      return d(y), c += y.length, (n = n.slice(y.length)).length;
    }
  }
  function oe() {
    return /[^a-fA-F0-9]/.test(r) ? (d(n.join("")), i = _, t) : (n.push(r), e = r, t + 1);
  }
  function ne() {
    return r === "." || /[eE]/.test(r) ? (n.push(r), i = D, e = r, t + 1) : r === "x" && n.length === 1 && n[0] === "0" ? (i = N, n.push(r), e = r, t + 1) : /[^\d]/.test(r) ? (d(n.join("")), i = _, t) : (n.push(r), e = r, t + 1);
  }
  function ae() {
    return r === "f" && (n.push(r), e = r, t += 1), /[eE]/.test(r) || r === "-" && /[eE]/.test(e) ? (n.push(r), e = r, t + 1) : /[^\d]/.test(r) ? (d(n.join("")), i = _, t) : (n.push(r), e = r, t + 1);
  }
  function ie() {
    if (/[^\d\w_]/.test(r)) {
      var f = n.join("");
      return i = le.indexOf(f) > -1 ? ue : ce.indexOf(f) > -1 ? me : fe, d(n.join("")), i = _, t;
    }
    return n.push(r), e = r, t + 1;
  }
}
function _e(r) {
  var e = ge(), o = [];
  return o = (o = o.concat(e(r))).concat(e(null));
}
function pe(r) {
  return _e(r);
}
function xe(r) {
  return r.map((e) => e.type !== "eof" ? e.data : "").join("");
}
const L = ["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"];
function ve(r, e = "100", o = "300 es") {
  const t = /^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const a of r)
    if (a.type === "preprocessor") {
      const i = t.exec(a.data);
      if (i) {
        const n = i[1].replace(/\s\s+/g, " ");
        if (n === o)
          return n;
        if (n === e)
          return a.data = "#version " + o, e;
        throw new Error("unknown glsl version: " + n);
      }
    }
  return r.splice(0, 0, { type: "preprocessor", data: "#version " + o }, { type: "whitespace", data: `
` }), null;
}
function Te(r, e) {
  for (let o = e - 1; o >= 0; o--) {
    const t = r[o];
    if (t.type !== "whitespace" && t.type !== "block-comment") {
      if (t.type !== "keyword")
        break;
      if (t.data === "attribute" || t.data === "in")
        return !0;
    }
  }
  return !1;
}
function S(r, e, o, t) {
  t = t || o;
  for (const a of r)
    if (a.type === "ident" && a.data === o)
      return t in e ? e[t]++ : e[t] = 0, S(r, e, t + "_" + e[t], t);
  return o;
}
function W(r, e, o = "afterVersion") {
  function t(l, s) {
    for (let c = s; c < l.length; c++) {
      const u = l[c];
      if (u.type === "operator" && u.data === ";")
        return c;
    }
    return null;
  }
  function a(l) {
    let s = -1, c = 0, u = -1;
    for (let g = 0; g < l.length; g++) {
      const h = l[g];
      if (h.type === "preprocessor" && (h.data.match(/\#(if|ifdef|ifndef)\s+.+/) ? ++c : h.data.match(/\#endif\s*.*/) && --c), o !== "afterVersion" && o !== "afterPrecision" || h.type === "preprocessor" && /^#version/.test(h.data) && (u = Math.max(u, g)), o === "afterPrecision" && h.type === "keyword" && h.data === "precision") {
        const d = t(l, g);
        if (d === null)
          throw new Error("precision statement not followed by any semicolons!");
        u = Math.max(u, d);
      }
      s < u && c === 0 && (s = g);
    }
    return s + 1;
  }
  const i = { data: `
`, type: "whitespace" }, n = (l) => l < r.length && /[^\r\n]$/.test(r[l].data);
  let m = a(r);
  n(m - 1) && r.splice(m++, 0, i);
  for (const l of e)
    r.splice(m++, 0, l);
  n(m - 1) && n(m) && r.splice(m, 0, i);
}
function ye(r, e, o, t = "lowp") {
  W(r, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: t }, { type: "whitespace", data: " " }, { type: "keyword", data: o }, { type: "whitespace", data: " " }, { type: "ident", data: e }, { type: "operator", data: ";" }], "afterPrecision");
}
function Se(r, e, o, t, a = "lowp") {
  W(r, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: t.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: a }, { type: "whitespace", data: " " }, { type: "keyword", data: o }, { type: "whitespace", data: " " }, { type: "ident", data: e }, { type: "operator", data: ";" }], "afterPrecision");
}
function Ue(r, e) {
  let o, t, a = -1;
  for (let i = e; i < r.length; i++) {
    const n = r[i];
    if (n.type === "operator" && (n.data === "[" && (o = i), n.data === "]")) {
      t = i;
      break;
    }
    n.type === "integer" && (a = parseInt(n.data, 10));
  }
  return o && t && r.splice(o, t - o + 1), a;
}
function X(r, e) {
  const o = De();
  if (C(o))
    return o;
  const t = pe(r);
  if (ve(t, "100", "300 es") === "300 es")
    return r;
  let a = null, i = null;
  const n = {}, m = {};
  for (let l = 0; l < t.length; ++l) {
    const s = t[l];
    switch (s.type) {
      case "keyword":
        e === p.VERTEX_SHADER && s.data === "attribute" ? s.data = "in" : s.data === "varying" && (s.data = e === p.VERTEX_SHADER ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim()) && (s.data = s.data.replace(/(2D|Cube|EXT)/g, "")), e === p.FRAGMENT_SHADER && s.data === "gl_FragColor" && (a || (a = S(t, n, "fragColor"), ye(t, a, "vec4")), s.data = a), e === p.FRAGMENT_SHADER && s.data === "gl_FragData") {
          const c = Ue(t, l + 1), u = S(t, n, "fragData");
          Se(t, u, "vec4", c, "mediump"), s.data = u;
        } else
          e === p.FRAGMENT_SHADER && s.data === "gl_FragDepthEXT" && (i || (i = S(t, n, "gl_FragDepth")), s.data = i);
        break;
      case "ident":
        if (se.indexOf(s.data) >= 0) {
          if (e === p.VERTEX_SHADER && Te(t, l))
            throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          s.data in m || (m[s.data] = S(t, n, s.data)), s.data = m[s.data];
        }
    }
  }
  for (let l = t.length - 1; l >= 0; --l) {
    const s = t[l];
    if (s.type === "preprocessor") {
      const c = s.data.match(/\#extension\s+(.*)\:/);
      if (c && c[1] && L.indexOf(c[1].trim()) >= 0) {
        const h = t[l + 1];
        t.splice(l, h && h.type === "whitespace" ? 2 : 1);
      }
      const u = s.data.match(/\#ifdef\s+(.*)/);
      u && u[1] && L.indexOf(u[1].trim()) >= 0 && (s.data = "#if 1");
      const g = s.data.match(/\#ifndef\s+(.*)/);
      g && g[1] && L.indexOf(g[1].trim()) >= 0 && (s.data = "#if 0");
    }
  }
  return Me(r, xe(t));
}
function De(r) {
  return null;
}
function Me(r, e) {
  return e;
}
const we = 4294967295;
class Ee {
  constructor(e, o, t, a, i = /* @__PURE__ */ new Map()) {
    this._context = e, this._locations = a, this._uniformBlockBindings = i, this._refCount = 1, this._compiled = !1, this._nameToUniformLocation = {}, this._nameToUniform1 = {}, this._nameToUniform1v = {}, this._nameToUniform2 = {}, this._nameToUniform3 = {}, this._nameToUniform4 = {}, this._nameToUniformMatrix3 = {}, this._nameToUniformMatrix4 = {}, e || console.error("RenderingContext isn't initialized!"), o.length === 0 && console.error("Shaders source should not be empty!"), this._context.type === A.WEBGL2 && (o = X(o, p.VERTEX_SHADER), t = X(t, p.FRAGMENT_SHADER)), this._vShader = H(this._context, p.VERTEX_SHADER, o), this._fShader = H(this._context, p.FRAGMENT_SHADER, t), this._vShader && this._fShader || console.error("Error loading shaders!"), this._context.instanceCounter.increment(U.Shader, this), b() && (this.vertexShader = o, this.fragmentShader = t);
  }
  get glName() {
    if (C(this._glName))
      return this._glName;
    if (M(this._vShader))
      return null;
    const e = this._context.gl, o = e.createProgram();
    if (e.attachShader(o, this._vShader), e.attachShader(o, this._fShader), this._locations.forEach((t, a) => e.bindAttribLocation(o, t, a)), e.linkProgram(o), b() && !e.getProgramParameter(o, e.LINK_STATUS) && console.error(`Could not link shader
validated: ${e.getProgramParameter(o, e.VALIDATE_STATUS)}, gl error ${e.getError()}, vertex: ${e.getShaderParameter(this._vShader, e.COMPILE_STATUS)}, fragment: ${e.getShaderParameter(this._fShader, e.COMPILE_STATUS)}, info log: ${e.getProgramInfoLog(o)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`), this._context.type === A.WEBGL2) {
      const t = e;
      for (const [a, i] of this._uniformBlockBindings) {
        const n = t.getUniformBlockIndex(o, a);
        n < we && t.uniformBlockBinding(o, n, i);
      }
    }
    return this._glName = o, this._context.instanceCounter.increment(U.Program, this), o;
  }
  get hasGLName() {
    return C(this._glName);
  }
  get isCompiled() {
    if (this._compiled)
      return !0;
    const e = this._context.gl.getExtension("KHR_parallel_shader_compile");
    return e == null ? (this._compiled = !0, !0) : (this._compiled = !!this._context.gl.getProgramParameter(this.glName, e.COMPLETION_STATUS_KHR), this._compiled);
  }
  dispose() {
    if (--this._refCount > 0)
      return;
    const e = this._context.gl;
    this._vShader && (e.deleteShader(this._vShader), this._vShader = null, this._context.instanceCounter.decrement(U.Shader, this)), this._fShader && (e.deleteShader(this._fShader), this._fShader = null), this._glName && (e.deleteProgram(this._glName), this._glName = null, this._context.instanceCounter.decrement(U.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(e) {
    return this._nameToUniformLocation[e] === void 0 && (this._nameToUniformLocation[e] = this._context.gl.getUniformLocation(this.glName, e)), this._nameToUniformLocation[e];
  }
  hasUniform(e) {
    return this._getUniformLocation(e) !== null;
  }
  setUniform1i(e, o) {
    const t = this._nameToUniform1[e];
    (t === void 0 || o !== t) && (this._context.gl.uniform1i(this._getUniformLocation(e), o), this._nameToUniform1[e] = o);
  }
  setUniform1iv(e, o) {
    const t = this._nameToUniform1v[e];
    v(t, o) && (this._context.gl.uniform1iv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform1v[e] = Array.from(o) : x(o, t));
  }
  setUniform2iv(e, o) {
    const t = this._nameToUniform2[e];
    v(t, o) && (this._context.gl.uniform2iv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform2[e] = Array.from(o) : x(o, t));
  }
  setUniform3iv(e, o) {
    const t = this._nameToUniform3[e];
    v(t, o) && (this._context.gl.uniform3iv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform3[e] = Array.from(o) : x(o, t));
  }
  setUniform4iv(e, o) {
    const t = this._nameToUniform4[e];
    v(t, o) && (this._context.gl.uniform4iv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform4[e] = Array.from(o) : x(o, t));
  }
  setUniform1f(e, o) {
    const t = this._nameToUniform1[e];
    (t === void 0 || o !== t) && (this._context.gl.uniform1f(this._getUniformLocation(e), o), this._nameToUniform1[e] = o);
  }
  setUniform1fv(e, o) {
    const t = this._nameToUniform1v[e];
    v(t, o) && (this._context.gl.uniform1fv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform1v[e] = Array.from(o) : x(o, t));
  }
  setUniform2f(e, o, t) {
    const a = this._nameToUniform2[e];
    (a === void 0 || o !== a[0] || t !== a[1]) && (this._context.gl.uniform2f(this._getUniformLocation(e), o, t), a === void 0 ? this._nameToUniform2[e] = [o, t] : (a[0] = o, a[1] = t));
  }
  setUniform2fv(e, o) {
    const t = this._nameToUniform2[e];
    v(t, o) && (this._context.gl.uniform2fv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform2[e] = Array.from(o) : x(o, t));
  }
  setUniform3f(e, o, t, a) {
    const i = this._nameToUniform3[e];
    (i === void 0 || o !== i[0] || t !== i[1] || a !== i[2]) && (this._context.gl.uniform3f(this._getUniformLocation(e), o, t, a), i === void 0 ? this._nameToUniform3[e] = [o, t, a] : (i[0] = o, i[1] = t, i[2] = a));
  }
  setUniform3fv(e, o) {
    const t = this._nameToUniform3[e];
    v(t, o) && (this._context.gl.uniform3fv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform3[e] = Array.from(o) : x(o, t));
  }
  setUniform4f(e, o, t, a, i) {
    const n = this._nameToUniform4[e];
    (n === void 0 || o !== n[0] || t !== n[1] || a !== n[2] || i !== n[3]) && (this._context.gl.uniform4f(this._getUniformLocation(e), o, t, a, i), n === void 0 ? this._nameToUniform4[e] = [o, t, a, i] : (n[0] = o, n[1] = t, n[2] = a, n[3] = i));
  }
  setUniform4fv(e, o) {
    const t = this._nameToUniform4[e];
    v(t, o) && (this._context.gl.uniform4fv(this._getUniformLocation(e), o), t === void 0 ? this._nameToUniform4[e] = Array.from(o) : x(o, t));
  }
  setUniformMatrix3fv(e, o, t = !1) {
    const a = this._nameToUniformMatrix3[e];
    Ce(a, o) && (this._context.gl.uniformMatrix3fv(this._getUniformLocation(e), t, o), a === void 0 ? this._nameToUniformMatrix3[e] = Array.from(o) : x(o, a));
  }
  setUniformMatrix4fv(e, o, t = !1) {
    const a = this._nameToUniformMatrix4[e];
    Ae(a, o) && (this._context.gl.uniformMatrix4fv(this._getUniformLocation(e), t, o), a === void 0 ? this._nameToUniformMatrix4[e] = Array.from(o) : x(o, a));
  }
  stop() {
  }
}
function v(r, e) {
  if (M(r) || r.length !== e.length)
    return !0;
  for (let o = 0; o < r.length; ++o)
    if (r[o] !== e[o])
      return !0;
  return !1;
}
function H(r, e, o) {
  const t = r.gl, a = t.createShader(e);
  return t.shaderSource(a, o), t.compileShader(a), b() && !t.getShaderParameter(a, t.COMPILE_STATUS) && (console.error("Compile error in ".concat(e === p.VERTEX_SHADER ? "vertex" : "fragment", " shader")), console.error(t.getShaderInfoLog(a)), console.error(Pe(o)), r.type === A.WEBGL2 && (console.log("Shader source before transpilation:"), console.log(o))), a;
}
function Pe(r) {
  let e = 2;
  return r.replace(/\n/g, () => `
` + Le(e++) + ":");
}
function Le(r) {
  return r >= 1e3 ? r.toString() : ("  " + r).slice(-3);
}
function x(r, e) {
  for (let o = 0; o < r.length; ++o)
    e[o] = r[o];
}
function Ce(r, e) {
  return !!M(r) || (r.length !== 9 ? v(r, e) : r.length !== 9 || r[0] !== e[0] || r[1] !== e[1] || r[2] !== e[2] || r[3] !== e[3] || r[4] !== e[4] || r[5] !== e[5] || r[6] !== e[6] || r[7] !== e[7] || r[8] !== e[8]);
}
function Ae(r, e) {
  return !!M(r) || (r.length !== 16 ? v(r, e) : r.length !== 16 || r[0] !== e[0] || r[1] !== e[1] || r[2] !== e[2] || r[3] !== e[3] || r[4] !== e[4] || r[5] !== e[5] || r[6] !== e[6] || r[7] !== e[7] || r[8] !== e[8] || r[9] !== e[9] || r[10] !== e[10] || r[11] !== e[11] || r[12] !== e[12] || r[13] !== e[13] || r[14] !== e[14] || r[15] !== e[15]);
}
let je = class {
  constructor(e) {
    this.readFile = e;
  }
  resolveIncludes(e) {
    return this._resolve(e);
  }
  _resolve(e, o = /* @__PURE__ */ new Map()) {
    if (o.has(e))
      return o.get(e);
    const t = this._read(e);
    if (!t)
      throw new Error(`cannot find shader file ${e}`);
    const a = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let i = a.exec(t);
    const n = [];
    for (; i != null; )
      n.push({ path: i[1], start: i.index, length: i[0].length }), i = a.exec(t);
    let m = 0, l = "";
    return n.forEach((s) => {
      l += t.slice(m, s.start), l += o.has(s.path) ? "" : this._resolve(s.path, o), m = s.start + s.length;
    }), l += t.slice(m), o.set(e, l), l;
  }
  _read(e) {
    return this.readFile(e);
  }
};
function Be(r, e, o = "") {
  return new Ee(r, o + e.shaders.vertexShader, o + e.shaders.fragmentShader, e.attributes);
}
export {
  Ee as a,
  Be as b,
  je as e
};

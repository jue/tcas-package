import { fp as ce, r as D, Z as pt, hq as vs, C as et, iY as Es, eN as Ts, eR as ki, y as z, g as de, eP as xs, s as it, hn as ws, bc as Gi, aq as ys, l as N, hm as _e, fh as we, ft as Fs, fo as Rs, e2 as Bs, dd as Pt, eD as mt, cc as As, b9 as Wt, j8 as Ss, k0 as Cs, jI as fe, k1 as Os, n as Ms, k2 as Ps, k3 as Ds, i1 as Is, i as Vi, dr as Wi, fr as Us, jC as Ns, fq as rt, k4 as Ls, k5 as zs, k6 as $s, k7 as ks, ca as ee, k8 as Ee, fy as Gs, aw as Vs, k9 as Ws, e as P, d as L, a as ze, ay as $e, ka as Xt, iV as Xs, f$ as Xi, hf as Hs, jj as qs, iK as Hi, kb as vt, ab as Et, kc as Ys, kd as gt, ke as js, kf as Ks, kg as Zs, kh as Qs, ki as Js, kj as Dt, kk as er, kl as tr, km as Ht, u as ir, aU as sr, kn as rr } from "./index-j1oaLRcp.js";
import { J as qt, s as nr, $ as nt, t as Yt, f as ar, o as or, n as lr, h as hr, k as ur } from "./CIMSymbolHelper-KLEKDisI.js";
import { s as jt, a as cr } from "./Container-0QnIUm3K.js";
import { I as Z, b as dr, O as at, N as _r, e as fr, y as Kt, g as mr, f as ot, L as Zt, T as pr, h as gr, i as qi, S as br, E as lt } from "./Utils-Mkp4Julu.js";
import { n as Q, t as vr, e as ke, w as Ue, m as Yi } from "./WGLContainer-Za_nqieP.js";
import { T as j } from "./enums-iri-XDIh.js";
import { e as Er, b as tt } from "./ProgramTemplate-i3wM2UDs.js";
import { e as Fe, s as Tr } from "./programUtils-LlbFPk4i.js";
import { f as Re, c as pe, D as $, r as xr, i as Qt } from "./VertexArrayObject-WfBtioi6.js";
import { R, E as X, F as ge, P as y, G as C, L as S, D as U, M as I, C as Oe, Y as G, V, B as wr, T as It, N as Ce, S as ji, I as Ne, O as me, f as Ke, U as yr, _ as qe, A as F, X as xt, n as se, e as Fr, r as Jt, u as Rr } from "./enums-n72NRQQZ.js";
import { r as ei, m as Br, n as Ar } from "./ExpandedCIM-M5Tsr5j1.js";
import { $ as Ge, a9 as ti, aa as ii, K as Sr, A as Cr, B as Or, ab as Ki, ac as Ve, ad as Zi, L as si, R as Mr, ae as Pr } from "./enums-YM9SAu8u.js";
import { t as te } from "./BidiEngine-NdusBwFe.js";
import { u as H, n as W, a as Te } from "./Texture-PL6UBkoQ.js";
import { P as ri } from "./GeometryUtils-ACqEo_je.js";
import { c as wt } from "./Matcher-lReemcRu.js";
import { t as Le } from "./VertexElementDescriptor-L2lGUBx9.js";
import { s as Dr } from "./CircularArray-BBR-Bb_W.js";
import { o as ni, W as Ir, A as Ur, M as Nr, t as ai } from "./requestImageUtils-BQkJwDei.js";
import { t as Lr } from "./ComputedAttributeStorage-4bJ5RN5o.js";
import { r as Jl } from "./BaseGraphicContainer-vPm1hpo8.js";
import { i as th } from "./GraphicContainer-pTHcU1s8.js";
import "vue";
import "./MaterialKey-tb9URCR8.js";
import "./GeometryUtils-lfXCngnH.js";
import "./pixelUtils-Kz9o33NO.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./earcut-80XuLCNX.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./visualVariablesUtils-lTNHq6nM.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./tileUtils-ZmGgn6yC.js";
import "./TileClipper-2O-LVJh2.js";
import "./Geometry-etmNDSLV.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./projectionSupport-eTH1ob6-.js";
import "./json-uwIaZKlZ.js";
import "./FeatureContainer-Yy5F93tk.js";
import "./TileContainer-_mN9fJMf.js";
import "./schemaUtils-NQXxAz6-.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./vec3f32-iv6FBVVh.js";
const zr = 512;
let $r = class {
  constructor(e) {
    this._resourceManager = e;
  }
  dispose() {
    this._rasterizationCanvas = null;
  }
  rasterizeJSONResource(e, t, i) {
    if (this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), e.type === "simple-fill" || e.type === "esriSFS") {
      const [d, f, m] = qt.rasterizeSimpleFill(this._rasterizationCanvas, e.style, t);
      return { size: [f, m], image: new Uint32Array(d.buffer), sdf: !1, simplePattern: !0, anchorX: 0, anchorY: 0 };
    }
    if (e.type === "simple-line" || e.type === "esriSLS" || e.type === "line" && e.dashTemplate) {
      let d, f;
      if (e.type === "simple-line" || e.type === "esriSLS")
        switch (d = nr(e.style, e.cap), e.cap) {
          case "butt":
            f = "Butt";
            break;
          case "square":
            f = "Square";
            break;
          default:
            f = "Round";
        }
      else
        d = e.dashTemplate, f = e.cim.capStyle;
      const [m, u, p] = qt.rasterizeSimpleLine(d, f);
      return { size: [u, p], image: new Uint32Array(m.buffer), sdf: !0, simplePattern: !0, anchorX: 0, anchorY: 0 };
    }
    let s, n, a;
    if (e.type === "simple-marker" || e.type === "esriSMS" || e.type === "line-marker" ? (s = nt.fromSimpleMarker(e), a = ei(s)) : e.cim && e.cim.type === "CIMHatchFill" ? (s = nt.fromCIMHatchFill(e.cim), n = new Yt(s.frame.xmin, -s.frame.ymax, s.frame.xmax - s.frame.xmin, s.frame.ymax - s.frame.ymin)) : e.cim.markerPlacement && e.cim.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" ? (s = nt.fromCIMInsidePolygon(e.cim), n = new Yt(s.frame.xmin, -s.frame.ymax, s.frame.xmax - s.frame.xmin, s.frame.ymax - s.frame.ymin)) : (s = e.cim, a = ei(s)), a && !i) {
      const [d, f, m] = Br(a);
      return d ? { size: [f, m], image: new Uint32Array(d.buffer), sdf: !0, simplePattern: !0, anchorX: 0, anchorY: 0 } : null;
    }
    const [o, l, h, c, _] = nt.rasterize(this._rasterizationCanvas, s, n, this._resourceManager, !i);
    return o ? { size: [l, h], image: new Uint32Array(o.buffer), sdf: !1, simplePattern: !1, anchorX: c, anchorY: _ } : null;
  }
  rasterizeImageResource(e, t, i, s) {
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), this._rasterizationCanvas.width = e, this._rasterizationCanvas.height = t;
    const n = this._rasterizationCanvas.getContext("2d");
    i instanceof ImageData ? n.putImageData(i, 0, 0) : (i.setAttribute("width", `${e}px`), i.setAttribute("height", `${t}px`), n.drawImage(i, 0, 0, e, t));
    const a = n.getImageData(0, 0, e, t), o = new Uint8Array(a.data);
    if (s) {
      for (const f of s)
        if (f && f.oldColor && f.oldColor.length === 4 && f.newColor && f.newColor.length === 4) {
          const [m, u, p, E] = f.oldColor, [g, T, v, x] = f.newColor;
          if (m === g && u === T && p === v && E === x)
            continue;
          for (let b = 0; b < o.length; b += 4)
            m === o[b] && u === o[b + 1] && p === o[b + 2] && E === o[b + 3] && (o[b] = g, o[b + 1] = T, o[b + 2] = v, o[b + 3] = x);
        }
    }
    let l;
    for (let f = 0; f < o.length; f += 4)
      l = o[f + 3] / 255, o[f] = o[f] * l, o[f + 1] = o[f + 1] * l, o[f + 2] = o[f + 2] * l;
    let h = o, c = e, _ = t;
    const d = zr;
    if (c >= d || _ >= d) {
      const f = c / _;
      f > 1 ? (c = d, _ = Math.round(d / f)) : (_ = d, c = Math.round(d * f)), h = new Uint8Array(4 * c * _);
      const m = new Uint8ClampedArray(h.buffer);
      ar(o, e, t, m, c, _, !1);
    }
    return { size: [c, _], image: new Uint32Array(h.buffer), sdf: !1, simplePattern: !1, anchorX: 0, anchorY: 0 };
  }
};
const kr = { background: { "background.frag": `#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "background.vert": `precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}` }, circle: { "circle.frag": `precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "circle.vert": `precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, fill: { "fill.frag": `precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "fill.vert": `precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, icon: { "icon.frag": `precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "icon.vert": `attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}` }, line: { "line.frag": `precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "line.vert": `precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}` }, outline: { "outline.frag": `varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "outline.vert": `attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, text: { "text.frag": `uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`, "text.vert": `attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}` }, util: { "encoding.glsl": `const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`, "util.glsl": `float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}` } };
function Gr(r) {
  let e = kr;
  return r.split("/").forEach((t) => {
    e && (e = e[t]);
  }), e;
}
const Vr = new Er(Gr);
function J(r) {
  return Vr.resolveIncludes(r);
}
const oi = (r) => Fe({ ID: r.id, PATTERN: r.pattern }), Wr = { shaders: (r) => ({ vertexShader: oi(r) + J("background/background.vert"), fragmentShader: oi(r) + J("background/background.frag") }) }, li = (r) => Fe({ ID: r.id }), Xr = { shaders: (r) => ({ vertexShader: li(r) + J("circle/circle.vert"), fragmentShader: li(r) + J("circle/circle.frag") }) }, hi = (r) => Fe({ ID: r.id, PATTERN: r.pattern }), Hr = { shaders: (r) => ({ vertexShader: hi(r) + J("fill/fill.vert"), fragmentShader: hi(r) + J("fill/fill.frag") }) }, ui = (r) => Fe({ ID: r.id }), qr = { shaders: (r) => ({ vertexShader: ui(r) + J("outline/outline.vert"), fragmentShader: ui(r) + J("outline/outline.frag") }) }, ci = (r) => Fe({ ID: r.id, SDF: r.sdf }), Yr = { shaders: (r) => ({ vertexShader: ci(r) + J("icon/icon.vert"), fragmentShader: ci(r) + J("icon/icon.frag") }) }, di = (r) => Fe({ ID: r.id, PATTERN: r.pattern, SDF: r.sdf }), jr = { shaders: (r) => ({ vertexShader: di(r) + J("line/line.vert"), fragmentShader: di(r) + J("line/line.frag") }) }, _i = (r) => Fe({ ID: r.id }), Kr = { shaders: (r) => ({ vertexShader: _i(r) + J("text/text.vert"), fragmentShader: _i(r) + J("text/text.frag") }) };
let Zr = class {
  constructor() {
    this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((e) => e.dispose()), this._programByKey.clear();
  }
  getMaterialProgram(e, t, i) {
    const s = t.key << 3 | this._getMaterialOptionsValue(t.type, i);
    if (this._programByKey.has(s))
      return this._programByKey.get(s);
    const n = this._getProgramTemplate(t.type), { shaders: a } = n, { vertexShader: o, fragmentShader: l } = a(i), h = t.getShaderHeader(), c = t.getShaderMain(), _ = o.replace("#pragma header", h).replace("#pragma main", c), d = e.programCache.acquire(_, l, t.getAttributeLocations());
    return this._programByKey.set(s, d), d;
  }
  _getMaterialOptionsValue(e, t) {
    switch (e) {
      case j.BACKGROUND: {
        const i = t;
        return (i.pattern ? 1 : 0) << 1 | (i.id ? 1 : 0);
      }
      case j.FILL: {
        const i = t;
        return (i.pattern ? 1 : 0) << 1 | (i.id ? 1 : 0);
      }
      case j.OUTLINE:
        return t.id ? 1 : 0;
      case j.LINE: {
        const i = t;
        return (i.sdf ? 1 : 0) << 2 | (i.pattern ? 1 : 0) << 1 | (i.id ? 1 : 0);
      }
      case j.ICON: {
        const i = t;
        return (i.sdf ? 1 : 0) << 1 | (i.id ? 1 : 0);
      }
      case j.CIRCLE:
        return t.id ? 1 : 0;
      case j.TEXT:
        return t.id ? 1 : 0;
      default:
        return 0;
    }
  }
  _getProgramTemplate(e) {
    switch (e) {
      case j.BACKGROUND:
        return Wr;
      case j.CIRCLE:
        return Xr;
      case j.FILL:
        return Hr;
      case j.ICON:
        return Yr;
      case j.LINE:
        return jr;
      case j.OUTLINE:
        return qr;
      case j.TEXT:
        return Kr;
      default:
        return null;
    }
  }
};
const fi = { shaders: { vertexShader: Q("bitBlit/bitBlit.vert"), fragmentShader: Q("bitBlit/bitBlit.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]) };
let Qi = class {
  constructor() {
    this._initialized = !1;
  }
  dispose() {
    this._program = ce(this._program), this._vertexArrayObject = ce(this._vertexArrayObject);
  }
  render(e, t, i, s) {
    e && (this._initialized || this._initialize(e), e.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e.bindVAO(this._vertexArrayObject), e.useProgram(this._program), t.setSamplingMode(i), e.bindTexture(t, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", s), e.drawArrays(X.TRIANGLE_STRIP, 0, 4), e.bindTexture(null, 0), e.bindVAO());
  }
  _initialize(e) {
    if (this._initialized)
      return !0;
    const t = tt(e, fi);
    if (!t)
      return !1;
    const i = new Int8Array(16);
    i[0] = -1, i[1] = -1, i[2] = 0, i[3] = 0, i[4] = 1, i[5] = -1, i[6] = 1, i[7] = 0, i[8] = -1, i[9] = 1, i[10] = 0, i[11] = 1, i[12] = 1, i[13] = 1, i[14] = 1, i[15] = 1;
    const s = fi.attributes, n = new Re(e, s, vr, { geometry: pe.createVertex(e, ge.STATIC_DRAW, i) });
    return this._program = t, this._vertexArrayObject = n, this._initialized = !0, !0;
  }
};
const Qr = (r) => {
  let e = "";
  e += r[0].toUpperCase();
  for (let t = 1; t < r.length; t++) {
    const i = r[t];
    i === i.toUpperCase() ? (e += "_", e += i) : e += i.toUpperCase();
  }
  return e;
}, mi = (r) => {
  const e = {};
  for (const t in r)
    e[Qr(t)] = r[t];
  return Fe(e);
}, pi = (r, e, t, i) => {
  const s = r + r.substring(r.lastIndexOf("/")), n = e + e.substring(e.lastIndexOf("/"));
  return { attributes: t, shaders: { vertexShader: mi(i) + Q(`${s}.vert`), fragmentShader: mi(i) + Q(`${n}.frag`) } };
}, Ji = (r) => r === Z.HITTEST || r === Z.LABEL_ALPHA, Jr = (r) => (Ji(r) ? 1 : 0) | (r === Z.HIGHLIGHT ? 2 : 0), en = ({ rendererInfo: r, drawPhase: e }, t, i, s) => `${t.getVariationHash()}-${s.join(".")}-${Jr(e)}-${r.getVariationHash()}-${D(i) && i.join(".")}`, tn = (r, e, t, i) => {
  const s = i.reduce((a, o) => ({ ...a, [o]: r.context.driverTest[o] }), {}), n = { ...e.getVariation(), ...r.rendererInfo.getVariation(), highlight: r.drawPhase === Z.HIGHLIGHT, id: Ji(r.drawPhase), ...s };
  if (D(t))
    for (const a of t)
      n[a] = !0;
  return n;
};
let sn = class {
  constructor(e) {
    this._rctx = e, this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((e) => e.dispose()), this._programByKey.clear();
  }
  getProgram(e, t, i = [], s = []) {
    const n = t.vsPath + "." + t.fsPath + JSON.stringify(i) + s.join(".");
    if (this._programByKey.has(n))
      return this._programByKey.get(n);
    const a = s.reduce((f, m) => ({ ...f, [m]: e.context.driverTest[m] }), {}), o = { ...i.map((f) => typeof f == "string" ? { name: f, value: !0 } : f).reduce((f, m) => ({ ...f, [m.name]: m.value }), {}), ...a }, { vsPath: l, fsPath: h, attributes: c } = t, _ = pi(l, h, c, o), d = this._rctx.programCache.acquire(_.shaders.vertexShader, _.shaders.fragmentShader, _.attributes);
    if (!d)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(n, d), d;
  }
  getMaterialProgram(e, t, i, s, n, a = ["ignoresSamplerPrecision"]) {
    const o = en(e, t, n, a);
    if (this._programByKey.has(o))
      return this._programByKey.get(o);
    const l = tn(e, t, n, a), h = pi(i, i, s, l), c = this._rctx.programCache.acquire(h.shaders.vertexShader, h.shaders.fragmentShader, h.attributes);
    if (!c)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(o, c), c;
  }
}, bt = class {
  constructor(e, t) {
    this._width = 0, this._height = 0, this._free = [], this._width = e, this._height = t, this._free.push(new te(0, 0, e, t));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e, t) {
    if (e > this._width || t > this._height)
      return new te();
    let i = null, s = -1;
    for (let n = 0; n < this._free.length; ++n) {
      const a = this._free[n];
      e <= a.width && t <= a.height && (i === null || a.y <= i.y && a.x <= i.x) && (i = a, s = n);
    }
    return i === null ? new te() : (this._free.splice(s, 1), i.width < i.height ? (i.width > e && this._free.push(new te(i.x + e, i.y, i.width - e, t)), i.height > t && this._free.push(new te(i.x, i.y + t, i.width, i.height - t))) : (i.width > e && this._free.push(new te(i.x + e, i.y, i.width - e, i.height)), i.height > t && this._free.push(new te(i.x, i.y + t, e, i.height - t))), new te(i.x, i.y, e, t));
  }
  release(e) {
    for (let t = 0; t < this._free.length; ++t) {
      const i = this._free[t];
      if (i.y === e.y && i.height === e.height && i.x + i.width === e.x)
        i.width += e.width;
      else if (i.x === e.x && i.width === e.width && i.y + i.height === e.y)
        i.height += e.height;
      else if (e.y === i.y && e.height === i.height && e.x + e.width === i.x)
        i.x = e.x, i.width += e.width;
      else {
        if (e.x !== i.x || e.width !== i.width || e.y + e.height !== i.y)
          continue;
        i.y = e.y, i.height += e.height;
      }
      this._free.splice(t, 1), this.release(e);
    }
    this._free.push(e);
  }
};
const rn = 256, nn = (r) => Math.floor(r / 256);
function an(r) {
  const e = /* @__PURE__ */ new Set();
  for (const t of r)
    e.add(nn(t));
  return e;
}
function on(r, e, t) {
  return r.has(e) || r.set(e, t().then(() => {
    r.delete(e);
  }).catch((i) => {
    r.delete(e), vs(i);
  })), r.get(e);
}
const ln = (r) => ({ rect: new te(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: r, sdf: !0 });
let hn = class {
  constructor(e, t, i) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this.width = e, this.height = t, this._glyphSource = i, this._binPack = new bt(e - 4, t - 4), this._glyphData.push(new Uint8Array(e * t)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyph();
  }
  dispose() {
    this._binPack = null;
    for (const e of this._textures)
      e && e.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyph() {
    const e = [117, 149, 181, 207, 207, 181, 149, 117], t = [];
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      for (let a = 0; a < 11; a++)
        t.push(n);
    }
    const i = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(t) };
    this._recordGlyph(i);
  }
  async getGlyphItems(e, t, i) {
    const s = this._getGlyphCache(e);
    return await this._fetchRanges(e, t, i), t.map((n) => this._getMosaicItem(s, e, n));
  }
  bind(e, t, i, s) {
    const n = this._getTexture(e, i);
    n.setSamplingMode(t), this._dirties[i] && (n.setData(this._glyphData[i]), this._dirties[i] = !1), e.bindTexture(n, s);
  }
  _getGlyphCache(e) {
    return this._glyphCache[e] || (this._glyphCache[e] = {}), this._glyphCache[e];
  }
  _getTexture(e, t) {
    return this._textures[t] || (this._textures[t] = new H(e, { pixelFormat: y.ALPHA, dataType: C.UNSIGNED_BYTE, width: this.width, height: this.height }, new Uint8Array(this.width * this.height))), this._textures[t];
  }
  _invalidate() {
    this._dirties[this._currentPage] = !0;
  }
  async _fetchRanges(e, t, i) {
    const s = an(t), n = [];
    s.forEach((a) => {
      n.push(this._fetchRange(e, a, i));
    }), await Promise.all(n);
  }
  async _fetchRange(e, t, i) {
    if (t > rn)
      return null;
    const s = e + t;
    return on(this._rangePromises, s, () => this._glyphSource.getRange(e, t, i));
  }
  _getMosaicItem(e, t, i) {
    if (!e[i]) {
      const s = this._glyphSource.getGlyph(t, i);
      if (!s || !s.metrics)
        return ln(i);
      const n = this._recordGlyph(s), a = this._currentPage, o = s.metrics;
      e[i] = { rect: n, page: a, metrics: o, code: i, sdf: !0 }, this._invalidate();
    }
    return e[i];
  }
  _recordGlyph(e) {
    const t = e.metrics;
    let i;
    if (t.width === 0)
      i = new te(0, 0, 0, 0);
    else {
      const n = t.width + 6, a = t.height + 2 * 3;
      i = this._binPack.allocate(n, a), i.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyph(), this._binPack = new bt(this.width - 4, this.height - 4), i = this._binPack.allocate(n, a));
      const o = this._glyphData[this._currentPage], l = e.bitmap;
      let h, c;
      if (l)
        for (let _ = 0; _ < a; _++) {
          h = n * _, c = this.width * (i.y + _) + i.x;
          for (let d = 0; d < n; d++)
            o[c + d] = l[h + d];
        }
      pt("geoscene-glyph-debug") && this._showDebugPage(o);
    }
    return i;
  }
  _showDebugPage(e) {
    const t = document.createElement("canvas"), i = t.getContext("2d"), s = new ImageData(this.width, this.height), n = s.data;
    t.width = this.width, t.height = this.height, t.style.border = "1px solid black";
    for (let a = 0; a < e.length; ++a)
      n[4 * a + 0] = e[a], n[4 * a + 1] = 0, n[4 * a + 2] = 0, n[4 * a + 3] = 255;
    i.putImageData(s, 0, 0), document.body.appendChild(t);
  }
}, un = class {
  constructor(e) {
    for (this._metrics = [], this._bitmaps = []; e.next(); )
      switch (e.tag()) {
        case 1: {
          const t = e.getMessage();
          for (; t.next(); )
            switch (t.tag()) {
              case 3: {
                const i = t.getMessage();
                let s, n, a, o, l, h, c;
                for (; i.next(); )
                  switch (i.tag()) {
                    case 1:
                      s = i.getUInt32();
                      break;
                    case 2:
                      n = i.getBytes();
                      break;
                    case 3:
                      a = i.getUInt32();
                      break;
                    case 4:
                      o = i.getUInt32();
                      break;
                    case 5:
                      l = i.getSInt32();
                      break;
                    case 6:
                      h = i.getSInt32();
                      break;
                    case 7:
                      c = i.getUInt32();
                      break;
                    default:
                      i.skip();
                  }
                i.release(), s && (this._metrics[s] = { width: a, height: o, left: l, top: h, advance: c }, this._bitmaps[s] = n);
                break;
              }
              default:
                t.skip();
            }
          t.release();
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
}, cn = class {
  constructor() {
    this._ranges = [];
  }
  getRange(e) {
    return this._ranges[e];
  }
  addRange(e, t) {
    this._ranges[e] = t;
  }
}, dn = class {
  constructor(e) {
    this._glyphInfo = {}, this._baseURL = e;
  }
  getRange(e, t, i) {
    const s = this._getFontStack(e);
    if (s.getRange(t))
      return Promise.resolve();
    const n = 256 * t, a = n + 255, o = this._baseURL.replace("{fontstack}", e).replace("{range}", n + "-" + a);
    return et(o, { responseType: "array-buffer", ...i }).then((l) => {
      s.addRange(t, new un(new Es(new Uint8Array(l.data), new DataView(l.data))));
    });
  }
  getGlyph(e, t) {
    const i = this._getFontStack(e);
    if (!i)
      return;
    const s = Math.floor(t / 256);
    if (s > 256)
      return;
    const n = i.getRange(s);
    return n ? { metrics: n.getMetrics(t), bitmap: n.getBitmap(t) } : void 0;
  }
  _getFontStack(e) {
    let t = this._glyphInfo[e];
    return t || (t = this._glyphInfo[e] = new cn()), t;
  }
};
const We = 1e20;
let _n = class {
  constructor(e) {
    this.size = e;
    const t = document.createElement("canvas");
    t.width = t.height = e, this._context = t.getContext("2d"), this._gridOuter = new Float64Array(e * e), this._gridInner = new Float64Array(e * e), this._f = new Float64Array(e), this._d = new Float64Array(e), this._z = new Float64Array(e + 1), this._v = new Int16Array(e);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(e, t, i = 31) {
    this._initSVG();
    const s = this.createSVGString(e);
    return new Promise((n, a) => {
      const o = new Image();
      o.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(s), o.onload = () => {
        o.onload = null, this._context.clearRect(0, 0, this.size, this.size), this._context.drawImage(o, 0, 0, this.size, this.size);
        const h = this._context.getImageData(0, 0, this.size, this.size), c = new Uint8Array(this.size * this.size * 4);
        for (let _ = 0; _ < this.size * this.size; _++) {
          const d = h.data[4 * _ + 3] / 255;
          this._gridOuter[_] = d === 1 ? 0 : d === 0 ? We : Math.max(0, 0.5 - d) ** 2, this._gridInner[_] = d === 1 ? We : d === 0 ? 0 : Math.max(0, d - 0.5) ** 2;
        }
        this._edt(this._gridOuter, this.size, this.size), this._edt(this._gridInner, this.size, this.size);
        for (let _ = 0; _ < this.size * this.size; _++) {
          const d = this._gridOuter[_] - this._gridInner[_];
          or(0.5 - d / (2 * i), c, 4 * _);
        }
        n(c);
      };
      const l = t && t.signal;
      l && Ts(l, () => a(ki()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      e.setAttribute("style", "position: absolute;"), e.setAttribute("width", "0"), e.setAttribute("height", "0"), e.setAttribute("aria-hidden", "true"), e.setAttribute("role", "presentation"), document.body.appendChild(e), this._svg = e;
    }
  }
  createSVGString(e) {
    this._initSVG();
    const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
    t.setAttribute("d", e), this._svg.appendChild(t);
    const i = t.getBBox(), s = i.width / i.height, n = this.size / 2;
    let a, o, l, h;
    if (s > 1) {
      o = a = n / i.width;
      const f = n * (1 / s);
      l = this.size / 4, h = n - f / 2;
    } else
      a = o = n / i.height, l = n - n * s / 2, h = this.size / 4;
    const c = -i.x * a + l, _ = -i.y * o + h;
    t.setAttribute("style", `transform: matrix(${a}, 0, 0, ${o}, ${c}, ${_})`);
    const d = `<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;
    return this._svg.removeChild(t), d;
  }
  _edt(e, t, i) {
    const s = this._f, n = this._d, a = this._v, o = this._z;
    for (let l = 0; l < t; l++) {
      for (let h = 0; h < i; h++)
        s[h] = e[h * t + l];
      this._edt1d(s, n, a, o, i);
      for (let h = 0; h < i; h++)
        e[h * t + l] = n[h];
    }
    for (let l = 0; l < i; l++) {
      for (let h = 0; h < t; h++)
        s[h] = e[l * t + h];
      this._edt1d(s, n, a, o, t);
      for (let h = 0; h < t; h++)
        e[l * t + h] = Math.sqrt(n[h]);
    }
  }
  _edt1d(e, t, i, s, n) {
    i[0] = 0, s[0] = -We, s[1] = +We;
    for (let a = 1, o = 0; a < n; a++) {
      let l = (e[a] + a * a - (e[i[o]] + i[o] * i[o])) / (2 * a - 2 * i[o]);
      for (; l <= s[o]; )
        o--, l = (e[a] + a * a - (e[i[o]] + i[o] * i[o])) / (2 * a - 2 * i[o]);
      o++, i[o] = a, s[o] = l, s[o + 1] = +We;
    }
    for (let a = 0, o = 0; a < n; a++) {
      for (; s[o + 1] < a; )
        o++;
      t[a] = (a - i[o]) * (a - i[o]) + e[i[o]];
    }
  }
};
function Be(r) {
  return r && r.type === "static";
}
let fn = class es {
  constructor(e, t, i, s = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = /* @__PURE__ */ new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (t <= 0 || i <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t, this._pageHeight = i, this._requestRender = e, s > 0 && (this._maxItemSize = s), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new bt(this._pageWidth, this._pageHeight);
    const n = Math.floor(this._pageWidth), a = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(n * a) }, size: [this._pageWidth, this._pageHeight], dirty: !0, texture: void 0 });
  }
  getWidth(e) {
    return e >= this._mosaicPages.length ? -1 : this._mosaicPages[e].size[0];
  }
  getHeight(e) {
    return e >= this._mosaicPages.length ? -1 : this._mosaicPages[e].size[1];
  }
  getPageTexture(e) {
    return e < this._mosaicPages.length ? this._mosaicPages[e].texture : null;
  }
  has(e) {
    return this._mosaicRects.has(e);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(e) {
    return this._mosaicRects.get(e);
  }
  addSpriteItem(e, t, i, s, n, a) {
    if (this._mosaicRects.has(e))
      return this._mosaicRects.get(e);
    let o, l, h;
    if (Be(i))
      [o, l, h] = this._allocateImage(t[0], t[1]);
    else {
      o = new te(0, 0, t[0], t[1]), l = this._mosaicPages.length;
      const _ = void 0;
      this._mosaicPages.push({ mosaicsData: i, size: t, dirty: !0, texture: _ });
    }
    if (o.width <= 0 || o.height <= 0)
      return null;
    const c = { rect: o, width: t[0], height: t[1], sdf: n, simplePattern: a, pixelRatio: 1, page: l };
    return this._mosaicRects.set(e, c), Be(i) && this._copy({ rect: o, spriteSize: t, spriteData: i.data, page: l, pageSize: h, repeat: s, sdf: n }), c;
  }
  hasItemsToProcess() {
    return this._spriteCopyQueue.length !== 0;
  }
  processNextItem() {
    const e = this._spriteCopyQueue.pop();
    e && this._copy(e);
  }
  getSpriteItems(e) {
    const t = {};
    for (const i of e)
      t[i] = this.getSpriteItem(i);
    return t;
  }
  getMosaicItemPosition(e) {
    const t = this.getSpriteItem(e), i = t && t.rect;
    if (!i)
      return null;
    i.width = t.width, i.height = t.height;
    const s = t.width, n = t.height, a = Ge, o = this._mosaicPages[t.page];
    return { size: [t.width, t.height], tl: [(i.x + a) / o[0], (i.y + a) / o[1]], br: [(i.x + a + s) / o[0], (i.y + a + n) / o[1]], page: t.page };
  }
  bind(e, t, i = 0, s = 0) {
    const n = this._mosaicPages[i], a = n.mosaicsData;
    let o = n.texture;
    if (o || (o = mn(e, a, n.size), n.texture = o), o.setSamplingMode(t), Be(a))
      e.bindTexture(o, s), n.dirty && (o.setData(new Uint8Array(a.data.buffer)), o.generateMipmap());
    else {
      const l = a.data, h = l.bindFrame(e, o, s);
      D(this._requestRender) && h && l.frameCount > 0 && this._requestRender.requestRender(), l.bindFrame(e, o, s);
    }
    n.dirty = !1;
  }
  static _copyBits(e, t, i, s, n, a, o, l, h, c, _) {
    let d = s * t + i, f = l * a + o;
    if (_) {
      f -= a;
      for (let m = -1; m <= c; m++, d = ((m + c) % c + s) * t + i, f += a)
        for (let u = -1; u <= h; u++)
          n[f + u] = e[d + (u + h) % h];
    } else
      for (let m = 0; m < c; m++) {
        for (let u = 0; u < h; u++)
          n[f + u] = e[d + u];
        d += t, f += a;
      }
  }
  _copy(e) {
    if (e.page >= this._mosaicPages.length)
      return;
    const t = this._mosaicPages[e.page], i = t.mosaicsData;
    if (!Be(t.mosaicsData))
      throw new z("mapview-invalid-resource", "unsuitable data type!");
    const s = e.spriteData, n = i.data;
    n && s || console.error("Source or target images are uninitialized!"), es._copyBits(s, e.spriteSize[0], 0, 0, n, e.pageSize[0], e.rect.x + Ge, e.rect.y + Ge, e.spriteSize[0], e.spriteSize[1], e.repeat), t.dirty = !0;
  }
  _allocateImage(e, t) {
    e += 2 * Ge, t += 2 * Ge;
    const i = Math.max(e, t);
    if (this._maxItemSize && this._maxItemSize < i) {
      const n = 2 ** Math.ceil(ri(e)), a = 2 ** Math.ceil(ri(t)), o = new te(0, 0, e, t);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(n * a) }, size: [n, a], dirty: !0, texture: void 0 }), [o, this._mosaicPages.length - 1, [n, a]];
    }
    const s = this._binPack.allocate(e, t);
    if (s.width <= 0) {
      const n = this._mosaicPages[this._currentPage];
      return !n.dirty && Be(n.mosaicsData) && (n.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: !0, texture: void 0 }), this._binPack = new bt(this._pageWidth, this._pageHeight), this._allocateImage(e, t);
    }
    return [s, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  dispose() {
    this._binPack = null;
    for (const e of this._mosaicPages) {
      const t = e.texture;
      t && t.dispose();
      const i = e.mosaicsData;
      Be(i) || i.data.pause();
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
};
function mn(r, e, t) {
  return Be(e) ? new H(r, { pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, width: t[0], height: t[1] }, new Uint8Array(e.data.buffer)) : new H(r, { pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.LINEAR, wrapMode: U.CLAMP_TO_EDGE, width: t[0], height: t[1] }, null);
}
const ts = new Uint32Array(256);
for (let r = 0; r < 256; r++) {
  let e = r;
  for (let t = 0; t < 8; t++)
    e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
  ts[r] = e;
}
function pn(r, e = 0, t = r.length - e) {
  let i = -1;
  for (let s = e, n = e + t; s < n; s++)
    i = i >>> 8 ^ ts[255 & (i ^ r[s])];
  return -1 ^ i;
}
const gn = new z("Not a PNG"), gi = new z("Not an animated PNG"), Ut = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
function is(r) {
  const e = r.constructor === Uint8Array ? r : new Uint8Array(r);
  return !Ut.some((t, i) => t !== e[i]);
}
function bn(r) {
  const e = new Uint8Array(r);
  if (!is(e))
    return !1;
  let t = !1;
  return Nt(e, (i) => !(t = i === "acTL")), t;
}
let vn = class ss {
  constructor() {
    this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [], this.paused = !1, this.playing = !1, this.playSpeed = 1, this.currentFrameNumber = 0, this._lastUsedFrame = -1;
  }
  static async create(e, t) {
    const i = new ss();
    try {
      await i._load(e, t);
    } catch (s) {
      if (!de(s))
        return new z("invalid-resource", `Could not load PNG: ${s.message}`);
    }
    return i;
  }
  play() {
    this.playing || (this.paused = !1, this.playing = !0, this._play());
  }
  pause() {
    this.paused = !0, this.playing = !1, clearTimeout(this.timerID);
  }
  togglePlay() {
    this.paused || !this.playing ? this.play() : this.pause();
  }
  bindFrame(e, t, i) {
    e.bindTexture(t, i);
    const s = this.frameChanged();
    if (!s)
      return !1;
    const n = this.currentFrame, a = n.frameData, o = t.descriptor;
    return (n.left || n.top || n.width !== o.width || n.height !== o.height) && t.setData(null), t.updateData(0, n.left, n.top, n.width, n.height, a), this.updateUsedFrame(), s;
  }
  frameChanged() {
    return this._lastUsedFrame !== this.currentFrameNumber;
  }
  updateUsedFrame() {
    this._lastUsedFrame = this.currentFrameNumber;
  }
  async _load(e, t) {
    try {
      const i = xn(this, e);
      if (i !== this)
        return i;
      this._resizeCanvas = document.createElement("canvas"), this._resizeCanvas.width = this.width, this._resizeCanvas.height = this.height, await Promise.all(this.frames.map((s) => s.createImage(this._resizeCanvas)));
    } catch (i) {
      if (!de(i))
        return new z("invalid-resource", "Could not parse PNG");
    }
    this.play();
  }
  _play() {
    let e, t;
    if (this.playSpeed === 0)
      return void this.pause();
    this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), t = this.currentFrameNumber, t -= 1, t < 0 && (t = this.frames.length - 1), e = 1 * -this.frames[t].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, e = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed);
    const i = this.frames[this.currentFrameNumber];
    this.currentFrame = { frameData: i.imageData, top: i.top, left: i.left, width: i.width, height: i.height }, this.timerID = window.setTimeout(() => this._play(), e);
  }
}, En = class {
  constructor() {
    this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.data = null, this.imageData = null;
  }
  async createImage(e) {
    if (this.imageData === null)
      return new Promise((t, i) => {
        const s = URL.createObjectURL(this.data), n = document.createElement("img");
        n.onload = () => {
          URL.revokeObjectURL(s), this.imageData = Tn(n, e), t();
        }, n.onerror = () => {
          URL.revokeObjectURL(s), this.imageData = null, i(new Error("Image creation error"));
        }, n.src = s;
      });
  }
};
function Tn(r, e) {
  e.width = r.width, e.height = r.height;
  const t = e.getContext("2d");
  t.drawImage(r, 0, 0, r.width, r.height);
  const i = t.getImageData(0, 0, r.width, r.height), s = new Uint8Array(i.data);
  let n;
  for (let a = 0; a < s.length; a += 4)
    n = s[a + 3] / 255, s[a] = s[a] * n, s[a + 1] = s[a + 1] * n, s[a + 2] = s[a + 2] * n;
  return new ImageData(new Uint8ClampedArray(s.buffer), r.width, r.height);
}
function xn(r, e) {
  const t = new Uint8Array(e);
  if (Ut.some((_, d) => _ !== t[d]))
    return gn;
  let i = !1;
  if (Nt(t, (_) => !(i = _ === "acTL")), !i)
    return gi;
  const s = [], n = [];
  let a = null, o = null, l = 0;
  if (Nt(t, (_, d, f, m) => {
    const u = new DataView(d.buffer);
    switch (_) {
      case "IHDR":
        a = d.subarray(f + 8, f + 8 + m), r.width = u.getUint32(f + 8), r.height = u.getUint32(f + 12);
        break;
      case "acTL":
        r.numPlays = u.getUint32(f + 8 + 4);
        break;
      case "fcTL": {
        o && (r.frames.push(o), l++), o = new En(), o.width = u.getUint32(f + 8 + 4), o.height = u.getUint32(f + 8 + 8), o.left = u.getUint32(f + 8 + 12), o.top = u.getUint32(f + 8 + 16);
        const p = u.getUint16(f + 8 + 20);
        let E = u.getUint16(f + 8 + 22);
        E === 0 && (E = 100), o.delay = 1e3 * p / E, o.delay <= 10 && (o.delay = 100), r.playTime += o.delay, o.disposeOp = u.getUint8(f + 8 + 24), o.blendOp = u.getUint8(f + 8 + 25), o.dataParts = [], l === 0 && o.disposeOp === 2 && (o.disposeOp = 1);
        break;
      }
      case "fdAT":
        o && o.dataParts.push(d.subarray(f + 8 + 4, f + 8 + m));
        break;
      case "IDAT":
        o && o.dataParts.push(d.subarray(f + 8, f + 8 + m));
        break;
      case "IEND":
        n.push(bi(d, f, 12 + m));
        break;
      default:
        s.push(bi(d, f, 12 + m));
    }
  }), r.frames.length === 0)
    return gi;
  r.frameCount = r.frames.length;
  const h = new Blob(s), c = new Blob(n);
  return r.frames.forEach((_) => {
    let d = [];
    d.push(Ut), a.set(Ei(_.width), 0), a.set(Ei(_.height), 4), d.push(vi("IHDR", a)), d.push(h), _.dataParts.forEach((f) => d.push(vi("IDAT", f))), d.push(c), _.data = new Blob(d, { type: "image/png" }), delete _.dataParts, d = null;
  }), r;
}
function Nt(r, e) {
  const t = new DataView(r.buffer);
  let i, s, n, a = 8;
  do
    s = t.getUint32(a), i = wn(r, a + 4, 4), n = e(i, r, a, s), a += 12 + s;
  while (n !== !1 && i !== "IEND" && a < r.length);
}
function wn(r, e, t) {
  const i = Array.prototype.slice.call(r.subarray(e, e + t));
  return String.fromCharCode.apply(String, i);
}
function yn(r) {
  const e = new Uint8Array(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}
function bi(r, e, t) {
  const i = new Uint8Array(t);
  return i.set(r.subarray(e, e + t)), i;
}
function vi(r, e) {
  const t = r.length + e.length, i = new Uint8Array(t + 8), s = new DataView(i.buffer);
  s.setUint32(0, e.length), i.set(yn(r), 4), i.set(e, 8);
  const n = pn(i, 4, t);
  return s.setUint32(t + 4, n), i;
}
function Ei(r) {
  return new Uint8Array([r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r]);
}
const Me = { GCExt: 249, COMMENT: 254, APPExt: 255, UNKNOWN: 1, IMAGE: 44, EOF: 59, EXT: 33 };
function rs(r) {
  if (!r || r.byteLength === 0)
    return !1;
  const e = r.constructor === Uint8Array ? r : new Uint8Array(r);
  return e[0] === 71 && e[1] === 73 && e[2] === 70 && e[3] === 56;
}
function Fn(r) {
  if (!r || r.byteLength === 0)
    return !1;
  const e = new Uint8Array(r);
  if (!rs(e))
    return !1;
  let t = 0;
  for (let i = 0, s = e.length - 9; i < s; ++i)
    if (e[i] === 0 && e[i + 1] === 33 && e[i + 2] === 249 && e[i + 3] === 4 && e[i + 8] === 0 && (e[i + 9] === 44 || e[i + 9] === 33) && (t++, t > 1))
      return !0;
  return !1;
}
let Rn = class ns {
  constructor() {
    this.paused = !1, this.playing = !1, this.waitTillDone = !0, this.loading = !1, this.firstFrameOnly = !1, this.frames = [], this.comment = "", this.length = 0, this.currentFrameNumber = 0, this.frameCount = 0, this.playSpeed = 1, this.lastFrame = null, this.playOnLoad = !0, this.complete = !1, this.interlaceOffsets = [0, 4, 2, 1], this.interlaceSteps = [8, 8, 4, 2], this._lastUsedFrame = -1;
  }
  static async create(e, t) {
    const i = new ns();
    try {
      await i._load(e, t);
    } catch (s) {
      if (!de(s))
        return new z("invalid-resource", `Could not load PNG: ${s.message}`);
    }
    return i;
  }
  play() {
    this.playing || (this.paused = !1, this.playing = !0, this._play());
  }
  pause() {
    this.paused = !0, this.playing = !1, clearTimeout(this.timerID);
  }
  togglePlay() {
    this.paused || !this.playing ? this.play() : this.pause();
  }
  bindFrame(e, t, i) {
    e.bindTexture(t, i);
    const s = this.frameChanged();
    if (s) {
      const n = this.currentFrame, a = n.frameData;
      t.updateData(0, 0, 0, n.width, n.height, a), this.updateUsedFrame();
    }
    return s;
  }
  seekFrame(e) {
    clearTimeout(this.timerID), this.currentFrameNumber = e % this.frames.length, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
  }
  seek(e) {
    clearTimeout(this.timerID), e < 0 && (e = 0), e *= 1e3, e %= this.length;
    let t = 0;
    for (; e > this.frames[t].time + this.frames[t].delay && t < this.frames.length; )
      t += 1;
    this.currentFrameNumber = t, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
  }
  frameChanged() {
    return this._lastUsedFrame !== this.currentFrameNumber;
  }
  updateUsedFrame() {
    this._lastUsedFrame = this.currentFrameNumber;
  }
  async _load(e, t) {
    try {
      this.loading = !0, await this._parse(e, t), this.loading = !1, this.play();
    } catch (i) {
      if (!de(i))
        return new z("invalid-resource", "Could not parse gif!");
    }
  }
  _parse(e, t) {
    const i = new Bn(e);
    i.pos += 6, this.width = i.data[i.pos++] + (i.data[i.pos++] << 8), this.height = i.data[i.pos++] + (i.data[i.pos++] << 8);
    const s = i.data[i.pos++];
    return this.globalColourCount = 1 << 1 + (7 & s), i.pos++, i.pos++, 128 & s && (this.globalColourTable = this._parseColourTable(this.globalColourCount, i)), new Promise((n, a) => {
      setTimeout(() => this._parseBlock(i, n, a, t), 0);
    });
  }
  async _parseBlock(e, t, i, s) {
    if (s && s.signal && xs(s.signal))
      return void i(ki());
    const n = e.data[e.pos++];
    if (n === Me.IMAGE) {
      if (this._parseImg(e), this.firstFrameOnly)
        return this._finishedLoading(), void t();
    } else {
      if (n === Me.EOF)
        return this._finishedLoading(), void t();
      this._parseExt(e);
    }
    typeof this.onprogress == "function" && this.onprogress({ bytesRead: e.pos, totalBytes: e.data.length, frame: this.frames.length }), setTimeout(() => this._parseBlock(e, t, i, s), 0);
  }
  _parseColourTable(e, t) {
    const i = [];
    for (let s = 0; s < e; s++)
      i.push([t.data[t.pos++], t.data[t.pos++], t.data[t.pos++]]);
    return i;
  }
  _parseImg(e) {
    const t = (n) => {
      const a = this.pixelBufSize / n;
      this.interlacedBufSize !== this.pixelBufSize && (this.deinterlaceBuf = new Uint8Array(this.pixelBufSize), this.interlacedBufSize = this.pixelBufSize);
      let o = 0;
      for (let l = 0; l < 4; l++)
        for (let h = this.interlaceOffsets[l]; h < a; h += this.interlaceSteps[l])
          this.deinterlaceBuf.set(this.pixelBuf.subarray(o, o + n), h * n), o += n;
    }, i = {};
    this.frames.push(i), i.disposalMethod = this.disposalMethod, i.time = this.length, i.delay = 10 * this.delayTime, this.length += i.delay, this.transparencyGiven ? i.transparencyIndex = this.transparencyIndex : i.transparencyIndex = void 0, i.leftPos = e.data[e.pos++] + (e.data[e.pos++] << 8), i.topPos = e.data[e.pos++] + (e.data[e.pos++] << 8), i.width = e.data[e.pos++] + (e.data[e.pos++] << 8), i.height = e.data[e.pos++] + (e.data[e.pos++] << 8);
    const s = e.data[e.pos++];
    i.localColourTableFlag = !!(128 & s), i.localColourTableFlag && (i.localColourTable = this._parseColourTable(1 << 1 + (7 & s), e)), this.pixelBufSize !== i.width * i.height && (this.pixelBuf = new Uint8Array(i.width * i.height), this.pixelBufSize = i.width * i.height), this._lzwDecode(e.data[e.pos++], e.readSubBlocksB()), 64 & s ? (i.interlaced = !0, t(i.width)) : i.interlaced = !1, this._processFrame(i);
  }
  _lzwDecode(e, t) {
    let i, s, n, a, o, l, h, c, _;
    n = s = 0;
    let d = [];
    const f = 1 << e, m = f + 1;
    for (a = e + 1, _ = !1; !_; ) {
      for (l = o, o = 0, i = 0; i < a; i++)
        t[n >> 3] & 1 << (7 & n) && (o |= 1 << i), n++;
      if (o === f) {
        for (d = [], a = e + 1, i = 0; i < f; i++)
          d[i] = [i];
        d[f] = [], d[m] = null;
      } else {
        if (o === m)
          return void (_ = !0);
        for (o >= d.length ? d.push(d[l].concat(d[l][0])) : l !== f && d.push(d[l].concat(d[o][0])), h = d[o], c = h.length, i = 0; i < c; i++)
          this.pixelBuf[s++] = h[i];
        d.length === 1 << a && a < 12 && a++;
      }
    }
  }
  _processFrame(e) {
    e.image = document.createElement("canvas"), e.image.width = this.width, e.image.height = this.height, e.ctx = e.image.getContext("2d");
    const t = e.localColourTableFlag ? e.localColourTable : this.globalColourTable;
    this.lastFrame === null && (this.lastFrame = e);
    const i = this.lastFrame.disposalMethod === 2 || this.lastFrame.disposalMethod === 3;
    i || e.ctx.drawImage(this.lastFrame.image, 0, 0, this.width, this.height);
    const s = e.ctx.getImageData(e.leftPos, e.topPos, e.width, e.height), n = e.transparencyIndex, a = s.data, o = e.interlaced ? this.deinterlaceBuf : this.pixelBuf, l = o.length;
    let h, c, _ = 0;
    for (let d = 0; d < l; d++)
      h = o[d], c = t[h], n !== h ? (a[_++] = c[0], a[_++] = c[1], a[_++] = c[2], a[_++] = 255) : (i && (a[_ + 3] = 0), _ += 4);
    e.ctx.putImageData(s, e.leftPos, e.topPos), this.lastFrame = e;
  }
  _parseExt(e) {
    const t = e.data[e.pos++];
    t === Me.GCExt ? this._parseGCExt(e) : t === Me.COMMENT ? this.comment += e.readSubBlocks() : t === Me.APPExt ? this._parseAppExt(e) : (t === Me.UNKNOWN && (e.pos += 13), e.readSubBlocks());
  }
  _parseAppExt(e) {
    e.pos += 1, e.getString(8) === "NETSCAPE" ? e.pos += 8 : (e.pos += 3, e.readSubBlocks());
  }
  _parseGCExt(e) {
    e.pos++;
    const t = e.data[e.pos++];
    this.disposalMethod = (28 & t) >> 2, this.transparencyGiven = !!(1 & t), this.delayTime = e.data[e.pos++] + (e.data[e.pos++] << 8), this.transparencyIndex = e.data[e.pos++], e.pos++;
  }
  _finishedLoading() {
    this.loading = !1, this.frameCount = this.frames.length, this.lastFrame = null, this.complete = !0, this.disposalMethod = void 0, this.transparencyGiven = void 0, this.delayTime = void 0, this.transparencyIndex = void 0, this.waitTillDone = void 0, this.pixelBuf = void 0, this.deinterlaceBuf = void 0, this.pixelBufSize = void 0, this.deinterlaceBuf = void 0, this.currentFrameNumber = 0, this.frames.length > 0 && this._setCurrentFrame(0), this.playOnLoad && this.play();
  }
  _play() {
    let e, t;
    this.playSpeed !== 0 ? (this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), t = this.currentFrameNumber, t -= 1, t < 0 && (t = this.frames.length - 1), e = 1 * -this.frames[t].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, e = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed), this._setCurrentFrame(this.currentFrameNumber), this.timerID = window.setTimeout(() => this._play(), e)) : this.pause();
  }
  _setCurrentFrame(e) {
    const t = this.frames[e];
    this.currentFrame = { frameData: t.image, top: 0, left: 0, width: this.width, height: this.height };
  }
}, Bn = class {
  constructor(e) {
    this.pos = 0, this.data = new Uint8ClampedArray(e), this.len = this.data.length;
  }
  getString(e) {
    let t = "";
    for (; e--; )
      t += String.fromCharCode(this.data[this.pos++]);
    return t;
  }
  readSubBlocks() {
    let e, t, i = "";
    do
      for (t = e = this.data[this.pos++]; t--; )
        i += String.fromCharCode(this.data[this.pos++]);
    while (e !== 0 && this.pos < this.len);
    return i;
  }
  readSubBlocksB() {
    let e, t;
    const i = [];
    do
      for (t = e = this.data[this.pos++]; t--; )
        i.push(this.data[this.pos++]);
    while (e !== 0 && this.pos < this.len);
    return i;
  }
};
function An(r) {
  switch (r.type) {
    case "esriSMS":
      return `${r.style}.${r.path}`;
    case "esriSLS":
      return `${r.style}.${r.cap}`;
    case "esriSFS":
      return `${r.style}`;
    case "esriPFS":
    case "esriPMS":
      return r.imageData ? `${r.imageData}${r.width}${r.height}` : `${r.url}${r.width}${r.height}`;
    default:
      return "mosaicHash" in r ? r.mosaicHash : JSON.stringify(r);
  }
}
const Ti = Fs(), xi = "arial-unicode-ms-regular", yt = 126, as = it.getLogger("geoscene.views.2d.engine.webgl.TextureManager");
async function Sn(r, e) {
  const t = qi(r);
  let i;
  const s = ";base64,";
  if (t.includes(s)) {
    const n = t.indexOf(s) + s.length, a = t.substring(n), o = atob(a), l = new Uint8Array(o.length);
    for (let h = 0; h < o.length; h++)
      l[h] = o.charCodeAt(h);
    i = l.buffer;
  } else
    try {
      const { data: n } = await et(t, { responseType: "array-buffer", ...e });
      i = n;
    } catch (n) {
      if (!de(n))
        return new z("mapview-invalid-resource", `Could not fetch requested resource at ${t}`);
    }
  return i;
}
function wi(r, e) {
  const t = Math.round(we(e) * window.devicePixelRatio), i = t >= 128 ? 2 : 4;
  return Math.min(r, t * i);
}
const Ft = (r, e, t) => as.error(new z(r, e, t));
class zt {
  constructor(e, t, i) {
    this.mosaicType = e, this.page = t, this.sdf = i;
  }
  static fromMosaic(e, t) {
    return new zt(e, t.page, t.sdf);
  }
}
let Cn = class {
  constructor(e, t) {
    this.resourceManager = t, this._invalidFontsMap = /* @__PURE__ */ new Map(), this._sdfConverter = new _n(yt), this._bindingInfos = new Array(), this._hashToBindingIndex = /* @__PURE__ */ new Map(), this._ongoingRasterizations = /* @__PURE__ */ new Map(), this._imageRequestQueue = new ws({ concurrency: 10, process: async (i, s) => {
      Gi(s);
      try {
        return await et(i, { responseType: "image", signal: s });
      } catch (n) {
        throw de(n) ? n : new z("mapview-invalid-resource", `Could not fetch requested resource at ${i}`, n);
      }
    } }), this._spriteMosaic = new fn(e, 2048, 2048, 500), this._glyphSource = new dn(`${ys.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new hn(1024, 1024, this._glyphSource), this._rasterizer = new $r(t);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null;
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  async rasterizeItem(e, t, i, s) {
    if (N(e))
      return Ft("mapview-null-resource", "Unable to rasterize null resource"), null;
    switch (e.type) {
      case "text":
      case "esriTS": {
        const n = await this._rasterizeText(e, i, s);
        return n.forEach((a) => this._setTextureBinding(at.GLYPH, a)), { glyphMosaicItems: n };
      }
      default: {
        if (dr(e))
          return Ft("mapview-invalid-type", `MapView does not support symbol type: ${e.type}`, e), null;
        const n = await this._rasterizeSpriteSymbol(e, t, s);
        return wt(n) && n && this._setTextureBinding(at.SPRITE, n), { spriteMosaicItem: n };
      }
    }
  }
  bindTextures(e, t, i, s = !1) {
    if (i.textureBinding === 0)
      return;
    const n = this._bindingInfos[i.textureBinding - 1], a = n.page, o = s ? S.LINEAR_MIPMAP_LINEAR : S.LINEAR;
    switch (n.mosaicType) {
      case at.SPRITE: {
        const l = this.sprites.getWidth(a), h = this.sprites.getHeight(a), c = _e(Ti, l, h);
        return this._spriteMosaic.bind(e, o, a, ii), t.setUniform1i("u_texture", ii), void t.setUniform2fv("u_mosaicSize", c);
      }
      case at.GLYPH: {
        const l = this.glyphs.width, h = this.glyphs.height, c = _e(Ti, l, h);
        return this._glyphMosaic.bind(e, o, a, ti), t.setUniform1i("u_texture", ti), void t.setUniform2fv("u_mosaicSize", c);
      }
      default:
        as.error("mapview-texture-manager", `Cannot handle unknown type ${n.mosaicType}`);
    }
  }
  _hashMosaic(e, t) {
    return 1 | e << 1 | (t.sdf ? 1 : 0) << 2 | t.page << 3;
  }
  _setTextureBinding(e, t) {
    const i = this._hashMosaic(e, t);
    if (!this._hashToBindingIndex.has(i)) {
      const s = zt.fromMosaic(e, t), n = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i, n), this._bindingInfos.push(s);
    }
    t.textureBinding = this._hashToBindingIndex.get(i);
  }
  async _rasterizeText(e, t, i) {
    let s, n;
    if ("cim" in e) {
      const l = e;
      s = l.fontName, n = l.text;
    } else {
      const l = e;
      s = Ar(l.font), n = l.text;
    }
    const a = this._invalidFontsMap.has(s), o = t || _r(lr(n)[0]);
    try {
      return await this._glyphMosaic.getGlyphItems(a ? xi : s, o, i);
    } catch {
      return Ft("mapview-invalid-resource", `Couldn't find font ${s}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(s, !0), this._glyphMosaic.getGlyphItems(xi, o, i);
    }
  }
  async _rasterizeSpriteSymbol(e, t, i) {
    if (fr(e))
      return null;
    const s = An(e);
    if (this._spriteMosaic.has(s))
      return this._spriteMosaic.getSpriteItem(s);
    if (Kt(e) || mr(e))
      return this._handleAsyncResource(s, e, i);
    const n = 1, a = this._rasterizer.rasterizeJSONResource(e, n);
    if (a) {
      const { size: o, image: l, sdf: h, simplePattern: c } = a;
      return this._addItemToMosaic(s, o, { type: "static", data: l }, ot(e), h, c);
    }
    return new z("TextureManager", "unrecognized or null rasterized image");
  }
  async _handleAsyncResource(e, t, i) {
    if (this._ongoingRasterizations.has(e))
      return this._ongoingRasterizations.get(e);
    let s;
    s = Kt(t) ? this._handleSVG(t, e, i) : this._handleImage(t, e, i), this._ongoingRasterizations.set(e, s);
    try {
      await s, this._ongoingRasterizations.delete(e);
    } catch {
      this._ongoingRasterizations.delete(e);
    }
    return s;
  }
  async _handleSVG(e, t, i) {
    const s = [yt, yt], n = await this._sdfConverter.draw(e.path, i);
    return this._addItemToMosaic(t, s, { type: "static", data: new Uint32Array(n.buffer) }, !1, !0, !0);
  }
  async _handleGIFOrPNG(e, t, i) {
    const s = await Sn(e, i);
    if (wt(s)) {
      const n = rs(s), a = is(s);
      if (!n && !a)
        return new z("mapview-invalid-resource", "Image data is neither GIF nor PNG!");
      let o;
      try {
        n && Fn(s) ? o = await Rn.create(s, i) : a && bn(s) && (o = await vn.create(s, i));
      } catch (c) {
        if (!de(c))
          return new z("mapview-invalid-resource", "Could not fetch requested resource!");
      }
      if (o && wt(o))
        return this._addItemToMosaic(t, [o.width, o.height], { type: "animated", data: o }, ot(e), !1, !1);
      const l = new Blob([s], { type: n ? "image/gif" : "image/png" }), h = await this._imageFromBlob(l);
      if (h && h instanceof HTMLImageElement) {
        let c = h.width, _ = h.height;
        e.type === "esriPMS" && (c = Math.round(wi(h.width, Zt(e))), _ = Math.round(h.height * (c / h.width)));
        const d = "cim" in e ? e.cim.colorSubstitutions : void 0, { size: f, sdf: m, image: u } = this._rasterizer.rasterizeImageResource(c, _, h, d);
        return this._addItemToMosaic(t, f, { type: "static", data: u }, ot(e), m, !1);
      }
    }
    return new z("mapview-invalid-resource", "Could not handle resource!");
  }
  async _handleImage(e, t, i) {
    if (pr(e) || gr(e))
      return this._handleGIFOrPNG(e, t, i);
    const s = qi(e);
    try {
      let a;
      const o = this.resourceManager.getResource(s);
      if (D(o))
        a = o;
      else {
        const { data: m } = await this._imageRequestQueue.push(s, { ...i });
        a = m;
      }
      if (br(s)) {
        if ("width" in e && "height" in e)
          a.width = we(e.width), a.height = we(e.height);
        else if ("cim" in e) {
          var n;
          const m = e.cim;
          a.width = we((n = m.width) != null ? n : m.scaleX * m.size), a.height = we(m.size);
        }
      }
      if (!a.width || !a.height)
        return null;
      let l = a.width, h = a.height;
      e.type === "esriPMS" && (l = Math.round(wi(a.width, Zt(e))), h = Math.round(a.height * (l / a.width)));
      const c = "cim" in e ? e.cim.colorSubstitutions : void 0, { size: _, sdf: d, image: f } = this._rasterizer.rasterizeImageResource(l, h, a, c);
      return this._addItemToMosaic(t, _, { type: "static", data: f }, ot(e), d, !1);
    } catch (a) {
      if (!de(a))
        return new z("mapview-invalid-resource", `Could not fetch requested resource at ${s}. ${a.message}`);
    }
  }
  async _imageFromBlob(e) {
    const t = window.URL.createObjectURL(e);
    try {
      const { data: i } = await this._imageRequestQueue.push(t);
      return window.URL.revokeObjectURL(t), i;
    } catch (i) {
      if (window.URL.revokeObjectURL(t), !de(i))
        return new z("mapview-invalid-resource", `Could not fetch requested resource at ${t}`);
      throw i;
    }
  }
  _addItemToMosaic(e, t, i, s, n, a) {
    return this._spriteMosaic.addSpriteItem(e, t, i, s, n, a);
  }
}, st = class {
  constructor() {
    this.name = this.constructor.name;
  }
  createOptions(e, t) {
    return null;
  }
}, On = class extends st {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(e, t) {
    if (!t.size)
      return;
    const { context: i, renderingOptions: s } = e;
    this._quad || (this._quad = new ke(i, [0, 0, 1, 0, 0, 1, 1, 1]));
    const n = i.getBoundFramebufferObject(), { x: a, y: o, width: l, height: h } = i.getViewport();
    t.bindTextures(i);
    const c = t.getBlock(Sr);
    if (N(c))
      return;
    const _ = c.getFBO(i), d = c.getFBO(i, 1);
    i.setViewport(0, 0, t.size, t.size), this._computeDelta(e, d, s.labelsAnimationTime), this._updateAnimationState(e, d, _), i.bindFramebuffer(n), i.setViewport(a, o, l, h);
  }
  _computeDelta(e, t, i) {
    const { context: s, painter: n, displayLevel: a } = e, o = n.materialManager.getProgram(e, this._desc, ["delta"]);
    s.bindFramebuffer(t), s.setClearColor(0, 0, 0, 0), s.clear(s.gl.COLOR_BUFFER_BIT), s.useProgram(o), o.setUniform1i("u_maskTexture", Cr), o.setUniform1i("u_sourceTexture", Or), o.setUniform1f("u_timeDelta", e.deltaTime), o.setUniform1f("u_animationTime", i), o.setUniform1f("u_zoomLevel", Math.round(10 * a)), this._quad.draw();
  }
  _updateAnimationState(e, t, i) {
    const { context: s, painter: n } = e, a = n.materialManager.getProgram(e, this._desc, ["update"]);
    s.bindTexture(t.colorTexture, 1), s.useProgram(a), a.setUniform1i("u_sourceTexture", 1), s.bindFramebuffer(i), s.setClearColor(0, 0, 0, 0), s.clear(s.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
};
const Mn = (r) => r.replace("-", "_").toUpperCase(), yi = (r) => `#define ${Mn(r)}
`;
function Fi(r) {
  return { attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]), shaders: { vertexShader: yi(r) + Q("blend/blend.vert"), fragmentShader: yi(r) + Q("blend/blend.frag") } };
}
const Ri = it.getLogger("geoscene.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
let Pn = class {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e) {
    this._backBufferTexture = ce(this._backBufferTexture), this._quad = ce(this._quad);
  }
  draw(e, t, i, s, n) {
    const { context: a, drawPhase: o } = e;
    if (this._setupShader(a), s && s !== "normal" && o !== Z.LABEL)
      return void this._drawBlended(e, t, i, s, n);
    const l = Fi("normal"), h = a.programCache.acquire(l.shaders.vertexShader, l.shaders.fragmentShader, l.attributes);
    if (!h)
      return void Ri.error(new z("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    a.useProgram(h), t.setSamplingMode(i), a.bindTexture(t, 0), h.setUniform1i("u_layerTexture", 0), h.setUniform1f("u_opacity", n), a.setBlendingEnabled(!0), a.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA);
    const c = this._quad;
    c.draw(), c.unbind(), h.dispose();
  }
  _drawBlended(e, t, i, s, n) {
    const { context: a, state: o, pixelRatio: l, inFadeTransition: h } = e, { size: c } = o, _ = a.getBoundFramebufferObject();
    let d, f;
    if (D(_)) {
      const g = _.descriptor;
      d = g.width, f = g.height;
    } else
      d = Math.round(l * c[0]), f = Math.round(l * c[1]);
    this._createOrResizeTexture(e, d, f);
    const m = this._backBufferTexture;
    _.copyToTexture(0, 0, d, f, 0, 0, m), a.setStencilTestEnabled(!1), a.setStencilWriteMask(0), a.setBlendingEnabled(!0), a.setDepthTestEnabled(!1), a.setDepthWriteEnabled(!1);
    const u = Fi(s), p = a.programCache.acquire(u.shaders.vertexShader, u.shaders.fragmentShader, u.attributes);
    if (!p)
      return void Ri.error(new z("mapview-BlendEffect", `Error creating shader program for blend mode ${s}`));
    a.useProgram(p), m.setSamplingMode(i), a.bindTexture(m, 0), p.setUniform1i("u_backbufferTexture", 0), t.setSamplingMode(i), a.bindTexture(t, 1), p.setUniform1i("u_layerTexture", 1), p.setUniform1f("u_opacity", n), p.setUniform1f("u_inFadeOpacity", h ? 1 : 0), a.setBlendFunction(R.ONE, R.ZERO);
    const E = this._quad;
    E.draw(), E.unbind(), p.dispose(), a.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(e) {
    this._quad || (this._quad = new ke(e, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(e, t, i) {
    const { context: s } = e;
    this._backBufferTexture !== null && t === this._size[0] && i === this._size[1] || (this._backBufferTexture ? this._backBufferTexture.resize(t, i) : this._backBufferTexture = new H(s, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: t, height: i }), this._size[0] = t, this._size[1] = i);
  }
}, Bi = class extends st {
  constructor(e) {
    super(), this.name = this.constructor.name, this.defines = [e];
  }
  dispose() {
  }
  bind({ context: e, painter: t }) {
    this._prev = e.getBoundFramebufferObject();
    const { width: i, height: s } = e.getViewport(), n = t.getFbos(i, s).effect0;
    e.bindFramebuffer(n), e.setColorMask(!0, !0, !0, !0), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e, t) {
    const { context: i, painter: s } = e, n = s.getPostProcessingEffects(t), a = i.getBoundFramebufferObject();
    for (const { postProcessingEffect: o, effect: l } of n)
      o.draw(e, a, l);
    i.bindFramebuffer(this._prev), i.setStencilTestEnabled(!1), s.blitTexture(i, a.colorTexture, S.NEAREST), i.setStencilTestEnabled(!0);
  }
};
const Lt = 1, Dn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], In = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Xe = 256, ye = { outlineWidth: 0.7, outerHaloWidth: 0.7, innerHaloWidth: 0.7, outlinePosition: 0 }, Rt = it.getLogger("geoscene.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function Un(r, e) {
  e.fillColor[0] = r.color.r / 255, e.fillColor[1] = r.color.g / 255, e.fillColor[2] = r.color.b / 255, e.fillColor[3] = r.color.a, r.haloColor ? (e.outlineColor[0] = r.haloColor.r / 255, e.outlineColor[1] = r.haloColor.g / 255, e.outlineColor[2] = r.haloColor.b / 255, e.outlineColor[3] = r.haloColor.a) : (e.outlineColor[0] = e.fillColor[0], e.outlineColor[1] = e.fillColor[1], e.outlineColor[2] = e.fillColor[2], e.outlineColor[3] = e.fillColor[3]), e.fillColor[3] *= r.fillOpacity, e.outlineColor[3] *= r.haloOpacity, e.fillColor[0] *= e.fillColor[3], e.fillColor[1] *= e.fillColor[3], e.fillColor[2] *= e.fillColor[3], e.outlineColor[0] *= e.outlineColor[3], e.outlineColor[1] *= e.outlineColor[3], e.outlineColor[2] *= e.outlineColor[3], e.outlineWidth = ye.outlineWidth, e.outerHaloWidth = ye.outerHaloWidth, e.innerHaloWidth = ye.innerHaloWidth, e.outlinePosition = ye.outlinePosition;
}
const Nn = [0, 0, 0, 0];
let Ln = class {
  constructor() {
    this._convertedHighlightOptions = { fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75], outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9], outlinePosition: ye.outlinePosition, outlineWidth: ye.outlineWidth, innerHaloWidth: ye.innerHaloWidth, outerHaloWidth: ye.outerHaloWidth }, this.shadeTexChanged = !0, this.texelData = new Uint8Array(4 * Xe), this.minMaxDistance = [0, 0];
  }
  setHighlightOptions(e) {
    const t = this._convertedHighlightOptions;
    Un(e, t);
    const i = t.outlinePosition - t.outlineWidth / 2 - t.outerHaloWidth, s = t.outlinePosition - t.outlineWidth / 2, n = t.outlinePosition + t.outlineWidth / 2, a = t.outlinePosition + t.outlineWidth / 2 + t.innerHaloWidth, o = Math.sqrt(Math.PI / 2) * Lt, l = Math.abs(i) > o ? Math.round(10 * (Math.abs(i) - o)) / 10 : 0, h = Math.abs(a) > o ? Math.round(10 * (Math.abs(a) - o)) / 10 : 0;
    let c;
    l && !h ? Rt.error("The outer rim of the highlight is " + l + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !l && h ? Rt.error("The inner rim of the highlight is " + h + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : l && h && Rt.error("The highlight is " + Math.max(l, h) + "px away from the edge of the feature; consider reducing some width values.");
    const _ = [void 0, void 0, void 0, void 0];
    function d(m, u, p) {
      _[0] = (1 - p) * m[0] + p * u[0], _[1] = (1 - p) * m[1] + p * u[1], _[2] = (1 - p) * m[2] + p * u[2], _[3] = (1 - p) * m[3] + p * u[3];
    }
    const { texelData: f } = this;
    for (let m = 0; m < Xe; ++m)
      c = i + m / (Xe - 1) * (a - i), c < i ? (_[4 * m + 0] = 0, _[4 * m + 1] = 0, _[4 * m + 2] = 0, _[4 * m + 3] = 0) : c < s ? d(Nn, t.outlineColor, (c - i) / (s - i)) : c < n ? [_[0], _[1], _[2], _[3]] = t.outlineColor : c < a ? d(t.outlineColor, t.fillColor, (c - n) / (a - n)) : [_[4 * m + 0], _[4 * m + 1], _[4 * m + 2], _[4 * m + 3]] = t.fillColor, f[4 * m + 0] = 255 * _[0], f[4 * m + 1] = 255 * _[1], f[4 * m + 2] = 255 * _[2], f[4 * m + 3] = 255 * _[3];
    this.minMaxDistance[0] = i, this.minMaxDistance[1] = a, this.shadeTexChanged = !0;
  }
  applyHighlightOptions(e, t) {
    this.shadeTex || (this.shadeTex = new H(e, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, width: Xe, height: 1, samplingMode: S.LINEAR })), this.shadeTexChanged && (this.shadeTex.updateData(0, 0, 0, Xe, 1, this.texelData), this.shadeTexChanged = !1), e.bindTexture(this.shadeTex, Ki), t.setUniform2fv("u_minMaxDistance", this.minMaxDistance);
  }
  destroy() {
    this.shadeTex && (this.shadeTex.dispose(), this.shadeTex = null);
  }
};
const zn = { shaders: { vertexShader: Q("highlight/textured.vert"), fragmentShader: Q("highlight/highlight.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) }, $n = { shaders: { vertexShader: Q("highlight/textured.vert"), fragmentShader: Q("highlight/blur.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
let kn = class {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e, t) {
    e.bindTexture(t, Ve), e.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", Dn), e.bindVAO(this._resources.quadVAO), e.drawArrays(X.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  finalBlur(e, t) {
    e.bindTexture(t, Ve), e.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", In), e.bindVAO(this._resources.quadVAO), e.drawArrays(X.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  renderHighlight(e, t, i) {
    e.bindTexture(t, Ve), e.useProgram(this._resources.highlightProgram), i.applyHighlightOptions(e, this._resources.highlightProgram), e.bindVAO(this._resources.quadVAO), e.setBlendingEnabled(!0), e.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), e.drawArrays(X.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  _initialize(e, t, i) {
    this._width = t, this._height = i;
    const s = pe.createVertex(e, ge.STATIC_DRAW, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), n = new Re(e, /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]), { geometry: [new Le("a_position", 2, Oe.BYTE, 0, 4), new Le("a_texcoord", 2, Oe.UNSIGNED_BYTE, 2, 4)] }, { geometry: s }), a = tt(e, zn), o = tt(e, $n);
    e.useProgram(a), a.setUniform1i("u_texture", Ve), a.setUniform1i("u_shade", Ki), a.setUniform1f("u_sigma", Lt), e.useProgram(o), o.setUniform1i("u_texture", Ve), o.setUniform1f("u_sigma", Lt), this._resources = { quadGeometry: s, quadVAO: n, highlightProgram: a, blurProgram: o };
  }
  setup(e, t, i) {
    this._resources ? (this._width = t, this._height = i) : this._initialize(e, t, i);
  }
};
function Ai(r, e, t) {
  const i = new H(r, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, width: e, height: t, samplingMode: S.LINEAR });
  return [i, new $(r, { colorTarget: G.TEXTURE, depthStencilTarget: V.STENCIL_RENDER_BUFFER }, i)];
}
let Gn = class {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Tex.dispose(), this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Tex.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
  }
  _initialize(e, t, i) {
    this._width = t, this._height = i;
    const [s, n] = Ai(e, t, i), [a, o] = Ai(e, t, i);
    this._resources = { sharedBlur1Tex: s, sharedBlur1Fbo: n, sharedBlur2Tex: a, sharedBlur2Fbo: o };
  }
  setup(e, t, i) {
    !this._resources || this._width === t && this._height === i || this.dispose(), this._resources || this._initialize(e, t, i);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Tex;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Tex;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
};
const Ae = 4, ht = 4 / Ae;
let Vn = class extends st {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new kn(), this._hlGradient = new Ln(), this._width = void 0, this._height = void 0, this._hlSurfaces = new Gn(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new Qi();
  }
  dispose() {
    this._hlSurfaces && this._hlSurfaces.dispose(), this._hlRenderer && this._hlRenderer.dispose(), this._hlGradient && this._hlGradient.destroy(), this._boundFBO = null;
  }
  bind(e) {
    const { context: t, painter: i } = e, { width: s, height: n } = t.getViewport(), a = i.getFbos(s, n).effect0;
    this.setup(e, s, n), t.bindFramebuffer(a), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e }, t, i) {
    this._width = t, this._height = i;
    const s = t % Ae, n = i % Ae;
    t += s < Ae / 2 ? -s : Ae - s, i += n < Ae / 2 ? -n : Ae - n, this._adjustedWidth = t, this._adjustedHeight = i, this._boundFBO = e.getBoundFramebufferObject();
    const a = Math.round(t * ht), o = Math.round(i * ht);
    this._hlRenderer.setup(e, a, o), this._hlSurfaces.setup(e, a, o);
  }
  draw({ context: e }) {
    const t = e.getBoundFramebufferObject();
    e.setViewport(0, 0, this._adjustedWidth * ht, this._adjustedHeight * ht), e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e.setStencilTestEnabled(!1), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(e, t.colorTexture, S.NEAREST, 1), e.setStencilTestEnabled(!1), e.setBlendingEnabled(!1), e.setColorMask(!1, !1, !1, !0), e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(e, this._hlSurfaces.sharedBlur1Tex), e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(e, this._hlSurfaces.sharedBlur2Tex), e.bindFramebuffer(this._boundFBO), e.setBlendingEnabled(!0), e.setColorMask(!0, !0, !0, !0), e.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(e, this._hlSurfaces.sharedBlur1Tex, this._hlGradient), this._boundFBO = null;
  }
  setHighlightOptions(e) {
    this._hlGradient.setHighlightOptions(e);
  }
}, Wn = class extends st {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["hittest"];
  }
  dispose() {
    D(this._fbo) && this._fbo.dispose();
  }
  createOptions({ pixelRatio: e }, t, i = Zi) {
    if (!t.length)
      return null;
    const s = t.shift(), n = s.point.x, a = s.point.y;
    return this._outstanding = s, { type: "hittest", distance: i * e, position: [n, a] };
  }
  bind(e) {
    const { context: t, attributeView: i } = e;
    if (!i.size)
      return;
    const s = i.getBlock(si);
    if (N(s))
      return;
    const n = s.getFBO(t);
    t.setViewport(0, 0, i.size, i.size), t.bindFramebuffer(n), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT);
  }
  unbind(e) {
  }
  draw(e) {
    const { context: t, attributeView: i } = e, s = i.getBlock(si);
    if (N(this._outstanding))
      return;
    const n = this._outstanding.resolver;
    if (N(s))
      return n.resolve([]), void (this._outstanding = null);
    const a = s.getFBO(t), o = new Uint8Array(a.width * a.height * 4);
    a.readPixels(0, 0, a.width, a.height, y.RGBA, C.UNSIGNED_BYTE, o);
    const l = [];
    for (let h = 0; h < o.length; h += 4)
      o[h] && l.push(h / 4);
    this._outstanding = null, n.resolve(l);
  }
}, Xn = class extends st {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["id"], this._lastSize = 0;
  }
  dispose() {
    D(this._fbo) && this._fbo.dispose();
  }
  bind({ context: e, painter: t }) {
    const { width: i, height: s } = e.getViewport();
    this._boundFBO = e.getBoundFramebufferObject();
    const n = t.getFbos(i, s).effect0;
    e.bindFramebuffer(n), e.setColorMask(!0, !0, !0, !0), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT);
  }
  unbind({ context: e }) {
    e.bindFramebuffer(this._boundFBO), this._boundFBO = null;
  }
  draw({ context: e, state: t, pixelRatio: i }, s, n = 2 * Zi) {
    const a = e.getBoundFramebufferObject(), o = t.size[1] * i, l = Math.round(n * i), h = l / 2, c = l / 2;
    this._ensureBuffer(l), s.forEach((_, d) => {
      const f = /* @__PURE__ */ new Map(), m = Math.floor(d.x * i - l / 2), u = Math.floor(o - d.y * i - l / 2);
      a.readPixels(m, u, l, l, y.RGBA, C.UNSIGNED_BYTE, this._buf);
      for (let E = 0; E < this._buf32.length; E++) {
        const g = this._buf32[E];
        if (g !== 4294967295 && g !== 0) {
          const T = E % l, v = l - Math.floor(E / l), x = (h - T) * (h - T) + (c - v) * (c - v), b = f.has(g) ? f.get(g) : 4294967295;
          f.set(g, Math.min(x, b));
        }
      }
      const p = Array.from(f).sort((E, g) => E[1] - g[1]).map((E) => E[0]);
      _.resolve(p), s.delete(d);
    });
  }
  _ensureBuffer(e) {
    this._lastSize !== e && (this._lastSize = e, this._buf = new Uint8Array(4 * e * e), this._buf32 = new Uint32Array(this._buf.buffer));
  }
};
const Bt = 5, Hn = [1, 0], qn = [0, 1], Yn = [1, 0.8, 0.6, 0.4, 0.2], jn = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let Kn = class {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(Bt), this._nMips = Bt, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    if (this._quad && (this._quad.dispose(), this._quad = null), this._intensityFBO && (this._intensityFBO.dispose(), this._intensityFBO = null), this._compositeFBO && (this._compositeFBO.dispose(), this._compositeFBO = null), this._mipsFBOs) {
      for (let e = 0; e < this._nMips; e++)
        this._mipsFBOs[e] && (this._mipsFBOs[e].horizontal.dispose(), this._mipsFBOs[e].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(e, t, i) {
    const { width: s, height: n } = t, { context: a, painter: o } = e, { materialManager: l } = o, h = a.gl, c = this._programDesc, { strength: _, radius: d, threshold: f } = i;
    this._quad || (this._quad = new ke(a, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(e, s, n), a.setStencilTestEnabled(!1), a.setBlendingEnabled(!0), a.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), a.setStencilWriteMask(0);
    const m = this._quad;
    m.bind(), a.bindFramebuffer(this._intensityFBO);
    const u = l.getProgram(e, c.luminosityHighPass);
    a.useProgram(u), a.bindTexture(t.colorTexture, 0), u.setUniform1i("u_texture", 0), u.setUniform3fv("u_defaultColor", [0, 0, 0]), u.setUniform1f("u_defaultOpacity", 0), u.setUniform1f("u_luminosityThreshold", f), u.setUniform1f("u_smoothWidth", 0.01);
    const p = [Math.round(s / 2), Math.round(n / 2)];
    a.setViewport(0, 0, p[0], p[1]), a.setClearColor(0, 0, 0, 0), a.clear(h.COLOR_BUFFER_BIT), m.draw(), a.setBlendingEnabled(!1);
    let E = this._intensityFBO.colorTexture;
    for (let v = 0; v < this._nMips; v++) {
      const x = l.getProgram(e, c.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[v] }]);
      a.useProgram(x), a.bindTexture(E, v + 1), x.setUniform1i("u_colorTexture", v + 1), x.setUniform2fv("u_texSize", p), x.setUniform2fv("u_direction", Hn), a.setViewport(0, 0, p[0], p[1]);
      const b = this._mipsFBOs[v];
      a.bindFramebuffer(b.horizontal), m.draw(), E = b.horizontal.colorTexture, a.bindFramebuffer(b.vertical), a.bindTexture(E, v + 1), x.setUniform2fv("u_direction", qn), m.draw(), E = b.vertical.colorTexture, p[0] = Math.round(p[0] / 2), p[1] = Math.round(p[1] / 2);
    }
    a.setViewport(0, 0, s, n);
    const g = l.getProgram(e, c.composite, [{ name: "nummips", value: Bt }]);
    a.bindFramebuffer(this._compositeFBO), a.useProgram(g), g.setUniform1f("u_bloomStrength", _), g.setUniform1f("u_bloomRadius", d), g.setUniform1fv("u_bloomFactors", Yn), g.setUniform3fv("u_bloomTintColors", jn), a.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), g.setUniform1i("u_blurTexture1", 1), a.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), g.setUniform1i("u_blurTexture2", 2), a.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), g.setUniform1i("u_blurTexture3", 3), a.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), g.setUniform1i("u_blurTexture4", 4), a.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), g.setUniform1i("u_blurTexture5", 5), m.draw(), a.bindFramebuffer(t), a.setBlendingEnabled(!0);
    const T = l.getProgram(e, c.blit);
    a.useProgram(T), a.bindTexture(this._compositeFBO.colorTexture, 6), T.setUniform1i("u_texture", 6), a.setBlendFunction(R.ONE, R.ONE), m.draw(), m.unbind(), a.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), a.setStencilTestEnabled(!0);
  }
  _createOrResizeResources(e, t, i) {
    const { context: s } = e;
    if (this._compositeFBO && this._size[0] === t && this._size[1] === i)
      return;
    this._size[0] = t, this._size[1] = i;
    const n = [Math.round(t / 2), Math.round(i / 2)];
    this._compositeFBO ? this._compositeFBO.resize(t, i) : this._compositeFBO = new $(s, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: t, height: i }), this._intensityFBO ? this._intensityFBO.resize(n[0], n[1]) : this._intensityFBO = new $(s, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: n[0], height: n[1] }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: n[0], height: n[1] });
    for (let a = 0; a < this._nMips; a++)
      this._mipsFBOs[a] ? (this._mipsFBOs[a].horizontal.resize(n[0], n[1]), this._mipsFBOs[a].vertical.resize(n[0], n[1])) : this._mipsFBOs[a] = { horizontal: new $(s, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: n[0], height: n[1] }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: n[0], height: n[1] }), vertical: new $(s, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: n[0], height: n[1] }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: n[0], height: n[1] }) }, n[0] = Math.round(n[0] / 2), n[1] = Math.round(n[1] / 2);
  }
};
const Zn = [1, 0], Qn = [0, 1];
let Jn = class {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(e, t, i) {
    const { context: s } = e, { type: n, radius: a } = i;
    if (a === 0)
      return;
    this._createOrResizeResources(e), this._quad || (this._quad = new ke(s, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const o = this._quad;
    o.bind(), n === "blur" ? this._gaussianBlur(e, t, a) : this._radialBlur(e, t), o.unbind();
  }
  _gaussianBlur(e, t, i) {
    const { context: s, state: n, painter: a, pixelRatio: o } = e, { size: l } = n, { materialManager: h } = a, c = this._programDesc, _ = this._quad, d = [Math.round(o * l[0]), Math.round(o * l[1])], f = this._blurFBO, m = h.getProgram(e, c.gaussianBlur, [{ name: "radius", value: Math.ceil(i) }]);
    s.useProgram(m), s.setBlendingEnabled(!1), s.bindFramebuffer(f), s.bindTexture(t.colorTexture, 4), m.setUniform1i("u_colorTexture", 4), m.setUniform2fv("u_texSize", d), m.setUniform2fv("u_direction", Zn), m.setUniform1f("u_sigma", i), _.draw(), s.bindFramebuffer(t), s.setStencilWriteMask(0), s.setStencilTestEnabled(!1), s.setDepthWriteEnabled(!1), s.setDepthTestEnabled(!1), s.bindTexture(f.colorTexture, 5), m.setUniform1i("u_colorTexture", 5), m.setUniform2fv("u_direction", Qn), _.draw(), s.setBlendingEnabled(!0), s.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), s.setStencilTestEnabled(!0);
  }
  _radialBlur(e, t) {
    const { context: i, painter: s } = e, { materialManager: n } = s, a = this._programDesc, o = this._quad, l = this._blurFBO;
    i.bindFramebuffer(l);
    const h = n.getProgram(e, a.radialBlur);
    i.useProgram(h), i.setBlendingEnabled(!1), i.bindTexture(t.colorTexture, 4), h.setUniform1i("u_colorTexture", 4), o.draw(), i.bindFramebuffer(t), i.setStencilWriteMask(0), i.setStencilTestEnabled(!1), i.setDepthWriteEnabled(!1), i.setDepthTestEnabled(!1), i.setBlendingEnabled(!0);
    const c = n.getProgram(e, a.blit);
    i.useProgram(c), i.bindTexture(l.colorTexture, 5), c.setUniform1i("u_texture", 5), i.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), o.draw();
  }
  _createOrResizeResources(e) {
    const { context: t, state: i, pixelRatio: s } = e, { size: n } = i, a = Math.round(s * n[0]), o = Math.round(s * n[1]);
    this._blurFBO && this._size[0] === a && this._size[1] === o || (this._size[0] = a, this._size[1] = o, this._blurFBO ? this._blurFBO.resize(a, o) : this._blurFBO = new $(t, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: a, height: o }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: a, height: o }));
  }
}, ea = class {
  constructor() {
    this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
  }
  draw(e, t, i) {
    const { width: s, height: n } = t;
    this._createOrResizeResources(e, s, n);
    const { context: a, painter: o } = e, { materialManager: l } = o, h = this._programDesc, c = this._quad, _ = i.colorMatrix;
    c.bind();
    const d = this._layerFBOTexture;
    a.bindFramebuffer(t), t.copyToTexture(0, 0, s, n, 0, 0, d), a.setBlendingEnabled(!1), a.setStencilTestEnabled(!1);
    const f = l.getProgram(e, h);
    a.useProgram(f), a.bindTexture(d, 2), f.setUniformMatrix4fv("u_coefficients", _), f.setUniform1i("u_colorTexture", 2), c.draw(), a.setBlendingEnabled(!0), a.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), a.setStencilTestEnabled(!0), c.unbind();
  }
  _createOrResizeResources(e, t, i) {
    const { context: s } = e;
    this._layerFBOTexture && this._size[0] === t && this._size[1] === i || (this._size[0] = t, this._size[1] = i, this._layerFBOTexture ? this._layerFBOTexture.resize(t, i) : this._layerFBOTexture = new H(s, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: t, height: i }), this._quad || (this._quad = new ke(s, [-1, -1, 1, -1, -1, 1, 1, 1])));
  }
};
const ta = [1, 0], ia = [0, 1];
let sa = class {
  constructor() {
    this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._programDesc = { blur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null), this._horizontalBlurFBO && (this._horizontalBlurFBO.dispose(), this._horizontalBlurFBO = null), this._verticalBlurFBO && (this._verticalBlurFBO.dispose(), this._verticalBlurFBO = null);
  }
  draw(e, t, i) {
    const { context: s, state: n, painter: a } = e, { materialManager: o } = a, l = this._programDesc, h = t.width, c = t.height, _ = [Math.round(h / 2), Math.round(c / 2)], { blurRadius: d, offsetX: f, offsetY: m, color: u } = i, p = [we(f / 2), we(m / 2)];
    this._createOrResizeResources(e, h, c, _);
    const E = this._horizontalBlurFBO, g = this._verticalBlurFBO;
    s.setStencilWriteMask(0), s.setStencilTestEnabled(!1), s.setDepthWriteEnabled(!1), s.setDepthTestEnabled(!1);
    const T = this._layerFBOTexture;
    t.copyToTexture(0, 0, h, c, 0, 0, T), this._quad || (this._quad = new ke(s, [-1, -1, 1, -1, -1, 1, 1, 1])), s.setViewport(0, 0, _[0], _[1]);
    const v = this._quad;
    v.bind(), s.setBlendingEnabled(!1);
    const x = o.getProgram(e, l.blur, [{ name: "radius", value: Math.ceil(d) }]);
    s.useProgram(x), s.bindFramebuffer(E), s.bindTexture(t.colorTexture, 4), x.setUniform1i("u_colorTexture", 4), x.setUniform2fv("u_texSize", _), x.setUniform2fv("u_direction", ta), x.setUniform1f("u_sigma", d), v.draw(), s.bindFramebuffer(g), s.bindTexture(E.colorTexture, 5), x.setUniform1i("u_colorTexture", 5), x.setUniform2fv("u_direction", ia), v.draw(), s.bindFramebuffer(t), s.setViewport(0, 0, h, c);
    const b = o.getProgram(e, l.composite);
    s.useProgram(b), s.bindTexture(g.colorTexture, 2), b.setUniform1i("u_blurTexture", 2), s.bindTexture(T, 3), b.setUniform1i("u_layerFBOTexture", 3), b.setUniform4fv("u_shadowColor", [u[3] * (u[0] / 255), u[3] * (u[1] / 255), u[3] * (u[2] / 255), u[3]]), b.setUniformMatrix3fv("u_displayViewMat3", n.displayMat3), b.setUniform2fv("u_shadowOffset", p), v.draw(), s.setBlendingEnabled(!0), s.setStencilTestEnabled(!0), s.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), v.unbind();
  }
  _createOrResizeResources(e, t, i, s) {
    const { context: n } = e;
    this._horizontalBlurFBO && this._size[0] === t && this._size[1] === i || (this._size[0] = t, this._size[1] = i, this._horizontalBlurFBO ? this._horizontalBlurFBO.resize(s[0], s[1]) : this._horizontalBlurFBO = new $(n, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: s[0], height: s[1] }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: s[0], height: s[1] }), this._verticalBlurFBO ? this._verticalBlurFBO.resize(s[0], s[1]) : this._verticalBlurFBO = new $(n, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE, width: s[0], height: s[1] }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: s[0], height: s[1] }), this._layerFBOTexture ? this._layerFBOTexture.resize(t, i) : this._layerFBOTexture = new H(n, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: t, height: i }));
  }
}, ra = class {
  constructor() {
    this._size = [0, 0];
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
  }
  draw(e, t, i) {
    const { width: s, height: n } = t;
    this._createOrResizeResources(e, s, n);
    const { context: a, painter: o } = e, { amount: l } = i, h = a.gl, c = this._layerFBOTexture;
    a.bindFramebuffer(t), t.copyToTexture(0, 0, s, n, 0, 0, c), a.setBlendingEnabled(!0), a.setStencilTestEnabled(!1), a.setDepthTestEnabled(!1), a.setClearColor(0, 0, 0, 0), a.clear(h.COLOR_BUFFER_BIT), o.blitTexture(a, c, S.NEAREST, l);
  }
  _createOrResizeResources(e, t, i) {
    const { context: s } = e;
    this._layerFBOTexture && this._size[0] === t && this._size[1] === i || (this._size[0] = t, this._size[1] = i, this._layerFBOTexture ? this._layerFBOTexture.resize(t, i) : this._layerFBOTexture = new H(s, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.NEAREST, flipped: !1, width: t, height: i }));
  }
};
function na(r) {
  switch (r) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return r;
    default:
      return "colorize";
  }
}
const aa = { colorize: () => new ea(), blur: () => new Jn(), bloom: () => new Kn(), opacity: () => new ra(), "drop-shadow": () => new sa() };
let oa = class {
  constructor(e) {
    this._requestRender = e, this._effectMap = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._requestRender && (this._requestRender = null), this._effectMap.forEach((e) => e.dispose()), this._effectMap.clear();
  }
  getPostProcessingEffects(e) {
    if (!e || e.length === 0)
      return [];
    const t = [];
    for (const i of e) {
      const s = na(i.type);
      let n = this._effectMap.get(s);
      n || (n = aa[s](), this._effectMap.set(s, n)), t.push({ postProcessingEffect: n, effect: i });
    }
    return t;
  }
}, la = class {
  constructor(e, t) {
    var i;
    this.brushes = e, this.name = t.name, this.drawPhase = t.drawPhase || Z.MAP, this._targetFn = t.target, this.effects = t.effects || [], this.enableDefaultDraw = (i = t.enableDefaultDraw) != null ? i : () => !0;
  }
  render(e) {
    const { context: t, profiler: i } = e, s = this._targetFn(), n = this.drawPhase & e.drawPhase;
    if (i.recordPassStart(this.name), n) {
      this.enableDefaultDraw() && this._doRender(e, s), i.recordPassEnd();
      for (const a of this.effects) {
        if (!a.enable())
          continue;
        const o = a.apply;
        i.recordPassStart(this.name + "." + o.name), i.recordBrushStart(o.name);
        const l = a.args && a.args(), { x: h, y: c, width: _, height: d } = t.getViewport(), f = t.getBoundFramebufferObject();
        o.bind(e, l);
        const m = o.createOptions(e, l), u = e.passOptions;
        e.passOptions = m, this._doRender(e, s, o.defines), e.passOptions = u, o.draw(e, l), o.unbind(e, l), t.bindFramebuffer(f), t.setViewport(h, c, _, d), i.recordBrushEnd(), i.recordPassEnd();
      }
    }
  }
  _doRender(e, t, i) {
    if (!N(t))
      if (Rs(t)) {
        for (const s of t)
          if (s.visible)
            for (const n of this.brushes)
              e.profiler.recordBrushStart(n.name), n.prepareState(e, s, i), n.draw(e, s, i), e.profiler.recordBrushEnd();
      } else
        for (const s of this.brushes)
          e.profiler.recordBrushStart(s.name), s.prepareState(e, t, i), s.draw(e, t, i), e.profiler.recordBrushEnd();
  }
};
const ha = { [lt.FILL]: Ue.fill, [lt.LINE]: Ue.line, [lt.MARKER]: Ue.marker, [lt.TEXT]: Ue.text };
class ua {
  constructor(e, t, i) {
    this.context = e, this._blitRenderer = new Qi(), this._brushCache = /* @__PURE__ */ new Map(), this._vtlMaterialManager = new Zr(), this._blendEffect = new Pn(), this._fboPool = [], this.effects = { highlight: new Vn(), hittest: new Wn(), hittestVTL: new Xn(), integrate: new On(), insideEffect: new Bi("inside"), outsideEffect: new Bi("outside") }, this.materialManager = new sn(e), this.textureManager = new Cn(t, i), this._effectsManager = new oa(t);
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getRenderTarget() {
    return this._renderTarget;
  }
  setRenderTarget(e) {
    this._renderTarget = e;
  }
  getFbos(e, t) {
    if (e !== this._lastWidth || t !== this._lastHeight) {
      if (this._lastWidth = e, this._lastHeight = t, this._fbos) {
        for (const a in this._fbos)
          this._fbos[a].resize(e, t);
        return this._fbos;
      }
      const i = { target: I.TEXTURE_2D, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.NEAREST, wrapMode: U.CLAMP_TO_EDGE, width: e, height: t }, s = { colorTarget: G.TEXTURE, depthStencilTarget: V.DEPTH_STENCIL_RENDER_BUFFER }, n = new xr(this.context, { width: e, height: t, internalFormat: wr.DEPTH_STENCIL });
      this._stencilBuf = n, this._fbos = { output: new $(this.context, s, i, n), blend: new $(this.context, s, i, n), effect0: new $(this.context, s, i, n) };
    }
    return this._fbos;
  }
  acquireFbo(e, t) {
    let i;
    i = this._fboPool.length > 0 ? this._fboPool.pop() : new $(this.context, { colorTarget: G.TEXTURE, depthStencilTarget: V.DEPTH_STENCIL_RENDER_BUFFER }, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.NEAREST, wrapMode: U.CLAMP_TO_EDGE, width: e, height: t }, this._stencilBuf);
    const s = i.descriptor;
    return s.width === e && s.height === t || i.resize(e, t), i;
  }
  releaseFbo(e) {
    this._fboPool.push(e);
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderLayers(e, t = null) {
    const { width: i, height: s } = e.getViewport();
    this._prevFBO = e.getBoundFramebufferObject();
    const n = this.getFbos(i, s);
    if (e.bindFramebuffer(n.output), e.setColorMask(!0, !0, !0, !0), e.setDepthWriteEnabled(!0), D(t)) {
      const { r: a, g: o, b: l, a: h } = t.color;
      e.setClearColor(h * a / 255, h * o / 255, h * l / 255, h);
    } else
      e.setClearColor(0, 0, 0, 0);
    e.setClearDepth(1), e.clear(e.gl.COLOR_BUFFER_BIT | e.gl.DEPTH_BUFFER_BIT), e.setDepthWriteEnabled(!1);
  }
  beforeRenderLayer(e, t, i) {
    const { context: s, blendMode: n, effects: a, requireFBO: o, drawPhase: l } = e;
    if (o || Si(l, n, a, i))
      s.bindFramebuffer(this._fbos.blend), s.setColorMask(!0, !0, !0, !0), s.setClearColor(0, 0, 0, 0), s.setDepthWriteEnabled(!0), s.setClearDepth(1), s.clear(s.gl.COLOR_BUFFER_BIT | s.gl.DEPTH_BUFFER_BIT), s.setDepthWriteEnabled(!1);
    else {
      const h = this._getOutputFBO();
      s.bindFramebuffer(h);
    }
    s.setDepthWriteEnabled(!1), s.setDepthTestEnabled(!1), s.setStencilTestEnabled(!0), s.setClearStencil(t), s.setStencilWriteMask(255), s.clear(s.gl.STENCIL_BUFFER_BIT);
  }
  compositeLayer(e, t) {
    const { context: i, blendMode: s, effects: n, requireFBO: a, drawPhase: o } = e;
    if (a || Si(o, s, n, t)) {
      D(n) && n.length > 0 && o === Z.MAP && this._applyEffects(e, n);
      const l = this._getOutputFBO();
      i.bindFramebuffer(l), i.setStencilTestEnabled(!1), i.setStencilWriteMask(0), i.setBlendingEnabled(!0), i.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), i.setColorMask(!0, !0, !0, !0);
      const h = N(s) || o === Z.HIGHLIGHT ? "normal" : s;
      this._blendEffect.draw(e, this._fbos.blend.colorTexture, S.NEAREST, h, t);
    }
  }
  renderLayers(e) {
    if (e.bindFramebuffer(this._prevFBO), !this._fbos)
      return;
    const t = this._getOutputFBO();
    e.setStencilTestEnabled(!1), e.setStencilWriteMask(0), this.blitTexture(e, t.colorTexture, S.NEAREST);
  }
  dispose() {
    if (this.materialManager.dispose(), this.textureManager.dispose(), this._blitRenderer && (this._blitRenderer.dispose(), this._blitRenderer = null), this._brushCache && (this._brushCache.forEach((e) => e.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos)
      for (const e in this._fbos)
        this._fbos[e] && this._fbos[e].dispose();
    for (const e of this._fboPool)
      e.dispose();
    if (this._fboPool.length = 0, this.effects)
      for (const e in this.effects)
        this.effects[e] && this.effects[e].dispose();
    this._effectsManager.dispose(), this._vtlMaterialManager && (this._vtlMaterialManager.dispose(), this._vtlMaterialManager = null), this._prevFBO = null;
  }
  getGeometryBrush(e) {
    const t = ha[e];
    let i = this._brushCache.get(t);
    return i === void 0 && (i = new t(), this._brushCache.set(t, i)), this._brushCache.get(t);
  }
  renderObject(e, t, i, s) {
    const n = Ue[i];
    if (!n)
      return null;
    let a = this._brushCache.get(n);
    a === void 0 && (a = new n(), this._brushCache.set(n, a)), a.prepareState(e, t, s), a.draw(e, t, s);
  }
  renderObjects(e, t, i, s) {
    const n = Ue[i];
    if (!n)
      return null;
    let a = this._brushCache.get(n);
    a === void 0 && (a = new n(), this._brushCache.set(n, a)), a.drawMany(e, t, s);
  }
  registerRenderPass(e) {
    const t = e.brushes.map((i) => (this._brushCache.has(i) || this._brushCache.set(i, new i()), this._brushCache.get(i)));
    return new la(t, e);
  }
  setHighlightOptions(e) {
    this.effects.highlight.setHighlightOptions(e);
  }
  blitTexture(e, t, i, s = 1) {
    e.setBlendingEnabled(!0), e.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e.setColorMask(!0, !0, !0, !0), this._blitRenderer.render(e, t, i, s);
  }
  getPostProcessingEffects(e) {
    return this._effectsManager.getPostProcessingEffects(e);
  }
  _getOutputFBO() {
    return this._renderTarget != null ? this._renderTarget : this._fbos.output;
  }
  _applyEffects(e, t) {
    const { context: i } = e, s = this._effectsManager.getPostProcessingEffects(t);
    for (const { postProcessingEffect: n, effect: a } of s)
      i.bindFramebuffer(this._fbos.blend), n.draw(e, this._fbos.blend, a);
  }
}
function Si(r, e, t, i) {
  return r !== Z.HIGHLIGHT && (i !== 1 || D(e) && e !== "normal" || D(t) && t.length > 0);
}
let Ci = class {
  constructor(e, t, i, s, n, a, o, l) {
    this.createQuery = e, this.resultAvailable = t, this.getResult = i, this.disjoint = s, this.beginTimeElapsed = n, this.endTimeElapsed = a, this.createTimestamp = o, this.timestampBits = l;
  }
};
function os(r, e) {
  if (e.disjointTimerQuery)
    return null;
  let t = r.getExtension("EXT_disjoint_timer_query_webgl2");
  return t && W(r) ? new Ci(() => r.createQuery(), (i) => r.getQueryParameter(i, r.QUERY_RESULT_AVAILABLE), (i) => r.getQueryParameter(i, r.QUERY_RESULT), () => r.getParameter(t.GPU_DISJOINT_EXT), (i) => r.beginQuery(t.TIME_ELAPSED_EXT, i), () => r.endQuery(t.TIME_ELAPSED_EXT), (i) => t.queryCounterEXT(i, t.TIMESTAMP_EXT), () => r.getQuery(t.TIMESTAMP_EXT, t.QUERY_COUNTER_BITS_EXT)) : (t = r.getExtension("EXT_disjoint_timer_query"), t ? new Ci(() => t.createQueryEXT(), (i) => t.getQueryObjectEXT(i, t.QUERY_RESULT_AVAILABLE_EXT), (i) => t.getQueryObjectEXT(i, t.QUERY_RESULT_EXT), () => r.getParameter(t.GPU_DISJOINT_EXT), (i) => t.beginQueryEXT(t.TIME_ELAPSED_EXT, i), () => t.endQueryEXT(t.TIME_ELAPSED_EXT), (i) => t.queryCounterEXT(i, t.TIMESTAMP_EXT), () => t.getQueryEXT(t.TIMESTAMP_EXT, t.QUERY_COUNTER_BITS_EXT)) : null);
}
const re = pt("geoscene-2d-profiler");
let ca = class {
  constructor(e, t) {
    if (this._events = new Bs(), this._entries = /* @__PURE__ */ new Map(), this._timings = new Dr(10), !re)
      return;
    this._ext = os(e.gl, {}), this._debugOutput = t;
    const i = e.gl;
    if (this.enableCommandLogging) {
      for (const s in i)
        if (typeof i[s] == "function") {
          const n = i[s], a = s.indexOf("draw") !== -1;
          i[s] = (...o) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: s, args: o, isDrawCommand: a }), this._currentSummary && (this._currentSummary.commands++, a && this._currentSummary.drawCommands++), n.apply(i, o));
        }
    }
  }
  get enableCommandLogging() {
    return !(typeof re == "object" && re.disableCommands);
  }
  recordContainerStart(e) {
    re && (this._currentContainer = e);
  }
  recordContainerEnd() {
    re && (this._currentContainer = null);
  }
  recordPassStart(e) {
    re && (this._currentPass = e, this._initSummary());
  }
  recordPassEnd() {
    re && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e) {
    re && (this._currentBrush = e);
  }
  recordBrushEnd() {
    re && (this._currentBrush = null);
  }
  recordStart(e) {
    if (re && D(this._ext)) {
      if (this._entries.has(e)) {
        const i = this._entries.get(e), s = this._ext.resultAvailable(i.query), n = this._ext.disjoint();
        if (s && !n) {
          const a = this._ext.getResult(i.query) / 1e6;
          let o = 0;
          if (D(this._timings.enqueue(a))) {
            const c = this._timings.entries, _ = c.length;
            let d = 0;
            for (const f of c)
              d += f;
            o = d / _;
          }
          const l = a.toFixed(2), h = o ? o.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e}, ${l} ms (${h} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(i.summaries), console.log("Commands: ", i.commands), console.groupEnd()) : console.log(`Frame report for ${e}, ${l} ms (${h} last 10 avg)`), this._debugOutput.innerHTML = `${l} (${h})`;
        }
        for (const a of i.handles)
          a.remove();
        this._entries.delete(e);
      }
      const t = { name: e, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t.handles.push(this._events.on("command", (i) => {
        t.commandsLen++, t.commands.push(i), i.isDrawCommand && t.drawCommands++;
      })), t.handles.push(this._events.on("summary", (i) => {
        t.summaries.push(i);
      }))), this._ext.beginTimeElapsed(t.query), this._entries.set(e, t);
    }
  }
  recordEnd(e) {
    re && D(this._ext) && this._entries.has(e) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._events.emit("summary", this._currentSummary);
  }
};
const Oi = { shaders: { vertexShader: Q("stencil/stencil.vert"), fragmentShader: Q("stencil/stencil.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
let Mi = class {
  constructor() {
    this.blend = !1, this.blendColor = { r: 0, g: 0, b: 0, a: 0 }, this.blendFunction = { srcRGB: R.ONE, dstRGB: R.ZERO, srcAlpha: R.ONE, dstAlpha: R.ZERO }, this.blendEquation = { mode: It.ADD, modeAlpha: It.ADD }, this.colorMask = { r: !0, g: !0, b: !0, a: !0 }, this.faceCulling = !1, this.cullFace = Ce.BACK, this.frontFace = ji.CCW, this.scissorTest = !1, this.scissorRect = { x: 0, y: 0, width: 0, height: 0 }, this.depthTest = !1, this.depthFunction = Ne.LESS, this.clearDepth = 1, this.depthWrite = !0, this.depthRange = { zNear: 0, zFar: 1 }, this.viewport = null, this.stencilTest = !1, this.polygonOffsetFill = !1, this.polygonOffset = [0, 0], this.stencilFunction = { face: Ce.FRONT_AND_BACK, func: Ne.ALWAYS, ref: 0, mask: 1 }, this.clearStencil = 0, this.stencilWriteMask = 1, this.stencilOperation = { face: Ce.FRONT_AND_BACK, fail: me.KEEP, zFail: me.KEEP, zPass: me.KEEP }, this.clearColor = { r: 0, g: 0, b: 0, a: 0 }, this.program = null, this.vertexBuffer = null, this.indexBuffer = null, this.uniformBuffer = null, this.pixelPackBuffer = null, this.pixelUnpackBuffer = null, this.copyReadBuffer = null, this.copyWriteBuffer = null, this.uniformBufferBindingPoints = new Array(), this.readFramebuffer = null, this.drawFramebuffer = null, this.renderbuffer = null, this.activeTexture = 0, this.textureUnitMap = new Array();
  }
}, da = class {
  constructor(e) {
    this._allocations = /* @__PURE__ */ new Map(), e ? Error.stackTraceLimit = 1 / 0 : (this.add = () => {
    }, this.remove = () => {
    });
  }
  add(e) {
    this._allocations.set(e, new Error().stack);
  }
  remove(e) {
    this._allocations.delete(e);
  }
  print() {
    if (this._allocations.size > 0) {
      console.log(`${this._allocations.size} live object allocations:`);
      const e = /* @__PURE__ */ new Map();
      this._allocations.forEach((t) => {
        var i;
        e.set(t, ((i = e.get(t)) != null ? i : 0) + 1);
      }), e.forEach((t, i) => {
        const s = i.split(`
`);
        s.shift(), s.shift(), console.log(`${t}: ${s.shift()}`), s.forEach((n) => console.log("   ", n));
      });
    }
  }
}, _a = class {
  constructor() {
    this.RECORD_ALLOCATIONS = !1;
  }
};
const fa = new _a();
let ma = class {
  constructor() {
    for (this._current = new Array(), this._max = new Array(), this._allocations = new da(fa.RECORD_ALLOCATIONS); this._current.length < Ke.COUNT; )
      this._current.push(0), this._max.push(0);
  }
  resetMax() {
    for (this._max.length = 0; this._max.length < this._current.length; )
      this._max.push(0);
  }
  increment(e, t) {
    const i = ++this._current[e];
    this._max[e] = Math.max(i, this._max[e]), this._allocations.add(t);
  }
  decrement(e, t) {
    --this._current[e], this._allocations.remove(t);
  }
  get max() {
    return this._max;
  }
  get current() {
    return this._current;
  }
  get total() {
    return this.current.reduce((e, t) => e + t, 0);
  }
  printResourceCount() {
    if (this.total > 0) {
      console.log("Live objects:");
      for (let e = 0; e < Ke.COUNT; ++e) {
        const t = this._current[e];
        t > 0 && console.log(`${Ke[e]}: ${t}`);
      }
    }
    this._allocations.print();
  }
};
function Pi(r, e) {
  const t = new $(r, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE }, { target: I.TEXTURE_2D, wrapMode: U.CLAMP_TO_EDGE, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.NEAREST, width: 1, height: 1 });
  function i(E, g) {
    const T = `

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${e ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
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
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `, v = `
  precision highp float;

  varying vec4 v_color;

  void main() {
    gl_FragColor = v_color;
  }
  `, x = r.programCache.acquire(T, v, /* @__PURE__ */ new Map([["position", 0]])), b = new Float32Array(6);
    ni(E, b, 3);
    const B = new Float32Array(6);
    return ni(g, B, 3), r.useProgram(x), x.setUniform3f("u_highA", b[0], b[2], b[4]), x.setUniform3f("u_lowA", b[1], b[3], b[5]), x.setUniform3f("u_highB", B[0], B[2], B[4]), x.setUniform3f("u_lowB", B[1], B[3], B[5]), x;
  }
  const s = pe.createVertex(r, ge.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), n = new Re(r, /* @__PURE__ */ new Map([["position", 0]]), { geometry: [new Le("position", 2, Oe.UNSIGNED_SHORT, 0, 4)] }, { geometry: s }), a = Pt(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6), o = Pt(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9), l = i(a, o), h = r.getBoundFramebufferObject(), { x: c, y: _, width: d, height: f } = r.getViewport();
  r.bindFramebuffer(t), r.setViewport(0, 0, 1, 1), r.bindVAO(n), r.drawArrays(X.TRIANGLE_STRIP, 0, 4);
  const m = new Uint8Array(4);
  t.readPixels(0, 0, 1, 1, y.RGBA, C.UNSIGNED_BYTE, m), l.dispose(), n.dispose(!1), s.dispose(), t.dispose(), r.setViewport(c, _, d, f), r.bindFramebuffer(h);
  const u = (a[2] - o[2]) / 25, p = hr(m);
  return Math.abs(u - p);
}
var Di, Ii, Ui, ls = { exports: {} };
function pa(r) {
  var e, t, i, s, n;
  if (!r.gl)
    return !1;
  if (r.type === mt.WEBGL1)
    return !((s = r.capabilities.textureFloat) == null || !s.textureFloat || (n = r.capabilities.colorBufferFloat) == null || !n.textureFloat);
  if (!((e = r.capabilities.textureFloat) != null && e.textureFloat && ((t = r.capabilities.colorBufferFloat) != null && t.textureFloat) && ((i = r.capabilities.colorBufferFloat) != null && i.floatBlend)))
    return !1;
  const a = new $(r, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE }, { target: I.TEXTURE_2D, wrapMode: U.CLAMP_TO_EDGE, pixelFormat: y.RGBA, dataType: C.FLOAT, internalFormat: yr.RGBA32F, samplingMode: S.NEAREST, width: 1, height: 1 }), o = pe.createVertex(r, ge.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), l = new Re(r, /* @__PURE__ */ new Map([["a_pos", 0]]), { geometry: [new Le("a_pos", 2, Oe.UNSIGNED_SHORT, 0, 4)] }, { geometry: o }), h = `
  precision highp float;
  attribute vec2 a_pos;

  void main() {
    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
  }
  `, c = `
   precision highp float;

   void main() {
    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);
   }
  `, _ = r.programCache.acquire(h, c, /* @__PURE__ */ new Map([["a_pos", 0]]));
  r.useProgram(_);
  const d = r.getBoundFramebufferObject(), { x: f, y: m, width: u, height: p } = r.getViewport();
  r.bindFramebuffer(a), r.setViewport(0, 0, 1, 1), r.bindVAO(l), r.drawArrays(X.TRIANGLE_STRIP, 0, 4);
  const E = Ir({ blending: Ur });
  r.setPipelineState(E), r.drawArrays(X.TRIANGLE_STRIP, 0, 4), ls.exports.init(r);
  const g = r.gl.getError();
  return r.setViewport(f, m, u, p), r.bindFramebuffer(d), _.dispose(), l.dispose(!1), o.dispose(), a.dispose(), g !== 1282 || (console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."), !1);
}
Di = ls, Ii = function() {
  var r = function(u) {
    window.console && window.console.log && window.console.log(u);
  }, e = function(u) {
    window.console && window.console.error ? window.console.error(u) : r(u);
  }, t = { enable: { 1: { 0: !0 } }, disable: { 1: { 0: !0 } }, getParameter: { 1: { 0: !0 } }, drawArrays: { 3: { 0: !0 } }, drawElements: { 4: { 0: !0, 2: !0 } }, createShader: { 1: { 0: !0 } }, getShaderParameter: { 2: { 1: !0 } }, getProgramParameter: { 2: { 1: !0 } }, getShaderPrecisionFormat: { 2: { 0: !0, 1: !0 } }, getVertexAttrib: { 2: { 1: !0 } }, vertexAttribPointer: { 6: { 2: !0 } }, bindTexture: { 2: { 0: !0 } }, activeTexture: { 1: { 0: !0 } }, getTexParameter: { 2: { 0: !0, 1: !0 } }, texParameterf: { 3: { 0: !0, 1: !0 } }, texParameteri: { 3: { 0: !0, 1: !0, 2: !0 } }, texImage2D: { 9: { 0: !0, 2: !0, 6: !0, 7: !0 }, 6: { 0: !0, 2: !0, 3: !0, 4: !0 } }, texSubImage2D: { 9: { 0: !0, 6: !0, 7: !0 }, 7: { 0: !0, 4: !0, 5: !0 } }, copyTexImage2D: { 8: { 0: !0, 2: !0 } }, copyTexSubImage2D: { 8: { 0: !0 } }, generateMipmap: { 1: { 0: !0 } }, compressedTexImage2D: { 7: { 0: !0, 2: !0 } }, compressedTexSubImage2D: { 8: { 0: !0, 6: !0 } }, bindBuffer: { 2: { 0: !0 } }, bufferData: { 3: { 0: !0, 2: !0 } }, bufferSubData: { 3: { 0: !0 } }, getBufferParameter: { 2: { 0: !0, 1: !0 } }, pixelStorei: { 2: { 0: !0, 1: !0 } }, readPixels: { 7: { 4: !0, 5: !0 } }, bindRenderbuffer: { 2: { 0: !0 } }, bindFramebuffer: { 2: { 0: !0 } }, checkFramebufferStatus: { 1: { 0: !0 } }, framebufferRenderbuffer: { 4: { 0: !0, 1: !0, 2: !0 } }, framebufferTexture2D: { 5: { 0: !0, 1: !0, 2: !0 } }, getFramebufferAttachmentParameter: { 3: { 0: !0, 1: !0, 2: !0 } }, getRenderbufferParameter: { 2: { 0: !0, 1: !0 } }, renderbufferStorage: { 4: { 0: !0, 1: !0 } }, clear: { 1: { 0: { enumBitwiseOr: ["COLOR_BUFFER_BIT", "DEPTH_BUFFER_BIT", "STENCIL_BUFFER_BIT"] } } }, depthFunc: { 1: { 0: !0 } }, blendFunc: { 2: { 0: !0, 1: !0 } }, blendFuncSeparate: { 4: { 0: !0, 1: !0, 2: !0, 3: !0 } }, blendEquation: { 1: { 0: !0 } }, blendEquationSeparate: { 2: { 0: !0, 1: !0 } }, stencilFunc: { 3: { 0: !0 } }, stencilFuncSeparate: { 4: { 0: !0, 1: !0 } }, stencilMaskSeparate: { 2: { 0: !0 } }, stencilOp: { 3: { 0: !0, 1: !0, 2: !0 } }, stencilOpSeparate: { 4: { 0: !0, 1: !0, 2: !0, 3: !0 } }, cullFace: { 1: { 0: !0 } }, frontFace: { 1: { 0: !0 } }, drawArraysInstancedANGLE: { 4: { 0: !0 } }, drawElementsInstancedANGLE: { 5: { 0: !0, 2: !0 } }, blendEquationEXT: { 1: { 0: !0 } } }, i = null, s = null;
  function n(u) {
    if (i == null)
      for (var p in i = {}, s = {}, u)
        typeof u[p] == "number" && (i[u[p]] = p, s[p] = u[p]);
  }
  function a() {
    if (i == null)
      throw "WebGLDebugUtils.init(ctx) not called";
  }
  function o(u) {
    return a(), i[u] !== void 0;
  }
  function l(u) {
    a();
    var p = i[u];
    return p !== void 0 ? "gl." + p : "/*UNKNOWN WebGL ENUM*/ 0x" + u.toString(16);
  }
  function h(u, p, E, g) {
    var T;
    if ((T = t[u]) !== void 0 && (T = T[p]) !== void 0 && T[E]) {
      if (typeof T[E] == "object" && T[E].enumBitwiseOr !== void 0) {
        for (var v = T[E].enumBitwiseOr, x = 0, b = [], B = 0; B < v.length; ++B) {
          var A = s[v[B]];
          g & A && (x |= A, b.push(l(A)));
        }
        return x === g ? b.join(" | ") : l(g);
      }
      return l(g);
    }
    return g === null ? "null" : g === void 0 ? "undefined" : g.toString();
  }
  function c(u, p) {
    for (var E = "", g = p.length, T = 0; T < g; ++T)
      E += (T == 0 ? "" : ", ") + h(u, g, T, p[T]);
    return E;
  }
  function _(u, p, E) {
    u.__defineGetter__(E, function() {
      return p[E];
    }), u.__defineSetter__(E, function(g) {
      p[E] = g;
    });
  }
  function d(u, p, E, g) {
    g = g || u, n(u), p = p || function(A, M, ie) {
      for (var ae = "", oe = ie.length, be = 0; be < oe; ++be)
        ae += (be == 0 ? "" : ", ") + h(M, oe, be, ie[be]);
      e("WebGL error " + l(A) + " in " + M + "(" + ae + ")");
    };
    var T = {};
    function v(A, M) {
      return function() {
        E && E(M, arguments);
        var ie = A[M].apply(A, arguments), ae = g.getError();
        return ae != 0 && (T[ae] = !0, p(ae, M, arguments)), ie;
      };
    }
    var x = {};
    for (var b in u)
      if (typeof u[b] == "function")
        if (b != "getExtension")
          x[b] = v(u, b);
        else {
          var B = v(u, b);
          x[b] = function() {
            return d(B.apply(u, arguments), p, E, g);
          };
        }
      else
        _(x, u, b);
    return x.getError = function() {
      for (var A in T)
        if (T.hasOwnProperty(A) && T[A])
          return T[A] = !1, A;
      return u.NO_ERROR;
    }, x;
  }
  function f(u) {
    var p = u.getParameter(u.MAX_VERTEX_ATTRIBS), E = u.createBuffer();
    u.bindBuffer(u.ARRAY_BUFFER, E);
    for (var g = 0; g < p; ++g)
      u.disableVertexAttribArray(g), u.vertexAttribPointer(g, 4, u.FLOAT, !1, 0, 0), u.vertexAttrib1f(g, 0);
    u.deleteBuffer(E);
    var T = u.getParameter(u.MAX_TEXTURE_IMAGE_UNITS);
    for (g = 0; g < T; ++g)
      u.activeTexture(u.TEXTURE0 + g), u.bindTexture(u.TEXTURE_CUBE_MAP, null), u.bindTexture(u.TEXTURE_2D, null);
    for (u.activeTexture(u.TEXTURE0), u.useProgram(null), u.bindBuffer(u.ARRAY_BUFFER, null), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindRenderbuffer(u.RENDERBUFFER, null), u.disable(u.BLEND), u.disable(u.CULL_FACE), u.disable(u.DEPTH_TEST), u.disable(u.DITHER), u.disable(u.SCISSOR_TEST), u.blendColor(0, 0, 0, 0), u.blendEquation(u.FUNC_ADD), u.blendFunc(u.ONE, u.ZERO), u.clearColor(0, 0, 0, 0), u.clearDepth(1), u.clearStencil(-1), u.colorMask(!0, !0, !0, !0), u.cullFace(u.BACK), u.depthFunc(u.LESS), u.depthMask(!0), u.depthRange(0, 1), u.frontFace(u.CCW), u.hint(u.GENERATE_MIPMAP_HINT, u.DONT_CARE), u.lineWidth(1), u.pixelStorei(u.PACK_ALIGNMENT, 4), u.pixelStorei(u.UNPACK_ALIGNMENT, 4), u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, !1), u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), u.UNPACK_COLORSPACE_CONVERSION_WEBGL && u.pixelStorei(u.UNPACK_COLORSPACE_CONVERSION_WEBGL, u.BROWSER_DEFAULT_WEBGL), u.polygonOffset(0, 0), u.sampleCoverage(1, !1), u.scissor(0, 0, u.canvas.width, u.canvas.height), u.stencilFunc(u.ALWAYS, 0, 4294967295), u.stencilMask(4294967295), u.stencilOp(u.KEEP, u.KEEP, u.KEEP), u.viewport(0, 0, u.canvas.width, u.canvas.height), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT | u.STENCIL_BUFFER_BIT); u.getError(); )
      ;
  }
  function m(u) {
    var p, E, g = [], T = [], v = {}, x = 1, b = !1, B = [], A = 0, M = 0, ie = !1, ae = 0, oe = {};
    function be(w) {
      return typeof w == "function" ? w : function(O) {
        w.handleEvent(O);
      };
    }
    u.getContext = (E = u.getContext, function() {
      var w = E.apply(u, arguments);
      if (w instanceof WebGLRenderingContext) {
        if (w != p) {
          if (p)
            throw "got different context";
          v = bs(p = w);
        }
        return v;
      }
      return w;
    });
    var ds = function(w) {
      g.push(be(w));
    }, _s = function(w) {
      T.push(be(w));
    };
    function fs(w) {
      var O = w.addEventListener;
      w.addEventListener = function(q, Y, ue) {
        switch (q) {
          case "webglcontextlost":
            ds(Y);
            break;
          case "webglcontextrestored":
            _s(Y);
            break;
          default:
            O.apply(w, arguments);
        }
      };
    }
    function ms() {
      for (var w = Object.keys(oe), O = 0; O < w.length; ++O)
        delete oe[w];
    }
    function ve() {
      ++M, b || A == M && u.loseContext();
    }
    function ps(w, O) {
      var q = w[O];
      return function() {
        if (ve(), !b)
          return q.apply(w, arguments);
      };
    }
    function gs() {
      for (var w = 0; w < B.length; ++w) {
        var O = B[w];
        O instanceof WebGLBuffer ? p.deleteBuffer(O) : O instanceof WebGLFramebuffer ? p.deleteFramebuffer(O) : O instanceof WebGLProgram ? p.deleteProgram(O) : O instanceof WebGLRenderbuffer ? p.deleteRenderbuffer(O) : O instanceof WebGLShader ? p.deleteShader(O) : O instanceof WebGLTexture && p.deleteTexture(O);
      }
    }
    function kt(w) {
      return { statusMessage: w, preventDefault: function() {
        ie = !0;
      } };
    }
    return fs(u), u.loseContext = function() {
      if (!b) {
        for (b = !0, A = 0, ++x; p.getError(); )
          ;
        ms(), oe[p.CONTEXT_LOST_WEBGL] = !0;
        var w = kt("context lost"), O = g.slice();
        setTimeout(function() {
          for (var q = 0; q < O.length; ++q)
            O[q](w);
          ae >= 0 && setTimeout(function() {
            u.restoreContext();
          }, ae);
        }, 0);
      }
    }, u.restoreContext = function() {
      b && T.length && setTimeout(function() {
        if (!ie)
          throw "can not restore. webglcontestlost listener did not call event.preventDefault";
        gs(), f(p), b = !1, M = 0, ie = !1;
        for (var w = T.slice(), O = kt("context restored"), q = 0; q < w.length; ++q)
          w[q](O);
      }, 0);
    }, u.loseContextInNCalls = function(w) {
      if (b)
        throw "You can not ask a lost contet to be lost";
      A = M + w;
    }, u.getNumCalls = function() {
      return M;
    }, u.setRestoreTimeout = function(w) {
      ae = w;
    }, u;
    function bs(w) {
      for (var O in w)
        typeof w[O] == "function" ? v[O] = ps(w, O) : _(v, w, O);
      v.getError = function() {
        if (ve(), !b)
          for (; k = p.getError(); )
            oe[k] = !0;
        for (var k in oe)
          if (oe[k])
            return delete oe[k], k;
        return v.NO_ERROR;
      };
      for (var q = ["createBuffer", "createFramebuffer", "createProgram", "createRenderbuffer", "createShader", "createTexture"], Y = 0; Y < q.length; ++Y) {
        var ue = q[Y];
        v[ue] = /* @__PURE__ */ function(k) {
          return function() {
            if (ve(), b)
              return null;
            var Tt = k.apply(w, arguments);
            return Tt.__webglDebugContextLostId__ = x, B.push(Tt), Tt;
          };
        }(w[ue]);
      }
      var Gt = ["getActiveAttrib", "getActiveUniform", "getBufferParameter", "getContextAttributes", "getAttachedShaders", "getFramebufferAttachmentParameter", "getParameter", "getProgramParameter", "getProgramInfoLog", "getRenderbufferParameter", "getShaderParameter", "getShaderInfoLog", "getShaderSource", "getTexParameter", "getUniform", "getUniformLocation", "getVertexAttrib"];
      for (Y = 0; Y < Gt.length; ++Y)
        ue = Gt[Y], v[ue] = /* @__PURE__ */ function(k) {
          return function() {
            return ve(), b ? null : k.apply(w, arguments);
          };
        }(v[ue]);
      var Vt = ["isBuffer", "isEnabled", "isFramebuffer", "isProgram", "isRenderbuffer", "isShader", "isTexture"];
      for (Y = 0; Y < Vt.length; ++Y)
        ue = Vt[Y], v[ue] = /* @__PURE__ */ function(k) {
          return function() {
            return ve(), !b && k.apply(w, arguments);
          };
        }(v[ue]);
      return v.checkFramebufferStatus = /* @__PURE__ */ function(k) {
        return function() {
          return ve(), b ? v.FRAMEBUFFER_UNSUPPORTED : k.apply(w, arguments);
        };
      }(v.checkFramebufferStatus), v.getAttribLocation = /* @__PURE__ */ function(k) {
        return function() {
          return ve(), b ? -1 : k.apply(w, arguments);
        };
      }(v.getAttribLocation), v.getVertexAttribOffset = /* @__PURE__ */ function(k) {
        return function() {
          return ve(), b ? 0 : k.apply(w, arguments);
        };
      }(v.getVertexAttribOffset), v.isContextLost = function() {
        return b;
      }, v;
    }
  }
  return { init: n, mightBeEnum: o, glEnumToString: l, glFunctionArgToString: h, glFunctionArgsToString: c, makeDebugContext: d, makeLostContextSimulatingCanvas: m, resetToInitialState: f };
}, (Ui = Ii()) !== void 0 && (Di.exports = Ui);
const ga = it.getLogger("geoscene.views.WebGLDriverTest");
function ba(r) {
  const e = new $(r, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE }, { target: I.TEXTURE_2D, wrapMode: U.CLAMP_TO_EDGE, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.NEAREST, width: 1, height: 1 }), t = `
precision highp float;
attribute vec2 a_pos;
uniform highp sampler2D u_texture;
varying vec4 v_color;

float getBit(in float bitset, in int bitIndex) {
  float offset = pow(2.0, float(bitIndex));
  return mod(floor(bitset / offset), 2.0);
}

void main() {
  vec4 value = texture2D(u_texture, vec2(0.0));
  float bit = getBit(value.x * 255.0, 1);

  v_color = bit * vec4(1.0);
  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
}
`, i = `
precision highp float;
varying vec4 v_color;

void main() {
  gl_FragColor = v_color;
}
`, s = new Uint8Array(4), n = pe.createVertex(r, ge.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), a = new Re(r, /* @__PURE__ */ new Map([["a_position", 0]]), { geometry: [new Le("a_position", 2, Oe.SHORT, 0, 4)] }, { geometry: n }), o = r.programCache.acquire(t, i, /* @__PURE__ */ new Map([["a_pos", 0]]));
  r.useProgram(o);
  const l = new H(r, { target: I.TEXTURE_2D, wrapMode: U.CLAMP_TO_EDGE, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.NEAREST, width: 1, height: 1 }, new Uint8Array([2, 255, 0, 0]));
  o.setUniform1i("u_texture", 0), r.bindTexture(l, 0);
  const h = r.getBoundFramebufferObject();
  r.bindFramebuffer(e), r.useProgram(o);
  const { x: c, y: _, width: d, height: f } = r.getViewport();
  r.setViewport(0, 0, 1, 1), r.bindVAO(a), r.drawArrays(X.TRIANGLE_STRIP, 0, 4), r.setViewport(c, _, d, f), e.readPixels(0, 0, 1, 1, y.RGBA, C.UNSIGNED_BYTE, s), o.dispose(), a.dispose(!1), n.dispose(), e.dispose();
  const m = s[0] !== 255 || s[1] !== 255 || s[2] !== 255 || s[3] !== 255;
  return m && ga.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${s[0]}.${s[1]}.${s[2]}.${s[3]}]`), r.bindFramebuffer(h), m;
}
async function va(r) {
  const e = new Image();
  if (e.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A", e.width = 5, e.height = 5, await e.decode(), !r.gl)
    return !0;
  const t = new $(r, { colorTarget: G.TEXTURE, depthStencilTarget: V.NONE }, { target: I.TEXTURE_2D, wrapMode: U.CLAMP_TO_EDGE, pixelFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, samplingMode: S.NEAREST, width: 1, height: 1 }), i = pe.createVertex(r, ge.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), s = new Re(r, /* @__PURE__ */ new Map([["a_pos", 0]]), Yi, { geometry: i }), n = `
  precision highp float;

  attribute vec2 a_pos;
  varying vec2 v_uv;

  void main() {
    v_uv = a_pos;
    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
  }
  `, a = `
  precision highp float;

  varying vec2 v_uv;
  uniform sampler2D u_texture;

  void main() {
    gl_FragColor = texture2D(u_texture, v_uv);
  }
  `, o = r.programCache.acquire(n, a, /* @__PURE__ */ new Map([["a_pos", 0]]));
  r.useProgram(o);
  const l = new H(r, { dataType: C.UNSIGNED_BYTE, pixelFormat: y.RGBA, preMultiplyAlpha: !1, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR }, e);
  r.bindTexture(l, 0), o.setUniform1i("u_texture", 0);
  const h = r.getBoundFramebufferObject(), { x: c, y: _, width: d, height: f } = r.getViewport();
  r.bindFramebuffer(t), r.setViewport(0, 0, 1, 1), r.setClearColor(0, 0, 0, 0), r.setBlendingEnabled(!1), r.clearSafe(qe.COLOR_BUFFER_BIT), r.bindVAO(s), r.drawArrays(X.TRIANGLE_STRIP, 0, 4);
  const m = new Uint8Array(4);
  return t.readPixels(0, 0, 1, 1, y.RGBA, C.UNSIGNED_BYTE, m), o.dispose(), s.dispose(!1), i.dispose(), t.dispose(), l.dispose(), r.setViewport(c, _, d, f), r.bindFramebuffer(h), e.src = "", m[0] === 255;
}
let Ea = class {
  constructor(e) {
    this.context = e, this._floatBufferBlendWorking = pa(e), va(e).then((t) => this._svgAlwaysPremultipliesAlpha = !t);
  }
  get floatBufferBlendWorking() {
    if (N(this._floatBufferBlendWorking))
      throw new Error("floatBufferBlendWorking test not yet available");
    return this._floatBufferBlendWorking;
  }
  get svgAlwaysPremultipliesAlpha() {
    if (N(this._svgAlwaysPremultipliesAlpha))
      throw new Error("svgAlwaysPremultipliesAlpha test not yet available");
    return this._svgAlwaysPremultipliesAlpha;
  }
  get doublePrecisionRequiresObfuscation() {
    if (N(this._doublePrecisionRequiresObfuscation)) {
      const e = Pi(this.context, !1), t = Pi(this.context, !0);
      this._doublePrecisionRequiresObfuscation = e !== 0 && (t === 0 || e / t > 5);
    }
    return this._doublePrecisionRequiresObfuscation;
  }
  get ignoresSamplerPrecision() {
    return N(this._ignoresSamplerPrecision) && (this._ignoresSamplerPrecision = ba(this.context)), this._ignoresSamplerPrecision;
  }
};
function Ta(r, e) {
  if (e.disjointTimerQuery)
    return null;
  if (W(r))
    return { drawBuffers: r.drawBuffers.bind(r), MAX_DRAW_BUFFERS: r.MAX_DRAW_BUFFERS, MAX_COLOR_ATTACHMENTS: r.MAX_COLOR_ATTACHMENTS };
  if (e.drawBuffers)
    return null;
  const t = r.getExtension("WEBGL_draw_buffers");
  return t ? { drawBuffers: t.drawBuffersWEBGL.bind(t), MAX_DRAW_BUFFERS: t.MAX_DRAW_BUFFERS_WEBGL, MAX_COLOR_ATTACHMENTS: t.MAX_COLOR_ATTACHMENTS_WEBGL } : null;
}
function xa(r) {
  if (W(r))
    return { drawArraysInstanced: r.drawArraysInstanced.bind(r), drawElementsInstanced: r.drawElementsInstanced.bind(r), vertexAttribDivisor: r.vertexAttribDivisor.bind(r) };
  const e = r.getExtension("ANGLE_instanced_arrays");
  return e ? { drawArraysInstanced: e.drawArraysInstancedANGLE.bind(e), drawElementsInstanced: e.drawElementsInstancedANGLE.bind(e), vertexAttribDivisor: e.vertexAttribDivisorANGLE.bind(e) } : null;
}
function wa(r, e) {
  if (e.compressedTextureETC)
    return null;
  const t = r.getExtension("WEBGL_compressed_texture_etc");
  return t ? { COMPRESSED_R11_EAC: t.COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC: t.COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC: t.COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC: t.COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2: t.COMPRESSED_RGB8_ETC2, COMPRESSED_SRGB8_ETC2: t.COMPRESSED_SRGB8_ETC2, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGBA8_ETC2_EAC: t.COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC } : null;
}
function ya(r, e) {
  if (e.compressedTextureS3TC)
    return null;
  const t = r.getExtension("WEBGL_compressed_texture_s3tc");
  return t ? { COMPRESSED_RGB_S3TC_DXT1: t.COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1: t.COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3: t.COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5: t.COMPRESSED_RGBA_S3TC_DXT5_EXT } : null;
}
function Fa(r, e) {
  if (W(r))
    return { MIN: r.MIN, MAX: r.MAX };
  if (e.blendMinMax)
    return null;
  {
    const t = r.getExtension("EXT_blend_minmax");
    return t ? { MIN: t.MIN_EXT, MAX: t.MAX_EXT } : null;
  }
}
function Ra(r, e) {
  if (e.textureFilterAnisotropic)
    return null;
  const t = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  return t ? { MAX_TEXTURE_MAX_ANISOTROPY: t.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY: t.TEXTURE_MAX_ANISOTROPY_EXT } : null;
}
function Ba(r, e) {
  if (W(r))
    return { textureFloat: !0, textureFloatLinear: !e.textureFloatLinear && !!r.getExtension("OES_texture_float_linear"), textureHalfFloat: !0, textureHalfFloatLinear: !e.textureHalfFloatLinear && !!r.getExtension("OES_texture_half_float_linear"), HALF_FLOAT: r.HALF_FLOAT, R16F: r.R16F, RG16F: r.RG16F, RGBA16F: r.RGBA16F, R32F: r.R32F, RG32F: r.RG32F, RGBA32F: r.RGBA32F, R11F_G11F_B10F: r.R11F_G11F_B10F, RGB16F: r.RGB16F };
  if (r instanceof WebGLRenderingContext) {
    const t = !e.textureHalfFloat && r.getExtension("OES_texture_half_float");
    return { textureFloat: !e.textureFloat && !!r.getExtension("OES_texture_float"), textureFloatLinear: !e.textureFloatLinear && !!r.getExtension("OES_texture_float_linear"), textureHalfFloat: !!t, textureHalfFloatLinear: !e.textureHalfFloatLinear && !!r.getExtension("OES_texture_half_float_linear"), HALF_FLOAT: t ? t.HALF_FLOAT_OES : void 0 };
  }
  return null;
}
function Aa(r, e) {
  if (W(r)) {
    const t = !e.colorBufferFloat && r.getExtension("EXT_color_buffer_half_float"), i = !e.colorBufferFloat && r.getExtension("EXT_color_buffer_float"), s = !e.floatBlend && !e.colorBufferFloat && r.getExtension("EXT_float_blend");
    return t || i || s ? { textureFloat: !!i, textureHalfFloat: !!t, floatBlend: !!s, R16F: r.R16F, RG16F: r.RG16F, RGBA16F: r.RGBA16F, R32F: r.R32F, RG32F: r.RG32F, RGBA32F: r.RGBA32F, R11F_G11F_B10F: r.R11F_G11F_B10F, RGB16F: r.RGB16F } : null;
  }
  if (r instanceof WebGLRenderingContext) {
    const t = !e.colorBufferFloat && r.getExtension("EXT_color_buffer_half_float"), i = !e.colorBufferFloat && r.getExtension("WEBGL_color_buffer_float"), s = !e.floatBlend && !e.colorBufferFloat && r.getExtension("EXT_float_blend");
    return t || i || s ? { textureFloat: !!i, textureHalfFloat: !!t, floatBlend: !!s, RGBA16F: t ? t.RGBA16F_EXT : void 0, RGB16F: t ? t.RGB16F_EXT : void 0, RGBA32F: i ? i.RGBA32F_EXT : void 0 } : null;
  }
  return null;
}
function ut(r, e, t, i, s) {
  if (i && W(r))
    return !0;
  if (e[t])
    return !1;
  for (const n of s)
    if (r.getExtension(n))
      return !0;
  return !1;
}
function Sa(r, e) {
  if (!W(r) || e.textureNorm16)
    return null;
  const t = r.getExtension("EXT_texture_norm16");
  return t ? { R16: t.R16_EXT, RG16: t.RG16_EXT, RGB16: t.RGB16_EXT, RGBA16: t.RGBA16_EXT, R16_SNORM: t.R16_SNORM_EXT, RG16_SNORM: t.RG16_SNORM_EXT, RGB16_SNORM: t.RGB16_SNORM_EXT, RGBA16_SNORM: t.RGBA16_SNORM_EXT } : null;
}
function Ca(r, e) {
  const t = e.loseContext && r.getExtension("WEBGL_lose_context");
  return t ? { loseRenderingContext: () => t.loseContext() } : null;
}
function Oa(r, e) {
  if (W(r))
    return { createVertexArray: r.createVertexArray.bind(r), deleteVertexArray: r.deleteVertexArray.bind(r), bindVertexArray: r.bindVertexArray.bind(r) };
  if (e.vao)
    return null;
  const t = r.getExtension("OES_vertex_array_object") || r.getExtension("MOZ_OES_vertex_array_object") || r.getExtension("WEBKIT_OES_vertex_array_object");
  return t ? { createVertexArray: t.createVertexArrayOES.bind(t), deleteVertexArray: t.deleteVertexArrayOES.bind(t), bindVertexArray: t.bindVertexArrayOES.bind(t) } : null;
}
class Ma {
  constructor(e, t) {
    this.gl = e, this._depthTexture = null, this._standardDerivatives = null, this._shaderTextureLOD = null, this._fragDepth = null, this._disabledExtensions = t.disabledExtensions || {}, this._debugWebGLExtensions = t.debugWebGLExtensions || {};
  }
  get drawBuffers() {
    return this._drawBuffers || (this._drawBuffers = Ta(this.gl, this._disabledExtensions)), this._drawBuffers;
  }
  get instancing() {
    return this._instancing || (this._instancing = xa(this.gl)), this._instancing;
  }
  get vao() {
    return this._vertexArrayObject || (this._vertexArrayObject = Oa(this.gl, this._disabledExtensions)), this._vertexArrayObject;
  }
  get compressedTextureETC() {
    return this._compressedTextureETC || (this._compressedTextureETC = wa(this.gl, this._disabledExtensions)), this._compressedTextureETC;
  }
  get compressedTextureS3TC() {
    return this._compressedTextureS3TC || (this._compressedTextureS3TC = ya(this.gl, this._disabledExtensions)), this._compressedTextureS3TC;
  }
  get textureFilterAnisotropic() {
    return this._textureFilterAnisotropic || (this._textureFilterAnisotropic = Ra(this.gl, this._disabledExtensions)), this._textureFilterAnisotropic;
  }
  get disjointTimerQuery() {
    return this._disjointTimerQuery || (this._disjointTimerQuery = os(this.gl, this._disabledExtensions)), this._disjointTimerQuery;
  }
  get textureFloat() {
    return this._textureFloat || (this._textureFloat = Ba(this.gl, this._disabledExtensions)), this._textureFloat;
  }
  get colorBufferFloat() {
    return this._colorBufferFloat || (this._colorBufferFloat = Aa(this.gl, this._disabledExtensions)), this._colorBufferFloat;
  }
  get blendMinMax() {
    return this._minMaxBlending || (this._minMaxBlending = Fa(this.gl, this._disabledExtensions)), this._minMaxBlending;
  }
  get depthTexture() {
    return this._depthTexture === null && (this._depthTexture = ut(this.gl, this._disabledExtensions, "depthTexture", !0, ["WEBGL_depth_texture", "MOZ_WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture"])), this._depthTexture;
  }
  get standardDerivatives() {
    return this._standardDerivatives === null && (this._standardDerivatives = ut(this.gl, this._disabledExtensions, "standardDerivatives", !0, ["OES_standard_derivatives"])), this._standardDerivatives;
  }
  get shaderTextureLOD() {
    return this._shaderTextureLOD === null && (this._shaderTextureLOD = ut(this.gl, this._disabledExtensions, "shaderTextureLOD", !0, ["EXT_shader_texture_lod"])), this._shaderTextureLOD;
  }
  get fragDepth() {
    return this._fragDepth === null && (this._fragDepth = ut(this.gl, this._disabledExtensions, "fragDepth", !0, ["EXT_frag_depth"])), this._fragDepth;
  }
  get loseContext() {
    return this._loseContext || (this._loseContext = Ca(this.gl, this._debugWebGLExtensions)), this._loseContext;
  }
  get textureNorm16() {
    return this._textureNorm16 || (this._textureNorm16 = Sa(this.gl, this._disabledExtensions)), this._textureNorm16;
  }
  enable(e) {
    return this[e];
  }
}
class Pa {
  constructor(e, t) {
    this.gl = e, this.instanceCounter = new ma(), this.programCache = new Tr(this), this._state = new Mi(), this._numOfDrawCalls = 0, this._numOfTriangles = 0, this.type = W(e) ? mt.WEBGL2 : mt.WEBGL1, this._loadExtensions(), this.configure(t);
  }
  configure(e) {
    this._capabilities = new Ma(this.gl, e), this._parameters = this._loadParameters(e);
    const t = this.gl.getParameter(this.gl.VIEWPORT);
    this._state = new Mi(), this._state.viewport = { x: t[0], y: t[1], width: t[2], height: t[3] }, this._stateTracker = new Nr({ setBlending: (i) => {
      if (i) {
        this.setBlendingEnabled(!0), this.setBlendEquationSeparate(i.opRgb, i.opAlpha), this.setBlendFunctionSeparate(i.srcRgb, i.dstRgb, i.srcAlpha, i.dstAlpha);
        const s = i.color;
        this.setBlendColor(s.r, s.g, s.b, s.a);
      } else
        this.setBlendingEnabled(!1);
    }, setCulling: (i) => {
      i ? (this.setFaceCullingEnabled(!0), this.setCullFace(i.face), this.setFrontFace(i.mode)) : this.setFaceCullingEnabled(!1);
    }, setPolygonOffset: (i) => {
      i ? (this.setPolygonOffsetFillEnabled(!0), this.setPolygonOffset(i.factor, i.units)) : this.setPolygonOffsetFillEnabled(!1);
    }, setDepthTest: (i) => {
      i ? (this.setDepthTestEnabled(!0), this.setDepthFunction(i.func)) : this.setDepthTestEnabled(!1);
    }, setStencilTest: (i) => {
      if (i) {
        this.setStencilTestEnabled(!0);
        const s = i.function;
        this.setStencilFunction(s.func, s.ref, s.mask);
        const n = i.operation;
        this.setStencilOp(n.fail, n.zFail, n.zPass);
      } else
        this.setStencilTestEnabled(!1);
    }, setDepthWrite: (i) => {
      i ? (this.setDepthWriteEnabled(!0), this.setDepthRange(i.zNear, i.zFar)) : this.setDepthWriteEnabled(!1);
    }, setColorWrite: (i) => {
      i ? this.setColorMask(i.r, i.g, i.b, i.a) : this.setColorMask(!1, !1, !1, !1);
    }, setStencilWrite: (i) => {
      i ? this.setStencilWriteMask(i.mask) : this.setStencilWriteMask(0);
    } }), this.enforceState(), this._driverTest = new Ea(this);
  }
  get driverTest() {
    return this._driverTest;
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    return this._parameters;
  }
  dispose() {
    this.programCache.dispose(), this.bindVAO(null), this.unbindBuffer(F.ARRAY_BUFFER), this.unbindBuffer(F.ELEMENT_ARRAY_BUFFER), W(this.gl) && (this.unbindBuffer(F.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(F.PIXEL_PACK_BUFFER), this.unbindBuffer(F.PIXEL_UNPACK_BUFFER), this.unbindBuffer(F.COPY_READ_BUFFER), this.unbindBuffer(F.COPY_WRITE_BUFFER)), this._state.textureUnitMap.length = 0, Te() && this.instanceCounter.printResourceCount();
  }
  setPipelineState(e) {
    this._stateTracker.setPipeline(e);
  }
  setBlendingEnabled(e) {
    this._state.blend !== e && (e === !0 ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._state.blend = e, this._stateTracker.invalidateBlending());
  }
  externalProgramUpdate() {
    var e;
    (e = this._state.program) == null || e.stop(), this._state.program = null;
  }
  externalTextureUnitUpdate(e, t) {
    for (let i = 0; i < e.length; ++i)
      this._state.textureUnitMap[e[i]] = null;
    t >= 0 && (this._state.activeTexture = t);
  }
  externalVertexArrayObjectUpdate() {
    const e = this.capabilities.vao;
    e && (e.bindVertexArray(null), this._state.vertexArrayObject = null), this._state.vertexBuffer = null, this._state.indexBuffer = null;
  }
  externalVertexBufferUpdate() {
    this._state.vertexBuffer = null;
  }
  externalIndexBufferUpdate() {
    this._state.indexBuffer = null;
  }
  setBlendColor(e, t, i, s) {
    e === this._state.blendColor.r && t === this._state.blendColor.g && i === this._state.blendColor.b && s === this._state.blendColor.a || (this.gl.blendColor(e, t, i, s), this._state.blendColor.r = e, this._state.blendColor.g = t, this._state.blendColor.b = i, this._state.blendColor.a = s, this._stateTracker.invalidateBlending());
  }
  setBlendFunction(e, t) {
    e === this._state.blendFunction.srcRGB && t === this._state.blendFunction.dstRGB || (this.gl.blendFunc(e, t), this._state.blendFunction.srcRGB = e, this._state.blendFunction.srcAlpha = e, this._state.blendFunction.dstRGB = t, this._state.blendFunction.dstAlpha = t, this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(e, t, i, s) {
    this._state.blendFunction.srcRGB === e && this._state.blendFunction.srcAlpha === i && this._state.blendFunction.dstRGB === t && this._state.blendFunction.dstAlpha === s || (this.gl.blendFuncSeparate(e, t, i, s), this._state.blendFunction.srcRGB = e, this._state.blendFunction.srcAlpha = i, this._state.blendFunction.dstRGB = t, this._state.blendFunction.dstAlpha = s, this._stateTracker.invalidateBlending());
  }
  setBlendEquation(e) {
    this._state.blendEquation.mode !== e && (this.gl.blendEquation(e), this._state.blendEquation.mode = e, this._state.blendEquation.modeAlpha = e, this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(e, t) {
    this._state.blendEquation.mode === e && this._state.blendEquation.modeAlpha === t || (this.gl.blendEquationSeparate(e, t), this._state.blendEquation.mode = e, this._state.blendEquation.modeAlpha = t, this._stateTracker.invalidateBlending());
  }
  setColorMask(e, t, i, s) {
    this._state.colorMask.r === e && this._state.colorMask.g === t && this._state.colorMask.b === i && this._state.colorMask.a === s || (this.gl.colorMask(e, t, i, s), this._state.colorMask.r = e, this._state.colorMask.g = t, this._state.colorMask.b = i, this._state.colorMask.a = s, this._stateTracker.invalidateColorWrite());
  }
  setClearColor(e, t, i, s) {
    this._state.clearColor.r === e && this._state.clearColor.g === t && this._state.clearColor.b === i && this._state.clearColor.a === s || (this.gl.clearColor(e, t, i, s), this._state.clearColor.r = e, this._state.clearColor.g = t, this._state.clearColor.b = i, this._state.clearColor.a = s);
  }
  setFaceCullingEnabled(e) {
    this._state.faceCulling !== e && (e === !0 ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._state.faceCulling = e, this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(e) {
    this._state.polygonOffsetFill !== e && (e === !0 ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._state.polygonOffsetFill = e, this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(e, t) {
    this._state.polygonOffset[0] === e && this._state.polygonOffset[1] === t || (this._state.polygonOffset[0] = e, this._state.polygonOffset[1] = t, this.gl.polygonOffset(e, t), this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(e) {
    this._state.cullFace !== e && (this.gl.cullFace(e), this._state.cullFace = e, this._stateTracker.invalidateCulling());
  }
  setFrontFace(e) {
    this._state.frontFace !== e && (this.gl.frontFace(e), this._state.frontFace = e, this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(e) {
    this._state.scissorTest !== e && (e === !0 ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._state.scissorTest = e);
  }
  setScissorRect(e, t, i, s) {
    this._state.scissorRect.x === e && this._state.scissorRect.y === t && this._state.scissorRect.width === i && this._state.scissorRect.height === s || (this.gl.scissor(e, t, i, s), this._state.scissorRect.x = e, this._state.scissorRect.y = t, this._state.scissorRect.width = i, this._state.scissorRect.height = s);
  }
  setDepthTestEnabled(e) {
    this._state.depthTest !== e && (e === !0 ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._state.depthTest = e, this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(e) {
    this._state.clearDepth !== e && (this.gl.clearDepth(e), this._state.clearDepth = e);
  }
  setDepthFunction(e) {
    this._state.depthFunction !== e && (this.gl.depthFunc(e), this._state.depthFunction = e, this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(e) {
    this._state.depthWrite !== e && (this.gl.depthMask(e), this._state.depthWrite = e, this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(e, t) {
    this._state.depthRange.zNear === e && this._state.depthRange.zFar === t || (this.gl.depthRange(e, t), this._state.depthRange.zNear = e, this._state.depthRange.zFar = t, this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(e) {
    this._state.stencilTest !== e && (e === !0 ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._state.stencilTest = e, this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(e) {
    e !== this._state.clearStencil && (this.gl.clearStencil(e), this._state.clearStencil = e);
  }
  setStencilFunction(e, t, i) {
    this._state.stencilFunction.func === e && this._state.stencilFunction.ref === t && this._state.stencilFunction.mask === i || (this.gl.stencilFunc(e, t, i), this._state.stencilFunction.face = Ce.FRONT_AND_BACK, this._state.stencilFunction.func = e, this._state.stencilFunction.ref = t, this._state.stencilFunction.mask = i, this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(e, t, i, s) {
    this._state.stencilFunction.face === e && this._state.stencilFunction.func === t && this._state.stencilFunction.ref === i && this._state.stencilFunction.mask === s || (this.gl.stencilFuncSeparate(e, t, i, s), this._state.stencilFunction.face = e, this._state.stencilFunction.func = t, this._state.stencilFunction.ref = i, this._state.stencilFunction.mask = s, this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(e) {
    this._state.stencilWriteMask !== e && (this.gl.stencilMask(e), this._state.stencilWriteMask = e, this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(e, t, i) {
    this._state.stencilOperation.face === Ce.FRONT_AND_BACK && this._state.stencilOperation.fail === e && this._state.stencilOperation.zFail === t && this._state.stencilOperation.zPass === i || (this.gl.stencilOp(e, t, i), this._state.stencilOperation.face = Ce.FRONT_AND_BACK, this._state.stencilOperation.fail = e, this._state.stencilOperation.zFail = t, this._state.stencilOperation.zPass = i, this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(e, t, i, s) {
    this._state.stencilOperation.face === e && this._state.stencilOperation.fail === t && this._state.stencilOperation.zFail === i && this._state.stencilOperation.zPass === s || (this.gl.stencilOpSeparate(e, t, i, s), this._state.stencilOperation.face = e, this._state.stencilOperation.fail = t, this._state.stencilOperation.zFail = i, this._state.stencilOperation.zPass = s, this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(e, t = !1) {
    const i = this._state.activeTexture;
    return e >= 0 && (t || e !== this._state.activeTexture) && (this.gl.activeTexture(xt + e), this._state.activeTexture = e), i;
  }
  clear(e) {
    e && this.gl.clear(e);
  }
  clearSafe(e, t = 255) {
    e && (e & qe.COLOR_BUFFER_BIT && this.setColorMask(!0, !0, !0, !0), e & qe.DEPTH_BUFFER_BIT && this.setDepthWriteEnabled(!0), e & qe.STENCIL_BUFFER_BIT && this.setStencilWriteMask(t), this.gl.clear(e));
  }
  drawArrays(e, t, i) {
    if (Te() && (this._numOfDrawCalls++, this._numOfTriangles += Ni(e, i)), this.gl.drawArrays(e, t, i), Te()) {
      const s = Qt(this);
      s && console.error("drawArrays:", s);
    }
  }
  drawElements(e, t, i, s) {
    if (Te() && (this._numOfDrawCalls++, this._numOfTriangles += Ni(e, t)), this.gl.drawElements(e, t, i, s), Te()) {
      const a = Qt(this);
      if (a) {
        var n;
        const o = this.getBoundVAO(), l = o == null ? void 0 : o.indexBuffer, h = { indexBuffer: l, vertexBuffers: o == null ? void 0 : o.vertexBuffers }, c = { mode: e, count: t, type: i, offset: s }, _ = (n = As(l, (m) => m.size)) != null ? n : 0, d = s + t, f = _ < d ? `. Buffer is too small. Attempted to draw index ${d} of ${_}` : "";
        console.error(`drawElements: ${a}${f}`, { args: c, vao: h });
      }
    }
  }
  logIno() {
    Te() && console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`);
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(e, t, i, s) {
    i = Math.max(Math.round(i), 1), s = Math.max(Math.round(s), 1);
    const n = this._state.viewport;
    n.x === e && n.y === t && n.width === i && n.height === s || (n.x = e, n.y = t, n.width = i, n.height = s, this.gl.viewport(e, t, i, s));
  }
  getViewport() {
    return { x: this._state.viewport.x, y: this._state.viewport.y, width: this._state.viewport.width, height: this._state.viewport.height };
  }
  useProgram(e) {
    var t, i;
    this._state.program !== e && ((t = this._state.program) == null || t.stop(), this._state.program = e, this.gl.useProgram((i = e == null ? void 0 : e.glName) != null ? i : null));
  }
  bindTexture(e, t, i = !1) {
    (t >= this.parameters.maxTextureImageUnits || t < 0) && console.error("Input texture unit is out of range of available units!");
    const s = this._state.textureUnitMap[t];
    return N(e) || e.glName == null ? (D(s) && (this.setActiveTexture(t, i), this.gl.bindTexture(s.descriptor.target, null)), this._state.textureUnitMap[t] = null, s) : i || s !== e ? (this.setActiveTexture(t, i), this.gl.bindTexture(e.descriptor.target, e.glName), e.applyChanges(), this._state.textureUnitMap[t] = e, s) : (e.isDirty && (this.setActiveTexture(t, i), e.applyChanges()), s);
  }
  unbindTextureAllUnits(e) {
    for (let t = 0; t < this.parameters.maxTextureImageUnits; t++)
      this._state.textureUnitMap[t] === e && (this.bindTexture(null, t), this._state.textureUnitMap[t] = null);
  }
  bindFramebuffer(e, t = !1) {
    if (t || this._state.readFramebuffer !== e || this._state.drawFramebuffer !== e) {
      if (N(e))
        return this.gl.bindFramebuffer(se.FRAMEBUFFER, null), this._state.readFramebuffer = null, void (this._state.drawFramebuffer = null);
      e.initializeAndBind(se.FRAMEBUFFER), this._state.readFramebuffer = e, this._state.drawFramebuffer = e;
    }
  }
  bindFramebufferSeparate(e, t, i = !1) {
    const s = t === se.READ_FRAMEBUFFER, n = s ? this._state.readFramebuffer : this._state.drawFramebuffer;
    (i || n !== e) && (N(e) ? this.gl.bindFramebuffer(t, null) : e.initializeAndBind(t), s ? this._state.readFramebuffer = Wt(e, null) : this._state.drawFramebuffer = Wt(e, null));
  }
  blitFramebuffer(e, t, i = 0, s = 0, n = e.width, a = e.height, o = 0, l = 0, h = t.width, c = t.height, _ = qe.COLOR_BUFFER_BIT, d = S.NEAREST) {
    this.bindFramebufferSeparate(e, se.READ_FRAMEBUFFER), this.bindFramebufferSeparate(t, se.DRAW_FRAMEBUFFER), this.gl.blitFramebuffer(i, s, n, a, o, l, h, c, _, d);
  }
  bindBuffer(e, t) {
    if (e)
      switch (t != null || (t = e.bufferType), t) {
        case F.ARRAY_BUFFER:
          this._state.vertexBuffer = K(this.gl, e, t, this._state.vertexBuffer);
          break;
        case F.ELEMENT_ARRAY_BUFFER:
          this._state.indexBuffer = K(this.gl, e, t, this._state.indexBuffer);
          break;
        case F.UNIFORM_BUFFER:
          this._state.uniformBuffer = K(this.gl, e, t, this._state.uniformBuffer);
          break;
        case F.PIXEL_PACK_BUFFER:
          this._state.pixelPackBuffer = K(this.gl, e, t, this._state.pixelPackBuffer);
          break;
        case F.PIXEL_UNPACK_BUFFER:
          this._state.pixelUnpackBuffer = K(this.gl, e, t, this._state.pixelUnpackBuffer);
          break;
        case F.COPY_READ_BUFFER:
          this._state.copyReadBuffer = K(this.gl, e, t, this._state.copyReadBuffer);
          break;
        case F.COPY_WRITE_BUFFER:
          this._state.copyWriteBuffer = K(this.gl, e, t, this._state.copyWriteBuffer);
      }
  }
  bindRenderbuffer(e) {
    const t = this.gl;
    e || (t.bindRenderbuffer(t.RENDERBUFFER, null), this._state.renderbuffer = null), this._state.renderbuffer !== e && (t.bindRenderbuffer(t.RENDERBUFFER, e.glName), this._state.renderbuffer = e);
  }
  _getBufferBinding(e, t) {
    if (t >= this.parameters.maxUniformBufferBindings || t < 0)
      return console.error("Uniform buffer binding point is out of range!"), null;
    const i = this._state.uniformBufferBindingPoints;
    let s = i[t];
    return N(s) && (s = { buffer: null, offset: 0, size: 0 }, i[t] = s), s;
  }
  bindBufferBase(e, t, i) {
    const s = this._getBufferBinding(e, t);
    N(s) || s.buffer === i && s.offset === 0 && s.size === 0 || (this.gl.bindBufferBase(e, t, i ? i.glName : null), s.buffer = i, s.offset = 0, s.size = 0);
  }
  bindBufferRange(e, t, i, s, n) {
    const a = this._getBufferBinding(e, t);
    if (!N(a) && !(a.buffer === i && a.offset === s && a.size === n)) {
      if (s % this._parameters.uniformBufferOffsetAlignment != 0)
        return void console.error("Uniform buffer binding offset is not a multiple of the context offset alignment");
      this.gl.bindBufferRange(e, t, i.glName, s, n), a.buffer = i, a.offset = s, a.size = n;
    }
  }
  bindUBO(e, t, i, s) {
    N(t) ? this.bindBufferBase(F.UNIFORM_BUFFER, e, null) : (Te() && (s ?? t.byteLength) > this._parameters.maxUniformBlockSize && console.error("Attempting to bind more data than the maximum uniform block size"), t.initialize(), i !== void 0 && s !== void 0 ? this.bindBufferRange(F.UNIFORM_BUFFER, e, t.buffer, i, s) : this.bindBufferBase(F.UNIFORM_BUFFER, e, t.buffer));
  }
  unbindUBO(e) {
    for (let t = 0, i = this._state.uniformBufferBindingPoints.length; t < i; t++) {
      const s = this._state.uniformBufferBindingPoints[t];
      D(s) && s.buffer === e.buffer && this.bindBufferBase(F.UNIFORM_BUFFER, t, null);
    }
  }
  unbindBuffer(e) {
    switch (e) {
      case F.ARRAY_BUFFER:
        this._state.vertexBuffer = K(this.gl, null, e, this._state.vertexBuffer);
        break;
      case F.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = K(this.gl, null, e, this._state.indexBuffer);
        break;
      case F.UNIFORM_BUFFER:
        this._state.uniformBuffer = K(this.gl, null, e, this._state.uniformBuffer);
        break;
      case F.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = K(this.gl, null, e, this._state.pixelPackBuffer);
        break;
      case F.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = K(this.gl, null, e, this._state.pixelUnpackBuffer);
        break;
      case F.COPY_READ_BUFFER:
        this._state.copyReadBuffer = K(this.gl, null, e, this._state.copyReadBuffer);
        break;
      case F.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = K(this.gl, null, e, this._state.copyWriteBuffer);
    }
  }
  bindVAO(e = null) {
    N(e) ? this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null) : this._state.vertexArrayObject !== e && (e.bind(), this._state.vertexArrayObject = e);
  }
  async clientWaitAsync(e = Cs(10)) {
    const t = {};
    this.instanceCounter.increment(Ke.Sync, t);
    const i = this.gl, s = i.fenceSync(Fr.SYNC_GPU_COMMANDS_COMPLETE, 0);
    let n;
    i.flush();
    do
      await Ss(e), n = i.clientWaitSync(s, 0, 0);
    while (n === Jt.TIMEOUT_EXPIRED);
    if (i.deleteSync(s), this.instanceCounter.decrement(Ke.Sync, t), n === Jt.WAIT_FAILED)
      throw new Error("Client wait failed");
  }
  getBoundFramebufferObject(e = se.FRAMEBUFFER) {
    return e === se.READ_FRAMEBUFFER ? this._state.readFramebuffer : this._state.drawFramebuffer;
  }
  getBoundVAO() {
    return this._state.vertexArrayObject;
  }
  resetState() {
    this.useProgram(null), this.bindVAO(null), this.bindFramebuffer(null, !0), this.unbindBuffer(F.ARRAY_BUFFER), this.unbindBuffer(F.ELEMENT_ARRAY_BUFFER), W(this.gl) && (this.unbindBuffer(F.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(F.PIXEL_PACK_BUFFER), this.unbindBuffer(F.PIXEL_UNPACK_BUFFER), this.unbindBuffer(F.COPY_READ_BUFFER), this.unbindBuffer(F.COPY_WRITE_BUFFER));
    for (let e = 0; e < this.parameters.maxTextureImageUnits; ++e)
      this.bindTexture(null, e);
    this.setBlendingEnabled(!1), this.setBlendFunction(R.ONE, R.ZERO), this.setBlendEquation(It.ADD), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(!1), this.setCullFace(Ce.BACK), this.setFrontFace(ji.CCW), this.setPolygonOffsetFillEnabled(!1), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(!1), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(!1), this.setDepthFunction(Ne.LESS), this.setDepthRange(0, 1), this.setStencilTestEnabled(!1), this.setStencilFunction(Ne.ALWAYS, 0, 0), this.setStencilOp(me.KEEP, me.KEEP, me.KEEP), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(!0, !0, !0, !0), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(!0), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    var e, t;
    const i = this.gl, s = this.capabilities.vao;
    s && s.bindVertexArray(null);
    for (let h = 0; h < this.parameters.maxVertexAttributes; h++)
      i.disableVertexAttribArray(h);
    if (this._state.vertexBuffer ? i.bindBuffer(this._state.vertexBuffer.bufferType, this._state.vertexBuffer.glName) : i.bindBuffer(F.ARRAY_BUFFER, null), this._state.indexBuffer ? i.bindBuffer(this._state.indexBuffer.bufferType, this._state.indexBuffer.glName) : i.bindBuffer(F.ELEMENT_ARRAY_BUFFER, null), W(i)) {
      var n, a;
      this._state.uniformBuffer ? i.bindBuffer(this._state.uniformBuffer.bufferType, this._state.uniformBuffer.glName) : i.bindBuffer(F.UNIFORM_BUFFER, null);
      for (let h = 0; h < this._parameters.maxUniformBufferBindings; h++) {
        const c = this._state.uniformBufferBindingPoints[h];
        if (D(c) && c.buffer !== null) {
          const { buffer: _, offset: d, size: f } = c;
          d === 0 && f === 0 ? i.bindBufferBase(F.UNIFORM_BUFFER, h, _.glName) : i.bindBufferRange(F.UNIFORM_BUFFER, h, _.glName, d, f);
        } else
          i.bindBufferBase(F.UNIFORM_BUFFER, h, null);
      }
      this._state.pixelPackBuffer ? i.bindBuffer(this._state.pixelPackBuffer.bufferType, this._state.pixelPackBuffer.glName) : i.bindBuffer(F.PIXEL_PACK_BUFFER, null), this._state.pixelUnpackBuffer ? i.bindBuffer(this._state.pixelUnpackBuffer.bufferType, this._state.pixelUnpackBuffer.glName) : i.bindBuffer(F.PIXEL_UNPACK_BUFFER, null), this._state.copyReadBuffer ? i.bindBuffer(this._state.copyReadBuffer.bufferType, this._state.copyReadBuffer.glName) : i.bindBuffer(F.COPY_READ_BUFFER, null), this._state.copyWriteBuffer ? i.bindBuffer(this._state.copyWriteBuffer.bufferType, this._state.copyWriteBuffer.glName) : i.bindBuffer(F.COPY_WRITE_BUFFER, null), i.bindFramebuffer(se.READ_FRAMEBUFFER, null), i.readBuffer(i.BACK), this._state.readFramebuffer && (i.bindFramebuffer(se.READ_FRAMEBUFFER, this._state.readFramebuffer.glName), i.readBuffer(Rr.COLOR_ATTACHMENT0)), i.bindFramebuffer(se.DRAW_FRAMEBUFFER, (n = (a = this._state.drawFramebuffer) == null ? void 0 : a.glName) != null ? n : null);
    } else {
      var o, l;
      this._state.readFramebuffer = this._state.drawFramebuffer, i.bindFramebuffer(se.FRAMEBUFFER, (o = (l = this._state.drawFramebuffer) == null ? void 0 : l.glName) != null ? o : null);
    }
    if (s && this._state.vertexArrayObject) {
      const h = this._state.vertexArrayObject;
      this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null), this.bindVAO(h);
    }
    i.useProgram((e = (t = this._state.program) == null ? void 0 : t.glName) != null ? e : null), i.blendColor(this._state.blendColor.r, this._state.blendColor.g, this._state.blendColor.b, this._state.blendColor.a), i.bindRenderbuffer(i.RENDERBUFFER, this._state.renderbuffer ? this._state.renderbuffer.glName : null), this._state.blend === !0 ? i.enable(this.gl.BLEND) : i.disable(this.gl.BLEND), i.blendEquationSeparate(this._state.blendEquation.mode, this._state.blendEquation.modeAlpha), i.blendFuncSeparate(this._state.blendFunction.srcRGB, this._state.blendFunction.dstRGB, this._state.blendFunction.srcAlpha, this._state.blendFunction.dstAlpha), i.clearColor(this._state.clearColor.r, this._state.clearColor.g, this._state.clearColor.b, this._state.clearColor.a), i.clearDepth(this._state.clearDepth), i.clearStencil(this._state.clearStencil), i.colorMask(this._state.colorMask.r, this._state.colorMask.g, this._state.colorMask.b, this._state.colorMask.a), i.cullFace(this._state.cullFace), i.depthFunc(this._state.depthFunction), i.depthRange(this._state.depthRange.zNear, this._state.depthRange.zFar), this._state.depthTest === !0 ? i.enable(i.DEPTH_TEST) : i.disable(i.DEPTH_TEST), i.depthMask(this._state.depthWrite), i.frontFace(this._state.frontFace), i.lineWidth(1), this._state.faceCulling === !0 ? i.enable(i.CULL_FACE) : i.disable(i.CULL_FACE), i.polygonOffset(this._state.polygonOffset[0], this._state.polygonOffset[1]), this._state.polygonOffsetFill === !0 ? i.enable(i.POLYGON_OFFSET_FILL) : i.disable(i.POLYGON_OFFSET_FILL), i.scissor(this._state.scissorRect.x, this._state.scissorRect.y, this._state.scissorRect.width, this._state.scissorRect.height), this._state.scissorTest === !0 ? i.enable(i.SCISSOR_TEST) : i.disable(i.SCISSOR_TEST), i.stencilFunc(this._state.stencilFunction.func, this._state.stencilFunction.ref, this._state.stencilFunction.mask), i.stencilOpSeparate(this._state.stencilOperation.face, this._state.stencilOperation.fail, this._state.stencilOperation.zFail, this._state.stencilOperation.zPass), this._state.stencilTest === !0 ? i.enable(i.STENCIL_TEST) : i.disable(i.STENCIL_TEST), i.stencilMask(this._state.stencilWriteMask);
    for (let h = 0; h < this.parameters.maxTextureImageUnits; h++) {
      i.activeTexture(xt + h), i.bindTexture(I.TEXTURE_2D, null), i.bindTexture(I.TEXTURE_CUBE_MAP, null), W(i) && (i.bindTexture(I.TEXTURE_3D, null), i.bindTexture(I.TEXTURE_2D_ARRAY, null));
      const c = this._state.textureUnitMap[h];
      D(c) && i.bindTexture(c.descriptor.target, c.glName);
    }
    i.activeTexture(xt + this._state.activeTexture), i.viewport(this._state.viewport.x, this._state.viewport.y, this._state.viewport.width, this._state.viewport.height), Te() && (this._numOfDrawCalls = 0, this._numOfTriangles = 0);
  }
  _loadExtensions() {
    this.type === mt.WEBGL1 && this.gl.getExtension("OES_element_index_uint"), this.gl.getExtension("KHR_parallel_shader_compile");
  }
  _loadParameters(e) {
    var t;
    const i = this.capabilities.textureFilterAnisotropic, s = (t = e.maxAnisotropy) != null ? t : 1 / 0, n = W(this.gl), a = this.gl, o = { versionString: this.gl.getParameter(this.gl.VERSION), maxVertexTextureImageUnits: this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS), maxVertexAttributes: this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS), maxMaxAnisotropy: i ? Math.min(this.gl.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY), s) : 1, maxTextureImageUnits: this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS), maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), maxUniformBufferBindings: n ? a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS) : 0, maxVertexUniformBlocks: n ? a.getParameter(a.MAX_VERTEX_UNIFORM_BLOCKS) : 0, maxFragmentUniformBlocks: n ? a.getParameter(a.MAX_FRAGMENT_UNIFORM_BLOCKS) : 0, maxUniformBlockSize: n ? a.getParameter(a.MAX_UNIFORM_BLOCK_SIZE) : 0, uniformBufferOffsetAlignment: n ? a.getParameter(a.UNIFORM_BUFFER_OFFSET_ALIGNMENT) : 1, maxArrayTextureLayers: n ? a.getParameter(a.MAX_ARRAY_TEXTURE_LAYERS) : 1, maxSamples: n ? a.getParameter(a.MAX_SAMPLES) : 1 };
    return H.TEXTURE_UNIT_FOR_UPDATES = o.maxTextureImageUnits - 1, o;
  }
}
function K(r, e, t, i) {
  return e ? i !== e && r.bindBuffer(t, e.glName) : r.bindBuffer(t, null), e;
}
function Ni(r, e) {
  switch (r) {
    case X.POINTS:
      return 2 * e;
    case X.TRIANGLES:
      return e / 3;
    case X.TRIANGLE_STRIP:
    case X.TRIANGLE_FAN:
      return e - 2;
    default:
      return 0;
  }
}
const Da = 2e3;
class Il extends jt {
  constructor(e, t) {
    super(), this._trash = /* @__PURE__ */ new Set(), this._clipData = new Float32Array(8), this._upperLeft = fe(), this._upperRight = fe(), this._lowerLeft = fe(), this._lowerRight = fe(), this._mat2 = Os(), this._clipRendererInitialized = !1, this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this.renderRequested = !1, this.stage = this, this._stationary = !0;
    const { canvas: i = document.createElement("canvas"), alpha: s = !0, stencil: n = !0, contextOptions: a = {} } = t;
    this._canvas = i;
    const o = Ms("2d", i, { alpha: s, antialias: !1, depth: !0, stencil: n });
    this.context = new Pa(D(o) ? o : null, a), this.resourceManager = new ur(), this.painter = new ua(this.context, this, this.resourceManager), pt("geoscene-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), e.appendChild(this._debugOutput)), this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: !1, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: !1, effects: null, context: this.context, painter: this.painter, timeline: t.timeline || new Ps(), renderingOptions: t.renderingOptions, requireFBO: !1, profiler: new ca(this.context, this._debugOutput), dataUploadCounter: 0 }, this._taskHandle = Ds({ render: (l) => this.renderFrame(l) }), this._taskHandle.pause(), this._lostWebGLContextHandle = Is(i, "webglcontextlost", () => {
      this.emit("webgl-error", { error: new z("webgl-context-lost") });
    }), i.setAttribute("style", "width: 100%; height:100%; display:block;"), e.appendChild(i);
  }
  destroy() {
    this.removeAllChildren(), this._emptyTrash(), this._taskHandle.remove(), this._taskHandle = null, this._boundFBO = null, this._clipFBO && (this._clipFBO.dispose(), this._clipFBO = null), this._clipVAO && (this._clipVAO.dispose(), this._clipVAO = null, this._clipVBO = null), this._clipStencilProgram && (this._clipStencilProgram.dispose(), this._clipStencilProgram = null), this._lostWebGLContextHandle && (this._lostWebGLContextHandle.remove(), this._lostWebGLContextHandle = null), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._debugOutput && this._debugOutput.parentNode && this._debugOutput.parentNode.removeChild(this._debugOutput), this.highlightOptions = null, this.resourceManager.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get background() {
    return this._background;
  }
  set background(e) {
    this._background = e, this.requestRender();
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(e) {
    this._highlightOptionsHandle && (this._highlightOptionsHandle.remove(), this._highlightOptionsHandle = null), this._highlightOptions = e, this._highlightOptions && (this._highlightOptionsHandle = Vi(this._highlightOptions, "version", () => {
      this.painter.setHighlightOptions(e), this.requestRender();
    }));
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e) {
    this._renderingOptions = e, this.requestRender();
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e) {
    this._stationary !== e && (this._stationary = e, this.requestRender());
  }
  trashDisplayObject(e) {
    this._trash.add(e), this.requestRender();
  }
  untrashDisplayObject(e) {
    return this._trash.delete(e);
  }
  requestRender() {
    this._renderRemainingTime = Da, this.renderRequested || (this.renderRequested = !0, this.emit("will-render"), this._taskHandle.resume());
  }
  renderFrame(e) {
    const t = this._lastFrameRenderTime ? e.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e.time, this.renderRequested = !1, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e.time, this._renderParameters.deltaTime = e.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash(), this.emit("post-render");
  }
  _createTransforms() {
    return { dvs: Wi() };
  }
  renderChildren(e) {
    for (const t of this.children)
      t.beforeRender(e);
    this._renderChildren(this.children, e);
    for (const t of this.children)
      t.afterRender(e);
  }
  _renderChildren(e, t) {
    const i = this.context;
    t.profiler.recordStart("drawLayers"), t.dataUploadCounter = 0, this._beforeRenderChildren(t), t.drawPhase = Z.MAP, this.painter.beforeRenderLayers(i, this.background);
    for (const s of e)
      s.processRender(t);
    this.painter.renderLayers(i), t.drawPhase = Z.HIGHLIGHT, this.painter.beforeRenderLayers(i);
    for (const s of e)
      s.processRender(t);
    if (this.painter.renderLayers(i), this._isLabelDrawPhaseRequired(e)) {
      t.drawPhase = Z.LABEL, this.painter.beforeRenderLayers(i);
      for (const s of e)
        s.processRender(t);
      this.painter.renderLayers(i);
    }
    if (pt("geoscene-tiles-debug")) {
      t.drawPhase = Z.DEBUG, this.painter.beforeRenderLayers(i);
      for (const s of e)
        s.processRender(t);
      this.painter.renderLayers(i);
    }
    t.profiler.recordEnd("drawLayers"), this._afterRenderChildren();
  }
  _beforeRenderChildren(e) {
    const { context: t } = this, { state: i, pixelRatio: s } = e;
    t.setClearDepth(1), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT);
    const { size: n, rotation: a } = i, o = Math.round(n[0] * s), l = Math.round(n[1] * s);
    if (this._boundFBO = t.getBoundFramebufferObject(), !i.spatialReference.isWrappable)
      return void (this._clipFrame = !1);
    const h = ks(a), c = Math.abs(Math.cos(h)), _ = Math.abs(Math.sin(h)), d = Math.round(o * c + l * _), f = Math.round(i.worldScreenWidth);
    if (d <= f)
      return void (this._clipFrame = !1);
    this._clipFBO && this._clipFBO.width === o && this._clipFBO.height === l || (this._clipFBO = new $(t, { colorTarget: G.TEXTURE, depthStencilTarget: V.DEPTH_STENCIL_RENDER_BUFFER, width: o, height: l }));
    const m = (this.state.padding.left - this.state.padding.right) / 2, u = (this.state.padding.bottom - this.state.padding.top) / 2, p = 0.5 * o, E = 0.5 * l, g = 1 / o, T = 1 / l, v = f * s * 0.5, x = 0.5 * (o * _ + l * c), b = this._upperLeft, B = this._upperRight, A = this._lowerLeft, M = this._lowerRight;
    _e(b, -v, -x), _e(B, v, -x), _e(A, -v, x), _e(M, v, x), Us(this._mat2, [p + m, E - u]), a !== 0 && Ns(this._mat2, this._mat2, h), rt(b, b, this._mat2), rt(B, B, this._mat2), rt(A, A, this._mat2), rt(M, M, this._mat2);
    const ie = this._clipData;
    ie.set([2 * A[0] * g - 1, 2 * (l - A[1]) * T - 1, 2 * M[0] * g - 1, 2 * (l - M[1]) * T - 1, 2 * b[0] * g - 1, 2 * (l - b[1]) * T - 1, 2 * B[0] * g - 1, 2 * (l - B[1]) * T - 1]), this._clipRendererInitialized || this._initializeClipRenderer(t), this._clipVBO.setData(ie), this._boundFBO = t.getBoundFramebufferObject(), t.bindFramebuffer(this._clipFBO), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), t.setClearColor(0, 0, 0, 0), t.setClearDepth(1), t.setClearStencil(0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT | t.gl.STENCIL_BUFFER_BIT), t.setDepthWriteEnabled(!1), this._clipFrame = !0;
  }
  _afterRenderChildren() {
    const e = this.context;
    if (e.logIno(), this._clipFrame && this._clipRendererInitialized) {
      if (e.bindFramebuffer(this._boundFBO), this._boundFBO = null, e.bindVAO(this._clipVAO), e.useProgram(this._clipStencilProgram), e.setDepthWriteEnabled(!1), e.setDepthTestEnabled(!1), e.setStencilTestEnabled(!0), e.setBlendingEnabled(!1), e.setColorMask(!1, !1, !1, !1), e.setStencilOp(me.KEEP, me.KEEP, me.REPLACE), e.setStencilWriteMask(255), e.setStencilFunction(Ne.ALWAYS, 1, 255), e.drawElements(X.TRIANGLES, 6, Oe.UNSIGNED_SHORT, 0), e.bindVAO(), e.setColorMask(!0, !0, !0, !0), this.background != null) {
        const { r: t, g: i, b: s, a: n } = this.background.color;
        e.setClearColor(n * t / 255, n * i / 255, n * s / 255, n);
      } else
        e.setClearColor(0, 0, 0, 0);
      e.clear(e.gl.COLOR_BUFFER_BIT), e.setBlendingEnabled(!0), e.setStencilFunction(Ne.EQUAL, 1, 255), this.painter.blitTexture(e, this._clipFBO.colorTexture, S.NEAREST, 1), e.setStencilTestEnabled(!1);
    }
  }
  doRender(e) {
    const t = this.context, { state: i, pixelRatio: s } = e;
    this._resizeCanvas(e), t.setViewport(0, 0, s * i.size[0], s * i.size[1]), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), super.doRender(e);
  }
  async takeScreenshot(e) {
    const { framebufferWidth: t, framebufferHeight: i } = { framebufferWidth: Math.round(this._renderParameters.state.size[0] * e.resolutionScale), framebufferHeight: Math.round(this._renderParameters.state.size[1] * e.resolutionScale) }, s = 1, n = this.context, a = this._state.clone();
    if (e.rotation != null) {
      const m = a.viewpoint;
      a.viewpoint.rotation = e.rotation, a.viewpoint = m;
    }
    const o = { ...this._renderParameters, drawPhase: null, globalOpacity: 1, stationary: !0, state: a, pixelRatio: s, time: performance.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: !1 }, l = new $(n, { colorTarget: G.TEXTURE, depthStencilTarget: V.DEPTH_STENCIL_RENDER_BUFFER, width: t, height: i }), h = n.getBoundFramebufferObject(), c = n.getViewport();
    n.bindFramebuffer(l), n.setViewport(0, 0, t, i), this._renderChildren(e.children, o);
    const _ = this._readbackScreenshot(l, { ...e.cropArea, y: i - (e.cropArea.y + e.cropArea.height) });
    n.bindFramebuffer(h), n.setViewport(c.x, c.y, c.width, c.height), this.requestRender();
    const d = await _;
    let f;
    return e.outputScale === 1 ? f = d : (f = new ImageData(Math.round(d.width * e.outputScale), Math.round(d.height * e.outputScale)), Ls(d, f, !0)), zs(f, { format: e.format, quality: e.quality, rotation: 0, disableDecorations: !1 }, document.createElement("canvas"), { flipY: !0, premultipliedAlpha: !0 });
  }
  async _readbackScreenshot(e, t) {
    const i = $s(t.width, t.height, document.createElement("canvas"));
    return await e.readPixelsAsync(t.x, t.y, t.width, t.height, y.RGBA, C.UNSIGNED_BYTE, new Uint8Array(i.data.buffer)), i;
  }
  _resizeCanvas(e) {
    const t = this._canvas, i = t.style, { state: { size: s }, pixelRatio: n } = e, a = s[0], o = s[1], l = Math.round(a * n), h = Math.round(o * n);
    t.width === l && t.height === h || (t.width = l, t.height = h), i.width = a + "px", i.height = o + "px";
  }
  _initializeClipRenderer(e) {
    if (this._clipRendererInitialized)
      return !0;
    const t = tt(e, Oi);
    if (!t)
      return !1;
    const i = pe.createVertex(e, ge.STREAM_DRAW, this._clipData), s = new Uint16Array([0, 1, 2, 2, 1, 3]), n = pe.createIndex(e, ge.STATIC_DRAW, s), a = Oi.attributes, o = { geometry: [new Le("a_pos", 2, Oe.FLOAT, 0, 8)] }, l = new Re(e, a, o, { geometry: i }, n);
    return this._clipStencilProgram = t, this._clipVBO = i, this._clipVAO = l, this._clipRendererInitialized = !0, !0;
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e = Array.from(this._trash);
      this._trash.clear();
      for (const t of e)
        t.processDetach();
    }
  }
  _isLabelDrawPhaseRequired(e) {
    let t = !1;
    for (const i of e) {
      if (!(i instanceof jt)) {
        t = t || !1;
        break;
      }
      if (i.hasLabels)
        return !0;
      t = t || this._isLabelDrawPhaseRequired(i.children);
    }
    return t;
  }
}
const ct = 2, le = 1, Ze = 0, Qe = 1, Je = 2;
let Ia = class {
  constructor(e, t) {
    this.width = e, this.height = t;
    const i = Math.ceil(e / le), s = Math.ceil(t / le);
    this._cols = i, this._rows = s, this._cells = Lr.create(i * s);
  }
  insertMetrics(e) {
    const t = this._hasCollision(e);
    return t === Ze && this._markMetrics(e), t;
  }
  getCellId(e, t) {
    return e + t * this._cols;
  }
  has(e) {
    return this._cells.has(e);
  }
  hasRange(e, t) {
    return this._cells.hasRange(e, t);
  }
  set(e) {
    this._cells.set(e);
  }
  setRange(e, t) {
    this._cells.setRange(e, t);
  }
  _hasCollision(e) {
    const t = e.id;
    let i = 0, s = 0;
    e.save();
    do {
      const n = e.boundsCount;
      i += n;
      for (let a = 0; a < n; a++) {
        const o = e.boundsComputedAnchorX(a), l = e.boundsComputedAnchorY(a), h = e.boundsWidth(a) + ct, c = e.boundsHeight(a) + ct;
        switch (this._collide(o, l, h, c)) {
          case Je:
            return Je;
          case Qe:
            s++;
        }
      }
    } while (e.peekId() === t && e.next());
    return e.restore(), i === s ? Qe : Ze;
  }
  _collide(e, t, i, s) {
    const n = e - i / 2, a = t - s / 2, o = n + i, l = a + s;
    if (o < 0 || l < 0 || n > this.width || a > this.height)
      return Qe;
    const h = ee(Math.floor(n / le), 0, this._cols), c = ee(Math.floor(a / le), 0, this._rows), _ = ee(Math.ceil(o / le), 0, this._cols), d = ee(Math.ceil(l / le), 0, this._rows);
    for (let f = c; f <= d; f++)
      for (let m = h; m <= _; m++) {
        const u = this.getCellId(m, f);
        if (this.has(u))
          return Je;
      }
    return Ze;
  }
  _mark(e, t, i, s) {
    const n = e - i / 2, a = t - s / 2, o = n + i, l = a + s, h = ee(Math.floor(n / le), 0, this._cols), c = ee(Math.floor(a / le), 0, this._rows), _ = ee(Math.ceil(o / le), 0, this._cols), d = ee(Math.ceil(l / le), 0, this._rows);
    for (let f = c; f <= d; f++)
      for (let m = h; m <= _; m++) {
        const u = this.getCellId(m, f);
        this.set(u);
      }
    return !1;
  }
  _markMetrics(e) {
    const t = e.id;
    do {
      const i = e.boundsCount;
      for (let s = 0; s < i; s++) {
        const n = e.boundsComputedAnchorX(s), a = e.boundsComputedAnchorY(s), o = e.boundsWidth(s) + ct, l = e.boundsHeight(s) + ct;
        this._mark(n, a, o, l);
      }
    } while (e.peekId() === t && e.next());
  }
};
const Ua = Math.PI;
function hs(r, e) {
  switch (e.transformationType) {
    case Ee.Additive:
      return Na(r, e);
    case Ee.Constant:
      return La(e, r);
    case Ee.ClampedLinear:
      return za(r, e);
    case Ee.Proportional:
      return $a(r, e);
    case Ee.Stops:
      return ka(r, e);
    case Ee.RealWorldSize:
      return Ga(r, e);
    case Ee.Identity:
      return r;
    case Ee.Unknown:
      return null;
  }
}
function ne(r, e) {
  return typeof r == "number" ? r : hs(e, r);
}
function Na(r, e) {
  return r + (ne(e.minSize, r) || e.minDataValue);
}
function La(r, e) {
  const t = r.stops;
  let i = t && t.length && t[0].size;
  return i == null && (i = r.minSize), ne(i, e);
}
function za(r, e) {
  const t = (r - e.minDataValue) / (e.maxDataValue - e.minDataValue), i = ne(e.minSize, r), s = ne(e.maxSize, r);
  return r <= e.minDataValue ? i : r >= e.maxDataValue ? s : i + t * (s - i);
}
function $a(r, e) {
  const t = r / e.minDataValue, i = ne(e.minSize, r), s = ne(e.maxSize, r);
  let n = null;
  return n = t * i, ee(n, i, s);
}
function ka(r, e) {
  const [t, i, s] = Va(r, e.cache.ipData);
  if (t === i)
    return ne(e.stops[t].size, r);
  {
    const n = ne(e.stops[t].size, r);
    return n + (ne(e.stops[i].size, r) - n) * s;
  }
}
function Ga(r, e) {
  const t = Gs[e.valueUnit], i = ne(e.minSize, r), s = ne(e.maxSize, r), { valueRepresentation: n } = e;
  let a = null;
  return a = n === "area" ? 2 * Math.sqrt(r / Ua) / t : n === "radius" || n === "distance" ? 2 * r / t : r / t, ee(a, i, s);
}
function Va(r, e) {
  if (!e)
    return;
  let t = 0, i = e.length - 1;
  return e.some((s, n) => r < s ? (i = n, !0) : (t = n, !1)), [t, i, (r - e[t]) / (e[i] - e[t])];
}
const At = 254, dt = 255, He = 0;
function Pe(r, e) {
  const t = [];
  r.forEachTile((i) => t.push(i)), t.sort((i, s) => i.instanceId - s.instanceId), t.forEach((i) => {
    D(i.labelMetrics) && i.isReady && e(i, i.labelMetrics.getCursor());
  });
}
function Wa(r) {
  return r.layer.type === "feature" || r.layer.type === "csv" || r.layer.type === "geojson" || r.layer.type === "ogc-feature" || r.layer.type === "stream" || r.layer.type === "subtype-group" || r.layer.type === "wfs";
}
function Xa(r) {
  return (e) => we(hs(e, r));
}
function Ha(r) {
  const e = "visualVariables" in r && r.visualVariables;
  if (!e)
    return null;
  for (const t of e)
    if (t.type === "size")
      return Xa(t);
  return null;
}
function qa(r) {
  for (const t of r) {
    var e;
    const i = "featureReduction" in t && ((e = t.featureReduction) == null ? void 0 : e.type) === "cluster" && t.featureReduction, s = [...t.labelingInfo || [], ...i.labelingInfo || []];
    if (!(!t.labelsVisible || !s.length) && s.some((n) => n.deconflictionStrategy === "none"))
      return !0;
  }
  return !1;
}
function Ya(r, e) {
  if (!Wa(e))
    return;
  const t = e.layer.type === "subtype-group" ? e.layer.sublayers.items : [e.layer], i = e.layer.geometryType, s = !qa(t), n = {};
  if (e.layer.type !== "subtype-group") {
    if (e.layer.renderer.type === "heatmap")
      return;
    const l = Ha(e.layer.renderer);
    n[0] = l;
  }
  const a = e.tileRenderer;
  if (N(a))
    return;
  const o = e.layer.visible && !e.suspended;
  r.push({ tileRenderer: a, vvEvaluators: n, deconflictionEnabled: s, geometryType: i, visible: o });
}
let ja = class {
  run(e, t, i) {
    const s = [];
    for (let n = e.length - 1; n >= 0; n--)
      Ya(s, e[n]);
    this._transformMetrics(s, t), this._runCollision(s, t, i);
  }
  _runCollision(e, t, i) {
    const [s, n] = t.state.size, a = new Ia(s * t.pixelRatio, n * t.pixelRatio);
    for (const { tileRenderer: o, deconflictionEnabled: l, visible: h } of e) {
      const c = o.featuresView.attributeView;
      l ? h ? (this._prepare(o), this._collideVisible(a, o, i), this._collideInvisible(a, o)) : Pe(o, (_, d) => {
        for (; d.nextId(); )
          c.setLabelMinZoom(d.id, dt);
      }) : Pe(o, (_, d) => {
        for (; d.nextId(); )
          c.setLabelMinZoom(d.id, He);
      });
    }
  }
  _isFiltered(e, t, i) {
    const s = t.getFilterFlags(e), n = !i.hasFilter || !!(s & Mr), a = !D(i.featureEffect) || i.featureEffect.excludedLabelsVisible || !!(s & Pr);
    return !(n && a);
  }
  _prepare(e) {
    const t = e.featuresView.attributeView, i = /* @__PURE__ */ new Set();
    Pe(e, (s, n) => {
      for (; n.nextId(); )
        if (!i.has(n.id)) {
          if (i.add(n.id), this._isFiltered(n.id, t, e.layerView)) {
            t.setLabelMinZoom(n.id, At);
            continue;
          }
          t.getLabelMinZoom(n.id) !== He ? t.setLabelMinZoom(n.id, dt) : t.setLabelMinZoom(n.id, He);
        }
    });
  }
  _collideVisible(e, t, i) {
    const s = t.featuresView.attributeView, n = /* @__PURE__ */ new Set();
    Pe(t, (a, o) => {
      for (; o.nextId(); )
        if (!n.has(o.id))
          if (a.key.level === i) {
            if (s.getLabelMinZoom(o.id) === 0)
              switch (e.insertMetrics(o)) {
                case Qe:
                  break;
                case Je:
                  s.setLabelMinZoom(o.id, At), n.add(o.id);
                  break;
                case Ze:
                  s.setLabelMinZoom(o.id, He), n.add(o.id);
              }
          } else
            s.setLabelMinZoom(o.id, At);
    });
  }
  _collideInvisible(e, t) {
    const i = t.featuresView.attributeView, s = /* @__PURE__ */ new Set();
    Pe(t, (n, a) => {
      for (; a.nextId(); )
        if (!s.has(a.id) && i.getLabelMinZoom(a.id) === dt)
          switch (e.insertMetrics(a)) {
            case Qe:
              break;
            case Je:
              i.setLabelMinZoom(a.id, dt), s.add(a.id);
              break;
            case Ze:
              i.setLabelMinZoom(a.id, He), s.add(a.id);
          }
    });
  }
  _transformMetrics(e, t) {
    for (const { tileRenderer: i, geometryType: s, vvEvaluators: n } of e)
      Pe(i, (a, o) => {
        const l = i.featuresView.attributeView, h = a.transforms.labelMat2d;
        h[4] = Math.round(h[4]), h[5] = Math.round(h[5]);
        const c = h[4], _ = h[5], d = s === "polyline";
        for (; o.next(); ) {
          const f = o.boundsCount, m = o.anchorX, u = o.anchorY;
          let p = o.size;
          const E = n[0];
          if (D(E)) {
            const v = E(l.getVVSize(o.id));
            p = isNaN(v) || v == null || v === 1 / 0 ? p : v;
          }
          const g = o.directionX * (p / 2), T = o.directionY * (p / 2);
          for (let v = 0; v < f; v++) {
            let x = m, b = o.anchorY;
            if (d) {
              let B = x + o.boundsX(v) + g, A = b + o.boundsY(v) + T;
              t.state.rotation ? (B = h[0] * B + h[2] * A + h[4], A = h[1] * B + h[3] * A + h[5]) : (B += c, A += _), o.setBoundsComputedAnchorX(v, Math.floor(B)), o.setBoundsComputedAnchorY(v, Math.floor(A));
            } else {
              t.state.rotation ? (x = h[0] * m + h[2] * u + h[4], b = h[1] * m + h[3] * u + h[5]) : (x += c, b += _);
              const B = x + o.boundsX(v) + g, A = b + o.boundsY(v) + T;
              o.setBoundsComputedAnchorX(v, B), o.setBoundsComputedAnchorY(v, A);
            }
          }
        }
      });
  }
};
const Ka = 32, Za = it.getLogger("geoscene.views.2d.layers.labels.LabelManager");
let Se = class extends Vs($e) {
  constructor(e) {
    super(e), this._applyVisibilityPassThrottled = Ws(this._applyVisibilityPass, Ka, this), this.lastUpdateId = -1, this.updateRequested = !1, this.view = null;
  }
  initialize() {
    this.collisionEngine = new ja();
  }
  destroy() {
    this.collisionEngine = null, this._applyVisibilityPassThrottled.remove(), this._applyVisibilityPassThrottled = null;
  }
  get updating() {
    return this.updateRequested;
  }
  update(e) {
    this._applyVisibilityPassThrottled(e);
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.view.requestUpdate());
  }
  processUpdate(e) {
    this._set("updateParameters", e), this.updateRequested && (this.updateRequested = !1, this.update(e));
  }
  _applyVisibilityPass(e) {
    try {
      const t = this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;
      this.collisionEngine.run(this.view.allLayerViews.items, e, t);
    } catch (t) {
      Za.error(new z("mapview-labeling", "Encountered an error during label decluttering", t));
    }
  }
};
P([L()], Se.prototype, "updateRequested", void 0), P([L({ readOnly: !0 })], Se.prototype, "updateParameters", void 0), P([L()], Se.prototype, "updating", null), P([L()], Se.prototype, "view", void 0), Se = P([ze("geoscene.views.2d.layers.labels.LabelManager")], Se);
const zl = Se, _t = { container: "geoscene-zoom-box__container", overlay: "geoscene-zoom-box__overlay", background: "geoscene-zoom-box__overlay-background", box: "geoscene-zoom-box__outline" }, St = { zoom: "Shift", counter: "Ctrl" };
let Ye = class extends $e {
  constructor(e) {
    super(e), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(e) {
    this._handles && this._handles.forEach((t) => {
      t.remove();
    }), this._handles = null, this._destroyOverlay(), this._set("view", e), e && (e.on("drag", [St.zoom], (t) => this._handleDrag(t, 1), Xt.INTERNAL), e.on("drag", [St.zoom, St.counter], (t) => this._handleDrag(t, -1), Xt.INTERNAL));
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(e, t, i, s) {
    this._box.x = e, this._box.y = t, this._box.width = i, this._box.height = s, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(e, t, i, s, n) {
    const a = this.view, o = a.toMap(Xs(e + 0.5 * i, t + 0.5 * s));
    let l = Math.max(i / a.width, s / a.height);
    n === -1 && (l = 1 / l), this._destroyOverlay(), this.navigation.end(), a.goTo({ center: o, scale: a.scale * l });
  }
  _updateBox(e, t, i, s) {
    const n = this._boxShape;
    n.setAttributeNS(null, "x", "" + e), n.setAttributeNS(null, "y", "" + t), n.setAttributeNS(null, "width", "" + i), n.setAttributeNS(null, "height", "" + s), n.setAttributeNS(null, "class", _t.box);
  }
  _updateBackground(e, t, i, s) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(e, t, i, s, this.view.width, this.view.height));
  }
  _createContainer() {
    const e = document.createElement("div");
    e.className = _t.container, this.view.root.appendChild(e), this._container = e;
  }
  _createOverlay() {
    const e = this.view.width, t = this.view.height, i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i.setAttributeNS(null, "d", "M 0 0 L " + e + " 0 L " + e + " " + t + " L 0 " + t + " Z"), i.setAttributeNS(null, "class", _t.background);
    const s = document.createElementNS("http://www.w3.org/2000/svg", "rect"), n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.setAttributeNS(null, "class", _t.overlay), n.appendChild(i), n.appendChild(s), this._container.appendChild(n), this._backgroundShape = i, this._boxShape = s, this._overlay = n;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(e, t, i, s, n, a) {
    const o = e + i, l = t + s;
    return "M 0 0 L " + n + " 0 L " + n + " " + a + " L 0 " + a + " ZM " + e + " " + t + " L " + e + " " + l + " L " + o + " " + l + " L " + o + " " + t + " Z";
  }
  _handleDrag(e, t) {
    const i = e.x, s = e.y, n = e.origin.x, a = e.origin.y;
    let o, l, h, c;
    switch (i > n ? (o = n, h = i - n) : (o = i, h = n - i), s > a ? (l = a, c = s - a) : (l = s, c = a - s), e.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(o, l, h, c);
        break;
      case "end":
        this._end(o, l, h, c, t);
    }
    e.stopPropagation();
  }
  _redraw() {
    if (!this._rafId || (this._rafId = null, !this._overlay))
      return;
    const { x: e, y: t, width: i, height: s } = this._box;
    this._updateBox(e, t, i, s), this._updateBackground(e, t, i, s), this._rafId = requestAnimationFrame(this._redraw);
  }
};
P([L()], Ye.prototype, "navigation", void 0), P([L()], Ye.prototype, "view", null), Ye = P([ze("geoscene.views.2d.navigation.ZoomBox")], Ye);
const Qa = Ye;
let xe = class {
  constructor(e) {
    this.gain = e;
  }
  update(e) {
    if (this.hasLastValue) {
      const t = this.computeDelta(e);
      this._updateDelta(t);
    }
    this.lastValue = e;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  get hasLastValue() {
    return this.lastValue !== void 0;
  }
  get hasFilteredDelta() {
    return this.filteredDelta !== void 0;
  }
  computeDelta(e) {
    return e - this.lastValue;
  }
  _updateDelta(e) {
    this.hasFilteredDelta ? this.filteredDelta = (1 - this.gain) * this.filteredDelta + this.gain * e : this.filteredDelta = e;
  }
}, $t = class {
  constructor(e, t, i) {
    this._initialVelocity = e, this._stopVelocity = t, this._friction = i, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
  }
  get duration() {
    return this._duration;
  }
  isFinished(e) {
    return e > this.duration;
  }
  get friction() {
    return this._friction;
  }
  value(e) {
    return this.valueFromInitialVelocity(this._initialVelocity, e);
  }
  valueDelta(e, t) {
    const i = this.value(e);
    return this.value(e + t) - i;
  }
  valueFromInitialVelocity(e, t) {
    t = Math.min(t, this.duration);
    const i = 1 - this.friction;
    return e * (i ** t - 1) / Math.log(i);
  }
};
class Ja extends $t {
  constructor(e, t, i, s, n) {
    super(e, t, i), this.sceneVelocity = s, this.direction = n;
  }
  value(e) {
    return super.valueFromInitialVelocity(this.sceneVelocity, e);
  }
}
let eo = class {
  constructor(e = 300, t = 12, i = 0.84) {
    this.minimumInitialVelocity = e, this.stopVelocity = t, this.friction = i, this.enabled = !0, this.time = new xe(0.6), this.screen = [new xe(0.4), new xe(0.4)], this.scene = [new xe(0.6), new xe(0.6), new xe(0.6)], this.tmpDirection = Xi();
  }
  add(e, t, i) {
    if (this.enabled) {
      if (this.time.hasLastValue && this.time.computeDelta(i) < 0.015)
        return;
      this.screen[0].update(e[0]), this.screen[1].update(e[1]), this.scene[0].update(t[0]), this.scene[1].update(t[1]), this.scene[2].update(t[2]), this.time.update(i);
    }
  }
  reset() {
    this.screen[0].reset(), this.screen[1].reset(), this.scene[0].reset(), this.scene[1].reset(), this.scene[2].reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.screen[0].hasFilteredDelta)
      return null;
    const e = this.screen[0].filteredDelta, t = this.screen[1].filteredDelta, i = Math.sqrt(e * e + t * t) / this.time.filteredDelta;
    return Math.abs(i) < this.minimumInitialVelocity ? null : this.createMomentum(i, this.stopVelocity, this.friction);
  }
  createMomentum(e, t, i) {
    Hs(this.tmpDirection, this.scene[0].filteredDelta, this.scene[1].filteredDelta, this.scene[2].filteredDelta);
    const s = qs(this.tmpDirection);
    s > 0 && Hi(this.tmpDirection, this.tmpDirection, 1 / s);
    const n = s / this.time.filteredDelta;
    return new Ja(e, t, i, n, this.tmpDirection);
  }
}, De = class extends $e {
  constructor(e) {
    super(e), this.animationTime = 0, this.momentumEstimator = new eo(500, 6, 0.92), this.momentum = null, this.tmpMomentum = Xi(), this.momentumFinished = !1, this.viewpoint = new vt({ targetGeometry: new Et(), scale: 0, rotation: 0 }), Ys(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(e, t) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(t), this.previousDrag = t;
  }
  update(e, t) {
    this.addToEstimator(t);
    let i = t.center.x, s = t.center.y;
    const n = this.previousDrag;
    i = n ? n.center.x - i : -i, s = n ? s - n.center.y : s, e.viewpoint = gt(this.viewpoint, e.viewpoint, [i || 0, s || 0]), this.previousDrag = t;
  }
  end(e, t) {
    this.addToEstimator(t);
    const i = e.navigation.momentumEnabled;
    this.momentum = i ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(e), this.previousDrag = null, this.navigation.end();
  }
  addToEstimator(e) {
    const t = e.center.x, i = e.center.y, s = js(-t, i), n = Pt(-t, i, 0);
    this.momentumEstimator.add(s, n, 1e-3 * e.timestamp);
  }
  onAnimationUpdate(e) {
    this.navigation.animationManager.animateContinous(e.viewpoint, (t, i) => {
      this.momentumFinished = !this.momentum || this.momentum.isFinished(this.animationTime);
      const s = 1e-3 * i;
      if (!this.momentumFinished) {
        const n = this.momentum.valueDelta(this.animationTime, s);
        Hi(this.tmpMomentum, this.momentum.direction, n), gt(t, t, this.tmpMomentum), e.constraints.constrainByGeometry(t);
      }
      this.animationTime += s;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
P([L()], De.prototype, "momentumFinished", void 0), P([L()], De.prototype, "viewpoint", void 0), P([L()], De.prototype, "navigation", void 0), De = P([ze("geoscene.views.2d.navigation.actions.Pan")], De);
const to = De;
let us = class {
  constructor(e = 2.5, t = 0.01, i = 0.95, s = 12) {
    this.minimumInitialVelocity = e, this.stopVelocity = t, this.friction = i, this.maxVelocity = s, this.enabled = !0, this.value = new xe(0.8), this.time = new xe(0.3);
  }
  add(e, t) {
    if (this.enabled) {
      if (this.time.hasLastValue) {
        if (this.time.computeDelta(t) < 0.01)
          return;
        if (this.value.hasFilteredDelta) {
          const i = this.value.computeDelta(e);
          this.value.filteredDelta * i < 0 && this.value.reset();
        }
      }
      this.time.update(t), this.value.update(e);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta)
      return null;
    let e = this.value.filteredDelta / this.time.filteredDelta;
    return e = ee(e, -this.maxVelocity, this.maxVelocity), Math.abs(e) < this.minimumInitialVelocity ? null : this.createMomentum(e, this.stopVelocity, this.friction);
  }
  createMomentum(e, t, i) {
    return new $t(e, t, i);
  }
}, io = class extends us {
  constructor(e = 3, t = 0.01, i = 0.95, s = 12) {
    super(e, t, i, s);
  }
  add(e, t) {
    if (this.value.hasLastValue) {
      const i = this.value.lastValue;
      let s = e - i;
      for (; s > Math.PI; )
        s -= 2 * Math.PI;
      for (; s < -Math.PI; )
        s += 2 * Math.PI;
      e = i + s;
    }
    super.add(e, t);
  }
};
class so extends $t {
  constructor(e, t, i) {
    super(e, t, i);
  }
  value(e) {
    const t = super.value(e);
    return Math.exp(t);
  }
  valueDelta(e, t) {
    const i = super.value(e), s = super.value(e + t) - i;
    return Math.exp(s);
  }
}
let ro = class extends us {
  constructor(e = 2.5, t = 0.01, i = 0.95, s = 12) {
    super(e, t, i, s);
  }
  add(e, t) {
    super.add(Math.log(e), t);
  }
  createMomentum(e, t, i) {
    return new so(e, t, i);
  }
}, Ie = class extends $e {
  constructor(e) {
    super(e), this._animationTime = 0, this._momentumFinished = !1, this._rotationMomentumEstimator = new io(0.6, 0.15, 0.95), this._rotationDirection = 1, this._zoomDirection = 1, this._zoomMomentumEstimator = new ro(), this._zoomOnly = null, this.zoomMomentum = null, this.rotateMomentum = null, this.viewpoint = new vt({ targetGeometry: new Et(), scale: 0, rotation: 0 }), this.watch("_momentumFinished", (t) => {
      t && this.navigation.stop();
    });
  }
  begin(e, t) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = t.angle, this._previousRadius = this._startRadius = t.radius, this._previousCenter = t.center, this._updateTimestamp = null, e.constraints.rotationEnabled && this.addToRotateEstimator(0, t.timestamp), this.addToZoomEstimator(t, 1);
  }
  update(e, t) {
    this._updateTimestamp === null && (this._updateTimestamp = t.timestamp);
    const i = t.angle, s = t.radius, n = t.center, a = Math.abs(180 * (i - this._startAngle) / Math.PI), o = Math.abs(s - this._startRadius), l = this._startRadius / s;
    if (this._previousRadius) {
      const h = s / this._previousRadius;
      let c = 180 * (i - this._previousAngle) / Math.PI;
      this._rotationDirection = c >= 0 ? 1 : -1, this._zoomDirection = h >= 1 ? 1 : -1, e.constraints.rotationEnabled ? (this._zoomOnly === null && t.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = o - a > 0), this._zoomOnly === null || this._zoomOnly ? c = 0 : this.addToRotateEstimator(i - this._startAngle, t.timestamp)) : c = 0, this.addToZoomEstimator(t, l), this.navigation.setViewpoint([n.x, n.y], 1 / h, c, [this._previousCenter.x - n.x, n.y - this._previousCenter.y]);
    }
    this._previousAngle = i, this._previousRadius = s, this._previousCenter = n;
  }
  end(e) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(e), this.navigation.end();
  }
  addToRotateEstimator(e, t) {
    this._rotationMomentumEstimator.add(e, 1e-3 * t);
  }
  addToZoomEstimator(e, t) {
    this._zoomMomentumEstimator.add(t, 1e-3 * e.timestamp);
  }
  canZoomIn(e) {
    const t = e.scale, i = e.constraints.effectiveMaxScale;
    return i === 0 || t > i;
  }
  canZoomOut(e) {
    const t = e.scale, i = e.constraints.effectiveMinScale;
    return i === 0 || t < i;
  }
  onAnimationUpdate(e) {
    this.navigation.animationManager.animateContinous(e.viewpoint, (t, i) => {
      const s = !this.canZoomIn(e) && this._zoomDirection > 1 || !this.canZoomOut(e) && this._zoomDirection < 1, n = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), a = s || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), o = 1e-3 * i;
      if (this._momentumFinished = n && a, !this._momentumFinished) {
        const l = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, o)) * this._rotationDirection * 180 / Math.PI : 0;
        let h = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, o)) : 1;
        const c = fe(), _ = fe();
        if (this._previousCenter) {
          _e(c, this._previousCenter.x, this._previousCenter.y), Ks(_, e.size, e.padding), Zs(c, c, _);
          const { constraints: d, scale: f } = e, m = f * h;
          h < 1 && !d.canZoomInTo(m) ? (h = f / d.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : h > 1 && !d.canZoomOutTo(m) && (h = f / d.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Qs(t, e.viewpoint, h, l, c, e.size), e.constraints.constrainByGeometry(t);
        }
      }
      this._animationTime += o;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
P([L()], Ie.prototype, "_momentumFinished", void 0), P([L()], Ie.prototype, "viewpoint", void 0), P([L()], Ie.prototype, "navigation", void 0), Ie = P([ze("geoscene.views.2d.navigation.actions.Pinch")], Ie);
const no = Ie, Ct = fe(), Li = fe();
let je = class extends $e {
  constructor(r) {
    super(r), this._previousCenter = fe(), this.viewpoint = new vt({ targetGeometry: new Et(), scale: 0, rotation: 0 });
  }
  begin(r, e) {
    this.navigation.begin(), _e(this._previousCenter, e.center.x, e.center.y);
  }
  update(r, e) {
    const { state: { size: t, padding: i } } = r;
    _e(Ct, e.center.x, e.center.y), Js(Li, t, i), r.viewpoint = Dt(this.viewpoint, r.state.paddedViewState.viewpoint, er(Li, this._previousCenter, Ct)), tr(this._previousCenter, Ct);
  }
  end() {
    this.navigation.end();
  }
};
P([L()], je.prototype, "viewpoint", void 0), P([L()], je.prototype, "navigation", void 0), je = P([ze("geoscene.views.2d.actions.Rotate")], je);
const ao = je, ft = 10, zi = 1, Ot = new vt({ targetGeometry: new Et() }), Mt = [0, 0], $i = 250;
let he = class extends $e {
  constructor(r) {
    super(r), this._endTimer = null, this.animationManager = null;
  }
  initialize() {
    this.pan = new to({ navigation: this }), this.rotate = new ao({ navigation: this }), this.pinch = new no({ navigation: this }), this.zoomBox = new Qa({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan.destroy(), this.rotate.destroy(), this.pinch.destroy(), this.zoomBox.destroy(), this.pan = this.rotate = this.pinch = this.zoomBox = this.animationManager = null;
  }
  begin() {
    this._set("interacting", !0);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer($i);
  }
  async zoom(r, e = this._getDefaultAnchor()) {
    if (this.stop(), this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)
      return r < 1 ? this.zoomIn(e) : this.zoomOut(e);
    this.setViewpoint(e, r, 0, [0, 0]);
  }
  async zoomIn(r) {
    const e = this.view, t = e.constraints.snapToNextScale(e.scale);
    return this._zoomToScale(t, r);
  }
  async zoomOut(r) {
    const e = this.view, t = e.constraints.snapToPreviousScale(e.scale);
    return this._zoomToScale(t, r);
  }
  setViewpoint(r, e, t, i) {
    this.begin(), this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, r, e, t, i), this.end();
  }
  setViewpointImmediate(r, e = 0, t = [0, 0], i = this._getDefaultAnchor()) {
    this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, i, r, e, t);
  }
  continousRotateClockwise() {
    const r = this.get("view.viewpoint");
    this.animationManager.animateContinous(r, (e) => {
      Dt(e, e, -zi);
    });
  }
  continousRotateCounterclockwise() {
    const r = this.get("view.viewpoint");
    this.animationManager.animateContinous(r, (e) => {
      Dt(e, e, zi);
    });
  }
  resetRotation() {
    this.view.rotation = 0;
  }
  continousPanLeft() {
    this._continuousPan([-ft, 0]);
  }
  continousPanRight() {
    this._continuousPan([ft, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, ft]);
  }
  continousPanDown() {
    this._continuousPan([0, -ft]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager.stop(), this.end(), this._endTimer !== null && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", !1));
  }
  _continuousPan(r) {
    const e = this.view.viewpoint;
    this.animationManager.animateContinous(e, (t) => {
      gt(t, t, r), this.view.constraints.constrainByGeometry(t);
    });
  }
  _startTimer(r) {
    return this._endTimer !== null || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const e = performance.now() - this._lastEventTimestamp;
      e < $i ? this._endTimer = this._startTimer(e) : this._set("interacting", !1);
    }, r)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: r, padding: { left: e, right: t, top: i, bottom: s } } = this.view;
    return Mt[0] = 0.5 * (r[0] - t + e), Mt[1] = 0.5 * (r[1] - s + i), Mt;
  }
  async _zoomToScale(r, e = this._getDefaultAnchor()) {
    const { view: t } = this, { constraints: i, scale: s, viewpoint: n, size: a, padding: o } = t, l = i.canZoomInTo(r), h = i.canZoomOutTo(r);
    if (!(r < s && !l || r > s && !h))
      return Ht(Ot, n, r / s, 0, e, a, o), i.constrainByGeometry(Ot), t.goTo(Ot, { animate: !0 });
  }
  _scaleRotateTranslateViewpoint(r, e, t, i, s) {
    const { view: n } = this, { size: a, padding: o, constraints: l, scale: h, viewpoint: c } = n, _ = h * t, d = l.canZoomInTo(_), f = l.canZoomOutTo(_);
    return (t < 1 && !d || t > 1 && !f) && (t = 1), gt(c, c, s), Ht(r, c, t, i, e, a, o), l.constrainByGeometry(r);
  }
};
P([L()], he.prototype, "animationManager", void 0), P([L({ type: Boolean, readOnly: !0 })], he.prototype, "interacting", void 0), P([L()], he.prototype, "pan", void 0), P([L()], he.prototype, "pinch", void 0), P([L()], he.prototype, "rotate", void 0), P([L()], he.prototype, "view", void 0), P([L()], he.prototype, "zoomBox", void 0), he = P([ze("geoscene.views.2d.navigation.MapViewNavigation")], he);
const jl = he, cs = { shaders: { vertexShader: Q("magnifier/magnifier.vert"), fragmentShader: Q("magnifier/magnifier.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
function oo(r) {
  return tt(r, cs);
}
async function lo(r) {
  const e = import("./mask-svg-6XrdvOz6.js"), t = import("./overlay-svg-ocTCW3SN.js"), i = ai((await e).default, { signal: r }), s = ai((await t).default, { signal: r }), n = { mask: await i, overlay: await s };
  return Gi(r), n;
}
class Kl extends cr {
  constructor() {
    super(), this._handles = new ir(), this._resourcePixelRatio = 1, this.visible = !1;
  }
  destroy() {
    this._handles.destroy(), this._handles = null, this._disposeRenderResources(), this._resourcesTask && (this._resourcesTask.abort(), this._resourcesTask = null);
  }
  get background() {
    return this._background;
  }
  set background(e) {
    this._background = e, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e) {
    this._magnifier = e, this._handles.removeAll(), this._handles.add([Vi(e, "version", () => {
      this.visible = e.visible && D(e.position) && e.size > 0, this.requestRender();
    }), e.watch(["mask", "overlay"], () => this._reloadResources()), e.watch("size", () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  _createTransforms() {
    return { dvs: Wi() };
  }
  doRender(e) {
    var t;
    const i = e.context;
    if (!this._resourcesTask)
      return void this._reloadResources();
    if (e.drawPhase !== Z.MAP || !this._canRender())
      return;
    this._updateResources(e);
    const s = this._magnifier;
    if (N(s.position))
      return;
    const n = e.pixelRatio, a = s.size * n, o = 1 / s.factor, l = Math.ceil(o * a);
    this._readbackTexture.resize(l, l);
    const { size: h } = e.state, c = n * h[0], _ = n * h[1], d = 0.5 * l, f = 0.5 * l, m = ee(n * s.position.x, d, c - d - 1), u = ee(_ - n * s.position.y, f, _ - f - 1);
    i.setBlendingEnabled(!0);
    const p = m - d, E = u - f, g = this._readbackTexture;
    i.bindTexture(g, 0), i.gl.copyTexImage2D(g.descriptor.target, 0, g.descriptor.pixelFormat, p, E, l, l, 0);
    const T = (t = this.background) == null ? void 0 : t.color, v = T ? [T.a * T.r / 255, T.a * T.g / 255, T.a * T.b / 255, T.a] : [1, 1, 1, 1], x = (m + s.offset.x * n) / c * 2 - 1, b = (u - s.offset.y * n) / _ * 2 - 1, B = a / c * 2, A = a / _ * 2, M = this._program;
    i.bindVAO(this._vertexArrayObject), i.bindTexture(this._overlayTexture, 6), i.bindTexture(this._maskTexture, 7), i.useProgram(M), M.setUniform4fv("u_background", v), M.setUniform1i("u_readbackTexture", 0), M.setUniform1i("u_overlayTexture", 6), M.setUniform1i("u_maskTexture", 7), M.setUniform4f("u_drawPos", x, b, B, A), M.setUniform1i("u_maskEnabled", s.maskEnabled ? 1 : 0), M.setUniform1i("u_overlayEnabled", s.overlayEnabled ? 1 : 0), i.setStencilTestEnabled(!1), i.setColorMask(!0, !0, !0, !0), i.drawArrays(X.TRIANGLE_STRIP, 0, 4), i.bindVAO();
  }
  _canRender() {
    return this.mask && this.overlay && this._magnifier != null;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const e = D(this._magnifier) ? this._magnifier.maskUrl : null, t = D(this._magnifier) ? this._magnifier.overlayUrl : null;
    this._resourcesTask = sr(async (i) => {
      const s = N(e) || N(t) ? lo(i) : null, n = D(e) ? et(e, { responseType: "image", signal: i }).then((h) => h.data) : s.then((h) => h.mask), a = D(t) ? et(t, { responseType: "image", signal: i }).then((h) => h.data) : s.then((h) => h.overlay), [o, l] = await Promise.all([n, a]);
      this.mask = o, this.overlay = l, this._disposeRenderResources(), this.requestRender();
    });
  }
  _disposeRenderResources() {
    this._readbackTexture = ce(this._readbackTexture), this._overlayTexture = ce(this._overlayTexture), this._maskTexture = ce(this._maskTexture), this._vertexArrayObject = ce(this._vertexArrayObject), this._program = ce(this._program);
  }
  _updateResources(e) {
    if (e.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture)
      return;
    const t = e.context;
    this._resourcePixelRatio = e.pixelRatio;
    const i = Math.ceil(this._magnifier.size * e.pixelRatio);
    this._program = oo(t);
    const s = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), n = cs.attributes;
    this._vertexArrayObject = new Re(t, n, Yi, { geometry: pe.createVertex(t, ge.STATIC_DRAW, s) }), this.overlay.width = i, this.overlay.height = i, this._overlayTexture = new H(t, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.NEAREST, flipped: !0, preMultiplyAlpha: !rr(this.overlay.src) || !e.context.driverTest.svgAlwaysPremultipliesAlpha }, this.overlay), this.mask.width = i, this.mask.height = i, this._maskTexture = new H(t, { target: I.TEXTURE_2D, pixelFormat: y.ALPHA, internalFormat: y.ALPHA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.NEAREST, flipped: !0 }, this.mask);
    const a = 1 / this._magnifier.factor;
    this._readbackTexture = new H(t, { target: I.TEXTURE_2D, pixelFormat: y.RGBA, internalFormat: y.RGBA, dataType: C.UNSIGNED_BYTE, wrapMode: U.CLAMP_TO_EDGE, samplingMode: S.LINEAR, flipped: !1, width: Math.ceil(a * i), height: Math.ceil(a * i) });
  }
}
export {
  th as GraphicContainer,
  Jl as GraphicsView2D,
  zl as LabelManager,
  Kl as MagnifierView2D,
  jl as MapViewNavigation,
  Il as Stage
};

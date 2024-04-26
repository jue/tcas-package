import { r as i, C as D, da as L, db as R, w as h, cc as b, dc as M, dd as G, l as P } from "./index-Ek1MTSEY.js";
import { e as _, f as j, t as k, r as q, a as z, n as Q, b as B } from "./vec33-xPYzdI97.js";
import { n as V, c as H, r as w, a as J, t as A, b as K, d as U, f as W, e as X, o as Y, i as Z, g as tt, h as et, j as ot, k as nt, l as rt } from "./DefaultMaterial_COLOR_GAMMA-Zoa1u8xf.js";
import { p as st, m as at, c as it, f as ct } from "./meshFeatureSet-xd1tbD2h.js";
import { c as S, x as N, L as lt, O as F, i as O, E as ut, T as ft, u as mt } from "./BufferView-iMd5U1JV.js";
import { k as pt } from "./georeference-WRaZC6oB.js";
import { E as C, D as T } from "./enums-n72NRQQZ.js";
import "vue";
import "./types-P8vOpb2s.js";
import "./Version-sFmbM26K.js";
import "./quat-Pv0iCRyB.js";
import "./vec4-ehH7P-M2.js";
import "./earcut-80XuLCNX.js";
import "./deduplicate-r17RWnFm.js";
async function jt(t, e, n) {
  const s = new V(dt(n)), o = (await H(s, e, n, !0)).model, f = o.lods.shift(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  o.textures.forEach(($, E) => l.set(E, $t($))), o.materials.forEach(($, E) => c.set(E, ht($, l)));
  const a = xt(f);
  for (const $ of a.parts)
    bt(a, $, c);
  const { position: d, normal: u, tangent: r, color: m, texCoord0: p } = a.vertexAttributes, x = { position: d.typedBuffer, normal: i(u) ? u.typedBuffer : null, tangent: i(r) ? r.typedBuffer : null, uv: i(p) ? p.typedBuffer : null, color: i(m) ? m.typedBuffer : null }, v = pt(x, t, n);
  return { transform: v.transform, components: a.components, spatialReference: t.spatialReference, vertexAttributes: new st({ position: v.vertexAttributes.position, normal: v.vertexAttributes.normal, tangent: v.vertexAttributes.tangent, color: x.color, uv: x.uv }) };
}
function dt(t) {
  return t != null && t.resolveFile ? { busy: !1, request: async (e, n, s) => {
    const o = t.resolveFile(e);
    return (await D(o, { responseType: n === "image" ? "image" : n === "binary" ? "array-buffer" : "json", signal: i(s) ? s.signal : null })).data;
  } } : null;
}
function y(t, e) {
  if (P(t))
    return "-";
  const n = t.typedBuffer;
  return `${L(e, n.buffer, () => e.size)}/${n.byteOffset}/${n.byteLength}`;
}
function gt(t) {
  return i(t) ? t.toString() : "-";
}
function xt(t) {
  let e = 0;
  const n = { color: !1, tangent: !1, normal: !1, texCoord0: !1 }, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), f = [];
  for (const l of t.parts) {
    const { attributes: { position: c, normal: a, color: d, tangent: u, texCoord0: r } } = l, m = `
      ${y(c, s)}/
      ${y(a, s)}/
      ${y(d, s)}/
      ${y(u, s)}/
      ${y(r, s)}/
      ${gt(l.transform)}
    `;
    let p = !1;
    const x = L(o, m, () => (p = !0, { start: e, length: c.count }));
    p && (e += c.count), a && (n.normal = !0), d && (n.color = !0), u && (n.tangent = !0), r && (n.texCoord0 = !0), f.push({ gltf: l, writeVertices: p, region: x });
  }
  return { vertexAttributes: { position: w(ft, e), normal: n.normal ? w(O, e) : null, tangent: n.tangent ? w(S, e) : null, color: n.color ? w(N, e) : null, texCoord0: n.texCoord0 ? w(mt, e) : null }, parts: f, components: [] };
}
function $t(t) {
  return new at({ data: t.data, wrap: Et(t.parameters.wrap) });
}
function ht(t, e) {
  const n = new R(At(t.color, t.opacity)), s = t.emissiveFactor ? new R(Ct(t.emissiveFactor)) : null;
  return new it({ color: n, colorTexture: h(b(t.textureColor, (o) => e.get(o))), normalTexture: h(b(t.textureNormal, (o) => e.get(o))), emissiveColor: s, emissiveTexture: h(b(t.textureEmissive, (o) => e.get(o))), occlusionTexture: h(b(t.textureOcclusion, (o) => e.get(o))), alphaMode: vt(t.alphaMode), alphaCutoff: t.alphaCutoff, doubleSided: t.doubleSided, metallic: t.metallicFactor, roughness: t.roughnessFactor, metallicRoughnessTexture: h(b(t.textureMetallicRoughness, (o) => e.get(o))) });
}
function bt(t, e, n) {
  e.writeVertices && wt(t, e);
  const s = e.gltf, o = yt(s.indices || s.attributes.position.count, s.primitiveType), f = e.region.start;
  if (f)
    for (let l = 0; l < o.length; l++)
      o[l] += f;
  t.components.push(new ct({ faces: o, material: n.get(s.material), trustSourceNormals: !0 }));
}
function wt(t, e) {
  const { position: n, normal: s, tangent: o, color: f, texCoord0: l } = t.vertexAttributes, c = e.region.start, { attributes: a, transform: d } = e.gltf, u = a.position.count;
  if (_(n.slice(c, u), a.position, d), i(a.normal) && i(s)) {
    const r = M(B(), d);
    j(s.slice(c, u), a.normal, r);
  } else
    i(s) && k(s, 0, 0, 1, { dstIndex: c, count: u });
  if (i(a.tangent) && i(o)) {
    const r = M(B(), d);
    J(o.slice(c, u), a.tangent, r);
  } else
    i(o) && A(o, 0, 0, 1, 1, { dstIndex: c, count: u });
  if (i(a.texCoord0) && i(l) ? K(l.slice(c, u), a.texCoord0) : i(l) && U(l, 0, 0, { dstIndex: c, count: u }), i(a.color) && i(f)) {
    const r = a.color, m = f.slice(c, u);
    if (r.elementCount === 4)
      r instanceof S ? W(m, r, 255) : r instanceof N ? X(m, r) : r instanceof lt && Y(m, r, 8);
    else {
      A(m, 255, 255, 255, 255);
      const p = F.fromTypedArray(m.typedBuffer, m.typedBufferStride);
      r instanceof O ? q(p, r, 255) : r instanceof F ? z(p, r) : r instanceof ut && Q(p, r, 8);
    }
  } else
    i(f) && A(f.slice(c, u), 255, 255, 255, 255);
}
function yt(t, e) {
  switch (e) {
    case C.TRIANGLES:
      return et(t, nt);
    case C.TRIANGLE_STRIP:
      return tt(t);
    case C.TRIANGLE_FAN:
      return Z(t);
  }
}
function vt(t) {
  switch (t) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function Et(t) {
  return { horizontal: I(t.s), vertical: I(t.t) };
}
function I(t) {
  switch (t) {
    case T.CLAMP_TO_EDGE:
      return "clamp";
    case T.MIRRORED_REPEAT:
      return "mirror";
    case T.REPEAT:
      return "repeat";
  }
}
function g(t) {
  return t ** (1 / rt) * 255;
}
function At(t, e) {
  return ot(g(t[0]), g(t[1]), g(t[2]), e);
}
function Ct(t) {
  return G(g(t[0]), g(t[1]), g(t[2]));
}
export {
  jt as loadGLTFMesh
};

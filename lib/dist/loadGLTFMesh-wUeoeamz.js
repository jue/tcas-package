import { ae as F, fz as R, fD as B, gS as S, gT as C, gU as P, bi as D, gV as L } from "./index-B7TsCcH6.js";
import { e as A } from "./mat3f64-Hpz0k8AN.js";
import { p as N, m as q, c as G, g as U, a as V } from "./meshFeatureSet-AXqPSjt4.js";
import { c as O, x as j, L as K, O as E, i as z, E as Q, T as k, u as H } from "./BufferView-9WKeEt1v.js";
import { t as J, f as W, i as X, o as M } from "./vec32-5hPMwhXf.js";
import { n as Y, l as Z, o as ee, f as te, r as oe, a as ne, b as v, c as re, d as se, e as I, g as ae, h as le, i as ie } from "./DefaultMaterial_COLOR_GAMMA-0_UB50SS.js";
import { e as ue } from "./types-nplYPJLd.js";
import { q as ce } from "./georeference-uYlyJui5.js";
import { t as fe } from "./resourceUtils-OYKAQSQ8.js";
import { D as w } from "./enums-Vyj7xNgv.js";
import "vue";
import "./imageUtils-taVEByxa.js";
import "./MeshGeoreferencedRelativeVertexSpace-GiW1X68I.js";
import "./MeshLocalVertexSpace--G56oOae.js";
import "./earcut-azOcA8wo.js";
import "./Indices-A_XcB7ng.js";
import "./deduplicate-QgcWO_jK.js";
import "./External-Y6BBy4hH.js";
import "./mat4f64-kAXAVCnO.js";
import "./spatialReferenceEllipsoidUtils-DsOZj49r.js";
import "./quat-JSHGXzum.js";
import "./quatf64-7HSf-W7T.js";
import "./basicInterfaces-qgybO4Nz.js";
function me(e, o, t) {
  const a = e.typedBuffer, s = e.typedBufferStride, r = o.typedBuffer, f = o.typedBufferStride, l = t ? t.count : o.count;
  let i = (t && t.dstIndex ? t.dstIndex : 0) * s, c = (t && t.srcIndex ? t.srcIndex : 0) * f;
  for (let u = 0; u < l; ++u) {
    for (let n = 0; n < 9; ++n)
      a[i + n] = r[c + n];
    i += s, c += f;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: me }, Symbol.toStringTag, { value: "Module" }));
function pe(e, o, t) {
  const a = e.typedBuffer, s = e.typedBufferStride, r = o.typedBuffer, f = o.typedBufferStride, l = t ? t.count : o.count;
  let i = (t && t.dstIndex ? t.dstIndex : 0) * s, c = (t && t.srcIndex ? t.srcIndex : 0) * f;
  for (let u = 0; u < l; ++u) {
    for (let n = 0; n < 16; ++n)
      a[i + n] = r[c + n];
    i += s, c += f;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: pe }, Symbol.toStringTag, { value: "Module" }));
function T(e, o) {
  return new e(new ArrayBuffer(o * e.ElementCount * ue(e.ElementType)));
}
async function He(e, o, t) {
  const a = { ...t, useTransform: (t == null ? void 0 : t.useTransform) ?? !0 }, s = new Y(de(a)), r = (await Z(s, o, a, !0)).model, f = r.lods.shift(), l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  r.textures.forEach((g, h) => l.set(h, Te(g))), r.materials.forEach((g, h) => i.set(h, $e(g, l)));
  const c = ge(f);
  for (const g of c.parts)
    ye(c, g, i);
  const { position: u, normal: n, tangent: m, color: p, texCoord0: y } = c.vertexAttributes, b = { position: u.typedBuffer, normal: n != null ? n.typedBuffer : null, tangent: m != null ? m.typedBuffer : null, uv: y != null ? y.typedBuffer : null, color: p != null ? p.typedBuffer : null }, x = ce(b, e, a);
  return { transform: x.transform, vertexSpace: x.vertexSpace, components: c.components, spatialReference: e.spatialReference, vertexAttributes: new N({ position: x.vertexAttributes.position, normal: x.vertexAttributes.normal, tangent: x.vertexAttributes.tangent, color: b.color, uv: b.uv }) };
}
function de(e) {
  const o = e == null ? void 0 : e.resolveFile;
  return o ? { busy: !1, request: async (t, a, s) => {
    const r = o(t);
    return (await F(r, { responseType: a === "image" ? "image" : a === "binary" ? "array-buffer" : "json", signal: s != null ? s.signal : null })).data;
  } } : null;
}
function $(e, o) {
  if (e == null)
    return "-";
  const t = e.typedBuffer;
  return `${R(o, t.buffer, () => o.size)}/${t.byteOffset}/${t.byteLength}`;
}
function xe(e) {
  return e != null ? e.toString() : "-";
}
function ge(e) {
  let o = 0;
  const t = { color: !1, tangent: !1, normal: !1, texCoord0: !1 }, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = [];
  for (const f of e.parts) {
    const { attributes: { position: l, normal: i, color: c, tangent: u, texCoord0: n } } = f, m = `
      ${$(l, a)}/
      ${$(i, a)}/
      ${$(c, a)}/
      ${$(u, a)}/
      ${$(n, a)}/
      ${xe(f.transform)}
    `;
    let p = !1;
    const y = R(s, m, () => (p = !0, { start: o, length: l.count }));
    p && (o += l.count), i && (t.normal = !0), c && (t.color = !0), u && (t.tangent = !0), n && (t.texCoord0 = !0), r.push({ gltf: f, writeVertices: p, region: y });
  }
  return { vertexAttributes: { position: T(k, o), normal: t.normal ? T(z, o) : null, tangent: t.tangent ? T(O, o) : null, color: t.color ? T(j, o) : null, texCoord0: t.texCoord0 ? T(H, o) : null }, parts: r, components: [] };
}
function Te(e) {
  return new q({ data: (fe(e.data), e.data), wrap: ve(e.parameters.wrap) });
}
function $e(e, o) {
  const t = new B(we(e.color, e.opacity)), a = e.emissiveFactor ? new B(Be(e.emissiveFactor)) : null, s = (r) => r ? new V({ scale: r.scale ? [r.scale[0], r.scale[1]] : [1, 1], rotation: L(r.rotation ?? 0), offset: r.offset ? [r.offset[0], r.offset[1]] : [0, 0] }) : null;
  return new G({ color: t, colorTexture: o.get(e.textureColor), normalTexture: o.get(e.textureNormal), emissiveColor: a, emissiveTexture: o.get(e.textureEmissive), occlusionTexture: o.get(e.textureOcclusion), alphaMode: he(e.alphaMode), alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, metallic: e.metallicFactor, roughness: e.roughnessFactor, metallicRoughnessTexture: o.get(e.textureMetallicRoughness), colorTextureTransform: s(e.colorTextureTransform), normalTextureTransform: s(e.normalTextureTransform), occlusionTextureTransform: s(e.occlusionTextureTransform), emissiveTextureTransform: s(e.emissiveTextureTransform), metallicRoughnessTextureTransform: s(e.metallicRoughnessTextureTransform) });
}
function ye(e, o, t) {
  o.writeVertices && be(e, o);
  const { indices: a, attributes: s, primitiveType: r, material: f } = o.gltf;
  let l = ee(a || s.position.count, r);
  const i = o.region.start;
  if (i) {
    const c = new Uint32Array(l);
    for (let u = 0; u < l.length; u++)
      c[u] += i;
    l = c;
  }
  e.components.push(new U({ faces: l, material: t.get(f), shading: s.normal ? "source" : "flat", trustSourceNormals: !0 }));
}
function be(e, o) {
  const { position: t, normal: a, tangent: s, color: r, texCoord0: f } = e.vertexAttributes, l = o.region.start, { attributes: i, transform: c } = o.gltf, u = i.position.count;
  if (J(t.slice(l, u), i.position, c), i.normal != null && a != null) {
    const n = S(A(), c), m = a.slice(l, u);
    W(m, i.normal, n), C(n) && X(m, m);
  } else
    a != null && te(a, 0, 0, 1, { dstIndex: l, count: u });
  if (i.tangent != null && s != null) {
    const n = S(A(), c), m = s.slice(l, u);
    oe(m, i.tangent, n), C(n) && ne(m, m);
  } else
    s != null && v(s, 0, 0, 1, 1, { dstIndex: l, count: u });
  if (i.texCoord0 != null && f != null ? re(f.slice(l, u), i.texCoord0) : f != null && se(f, 0, 0, { dstIndex: l, count: u }), i.color != null && r != null) {
    const n = i.color, m = r.slice(l, u);
    if (n.elementCount === 4)
      n instanceof O ? I(m, n, 255) : n instanceof j ? ae(m, n) : n instanceof K && I(m, n, 1 / 256);
    else {
      v(m, 255, 255, 255, 255);
      const p = E.fromTypedArray(m.typedBuffer, m.typedBufferStride);
      n instanceof z ? M(p, n, 255) : n instanceof E ? le(p, n) : n instanceof Q && M(p, n, 1 / 256);
    }
  } else
    r != null && v(r.slice(l, u), 255, 255, 255, 255);
}
function he(e) {
  switch (e) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function ve(e) {
  return { horizontal: _(e.s), vertical: _(e.t) };
}
function _(e) {
  switch (e) {
    case w.CLAMP_TO_EDGE:
      return "clamp";
    case w.MIRRORED_REPEAT:
      return "mirror";
    case w.REPEAT:
      return "repeat";
  }
}
function d(e) {
  return e ** (1 / ie) * 255;
}
function we(e, o) {
  return P(d(e[0]), d(e[1]), d(e[2]), o);
}
function Be(e) {
  return D(d(e[0]), d(e[1]), d(e[2]));
}
export {
  He as loadGLTFMesh
};

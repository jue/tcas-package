import { eF as G, fl as c, r as q } from "./index-j1oaLRcp.js";
import "vue";
var U, O;
(function(e) {
  e[e.None = 0] = "None", e[e.Int16 = 1] = "Int16", e[e.Int32 = 2] = "Int32";
})(U || (U = {})), function(e) {
  e[e.Replace = 0] = "Replace", e[e.Outside = 1] = "Outside", e[e.Inside = 2] = "Inside", e[e.Finished = 3] = "Finished";
}(O || (O = {}));
function J() {
  return P || (P = new Promise((e) => import("./i3s-MnZWHzgj.js").then((t) => t.i).then(({ default: t }) => {
    const r = t({ locateFile: K, onRuntimeInitialized: () => e(r) });
    delete r.then;
  })).catch((e) => Promise.reject(e))), P;
}
function K(e) {
  return G(`geoscene/libs/i3s/${e}`);
}
let P;
var x, p, D, B, $;
(function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.Culled = 1] = "Culled", e[e.NotChecked = 2] = "NotChecked";
})(x || (x = {})), function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.PotentiallyModified = 1] = "PotentiallyModified", e[e.Culled = 2] = "Culled", e[e.Unknown = 3] = "Unknown", e[e.NotChecked = 4] = "NotChecked";
}(p || (p = {}));
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Uncached = 1] = "Uncached", e[e.Cached = 2] = "Cached";
})(D || (D = {})), function(e) {
  e[e.None = 0] = "None", e[e.MaxScreenThreshold = 1] = "MaxScreenThreshold", e[e.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e[e.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e[e.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(B || (B = {})), function(e) {
  e[e.Hole = 0] = "Hole", e[e.Leaf = 1] = "Leaf";
}($ || ($ = {}));
async function ee(e) {
  await g();
  const t = [e.geometryBuffer];
  return { result: k(e, t), transferList: t };
}
async function te(e) {
  var t;
  await g();
  const r = [e.geometryBuffer], { geometryBuffer: a } = e, i = a.byteLength, d = o._malloc(i), f = new Uint8Array(o.HEAPU8.buffer, d, i);
  f.set(new Uint8Array(a));
  const m = o.dracoDecompressPointCloudData(d, f.byteLength);
  if (o._free(d), m.error.length > 0)
    throw `i3s.wasm: ${m.error}`;
  const y = ((t = m.featureIds) == null ? void 0 : t.length) > 0 ? c(m.featureIds) : null, w = c(m.positions);
  return y && r.push(y.buffer), r.push(w.buffer), { result: { positions: w, featureIds: y }, transferList: r };
}
async function ne(e) {
  await g(), W(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function oe(e) {
  await g(), Q(e);
}
async function re(e) {
  await g(), o.setLegacySchema(e.context, e.jsonSchema);
}
function ie(e) {
  H(e);
}
let L, o;
function Q(e) {
  const t = e.modifications, r = o._malloc(8 * t.length), a = new Float64Array(o.HEAPU8.buffer, r, t.length);
  for (let i = 0; i < t.length; ++i)
    a[i] = t[i];
  o.setModifications(e.context, r, t.length, e.isGeodetic), o._free(r);
}
function k(e, t) {
  if (!o)
    return null;
  const { context: r, localOrigin: a, globalTrafo: i, mbs: d, obb: f, elevationOffset: m, geometryBuffer: y, geometryDescriptor: w, indexToVertexProjector: Y, vertexToRenderProjector: j } = e, A = o._malloc(y.byteLength), T = 33, I = o._malloc(T * Float64Array.BYTES_PER_ELEMENT), M = new Uint8Array(o.HEAPU8.buffer, A, y.byteLength);
  M.set(new Uint8Array(y));
  const s = new Float64Array(o.HEAPU8.buffer, I, T);
  E(s, a);
  let l = s.byteOffset + 3 * s.BYTES_PER_ELEMENT, u = new Float64Array(s.buffer, l);
  E(u, i), l += 16 * s.BYTES_PER_ELEMENT, u = new Float64Array(s.buffer, l), E(u, d), l += 4 * s.BYTES_PER_ELEMENT, q(f) && (u = new Float64Array(s.buffer, l), E(u, f.center), l += 3 * s.BYTES_PER_ELEMENT, u = new Float64Array(s.buffer, l), E(u, f.halfSize), l += 3 * s.BYTES_PER_ELEMENT, u = new Float64Array(s.buffer, l), E(u, f.quaternion));
  const R = w, z = { isDraco: !1, isLegacy: !1, color: e.layouts.some((b) => b.some((h) => h.name === "color")), normal: e.needNormals && e.layouts.some((b) => b.some((h) => h.name === "normalCompressed")), uv0: e.layouts.some((b) => b.some((h) => h.name === "uv0")), uvRegion: e.layouts.some((b) => b.some((h) => h.name === "uvRegion")), featureIndex: R.featureIndex }, n = o.process(r, !!e.obb, A, M.byteLength, R, z, I, m, Y, j, e.normalReferenceFrame);
  if (o._free(I), o._free(A), n.error.length > 0)
    throw `i3s.wasm: ${n.error}`;
  if (n.discarded)
    return null;
  const _ = n.componentOffsets.length > 0 ? c(n.componentOffsets) : null, F = n.featureIds.length > 0 ? c(n.featureIds) : null, S = c(n.interleavedVertedData).buffer, C = n.indicesType === U.Int16 ? c(new Uint16Array(n.indices.buffer, n.indices.byteOffset, n.indices.byteLength / 2)) : c(new Uint32Array(n.indices.buffer, n.indices.byteOffset, n.indices.byteLength / 4)), v = c(n.positions), N = n.positionIndicesType === U.Int16 ? c(new Uint16Array(n.positionIndices.buffer, n.positionIndices.byteOffset, n.positionIndices.byteLength / 2)) : c(new Uint32Array(n.positionIndices.buffer, n.positionIndices.byteOffset, n.positionIndices.byteLength / 4)), V = { layout: e.layouts[0], interleavedVertexData: S, indices: C, hasColors: n.hasColors, hasModifications: n.hasModifications, positionData: { data: v, indices: N } };
  return F && t.push(F.buffer), _ && t.push(_.buffer), t.push(S), t.push(C.buffer), t.push(v.buffer), t.push(N.buffer), { componentOffsets: _, featureIds: F, transformedGeometry: V, obb: n.obb };
}
function se(e) {
  return e === 0 ? p.Unmodified : e === 1 ? p.PotentiallyModified : e === 2 ? p.Culled : p.Unknown;
}
function W(e) {
  const { context: t, buffer: r } = e, a = o._malloc(r.byteLength), i = r.byteLength / Float64Array.BYTES_PER_ELEMENT, d = new Float64Array(o.HEAPU8.buffer, a, i), f = new Float64Array(r);
  d.set(f), o.filterOBBs(t, a, i), f.set(d), o._free(a);
}
function H(e) {
  o && o.destroy(e);
}
function E(e, t) {
  for (let r = 0; r < t.length; ++r)
    e[r] = t[r];
}
function g() {
  return o ? Promise.resolve() : (L || (L = J().then((e) => {
    o = e, L = null;
  })), L);
}
const ae = { transform: k, destroy: H };
export {
  ie as destroyContext,
  te as dracoDecompressPointCloudData,
  ne as filterObbsForModifications,
  W as filterObbsForModificationsSync,
  g as initialize,
  se as interpretObbModificationResults,
  ee as process,
  re as setLegacySchema,
  oe as setModifications,
  Q as setModificationsSync,
  ae as test
};

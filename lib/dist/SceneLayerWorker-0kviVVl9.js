import { eg as q, a9 as O } from "./index-B7TsCcH6.js";
import { p as K, m as Q, y as W } from "./MeshLocalVertexSpace--G56oOae.js";
import { m as X } from "./MeshGeoreferencedRelativeVertexSpace-GiW1X68I.js";
import { n as Z, s as ee } from "./vec32-5hPMwhXf.js";
import "./sphere-Qkjccl62.js";
import "vue";
import "./ByteSizeUnit-dxTdcbwN.js";
import "./mat3f64-Hpz0k8AN.js";
import "./mat4f64-kAXAVCnO.js";
import "./quatf64-7HSf-W7T.js";
var R, D;
(function(e) {
  e[e.None = 0] = "None", e[e.Int16 = 1] = "Int16", e[e.Int32 = 2] = "Int32";
})(R || (R = {})), function(e) {
  e[e.Replace = 0] = "Replace", e[e.Outside = 1] = "Outside", e[e.Inside = 2] = "Inside", e[e.Finished = 3] = "Finished";
}(D || (D = {}));
function te() {
  return P || (P = new Promise((e) => import("./i3s-xo2LIlEj.js").then((t) => t.i).then(({ default: t }) => {
    const o = t({ locateFile: ne, onRuntimeInitialized: () => e(o) });
    delete o.then;
  })).catch((e) => {
    throw e;
  })), P;
}
function ne(e) {
  return q(`geoscene/libs/i3s/${e}`);
}
let P;
var $, w, B, j, k;
(function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.Culled = 1] = "Culled", e[e.NotChecked = 2] = "NotChecked";
})($ || ($ = {})), function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.PotentiallyModified = 1] = "PotentiallyModified", e[e.Culled = 2] = "Culled", e[e.Unknown = 3] = "Unknown", e[e.NotChecked = 4] = "NotChecked";
}(w || (w = {}));
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Uncached = 1] = "Uncached", e[e.Cached = 2] = "Cached";
})(B || (B = {})), function(e) {
  e[e.None = 0] = "None", e[e.MaxScreenThreshold = 1] = "MaxScreenThreshold", e[e.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e[e.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e[e.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(j || (j = {})), function(e) {
  e[e.Hole = 0] = "Hole", e[e.Leaf = 1] = "Leaf";
}(k || (k = {}));
async function he(e) {
  await L();
  const t = [e.geometryBuffer];
  return { result: H(e, t), transferList: t };
}
async function pe(e) {
  var f;
  await L();
  const t = [e.geometryBuffer], { geometryBuffer: o } = e, a = o.byteLength, s = r._malloc(a), u = new Uint8Array(r.HEAPU8.buffer, s, a);
  u.set(new Uint8Array(o));
  const i = r.dracoDecompressPointCloudData(s, u.byteLength);
  if (r._free(s), i.error.length > 0)
    throw new Error(`i3s.wasm: ${i.error}`);
  const d = ((f = i.featureIds) == null ? void 0 : f.length) > 0 ? i.featureIds.slice() : null, m = i.positions.slice();
  return d && t.push(d.buffer), t.push(m.buffer), { result: { positions: m, featureIds: d }, transferList: t };
}
async function be(e) {
  await L(), re(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function ge(e) {
  await L(), oe(e);
}
async function Ee(e) {
  await L(), r.setLegacySchema(e.context, e.jsonSchema);
}
async function we(e) {
  const { localMatrix: t, origin: o, positions: a, vertexSpace: s, local: u } = e, i = O.fromJSON(e.inSpatialReference), d = O.fromJSON(e.outSpatialReference), m = { georeferenced: K, georeferencedRelative: X, local: Q }[s.type].fromJSON(s);
  let f;
  if (m.type === "georeferenced") {
    const { projectBuffer: l, initializeProjection: g } = await import("./index-B7TsCcH6.js").then((c) => c.lC);
    await g(i, d), f = new Float64Array(a.length), l(a, i, 0, f, d, 0, f.length / 3);
  } else {
    const { project: l } = await import("./georeference-uYlyJui5.js").then((g) => g.c);
    f = W(l({ positions: a, transform: t ? { localMatrix: t } : void 0, vertexSpace: m, inSpatialReference: i, outSpatialReference: d, local: u }));
  }
  const U = f.length, [_, A, S] = o;
  for (let l = 0; l < U; l += 3)
    f[l] -= _, f[l + 1] -= A, f[l + 2] -= S;
  return { result: { projected: f, original: a }, transferList: [f.buffer, a.buffer] };
}
async function Ae({ normalMatrix: e, normals: t }) {
  const o = new Float32Array(t.length);
  return Z(o, t, e), ee(o, o), { result: { transformed: o, original: t }, transferList: [o.buffer, t.buffer] };
}
function Le(e) {
  Y(e);
}
let I, r;
function oe(e) {
  const t = e.modifications, o = r._malloc(8 * t.length), a = new Float64Array(r.HEAPU8.buffer, o, t.length);
  for (let s = 0; s < t.length; ++s)
    a[s] = t[s];
  r.setModifications(e.context, o, t.length, e.isGeodetic), r._free(o);
}
function H(e, t) {
  if (!r)
    return null;
  const { context: o, localOrigin: a, globalTrafo: s, mbs: u, obb: i, elevationOffset: d, geometryBuffer: m, geometryDescriptor: f, indexToVertexProjector: U, vertexToRenderProjector: _ } = e, A = r._malloc(m.byteLength), S = 33, l = r._malloc(S * Float64Array.BYTES_PER_ELEMENT), g = new Uint8Array(r.HEAPU8.buffer, A, m.byteLength);
  g.set(new Uint8Array(m));
  const c = new Float64Array(r.HEAPU8.buffer, l, S);
  E(c, a);
  let y = c.byteOffset + 3 * c.BYTES_PER_ELEMENT, h = new Float64Array(c.buffer, y);
  E(h, s), y += 16 * c.BYTES_PER_ELEMENT, h = new Float64Array(c.buffer, y), E(h, u), y += 4 * c.BYTES_PER_ELEMENT, i != null && (h = new Float64Array(c.buffer, y), E(h, i.center), y += 3 * c.BYTES_PER_ELEMENT, h = new Float64Array(c.buffer, y), E(h, i.halfSize), y += 3 * c.BYTES_PER_ELEMENT, h = new Float64Array(c.buffer, y), E(h, i.quaternion));
  const T = f, z = { isDraco: !1, isLegacy: !1, color: e.layouts.some((p) => p.some((b) => b.name === "color")), normal: e.needNormals && e.layouts.some((p) => p.some((b) => b.name === "normalCompressed")), uv0: e.layouts.some((p) => p.some((b) => b.name === "uv0")), uvRegion: e.layouts.some((p) => p.some((b) => b.name === "uvRegion")), featureIndex: T.featureIndex }, n = r.process(o, !!e.obb, A, g.byteLength, T, z, l, d, U, _, e.normalReferenceFrame);
  if (r._free(l), r._free(A), n.error.length > 0)
    throw new Error(`i3s.wasm: ${n.error}`);
  if (n.discarded)
    return null;
  const M = n.componentOffsets.length > 0 ? n.componentOffsets.slice() : null, F = n.featureIds.length > 0 ? n.featureIds.slice() : null, J = n.anchorIds.length > 0 ? Array.from(n.anchorIds) : null, V = n.anchors.length > 0 ? Array.from(n.anchors) : null, x = n.interleavedVertedData.slice().buffer, v = n.indicesType === R.Int16 ? new Uint16Array(n.indices.buffer, n.indices.byteOffset, n.indices.byteLength / 2).slice() : new Uint32Array(n.indices.buffer, n.indices.byteOffset, n.indices.byteLength / 4).slice(), C = n.positions.slice(), N = n.positionIndicesType === R.Int16 ? new Uint16Array(n.positionIndices.buffer, n.positionIndices.byteOffset, n.positionIndices.byteLength / 2).slice() : new Uint32Array(n.positionIndices.buffer, n.positionIndices.byteOffset, n.positionIndices.byteLength / 4).slice(), G = { layout: e.layouts[0], interleavedVertexData: x, indices: v, hasColors: n.hasColors, hasModifications: n.hasModifications, positionData: { data: C, indices: N } };
  return F && t.push(F.buffer), M && t.push(M.buffer), t.push(x), t.push(v.buffer), t.push(C.buffer), t.push(N.buffer), { componentOffsets: M, featureIds: F, anchorIds: J, anchors: V, transformedGeometry: G, obb: n.obb };
}
function Se(e) {
  return e === 0 ? w.Unmodified : e === 1 ? w.PotentiallyModified : e === 2 ? w.Culled : w.Unknown;
}
function re(e) {
  const { context: t, buffer: o } = e, a = r._malloc(o.byteLength), s = o.byteLength / Float64Array.BYTES_PER_ELEMENT, u = new Float64Array(r.HEAPU8.buffer, a, s), i = new Float64Array(o);
  u.set(i), r.filterOBBs(t, a, s), i.set(u), r._free(a);
}
function Y(e) {
  r && (r.destroy(e), r = null);
}
function E(e, t) {
  for (let o = 0; o < t.length; ++o)
    e[o] = t[o];
}
function L() {
  return r ? Promise.resolve() : (I || (I = te().then((e) => {
    r = e, I = null;
  })), I);
}
const Ie = { transform: H, destroy: Y };
export {
  Le as destroyContext,
  pe as dracoDecompressPointCloudData,
  be as filterObbsForModifications,
  re as filterObbsForModificationsSync,
  L as initialize,
  Se as interpretObbModificationResults,
  he as process,
  we as project,
  Ee as setLegacySchema,
  ge as setModifications,
  oe as setModificationsSync,
  Ie as test,
  Ae as transformNormals
};

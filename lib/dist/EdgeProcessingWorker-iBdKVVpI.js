import { I as f } from "./InterleavedLayout-bbXod9fB.js";
import { f as p, u as c, p as u, A as d, a as g, m } from "./edgeProcessing-qKYAZjdx.js";
import "./BufferView-RWdCVbdj.js";
import "./index-h53IWweP.js";
import "vue";
import "./types-nplYPJLd.js";
import "./deduplicate-IbwsnwJB.js";
import "./Indices-KRi0uqNt.js";
import "./VertexAttribute-g45rDpm-.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
function a(t, e) {
  return e.push(t.buffer), { buffer: t.buffer, layout: new f(t.layout) };
}
class S {
  async extract(e) {
    const i = o(e), n = p(i), r = [i.data.buffer];
    return { result: h(n, r), transferList: r };
  }
  async extractComponentsEdgeLocations(e) {
    const i = o(e), n = c(i.data, i.skipDeduplicate, i.indices, i.indicesLength), r = u(n, D, l), s = [];
    return { result: a(r.regular.instancesData, s), transferList: s };
  }
  async extractEdgeLocations(e) {
    const i = o(e), n = c(i.data, i.skipDeduplicate, i.indices, i.indicesLength), r = u(n, L, l), s = [];
    return { result: a(r.regular.instancesData, s), transferList: s };
  }
}
function o(t) {
  return { data: d.createView(t.dataBuffer), indices: t.indicesType === "Uint32Array" ? new Uint32Array(t.indices) : t.indicesType === "Uint16Array" ? new Uint16Array(t.indices) : t.indices, indicesLength: t.indicesLength, writerSettings: t.writerSettings, skipDeduplicate: t.skipDeduplicate };
}
function h(t, e) {
  return e.push(t.regular.lodInfo.lengths.buffer), e.push(t.silhouette.lodInfo.lengths.buffer), { regular: { instancesData: a(t.regular.instancesData, e), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: a(t.silhouette.instancesData, e), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
class w {
  allocate(e) {
    return g.createBuffer(e);
  }
  trim(e, i) {
    return e.slice(0, i);
  }
  write(e, i, n) {
    e.position0.setVec(i, n.position0), e.position1.setVec(i, n.position1);
  }
}
class y {
  allocate(e) {
    return m.createBuffer(e);
  }
  trim(e, i) {
    return e.slice(0, i);
  }
  write(e, i, n) {
    e.position0.setVec(i, n.position0), e.position1.setVec(i, n.position1), e.componentIndex.set(i, n.componentIndex);
  }
}
const L = new w(), D = new y(), l = { allocate: () => null, write: () => {
}, trim: () => null };
export {
  S as default
};
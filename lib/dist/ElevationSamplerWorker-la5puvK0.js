import { z as l } from "./index-HxXrdrYt.js";
import { h as m } from "./PooledRBush-A3E2ngqM.js";
import { T as h } from "./georeference-ato9TFZB.js";
import "vue";
import "./mat3f64-Hpz0k8AN.js";
import "./mat4f64-kAXAVCnO.js";
import "./spatialReferenceEllipsoidUtils-ibBSh7CN.js";
import "./MeshLocalVertexSpace-0ZxfEBzd.js";
import "./MeshGeoreferencedRelativeVertexSpace-L53wWd_5.js";
import "./quat-tmewNzgu.js";
import "./quatf64-7HSf-W7T.js";
import "./vec32-9QTi3NEX.js";
import "./BufferView-1zPuZK8o.js";
class b {
  async createIndex(t, r) {
    const o = new Array();
    if (!t.vertexAttributes || !t.vertexAttributes.position)
      return new m();
    const a = this._createMeshData(t), n = r != null ? await r.invoke("createIndexThread", a, { transferList: o }) : this.createIndexThread(a).result;
    return this._createPooledRBush().fromJSON(n);
  }
  createIndexThread(t) {
    const r = new Float64Array(t.position), o = this._createPooledRBush();
    return t.components ? this._createIndexComponentsThread(o, r, t.components.map((a) => new Uint32Array(a))) : this._createIndexAllThread(o, r);
  }
  _createIndexAllThread(t, r) {
    const o = new Array(r.length / 9);
    let a = 0;
    for (let n = 0; n < r.length; n += 9)
      o[a++] = p(r, n, n + 3, n + 6);
    return t.load(o), { result: t.toJSON() };
  }
  _createIndexComponentsThread(t, r, o) {
    let a = 0;
    for (const s of o)
      a += s.length / 3;
    const n = new Array(a);
    let c = 0;
    for (const s of o)
      for (let i = 0; i < s.length; i += 3)
        n[c++] = p(r, 3 * s[i], 3 * s[i + 1], 3 * s[i + 2]);
    return t.load(n), { result: t.toJSON() };
  }
  _createMeshData(t) {
    const r = (t.vertexSpace.isRelative ? h({ position: t.vertexAttributes.position, normal: null, tangent: null }, t.vertexSpace, t.transform, t.spatialReference).position : t.vertexAttributes.position).buffer;
    return !t.components || t.components.some((o) => !o.faces) ? { position: r } : { position: r, components: t.components.map((o) => o.faces) };
  }
  _createPooledRBush() {
    return new m(9, l("geoscene-csp-restrictions") ? (t) => t : [".minX", ".minY", ".maxX", ".maxY"]);
  }
}
function p(e, t, r, o) {
  return { minX: Math.min(e[t], e[r], e[o]), maxX: Math.max(e[t], e[r], e[o]), minY: Math.min(e[t + 1], e[r + 1], e[o + 1]), maxY: Math.max(e[t + 1], e[r + 1], e[o + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r], e[r + 1], e[r + 2]], p2: [e[o], e[o + 1], e[o + 2]] };
}
export {
  b as default
};

import { aX as p, eS as l, e as a, d as f, a as S, aD as d, e5 as g, q as h, eT as y, C as J } from "./index-Ek1MTSEY.js";
function $(r) {
  return { geometryType: p(r[0]), geometries: r.map((t) => t.toJSON()) };
}
function N(r, t, o) {
  const e = l(t);
  return r.map((n) => {
    const i = e.fromJSON(n);
    return i.spatialReference = o, i;
  });
}
let s = class extends d {
  constructor(t) {
    super(t), this.geometries = null, this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const t = this.geometries.map(function(n) {
      return n.toJSON();
    }), o = this.geometries[0], e = {};
    return e.outSR = this.outSpatialReference.wkid || JSON.stringify(this.outSpatialReference.toJSON()), e.inSR = o.spatialReference.wkid || JSON.stringify(o.spatialReference.toJSON()), e.geometries = JSON.stringify({ geometryType: p(o), geometries: t }), this.transformation && (e.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (e.transformForward = this.transformForward), e;
  }
};
a([f()], s.prototype, "geometries", void 0), a([f({ json: { read: { source: "outSR" } } })], s.prototype, "outSpatialReference", void 0), a([f()], s.prototype, "transformation", void 0), a([f()], s.prototype, "transformForward", void 0), s = a([S("geoscene.rest.support.ProjectParameters")], s);
const O = s, R = g(O);
async function v(r, t, o) {
  t = R(t);
  const e = h(r), n = { ...e.query, f: "json", ...t.toJSON() }, i = t.outSpatialReference, u = p(t.geometries[0]), c = y(n, o);
  return J(e.path + "/project", c).then(({ data: { geometries: m } }) => N(m, u, i));
}
export {
  O as a,
  v as n,
  N as o,
  $ as r
};

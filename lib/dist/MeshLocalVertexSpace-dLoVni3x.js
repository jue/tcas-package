import { bA as i, bz as u, bg as a, bk as c, a as s, bj as l, c as y, bh as g, az as f, bi as h, b as d } from "./index-h53IWweP.js";
function A(e, r = !1) {
  return e <= i ? r ? new Array(e).fill(0) : new Array(e) : new Float64Array(e);
}
function m(e) {
  return (u(e) ? e.length : e.byteLength / 8) <= i ? Array.from(e) : new Float64Array(e);
}
function x(e, r, t) {
  return Array.isArray(e) ? e.slice(r, r + t) : e.subarray(r, r + t);
}
function $(e, r) {
  for (let t = 0; t < r.length; ++t)
    e[t] = r[t];
  return e;
}
function w(e) {
  return Array.isArray(e) ? new Float64Array(e) : e;
}
let n = class extends a(c) {
  constructor() {
    super({}), this.type = "georeferenced", this.isRelative = !1, this.isGeoreferenced = !0;
  }
};
s([l({ georeferenced: "georeferenced" }, { readOnly: !0 })], n.prototype, "type", void 0), n = s([y("geoscene.geometry.support.MeshGeoreferencedVertexSpace")], n);
const v = n;
let o = class extends a(c) {
  constructor(e) {
    super(e), this.type = "local", this.isRelative = !0, this.isGeoreferenced = !1, this.origin = g();
  }
  getOriginPoint(e) {
    const [r, t, p] = this.origin;
    return new f({ x: r, y: t, z: p, spatialReference: e });
  }
  setOriginFormPoint({ x: e, y: r, z: t }) {
    this.origin = h(e, r, t ?? 0);
  }
};
s([l({ local: "local" }, { readOnly: !0 })], o.prototype, "type", void 0), s([d({ type: [Number], nonNullable: !0, json: { write: !0 } })], o.prototype, "origin", void 0), o = s([y("geoscene.geometry.support.MeshLocalVertexSpace")], o);
const z = o;
export {
  x as a,
  m as e,
  z as m,
  $ as o,
  v as p,
  A as t,
  w as y
};

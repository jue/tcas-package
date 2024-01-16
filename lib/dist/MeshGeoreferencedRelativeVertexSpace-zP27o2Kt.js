import { bg as n, bh as a, az as c, bi as p, a as o, bj as g, b as l, c as y, bk as d } from "./index-h53IWweP.js";
let r = class extends n(d) {
  constructor(e) {
    super(e), this.type = "georeferenced-relative", this.isRelative = !0, this.isGeoreferenced = !0, this.origin = a();
  }
  getOriginPoint(e) {
    const [t, i, s] = this.origin;
    return new c({ x: t, y: i, z: s, spatialReference: e });
  }
  setOriginFormPoint({ x: e, y: t, z: i }) {
    this.origin = p(e, t, i ?? 0);
  }
};
o([g({ georeferencedRelative: "georeferenced-relative" }, { readOnly: !0 })], r.prototype, "type", void 0), o([l({ type: [Number], nonNullable: !0, json: { write: !0 } })], r.prototype, "origin", void 0), r = o([y("geoscene.geometry.support.MeshGeoreferencedRelativeVertexSpace")], r);
const h = r;
export {
  h as m
};

import { a as l, b as a, c as k, b3 as q, eo as c, cZ as w, aA as A, ep as $, eq as y, er as h, es as d, F as g, et as b, E as p, bh as F } from "./index-h53IWweP.js";
import { c as J } from "./normalizeUtilsSync-cNupCt2o.js";
import { e as u } from "./mat3f64-Hpz0k8AN.js";
let n = class extends q {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return o == null || o.extent == null ? null : c(o.extent);
  }
  get coords() {
    var t;
    const o = (t = this.element.georeference) == null ? void 0 : t.coords;
    return w(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return A.fromJSON(J(this.coords));
  }
  get normalizedBounds() {
    const o = this.normalizedCoords != null ? this.normalizedCoords.extent : null;
    return o != null ? c(o) : null;
  }
};
l([a()], n.prototype, "spatialReference", void 0), l([a()], n.prototype, "element", void 0), l([a()], n.prototype, "bounds", null), l([a()], n.prototype, "coords", null), l([a()], n.prototype, "normalizedCoords", null), l([a()], n.prototype, "normalizedBounds", null), n = l([k("geoscene.layers.support.MediaElementView")], n);
const r = F(), s = u(), i = u(), m = u();
function Z(e, o, t) {
  return $(r, o[0], o[1], 1), y(r, r, h(s, t)), r[2] === 0 ? d(e, r[0], r[1]) : d(e, r[0] / r[2], r[1] / r[2]);
}
function D(e, o, t) {
  return f(i, o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7]), f(m, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]), g(e, b(i, i), m), e[8] !== 0 && (e[0] /= e[8], e[1] /= e[8], e[2] /= e[8], e[3] /= e[8], e[4] /= e[8], e[5] /= e[8], e[6] /= e[8], e[7] /= e[8], e[8] /= e[8]), e;
}
function f(e, o, t, x, z, C, j, v, B) {
  p(e, o, x, C, t, z, j, 1, 1, 1), $(r, v, B, 1), b(s, e);
  const [E, R, S] = y(r, r, h(s, s));
  return p(s, E, 0, 0, 0, R, 0, 0, 0, S), g(e, s, e);
}
export {
  Z as h,
  n as i,
  D as j
};

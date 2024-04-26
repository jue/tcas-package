import { e as f, d as y, a as C, aD as M, bs as w, aE as S, bD as O, ab as R, M as Y } from "./index-Ek1MTSEY.js";
let x = class extends M {
  get affectsPixelSize() {
    return !1;
  }
  forwardTransform(t) {
    return t;
  }
  inverseTransform(t) {
    return t;
  }
};
f([y()], x.prototype, "affectsPixelSize", null), f([y({ json: { write: !0 } })], x.prototype, "spatialReference", void 0), x = f([C("geoscene.layers.support.rasterTransforms.BaseRasterTransform")], x);
const T = x;
let d = class extends T {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(t) {
    return (t = t.clone()).type === "point" ? (t.x > 180 + this.tolerance && (t.x -= 360), t) : (t.xmin >= 180 - this.tolerance ? (t.xmax -= 360, t.xmin -= 360) : t.xmax > 180 + this.tolerance && (t.xmin = -180, t.xmax = 180), t);
  }
  inverseTransform(t) {
    return (t = t.clone()).type === "point" ? (t.x < -this.tolerance && (t.x += 360), t) : (t.xmin < -this.tolerance && (t.xmin += 360, t.xmax += 360), t);
  }
};
f([w({ GCSShiftXform: "gcs-shift" })], d.prototype, "type", void 0), f([y()], d.prototype, "tolerance", void 0), d = f([C("geoscene.layers.support.rasterTransforms.GCSShiftTransform")], d);
const j = d;
let v = class extends T {
  constructor() {
    super(...arguments), this.type = "identity";
  }
};
f([w({ IdentityXform: "identity" })], v.prototype, "type", void 0), v = f([C("geoscene.layers.support.rasterTransforms.IdentityTransform")], v);
const b = v;
function g(e, t, s) {
  const { x: n, y: r } = t;
  if (s < 2)
    return { x: e[0] + n * e[2] + r * e[4], y: e[1] + n * e[3] + r * e[5] };
  if (s === 2) {
    const p = n * n, X = r * r, $ = n * r;
    return { x: e[0] + n * e[2] + r * e[4] + p * e[6] + $ * e[8] + X * e[10], y: e[1] + n * e[3] + r * e[5] + p * e[7] + $ * e[9] + X * e[11] };
  }
  const o = n * n, a = r * r, u = n * r, i = o * n, m = o * r, h = n * a, l = r * a;
  return { x: e[0] + n * e[2] + r * e[4] + o * e[6] + u * e[8] + a * e[10] + i * e[12] + m * e[14] + h * e[16] + l * e[18], y: e[1] + n * e[3] + r * e[5] + o * e[7] + u * e[9] + a * e[11] + i * e[13] + m * e[15] + h * e[17] + l * e[19] };
}
function I(e, t, s) {
  const { xmin: n, ymin: r, xmax: o, ymax: a, spatialReference: u } = t;
  let i = [];
  if (s < 2)
    i.push({ x: n, y: a }), i.push({ x: o, y: a }), i.push({ x: n, y: r }), i.push({ x: o, y: r });
  else {
    let l = 10;
    for (let p = 0; p < l; p++)
      i.push({ x: n, y: r + (a - r) * p / (l - 1) }), i.push({ x: o, y: r + (a - r) * p / (l - 1) });
    l = 8;
    for (let p = 1; p <= l; p++)
      i.push({ x: n + (o - n) * p / l, y: r }), i.push({ x: n + (o - n) * p / l, y: a });
  }
  i = i.map((l) => g(e, l, s));
  const m = i.map((l) => l.x), h = i.map((l) => l.y);
  return new Y({ xmin: Math.min.apply(null, m), xmax: Math.max.apply(null, m), ymin: Math.min.apply(null, h), ymax: Math.max.apply(null, h), spatialReference: u });
}
function z(e) {
  const [t, s, n, r, o, a] = e, u = n * a - o * r, i = o * r - n * a;
  return [(o * s - t * a) / u, (n * s - t * r) / i, a / u, r / i, -o / u, -n / i];
}
let c = class extends T {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(e, t) {
    const { coeffX: s, coeffY: n } = t;
    if (s == null || !s.length || n == null || !n.length || s.length !== n.length)
      return null;
    const r = [];
    for (let o = 0; o < s.length; o++)
      r.push(s[o]), r.push(n[o]);
    return r;
  }
  writeForwardCoefficients(e, t, s) {
    const n = [], r = [];
    for (let o = 0; o < (e == null ? void 0 : e.length); o++)
      o % 2 == 0 ? n.push(e[o]) : r.push(e[o]);
    t.coeffX = n, t.coeffY = r;
  }
  get inverseCoefficients() {
    let e = this._get("inverseCoefficients");
    const t = this._get("forwardCoefficients");
    return !e && t && this.polynomialOrder < 2 && (e = z(t)), e;
  }
  set inverseCoefficients(e) {
    this._set("inverseCoefficients", e);
  }
  readInverseCoefficients(e, t) {
    const { inverseCoeffX: s, inverseCoeffY: n } = t;
    if (s == null || !s.length || n == null || !n.length || s.length !== n.length)
      return null;
    const r = [];
    for (let o = 0; o < s.length; o++)
      r.push(s[o]), r.push(n[o]);
    return r;
  }
  writeInverseCoefficients(e, t, s) {
    const n = [], r = [];
    for (let o = 0; o < (e == null ? void 0 : e.length); o++)
      o % 2 == 0 ? n.push(e[o]) : r.push(e[o]);
    t.inverseCoeffX = n, t.inverseCoeffY = r;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(e) {
    if (e.type === "point") {
      const t = g(this.forwardCoefficients, e, this.polynomialOrder);
      return new R({ x: t.x, y: t.y, spatialReference: e.spatialReference });
    }
    return I(this.forwardCoefficients, e, this.polynomialOrder);
  }
  inverseTransform(e) {
    if (e.type === "point") {
      const t = g(this.inverseCoefficients, e, this.polynomialOrder);
      return new R({ x: t.x, y: t.y, spatialReference: e.spatialReference });
    }
    return I(this.inverseCoefficients, e, this.polynomialOrder);
  }
};
f([y({ json: { write: !0 } })], c.prototype, "polynomialOrder", void 0), f([y()], c.prototype, "forwardCoefficients", void 0), f([S("forwardCoefficients", ["coeffX", "coeffY"])], c.prototype, "readForwardCoefficients", null), f([O("forwardCoefficients")], c.prototype, "writeForwardCoefficients", null), f([y({ json: { write: !0 } })], c.prototype, "inverseCoefficients", null), f([S("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], c.prototype, "readInverseCoefficients", null), f([O("inverseCoefficients")], c.prototype, "writeInverseCoefficients", null), f([y()], c.prototype, "affectsPixelSize", null), f([w({ PolynomialXform: "polynomial" })], c.prototype, "type", void 0), c = f([C("geoscene.layers.support.rasterTransforms.PolynomialTransform")], c);
const F = c, P = { GCSShiftXform: j, IdentityXform: b, PolynomialXform: F }, G = Object.keys(P);
function E(e) {
  const t = e == null ? void 0 : e.type;
  return !e || G.includes(t);
}
function q(e) {
  if (!(e != null && e.type))
    return null;
  const t = P[e == null ? void 0 : e.type];
  if (t) {
    const s = new t();
    return s.read(e), s;
  }
  return null;
}
export {
  j as c,
  E as e,
  q as f,
  F as m
};

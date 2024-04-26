import { y as U } from "./index-Ek1MTSEY.js";
import { E as n, A as o, _ as h } from "./Utils-1SmxxQP6.js";
var s, r;
function G(i) {
  switch (i) {
    case "left":
      return s.Left;
    case "right":
      return s.Right;
    case "center":
    case "justify":
      return s.Center;
  }
}
function K(i) {
  switch (i) {
    case "top":
      return r.Top;
    case "middle":
      return r.Center;
    case "baseline":
      return r.Baseline;
    case "bottom":
      return r.Bottom;
  }
}
function k(i) {
  switch (i) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return [s.Right, r.Bottom];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return [s.Center, r.Bottom];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return [s.Left, r.Bottom];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return [s.Right, r.Center];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return [s.Center, r.Center];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return [s.Left, r.Center];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return [s.Right, r.Top];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return [s.Center, r.Top];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return [s.Left, r.Top];
    default:
      return console.debug(`Found invalid placement type ${i}`), [s.Center, r.Center];
  }
}
function j(i) {
  switch (i) {
    case s.Right:
      return -1;
    case s.Center:
      return 0;
    case s.Left:
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${i}`), 0;
  }
}
function H(i) {
  switch (i) {
    case r.Top:
      return 1;
    case r.Center:
      return 0;
    case r.Bottom:
    case r.Baseline:
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${i}`), 0;
  }
}
function Y(i) {
  switch (i) {
    case "left":
      return s.Left;
    case "right":
      return s.Right;
    case "center":
    case "justify":
      return s.Center;
  }
}
function $(i) {
  switch (i) {
    case "above-along":
    case "below-along":
    case "center-along":
    case "esriServerLinePlacementAboveAlong":
    case "esriServerLinePlacementBelowAlong":
    case "esriServerLinePlacementCenterAlong":
      return !0;
    default:
      return !1;
  }
}
(function(i) {
  i[i.Left = -1] = "Left", i[i.Center = 0] = "Center", i[i.Right = 1] = "Right";
})(s || (s = {})), function(i) {
  i[i.Top = 1] = "Top", i[i.Center = 0] = "Center", i[i.Bottom = -1] = "Bottom", i[i.Baseline = 2] = "Baseline";
}(r || (r = {}));
function N(i, e) {
  const t = o.SIZE_FIELD_STOPS | o.SIZE_MINMAX_VALUE | o.SIZE_SCALE_STOPS | o.SIZE_UNIT_VALUE, a = (i & (h.FIELD_TARGETS_OUTLINE | h.MINMAX_TARGETS_OUTLINE | h.SCALE_TARGETS_OUTLINE | h.UNIT_TARGETS_OUTLINE)) >>> 4;
  return e.isOutline || e.isOutlinedFill ? t & a : t & ~a;
}
const f = 0, L = 8, D = 7, y = 8, b = 11, T = 11, A = 12, C = 13, E = 14, B = 15, M = 15, F = 16, _ = 17, w = 18, O = 19, R = 20, x = 21, P = 22;
function q(i, e) {
  switch (i) {
    case n.FILL:
      return p.from(e);
    case n.LINE:
      return g.from(e);
    case n.MARKER:
      return V.from(e);
    case n.TEXT:
      return m.from(e);
    case n.LABEL:
      return z.from(e);
    default:
      throw new Error(`Unable to createMaterialKey for unknown geometryType ${i}`);
  }
}
class v {
  constructor(e) {
    this._data = 0, this._data = e;
  }
  static load(e) {
    const t = this.shared;
    return t.data = e, t;
  }
  set data(e) {
    this._data = e;
  }
  get data() {
    return this._data;
  }
  get geometryType() {
    return this.bits(y, b);
  }
  set geometryType(e) {
    this.setBits(e, y, b);
  }
  get mapAligned() {
    return !!this.bit(R);
  }
  set mapAligned(e) {
    this.setBit(R, e);
  }
  get sdf() {
    return !!this.bit(T);
  }
  set sdf(e) {
    this.setBit(T, e);
  }
  get pattern() {
    return !!this.bit(A);
  }
  set pattern(e) {
    this.setBit(A, e);
  }
  get textureBinding() {
    return this.bits(f, L);
  }
  set textureBinding(e) {
    this.setBits(e, f, L);
  }
  get geometryTypeString() {
    switch (this.geometryType) {
      case n.FILL:
        return "fill";
      case n.MARKER:
        return "marker";
      case n.LINE:
        return "line";
      case n.TEXT:
        return "text";
      case n.LABEL:
        return "label";
      default:
        throw new U(`Unable to handle unknown geometryType: ${this.geometryType}`);
    }
  }
  setBit(e, t) {
    const a = 1 << e;
    t ? this._data |= a : this._data &= ~a;
  }
  bit(e) {
    return (this._data & 1 << e) >> e;
  }
  setBits(e, t, a) {
    for (let l = t, c = 0; l < a; l++, c++)
      this.setBit(l, (e & 1 << c) != 0);
  }
  bits(e, t) {
    let a = 0;
    for (let l = e, c = 0; l < t; l++, c++)
      a |= this.bit(l) << c;
    return a;
  }
  hasVV() {
    return !1;
  }
  setVV(e, t) {
  }
  getVariation() {
    return { mapAligned: this.mapAligned, pattern: this.pattern, sdf: this.sdf };
  }
  getVariationHash() {
    return this._data & ~(D & this.textureBinding);
  }
}
v.shared = new v(0);
const u = (i) => class extends i {
  get vvSizeMinMaxValue() {
    return this.bit(F) !== 0;
  }
  set vvSizeMinMaxValue(e) {
    this.setBit(F, e);
  }
  get vvSizeScaleStops() {
    return this.bit(_) !== 0;
  }
  set vvSizeScaleStops(e) {
    this.setBit(_, e);
  }
  get vvSizeFieldStops() {
    return this.bit(w) !== 0;
  }
  set vvSizeFieldStops(e) {
    this.setBit(w, e);
  }
  get vvSizeUnitValue() {
    return this.bit(O) !== 0;
  }
  set vvSizeUnitValue(e) {
    this.setBit(O, e);
  }
  hasVV() {
    return super.hasVV() || this.vvSizeMinMaxValue || this.vvSizeScaleStops || this.vvSizeFieldStops || this.vvSizeUnitValue;
  }
  setVV(e, t) {
    super.setVV(e, t);
    const a = N(e, t) & e;
    this.vvSizeMinMaxValue = !!(a & o.SIZE_MINMAX_VALUE), this.vvSizeFieldStops = !!(a & o.SIZE_FIELD_STOPS), this.vvSizeUnitValue = !!(a & o.SIZE_UNIT_VALUE), this.vvSizeScaleStops = !!(a & o.SIZE_SCALE_STOPS);
  }
}, I = (i) => class extends i {
  get vvRotation() {
    return this.bit(B) !== 0;
  }
  set vvRotation(e) {
    this.setBit(B, e);
  }
  hasVV() {
    return super.hasVV() || this.vvRotation;
  }
  setVV(e, t) {
    super.setVV(e, t), this.vvRotation = !t.isOutline && !!(e & o.ROTATION);
  }
}, S = (i) => class extends i {
  get vvColor() {
    return this.bit(C) !== 0;
  }
  set vvColor(e) {
    this.setBit(C, e);
  }
  hasVV() {
    return super.hasVV() || this.vvColor;
  }
  setVV(e, t) {
    super.setVV(e, t), this.vvColor = !t.isOutline && !!(e & o.COLOR);
  }
}, d = (i) => class extends i {
  get vvOpacity() {
    return this.bit(E) !== 0;
  }
  set vvOpacity(e) {
    this.setBit(E, e);
  }
  hasVV() {
    return super.hasVV() || this.vvOpacity;
  }
  setVV(e, t) {
    super.setVV(e, t), this.vvOpacity = !t.isOutline && !!(e & o.OPACITY);
  }
};
let p = class extends S(d(u(v))) {
  static load(e) {
    const t = this.shared;
    return t.data = e, t;
  }
  static from(e) {
    const t = this.load(0);
    return t.geometryType = n.FILL, t.dotDensity = e.stride.fill === "dot-density", t.simple = e.stride.fill === "simple", t.outlinedFill = e.isOutlinedFill, t.dotDensity || t.setVV(e.vvFlags, e), t.data;
  }
  getVariation() {
    return { ...super.getVariation(), dotDensity: this.dotDensity, outlinedFill: this.outlinedFill, simple: this.simple, vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue };
  }
  get dotDensity() {
    return !!this.bit(M);
  }
  set dotDensity(e) {
    this.setBit(M, e);
  }
  get simple() {
    return !!this.bit(P);
  }
  set simple(e) {
    this.setBit(P, e);
  }
  get outlinedFill() {
    return !!this.bit(x);
  }
  set outlinedFill(e) {
    this.setBit(x, e);
  }
};
p.shared = new p(0);
class V extends S(d(I(u(v)))) {
  static load(e) {
    const t = this.shared;
    return t.data = e, t;
  }
  static from(e) {
    const t = this.load(0);
    return t.geometryType = n.MARKER, t.setVV(e.vvFlags, e), t.data;
  }
  getVariation() {
    return { ...super.getVariation(), vvColor: this.vvColor, vvRotation: this.vvRotation, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue };
  }
}
V.shared = new V(0);
class g extends S(d(u(v))) {
  static load(e) {
    const t = this.shared;
    return t.data = e, t;
  }
  static from(e) {
    const t = this.load(0);
    return t.geometryType = n.LINE, t.setVV(e.vvFlags, e), t.data;
  }
  getVariation() {
    return { ...super.getVariation(), vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue };
  }
}
g.shared = new g(0);
class m extends S(d(I(u(v)))) {
  static load(e) {
    const t = this.shared;
    return t.data = e, t;
  }
  static from(e) {
    const t = this.load(0);
    return t.geometryType = n.TEXT, t.setVV(e.vvFlags, e), t.data;
  }
  getVariation() {
    return { ...super.getVariation(), vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvRotation: this.vvRotation, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue };
  }
}
m.shared = new m(0);
class z extends u(v) {
  static load(e) {
    const t = this.shared;
    return t.data = e, t;
  }
  static from(e) {
    const t = this.load(0);
    return t.geometryType = n.LABEL, t.setVV(e.vvFlags, e), t.mapAligned = $(e.placement), t.data;
  }
  getVariation() {
    return { ...super.getVariation(), vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue };
  }
}
z.shared = new z(0);
export {
  g as B,
  q as L,
  m as R,
  V as U,
  v as _,
  k as a,
  z as b,
  j as c,
  s as e,
  $ as i,
  K as n,
  H as o,
  G as r,
  Y as s,
  r as t,
  p as x
};

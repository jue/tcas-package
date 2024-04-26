import { e, d as o, a as i, aD as f, D, bs as m, gI as O, S as t, db as I, bW as P, i7 as z, i8 as K } from "./index-Ek1MTSEY.js";
var T;
let c = T = class extends f {
  constructor() {
    super(...arguments), this.field = null, this.minValue = 0, this.maxValue = 255;
  }
  clone() {
    return new T({ field: this.field, minValue: this.minValue, maxValue: this.maxValue });
  }
};
e([o({ type: String, json: { write: !0 } })], c.prototype, "field", void 0), e([o({ type: Number, nonNullable: !0, json: { write: !0 } })], c.prototype, "minValue", void 0), e([o({ type: Number, nonNullable: !0, json: { write: !0 } })], c.prototype, "maxValue", void 0), c = T = e([i("geoscene.renderers.support.pointCloud.ColorModulation")], c);
const k = c, v = new D({ pointCloudFixedSizeAlgorithm: "fixed-size", pointCloudSplatAlgorithm: "splat" });
let b = class extends f {
};
e([o({ type: v.apiValues, readOnly: !0, nonNullable: !0, json: { type: v.jsonValues, read: !1, write: v.write } })], b.prototype, "type", void 0), b = e([i("geoscene.renderers.support.pointCloud.PointSizeAlgorithm")], b);
const R = b;
var w;
let y = w = class extends R {
  constructor() {
    super(...arguments), this.type = "fixed-size", this.size = 0, this.useRealWorldSymbolSizes = null;
  }
  clone() {
    return new w({ size: this.size, useRealWorldSymbolSizes: this.useRealWorldSymbolSizes });
  }
};
e([m({ pointCloudFixedSizeAlgorithm: "fixed-size" })], y.prototype, "type", void 0), e([o({ type: Number, nonNullable: !0, json: { write: !0 } })], y.prototype, "size", void 0), e([o({ type: Boolean, json: { write: !0 } })], y.prototype, "useRealWorldSymbolSizes", void 0), y = w = e([i("geoscene.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], y);
const B = y;
var V;
let h = V = class extends R {
  constructor() {
    super(...arguments), this.type = "splat", this.scaleFactor = 1;
  }
  clone() {
    return new V({ scaleFactor: this.scaleFactor });
  }
};
e([m({ pointCloudSplatAlgorithm: "splat" })], h.prototype, "type", void 0), e([o({ type: Number, value: 1, nonNullable: !0, json: { write: !0 } })], h.prototype, "scaleFactor", void 0), h = V = e([i("geoscene.renderers.support.pointCloud.PointSizeSplatAlgorithm")], h);
const q = h, A = { key: "type", base: R, typeMap: { "fixed-size": B, splat: q } }, g = O()({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks", pointCloudRGBRenderer: "point-cloud-rgb", pointCloudStretchRenderer: "point-cloud-stretch", pointCloudUniqueValueRenderer: "point-cloud-unique-value" });
let l = class extends f {
  constructor(N) {
    super(N), this.type = void 0, this.pointSizeAlgorithm = null, this.colorModulation = null, this.pointsPerInch = 10;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  cloneProperties() {
    return { pointSizeAlgorithm: t(this.pointSizeAlgorithm), colorModulation: t(this.colorModulation), pointsPerInch: t(this.pointsPerInch) };
  }
};
e([o({ type: g.apiValues, readOnly: !0, nonNullable: !0, json: { type: g.jsonValues, read: !1, write: g.write } })], l.prototype, "type", void 0), e([o({ types: A, json: { write: !0 } })], l.prototype, "pointSizeAlgorithm", void 0), e([o({ type: k, json: { write: !0 } })], l.prototype, "colorModulation", void 0), e([o({ json: { write: !0 }, nonNullable: !0, type: Number })], l.prototype, "pointsPerInch", void 0), l = e([i("geoscene.renderers.PointCloudRenderer")], l), function(r) {
  r.fieldTransformTypeKebabDict = new D({ none: "none", lowFourBit: "low-four-bit", highFourBit: "high-four-bit", absoluteValue: "absolute-value", moduloTen: "modulo-ten" });
}(l || (l = {}));
const s = l;
var j;
let n = j = class extends f {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.minValue = 0, this.maxValue = 0, this.color = null;
  }
  clone() {
    return new j({ description: this.description, label: this.label, minValue: this.minValue, maxValue: this.maxValue, color: t(this.color) });
  }
};
e([o({ type: String, json: { write: !0 } })], n.prototype, "description", void 0), e([o({ type: String, json: { write: !0 } })], n.prototype, "label", void 0), e([o({ type: Number, json: { read: { source: "classMinValue" }, write: { target: "classMinValue" } } })], n.prototype, "minValue", void 0), e([o({ type: Number, json: { read: { source: "classMaxValue" }, write: { target: "classMaxValue" } } })], n.prototype, "maxValue", void 0), e([o({ type: I, json: { type: [P], write: !0 } })], n.prototype, "color", void 0), n = j = e([i("geoscene.renderers.support.pointCloud.ColorClassBreakInfo")], n);
const M = n;
var S;
let p = S = class extends s {
  constructor(r) {
    super(r), this.type = "point-cloud-class-breaks", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.colorClassBreakInfos = null;
  }
  clone() {
    return new S({ ...this.cloneProperties(), field: this.field, fieldTransformType: this.fieldTransformType, colorClassBreakInfos: t(this.colorClassBreakInfos), legendOptions: t(this.legendOptions) });
  }
};
e([m({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks" })], p.prototype, "type", void 0), e([o({ json: { write: !0 }, type: String })], p.prototype, "field", void 0), e([o({ type: z, json: { write: !0 } })], p.prototype, "legendOptions", void 0), e([o({ type: s.fieldTransformTypeKebabDict.apiValues, json: { type: s.fieldTransformTypeKebabDict.jsonValues, read: s.fieldTransformTypeKebabDict.read, write: s.fieldTransformTypeKebabDict.write } })], p.prototype, "fieldTransformType", void 0), e([o({ type: [M], json: { write: !0 } })], p.prototype, "colorClassBreakInfos", void 0), p = S = e([i("geoscene.renderers.PointCloudClassBreaksRenderer")], p);
const E = p;
var C;
let a = C = class extends s {
  constructor(r) {
    super(r), this.type = "point-cloud-stretch", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.stops = null;
  }
  clone() {
    return new C({ ...this.cloneProperties(), field: t(this.field), fieldTransformType: t(this.fieldTransformType), stops: t(this.stops), legendOptions: t(this.legendOptions) });
  }
};
e([m({ pointCloudStretchRenderer: "point-cloud-stretch" })], a.prototype, "type", void 0), e([o({ json: { write: !0 }, type: String })], a.prototype, "field", void 0), e([o({ type: z, json: { write: !0 } })], a.prototype, "legendOptions", void 0), e([o({ type: s.fieldTransformTypeKebabDict.apiValues, json: { type: s.fieldTransformTypeKebabDict.jsonValues, read: s.fieldTransformTypeKebabDict.read, write: s.fieldTransformTypeKebabDict.write } })], a.prototype, "fieldTransformType", void 0), e([o({ type: [K], json: { write: !0 } })], a.prototype, "stops", void 0), a = C = e([i("geoscene.renderers.PointCloudStretchRenderer")], a);
const H = a;
var $;
let u = $ = class extends f {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.values = null, this.color = null;
  }
  clone() {
    return new $({ description: this.description, label: this.label, values: t(this.values), color: t(this.color) });
  }
};
e([o({ type: String, json: { write: !0 } })], u.prototype, "description", void 0), e([o({ type: String, json: { write: !0 } })], u.prototype, "label", void 0), e([o({ type: [String], json: { write: !0 } })], u.prototype, "values", void 0), e([o({ type: I, json: { type: [P], write: !0 } })], u.prototype, "color", void 0), u = $ = e([i("geoscene.renderers.support.pointCloud.ColorUniqueValueInfo")], u);
const F = u;
var x;
let d = x = class extends s {
  constructor(r) {
    super(r), this.type = "point-cloud-unique-value", this.field = null, this.fieldTransformType = null, this.colorUniqueValueInfos = null, this.legendOptions = null;
  }
  clone() {
    return new x({ ...this.cloneProperties(), field: t(this.field), fieldTransformType: t(this.fieldTransformType), colorUniqueValueInfos: t(this.colorUniqueValueInfos), legendOptions: t(this.legendOptions) });
  }
};
e([m({ pointCloudUniqueValueRenderer: "point-cloud-unique-value" })], d.prototype, "type", void 0), e([o({ json: { write: !0 }, type: String })], d.prototype, "field", void 0), e([o({ type: s.fieldTransformTypeKebabDict.apiValues, json: { type: s.fieldTransformTypeKebabDict.jsonValues, read: s.fieldTransformTypeKebabDict.read, write: s.fieldTransformTypeKebabDict.write } })], d.prototype, "fieldTransformType", void 0), e([o({ type: [F], json: { write: !0 } })], d.prototype, "colorUniqueValueInfos", void 0), e([o({ type: z, json: { write: !0 } })], d.prototype, "legendOptions", void 0), d = x = e([i("geoscene.renderers.PointCloudUniqueValueRenderer")], d);
const J = d;
export {
  J as a,
  H as b,
  s as c,
  E as d
};

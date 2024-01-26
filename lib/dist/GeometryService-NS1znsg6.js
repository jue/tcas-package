import { q as p, eT as m, C as f, ac as D, a4 as y, aX as _, D as U, e as c, e5 as E, aD as A, d as N, a as h, ad as w, R as C, aF as L } from "./index-j1oaLRcp.js";
import { r as R, o as $, n as M } from "./project-ij_0nuPN.js";
import "vue";
async function q(t, e, r) {
  const o = p(t), s = { ...o.query, f: "json", ...e.toJSON() }, i = m(s, r);
  return f(o.path + "/areasAndLengths", i).then((a) => a.data);
}
async function G(t, e, r, o) {
  const s = e[0].spatialReference, i = p(t), a = { ...i.query, f: "json", sr: JSON.stringify(s.toJSON()), polygons: JSON.stringify(R(e).geometries), polylines: JSON.stringify(R(r).geometries) }, l = m(a, o);
  return f(i.path + "/autoComplete", l).then(({ data: u }) => (u.geometries || []).map(({ rings: g }) => new D({ spatialReference: s, rings: g })));
}
async function x(t, e, r) {
  const o = p(t), s = { ...o.query, f: "json", ...e.toJSON() }, i = e.outSpatialReference || e.geometries[0].spatialReference, a = m(s, r);
  return f(o.path + "/buffer", a).then((l) => (l.data.geometries || []).map(({ rings: u }) => new D({ spatialReference: i, rings: u })));
}
async function H(t, e, r) {
  const o = e[0].spatialReference, s = p(t), i = { ...s.query, f: "json", sr: JSON.stringify(o.toJSON()), geometries: JSON.stringify(R(e)) }, a = m(i, r);
  return f(s.path + "/convexHull", a).then(({ data: l }) => y(l.geometry).set({ spatialReference: o }));
}
async function Y(t, e, r, o) {
  const s = p(t), i = e[0].spatialReference, a = { ...o, query: { ...s.query, f: "json", sr: JSON.stringify(i), target: JSON.stringify({ geometryType: _(e[0]), geometries: e }), cutter: JSON.stringify(r) } }, l = await f(s.path + "/cut", a), { cutIndexes: u, geometries: g = [] } = l.data;
  return { cutIndexes: u, geometries: g.map((J) => {
    const v = y(J);
    return v.spatialReference = i, v;
  }) };
}
async function b(t, e, r) {
  const o = e.geometries[0].spatialReference, s = p(t), i = { ...s.query, f: "json", ...e.toJSON() }, a = m(i, r);
  return f(s.path + "/densify", a).then(({ data: l }) => (l.geometries || []).map((u) => y(u).set({ spatialReference: o })));
}
async function F(t, e, r, o) {
  const s = e[0].spatialReference, i = p(t);
  let a = { query: { ...i.query, f: "json", sr: JSON.stringify(s.toJSON()), geometries: JSON.stringify(R(e)), geometry: JSON.stringify({ geometryType: _(r), geometry: r.toJSON() }) } };
  return o && (a = { ...o, ...a }), f(i.path + "/difference", a).then(({ data: l }) => (l.geometries || []).map((u) => y(u).set({ spatialReference: s })));
}
async function K(t, e, r) {
  const o = p(t), s = { ...o.query, f: "json", ...e.toJSON() }, i = m(s, r);
  return f(o.path + "/distance", i).then(({ data: a }) => a && a.distance);
}
const j = new U({ MGRS: "mgrs", USNG: "usng", UTM: "utm", GeoRef: "geo-ref", GARS: "gars", DMS: "dms", DDM: "ddm", DD: "dd" });
async function B(t, e, r) {
  const o = {};
  e.sr != null && typeof e.sr == "object" ? o.sr = e.sr.wkid || JSON.stringify(e.sr) : o.sr = e.sr, o.strings = JSON.stringify(e.strings);
  const s = e.conversionType || "mgrs";
  o.conversionType = j.toJSON(s), o.conversionMode = e.conversionMode;
  const i = p(t), a = { ...i.query, f: "json", ...o }, l = m(a, r);
  return f(i.path + "/fromGeoCoordinateString", l).then(({ data: u }) => u.coordinates);
}
const k = new U({ 109006: "centimeters", 9102: "decimal-degrees", 109005: "decimeters", 9002: "feet", 109009: "inches", 9036: "kilometers", 9001: "meters", 9035: "miles", 109007: "millimeters", 109012: "nautical-miles", 9096: "yards" });
function P(t) {
  const { geometries: e, deviationUnit: r, maxDeviation: o } = t.toJSON(), s = { maxDeviation: o };
  return e && e.length && (s.geometries = JSON.stringify({ geometryType: _(e[0]), geometries: e }), s.sr = JSON.stringify(e[0].spatialReference)), k.write(r, s, "deviationUnit"), s;
}
let S = class extends A {
  constructor(e) {
    super(e), this.deviationUnit = null, this.geometries = null, this.maxDeviation = null;
  }
};
c([N({ type: String, json: { write: !0 } })], S.prototype, "deviationUnit", void 0), c([N({ json: { read: { reader: (t) => t ? t.map((e) => y(e)) : null }, write: { writer: (t, e) => {
  e.geometries = t.map((r) => r.toJSON());
} } } })], S.prototype, "geometries", void 0), c([N({ type: Number, json: { write: !0 } })], S.prototype, "maxDeviation", void 0), S = c([h("geoscene.rest.support.GeneralizeParameters")], S), S.from = E(S);
const Q = S;
async function V(t, e, r) {
  const o = (e = Q.from(e)).toJSON(), s = P(e), i = p(t), a = { ...i.query, f: "json", ...s }, l = o.geometries[0].spatialReference, u = m(a, r);
  return f(i.path + "/generalize", u).then(({ data: g }) => (g.geometries || []).map((J) => y(J).set({ spatialReference: l })));
}
async function z(t, e, r, o) {
  const s = e[0].spatialReference, i = p(t), a = { ...i.query, f: "json", sr: JSON.stringify(s.toJSON()), geometries: JSON.stringify(R(e)), geometry: JSON.stringify({ geometryType: _(r), geometry: r.toJSON() }) }, l = m(a, o);
  return f(i.path + "/intersect", l).then(({ data: u }) => (u.geometries || []).map((g) => y(g).set({ spatialReference: s })));
}
function W(t, e, r) {
  const o = e.map((u) => u.toJSON()), s = e[0].spatialReference, i = p(t), a = { ...i.query, f: "json", sr: s.wkid ? s.wkid : JSON.stringify(s.toJSON()), polygons: JSON.stringify(o) }, l = m(a, r);
  return f(i.path + "/labelPoints", l).then(({ data: u }) => (u.labelPoints || []).map((g) => y(g).set({ spatialReference: s })));
}
const X = new U({ preserveShape: "preserve-shape" });
function Z(t) {
  const { polylines: e, lengthUnit: r, geodesic: o, calculationType: s } = t.toJSON(), i = {};
  i.polylines = JSON.stringify(e);
  const a = t.polylines[0].spatialReference;
  return i.sr = a.wkid ? a.wkid : JSON.stringify(a.toJSON()), r && (i.lengthUnit = r), o && (i.geodesic = o), s && (i.calculationType = X.toJSON(s)), i;
}
let I = class extends A {
  constructor(t) {
    super(t), this.calculationType = null, this.geodesic = null, this.lengthUnit = null, this.polylines = null;
  }
};
c([N({ type: String, json: { write: !0 } })], I.prototype, "calculationType", void 0), c([N({ type: Boolean, json: { write: !0 } })], I.prototype, "geodesic", void 0), c([N({ json: { write: !0 } })], I.prototype, "lengthUnit", void 0), c([N({ type: [w], json: { read: { reader: (t) => t ? t.map((e) => y(e)) : null }, write: { writer: (t, e) => {
  e.polylines = t.map((r) => r.toJSON());
} } } })], I.prototype, "polylines", void 0), I = c([h("geoscene.rest.support.LengthsParameters")], I), I.from = E(I);
const ee = I;
async function te(t, e, r) {
  e = ee.from(e);
  const o = Z(e), s = p(t), i = { ...s.query, f: "json", ...o }, a = m(i, r);
  return f(s.path + "/lengths", a).then(({ data: l }) => l);
}
const re = new U({ esriGeometryOffsetBevelled: "bevelled", esriGeometryOffsetMitered: "mitered", esriGeometryOffsetRounded: "rounded" }), ne = new U({ 9001: "meters", 9002: "feet", 9036: "kilometers", 9093: "miles", 109012: "nautical-miles", 109001: "yards" });
function se(t) {
  const { geometries: e, bevelRatio: r, offsetDistance: o, offsetHow: s, offsetUnit: i } = t.toJSON(), a = { bevelRatio: r, offsetDistance: o };
  return e && e.length && (a.geometries = JSON.stringify({ geometryType: _(e[0]), geometries: e }), a.sr = JSON.stringify(e[0].spatialReference)), s && (a.offsetHow = re.toJSON(s)), i && (a.offsetUnit = ne.toJSON(i)), a;
}
let T = class extends A {
  constructor(e) {
    super(e), this.bevelRatio = null, this.geometries = null, this.offsetDistance = null, this.offsetHow = null, this.offsetUnit = null;
  }
};
c([N({ type: Number, json: { write: !0 } })], T.prototype, "bevelRatio", void 0), c([N({ json: { read: { reader: (t) => t ? t.map((e) => y(e)) : null }, write: { writer: (t, e) => {
  e.geometries = t.map((r) => r.toJSON());
} } } })], T.prototype, "geometries", void 0), c([N({ type: Number, json: { write: !0 } })], T.prototype, "offsetDistance", void 0), c([N({ type: String, json: { write: !0 } })], T.prototype, "offsetHow", void 0), c([N({ type: String, json: { write: !0 } })], T.prototype, "offsetUnit", void 0), T = c([h("geoscene.rest.support.OffsetParameters")], T), T.from = E(T);
const oe = T;
async function ie(t, e, r) {
  e = oe.from(e);
  const o = se(e), s = p(t), i = { ...s.query, f: "json", ...o }, a = e.geometries[0].spatialReference, l = m(i, r);
  return f(s.path + "/offset", l).then(({ data: u }) => (u.geometries || []).map((g) => y(g).set({ spatialReference: a })));
}
const ae = new U({ esriGeometryRelationCross: "cross", esriGeometryRelationDisjoint: "disjoint", esriGeometryRelationIn: "in", esriGeometryRelationInteriorIntersection: "interior-intersection", esriGeometryRelationIntersection: "intersection", esriGeometryRelationLineCoincidence: "line-coincidence", esriGeometryRelationLineTouch: "line-touch", esriGeometryRelationOverlap: "overlap", esriGeometryRelationPointTouch: "point-touch", esriGeometryRelationTouch: "touch", esriGeometryRelationWithin: "within", esriGeometryRelationRelation: "relation" });
function le(t) {
  const { geometries1: e, geometries2: r, relation: o, relationParameter: s } = t.toJSON(), i = {};
  if (e && e.length) {
    i.geometries1 = JSON.stringify({ geometryType: _(e[0]), geometries: e });
    const a = e[0].spatialReference;
    i.sr = a.wkid ? a.wkid : JSON.stringify(a);
  }
  return r && r.length > 0 && (i.geometries2 = JSON.stringify({ geometryType: _(r[0]), geometries: r })), o && (i.relation = ae.toJSON(o)), s && (i.relationParam = s), i;
}
let d = class extends A {
  constructor(t) {
    super(t), this.geometries1 = null, this.geometries2 = null, this.relation = null, this.relationParameter = null;
  }
};
c([N({ json: { read: { reader: (t) => t ? t.map((e) => y(e)) : null }, write: { writer: (t, e) => {
  e.geometries1 = t.map((r) => r.toJSON());
} } } })], d.prototype, "geometries1", void 0), c([N({ json: { read: { reader: (t) => t ? t.map((e) => y(e)) : null }, write: { writer: (t, e) => {
  e.geometries2 = t.map((r) => r.toJSON());
} } } })], d.prototype, "geometries2", void 0), c([N({ type: String, json: { write: !0 } })], d.prototype, "relation", void 0), c([N({ type: String, json: { write: !0 } })], d.prototype, "relationParameter", void 0), d = c([h("geoscene.rest.support.RelationParameters")], d), d.from = E(d);
const ue = d;
async function ce(t, e, r) {
  e = ue.from(e);
  const o = le(e), s = p(t), i = { ...s.query, f: "json", ...o }, a = m(i, r);
  return f(s.path + "/relation", a).then(({ data: l }) => l.relations);
}
async function Ne(t, e, r, o) {
  const s = e.spatialReference, i = p(t), a = { ...i.query, f: "json", sr: JSON.stringify(s.toJSON()), target: JSON.stringify({ geometryType: _(e), geometry: e.toJSON() }), reshaper: JSON.stringify(r.toJSON()) }, l = m(a, o);
  return f(i.path + "/reshape", l).then(({ data: u }) => y(u.geometry).set({ spatialReference: s }));
}
async function fe(t, e, r) {
  const o = typeof t == "string" ? C(t) : t, s = e[0].spatialReference, i = _(e[0]), a = { ...r, query: { ...o.query, f: "json", sr: s.wkid ? s.wkid : JSON.stringify(s), geometries: JSON.stringify(R(e)) } }, { data: l } = await f(o.path + "/simplify", a);
  return $(l.geometries, i, s);
}
async function pe(t, e, r) {
  const o = {};
  e.sr != null && typeof e.sr == "object" ? o.sr = e.sr.wkid || JSON.stringify(e.sr) : o.sr = e.sr, o.coordinates = JSON.stringify(e.coordinates);
  const s = e.conversionType || "mgrs";
  o.conversionType = j.toJSON(s), o.conversionMode = e.conversionMode, o.numOfDigits = e.numOfDigits, o.rounding = e.rounding, o.addSpaces = e.addSpaces;
  const i = p(t), a = { ...i.query, f: "json", ...o }, l = m(a, r);
  return f(i.path + "/toGeoCoordinateString", l).then(({ data: u }) => u.strings);
}
const ye = new U({ 0: "default-curve-extension", 1: "relocate-ends", 2: "keep-end-attributes", 4: "no-end-attributes", 8: "no-extend-at-from", 16: "no-extend-at-to" });
function me(t) {
  const { extendHow: e, polylines: r, trimExtendTo: o } = t.toJSON(), s = {};
  return s.extendHow = ye.toJSON(e), r && r.length && (s.polylines = JSON.stringify(r), s.sr = JSON.stringify(r[0].spatialReference)), o && (s.trimExtendTo = JSON.stringify(o)), s;
}
let O = class extends A {
  constructor(t) {
    super(t), this.extendHow = "default-curve-extension", this.polylines = null, this.trimExtendTo = null;
  }
};
c([N({ type: String, json: { write: !0 } })], O.prototype, "extendHow", void 0), c([N({ type: [w], json: { read: { reader: (t) => t ? t.map((e) => y(e)) : null }, write: { writer: (t, e) => {
  e.polylines = t.map((r) => r.toJSON());
} } } })], O.prototype, "polylines", void 0), c([N({ json: { read: { reader: (t) => t ? y(t) : null }, write: { writer: (t, e) => {
  e.trimExtendTo = t.toJSON();
} } } })], O.prototype, "trimExtendTo", void 0), O = c([h("geoscene.rest.support.TrimExtendParameters")], O), O.from = E(O);
const ge = O;
async function Te(t, e, r) {
  e = ge.from(e);
  const o = me(e), s = p(t), i = { ...s.query, f: "json", ...o }, a = e.sr, l = m(i, r);
  return f(s.path + "/trimExtend", l).then(({ data: u }) => (u.geometries || []).map(({ paths: g }) => new w({ spatialReference: a, paths: g })));
}
async function Ie(t, e, r) {
  const o = e[0].spatialReference, s = p(t), i = { ...s.query, f: "json", sr: JSON.stringify(o.toJSON()), geometries: JSON.stringify(R(e)) }, a = m(i, r);
  return f(s.path + "/union", a).then(({ data: l }) => y(l.geometry).set({ spatialReference: o }));
}
let n = class extends L {
  constructor(t) {
    super(t), this.url = null;
  }
  areasAndLengths(t, e) {
    return q(this.url, t, e);
  }
  autoComplete(t, e, r) {
    return G(this.url, t, e, r);
  }
  buffer(t, e) {
    return x(this.url, t, e);
  }
  convexHull(t, e) {
    return H(this.url, t, e);
  }
  cut(t, e, r) {
    return Y(this.url, t, e, r);
  }
  densify(t, e) {
    return b(this.url, t, e);
  }
  difference(t, e, r) {
    return F(this.url, t, e, r);
  }
  distance(t, e) {
    return K(this.url, t, e);
  }
  fromGeoCoordinateString(t, e) {
    return B(this.url, t, e);
  }
  generalize(t, e) {
    return V(this.url, t, e);
  }
  intersect(t, e, r) {
    return z(this.url, t, e, r);
  }
  labelPoints(t, e) {
    return W(this.url, t, e);
  }
  lengths(t, e) {
    return te(this.url, t, e);
  }
  offset(t, e) {
    return ie(this.url, t, e);
  }
  project(t, e) {
    return M(this.url, t, e);
  }
  relation(t, e) {
    return ce(this.url, t, e);
  }
  reshape(t, e, r) {
    return Ne(this.url, t, e, r);
  }
  simplify(t, e) {
    return fe(this.url, t, e);
  }
  toGeoCoordinateString(t, e) {
    return pe(this.url, t, e);
  }
  trimExtend(t, e) {
    return Te(this.url, t, e);
  }
  union(t, e) {
    return Ie(this.url, t, e);
  }
};
n.UNIT_METER = 9001, n.UNIT_GERMAN_METER = 9031, n.UNIT_FOOT = 9002, n.UNIT_SURVEY_FOOT = 9003, n.UNIT_CLARKE_FOOT = 9005, n.UNIT_FATHOM = 9014, n.UNIT_NAUTICAL_MILE = 9030, n.UNIT_SURVEY_CHAIN = 9033, n.UNIT_SURVEY_LINK = 9034, n.UNIT_SURVEY_MILE = 9035, n.UNIT_KILOMETER = 9036, n.UNIT_CLARKE_YARD = 9037, n.UNIT_CLARKE_CHAIN = 9038, n.UNIT_CLARKE_LINK = 9039, n.UNIT_SEARS_YARD = 9040, n.UNIT_SEARS_FOOT = 9041, n.UNIT_SEARS_CHAIN = 9042, n.UNIT_SEARS_LINK = 9043, n.UNIT_BENOIT_1895A_YARD = 9050, n.UNIT_BENOIT_1895A_FOOT = 9051, n.UNIT_BENOIT_1895A_CHAIN = 9052, n.UNIT_BENOIT_1895A_LINK = 9053, n.UNIT_BENOIT_1895B_YARD = 9060, n.UNIT_BENOIT_1895B_FOOT = 9061, n.UNIT_BENOIT_1895B_CHAIN = 9062, n.UNIT_BENOIT_1895B_LINK = 9063, n.UNIT_INDIAN_FOOT = 9080, n.UNIT_INDIAN_1937_FOOT = 9081, n.UNIT_INDIAN_1962_FOOT = 9082, n.UNIT_INDIAN_1975_FOOT = 9083, n.UNIT_INDIAN_YARD = 9084, n.UNIT_INDIAN_1937_YARD = 9085, n.UNIT_INDIAN_1962_YARD = 9086, n.UNIT_INDIAN_1975_YARD = 9087, n.UNIT_FOOT_1865 = 9070, n.UNIT_RADIAN = 9101, n.UNIT_DEGREE = 9102, n.UNIT_ARCMINUTE = 9103, n.UNIT_ARCSECOND = 9104, n.UNIT_GRAD = 9105, n.UNIT_GON = 9106, n.UNIT_MICRORADIAN = 9109, n.UNIT_ARCMINUTE_CENTESIMAL = 9112, n.UNIT_ARCSECOND_CENTESIMAL = 9113, n.UNIT_MIL6400 = 9114, n.UNIT_BRITISH_1936_FOOT = 9095, n.UNIT_GOLDCOAST_FOOT = 9094, n.UNIT_INTERNATIONAL_CHAIN = 109003, n.UNIT_INTERNATIONAL_LINK = 109004, n.UNIT_INTERNATIONAL_YARD = 109001, n.UNIT_STATUTE_MILE = 9093, n.UNIT_SURVEY_YARD = 109002, n.UNIT_50KILOMETER_LENGTH = 109030, n.UNIT_150KILOMETER_LENGTH = 109031, n.UNIT_DECIMETER = 109005, n.UNIT_CENTIMETER = 109006, n.UNIT_MILLIMETER = 109007, n.UNIT_INTERNATIONAL_INCH = 109008, n.UNIT_US_SURVEY_INCH = 109009, n.UNIT_INTERNATIONAL_ROD = 109010, n.UNIT_US_SURVEY_ROD = 109011, n.UNIT_US_NAUTICAL_MILE = 109012, n.UNIT_UK_NAUTICAL_MILE = 109013, n.UNIT_SQUARE_INCHES = "esriSquareInches", n.UNIT_SQUARE_FEET = "esriSquareFeet", n.UNIT_SQUARE_YARDS = "esriSquareYards", n.UNIT_ACRES = "esriAcres", n.UNIT_SQUARE_MILES = "esriSquareMiles", n.UNIT_SQUARE_MILLIMETERS = "esriSquareMillimeters", n.UNIT_SQUARE_CENTIMETERS = "esriSquareCentimeters", n.UNIT_SQUARE_DECIMETERS = "esriSquareDecimeters", n.UNIT_SQUARE_METERS = "esriSquareMeters", n.UNIT_ARES = "esriAres", n.UNIT_HECTARES = "esriHectares", n.UNIT_SQUARE_KILOMETERS = "esriSquareKilometers", c([N()], n.prototype, "url", void 0), n = c([h("geoscene.tasks.GeometryService")], n);
const Ue = n;
export {
  Ue as default
};

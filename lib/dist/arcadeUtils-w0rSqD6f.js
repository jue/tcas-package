import { cl as V, cC as H, cx as I, cE as b, cW as Oe, d7 as Le, jJ as en, jK as li, jL as Ft, cm as ft, cv as ie, cD as h, cU as ut, cF as E, cN as ye, jM as ee, cy as w, r as vn, w as kn, a4 as se, aW as ci, ab as Y, ck as p, jN as Ne, cQ as N, cz as v, cq as y, cH as me, cY as Ce, ct as ot, cn as le, cX as Dr, hF as mt, jO as hi, jP as fi, jQ as Ut, jR as Bn, jS as On, cL as mn, iF as pi, cK as X, ac as ne, jT as Me, ad as te, ae as ge, cP as k, M as oe, cw as ce, cS as xt, cR as _n, cT as Mt, o as di, ag as mi, c_ as tn, jU as Di, jV as $e, jW as We, cA as K, d8 as gi, d2 as $t, d0 as Ei, d9 as Rn, d3 as yi, d5 as Ai, m as Dn, cB as gn, cO as En, cj as yn, cG as gr, cI as Er, cu as nn, cM as bt, jX as xi, co as de, cp as lt, cr as Se, cs as pt, Z as yr, S as wi, ha as Ln } from "./index-Ek1MTSEY.js";
function St(t, e = !1) {
  if (t == null)
    return null;
  if (H(t))
    return h(t);
  if (V(t))
    return ut(t);
  if (I(t))
    return E(t);
  if (ye(t))
    return ee(t);
  if (w(t)) {
    const r = [];
    for (const i of t)
      r.push(St(i, e));
    return r;
  }
  const n = new x();
  n.immutable = !1;
  for (const r of Object.keys(t)) {
    const i = t[r];
    i !== void 0 && n.setField(r, St(i, e));
  }
  return n.immutable = e, n;
}
let x = class rn {
  constructor(e) {
    this.declaredClass = "geoscene.arcade.Dictionary", this.attributes = null, this.plain = !1, this.immutable = !0, this.attributes = e instanceof rn ? e.attributes : e ?? {};
  }
  field(e) {
    const n = e.toLowerCase(), r = this.attributes[e];
    if (r !== void 0)
      return r;
    for (const i in this.attributes)
      if (i.toLowerCase() === n)
        return this.attributes[i];
    throw new Error("Field not Found : " + e);
  }
  setField(e, n) {
    if (this.immutable)
      throw new Error("Dictionary is Immutable");
    const r = e.toLowerCase();
    if (this.attributes[e] === void 0) {
      for (const i in this.attributes)
        if (i.toLowerCase() === r)
          return void (this.attributes[i] = n);
      this.attributes[e] = n;
    } else
      this.attributes[e] = n;
  }
  hasField(e) {
    const n = e.toLowerCase();
    if (this.attributes[e] !== void 0)
      return !0;
    for (const r in this.attributes)
      if (r.toLowerCase() === n)
        return !0;
    return !1;
  }
  keys() {
    let e = [];
    for (const n in this.attributes)
      e.push(n);
    return e = e.sort(), e;
  }
  castToText() {
    let e = "";
    for (const n in this.attributes) {
      e !== "" && (e += ",");
      const r = this.attributes[n];
      r == null ? e += JSON.stringify(n) + ":null" : V(r) || H(r) || I(r) ? e += JSON.stringify(n) + ":" + JSON.stringify(r) : r instanceof b || r instanceof Oe || r instanceof Array ? e += JSON.stringify(n) + ":" + Le(r) : r instanceof Date ? e += JSON.stringify(n) + ":" + JSON.stringify(r) : r !== null && typeof r == "object" && r.castToText !== void 0 && (e += JSON.stringify(n) + ":" + r.castToText());
    }
    return "{" + e + "}";
  }
  static convertObjectToArcadeDictionary(e, n = !0) {
    const r = new rn();
    r.immutable = !1;
    for (const i in e) {
      const u = e[i];
      u !== void 0 && r.setField(i.toString(), St(u));
    }
    return r.immutable = n, r;
  }
  static convertJsonToArcade(e, n = !1) {
    return St(e, n);
  }
  castAsJson(e = null) {
    const n = {};
    for (let r in this.attributes) {
      const i = this.attributes[r];
      i !== void 0 && (e != null && e.keyTranslate && (r = e.keyTranslate(r)), n[r] = en(i, e));
    }
    return n;
  }
  castDictionaryValueAsJsonAsync(e, n, r, i = null, u) {
    return li(r, i, u).then((a) => (e[n] = a, a));
  }
  castAsJsonAsync(e = null, n = null) {
    const r = {}, i = [];
    for (let u in this.attributes) {
      const a = this.attributes[u];
      n != null && n.keyTranslate && (u = n.keyTranslate(u)), a !== void 0 && (Ft(a) || a instanceof b || a instanceof Date ? r[u] = en(a, n) : i.push(this.castDictionaryValueAsJsonAsync(r, u, a, e, n)));
    }
    return i.length > 0 ? ft(i).then(() => r) : ie(r);
  }
}, kt = class extends x {
  constructor(e) {
    super(), this.immutable = !1, this.setField("url", e), this.immutable = !0;
  }
}, An = class extends x {
  constructor(e, n, r, i, u, a) {
    super(), this.attachmentUrl = u, this.immutable = !1, this.setField("id", e), this.setField("name", n), this.setField("contenttype", r), this.setField("size", i), this.setField("exifinfo", a), this.immutable = !0;
  }
}, j = class De {
  constructor() {
    this.arcadeDeclaredClass = "geoscene.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._datesfixed = !0, this.immutable = !0, this._datefields = null, this.immutable = !0;
  }
  static createFromGraphic(e) {
    const n = new De();
    return n._geometry = vn(e.geometry) ? e.geometry : null, e.attributes === void 0 || e.attributes === null ? n.attributes = {} : n.attributes = e.attributes, e._sourceLayer ? (n._layer = e._sourceLayer, n._datesfixed = !1) : e._layer ? (n._layer = e._layer, n._datesfixed = !1) : e.layer && "fields" in e.layer ? (n._layer = e.layer, n._datesfixed = !1) : e.sourceLayer && "fields" in e.sourceLayer && (n._layer = e.sourceLayer, n._datesfixed = !1), n;
  }
  static createFromArcadeFeature(e) {
    const n = new De();
    return n._datesfixed = e._datesfixed, n.attributes = e.attributes, n._geometry = e._geometry, n._optimizedGeomDefinition = e._optimizedGeomDefinition, e._layer && (n._layer = e._layer), n;
  }
  static createFromOptimisedFeature(e, n, r) {
    const i = new De();
    return i._geometry = e.geometry ? { geometry: e.geometry } : null, i._optimizedGeomDefinition = r, i.attributes = e.attributes || {}, i._layer = n, i._datesfixed = !1, i;
  }
  static createFromArcadeDictionary(e) {
    const n = new De();
    return n.attributes = e.field("attributes"), n.attributes !== null && n.attributes instanceof x ? (n.attributes = n.attributes.attributes, n.attributes === null && (n.attributes = {})) : n.attributes = {}, n._geometry = e.field("geometry"), n._geometry !== null && (n._geometry instanceof x ? n._geometry = De.parseGeometryFromDictionary(n._geometry) : n._geometry instanceof b || (n._geometry = null)), n;
  }
  static createFromGraphicLikeObject(e, n, r = null) {
    const i = new De();
    return n === null && (n = {}), i.attributes = n, i._geometry = vn(e) ? e : null, i._layer = r, i._layer && (i._datesfixed = !1), i;
  }
  repurposeFromGraphicLikeObject(e, n, r = null) {
    n === null && (n = {}), this.attributes = n, this._geometry = e || null, this._layer = r, this._layer ? this._datesfixed = !1 : this._datesfixed = !0;
  }
  castToText() {
    let e = "";
    this._datesfixed === !1 && this._fixDates();
    for (const n in this.attributes) {
      e !== "" && (e += ",");
      const r = this.attributes[n];
      r == null ? e += JSON.stringify(n) + ":null" : V(r) || H(r) || I(r) ? e += JSON.stringify(n) + ":" + JSON.stringify(r) : r instanceof b || r instanceof Oe || r instanceof Array ? e += JSON.stringify(n) + ":" + Le(r) : r instanceof Date ? e += JSON.stringify(n) + ":" + JSON.stringify(r) : r !== null && typeof r == "object" && r.castToText !== void 0 && (e += JSON.stringify(n) + ":" + r.castToText());
    }
    return '{"geometry":' + (this.geometry() === null ? "null" : Le(this.geometry())) + ',"attributes":{' + e + "}}";
  }
  _fixDates() {
    if (this._datefields !== null)
      return this._datefields.length > 0 && this._fixDateFields(this._datefields), void (this._datesfixed = !0);
    const e = [];
    for (let n = 0; n < this._layer.fields.length; n++) {
      const r = this._layer.fields[n];
      r.type !== "date" && r.type !== "esriFieldTypeDate" || e.push(r.name);
    }
    this._datefields = e, e.length > 0 && this._fixDateFields(e), this._datesfixed = !0;
  }
  _fixDateFields(e) {
    this.attributes = { ...this.attributes };
    for (let n = 0; n < e.length; n++) {
      let r = this.attributes[e[n]];
      if (r !== null)
        if (r === void 0) {
          for (const i in this.attributes)
            if (i.toLowerCase() === e[n].toLowerCase()) {
              r = this.attributes[i], r !== null && (r instanceof Date || (this.attributes[i] = new Date(r)));
              break;
            }
        } else
          r instanceof Date || (this.attributes[e[n]] = new Date(r));
    }
  }
  geometry() {
    return this._geometry === null || this._geometry instanceof b || (this._optimizedGeomDefinition ? (this._geometry = kn(se(ci(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM))), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = kn(se(this._geometry))), this._geometry;
  }
  field(e) {
    this._datesfixed === !1 && this._fixDates();
    const n = this.attributes[e];
    if (n !== void 0)
      return n;
    const r = e.toLowerCase();
    for (const i in this.attributes)
      if (i.toLowerCase() === r)
        return this.attributes[i];
    if (this._hasFieldDefinition(r))
      return null;
    throw new Error("Field not Found : " + e);
  }
  _hasFieldDefinition(e) {
    if (this._layer === null)
      return !1;
    for (let n = 0; n < this._layer.fields.length; n++)
      if (this._layer.fields[n].name.toLowerCase() === e)
        return !0;
    return !1;
  }
  setField(e, n) {
    if (this.immutable)
      throw new Error("Feature is Immutable");
    if (Ft(n) === !1)
      throw new Error("Illegal Value Assignment to Feature");
    const r = e.toLowerCase();
    if (this.attributes[e] === void 0) {
      for (const i in this.attributes)
        if (i.toLowerCase() === r)
          return void (this.attributes[i] = n);
      this.attributes[e] = n;
    } else
      this.attributes[e] = n;
  }
  hasField(e) {
    const n = e.toLowerCase();
    if (this.attributes[e] !== void 0)
      return !0;
    for (const r in this.attributes)
      if (r.toLowerCase() === n)
        return !0;
    return !!this._hasFieldDefinition(n);
  }
  keys() {
    let e = [];
    const n = {};
    for (const r in this.attributes)
      e.push(r), n[r.toLowerCase()] = 1;
    if (this._layer !== null)
      for (let r = 0; r < this._layer.fields.length; r++) {
        const i = this._layer.fields[r];
        n[i.name.toLowerCase()] !== 1 && e.push(i.name);
      }
    return e = e.sort(), e;
  }
  static parseGeometryFromDictionary(e) {
    const n = De._convertDictionaryToJson(e, !0);
    return n.hasm !== void 0 && (n.hasM = n.hasm, delete n.hasm), n.hasz !== void 0 && (n.hasZ = n.hasz, delete n.hasz), n.spatialreference !== void 0 && (n.spatialReference = n.spatialreference, delete n.spatialreference), n.rings !== void 0 && (n.rings = this._fixPathArrays(n.rings, n.hasZ === !0, n.hasZ === !0)), n.paths !== void 0 && (n.paths = this._fixPathArrays(n.paths, n.hasZ === !0, n.hasM === !0)), n.points !== void 0 && (n.points = this._fixPointArrays(n.points, n.hasZ === !0, n.hasM === !0)), se(n);
  }
  static _fixPathArrays(e, n, r) {
    const i = [];
    if (e instanceof Array)
      for (let u = 0; u < e.length; u++)
        i.push(this._fixPointArrays(e[u], n, r));
    else if (e instanceof Oe)
      for (let u = 0; u < e.length(); u++)
        i.push(this._fixPointArrays(e.get(u), n, r));
    return i;
  }
  static _fixPointArrays(e, n, r) {
    const i = [];
    if (e instanceof Array)
      for (let u = 0; u < e.length; u++) {
        const a = e[u];
        a instanceof Y ? n && r ? i.push([a.x, a.y, a.z, a.m]) : n ? i.push([a.x, a.y, a.z]) : r ? i.push([a.x, a.y, a.m]) : i.push([a.x, a.y]) : a instanceof Oe ? i.push(a.toArray()) : i.push(a);
      }
    else if (e instanceof Oe)
      for (let u = 0; u < e.length(); u++) {
        const a = e.get(u);
        a instanceof Y ? n && r ? i.push([a.x, a.y, a.z, a.m]) : n ? i.push([a.x, a.y, a.z]) : r ? i.push([a.x, a.y, a.m]) : i.push([a.x, a.y]) : a instanceof Oe ? i.push(a.toArray()) : i.push(a);
      }
    return i;
  }
  static _convertDictionaryToJson(e, n = !1) {
    const r = {};
    for (const i in e.attributes) {
      let u = e.attributes[i];
      u instanceof x && (u = De._convertDictionaryToJson(u)), n ? r[i.toLowerCase()] = u : r[i] = u;
    }
    return r;
  }
  static parseAttributesFromDictionary(e) {
    const n = {};
    for (const r in e.attributes) {
      const i = e.attributes[r];
      if (!Ft(i))
        throw new Error("Illegal Argument");
      n[r] = i;
    }
    return n;
  }
  static fromJson(e) {
    let n = null;
    e.geometry !== null && e.geometry !== void 0 && (n = se(e.geometry));
    const r = {};
    if (e.attributes !== null && e.attributes !== void 0)
      for (const i in e.attributes) {
        const u = e.attributes[i];
        if (u === null)
          r[i] = u;
        else {
          if (!(I(u) || H(u) || V(u) || ye(u)))
            throw new Error("Illegal Argument");
          r[i] = u;
        }
      }
    return De.createFromGraphicLikeObject(n, r, null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    if (this._layer === null)
      return "";
    const e = this._layer.gdbVersion;
    return e === void 0 ? "" : e === "" && this._layer.capabilities && this._layer.capabilities.isVersioned ? "SDE.DEFAULT" : e;
  }
  castAsJson(e) {
    const n = { attributes: {}, geometry: (e == null ? void 0 : e.keepGeometryType) === !0 ? this.geometry() : this.geometry().toJSON() };
    for (const r in this.attributes) {
      const i = this.attributes[r];
      i !== void 0 && (n.attributes[r] = en(i, e));
    }
    return n;
  }
  castAsJsonAsync(e = null, n) {
    return ie(this.castAsJson(n));
  }
};
const be = { all: { min: "2", max: "2" }, none: { min: "2", max: "2" }, any: { min: "2", max: "2" }, reduce: { min: "2", max: "3" }, map: { min: "2", max: "2" }, filter: { min: "2", max: "2" }, fromcodepoint: { min: "1", max: "*" }, fromcharcode: { min: "1", max: "*" }, tocodepoint: { min: "1", max: "2" }, tocharcode: { min: "1", max: "2" }, concatenate: { min: "0", max: "*" }, expects: { min: "1", max: "*" }, getfeatureset: { min: "1", max: "2" }, week: { min: "1", max: "2" }, fromjson: { min: "1", max: "1" }, length3d: { min: "1", max: "2" }, tohex: { min: "1", max: "1" }, hash: { min: "1", max: "1" }, isoweek: { min: "1", max: "1" }, isoweekday: { min: "1", max: "1" }, isomonth: { min: "1", max: "1" }, isoyear: { min: "1", max: "1" }, resize: { min: "2", max: "3" }, slice: { min: "0", max: "*" }, splice: { min: "0", max: "*" }, push: { min: "2", max: "2" }, pop: { min: "1", max: "1" }, includes: { min: "2", max: "2" }, array: { min: "1", max: "2" }, front: { min: "1", max: "1" }, back: { min: "1", max: "1" }, insert: { min: "3", max: "3" }, erase: { min: "2", max: "2" }, split: { min: "2", max: "4" }, guid: { min: "0", max: "1" }, today: { min: "0", max: "0" }, angle: { min: "2", max: "3" }, bearing: { min: "2", max: "3" }, urlencode: { min: "1", max: "1" }, now: { min: "0", max: "0" }, timestamp: { min: "0", max: "0" }, day: { min: "1", max: "1" }, month: { min: "1", max: "1" }, year: { min: "1", max: "1" }, hour: { min: "1", max: "1" }, second: { min: "1", max: "1" }, millisecond: { min: "1", max: "1" }, minute: { min: "1", max: "1" }, weekday: { min: "1", max: "1" }, toutc: { min: "1", max: "1" }, tolocal: { min: "1", max: "1" }, date: { min: "0", max: "7" }, datediff: { min: "2", max: "3" }, dateadd: { min: "2", max: "3" }, trim: { min: "1", max: "1" }, text: { min: "1", max: "2" }, left: { min: "2", max: "2" }, right: { min: "2", max: "2" }, mid: { min: "2", max: "3" }, upper: { min: "1", max: "1" }, proper: { min: "1", max: "2" }, lower: { min: "1", max: "1" }, find: { min: "2", max: "3" }, iif: { min: "3", max: "3" }, decode: { min: "2", max: "*" }, when: { min: "2", max: "*" }, defaultvalue: { min: "2", max: "2" }, isempty: { min: "1", max: "1" }, domaincode: { min: "2", max: "4" }, domainname: { min: "2", max: "4" }, polygon: { min: "1", max: "1" }, point: { min: "1", max: "1" }, polyline: { min: "1", max: "1" }, extent: { min: "1", max: "1" }, multipoint: { min: "1", max: "1" }, ringisclockwise: { min: "1", max: "1" }, geometry: { min: "1", max: "1" }, count: { min: "0", max: "*" }, number: { min: "1", max: "2" }, acos: { min: "1", max: "1" }, asin: { min: "1", max: "1" }, atan: { min: "1", max: "1" }, atan2: { min: "2", max: "2" }, ceil: { min: "1", max: "2" }, floor: { min: "1", max: "2" }, round: { min: "1", max: "2" }, cos: { min: "1", max: "1" }, exp: { min: "1", max: "1" }, log: { min: "1", max: "1" }, min: { min: "0", max: "*" }, constrain: { min: "3", max: "3" }, console: { min: "0", max: "*" }, max: { min: "0", max: "*" }, pow: { min: "2", max: "2" }, random: { min: "0", max: "0" }, sqrt: { min: "1", max: "1" }, sin: { min: "1", max: "1" }, tan: { min: "1", max: "1" }, abs: { min: "1", max: "1" }, isnan: { min: "1", max: "1" }, stdev: { min: "0", max: "*" }, average: { min: "0", max: "*" }, mean: { min: "0", max: "*" }, sum: { min: "0", max: "*" }, variance: { min: "0", max: "*" }, distinct: { min: "0", max: "*" }, first: { min: "1", max: "1" }, top: { min: "2", max: "2" }, boolean: { min: "1", max: "1" }, dictionary: { min: "0", max: "*" }, typeof: { min: "1", max: "1" }, reverse: { min: "1", max: "1" }, replace: { min: "3", max: "4" }, sort: { min: "1", max: "2" }, feature: { min: "1", max: "*" }, haskey: { min: "2", max: "2" }, indexof: { min: "2", max: "2" }, disjoint: { min: "2", max: "2" }, intersects: { min: "2", max: "2" }, touches: { min: "2", max: "2" }, crosses: { min: "2", max: "2" }, within: { min: "2", max: "2" }, contains: { min: "2", max: "2" }, overlaps: { min: "2", max: "2" }, equals: { min: "2", max: "2" }, relate: { min: "3", max: "3" }, intersection: { min: "2", max: "2" }, union: { min: "1", max: "2" }, difference: { min: "2", max: "2" }, symmetricdifference: { min: "2", max: "2" }, clip: { min: "2", max: "2" }, cut: { min: "2", max: "2" }, area: { min: "1", max: "2" }, areageodetic: { min: "1", max: "2" }, length: { min: "1", max: "2" }, lengthgeodetic: { min: "1", max: "2" }, distancegeodetic: { min: "2", max: "3" }, distance: { min: "2", max: "3" }, densify: { min: "2", max: "3" }, densifygeodetic: { min: "2", max: "3" }, generalize: { min: "2", max: "4" }, buffer: { min: "2", max: "3" }, buffergeodetic: { min: "2", max: "3" }, offset: { min: "2", max: "6" }, rotate: { min: "2", max: "3" }, issimple: { min: "1", max: "1" }, simplify: { min: "1", max: "1" }, centroid: { min: "1", max: "1" }, isselfintersecting: { min: "1", max: "1" }, multiparttosinglepart: { min: "1", max: "1" }, setgeometry: { min: "2", max: "2" }, portal: { min: "1", max: "1" }, getuser: { min: "1", max: "2" }, subtypes: { min: "1", max: "1" }, subtypecode: { min: "1", max: "1" }, subtypename: { min: "1", max: "1" }, domain: { min: "2", max: "3" }, convertdirection: { min: "3", max: "3" }, schema: { min: "1", max: "1" } };
for (const t in be)
  be[t].fmin = be[t].min, be[t].fmax = be[t].max;
const Ci = ["featureset", "getuser", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "getfeatureset", "attachments", "featuresetbyportalitem"], Fi = ["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "length3d", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "simplify", "multiparttosinglepart"];
function Un(t) {
  return typeof t == "string" || t instanceof String;
}
function sn(t, e) {
  const n = be[t.name.toLowerCase()];
  n === void 0 ? be[t.name.toLowerCase()] = e === "sync" ? { min: t.min, max: t.max } : { fmin: t.min, fmax: t.max } : e === "sync" ? (n.min = t.min, n.max = t.max) : (n.fmin = t.min, n.fmax = t.max);
}
function Dt(t, e) {
  return t.min !== "0" && e.length < Number(t.min) || t.max !== "*" && e.length > Number(t.max) ? -2 : 1;
}
function Ar(t, e, n) {
  if (n.localScope !== null && n.localScope[t.toLowerCase()] !== void 0) {
    const r = n.localScope[t.toLowerCase()];
    if (r.type === "FormulaFunction")
      return r.signature === void 0 && (r.signature = { min: "0", max: "*" }), Dt(r.signature, e);
    if (r.type === "any")
      return r.signature === void 0 && (r.signature = { min: "0", max: "*" }), Dt(r.signature, e);
  }
  if (n.globalScope[t.toLowerCase()] !== void 0) {
    const r = n.globalScope[t.toLowerCase()];
    if (r.type === "FormulaFunction")
      return r.signature === void 0 && (r.signature = { min: "0", max: "*" }), Dt(r.signature, e);
    if (r.type === "any")
      return r.signature === void 0 && (r.signature = { min: "0", max: "*" }), Dt(r.signature, e);
  }
  return -1;
}
function Ie(t, e) {
  if (t)
    for (const n of t)
      P(n, e);
}
function P(t, e) {
  if (t && e(t) !== !1)
    switch (t.type) {
      case "ArrayExpression":
        Ie(t.elements, e);
        break;
      case "AssignmentExpression":
      case "BinaryExpression":
      case "LogicalExpression":
        P(t.left, e), P(t.right, e);
        break;
      case "BlockStatement":
      case "Program":
        Ie(t.body, e);
        break;
      case "BreakStatement":
      case "ContinueStatement":
      case "EmptyStatement":
      case "Identifier":
      case "Literal":
        break;
      case "CallExpression":
        P(t.callee, e), Ie(t.arguments, e);
        break;
      case "ExpressionStatement":
        P(t.expression, e);
        break;
      case "ForInStatement":
        P(t.left, e), P(t.right, e), P(t.body, e);
        break;
      case "ForStatement":
        P(t.init, e), P(t.test, e), P(t.update, e), P(t.body, e);
        break;
      case "FunctionDeclaration":
        P(t.id, e), Ie(t.params, e), P(t.body, e);
        break;
      case "IfStatement":
        P(t.test, e), P(t.consequent, e), P(t.alternate, e);
        break;
      case "MemberExpression":
        P(t.object, e), P(t.property, e);
        break;
      case "ObjectExpression":
        Ie(t.properties, e);
        break;
      case "Property":
        P(t.key, e), P(t.value, e);
        break;
      case "ReturnStatement":
      case "UnaryExpression":
      case "UpdateExpression":
        P(t.argument, e);
        break;
      case "VariableDeclaration":
        Ie(t.declarations, e);
        break;
      case "VariableDeclarator":
        P(t.id, e), P(t.init, e);
        break;
      case "TemplateLiteral":
        Ie(t.expressions, e), Ie(t.quasis, e);
    }
}
function R(t, e = !0) {
  let n = d(t, "SYNTAX", "UNREOGNISED");
  try {
    switch (t.type) {
      case "VariableDeclarator":
        return t.id.type !== "Identifier" ? d(t, "SYNTAX", "VARIABLEMUSTHAVEIDENTIFIER") : t.init !== null ? R(t.init, !1) : "";
      case "VariableDeclaration":
        for (let r = 0; r < t.declarations.length; r++)
          if (n = R(t.declarations[r], e), n !== "")
            return n;
        return "";
      case "ForInStatement":
        if (n = R(t.left, e), n !== "")
          return n;
        if (t.left.type === "VariableDeclaration") {
          if (t.left.declarations.length > 1)
            return d(t, "SYNTAX", "ONLY1VAR");
          if (t.left.declarations[0].init !== null)
            return d(t, "SYNTAX", "CANNOTDECLAREVAL");
        } else if (t.left.type !== "Identifier")
          return d(t, "SYNTAX", "LEFTNOTVAR");
        return n = R(t.right, e), n !== "" ? n : (n = R(t.body, e), n !== "" ? n : "");
      case "ForStatement":
        return t.test !== null && (n = R(t.test, e), n !== "") || t.init !== null && (n = R(t.init, e), n !== "") || t.update !== null && (n = R(t.update, e), n !== "") || t.body !== null && (n = R(t.body, e), n !== "") ? n : "";
      case "ContinueStatement":
      case "EmptyStatement":
      case "BreakStatement":
      case "Literal":
      case "TemplateElement":
        return "";
      case "IfStatement":
        return n = R(t.test, e), n !== "" || t.consequent !== null && (n = R(t.consequent, !1), n !== "") || t.alternate !== null && (n = R(t.alternate, !1), n !== "") ? n : "";
      case "BlockStatement": {
        const r = [];
        for (let i = 0; i < t.body.length; i++)
          t.body[i].type !== "EmptyStatement" && r.push(t.body[i]);
        t.body = r;
        for (let i = 0; i < t.body.length; i++)
          if (n = R(t.body[i], e), n !== "")
            return n;
        return "";
      }
      case "FunctionDeclaration":
        return e === !1 ? d(t, "SYNTAX", "GLOBALFUNCTIONSONLY") : t.id.type !== "Identifier" ? d(t, "SYNTAX", "FUNCTIONMUSTHAVEIDENTIFIER") : R(t.body, !1);
      case "ReturnStatement":
        return t.argument !== null ? R(t.argument, e) : "";
      case "UpdateExpression":
        return t.argument.type !== "Identifier" && t.argument.type !== "MemberExpression" ? d(t, "SYNTAX", "ASSIGNMENTTOVARSONLY") : R(t.argument, e);
      case "AssignmentExpression":
        if (t.left.type !== "Identifier" && t.left.type !== "MemberExpression")
          return d(t, "SYNTAX", "ASSIGNMENTTOVARSONLY");
        if (n = R(t.left, e), n !== "")
          return n;
        switch (t.operator) {
          case "=":
          case "/=":
          case "*=":
          case "%=":
          case "+=":
          case "-=":
            break;
          default:
            return d(t, "SYNTAX", "OPERATORNOTRECOGNISED");
        }
        return R(t.right, !1);
      case "ExpressionStatement":
        return t.expression.type === "AssignmentExpression" || t.expression.type, R(t.expression, !1);
      case "Identifier":
        n = "";
        break;
      case "MemberExpression":
        return n = R(t.object, e), n !== "" ? n : t.computed === !0 ? R(t.property, e) : "";
      case "CallExpression":
        if (t.callee.type !== "Identifier")
          return d(t, "SYNTAX", "ONLYNODESSUPPORTED");
        n = "";
        for (let r = 0; r < t.arguments.length; r++)
          if (n = R(t.arguments[r], e), n !== "")
            return n;
        return "";
      case "UnaryExpression":
        n = R(t.argument, e);
        break;
      case "BinaryExpression":
        if (n = R(t.left, e), n !== "" || (n = R(t.right, e), n !== ""))
          return n;
        switch (t.operator) {
          case "|":
          case "&":
          case ">>":
          case "<<":
          case ">>>":
          case "^":
          case "==":
          case "!=":
          case "<":
          case "<=":
          case ">":
          case ">=":
          case "+":
          case "-":
          case "*":
          case "/":
          case "%":
            break;
          default:
            return d(t, "SYNTAX", "OPERATORNOTRECOGNISED");
        }
        return "";
      case "LogicalExpression":
        if (n = R(t.left, e), n !== "" || (n = R(t.right), n !== ""))
          return n;
        switch (t.operator) {
          case "&&":
          case "||":
            break;
          default:
            return d(t, "SYNTAX", "OPERATORNOTRECOGNISED");
        }
        return "";
      case "ArrayExpression":
        n = "";
        for (let r = 0; r < t.elements.length; r++)
          if (n = R(t.elements[r], e), n !== "")
            return n;
        return n;
      case "TemplateLiteral":
        n = "";
        for (let r = 0; r < t.quasis.length; r++)
          if (n = R(t.quasis[r], e), n !== "")
            return n;
        for (let r = 0; r < t.expressions.length; r++)
          if (n = R(t.expressions[r], e), n !== "")
            return n;
        return n;
      case "ObjectExpression":
        n = "";
        for (let r = 0; r < t.properties.length; r++) {
          if (n = "", t.properties[r].key !== null && (t.properties[r].key.type !== "Literal" && t.properties[r].key.type !== "Identifier" && (n = d(t, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING")), t.properties[r].key.type === "Literal")) {
            const i = t.properties[r].key, u = "value" in i ? i.value : null;
            typeof u == "string" || u instanceof String || (n = d(t, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING"));
          }
          if (n === "" && (n = R(t.properties[r], e)), n !== "")
            return n;
        }
        return n;
      case "Property":
        return t.key.type !== "Literal" && t.key.type !== "Identifier" ? d(t, "SYNTAX", "ONLYLITERAL") : (t.key.type !== "Identifier" && (n = R(t.key, e), n !== "") || (n = R(t.value, e)), n);
      default:
        return n;
    }
    return n;
  } catch (r) {
    throw r;
  }
}
function L(t, e) {
  let n = d(t, "SYNTAX", "UNREOGNISED"), r = null, i = "";
  try {
    switch (t.type) {
      case "VariableDeclarator": {
        const u = t.init === null ? "" : L(t.init, e);
        return u !== "" ? u : (t.id.type === "Identifier" && (e.localScope === null ? e.globalScope[t.id.name.toLowerCase()] = { type: "any" } : e.localScope[t.id.name.toLowerCase()] = { type: "any" }), "");
      }
      case "FunctionDeclaration":
        return r = wr(t.id.name.toLowerCase(), t), i = Ii(t, e), i !== "" ? i : e.localScope !== null ? d(t, "SYNTAX", "GLOBALFUNCTIONSONLY") : (r.isnative = !1, e.globalScope[t.id.name.toLowerCase()] = { type: "FormulaFunction", signature: [r] }, "");
      case "VariableDeclaration":
        n = "";
        for (let u = 0; u < t.declarations.length; u++)
          if (n = L(t.declarations[u], e), n !== "")
            return n;
        return n;
      case "IfStatement":
        return n = L(t.test, e), n !== "" ? n : t.test.type === "AssignmentExpression" || t.test.type === "UpdateExpression" ? d(t.test, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : t.consequent !== null && (n = L(t.consequent, e), n !== "") || t.alternate !== null && (n = L(t.alternate, e), n !== "") ? n : "";
      case "EmptyStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "Literal":
      case "TemplateElement":
        return "";
      case "BlockStatement":
        for (let u = 0; u < t.body.length; u++)
          if (n = L(t.body[u], e), n !== "")
            return n;
        return "";
      case "ReturnStatement":
        return t.argument !== null ? L(t.argument, e) : "";
      case "ForInStatement":
        if (t.left.type === "VariableDeclaration") {
          if (t.left.declarations.length > 1)
            return d(t, "SYNTAX", "ONLY1VAR");
          if (t.left.declarations[0].init !== null)
            return d(t, "SYNTAX", "CANNOTDECLAREVAL");
        } else if (t.left.type !== "Identifier")
          return d(t, "SYNTAX", "LEFTNOTVAR");
        return n = L(t.left, e), n !== "" ? n : (n = L(t.right, e), n !== "" ? n : (n = L(t.body, e), n !== "" ? n : ""));
      case "ForStatement":
        return t.init !== null && (n = L(t.init, e), n !== "") || t.test !== null && (n = L(t.test, e), n !== "") || t.body !== null && (n = L(t.body, e), n !== "") || t.update !== null && (n = L(t.update, e), n !== "") ? n : "";
      case "UpdateExpression": {
        if (t.argument.type !== "Identifier" && t.argument.type !== "MemberExpression")
          return d(t, "SYNTAX", "ASSIGNMENTTOVARSONLY");
        let u = !1;
        return t.argument.type === "MemberExpression" ? L(t.argument, e) : (e.localScope !== null && e.localScope[t.argument.name.toLowerCase()] !== void 0 && (u = !0), e.globalScope[t.argument.name.toLowerCase()] !== void 0 && (u = !0), u === !1 ? "Identifier " + t.argument.name + " has not been declared." : "");
      }
      case "AssignmentExpression": {
        if (t.left.type !== "Identifier" && t.left.type !== "MemberExpression")
          return d(t, "SYNTAX", "ASSIGNMENTTOVARSONLY");
        let u = L(t.right, e);
        if (u !== "")
          return u;
        let a = !1;
        return t.left.type === "MemberExpression" ? (u = L(t.left, e), u !== "" ? u : "") : (e.localScope !== null && e.localScope[t.left.name.toLowerCase()] !== void 0 && (a = !0), e.globalScope[t.left.name.toLowerCase()] !== void 0 && (a = !0), a === !1 ? "Identifier " + t.left.name + " has not been declared." : "");
      }
      case "ExpressionStatement":
        return t.expression.type === "AssignmentExpression" || t.expression.type, L(t.expression, e);
      case "Identifier": {
        const u = t.name.toLowerCase();
        if (e.localScope !== null && e.localScope[u] !== void 0)
          return "";
        n = e.globalScope[u] !== void 0 ? "" : d(t, "SYNTAX", "VARIABLENOTFOUND");
        break;
      }
      case "MemberExpression":
        return n = L(t.object, e), n !== "" ? n : t.computed === !0 ? L(t.property, e) : "";
      case "CallExpression": {
        if (t.callee.type !== "Identifier")
          return d(t, "SYNTAX", "ONLYNODESSUPPORTED");
        n = "";
        for (let a = 0; a < t.arguments.length; a++)
          if (n = L(t.arguments[a], e), n !== "")
            return n;
        const u = Ar(t.callee.name, t.arguments, e);
        u === -1 && (n = d(t, "SYNTAX", "NOTFOUND")), u === -2 && (n = d(t, "SYNTAX", "WRONGSIGNATURE"));
        break;
      }
      case "UnaryExpression":
        n = L(t.argument, e);
        break;
      case "BinaryExpression":
        return n = L(t.left, e), n !== "" ? n : (n = L(t.right, e), n !== "" ? n : "");
      case "LogicalExpression":
        return n = L(t.left, e), n !== "" ? n : t.left.type === "AssignmentExpression" || t.left.type === "UpdateExpression" ? d(t.left, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : (n = L(t.right, e), n !== "" ? n : t.right.type === "AssignmentExpression" || t.right.type === "UpdateExpression" ? d(t.right, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : "");
      case "ArrayExpression":
        n = "";
        for (let u = 0; u < t.elements.length; u++)
          if (n = L(t.elements[u], e), n !== "")
            return n;
        return n;
      case "TemplateLiteral":
        n = "";
        for (let u = 0; u < t.quasis.length; u++)
          if (n = L(t.quasis[u], e), n !== "")
            return n;
        for (let u = 0; u < t.expressions.length; u++)
          if (n = L(t.expressions[u], e), n !== "")
            return n;
        return n;
      case "ObjectExpression":
        n = "";
        for (let u = 0; u < t.properties.length; u++) {
          if (n = "", t.properties[u].key !== null && (t.properties[u].key.type !== "Literal" && t.properties[u].key.type !== "Identifier" && (n = d(t, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING")), t.properties[u].key.type === "Literal")) {
            const a = t.properties[u].key, s = "value" in a ? a.value : null;
            typeof s == "string" || s instanceof String || (n = d(t, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING"));
          }
          if (n === "" && (n = L(t.properties[u], e)), n !== "")
            return n;
        }
        return n;
      case "Property":
        return t.key.type !== "Literal" && t.key.type !== "Identifier" ? d(t, "SYNTAX", "ONLYLITERAL") : (t.key.type !== "Identifier" && (n = L(t.key, e), n !== "") || (n = L(t.value, e)), n);
      default:
        return n;
    }
    return n;
  } catch (u) {
    throw u;
  }
}
function xr(t, e) {
  let n = !1;
  const r = e.toLowerCase();
  return P(t, (i) => !n && (i.type === "Identifier" && i.name && i.name.toLowerCase() === r && (n = !0), !0)), n;
}
function bi(t, e) {
  let n = !1;
  const r = e.toLowerCase();
  return P(t, (i) => !n && (i.type !== "CallExpression" || i.callee.type !== "Identifier" || !i.callee.name || i.callee.name.toLowerCase() !== r || (n = !0, !1))), n;
}
function Si(t) {
  const e = [];
  return P(t, (n) => n.type !== "MemberExpression" || n.object.type !== "Identifier" || (n.computed === !1 && n.object && n.object.name && n.property && n.property.type === "Identifier" && n.property.name ? e.push(n.object.name.toLowerCase() + "." + n.property.name.toLowerCase()) : n.object && n.object.name && n.property && n.property.type === "Literal" && typeof n.property.value == "string" && e.push(n.object.name.toLowerCase() + "." + n.property.value.toString().toLowerCase()), !1)), e;
}
function Ni(t) {
  const e = [];
  return P(t, (n) => {
    if (n.type === "CallExpression") {
      if (n.callee.type === "Identifier" && n.callee.name.toLowerCase() === "expects") {
        let r = "";
        for (let i = 0; i < (n.arguments || []).length; i++)
          i === 0 ? n.arguments[i].type === "Identifier" && (r = n.arguments[i].name.toLowerCase()) : r && n.arguments[i].type === "Literal" && Un(n.arguments[i].value) && e.push(r + "." + n.arguments[i].value.toLowerCase());
        return !1;
      }
      if (n.callee.type === "Identifier" && ["domainname", "domaincode", "domain", "haskey"].indexOf(n.callee.name.toLowerCase()) > -1 && n.arguments.length >= 2) {
        let r = "";
        return n.arguments[0].type === "Identifier" && (r = n.arguments[0].name.toLowerCase()), r && n.arguments[1].type === "Literal" && Un(n.arguments[1].value) && e.push(r + "." + n.arguments[1].value.toLowerCase()), !1;
      }
    }
    return n.type !== "MemberExpression" || n.object.type !== "Identifier" || (n.computed === !1 && n.object && n.object.name && n.property && n.property.type === "Identifier" && n.property.name ? e.push(n.object.name.toLowerCase() + "." + n.property.name.toLowerCase()) : n.object && n.object.name && n.property && n.property.type === "Literal" && typeof n.property.value == "string" && e.push(n.object.name.toLowerCase() + "." + n.property.value.toString().toLowerCase()), !1);
  }), e;
}
function wr(t, e) {
  const n = [];
  if (e.params !== void 0 && e.params !== null)
    for (let r = 0; r < e.params.length; r++)
      n.push("any");
  return { name: t, return: "any", params: n };
}
function Ii(t, e) {
  const n = { globalScope: e.globalScope, localScope: {} };
  for (let r = 0; r < t.params.length; r++) {
    const i = t.params[r].name;
    n.localScope[i.toLowerCase()] = { type: "any" };
  }
  return L(t.body, n);
}
function Cr(t, e, n, r) {
  const i = {};
  t == null && (t = {}), n == null && (n = {}), i.infinity = { type: "any" }, i.textformatting = { type: "any" }, i.pi = { type: "any" };
  for (const u in e)
    r === "sync" && e[u].min !== void 0 ? i[u] = { type: "FormulaFunction", signature: { min: e[u].min, max: e[u].max } } : r !== "sync" && e[u].fmin !== void 0 && (i[u] = { type: "FormulaFunction", signature: { min: e[u].fmin, max: e[u].fmax } });
  for (let u = 0; u < n.length; u++) {
    const a = n[u];
    i[a.name] = { type: "FormulaFunction", signature: a };
  }
  for (const u in t)
    i[u] = t[u], i[u].type = "any";
  return i;
}
function Ti(t, e, n = "async", r = be) {
  const i = { globalScope: Cr(e.vars, r, e.customFunctions, n), localScope: null };
  return L(t.body[0].body, i);
}
function vi(t) {
  return t.body[0].body.type !== "BlockStatement" ? "Invalid formula content." : R(t.body[0].body);
}
function d(t, e, n) {
  let r = "";
  switch (e) {
    case "SYNTAX":
    default:
      r = "Syntax Error: ";
      break;
    case "RUNTIME":
      r = "Runtime Error: ";
  }
  try {
    switch (t.type) {
      case "IfStatement":
        switch (n) {
          case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":
            r += " Assignments not be made in logical tests";
            break;
          case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":
            r += " Non Boolean used as Condition";
        }
        break;
      case "UpdateExpression":
      case "AssignmentExpression":
        switch (n) {
          case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":
            r += " Assignments not be made in logical tests";
            break;
          case "ASSIGNMENTTOVARSONLY":
            r += " Assignments can only be made to identifiers";
        }
        break;
      case "ExpressionStatement":
        r += " Assignments can only be made to identifiers";
        break;
      case "FunctionDeclaration":
        switch (n) {
          case "GLOBALFUNCTIONSONLY":
            r += " Functions cannot be declared as variables";
            break;
          case "FUNCTIONMUSTHAVEIDENTIFIER":
            r += " Function Definition must have an identifier";
        }
        break;
      case "VariableDeclaration":
        r += " Only 1 variable can be declared at a time";
        break;
      case "VariableDeclarator":
        switch (n) {
          case "FUNCTIONVARIABLEDECLARATOR":
            r += " Functions cannot be declared as variables";
            break;
          case "VARIABLEMUSTHAVEIDENTIFIER":
            r += " Variable Definition must have an identifier";
        }
        break;
      case "Identifier":
        r += " Identifier Not Found. ", r += t.name;
        break;
      case "ObjectExpression":
        n === "OBJECTPROPERTYMUSTBESTRING" && (r += " Property name must be a string");
        break;
      case "ForStatement":
        n === "CANNOT_USE_NONBOOLEAN_IN_CONDITION" && (r += " Non Boolean used as Condition");
        break;
      case "ForInStatement":
        switch (n) {
          case "ONLY1VAR":
            r += " Can only declare 1 var for use with IN";
            break;
          case "CANNOTDECLAREVAL":
            r += " Can only declare value for use with IN";
            break;
          case "LEFTNOVAR":
            r += "Must provide a variable to iterate with.";
            break;
          case "VARIABLENOTDECLARED":
            r += "Variable must be declared before it is used..";
            break;
          case "CANNOTITERATETHISTYPE":
            r += "This type cannot be used in an IN loop";
        }
        break;
      case "MemberExpression":
        switch (n) {
          case "PROPERTYNOTFOUND":
            r += "Cannot find member property. ", r += t.computed === !1 && t.property.type === "Identifier" ? t.property.name : "";
            break;
          case "OUTOFBOUNDS":
            r += "Out of Bounds. ", r += t.computed === !1 && t.property.type === "Identifier" ? t.property.name : "";
            break;
          case "NOTFOUND":
            r += "Cannot call member method on null. ", r += t.computed === !1 && t.property.type === "Identifier" ? t.property.name : "";
            break;
          case "INVALIDTYPE":
            r += "Cannot call member property on object of this type. ", r += t.computed === !1 && t.property.type === "Identifier" ? t.property.name : "";
        }
        break;
      case "Property":
        n === "ONLYLITERAL" && (r += "Property names must be literals or identifiers");
        break;
      case "Literal":
        break;
      case "CallExpression":
        switch (n) {
          case "WRONGSIGNATURE":
            r += "Function signature does not match: ", r += t.callee.type === "Identifier" ? t.callee.name : "";
            break;
          case "ONLYNODESUPPORTED":
            r += "Functions must be declared.", r += t.callee.type === "Identifier" ? t.callee.name : "";
            break;
          case "NOTAFUNCTION":
            r += "Not a Function: ", r += t.callee.type === "Identifier" ? t.callee.name : "";
            break;
          case "NOTFOUND":
            r += "Function Not Found: " + (t.callee.type === "Identifier" ? t.callee.name : "");
        }
        break;
      case "UnaryExpression":
        switch (n) {
          case "NOTSUPPORTEDUNARYOPERATOR":
            r += "Operator " + t.operator + " not allowed in this context. Only ! can be used with boolean, and - with a number";
            break;
          case "NOTSUPPORTEDTYPE":
            r += "Unary operator " + t.operator + " cannot be used with this argument.";
        }
      case "BinaryExpression":
        n === "OPERATORNOTRECOGNISED" && (r += "Binary Operator not recognised " + t.operator);
        break;
      case "LogicalExpression":
        switch (n) {
          case "ONLYBOOLEAN":
            r += "Operator " + t.operator + " cannot be used. Only || or && are allowed values";
            break;
          case "ONLYORORAND":
            r += "Logical Expression " + t.operator + " being applied to parameters that are not boolean.";
        }
        break;
      case "ArrayExpression":
        n === "FUNCTIONCONTEXTILLEGAL" && (r += " Cannot Put Function inside Array.");
        break;
      default:
        r += "Expression contains unrecognised code structures.";
    }
  } catch (i) {
    throw i;
  }
  return r;
}
function J(t, e, n) {
  return { line: t.loc.start.line, character: t.loc.start.column, reason: d(t, e, n) };
}
function ki(t, e, n, r) {
  const i = { globalScope: e.globalScope, localScope: {} };
  for (let u = 0; u < t.params.length; u++) {
    const a = t.params[u].name;
    i.localScope[a.toLowerCase()] = { type: "any" };
  }
  U(t.body, i, n, r, !1);
}
function U(t, e, n, r, i = !0) {
  if (t === null)
    throw new Error("Unnexpexted Expression Syntax");
  let u = null;
  try {
    switch (t.type) {
      case "VariableDeclarator":
        return t.id.type !== "Identifier" ? r.push(J(t, "SYNTAX", "VARIABLEMUSTHAVEIDENTIFIER")) : (e.localScope !== null ? e.localScope[t.id.name.toLowerCase()] : e.globalScope[t.id.name.toLowerCase()], e.localScope === null ? e.globalScope[t.id.name.toLowerCase()] = { type: "any" } : e.localScope[t.id.name.toLowerCase()] = { type: "any" }), void (t.init !== null && U(t.init, e, n, r, i));
      case "FunctionDeclaration":
        return i === !1 && r.push(J(t, "SYNTAX", "GLOBALFUNCTIONSONLY")), t.id.type !== "Identifier" && r.push(J(t, "SYNTAX", "FUNCTIONMUSTHAVEIDENTIFIER")), u = wr("", t), ki(t, e, n, r), e.localScope !== null && r.push(J(t, "SYNTAX", "GLOBALFUNCTIONSONLY")), u.isnative = !1, void (t.id.type === "Identifier" && (e.globalScope[t.id.name.toLowerCase()] = { type: "FormulaFunction", signature: [u] }));
      case "VariableDeclaration":
        for (let a = 0; a < t.declarations.length; a++)
          U(t.declarations[a], e, n, r, i);
        return;
      case "IfStatement":
        return t.test !== null && (U(t.test, e, n, r, i), t.test.type !== "AssignmentExpression" && t.test.type !== "UpdateExpression" || r.push(J(t.test, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"))), t.consequent !== null && U(t.consequent, e, n, r, i), void (t.alternate !== null && U(t.alternate, e, n, r, i));
      case "EmptyStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "Literal":
      case "TemplateElement":
        return;
      case "BlockStatement":
        if (t.body !== null)
          for (let a = 0; a < t.body.length; a++)
            U(t.body[a], e, n, r, i);
        return;
      case "ReturnStatement":
        return void (t.argument !== null && U(t.argument, e, n, r, i));
      case "ForInStatement":
        return t.left.type === "VariableDeclaration" ? (t.left.declarations.length > 1 && r.push(J(t, "SYNTAX", "ONLY1VAR")), t.left.declarations[0].init !== null && r.push(J(t, "SYNTAX", "CANNOTDECLAREVAL"))) : t.left.type !== "Identifier" && r.push(J(t, "SYNTAX", "LEFTNOTVAR")), U(t.left, e, n, r, i), U(t.right, e, n, r, i), void U(t.body, e, n, r, i);
      case "ForStatement":
        return t.init !== null && U(t.init, e, n, r, i), t.test !== null && U(t.test, e, n, r, i), t.body !== null && U(t.body, e, n, r, i), void (t.update !== null && U(t.update, e, n, r, i));
      case "UpdateExpression":
        if (t.argument.type !== "Identifier" && t.argument.type !== "MemberExpression")
          r.push(J(t, "SYNTAX", "ASSIGNMENTTOVARSONLY"));
        else {
          if (t.argument.type === "Identifier") {
            let a = !1;
            n === !1 && (e.localScope !== null && e.localScope[t.argument.name.toLowerCase()] !== void 0 && (a = !0), e.globalScope[t.argument.name.toLowerCase()] !== void 0 && (a = !0), a === !1 && r.push({ line: t === null ? 0 : t.loc.start.line, character: t === null ? 0 : t.loc.start.column, reason: "Identifier " + t.argument.name + " has not been declared." }));
          }
          t.argument.type === "MemberExpression" && U(t.argument, e, n, r, i);
        }
        return;
      case "AssignmentExpression": {
        switch (t.left.type !== "Identifier" && t.left.type !== "MemberExpression" && r.push(J(t, "SYNTAX", "ASSIGNMENTTOVARSONLY")), t.operator) {
          case "=":
          case "/=":
          case "*=":
          case "%=":
          case "+=":
          case "-=":
            break;
          default:
            r.push(J(t, "SYNTAX", "OPERATORNOTRECOGNISED"));
        }
        U(t.right, e, n, r, i);
        let a = !1;
        return t.left.type === "Identifier" && (e.localScope !== null && e.localScope[t.left.name.toLowerCase()] !== void 0 && (a = !0), e.globalScope[t.left.name.toLowerCase()] !== void 0 && (a = !0), n === !1 && a === !1 && r.push({ line: t === null ? 0 : t.loc.start.line, character: t === null ? 0 : t.loc.start.column, reason: "Identifier " + t.left.name + " has not been declared." })), void (t.left.type === "MemberExpression" && U(t.left, e, n, r, i));
      }
      case "ExpressionStatement":
        return t.expression.type === "AssignmentExpression" || t.expression.type, void U(t.expression, e, n, r, i);
      case "Identifier": {
        const a = t.name.toLowerCase();
        if (e.localScope !== null && e.localScope[a] !== void 0 || e.globalScope[a] !== void 0)
          return;
        n === !1 && r.push(J(t, "SYNTAX", "VARIABLENOTFOUND"));
        break;
      }
      case "MemberExpression":
        return U(t.object, e, n, r, i), void (t.computed === !0 && U(t.property, e, n, r, i));
      case "CallExpression":
        t.callee.type !== "Identifier" && r.push(J(t, "SYNTAX", "ONLYNODESSUPPORTED"));
        for (let a = 0; a < t.arguments.length; a++)
          U(t.arguments[a], e, n, r, i);
        if (t.callee.type === "Identifier") {
          const a = Ar(t.callee.name, t.arguments, e);
          n === !1 && a === -1 && r.push(J(t, "SYNTAX", "NOTFOUND")), a === -2 && r.push(J(t, "SYNTAX", "WRONGSIGNATURE"));
        }
        return;
      case "UnaryExpression":
        return void U(t.argument, e, n, r, i);
      case "BinaryExpression":
        switch (U(t.left, e, n, r, i), U(t.right, e, n, r, i), t.operator) {
          case "==":
          case "!=":
          case "<":
          case "<=":
          case ">":
          case ">=":
          case "+":
          case "-":
          case "*":
          case "/":
          case "%":
          case "&":
          case "|":
          case "^":
          case "<<":
          case ">>":
          case ">>>":
            break;
          default:
            r.push(J(t, "SYNTAX", "OPERATORNOTRECOGNISED"));
        }
        return;
      case "LogicalExpression":
        switch (t.operator) {
          case "&&":
          case "||":
            break;
          default:
            r.push(J(t, "SYNTAX", "OPERATORNOTRECOGNISED"));
        }
        return U(t.left, e, n, r, i), t.left.type !== "AssignmentExpression" && t.left.type !== "UpdateExpression" || r.push(J(t, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")), U(t.right, e, n, r, i), void (t.right.type !== "AssignmentExpression" && t.right.type !== "UpdateExpression" || r.push(J(t, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
      case "ArrayExpression":
        for (let a = 0; a < t.elements.length; a++)
          U(t.elements[a], e, n, r, i);
        return;
      case "TemplateLiteral":
        for (let a = 0; a < t.quasis.length; a++)
          U(t.quasis[a], e, n, r, i);
        for (let a = 0; a < t.expressions.length; a++)
          U(t.expressions[a], e, n, r, i);
        return;
      case "ObjectExpression":
        for (let a = 0; a < t.properties.length; a++)
          U(t.properties[a], e, n, r, i);
        return;
      case "Property":
        return t.key.type !== "Literal" && t.key.type !== "Identifier" && r.push(J(t, "SYNTAX", "ONLYLITERAL")), t.key.type === "Literal" && U(t.key, e, n, r, i), void U(t.value, e, n, r, i);
      default:
        r.push(J(t, "SYNTAX", "UNRECOGNISED"));
    }
    return;
  } catch {
    r.push({ line: t === null ? 0 : t.loc.start.line, character: t === null ? 0 : t.loc.start.column, reason: "Unnexpected Syntax" });
  }
}
function Bi(t, e, n, r = "async", i = be) {
  const u = [];
  if (t.body[0].body.type !== "BlockStatement")
    return [{ line: 0, character: 0, reason: "Invalid Body" }];
  e == null && (e = { vars: {}, customFunctions: [] });
  const a = { globalScope: Cr(e.vars, i, e.customFunctions, r), localScope: null };
  try {
    U(t.body[0].body, a, n, u);
  } catch {
  }
  return u;
}
function an(t) {
  const e = [];
  return P(t, (n) => (n.type === "CallExpression" && n.callee.type === "Identifier" && e.push(n.callee.name.toLowerCase()), !0)), e;
}
function Bt(t, e = []) {
  let n = null;
  if (t.usesFeatureSet === void 0) {
    n === null && (n = an(t)), t.usesFeatureSet = !1;
    for (let r = 0; r < n.length; r++)
      Ci.indexOf(n[r]) > -1 && (t.usesFeatureSet = !0, t.isAsync = !0);
    if (t.usesFeatureSet === !1 && e && e.length > 0) {
      for (const r of e)
        if (xr(t, r)) {
          t.usesFeatureSet = !0, t.isAsync = !0;
          break;
        }
    }
  }
  if (t.usesGeometry === void 0) {
    t.usesGeometry = !1, n === null && (n = an(t));
    for (let r = 0; r < n.length; r++)
      Fi.indexOf(n[r]) > -1 && (t.usesGeometry = !0);
  }
}
function Oi(t) {
  function e(r, i) {
    if (i instanceof ot)
      return t.arcadeCustomFunctionHandler(i);
    if (i instanceof le)
      return (...u) => i.fn(r, { preparsed: !0, arguments: u });
    if (i instanceof Dr)
      return (...u) => {
        if (u.length !== i.paramCount)
          throw new Error("Invalid parameters");
        return i.fn(...u);
      };
    throw new Error("Invalid Parameter");
  }
  function n(r) {
    if (r instanceof Oe)
      return r.toArray();
    if (w(r))
      return r;
    throw new Error("Invalid Parameter");
  }
  t.functions.array = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 1, 2);
      const o = h(s[0]);
      if (isNaN(o) || Ne(o) === !1)
        throw new Error("Invalid Parameter");
      const l = N(s[1], null), c = new Array(o);
      return c.fill(l), c;
    });
  }, t.functions.front = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 1, 1), v(s[0])) {
        if (s[0].length() <= 0)
          throw new Error("Array is empty");
        return s[0].get(0);
      }
      if (w(s[0])) {
        if (s[0].length <= 0)
          throw new Error("Array is empty");
        return s[0][0];
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.back = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 1, 1), v(s[0])) {
        if (s[0].length() <= 0)
          throw new Error("Array is empty");
        return s[0].get(s[0].length() - 1);
      }
      if (w(s[0])) {
        if (s[0].length <= 0)
          throw new Error("Array is empty");
        return s[0][s[0].length - 1];
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.push = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 1, 2), w(s[0]))
        return s[0][s[0].length] = s[1], s[0].length;
      throw new Error("Invalid Parameter");
    });
  }, t.functions.pop = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 1, 1), w(s[0])) {
        if (s[0].length <= 0)
          throw new Error("Array is empty");
        const o = s[0][s[0].length - 1];
        return s[0].length = s[0].length - 1, o;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.erase = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 2, 2), w(s[0])) {
        let o = h(s[1]);
        if (isNaN(o) || Ne(o) === !1)
          throw new Error("Invalid Parameter");
        const l = s[0];
        if (l.length <= 0)
          throw new Error("Array is empty");
        if (o < 0 && (o = l.length + o), o < 0)
          throw new Error("Element not found");
        if (o >= l.length)
          throw new Error("Index is greater than array");
        return l.splice(o, 1), y;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.insert = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 3, 3), w(s[0])) {
        const o = h(s[1]);
        if (isNaN(o) || Ne(o) === !1)
          throw new Error("Invalid Parameter");
        const l = s[2], c = s[0];
        if (o > c.length)
          throw new Error("Index is greater than array");
        if (o < 0 && o < -1 * c.length)
          throw new Error("Index is greater than array");
        return o === c.length ? (c[o] = l, y) : (c.splice(o, 0, l), y);
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.resize = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 2, 3), w(s[0])) {
        const o = h(s[1]);
        if (isNaN(o) || Ne(o) === !1)
          throw new Error("Invalid Parameter");
        if (o < 0)
          throw new Error("Size cannot be negative");
        const l = N(s[2], null), c = s[0];
        if (c.length >= o)
          return c.length = o, y;
        const f = c.length;
        c.length = o;
        for (let g = f; g < c.length; g++)
          c[g] = l;
        return y;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.includes = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 2, 2), w(s[0])) {
        const o = s[1];
        return s[0].findIndex((l) => me(l, o)) > -1;
      }
      if (v(s[0])) {
        const o = s[1];
        return s[0].toArray().findIndex((l) => me(l, o)) > -1;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.slice = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      if (p(s, 1, 3), w(s[0])) {
        const o = h(N(s[1], 0)), l = h(N(s[2], s[0].length));
        if (isNaN(o) || Ne(o) === !1)
          throw new Error("Invalid Parameter");
        if (isNaN(l) || Ne(l) === !1)
          throw new Error("Invalid Parameter");
        return s[0].slice(o, l);
      }
      if (v(s[0])) {
        const o = s[0], l = h(N(s[1], 0)), c = h(N(s[2], o.length()));
        if (isNaN(l) || Ne(l) === !1)
          throw new Error("Invalid Parameter");
        if (isNaN(c) || Ne(c) === !1)
          throw new Error("Invalid Parameter");
        return o.toArray().slice(l, c);
      }
      throw new Error("Invalid Parameter");
    });
  }, t.functions.splice = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      const o = [];
      for (let l = 0; l < s.length; l++)
        w(s[l]) ? o.push(...s[l]) : v(s[l]) ? o.push(...s[l].toArray()) : o.push(s[l]);
      return o;
    });
  }, t.mode === "sync" && (t.functions.any = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]);
      for (const c of l) {
        const f = o(c);
        if (V(f) && f === !0)
          return !0;
      }
      return !1;
    });
  }, t.functions.all = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]);
      for (const c of l)
        if (o(c) !== !0)
          return !1;
      return !0;
    });
  }, t.functions.none = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]);
      for (const c of l)
        if (o(c) === !0)
          return !1;
      return !0;
    });
  }, t.functions.reduce = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 2, 3);
      const o = e(r, s[1]), l = n(s[0]);
      return s.length === 2 ? l.length === 0 ? null : l.reduce((c, f) => {
        const g = o(c, f);
        return c = g !== void 0 && g !== y ? g : null;
      }) : l.reduce((c, f) => {
        const g = o(c, f);
        return c = g !== void 0 && g !== y ? g : null;
      }, s[2]);
    });
  }, t.functions.map = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = [];
      for (const f of l) {
        const g = o(f);
        g !== void 0 && g !== y ? c.push(g) : c.push(null);
      }
      return c;
    });
  }, t.functions.filter = function(r, i) {
    return t.standardFunction(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = [];
      for (const f of l)
        o(f) === !0 && c.push(f);
      return c;
    });
  }), t.mode === "async" && (t.functions.any = function(r, i) {
    return t.standardFunctionAsync(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = { result: !1 };
      return l.reduce((f, g, C) => f.then((O) => {
        if (C > 0 && O === !0 && (c.result = !0), c.result === !0)
          return ie(!0);
        const _ = o(g);
        return Ce(_) ? _ : ie(_);
      }), Promise.resolve(!1)).then((f) => (f === !0 && (c.result = !0), c.result));
    });
  }, t.functions.all = function(r, i) {
    return t.standardFunctionAsync(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = { result: !0 };
      return l.reduce((f, g, C) => f.then((O) => {
        if (C > 0 && O !== !0 && (c.result = !1), c.result === !1)
          return ie(!1);
        const _ = o(g);
        return Ce(_) ? _ : ie(_);
      }), Promise.resolve(!0)).then((f) => (f !== !0 && (c.result = !1), c.result));
    });
  }, t.functions.none = function(r, i) {
    return t.standardFunctionAsync(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = { result: !0 };
      return l.reduce((f, g, C) => f.then((O) => {
        if (C > 0 && O === !0 && (c.result = !1), c.result === !1)
          return ie(!0);
        const _ = o(g);
        return Ce(_) ? _ : ie(_);
      }), Promise.resolve(!1)).then((f) => (f === !0 && (c.result = !1), c.result));
    });
  }, t.functions.filter = function(r, i) {
    return t.standardFunctionAsync(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = [];
      return l.reduce((f, g, C) => f.then((O) => {
        C > 0 && O === !0 && c.push(l[C - 1]);
        const _ = o(g);
        return Ce(_) ? _ : ie(_);
      }), Promise.resolve(!1)).then((f) => (f === !0 && l.length > 0 && c.push(l[l.length - 1]), c));
    });
  }, t.functions.reduce = function(r, i) {
    return t.standardFunctionAsync(r, i, function(u, a, s) {
      p(s, 2, 3);
      const o = e(r, s[1]), l = n(s[0]);
      let c = null;
      if (s.length > 2) {
        const f = N(s[2], null);
        c = l.reduce((g, C) => g.then((O) => {
          O !== void 0 && O !== y || (O = null);
          const _ = o(O, C);
          return Ce(_) ? _ : ie(_);
        }), Promise.resolve(f));
      } else {
        if (l.length === 0)
          return null;
        c = l.reduce((f, g, C) => {
          if (C <= 1) {
            const O = o(f, g);
            return Ce(O) ? O : ie(O);
          }
          return f.then((O) => {
            O !== void 0 && O !== y || (O = null);
            const _ = o(O, g);
            return Ce(_) ? _ : ie(_);
          });
        });
      }
      return c.then((f) => f !== void 0 && f !== y ? f : null);
    });
  }, t.functions.map = function(r, i) {
    return t.standardFunctionAsync(r, i, function(u, a, s) {
      p(s, 2, 2);
      const o = e(r, s[1]), l = n(s[0]), c = { result: [] };
      return l.reduce((f, g, C) => f.then((O) => {
        C > 0 && (O !== void 0 && O !== y ? c.result.push(O) : c.result.push(null));
        const _ = o(g);
        return Ce(_) ? _ : ie(_);
      }), Promise.resolve()).then((f) => (l.length > 0 && (f !== void 0 && f !== y ? c.result.push(f) : c.result.push(null)), c.result));
    });
  });
}
const un = Object.freeze({ __proto__: null, registerFunctions: Oi });
function Fr(t) {
  const e = new Date(t.getTime()), n = e.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Nt(r), u = /* @__PURE__ */ new Date(0);
  u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0);
  const a = Nt(u);
  return e.getTime() >= i.getTime() ? n + 1 : e.getTime() >= a.getTime() ? n : n - 1;
}
function Nt(t) {
  const n = new Date(t.getTime()), r = n.getDay(), i = (r < 1 ? 7 : 0) + r - 1;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function _i(t) {
  const e = Fr(t), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), Nt(n);
}
function Ri(t, e, n) {
  return t + (Li(n) ? Mi : Ui)[e];
}
function Li(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
const Ui = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Mi = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Pe(t) {
  return t === null ? t : isNaN(t.getTime()) ? null : t;
}
function br(t, e) {
  t.today = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 0, 0);
      const s = /* @__PURE__ */ new Date();
      return s.setHours(0, 0, 0, 0), s;
    });
  }, t.now = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 0, 0), /* @__PURE__ */ new Date();
    });
  }, t.timestamp = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 0, 0);
      let s = /* @__PURE__ */ new Date();
      return s = new Date(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()), s;
    });
  }, t.toutc = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? null : new Date(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds());
    });
  }, t.tolocal = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? null : mt.utc(s.getFullYear(), s.getMonth() + 1, s.getDate(), s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()).toJSDate();
    });
  }, t.day = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getDate();
    });
  }, t.month = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getMonth();
    });
  }, t.year = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getFullYear();
    });
  }, t.hour = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getHours();
    });
  }, t.second = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getSeconds();
    });
  }, t.millisecond = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getMilliseconds();
    });
  }, t.minute = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getMinutes();
    });
  }, t.week = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 2);
      const s = ee(a[0]);
      if (s === null)
        return NaN;
      const o = h(N(a[1], 0));
      if (o < 0 || o > 6)
        throw new Error("Invalid Parameter");
      const l = s.getDate(), c = s.getMonth(), f = s.getFullYear(), g = s.getDay(), C = Ri(l, c, f) - 1, O = Math.floor(C / 7);
      return g - o + (g - o < 0 ? 7 : 0) < C - 7 * O ? O + 1 : O;
    });
  }, t.weekday = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getDay();
    });
  }, t.isoweekday = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      if (s === null)
        return NaN;
      let o = s.getDay();
      return o === 0 && (o = 7), o;
    });
  }, t.isomonth = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : s.getMonth() + 1;
    });
  }, t.isoweek = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      if (s === null)
        return NaN;
      const o = Nt(s).getTime() - _i(s).getTime();
      return Math.round(o / 6048e5) + 1;
    });
  }, t.isoyear = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = ee(a[0]);
      return s === null ? NaN : Fr(s);
    });
  }, t.date = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 0, 7), a.length === 3)
        return Pe(new Date(h(a[0]), h(a[1]), h(a[2]), 0, 0, 0, 0));
      if (a.length === 4)
        return Pe(new Date(h(a[0]), h(a[1]), h(a[2]), h(a[3]), 0, 0, 0));
      if (a.length === 5)
        return Pe(new Date(h(a[0]), h(a[1]), h(a[2]), h(a[3]), h(a[4]), 0, 0));
      if (a.length === 6)
        return Pe(new Date(h(a[0]), h(a[1]), h(a[2]), h(a[3]), h(a[4]), h(a[5]), 0));
      if (a.length === 7)
        return Pe(new Date(h(a[0]), h(a[1]), h(a[2]), h(a[3]), h(a[4]), h(a[5]), h(a[6])));
      if (a.length === 2) {
        let s, o = E(a[1]);
        return o === "" ? null : (o = hi(o), s = o === "X" ? mt.fromSeconds(h(a[0])) : o === "x" ? mt.fromMillis(h(a[0])) : mt.fromFormat(E(a[0]), o, { locale: fi(), numberingSystem: "latn" }), s.isValid ? s.toJSDate() : null);
      }
      if (a.length === 1) {
        if (I(a[0])) {
          if (a[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "")
            return null;
          if (/^[0-9][0-9][0-9][0-9]$/.test(a[0]) === !0)
            return ee(a[0] + "-01-01");
        }
        const s = h(a[0]);
        return isNaN(s) === !1 ? Pe(new Date(s)) : ee(a[0]);
      }
      return a.length === 0 ? /* @__PURE__ */ new Date() : void 0;
    });
  }, t.datediff = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 3);
      const s = Ut(a[0]), o = Ut(a[1]);
      if (s === null || o === null)
        return NaN;
      switch (E(a[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return s.diff(o, "days").days;
        case "months":
        case "month":
          return s.diff(o, "months").months;
        case "minutes":
        case "minute":
        case "m":
          return a[2] === "M" ? s.diff(o, "months").months : s.diff(o, "minutes").minutes;
        case "seconds":
        case "second":
        case "s":
          return s.diff(o, "seconds").seconds;
        case "milliseconds":
        case "millisecond":
        case "ms":
        default:
          return s.diff(o).milliseconds;
        case "hours":
        case "hour":
        case "h":
          return s.diff(o, "hours").hours;
        case "years":
        case "year":
        case "y":
          return s.diff(o, "years").years;
      }
    });
  }, t.dateadd = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 3);
      const s = Ut(a[0]);
      if (s === null)
        return null;
      let o = h(a[1]);
      if (isNaN(o))
        return s.toJSDate();
      let l = "milliseconds";
      switch (E(a[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          l = "days", o = Bn(o);
          break;
        case "months":
        case "month":
          l = "months", o = Bn(o);
          break;
        case "minutes":
        case "minute":
        case "m":
          l = a[2] === "M" ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          l = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          l = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          l = "hours";
          break;
        case "years":
        case "year":
        case "y":
          l = "years";
      }
      return s.plus({ [l]: o }).toJSDate();
    });
  };
}
function Qe(t, e, n) {
  return Math.sqrt((t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2 + (t[2] !== void 0 && e[2] !== void 0 ? (t[2] * n - e[2] * n) ** 2 : 0));
}
const tt = [];
for (const t of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const e = t[0];
  for (let n = 1; n < t.length; n++)
    tt[t[n]] = e;
}
const it = [];
function $i(t) {
  return t.vcsWkid && tt[t.vcsWkid] !== void 0 ? it[tt[t.vcsWkid]] : t.latestVcsWkid && tt[t.latestVcsWkid] !== void 0 ? it[tt[t.latestVcsWkid]] : 1;
}
function Mn(t, e, n) {
  const r = { x: 0, y: 0 };
  e && (r.z = 0), n && (r.m = 0);
  let i = 0, u = t[0];
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    if (Gi(s, u) === !1) {
      const o = Sr(u, s, e), l = Pi(u, s, e, n);
      l.x *= o, l.y *= o, r.x += l.x, r.y += l.y, e && (l.z *= o, r.z += l.z), n && (l.m *= o, r.m += l.m), i += o, u = s;
    }
  }
  return i > 0 ? (r.x /= i, r.y /= i, e && (r.z /= i), n && (r.m /= i)) : (r.x = t[0][0], r.y = t[0][1], e && (r.z = t[0][2]), n && e ? r.m = t[0][3] : n && (r.m = t[0][2])), r;
}
function Pi(t, e, n, r) {
  const i = { x: (t[0] + e[0]) / 2, y: (t[1] + e[1]) / 2 };
  return n && (i.z = (t[2] + e[2]) / 2), n && r ? i.m = (t[3] + e[3]) / 2 : r && (i.m = (t[2] + e[2]) / 2), i;
}
function zi(t, e) {
  if (t.length <= 1)
    return 0;
  let n = 0;
  for (let r = 1; r < t.length; r++)
    n += Sr(t[r - 1], t[r], e);
  return n;
}
function Sr(t, e, n) {
  const r = e[0] - t[0], i = e[1] - t[1];
  if (n) {
    const u = e[2] - e[2];
    return Math.sqrt(r * r + i * i + u * u);
  }
  return Math.sqrt(r * r + i * i);
}
function Gi(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function ji(t) {
  const e = { x: 0, y: 0, spatialReference: t.spatialReference.toJSON() }, n = { x: 0, y: 0, spatialReference: t.spatialReference.toJSON() };
  let r = 0, i = 0;
  for (let u = 0; u < t.paths.length; u++) {
    if (t.paths[u].length === 0)
      continue;
    const a = zi(t.paths[u], t.hasZ === !0);
    if (a === 0) {
      const s = Mn(t.paths[u], t.hasZ === !0, t.hasM === !0);
      e.x += s.x, e.y += s.y, t.hasZ === !0 && (e.z += s.z), t.hasM === !0 && (e.m += s.m), ++r;
    } else {
      const s = Mn(t.paths[u], t.hasZ === !0, t.hasM === !0);
      n.x += s.x * a, n.y += s.y * a, t.hasZ === !0 && (n.z += s.z * a), t.hasM === !0 && (n.m += s.m * a), i += a;
    }
  }
  return i > 0 ? (n.x /= i, n.y /= i, t.hasZ === !0 && (n.z /= i), t.hasM === !0 && (n.m /= i), new Y(n)) : r > 0 ? (e.x /= r, e.y /= r, t.hasZ === !0 && (n.z /= r), t.hasM === !0 && (e.m /= r), new Y(e)) : null;
}
function Yi(t) {
  if (t.points.length === 0)
    return null;
  let e = 0, n = 0, r = 0, i = 0;
  for (let a = 0; a < t.points.length; a++) {
    const s = t.getPoint(a);
    s.hasZ === !0 && (r += s.z), s.hasM === !0 && (i += s.m), e += s.x, n += s.y, i += s.m;
  }
  const u = { x: e / t.points.length, y: n / t.points.length, spatialReference: null };
  return u.spatialReference = t.spatialReference.toJSON(), t.hasZ === !0 && (u.z = r / t.points.length), t.hasM === !0 && (u.m = i / t.points.length), new Y(u);
}
function Vi(t, e) {
  return t.x * e.x + t.y * e.y;
}
function Hi(t, e) {
  return t.x * e.y - e.x * t.y;
}
function Ot(t, e, n = 0) {
  for (; t < n; )
    t += e;
  const r = n + e;
  for (; t >= r; )
    t -= e;
  return t;
}
function Nr(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function qi(t, e) {
  return Ot(Nr(t, e), 2 * Math.PI) * (180 / Math.PI);
}
function Ji(t, e) {
  return Ot(Math.PI / 2 - Nr(t, e), 2 * Math.PI) * (180 / Math.PI);
}
function Ir(t, e, n) {
  const r = { x: t.x - e.x, y: t.y - e.y }, i = { x: n.x - e.x, y: n.y - e.y };
  return Math.atan2(Hi(r, i), Vi(r, i));
}
function Xi(t, e, n) {
  return Ot(Ir(t, e, n), 2 * Math.PI) * (180 / Math.PI);
}
function Zi(t, e, n) {
  return Ot(-1 * Ir(t, e, n), 2 * Math.PI) * (180 / Math.PI);
}
it[9002] = 0.3048, it[9003] = 0.3048006096012192, it[9095] = 0.3048007491;
const W = [0, 0];
function $n(t) {
  for (let e = 0; e < t.length; e++) {
    const n = t[e];
    for (let i = 0; i < n.length - 1; i++) {
      const u = n[i], a = n[i + 1];
      for (let s = e + 1; s < t.length; s++)
        for (let o = 0; o < t[s].length - 1; o++) {
          const l = t[s][o], c = t[s][o + 1];
          if (On(u, a, l, c, W) && !(W[0] === u[0] && W[1] === u[1] || W[0] === l[0] && W[1] === l[1] || W[0] === a[0] && W[1] === a[1] || W[0] === c[0] && W[1] === c[1]))
            return !0;
        }
    }
    const r = n.length;
    if (!(r < 3))
      for (let i = 0; i <= r - 2; i++) {
        const u = n[i], a = n[i + 1];
        for (let s = i + 2; s <= r - 2; s++) {
          const o = n[s], l = n[s + 1];
          if (On(u, a, o, l, W) && !(W[0] === u[0] && W[1] === u[1] || W[0] === o[0] && W[1] === o[1] || W[0] === a[0] && W[1] === a[1] || W[0] === l[0] && W[1] === l[1]))
            return !0;
        }
      }
  }
  return !1;
}
function gt(t) {
  return t && t.arcadeDeclaredClass === "geoscene.arcade.Feature";
}
function Tr(t, e) {
  t.ringisclockwise = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      let s = [], o = !1, l = !1;
      if (a[0] === null)
        return !1;
      if (w(a[0])) {
        for (const c of a[0]) {
          if (!(c instanceof Y))
            throw new Error("Invalid Argument");
          s.push(c.hasZ ? c.hasM ? [c.x, c.y, c.z, c.m] : [c.x, c.y, c.z] : [c.x, c.y]);
        }
        s.length > 0 && (o = a[0][0].hasZ, l = a[0][0].hasM);
      } else if (a[0] instanceof mn)
        s = a[0]._elements, s.length > 0 && (o = a[0]._hasZ, l = a[0]._hasM);
      else {
        if (!v(a[0]))
          throw new Error("Invalid Argument");
        for (const c of a[0].toArray()) {
          if (!(c instanceof Y))
            throw new Error("Invalid Argument");
          s.push(c.hasZ ? c.hasM ? [c.x, c.y, c.z, c.m] : [c.x, c.y, c.z] : [c.x, c.y]);
        }
        s.length > 0 && (o = a[0].get(0).hasZ, l = a[0].get(0).hasM);
      }
      return !(s.length < 3) && pi(s, l, o);
    });
  }, t.polygon = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      let s = null;
      if (a[0] instanceof x) {
        if (s = X(j.parseGeometryFromDictionary(a[0]), n.spatialReference), !(s instanceof ne))
          throw new Error("Illegal Parameter");
      } else
        s = a[0] instanceof ne ? se(a[0].toJSON()) : X(new ne(JSON.parse(a[0])), n.spatialReference);
      if (s !== null && s.spatialReference.equals(n.spatialReference) === !1)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return Me(s);
    });
  }, t.polyline = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      let s = null;
      if (a[0] instanceof x) {
        if (s = X(j.parseGeometryFromDictionary(a[0]), n.spatialReference), !(s instanceof te))
          throw new Error("Illegal Parameter");
      } else
        s = a[0] instanceof te ? se(a[0].toJSON()) : X(new te(JSON.parse(a[0])), n.spatialReference);
      if (s !== null && s.spatialReference.equals(n.spatialReference) === !1)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return Me(s);
    });
  }, t.point = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      let s = null;
      if (a[0] instanceof x) {
        if (s = X(j.parseGeometryFromDictionary(a[0]), n.spatialReference), !(s instanceof Y))
          throw new Error("Illegal Parameter");
      } else
        s = a[0] instanceof Y ? se(a[0].toJSON()) : X(new Y(JSON.parse(a[0])), n.spatialReference);
      if (s !== null && s.spatialReference.equals(n.spatialReference) === !1)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return Me(s);
    });
  }, t.multipoint = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      let s = null;
      if (a[0] instanceof x) {
        if (s = X(j.parseGeometryFromDictionary(a[0]), n.spatialReference), !(s instanceof ge))
          throw new Error("Illegal Parameter");
      } else
        s = a[0] instanceof ge ? se(a[0].toJSON()) : X(new ge(JSON.parse(a[0])), n.spatialReference);
      if (s !== null && s.spatialReference.equals(n.spatialReference) === !1)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return Me(s);
    });
  }, t.extent = function(n, r) {
    return e(n, r, function(i, u, a) {
      a = k(a), p(a, 1, 1);
      let s = null;
      if (a[0] instanceof x)
        s = X(j.parseGeometryFromDictionary(a[0]), n.spatialReference);
      else if (a[0] instanceof Y) {
        const o = { xmin: a[0].x, ymin: a[0].y, xmax: a[0].x, ymax: a[0].y, spatialReference: a[0].spatialReference.toJSON() }, l = a[0];
        l.hasZ ? (o.zmin = l.z, o.zmax = l.z) : l.hasM && (o.mmin = l.m, o.mmax = l.m), s = se(o);
      } else
        s = a[0] instanceof ne || a[0] instanceof te || a[0] instanceof ge ? se(a[0].extent.toJSON()) : a[0] instanceof oe ? se(a[0].toJSON()) : X(new oe(JSON.parse(a[0])), n.spatialReference);
      if (s !== null && s.spatialReference.equals(n.spatialReference) === !1)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return Me(s);
    });
  }, t.geometry = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      let s = null;
      if (a[0] === null)
        return null;
      if (s = gt(a[0]) ? X(a[0].geometry(), n.spatialReference) : a[0] instanceof x ? X(j.parseGeometryFromDictionary(a[0]), n.spatialReference) : X(se(JSON.parse(a[0])), n.spatialReference), s !== null && s.spatialReference.equals(n.spatialReference) === !1)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return Me(s);
    });
  }, t.setgeometry = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 2, 2), !gt(a[0]))
        throw new Error("Illegal Argument");
      if (a[0].immutable === !0)
        throw new Error("Feature is Immutable");
      if (!(a[1] instanceof b || a[1] === null))
        throw new Error("Illegal Argument");
      return a[0]._geometry = a[1], y;
    });
  }, t.feature = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a.length === 0)
        throw new Error("Missing Parameters");
      let s = null;
      if (a.length === 1)
        if (I(a[0]))
          s = j.fromJson(JSON.parse(a[0]));
        else if (gt(a[0]))
          s = j.createFromArcadeFeature(a[0]);
        else if (a[0] instanceof b)
          s = j.createFromGraphicLikeObject(a[0], null, null);
        else {
          if (!(a[0] instanceof x))
            throw new Error("Illegal Argument");
          {
            let o = a[0].hasField("geometry") ? a[0].field("geometry") : null, l = a[0].hasField("attributes") ? a[0].field("attributes") : null;
            o !== null && o instanceof x && (o = j.parseGeometryFromDictionary(o)), l !== null && (l = j.parseAttributesFromDictionary(l)), s = j.createFromGraphicLikeObject(o, l, null);
          }
        }
      else if (a.length === 2) {
        let o = null, l = null;
        if (a[0] !== null)
          if (a[0] instanceof b)
            o = a[0];
          else {
            if (!(o instanceof x))
              throw new Error("Illegal Argument");
            o = j.parseGeometryFromDictionary(a[0]);
          }
        if (a[1] !== null) {
          if (!(a[1] instanceof x))
            throw new Error("Illegal Argument");
          l = j.parseAttributesFromDictionary(a[1]);
        }
        s = j.createFromGraphicLikeObject(o, l, null);
      } else {
        let o = null;
        const l = {};
        if (a[0] !== null)
          if (a[0] instanceof b)
            o = a[0];
          else {
            if (!(o instanceof x))
              throw new Error("Illegal Argument");
            o = j.parseGeometryFromDictionary(a[0]);
          }
        for (let c = 1; c < a.length; c += 2) {
          const f = E(a[c]), g = a[c + 1];
          if (!(g == null || I(g) || isNaN(g) || ye(g) || H(g) || V(g)))
            throw new Error("Illegal Argument");
          if (ce(g) || Ft(g) === !1)
            throw new Error("Illegal Argument");
          l[f] = g === y ? null : g;
        }
        s = j.createFromGraphicLikeObject(o, l, null);
      }
      return s._geometry = X(s.geometry(), n.spatialReference), s.immutable = !1, s;
    });
  }, t.dictionary = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a.length === 0) {
        const l = new x();
        return l.immutable = !1, l;
      }
      if (a.length === 1 && I(a[0]))
        try {
          const l = JSON.parse(a[0]), c = x.convertObjectToArcadeDictionary(l, !1);
          return c.immutable = !1, c;
        } catch {
          throw new Error("Missing Parameters or Illegal Json");
        }
      if (a.length % 2 != 0)
        throw new Error("Missing Parameters");
      const s = {};
      for (let l = 0; l < a.length; l += 2) {
        const c = E(a[l]), f = a[l + 1];
        if (!(f == null || I(f) || isNaN(f) || ye(f) || H(f) || V(f) || w(f) || v(f)))
          throw new Error("Illegal Argument");
        if (ce(f))
          throw new Error("Illegal Argument");
        s[c] = f === y ? null : f;
      }
      const o = new x(s);
      return o.immutable = !1, o;
    });
  }, t.haskey = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 2);
      const s = E(a[1]);
      if (gt(a[0]) || a[0] instanceof x)
        return a[0].hasField(s);
      throw new Error("Illegal Argument");
    });
  }, t.indexof = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 2);
      const s = a[1];
      if (w(a[0])) {
        for (let o = 0; o < a[0].length; o++)
          if (me(s, a[0][o]))
            return o;
        return -1;
      }
      if (v(a[0])) {
        const o = a[0].length();
        for (let l = 0; l < o; l++)
          if (me(s, a[0].get(l)))
            return l;
        return -1;
      }
      throw new Error("Illegal Argument");
    });
  }, t.angle = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a = k(a), p(a, 2, 3), !(a[0] instanceof Y))
        throw new Error("Illegal Argument");
      if (!(a[1] instanceof Y))
        throw new Error("Illegal Argument");
      if (a.length > 2 && !(a[2] instanceof Y))
        throw new Error("Illegal Argument");
      return a.length === 2 ? qi(a[0], a[1]) : Xi(a[0], a[1], a[2]);
    });
  }, t.bearing = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a = k(a), p(a, 2, 3), !(a[0] instanceof Y))
        throw new Error("Illegal Argument");
      if (!(a[1] instanceof Y))
        throw new Error("Illegal Argument");
      if (a.length > 2 && !(a[2] instanceof Y))
        throw new Error("Illegal Argument");
      return a.length === 2 ? Ji(a[0], a[1]) : Zi(a[0], a[1], a[2]);
    });
  }, t.isselfintersecting = function(n, r) {
    return e(n, r, function(i, u, a) {
      a = k(a), p(a, 1, 1);
      let s = a[0];
      if (s instanceof ne)
        return s.isSelfIntersecting;
      if (s instanceof te)
        return s = s.paths, $n(s);
      if (s instanceof ge) {
        const o = s.points;
        for (let l = 0; l < o.length; l++)
          for (let c = 0; c < o.length; c++)
            if (c !== l) {
              let f = !0;
              for (let g = 0; g < o[l].length; g++)
                if (o[l][g] !== o[c][g]) {
                  f = !1;
                  break;
                }
              if (f === !0)
                return !0;
            }
      }
      return !(!w(s) && !v(s)) && (s = xt(s, n.spatialReference), s !== null && (s = s.paths), $n(s));
    });
  };
}
function Et(t) {
  if (t === void 0)
    return null;
  if (typeof t == "number")
    return t;
  let e = t.toLowerCase();
  switch (e = e.replace(/\s/g, ""), e = e.replace(/-/g, ""), e) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 109404;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 109413;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 109414;
    case "acres":
    case "acre":
    case "ac":
      return 109402;
    case "hectares":
    case "hectare":
    case "ha":
      return 109401;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 109442;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 109405;
    case "nm":
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 109409;
  }
  return null;
}
function Mu(t) {
  if (t === null)
    return null;
  switch (t.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return t.extent;
    case "point":
      return new oe({ xmin: t.x, ymin: t.y, xmax: t.x, ymax: t.y, spatialReference: t.spatialReference });
    case "extent":
      return t;
  }
  return null;
}
function Q(t) {
  if (t === void 0)
    return null;
  if (typeof t == "number")
    return t;
  let e = t.toLowerCase();
  switch (e = e.replace(/\s/g, ""), e = e.replace(/-/g, ""), e) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 9001;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 9035;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 9036;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 9096;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 9002;
    case "nm":
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 9030;
  }
  return null;
}
function he(t) {
  if (t === null)
    return null;
  const e = t.clone();
  return t.cache._geVersion !== void 0 && (e.cache._geVersion = t.cache._geVersion), e;
}
let T = null;
function Pn(t) {
  return di.indexOf("4.") === 0 ? ne.fromExtent(t) : new ne({ spatialReference: t.spatialReference, rings: [[[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]]] });
}
function Ki(t) {
  T = t;
}
function zn(t, e) {
  if (t.type !== "polygon" && t.type !== "polyline" && t.type !== "extent")
    return 0;
  let n = 1;
  (t.spatialReference.vcsWkid || t.spatialReference.latestVcsWkid) && (n = $i(t.spatialReference) / mi(t.spatialReference));
  let r = 0;
  if (t.type === "polyline")
    for (const u of t.paths)
      for (let a = 1; a < u.length; a++)
        r += Qe(u[a], u[a - 1], n);
  else if (t.type === "polygon")
    for (const u of t.rings) {
      for (let a = 1; a < u.length; a++)
        r += Qe(u[a], u[a - 1], n);
      (u[0][0] !== u[u.length - 1][0] || u[0][1] !== u[u.length - 1][1] || u[0][2] !== void 0 && u[0][2] !== u[u.length - 1][2]) && (r += Qe(u[0], u[u.length - 1], n));
    }
  else
    t.type === "extent" && (r += 2 * Qe([t.xmin, t.ymin, 0], [t.xmax, t.ymin, 0], n), r += 2 * Qe([t.xmin, t.ymin, 0], [t.xmin, t.ymax, 0], n), r *= 2, r += 4 * Math.abs(N(t.zmax, 0) * n - N(t.zmin, 0) * n));
  const i = new te({ hasZ: !1, hasM: !1, spatialReference: t.spatialReference, paths: [[0, 0], [0, r]] });
  return T.planarLength(i, e);
}
function xn(t, e) {
  function n(r) {
    if (p(r, 2, 2), !(r[0] instanceof b && r[1] instanceof b)) {
      if (!(r[0] instanceof b && r[1] === null)) {
        if (!(r[1] instanceof b && r[0] === null)) {
          if (r[0] !== null || r[1] !== null)
            throw new Error("Illegal Argument");
        }
      }
    }
  }
  t.disjoint = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] === null || s[1] === null || T.disjoint(s[0], s[1]);
    });
  }, t.intersects = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] !== null && T.intersects(s[0], s[1]);
    });
  }, t.touches = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] !== null && T.touches(s[0], s[1]);
    });
  }, t.crosses = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] !== null && T.crosses(s[0], s[1]);
    });
  }, t.within = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] !== null && T.within(s[0], s[1]);
    });
  }, t.contains = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] !== null && T.contains(s[0], s[1]);
    });
  }, t.overlaps = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] !== null && T.overlaps(s[0], s[1]);
    });
  }, t.equals = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 2, 2), s[0] === s[1] || (s[0] instanceof b && s[1] instanceof b ? T.equals(s[0], s[1]) : !(!ye(s[0]) || !ye(s[1])) && s[0].getTime() === s[1].getTime());
    });
  }, t.relate = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 3, 3), s[0] instanceof b && s[1] instanceof b)
        return T.relate(s[0], s[1], E(s[2]));
      if (s[0] instanceof b && s[1] === null || s[1] instanceof b && s[0] === null || s[0] === null && s[1] === null)
        return !1;
      throw new Error("Illegal Argument");
    });
  }, t.intersection = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] === null || s[1] === null ? null : T.intersect(s[0], s[1]);
    });
  }, t.union = function(r, i) {
    return e(r, i, function(u, a, s) {
      const o = [];
      if ((s = k(s)).length === 0)
        throw new Error("Function called with wrong number of Parameters");
      if (s.length === 1)
        if (w(s[0])) {
          const l = k(s[0]);
          for (let c = 0; c < l.length; c++)
            if (l[c] !== null) {
              if (!(l[c] instanceof b))
                throw new Error("Illegal Argument");
              o.push(l[c]);
            }
        } else {
          if (!v(s[0])) {
            if (s[0] instanceof b)
              return X(he(s[0]), r.spatialReference);
            if (s[0] === null)
              return null;
            throw new Error("Illegal Argument");
          }
          {
            const l = k(s[0].toArray());
            for (let c = 0; c < l.length; c++)
              if (l[c] !== null) {
                if (!(l[c] instanceof b))
                  throw new Error("Illegal Argument");
                o.push(l[c]);
              }
          }
        }
      else
        for (let l = 0; l < s.length; l++)
          if (s[l] !== null) {
            if (!(s[l] instanceof b))
              throw new Error("Illegal Argument");
            o.push(s[l]);
          }
      return o.length === 0 ? null : T.union(o);
    });
  }, t.difference = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] !== null && s[1] === null ? he(s[0]) : s[0] === null ? null : T.difference(s[0], s[1]);
    });
  }, t.symmetricdifference = function(r, i) {
    return e(r, i, function(u, a, s) {
      return n(s = k(s)), s[0] === null && s[1] === null ? null : s[0] === null ? he(s[1]) : s[1] === null ? he(s[0]) : T.symmetricDifference(s[0], s[1]);
    });
  }, t.clip = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 2), !(s[1] instanceof oe) && s[1] !== null)
        throw new Error("Illegal Argument");
      if (s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return s[1] === null ? null : T.clip(s[0], s[1]);
    });
  }, t.cut = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 2), !(s[1] instanceof te) && s[1] !== null)
        throw new Error("Illegal Argument");
      if (s[0] === null)
        return [];
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return s[1] === null ? [he(s[0])] : T.cut(s[0], s[1]);
    });
  }, t.area = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), (s = k(s))[0] === null)
        return 0;
      if (w(s[0]) || v(s[0])) {
        const o = _n(s[0], r.spatialReference);
        return o === null ? 0 : T.planarArea(o, Et(N(s[1], -1)));
      }
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return T.planarArea(s[0], Et(N(s[1], -1)));
    });
  }, t.areageodetic = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), (s = k(s))[0] === null)
        return 0;
      if (w(s[0]) || v(s[0])) {
        const o = _n(s[0], r.spatialReference);
        return o === null ? 0 : T.geodesicArea(o, Et(N(s[1], -1)));
      }
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return T.geodesicArea(s[0], Et(N(s[1], -1)));
    });
  }, t.length = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), (s = k(s))[0] === null)
        return 0;
      if (w(s[0]) || v(s[0])) {
        const o = xt(s[0], r.spatialReference);
        return o === null ? 0 : T.planarLength(o, Q(N(s[1], -1)));
      }
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return T.planarLength(s[0], Q(N(s[1], -1)));
    });
  }, t.length3d = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), (s = k(s))[0] === null)
        return 0;
      if (w(s[0]) || v(s[0])) {
        const o = xt(s[0], r.spatialReference);
        return o === null ? 0 : o.hasZ === !0 ? zn(o, Q(N(s[1], -1))) : T.planarLength(o, Q(N(s[1], -1)));
      }
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return s[0].hasZ === !0 ? zn(s[0], Q(N(s[1], -1))) : T.planarLength(s[0], Q(N(s[1], -1)));
    });
  }, t.lengthgeodetic = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), (s = k(s))[0] === null)
        return 0;
      if (w(s[0]) || v(s[0])) {
        const o = xt(s[0], r.spatialReference);
        return o === null ? 0 : T.geodesicLength(o, Q(N(s[1], -1)));
      }
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return T.geodesicLength(s[0], Q(N(s[1], -1)));
    });
  }, t.distance = function(r, i) {
    return e(r, i, function(u, a, s) {
      s = k(s), p(s, 2, 3);
      let o = s[0];
      (w(s[0]) || v(s[0])) && (o = Mt(s[0], r.spatialReference));
      let l = s[1];
      if ((w(s[1]) || v(s[1])) && (l = Mt(s[1], r.spatialReference)), !(o instanceof b))
        throw new Error("Illegal Argument");
      if (!(l instanceof b))
        throw new Error("Illegal Argument");
      return T.distance(o, l, Q(N(s[2], -1)));
    });
  }, t.distancegeodetic = function(r, i) {
    return e(r, i, function(u, a, s) {
      s = k(s), p(s, 2, 3);
      const o = s[0], l = s[1];
      if (!(o instanceof Y))
        throw new Error("Illegal Argument");
      if (!(l instanceof Y))
        throw new Error("Illegal Argument");
      const c = new te({ paths: [], spatialReference: o.spatialReference });
      return c.addPath([o, l]), T.geodesicLength(c, Q(N(s[2], -1)));
    });
  }, t.densify = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 3), s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      const o = h(s[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      if (o <= 0)
        throw new Error("Illegal Argument");
      return s[0] instanceof ne || s[0] instanceof te ? T.densify(s[0], o, Q(N(s[2], -1))) : s[0] instanceof oe ? T.densify(Pn(s[0]), o, Q(N(s[2], -1))) : s[0];
    });
  }, t.densifygeodetic = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 3), s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      const o = h(s[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      if (o <= 0)
        throw new Error("Illegal Argument");
      return s[0] instanceof ne || s[0] instanceof te ? T.geodesicDensify(s[0], o, Q(N(s[2], -1))) : s[0] instanceof oe ? T.geodesicDensify(Pn(s[0]), o, Q(N(s[2], -1))) : s[0];
    });
  }, t.generalize = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 4), s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      const o = h(s[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      return T.generalize(s[0], o, ut(N(s[2], !0)), Q(N(s[3], -1)));
    });
  }, t.buffer = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 3), s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      const o = h(s[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      return o === 0 ? he(s[0]) : T.buffer(s[0], o, Q(N(s[2], -1)));
    });
  }, t.buffergeodetic = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 3), s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      const o = h(s[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      return o === 0 ? he(s[0]) : T.geodesicBuffer(s[0], o, Q(N(s[2], -1)));
    });
  }, t.offset = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 2, 6), s[0] === null)
        return null;
      if (!(s[0] instanceof ne || s[0] instanceof te))
        throw new Error("Illegal Argument");
      const o = h(s[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      const l = h(N(s[4], 10));
      if (isNaN(l))
        throw new Error("Illegal Argument");
      const c = h(N(s[5], 0));
      if (isNaN(c))
        throw new Error("Illegal Argument");
      return T.offset(s[0], o, Q(N(s[2], -1)), E(N(s[3], "round")).toLowerCase(), l, c);
    });
  }, t.rotate = function(r, i) {
    return e(r, i, function(u, a, s) {
      s = k(s), p(s, 2, 3);
      let o = s[0];
      if (o === null)
        return null;
      if (!(o instanceof b))
        throw new Error("Illegal Argument");
      o instanceof oe && (o = ne.fromExtent(o));
      const l = h(s[1]);
      if (isNaN(l))
        throw new Error("Illegal Argument");
      const c = N(s[2], null);
      if (c === null)
        return T.rotate(o, l);
      if (c instanceof Y)
        return T.rotate(o, l, c);
      throw new Error("Illegal Argument");
    });
  }, t.centroid = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 1, 1), s[0] === null)
        return null;
      let o = s[0];
      if ((w(s[0]) || v(s[0])) && (o = Mt(s[0], r.spatialReference)), o === null)
        return null;
      if (!(o instanceof b))
        throw new Error("Illegal Argument");
      return o instanceof Y ? X(he(s[0]), r.spatialReference) : o instanceof ne ? o.centroid : o instanceof te ? ji(o) : o instanceof ge ? Yi(o) : o instanceof oe ? o.center : null;
    });
  }, t.multiparttosinglepart = function(r, i) {
    return e(r, i, function(u, a, s) {
      s = k(s), p(s, 1, 1);
      const o = [];
      if (s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      if (s[0] instanceof Y)
        return [X(he(s[0]), r.spatialReference)];
      if (s[0] instanceof oe)
        return [X(he(s[0]), r.spatialReference)];
      const l = T.simplify(s[0]);
      if (l instanceof ne) {
        const c = [], f = [];
        for (let g = 0; g < l.rings.length; g++)
          if (l.isClockwise(l.rings[g])) {
            const C = se({ rings: [l.rings[g]], hasZ: l.hasZ === !0, hasM: l.hasM === !0, spatialReference: l.spatialReference.toJSON() });
            c.push(C);
          } else
            f.push({ ring: l.rings[g], pt: l.getPoint(g, 0) });
        for (let g = 0; g < f.length; g++)
          for (let C = 0; C < c.length; C++)
            if (c[C].contains(f[g].pt)) {
              c[C].addRing(f[g].ring);
              break;
            }
        return c;
      }
      if (l instanceof te) {
        const c = [];
        for (let f = 0; f < l.paths.length; f++) {
          const g = se({ paths: [l.paths[f]], hasZ: l.hasZ === !0, hasM: l.hasM === !0, spatialReference: l.spatialReference.toJSON() });
          c.push(g);
        }
        return c;
      }
      if (s[0] instanceof ge) {
        const c = X(he(s[0]), r.spatialReference);
        for (let f = 0; f < c.points.length; f++)
          o.push(c.getPoint(f));
        return o;
      }
      return null;
    });
  }, t.issimple = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 1, 1), s[0] === null)
        return !0;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return T.isSimple(s[0]);
    });
  }, t.simplify = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (s = k(s), p(s, 1, 1), s[0] === null)
        return null;
      if (!(s[0] instanceof b))
        throw new Error("Illegal Argument");
      return T.simplify(s[0]);
    });
  };
}
const Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  registerFunctions: xn,
  setGeometryEngine: Ki
}, Symbol.toStringTag, { value: "Module" }));
function Pt(t, e, n) {
  return n === void 0 || +n == 0 ? Math[t](e) : (e = +e, n = +n, isNaN(e) || typeof n != "number" || n % 1 != 0 ? NaN : (e = e.toString().split("e"), +((e = (e = Math[t](+(e[0] + "e" + (e[1] ? +e[1] - n : -n)))).toString().split("e"))[0] + "e" + (e[1] ? +e[1] + n : n))));
}
function vr(t, e) {
  function n(r, i, u) {
    const a = h(r);
    return isNaN(a) ? a : isNaN(i) || isNaN(u) || i > u ? NaN : a < i ? i : a > u ? u : a;
  }
  t.number = function(r, i) {
    return e(r, i, function(u, a, s) {
      p(s, 1, 2);
      const o = s[0];
      if (H(o))
        return o;
      if (o === null)
        return 0;
      if (ye(o) || V(o))
        return Number(o);
      if (w(o))
        return NaN;
      if (o === "" || o === void 0)
        return Number(o);
      if (I(o)) {
        if (s[1] !== void 0) {
          let l = tn(s[1], "‰", "");
          return l = tn(l, "¤", ""), Di(o, { pattern: l });
        }
        return Number(o.trim());
      }
      return Number(o);
    });
  }, t.abs = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.abs(h(s[0]));
    });
  }, t.acos = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.acos(h(s[0]));
    });
  }, t.asin = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.asin(h(s[0]));
    });
  }, t.atan = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.atan(h(s[0]));
    });
  }, t.atan2 = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 2, 2), Math.atan2(h(s[0]), h(s[1]));
    });
  }, t.ceil = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), s.length === 2) {
        let o = h(s[1]);
        return isNaN(o) && (o = 0), Pt("ceil", h(s[0]), -1 * o);
      }
      return Math.ceil(h(s[0]));
    });
  }, t.round = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), s.length === 2) {
        let o = h(s[1]);
        return isNaN(o) && (o = 0), Pt("round", h(s[0]), -1 * o);
      }
      return Math.round(h(s[0]));
    });
  }, t.floor = function(r, i) {
    return e(r, i, function(u, a, s) {
      if (p(s, 1, 2), s.length === 2) {
        let o = h(s[1]);
        return isNaN(o) && (o = 0), Pt("floor", h(s[0]), -1 * o);
      }
      return Math.floor(h(s[0]));
    });
  }, t.cos = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.cos(h(s[0]));
    });
  }, t.isnan = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), typeof s[0] == "number" && isNaN(s[0]);
    });
  }, t.exp = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.exp(h(s[0]));
    });
  }, t.log = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.log(h(s[0]));
    });
  }, t.pow = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 2, 2), h(s[0]) ** h(s[1]);
    });
  }, t.random = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 0, 0), Math.random();
    });
  }, t.sin = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.sin(h(s[0]));
    });
  }, t.sqrt = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.sqrt(h(s[0]));
    });
  }, t.tan = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), Math.tan(h(s[0]));
    });
  }, t.defaultvalue = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 2, 2), s[0] === null || s[0] === "" || s[0] === void 0 ? s[1] : s[0];
    });
  }, t.isempty = function(r, i) {
    return e(r, i, function(u, a, s) {
      return p(s, 1, 1), s[0] === null || s[0] === "" || s[0] === void 0;
    });
  }, t.boolean = function(r, i) {
    return e(r, i, function(u, a, s) {
      p(s, 1, 1);
      const o = s[0];
      return ut(o);
    });
  }, t.constrain = function(r, i) {
    return e(r, i, function(u, a, s) {
      p(s, 3, 3);
      const o = h(s[1]), l = h(s[2]);
      if (w(s[0])) {
        const c = [];
        for (const f of s[0])
          c.push(n(f, o, l));
        return c;
      }
      if (v(s[0])) {
        const c = [];
        for (let f = 0; f < s[0].length(); f++)
          c.push(n(s[0].get(f), o, l));
        return c;
      }
      return n(s[0], o, l);
    });
  };
}
function kr(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++)
    e += t[n];
  return e / t.length;
}
function Gn(t) {
  const e = kr(t);
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n += (e - t[r]) ** 2;
  return n / t.length;
}
function Qi(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++)
    e += t[n];
  return e;
}
function es(t, e) {
  const n = [], r = {}, i = [];
  for (let u = 0; u < t.length; u++) {
    if (t[u] !== void 0 && t[u] !== null && t[u] !== y) {
      const a = t[u];
      if (H(a) || I(a))
        r[a] === void 0 && (n.push(a), r[a] = 1);
      else {
        let s = !1;
        for (let o = 0; o < i.length; o++)
          me(i[o], a) === !0 && (s = !0);
        s === !1 && (i.push(a), n.push(a));
      }
    }
    if (n.length >= e && e !== -1)
      return n;
  }
  return n;
}
function zt(t, e, n = 1e3) {
  switch (t.toLowerCase()) {
    case "distinct":
      return es(e, n);
    case "avg":
    case "mean":
      return kr($e(e));
    case "min":
      return Math.min.apply(Math, $e(e));
    case "sum":
      return Qi($e(e));
    case "max":
      return Math.max.apply(Math, $e(e));
    case "stdev":
    case "stddev":
      return Math.sqrt(Gn($e(e)));
    case "var":
    case "variance":
      return Gn($e(e));
    case "count":
      return e.length;
  }
  return 0;
}
function Te(t, e, n, r) {
  if (r.length === 1) {
    if (w(r[0]))
      return zt(t, r[0], -1);
    if (v(r[0]))
      return zt(t, r[0].toArray(), -1);
  }
  return zt(t, r, -1);
}
function Br(t, e) {
  t.stdev = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("stdev", i, u, a);
    });
  }, t.variance = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("variance", i, u, a);
    });
  }, t.average = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("mean", i, u, a);
    });
  }, t.mean = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("mean", i, u, a);
    });
  }, t.sum = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("sum", i, u, a);
    });
  }, t.min = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("min", i, u, a);
    });
  }, t.max = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("max", i, u, a);
    });
  }, t.distinct = function(n, r) {
    return e(n, r, function(i, u, a) {
      return Te("distinct", i, u, a);
    });
  }, t.count = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), w(a[0]) || I(a[0]))
        return a[0].length;
      if (v(a[0]))
        return a[0].length();
      throw new Error("Invalid Parameters for Count");
    });
  };
}
const wn = (t) => (e, n, r) => (r = r || 14, +t(e, n).toFixed(r)), ts = (t, e) => t + e, ns = (t, e) => t * e, rs = (t, e) => t / e, jn = (t, e, n) => wn(ts)(t, e, n), Je = (t, e, n) => wn(ns)(t, e, n), It = (t, e, n) => wn(rs)(t, e, n), Tt = 360, is = 400, ss = 2 * Math.PI, pe = 3600, Yn = 3240, st = 60, Be = 60, Vn = 180 * pe / Math.PI, nt = Tt * st * Be, Gt = 90 * pe, ze = 180 * pe, as = 270 * pe, Or = "ᵍ", rt = "°";
function et(t) {
  if (I(t) === !1)
    throw new Error("Invalid Parameter");
  return t;
}
function on(t, e) {
  const n = 10 ** e;
  return Math.round(t * n) / n;
}
function us(t, e) {
  return t % e;
}
function Ge(t) {
  const e = parseFloat(t.toString().replace(Math.trunc(t).toString(), "0")) * Math.sign(t);
  return t < 0 ? { fraction: e, integer: Math.ceil(t) } : { fraction: e, integer: Math.floor(t) };
}
var M, D, B, ln;
function qe(t, e) {
  switch (t) {
    case M.north:
      return e === "SHORT" ? "N" : "North";
    case M.east:
      return e === "SHORT" ? "E" : "East";
    case M.south:
      return e === "SHORT" ? "S" : "South";
    case M.west:
      return e === "SHORT" ? "W" : "West";
  }
}
function jt(t, e, n) {
  for (; t.length < n; )
    t = e + t;
  return t;
}
function Yt(t, e) {
  return t - Math.floor(t / e) * e;
}
function Vt(t) {
  switch (t) {
    case D.truncated_degrees:
    case D.decimal_degrees:
      return Tt;
    case D.radians:
      return ss;
    case D.gradians:
      return is;
    case D.seconds:
      return nt;
    case D.fractional_degree_minutes:
      return st;
    case D.fractional_minute_seconds:
      return Be;
    default:
      throw new Error("Unnexpected evaluations");
  }
}
function Hn(t) {
  switch (t.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return B.north_azimuth;
    case "POLAR":
      return B.polar;
    case "QUADRANT":
      return B.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return B.south_azimuth;
  }
  throw new Error("Unsupported direction type");
}
function qn(t) {
  switch (t.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return D.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return D.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return D.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return D.gradians;
  }
  throw new Error("Unsupported units");
}
(function(t) {
  t[t.north = 0] = "north", t[t.east = 1] = "east", t[t.south = 2] = "south", t[t.west = 3] = "west";
})(M || (M = {})), function(t) {
  t[t.decimal_degrees = 1] = "decimal_degrees", t[t.seconds = 2] = "seconds", t[t.degrees_minutes_seconds = 3] = "degrees_minutes_seconds", t[t.radians = 4] = "radians", t[t.gradians = 5] = "gradians", t[t.truncated_degrees = 6] = "truncated_degrees", t[t.fractional_degree_minutes = 7] = "fractional_degree_minutes", t[t.fractional_minute_seconds = 8] = "fractional_minute_seconds";
}(D || (D = {})), function(t) {
  t[t.north_azimuth = 1] = "north_azimuth", t[t.polar = 2] = "polar", t[t.quadrant = 3] = "quadrant", t[t.south_azimuth = 4] = "south_azimuth";
}(B || (B = {})), function(t) {
  t[t.meridian = 0] = "meridian", t[t.direction = 1] = "direction";
}(ln || (ln = {}));
let Ke = class wt {
  constructor(e, n, r) {
    this.m_degrees = e, this.m_minutes = n, this.m_seconds = r;
  }
  getField(e) {
    switch (e) {
      case D.decimal_degrees:
      case D.truncated_degrees:
        return this.m_degrees;
      case D.fractional_degree_minutes:
        return this.m_minutes;
      case D.seconds:
      case D.fractional_minute_seconds:
        return this.m_seconds;
      default:
        throw new Error("Unnexpected evaluation");
    }
  }
  static secondsToDMS(e) {
    const n = Ge(e).fraction;
    let r = Ge(e).integer;
    const i = Math.floor(r / pe);
    r -= i * pe;
    const u = Math.floor(r / Be);
    return r -= u * Be, new wt(i, u, r + n);
  }
  static numberToDms(e) {
    const n = Ge(e).fraction, r = Ge(e).integer, i = Je(Ge(100 * n).fraction, 100), u = Ge(100 * n).integer;
    return new wt(r, u, i);
  }
  format(e, n) {
    let r = on(this.m_seconds, n), i = this.m_minutes, u = this.m_degrees;
    if (e === D.seconds || e === D.fractional_minute_seconds)
      Be <= r && (r -= Be, ++i), st <= i && (i = 0, ++u), Tt <= u && (u = 0);
    else if (e === D.fractional_degree_minutes)
      r = 0, i = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, u = this.m_degrees, st <= i && (i = 0, ++u), Tt <= u && (u = 0);
    else if (e === D.decimal_degrees || e === D.truncated_degrees) {
      const a = It(this.m_seconds, pe), s = It(this.m_minutes, st);
      u = Math.round(this.m_degrees + s + a), i = 0, r = 0;
    }
    return new wt(u, i, r);
  }
  static dmsToSeconds(e, n, r) {
    return e * pe + n * Be + r;
  }
}, os = class {
  constructor(e, n, r) {
    this.meridian = e, this.angle = n, this.direction = r;
  }
  fetchAzimuth(e) {
    return e === ln.meridian ? this.meridian : this.direction;
  }
}, ke = class Fe {
  constructor(e) {
    this.m_angle = e;
  }
  static createFromAngleAndDirection(e, n) {
    return new Fe(new Ee(Fe._convertDirectionFormat(e.extractAngularUnits(D.seconds), n, B.north_azimuth)));
  }
  getAngle(e) {
    const n = this.m_angle.extractAngularUnits(D.seconds);
    switch (e) {
      case B.north_azimuth:
      case B.south_azimuth:
      case B.polar:
        return new Ee(Fe._convertDirectionFormat(n, B.north_azimuth, e));
      case B.quadrant: {
        const r = Fe.secondsNorthAzimuthToQuadrant(n);
        return new Ee(r.angle);
      }
    }
  }
  getMeridian(e) {
    const n = this.m_angle.extractAngularUnits(D.seconds);
    switch (e) {
      case B.north_azimuth:
        return M.north;
      case B.south_azimuth:
        return M.south;
      case B.polar:
        return M.east;
      case B.quadrant:
        return Fe.secondsNorthAzimuthToQuadrant(n).meridian;
    }
  }
  getDirection(e) {
    const n = this.m_angle.extractAngularUnits(D.seconds);
    switch (e) {
      case B.north_azimuth:
        return M.east;
      case B.south_azimuth:
        return M.west;
      case B.polar:
        return M.north;
      case B.quadrant:
        return Fe.secondsNorthAzimuthToQuadrant(n).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(e) {
    const n = e <= Gt || e >= as ? M.north : M.south, r = n === M.north ? Math.min(nt - e, e) : Math.abs(e - ze), i = e > ze ? M.west : M.east;
    return new os(n, r, i);
  }
  static createFromAngleMeridianAndDirection(e, n, r) {
    return new Fe(new Ee(Fe.secondsQuadrantToNorthAzimuth(e.extractAngularUnits(D.seconds), n, r)));
  }
  static secondsQuadrantToNorthAzimuth(e, n, r) {
    return n === M.north ? r === M.east ? e : nt - e : r === M.east ? ze - e : ze + e;
  }
  static _convertDirectionFormat(e, n, r) {
    let i = 0;
    switch (n) {
      case B.north_azimuth:
        i = e;
        break;
      case B.polar:
        i = Gt - e;
        break;
      case B.quadrant:
        throw new Error("Unnexpected evaluation");
      case B.south_azimuth:
        i = e + ze;
    }
    let u = 0;
    switch (r) {
      case B.north_azimuth:
        u = i;
        break;
      case B.polar:
        u = Gt - i;
        break;
      case B.quadrant:
        throw new Error("Unnexpected evaluation");
      case B.south_azimuth:
        u = i - ze;
    }
    return u = us(u, nt), u < 0 ? nt + u : u;
  }
};
function Jn(t, e, n) {
  let r = null;
  switch (e) {
    case D.decimal_degrees:
      r = Je(t, pe);
      break;
    case D.seconds:
      r = t;
      break;
    case D.gradians:
      r = Je(t, Yn);
      break;
    case D.radians:
      r = Je(t, Vn);
      break;
    default:
      throw new Error("Unnexpected evaluation");
  }
  switch (n) {
    case D.decimal_degrees:
      return It(r, pe);
    case D.seconds:
      return r;
    case D.gradians:
      return It(r, Yn);
    case D.radians:
      return r / Vn;
    default:
      throw new Error("Unnexpected evaluation");
  }
}
let Ee = class cn {
  constructor(e) {
    this.m_seconds = e;
  }
  static createFromAngleAndUnits(e, n) {
    return new cn(Jn(e, n, D.seconds));
  }
  extractAngularUnits(e) {
    return Jn(this.m_seconds, D.seconds, ct(e));
  }
  static createFromDegreesMinutesSeconds(e, n, r) {
    return new cn(jn(jn(Je(e, pe), Je(n, Be)), r));
  }
};
function ct(t) {
  switch (t) {
    case D.decimal_degrees:
    case D.truncated_degrees:
    case D.degrees_minutes_seconds:
      return D.decimal_degrees;
    case D.gradians:
      return D.gradians;
    case D.fractional_degree_minutes:
      return D.fractional_degree_minutes;
    case D.radians:
      return D.radians;
    case D.seconds:
    case D.fractional_minute_seconds:
      return D.seconds;
  }
}
let ls = class _r {
  constructor(e, n, r, i) {
    this.m_view = e, this.m_angle = n, this.m_merdian = r, this.m_direction = i, this.m_dms = null, this.m_formatted_dms = null;
  }
  static createFromStringAndBearing(e, n, r) {
    return new _r(e, n.getAngle(r), n.getMeridian(r), n.getDirection(r));
  }
  fetchAngle() {
    return this.m_angle;
  }
  fetchMeridian() {
    return this.m_merdian;
  }
  fetchDirection() {
    return this.m_direction;
  }
  fetchView() {
    return this.m_view;
  }
  fetchDms() {
    return this.m_dms === null && this._calculateDms(), this.m_dms;
  }
  fetchFormattedDms() {
    return this.m_formatted_dms === null && this._calculateDms(), this.m_formatted_dms;
  }
  _calculateDms() {
    let e = null, n = D.truncated_degrees, r = 0;
    for (let i = 0; i < this.m_view.length; i++) {
      const u = this.m_view[i];
      switch (u) {
        case "m":
          e = hn(this.m_view, i, u), n = n === D.truncated_degrees ? D.fractional_degree_minutes : n, i = e.newpos;
          continue;
        case "s":
          e = hn(this.m_view, i, u), n = D.fractional_minute_seconds, r = r < e.rounding ? e.rounding : r, i = e.newpos;
          continue;
        default:
          continue;
      }
    }
    this.m_dms = Ke.secondsToDMS(this.m_angle.extractAngularUnits(D.seconds)), this.m_formatted_dms = Ke.secondsToDMS(this.m_angle.extractAngularUnits(D.seconds)).format(n, r);
  }
};
function cs(t, e, n, r, i) {
  let u = null;
  switch (e) {
    case D.decimal_degrees:
    case D.radians:
    case D.gradians:
      return u = Yt(on(t.extractAngularUnits(e), r), Vt(e)), jt(u.toFixed(r), "0", n + r + (r > 0 ? 1 : 0));
    case D.truncated_degrees:
    case D.fractional_degree_minutes:
      return u = Yt(i.fetchFormattedDms().getField(e), Vt(e)), jt(u.toFixed(r), "0", n + r + (r > 0 ? 1 : 0));
    case D.fractional_minute_seconds:
      return u = Yt(on(i.fetchDms().getField(e), r), Vt(e)), jt(u.toFixed(r), "0", n + r + (r > 0 ? 1 : 0));
    default:
      throw new Error("Unnexepected evaluation");
  }
}
function hs(t, e, n) {
  if (n === B.quadrant)
    throw new Error("Conversion error");
  if (e === D.degrees_minutes_seconds) {
    const r = Ke.numberToDms(t);
    return ke.createFromAngleAndDirection(Ee.createFromDegreesMinutesSeconds(r.m_degrees, r.m_minutes, r.m_seconds), n);
  }
  return ke.createFromAngleAndDirection(Ee.createFromAngleAndUnits(t, ct(e)), n);
}
function fs(t) {
  switch (h(t)) {
    case 1:
      return { first: M.north, second: M.east };
    case 2:
      return { first: M.south, second: M.east };
    case 3:
      return { first: M.south, second: M.west };
    case 4:
      return { first: M.north, second: M.west };
  }
  return null;
}
function Xn(t) {
  switch (t.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return M.north;
    case "E":
    case "EAST":
      return M.east;
    case "S":
    case "SOUTH":
      return M.south;
    case "W":
    case "WEST":
      return M.west;
  }
  return null;
}
function je(t) {
  const e = parseFloat(t);
  if (H(e)) {
    if (isNaN(e))
      throw new Error("Invalid conversion");
    return e;
  }
  throw new Error("Invalid conversion");
}
function Ht(t, e, n) {
  const r = n === B.quadrant;
  let i = null, u = null, a = 0, s = 0, o = 0;
  if (r) {
    if (t.length < 2)
      throw new Error("Conversion Error");
    o = 1;
    const l = fs(E(t[t.length - 1]));
    if (l ? (i = l.first, u = l.second) : (a = 1, i = Xn(E(t[0])), u = Xn(E(t[t.length - 1]))), i === null || u === null)
      throw new Error("Invalid Conversion");
  }
  switch (e) {
    case D.decimal_degrees:
    case D.radians:
    case D.gradians:
      if (t.length === 0)
        throw new Error("Invalid Conversion");
      return r ? ke.createFromAngleMeridianAndDirection(Ee.createFromAngleAndUnits(je(t[a]), ct(e)), i, u) : ke.createFromAngleAndDirection(Ee.createFromAngleAndUnits(je(t[a]), ct(e)), n);
    case D.degrees_minutes_seconds:
      if (s = t.length - o - a, s === 3) {
        const l = Ee.createFromDegreesMinutesSeconds(je(t[a]), je(t[a + 1]), je(t[a + 2]));
        return r ? ke.createFromAngleMeridianAndDirection(l, i, u) : ke.createFromAngleAndDirection(l, n);
      }
      if (s === 1) {
        const l = je(t[a]), c = Ke.numberToDms(l), f = Ee.createFromDegreesMinutesSeconds(c.m_degrees, c.m_minutes, c.m_seconds);
        return r ? ke.createFromAngleMeridianAndDirection(f, i, u) : ke.createFromAngleAndDirection(f, n);
      }
  }
  throw new Error("Conversion Error");
}
function ps(t) {
  const e = [" ", "-", "/", "'", '"', "\\", "^", rt, Or, "	", "\r", `
`, "*"];
  let n = "";
  for (let r = 0; r < t.length; r++) {
    const i = t.charAt(r);
    e.indexOf(i) !== -1 ? n += "RRSPLITRRSPLITRR" : n += i;
  }
  return n.split("RRSPLITRRSPLITRR").filter((r) => r !== "");
}
function ds(t, e, n) {
  if (H(t))
    return hs(h(t), e, n);
  if (I(t))
    return Ht(ps(t), e, n);
  if (w(t))
    return Ht(t, e, n);
  if (v(t))
    return Ht(t.toArray(), e, n);
  throw new Error("Conversion Error");
}
function ms(t, e, n) {
  const r = ct(n);
  if (r && n !== D.degrees_minutes_seconds)
    return t.getAngle(e).extractAngularUnits(r);
  throw new Error("Conversion Error");
}
function Ds(t, e, n) {
  const r = t.getAngle(e);
  if (e === B.quadrant && n === D.degrees_minutes_seconds) {
    const i = Ke.secondsToDMS(r.extractAngularUnits(D.seconds));
    return [qe(t.getMeridian(e), "SHORT"), i.m_degrees, i.m_minutes, i.m_seconds, qe(t.getDirection(e), "SHORT")];
  }
  if (n === D.degrees_minutes_seconds) {
    const i = Ke.secondsToDMS(r.extractAngularUnits(D.seconds));
    return [i.m_degrees, i.m_minutes, i.m_seconds];
  }
  return e === B.quadrant ? [qe(t.getMeridian(e), "SHORT"), r.extractAngularUnits(n), qe(t.getDirection(e), "SHORT")] : [r.extractAngularUnits(n)];
}
function gs(t, e) {
  let n = "";
  switch (t) {
    case D.decimal_degrees:
      n = e === B.quadrant ? "DD.DD" + rt : "DDD.DD" + rt;
      break;
    case D.degrees_minutes_seconds:
      n = e === B.quadrant ? "dd" + rt + ` mm' ss"` : "ddd" + rt + ` mm' ss.ss"`;
      break;
    case D.radians:
      n = "R.RR";
      break;
    case D.gradians:
      n = "GGG.GG" + Or;
      break;
    default:
      throw new Error("Conversion error");
  }
  return e === B.quadrant && (n = "p " + n + " b"), n;
}
function hn(t, e, n) {
  const r = { padding: 0, rounding: 0, newpos: e };
  let i = !1;
  for (; e < t.length; ) {
    const u = t[e];
    if (u === n)
      i ? r.rounding++ : r.padding++, e++;
    else {
      if (u !== ".")
        break;
      i = !0, e++;
    }
  }
  return r.newpos = e - 1, r;
}
function Es(t, e, n) {
  const r = { escaped: "", newpos: e };
  for (e++; e < t.length; ) {
    const i = t[e];
    if (e++, i === "]")
      break;
    r.escaped += i;
  }
  return r.newpos = e - 1, r;
}
function ys(t, e, n) {
  let r = "", i = null, u = null;
  const a = ls.createFromStringAndBearing(e, t, n), s = { D: D.decimal_degrees, d: D.truncated_degrees, m: D.fractional_degree_minutes, s: D.fractional_minute_seconds, R: D.radians, G: D.gradians };
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    switch (l) {
      case "[":
        i = Es(e, o), r += i.escaped, o = i.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        i = hn(e, o, l), u = t.getAngle(n), r += cs(u, s[l], i.padding, i.rounding, a), o = i.newpos;
        continue;
      case "P":
      case "p":
        r += qe(a.fetchMeridian(), l === "p" ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r += qe(a.fetchDirection(), l === "b" ? "SHORT" : "LONG");
        continue;
      default:
        r += l;
    }
  }
  return r;
}
function As(t, e, n) {
  if (!(e instanceof x))
    throw new Error("Invalid Parameter");
  if (e.hasField("directionType") === !1)
    throw new Error("Invalid Parameter - Missing directionType");
  if (e.hasField("angleType") === !1)
    throw new Error("Invalid Parameter - Missing directionType");
  const r = Hn(et(e.field("directiontype"))), i = ds(t, qn(et(e.field("angletype"))), r);
  if (!(n instanceof x))
    throw new Error("Invalid Parameter");
  if (n.hasField("directionType") === !1)
    throw new Error("Invalid Parameter - Missing directionType");
  if (n.hasField("outputType") === !1)
    throw new Error("Invalid Parameter - Missing directionType");
  const u = Hn(et(n.field("directiontype"))), a = n.hasField("angleType") ? qn(et(n.field("angletype"))) : null, s = et(n.field("outputType")).toUpperCase().trim();
  if (!u || !s)
    throw new Error("Conversion error");
  if (!(a || s === "TEXT" && n.hasField("format")))
    throw new Error("Invalid unit");
  switch (s) {
    case "VALUE":
      return u === B.quadrant || a === D.degrees_minutes_seconds ? Ds(i, u, a) : ms(i, u, a);
    case "TEXT": {
      let o = "";
      return n.hasField("format") && (o = E(n.field("format"))), o !== null && o !== "" || (o = gs(a, u)), ys(i, o, u);
    }
    default:
      throw new Error("Invalid Parameter");
  }
}
const Ye = 2654435761, Ve = 2246822519, yt = 3266489917, Zn = 668265263, Kn = 374761393;
function Wn(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++) {
    let i = t.charCodeAt(n);
    i < 128 ? e.push(i) : i < 2048 ? e.push(192 | i >> 6, 128 | 63 & i) : i < 55296 || i >= 57344 ? e.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (n++, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(n)), e.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i));
  }
  return new Uint8Array(e);
}
let xs = class {
  constructor(e) {
    this.seed = e, this.totallen = 0, this.bufs = [], this.init();
  }
  init() {
    return this.bufs = [], this.totallen = 0, this;
  }
  updateFloatArray(e) {
    const n = [];
    for (const r of e)
      isNaN(r) ? n.push("NaN") : r === 1 / 0 ? n.push("Infinity") : r === -1 / 0 ? n.push("-Infinity") : r === 0 ? n.push("0") : n.push(r.toString(16));
    this.update(Wn(n.join("")));
  }
  updateIntArray(e) {
    const n = Int32Array.from(e);
    this.update(new Uint8Array(n.buffer));
  }
  updateUint8Array(e) {
    this.update(Uint8Array.from(e));
  }
  updateWithString(e) {
    return this.update(Wn(e));
  }
  update(e) {
    return this.bufs.push(e), this.totallen += e.length, this;
  }
  digest() {
    const e = new Uint8Array(this.totallen);
    let n = 0;
    for (const r of this.bufs)
      e.set(r, n), n += r.length;
    return this.init(), this._xxHash32(e, this.seed);
  }
  _xxHash32(e, n = 0) {
    const r = e;
    let i = n + Kn & 4294967295, u = 0;
    if (r.length >= 16) {
      const s = [n + Ye + Ve & 4294967295, n + Ve & 4294967295, n + 0 & 4294967295, n - Ye & 4294967295], o = e, l = o.length - 16;
      let c = 0;
      for (u = 0; (4294967280 & u) <= l; u += 4) {
        const f = u, g = o[f + 0] + (o[f + 1] << 8), C = o[f + 2] + (o[f + 3] << 8), O = g * Ve + (C * Ve << 16);
        let _ = s[c] + O & 4294967295;
        _ = _ << 13 | _ >>> 19;
        const ui = 65535 & _, oi = _ >>> 16;
        s[c] = ui * Ye + (oi * Ye << 16) & 4294967295, c = c + 1 & 3;
      }
      i = (s[0] << 1 | s[0] >>> 31) + (s[1] << 7 | s[1] >>> 25) + (s[2] << 12 | s[2] >>> 20) + (s[3] << 18 | s[3] >>> 14) & 4294967295;
    }
    i = i + e.length & 4294967295;
    const a = e.length - 4;
    for (; u <= a; u += 4) {
      const s = u, o = r[s + 0] + (r[s + 1] << 8), l = r[s + 2] + (r[s + 3] << 8);
      i = i + (o * yt + (l * yt << 16)) & 4294967295, i = i << 17 | i >>> 15, i = (65535 & i) * Zn + ((i >>> 16) * Zn << 16) & 4294967295;
    }
    for (; u < r.length; ++u)
      i += r[u] * Kn, i = i << 11 | i >>> 21, i = (65535 & i) * Ye + ((i >>> 16) * Ye << 16) & 4294967295;
    return i ^= i >>> 15, i = ((65535 & i) * Ve & 4294967295) + ((i >>> 16) * Ve << 16), i ^= i >>> 13, i = ((65535 & i) * yt & 4294967295) + ((i >>> 16) * yt << 16), i ^= i >>> 16, i < 0 ? i + 4294967296 : i;
  }
};
function Qn(t, e) {
  if (t.x === e.x && t.y === e.y) {
    if (t.hasZ) {
      if (t.z !== e.z)
        return !1;
    } else if (e.hasZ)
      return !1;
    if (t.hasM) {
      if (t.m !== e.m)
        return !1;
    } else if (e.hasM)
      return !1;
    return !0;
  }
  return !1;
}
function ae(t, e, n) {
  if (t !== null)
    if (w(t)) {
      if (e.updateUint8Array([61]), n.map.has(t)) {
        const r = n.map.get(t);
        e.updateIntArray([61237541 ^ r]);
      } else {
        n.map.set(t, n.currentLength++);
        for (const r of t)
          ae(r, e, n);
        n.map.delete(t), n.currentLength--;
      }
      e.updateUint8Array([199]);
    } else if (v(t)) {
      if (e.updateUint8Array([61]), n.map.has(t)) {
        const r = n.map.get(t);
        e.updateIntArray([61237541 ^ r]);
      } else {
        n.map.set(t, n.currentLength++);
        for (const r of t.toArray())
          ae(r, e, n);
        n.map.delete(t), n.currentLength--;
      }
      e.updateUint8Array([199]);
    } else {
      if (ye(t))
        return e.updateIntArray([t.getTime()]), void e.updateUint8Array([241]);
      if (I(t))
        return e.updateIntArray([t.length]), e.updateWithString(t), void e.updateUint8Array([41]);
      if (V(t))
        e.updateUint8Array([t === !0 ? 1 : 0, 113]);
      else {
        if (H(t))
          return e.updateFloatArray([t]), void e.updateUint8Array([173]);
        if (t instanceof An)
          throw new Error("Type not supported in Hash");
        if (t instanceof kt)
          throw new Error("Type not supported in Hash");
        if (!(t instanceof x)) {
          if (K(t))
            throw new Error("Type not supported in Hash");
          if (t instanceof Y)
            return e.updateIntArray([3833836621]), e.updateIntArray([0]), e.updateFloatArray([t.x]), e.updateIntArray([1]), e.updateFloatArray([t.y]), t.hasZ && (e.updateIntArray([2]), e.updateFloatArray([t.z])), t.hasM && (e.updateIntArray([3]), e.updateFloatArray([t.m])), e.updateIntArray([3765347959]), void ae(t.spatialReference.wkid, e, n);
          if (t instanceof ne) {
            e.updateIntArray([1266616829]);
            for (let r = 0; r < t.rings.length; r++) {
              const i = t.rings[r], u = [];
              let a = null, s = null;
              for (let o = 0; o < i.length; o++) {
                const l = t.getPoint(r, o);
                if (o === 0)
                  a = l;
                else if (Qn(s, l))
                  continue;
                s = l, o === i.length - 1 && Qn(a, l) || u.push(l);
              }
              e.updateIntArray([1397116793, u.length]);
              for (let o = 0; o < u.length; o++) {
                const l = u[o];
                e.updateIntArray([3962308117, o]), ae(l, e, n), e.updateIntArray([2716288009]);
              }
              e.updateIntArray([2278822459]);
            }
            return e.updateIntArray([3878477243]), void ae(t.spatialReference.wkid, e, n);
          }
          if (t instanceof te) {
            e.updateIntArray([4106883559]);
            for (let r = 0; r < t.paths.length; r++) {
              const i = t.paths[r];
              e.updateIntArray([1397116793, i.length]);
              for (let u = 0; u < i.length; u++)
                e.updateIntArray([3962308117, u]), ae(t.getPoint(r, u), e, n), e.updateIntArray([2716288009]);
              e.updateIntArray([2278822459]);
            }
            return e.updateIntArray([2568784753]), void ae(t.spatialReference.wkid, e, n);
          }
          if (t instanceof ge) {
            e.updateIntArray([588535921, t.points.length]);
            for (let r = 0; r < t.points.length; r++) {
              const i = t.getPoint(r);
              e.updateIntArray([r]), ae(i, e, n);
            }
            return e.updateIntArray([1700171621]), void ae(t.spatialReference.wkid, e, n);
          }
          if (t instanceof oe)
            return e.updateIntArray([3483648373]), e.updateIntArray([0]), e.updateFloatArray([t.xmax]), e.updateIntArray([1]), e.updateFloatArray([t.xmin]), e.updateIntArray([2]), e.updateFloatArray([t.ymax]), e.updateIntArray([3]), e.updateFloatArray([t.ymin]), t.hasZ && (e.updateIntArray([4]), e.updateFloatArray([t.zmax]), e.updateIntArray([5]), e.updateFloatArray([t.zmin])), t.hasM && (e.updateIntArray([6]), e.updateFloatArray([t.mmax]), e.updateIntArray([7]), e.updateFloatArray([t.mmin])), e.updateIntArray([3622027469]), void ae(t.spatialReference.wkid, e, n);
          if (t instanceof Dn)
            return e.updateIntArray([14]), t.wkid !== void 0 && t.wkid !== null && e.updateIntArray([t.wkid]), void (t.wkt && e.updateWithString(t.wkt));
          throw ce(t) ? new Error("Type not supported in Hash") : gn(t) ? new Error("Type not supported in Hash") : En(t) ? new Error("Type not supported in Hash") : t === y ? new Error("Type not supported in Hash") : new Error("Type not supported in Hash");
        }
        if (e.updateUint8Array([223]), n.map.has(t)) {
          const r = n.map.get(t);
          e.updateIntArray([61237541 ^ r]);
        } else {
          n.map.set(t, n.currentLength++);
          for (const r of t.keys())
            e.updateIntArray([r.length]), e.updateWithString(r), e.updateUint8Array([251]), ae(t.field(r), e, n), e.updateUint8Array([239]);
          n.map.delete(t), n.currentLength--;
        }
        e.updateUint8Array([73]);
      }
    }
  else
    e.updateUint8Array([0, 139]);
}
function Rr(t, e) {
  t.portal = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 1, 1), new kt(E(a[0]));
    });
  }, t.trim = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 1, 1), E(a[0]).trim();
    });
  }, t.tohex = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = h(a[0]);
      return isNaN(s) ? s : s.toString(16);
    });
  }, t.upper = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 1, 1), E(a[0]).toUpperCase();
    });
  }, t.proper = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 2);
      let s = 1;
      a.length === 2 && E(a[1]).toLowerCase() === "firstword" && (s = 2);
      const o = /\s/, l = E(a[0]);
      let c = "", f = !0;
      for (let g = 0; g < l.length; g++) {
        let C = l[g];
        o.test(C) ? s === 1 && (f = !0) : C.toUpperCase() !== C.toLowerCase() && (f ? (C = C.toUpperCase(), f = !1) : C = C.toLowerCase()), c += C;
      }
      return c;
    });
  }, t.lower = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 1, 1), E(a[0]).toLowerCase();
    });
  }, t.guid = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 0, 1), a.length > 0)
        switch (E(a[0]).toLowerCase()) {
          case "digits":
            return We().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
          case "digits-hyphen":
            return We();
          case "digits-hyphen-braces":
            return "{" + We() + "}";
          case "digits-hyphen-parentheses":
            return "(" + We() + ")";
        }
      return "{" + We() + "}";
    });
  }, t.console = function(n, r) {
    return e(n, r, function(i, u, a) {
      return a.length === 0 || (a.length === 1 ? n.console(E(a[0])) : n.console(E(a))), y;
    });
  }, t.mid = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 3);
      let s = h(a[1]);
      if (isNaN(s))
        return "";
      if (s < 0 && (s = 0), a.length === 2)
        return E(a[0]).substr(s);
      let o = h(a[2]);
      return isNaN(o) ? "" : (o < 0 && (o = 0), E(a[0]).substr(s, o));
    });
  }, t.find = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 3);
      let s = 0;
      if (a.length > 2) {
        if (s = h(N(a[2], 0)), isNaN(s))
          return -1;
        s < 0 && (s = 0);
      }
      return E(a[1]).indexOf(E(a[0]), s);
    });
  }, t.left = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 2);
      let s = h(a[1]);
      return isNaN(s) ? "" : (s < 0 && (s = 0), E(a[0]).substr(0, s));
    });
  }, t.right = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 2, 2);
      let s = h(a[1]);
      return isNaN(s) ? "" : (s < 0 && (s = 0), E(a[0]).substr(-1 * s, s));
    });
  }, t.split = function(n, r) {
    return e(n, r, function(i, u, a) {
      let s;
      p(a, 2, 4);
      let o = h(N(a[2], -1));
      const l = ut(N(a[3], !1));
      if (o === -1 || o === null || l === !0 ? s = E(a[0]).split(E(a[1])) : (isNaN(o) && (o = -1), o < -1 && (o = -1), s = E(a[0]).split(E(a[1]), o)), l === !1)
        return s;
      const c = [];
      for (let f = 0; f < s.length && !(o !== -1 && c.length >= o); f++)
        s[f] !== "" && s[f] !== void 0 && c.push(s[f]);
      return c;
    });
  }, t.text = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 1, 2), Le(a[0], a[1]);
    });
  }, t.concatenate = function(n, r) {
    return e(n, r, function(i, u, a) {
      const s = [];
      if (a.length < 1)
        return "";
      if (w(a[0])) {
        const o = N(a[2], "");
        for (let l = 0; l < a[0].length; l++)
          s[l] = Le(a[0][l], o);
        return a.length > 1 ? s.join(a[1]) : s.join("");
      }
      if (v(a[0])) {
        const o = N(a[2], "");
        for (let l = 0; l < a[0].length(); l++)
          s[l] = Le(a[0].get(l), o);
        return a.length > 1 ? s.join(a[1]) : s.join("");
      }
      for (let o = 0; o < a.length; o++)
        s[o] = Le(a[o]);
      return s.join("");
    });
  }, t.reverse = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), w(a[0])) {
        const s = a[0].slice(0);
        return s.reverse(), s;
      }
      if (v(a[0])) {
        const s = a[0].toArray().slice(0);
        return s.reverse(), s;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.replace = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 3, 4);
      const s = E(a[0]), o = E(a[1]), l = E(a[2]);
      return a.length !== 4 || ut(a[3]) ? tn(s, o, l) : s.replace(o, l);
    });
  }, t.schema = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (K(a[0])) {
        const s = gi(a[0]);
        return s ? x.convertObjectToArcadeDictionary(s) : null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.subtypes = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), K(a[0])) {
        const s = $t(a[0]);
        return s ? x.convertObjectToArcadeDictionary(s) : null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.subtypecode = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), K(a[0])) {
        const s = $t(a[0]);
        if (!s)
          return null;
        if (s.subtypeField && a[0].hasField(s.subtypeField)) {
          const o = a[0].field(s.subtypeField);
          for (const l of s.subtypes)
            if (l.code === o)
              return l.code;
          return null;
        }
        return null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.subtypename = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), K(a[0])) {
        const s = $t(a[0]);
        if (!s)
          return "";
        if (s.subtypeField && a[0].hasField(s.subtypeField)) {
          const o = a[0].field(s.subtypeField);
          for (const l of s.subtypes)
            if (l.code === o)
              return l.name;
          return "";
        }
        return "";
      }
      throw new Error("Invalid Parameter");
    });
  }, t.gdbversion = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), K(a[0]))
        return a[0].gdbVersion();
      throw new Error("Invalid Parameter");
    });
  }, t.domain = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 2, 3), K(a[0])) {
        const s = Ei(a[0], E(a[1]), a[2] === void 0 ? void 0 : h(a[2]));
        return s && s.domain ? s.domain.type === "coded-value" || s.domain.type === "codedValue" ? x.convertObjectToArcadeDictionary({ type: "codedValue", name: s.domain.name, dataType: Rn[s.field.type], codedValues: s.domain.codedValues.map((o) => ({ name: o.name, code: o.code })) }) : x.convertObjectToArcadeDictionary({ type: "range", name: s.domain.name, dataType: Rn[s.field.type], min: s.domain.min, max: s.domain.max }) : null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t.domainname = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 2, 4), K(a[0]))
        return yi(a[0], E(a[1]), a[2], a[3] === void 0 ? void 0 : h(a[3]));
      throw new Error("Invalid Parameter");
    });
  }, t.domaincode = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 2, 4), K(a[0]))
        return Ai(a[0], E(a[1]), a[2], a[3] === void 0 ? void 0 : h(a[3]));
      throw new Error("Invalid Parameter");
    });
  }, t.urlencode = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), a[0] === null)
        return "";
      if (a[0] instanceof x) {
        let s = "";
        for (const o of a[0].keys()) {
          const l = a[0].field(o);
          s !== "" && (s += "&"), s += l === null ? encodeURIComponent(o) + "=" : encodeURIComponent(o) + "=" + encodeURIComponent(l);
        }
        return s;
      }
      return encodeURIComponent(E(a[0]));
    });
  }, t.hash = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 1);
      const s = new xs(0);
      return ae(a[0], s, { map: /* @__PURE__ */ new Map(), currentLength: 0 }), s.digest();
    });
  }, t.convertdirection = function(n, r) {
    return e(n, r, function(i, u, a) {
      return p(a, 3, 3), As(a[0], a[1], a[2]);
    });
  }, t.fromjson = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (p(a, 1, 1), I(a[0]) === !1)
        throw new Error("Invalid Parameter");
      return x.convertJsonToArcade(JSON.parse(E(a[0])));
    });
  }, t.expects = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a.length < 1)
        throw new Error("Function called with wrong number of Parameters");
      return y;
    });
  }, t.tocharcode = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 2);
      const s = h(N(a[1], 0)), o = E(a[0]);
      if (o.length === 0 && a.length === 1)
        return null;
      if (o.length <= s || s < 0)
        throw new Error("Illegal argument");
      return o.charCodeAt(s);
    });
  }, t.tocodepoint = function(n, r) {
    return e(n, r, function(i, u, a) {
      p(a, 1, 2);
      const s = h(N(a[1], 0)), o = E(a[0]);
      if (o.length === 0 && a.length === 1)
        return null;
      if (o.length <= s || s < 0)
        throw new Error("Illegal argument");
      return o.codePointAt(s);
    });
  }, t.fromcharcode = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a.length < 1)
        throw new Error("Function called with wrong number of Parameters");
      const s = a.map((o) => Math.trunc(h(o))).filter((o) => o >= 0 && o <= 65535);
      return s.length === 0 ? null : String.fromCharCode.apply(null, s);
    });
  }, t.fromcodepoint = function(n, r) {
    return e(n, r, function(i, u, a) {
      if (a.length < 1)
        throw new Error("Function called with wrong number of Parameters");
      let s;
      try {
        s = a.map((o) => Math.trunc(h(o))).filter((o) => o <= 1114111 && o >>> 0 === o);
      } catch {
        return null;
      }
      return s.length === 0 ? null : String.fromCodePoint.apply(null, s);
    });
  };
}
function re(t, e, n) {
  try {
    return n(t, null, e.arguments);
  } catch (r) {
    throw r;
  }
}
function ws(t) {
  return t instanceof Error ? nn(t) : nn(new Error(t));
}
function S(t, e) {
  try {
    switch (e.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return _s(t, e);
      case "VariableDeclaration":
        return Os(t, e);
      case "BlockStatement":
        return fn(t, e);
      case "FunctionDeclaration":
        return Bs(t, e);
      case "ReturnStatement":
        return ks(t, e);
      case "IfStatement":
        return vs(t, e);
      case "ExpressionStatement":
        return Ts(t, e);
      case "AssignmentExpression":
        return Is(t, e);
      case "UpdateExpression":
        return Ns(t, e);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return $s(t, e);
      case "TemplateElement":
        return JSON.stringify(e.value ? e.value.cooked : "");
      case "ForStatement":
        return Ss(t, e);
      case "ForInStatement":
        return bs(t, e);
      case "Identifier":
        return Gs(t, e);
      case "MemberExpression":
        return Ls(t, e);
      case "Literal":
        return e.value === null || e.value === void 0 ? "null" : JSON.stringify(e.value);
      case "ThisExpression":
      case "ConditionalExpression":
      case "Array":
        throw new Error(d(e, "RUNTIME", "NOTSUPPORTED"));
      case "CallExpression":
        return js(t, e);
      case "UnaryExpression":
        return Us(t, e);
      case "BinaryExpression":
        return Ps(t, e);
      case "LogicalExpression":
        return zs(t, e);
      case "ArrayExpression":
        return Ms(t, e);
      case "ObjectExpression":
        return Cs(t, e);
      case "Property":
        return Fs(t, e);
      default:
        throw new Error(d(e, "RUNTIME", "UNREOGNISED"));
    }
  } catch (n) {
    throw n;
  }
}
function Cs(t, e) {
  let n = "lang.dictionary([";
  for (let r = 0; r < e.properties.length; r++) {
    const i = e.properties[r];
    r > 0 && (n += ","), n += "lang.strCheck(" + (i.key.type === "Identifier" ? "'" + i.key.name + "'" : S(t, i.key)) + ",'ObjectExpression'),lang.aCheck(" + S(t, i.value) + ", 'ObjectExpression')";
  }
  return n += "])", n;
}
function Fs(t, e) {
  throw new Error("Should not get here");
}
function bs(t, e) {
  const n = Xe(t), r = Xe(t), i = Xe(t);
  let u = "var " + n + " = " + S(t, e.right) + `;
`;
  e.left.type === "VariableDeclaration" && (u += S(t, e.left));
  let a = e.left.type === "VariableDeclaration" ? e.left.declarations[0].id.name : e.left.name;
  a = a.toLowerCase();
  let s = "";
  return t.localScope !== null && (t.localScope[a] !== void 0 ? s = "lscope['" + a + "']" : t.localScope._SymbolsMap[a] !== void 0 && (s = "lscope['" + t.localScope._SymbolsMap[a] + "']")), s === "" && (t.globalScope[a] !== void 0 ? s = "gscope['" + a + "']" : t.globalScope._SymbolsMap[a] !== void 0 && (s = "gscope['" + t.globalScope._SymbolsMap[a] + "']")), u += "if (" + n + `===null) {  lastStatement = lc.voidOperation; }
 `, u += "else if (lc.isArray(" + n + ") || lc.isString(" + n + ")) {", u += "var " + r + "=" + n + `.length; 
`, u += "for(var " + i + "=0; " + i + "<" + r + "; " + i + `++) {
`, u += s + "=" + i + `;
`, u += S(t, e.body), u += `
}
`, u += ` lastStatement = lc.voidOperation; 
`, u += ` 
}
`, u += "else if (lc.isImmutableArray(" + n + ")) {", u += "var " + r + "=" + n + `.length(); 
`, u += "for(var " + i + "=0; " + i + "<" + r + "; " + i + `++) {
`, u += s + "=" + i + `;
`, u += S(t, e.body), u += `
}
`, u += ` lastStatement = lc.voidOperation; 
`, u += ` 
}
`, u += "else if (( " + n + " instanceof lang.Dictionary) || ( " + n + " instanceof lang.Feature)) {", u += "var " + r + "=" + n + `.keys(); 
`, u += "for(var " + i + "=0; " + i + "<" + r + ".length; " + i + `++) {
`, u += s + "=" + r + "[" + i + `];
`, u += S(t, e.body), u += `
}
`, u += ` lastStatement = lc.voidOperation; 
`, u += ` 
}
`, t.isAsync && (u += "else if (lc.isFeatureSet(" + n + ")) {", u += "var " + r + "=" + n + `.iterator(runtimeCtx.abortSignal); 
`, u += "for(var " + i + "=lang. graphicToFeature( yield " + r + ".next()," + n + "); " + i + "!=null; " + i + "=lang. graphicToFeature( yield " + r + ".next()," + n + `)) {
`, u += s + "=" + i + `;
`, u += S(t, e.body), u += `
}
`, u += ` lastStatement = lc.voidOperation; 
`, u += ` 
}
`), u += `else { lastStatement = lc.voidOperation; } 
`, u;
}
function Ss(t, e) {
  let n = `lastStatement = lc.voidOperation; 
`;
  e.init !== null && (n += S(t, e.init) + "; ");
  const r = Xe(t), i = Xe(t);
  return n += "var " + r + " = true; ", n += `
 do { `, e.update !== null && (n += " if (" + r + `===false) {
 ` + S(t, e.update) + `  
}
 ` + r + `=false; 
`), e.test !== null && (n += "var " + i + " = " + S(t, e.test) + "; ", n += "if (" + i + "===false) { break; } else if (" + i + "!==true) { lang.error({type: '" + e.type + `'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }
`), n += S(t, e.body), e.update !== null && (n += `
 ` + S(t, e.update)), n += `
` + r + ` = true; 
} while(true);  lastStatement = lc.voidOperation; `, n;
}
function Ns(t, e) {
  let n = null, r = "";
  if (e.argument.type === "MemberExpression")
    return n = S(t, e.argument.object), r = e.argument.computed === !0 ? S(t, e.argument.property) : "'" + e.argument.property.name + "'", "lang.memberupdate(" + n + "," + r + ",'" + e.operator + "'," + e.prefix + ")";
  if (n = e.argument.name.toLowerCase(), t.localScope !== null) {
    if (t.localScope[n] !== void 0)
      return "lang.update(lscope, '" + n + "','" + e.operator + "'," + e.prefix + ")";
    if (t.localScope._SymbolsMap[n] !== void 0)
      return "lang.update(lscope, '" + t.localScope._SymbolsMap[n] + "','" + e.operator + "'," + e.prefix + ")";
  }
  if (t.globalScope[n] !== void 0)
    return "lang.update(gscope, '" + n + "','" + e.operator + "'," + e.prefix + ")";
  if (t.globalScope._SymbolsMap[n] !== void 0)
    return "lang.update(gscope, '" + t.globalScope._SymbolsMap[n] + "','" + e.operator + "'," + e.prefix + ")";
  throw new Error("Variable not recognised");
}
function Is(t, e) {
  const n = S(t, e.right);
  let r = null, i = "";
  if (e.left.type === "MemberExpression")
    return r = S(t, e.left.object), i = e.left.computed === !0 ? S(t, e.left.property) : "'" + e.left.property.name + "'", "lang.assignmember(" + r + "," + i + ",'" + e.operator + "'," + n + ")";
  if (r = e.left.name.toLowerCase(), t.localScope !== null) {
    if (t.localScope[r] !== void 0)
      return "lscope['" + r + "']=lang.assign(" + n + ",'" + e.operator + "', lscope['" + r + "'])";
    if (t.localScope._SymbolsMap[r] !== void 0)
      return "lscope['" + t.localScope._SymbolsMap[r] + "']=lang.assign(" + n + ",'" + e.operator + "', lscope['" + t.localScope._SymbolsMap[r] + "'])";
  }
  if (t.globalScope[r] !== void 0)
    return "gscope['" + r + "']=lang.assign(" + n + ",'" + e.operator + "', gscope['" + r + "'])";
  if (t.globalScope._SymbolsMap[r] !== void 0)
    return "gscope['" + t.globalScope._SymbolsMap[r] + "']=lang.assign(" + n + ",'" + e.operator + "', gscope['" + t.globalScope._SymbolsMap[r] + "'])";
  throw new Error("Variable not recognised");
}
function Ts(t, e) {
  return e.expression.type === "AssignmentExpression" ? "lastStatement = lc.voidOperation; " + S(t, e.expression) + `; 
 ` : (e.expression.type, "lastStatement = " + S(t, e.expression) + "; ");
}
function er(t, e) {
  return e.type === "BlockStatement" ? S(t, e) : e.type === "ReturnStatement" || e.type === "BreakStatement" || e.type === "ContinueStatement" ? S(t, e) + "; " : e.type === "UpdateExpression" ? "lastStatement = " + S(t, e) + "; " : e.type === "ExpressionStatement" ? S(t, e) : e.type === "ObjectExpression" ? "lastStatement = " + S(t, e) + "; " : S(t, e) + "; ";
}
function vs(t, e) {
  if (e.test.type === "AssignmentExpression" || e.test.type === "UpdateExpression")
    throw new Error(d(e.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
  const n = S(t, e.test), r = Xe(t);
  let i = "var " + r + " = " + n + `;
 if (` + r + ` === true) {
` + er(t, e.consequent) + `
 }
`;
  return e.alternate !== null ? i += "else if (" + r + `===false)   { 
` + er(t, e.alternate) + `}
` : i += "else if (" + r + `===false) { 
 lastStatement = lc.voidOperation;
 }
`, i += "else { lang.error({type: '" + e.type + `'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); 
}
`, i;
}
function fn(t, e) {
  let n = "";
  for (let r = 0; r < e.body.length; r++)
    e.body[r].type === "ReturnStatement" || e.body[r].type === "BreakStatement" || e.body[r].type === "ContinueStatement" ? n += S(t, e.body[r]) + `; 
` : e.body[r].type === "UpdateExpression" || e.body[r].type === "ObjectExpression" ? n += "lastStatement = " + S(t, e.body[r]) + `; 
` : n += S(t, e.body[r]) + ` 
`;
  return n;
}
function ks(t, e) {
  return e.argument === null ? "return lc.voidOperation" : "return " + S(t, e.argument);
}
function Bs(t, e) {
  const n = e.id.name.toLowerCase(), r = { isAsync: t.isAsync, spatialReference: t.spatialReference, console: t.console, lrucache: t.lrucache, interceptor: t.interceptor, services: t.services, symbols: t.symbols, mangleMap: t.mangleMap, localScope: { _SymbolsMap: {} }, depthCounter: t.depthCounter + 1, globalScope: t.globalScope };
  if (r.depthCounter > 64)
    throw new Error("Exceeded maximum function depth");
  let i = `new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; 
   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];
`;
  for (let u = 0; u < e.params.length; u++) {
    const a = e.params[u].name.toLowerCase(), s = vt(t);
    r.localScope._SymbolsMap[a] = s, r.mangleMap[a] = s, i += "lscope['" + s + "']=arguments[" + u.toString() + `];
`;
  }
  if (t.isAsync === !0 ? (i += `return lang.__awaiter(this, void 0, void 0, function* () {
`, i += fn(r, e.body) + `
 return lastStatement; `, i += "});  }", i += ", runtimeCtx)," + e.params.length + ")", i += `
 lastStatement = lc.voidOperation; 
`) : (i += fn(r, e.body) + `
 return lastStatement; }, runtimeCtx),` + e.params.length + ")", i += `
 lastStatement = lc.voidOperation; 
`), t.globalScope[n] !== void 0)
    return "gscope['" + n + "']=" + i;
  if (t.globalScope._SymbolsMap[n] !== void 0)
    return "gscope['" + t.globalScope._SymbolsMap[n] + "']=" + i;
  {
    const u = vt(t);
    return t.globalScope._SymbolsMap[n] = u, t.mangleMap[n] = u, "gscope['" + u + "']=" + i;
  }
}
function Os(t, e) {
  const n = [];
  for (let r = 0; r < e.declarations.length; r++)
    n.push(S(t, e.declarations[r]));
  return n.join(`
`) + ` 
 lastStatement=  lc.voidOperation; 
`;
}
function _s(t, e) {
  let n = e.init === null ? null : S(t, e.init);
  n === y && (n = null);
  const r = e.id.name.toLowerCase();
  if (t.localScope !== null) {
    if (t.localScope[r] !== void 0)
      return "lscope['" + r + "']=" + n + "; ";
    if (t.localScope._SymbolsMap[r] !== void 0)
      return "lscope['" + t.localScope._SymbolsMap[r] + "']=" + n + "; ";
    {
      const i = vt(t);
      return t.localScope._SymbolsMap[r] = i, t.mangleMap[r] = i, "lscope['" + i + "']=" + n + "; ";
    }
  }
  if (t.globalScope[r] !== void 0)
    return "gscope['" + r + "']=" + n + "; ";
  if (t.globalScope._SymbolsMap[r] !== void 0)
    return "gscope['" + t.globalScope._SymbolsMap[r] + "']=" + n + "; ";
  {
    const i = vt(t);
    return t.globalScope._SymbolsMap[r] = i, t.mangleMap[r] = i, "gscope['" + i + "']=" + n + "; ";
  }
}
let xe = 0;
function Rs(t, e, n) {
  let r;
  switch (e = e.toLowerCase()) {
    case "hasz": {
      const i = t.hasZ;
      return i !== void 0 && i;
    }
    case "hasm": {
      const i = t.hasM;
      return i !== void 0 && i;
    }
    case "spatialreference": {
      let i = t.spatialReference._arcadeCacheId;
      if (i === void 0) {
        let a = !0;
        Object.freeze && Object.isFrozen(t.spatialReference) && (a = !1), a && (xe++, t.spatialReference._arcadeCacheId = xe, i = xe);
      }
      const u = new x({ wkt: t.spatialReference.wkt, wkid: t.spatialReference.wkid });
      return i !== void 0 && (u._arcadeCacheId = "SPREF" + i.toString()), u;
    }
  }
  switch (t.type) {
    case "extent":
      switch (e) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const i = t[e];
          return i !== void 0 ? i : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (e) {
        case "rings":
          return r = t.cache._arcadeCacheId, r === void 0 && (xe++, r = xe, t.cache._arcadeCacheId = r), new bt(t.rings, t.spatialReference, t.hasZ === !0, t.hasM === !0, r);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (e) {
        case "x":
        case "y":
        case "z":
        case "m":
          return t[e] !== void 0 ? t[e] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (e) {
        case "paths":
          return r = t.cache._arcadeCacheId, r === void 0 && (xe++, r = xe, t.cache._arcadeCacheId = r), new bt(t.paths, t.spatialReference, t.hasZ === !0, t.hasM === !0, r);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (e) {
        case "points":
          return r = t.cache._arcadeCacheId, r === void 0 && (xe++, r = xe, t.cache._arcadeCacheId = r), new mn(t.points, t.spatialReference, t.hasZ === !0, t.hasM === !0, r, 1);
        case "type":
          return "Multipoint";
      }
  }
  throw new Error(d(n, "RUNTIME", "PROPERTYNOTFOUND"));
}
function Ls(t, e) {
  try {
    let n;
    return n = e.computed === !0 ? S(t, e.property) : "'" + e.property.name + "'", "lang.member(" + S(t, e.object) + "," + n + ")";
  } catch (n) {
    throw n;
  }
}
function Us(t, e) {
  try {
    return "lang.unary(" + S(t, e.argument) + ",'" + e.operator + "')";
  } catch (n) {
    throw n;
  }
}
function Ms(t, e) {
  try {
    const n = [];
    for (let r = 0; r < e.elements.length; r++)
      e.elements[r].type === "Literal" ? n.push(S(t, e.elements[r])) : n.push("lang.aCheck(" + S(t, e.elements[r]) + ",'ArrayExpression')");
    return "[" + n.join(",") + "]";
  } catch (n) {
    throw n;
  }
}
function $s(t, e) {
  try {
    const n = [];
    let r = 0;
    for (const i of e.quasis)
      n.push(i.value ? JSON.stringify(i.value.cooked) : JSON.stringify("")), i.tail === !1 && (n.push(e.expressions[r] ? "lang.castString(lang.aCheck(" + S(t, e.expressions[r]) + ", 'TemplateLiteral'))" : ""), r++);
    return "([" + n.join(",") + "]).join('')";
  } catch (n) {
    throw n;
  }
}
function Ps(t, e) {
  try {
    return "lang.binary(" + S(t, e.left) + "," + S(t, e.right) + ",'" + e.operator + "')";
  } catch (n) {
    throw n;
  }
}
function zs(t, e) {
  try {
    if (e.left.type === "AssignmentExpression" || e.left.type === "UpdateExpression")
      throw new Error(d(e.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    if (e.right.type === "AssignmentExpression" || e.right.type === "UpdateExpression")
      throw new Error(d(e.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    if (e.operator === "&&" || e.operator === "||")
      return "(lang.logicalCheck(" + S(t, e.left) + ") " + e.operator + " lang.logicalCheck(" + S(t, e.right) + "))";
    throw new Error(d(e, "RUNTIME", "ONLYORORAND"));
  } catch (n) {
    throw n;
  }
}
function Gs(t, e) {
  try {
    const n = e.name.toLowerCase();
    if (t.localScope !== null) {
      if (t.localScope[n] !== void 0)
        return "lscope['" + n + "']";
      if (t.localScope._SymbolsMap[n] !== void 0)
        return "lscope['" + t.localScope._SymbolsMap[n] + "']";
    }
    if (t.globalScope[n] !== void 0)
      return "gscope['" + n + "']";
    if (t.globalScope._SymbolsMap[n] !== void 0)
      return "gscope['" + t.globalScope._SymbolsMap[n] + "']";
    throw new Error(d(e, "RUNTIME", "VARIABLENOTFOUND"));
  } catch (n) {
    throw n;
  }
}
function js(t, e) {
  try {
    if (e.callee.type !== "Identifier")
      throw new Error(d(e, "RUNTIME", "ONLYNODESSUPPORTED"));
    const n = e.callee.name.toLowerCase();
    let r = "";
    if (t.localScope !== null && (t.localScope[n] !== void 0 ? r = "lscope['" + n + "']" : t.localScope._SymbolsMap[n] !== void 0 && (r = "lscope['" + t.localScope._SymbolsMap[n] + "']")), r === "" && (t.globalScope[n] !== void 0 ? r = "gscope['" + n + "']" : t.globalScope._SymbolsMap[n] !== void 0 && (r = "gscope['" + t.globalScope._SymbolsMap[n] + "']")), r !== "") {
      let i = "[";
      for (let u = 0; u < e.arguments.length; u++)
        u > 0 && (i += ", "), i += S(t, e.arguments[u]);
      return i += "]", t.isAsync ? "(yield lang.callfunc(" + r + "," + i + ",runtimeCtx) )" : "lang.callfunc(" + r + "," + i + ",runtimeCtx)";
    }
    throw new Error(d(e, "RUNTIME", "NOTFOUND"));
  } catch (n) {
    throw n;
  }
}
const q = {};
function tr(t) {
  return t === null ? "" : w(t) || v(t) ? "Array" : ye(t) ? "Date" : I(t) ? "String" : V(t) ? "Boolean" : H(t) ? "Number" : t instanceof An ? "Attachment" : t instanceof kt ? "Portal" : t instanceof x ? "Dictionary" : K(t) ? "Feature" : t instanceof Y ? "Point" : t instanceof ne ? "Polygon" : t instanceof te ? "Polyline" : t instanceof ge ? "Multipoint" : t instanceof oe ? "Extent" : ce(t) ? "Function" : gn(t) ? "FeatureSet" : En(t) ? "FeatureSetCollection" : t === y ? "" : typeof t == "number" && isNaN(t) ? "Number" : "Unrecognised Type";
}
function Lr(t, e, n, r) {
  try {
    const i = e[n];
    if (me(i, r))
      return e[n + 1];
    {
      const u = e.length - n;
      return u === 1 ? e[n] : u === 2 ? null : u === 3 ? e[n + 2] : Lr(t, e, n + 2, r);
    }
  } catch (i) {
    throw i;
  }
}
function Ur(t, e, n, r) {
  try {
    if (r === !0)
      return e[n + 1];
    if (e.length - n === 3)
      return e[n + 2];
    {
      const i = e[n + 2];
      if (V(i) === !1)
        throw new Error("WHEN needs boolean test conditions");
      return Ur(t, e, n + 2, i);
    }
  } catch (i) {
    throw i;
  }
}
function _e(t, e) {
  const n = t.length, r = Math.floor(n / 2);
  return n === 0 ? [] : n === 1 ? [t[0]] : Ys(_e(t.slice(0, r), e), _e(t.slice(r, n), e), e);
}
function Ys(t, e, n) {
  const r = [];
  for (; t.length > 0 || e.length > 0; )
    if (t.length > 0 && e.length > 0) {
      let i = n(t[0], e[0]);
      isNaN(i) && (i = 0), i <= 0 ? (r.push(t[0]), t = t.slice(1)) : (r.push(e[0]), e = e.slice(1));
    } else
      t.length > 0 ? (r.push(t[0]), t = t.slice(1)) : e.length > 0 && (r.push(e[0]), e = e.slice(1));
  return r;
}
function pn(t, e) {
  try {
    const n = t.length, r = Math.floor(n / 2);
    if (n === 0)
      return ie([]);
    if (n === 1)
      return ie([t[0]]);
    const i = [pn(t.slice(0, r), e), pn(t.slice(r, n), e)];
    return ft(i).then((u) => Ct(u[0], u[1], e, []));
  } catch (n) {
    return nn(n);
  }
}
function Ct(t, e, n, r) {
  return yn((i, u) => {
    const a = r;
    t.length > 0 || e.length > 0 ? t.length > 0 && e.length > 0 ? n(t[0], e[0]).then((s) => {
      try {
        isNaN(s) && (s = 1), s <= 0 ? (a.push(t[0]), t = t.slice(1)) : (a.push(e[0]), e = e.slice(1)), Ct(t, e, n, r).then((o) => {
          i(o);
        }, u);
      } catch (o) {
        u(o);
      }
    }, u) : t.length > 0 ? (a.push(t[0]), Ct(t = t.slice(1), e, n, r).then((s) => {
      i(s);
    }, u)) : e.length > 0 && (a.push(e[0]), e = e.slice(1), Ct(t, e, n, r).then((s) => {
      i(s);
    }, u)) : i(r);
  });
}
function vt(t) {
  return t.symbols.symbolCounter++, "_T" + t.symbols.symbolCounter.toString();
}
function Xe(t) {
  return t.symbols.symbolCounter++, "_Tvar" + t.symbols.symbolCounter.toString();
}
br(q, re), Rr(q, re), vr(q, re), Tr(q, re), Br(q, re), q.typeof = function(t, e) {
  return re(t, e, function(n, r, i) {
    p(i, 1, 1);
    const u = tr(i[0]);
    if (u === "Unrecognised Type")
      throw new Error("Unrecognised Type");
    return u;
  });
}, q.iif = function(t, e) {
  try {
    return re(t, e, function(n, r, i) {
      if (p(i, 3, 3), V(i[0]) === !1)
        throw new Error("IF Function must have a boolean test condition");
      return i[0] ? i[1] : i[2];
    });
  } catch (n) {
    throw n;
  }
}, q.decode = function(t, e) {
  try {
    return re(t, e, function(n, r, i) {
      if (i.length < 2)
        throw new Error("Missing Parameters");
      if (i.length === 2)
        return i[1];
      {
        if ((i.length - 1) % 2 == 0)
          throw new Error("Must have a default value result.");
        const u = i[0];
        return Lr(t, i, 1, u);
      }
    });
  } catch (n) {
    throw n;
  }
}, q.when = function(t, e) {
  try {
    return re(t, e, function(n, r, i) {
      if (i.length < 3)
        throw new Error("Missing Parameters");
      if (i.length % 2 == 0)
        throw new Error("Must have a default value result.");
      const u = i[0];
      if (V(u) === !1)
        throw new Error("WHEN needs boolean test conditions");
      return Ur(t, i, 0, u);
    });
  } catch (n) {
    throw n;
  }
}, q.top = function(t, e) {
  return re(t, e, function(n, r, i) {
    if (p(i, 2, 2), w(i[0]))
      return h(i[1]) >= i[0].length ? i[0].slice(0) : i[0].slice(0, h(i[1]));
    if (v(i[0]))
      return h(i[1]) >= i[0].length() ? i[0].slice(0) : i[0].slice(0, h(i[1]));
    throw new Error("Top cannot accept this parameter type");
  });
}, q.first = function(t, e) {
  return re(t, e, function(n, r, i) {
    return p(i, 1, 1), w(i[0]) ? i[0].length === 0 ? null : i[0][0] : v(i[0]) ? i[0].length() === 0 ? null : i[0].get(0) : null;
  });
}, q.sort = function(t, e) {
  return re(t, e, function(n, r, i) {
    p(i, 1, 2);
    let u = i[0];
    if (v(u) && (u = u.toArray()), w(u) === !1)
      throw new Error("Illegal Argument");
    if (i.length > 1) {
      if (ce(i[1]) === !1)
        throw new Error("Illegal Argument");
      let a = u;
      const s = function(o, l) {
        return Mr.callfunc(i[1], [o, l], n);
      };
      return t.isAsync ? pn(a, s) : (a = _e(a, function(o, l) {
        return s(o, l);
      }), a);
    }
    {
      let a = u;
      if (a.length === 0)
        return [];
      const s = {};
      for (let c = 0; c < a.length; c++) {
        const f = tr(a[c]);
        f !== "" && (s[f] = !0);
      }
      if (s.Array === !0 || s.Dictionary === !0 || s.Feature === !0 || s.Point === !0 || s.Polygon === !0 || s.Polyline === !0 || s.Multipoint === !0 || s.Extent === !0 || s.Function === !0)
        return a.slice(0);
      let o = 0, l = "";
      for (const c in s)
        o++, l = c;
      return a = o > 1 || l === "String" ? _e(a, function(c, f) {
        if (c == null || c === y)
          return f == null || f === y ? 0 : 1;
        if (f == null || f === y)
          return -1;
        const g = E(c), C = E(f);
        return g < C ? -1 : g === C ? 0 : 1;
      }) : l === "Number" ? _e(a, function(c, f) {
        return c - f;
      }) : l === "Boolean" ? _e(a, function(c, f) {
        return c === f ? 0 : f ? -1 : 1;
      }) : l === "Date" ? _e(a, function(c, f) {
        return f - c;
      }) : a.slice(0), a;
    }
  });
};
const ht = {};
for (const t in q)
  ht[t] = new le(q[t]);
xn(q, re);
for (const t in q)
  q[t] = new le(q[t]);
const Cn = function() {
};
Cn.prototype = q;
const Fn = function() {
};
function Vs(t, e, n) {
  const r = {};
  t || (t = {}), n || (n = {}), r._SymbolsMap = {}, r.textformatting = 1, r.infinity = 1, r.pi = 1;
  for (const i in e)
    r[i] = 1;
  for (const i in n)
    r[i] = 1;
  for (const i in t)
    r[i] = 1;
  return r;
}
function Hs(t, e, n) {
  const r = n ? new Fn() : new Cn();
  t || (t = {}), e || (e = {});
  const i = new x({ newline: `
`, tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  i.immutable = !1, r._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }, r.textformatting = i, r.infinity = Number.POSITIVE_INFINITY, r.pi = Math.PI;
  for (const u in e)
    r[u] = e[u], r._SymbolsMap[u] = 1;
  for (const u in t)
    r._SymbolsMap[u] = 1, t[u] && t[u].declaredClass === "geoscene.Graphic" ? r[u] = j.createFromGraphic(t[u]) : r[u] = t[u];
  return r;
}
Fn.prototype = ht;
function Ue(t, e) {
  const n = { mode: e, compiled: !0, functions: {}, signatures: [], failDefferred: ws, standardFunction: re, standardFunctionAsync: re, evaluateIdentifier: qs };
  for (let r = 0; r < t.length; r++)
    t[r].registerFunctions(n);
  if (e === "sync") {
    for (const r in n.functions)
      q[r] = new le(n.functions[r]), Cn.prototype[r] = q[r];
    for (let r = 0; r < n.signatures.length; r++)
      sn(n.signatures[r], "sync");
  } else {
    for (const r in n.functions)
      ht[r] = new le(n.functions[r]), Fn.prototype[r] = ht[r];
    for (let r = 0; r < n.signatures.length; r++)
      sn(n.signatures[r], "async");
  }
}
function qs(t, e) {
  const n = e.name;
  if (n === "_SymbolsMap")
    throw "Illegal";
  if (t.localStack.length > 0) {
    if (n.substr(0, 2).toLowerCase() !== "_t" && t.localStack[t.localStack.length - 1][n] !== void 0)
      return t.localStack[t.localStack.length - 1][n];
    const i = t.mangleMap[n];
    if (i !== void 0 && t.localStack[t.localStack.length - 1][i] !== void 0)
      return t.localStack[t.localStack.length - 1][i];
  }
  if (n.substr(0, 2).toLowerCase() !== "_t" && t.globalScope[n] !== void 0 || t.globalScope._SymbolsMap[n] === 1)
    return t.globalScope[n];
  const r = t.mangleMap[n];
  return r !== void 0 ? t.globalScope[r] : void 0;
}
Ue([un], "sync"), Ue([un], "async");
let qt = 0;
const Mr = { error(t, e, n) {
  throw new Error(d(t, e, n));
}, __awaiter: (t, e, n, r) => yn((i, u) => {
  function a(l) {
    try {
      o(r.next(l));
    } catch (c) {
      u(c);
    }
  }
  function s(l) {
    try {
      o(r.throw(l));
    } catch (c) {
      u(c);
    }
  }
  function o(l) {
    l.done ? i(l.value) : l.value && l.value.then ? l.value.then(a, s) : (qt++, qt % 100 == 0 ? setTimeout(() => {
      qt = 0, a(l.value);
    }, 0) : a(l.value));
  }
  o((r = r.apply(t, e || [])).next());
}), functionDepthchecker: (t, e) => function() {
  if (e.depthCounter++, e.localStack.push([]), e.depthCounter > 64)
    throw new Error("Exceeded maximum function depth");
  const n = t.apply(this, arguments);
  return Ce(n) ? n.then((r) => (e.depthCounter--, e.localStack.length = e.localStack.length - 1, r)) : (e.depthCounter--, e.localStack.length = e.localStack.length - 1, n);
}, castString: (t) => E(t), aCheck(t, e) {
  if (ce(t))
    throw new Error(d({ type: e }, "RUNTIME", "FUNCTIONCONTEXTILLEGAL"));
  return t === y ? null : t;
}, Dictionary: x, Feature: j, dictionary(t) {
  const e = {};
  for (let r = 0; r < t.length; r += 2) {
    if (ce(t[r + 1]))
      throw new Error("Illegal Argument");
    if (I(t[r]) === !1)
      throw new Error("Illegal Argument");
    t[r + 1] === y ? e[t[r].toString()] = null : e[t[r].toString()] = t[r + 1];
  }
  const n = new x(e);
  return n.immutable = !1, n;
}, strCheck(t) {
  if (I(t) === !1)
    throw new Error("Illegal Argument");
  return t;
}, unary(t, e) {
  if (V(t)) {
    if (e === "!")
      return !t;
    if (e === "-")
      return -1 * h(t);
    if (e === "+")
      return 1 * h(t);
    if (e === "~")
      return ~h(t);
    throw new Error(d({ type: "UnaryExpression", operator: e, prefix: null, argument: null }, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
  }
  if (e === "-")
    return -1 * h(t);
  if (e === "+")
    return 1 * h(t);
  if (e === "~")
    return ~h(t);
  throw new Error(d({ type: "UnaryExpression", operator: e, prefix: null, argument: null }, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
}, logicalCheck(t) {
  if (V(t) === !1)
    throw new Error(d({ type: "LogicalExpression", operator: null, left: null, right: null }, "RUNTIME", "ONLYORORAND"));
  return t;
}, logical(t, e, n) {
  if (V(t) && V(e))
    switch (n) {
      case "||":
        return t || e;
      case "&&":
        return t && e;
      default:
        throw new Error(d({ type: "LogicalExpression", operator: null, left: null, right: null }, "RUNTIME", "ONLYORORAND"));
    }
  throw new Error(d({ type: "LogicalExpression", operator: null, left: null, right: null }, "RUNTIME", "ONLYORORAND"));
}, binary(t, e, n) {
  switch (n) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Er(h(t), h(e), n);
    case "==":
    case "=":
      return me(t, e);
    case "!=":
      return !me(t, e);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return gr(t, e, n);
    case "+":
      return I(t) || I(e) ? E(t) + E(e) : h(t) + h(e);
    case "-":
      return h(t) - h(e);
    case "*":
      return h(t) * h(e);
    case "/":
      return h(t) / h(e);
    case "%":
      return h(t) % h(e);
    default:
      throw new Error(d({ type: "BinaryExpression", operator: n, left: t, right: e }, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}, assign(t, e, n) {
  switch (e) {
    case "=":
      return t === y ? null : t;
    case "/=":
      return h(n) / h(t);
    case "*=":
      return h(n) * h(t);
    case "-=":
      return h(n) - h(t);
    case "+=":
      return I(n) || I(t) ? E(n) + E(t) : h(n) + h(t);
    case "%=":
      return h(n) % h(t);
    default:
      throw new Error(d({ type: "AssignmentExpression", operator: e, left: null, right: null }, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}, update(t, e, n, r) {
  const i = h(t[e]);
  return t[e] = n === "++" ? i + 1 : i - 1, r === !1 ? i : n === "++" ? i + 1 : i - 1;
}, graphicToFeature: (t, e) => t === null ? null : j.createFromGraphicLikeObject(t.geometry, t.attributes, e), memberupdate(t, e, n, r) {
  let i;
  if (w(t)) {
    if (!H(e))
      throw new Error("Invalid Parameter");
    if (e < 0 && (e = t.length + e), e < 0 || e >= t.length)
      throw new Error("Assignment outside of array bounds");
    i = h(t[e]), t[e] = n === "++" ? i + 1 : i - 1;
  } else if (t instanceof x) {
    if (I(e) === !1)
      throw new Error("Dictionary accessor must be a string");
    if (t.hasField(e) !== !0)
      throw new Error("Invalid Parameter");
    i = h(t.field(e)), t.setField(e, n === "++" ? i + 1 : i - 1);
  } else {
    if (!K(t))
      throw v(t) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
    if (I(e) === !1)
      throw new Error("Feature accessor must be a string");
    if (t.hasField(e) !== !0)
      throw new Error("Invalid Parameter");
    i = h(t.field(e)), t.setField(e, n === "++" ? i + 1 : i - 1);
  }
  return r === !1 ? i : n === "++" ? i + 1 : i - 1;
}, assignmember(t, e, n, r) {
  if (w(t)) {
    if (!H(e))
      throw new Error("Invalid Parameter");
    if (e < 0 && (e = t.length + e), e < 0 || e > t.length)
      throw new Error("Assignment outside of array bounds");
    if (e === t.length) {
      if (n !== "=")
        throw new Error("Invalid Parameter");
      t[e] = this.assign(r, n, t[e]);
    } else
      t[e] = this.assign(r, n, t[e]);
  } else if (t instanceof x) {
    if (I(e) === !1)
      throw new Error("Dictionary accessor must be a string");
    if (t.hasField(e) === !0)
      t.setField(e, this.assign(r, n, t.field(e)));
    else {
      if (n !== "=")
        throw new Error("Invalid Parameter");
      t.setField(e, this.assign(r, n, null));
    }
  } else {
    if (!K(t))
      throw v(t) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
    if (I(e) === !1)
      throw new Error("Feature accessor must be a string");
    if (t.hasField(e) === !0)
      t.setField(e, this.assign(r, n, t.field(e)));
    else {
      if (n !== "=")
        throw new Error("Invalid Parameter");
      t.setField(e, this.assign(r, n, null));
    }
  }
}, member(t, e) {
  if (t === null)
    throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "NOTFOUND"));
  if (t instanceof x || K(t)) {
    if (I(e))
      return t.field(e);
    throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (t instanceof b) {
    if (I(e))
      return Rs(t, e, "MemberExpression");
    throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (w(t)) {
    if (H(e) && isFinite(e) && Math.floor(e) === e) {
      if (e < 0 && (e = t.length + e), e >= t.length || e < 0)
        throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "OUTOFBOUNDS"));
      return t[e];
    }
    throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (I(t)) {
    if (H(e) && isFinite(e) && Math.floor(e) === e) {
      if (e < 0 && (e = t.length + e), e >= t.length || e < 0)
        throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "OUTOFBOUNDS"));
      return t[e];
    }
    throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (v(t)) {
    if (H(e) && isFinite(e) && Math.floor(e) === e) {
      if (e < 0 && (e = t.length() + e), e >= t.length() || e < 0)
        throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "OUTOFBOUNDS"));
      return t.get(e);
    }
    throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  throw new Error(d({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
}, callfunc(t, e, n) {
  return t instanceof le ? t.fn(n, { arguments: e, preparsed: !0 }) : t instanceof Dr ? t.fn.apply(this, e) : t.apply(this, e);
} };
function nr(t) {
  console.log(t);
}
function $r(t, e = null, n = !1) {
  e === null && (e = { vars: {}, customfunctions: {} });
  const r = { isAsync: n, globalScope: Vs(e.vars, n ? ht : q, e.customfunctions), localScope: null, mangleMap: {}, console: nr, lrucache: e.lrucache, interceptor: e.interceptor, services: e.services, symbols: { symbolCounter: 0 } };
  let i = S(r, t.body[0].body);
  i === "" && (i = "lc.voidOperation; ");
  let u = "";
  u = n ? `var runtimeCtx=this.prepare(context, true);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
return lang.__awaiter(this, void 0, void 0, function* () {

 function mainBody() {
 var lastStatement=lc.voidOperation;
 return lang.__awaiter(this, void 0, void 0, function* () {
` + i + `
 return lastStatement; }); } 
 return this.postProcess(yield mainBody()); }); ` : `var runtimeCtx=this.prepare(context, false);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
 function mainBody() {
 var lastStatement=lc.voidOperation;
 ` + i + `
 return lastStatement; } 
 return this.postProcess(mainBody()); `;
  const a = { lc: xi, lang: Mr, mangles: r.mangleMap, postProcess(s) {
    if (s instanceof de && (s = s.value), s instanceof lt && (s = s.value), s === y && (s = null), s === Se)
      throw new Error("Cannot return BREAK");
    if (s === pt)
      throw new Error("Cannot return CONTINUE");
    if (ce(s))
      throw new Error("Cannot return FUNCTION");
    return s;
  }, prepare(s, o) {
    let l = s.spatialReference;
    l == null && (l = new Dn({ wkid: 102100 }));
    const c = Hs(s.vars, s.customfunctions, o);
    return { localStack: [], isAsync: o, mangleMap: this.mangles, spatialReference: l, globalScope: c, abortSignal: s.abortSignal === void 0 || s.abortSignal === null ? { aborted: !1 } : s.abortSignal, localScope: null, services: s.services, console: s.console ? s.console : nr, lrucache: s.lrucache, interceptor: s.interceptor, symbols: { symbolCounter: 0 }, depthCounter: 1 };
  } };
  return new Function("context", "spatialReference", u).bind(a);
}
function Js() {
  return import("./geomasync-B6dMYbBD.js").then((t) => (Ue([t], "async"), !0));
}
function Xs(t, e) {
  const n = [];
  for (let r = 0; r < e.arguments.length; r++)
    n.push(A(t, e.arguments[r]));
  return n;
}
function ue(t, e, n) {
  try {
    return e.preparsed === !0 ? n(t, null, e.arguments) : n(t, e, Xs(t, e));
  } catch (r) {
    throw r;
  }
}
function A(t, e) {
  try {
    switch (e.type) {
      case "EmptyStatement":
        return y;
      case "VariableDeclarator":
        return la(t, e);
      case "VariableDeclaration":
        return oa(t, e);
      case "BlockStatement":
        return sa(t, e);
      case "FunctionDeclaration":
        return ua(t, e);
      case "ReturnStatement":
        return aa(t, e);
      case "IfStatement":
        return ia(t, e);
      case "ExpressionStatement":
        return ra(t, e);
      case "AssignmentExpression":
        return na(t, e);
      case "UpdateExpression":
        return ta(t, e);
      case "BreakStatement":
        return Se;
      case "ContinueStatement":
        return pt;
      case "TemplateElement":
        return ma(t, e);
      case "TemplateLiteral":
        return Da(t, e);
      case "ForStatement":
        return Qs(t, e);
      case "ForInStatement":
        return Ws(t, e);
      case "Identifier":
        return Pr(t, e);
      case "MemberExpression":
        return ca(t, e);
      case "Literal":
        return e.value;
      case "CallExpression":
        return ga(t, e);
      case "UnaryExpression":
        return ha(t, e);
      case "BinaryExpression":
        return pa(t, e);
      case "LogicalExpression":
        return da(t, e);
      case "ArrayExpression":
        return fa(t, e);
      case "ObjectExpression":
        return Zs(t, e);
      case "Property":
        return Ks(t, e);
      default:
        throw new Error(d(e, "RUNTIME", "UNREOGNISED"));
    }
  } catch (n) {
    throw n;
  }
}
function Zs(t, e) {
  const n = {};
  for (let i = 0; i < e.properties.length; i++) {
    const u = A(t, e.properties[i]);
    if (ce(u.value))
      throw new Error("Illegal Argument");
    if (I(u.key) === !1)
      throw new Error("Illegal Argument");
    u.value === y ? n[u.key.toString()] = null : n[u.key.toString()] = u.value;
  }
  const r = new x(n);
  return r.immutable = !1, r;
}
function Ks(t, e) {
  return { key: e.key.type === "Identifier" ? e.key.name : A(t, e.key), value: A(t, e.value) };
}
function Ws(t, e) {
  const n = A(t, e.right);
  e.left.type === "VariableDeclaration" && A(t, e.left);
  let r = null, i = "";
  if (e.left.type === "VariableDeclaration") {
    const u = e.left.declarations[0].id;
    u.type === "Identifier" && (i = u.name);
  } else
    e.left.type === "Identifier" && (i = e.left.name);
  if (!i)
    throw new Error(d(e, "RUNTIME", "INVALIDVARIABLE"));
  if (i = i.toLowerCase(), t.localScope !== null && t.localScope[i] !== void 0 && (r = t.localScope[i]), r === null && t.globalScope[i] !== void 0 && (r = t.globalScope[i]), r === null)
    throw new Error(d(e, "RUNTIME", "VARIABLENOTDECLARED"));
  if (w(n) || I(n)) {
    const u = n.length;
    for (let a = 0; a < u; a++) {
      r.value = a;
      const s = A(t, e.body);
      if (s === Se)
        break;
      if (s instanceof de)
        return s;
    }
    return y;
  }
  if (v(n)) {
    for (let u = 0; u < n.length(); u++) {
      r.value = u;
      const a = A(t, e.body);
      if (a === Se)
        break;
      if (a instanceof de)
        return a;
    }
    return y;
  }
  if (!(n instanceof x || K(n)))
    return y;
  {
    const u = n.keys();
    for (let a = 0; a < u.length; a++) {
      r.value = u[a];
      const s = A(t, e.body);
      if (s === Se)
        break;
      if (s instanceof de)
        return s;
    }
  }
}
function Qs(t, e) {
  e.init !== null && A(t, e.init);
  const n = { testResult: !0, lastAction: y };
  do
    ea(t, e, n);
  while (n.testResult === !0);
  return n.lastAction instanceof de ? n.lastAction : y;
}
function ea(t, e, n) {
  if (e.test !== null) {
    if (n.testResult = A(t, e.test), n.testResult === !1)
      return;
    if (n.testResult !== !0)
      throw new Error(d(e, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
  }
  n.lastAction = A(t, e.body), n.lastAction !== Se ? n.lastAction instanceof de ? n.testResult = !1 : e.update !== null && A(t, e.update) : n.testResult = !1;
}
function ta(t, e) {
  let n, r = null, i = "";
  if (e.argument.type === "MemberExpression") {
    if (r = A(t, e.argument.object), e.argument.computed === !0 ? i = A(t, e.argument.property) : e.argument.property.type === "Identifier" && (i = e.argument.property.name), w(r)) {
      if (!H(i))
        throw new Error("Invalid Parameter");
      if (i < 0 && (i = r.length + i), i < 0 || i >= r.length)
        throw new Error("Assignment outside of array bounds");
      n = h(r[i]), r[i] = e.operator === "++" ? n + 1 : n - 1;
    } else if (r instanceof x) {
      if (I(i) === !1)
        throw new Error("Dictionary accessor must be a string");
      if (r.hasField(i) !== !0)
        throw new Error("Invalid Parameter");
      n = h(r.field(i)), r.setField(i, e.operator === "++" ? n + 1 : n - 1);
    } else {
      if (!K(r))
        throw v(r) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
      if (I(i) === !1)
        throw new Error("Feature accessor must be a string");
      if (r.hasField(i) !== !0)
        throw new Error("Invalid Parameter");
      n = h(r.field(i)), r.setField(i, e.operator === "++" ? n + 1 : n - 1);
    }
    return e.prefix === !1 ? n : e.operator === "++" ? n + 1 : n - 1;
  }
  if (r = e.argument.type === "Identifier" ? e.argument.name.toLowerCase() : "", !r)
    throw new Error("Invalid identifier");
  if (t.localScope !== null && t.localScope[r] !== void 0)
    return n = h(t.localScope[r].value), t.localScope[r] = { value: e.operator === "++" ? n + 1 : n - 1, valueset: !0, node: e }, e.prefix === !1 ? n : e.operator === "++" ? n + 1 : n - 1;
  if (t.globalScope[r] !== void 0)
    return n = h(t.globalScope[r].value), t.globalScope[r] = { value: e.operator === "++" ? n + 1 : n - 1, valueset: !0, node: e }, e.prefix === !1 ? n : e.operator === "++" ? n + 1 : n - 1;
  throw new Error("Variable not recognised");
}
function ve(t, e, n, r) {
  switch (e) {
    case "=":
      return t === y ? null : t;
    case "/=":
      return h(n) / h(t);
    case "*=":
      return h(n) * h(t);
    case "-=":
      return h(n) - h(t);
    case "+=":
      return I(n) || I(t) ? E(n) + E(t) : h(n) + h(t);
    case "%=":
      return h(n) % h(t);
    default:
      throw new Error(d(r, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}
function na(t, e) {
  const n = A(t, e.right);
  let r = null, i = "";
  if (e.left.type === "MemberExpression") {
    if (r = A(t, e.left.object), e.left.computed === !0 ? i = A(t, e.left.property) : e.left.property.type === "Identifier" && (i = e.left.property.name), w(r)) {
      if (!H(i))
        throw new Error("Invalid Parameter");
      if (i < 0 && (i = r.length + i), i < 0 || i > r.length)
        throw new Error("Assignment outside of array bounds");
      if (i === r.length) {
        if (e.operator !== "=")
          throw new Error("Invalid Parameter");
        r[i] = ve(n, e.operator, r[i], e);
      } else
        r[i] = ve(n, e.operator, r[i], e);
    } else if (r instanceof x) {
      if (I(i) === !1)
        throw new Error("Dictionary accessor must be a string");
      if (r.hasField(i) === !0)
        r.setField(i, ve(n, e.operator, r.field(i), e));
      else {
        if (e.operator !== "=")
          throw new Error("Invalid Parameter");
        r.setField(i, ve(n, e.operator, null, e));
      }
    } else {
      if (!K(r))
        throw v(r) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
      if (I(i) === !1)
        throw new Error("Feature accessor must be a string");
      if (r.hasField(i) === !0)
        r.setField(i, ve(n, e.operator, r.field(i), e));
      else {
        if (e.operator !== "=")
          throw new Error("Invalid Parameter");
        r.setField(i, ve(n, e.operator, null, e));
      }
    }
    return y;
  }
  if (r = e.left.name.toLowerCase(), t.localScope !== null && t.localScope[r] !== void 0)
    return t.localScope[r] = { value: ve(n, e.operator, t.localScope[r].value, e), valueset: !0, node: e.right }, y;
  if (t.globalScope[r] !== void 0)
    return t.globalScope[r] = { value: ve(n, e.operator, t.globalScope[r].value, e), valueset: !0, node: e.right }, y;
  throw new Error("Variable not recognised");
}
function ra(t, e) {
  if (e.expression.type === "AssignmentExpression" || e.expression.type === "UpdateExpression")
    return A(t, e.expression);
  if (e.expression.type === "CallExpression") {
    const n = A(t, e.expression);
    return n === y ? y : new lt(n);
  }
  {
    const n = A(t, e.expression);
    return n === y ? y : new lt(n);
  }
}
function ia(t, e) {
  if (e.test.type === "AssignmentExpression" || e.test.type === "UpdateExpression")
    throw new Error(d(e.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
  const n = A(t, e.test);
  if (n === !0)
    return A(t, e.consequent);
  if (n === !1)
    return e.alternate !== null ? A(t, e.alternate) : y;
  throw new Error(d(e, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
}
function sa(t, e) {
  let n = y;
  for (let r = 0; r < e.body.length; r++)
    if (n = A(t, e.body[r]), n instanceof de || n === Se || n === pt)
      return n;
  return n;
}
function aa(t, e) {
  if (e.argument === null)
    return new de(y);
  const n = A(t, e.argument);
  return new de(n);
}
function ua(t, e) {
  const n = e.id.name.toLowerCase();
  return t.globalScope[n] = { valueset: !0, node: null, value: new ot(e, t) }, y;
}
function oa(t, e) {
  for (let n = 0; n < e.declarations.length; n++)
    A(t, e.declarations[n]);
  return y;
}
function la(t, e) {
  let n = e.init === null ? null : A(t, e.init);
  if (n === y && (n = null), e.id.type !== "Identifier")
    throw new Error("Can only assign a regular variable");
  const r = e.id.name.toLowerCase();
  return t.localScope !== null ? t.localScope[r] = { value: n, valueset: !0, node: e.init } : t.globalScope[r] = { value: n, valueset: !0, node: e.init }, y;
}
let we = 0;
function rr(t, e, n) {
  let r;
  switch (e = e.toLowerCase()) {
    case "hasz": {
      const i = t.hasZ;
      return i !== void 0 && i;
    }
    case "hasm": {
      const i = t.hasM;
      return i !== void 0 && i;
    }
    case "spatialreference": {
      let i = t.spatialReference._arcadeCacheId;
      if (i === void 0) {
        let a = !0;
        Object.freeze && Object.isFrozen(t.spatialReference) && (a = !1), a && (we++, t.spatialReference._arcadeCacheId = we, i = we);
      }
      const u = new x({ wkt: t.spatialReference.wkt, wkid: t.spatialReference.wkid });
      return i !== void 0 && (u._arcadeCacheId = "SPREF" + i.toString()), u;
    }
  }
  switch (t.type) {
    case "extent":
      switch (e) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const i = t[e];
          return i !== void 0 ? i : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (e) {
        case "rings":
          return r = t.cache._arcadeCacheId, r === void 0 && (we++, r = we, t.cache._arcadeCacheId = r), new bt(t.rings, t.spatialReference, t.hasZ === !0, t.hasM === !0, r);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (e) {
        case "x":
        case "y":
        case "z":
        case "m":
          return t[e] !== void 0 ? t[e] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (e) {
        case "paths":
          return r = t.cache._arcadeCacheId, r === void 0 && (we++, r = we, t.cache._arcadeCacheId = r), new bt(t.paths, t.spatialReference, t.hasZ === !0, t.hasM === !0, r);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (e) {
        case "points":
          return r = t.cache._arcadeCacheId, r === void 0 && (we++, r = we, t.cache._arcadeCacheId = r), new mn(t.points, t.spatialReference, t.hasZ === !0, t.hasM === !0, r, 1);
        case "type":
          return "Multipoint";
      }
  }
  throw new Error(d(n, "RUNTIME", "PROPERTYNOTFOUND"));
}
function ca(t, e) {
  try {
    const n = A(t, e.object);
    if (n === null)
      throw new Error(d(e, "RUNTIME", "NOTFOUND"));
    if (e.computed === !1) {
      if (e.property.type === "Identifier") {
        if (n instanceof x || K(n))
          return n.field(e.property.name);
        if (n instanceof b)
          return rr(n, e.property.name, e);
      }
      throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
    }
    {
      let r = A(t, e.property);
      if (n instanceof x || K(n)) {
        if (I(r))
          return n.field(r);
        throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
      }
      if (n instanceof b) {
        if (I(r))
          return rr(n, r, e);
        throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
      }
      if (w(n)) {
        if (H(r) && isFinite(r) && Math.floor(r) === r) {
          if (r < 0 && (r = n.length + r), r >= n.length || r < 0)
            throw new Error(d(e, "RUNTIME", "OUTOFBOUNDS"));
          return n[r];
        }
        throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
      }
      if (I(n)) {
        if (H(r) && isFinite(r) && Math.floor(r) === r) {
          if (r < 0 && (r = n.length + r), r >= n.length || r < 0)
            throw new Error(d(e, "RUNTIME", "OUTOFBOUNDS"));
          return n[r];
        }
        throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
      }
      if (v(n)) {
        if (H(r) && isFinite(r) && Math.floor(r) === r) {
          if (r < 0 && (r = n.length() + r), r >= n.length() || r < 0)
            throw new Error(d(e, "RUNTIME", "OUTOFBOUNDS"));
          return n.get(r);
        }
        throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
      }
      throw new Error(d(e, "RUNTIME", "INVALIDTYPE"));
    }
  } catch (n) {
    throw n;
  }
}
function ha(t, e) {
  try {
    const n = A(t, e.argument);
    if (V(n)) {
      if (e.operator === "!")
        return !n;
      if (e.operator === "-")
        return -1 * h(n);
      if (e.operator === "+")
        return 1 * h(n);
      if (e.operator === "~")
        return ~h(n);
      throw new Error(d(e, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
    }
    if (e.operator === "~")
      return ~h(n);
    if (e.operator === "-")
      return -1 * h(n);
    if (e.operator === "+")
      return 1 * h(n);
    throw new Error(d(e, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
  } catch (n) {
    throw n;
  }
}
function fa(t, e) {
  try {
    const n = [];
    for (let r = 0; r < e.elements.length; r++) {
      const i = A(t, e.elements[r]);
      if (ce(i))
        throw new Error(d(e, "RUNTIME", "FUNCTIONCONTEXTILLEGAL"));
      i === y ? n.push(null) : n.push(i);
    }
    return n;
  } catch (n) {
    throw n;
  }
}
function pa(t, e) {
  try {
    const n = [A(t, e.left), A(t, e.right)], r = n[0], i = n[1];
    switch (e.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Er(h(r), h(i), e.operator);
      case "==":
        return me(r, i);
      case "!=":
        return !me(r, i);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return gr(r, i, e.operator);
      case "+":
        return I(r) || I(i) ? E(r) + E(i) : h(r) + h(i);
      case "-":
        return h(r) - h(i);
      case "*":
        return h(r) * h(i);
      case "/":
        return h(r) / h(i);
      case "%":
        return h(r) % h(i);
      default:
        throw new Error(d(e, "RUNTIME", "OPERATORNOTRECOGNISED"));
    }
  } catch (n) {
    throw n;
  }
}
function da(t, e) {
  try {
    if (e.left.type === "AssignmentExpression" || e.left.type === "UpdateExpression")
      throw new Error(d(e.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    if (e.right.type === "AssignmentExpression" || e.right.type === "UpdateExpression")
      throw new Error(d(e.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    const n = A(t, e.left);
    if (V(n))
      switch (e.operator) {
        case "||":
          if (n === !0)
            return n;
          {
            const r = A(t, e.right);
            if (V(r))
              return r;
            throw new Error(d(e, "RUNTIME", "ONLYORORAND"));
          }
        case "&&":
          if (n === !1)
            return n;
          {
            const r = A(t, e.right);
            if (V(r))
              return r;
            throw new Error(d(e, "RUNTIME", "ONLYORORAND"));
          }
        default:
          throw new Error(d(e, "RUNTIME", "ONLYORORAND"));
      }
    throw new Error(d(e, "RUNTIME", "ONLYBOOLEAN"));
  } catch (n) {
    throw n;
  }
}
function ma(t, e) {
  return e.value ? e.value.cooked : "";
}
function Da(t, e) {
  let n = "", r = 0;
  for (const i of e.quasis)
    n += i.value ? i.value.cooked : "", i.tail === !1 && (n += e.expressions[r] ? E(A(t, e.expressions[r])) : "", r++);
  return n;
}
function Pr(t, e) {
  let n;
  try {
    const r = e.name.toLowerCase();
    if (t.localScope !== null && t.localScope[r] !== void 0)
      return n = t.localScope[r], n.valueset === !0 || (n.value = A(t, n.node), n.valueset = !0), n.value;
    if (t.globalScope[r] !== void 0)
      return n = t.globalScope[r], n.valueset === !0 || (n.value = A(t, n.node), n.valueset = !0), n.value;
    throw new Error(d(e, "RUNTIME", "VARIABLENOTFOUND"));
  } catch (r) {
    throw r;
  }
}
function ga(t, e) {
  try {
    if (e.callee.type !== "Identifier")
      throw new Error(d(e, "RUNTIME", "ONLYNODESSUPPORTED"));
    if (t.localScope !== null && t.localScope[e.callee.name.toLowerCase()] !== void 0) {
      const n = t.localScope[e.callee.name.toLowerCase()];
      if (n.value instanceof le)
        return n.value.fn(t, e);
      if (n.value instanceof ot)
        return sr(t, e, n.value.definition);
      throw new Error(d(e, "RUNTIME", "NOTAFUNCTION"));
    }
    if (t.globalScope[e.callee.name.toLowerCase()] !== void 0) {
      const n = t.globalScope[e.callee.name.toLowerCase()];
      if (n.value instanceof le)
        return n.value.fn(t, e);
      if (n.value instanceof ot)
        return sr(t, e, n.value.definition);
      throw new Error(d(e, "RUNTIME", "NOTAFUNCTION"));
    }
    throw new Error(d(e, "RUNTIME", "NOTFOUND"));
  } catch (n) {
    throw n;
  }
}
const Z = {};
function ir(t) {
  return t == null ? "" : w(t) || v(t) ? "Array" : ye(t) ? "Date" : I(t) ? "String" : V(t) ? "Boolean" : H(t) ? "Number" : t instanceof An ? "Attachment" : t instanceof kt ? "Portal" : t instanceof x ? "Dictionary" : K(t) ? "Feature" : t instanceof Y ? "Point" : t instanceof ne ? "Polygon" : t instanceof te ? "Polyline" : t instanceof ge ? "Multipoint" : t instanceof oe ? "Extent" : ce(t) ? "Function" : gn(t) ? "FeatureSet" : En(t) ? "FeatureSetCollection" : t === y ? "" : typeof t == "number" && isNaN(t) ? "Number" : "Unrecognised Type";
}
function zr(t, e, n, r) {
  try {
    const i = A(t, e.arguments[n]);
    if (me(i, r))
      return A(t, e.arguments[n + 1]);
    {
      const u = e.arguments.length - n;
      return u === 1 ? A(t, e.arguments[n]) : u === 2 ? null : u === 3 ? A(t, e.arguments[n + 2]) : zr(t, e, n + 2, r);
    }
  } catch (i) {
    throw i;
  }
}
function Gr(t, e, n, r) {
  try {
    if (r === !0)
      return A(t, e.arguments[n + 1]);
    if (e.arguments.length - n === 3)
      return A(t, e.arguments[n + 2]);
    {
      const i = A(t, e.arguments[n + 2]);
      if (V(i) === !1)
        throw new Error("WHEN needs boolean test conditions");
      return Gr(t, e, n + 2, i);
    }
  } catch (i) {
    throw i;
  }
}
function Re(t, e) {
  const n = t.length, r = Math.floor(n / 2);
  return n === 0 ? [] : n === 1 ? [t[0]] : Ea(Re(t.slice(0, r), e), Re(t.slice(r, n), e), e);
}
function Ea(t, e, n) {
  const r = [];
  for (; t.length > 0 || e.length > 0; )
    if (t.length > 0 && e.length > 0) {
      let i = n(t[0], e[0]);
      isNaN(i) && (i = 0), i <= 0 ? (r.push(t[0]), t = t.slice(1)) : (r.push(e[0]), e = e.slice(1));
    } else
      t.length > 0 ? (r.push(t[0]), t = t.slice(1)) : e.length > 0 && (r.push(e[0]), e = e.slice(1));
  return r;
}
function jr(t, e, n) {
  try {
    const r = t.body;
    if (n.length !== t.params.length)
      throw new Error("Invalid Parameter calls to function.");
    for (let u = 0; u < n.length; u++)
      e.localScope[t.params[u].name.toLowerCase()] = { value: n[u], valueset: !0, node: null };
    const i = A(e, r);
    if (i instanceof de)
      return i.value;
    if (i === Se)
      throw new Error("Cannot Break from a Function");
    if (i === pt)
      throw new Error("Cannot Continue from a Function");
    return i instanceof lt ? i.value : i;
  } catch (r) {
    throw r;
  }
}
function sr(t, e, n) {
  return ue(t, e, function(r, i, u) {
    const a = { spatialReference: t.spatialReference, globalScope: t.globalScope, depthCounter: t.depthCounter + 1, console: t.console, lrucache: t.lrucache, interceptor: t.interceptor, localScope: {} };
    if (a.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return jr(n, a, u);
  });
}
function Yr(t) {
  return function() {
    const n = { spatialReference: t.context.spatialReference, console: t.context.console, lrucache: t.context.lrucache, interceptor: t.context.interceptor, localScope: {}, depthCounter: t.context.depthCounter + 1, globalScope: t.context.globalScope };
    if (n.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return jr(t.definition, n, arguments);
  };
}
br(Z, ue), Rr(Z, ue), vr(Z, ue), Tr(Z, ue), Br(Z, ue), xn(Z, ue), Z.typeof = function(t, e) {
  return ue(t, e, function(n, r, i) {
    p(i, 1, 1);
    const u = ir(i[0]);
    if (u === "Unrecognised Type")
      throw new Error("Unrecognised Type");
    return u;
  });
}, Z.iif = function(t, e) {
  try {
    p(e.arguments === null ? [] : e.arguments, 3, 3);
    const n = A(t, e.arguments[0]);
    if (V(n) === !1)
      throw new Error("IF Function must have a boolean test condition");
    const r = A(t, e.arguments[1]), i = A(t, e.arguments[2]);
    return n === !0 ? r : i;
  } catch (n) {
    throw n;
  }
}, Z.decode = function(t, e) {
  try {
    if (e.arguments.length < 2)
      throw new Error("Missing Parameters");
    if (e.arguments.length === 2)
      return A(t, e.arguments[1]);
    {
      if ((e.arguments.length - 1) % 2 == 0)
        throw new Error("Must have a default value result.");
      const n = A(t, e.arguments[0]);
      return zr(t, e, 1, n);
    }
  } catch (n) {
    throw n;
  }
}, Z.when = function(t, e) {
  try {
    if (e.arguments.length < 3)
      throw new Error("Missing Parameters");
    if (e.arguments.length % 2 == 0)
      throw new Error("Must have a default value result.");
    const n = A(t, e.arguments[0]);
    if (V(n) === !1)
      throw new Error("WHEN needs boolean test conditions");
    return Gr(t, e, 0, n);
  } catch (n) {
    throw n;
  }
}, Z.top = function(t, e) {
  return ue(t, e, function(n, r, i) {
    if (p(i, 2, 2), w(i[0]))
      return h(i[1]) >= i[0].length ? i[0].slice(0) : i[0].slice(0, h(i[1]));
    if (v(i[0]))
      return h(i[1]) >= i[0].length() ? i[0].slice(0) : i[0].slice(0, h(i[1]));
    throw new Error("Top cannot accept this parameter type");
  });
}, Z.first = function(t, e) {
  return ue(t, e, function(n, r, i) {
    return p(i, 1, 1), w(i[0]) ? i[0].length === 0 ? null : i[0][0] : v(i[0]) ? i[0].length() === 0 ? null : i[0].get(0) : null;
  });
}, Z.sort = function(t, e) {
  return ue(t, e, function(n, r, i) {
    p(i, 1, 2);
    let u = i[0];
    if (v(u) && (u = u.toArray()), w(u) === !1)
      throw new Error("Illegal Argument");
    if (i.length > 1) {
      if (ce(i[1]) === !1)
        throw new Error("Illegal Argument");
      let a = u;
      const s = Yr(i[1]);
      return a = Re(a, function(o, l) {
        return s(o, l);
      }), a;
    }
    {
      let a = u;
      if (a.length === 0)
        return [];
      const s = {};
      for (let c = 0; c < a.length; c++) {
        const f = ir(a[c]);
        f !== "" && (s[f] = !0);
      }
      if (s.Array === !0 || s.Dictionary === !0 || s.Feature === !0 || s.Point === !0 || s.Polygon === !0 || s.Polyline === !0 || s.Multipoint === !0 || s.Extent === !0 || s.Function === !0)
        return a.slice(0);
      let o = 0, l = "";
      for (const c in s)
        o++, l = c;
      return a = o > 1 || l === "String" ? Re(a, function(c, f) {
        if (c == null || c === y)
          return f == null || f === y ? 0 : 1;
        if (f == null || f === y)
          return -1;
        const g = E(c), C = E(f);
        return g < C ? -1 : g === C ? 0 : 1;
      }) : l === "Number" ? Re(a, function(c, f) {
        return c - f;
      }) : l === "Boolean" ? Re(a, function(c, f) {
        return c === f ? 0 : f ? -1 : 1;
      }) : l === "Date" ? Re(a, function(c, f) {
        return f - c;
      }) : a.slice(0), a;
    }
  });
};
for (const t in Z)
  Z[t] = { value: new le(Z[t]), valueset: !0, node: null };
const at = function() {
};
function ya(t, e) {
  const n = new at();
  t || (t = {}), e || (e = {});
  const r = new x({ newline: `
`, tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  r.immutable = !1, n.textformatting = { value: r, valueset: !0, node: null };
  for (const i in e)
    n[i] = { value: new le(e[i]), native: !0, valueset: !0, node: null };
  for (const i in t)
    t[i] && t[i].declaredClass === "geoscene.Graphic" ? n[i] = { value: j.createFromGraphic(t[i]), valueset: !0, node: null } : n[i] = { value: t[i], valueset: !0, node: null };
  return n;
}
at.prototype = Z, at.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: !0, node: null }, at.prototype.pi = { value: Math.PI, valueset: !0, node: null };
function Aa(t) {
  console.log(t);
}
function Vr(t) {
  const e = { mode: "sync", compiled: !1, functions: {}, signatures: [], standardFunction: ue, evaluateIdentifier: Pr, arcadeCustomFunctionHandler: Yr };
  for (let n = 0; n < t.length; n++)
    t[n].registerFunctions(e);
  for (const n in e.functions)
    Z[n] = { value: new le(e.functions[n]), valueset: !0, node: null }, at.prototype[n] = Z[n];
  for (let n = 0; n < e.signatures.length; n++)
    sn(e.signatures[n], "async");
}
function Hr(t, e) {
  let n = e.spatialReference;
  n == null && (n = new Dn({ wkid: 102100 }));
  let r = A({ spatialReference: n, globalScope: ya(e.vars, e.customfunctions), localScope: null, console: e.console ? e.console : Aa, lrucache: e.lrucache, interceptor: e.interceptor, depthCounter: 1 }, t.body[0].body);
  if (r instanceof de && (r = r.value), r instanceof lt && (r = r.value), r === y && (r = null), r === Se)
    throw new Error("Cannot return BREAK");
  if (r === pt)
    throw new Error("Cannot return CONTINUE");
  if (r instanceof ot)
    throw new Error("Cannot return FUNCTION");
  if (r instanceof le)
    throw new Error("Cannot return FUNCTION");
  return r;
}
function xa(t, e) {
  return xr(t, e);
}
function wa(t, e) {
  return bi(t, e);
}
Vr([un]);
const $ = { AssignmentExpression: "AssignmentExpression", ArrayExpression: "ArrayExpression", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", ContinueStatement: "ContinueStatement", EmptyStatement: "EmptyStatement", ExpressionStatement: "ExpressionStatement", ForStatement: "ForStatement", ForInStatement: "ForInStatement", FunctionDeclaration: "FunctionDeclaration", FunctionExpression: "FunctionExpression", Identifier: "Identifier", IfStatement: "IfStatement", Literal: "Literal", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", ObjectExpression: "ObjectExpression", Program: "Program", Property: "Property", ReturnStatement: "ReturnStatement", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator" };
let Ca = class {
  constructor() {
    this.attach = !1, this.comments = [], this.stack = [], this.leading = [], this.trailing = [];
  }
  insertInnerComments(e, n) {
    if (e.type === $.BlockStatement && e.body.length === 0) {
      const r = [];
      for (let i = this.leading.length - 1; i >= 0; --i) {
        const u = this.leading[i];
        n.end.offset >= u.start && (r.unshift(u.comment), this.leading.splice(i, 1), this.trailing.splice(i, 1));
      }
      r.length && (e.innerComments = r);
    }
  }
  findTrailingComments(e) {
    let n = [];
    if (this.trailing.length > 0) {
      for (let i = this.trailing.length - 1; i >= 0; --i) {
        const u = this.trailing[i];
        u.start >= e.end.offset && n.unshift(u.comment);
      }
      return this.trailing.length = 0, n;
    }
    const r = this.stack[this.stack.length - 1];
    if (r && r.node.trailingComments) {
      const i = r.node.trailingComments[0];
      i && i.range[0] >= e.end.offset && (n = r.node.trailingComments, delete r.node.trailingComments);
    }
    return n;
  }
  findLeadingComments(e) {
    const n = [];
    let r;
    for (; this.stack.length > 0; ) {
      const i = this.stack[this.stack.length - 1];
      if (!(i && i.start >= e.start.offset))
        break;
      r = i.node, this.stack.pop();
    }
    if (r) {
      for (let i = (r.leadingComments ? r.leadingComments.length : 0) - 1; i >= 0; --i) {
        const u = r.leadingComments[i];
        u.range[1] <= e.start.offset && (n.unshift(u), r.leadingComments.splice(i, 1));
      }
      return r.leadingComments && r.leadingComments.length === 0 && delete r.leadingComments, n;
    }
    for (let i = this.leading.length - 1; i >= 0; --i) {
      const u = this.leading[i];
      u.start <= e.start.offset && (n.unshift(u.comment), this.leading.splice(i, 1));
    }
    return n;
  }
  visitNode(e, n) {
    if (e.type === $.Program && e.body.length > 0)
      return;
    this.insertInnerComments(e, n);
    const r = this.findTrailingComments(n), i = this.findLeadingComments(n);
    i.length > 0 && (e.leadingComments = i), r.length > 0 && (e.trailingComments = r), this.stack.push({ node: e, start: n.start.offset });
  }
  visitComment(e, n) {
    if (this.comments.push(e), this.attach) {
      const r = { comment: { type: e.type, value: e.value, range: [n.start.offset, n.end.offset] }, start: n.start.offset };
      e.loc && (r.comment.loc = e.loc), this.leading.push(r), this.trailing.push(r);
    }
  }
  visit(e, n) {
    e.type === "Line" || e.type === "Block" ? this.visitComment(e, n) : this.attach && this.visitNode(e, n);
  }
};
function Ze(t, e) {
  if (!t)
    throw new Error("ASSERT: " + e);
}
let Fa = class {
  constructor() {
    this.errors = [], this.tolerant = !1;
  }
  recordError(e) {
    this.errors.push(e);
  }
  tolerate(e) {
    if (!this.tolerant)
      throw e;
    this.recordError(e);
  }
  constructError(e, n) {
    let r = new Error(e);
    try {
      throw r;
    } catch (i) {
      Object.create && Object.defineProperty && (r = Object.create(i), Object.defineProperty(r, "column", { value: n }));
    }
    return r;
  }
  createError(e, n, r, i) {
    const u = "Line " + n + ": " + i, a = this.constructError(u, r);
    return a.index = e, a.lineNumber = n, a.description = i, a;
  }
  throwError(e, n, r, i) {
    throw this.createError(e, n, r, i);
  }
  tolerateError(e, n, r, i) {
    const u = this.createError(e, n, r, i);
    if (!this.tolerant)
      throw u;
    this.recordError(u);
  }
};
const G = { ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer", GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts", IllegalBreak: "Illegal break statement", IllegalContinue: "Illegal continue statement", IllegalExportDeclaration: "Unexpected token", IllegalImportDeclaration: "Unexpected token", IllegalReturn: "Illegal return statement", InvalidEscapedReservedWord: "Keyword must not contain escaped characters", InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence", InvalidLHSInAssignment: "Invalid left-hand side in assignment", InvalidLHSInForIn: "Invalid left-hand side in for-in", InvalidRegExp: "Invalid regular expression", Redeclaration: "%0 '%1' has already been declared", StaticPrototype: "Classes may not have static property named prototype", StrictParamDupe: "Strict mode function may not have duplicate parameter names", TemplateOctalLiteral: "Octal literals are not allowed in template strings.", UnexpectedEOS: "Unexpected end of input", UnexpectedIdentifier: "Unexpected identifier", UnexpectedNumber: "Unexpected number", UnexpectedString: "Unexpected string", UnexpectedTemplate: "Unexpected quasi %0", UnexpectedToken: "Unexpected token %0", UnexpectedTokenIllegal: "Unexpected token ILLEGAL", UnterminatedRegExp: "Invalid regular expression: missing /", IdentiferExpected: "Identifier expected" };
let z = class {
}, ba = class extends z {
  constructor(e, n) {
    super(), this.type = e, this.value = n;
  }
}, Sa = class extends z {
  constructor(e) {
    super(), this.elements = e, this.type = $.ArrayExpression;
  }
};
const Na = ["=", "/=", "*=", "%=", "+=", "-="];
let Ia = class extends z {
  constructor(e, n, r) {
    super(), this.operator = e, this.left = n, this.right = r, this.type = $.AssignmentExpression;
  }
};
const Ta = ["||", "&&"];
let ar = class extends z {
  constructor(e, n, r) {
    super(), this.operator = e, this.left = n, this.right = r, this.type = Ta.includes(e) ? $.LogicalExpression : $.BinaryExpression;
  }
};
class ur extends z {
  constructor(e) {
    super(), this.body = e, this.type = $.BlockStatement;
  }
}
let va = class extends z {
  constructor() {
    super(...arguments), this.type = $.BreakStatement;
  }
}, ka = class extends z {
  constructor(e, n) {
    super(), this.callee = e, this.args = n, this.type = $.CallExpression, this.arguments = n;
  }
};
class or extends z {
  constructor(e, n) {
    super(), this.object = e, this.property = n, this.type = $.MemberExpression, this.computed = !0;
  }
}
let lr = class extends z {
  constructor(e, n) {
    super(), this.object = e, this.property = n, this.type = $.MemberExpression, this.computed = !1;
  }
}, Ba = class extends z {
  constructor() {
    super(...arguments), this.type = $.ContinueStatement;
  }
}, Jt = class extends z {
  constructor() {
    super(...arguments), this.type = $.EmptyStatement;
  }
};
class cr extends z {
  constructor(e) {
    super(), this.expression = e, this.type = $.ExpressionStatement;
  }
}
let Oa = class extends z {
  constructor(e, n, r) {
    super(), this.left = e, this.right = n, this.body = r, this.type = $.ForInStatement, this.each = !1;
  }
}, _a = class extends z {
  constructor(e, n, r, i) {
    super(), this.init = e, this.test = n, this.update = r, this.body = i, this.type = $.ForStatement;
  }
}, Ra = class extends z {
  constructor(e, n, r) {
    super(), this.id = e, this.params = n, this.body = r, this.type = $.FunctionDeclaration, this.generator = !1, this.expression = !1, this.async = !1;
  }
}, He = class extends z {
  constructor(e) {
    super(), this.name = e, this.type = $.Identifier;
  }
}, La = class extends z {
  constructor(e, n, r) {
    super(), this.test = e, this.consequent = n, this.alternate = r, this.type = $.IfStatement;
  }
}, At = class extends z {
  constructor(e, n) {
    super(), this.value = e, this.raw = n, this.type = $.Literal;
  }
}, Ua = class extends z {
  constructor(e) {
    super(), this.properties = e, this.type = $.ObjectExpression;
  }
}, Ma = class extends z {
  constructor(e, n, r, i, u, a) {
    super(), this.kind = e, this.key = n, this.computed = r, this.value = i, this.method = u, this.shorthand = a, this.type = $.Property;
  }
}, $a = class extends z {
  constructor(e) {
    super(), this.argument = e, this.type = $.ReturnStatement;
  }
}, Pa = class extends z {
  constructor(e) {
    super(), this.body = e, this.type = $.Program;
  }
}, hr = class extends z {
  constructor(e, n) {
    super(), this.value = e, this.tail = n, this.type = $.TemplateElement;
  }
}, za = class extends z {
  constructor(e, n) {
    super(), this.quasis = e, this.expressions = n, this.type = $.TemplateLiteral;
  }
}, Ga = class extends z {
  constructor(e, n) {
    super(), this.operator = e, this.argument = n, this.type = $.UnaryExpression, this.prefix = !0;
  }
}, fr = class extends z {
  constructor(e, n, r) {
    super(), this.operator = e, this.argument = n, this.prefix = r, this.type = $.UpdateExpression;
  }
}, Xt = class extends z {
  constructor(e, n) {
    super(), this.declarations = e, this.kind = n, this.type = $.VariableDeclaration;
  }
}, ja = class extends z {
  constructor(e, n) {
    super(), this.id = e, this.init = n, this.type = $.VariableDeclarator;
  }
};
const pr = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, F = { fromCodePoint: (t) => t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + (t - 65536 >> 10)) + String.fromCharCode(56320 + (t - 65536 & 1023)), isWhiteSpace: (t) => t === 32 || t === 9 || t === 11 || t === 12 || t === 160 || t >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(t) >= 0, isLineTerminator: (t) => t === 10 || t === 13 || t === 8232 || t === 8233, isIdentifierStart: (t) => t === 36 || t === 95 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t === 92 || t >= 128 && pr.NonAsciiIdentifierStart.test(F.fromCodePoint(t)), isIdentifierPart: (t) => t === 36 || t === 95 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 48 && t <= 57 || t === 92 || t >= 128 && pr.NonAsciiIdentifierPart.test(F.fromCodePoint(t)), isDecimalDigit: (t) => t >= 48 && t <= 57, isHexDigit: (t) => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102, isOctalDigit: (t) => t >= 48 && t <= 55 };
var m;
(function(t) {
  t[t.BooleanLiteral = 1] = "BooleanLiteral", t[t.EOF = 2] = "EOF", t[t.Identifier = 3] = "Identifier", t[t.Keyword = 4] = "Keyword", t[t.NullLiteral = 5] = "NullLiteral", t[t.NumericLiteral = 6] = "NumericLiteral", t[t.Punctuator = 7] = "Punctuator", t[t.StringLiteral = 8] = "StringLiteral", t[t.RegularExpression = 9] = "RegularExpression", t[t.Template = 10] = "Template";
})(m || (m = {}));
const fe = {};
fe[m.BooleanLiteral] = "Boolean", fe[m.EOF] = "<end>", fe[m.Identifier] = "Identifier", fe[m.Keyword] = "Keyword", fe[m.NullLiteral] = "Null", fe[m.NumericLiteral] = "Numeric", fe[m.Punctuator] = "Punctuator", fe[m.StringLiteral] = "String", fe[m.RegularExpression] = "RegularExpression", fe[m.Template] = "Template";
function dr(t) {
  return "0123456789abcdef".indexOf(t.toLowerCase());
}
function Zt(t) {
  return "01234567".indexOf(t);
}
let Ya = class {
  constructor(e, n) {
    this.source = e, this.errorHandler = n, this.trackComment = !1, this.isModule = !1, this.length = e.length, this.index = 0, this.lineNumber = e.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(e) {
    this.index = e.index, this.lineNumber = e.lineNumber, this.lineStart = e.lineStart, this.curlyStack = e.curlyStack;
  }
  eof() {
    return this.index >= this.length;
  }
  throwUnexpectedToken(e = G.UnexpectedTokenIllegal) {
    return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
  }
  _tolerateUnexpectedToken(e = G.UnexpectedTokenIllegal) {
    this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
  }
  _skipSingleLineComment(e) {
    let n = [], r = 0, i = null;
    for (this.trackComment && (n = [], r = this.index - e, i = { start: { line: this.lineNumber, column: this.index - this.lineStart - e }, end: { line: 0, column: 0 } }); !this.eof(); ) {
      const u = this.source.charCodeAt(this.index);
      if (++this.index, F.isLineTerminator(u)) {
        if (i) {
          i.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
          const a = { multiLine: !1, slice: [r + e, this.index - 1], range: [r, this.index - 1], loc: i };
          n.push(a);
        }
        return u === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index, ++this.lineNumber, this.lineStart = this.index, n;
      }
    }
    if (i) {
      i.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const u = { multiLine: !1, slice: [r + e, this.index], range: [r, this.index], loc: i };
      n.push(u);
    }
    return n;
  }
  _skipMultiLineComment() {
    const e = [];
    let n = 0, r = null;
    for (this.trackComment && (n = this.index - 2, r = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: { line: 0, column: 0 } }); !this.eof(); ) {
      const i = this.source.charCodeAt(this.index);
      if (F.isLineTerminator(i))
        i === 13 && this.source.charCodeAt(this.index + 1) === 10 && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
      else if (i === 42) {
        if (this.source.charCodeAt(this.index + 1) === 47) {
          if (this.index += 2, r) {
            r.end = { line: this.lineNumber, column: this.index - this.lineStart };
            const u = { multiLine: !0, slice: [n + 2, this.index - 2], range: [n, this.index], loc: r };
            e.push(u);
          }
          return e;
        }
        ++this.index;
      } else
        ++this.index;
    }
    if (r) {
      r.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const i = { multiLine: !0, slice: [n + 2, this.index], range: [n, this.index], loc: r };
      e.push(i);
    }
    return this._tolerateUnexpectedToken(), e;
  }
  scanComments() {
    let e = null;
    this.trackComment && (e = []);
    let n = this.index === 0;
    for (; !this.eof(); ) {
      let r = this.source.charCodeAt(this.index);
      if (F.isWhiteSpace(r))
        ++this.index;
      else if (F.isLineTerminator(r))
        ++this.index, r === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index, ++this.lineNumber, this.lineStart = this.index, n = !0;
      else if (r === 47)
        if (r = this.source.charCodeAt(this.index + 1), r === 47) {
          this.index += 2;
          const i = this._skipSingleLineComment(2);
          e && (e = e.concat(i)), n = !0;
        } else {
          if (r !== 42)
            break;
          {
            this.index += 2;
            const i = this._skipMultiLineComment();
            e && (e = e.concat(i));
          }
        }
      else if (n && r === 45) {
        if (this.source.charCodeAt(this.index + 1) !== 45 || this.source.charCodeAt(this.index + 2) !== 62)
          break;
        {
          this.index += 3;
          const i = this._skipSingleLineComment(3);
          e && (e = e.concat(i));
        }
      } else {
        if (r !== 60 || this.isModule || this.source.slice(this.index + 1, this.index + 4) !== "!--")
          break;
        {
          this.index += 4;
          const i = this._skipSingleLineComment(4);
          e && (e = e.concat(i));
        }
      }
    }
    return e;
  }
  _isKeyword(e) {
    switch ((e = e.toLowerCase()).length) {
      case 2:
        return e === "if" || e === "in";
      case 3:
        return e === "var" || e === "for";
      case 4:
        return e === "else";
      case 5:
        return e === "break";
      case 6:
        return e === "return";
      case 8:
        return e === "function" || e === "continue";
      default:
        return !1;
    }
  }
  _codePointAt(e) {
    let n = this.source.charCodeAt(e);
    if (n >= 55296 && n <= 56319) {
      const r = this.source.charCodeAt(e + 1);
      r >= 56320 && r <= 57343 && (n = 1024 * (n - 55296) + r - 56320 + 65536);
    }
    return n;
  }
  _scanHexEscape(e) {
    const n = e === "u" ? 4 : 2;
    let r = 0;
    for (let i = 0; i < n; ++i) {
      if (this.eof() || !F.isHexDigit(this.source.charCodeAt(this.index)))
        return null;
      r = 16 * r + dr(this.source[this.index++]);
    }
    return String.fromCharCode(r);
  }
  _scanUnicodeCodePointEscape() {
    let e = this.source[this.index], n = 0;
    for (e === "}" && this.throwUnexpectedToken(); !this.eof() && (e = this.source[this.index++], F.isHexDigit(e.charCodeAt(0))); )
      n = 16 * n + dr(e);
    return (n > 1114111 || e !== "}") && this.throwUnexpectedToken(), F.fromCodePoint(n);
  }
  _getIdentifier() {
    const e = this.index++;
    for (; !this.eof(); ) {
      const n = this.source.charCodeAt(this.index);
      if (n === 92)
        return this.index = e, this._getComplexIdentifier();
      if (n >= 55296 && n < 57343)
        return this.index = e, this._getComplexIdentifier();
      if (!F.isIdentifierPart(n))
        break;
      ++this.index;
    }
    return this.source.slice(e, this.index);
  }
  _getComplexIdentifier() {
    let e, n = this._codePointAt(this.index), r = F.fromCodePoint(n);
    for (this.index += r.length, n === 92 && (this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), ++this.index, this.source[this.index] === "{" ? (++this.index, e = this._scanUnicodeCodePointEscape()) : (e = this._scanHexEscape("u"), e !== null && e !== "\\" && F.isIdentifierStart(e.charCodeAt(0)) || this.throwUnexpectedToken()), r = e); !this.eof() && (n = this._codePointAt(this.index), F.isIdentifierPart(n)); )
      e = F.fromCodePoint(n), r += e, this.index += e.length, n === 92 && (r = r.substr(0, r.length - 1), this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), ++this.index, this.source[this.index] === "{" ? (++this.index, e = this._scanUnicodeCodePointEscape()) : (e = this._scanHexEscape("u"), e !== null && e !== "\\" && F.isIdentifierPart(e.charCodeAt(0)) || this.throwUnexpectedToken()), r += e);
    return r;
  }
  _octalToDecimal(e) {
    let n = e !== "0", r = Zt(e);
    return !this.eof() && F.isOctalDigit(this.source.charCodeAt(this.index)) && (n = !0, r = 8 * r + Zt(this.source[this.index++]), "0123".indexOf(e) >= 0 && !this.eof() && F.isOctalDigit(this.source.charCodeAt(this.index)) && (r = 8 * r + Zt(this.source[this.index++]))), { code: r, octal: n };
  }
  _scanIdentifier() {
    let e;
    const n = this.index, r = this.source.charCodeAt(n) === 92 ? this._getComplexIdentifier() : this._getIdentifier();
    if (e = r.length === 1 ? m.Identifier : this._isKeyword(r) ? m.Keyword : r.toLowerCase() === "null" ? m.NullLiteral : r.toLowerCase() === "true" || r.toLowerCase() === "false" ? m.BooleanLiteral : m.Identifier, e !== m.Identifier && n + r.length !== this.index) {
      const i = this.index;
      this.index = n, this._tolerateUnexpectedToken(G.InvalidEscapedReservedWord), this.index = i;
    }
    return { type: e, value: r, lineNumber: this.lineNumber, lineStart: this.lineStart, start: n, end: this.index };
  }
  _scanPunctuator() {
    const e = this.index;
    let n = this.source[this.index];
    switch (n) {
      case "(":
      case "{":
        n === "{" && this.curlyStack.push("{"), ++this.index;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        ++this.index;
        break;
      case "}":
        ++this.index, this.curlyStack.pop();
        break;
      default:
        n = this.source.substr(this.index, 4), n === ">>>=" ? this.index += 4 : (n = n.substr(0, 3), n === "===" || n === "!==" || n === ">>>" || n === "<<=" || n === ">>=" || n === "**=" ? this.index += 3 : (n = n.substr(0, 2), n === "&&" || n === "||" || n === "==" || n === "!=" || n === "+=" || n === "-=" || n === "*=" || n === "/=" || n === "++" || n === "--" || n === "<<" || n === ">>" || n === "&=" || n === "|=" || n === "^=" || n === "%=" || n === "<=" || n === ">=" || n === "=>" || n === "**" ? this.index += 2 : (n = this.source[this.index], "<>=!+-*%&|^/".indexOf(n) >= 0 && ++this.index)));
    }
    return this.index === e && this.throwUnexpectedToken(), { type: m.Punctuator, value: n, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index };
  }
  _scanHexLiteral(e) {
    let n = "";
    for (; !this.eof() && F.isHexDigit(this.source.charCodeAt(this.index)); )
      n += this.source[this.index++];
    return n.length === 0 && this.throwUnexpectedToken(), F.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: m.NumericLiteral, value: parseInt("0x" + n, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index };
  }
  _scanBinaryLiteral(e) {
    let n = "";
    for (; !this.eof(); ) {
      const r = this.source[this.index];
      if (r !== "0" && r !== "1")
        break;
      n += this.source[this.index++];
    }
    if (n.length === 0 && this.throwUnexpectedToken(), !this.eof()) {
      const r = this.source.charCodeAt(this.index);
      (F.isIdentifierStart(r) || F.isDecimalDigit(r)) && this.throwUnexpectedToken();
    }
    return { type: m.NumericLiteral, value: parseInt(n, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index };
  }
  _scanOctalLiteral(e, n) {
    let r = "", i = !1;
    for (F.isOctalDigit(e.charCodeAt(0)) ? (i = !0, r = "0" + this.source[this.index++]) : ++this.index; !this.eof() && F.isOctalDigit(this.source.charCodeAt(this.index)); )
      r += this.source[this.index++];
    return i || r.length !== 0 || this.throwUnexpectedToken(), (F.isIdentifierStart(this.source.charCodeAt(this.index)) || F.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: m.NumericLiteral, value: parseInt(r, 8), octal: i, lineNumber: this.lineNumber, lineStart: this.lineStart, start: n, end: this.index };
  }
  _scanNumericLiteral() {
    const e = this.index;
    let n = this.source[e];
    Ze(F.isDecimalDigit(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point");
    let r = "";
    if (n !== ".") {
      if (r = this.source[this.index++], n = this.source[this.index], r === "0") {
        if (n === "x" || n === "X")
          return ++this.index, this._scanHexLiteral(e);
        if (n === "b" || n === "B")
          return ++this.index, this._scanBinaryLiteral(e);
        if (n === "o" || n === "O")
          return this._scanOctalLiteral(n, e);
      }
      for (; F.isDecimalDigit(this.source.charCodeAt(this.index)); )
        r += this.source[this.index++];
      n = this.source[this.index];
    }
    if (n === ".") {
      for (r += this.source[this.index++]; F.isDecimalDigit(this.source.charCodeAt(this.index)); )
        r += this.source[this.index++];
      n = this.source[this.index];
    }
    if (n === "e" || n === "E")
      if (r += this.source[this.index++], n = this.source[this.index], n !== "+" && n !== "-" || (r += this.source[this.index++]), F.isDecimalDigit(this.source.charCodeAt(this.index)))
        for (; F.isDecimalDigit(this.source.charCodeAt(this.index)); )
          r += this.source[this.index++];
      else
        this.throwUnexpectedToken();
    return F.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: m.NumericLiteral, value: parseFloat(r), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index };
  }
  _scanStringLiteral() {
    const e = this.index;
    let n = this.source[e];
    Ze(n === "'" || n === '"', "String literal must starts with a quote"), ++this.index;
    let r = !1, i = "";
    for (; !this.eof(); ) {
      let u = this.source[this.index++];
      if (u === n) {
        n = "";
        break;
      }
      if (u === "\\")
        if (u = this.source[this.index++], u && F.isLineTerminator(u.charCodeAt(0)))
          ++this.lineNumber, u === "\r" && this.source[this.index] === `
` && ++this.index, this.lineStart = this.index;
        else
          switch (u) {
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, i += this._scanUnicodeCodePointEscape();
              else {
                const a = this._scanHexEscape(u);
                a === null && this.throwUnexpectedToken(), i += a;
              }
              break;
            case "x": {
              const a = this._scanHexEscape(u);
              a === null && this.throwUnexpectedToken(G.InvalidHexEscapeSequence), i += a;
              break;
            }
            case "n":
              i += `
`;
              break;
            case "r":
              i += "\r";
              break;
            case "t":
              i += "	";
              break;
            case "b":
              i += "\b";
              break;
            case "f":
              i += "\f";
              break;
            case "v":
              i += "\v";
              break;
            case "8":
            case "9":
              i += u, this._tolerateUnexpectedToken();
              break;
            default:
              if (u && F.isOctalDigit(u.charCodeAt(0))) {
                const a = this._octalToDecimal(u);
                r = a.octal || r, i += String.fromCharCode(a.code);
              } else
                i += u;
          }
      else {
        if (F.isLineTerminator(u.charCodeAt(0)))
          break;
        i += u;
      }
    }
    return n !== "" && (this.index = e, this.throwUnexpectedToken()), { type: m.StringLiteral, value: i, octal: r, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index };
  }
  _scanTemplate() {
    let e = "", n = !1;
    const r = this.index, i = this.source[r] === "`";
    let u = !1, a = 2;
    for (++this.index; !this.eof(); ) {
      let s = this.source[this.index++];
      if (s === "`") {
        a = 1, u = !0, n = !0;
        break;
      }
      if (s === "$") {
        if (this.source[this.index] === "{") {
          this.curlyStack.push("${"), ++this.index, n = !0;
          break;
        }
        e += s;
      } else if (s === "\\")
        if (s = this.source[this.index++], F.isLineTerminator(s.charCodeAt(0)))
          ++this.lineNumber, s === "\r" && this.source[this.index] === `
` && ++this.index, this.lineStart = this.index;
        else
          switch (s) {
            case "n":
              e += `
`;
              break;
            case "r":
              e += "\r";
              break;
            case "t":
              e += "	";
              break;
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, e += this._scanUnicodeCodePointEscape();
              else {
                const o = this.index, l = this._scanHexEscape(s);
                l !== null ? e += l : (this.index = o, e += s);
              }
              break;
            case "x": {
              const o = this._scanHexEscape(s);
              o === null && this.throwUnexpectedToken(G.InvalidHexEscapeSequence), e += o;
              break;
            }
            case "b":
              e += "\b";
              break;
            case "f":
              e += "\f";
              break;
            case "v":
              e += "\v";
              break;
            default:
              s === "0" ? (F.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(G.TemplateOctalLiteral), e += "\0") : F.isOctalDigit(s.charCodeAt(0)) ? this.throwUnexpectedToken(G.TemplateOctalLiteral) : e += s;
          }
      else
        F.isLineTerminator(s.charCodeAt(0)) ? (++this.lineNumber, s === "\r" && this.source[this.index] === `
` && ++this.index, this.lineStart = this.index, e += `
`) : e += s;
    }
    return n || this.throwUnexpectedToken(), i || this.curlyStack.pop(), { type: m.Template, value: this.source.slice(r + 1, this.index - a), cooked: e, head: i, tail: u, lineNumber: this.lineNumber, lineStart: this.lineStart, start: r, end: this.index };
  }
  _testRegExp(e, n) {
    const r = "￿";
    let i = e;
    n.indexOf("u") >= 0 && (i = i.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, (u, a, s) => {
      const o = parseInt(a || s, 16);
      return o > 1114111 && this.throwUnexpectedToken(G.InvalidRegExp), o <= 65535 ? String.fromCharCode(o) : r;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, r));
    try {
      RegExp(i);
    } catch {
      this.throwUnexpectedToken(G.InvalidRegExp);
    }
    try {
      return new RegExp(e, n);
    } catch {
      return null;
    }
  }
  _scanRegExpBody() {
    let e = this.source[this.index];
    Ze(e === "/", "Regular expression literal must start with a slash");
    let n = this.source[this.index++], r = !1, i = !1;
    for (; !this.eof(); )
      if (e = this.source[this.index++], n += e, e === "\\")
        e = this.source[this.index++], F.isLineTerminator(e.charCodeAt(0)) && this.throwUnexpectedToken(G.UnterminatedRegExp), n += e;
      else if (F.isLineTerminator(e.charCodeAt(0)))
        this.throwUnexpectedToken(G.UnterminatedRegExp);
      else if (r)
        e === "]" && (r = !1);
      else {
        if (e === "/") {
          i = !0;
          break;
        }
        e === "[" && (r = !0);
      }
    return i || this.throwUnexpectedToken(G.UnterminatedRegExp), n.substr(1, n.length - 2);
  }
  _scanRegExpFlags() {
    let e = "", n = "";
    for (; !this.eof(); ) {
      let r = this.source[this.index];
      if (!F.isIdentifierPart(r.charCodeAt(0)))
        break;
      if (++this.index, r !== "\\" || this.eof())
        n += r, e += r;
      else if (r = this.source[this.index], r === "u") {
        ++this.index;
        let i = this.index;
        const u = this._scanHexEscape("u");
        if (u !== null)
          for (n += u, e += "\\u"; i < this.index; ++i)
            e += this.source[i];
        else
          this.index = i, n += "u", e += "\\u";
        this._tolerateUnexpectedToken();
      } else
        e += "\\", this._tolerateUnexpectedToken();
    }
    return n;
  }
  scanRegExp() {
    const e = this.index, n = this._scanRegExpBody(), r = this._scanRegExpFlags(), i = this._testRegExp(n, r);
    return { type: m.RegularExpression, value: "", pattern: n, flags: r, regex: i, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index };
  }
  lex() {
    if (this.eof())
      return { type: m.EOF, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    const e = this.source.charCodeAt(this.index);
    return F.isIdentifierStart(e) ? this._scanIdentifier() : e === 40 || e === 41 || e === 59 ? this._scanPunctuator() : e === 39 || e === 34 ? this._scanStringLiteral() : e === 46 ? F.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this._scanNumericLiteral() : this._scanPunctuator() : F.isDecimalDigit(e) ? this._scanNumericLiteral() : e === 96 || e === 125 && this.curlyStack[this.curlyStack.length - 1] === "${" ? this._scanTemplate() : e >= 55296 && e < 57343 && F.isIdentifierStart(this._codePointAt(this.index)) ? this._scanIdentifier() : this._scanPunctuator();
  }
}, Va = class {
  constructor(e, n = {}, r) {
    this.config = { range: typeof n.range == "boolean" && n.range, loc: typeof n.loc == "boolean" && n.loc, source: null, tokens: typeof n.tokens == "boolean" && n.tokens, comment: typeof n.comment == "boolean" && n.comment, tolerant: typeof n.tolerant == "boolean" && n.tolerant, globalReturn: !!n.globalReturn }, this.config.loc && n.source && n.source !== null && (this.config.source = String(n.source)), this.delegate = r, this.errorHandler = new Fa(), this.errorHandler.tolerant = this.config.tolerant, this.scanner = new Ya(e, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = { ")": 0, ";": 0, ",": 0, "=": 0, "]": 0, "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "===": 6, "!==": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 11, "/": 11, "%": 11 }, this.lookahead = { type: m.EOF, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.hasLineTerminator = !1, this.context = { allowIn: !0, firstCoverInitializedNameError: null, isAssignmentTarget: !1, isBindingElement: !1, inFunctionBody: !1, inIteration: !1, curlyParsing: "asObject" }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.lastMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.nextToken(), this.lastMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  tolerateError(e, ...n) {
    const r = n.slice(), i = e.replace(/%(\d)/g, (o, l) => (Ze(l < r.length, "Message reference must be in range"), r[l])), u = this.lastMarker.index, a = this.scanner.lineNumber, s = this.lastMarker.column + 1;
    this.errorHandler.tolerateError(u, a, s, i);
  }
  unexpectedTokenError(e, n) {
    let r, i = n || G.UnexpectedToken;
    if (e ? (n || (i = e.type === m.EOF ? G.UnexpectedEOS : e.type === m.Identifier ? G.UnexpectedIdentifier : e.type === m.NumericLiteral ? G.UnexpectedNumber : e.type === m.StringLiteral ? G.UnexpectedString : e.type === m.Template ? G.UnexpectedTemplate : G.UnexpectedToken), r = e.value.toString()) : r = "ILLEGAL", i = i.replace("%0", r), e && typeof e.lineNumber == "number") {
      const o = e.start, l = e.lineNumber, c = this.lastMarker.index - this.lastMarker.column, f = e.start - c + 1;
      return this.errorHandler.createError(o, l, f, i);
    }
    const u = this.lastMarker.index, a = this.lastMarker.line, s = this.lastMarker.column + 1;
    return this.errorHandler.createError(u, a, s, i);
  }
  throwUnexpectedToken(e, n) {
    throw this.unexpectedTokenError(e, n);
  }
  tolerateUnexpectedToken(e, n) {
    this.errorHandler.tolerate(this.unexpectedTokenError(e, n));
  }
  collectComments() {
    if (this.config.comment) {
      const e = this.scanner.scanComments();
      if (e && e.length > 0 && this.delegate)
        for (let n = 0; n < e.length; ++n) {
          const r = e[n], i = new ba(r.multiLine ? "Block" : "Line", this.scanner.source.slice(r.slice[0], r.slice[1]));
          this.config.range && (i.range = r.range), this.config.loc && (i.loc = r.loc);
          const u = { start: { line: r.loc.start.line, column: r.loc.start.column, offset: r.range[0] }, end: { line: r.loc.end.line, column: r.loc.end.column, offset: r.range[1] } };
          this.delegate(i, u);
        }
    } else
      this.scanner.scanComments();
  }
  peekAhead(e) {
    const n = () => (this.scanner.scanComments(), this.scanner.lex()), r = this.scanner.saveState();
    e.call(this, n), this.scanner.restoreState(r);
  }
  getTokenRaw(e) {
    return this.scanner.source.slice(e.start, e.end);
  }
  convertToken(e) {
    const n = { type: fe[e.type], value: this.getTokenRaw(e) };
    if (this.config.range && (n.range = [e.start, e.end]), this.config.loc && (n.loc = { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } }), e.type === m.RegularExpression) {
      const r = e.pattern, i = e.flags;
      n.regex = { pattern: r, flags: i };
    }
    return n;
  }
  nextToken() {
    const e = this.lookahead;
    this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.collectComments(), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart);
    const n = this.scanner.lex();
    return this.hasLineTerminator = e.lineNumber !== n.lineNumber, this.lookahead = n, this.config.tokens && n.type !== m.EOF && this.tokens.push(this.convertToken(n)), e;
  }
  createNode() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  startNode(e, n = 0) {
    let r = e.start - e.lineStart, i = e.lineNumber;
    return r < 0 && (r += n, i--), { index: e.start, line: i, column: r };
  }
  finalize(e, n) {
    if (this.config.range && (n.range = [e.index, this.lastMarker.index]), this.config.loc && (n.loc = { start: { line: e.line, column: e.column }, end: { line: this.lastMarker.line, column: this.lastMarker.column } }, this.config.source && (n.loc.source = this.config.source)), this.delegate) {
      const r = { start: { line: e.line, column: e.column, offset: e.index }, end: { line: this.lastMarker.line, column: this.lastMarker.column, offset: this.lastMarker.index } };
      this.delegate(n, r);
    }
    return n;
  }
  expect(e) {
    const n = this.nextToken();
    n.type === m.Punctuator && n.value === e || this.throwUnexpectedToken(n);
  }
  expectCommaSeparator() {
    if (this.config.tolerant) {
      const e = this.lookahead;
      e.type === m.Punctuator && e.value === "," ? this.nextToken() : e.type === m.Punctuator && e.value === ";" ? (this.nextToken(), this.tolerateUnexpectedToken(e)) : this.tolerateUnexpectedToken(e, G.UnexpectedToken);
    } else
      this.expect(",");
  }
  expectKeyword(e) {
    const n = this.nextToken();
    n.type === m.Keyword && n.value.toString().toLowerCase() === e.toLowerCase() || this.throwUnexpectedToken(n);
  }
  match(e) {
    return this.lookahead.type === m.Punctuator && this.lookahead.value === e;
  }
  matchKeyword(e) {
    return this.lookahead.type === m.Keyword && this.lookahead.value.toLowerCase() === e.toLowerCase();
  }
  matchContextualKeyword(e) {
    return this.lookahead.type === m.Identifier && this.lookahead.value === e;
  }
  matchAssign() {
    if (this.lookahead.type !== m.Punctuator)
      return !1;
    const e = this.lookahead.value;
    return Na.includes(e);
  }
  isolateCoverGrammar(e) {
    const n = this.context.isBindingElement, r = this.context.isAssignmentTarget, i = this.context.firstCoverInitializedNameError;
    this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
    const u = e.call(this);
    return this.context.firstCoverInitializedNameError !== null && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = n, this.context.isAssignmentTarget = r, this.context.firstCoverInitializedNameError = i, u;
  }
  inheritCoverGrammar(e) {
    const n = this.context.isBindingElement, r = this.context.isAssignmentTarget, i = this.context.firstCoverInitializedNameError;
    this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
    const u = e.call(this);
    return this.context.isBindingElement = this.context.isBindingElement && n, this.context.isAssignmentTarget = this.context.isAssignmentTarget && r, this.context.firstCoverInitializedNameError = i || this.context.firstCoverInitializedNameError, u;
  }
  consumeSemicolon() {
    this.match(";") ? this.nextToken() : this.hasLineTerminator || (this.lookahead.type === m.EOF || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.line = this.startMarker.line, this.lastMarker.column = this.startMarker.column);
  }
  parsePrimaryExpression() {
    const e = this.createNode();
    let n, r, i;
    switch (this.lookahead.type) {
      case m.Identifier:
        n = this.finalize(e, new He(this.nextToken().value));
        break;
      case m.NumericLiteral:
      case m.StringLiteral:
        this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, r = this.nextToken(), i = this.getTokenRaw(r), n = this.finalize(e, new At(r.value, i));
        break;
      case m.BooleanLiteral:
        this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, r = this.nextToken(), i = this.getTokenRaw(r), n = this.finalize(e, new At(r.value.toString().toLowerCase() === "true", i));
        break;
      case m.NullLiteral:
        this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, r = this.nextToken(), i = this.getTokenRaw(r), n = this.finalize(e, new At(null, i));
        break;
      case m.Template:
        n = this.parseTemplateLiteral();
        break;
      case m.Punctuator:
        switch (this.lookahead.value) {
          case "(":
            this.context.isBindingElement = !1, n = this.inheritCoverGrammar(this.parseGroupExpression);
            break;
          case "[":
            n = this.inheritCoverGrammar(this.parseArrayInitializer);
            break;
          case "{":
            n = this.inheritCoverGrammar(this.parseObjectInitializer);
            break;
          default:
            n = this.throwUnexpectedToken(this.nextToken());
        }
        break;
      case m.Keyword:
        this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, n = this.throwUnexpectedToken(this.nextToken());
        break;
      default:
        n = this.throwUnexpectedToken(this.nextToken());
    }
    return n;
  }
  parseArrayInitializer() {
    const e = this.createNode(), n = [];
    for (this.expect("["); !this.match("]"); )
      this.match(",") ? (this.nextToken(), n.push(null)) : (n.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(","));
    return this.expect("]"), this.finalize(e, new Sa(n));
  }
  parseObjectPropertyKey() {
    const e = this.createNode(), n = this.nextToken();
    let r;
    switch (n.type) {
      case m.StringLiteral:
      case m.NumericLiteral:
        r = this.finalize(e, new At(n.value, this.getTokenRaw(n)));
        break;
      case m.Identifier:
      case m.BooleanLiteral:
      case m.NullLiteral:
      case m.Keyword:
        r = this.finalize(e, new He(n.value));
        break;
      default:
        r = this.throwUnexpectedToken(n);
    }
    return r;
  }
  parseObjectProperty() {
    const e = this.createNode(), n = this.lookahead;
    let r = !1;
    const i = !1;
    let u = !1, a = null;
    if (n.type === m.Identifier) {
      const l = n.value;
      this.nextToken(), r = this.match("["), a = this.finalize(e, new He(l));
    } else
      this.match("*") ? this.nextToken() : (r = this.match("["), a = this.parseObjectPropertyKey());
    a || this.throwUnexpectedToken(this.lookahead);
    let s = null;
    const o = "init";
    return this.match(":") ? (this.nextToken(), s = this.inheritCoverGrammar(this.parseAssignmentExpression)) : n.type === m.Identifier ? (u = !0, s = this.finalize(e, new He(n.value))) : this.throwUnexpectedToken(this.nextToken()), this.finalize(e, new Ma(o, a, r, s, i, u));
  }
  parseObjectInitializer() {
    const e = this.createNode();
    this.expect("{");
    const n = [];
    for (; !this.match("}"); )
      n.push(this.parseObjectProperty()), this.match("}") || this.expectCommaSeparator();
    return this.expect("}"), this.finalize(e, new Ua(n));
  }
  parseTemplateHead() {
    Ze(this.lookahead.head, "Template literal must start with a template head");
    const e = this.createNode(), n = this.nextToken(), r = n.value, i = n.cooked;
    return this.finalize(e, new hr({ raw: r, cooked: i }, n.tail));
  }
  parseTemplateElement() {
    this.lookahead.type !== m.Template && this.throwUnexpectedToken();
    const e = this.createNode(), n = this.nextToken(), r = n.value, i = n.cooked;
    return this.finalize(e, new hr({ raw: r, cooked: i }, n.tail));
  }
  parseTemplateLiteral() {
    const e = this.createNode(), n = [], r = [];
    let i = this.parseTemplateHead();
    for (r.push(i); !i.tail; )
      n.push(this.parseExpression()), i = this.parseTemplateElement(), r.push(i);
    return this.finalize(e, new za(r, n));
  }
  parseGroupExpression() {
    this.expect("("), this.context.isBindingElement = !0;
    const e = this.inheritCoverGrammar(this.parseAssignmentExpression);
    return this.expect(")"), this.context.isBindingElement = !1, e;
  }
  parseArguments() {
    this.expect("(");
    const e = [];
    if (!this.match(")"))
      for (; ; ) {
        const n = this.isolateCoverGrammar(this.parseAssignmentExpression);
        if (e.push(n), this.match(")") || (this.expectCommaSeparator(), this.match(")")))
          break;
      }
    return this.expect(")"), e;
  }
  isIdentifierName(e) {
    return e.type === m.Identifier || e.type === m.Keyword || e.type === m.BooleanLiteral || e.type === m.NullLiteral;
  }
  parseIdentifierName() {
    const e = this.createNode(), n = this.nextToken();
    return this.isIdentifierName(n) || this.throwUnexpectedToken(n), this.finalize(e, new He(n.value));
  }
  parseLeftHandSideExpressionAllowCall() {
    const e = this.lookahead, n = this.context.allowIn;
    this.context.allowIn = !0;
    let r = this.inheritCoverGrammar(this.parsePrimaryExpression);
    for (; ; )
      if (this.match("(")) {
        this.context.isBindingElement = !1, this.context.isAssignmentTarget = !1;
        const i = this.parseArguments();
        r = this.finalize(this.startNode(e), new ka(r, i));
      } else if (this.match("[")) {
        this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
        const i = this.isolateCoverGrammar(this.parseExpression);
        this.expect("]"), r = this.finalize(this.startNode(e), new or(r, i));
      } else {
        if (!this.match("."))
          break;
        {
          this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
          const i = this.parseIdentifierName();
          r = this.finalize(this.startNode(e), new lr(r, i));
        }
      }
    return this.context.allowIn = n, r;
  }
  parseLeftHandSideExpression() {
    Ze(this.context.allowIn, "callee of new expression always allow in keyword.");
    const e = this.startNode(this.lookahead);
    let n = this.inheritCoverGrammar(this.parsePrimaryExpression);
    for (; ; )
      if (this.match("[")) {
        this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
        const r = this.isolateCoverGrammar(this.parseExpression);
        this.expect("]"), n = this.finalize(e, new or(n, r));
      } else {
        if (!this.match("."))
          break;
        {
          this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
          const r = this.parseIdentifierName();
          n = this.finalize(e, new lr(n, r));
        }
      }
    return n;
  }
  parseUpdateExpression() {
    let e;
    const n = this.lookahead;
    if (this.match("++") || this.match("--")) {
      const r = this.startNode(n), i = this.nextToken();
      e = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.isAssignmentTarget || this.tolerateError(G.InvalidLHSInAssignment);
      const u = !0;
      e = this.finalize(r, new fr(i.value, e, u)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
    } else if (e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && this.lookahead.type === m.Punctuator && (this.match("++") || this.match("--"))) {
      this.context.isAssignmentTarget || this.tolerateError(G.InvalidLHSInAssignment), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
      const r = this.nextToken().value, i = !1;
      e = this.finalize(this.startNode(n), new fr(r, e, i));
    }
    return e;
  }
  parseUnaryExpression() {
    let e;
    if (this.match("+") || this.match("-") || this.match("~") || this.match("!")) {
      const n = this.startNode(this.lookahead), r = this.nextToken();
      e = this.inheritCoverGrammar(this.parseUnaryExpression), e = this.finalize(n, new Ga(r.value, e)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
    } else
      e = this.parseUpdateExpression();
    return e;
  }
  binaryPrecedence(e) {
    const n = e.value;
    let r;
    return r = e.type === m.Punctuator ? this.operatorPrecedence[n] || 0 : e.type === m.Keyword && this.context.allowIn && n === "in" ? 12 : 0, r;
  }
  parseBinaryExpression() {
    const e = this.lookahead;
    let n = this.inheritCoverGrammar(this.parseUnaryExpression);
    const r = this.lookahead;
    let i = this.binaryPrecedence(r);
    if (i > 0) {
      this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
      const u = [e, this.lookahead];
      let a = n, s = this.inheritCoverGrammar(this.parseUnaryExpression);
      const o = [a, r.value, s], l = [i];
      for (; i = this.binaryPrecedence(this.lookahead), !(i <= 0); ) {
        for (; o.length > 2 && i <= l[l.length - 1]; ) {
          s = o.pop();
          const g = o.pop();
          l.pop(), a = o.pop(), u.pop();
          const C = u[u.length - 1], O = this.startNode(C, C.lineStart);
          o.push(this.finalize(O, new ar(g, a, s)));
        }
        o.push(this.nextToken().value), l.push(i), u.push(this.lookahead), o.push(this.inheritCoverGrammar(this.parseUnaryExpression));
      }
      let c = o.length - 1;
      n = o[c];
      let f = u.pop();
      for (; c > 1; ) {
        const g = u.pop();
        if (!g)
          break;
        const C = f && f.lineStart, O = this.startNode(g, C), _ = o[c - 1];
        n = this.finalize(O, new ar(_, o[c - 2], n)), c -= 2, f = g;
      }
    }
    return n;
  }
  parseAssignmentExpression() {
    const e = this.lookahead;
    let n = e, r = this.inheritCoverGrammar(this.parseBinaryExpression);
    if (this.matchAssign()) {
      this.context.isAssignmentTarget || this.tolerateError(G.InvalidLHSInAssignment), this.match("=") || (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1), n = this.nextToken();
      const i = n.value, u = this.isolateCoverGrammar(this.parseAssignmentExpression);
      r = this.finalize(this.startNode(e), new Ia(i, r, u)), this.context.firstCoverInitializedNameError = null;
    }
    return r;
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression);
  }
  parseStatementListItem() {
    let e;
    return this.context.isAssignmentTarget = !0, this.context.isBindingElement = !0, this.lookahead.type === m.Keyword ? this.lookahead.value === "function" ? e = this.parseFunctionDeclaration() : e = this.parseStatement() : e = this.parseStatement(), e;
  }
  parseBlock() {
    const e = this.createNode();
    this.expect("{");
    const n = [];
    for (; !this.match("}"); )
      n.push(this.parseStatementListItem());
    return this.expect("}"), this.finalize(e, new ur(n));
  }
  parseObjectStatement() {
    const e = this.createNode(), n = this.parseObjectInitializer();
    return this.finalize(e, new cr(n));
  }
  parseBlockOrObjectStatement() {
    let e = this.context.curlyParsing === "asObject";
    return this.context.curlyParsing === "asObjectOrBlock" && this.peekAhead((n) => {
      let r = n();
      r.type !== m.Identifier && r.type !== m.StringLiteral || (r = n(), r.type === m.Punctuator && r.value === ":" && (e = !0));
    }), e ? this.parseObjectStatement() : this.parseBlock();
  }
  parseVariableIdentifier() {
    const e = this.createNode(), n = this.nextToken();
    return n.type !== m.Identifier && this.throwUnexpectedToken(n, G.IdentiferExpected), this.finalize(e, new He(n.value));
  }
  parseVariableDeclaration(e) {
    const n = this.createNode(), r = this.parseVariableIdentifier();
    let i = null;
    return this.match("=") ? (this.nextToken(), i = this.isolateCoverGrammar(this.parseAssignmentExpression)) : r.type === $.Identifier || e.inFor || this.expect("="), this.finalize(n, new ja(r, i));
  }
  parseVariableDeclarationList(e) {
    const n = [this.parseVariableDeclaration(e)];
    for (; this.match(","); )
      this.nextToken(), n.push(this.parseVariableDeclaration(e));
    return n;
  }
  parseVariableStatement() {
    const e = this.createNode();
    this.expectKeyword("var");
    const n = this.parseVariableDeclarationList({ inFor: !1 });
    return this.consumeSemicolon(), this.finalize(e, new Xt(n, "var"));
  }
  parseEmptyStatement() {
    const e = this.createNode();
    return this.expect(";"), this.finalize(e, new Jt());
  }
  parseExpressionStatement() {
    const e = this.createNode(), n = this.parseExpression();
    return this.consumeSemicolon(), this.finalize(e, new cr(n));
  }
  parseIfClause() {
    const e = this.context.curlyParsing;
    this.context.curlyParsing = "asObjectOrBlock";
    const n = this.parseStatement();
    return this.context.curlyParsing = e, n;
  }
  parseIfStatement() {
    const e = this.createNode();
    let n, r = null;
    this.expectKeyword("if"), this.expect("(");
    const i = this.parseExpression();
    return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), n = this.finalize(this.createNode(), new Jt())) : (this.expect(")"), n = this.parseIfClause(), this.matchKeyword("else") && (this.nextToken(), r = this.parseIfClause())), this.finalize(e, new La(i, n, r));
  }
  parseForStatement() {
    let e = null, n = null, r = null, i = null, u = null;
    const a = this.createNode();
    if (this.expectKeyword("for"), this.expect("("), this.match(";"))
      this.nextToken();
    else if (this.matchKeyword("var")) {
      const o = this.createNode();
      this.nextToken();
      const l = this.context.allowIn;
      this.context.allowIn = !1;
      const c = this.parseVariableDeclarationList({ inFor: !0 });
      this.context.allowIn = l, c.length === 1 && this.matchKeyword("in") ? (c[0].init && this.tolerateError(G.ForInOfLoopInitializer, "for-in"), i = this.finalize(o, new Xt(c, "var")), this.nextToken(), u = this.parseExpression()) : (e = this.finalize(o, new Xt(c, "var")), this.expect(";"));
    } else {
      const o = this.context.isBindingElement, l = this.context.isAssignmentTarget, c = this.context.firstCoverInitializedNameError, f = this.context.allowIn;
      this.context.allowIn = !1, e = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = f, this.matchKeyword("in") ? (this.context.isAssignmentTarget && e.type !== $.AssignmentExpression || this.tolerateError(G.InvalidLHSInForIn), this.nextToken(), i = e, u = this.parseExpression(), e = null) : (this.context.isBindingElement = o, this.context.isAssignmentTarget = l, this.context.firstCoverInitializedNameError = c, this.expect(";"));
    }
    let s;
    if (i || (this.match(";") || (n = this.isolateCoverGrammar(this.parseExpression)), this.expect(";"), this.match(")") || (r = this.isolateCoverGrammar(this.parseExpression))), !this.match(")") && this.config.tolerant)
      this.tolerateUnexpectedToken(this.nextToken()), s = this.finalize(this.createNode(), new Jt());
    else {
      this.expect(")");
      const o = this.context.inIteration, l = this.context.curlyParsing;
      this.context.inIteration = !0, this.context.curlyParsing = "asObjectOrBlock", s = this.isolateCoverGrammar(this.parseStatement), this.context.curlyParsing = l, this.context.inIteration = o;
    }
    return i && u ? this.finalize(a, new Oa(i, u, s)) : this.finalize(a, new _a(e, n, r, s));
  }
  parseContinueStatement() {
    const e = this.createNode();
    return this.expectKeyword("continue"), this.consumeSemicolon(), this.finalize(e, new Ba());
  }
  parseBreakStatement() {
    const e = this.createNode();
    return this.expectKeyword("break"), this.consumeSemicolon(), this.finalize(e, new va());
  }
  parseReturnStatement() {
    this.config.globalReturn || this.context.inFunctionBody || this.tolerateError(G.IllegalReturn);
    const e = this.createNode();
    this.expectKeyword("return");
    const n = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== m.EOF || this.lookahead.type === m.StringLiteral || this.lookahead.type === m.Template ? this.parseExpression() : null;
    return this.consumeSemicolon(), this.finalize(e, new $a(n));
  }
  parseStatement() {
    let e;
    switch (this.lookahead.type) {
      case m.BooleanLiteral:
      case m.NullLiteral:
      case m.NumericLiteral:
      case m.StringLiteral:
      case m.Template:
      case m.Identifier:
        e = this.parseExpressionStatement();
        break;
      case m.Punctuator: {
        const n = this.lookahead.value;
        e = n === "{" ? this.parseBlockOrObjectStatement() : n === "(" ? this.parseExpressionStatement() : n === ";" ? this.parseEmptyStatement() : this.parseExpressionStatement();
        break;
      }
      case m.Keyword:
        switch (this.lookahead.value.toLowerCase()) {
          case "break":
            e = this.parseBreakStatement();
            break;
          case "continue":
            e = this.parseContinueStatement();
            break;
          case "for":
            e = this.parseForStatement();
            break;
          case "function":
            e = this.parseFunctionDeclaration();
            break;
          case "if":
            e = this.parseIfStatement();
            break;
          case "return":
            e = this.parseReturnStatement();
            break;
          case "var":
            e = this.parseVariableStatement();
            break;
          default:
            e = this.parseExpressionStatement();
        }
        break;
      default:
        e = this.throwUnexpectedToken(this.lookahead);
    }
    return e;
  }
  parseFunctionSourceElements() {
    const e = this.createNode();
    this.expect("{");
    const n = this.context.inIteration, r = this.context.inFunctionBody;
    this.context.inIteration = !1, this.context.inFunctionBody = !0;
    const i = [];
    for (; this.lookahead.type !== m.EOF && !this.match("}"); )
      i.push(this.parseStatementListItem());
    return this.expect("}"), this.context.inIteration = n, this.context.inFunctionBody = r, this.finalize(e, new ur(i));
  }
  parseFormalParameters() {
    const e = [];
    if (this.expect("("), !this.match(")"))
      for (; this.lookahead.type !== m.EOF && (e.push(this.parseVariableIdentifier()), !this.match(")")) && (this.expect(","), !this.match(")")); )
        ;
    return this.expect(")"), e;
  }
  parseFunctionDeclaration() {
    const e = this.createNode();
    this.expectKeyword("function");
    const n = this.parseVariableIdentifier(), r = this.parseFormalParameters(), i = this.parseFunctionSourceElements();
    return this.finalize(e, new Ra(n, r, i));
  }
  parseScript() {
    const e = this.createNode(), n = [];
    for (; this.lookahead.type !== m.EOF; )
      n.push(this.parseStatementListItem());
    return this.finalize(e, new Pa(n));
  }
};
function qr(t, e, n) {
  let r = null;
  const i = (l, c) => {
    n && n(l, c), r && r.visit(l, c);
  };
  let u = typeof n == "function" ? i : void 0, a = !1;
  if (e) {
    a = typeof e.comment == "boolean" && e.comment;
    const l = typeof e.attachComment == "boolean" && e.attachComment;
    (a || l) && (r = new Ca(), r.attach = l, e.comment = !0, u = i);
  }
  const s = new Va(t, e, u), o = s.parseScript();
  return a && r && (o.comments = r.comments), s.config.tokens && (o.tokens = s.tokens), s.config.tolerant && (o.errors = s.errorHandler.errors), o;
}
function Jr(t, e = []) {
  const n = qr("function _() { " + t + `
}`);
  if (n.body === null || n.body === void 0)
    throw new Error("No formula provided.");
  if (n.body.length === 0)
    throw new Error("No formula provided.");
  if (n.body.length === 0)
    throw new Error("No formula provided.");
  if (n.body[0].body.type !== "BlockStatement")
    throw new Error("Invalid formula content.");
  const r = vi(n);
  if (r !== "")
    throw new Error(r);
  return Bt(n, e), n;
}
function Ha(t, e, n, r, i) {
  const u = [], s = `function _() { 
` + t + `
}`;
  try {
    const o = qr(s, { tolerant: !0, loc: !0, range: !0 }), l = o.errors;
    if (l.length > 0)
      for (let f = 0; f < l.length; f++)
        u.push({ line: l[f].lineNumber - 2, character: l[f].column, reason: l[f].description });
    const c = Bi(o, e, n, r, i);
    for (let f = 0; f < c.length; f++)
      c[f].line = c[f].line - 2, c[f].range && (c[f].range = [c[f][0] - 15, c[f][1] - 15]), c[f].loc && (c[f].loc.start.line = c[f].loc.start.line - 2, c[f].loc.end.line = c[f].loc.end.line - 2), u.push(c[f]);
  } catch (o) {
    try {
      if (o.description === "Unexpected token }") {
        const l = s.split(`
`).length;
        o.lineNumber === l ? (o.index = s.length - 1, u.push({ line: o.lineNumber - 4, character: o.column, reason: "Unexpected end of script" })) : (o.index = s.length - 1, u.push({ line: o.lineNumber - 2, character: o.column, reason: "Unexpected end of script" }));
      } else
        u.push({ line: o.lineNumber - 2, character: o.column, reason: o.description });
    } catch {
    }
  }
  return u;
}
function qa(t, e) {
  return Si(t);
}
function Ja(t, e, n) {
  return Ti(t, e, n);
}
function Xa(t) {
  return Ni(t);
}
const Za = ["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "isselfintersecting", "ringisclockwise"];
function Ka() {
  return !0;
}
const Wa = Ka();
let Xr = !1, Zr = !1, Ae = null, dn = [];
function Kr(t, e) {
  return e.useAsync === !0 || t.isAsync === !0 ? Qa(t, e) : yr("geoscene-csp-restrictions") ? function(n) {
    return Hr(t, n);
  } : $r(t, e);
}
function Qa(t, e) {
  if (Ae === null)
    throw new Error("Async Arcade must be enabled for this script");
  return yr("geoscene-csp-restrictions") || Wa === !1 ? function(n) {
    return Ae.executeScript(t, n);
  } : $r(t, e, !0);
}
function eu(t) {
  Vr(t), Ue(t, "sync"), Ae === null ? dn.push(t) : (Ue(t, "async"), Ae.extend(t));
}
function bn(t, e = []) {
  return Jr(t, e);
}
function tu(t, e, n = "") {
  return Ja(t, e, n);
}
function nu(t, e, n, r = "") {
  return Ha(t, e, n, r);
}
function ru(t, e, n = []) {
  return Sn(Jr(t, n), e);
}
function Sn(t, e) {
  if (e.useAsync === !0 || t.isAsync === !0) {
    if (Ae === null)
      throw new Error("Async Arcade must be enabled for this script");
    return Ae.executeScript(t, e);
  }
  return Hr(t, e);
}
function _t(t, e) {
  return xa(t, e);
}
function iu(t, e) {
  return wa(t, e);
}
function su(t, e = !1) {
  return qa(t);
}
function Wr(t) {
  return Xa(t);
}
function Rt(t, e = []) {
  return t.usesGeometry === void 0 && Bt(t, e), t.usesGeometry === !0;
}
let Kt = null;
function Nn() {
  return Kt || (Kt = ft([import("./geometryEngine-3aiZF6Bk.js"), Promise.resolve().then(() => Wi)]).then(([t, e]) => (Zr = !0, e.setGeometryEngine(t), !0)), Kt);
}
let Wt = null;
function In() {
  return Wt !== null || (Wt = Js().then(() => import("./arcadeAsyncRuntime-fezy73by.js")).then((t) => {
    Ae = t;
    for (const e of dn)
      Ae.extend(e), Ue(e, "async");
    return dn = null, !0;
  })), Wt;
}
function Qr() {
  return Xr;
}
function ei() {
  return !!Ae;
}
function ti() {
  return Zr;
}
let Qt = null;
function Tn() {
  return Qt || (Qt = In().then(() => ft([import("./featureSetUtils-nM9gOIjf.js").then((t) => t.f), import("./featuresetbase-ecOvxMg1.js"), import("./featuresetgeom-lM5ig9Gz.js"), import("./featuresetstats-eIGT6mSP.js"), import("./featuresetstring--_yWa3mn.js")]).then(([t, e, n, r, i]) => (si = t, Ae.extend([e, n, r, i]), Ue([e, n, r, i], "async"), Xr = !0, !0))), Qt);
}
function ni(t, e = []) {
  return t.usesFeatureSet === void 0 && Bt(t, e), t.usesFeatureSet === !0;
}
function au(t, e = []) {
  return t.isAsync === void 0 && Bt(t, e), t.isAsync === !0;
}
function uu(t, e) {
  if (e) {
    for (const n of e)
      if (_t(t, n))
        return !0;
    return !1;
  }
  return !1;
}
function ri(t, e, n = [], r = !1) {
  return yn((i, u) => {
    const a = typeof t == "string" ? bn(t) : t, s = [];
    a && (ti() === !1 && (Rt(a) || r) && s.push(Nn()), ei() === !1 && (a.isAsync === !0 || e) && s.push(In()), Qr() === !1 && (ni(a) || uu(a, n)) && s.push(Tn())), s.length ? ft(s).then(() => {
      i(!0);
    }, u) : i(!0);
  });
}
function ii(t) {
  if (Rt(t))
    return !0;
  const e = an(t);
  let n = !1;
  for (let r = 0; r < e.length; r++)
    if (Za.indexOf(e[r]) > -1) {
      n = !0;
      break;
    }
  return n;
}
let si = null;
function Lt() {
  return si;
}
const ou = Object.freeze({ __proto__: null, compileScript: Kr, extend: eu, parseScript: bn, validateScript: tu, scriptCheck: nu, parseAndExecuteScript: ru, executeScript: Sn, referencesMember: _t, referencesFunction: iu, extractFieldLiterals: su, extractExpectedFieldLiterals: Wr, scriptUsesGeometryEngine: Rt, enableGeometrySupport: Nn, enableAsyncSupport: In, isFeatureSetSupportEnabled: Qr, isAsyncEnabled: ei, isGeometryEnabled: ti, enableFeatureSetSupport: Tn, scriptUsesFeatureSet: ni, scriptIsAsync: au, loadScriptDependencies: ri, scriptTouchesGeometry: ii, featureSetUtils: Lt }), mr = /^\$(feature|aggregatedFeatures)\./i, lu = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function cu(t) {
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function dt(t) {
  if (!t)
    return null;
  try {
    return bn(t);
  } catch {
  }
  return null;
}
function hu(t, e) {
  const n = typeof t == "string" ? dt(t) : t;
  if (!n)
    return null;
  try {
    return e = e || wi(lu), Kr(n, e);
  } catch {
  }
  return null;
}
function fu(t, e) {
  return { vars: { $feature: t == null ? new j() : j.createFromGraphic(t), $view: e && e.view }, spatialReference: e && e.sr };
}
function pu(t, e, n) {
  return j.createFromGraphicLikeObject(e, t, n);
}
function du(t, e) {
  t.vars.$feature = e;
}
function mu(t, e) {
  let n;
  try {
    n = Sn(t, e);
  } catch {
    n = null;
  }
  return n;
}
function Du(t, e) {
  let n;
  try {
    n = t ? t(e) : null;
  } catch {
    n = null;
  }
  return n;
}
function gu(t, e) {
  try {
    return t ? t(e) : Promise.resolve(null);
  } catch {
    return Promise.resolve(null);
  }
}
function Eu(t, e) {
  if (!t)
    return [];
  const n = typeof t == "string" ? dt(t) : t;
  if (!n)
    return [];
  const r = Wr(n);
  let i = new Array();
  r.forEach((a) => {
    mr.test(a) && (a = a.replace(mr, ""), i.push(a));
  });
  const u = i.filter((a) => a.includes("*"));
  return i = i.filter((a) => !u.includes(a)), e && u.forEach((a) => {
    const s = new RegExp(`^${a.split(/\*+/).map(cu).join(".*")}$`, "i");
    e.forEach((o) => s.test(o) ? i.push(o) : null);
  }), [...new Set(i.sort())];
}
function yu(t) {
  return _t(t, "$view");
}
function Au(t, e) {
  return !!t && _t(t, e);
}
function xu(t) {
  if (!(!t || t.spatialReference == null && (t.scale == null || t.viewingMode == null)))
    return { view: t.viewingMode && t.scale != null ? new x({ viewingMode: t.viewingMode, scale: t.scale }) : null, sr: t.spatialReference };
}
function wu({ url: t, spatialReference: e, lrucache: n, interceptor: r }) {
  const i = Lt();
  return i ? i.createFeatureSetCollectionFromService(t, e, n, r) : null;
}
function Cu({ layer: t, spatialReference: e, outFields: n, returnGeometry: r, lrucache: i, interceptor: u }) {
  if (t === null)
    return null;
  const a = Lt();
  return a ? a.constructFeatureSet(t, e, n, r == null || r, i, u) : null;
}
function Fu(t) {
  if ((t == null ? void 0 : t.map) === null)
    return null;
  const e = Lt();
  return e ? e.createFeatureSetCollectionFromMap(t.map, t.spatialReference, t.lrucache, t.interceptor) : null;
}
function bu(t, e, n = []) {
  return ri(t, e, n);
}
function Su() {
  return Nn();
}
function Nu() {
  return Tn();
}
function Iu(t) {
  return t.type === "simple" || t.type === "class-breaks" || t.type === "unique-value" || t.type === "dot-density" || t.type === "dictionary";
}
function Tu(t) {
  return t.declaredClass === "geoscene.layers.support.LabelClass";
}
function vu(t) {
  return t.declaredClass === "geoscene.PopupTemplate";
}
function ai(t, e) {
  if (!t)
    return !1;
  if (typeof t == "string")
    return e(t);
  const n = t;
  if (Iu(n)) {
    if (n.type === "dot-density") {
      const u = n.attributes.some((a) => e(a.valueExpression));
      if (u)
        return u;
    }
    const r = n.visualVariables, i = !!r && r.some((u) => {
      let a = e(u.valueExpression);
      return u.type === "size" && (Ln(u.minSize) && (a = a || e(u.minSize.valueExpression)), Ln(u.maxSize) && (a = a || e(u.maxSize.valueExpression))), a;
    });
    return !(!("valueExpression" in n) || !e(n.valueExpression)) || i;
  }
  if (Tu(n)) {
    const r = n.labelExpressionInfo && n.labelExpressionInfo.expression;
    return !(!r || !e(r)) || !1;
  }
  return !!vu(n) && (!!n.expressionInfos && n.expressionInfos.some((r) => e(r.expression)) || Array.isArray(n.content) && n.content.some((r) => {
    var i;
    return r.type === "expression" && e((i = r.expressionInfo) == null ? void 0 : i.expression);
  }));
}
function ku(t) {
  const e = dt(t);
  return !!e && ii(e);
}
function Bu(t) {
  return ai(t, ku);
}
function Ou(t) {
  const e = dt(t);
  return !!e && Rt(e);
}
function _u(t) {
  return ai(t, Ou);
}
const Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dictionary: x,
  arcade: ou,
  arcadeFeature: j,
  convertFeatureLayerToFeatureSet: Cu,
  convertMapToFeatureSetCollection: Fu,
  convertServiceUrlToWorkspace: wu,
  createExecContext: fu,
  createFeature: pu,
  createFunction: hu,
  createSyntaxTree: dt,
  dependsOnView: yu,
  enableFeatureSetOperations: Nu,
  enableGeometryOperations: Su,
  evalSyntaxTree: mu,
  executeAsyncFunction: gu,
  executeFunction: Du,
  extractFieldNames: Eu,
  getViewInfo: xu,
  hasGeometryFunctions: Bu,
  hasGeometryOperations: _u,
  hasVariable: Au,
  loadScriptDependencies: bu,
  updateExecContext: du
}, Symbol.toStringTag, { value: "Module" }));
export {
  an as I,
  vr as N,
  Rr as O,
  Tr as P,
  Ti as S,
  j as _,
  x as a,
  d as b,
  he as c,
  Et as d,
  An as e,
  Si as f,
  un as g,
  Q as h,
  Yi as i,
  $i as j,
  Qe as k,
  ji as l,
  zt as m,
  Mu as n,
  Br as o,
  xr as p,
  Eo as q,
  sn as r,
  kt as s,
  bi as u,
  br as y
};

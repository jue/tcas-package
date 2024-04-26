import { j2 as gt, y as E, j3 as pt, s as ne, b0 as tt, l as T, aW as st, b1 as K, r as y, eZ as ft, iY as _t, Z as V, j4 as yt, w as ce, gS as ge, gD as mt, j5 as rt, j6 as vt, e2 as Me, eC as Ee, hp as de, cb as xe, a1 as bt, ep as it, j7 as It, dI as at, iI as wt, de as St, hn as Fe, bc as Q, b9 as pe, g as _e, C as nt, ca as xt, c9 as Re, e as O, a as he, d as D, eY as Ft, ap as ot, j8 as Oe, a4 as Ct, aH as kt, m as oe, a_ as Tt, fP as qt, j9 as ct, ja as ht, fk as Mt, hq as Ce, dx as Et, eq as je, c4 as Rt, fw as Ot, jb as te, cc as At, di as Ut, jc as $t, aT as Pt, e4 as ue, J as jt, E as Lt, c2 as Gt, jd as Nt } from "./index-Ek1MTSEY.js";
import { V as Dt } from "./QueryEngine-VI1gPsDJ.js";
import { r as zt, o as Qt, l as Bt } from "./FeatureStore2D-mb7RzHnA.js";
import { s as ut } from "./quantizationUtils-N9FQ_cmo.js";
import { q as Le } from "./ogcFeatureUtils-khIp6mxb.js";
import { j as Ge, d as X, r as Vt, M as Yt } from "./ComputedAttributeStorage-oDQUKOa8.js";
import { s as fe } from "./CircularArray-_0_Ut6zm.js";
import { f as Xt, g as me } from "./projectionSupport-OcYAvekw.js";
import { o as B } from "./enums-YM9SAu8u.js";
import { a as Ne } from "./visualVariablesUtils-MRd41y5-.js";
import "vue";
import "./WhereClause-tgx5XbAS.js";
import "./QueryEngineCapabilities-gmxC9I6i.js";
import "./utils-GLnihTtT.js";
import "./ClassBreaksDefinition-niJmWb63.js";
import "./spatialQuerySupport-Z2pv9ola.js";
import "./geojson-niEOVREX.js";
import "./clientSideDefaults-LKtLjX6p.js";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./json-uwIaZKlZ.js";
import "./visualVariablesUtils-EcwyP76J.js";
function Ht(i) {
  return i === "heatmap" ? import("./HeatmapProcessor-Gnrj6XqO.js") : import("./SymbolProcessor-vgD4B9SO.js");
}
const ve = 268435455;
let Wt = class {
  constructor() {
    this.fieldMap = /* @__PURE__ */ new Map(), this.fields = [], this.hasFeatures = !1, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.vertexCount = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
  hasField(e) {
    return this.fieldMap.has(e);
  }
  isDateField(e) {
    var t;
    return (t = this.fieldMap.get(e)) == null ? void 0 : t.isDate;
  }
  getFieldIndex(e) {
    var t;
    return (t = this.fieldMap.get(e)) == null ? void 0 : t.index;
  }
};
function Zt(i) {
  const s = i.getLength(), r = i.pos() + s, a = { name: "", isDate: !1 };
  for (; i.pos() < r && i.next(); )
    switch (i.tag()) {
      case 1:
        a.name = i.getString();
        break;
      case 2:
        pt(i.getEnum()) === "esriFieldTypeDate" && (a.isDate = !0);
        break;
      default:
        i.skip();
    }
  return a;
}
function Jt(i) {
  return i.toLowerCase().trim();
}
function Kt(i, e, t = !1) {
  const u = i.pos(), c = new Wt();
  let d = 0, l = 0;
  const g = 1, p = 2, _ = 4, I = 3;
  let f = null, v = null, b = null, w = !1;
  for (; i.next(); )
    switch (i.tag()) {
      case 1:
        f = i.getString();
        break;
      case 3:
        v = i.getString();
        break;
      case 12:
        b = i.processMessage(gt);
        break;
      case 9:
        if (c.exceededTransferLimit = i.getBool(), c.exceededTransferLimit) {
          c.offsets.geometry = t ? new Float64Array(8e3) : new Int32Array(8e3), c.centroid = t ? new Float64Array(16e3) : new Int32Array(16e3);
          for (let m = 0; m < c.centroid.length; m++)
            c.centroid[m] = ve;
        }
        break;
      case 13: {
        const m = Zt(i), C = m.name, q = Jt(m.name), x = { fieldName: C, index: d++, isDate: m.isDate };
        c.fields.push(x), c.fieldMap.set(m.name, x), c.fieldMap.set(q, x);
        break;
      }
      case 15: {
        const m = i.getLength(), C = i.pos() + m;
        if (!c.exceededTransferLimit) {
          const x = c.offsets.geometry, k = c.centroid;
          x.push(0), k.push(ve), k.push(ve);
        }
        !w && c.exceededTransferLimit && (w = !0, c.offsets.attributes = t ? new Float64Array(8e3 * d) : new Uint32Array(8e3 * d));
        let q = l * d;
        for (; i.pos() < C && i.next(); )
          switch (i.tag()) {
            case g: {
              w ? c.offsets.attributes[q++] = i.pos() : c.offsets.attributes.push(i.pos());
              const x = i.getLength();
              i.skipLen(x);
              break;
            }
            case p:
              if (e) {
                const x = i.getLength(), k = i.pos() + x;
                for (; i.pos() < k && i.next(); )
                  switch (i.tag()) {
                    case I: {
                      i.getUInt32();
                      const F = i.getSInt64(), P = i.getSInt64();
                      c.centroid[2 * l] = F, c.centroid[2 * l + 1] = P;
                      break;
                    }
                    default:
                      i.skip();
                  }
              } else {
                c.offsets.geometry[l] = i.pos();
                const x = i.getLength();
                c.vertexCount += x, i.skipLen(x);
              }
              break;
            case _: {
              const x = i.getLength(), k = i.pos() + x;
              for (; i.pos() < k && i.next(); )
                switch (i.tag()) {
                  case I: {
                    i.getUInt32();
                    const F = i.getSInt64(), P = i.getSInt64();
                    c.centroid[2 * l] = F, c.centroid[2 * l + 1] = P;
                    break;
                  }
                  default:
                    i.skip();
                }
              break;
            }
            default:
              i.skip();
          }
        l++, c.hasFeatures = !0;
        break;
      }
      default:
        i.skip();
    }
  const S = f || v;
  if (!S)
    throw new E("FeatureSet has no objectId or globalId field name");
  return c.featureCount = l, c.fieldCount = d, c.objectIdFieldIndex = c.getFieldIndex(S), c.transform = b, c.displayIds = new Uint32Array(c.featureCount), c.groupIds = new Uint16Array(c.featureCount), i.move(u), c;
}
const es = ne.getLogger("geoscene.view.2d.layers.features.support.FeatureSetReaderPBF"), ts = !0, be = 268435455, De = 128, ze = 128e3, se = { small: { delta: new Int32Array(De), decoded: new Int32Array(De) }, large: { delta: new Int32Array(ze), decoded: new Int32Array(ze) } };
function Qe(i) {
  return i <= se.small.delta.length ? se.small : (i <= se.large.delta.length || (se.large.delta = new Int32Array(Math.round(1.25 * i)), se.large.decoded = new Int32Array(Math.round(1.25 * i))), se.large);
}
function Be(i) {
  return i.toLowerCase().trim();
}
function ss(i) {
  try {
    const t = new _t(new Uint8Array(i), new DataView(i));
    for (; t.next(); ) {
      if (t.tag() === 2)
        return rs(t.getMessage());
      t.skip();
    }
  } catch (e) {
    const t = new E("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: e });
    es.error(t);
  }
  return null;
}
function rs(i) {
  for (; i.next(); ) {
    if (i.tag() === 1)
      return i.getMessage();
    i.skip();
  }
  return null;
}
function is(i) {
  const c = i.getLength(), d = i.pos() + c;
  for (; i.pos() < d && i.next(); )
    switch (i.tag()) {
      case 1:
        return i.getString();
      case 2:
        return i.getFloat();
      case 3:
        return i.getDouble();
      case 4:
        return i.getSInt32();
      case 5:
        return i.getUInt32();
      case 6:
        return i.getInt64();
      case 7:
        return i.getUInt64();
      case 8:
        return i.getSInt64();
      case 9:
        return i.getBool();
      default:
        return i.skip(), null;
    }
  return null;
}
function as(i, e, t, s, r, a) {
  return 0.5 * Math.abs(i * s + t * a + r * e - i * a - t * e - r * s);
}
function Ie(i, e, t, s) {
  return i * s - t * e === 0 && i * t + e * s > 0;
}
let ns = class ke extends Ge {
  constructor(e, t, s, r) {
    super(e, r), this._hasNext = !1, this._isPoints = !1, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._geometryType = r.geometryType, this._reader = t, this._header = s, this._hasNext = s.hasFeatures, this._isPoints = r.geometryType === "esriGeometryPoint";
  }
  static fromBuffer(e, t, s = !1) {
    const r = t.geometryType, a = ss(e), n = Kt(a, r === "esriGeometryPoint", s), o = Ge.createInstance();
    return new ke(o, a, n, t);
  }
  get geometryType() {
    return this._geometryType;
  }
  get size() {
    return this._header.featureCount;
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  get stride() {
    return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  hasField(e) {
    return this._header.hasField(e) || this._header.hasField(Be(e));
  }
  getFieldNames() {
    return this._header.fields.map((e) => e.fieldName);
  }
  getSize() {
    return this.size;
  }
  getQuantizationTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e;
  }
  getAttributeHash() {
    let e = "";
    return this._header.fields.forEach(({ index: t }) => {
      e += this._readAttributeAtIndex(t) + ".";
    }), e;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e) {
    this._header.displayIds[this._featureIndex] = e;
  }
  getGroupId() {
    return this._header.groupIds[this._featureIndex];
  }
  setGroupId(e) {
    this._header.groupIds[this._featureIndex] = e;
  }
  readLegacyFeature() {
    if (this._cache.legacyFeature === void 0) {
      var e;
      const t = this.readCentroid(), s = { attributes: this.readAttributes(), geometry: this._isPoints ? this.readLegacyPointGeometry() : this.readLegacyGeometry(), centroid: (e = t && { x: t.coords[0], y: t.coords[1] }) != null ? e : null };
      return this._cache.legacyFeature = s, s;
    }
    return this._cache.legacyFeature;
  }
  readOptimizedFeature() {
    if (this._cache.optFeature === void 0) {
      const e = new tt(this.readGeometry(), this.readAttributes(), this.readCentroid());
      return e.objectId = this.getObjectId(), e.displayId = this.getDisplayId(), this._cache.optFeature = e, e;
    }
    return this._cache.optFeature;
  }
  getXHydrated() {
    const e = this._header.centroid[2 * this._featureIndex], t = this.getQuantizationTransform();
    return T(t) ? e : e * t.scale[0] + t.translate[0];
  }
  getYHydrated() {
    const e = this._header.centroid[2 * this._featureIndex + 1], t = this.getQuantizationTransform();
    return T(t) ? e : t.translate[1] - e * t.scale[1];
  }
  getX() {
    return this._header.centroid[2 * this._featureIndex] * this._sx + this._tx;
  }
  getY() {
    return this._header.centroid[2 * this._featureIndex + 1] * this._sy + this._ty;
  }
  readLegacyPointGeometry() {
    return { x: this.getX(), y: this.getY() };
  }
  readLegacyGeometry(e) {
    const t = this.readGeometry(e);
    return st(t, this.geometryType, !1, !1);
  }
  readLegacyCentroid() {
    const e = this.readCentroid();
    if (!e)
      return null;
    const [t, s] = e.coords;
    return { x: t, y: s };
  }
  readGeometryArea() {
    return this._cache.area || this.readGeometry(!0), this._cache.area;
  }
  readUnquantizedGeometry(e = !1) {
    if (this._cache.unquantGeometry === void 0) {
      const t = this.readGeometry(e);
      if (!t)
        return this._cache.unquantGeometry = null, null;
      const s = Qe(t.coords.length).decoded, r = t.clone(s), a = r.coords;
      let n = 0;
      for (const o of r.lengths) {
        for (let h = 1; h < o; h++) {
          const u = 2 * (n + h), c = 2 * (n + h - 1);
          a[u] += a[c], a[u + 1] += a[c + 1];
        }
        n += o;
      }
      return this._cache.unquantGeometry = r, r;
    }
    return this._cache.unquantGeometry;
  }
  readHydratedGeometry() {
    if (this._isPoints) {
      if (this._header.centroid[2 * this._featureIndex] === be)
        return null;
      const r = this.getXHydrated(), a = this.getYHydrated();
      return new K([], [r, a]);
    }
    const e = this.readGeometry();
    if (!e)
      return null;
    const t = e.clone(), s = this.getQuantizationTransform();
    return y(s) && ft(t, t, this.hasZ, this.hasM, s), t;
  }
  readGeometry(e = !1) {
    if (this._cache.geometry === void 0) {
      let t = null;
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === be)
          return null;
        const s = this.getX(), r = this.getY();
        t = new K([], [s, r]);
      } else {
        const s = this._header.offsets.geometry[this._featureIndex], r = this._reader;
        if (s === 0)
          return null;
        r.move(s);
        try {
          t = e ? this._parseGeometryForDisplay(r) : this._parseGeometry(r);
        } catch (a) {
          return console.error("Failed to parse geometry!", a), null;
        }
      }
      return this._cache.geometry = t, t;
    }
    return this._cache.geometry;
  }
  readCentroid() {
    if (this._cache.centroid === void 0) {
      let e = null;
      const t = this._header.centroid[2 * this._featureIndex] + this._tx, s = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
      return t === be ? (e = this._computeCentroid(), e && (this._header.centroid[2 * this._featureIndex] = e.coords[0] - this._tx, this._header.centroid[2 * this._featureIndex + 1] = e.coords[1] - this._ty)) : e = new K([], [t, s]), this._cache.centroid = e, e;
    }
    return this._cache.centroid;
  }
  copy() {
    const e = this._reader.clone(), t = new ke(this.instance, e, this._header, this.fullSchema());
    return this.copyInto(t), t;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this.size && !this._getExists(); )
      ;
    return this._featureIndex < this.size;
  }
  _readAttribute(e, t) {
    const s = this._header.hasField(e) ? e : Be(e), r = this._header.getFieldIndex(s);
    if (r == null)
      return;
    const a = this._readAttributeAtIndex(r);
    return !t || a == null ? a : this._header.isDateField(s) ? new Date(a) : a;
  }
  _readAttributes() {
    const e = {};
    return this._header.fields.forEach(({ fieldName: t, index: s }) => {
      e[t] = this._readAttributeAtIndex(s);
    }), e;
  }
  copyInto(e) {
    super.copyInto(e), e._featureIndex = this._featureIndex, e._featureOffset = this._featureOffset, e._hasNext = this._hasNext;
  }
  _readAttributeAtIndex(e) {
    const t = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e], s = this._reader;
    return s.move(t), is(s);
  }
  _parseGeometry(e) {
    const r = e.getLength(), a = e.pos() + r, n = [], o = [];
    for (; e.pos() < a && e.next(); )
      switch (e.tag()) {
        case 2: {
          const h = e.getUInt32(), u = e.pos() + h;
          for (; e.pos() < u; )
            o.push(e.getUInt32());
          break;
        }
        case 3: {
          const h = e.getUInt32(), u = e.pos() + h;
          for (n.push(e.getSInt32() + this._tx), n.push(e.getSInt32() + this._ty), this.hasZ && e.getSInt32(), this.hasM && e.getSInt32(); e.pos() < u; )
            n.push(e.getSInt32()), n.push(e.getSInt32()), this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
          break;
        }
        default:
          e.skip();
      }
    return new K(o, n);
  }
  _parseGeometryForDisplay(e) {
    const r = e.getLength(), a = e.pos() + r, n = [], o = [];
    let h = 0, u = 0, c = null, d = 0;
    const l = this.geometryType === "esriGeometryPolygon";
    for (; e.pos() < a && e.next(); )
      switch (e.tag()) {
        case 2: {
          const g = e.getUInt32(), p = e.pos() + g;
          for (; e.pos() < p; ) {
            const _ = e.getUInt32();
            n.push(_), h += _;
          }
          c = Qe(2 * h).delta;
          break;
        }
        case 3: {
          e.getUInt32();
          const g = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
          for (const p of n)
            if (u + g * p > c.length)
              for (let _ = 0; _ < p; _++)
                e.getSInt32(), e.getSInt32(), this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
            else if (l && ts) {
              const _ = this.getAreaSimplificationThreshold(p, this._header.vertexCount);
              let I = 2, f = 1;
              const v = !1;
              let b = e.getSInt32(), w = e.getSInt32();
              c[u++] = b, c[u++] = w, this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
              let S = e.getSInt32(), m = e.getSInt32();
              for (this.hasZ && e.getSInt32(), this.hasM && e.getSInt32(); I < p; ) {
                let C = e.getSInt32(), q = e.getSInt32();
                this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
                const x = b + S, k = w + m;
                as(b, w, x, k, x + C, k + q) >= _ ? (d += -0.5 * (x - b) * (k + w), f > 1 && Ie(c[u - 2], c[u - 1], S, m) ? (c[u - 2] += S, c[u - 1] += m) : (c[u++] = S, c[u++] = m, f++), b = x, w = k) : (C += S, q += m), S = C, m = q, I++;
              }
              f < 3 || v ? u -= 2 * f : (d += -0.5 * (b + S - b) * (w + m + w), Ie(c[u - 2], c[u - 1], S, m) ? (c[u - 2] += S, c[u - 1] += m, o.push(f)) : (c[u++] = S, c[u++] = m, o.push(++f)));
            } else {
              let _ = 0, I = e.getSInt32(), f = e.getSInt32();
              this.hasZ && e.getSInt32(), this.hasM && e.getSInt32(), c[u++] = I, c[u++] = f, _ += 1;
              for (let v = 1; v < p; v++) {
                const b = e.getSInt32(), w = e.getSInt32(), S = I + b, m = f + w;
                d += -0.5 * (S - I) * (m + f), this.hasZ && e.getSInt32(), this.hasM && e.getSInt32(), v > 2 && Ie(c[u - 2], c[u - 1], b, w) ? (c[u - 2] += b, c[u - 1] += w) : (c[u++] = b, c[u++] = w, _ += 1), I = S, f = m;
              }
              o.push(_);
            }
          break;
        }
        default:
          e.skip();
      }
    if (this._cache.area = d, !o.length)
      return null;
    if (this._tx || this._ty) {
      let g = 0;
      for (const p of o)
        c[2 * g] += this._tx, c[2 * g + 1] += this._ty, g += p;
    }
    return new K(o, c);
  }
}, ye = class {
  constructor(e) {
    this.service = e;
  }
  destroy() {
  }
};
function os(i) {
  return Array.isArray(i.source);
}
function cs(i) {
  return i && i.capabilities && i.collection && i.layerDefinition;
}
function hs(i) {
  const { capabilities: e } = i;
  return cs(i.source) ? new ps(i) : os(i) ? new ds(i) : e.query.supportsFormatPBF && V("featurelayer-pbf") ? new ls(i) : new gs(i);
}
async function us(i) {
  const e = new vt();
  return await e.open(i, {}), e;
}
let ds = class extends ye {
  constructor(e) {
    super(e), this._portsOpen = us(e.source).then((t) => this.client = t);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  async executeQuery(e, t) {
    await this._portsOpen;
    const s = await this.client.invoke("queryFeatures", e.toJSON(), t);
    return X.fromFeatureSet(s, this.service);
  }
}, ls = class extends ye {
  async executeQuery(e, t) {
    const { data: s } = await yt(this.service.source, e, t), r = !e.quantizationParameters;
    return ns.fromBuffer(s, this.service, r);
  }
}, gs = class extends ye {
  async executeQuery(e, t) {
    const { source: s, capabilities: r, spatialReference: a, objectIdField: n, geometryType: o } = this.service;
    if (y(e.quantizationParameters) && !r.query.supportsQuantization) {
      const c = e.clone(), d = ut(ce(c.quantizationParameters));
      c.quantizationParameters = null;
      const { data: l } = await ge(s, c, a, t), g = mt(l, n);
      return rt(d, g), X.fromOptimizedFeatureSet(g, this.service);
    }
    const { data: h } = await ge(s, e, this.service.spatialReference, t);
    var u;
    return o === "esriGeometryPoint" && (h.features = (u = h.features) == null ? void 0 : u.filter((c) => {
      if (y(c.geometry)) {
        const d = c.geometry;
        return Number.isFinite(d.x) && Number.isFinite(d.y);
      }
      return !0;
    })), X.fromFeatureSet(h, this.service);
  }
}, ps = class extends ye {
  async executeQuery(e, t) {
    const { capabilities: s } = this.service;
    if (e.quantizationParameters && !s.query.supportsQuantization) {
      const a = e.clone(), n = ut(ce(a.quantizationParameters));
      a.quantizationParameters = null;
      const o = await Le(this.service.source, e, t);
      return rt(n, o), X.fromOptimizedFeatureSet(o, this.service);
    }
    const r = await Le(this.service.source, e, t);
    return X.fromOptimizedFeatureSet(r, this.service);
  }
}, z = class le {
  constructor() {
    this.source = !1, this.targets = { feature: !1, aggregate: !1 }, this.storage = { filters: !1, data: !1 }, this.mesh = !1, this.queryFilter = !1, this.why = { mesh: [], source: [] };
  }
  static create(e) {
    const t = new le();
    for (const s in e) {
      const r = e[s];
      if (typeof r == "object")
        for (const a in r) {
          const n = r[a];
          t[s][a] = n;
        }
      t[s] = r;
    }
    return t;
  }
  static empty() {
    return le.create({});
  }
  static all() {
    return le.create({ source: !0, targets: { feature: !0, aggregate: !0 }, storage: { filters: !0, data: !0 }, mesh: !0 });
  }
  unset(e) {
    e.source && (this.source = !1), e.targets.feature && (this.targets.feature = !1), e.targets.aggregate && (this.targets.aggregate = !1), e.storage.filters && (this.storage.filters = !1), e.storage.data && (this.storage.data = !1), e.mesh && (this.mesh = !1), e.queryFilter && (this.queryFilter = !1);
  }
  any() {
    return this.source || this.mesh || this.storage.filters || this.storage.data || this.targets.feature || this.targets.aggregate || this.queryFilter;
  }
  describe() {
    let e = 0, t = "";
    if (this.mesh) {
      e += 20, t += `-> (20) Mesh needs update
`;
      for (const r of this.why.mesh)
        t += `    + ${r}
`;
    }
    if (this.source) {
      e += 10, t += `-> (10) The source needs update
`;
      for (const r of this.why.source)
        t += `    + ${r}
`;
    }
    this.targets.feature && (e += 5, t += `-> (5) Feature target parameters changed
`), this.storage.filters && (e += 5, t += `-> (5) Feature filter parameters changed
`), this.targets.aggregate && (e += 4, t += `-> (4) Aggregate target parameters changed
`), this.storage.data && (e += 1, t += "-> (1) Texture storage parameters changed");
    const s = e < 5 ? "Fastest" : e < 10 ? "Fast" : e < 15 ? "Moderate" : e < 20 ? "Slow" : "Very Slow";
    console.debug(`Applying ${s} update of cost ${e}/45 `), console.debug(t);
  }
  toJSON() {
    return { queryFilter: this.queryFilter, source: this.source, targets: this.targets, storage: this.storage, mesh: this.mesh };
  }
}, fs = class {
  constructor(e) {
    this.requests = { done: new Array(), stream: new fe(10) }, this._edits = null, this._abortController = new AbortController(), this._done = !1, this.didSend = !1, this.tile = e;
  }
  get signal() {
    return this._abortController.signal;
  }
  get options() {
    return { signal: this._abortController.signal };
  }
  get empty() {
    return !this.requests.done.length;
  }
  get edits() {
    return this._edits;
  }
  get done() {
    return this._done;
  }
  end() {
    this._done = !0;
  }
  clear() {
    this.requests.done = [];
  }
  applyUpdate(e) {
    this.requests.done.forEach((t) => t.message.status.unset(e)), y(this._edits) && this._edits.status.unset(e);
  }
  add(e) {
    var t;
    e.message.status = (t = e.message.status) != null ? t : z.empty(), e.message.end && this.requests.done.forEach((s) => {
      y(s.message) && s.message.end && (s.message.end = !1);
    }), this.requests.done.push(e);
  }
  edit(e, t) {
    const s = e.getQuantizationTransform(), r = e.fullSchema(), a = Array.from(e.features()), n = [...t, ...a.map((o) => o.objectId)];
    if (this.removeIds(n), this._invalidate(), T(this._edits))
      return void (this._edits = { type: "append", addOrUpdate: X.fromOptimizedFeatures(a, r, ce(s)), id: this.tile.id, status: z.empty(), end: !0 });
    this.requests.done.forEach((o) => o.message.end = !1), ce(this._edits.addOrUpdate).append(e.features());
  }
  *readers() {
    for (const { message: e } of this.requests.done)
      y(e.addOrUpdate) && (yield e.addOrUpdate);
    y(this._edits) && y(this._edits.addOrUpdate) && (yield this._edits.addOrUpdate);
  }
  _invalidate() {
    for (const e of this.requests.done)
      e.message.status = z.empty();
    y(this._edits) && (this._edits.status = z.empty());
  }
  removeIds(e) {
    this._invalidate();
    for (const { message: t } of this.requests.done) {
      const s = t.addOrUpdate;
      y(s) && (s.removeIds(e), s.isEmpty && (t.addOrUpdate = null));
    }
    y(this._edits) && y(this._edits.addOrUpdate) && this._edits.addOrUpdate.removeIds(e), this.requests.done = this.requests.done.filter((t) => t.message.addOrUpdate || t.message.end);
  }
  abort() {
    this._abortController.abort();
  }
};
function _s(i, e) {
  const t = /* @__PURE__ */ new Set();
  return i && i.forEach((s) => t.add(s)), e && e.forEach((s) => t.add(s)), t.has("*") ? ["*"] : Array.from(t);
}
let dt = class {
  constructor(e) {
    this.events = new Me(), this._resolver = Ee(), this._didEdit = !1, this._subscriptions = /* @__PURE__ */ new Map(), this._outSR = e.outSR, this._serviceInfo = e.serviceInfo, this._onTileUpdateMessage = e.onMessage;
  }
  destroy() {
  }
  async _onMessage(e) {
    var t, s;
    const r = this._subscriptions.get(e.id);
    if (!r)
      return;
    const a = { ...e, remove: (t = e.remove) != null ? t : [], status: (s = e.status) != null ? s : z.empty() };
    return de(this._onTileUpdateMessage(a, r.options));
  }
  update(e, t) {
    var s;
    const r = t.fields.length;
    t.outFields = _s((s = this._schema) == null ? void 0 : s.outFields, t.outFields), t.outFields = t.outFields.length >= 0.75 * r ? ["*"] : t.outFields, t.outFields.sort();
    const a = xe(this._schema, t);
    if (!a)
      return;
    V("geoscene-2d-update-debug") && console.debug("Applying Update - Source:", a);
    const n = "orderByFields" in this._serviceInfo && this._serviceInfo.orderByFields ? this._serviceInfo.orderByFields : this._serviceInfo.objectIdField + " ASC", o = { returnCentroid: V("geoscene-2d-query-centroid-enabled") && this._serviceInfo.geometryType === "esriGeometryPolygon", returnGeometry: !0, timeReferenceUnknownClient: this._serviceInfo.type !== "stream" && this._serviceInfo.timeReferenceUnknownClient, outFields: t.outFields, outSpatialReference: this._outSR, orderByFields: [n], where: t.definitionExpression || "1=1", gdbVersion: t.gdbVersion, historicMoment: t.historicMoment, timeExtent: bt.fromJSON(t.timeExtent) }, h = this._schema && it(a, "outFields");
    this._schema && It(a, ["timeExtent", "definitionExpression", "gdbVersion", "historicMoment", "customParameters"]) && (e.why.mesh.push("Layer filter and/or custom parameters changed"), e.why.source.push("Layer filter and/or custom parameters changed"), e.mesh = !0, e.source = !0, e.queryFilter = !0), h && (e.why.source.push("Layer required fields changed"), e.source = !0), xe(o, this._queryInfo) && (this._queryInfo = o), this._schema = t, this._resolver.resolve();
  }
  whenInitialized() {
    return this._resolver.promise;
  }
  async applyUpdate(e) {
    if (e.queryFilter || e.source && this._didEdit)
      return this.refresh(), void (this._didEdit = !1);
    this._subscriptions.forEach((t) => t.applyUpdate(e)), await this.resend();
  }
  refresh() {
    for (const e of this._tiles())
      this.unsubscribe(e), this.subscribe(e);
  }
  subscribe(e) {
    const t = new fs(e);
    this._subscriptions.set(e.id, t);
  }
  unsubscribe(e) {
    const t = this.get(e.id);
    y(t) && t.abort(), this._subscriptions.delete(e.id);
  }
  createQuery(e = {}) {
    const t = this._queryInfo.historicMoment ? new Date(this._queryInfo.historicMoment) : null;
    return new at({ ...this._queryInfo, historicMoment: t, ...e });
  }
  get(e) {
    return this._subscriptions.has(e) ? this._subscriptions.get(e) : null;
  }
  async queryLastEditDate() {
    throw new Error("Service does not support query type");
  }
  async query(e) {
    throw new Error("Service does not support query");
  }
  *_tiles() {
    const e = Array.from(this._subscriptions.values());
    for (const t of e)
      yield t.tile;
  }
  async edit(e, t) {
    const s = Array.from(this._subscriptions.values()), r = s.map(({ tile: a }) => a);
    for (const a of s)
      a.removeIds(t);
    if (e.length) {
      const a = r.map((o) => {
        const h = this.createTileQuery(o);
        return h.objectIds = e, { tile: o, query: h };
      }).map(async ({ tile: o, query: h }) => ({ tile: o, result: await this.query(h), query: h })), n = (await wt(a)).map(async ({ tile: o, result: h }) => {
        if (!h.hasFeatures && !t.length && !e.length)
          return;
        const u = this._subscriptions.get(o.key.id);
        u && u.edit(h, e);
      });
      await St(n);
    }
    this._didEdit = !0;
  }
};
const ys = ne.getLogger("geoscene.views.2d.layers.features.sources.BaseFeatureSource"), ms = 4;
let Ae = class extends dt {
  constructor(e) {
    super(e), this.type = "feature", this.mode = "on-demand", this._adapter = hs(e.serviceInfo), this._queue = new Fe({ concurrency: 8, process: async (t) => {
      if (Q(t), y(t.tile)) {
        const s = t.tile.key.id, { signal: r } = t, a = V("geoscene-tiles-debug") ? { tile: s.replace(/\//g, "."), depth: t.depth } : void 0, n = await this._adapter.executeQuery(t.query, { signal: r, query: { ...a, ...this._schema.customParameters } });
        return n.level = t.tile.key.level, n;
      }
      return this._adapter.executeQuery(t.query, { ...t, query: this._schema.customParameters });
    } }), this._patchQueue = new Fe({ concurrency: 8, process: async (t) => {
      if (Q(t), y(t.tile)) {
        const s = t.tile.key.id, { signal: r } = t, a = V("geoscene-tiles-debug") ? { tile: s.replace(/\//g, "."), depth: t.depth } : void 0, n = await this._adapter.executeQuery(t.query, { signal: r, query: { ...a, ...this._schema.customParameters } });
        return n.level = t.tile.key.level, n;
      }
      return this._adapter.executeQuery(t.query, { ...t, query: this._schema.customParameters });
    } });
  }
  destroy() {
    super.destroy(), this._adapter.destroy(), this._queue.destroy(), this._patchQueue.destroy();
  }
  get updating() {
    return !!this._queue.length || Array.from(this._subscriptions.values()).some((e) => !e.done);
  }
  get maxRecordCountFactor() {
    const { query: e } = this._serviceInfo.capabilities;
    return e.supportsMaxRecordCountFactor ? ms : null;
  }
  get maxPageSize() {
    var e;
    const { query: t } = this._serviceInfo.capabilities;
    return ((e = t.maxRecordCount) != null ? e : 8e3) * pe(this.maxRecordCountFactor, 1);
  }
  get pageSize() {
    return Math.min(8e3, this.maxPageSize);
  }
  enableEvent(e, t) {
  }
  subscribe(e) {
    super.subscribe(e);
    const t = this._subscriptions.get(e.id);
    this._fetchDataTile(e).catch((s) => {
      _e(s) || ys.error(new E("mapview-query-error", "Encountered error when fetching tile", { tile: e, error: s }));
    }).then(() => t.end());
  }
  unsubscribe(e) {
    super.unsubscribe(e);
  }
  readers(e) {
    return this._subscriptions.get(e).readers();
  }
  async query(e) {
    return this._adapter.executeQuery(e, { query: this._schema.customParameters });
  }
  async queryLastEditDate() {
    const e = this._serviceInfo.source, t = { ...e.query, f: "json" };
    return (await nt(e.path, { query: t, responseType: "json" })).data.editingInfo.lastEditDate;
  }
  createTileQuery(e, t = {}) {
    var s;
    const r = this._serviceInfo.geometryType, a = this.createQuery(t);
    a.quantizationParameters = (s = t.quantizationParameters) != null ? s : e.getQuantizationParameters(), a.resultType = "tile", a.geometry = e.extent, this._serviceInfo.capabilities.query.supportsQuantization ? r === "esriGeometryPolyline" && (a.maxAllowableOffset = e.resolution * V("feature-polyline-generalization-factor")) : r !== "esriGeometryPolyline" && r !== "esriGeometryPolygon" || (a.maxAllowableOffset = e.resolution, r === "esriGeometryPolyline" && (a.maxAllowableOffset *= V("feature-polyline-generalization-factor")));
    const n = this._serviceInfo.capabilities.query;
    return a.defaultSpatialReferenceEnabled = n.supportsDefaultSpatialReference, a.compactGeometryEnabled = n.supportsCompactGeometry, a;
  }
  async _executePatchQuery(e, t, s, r) {
    const a = t.clone();
    a.outFields = [this._serviceInfo.objectIdField, ...s], a.returnCentroid = !1, a.returnGeometry = !1;
    const n = y(a.start) ? a.start / 8e3 : 0, o = r.signal;
    return this._patchQueue.push({ tile: e, query: a, signal: o, depth: n });
  }
  async _resend(e, t) {
    const { query: s, message: r } = e, a = y(s.outFields) ? s.outFields : [], n = this._queryInfo.outFields, o = n.filter((h) => !a.includes(h));
    if (T(r.addOrUpdate))
      this._onMessage({ ...r, type: "append" });
    else if (o.length)
      try {
        const h = this._subscriptions.get(r.id).tile, u = await this._executePatchQuery(h, s, o, t);
        Q(t), s.outFields = n, r.addOrUpdate.joinAttributes(u), this._onMessage({ ...r, end: r.end, type: "append" });
      } catch {
      }
    else
      this._onMessage({ ...r, type: "append" });
  }
  async _resendSubscription(e) {
    if (e.empty)
      return this._onMessage({ id: e.tile.id, addOrUpdate: null, end: !1, type: "append" });
    const t = e.signal;
    for (const s of e.requests.done)
      await this._resend(s, { signal: t });
    return y(e.edits) ? this._onMessage(e.edits) : void 0;
  }
  async resend() {
    const e = Array.from(this._subscriptions.values());
    await Promise.all(e.map((t) => this._resendSubscription(t)));
  }
};
const Ve = V("geoscene-mobile"), Ye = { maxDrillLevel: Ve ? 1 : 4, maxRecordCountFactor: Ve ? 1 : 3 };
let vs = class extends Ae {
  constructor(e) {
    super(e);
  }
  async _fetchDataTile(e) {
    const t = this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor, s = this._subscriptions.get(e.key.id), r = s.signal, a = e.getQuantizationParameters();
    let n = 0;
    const o = async (h, u) => {
      const c = this._queryInfo, d = this.createTileQuery(h, { maxRecordCountFactor: t ? Ye.maxRecordCountFactor : void 0, returnExceededLimitFeatures: !1, quantizationParameters: a });
      n++;
      try {
        const l = await this._queue.push({ tile: e, query: d, signal: r, depth: u });
        if (n--, Q(r), !l)
          return;
        if (c !== this._queryInfo)
          return void o(h, u);
        if (l.exceededTransferLimit && u < Ye.maxDrillLevel) {
          for (const p of h.createChildTiles())
            o(p, u + 1);
          return;
        }
        const g = { id: e.id, addOrUpdate: l, end: n === 0, type: "append" };
        s.add({ query: d, message: g }), this._onMessage(g);
      } catch (l) {
        _e(l) || this._onMessage({ id: e.id, addOrUpdate: null, end: !0, type: "append" });
      }
    };
    o(e, 0);
  }
};
const bs = "__esri_stream_id__", Xe = "__esri_timestamp__", He = 1e3;
let Is = class {
  constructor(e, t, s, r, a = 128) {
    this._trackIdToObservations = /* @__PURE__ */ new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = /* @__PURE__ */ new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = s, this._purgeOptions = r, this.store = e, this.objectIdField = t, this.purgeInterval = a, this._useGeneratedIds = this.objectIdField === bs;
  }
  add(e) {
    if (this._useGeneratedIds) {
      const r = this._nextId();
      e.attributes[this.objectIdField] = r, e.objectId = r;
    } else
      e.objectId = e.attributes[this.objectIdField];
    if (this._addOrUpdated.set(e.objectId, e), this._maxAge = Math.max(this._maxAge, e.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField)
      return T(this._trackIdLessObservations) && (this._trackIdLessObservations = new fe(1e5)), void this._trackIdLessObservations.enqueue(e.objectId);
    const t = e.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(t)) {
      const r = y(this._purgeOptions) && this._purgeOptions.maxObservations != null ? this._purgeOptions.maxObservations : He, a = xt(r, 0, He);
      this._trackIdToObservations.set(t, new fe(a));
    }
    const s = this._trackIdToObservations.get(t).enqueue(e.objectId);
    y(s) && (this._addOrUpdated.has(s) ? this._addOrUpdated.delete(s) : this._removed.push(s));
  }
  checkForUpdates() {
    const e = this._getToAdd(), t = this._getToRemove(), s = performance.now();
    s - this._lastPurge >= this.purgeInterval && (this._purge(s), this._lastPurge = s);
    const r = [];
    if (y(t))
      for (const a of t) {
        const n = this.store.removeById(a);
        y(n) && r.push(n);
      }
    if (y(e))
      for (const a of e)
        a.attributes[Xe] = s, this.store.add(a);
    (e || r) && this.store.update(e, r);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size)
      return null;
    const e = new Array(this._addOrUpdated.size);
    let t = 0;
    return this._addOrUpdated.forEach((s) => e[t++] = s), this._addOrUpdated.clear(), e;
  }
  _getToRemove() {
    const e = this._removed;
    return this._removed.length ? (this._removed = [], e) : null;
  }
  _nextId() {
    const e = this._idCounter;
    return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, e;
  }
  _purge(e) {
    const t = this._purgeOptions;
    y(t) && (this._purgeSomeByDisplayCount(t), this._purgeByAge(t), this._purgeByAgeReceived(e, t), this._purgeTracks());
  }
  _purgeSomeByDisplayCount(e) {
    if (!e.displayCount)
      return;
    let t = this.store.size;
    if (t > e.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const s of this._trackIdToObservations.values())
          if (t > e.displayCount && s.size) {
            const r = ce(s.dequeue());
            this._removed.push(r), t--;
          }
      }
      if (y(this._trackIdLessObservations)) {
        let s = t - e.displayCount;
        for (; s-- > 0; ) {
          const r = this._trackIdLessObservations.dequeue();
          y(r) && this._removed.push(r);
        }
      }
    }
  }
  _purgeByAge(e) {
    var t;
    if (!e.age || (t = this._timeInfo) == null || !t.startTimeField)
      return;
    const s = 60 * e.age * 1e3, r = this._maxAge - s;
    this.store.forEach((a) => {
      a.attributes[this._timeInfo.startTimeField] < r && this._removed.push(a.objectId);
    });
  }
  _purgeByAgeReceived(e, t) {
    if (!t.ageReceived)
      return;
    const s = e - 60 * t.ageReceived * 1e3;
    this.store.forEach((r) => {
      r.attributes[Xe] < s && this._removed.push(r.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((e, t) => {
      e.size === 0 && this._trackIdToObservations.delete(t);
    });
  }
}, Te = class extends Me.EventedMixin(Re) {
  onFeature(e) {
    this.emit("feature", e);
  }
};
Te = O([he("geoscene.layers.graphics.sources.connections.StreamConnection")], Te);
const ws = Te, H = ne.getLogger("geoscene.layers.graphics.sources.connections.WebSocketConnection");
var ie;
(function(i) {
  i[i.CONNECTING = 0] = "CONNECTING", i[i.OPEN = 1] = "OPEN", i[i.CLOSING = 2] = "CLOSING", i[i.CLOSED = 3] = "CLOSED";
})(ie || (ie = {}));
let ae = class extends ws {
  constructor(e) {
    super(), this.errorString = null;
    const { geometryType: t, spatialReference: s, sourceSpatialReference: r } = e;
    this._config = e, this._featureZScaler = Ft(t, r, s), this._open();
  }
  async _open() {
    await this._tryCreateWebSocket(), this.destroyed || await this._handshake();
  }
  destroy() {
    y(this._websocket) && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (T(this._websocket))
      return "disconnected";
    switch (this._websocket.readyState) {
      case ie.CONNECTING:
      case ie.OPEN:
        return "connected";
      case ie.CLOSING:
      case ie.CLOSED:
        return "disconnected";
    }
  }
  async _tryCreateWebSocket(e = this._config.source.path, t = 1e3, s = 0) {
    try {
      if (this.destroyed)
        return;
      const r = ot(e, this._config.customParameters);
      this._websocket = await this._createWebSocket(r), this.notifyChange("connectionStatus");
    } catch (r) {
      const a = t / 1e3;
      return this._config.maxReconnectionAttempts && s >= this._config.maxReconnectionAttempts ? (H.error(new E("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (H.error(new E("websocket-connection", `Failed to connect. Attempting to reconnect in ${a}s`, r)), await Oe(t), this._tryCreateWebSocket(e, Math.min(1.5 * t, 1e3 * this._config.maxReconnectionInterval), s + 1));
    }
  }
  _createWebSocket(e) {
    return new Promise((t, s) => {
      const r = new WebSocket(e);
      r.onopen = () => {
        if (r.onopen = null, this.destroyed)
          return r.onclose = null, void r.close();
        r.onclose = (a) => this._onClose(a), r.onerror = (a) => this._onError(a), r.onmessage = (a) => this._onMessage(a), t(r);
      }, r.onclose = (a) => {
        r.onopen = r.onclose = null, s(a);
      };
    });
  }
  async _handshake(e = 1e4) {
    const t = this._websocket;
    if (T(t))
      return;
    const s = Ee(), r = t.onmessage, { filter: a, outFields: n, spatialReference: o } = this._config;
    return s.timeout(e), t.onmessage = (h) => {
      var u;
      let c = null;
      try {
        c = JSON.parse(h.data);
      } catch {
      }
      c && typeof c == "object" || (H.error(new E("websocket-connection", "Protocol violation. Handshake failed - malformed message", h.data)), s.reject(), this.destroy()), ((u = c.spatialReference) == null ? void 0 : u.wkid) !== (o == null ? void 0 : o.wkid) && (H.error(new E("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${o.wkid}`, h.data)), s.reject(), this.destroy()), c.format !== "json" && (H.error(new E("websocket-connection", "Protocol violation. Handshake failed - format is not set", h.data)), s.reject(), this.destroy()), a && c.filter !== a && H.error(new E("websocket-connection", "Tried to set filter, but server doesn't support it")), n && c.outFields !== n && H.error(new E("websocket-connection", "Tried to set outFields, but server doesn't support it")), t.onmessage = r, s.resolve();
    }, t.send(JSON.stringify({ filter: a, outFields: n, format: "json", spatialReference: { wkid: o.wkid } })), s.promise;
  }
  _onMessage(e) {
    try {
      const t = JSON.parse(e.data);
      if (t.type !== "featureResult")
        throw new E("websocket-connection", "Protocol violation - Expected to find message of type 'featureResult'", t);
      for (const s of t.features)
        y(this._featureZScaler) && this._featureZScaler(s.geometry), this.onFeature(s);
    } catch (t) {
      return H.error(new E("websocket-connection", "Failed to parse message", t)), void this.destroy();
    }
  }
  _onError(e) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t), H.error("websocket-connection", t);
  }
  _onClose(e) {
    this._websocket = null, this.notifyChange("connectionStatus"), e.code !== 1e3 && H.error("websocket-connection", `WebSocket closed unexpectedly with error code ${e.code}`), this.destroyed || this._open();
  }
};
O([D()], ae.prototype, "connectionStatus", null), O([D()], ae.prototype, "errorString", void 0), ae = O([he("geoscene.layers.graphics.sources.connections.WebSocketConnection")], ae);
const W = ne.getLogger("geoscene.layers.graphics.sources.connections.GeoEventConnection"), Ss = 1e4, xs = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
let qe = class extends ae {
  constructor(e) {
    super({ ...xs, ...e });
  }
  async _open() {
    const e = await this._fetchServiceDefinition(this._config.source);
    e.timeInfo.trackIdField || W.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
    const t = this._fetchWebSocketUrl(e.streamUrls, this._config.spatialReference);
    this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), await this._buddyServicesQuery, await this._tryCreateWebSocket(t);
    const { filter: s, outFields: r } = this._config;
    this.destroyed || this._setFilter(s, r);
  }
  _onMessage(e) {
    let t;
    try {
      t = this._enrich(JSON.parse(e.data)), y(this._featureZScaler) && this._featureZScaler(t.geometry);
    } catch (s) {
      return void W.error(new E("geoevent-connection", "Failed to parse message", s));
    }
    this.onFeature(t);
  }
  async _fetchServiceDefinition(e) {
    const t = { f: "json", ...this._config.customParameters }, s = nt(e.path, { query: t, responseType: "json" }), r = (await s).data;
    return this._serviceDefinition = r, r;
  }
  _fetchWebSocketUrl(e, t) {
    const s = e[0], { urls: r, token: a } = s, n = this._inferWebSocketBaseUrl(r);
    return ot(`${n}/subscribe`, { outSR: "" + t.wkid, token: a });
  }
  _inferWebSocketBaseUrl(e) {
    if (e.length === 1)
      return e[0];
    for (const t of e)
      if (t.indexOf("wss") !== -1)
        return t;
    return W.error(new E("geoevent-connection", "Unable to infer WebSocket url", e)), null;
  }
  async _setFilter(e, t) {
    const s = this._websocket;
    if (T(s) || T(e) && T(t))
      return;
    const r = JSON.stringify({ filter: this._serializeFilter(e, t) });
    let a = !1;
    const n = Ee(), o = () => {
      a || (this.destroyed || this._websocket !== s || W.error(new E("geoevent-connection", "Server timed out when setting filter")), n.reject());
    }, h = (u) => {
      const c = JSON.parse(u.data);
      c.filter && (c.error && (W.error(new E("geoevent-connection", "Failed to set service filter", c.error)), this._set("errorString", `Could not set service filter - ${c.error}`), n.reject(c.error)), s.onmessage = this._onMessage.bind(this), a = !0, n.resolve());
    };
    return s.onmessage = h, s.send(r), setTimeout(o, Ss), n.promise;
  }
  _serializeFilter(e, t) {
    const s = {};
    if (T(e) && T(t))
      return s;
    if (y(e) && e.geometry)
      try {
        const r = Ct(e.geometry);
        if (r.type !== "extent")
          throw new E(`Expected extent but found type ${r.type}`);
        s.geometry = JSON.stringify(r.shiftCentralMeridian());
      } catch (r) {
        W.error(new E("geoevent-connection", "Encountered an error when setting connection geometryDefinition", r));
      }
    return y(e) && e.where && e.where !== "1 = 1" && (s.where = e.where), y(t) && (s.outFields = t.join(",")), s;
  }
  _enrich(e) {
    if (!this._relatedFeatures)
      return e;
    const t = this._serviceDefinition.relatedFeatures.joinField, s = e.attributes[t];
    if (!this._relatedFeatures.has(s))
      return W.warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e), e;
    const { attributes: r, geometry: a } = this._relatedFeatures.get(s);
    for (const n in r)
      e.attributes[n] = r[n];
    return a && (e.geometry = a), e.geometry || e.centroid || W.error(new E("geoevent-connection", "Found malformed feature - no geometry found", e)), e;
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e, keepLatestArchive: t } = this._serviceDefinition, s = this._queryRelatedFeatures(e), r = this._queryArchive(t);
      await s;
      const a = await r;
      if (!a)
        return;
      for (const n of a.features)
        this.onFeature(this._enrich(n));
    } catch (e) {
      W.error(new E("geoevent-connection", "Encountered an error when querying buddy services", { error: e }));
    }
  }
  async _queryRelatedFeatures(e) {
    if (!e)
      return;
    const t = await this._queryBuddy(e.featuresUrl);
    this._addRelatedFeatures(t);
  }
  async _queryArchive(e) {
    if (e)
      return this._queryBuddy(e.featuresUrl);
  }
  async _queryBuddy(e) {
    const t = new (await import("./index-Ek1MTSEY.js").then((l) => l.kH)).default({ url: e }), { capabilities: s } = await t.load(), r = s.query.supportsMaxRecordCountFactor, a = s.query.supportsPagination, n = s.query.supportsCentroid, o = this._config.maxRecordCountFactor, h = t.capabilities.query.maxRecordCount, u = r ? h * o : h, c = new at();
    if (c.outFields = pe(this._config.outFields, ["*"]), c.where = pe(kt(this._config.filter, "where"), "1=1"), c.returnGeometry = !0, c.returnExceededLimitFeatures = !0, c.outSpatialReference = oe.fromJSON(this._config.spatialReference), n && (c.returnCentroid = !0), r && (c.maxRecordCountFactor = o), a)
      return c.num = u, t.destroy(), this._queryPages(e, c);
    const d = await ge(e, c, this._config.sourceSpatialReference);
    return t.destroy(), d.data;
  }
  async _queryPages(e, t, s = [], r = 0) {
    t.start = y(t.num) ? r * t.num : null;
    const { data: a } = await ge(e, t, this._config.sourceSpatialReference);
    return a.exceededTransferLimit && r < this._config.maxQueryDepth ? (a.features.forEach((n) => s.push(n)), this._queryPages(e, t, s, r + 1)) : (s.forEach((n) => a.features.push(n)), a);
  }
  _addRelatedFeatures(e) {
    const t = /* @__PURE__ */ new Map(), s = e.features, r = this._serviceDefinition.relatedFeatures.joinField;
    for (const a of s) {
      const n = a.attributes[r];
      t.set(n, a);
    }
    this._relatedFeatures = t;
  }
};
qe = O([he("geoscene.layers.graphics.sources.connections.GeoEventConnection")], qe);
const Fs = qe;
function Cs(i, e, t, s, r, a, n, o) {
  const h = i.path.indexOf("wss://") === 0 || i.path.indexOf("ws://") === 0, u = { source: i, sourceSpatialReference: e, spatialReference: t, geometryType: s, filter: r, maxReconnectionAttempts: a, maxReconnectionInterval: n, customParameters: o };
  return h ? new ae(u) : new Fs(u);
}
const ks = 2500;
function Ts(i, e) {
  const t = i.weakClone();
  if (y(i.geometry)) {
    const s = ct(e, i.geometry.coords[0]), r = ht(e, i.geometry.coords[1]);
    t.geometry = new K([], [s, r]);
  }
  return t;
}
function qs(i) {
  return i === "esriGeometryPoint" ? Ts : (e, t) => {
    const s = e.weakClone(), r = new K(), a = !1, n = !1, o = qt(r, e.geometry, a, n, i, t, !1, !1);
    return s.geometry = o, s;
  };
}
function Ms(i) {
  return i === "esriGeometryPoint" ? (e) => y(e.geometry) ? { minX: e.geometry.coords[0], minY: e.geometry.coords[1], maxX: e.geometry.coords[0], maxY: e.geometry.coords[1] } : { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 } : (e) => {
    let t = 1 / 0, s = 1 / 0, r = -1 / 0, a = -1 / 0;
    return y(e.geometry) && e.geometry.forEachVertex((n, o) => {
      t = Math.min(t, n), s = Math.min(s, o), r = Math.max(r, n), a = Math.max(a, o);
    }), { minX: t, minY: s, maxX: r, maxY: a };
  };
}
function Es(i, e) {
  const t = Mt(9, Ms(e));
  return t.load(i), t;
}
function Rs(i, e) {
  return i.search({ minX: e.bounds[0], minY: e.bounds[1], maxX: e.bounds[2], maxY: e.bounds[3] });
}
class Os {
  constructor(e, t) {
    this.onUpdate = e, this._geometryType = t, this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  get _features() {
    const e = [];
    return this._objectIdToFeature.forEach((t) => e.push(t)), e;
  }
  add(e) {
    this._objectIdToFeature.set(e.objectId, e), this._index = null;
  }
  get(e) {
    return this._objectIdToFeature.has(e) ? this._objectIdToFeature.get(e) : null;
  }
  forEach(e) {
    this._objectIdToFeature.forEach(e);
  }
  search(e) {
    return this._index || (this._index = Es(this._features, this._geometryType)), Rs(this._index, e);
  }
  removeById(e) {
    const t = this._objectIdToFeature.get(e);
    return t ? (this._objectIdToFeature.delete(e), this._index = null, t) : null;
  }
  update(e, t) {
    this.onUpdate(e, t);
  }
  get size() {
    return this._objectIdToFeature.size;
  }
}
let As = class extends dt {
  constructor(e) {
    super(e), this.type = "geoevent", this._dataReceiveEventEnabled = !1, this._level = 0, this._updateInfo = { websocket: 0, client: 0 };
    const { outSR: t } = e, { geometryType: s, objectIdField: r, timeInfo: a, purgeOptions: n, source: o, spatialReference: h, serviceFilter: u, maxReconnectionAttempts: c, maxReconnectionInterval: d, updateInterval: l, enableDataReceived: g, customParameters: p } = e.serviceInfo, _ = new Os(this._onUpdate.bind(this), s), I = new Is(_, r, a, n), f = Cs(o, h, t, s, u, c, d, p);
    this._store = _, this._manager = I, this._connection = f, this._quantize = qs(s), this._dataReceiveEventEnabled = g, this._handles = [this._connection.on("feature", (v) => this._onFeature(v)), this._connection.watch("connectionStatus", (v) => this.events.emit("connectionStatus", v)), this._connection.watch("errorString", (v) => this.events.emit("errorString", v))], this._initUpdateInterval = () => {
      let v = performance.now();
      this._updateIntervalId = setInterval(() => {
        const b = performance.now(), w = b - v;
        if (w > ks) {
          v = b;
          const S = Math.round(this._updateInfo.client / (w / 1e3)), m = Math.round(this._updateInfo.websocket / (w / 1e3));
          this._updateInfo.client = 0, this._updateInfo.websocket = 0, this.events.emit("updateRate", { client: S, websocket: m });
        }
        e.canAcceptRequest() && this._manager.checkForUpdates();
      }, l);
    }, this._initUpdateInterval();
  }
  destroy() {
    super.destroy(), this._clearUpdateInterval(), this._handles.forEach((e) => e.remove()), this._connection.destroy();
  }
  _fetchDataTile() {
  }
  pauseStream() {
    this._clearUpdateInterval();
  }
  resumeStream() {
    this._initUpdateInterval();
  }
  enableEvent(e, t) {
    e === "data-received" && (this._dataReceiveEventEnabled = t);
  }
  get updating() {
    return !1;
  }
  subscribe(e) {
    super.subscribe(e);
    const t = this._subscriptions.get(e.id);
    this._level = e.level;
    const s = this._getTileFeatures(e);
    this._onMessage({ type: "append", id: e.key.id, addOrUpdate: s, end: !0 }), t.didSend = !0;
  }
  unsubscribe(e) {
    super.unsubscribe(e);
  }
  *readers(e) {
    const t = this._subscriptions.get(e), { tile: s } = t;
    yield this._getTileFeatures(s);
    for (const r of t.requests.stream.entries)
      y(r) && y(r.addOrUpdate) && (yield r.addOrUpdate);
  }
  createTileQuery(e) {
    throw new Error("Service does not support tile  queries");
  }
  async resend() {
    this._subscriptions.forEach((e) => {
      const { tile: t } = e, s = { type: "append", id: t.id, addOrUpdate: this._getTileFeatures(t), end: !0 };
      this._onMessage(s);
    });
  }
  _getTileFeatures(e) {
    const t = this._store.search(e).map((s) => this._quantize(s, e.transform));
    return X.fromOptimizedFeatures(t, this._serviceInfo, e.transform);
  }
  _onFeature(e) {
    this._updateInfo.websocket++;
    try {
      this._dataReceiveEventEnabled && this.events.emit("feature", e);
      const t = Tt(e, this._serviceInfo.geometryType, !1, !1, this._serviceInfo.objectIdField);
      this._manager.add(t);
    } catch {
    }
  }
  _clearUpdateInterval() {
    clearInterval(this._updateIntervalId), this._updateIntervalId = 0;
  }
  _onUpdate(e, t) {
    y(e) && (this._updateInfo.client += e.length), this._subscriptions.forEach((s, r) => {
      s.didSend && s.tile.level === this._level && this._onMessage({ type: "append", id: r, addOrUpdate: null, clear: !0, end: !1 });
    }), this._subscriptions.forEach((s, r) => {
      if (!s.didSend || s.tile.level !== this._level)
        return;
      const a = s.tile, n = { type: "append", id: r, addOrUpdate: this._getTileFeatures(a), remove: [], end: !0, status: z.empty() };
      s.requests.stream.enqueue(n), this._onMessage(n);
    });
  }
};
const Us = ne.getLogger("geoscene.views.2d.layers.features.sources.FeatureSource");
let $s = class extends Ae {
  constructor(e) {
    super(e);
  }
  async _fetchDataTile(e) {
    const r = this._subscriptions.get(e.key.id);
    let a = !1, n = 0, o = 0;
    const h = (d, l) => {
      o--, Q(r);
      const g = e.id, p = d.reader, _ = d.query;
      if (!p.exceededTransferLimit) {
        if (a = !0, l !== 0 && !p.hasFeatures) {
          const v = { id: g, addOrUpdate: p, end: o === 0, type: "append" };
          return r.add({ message: v, query: _ }), void this._onMessage(v);
        }
        const f = { id: g, addOrUpdate: p, end: o === 0, type: "append" };
        return r.add({ message: f, query: _ }), void this._onMessage(f);
      }
      const I = { id: g, addOrUpdate: p, end: a && o === 0, type: "append" };
      r.add({ message: I, query: _ }), this._onMessage(I);
    };
    let u = 0, c = 0;
    for (; !a && c++ < 20; ) {
      let d;
      for (let l = 0; l < u + 1; l++) {
        const g = n++;
        o++, d = this._fetchDataTilePage(e, g, r).then((p) => p && h(p, g)).catch((p) => {
          a = !0, _e(p) || (Us.error(new E("mapview-query-error", "Encountered error when fetching tile", { tile: e, error: p })), this._onMessage({ id: e.id, addOrUpdate: null, end: a, type: "append" }));
        });
      }
      await d, Q(r), u = Math.min(u + 2, 6);
    }
  }
  async _fetchDataTilePage(e, t, s) {
    Q(s);
    const r = this._queryInfo, a = { start: this.pageSize * t, num: this.pageSize, returnExceededLimitFeatures: !0, quantizationParameters: e.getQuantizationParameters() };
    y(this.maxRecordCountFactor) && (a.maxRecordCountFactor = this.maxRecordCountFactor);
    const n = this.createTileQuery(e, a);
    try {
      const o = s.signal, h = await this._queue.push({ tile: e, query: n, signal: o, depth: t });
      return Q(s), h ? r !== this._queryInfo ? this._fetchDataTilePage(e, t, s) : { reader: h, query: n } : null;
    } catch (o) {
      return Ce(o), null;
    }
  }
};
const Ps = ne.getLogger("geoscene.views.2d.layers.features.sources.SnapshotFeatureSource");
function js(i, e, t) {
  const s = i.getXHydrated(), r = i.getYHydrated(), a = e.getColumnForX(s), n = Math.floor(e.normalizeCol(a));
  return `${t}/${Math.floor(e.getRowForY(r))}/${n}`;
}
function we(i, e) {
  if (T(i))
    return null;
  const t = e.transform, s = i.getQuantizationTransform();
  if (T(s)) {
    const [I, f] = t.scale, [v, b] = t.translate, w = -v / I, S = 1 / I, m = b / f, C = 1 / -f;
    return i.transform(w, m, S, C);
  }
  const [r, a] = s.scale, [n, o] = s.translate, [h, u] = t.scale, [c, d] = t.translate, l = r / h, g = (n - c) / h, p = a / u, _ = (-o + d) / u;
  return i.transform(g, _, l, p);
}
class Ls extends Ae {
  constructor(e) {
    super(e), this.mode = "snapshot", this._loading = !0, this._controller = new AbortController(), this._downloadPromise = null, this._didSendEnd = !1, this._queries = new Array(), this._invalidated = !1, this._hasAggregates = !1, this._random = new Et(1e3), this._store = e.store, this._markedIdsBufId = this._store.storage.createBitset();
  }
  destroy() {
    super.destroy(), this._controller.abort();
  }
  get loading() {
    return this._loading;
  }
  get _signal() {
    return this._controller.signal;
  }
  update(e, t) {
    super.update(e, t), this._hasAggregates = e.targets.aggregate;
  }
  async resend(e = !1) {
    if (await this._downloadPromise, this._invalidated || e) {
      const s = je(this._schema.featureCount, "Expected featureCount to be defined");
      return this._invalidated = !1, this._subscriptions.forEach((r) => r.clear()), this._downloadPromise = this._download(s), void await this._downloadPromise;
    }
    const t = this._queries.map(({ query: s, reader: r }) => this._sendPatchQuery(s, r));
    await Promise.all(t), this._subscriptions.forEach((s) => {
      s.requests.done.forEach((r) => this._onMessage(r.message));
    });
  }
  async refresh() {
    await this.resend(!0);
  }
  async _sendPatchQuery(e, t) {
    const s = y(e.outFields) ? e.outFields : [], r = this._queryInfo.outFields, a = r.filter((u) => s.indexOf(u) === -1);
    if (!a.length)
      return;
    const n = e.clone(), o = this._signal;
    n.returnGeometry = !1, n.returnCentroid = !1, n.outFields = a, e.outFields = r;
    const h = await this._queue.push({ query: n, depth: 0, signal: o });
    Q({ signal: o }), t.joinAttributes(h);
  }
  async _fetchDataTile(e) {
    if (!this._downloadPromise) {
      const h = je(this._schema.featureCount, "Expected featureCount to be defined");
      this._downloadPromise = this._download(h);
    }
    const t = this._store.search(e), s = this._subscriptions.get(e.key.id), r = t.length - 1;
    for (let h = 0; h < r; h++) {
      const u = we(t[h], e), c = { type: "append", id: e.id, addOrUpdate: u, end: !1, status: z.empty() };
      s.add({ query: null, message: c }), this._hasAggregates || await Oe(1), this._onMessage(c);
    }
    const a = we(r >= 0 ? t[r] : null, e), n = this._didSendEnd, o = { type: "append", id: e.id, addOrUpdate: a, end: n, status: z.empty() };
    s.add({ query: null, message: o }), this._onMessage(o);
  }
  async _download(e) {
    try {
      await this.whenInitialized();
      const t = this._store.storage.getBitset(this._markedIdsBufId), s = /* @__PURE__ */ new Set();
      t.clear();
      const r = Math.ceil(e / this.pageSize), a = Array.from({ length: r }, (n, o) => o).sort((n, o) => this._random.getInt() - this._random.getInt()).map((n) => this._downloadPage(n, t, s));
      await Promise.all(a), this._store.sweepFeatures(t, this._store.storage), this._store.sweepFeatureSets(s);
    } catch (t) {
      Ps.error("mapview-snapshot-source", "Encountered and error when downloading feature snapshot", t);
    }
    this._sendEnd(), this._loading = !1;
  }
  async _downloadPage(e, t, s) {
    const r = this.pageSize, a = { start: e * r, num: r, cacheHint: !0 };
    y(this.maxRecordCountFactor) && (a.maxRecordCountFactor = this.maxRecordCountFactor);
    const n = this.createQuery(a), o = this._signal, h = await this._queue.push({ query: n, depth: e, signal: o });
    Q({ signal: o }), this._queries.push({ query: n, reader: h }), this._store.insert(h), s.add(h.instance);
    const u = h.getCursor();
    for (; u.next(); )
      t.set(u.getDisplayId());
    this._send(h);
  }
  _send(e) {
    if (!this._subscriptions.size)
      return;
    let t = null;
    const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
    this._subscriptions.forEach((n) => {
      var o;
      const h = n.tile;
      s.set(h.key.id, null), t = h.tileInfoView, r.add(h.level);
      const { row: u, col: c } = h.key, d = `${h.level}/${u}/${c}`, l = (o = a.get(d)) != null ? o : [];
      l.push(n), a.set(d, l);
    });
    for (const n of r) {
      const o = t.getLODInfoAt(n), h = e.getCursor();
      for (; h.next(); ) {
        const u = js(h, o, n), c = h.getIndex();
        if (a.has(u))
          for (const d of a.get(u)) {
            const l = d.tile.id;
            let g = s.get(l);
            T(g) && (g = [], s.set(l, g)), g.push(c);
          }
      }
    }
    s.forEach((n, o) => {
      if (y(n)) {
        const h = this._subscriptions.get(o), u = { type: "append", id: o, addOrUpdate: we(zt.from(e, n), h.tile), end: !1, status: z.empty() };
        h.add({ query: null, message: u }), this._onMessage(u);
      }
    });
  }
  _sendEnd() {
    this._subscriptions.forEach((e) => {
      const t = { type: "append", id: e.tile.id, addOrUpdate: null, end: !0, status: z.empty() };
      e.add({ query: null, message: t }), this._onMessage(t);
    }), this._didSendEnd = !0;
  }
}
function Gs(i, e, t, s, r, a) {
  const n = Ns(i, e, t, s, r, a);
  switch (n.type) {
    case "feature":
      switch (n.origin) {
        case "hosted":
        case "local":
          return new $s(n);
        case "snapshot":
          return new Ls(n);
        case "unknown":
          return new vs(n);
      }
    case "geoevent":
      return new As(n);
  }
}
function Ns(i, e, t, s, r, a) {
  switch (i.type) {
    case "snapshot":
      return { type: "feature", origin: "snapshot", featureCount: pe(i.featureCount, 0), serviceInfo: i, onMessage: s, outSR: e, tileInfoView: t, canAcceptRequest: r, store: a };
    case "stream":
      return { type: "geoevent", serviceInfo: i, onMessage: s, outSR: e, canAcceptRequest: r };
    case "memory":
    case "on-demand":
      return { type: "feature", serviceInfo: i, onMessage: s, outSR: e, origin: n(i.source), tileInfoView: t, canAcceptRequest: r };
  }
  function n(o) {
    return Array.isArray(o) ? "local" : "path" in o && Rt(o.path) ? "hosted" : "unknown";
  }
}
function Ds(i, e) {
  let t = -90, s = 90, r = -180, a = 180;
  for (let n = 0; n < e; n++) {
    const o = Math.ceil((n + 1) / 2), h = Math.floor((n + 1) / 2), u = 1 - n % 2, c = 30 - (3 * o + 2 * h), d = 30 - (2 * o + 3 * h), l = 3 * u + 2 * (1 - u), g = 2 * u + 3 * (1 - u), p = 3 * u + 7 * (1 - u) << d, _ = (7 * u + 3 * (1 - u) << c & i.geohashX) >> c, I = (p & i.geohashY) >> d;
    for (let f = l - 1; f >= 0; f--) {
      const v = (r + a) / 2, b = _ & 1 << f ? 1 : 0;
      r = (1 - b) * r + b * v, a = (1 - b) * v + b * a;
    }
    for (let f = g - 1; f >= 0; f--) {
      const v = (t + s) / 2, b = I & 1 << f ? 1 : 0;
      t = (1 - b) * t + b * v, s = (1 - b) * v + b * s;
    }
  }
  return [r, t, a, s];
}
function We(i, e, t, s) {
  s % 2 && (s += 1);
  let r = 0, a = 0, n = -90, o = 90, h = -180, u = 180;
  for (let c = 0; c < s / 2; c++) {
    for (let d = 0; d < 5; d++) {
      const l = (h + u) / 2, g = t > l ? 1 : 0;
      r |= g << 29 - (d + 5 * c), h = (1 - g) * h + g * l, u = (1 - g) * l + g * u;
    }
    for (let d = 0; d < 5; d++) {
      const l = (n + o) / 2, g = e > l ? 1 : 0;
      a |= g << 29 - (d + 5 * c), n = (1 - g) * n + g * l, o = (1 - g) * l + g * o;
    }
  }
  i.geohashX = r, i.geohashY = a;
}
function Ze(i, e, t, s, r) {
  r % 2 && (r += 1);
  let a = 0, n = 0, o = -90, h = 90, u = -180, c = 180;
  for (let d = 0; d < r / 2; d++) {
    for (let l = 0; l < 5; l++) {
      const g = (u + c) / 2, p = s > g ? 1 : 0;
      a |= p << 29 - (l + 5 * d), u = (1 - p) * u + p * g, c = (1 - p) * g + p * c;
    }
    for (let l = 0; l < 5; l++) {
      const g = (o + h) / 2, p = t > g ? 1 : 0;
      n |= p << 29 - (l + 5 * d), o = (1 - p) * o + p * g, h = (1 - p) * g + p * h;
    }
  }
  i[2 * e] = a, i[2 * e + 1] = n;
}
class zs {
  constructor(e = [], t, s = 8096) {
    this._nodes = 0, this._root = new Je(0, 0, 0), this._statisticFields = e, this._pool = s ? new fe(8096) : null, this._serviceInfo = t;
  }
  _acquire(e, t, s) {
    this._nodes++;
    let r = null;
    return y(this._pool) && (r = this._pool.dequeue()), y(r) ? r.realloc(e, t, s) : new Je(e, t, s);
  }
  _release(e) {
    this._nodes--, y(this._pool) && this._pool.enqueue(e);
  }
  get count() {
    return this._root.count;
  }
  get size() {
    return this._nodes;
  }
  get poolSize() {
    return Ot(this._pool, 0, (e) => e.size);
  }
  get depth() {
    let e = 0;
    return this._forEachNode((t) => e = Math.max(e, t.depth)), e;
  }
  dropLevels(e) {
    this._forEachNode((t) => {
      if (t.depth >= e)
        for (let s = 0; s < t.children.length; s++) {
          const r = t.children[s];
          t.children[s] = null, r && this._release(r);
        }
    });
  }
  clear() {
    this.dropLevels(0);
  }
  insert(e, t, s = 0) {
    const r = X.fromOptimizedFeatures([e], this._serviceInfo).getCursor();
    r.next();
    const a = r.readGeometry();
    if (!a)
      return;
    const [n, o] = a.coords, h = e.geohashX, u = e.geohashY;
    this.insertCursor(r, e.displayId, n, o, h, u, t, s);
  }
  insertCursor(e, t, s, r, a, n, o, h = 0) {
    let u = this._root, c = 0, d = 0, l = 0;
    for (; u !== null; ) {
      if (u.depth >= h && (u.count += 1, u.xTotal += s, u.yTotal += r, u.xGeohashTotal += a, u.yGeohashTotal += n, u.displayId = t, this._updateStatisticsCursor(e, u, 1)), c >= o)
        return void u.add(t);
      const g = Math.ceil((c + 1) / 2), p = Math.floor((c + 1) / 2), _ = 1 - c % 2, I = 30 - (3 * g + 2 * p), f = 30 - (2 * g + 3 * p), v = (a & 7 * _ + 3 * (1 - _) << I) >> I, b = (n & 3 * _ + 7 * (1 - _) << f) >> f, w = v + b * (8 * _ + 4 * (1 - _));
      d = d << 3 * _ + 2 * (1 - _) | v, l = l << 2 * _ + 3 * (1 - _) | b, u.children[w] == null && (u.children[w] = this._acquire(d, l, c + 1)), c += 1, u = u.children[w];
    }
  }
  remove(e, t) {
    const s = X.fromOptimizedFeatures([e], this._serviceInfo).getCursor();
    s.next();
    const r = s.readGeometry();
    if (!r)
      return;
    const [a, n] = r.coords, o = e.geohashX, h = e.geohashY;
    this.removeCursor(s, a, n, o, h, t);
  }
  removeCursor(e, t, s, r, a, n) {
    let o = this._root, h = 0;
    for (; o !== null; ) {
      if (o.count -= 1, o.xTotal -= t, o.yTotal -= s, o.xGeohashTotal -= r, o.yGeohashTotal -= a, this._updateStatisticsCursor(e, o, -1), h >= n)
        return void o.remove(e.getDisplayId());
      const u = Math.ceil((h + 1) / 2), c = Math.floor((h + 1) / 2), d = 1 - h % 2, l = 30 - (3 * u + 2 * c), g = 30 - (2 * u + 3 * c), p = ((r & 7 * d + 3 * (1 - d) << l) >> l) + ((a & 3 * d + 7 * (1 - d) << g) >> g) * (8 * d + 4 * (1 - d)), _ = o.children[p];
      _.count === 1 && (this._release(_), o.children[p] = null), h += 1, o = _;
    }
  }
  find(e, t, s) {
    return this._root.find(e, t, s, 0, 0, 0);
  }
  findSingleOccupancyNode(e, t, s, r, a) {
    let n = this._root;
    for (; n !== null; ) {
      const o = n.depth, h = n.xNode, u = n.yNode, c = 1 - o % 2, d = n.xGeohashTotal / n.count, l = n.yGeohashTotal / n.count;
      if (n.count === 1 && e < d && d <= s && t < l && l <= r)
        return n;
      if (o >= a) {
        n = n.next;
        continue;
      }
      const g = Math.ceil((o + 1) / 2), p = Math.floor((o + 1) / 2), _ = 30 - (3 * g + 2 * p), I = 30 - (2 * g + 3 * p), f = ~((1 << _) - 1), v = ~((1 << I) - 1), b = (e & f) >> _, w = (t & v) >> I, S = (s & f) >> _, m = (r & v) >> I, C = h << 3 * c + 2 * (1 - c), q = u << 2 * c + 3 * (1 - c), x = C + 8 * c + 4 * (1 - c), k = q + 4 * c + 8 * (1 - c), F = Math.max(C, b), P = Math.max(q, w), U = Math.min(x, S), G = Math.min(k, m);
      let $ = null, j = null;
      for (let L = P; L <= G; L++)
        for (let R = F; R <= U; R++) {
          const M = R - C + (L - q) * (8 * c + 4 * (1 - c)), A = n.children[M];
          A && ($ || ($ = A, $.next = n.next), j && (j.next = A), j = A, A.next = n.next);
        }
      n = $ || n.next;
    }
    return null;
  }
  getRegionDisplayIds(e, t, s, r, a) {
    let n = this._root;
    const o = [];
    for (; n !== null; ) {
      const h = n.depth, u = n.xNode, c = n.yNode;
      if (h >= a) {
        const j = n.xGeohashTotal / n.count, L = n.yGeohashTotal / n.count;
        e <= j && j <= s && t <= L && L <= r && n.displayIds.forEach((R) => o.push(R)), n = n.next;
        continue;
      }
      const d = Math.ceil((h + 1) / 2), l = Math.floor((h + 1) / 2), g = 1 - h % 2, p = 30 - (3 * d + 2 * l), _ = 30 - (2 * d + 3 * l), I = ~((1 << p) - 1), f = ~((1 << _) - 1), v = (e & I) >> p, b = (t & f) >> _, w = (s & I) >> p, S = (r & f) >> _, m = u << 3 * g + 2 * (1 - g), C = c << 2 * g + 3 * (1 - g), q = m + 8 * g + 4 * (1 - g), x = C + 4 * g + 8 * (1 - g), k = Math.max(m, v), F = Math.max(C, b), P = Math.min(q, w), U = Math.min(x, S);
      let G = null, $ = null;
      for (let j = F; j <= U; j++)
        for (let L = k; L <= P; L++) {
          const R = L - m + (j - C) * (8 * g + 4 * (1 - g)), M = n.children[R];
          M && (G || (G = M, G.next = n.next), $ && ($.next = M), $ = M, M.next = n.next);
        }
      n = G || n.next;
    }
    return o;
  }
  getRegionStatistics(e, t, s, r, a) {
    let n = this._root, o = 0, h = 0, u = 0;
    const c = {};
    let d = 0;
    for (; n !== null; ) {
      const l = n.depth, g = n.xNode, p = n.yNode;
      if (l >= a) {
        const A = n.xGeohashTotal / n.count, Z = n.yGeohashTotal / n.count;
        e < A && A <= s && t < Z && Z <= r && (o += n.count, h += n.xTotal, u += n.yTotal, n.count === 1 && (d = n.displayId), this._aggregateStatistics(c, n.statistics)), n = n.next;
        continue;
      }
      const _ = Math.ceil((l + 1) / 2), I = Math.floor((l + 1) / 2), f = 1 - l % 2, v = 30 - (3 * _ + 2 * I), b = 30 - (2 * _ + 3 * I), w = ~((1 << v) - 1), S = ~((1 << b) - 1), m = (e & w) >> v, C = (t & S) >> b, q = (s & w) >> v, x = (r & S) >> b, k = g << 3 * f + 2 * (1 - f), F = p << 2 * f + 3 * (1 - f), P = k + 8 * f + 4 * (1 - f), U = F + 4 * f + 8 * (1 - f), G = Math.max(k, m), $ = Math.max(F, C), j = Math.min(P, q), L = Math.min(U, x);
      let R = null, M = null;
      for (let A = $; A <= L; A++)
        for (let Z = G; Z <= j; Z++) {
          const lt = Z - k + (A - F) * (8 * f + 4 * (1 - f)), N = n.children[lt];
          if (N) {
            if (A !== $ && A !== L && Z !== G && Z !== j) {
              const $e = N.xGeohashTotal / N.count, Pe = N.yGeohashTotal / N.count;
              e < $e && $e <= s && t < Pe && Pe <= r && (o += N.count, h += N.xTotal, u += N.yTotal, N.count === 1 && (d = N.displayId), this._aggregateStatistics(c, N.statistics));
              continue;
            }
            R || (R = N, R.next = n.next), M && (M.next = N), M = N, N.next = n.next;
          }
        }
      n = R || n.next;
    }
    return { count: o, attributes: this._normalizeStatistics(c, o), xTotal: h, yTotal: u, referenceId: d };
  }
  _forEachNode(e) {
    let t = this._root;
    for (; t !== null; ) {
      const s = this._linkChildren(t) || t.next;
      e(t), t = s;
    }
  }
  _linkChildren(e) {
    let t = null, s = null;
    for (let r = 0; r <= e.children.length; r++) {
      const a = e.children[r];
      a && (t || (t = a, t.next = e.next), s && (s.next = a), s = a, a.next = e.next);
    }
    return t;
  }
  _updateStatisticsCursor(e, t, s) {
    for (const r of this._statisticFields) {
      const a = r.name, n = r.inField ? e.readAttribute(r.inField) : e.getComputedNumericAtIndex(r.inFieldIndex);
      switch (r.statisticType) {
        case "norm": {
          t.statistics[a] || (t.statistics[a] = {});
          const o = r.inNormalizationField, h = e.readAttribute(o), u = t.statistics[a].onStatisticField || 0, c = t.statistics[a].onStatisticNormalizationField || 0;
          n == null || isNaN(n) || h == null || h === 0 || isNaN(h) || (t.statistics[a].onStatisticField = u + s * n, t.statistics[a].onStatisticNormalizationField = c + s * h);
          break;
        }
        case "sum":
        case "avg": {
          t.statistics[a] || (t.statistics[a] = { value: 0, nanCount: 0 });
          const o = t.statistics[a].value, h = t.statistics[a].nanCount;
          n == null || isNaN(n) ? t.statistics[a].nanCount = h + s : t.statistics[a].value = o + s * n;
          break;
        }
        case "avg_angle": {
          t.statistics[a] || (t.statistics[a] = { x: 0, y: 0, nanCount: 0 });
          const o = t.statistics[a].x, h = t.statistics[a].y, u = t.statistics[a].nanCount, c = Math.PI / 180;
          n == null || isNaN(n) ? t.statistics[a].nanCount = u + s : (t.statistics[a].x = o + s * Math.cos(n * c), t.statistics[a].y = h + s * Math.sin(n * c));
          break;
        }
        case "mode": {
          t.statistics[a] || (t.statistics[a] = {});
          const o = t.statistics[a][n] || 0;
          t.statistics[a][n] = o + s;
          break;
        }
      }
    }
  }
  _aggregateStatistics(e, t) {
    for (const s of this._statisticFields) {
      const r = s.name;
      switch (s.statisticType) {
        case "sum":
        case "avg":
        case "avg_angle":
        case "mode":
        case "norm":
          e[r] || (e[r] = {});
          for (const a in t[r]) {
            const n = e[r][a] || 0;
            e[r][a] = n + t[r][a];
          }
      }
    }
  }
  _normalizeStatistics(e, t) {
    const s = {};
    for (const r of this._statisticFields) {
      const a = r.name;
      switch (r.statisticType) {
        case "norm": {
          const n = e[a];
          if (t && n.onStatisticNormalizationField == null)
            break;
          if (t && n.onStatisticNormalizationField) {
            s[a] = n.onStatisticField / n.onStatisticNormalizationField;
            break;
          }
          s[a] = 0;
          break;
        }
        case "sum": {
          if (!t)
            break;
          const { value: n, nanCount: o } = e[a];
          if (!(t - o))
            break;
          s[a] = n;
          break;
        }
        case "avg": {
          if (!t)
            break;
          const { value: n, nanCount: o } = e[a];
          if (!(t - o))
            break;
          s[a] = n / (t - o);
          break;
        }
        case "avg_angle": {
          if (!t)
            break;
          const { x: n, y: o, nanCount: h } = e[a];
          if (!(t - h))
            break;
          const u = n / (t - h), c = o / (t - h), d = 180 / Math.PI, l = Math.atan2(c, u) * d;
          s[a] = l;
          break;
        }
        case "mode": {
          const n = e[a];
          let o = 0, h = null;
          for (const u in n) {
            const c = n[u];
            c > o && (o = c, h = u);
          }
          s[a] = h === "null" ? null : h;
          break;
        }
      }
    }
    return s;
  }
}
class Je {
  constructor(e, t, s) {
    this.count = 0, this.xTotal = 0, this.yTotal = 0, this.statistics = {}, this.displayId = 0, this.displayIds = /* @__PURE__ */ new Set(), this.next = null, this.depth = 0, this.xNode = 0, this.yNode = 0, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.children = new Array(32);
    for (let r = 0; r < this.children.length; r++)
      this.children[r] = null;
    this.xNode = e, this.yNode = t, this.depth = s;
  }
  realloc(e, t, s) {
    for (let r = 0; r < this.children.length; r++)
      this.children[r] = null;
    return this.xNode = e, this.yNode = t, this.depth = s, this.next = null, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.xTotal = 0, this.yTotal = 0, this.count = 0, this.statistics = {}, this.displayIds.clear(), this;
  }
  add(e) {
    this.displayIds.add(e);
  }
  remove(e) {
    this.displayIds.delete(e);
  }
  getLngLatBounds() {
    const e = this.depth, t = Math.ceil(e / 2), s = Math.floor(e / 2), r = 30 - (3 * t + 2 * s), a = 30 - (2 * t + 3 * s), n = this.xNode << r, o = this.yNode << a;
    return Ds({ geohashX: n, geohashY: o }, this.depth);
  }
  find(e, t, s, r, a, n) {
    if (r >= s)
      return this;
    const o = 1 - r % 2, h = 3 * o + 2 * (1 - o), u = 2 * o + 3 * (1 - o), c = 30 - a - h, d = 30 - n - u, l = ((e & 7 * o + 3 * (1 - o) << c) >> c) + ((t & 3 * o + 7 * (1 - o) << d) >> d) * (8 * o + 4 * (1 - o)), g = this.children[l];
    return g == null ? null : g.find(e, t, s, r + 1, a + h, n + u);
  }
}
const Se = 12, Ke = 1;
class Ue extends $t {
  constructor(e, t, s, r, a) {
    super(new K([], [t, s]), r, null, e), this.geohashBoundsInfo = a;
  }
  get count() {
    return this.attributes.cluster_count;
  }
  static create(e, t, s, r, a, n, o, h) {
    const u = new Ue(t, s, r, n, o);
    return u.displayId = e.createDisplayId(!0), u.referenceId = h, u.tileLevel = a, u;
  }
  update(e, t, s, r, a, n) {
    return this.geometry.coords[0] = e, this.geometry.coords[1] = t, this.tileLevel = s, this.attributes = r, this.geohashBoundsInfo = a, this.referenceId = null, this.referenceId = n, this;
  }
  toJSON() {
    return { objectId: this.objectId, referenceId: this.attributes.cluster_count === 1 ? this.referenceId : null, attributes: { ...this.attributes, clusterId: this.objectId }, geometry: { x: this.geometry.coords[0], y: this.geometry.coords[1] } };
  }
}
function re(i) {
  return 57.29577951308232 * i;
}
class Qs extends Qt {
  constructor(e, t, s, r) {
    super(e, s), this.events = new Me(), this._geohashLevel = 0, this._tileLevel = 0, this._aggregateValueRanges = {}, this._aggregateValueRangesChanged = !1, this._geohashBuf = [], this._clusters = /* @__PURE__ */ new Map(), this._tiles = /* @__PURE__ */ new Map(), this._serviceInfo = r, this.geometryInfo = e.geometryInfo, this._spatialReference = t, this._projectionSupportCheck = Xt(t, oe.WGS84), this._bitsets.geohash = s.getBitset(s.createBitset()), this._bitsets.inserted = s.getBitset(s.createBitset());
  }
  async updateSchema(e, t) {
    const s = this._schema;
    try {
      await super.updateSchema(e, t), await this._projectionSupportCheck;
    } catch {
    }
    const r = xe(s, t);
    t && (!T(r) || e.source || e.storage.filters) ? ((it(r, "params.fields") || !this._tree || e.source) && (this._tree = new zs(this._statisticFields, this._serviceInfo), this._rebuildTree(), V("geoscene-2d-update-debug") && console.debug("Aggregate mesh needs update due to tree changing")), V("geoscene-2d-update-debug") && console.debug("Applying Update - ClusterStore:", r), e.targets[t.name] = !0, e.mesh = !1, this._aggregateValueRanges = {}) : s && (e.mesh = !0);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(e, t) {
    this._bitsets.inserted.forEachSet((s) => {
      if (!e.has(s)) {
        const r = t.lookupByDisplayIdUnsafe(s);
        this._remove(r);
      }
    });
  }
  sweepClusters(e, t, s) {
    this._clusters.forEach((r, a) => {
      r && r.tileLevel !== s && (e.releaseDisplayId(r.displayId), t.unsetAttributeData(r.displayId), this._clusters.delete(a));
    });
  }
  onTileData(e, t, s, r, a = !0) {
    if (!this._schema || T(t.addOrUpdate))
      return t;
    const n = this._getTransforms(e, this._spatialReference);
    {
      const u = t.addOrUpdate.getCursor();
      for (; u.next(); )
        this._update(u, r);
    }
    if (t.status.mesh || !a)
      return t;
    const o = new Array(), h = this._schema.params.clusterRadius;
    this._getClustersForTile(o, e, h, s, n), t.addOrUpdate = X.fromOptimizedFeatures(o, this._serviceInfo), t.addOrUpdate.attachStorage(s), t.end = !0;
    {
      const u = t.addOrUpdate.getCursor();
      for (; u.next(); ) {
        const c = u.getDisplayId();
        this._bitsets.computed.unset(c), this.setComputedAttributes(s, u, c, e.scale);
      }
    }
    return this._aggregateValueRangesChanged && t.end && (this.events.emit("valueRangesChanged", { valueRanges: this._aggregateValueRanges }), this._aggregateValueRangesChanged = !1), t;
  }
  onTileUpdate({ added: e, removed: t }) {
    if (e.length) {
      const r = e[0].level;
      this._tileLevel = r, this._setGeohashLevel(r);
    }
    if (!this._schema)
      return;
    const s = this._schema.params.clusterRadius;
    t.forEach((r) => {
      this._tiles.delete(r.key.id), this._markTileClustersForDeletion(r, s);
    });
  }
  getAggregate(e) {
    for (const t of this._clusters.values())
      if (((t == null ? void 0 : t.displayId) & Ne) == (e & Ne))
        return t.toJSON();
    return null;
  }
  getAggregates() {
    const e = [];
    for (const t of this._clusters.values())
      (t == null ? void 0 : t.tileLevel) === this._tileLevel && e.push(t.toJSON());
    return e;
  }
  getDisplayId(e) {
    const t = this._clusters.get(e);
    return t ? t.displayId : null;
  }
  getFeatureDisplayIdsForAggregate(e) {
    const t = this._clusters.get(e);
    if (!t)
      return [];
    const s = t.geohashBoundsInfo;
    return this._tree.getRegionDisplayIds(s.xLL, s.yLL, s.xTR, s.yTR, s.level);
  }
  getDisplayIdForReferenceId(e) {
    for (const t of this._clusters.values())
      if ((t == null ? void 0 : t.referenceId) === e)
        return t.displayId;
    return null;
  }
  getAggregateValueRanges() {
    return this._aggregateValueRanges;
  }
  forEach(e) {
    for (const [t, s] of this._clusters)
      s && e(s, t);
  }
  size() {
    let e = 0;
    return this.forEach((t) => e++), e;
  }
  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }
  _remove(e) {
    const t = e.getDisplayId(), s = e.getXHydrated(), r = e.getYHydrated(), a = this._geohashBuf[2 * t], n = this._geohashBuf[2 * t + 1];
    this._bitsets.inserted.has(t) && (this._bitsets.inserted.unset(t), this._tree.removeCursor(e, s, r, a, n, this._geohashLevel));
  }
  _update(e, t) {
    const s = e.getDisplayId(), r = this._bitsets.inserted, a = t.isVisible(s);
    if (a === r.has(s))
      return;
    if (!a)
      return void this._remove(e);
    const n = e.getXHydrated(), o = e.getYHydrated();
    if (!this._setGeohash(s, n, o))
      return;
    const h = this._geohashBuf[2 * s], u = this._geohashBuf[2 * s + 1];
    this._tree.insertCursor(e, s, n, o, h, u, this._geohashLevel), r.set(s);
  }
  _setGeohash(e, t, s) {
    if (this._bitsets.geohash.has(e))
      return !0;
    const r = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const a = re(t / te.radius), n = a - 360 * Math.floor((a + 180) / 360), o = re(Math.PI / 2 - 2 * Math.atan(Math.exp(-s / te.radius)));
      Ze(r, e, o, n, Se);
    } else {
      const a = me({ x: t, y: s }, this._spatialReference, oe.WGS84);
      if (!a)
        return !1;
      Ze(r, e, a.y, a.x, Se);
    }
    return this._bitsets.geohash.set(e), !0;
  }
  _getClustersForTile(e, t, s, r, a, n = !0) {
    const o = this._schema.params.clusterPixelBuffer, h = 2 * s, u = this._getGeohashLevel(t.key.level), c = Math.ceil(2 ** t.key.level * B / h), d = Math.ceil(o / h) + 0, l = Math.ceil(B / h), { row: g, col: p } = t.key, _ = p * B, I = g * B, f = Math.floor(_ / h) - d, v = Math.floor(I / h) - d, b = f + l + 2 * d, w = v + l + 2 * d, S = t.tileInfoView.getLODInfoAt(t.key.level);
    for (let m = f; m <= b; m++)
      for (let C = v; C <= w; C++) {
        let q = m;
        S.wrap && (q = m < 0 ? m + c : m % c);
        const x = S.wrap && m < 0, k = S.wrap && m % c !== m, F = this._lookupCluster(r, S, t.key.level, q, C, u);
        if (y(F)) {
          const P = At(a, (U) => x ? U.left : k ? U.right : U.tile);
          if (n && T(P) || !F.count)
            continue;
          if (y(P) && n) {
            const U = F.geometry.clone();
            let G = F.attributes;
            U.coords[0] = ct(P, U.coords[0]), U.coords[1] = ht(P, U.coords[1]), F.count === 1 && y(F.referenceId) && (G = { ...F.attributes, referenceId: F.referenceId });
            const $ = new tt(U, G);
            $.displayId = F.displayId, e.push($);
          }
        }
      }
  }
  _getGeohashLevel(e) {
    return Math.min(Math.ceil(e / 2 + 2), Se);
  }
  _setGeohashLevel(e) {
    const t = this._getGeohashLevel(e), s = (Math.floor(t / Ke) + 1) * Ke - 1;
    if (this._geohashLevel !== s)
      return this._geohashLevel = s, this._rebuildTree(), void this._bitsets.geohash.clear();
  }
  _getTransforms(e, t) {
    const s = { originPosition: "upperLeft", scale: [e.resolution, e.resolution], translate: [e.bounds[0], e.bounds[3]] }, r = Ut(t);
    if (!r)
      return { tile: s, left: null, right: null };
    const [a, n] = r.valid;
    return { tile: s, left: { ...s, translate: [n, e.bounds[3]] }, right: { ...s, translate: [a - n + e.bounds[0], e.bounds[3]] } };
  }
  _getClusterId(e, t, s) {
    return (15 & e) << 28 | (16383 & t) << 14 | 16383 & s;
  }
  _markForDeletion(e, t, s) {
    const r = this._getClusterId(e, t, s);
    this._clusters.delete(r);
  }
  _getClusterBounds(e, t, s) {
    const r = this._schema.params.clusterRadius, a = 2 * r;
    let n = s % 2 ? t * a : t * a - r;
    const o = s * a;
    let h = n + a;
    const u = o - a, c = 2 ** e.level * B;
    e.wrap && n < 0 && (n = 0), e.wrap && h > c && (h = c);
    const d = n / B, l = o / B, g = h / B, p = u / B;
    return [e.getXForColumn(d), e.getYForRow(l), e.getXForColumn(g), e.getYForRow(p)];
  }
  _lookupCluster(e, t, s, r, a, n) {
    const o = this._getClusterId(s, r, a), h = this._clusters.get(o), [u, c, d, l] = this._getClusterBounds(t, r, a), g = { x: u, y: c }, p = { x: d, y: l };
    let _ = 0, I = 0, f = 0, v = 0;
    if (this._spatialReference.isWebMercator) {
      {
        const M = re(g.x / te.radius);
        _ = M - 360 * Math.floor((M + 180) / 360), I = re(Math.PI / 2 - 2 * Math.atan(Math.exp(-g.y / te.radius)));
      }
      {
        const M = re(p.x / te.radius);
        f = M - 360 * Math.floor((M + 180) / 360), v = re(Math.PI / 2 - 2 * Math.atan(Math.exp(-p.y / te.radius)));
      }
    } else {
      const M = me(g, this._spatialReference, oe.WGS84), A = me(p, this._spatialReference, oe.WGS84);
      if (!M || !A)
        return null;
      _ = M.x, I = M.y, f = A.x, v = A.y;
    }
    const b = { geohashX: 0, geohashY: 0 }, w = { geohashX: 0, geohashY: 0 };
    We(b, I, _, n), We(w, v, f, n);
    const S = b.geohashX, m = b.geohashY, C = w.geohashX, q = w.geohashY, x = { xLL: S, yLL: m, xTR: C, yTR: q, level: n }, k = this._tree.getRegionStatistics(S, m, C, q, n), { count: F, xTotal: P, yTotal: U, referenceId: G } = k, $ = F ? P / F : 0, j = F ? U / F : 0;
    if (F === 0)
      return this._clusters.set(o, null), null;
    const L = { cluster_count: F, ...k.attributes }, R = y(h) ? h.update($, j, s, L, x, G) : Ue.create(e, o, $, j, s, L, x, G);
    return F === 0 && (R.geometry.coords[0] = (u + d) / 2, R.geometry.coords[1] = (c + l) / 2), this._clusters.set(o, R), this._updateAggregateValueRangeForCluster(R, R.tileLevel), R;
  }
  _updateAggregateValueRangeForCluster(e, t) {
    const s = this._aggregateValueRanges[t] || { minValue: 1 / 0, maxValue: 0 }, r = s.minValue, a = s.maxValue;
    s.minValue = Math.min(r, e.count), s.maxValue = Math.max(a, e.count), this._aggregateValueRanges[t] = s, r === s.minValue && a === s.maxValue || (this._aggregateValueRangesChanged = !0);
  }
  _markTileClustersForDeletion(e, t) {
    const s = 2 * t, r = Math.ceil(B / s), { row: a, col: n } = e.key, o = n * B, h = a * B, u = Math.floor(o / s), c = Math.floor(h / s);
    for (let d = u; d < u + r; d++)
      for (let l = c; l < c + r; l++)
        this._markForDeletion(e.key.level, d, l);
  }
}
const Bs = 5e3, Vs = "tileRenderer.featuresView.attributeView.initialize", Ys = "tileRenderer.featuresView.attributeView.requestUpdate", Xs = "tileRenderer.featuresView.requestRender";
function Hs(i) {
  return i.name === "worker:port-closed";
}
function J(i) {
  if (!_e(i) && !Hs(i))
    throw i;
}
function et(i) {
  return i.type === "feature" && i.mode === "snapshot";
}
let Y = class extends Re {
  constructor() {
    super(...arguments), this._storage = new Vt(), this._markedIdsBufId = this._storage.createBitset(), this._lastCleanup = performance.now(), this._cleanupNeeded = !1, this._invalidated = !1, this._tileToResolver = /* @__PURE__ */ new Map(), this._didEdit = !1, this.tileStore = null, this.config = null, this.processor = null, this.remoteClient = null, this.service = null;
  }
  initialize() {
    this._initAttributeStore(), this._initStores(), this._initQueryEngine(), this._initSource(), this._updateQueue = new Fe({ concurrency: this._source.type === "geoevent" ? 1 : 4, process: (i, e) => this._onTileMessage(i, { signal: e }) }), this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this)), this.watch("updating", (i) => !i && this.onIdle())]), this._checkUpdating = setInterval(() => this.notifyChange("updating"), 300);
  }
  async startup() {
    this._initAttributeStore();
  }
  _initSource() {
    const i = this.tileStore.tileScheme, e = () => this._updateQueue.length < 50, t = (s, r) => (this._invalidated = !0, this._patchTile(s, r));
    this._source = Gs(this.service, this.spatialReference, i, t, e, this.featureStore), this._proxyEvents();
  }
  _proxyEvents() {
    if (this._source.type === "geoevent") {
      const i = this._source.events;
      this.handles.add([i.on("connectionStatus", (e) => this.remoteClient.invoke("setProperty", { propertyName: "connectionStatus", value: e }).catch(J)), i.on("errorString", (e) => this.remoteClient.invoke("setProperty", { propertyName: "errorString", value: e }).catch(J)), i.on("feature", (e) => this.remoteClient.invoke("emitEvent", { name: "data-received", event: { attributes: e.attributes, centroid: e.centroid, geometry: e.geometry } }).catch(J)), i.on("updateRate", (e) => this.remoteClient.invoke("emitEvent", { name: "update-rate", event: { ...e } }).catch(J))]);
    }
  }
  _initAttributeStore() {
    this.attributeStore ? this.attributeStore.invalidateResources() : this.attributeStore = new Yt({ type: "remote", initialize: (i, e) => de(this.remoteClient.invoke(Vs, i, { signal: e }).catch(J)), update: (i, e) => de(this.remoteClient.invoke(Ys, i, { signal: e }).catch(J)), render: (i) => de(this.remoteClient.invoke(Xs, void 0, { signal: i }).catch(J)) }, this.config);
  }
  _initStores() {
    const i = this.service.type === "snapshot" ? "snapshot" : "on-demand", e = { geometryInfo: { geometryType: this.service.geometryType, hasM: !1, hasZ: !1 }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
    this.featureStore = new Bt(e, this._storage, i), this.aggregateStore = new Qs(e, this.spatialReference, this._storage, this.service), this.handles.add(this.aggregateStore.events.on("valueRangesChanged", (t) => {
      this.remoteClient.invoke("emitEvent", { name: "valueRangesChanged", event: { valueRanges: t.valueRanges } }).catch(J);
    }));
  }
  _initQueryEngine() {
    var i;
    const e = this;
    (i = this.queryEngine) == null || i.destroy(), this.queryEngine = new Dt({ definitionExpression: this.config.definitionExpression, fields: this.service.fields, geometryType: this.service.geometryType, objectIdField: this.service.objectIdField, hasM: !1, hasZ: !1, spatialReference: this.spatialReference.toJSON(), cacheSpatialQueries: !0, featureStore: this.featureStore, aggregateAdapter: { getFeatureObjectIds: (t) => e.aggregateStore.getFeatureDisplayIdsForAggregate(t).map((s) => e.getObjectId(s)) }, timeInfo: this.service.timeInfo });
  }
  destroy() {
    this._updateQueue.destroy(), this._source.destroy(), this.queryEngine.destroy(), this.attributeStore && this.attributeStore.destroy();
    for (const i of this.tileStore.tiles)
      this._source.unsubscribe(i);
    clearInterval(this._checkUpdating);
  }
  get fieldsIndex() {
    return new Pt(this.service.fields);
  }
  get hasAggregates() {
    return !!this.config.schema.targets.aggregate;
  }
  get spatialReference() {
    return this.tileStore.tileScheme.spatialReference;
  }
  get updating() {
    return this.isUpdating();
  }
  isUpdating() {
    return this._source.updating || !!this._updateQueue.length;
  }
  enableEvent(i) {
    this._source.enableEvent(i.name, i.value);
  }
  pause() {
    this._updateQueue.pause(), this._updateQueue.clear();
  }
  pauseStream() {
    this._source.type === "geoevent" && this._source.pauseStream();
  }
  resumeStream() {
    this._source.type === "geoevent" && this._source.resumeStream();
  }
  async update(i, e) {
    this._set("config", e), this._schema = e.schema, this._initQueryEngine(), await Promise.all([this._source.update(i, e.schema.source), this.featureStore.updateSchema(i, e.schema.targets.feature), this.attributeStore.update(i, e), this.attributeStore.updateFilters(i, this)]), await this.aggregateStore.updateSchema(i, e.schema.targets.aggregate), V("geoscene-2d-update-debug") && i.describe();
  }
  async applyUpdate(i) {
    i.mesh && this.clearTiles(), this._updateQueue.resume(), await this._source.applyUpdate(i), this.notifyChange("updating"), await ue(() => !this.updating), this.hasAggregates && (await Oe(10), await ue(() => !this.updating));
  }
  async onEdits({ edits: i }) {
    V("geoscene-2d-update-debug") && console.debug("Applying Edit:", i), this._didEdit = !0;
    try {
      const e = i.removed.map((s) => s.objectId && s.objectId !== -1 ? s.objectId : this._lookupObjectIdByGlobalId(s.globalId)), t = i.addOrModified.map(({ objectId: s }) => s);
      this.featureStore.invalidate(), await this._source.edit(t, e), this.clearTiles(), this.notifyChange("updating"), this.aggregateStore.clear(), await this._source.resend(), await ue(() => !this.updating);
    } catch {
    }
  }
  async refresh(i) {
    if (!i) {
      const e = z.empty();
      return e.storage.filters = !0, this.applyUpdate(e);
    }
    this.featureStore.invalidate(), this.clearTiles(), this._source.refresh(), this._cleanupNeeded = !0, this.notifyChange("updating"), await ue(() => !this.updating);
  }
  clearTiles() {
    for (const i of this.tileStore.tiles)
      this.processor.onTileClear(i);
  }
  onTileUpdate(i) {
    this.aggregateStore.onTileUpdate(i);
    for (const e of i.added)
      this._source.subscribe(e), this._level = e.level;
    for (const e of i.removed)
      this._source.unsubscribe(e), this._cleanupNeeded = !0, this._tileToResolver.has(e.id) && (this._tileToResolver.get(e.id).resolve(), this._tileToResolver.delete(e.id));
    this.notifyChange("updating");
  }
  onIdle() {
    this._invalidated && ((this.hasAggregates || this.processor.type === "heatmap") && this._repushCurrentLevelTiles(), this._invalidated = !1), this._markAndSweep();
  }
  async querySummaryStatistics({ query: i, params: e }) {
    return this.queryEngine.executeQueryForSummaryStatistics(i, e);
  }
  async queryUniqueValues({ query: i, params: e }) {
    return this.queryEngine.executeQueryForUniqueValues(i, e);
  }
  async queryClassBreaks({ query: i, params: e }) {
    return this.queryEngine.executeQueryForClassBreaks(i, e);
  }
  async queryHistogram({ query: i, params: e }) {
    return this.queryEngine.executeQueryForHistogram(i, e);
  }
  queryExtent(i) {
    return this.queryEngine.executeQueryForExtent(i);
  }
  queryFeatures(i) {
    return this.queryEngine.executeQuery(i);
  }
  async queryVisibleFeatures(i) {
    const e = await this.queryEngine.executeQuery(i), t = e.objectIdFieldName;
    return e.features = e.features.filter((s) => {
      const r = s.attributes[t], a = this.getDisplayId(r);
      return this.attributeStore.isVisible(a);
    }), e;
  }
  queryFeatureCount(i) {
    return this.queryEngine.executeQueryForCount(i);
  }
  queryLatestObservations(i) {
    return this.queryEngine.executeQueryForLatestObservations(i);
  }
  queryObjectIds(i) {
    return this.queryEngine.executeQueryForIds(i);
  }
  async queryStatistics() {
    return this.featureStore.storeStatistics;
  }
  getObjectId(i) {
    return this.featureStore.lookupObjectId(i, this._storage);
  }
  getDisplayId(i) {
    if (this._schema.targets.aggregate) {
      const e = this.aggregateStore.getDisplayId(i);
      if (T(e)) {
        const t = this.featureStore.lookupDisplayId(i);
        return this.aggregateStore.getDisplayIdForReferenceId(t);
      }
      return e;
    }
    return this.featureStore.lookupDisplayId(i);
  }
  getFeatures(i) {
    const e = [], t = [];
    for (const s of i) {
      const r = this.hasAggregates ? this.getAggregate(s) : null;
      if (y(r))
        if (y(r.referenceId)) {
          const a = this.getFeature(r.referenceId);
          y(a) && e.push(a);
        } else
          t.push(r);
      else {
        const a = this.getFeature(s);
        y(a) && e.push(a);
      }
    }
    return { features: e, aggregates: t };
  }
  getFeature(i) {
    const e = this.featureStore.lookupFeatureByDisplayId(i, this._storage);
    if (T(e))
      return null;
    const t = e.readHydratedGeometry(), s = st(t, e.geometryType, e.hasZ, e.hasM);
    return { attributes: e.readAttributes(), geometry: s };
  }
  getAggregate(i) {
    return this.aggregateStore.getAggregate(i);
  }
  getAggregates() {
    return this.aggregateStore.getAggregates();
  }
  async setHighlight(i) {
    const e = i.map((t) => this.getDisplayId(t));
    return this.attributeStore.setHighlight(i, e);
  }
  _lookupObjectIdByGlobalId(i) {
    const e = this.service.globalIdField;
    if (T(e))
      throw new Error("Expected globalIdField to be defined");
    let t = null;
    if (this.featureStore.forEach((s) => {
      i === s.readAttribute(e) && (t = s.getObjectId());
    }), T(t))
      throw new Error(`Expected to find a feature with globalId ${i}`);
    return t;
  }
  _repushCurrentLevelTiles() {
    const i = this.tileStore.tiles.filter((e) => e.level === this._level);
    for (const e of i)
      this._patchTile({ type: "append", id: e.key.id, addOrUpdate: X.fromOptimizedFeatures([], this.service), remove: [], end: !0, status: z.empty() });
  }
  _maybeForceCleanup() {
    performance.now() - this._lastCleanup > Bs && this._markAndSweep();
  }
  _patchTile(i, e) {
    const t = this._updateQueue.push(i, e).then(() => {
      this.notifyChange("updating");
    }).catch((s) => {
      this.notifyChange("updating");
    });
    return this.notifyChange("updating"), t;
  }
  async _onTileMessage(i, e) {
    Q(e);
    const t = this.tileStore.get(i.id);
    if (!t)
      return;
    if (i.clear)
      return this.processor.onTileClear(t);
    const s = i.status;
    this._cleanupNeeded = !0;
    const r = [];
    for (const a of i.remove) {
      const n = this.featureStore.lookupDisplayId(a);
      n && r.push(n);
    }
    i.remove = r;
    try {
      if (T(i.addOrUpdate))
        return void this.processor.onTileMessage(t, { ...i, addOrUpdate: null }, this.hasAggregates, e).catch(Ce);
      if (i.addOrUpdate.setArcadeSpatialReference(this.spatialReference), this.featureStore.hasInstance(i.addOrUpdate.instance) && s.targets.feature || (s.targets.feature = !0, this.featureStore.onTileData(t, i)), (!s.storage.data || !s.storage.filters) && (s.storage.data = !0, s.storage.filters = !0, this.attributeStore.onTileData(t, i), this._source.type === "geoevent" || this._didEdit ? (await this.attributeStore.sendUpdates(), Q(e)) : this.attributeStore.sendUpdates()), this.hasAggregates && !s.targets.aggregate) {
        s.targets.aggregate = !0;
        const a = et(this._source) && this._source.loading, n = !et(this._source) || a || i.end;
        if (this.aggregateStore.onTileData(t, i, this._storage, this.attributeStore, n), !n)
          return;
        s.mesh || (this.attributeStore.onTileData(t, i), await this.attributeStore.sendUpdates(), this.processor.onTileClear(t));
      }
      s.mesh || (s.mesh = !0, await this.processor.onTileMessage(t, i, this.hasAggregates, e), Q(e)), this._maybeForceCleanup();
    } catch (a) {
      Ce(a);
    }
  }
  _mark(i, e, t) {
    const s = (4294901760 & this._storage.getInstanceId(i)) >>> 16;
    i && (e.add(s), t.set(i));
  }
  _markAndSweep() {
    if (this._lastCleanup = performance.now(), !(!(this._source.type === "feature" && this._source.mode === "snapshot") && (this._source.type === "geoevent" || this._cleanupNeeded)))
      return;
    this._cleanupNeeded = !1;
    const i = this._storage.getBitset(this._markedIdsBufId), e = /* @__PURE__ */ new Set();
    i.clear();
    for (const t of this.tileStore.tiles)
      for (const s of this._source.readers(t.id)) {
        const r = s.getCursor();
        for (; r.next(); ) {
          let a = r.getDisplayId();
          if (!a) {
            const n = r.getObjectId();
            a = this.featureStore.lookupDisplayId(n);
          }
          this._mark(a, e, i);
        }
      }
    this.processor.type === "symbol" && this.processor.forEachBufferId((t) => {
      this._mark(t, e, i);
    }), this._updateQueue.forEach((t) => {
      for (const s of t.remove) {
        const r = this.featureStore.lookupDisplayId(s);
        this._mark(r, e, i);
      }
    }), this.config.schema.targets.aggregate && (this.aggregateStore.sweepFeatures(i, this.featureStore), this.aggregateStore.sweepClusters(this._storage, this.attributeStore, this._level)), this.featureStore.sweepFeatures(i, this._storage, this.attributeStore), this.featureStore.sweepFeatureSets(e);
  }
};
O([D({ constructOnly: !0 })], Y.prototype, "tileStore", void 0), O([D()], Y.prototype, "config", void 0), O([D({ readOnly: !0 })], Y.prototype, "fieldsIndex", null), O([D()], Y.prototype, "processor", void 0), O([D({ constructOnly: !0 })], Y.prototype, "remoteClient", void 0), O([D({ constructOnly: !0 })], Y.prototype, "service", void 0), O([D()], Y.prototype, "spatialReference", null), O([D()], Y.prototype, "updating", null), Y = O([he("geoscene.views.2d.layers.features.controllers.FeatureController2D")], Y);
const Ws = Y, Zs = /* @__PURE__ */ new Set();
function jr() {
  return Zs;
}
let ee = class extends Re {
  constructor() {
    super(...arguments), this.controller = null, this.processor = null, this.remoteClient = null, this.tileStore = null, this.service = null, this.viewState = null, this._paused = !1, this._pendingTileUpdates = [];
  }
  initialize() {
    this.handles.add(this.watch("updating", (i) => {
      this.remoteClient.invoke("setUpdating", i).catch((e) => {
      });
    }));
  }
  destroy() {
    var i, e;
    this.stop(), (i = this.controller) == null || i.destroy(), (e = this.processor) == null || e.destroy(), this.controller = this.processor = this.tileStore = this.remoteClient = null;
  }
  get updating() {
    return !this.controller || this.controller.updating;
  }
  stop() {
    var i, e, t;
    this._paused = !0, Array.isArray((i = this.service) == null ? void 0 : i.source) && (this.service.source.forEach((s) => s.close()), this.service.source.length = 0), (e = this.tileStore) == null || e.updateTiles({ added: [], removed: this.tileStore.tiles.map((s) => s.id) }), (t = this.tileStore) == null || t.destroy(), this.tileStore = null, this._pendingTileUpdates.length = 0;
  }
  async startup({ service: i, config: e, tileInfo: t, tiles: s }) {
    var r;
    if (this._paused = !0, Array.isArray((r = this.service) == null ? void 0 : r.source) && (this.service.source.forEach((o) => o.close()), this.service.source.length = 0), this.service = i, !this.tileStore || !jt(this.tileStore.tileScheme.spatialReference, t.spatialReference)) {
      var a, n;
      const o = new Lt(Gt.fromJSON(t));
      s.added.length = s.removed.length = 0, (a = this.tileStore) == null || a.updateTiles({ added: [], removed: this.tileStore.tiles.map((h) => h.id) }), (n = this.tileStore) == null || n.destroy(), this.tileStore = new Nt(o), this._pendingTileUpdates.length = 0;
    }
    for (await this._createProcessorAndController(e), await this.update({ config: e }, !0), this.tileStore.clear(), this.tileStore.updateTiles(s), this._paused = !1; this._pendingTileUpdates.length; )
      this.tileStore.updateTiles(this._pendingTileUpdates.pop());
  }
  async updateTiles(i) {
    this._paused ? this._pendingTileUpdates.push(i) : this.tileStore.updateTiles(i);
  }
  async update({ config: i }, e = !1) {
    const t = z.empty();
    return e || this.controller.pause(), await Promise.all([this.processor.update(t, i), this.controller.update(t, i)]), t.toJSON();
  }
  async applyUpdate(i) {
    return this.controller.applyUpdate(z.create(i));
  }
  async _createProcessorAndController(i) {
    await Promise.all([this._handleControllerConfig(i), this._handleProcessorConfig(i)]), this.controller.processor = this.processor;
  }
  async _handleControllerConfig(i) {
    const e = await this._createController(this.service, i);
    return await e.startup(), e;
  }
  async _handleProcessorConfig(i) {
    return this._createProcessor(this.service, i);
  }
  async _createController(i, e) {
    this.controller && this.controller.destroy();
    const { tileStore: t, remoteClient: s } = this, r = new Ws({ service: i, config: e, tileStore: t, remoteClient: s });
    return this.controller = r, r;
  }
  async _createProcessor(i, e) {
    const t = e.schema.processors[0].type, s = (await Ht(t)).default, { remoteClient: r, tileStore: a } = this, n = new s({ service: i, config: e, tileStore: a, remoteClient: r });
    return this.processor && this.processor.destroy(), this.processor = n, n;
  }
};
O([D()], ee.prototype, "controller", void 0), O([D()], ee.prototype, "processor", void 0), O([D()], ee.prototype, "updating", null), O([D()], ee.prototype, "viewState", void 0), ee = O([he("geoscene.views.2d.layers.features.Pipeline")], ee);
const Lr = ee;
export {
  Lr as default,
  jr as getInstances
};

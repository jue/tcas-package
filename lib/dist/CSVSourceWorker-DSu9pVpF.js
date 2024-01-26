import { y as h, aU as S, g as q, s as C, R as $, C as v, aS as O, J as D, dm as j, dj as k, dn as V, m as P, b0 as Q, b1 as R, aQ as G, U as L, aT as M, dB as U } from "./index-j1oaLRcp.js";
import { t as A } from "./json-uwIaZKlZ.js";
import { m as B } from "./FeatureStore-yEt-cJgR.js";
import { f as Y } from "./projectionSupport-eTH1ob6-.js";
import { V as J } from "./QueryEngine-t0J8FDj7.js";
import { a as Z, n as W } from "./clientSideDefaults-ZvpGx7fH.js";
import "vue";
import "./PooledRBush-6KS_9oyk.js";
import "./WhereClause-GhOl_FlK.js";
import "./QueryEngineCapabilities-gmxC9I6i.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./utils-JVqMpUTR.js";
import "./ClassBreaksDefinition-nlZvFIvT.js";
import "./spatialQuerySupport-IkUKoANG.js";
const z = /^\s*"([\S\s]*)"\s*$/, H = /""/g, I = `
`, K = [",", " ", ";", "|", "	"];
function* w(r, t, e) {
  let i = 0;
  for (; i <= r.length; ) {
    const n = r.indexOf(t, i), s = r.substring(i, n > -1 ? n : void 0);
    i += s.length + t.length, e && !s.trim() || (yield s);
  }
}
function b(r) {
  const t = r.includes(`\r
`) ? `\r
` : I;
  return w(r, t, !0);
}
function X(r, t) {
  return w(r, t, !1);
}
function ee(r) {
  const t = r.trim();
  let e = 0, i = "";
  for (const n of K) {
    const s = t.split(n).length;
    s > e && (e = s, i = n);
  }
  return i === "" ? null : i;
}
function* x(r, t, e, i = () => /* @__PURE__ */ Object.create(null)) {
  let n = "", s = "", u = 0, a = i(), f = 0;
  e:
    for (const o of r) {
      const d = X(o, e);
      for (const c of d)
        if (n += s + c, s = "", u += te(c), u % 2 == 0) {
          if (u > 0) {
            const y = z.exec(n);
            if (!y) {
              a = i(), f = 0, n = "", u = 0;
              continue e;
            }
            a[t[f]] = y[1].replace(H, '"'), f++;
          } else
            a[t[f]] = n, f++;
          n = "", u = 0;
        } else
          s = e;
      u === 0 ? (yield a, a = i(), f = 0) : s = I;
    }
}
function te(r) {
  let t = 0, e = 0;
  for (e = r.indexOf('"', e); e >= 0; )
    t++, e = r.indexOf('"', e + 1);
  return t;
}
const ie = W("esriGeometryPoint"), ne = ["csv"], se = [0, 0];
class re {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
}
class qe {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (t) => {
      const e = await this._fetch(t);
      return this._createFeatures(e);
    };
  }
  destroy() {
    var t;
    (t = this._queryEngine) == null || t.destroy(), this._queryEngine = null;
  }
  async load(t, e = {}) {
    var i;
    this.loadOptions = t;
    const [n] = await Promise.all([this._fetch(e.signal), this._checkProjection(t == null || (i = t.parsingOptions) == null ? void 0 : i.spatialReference)]), s = ae(n, t);
    this.locationInfo = s.locationInfo, this.delimiter = s.delimiter, this._queryEngine = this._createQueryEngine(s);
    const u = await this._createFeatures(n);
    if (this._queryEngine.featureStore.addMany(u), s.layerDefinition.extent = this._queryEngine.fullExtent, s.layerDefinition.timeInfo) {
      const { start: a, end: f } = this._queryEngine.timeExtent;
      s.layerDefinition.timeInfo.timeExtent = [a, f];
    }
    return s;
  }
  async applyEdits() {
    throw new h("csv-layer:editing-not-supported", "applyEdits() is not supported on CSVLayer");
  }
  async queryFeatures(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(t, e.signal);
  }
  async queryFeatureCount(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(t, e.signal);
  }
  async queryObjectIds(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(t, e.signal);
  }
  async queryExtent(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(t, e.signal);
  }
  async querySnapping(t, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(t, e.signal);
  }
  async refresh(t) {
    var e;
    return this.loadOptions.customParameters = t, (e = this._snapshotTask) == null || e.abort(), this._snapshotTask = S(this._snapshotFeatures), this._snapshotTask.promise.then((i) => {
      this._queryEngine.featureStore.clear(), i && this._queryEngine.featureStore.addMany(i);
    }, (i) => {
      this._queryEngine.featureStore.clear(), q(i) || C.getLogger("geoscene.layers.CSVLayer").error(new h("csv-layer:refresh", "An error occurred during refresh", { error: i }));
    }), await this._waitSnapshotComplete(), { extent: this._queryEngine.fullExtent, timeExtent: this._queryEngine.timeExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(t) {
    const { url: e, customParameters: i } = this.loadOptions;
    if (!e)
      throw new h("csv-layer:invalid-source", "url not defined");
    const n = $(e);
    return (await v(n.path, { query: { ...n.query, ...i }, responseType: "text", signal: t })).data;
  }
  _createQueryEngine(t) {
    const { objectIdField: e, fields: i, extent: n, timeInfo: s } = t.layerDefinition, u = new B({ geometryType: "esriGeometryPoint", hasM: !1, hasZ: !1 });
    return new J({ fields: i, geometryType: "esriGeometryPoint", hasM: !1, hasZ: !1, timeInfo: s, objectIdField: e, spatialReference: n.spatialReference || { wkid: 4326 }, cacheSpatialQueries: !0, featureStore: u });
  }
  async _createFeatures(t) {
    const { latitudeFieldName: e, longitudeFieldName: i } = this.locationInfo, { objectIdField: n, fieldsIndex: s, spatialReference: u } = this._queryEngine;
    let a = [];
    const f = [], o = s.fields.filter((l) => l.name !== n).map((l) => l.name);
    let d = 0;
    const c = b(t);
    c.next();
    const y = {};
    for (const l of s.fields)
      if (l.type !== "esriFieldTypeOID" && l.type !== "esriFieldTypeGlobalID") {
        const p = O(l);
        p !== void 0 && (y[l.name] = p);
      }
    const E = x(c, o, this.delimiter, Z(y, n));
    for (const l of E) {
      const p = this._parseCoordinateValue(l[e]), g = this._parseCoordinateValue(l[i]);
      if (g != null && p != null && !isNaN(p) && !isNaN(g)) {
        l[e] = p, l[i] = g;
        for (const m in l)
          if (m !== e && m !== i) {
            if (s.isDateField(m)) {
              const F = new Date(l[m]);
              l[m] = T(F, l[m]) ? F.getTime() : null;
            } else if (s.isNumericField(m)) {
              const F = _(l[m]);
              isNaN(F) ? l[m] = null : l[m] = F;
            }
          }
        l[n] = d, d++, a.push(new re(g, p)), f.push(l);
      }
    }
    if (!D({ wkid: 4326 }, u))
      if (j(u))
        for (const l of a)
          [l.x, l.y] = k(l.x, l.y, se);
      else
        a = V(A, a, P.WGS84, u, null);
    const N = [];
    for (let l = 0; l < a.length; l++) {
      const { x: p, y: g } = a[l], m = f[l];
      m[n] = l + 1, N.push(new Q(new R([], [p, g]), m, null, m[n]));
    }
    return N;
  }
  _parseCoordinateValue(t) {
    if (t == null || t === "")
      return null;
    let e = _(t);
    return (isNaN(e) || Math.abs(e) > 181) && (e = parseFloat(t)), e;
  }
  async _checkProjection(t) {
    try {
      await Y(G, t);
    } catch {
      throw new h("csv-layer:projection-not-supported", "Projection not supported");
    }
  }
}
function ae(r, t) {
  const e = t.parsingOptions || {}, i = { delimiter: e.delimiter, layerDefinition: null, locationInfo: { latitudeFieldName: e.latitudeField, longitudeFieldName: e.longitudeField } }, n = b(r);
  let s = n.next().value;
  if (!s)
    throw new h("csv-layer:empty-csv", "CSV is empty", { csv: r });
  if (s = s.trim(), !e.delimiter) {
    const o = ee(s);
    if (!o)
      throw new h("csv-layer:invalid-delimiter", "Unable to detect the delimiter from CSV");
    i.delimiter = o;
  }
  const u = s.split(i.delimiter).filter((o) => !!o), a = i.layerDefinition = { name: L(t.url, ne) || "csv", drawingInfo: ie, geometryType: "esriGeometryPoint", objectIdField: null, fields: [], timeInfo: e.timeInfo, extent: { xmin: Number.POSITIVE_INFINITY, ymin: Number.POSITIVE_INFINITY, xmax: Number.NEGATIVE_INFINITY, ymax: Number.NEGATIVE_INFINITY, spatialReference: e.spatialReference || { wkid: 102100 } } };
  if (!e.latitudeField || !e.longitudeField) {
    const o = de(u);
    if (!e.longitudeField && !o.longitudeFieldName || !e.latitudeField && !o.latitudeFieldName)
      throw new h("csv-layer:location-fields-not-found", "Unable to identify latitude and longitude fields from the CSV file");
    i.locationInfo = { longitudeFieldName: e.longitudeField || o.longitudeFieldName, latitudeFieldName: e.latitudeField || o.latitudeFieldName };
  }
  const f = ue(n, i.delimiter, u, i.locationInfo);
  if (e.fields && e.fields.length) {
    const o = /* @__PURE__ */ new Map();
    for (const d of e.fields)
      o.set(d.name.toLowerCase(), d);
    for (const d of f) {
      const c = o.get(d.name.toLowerCase());
      if (c) {
        const y = d.name;
        Object.assign(d, c), d.name = y;
      }
    }
  }
  if (a.fields = f, !a.fields.some((o) => o.type === "esriFieldTypeOID" && (a.objectIdField = o.name, !0))) {
    const o = { name: "__OBJECTID", alias: "__OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1 };
    a.objectIdField = o.name, a.fields.unshift(o);
  }
  if (a.timeInfo) {
    const o = new M(a.fields), d = a.timeInfo;
    if (d.startTimeField) {
      const c = o.get(d.startTimeField);
      c ? (d.startTimeField = c.name, c.type = "esriFieldTypeDate") : d.startTimeField = null;
    }
    if (d.endTimeField) {
      const c = o.get(d.endTimeField);
      c ? (d.endTimeField = c.name, c.type = "esriFieldTypeDate") : d.endTimeField = null;
    }
    if (d.trackIdField) {
      const c = o.get(d.trackIdField);
      d.trackIdField = c ? c.name : null;
    }
    d.startTimeField || d.endTimeField || (a.timeInfo = null);
  }
  return i;
}
const oe = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point-y"], le = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point-x"];
function de(r) {
  const t = r.map((e) => e.toLowerCase());
  return { longitudeFieldName: r[t.indexOf(le.find((e) => t.includes(e)))], latitudeFieldName: r[t.indexOf(oe.find((e) => t.includes(e)))] };
}
function ue(r, t, e, i) {
  const n = [], s = x(r, e, t), u = [];
  for (const a of s) {
    if (u.length === 10)
      break;
    u.push(a);
  }
  for (const a of e)
    if (a === i.longitudeFieldName || a === i.latitudeFieldName)
      n.push({ name: a, type: "esriFieldTypeDouble", alias: a });
    else {
      const f = ce(u.map((d) => d[a])), o = { name: a, type: null, alias: a };
      switch (f) {
        case "integer":
          o.type = "esriFieldTypeInteger";
          break;
        case "double":
          o.type = "esriFieldTypeDouble";
          break;
        case "date":
          o.type = "esriFieldTypeDate", o.length = 36;
          break;
        default:
          o.type = "esriFieldTypeString", o.length = 255;
      }
      n.push(o);
    }
  return n;
}
function ce(r) {
  if (!r.length)
    return "string";
  const t = /[^+-.,0-9]/;
  return r.map((e) => {
    let i = !1;
    if (e !== "") {
      if (t.test(e))
        i = !0;
      else {
        let n = _(e);
        if (!isNaN(n))
          return /[.,]/.test(e) || !Number.isInteger(n) || n > 214783647 || n < -214783648 ? "double" : "integer";
        if (e.indexOf("E") === -1)
          i = !0;
        else {
          if (n = Number(e), !isNaN(n))
            return "double";
          if (e.indexOf(",") === -1)
            i = !0;
          else {
            if (e = e.replace(",", "."), n = Number(e), !isNaN(n))
              return "double";
            i = !0;
          }
        }
      }
      return i ? /^[-]?\d*[.,]?\d*$/.test(e) ? "string" : T(new Date(e), e) ? "date" : "string" : "string";
    }
  }).reduce((e, i) => e === void 0 || e === i ? i : e === "string" || i === "string" ? "string" : e === "double" || i === "double" ? "double" : void 0);
}
const fe = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i, me = Number.isNaN((/* @__PURE__ */ new Date("technology 10")).getTime());
function T(r, t) {
  if (!r || Object.prototype.toString.call(r) !== "[object Date]" || isNaN(r.getTime()))
    return !1;
  let e = !0;
  if (!me && /\d+\W*$/.test(t)) {
    const i = t.match(/[a-zA-Z]{2,}/);
    if (i) {
      let n = !1, s = 0;
      for (; !n && s <= i.length; )
        n = !fe.test(i[s]), s++;
      e = !n;
    }
  }
  return e;
}
const _ = function() {
  const r = U(), t = new RegExp("^" + r.regexp + "$"), e = new RegExp("[" + r.group + "\\s\\xa0]", "g"), i = r.factor;
  return function(n) {
    const s = t.exec(n);
    if (r.factor = i, !s)
      return NaN;
    let u = s[1];
    if (!s[1]) {
      if (!s[2])
        return NaN;
      u = s[2], r.factor *= -1;
    }
    return u = u.replace(e, "").replace(r.decimal, "."), +u * r.factor;
  };
}();
export {
  qe as default,
  ce as inferFieldType,
  ue as inferFields,
  de as inferLocationInfo
};

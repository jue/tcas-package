import { C as S, dC as L, y, dD as j, dE as N, dF as $, dG as v, m as G, l as E, M as V, J as W, aQ as h, dl as Y, Y as X, de as z, bY as f, dH as q, r as P } from "./index-j1oaLRcp.js";
import { i as H } from "./geojson-r9qlT9W_.js";
import { o as x, n as F } from "./xmlUtils-mxxkHqmu.js";
function _(n) {
  var e;
  return (e = Q(n)) != null ? e : J(n);
}
function J(n) {
  const e = new Date(n).getTime();
  return Number.isNaN(e) ? null : e;
}
function Q(n) {
  var e, t, a, r;
  const s = B.exec(n);
  if (!s)
    return null;
  const o = s.groups, i = +o.year, u = +o.month - 1, l = +o.day, p = +((e = o.hours) != null ? e : "0"), c = +((t = o.minutes) != null ? t : "0"), m = +((a = o.seconds) != null ? a : "0");
  if (p > 23 || c > 59 || m > 59)
    return null;
  const d = (r = o.ms) != null ? r : "0", g = d ? +d.padEnd(3, "0").substring(0, 3) : 0;
  let w;
  if (o.isUTC)
    w = Date.UTC(i, u, l, p, c, m, g);
  else if (o.offsetSign) {
    const I = +o.offsetHours, O = +o.offsetMinutes;
    w = 6e4 * (o.offsetSign === "+" ? -1 : 1) * (60 * I + O) + Date.UTC(i, u, l, p, c, m, g);
  } else
    w = new Date(i, u, l, p, c, m, g).getTime();
  return Number.isNaN(w) ? null : w;
}
const B = /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/, C = "xlink:href", b = "2.0.0", k = "__esri_wfs_id__", K = "wfs-layer:getWFSLayerTypeInfo-error", Z = "wfs-layer:empty-service", A = "wfs-layer:feature-type-not-found", ee = "wfs-layer:geojson-not-supported", te = "wfs-layer:kvp-encoding-not-supported", ne = "wfs-layer:malformed-json", R = "wfs-layer:unknown-geometry-type", re = "wfs-layer:unknown-field-type", ae = "wfs-layer:unsupported-spatial-reference", se = "wfs-layer:unsupported-wfs-version";
async function Ee(n, e) {
  const t = oe((await S(n, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetCapabilities", VERSION: b, ...e == null ? void 0 : e.customParameters }, signal: e == null ? void 0 : e.signal })).data);
  return le(n, t), t;
}
function oe(n) {
  const e = U(n);
  Se(e), M(e);
  const t = e.firstElementChild, a = L(pe(t));
  return { operations: ue(t), get featureTypes() {
    return Array.from(a());
  }, readFeatureTypes: a };
}
const ie = /* @__PURE__ */ new Set(["json", "application/json", "geojson", "application/json; subtype=geojson"]);
function ue(n) {
  let e = !1;
  const t = { GetCapabilities: { url: "" }, DescribeFeatureType: { url: "" }, GetFeature: { url: "", outputFormat: null, supportsPagination: !1 } };
  if (x(n, { OperationsMetadata: { Operation: (a) => {
    switch (a.getAttribute("name")) {
      case "GetCapabilities":
        return { DCP: { HTTP: { Get: (r) => {
          t.GetCapabilities.url = r.getAttribute(C);
        } } } };
      case "DescribeFeatureType":
        return { DCP: { HTTP: { Get: (r) => {
          t.DescribeFeatureType.url = r.getAttribute(C);
        } } } };
      case "GetFeature":
        return { DCP: { HTTP: { Get: (r) => {
          t.GetFeature.url = r.getAttribute(C);
        } } }, Parameter: (r) => {
          if (r.getAttribute("name") === "outputFormat")
            return { AllowedValues: { Value: (s) => {
              const o = s.textContent;
              ie.has(o.toLowerCase()) && (t.GetFeature.outputFormat = o);
            } } };
        } };
    }
  }, Constraint: (a) => {
    switch (a.getAttribute("name")) {
      case "KVPEncoding":
        return { DefaultValue: (r) => {
          e = r.textContent.toLowerCase() === "true";
        } };
      case "ImplementsResultPaging":
        return { DefaultValue: (r) => {
          t.GetFeature.supportsPagination = r.textContent.toLowerCase() === "true";
        } };
    }
  } } }), !e)
    throw new y(te, "WFS service doesn't support key/value pair (KVP) encoding");
  if (E(t.GetFeature.outputFormat))
    throw new y(ee, "WFS service doesn't support GeoJSON output format");
  return t;
}
function le(n, e) {
  j(n) && (N(n, e.operations.DescribeFeatureType.url, !0) && (e.operations.DescribeFeatureType.url = $(e.operations.DescribeFeatureType.url)), N(n, e.operations.GetFeature.url, !0) && (e.operations.GetFeature.url = $(e.operations.GetFeature.url)));
}
function pe(n) {
  return F(n, { FeatureTypeList: { FeatureType: (e) => {
    const t = { typeName: "undefined:undefined", name: "", title: "", description: "", extent: null, namespacePrefix: "", namespaceUri: "", supportedSpatialReferences: [] }, a = /* @__PURE__ */ new Set([4326]), r = (s) => {
      var o, i;
      const u = parseInt((o = s.textContent.match(/(?<wkid>\d+$)/i)) == null || (i = o.groups) == null ? void 0 : i.wkid, 10);
      Number.isNaN(u) || a.add(u);
    };
    return x(e, { Name: (s) => {
      const { name: o, prefix: i } = T(s.textContent);
      t.typeName = `${i}:${o}`, t.name = o, t.namespacePrefix = i, t.namespaceUri = s.lookupNamespaceURI(i);
    }, Abstract: (s) => {
      t.description = s.textContent;
    }, Title: (s) => {
      t.title = s.textContent;
    }, WGS84BoundingBox: (s) => {
      t.extent = ce(s);
    }, DefaultSRS: r, DefaultCRS: r, OtherSRS: r, OtherCRS: r }), t.title || (t.title = t.name), t.supportedSpatialReferences.push(...a), t;
  } } });
}
function ce(n) {
  let e, t, a, r;
  for (const s of n.children)
    switch (s.localName) {
      case "LowerCorner":
        [e, t] = s.textContent.split(" ").map((o) => Number.parseFloat(o));
        break;
      case "UpperCorner":
        [a, r] = s.textContent.split(" ").map((o) => Number.parseFloat(o));
    }
  return { xmin: e, ymin: t, xmax: a, ymax: r, spatialReference: h };
}
function me(n, e, t) {
  return v(n, (a) => t ? a.name === e && a.namespaceUri === t : a.typeName === e || a.name === e);
}
async function Ne(n, e, t, a = {}) {
  var r;
  const { featureType: s, extent: o } = await ye(n, e, t, a), { fields: i, geometryType: u, swapXY: l, objectIdField: p, geometryField: c } = await de(n, s.typeName, a);
  return { url: n.operations.GetCapabilities.url, name: s.name, namespaceUri: s.namespaceUri, fields: i, geometryField: c, geometryType: u, objectIdField: p, spatialReference: (r = a.spatialReference) != null ? r : G.WGS84, extent: o, swapXY: l, wfsCapabilities: n, customParameters: a.customParameters };
}
async function ye(n, e, t, a = {}) {
  const { spatialReference: r = G.WGS84 } = a, s = n.readFeatureTypes(), o = e ? me(s, e, t) : s.next().value;
  if (E(o))
    throw e ? new y(A, `The type '${e}' could not be found in the service`) : new y(Z, "The service is empty");
  let i = new V({ ...o.extent, spatialReference: r });
  if (!W(r, h))
    try {
      await Y(h, r, void 0, a), i = X(i, h);
    } catch {
      throw new y(ae, "Projection not supported");
    }
  return { extent: i, spatialReference: r, featureType: o };
}
async function de(n, e, t = {}) {
  const [a, r] = await z([we(n.operations.DescribeFeatureType.url, e, t), ge(n, e, t)]);
  if (a.error || r.error)
    throw new y(K, `An error occurred while getting info about the feature type '${e}'`, { error: a.error || r.error });
  const { fields: s, errors: o } = a.value, i = a.value.geometryType || r.value.geometryType, u = r.value.swapXY;
  if (E(i))
    throw new y(R, `The geometry type could not be determined for type '${e}`, { typeName: e, geometryType: i, fields: s, errors: o });
  return { ...fe(s), geometryType: i, swapXY: u };
}
function fe(n) {
  var e;
  const t = n.find((r) => r.type === "geometry");
  let a = n.find((r) => r.type === "oid");
  return n = n.filter((r) => r.type !== "geometry"), a || (a = new f({ name: k, type: "oid", alias: k }), n.unshift(a)), { geometryField: (e = t == null ? void 0 : t.name) != null ? e : null, objectIdField: a.name, fields: n };
}
async function ge(n, e, t = {}) {
  var a;
  let r, s = !1;
  const [o, i] = await Promise.all([Fe(n.operations.GetFeature.url, e, n.operations.GetFeature.outputFormat, { ...t, count: 1 }), S(n.operations.GetFeature.url, { responseType: "text", query: D(e, void 0, { ...t, count: 1 }), signal: t == null ? void 0 : t.signal })]), u = o.type === "FeatureCollection" && ((a = o.features[0]) == null ? void 0 : a.geometry);
  if (u) {
    let l;
    switch (r = q.fromJSON(H(u.type)), u.type) {
      case "Point":
        l = u.coordinates;
        break;
      case "LineString":
      case "MultiPoint":
        l = u.coordinates[0];
        break;
      case "MultiLineString":
      case "Polygon":
        l = u.coordinates[0][0];
        break;
      case "MultiPolygon":
        l = u.coordinates[0][0][0];
    }
    const p = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);
    if (p) {
      const c = l[0].toFixed(3), m = l[1].toFixed(3), d = parseFloat(p[1]).toFixed(3);
      c === parseFloat(p[2]).toFixed(3) && m === d && (s = !0);
    }
  }
  return { geometryType: r, swapXY: s };
}
async function we(n, e, t) {
  return be(e, (await S(n, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "DescribeFeatureType", VERSION: b, TYPENAME: e, ...t == null ? void 0 : t.customParameters }, signal: t == null ? void 0 : t.signal })).data);
}
function be(n, e) {
  const { name: t } = T(n), a = U(e);
  M(a);
  const r = v(F(a.firstElementChild, { element: (s) => ({ name: s.getAttribute("name"), typeName: T(s.getAttribute("type")).name }) }), ({ name: s }) => s === t);
  if (P(r)) {
    const s = v(F(a.firstElementChild, { complexType: (o) => o }), (o) => o.getAttribute("name") === r.typeName);
    if (P(s))
      return he(s);
  }
  throw new y(A, `Type '${n}' not found in document`, { document: new XMLSerializer().serializeToString(a) });
}
const Te = /* @__PURE__ */ new Set(["objectid", "fid"]);
function he(n) {
  var e, t;
  const a = [], r = [];
  let s;
  const o = F(n, { complexContent: { extension: { sequence: { element: (i) => i } } } });
  for (const i of o) {
    const u = i.getAttribute("name");
    if (!u)
      continue;
    let l, p;
    if (i.hasAttribute("type") ? l = T(i.getAttribute("type")).name : x(i, { simpleType: { restriction: (d) => (l = T(d.getAttribute("base")).name, { maxLength: (g) => {
      p = +g.getAttribute("value");
    } }) } }), !l)
      continue;
    const c = i.getAttribute("nillable") === "true";
    let m = !1;
    switch (l.toLowerCase()) {
      case "integer":
      case "nonpositiveinteger":
      case "negativeinteger":
      case "long":
      case "int":
      case "short":
      case "byte":
      case "nonnegativeinteger":
      case "unsignedlong":
      case "unsignedint":
      case "unsignedshort":
      case "unsignedbyte":
      case "positiveinteger":
        r.push(new f({ name: u, alias: u, type: "integer", nullable: c }));
        break;
      case "float":
      case "double":
      case "decimal":
        r.push(new f({ name: u, alias: u, type: "double", nullable: c }));
        break;
      case "boolean":
      case "string":
      case "gyearmonth":
      case "gyear":
      case "gmonthday":
      case "gday":
      case "gmonth":
      case "anyuri":
      case "qname":
      case "notation":
      case "normalizedstring":
      case "token":
      case "language":
      case "idrefs":
      case "entities":
      case "nmtoken":
      case "nmtokens":
      case "name":
      case "ncname":
      case "id":
      case "idref":
      case "entity":
      case "duration":
      case "time":
        r.push(new f({ name: u, alias: u, type: "string", nullable: c, length: (e = p) != null ? e : 255 }));
        break;
      case "datetime":
      case "date":
        r.push(new f({ name: u, alias: u, type: "date", nullable: c, length: (t = p) != null ? t : 36 }));
        break;
      case "pointpropertytype":
        s = "point", m = !0;
        break;
      case "multipointpropertytype":
        s = "multipoint", m = !0;
        break;
      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        s = "polyline", m = !0;
        break;
      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        s = "polygon", m = !0;
        break;
      case "geometrypropertytype":
      case "multigeometrypropertytype":
        m = !0, a.push(new y(R, `geometry type '${l}' is not supported`, { type: new XMLSerializer().serializeToString(n) }));
        break;
      default:
        a.push(new y(re, `Unknown field type '${l}'`, { type: new XMLSerializer().serializeToString(n) }));
    }
    m && r.push(new f({ name: u, alias: u, type: "geometry", nullable: c }));
  }
  for (const i of r)
    if (i.type === "integer" && !i.nullable && Te.has(i.name.toLowerCase())) {
      i.type = "oid";
      break;
    }
  return { geometryType: s, fields: r, errors: a };
}
async function Fe(n, e, t, a) {
  let { data: r } = await S(n, { responseType: "text", query: D(e, t, a), signal: a == null ? void 0 : a.signal });
  r = r.replace(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
  try {
    var s;
    if (a != null && (s = a.dateFields) != null && s.length) {
      const o = new Set(a.dateFields);
      return JSON.parse(r, (i, u) => o.has(i) ? _(u) : u);
    }
    return JSON.parse(r);
  } catch (o) {
    throw new y(ne, "Error while parsing the response", { response: r, error: o });
  }
}
function D(n, e, t) {
  return { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: b, TYPENAMES: n, OUTPUTFORMAT: e, SRSNAME: "EPSG:4326", STARTINDEX: t == null ? void 0 : t.startIndex, COUNT: t == null ? void 0 : t.count, ...t == null ? void 0 : t.customParameters };
}
function U(n) {
  return new DOMParser().parseFromString(n.trim(), "text/xml");
}
function T(n) {
  const [e, t] = n.split(":");
  return { prefix: t ? e : "", name: t ?? e };
}
function Se(n) {
  const e = n.firstElementChild.getAttribute("version");
  if (e && e !== b)
    throw new y(se, `Unsupported WFS version ${e}. Supported version: ${b}`);
}
function M(n) {
  let e, t;
  if (x(n.firstElementChild, { Exception: (a) => (e = a.getAttribute("exceptionCode"), { ExceptionText: (r) => {
    t = r.textContent;
  } }) }), e)
    throw new y(`wfs-layer:${e}`, t);
}
export {
  Ee as D,
  Fe as K,
  me as W,
  Ne as X,
  k as v,
  fe as z
};

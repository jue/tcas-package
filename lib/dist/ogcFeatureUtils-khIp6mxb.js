import { s as B, l as y, y as g, C as T, aR as z, aT as H, m as j, b8 as U, b9 as X, r as k, aW as Y, aV as ee, k as W, aQ as ne, ba as te } from "./index-Ek1MTSEY.js";
import { O as ie, T as ae, L as se } from "./geojson-niEOVREX.js";
import { n as re } from "./clientSideDefaults-LKtLjX6p.js";
const N = B.getLogger("geoscene.layers.graphics.sources.ogcfeature"), D = "http://www.opengis.net/def/crs/", ge = `${D}OGC/1.3/CRS84`;
async function ye(e, n, t = {}, i = 5) {
  const { links: o } = e, l = m(o, "items", "application/geo+json") || m(o, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (y(l))
    throw new g("ogc-feature-layer:missing-items-page", "Missing items url");
  const { data: d } = await T(l.href, { signal: t.signal, query: { limit: i, ...t.customParameters, token: t.apiKey }, headers: { accept: "application/geo+json" } });
  await ie(d);
  const s = ae(d, { geometryType: n.geometryType }), f = n.fields || s.fields || [], $ = n.hasZ != null ? n.hasZ : s.hasZ, F = s.geometryType, p = n.objectIdField || s.objectIdFieldName || "OBJECTID";
  let r = n.timeInfo;
  const w = f.find((a) => a.name === p);
  if (w)
    w.type = "esriFieldTypeOID", w.editable = !1, w.nullable = !1;
  else {
    if (!s.objectIdFieldType)
      throw new g("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    f.unshift({ name: p, alias: p, type: "esriFieldTypeOID", editable: !1, nullable: !1 });
  }
  if (p !== s.objectIdFieldName) {
    const a = f.find((c) => c.name === s.objectIdFieldName);
    a && (a.type = "esriFieldTypeInteger");
  }
  f === s.fields && s.unknownFields.length > 0 && N.warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: s.unknownFields } });
  for (const a of f) {
    if (a.name == null && (a.name = a.alias), a.alias == null && (a.alias = a.name), a.type !== "esriFieldTypeOID" && a.type !== "esriFieldTypeGlobalID" && (a.editable = a.editable == null || !!a.editable, a.nullable = a.nullable == null || !!a.nullable), !a.name)
      throw new g("ogc-feature-layer:invalid-field-name", "field name is missing", { field: a });
    if (z.jsonValues.indexOf(a.type) === -1)
      throw new g("ogc-feature-layer:invalid-field-type", `invalid type for field "${a.name}"`, { field: a });
  }
  if (r) {
    const a = new H(f);
    if (r.startTimeField) {
      const c = a.get(r.startTimeField);
      c ? (r.startTimeField = c.name, c.type = "esriFieldTypeDate") : r.startTimeField = null;
    }
    if (r.endTimeField) {
      const c = a.get(r.endTimeField);
      c ? (r.endTimeField = c.name, c.type = "esriFieldTypeDate") : r.endTimeField = null;
    }
    if (r.trackIdField) {
      const c = a.get(r.trackIdField);
      c ? r.trackIdField = c.name : (r.trackIdField = null, N.warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: r } }));
    }
    r.startTimeField || r.endTimeField || (N.warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: r } }), r = null);
  }
  return { drawingInfo: F ? re(F) : null, geometryType: F, fields: f, hasZ: !!$, objectIdField: p, timeInfo: r };
}
async function we(e, n = {}) {
  const { links: t } = e, i = m(t, "data", "application/json") || m(t, "http://www.opengis.net/def/rel/ogc/1.0/data", "application/json");
  if (y(i))
    throw new g("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: o, customParameters: l, signal: d } = n, { data: s } = await T(i.href, { signal: d, headers: { accept: "application/json" }, query: { ...l, token: o } });
  return s;
}
async function be(e, n = {}) {
  const { links: t } = e, i = m(t, "conformance", "application/json") || m(t, "http://www.opengis.net/def/rel/ogc/1.0/conformance", "application/json");
  if (y(i))
    throw new g("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: o, customParameters: l, signal: d } = n, { data: s } = await T(i.href, { signal: d, headers: { accept: "application/json" }, query: { ...l, token: o } });
  return s;
}
async function he(e, n = {}) {
  const { apiKey: t, customParameters: i, signal: o } = n, { data: l } = await T(e, { signal: o, headers: { accept: "application/json" }, query: { ...i, token: t } });
  return l;
}
async function Fe(e, n = {}) {
  const t = "application/vnd.oai.openapi+json;version=3.0", i = m(e.links, "service-desc", t);
  if (y(i))
    return N.warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: o, customParameters: l, signal: d } = n, { data: s } = await T(i.href, { signal: d, headers: { accept: t }, query: { ...l, token: o } });
  return s;
}
function Ie(e) {
  const n = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e), t = n == null ? void 0 : n.groups;
  if (!t)
    return null;
  const { authority: i, code: o } = t;
  switch (i.toLowerCase()) {
    case "ogc":
      switch (o.toLowerCase()) {
        case "crs27":
          return j.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return j.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const l = Number.parseInt(o, 10);
      return Number.isNaN(l) ? null : l;
    }
    default:
      return null;
  }
}
async function Te(e, n, t) {
  const i = await oe(e, n, t);
  return U(i);
}
async function oe(e, n, t) {
  const { capabilities: { query: { maxRecordCount: i } }, collection: o, layerDefinition: l, queryParameters: { apiKey: d, customParameters: s }, spatialReference: f, supportedCrs: $ } = e, { links: F } = o, p = m(F, "items", "application/geo+json") || m(F, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (y(p))
    throw new g("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: r, num: w, start: a, timeExtent: c, where: P } = n;
  if (n.objectIds)
    throw new g("ogc-feature-layer:query-by-objectids-not-supported", "Queries with objectids are not supported");
  const Z = j.fromJSON(f), I = X(n.outSpatialReference, Z), x = I.isWGS84 ? null : G(I, $), K = ue(r, $), L = ce(c), A = de(P), J = w ?? (a != null && a !== void 0 ? 10 : i), { data: b } = await T(p.href, { ...t, query: { ...s, ...K, crs: x, datetime: L, query: A, limit: J, startindex: a, token: d }, headers: { accept: "application/geo+json" } });
  let v = !1;
  b.links && (v = !!b.links.find((S) => S.rel === "next")), !v && Number.isInteger(b.numberMatched) && Number.isInteger(b.numberReturned) && (v = b.numberReturned < b.numberMatched);
  const { fields: E, globalIdField: Q, hasM: V, hasZ: M, objectIdField: O } = l, q = l.geometryType, C = se(b, { geometryType: q, hasZ: M, objectIdField: O });
  if (!x && I.isWebMercator) {
    for (const h of C)
      if (k(h.geometry)) {
        const S = Y(h.geometry, q, M, !1);
        S.spatialReference = j.WGS84, h.geometry = ee(W(S, I));
      }
  }
  for (const h of C)
    h.objectId = h.attributes[O];
  const _ = x || !x && I.isWebMercator ? I.toJSON() : ne, u = new te();
  return u.exceededTransferLimit = v, u.features = C, u.fields = E, u.geometryType = q, u.globalIdFieldName = Q, u.hasM = V, u.hasZ = M, u.objectIdFieldName = O, u.spatialReference = _, u;
}
function le(e) {
  return k(e) && e.type === "extent";
}
function G(e, n) {
  var t, i, o;
  const { isWebMercator: l, wkid: d } = e;
  if (!d)
    return null;
  const s = l ? (t = (i = (o = n[3857]) != null ? o : n[102100]) != null ? i : n[102113]) != null ? t : n[900913] : n[e.wkid];
  return s ? `${D}${s}` : null;
}
function R(e) {
  if (y(e))
    return "";
  const { xmin: n, ymin: t, xmax: i, ymax: o } = e;
  return `${n},${t},${i},${o}`;
}
function ce(e) {
  if (y(e))
    return null;
  const { start: n, end: t } = e;
  return `${k(n) ? n.toISOString() : ".."}/${k(t) ? t.toISOString() : ".."}`;
}
function de(e) {
  return y(e) || !e || e === "1=1" ? null : e;
}
function ue(e, n) {
  if (!le(e))
    return null;
  const { spatialReference: t } = e;
  if (!t || t.isWGS84)
    return { bbox: R(e) };
  const i = G(t, n);
  return k(i) ? { bbox: R(e), "bbox-crs": i } : t.isWebMercator ? { bbox: R(W(e, j.WGS84)) } : null;
}
function m(e, n, t) {
  return e.find((i) => i.rel === n && i.type === t) || e.find((i) => i.rel === n && !i.type);
}
export {
  ge as F,
  ye as I,
  Te as N,
  Fe as S,
  we as T,
  D as j,
  be as k,
  oe as q,
  Ie as v,
  he as x
};

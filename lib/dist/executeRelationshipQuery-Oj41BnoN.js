import { f as l } from "./utils-QyFvT44r.js";
import { ae as m, fq as f, g as p } from "./index-h53IWweP.js";
import { t as j } from "./query-ePqQPCKo.js";
import "vue";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./pbfQueryUtils-72HutQeH.js";
import "./pbf-LwH3gq-e.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
function R(r, t) {
  const e = r.toJSON();
  return e.objectIds && (e.objectIds = e.objectIds.join(",")), e.orderByFields && (e.orderByFields = e.orderByFields.join(",")), e.outFields && !(t != null && t.returnCountOnly) ? e.outFields.includes("*") ? e.outFields = "*" : e.outFields = e.outFields.join(",") : delete e.outFields, e.outSpatialReference && (e.outSR = e.outSR.wkid || JSON.stringify(e.outSR.toJSON()), delete e.outSpatialReference), e.dynamicDataSource && (e.layer = JSON.stringify({ source: e.dynamicDataSource }), delete e.dynamicDataSource), e;
}
async function S(r, t, e) {
  const n = await y(r, t, e), o = n.data, s = o.geometryType, a = o.spatialReference, c = {};
  for (const d of o.relatedRecordGroups) {
    const i = { fields: void 0, objectIdFieldName: void 0, geometryType: s, spatialReference: a, hasZ: !!o.hasZ, hasM: !!o.hasM, features: d.relatedRecords };
    if (d.objectId != null)
      c[d.objectId] = i;
    else
      for (const u of Object.keys(d))
        u !== "relatedRecords" && (c[d[u]] = i);
  }
  return { ...n, data: c };
}
async function F(r, t, e) {
  const n = await y(r, t, e, { returnCountOnly: !0 }), o = n.data, s = {};
  for (const a of o.relatedRecordGroups)
    a.objectId != null && (s[a.objectId] = a.count);
  return { ...n, data: s };
}
async function y(r, t, e = {}, n) {
  const o = j({ ...r.query, f: "json", ...n, ...R(t, n) });
  return m(r.path + "/queryRelatedRecords", { ...e, query: { ...e.query, ...o } });
}
async function x(r, t, e) {
  t = f.from(t);
  const n = l(r);
  return S(n, t, e).then((o) => {
    const s = o.data, a = {};
    return Object.keys(s).forEach((c) => a[c] = p.fromJSON(s[c])), a;
  });
}
async function B(r, t, e) {
  t = f.from(t);
  const n = l(r);
  return F(n, t, { ...e }).then((o) => o.data);
}
export {
  x as executeRelationshipQuery,
  B as executeRelationshipQueryForCount
};
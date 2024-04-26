import { dg as T, m as y } from "./index-Ek1MTSEY.js";
import { T as x, s as w, m as V, c as F, V as I, g as E, h as P, y as h, D as g, z as D } from "./utils-GLnihTtT.js";
import "vue";
import "./ClassBreaksDefinition-niJmWb63.js";
let d = null;
async function v(e, a) {
  if (!a)
    return [];
  const s = e.field, i = e.valueExpression, n = e.normalizationType, l = e.normalizationField, r = e.normalizationTotal, t = [], o = e.viewInfoParams;
  let u = null, c = null;
  if (i) {
    if (!d) {
      const { arcadeUtils: m } = await T();
      d = m;
    }
    u = d.createFunction(i), c = o && d.getViewInfo({ viewingMode: o.viewingMode, scale: o.scale, spatialReference: new y(o.spatialReference) });
  }
  return a.forEach((m) => {
    const p = m.attributes;
    let f;
    if (i) {
      const z = d.createExecContext(m, c);
      f = d.executeFunction(u, z);
    } else
      p && (f = p[s]);
    if (n && isFinite(f)) {
      const z = p && parseFloat(p[l]);
      f = x(f, n, z, r);
    }
    t.push(f);
  }), t;
}
async function $(e) {
  const { attribute: a, features: s } = e, { normalizationType: i, normalizationField: n, minValue: l, maxValue: r, fieldType: t } = a, o = await v({ field: a.field, valueExpression: a.valueExpression, normalizationType: i, normalizationField: n, normalizationTotal: a.normalizationTotal, viewInfoParams: a.viewInfoParams }, s), u = w({ normalizationType: i, normalizationField: n, minValue: l, maxValue: r }), c = { value: 0.5, fieldType: t }, m = t === "esriFieldTypeString" ? V({ values: o, supportsNullCount: u, percentileParams: c }) : F({ values: o, minValue: l, maxValue: r, useSampleStdDev: !i, supportsNullCount: u, percentileParams: c });
  return I(m, t === "esriFieldTypeDate");
}
async function B(e) {
  const { attribute: a, features: s } = e, i = await v({ field: a.field, valueExpression: a.valueExpression, viewInfoParams: a.viewInfoParams }, s), n = E(i);
  return P(n, a.domain, a.returnAllCodedValues);
}
async function k(e) {
  const { attribute: a, features: s } = e, { field: i, normalizationType: n, normalizationField: l, normalizationTotal: r, classificationMethod: t } = a, o = await v({ field: i, valueExpression: a.valueExpression, normalizationType: n, normalizationField: l, normalizationTotal: r, viewInfoParams: a.viewInfoParams }, s), u = h(o, { field: i, normalizationType: n, normalizationField: l, normalizationTotal: r, classificationMethod: t, standardDeviationInterval: a.standardDeviationInterval, numClasses: a.numClasses, minValue: a.minValue, maxValue: a.maxValue });
  return g(u, t);
}
async function N(e) {
  const { attribute: a, features: s } = e, { field: i, normalizationType: n, normalizationField: l, normalizationTotal: r, classificationMethod: t } = a, o = await v({ field: i, valueExpression: a.valueExpression, normalizationType: n, normalizationField: l, normalizationTotal: r, viewInfoParams: a.viewInfoParams }, s);
  return D(o, { field: i, normalizationType: n, normalizationField: l, normalizationTotal: r, classificationMethod: t, standardDeviationInterval: a.standardDeviationInterval, numBins: a.numBins, minValue: a.minValue, maxValue: a.maxValue });
}
export {
  k as classBreaks,
  N as histogram,
  $ as summaryStatistics,
  B as uniqueValues
};

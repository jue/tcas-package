import { aA as o, aB as n, aC as u, Z as i, S as a } from "./index-Ek1MTSEY.js";
import { t as l } from "./QueryEngineCapabilities-gmxC9I6i.js";
function h(t) {
  return { renderer: { type: "simple", symbol: t === "esriGeometryPoint" || t === "esriGeometryMultipoint" ? o : t === "esriGeometryPolyline" ? n : u } };
}
const c = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
let d = 1;
function $(t, s) {
  if (i("geoscene-csp-restrictions"))
    return () => ({ [s]: null, ...t });
  try {
    let r = `this.${s} = null;`;
    for (const e in t)
      r += `this${c.test(e) ? `.${e}` : `["${e}"]`} = ${JSON.stringify(t[e])};`;
    const p = new Function(`
      return class AttributesClass$${d++} {
        constructor() {
          ${r};
        }
      }
    `)();
    return () => new p();
  } catch {
    return () => ({ [s]: null, ...t });
  }
}
function A(t = {}) {
  return [{ name: "New Feature", description: "", prototype: { attributes: a(t) } }];
}
function f(t, s) {
  return { attachment: null, data: { isVersioned: !1, supportsAttachment: !1, supportsM: !1, supportsZ: t }, metadata: { supportsAdvancedFieldProperties: !1 }, operations: { supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsAdd: s, supportsDelete: s, supportsEditing: s, supportsChangeTracking: !1, supportsQuery: !0, supportsQueryAttachments: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsUpdate: s, supportsExceedsLimitStatistics: !0 }, query: l, queryRelated: { supportsCount: !0, supportsOrderBy: !0, supportsPagination: !0 }, editing: { supportsGeometryUpdate: s, supportsGlobalId: !1, supportsReturnServiceEditsInSourceSpatialReference: !1, supportsRollbackOnFailure: !1, supportsUpdateWithoutM: !1, supportsUploadWithItemId: !1, supportsDeleteByAnonymous: !1, supportsDeleteByOthers: !1, supportsUpdateByAnonymous: !1, supportsUpdateByOthers: !1 } };
}
export {
  $ as a,
  f as c,
  A as l,
  h as n
};

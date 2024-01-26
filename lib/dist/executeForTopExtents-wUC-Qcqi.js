import { dv as i, aC as a } from "./index-B7TsCcH6.js";
import { f as e } from "./utils-iTYrz_MZ.js";
import { p as n } from "./queryTopFeatures-j-zuqgW_.js";
import "vue";
import "./normalizeUtils-Le73uFr2.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./query-1m4tLbNM.js";
import "./pbfQueryUtils-7EAEP13Y.js";
import "./pbf-AaymeYEC.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
async function C(o, r, m) {
  const p = e(o), t = await n(p, i.from(r), { ...m });
  return { count: t.data.count, extent: a.fromJSON(t.data.extent) };
}
export {
  C as executeForTopExtents
};

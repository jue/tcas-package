import { f as i } from "./utils-iTYrz_MZ.js";
import { m as p } from "./queryTopFeatures-j-zuqgW_.js";
import { dv as a } from "./index-B7TsCcH6.js";
import "./normalizeUtils-Le73uFr2.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./query-1m4tLbNM.js";
import "./pbfQueryUtils-7EAEP13Y.js";
import "./pbf-AaymeYEC.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "vue";
async function C(o, t, r) {
  const m = i(o);
  return (await p(m, a.from(t), { ...r })).data.count;
}
export {
  C as executeForTopCount
};

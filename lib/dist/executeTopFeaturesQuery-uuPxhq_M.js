import { f as e } from "./utils-iTYrz_MZ.js";
import { y as f } from "./queryTopFeatures-j-zuqgW_.js";
import { dv as s, g as n } from "./index-B7TsCcH6.js";
import "./normalizeUtils-Le73uFr2.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./query-1m4tLbNM.js";
import "./pbfQueryUtils-7EAEP13Y.js";
import "./pbf-AaymeYEC.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "vue";
async function N(r, o, t, m) {
  const i = e(r), p = { ...m }, { data: a } = await f(i, s.from(o), t, p);
  return n.fromJSON(a);
}
export {
  N as executeTopFeaturesQuery
};

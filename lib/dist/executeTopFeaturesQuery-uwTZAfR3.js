import { f as e } from "./utils-QyFvT44r.js";
import { y as f } from "./queryTopFeatures-lm8HoJHw.js";
import { dv as s, g as n } from "./index-h53IWweP.js";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./query-ePqQPCKo.js";
import "./pbfQueryUtils-72HutQeH.js";
import "./pbf-LwH3gq-e.js";
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

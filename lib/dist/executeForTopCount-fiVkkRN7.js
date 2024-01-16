import { f as i } from "./utils-QyFvT44r.js";
import { m as p } from "./queryTopFeatures-lm8HoJHw.js";
import { dv as a } from "./index-h53IWweP.js";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./query-ePqQPCKo.js";
import "./pbfQueryUtils-72HutQeH.js";
import "./pbf-LwH3gq-e.js";
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

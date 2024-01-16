import { dv as i, aC as a } from "./index-h53IWweP.js";
import { f as e } from "./utils-QyFvT44r.js";
import { p as n } from "./queryTopFeatures-lm8HoJHw.js";
import "vue";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./query-ePqQPCKo.js";
import "./pbfQueryUtils-72HutQeH.js";
import "./pbf-LwH3gq-e.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
async function C(o, r, m) {
  const p = e(o), t = await n(p, i.from(r), { ...m });
  return { count: t.data.count, extent: a.fromJSON(t.data.extent) };
}
export {
  C as executeForTopExtents
};

import { f as i } from "./utils-ZpixBail.js";
import { m as p } from "./queryTopFeatures-beBZ7YhT.js";
import { dv as a } from "./index-HxXrdrYt.js";
import "./normalizeUtils--xHzoVSe.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./query-aJTyB32e.js";
import "./pbfQueryUtils-91ISjCB5.js";
import "./pbf-xpZxashh.js";
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

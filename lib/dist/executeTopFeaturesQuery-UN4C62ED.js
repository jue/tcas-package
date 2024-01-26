import { f as e } from "./utils-ZpixBail.js";
import { y as f } from "./queryTopFeatures-beBZ7YhT.js";
import { dv as s, g as n } from "./index-HxXrdrYt.js";
import "./normalizeUtils--xHzoVSe.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./query-aJTyB32e.js";
import "./pbfQueryUtils-91ISjCB5.js";
import "./pbf-xpZxashh.js";
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

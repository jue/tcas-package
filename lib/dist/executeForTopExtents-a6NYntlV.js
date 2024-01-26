import { dv as i, aC as a } from "./index-HxXrdrYt.js";
import { f as e } from "./utils-ZpixBail.js";
import { p as n } from "./queryTopFeatures-beBZ7YhT.js";
import "vue";
import "./normalizeUtils--xHzoVSe.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./query-aJTyB32e.js";
import "./pbfQueryUtils-91ISjCB5.js";
import "./pbf-xpZxashh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
async function C(o, r, m) {
  const p = e(o), t = await n(p, i.from(r), { ...m });
  return { count: t.data.count, extent: a.fromJSON(t.data.extent) };
}
export {
  C as executeForTopExtents
};

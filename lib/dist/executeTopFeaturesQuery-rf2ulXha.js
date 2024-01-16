import { f as e } from "./utils-4fNQuSlg.js";
import { y as f } from "./queryTopFeatures-ICjs8ZXl.js";
import { dv as s, g as n } from "./index-O2RTvw_o.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./query-E9l7qcVr.js";
import "./pbfQueryUtils-yEqcNzVb.js";
import "./pbf-jTu79NaY.js";
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

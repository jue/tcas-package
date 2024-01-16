import { dv as i, aC as a } from "./index-O2RTvw_o.js";
import { f as e } from "./utils-4fNQuSlg.js";
import { p as n } from "./queryTopFeatures-ICjs8ZXl.js";
import "vue";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./query-E9l7qcVr.js";
import "./pbfQueryUtils-yEqcNzVb.js";
import "./pbf-jTu79NaY.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
async function C(o, r, m) {
  const p = e(o), t = await n(p, i.from(r), { ...m });
  return { count: t.data.count, extent: a.fromJSON(t.data.extent) };
}
export {
  C as executeForTopExtents
};

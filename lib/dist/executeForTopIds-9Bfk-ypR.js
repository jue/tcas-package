import { f as i } from "./utils-4fNQuSlg.js";
import { d as p } from "./queryTopFeatures-ICjs8ZXl.js";
import { dv as a } from "./index-O2RTvw_o.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./query-E9l7qcVr.js";
import "./pbfQueryUtils-yEqcNzVb.js";
import "./pbf-jTu79NaY.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "vue";
async function v(o, r, t) {
  const m = i(o);
  return (await p(m, a.from(r), { ...t })).data.objectIds;
}
export {
  v as executeForTopIds
};

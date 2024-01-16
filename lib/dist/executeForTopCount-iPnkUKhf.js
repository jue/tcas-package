import { f as i } from "./utils-4fNQuSlg.js";
import { m as p } from "./queryTopFeatures-ICjs8ZXl.js";
import { dv as a } from "./index-O2RTvw_o.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./query-E9l7qcVr.js";
import "./pbfQueryUtils-yEqcNzVb.js";
import "./pbf-jTu79NaY.js";
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

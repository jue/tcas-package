import { ag as a, bX as c } from "./index-j1oaLRcp.js";
const i = 96;
function f(e, o) {
  const t = o || e.extent, n = e.width, r = a(t && t.spatialReference);
  return t && n ? t.width / n * r * c * i : 0;
}
export {
  f as r
};

import { f as c } from "./utils-ZpixBail.js";
import { p as m, d as s } from "./query-aJTyB32e.js";
import { aD as f } from "./index-HxXrdrYt.js";
async function u(t, n, o) {
  const r = c(t);
  return m(r, f.from(n), { ...o }).then((a) => a.data.count);
}
async function d(t, n, o) {
  const r = c(t);
  return s(r, f.from(n), { ...o }).then((a) => a.data.objectIds);
}
export {
  u as n,
  d as s
};

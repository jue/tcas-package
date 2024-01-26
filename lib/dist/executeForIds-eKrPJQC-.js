import { f as c } from "./utils-iTYrz_MZ.js";
import { p as m, d as s } from "./query-1m4tLbNM.js";
import { aD as f } from "./index-B7TsCcH6.js";
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

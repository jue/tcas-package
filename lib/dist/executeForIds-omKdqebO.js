import { f as c } from "./utils-4fNQuSlg.js";
import { p as m, d as s } from "./query-E9l7qcVr.js";
import { aD as f } from "./index-O2RTvw_o.js";
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

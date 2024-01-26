import { f as m } from "./utils-iTYrz_MZ.js";
import { m as s } from "./query-1m4tLbNM.js";
import { g as c, aD as e } from "./index-B7TsCcH6.js";
async function y(r, a, o) {
  const t = await p(r, a, o);
  return c.fromJSON(t);
}
async function p(r, a, o) {
  const t = m(r), f = { ...o }, n = e.from(a), { data: i } = await s(t, n, n.sourceSpatialReference, f);
  return i;
}
export {
  p as a,
  y as s
};

import { cc as t, bh as e, cd as m, ce as s, bT as p, cf as b, cg as h, at as d, ch as j } from "./index-O2RTvw_o.js";
import { s as w, c as x } from "./sphere-LhraSVmh.js";
function a(r) {
  return r ? { origin: t(r.origin), vector: t(r.vector) } : { origin: e(), vector: e() };
}
function k(r, o, n = a()) {
  return m(n.origin, r), s(n.vector, o, r), n;
}
function l(r, o, n) {
  return A(r, o, 0, 1, n);
}
function A(r, o, n, u, i) {
  const { vector: c, origin: v } = r, f = s(x.get(), o, v), g = p(c, f) / b(c);
  return h(i, c, d(g, n, u)), j(i, i, r.origin);
}
new w(() => a());
export {
  k as b,
  l as j,
  a as v
};

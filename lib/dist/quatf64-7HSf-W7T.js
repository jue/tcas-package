function t() {
  return [0, 0, 0, 1];
}
function u(e) {
  return [e[0], e[1], e[2], e[3]];
}
function c(e, r, n, o) {
  return [e, r, n, o];
}
function l(e, r) {
  return new Float64Array(e, r, 4);
}
const a = t();
Object.freeze(Object.defineProperty({ __proto__: null, IDENTITY: a, clone: u, create: t, createView: l, fromValues: c }, Symbol.toStringTag, { value: "Module" }));
export {
  t as e,
  l as n,
  a as o,
  u as r
};
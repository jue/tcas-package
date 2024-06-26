const o = Math.PI, c = 128 / o, e = 256 / 360, f = 1 / Math.LN2;
function u(t, n) {
  return (t %= n) >= 0 ? t : t + n;
}
function i(t) {
  return u(t * c, 256);
}
function a(t) {
  return u(t * e, 256);
}
function h(t) {
  return Math.log(t) * f;
}
function M(t, n, r) {
  return t >= n && t <= r || t >= r && t <= n;
}
export {
  a as M,
  h as P,
  M as g,
  i as h
};

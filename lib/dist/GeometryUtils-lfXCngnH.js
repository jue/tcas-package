const a = Number.POSITIVE_INFINITY, r = Math.PI, c = 2 * r, o = 128 / r, f = r / 180, e = 1 / Math.LN2;
function I(t, n) {
  return (t %= n) >= 0 ? t : t + n;
}
function h(t) {
  return I(t * o, 256);
}
function N(t) {
  return Math.log(t) * e;
}
function i(t, n, u) {
  return t * (1 - u) + n * u;
}
export {
  N as P,
  I as a,
  i as b,
  f,
  h,
  a as n,
  c as r,
  r as t
};

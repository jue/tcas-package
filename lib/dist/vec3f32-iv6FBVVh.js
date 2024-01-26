function a() {
  return new Float32Array(3);
}
function r(t, u, o) {
  const n = new Float32Array(3);
  return n[0] = t, n[1] = u, n[2] = o, n;
}
function e() {
  return r(1, 1, 1);
}
function c() {
  return r(1, 0, 0);
}
function f() {
  return r(0, 1, 0);
}
function i() {
  return r(0, 0, 1);
}
e();
c();
f();
i();
export {
  a as n,
  r as t
};

import { aP as f } from "./index-j1oaLRcp.js";
import { D as m } from "./vec4-ehH7P-M2.js";
function P(n, o, r) {
  r *= 0.5;
  const c = Math.sin(r);
  return n[0] = c * o[0], n[1] = c * o[1], n[2] = c * o[2], n[3] = Math.cos(r), n;
}
function I(n, o) {
  const r = 2 * Math.acos(o[3]), c = Math.sin(r / 2);
  return c > f ? (n[0] = o[0] / c, n[1] = o[1] / c, n[2] = o[2] / c) : (n[0] = 1, n[1] = 0, n[2] = 0), r;
}
function v(n, o, r) {
  const c = o[0], e = o[1], i = o[2], h = o[3], u = r[0], M = r[1], a = r[2], t = r[3];
  return n[0] = c * t + h * u + e * a - i * M, n[1] = e * t + h * M + i * u - c * a, n[2] = i * t + h * a + c * M - e * u, n[3] = h * t - c * u - e * M - i * a, n;
}
function w(n, o) {
  return n[0] = -o[0], n[1] = -o[1], n[2] = -o[2], n[3] = o[3], n;
}
function x(n, o, r, c) {
  const e = 0.5 * Math.PI / 180;
  o *= e, r *= e, c *= e;
  const i = Math.sin(o), h = Math.cos(o), u = Math.sin(r), M = Math.cos(r), a = Math.sin(c), t = Math.cos(c);
  return n[0] = i * M * t - h * u * a, n[1] = h * u * t + i * M * a, n[2] = h * M * a - i * u * t, n[3] = h * M * t + i * u * a, n;
}
const C = m;
export {
  x as C,
  P as I,
  C as N,
  I as P,
  v,
  w
};

import { at as f } from "./index-HxXrdrYt.js";
function p(t, e, r = 0) {
  const o = f(t, 0, c);
  for (let n = 0; n < 4; n++)
    e[r + n] = Math.floor(256 * u(o * l[n]));
}
function i(t, e = 0) {
  let r = 0;
  for (let o = 0; o < 4; o++)
    r += t[e + o] * a[o];
  return r;
}
const l = [1, 256, 65536, 16777216], a = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296], c = i(new Uint8ClampedArray([255, 255, 255, 255]));
function u(t) {
  return t - Math.floor(t);
}
export {
  p as o,
  i as r
};

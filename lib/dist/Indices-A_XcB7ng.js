import { bz as o, bA as f } from "./index-B7TsCcH6.js";
function y(r) {
  return o(r) ? r.length < f ? r : a(r) : r.length < f ? Array.from(r) : r.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT ? r : a(r);
}
function a(r) {
  let n = !0;
  for (const e of r) {
    if (e >= 65536)
      return o(r) ? new Uint32Array(r) : r;
    e >= 256 && (n = !1);
  }
  return n ? new Uint8Array(r) : new Uint16Array(r);
}
function l(r) {
  return r <= f ? new Array(r) : r <= 65536 ? new Uint16Array(r) : new Uint32Array(r);
}
let t = (() => {
  const r = new Uint32Array(131072);
  for (let n = 0; n < r.length; ++n)
    r[n] = n;
  return r;
})();
const u = [0], i = (() => {
  const r = new Uint16Array(65536);
  for (let n = 0; n < r.length; ++n)
    r[n] = n;
  return r;
})();
function w(r) {
  if (r === 1)
    return u;
  if (r < f)
    return Array.from(new Uint16Array(i.buffer, 0, r));
  if (r < i.length)
    return new Uint16Array(i.buffer, 0, r);
  if (r > t.length) {
    const n = Math.max(2 * t.length, r);
    t = new Uint32Array(n);
    for (let e = 0; e < t.length; e++)
      t[e] = e;
  }
  return new Uint32Array(t.buffer, 0, r);
}
export {
  l as i,
  y as t,
  w as y
};
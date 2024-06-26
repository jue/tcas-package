import { ca as v } from "./index-Ek1MTSEY.js";
const T = (() => {
  if (!("document" in globalThis))
    return () => null;
  const t = document.createElement("canvas"), e = t.getContext("2d"), n = 512;
  return t.height = n, t.width = 1, (r) => {
    e.clearRect(0, 0, 1, t.height);
    const a = e.createLinearGradient(0, 0, 0, t.height);
    for (const { ratio: c, color: o } of r)
      a.addColorStop(Math.max(c, 1e-3), `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`);
    return e.fillStyle = a, e.fillRect(0, 0, 1, t.height), e.getImageData(0, 0, 1, t.height).data;
  };
})();
function L(t, e, n, r) {
  const { blurRadius: a, fieldOffset: c, field: o } = e, u = new Float64Array(n * r), s = E(a), i = Math.round(3 * a);
  let h, l = Number.NEGATIVE_INFINITY;
  const A = G(o, c), M = /* @__PURE__ */ new Set();
  for (const I of t) {
    const d = I.getCursor();
    for (; d.next(); ) {
      const b = d.getObjectId();
      if (M.has(b))
        continue;
      M.add(b);
      const f = d.readLegacyPointGeometry(), g = 128;
      if (f.x < -g || f.x >= n + g || f.y < -g || f.y > r + g)
        continue;
      const p = +A(d), x = Math.round(f.x) - i, w = Math.round(f.y) - i, U = Math.max(0, x), $ = Math.max(0, w), C = Math.min(r, Math.round(f.y) + i), F = Math.min(n, Math.round(f.x) + i);
      for (let m = $; m < C; m++) {
        const N = s[m - w];
        for (let y = U; y < F; y++) {
          const R = s[y - x];
          h = u[m * n + y] += N * R * p, h > l && (l = h);
        }
      }
    }
  }
  return { matrix: u.buffer, max: l };
}
function O(t, e, n, r, a, c) {
  t.canvas.width = t.canvas.height = e, t.clearRect(0, 0, e, e);
  const o = t.getImageData(0, 0, e, e);
  n && r && o.data.set(new Uint8ClampedArray(D(e, n, r, a, c))), t.putImageData(o, 0, 0);
}
function D(t, e, n, r, a) {
  const c = new Uint32Array(t * t), o = "buffer" in e ? e : new Float64Array(e), u = "buffer" in n ? new Uint32Array(n.buffer) : new Uint32Array(new Uint8Array(n).buffer), s = u.length / (a - r);
  for (let i = 0; i < o.length; i++) {
    const h = o[i], l = Math.floor((h - r) * s);
    c[i] = u[v(l, 0, u.length - 1)];
  }
  return c.buffer;
}
function E(t) {
  const e = Math.round(3 * t), n = 2 * t * t, r = new Float64Array(2 * e + 1);
  for (let a = 0; a <= r.length; a++)
    r[a] = Math.exp(-((a - e) ** 2) / n) / Math.sqrt(2 * Math.PI) * (t / 2);
  return r;
}
function G(t, e) {
  return t != null ? typeof e == "string" ? (n) => -1 * +n.readAttribute(t) : (n) => +n.readAttribute(t) + e : (n) => 1;
}
export {
  O as a,
  T as e,
  L as r
};

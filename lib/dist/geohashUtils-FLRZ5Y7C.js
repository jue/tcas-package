const x = new Float64Array(2), F = new Float64Array(2), j = "0123456789bcdefghjkmnpqrstuvwxyz";
function k(o) {
  return j[o];
}
function X(o) {
  return (o[0] + o[1]) / 2;
}
function M(o, r, c) {
  return o[0] = r, o[1] = c, o;
}
function m(o, r) {
  const c = X(o), l = r, e = !r;
  o[0] = e * o[0] + l * c, o[1] = e * c + l * o[1];
}
function A(o, r) {
  const c = r > X(o);
  return m(o, c), c;
}
function q(o, r) {
  let c = -90, l = 90, e = -180, s = 180;
  for (let u = 0; u < r; u++) {
    const n = Math.ceil((u + 1) / 2), w = Math.floor((u + 1) / 2), h = 1 - u % 2, g = 30 - (3 * n + 2 * w), i = 30 - (2 * n + 3 * w), f = 3 * h + 2 * (1 - h), t = 2 * h + 3 * (1 - h), a = 3 * h + 7 * (1 - h) << i, Y = (7 * h + 3 * (1 - h) << g & o.geohashX) >> g, b = (a & o.geohashY) >> i;
    for (let p = f - 1; p >= 0; p--) {
      const y = (e + s) / 2, d = Y & 1 << p ? 1 : 0;
      e = (1 - d) * e + d * y, s = (1 - d) * y + d * s;
    }
    for (let p = t - 1; p >= 0; p--) {
      const y = (c + l) / 2, d = b & 1 << p ? 1 : 0;
      c = (1 - d) * c + d * y, l = (1 - d) * y + d * l;
    }
  }
  return [e, c, s, l];
}
function v(o, r, c, l) {
  l % 2 && (l += 1);
  let e = 0, s = 0, u = -90, n = 90, w = -180, h = 180;
  for (let g = 0; g < l / 2; g++) {
    for (let i = 0; i < 5; i++) {
      const f = (w + h) / 2, t = c > f ? 1 : 0;
      e |= t << 29 - (i + 5 * g), w = (1 - t) * w + t * f, h = (1 - t) * f + t * h;
    }
    for (let i = 0; i < 5; i++) {
      const f = (u + n) / 2, t = r > f ? 1 : 0;
      s |= t << 29 - (i + 5 * g), u = (1 - t) * u + t * f, n = (1 - t) * f + t * n;
    }
  }
  o.geohashX = e, o.geohashY = s;
}
function z(o, r, c, l, e) {
  e % 2 && (e += 1);
  let s = 0, u = 0, n = -90, w = 90, h = -180, g = 180;
  for (let i = 0; i < e / 2; i++) {
    for (let f = 0; f < 5; f++) {
      const t = (h + g) / 2, a = l > t ? 1 : 0;
      s |= a << 29 - (f + 5 * i), h = (1 - a) * h + a * t, g = (1 - a) * t + a * g;
    }
    for (let f = 0; f < 5; f++) {
      const t = (n + w) / 2, a = c > t ? 1 : 0;
      u |= a << 29 - (f + 5 * i), n = (1 - a) * n + a * t, w = (1 - a) * t + a * w;
    }
  }
  o[2 * r] = s, o[2 * r + 1] = u;
}
function B(o, r, c) {
  let l = "";
  const e = M(x, -90, 90), s = M(F, -180, 180);
  for (let u = 0; u < c; u++) {
    let n = 0;
    u % 2 ? (n |= A(e, o) << 4, n |= A(s, r) << 3, n |= A(e, o) << 2, n |= A(s, r) << 1, n |= A(e, o) << 0) : (n |= A(s, r) << 4, n |= A(e, o) << 3, n |= A(s, r) << 2, n |= A(e, o) << 1, n |= A(s, r) << 0), l += k(n);
  }
  return l;
}
export {
  q as X,
  v as Y,
  z as b,
  B as p
};
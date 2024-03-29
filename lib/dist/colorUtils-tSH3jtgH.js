function x(t) {
  return "r" in t && "g" in t && "b" in t;
}
function f(t) {
  return "h" in t && "s" in t && "v" in t;
}
function b(t) {
  return "l" in t && "a" in t && "b" in t;
}
function l(t) {
  return "l" in t && "c" in t && "h" in t;
}
function k(t) {
  return "x" in t && "y" in t && "z" in t;
}
const p = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], y = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
function g(t, n) {
  const r = [];
  let u, o;
  if (t[0].length !== n.length)
    throw "dimensions do not match";
  const c = t.length, a = t[0].length;
  let i = 0;
  for (u = 0; u < c; u++) {
    for (i = 0, o = 0; o < a; o++)
      i += t[u][o] * n[o];
    r.push(i);
  }
  return r;
}
function M(t) {
  const n = [t.r / 255, t.g / 255, t.b / 255].map((u) => u <= 0.04045 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4), r = g(p, n);
  return { x: 100 * r[0], y: 100 * r[1], z: 100 * r[2] };
}
function e(t) {
  const n = g(y, [t.x / 100, t.y / 100, t.z / 100]).map((r) => {
    const u = r <= 31308e-7 ? 12.92 * r : 1.055 * r ** 0.4166666666666667 - 0.055;
    return Math.min(1, Math.max(u, 0));
  });
  return { r: Math.round(255 * n[0]), g: Math.round(255 * n[1]), b: Math.round(255 * n[2]) };
}
function m(t) {
  const n = [t.x / 95.047, t.y / 100, t.z / 108.883].map((r) => r > 0.008856451679035631 ? r ** 0.3333333333333333 : 7.787037037037035 * r + 0.13793103448275862);
  return { l: 116 * n[1] - 16, a: 500 * (n[0] - n[1]), b: 200 * (n[1] - n[2]) };
}
function d(t) {
  const n = t.l, r = [(n + 16) / 116 + t.a / 500, (n + 16) / 116, (n + 16) / 116 - t.b / 200].map((u) => u > 6 / 29 ? u ** 3 : 3 * (6 / 29) ** 2 * (u - 4 / 29));
  return { x: 95.047 * r[0], y: 100 * r[1], z: 108.883 * r[2] };
}
function z(t) {
  const n = t.l, r = t.a, u = t.b, o = Math.sqrt(r * r + u * u);
  let c = Math.atan2(u, r);
  return c = c > 0 ? c : c + 2 * Math.PI, { l: n, c: o, h: c };
}
function v(t) {
  const n = t.l, r = t.c, u = t.h;
  return { l: n, a: r * Math.cos(u), b: r * Math.sin(u) };
}
function w(t) {
  return m(M(t));
}
function q(t) {
  return e(d(t));
}
function I(t) {
  return z(m(M(t)));
}
function P(t) {
  return e(d(v(t)));
}
function j(t) {
  const n = t.r, r = t.g, u = t.b, o = Math.max(n, r, u), c = o - Math.min(n, r, u);
  let a = o, i = c === 0 ? 0 : o === n ? (r - u) / c % 6 : o === r ? (u - n) / c + 2 : (n - r) / c + 4, s = c === 0 ? 0 : c / a;
  return i < 0 && (i += 6), i *= 60, s *= 100, a *= 100 / 255, { h: i, s, v: a };
}
function A(t) {
  const n = (t.h + 360) % 360 / 60, r = t.s / 100, u = t.v / 100 * 255, o = u * r, c = o * (1 - Math.abs(n % 2 - 1));
  let a;
  switch (Math.floor(n)) {
    case 0:
      a = { r: o, g: c, b: 0 };
      break;
    case 1:
      a = { r: c, g: o, b: 0 };
      break;
    case 2:
      a = { r: 0, g: o, b: c };
      break;
    case 3:
      a = { r: 0, g: c, b: o };
      break;
    case 4:
      a = { r: c, g: 0, b: o };
      break;
    case 5:
    case 6:
      a = { r: o, g: 0, b: c };
      break;
    default:
      a = { r: 0, g: 0, b: 0 };
  }
  return a.r = Math.round(a.r + u - o), a.g = Math.round(a.g + u - o), a.b = Math.round(a.b + u - o), a;
}
function h(t) {
  return x(t) ? t : l(t) ? P(t) : b(t) ? q(t) : k(t) ? e(t) : f(t) ? A(t) : t;
}
function B(t) {
  return f(t) ? t : j(h(t));
}
function C(t) {
  return b(t) ? t : w(h(t));
}
function D(t) {
  return l(t) ? t : I(h(t));
}
export {
  h as p,
  D as v,
  B as y,
  C as z
};

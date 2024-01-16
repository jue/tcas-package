function o(n) {
  return 32 + n.length;
}
function u(n) {
  return 16;
}
function l(n) {
  if (!n)
    return 0;
  let e = f;
  for (const r in n)
    if (n.hasOwnProperty(r)) {
      const t = n[r];
      switch (typeof t) {
        case "string":
          e += o(t);
          break;
        case "number":
          e += u();
          break;
        case "boolean":
          e += 4;
      }
    }
  return e;
}
function s(n) {
  if (!n)
    return 0;
  if (Array.isArray(n))
    return a(n);
  let e = f;
  for (const r in n)
    n.hasOwnProperty(r) && (e += c(n[r]));
  return e;
}
function a(n) {
  const e = n.length;
  if (e === 0 || typeof n[0] == "number")
    return 32 + 8 * e;
  let r = i;
  for (let t = 0; t < e; t++)
    r += c(n[t]);
  return r;
}
function c(n) {
  switch (typeof n) {
    case "object":
      return s(n);
    case "string":
      return o(n);
    case "number":
      return u();
    case "boolean":
      return 4;
    default:
      return 8;
  }
}
function b(n, e) {
  return i + n.length * e;
}
const f = 32, i = 32;
export {
  b as c,
  s as e,
  l as t
};
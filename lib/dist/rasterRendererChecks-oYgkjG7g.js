function o(t) {
  var n, u, e;
  return ["u8", "s8"].includes(t.pixelType) && ((u = (n = t.statistics) == null ? void 0 : n[0]) == null ? void 0 : u.min) != null && ((e = t.statistics[0]) == null ? void 0 : e.max) != null && t.bandCount === 1;
}
function i(t, n) {
  const { attributeTable: u, bandCount: e } = t;
  return u == null && o(t) ? !0 : !(u == null || e > 1 || n && u.fields.find((r) => r.name.toLowerCase() === n.toLowerCase()) == null);
}
function a(t) {
  const { bandCount: n, dataType: u, pixelType: e } = t;
  return u === "elevation" || u === "generic" && n === 1 && (e === "s16" || e === "s32" || e === "f32" || e === "f64");
}
function l(t, n = !1) {
  const { bandCount: u, colormap: e, pixelType: r } = t;
  return u === 1 && (!!(e != null && e.length) || !n && r === "u8");
}
function c(t, n = !1) {
  const { attributeTable: u, bandCount: e } = t;
  return e === 1 && (!n || u != null || t.histograms != null);
}
function s(t) {
  const { dataType: n } = t;
  return n === "vector-uv" || n === "vector-magdir";
}
function f(t) {
  const { dataType: n } = t;
  return n === "vector-uv" || n === "vector-magdir";
}
export {
  a as e,
  f as i,
  s as o,
  c as r,
  i as t,
  l as u
};
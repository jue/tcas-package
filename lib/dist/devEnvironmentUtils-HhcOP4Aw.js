function l(e) {
  return e = e || globalThis.location.hostname, a.some((t) => (e == null ? void 0 : e.match(t)) != null);
}
function i(e, t) {
  return e && (t = t || globalThis.location.hostname) ? t.match(c) != null || t.match(s) != null ? e.replace("static.arcgis.com", "staticdev.geoscene.cn") : t.match(n) != null || t.match(o) != null ? e.replace("static.arcgis.com", "staticqa.arcgis.com") : e : e;
}
const c = /^devext.geoscene.cn$/, n = /^qaext.geoscene.cn$/, s = /^[\w-]*\.mapsdevext.geoscene.cn$/, o = /^[\w-]*\.mapsqa.geoscene.cn$/, a = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/, c, n, /^jsapps.esri.com$/, s, o];
export {
  i as a,
  l as c
};

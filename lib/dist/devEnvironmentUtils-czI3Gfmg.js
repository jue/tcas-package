function r(e) {
  return e = e || globalThis.location.hostname, l.some((c) => {
    var n;
    return ((n = e) == null ? void 0 : n.match(c)) != null;
  });
}
function i(e, c) {
  return e && (c = c || globalThis.location.hostname) ? c.match(t) != null || c.match(s) != null ? e.replace("static.arcgis.com", "staticdev.geoscene.cn") : c.match(o) != null || c.match(a) != null ? e.replace("static.arcgis.com", "staticqa.arcgis.com") : e : e;
}
const t = /^devext.geoscene.cn$/, o = /^qaext.geoscene.cn$/, s = /^[\w-]*\.mapsdevext.geoscene.cn$/, a = /^[\w-]*\.mapsqa.geoscene.cn$/, l = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/, t, o, /^jsapps.esri.com$/, s, a];
export {
  i as a,
  r as c
};

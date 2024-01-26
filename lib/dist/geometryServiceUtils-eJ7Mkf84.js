import { aq as c, y as l, aa as s } from "./index-j1oaLRcp.js";
import { a as u, n as m } from "./project-ij_0nuPN.js";
import "vue";
async function g(e = null, o) {
  var i, t;
  if (c.geometryServiceUrl)
    return c.geometryServiceUrl;
  if (!e)
    throw new l("internal:geometry-service-url-not-configured");
  let n;
  n = "portal" in e ? e.portal || s.getDefault() : e, await n.load({ signal: o });
  const r = (i = n.helperServices) == null || (t = i.geometry) == null ? void 0 : t.url;
  if (!r)
    throw new l("internal:geometry-service-url-not-configured");
  return r;
}
async function w(e, o, i = null, t) {
  const n = await g(i, t), r = new u();
  r.geometries = [e], r.outSpatialReference = o;
  const a = await m(n, r, { signal: t });
  if (a && Array.isArray(a) && a.length === 1)
    return a[0];
  throw new l("internal:geometry-service-projection-failed");
}
export {
  g as getGeometryServiceURL,
  w as projectGeometry
};

import { S as p, ao as h, ap as I, aq as k, C as x, ar as P, as as S, at as m, au as d, av as w, m as v, x as E, t as O, B as $ } from "./index-Ek1MTSEY.js";
const C = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function B(r) {
  const s = r.folders || [], t = s.slice(), e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i, esriGeometryPolygon: f };
  (r.featureCollection && r.featureCollection.layers || []).forEach((o) => {
    const y = p(o);
    y.featureSet.features = [];
    const a = o.featureSet.geometryType;
    e.set(a, y);
    const g = o.layerDefinition.objectIdField;
    a === "esriGeometryPoint" ? G(n, g, o.featureSet.features) : a === "esriGeometryPolyline" ? G(i, g, o.featureSet.features) : a === "esriGeometryPolygon" && G(f, g, o.featureSet.features);
  }), r.groundOverlays && r.groundOverlays.forEach((o) => {
    c.set(o.id, o);
  }), s.forEach((o) => {
    o.networkLinkIds.forEach((y) => {
      const a = M(y, o.id, r.networkLinks);
      a && t.push(a);
    });
  }), t.forEach((o) => {
    if (o.featureInfos) {
      o.points = p(e.get("esriGeometryPoint")), o.polylines = p(e.get("esriGeometryPolyline")), o.polygons = p(e.get("esriGeometryPolygon")), o.mapImages = [];
      for (const y of o.featureInfos)
        switch (y.type) {
          case "esriGeometryPoint":
          case "esriGeometryPolyline":
          case "esriGeometryPolygon": {
            const a = l[y.type].get(y.id);
            a && o[C[y.type]].featureSet.features.push(a);
            break;
          }
          case "GroundOverlay": {
            const a = c.get(y.id);
            a && o.mapImages.push(a);
            break;
          }
        }
      o.fullExtent = b([o]);
    }
  });
  const u = b(t);
  return { folders: s, sublayers: t, extent: u };
}
function D(r, s, t, e) {
  const n = h && h.findCredential(r);
  r = I(r, { token: n && n.token });
  const i = k.kmlServiceUrl;
  return x(i, { query: { url: r, model: "simple", folders: "", refresh: t !== 0 || void 0, outSR: JSON.stringify(s) }, responseType: "json", signal: e });
}
function J(r, s, t = null, e = []) {
  const n = [], i = {}, f = s.sublayers, c = s.folders.map((l) => l.id);
  return f.forEach((l) => {
    const u = new r();
    if (t ? u.read(l, t) : u.read(l), e.length && c.indexOf(u.id) > -1 && (u.visible = e.indexOf(u.id) !== -1), i[l.id] = u, l.parentFolderId != null && l.parentFolderId !== -1) {
      const o = i[l.parentFolderId];
      o.sublayers || (o.sublayers = []), o.sublayers.unshift(u);
    } else
      n.unshift(u);
  }), n;
}
function G(r, s, t) {
  t.forEach((e) => {
    r.set(e.attributes[s], e);
  });
}
function F(r, s) {
  let t;
  return s.some((e) => e.id === r && (t = e, !0)), t;
}
function M(r, s, t) {
  const e = F(r, t);
  return e && (e.parentFolderId = s, e.networkLink = e), e;
}
async function L(r) {
  const s = E.fromJSON(r.featureSet).features, t = r.layerDefinition, e = O(t.drawingInfo.renderer), n = $.fromJSON(r.popupInfo), i = [];
  for (const f of s) {
    const c = await e.getSymbolAsync(f);
    f.symbol = c, f.popupTemplate = n, f.visible = !0, i.push(f);
  }
  return i;
}
function b(r) {
  const s = P(S), t = P(S);
  for (const e of r) {
    if (e.polygons && e.polygons.featureSet && e.polygons.featureSet.features)
      for (const n of e.polygons.featureSet.features)
        m(s, n.geometry), d(t, s);
    if (e.polylines && e.polylines.featureSet && e.polylines.featureSet.features)
      for (const n of e.polylines.featureSet.features)
        m(s, n.geometry), d(t, s);
    if (e.points && e.points.featureSet && e.points.featureSet.features)
      for (const n of e.points.featureSet.features)
        m(s, n.geometry), d(t, s);
    if (e.mapImages)
      for (const n of e.mapImages)
        m(s, n.extent), d(t, s);
  }
  return w(t, S) ? null : { xmin: t[0], ymin: t[1], zmin: t[2], xmax: t[3], ymax: t[4], zmax: t[5], spatialReference: v.WGS84 };
}
export {
  J as S,
  L as b,
  B as d,
  D as g,
  b as j
};

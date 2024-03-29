import { M as m, r as h, ag as c } from "./index-j1oaLRcp.js";
function u(e, n) {
  return n ? "xoffset" in n && n.xoffset ? Math.max(e, Math.abs(n.xoffset)) : "yoffset" in n && n.yoffset ? Math.max(e, Math.abs(n.yoffset || 0)) : e : e;
}
function M(e) {
  let n = 0, r = 0;
  for (let s = 0; s < e.length; s++) {
    const t = e[s].size;
    typeof t == "number" && (n += t, r++);
  }
  return n / r;
}
function p(e, n) {
  return typeof e == "number" ? e : e && e.stops && e.stops.length ? M(e.stops) : n;
}
function b(e, n) {
  if (!n)
    return e;
  const r = n.filter((a) => a.type === "size").map((a) => {
    const { maxSize: f, minSize: o } = a;
    return (p(f, e) + p(o, e)) / 2;
  });
  let s = 0;
  const t = r.length;
  if (t === 0)
    return e;
  for (let a = 0; a < t; a++)
    s += r[a];
  const i = Math.floor(s / t);
  return Math.max(i, e);
}
function z(e) {
  const n = e && e.renderer, r = (e && e.event && e.event.pointerType) === "touch" ? 9 : 6;
  if (!n)
    return r;
  const s = "visualVariables" in n ? b(r, n.visualVariables) : r;
  if (n.type === "simple")
    return u(s, n.symbol);
  if (n.type === "unique-value") {
    let t = s;
    return n.uniqueValueInfos.forEach((i) => {
      t = u(t, i.symbol);
    }), t;
  }
  if (n.type === "class-breaks") {
    let t = s;
    return n.classBreakInfos.forEach((i) => {
      t = u(t, i.symbol);
    }), t;
  }
  return n.type, s;
}
function R(e, n, r, s = new m()) {
  let t;
  if (r.type === "2d")
    t = n * r.resolution;
  else if (r.type === "3d") {
    const x = r.overlayPixelSizeInMapUnits(e), l = r.basemapSpatialReference;
    t = h(l) && !l.equals(r.spatialReference) ? c(l) / c(r.spatialReference) : n * x;
  }
  const i = e.x - t, a = e.y - t, f = e.x + t, o = e.y + t, { spatialReference: y } = r;
  return s.xmin = Math.min(i, f), s.ymin = Math.min(a, o), s.xmax = Math.max(i, f), s.ymax = Math.max(a, o), s.spatialReference = y, s;
}
new m();
export {
  R as a,
  z as s
};

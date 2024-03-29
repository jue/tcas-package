const Z = { convertToGEGeometry: a, exportPoint: c, exportPolygon: m, exportPolyline: l, exportMultipoint: M, exportExtent: f };
function a(i, t) {
  return t == null ? null : i.convertJSONToGeometry(t);
}
class r {
  constructor(t, s, n) {
    this.x = t, this.y = s, this.spatialReference = n, this.z = void 0, this.m = void 0;
  }
}
function c(i, t, s) {
  const n = new r(i.getPointX(t), i.getPointY(t), s), e = i.hasZ(t), o = i.hasM(t);
  return e && (n.z = i.getPointZ(t)), o && (n.m = i.getPointM(t)), n;
}
class x {
  constructor(t, s, n, e) {
    this.rings = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, n && (this.hasZ = n), e && (this.hasM = e);
  }
}
function m(i, t, s) {
  return new x(i.exportPaths(t), s, i.hasZ(t), i.hasM(t));
}
class u {
  constructor(t, s, n, e) {
    this.paths = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, n && (this.hasZ = n), e && (this.hasM = e);
  }
}
function l(i, t, s) {
  return new u(i.exportPaths(t), s, i.hasZ(t), i.hasM(t));
}
class v {
  constructor(t, s, n, e) {
    this.points = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, n && (this.hasZ = n), e && (this.hasM = e);
  }
}
function M(i, t, s) {
  return new v(i.exportPoints(t), s, i.hasZ(t), i.hasM(t));
}
class p {
  constructor(t, s, n, e, o) {
    this.xmin = t, this.ymin = s, this.xmax = n, this.ymax = e, this.spatialReference = o, this.zmin = void 0, this.zmax = void 0, this.mmin = void 0, this.mmax = void 0;
  }
}
function f(i, t, s) {
  const n = i.hasZ(t), e = i.hasM(t), o = new p(i.getXMin(t), i.getYMin(t), i.getXMax(t), i.getYMax(t), s);
  if (n) {
    const h = i.getZExtent(t);
    o.zmin = h.vmin, o.zmax = h.vmax;
  }
  if (e) {
    const h = i.getMExtent(t);
    o.mmin = h.vmin, o.mmax = h.vmax;
  }
  return o;
}
export {
  Z as t
};

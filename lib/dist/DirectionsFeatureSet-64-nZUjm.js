import { e as r, d as p, a as R, b, M as j, aE as D, x as G, m as M, ad as $, ab as O, w as E } from "./index-j1oaLRcp.js";
let T = class extends b {
};
r([p()], T.prototype, "events", void 0), r([p()], T.prototype, "strings", void 0), T = r([R("geoscene.rest.support.DirectionsFeature")], T);
const w = T;
let o = class extends G {
  constructor(s) {
    super(s), this.extent = null, this.features = null, this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(s, l) {
    var n;
    if (!s)
      return [];
    const h = (n = l.summary.envelope.spatialReference) != null ? n : l.spatialReference, d = h && M.fromJSON(h);
    return s.map((c) => {
      var a, i;
      const f = this._decompressGeometry(c.compressedGeometry), v = new $({ ...f, spatialReference: d }), e = (a = (i = c.events) == null ? void 0 : i.map((g) => {
        const { arriveTimeUTC: x, ETA: I, point: { x: t, y: u, z: m }, strings: y } = g;
        return new w({ geometry: new O({ x: t, y: u, z: m, hasZ: m !== void 0, spatialReference: d }), attributes: { ETA: I, arriveTimeUTC: x }, strings: y });
      })) != null ? a : [];
      return new w({ attributes: c.attributes, events: e, geometry: v, strings: c.strings });
    });
  }
  get mergedGeometry() {
    if (!this.features)
      return null;
    const s = this.features.map(({ geometry: n }) => E(n)), l = this.get("extent.spatialReference");
    return this._mergePolylinesToSinglePath(s, l);
  }
  get strings() {
    return this.features.map(({ strings: s }) => s);
  }
  _decompressGeometry(s) {
    let l = 0, n = 0, h = 0, d = 0;
    const c = [];
    let a, i, f, v, e, g, x, I, t = 0, u = 0, m = 0;
    if (e = s.match(/((\+|\-)[^\+\-\|]+|\|)/g), e || (e = []), parseInt(e[t], 32) === 0) {
      t = 2;
      const y = parseInt(e[t], 32);
      t++, g = parseInt(e[t], 32), t++, 1 & y && (u = e.indexOf("|") + 1, x = parseInt(e[u], 32), u++), 2 & y && (m = e.indexOf("|", u) + 1, I = parseInt(e[m], 32), m++);
    } else
      g = parseInt(e[t], 32), t++;
    for (; t < e.length && e[t] !== "|"; ) {
      a = parseInt(e[t], 32) + l, t++, l = a, i = parseInt(e[t], 32) + n, t++, n = i;
      const y = [a / g, i / g];
      u && (v = parseInt(e[u], 32) + h, u++, h = v, y.push(v / x)), m && (f = parseInt(e[m], 32) + d, m++, d = f, y.push(f / I)), c.push(y);
    }
    return { paths: [c], hasZ: u > 0, hasM: m > 0 };
  }
  _mergePolylinesToSinglePath(s, l) {
    if (s.length === 0)
      return new $({ spatialReference: l });
    const n = [];
    for (const a of s)
      for (const i of a.paths)
        n.push(...i);
    const h = [];
    n.forEach((a, i) => {
      i !== 0 && a[0] === n[i - 1][0] && a[1] === n[i - 1][1] || h.push(a);
    });
    const { hasM: d, hasZ: c } = s[0];
    return new $({ hasM: d, hasZ: c, paths: [h], spatialReference: l });
  }
};
r([p({ type: j, json: { read: { source: "summary.envelope" } } })], o.prototype, "extent", void 0), r([p()], o.prototype, "features", void 0), r([D("features")], o.prototype, "readFeatures", null), r([p()], o.prototype, "geometryType", void 0), r([p({ readOnly: !0 })], o.prototype, "mergedGeometry", null), r([p()], o.prototype, "routeId", void 0), r([p()], o.prototype, "routeName", void 0), r([p({ value: null, readOnly: !0 })], o.prototype, "strings", null), r([p({ json: { read: { source: "summary.totalDriveTime" } } })], o.prototype, "totalDriveTime", void 0), r([p({ json: { read: { source: "summary.totalLength" } } })], o.prototype, "totalLength", void 0), r([p({ json: { read: { source: "summary.totalTime" } } })], o.prototype, "totalTime", void 0), o = r([R("geoscene.rest.support.DirectionsFeatureSet")], o);
const P = o;
export {
  P as c
};

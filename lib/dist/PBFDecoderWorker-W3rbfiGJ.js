import { ar as d, dh as c, eY as p, l as f, m as y, bY as m, eZ as g, aW as P, e_ as C, e$ as b, f0 as _ } from "./index-Ek1MTSEY.js";
import "vue";
class G {
  constructor(e, t, r) {
    this.uid = e, this.geometry = t, this.attributes = r, this.visible = !0, this.objectId = null, this.centroid = null;
  }
}
class v {
  constructor() {
    this.exceededTransferLimit = !1, this.features = [], this.fields = [], this.hasM = !1, this.hasZ = !1, this.geometryType = null, this.objectIdFieldName = null, this.globalIdFieldName = null, this.geometryProperties = null, this.geohashFieldName = null, this.spatialReference = null, this.transform = null;
  }
}
d();
c();
function M(i, e) {
  return e;
}
function h(i, e, t, r) {
  switch (t) {
    case 0:
      return a(i, e + r, 0);
    case 1:
      return i.originPosition === "lowerLeft" ? a(i, e + r, 1) : x(i, e + r, 1);
  }
}
function u(i, e, t, r) {
  return t === 2 ? a(i, e, 2) : h(i, e, t, r);
}
function T(i, e, t, r) {
  return t === 2 ? a(i, e, 3) : h(i, e, t, r);
}
function R(i, e, t, r) {
  return t === 3 ? a(i, e, 3) : u(i, e, t, r);
}
function a({ translate: i, scale: e }, t, r) {
  return i[r] + t * e[r];
}
function x({ translate: i, scale: e }, t, r) {
  return i[r] - t * e[r];
}
class k {
  constructor(e) {
    this.options = e, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this.previousCoordinate = [0, 0], this.transform = null, this.applyTransform = M, this.lengths = [], this.currentLengthIndex = 0, this.toAddInCurrentPath = 0, this.vertexDimension = 0, this.coordinateBuffer = null, this.coordinateBufferPtr = 0, this._attributesConstructor = function() {
    };
  }
  createFeatureResult() {
    return new v();
  }
  finishFeatureResult(e) {
    if (this.options.applyTransform && (e.transform = null), this._attributesConstructor = function() {
    }, this.coordinateBuffer = null, this.lengths.length = 0, !e.hasZ)
      return;
    const t = p(e.geometryType, this.options.sourceSpatialReference, e.spatialReference);
    if (!f(t))
      for (const r of e.features)
        t(r.geometry);
  }
  createSpatialReference() {
    return new y();
  }
  addField(e, t) {
    e.fields.push(m.fromJSON(t));
    const r = e.fields.map((s) => s.name);
    this._attributesConstructor = function() {
      for (const s of r)
        this[s] = null;
    };
  }
  addFeature(e, t) {
    const r = this.options.maxStringAttributeLength ? this.options.maxStringAttributeLength : 0;
    if (r > 0)
      for (const s in t.attributes) {
        const o = t.attributes[s];
        typeof o == "string" && o.length > r && (t.attributes[s] = "");
      }
    e.features.push(t);
  }
  addQueryGeometry(e, t) {
    const { queryGeometry: r, queryGeometryType: s } = t, o = g(r.clone(), r, !1, !1, this.transform), l = P(o, s, !1, !1);
    let n = null;
    switch (s) {
      case "esriGeometryPoint":
        n = "point";
        break;
      case "esriGeometryPolygon":
        n = "polygon";
        break;
      case "esriGeometryPolyline":
        n = "polyline";
        break;
      case "esriGeometryMultipoint":
        n = "multipoint";
    }
    l.type = n, e.queryGeometryType = s, e.queryGeometry = l;
  }
  prepareFeatures(e) {
    switch (this.transform = e.transform, this.options.applyTransform && e.transform && (this.applyTransform = this._deriveApplyTransform(e)), this.vertexDimension = 2, e.hasZ && this.vertexDimension++, e.hasM && this.vertexDimension++, e.geometryType) {
      case "point":
        this.addCoordinate = (t, r, s) => this.addCoordinatePoint(t, r, s), this.createGeometry = (t) => this.createPointGeometry(t);
        break;
      case "polygon":
        this.addCoordinate = (t, r, s) => this._addCoordinatePolygon(t, r, s), this.createGeometry = (t) => this._createPolygonGeometry(t);
        break;
      case "polyline":
        this.addCoordinate = (t, r, s) => this._addCoordinatePolyline(t, r, s), this.createGeometry = (t) => this._createPolylineGeometry(t);
        break;
      case "multipoint":
        this.addCoordinate = (t, r, s) => this._addCoordinateMultipoint(t, r, s), this.createGeometry = (t) => this._createMultipointGeometry(t);
        break;
      case "mesh":
      case "extent":
        break;
      default:
        C(e.geometryType);
    }
  }
  createFeature() {
    return this.lengths.length = 0, this.currentLengthIndex = 0, this.previousCoordinate[0] = 0, this.previousCoordinate[1] = 0, new G(b(), null, new this._attributesConstructor());
  }
  allocateCoordinates() {
    const e = this.lengths.reduce((t, r) => t + r, 0);
    this.coordinateBuffer = new Float64Array(e * this.vertexDimension), this.coordinateBufferPtr = 0;
  }
  addLength(e, t, r) {
    this.lengths.length === 0 && (this.toAddInCurrentPath = t), this.lengths.push(t);
  }
  createPointGeometry(e) {
    const t = { type: "point", x: 0, y: 0, spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
    return t.hasZ && (t.z = 0), t.hasM && (t.m = 0), t;
  }
  addCoordinatePoint(e, t, r) {
    switch (t = this.applyTransform(this.transform, t, r, 0), r) {
      case 0:
        e.x = t;
        break;
      case 1:
        e.y = t;
        break;
      case 2:
        e.hasZ ? e.z = t : e.m = t;
        break;
      case 3:
        e.m = t;
    }
  }
  _transformPathLikeValue(e, t) {
    let r = 0;
    return t <= 1 && (r = this.previousCoordinate[t], this.previousCoordinate[t] += e), this.applyTransform(this.transform, e, t, r);
  }
  _addCoordinatePolyline(e, t, r) {
    this._dehydratedAddPointsCoordinate(e.paths, t, r);
  }
  _addCoordinatePolygon(e, t, r) {
    this._dehydratedAddPointsCoordinate(e.rings, t, r);
  }
  _addCoordinateMultipoint(e, t, r) {
    r === 0 && e.points.push([]);
    const s = this._transformPathLikeValue(t, r);
    e.points[e.points.length - 1].push(s);
  }
  _createPolygonGeometry(e) {
    return { type: "polygon", rings: [[]], spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
  }
  _createPolylineGeometry(e) {
    return { type: "polyline", paths: [[]], spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
  }
  _createMultipointGeometry(e) {
    return { type: "multipoint", points: [], spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
  }
  _dehydratedAddPointsCoordinate(e, t, r) {
    r === 0 && this.toAddInCurrentPath-- == 0 && (e.push([]), this.toAddInCurrentPath = this.lengths[++this.currentLengthIndex] - 1, this.previousCoordinate[0] = 0, this.previousCoordinate[1] = 0);
    const s = this._transformPathLikeValue(t, r), o = e[e.length - 1];
    r === 0 && o.push(new Float64Array(this.coordinateBuffer.buffer, this.coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT, this.vertexDimension)), this.coordinateBuffer[this.coordinateBufferPtr++] = s;
  }
  _deriveApplyTransform(e) {
    const { hasZ: t, hasM: r } = e;
    return t && r ? R : t ? u : r ? T : h;
  }
}
class Z {
  _parseFeatureQuery(e) {
    const t = _(e.buffer, new k(e.options)), r = { ...t, spatialReference: t.spatialReference.toJSON(), fields: t.fields ? t.fields.map((s) => s.toJSON()) : void 0 };
    return Promise.resolve(r);
  }
}
function F() {
  return new Z();
}
export {
  F as default
};

class t {
  constructor() {
    this.objectIdFieldName = null, this.globalIdFieldName = null, this.geohashFieldName = null, this.geometryProperties = null, this.geometryType = null, this.spatialReference = null, this.hasZ = !1, this.hasM = !1, this.features = [], this.fields = [], this.transform = null, this.exceededTransferLimit = !1, this.uniqueIdField = null, this.queryGeometryType = null, this.queryGeometry = null;
  }
  weakClone() {
    const e = new t();
    return e.objectIdFieldName = this.objectIdFieldName, e.globalIdFieldName = this.globalIdFieldName, e.geohashFieldName = this.geohashFieldName, e.geometryProperties = this.geometryProperties, e.geometryType = this.geometryType, e.spatialReference = this.spatialReference, e.hasZ = this.hasZ, e.hasM = this.hasM, e.features = this.features, e.fields = this.fields, e.transform = this.transform, e.exceededTransferLimit = this.exceededTransferLimit, e.uniqueIdField = this.uniqueIdField, e.queryGeometry = this.queryGeometry, e.queryGeometryType = this.queryGeometryType, e;
  }
}
export {
  t as e
};
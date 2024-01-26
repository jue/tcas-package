import { a as m, c as d, l as u, f as y, z as h, A as c } from "./index-HxXrdrYt.js";
import b from "./FeatureLayerView2D-oSWjsEcR.js";
import "vue";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./LayerView-xItHBa3T.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./util-_Vbm8maX.js";
import "./BitmapTileContainer-gQnm5fn6.js";
import "./Bitmap-EiCLkSAd.js";
import "./TileContainer-KY-TE4tX.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-IiDyiuVY.js";
import "./FeatureContainer-iNSNk881.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-r80YF5Ip.js";
import "./RefreshableLayerView-8Iw3yFgN.js";
function g(i, e) {
  return !i.visible || i.minScale !== 0 && e > i.minScale || i.maxScale !== 0 && e < i.maxScale;
}
let n = class extends b {
  initialize() {
    this.addHandles([u(() => this.view.scale, () => this._update(), y)], "constructor");
  }
  isUpdating() {
    var l;
    const i = this.layer.sublayers.some((p) => p.renderer != null), e = this._commandsQueue.updating, s = this._updatingRequiredFieldsPromise != null, t = !this._proxy || !this._proxy.isReady, r = this._pipelineIsUpdating, o = this.tileRenderer == null || ((l = this.tileRenderer) == null ? void 0 : l.updating), a = i && (e || s || t || r || o);
    return h("geoscene-2d-log-updating") && console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`), a;
  }
  _injectOverrides(i) {
    let e = super._injectOverrides(i);
    const s = this.view.scale, t = this.layer.sublayers.filter((o) => g(o, s)).map((o) => o.subtypeCode);
    if (!t.length)
      return e;
    e = e ?? new c().toJSON();
    const r = `NOT ${this.layer.subtypeField} IN (${t.join(",")})`;
    return e.where = e.where ? `(${e.where}) AND (${r})` : r, e;
  }
  _setLayersForFeature(i) {
    const e = this.layer.fieldsIndex.get(this.layer.subtypeField), s = i.attributes[e.name], t = this.layer.sublayers.find((r) => r.subtypeCode === s);
    i.layer = i.sourceLayer = t;
  }
  _createSchemaConfig() {
    const i = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers).map((r) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: r.labelingInfo, labelsVisible: r.labelsVisible, renderer: r.renderer, subtypeCode: r.subtypeCode, orderBy: null })) }, e = this.layer.sublayers.map((r) => r.subtypeCode).join(","), s = this.layer.sublayers.length ? `${this.layer.subtypeField} IN (${e})` : "1=2";
    let t = this.layer.definitionExpression ? this.layer.definitionExpression + " AND " : "";
    return t += s, { ...super._createSchemaConfig(), ...i, definitionExpression: t };
  }
};
n = m([d("geoscene.views.2d.layers.SubtypeGroupLayerView2D")], n);
const oe = n;
export {
  oe as default
};
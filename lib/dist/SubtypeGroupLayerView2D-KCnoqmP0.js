import { a as m, c as d, l as u, f as y, z as h, A as c } from "./index-h53IWweP.js";
import b from "./FeatureLayerView2D-TQHwIIRy.js";
import "vue";
import "./Container-wINu8WJB.js";
import "./definitions-Ikx6Iti_.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-9jggcs3t.js";
import "./LayerView-Ll--tTKd.js";
import "./AttributeStoreView-XrRsw0gL.js";
import "./TiledDisplayObject-k5lpE5yM.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-5YwL0fPU.js";
import "./VertexArrayObject-xRQjh19m.js";
import "./ProgramTemplate-WGFc3YF6.js";
import "./GeometryUtils-qBcr22nw.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-LPvm_IXh.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-ESIGpRYL.js";
import "./ExpandedCIM-3LZTL41U.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-m9Kp97Du.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-r2uAqrNR.js";
import "./floatRGBA-RF2HKI4x.js";
import "./util-ykcsKwVm.js";
import "./BitmapTileContainer-jEzjGdsB.js";
import "./Bitmap-6par73L5.js";
import "./TileContainer--axx6PsF.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-yCmodbIJ.js";
import "./FeatureContainer-cnT1vi-B.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-4iz1Oao6.js";
import "./RefreshableLayerView-qRSqC3UG.js";
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

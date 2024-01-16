import { a as m, c as d, l as u, f as y, z as h, A as c } from "./index-O2RTvw_o.js";
import b from "./FeatureLayerView2D-dw5mIx3P.js";
import "vue";
import "./Container-YlBWRIXD.js";
import "./definitions-jqTA3541.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
import "./LayerView-AYRNbjM7.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./color-etN3NLwm.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-Onm3yFPW.js";
import "./VertexArrayObject-6efe00MS.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./floatRGBA-ePb46nBT.js";
import "./util-KO5PrNj-.js";
import "./BitmapTileContainer-C2EKDlVt.js";
import "./Bitmap-lpchWwAe.js";
import "./TileContainer-90vnlfVn.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-4rb57HRE.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-mdF6m28P.js";
import "./RefreshableLayerView-JIvmUqov.js";
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

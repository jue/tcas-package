import { a as m, c as d, l as u, f as y, z as h, A as c } from "./index-B7TsCcH6.js";
import b from "./FeatureLayerView2D-pAZqBQLm.js";
import "vue";
import "./Container-ul_EuzrF.js";
import "./definitions-Co8CrS3w.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-v5WxIbZy.js";
import "./LayerView-C6bBL_rq.js";
import "./AttributeStoreView-gMBKUgth.js";
import "./TiledDisplayObject-952ryiS7.js";
import "./color-Xkczoxbf.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-vjbZun5V.js";
import "./VertexArrayObject-_p3La6MY.js";
import "./ProgramTemplate-aPyLVtfI.js";
import "./GeometryUtils-wM6A7upA.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-azOcA8wo.js";
import "./featureConversionUtils-oKi2Ei-6.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-w0od9lEd.js";
import "./ExpandedCIM-sWOoIMVV.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-99Msuqlm.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-nKmgNZQ1.js";
import "./floatRGBA-Wp7e9WKm.js";
import "./util-Q6nUdqQ4.js";
import "./BitmapTileContainer-bjclGYVO.js";
import "./Bitmap-qcipg2DH.js";
import "./TileContainer-v6Rn1fM6.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-Hf2QRSda.js";
import "./FeatureContainer-1uun9v5E.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-siDvgqb0.js";
import "./RefreshableLayerView-zx_azbUs.js";
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

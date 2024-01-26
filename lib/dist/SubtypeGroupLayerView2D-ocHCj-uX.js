import { e as l, a as n, i as p, r as y, z as m } from "./index-j1oaLRcp.js";
import u from "./FeatureLayerView2D-38umVoIr.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./enums-YM9SAu8u.js";
import "./LayerView-u7tKPPGO.js";
import "./schemaUtils-NQXxAz6-.js";
import "./Utils-Mkp4Julu.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./MaterialKey-tb9URCR8.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./popupUtils-GfxNYuRl.js";
import "./floorFilterUtils-HsstcPZ9.js";
import "./RefreshableLayerView-nMKrSELX.js";
function d(r, e) {
  return !r.visible || r.minScale !== 0 && e > r.minScale || r.maxScale !== 0 && e < r.maxScale;
}
let a = class extends u {
  initialize() {
    this.handles.add([p(this.view, "viewpoint", () => this._update())]);
  }
  _injectOverrides(r) {
    let e = super._injectOverrides(r);
    const s = this.view.scale, i = this.layer.sublayers.filter((o) => d(o, s)).map((o) => o.subtypeCode);
    if (!i.length)
      return e;
    e = y(e) ? e : new m().toJSON();
    const t = `NOT ${this.layer.subtypeField} IN (${i.join(",")})`;
    return e.where = e.where ? `(${e.where}) AND (${t})` : t, e;
  }
  _setLayersForFeature(r) {
    const e = this.layer.fieldsIndex.get(this.layer.subtypeField), s = r.attributes[e.name], i = this.layer.sublayers.find((t) => t.subtypeCode === s);
    r.layer = i, r.sourceLayer = this.layer;
  }
  _createSchemaConfig() {
    const r = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers).map((t) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: t.labelingInfo, labelsVisible: t.labelsVisible, renderer: t.renderer, subtypeCode: t.subtypeCode, orderBy: null })) }, e = this.layer.sublayers.map((t) => t.subtypeCode).join(","), s = this.layer.sublayers.length ? `${this.layer.subtypeField} IN (${e})` : "1=2";
    let i = this.layer.definitionExpression ? this.layer.definitionExpression + " AND " : "";
    return i += s, { ...super._createSchemaConfig(), ...r, definitionExpression: i };
  }
};
a = l([n("geoscene.views.2d.layers.SubtypeGroupLayerView2D")], a);
const z = a;
export {
  z as default
};

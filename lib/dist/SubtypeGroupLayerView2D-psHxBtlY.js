import { e as l, a as n, i as p, r as y, z as m } from "./index-Ek1MTSEY.js";
import u from "./FeatureLayerView2D-uPKEZCL1.js";
import "vue";
import "./Container-zrthpNTa.js";
import "./enums-YM9SAu8u.js";
import "./LayerView-d-au0HlH.js";
import "./schemaUtils-U3wpMwz7.js";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./MD5-ekk-4Jqp.js";
import "./util-_ClfQE9K.js";
import "./popupUtils-bYu52YBh.js";
import "./floorFilterUtils-HsstcPZ9.js";
import "./RefreshableLayerView-7pUptc3P.js";
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

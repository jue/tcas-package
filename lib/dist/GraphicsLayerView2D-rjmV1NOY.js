import { b as p, j as a, e as s, d as o, a as g } from "./index-Ek1MTSEY.js";
import { f as m, u as l } from "./LayerView-d-au0HlH.js";
import { i as n } from "./GraphicContainer-lrIEDGw2.js";
import { r as c } from "./BaseGraphicContainer-UV2N_B2B.js";
import "vue";
import "./Container-zrthpNTa.js";
import "./Utils-1SmxxQP6.js";
import "./enums-YM9SAu8u.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./BidiEngine-NdusBwFe.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-OcYAvekw.js";
import "./json-uwIaZKlZ.js";
import "./VertexArrayObject-a9fTrWIE.js";
import "./FeatureContainer-7uy8-M8s.js";
import "./TileContainer-Oq8bP95c.js";
import "./WGLContainer-euFYNSIp.js";
import "./pixelUtils-fZs8KEK2.js";
import "./ProgramTemplate-RS7QiLoF.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
import "./visualVariablesUtils-MRd41y5-.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./Matcher-j-6bbFef.js";
import "./tileUtils-_JbVMe5W.js";
import "./TileClipper-UwGzPO3l.js";
import "./Geometry-etmNDSLV.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./schemaUtils-U3wpMwz7.js";
import "./MD5-ekk-4Jqp.js";
import "./util-_ClfQE9K.js";
import "./ComputedAttributeStorage-oDQUKOa8.js";
import "./vec3f32-iv6FBVVh.js";
const d = { remove() {
}, pause() {
}, resume() {
} };
let r = class extends m(l) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  attach() {
    this.graphicsView = new c({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new n(this.view.featuresTilingScheme) }), this._updateHighlight(), this.container.addChild(this.graphicsView.container), this.handles.add(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler), "graphicslayerview2d");
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView.destroy(), this.graphicsView = null, this.handles.remove("graphicslayerview2d");
  }
  async hitTest(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i) : null;
  }
  async fetchPopupFeatures(i) {
    if (this.graphicsView)
      return this.graphicsView.hitTest(i).filter((t) => !!t.popupTemplate);
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i) {
    var t;
    let e;
    return typeof i == "number" ? e = [i] : i instanceof p ? e = [i.uid] : Array.isArray(i) && i.length > 0 ? e = typeof i[0] == "number" ? i : i.map((h) => h && h.uid) : a.isCollection(i) && i.length > 0 && (e = i.map((h) => h && h.uid).toArray()), e = (t = e) == null ? void 0 : t.filter((h) => h != null), e.length ? (this._addHighlight(e), { remove: () => this._removeHighlight(e) }) : d;
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const e = this._highlightIds.get(t);
        this._highlightIds.set(t, e + 1);
      } else
        this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const e = this._highlightIds.get(t) - 1;
        e === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, e);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    var i;
    (i = this.graphicsView) == null || i.setHighlight(Array.from(this._highlightIds.keys()));
  }
};
s([o()], r.prototype, "graphicsView", void 0), r = s([g("geoscene.views.2d.layers.GraphicsLayerView2D")], r);
const ei = r;
export {
  ei as default
};

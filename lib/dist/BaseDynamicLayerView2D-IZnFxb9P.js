import { d as s, s as p, a as r, b as a, c as m } from "./index-h53IWweP.js";
import { a as n } from "./BitmapContainer-SLxx1cOH.js";
import { f as h, d } from "./LayerView-Ll--tTKd.js";
import { v as c } from "./ExportStrategy-sQdg6OOY.js";
import { a as g } from "./RefreshableLayerView-qRSqC3UG.js";
import "vue";
import "./WGLContainer-5YwL0fPU.js";
import "./definitions-Ikx6Iti_.js";
import "./VertexArrayObject-xRQjh19m.js";
import "./Texture-9jggcs3t.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-WGFc3YF6.js";
import "./GeometryUtils-qBcr22nw.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./Container-wINu8WJB.js";
import "./earcut-LPvm_IXh.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./Bitmap-6par73L5.js";
let t = class extends g(h(d)) {
  update(e) {
    this._strategy.update(e).catch((i) => {
      s(i) || p.getLogger(this).error(i);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new n(), this.container.addChild(this._bitmapContainer), this._strategy = new c({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(e, i, o) {
    return this.layer.fetchImageBitmap(e, i, o);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
r([a()], t.prototype, "_strategy", void 0), r([a()], t.prototype, "updating", void 0), t = r([m("geoscene.views.2d.layers.BaseDynamicLayerView2D")], t);
const z = t;
export {
  z as default
};

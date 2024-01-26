import { d as s, s as p, a as r, b as a, c as m } from "./index-HxXrdrYt.js";
import { a as n } from "./BitmapContainer-zfq4Ko40.js";
import { f as h, d } from "./LayerView-xItHBa3T.js";
import { v as c } from "./ExportStrategy-MBKw0cAU.js";
import { a as g } from "./RefreshableLayerView-8Iw3yFgN.js";
import "vue";
import "./WGLContainer-ZsplblwK.js";
import "./definitions-5wPyT42Z.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./Texture-X07ZHrz1.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./Container-y548tJqA.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./Bitmap-EiCLkSAd.js";
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

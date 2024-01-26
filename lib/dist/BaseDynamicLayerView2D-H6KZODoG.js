import { d as s, s as p, a as r, b as a, c as m } from "./index-B7TsCcH6.js";
import { a as n } from "./BitmapContainer-t1LoeQR3.js";
import { f as h, d } from "./LayerView-C6bBL_rq.js";
import { v as c } from "./ExportStrategy-XITex4jo.js";
import { a as g } from "./RefreshableLayerView-zx_azbUs.js";
import "vue";
import "./WGLContainer-vjbZun5V.js";
import "./definitions-Co8CrS3w.js";
import "./VertexArrayObject-_p3La6MY.js";
import "./Texture-v5WxIbZy.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-Xkczoxbf.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-aPyLVtfI.js";
import "./GeometryUtils-wM6A7upA.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./Container-ul_EuzrF.js";
import "./earcut-azOcA8wo.js";
import "./featureConversionUtils-oKi2Ei-6.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./Bitmap-qcipg2DH.js";
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

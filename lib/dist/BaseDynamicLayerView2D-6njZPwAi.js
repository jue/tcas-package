import { d as s, s as p, a as r, b as a, c as m } from "./index-O2RTvw_o.js";
import { a as n } from "./BitmapContainer-1b9261AI.js";
import { f as h, d } from "./LayerView-AYRNbjM7.js";
import { v as c } from "./ExportStrategy-jeXRPs6o.js";
import { a as g } from "./RefreshableLayerView-JIvmUqov.js";
import "vue";
import "./WGLContainer-Onm3yFPW.js";
import "./definitions-jqTA3541.js";
import "./VertexArrayObject-6efe00MS.js";
import "./Texture-RB7_nCpt.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-etN3NLwm.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./Container-YlBWRIXD.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./Bitmap-lpchWwAe.js";
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

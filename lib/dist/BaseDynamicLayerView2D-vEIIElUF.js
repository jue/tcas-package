import { s as o, g as p, e as r, d as a, a as m } from "./index-Ek1MTSEY.js";
import { t as n } from "./BitmapContainer-wkm9HdbY.js";
import { f as h, u as d } from "./LayerView-d-au0HlH.js";
import { S as c } from "./ExportStrategy-rn8g2X2y.js";
import { i as g } from "./RefreshableLayerView-7pUptc3P.js";
import "vue";
import "./WGLContainer-euFYNSIp.js";
import "./enums-n72NRQQZ.js";
import "./pixelUtils-fZs8KEK2.js";
import "./Container-zrthpNTa.js";
import "./VertexArrayObject-a9fTrWIE.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./enums-YM9SAu8u.js";
import "./Utils-1SmxxQP6.js";
import "./ProgramTemplate-RS7QiLoF.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./earcut-80XuLCNX.js";
import "./Bitmap-4w2CSmRH.js";
const y = o.getLogger("geoscene.views.2d.layers.BaseDynamicLayerView2D");
let t = class extends g(h(d)) {
  update(i) {
    this.strategy.update(i).catch((e) => {
      p(e) || y.error(e);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new n(), this.container.addChild(this._bitmapContainer), this.strategy = new c({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this.strategy.destroy(), this.strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(i, e, s) {
    return this.layer.fetchImage(i, e, s);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
};
r([a()], t.prototype, "strategy", void 0), r([a()], t.prototype, "updating", void 0), t = r([m("geoscene.views.2d.layers.BaseDynamicLayerView2D")], t);
const k = t;
export {
  k as default
};

import { e as a, d as m, ax as F, a as M, y as x, s as V, g as E, f as $, M as R } from "./index-Ek1MTSEY.js";
import { t as b } from "./BitmapContainer-wkm9HdbY.js";
import { f as q, u as U } from "./LayerView-d-au0HlH.js";
import { S as W } from "./ExportStrategy-rn8g2X2y.js";
import { i as L } from "./RefreshableLayerView-7pUptc3P.js";
import { l as j } from "./ExportWMSImageParameters-wD5JYHxJ.js";
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
const z = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new j({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get exportImageVersion() {
      var r;
      return (r = this.exportImageParameters) == null || r.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    fetchPopupFeatures(r) {
      const { layer: i } = this;
      if (!r)
        return Promise.reject(new x("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: i }));
      const { popupEnabled: n } = i;
      if (!n)
        return Promise.reject(new x("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: n }));
      const u = this.createFetchPopupFeaturesQuery(r);
      if (!u)
        return Promise.resolve([]);
      const { extent: o, width: s, height: p, x: c, y: l } = u;
      if (!(o && s && p))
        throw new x("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: o, width: s, height: p });
      const d = i.fetchFeatureInfo(o, s, p, c, l);
      return Promise.resolve(d ? [d] : []);
    }
  };
  return a([m()], e.prototype, "exportImageParameters", void 0), a([m({ readOnly: !0 })], e.prototype, "exportImageVersion", null), a([m()], e.prototype, "layer", void 0), a([m(F)], e.prototype, "timeExtent", void 0), e = a([M("geoscene.layers.mixins.WMSLayerView")], e), e;
}, C = V.getLogger("geoscene.views.2d.layers.WMSLayerView2D");
let h = class extends z(L(q(U))) {
  constructor() {
    super(...arguments), this.container = new b();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  update(t) {
    this.strategy.update(t).catch((e) => {
      E(e) || C.error(e);
    });
  }
  attach() {
    const { layer: t, container: e } = this, { imageMaxHeight: r, imageMaxWidth: i } = t;
    this.strategy = new W({ container: e, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: r, imageMaxWidth: i, imageRotationSupported: !1, imageNormalizationSupported: !1, hidpi: !1 }), this.handles.add($(() => this.exportImageVersion, () => this.requestUpdate()), "exportImageVersion");
  }
  detach() {
    this.handles.remove("exportImageVersion"), this.strategy.destroy(), this.strategy = null, this.container.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(t) {
    const { view: e, container: r } = this, { x: i, y: n } = t, { spatialReference: u } = e;
    let o = null, s = 0, p = 0;
    if (r.children.some((S) => {
      const { width: f, height: w, resolution: v, x: g, y } = S, P = g + v * f, I = y - v * w;
      return i >= g && i <= P && n <= y && n >= I && (o = new R({ xmin: g, ymin: I, xmax: P, ymax: y, spatialReference: u }), s = f, p = w, !0);
    }), !o)
      return null;
    const c = o.width / s, l = Math.round((i - o.xmin) / c), d = Math.round((o.ymax - n) / c);
    return { extent: o, width: s, height: p, x: l, y: d };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e, r, i) {
    return this.layer.fetchImage(t, e, r, { timeExtent: this.timeExtent, ...i });
  }
};
a([m()], h.prototype, "strategy", void 0), a([m()], h.prototype, "updating", void 0), h = a([M("geoscene.views.2d.layers.WMSLayerView2D")], h);
const ne = h;
export {
  ne as default
};

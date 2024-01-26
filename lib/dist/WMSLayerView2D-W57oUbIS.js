import { a as o, b as m, b2 as C, c as I, j as M, H as y, d as F, s as E, l as R, aC as q } from "./index-HxXrdrYt.js";
import { a as b } from "./BitmapContainer-zfq4Ko40.js";
import { f as U, d as V } from "./LayerView-xItHBa3T.js";
import { v as W } from "./ExportStrategy-MBKw0cAU.js";
import { a as H } from "./RefreshableLayerView-8Iw3yFgN.js";
import { l as L } from "./ExportWMSImageParameters-x55K1izs.js";
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
const j = (e) => {
  let t = class extends e {
    initialize() {
      this.exportImageParameters = new L({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = M(this.exportImageParameters);
    }
    get exportImageVersion() {
      var r;
      return (r = this.exportImageParameters) == null || r.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    fetchPopupFeatures(r) {
      const { layer: a } = this;
      if (!r)
        return Promise.reject(new y("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: a }));
      const { popupEnabled: p } = a;
      if (!p)
        return Promise.reject(new y("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: p }));
      const u = this.createFetchPopupFeaturesQuery(r);
      if (!u)
        return Promise.resolve([]);
      const { extent: i, width: s, height: n, x: d, y: c } = u;
      if (!(i && s && n))
        throw new y("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: i, width: s, height: n });
      return a.fetchFeatureInfo(i, s, n, d, c);
    }
  };
  return o([m()], t.prototype, "exportImageParameters", void 0), o([m({ readOnly: !0 })], t.prototype, "exportImageVersion", null), o([m()], t.prototype, "layer", void 0), o([m(C)], t.prototype, "timeExtent", void 0), t = o([I("geoscene.layers.mixins.WMSLayerView")], t), t;
};
let h = class extends j(H(U(V))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new b();
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch((t) => {
      F(t) || E.getLogger(this).error(t);
    });
  }
  attach() {
    const { layer: e } = this, { imageMaxHeight: t, imageMaxWidth: r } = e;
    this.bitmapContainer = new b(), this.container.addChild(this.bitmapContainer), this.strategy = new W({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r, imageRotationSupported: !1, imageNormalizationSupported: !1, hidpi: !1 }), this.addAttachHandles(R(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = M(this.strategy), this.container.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: r } = this, { x: a, y: p } = e, { spatialReference: u } = t;
    let i, s = 0, n = 0;
    if (r.children.some(($) => {
      const { width: x, height: f, resolution: w, x: l, y: g } = $, v = l + w * x, P = g - w * f;
      return a >= l && a <= v && p <= g && p >= P && (i = new q({ xmin: l, ymin: P, xmax: v, ymax: g, spatialReference: u }), s = x, n = f, !0);
    }), !i)
      return null;
    const d = i.width / s, c = Math.round((a - i.xmin) / d), S = Math.round((i.ymax - p) / d);
    return { extent: i, width: s, height: n, x: c, y: S };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, r, a) {
    return this.layer.fetchImageBitmap(e, t, r, { timeExtent: this.timeExtent, ...a });
  }
};
o([m()], h.prototype, "strategy", void 0), o([m()], h.prototype, "updating", void 0), h = o([I("geoscene.views.2d.layers.WMSLayerView2D")], h);
const mt = h;
export {
  mt as default
};
import { a as o, b as a, b2 as g, c as m, i as l, d, s as u, l as c } from "./index-h53IWweP.js";
import { a as y } from "./BitmapContainer-SLxx1cOH.js";
import { f, d as x } from "./LayerView-Ll--tTKd.js";
import { o as w } from "./GraphicsView2D-9VrUqx4w.js";
import { n as v } from "./HighlightGraphicContainer-pKUivKhU.js";
import { v as _ } from "./ExportStrategy-sQdg6OOY.js";
import { m as H } from "./ExportImageParameters-J_wM08jE.js";
import { a as I } from "./RefreshableLayerView-qRSqC3UG.js";
import { U, r as V } from "./drapedUtils-i0OcP1ny.js";
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
import "./ExpandedCIM-3LZTL41U.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-m9Kp97Du.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-r2uAqrNR.js";
import "./floatRGBA-RF2HKI4x.js";
import "./normalizeUtilsSync-cNupCt2o.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./projectionSupport-p_kmYZqX.js";
import "./json-uwIaZKlZ.js";
import "./AttributeStoreView-XrRsw0gL.js";
import "./TiledDisplayObject-k5lpE5yM.js";
import "./visualVariablesUtils-ESIGpRYL.js";
import "./util-ykcsKwVm.js";
import "./Matcher-EB2LXM-b.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-FFqkDx1D.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-IxoHGiVZ.js";
import "./ComputedAttributeStorage-X4eusieF.js";
import "./arcadeTimeUtils-u_1BvLqu.js";
import "./executionError-EEhTiqtD.js";
import "./normalizeUtils-zXVQRAEh.js";
import "./utils-QyFvT44r.js";
import "./BaseGraphicContainer-GynWKbdY.js";
import "./FeatureContainer-cnT1vi-B.js";
import "./TileContainer--axx6PsF.js";
import "./vec3f32-BgIjjdRt.js";
import "./Bitmap-6par73L5.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./sublayerUtils-dO-slOGX.js";
import "./scaleUtils-cblzwORW.js";
import "./popupUtils-4iz1Oao6.js";
const b = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new H({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get floors() {
      var i;
      return ((i = this.view) == null ? void 0 : i.floors) ?? null;
    }
    get exportImageVersion() {
      var i;
      return (i = this.exportImageParameters) == null || i.commitProperty("version"), this.commitProperty("timeExtent"), this.commitProperty("floors"), (this._get("exportImageVersion") || 0) + 1;
    }
    canResume() {
      var i;
      return !!super.canResume() && !((i = this.timeExtent) != null && i.isEmpty);
    }
  };
  return o([a()], e.prototype, "exportImageParameters", void 0), o([a({ readOnly: !0 })], e.prototype, "floors", null), o([a({ readOnly: !0 })], e.prototype, "exportImageVersion", null), o([a()], e.prototype, "layer", void 0), o([a()], e.prototype, "suspended", void 0), o([a(g)], e.prototype, "timeExtent", void 0), e = o([m("geoscene.views.layers.MapImageLayerView")], e), e;
};
let p = class extends b(I(f(x))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new l(), this._updateHash = "";
  }
  fetchPopupFeatures(t, e) {
    return this._popupHighlightHelper.fetchPopupFeatures(t, e);
  }
  update(t) {
    const e = `${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;
    this._updateHash !== e && (this._updateHash = e, this.strategy.update(t).catch((r) => {
      d(r) || u.getLogger(this).error(r);
    }), t.stationary && this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)), this._highlightView.processUpdate(t);
  }
  attach() {
    const { imageMaxWidth: t, imageMaxHeight: e, version: r } = this.layer, i = r >= 10.3, n = r >= 10;
    this._bitmapContainer = new y(), this.container.addChild(this._bitmapContainer), this._highlightView = new w({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new v(this.view.featuresTilingScheme), defaultPointSymbolEnabled: !1 }), this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new U({ createFetchPopupFeaturesQueryGeometry: (s, h) => V(s, h, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (s, h) => {
      this._highlightView.graphicUpdateHandler({ graphic: s, property: h });
    }, layerView: this, updatingHandles: this.updatingHandles }), this.strategy = new _({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: t, imageMaxHeight: e, imageRotationSupported: i, imageNormalizationSupported: n, hidpi: !0 }), this.addAttachHandles(c(() => this.exportImageVersion, () => this.requestUpdate())), this.requestUpdate();
  }
  detach() {
    this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren(), this._highlightView.destroy(), this._popupHighlightHelper.destroy();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  async doRefresh() {
    this._updateHash = "", this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e, r, i) {
    return this.layer.fetchImage(t, e, r, { timeExtent: this.timeExtent, floors: this.floors, ...i });
  }
  fetchImageBitmap(t, e, r, i) {
    return this.layer.fetchImageBitmap(t, e, r, { timeExtent: this.timeExtent, floors: this.floors, ...i });
  }
  highlight(t) {
    return this._popupHighlightHelper.highlight(t);
  }
};
o([a()], p.prototype, "strategy", void 0), o([a()], p.prototype, "updating", void 0), p = o([m("geoscene.views.2d.layers.MapImageLayerView2D")], p);
const Mt = p;
export {
  Mt as default
};

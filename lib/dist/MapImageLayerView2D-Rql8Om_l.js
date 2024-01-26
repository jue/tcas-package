import { a as o, b as a, b2 as g, c as m, i as l, d, s as u, l as c } from "./index-HxXrdrYt.js";
import { a as y } from "./BitmapContainer-zfq4Ko40.js";
import { f, d as x } from "./LayerView-xItHBa3T.js";
import { o as w } from "./GraphicsView2D--Chd-qUk.js";
import { n as v } from "./HighlightGraphicContainer-VqEJKfir.js";
import { v as _ } from "./ExportStrategy-MBKw0cAU.js";
import { m as H } from "./ExportImageParameters-bLvrFFb_.js";
import { a as I } from "./RefreshableLayerView-8Iw3yFgN.js";
import { U, r as V } from "./drapedUtils-jCoFsjOo.js";
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
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./normalizeUtilsSync-WlqzzP2d.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./projectionSupport-7oPVn9Md.js";
import "./json-uwIaZKlZ.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./util-_Vbm8maX.js";
import "./Matcher-72v38sbr.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-j-mSNUkn.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-kWM-xNyV.js";
import "./ComputedAttributeStorage-2KraofCx.js";
import "./arcadeTimeUtils-8XmFQ2k4.js";
import "./executionError-EEhTiqtD.js";
import "./normalizeUtils--xHzoVSe.js";
import "./utils-ZpixBail.js";
import "./BaseGraphicContainer-X4-oLxjj.js";
import "./FeatureContainer-iNSNk881.js";
import "./TileContainer-KY-TE4tX.js";
import "./vec3f32-BgIjjdRt.js";
import "./Bitmap-EiCLkSAd.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./sublayerUtils-HD1T8Okk.js";
import "./scaleUtils-T4Kp2ufH.js";
import "./popupUtils-r80YF5Ip.js";
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

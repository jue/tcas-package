import { a as o, b as a, b2 as g, c as m, i as l, d, s as u, l as c } from "./index-O2RTvw_o.js";
import { a as y } from "./BitmapContainer-1b9261AI.js";
import { f, d as x } from "./LayerView-AYRNbjM7.js";
import { o as w } from "./GraphicsView2D--2GlIbuy.js";
import { n as v } from "./HighlightGraphicContainer-5TkgOWHU.js";
import { v as _ } from "./ExportStrategy-jeXRPs6o.js";
import { m as H } from "./ExportImageParameters-7PAZc2oi.js";
import { a as I } from "./RefreshableLayerView-JIvmUqov.js";
import { U, r as V } from "./drapedUtils-7jaYxdqE.js";
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
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./floatRGBA-ePb46nBT.js";
import "./normalizeUtilsSync-Dex5kKX_.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./projectionSupport-Ywut87fi.js";
import "./json-uwIaZKlZ.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./util-KO5PrNj-.js";
import "./Matcher-877r_dj4.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-Ghf7sU9Y.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-jwA3T6ex.js";
import "./ComputedAttributeStorage-XU3YtPT-.js";
import "./arcadeTimeUtils-6Xb6Siq7.js";
import "./executionError-EEhTiqtD.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./utils-4fNQuSlg.js";
import "./BaseGraphicContainer-2F-XgeLr.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./TileContainer-90vnlfVn.js";
import "./vec3f32-BgIjjdRt.js";
import "./Bitmap-lpchWwAe.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./sublayerUtils-oAIX6Bn6.js";
import "./scaleUtils-R5RSxQVl.js";
import "./popupUtils-mdF6m28P.js";
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

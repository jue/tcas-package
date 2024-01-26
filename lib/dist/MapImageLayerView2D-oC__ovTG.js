import { a as o, b as a, b2 as g, c as m, i as l, d, s as u, l as c } from "./index-B7TsCcH6.js";
import { a as y } from "./BitmapContainer-t1LoeQR3.js";
import { f, d as x } from "./LayerView-C6bBL_rq.js";
import { o as w } from "./GraphicsView2D-Mk0LDR9N.js";
import { n as v } from "./HighlightGraphicContainer-0SdLUw2K.js";
import { v as _ } from "./ExportStrategy-XITex4jo.js";
import { m as H } from "./ExportImageParameters-HQLpyCqf.js";
import { a as I } from "./RefreshableLayerView-zx_azbUs.js";
import { U, r as V } from "./drapedUtils-B2k45UzU.js";
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
import "./ExpandedCIM-sWOoIMVV.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-99Msuqlm.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-nKmgNZQ1.js";
import "./floatRGBA-Wp7e9WKm.js";
import "./normalizeUtilsSync-RaRpR1hQ.js";
import "./normalizeUtilsCommon-KXzuXit4.js";
import "./projectionSupport-P-Yk17hX.js";
import "./json-uwIaZKlZ.js";
import "./AttributeStoreView-gMBKUgth.js";
import "./TiledDisplayObject-952ryiS7.js";
import "./visualVariablesUtils-w0od9lEd.js";
import "./util-Q6nUdqQ4.js";
import "./Matcher-oZu2Jhpq.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-3DHEGHOy.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-ebbYGtpz.js";
import "./ComputedAttributeStorage-O2RWVkE4.js";
import "./arcadeTimeUtils-49F1RqD9.js";
import "./executionError-EEhTiqtD.js";
import "./normalizeUtils-Le73uFr2.js";
import "./utils-iTYrz_MZ.js";
import "./BaseGraphicContainer-IJHgFc9L.js";
import "./FeatureContainer-1uun9v5E.js";
import "./TileContainer-v6Rn1fM6.js";
import "./vec3f32-BgIjjdRt.js";
import "./Bitmap-qcipg2DH.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./sublayerUtils-4nG-Ec5e.js";
import "./scaleUtils-2jFMtUZp.js";
import "./popupUtils-siDvgqb0.js";
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

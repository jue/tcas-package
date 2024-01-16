import { i as w, h as y, y as I, r as V, l as v, S as H, d as n, e as g, s as T, a as o, b as m, c as q } from "./index-O2RTvw_o.js";
import "./MagnifierPrograms-a8zETT4D.js";
import "./Container-YlBWRIXD.js";
import "./BufferPool-4rb57HRE.js";
import "./color-etN3NLwm.js";
import "./WGLContainer-Onm3yFPW.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./definitions-jqTA3541.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./VertexArrayObject-6efe00MS.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./enums-An2lvwTb.js";
import "./OrderIndependentTransparency-I6xtnkaq.js";
import "./floatRGBA-ePb46nBT.js";
import "./testSVGPremultipliedAlpha-pHqMyrTT.js";
import { o as U } from "./GraphicsView2D--2GlIbuy.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils-XFPcyvoe.js";
import { t as S, o as f, n as d } from "./imageUtils-w1tum3cg.js";
import { f as Q, d as b } from "./LayerView-AYRNbjM7.js";
import { n as C } from "./HighlightGraphicContainer-5TkgOWHU.js";
import { a as k } from "./RefreshableLayerView-JIvmUqov.js";
import { S as F, U as R, r as G } from "./drapedUtils-7jaYxdqE.js";
import "vue";
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./enums-QU6RH5ju.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./rasterizingUtils-HjrHBJBZ.js";
import "./pbf-jTu79NaY.js";
import "./imageutils-sZdCBaw1.js";
import "./Matcher-877r_dj4.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-Ghf7sU9Y.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-jwA3T6ex.js";
import "./CircularArray-y-fwYqtW.js";
import "./throttle-QIuHYXCG.js";
import "./ComputedAttributeStorage-XU3YtPT-.js";
import "./arcadeTimeUtils-6Xb6Siq7.js";
import "./executionError-EEhTiqtD.js";
import "./projectionSupport-Ywut87fi.js";
import "./json-uwIaZKlZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./config-TPD5ZwJG.js";
import "./basicInterfaces-qgybO4Nz.js";
import "./normalizeUtilsSync-Dex5kKX_.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./util-KO5PrNj-.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./utils-4fNQuSlg.js";
import "./BitmapTileContainer-C2EKDlVt.js";
import "./Bitmap-lpchWwAe.js";
import "./TileContainer-90vnlfVn.js";
import "./BaseGraphicContainer-2F-XgeLr.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./scaleUtils-R5RSxQVl.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./sublayerUtils-oAIX6Bn6.js";
import "./popupUtils-mdF6m28P.js";
const L = [0, 0];
let s = class extends k(S(Q(b))) {
  constructor() {
    super(...arguments), this._fetchQueue = null, this._highlightGraphics = new w(), this._highlightView = null, this._popupHighlightHelper = null, this._tileStrategy = null, this.layer = null;
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== !1;
  }
  get tilemapCache() {
    return "tilemapCache" in this.layer ? this.layer.tilemapCache : null;
  }
  update(t) {
    var e;
    this._fetchQueue.pause(), this._fetchQueue.state = t.state, this._tileStrategy.update(t), this._fetchQueue.resume(), (e = this._highlightView) == null || e.processUpdate(t);
  }
  attach() {
    const t = "tileServers" in this.layer ? this.layer.tileServers : null, e = this.tilemapCache;
    if (this._tileInfoView = new y(this.layer.tileInfo, this.layer.fullExtent, e == null ? void 0 : e.effectiveMinLOD, e == null ? void 0 : e.effectiveMaxLOD), this._fetchQueue = new I({ tileInfoView: this._tileInfoView, concurrency: t && 10 * t.length || 10, process: (i, r) => this.fetchTile(i, r) }), this._tileStrategy = new V({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (i) => this.acquireTile(i), releaseTile: (i) => this.releaseTile(i), tileInfoView: this._tileInfoView }), F(this, this.layer)) {
      const i = this._highlightView = new U({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new C(this.view.featuresTilingScheme), defaultPointSymbolEnabled: !1 });
      this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new R({ createFetchPopupFeaturesQueryGeometry: (r, h) => G(r, h, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (r, h) => {
        i.graphicUpdateHandler({ graphic: r, property: h });
      }, layerView: this, updatingHandles: this.updatingHandles });
    }
    this.requestUpdate(), this.addAttachHandles(v(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    var t;
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), (t = this._popupHighlightHelper) == null || t.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = this._popupHighlightHelper = null;
  }
  async fetchPopupFeatures(t, e) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeatures(t, e) : [];
  }
  highlight(t) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.highlight(t) : { remove() {
    } };
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    var e;
    return H((e = this.layer.tileInfo) == null ? void 0 : e.spatialReference, t);
  }
  async doRefresh() {
    !this.attached || this.updateRequested || this.suspended || (this._fetchQueue.reset(), this._tileStrategy.refresh((t) => this._enqueueTileFetch(t)));
  }
  isUpdating() {
    var t;
    return ((t = this._fetchQueue) == null ? void 0 : t.updating) ?? !1;
  }
  acquireTile(t) {
    const e = this._bitmapView.createTile(t), i = e.bitmap;
    return [i.x, i.y] = this._tileInfoView.getTileCoords(L, e.key), i.resolution = this._tileInfoView.getTileResolution(e.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(e), this._bitmapView.addChild(e), this.requestUpdate(), e;
  }
  releaseTile(t) {
    this._fetchQueue.abort(t.key.id), this._bitmapView.removeChild(t), t.once("detach", () => t.destroy()), this.requestUpdate();
  }
  async fetchTile(t, e = {}) {
    const i = this.tilemapCache, { signal: r, resamplingLevel: h = 0 } = e;
    if (!i)
      try {
        return await this._fetchImage(t, r);
      } catch (p) {
        if (!n(p) && !this.resampling)
          return f(this._tileInfoView.tileInfo.size);
        if (h < 3) {
          const u = this._tileInfoView.getTileParentId(t.id);
          if (u) {
            const c = new g(u), _ = await this.fetchTile(c, { ...e, resamplingLevel: h + 1 });
            return d(this._tileInfoView, _, c, t);
          }
        }
        throw p;
      }
    const a = new g(0, 0, 0, 0);
    let l;
    try {
      if (await i.fetchAvailabilityUpsample(t.level, t.row, t.col, a, { signal: r }), a.level !== t.level && !this.resampling)
        return f(this._tileInfoView.tileInfo.size);
      l = await this._fetchImage(a, r);
    } catch (p) {
      if (n(p))
        throw p;
      l = await this._fetchImage(t, r);
    }
    return this.resampling ? d(this._tileInfoView, l, a, t) : l;
  }
  async _enqueueTileFetch(t) {
    if (!this._fetchQueue.has(t.key.id)) {
      try {
        const e = await this._fetchQueue.push(t.key);
        t.bitmap.source = e, t.bitmap.width = this._tileInfoView.tileInfo.size[0], t.bitmap.height = this._tileInfoView.tileInfo.size[1], t.requestRender(), t.once("attach", () => this.requestUpdate());
      } catch (e) {
        n(e) || T.getLogger(this).error(e);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(t, e) {
    return this.layer.fetchImageBitmapTile(t.level, t.row, t.col, { signal: e });
  }
};
o([m()], s.prototype, "_fetchQueue", void 0), o([m()], s.prototype, "resampling", null), o([m()], s.prototype, "tilemapCache", null), s = o([q("geoscene.views.2d.layers.TileLayerView2D")], s);
const Zt = s;
export {
  Zt as default
};

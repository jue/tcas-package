import { i as w, h as y, y as I, r as V, l as v, S as H, d as n, e as g, s as T, a as o, b as m, c as q } from "./index-HxXrdrYt.js";
import "./MagnifierPrograms-WK6Qy5ce.js";
import "./Container-y548tJqA.js";
import "./BufferPool-IiDyiuVY.js";
import "./color-kwBCExHr.js";
import "./WGLContainer-ZsplblwK.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./definitions-5wPyT42Z.js";
import "./GeometryUtils-ks2bByfT.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./enums-An2lvwTb.js";
import "./OrderIndependentTransparency-I6xtnkaq.js";
import "./floatRGBA-QTyluuyG.js";
import "./testSVGPremultipliedAlpha-FN-BKCD6.js";
import { o as U } from "./GraphicsView2D--Chd-qUk.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils--xHzoVSe.js";
import { t as S, o as f, n as d } from "./imageUtils-fA_S1QbV.js";
import { f as Q, d as b } from "./LayerView-xItHBa3T.js";
import { n as C } from "./HighlightGraphicContainer-VqEJKfir.js";
import { a as k } from "./RefreshableLayerView-8Iw3yFgN.js";
import { S as F, U as R, r as G } from "./drapedUtils-jCoFsjOo.js";
import "vue";
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./enums-QU6RH5ju.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./rasterizingUtils--8u9d8sM.js";
import "./pbf-xpZxashh.js";
import "./imageutils-bTXL8AbW.js";
import "./Matcher-72v38sbr.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-j-mSNUkn.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-kWM-xNyV.js";
import "./CircularArray-y-fwYqtW.js";
import "./throttle-QIuHYXCG.js";
import "./ComputedAttributeStorage-2KraofCx.js";
import "./arcadeTimeUtils-8XmFQ2k4.js";
import "./executionError-EEhTiqtD.js";
import "./projectionSupport-7oPVn9Md.js";
import "./json-uwIaZKlZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./config-TPD5ZwJG.js";
import "./basicInterfaces-qgybO4Nz.js";
import "./normalizeUtilsSync-WlqzzP2d.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./util-_Vbm8maX.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./utils-ZpixBail.js";
import "./BitmapTileContainer-gQnm5fn6.js";
import "./Bitmap-EiCLkSAd.js";
import "./TileContainer-KY-TE4tX.js";
import "./BaseGraphicContainer-X4-oLxjj.js";
import "./FeatureContainer-iNSNk881.js";
import "./scaleUtils-T4Kp2ufH.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./sublayerUtils-HD1T8Okk.js";
import "./popupUtils-r80YF5Ip.js";
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

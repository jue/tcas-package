import { h as w, y as g, r as I, l as S, e as f, d as n, S as d, s as T, a as o, b as m, c as V } from "./index-HxXrdrYt.js";
import { t as v, n as y } from "./imageUtils-fA_S1QbV.js";
import { f as q, d as x } from "./LayerView-xItHBa3T.js";
import { a as M } from "./RefreshableLayerView-8Iw3yFgN.js";
import "vue";
import "./BitmapTileContainer-gQnm5fn6.js";
import "./Bitmap-EiCLkSAd.js";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./TileContainer-KY-TE4tX.js";
const R = [102113, 102100, 3857, 3785, 900913], b = [0, 0];
let a = class extends M(v(q(x))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this._tileRequests = /* @__PURE__ */ new Map(), this.layer = null;
  }
  get tileMatrixSet() {
    const e = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e ? (e.id !== this.layer.activeLayer.tileMatrixSetId && (this.layer.activeLayer.tileMatrixSetId = e.id), e) : null;
  }
  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume();
  }
  attach() {
    var t;
    const e = (t = this.tileMatrixSet) == null ? void 0 : t.tileInfo;
    e && (this._tileInfoView = new w(e), this._fetchQueue = new g({ tileInfoView: this._tileInfoView, concurrency: 16, process: (i, s) => this.fetchTile(i, s) }), this._tileStrategy = new I({ cachePolicy: "keep", resampling: !0, acquireTile: (i) => this.acquireTile(i), releaseTile: (i) => this.releaseTile(i), tileInfoView: this._tileInfoView }), this.addAttachHandles(S(() => {
      var i, s;
      return [(s = (i = this.layer) == null ? void 0 : i.activeLayer) == null ? void 0 : s.styleId, this.tileMatrixSet];
    }, () => this._refresh())), super.attach());
  }
  detach() {
    var e, t;
    super.detach(), (e = this._tileStrategy) == null || e.destroy(), (t = this._fetchQueue) == null || t.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }
  acquireTile(e) {
    const t = this._bitmapView.createTile(e), i = t.bitmap;
    return [i.x, i.y] = this._tileInfoView.getTileCoords(b, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  async doRefresh() {
    !this.attached || this.updateRequested || this.suspended || this._refresh();
  }
  isUpdating() {
    var e;
    return ((e = this._fetchQueue) == null ? void 0 : e.updating) ?? !1;
  }
  async fetchTile(e, t = {}) {
    const i = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: s, resamplingLevel: r = 0 } = t;
    if (!i)
      return this._fetchImage(e, s);
    const l = new f(0, 0, 0, 0);
    let c;
    try {
      await i.fetchAvailabilityUpsample(e.level, e.row, e.col, l, { signal: s }), c = await this._fetchImage(l, s);
    } catch (h) {
      if (n(h))
        throw h;
      if (r < 3) {
        const u = this._tileInfoView.getTileParentId(e.id);
        if (u) {
          const p = new f(u), _ = await this.fetchTile(p, { ...t, resamplingLevel: r + 1 });
          return y(this._tileInfoView, _, p, e);
        }
      }
      throw h;
    }
    return y(this._tileInfoView, c, l, e);
  }
  canResume() {
    const e = super.canResume();
    return e && this.tileMatrixSet !== null;
  }
  supportsSpatialReference(e) {
    var t;
    return ((t = this.layer.activeLayer.tileMatrixSets) == null ? void 0 : t.some((i) => {
      var s;
      return d((s = i.tileInfo) == null ? void 0 : s.spatialReference, e);
    })) ?? !1;
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", () => this.requestUpdate());
      } catch (t) {
        n(t) || T.getLogger(this).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchImageBitmapTile(e.level, e.row, e.col, { signal: t });
  }
  _refresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((e) => {
      if (!e.bitmap.source)
        return;
      const t = { id: e.key.id, fulfilled: !1, promise: this._fetchQueue.push(e.key).then((i) => {
        e.bitmap.source = i;
      }).catch((i) => {
        n(i) || (e.bitmap.source = null);
      }).finally(() => {
        e.requestRender(), t.fulfilled = !0;
      }) };
      this._tileRequests.set(e, t);
    });
  }
  _getTileMatrixSetBySpatialReference(e) {
    const t = this.view.spatialReference;
    if (!e.tileMatrixSets)
      return null;
    let i = e.tileMatrixSets.find((s) => {
      var r;
      return d((r = s.tileInfo) == null ? void 0 : r.spatialReference, t);
    });
    return !i && t.isWebMercator && (i = e.tileMatrixSets.find((s) => {
      var r;
      return R.includes(((r = s.tileInfo) == null ? void 0 : r.spatialReference.wkid) ?? -1);
    })), i;
  }
};
o([m()], a.prototype, "_fetchQueue", void 0), o([m({ readOnly: !0 })], a.prototype, "tileMatrixSet", null), a = o([V("geoscene.views.2d.layers.WMTSLayerView2D")], a);
const ie = a;
export {
  ie as default
};

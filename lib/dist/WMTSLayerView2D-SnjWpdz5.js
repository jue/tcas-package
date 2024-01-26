import { s as w, E as g, F as I, G as S, H as f, g as h, J as d, e as n, d as m, a as v } from "./index-j1oaLRcp.js";
import { r as T, n as y } from "./imageUtils-vW_3JGzU.js";
import { f as V, u as M } from "./LayerView-u7tKPPGO.js";
import { i as x } from "./RefreshableLayerView-nMKrSELX.js";
import "vue";
import "./BitmapTileContainer-FlcKr7kZ.js";
import "./Bitmap-WAGgSDLg.js";
import "./Container-0QnIUm3K.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./TileContainer-_mN9fJMf.js";
import "./Utils-Mkp4Julu.js";
import "./enums-YM9SAu8u.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-Za_nqieP.js";
import "./pixelUtils-Kz9o33NO.js";
import "./VertexArrayObject-WfBtioi6.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./MaterialKey-tb9URCR8.js";
import "./earcut-80XuLCNX.js";
const q = [102113, 102100, 3857, 3785, 900913], R = [0, 0], Q = w.getLogger("geoscene.views.2d.layers.WMTSLayerView2D");
let r = class extends x(T(V(M))) {
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
    if (!this.tileMatrixSet)
      return;
    const { tileInfo: e } = this.tileMatrixSet;
    this._tileInfoView = new g(e), this._fetchQueue = new I({ tileInfoView: this._tileInfoView, concurrency: 16, process: (t, i) => this.fetchTile(t, i) }), this._tileStrategy = new S({ cachePolicy: "keep", resampling: !0, acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), tileInfoView: this._tileInfoView }), this.handles.add(this.watch(["layer.activeLayer.styleId", "tileMatrixSet"], () => this._refresh()), this.declaredClass), super.attach();
  }
  detach() {
    var e, t;
    super.detach(), this.handles.remove(this.declaredClass), (e = this._tileStrategy) == null || e.destroy(), (t = this._fetchQueue) == null || t.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
    return [i.x, i.y] = this._tileInfoView.getTileCoords(R, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  async doRefresh() {
    this.updateRequested || this.suspended || this._refresh();
  }
  isUpdating() {
    var e, t;
    return (e = (t = this._fetchQueue) == null ? void 0 : t.updating) != null && e;
  }
  async fetchTile(e, t = {}) {
    const i = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: s, resamplingLevel: o = 0 } = t;
    if (!i)
      return this._fetchImage(e, s);
    const a = new f(0, 0, 0, 0);
    let u;
    try {
      await i.fetchAvailabilityUpsample(e.level, e.row, e.col, a, { signal: s }), u = await this._fetchImage(a, s);
    } catch (l) {
      if (h(l))
        throw l;
      if (o < 3) {
        const c = this._tileInfoView.getTileParentId(e.id);
        if (c) {
          const p = new f(c), _ = await this.fetchTile(p, { ...t, resamplingLevel: o + 1 });
          return y(this._tileInfoView, _, p, e);
        }
      }
      throw l;
    }
    return y(this._tileInfoView, u, a, e);
  }
  canResume() {
    const e = super.canResume();
    return e && this.tileMatrixSet !== null;
  }
  supportsSpatialReference(e) {
    return this.layer.activeLayer.tileMatrixSets.some((t) => d(t.tileInfo.spatialReference, e));
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", () => this.requestUpdate());
      } catch (t) {
        h(t) || Q.error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchTile(e.level, e.row, e.col, { signal: t });
  }
  _refresh() {
    this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e) => {
      if (!e.bitmap.source)
        return;
      const t = { id: e.key.id, fulfilled: !1, promise: this._fetchQueue.push(e.key).then((i) => {
        e.bitmap.source = i;
      }).catch((i) => {
        h(i) || (e.bitmap.source = null);
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
    let i = e.tileMatrixSets.find((s) => d(s.tileInfo.spatialReference, t));
    return !i && t.isWebMercator && (i = e.tileMatrixSets.find((s) => q.includes(s.tileInfo.spatialReference.wkid))), i;
  }
};
n([m()], r.prototype, "_fetchQueue", void 0), n([m({ readOnly: !0 })], r.prototype, "tileMatrixSet", null), r = n([v("geoscene.views.2d.layers.WMTSLayerView2D")], r);
const Z = r;
export {
  Z as default
};

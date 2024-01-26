import { e as c, d as m, a as _, y, de as v, r as I, E as V, F as T, G as q, f as Q, J as S, g as f, H as d, s as F } from "./index-j1oaLRcp.js";
import { r as b, o as w, n as g } from "./imageUtils-vW_3JGzU.js";
import { f as $, u as U } from "./LayerView-u7tKPPGO.js";
import { i as P } from "./RefreshableLayerView-nMKrSELX.js";
import { s as x, a as C } from "./drapedUtils-xhF04GK4.js";
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
const R = (e) => {
  let t = class extends e {
    async fetchPopupFeatures(s, a) {
      const { layer: l } = this;
      if (!s)
        return Promise.reject(new y("tilelayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: l }));
      if (l.type !== "tile")
        return Promise.reject(new y("tilelayerview:fetchPopupFeatures", "Layer type should be 'tile'", { type: l.type }));
      const h = this.get("view.scale"), n = l.allSublayers.toArray().filter((i) => {
        const r = i.minScale === 0 || h <= i.minScale, o = i.maxScale === 0 || h >= i.maxScale;
        return i.popupTemplate && i.popupEnabled && i.visible && r && o;
      });
      return v(n.map(async (i) => {
        const r = i.createQuery(), o = I(a) ? a.event : null, p = x({ renderer: i.renderer, event: o });
        return r.geometry = this.createFetchPopupFeaturesQueryGeometry(s, p), r.outFields = await i.popupTemplate.getRequiredFields(), (await i.queryFeatures(r)).features;
      })).then((i) => [].concat(...i.map((r) => r.value).filter(Boolean)));
    }
  };
  return c([m()], t.prototype, "layer", void 0), t = c([_("geoscene.layers.mixins.TileLayerView")], t), t;
}, k = [0, 0];
let u = class extends R(P(b($(U)))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== !1;
  }
  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume();
  }
  attach() {
    const e = "tileServers" in this.layer ? this.layer.tileServers : null;
    this._tileInfoView = new V(this.layer.tileInfo, this.layer.fullExtent), this._fetchQueue = new T({ tileInfoView: this._tileInfoView, concurrency: e && 10 * e.length || 10, process: (t, s) => this.fetchTile(t, s) }), this._tileStrategy = new q({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), tileInfoView: this._tileInfoView }), this.requestUpdate(), this.handles.add(Q(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
  supportsSpatialReference(e) {
    var t;
    return S((t = this.layer.tileInfo) == null ? void 0 : t.spatialReference, e);
  }
  createFetchPopupFeaturesQueryGeometry(e, t) {
    return C(e, t, this.view);
  }
  async doRefresh() {
    this.updateRequested || this.suspended || (this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e) => this._enqueueTileFetch(e)));
  }
  isUpdating() {
    var e, t;
    return (e = (t = this._fetchQueue) == null ? void 0 : t.updating) != null && e;
  }
  acquireTile(e) {
    const t = this._bitmapView.createTile(e), s = t.bitmap;
    return [s.x, s.y] = this._tileInfoView.getTileCoords(k, t.key), s.resolution = this._tileInfoView.getTileResolution(t.key), [s.width, s.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }
  async fetchTile(e, t = {}) {
    const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: a, resamplingLevel: l = 0 } = t;
    if (!s)
      try {
        return await this._fetchImage(e, a);
      } catch (i) {
        if (!f(i) && !this.resampling)
          return w(this._tileInfoView.tileInfo.size);
        if (l < 3) {
          const r = this._tileInfoView.getTileParentId(e.id);
          if (r) {
            const o = new d(r), p = await this.fetchTile(o, { ...t, resamplingLevel: l + 1 });
            return g(this._tileInfoView, p, o, e);
          }
        }
        throw i;
      }
    const h = new d(0, 0, 0, 0);
    let n;
    try {
      if (await s.fetchAvailabilityUpsample(e.level, e.row, e.col, h, { signal: a }), h.level !== e.level && !this.resampling)
        return w(this._tileInfoView.tileInfo.size);
      n = await this._fetchImage(h, a);
    } catch (i) {
      if (f(i))
        throw i;
      n = await this._fetchImage(e, a);
    }
    return this.resampling ? g(this._tileInfoView, n, h, e) : n;
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", () => this.requestUpdate());
      } catch (t) {
        f(t) || F.getLogger(this.declaredClass).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchTile(e.level, e.row, e.col, { signal: t });
  }
};
c([m()], u.prototype, "_fetchQueue", void 0), c([m()], u.prototype, "resampling", null), u = c([_("geoscene.views.2d.layers.TileLayerView2D")], u);
const le = u;
export {
  le as default
};

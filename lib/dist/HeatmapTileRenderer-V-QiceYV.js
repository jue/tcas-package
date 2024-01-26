import { e as a, a as l } from "./index-j1oaLRcp.js";
import { a as m, e as p } from "./heatmapUtils-rIMstVK_.js";
import { n as h } from "./BitmapTileContainer-FlcKr7kZ.js";
import { o as c } from "./BaseTileRenderer-L1aZ44cU.js";
import "vue";
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
class d {
  constructor() {
    this.gradient = null, this.height = 512, this.width = 512;
  }
  render(i) {
    m(i, 512, this.intensities, this.gradient, this.minPixelIntensity, this.maxPixelIntensity);
  }
}
let o = class extends c {
  constructor(t) {
    super(t), this._intensityInfo = { minPixelIntensity: 0, maxPixelIntensity: 0 }, this.featuresView = { attributeView: { initialize: () => {
    }, requestUpdate: () => {
    } }, requestRender: () => {
    } }, this._container = new h(t.tileInfoView);
  }
  createTile(t) {
    const i = this._container.createTile(t);
    return this.tileInfoView.getTileCoords(i.bitmap, t), i.bitmap.resolution = this.tileInfoView.getTileResolution(t), i;
  }
  onConfigUpdate() {
    const t = this.layer.renderer;
    if (t.type === "heatmap") {
      const { minPixelIntensity: i, maxPixelIntensity: n } = t;
      this._intensityInfo.minPixelIntensity = i, this._intensityInfo.maxPixelIntensity = n, this._gradient = p(t.colorStops), this.tiles.forEach((s) => {
        const e = s.bitmap.source;
        e && (e.minPixelIntensity = i, e.maxPixelIntensity = n, e.gradient = this._gradient, s.bitmap.invalidateTexture());
      });
    }
  }
  hitTest() {
    return Promise.resolve([]);
  }
  install(t) {
    t.addChild(this._container);
  }
  uninstall(t) {
    this._container.removeAllChildren(), t.removeChild(this._container);
  }
  disposeTile(t) {
    this._container.removeChild(t), t.destroy();
  }
  supportsRenderer(t) {
    return t && t.type === "heatmap";
  }
  onTileData(t) {
    const i = this.tiles.get(t.tileKey);
    if (!i)
      return;
    const n = t.intensityInfo, { minPixelIntensity: s, maxPixelIntensity: e } = this._intensityInfo, r = i.bitmap.source || new d();
    r.intensities = n && n.matrix || null, r.minPixelIntensity = s, r.maxPixelIntensity = e, r.gradient = this._gradient, i.bitmap.source = r, this._container.addChild(i), this._container.requestRender(), this.requestUpdate();
  }
  onTileError(t) {
    console.error(t);
  }
  lockGPUUploads() {
  }
  unlockGPUUploads() {
  }
  fetchResource(t, i) {
    return console.error(t), Promise.reject();
  }
};
o = a([l("geoscene.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")], o);
const z = o;
export {
  z as default
};

import { j as p, m as o, V as a, R as g, a as s, b as m, c as l } from "./index-HxXrdrYt.js";
import { f as c, d as n } from "./LayerView-xItHBa3T.js";
import { i as d } from "./GraphicContainer-Js1SEcjp.js";
import { o as u } from "./GraphicsView2D--Chd-qUk.js";
import "vue";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./BaseGraphicContainer-X4-oLxjj.js";
import "./FeatureContainer-iNSNk881.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./util-_Vbm8maX.js";
import "./TileContainer-KY-TE4tX.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils--xHzoVSe.js";
import "./normalizeUtilsCommon-kgfOYmtc.js";
import "./utils-ZpixBail.js";
import "./normalizeUtilsSync-WlqzzP2d.js";
import "./projectionSupport-7oPVn9Md.js";
import "./json-uwIaZKlZ.js";
import "./Matcher-72v38sbr.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-j-mSNUkn.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-kWM-xNyV.js";
import "./ComputedAttributeStorage-2KraofCx.js";
import "./arcadeTimeUtils-8XmFQ2k4.js";
import "./executionError-EEhTiqtD.js";
const w = { remove() {
}, pause() {
}, resume() {
} };
let e = class extends c(n) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  attach() {
    this.graphicsView = new u({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new d(this.view.featuresTilingScheme) }), this._updateHighlight(), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler));
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = p(this.graphicsView);
  }
  async hitTest(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i).map((t) => ({ type: "graphic", graphic: t, mapPoint: i, layer: this.layer })) : null;
  }
  async fetchPopupFeatures(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i).filter((t) => !!t.popupTemplate) : [];
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i) {
    let t;
    typeof i == "number" ? t = [i] : i instanceof o ? t = [i.uid] : Array.isArray(i) && i.length > 0 ? t = typeof i[0] == "number" ? i : i.map((h) => h && h.uid) : a.isCollection(i) && i.length > 0 && (t = i.map((h) => h && h.uid).toArray());
    const r = t == null ? void 0 : t.filter(g);
    return r != null && r.length ? (this._addHighlight(r), { remove: () => this._removeHighlight(r) }) : w;
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t);
        this._highlightIds.set(t, r + 1);
      } else
        this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t) - 1;
        r === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, r);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    var i;
    (i = this.graphicsView) == null || i.setHighlight(Array.from(this._highlightIds.keys()));
  }
};
s([m()], e.prototype, "graphicsView", void 0), e = s([l("geoscene.views.2d.layers.GraphicsLayerView2D")], e);
const di = e;
export {
  di as default
};

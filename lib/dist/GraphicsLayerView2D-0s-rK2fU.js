import { j as p, m as o, V as a, R as g, a as s, b as m, c as l } from "./index-O2RTvw_o.js";
import { f as c, d as n } from "./LayerView-AYRNbjM7.js";
import { i as d } from "./GraphicContainer-uyOMQtiI.js";
import { o as u } from "./GraphicsView2D--2GlIbuy.js";
import "vue";
import "./Container-YlBWRIXD.js";
import "./definitions-jqTA3541.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
import "./color-etN3NLwm.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./BaseGraphicContainer-2F-XgeLr.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./WGLContainer-Onm3yFPW.js";
import "./VertexArrayObject-6efe00MS.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./floatRGBA-ePb46nBT.js";
import "./util-KO5PrNj-.js";
import "./TileContainer-90vnlfVn.js";
import "./vec3f32-BgIjjdRt.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./utils-4fNQuSlg.js";
import "./normalizeUtilsSync-Dex5kKX_.js";
import "./projectionSupport-Ywut87fi.js";
import "./json-uwIaZKlZ.js";
import "./Matcher-877r_dj4.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-Ghf7sU9Y.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-jwA3T6ex.js";
import "./ComputedAttributeStorage-XU3YtPT-.js";
import "./arcadeTimeUtils-6Xb6Siq7.js";
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

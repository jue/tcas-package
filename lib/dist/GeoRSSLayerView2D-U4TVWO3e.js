import { i as p, x as c, j as g, B as w, t as f, p as m, e as d, a as u } from "./index-j1oaLRcp.js";
import { f as V, u as b } from "./LayerView-u7tKPPGO.js";
import { i as S } from "./GraphicContainer-pTHcU1s8.js";
import { r as v } from "./BaseGraphicContainer-vPm1hpo8.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./Utils-Mkp4Julu.js";
import "./enums-YM9SAu8u.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./MaterialKey-tb9URCR8.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-eTH1ob6-.js";
import "./json-uwIaZKlZ.js";
import "./VertexArrayObject-WfBtioi6.js";
import "./FeatureContainer-Yy5F93tk.js";
import "./TileContainer-_mN9fJMf.js";
import "./WGLContainer-Za_nqieP.js";
import "./pixelUtils-Kz9o33NO.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
import "./visualVariablesUtils-lTNHq6nM.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./Matcher-lReemcRu.js";
import "./tileUtils-ZmGgn6yC.js";
import "./TileClipper-2O-LVJh2.js";
import "./Geometry-etmNDSLV.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./schemaUtils-NQXxAz6-.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./ComputedAttributeStorage-4bJ5RN5o.js";
import "./vec3f32-iv6FBVVh.js";
let l = class extends V(b) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = /* @__PURE__ */ new Map(), this.graphicsViews = [];
  }
  async hitTest(e, r) {
    if (!this.graphicsViews.length)
      return null;
    const a = this.graphicsViews.reverse().map((i) => i.hitTest(e));
    return (await Promise.all(a)).flat().filter((i, t) => (i && (i.popupTemplate = this._popupTemplates.get(this.graphicsViews[t]), i.layer = this.layer, i.sourceLayer = this.layer), !!i));
  }
  update(e) {
    if (this.graphicsViews)
      for (const r of this.graphicsViews)
        r.processUpdate(e);
  }
  attach() {
    this.handles.add([p(this.layer, "featureCollections", (e) => {
      this._clear();
      for (const { popupInfo: r, featureSet: a, layerDefinition: i } of e) {
        const t = c.fromJSON(a), h = new g(t.features), n = i.drawingInfo, y = r ? w.fromJSON(r) : null, o = f(n.renderer), s = new v({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: h, renderer: o, container: new S(this.view.featuresTilingScheme) });
        this._graphicsViewMap[t.geometryType] = s, this._popupTemplates.set(s, y), t.geometryType !== "polygon" || this.layer.polygonSymbol ? t.geometryType !== "polyline" || this.layer.lineSymbol ? t.geometryType !== "point" || this.layer.pointSymbol || (this.layer.pointSymbol = o.symbol) : this.layer.lineSymbol = o.symbol : this.layer.polygonSymbol = o.symbol, this.graphicsViews.push(s), this.container.addChild(s.container);
      }
    }), p(this.layer, "polygonSymbol", (e) => {
      this._graphicsViewMap.polygon.renderer = new m({ symbol: e });
    }), p(this.layer, "lineSymbol", (e) => {
      this._graphicsViewMap.polyline.renderer = new m({ symbol: e });
    }), p(this.layer, "pointSymbol", (e) => {
      this._graphicsViewMap.point.renderer = new m({ symbol: e });
    })], "georsslayerview");
  }
  detach() {
    this.handles.remove("georsslayerview"), this._clear();
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e of this.graphicsViews)
      e.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const e of this.graphicsViews)
      e.destroy();
    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }
};
l = d([u("geoscene.views.2d.layers.GeoRSSLayerView2D")], l);
const he = l;
export {
  he as default
};

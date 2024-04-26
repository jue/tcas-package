import { i as p, x as c, j as g, B as w, t as f, p as m, e as d, a as u } from "./index-Ek1MTSEY.js";
import { f as V, u as b } from "./LayerView-d-au0HlH.js";
import { i as S } from "./GraphicContainer-lrIEDGw2.js";
import { r as v } from "./BaseGraphicContainer-UV2N_B2B.js";
import "vue";
import "./Container-zrthpNTa.js";
import "./Utils-1SmxxQP6.js";
import "./enums-YM9SAu8u.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./BidiEngine-NdusBwFe.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-OcYAvekw.js";
import "./json-uwIaZKlZ.js";
import "./VertexArrayObject-a9fTrWIE.js";
import "./FeatureContainer-7uy8-M8s.js";
import "./TileContainer-Oq8bP95c.js";
import "./WGLContainer-euFYNSIp.js";
import "./pixelUtils-fZs8KEK2.js";
import "./ProgramTemplate-RS7QiLoF.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
import "./visualVariablesUtils-MRd41y5-.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./Matcher-j-6bbFef.js";
import "./tileUtils-_JbVMe5W.js";
import "./TileClipper-UwGzPO3l.js";
import "./Geometry-etmNDSLV.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./schemaUtils-U3wpMwz7.js";
import "./MD5-ekk-4Jqp.js";
import "./util-_ClfQE9K.js";
import "./ComputedAttributeStorage-oDQUKOa8.js";
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

import { e as s, d as m, ax as U, a as $, y as _, r as c, de as C, dg as E, s as A, c as M, g as V } from "./index-j1oaLRcp.js";
import { t as F } from "./BitmapContainer-o7-pgJEM.js";
import { f as G, u as R } from "./LayerView-u7tKPPGO.js";
import { r as L } from "./BaseGraphicContainer-vPm1hpo8.js";
import { n as T } from "./HighlightGraphicContainer-9BeUO_35.js";
import { S as D } from "./ExportStrategy-Mywkyszm.js";
import { c as N } from "./ExportImageParameters-tJOQ5PFj.js";
import { s as O, a as Q } from "./drapedUtils-xhF04GK4.js";
import { t as z, d as H } from "./popupUtils-GfxNYuRl.js";
import { n as W } from "./floorFilterUtils-HsstcPZ9.js";
import { i as j } from "./RefreshableLayerView-nMKrSELX.js";
import "vue";
import "./WGLContainer-Za_nqieP.js";
import "./enums-n72NRQQZ.js";
import "./pixelUtils-Kz9o33NO.js";
import "./Container-0QnIUm3K.js";
import "./VertexArrayObject-WfBtioi6.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./enums-YM9SAu8u.js";
import "./Utils-Mkp4Julu.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./MaterialKey-tb9URCR8.js";
import "./earcut-80XuLCNX.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-eTH1ob6-.js";
import "./json-uwIaZKlZ.js";
import "./FeatureContainer-Yy5F93tk.js";
import "./TileContainer-_mN9fJMf.js";
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
import "./Bitmap-WAGgSDLg.js";
import "./sublayerUtils-XJKH7kDg.js";
const k = (i) => {
  let t = class extends i {
    initialize() {
      this.exportImageParameters = new N({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get exportImageVersion() {
      var r;
      return (r = this.exportImageParameters) == null || r.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    async fetchPopupFeatures(r, p) {
      const { layer: l } = this;
      if (!r)
        return Promise.reject(new _("mapimagelayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: l }));
      const g = this.get("view.scale"), y = [], f = async (e) => {
        const o = e.minScale === 0 || g <= e.minScale, a = e.maxScale === 0 || g >= e.maxScale;
        if (e.visible && o && a) {
          if (e.sublayers)
            e.sublayers.forEach(f);
          else if (e.popupEnabled) {
            const d = H(e, { ...p, defaultPopupTemplateEnabled: !1 });
            c(d) && y.unshift({ sublayer: e, popupTemplate: d });
          }
        }
      }, P = l.sublayers.toArray().reverse().map(f);
      await Promise.all(P);
      const S = y.map(async ({ sublayer: e, popupTemplate: o }) => {
        await e.load().catch(() => {
        });
        const a = e.createQuery(), d = c(p) ? p.event : null, v = O({ renderer: e.renderer, event: d }), w = this.createFetchPopupFeaturesQueryGeometry(r, v);
        if (a.geometry = w, a.outFields = await z(e, o), this.layer.type === "map-image" && "floors" in this.view) {
          var x, I;
          const q = (x = this.view) == null || (I = x.floors) == null ? void 0 : I.clone(), u = W(q, e);
          c(u) && (a.where = a.where ? `(${a.where}) AND (${u})` : u);
        }
        const b = await this._loadArcadeModules(o);
        return b && b.arcadeUtils.hasGeometryOperations(o) || (a.maxAllowableOffset = w.width / v), (await e.queryFeatures(a)).features;
      });
      return (await C(S)).reduce((e, o) => o.value ? [...e, ...o.value] : e, []).filter((e) => e != null);
    }
    canResume() {
      var r;
      return !!super.canResume() && ((r = this.timeExtent) == null || !r.isEmpty);
    }
    _loadArcadeModules(r) {
      if (r.get("expressionInfos.length") || Array.isArray(r.content) && r.content.some((p) => p.type === "expression"))
        return E();
    }
  };
  return s([m()], t.prototype, "exportImageParameters", void 0), s([m({ readOnly: !0 })], t.prototype, "exportImageVersion", null), s([m()], t.prototype, "layer", void 0), s([m()], t.prototype, "suspended", void 0), s([m(U)], t.prototype, "timeExtent", void 0), t = s([$("geoscene.views.layers.MapImageLayerView")], t), t;
}, B = A.getLogger("geoscene.views.2d.layers.MapImageLayerView2D");
let h = class extends k(j(G(R))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new M();
  }
  update(i) {
    this.strategy.update(i).catch((t) => {
      V(t) || B.error(t);
    });
  }
  attach() {
    const { imageMaxWidth: i, imageMaxHeight: t, version: n } = this.layer, r = n >= 10.3, p = n >= 10;
    this._bitmapContainer = new F(), this.container.addChild(this._bitmapContainer);
    const l = new L({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new T(this.view.featuresTilingScheme) });
    this.container.addChild(l.container), this.strategy = new D({ container: this._bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: i, imageMaxHeight: t, imageRotationSupported: r, imageNormalizationSupported: p, hidpi: !0 }), this.handles.add(this.watch("exportImageVersion", () => this.requestUpdate()), "exportImageVersion"), this.handles.add(this.watch("view.floors", () => this.requestUpdate()), "view.floors"), this.requestUpdate();
  }
  detach() {
    this.handles.remove("exportImageVersion"), this.handles.remove("view.floors"), this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(i, t) {
    return this._highlightGraphics.add(i), { remove: () => {
      this._highlightGraphics.remove(i);
    } };
  }
  supportsSpatialReference(i) {
    return this.layer.serviceSupportsSpatialReference(i);
  }
  createFetchPopupFeaturesQueryGeometry(i, t) {
    return Q(i, t, this.view);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(i, t, n, r) {
    return this.layer.fetchImage(i, t, n, { timeExtent: this.timeExtent, floors: this.view.floors, ...r });
  }
};
s([m()], h.prototype, "strategy", void 0), s([m()], h.prototype, "updating", void 0), h = s([$("geoscene.views.2d.layers.MapImageLayerView2D")], h);
const je = h;
export {
  je as default
};

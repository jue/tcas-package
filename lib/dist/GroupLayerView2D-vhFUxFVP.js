import { a as l, b as a, v as d, c as o, V as p, l as h, dN as y, u as V } from "./index-h53IWweP.js";
import { r as w } from "./GroupContainer-Nl5R88O6.js";
import { d as v, f as u } from "./LayerView-Ll--tTKd.js";
import "vue";
import "./WGLContainer-5YwL0fPU.js";
import "./definitions-Ikx6Iti_.js";
import "./VertexArrayObject-xRQjh19m.js";
import "./Texture-9jggcs3t.js";
import "./enums-Vyj7xNgv.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./ProgramTemplate-WGFc3YF6.js";
import "./GeometryUtils-qBcr22nw.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./Container-wINu8WJB.js";
import "./earcut-LPvm_IXh.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
let t = class extends v {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new p();
  }
  destroy() {
    this.handles.removeAll(), this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e) => {
      e.visible = i;
    });
  }
  initialize() {
    this.handles.add([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), h(() => {
      var i;
      return (i = this.layer) == null ? void 0 : i.visibilityMode;
    }, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, y), h(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, y)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  set layerViews(i) {
    this._set("layerViews", V(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0 ? 1 : this.layerViews.reduce((i, e) => i + e.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e) => e.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((e) => {
      const s = this._findLayerViewForLayer(e);
      return !!(s != null && s.visible);
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    i == null && (i = this._firstVisibleOnLayerOrder()) == null && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e) => {
      e.visible = e === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.handles.remove("grouplayerview:visible"), this.handles.add(this.layerViews.map((s) => h(() => s.visible, (r) => this._applyVisibility(() => {
      r !== this.visible && (s.visible = this.visible);
    }, () => this._applyExclusiveVisibility(r ? s : null)), y)).toArray(), "grouplayerview:visible");
    const e = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(e != null && e.visible ? e : null));
  }
  _applyVisibility(i, e) {
    var s, r;
    this._hasLayerViewVisibleOverrides() && (((s = this.layer) == null ? void 0 : s.visibilityMode) === "inherited" ? i() : ((r = this.layer) == null ? void 0 : r.visibilityMode) === "exclusive" && e());
  }
};
l([a({ cast: d })], t.prototype, "layerViews", null), l([a({ readOnly: !0 })], t.prototype, "updatingProgress", null), l([a()], t.prototype, "view", void 0), t = l([o("geoscene.views.layers.GroupLayerView")], t);
const m = t;
let n = class extends u(m) {
  constructor() {
    super(...arguments), this.container = new w();
  }
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(i) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((i, e) => this.container.addChildAt(i.container, e));
  }
};
n = l([o("geoscene.views.2d.layers.GroupLayerView2D")], n);
const N = n;
export {
  N as default
};
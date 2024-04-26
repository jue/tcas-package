import { e as n, d as h, ex as b, a as y, j as u, ey as v } from "./index-Ek1MTSEY.js";
import { a as w } from "./WGLContainer-euFYNSIp.js";
import { L as V } from "./enums-n72NRQQZ.js";
import { u as f, f as g } from "./LayerView-d-au0HlH.js";
import "vue";
import "./pixelUtils-fZs8KEK2.js";
import "./Container-zrthpNTa.js";
import "./VertexArrayObject-a9fTrWIE.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./enums-YM9SAu8u.js";
import "./Utils-1SmxxQP6.js";
import "./ProgramTemplate-RS7QiLoF.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./earcut-80XuLCNX.js";
class m extends w {
  constructor() {
    super(...arguments), this.requiresDedicatedFBO = !1;
  }
  dispose() {
  }
  doRender(i) {
    const t = this.createRenderParams(i), { context: r, painter: s, profiler: o } = t;
    this._prevFBO = r.getBoundFramebufferObject(), o.recordContainerStart(this.name);
    const d = this._getFbo(t), p = s.getRenderTarget();
    r.bindFramebuffer(d), s.setRenderTarget(d), r.setDepthWriteEnabled(!0), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.setClearDepth(1), r.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT), r.setDepthWriteEnabled(!1);
    for (const l of this.children)
      l.beforeRender(i);
    for (const l of this.children)
      l.processRender(t);
    for (const l of this.children)
      l.afterRender(i);
    s.setRenderTarget(p), s.releaseFbo(d), r.bindFramebuffer(this._prevFBO), s.beforeRenderLayer(t, this._clippingInfos ? 255 : 0, this.computedOpacity), r.setStencilTestEnabled(!1), r.setStencilWriteMask(0), s.blitTexture(r, d.colorTexture, V.NEAREST), s.compositeLayer(t, this.computedOpacity), o.recordContainerEnd();
  }
  createRenderParams(i) {
    return { ...super.createRenderParams(i), blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: 1 };
  }
  _getFbo(i) {
    const { context: t, painter: r } = i, { width: s, height: o } = t.getViewport();
    return r.acquireFbo(s, o);
  }
}
let a = class extends f {
  constructor(e) {
    super(e), this.type = "group", this.layerViews = new u();
  }
  initialize() {
    this.handles.add([this.layerViews.on("change", (e) => this._layerViewsChangeHandler(e)), this.layer.watch("visibilityMode", () => this._visibilityModeHandler(), !0), this.watch("visible", () => this._visibleHandler(), !0)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  set layerViews(e) {
    this._set("layerViews", v(e, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0 ? 1 : this.layerViews.reduce((e, i) => e + i.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.layerViews.some((e) => e.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((e) => e._isOverridden("visible"));
  }
  _findLayerViewForLayer(e) {
    return e && this.layerViews.find((i) => i.layer === e);
  }
  _firstVisibleOnLayerOrder() {
    const e = this.layer.layers.find((i) => {
      const t = this._findLayerViewForLayer(i);
      return t && t.visible;
    });
    return e && this._findLayerViewForLayer(e);
  }
  _enforceExclusiveVisibility(e) {
    this._hasLayerViewVisibleOverrides() && (e || !(e = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (e = this._findLayerViewForLayer(this.layer.layers.getItemAt(0))), this.layerViews.forEach((i) => {
      i.visible = i === e;
    }));
  }
  _layerViewsChangeHandler(e) {
    this.handles.remove("grouplayerview:visible"), this.handles.add(this.layerViews.map((r) => r.watch("visible", (s) => this._layerViewVisibleHandler(s, r), !0)).toArray(), "grouplayerview:visible");
    const i = e.added[e.added.length - 1];
    let t = null;
    i && i.visible && (t = i), this._enforceVisibility(t);
  }
  _enforceVisibility(e) {
    if (this._hasLayerViewVisibleOverrides())
      switch (this.layer.visibilityMode) {
        case "inherited": {
          const i = this.visible;
          this.layerViews.forEach((t) => {
            t.visible = i;
          });
          break;
        }
        case "exclusive":
          this._enforceExclusiveVisibility(e);
      }
  }
  _visibilityModeHandler() {
    this._enforceVisibility();
  }
  _layerViewVisibleHandler(e, i) {
    if (this._hasLayerViewVisibleOverrides())
      switch (this.layer.visibilityMode) {
        case "inherited":
          e !== this.visible && (i.visible = this.visible);
          break;
        case "exclusive":
          this._enforceExclusiveVisibility(e && i);
      }
  }
  _visibleHandler() {
    var e;
    this._hasLayerViewVisibleOverrides() && ((e = this.layer) == null ? void 0 : e.visibilityMode) === "inherited" && this._enforceVisibility();
  }
};
n([h({ cast: b })], a.prototype, "layerViews", null), n([h({ readOnly: !0 })], a.prototype, "updatingProgress", null), n([h()], a.prototype, "view", void 0), a = n([y("geoscene.views.layers.GroupLayerView")], a);
const _ = a;
let c = class extends g(_) {
  constructor() {
    super(...arguments), this.container = new m();
  }
  attach() {
    this._updateStageChildren(), this.handles.add(this.layerViews.on("after-changes", () => this._updateStageChildren()), "grouplayerview2d");
  }
  detach() {
    this.handles.remove("grouplayerview2d"), this.container.removeAllChildren();
  }
  update(e) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, i) => this.container.addChildAt(e.container, i));
  }
};
c = n([y("geoscene.views.2d.layers.GroupLayerView2D")], c);
const U = c;
export {
  U as default
};

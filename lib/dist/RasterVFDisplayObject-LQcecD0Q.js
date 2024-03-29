import { s as T, r as u, l as D, dy as b, hT as W, hU as A, dt as v, dv as F, dr as C, e as d, d as c, a as I, ay as E, g as q, ab as j, M as B, fh as R, bc as U, c9 as N, f as _, b as J, ds as G, du as f, dw as H, dq as K } from "./index-j1oaLRcp.js";
import { y as V, F as $, D as z } from "./dataUtils-mSVXnWd6.js";
import { a as Q, i as X } from "./WGLContainer-Za_nqieP.js";
import { I as Y, d as Z } from "./Utils-Mkp4Julu.js";
import { a as L } from "./Container-0QnIUm3K.js";
import { c as S, f as M } from "./VertexArrayObject-WfBtioi6.js";
import { C as m, F as w } from "./enums-n72NRQQZ.js";
import { t as x } from "./VertexElementDescriptor-L2lGUBx9.js";
let ee = class extends Q {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  get requiresDedicatedFBO() {
    return !1;
  }
  doRender(e) {
    super.doRender(e);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "flow", brushes: [X], target: () => this.children, drawPhase: Y.MAP });
    return [...super.prepareRenderPasses(e), t];
  }
};
const te = T.getLogger("geoscene.views.2d.engine.flow.FlowDisplayData");
let se = class {
  constructor(e, t, i, a) {
    this.state = { name: "created" }, this.flowStyle = e, this.extent = t, this.size = i, this.pixelRatio = a;
  }
  async load() {
    const e = new AbortController();
    this.state = { name: "loading", abortController: e };
    const t = await this.flowStyle.loadResources({ extent: this.extent, size: this.size, pixelRatio: this.pixelRatio }, e.signal);
    this.state = { name: "loaded", resources: t };
  }
  prepareForRendering(e) {
    if (this.state.name !== "loaded")
      return void te.error("Only loaded resources can be attached.");
    const t = this.state.resources;
    t.prepareForRendering(e), this.state = { name: "attached", resources: t };
  }
  destroy() {
    if (this.state.name === "loading")
      return this.state.abortController.abort(), void (this.state = { name: "detached" });
    this.state.name === "attached" && (this.state.resources.detach(), this.state = { name: "detached" });
  }
  update(e) {
    return this.flowStyle.areResourcesCompatible(e.flowStyle) ? !(!this.extent.equals(e.extent) || this.size[0] !== e.size[0] || this.size[1] !== e.size[1] || this.pixelRatio !== e.pixelRatio) && (this.flowStyle = e.flowStyle, !0) : !1;
  }
};
class ie extends L {
  constructor() {
    super(...arguments), this._displayData = null;
  }
  get displayData() {
    return this._displayData;
  }
  set displayData(e) {
    this._displayData = e, this.requestRender();
  }
  clear() {
    u(this._displayData) && (this._displayData.destroy(), this._displayData = null, this.requestRender());
  }
  setTransform(e) {
    const { displayData: t } = this;
    if (D(t))
      return;
    const i = t.extent.xmin, a = t.extent.ymax, n = [0, 0];
    e.toScreen(n, [i, a]);
    const r = (t.extent.xmax - t.extent.xmin) / t.size[0] / e.resolution, l = b(e.rotation), { dvs: o } = this.transforms;
    W(o, [-1, 1, 0]), A(o, o, [2 / (e.size[0] * e.pixelRatio), -2 / (e.size[1] * e.pixelRatio), 1]), v(o, o, [n[0], n[1], 0]), F(o, o, l), A(o, o, [r * e.pixelRatio, r * e.pixelRatio, 1]);
  }
  _createTransforms() {
    return { dvs: C() };
  }
}
const ae = 1.15, re = T.getLogger("geoscene.views.2d.engine.flow.FlowStrategy");
let g = class extends E {
  constructor(s) {
    super(s), this._flowDisplayObject = new ie(), this._loading = null;
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return this._loading != null;
  }
  update(s) {
    const { flowStyle: e } = this.flowContainer;
    if (D(e))
      return void this._clear();
    const { extent: t, rotation: i, resolution: a, pixelRatio: n } = s.state, r = oe(t, i);
    r.expand(ae);
    const l = [Math.round((r.xmax - r.xmin) / a), Math.round((r.ymax - r.ymin) / a)], o = new se(e, r, l, n);
    if (u(this._loading)) {
      if (this._loading.update(o))
        return;
      this._loading.destroy(), this._loading = null;
    }
    !D(this._flowDisplayObject.displayData) && this._flowDisplayObject.displayData.update(o) || (o.load().then(() => {
      this._flowDisplayObject.clear(), this._flowDisplayObject.displayData = this._loading, this._loading = null;
    }, (p) => {
      q(p) || (re.error("A resource failed to load.", p), this._loading = null);
    }), this._loading = o);
  }
  _clear() {
    this._flowDisplayObject.clear(), u(this._loading) && (this._loading.destroy(), this._loading = null);
  }
};
d([c()], g.prototype, "_loading", void 0), d([c()], g.prototype, "flowContainer", void 0), d([c()], g.prototype, "updating", null), g = d([I("geoscene.views.2d.engine.flow.FlowStrategy")], g);
const ne = g;
function oe(s, e) {
  const t = new j({ x: (s.xmax + s.xmin) / 2, y: (s.ymax + s.ymin) / 2, spatialReference: s.spatialReference }), i = s.xmax - s.xmin, a = s.ymax - s.ymin, n = Math.abs(Math.cos(b(e))), r = Math.abs(Math.sin(b(e))), l = n * i + r * a, o = r * i + n * a, p = new B({ xmin: t.x - l / 2, ymin: t.y - o / 2, xmax: t.x + l / 2, ymax: t.y + o / 2, spatialReference: s.spatialReference });
  return p.centerAt(t), p;
}
const y = /* @__PURE__ */ new Map();
y.set("a_positionAndSide", 0), y.set("a_timeInfo", 1), y.set("a_extrude", 2), y.set("a_speed", 3);
const le = { geometry: [new x("a_positionAndSide", 3, m.FLOAT, 0, 36), new x("a_timeInfo", 3, m.FLOAT, 12, 36), new x("a_extrude", 2, m.FLOAT, 24, 36), new x("a_speed", 1, m.FLOAT, 32, 36)] };
let de = class {
  constructor(e, t, i) {
    this.values = i, this._vertexData = e, this._indexData = t;
  }
  prepareForRendering(e) {
    const t = S.createVertex(e, w.STATIC_DRAW, this._vertexData), i = S.createIndex(e, w.STATIC_DRAW, this._indexData), a = new M(e, y, le, { geometry: t }, i);
    this.vertexBuffer = t, this.indexBuffer = i, this.vertexArray = a, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.vertexBuffer.dispose(), this.indexBuffer.dispose();
  }
  get locations() {
    return y;
  }
};
function he(s) {
  const e = ue(s), t = ce(e), i = 2 * t, a = Math.round(R(s.maxPathLength) / i) + 1, n = t, r = 10, l = pe(s), o = me(s), { flowSpeed: p, trailLength: P, density: k } = s;
  return { lineRenderWidth: e, segmentLength: i, verticesPerLine: a, lineCollisionWidth: n, lineSpacing: r, lineColor: l, lineOpacity: o, lineSpeed: p, fadeDuration: P, density: k, smoothing: R(s.smoothing), velocityScale: s.flowRepresentation === "flow-from" ? 1 : -1, minWeightThreshold: 1e-3, minSpeedThreshold: 1e-3, maxTurnAngle: 1, mergeLines: !0, interpolate: !0, profile: !1 };
}
function ce(s) {
  return s.kind === "constant" ? s.value[0] : s.values[s.values.length - 1];
}
function O(s) {
  const e = s.toRgba();
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
}
function ue(s) {
  if (!s.hasVisualVariables("size"))
    return { kind: "constant", value: [R(s.trailWidth)] };
  const e = s.getVisualVariablesForType("size")[0], t = [], i = [];
  let a;
  if (e.stops) {
    for (const n of e.stops)
      t.push(n.value), i.push(n.size);
    a = e.stops.length;
  } else
    t.push(e.minDataValue, e.maxDataValue), i.push(e.minSize, e.maxSize), a = 2;
  return { kind: "ramp", stops: t, values: i, count: a };
}
function pe(s) {
  if (!s.hasVisualVariables("color"))
    return { kind: "constant", value: O(s.color) };
  const e = s.getVisualVariablesForType("color")[0], t = [], i = [];
  for (const a of e.stops)
    t.push(a.value), Array.prototype.push.apply(i, O(a.color));
  return { kind: "ramp", stops: t, values: i, count: e.stops.length };
}
function me(s) {
  if (!s.hasVisualVariables("opacity"))
    return { kind: "constant", value: [1] };
  const e = s.getVisualVariablesForType("opacity")[0], t = [], i = [];
  for (const a of e.stops)
    t.push(a.value), i.push(a.opacity);
  return { kind: "ramp", stops: t, values: i, count: e.stops.length };
}
class ge {
  constructor(e, t, i, a) {
    this._loadImagery = e, this._createStreamlinesMesh = t, this._timeExtent = a, this._rendererSettings = he(i);
  }
  get animated() {
    return this._rendererSettings.lineSpeed > 0;
  }
  get renderSettings() {
    return this._rendererSettings;
  }
  areResourcesCompatible(e) {
    let t = !0;
    return t = t && e._loadImagery === this._loadImagery, t = t && e._createStreamlinesMesh === this._createStreamlinesMesh, t = t && e._rendererSettings.verticesPerLine === this._rendererSettings.verticesPerLine, t = t && e._rendererSettings.segmentLength === this._rendererSettings.segmentLength, t = t && e._rendererSettings.lineSpacing === this._rendererSettings.lineSpacing, t = t && e._rendererSettings.density === this._rendererSettings.density, t = t && e._rendererSettings.smoothing === this._rendererSettings.smoothing, t = t && e._rendererSettings.velocityScale === this._rendererSettings.velocityScale, t = t && e._rendererSettings.minWeightThreshold === this._rendererSettings.minWeightThreshold, t = t && e._rendererSettings.minSpeedThreshold === this._rendererSettings.minSpeedThreshold, t = t && e._rendererSettings.mergeLines === this._rendererSettings.mergeLines, t = t && e._rendererSettings.velocityScale === this._rendererSettings.velocityScale, t = t && e._rendererSettings.interpolate === this._rendererSettings.interpolate, t = t && e._rendererSettings.lineColor.kind === this._rendererSettings.lineColor.kind, t = t && e._rendererSettings.lineOpacity.kind === this._rendererSettings.lineOpacity.kind, t = t && e._rendererSettings.lineRenderWidth.kind === this._rendererSettings.lineRenderWidth.kind, t && this._rendererSettings.mergeLines && (t = e._rendererSettings.lineCollisionWidth === this._rendererSettings.lineCollisionWidth), t && e._timeExtent !== this._timeExtent && (t = !(!u(e._timeExtent) || !u(this._timeExtent)) && e._timeExtent.equals(this._timeExtent)), t;
  }
  async loadResources(e, t) {
    const { extent: i, size: a } = e;
    U(t);
    const n = await this._loadImagery(i, a[0], a[1], this._timeExtent, t), { vertexData: r, indexData: l } = await this._createStreamlinesMesh(this._rendererSettings, n, t);
    return new de(r, l, { lineColor: this._rendererSettings.lineColor, lineOpacity: this._rendererSettings.lineOpacity, lineRenderWidth: this._rendererSettings.lineRenderWidth });
  }
}
let h = class extends N {
  constructor() {
    super(...arguments), this._loadImagery = (s, e, t, i, a) => V(this.layer, s, e, t, i, a), this._createStreamlinesMesh = (s, e, t) => this.layer.createStreamlinesMesh({ flowData: e, rendererSettings: s }, { signal: t }), this.attached = !1, this.container = null, this.layer = null, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = async () => {
      this._updateVisualization();
    };
  }
  get updating() {
    return !this._strategy || this._strategy.updating;
  }
  attach() {
    const { layer: s } = this, e = () => {
      this._loadImagery = (t, i, a, n, r) => V(s, t, i, a, n, r), this._updateVisualization();
    };
    "multidimensionalDefinition" in s ? this.handles.add(_(() => s.multidimensionalDefinition, e)) : this.handles.add([_(() => s.mosaicRule, e), _(() => s.renderingRule, e), _(() => s.definitionExpression, e)]), this.container = new ee(), this._strategy = new ne({ flowContainer: this.container }), this._updateVisualization();
  }
  detach() {
    this._strategy.destroy(), this.container.removeAllChildren(), this.container = null, this.handles.removeAll();
  }
  update(s) {
    s.stationary ? this._strategy.update(s) : this.layerView.requestUpdate();
  }
  hitTest(s) {
    return new J({ attributes: {}, geometry: s.clone(), layer: this.layer });
  }
  moveEnd() {
  }
  async doRefresh() {
  }
  _updateVisualization() {
    if (this.layer.renderer.type !== "flow")
      return;
    const s = new ge(this._loadImagery, this._createStreamlinesMesh, this.layer.renderer, this.timeExtent);
    this.container.flowStyle = s, this.layerView.requestUpdate();
  }
};
d([c()], h.prototype, "_strategy", void 0), d([c()], h.prototype, "attached", void 0), d([c()], h.prototype, "container", void 0), d([c()], h.prototype, "layer", void 0), d([c()], h.prototype, "layerView", void 0), d([c()], h.prototype, "type", void 0), d([c()], h.prototype, "updating", null), d([c()], h.prototype, "timeExtent", void 0), h = d([I("geoscene.views.2d.engine.flow.FlowView2D")], h);
const Ve = h;
class $e extends L {
  constructor(e = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._vaoInvalidated = !0, this.coordScale = [1, 1], this.height = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.width = null, this.source = e;
  }
  destroy() {
    var e, t;
    u(this.vaoData) && ((e = this.vaoData.magdir) == null || e.vao.dispose(), (t = this.vaoData.scalar) == null || t.vao.dispose(), this.vaoData = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(e) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(e) && (this._symbolizerParameters = e, this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(e) {
    this._source = e, this.invalidateVAO();
  }
  invalidateVAO() {
    var e, t;
    !this._vaoInvalidated && u(this.vaoData) && ((e = this.vaoData.magdir) == null || e.vao.dispose(), (t = this.vaoData.scalar) == null || t.vao.dispose(), this.vaoData = null, this._vaoInvalidated = !0, this.requestRender());
  }
  updateVectorFieldVAO(e) {
    if (this._vaoInvalidated) {
      if (this._vaoInvalidated = !1, u(this.source) && !u(this.vaoData)) {
        const { style: t } = this.symbolizerParameters;
        switch (t) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const i = $(this.source, this.symbolizerParameters), a = this._createVectorFieldVAO(e.context, i);
              this.vaoData = { magdir: a };
            }
            break;
          case "simple_scalar":
            {
              const i = z(this.source, this.symbolizerParameters), a = this._createVectorFieldVAO(e.context, i);
              this.vaoData = { scalar: a };
            }
            break;
          case "wind_speed": {
            const i = $(this.source, this.symbolizerParameters), a = this._createVectorFieldVAO(e.context, i), n = z(this.source, this.symbolizerParameters), r = this._createVectorFieldVAO(e.context, n);
            this.vaoData = { magdir: a, scalar: r };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { dvs: C() };
  }
  setTransform(e) {
    const t = G(this.transforms.dvs), [i, a] = e.toScreenNoRotation([0, 0], [this.x, this.y]), n = this.resolution / this.pixelRatio / e.resolution, r = n * this.width, l = n * this.height, o = Math.PI * this.rotation / 180;
    v(t, t, f(i, a)), v(t, t, f(r / 2, l / 2)), F(t, t, -o), v(t, t, f(-r / 2, -l / 2)), H(t, t, f(r, l)), K(this.transforms.dvs, e.displayViewMat3, t);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(e, t) {
    const { vertexData: i, indexData: a } = t, n = S.createVertex(e, w.STATIC_DRAW, new Float32Array(i)), r = S.createIndex(e, w.STATIC_DRAW, new Uint32Array(a)), l = Z("vector-field", { geometry: [{ location: 0, name: "a_pos", count: 2, type: m.FLOAT, normalized: !1 }, { location: 1, name: "a_offset", count: 2, type: m.FLOAT, normalized: !1 }, { location: 2, name: "a_vv", count: 2, type: m.FLOAT, normalized: !1 }] });
    return { vao: new M(e, l.attributes, l.bufferLayouts, { geometry: n }, r), elementCount: a.length };
  }
}
export {
  $e as _,
  Ve as d
};

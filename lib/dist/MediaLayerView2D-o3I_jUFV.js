import { fs as K, l as W, f as A, ft as X, fu as Z, s as k, H as ee, dR as te, n as H, fv as x, es as re, fw as se, dQ as ie, dS as ne, F as oe, dT as ae, dU as le, dV as he, dW as de, $ as me, fx as ce, V as pe, w as I, y as ue, r as fe, fy as _e, d as ye, aC as ve, fz as ge, a as M, b as G, c as we, _ as Re, fA as $e } from "./index-O2RTvw_o.js";
import { j as xe, i as z } from "./perspectiveUtils-PN8QPZgy.js";
import "./MagnifierPrograms-a8zETT4D.js";
import { i as Me } from "./Container-YlBWRIXD.js";
import "./BufferPool-4rb57HRE.js";
import { T as Te } from "./color-etN3NLwm.js";
import { i as Ee, w as be } from "./WGLContainer-Onm3yFPW.js";
import { D as Ce, F as L } from "./enums-Vyj7xNgv.js";
import { e as Ve, T as Se } from "./Texture-RB7_nCpt.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./definitions-jqTA3541.js";
import "./GeometryUtils-Ianw6pPH.js";
import { c as Q, u as qe } from "./VertexArrayObject-6efe00MS.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./enums-An2lvwTb.js";
import "./OrderIndependentTransparency-I6xtnkaq.js";
import "./floatRGBA-ePb46nBT.js";
import "./testSVGPremultipliedAlpha-pHqMyrTT.js";
import "./GraphicsView2D--2GlIbuy.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import { r as Ae } from "./vec3f32-BgIjjdRt.js";
import { v as Ge } from "./normalizeUtils-XFPcyvoe.js";
import { e as De } from "./mat3f64-Hpz0k8AN.js";
import { f as Pe, d as Oe } from "./LayerView-AYRNbjM7.js";
import "vue";
import "./normalizeUtilsSync-Dex5kKX_.js";
import "./normalizeUtilsCommon-kCEUMg3x.js";
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./enums-QU6RH5ju.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./rasterizingUtils-HjrHBJBZ.js";
import "./pbf-jTu79NaY.js";
import "./imageutils-sZdCBaw1.js";
import "./Matcher-877r_dj4.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./tileUtils-6LDwTufJ.js";
import "./TurboLine-Ghf7sU9Y.js";
import "./devEnvironmentUtils-HhcOP4Aw.js";
import "./webStyleSymbolUtils-jwA3T6ex.js";
import "./CircularArray-y-fwYqtW.js";
import "./throttle-QIuHYXCG.js";
import "./ComputedAttributeStorage-XU3YtPT-.js";
import "./arcadeTimeUtils-6Xb6Siq7.js";
import "./executionError-EEhTiqtD.js";
import "./projectionSupport-Ywut87fi.js";
import "./json-uwIaZKlZ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./config-TPD5ZwJG.js";
import "./basicInterfaces-qgybO4Nz.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./util-KO5PrNj-.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./utils-4fNQuSlg.js";
const y = De();
let Ue = class extends Me {
  constructor(e) {
    super(), this.elementView = e, this.isWrapAround = !1, this.perspectiveTransform = K(), this._vertices = new Float32Array(20), this._handles = [], this._handles.push(W(() => this.elementView.element.opacity, (t) => this.opacity = t, A), W(() => [this.elementView.coords], () => {
      this.requestRender();
    }, A), X(() => this.elementView.element.loaded, () => {
      const t = this.elementView.element;
      this.ready(), t.type === "video" && t.content != null && this._handles.push(Z(t.content, "play", () => this.requestRender()));
    }, A)), e.element.load().catch((t) => {
      k.getLogger("geoscene.views.2d.layers.MediaLayerView2D").error(new ee("element-load-error", "Element cannot be displayed", { element: e, error: t }));
    });
  }
  destroy() {
    this._handles.forEach((e) => e.remove()), this.texture = te(this.texture);
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e) {
    const { context: t } = e, s = this.elementView.element.content;
    if (s != null) {
      const i = s instanceof HTMLImageElement, n = s instanceof HTMLVideoElement, a = i ? s.naturalWidth : n ? s.videoWidth : s.width, o = i ? s.naturalHeight : n ? s.videoHeight : s.height;
      if (this._updatePerspectiveTransform(a, o), this.texture)
        n && !s.paused && (this.texture.setData(s), this.requestRender(), (t.type === H.WEBGL2 || x(a) && x(o)) && this.texture.generateMipmap());
      else {
        const d = new Ve();
        d.wrapMode = Ce.CLAMP_TO_EDGE, d.preMultiplyAlpha = !0, d.width = a, d.height = o, this.texture = new Se(t, d, s), (t.type === H.WEBGL2 || x(a) && x(o)) && this.texture.generateMipmap(), n && !s.paused && this.requestRender();
      }
    }
    super.beforeRender(e);
  }
  _createTransforms() {
    return null;
  }
  updateDrawCoords(e, t) {
    const s = this.elementView.coords;
    if (s == null)
      return;
    const [i, n, a, o] = s.rings[0], d = this._vertices, { x: l, y: h } = e, p = t !== 0;
    p ? d.set([n[0] - l, n[1] - h, i[0] - l, i[1] - h, a[0] - l, a[1] - h, o[0] - l, o[1] - h, o[0] - l, o[1] - h, n[0] + t - l, n[1] - h, n[0] + t - l, n[1] - h, i[0] + t - l, i[1] - h, a[0] + t - l, a[1] - h, o[0] + t - l, o[1] - h]) : d.set([n[0] - l, n[1] - h, i[0] - l, i[1] - h, a[0] - l, a[1] - h, o[0] - l, o[1] - h]), this.isWrapAround = p;
  }
  getVAO(e, t, s) {
    if (this.elementView.coords == null)
      return null;
    const i = this._vertices;
    if (this._vao)
      this._geometryVbo.setData(i);
    else {
      this._geometryVbo = Q.createVertex(e, L.DYNAMIC_DRAW, i);
      const n = Q.createVertex(e, L.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]));
      this._vao = new qe(e, s, t, { geometry: this._geometryVbo, tex: n });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e, t) {
    const s = this._vertices;
    xe(y, [0, 0, e, 0, 0, t, e, t], [s[0], s[1], s[4], s[5], s[2], s[3], s[6], s[7]]), re(this.perspectiveTransform, y[6] / y[8] * e, y[7] / y[8] * t);
  }
};
class je extends Ee {
  constructor() {
    super(...arguments), this._localOrigin = se(0, 0), this._viewStateId = -1, this._dvsMat3 = ie(), this.requiresDedicatedFBO = !1;
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(e) {
    this._updateMatrices(e), this._updateOverlays(e, this.children);
    for (const t of this.children)
      t.beforeRender(e);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "overlay", brushes: [be.overlay], target: () => this.children, drawPhase: Te.MAP });
    return [...super.prepareRenderPasses(e), t];
  }
  _updateMatrices(e) {
    const { state: t } = e, { id: s, size: i, pixelRatio: n, resolution: a, rotation: o, viewpoint: d, displayMat3: l } = t;
    if (this._viewStateId === s)
      return;
    const h = Math.PI / 180 * o, p = n * i[0], f = n * i[1], { x: T, y: g } = d.targetGeometry, E = Ge(T, t.spatialReference);
    this._localOrigin.x = E, this._localOrigin.y = g;
    const b = a * p, w = a * f, m = ne(this._dvsMat3);
    oe(m, m, l), ae(m, m, le(p / 2, f / 2)), he(m, m, Ae(p / b, -f / w, 1)), de(m, m, -h), this._viewStateId = s;
  }
  _updateOverlays(e, t) {
    const { state: s } = e, { rotation: i, spatialReference: n, worldScreenWidth: a, size: o, viewpoint: d } = s, l = this._localOrigin;
    let h = 0;
    const p = me(n);
    if (p && n.isWrappable) {
      const f = o[0], T = o[1], g = 180 / Math.PI * i, E = Math.abs(Math.cos(g)), b = Math.abs(Math.sin(g)), w = Math.round(f * E + T * b), [m, C] = p.valid, u = ce(n), { x: D, y: F } = d.targetGeometry, N = [D, F], V = [0, 0];
      s.toScreen(V, N);
      const R = [0, 0];
      let S;
      S = w > a ? 0.5 * a : 0.5 * w;
      const P = Math.floor((D + 0.5 * u) / u), Y = m + P * u, J = C + P * u, q = [V[0] + S, 0];
      s.toMap(R, q), R[0] > J && (h = u), q[0] = V[0] - S, s.toMap(R, q), R[0] < Y && (h = -u);
      for (const $ of t) {
        const O = $.elementView.bounds;
        if (O == null)
          continue;
        const [U, , j] = O;
        U < m && j > m ? $.updateDrawCoords(l, u) : j > C && U < C ? $.updateDrawCoords(l, -u) : $.updateDrawCoords(l, h);
      }
    } else
      for (const f of t)
        f.updateDrawCoords(l, h);
  }
}
let _ = class extends Pe(Oe) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = /* @__PURE__ */ new Map(), this._debugGraphicsView = null, this.layer = null, this.elements = new pe();
  }
  attach() {
    this.addAttachHandles([I(() => this.layer.effectiveSource, "refresh", () => {
      this._tileStrategy.refresh((r) => this._updateTile(r)), this.requestUpdate();
    }), I(() => this.layer.effectiveSource, "change", ({ element: r }) => this._elementUpdateHandler(r))]), this._overlayContainer = new je(), this.container.addChild(this._overlayContainer), this._fetchQueue = new ue({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (r, e) => this._queryElements(r, e) }), this._tileStrategy = new fe({ cachePolicy: "purge", resampling: !0, acquireTile: (r) => this._acquireTile(r), releaseTile: (r) => this._releaseTile(r), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
  }
  detach() {
    var r;
    this.elements.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.destroy(), this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this._elementReferences.clear(), (r = this._debugGraphicsView) == null || r.destroy();
  }
  supportsSpatialReference(r) {
    return !0;
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
  update(r) {
    var e;
    this._tileStrategy.update(r), (e = this._debugGraphicsView) == null || e.update(r);
  }
  async hitTest(r, e) {
    const t = [], s = r.normalize(), i = [s.x, s.y];
    for (const { projectedElement: { normalizedCoords: n, element: a } } of this._elementReferences.values())
      n != null && _e(n.rings, i) && t.push({ type: "media", element: a, layer: this.layer, mapPoint: r });
    return t.reverse();
  }
  canResume() {
    return this.layer.source != null && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((r) => this._updateTile(r));
  }
  _acquireTile(r) {
    const e = new We(r.clone());
    return this._updateTile(e), e;
  }
  _updateTile(r) {
    this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then((e) => {
      const [t, s] = r.setElements(e);
      this._referenceElements(r, t), this._dereferenceElements(r, s), this.requestUpdate();
    }, (e) => {
      ye(e) || k.getLogger(this).error(e);
    }));
  }
  _releaseTile(r) {
    this._fetchQueue.abort(r.key.id), r.elements && this._dereferenceElements(r, r.elements), this.requestUpdate();
  }
  async _queryElements(r, e) {
    const t = this.layer.effectiveSource;
    if (t == null)
      return [];
    this.view.featuresTilingScheme.getTileBounds(c, r, !0);
    const s = new ve({ xmin: c[0], ymin: c[1], xmax: c[2], ymax: c[3], spatialReference: this.view.spatialReference });
    return t.queryElements(s, e);
  }
  _referenceElements(r, e) {
    if (this.layer.source != null)
      for (const t of e)
        this._referenceElement(r, t);
  }
  _referenceElement(r, e) {
    ge(this._elementReferences, e.uid, () => {
      const t = new z({ element: e, spatialReference: this.view.spatialReference }), s = new Ue(t);
      return this._overlayContainer.addChild(s), this.elements.add(e), { tiles: /* @__PURE__ */ new Set(), projectedElement: t, overlay: s, debugGraphic: null };
    }).tiles.add(r);
  }
  _dereferenceElements(r, e) {
    for (const t of e)
      this._dereferenceElement(r, t);
  }
  _dereferenceElement(r, e) {
    var s;
    const t = this._elementReferences.get(e.uid);
    t.tiles.delete(r), t.tiles.size || (this._overlayContainer.removeChild(t.overlay), t.overlay.destroy(), t.projectedElement.destroy(), this._elementReferences.delete(e.uid), this.elements.remove(e), (s = this._debugGraphicsView) == null || s.graphics.remove(t.debugGraphic));
  }
  _elementUpdateHandler(r) {
    var s;
    let e = this._elementReferences.get(r.uid);
    if (e) {
      const i = e.projectedElement.normalizedCoords;
      if (i == null)
        return this._overlayContainer.removeChild(e.overlay), e.overlay.destroy(), e.projectedElement.destroy(), this._elementReferences.delete(r.uid), this.elements.remove(r), void ((s = this._debugGraphicsView) == null ? void 0 : s.graphics.remove(e.debugGraphic));
      const n = [], a = [];
      for (const o of this._tileStrategy.tiles) {
        const d = B(this.view.featuresTilingScheme, o, i);
        e.tiles.has(o) ? d || a.push(o) : d && n.push(o);
      }
      for (const o of n)
        this._referenceElement(o, r);
      for (const o of a)
        this._dereferenceElement(o, r);
      return e = this._elementReferences.get(r.uid), void ((e == null ? void 0 : e.debugGraphic) && (e.debugGraphic.geometry = e.projectedElement.normalizedCoords, this._debugGraphicsView.graphicUpdateHandler({ graphic: e.debugGraphic, property: "geometry" })));
    }
    const t = new z({ element: r, spatialReference: this.view.spatialReference }).normalizedCoords;
    if (t != null)
      for (const i of this._tileStrategy.tiles)
        B(this.view.featuresTilingScheme, i, t) && this._referenceElement(i, r);
  }
};
M([G()], _.prototype, "_fetchQueue", void 0), M([G()], _.prototype, "layer", void 0), M([G({ readOnly: !0 })], _.prototype, "elements", void 0), _ = M([we("geoscene.views.2d.layers.MediaLayerView2D")], _);
const c = Re(), v = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function B(r, e, t) {
  return r.getTileBounds(c, e.key, !0), v.xmin = c[0], v.ymin = c[1], v.xmax = c[2], v.ymax = c[3], $e(v, t);
}
class We {
  constructor(e) {
    this.key = e, this.elements = null, this.isReady = !1, this.visible = !0;
  }
  setElements(e) {
    const t = [], s = new Set(this.elements);
    this.elements = e;
    for (const i of e)
      s.has(i) ? s.delete(i) : t.push(i);
    return this.isReady = !0, [t, Array.from(s)];
  }
  destroy() {
  }
}
const Ft = _;
export {
  Ft as default
};
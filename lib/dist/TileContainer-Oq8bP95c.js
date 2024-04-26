import { H as c, dp as d, dq as u, Z as p } from "./index-Ek1MTSEY.js";
import { a as f } from "./Container-zrthpNTa.js";
import { I as o } from "./Utils-1SmxxQP6.js";
import { a as g, c as m, p as y } from "./WGLContainer-euFYNSIp.js";
let P = class extends f {
  constructor(e, t, s, i, n, a = i, l = n) {
    super(), this.triangleCountReportedInDebug = 0, this.triangleCount = 0, this.texture = null, this.key = new c(e), this.x = t, this.y = s, this.width = i, this.height = n, this.rangeX = a, this.rangeY = l;
  }
  destroy() {
    this.texture && (this.texture.dispose(), this.texture = null);
  }
  setTransform(e, t) {
    const s = t / (e.resolution * e.pixelRatio), i = this.transforms.tileMat3, [n, a] = e.toScreenNoRotation([0, 0], [this.x, this.y]), l = this.width / this.rangeX * s, h = this.height / this.rangeY * s;
    d(i, l, 0, 0, 0, h, 0, n, a, 1), u(this.transforms.dvs, e.displayViewMat3, i);
  }
};
const w = (r, e) => r.key.level - e.key.level != 0 ? r.key.level - e.key.level : r.key.row - e.key.row != 0 ? r.key.row - e.key.row : r.key.col - e.key.col;
let T = class extends g {
  constructor(e) {
    super(), this._tileInfoView = e;
  }
  get requiresDedicatedFBO() {
    return !1;
  }
  renderChildren(e) {
    this.sortChildren(w), this.setStencilReference(e), super.renderChildren(e);
  }
  createRenderParams(e) {
    const { state: t } = e, s = super.createRenderParams(e);
    return s.requiredLevel = this._tileInfoView.getClosestInfoForScale(t.scale).level, s.displayLevel = this._tileInfoView.tileInfo.scaleToZoom(t.scale), s;
  }
  prepareRenderPasses(e) {
    const t = super.prepareRenderPasses(e);
    return t.push(e.registerRenderPass({ name: "stencil", brushes: [m], drawPhase: o.DEBUG | o.MAP | o.HIGHLIGHT, target: () => this.getStencilTarget() })), p("geoscene-tiles-debug") && t.push(e.registerRenderPass({ name: "tileInfo", brushes: [y], drawPhase: o.DEBUG, target: () => this.children })), t;
  }
  getStencilTarget() {
    return this.children;
  }
  updateTransforms(e) {
    for (const t of this.children) {
      const s = this._tileInfoView.getTileResolution(t.key);
      t.setTransform(e, s);
    }
  }
  setStencilReference(e) {
    let t = 1;
    for (const s of this.children)
      s.stencilRef = t++;
  }
};
export {
  T as o,
  P as r
};

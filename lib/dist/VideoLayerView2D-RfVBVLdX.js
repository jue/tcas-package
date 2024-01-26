import { a as t, b as a, c as s } from "./index-B7TsCcH6.js";
import { f as o, d as p } from "./LayerView-C6bBL_rq.js";
import "vue";
import "./Container-ul_EuzrF.js";
import "./definitions-Co8CrS3w.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-v5WxIbZy.js";
let e = class extends o(p) {
  constructor() {
    super(...arguments), this.layer = null;
  }
  attach() {
  }
  detach() {
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
  }
};
t([a()], e.prototype, "layer", void 0), e = t([s("geoscene.views.2d.layers.VideoLayerView2D")], e);
const h = e;
export {
  h as default
};

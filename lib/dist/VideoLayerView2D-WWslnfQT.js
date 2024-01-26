import { a as t, b as a, c as s } from "./index-HxXrdrYt.js";
import { f as o, d as p } from "./LayerView-xItHBa3T.js";
import "vue";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
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

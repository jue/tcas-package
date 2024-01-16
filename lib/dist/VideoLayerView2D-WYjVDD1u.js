import { a as t, b as a, c as s } from "./index-O2RTvw_o.js";
import { f as o, d as p } from "./LayerView-AYRNbjM7.js";
import "vue";
import "./Container-YlBWRIXD.js";
import "./definitions-jqTA3541.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
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

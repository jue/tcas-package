import { V as i, u as n, a as r, b as s, v as l, c as o } from "./index-h53IWweP.js";
import { f as h, d } from "./LayerView-Ll--tTKd.js";
import "vue";
import "./Container-wINu8WJB.js";
import "./definitions-Ikx6Iti_.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-9jggcs3t.js";
let t = class extends h(d) {
  constructor(e) {
    super(e), this.layerViews = new i();
  }
  set layerViews(e) {
    this._set("layerViews", n(e, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0 ? 1 : this.layerViews.reduce((e, a) => e + a.updatingProgress, 0) / this.layerViews.length;
  }
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
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
    this.container.removeAllChildren(), this.layerViews.forEach((e, a) => this.container.addChildAt(e.container, a));
  }
};
r([s({ cast: l })], t.prototype, "layerViews", null), r([s({ readOnly: !0 })], t.prototype, "updatingProgress", null), t = r([o("geoscene.views.2d.layers.KnowledgeGraphLayerView2D")], t);
const V = t;
export {
  V as default
};

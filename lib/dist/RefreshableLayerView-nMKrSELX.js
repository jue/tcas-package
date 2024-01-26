import { e as a, d as i, a as d, K as h, g as l, s as o } from "./index-j1oaLRcp.js";
const c = (r) => {
  let e = class extends r {
    initialize() {
      this.handles.add(h(() => this.layer, "refresh", (t) => {
        this.doRefresh(t.dataChanged).catch((s) => {
          l(s) || o.getLogger(this.declaredClass).error(s);
        });
      }), "RefreshableLayerView");
    }
  };
  return a([i()], e.prototype, "layer", void 0), e = a([d("geoscene.layers.mixins.RefreshableLayerView")], e), e;
};
export {
  c as i
};

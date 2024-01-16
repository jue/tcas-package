import { a as s, b as i, c as h, w as o, d, s as l } from "./index-O2RTvw_o.js";
const c = (r) => {
  let e = class extends r {
    initialize() {
      this.handles.add(o(() => this.layer, "refresh", (t) => {
        this.doRefresh(t.dataChanged).catch((a) => {
          d(a) || l.getLogger(this).error(a);
        });
      }), "RefreshableLayerView");
    }
  };
  return s([i()], e.prototype, "layer", void 0), e = s([h("geoscene.layers.mixins.RefreshableLayerView")], e), e;
};
export {
  c as a
};

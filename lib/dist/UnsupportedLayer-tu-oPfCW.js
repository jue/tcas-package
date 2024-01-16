import { cn as a, cp as p, d9 as d, a as r, b as i, c as l, ax as u, H as y } from "./index-h53IWweP.js";
import "vue";
let t = class extends a(p(u)) {
  constructor(e) {
    super(e), this.resourceInfo = null, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e, o) => {
      d(() => {
        const s = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let n = "Unsupported layer type";
        s && (n += " " + s), o(new y("layer:unsupported-layer-type", n, { layerType: s }));
      });
    }));
  }
  read(e, o) {
    const s = { resourceInfo: e };
    e.id != null && (s.id = e.id), e.title != null && (s.title = e.title), super.read(s, o);
  }
  write(e, o) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
r([i({ readOnly: !0 })], t.prototype, "resourceInfo", void 0), r([i({ type: ["show", "hide"] })], t.prototype, "listMode", void 0), r([i({ json: { read: !1 }, readOnly: !0, value: "unsupported" })], t.prototype, "type", void 0), t = r([l("geoscene.layers.UnsupportedLayer")], t);
const f = t;
export {
  f as default
};

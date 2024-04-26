import { bw as p, bz as a, c8 as d, e as o, d as i, a as l, bE as u, y } from "./index-Ek1MTSEY.js";
import "vue";
let t = class extends p(a(u)) {
  constructor(e) {
    super(e), this.resourceInfo = null, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e, r) => {
      d(() => {
        const s = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let n = "Unsupported layer type";
        s && (n += " " + s), r(new y("layer:unsupported-layer-type", n, { layerType: s }));
      });
    }));
  }
  read(e, r) {
    const s = { resourceInfo: e };
    e.id != null && (s.id = e.id), e.title != null && (s.title = e.title), super.read(s, r);
  }
  write(e) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
o([i({ readOnly: !0 })], t.prototype, "resourceInfo", void 0), o([i({ type: ["show", "hide"] })], t.prototype, "listMode", void 0), o([i({ json: { read: !1 }, readOnly: !0, value: "unsupported" })], t.prototype, "type", void 0), t = o([l("geoscene.layers.UnsupportedLayer")], t);
const h = t;
export {
  h as default
};

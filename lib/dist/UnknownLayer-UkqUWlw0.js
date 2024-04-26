import { bw as i, bz as y, c8 as l, e as o, d as t, a as p, bE as u, y as d } from "./index-Ek1MTSEY.js";
import "vue";
let e = class extends i(y(u)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, n) => {
      l(() => {
        const s = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let a = "Unknown layer type";
        s && (a += " " + s), n(new d("layer:unknown-layer-type", a, { layerType: s }));
      });
    }));
  }
  read(r, n) {
    super.read({ resourceInfo: r }, n);
  }
  write() {
    return null;
  }
};
o([t({ readOnly: !0 })], e.prototype, "resourceInfo", void 0), o([t({ type: ["show", "hide"] })], e.prototype, "listMode", void 0), o([t({ json: { read: !1 }, readOnly: !0, value: "unknown" })], e.prototype, "type", void 0), e = o([p("geoscene.layers.UnknownLayer")], e);
const f = e;
export {
  f as default
};

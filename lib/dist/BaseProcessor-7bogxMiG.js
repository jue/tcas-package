import { e as t, d as o, a as s, c9 as l } from "./index-j1oaLRcp.js";
let e = class extends l {
  initialize() {
  }
  destroy() {
  }
  get supportsTileUpdates() {
    return !1;
  }
  get spatialReference() {
    const r = this.get("tileStore.tileScheme.spatialReference");
    return r && r.toJSON() || null;
  }
};
t([o({ readOnly: !0 })], e.prototype, "supportsTileUpdates", null), t([o({ constructOnly: !0 })], e.prototype, "remoteClient", void 0), t([o({ constructOnly: !0 })], e.prototype, "service", void 0), t([o()], e.prototype, "spatialReference", null), t([o({ constructOnly: !0 })], e.prototype, "tileInfo", void 0), t([o({ constructOnly: !0 })], e.prototype, "tileStore", void 0), e = t([s("geoscene.views.2d.layers.features.processors.BaseProcessor")], e);
const p = e;
export {
  p
};

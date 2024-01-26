import { e as t, d as a, aE as r, m as p, a as n } from "./index-j1oaLRcp.js";
import { r as s, z as c } from "./TilemapCache-0axZcxQ8.js";
const d = (o) => {
  let e = class extends o {
    constructor() {
      super(...arguments), this.copyright = null, this.minScale = 0, this.maxScale = 0, this.spatialReference = null, this.tileInfo = null, this.tilemapCache = null;
    }
    readMinScale(i, l) {
      return l.minLOD != null && l.maxLOD != null ? i : 0;
    }
    readMaxScale(i, l) {
      return l.minLOD != null && l.maxLOD != null ? i : 0;
    }
    get supportsBlankTile() {
      return this.version >= 10.2;
    }
    readTilemapCache(i, l) {
      return l.capabilities && l.capabilities.indexOf("Tilemap") > -1 ? new c({ layer: this }) : null;
    }
  };
  return t([a({ json: { read: { source: "copyrightText" } } })], e.prototype, "copyright", void 0), t([a()], e.prototype, "minScale", void 0), t([r("service", "minScale")], e.prototype, "readMinScale", null), t([a()], e.prototype, "maxScale", void 0), t([r("service", "maxScale")], e.prototype, "readMaxScale", null), t([a({ type: p })], e.prototype, "spatialReference", void 0), t([a({ readOnly: !0 })], e.prototype, "supportsBlankTile", null), t([a(s)], e.prototype, "tileInfo", void 0), t([a()], e.prototype, "tilemapCache", void 0), t([r("service", "tilemapCache", ["capabilities"])], e.prototype, "readTilemapCache", null), t([a()], e.prototype, "version", void 0), e = t([n("geoscene.layers.mixins.ArcGISCachedService")], e), e;
};
export {
  d as s
};

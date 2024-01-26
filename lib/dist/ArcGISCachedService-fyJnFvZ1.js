import { a as t, b as i, bl as m, a9 as x, bm as y, c as S } from "./index-HxXrdrYt.js";
import { e as I } from "./TileInfoTilemapCache-OBaZtgzE.js";
import { T as O } from "./TilemapCache-3lgmxa3s.js";
const C = (h) => {
  let l = class extends h {
    constructor() {
      super(...arguments), this.copyright = null, this.minScale = 0, this.maxScale = 0, this.spatialReference = null, this.tileInfo = null, this.tilemapCache = null;
    }
    destroy() {
      var a, e;
      (e = (a = this.tilemapCache) == null ? void 0 : a.destroy) == null || e.call(a);
    }
    readMinScale(a, e) {
      return e.minLOD != null && e.maxLOD != null ? a : 0;
    }
    readMaxScale(a, e) {
      return e.minLOD != null && e.maxLOD != null ? a : 0;
    }
    get supportsBlankTile() {
      return this.version >= 10.2;
    }
    readTilemapCache(a, e, f) {
      var u;
      const v = (u = e.capabilities) == null ? void 0 : u.includes("Tilemap");
      let { minLOD: r, maxLOD: o, minScale: p, maxScale: c } = e;
      if (r == null && o == null && p !== 0 && c !== 0) {
        const n = (s) => Math.round(1e4 * s) / 1e4;
        p = n(p || e.tileInfo.lods[0].scale), c = n(c || e.tileInfo.lods[e.tileInfo.lods.length - 1].scale);
        for (const s of e.tileInfo.lods) {
          const d = n(s.scale);
          r = d >= p ? s.level : r, o = d >= c ? s.level : o;
        }
      }
      if (v)
        return new O({ layer: this, minLOD: r, maxLOD: o });
      if (e.tileInfo) {
        const n = new y();
        return n.read(e.tileInfo, f), new I(n, r, o);
      }
      return null;
    }
  };
  return t([i({ json: { read: { source: "copyrightText" } } })], l.prototype, "copyright", void 0), t([i()], l.prototype, "minScale", void 0), t([m("service", "minScale")], l.prototype, "readMinScale", null), t([i()], l.prototype, "maxScale", void 0), t([m("service", "maxScale")], l.prototype, "readMaxScale", null), t([i({ type: x })], l.prototype, "spatialReference", void 0), t([i({ readOnly: !0 })], l.prototype, "supportsBlankTile", null), t([i({ type: y })], l.prototype, "tileInfo", void 0), t([i()], l.prototype, "tilemapCache", void 0), t([m("service", "tilemapCache", ["capabilities", "tileInfo"])], l.prototype, "readTilemapCache", null), t([i()], l.prototype, "version", void 0), l = t([S("geoscene.layers.mixins.ArcGISCachedService")], l), l;
};
export {
  C as p
};
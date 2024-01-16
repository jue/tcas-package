import { bn as o, H as r, d as h } from "./index-O2RTvw_o.js";
class v {
  constructor(l, t = 0, e = l.lods.length - 1) {
    this.tileInfo = l, this.minLOD = t, this.maxLOD = e;
  }
  get effectiveMinLOD() {
    return this.minLOD ?? this.tileInfo.lods[0].level;
  }
  get effectiveMaxLOD() {
    return this.maxLOD ?? this.tileInfo.lods[this.tileInfo.lods.length - 1].level;
  }
  getAvailability(l, t, e) {
    var a;
    const i = (a = this.tileInfo) == null ? void 0 : a.lodAt(l);
    return !i || l < this.minLOD || l > this.maxLOD ? "unavailable" : i.cols && i.rows ? e >= i.cols[0] && e <= i.cols[1] && t >= i.rows[0] && t <= i.rows[1] ? "unknown" : "unavailable" : "unknown";
  }
  async fetchAvailability(l, t, e, i) {
    await o(i);
    const a = this.getAvailability(l, t, e);
    if (a === "unavailable")
      throw new r("tile-map:tile-unavailable", "Tile is not available", { level: l, row: t, col: e });
    return a;
  }
  async fetchAvailabilityUpsample(l, t, e, i, a) {
    await o(a), i.level = l, i.row = t, i.col = e;
    const n = this.tileInfo;
    return n.updateTileInfo(i), this.fetchAvailability(l, t, e, a).catch((s) => {
      if (h(s))
        throw s;
      if (n.upsampleTile(i))
        return this.fetchAvailabilityUpsample(i.level, i.row, i.col, i, a);
      throw s;
    });
  }
}
export {
  v as e
};
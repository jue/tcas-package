import { aw as u, r as p, e as a, d as l, ax as b, a as d, ay as g } from "./index-Ek1MTSEY.js";
import { n as f } from "./sublayerUtils-D2vrXRHA.js";
import { n as m, l as S } from "./floorFilterUtils-HsstcPZ9.js";
const v = { visible: "visibleSublayers", definitionExpression: "layerDefs", labelingInfo: "hasDynamicLayers", labelsVisible: "hasDynamicLayers", opacity: "hasDynamicLayers", minScale: "visibleSublayers", maxScale: "visibleSublayers", renderer: "hasDynamicLayers", source: "hasDynamicLayers" };
let t = class extends u(g) {
  constructor(e) {
    super(e), this.floors = null, this.scale = 0;
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers)
      return null;
    const e = this.visibleSublayers.map((s) => {
      const o = m(this.floors, s);
      return s.toExportImageJSON(o);
    });
    return e.length ? JSON.stringify(e) : null;
  }
  get hasDynamicLayers() {
    return this.layer && f(this.visibleSublayers, this.layer.serviceSublayers, this.layer);
  }
  set layer(e) {
    this._get("layer") !== e && (this._set("layer", e), this.handles.remove("layer"), e && this.handles.add([e.allSublayers.on("change", () => this.notifyChange("visibleSublayers")), e.on("sublayer-update", (s) => this.notifyChange(v[s.propertyName]))], "layer"));
  }
  get layers() {
    const e = this.visibleSublayers;
    return e ? e.length ? "show:" + e.map((s) => s.id).join(",") : "show:-1" : null;
  }
  get layerDefs() {
    var e;
    const s = !((e = this.floors) == null || !e.length), o = this.visibleSublayers.filter((i) => i.definitionExpression != null || s && i.floorInfo != null);
    return o.length ? JSON.stringify(o.reduce((i, r) => {
      const n = m(this.floors, r), y = p(n) ? S(n, r) : r.definitionExpression;
      return i[r.id] = y, i;
    }, {})) : null;
  }
  get version() {
    this.commitProperty("layers"), this.commitProperty("layerDefs"), this.commitProperty("dynamicLayers"), this.commitProperty("timeExtent");
    const e = this.layer;
    return e && (e.commitProperty("dpi"), e.commitProperty("imageFormat"), e.commitProperty("imageTransparency"), e.commitProperty("gdbVersion")), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const e = [];
    if (!this.layer)
      return e;
    const s = this.layer.sublayers, o = (r) => {
      const n = this.scale, y = n === 0, h = r.minScale === 0 || n <= r.minScale, c = r.maxScale === 0 || n >= r.maxScale;
      r.visible && (y || h && c) && (r.sublayers ? r.sublayers.forEach(o) : e.unshift(r));
    };
    s && s.forEach(o);
    const i = this._get("visibleSublayers");
    return !i || i.length !== e.length || i.some((r, n) => e[n] !== r) ? e : i;
  }
  toJSON() {
    const e = this.layer;
    let s = { dpi: e.dpi, format: e.imageFormat, transparent: e.imageTransparency, gdbVersion: e.gdbVersion || null };
    return this.hasDynamicLayers && this.dynamicLayers ? s.dynamicLayers = this.dynamicLayers : s = { ...s, layers: this.layers, layerDefs: this.layerDefs }, s;
  }
};
a([l({ readOnly: !0 })], t.prototype, "dynamicLayers", null), a([l()], t.prototype, "floors", void 0), a([l({ readOnly: !0 })], t.prototype, "hasDynamicLayers", null), a([l()], t.prototype, "layer", null), a([l({ readOnly: !0 })], t.prototype, "layers", null), a([l({ readOnly: !0 })], t.prototype, "layerDefs", null), a([l({ type: Number })], t.prototype, "scale", void 0), a([l(b)], t.prototype, "timeExtent", void 0), a([l({ readOnly: !0 })], t.prototype, "version", null), a([l({ readOnly: !0 })], t.prototype, "visibleSublayers", null), t = a([d("geoscene.layers.mixins.ExportImageParameters")], t);
export {
  t as c
};

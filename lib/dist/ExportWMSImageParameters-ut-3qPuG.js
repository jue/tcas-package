import { aw as h, e as a, d as t, a as m, ay as b } from "./index-j1oaLRcp.js";
const v = { visible: "visibleSublayers" };
let r = class extends h(b) {
  constructor(e) {
    super(e), this.scale = 0;
  }
  set layer(e) {
    this._get("layer") !== e && (this._set("layer", e), this.handles.remove("layer"), e && this.handles.add([e.sublayers.on("change", () => this.notifyChange("visibleSublayers")), e.on("wms-sublayer-update", (s) => this.notifyChange(v[s.propertyName]))], "layer"));
  }
  get layers() {
    const { visibleSublayers: e } = this;
    return e.filter((s) => s.name).map((s) => s.name).join(",");
  }
  get version() {
    this.commitProperty("layers");
    const e = this.layer;
    return e && e.commitProperty("imageTransparency"), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const { layer: e, scale: s } = this, l = e == null ? void 0 : e.sublayers, o = [], i = (n) => {
      const { minScale: y, maxScale: p, sublayers: u, visible: c } = n;
      c && (s === 0 || (y === 0 || s <= y) && (p === 0 || s >= p)) && (u ? u.forEach(i) : o.unshift(n));
    };
    return l == null || l.forEach(i), o;
  }
  toJSON() {
    const { layer: e, layers: s } = this, { imageFormat: l, imageTransparency: o, version: i } = e;
    return { format: l, request: "GetMap", service: "WMS", styles: "", transparent: o ? "TRUE" : "FALSE", version: i, layers: s };
  }
};
a([t()], r.prototype, "layer", null), a([t({ readOnly: !0 })], r.prototype, "layers", null), a([t({ type: Number })], r.prototype, "scale", void 0), a([t({ readOnly: !0 })], r.prototype, "version", null), a([t({ readOnly: !0 })], r.prototype, "visibleSublayers", null), r = a([m("geoscene.layers.support.ExportWMSImageParameters")], r);
export {
  r as l
};

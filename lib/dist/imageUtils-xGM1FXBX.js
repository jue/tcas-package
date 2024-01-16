import { a as I, c as L } from "./index-h53IWweP.js";
import { n as M } from "./BitmapTileContainer-jEzjGdsB.js";
const b = (t) => {
  let e = class extends t {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new M(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      var i;
      this.container.removeChild(this._bitmapView), (i = this._bitmapView) == null || i.removeAllChildren();
    }
  };
  return e = I([L("geoscene.views.2d.layers.BitmapTileLayerView2D")], e), e;
};
function C(t) {
  return t instanceof HTMLImageElement ? t.naturalWidth : t.width;
}
function T(t) {
  return t instanceof HTMLImageElement ? t.naturalHeight : t.height;
}
function y(t, e, i, o) {
  if (i.level === o.level)
    return e;
  const n = t.tileInfo.size, l = t.getTileResolution(i.level), r = t.getTileResolution(o.level);
  let a = t.getLODInfoAt(o.level);
  const m = a.getXForColumn(o.col), d = a.getYForRow(o.row);
  a = t.getLODInfoAt(i.level);
  const g = a.getXForColumn(i.col), u = a.getYForRow(i.row), s = C(e) / n[0], h = T(e) / n[1], w = Math.round(s * ((m - g) / l)), f = Math.round(h * (-(d - u) / l)), v = Math.round(s * n[0] * (r / l)), p = Math.round(h * n[1] * (r / l)), c = V(n);
  return c.getContext("2d").drawImage(e, w, f, v, p, 0, 0, n[0], n[1]), c;
}
function V(t) {
  const e = document.createElement("canvas");
  return [e.width, e.height] = t, e;
}
export {
  y as n,
  V as o,
  b as t
};

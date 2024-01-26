import { u as A, c as u, j as q, f as R, C as E, M as k, h as W, k as F, r as _, l as z, Q as G, Y as P, m as M, o as K, v as $, q as N, I as j, e as h, d as m, a as H } from "./index-j1oaLRcp.js";
import { b as V, g as J, d as Q } from "./kmlUtils-TZvirNpK.js";
import { v as B } from "./Bitmap-WAGgSDLg.js";
import { t as O } from "./BitmapContainer-o7-pgJEM.js";
import { f as Y, u as X } from "./LayerView-u7tKPPGO.js";
import { i as b } from "./GraphicContainer-pTHcU1s8.js";
import { r as v } from "./BaseGraphicContainer-vPm1hpo8.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./WGLContainer-Za_nqieP.js";
import "./pixelUtils-Kz9o33NO.js";
import "./VertexArrayObject-WfBtioi6.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./enums-YM9SAu8u.js";
import "./Utils-Mkp4Julu.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./MaterialKey-tb9URCR8.js";
import "./earcut-80XuLCNX.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./projectionSupport-eTH1ob6-.js";
import "./json-uwIaZKlZ.js";
import "./FeatureContainer-Yy5F93tk.js";
import "./TileContainer-_mN9fJMf.js";
import "./visualVariablesUtils-lTNHq6nM.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./Matcher-lReemcRu.js";
import "./tileUtils-ZmGgn6yC.js";
import "./TileClipper-2O-LVJh2.js";
import "./Geometry-etmNDSLV.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./devEnvironmentUtils-czI3Gfmg.js";
import "./schemaUtils-NQXxAz6-.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./ComputedAttributeStorage-4bJ5RN5o.js";
import "./vec3f32-iv6FBVVh.js";
class D {
  constructor() {
    this.allSublayers = /* @__PURE__ */ new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }
}
let r = class extends Y(X) {
  constructor() {
    super(...arguments), this._handles = new A(), this._bitmapIndex = /* @__PURE__ */ new Map(), this._mapImageContainer = new O(), this._kmlVisualData = new D(), this.allVisiblePoints = new u(), this.allVisiblePolylines = new u(), this.allVisiblePolygons = new u(), this.allVisibleMapImages = new q();
  }
  async hitTest(i, t) {
    var e, l, s;
    return (await Promise.all([(e = this._pointsView) == null ? void 0 : e.hitTest(i), (l = this._polylinesView) == null ? void 0 : l.hitTest(i), (s = this._polygonsView) == null ? void 0 : s.hitTest(i)])).flat().filter((a) => !!a && (a.layer = this.layer, a.sourceLayer = this.layer, !0));
  }
  update(i) {
    this._polygonsView && this._polygonsView.processUpdate(i), this._polylinesView && this._polylinesView.processUpdate(i), this._pointsView && this._pointsView.processUpdate(i);
  }
  attach() {
    this._fetchController = new AbortController(), this.container.addChild(this._mapImageContainer), this._polygonsView = new v({ view: this.view, graphics: this.allVisiblePolygons, requestUpdateCallback: () => this.requestUpdate(), container: new b(this.view.featuresTilingScheme) }), this.container.addChild(this._polygonsView.container), this._polylinesView = new v({ view: this.view, graphics: this.allVisiblePolylines, requestUpdateCallback: () => this.requestUpdate(), container: new b(this.view.featuresTilingScheme) }), this.container.addChild(this._polylinesView.container), this._pointsView = new v({ view: this.view, graphics: this.allVisiblePoints, requestUpdateCallback: () => this.requestUpdate(), container: new b(this.view.featuresTilingScheme) }), this.container.addChild(this._pointsView.container), this.handles.add([this.allVisibleMapImages.on("change", (i) => {
      i.added.forEach((t) => this._addMapImage(t)), i.removed.forEach((t) => this._removeMapImage(t));
    }), R(() => this.layer.visibleSublayers, (i) => {
      for (const [t, e] of this._kmlVisualData.allSublayers)
        e.visibility = 0;
      for (const t of i) {
        const e = this._kmlVisualData.allSublayers.get(t.id);
        e && (e.visibility = 1);
      }
      this._refreshCollections();
    })]), this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal));
  }
  detach() {
    this._fetchController.abort(), this._fetchController = null, this._handles.removeAll(), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView && (this._polygonsView.destroy(), this._polygonsView = null), this._polylinesView && (this._polylinesView.destroy(), this._polylinesView = null), this._pointsView && (this._pointsView.destroy(), this._pointsView = null);
  }
  moveStart() {
  }
  viewChange() {
    this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
  }
  _addMapImage(i) {
    (this.view.spatialReference.isWGS84 || this.view.spatialReference.isWebMercator) && E(i.href, { responseType: "image" }).then(({ data: t }) => {
      let e = k.fromJSON(i.extent);
      W(e, this.view.spatialReference) && (e = F(e, this.view.spatialReference));
      const l = new B(t, "standard");
      l.x = e.xmin, l.y = e.ymax, l.resolution = e.width / t.naturalWidth, l.rotation = i.rotation, this._mapImageContainer.addChild(l), this._bitmapIndex.set(i, l);
    });
  }
  async _getViewDependentUrl(i, t) {
    const { viewFormat: e, viewBoundScale: l, httpQuery: s } = i;
    if (_(e)) {
      if (z(t))
        throw new Error("Loading this network link requires a view state.");
      let a;
      if (await G(), _(l) && l !== 1) {
        const n = new k(t.extent);
        n.expand(l), a = n;
      } else
        a = t.extent;
      a = P(a, M.WGS84);
      const p = P(a, M.WebMercator), d = a.xmin, y = a.xmax, o = a.ymin, L = a.ymax, U = t.size[0] * t.pixelRatio, T = t.size[1] * t.pixelRatio, f = Math.max(p.width, p.height), S = { "[bboxWest]": d.toString(), "[bboxEast]": y.toString(), "[bboxSouth]": o.toString(), "[bboxNorth]": L.toString(), "[lookatLon]": a.center.x.toString(), "[lookatLat]": a.center.y.toString(), "[lookatRange]": f.toString(), "[lookatTilt]": "0", "[lookatHeading]": t.rotation.toString(), "[lookatTerrainLon]": a.center.x.toString(), "[lookatTerrainLat]": a.center.y.toString(), "[lookatTerrainAlt]": "0", "[cameraLon]": a.center.x.toString(), "[cameraLat]": a.center.y.toString(), "[cameraAlt]": f.toString(), "[horizFov]": "60", "[vertFov]": "60", "[horizPixels]": U.toString(), "[vertPixels]": T.toString(), "[terrainEnabled]": "0", "[clientVersion]": K, "[kmlVersion]": "2.2", "[clientName]": "GeoScene API for JavaScript", "[language]": "en-US" }, I = (n) => {
        for (const x in n)
          for (const C in S)
            n[x] = n[x].replace(C, S[C]);
      }, c = $(e);
      I(c);
      let w = {};
      _(s) && (w = $(s), I(w));
      const g = N(i.href);
      return g.query = { ...g.query, ...c, ...w }, `${g.path}?${j(c)}`;
    }
    return i.href;
  }
  async _fetchService(i) {
    const t = new D();
    await this._loadVisualData(this.layer.url, t, i), this._kmlVisualData = t, this._refreshCollections();
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((i) => this._isSublayerVisible(i.sublayerId)).map(({ item: i }) => i)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((i) => this._isSublayerVisible(i.sublayerId)).map(({ item: i }) => i)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((i) => this._isSublayerVisible(i.sublayerId)).map(({ item: i }) => i)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((i) => this._isSublayerVisible(i.sublayerId)).map(({ item: i }) => i));
  }
  _isSublayerVisible(i) {
    const t = this._kmlVisualData.allSublayers.get(i);
    return !!t.visibility && (t.parentFolderId === -1 || this._isSublayerVisible(t.parentFolderId));
  }
  _loadVisualData(i, t, e) {
    return this._fetchParsedKML(i, e).then(async (l) => {
      for (const s of l.sublayers) {
        t.allSublayers.set(s.id, s);
        const a = s.points ? await V(s.points) : [], p = s.polylines ? await V(s.polylines) : [], d = s.polygons ? await V(s.polygons) : [], y = s.mapImages || [];
        if (t.allPoints.push(...a.map((o) => ({ item: o, sublayerId: s.id }))), t.allPolylines.push(...p.map((o) => ({ item: o, sublayerId: s.id }))), t.allPolygons.push(...d.map((o) => ({ item: o, sublayerId: s.id }))), t.allMapImages.push(...y.map((o) => ({ item: o, sublayerId: s.id }))), s.networkLink) {
          const o = await this._getViewDependentUrl(s.networkLink, this.view.state);
          await this._loadVisualData(o, t, e);
        }
      }
    });
  }
  _fetchParsedKML(i, t) {
    return J(i, this.view.spatialReference, this.layer.refreshInterval, t).then((e) => Q(e.data));
  }
  _removeMapImage(i) {
    const t = this._bitmapIndex.get(i);
    t && (this._mapImageContainer.removeChild(t), this._bitmapIndex.delete(i));
  }
};
h([m()], r.prototype, "_pointsView", void 0), h([m()], r.prototype, "_polylinesView", void 0), h([m()], r.prototype, "_polygonsView", void 0), h([m()], r.prototype, "updating", void 0), r = h([H("geoscene.views.2d.layers.KMLLayerView2D")], r);
const Ki = r;
export {
  Ki as default
};

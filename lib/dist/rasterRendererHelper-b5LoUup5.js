import { D as K, i9 as ue, db as p, e as o, d as l, fg as Q, bs as G, ia as pe, i7 as Se, a as B, aD as z, bW as Ne, dz as me, aE as E, dA as ye, S as N, bD as Be, h9 as we, ib as he, l as ze, ab as xe, V as He, b as Ue, bO as Ze, bM as Re, ic as ke, id as Ee, ie as Pe, ig as Ge, ih as _, bN as X, ii as se, ei as ae, b$ as We, ij as U, gI as Ae, cV as Ve, y as v, r as g, ik as De, w as P, il as le, bY as Je } from "./index-j1oaLRcp.js";
import { u as x } from "./pixelUtils-Kz9o33NO.js";
import { C as F, t as Oe, l as Ke } from "./RasterSymbolizer-6Tuttxmh.js";
import { l as T, c as _e, d as Qe, M as Xe } from "./dataUtils-mSVXnWd6.js";
import "./ClassBreaksDefinition-nlZvFIvT.js";
var $;
const W = new K({ flow_from: "flow-from", flow_to: "flow-to" });
let A = $ = class extends ue(z) {
  constructor(t) {
    super(t), this.density = 0.8, this.color = new p([255, 255, 255, 1]), this.maxPathLength = 200, this.trailWidth = 1.5, this.flowSpeed = 10, this.trailLength = 100, this.smoothing = 0, this.flowRepresentation = "flow-from", this.type = "flow", this.authoringInfo = null, this.legendOptions = null;
  }
  clone() {
    var t, e;
    const { density: r, maxPathLength: a, trailWidth: i, flowSpeed: n, trailLength: c, smoothing: s, flowRepresentation: M } = this, h = this.color.clone(), m = (this.visualVariables || []).map((f) => f.clone()), y = (t = this.authoringInfo) == null ? void 0 : t.clone(), D = (e = this.legendOptions) == null ? void 0 : e.clone();
    return new $({ density: r, color: h, maxPathLength: a, trailWidth: i, flowSpeed: n, trailLength: c, smoothing: s, flowRepresentation: M, visualVariables: m, authoringInfo: y, legendOptions: D });
  }
  getSymbol(t, e) {
  }
  async getSymbolAsync(t, e) {
  }
  getSymbols() {
    return [];
  }
};
o([l({ type: Number, json: { write: !0 } })], A.prototype, "density", void 0), o([l({ type: p, json: { write: { allowNull: !0 } } })], A.prototype, "color", void 0), o([l({ type: Number, cast: Q, json: { write: !0 } })], A.prototype, "maxPathLength", void 0), o([l({ type: Number, cast: Q, json: { write: !0 } })], A.prototype, "trailWidth", void 0), o([l({ type: Number, json: { write: !0 } })], A.prototype, "flowSpeed", void 0), o([l({ type: Number, json: { write: !0 } })], A.prototype, "trailLength", void 0), o([l({ type: Number, cast: Q, json: { write: !1 } })], A.prototype, "smoothing", void 0), o([l({ type: W.apiValues, json: { type: W.jsonValues, read: { reader: W.read }, write: { writer: W.write } } })], A.prototype, "flowRepresentation", void 0), o([G({ flowRenderer: "flow" })], A.prototype, "type", void 0), o([l({ type: pe, json: { write: !0 } })], A.prototype, "authoringInfo", void 0), o([l({ type: Se, json: { write: !0 } })], A.prototype, "legendOptions", void 0), A = $ = o([B("geoscene.renderers.FlowRenderer")], A);
const be = A;
let H = class extends z {
  constructor() {
    super(...arguments), this.value = null, this.label = null, this.color = null;
  }
};
o([l({ type: Number, json: { write: !0 } })], H.prototype, "value", void 0), o([l({ type: String, json: { write: !0 } })], H.prototype, "label", void 0), o([l({ type: p, json: { type: [Ne], write: !0 } })], H.prototype, "color", void 0), H = o([B("geoscene.renderers.support.ColormapInfo")], H);
const Ce = H;
var Z;
let R = Z = class extends z {
  constructor(t) {
    super(t), this.colormapInfos = null, this.type = "raster-colormap";
  }
  static createFromColormap(t, e) {
    if (!t)
      return null;
    const r = t[0].length === 5, a = [...t].sort((i) => i[0][0] - i[1][0]).map((i) => {
      var n;
      return Ce.fromJSON({ value: i[0], color: r ? i.slice(1, 5) : i.slice(1, 4).concat([255]), label: e ? (n = e[i[0]]) != null ? n : "" : i[0] });
    });
    return new Z({ colormapInfos: a });
  }
  static createFromColorramp(t) {
    const e = F(t, 256);
    return Z.createFromColormap(e);
  }
  clone() {
    return new Z({ colormapInfos: this.colormapInfos.map((t) => t.toJSON()) });
  }
  extractColormap() {
    return this.colormapInfos.map(({ value: t, color: e }) => [t, e.r, e.g, e.b, e.a > 1 ? e.a : 255 * e.a & 255]).sort((t, e) => t[0] - e[0]);
  }
};
o([l({ type: [Ce], json: { write: !0 } })], R.prototype, "colormapInfos", void 0), o([G({ rasterColormap: "raster-colormap" })], R.prototype, "type", void 0), R = Z = o([B("geoscene.renderers.RasterColormapRenderer")], R);
const ie = R;
var q;
let C = q = class extends z {
  constructor(t) {
    super(t), this.altitude = 45, this.azimuth = 315, this.colorRamp = null, this.hillshadeType = "multi-directional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.scalingType = "none", this.type = "raster-shaded-relief", this.zFactor = 1;
  }
  readColorRamp(t) {
    return ye(t);
  }
  clone() {
    return new q({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, scalingType: this.scalingType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, colorRamp: N(this.colorRamp) });
  }
};
o([l({ type: Number, json: { write: !0 } })], C.prototype, "altitude", void 0), o([l({ type: Number, json: { write: !0 } })], C.prototype, "azimuth", void 0), o([l({ types: me, json: { write: !0 } })], C.prototype, "colorRamp", void 0), o([E("colorRamp")], C.prototype, "readColorRamp", null), o([l({ type: ["traditional", "multi-directional"], json: { write: !0 } })], C.prototype, "hillshadeType", void 0), o([l({ type: Number, json: { write: !0 } })], C.prototype, "pixelSizePower", void 0), o([l({ type: Number, json: { write: !0 } })], C.prototype, "pixelSizeFactor", void 0), o([l({ type: ["none", "adjusted"], json: { write: !0 } })], C.prototype, "scalingType", void 0), o([G({ rasterShadedRelief: "raster-shaded-relief" })], C.prototype, "type", void 0), o([l({ type: Number, json: { write: !0 } })], C.prototype, "zFactor", void 0), C = q = o([B("geoscene.renderers.RasterShadedReliefRenderer")], C);
const fe = C, O = new K({ none: "none", standardDeviation: "standard-deviation", histogramEqualization: "histogram-equalization", minMax: "min-max", percentClip: "percent-clip", sigmoid: "sigmoid" }), Fe = { 0: "none", 3: "standardDeviation", 4: "histogramEqualization", 5: "minMax", 6: "percentClip", 9: "sigmoid" };
var Y;
let u = Y = class extends z {
  constructor(t) {
    super(t), this.colorRamp = null, this.computeGamma = !1, this.dynamicRangeAdjustment = !1, this.gamma = [], this.maxPercent = null, this.minPercent = null, this.numberOfStandardDeviations = null, this.outputMax = null, this.outputMin = null, this.sigmoidStrengthLevel = null, this.statistics = [], this.histograms = null, this.useGamma = !1, this.stretchType = "none", this.type = "raster-stretch";
  }
  readColorRamp(t) {
    if (t)
      return ye(t);
  }
  writeStatistics(t, e, r) {
    var a;
    (a = t) != null && a.length && (Array.isArray(t[0]) || (t = t.map((i) => [i.min, i.max, i.avg, i.stddev])), e[r] = t);
  }
  readStretchType(t, e) {
    let r = e.stretchType;
    return typeof r == "number" && (r = Fe[r]), O.read(r);
  }
  clone() {
    return new Y({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: N(this.statistics), gamma: N(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, colorRamp: N(this.colorRamp), histograms: N(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment });
  }
};
o([l({ types: me, json: { write: !0 } })], u.prototype, "colorRamp", void 0), o([E("colorRamp")], u.prototype, "readColorRamp", null), o([l({ type: Boolean, json: { write: !0 } })], u.prototype, "computeGamma", void 0), o([l({ type: Boolean, json: { write: { target: "dra" }, read: { source: "dra" } } })], u.prototype, "dynamicRangeAdjustment", void 0), o([l({ type: [Number], json: { write: !0 } })], u.prototype, "gamma", void 0), o([l({ type: Number, json: { write: !0 } })], u.prototype, "maxPercent", void 0), o([l({ type: Number, json: { write: !0 } })], u.prototype, "minPercent", void 0), o([l({ type: Number, json: { write: !0 } })], u.prototype, "numberOfStandardDeviations", void 0), o([l({ type: Number, json: { read: { source: "max" }, write: { target: "max" } } })], u.prototype, "outputMax", void 0), o([l({ type: Number, json: { read: { source: "min" }, write: { target: "min" } } })], u.prototype, "outputMin", void 0), o([l({ type: Number, json: { write: !0 } })], u.prototype, "sigmoidStrengthLevel", void 0), o([l({ json: { type: [[Number]], write: !0 } })], u.prototype, "statistics", void 0), o([l()], u.prototype, "histograms", void 0), o([Be("statistics")], u.prototype, "writeStatistics", null), o([l({ type: Boolean, json: { write: !0 } })], u.prototype, "useGamma", void 0), o([l({ type: O.apiValues, json: { type: O.jsonValues, write: O.write } })], u.prototype, "stretchType", void 0), o([E("stretchType", ["stretchType"])], u.prototype, "readStretchType", null), o([G({ rasterStretch: "raster-stretch" })], u.prototype, "type", void 0), u = Y = o([B("geoscene.renderers.RasterStretchRenderer")], u);
const re = u;
var ee;
const ce = /* @__PURE__ */ new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]), V = new K({ beaufort_ft: "beaufort-ft", beaufort_km: "beaufort-km", beaufort_kn: "beaufort-kn", beaufort_m: "beaufort-m", beaufort_mi: "beaufort-mi", classified_arrow: "classified-arrow", ocean_current_kn: "ocean-current-kn", ocean_current_m: "ocean-current-m", simple_scalar: "simple-scalar", single_arrow: "single-arrow", wind_speed: "wind-barb" }), J = new K({ flow_from: "flow-from", flow_to: "flow-to" });
let w = ee = class extends ue(z) {
  constructor(t) {
    super(t), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }
  readInputUnit(t, e) {
    return ce.has(t) ? T.fromJSON(t) : null;
  }
  readOutputUnit(t, e) {
    return ce.has(t) ? T.fromJSON(t) : null;
  }
  get styleRenderer() {
    const t = this.style, e = this.attributeField, r = this._createStyleRenderer(t);
    return r.field = e, r;
  }
  get sizeVariables() {
    const t = [];
    if (this.visualVariables)
      for (const e of this.visualVariables)
        e.type === "size" && t.push(e);
    if (t.length === 0) {
      const e = new we({ field: "Magnitude", minSize: 0.2 * this.symbolTileSize, maxSize: 0.8 * this.symbolTileSize });
      this.visualVariables ? this.visualVariables.push(e) : this._set("visualVariables", [e]), t.push(e);
    }
    return t;
  }
  get rotationVariables() {
    const t = [];
    if (this.visualVariables)
      for (const e of this.visualVariables)
        e.type === "rotation" && t.push(e);
    if (t.length === 0) {
      const e = new he({ field: "Direction", rotationType: this.rotationType });
      this.visualVariables ? this.visualVariables.push(e) : this._set("visualVariables", [e]), t.push(e);
    }
    return t;
  }
  clone() {
    return new ee({ attributeField: this.attributeField, flowRepresentation: this.flowRepresentation, rotationType: this.rotationType, symbolTileSize: this.symbolTileSize, style: this.style, visualVariables: N(this.visualVariables), inputUnit: this.inputUnit, outputUnit: this.outputUnit });
  }
  async getGraphicsFromPixelData(t, e = !1, r = []) {
    var a;
    const i = new Array(), n = _e(this.inputUnit, this.outputUnit), c = ((a = this.rotationVariables[0]) == null ? void 0 : a.rotationType) || this.rotationType, s = e ? Qe(t.pixelBlock, "vector-uv", c, n) : Xe(t.pixelBlock, "vector-magdir", n);
    if (ze(s))
      return i;
    const M = t.extent, h = s.mask && s.mask.length > 0;
    let m = 0;
    const y = (M.xmax - M.xmin) / s.width, D = (M.ymax - M.ymin) / s.height;
    for (let f = 0; f < s.height; f++)
      for (let d = 0; d < s.width; d++, m++) {
        let I = new xe({ x: M.xmin + d * y + y / 2, y: M.ymax - f * D - D / 2, spatialReference: M.spatialReference });
        I = (await He(I))[0];
        const b = r.some((L) => L.intersects(I));
        if ((!h || s.mask[m]) && !b) {
          const L = { Magnitude: s.pixels[0][m], Direction: s.pixels[1][m] }, j = new Ue({ geometry: { type: "point", x: I.x, y: I.y, spatialReference: M.spatialReference }, attributes: L });
          j.symbol = this._getVisualVariablesAppliedSymbol(j), i.push(j);
        }
      }
    return i;
  }
  getSymbol(t, e) {
  }
  async getSymbolAsync(t, e) {
  }
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    var t;
    return (t = this.styleRenderer) == null ? void 0 : t.classBreakInfos;
  }
  getDefaultSymbol() {
    var t;
    return (t = this.styleRenderer) == null ? void 0 : t.defaultSymbol;
  }
  _getDefaultSymbol(t) {
    return new Ze({ path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z", outline: new Re({ width: 0 }), size: 20, color: t || new p([0, 92, 230]) });
  }
  _getVisualVariablesAppliedSymbol(t) {
    if (!t)
      return;
    let e = this.styleRenderer && this.styleRenderer.getSymbol(t);
    e = e.clone();
    const r = this.sizeVariables, a = this.rotationVariables;
    if (r && r.length && this.sizeVariables.forEach((i) => ke(e, Ee([i], t))), a && a.length) {
      const i = this.flowRepresentation === "flow-to" == (this.style === "ocean-current-kn" || this.style === "ocean-current-m") ? 0 : 180;
      t.attributes.Direction = t.attributes.Direction + i, this.rotationVariables.forEach((n) => Pe(e, Ge(n, t), n.axis));
    }
    return e;
  }
  _createStyleRenderer(t) {
    let e = { defaultSymbol: this._getDefaultSymbol(), classBreakInfos: [] };
    switch (t) {
      case "single-arrow":
        e = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        e = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        e = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        e = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        e = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        e = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        e = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        e = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        e = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        e = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        e = this._createClassifiedArrowRenderer();
    }
    return new _(e);
  }
  _createSingleArrowRenderer() {
    return { defaultSymbol: this._getDefaultSymbol() };
  }
  _createBeaufortKnotsRenderer() {
    const t = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], e = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return { defaultSymbol: this._getDefaultSymbol(new p([214, 47, 39])), classBreakInfos: this._getClassBreaks(t, e) };
  }
  _createBeaufortMeterRenderer() {
    const t = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], e = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return { defaultSymbol: this._getDefaultSymbol(new p([214, 47, 39])), classBreakInfos: this._getClassBreaks(t, e) };
  }
  _createBeaufortFeetRenderer() {
    const t = this._getDefaultSymbol(new p([214, 47, 39]));
    let e = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const r = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a = 3.28084;
    return e = e.map((i) => i * a), { defaultSymbol: t, classBreakInfos: this._getClassBreaks(e, r) };
  }
  _createBeaufortMilesRenderer() {
    const t = this._getDefaultSymbol(new p([214, 47, 39]));
    let e = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const r = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a = 2.23694;
    return e = e.map((i) => i * a), { defaultSymbol: t, classBreakInfos: this._getClassBreaks(e, r) };
  }
  _createBeaufortKilometersRenderer() {
    const t = this._getDefaultSymbol(new p([214, 47, 39]));
    let e = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const r = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a = 3.6;
    return e = e.map((i) => i * a), { defaultSymbol: t, classBreakInfos: this._getClassBreaks(e, r) };
  }
  _createCurrentMeterRenderer() {
    const t = [0, 0.5, 1, 1.5, 2], e = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new p([177, 177, 177])), classBreakInfos: this._getClassBreaks(t, e) };
  }
  _createCurrentKnotsRenderer() {
    const t = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], e = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new p([177, 177, 177])), classBreakInfos: this._getClassBreaks(t, e) };
  }
  _createClassifiedArrowRenderer() {
    var t;
    const e = this._getDefaultSymbol(new p([56, 168, 0]));
    let r = [0, 1e-6, 3.5, 7, 10.5, 14];
    if ((t = this.sizeVariables) != null && t.length) {
      const i = this.sizeVariables[0].minDataValue, n = this.sizeVariables[0].maxDataValue;
      if (i && n) {
        const c = (n - i) / 5;
        r = Array.from(Array(6).keys()).map((s) => i + c * s);
      }
    }
    const a = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return { defaultSymbol: e, classBreakInfos: this._getClassBreaks(r, a) };
  }
  _createSimpleScalarRenderer() {
    return { defaultSymbol: X.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=", height: 20, width: 20, type: "esriPMS", angle: 0 }) };
  }
  _createWindBarbsRenderer() {
    const t = Array.from(Array(31).keys()).map((i) => 5 * i), e = [{ range: "0-5", path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "5-10", path: "M25 0 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "10-15", path: "M25 0 L25 40 L10 45 L25 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "15-20", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "20-25", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "25-30", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "30-35", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "35-40", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "40-45", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "45-50", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "50-55", path: "M25 0 L25 40 L10 40 L25 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "55-60", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "60-65", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "65-70", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "70-75", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "75-80", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "80-85", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "85-90", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "90-95", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "95-100", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "100-105", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "105-110", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "110-115", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "115-120", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "120-125", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "125-130", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "130-135", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "135-140", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "140-145", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "145-150", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }], r = X.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC", height: 20, width: 20, type: "esriPMS", angle: 0 }), a = t.map((i, n) => {
      let c;
      if (n !== t.length - 1)
        if (n === 0)
          c = { minValue: i, maxValue: t[n + 1], symbol: r };
        else {
          const s = X.fromJSON({ type: "esriPMS", imageData: e[n].imageData, contentType: "image/svg+xml", height: 32, width: 32, angle: 0 });
          c = { minValue: i, maxValue: t[n + 1], symbol: s };
        }
      return new se(c);
    });
    return { defaultSymbol: r, classBreakInfos: a };
  }
  _getClassBreaks(t, e) {
    return e.map((r, a) => new se({ minValue: t[a], maxValue: t[a + 1], symbol: this._getDefaultSymbol(new p(r)) }));
  }
};
o([l({ type: String, json: { write: !0 } })], w.prototype, "attributeField", void 0), o([l({ type: J.apiValues, json: { type: J.jsonValues, read: { reader: J.read }, write: { writer: J.write } } })], w.prototype, "flowRepresentation", void 0), o([l({ type: ["geographic", "arithmetic"], json: { write: !0 } })], w.prototype, "rotationType", void 0), o([l({ type: V.apiValues, json: { type: V.jsonValues, read: { reader: V.read }, write: { writer: V.write } } })], w.prototype, "style", void 0), o([l({ json: { write: !0 } })], w.prototype, "symbolTileSize", void 0), o([l({ type: T.apiValues, json: { type: T.jsonValues, write: { writer: T.write } } })], w.prototype, "inputUnit", void 0), o([E("inputUnit")], w.prototype, "readInputUnit", null), o([l({ type: T.apiValues, json: { type: T.jsonValues, read: { reader: T.read }, write: { writer: T.write } } })], w.prototype, "outputUnit", void 0), o([E("outputUnit")], w.prototype, "readOutputUnit", null), o([G({ vectorField: "vector-field" })], w.prototype, "type", void 0), o([l({ type: _ })], w.prototype, "styleRenderer", null), o([l({ type: we })], w.prototype, "sizeVariables", null), o([l({ type: he })], w.prototype, "rotationVariables", null), w = ee = o([B("geoscene.renderers.VectorFieldRenderer")], w);
const ne = w, Me = { key: "type", base: null, typeMap: { "unique-value": ae, "class-breaks": _, "raster-colormap": ie, "raster-stretch": re, "vector-field": ne, "raster-shaded-relief": fe, flow: be } }, de = { ...Me, typeMap: { ...Me.typeMap } };
delete de.typeMap["vector-field"], delete de.typeMap.flow;
const $e = { uniqueValue: ae, classBreaks: _, rasterStretch: re, rasterColormap: ie, vectorField: ne, rasterShadedRelief: fe, flowRenderer: be };
function qe(t) {
  return t && $e[t.type] || null;
}
function bt(t, e) {
  if (!t)
    return null;
  if (t.type === "classBreaks" && t.classificationMethod) {
    const a = t.authoringInfo || { classificationMethod: "" };
    a.classificationMethod = t.classificationMethod, t.authoringInfo = a;
  }
  t.type === "vectorField" && t.visualVariables && !Array.isArray(t.visualVariables) && (t.visualVariables = [t.visualVariables]);
  const r = qe(t);
  if (r) {
    const a = new r();
    return a.read(t, e), a;
  }
  return e && e.messages && t && e.messages.push(new We("renderer:unsupported", "Renderers of type '" + (t.type || "unknown") + "' are not supported", { definition: t, context: e })), null;
}
var te;
let S = te = class extends z {
  constructor(t) {
    super(t), this.variableName = null, this.dimensionName = null, this.values = [], this.isSlice = !1;
  }
  clone() {
    return new te({ variableName: this.variableName, dimensionName: this.dimensionName, values: N(this.values), isSlice: this.isSlice });
  }
};
o([l({ type: String, json: { write: !0 } })], S.prototype, "variableName", void 0), o([l({ type: String, json: { write: !0 } })], S.prototype, "dimensionName", void 0), o([l({ type: U.array(U.oneOf([U.native(Number), U.array(U.native(Number))])), json: { write: !0 } })], S.prototype, "values", void 0), o([l({ type: Boolean, json: { write: !0 } })], S.prototype, "isSlice", void 0), S = te = o([B("geoscene.layers.support.DimensionalDefinition")], S);
const Ct = S, ft = Ae()({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" }), vt = Ae()({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" });
class Tt {
  constructor() {
    this._workerThread = null, this._destroyed = !1;
  }
  async initialize() {
    const e = await Ve("RasterWorker");
    this._destroyed ? e.close() : this._workerThread = e;
  }
  destroy() {
    this._destroyed = !0, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }
  async convertVectorFieldData(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    const a = await this._workerThread.invoke("convertVectorFieldData", { pixelBlock: e.pixelBlock.toJSON(), type: e.dataType }, r);
    return a ? new x(a) : null;
  }
  async decode(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    const a = await this._workerThread.invoke("decode", e, r);
    return a ? new x(a) : null;
  }
  async symbolize(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    const a = { extent: e.extent && e.extent.toJSON(), pixelBlock: g(e.pixelBlock) && e.pixelBlock.toJSON(), simpleStretchParams: e.simpleStretchParams, bandIds: e.bandIds }, i = await this._workerThread.invoke("symbolize", a, r);
    return i ? new x(i) : null;
  }
  async updateSymbolizer(e, r) {
    var a;
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    const i = e == null || (a = e.rendererJSON) == null ? void 0 : a.histograms;
    await Promise.all(this._workerThread.broadcast("updateSymbolizer", { symbolizerJSON: e.toJSON(), histograms: i }, r));
  }
  async stretch(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    if (e == null || !e.pixelBlock)
      return null;
    const a = { srcPixelBlock: e.pixelBlock.toJSON(), stretchParams: e.stretchParams }, i = await this._workerThread.invoke("stretch", a, r);
    return i ? new x(i) : null;
  }
  async split(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    if (e == null || !e.pixelBlock)
      return null;
    const a = { srcPixelBlock: e.pixelBlock.toJSON(), tileSize: e.tileSize, maximumPyramidLevel: e.maximumPyramidLevel }, i = await this._workerThread.invoke("split", a, r);
    return i && i.forEach((n, c) => {
      i.set(c, n ? x.fromJSON(n) : null);
    }), Promise.resolve(i);
  }
  async estimateStatisticsHistograms(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    if (e == null || !e.pixelBlock)
      return null;
    const a = { srcPixelBlock: e.pixelBlock.toJSON() }, i = await this._workerThread.invoke("estimateStatisticsHistograms", a, r);
    return Promise.resolve(i);
  }
  async mosaicAndTransform(e, r) {
    var a;
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    if (e == null || (a = e.srcPixelBlocks) == null || !a.length)
      return { pixelBlock: null };
    const i = { ...e, srcPixelBlocks: e.srcPixelBlocks.map((c) => g(c) ? c.toJSON() : null) }, n = await this._workerThread.invoke("mosaicAndTransform", i, r);
    return { pixelBlock: n.pixelBlock ? new x(n.pixelBlock) : null, localNorthDirections: n.localNorthDirections };
  }
  async createStreamlinesMesh(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    const a = { buffer: e.flowData.data.buffer, width: e.flowData.width, height: e.flowData.height }, i = e.rendererSettings, n = await this._workerThread.invoke("createStreamlinesMesh", { flowData: a, rendererSettings: i }, { ...r, transferList: [a.buffer] });
    return { vertexData: new Float32Array(n.vertexBuffer), indexData: new Uint32Array(n.indexBuffer) };
  }
  getProjectionOffsetGrid(e, r) {
    if (!this._workerThread)
      throw new v("raster-jobhandler:no-connection", "no available worker connection");
    const a = g(e.datumTransformation) ? e.datumTransformation.steps.map((c) => ({ wkid: c.wkid, wkt: c.wkt, isInverse: c.isInverse })) : null, i = g(e.rasterTransform) ? e.rasterTransform.toJSON() : null, n = { projectedExtent: e.projectedExtent.toJSON(), srcBufferExtent: e.srcBufferExtent.toJSON(), pixelSize: e.pixelSize, hasWrapAround: e.hasWrapAround, spacing: e.spacing, datumTransformationSteps: a, rasterTransform: i, isAdaptive: e.isAdaptive, includeGCSGrid: e.includeGCSGrid };
    return this._workerThread.invoke("getProjectionOffsetGrid", n, r);
  }
}
const Ye = 0.25, et = De.fromJSON({ type: "multipart", colorRamps: [{ fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }), ge = De.fromJSON(Oe[0]), ve = /* @__PURE__ */ new Set(["scientific", "standard-time", "vector-uv", "vector-magdir", "vector-u", "vector-v", "vector-magnitude", "vector-direction"]);
function Lt(t, e) {
  const { attributeTable: r, colormap: a } = t;
  if (oe(t)) {
    const i = ut(t);
    if (g(i))
      return i;
  }
  if (g(a)) {
    const i = lt(t);
    if (g(i))
      return i;
  }
  if (g(r)) {
    const i = ot(t);
    if (g(i))
      return i;
  }
  return tt(t, e);
}
function jt(t) {
  const e = ["raster-stretch"];
  return je(t) && e.push("raster-colormap"), Le(t) && e.push("unique-value"), Mt(t) && e.push("class-breaks"), ct(t) && e.push("raster-shaded-relief"), oe(t) && e.push("vector-field"), gt(t) && e.push("flow"), e;
}
function St(t, e, r) {
  const a = ["nearest", "bilinear", "cubic", "majority"].find((i) => i === (r == null ? void 0 : r.toLowerCase()));
  return e === "Map" ? a ?? "bilinear" : t.dataType === "standard-time" ? a ?? "nearest" : t.dataType === "thematic" || t.attributeTable || t.colormap ? a === "nearest" || a === "majority" ? a : "nearest" : a ?? "bilinear";
}
function tt(t, e) {
  var r, a, i, n;
  t = at(t, e == null ? void 0 : e.variableName);
  const { bandCount: c } = t;
  let { bandIds: s, stretchType: M } = e || {};
  (r = s) != null && r.some((b) => b >= c) && (s = null);
  let h = P(t.statistics), m = P(t.histograms);
  var y;
  c > 1 ? (s = (y = s) != null && y.length ? s : it(t), h = h == null ? null : s.map((b) => h[b]), m = m == null ? null : s.map((b) => m[b])) : s = [0], M == null && (M = nt(t));
  let D = !1;
  switch (M) {
    case "none":
      D = !1;
      break;
    case "percent-clip":
      D = !((a = m) != null && a.length);
      break;
    default:
      D = !((i = h) != null && i.length);
  }
  const { dataType: f } = t, d = ((n = s) == null ? void 0 : n.length) === 1 && ve.has(f) ? et : null, I = new re({ stretchType: M, dynamicRangeAdjustment: D, colorRamp: d, outputMin: 0, outputMax: 255, gamma: s.length === 1 ? [1] : [1, 1, 1], useGamma: !1 });
  return M === "percent-clip" ? I.maxPercent = I.minPercent = Ye : M === "standard-deviation" && (I.numberOfStandardDeviations = 2), !D && (g(t.multidimensionalInfo) || e != null && e.includeStatisticsInStretch) && (M === "percent-clip" ? I.histograms = m : M !== "min-max" && M !== "standard-deviation" || (I.statistics = h)), I;
}
function at(t, e) {
  if (e == null)
    return t;
  let r = P(t.statistics), a = P(t.histograms);
  const { multidimensionalInfo: i } = t;
  if (e && g(i)) {
    const { statistics: n, histograms: c } = i.variables.find((s) => s.name === e);
    n != null && n.length && (r = n), c != null && c.length && (a = c);
  }
  return Ke.fromJSON({ ...t.toJSON(), statistics: r, histograms: a });
}
function it(t) {
  const e = t.bandCount;
  if (e === 1)
    return null;
  if (e === 2)
    return [0];
  const r = t.keyProperties && t.keyProperties.BandProperties;
  let a;
  if (r && r.length === e) {
    const { red: i, green: n, blue: c, nir: s } = rt(r);
    i != null && n != null && c != null ? a = [i, n, c] : s != null && i != null && n != null && (a = [s, i, n]);
  }
  return !a && e >= 3 && (a = [0, 1, 2]), a;
}
function rt(t) {
  const e = {};
  for (let a = 0; a < t.length; a++) {
    var r;
    const i = t[a], n = (r = i.BandName) == null ? void 0 : r.toLowerCase();
    if (n === "red")
      e.red = a;
    else if (n === "green")
      e.green = a;
    else if (n === "blue")
      e.blue = a;
    else if (n === "nearinfrared" || n === "nearinfrared_1" || n === "nir")
      e.nir = a;
    else if (i.WavelengthMax && i.WavelengthMin) {
      const c = i.WavelengthMin, s = i.WavelengthMax;
      e.blue == null && c >= 410 && c <= 480 && s >= 480 && s <= 540 ? e.blue = a : e.green == null && c >= 490 && c <= 560 && s >= 560 && s <= 610 ? e.green = a : e.red == null && c >= 595 && c <= 670 && s >= 660 && s <= 730 ? e.red = a : e.nir == null && c >= 700 && c <= 860 && s >= 800 && s <= 950 && (e.nir = a);
    }
  }
  return e;
}
function nt(t) {
  let e = "percent-clip";
  const { pixelType: r, dataType: a, histograms: i, statistics: n } = t;
  return r !== "u8" || a !== "processed" && g(i) && g(n) ? r === "u8" || a === "elevation" || ve.has(a) ? e = "min-max" : g(i) ? e = "percent-clip" : g(n) && (e = "min-max", e = "min-max") : e = "none", e;
}
function ot(t, e, r, a) {
  if (!Le(t, e))
    return null;
  const { attributeTable: i, statistics: n } = t, c = Te(i, e), s = k(i, "red"), M = k(i, "green"), h = k(i, "blue"), m = new pe(), y = [], D = /* @__PURE__ */ new Set(), f = !!(s && M && h);
  if (g(i))
    i.features.forEach((d) => {
      const I = d.attributes[c.name];
      if (!D.has(d.attributes[c.name]) && I != null) {
        D.add(I);
        const b = f && (s.type === "single" || s.type === "double") && (M.type === "single" || M.type === "double") && (h.type === "single" || h.type === "double") && !i.features.some((j) => j.attributes[s.name] > 1 || j.attributes[M.name] > 1 || j.attributes[h.name] > 1), L = b ? 255 : 1;
        y.push(new le({ value: d.attributes[c.name], label: d.attributes[c.name] + "", symbol: { type: "simple-fill", style: "solid", outline: null, color: new p(f ? [d.attributes[s.name] * L, d.attributes[M.name] * L, d.attributes[h.name] * L, 1] : [0, 0, 0, 0]) } }));
      }
    });
  else if (n != null && n[0])
    for (let d = n[0].min; d <= n[0].max; d++)
      y.push(new le({ value: d, label: d.toString(), symbol: { type: "simple-fill", style: "solid", outline: null, color: new p([0, 0, 0, 0]) } }));
  if (y.sort((d, I) => d.value && typeof d.value.valueOf() == "string" ? 0 : d.value > I.value ? 1 : -1), !f) {
    const d = F(ge, y.length);
    y.forEach((I, b) => I.symbol.color = new p(d[b].slice(1, 4))), m.colorRamp = ge;
  }
  if (r || a) {
    const d = r || F(a, y.length).map((I) => I.slice(1));
    y.forEach((I, b) => I.symbol.color = new p(d[b])), m.colorRamp = a;
  }
  return new ae({ field: c.name, uniqueValueInfos: y, authoringInfo: m });
}
function Te(t, e, r) {
  let a;
  return g(t) ? (a = e ? t.fields.find((i) => e.toLowerCase() === i.name.toLowerCase()) : st(t.fields), a || (r || (a = t.fields.find((i) => i.type === "string")), a || (a = k(t, "value")))) : a = new Je({ name: "value" }), a;
}
function st(t) {
  let e;
  for (let r = 0; r < t.length; r++) {
    const a = t[r].name.toLowerCase();
    if (t[r].type === "string") {
      if (a.startsWith("class")) {
        e = t[r];
        break;
      }
      e == null && (a.endsWith("name") || a.endsWith("type")) && (e = t[r]);
    }
  }
  return e;
}
function k(t, e) {
  return g(t) ? t.fields.find((r) => r.name.toLowerCase() === e) : null;
}
function Le(t, e) {
  const { attributeTable: r, bandCount: a } = t;
  return !g(r) && dt(t) ? !0 : !(!g(r) || a > 1 || e && r.fields.find((i) => i.name.toLowerCase() === e.toLowerCase()) == null);
}
function je(t) {
  const { bandCount: e, colormap: r } = t;
  return g(r) && r.length && e === 1;
}
function lt(t) {
  if (!je(t))
    return null;
  let e;
  const { attributeTable: r, colormap: a } = t;
  if (g(r)) {
    const i = k(r, "value"), n = Te(r, null, !0);
    n.type === "string" && (e = {}, r.features.forEach((c) => {
      const s = c.attributes;
      e[s[i.name]] = n ? s[n.name] : s[i.name];
    }));
  }
  return ie.createFromColormap(P(a), e);
}
function ct(t) {
  return t.dataType === "elevation";
}
function Mt(t) {
  const { attributeTable: e, bandCount: r } = t;
  return r === 1 && (g(e) || g(t.histograms));
}
function dt(t) {
  var e, r, a;
  return ["u8", "s8"].indexOf(t.pixelType) > -1 && ((e = t.statistics) == null || (r = e[0]) == null ? void 0 : r.min) != null && ((a = t.statistics[0]) == null ? void 0 : a.max) != null && t.bandCount === 1;
}
function oe(t) {
  const { dataType: e } = t;
  return e === "vector-uv" || e === "vector-magdir";
}
function gt(t) {
  const { dataType: e } = t;
  return e === "vector-uv" || e === "vector-magdir";
}
const It = /* @__PURE__ */ new Map([["m/s", "meter-per-second"], ["km/h", "kilometer-per-hour"], ["knots", "knots"], ["ft/s", "feet-per-second"], ["mph", "mile-per-hour"]]);
function ut(t) {
  if (!oe(t))
    return null;
  let e;
  if (g(t.statistics) && t.statistics.length && (t.dataType === "vector-magdir" || t.dataType === "vector-uv")) {
    const { minMagnitude: i, maxMagnitude: n } = pt(t.dataType, t.statistics);
    e = [{ type: "size", field: "Magnitude", minSize: 10, maxSize: 40, minDataValue: i, maxDataValue: n }];
  }
  const r = g(t.multidimensionalInfo) ? It.get(t.multidimensionalInfo.variables[0].unit) : null, a = new ne({ visualVariables: e, inputUnit: r, rotationType: "geographic" });
  return a.visualVariables = [...a.sizeVariables, ...a.rotationVariables], a;
}
function Ie(t) {
  var e;
  return { color: (e = t.symbolLayers[0].material) == null ? void 0 : e.color, type: "esriSFS", style: "esriSFSSolid" };
}
function Nt(t) {
  if (t.type === "uniqueValue") {
    var e;
    const a = t.uniqueValueInfos, i = a[0].symbol;
    return i != null && (e = i.symbolLayers) != null && e.length && (t.uniqueValueInfos = a.map((n) => ({ value: n.value, label: n.label, symbol: n.symbol ? Ie(n.symbol) : null }))), t;
  }
  if (t.type === "classBreaks") {
    var r;
    const a = t.classBreakInfos, i = a[0].symbol;
    return i != null && (r = i.symbolLayers) != null && r.length && (t.classBreakInfos = a.map((n) => ({ classMinValue: n.classMinValue, classMaxValue: n.classMaxValue, label: n.label, symbol: n.symbol ? Ie(n.symbol) : null }))), t;
  }
  return t;
}
function pt(t, e) {
  let r, a;
  if (t === "vector-magdir")
    r = e[0].min, a = e[0].max;
  else {
    const i = e[0].min, n = e[0].max, c = e[1].min, s = e[1].max;
    r = 0, a = Math.max(Math.abs(i), Math.abs(c), Math.abs(n), Math.abs(s));
  }
  return { minMagnitude: r, maxMagnitude: a };
}
export {
  it as L,
  St as V,
  O as a,
  vt as b,
  Nt as e,
  de as i,
  Lt as j,
  jt as k,
  Me as l,
  Tt as n,
  ft as o,
  Ct as p,
  bt as u
};

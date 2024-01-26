import { e as a, d as l, aE as C, bD as D, bs as ct, a as M, aD as E, S as V, h9 as mt, gI as Ee, bW as ce, c7 as dt, ab as Q, iz as L, m as Z, x as De, r as R, q as se, iP as ge, eT as ve, C as I, V as ze, iZ as et, a4 as tt, a1 as Le, aX as qe, ae as ht, s as yt, bY as te, M as de, dW as ft, bK as gt, aT as vt, R as Rt, l as ie, y as $, fa as re, i_ as bt, w as wt, dI as Ie, ir as St, it as xt, is as It, ac as Ft, b as Nt, i$ as Tt, j0 as Dt, bt as Pt, bQ as Ct, bF as Ot, bu as _t, bv as Vt, bw as jt, bT as Mt, bR as At, bz as $t, bG as Jt, dQ as Et, bV as zt, bJ as Lt, dX as qt, B as Ut, bE as kt } from "./index-j1oaLRcp.js";
import { a as Ht, p as Pe, o as Y, b as ye, l as Qt, i as Gt, u as Bt, k as Wt, L as Kt, j as Xt, e as Zt, n as Yt } from "./rasterRendererHelper-b5LoUup5.js";
import { m as it, C as rt, f as ei, u as ti, l as Fe, T as ii, S as Qe, O as ri } from "./RasterSymbolizer-6Tuttxmh.js";
import { u as ni } from "./pixelUtils-Kz9o33NO.js";
import { h as si, f as ai } from "./dataUtils-mSVXnWd6.js";
import "vue";
import "./ClassBreaksDefinition-nlZvFIvT.js";
import "./colorUtils-tSH3jtgH.js";
var Ce;
const Re = /* @__PURE__ */ new Set(["raster", "raster2", "dem", "fillraster"]), be = /* @__PURE__ */ new Set(["rasters"]), Ge = (n) => n && n.rasterFunction ? J.fromJSON(n) : n, Ne = (n) => n && n instanceof J ? n.toJSON() : n, Oe = (n) => (n == null ? void 0 : n.functionName) && !n.declaredClass, Be = (n) => Oe(n) ? new J(n) : n, oi = (n) => {
  if (n == null)
    return null;
  n = V(n);
  const i = {};
  for (const e of Object.keys(n))
    Re.has(e.toLowerCase()) ? i[e] = Ge(n[e]) : be.has(e.toLowerCase()) && Array.isArray(n[e]) ? i[e] = n[e].map(Ge) : i[e] = n[e];
  return i;
};
let J = Ce = class extends E {
  constructor(n) {
    super(n), this.functionName = null, this.outputPixelType = "unknown", this.variableName = null, this.rasterFunctionDefinition = null;
  }
  set functionArguments(n) {
    if (n) {
      const i = Object.keys(n);
      if (i.some((e) => Re.has(e.toLowerCase()) && Oe(n[e])) || i.some((e) => be.has(e.toLowerCase()) && Array.isArray(n[e]) && n[e].some((t) => Oe(t)))) {
        n = V(n);
        for (const e of i)
          Re.has(e.toLowerCase()) ? n[e] = Be(n[e]) : be.has(e.toLowerCase()) && Array.isArray(n[e]) && (n[e] = n[e].map((t) => Be(t)));
      }
    }
    this._set("functionArguments", n);
  }
  readFunctionArguments(n) {
    return oi(n);
  }
  writeFunctionArguments(n, i, e) {
    const t = {};
    for (const r of Object.keys(n))
      Re.has(r.toLowerCase()) ? t[r] = Ne(n[r]) : be.has(r.toLowerCase()) && Array.isArray(n[r]) ? t[r] = n[r].map(Ne) : t[r] = Ne(n[r]);
    i[e] = t;
  }
  readFunctionName(n, i) {
    const e = i.rasterFunctionInfos;
    return i.name || (e && e.length && e[0].name !== "None" ? e[0].name : i.rasterFunctionDefinition ? i.rasterFunctionDefinition.name : i.rasterFunction);
  }
  clone() {
    return new Ce({ functionName: this.functionName, functionArguments: V(this.functionArguments), outputPixelType: this.outputPixelType, variableName: this.variableName, rasterFunctionDefinition: V(this.rasterFunctionDefinition) });
  }
};
a([l({ json: { type: Object, name: "rasterFunctionArguments" } })], J.prototype, "functionArguments", null), a([C("functionArguments")], J.prototype, "readFunctionArguments", null), a([D("functionArguments")], J.prototype, "writeFunctionArguments", null), a([l({ json: { type: String, write: { target: "rasterFunction" } } })], J.prototype, "functionName", void 0), a([C("functionName", ["rasterFunction", "rasterFunctionInfos", "rasterFunctionDefinition"])], J.prototype, "readFunctionName", null), a([ct({ C128: "c128", C64: "c64", F32: "f32", F64: "f64", S16: "s16", S32: "s32", S8: "s8", U1: "u1", U16: "u16", U2: "u2", U32: "u32", U4: "u4", U8: "u8", UNKNOWN: "unknown" }, { ignoreUnknown: !1 }), l({ json: { default: "unknown" } })], J.prototype, "outputPixelType", void 0), a([l({ type: String, json: { read: !0, write: !0 } })], J.prototype, "variableName", void 0), a([l({ type: Object, json: { name: "rasterFunctionDefinition" } })], J.prototype, "rasterFunctionDefinition", void 0), J = Ce = a([M("geoscene.layers.support.RasterFunction")], J);
const b = J, li = { StretchFunction: { arguments: { ComputeGamma: { isDataset: !1, isPublic: !1, name: "ComputeGamma", type: "RasterFunctionVariable", value: !1 }, DRA: { isDataset: !1, isPublic: !1, name: "DRA", type: "RasterFunctionVariable", value: !1 }, EstimateStatsHistogram: { isDataset: !1, isPublic: !1, name: "EstimateStatsHistogram", type: "RasterFunctionVariable", value: !1 }, Gamma: { displayName: "Gamma", isDataset: !1, isPublic: !1, name: "Gamma", type: "RasterFunctionVariable" }, Histograms: { isDataset: !1, isPublic: !1, name: "Histograms", type: "RasterFunctionVariable" }, Max: { isDataset: !1, isPublic: !1, name: "Max", type: "RasterFunctionVariable", value: 255 }, MaxPercent: { isDataset: !1, isPublic: !1, name: "MaxPercent", type: "RasterFunctionVariable", value: 0.5 }, Min: { isDataset: !1, isPublic: !1, name: "Min", type: "RasterFunctionVariable", value: 0 }, MinPercent: { isDataset: !1, isPublic: !1, name: "MinPercent", type: "RasterFunctionVariable", value: 0.25 }, NumberOfStandardDeviations: { isDataset: !1, isPublic: !1, name: "NumberOfStandardDeviation", type: "RasterFunctionVariable", value: 2 }, Raster: { isDataset: !0, isPublic: !1, name: "Raster", type: "RasterFunctionVariable" }, SigmoidStrengthLevel: { isDataset: !1, isPublic: !1, name: "SigmoidStrengthLevel", type: "RasterFunctionVariable", value: 2 }, Statistics: { isDataset: !1, isPublic: !1, name: "Statistics", type: "RasterFunctionVariable" }, StretchType: { isDataset: !1, isPublic: !1, name: "StretchType", type: "RasterFunctionVariable", value: 0 }, type: "StretchFunctionArguments", UseGamma: { isDataset: !1, isPublic: !1, name: "UseGamma", type: "RasterFunctionVariable", value: !1 } }, description: "Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.", function: { description: "Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.", name: "Stretch", pixelType: "UNKNOWN", type: "StretchFunction" }, functionType: 0, name: "Stretch", thumbnail: "" }, RemapFunction: { name: "Remap", description: "Changes pixel values by assigning new values to ranges of pixel values or using an external table.", function: { type: "RemapFunction", pixelType: "UNKNOWN", name: "Remap", description: "Changes pixel values by assigning new values to ranges of pixel values or using an external table." }, arguments: { Raster: { name: "Raster", isPublic: !1, isDataset: !0, type: "RasterFunctionVariable" }, UseTable: { name: "UseTable", isPublic: !1, isDataset: !1, value: !1, type: "RasterFunctionVariable" }, InputRanges: { name: "InputRanges", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable", displayName: "Input Ranges" }, OutputValues: { name: "OutputValues", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable", displayName: "Output Values" }, NoDataRanges: { name: "NoDataRanges", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable", displayName: "NoData Ranges" }, Table: { name: "Table", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, InputField: { name: "InputField", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, OutputField: { name: "OutputField", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, InputMaxField: { name: "InputMaxField", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, RemapTableType: { name: "RemapTableType", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, AllowUnmatched: { name: "AllowUnmatched", isPublic: !1, isDataset: !1, value: !0, type: "RasterFunctionVariable" }, type: "RemapFunctionArguments" }, functionType: 0, thumbnail: "" }, ColormapFunction: { name: "Colormap", description: "Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.", function: { type: "ColormapFunction", pixelType: "UNKNOWN", name: "Colormap", description: "Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp." }, arguments: { Raster: { name: "Raster", isPublic: !1, isDataset: !0, type: "RasterFunctionVariable" }, ColorSchemeType: { name: "ColorSchemeType", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, Colormap: { name: "Colormap", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, ColormapName: { name: "ColormapName", isPublic: !1, isDataset: !1, value: "Gray", type: "RasterFunctionVariable" }, ColorRamp: { name: "ColorRamp", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, type: "ColormapFunctionArguments" }, functionType: 0, thumbnail: "" }, ShadedReliefFunction: { name: "Shaded Relief", description: "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.", function: { type: "ShadedReliefFunction", pixelType: "UNKNOWN", name: "Shaded Relief", description: "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image." }, arguments: { Raster: { name: "Raster", isPublic: !1, isDataset: !0, type: "RasterFunctionVariable" }, ColorSchemeType: { name: "ColorSchemeType", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, ColorRamp: { name: "ColorRamp", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, HillshadeType: { name: "HillshadeType", isPublic: !1, isDataset: !1, value: 0, type: "RasterFunctionVariable" }, Colormap: { name: "Colormap", isPublic: !1, isDataset: !1, type: "RasterFunctionVariable" }, Azimuth: { name: "Azimuth", isPublic: !1, isDataset: !1, value: 315, type: "RasterFunctionVariable" }, Altitude: { name: "Altitude", isPublic: !1, isDataset: !1, value: 45, type: "RasterFunctionVariable" }, SlopeType: { name: "SlopeType", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, ZFactor: { name: "ZFactor", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, PSPower: { name: "PSPower", isPublic: !1, isDataset: !1, value: 0.664, type: "RasterFunctionVariable" }, PSZFactor: { name: "PSZFactor", isPublic: !1, isDataset: !1, value: 0.024, type: "RasterFunctionVariable" }, RemoveEdgeEffect: { name: "RemoveEdgeEffect", isPublic: !1, isDataset: !1, value: !1, type: "RasterFunctionVariable" }, type: "ShadedReliefFunctionArguments" }, functionType: 0, thumbnail: "" }, HillshadeFunction: { name: "Hillshade", description: "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image", function: { type: "HillshadeFunction", pixelType: "UNKNOWN", name: "Hillshade", description: "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image" }, arguments: { DEM: { name: "DEM", isPublic: !1, isDataset: !0, type: "RasterFunctionVariable" }, HillshadeType: { name: "HillshadeType", isPublic: !1, isDataset: !1, value: 0, type: "RasterFunctionVariable" }, Azimuth: { name: "Azimuth", isPublic: !1, isDataset: !1, value: 315, type: "RasterFunctionVariable" }, Altitude: { name: "Altitude", isPublic: !1, isDataset: !1, value: 45, type: "RasterFunctionVariable" }, SlopeType: { name: "SlopeType", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, ZFactor: { name: "ZFactor", isPublic: !1, isDataset: !1, value: 1, type: "RasterFunctionVariable" }, PSPower: { name: "PSPower", isPublic: !1, isDataset: !1, value: 0.664, type: "RasterFunctionVariable" }, PSZFactor: { name: "PSZFactor", isPublic: !1, isDataset: !1, value: 0.024, type: "RasterFunctionVariable" }, RemoveEdgeEffect: { name: "RemoveEdgeEffect", isPublic: !1, isDataset: !1, value: !1, type: "RasterFunctionVariable" }, type: "HillshadeFunctionArguments" }, functionType: 0, thumbnail: "" }, ResampleFunction: { name: "Resample", description: "Changes the cell size of a raster.", function: { type: "ResampleFunction", pixelType: "UNKNOWN", name: "Resample", description: "Changes the cell size of a raster." }, arguments: { Raster: { name: "Raster", isPublic: !1, isDataset: !0, type: "RasterFunctionVariable" }, ResamplingType: { name: "ResamplingType", isPublic: !1, isDataset: !1, value: 0, type: "RasterFunctionVariable" }, InputCellSize: { name: "InputCellsize", isPublic: !1, isDataset: !1, value: { x: 0, y: 0 }, type: "RasterFunctionVariable" }, OutputCellSize: { name: "OutputCellsize", isPublic: !1, isDataset: !1, value: { x: 0, y: 0 }, type: "RasterFunctionVariable" }, type: "ResampleFunctionArguments" }, functionType: 0, thumbnail: "" } }, ui = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767] }, pi = { simple_scalar: "Simple Scalar", wind_barb: "Wind Barb", single_arrow: "Single Arrow", beaufort_kn: "Beaufort Wind (Knots)", beaufort_m: "Beaufort Wind (MetersPerSecond)", ocean_current_m: "Ocean Current (MetersPerSecond)", ocean_current_kn: "Ocean Current (Knots)" }, ci = /* @__PURE__ */ new Set(["raster-stretch", "unique-value", "class-breaks", "raster-shaded-relief", "vector-field", "raster-colormap"]);
function nt(n) {
  return ci.has(n.type);
}
function We(n, i) {
  if (!n || !i)
    return V(n || i);
  const e = V(n);
  if (i.rasterFunctionDefinition) {
    const t = i.rasterFunctionDefinition;
    (t.thumbnail || t.thumbnailEx) && (t.thumbnail = t.thumbnailEx = null), st(e.rasterFunctionDefinition.arguments, i);
  } else
    i.functionName.toLowerCase() !== "none" && (at(e.functionArguments).Raster = i);
  return e;
}
function st(n, i) {
  for (const e in n)
    e.toLowerCase() === "raster" && (n[e].type === "RasterFunctionVariable" ? (n[e] = i.rasterFunctionDefinition, n[e].type = "RasterFunctionTemplate") : n[e].type === "RasterFunctionTemplate" && st(n[e].arguments, i));
}
function G(n) {
  const i = V(li[n.functionName + "Function"]), e = n.functionArguments;
  for (const t in e)
    t.toLowerCase() === "raster" ? (i.arguments[t] = G(e[t]), i.arguments[t].type = "RasterFunctionTemplate") : t.toLowerCase() === "colormap" ? (i.arguments[t].value = bi(e[t]), i.arguments.ColorSchemeType.value = 0) : i.arguments[t].value = e[t];
  return i;
}
function mi(n, i) {
  switch (i = i || {}, n.type) {
    case "raster-stretch":
      return yi(n, i);
    case "class-breaks":
      return fi(n, i);
    case "unique-value":
      return gi(n, i);
    case "raster-colormap":
      return vi(n, i);
    case "vector-field":
      return di(n, i);
    case "raster-shaded-relief":
      return hi(n, i);
    case "flow":
      throw new Error("Unsupported rendering rule.");
  }
}
function at(n) {
  const i = n.Raster;
  return i && i.declaredClass === "geoscene.layers.support.RasterFunction" ? at(i.functionArguments) : n;
}
const he = { none: 0, standardDeviation: 3, histogramEqualization: 4, minMax: 5, percentClip: 6, sigmoid: 9 };
function di(n, i) {
  const e = new b();
  e.functionName = "VectorFieldRenderer";
  const { dataType: t, bandProperties: r } = i, s = t === "vector-uv";
  let o, u;
  r && r.length === 2 && (o = r.map((v) => v.BandName.toLowerCase()).indexOf("magnitude"), u = r.map((v) => v.BandName.toLowerCase()).indexOf("direction")), o !== -1 && o !== null || (o = 0, u = 1);
  const p = n.rotationType === "arithmetic" ? 1 : 2, c = n.flowRepresentation === "flow-from" ? 0 : 1, m = n.visualVariables ? n.visualVariables.find((v) => v.field === "Magnitude") : new mt(), y = { magnitudeBandID: o, directionBandID: u, isUVComponents: s, referenceSystem: p, massFlowAngleRepresentation: c, symbolTileSize: 50, symbolTileSizeUnits: 100, calculationMethod: "Vector Average", symbologyName: pi[n.style.toLowerCase().replace("-", "_")], minimumMagnitude: m.minDataValue, maximumMagnitude: m.maxDataValue, minimumSymbolSize: m.minSize, maximumSymbolSize: m.maxSize };
  return e.functionArguments = y, i.convertToRFT ? new b({ rasterFunctionDefinition: G(e) }) : e;
}
function hi(n, i) {
  const e = i.convertToRFT;
  if (i.dataType !== "elevation")
    return new b();
  const t = new b();
  t.functionName = "Hillshade";
  const r = n.hillshadeType === "traditional" ? 0 : 1, s = n.scalingType === "none" ? 1 : 3, o = { HillshadeType: r, SlopeType: s, ZFactor: n.zFactor };
  return r === 0 && (o.Azimuth = n.azimuth, o.Altitude = n.altitude), s === 3 && (o.PSPower = n.pixelSizePower, o.PSZFactor = n.pixelSizeFactor), t.functionArguments = o, t.variableName = "Raster", n.colorRamp && (t.functionName = "ShadedRelief", e ? o.ColorRamp = it(n.colorRamp) : o.Colormap = rt(n.colorRamp, 256)), e ? new b({ rasterFunctionDefinition: G(t) }) : t;
}
function yi(n, i) {
  const e = i.convertToRFT, t = new b();
  t.functionName = "Stretch";
  const r = he[Ht.toJSON(n.stretchType)], s = "u8", o = { StretchType: r, Statistics: Ri(n.statistics), DRA: n.dynamicRangeAdjustment, UseGamma: n.useGamma, Gamma: n.gamma, ComputeGamma: n.computeGamma };
  if (n.outputMin != null && (o.Min = n.outputMin), n.outputMax != null && (o.Max = n.outputMax), r === he.standardDeviation ? (o.NumberOfStandardDeviations = n.numberOfStandardDeviations, t.outputPixelType = s) : r === he.percentClip ? (o.MinPercent = n.minPercent, o.MaxPercent = n.maxPercent, t.outputPixelType = s) : r === he.minMax ? t.outputPixelType = s : r === he.sigmoid && (o.SigmoidStrengthLevel = n.sigmoidStrengthLevel), t.functionArguments = o, t.variableName = "Raster", n.colorRamp) {
    const u = n.colorRamp, p = new b();
    if (e)
      p.functionArguments = { ColorRamp: it(u) };
    else {
      const c = ei(u);
      c ? p.functionArguments = { colorRamp: c } : !i.convertColorRampToColormap || u.type !== "algorithmic" && u.type !== "multipart" ? p.functionArguments = { colorRamp: n.colorRamp.toJSON() } : p.functionArguments = { Colormap: rt(u, 256) };
    }
    return p.variableName = "Raster", p.functionName = "Colormap", p.functionArguments.Raster = t, e ? new b({ rasterFunctionDefinition: G(p) }) : p;
  }
  return e ? new b({ rasterFunctionDefinition: G(t) }) : t;
}
function fi(n, i) {
  const e = [], t = [], r = [], s = [], { pixelType: u, rasterAttributeTable: p } = i, c = p && p.features, m = ot(p);
  if (c && Array.isArray(c) && n.classBreakInfos) {
    n.classBreakInfos.forEach((h, x) => {
      const w = h.symbol.color;
      let P;
      w.a && c.forEach((F) => {
        P = F.attributes[n.field], (P >= h.minValue && P < h.maxValue || x === n.classBreakInfos.length - 1 && P >= h.minValue) && s.push([F.attributes[m], w.r, w.g, w.b]);
      });
    });
    const g = u ? xe(s, u) : s, d = new b();
    return d.functionName = "Colormap", d.functionArguments = {}, d.functionArguments.Colormap = g, d.variableName = "Raster", i.convertToRFT ? new b({ rasterFunctionDefinition: G(d) }) : d;
  }
  n.classBreakInfos.forEach((g, d) => {
    const h = g.symbol && g.symbol.color;
    h.a ? (d === 0 ? e.push(g.minValue, g.maxValue + 1e-6) : e.push(g.minValue + 1e-6, g.maxValue + 1e-6), t.push(d), s.push([d, h.r, h.g, h.b])) : r.push(g.minValue, g.maxValue);
  });
  const y = u ? xe(s, u) : s, v = new b();
  v.functionName = "Remap", v.functionArguments = { InputRanges: e, OutputValues: t, NoDataRanges: r }, v.variableName = "Raster";
  const f = new b();
  return f.functionName = "Colormap", f.functionArguments = { Colormap: y, Raster: v }, i.convertToRFT ? new b({ rasterFunctionDefinition: G(f) }) : f;
}
function xe(n, i) {
  const e = ui[String(i).toLowerCase()];
  return e && n.push([Math.floor(e[0] - 1), 0, 0, 0], [Math.ceil(e[1] + 1), 0, 0, 0]), n;
}
function ot(n) {
  if (!n)
    return;
  const { fields: i } = n, e = i && i.find((t) => t && t.name && t.name.toLowerCase() === "value");
  return e && e.name;
}
function gi(n, i) {
  var e, t;
  const r = [], { pixelType: s, rasterAttributeTable: o } = i, u = o && o.features, p = ot(o), c = (e = n.defaultSymbol) == null || (t = e.color) == null ? void 0 : t.toRgb(), m = n.uniqueValueInfos;
  if (m)
    if (u) {
      const f = /* @__PURE__ */ new Map();
      m.forEach((d) => {
        var h;
        const x = d.value, w = (h = d.symbol.color) == null ? void 0 : h.toRgb();
        x != null && w && f.set(String(x), w);
      });
      const g = n.field;
      u.forEach(({ attributes: d }) => {
        const h = String(d[g]), x = d[p];
        if (f.has(h)) {
          const w = f.get(h);
          r.push([x, ...w]);
        } else
          c && r.push([x, ...c]);
      });
    } else
      for (let f = 0; f < m.length; f++) {
        const g = m[f], d = g.symbol.color, h = +g.value;
        if (d != null && d.a) {
          if (isNaN(h))
            return null;
          r.push([h, d.r, d.g, d.b]);
        }
      }
  const y = s && r.length > 0 ? xe(r, s) : r, v = new b();
  return v.functionName = "Colormap", v.functionArguments = {}, v.functionArguments.Colormap = y, v.variableName = "Raster", i.convertToRFT ? new b({ rasterFunctionDefinition: G(v) }) : v;
}
function vi(n, i) {
  const e = n.extractColormap();
  if (!e || e.length === 0)
    return;
  const { pixelType: t } = i, r = t ? xe(e, t) : e, s = new b();
  return s.functionName = "Colormap", s.functionArguments = {}, s.functionArguments.Colormap = r, i.convertToRFT ? new b({ rasterFunctionDefinition: G(s) }) : s;
}
function Ri(n) {
  const i = [];
  return n.forEach((e) => {
    const t = e;
    if (Array.isArray(t))
      i.push(t);
    else {
      if (t.min == null || t.max == null)
        return;
      const r = [t.min, t.max, t.avg || 0, t.stddev || 0];
      i.push(r);
    }
  }), i;
}
function bi(n) {
  const i = [], e = [];
  return n.forEach((t) => {
    i.push(t[0]), e.push(ti([...t.slice(1), 255]));
  }), { type: "RasterColormap", values: i, colors: e };
}
var _e;
const fe = Ee()({ MT_FIRST: "first", MT_LAST: "last", MT_MIN: "min", MT_MAX: "max", MT_MEAN: "mean", MT_BLEND: "blend", MT_SUM: "sum" }), Ve = Ee()({ esriMosaicNone: "none", esriMosaicCenter: "center", esriMosaicNadir: "nadir", esriMosaicViewpoint: "viewpoint", esriMosaicAttribute: "attribute", esriMosaicLockRaster: "lock-raster", esriMosaicNorthwest: "northwest", esriMosaicSeamline: "seamline" });
function wi(n) {
  let i;
  switch (n ? n.toLowerCase().replace("esrimosaic", "") : "") {
    case "byattribute":
    case "attribute":
      i = "esriMosaicAttribute";
      break;
    case "lockraster":
      i = "esriMosaicLockRaster";
      break;
    case "center":
      i = "esriMosaicCenter";
      break;
    case "northwest":
      i = "esriMosaicNorthwest";
      break;
    case "nadir":
      i = "esriMosaicNadir";
      break;
    case "viewpoint":
      i = "esriMosaicViewpoint";
      break;
    case "seamline":
      i = "esriMosaicSeamline";
      break;
    default:
      i = "esriMosaicNone";
  }
  return Ve.fromJSON(i);
}
let _ = _e = class extends E {
  constructor(n) {
    super(n), this.ascending = !0, this.itemRenderingRule = null, this.lockRasterIds = null, this.method = null, this.multidimensionalDefinition = null, this.objectIds = null, this.operation = null, this.sortField = null, this.sortValue = null, this.viewpoint = null, this.where = null;
  }
  readAscending(n, i) {
    return i.ascending != null ? i.ascending : i.sortAscending == null || i.sortAscending;
  }
  readMethod(n, i) {
    return wi(i.mosaicMethod || i.defaultMosaicMethod);
  }
  readOperation(n, i) {
    const e = i.mosaicOperation, t = i.mosaicOperator && i.mosaicOperator.toLowerCase(), r = e || (t ? fe.toJSON(t) : null);
    return fe.fromJSON(r) || "first";
  }
  castSortValue(n) {
    return n == null || typeof n == "string" || typeof n == "number" ? n : `${n}`;
  }
  clone() {
    return new _e({ ascending: this.ascending, itemRenderingRule: V(this.itemRenderingRule), lockRasterIds: V(this.lockRasterIds), method: this.method, multidimensionalDefinition: V(this.multidimensionalDefinition), objectIds: V(this.objectIds), operation: this.operation, sortField: this.sortField, sortValue: this.sortValue, viewpoint: V(this.viewpoint), where: this.where });
  }
};
a([l({ type: Boolean, json: { write: !0 } })], _.prototype, "ascending", void 0), a([C("ascending", ["ascending", "sortAscending"])], _.prototype, "readAscending", null), a([l({ type: b, json: { write: !0 } })], _.prototype, "itemRenderingRule", void 0), a([l({ type: [ce], json: { write: { overridePolicy() {
  return { enabled: this.method === "lock-raster" };
} } } })], _.prototype, "lockRasterIds", void 0), a([l({ type: String, json: { type: Ve.jsonValues, write: { target: "mosaicMethod", writer: Ve.write } } })], _.prototype, "method", void 0), a([C("method", ["mosaicMethod", "defaultMosaicMethod"])], _.prototype, "readMethod", null), a([l({ type: [Pe], json: { write: !0 } })], _.prototype, "multidimensionalDefinition", void 0), a([l({ type: [ce], json: { name: "fids", write: !0 } })], _.prototype, "objectIds", void 0), a([l({ json: { type: fe.jsonValues, read: { reader: fe.read }, write: { target: "mosaicOperation", writer: fe.write } } })], _.prototype, "operation", void 0), a([C("operation", ["mosaicOperation", "mosaicOperator"])], _.prototype, "readOperation", null), a([l({ type: String, json: { write: { overridePolicy() {
  return { enabled: this.method === "attribute" };
} } } })], _.prototype, "sortField", void 0), a([l({ type: [String, Number], json: { write: { allowNull: !0, overridePolicy() {
  return { enabled: this.method === "attribute", allowNull: !0 };
} } } })], _.prototype, "sortValue", void 0), a([dt("sortValue")], _.prototype, "castSortValue", null), a([l({ type: Q, json: { write: !0 } })], _.prototype, "viewpoint", void 0), a([l({ type: String, json: { write: !0 } })], _.prototype, "where", void 0), _ = _e = a([M("geoscene.layers.support.MosaicRule")], _);
const q = _;
let N = class extends E {
  constructor() {
    super(...arguments), this.layer = null, this.adjustAspectRatio = void 0, this.bandIds = void 0, this.compression = void 0, this.compressionQuality = void 0, this.compressionTolerance = 0.01, this.format = null, this.interpolation = null, this.noData = null, this.noDataInterpretation = void 0, this.pixelType = void 0, this.lercVersion = 2;
  }
  writeAdjustAspectRatio(i, e, t) {
    this.layer.version < 10.3 || (e[t] = i);
  }
  writeCompressionQuality(i, e, t) {
    this.format && this.format.toLowerCase().indexOf("jpg") > -1 && i != null && (e[t] = i);
  }
  writeCompressionTolerance(i, e, t) {
    this.format === "lerc" && i != null && (e[t] = i);
  }
  writeLercVersion(i, e, t) {
    this.format === "lerc" && this.layer.version >= 10.5 && (e[t] = i);
  }
  get version() {
    const i = this.layer;
    return i.commitProperty("bandIds"), i.commitProperty("format"), i.commitProperty("compressionQuality"), i.commitProperty("compressionTolerance"), i.commitProperty("interpolation"), i.commitProperty("noData"), i.commitProperty("noDataInterpretation"), i.commitProperty("mosaicRule"), i.commitProperty("renderingRule"), i.commitProperty("adjustAspectRatio"), i.commitProperty("pixelFilter"), i.commitProperty("renderer"), i.commitProperty("definitionExpression"), (this._get("version") || 0) + 1;
  }
  set version(i) {
    this._set("version", i);
  }
  get mosaicRule() {
    const i = this.layer;
    let e = i.mosaicRule;
    const t = i.definitionExpression;
    return e ? t && t !== e.where && (e = e.clone(), e.where = t) : t && (e = new q({ where: t })), e;
  }
  get renderingRule() {
    const i = this.layer;
    let e = i.renderingRule;
    const t = i.pixelFilter, r = !i.format || i.format.indexOf("jpg") > -1 || i.format.indexOf("png") > -1;
    return e = this._addResampleRasterFunction(e), r && !t && (e = this.combineRendererWithRenderingRule()), e;
  }
  combineRendererWithRenderingRule() {
    var i;
    const e = this.layer, { rasterInfo: t, renderingRule: r, renderer: s } = e;
    return !s || !nt(s) ? r : We(mi(s, { rasterAttributeTable: t.attributeTable, pixelType: t.pixelType, dataType: t.dataType, bandProperties: (i = t.keyProperties) == null ? void 0 : i.BandProperties, convertColorRampToColormap: e.version < 10.6, convertToRFT: !(r == null || !r.rasterFunctionDefinition) }), r);
  }
  _addResampleRasterFunction(i) {
    var e;
    if (((e = this.layer.renderer) == null ? void 0 : e.type) !== "vector-field" || (i == null ? void 0 : i.functionName) === "Resample")
      return i;
    const t = this.layer.serviceDataType === "esriImageServiceDataTypeVector-UV" ? 7 : 10;
    let r = new b({ functionName: "Resample", functionArguments: { ResamplingType: t, InputCellSize: { x: this.layer.pixelSizeX, y: this.layer.pixelSizeY } } });
    return r = i != null && i.rasterFunctionDefinition ? new b({ rasterFunctionDefinition: G(r) }) : r, We(r, i);
  }
};
a([l()], N.prototype, "layer", void 0), a([l({ json: { write: !0 } })], N.prototype, "adjustAspectRatio", void 0), a([D("adjustAspectRatio")], N.prototype, "writeAdjustAspectRatio", null), a([l({ json: { write: !0 } }), L("layer.bandIds")], N.prototype, "bandIds", void 0), a([l({ json: { write: !0 } })], N.prototype, "compression", void 0), a([l({ json: { write: !0 } }), L("layer.compressionQuality")], N.prototype, "compressionQuality", void 0), a([D("compressionQuality")], N.prototype, "writeCompressionQuality", null), a([l({ json: { write: !0 } }), L("layer.compressionTolerance")], N.prototype, "compressionTolerance", void 0), a([D("compressionTolerance")], N.prototype, "writeCompressionTolerance", null), a([l({ json: { write: !0 } }), L("layer.format")], N.prototype, "format", void 0), a([l({ type: String, json: { read: { reader: Y.read }, write: { writer: Y.write } } }), L("layer.interpolation")], N.prototype, "interpolation", void 0), a([l({ json: { write: !0 } }), L("layer.noData")], N.prototype, "noData", void 0), a([l({ type: String, json: { read: { reader: ye.read }, write: { writer: ye.write } } }), L("layer.noDataInterpretation")], N.prototype, "noDataInterpretation", void 0), a([l({ json: { write: !0 } })], N.prototype, "pixelType", void 0), a([l({ json: { write: !0 } })], N.prototype, "lercVersion", void 0), a([D("lercVersion")], N.prototype, "writeLercVersion", null), a([l({ type: Number })], N.prototype, "version", null), a([l({ json: { write: !0 } })], N.prototype, "mosaicRule", null), a([l({ json: { write: !0 } })], N.prototype, "renderingRule", null), N = a([M("geoscene.layers.mixins.ExportImageServiceParameters")], N);
let ue = class extends E {
  constructor() {
    super(...arguments), this.north = null, this.up = null, this.spatialReference = null;
  }
};
a([l({ type: Number, json: { write: !0 } })], ue.prototype, "north", void 0), a([l({ type: Number, json: { write: !0 } })], ue.prototype, "up", void 0), a([l({ type: Z, json: { write: !0 } })], ue.prototype, "spatialReference", void 0), ue = a([M("geoscene.rest.support.ImageAngleResult")], ue);
const Si = ue;
let U = class extends E {
  constructor() {
    super(...arguments), this.catalogItemVisibilities = null, this.catalogItems = null, this.location = null, this.name = null, this.objectId = null, this.processedValues = null, this.properties = null, this.value = null;
  }
};
a([l({ json: { write: !0 } })], U.prototype, "catalogItemVisibilities", void 0), a([l({ type: De, json: { write: !0 } })], U.prototype, "catalogItems", void 0), a([l({ type: Q, json: { write: !0 } })], U.prototype, "location", void 0), a([l({ json: { write: !0 } })], U.prototype, "name", void 0), a([l({ json: { write: !0 } })], U.prototype, "objectId", void 0), a([l({ json: { write: !0 } })], U.prototype, "processedValues", void 0), a([l({ json: { write: !0 } })], U.prototype, "properties", void 0), a([l({ json: { write: !0 } })], U.prototype, "value", void 0), U = a([M("geoscene.rest.support.ImageIdentifyResult")], U);
const xi = U;
let K = class extends E {
  constructor() {
    super(...arguments), this.attributes = null, this.location = null, this.locationId = null, this.rasterId = null, this.resolution = null, this.pixelValue = null;
  }
};
a([l({ json: { write: !0 } })], K.prototype, "attributes", void 0), a([l({ type: Q, json: { write: !0 } })], K.prototype, "location", void 0), a([l({ json: { write: !0 } })], K.prototype, "locationId", void 0), a([l({ json: { write: !0 } })], K.prototype, "rasterId", void 0), a([l({ json: { write: !0 } })], K.prototype, "resolution", void 0), a([l({ json: { write: !0 } })], K.prototype, "pixelValue", void 0), K = a([M("geoscene.rest.support.ImageSample")], K);
const Ii = K;
let we = class extends E {
  constructor() {
    super(...arguments), this.samples = null;
  }
};
a([l({ type: [Ii], json: { write: !0 } })], we.prototype, "samples", void 0), we = a([M("geoscene.rest.support.ImageSampleResult")], we);
const Fi = we;
let Se = class extends E {
  constructor() {
    super(...arguments), this.geometries = null;
  }
};
a([l({ json: { write: !0 } })], Se.prototype, "geometries", void 0), Se = a([M("geoscene.rest.support.ImagePixelLocationResult")], Se);
const Ni = Se;
function lt(n) {
  const i = n == null ? void 0 : n.time;
  if (i && (i.start != null || i.end != null)) {
    const e = [];
    i.start != null && e.push(i.start), i.end != null && e.indexOf(i.end) === -1 && e.push(i.end), n.time = e.join(",");
  }
}
async function ut(n, i, e) {
  const t = se(n), r = i.geometry ? [i.geometry] : [], s = await ze(r), o = i.toJSON();
  lt(o);
  const u = s && s[0];
  R(u) && (o.geometry = u.toJSON());
  const p = ge({ ...t.query, f: "json", ...o });
  return ve(p, e);
}
async function Ti(n, i, e) {
  var t;
  const r = i.toJSON();
  R(r.angleName) && (r.angleName = r.angleName.join(",")), R(i.point) && (t = i.point.spatialReference) != null && t.imageCoordinateSystem && (r.point.spatialReference = Ue(i.point.spatialReference)), R(i.spatialReference) && i.spatialReference.imageCoordinateSystem && (r.spatialReference = pt(i.spatialReference));
  const s = se(n), o = ge({ ...s.query, f: "json", ...r }), u = ve(o, e), { data: p } = await I(`${s.path}/computeAngles`, u);
  return p.spatialReference = p.spatialReference ? p.spatialReference.geodataXform != null ? new Z({ wkid: 0, imageCoordinateSystem: p.spatialReference }) : Z.fromJSON(p.spatialReference) : null, p.north === "NaN" && (p.north = null), p.up === "NaN" && (p.up = null), new Si(p);
}
async function Di(n, i, e) {
  const t = i.toJSON(), { geometries: r } = i;
  for (let m = 0; m < r.length; m++) {
    var s;
    (s = r[m].spatialReference) != null && s.imageCoordinateSystem && (t.geometries.geometries[m].spatialReference = Ue(r[m].spatialReference));
  }
  const o = se(n), u = ge({ ...o.query, f: "json", ...t }), p = ve(u, e), { data: c } = await I(`${o.path}/computePixelLocation`, p);
  return Ni.fromJSON(c);
}
async function Pi(n, i, e) {
  const t = await ut(n, i, e), r = se(n), { data: s } = await I(`${r.path}/computeStatisticsHistograms`, t), { statistics: o } = s;
  return o != null && o.length && o.forEach((u) => {
    u.avg = u.mean, u.stddev = u.standardDeviation;
  }), { statistics: o, histograms: s.histograms };
}
async function Ci(n, i, e) {
  const t = await ut(n, i, e), r = se(n), { data: s } = await I(`${r.path}/computeHistograms`, t);
  return { histograms: s.histograms };
}
async function Oi(n, i, e) {
  var t, r;
  const s = i.toJSON();
  lt(s), (t = s.outFields) != null && t.length && (s.outFields = s.outFields.join(","));
  const o = await ze(i.geometry), u = o == null ? void 0 : o[0];
  R(u) && (s.geometry = u.toJSON());
  const p = se(n), c = ge({ ...p.query, f: "json", ...s }), m = ve(c, e), { data: y } = await I(`${p.path}/getSamples`, m), v = y == null || (r = y.samples) == null ? void 0 : r.map((f) => {
    const g = f.value === "NaN" || f.value === "" ? null : f.value.split(" ").map((d) => Number(d));
    return { ...f, pixelValue: g };
  });
  return Fi.fromJSON({ samples: v });
}
async function Ke(n, i, e) {
  const t = se(n), r = i.geometry ? [i.geometry] : [];
  return ze(r).then((s) => {
    const o = i.toJSON(), u = s && s[0];
    R(u) && (o.geometry = JSON.stringify(u.toJSON()));
    const p = ge({ ...t.query, f: "json", ...o }), c = ve(p, e);
    return I(t.path + "/identify", c);
  }).then((s) => xi.fromJSON(s.data));
}
function Ue(n) {
  const { imageCoordinateSystem: i } = n;
  if (i) {
    const { id: e, referenceServiceName: t } = i;
    return e != null ? t ? { icsid: e, icsns: t } : { icsid: e } : { ics: i };
  }
  return n.toJSON();
}
function pt(n, i) {
  const e = Ue(n), { icsid: t, icsns: r, wkid: s } = e;
  return t != null ? r == null || i != null && i.toLowerCase().includes("/" + r.toLowerCase() + "/") ? `0:${t}` : JSON.stringify(e) : s ? s.toString() : JSON.stringify(e);
}
var je;
let ne = je = class extends E {
  constructor() {
    super(...arguments), this.angleNames = null, this.point = null, this.spatialReference = null, this.rasterId = null;
  }
  clone() {
    return new je(V({ angleNames: this.angleNames, point: this.point, spatialReference: this.spatialReference, rasterId: this.rasterId }));
  }
};
a([l({ type: [String], json: { name: "angleName", write: !0 } })], ne.prototype, "angleNames", void 0), a([l({ type: Q, json: { write: !0 } })], ne.prototype, "point", void 0), a([l({ type: Z, json: { write: !0 } })], ne.prototype, "spatialReference", void 0), a([l({ type: ce, json: { write: !0 } })], ne.prototype, "rasterId", void 0), ne = je = a([M("geoscene.rest.support.ImageAngleParameters")], ne);
const _i = ne;
var Me;
let H = Me = class extends E {
  constructor() {
    super(...arguments), this.geometry = null, this.mosaicRule = null, this.renderingRule = null, this.pixelSize = null, this.raster = void 0, this.timeExtent = null;
  }
  writeGeometry(n, i, e) {
    n != null && (i.geometryType = qe(n), i[e] = n.toJSON());
  }
  clone() {
    return new Me(V({ geometry: this.geometry, mosaicRule: this.mosaicRule, renderingRule: this.renderingRule, pixelSize: this.pixelSize, raster: this.raster, timeExtent: this.timeExtent }));
  }
};
a([l({ types: et, json: { read: tt } })], H.prototype, "geometry", void 0), a([D("geometry")], H.prototype, "writeGeometry", null), a([l({ type: q, json: { write: !0 } })], H.prototype, "mosaicRule", void 0), a([l({ type: b, json: { write: !0 } })], H.prototype, "renderingRule", void 0), a([l({ type: Q, json: { write: !0 } })], H.prototype, "pixelSize", void 0), a([l({ json: { write: !0 } })], H.prototype, "raster", void 0), a([l({ type: Le, json: { read: { source: "time" }, write: { target: "time" } } })], H.prototype, "timeExtent", void 0), H = Me = a([M("geoscene.rest.support.ImageHistogramParameters")], H);
const Xe = H;
var Ae;
let T = Ae = class extends E {
  constructor() {
    super(...arguments), this.geometry = null, this.renderingRules = null, this.pixelSize = null, this.returnGeometry = !0, this.returnCatalogItems = !0, this.returnPixelValues = !0, this.maxItemCount = null, this.timeExtent = null, this.raster = void 0, this.viewId = void 0, this.processAsMultidimensional = !1;
  }
  writeGeometry(n, i, e) {
    n != null && (i.geometryType = qe(n), i[e] = JSON.stringify(n.toJSON()));
  }
  set mosaicRule(n) {
    let i = n;
    i && i.mosaicMethod && (i = q.fromJSON({ ...i.toJSON(), mosaicMethod: i.mosaicMethod, mosaicOperation: i.mosaicOperation })), this._set("mosaicRule", i);
  }
  writeMosaicRule(n, i, e) {
    n != null && (i[e] = JSON.stringify(n.toJSON()));
  }
  set renderingRule(n) {
    let i = n;
    i && i.rasterFunction && (i = b.fromJSON({ ...i.toJSON(), rasterFunction: i.rasterFunction, rasterFunctionArguments: i.rasterFunctionArguments })), this._set("renderingRule", i);
  }
  writeRenderingRule(n, i, e) {
    n != null && (i[e] = JSON.stringify(n.toJSON())), n.rasterFunctionDefinition && (i[e] = JSON.stringify(n.rasterFunctionDefinition));
  }
  writeRenderingRules(n, i, e) {
    n != null && (i[e] = JSON.stringify(n.map((t) => t.rasterFunctionDefinition || t.toJSON())));
  }
  writePixelSize(n, i, e) {
    n != null && (i[e] = JSON.stringify(n));
  }
  writeTimeExtent(n, i, e) {
    if (n != null) {
      const t = R(n.start) ? n.start.getTime() : null, r = R(n.end) ? n.end.getTime() : null;
      i[e] = t != null ? r != null ? `${t},${r}` : `${t}` : null;
    }
  }
  clone() {
    return new Ae(V({ geometry: this.geometry, mosaicRule: this.mosaicRule, renderingRule: this.renderingRule, pixelSize: this.pixelSize, returnGeometry: this.returnGeometry, returnCatalogItems: this.returnCatalogItems, returnPixelValues: this.returnPixelValues, maxItemCount: this.maxItemCount, processAsMultidimensional: this.processAsMultidimensional, raster: this.raster, viewId: this.viewId, timeExtent: this.timeExtent }));
  }
};
a([l({ json: { write: !0 } })], T.prototype, "geometry", void 0), a([D("geometry")], T.prototype, "writeGeometry", null), a([l({ type: q, json: { write: !0 } })], T.prototype, "mosaicRule", null), a([D("mosaicRule")], T.prototype, "writeMosaicRule", null), a([l({ type: b, json: { write: !0 } })], T.prototype, "renderingRule", null), a([D("renderingRule")], T.prototype, "writeRenderingRule", null), a([l({ type: [b], json: { write: !0 } })], T.prototype, "renderingRules", void 0), a([D("renderingRules")], T.prototype, "writeRenderingRules", null), a([l({ type: Q, json: { write: !0 } })], T.prototype, "pixelSize", void 0), a([D("pixelSize")], T.prototype, "writePixelSize", null), a([l({ type: Boolean, json: { write: !0 } })], T.prototype, "returnGeometry", void 0), a([l({ type: Boolean, json: { write: !0 } })], T.prototype, "returnCatalogItems", void 0), a([l({ type: Boolean, json: { write: !0 } })], T.prototype, "returnPixelValues", void 0), a([l({ type: Number, json: { write: !0 } })], T.prototype, "maxItemCount", void 0), a([l({ type: Le, json: { write: { target: "time" } } })], T.prototype, "timeExtent", void 0), a([D("timeExtent")], T.prototype, "writeTimeExtent", null), a([l({ json: { write: !0 } })], T.prototype, "raster", void 0), a([l({ json: { write: !0 } })], T.prototype, "viewId", void 0), a([l({ type: Boolean, json: { write: !0 } })], T.prototype, "processAsMultidimensional", void 0), T = Ae = a([M("geoscene.rest.support.ImageIdentifyParameters")], T);
const Ze = T;
var $e;
let pe = $e = class extends E {
  constructor() {
    super(...arguments), this.geometries = null, this.rasterId = null;
  }
  writeGeometry(n, i, e) {
    i.geometries = { geometryType: "esriGeometryPoint", geometries: n.map((t) => t.toJSON()) };
  }
  clone() {
    return new $e({ geometries: this.geometries.map((n) => n.clone()), rasterId: this.rasterId });
  }
};
a([l({ type: [Q], json: { write: !0 } })], pe.prototype, "geometries", void 0), a([D("geometries")], pe.prototype, "writeGeometry", null), a([l({ type: ce, json: { write: !0 } })], pe.prototype, "rasterId", void 0), pe = $e = a([M("geoscene.rest.support.ImagePixelLocationParameters")], pe);
const Vi = pe;
var Je;
let j = Je = class extends E {
  constructor() {
    super(...arguments), this.geometry = null, this.interpolation = "nearest", this.mosaicRule = null, this.outFields = null, this.pixelSize = null, this.returnFirstValueOnly = !0, this.sampleDistance = null, this.sampleCount = null, this.sliceId = null, this.timeExtent = null;
  }
  writeGeometry(n, i, e) {
    n != null && (i.geometryType = qe(n), i[e] = n.toJSON());
  }
  set locations(n) {
    if (n != null && n.length) {
      const i = new ht({ spatialReference: n[0].spatialReference });
      i.points = n.map((e) => [e.x, e.y]), this._set("locations", n), this.geometry = i;
    }
  }
  clone() {
    return new Je(V({ geometry: this.geometry, locations: this.locations, interpolation: this.interpolation, mosaicRule: this.mosaicRule, outFields: this.outFields, raster: this.raster, returnFirstValueOnly: this.returnFirstValueOnly, sampleDistance: this.sampleDistance, sampleCount: this.sampleCount, sliceId: this.sliceId, pixelSize: this.pixelSize, timeExtent: this.timeExtent }));
  }
};
a([l({ types: et, json: { read: tt } })], j.prototype, "geometry", void 0), a([D("geometry")], j.prototype, "writeGeometry", null), a([l()], j.prototype, "locations", null), a([l({ type: String, json: { type: Y.jsonValues, read: Y.read, write: Y.write } })], j.prototype, "interpolation", void 0), a([l({ type: q, json: { write: !0 } })], j.prototype, "mosaicRule", void 0), a([l({ type: [String], json: { write: !0 } })], j.prototype, "outFields", void 0), a([l({ type: Q, json: { write: !0 } })], j.prototype, "pixelSize", void 0), a([l({ type: String, json: { write: !0 } })], j.prototype, "raster", void 0), a([l({ type: Boolean, json: { write: !0 } })], j.prototype, "returnFirstValueOnly", void 0), a([l({ type: Number, json: { write: !0 } })], j.prototype, "sampleDistance", void 0), a([l({ type: Number, json: { write: !0 } })], j.prototype, "sampleCount", void 0), a([l({ type: Number, json: { write: !0 } })], j.prototype, "sliceId", void 0), a([l({ type: Le, json: { read: { source: "time" }, write: { target: "time" } } })], j.prototype, "timeExtent", void 0), j = Je = a([M("geoscene.rest.support.ImageSampleParameters")], j);
const ji = j, Ye = yt.getLogger("geoscene.layers.mixins.ArcGISImageService"), Te = Ee()({ U1: "u1", U2: "u2", U4: "u4", U8: "u8", S8: "s8", U16: "u16", S16: "s16", U32: "u32", S32: "s32", F32: "f32", F64: "f64", C64: "c64", C128: "c128", UNKNOWN: "unknown" }), Mi = /* @__PURE__ */ new Set(["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"]), Ai = Tt(Dt, { min: 0, max: 255 });
function $i(n) {
  if (!n)
    return null;
  const i = JSON.stringify(n).match(/"rasterFunction":"(.*?")/gi), e = i == null ? void 0 : i.map((t) => t.replace('"rasterFunction":"', "").replace('"', ""));
  return e ? e.join("/") : null;
}
const Ji = (n) => {
  let i = class extends n {
    constructor() {
      super(...arguments), this._functionRasterInfos = {}, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this._defaultServiceMosaicRule = null, this._serviceSourceType = null, this._serviceSupportsMosaicRule = null, this.rasterAttributeTableFieldPrefix = "Raster.", this.adjustAspectRatio = null, this.bandCount = null, this.bandIds = void 0, this.capabilities = null, this.compressionQuality = void 0, this.compressionTolerance = 0.01, this.copyright = null, this.definitionExpression = null, this.exportImageServiceParameters = null, this.rasterInfo = null, this.fields = null, this.fullExtent = null, this.hasMultidimensions = !1, this.imageMaxHeight = 4100, this.imageMaxWidth = 4100, this.interpolation = void 0, this.minScale = 0, this.maxScale = 0, this.multidimensionalInfo = null, this.noData = null, this.noDataInterpretation = void 0, this.objectIdField = null, this.geometryType = "polygon", this.typeIdField = null, this.types = [], this.pixelSizeX = null, this.pixelSizeY = null, this.pixelFilter = null, this.raster = void 0, this.viewId = void 0, this.symbolizer = null, this.rasterAttributeTable = null, this.rasterFunctionInfos = null, this.serviceDataType = null, this.spatialReference = null, this.pixelType = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.url = null, this.version = void 0;
    }
    initialize() {
      this._set("exportImageServiceParameters", new N({ layer: this }));
    }
    readDefaultServiceMosaicRule(e, t) {
      return this._serviceSupportsMosaicRule ? q.fromJSON(t) : null;
    }
    readServiceSourceType(e, t) {
      return this._isMosaicDataset(t) ? "mosaic-dataset" : "raster-dataset";
    }
    readServiceSupportsMosaicRule(e, t) {
      return this._isMosaicRuleSupported(t);
    }
    get rasterFunctionNamesIndex() {
      const e = /* @__PURE__ */ new Map();
      return !this.rasterFunctionInfos || R(this.rasterFunctionInfos) && this.rasterFunctionInfos.length < 1 || R(this.rasterFunctionInfos) && this.rasterFunctionInfos.forEach((t) => {
        e.set(t.name.toLowerCase().replace(/ /gi, "_"), t.name);
      }), e;
    }
    readBandIds(e, t) {
      if (Array.isArray(e) && e.length > 0 && e.every((r) => typeof r == "number"))
        return e;
    }
    readCapabilities(e, t) {
      return this._readCapabilities(t);
    }
    writeCompressionQuality(e, t, r) {
      e != null && this.format !== "lerc" && (t[r] = e);
    }
    writeCompressionTolerance(e, t, r) {
      this.format === "lerc" && e != null && (t[r] = e);
    }
    get fieldsIndex() {
      return this.fields ? new vt(this.fields) : null;
    }
    set format(e) {
      e && Mi.has(e.toLowerCase()) && this._set("format", e.toLowerCase());
    }
    readFormat(e, t) {
      return t.serviceDataType === "esriImageServiceDataTypeVector-UV" || t.serviceDataType === "esriImageServiceDataTypeVector-MagDir" || this.pixelFilter != null ? "lerc" : "jpgpng";
    }
    readMinScale(e, t) {
      return t.minLOD != null && t.maxLOD != null ? e : 0;
    }
    readMaxScale(e, t) {
      return t.minLOD != null && t.maxLOD != null ? e : 0;
    }
    set mosaicRule(e) {
      let t = e;
      t && t.mosaicMethod && (t = q.fromJSON({ ...t.toJSON(), mosaicMethod: t.mosaicMethod, mosaicOperation: t.mosaicOperation })), this._set("mosaicRule", t);
    }
    readMosaicRule(e, t) {
      const r = e || t.mosaicRule;
      return r ? q.fromJSON(r) : this._isMosaicRuleSupported(t) ? q.fromJSON(t) : null;
    }
    writeMosaicRule(e, t, r) {
      let s = this.mosaicRule;
      const o = this.definitionExpression;
      s ? o && o !== s.where && (s = s.clone(), s.where = o) : o && (s = new q({ where: o })), this._isValidCustomizedMosaicRule(s) && (t[r] = s.toJSON());
    }
    writeNoData(e, t, r) {
      e != null && typeof e == "number" && (t[r] = Ai(e));
    }
    readObjectIdField(e, t) {
      if (!e) {
        const r = t.fields.filter((s) => s.type === "esriFieldTypeOID" || s.type === "oid");
        e = r && r[0] && r[0].name;
      }
      return e;
    }
    get parsedUrl() {
      return this.url ? Rt(this.url) : null;
    }
    set renderer(e) {
      this.loaded && (e = this._configRenderer(e)), this._set("renderer", e);
    }
    readRenderer(e, t, r) {
      var s, o;
      const u = t == null || (s = t.layerDefinition) == null || (o = s.drawingInfo) == null ? void 0 : o.renderer, p = Bt(u, r);
      return p == null ? null : (p.type === "vector-field" && t.symbolTileSize && !u.symbolTileSize && (p.symbolTileSize = t.symbolTileSize), nt(p) || Ye.warn("ArcGISImageService", "Imagery layer doesn't support given renderer type."), p);
    }
    writeRenderer(e, t, r) {
      t.layerDefinition = t.layerDefinition || {}, t.layerDefinition.drawingInfo = t.layerDefinition.drawingInfo || {}, t.layerDefinition.drawingInfo.renderer = e.toJSON(), e.type === "vector-field" && (t.symbolTileSize = e.symbolTileSize);
    }
    get rasterFields() {
      const e = this.rasterAttributeTableFieldPrefix || "Raster.", t = new te({ name: "Raster.ItemPixelValue", alias: "Item Pixel Value", domain: null, editable: !1, length: 50, type: "string" }), r = new te({ name: "Raster.ServicePixelValue", alias: "Service Pixel Value", domain: null, editable: !1, length: 50, type: "string" }), s = new te({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Service Pixel Value", domain: null, editable: !1, length: 50, type: "string" });
      let o = this.fields ? V(this.fields) : [];
      o.push(r), this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0 && o.push(t), this.version >= 10.4 && R(this.rasterFunctionInfos) && this.rasterFunctionInfos.some((p) => p.name.toLowerCase() === "none") && o.push(s), R(this.rasterFunctionInfos) && this.rasterFunctionInfos.filter((p) => p.name.toLowerCase() !== "none").forEach((p) => {
        o.push(new te({ name: "Raster.ServicePixelValue." + p.name, alias: p.name, domain: null, editable: !1, length: 50, type: "string" }));
      }), this.pixelFilter == null || this.serviceDataType !== "esriImageServiceDataTypeVector-UV" && this.serviceDataType !== "esriImageServiceDataTypeVector-MagDir" || (o.push(new te({ name: "Raster.Magnitude", alias: "Magnitude", domain: null, editable: !1, type: "double" })), o.push(new te({ name: "Raster.Direction", alias: "Direction", domain: null, editable: !1, type: "double" })));
      const u = this.rasterInfo.attributeTable && this.rasterInfo.attributeTable.fields || null;
      if (u && u.length > 0) {
        const p = u.filter((c) => c.type !== "esriFieldTypeOID" && c.name.toLowerCase() !== "value").map((c) => {
          const m = V(c);
          return m.name = e + c.name, m;
        });
        o = o.concat(p);
      }
      return o;
    }
    set renderingRule(e) {
      let t = e;
      t && t.rasterFunction && (t = b.fromJSON({ ...t.toJSON(), rasterFunction: t.rasterFunction, rasterFunctionArguments: t.rasterFunctionArguments })), this._set("renderingRule", t);
    }
    readRenderingRule(e, t) {
      const r = t.rasterFunctionInfos;
      return t.renderingRule || r && r.length && r[0].name !== "None" ? this._isRFTJson(t.renderingRule) ? b.fromJSON({ rasterFunctionDefinition: t.renderingRule }) : b.fromJSON(t.renderingRule || { rasterFunctionInfos: t.rasterFunctionInfos }) : null;
    }
    writeRenderingRule(e, t, r) {
      const s = e.toJSON();
      s.rasterFunctionDefinition ? t[r] = s.rasterFunctionDefinition : t[r] = s;
    }
    readSpatialReference(e, t) {
      const r = e || t.extent.spatialReference;
      return r ? Z.fromJSON(r) : null;
    }
    readPixelType(e) {
      return Te.fromJSON(e) || e;
    }
    writePixelType(e, t, r) {
      (ie(this.serviceRasterInfo) || this.pixelType !== this.serviceRasterInfo.pixelType) && (t[r] = Te.toJSON(e));
    }
    readVersion(e, t) {
      let r = t.currentVersion;
      return r || (r = t.hasOwnProperty("fields") || t.hasOwnProperty("timeInfo") ? 10 : 9.3), r;
    }
    applyFilter(e) {
      let t = e;
      return this.pixelFilter && (t = this._clonePixelData(e), this.pixelFilter(t)), t;
    }
    async applyRenderer(e, t) {
      let r = e;
      if (!this._isPicture() && this.renderer && this.symbolizer && !this.pixelFilter) {
        const s = JSON.stringify(this._cachedRendererJson) !== JSON.stringify(this.renderer.toJSON()), o = this._rasterJobHandler.instance, { bandIds: u } = this;
        if (o) {
          s && (this.symbolizer.bind(), await o.updateSymbolizer(this.symbolizer, t), this._cachedRendererJson = this.renderer.toJSON());
          const p = await o.symbolize({ bandIds: u, ...e }, t);
          r = { extent: e.extent, pixelBlock: p };
        } else
          r = { extent: e.extent, pixelBlock: this.symbolizer.symbolize({ bandIds: u, ...e }) };
      }
      return r;
    }
    destroy() {
      this._shutdownJobHandler();
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    async computeAngles(e, t) {
      if (await this._fetchCapabilities(t == null ? void 0 : t.signal), !this.capabilities.operations.supportsComputeAngles)
        throw new $("imagery-layer:compute-angles", "this operation is not supported on the input image service");
      return e = re(_i, e).clone(), Ti(this.url, e, this._getRequestOptions(t));
    }
    async computePixelSpaceLocations(e, t) {
      if (await this._fetchCapabilities(t == null ? void 0 : t.signal), !this.capabilities.operations.supportsComputePixelLocation)
        throw new $("imagery-layer:compute-pixel-space-locations", "this operation is not supported on the input image service");
      return e = re(Vi, e).clone(), Di(this.url, e, this._getRequestOptions(t));
    }
    async computeHistograms(e, t) {
      if (await this._fetchCapabilities(t == null ? void 0 : t.signal), !this.capabilities.operations.supportsComputeHistograms)
        throw new $("imagery-layer:compute-histograms", "this operation is not supported on the input image service");
      e = re(Xe, e).clone();
      const { raster: r, mosaicRule: s, renderingRule: o } = this;
      return o && e.renderingRule == null && (e.renderingRule = o), s && e.mosaicRule == null && (e.mosaicRule = s), r && e.raster == null && (e.raster = r), Ci(this.url, e, this._getRequestOptions(t));
    }
    async computeStatisticsHistograms(e, t) {
      if (await this._fetchCapabilities(t == null ? void 0 : t.signal), !this.capabilities.operations.supportsComputeStatisticsHistograms)
        throw new $("imagery-layer:compute-statistics-histograms", "this operation is not supported on the input image service");
      e = re(Xe, e).clone();
      const { raster: r, mosaicRule: s, renderingRule: o } = this;
      return o && e.renderingRule == null && (e.renderingRule = o), s && e.mosaicRule == null && (e.mosaicRule = s), r && e.raster == null && (e.raster = r), Pi(this.url, e, this._getRequestOptions(t));
    }
    getField(e) {
      const { fieldsIndex: t } = this;
      return R(t) ? t.get(e) : void 0;
    }
    getFieldDomain(e, t) {
      const r = this.getField(e);
      return r ? r.domain : null;
    }
    fetchImage(e, t, r, s = {}) {
      if (e == null || t == null || r == null)
        return Promise.reject(new $("imagery-layer:fetch-image", "Insufficient parameters for requesting an image. A valid extent, width and height values are required."));
      const o = this.renderer || this.symbolizer ? this.generateRasterInfo(this.renderingRule, { signal: s.signal }) : null;
      return bt(o).then((u) => {
        u && (this.rasterInfo = u);
        const p = { imageServiceParameters: this.getExportImageServiceParameters(e, t, r, s.timeExtent), imageProps: { extent: e, width: t, height: r, format: this.format }, requestAsImageElement: s.requestAsImageElement && !this.pixelFilter || !1, signal: s.signal };
        return this._requestArrayBuffer(p);
      });
    }
    fetchKeyProperties(e) {
      return I(this.parsedUrl.path + "/keyProperties", { query: this._getQueryParams({ renderingRule: this.version >= 10.3 ? e == null ? void 0 : e.renderingRule : null }) }).then((t) => t.data);
    }
    fetchRasterAttributeTable(e) {
      return this.version < 10.1 ? Promise.reject(new $("#fetchRasterAttributeTable()", "Failed to get rasterAttributeTable")) : I(this.parsedUrl.path + "/rasterAttributeTable", { query: this._getQueryParams({ renderingRule: this.version >= 10.3 ? e == null ? void 0 : e.renderingRule : null }) }).then((t) => De.fromJSON(t.data));
    }
    async getCatalogItemRasterInfo(e, t) {
      const r = I(this.parsedUrl.path + "/" + e + "/info", { query: this._getQueryParams(), ...t }).then((c) => c.data), s = I(this.parsedUrl.path + "/" + e + "/info/keyProperties", { query: this._getQueryParams(), ...t }).then((c) => c.data).catch(() => {
      }), o = await Promise.all([r, s]);
      if (!o[0])
        return;
      const u = de.fromJSON(o[0].extent), p = o[0].statistics ? o[0].statistics.map((c) => ({ min: c[0], max: c[1], avg: c[2], stddev: c[3] })) : null;
      return new Fe({ bandCount: o[0].bandCount, extent: u, spatialReference: u.sr, pixelSize: new Q({ x: o[0].pixelSizeX, y: o[0].pixelSizeY, spatialReference: u.sr }), pixelType: o[0].pixelType.toLowerCase(), statistics: p, histograms: o[0].histograms, keyProperties: o[1] || {} });
    }
    async getCatalogItemICSInfo(e, t) {
      const { data: r } = await I(this.parsedUrl.path + "/" + e + "/info/ics", { query: this._getQueryParams(), ...t }), s = r && r.ics;
      if (!s)
        return;
      let o = null;
      try {
        o = (await I(this.parsedUrl.path + "/" + e + "/info", { query: this._getQueryParams(), ...t })).data.extent;
      } catch {
      }
      if (!o || !o.spatialReference)
        return { ics: s, icsToPixelTransform: null, icsExtent: null, northDirection: null };
      const u = this.version >= 10.7 ? I(this.parsedUrl.path + "/" + e + "/info/icstopixel", { query: this._getQueryParams(), ...t }).then((S) => S.data).catch(() => ({})) : {}, p = o.spatialReference, c = { geometries: JSON.stringify({ geometryType: "esriGeometryEnvelope", geometries: [o] }), inSR: p.wkid || JSON.stringify(p), outSR: "0:" + e }, m = I(this.parsedUrl.path + "/project", { query: this._getQueryParams(c), ...t }).then((S) => S.data).catch(() => ({})), y = 5, v = (o.xmin + o.xmax) / 2, f = (o.ymax - o.ymin) / (y + 1), g = o.ymin + f, d = [];
      for (let S = 0; S < y; S++)
        d.push({ x: v, y: g + f * S });
      const h = { geometries: JSON.stringify({ geometryType: "esriGeometryPoint", geometries: d }), inSR: p.wkid || JSON.stringify(p), outSR: "0:" + e }, x = I(this.parsedUrl.path + "/project", { query: this._getQueryParams(h), ...t }).then((S) => S.data).catch(() => ({})), w = await Promise.all([u, m, x]);
      let P = w[0].ipxf;
      if (P == null) {
        var F, O, k;
        const S = (F = s.geodataXform) == null ? void 0 : F.xf_0;
        (S == null || (O = S.name) == null ? void 0 : O.toLowerCase()) === "topup" && (S == null || (k = S.coefficients) == null ? void 0 : k.length) === 6 && (P = { affine: { name: "ics [sensor: Frame] to pixel (column, row) transformation", coefficients: S.coefficients, cellsizeRatio: 0, type: "GeometricXform" } });
      }
      const B = de.fromJSON(w[1] && w[1].geometries && w[1].geometries[0]);
      B && (B.spatialReference = new Z({ wkid: 0, imageCoordinateSystem: s }));
      const A = w[2].geometries ? w[2].geometries.filter((S) => S != null && S.x != null && S.y != null && S.x !== "NaN" && S.y !== "NaN") : [], ae = A.length;
      if (ae < 3)
        return { ics: s, icsToPixelTransform: P, icsExtent: B, northDirection: null };
      let oe = 0, le = 0, ee = 0, W = 0;
      for (let S = 0; S < ae; S++)
        oe += A[S].x, le += A[S].y, ee += A[S].x * A[S].x, W += A[S].x * A[S].y;
      const X = (ae * W - oe * le) / (ae * ee - oe * oe);
      let me = 0;
      const ke = A[y - 1].x > A[0].x, He = A[y - 1].y > A[0].y;
      return X === 1 / 0 ? me = He ? 90 : 270 : X === 0 ? me = ke ? 0 : 180 : X > 0 ? me = ke ? 180 * Math.atan(X) / Math.PI : 180 * Math.atan(X) / Math.PI + 180 : X < 0 && (me = He ? 180 + 180 * Math.atan(X) / Math.PI : 360 + 180 * Math.atan(X) / Math.PI), { ics: s, icsToPixelTransform: P, icsExtent: B, northDirection: me };
    }
    async generateRasterInfo(e, t) {
      var r;
      if ((!e || (e == null || (r = e.functionName) == null ? void 0 : r.toLowerCase()) === "none" || this._isVectorFieldResampleFunction(e)) && R(this.serviceRasterInfo))
        return this.serviceRasterInfo;
      const s = $i(e);
      if (this._functionRasterInfos[s])
        return this._functionRasterInfos[s];
      const o = this._generateRasterInfo(e, t);
      this._functionRasterInfos[s] = o;
      try {
        return await o;
      } catch {
        return this._functionRasterInfos[s] = null, null;
      }
    }
    getExportImageServiceParameters(e, t, r, s) {
      var o;
      e = e.clone().shiftCentralMeridian();
      const u = pt(e.spatialReference, this.parsedUrl.path);
      R(this.serviceRasterInfo) && this.pixelType !== this.serviceRasterInfo.pixelType && (this.exportImageServiceParameters.pixelType = this.pixelType);
      const p = this.exportImageServiceParameters.toJSON(), { bandIds: c, noData: m } = p;
      let { renderingRule: y } = p;
      const v = (o = this.renderingRule) == null ? void 0 : o.rasterFunctionDefinition, f = !this.renderer || this.renderer.type === "raster-stretch";
      if (c != null && c.length && this._hasRenderingRule(this.renderingRule) && !v && f) {
        const h = { rasterFunction: "ExtractBand", rasterFunctionArguments: { BandIds: c } };
        if (y.rasterFunction === "Stretch")
          h.rasterFunctionArguments.Raster = y.rasterFunctionArguments.Raster, y.rasterFunctionArguments.Raster = h;
        else if (y.rasterFunction === "Colormap") {
          const x = y.rasterFunctionArguments.Raster;
          (x == null ? void 0 : x.rasterFunction) === "Stretch" ? (h.rasterFunctionArguments.Raster = x.rasterFunctionArguments.Raster, x.rasterFunctionArguments.Raster = h) : (h.rasterFunctionArguments.Raster = x, y.rasterFunctionArguments.Raster = h);
        } else
          h.rasterFunctionArguments.Raster = y, y = h;
        p.bandIds = void 0;
      } else
        p.bandIds = c == null ? void 0 : c.join(",");
      m instanceof Array && m.length > 0 && (p.noData = m.join(","));
      const g = this._serviceSupportsMosaicRule ? this._combineMosaicRuleWithTimeExtent(this.exportImageServiceParameters.mosaicRule, s) : null;
      p.mosaicRule = g && JSON.stringify(g), p.renderingRule = this._getRenderingRuleString(b.fromJSON(y));
      const d = {};
      if (s) {
        const { start: h, end: x } = s.toJSON();
        h && x && h === x ? d.time = "" + h : h == null && x == null || (d.time = `${h ?? "null"},${x ?? "null"}`);
      }
      return { bbox: e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax, bboxSR: u, imageSR: u, size: t + "," + r, ...p, ...d };
    }
    async getSamples(e, t) {
      if (await this._fetchCapabilities(t == null ? void 0 : t.signal), !this.capabilities.operations.supportsGetSamples)
        throw new $("imagery-layer:get-samples", "getSamples operation is not supported on the input image service");
      e = re(ji, e).clone();
      const { raster: r } = this;
      return r && e.raster == null && (e.raster = r), Oi(this.url, e, this._getRequestOptions(t));
    }
    async identify(e, t) {
      if (await this._fetchCapabilities(t == null ? void 0 : t.signal), !this.capabilities.operations.supportsIdentify)
        throw new $("imagery-layer:query-rasters", "query operation is not supported on the input image service");
      e = re(Ze, e).clone();
      const { raster: r, mosaicRule: s, renderingRule: o } = this;
      if (o && e.renderingRule == null && (e.renderingRule = o), s && e.mosaicRule == null) {
        const u = this._combineMosaicRuleWithTimeExtent(s, e.timeExtent);
        e.mosaicRule = wt(u);
      }
      return r && e.raster == null && (e.raster = r), Ke(this.url, e, this._getRequestOptions(t));
    }
    createQuery() {
      const e = new Ie();
      return e.outFields = ["*"], e.returnGeometry = !0, e.where = this.definitionExpression || "1=1", e;
    }
    async queryRasters(e, t) {
      return { query: e, requestOptions: t } = await this._prepareForQuery(e, t), St(this.url, e, t);
    }
    async queryObjectIds(e, t) {
      return { query: e, requestOptions: t } = await this._prepareForQuery(e, t), xt(this.url, e, t);
    }
    async queryRasterCount(e, t) {
      return { query: e, requestOptions: t } = await this._prepareForQuery(e, t), It(this.url, e, t);
    }
    async queryVisibleRasters(e, t) {
      if (!e)
        throw new $("imagery-layer: query-visible-rasters", "missing query parameter");
      const { pixelSize: r, returnDomainValues: s, returnTopmostRaster: o, showNoDataRecords: u } = t || { pixelSize: null, returnDomainValues: !1, returnTopmostRaster: !1, showNoDataRecords: !1 };
      let p = !1, c = null, m = null;
      const y = "raster.servicepixelvalue", v = this.rasterFunctionNamesIndex;
      if (R(e.outFields) && (p = e.outFields.some((F) => F.toLowerCase().indexOf(y) === -1), this.version >= 10.4)) {
        const F = e.outFields.filter((O) => O.toLowerCase().indexOf(y) > -1 && O.length > y.length).map((O) => {
          const k = O.slice(y.length + 1);
          return [this._updateRenderingRulesFunctionName(k, v), k];
        });
        c = F.map((O) => new b({ functionName: O[0] })), m = F.map((O) => O[1]), c.length === 0 ? this.renderingRule ? (c.push(this.renderingRule), m.push(this.renderingRule.functionName)) : c = null : this.renderingRule && !c.some((O) => O.functionName === this.renderingRule.functionName) && (c.push(this.renderingRule), m.push(this.renderingRule.functionName));
      }
      const f = ie(e.outSpatialReference) || e.outSpatialReference.equals(this.spatialReference), g = e.timeExtent || this.timeExtent, d = this._combineMosaicRuleWithTimeExtent(this.exportImageServiceParameters.mosaicRule, g), h = this._getQueryParams({ geometry: e.geometry, timeExtent: g, mosaicRule: d, renderingRule: this.version < 10.4 ? this.renderingRule : null, renderingRules: c, pixelSize: r, returnCatalogItems: p, returnGeometry: f, raster: this.raster, maxItemCount: o ? 1 : null });
      delete h.f;
      const x = new Ze(h);
      try {
        var w, P;
        await this.generateRasterInfo(this.renderingRule);
        const F = await Ke(this.url, x, { signal: t == null ? void 0 : t.signal, query: { ...this.customParameters } }), O = e.outFields, k = F.value.toLowerCase().indexOf("nodata") > -1;
        if (!(p && !f && (!(F == null || (w = F.catalogItems) == null) && w.features.length) && (u || !k)))
          return this._processVisibleRastersResponse(F, { returnDomainValues: s, templateRRFunctionNames: m, showNoDataRecords: u, templateFields: O });
        const B = this.objectIdField || "ObjectId", A = F.catalogItems.features, ae = A.map((ee) => {
          var W;
          return (W = ee.attributes) == null ? void 0 : W[B];
        }), oe = new Ie({ objectIds: ae, returnGeometry: !0, outSpatialReference: e.outSpatialReference, outFields: [B] }), le = await this.queryRasters(oe);
        return le != null && (P = le.features) != null && P.length && le.features.forEach((ee) => {
          A.forEach((W) => {
            W.attributes[B] === ee.attributes[B] && (W.geometry = new Ft(ee.geometry), R(e.outSpatialReference) && (W.geometry.spatialReference = e.outSpatialReference));
          });
        }), this._processVisibleRastersResponse(F, { returnDomainValues: s, templateRRFunctionNames: m, showNoDataRecords: u, templateFields: O });
      } catch {
        throw new $("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters");
      }
    }
    async fetchVariableStatisticsHistograms(e, t) {
      const r = I(this.parsedUrl.path + "/statistics", { query: this._getQueryParams({ variable: e }), signal: t }).then((u) => {
        var p;
        return (p = u.data) == null ? void 0 : p.statistics;
      }), s = I(this.parsedUrl.path + "/histograms", { query: this._getQueryParams({ variable: e }), signal: t }).then((u) => {
        var p;
        return (p = u.data) == null ? void 0 : p.histograms;
      }), o = await Promise.all([r, s]);
      return o[0] && o[0].forEach((u) => {
        u.avg = u.mean, u.stddev = u.standardDeviation;
      }), { statistics: o[0] || null, histograms: o[1] || null };
    }
    async createStreamlinesMesh(e, t) {
      const r = this._rasterJobHandler.instance;
      return r ? r.createStreamlinesMesh(e, t) : si(e.rendererSettings, e.flowData, R(t.signal) ? t.signal : new AbortController().signal);
    }
    async _fetchService(e) {
      await this._fetchServiceInfo(e), R(this.serviceRasterInfo) && !this.rasterInfo && (this.rasterInfo = this.serviceRasterInfo);
      const t = this.sourceJSON, r = R(this.serviceRasterInfo) ? Promise.resolve(this.serviceRasterInfo) : this._fetchAuxiliaryRasterInfo({ serviceInfo: t, signal: e }).then((u) => (this._set("serviceRasterInfo", u), u)), s = this._hasRenderingRule(this.renderingRule) ? this.generateRasterInfo(this.renderingRule, { signal: e }) : null, o = this._getRasterFunctionInfos();
      return Promise.all([r, s, o]).then((u) => {
        u[1] ? this._set("rasterInfo", u[1]) : this._set("rasterInfo", u[0]), u[2] && this._set("rasterFunctionInfos", u[2]), this.renderer && !this._isSupportedRenderer(this.renderer) && (this._set("renderer", null), Ye.warn("ArcGISImageService", "Switching to the default renderer. Renderer applied is not valid for this Imagery Layer")), this._set("renderer", this._configRenderer(this.renderer)), this.watch("renderingRule", (c) => {
          (this.renderer || this.symbolizer || this.popupEnabled && this.popupTemplate) && this.generateRasterInfo(c).then((m) => {
            m && (this.rasterInfo = m);
          });
        });
        const p = R(this.serviceRasterInfo) && this.serviceRasterInfo.multidimensionalInfo;
        p && this._updateMultidimensionalDefinition(p);
      });
    }
    _combineMosaicRuleWithTimeExtent(e, t) {
      const r = this.timeInfo;
      if (ie(e) || ie(this.multidimensionalInfo) || ie(t) || ie(r == null ? void 0 : r.startField))
        return e;
      const { startField: s } = r;
      var o;
      if (e = e.clone(), this._serviceSourceType === "mosaic-dataset")
        return e.multidimensionalDefinition = (o = e.multidimensionalDefinition) == null ? void 0 : o.filter((f) => f.dimensionName !== s), this._cleanupMultidimensionalDefinition(e);
      e.multidimensionalDefinition = e.multidimensionalDefinition || [];
      const u = e.multidimensionalDefinition.filter((f) => f.dimensionName === s), p = R(t.start) ? t.start.getTime() : null, c = R(t.end) ? t.end.getTime() : null, m = p == null || c == null || p === c, y = m ? [p || c] : [[p, c]], v = this.version >= 10.8;
      if (u.length)
        u.forEach((f) => {
          f.dimensionName === s && (v ? (f.dimensionName = null, f.isSlice = null, f.values = null) : (f.isSlice = m, f.values = y));
        });
      else if (!v) {
        const f = e.multidimensionalDefinition.filter((g) => g.variableName != null && g.dimensionName == null);
        f.length ? f.forEach((g) => {
          g.dimensionName = s, g.isSlice = m, g.values = y;
        }) : e.multidimensionalDefinition.push(new Pe({ variableName: "", dimensionName: s, isSlice: m, values: y }));
      }
      return this._cleanupMultidimensionalDefinition(e);
    }
    _cleanupMultidimensionalDefinition(e) {
      return ie(e) ? null : (e.multidimensionalDefinition && (e.multidimensionalDefinition = e.multidimensionalDefinition.filter((t) => !(!t.variableName && !t.dimensionName)), e.multidimensionalDefinition.length === 0 && (e.multidimensionalDefinition = null)), this._serviceSourceType !== "mosaic-dataset" && e.multidimensionalDefinition == null ? null : e);
    }
    async _prepareForQuery(e, t) {
      var r;
      if (await this._fetchCapabilities((r = t) == null ? void 0 : r.signal), !this.capabilities.operations.supportsQuery)
        throw new $("imagery-layer:query-rasters", "query operation is not supported on the input image service");
      return e = R(e) ? re(Ie, e) : this.createQuery(), t = this._getRequestOptions(t), this.raster && (t.query = { ...t.query, raster: this.raster }), { query: e, requestOptions: t };
    }
    async _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null)
        return this._rasterJobHandler.connectionPromise;
      const e = new Yt();
      this._rasterJobHandler.connectionPromise = e.initialize().then(() => {
        this._rasterJobHandler.instance = e;
      }, () => null), await this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0;
    }
    _isSupportedRenderer(e) {
      const { rasterInfo: t, renderingRule: r } = this;
      return e.type === "unique-value" && this._hasRenderingRule(r) && t.bandCount === 1 && ["u8", "s8"].includes(t.pixelType) || Wt(this.rasterInfo).includes(this.renderer.type);
    }
    async _fetchCapabilities(e) {
      return this.capabilities || await this._fetchServiceInfo(e), this.capabilities;
    }
    async _fetchServiceInfo(e) {
      var t;
      let r = this.sourceJSON;
      if (!r) {
        const { data: s, ssl: o } = await I(this.parsedUrl.path, { query: this._getQueryParams(), signal: e });
        r = s, this.sourceJSON = r, o && (this.url = this.url.replace(/^http:/i, "https:"));
      }
      if (((t = r.capabilities) == null ? void 0 : t.toLowerCase().split(",").map((s) => s.trim()).indexOf("tilesonly")) > -1)
        throw new $("imagery-layer:fetch-service-info", "use ImageryTileLayer to open tiles-only image services");
      this.read(r, { origin: "service", url: this.parsedUrl });
    }
    _isMosaicDataset(e) {
      var t;
      return e.serviceSourceType ? e.serviceSourceType === "esriImageServiceSourceTypeMosaicDataset" : ((t = e.fields) == null ? void 0 : t.length) > 0;
    }
    _isMosaicRuleSupported(e) {
      var t;
      if (!e)
        return !1;
      const r = this._isMosaicDataset(e), s = e.currentVersion >= 10.71 && e.hasMultidimensions && e.timeInfo && !(e.objectIdField && ((t = e.fields) == null ? void 0 : t.length) > 1);
      return r || s;
    }
    _isVectorFieldResampleFunction(e) {
      if (!R(e))
        return !1;
      const { functionName: t, functionArguments: r } = e, s = (t == null ? void 0 : t.toLowerCase()) === "resample", o = (r == null ? void 0 : r.ResampleType) || (r == null ? void 0 : r.resampleType);
      return s && (o === 7 || o === 10);
    }
    _isPicture() {
      return !this.format || this.format.indexOf("jpg") > -1 || this.format.indexOf("png") > -1;
    }
    _configRenderer(e) {
      if (!this._isPicture() && !this.pixelFilter) {
        if (!this.bandIds && this.rasterInfo.bandCount >= 3) {
          const o = Kt(this.rasterInfo);
          !o || this.rasterInfo.bandCount === 3 && o[0] === 0 && o[1] === 1 && o[2] === 2 || (this.bandIds = o);
        }
        var t, r;
        e || (e = Xt(this.rasterInfo, { bandIds: this.bandIds, variableName: this.renderingRule ? null : (t = this.mosaicRule) == null || (r = t.multidimensionalDefinition) == null ? void 0 : r[0].variableName }));
        const s = Zt(e.toJSON());
        this.symbolizer ? (this.symbolizer.rendererJSON = s, this.symbolizer.rasterInfo = this.rasterInfo) : this.symbolizer = new ii({ rendererJSON: s, rasterInfo: this.rasterInfo }), this.symbolizer.bind().success || (this.symbolizer = null);
      }
      return e;
    }
    _clonePixelData(e) {
      return e == null ? e : { extent: e.extent && e.extent.clone(), pixelBlock: R(e.pixelBlock) && e.pixelBlock.clone() };
    }
    _getQueryParams(e) {
      R(e == null ? void 0 : e.renderingRule) && typeof e.renderingRule != "string" && (e.renderingRule = this._getRenderingRuleString(e.renderingRule));
      const { raster: t, viewId: r } = this;
      return { raster: t, viewId: r, f: "json", ...e, ...this.customParameters };
    }
    _getRequestOptions(e) {
      return { ...e, query: { ...e == null ? void 0 : e.query, ...this.customParameters } };
    }
    _decodePixelBlock(e, t, r) {
      return this._rasterJobHandler.instance ? this._rasterJobHandler.instance.decode({ data: e, options: t }) : Qe(e, t, r);
    }
    async _fetchMultidimensionalInfo(e) {
      var t;
      const r = await I(this.parsedUrl.path + "/multidimensionalInfo", { query: this._getQueryParams(), signal: e }).then((s) => {
        var o;
        return (o = s.data) == null ? void 0 : o.multidimensionalInfo;
      });
      return (t = r.variables) != null && t.length && r.variables.forEach((s) => {
        var o;
        (o = s.statistics) != null && o.length && s.statistics.forEach((u) => {
          u.avg = u.mean, u.stddev = u.standardDeviation;
        });
      }), r;
    }
    async _getRasterFunctionInfos(e) {
      const t = this.sourceJSON.rasterFunctionInfos;
      if (this.serviceRasterInfo)
        return t;
      if (t && this.version >= 10.3) {
        var r;
        return t.length === 1 && t[0].name.toLowerCase() === "none" ? t : (r = (await I(this.parsedUrl.path + "/rasterFunctionInfos", { query: this._getQueryParams(), signal: e })).data) == null ? void 0 : r.rasterFunctionInfos;
      }
      return null;
    }
    async _fetchAuxiliaryRasterInfo(e) {
      const t = e && e.serviceInfo;
      if (!t)
        return Promise.reject(new $("imagery-layer:fetch-metadata", "valid serviceInfo is required"));
      const r = e.signal, s = !!(t.hasRasterAttributeTable && this.version >= 10.1) && I(this.parsedUrl.path + "/rasterAttributeTable", { query: this._getQueryParams({ renderingRule: this.version >= 10.1 ? e == null ? void 0 : e.renderingRule : null }), signal: r }).then((d) => De.fromJSON(d.data)).catch(() => null), o = !!(t.hasColormap && this.version >= 10.1) && I(this.parsedUrl.path + "/colormap", { query: this._getQueryParams({ renderingRule: this.version >= 10.6 ? e == null ? void 0 : e.renderingRule : null }), signal: r }).then((d) => {
        var h;
        return (h = d.data) == null ? void 0 : h.colormap;
      }), u = !!(t.hasHistograms && this.version >= 10.1) && I(this.parsedUrl.path + "/histograms", { query: this._getQueryParams({ renderingRule: this.version >= 10.1 ? e == null ? void 0 : e.renderingRule : null }), signal: r }).then((d) => {
        var h;
        return (h = d.data) == null ? void 0 : h.histograms;
      }), p = this.version >= 10.3 && I(this.parsedUrl.path + "/keyProperties", { query: this._getQueryParams({ renderingRule: e == null ? void 0 : e.renderingRule }), signal: r }).then((d) => d.data).catch(() => {
      }), c = !!(t.hasMultidimensions && this.version >= 10.3) && this._fetchMultidimensionalInfo(), m = await Promise.all([s, o, u, p, c]);
      let y = null;
      if (t.minValues && t.minValues.length === t.bandCount) {
        y = [];
        for (let d = 0; d < t.minValues.length; d++)
          y.push({ min: t.minValues[d], max: t.maxValues[d], avg: t.meanValues[d], stddev: t.stdvValues[d] });
      }
      const v = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - 0.1), f = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - 0.1), g = Z.fromJSON(t.spatialReference || t.extent.spatialReference);
      return new Fe({ width: v, height: f, bandCount: t.bandCount, extent: de.fromJSON(t.extent), spatialReference: g, pixelSize: new Q({ x: t.pixelSizeX, y: t.pixelSizeY, spatialReference: g }), pixelType: t.pixelType.toLowerCase(), statistics: y, attributeTable: m[0] || null, colormap: m[1] || null, histograms: m[2] || null, keyProperties: m[3] || {}, multidimensionalInfo: m[4] || null });
    }
    async _requestArrayBuffer(e) {
      var t;
      const { imageProps: r, requestAsImageElement: s, signal: o } = e;
      if (s && !this.pixelFilter && ((t = r.format) == null ? void 0 : t.indexOf("png")) > -1)
        return { imageElement: (await I(this.parsedUrl.path + "/exportImage", { responseType: "image", query: this._getQueryParams({ f: "image", ...e.imageServiceParameters }), signal: o })).data, params: r };
      const u = this._initJobHandler(), p = I(this.parsedUrl.path + "/exportImage", { responseType: "array-buffer", query: this._getQueryParams({ f: "image", ...e.imageServiceParameters }), signal: o }), c = (await Promise.all([p, u]))[0].data, m = r.format || "jpgpng";
      let y = m;
      if (y !== "bsq" && y !== "bip" && (y = ri(c)), !y)
        throw new $("imagery-layer:fetch-image", "unsupported format signature " + String.fromCharCode.apply(null, new Uint8Array(c)));
      const v = { signal: o };
      return { pixelData: { pixelBlock: await (m === "gif" || m === "bmp" || m.indexOf("png") > -1 && (y === "png" || y === "jpg") ? Qe(c, { useCanvas: !0, ...r }, v) : this._decodePixelBlock(c, { width: r.width, height: r.height, planes: null, pixelType: null, noDataValue: null, format: m }, v)), extent: r.extent }, params: r };
    }
    async _generateRasterInfo(e, t) {
      const { data: r } = await I(this.parsedUrl.path, { query: this._getQueryParams({ renderingRule: e }), ...t });
      return await this._fetchAuxiliaryRasterInfo({ serviceInfo: r, renderingRule: e, ...t });
    }
    _isValidCustomizedMosaicRule(e) {
      var t;
      return e && JSON.stringify(e.toJSON()) !== JSON.stringify((t = this._defaultServiceMosaicRule) == null ? void 0 : t.toJSON());
    }
    _updateMultidimensionalDefinition(e) {
      if (this._isValidCustomizedMosaicRule(this.mosaicRule))
        return;
      const t = e.variables[0].dimensions, r = "", s = [];
      for (const o in t)
        if (t.hasOwnProperty(o)) {
          const u = t[o], p = u.extent;
          let c = !0, m = [p[0]];
          u.hasRanges && u.hasRanges === !0 ? (c = !1, m = [u.values[0]]) : u.name.toLowerCase() === "stdz" && Math.abs(p[1]) <= Math.abs(p[0]) && (m = [p[1]]), s.push(new Pe({ variableName: r, dimensionName: t[o].name, isSlice: c, values: m }));
        }
      if (s.length > 0) {
        this.mosaicRule = this.mosaicRule || new q();
        const o = this.mosaicRule.multidimensionalDefinition;
        (!o || o && o.length <= 0) && (this.mosaicRule.multidimensionalDefinition = s);
      }
    }
    _formatAttributeValue(e, t) {
      if (typeof e == "string") {
        const r = this.popupTemplate && this.popupTemplate.fieldInfos, s = this._getFieldInfo(r, t), o = s && s.format;
        if (o) {
          let u, p;
          return e.trim().indexOf(",") > -1 ? (u = ",", p = u + " ", this._formatDelimitedString(e, u, p, o)) : e.trim().indexOf(";") > -1 ? (u = ";", p = u + " ", this._formatDelimitedString(e, u, p, o)) : e.trim().indexOf(" ") > -1 ? (u = p = " ", this._formatDelimitedString(e, u, p, o)) : this._formatNumberFromString(e, o);
        }
      }
      return e;
    }
    _getFieldInfo(e, t) {
      if (!e || !e.length || !t)
        return;
      const r = t.toLowerCase();
      let s;
      return e.some((o) => !(!o.fieldName || o.fieldName.toLowerCase() !== r && o.fieldName.toLowerCase() !== r.replace(/ /g, "_")) && (s = o, !0)), s;
    }
    _formatDelimitedString(e, t, r, s) {
      return e && t && r && s ? e.trim().split(t).map((o) => this._formatNumberFromString(o, s)).join(r) : e;
    }
    _formatNumberFromString(e, t) {
      if (!e || !t)
        return e;
      const r = Number(e);
      return isNaN(r) ? e : t.format(r);
    }
    _processVisibleRastersResponse(e, t) {
      t = t || {};
      const r = e.value, { templateRRFunctionNames: s, showNoDataRecords: o, returnDomainValues: u, templateFields: p } = t, c = e.processedValues;
      let m = e.catalogItems && e.catalogItems.features, y = e.properties && e.properties.Values && e.properties.Values.map((w) => w.replace(/ /gi, ", ")) || [];
      const v = this.objectIdField || "ObjectId", f = typeof r == "string" && r.toLowerCase().indexOf("nodata") > -1, g = [];
      if (r && !m && !f) {
        const w = {};
        w[v] = 0, y = [r], m = [new Nt(this.fullExtent, null, w)];
      }
      if (!m)
        return [];
      let d, h, x;
      this._updateResponseFieldNames(m, p), f && !o && (m = []);
      for (let w = 0; w < m.length; w++) {
        if (d = m[w], r != null) {
          if (h = y[w], x = this.renderingRule && c && c.length > 0 && s && s.length > 0 && s.indexOf(this.renderingRule.functionName) > -1 ? c[s.indexOf(this.renderingRule.functionName)] : r, h.toLowerCase() === "nodata" && !o)
            continue;
          const P = "Raster.ItemPixelValue", F = "Raster.ServicePixelValue";
          d.attributes[P] = this._formatAttributeValue(h, P), d.attributes[F] = this._formatAttributeValue(x, F), this._updateFeatureWithMagDirValues(d, h);
          const O = this.fields && this.fields.length > 0;
          let k = this.renderingRule && R(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable ? O ? h : r : x;
          this.renderingRule || (k = O ? h : r), this._updateFeatureWithRasterAttributeTableValues(d, k);
        }
        if (d.sourceLayer = d.layer = this, u && this._updateFeatureWithDomainValues(d), s && c && s.length === c.length)
          for (let P = 0; P < s.length; P++) {
            const F = "Raster.ServicePixelValue." + s[P];
            d.attributes[F] = this._formatAttributeValue(c[P], F);
          }
        g.push(m[w]);
      }
      return g;
    }
    _updateFeatureWithRasterAttributeTableValues(e, t) {
      const r = this.rasterInfo && this.rasterInfo.attributeTable || R(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable, s = r && r.features;
      if (!s)
        return;
      const o = r.fields, u = o.map((m) => m.name).filter((m) => m.toLowerCase() === "value"), p = u && u[0];
      if (!p)
        return;
      const c = s.filter((m) => m.attributes[p] === (t != null ? parseInt(t, 10) : null));
      c && c[0] && o.forEach((m) => {
        const y = this.rasterAttributeTableFieldPrefix + m.name;
        e.attributes[y] = this._formatAttributeValue(c[0].attributes[m.name], y);
      });
    }
    _updateFeatureWithMagDirValues(e, t) {
      if (this.serviceDataType !== "esriImageServiceDataTypeVector-UV" && this.serviceDataType !== "esriImageServiceDataTypeVector-MagDir")
        return;
      const r = t.split(/,\s*/).map((c) => parseFloat(c)), s = r.map((c) => [c]), o = r.map((c) => ({ minValue: c, maxValue: c, noDataValue: null })), u = new ni({ height: 1, width: 1, pixelType: "f32", pixels: s, statistics: o });
      this.pixelFilter != null && this.pixelFilter({ pixelBlock: u, extent: new de(0, 0, 0, 0, this.spatialReference) });
      const p = this.serviceDataType === "esriImageServiceDataTypeVector-MagDir" ? [u.pixels[0][0], u.pixels[1][0]] : ai([u.pixels[0][0], u.pixels[1][0]]);
      e.attributes["Raster.Magnitude"] = p[0], e.attributes["Raster.Direction"] = p[1];
    }
    _updateFeatureWithDomainValues(e) {
      const t = this.fields && this.fields.filter((r) => r.domain && r.domain.type === "coded-value");
      t != null && t.forEach((r) => {
        const s = e.attributes[r.name];
        if (s != null) {
          const o = r.domain.codedValues.find((u) => u.code === s);
          o && (e.attributes[r.name] = o.name);
        }
      });
    }
    _updateResponseFieldNames(e, t) {
      if (!t || t.length < 1)
        return;
      const r = this.fieldsIndex;
      R(r) && e.forEach((s) => {
        if (s && s.attributes) {
          for (const o of t)
            if (r.has(o)) {
              const u = r.get(o).name;
              u !== o && (s.attributes[o] = s.attributes[u], delete s.attributes[u]);
            }
        }
      });
    }
    _getRenderingRuleString(e) {
      if (this._hasRenderingRule(e)) {
        var t;
        let r = e.toJSON();
        return r = (t = r.rasterFunctionDefinition) != null ? t : r, (r.thumbnail || r.thumbnailEx) && (r.thumbnail = r.thumbnailEx = null), JSON.stringify(r);
      }
      return null;
    }
    _hasRenderingRule(e) {
      return e && e.functionName && e.functionName.toLowerCase() !== "none";
    }
    _updateRenderingRulesFunctionName(e, t) {
      if (!e || e.length < 1)
        return;
      if (e === "Raw")
        return e.replace("Raw", "None");
      const r = e.toLowerCase().replace(/ /gi, "_");
      return t.has(r) ? t.get(r) : e;
    }
    _isRFTJson(e) {
      return e && e.name && e.arguments && e.function && e.hasOwnProperty("functionType");
    }
    _readCapabilities(e) {
      const t = e.capabilities ? e.capabilities.toLowerCase().split(",").map((y) => y.trim()) : ["image", "catalog"], { currentVersion: r, advancedQueryCapabilities: s, maxRecordCount: o } = e, u = t.indexOf("image") > -1, p = e.serviceDataType === "esriImageServiceDataTypeElevation", c = !!(e.spatialReference || e.extent && e.extent.spatialReference), m = t.includes("edit");
      return { data: { supportsAttachment: !1 }, operations: { supportsComputeHistograms: u, supportsExportImage: u, supportsIdentify: u, supportsMeasure: t.indexOf("mensuration") > -1 && c, supportsDownload: t.indexOf("download") > -1, supportsQuery: t.indexOf("catalog") > -1 && e.fields && e.fields.length > 0, supportsGetSamples: r >= 10.2 && u, supportsProject: r >= 10.3 && u, supportsComputeStatisticsHistograms: r >= 10.4 && u, supportsQueryBoundary: r >= 10.6 && u, supportsCalculateVolume: r >= 10.7 && p, supportsComputePixelLocation: r >= 10.7 && t.indexOf("catalog") > -1, supportsComputeAngles: r >= 10.91, supportsAdd: m, supportsDelete: m, supportsEditing: m, supportsUpdate: m, supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsChangeTracking: !1, supportsQueryAttachments: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsExceedsLimitStatistics: !1 }, query: { maxRecordCount: o, maxRecordCountFactor: void 0, supportsStatistics: !(s == null || !s.supportsStatistics), supportsOrderBy: !(s == null || !s.supportsOrderBy), supportsDistinct: !(s == null || !s.supportsDistinct), supportsPagination: !(s == null || !s.supportsPagination), supportsStandardizedQueriesOnly: !(s == null || !s.useStandardizedQueries), supportsPercentileStatistics: !(s == null || !s.supportsPercentileStatistics), supportsCentroid: !(s == null || !s.supportsReturningGeometryCentroid), supportsDistance: !(s == null || !s.supportsQueryWithDistance), supportsExtent: !(s == null || !s.supportsReturningQueryExtent), supportsGeometryProperties: !(s == null || !s.supportsReturningGeometryProperties), supportsHavingClause: !(s == null || !s.supportsHavingClause), supportsQuantization: !1, supportsQuantizationEditMode: !1, supportsQueryGeometry: !1, supportsResultType: !1, supportsMaxRecordCountFactor: !1, supportsSqlExpression: !1, supportsTopFeaturesQuery: !1, supportsQueryByOthers: !1, supportsHistoricMoment: !1, supportsFormatPBF: !1, supportsDisjointSpatialRelationship: !1, supportsCacheHint: !1, supportsSpatialAggregationStatistics: !1, supportedSpatialAggregationStatistics: { envelope: !1, centroid: !1, convexHull: !1 }, supportsDefaultSpatialReference: !(s == null || !s.supportsDefaultSR), supportsCompactGeometry: !1, standardMaxRecordCount: void 0, tileMaxRecordCount: void 0 } };
    }
  };
  return a([l()], i.prototype, "_functionRasterInfos", void 0), a([l()], i.prototype, "_rasterJobHandler", void 0), a([l({ dependsOn: ["_serviceSupportsMosaicRule"] })], i.prototype, "_defaultServiceMosaicRule", void 0), a([C("_defaultServiceMosaicRule", ["defaultMosaicMethod"])], i.prototype, "readDefaultServiceMosaicRule", null), a([l()], i.prototype, "_cachedRendererJson", void 0), a([l({ readOnly: !0 })], i.prototype, "_serviceSourceType", void 0), a([C("_serviceSourceType", ["serviceSourceType", "fields"])], i.prototype, "readServiceSourceType", null), a([l({ readOnly: !0 })], i.prototype, "_serviceSupportsMosaicRule", void 0), a([C("_serviceSupportsMosaicRule", ["currentVersion", "fields"])], i.prototype, "readServiceSupportsMosaicRule", null), a([l()], i.prototype, "rasterAttributeTableFieldPrefix", void 0), a([l({ readOnly: !0 })], i.prototype, "rasterFunctionNamesIndex", null), a([l()], i.prototype, "adjustAspectRatio", void 0), a([l({ readOnly: !0 }), L("serviceRasterInfo.bandCount")], i.prototype, "bandCount", void 0), a([l({ type: [ce], json: { write: !0 } })], i.prototype, "bandIds", void 0), a([C("bandIds")], i.prototype, "readBandIds", null), a([l({ readOnly: !0, json: { read: !1 } })], i.prototype, "capabilities", void 0), a([C("service", "capabilities", ["capabilities", "currentVersion", "serviceDataType"])], i.prototype, "readCapabilities", null), a([l({ type: Number })], i.prototype, "compressionQuality", void 0), a([D("compressionQuality")], i.prototype, "writeCompressionQuality", null), a([l({ type: Number })], i.prototype, "compressionTolerance", void 0), a([D("compressionTolerance")], i.prototype, "writeCompressionTolerance", null), a([l({ json: { read: { source: "copyrightText" } } })], i.prototype, "copyright", void 0), a([l({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), a([l({ readOnly: !0, constructOnly: !0 })], i.prototype, "exportImageServiceParameters", void 0), a([l()], i.prototype, "rasterInfo", void 0), a([l({ readOnly: !0, type: [te] })], i.prototype, "fields", void 0), a([l({ readOnly: !0 })], i.prototype, "fieldsIndex", null), a([l({ type: ["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"], json: { write: !0 } })], i.prototype, "format", null), a([C("service", "format", ["serviceDataType"])], i.prototype, "readFormat", null), a([l({ type: de })], i.prototype, "fullExtent", void 0), a([l({ readOnly: !0 })], i.prototype, "hasMultidimensions", void 0), a([l({ json: { read: { source: "maxImageHeight" } } })], i.prototype, "imageMaxHeight", void 0), a([l({ json: { read: { source: "maxImageWidth" } } })], i.prototype, "imageMaxWidth", void 0), a([l({ type: String, json: { type: Y.jsonValues, read: Y.read, write: Y.write } })], i.prototype, "interpolation", void 0), a([l()], i.prototype, "minScale", void 0), a([C("service", "minScale")], i.prototype, "readMinScale", null), a([l()], i.prototype, "maxScale", void 0), a([C("service", "maxScale")], i.prototype, "readMaxScale", null), a([l({ type: q })], i.prototype, "mosaicRule", null), a([C("mosaicRule", ["mosaicRule", "defaultMosaicMethod"])], i.prototype, "readMosaicRule", null), a([D("mosaicRule")], i.prototype, "writeMosaicRule", null), a([l({ readOnly: !0 }), L("serviceRasterInfo.multidimensionalInfo")], i.prototype, "multidimensionalInfo", void 0), a([l({ json: { type: ce } })], i.prototype, "noData", void 0), a([D("noData")], i.prototype, "writeNoData", null), a([l({ type: String, json: { type: ye.jsonValues, read: ye.read, write: ye.write } })], i.prototype, "noDataInterpretation", void 0), a([l({ type: String, readOnly: !0, json: { read: { source: ["fields"] } } })], i.prototype, "objectIdField", void 0), a([C("objectIdField")], i.prototype, "readObjectIdField", null), a([l({})], i.prototype, "geometryType", void 0), a([l({})], i.prototype, "typeIdField", void 0), a([l({})], i.prototype, "types", void 0), a([l({ readOnly: !0 })], i.prototype, "parsedUrl", null), a([l({ readOnly: !0 }), L("serviceRasterInfo.pixelSize.x")], i.prototype, "pixelSizeX", void 0), a([l({ readOnly: !0 }), L("serviceRasterInfo.pixelSize.y")], i.prototype, "pixelSizeY", void 0), a([l({ type: Function })], i.prototype, "pixelFilter", void 0), a([l()], i.prototype, "raster", void 0), a([l()], i.prototype, "viewId", void 0), a([l({ types: Qt, json: { name: "layerDefinition.drawingInfo.renderer", origins: { "web-scene": { types: Gt, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e) => ({ enabled: e && e.type !== "vector-field" && e.type !== "flow" }) } } } } })], i.prototype, "renderer", null), a([C("renderer")], i.prototype, "readRenderer", null), a([D("renderer")], i.prototype, "writeRenderer", null), a([l()], i.prototype, "symbolizer", void 0), a([l(ft)], i.prototype, "opacity", void 0), a([l({ readOnly: !0 }), L("serviceRasterInfo.attributeTable")], i.prototype, "rasterAttributeTable", void 0), a([l({ readOnly: !0 })], i.prototype, "rasterFields", null), a([l({ constructOnly: !0 })], i.prototype, "rasterFunctionInfos", void 0), a([l({ type: b })], i.prototype, "renderingRule", null), a([C("renderingRule", ["renderingRule", "rasterFunctionInfos"])], i.prototype, "readRenderingRule", null), a([D("renderingRule")], i.prototype, "writeRenderingRule", null), a([l()], i.prototype, "serviceDataType", void 0), a([l({ readOnly: !0, type: Z })], i.prototype, "spatialReference", void 0), a([C("spatialReference", ["spatialReference", "extent"])], i.prototype, "readSpatialReference", null), a([l({ json: { type: Te.jsonValues } })], i.prototype, "pixelType", void 0), a([C("pixelType")], i.prototype, "readPixelType", null), a([D("pixelType")], i.prototype, "writePixelType", null), a([l({ constructOnly: !0, type: Fe })], i.prototype, "serviceRasterInfo", void 0), a([l()], i.prototype, "sourceJSON", void 0), a([l(gt)], i.prototype, "url", void 0), a([l({ readOnly: !0 })], i.prototype, "version", void 0), a([C("version", ["currentVersion", "fields", "timeInfo"])], i.prototype, "readVersion", null), i = a([M("geoscene.layers.mixins.ArcGISImageService")], i), i;
};
let z = class extends Pt(Ct(Ot(_t(Vt(jt(Ji(Mt(At($t(kt)))))))))) {
  constructor(...n) {
    super(...n), this.legendEnabled = !0, this.isReference = null, this.operationalLayerType = "ArcGISImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.type = "imagery";
  }
  normalizeCtorArgs(n, i) {
    return typeof n == "string" ? { url: n, ...i } : n;
  }
  load(n) {
    const i = R(n) ? n.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, n).catch(Jt).then(() => this._fetchService(i))), Promise.resolve(this);
  }
  writeOperationalLayerType(n, i, e) {
    var t;
    const r = ((t = this.renderer) == null ? void 0 : t.type) === "vector-field";
    i[e] = r ? "ArcGISImageServiceVectorLayer" : "ArcGISImageServiceLayer";
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(n) {
    const i = this.rasterFields, e = this.title, t = /* @__PURE__ */ new Set();
    let r = !1, s = !1;
    this.capabilities && (r = this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0, s = r && (this.serviceDataType === "esriImageServiceDataTypeVector-UV" || this.serviceDataType === "esriImageServiceDataTypeVector-MagDir"));
    const o = /* @__PURE__ */ new Set();
    r && (o.add("raster.itempixelvalue"), s && o.add("raster.magnitude").add("raster.direction"));
    for (const u of i) {
      const p = u.name.toLowerCase();
      o.has(p) || p.indexOf("raster.servicepixelvalue.") > -1 || t.add(u.name);
    }
    return Et({ fields: i, title: e }, { ...n, visibleFieldNames: t });
  }
  queryFeatures(n, i) {
    return this.queryRasters(n, i).then((e) => {
      if (e != null && e.features)
        for (const t of e.features)
          t.layer = t.sourceLayer = this;
      return e;
    });
  }
  queryFeatureCount(n, i) {
    return this.queryRasterCount(n, i);
  }
  redraw() {
    this.emit("redraw");
  }
  serviceSupportsSpatialReference(n) {
    return zt(this, n);
  }
};
a([l(Lt)], z.prototype, "legendEnabled", void 0), a([l({ type: ["show", "hide"] })], z.prototype, "listMode", void 0), a([l({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], z.prototype, "isReference", void 0), a([l({ type: ["ArcGISImageServiceLayer"], json: { origins: { "web-map": { type: ["ArcGISImageServiceLayer", "ArcGISImageServiceVectorLayer"], read: !1, write: { target: "layerType", ignoreOrigin: !0 } } } } })], z.prototype, "operationalLayerType", void 0), a([D("web-map", "operationalLayerType")], z.prototype, "writeOperationalLayerType", null), a([l(qt)], z.prototype, "popupEnabled", void 0), a([l({ type: Ut, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], z.prototype, "popupTemplate", void 0), a([l({ readOnly: !0 })], z.prototype, "defaultPopupTemplate", null), a([l({ readOnly: !0, json: { read: !1 } })], z.prototype, "type", void 0), z = a([M("geoscene.layers.ImageryLayer")], z);
const Xi = z;
export {
  Xi as default
};

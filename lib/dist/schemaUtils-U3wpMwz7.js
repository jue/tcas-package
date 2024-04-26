import { s as U, fg as G, e as _, d as ce, bD as de, a as pe, h9 as ie, ha as W, S as le, Z as q, l as A, hb as N, y as g, r as B, b9 as fe, w as K, fh as X } from "./index-Ek1MTSEY.js";
import { A as L, E as w, W as me } from "./Utils-1SmxxQP6.js";
import { o as ye } from "./visualVariablesUtils-EcwyP76J.js";
import { L as V } from "./MaterialKey-HWb_r4Z5.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./ExpandedCIM-tfKWt7nu.js";
import { x as j } from "./MD5-ekk-4Jqp.js";
import { e as ge } from "./util-_ClfQE9K.js";
function be(e) {
  if (!e)
    return L.NONE;
  let i = 0;
  for (const t of e)
    if (t.type === "size") {
      const l = ye(t);
      i |= l, t.target === "outline" && (i |= l << 4);
    } else
      t.type === "color" ? i |= L.COLOR : t.type === "opacity" ? i |= L.OPACITY : t.type === "rotation" && (i |= L.ROTATION);
  return i;
}
function E(e) {
  if (e.type === "line-marker") {
    var i;
    return { type: "line-marker", color: (i = e.color) == null ? void 0 : i.toJSON(), placement: e.placement, style: e.style };
  }
  return e.constructor.fromJSON(e.toJSON()).toJSON();
}
function F(e) {
  return hydrateKey(e);
}
function S(e, i, t) {
  if (!e)
    return null;
  switch (e.type) {
    case "simple-fill":
    case "picture-fill":
      return ve(e, i, t);
    case "simple-marker":
    case "picture-marker":
      return Se(e, i, t);
    case "simple-line":
      return xe(e, i, t);
    case "text":
      return ze(e, i, t);
    case "label":
      return he(e, i, t);
    case "cim":
      return { type: "cim", rendererKey: i.vvFlags, data: e.data, maxVVSize: i.maxVVSize };
    case "CIMSymbolReference":
      return { type: "cim", rendererKey: i.vvFlags, data: e, maxVVSize: i.maxVVSize };
    case "web-style":
      return { ...E(e), type: "web-style", hash: e.hash(), rendererKey: i.vvFlags, maxVVSize: i.maxVVSize };
    default:
      throw new Error(`symbol not supported ${e.type}`);
  }
}
function he(e, i, t) {
  const l = e.toJSON(), s = V(w.LABEL, { ...i, placement: l.labelPlacement });
  return { materialKey: t ? F(s) : s, hash: e.hash(), ...l, labelPlacement: l.labelPlacement };
}
function ve(e, i, t) {
  const l = i.supportsOutlineFills, s = V(w.FILL, { ...i, isOutlinedFill: l }), n = t ? F(s) : s, a = e.clone(), r = a.outline;
  i.supportsOutlineFills || (a.outline = null);
  const o = { materialKey: n, hash: a.hash(), isOutlinedFill: !!i.supportsOutlineFills, ...E(a) };
  if (i.supportsOutlineFills)
    return o;
  const u = [];
  if (u.push(o), r) {
    const c = V(w.LINE, { ...i, isOutline: !0 }), f = { materialKey: t ? F(c) : c, hash: r.hash(), ...E(r) };
    u.push(f);
  }
  return { type: "composite-symbol", layers: u, hash: u.reduce((c, f) => f.hash + c, "") };
}
function xe(e, i, t) {
  const l = V(w.LINE, i), s = t ? F(l) : l, n = e.clone(), a = n.marker;
  n.marker = null;
  const r = [];
  if (r.push({ materialKey: s, hash: n.hash(), ...E(n) }), a) {
    var o;
    const u = V(w.MARKER, i), c = t ? F(u) : u;
    a.color = (o = a.color) != null ? o : n.color, r.push({ materialKey: c, hash: a.hash(), lineWidth: n.width, ...E(a) });
  }
  return { type: "composite-symbol", layers: r, hash: r.reduce((u, c) => c.hash + u, "") };
}
function Se(e, i, t) {
  const l = V(w.MARKER, i), s = t ? F(l) : l, n = E(e);
  return { materialKey: s, hash: e.hash(), ...n, angle: e.angle, maxVVSize: i.maxVVSize };
}
function ze(e, i, t) {
  const l = V(w.TEXT, i), s = t ? F(l) : l, n = E(e);
  return { materialKey: s, hash: e.hash(), ...n, angle: e.angle, maxVVSize: i.maxVVSize };
}
const nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createSymbolSchema: S
}, Symbol.toStringTag, { value: "Module" }));
function we(e) {
  if (!("visualVariables" in e) || !e.hasVisualVariables("size"))
    return 0;
  const i = e.getVisualVariablesForType("size");
  if (!i[0])
    return 0;
  const t = i[0];
  if (t.target === "outline")
    return 0;
  if (t.transformationType === "stops")
    return t.stops.map((l) => l.size).reduce(P, 0);
  if (t.transformationType === "clamped-linear") {
    let l = -1 / 0, s = -1 / 0;
    return l = typeof t.maxSize == "number" ? t.maxSize : t.maxSize.stops.map((n) => n.size).reduce(P, 0), s = typeof t.minSize == "number" ? t.minSize : t.minSize.stops.map((n) => n.size).reduce(P, 0), Math.max(l, s);
  }
  return t.transformationType === "real-world-size" ? 30 : void 0;
}
function P(e, i) {
  return Math.max(e, i);
}
const C = 8, se = C - 2, Ve = U.getLogger("geoscene.renderers.visualVariables.support.utils"), rt = (e) => {
  if (!("visualVariables" in e) || !e.visualVariables || !e.visualVariables.length)
    return e;
  const i = e.clone(), t = i.visualVariables.map((l) => ne(l) ? re(l) : l);
  return i.visualVariables = t, i;
};
function Ee(e) {
  return e.map((i) => ne(i) ? re(i.clone()) : i);
}
function ne(e) {
  return (e.type === "size" || e.type === "color" || e.type === "opacity") && e.stops != null;
}
function re(e) {
  return e.stops = Ie(e.type, e.stops), e;
}
function $(e, i, t) {
  return (1 - t) * e + t * i;
}
function Fe(e, i) {
  const [t, ...l] = i, s = l.pop(), n = l[0].value, a = l[l.length - 1].value, r = (a - n) / se, o = [];
  for (let u = n; u < a; u += r) {
    let c = 0;
    for (; u >= l[c].value; )
      c++;
    const f = l[c], d = i[c - 1], m = u - d.value, h = f.value === d.value ? 1 : m / (f.value - d.value);
    if (e === "color") {
      const b = l[c], y = i[c - 1], p = b.color.clone();
      p.r = $(y.color.r, p.r, h), p.g = $(y.color.g, p.g, h), p.b = $(y.color.b, p.b, h), p.a = $(y.color.a, p.a, h), o.push({ value: u, color: p, label: b.label });
    } else if (e === "size") {
      const b = l[c], y = i[c - 1], p = G(b.size), M = $(G(y.size), p, h);
      o.push({ value: u, size: M, label: b.label });
    } else {
      const b = l[c], y = $(i[c - 1].opacity, b.opacity, h);
      o.push({ value: u, opacity: y, label: b.label });
    }
  }
  return [t, ...o, s];
}
function $e(e) {
  const [i, ...t] = e, l = t.pop();
  for (; t.length > se; ) {
    let s = 0, n = 0;
    for (let a = 1; a < t.length; a++) {
      const r = t[a - 1], o = t[a], u = Math.abs(o.value - r.value);
      u > n && (n = u, s = a);
    }
    t.splice(s, 1);
  }
  return [i, ...t, l];
}
function Ie(e, i) {
  return i.length <= C ? i : (Ve.warn(`Found ${i.length} Visual Variable stops, but MapView only supports ${C}. Displayed stops will be simplified.`), i.length > 2 * C ? Fe(e, i) : $e(i));
}
var J;
let R = J = class extends ie {
  writeLevels(e, i, t) {
    for (const l in e) {
      const s = this.levels[l];
      return void (i.stops = s);
    }
  }
  clone() {
    return new J({ axis: this.axis, field: this.field, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, maxDataValue: this.maxDataValue, maxSize: W(this.maxSize) ? this.maxSize.clone() : this.maxSize, minDataValue: this.minDataValue, minSize: W(this.minSize) ? this.minSize.clone() : this.minSize, normalizationField: this.normalizationField, stops: this.stops && this.stops.map((e) => e.clone()), target: this.target, useSymbolValue: this.useSymbolValue, valueRepresentation: this.valueRepresentation, valueUnit: this.valueUnit, legendOptions: this.legendOptions && this.legendOptions.clone(), levels: le(this.levels) });
  }
};
_([ce()], R.prototype, "levels", void 0), _([de("levels")], R.prototype, "writeLevels", null), R = J = _([pe("geoscene.views.2d.engine.LevelDependentSizeVariable")], R);
const ae = U.getLogger("geoscene.views.2d.layers.support.clusterUtils");
q.add("geoscene-cluster-arcade-enabled", !0);
const Te = q("geoscene-cluster-arcade-enabled"), Oe = (e, i, t, l) => {
  const s = i.clone();
  if (!Le(s))
    return s;
  if (t.fields)
    for (const n of t.fields)
      Ce(e, n);
  if ("visualVariables" in s) {
    const n = (s.visualVariables || []).filter((r) => r.valueExpression !== "$view.scale"), a = Ne(n);
    n.forEach((r) => {
      r.type === "rotation" ? r.field ? r.field = I(e, r.field, "avg_angle") : r.valueExpression && (r.field = k(e, r.valueExpression, "avg_angle"), r.valueExpression = null) : r.normalizationField ? (r.field = I(e, r.field, "norm", r.normalizationField), r.normalizationField = null) : r.field ? r.field = I(e, r.field, "avg") : (r.field = k(e, r.valueExpression, "avg"), r.valueExpression = null);
    }), A(a) && !Re(n) && (n.push(Me(t, l)), s.dynamicClusterSize = !0), s.visualVariables = n;
  }
  switch (s.type) {
    case "simple":
      break;
    case "unique-value":
      s.field ? s.field = I(e, s.field, "mode") : s.valueExpression && (s.field = k(e, s.valueExpression, "mode"), s.valueExpression = null);
      break;
    case "class-breaks":
      s.normalizationField ? (s.field = I(e, s.field, "norm", s.normalizationField), s.normalizationField = null) : s.field ? s.field = I(e, s.field, "avg") : (s.field = k(e, s.valueExpression, "avg"), s.valueExpression = null);
  }
  return s;
}, Ne = (e) => {
  for (const i of e)
    if (i.type === "size")
      return i;
  return null;
}, Re = (e) => {
  for (const i of e)
    if (i.field === "cluster_count")
      return !0;
  return !1;
}, Me = (e, i) => {
  const t = [new N({ value: 0, size: 0 }), new N({ value: 1 })];
  if (A(i))
    return new ie({ field: "cluster_count", stops: [...t, new N({ value: 2, size: 0 })] });
  const l = Object.keys(i).reduce((s, n) => ({ ...s, [n]: [...t, new N({ value: Math.max(2, i[n].minValue), size: e.clusterMinSize }), new N({ value: Math.max(3, i[n].maxValue), size: e.clusterMaxSize })] }), {});
  return new R({ field: "cluster_count", levels: l });
}, Le = (e) => {
  const i = (t) => ae.error(new g("Unsupported-renderer", t, { renderer: e }));
  if (e.type === "unique-value") {
    if (e.field2 || e.field3)
      return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"), !1;
  } else if (e.type === "class-breaks") {
    if (e.normalizationField) {
      const t = e.normalizationType;
      if (t !== "field")
        return i(`FeatureReductionCluster does not support a normalizationType of ${t}`), !1;
    }
  } else if (e.type !== "simple")
    return i(`FeatureReductionCluster does not support renderers of type ${e.type}`), !1;
  if (!Te) {
    if ("valueExpression" in e && e.valueExpression)
      return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"), !1;
    if (("visualVariables" in e && e.visualVariables || []).some((t) => !(!("valueExpression" in t) || !t.valueExpression)))
      return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"), !1;
  }
  return !0;
};
function ke(e, i, t) {
  switch (e) {
    case "avg":
    case "avg_angle":
      return `cluster_avg_${i}`;
    case "mode":
      return `cluster_type_${i}`;
    case "norm": {
      const l = t, s = "field", n = i.toLowerCase() + ",norm:" + s + "," + l.toLowerCase();
      return "cluster_avg_" + j(n);
    }
  }
}
function Ce(e, i) {
  const { name: t, outStatistic: l } = i, { onStatisticField: s, onStatisticValueExpression: n, statisticType: a } = l;
  if (n) {
    const r = j(n.toLowerCase());
    e.push({ name: t, outStatistic: { onStatisticField: r, onStatisticValueExpression: n, statisticType: a } });
  } else
    s ? e.push({ name: t, outStatistic: { onStatisticField: s, statisticType: a } }) : ae.error(new g("mapview-unsupported-field", "Unable to handle field", { field: i }));
}
function k(e, i, t) {
  const l = j(i), s = t === "mode" ? `cluster_type_${l}` : `cluster_avg_${l}`;
  return e.some((n) => n.name === s) || e.push({ name: s, outStatistic: { onStatisticField: l, onStatisticValueExpression: i, statisticType: t } }), s;
}
function I(e, i, t, l) {
  if (i === "cluster_count" || e.some((n) => n.name === i))
    return i;
  const s = ke(t, i, l);
  return e.some((n) => n.name === s) || (t === "norm" ? e.push({ name: s, outStatistic: { onStatisticField: i, onStatisticNormalizationField: l, statisticType: t } }) : e.push({ name: s, outStatistic: { onStatisticField: i, statisticType: t } })), s;
}
const T = U.getLogger("geoscene.views.2d.layers.features.schemaUtils"), v = "ValidationError", _e = { esriGeometryPoint: ["above-right", "above-center", "above-left", "center-center", "center-left", "center-right", "below-center", "below-left", "below-right"], esriGeometryPolygon: ["always-horizontal"], esriGeometryPolyline: ["center-along"], esriGeometryMultipoint: null };
function O(e) {
  let i = 0, t = 0, l = !1, s = !0, n = !0;
  if (B(e)) {
    if (t = we(e), "visualVariables" in e && (i = be(e.visualVariables || []), l = e.type === "dot-density"), e.type === "dictionary")
      return { maxVVSize: t, supportsOutlineFills: !1, vvFlags: i, stride: { fill: "default" } };
    if (!l) {
      const a = e.getSymbols();
      "backgroundFillSymbol" in e && e.backgroundFillSymbol && a.push(e.backgroundFillSymbol);
      for (const r of a)
        if (r.type === "cim" && (s = !1), r.type === "simple-fill" || r.type === "picture-fill") {
          const o = r.outline;
          o && o.style !== "none" && o.style !== "solid" && (n = !1);
          const u = o && o.style !== "none" && o.style !== "solid", c = r.type === "simple-fill" && r.style !== "none" && r.style !== "solid";
          (r.type === "picture-fill" || c || u) && (s = !1);
        }
    }
  }
  return l && (n = !1), { vvFlags: i, maxVVSize: t, supportsOutlineFills: n, stride: { fill: l ? "dot-density" : s ? "simple" : "default" } };
}
function Ke(e, i) {
  const t = e.labelPlacement, l = _e[i];
  if (!e.symbol)
    return T.warn("No ILabelClass symbol specified."), !0;
  if (!l)
    return T.error(new g("mapview-labeling:unsupported-geometry-type", `Unable to create labels for Feature Layer, ${i} is not supported`)), !0;
  if (!l.some((s) => s === t)) {
    const s = l[0];
    t && T.warn(`Found invalid label placement type ${t} for ${i}. Defaulting to ${s}`), e.labelPlacement = s;
  }
  return !1;
}
function Y(e, i) {
  const t = le(e);
  return t.some((l) => Ke(l, i)) ? [] : t;
}
function at(e) {
  return q("geoscene-2d-update-debug") && console.debug("Created new schema", Z(e, !0)), Z(e);
}
function Z(e, i = !1) {
  try {
    var t, l;
    const s = Be(e, i), n = {};
    return s.map((a) => Pe(n, e, a)), { source: { definitionExpression: e.definitionExpression, fields: e.fields.map((a) => a.toJSON()), gdbVersion: e.gdbVersion, historicMoment: (t = e.historicMoment) == null ? void 0 : t.getTime(), outFields: e.availableFields, pixelBuffer: e.pixelBuffer, spatialReference: e.spatialReference.toJSON(), timeExtent: (l = e.timeExtent) == null ? void 0 : l.toJSON(), customParameters: e.customParameters }, attributes: { fields: {}, indexCount: 0 }, processors: s, targets: n };
  } catch (s) {
    if (s.fieldName === v)
      return T.error(s), null;
    throw s;
  }
}
function Pe(e, i, t) {
  switch (t.target) {
    case "feature":
      return void Q(e, H(i), t);
    case "aggregate": {
      if (!("featureReduction" in i))
        return;
      const l = i.featureReduction;
      if (l.type === "selection")
        throw new g(v, "Mapview does not support `selection` reduction type", l);
      return Q(e, H(i), t), void De(e, l, t);
    }
  }
}
function oe(e, i) {
  for (const t in i) {
    const l = i[t];
    if (l.target !== e.name)
      continue;
    const s = e.attributes[t];
    s ? (s.context.mesh = s.context.mesh || l.context.mesh, s.context.storage = s.context.storage || l.context.storage) : e.attributes[t] = l;
  }
  return e;
}
function H(e) {
  var i, t, l, s, n;
  return [(i = (t = K(e.filter)) == null ? void 0 : t.toJSON()) != null ? i : null, (l = (s = K((n = K(e.featureEffect)) == null ? void 0 : n.filter)) == null ? void 0 : s.toJSON()) != null ? l : null];
}
function Q(e, i, t) {
  return e.feature || (e.feature = { name: "feature", input: "source", filters: i, attributes: {} }), oe(e.feature, t.attributes.fields), e;
}
function De(e, i, t) {
  return e.aggregate || (e.aggregate = { name: "aggregate", input: "feature", filters: null, attributes: {}, params: { clusterRadius: X(i.clusterRadius / 2), clusterPixelBuffer: 64 * Math.ceil(X(i.clusterMaxSize) / 64), fields: t.aggregateFields } }), oe(e.aggregate, t.attributes.fields), e;
}
function x(e, i) {
  return i.field ? z(e, { ...i, type: "field", field: i.field }) : i.valueExpression ? z(e, { ...i, type: "expression", valueExpression: i.valueExpression }) : { field: null, fieldIndex: null };
}
function z(e, i) {
  switch (i.type) {
    case "expression": {
      const t = i.valueExpression;
      if (!e.fields[t]) {
        const l = e.indexCount++;
        e.fields[t] = { ...i, name: t, fieldIndex: l };
      }
      return { fieldIndex: e.fields[t].fieldIndex };
    }
    case "label-expression": {
      const t = JSON.stringify(i.label);
      if (!e.fields[t]) {
        const l = e.indexCount++;
        e.fields[t] = { ...i, name: t, fieldIndex: l };
      }
      return { fieldIndex: e.fields[t].fieldIndex };
    }
    case "field": {
      const t = i.field;
      return i.target === "aggregate" && e.fields[t] || (e.fields[t] = { ...i, name: t }), { field: t };
    }
    case "statistic":
      return e.fields[i.name] = { ...i }, { field: i.name };
  }
}
function Be(e, i = !1) {
  const t = new Array();
  let l = 0;
  return t.push(Je(e, l++, i)), t;
}
function D(e, i, t, l, s, n = !1) {
  const a = z(i, { type: "label-expression", target: l, context: { mesh: !0 }, resultType: "string", label: { labelExpression: t.labelExpression, labelExpressionInfo: t.labelExpressionInfo ? { expression: t.labelExpressionInfo.expression } : null, symbol: !!t.symbol, where: t.where } }), { fieldIndex: r } = a, o = O(e);
  return { ...S(t, o, n), fieldIndex: r, target: l, index: s };
}
function Je(e, i, t = !1) {
  const l = { indexCount: 0, fields: {} }, s = "featureReduction" in e && e.featureReduction, n = s ? "aggregate" : "feature";
  if ("sublayers" in e) {
    const a = { type: "subtype", subtypeField: e.subtypeField, renderers: {}, stride: { fill: "default" } }, r = { type: "subtype", mapping: {}, target: "feature" }, o = { type: "subtype", classes: {} }, u = { type: "symbol", target: "feature", aggregateFields: [], attributes: l, storage: r, mesh: { matcher: a, aggregateMatcher: null, labels: o, sortKey: null } }, c = /* @__PURE__ */ new Set();
    let f = 0;
    for (const { renderer: d, subtypeCode: m, labelingInfo: h, labelsVisible: b } of e.sublayers) {
      const y = te(l, n, d, t), p = ee(l, n, d), M = b && h;
      if ("visualVariables" in d && d.visualVariables && d.visualVariables.length)
        throw new g(v, "Visual variables are currently not supported for subtype layers");
      if (y.type === "dictionary")
        throw new g(v, "Dictionary renderer is not supported in subtype layers");
      if (y.type === "subtype")
        throw new g(v, "Nested subtype renderers is not supported");
      if (B(p) && p.type === "subtype")
        throw new g(v, "Nested subtype storage is not supported");
      if (B(p) && p.type === "dot-density")
        throw new g(v, "Dot density attributes are not supported in subtype layers");
      if (c.has(m))
        throw new g(v, "Subtype codes for sublayers must be unique");
      c.add(m), a.renderers[m] = y, r.mapping[m] = p, M && (o.classes[m] = M.map((ue) => D(d, l, ue, "feature", f++, t)));
    }
    return u;
  }
  if (e.renderer.type === "heatmap") {
    const { blurRadius: a, fieldOffset: r, field: o } = e.renderer;
    return { type: "heatmap", aggregateFields: [], attributes: l, target: n, storage: null, mesh: { blurRadius: a, fieldOffset: r, field: x(l, { target: n, field: o, resultType: "numeric" }).field } };
  }
  {
    const a = [], r = n === "aggregate" ? Oe(a, e.renderer, s, null) : e.renderer;
    qe(l, a);
    const o = te(l, n, r, t);
    let u = null;
    const c = ee(l, n, r), f = ge(e.geometryType);
    let d = e.labelsVisible && e.labelingInfo || [], m = [];
    if (s) {
      if (s.type === "selection")
        throw new g(v, "Mapview does not support `selection` reduction type", s);
      if (s.symbol) {
        const p = O(r);
        u = { type: "simple", symbol: S(s.symbol, p, t), stride: p.stride };
      }
      m = s && s.labelsVisible && s.labelingInfo || [];
    }
    d = Y(d, f), m = Y(m, f);
    let h = 0;
    const b = [...d.map((p) => D(r, l, p, "feature", h++, t)), ...m.map((p) => D(r, l, p, "aggregate", h++, t))], y = Ue(l, e.orderBy);
    return { type: "symbol", target: n, attributes: l, aggregateFields: a, storage: c, mesh: { matcher: o, labels: { type: "simple", classes: b }, aggregateMatcher: u, sortKey: y } };
  }
}
function Ue(e, i) {
  if (A(i) || !i.length)
    return null;
  i.length > 1 && T.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${i.length}. All but the first will be discarded`);
  const t = i[0], l = t.order === "ascending" ? "asc" : "desc";
  return t.field ? { field: t.field, order: l } : t.valueExpression ? { fieldIndex: z(e, { type: "expression", target: "feature", valueExpression: t.valueExpression, resultType: "numeric" }).fieldIndex, order: l } : (T.error(new g(v, "Expected to find a field or valueExpression for OrderByInfo", t)), null);
}
function qe(e, i) {
  const t = { mesh: !0, storage: !0 };
  for (const l of i) {
    const { name: s, outStatistic: n } = l, { statisticType: a, onStatisticField: r } = n;
    let o = null, u = null, c = null;
    const f = "numeric", d = "feature";
    "onStatisticValueExpression" in n ? u = z(e, { type: "expression", target: d, valueExpression: n.onStatisticValueExpression, resultType: f }).fieldIndex : "onStatisticNormalizationField" in n ? (o = z(e, { type: "field", target: d, field: r, resultType: f }).field, c = n.onStatisticNormalizationField) : o = z(e, { type: "field", target: d, field: r, resultType: f }).field, z(e, { type: "statistic", target: "aggregate", name: s, context: t, inField: o, inNormalizationField: c, inFieldIndex: u, statisticType: a });
  }
}
function ee(e, i, t) {
  switch (t.type) {
    case "dot-density":
      return Ae(e, i, t.attributes);
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return je(e, i, t.visualVariables);
    case "heatmap":
      return null;
  }
}
function Ae(e, i, t) {
  return !t || !t.length ? { type: "dot-density", mapping: [], target: i } : { type: "dot-density", mapping: t.map((l, s) => {
    const { field: n, fieldIndex: a } = x(e, { valueExpression: l.valueExpression, field: l.field, resultType: "numeric", target: i });
    return { binding: s, field: n, fieldIndex: a };
  }), target: i };
}
function je(e, i, t) {
  if (!t || !t.length)
    return { type: "visual-variable", mapping: [], target: i };
  const l = { storage: !0 }, s = "numeric";
  return { type: "visual-variable", mapping: Ee(t).map((n) => {
    var a;
    const r = me(n.type), { field: o, fieldIndex: u } = x(e, { target: i, valueExpression: n.valueExpression, field: n.field, context: l, resultType: s });
    switch (n.type) {
      case "size":
        return n.valueExpression === "$view.scale" ? null : { type: "size", binding: r, field: o, fieldIndex: u, normalizationField: x(e, { target: i, field: n.normalizationField, context: l, resultType: s }).field, valueRepresentation: (a = n.valueRepresentation) != null ? a : null };
      case "color":
        return { type: "color", binding: r, field: o, fieldIndex: u, normalizationField: x(e, { target: i, field: n.normalizationField, context: l, resultType: s }).field };
      case "opacity":
        return { type: "opacity", binding: r, field: o, fieldIndex: u, normalizationField: x(e, { target: i, field: n.normalizationField, context: l, resultType: s }).field };
      case "rotation":
        return { type: "rotation", binding: r, field: o, fieldIndex: u };
    }
  }).filter((n) => n), target: i };
}
function te(e, i, t, l = !1) {
  const s = fe(e, { indexCount: 0, fields: {} });
  switch (t.type) {
    case "simple":
    case "dot-density":
      return Ge(s, t, l);
    case "class-breaks":
      return We(s, i, t, l);
    case "unique-value":
      return Xe(s, i, t, l);
    case "dictionary":
      return Ye(s, t, l);
  }
}
function Ge(e, i, t = !1) {
  const l = i.getSymbols(), s = l.length ? l[0] : null, n = O(i);
  return { type: "simple", symbol: S(s, n, t), stride: n.stride };
}
function We(e, i, t, l = !1) {
  const s = { mesh: !0, use: "renderer.field" }, n = t.backgroundFillSymbol, { field: a, fieldIndex: r } = x(e, { target: i, field: t.field, valueExpression: t.valueExpression, resultType: "numeric", context: s }), o = t.normalizationType, u = o === "log" ? "esriNormalizeByLog" : o === "percent-of-total" ? "esriNormalizeByPercentOfTotal" : o === "field" ? "esriNormalizeByField" : null, c = O(t), f = t.classBreakInfos.map((d) => ({ symbol: S(d.symbol, c, l), min: d.minValue, max: d.maxValue })).sort((d, m) => d.min - m.min);
  return { type: "interval", attributes: e.fields, field: a, fieldIndex: r, backgroundFillSymbol: S(n, c, l), defaultSymbol: S(t.defaultSymbol, c, l), intervals: f, normalizationField: t.normalizationField, normalizationTotal: t.normalizationTotal, normalizationType: u, isMaxInclusive: t.isMaxInclusive, stride: c.stride };
}
function Xe(e, i, t, l = !1) {
  const s = [], n = t.backgroundFillSymbol, a = { target: i, context: { mesh: !0 }, resultType: "string" };
  if (t.field && typeof t.field != "string")
    throw new g(v, "Expected renderer.field to be a string", t);
  const { field: r, fieldIndex: o } = x(e, { ...a, field: t.field, valueExpression: t.valueExpression }), u = O(t);
  for (const c of t.uniqueValueInfos)
    s.push({ value: "" + c.value, symbol: S(c.symbol, u, l) });
  return { type: "map", attributes: e.fields, field: r, fieldIndex: o, field2: x(e, { ...a, field: t.field2 }).field, field3: x(e, { ...a, field: t.field3 }).field, fieldDelimiter: t.fieldDelimiter, backgroundFillSymbol: S(n, u), defaultSymbol: S(t.defaultSymbol, u), map: s, stride: u.stride };
}
function Ye(e, i, t = !1) {
  const l = O(i);
  return { type: "dictionary", config: i.config, fieldMap: i.fieldMap, scaleExpression: i.scaleExpression, url: i.url, symbolOptions: l, stride: l.stride };
}
export {
  at as I,
  te as L,
  nt as a,
  Oe as c,
  Ne as d,
  Me as f,
  O as h,
  S as l,
  Le as m,
  rt as s
};
